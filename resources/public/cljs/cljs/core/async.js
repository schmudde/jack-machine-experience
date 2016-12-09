// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29545 = [];
var len__28021__auto___29551 = arguments.length;
var i__28022__auto___29552 = (0);
while(true){
if((i__28022__auto___29552 < len__28021__auto___29551)){
args29545.push((arguments[i__28022__auto___29552]));

var G__29553 = (i__28022__auto___29552 + (1));
i__28022__auto___29552 = G__29553;
continue;
} else {
}
break;
}

var G__29547 = args29545.length;
switch (G__29547) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29545.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29548 = (function (f,blockable,meta29549){
this.f = f;
this.blockable = blockable;
this.meta29549 = meta29549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29550,meta29549__$1){
var self__ = this;
var _29550__$1 = this;
return (new cljs.core.async.t_cljs$core$async29548(self__.f,self__.blockable,meta29549__$1));
});

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29550){
var self__ = this;
var _29550__$1 = this;
return self__.meta29549;
});

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29549","meta29549",1271355744,null)], null);
});

cljs.core.async.t_cljs$core$async29548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29548";

cljs.core.async.t_cljs$core$async29548.cljs$lang$ctorPrWriter = (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async29548");
});

cljs.core.async.__GT_t_cljs$core$async29548 = (function cljs$core$async$__GT_t_cljs$core$async29548(f__$1,blockable__$1,meta29549){
return (new cljs.core.async.t_cljs$core$async29548(f__$1,blockable__$1,meta29549));
});

}

return (new cljs.core.async.t_cljs$core$async29548(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29557 = [];
var len__28021__auto___29560 = arguments.length;
var i__28022__auto___29561 = (0);
while(true){
if((i__28022__auto___29561 < len__28021__auto___29560)){
args29557.push((arguments[i__28022__auto___29561]));

var G__29562 = (i__28022__auto___29561 + (1));
i__28022__auto___29561 = G__29562;
continue;
} else {
}
break;
}

var G__29559 = args29557.length;
switch (G__29559) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29557.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29564 = [];
var len__28021__auto___29567 = arguments.length;
var i__28022__auto___29568 = (0);
while(true){
if((i__28022__auto___29568 < len__28021__auto___29567)){
args29564.push((arguments[i__28022__auto___29568]));

var G__29569 = (i__28022__auto___29568 + (1));
i__28022__auto___29568 = G__29569;
continue;
} else {
}
break;
}

var G__29566 = args29564.length;
switch (G__29566) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29564.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29571 = [];
var len__28021__auto___29574 = arguments.length;
var i__28022__auto___29575 = (0);
while(true){
if((i__28022__auto___29575 < len__28021__auto___29574)){
args29571.push((arguments[i__28022__auto___29575]));

var G__29576 = (i__28022__auto___29575 + (1));
i__28022__auto___29575 = G__29576;
continue;
} else {
}
break;
}

var G__29573 = args29571.length;
switch (G__29573) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29571.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29578 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29578);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29578,ret){
return (function (){
return fn1.call(null,val_29578);
});})(val_29578,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29579 = [];
var len__28021__auto___29582 = arguments.length;
var i__28022__auto___29583 = (0);
while(true){
if((i__28022__auto___29583 < len__28021__auto___29582)){
args29579.push((arguments[i__28022__auto___29583]));

var G__29584 = (i__28022__auto___29583 + (1));
i__28022__auto___29583 = G__29584;
continue;
} else {
}
break;
}

var G__29581 = args29579.length;
switch (G__29581) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29579.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27821__auto___29586 = n;
var x_29587 = (0);
while(true){
if((x_29587 < n__27821__auto___29586)){
(a[x_29587] = (0));

var G__29588 = (x_29587 + (1));
x_29587 = G__29588;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29589 = (i + (1));
i = G__29589;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29593 = (function (flag,meta29594){
this.flag = flag;
this.meta29594 = meta29594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29595,meta29594__$1){
var self__ = this;
var _29595__$1 = this;
return (new cljs.core.async.t_cljs$core$async29593(self__.flag,meta29594__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29595){
var self__ = this;
var _29595__$1 = this;
return self__.meta29594;
});})(flag))
;

cljs.core.async.t_cljs$core$async29593.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29593.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29594","meta29594",-1616196899,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29593";

cljs.core.async.t_cljs$core$async29593.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async29593");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29593 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29593(flag__$1,meta29594){
return (new cljs.core.async.t_cljs$core$async29593(flag__$1,meta29594));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29593(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29599 = (function (flag,cb,meta29600){
this.flag = flag;
this.cb = cb;
this.meta29600 = meta29600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29601,meta29600__$1){
var self__ = this;
var _29601__$1 = this;
return (new cljs.core.async.t_cljs$core$async29599(self__.flag,self__.cb,meta29600__$1));
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29601){
var self__ = this;
var _29601__$1 = this;
return self__.meta29600;
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29600","meta29600",1415748470,null)], null);
});

cljs.core.async.t_cljs$core$async29599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29599";

cljs.core.async.t_cljs$core$async29599.cljs$lang$ctorPrWriter = (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async29599");
});

cljs.core.async.__GT_t_cljs$core$async29599 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29599(flag__$1,cb__$1,meta29600){
return (new cljs.core.async.t_cljs$core$async29599(flag__$1,cb__$1,meta29600));
});

}

