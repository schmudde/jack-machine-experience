// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35373 = arguments.length;
var i__28022__auto___35374 = (0);
while(true){
if((i__28022__auto___35374 < len__28021__auto___35373)){
args__28028__auto__.push((arguments[i__28022__auto___35374]));

var G__35375 = (i__28022__auto___35374 + (1));
i__28022__auto___35374 = G__35375;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35372){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35372));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35377 = arguments.length;
var i__28022__auto___35378 = (0);
while(true){
if((i__28022__auto___35378 < len__28021__auto___35377)){
args__28028__auto__.push((arguments[i__28022__auto___35378]));

var G__35379 = (i__28022__auto___35378 + (1));
i__28022__auto___35378 = G__35379;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35376){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35376));
});

var g_QMARK__35380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35381 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35380){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35380))
,null));
var mkg_35382 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35380,g_35381){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35380,g_35381))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35380,g_35381,mkg_35382){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35380).call(null,x);
});})(g_QMARK__35380,g_35381,mkg_35382))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35380,g_35381,mkg_35382){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35382).call(null,gfn);
});})(g_QMARK__35380,g_35381,mkg_35382))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35380,g_35381,mkg_35382){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35381).call(null,generator);
});})(g_QMARK__35380,g_35381,mkg_35382))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35344__auto___35401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35344__auto___35401){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35402 = arguments.length;
var i__28022__auto___35403 = (0);
while(true){
if((i__28022__auto___35403 < len__28021__auto___35402)){
args__28028__auto__.push((arguments[i__28022__auto___35403]));

var G__35404 = (i__28022__auto___35403 + (1));
i__28022__auto___35403 = G__35404;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35401))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35401),args);
});})(g__35344__auto___35401))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35344__auto___35401){
return (function (seq35383){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35383));
});})(g__35344__auto___35401))
;


var g__35344__auto___35405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35344__auto___35405){
return (function cljs$spec$impl$gen$list(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35406 = arguments.length;
var i__28022__auto___35407 = (0);
while(true){
if((i__28022__auto___35407 < len__28021__auto___35406)){
args__28028__auto__.push((arguments[i__28022__auto___35407]));

var G__35408 = (i__28022__auto___35407 + (1));
i__28022__auto___35407 = G__35408;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35405))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35405),args);
});})(g__35344__auto___35405))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35344__auto___35405){
return (function (seq35384){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35384));
});})(g__35344__auto___35405))
;


var g__35344__auto___35409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35344__auto___35409){
return (function cljs$spec$impl$gen$map(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35410 = arguments.length;
var i__28022__auto___35411 = (0);
while(true){
if((i__28022__auto___35411 < len__28021__auto___35410)){
args__28028__auto__.push((arguments[i__28022__auto___35411]));

var G__35412 = (i__28022__auto___35411 + (1));
i__28022__auto___35411 = G__35412;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35409))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35409),args);
});})(g__35344__auto___35409))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35344__auto___35409){
return (function (seq35385){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35385));
});})(g__35344__auto___35409))
;


var g__35344__auto___35413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35344__auto___35413){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35414 = arguments.length;
var i__28022__auto___35415 = (0);
while(true){
if((i__28022__auto___35415 < len__28021__auto___35414)){
args__28028__auto__.push((arguments[i__28022__auto___35415]));

var G__35416 = (i__28022__auto___35415 + (1));
i__28022__auto___35415 = G__35416;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35413))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35413),args);
});})(g__35344__auto___35413))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35344__auto___35413){
return (function (seq35386){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35386));
});})(g__35344__auto___35413))
;


var g__35344__auto___35417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35344__auto___35417){
return (function cljs$spec$impl$gen$set(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35418 = arguments.length;
var i__28022__auto___35419 = (0);
while(true){
if((i__28022__auto___35419 < len__28021__auto___35418)){
args__28028__auto__.push((arguments[i__28022__auto___35419]));

var G__35420 = (i__28022__auto___35419 + (1));
i__28022__auto___35419 = G__35420;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35417))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35417),args);
});})(g__35344__auto___35417))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35344__auto___35417){
return (function (seq35387){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35387));
});})(g__35344__auto___35417))
;


