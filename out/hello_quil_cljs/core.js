// Compiled by ClojureScript 1.9.473 {}
goog.provide('hello_quil_cljs.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
hello_quil_cljs.core.pi2 = ((2) * 3.14);
hello_quil_cljs.core.startpos = ((0) - (hello_quil_cljs.core.pi2 / (4)));
hello_quil_cljs.core.taal = (7);
hello_quil_cljs.core.speed = (2);
hello_quil_cljs.core.part1 = (5);
var taal_range_10442 = cljs.core.vec.call(null,cljs.core.range.call(null,(1),(hello_quil_cljs.core.taal + (1))));
var tihai_part_10443 = cljs.core.rseq.call(null,cljs.core.mapv.call(null,cljs.core.vec,cljs.core.partition_all.call(null,hello_quil_cljs.core.speed,cljs.core.flatten.call(null,cljs.core.repeat.call(null,(3),cljs.core.range.call(null,(1),(hello_quil_cljs.core.part1 + (1))))))));
var c_10444 = (cljs.core.quot.call(null,cljs.core.count.call(null,tihai_part_10443),hello_quil_cljs.core.taal) + (1));
var n_10445 = (((c_10444 * hello_quil_cljs.core.taal) - cljs.core.count.call(null,tihai_part_10443)) + (1));
var taal_part_10446 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.flatten.call(null,cljs.core.repeat.call(null,c_10444,taal_range_10442)))));
var joined_10447 = cljs.core.rseq.call(null,cljs.core.mapv.call(null,cljs.core.vector,tihai_part_10443,taal_part_10446));
var prefix_10448 = cljs.core.second.call(null,cljs.core.first.call(null,joined_10447));
var joined_10449__$1 = cljs.core.into.call(null,cljs.core.mapv.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,i], null);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448))
,cljs.core.into.call(null,taal_range_10442,cljs.core.take_while.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448){
return (function (p1__10401_SHARP_){
return cljs.core.not_EQ_.call(null,prefix_10448,p1__10401_SHARP_);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448))
,taal_range_10442))),joined_10447);
var mark_parts_10450 = cljs.core.partition_by.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1){
return (function (p__10403){
var vec__10404 = p__10403;
var a = cljs.core.nth.call(null,vec__10404,(0),null);
var b = cljs.core.nth.call(null,vec__10404,(1),null);
return cljs.core._EQ_.call(null,a,(1));
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1))
,cljs.core.mapcat.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1){
return (function (p__10407){
var vec__10408 = p__10407;
var vec__10411 = cljs.core.nth.call(null,vec__10408,(0),null);
var a = cljs.core.nth.call(null,vec__10411,(0),null);
var b = cljs.core.nth.call(null,vec__10411,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__10408,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c__$1], null)], null);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1))
,joined_10449__$1));
hello_quil_cljs.core.states = cljs.core.into.call(null,cljs.core.mapv.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450){
return (function (p__10414){
var vec__10415 = p__10414;
var a = cljs.core.nth.call(null,vec__10415,(0),null);
var b = cljs.core.nth.call(null,vec__10415,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),(0),new cljs.core.Keyword(null,"taal-i","taal-i",259785791),b], null);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450))
,cljs.core.first.call(null,mark_parts_10450)),cljs.core.mapcat.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450){
return (function (i,n__$1){
var iter__7602__auto__ = ((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450){
return (function hello_quil_cljs$core$iter__10418(s__10419){
return (new cljs.core.LazySeq(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450){
return (function (){
var s__10419__$1 = s__10419;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10419__$1);
if(temp__4657__auto__){
var s__10419__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10419__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__10419__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__10421 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__10420 = (0);
while(true){
if((i__10420 < size__7601__auto__)){
var vec__10428 = cljs.core._nth.call(null,c__7600__auto__,i__10420);
var a = cljs.core.nth.call(null,vec__10428,(0),null);
var b = cljs.core.nth.call(null,vec__10428,(1),null);
cljs.core.chunk_append.call(null,b__10421,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phase","phase",575722892),i,new cljs.core.Keyword(null,"tihai-i","tihai-i",-426085866),a,new cljs.core.Keyword(null,"taal-i","taal-i",259785791),b], null));

var G__10451 = (i__10420 + (1));
i__10420 = G__10451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10421),hello_quil_cljs$core$iter__10418.call(null,cljs.core.chunk_rest.call(null,s__10419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10421),null);
}
} else {
var vec__10431 = cljs.core.first.call(null,s__10419__$2);
var a = cljs.core.nth.call(null,vec__10431,(0),null);
var b = cljs.core.nth.call(null,vec__10431,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phase","phase",575722892),i,new cljs.core.Keyword(null,"tihai-i","tihai-i",-426085866),a,new cljs.core.Keyword(null,"taal-i","taal-i",259785791),b], null),hello_quil_cljs$core$iter__10418.call(null,cljs.core.rest.call(null,s__10419__$2)));
}
} else {
return null;
}
break;
}
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450))
,null,null));
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450))
;
return iter__7602__auto__.call(null,n__$1);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450))
,cljs.core.range.call(null,(1),(4)),cljs.core.mapv.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450){
return (function (p__10434){
var vec__10435 = p__10434;
var a = cljs.core.nth.call(null,vec__10435,(0),null);
var b = cljs.core.nth.call(null,vec__10435,(1),null);
return cljs.core.into.call(null,cljs.core.vec.call(null,a),b);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450))
,cljs.core.partition.call(null,(2),cljs.core.mapv.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450){
return (function (p1__10402_SHARP_){
return cljs.core.remove.call(null,((function (taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450){
return (function (p__10438){
var vec__10439 = p__10438;
var a = cljs.core.nth.call(null,vec__10439,(0),null);
var b = cljs.core.nth.call(null,vec__10439,(1),null);
return (a == null);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450))
,p1__10402_SHARP_);
});})(taal_range_10442,tihai_part_10443,c_10444,n_10445,taal_part_10446,joined_10447,prefix_10448,joined_10449__$1,mark_parts_10450))
,cljs.core.rest.call(null,mark_parts_10450))))));
hello_quil_cljs.core.tick = (function hello_quil_cljs$core$tick(){
return cljs.core.quot.call(null,quil.core.millis.call(null),(500));
});
hello_quil_cljs.core.setup = (function hello_quil_cljs$core$setup(){
quil.core.frame_rate.call(null,(30));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(50),new cljs.core.Keyword(null,"seconds","seconds",-445266194),hello_quil_cljs.core.tick.call(null),new cljs.core.Keyword(null,"ipos","ipos",-2138434215),(0)], null);
});
hello_quil_cljs.core.get_angle = (function hello_quil_cljs$core$get_angle(i,denom){
if(cljs.core._EQ_.call(null,(1),i)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hello_quil_cljs.core.startpos - 0.1),(hello_quil_cljs.core.startpos + 0.1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_quil_cljs.core.startpos,(hello_quil_cljs.core.startpos + ((hello_quil_cljs.core.pi2 / denom) * (i - (1))))], null);
}
});
hello_quil_cljs.core.update_state = (function hello_quil_cljs$core$update_state(state){
var mil = hello_quil_cljs.core.tick.call(null);
var new_state = ((cljs.core.not_EQ_.call(null,mil,new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(state)))?(function (){var cpos = new cljs.core.Keyword(null,"ipos","ipos",-2138434215).cljs$core$IFn$_invoke$arity$1(state);
var ipos = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,hello_quil_cljs.core.states) - (1)),cpos))?(0):(cpos + (1)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ipos","ipos",-2138434215),ipos,new cljs.core.Keyword(null,"seconds","seconds",-445266194),mil);
})():state);
return new_state;
});
hello_quil_cljs.core.draw_state = (function hello_quil_cljs$core$draw_state(state){
cljs.core.enable_console_print_BANG_.call(null);

quil.core.background.call(null,(240));

quil.core.fill.call(null,(0),(55),(25));

quil.core.text.call(null,"sometext",(50),(50));

var cur_state = hello_quil_cljs.core.states.call(null,new cljs.core.Keyword(null,"ipos","ipos",-2138434215).cljs$core$IFn$_invoke$arity$1(state));
var cphase = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(cur_state);
var vec__10461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(200)], null);
var x = cljs.core.nth.call(null,vec__10461,(0),null);
var y = cljs.core.nth.call(null,vec__10461,(1),null);
var vec__10464 = hello_quil_cljs.core.get_angle.call(null,new cljs.core.Keyword(null,"taal-i","taal-i",259785791).cljs$core$IFn$_invoke$arity$1(cur_state),hello_quil_cljs.core.taal);
var a1 = cljs.core.nth.call(null,vec__10464,(0),null);
var a2 = cljs.core.nth.call(null,vec__10464,(1),null);
var vec__10467 = hello_quil_cljs.core.get_angle.call(null,new cljs.core.Keyword(null,"tihai-i","tihai-i",-426085866).cljs$core$IFn$_invoke$arity$1(cur_state),hello_quil_cljs.core.part1);
var b1 = cljs.core.nth.call(null,vec__10467,(0),null);
var b2 = cljs.core.nth.call(null,vec__10467,(1),null);
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_state)].join(''));

