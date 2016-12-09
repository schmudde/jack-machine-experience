// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8489_8493 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8490_8494 = null;
var count__8491_8495 = (0);
var i__8492_8496 = (0);
while(true){
if((i__8492_8496 < count__8491_8495)){
var k_8497 = cljs.core._nth.call(null,chunk__8490_8494,i__8492_8496);
var v_8498 = (b[k_8497]);
(a[k_8497] = v_8498);

var G__8499 = seq__8489_8493;
var G__8500 = chunk__8490_8494;
var G__8501 = count__8491_8495;
var G__8502 = (i__8492_8496 + (1));
seq__8489_8493 = G__8499;
chunk__8490_8494 = G__8500;
count__8491_8495 = G__8501;
i__8492_8496 = G__8502;
continue;
} else {
var temp__6753__auto___8503 = cljs.core.seq.call(null,seq__8489_8493);
if(temp__6753__auto___8503){
var seq__8489_8504__$1 = temp__6753__auto___8503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489_8504__$1)){
var c__8115__auto___8505 = cljs.core.chunk_first.call(null,seq__8489_8504__$1);
var G__8506 = cljs.core.chunk_rest.call(null,seq__8489_8504__$1);
var G__8507 = c__8115__auto___8505;
var G__8508 = cljs.core.count.call(null,c__8115__auto___8505);
var G__8509 = (0);
seq__8489_8493 = G__8506;
chunk__8490_8494 = G__8507;
count__8491_8495 = G__8508;
i__8492_8496 = G__8509;
continue;
} else {
var k_8510 = cljs.core.first.call(null,seq__8489_8504__$1);
var v_8511 = (b[k_8510]);
(a[k_8510] = v_8511);

var G__8512 = cljs.core.next.call(null,seq__8489_8504__$1);
var G__8513 = null;
var G__8514 = (0);
var G__8515 = (0);
seq__8489_8493 = G__8512;
chunk__8490_8494 = G__8513;
count__8491_8495 = G__8514;
i__8492_8496 = G__8515;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args8516 = [];
var len__8425__auto___8519 = arguments.length;
var i__8426__auto___8520 = (0);
while(true){
if((i__8426__auto___8520 < len__8425__auto___8519)){
args8516.push((arguments[i__8426__auto___8520]));

var G__8521 = (i__8426__auto___8520 + (1));
i__8426__auto___8520 = G__8521;
continue;
} else {
}
break;
}

var G__8518 = args8516.length;
switch (G__8518) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8516.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8523 = (i + (2));
var G__8524 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8523;
ret = G__8524;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8525_8529 = cljs.core.seq.call(null,v);
var chunk__8526_8530 = null;
var count__8527_8531 = (0);
var i__8528_8532 = (0);
while(true){
if((i__8528_8532 < count__8527_8531)){
var x_8533 = cljs.core._nth.call(null,chunk__8526_8530,i__8528_8532);
ret.push(x_8533);

var G__8534 = seq__8525_8529;
var G__8535 = chunk__8526_8530;
var G__8536 = count__8527_8531;
var G__8537 = (i__8528_8532 + (1));
seq__8525_8529 = G__8534;
chunk__8526_8530 = G__8535;
count__8527_8531 = G__8536;
i__8528_8532 = G__8537;
continue;
} else {
var temp__6753__auto___8538 = cljs.core.seq.call(null,seq__8525_8529);
if(temp__6753__auto___8538){
var seq__8525_8539__$1 = temp__6753__auto___8538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8525_8539__$1)){
var c__8115__auto___8540 = cljs.core.chunk_first.call(null,seq__8525_8539__$1);
var G__8541 = cljs.core.chunk_rest.call(null,seq__8525_8539__$1);
var G__8542 = c__8115__auto___8540;
var G__8543 = cljs.core.count.call(null,c__8115__auto___8540);
var G__8544 = (0);
seq__8525_8529 = G__8541;
chunk__8526_8530 = G__8542;
count__8527_8531 = G__8543;
i__8528_8532 = G__8544;
continue;
} else {
var x_8545 = cljs.core.first.call(null,seq__8525_8539__$1);
ret.push(x_8545);

var G__8546 = cljs.core.next.call(null,seq__8525_8539__$1);
var G__8547 = null;
var G__8548 = (0);
var G__8549 = (0);
seq__8525_8529 = G__8546;
chunk__8526_8530 = G__8547;
count__8527_8531 = G__8548;
i__8528_8532 = G__8549;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8550_8554 = cljs.core.seq.call(null,v);
var chunk__8551_8555 = null;
var count__8552_8556 = (0);
var i__8553_8557 = (0);
while(true){
if((i__8553_8557 < count__8552_8556)){
var x_8558 = cljs.core._nth.call(null,chunk__8551_8555,i__8553_8557);
ret.push(x_8558);

var G__8559 = seq__8550_8554;
var G__8560 = chunk__8551_8555;
var G__8561 = count__8552_8556;
var G__8562 = (i__8553_8557 + (1));
seq__8550_8554 = G__8559;
chunk__8551_8555 = G__8560;
count__8552_8556 = G__8561;
i__8553_8557 = G__8562;
continue;
} else {
var temp__6753__auto___8563 = cljs.core.seq.call(null,seq__8550_8554);
if(temp__6753__auto___8563){
var seq__8550_8564__$1 = temp__6753__auto___8563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8550_8564__$1)){
var c__8115__auto___8565 = cljs.core.chunk_first.call(null,seq__8550_8564__$1);
var G__8566 = cljs.core.chunk_rest.call(null,seq__8550_8564__$1);
var G__8567 = c__8115__auto___8565;
var G__8568 = cljs.core.count.call(null,c__8115__auto___8565);
var G__8569 = (0);
seq__8550_8554 = G__8566;
chunk__8551_8555 = G__8567;
count__8552_8556 = G__8568;
i__8553_8557 = G__8569;
continue;
} else {
var x_8570 = cljs.core.first.call(null,seq__8550_8564__$1);
ret.push(x_8570);

var G__8571 = cljs.core.next.call(null,seq__8550_8564__$1);
var G__8572 = null;
var G__8573 = (0);
var G__8574 = (0);
seq__8550_8554 = G__8571;
chunk__8551_8555 = G__8572;
count__8552_8556 = G__8573;
i__8553_8557 = G__8574;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8575_8579 = cljs.core.seq.call(null,v);
var chunk__8576_8580 = null;
var count__8577_8581 = (0);
var i__8578_8582 = (0);
while(true){
if((i__8578_8582 < count__8577_8581)){
var x_8583 = cljs.core._nth.call(null,chunk__8576_8580,i__8578_8582);
ret.push(x_8583);

var G__8584 = seq__8575_8579;
var G__8585 = chunk__8576_8580;
var G__8586 = count__8577_8581;
var G__8587 = (i__8578_8582 + (1));
seq__8575_8579 = G__8584;
chunk__8576_8580 = G__8585;
count__8577_8581 = G__8586;
i__8578_8582 = G__8587;
continue;
} else {
var temp__6753__auto___8588 = cljs.core.seq.call(null,seq__8575_8579);
if(temp__6753__auto___8588){
var seq__8575_8589__$1 = temp__6753__auto___8588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8575_8589__$1)){
var c__8115__auto___8590 = cljs.core.chunk_first.call(null,seq__8575_8589__$1);
var G__8591 = cljs.core.chunk_rest.call(null,seq__8575_8589__$1);
var G__8592 = c__8115__auto___8590;
var G__8593 = cljs.core.count.call(null,c__8115__auto___8590);
var G__8594 = (0);
seq__8575_8579 = G__8591;
chunk__8576_8580 = G__8592;
count__8577_8581 = G__8593;
i__8578_8582 = G__8594;
continue;
} else {
var x_8595 = cljs.core.first.call(null,seq__8575_8589__$1);
ret.push(x_8595);

var G__8596 = cljs.core.next.call(null,seq__8575_8589__$1);
var G__8597 = null;
var G__8598 = (0);
var G__8599 = (0);
seq__8575_8579 = G__8596;
chunk__8576_8580 = G__8597;
count__8577_8581 = G__8598;
i__8578_8582 = G__8599;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args8600 = [];
var len__8425__auto___8615 = arguments.length;
var i__8426__auto___8616 = (0);
while(true){
if((i__8426__auto___8616 < len__8425__auto___8615)){
args8600.push((arguments[i__8426__auto___8616]));

var G__8617 = (i__8426__auto___8616 + (1));
i__8426__auto___8616 = G__8617;
continue;
} else {
}
break;
}

var G__8602 = args8600.length;
switch (G__8602) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8600.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8603 = obj;
G__8603.push(kfn.call(null,k),vfn.call(null,v));

return G__8603;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8604 = cljs.core.clone.call(null,handlers);
x8604.forEach = ((function (x8604,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8605 = cljs.core.seq.call(null,coll);
var chunk__8606 = null;
var count__8607 = (0);
var i__8608 = (0);
while(true){
if((i__8608 < count__8607)){
var vec__8609 = cljs.core._nth.call(null,chunk__8606,i__8608);
var k = cljs.core.nth.call(null,vec__8609,(0),null);
var v = cljs.core.nth.call(null,vec__8609,(1),null);
f.call(null,v,k);

var G__8619 = seq__8605;
var G__8620 = chunk__8606;
var G__8621 = count__8607;
var G__8622 = (i__8608 + (1));
seq__8605 = G__8619;
chunk__8606 = G__8620;
count__8607 = G__8621;
i__8608 = G__8622;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8605);
if(temp__6753__auto__){
var seq__8605__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8605__$1)){
var c__8115__auto__ = cljs.core.chunk_first.call(null,seq__8605__$1);
var G__8623 = cljs.core.chunk_rest.call(null,seq__8605__$1);
var G__8624 = c__8115__auto__;
var G__8625 = cljs.core.count.call(null,c__8115__auto__);
var G__8626 = (0);
seq__8605 = G__8623;
chunk__8606 = G__8624;
count__8607 = G__8625;
i__8608 = G__8626;
continue;
} else {
var vec__8612 = cljs.core.first.call(null,seq__8605__$1);
var k = cljs.core.nth.call(null,vec__8612,(0),null);
var v = cljs.core.nth.call(null,vec__8612,(1),null);
f.call(null,v,k);

var G__8627 = cljs.core.next.call(null,seq__8605__$1);
var G__8628 = null;
var G__8629 = (0);
var G__8630 = (0);
seq__8605 = G__8627;
chunk__8606 = G__8628;
count__8607 = G__8629;
i__8608 = G__8630;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8604,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8604;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args8631 = [];
var len__8425__auto___8637 = arguments.length;
var i__8426__auto___8638 = (0);
while(true){
if((i__8426__auto___8638 < len__8425__auto___8637)){
args8631.push((arguments[i__8426__auto___8638]));

var G__8639 = (i__8426__auto___8638 + (1));
i__8426__auto___8638 = G__8639;
continue;
} else {
}
break;
}

var G__8633 = args8631.length;
switch (G__8633) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8631.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit8634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8634 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8635){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8635 = meta8635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit8634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8636,meta8635__$1){
var self__ = this;
var _8636__$1 = this;
return (new cognitect.transit.t_cognitect$transit8634(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8635__$1));
});

cognitect.transit.t_cognitect$transit8634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8636){
var self__ = this;
var _8636__$1 = this;
return self__.meta8635;
});

cognitect.transit.t_cognitect$transit8634.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8634.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8634.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8634.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8635","meta8635",-1349987115,null)], null);
});

cognitect.transit.t_cognitect$transit8634.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8634.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8634";

cognitect.transit.t_cognitect$transit8634.cljs$lang$ctorPrWriter = (function (this__7861__auto__,writer__7862__auto__,opt__7863__auto__){
return cljs.core._write.call(null,writer__7862__auto__,"cognitect.transit/t_cognitect$transit8634");
});

cognitect.transit.__GT_t_cognitect$transit8634 = (function cognitect$transit$__GT_t_cognitect$transit8634(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8635){
return (new cognitect.transit.t_cognitect$transit8634(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8635));
});

}

return (new cognitect.transit.t_cognitect$transit8634(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__7209__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__7209__auto__)){
return or__7209__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map