var g__35344__auto___35421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35344__auto___35421){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35422 = arguments.length;
var i__28022__auto___35423 = (0);
while(true){
if((i__28022__auto___35423 < len__28021__auto___35422)){
args__28028__auto__.push((arguments[i__28022__auto___35423]));

var G__35424 = (i__28022__auto___35423 + (1));
i__28022__auto___35423 = G__35424;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35421))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35421),args);
});})(g__35344__auto___35421))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35344__auto___35421){
return (function (seq35388){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35388));
});})(g__35344__auto___35421))
;


var g__35344__auto___35425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35344__auto___35425){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35426 = arguments.length;
var i__28022__auto___35427 = (0);
while(true){
if((i__28022__auto___35427 < len__28021__auto___35426)){
args__28028__auto__.push((arguments[i__28022__auto___35427]));

var G__35428 = (i__28022__auto___35427 + (1));
i__28022__auto___35427 = G__35428;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35425))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35425),args);
});})(g__35344__auto___35425))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35344__auto___35425){
return (function (seq35389){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35389));
});})(g__35344__auto___35425))
;


var g__35344__auto___35429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35344__auto___35429){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35430 = arguments.length;
var i__28022__auto___35431 = (0);
while(true){
if((i__28022__auto___35431 < len__28021__auto___35430)){
args__28028__auto__.push((arguments[i__28022__auto___35431]));

var G__35432 = (i__28022__auto___35431 + (1));
i__28022__auto___35431 = G__35432;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35429))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35429),args);
});})(g__35344__auto___35429))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35344__auto___35429){
return (function (seq35390){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35390));
});})(g__35344__auto___35429))
;


var g__35344__auto___35433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35344__auto___35433){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35434 = arguments.length;
var i__28022__auto___35435 = (0);
while(true){
if((i__28022__auto___35435 < len__28021__auto___35434)){
args__28028__auto__.push((arguments[i__28022__auto___35435]));

var G__35436 = (i__28022__auto___35435 + (1));
i__28022__auto___35435 = G__35436;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35433))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35433),args);
});})(g__35344__auto___35433))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35344__auto___35433){
return (function (seq35391){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35391));
});})(g__35344__auto___35433))
;


var g__35344__auto___35437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35344__auto___35437){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35438 = arguments.length;
var i__28022__auto___35439 = (0);
while(true){
if((i__28022__auto___35439 < len__28021__auto___35438)){
args__28028__auto__.push((arguments[i__28022__auto___35439]));

var G__35440 = (i__28022__auto___35439 + (1));
i__28022__auto___35439 = G__35440;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35437))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35437),args);
});})(g__35344__auto___35437))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35344__auto___35437){
return (function (seq35392){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35392));
});})(g__35344__auto___35437))
;


var g__35344__auto___35441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35344__auto___35441){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35442 = arguments.length;
var i__28022__auto___35443 = (0);
while(true){
if((i__28022__auto___35443 < len__28021__auto___35442)){
args__28028__auto__.push((arguments[i__28022__auto___35443]));

var G__35444 = (i__28022__auto___35443 + (1));
i__28022__auto___35443 = G__35444;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35441))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35441),args);
});})(g__35344__auto___35441))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35344__auto___35441){
return (function (seq35393){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35393));
});})(g__35344__auto___35441))
;


var g__35344__auto___35445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35344__auto___35445){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35446 = arguments.length;
var i__28022__auto___35447 = (0);
while(true){
if((i__28022__auto___35447 < len__28021__auto___35446)){
args__28028__auto__.push((arguments[i__28022__auto___35447]));

var G__35448 = (i__28022__auto___35447 + (1));
i__28022__auto___35447 = G__35448;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35445))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35445),args);
});})(g__35344__auto___35445))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35344__auto___35445){
return (function (seq35394){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35394));
});})(g__35344__auto___35445))
;


