(ns hello-quil-cljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def pi2 (* 2 3.14))
(def startpos (- 0 (/ pi2 4)))
(def taal 7)

(def speed 2)
(def part1 5)
(let [taal-range (vec (range 1 (inc taal)))
                                        ;tihai part
      tihai-part (->> (repeat 3 (range 1 (inc part1)))
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
                                        ;(remove (fn[[a b]] (nil? a)))
           (partition-by (fn [[a b]] (= a 1)))
                                        ;(mapv (fn[[a b]] (into (vec a) b)))
                                        ;(mapcat (fn[i n] (for [[a b] n] {:phase i :tihai-i a :taal-i b})) (range 1 4))
           )]
  (->> mark-parts
       rest
       (mapv #(remove (fn[[a b]] (nil? a)) %))
       (partition 2)
       (mapv (fn[[a b]] (into (vec a) b)))
       (mapcat (fn[i n] (for [[a b] n] {:phase i :tihai-i a :taal-i b})) (range 1 4))
       (into (mapv (fn[[a b]] {:phase 0 :taal-i b}) (first mark-parts)))
       (def states))
  )

;(-> states )
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
  (if (= 1 i)
    [(- startpos 0.1) (+ startpos 0.1)]  
    [startpos (+ startpos (* (/ pi2 denom) (dec i)))])
  )

(defn update-state
  [state]
  (let [mil (tick) 
        new-state (if (not=  mil (:seconds state))
                    (let [cpos (:ipos state)
                          ipos (if (= (-> states count dec ) cpos) 0 (inc cpos))]
                      (assoc state 
                             :ipos ipos
                             :seconds mil))
                    state)]
    new-state))

(defn draw-state [state]
                                        ; Clear the sketch by filling it with light-grey color.
  (enable-console-print!)
  (q/background 240)
  ; Set circle color.
  (q/fill 0 55 25)
                                        ; Calculate x and y coordinates of the circle.
  (q/text "sometext" 50 50 )
  (let [cur-state (states (:ipos state))
        cphase (:phase cur-state)
        [x y] [300 200]
        [a1 a2] (get-angle (:taal-i cur-state) taal)
        [b1 b2] (get-angle (:tihai-i cur-state) part1)
        ]
    (print (str "--" cur-state))
    (q/arc x y 100 100 a1 a2)
    (cond
      (= 1 cphase) (q/arc 100 400 100 100 b1 b2)
      (= 2 cphase) (q/arc 300 400 100 100 b1 b2)
      (= 3 cphase) (q/arc 500 400 100 100 b1 b2)
          )
    ))

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
