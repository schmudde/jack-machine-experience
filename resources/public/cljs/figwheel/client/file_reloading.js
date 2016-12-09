// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26805__auto__){
return or__26805__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34263_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34263_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34268 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34269 = null;
var count__34270 = (0);
var i__34271 = (0);
while(true){
if((i__34271 < count__34270)){
var n = cljs.core._nth.call(null,chunk__34269,i__34271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34272 = seq__34268;
var G__34273 = chunk__34269;
var G__34274 = count__34270;
var G__34275 = (i__34271 + (1));
seq__34268 = G__34272;
chunk__34269 = G__34273;
count__34270 = G__34274;
i__34271 = G__34275;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__34268);
if(temp__6753__auto__){
var seq__34268__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34268__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__34268__$1);
var G__34276 = cljs.core.chunk_rest.call(null,seq__34268__$1);
var G__34277 = c__27711__auto__;
var G__34278 = cljs.core.count.call(null,c__27711__auto__);
var G__34279 = (0);
seq__34268 = G__34276;
chunk__34269 = G__34277;
count__34270 = G__34278;
i__34271 = G__34279;
continue;
} else {
var n = cljs.core.first.call(null,seq__34268__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34280 = cljs.core.next.call(null,seq__34268__$1);
var G__34281 = null;
var G__34282 = (0);
var G__34283 = (0);
seq__34268 = G__34280;
chunk__34269 = G__34281;
count__34270 = G__34282;
i__34271 = G__34283;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34334_34345 = cljs.core.seq.call(null,deps);
var chunk__34335_34346 = null;
var count__34336_34347 = (0);
var i__34337_34348 = (0);
while(true){
if((i__34337_34348 < count__34336_34347)){
var dep_34349 = cljs.core._nth.call(null,chunk__34335_34346,i__34337_34348);
topo_sort_helper_STAR_.call(null,dep_34349,(depth + (1)),state);

var G__34350 = seq__34334_34345;
var G__34351 = chunk__34335_34346;
var G__34352 = count__34336_34347;
var G__34353 = (i__34337_34348 + (1));
seq__34334_34345 = G__34350;
chunk__34335_34346 = G__34351;
count__34336_34347 = G__34352;
i__34337_34348 = G__34353;
continue;
} else {
var temp__6753__auto___34354 = cljs.core.seq.call(null,seq__34334_34345);
if(temp__6753__auto___34354){
var seq__34334_34355__$1 = temp__6753__auto___34354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34334_34355__$1)){
var c__27711__auto___34356 = cljs.core.chunk_first.call(null,seq__34334_34355__$1);
var G__34357 = cljs.core.chunk_rest.call(null,seq__34334_34355__$1);
var G__34358 = c__27711__auto___34356;
var G__34359 = cljs.core.count.call(null,c__27711__auto___34356);
var G__34360 = (0);
seq__34334_34345 = G__34357;
chunk__34335_34346 = G__34358;
count__34336_34347 = G__34359;
i__34337_34348 = G__34360;
continue;
} else {
var dep_34361 = cljs.core.first.call(null,seq__34334_34355__$1);
topo_sort_helper_STAR_.call(null,dep_34361,(depth + (1)),state);

var G__34362 = cljs.core.next.call(null,seq__34334_34355__$1);
var G__34363 = null;
var G__34364 = (0);
var G__34365 = (0);
seq__34334_34345 = G__34362;
chunk__34335_34346 = G__34363;
count__34336_34347 = G__34364;
i__34337_34348 = G__34365;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34338){
var vec__34342 = p__34338;
var seq__34343 = cljs.core.seq.call(null,vec__34342);
var first__34344 = cljs.core.first.call(null,seq__34343);
var seq__34343__$1 = cljs.core.next.call(null,seq__34343);
var x = first__34344;
var xs = seq__34343__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34342,seq__34343,first__34344,seq__34343__$1,x,xs,get_deps__$1){
return (function (p1__34284_SHARP_){
return clojure.set.difference.call(null,p1__34284_SHARP_,x);
});})(vec__34342,seq__34343,first__34344,seq__34343__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34378 = cljs.core.seq.call(null,provides);
var chunk__34379 = null;
var count__34380 = (0);
var i__34381 = (0);
while(true){
if((i__34381 < count__34380)){
var prov = cljs.core._nth.call(null,chunk__34379,i__34381);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34382_34390 = cljs.core.seq.call(null,requires);
var chunk__34383_34391 = null;
var count__34384_34392 = (0);
var i__34385_34393 = (0);
while(true){
if((i__34385_34393 < count__34384_34392)){
var req_34394 = cljs.core._nth.call(null,chunk__34383_34391,i__34385_34393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34394,prov);

var G__34395 = seq__34382_34390;
var G__34396 = chunk__34383_34391;
var G__34397 = count__34384_34392;
var G__34398 = (i__34385_34393 + (1));
seq__34382_34390 = G__34395;
chunk__34383_34391 = G__34396;
count__34384_34392 = G__34397;
i__34385_34393 = G__34398;
continue;
} else {
var temp__6753__auto___34399 = cljs.core.seq.call(null,seq__34382_34390);
if(temp__6753__auto___34399){
var seq__34382_34400__$1 = temp__6753__auto___34399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34382_34400__$1)){
var c__27711__auto___34401 = cljs.core.chunk_first.call(null,seq__34382_34400__$1);
var G__34402 = cljs.core.chunk_rest.call(null,seq__34382_34400__$1);
var G__34403 = c__27711__auto___34401;
var G__34404 = cljs.core.count.call(null,c__27711__auto___34401);
var G__34405 = (0);
seq__34382_34390 = G__34402;
chunk__34383_34391 = G__34403;
count__34384_34392 = G__34404;
i__34385_34393 = G__34405;
continue;
} else {
var req_34406 = cljs.core.first.call(null,seq__34382_34400__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34406,prov);

var G__34407 = cljs.core.next.call(null,seq__34382_34400__$1);
var G__34408 = null;
var G__34409 = (0);
var G__34410 = (0);
seq__34382_34390 = G__34407;
chunk__34383_34391 = G__34408;
count__34384_34392 = G__34409;
i__34385_34393 = G__34410;
continue;
}
} else {
}
}
break;
}

var G__34411 = seq__34378;
var G__34412 = chunk__34379;
var G__34413 = count__34380;
var G__34414 = (i__34381 + (1));
seq__34378 = G__34411;
chunk__34379 = G__34412;
count__34380 = G__34413;
i__34381 = G__34414;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__34378);
if(temp__6753__auto__){
var seq__34378__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34378__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__34378__$1);
var G__34415 = cljs.core.chunk_rest.call(null,seq__34378__$1);
var G__34416 = c__27711__auto__;
var G__34417 = cljs.core.count.call(null,c__27711__auto__);
var G__34418 = (0);
seq__34378 = G__34415;
chunk__34379 = G__34416;
count__34380 = G__34417;
i__34381 = G__34418;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34378__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34386_34419 = cljs.core.seq.call(null,requires);
var chunk__34387_34420 = null;
var count__34388_34421 = (0);
var i__34389_34422 = (0);
while(true){
if((i__34389_34422 < count__34388_34421)){
var req_34423 = cljs.core._nth.call(null,chunk__34387_34420,i__34389_34422);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34423,prov);

var G__34424 = seq__34386_34419;
var G__34425 = chunk__34387_34420;
var G__34426 = count__34388_34421;
var G__34427 = (i__34389_34422 + (1));
seq__34386_34419 = G__34424;
chunk__34387_34420 = G__34425;
count__34388_34421 = G__34426;
i__34389_34422 = G__34427;
continue;
} else {
var temp__6753__auto___34428__$1 = cljs.core.seq.call(null,seq__34386_34419);
if(temp__6753__auto___34428__$1){
var seq__34386_34429__$1 = temp__6753__auto___34428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34386_34429__$1)){
var c__27711__auto___34430 = cljs.core.chunk_first.call(null,seq__34386_34429__$1);
var G__34431 = cljs.core.chunk_rest.call(null,seq__34386_34429__$1);
var G__34432 = c__27711__auto___34430;
var G__34433 = cljs.core.count.call(null,c__27711__auto___34430);
var G__34434 = (0);
seq__34386_34419 = G__34431;
chunk__34387_34420 = G__34432;
count__34388_34421 = G__34433;
i__34389_34422 = G__34434;
continue;
} else {
var req_34435 = cljs.core.first.call(null,seq__34386_34429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34435,prov);

var G__34436 = cljs.core.next.call(null,seq__34386_34429__$1);
var G__34437 = null;
var G__34438 = (0);
var G__34439 = (0);
seq__34386_34419 = G__34436;
chunk__34387_34420 = G__34437;
count__34388_34421 = G__34438;
i__34389_34422 = G__34439;
continue;
}
} else {
}
}
break;
}