var g__35344__auto___35449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35344__auto___35449){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35450 = arguments.length;
var i__28022__auto___35451 = (0);
while(true){
if((i__28022__auto___35451 < len__28021__auto___35450)){
args__28028__auto__.push((arguments[i__28022__auto___35451]));

var G__35452 = (i__28022__auto___35451 + (1));
i__28022__auto___35451 = G__35452;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35449))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35449),args);
});})(g__35344__auto___35449))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35344__auto___35449){
return (function (seq35395){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35395));
});})(g__35344__auto___35449))
;


var g__35344__auto___35453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35344__auto___35453){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35454 = arguments.length;
var i__28022__auto___35455 = (0);
while(true){
if((i__28022__auto___35455 < len__28021__auto___35454)){
args__28028__auto__.push((arguments[i__28022__auto___35455]));

var G__35456 = (i__28022__auto___35455 + (1));
i__28022__auto___35455 = G__35456;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35453))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35453),args);
});})(g__35344__auto___35453))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35344__auto___35453){
return (function (seq35396){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35396));
});})(g__35344__auto___35453))
;


var g__35344__auto___35457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35344__auto___35457){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35458 = arguments.length;
var i__28022__auto___35459 = (0);
while(true){
if((i__28022__auto___35459 < len__28021__auto___35458)){
args__28028__auto__.push((arguments[i__28022__auto___35459]));

var G__35460 = (i__28022__auto___35459 + (1));
i__28022__auto___35459 = G__35460;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35457))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35457),args);
});})(g__35344__auto___35457))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35344__auto___35457){
return (function (seq35397){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35397));
});})(g__35344__auto___35457))
;


var g__35344__auto___35461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35344__auto___35461){
return (function cljs$spec$impl$gen$return(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35462 = arguments.length;
var i__28022__auto___35463 = (0);
while(true){
if((i__28022__auto___35463 < len__28021__auto___35462)){
args__28028__auto__.push((arguments[i__28022__auto___35463]));

var G__35464 = (i__28022__auto___35463 + (1));
i__28022__auto___35463 = G__35464;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35461))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35461),args);
});})(g__35344__auto___35461))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35344__auto___35461){
return (function (seq35398){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35398));
});})(g__35344__auto___35461))
;


var g__35344__auto___35465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35344__auto___35465){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35466 = arguments.length;
var i__28022__auto___35467 = (0);
while(true){
if((i__28022__auto___35467 < len__28021__auto___35466)){
args__28028__auto__.push((arguments[i__28022__auto___35467]));

var G__35468 = (i__28022__auto___35467 + (1));
i__28022__auto___35467 = G__35468;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35465))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35465),args);
});})(g__35344__auto___35465))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35344__auto___35465){
return (function (seq35399){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35399));
});})(g__35344__auto___35465))
;


var g__35344__auto___35469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35344__auto___35469){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35470 = arguments.length;
var i__28022__auto___35471 = (0);
while(true){
if((i__28022__auto___35471 < len__28021__auto___35470)){
args__28028__auto__.push((arguments[i__28022__auto___35471]));

var G__35472 = (i__28022__auto___35471 + (1));
i__28022__auto___35471 = G__35472;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35344__auto___35469))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35469),args);
});})(g__35344__auto___35469))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35344__auto___35469){
return (function (seq35400){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35400));
});})(g__35344__auto___35469))
;

var g__35357__auto___35494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35357__auto___35494){
return (function cljs$spec$impl$gen$any(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35495 = arguments.length;
var i__28022__auto___35496 = (0);
while(true){
if((i__28022__auto___35496 < len__28021__auto___35495)){
args__28028__auto__.push((arguments[i__28022__auto___35496]));

var G__35497 = (i__28022__auto___35496 + (1));
i__28022__auto___35496 = G__35497;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35494))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35494){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35494);
});})(g__35357__auto___35494))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35357__auto___35494){
return (function (seq35473){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35473));
});})(g__35357__auto___35494))
;


