// Compiled by ClojureScript 1.9.293 {}
goog.provide('jack_machine_experience.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
/**
 * @constructor
 */
jack_machine_experience.core.HelloWorld = (function jack_machine_experience$core$HelloWorld(){
var this__10121__auto__ = this;
React.Component.apply(this__10121__auto__,arguments);

if(!((this__10121__auto__.initLocalState == null))){
this__10121__auto__.state = this__10121__auto__.initLocalState();
} else {
this__10121__auto__.state = {};
}

return this__10121__auto__;
});

jack_machine_experience.core.HelloWorld.prototype = goog.object.clone(React.Component.prototype);

var x10970_10980 = jack_machine_experience.core.HelloWorld.prototype;
x10970_10980.componentWillUpdate = ((function (x10970_10980){
return (function (next_props__9976__auto__,next_state__9977__auto__){
var this__9975__auto__ = this;
if(((!((this__9975__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__9975__auto__.om$next$Ident$)))?true:false):false)){
var ident__9979__auto___10981 = om.next.ident.call(null,this__9975__auto__,om.next.props.call(null,this__9975__auto__));
var next_ident__9980__auto___10982 = om.next.ident.call(null,this__9975__auto__,om.next._next_props.call(null,next_props__9976__auto__,this__9975__auto__));
if(cljs.core.not_EQ_.call(null,ident__9979__auto___10981,next_ident__9980__auto___10982)){
var idxr__9981__auto___10983 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9975__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__9981__auto___10983 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__9981__auto___10983),((function (idxr__9981__auto___10983,ident__9979__auto___10981,next_ident__9980__auto___10982,this__9975__auto__,x10970_10980){
return (function (indexes__9982__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__9982__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__9979__auto___10981], null),cljs.core.disj,this__9975__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__9980__auto___10982], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__9975__auto__);
});})(idxr__9981__auto___10983,ident__9979__auto___10981,next_ident__9980__auto___10982,this__9975__auto__,x10970_10980))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__9975__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9975__auto__);
});})(x10970_10980))
;

x10970_10980.shouldComponentUpdate = ((function (x10970_10980){
return (function (next_props__9976__auto__,next_state__9977__auto__){
var this__9975__auto__ = this;
var next_children__9978__auto__ = next_props__9976__auto__.children;
var next_props__9976__auto____$1 = goog.object.get(next_props__9976__auto__,"omcljs$value");
var next_props__9976__auto____$2 = (function (){var G__10972 = next_props__9976__auto____$1;
if((next_props__9976__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__10972);
} else {
return G__10972;
}
})();
var or__7209__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__9975__auto__),next_props__9976__auto____$2);
if(or__7209__auto__){
return or__7209__auto__;
} else {
var or__7209__auto____$1 = (function (){var and__7197__auto__ = this__9975__auto__.state;
if(cljs.core.truth_(and__7197__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__9975__auto__.state,"omcljs$state"),goog.object.get(next_state__9977__auto__,"omcljs$state"));
} else {
return and__7197__auto__;
}
})();
if(cljs.core.truth_(or__7209__auto____$1)){
return or__7209__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__9975__auto__.props.children,next_children__9978__auto__);
}
}
});})(x10970_10980))
;

x10970_10980.componentWillUnmount = ((function (x10970_10980){
return (function (){
var this__9975__auto__ = this;
var r__9986__auto__ = om.next.get_reconciler.call(null,this__9975__auto__);
var cfg__9987__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__9986__auto__);
var st__9988__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__9987__auto__);
var indexer__9985__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__9987__auto__);
if(cljs.core.truth_((function (){var and__7197__auto__ = !((st__9988__auto__ == null));
if(and__7197__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__9988__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__9975__auto__], null));
} else {
return and__7197__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__9988__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__9975__auto__);
} else {
}

if((indexer__9985__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__9985__auto__,this__9975__auto__);
}
});})(x10970_10980))
;

x10970_10980.componentDidUpdate = ((function (x10970_10980){
return (function (prev_props__9983__auto__,prev_state__9984__auto__){
var this__9975__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9975__auto__);
});})(x10970_10980))
;

x10970_10980.isMounted = ((function (x10970_10980){
return (function (){
var this__9975__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9975__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10970_10980))
;

x10970_10980.componentWillMount = ((function (x10970_10980){
return (function (){
var this__9975__auto__ = this;
var indexer__9985__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9975__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9985__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9985__auto__,this__9975__auto__);
}
});})(x10970_10980))
;

x10970_10980.render = ((function (x10970_10980){
return (function (){
var this__9974__auto__ = this;
var this$ = this__9974__auto__;
var _STAR_reconciler_STAR_10973 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10974 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10975 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10976 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10977 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9974__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9974__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9974__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9974__auto__);

om.next._STAR_parent_STAR_ = this__9974__auto__;

try{return om.dom.div.call(null,null,"Hello World!");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10977;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10976;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10975;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10974;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10973;
}});})(x10970_10980))
;


jack_machine_experience.core.HelloWorld.prototype.constructor = jack_machine_experience.core.HelloWorld;

jack_machine_experience.core.HelloWorld.prototype.constructor.displayName = "jack-machine-experience.core/HelloWorld";

jack_machine_experience.core.HelloWorld.prototype.om$isComponent = true;

var x10978_10984 = jack_machine_experience.core.HelloWorld;


var x10979_10985 = jack_machine_experience.core.HelloWorld.prototype;


jack_machine_experience.core.HelloWorld.cljs$lang$type = true;

jack_machine_experience.core.HelloWorld.cljs$lang$ctorStr = "jack-machine-experience.core/HelloWorld";

jack_machine_experience.core.HelloWorld.cljs$lang$ctorPrWriter = (function (this__10124__auto__,writer__10125__auto__,opt__10126__auto__){
return cljs.core._write.call(null,writer__10125__auto__,"jack-machine-experience.core/HelloWorld");
});
jack_machine_experience.core.hello = om.next.factory.call(null,jack_machine_experience.core.HelloWorld);
ReactDOM.render(jack_machine_experience.core.hello.call(null),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map