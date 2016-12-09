// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36636){
var map__36661 = p__36636;
var map__36661__$1 = ((((!((map__36661 == null)))?((((map__36661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36661):map__36661);
var m = map__36661__$1;
var n = cljs.core.get.call(null,map__36661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36663_36685 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36664_36686 = null;
var count__36665_36687 = (0);
var i__36666_36688 = (0);
while(true){
if((i__36666_36688 < count__36665_36687)){
var f_36689 = cljs.core._nth.call(null,chunk__36664_36686,i__36666_36688);
cljs.core.println.call(null,"  ",f_36689);

var G__36690 = seq__36663_36685;
var G__36691 = chunk__36664_36686;
var G__36692 = count__36665_36687;
var G__36693 = (i__36666_36688 + (1));
seq__36663_36685 = G__36690;
chunk__36664_36686 = G__36691;
count__36665_36687 = G__36692;
i__36666_36688 = G__36693;
continue;
} else {
var temp__6753__auto___36694 = cljs.core.seq.call(null,seq__36663_36685);
if(temp__6753__auto___36694){
var seq__36663_36695__$1 = temp__6753__auto___36694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36663_36695__$1)){
var c__27711__auto___36696 = cljs.core.chunk_first.call(null,seq__36663_36695__$1);
var G__36697 = cljs.core.chunk_rest.call(null,seq__36663_36695__$1);
var G__36698 = c__27711__auto___36696;
var G__36699 = cljs.core.count.call(null,c__27711__auto___36696);
var G__36700 = (0);
seq__36663_36685 = G__36697;
chunk__36664_36686 = G__36698;
count__36665_36687 = G__36699;
i__36666_36688 = G__36700;
continue;
} else {
var f_36701 = cljs.core.first.call(null,seq__36663_36695__$1);
cljs.core.println.call(null,"  ",f_36701);

var G__36702 = cljs.core.next.call(null,seq__36663_36695__$1);
var G__36703 = null;
var G__36704 = (0);
var G__36705 = (0);
seq__36663_36685 = G__36702;
chunk__36664_36686 = G__36703;
count__36665_36687 = G__36704;
i__36666_36688 = G__36705;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36706 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26805__auto__)){
return or__26805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36706);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36706)))?cljs.core.second.call(null,arglists_36706):arglists_36706));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36667_36707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36668_36708 = null;
var count__36669_36709 = (0);
var i__36670_36710 = (0);
while(true){
if((i__36670_36710 < count__36669_36709)){
var vec__36671_36711 = cljs.core._nth.call(null,chunk__36668_36708,i__36670_36710);
var name_36712 = cljs.core.nth.call(null,vec__36671_36711,(0),null);
var map__36674_36713 = cljs.core.nth.call(null,vec__36671_36711,(1),null);
var map__36674_36714__$1 = ((((!((map__36674_36713 == null)))?((((map__36674_36713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36674_36713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36674_36713):map__36674_36713);
var doc_36715 = cljs.core.get.call(null,map__36674_36714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36716 = cljs.core.get.call(null,map__36674_36714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36712);

cljs.core.println.call(null," ",arglists_36716);

if(cljs.core.truth_(doc_36715)){
cljs.core.println.call(null," ",doc_36715);
} else {
}

var G__36717 = seq__36667_36707;
var G__36718 = chunk__36668_36708;
var G__36719 = count__36669_36709;
var G__36720 = (i__36670_36710 + (1));
seq__36667_36707 = G__36717;
chunk__36668_36708 = G__36718;
count__36669_36709 = G__36719;
i__36670_36710 = G__36720;
continue;
} else {
var temp__6753__auto___36721 = cljs.core.seq.call(null,seq__36667_36707);
if(temp__6753__auto___36721){
var seq__36667_36722__$1 = temp__6753__auto___36721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36667_36722__$1)){
var c__27711__auto___36723 = cljs.core.chunk_first.call(null,seq__36667_36722__$1);
var G__36724 = cljs.core.chunk_rest.call(null,seq__36667_36722__$1);
var G__36725 = c__27711__auto___36723;
var G__36726 = cljs.core.count.call(null,c__27711__auto___36723);
var G__36727 = (0);
seq__36667_36707 = G__36724;
chunk__36668_36708 = G__36725;
count__36669_36709 = G__36726;
i__36670_36710 = G__36727;
continue;
} else {
var vec__36676_36728 = cljs.core.first.call(null,seq__36667_36722__$1);
var name_36729 = cljs.core.nth.call(null,vec__36676_36728,(0),null);
var map__36679_36730 = cljs.core.nth.call(null,vec__36676_36728,(1),null);
var map__36679_36731__$1 = ((((!((map__36679_36730 == null)))?((((map__36679_36730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36679_36730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36679_36730):map__36679_36730);
var doc_36732 = cljs.core.get.call(null,map__36679_36731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36733 = cljs.core.get.call(null,map__36679_36731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36729);

cljs.core.println.call(null," ",arglists_36733);

if(cljs.core.truth_(doc_36732)){
cljs.core.println.call(null," ",doc_36732);
} else {
}

var G__36734 = cljs.core.next.call(null,seq__36667_36722__$1);
var G__36735 = null;
var G__36736 = (0);
var G__36737 = (0);
seq__36667_36707 = G__36734;
chunk__36668_36708 = G__36735;
count__36669_36709 = G__36736;
i__36670_36710 = G__36737;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__36681 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36682 = null;
var count__36683 = (0);
var i__36684 = (0);
while(true){
if((i__36684 < count__36683)){
var role = cljs.core._nth.call(null,chunk__36682,i__36684);
var temp__6753__auto___36738__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___36738__$1)){
var spec_36739 = temp__6753__auto___36738__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36739));
} else {
}

var G__36740 = seq__36681;
var G__36741 = chunk__36682;
var G__36742 = count__36683;
var G__36743 = (i__36684 + (1));
seq__36681 = G__36740;
chunk__36682 = G__36741;
count__36683 = G__36742;
i__36684 = G__36743;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__36681);
if(temp__6753__auto____$1){
var seq__36681__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36681__$1)){
var c__27711__auto__ = cljs.core.chunk_first.call(null,seq__36681__$1);
var G__36744 = cljs.core.chunk_rest.call(null,seq__36681__$1);
var G__36745 = c__27711__auto__;
var G__36746 = cljs.core.count.call(null,c__27711__auto__);
var G__36747 = (0);
seq__36681 = G__36744;
chunk__36682 = G__36745;
count__36683 = G__36746;
i__36684 = G__36747;
continue;
} else {
var role = cljs.core.first.call(null,seq__36681__$1);
var temp__6753__auto___36748__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___36748__$2)){
var spec_36749 = temp__6753__auto___36748__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36749));
} else {
}

var G__36750 = cljs.core.next.call(null,seq__36681__$1);
var G__36751 = null;
var G__36752 = (0);
var G__36753 = (0);
seq__36681 = G__36750;
chunk__36682 = G__36751;
count__36683 = G__36752;
i__36684 = G__36753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1481250429012