var g__35357__auto___35498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35357__auto___35498){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35499 = arguments.length;
var i__28022__auto___35500 = (0);
while(true){
if((i__28022__auto___35500 < len__28021__auto___35499)){
args__28028__auto__.push((arguments[i__28022__auto___35500]));

var G__35501 = (i__28022__auto___35500 + (1));
i__28022__auto___35500 = G__35501;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35498))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35498){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35498);
});})(g__35357__auto___35498))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35357__auto___35498){
return (function (seq35474){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35474));
});})(g__35357__auto___35498))
;


var g__35357__auto___35502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35357__auto___35502){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35503 = arguments.length;
var i__28022__auto___35504 = (0);
while(true){
if((i__28022__auto___35504 < len__28021__auto___35503)){
args__28028__auto__.push((arguments[i__28022__auto___35504]));

var G__35505 = (i__28022__auto___35504 + (1));
i__28022__auto___35504 = G__35505;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35502))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35502){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35502);
});})(g__35357__auto___35502))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35357__auto___35502){
return (function (seq35475){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35475));
});})(g__35357__auto___35502))
;


var g__35357__auto___35506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35357__auto___35506){
return (function cljs$spec$impl$gen$char(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35507 = arguments.length;
var i__28022__auto___35508 = (0);
while(true){
if((i__28022__auto___35508 < len__28021__auto___35507)){
args__28028__auto__.push((arguments[i__28022__auto___35508]));

var G__35509 = (i__28022__auto___35508 + (1));
i__28022__auto___35508 = G__35509;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35506))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35506){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35506);
});})(g__35357__auto___35506))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35357__auto___35506){
return (function (seq35476){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35476));
});})(g__35357__auto___35506))
;


var g__35357__auto___35510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35357__auto___35510){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35511 = arguments.length;
var i__28022__auto___35512 = (0);
while(true){
if((i__28022__auto___35512 < len__28021__auto___35511)){
args__28028__auto__.push((arguments[i__28022__auto___35512]));

var G__35513 = (i__28022__auto___35512 + (1));
i__28022__auto___35512 = G__35513;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35510))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35510){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35510);
});})(g__35357__auto___35510))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35357__auto___35510){
return (function (seq35477){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35477));
});})(g__35357__auto___35510))
;


var g__35357__auto___35514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35357__auto___35514){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35515 = arguments.length;
var i__28022__auto___35516 = (0);
while(true){
if((i__28022__auto___35516 < len__28021__auto___35515)){
args__28028__auto__.push((arguments[i__28022__auto___35516]));

var G__35517 = (i__28022__auto___35516 + (1));
i__28022__auto___35516 = G__35517;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35514))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35514){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35514);
});})(g__35357__auto___35514))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35357__auto___35514){
return (function (seq35478){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35478));
});})(g__35357__auto___35514))
;


var g__35357__auto___35518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35357__auto___35518){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35519 = arguments.length;
var i__28022__auto___35520 = (0);
while(true){
if((i__28022__auto___35520 < len__28021__auto___35519)){
args__28028__auto__.push((arguments[i__28022__auto___35520]));

var G__35521 = (i__28022__auto___35520 + (1));
i__28022__auto___35520 = G__35521;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35518))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35518){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35518);
});})(g__35357__auto___35518))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35357__auto___35518){
return (function (seq35479){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35479));
});})(g__35357__auto___35518))
;


var g__35357__auto___35522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35357__auto___35522){
return (function cljs$spec$impl$gen$double(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35523 = arguments.length;
var i__28022__auto___35524 = (0);
while(true){
if((i__28022__auto___35524 < len__28021__auto___35523)){
args__28028__auto__.push((arguments[i__28022__auto___35524]));

var G__35525 = (i__28022__auto___35524 + (1));
i__28022__auto___35524 = G__35525;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35522))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35522){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35522);
});})(g__35357__auto___35522))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35357__auto___35522){
return (function (seq35480){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35480));
});})(g__35357__auto___35522))
;


