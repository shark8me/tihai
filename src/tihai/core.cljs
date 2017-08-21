(ns tihai.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def pi2 (* 2 3.14))
(def startpos (- 0 (/ pi2 4)))
(def taal 7)

(def speed 2)
;(def part1 5)
(def tihai-parts {:shareera 4 :aghata 1 :virama 2})
(def parts (->> tihai-parts vals (apply +)))

(defn replace-tihai-parts
  "replace ith bhaag of tihai with shareera/aghata/virama parts"
  [tihai-parts {:keys [tihai-i] :as m}]
  (let [{:keys [aghata shareera virama]} tihai-parts
        cnt (+ shareera aghata)
        cnt2 (+ cnt virama)
        ag (range shareera cnt)
        vi (range cnt cnt2)
        sh (range shareera)
        [ag vi sh] (mapv #(set (mapv inc %)) [ag vi sh])
        tparts (assoc {} :shareera sh
                      :aghata ag :virama vi)]
    (merge m (cond (sh tihai-i) {:sh tihai-i :ag 0 :vi 0}
                   (ag tihai-i) {:ag (- tihai-i shareera) :sh shareera :vi 0}
                   (vi tihai-i) {:vi (- tihai-i (+ shareera aghata)) :sh shareera :ag aghata}))))
(replace-tihai-parts {:shareera 5 :aghata 2 :virama 2} {:tihai-i 5})
(replace-tihai-parts {:shareera 5 :aghata 2 :virama 2} {:tihai-i 6})
(replace-tihai-parts {:shareera 5 :aghata 2 :virama 2} {:tihai-i 7})
(replace-tihai-parts {:shareera 5 :aghata 2 :virama 2} {:tihai-i 8})
(replace-tihai-parts {:shareera 5 :aghata 2 :virama 2} {:tihai-i 9})
(comment 
  (replace-tihai-parts tihai-parts {:tihai-i 2})
  (replace-tihai-parts {:shareera 5 :aghata 2 :virama 2} {:tihai-i 2}))

(let [taal-range (vec (range 1 (inc taal)))
                                        ;tihai part
      tihai-part (->> (conj (vec (repeat 2 (range 1 (inc parts))))
                            (range 1 (inc (+ (:aghata tihai-parts)
                                             (:shareera tihai-parts)))))
                      flatten
                      (partition-all speed)
                      (mapv vec)
                      rseq)
      c (inc (quot (count tihai-part) taal))
                                        ;taal part
      n (inc (- (* c taal) (count tihai-part)))
      taal-part (into [1] (vec (reverse (flatten (repeat c taal-range)))))
      joined (rseq (mapv vector tihai-part taal-part))
      prefix (-> joined first second)
      ;;prefix a cycle of the taal without the tihai part, to plan for the start
      joined (into (mapv (fn[i] [nil i])
                         (into taal-range (take-while #(not= prefix %) taal-range))) joined)
      mark-parts (->> joined 
           (mapcat (fn[[[a b] c]] [[a c] [b c]]))
           (partition-by (fn [[a b]] (= a 1))))]
  (->> mark-parts
       rest
       (mapv #(remove (fn[[a b]] (nil? a)) %))
       (partition 2)
       (mapv (fn[[a b]] (into (vec a) b)))
       (mapcat (fn[i n] (for [[a b] n] {:phase i :tihai-i a :taal-i b})) (range 1 4))
       (into (mapv (fn[[a b]] {:phase 0 :taal-i b}) (first mark-parts)))
       (mapv (fn[{:keys [phase] :as m}] (if (not= 0 phase) (replace-tihai-parts tihai-parts m) m)))
       (def states)
       )
  )

                                        ;(states 0)
                                        ;(states 8)
(defn tick
  []
  (quot (q/millis) 500))
(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  ;(q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 50 
   :seconds (tick) 
   :ipos 0})

(defn get-angle
  [i denom]
  (cond (= 1 i) [(- startpos 0.1) (+ startpos 0.1)]
        (= :full i) [startpos (+ startpos pi2)]
        :default [startpos (+ startpos (* (/ pi2 denom) (dec i)))])
  )

(defn update-state
  [state]
  (let [mil (tick) 
        new-state (if (not=  mil (:seconds state))
                    (let [cpos (:ipos state)
                          ipos (if (= (-> states count dec ) cpos) 1 (inc cpos))]
                      (assoc state 
                             :ipos ipos
                             :seconds mil))
                    state)]
    new-state))

(def ph1full {:vi-1 :full :ag-1 :full :sh-1 :full})
(def ph2full (merge ph1full {:vi-2 :full :ag-2 :full :sh-2 :full}))

(defn fill-sh
  "after the ag starts, make sh full. Similarly after virama starts, make ag full"
  [{:keys [phase] :as m}]
  (let [cfn (fn[m a b]
              (if (> (a m) 0) (assoc m b :full) m))]
    (cond
      (= 1 phase) (-> (cfn m :ag-1 :sh-1) (cfn :vi-1 :ag-1))
      (= 2 phase) (-> (cfn m :ag-2 :sh-2) (cfn :vi-2 :ag-2))
          (= 3 phase) (-> (cfn m :ag-3 :sh-3) )
          :default m)))

(defn add-prev-phases
  "add full indicators for previous phases. E.g. in phase 2, phase 1 should show full"
  [{:keys [phase] :as m}]
  (cond (= 2 phase) (merge ph1full m)
        (= 3 phase) (merge ph2full m)
        :default m))

(defn add-sh-ag-vi
  "add indicators for sh, ag and vi phases"
  [{:keys [taal-i phase vi ag sh] :as m}]
  (if (not= 0 phase) {:phase phase :taal-i taal-i (keyword (str "vi-" phase)) vi
                      (keyword (str "ag-" phase)) ag 
                      (keyword (str "sh-" phase)) sh} m))

(->> states
     (mapv add-sh-ag-vi)
     (mapv fill-sh)
     (mapv add-prev-phases)
   ;                                     last
                                        ;                                     rseq
    ;(take 4) 
     (def states))
                                        ;(-> g1)
(-> states)
(defn draw-state [state]
                                        ; Clear the sketch by filling it with light-grey color.
  (enable-console-print!)
  (q/background 240)
  ; Set circle color.
  (q/fill 0 55 25)
                                        ; Calculate x and y coordinates of the circle.
                                        ;(q/text "sometext" 50 50 )

  (let [
        cur-state (states (:ipos state))
        {:keys [sh-1 sh-2 sh-3 ag-1 ag-2 vi-1 vi-2 taal-i] :as m} cur-state
        ;;main taal
        [a1 a2] (get-angle taal-i taal)
        _ (q/arc 300 200 100 100 a1 a2)

        ;;first third
        [a1 a2] (get-angle sh-1 (:shareera tihai-parts))
        _ (q/arc 100 200 100 100 a1 a2)

        ;;aghata
        [a1 a2] (get-angle ag-1 (:aghata tihai-parts))
        _ (q/arc 175 300 50 50 a1 a2)

        ;;second third
        [a1 a2] (get-angle sh-2 (:shareera tihai-parts))
        _ (q/arc 300 400 100 100 a1 a2)

        ;;aghata
        [a1 a2] (get-angle ag-2 (:aghata tihai-parts))
        _ (q/arc 375 350 50 50 a1 a2)

        ;;final third
        [a1 a2] (get-angle sh-3 (:shareera tihai-parts))
        _ (q/arc 500 200 100 100 a1 a2)
        ]
    (print (str "--" cur-state))
    (if (not= 0 (:virama tihai-parts))
      ;;virama
      (let [[a1 a2] (get-angle vi-1 (:virama tihai-parts))
            _ (q/arc 225 350 50 50 a1 a2)
            [a1 a2] (get-angle vi-2 (:virama tihai-parts))]
        (q/arc 425 300 50 50 a1 a2)))))

(q/defsketch hello-quil-cljs
  :host "hello-quil-cljs"
  :size [600 600]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
