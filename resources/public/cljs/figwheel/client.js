// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36756 = [];
var len__28021__auto___36759 = arguments.length;
var i__28022__auto___36760 = (0);
while(true){
if((i__28022__auto___36760 < len__28021__auto___36759)){
args36756.push((arguments[i__28022__auto___36760]));

var G__36761 = (i__28022__auto___36760 + (1));
i__28022__auto___36760 = G__36761;
continue;
} else {
}
break;
}

var G__36758 = args36756.length;
switch (G__36758) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36756.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28028__auto__ = [];
var len__28021__auto___36764 = arguments.length;
var i__28022__auto___36765 = (0);
while(true){
if((i__28022__auto___36765 < len__28021__auto___36764)){
args__28028__auto__.push((arguments[i__28022__auto___36765]));

var G__36766 = (i__28022__auto___36765 + (1));
i__28022__auto___36765 = G__36766;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36763){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36763));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28028__auto__ = [];
var len__28021__auto___36768 = arguments.length;
var i__28022__auto___36769 = (0);
while(true){
if((i__28022__auto___36769 < len__28021__auto___36768)){
args__28028__auto__.push((arguments[i__28022__auto___36769]));

var G__36770 = (i__28022__auto___36769 + (1));
i__28022__auto___36769 = G__36770;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36767){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36767));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36771 = cljs.core._EQ_;
var expr__36772 = (function (){var or__26805__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36775){if((e36775 instanceof Error)){
var e = e36775;
return false;
} else {
throw e36775;

}
}})();
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36771.call(null,"true",expr__36772))){
return true;
} else {
if(cljs.core.truth_(pred__36771.call(null,"false",expr__36772))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36772)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36777){if((e36777 instanceof Error)){
var e = e36777;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36777;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36778){
var map__36781 = p__36778;
var map__36781__$1 = ((((!((map__36781 == null)))?((((map__36781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36781):map__36781);
var message = cljs.core.get.call(null,map__36781__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36781__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29486__auto___36943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___36943,ch){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___36943,ch){
return (function (state_36912){
var state_val_36913 = (state_36912[(1)]);
if((state_val_36913 === (7))){
var inst_36908 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
var statearr_36914_36944 = state_36912__$1;
(statearr_36914_36944[(2)] = inst_36908);

(statearr_36914_36944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (1))){
var state_36912__$1 = state_36912;
var statearr_36915_36945 = state_36912__$1;
(statearr_36915_36945[(2)] = null);

(statearr_36915_36945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (4))){
var inst_36865 = (state_36912[(7)]);
var inst_36865__$1 = (state_36912[(2)]);
var state_36912__$1 = (function (){var statearr_36916 = state_36912;
(statearr_36916[(7)] = inst_36865__$1);

return statearr_36916;
})();
if(cljs.core.truth_(inst_36865__$1)){
var statearr_36917_36946 = state_36912__$1;
(statearr_36917_36946[(1)] = (5));

} else {
var statearr_36918_36947 = state_36912__$1;
(statearr_36918_36947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (15))){
var inst_36872 = (state_36912[(8)]);
var inst_36887 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36872);
var inst_36888 = cljs.core.first.call(null,inst_36887);
var inst_36889 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36888);
var inst_36890 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36889)].join('');
var inst_36891 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36890);
var state_36912__$1 = state_36912;
var statearr_36919_36948 = state_36912__$1;
(statearr_36919_36948[(2)] = inst_36891);

(statearr_36919_36948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (13))){
var inst_36896 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
var statearr_36920_36949 = state_36912__$1;
(statearr_36920_36949[(2)] = inst_36896);

(statearr_36920_36949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (6))){
var state_36912__$1 = state_36912;
var statearr_36921_36950 = state_36912__$1;
(statearr_36921_36950[(2)] = null);

(statearr_36921_36950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (17))){
var inst_36894 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
var statearr_36922_36951 = state_36912__$1;
(statearr_36922_36951[(2)] = inst_36894);

(statearr_36922_36951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (3))){
var inst_36910 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36912__$1,inst_36910);
} else {
if((state_val_36913 === (12))){
var inst_36871 = (state_36912[(9)]);
var inst_36885 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36871,opts);
var state_36912__$1 = state_36912;
if(cljs.core.truth_(inst_36885)){
var statearr_36923_36952 = state_36912__$1;
(statearr_36923_36952[(1)] = (15));

} else {
var statearr_36924_36953 = state_36912__$1;
(statearr_36924_36953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (2))){
var state_36912__$1 = state_36912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36912__$1,(4),ch);
} else {
if((state_val_36913 === (11))){
var inst_36872 = (state_36912[(8)]);
var inst_36877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36878 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36872);
var inst_36879 = cljs.core.async.timeout.call(null,(1000));
var inst_36880 = [inst_36878,inst_36879];
var inst_36881 = (new cljs.core.PersistentVector(null,2,(5),inst_36877,inst_36880,null));
var state_36912__$1 = state_36912;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36912__$1,(14),inst_36881);
} else {
if((state_val_36913 === (9))){
var inst_36872 = (state_36912[(8)]);
var inst_36898 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36899 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36872);
var inst_36900 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36899);
var inst_36901 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36900)].join('');
var inst_36902 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36901);
var state_36912__$1 = (function (){var statearr_36925 = state_36912;
(statearr_36925[(10)] = inst_36898);

return statearr_36925;
})();
var statearr_36926_36954 = state_36912__$1;
(statearr_36926_36954[(2)] = inst_36902);

(statearr_36926_36954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (5))){
var inst_36865 = (state_36912[(7)]);
var inst_36867 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36868 = (new cljs.core.PersistentArrayMap(null,2,inst_36867,null));
var inst_36869 = (new cljs.core.PersistentHashSet(null,inst_36868,null));
var inst_36870 = figwheel.client.focus_msgs.call(null,inst_36869,inst_36865);
var inst_36871 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36870);
var inst_36872 = cljs.core.first.call(null,inst_36870);
var inst_36873 = figwheel.client.autoload_QMARK_.call(null);
var state_36912__$1 = (function (){var statearr_36927 = state_36912;
(statearr_36927[(8)] = inst_36872);

(statearr_36927[(9)] = inst_36871);

return statearr_36927;
})();
if(cljs.core.truth_(inst_36873)){
var statearr_36928_36955 = state_36912__$1;
(statearr_36928_36955[(1)] = (8));

} else {
var statearr_36929_36956 = state_36912__$1;
(statearr_36929_36956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (14))){
var inst_36883 = (state_36912[(2)]);
var state_36912__$1 = state_36912;
var statearr_36930_36957 = state_36912__$1;
(statearr_36930_36957[(2)] = inst_36883);

(statearr_36930_36957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (16))){
var state_36912__$1 = state_36912;
var statearr_36931_36958 = state_36912__$1;
(statearr_36931_36958[(2)] = null);

(statearr_36931_36958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (10))){
var inst_36904 = (state_36912[(2)]);
var state_36912__$1 = (function (){var statearr_36932 = state_36912;
(statearr_36932[(11)] = inst_36904);

return statearr_36932;
})();
var statearr_36933_36959 = state_36912__$1;
(statearr_36933_36959[(2)] = null);

(statearr_36933_36959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36913 === (8))){
var inst_36871 = (state_36912[(9)]);
var inst_36875 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36871,opts);
var state_36912__$1 = state_36912;
if(cljs.core.truth_(inst_36875)){
var statearr_36934_36960 = state_36912__$1;
(statearr_36934_36960[(1)] = (11));

} else {
var statearr_36935_36961 = state_36912__$1;
(statearr_36935_36961[(1)] = (12));

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
});})(c__29486__auto___36943,ch))
;
return ((function (switch__29372__auto__,c__29486__auto___36943,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29373__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29373__auto____0 = (function (){
var statearr_36939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36939[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29373__auto__);

(statearr_36939[(1)] = (1));

return statearr_36939;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29373__auto____1 = (function (state_36912){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_36912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e36940){if((e36940 instanceof Object)){
var ex__29376__auto__ = e36940;
var statearr_36941_36962 = state_36912;
(statearr_36941_36962[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36963 = state_36912;
state_36912 = G__36963;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29373__auto__ = function(state_36912){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29373__auto____1.call(this,state_36912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29373__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29373__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___36943,ch))
})();
var state__29488__auto__ = (function (){var statearr_36942 = f__29487__auto__.call(null);
(statearr_36942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___36943);

return statearr_36942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___36943,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36964_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36964_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36967 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36967){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36966){if((e36966 instanceof Error)){
var e = e36966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36967], null));
} else {
var e = e36966;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36967))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36968){
var map__36977 = p__36968;
var map__36977__$1 = ((((!((map__36977 == null)))?((((map__36977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36977):map__36977);
var opts = map__36977__$1;
var build_id = cljs.core.get.call(null,map__36977__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36977,map__36977__$1,opts,build_id){
return (function (p__36979){
var vec__36980 = p__36979;
var seq__36981 = cljs.core.seq.call(null,vec__36980);
var first__36982 = cljs.core.first.call(null,seq__36981);
var seq__36981__$1 = cljs.core.next.call(null,seq__36981);
var map__36983 = first__36982;
var map__36983__$1 = ((((!((map__36983 == null)))?((((map__36983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36983):map__36983);
var msg = map__36983__$1;
var msg_name = cljs.core.get.call(null,map__36983__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36981__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36980,seq__36981,first__36982,seq__36981__$1,map__36983,map__36983__$1,msg,msg_name,_,map__36977,map__36977__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36980,seq__36981,first__36982,seq__36981__$1,map__36983,map__36983__$1,msg,msg_name,_,map__36977,map__36977__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36977,map__36977__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36991){
var vec__36992 = p__36991;
var seq__36993 = cljs.core.seq.call(null,vec__36992);
var first__36994 = cljs.core.first.call(null,seq__36993);
var seq__36993__$1 = cljs.core.next.call(null,seq__36993);
var map__36995 = first__36994;
var map__36995__$1 = ((((!((map__36995 == null)))?((((map__36995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36995):map__36995);
var msg = map__36995__$1;
var msg_name = cljs.core.get.call(null,map__36995__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36993__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36997){
var map__37009 = p__36997;
var map__37009__$1 = ((((!((map__37009 == null)))?((((map__37009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37009):map__37009);
var on_compile_warning = cljs.core.get.call(null,map__37009__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37009__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37009,map__37009__$1,on_compile_warning,on_compile_fail){
return (function (p__37011){
var vec__37012 = p__37011;
var seq__37013 = cljs.core.seq.call(null,vec__37012);
var first__37014 = cljs.core.first.call(null,seq__37013);
var seq__37013__$1 = cljs.core.next.call(null,seq__37013);
var map__37015 = first__37014;
var map__37015__$1 = ((((!((map__37015 == null)))?((((map__37015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37015):map__37015);
var msg = map__37015__$1;
var msg_name = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37013__$1;
var pred__37017 = cljs.core._EQ_;
var expr__37018 = msg_name;
if(cljs.core.truth_(pred__37017.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37018))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37017.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37018))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37009,map__37009__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__,msg_hist,msg_names,msg){
return (function (state_37246){
var state_val_37247 = (state_37246[(1)]);
if((state_val_37247 === (7))){
var inst_37166 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37166)){
var statearr_37248_37298 = state_37246__$1;
(statearr_37248_37298[(1)] = (8));

} else {
var statearr_37249_37299 = state_37246__$1;
(statearr_37249_37299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (20))){
var inst_37240 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37250_37300 = state_37246__$1;
(statearr_37250_37300[(2)] = inst_37240);

(statearr_37250_37300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (27))){
var inst_37236 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37251_37301 = state_37246__$1;
(statearr_37251_37301[(2)] = inst_37236);

(statearr_37251_37301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (1))){
var inst_37159 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37159)){
var statearr_37252_37302 = state_37246__$1;
(statearr_37252_37302[(1)] = (2));

} else {
var statearr_37253_37303 = state_37246__$1;
(statearr_37253_37303[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (24))){
var inst_37238 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37254_37304 = state_37246__$1;
(statearr_37254_37304[(2)] = inst_37238);

(statearr_37254_37304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (4))){
var inst_37244 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37246__$1,inst_37244);
} else {
if((state_val_37247 === (15))){
var inst_37242 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37255_37305 = state_37246__$1;
(statearr_37255_37305[(2)] = inst_37242);

(statearr_37255_37305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (21))){
var inst_37195 = (state_37246[(2)]);
var inst_37196 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37197 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37196);
var state_37246__$1 = (function (){var statearr_37256 = state_37246;
(statearr_37256[(7)] = inst_37195);

return statearr_37256;
})();
var statearr_37257_37306 = state_37246__$1;
(statearr_37257_37306[(2)] = inst_37197);

(statearr_37257_37306[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (31))){
var inst_37225 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37225)){
var statearr_37258_37307 = state_37246__$1;
(statearr_37258_37307[(1)] = (34));

} else {
var statearr_37259_37308 = state_37246__$1;
(statearr_37259_37308[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (32))){
var inst_37234 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37260_37309 = state_37246__$1;
(statearr_37260_37309[(2)] = inst_37234);

(statearr_37260_37309[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (33))){
var inst_37221 = (state_37246[(2)]);
var inst_37222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37223 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37222);
var state_37246__$1 = (function (){var statearr_37261 = state_37246;
(statearr_37261[(8)] = inst_37221);

return statearr_37261;
})();
var statearr_37262_37310 = state_37246__$1;
(statearr_37262_37310[(2)] = inst_37223);

(statearr_37262_37310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (13))){
var inst_37180 = figwheel.client.heads_up.clear.call(null);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(16),inst_37180);
} else {
if((state_val_37247 === (22))){
var inst_37201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37202 = figwheel.client.heads_up.append_warning_message.call(null,inst_37201);
var state_37246__$1 = state_37246;
var statearr_37263_37311 = state_37246__$1;
(statearr_37263_37311[(2)] = inst_37202);

(statearr_37263_37311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (36))){
var inst_37232 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37264_37312 = state_37246__$1;
(statearr_37264_37312[(2)] = inst_37232);

(statearr_37264_37312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (29))){
var inst_37212 = (state_37246[(2)]);
var inst_37213 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37214 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37213);
var state_37246__$1 = (function (){var statearr_37265 = state_37246;
(statearr_37265[(9)] = inst_37212);

return statearr_37265;
})();
var statearr_37266_37313 = state_37246__$1;
(statearr_37266_37313[(2)] = inst_37214);

(statearr_37266_37313[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (6))){
var inst_37161 = (state_37246[(10)]);
var state_37246__$1 = state_37246;
var statearr_37267_37314 = state_37246__$1;
(statearr_37267_37314[(2)] = inst_37161);

(statearr_37267_37314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (28))){
var inst_37208 = (state_37246[(2)]);
var inst_37209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37210 = figwheel.client.heads_up.display_warning.call(null,inst_37209);
var state_37246__$1 = (function (){var statearr_37268 = state_37246;
(statearr_37268[(11)] = inst_37208);

return statearr_37268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(29),inst_37210);
} else {
if((state_val_37247 === (25))){
var inst_37206 = figwheel.client.heads_up.clear.call(null);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(28),inst_37206);
} else {
if((state_val_37247 === (34))){
var inst_37227 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(37),inst_37227);
} else {
if((state_val_37247 === (17))){
var inst_37186 = (state_37246[(2)]);
var inst_37187 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37188 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37187);
var state_37246__$1 = (function (){var statearr_37269 = state_37246;
(statearr_37269[(12)] = inst_37186);

return statearr_37269;
})();
var statearr_37270_37315 = state_37246__$1;
(statearr_37270_37315[(2)] = inst_37188);

(statearr_37270_37315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (3))){
var inst_37178 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37178)){
var statearr_37271_37316 = state_37246__$1;
(statearr_37271_37316[(1)] = (13));

} else {
var statearr_37272_37317 = state_37246__$1;
(statearr_37272_37317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (12))){
var inst_37174 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37273_37318 = state_37246__$1;
(statearr_37273_37318[(2)] = inst_37174);

(statearr_37273_37318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (2))){
var inst_37161 = (state_37246[(10)]);
var inst_37161__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37246__$1 = (function (){var statearr_37274 = state_37246;
(statearr_37274[(10)] = inst_37161__$1);

return statearr_37274;
})();
if(cljs.core.truth_(inst_37161__$1)){
var statearr_37275_37319 = state_37246__$1;
(statearr_37275_37319[(1)] = (5));

} else {
var statearr_37276_37320 = state_37246__$1;
(statearr_37276_37320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (23))){
var inst_37204 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37204)){
var statearr_37277_37321 = state_37246__$1;
(statearr_37277_37321[(1)] = (25));

} else {
var statearr_37278_37322 = state_37246__$1;
(statearr_37278_37322[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (35))){
var state_37246__$1 = state_37246;
var statearr_37279_37323 = state_37246__$1;
(statearr_37279_37323[(2)] = null);

(statearr_37279_37323[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (19))){
var inst_37199 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37199)){
var statearr_37280_37324 = state_37246__$1;
(statearr_37280_37324[(1)] = (22));

} else {
var statearr_37281_37325 = state_37246__$1;
(statearr_37281_37325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (11))){
var inst_37170 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37282_37326 = state_37246__$1;
(statearr_37282_37326[(2)] = inst_37170);

(statearr_37282_37326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (9))){
var inst_37172 = figwheel.client.heads_up.clear.call(null);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(12),inst_37172);
} else {
if((state_val_37247 === (5))){
var inst_37163 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37246__$1 = state_37246;
var statearr_37283_37327 = state_37246__$1;
(statearr_37283_37327[(2)] = inst_37163);

(statearr_37283_37327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (14))){
var inst_37190 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37190)){
var statearr_37284_37328 = state_37246__$1;
(statearr_37284_37328[(1)] = (18));

} else {
var statearr_37285_37329 = state_37246__$1;
(statearr_37285_37329[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (26))){
var inst_37216 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37246__$1 = state_37246;
if(cljs.core.truth_(inst_37216)){
var statearr_37286_37330 = state_37246__$1;
(statearr_37286_37330[(1)] = (30));

} else {
var statearr_37287_37331 = state_37246__$1;
(statearr_37287_37331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (16))){
var inst_37182 = (state_37246[(2)]);
var inst_37183 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37184 = figwheel.client.heads_up.display_exception.call(null,inst_37183);
var state_37246__$1 = (function (){var statearr_37288 = state_37246;
(statearr_37288[(13)] = inst_37182);

return statearr_37288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(17),inst_37184);
} else {
if((state_val_37247 === (30))){
var inst_37218 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37219 = figwheel.client.heads_up.display_warning.call(null,inst_37218);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(33),inst_37219);
} else {
if((state_val_37247 === (10))){
var inst_37176 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37289_37332 = state_37246__$1;
(statearr_37289_37332[(2)] = inst_37176);

(statearr_37289_37332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (18))){
var inst_37192 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37193 = figwheel.client.heads_up.display_exception.call(null,inst_37192);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(21),inst_37193);
} else {
if((state_val_37247 === (37))){
var inst_37229 = (state_37246[(2)]);
var state_37246__$1 = state_37246;
var statearr_37290_37333 = state_37246__$1;
(statearr_37290_37333[(2)] = inst_37229);

(statearr_37290_37333[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37247 === (8))){
var inst_37168 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37246__$1 = state_37246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37246__$1,(11),inst_37168);
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
});})(c__29486__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29372__auto__,c__29486__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto____0 = (function (){
var statearr_37294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37294[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto__);

(statearr_37294[(1)] = (1));

return statearr_37294;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto____1 = (function (state_37246){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_37246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e37295){if((e37295 instanceof Object)){
var ex__29376__auto__ = e37295;
var statearr_37296_37334 = state_37246;
(statearr_37296_37334[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37335 = state_37246;
state_37246 = G__37335;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto__ = function(state_37246){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto____1.call(this,state_37246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__,msg_hist,msg_names,msg))
})();
var state__29488__auto__ = (function (){var statearr_37297 = f__29487__auto__.call(null);
(statearr_37297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_37297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__,msg_hist,msg_names,msg))
);

return c__29486__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29486__auto___37398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___37398,ch){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___37398,ch){
return (function (state_37381){
var state_val_37382 = (state_37381[(1)]);
if((state_val_37382 === (1))){
var state_37381__$1 = state_37381;
var statearr_37383_37399 = state_37381__$1;
(statearr_37383_37399[(2)] = null);

(statearr_37383_37399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (2))){
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37381__$1,(4),ch);
} else {
if((state_val_37382 === (3))){
var inst_37379 = (state_37381[(2)]);
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37381__$1,inst_37379);
} else {
if((state_val_37382 === (4))){
var inst_37369 = (state_37381[(7)]);
var inst_37369__$1 = (state_37381[(2)]);
var state_37381__$1 = (function (){var statearr_37384 = state_37381;
(statearr_37384[(7)] = inst_37369__$1);

return statearr_37384;
})();
if(cljs.core.truth_(inst_37369__$1)){
var statearr_37385_37400 = state_37381__$1;
(statearr_37385_37400[(1)] = (5));

} else {
var statearr_37386_37401 = state_37381__$1;
(statearr_37386_37401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (5))){
var inst_37369 = (state_37381[(7)]);
var inst_37371 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37369);
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37381__$1,(8),inst_37371);
} else {
if((state_val_37382 === (6))){
var state_37381__$1 = state_37381;
var statearr_37387_37402 = state_37381__$1;
(statearr_37387_37402[(2)] = null);

(statearr_37387_37402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (7))){
var inst_37377 = (state_37381[(2)]);
var state_37381__$1 = state_37381;
var statearr_37388_37403 = state_37381__$1;
(statearr_37388_37403[(2)] = inst_37377);

(statearr_37388_37403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (8))){
var inst_37373 = (state_37381[(2)]);
var state_37381__$1 = (function (){var statearr_37389 = state_37381;
(statearr_37389[(8)] = inst_37373);

return statearr_37389;
})();
var statearr_37390_37404 = state_37381__$1;
(statearr_37390_37404[(2)] = null);

(statearr_37390_37404[(1)] = (2));


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
});})(c__29486__auto___37398,ch))
;
return ((function (switch__29372__auto__,c__29486__auto___37398,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29373__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29373__auto____0 = (function (){
var statearr_37394 = [null,null,null,null,null,null,null,null,null];
(statearr_37394[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29373__auto__);

(statearr_37394[(1)] = (1));

return statearr_37394;
});
var figwheel$client$heads_up_plugin_$_state_machine__29373__auto____1 = (function (state_37381){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_37381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e37395){if((e37395 instanceof Object)){
var ex__29376__auto__ = e37395;
var statearr_37396_37405 = state_37381;
(statearr_37396_37405[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37406 = state_37381;
state_37381 = G__37406;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29373__auto__ = function(state_37381){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29373__auto____1.call(this,state_37381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29373__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29373__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___37398,ch))
})();
var state__29488__auto__ = (function (){var statearr_37397 = f__29487__auto__.call(null);
(statearr_37397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___37398);

return statearr_37397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___37398,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__){
return (function (state_37427){
var state_val_37428 = (state_37427[(1)]);
if((state_val_37428 === (1))){
var inst_37422 = cljs.core.async.timeout.call(null,(3000));
var state_37427__$1 = state_37427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37427__$1,(2),inst_37422);
} else {
if((state_val_37428 === (2))){
var inst_37424 = (state_37427[(2)]);
var inst_37425 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37427__$1 = (function (){var statearr_37429 = state_37427;
(statearr_37429[(7)] = inst_37424);

return statearr_37429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37427__$1,inst_37425);
} else {
return null;
}
}
});})(c__29486__auto__))
;
return ((function (switch__29372__auto__,c__29486__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29373__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29373__auto____0 = (function (){
var statearr_37433 = [null,null,null,null,null,null,null,null];
(statearr_37433[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29373__auto__);

(statearr_37433[(1)] = (1));

return statearr_37433;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29373__auto____1 = (function (state_37427){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_37427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e37434){if((e37434 instanceof Object)){
var ex__29376__auto__ = e37434;
var statearr_37435_37437 = state_37427;
(statearr_37435_37437[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37438 = state_37427;
state_37427 = G__37438;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29373__auto__ = function(state_37427){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29373__auto____1.call(this,state_37427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29373__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29373__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__))
})();
var state__29488__auto__ = (function (){var statearr_37436 = f__29487__auto__.call(null);
(statearr_37436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_37436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__))
);

return c__29486__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__,figwheel_version,temp__6753__auto__){
return (function (state_37461){
var state_val_37462 = (state_37461[(1)]);
if((state_val_37462 === (1))){
var inst_37455 = cljs.core.async.timeout.call(null,(2000));
var state_37461__$1 = state_37461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37461__$1,(2),inst_37455);
} else {
if((state_val_37462 === (2))){
var inst_37457 = (state_37461[(2)]);
var inst_37458 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37459 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37458);
var state_37461__$1 = (function (){var statearr_37463 = state_37461;
(statearr_37463[(7)] = inst_37457);

return statearr_37463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37461__$1,inst_37459);
} else {
return null;
}
}
});})(c__29486__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__29372__auto__,c__29486__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto____0 = (function (){
var statearr_37467 = [null,null,null,null,null,null,null,null];
(statearr_37467[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto__);

(statearr_37467[(1)] = (1));

return statearr_37467;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto____1 = (function (state_37461){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_37461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e37468){if((e37468 instanceof Object)){
var ex__29376__auto__ = e37468;
var statearr_37469_37471 = state_37461;
(statearr_37469_37471[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37472 = state_37461;
state_37461 = G__37472;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto__ = function(state_37461){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto____1.call(this,state_37461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__,figwheel_version,temp__6753__auto__))
})();
var state__29488__auto__ = (function (){var statearr_37470 = f__29487__auto__.call(null);
(statearr_37470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_37470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__,figwheel_version,temp__6753__auto__))
);

return c__29486__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37473){
var map__37477 = p__37473;
var map__37477__$1 = ((((!((map__37477 == null)))?((((map__37477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37477):map__37477);
var file = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37479 = "";
var G__37479__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37479),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37479);
var G__37479__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37479__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37479__$1);
if(cljs.core.truth_((function (){var and__26793__auto__ = line;
if(cljs.core.truth_(and__26793__auto__)){
return column;
} else {
return and__26793__auto__;
}
})())){
return [cljs.core.str(G__37479__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37479__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37480){
var map__37487 = p__37480;
var map__37487__$1 = ((((!((map__37487 == null)))?((((map__37487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37487):map__37487);
var ed = map__37487__$1;
var formatted_exception = cljs.core.get.call(null,map__37487__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37487__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37487__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37489_37493 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37490_37494 = null;
var count__37491_37495 = (0);
var i__37492_37496 = (0);
while(true){
if((i__37492_37496 < count__37491_37495)){
var msg_37497 = cljs.core._nth.call(null,chunk__37490_37494,i__37492_37496);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37497);

var G__37498 = seq__37489_37493;
var G__37499 = chunk__37490_37494;
var G__37500 = count__37491_37495;
var G__37501 = (i__37492_37496 + (1));
seq__37489_37493 = G__37498;
chunk__37490_37494 = G__37499;
count__37491_37495 = G__37500;
i__37492_37496 = G__37501;
continue;
} else {
var temp__6753__auto___37502 = cljs.core.seq.call(null,seq__37489_37493);
if(temp__6753__auto___37502){
var seq__37489_37503__$1 = temp__6753__auto___37502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37489_37503__$1)){
var c__27711__auto___37504 = cljs.core.chunk_first.call(null,seq__37489_37503__$1);
var G__37505 = cljs.core.chunk_rest.call(null,seq__37489_37503__$1);
var G__37506 = c__27711__auto___37504;
var G__37507 = cljs.core.count.call(null,c__27711__auto___37504);
var G__37508 = (0);
seq__37489_37493 = G__37505;
chunk__37490_37494 = G__37506;
count__37491_37495 = G__37507;
i__37492_37496 = G__37508;
continue;
} else {
var msg_37509 = cljs.core.first.call(null,seq__37489_37503__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37509);

var G__37510 = cljs.core.next.call(null,seq__37489_37503__$1);
var G__37511 = null;
var G__37512 = (0);
var G__37513 = (0);
seq__37489_37493 = G__37510;
chunk__37490_37494 = G__37511;
count__37491_37495 = G__37512;
i__37492_37496 = G__37513;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37514){
var map__37517 = p__37514;
var map__37517__$1 = ((((!((map__37517 == null)))?((((map__37517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37517):map__37517);
var w = map__37517__$1;
var message = cljs.core.get.call(null,map__37517__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37529 = cljs.core.seq.call(null,plugins);
var chunk__37530 = null;
var count__37531 = (0);
var i__37532 = (0);
while(true){
if((i__37532 < count__37531)){
var vec__37533 = cljs.core._nth.call(null,chunk__37530,i__37532);
var k = cljs.core.nth.call(null,vec__37533,(0),null);
var plugin = cljs.core.nth.call(null,vec__37533,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37539 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37529,chunk__37530,count__37531,i__37532,pl_37539,vec__37533,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37539.call(null,msg_hist);
});})(seq__37529,chunk__37530,count__37531,i__37532,pl_37539,vec__37533,k,plugin))
);
} else {
}

var G__37540 = seq__37529;
var G__37541 = chunk__37530;
var G__37542 = count__37531;
var G__37543 = (i__37532 + (1));
seq__37529 = G__37540;
chunk__37530 = G__37541;
count__37531 = G__37542;
i__37532 = G__37543;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__37529);
if(temp__6753__auto__){
var seq__37529__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37529__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__37529__$1);
var G__37544 = cljs.core.chunk_rest.call(null,seq__37529__$1);
var G__37545 = c__27711__auto__;
var G__37546 = cljs.core.count.call(null,c__27711__auto__);
var G__37547 = (0);
seq__37529 = G__37544;
chunk__37530 = G__37545;
count__37531 = G__37546;
i__37532 = G__37547;
continue;
} else {
var vec__37536 = cljs.core.first.call(null,seq__37529__$1);
var k = cljs.core.nth.call(null,vec__37536,(0),null);
var plugin = cljs.core.nth.call(null,vec__37536,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37548 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37529,chunk__37530,count__37531,i__37532,pl_37548,vec__37536,k,plugin,seq__37529__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37548.call(null,msg_hist);
});})(seq__37529,chunk__37530,count__37531,i__37532,pl_37548,vec__37536,k,plugin,seq__37529__$1,temp__6753__auto__))
);
} else {
}

var G__37549 = cljs.core.next.call(null,seq__37529__$1);
var G__37550 = null;
var G__37551 = (0);
var G__37552 = (0);
seq__37529 = G__37549;
chunk__37530 = G__37550;
count__37531 = G__37551;
i__37532 = G__37552;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37553 = [];
var len__28021__auto___37560 = arguments.length;
var i__28022__auto___37561 = (0);
while(true){
if((i__28022__auto___37561 < len__28021__auto___37560)){
args37553.push((arguments[i__28022__auto___37561]));

var G__37562 = (i__28022__auto___37561 + (1));
i__28022__auto___37561 = G__37562;
continue;
} else {
}
break;
}

var G__37555 = args37553.length;
switch (G__37555) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37553.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37556_37564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37557_37565 = null;
var count__37558_37566 = (0);
var i__37559_37567 = (0);
while(true){
if((i__37559_37567 < count__37558_37566)){
var msg_37568 = cljs.core._nth.call(null,chunk__37557_37565,i__37559_37567);
figwheel.client.socket.handle_incoming_message.call(null,msg_37568);

var G__37569 = seq__37556_37564;
var G__37570 = chunk__37557_37565;
var G__37571 = count__37558_37566;
var G__37572 = (i__37559_37567 + (1));
seq__37556_37564 = G__37569;
chunk__37557_37565 = G__37570;
count__37558_37566 = G__37571;
i__37559_37567 = G__37572;
continue;
} else {
var temp__6753__auto___37573 = cljs.core.seq.call(null,seq__37556_37564);
if(temp__6753__auto___37573){
var seq__37556_37574__$1 = temp__6753__auto___37573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37556_37574__$1)){
var c__27711__auto___37575 = cljs.core.chunk_first.call(null,seq__37556_37574__$1);
var G__37576 = cljs.core.chunk_rest.call(null,seq__37556_37574__$1);
var G__37577 = c__27711__auto___37575;
var G__37578 = cljs.core.count.call(null,c__27711__auto___37575);
var G__37579 = (0);
seq__37556_37564 = G__37576;
chunk__37557_37565 = G__37577;
count__37558_37566 = G__37578;
i__37559_37567 = G__37579;
continue;
} else {
var msg_37580 = cljs.core.first.call(null,seq__37556_37574__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37580);

var G__37581 = cljs.core.next.call(null,seq__37556_37574__$1);
var G__37582 = null;
var G__37583 = (0);
var G__37584 = (0);
seq__37556_37564 = G__37581;
chunk__37557_37565 = G__37582;
count__37558_37566 = G__37583;
i__37559_37567 = G__37584;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28028__auto__ = [];
var len__28021__auto___37589 = arguments.length;
var i__28022__auto___37590 = (0);
while(true){
if((i__28022__auto___37590 < len__28021__auto___37589)){
args__28028__auto__.push((arguments[i__28022__auto___37590]));

var G__37591 = (i__28022__auto___37590 + (1));
i__28022__auto___37590 = G__37591;
continue;
} else {
}
break;
}

var argseq__28029__auto__ = ((((0) < args__28028__auto__.length))?(new cljs.core.IndexedSeq(args__28028__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28029__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37586){
var map__37587 = p__37586;
var map__37587__$1 = ((((!((map__37587 == null)))?((((map__37587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37587):map__37587);
var opts = map__37587__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37585){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37585));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37593){if((e37593 instanceof Error)){
var e = e37593;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37593;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37597){
var map__37598 = p__37597;
var map__37598__$1 = ((((!((map__37598 == null)))?((((map__37598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37598):map__37598);
var msg_name = cljs.core.get.call(null,map__37598__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1481250429819