return (new cljs.core.async.t_cljs$core$async29599(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29602_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29602_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29603_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26805__auto__ = wport;
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29604 = (i + (1));
i = G__29604;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26805__auto__ = ret;
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__26793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26793__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28028__auto__ = [];
var len__28021__auto___29610 = arguments.length;
var i__28022__auto___29611 = (0);
while(true){
if((i__28022__auto___29611 < len__28021__auto___29610)){
args__28028__auto__.push((arguments[i__28022__auto___29611]));

var G__29612 = (i__28022__auto___29611 + (1));
i__28022__auto___29611 = G__29612;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((1) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28029__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29607){
var map__29608 = p__29607;
var map__29608__$1 = ((((!((map__29608 == null)))?((((map__29608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29608):map__29608);
var opts = map__29608__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29605){
var G__29606 = cljs.core.first.call(null,seq29605);
var seq29605__$1 = cljs.core.next.call(null,seq29605);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29606,seq29605__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29613 = [];
var len__28021__auto___29663 = arguments.length;
var i__28022__auto___29664 = (0);
while(true){
if((i__28022__auto___29664 < len__28021__auto___29663)){
args29613.push((arguments[i__28022__auto___29664]));

var G__29665 = (i__28022__auto___29664 + (1));
i__28022__auto___29664 = G__29665;
continue;
} else {
}
break;
}

var G__29615 = args29613.length;
switch (G__29615) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29613.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29486__auto___29667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___29667){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___29667){
return (function (state_29639){
var state_val_29640 = (state_29639[(1)]);
if((state_val_29640 === (7))){
var inst_29635 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
var statearr_29641_29668 = state_29639__$1;
(statearr_29641_29668[(2)] = inst_29635);

(statearr_29641_29668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (1))){
var state_29639__$1 = state_29639;
var statearr_29642_29669 = state_29639__$1;
(statearr_29642_29669[(2)] = null);

(statearr_29642_29669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (4))){
var inst_29618 = (state_29639[(7)]);
var inst_29618__$1 = (state_29639[(2)]);
var inst_29619 = (inst_29618__$1 == null);
var state_29639__$1 = (function (){var statearr_29643 = state_29639;
(statearr_29643[(7)] = inst_29618__$1);

return statearr_29643;
})();
if(cljs.core.truth_(inst_29619)){
var statearr_29644_29670 = state_29639__$1;
(statearr_29644_29670[(1)] = (5));

} else {
var statearr_29645_29671 = state_29639__$1;
(statearr_29645_29671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (13))){
var state_29639__$1 = state_29639;
var statearr_29646_29672 = state_29639__$1;
(statearr_29646_29672[(2)] = null);

(statearr_29646_29672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (6))){
var inst_29618 = (state_29639[(7)]);
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29639__$1,(11),to,inst_29618);
} else {
if((state_val_29640 === (3))){
var inst_29637 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29639__$1,inst_29637);
} else {
if((state_val_29640 === (12))){
var state_29639__$1 = state_29639;
var statearr_29647_29673 = state_29639__$1;
(statearr_29647_29673[(2)] = null);

(statearr_29647_29673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (2))){
var state_29639__$1 = state_29639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29639__$1,(4),from);
} else {
if((state_val_29640 === (11))){
var inst_29628 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
if(cljs.core.truth_(inst_29628)){
var statearr_29648_29674 = state_29639__$1;
(statearr_29648_29674[(1)] = (12));

} else {
var statearr_29649_29675 = state_29639__$1;
(statearr_29649_29675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (9))){
var state_29639__$1 = state_29639;
var statearr_29650_29676 = state_29639__$1;
(statearr_29650_29676[(2)] = null);

(statearr_29650_29676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (5))){
var state_29639__$1 = state_29639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29651_29677 = state_29639__$1;
(statearr_29651_29677[(1)] = (8));

} else {
var statearr_29652_29678 = state_29639__$1;
(statearr_29652_29678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (14))){
var inst_29633 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
var statearr_29653_29679 = state_29639__$1;
(statearr_29653_29679[(2)] = inst_29633);

(statearr_29653_29679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (10))){
var inst_29625 = (state_29639[(2)]);
var state_29639__$1 = state_29639;
var statearr_29654_29680 = state_29639__$1;
(statearr_29654_29680[(2)] = inst_29625);

(statearr_29654_29680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29640 === (8))){
var inst_29622 = cljs.core.async.close_BANG_.call(null,to);
var state_29639__$1 = state_29639;
var statearr_29655_29681 = state_29639__$1;
(statearr_29655_29681[(2)] = inst_29622);

(statearr_29655_29681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___29667))
;
return ((function (switch__29372__auto__,c__29486__auto___29667){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_29659 = [null,null,null,null,null,null,null,null];
(statearr_29659[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_29659[(1)] = (1));

return statearr_29659;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_29639){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_29639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e29660){if((e29660 instanceof Object)){
var ex__29376__auto__ = e29660;
var statearr_29661_29682 = state_29639;
(statearr_29661_29682[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29683 = state_29639;
state_29639 = G__29683;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_29639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_29639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___29667))
})();
var state__29488__auto__ = (function (){var statearr_29662 = f__29487__auto__.call(null);
(statearr_29662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___29667);

return statearr_29662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___29667))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29871){
var vec__29872 = p__29871;
var v = cljs.core.nth.call(null,vec__29872,(0),null);
var p = cljs.core.nth.call(null,vec__29872,(1),null);
var job = vec__29872;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29486__auto___30058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___30058,res,vec__29872,v,p,job,jobs,results){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___30058,res,vec__29872,v,p,job,jobs,results){
return (function (state_29879){
var state_val_29880 = (state_29879[(1)]);
if((state_val_29880 === (1))){
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29879__$1,(2),res,v);
} else {
if((state_val_29880 === (2))){
var inst_29876 = (state_29879[(2)]);
var inst_29877 = cljs.core.async.close_BANG_.call(null,res);
var state_29879__$1 = (function (){var statearr_29881 = state_29879;
(statearr_29881[(7)] = inst_29876);

return statearr_29881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29879__$1,inst_29877);
} else {
return null;
}
}
});})(c__29486__auto___30058,res,vec__29872,v,p,job,jobs,results))
;
return ((function (switch__29372__auto__,c__29486__auto___30058,res,vec__29872,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0 = (function (){
var statearr_29885 = [null,null,null,null,null,null,null,null];
(statearr_29885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__);

(statearr_29885[(1)] = (1));

return statearr_29885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1 = (function (state_29879){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_29879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e29886){if((e29886 instanceof Object)){
var ex__29376__auto__ = e29886;
var statearr_29887_30059 = state_29879;
(statearr_29887_30059[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30060 = state_29879;
state_29879 = G__30060;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = function(state_29879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1.call(this,state_29879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___30058,res,vec__29872,v,p,job,jobs,results))
})();
var state__29488__auto__ = (function (){var statearr_29888 = f__29487__auto__.call(null);
(statearr_29888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___30058);

return statearr_29888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___30058,res,vec__29872,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29889){
var vec__29890 = p__29889;
var v = cljs.core.nth.call(null,vec__29890,(0),null);
var p = cljs.core.nth.call(null,vec__29890,(1),null);
var job = vec__29890;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27821__auto___30061 = n;
var __30062 = (0);
while(true){
if((__30062 < n__27821__auto___30061)){
var G__29893_30063 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29893_30063) {
case "compute":
var c__29486__auto___30065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30062,c__29486__auto___30065,G__29893_30063,n__27821__auto___30061,jobs,results,process,async){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (__30062,c__29486__auto___30065,G__29893_30063,n__27821__auto___30061,jobs,results,process,async){
return (function (state_29906){
var state_val_29907 = (state_29906[(1)]);
if((state_val_29907 === (1))){
var state_29906__$1 = state_29906;
var statearr_29908_30066 = state_29906__$1;
(statearr_29908_30066[(2)] = null);

(statearr_29908_30066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (2))){
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29906__$1,(4),jobs);
} else {
if((state_val_29907 === (3))){
var inst_29904 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29906__$1,inst_29904);
} else {
if((state_val_29907 === (4))){
var inst_29896 = (state_29906[(2)]);
var inst_29897 = process.call(null,inst_29896);
var state_29906__$1 = state_29906;
if(cljs.core.truth_(inst_29897)){
var statearr_29909_30067 = state_29906__$1;
(statearr_29909_30067[(1)] = (5));

} else {
var statearr_29910_30068 = state_29906__$1;
(statearr_29910_30068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (5))){
var state_29906__$1 = state_29906;
var statearr_29911_30069 = state_29906__$1;
(statearr_29911_30069[(2)] = null);

(statearr_29911_30069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (6))){
var state_29906__$1 = state_29906;
var statearr_29912_30070 = state_29906__$1;
(statearr_29912_30070[(2)] = null);

(statearr_29912_30070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (7))){
var inst_29902 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29913_30071 = state_29906__$1;
(statearr_29913_30071[(2)] = inst_29902);

(statearr_29913_30071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30062,c__29486__auto___30065,G__29893_30063,n__27821__auto___30061,jobs,results,process,async))
;
return ((function (__30062,switch__29372__auto__,c__29486__auto___30065,G__29893_30063,n__27821__auto___30061,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0 = (function (){
var statearr_29917 = [null,null,null,null,null,null,null];
(statearr_29917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__);

(statearr_29917[(1)] = (1));

return statearr_29917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1 = (function (state_29906){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_29906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e29918){if((e29918 instanceof Object)){
var ex__29376__auto__ = e29918;
var statearr_29919_30072 = state_29906;
(statearr_29919_30072[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30073 = state_29906;
state_29906 = G__30073;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = function(state_29906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1.call(this,state_29906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__;
})()
;})(__30062,switch__29372__auto__,c__29486__auto___30065,G__29893_30063,n__27821__auto___30061,jobs,results,process,async))
})();
var state__29488__auto__ = (function (){var statearr_29920 = f__29487__auto__.call(null);
(statearr_29920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___30065);

return statearr_29920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(__30062,c__29486__auto___30065,G__29893_30063,n__27821__auto___30061,jobs,results,process,async))
);


break;
case "async":
var c__29486__auto___30074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30062,c__29486__auto___30074,G__29893_30063,n__27821__auto___30061,jobs,results,process,async){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (__30062,c__29486__auto___30074,G__29893_30063,n__27821__auto___30061,jobs,results,process,async){
return (function (state_29933){
var state_val_29934 = (state_29933[(1)]);
if((state_val_29934 === (1))){
var state_29933__$1 = state_29933;
var statearr_29935_30075 = state_29933__$1;
(statearr_29935_30075[(2)] = null);

(statearr_29935_30075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (2))){
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29933__$1,(4),jobs);
} else {
if((state_val_29934 === (3))){
var inst_29931 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29933__$1,inst_29931);
} else {
if((state_val_29934 === (4))){
var inst_29923 = (state_29933[(2)]);
var inst_29924 = async.call(null,inst_29923);
var state_29933__$1 = state_29933;
if(cljs.core.truth_(inst_29924)){
var statearr_29936_30076 = state_29933__$1;
(statearr_29936_30076[(1)] = (5));

} else {
var statearr_29937_30077 = state_29933__$1;
(statearr_29937_30077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (5))){
var state_29933__$1 = state_29933;
var statearr_29938_30078 = state_29933__$1;
(statearr_29938_30078[(2)] = null);

(statearr_29938_30078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (6))){
var state_29933__$1 = state_29933;
var statearr_29939_30079 = state_29933__$1;
(statearr_29939_30079[(2)] = null);

(statearr_29939_30079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (7))){
var inst_29929 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29940_30080 = state_29933__$1;
(statearr_29940_30080[(2)] = inst_29929);

(statearr_29940_30080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30062,c__29486__auto___30074,G__29893_30063,n__27821__auto___30061,jobs,results,process,async))
;
return ((function (__30062,switch__29372__auto__,c__29486__auto___30074,G__29893_30063,n__27821__auto___30061,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0 = (function (){
var statearr_29944 = [null,null,null,null,null,null,null];
(statearr_29944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__);

(statearr_29944[(1)] = (1));

return statearr_29944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1 = (function (state_29933){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_29933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e29945){if((e29945 instanceof Object)){
var ex__29376__auto__ = e29945;
var statearr_29946_30081 = state_29933;
(statearr_29946_30081[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30082 = state_29933;
state_29933 = G__30082;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = function(state_29933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1.call(this,state_29933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__;
})()
;})(__30062,switch__29372__auto__,c__29486__auto___30074,G__29893_30063,n__27821__auto___30061,jobs,results,process,async))
})();
var state__29488__auto__ = (function (){var statearr_29947 = f__29487__auto__.call(null);
(statearr_29947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___30074);

return statearr_29947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(__30062,c__29486__auto___30074,G__29893_30063,n__27821__auto___30061,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30083 = (__30062 + (1));
__30062 = G__30083;
continue;
} else {
}
break;
}

var c__29486__auto___30084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___30084,jobs,results,process,async){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___30084,jobs,results,process,async){
return (function (state_29969){
var state_val_29970 = (state_29969[(1)]);
if((state_val_29970 === (1))){
var state_29969__$1 = state_29969;
var statearr_29971_30085 = state_29969__$1;
(statearr_29971_30085[(2)] = null);

(statearr_29971_30085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (2))){
var state_29969__$1 = state_29969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29969__$1,(4),from);
} else {
if((state_val_29970 === (3))){
var inst_29967 = (state_29969[(2)]);
var state_29969__$1 = state_29969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29969__$1,inst_29967);
} else {
if((state_val_29970 === (4))){
var inst_29950 = (state_29969[(7)]);
var inst_29950__$1 = (state_29969[(2)]);
var inst_29951 = (inst_29950__$1 == null);
var state_29969__$1 = (function (){var statearr_29972 = state_29969;
(statearr_29972[(7)] = inst_29950__$1);

return statearr_29972;
})();
if(cljs.core.truth_(inst_29951)){
var statearr_29973_30086 = state_29969__$1;
(statearr_29973_30086[(1)] = (5));

} else {
var statearr_29974_30087 = state_29969__$1;
(statearr_29974_30087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (5))){
var inst_29953 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29969__$1 = state_29969;
var statearr_29975_30088 = state_29969__$1;
(statearr_29975_30088[(2)] = inst_29953);

(statearr_29975_30088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (6))){
var inst_29955 = (state_29969[(8)]);
var inst_29950 = (state_29969[(7)]);
var inst_29955__$1 = cljs.core.async.chan.call(null,(1));
var inst_29956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29957 = [inst_29950,inst_29955__$1];
var inst_29958 = (new cljs.core.PersistentVector(null,2,(5),inst_29956,inst_29957,null));
var state_29969__$1 = (function (){var statearr_29976 = state_29969;
(statearr_29976[(8)] = inst_29955__$1);

return statearr_29976;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29969__$1,(8),jobs,inst_29958);
} else {
if((state_val_29970 === (7))){
var inst_29965 = (state_29969[(2)]);
var state_29969__$1 = state_29969;
var statearr_29977_30089 = state_29969__$1;
(statearr_29977_30089[(2)] = inst_29965);

(statearr_29977_30089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29970 === (8))){
var inst_29955 = (state_29969[(8)]);
var inst_29960 = (state_29969[(2)]);
var state_29969__$1 = (function (){var statearr_29978 = state_29969;
(statearr_29978[(9)] = inst_29960);

return statearr_29978;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29969__$1,(9),results,inst_29955);
} else {
if((state_val_29970 === (9))){
var inst_29962 = (state_29969[(2)]);
var state_29969__$1 = (function (){var statearr_29979 = state_29969;
(statearr_29979[(10)] = inst_29962);

return statearr_29979;
})();
var statearr_29980_30090 = state_29969__$1;
(statearr_29980_30090[(2)] = null);

(statearr_29980_30090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___30084,jobs,results,process,async))
;
return ((function (switch__29372__auto__,c__29486__auto___30084,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0 = (function (){
var statearr_29984 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__);

(statearr_29984[(1)] = (1));

return statearr_29984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1 = (function (state_29969){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_29969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e29985){if((e29985 instanceof Object)){
var ex__29376__auto__ = e29985;
var statearr_29986_30091 = state_29969;
(statearr_29986_30091[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30092 = state_29969;
state_29969 = G__30092;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = function(state_29969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1.call(this,state_29969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___30084,jobs,results,process,async))
})();
var state__29488__auto__ = (function (){var statearr_29987 = f__29487__auto__.call(null);
(statearr_29987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___30084);

return statearr_29987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___30084,jobs,results,process,async))
);


var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__,jobs,results,process,async){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__,jobs,results,process,async){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30027_30093 = state_30025__$1;
(statearr_30027_30093[(2)] = inst_30021);

(statearr_30027_30093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (20))){
var state_30025__$1 = state_30025;
var statearr_30028_30094 = state_30025__$1;
(statearr_30028_30094[(2)] = null);

(statearr_30028_30094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var state_30025__$1 = state_30025;
var statearr_30029_30095 = state_30025__$1;
(statearr_30029_30095[(2)] = null);

(statearr_30029_30095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_29990 = (state_30025[(7)]);
var inst_29990__$1 = (state_30025[(2)]);
var inst_29991 = (inst_29990__$1 == null);
var state_30025__$1 = (function (){var statearr_30030 = state_30025;
(statearr_30030[(7)] = inst_29990__$1);

return statearr_30030;
})();
if(cljs.core.truth_(inst_29991)){
var statearr_30031_30096 = state_30025__$1;
(statearr_30031_30096[(1)] = (5));

} else {
var statearr_30032_30097 = state_30025__$1;
(statearr_30032_30097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (15))){
var inst_30003 = (state_30025[(8)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30025__$1,(18),to,inst_30003);
} else {
if((state_val_30026 === (21))){
var inst_30016 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30033_30098 = state_30025__$1;
(statearr_30033_30098[(2)] = inst_30016);

(statearr_30033_30098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (13))){
var inst_30018 = (state_30025[(2)]);
var state_30025__$1 = (function (){var statearr_30034 = state_30025;
(statearr_30034[(9)] = inst_30018);

return statearr_30034;
})();
var statearr_30035_30099 = state_30025__$1;
(statearr_30035_30099[(2)] = null);

(statearr_30035_30099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_29990 = (state_30025[(7)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(11),inst_29990);
} else {
if((state_val_30026 === (17))){
var inst_30011 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_30011)){
var statearr_30036_30100 = state_30025__$1;
(statearr_30036_30100[(1)] = (19));

} else {
var statearr_30037_30101 = state_30025__$1;
(statearr_30037_30101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (12))){
var inst_30000 = (state_30025[(10)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(14),inst_30000);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(4),results);
} else {
if((state_val_30026 === (19))){
var state_30025__$1 = state_30025;
var statearr_30038_30102 = state_30025__$1;
(statearr_30038_30102[(2)] = null);

(statearr_30038_30102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (11))){
var inst_30000 = (state_30025[(2)]);
var state_30025__$1 = (function (){var statearr_30039 = state_30025;
(statearr_30039[(10)] = inst_30000);

return statearr_30039;
})();
var statearr_30040_30103 = state_30025__$1;
(statearr_30040_30103[(2)] = null);

(statearr_30040_30103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (9))){
var state_30025__$1 = state_30025;
var statearr_30041_30104 = state_30025__$1;
(statearr_30041_30104[(2)] = null);

(statearr_30041_30104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var state_30025__$1 = state_30025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30042_30105 = state_30025__$1;
(statearr_30042_30105[(1)] = (8));

} else {
var statearr_30043_30106 = state_30025__$1;
(statearr_30043_30106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (14))){
var inst_30005 = (state_30025[(11)]);
var inst_30003 = (state_30025[(8)]);
var inst_30003__$1 = (state_30025[(2)]);
var inst_30004 = (inst_30003__$1 == null);
var inst_30005__$1 = cljs.core.not.call(null,inst_30004);
var state_30025__$1 = (function (){var statearr_30044 = state_30025;
(statearr_30044[(11)] = inst_30005__$1);

(statearr_30044[(8)] = inst_30003__$1);

return statearr_30044;
})();
if(inst_30005__$1){
var statearr_30045_30107 = state_30025__$1;
(statearr_30045_30107[(1)] = (15));

} else {
var statearr_30046_30108 = state_30025__$1;
(statearr_30046_30108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (16))){
var inst_30005 = (state_30025[(11)]);
var state_30025__$1 = state_30025;
var statearr_30047_30109 = state_30025__$1;
(statearr_30047_30109[(2)] = inst_30005);

(statearr_30047_30109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_29997 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30048_30110 = state_30025__$1;
(statearr_30048_30110[(2)] = inst_29997);

(statearr_30048_30110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (18))){
var inst_30008 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30049_30111 = state_30025__$1;
(statearr_30049_30111[(2)] = inst_30008);

(statearr_30049_30111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_29994 = cljs.core.async.close_BANG_.call(null,to);
var state_30025__$1 = state_30025;
var statearr_30050_30112 = state_30025__$1;
(statearr_30050_30112[(2)] = inst_29994);

(statearr_30050_30112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto__,jobs,results,process,async))
;
return ((function (switch__29372__auto__,c__29486__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1 = (function (state_30025){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e30055){if((e30055 instanceof Object)){
var ex__29376__auto__ = e30055;
var statearr_30056_30113 = state_30025;
(statearr_30056_30113[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30114 = state_30025;
state_30025 = G__30114;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29373__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__,jobs,results,process,async))
})();
var state__29488__auto__ = (function (){var statearr_30057 = f__29487__auto__.call(null);
(statearr_30057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__,jobs,results,process,async))
);

return c__29486__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30115 = [];
var len__28021__auto___30118 = arguments.length;
var i__28022__auto___30119 = (0);
while(true){
if((i__28022__auto___30119 < len__28021__auto___30118)){
args30115.push((arguments[i__28022__auto___30119]));

var G__30120 = (i__28022__auto___30119 + (1));
i__28022__auto___30119 = G__30120;
continue;
} else {
}
break;
}

var G__30117 = args30115.length;
switch (G__30117) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30115.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30122 = [];
var len__28021__auto___30125 = arguments.length;
var i__28022__auto___30126 = (0);
while(true){
if((i__28022__auto___30126 < len__28021__auto___30125)){
args30122.push((arguments[i__28022__auto___30126]));

var G__30127 = (i__28022__auto___30126 + (1));
i__28022__auto___30126 = G__30127;
continue;
} else {
}
break;
}

var G__30124 = args30122.length;
switch (G__30124) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30122.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30129 = [];
var len__28021__auto___30182 = arguments.length;
var i__28022__auto___30183 = (0);
while(true){
if((i__28022__auto___30183 < len__28021__auto___30182)){
args30129.push((arguments[i__28022__auto___30183]));

var G__30184 = (i__28022__auto___30183 + (1));
i__28022__auto___30183 = G__30184;
continue;
} else {
}
break;
}

var G__30131 = args30129.length;
switch (G__30131) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30129.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29486__auto___30186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___30186,tc,fc){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___30186,tc,fc){
return (function (state_30157){
var state_val_30158 = (state_30157[(1)]);
if((state_val_30158 === (7))){
var inst_30153 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30159_30187 = state_30157__$1;
(statearr_30159_30187[(2)] = inst_30153);

(statearr_30159_30187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (1))){
var state_30157__$1 = state_30157;
var statearr_30160_30188 = state_30157__$1;
(statearr_30160_30188[(2)] = null);

(statearr_30160_30188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (4))){
var inst_30134 = (state_30157[(7)]);
var inst_30134__$1 = (state_30157[(2)]);
var inst_30135 = (inst_30134__$1 == null);
var state_30157__$1 = (function (){var statearr_30161 = state_30157;
(statearr_30161[(7)] = inst_30134__$1);

return statearr_30161;
})();
if(cljs.core.truth_(inst_30135)){
var statearr_30162_30189 = state_30157__$1;
(statearr_30162_30189[(1)] = (5));

} else {
var statearr_30163_30190 = state_30157__$1;
(statearr_30163_30190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (13))){
var state_30157__$1 = state_30157;
var statearr_30164_30191 = state_30157__$1;
(statearr_30164_30191[(2)] = null);

(statearr_30164_30191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (6))){
var inst_30134 = (state_30157[(7)]);
var inst_30140 = p.call(null,inst_30134);
var state_30157__$1 = state_30157;
if(cljs.core.truth_(inst_30140)){
var statearr_30165_30192 = state_30157__$1;
(statearr_30165_30192[(1)] = (9));

} else {
var statearr_30166_30193 = state_30157__$1;
(statearr_30166_30193[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (3))){
var inst_30155 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30157__$1,inst_30155);
} else {
if((state_val_30158 === (12))){
var state_30157__$1 = state_30157;
var statearr_30167_30194 = state_30157__$1;
(statearr_30167_30194[(2)] = null);

(statearr_30167_30194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (2))){
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30157__$1,(4),ch);
} else {
if((state_val_30158 === (11))){
var inst_30134 = (state_30157[(7)]);
var inst_30144 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30157__$1,(8),inst_30144,inst_30134);
} else {
if((state_val_30158 === (9))){
var state_30157__$1 = state_30157;
var statearr_30168_30195 = state_30157__$1;
(statearr_30168_30195[(2)] = tc);

(statearr_30168_30195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (5))){
var inst_30137 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30138 = cljs.core.async.close_BANG_.call(null,fc);
var state_30157__$1 = (function (){var statearr_30169 = state_30157;
(statearr_30169[(8)] = inst_30137);

return statearr_30169;
})();
var statearr_30170_30196 = state_30157__$1;
(statearr_30170_30196[(2)] = inst_30138);

(statearr_30170_30196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (14))){
var inst_30151 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30171_30197 = state_30157__$1;
(statearr_30171_30197[(2)] = inst_30151);

(statearr_30171_30197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (10))){
var state_30157__$1 = state_30157;
var statearr_30172_30198 = state_30157__$1;
(statearr_30172_30198[(2)] = fc);

(statearr_30172_30198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (8))){
var inst_30146 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
if(cljs.core.truth_(inst_30146)){
var statearr_30173_30199 = state_30157__$1;
(statearr_30173_30199[(1)] = (12));

} else {
var statearr_30174_30200 = state_30157__$1;
(statearr_30174_30200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___30186,tc,fc))
;
return ((function (switch__29372__auto__,c__29486__auto___30186,tc,fc){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_30178 = [null,null,null,null,null,null,null,null,null];
(statearr_30178[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_30178[(1)] = (1));

return statearr_30178;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_30157){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_30157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e30179){if((e30179 instanceof Object)){
var ex__29376__auto__ = e30179;
var statearr_30180_30201 = state_30157;
(statearr_30180_30201[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30202 = state_30157;
state_30157 = G__30202;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_30157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_30157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___30186,tc,fc))
})();
var state__29488__auto__ = (function (){var statearr_30181 = f__29487__auto__.call(null);
(statearr_30181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___30186);

return statearr_30181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___30186,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__){
return (function (state_30266){
var state_val_30267 = (state_30266[(1)]);
if((state_val_30267 === (7))){
var inst_30262 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30268_30289 = state_30266__$1;
(statearr_30268_30289[(2)] = inst_30262);

(statearr_30268_30289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (1))){
var inst_30246 = init;
var state_30266__$1 = (function (){var statearr_30269 = state_30266;
(statearr_30269[(7)] = inst_30246);

return statearr_30269;
})();
var statearr_30270_30290 = state_30266__$1;
(statearr_30270_30290[(2)] = null);

(statearr_30270_30290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (4))){
var inst_30249 = (state_30266[(8)]);
var inst_30249__$1 = (state_30266[(2)]);
var inst_30250 = (inst_30249__$1 == null);
var state_30266__$1 = (function (){var statearr_30271 = state_30266;
(statearr_30271[(8)] = inst_30249__$1);

return statearr_30271;
})();
if(cljs.core.truth_(inst_30250)){
var statearr_30272_30291 = state_30266__$1;
(statearr_30272_30291[(1)] = (5));

} else {
var statearr_30273_30292 = state_30266__$1;
(statearr_30273_30292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (6))){
var inst_30253 = (state_30266[(9)]);
var inst_30249 = (state_30266[(8)]);
var inst_30246 = (state_30266[(7)]);
var inst_30253__$1 = f.call(null,inst_30246,inst_30249);
var inst_30254 = cljs.core.reduced_QMARK_.call(null,inst_30253__$1);
var state_30266__$1 = (function (){var statearr_30274 = state_30266;
(statearr_30274[(9)] = inst_30253__$1);

return statearr_30274;
})();
if(inst_30254){
var statearr_30275_30293 = state_30266__$1;
(statearr_30275_30293[(1)] = (8));

} else {
var statearr_30276_30294 = state_30266__$1;
(statearr_30276_30294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (3))){
var inst_30264 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30266__$1,inst_30264);
} else {
if((state_val_30267 === (2))){
var state_30266__$1 = state_30266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30266__$1,(4),ch);
} else {
if((state_val_30267 === (9))){
var inst_30253 = (state_30266[(9)]);
var inst_30246 = inst_30253;
var state_30266__$1 = (function (){var statearr_30277 = state_30266;
(statearr_30277[(7)] = inst_30246);

return statearr_30277;
})();
var statearr_30278_30295 = state_30266__$1;
(statearr_30278_30295[(2)] = null);

(statearr_30278_30295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (5))){
var inst_30246 = (state_30266[(7)]);
var state_30266__$1 = state_30266;
var statearr_30279_30296 = state_30266__$1;
(statearr_30279_30296[(2)] = inst_30246);

(statearr_30279_30296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (10))){
var inst_30260 = (state_30266[(2)]);
var state_30266__$1 = state_30266;
var statearr_30280_30297 = state_30266__$1;
(statearr_30280_30297[(2)] = inst_30260);

(statearr_30280_30297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30267 === (8))){
var inst_30253 = (state_30266[(9)]);
var inst_30256 = cljs.core.deref.call(null,inst_30253);
var state_30266__$1 = state_30266;
var statearr_30281_30298 = state_30266__$1;
(statearr_30281_30298[(2)] = inst_30256);

(statearr_30281_30298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto__))
;
return ((function (switch__29372__auto__,c__29486__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29373__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29373__auto____0 = (function (){
var statearr_30285 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30285[(0)] = cljs$core$async$reduce_$_state_machine__29373__auto__);

(statearr_30285[(1)] = (1));

return statearr_30285;
});
var cljs$core$async$reduce_$_state_machine__29373__auto____1 = (function (state_30266){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_30266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e30286){if((e30286 instanceof Object)){
var ex__29376__auto__ = e30286;
var statearr_30287_30299 = state_30266;
(statearr_30287_30299[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30300 = state_30266;
state_30266 = G__30300;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29373__auto__ = function(state_30266){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29373__auto____1.call(this,state_30266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29373__auto____0;
cljs$core$async$reduce_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29373__auto____1;
return cljs$core$async$reduce_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__))
})();
var state__29488__auto__ = (function (){var statearr_30288 = f__29487__auto__.call(null);
(statearr_30288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_30288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__))
);

return c__29486__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30301 = [];
var len__28021__auto___30353 = arguments.length;
var i__28022__auto___30354 = (0);
while(true){
if((i__28022__auto___30354 < len__28021__auto___30353)){
args30301.push((arguments[i__28022__auto___30354]));

var G__30355 = (i__28022__auto___30354 + (1));
i__28022__auto___30354 = G__30355;
continue;
} else {
}
break;
}

var G__30303 = args30301.length;
switch (G__30303) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30301.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__){
return (function (state_30328){
var state_val_30329 = (state_30328[(1)]);
if((state_val_30329 === (7))){
var inst_30310 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30330_30357 = state_30328__$1;
(statearr_30330_30357[(2)] = inst_30310);

(statearr_30330_30357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (1))){
var inst_30304 = cljs.core.seq.call(null,coll);
var inst_30305 = inst_30304;
var state_30328__$1 = (function (){var statearr_30331 = state_30328;
(statearr_30331[(7)] = inst_30305);

return statearr_30331;
})();
var statearr_30332_30358 = state_30328__$1;
(statearr_30332_30358[(2)] = null);

(statearr_30332_30358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (4))){
var inst_30305 = (state_30328[(7)]);
var inst_30308 = cljs.core.first.call(null,inst_30305);
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30328__$1,(7),ch,inst_30308);
} else {
if((state_val_30329 === (13))){
var inst_30322 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30333_30359 = state_30328__$1;
(statearr_30333_30359[(2)] = inst_30322);

(statearr_30333_30359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (6))){
var inst_30313 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
if(cljs.core.truth_(inst_30313)){
var statearr_30334_30360 = state_30328__$1;
(statearr_30334_30360[(1)] = (8));

} else {
var statearr_30335_30361 = state_30328__$1;
(statearr_30335_30361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (3))){
var inst_30326 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30328__$1,inst_30326);
} else {
if((state_val_30329 === (12))){
var state_30328__$1 = state_30328;
var statearr_30336_30362 = state_30328__$1;
(statearr_30336_30362[(2)] = null);

(statearr_30336_30362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (2))){
var inst_30305 = (state_30328[(7)]);
var state_30328__$1 = state_30328;
if(cljs.core.truth_(inst_30305)){
var statearr_30337_30363 = state_30328__$1;
(statearr_30337_30363[(1)] = (4));

} else {
var statearr_30338_30364 = state_30328__$1;
(statearr_30338_30364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (11))){
var inst_30319 = cljs.core.async.close_BANG_.call(null,ch);
var state_30328__$1 = state_30328;
var statearr_30339_30365 = state_30328__$1;
(statearr_30339_30365[(2)] = inst_30319);

(statearr_30339_30365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (9))){
var state_30328__$1 = state_30328;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30340_30366 = state_30328__$1;
(statearr_30340_30366[(1)] = (11));

} else {
var statearr_30341_30367 = state_30328__$1;
(statearr_30341_30367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (5))){
var inst_30305 = (state_30328[(7)]);
var state_30328__$1 = state_30328;
var statearr_30342_30368 = state_30328__$1;
(statearr_30342_30368[(2)] = inst_30305);

(statearr_30342_30368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (10))){
var inst_30324 = (state_30328[(2)]);
var state_30328__$1 = state_30328;
var statearr_30343_30369 = state_30328__$1;
(statearr_30343_30369[(2)] = inst_30324);

(statearr_30343_30369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30329 === (8))){
var inst_30305 = (state_30328[(7)]);
var inst_30315 = cljs.core.next.call(null,inst_30305);
var inst_30305__$1 = inst_30315;
var state_30328__$1 = (function (){var statearr_30344 = state_30328;
(statearr_30344[(7)] = inst_30305__$1);

return statearr_30344;
})();
var statearr_30345_30370 = state_30328__$1;
(statearr_30345_30370[(2)] = null);

(statearr_30345_30370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto__))
;
return ((function (switch__29372__auto__,c__29486__auto__){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_30349 = [null,null,null,null,null,null,null,null];
(statearr_30349[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_30349[(1)] = (1));

return statearr_30349;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_30328){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_30328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e30350){if((e30350 instanceof Object)){
var ex__29376__auto__ = e30350;
var statearr_30351_30371 = state_30328;
(statearr_30351_30371[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30372 = state_30328;
state_30328 = G__30372;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_30328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_30328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__))
})();
var state__29488__auto__ = (function (){var statearr_30352 = f__29487__auto__.call(null);
(statearr_30352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_30352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__))
);

return c__29486__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27518__auto__ = (((_ == null))?null:_);
var m__27519__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,_);
} else {
var m__27519__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27519__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m,ch);
} else {
var m__27519__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m);
} else {
var m__27519__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30598 = (function (ch,cs,meta30599){
this.ch = ch;
this.cs = cs;
this.meta30599 = meta30599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30600,meta30599__$1){
var self__ = this;
var _30600__$1 = this;
return (new cljs.core.async.t_cljs$core$async30598(self__.ch,self__.cs,meta30599__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30600){
var self__ = this;
var _30600__$1 = this;
return self__.meta30599;
});})(cs))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30598.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30599","meta30599",-1515161282,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30598";

cljs.core.async.t_cljs$core$async30598.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async30598");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30598 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30598(ch__$1,cs__$1,meta30599){
return (new cljs.core.async.t_cljs$core$async30598(ch__$1,cs__$1,meta30599));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30598(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29486__auto___30823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___30823,cs,m,dchan,dctr,done){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___30823,cs,m,dchan,dctr,done){
return (function (state_30735){
var state_val_30736 = (state_30735[(1)]);
if((state_val_30736 === (7))){
var inst_30731 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30737_30824 = state_30735__$1;
(statearr_30737_30824[(2)] = inst_30731);

(statearr_30737_30824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (20))){
var inst_30634 = (state_30735[(7)]);
var inst_30646 = cljs.core.first.call(null,inst_30634);
var inst_30647 = cljs.core.nth.call(null,inst_30646,(0),null);
var inst_30648 = cljs.core.nth.call(null,inst_30646,(1),null);
var state_30735__$1 = (function (){var statearr_30738 = state_30735;
(statearr_30738[(8)] = inst_30647);

return statearr_30738;
})();
if(cljs.core.truth_(inst_30648)){
var statearr_30739_30825 = state_30735__$1;
(statearr_30739_30825[(1)] = (22));

} else {
var statearr_30740_30826 = state_30735__$1;
(statearr_30740_30826[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (27))){
var inst_30678 = (state_30735[(9)]);
var inst_30683 = (state_30735[(10)]);
var inst_30676 = (state_30735[(11)]);
var inst_30603 = (state_30735[(12)]);
var inst_30683__$1 = cljs.core._nth.call(null,inst_30676,inst_30678);
var inst_30684 = cljs.core.async.put_BANG_.call(null,inst_30683__$1,inst_30603,done);
var state_30735__$1 = (function (){var statearr_30741 = state_30735;
(statearr_30741[(10)] = inst_30683__$1);

return statearr_30741;
})();
if(cljs.core.truth_(inst_30684)){
var statearr_30742_30827 = state_30735__$1;
(statearr_30742_30827[(1)] = (30));

} else {
var statearr_30743_30828 = state_30735__$1;
(statearr_30743_30828[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (1))){
var state_30735__$1 = state_30735;
var statearr_30744_30829 = state_30735__$1;
(statearr_30744_30829[(2)] = null);

(statearr_30744_30829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (24))){
var inst_30634 = (state_30735[(7)]);
var inst_30653 = (state_30735[(2)]);
var inst_30654 = cljs.core.next.call(null,inst_30634);
var inst_30612 = inst_30654;
var inst_30613 = null;
var inst_30614 = (0);
var inst_30615 = (0);
var state_30735__$1 = (function (){var statearr_30745 = state_30735;
(statearr_30745[(13)] = inst_30653);

(statearr_30745[(14)] = inst_30614);

(statearr_30745[(15)] = inst_30612);

(statearr_30745[(16)] = inst_30613);

(statearr_30745[(17)] = inst_30615);

return statearr_30745;
})();
var statearr_30746_30830 = state_30735__$1;
(statearr_30746_30830[(2)] = null);

(statearr_30746_30830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (39))){
var state_30735__$1 = state_30735;
var statearr_30750_30831 = state_30735__$1;
(statearr_30750_30831[(2)] = null);

(statearr_30750_30831[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (4))){
var inst_30603 = (state_30735[(12)]);
var inst_30603__$1 = (state_30735[(2)]);
var inst_30604 = (inst_30603__$1 == null);
var state_30735__$1 = (function (){var statearr_30751 = state_30735;
(statearr_30751[(12)] = inst_30603__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30604)){
var statearr_30752_30832 = state_30735__$1;
(statearr_30752_30832[(1)] = (5));

} else {
var statearr_30753_30833 = state_30735__$1;
(statearr_30753_30833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (15))){
var inst_30614 = (state_30735[(14)]);
var inst_30612 = (state_30735[(15)]);
var inst_30613 = (state_30735[(16)]);
var inst_30615 = (state_30735[(17)]);
var inst_30630 = (state_30735[(2)]);
var inst_30631 = (inst_30615 + (1));
var tmp30747 = inst_30614;
var tmp30748 = inst_30612;
var tmp30749 = inst_30613;
var inst_30612__$1 = tmp30748;
var inst_30613__$1 = tmp30749;
var inst_30614__$1 = tmp30747;
var inst_30615__$1 = inst_30631;
var state_30735__$1 = (function (){var statearr_30754 = state_30735;
(statearr_30754[(14)] = inst_30614__$1);

(statearr_30754[(18)] = inst_30630);

(statearr_30754[(15)] = inst_30612__$1);

(statearr_30754[(16)] = inst_30613__$1);

(statearr_30754[(17)] = inst_30615__$1);

return statearr_30754;
})();
var statearr_30755_30834 = state_30735__$1;
(statearr_30755_30834[(2)] = null);

(statearr_30755_30834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (21))){
var inst_30657 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30759_30835 = state_30735__$1;
(statearr_30759_30835[(2)] = inst_30657);

(statearr_30759_30835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (31))){
var inst_30683 = (state_30735[(10)]);
var inst_30687 = done.call(null,null);
var inst_30688 = cljs.core.async.untap_STAR_.call(null,m,inst_30683);
var state_30735__$1 = (function (){var statearr_30760 = state_30735;
(statearr_30760[(19)] = inst_30687);

return statearr_30760;
})();
var statearr_30761_30836 = state_30735__$1;
(statearr_30761_30836[(2)] = inst_30688);

(statearr_30761_30836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (32))){
var inst_30677 = (state_30735[(20)]);
var inst_30678 = (state_30735[(9)]);
var inst_30675 = (state_30735[(21)]);
var inst_30676 = (state_30735[(11)]);
var inst_30690 = (state_30735[(2)]);
var inst_30691 = (inst_30678 + (1));
var tmp30756 = inst_30677;
var tmp30757 = inst_30675;
var tmp30758 = inst_30676;
var inst_30675__$1 = tmp30757;
var inst_30676__$1 = tmp30758;
var inst_30677__$1 = tmp30756;
var inst_30678__$1 = inst_30691;
var state_30735__$1 = (function (){var statearr_30762 = state_30735;
(statearr_30762[(20)] = inst_30677__$1);

(statearr_30762[(9)] = inst_30678__$1);

(statearr_30762[(21)] = inst_30675__$1);

(statearr_30762[(11)] = inst_30676__$1);

(statearr_30762[(22)] = inst_30690);

return statearr_30762;
})();
var statearr_30763_30837 = state_30735__$1;
(statearr_30763_30837[(2)] = null);

(statearr_30763_30837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (40))){
var inst_30703 = (state_30735[(23)]);
var inst_30707 = done.call(null,null);
var inst_30708 = cljs.core.async.untap_STAR_.call(null,m,inst_30703);
var state_30735__$1 = (function (){var statearr_30764 = state_30735;
(statearr_30764[(24)] = inst_30707);

return statearr_30764;
})();
var statearr_30765_30838 = state_30735__$1;
(statearr_30765_30838[(2)] = inst_30708);

(statearr_30765_30838[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (33))){
var inst_30694 = (state_30735[(25)]);
var inst_30696 = cljs.core.chunked_seq_QMARK_.call(null,inst_30694);
var state_30735__$1 = state_30735;
if(inst_30696){
var statearr_30766_30839 = state_30735__$1;
(statearr_30766_30839[(1)] = (36));

} else {
var statearr_30767_30840 = state_30735__$1;
(statearr_30767_30840[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (13))){
var inst_30624 = (state_30735[(26)]);
var inst_30627 = cljs.core.async.close_BANG_.call(null,inst_30624);
var state_30735__$1 = state_30735;
var statearr_30768_30841 = state_30735__$1;
(statearr_30768_30841[(2)] = inst_30627);

(statearr_30768_30841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (22))){
var inst_30647 = (state_30735[(8)]);
var inst_30650 = cljs.core.async.close_BANG_.call(null,inst_30647);
var state_30735__$1 = state_30735;
var statearr_30769_30842 = state_30735__$1;
(statearr_30769_30842[(2)] = inst_30650);

(statearr_30769_30842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (36))){
var inst_30694 = (state_30735[(25)]);
var inst_30698 = cljs.core.chunk_first.call(null,inst_30694);
var inst_30699 = cljs.core.chunk_rest.call(null,inst_30694);
var inst_30700 = cljs.core.count.call(null,inst_30698);
var inst_30675 = inst_30699;
var inst_30676 = inst_30698;
var inst_30677 = inst_30700;
var inst_30678 = (0);
var state_30735__$1 = (function (){var statearr_30770 = state_30735;
(statearr_30770[(20)] = inst_30677);

(statearr_30770[(9)] = inst_30678);

(statearr_30770[(21)] = inst_30675);

(statearr_30770[(11)] = inst_30676);

return statearr_30770;
})();
var statearr_30771_30843 = state_30735__$1;
(statearr_30771_30843[(2)] = null);

(statearr_30771_30843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (41))){
var inst_30694 = (state_30735[(25)]);
var inst_30710 = (state_30735[(2)]);
var inst_30711 = cljs.core.next.call(null,inst_30694);
var inst_30675 = inst_30711;
var inst_30676 = null;
var inst_30677 = (0);
var inst_30678 = (0);
var state_30735__$1 = (function (){var statearr_30772 = state_30735;
(statearr_30772[(20)] = inst_30677);

(statearr_30772[(9)] = inst_30678);

(statearr_30772[(21)] = inst_30675);

(statearr_30772[(11)] = inst_30676);

(statearr_30772[(27)] = inst_30710);

return statearr_30772;
})();
var statearr_30773_30844 = state_30735__$1;
(statearr_30773_30844[(2)] = null);

(statearr_30773_30844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (43))){
var state_30735__$1 = state_30735;
var statearr_30774_30845 = state_30735__$1;
(statearr_30774_30845[(2)] = null);

(statearr_30774_30845[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (29))){
var inst_30719 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30775_30846 = state_30735__$1;
(statearr_30775_30846[(2)] = inst_30719);

(statearr_30775_30846[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (44))){
var inst_30728 = (state_30735[(2)]);
var state_30735__$1 = (function (){var statearr_30776 = state_30735;
(statearr_30776[(28)] = inst_30728);

return statearr_30776;
})();
var statearr_30777_30847 = state_30735__$1;
(statearr_30777_30847[(2)] = null);

(statearr_30777_30847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (6))){
var inst_30667 = (state_30735[(29)]);
var inst_30666 = cljs.core.deref.call(null,cs);
var inst_30667__$1 = cljs.core.keys.call(null,inst_30666);
var inst_30668 = cljs.core.count.call(null,inst_30667__$1);
var inst_30669 = cljs.core.reset_BANG_.call(null,dctr,inst_30668);
var inst_30674 = cljs.core.seq.call(null,inst_30667__$1);
var inst_30675 = inst_30674;
var inst_30676 = null;
var inst_30677 = (0);
var inst_30678 = (0);
var state_30735__$1 = (function (){var statearr_30778 = state_30735;
(statearr_30778[(20)] = inst_30677);

(statearr_30778[(9)] = inst_30678);

(statearr_30778[(21)] = inst_30675);

(statearr_30778[(30)] = inst_30669);

(statearr_30778[(29)] = inst_30667__$1);

(statearr_30778[(11)] = inst_30676);

return statearr_30778;
})();
var statearr_30779_30848 = state_30735__$1;
(statearr_30779_30848[(2)] = null);

(statearr_30779_30848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (28))){
var inst_30694 = (state_30735[(25)]);
var inst_30675 = (state_30735[(21)]);
var inst_30694__$1 = cljs.core.seq.call(null,inst_30675);
var state_30735__$1 = (function (){var statearr_30780 = state_30735;
(statearr_30780[(25)] = inst_30694__$1);

return statearr_30780;
})();
if(inst_30694__$1){
var statearr_30781_30849 = state_30735__$1;
(statearr_30781_30849[(1)] = (33));

} else {
var statearr_30782_30850 = state_30735__$1;
(statearr_30782_30850[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (25))){
var inst_30677 = (state_30735[(20)]);
var inst_30678 = (state_30735[(9)]);
var inst_30680 = (inst_30678 < inst_30677);
var inst_30681 = inst_30680;
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30681)){
var statearr_30783_30851 = state_30735__$1;
(statearr_30783_30851[(1)] = (27));

} else {
var statearr_30784_30852 = state_30735__$1;
(statearr_30784_30852[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (34))){
var state_30735__$1 = state_30735;
var statearr_30785_30853 = state_30735__$1;
(statearr_30785_30853[(2)] = null);

(statearr_30785_30853[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (17))){
var state_30735__$1 = state_30735;
var statearr_30786_30854 = state_30735__$1;
(statearr_30786_30854[(2)] = null);

(statearr_30786_30854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (3))){
var inst_30733 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30735__$1,inst_30733);
} else {
if((state_val_30736 === (12))){
var inst_30662 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30787_30855 = state_30735__$1;
(statearr_30787_30855[(2)] = inst_30662);

(statearr_30787_30855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (2))){
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30735__$1,(4),ch);
} else {
if((state_val_30736 === (23))){
var state_30735__$1 = state_30735;
var statearr_30788_30856 = state_30735__$1;
(statearr_30788_30856[(2)] = null);

(statearr_30788_30856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (35))){
var inst_30717 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30789_30857 = state_30735__$1;
(statearr_30789_30857[(2)] = inst_30717);

(statearr_30789_30857[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (19))){
var inst_30634 = (state_30735[(7)]);
var inst_30638 = cljs.core.chunk_first.call(null,inst_30634);
var inst_30639 = cljs.core.chunk_rest.call(null,inst_30634);
var inst_30640 = cljs.core.count.call(null,inst_30638);
var inst_30612 = inst_30639;
var inst_30613 = inst_30638;
var inst_30614 = inst_30640;
var inst_30615 = (0);
var state_30735__$1 = (function (){var statearr_30790 = state_30735;
(statearr_30790[(14)] = inst_30614);

(statearr_30790[(15)] = inst_30612);

(statearr_30790[(16)] = inst_30613);

(statearr_30790[(17)] = inst_30615);

return statearr_30790;
})();
var statearr_30791_30858 = state_30735__$1;
(statearr_30791_30858[(2)] = null);

(statearr_30791_30858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (11))){
var inst_30612 = (state_30735[(15)]);
var inst_30634 = (state_30735[(7)]);
var inst_30634__$1 = cljs.core.seq.call(null,inst_30612);
var state_30735__$1 = (function (){var statearr_30792 = state_30735;
(statearr_30792[(7)] = inst_30634__$1);

return statearr_30792;
})();
if(inst_30634__$1){
var statearr_30793_30859 = state_30735__$1;
(statearr_30793_30859[(1)] = (16));

} else {
var statearr_30794_30860 = state_30735__$1;
(statearr_30794_30860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (9))){
var inst_30664 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30795_30861 = state_30735__$1;
(statearr_30795_30861[(2)] = inst_30664);

(statearr_30795_30861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (5))){
var inst_30610 = cljs.core.deref.call(null,cs);
var inst_30611 = cljs.core.seq.call(null,inst_30610);
var inst_30612 = inst_30611;
var inst_30613 = null;
var inst_30614 = (0);
var inst_30615 = (0);
var state_30735__$1 = (function (){var statearr_30796 = state_30735;
(statearr_30796[(14)] = inst_30614);

(statearr_30796[(15)] = inst_30612);

(statearr_30796[(16)] = inst_30613);

(statearr_30796[(17)] = inst_30615);

return statearr_30796;
})();
var statearr_30797_30862 = state_30735__$1;
(statearr_30797_30862[(2)] = null);

(statearr_30797_30862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (14))){
var state_30735__$1 = state_30735;
var statearr_30798_30863 = state_30735__$1;
(statearr_30798_30863[(2)] = null);

(statearr_30798_30863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (45))){
var inst_30725 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30799_30864 = state_30735__$1;
(statearr_30799_30864[(2)] = inst_30725);

(statearr_30799_30864[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (26))){
var inst_30667 = (state_30735[(29)]);
var inst_30721 = (state_30735[(2)]);
var inst_30722 = cljs.core.seq.call(null,inst_30667);
var state_30735__$1 = (function (){var statearr_30800 = state_30735;
(statearr_30800[(31)] = inst_30721);

return statearr_30800;
})();
if(inst_30722){
var statearr_30801_30865 = state_30735__$1;
(statearr_30801_30865[(1)] = (42));

} else {
var statearr_30802_30866 = state_30735__$1;
(statearr_30802_30866[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (16))){
var inst_30634 = (state_30735[(7)]);
var inst_30636 = cljs.core.chunked_seq_QMARK_.call(null,inst_30634);
var state_30735__$1 = state_30735;
if(inst_30636){
var statearr_30803_30867 = state_30735__$1;
(statearr_30803_30867[(1)] = (19));

} else {
var statearr_30804_30868 = state_30735__$1;
(statearr_30804_30868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (38))){
var inst_30714 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30805_30869 = state_30735__$1;
(statearr_30805_30869[(2)] = inst_30714);

(statearr_30805_30869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (30))){
var state_30735__$1 = state_30735;
var statearr_30806_30870 = state_30735__$1;
(statearr_30806_30870[(2)] = null);

(statearr_30806_30870[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (10))){
var inst_30613 = (state_30735[(16)]);
var inst_30615 = (state_30735[(17)]);
var inst_30623 = cljs.core._nth.call(null,inst_30613,inst_30615);
var inst_30624 = cljs.core.nth.call(null,inst_30623,(0),null);
var inst_30625 = cljs.core.nth.call(null,inst_30623,(1),null);
var state_30735__$1 = (function (){var statearr_30807 = state_30735;
(statearr_30807[(26)] = inst_30624);

return statearr_30807;
})();
if(cljs.core.truth_(inst_30625)){
var statearr_30808_30871 = state_30735__$1;
(statearr_30808_30871[(1)] = (13));

} else {
var statearr_30809_30872 = state_30735__$1;
(statearr_30809_30872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (18))){
var inst_30660 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30810_30873 = state_30735__$1;
(statearr_30810_30873[(2)] = inst_30660);

(statearr_30810_30873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (42))){
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30735__$1,(45),dchan);
} else {
if((state_val_30736 === (37))){
var inst_30694 = (state_30735[(25)]);
var inst_30603 = (state_30735[(12)]);
var inst_30703 = (state_30735[(23)]);
var inst_30703__$1 = cljs.core.first.call(null,inst_30694);
var inst_30704 = cljs.core.async.put_BANG_.call(null,inst_30703__$1,inst_30603,done);
var state_30735__$1 = (function (){var statearr_30811 = state_30735;
(statearr_30811[(23)] = inst_30703__$1);

return statearr_30811;
})();
if(cljs.core.truth_(inst_30704)){
var statearr_30812_30874 = state_30735__$1;
(statearr_30812_30874[(1)] = (39));

} else {
var statearr_30813_30875 = state_30735__$1;
(statearr_30813_30875[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (8))){
var inst_30614 = (state_30735[(14)]);
var inst_30615 = (state_30735[(17)]);
var inst_30617 = (inst_30615 < inst_30614);
var inst_30618 = inst_30617;
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30618)){
var statearr_30814_30876 = state_30735__$1;
(statearr_30814_30876[(1)] = (10));

} else {
var statearr_30815_30877 = state_30735__$1;
(statearr_30815_30877[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___30823,cs,m,dchan,dctr,done))
;
return ((function (switch__29372__auto__,c__29486__auto___30823,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29373__auto__ = null;
var cljs$core$async$mult_$_state_machine__29373__auto____0 = (function (){
var statearr_30819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30819[(0)] = cljs$core$async$mult_$_state_machine__29373__auto__);

(statearr_30819[(1)] = (1));

return statearr_30819;
});
var cljs$core$async$mult_$_state_machine__29373__auto____1 = (function (state_30735){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_30735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e30820){if((e30820 instanceof Object)){
var ex__29376__auto__ = e30820;
var statearr_30821_30878 = state_30735;
(statearr_30821_30878[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30879 = state_30735;
state_30735 = G__30879;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29373__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29373__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29373__auto____0;
cljs$core$async$mult_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29373__auto____1;
return cljs$core$async$mult_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___30823,cs,m,dchan,dctr,done))
})();
var state__29488__auto__ = (function (){var statearr_30822 = f__29487__auto__.call(null);
(statearr_30822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___30823);

return statearr_30822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___30823,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30880 = [];
var len__28021__auto___30883 = arguments.length;
var i__28022__auto___30884 = (0);
while(true){
if((i__28022__auto___30884 < len__28021__auto___30883)){
args30880.push((arguments[i__28022__auto___30884]));

var G__30885 = (i__28022__auto___30884 + (1));
i__28022__auto___30884 = G__30885;
continue;
} else {
}
break;
}

var G__30882 = args30880.length;
switch (G__30882) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30880.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m,ch);
} else {
var m__27519__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m,ch);
} else {
var m__27519__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m);
} else {
var m__27519__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m,state_map);
} else {
var m__27519__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27518__auto__ = (((m == null))?null:m);
var m__27519__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,m,mode);
} else {
var m__27519__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28028__auto__ = [];
var len__28021__auto___30897 = arguments.length;
var i__28022__auto___30898 = (0);
while(true){
if((i__28022__auto___30898 < len__28021__auto___30897)){
args__28028__auto__.push((arguments[i__28022__auto___30898]));

var G__30899 = (i__28022__auto___30898 + (1));
i__28022__auto___30898 = G__30899;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((3) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28029__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30891){
var map__30892 = p__30891;
var map__30892__$1 = ((((!((map__30892 == null)))?((((map__30892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30892):map__30892);
var opts = map__30892__$1;
var statearr_30894_30900 = state;
(statearr_30894_30900[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__30892,map__30892__$1,opts){
return (function (val){
var statearr_30895_30901 = state;
(statearr_30895_30901[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30892,map__30892__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_30896_30902 = state;
(statearr_30896_30902[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30887){
var G__30888 = cljs.core.first.call(null,seq30887);
var seq30887__$1 = cljs.core.next.call(null,seq30887);
var G__30889 = cljs.core.first.call(null,seq30887__$1);
var seq30887__$2 = cljs.core.next.call(null,seq30887__$1);
var G__30890 = cljs.core.first.call(null,seq30887__$2);
var seq30887__$3 = cljs.core.next.call(null,seq30887__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30888,G__30889,G__30890,seq30887__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31070 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31071){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31071 = meta31071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31072,meta31071__$1){
var self__ = this;
var _31072__$1 = this;
return (new cljs.core.async.t_cljs$core$async31070(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31071__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31072){
var self__ = this;
var _31072__$1 = this;
return self__.meta31071;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31071","meta31071",1702237696,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31070";

cljs.core.async.t_cljs$core$async31070.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async31070");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31070 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31070(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31071){
return (new cljs.core.async.t_cljs$core$async31070(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31071));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31070(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29486__auto___31237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___31237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___31237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31174){
var state_val_31175 = (state_31174[(1)]);
if((state_val_31175 === (7))){
var inst_31089 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31176_31238 = state_31174__$1;
(statearr_31176_31238[(2)] = inst_31089);

(statearr_31176_31238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (20))){
var inst_31101 = (state_31174[(7)]);
var state_31174__$1 = state_31174;
var statearr_31177_31239 = state_31174__$1;
(statearr_31177_31239[(2)] = inst_31101);

(statearr_31177_31239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (27))){
var state_31174__$1 = state_31174;
var statearr_31178_31240 = state_31174__$1;
(statearr_31178_31240[(2)] = null);

(statearr_31178_31240[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (1))){
var inst_31076 = (state_31174[(8)]);
var inst_31076__$1 = calc_state.call(null);
var inst_31078 = (inst_31076__$1 == null);
var inst_31079 = cljs.core.not.call(null,inst_31078);
var state_31174__$1 = (function (){var statearr_31179 = state_31174;
(statearr_31179[(8)] = inst_31076__$1);

return statearr_31179;
})();
if(inst_31079){
var statearr_31180_31241 = state_31174__$1;
(statearr_31180_31241[(1)] = (2));

} else {
var statearr_31181_31242 = state_31174__$1;
(statearr_31181_31242[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (24))){
var inst_31125 = (state_31174[(9)]);
var inst_31134 = (state_31174[(10)]);
var inst_31148 = (state_31174[(11)]);
var inst_31148__$1 = inst_31125.call(null,inst_31134);
var state_31174__$1 = (function (){var statearr_31182 = state_31174;
(statearr_31182[(11)] = inst_31148__$1);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31148__$1)){
var statearr_31183_31243 = state_31174__$1;
(statearr_31183_31243[(1)] = (29));

} else {
var statearr_31184_31244 = state_31174__$1;
(statearr_31184_31244[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (4))){
var inst_31092 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31092)){
var statearr_31185_31245 = state_31174__$1;
(statearr_31185_31245[(1)] = (8));

} else {
var statearr_31186_31246 = state_31174__$1;
(statearr_31186_31246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (15))){
var inst_31119 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31119)){
var statearr_31187_31247 = state_31174__$1;
(statearr_31187_31247[(1)] = (19));

} else {
var statearr_31188_31248 = state_31174__$1;
(statearr_31188_31248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (21))){
var inst_31124 = (state_31174[(12)]);
var inst_31124__$1 = (state_31174[(2)]);
var inst_31125 = cljs.core.get.call(null,inst_31124__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31126 = cljs.core.get.call(null,inst_31124__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31127 = cljs.core.get.call(null,inst_31124__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31174__$1 = (function (){var statearr_31189 = state_31174;
(statearr_31189[(12)] = inst_31124__$1);

(statearr_31189[(9)] = inst_31125);

(statearr_31189[(13)] = inst_31126);

return statearr_31189;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31174__$1,(22),inst_31127);
} else {
if((state_val_31175 === (31))){
var inst_31156 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31156)){
var statearr_31190_31249 = state_31174__$1;
(statearr_31190_31249[(1)] = (32));

} else {
var statearr_31191_31250 = state_31174__$1;
(statearr_31191_31250[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (32))){
var inst_31133 = (state_31174[(14)]);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31174__$1,(35),out,inst_31133);
} else {
if((state_val_31175 === (33))){
var inst_31124 = (state_31174[(12)]);
var inst_31101 = inst_31124;
var state_31174__$1 = (function (){var statearr_31192 = state_31174;
(statearr_31192[(7)] = inst_31101);

return statearr_31192;
})();
var statearr_31193_31251 = state_31174__$1;
(statearr_31193_31251[(2)] = null);

(statearr_31193_31251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (13))){
var inst_31101 = (state_31174[(7)]);
var inst_31108 = inst_31101.cljs$lang$protocol_mask$partition0$;
var inst_31109 = (inst_31108 & (64));
var inst_31110 = inst_31101.cljs$core$ISeq$;
var inst_31111 = (cljs.core.PROTOCOL_SENTINEL === inst_31110);
var inst_31112 = (inst_31109) || (inst_31111);
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31112)){
var statearr_31194_31252 = state_31174__$1;
(statearr_31194_31252[(1)] = (16));

} else {
var statearr_31195_31253 = state_31174__$1;
(statearr_31195_31253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (22))){
var inst_31133 = (state_31174[(14)]);
var inst_31134 = (state_31174[(10)]);
var inst_31132 = (state_31174[(2)]);
var inst_31133__$1 = cljs.core.nth.call(null,inst_31132,(0),null);
var inst_31134__$1 = cljs.core.nth.call(null,inst_31132,(1),null);
var inst_31135 = (inst_31133__$1 == null);
var inst_31136 = cljs.core._EQ_.call(null,inst_31134__$1,change);
var inst_31137 = (inst_31135) || (inst_31136);
var state_31174__$1 = (function (){var statearr_31196 = state_31174;
(statearr_31196[(14)] = inst_31133__$1);

(statearr_31196[(10)] = inst_31134__$1);

return statearr_31196;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31197_31254 = state_31174__$1;
(statearr_31197_31254[(1)] = (23));

} else {
var statearr_31198_31255 = state_31174__$1;
(statearr_31198_31255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (36))){
var inst_31124 = (state_31174[(12)]);
var inst_31101 = inst_31124;
var state_31174__$1 = (function (){var statearr_31199 = state_31174;
(statearr_31199[(7)] = inst_31101);

return statearr_31199;
})();
var statearr_31200_31256 = state_31174__$1;
(statearr_31200_31256[(2)] = null);

(statearr_31200_31256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (29))){
var inst_31148 = (state_31174[(11)]);
var state_31174__$1 = state_31174;
var statearr_31201_31257 = state_31174__$1;
(statearr_31201_31257[(2)] = inst_31148);

(statearr_31201_31257[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (6))){
var state_31174__$1 = state_31174;
var statearr_31202_31258 = state_31174__$1;
(statearr_31202_31258[(2)] = false);

(statearr_31202_31258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (28))){
var inst_31144 = (state_31174[(2)]);
var inst_31145 = calc_state.call(null);
var inst_31101 = inst_31145;
var state_31174__$1 = (function (){var statearr_31203 = state_31174;
(statearr_31203[(7)] = inst_31101);

(statearr_31203[(15)] = inst_31144);

return statearr_31203;
})();
var statearr_31204_31259 = state_31174__$1;
(statearr_31204_31259[(2)] = null);

(statearr_31204_31259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (25))){
var inst_31170 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31205_31260 = state_31174__$1;
(statearr_31205_31260[(2)] = inst_31170);

(statearr_31205_31260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (34))){
var inst_31168 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31206_31261 = state_31174__$1;
(statearr_31206_31261[(2)] = inst_31168);

(statearr_31206_31261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (17))){
var state_31174__$1 = state_31174;
var statearr_31207_31262 = state_31174__$1;
(statearr_31207_31262[(2)] = false);

(statearr_31207_31262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (3))){
var state_31174__$1 = state_31174;
var statearr_31208_31263 = state_31174__$1;
(statearr_31208_31263[(2)] = false);

(statearr_31208_31263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (12))){
var inst_31172 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31174__$1,inst_31172);
} else {
if((state_val_31175 === (2))){
var inst_31076 = (state_31174[(8)]);
var inst_31081 = inst_31076.cljs$lang$protocol_mask$partition0$;
var inst_31082 = (inst_31081 & (64));
var inst_31083 = inst_31076.cljs$core$ISeq$;
var inst_31084 = (cljs.core.PROTOCOL_SENTINEL === inst_31083);
var inst_31085 = (inst_31082) || (inst_31084);
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31085)){
var statearr_31209_31264 = state_31174__$1;
(statearr_31209_31264[(1)] = (5));

} else {
var statearr_31210_31265 = state_31174__$1;
(statearr_31210_31265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (23))){
var inst_31133 = (state_31174[(14)]);
var inst_31139 = (inst_31133 == null);
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31139)){
var statearr_31211_31266 = state_31174__$1;
(statearr_31211_31266[(1)] = (26));

} else {
var statearr_31212_31267 = state_31174__$1;
(statearr_31212_31267[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (35))){
var inst_31159 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31159)){
var statearr_31213_31268 = state_31174__$1;
(statearr_31213_31268[(1)] = (36));

} else {
var statearr_31214_31269 = state_31174__$1;
(statearr_31214_31269[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (19))){
var inst_31101 = (state_31174[(7)]);
var inst_31121 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31101);
var state_31174__$1 = state_31174;
var statearr_31215_31270 = state_31174__$1;
(statearr_31215_31270[(2)] = inst_31121);

(statearr_31215_31270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (11))){
var inst_31101 = (state_31174[(7)]);
var inst_31105 = (inst_31101 == null);
var inst_31106 = cljs.core.not.call(null,inst_31105);
var state_31174__$1 = state_31174;
if(inst_31106){
var statearr_31216_31271 = state_31174__$1;
(statearr_31216_31271[(1)] = (13));

} else {
var statearr_31217_31272 = state_31174__$1;
(statearr_31217_31272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (9))){
var inst_31076 = (state_31174[(8)]);
var state_31174__$1 = state_31174;
var statearr_31218_31273 = state_31174__$1;
(statearr_31218_31273[(2)] = inst_31076);

(statearr_31218_31273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (5))){
var state_31174__$1 = state_31174;
var statearr_31219_31274 = state_31174__$1;
(statearr_31219_31274[(2)] = true);

(statearr_31219_31274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (14))){
var state_31174__$1 = state_31174;
var statearr_31220_31275 = state_31174__$1;
(statearr_31220_31275[(2)] = false);

(statearr_31220_31275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (26))){
var inst_31134 = (state_31174[(10)]);
var inst_31141 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31134);
var state_31174__$1 = state_31174;
var statearr_31221_31276 = state_31174__$1;
(statearr_31221_31276[(2)] = inst_31141);

(statearr_31221_31276[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (16))){
var state_31174__$1 = state_31174;
var statearr_31222_31277 = state_31174__$1;
(statearr_31222_31277[(2)] = true);

(statearr_31222_31277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (38))){
var inst_31164 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31223_31278 = state_31174__$1;
(statearr_31223_31278[(2)] = inst_31164);

(statearr_31223_31278[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (30))){
var inst_31125 = (state_31174[(9)]);
var inst_31134 = (state_31174[(10)]);
var inst_31126 = (state_31174[(13)]);
var inst_31151 = cljs.core.empty_QMARK_.call(null,inst_31125);
var inst_31152 = inst_31126.call(null,inst_31134);
var inst_31153 = cljs.core.not.call(null,inst_31152);
var inst_31154 = (inst_31151) && (inst_31153);
var state_31174__$1 = state_31174;
var statearr_31224_31279 = state_31174__$1;
(statearr_31224_31279[(2)] = inst_31154);

(statearr_31224_31279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (10))){
var inst_31076 = (state_31174[(8)]);
var inst_31097 = (state_31174[(2)]);
var inst_31098 = cljs.core.get.call(null,inst_31097,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31099 = cljs.core.get.call(null,inst_31097,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31100 = cljs.core.get.call(null,inst_31097,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31101 = inst_31076;
var state_31174__$1 = (function (){var statearr_31225 = state_31174;
(statearr_31225[(7)] = inst_31101);

(statearr_31225[(16)] = inst_31098);

(statearr_31225[(17)] = inst_31099);

(statearr_31225[(18)] = inst_31100);

return statearr_31225;
})();
var statearr_31226_31280 = state_31174__$1;
(statearr_31226_31280[(2)] = null);

(statearr_31226_31280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (18))){
var inst_31116 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31227_31281 = state_31174__$1;
(statearr_31227_31281[(2)] = inst_31116);

(statearr_31227_31281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (37))){
var state_31174__$1 = state_31174;
var statearr_31228_31282 = state_31174__$1;
(statearr_31228_31282[(2)] = null);

(statearr_31228_31282[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (8))){
var inst_31076 = (state_31174[(8)]);
var inst_31094 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31076);
var state_31174__$1 = state_31174;
var statearr_31229_31283 = state_31174__$1;
(statearr_31229_31283[(2)] = inst_31094);

(statearr_31229_31283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___31237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29372__auto__,c__29486__auto___31237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29373__auto__ = null;
var cljs$core$async$mix_$_state_machine__29373__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31233[(0)] = cljs$core$async$mix_$_state_machine__29373__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var cljs$core$async$mix_$_state_machine__29373__auto____1 = (function (state_31174){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_31174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e31234){if((e31234 instanceof Object)){
var ex__29376__auto__ = e31234;
var statearr_31235_31284 = state_31174;
(statearr_31235_31284[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31285 = state_31174;
state_31174 = G__31285;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29373__auto__ = function(state_31174){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29373__auto____1.call(this,state_31174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29373__auto____0;
cljs$core$async$mix_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29373__auto____1;
return cljs$core$async$mix_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___31237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29488__auto__ = (function (){var statearr_31236 = f__29487__auto__.call(null);
(statearr_31236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___31237);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___31237,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27518__auto__ = (((p == null))?null:p);
var m__27519__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27519__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27518__auto__ = (((p == null))?null:p);
var m__27519__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,p,v,ch);
} else {
var m__27519__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31286 = [];
var len__28021__auto___31289 = arguments.length;
var i__28022__auto___31290 = (0);
while(true){
if((i__28022__auto___31290 < len__28021__auto___31289)){
args31286.push((arguments[i__28022__auto___31290]));

var G__31291 = (i__28022__auto___31290 + (1));
i__28022__auto___31290 = G__31291;
continue;
} else {
}
break;
}

var G__31288 = args31286.length;
switch (G__31288) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31286.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27518__auto__ = (((p == null))?null:p);
var m__27519__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,p);
} else {
var m__27519__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27518__auto__ = (((p == null))?null:p);
var m__27519__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27518__auto__)]);
if(!((m__27519__auto__ == null))){
return m__27519__auto__.call(null,p,v);
} else {
var m__27519__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27519__auto____$1 == null))){
return m__27519__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31294 = [];
var len__28021__auto___31419 = arguments.length;
var i__28022__auto___31420 = (0);
while(true){
if((i__28022__auto___31420 < len__28021__auto___31419)){
args31294.push((arguments[i__28022__auto___31420]));

var G__31421 = (i__28022__auto___31420 + (1));
i__28022__auto___31420 = G__31421;
continue;
} else {
}
break;
}

var G__31296 = args31294.length;
switch (G__31296) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31294.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26805__auto__,mults){
return (function (p1__31293_SHARP_){
if(cljs.core.truth_(p1__31293_SHARP_.call(null,topic))){
return p1__31293_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31293_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31297 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31298){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31298 = meta31298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31299,meta31298__$1){
var self__ = this;
var _31299__$1 = this;
return (new cljs.core.async.t_cljs$core$async31297(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31298__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31299){
var self__ = this;
var _31299__$1 = this;
return self__.meta31298;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31298","meta31298",2132235407,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31297";

cljs.core.async.t_cljs$core$async31297.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async31297");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31297 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31297(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31298){
return (new cljs.core.async.t_cljs$core$async31297(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31298));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31297(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29486__auto___31423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___31423,mults,ensure_mult,p){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___31423,mults,ensure_mult,p){
return (function (state_31371){
var state_val_31372 = (state_31371[(1)]);
if((state_val_31372 === (7))){
var inst_31367 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31373_31424 = state_31371__$1;
(statearr_31373_31424[(2)] = inst_31367);

(statearr_31373_31424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (20))){
var state_31371__$1 = state_31371;
var statearr_31374_31425 = state_31371__$1;
(statearr_31374_31425[(2)] = null);

(statearr_31374_31425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (1))){
var state_31371__$1 = state_31371;
var statearr_31375_31426 = state_31371__$1;
(statearr_31375_31426[(2)] = null);

(statearr_31375_31426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (24))){
var inst_31350 = (state_31371[(7)]);
var inst_31359 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31350);
var state_31371__$1 = state_31371;
var statearr_31376_31427 = state_31371__$1;
(statearr_31376_31427[(2)] = inst_31359);

(statearr_31376_31427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (4))){
var inst_31302 = (state_31371[(8)]);
var inst_31302__$1 = (state_31371[(2)]);
var inst_31303 = (inst_31302__$1 == null);
var state_31371__$1 = (function (){var statearr_31377 = state_31371;
(statearr_31377[(8)] = inst_31302__$1);

return statearr_31377;
})();
if(cljs.core.truth_(inst_31303)){
var statearr_31378_31428 = state_31371__$1;
(statearr_31378_31428[(1)] = (5));

} else {
var statearr_31379_31429 = state_31371__$1;
(statearr_31379_31429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (15))){
var inst_31344 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31380_31430 = state_31371__$1;
(statearr_31380_31430[(2)] = inst_31344);

(statearr_31380_31430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (21))){
var inst_31364 = (state_31371[(2)]);
var state_31371__$1 = (function (){var statearr_31381 = state_31371;
(statearr_31381[(9)] = inst_31364);

return statearr_31381;
})();
var statearr_31382_31431 = state_31371__$1;
(statearr_31382_31431[(2)] = null);

(statearr_31382_31431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (13))){
var inst_31326 = (state_31371[(10)]);
var inst_31328 = cljs.core.chunked_seq_QMARK_.call(null,inst_31326);
var state_31371__$1 = state_31371;
if(inst_31328){
var statearr_31383_31432 = state_31371__$1;
(statearr_31383_31432[(1)] = (16));

} else {
var statearr_31384_31433 = state_31371__$1;
(statearr_31384_31433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (22))){
var inst_31356 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
if(cljs.core.truth_(inst_31356)){
var statearr_31385_31434 = state_31371__$1;
(statearr_31385_31434[(1)] = (23));

} else {
var statearr_31386_31435 = state_31371__$1;
(statearr_31386_31435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (6))){
var inst_31352 = (state_31371[(11)]);
var inst_31302 = (state_31371[(8)]);
var inst_31350 = (state_31371[(7)]);
var inst_31350__$1 = topic_fn.call(null,inst_31302);
var inst_31351 = cljs.core.deref.call(null,mults);
var inst_31352__$1 = cljs.core.get.call(null,inst_31351,inst_31350__$1);
var state_31371__$1 = (function (){var statearr_31387 = state_31371;
(statearr_31387[(11)] = inst_31352__$1);

(statearr_31387[(7)] = inst_31350__$1);

return statearr_31387;
})();
if(cljs.core.truth_(inst_31352__$1)){
var statearr_31388_31436 = state_31371__$1;
(statearr_31388_31436[(1)] = (19));

} else {
var statearr_31389_31437 = state_31371__$1;
(statearr_31389_31437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (25))){
var inst_31361 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31390_31438 = state_31371__$1;
(statearr_31390_31438[(2)] = inst_31361);

(statearr_31390_31438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (17))){
var inst_31326 = (state_31371[(10)]);
var inst_31335 = cljs.core.first.call(null,inst_31326);
var inst_31336 = cljs.core.async.muxch_STAR_.call(null,inst_31335);
var inst_31337 = cljs.core.async.close_BANG_.call(null,inst_31336);
var inst_31338 = cljs.core.next.call(null,inst_31326);
var inst_31312 = inst_31338;
var inst_31313 = null;
var inst_31314 = (0);
var inst_31315 = (0);
var state_31371__$1 = (function (){var statearr_31391 = state_31371;
(statearr_31391[(12)] = inst_31337);

(statearr_31391[(13)] = inst_31312);

(statearr_31391[(14)] = inst_31315);

(statearr_31391[(15)] = inst_31314);

(statearr_31391[(16)] = inst_31313);

return statearr_31391;
})();
var statearr_31392_31439 = state_31371__$1;
(statearr_31392_31439[(2)] = null);

(statearr_31392_31439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (3))){
var inst_31369 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31371__$1,inst_31369);
} else {
if((state_val_31372 === (12))){
var inst_31346 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31393_31440 = state_31371__$1;
(statearr_31393_31440[(2)] = inst_31346);

(statearr_31393_31440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (2))){
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31371__$1,(4),ch);
} else {
if((state_val_31372 === (23))){
var state_31371__$1 = state_31371;
var statearr_31394_31441 = state_31371__$1;
(statearr_31394_31441[(2)] = null);

(statearr_31394_31441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (19))){
var inst_31352 = (state_31371[(11)]);
var inst_31302 = (state_31371[(8)]);
var inst_31354 = cljs.core.async.muxch_STAR_.call(null,inst_31352);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31371__$1,(22),inst_31354,inst_31302);
} else {
if((state_val_31372 === (11))){
var inst_31326 = (state_31371[(10)]);
var inst_31312 = (state_31371[(13)]);
var inst_31326__$1 = cljs.core.seq.call(null,inst_31312);
var state_31371__$1 = (function (){var statearr_31395 = state_31371;
(statearr_31395[(10)] = inst_31326__$1);

return statearr_31395;
})();
if(inst_31326__$1){
var statearr_31396_31442 = state_31371__$1;
(statearr_31396_31442[(1)] = (13));

} else {
var statearr_31397_31443 = state_31371__$1;
(statearr_31397_31443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (9))){
var inst_31348 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31398_31444 = state_31371__$1;
(statearr_31398_31444[(2)] = inst_31348);

(statearr_31398_31444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (5))){
var inst_31309 = cljs.core.deref.call(null,mults);
var inst_31310 = cljs.core.vals.call(null,inst_31309);
var inst_31311 = cljs.core.seq.call(null,inst_31310);
var inst_31312 = inst_31311;
var inst_31313 = null;
var inst_31314 = (0);
var inst_31315 = (0);
var state_31371__$1 = (function (){var statearr_31399 = state_31371;
(statearr_31399[(13)] = inst_31312);

(statearr_31399[(14)] = inst_31315);

(statearr_31399[(15)] = inst_31314);

(statearr_31399[(16)] = inst_31313);

return statearr_31399;
})();
var statearr_31400_31445 = state_31371__$1;
(statearr_31400_31445[(2)] = null);

(statearr_31400_31445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (14))){
var state_31371__$1 = state_31371;
var statearr_31404_31446 = state_31371__$1;
(statearr_31404_31446[(2)] = null);

(statearr_31404_31446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (16))){
var inst_31326 = (state_31371[(10)]);
var inst_31330 = cljs.core.chunk_first.call(null,inst_31326);
var inst_31331 = cljs.core.chunk_rest.call(null,inst_31326);
var inst_31332 = cljs.core.count.call(null,inst_31330);
var inst_31312 = inst_31331;
var inst_31313 = inst_31330;
var inst_31314 = inst_31332;
var inst_31315 = (0);
var state_31371__$1 = (function (){var statearr_31405 = state_31371;
(statearr_31405[(13)] = inst_31312);

(statearr_31405[(14)] = inst_31315);

(statearr_31405[(15)] = inst_31314);

(statearr_31405[(16)] = inst_31313);

return statearr_31405;
})();
var statearr_31406_31447 = state_31371__$1;
(statearr_31406_31447[(2)] = null);

(statearr_31406_31447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (10))){
var inst_31312 = (state_31371[(13)]);
var inst_31315 = (state_31371[(14)]);
var inst_31314 = (state_31371[(15)]);
var inst_31313 = (state_31371[(16)]);
var inst_31320 = cljs.core._nth.call(null,inst_31313,inst_31315);
var inst_31321 = cljs.core.async.muxch_STAR_.call(null,inst_31320);
var inst_31322 = cljs.core.async.close_BANG_.call(null,inst_31321);
var inst_31323 = (inst_31315 + (1));
var tmp31401 = inst_31312;
var tmp31402 = inst_31314;
var tmp31403 = inst_31313;
var inst_31312__$1 = tmp31401;
var inst_31313__$1 = tmp31403;
var inst_31314__$1 = tmp31402;
var inst_31315__$1 = inst_31323;
var state_31371__$1 = (function (){var statearr_31407 = state_31371;
(statearr_31407[(17)] = inst_31322);

(statearr_31407[(13)] = inst_31312__$1);

(statearr_31407[(14)] = inst_31315__$1);

(statearr_31407[(15)] = inst_31314__$1);

(statearr_31407[(16)] = inst_31313__$1);

return statearr_31407;
})();
var statearr_31408_31448 = state_31371__$1;
(statearr_31408_31448[(2)] = null);

(statearr_31408_31448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (18))){
var inst_31341 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31409_31449 = state_31371__$1;
(statearr_31409_31449[(2)] = inst_31341);

(statearr_31409_31449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (8))){
var inst_31315 = (state_31371[(14)]);
var inst_31314 = (state_31371[(15)]);
var inst_31317 = (inst_31315 < inst_31314);
var inst_31318 = inst_31317;
var state_31371__$1 = state_31371;
if(cljs.core.truth_(inst_31318)){
var statearr_31410_31450 = state_31371__$1;
(statearr_31410_31450[(1)] = (10));

} else {
var statearr_31411_31451 = state_31371__$1;
(statearr_31411_31451[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___31423,mults,ensure_mult,p))
;
return ((function (switch__29372__auto__,c__29486__auto___31423,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_31415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31415[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_31415[(1)] = (1));

return statearr_31415;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_31371){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_31371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e31416){if((e31416 instanceof Object)){
var ex__29376__auto__ = e31416;
var statearr_31417_31452 = state_31371;
(statearr_31417_31452[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31453 = state_31371;
state_31371 = G__31453;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_31371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_31371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___31423,mults,ensure_mult,p))
})();
var state__29488__auto__ = (function (){var statearr_31418 = f__29487__auto__.call(null);
(statearr_31418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___31423);

return statearr_31418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___31423,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31454 = [];
var len__28021__auto___31457 = arguments.length;
var i__28022__auto___31458 = (0);
while(true){
if((i__28022__auto___31458 < len__28021__auto___31457)){
args31454.push((arguments[i__28022__auto___31458]));

var G__31459 = (i__28022__auto___31458 + (1));
i__28022__auto___31458 = G__31459;
continue;
} else {
}
break;
}

var G__31456 = args31454.length;
switch (G__31456) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31454.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31461 = [];
var len__28021__auto___31464 = arguments.length;
var i__28022__auto___31465 = (0);
while(true){
if((i__28022__auto___31465 < len__28021__auto___31464)){
args31461.push((arguments[i__28022__auto___31465]));

var G__31466 = (i__28022__auto___31465 + (1));
i__28022__auto___31465 = G__31466;
continue;
} else {
}
break;
}

var G__31463 = args31461.length;
switch (G__31463) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31461.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31468 = [];
var len__28021__auto___31539 = arguments.length;
var i__28022__auto___31540 = (0);
while(true){
if((i__28022__auto___31540 < len__28021__auto___31539)){
args31468.push((arguments[i__28022__auto___31540]));

var G__31541 = (i__28022__auto___31540 + (1));
i__28022__auto___31540 = G__31541;
continue;
} else {
}
break;
}

var G__31470 = args31468.length;
switch (G__31470) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31468.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29486__auto___31543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___31543,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___31543,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31509){
var state_val_31510 = (state_31509[(1)]);
if((state_val_31510 === (7))){
var state_31509__$1 = state_31509;
var statearr_31511_31544 = state_31509__$1;
(statearr_31511_31544[(2)] = null);

(statearr_31511_31544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (1))){
var state_31509__$1 = state_31509;
var statearr_31512_31545 = state_31509__$1;
(statearr_31512_31545[(2)] = null);

(statearr_31512_31545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (4))){
var inst_31473 = (state_31509[(7)]);
var inst_31475 = (inst_31473 < cnt);
var state_31509__$1 = state_31509;
if(cljs.core.truth_(inst_31475)){
var statearr_31513_31546 = state_31509__$1;
(statearr_31513_31546[(1)] = (6));

} else {
var statearr_31514_31547 = state_31509__$1;
(statearr_31514_31547[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (15))){
var inst_31505 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31515_31548 = state_31509__$1;
(statearr_31515_31548[(2)] = inst_31505);

(statearr_31515_31548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (13))){
var inst_31498 = cljs.core.async.close_BANG_.call(null,out);
var state_31509__$1 = state_31509;
var statearr_31516_31549 = state_31509__$1;
(statearr_31516_31549[(2)] = inst_31498);

(statearr_31516_31549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (6))){
var state_31509__$1 = state_31509;
var statearr_31517_31550 = state_31509__$1;
(statearr_31517_31550[(2)] = null);

(statearr_31517_31550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (3))){
var inst_31507 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31509__$1,inst_31507);
} else {
if((state_val_31510 === (12))){
var inst_31495 = (state_31509[(8)]);
var inst_31495__$1 = (state_31509[(2)]);
var inst_31496 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31495__$1);
var state_31509__$1 = (function (){var statearr_31518 = state_31509;
(statearr_31518[(8)] = inst_31495__$1);

return statearr_31518;
})();
if(cljs.core.truth_(inst_31496)){
var statearr_31519_31551 = state_31509__$1;
(statearr_31519_31551[(1)] = (13));

} else {
var statearr_31520_31552 = state_31509__$1;
(statearr_31520_31552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (2))){
var inst_31472 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31473 = (0);
var state_31509__$1 = (function (){var statearr_31521 = state_31509;
(statearr_31521[(7)] = inst_31473);

(statearr_31521[(9)] = inst_31472);

return statearr_31521;
})();
var statearr_31522_31553 = state_31509__$1;
(statearr_31522_31553[(2)] = null);

(statearr_31522_31553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (11))){
var inst_31473 = (state_31509[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31509,(10),Object,null,(9));
var inst_31482 = chs__$1.call(null,inst_31473);
var inst_31483 = done.call(null,inst_31473);
var inst_31484 = cljs.core.async.take_BANG_.call(null,inst_31482,inst_31483);
var state_31509__$1 = state_31509;
var statearr_31523_31554 = state_31509__$1;
(statearr_31523_31554[(2)] = inst_31484);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31509__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (9))){
var inst_31473 = (state_31509[(7)]);
var inst_31486 = (state_31509[(2)]);
var inst_31487 = (inst_31473 + (1));
var inst_31473__$1 = inst_31487;
var state_31509__$1 = (function (){var statearr_31524 = state_31509;
(statearr_31524[(10)] = inst_31486);

(statearr_31524[(7)] = inst_31473__$1);

return statearr_31524;
})();
var statearr_31525_31555 = state_31509__$1;
(statearr_31525_31555[(2)] = null);

(statearr_31525_31555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (5))){
var inst_31493 = (state_31509[(2)]);
var state_31509__$1 = (function (){var statearr_31526 = state_31509;
(statearr_31526[(11)] = inst_31493);

return statearr_31526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31509__$1,(12),dchan);
} else {
if((state_val_31510 === (14))){
var inst_31495 = (state_31509[(8)]);
var inst_31500 = cljs.core.apply.call(null,f,inst_31495);
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31509__$1,(16),out,inst_31500);
} else {
if((state_val_31510 === (16))){
var inst_31502 = (state_31509[(2)]);
var state_31509__$1 = (function (){var statearr_31527 = state_31509;
(statearr_31527[(12)] = inst_31502);

return statearr_31527;
})();
var statearr_31528_31556 = state_31509__$1;
(statearr_31528_31556[(2)] = null);

(statearr_31528_31556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (10))){
var inst_31477 = (state_31509[(2)]);
var inst_31478 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31509__$1 = (function (){var statearr_31529 = state_31509;
(statearr_31529[(13)] = inst_31477);

return statearr_31529;
})();
var statearr_31530_31557 = state_31509__$1;
(statearr_31530_31557[(2)] = inst_31478);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31509__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31510 === (8))){
var inst_31491 = (state_31509[(2)]);
var state_31509__$1 = state_31509;
var statearr_31531_31558 = state_31509__$1;
(statearr_31531_31558[(2)] = inst_31491);

(statearr_31531_31558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___31543,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29372__auto__,c__29486__auto___31543,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_31535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31535[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_31535[(1)] = (1));

return statearr_31535;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_31509){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_31509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e31536){if((e31536 instanceof Object)){
var ex__29376__auto__ = e31536;
var statearr_31537_31559 = state_31509;
(statearr_31537_31559[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31560 = state_31509;
state_31509 = G__31560;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_31509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_31509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___31543,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29488__auto__ = (function (){var statearr_31538 = f__29487__auto__.call(null);
(statearr_31538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___31543);

return statearr_31538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___31543,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31562 = [];
var len__28021__auto___31620 = arguments.length;
var i__28022__auto___31621 = (0);
while(true){
if((i__28022__auto___31621 < len__28021__auto___31620)){
args31562.push((arguments[i__28022__auto___31621]));

var G__31622 = (i__28022__auto___31621 + (1));
i__28022__auto___31621 = G__31622;
continue;
} else {
}
break;
}

var G__31564 = args31562.length;
switch (G__31564) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31562.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29486__auto___31624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___31624,out){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___31624,out){
return (function (state_31596){
var state_val_31597 = (state_31596[(1)]);
if((state_val_31597 === (7))){
var inst_31576 = (state_31596[(7)]);
var inst_31575 = (state_31596[(8)]);
var inst_31575__$1 = (state_31596[(2)]);
var inst_31576__$1 = cljs.core.nth.call(null,inst_31575__$1,(0),null);
var inst_31577 = cljs.core.nth.call(null,inst_31575__$1,(1),null);
var inst_31578 = (inst_31576__$1 == null);
var state_31596__$1 = (function (){var statearr_31598 = state_31596;
(statearr_31598[(7)] = inst_31576__$1);

(statearr_31598[(9)] = inst_31577);

(statearr_31598[(8)] = inst_31575__$1);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31578)){
var statearr_31599_31625 = state_31596__$1;
(statearr_31599_31625[(1)] = (8));

} else {
var statearr_31600_31626 = state_31596__$1;
(statearr_31600_31626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (1))){
var inst_31565 = cljs.core.vec.call(null,chs);
var inst_31566 = inst_31565;
var state_31596__$1 = (function (){var statearr_31601 = state_31596;
(statearr_31601[(10)] = inst_31566);

return statearr_31601;
})();
var statearr_31602_31627 = state_31596__$1;
(statearr_31602_31627[(2)] = null);

(statearr_31602_31627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (4))){
var inst_31566 = (state_31596[(10)]);
var state_31596__$1 = state_31596;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31596__$1,(7),inst_31566);
} else {
if((state_val_31597 === (6))){
var inst_31592 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31603_31628 = state_31596__$1;
(statearr_31603_31628[(2)] = inst_31592);

(statearr_31603_31628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (3))){
var inst_31594 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31596__$1,inst_31594);
} else {
if((state_val_31597 === (2))){
var inst_31566 = (state_31596[(10)]);
var inst_31568 = cljs.core.count.call(null,inst_31566);
var inst_31569 = (inst_31568 > (0));
var state_31596__$1 = state_31596;
if(cljs.core.truth_(inst_31569)){
var statearr_31605_31629 = state_31596__$1;
(statearr_31605_31629[(1)] = (4));

} else {
var statearr_31606_31630 = state_31596__$1;
(statearr_31606_31630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (11))){
var inst_31566 = (state_31596[(10)]);
var inst_31585 = (state_31596[(2)]);
var tmp31604 = inst_31566;
var inst_31566__$1 = tmp31604;
var state_31596__$1 = (function (){var statearr_31607 = state_31596;
(statearr_31607[(10)] = inst_31566__$1);

(statearr_31607[(11)] = inst_31585);

return statearr_31607;
})();
var statearr_31608_31631 = state_31596__$1;
(statearr_31608_31631[(2)] = null);

(statearr_31608_31631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (9))){
var inst_31576 = (state_31596[(7)]);
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31596__$1,(11),out,inst_31576);
} else {
if((state_val_31597 === (5))){
var inst_31590 = cljs.core.async.close_BANG_.call(null,out);
var state_31596__$1 = state_31596;
var statearr_31609_31632 = state_31596__$1;
(statearr_31609_31632[(2)] = inst_31590);

(statearr_31609_31632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (10))){
var inst_31588 = (state_31596[(2)]);
var state_31596__$1 = state_31596;
var statearr_31610_31633 = state_31596__$1;
(statearr_31610_31633[(2)] = inst_31588);

(statearr_31610_31633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31597 === (8))){
var inst_31576 = (state_31596[(7)]);
var inst_31577 = (state_31596[(9)]);
var inst_31575 = (state_31596[(8)]);
var inst_31566 = (state_31596[(10)]);
var inst_31580 = (function (){var cs = inst_31566;
var vec__31571 = inst_31575;
var v = inst_31576;
var c = inst_31577;
return ((function (cs,vec__31571,v,c,inst_31576,inst_31577,inst_31575,inst_31566,state_val_31597,c__29486__auto___31624,out){
return (function (p1__31561_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31561_SHARP_);
});
;})(cs,vec__31571,v,c,inst_31576,inst_31577,inst_31575,inst_31566,state_val_31597,c__29486__auto___31624,out))
})();
var inst_31581 = cljs.core.filterv.call(null,inst_31580,inst_31566);
var inst_31566__$1 = inst_31581;
var state_31596__$1 = (function (){var statearr_31611 = state_31596;
(statearr_31611[(10)] = inst_31566__$1);

return statearr_31611;
})();
var statearr_31612_31634 = state_31596__$1;
(statearr_31612_31634[(2)] = null);

(statearr_31612_31634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___31624,out))
;
return ((function (switch__29372__auto__,c__29486__auto___31624,out){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_31616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31616[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_31616[(1)] = (1));

return statearr_31616;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_31596){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_31596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e31617){if((e31617 instanceof Object)){
var ex__29376__auto__ = e31617;
var statearr_31618_31635 = state_31596;
(statearr_31618_31635[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31636 = state_31596;
state_31596 = G__31636;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_31596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_31596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___31624,out))
})();
var state__29488__auto__ = (function (){var statearr_31619 = f__29487__auto__.call(null);
(statearr_31619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___31624);

return statearr_31619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___31624,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31637 = [];
var len__28021__auto___31686 = arguments.length;
var i__28022__auto___31687 = (0);
while(true){
if((i__28022__auto___31687 < len__28021__auto___31686)){
args31637.push((arguments[i__28022__auto___31687]));

var G__31688 = (i__28022__auto___31687 + (1));
i__28022__auto___31687 = G__31688;
continue;
} else {
}
break;
}

var G__31639 = args31637.length;
switch (G__31639) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31637.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29486__auto___31690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___31690,out){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___31690,out){
return (function (state_31663){
var state_val_31664 = (state_31663[(1)]);
if((state_val_31664 === (7))){
var inst_31645 = (state_31663[(7)]);
var inst_31645__$1 = (state_31663[(2)]);
var inst_31646 = (inst_31645__$1 == null);
var inst_31647 = cljs.core.not.call(null,inst_31646);
var state_31663__$1 = (function (){var statearr_31665 = state_31663;
(statearr_31665[(7)] = inst_31645__$1);

return statearr_31665;
})();
if(inst_31647){
var statearr_31666_31691 = state_31663__$1;
(statearr_31666_31691[(1)] = (8));

} else {
var statearr_31667_31692 = state_31663__$1;
(statearr_31667_31692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (1))){
var inst_31640 = (0);
var state_31663__$1 = (function (){var statearr_31668 = state_31663;
(statearr_31668[(8)] = inst_31640);

return statearr_31668;
})();
var statearr_31669_31693 = state_31663__$1;
(statearr_31669_31693[(2)] = null);

(statearr_31669_31693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (4))){
var state_31663__$1 = state_31663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31663__$1,(7),ch);
} else {
if((state_val_31664 === (6))){
var inst_31658 = (state_31663[(2)]);
var state_31663__$1 = state_31663;
var statearr_31670_31694 = state_31663__$1;
(statearr_31670_31694[(2)] = inst_31658);

(statearr_31670_31694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (3))){
var inst_31660 = (state_31663[(2)]);
var inst_31661 = cljs.core.async.close_BANG_.call(null,out);
var state_31663__$1 = (function (){var statearr_31671 = state_31663;
(statearr_31671[(9)] = inst_31660);

return statearr_31671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31663__$1,inst_31661);
} else {
if((state_val_31664 === (2))){
var inst_31640 = (state_31663[(8)]);
var inst_31642 = (inst_31640 < n);
var state_31663__$1 = state_31663;
if(cljs.core.truth_(inst_31642)){
var statearr_31672_31695 = state_31663__$1;
(statearr_31672_31695[(1)] = (4));

} else {
var statearr_31673_31696 = state_31663__$1;
(statearr_31673_31696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (11))){
var inst_31640 = (state_31663[(8)]);
var inst_31650 = (state_31663[(2)]);
var inst_31651 = (inst_31640 + (1));
var inst_31640__$1 = inst_31651;
var state_31663__$1 = (function (){var statearr_31674 = state_31663;
(statearr_31674[(10)] = inst_31650);

(statearr_31674[(8)] = inst_31640__$1);

return statearr_31674;
})();
var statearr_31675_31697 = state_31663__$1;
(statearr_31675_31697[(2)] = null);

(statearr_31675_31697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (9))){
var state_31663__$1 = state_31663;
var statearr_31676_31698 = state_31663__$1;
(statearr_31676_31698[(2)] = null);

(statearr_31676_31698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (5))){
var state_31663__$1 = state_31663;
var statearr_31677_31699 = state_31663__$1;
(statearr_31677_31699[(2)] = null);

(statearr_31677_31699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (10))){
var inst_31655 = (state_31663[(2)]);
var state_31663__$1 = state_31663;
var statearr_31678_31700 = state_31663__$1;
(statearr_31678_31700[(2)] = inst_31655);

(statearr_31678_31700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31664 === (8))){
var inst_31645 = (state_31663[(7)]);
var state_31663__$1 = state_31663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31663__$1,(11),out,inst_31645);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___31690,out))
;
return ((function (switch__29372__auto__,c__29486__auto___31690,out){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_31682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31682[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_31663){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_31663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e31683){if((e31683 instanceof Object)){
var ex__29376__auto__ = e31683;
var statearr_31684_31701 = state_31663;
(statearr_31684_31701[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31702 = state_31663;
state_31663 = G__31702;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_31663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_31663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___31690,out))
})();
var state__29488__auto__ = (function (){var statearr_31685 = f__29487__auto__.call(null);
(statearr_31685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___31690);

return statearr_31685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___31690,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31710 = (function (f,ch,meta31711){
this.f = f;
this.ch = ch;
this.meta31711 = meta31711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31712,meta31711__$1){
var self__ = this;
var _31712__$1 = this;
return (new cljs.core.async.t_cljs$core$async31710(self__.f,self__.ch,meta31711__$1));
});

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31712){
var self__ = this;
var _31712__$1 = this;
return self__.meta31711;
});

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31713 = (function (f,ch,meta31711,_,fn1,meta31714){
this.f = f;
this.ch = ch;
this.meta31711 = meta31711;
this._ = _;
this.fn1 = fn1;
this.meta31714 = meta31714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31715,meta31714__$1){
var self__ = this;
var _31715__$1 = this;
return (new cljs.core.async.t_cljs$core$async31713(self__.f,self__.ch,self__.meta31711,self__._,self__.fn1,meta31714__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31715){
var self__ = this;
var _31715__$1 = this;
return self__.meta31714;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31703_SHARP_){
return f1.call(null,(((p1__31703_SHARP_ == null))?null:self__.f.call(null,p1__31703_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31713.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31711","meta31711",549271430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31710","cljs.core.async/t_cljs$core$async31710",1364738930,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31714","meta31714",-270640725,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31713";

cljs.core.async.t_cljs$core$async31713.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async31713");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31713 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31713(f__$1,ch__$1,meta31711__$1,___$2,fn1__$1,meta31714){
return (new cljs.core.async.t_cljs$core$async31713(f__$1,ch__$1,meta31711__$1,___$2,fn1__$1,meta31714));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31713(self__.f,self__.ch,self__.meta31711,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26793__auto__ = ret;
if(cljs.core.truth_(and__26793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31711","meta31711",549271430,null)], null);
});

cljs.core.async.t_cljs$core$async31710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31710";

cljs.core.async.t_cljs$core$async31710.cljs$lang$ctorPrWriter = (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async31710");
});

cljs.core.async.__GT_t_cljs$core$async31710 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31710(f__$1,ch__$1,meta31711){
return (new cljs.core.async.t_cljs$core$async31710(f__$1,ch__$1,meta31711));
});

}

return (new cljs.core.async.t_cljs$core$async31710(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31719 = (function (f,ch,meta31720){
this.f = f;
this.ch = ch;
this.meta31720 = meta31720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31721,meta31720__$1){
var self__ = this;
var _31721__$1 = this;
return (new cljs.core.async.t_cljs$core$async31719(self__.f,self__.ch,meta31720__$1));
});

cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31721){
var self__ = this;
var _31721__$1 = this;
return self__.meta31720;
});

cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31720","meta31720",-149265490,null)], null);
});

cljs.core.async.t_cljs$core$async31719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31719";

cljs.core.async.t_cljs$core$async31719.cljs$lang$ctorPrWriter = (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async31719");
});

cljs.core.async.__GT_t_cljs$core$async31719 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31719(f__$1,ch__$1,meta31720){
return (new cljs.core.async.t_cljs$core$async31719(f__$1,ch__$1,meta31720));
});

}

return (new cljs.core.async.t_cljs$core$async31719(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31725 = (function (p,ch,meta31726){
this.p = p;
this.ch = ch;
this.meta31726 = meta31726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31727,meta31726__$1){
var self__ = this;
var _31727__$1 = this;
return (new cljs.core.async.t_cljs$core$async31725(self__.p,self__.ch,meta31726__$1));
});

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31727){
var self__ = this;
var _31727__$1 = this;
return self__.meta31726;
});

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31726","meta31726",1889167695,null)], null);
});

cljs.core.async.t_cljs$core$async31725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31725";

cljs.core.async.t_cljs$core$async31725.cljs$lang$ctorPrWriter = (function (this__27457__auto__,writer__27458__auto__,opt__27459__auto__){
return cljs.core._write.call(null,writer__27458__auto__,"cljs.core.async/t_cljs$core$async31725");
});

cljs.core.async.__GT_t_cljs$core$async31725 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31725(p__$1,ch__$1,meta31726){
return (new cljs.core.async.t_cljs$core$async31725(p__$1,ch__$1,meta31726));
});

}

return (new cljs.core.async.t_cljs$core$async31725(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31728 = [];
var len__28021__auto___31772 = arguments.length;
var i__28022__auto___31773 = (0);
while(true){
if((i__28022__auto___31773 < len__28021__auto___31772)){
args31728.push((arguments[i__28022__auto___31773]));

var G__31774 = (i__28022__auto___31773 + (1));
i__28022__auto___31773 = G__31774;
continue;
} else {
}
break;
}

var G__31730 = args31728.length;
switch (G__31730) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31728.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29486__auto___31776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___31776,out){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___31776,out){
return (function (state_31751){
var state_val_31752 = (state_31751[(1)]);
if((state_val_31752 === (7))){
var inst_31747 = (state_31751[(2)]);
var state_31751__$1 = state_31751;
var statearr_31753_31777 = state_31751__$1;
(statearr_31753_31777[(2)] = inst_31747);

(statearr_31753_31777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (1))){
var state_31751__$1 = state_31751;
var statearr_31754_31778 = state_31751__$1;
(statearr_31754_31778[(2)] = null);

(statearr_31754_31778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (4))){
var inst_31733 = (state_31751[(7)]);
var inst_31733__$1 = (state_31751[(2)]);
var inst_31734 = (inst_31733__$1 == null);
var state_31751__$1 = (function (){var statearr_31755 = state_31751;
(statearr_31755[(7)] = inst_31733__$1);

return statearr_31755;
})();
if(cljs.core.truth_(inst_31734)){
var statearr_31756_31779 = state_31751__$1;
(statearr_31756_31779[(1)] = (5));

} else {
var statearr_31757_31780 = state_31751__$1;
(statearr_31757_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (6))){
var inst_31733 = (state_31751[(7)]);
var inst_31738 = p.call(null,inst_31733);
var state_31751__$1 = state_31751;
if(cljs.core.truth_(inst_31738)){
var statearr_31758_31781 = state_31751__$1;
(statearr_31758_31781[(1)] = (8));

} else {
var statearr_31759_31782 = state_31751__$1;
(statearr_31759_31782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (3))){
var inst_31749 = (state_31751[(2)]);
var state_31751__$1 = state_31751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31751__$1,inst_31749);
} else {
if((state_val_31752 === (2))){
var state_31751__$1 = state_31751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31751__$1,(4),ch);
} else {
if((state_val_31752 === (11))){
var inst_31741 = (state_31751[(2)]);
var state_31751__$1 = state_31751;
var statearr_31760_31783 = state_31751__$1;
(statearr_31760_31783[(2)] = inst_31741);

(statearr_31760_31783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (9))){
var state_31751__$1 = state_31751;
var statearr_31761_31784 = state_31751__$1;
(statearr_31761_31784[(2)] = null);

(statearr_31761_31784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (5))){
var inst_31736 = cljs.core.async.close_BANG_.call(null,out);
var state_31751__$1 = state_31751;
var statearr_31762_31785 = state_31751__$1;
(statearr_31762_31785[(2)] = inst_31736);

(statearr_31762_31785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (10))){
var inst_31744 = (state_31751[(2)]);
var state_31751__$1 = (function (){var statearr_31763 = state_31751;
(statearr_31763[(8)] = inst_31744);

return statearr_31763;
})();
var statearr_31764_31786 = state_31751__$1;
(statearr_31764_31786[(2)] = null);

(statearr_31764_31786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (8))){
var inst_31733 = (state_31751[(7)]);
var state_31751__$1 = state_31751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31751__$1,(11),out,inst_31733);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___31776,out))
;
return ((function (switch__29372__auto__,c__29486__auto___31776,out){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_31768 = [null,null,null,null,null,null,null,null,null];
(statearr_31768[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_31768[(1)] = (1));

return statearr_31768;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_31751){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_31751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e31769){if((e31769 instanceof Object)){
var ex__29376__auto__ = e31769;
var statearr_31770_31787 = state_31751;
(statearr_31770_31787[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31788 = state_31751;
state_31751 = G__31788;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_31751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_31751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___31776,out))
})();
var state__29488__auto__ = (function (){var statearr_31771 = f__29487__auto__.call(null);
(statearr_31771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___31776);

return statearr_31771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___31776,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31789 = [];
var len__28021__auto___31792 = arguments.length;
var i__28022__auto___31793 = (0);
while(true){
if((i__28022__auto___31793 < len__28021__auto___31792)){
args31789.push((arguments[i__28022__auto___31793]));

var G__31794 = (i__28022__auto___31793 + (1));
i__28022__auto___31793 = G__31794;
continue;
} else {
}
break;
}

var G__31791 = args31789.length;
switch (G__31791) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31789.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__){
return (function (state_31961){
var state_val_31962 = (state_31961[(1)]);
if((state_val_31962 === (7))){
var inst_31957 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31963_32004 = state_31961__$1;
(statearr_31963_32004[(2)] = inst_31957);

(statearr_31963_32004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (20))){
var inst_31927 = (state_31961[(7)]);
var inst_31938 = (state_31961[(2)]);
var inst_31939 = cljs.core.next.call(null,inst_31927);
var inst_31913 = inst_31939;
var inst_31914 = null;
var inst_31915 = (0);
var inst_31916 = (0);
var state_31961__$1 = (function (){var statearr_31964 = state_31961;
(statearr_31964[(8)] = inst_31916);

(statearr_31964[(9)] = inst_31938);

(statearr_31964[(10)] = inst_31915);

(statearr_31964[(11)] = inst_31914);

(statearr_31964[(12)] = inst_31913);

return statearr_31964;
})();
var statearr_31965_32005 = state_31961__$1;
(statearr_31965_32005[(2)] = null);

(statearr_31965_32005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (1))){
var state_31961__$1 = state_31961;
var statearr_31966_32006 = state_31961__$1;
(statearr_31966_32006[(2)] = null);

(statearr_31966_32006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (4))){
var inst_31902 = (state_31961[(13)]);
var inst_31902__$1 = (state_31961[(2)]);
var inst_31903 = (inst_31902__$1 == null);
var state_31961__$1 = (function (){var statearr_31967 = state_31961;
(statearr_31967[(13)] = inst_31902__$1);

return statearr_31967;
})();
if(cljs.core.truth_(inst_31903)){
var statearr_31968_32007 = state_31961__$1;
(statearr_31968_32007[(1)] = (5));

} else {
var statearr_31969_32008 = state_31961__$1;
(statearr_31969_32008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (15))){
var state_31961__$1 = state_31961;
var statearr_31973_32009 = state_31961__$1;
(statearr_31973_32009[(2)] = null);

(statearr_31973_32009[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (21))){
var state_31961__$1 = state_31961;
var statearr_31974_32010 = state_31961__$1;
(statearr_31974_32010[(2)] = null);

(statearr_31974_32010[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (13))){
var inst_31916 = (state_31961[(8)]);
var inst_31915 = (state_31961[(10)]);
var inst_31914 = (state_31961[(11)]);
var inst_31913 = (state_31961[(12)]);
var inst_31923 = (state_31961[(2)]);
var inst_31924 = (inst_31916 + (1));
var tmp31970 = inst_31915;
var tmp31971 = inst_31914;
var tmp31972 = inst_31913;
var inst_31913__$1 = tmp31972;
var inst_31914__$1 = tmp31971;
var inst_31915__$1 = tmp31970;
var inst_31916__$1 = inst_31924;
var state_31961__$1 = (function (){var statearr_31975 = state_31961;
(statearr_31975[(14)] = inst_31923);

(statearr_31975[(8)] = inst_31916__$1);

(statearr_31975[(10)] = inst_31915__$1);

(statearr_31975[(11)] = inst_31914__$1);

(statearr_31975[(12)] = inst_31913__$1);

return statearr_31975;
})();
var statearr_31976_32011 = state_31961__$1;
(statearr_31976_32011[(2)] = null);

(statearr_31976_32011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (22))){
var state_31961__$1 = state_31961;
var statearr_31977_32012 = state_31961__$1;
(statearr_31977_32012[(2)] = null);

(statearr_31977_32012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (6))){
var inst_31902 = (state_31961[(13)]);
var inst_31911 = f.call(null,inst_31902);
var inst_31912 = cljs.core.seq.call(null,inst_31911);
var inst_31913 = inst_31912;
var inst_31914 = null;
var inst_31915 = (0);
var inst_31916 = (0);
var state_31961__$1 = (function (){var statearr_31978 = state_31961;
(statearr_31978[(8)] = inst_31916);

(statearr_31978[(10)] = inst_31915);

(statearr_31978[(11)] = inst_31914);

(statearr_31978[(12)] = inst_31913);

return statearr_31978;
})();
var statearr_31979_32013 = state_31961__$1;
(statearr_31979_32013[(2)] = null);

(statearr_31979_32013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (17))){
var inst_31927 = (state_31961[(7)]);
var inst_31931 = cljs.core.chunk_first.call(null,inst_31927);
var inst_31932 = cljs.core.chunk_rest.call(null,inst_31927);
var inst_31933 = cljs.core.count.call(null,inst_31931);
var inst_31913 = inst_31932;
var inst_31914 = inst_31931;
var inst_31915 = inst_31933;
var inst_31916 = (0);
var state_31961__$1 = (function (){var statearr_31980 = state_31961;
(statearr_31980[(8)] = inst_31916);

(statearr_31980[(10)] = inst_31915);

(statearr_31980[(11)] = inst_31914);

(statearr_31980[(12)] = inst_31913);

return statearr_31980;
})();
var statearr_31981_32014 = state_31961__$1;
(statearr_31981_32014[(2)] = null);

(statearr_31981_32014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (3))){
var inst_31959 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31961__$1,inst_31959);
} else {
if((state_val_31962 === (12))){
var inst_31947 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31982_32015 = state_31961__$1;
(statearr_31982_32015[(2)] = inst_31947);

(statearr_31982_32015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (2))){
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31961__$1,(4),in$);
} else {
if((state_val_31962 === (23))){
var inst_31955 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31983_32016 = state_31961__$1;
(statearr_31983_32016[(2)] = inst_31955);

(statearr_31983_32016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (19))){
var inst_31942 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31984_32017 = state_31961__$1;
(statearr_31984_32017[(2)] = inst_31942);

(statearr_31984_32017[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (11))){
var inst_31927 = (state_31961[(7)]);
var inst_31913 = (state_31961[(12)]);
var inst_31927__$1 = cljs.core.seq.call(null,inst_31913);
var state_31961__$1 = (function (){var statearr_31985 = state_31961;
(statearr_31985[(7)] = inst_31927__$1);

return statearr_31985;
})();
if(inst_31927__$1){
var statearr_31986_32018 = state_31961__$1;
(statearr_31986_32018[(1)] = (14));

} else {
var statearr_31987_32019 = state_31961__$1;
(statearr_31987_32019[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (9))){
var inst_31949 = (state_31961[(2)]);
var inst_31950 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31961__$1 = (function (){var statearr_31988 = state_31961;
(statearr_31988[(15)] = inst_31949);

return statearr_31988;
})();
if(cljs.core.truth_(inst_31950)){
var statearr_31989_32020 = state_31961__$1;
(statearr_31989_32020[(1)] = (21));

} else {
var statearr_31990_32021 = state_31961__$1;
(statearr_31990_32021[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (5))){
var inst_31905 = cljs.core.async.close_BANG_.call(null,out);
var state_31961__$1 = state_31961;
var statearr_31991_32022 = state_31961__$1;
(statearr_31991_32022[(2)] = inst_31905);

(statearr_31991_32022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (14))){
var inst_31927 = (state_31961[(7)]);
var inst_31929 = cljs.core.chunked_seq_QMARK_.call(null,inst_31927);
var state_31961__$1 = state_31961;
if(inst_31929){
var statearr_31992_32023 = state_31961__$1;
(statearr_31992_32023[(1)] = (17));

} else {
var statearr_31993_32024 = state_31961__$1;
(statearr_31993_32024[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (16))){
var inst_31945 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31994_32025 = state_31961__$1;
(statearr_31994_32025[(2)] = inst_31945);

(statearr_31994_32025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (10))){
var inst_31916 = (state_31961[(8)]);
var inst_31914 = (state_31961[(11)]);
var inst_31921 = cljs.core._nth.call(null,inst_31914,inst_31916);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31961__$1,(13),out,inst_31921);
} else {
if((state_val_31962 === (18))){
var inst_31927 = (state_31961[(7)]);
var inst_31936 = cljs.core.first.call(null,inst_31927);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31961__$1,(20),out,inst_31936);
} else {
if((state_val_31962 === (8))){
var inst_31916 = (state_31961[(8)]);
var inst_31915 = (state_31961[(10)]);
var inst_31918 = (inst_31916 < inst_31915);
var inst_31919 = inst_31918;
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31919)){
var statearr_31995_32026 = state_31961__$1;
(statearr_31995_32026[(1)] = (10));

} else {
var statearr_31996_32027 = state_31961__$1;
(statearr_31996_32027[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto__))
;
return ((function (switch__29372__auto__,c__29486__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29373__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29373__auto____0 = (function (){
var statearr_32000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32000[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29373__auto__);

(statearr_32000[(1)] = (1));

return statearr_32000;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29373__auto____1 = (function (state_31961){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_31961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e32001){if((e32001 instanceof Object)){
var ex__29376__auto__ = e32001;
var statearr_32002_32028 = state_31961;
(statearr_32002_32028[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32029 = state_31961;
state_31961 = G__32029;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29373__auto__ = function(state_31961){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29373__auto____1.call(this,state_31961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29373__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29373__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__))
})();
var state__29488__auto__ = (function (){var statearr_32003 = f__29487__auto__.call(null);
(statearr_32003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_32003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__))
);

return c__29486__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32030 = [];
var len__28021__auto___32033 = arguments.length;
var i__28022__auto___32034 = (0);
while(true){
if((i__28022__auto___32034 < len__28021__auto___32033)){
args32030.push((arguments[i__28022__auto___32034]));

var G__32035 = (i__28022__auto___32034 + (1));
i__28022__auto___32034 = G__32035;
continue;
} else {
}
break;
}

var G__32032 = args32030.length;
switch (G__32032) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32030.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32037 = [];
var len__28021__auto___32040 = arguments.length;
var i__28022__auto___32041 = (0);
while(true){
if((i__28022__auto___32041 < len__28021__auto___32040)){
args32037.push((arguments[i__28022__auto___32041]));

var G__32042 = (i__28022__auto___32041 + (1));
i__28022__auto___32041 = G__32042;
continue;
} else {
}
break;
}

var G__32039 = args32037.length;
switch (G__32039) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32037.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32044 = [];
var len__28021__auto___32095 = arguments.length;
var i__28022__auto___32096 = (0);
while(true){
if((i__28022__auto___32096 < len__28021__auto___32095)){
args32044.push((arguments[i__28022__auto___32096]));

var G__32097 = (i__28022__auto___32096 + (1));
i__28022__auto___32096 = G__32097;
continue;
} else {
}
break;
}

var G__32046 = args32044.length;
switch (G__32046) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32044.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29486__auto___32099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___32099,out){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___32099,out){
return (function (state_32070){
var state_val_32071 = (state_32070[(1)]);
if((state_val_32071 === (7))){
var inst_32065 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32072_32100 = state_32070__$1;
(statearr_32072_32100[(2)] = inst_32065);

(statearr_32072_32100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (1))){
var inst_32047 = null;
var state_32070__$1 = (function (){var statearr_32073 = state_32070;
(statearr_32073[(7)] = inst_32047);

return statearr_32073;
})();
var statearr_32074_32101 = state_32070__$1;
(statearr_32074_32101[(2)] = null);

(statearr_32074_32101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (4))){
var inst_32050 = (state_32070[(8)]);
var inst_32050__$1 = (state_32070[(2)]);
var inst_32051 = (inst_32050__$1 == null);
var inst_32052 = cljs.core.not.call(null,inst_32051);
var state_32070__$1 = (function (){var statearr_32075 = state_32070;
(statearr_32075[(8)] = inst_32050__$1);

return statearr_32075;
})();
if(inst_32052){
var statearr_32076_32102 = state_32070__$1;
(statearr_32076_32102[(1)] = (5));

} else {
var statearr_32077_32103 = state_32070__$1;
(statearr_32077_32103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (6))){
var state_32070__$1 = state_32070;
var statearr_32078_32104 = state_32070__$1;
(statearr_32078_32104[(2)] = null);

(statearr_32078_32104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (3))){
var inst_32067 = (state_32070[(2)]);
var inst_32068 = cljs.core.async.close_BANG_.call(null,out);
var state_32070__$1 = (function (){var statearr_32079 = state_32070;
(statearr_32079[(9)] = inst_32067);

return statearr_32079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32070__$1,inst_32068);
} else {
if((state_val_32071 === (2))){
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32070__$1,(4),ch);
} else {
if((state_val_32071 === (11))){
var inst_32050 = (state_32070[(8)]);
var inst_32059 = (state_32070[(2)]);
var inst_32047 = inst_32050;
var state_32070__$1 = (function (){var statearr_32080 = state_32070;
(statearr_32080[(7)] = inst_32047);

(statearr_32080[(10)] = inst_32059);

return statearr_32080;
})();
var statearr_32081_32105 = state_32070__$1;
(statearr_32081_32105[(2)] = null);

(statearr_32081_32105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (9))){
var inst_32050 = (state_32070[(8)]);
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32070__$1,(11),out,inst_32050);
} else {
if((state_val_32071 === (5))){
var inst_32050 = (state_32070[(8)]);
var inst_32047 = (state_32070[(7)]);
var inst_32054 = cljs.core._EQ_.call(null,inst_32050,inst_32047);
var state_32070__$1 = state_32070;
if(inst_32054){
var statearr_32083_32106 = state_32070__$1;
(statearr_32083_32106[(1)] = (8));

} else {
var statearr_32084_32107 = state_32070__$1;
(statearr_32084_32107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (10))){
var inst_32062 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32085_32108 = state_32070__$1;
(statearr_32085_32108[(2)] = inst_32062);

(statearr_32085_32108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (8))){
var inst_32047 = (state_32070[(7)]);
var tmp32082 = inst_32047;
var inst_32047__$1 = tmp32082;
var state_32070__$1 = (function (){var statearr_32086 = state_32070;
(statearr_32086[(7)] = inst_32047__$1);

return statearr_32086;
})();
var statearr_32087_32109 = state_32070__$1;
(statearr_32087_32109[(2)] = null);

(statearr_32087_32109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___32099,out))
;
return ((function (switch__29372__auto__,c__29486__auto___32099,out){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_32091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32091[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_32091[(1)] = (1));

return statearr_32091;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_32070){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_32070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e32092){if((e32092 instanceof Object)){
var ex__29376__auto__ = e32092;
var statearr_32093_32110 = state_32070;
(statearr_32093_32110[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32111 = state_32070;
state_32070 = G__32111;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_32070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_32070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___32099,out))
})();
var state__29488__auto__ = (function (){var statearr_32094 = f__29487__auto__.call(null);
(statearr_32094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___32099);

return statearr_32094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___32099,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32112 = [];
var len__28021__auto___32182 = arguments.length;
var i__28022__auto___32183 = (0);
while(true){
if((i__28022__auto___32183 < len__28021__auto___32182)){
args32112.push((arguments[i__28022__auto___32183]));

var G__32184 = (i__28022__auto___32183 + (1));
i__28022__auto___32183 = G__32184;
continue;
} else {
}
break;
}

var G__32114 = args32112.length;
switch (G__32114) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32112.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29486__auto___32186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___32186,out){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___32186,out){
return (function (state_32152){
var state_val_32153 = (state_32152[(1)]);
if((state_val_32153 === (7))){
var inst_32148 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32154_32187 = state_32152__$1;
(statearr_32154_32187[(2)] = inst_32148);

(statearr_32154_32187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (1))){
var inst_32115 = (new Array(n));
var inst_32116 = inst_32115;
var inst_32117 = (0);
var state_32152__$1 = (function (){var statearr_32155 = state_32152;
(statearr_32155[(7)] = inst_32117);

(statearr_32155[(8)] = inst_32116);

return statearr_32155;
})();
var statearr_32156_32188 = state_32152__$1;
(statearr_32156_32188[(2)] = null);

(statearr_32156_32188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (4))){
var inst_32120 = (state_32152[(9)]);
var inst_32120__$1 = (state_32152[(2)]);
var inst_32121 = (inst_32120__$1 == null);
var inst_32122 = cljs.core.not.call(null,inst_32121);
var state_32152__$1 = (function (){var statearr_32157 = state_32152;
(statearr_32157[(9)] = inst_32120__$1);

return statearr_32157;
})();
if(inst_32122){
var statearr_32158_32189 = state_32152__$1;
(statearr_32158_32189[(1)] = (5));

} else {
var statearr_32159_32190 = state_32152__$1;
(statearr_32159_32190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (15))){
var inst_32142 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32160_32191 = state_32152__$1;
(statearr_32160_32191[(2)] = inst_32142);

(statearr_32160_32191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (13))){
var state_32152__$1 = state_32152;
var statearr_32161_32192 = state_32152__$1;
(statearr_32161_32192[(2)] = null);

(statearr_32161_32192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (6))){
var inst_32117 = (state_32152[(7)]);
var inst_32138 = (inst_32117 > (0));
var state_32152__$1 = state_32152;
if(cljs.core.truth_(inst_32138)){
var statearr_32162_32193 = state_32152__$1;
(statearr_32162_32193[(1)] = (12));

} else {
var statearr_32163_32194 = state_32152__$1;
(statearr_32163_32194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (3))){
var inst_32150 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32152__$1,inst_32150);
} else {
if((state_val_32153 === (12))){
var inst_32116 = (state_32152[(8)]);
var inst_32140 = cljs.core.vec.call(null,inst_32116);
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32152__$1,(15),out,inst_32140);
} else {
if((state_val_32153 === (2))){
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32152__$1,(4),ch);
} else {
if((state_val_32153 === (11))){
var inst_32132 = (state_32152[(2)]);
var inst_32133 = (new Array(n));
var inst_32116 = inst_32133;
var inst_32117 = (0);
var state_32152__$1 = (function (){var statearr_32164 = state_32152;
(statearr_32164[(7)] = inst_32117);

(statearr_32164[(10)] = inst_32132);

(statearr_32164[(8)] = inst_32116);

return statearr_32164;
})();
var statearr_32165_32195 = state_32152__$1;
(statearr_32165_32195[(2)] = null);

(statearr_32165_32195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (9))){
var inst_32116 = (state_32152[(8)]);
var inst_32130 = cljs.core.vec.call(null,inst_32116);
var state_32152__$1 = state_32152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32152__$1,(11),out,inst_32130);
} else {
if((state_val_32153 === (5))){
var inst_32117 = (state_32152[(7)]);
var inst_32116 = (state_32152[(8)]);
var inst_32120 = (state_32152[(9)]);
var inst_32125 = (state_32152[(11)]);
var inst_32124 = (inst_32116[inst_32117] = inst_32120);
var inst_32125__$1 = (inst_32117 + (1));
var inst_32126 = (inst_32125__$1 < n);
var state_32152__$1 = (function (){var statearr_32166 = state_32152;
(statearr_32166[(12)] = inst_32124);

(statearr_32166[(11)] = inst_32125__$1);

return statearr_32166;
})();
if(cljs.core.truth_(inst_32126)){
var statearr_32167_32196 = state_32152__$1;
(statearr_32167_32196[(1)] = (8));

} else {
var statearr_32168_32197 = state_32152__$1;
(statearr_32168_32197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (14))){
var inst_32145 = (state_32152[(2)]);
var inst_32146 = cljs.core.async.close_BANG_.call(null,out);
var state_32152__$1 = (function (){var statearr_32170 = state_32152;
(statearr_32170[(13)] = inst_32145);

return statearr_32170;
})();
var statearr_32171_32198 = state_32152__$1;
(statearr_32171_32198[(2)] = inst_32146);

(statearr_32171_32198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (10))){
var inst_32136 = (state_32152[(2)]);
var state_32152__$1 = state_32152;
var statearr_32172_32199 = state_32152__$1;
(statearr_32172_32199[(2)] = inst_32136);

(statearr_32172_32199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32153 === (8))){
var inst_32116 = (state_32152[(8)]);
var inst_32125 = (state_32152[(11)]);
var tmp32169 = inst_32116;
var inst_32116__$1 = tmp32169;
var inst_32117 = inst_32125;
var state_32152__$1 = (function (){var statearr_32173 = state_32152;
(statearr_32173[(7)] = inst_32117);

(statearr_32173[(8)] = inst_32116__$1);

return statearr_32173;
})();
var statearr_32174_32200 = state_32152__$1;
(statearr_32174_32200[(2)] = null);

(statearr_32174_32200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___32186,out))
;
return ((function (switch__29372__auto__,c__29486__auto___32186,out){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_32178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32178[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_32178[(1)] = (1));

return statearr_32178;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_32152){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_32152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e32179){if((e32179 instanceof Object)){
var ex__29376__auto__ = e32179;
var statearr_32180_32201 = state_32152;
(statearr_32180_32201[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32202 = state_32152;
state_32152 = G__32202;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_32152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_32152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___32186,out))
})();
var state__29488__auto__ = (function (){var statearr_32181 = f__29487__auto__.call(null);
(statearr_32181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___32186);

return statearr_32181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___32186,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32203 = [];
var len__28021__auto___32277 = arguments.length;
var i__28022__auto___32278 = (0);
while(true){
if((i__28022__auto___32278 < len__28021__auto___32277)){
args32203.push((arguments[i__28022__auto___32278]));

var G__32279 = (i__28022__auto___32278 + (1));
i__28022__auto___32278 = G__32279;
continue;
} else {
}
break;
}

var G__32205 = args32203.length;
switch (G__32205) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32203.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29486__auto___32281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___32281,out){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___32281,out){
return (function (state_32247){
var state_val_32248 = (state_32247[(1)]);
if((state_val_32248 === (7))){
var inst_32243 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32249_32282 = state_32247__$1;
(statearr_32249_32282[(2)] = inst_32243);

(statearr_32249_32282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (1))){
var inst_32206 = [];
var inst_32207 = inst_32206;
var inst_32208 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32247__$1 = (function (){var statearr_32250 = state_32247;
(statearr_32250[(7)] = inst_32208);

(statearr_32250[(8)] = inst_32207);

return statearr_32250;
})();
var statearr_32251_32283 = state_32247__$1;
(statearr_32251_32283[(2)] = null);

(statearr_32251_32283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (4))){
var inst_32211 = (state_32247[(9)]);
var inst_32211__$1 = (state_32247[(2)]);
var inst_32212 = (inst_32211__$1 == null);
var inst_32213 = cljs.core.not.call(null,inst_32212);
var state_32247__$1 = (function (){var statearr_32252 = state_32247;
(statearr_32252[(9)] = inst_32211__$1);

return statearr_32252;
})();
if(inst_32213){
var statearr_32253_32284 = state_32247__$1;
(statearr_32253_32284[(1)] = (5));

} else {
var statearr_32254_32285 = state_32247__$1;
(statearr_32254_32285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (15))){
var inst_32237 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32255_32286 = state_32247__$1;
(statearr_32255_32286[(2)] = inst_32237);

(statearr_32255_32286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (13))){
var state_32247__$1 = state_32247;
var statearr_32256_32287 = state_32247__$1;
(statearr_32256_32287[(2)] = null);

(statearr_32256_32287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (6))){
var inst_32207 = (state_32247[(8)]);
var inst_32232 = inst_32207.length;
var inst_32233 = (inst_32232 > (0));
var state_32247__$1 = state_32247;
if(cljs.core.truth_(inst_32233)){
var statearr_32257_32288 = state_32247__$1;
(statearr_32257_32288[(1)] = (12));

} else {
var statearr_32258_32289 = state_32247__$1;
(statearr_32258_32289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (3))){
var inst_32245 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32247__$1,inst_32245);
} else {
if((state_val_32248 === (12))){
var inst_32207 = (state_32247[(8)]);
var inst_32235 = cljs.core.vec.call(null,inst_32207);
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32247__$1,(15),out,inst_32235);
} else {
if((state_val_32248 === (2))){
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32247__$1,(4),ch);
} else {
if((state_val_32248 === (11))){
var inst_32215 = (state_32247[(10)]);
var inst_32211 = (state_32247[(9)]);
var inst_32225 = (state_32247[(2)]);
var inst_32226 = [];
var inst_32227 = inst_32226.push(inst_32211);
var inst_32207 = inst_32226;
var inst_32208 = inst_32215;
var state_32247__$1 = (function (){var statearr_32259 = state_32247;
(statearr_32259[(7)] = inst_32208);

(statearr_32259[(8)] = inst_32207);

(statearr_32259[(11)] = inst_32227);

(statearr_32259[(12)] = inst_32225);

return statearr_32259;
})();
var statearr_32260_32290 = state_32247__$1;
(statearr_32260_32290[(2)] = null);

(statearr_32260_32290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (9))){
var inst_32207 = (state_32247[(8)]);
var inst_32223 = cljs.core.vec.call(null,inst_32207);
var state_32247__$1 = state_32247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32247__$1,(11),out,inst_32223);
} else {
if((state_val_32248 === (5))){
var inst_32208 = (state_32247[(7)]);
var inst_32215 = (state_32247[(10)]);
var inst_32211 = (state_32247[(9)]);
var inst_32215__$1 = f.call(null,inst_32211);
var inst_32216 = cljs.core._EQ_.call(null,inst_32215__$1,inst_32208);
var inst_32217 = cljs.core.keyword_identical_QMARK_.call(null,inst_32208,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32218 = (inst_32216) || (inst_32217);
var state_32247__$1 = (function (){var statearr_32261 = state_32247;
(statearr_32261[(10)] = inst_32215__$1);

return statearr_32261;
})();
if(cljs.core.truth_(inst_32218)){
var statearr_32262_32291 = state_32247__$1;
(statearr_32262_32291[(1)] = (8));

} else {
var statearr_32263_32292 = state_32247__$1;
(statearr_32263_32292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (14))){
var inst_32240 = (state_32247[(2)]);
var inst_32241 = cljs.core.async.close_BANG_.call(null,out);
var state_32247__$1 = (function (){var statearr_32265 = state_32247;
(statearr_32265[(13)] = inst_32240);

return statearr_32265;
})();
var statearr_32266_32293 = state_32247__$1;
(statearr_32266_32293[(2)] = inst_32241);

(statearr_32266_32293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (10))){
var inst_32230 = (state_32247[(2)]);
var state_32247__$1 = state_32247;
var statearr_32267_32294 = state_32247__$1;
(statearr_32267_32294[(2)] = inst_32230);

(statearr_32267_32294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32248 === (8))){
var inst_32207 = (state_32247[(8)]);
var inst_32215 = (state_32247[(10)]);
var inst_32211 = (state_32247[(9)]);
var inst_32220 = inst_32207.push(inst_32211);
var tmp32264 = inst_32207;
var inst_32207__$1 = tmp32264;
var inst_32208 = inst_32215;
var state_32247__$1 = (function (){var statearr_32268 = state_32247;
(statearr_32268[(7)] = inst_32208);

(statearr_32268[(8)] = inst_32207__$1);

(statearr_32268[(14)] = inst_32220);

return statearr_32268;
})();
var statearr_32269_32295 = state_32247__$1;
(statearr_32269_32295[(2)] = null);

(statearr_32269_32295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29486__auto___32281,out))
;
return ((function (switch__29372__auto__,c__29486__auto___32281,out){
return (function() {
var cljs$core$async$state_machine__29373__auto__ = null;
var cljs$core$async$state_machine__29373__auto____0 = (function (){
var statearr_32273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32273[(0)] = cljs$core$async$state_machine__29373__auto__);

(statearr_32273[(1)] = (1));

return statearr_32273;
});
var cljs$core$async$state_machine__29373__auto____1 = (function (state_32247){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_32247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e32274){if((e32274 instanceof Object)){
var ex__29376__auto__ = e32274;
var statearr_32275_32296 = state_32247;
(statearr_32275_32296[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32297 = state_32247;
state_32247 = G__32297;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
cljs$core$async$state_machine__29373__auto__ = function(state_32247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29373__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29373__auto____1.call(this,state_32247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29373__auto____0;
cljs$core$async$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29373__auto____1;
return cljs$core$async$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___32281,out))
})();
var state__29488__auto__ = (function (){var statearr_32276 = f__29487__auto__.call(null);
(statearr_32276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___32281);

return statearr_32276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___32281,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1481250419648