var g__35357__auto___35526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35357__auto___35526){
return (function cljs$spec$impl$gen$int(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35527 = arguments.length;
var i__28022__auto___35528 = (0);
while(true){
if((i__28022__auto___35528 < len__28021__auto___35527)){
args__28028__auto__.push((arguments[i__28022__auto___35528]));

var G__35529 = (i__28022__auto___35528 + (1));
i__28022__auto___35528 = G__35529;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35526))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35526){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35526);
});})(g__35357__auto___35526))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35357__auto___35526){
return (function (seq35481){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35481));
});})(g__35357__auto___35526))
;


var g__35357__auto___35530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35357__auto___35530){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35531 = arguments.length;
var i__28022__auto___35532 = (0);
while(true){
if((i__28022__auto___35532 < len__28021__auto___35531)){
args__28028__auto__.push((arguments[i__28022__auto___35532]));

var G__35533 = (i__28022__auto___35532 + (1));
i__28022__auto___35532 = G__35533;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35530))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35530){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35530);
});})(g__35357__auto___35530))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35357__auto___35530){
return (function (seq35482){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35482));
});})(g__35357__auto___35530))
;


var g__35357__auto___35534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35357__auto___35534){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35535 = arguments.length;
var i__28022__auto___35536 = (0);
while(true){
if((i__28022__auto___35536 < len__28021__auto___35535)){
args__28028__auto__.push((arguments[i__28022__auto___35536]));

var G__35537 = (i__28022__auto___35536 + (1));
i__28022__auto___35536 = G__35537;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35534))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35534){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35534);
});})(g__35357__auto___35534))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35357__auto___35534){
return (function (seq35483){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35483));
});})(g__35357__auto___35534))
;


var g__35357__auto___35538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35357__auto___35538){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35539 = arguments.length;
var i__28022__auto___35540 = (0);
while(true){
if((i__28022__auto___35540 < len__28021__auto___35539)){
args__28028__auto__.push((arguments[i__28022__auto___35540]));

var G__35541 = (i__28022__auto___35540 + (1));
i__28022__auto___35540 = G__35541;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35538))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35538){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35538);
});})(g__35357__auto___35538))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35357__auto___35538){
return (function (seq35484){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35484));
});})(g__35357__auto___35538))
;


var g__35357__auto___35542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35357__auto___35542){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35543 = arguments.length;
var i__28022__auto___35544 = (0);
while(true){
if((i__28022__auto___35544 < len__28021__auto___35543)){
args__28028__auto__.push((arguments[i__28022__auto___35544]));

var G__35545 = (i__28022__auto___35544 + (1));
i__28022__auto___35544 = G__35545;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35542))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35542){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35542);
});})(g__35357__auto___35542))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35357__auto___35542){
return (function (seq35485){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35485));
});})(g__35357__auto___35542))
;


var g__35357__auto___35546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35357__auto___35546){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35547 = arguments.length;
var i__28022__auto___35548 = (0);
while(true){
if((i__28022__auto___35548 < len__28021__auto___35547)){
args__28028__auto__.push((arguments[i__28022__auto___35548]));

var G__35549 = (i__28022__auto___35548 + (1));
i__28022__auto___35548 = G__35549;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35546))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35546){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35546);
});})(g__35357__auto___35546))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35357__auto___35546){
return (function (seq35486){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35486));
});})(g__35357__auto___35546))
;


var g__35357__auto___35550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35357__auto___35550){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35551 = arguments.length;
var i__28022__auto___35552 = (0);
while(true){
if((i__28022__auto___35552 < len__28021__auto___35551)){
args__28028__auto__.push((arguments[i__28022__auto___35552]));

var G__35553 = (i__28022__auto___35552 + (1));
i__28022__auto___35552 = G__35553;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35550))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35550){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35550);
});})(g__35357__auto___35550))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35357__auto___35550){
return (function (seq35487){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35487));
});})(g__35357__auto___35550))
;