var G__34440 = cljs.core.next.call(null,seq__34378__$1);
var G__34441 = null;
var G__34442 = (0);
var G__34443 = (0);
seq__34378 = G__34440;
chunk__34379 = G__34441;
count__34380 = G__34442;
i__34381 = G__34443;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34448_34452 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34449_34453 = null;
var count__34450_34454 = (0);
var i__34451_34455 = (0);
while(true){
if((i__34451_34455 < count__34450_34454)){
var ns_34456 = cljs.core._nth.call(null,chunk__34449_34453,i__34451_34455);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34456);

var G__34457 = seq__34448_34452;
var G__34458 = chunk__34449_34453;
var G__34459 = count__34450_34454;
var G__34460 = (i__34451_34455 + (1));
seq__34448_34452 = G__34457;
chunk__34449_34453 = G__34458;
count__34450_34454 = G__34459;
i__34451_34455 = G__34460;
continue;
} else {
var temp__6753__auto___34461 = cljs.core.seq.call(null,seq__34448_34452);
if(temp__6753__auto___34461){
var seq__34448_34462__$1 = temp__6753__auto___34461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34448_34462__$1)){
var c__27711__auto___34463 = cljs.core.chunk_first.call(null,seq__34448_34462__$1);
var G__34464 = cljs.core.chunk_rest.call(null,seq__34448_34462__$1);
var G__34465 = c__27711__auto___34463;
var G__34466 = cljs.core.count.call(null,c__27711__auto___34463);
var G__34467 = (0);
seq__34448_34452 = G__34464;
chunk__34449_34453 = G__34465;
count__34450_34454 = G__34466;
i__34451_34455 = G__34467;
continue;
} else {
var ns_34468 = cljs.core.first.call(null,seq__34448_34462__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34468);

var G__34469 = cljs.core.next.call(null,seq__34448_34462__$1);
var G__34470 = null;
var G__34471 = (0);
var G__34472 = (0);
seq__34448_34452 = G__34469;
chunk__34449_34453 = G__34470;
count__34450_34454 = G__34471;
i__34451_34455 = G__34472;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26805__auto__ = goog.require__;
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34473__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34474__i = 0, G__34474__a = new Array(arguments.length -  0);
while (G__34474__i < G__34474__a.length) {G__34474__a[G__34474__i] = arguments[G__34474__i + 0]; ++G__34474__i;}
  args = new cljs.core.IndexedSeq(G__34474__a,0);
} 
return G__34473__delegate.call(this,args);};
G__34473.cljs$lang$maxFixedArity = 0;
G__34473.cljs$lang$applyTo = (function (arglist__34475){
var args = cljs.core.seq(arglist__34475);
return G__34473__delegate(args);
});
G__34473.cljs$core$IFn$_invoke$arity$variadic = G__34473__delegate;
return G__34473;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34477 = cljs.core._EQ_;
var expr__34478 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34477.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34478))){
var path_parts = ((function (pred__34477,expr__34478){
return (function (p1__34476_SHARP_){
return clojure.string.split.call(null,p1__34476_SHARP_,/[\/\\]/);
});})(pred__34477,expr__34478))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34477,expr__34478){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34480){if((e34480 instanceof Error)){
var e = e34480;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34480;

}
}})());
});
;})(path_parts,sep,root,pred__34477,expr__34478))
} else {
if(cljs.core.truth_(pred__34477.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34478))){
return ((function (pred__34477,expr__34478){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34477,expr__34478){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34477,expr__34478))
);

return deferred.addErrback(((function (deferred,pred__34477,expr__34478){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34477,expr__34478))
);
});
;})(pred__34477,expr__34478))
} else {
return ((function (pred__34477,expr__34478){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34477,expr__34478))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34481,callback){
var map__34484 = p__34481;
var map__34484__$1 = ((((!((map__34484 == null)))?((((map__34484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34484):map__34484);
var file_msg = map__34484__$1;
var request_url = cljs.core.get.call(null,map__34484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34484,map__34484__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34484,map__34484__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__){
return (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (7))){
var inst_34504 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34510_34530 = state_34508__$1;
(statearr_34510_34530[(2)] = inst_34504);

(statearr_34510_34530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (1))){
var state_34508__$1 = state_34508;
var statearr_34511_34531 = state_34508__$1;
(statearr_34511_34531[(2)] = null);

(statearr_34511_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (4))){
var inst_34488 = (state_34508[(7)]);
var inst_34488__$1 = (state_34508[(2)]);
var state_34508__$1 = (function (){var statearr_34512 = state_34508;
(statearr_34512[(7)] = inst_34488__$1);

return statearr_34512;
})();
if(cljs.core.truth_(inst_34488__$1)){
var statearr_34513_34532 = state_34508__$1;
(statearr_34513_34532[(1)] = (5));

} else {
var statearr_34514_34533 = state_34508__$1;
(statearr_34514_34533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (6))){
var state_34508__$1 = state_34508;
var statearr_34515_34534 = state_34508__$1;
(statearr_34515_34534[(2)] = null);

(statearr_34515_34534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (3))){
var inst_34506 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34508__$1,inst_34506);
} else {
if((state_val_34509 === (2))){
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34508__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34509 === (11))){
var inst_34500 = (state_34508[(2)]);
var state_34508__$1 = (function (){var statearr_34516 = state_34508;
(statearr_34516[(8)] = inst_34500);

return statearr_34516;
})();
var statearr_34517_34535 = state_34508__$1;
(statearr_34517_34535[(2)] = null);

(statearr_34517_34535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (9))){
var inst_34494 = (state_34508[(9)]);
var inst_34492 = (state_34508[(10)]);
var inst_34496 = inst_34494.call(null,inst_34492);
var state_34508__$1 = state_34508;
var statearr_34518_34536 = state_34508__$1;
(statearr_34518_34536[(2)] = inst_34496);

(statearr_34518_34536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (5))){
var inst_34488 = (state_34508[(7)]);
var inst_34490 = figwheel.client.file_reloading.blocking_load.call(null,inst_34488);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34508__$1,(8),inst_34490);
} else {
if((state_val_34509 === (10))){
var inst_34492 = (state_34508[(10)]);
var inst_34498 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34492);
var state_34508__$1 = state_34508;
var statearr_34519_34537 = state_34508__$1;
(statearr_34519_34537[(2)] = inst_34498);

(statearr_34519_34537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (8))){
var inst_34494 = (state_34508[(9)]);
var inst_34488 = (state_34508[(7)]);
var inst_34492 = (state_34508[(2)]);
var inst_34493 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34494__$1 = cljs.core.get.call(null,inst_34493,inst_34488);
var state_34508__$1 = (function (){var statearr_34520 = state_34508;
(statearr_34520[(9)] = inst_34494__$1);

(statearr_34520[(10)] = inst_34492);

return statearr_34520;
})();
if(cljs.core.truth_(inst_34494__$1)){
var statearr_34521_34538 = state_34508__$1;
(statearr_34521_34538[(1)] = (9));

} else {
var statearr_34522_34539 = state_34508__$1;
(statearr_34522_34539[(1)] = (10));

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
});})(c__29486__auto__))
;
return ((function (switch__29372__auto__,c__29486__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29373__auto__ = null;
var figwheel$client$file_reloading$state_machine__29373__auto____0 = (function (){
var statearr_34526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34526[(0)] = figwheel$client$file_reloading$state_machine__29373__auto__);

(statearr_34526[(1)] = (1));

return statearr_34526;
});
var figwheel$client$file_reloading$state_machine__29373__auto____1 = (function (state_34508){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_34508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e34527){if((e34527 instanceof Object)){
var ex__29376__auto__ = e34527;
var statearr_34528_34540 = state_34508;
(statearr_34528_34540[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34541 = state_34508;
state_34508 = G__34541;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29373__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29373__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29373__auto____0;
figwheel$client$file_reloading$state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29373__auto____1;
return figwheel$client$file_reloading$state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__))
})();
var state__29488__auto__ = (function (){var statearr_34529 = f__29487__auto__.call(null);
(statearr_34529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__))
);

return c__29486__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34542,callback){
var map__34545 = p__34542;
var map__34545__$1 = ((((!((map__34545 == null)))?((((map__34545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34545):map__34545);
var file_msg = map__34545__$1;
var namespace = cljs.core.get.call(null,map__34545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34545,map__34545__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34545,map__34545__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34547){
var map__34550 = p__34547;
var map__34550__$1 = ((((!((map__34550 == null)))?((((map__34550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34550):map__34550);
var file_msg = map__34550__$1;
var namespace = cljs.core.get.call(null,map__34550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26793__auto__){
var or__26805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
var or__26805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26805__auto____$1)){
return or__26805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34552,callback){
var map__34555 = p__34552;
var map__34555__$1 = ((((!((map__34555 == null)))?((((map__34555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34555):map__34555);
var file_msg = map__34555__$1;
var request_url = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29486__auto___34659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto___34659,out){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto___34659,out){
return (function (state_34641){
var state_val_34642 = (state_34641[(1)]);
if((state_val_34642 === (1))){
var inst_34615 = cljs.core.seq.call(null,files);
var inst_34616 = cljs.core.first.call(null,inst_34615);
var inst_34617 = cljs.core.next.call(null,inst_34615);
var inst_34618 = files;
var state_34641__$1 = (function (){var statearr_34643 = state_34641;
(statearr_34643[(7)] = inst_34616);

(statearr_34643[(8)] = inst_34617);

(statearr_34643[(9)] = inst_34618);

return statearr_34643;
})();
var statearr_34644_34660 = state_34641__$1;
(statearr_34644_34660[(2)] = null);

(statearr_34644_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (2))){
var inst_34624 = (state_34641[(10)]);
var inst_34618 = (state_34641[(9)]);
var inst_34623 = cljs.core.seq.call(null,inst_34618);
var inst_34624__$1 = cljs.core.first.call(null,inst_34623);
var inst_34625 = cljs.core.next.call(null,inst_34623);
var inst_34626 = (inst_34624__$1 == null);
var inst_34627 = cljs.core.not.call(null,inst_34626);
var state_34641__$1 = (function (){var statearr_34645 = state_34641;
(statearr_34645[(10)] = inst_34624__$1);

(statearr_34645[(11)] = inst_34625);

return statearr_34645;
})();
if(inst_34627){
var statearr_34646_34661 = state_34641__$1;
(statearr_34646_34661[(1)] = (4));

} else {
var statearr_34647_34662 = state_34641__$1;
(statearr_34647_34662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (3))){
var inst_34639 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34641__$1,inst_34639);
} else {
if((state_val_34642 === (4))){
var inst_34624 = (state_34641[(10)]);
var inst_34629 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34624);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34641__$1,(7),inst_34629);
} else {
if((state_val_34642 === (5))){
var inst_34635 = cljs.core.async.close_BANG_.call(null,out);
var state_34641__$1 = state_34641;
var statearr_34648_34663 = state_34641__$1;
(statearr_34648_34663[(2)] = inst_34635);

(statearr_34648_34663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (6))){
var inst_34637 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34649_34664 = state_34641__$1;
(statearr_34649_34664[(2)] = inst_34637);

(statearr_34649_34664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (7))){
var inst_34625 = (state_34641[(11)]);
var inst_34631 = (state_34641[(2)]);
var inst_34632 = cljs.core.async.put_BANG_.call(null,out,inst_34631);
var inst_34618 = inst_34625;
var state_34641__$1 = (function (){var statearr_34650 = state_34641;
(statearr_34650[(12)] = inst_34632);

(statearr_34650[(9)] = inst_34618);

return statearr_34650;
})();
var statearr_34651_34665 = state_34641__$1;
(statearr_34651_34665[(2)] = null);

(statearr_34651_34665[(1)] = (2));


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
});})(c__29486__auto___34659,out))
;
return ((function (switch__29372__auto__,c__29486__auto___34659,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto____0 = (function (){
var statearr_34655 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34655[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto__);

(statearr_34655[(1)] = (1));

return statearr_34655;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto____1 = (function (state_34641){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_34641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e34656){if((e34656 instanceof Object)){
var ex__29376__auto__ = e34656;
var statearr_34657_34666 = state_34641;
(statearr_34657_34666[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34667 = state_34641;
state_34641 = G__34667;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto__ = function(state_34641){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto____1.call(this,state_34641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto___34659,out))
})();
var state__29488__auto__ = (function (){var statearr_34658 = f__29487__auto__.call(null);
(statearr_34658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto___34659);

return statearr_34658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto___34659,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34668,opts){
var map__34672 = p__34668;
var map__34672__$1 = ((((!((map__34672 == null)))?((((map__34672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34672):map__34672);
var eval_body = cljs.core.get.call(null,map__34672__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34672__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26793__auto__ = eval_body;
if(cljs.core.truth_(and__26793__auto__)){
return typeof eval_body === 'string';
} else {
return and__26793__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34674){var e = e34674;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34675_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34675_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34684){
var vec__34685 = p__34684;
var k = cljs.core.nth.call(null,vec__34685,(0),null);
var v = cljs.core.nth.call(null,vec__34685,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34688){
var vec__34689 = p__34688;
var k = cljs.core.nth.call(null,vec__34689,(0),null);
var v = cljs.core.nth.call(null,vec__34689,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34695,p__34696){
var map__34944 = p__34695;
var map__34944__$1 = ((((!((map__34944 == null)))?((((map__34944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34944):map__34944);
var opts = map__34944__$1;
var before_jsload = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34945 = p__34696;
var map__34945__$1 = ((((!((map__34945 == null)))?((((map__34945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34945):map__34945);
var msg = map__34945__$1;
var files = cljs.core.get.call(null,map__34945__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34945__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34945__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29486__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29487__auto__ = (function (){var switch__29372__auto__ = ((function (c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35099){
var state_val_35100 = (state_35099[(1)]);
if((state_val_35100 === (7))){
var inst_34962 = (state_35099[(7)]);
var inst_34959 = (state_35099[(8)]);
var inst_34960 = (state_35099[(9)]);
var inst_34961 = (state_35099[(10)]);
var inst_34967 = cljs.core._nth.call(null,inst_34960,inst_34962);
var inst_34968 = figwheel.client.file_reloading.eval_body.call(null,inst_34967,opts);
var inst_34969 = (inst_34962 + (1));
var tmp35101 = inst_34959;
var tmp35102 = inst_34960;
var tmp35103 = inst_34961;
var inst_34959__$1 = tmp35101;
var inst_34960__$1 = tmp35102;
var inst_34961__$1 = tmp35103;
var inst_34962__$1 = inst_34969;
var state_35099__$1 = (function (){var statearr_35104 = state_35099;
(statearr_35104[(7)] = inst_34962__$1);

(statearr_35104[(8)] = inst_34959__$1);

(statearr_35104[(9)] = inst_34960__$1);

(statearr_35104[(11)] = inst_34968);

(statearr_35104[(10)] = inst_34961__$1);

return statearr_35104;
})();
var statearr_35105_35191 = state_35099__$1;
(statearr_35105_35191[(2)] = null);

(statearr_35105_35191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (20))){
var inst_35002 = (state_35099[(12)]);
var inst_35010 = figwheel.client.file_reloading.sort_files.call(null,inst_35002);
var state_35099__$1 = state_35099;
var statearr_35106_35192 = state_35099__$1;
(statearr_35106_35192[(2)] = inst_35010);

(statearr_35106_35192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (27))){
var state_35099__$1 = state_35099;
var statearr_35107_35193 = state_35099__$1;
(statearr_35107_35193[(2)] = null);

(statearr_35107_35193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (1))){
var inst_34951 = (state_35099[(13)]);
var inst_34948 = before_jsload.call(null,files);
var inst_34949 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34950 = (function (){return ((function (inst_34951,inst_34948,inst_34949,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34692_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34692_SHARP_);
});
;})(inst_34951,inst_34948,inst_34949,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34951__$1 = cljs.core.filter.call(null,inst_34950,files);
var inst_34952 = cljs.core.not_empty.call(null,inst_34951__$1);
var state_35099__$1 = (function (){var statearr_35108 = state_35099;
(statearr_35108[(13)] = inst_34951__$1);

(statearr_35108[(14)] = inst_34949);

(statearr_35108[(15)] = inst_34948);

return statearr_35108;
})();
if(cljs.core.truth_(inst_34952)){
var statearr_35109_35194 = state_35099__$1;
(statearr_35109_35194[(1)] = (2));

} else {
var statearr_35110_35195 = state_35099__$1;
(statearr_35110_35195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (24))){
var state_35099__$1 = state_35099;
var statearr_35111_35196 = state_35099__$1;
(statearr_35111_35196[(2)] = null);

(statearr_35111_35196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (39))){
var inst_35052 = (state_35099[(16)]);
var state_35099__$1 = state_35099;
var statearr_35112_35197 = state_35099__$1;
(statearr_35112_35197[(2)] = inst_35052);

(statearr_35112_35197[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (46))){
var inst_35094 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35113_35198 = state_35099__$1;
(statearr_35113_35198[(2)] = inst_35094);

(statearr_35113_35198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (4))){
var inst_34996 = (state_35099[(2)]);
var inst_34997 = cljs.core.List.EMPTY;
var inst_34998 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34997);
var inst_34999 = (function (){return ((function (inst_34996,inst_34997,inst_34998,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34693_SHARP_){
var and__26793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34693_SHARP_);
if(cljs.core.truth_(and__26793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34693_SHARP_));
} else {
return and__26793__auto__;
}
});
;})(inst_34996,inst_34997,inst_34998,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35000 = cljs.core.filter.call(null,inst_34999,files);
var inst_35001 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35002 = cljs.core.concat.call(null,inst_35000,inst_35001);
var state_35099__$1 = (function (){var statearr_35114 = state_35099;
(statearr_35114[(12)] = inst_35002);

(statearr_35114[(17)] = inst_34996);

(statearr_35114[(18)] = inst_34998);

return statearr_35114;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35115_35199 = state_35099__$1;
(statearr_35115_35199[(1)] = (16));

} else {
var statearr_35116_35200 = state_35099__$1;
(statearr_35116_35200[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (15))){
var inst_34986 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35117_35201 = state_35099__$1;
(statearr_35117_35201[(2)] = inst_34986);

(statearr_35117_35201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (21))){
var inst_35012 = (state_35099[(19)]);
var inst_35012__$1 = (state_35099[(2)]);
var inst_35013 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35012__$1);
var state_35099__$1 = (function (){var statearr_35118 = state_35099;
(statearr_35118[(19)] = inst_35012__$1);

return statearr_35118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35099__$1,(22),inst_35013);
} else {
if((state_val_35100 === (31))){
var inst_35097 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35099__$1,inst_35097);
} else {
if((state_val_35100 === (32))){
var inst_35052 = (state_35099[(16)]);
var inst_35057 = inst_35052.cljs$lang$protocol_mask$partition0$;
var inst_35058 = (inst_35057 & (64));
var inst_35059 = inst_35052.cljs$core$ISeq$;
var inst_35060 = (cljs.core.PROTOCOL_SENTINEL === inst_35059);
var inst_35061 = (inst_35058) || (inst_35060);
var state_35099__$1 = state_35099;
if(cljs.core.truth_(inst_35061)){
var statearr_35119_35202 = state_35099__$1;
(statearr_35119_35202[(1)] = (35));

} else {
var statearr_35120_35203 = state_35099__$1;
(statearr_35120_35203[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (40))){
var inst_35074 = (state_35099[(20)]);
var inst_35073 = (state_35099[(2)]);
var inst_35074__$1 = cljs.core.get.call(null,inst_35073,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35075 = cljs.core.get.call(null,inst_35073,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35076 = cljs.core.not_empty.call(null,inst_35074__$1);
var state_35099__$1 = (function (){var statearr_35121 = state_35099;
(statearr_35121[(20)] = inst_35074__$1);

(statearr_35121[(21)] = inst_35075);

return statearr_35121;
})();
if(cljs.core.truth_(inst_35076)){
var statearr_35122_35204 = state_35099__$1;
(statearr_35122_35204[(1)] = (41));

} else {
var statearr_35123_35205 = state_35099__$1;
(statearr_35123_35205[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (33))){
var state_35099__$1 = state_35099;
var statearr_35124_35206 = state_35099__$1;
(statearr_35124_35206[(2)] = false);

(statearr_35124_35206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (13))){
var inst_34972 = (state_35099[(22)]);
var inst_34976 = cljs.core.chunk_first.call(null,inst_34972);
var inst_34977 = cljs.core.chunk_rest.call(null,inst_34972);
var inst_34978 = cljs.core.count.call(null,inst_34976);
var inst_34959 = inst_34977;
var inst_34960 = inst_34976;
var inst_34961 = inst_34978;
var inst_34962 = (0);
var state_35099__$1 = (function (){var statearr_35125 = state_35099;
(statearr_35125[(7)] = inst_34962);

(statearr_35125[(8)] = inst_34959);

(statearr_35125[(9)] = inst_34960);

(statearr_35125[(10)] = inst_34961);

return statearr_35125;
})();
var statearr_35126_35207 = state_35099__$1;
(statearr_35126_35207[(2)] = null);

(statearr_35126_35207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (22))){
var inst_35015 = (state_35099[(23)]);
var inst_35020 = (state_35099[(24)]);
var inst_35016 = (state_35099[(25)]);
var inst_35012 = (state_35099[(19)]);
var inst_35015__$1 = (state_35099[(2)]);
var inst_35016__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35015__$1);
var inst_35017 = (function (){var all_files = inst_35012;
var res_SINGLEQUOTE_ = inst_35015__$1;
var res = inst_35016__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35015,inst_35020,inst_35016,inst_35012,inst_35015__$1,inst_35016__$1,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34694_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34694_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35015,inst_35020,inst_35016,inst_35012,inst_35015__$1,inst_35016__$1,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35018 = cljs.core.filter.call(null,inst_35017,inst_35015__$1);
var inst_35019 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35020__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35019);
var inst_35021 = cljs.core.not_empty.call(null,inst_35020__$1);
var state_35099__$1 = (function (){var statearr_35127 = state_35099;
(statearr_35127[(23)] = inst_35015__$1);

(statearr_35127[(26)] = inst_35018);

(statearr_35127[(24)] = inst_35020__$1);

(statearr_35127[(25)] = inst_35016__$1);

return statearr_35127;
})();
if(cljs.core.truth_(inst_35021)){
var statearr_35128_35208 = state_35099__$1;
(statearr_35128_35208[(1)] = (23));

} else {
var statearr_35129_35209 = state_35099__$1;
(statearr_35129_35209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (36))){
var state_35099__$1 = state_35099;
var statearr_35130_35210 = state_35099__$1;
(statearr_35130_35210[(2)] = false);

(statearr_35130_35210[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (41))){
var inst_35074 = (state_35099[(20)]);
var inst_35078 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35079 = cljs.core.map.call(null,inst_35078,inst_35074);
var inst_35080 = cljs.core.pr_str.call(null,inst_35079);
var inst_35081 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35080)].join('');
var inst_35082 = figwheel.client.utils.log.call(null,inst_35081);
var state_35099__$1 = state_35099;
var statearr_35131_35211 = state_35099__$1;
(statearr_35131_35211[(2)] = inst_35082);

(statearr_35131_35211[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (43))){
var inst_35075 = (state_35099[(21)]);
var inst_35085 = (state_35099[(2)]);
var inst_35086 = cljs.core.not_empty.call(null,inst_35075);
var state_35099__$1 = (function (){var statearr_35132 = state_35099;
(statearr_35132[(27)] = inst_35085);

return statearr_35132;
})();
if(cljs.core.truth_(inst_35086)){
var statearr_35133_35212 = state_35099__$1;
(statearr_35133_35212[(1)] = (44));

} else {
var statearr_35134_35213 = state_35099__$1;
(statearr_35134_35213[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (29))){
var inst_35015 = (state_35099[(23)]);
var inst_35052 = (state_35099[(16)]);
var inst_35018 = (state_35099[(26)]);
var inst_35020 = (state_35099[(24)]);
var inst_35016 = (state_35099[(25)]);
var inst_35012 = (state_35099[(19)]);
var inst_35048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35051 = (function (){var all_files = inst_35012;
var res_SINGLEQUOTE_ = inst_35015;
var res = inst_35016;
var files_not_loaded = inst_35018;
var dependencies_that_loaded = inst_35020;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35052,inst_35018,inst_35020,inst_35016,inst_35012,inst_35048,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35050){
var map__35135 = p__35050;
var map__35135__$1 = ((((!((map__35135 == null)))?((((map__35135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35135):map__35135);
var namespace = cljs.core.get.call(null,map__35135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35052,inst_35018,inst_35020,inst_35016,inst_35012,inst_35048,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35052__$1 = cljs.core.group_by.call(null,inst_35051,inst_35018);
var inst_35054 = (inst_35052__$1 == null);
var inst_35055 = cljs.core.not.call(null,inst_35054);
var state_35099__$1 = (function (){var statearr_35137 = state_35099;
(statearr_35137[(16)] = inst_35052__$1);

(statearr_35137[(28)] = inst_35048);

return statearr_35137;
})();
if(inst_35055){
var statearr_35138_35214 = state_35099__$1;
(statearr_35138_35214[(1)] = (32));

} else {
var statearr_35139_35215 = state_35099__$1;
(statearr_35139_35215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (44))){
var inst_35075 = (state_35099[(21)]);
var inst_35088 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35075);
var inst_35089 = cljs.core.pr_str.call(null,inst_35088);
var inst_35090 = [cljs.core.str("not required: "),cljs.core.str(inst_35089)].join('');
var inst_35091 = figwheel.client.utils.log.call(null,inst_35090);
var state_35099__$1 = state_35099;
var statearr_35140_35216 = state_35099__$1;
(statearr_35140_35216[(2)] = inst_35091);

(statearr_35140_35216[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (6))){
var inst_34993 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35141_35217 = state_35099__$1;
(statearr_35141_35217[(2)] = inst_34993);

(statearr_35141_35217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (28))){
var inst_35018 = (state_35099[(26)]);
var inst_35045 = (state_35099[(2)]);
var inst_35046 = cljs.core.not_empty.call(null,inst_35018);
var state_35099__$1 = (function (){var statearr_35142 = state_35099;
(statearr_35142[(29)] = inst_35045);

return statearr_35142;
})();
if(cljs.core.truth_(inst_35046)){
var statearr_35143_35218 = state_35099__$1;
(statearr_35143_35218[(1)] = (29));

} else {
var statearr_35144_35219 = state_35099__$1;
(statearr_35144_35219[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (25))){
var inst_35016 = (state_35099[(25)]);
var inst_35032 = (state_35099[(2)]);
var inst_35033 = cljs.core.not_empty.call(null,inst_35016);
var state_35099__$1 = (function (){var statearr_35145 = state_35099;
(statearr_35145[(30)] = inst_35032);

return statearr_35145;
})();
if(cljs.core.truth_(inst_35033)){
var statearr_35146_35220 = state_35099__$1;
(statearr_35146_35220[(1)] = (26));

} else {
var statearr_35147_35221 = state_35099__$1;
(statearr_35147_35221[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (34))){
var inst_35068 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
if(cljs.core.truth_(inst_35068)){
var statearr_35148_35222 = state_35099__$1;
(statearr_35148_35222[(1)] = (38));

} else {
var statearr_35149_35223 = state_35099__$1;
(statearr_35149_35223[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (17))){
var state_35099__$1 = state_35099;
var statearr_35150_35224 = state_35099__$1;
(statearr_35150_35224[(2)] = recompile_dependents);

(statearr_35150_35224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (3))){
var state_35099__$1 = state_35099;
var statearr_35151_35225 = state_35099__$1;
(statearr_35151_35225[(2)] = null);

(statearr_35151_35225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (12))){
var inst_34989 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35152_35226 = state_35099__$1;
(statearr_35152_35226[(2)] = inst_34989);

(statearr_35152_35226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (2))){
var inst_34951 = (state_35099[(13)]);
var inst_34958 = cljs.core.seq.call(null,inst_34951);
var inst_34959 = inst_34958;
var inst_34960 = null;
var inst_34961 = (0);
var inst_34962 = (0);
var state_35099__$1 = (function (){var statearr_35153 = state_35099;
(statearr_35153[(7)] = inst_34962);

(statearr_35153[(8)] = inst_34959);

(statearr_35153[(9)] = inst_34960);

(statearr_35153[(10)] = inst_34961);

return statearr_35153;
})();
var statearr_35154_35227 = state_35099__$1;
(statearr_35154_35227[(2)] = null);

(statearr_35154_35227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (23))){
var inst_35015 = (state_35099[(23)]);
var inst_35018 = (state_35099[(26)]);
var inst_35020 = (state_35099[(24)]);
var inst_35016 = (state_35099[(25)]);
var inst_35012 = (state_35099[(19)]);
var inst_35023 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35025 = (function (){var all_files = inst_35012;
var res_SINGLEQUOTE_ = inst_35015;
var res = inst_35016;
var files_not_loaded = inst_35018;
var dependencies_that_loaded = inst_35020;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35018,inst_35020,inst_35016,inst_35012,inst_35023,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35024){
var map__35155 = p__35024;
var map__35155__$1 = ((((!((map__35155 == null)))?((((map__35155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35155):map__35155);
var request_url = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35018,inst_35020,inst_35016,inst_35012,inst_35023,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35026 = cljs.core.reverse.call(null,inst_35020);
var inst_35027 = cljs.core.map.call(null,inst_35025,inst_35026);
var inst_35028 = cljs.core.pr_str.call(null,inst_35027);
var inst_35029 = figwheel.client.utils.log.call(null,inst_35028);
var state_35099__$1 = (function (){var statearr_35157 = state_35099;
(statearr_35157[(31)] = inst_35023);

return statearr_35157;
})();
var statearr_35158_35228 = state_35099__$1;
(statearr_35158_35228[(2)] = inst_35029);

(statearr_35158_35228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (35))){
var state_35099__$1 = state_35099;
var statearr_35159_35229 = state_35099__$1;
(statearr_35159_35229[(2)] = true);

(statearr_35159_35229[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (19))){
var inst_35002 = (state_35099[(12)]);
var inst_35008 = figwheel.client.file_reloading.expand_files.call(null,inst_35002);
var state_35099__$1 = state_35099;
var statearr_35160_35230 = state_35099__$1;
(statearr_35160_35230[(2)] = inst_35008);

(statearr_35160_35230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (11))){
var state_35099__$1 = state_35099;
var statearr_35161_35231 = state_35099__$1;
(statearr_35161_35231[(2)] = null);

(statearr_35161_35231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (9))){
var inst_34991 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35162_35232 = state_35099__$1;
(statearr_35162_35232[(2)] = inst_34991);

(statearr_35162_35232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (5))){
var inst_34962 = (state_35099[(7)]);
var inst_34961 = (state_35099[(10)]);
var inst_34964 = (inst_34962 < inst_34961);
var inst_34965 = inst_34964;
var state_35099__$1 = state_35099;
if(cljs.core.truth_(inst_34965)){
var statearr_35163_35233 = state_35099__$1;
(statearr_35163_35233[(1)] = (7));

} else {
var statearr_35164_35234 = state_35099__$1;
(statearr_35164_35234[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (14))){
var inst_34972 = (state_35099[(22)]);
var inst_34981 = cljs.core.first.call(null,inst_34972);
var inst_34982 = figwheel.client.file_reloading.eval_body.call(null,inst_34981,opts);
var inst_34983 = cljs.core.next.call(null,inst_34972);
var inst_34959 = inst_34983;
var inst_34960 = null;
var inst_34961 = (0);
var inst_34962 = (0);
var state_35099__$1 = (function (){var statearr_35165 = state_35099;
(statearr_35165[(7)] = inst_34962);

(statearr_35165[(8)] = inst_34959);

(statearr_35165[(9)] = inst_34960);

(statearr_35165[(10)] = inst_34961);

(statearr_35165[(32)] = inst_34982);

return statearr_35165;
})();
var statearr_35166_35235 = state_35099__$1;
(statearr_35166_35235[(2)] = null);

(statearr_35166_35235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (45))){
var state_35099__$1 = state_35099;
var statearr_35167_35236 = state_35099__$1;
(statearr_35167_35236[(2)] = null);

(statearr_35167_35236[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (26))){
var inst_35015 = (state_35099[(23)]);
var inst_35018 = (state_35099[(26)]);
var inst_35020 = (state_35099[(24)]);
var inst_35016 = (state_35099[(25)]);
var inst_35012 = (state_35099[(19)]);
var inst_35035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35037 = (function (){var all_files = inst_35012;
var res_SINGLEQUOTE_ = inst_35015;
var res = inst_35016;
var files_not_loaded = inst_35018;
var dependencies_that_loaded = inst_35020;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35018,inst_35020,inst_35016,inst_35012,inst_35035,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35036){
var map__35168 = p__35036;
var map__35168__$1 = ((((!((map__35168 == null)))?((((map__35168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35168):map__35168);
var namespace = cljs.core.get.call(null,map__35168__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35168__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35018,inst_35020,inst_35016,inst_35012,inst_35035,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35038 = cljs.core.map.call(null,inst_35037,inst_35016);
var inst_35039 = cljs.core.pr_str.call(null,inst_35038);
var inst_35040 = figwheel.client.utils.log.call(null,inst_35039);
var inst_35041 = (function (){var all_files = inst_35012;
var res_SINGLEQUOTE_ = inst_35015;
var res = inst_35016;
var files_not_loaded = inst_35018;
var dependencies_that_loaded = inst_35020;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35018,inst_35020,inst_35016,inst_35012,inst_35035,inst_35037,inst_35038,inst_35039,inst_35040,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35015,inst_35018,inst_35020,inst_35016,inst_35012,inst_35035,inst_35037,inst_35038,inst_35039,inst_35040,state_val_35100,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35042 = setTimeout(inst_35041,(10));
var state_35099__$1 = (function (){var statearr_35170 = state_35099;
(statearr_35170[(33)] = inst_35040);

(statearr_35170[(34)] = inst_35035);

return statearr_35170;
})();
var statearr_35171_35237 = state_35099__$1;
(statearr_35171_35237[(2)] = inst_35042);

(statearr_35171_35237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (16))){
var state_35099__$1 = state_35099;
var statearr_35172_35238 = state_35099__$1;
(statearr_35172_35238[(2)] = reload_dependents);

(statearr_35172_35238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (38))){
var inst_35052 = (state_35099[(16)]);
var inst_35070 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35052);
var state_35099__$1 = state_35099;
var statearr_35173_35239 = state_35099__$1;
(statearr_35173_35239[(2)] = inst_35070);

(statearr_35173_35239[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (30))){
var state_35099__$1 = state_35099;
var statearr_35174_35240 = state_35099__$1;
(statearr_35174_35240[(2)] = null);

(statearr_35174_35240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (10))){
var inst_34972 = (state_35099[(22)]);
var inst_34974 = cljs.core.chunked_seq_QMARK_.call(null,inst_34972);
var state_35099__$1 = state_35099;
if(inst_34974){
var statearr_35175_35241 = state_35099__$1;
(statearr_35175_35241[(1)] = (13));

} else {
var statearr_35176_35242 = state_35099__$1;
(statearr_35176_35242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (18))){
var inst_35006 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
if(cljs.core.truth_(inst_35006)){
var statearr_35177_35243 = state_35099__$1;
(statearr_35177_35243[(1)] = (19));

} else {
var statearr_35178_35244 = state_35099__$1;
(statearr_35178_35244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (42))){
var state_35099__$1 = state_35099;
var statearr_35179_35245 = state_35099__$1;
(statearr_35179_35245[(2)] = null);

(statearr_35179_35245[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (37))){
var inst_35065 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35180_35246 = state_35099__$1;
(statearr_35180_35246[(2)] = inst_35065);

(statearr_35180_35246[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (8))){
var inst_34972 = (state_35099[(22)]);
var inst_34959 = (state_35099[(8)]);
var inst_34972__$1 = cljs.core.seq.call(null,inst_34959);
var state_35099__$1 = (function (){var statearr_35181 = state_35099;
(statearr_35181[(22)] = inst_34972__$1);

return statearr_35181;
})();
if(inst_34972__$1){
var statearr_35182_35247 = state_35099__$1;
(statearr_35182_35247[(1)] = (10));

} else {
var statearr_35183_35248 = state_35099__$1;
(statearr_35183_35248[(1)] = (11));

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
}
});})(c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29372__auto__,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto____0 = (function (){
var statearr_35187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35187[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto__);

(statearr_35187[(1)] = (1));

return statearr_35187;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto____1 = (function (state_35099){
while(true){
var ret_value__29374__auto__ = (function (){try{while(true){
var result__29375__auto__ = switch__29372__auto__.call(null,state_35099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29375__auto__;
}
break;
}
}catch (e35188){if((e35188 instanceof Object)){
var ex__29376__auto__ = e35188;
var statearr_35189_35249 = state_35099;
(statearr_35189_35249[(5)] = ex__29376__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35250 = state_35099;
state_35099 = G__35250;
continue;
} else {
return ret_value__29374__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto__ = function(state_35099){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto____1.call(this,state_35099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29373__auto__;
})()
;})(switch__29372__auto__,c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29488__auto__ = (function (){var statearr_35190 = f__29487__auto__.call(null);
(statearr_35190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29486__auto__);

return statearr_35190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29488__auto__);
});})(c__29486__auto__,map__34944,map__34944__$1,opts,before_jsload,on_jsload,reload_dependents,map__34945,map__34945__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29486__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35253,link){
var map__35256 = p__35253;
var map__35256__$1 = ((((!((map__35256 == null)))?((((map__35256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35256):map__35256);
var file = cljs.core.get.call(null,map__35256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__35256,map__35256__$1,file){
return (function (p1__35251_SHARP_,p2__35252_SHARP_){
if(cljs.core._EQ_.call(null,p1__35251_SHARP_,p2__35252_SHARP_)){
return p1__35251_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__35256,map__35256__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35262){
var map__35263 = p__35262;
var map__35263__$1 = ((((!((map__35263 == null)))?((((map__35263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35263):map__35263);
var match_length = cljs.core.get.call(null,map__35263__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35263__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35258_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35258_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35265 = [];
var len__28021__auto___35268 = arguments.length;
var i__28022__auto___35269 = (0);
while(true){
if((i__28022__auto___35269 < len__28021__auto___35268)){
args35265.push((arguments[i__28022__auto___35269]));

var G__35270 = (i__28022__auto___35269 + (1));
i__28022__auto___35269 = G__35270;
continue;
} else {
}
break;
}

var G__35267 = args35265.length;
switch (G__35267) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35265.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35272_SHARP_,p2__35273_SHARP_){
return cljs.core.assoc.call(null,p1__35272_SHARP_,cljs.core.get.call(null,p2__35273_SHARP_,key),p2__35273_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35274){
var map__35277 = p__35274;
var map__35277__$1 = ((((!((map__35277 == null)))?((((map__35277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35277):map__35277);
var f_data = map__35277__$1;
var file = cljs.core.get.call(null,map__35277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6753__auto__)){
var link = temp__6753__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35279,p__35280){
var map__35289 = p__35279;
var map__35289__$1 = ((((!((map__35289 == null)))?((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35289):map__35289);
var opts = map__35289__$1;
var on_cssload = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35290 = p__35280;
var map__35290__$1 = ((((!((map__35290 == null)))?((((map__35290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35290):map__35290);
var files_msg = map__35290__$1;
var files = cljs.core.get.call(null,map__35290__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35293_35297 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__35294_35298 = null;
var count__35295_35299 = (0);
var i__35296_35300 = (0);
while(true){
if((i__35296_35300 < count__35295_35299)){
var f_35301 = cljs.core._nth.call(null,chunk__35294_35298,i__35296_35300);
figwheel.client.file_reloading.reload_css_file.call(null,f_35301);

var G__35302 = seq__35293_35297;
var G__35303 = chunk__35294_35298;
var G__35304 = count__35295_35299;
var G__35305 = (i__35296_35300 + (1));
seq__35293_35297 = G__35302;
chunk__35294_35298 = G__35303;
count__35295_35299 = G__35304;
i__35296_35300 = G__35305;
continue;
} else {
var temp__6753__auto___35306 = cljs.core.seq.call(null,seq__35293_35297);
if(temp__6753__auto___35306){
var seq__35293_35307__$1 = temp__6753__auto___35306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35293_35307__$1)){
var c__27711__auto___35308 = cljs.core.chunk_first.call(null,seq__35293_35307__$1);
var G__35309 = cljs.core.chunk_rest.call(null,seq__35293_35307__$1);
var G__35310 = c__27711__auto___35308;
var G__35311 = cljs.core.count.call(null,c__27711__auto___35308);
var G__35312 = (0);
seq__35293_35297 = G__35309;
chunk__35294_35298 = G__35310;
count__35295_35299 = G__35311;
i__35296_35300 = G__35312;
continue;
} else {
var f_35313 = cljs.core.first.call(null,seq__35293_35307__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35313);

var G__35314 = cljs.core.next.call(null,seq__35293_35307__$1);
var G__35315 = null;
var G__35316 = (0);
var G__35317 = (0);
seq__35293_35297 = G__35314;
chunk__35294_35298 = G__35315;
count__35295_35299 = G__35316;
i__35296_35300 = G__35317;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35289,map__35289__$1,opts,on_cssload,map__35290,map__35290__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__35289,map__35289__$1,opts,on_cssload,map__35290,map__35290__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1481250425646