quil.core.arc.call(null,x,y,(100),(100),a1,a2);

if(cljs.core._EQ_.call(null,(1),cphase)){
return quil.core.arc.call(null,(100),(400),(100),(100),b1,b2);
} else {
if(cljs.core._EQ_.call(null,(2),cphase)){
return quil.core.arc.call(null,(300),(400),(100),(100),b1,b2);
} else {
if(cljs.core._EQ_.call(null,(3),cphase)){
return quil.core.arc.call(null,(500),(400),(100),(100),b1,b2);
} else {
return null;
}
}
}
});
hello_quil_cljs.core.hello_quil_cljs = (function hello_quil_cljs$core$hello_quil_cljs(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"hello-quil-cljs",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,hello_quil_cljs.core.update_state))?(function() { 
var G__10470__delegate = function (args){
return cljs.core.apply.call(null,hello_quil_cljs.core.update_state,args);
};
var G__10470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10471__i = 0, G__10471__a = new Array(arguments.length -  0);
while (G__10471__i < G__10471__a.length) {G__10471__a[G__10471__i] = arguments[G__10471__i + 0]; ++G__10471__i;}
  args = new cljs.core.IndexedSeq(G__10471__a,0);
} 
return G__10470__delegate.call(this,args);};
G__10470.cljs$lang$maxFixedArity = 0;
G__10470.cljs$lang$applyTo = (function (arglist__10472){
var args = cljs.core.seq(arglist__10472);
return G__10470__delegate(args);
});
G__10470.cljs$core$IFn$_invoke$arity$variadic = G__10470__delegate;
return G__10470;
})()
:hello_quil_cljs.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,hello_quil_cljs.core.setup))?(function() { 
var G__10473__delegate = function (args){
return cljs.core.apply.call(null,hello_quil_cljs.core.setup,args);
};
var G__10473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10474__i = 0, G__10474__a = new Array(arguments.length -  0);
while (G__10474__i < G__10474__a.length) {G__10474__a[G__10474__i] = arguments[G__10474__i + 0]; ++G__10474__i;}
  args = new cljs.core.IndexedSeq(G__10474__a,0);
} 
return G__10473__delegate.call(this,args);};
G__10473.cljs$lang$maxFixedArity = 0;
G__10473.cljs$lang$applyTo = (function (arglist__10475){
var args = cljs.core.seq(arglist__10475);
return G__10473__delegate(args);
});
G__10473.cljs$core$IFn$_invoke$arity$variadic = G__10473__delegate;
return G__10473;
})()
:hello_quil_cljs.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,hello_quil_cljs.core.draw_state))?(function() { 
var G__10476__delegate = function (args){
return cljs.core.apply.call(null,hello_quil_cljs.core.draw_state,args);
};
var G__10476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10477__i = 0, G__10477__a = new Array(arguments.length -  0);
while (G__10477__i < G__10477__a.length) {G__10477__a[G__10477__i] = arguments[G__10477__i + 0]; ++G__10477__i;}
  args = new cljs.core.IndexedSeq(G__10477__a,0);
} 
return G__10476__delegate.call(this,args);};
G__10476.cljs$lang$maxFixedArity = 0;
G__10476.cljs$lang$applyTo = (function (arglist__10478){
var args = cljs.core.seq(arglist__10478);
return G__10476__delegate(args);
});
G__10476.cljs$core$IFn$_invoke$arity$variadic = G__10476__delegate;
return G__10476;
})()
:hello_quil_cljs.core.draw_state));
});
goog.exportSymbol('hello_quil_cljs.core.hello_quil_cljs', hello_quil_cljs.core.hello_quil_cljs);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),hello_quil_cljs.core.hello_quil_cljs,new cljs.core.Keyword(null,"host-id","host-id",742376279),"hello-quil-cljs"], null));
}

//# sourceMappingURL=core.js.map