var g__35357__auto___35554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35357__auto___35554){
return (function cljs$spec$impl$gen$string(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35555 = arguments.length;
var i__28022__auto___35556 = (0);
while(true){
if((i__28022__auto___35556 < len__28021__auto___35555)){
args__28028__auto__.push((arguments[i__28022__auto___35556]));

var G__35557 = (i__28022__auto___35556 + (1));
i__28022__auto___35556 = G__35557;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35554))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35554){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35554);
});})(g__35357__auto___35554))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35357__auto___35554){
return (function (seq35488){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35488));
});})(g__35357__auto___35554))
;


var g__35357__auto___35558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35357__auto___35558){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35559 = arguments.length;
var i__28022__auto___35560 = (0);
while(true){
if((i__28022__auto___35560 < len__28021__auto___35559)){
args__28028__auto__.push((arguments[i__28022__auto___35560]));

var G__35561 = (i__28022__auto___35560 + (1));
i__28022__auto___35560 = G__35561;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35558))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35558){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35558);
});})(g__35357__auto___35558))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35357__auto___35558){
return (function (seq35489){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35489));
});})(g__35357__auto___35558))
;


var g__35357__auto___35562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35357__auto___35562){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35563 = arguments.length;
var i__28022__auto___35564 = (0);
while(true){
if((i__28022__auto___35564 < len__28021__auto___35563)){
args__28028__auto__.push((arguments[i__28022__auto___35564]));

var G__35565 = (i__28022__auto___35564 + (1));
i__28022__auto___35564 = G__35565;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35562))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35562){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35562);
});})(g__35357__auto___35562))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35357__auto___35562){
return (function (seq35490){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35490));
});})(g__35357__auto___35562))
;


var g__35357__auto___35566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35357__auto___35566){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35567 = arguments.length;
var i__28022__auto___35568 = (0);
while(true){
if((i__28022__auto___35568 < len__28021__auto___35567)){
args__28028__auto__.push((arguments[i__28022__auto___35568]));

var G__35569 = (i__28022__auto___35568 + (1));
i__28022__auto___35568 = G__35569;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35566))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35566){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35566);
});})(g__35357__auto___35566))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35357__auto___35566){
return (function (seq35491){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35491));
});})(g__35357__auto___35566))
;


var g__35357__auto___35570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35357__auto___35570){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35571 = arguments.length;
var i__28022__auto___35572 = (0);
while(true){
if((i__28022__auto___35572 < len__28021__auto___35571)){
args__28028__auto__.push((arguments[i__28022__auto___35572]));

var G__35573 = (i__28022__auto___35572 + (1));
i__28022__auto___35572 = G__35573;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35570))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35570){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35570);
});})(g__35357__auto___35570))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35357__auto___35570){
return (function (seq35492){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35492));
});})(g__35357__auto___35570))
;


var g__35357__auto___35574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35357__auto___35574){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35575 = arguments.length;
var i__28022__auto___35576 = (0);
while(true){
if((i__28022__auto___35576 < len__28021__auto___35575)){
args__28028__auto__.push((arguments[i__28022__auto___35576]));

var G__35577 = (i__28022__auto___35576 + (1));
i__28022__auto___35576 = G__35577;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});})(g__35357__auto___35574))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35574){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35574);
});})(g__35357__auto___35574))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35357__auto___35574){
return (function (seq35493){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35493));
});})(g__35357__auto___35574))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28028__auto__ = [];
var len__28021__auto___35580 = arguments.length;
var i__28022__auto___35581 = (0);
while(true){
if((i__28022__auto___35581 < len__28021__auto___35580)){
args__28028__auto__.push((arguments[i__28022__auto___35581]));

var G__35582 = (i__28022__auto___35581 + (1));
i__28022__auto___35581 = G__35582;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35578_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35578_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35579){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35579));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35583_SHARP_){
return (new Date(p1__35583_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1481250426412