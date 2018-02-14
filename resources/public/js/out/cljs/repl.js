// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
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
var seq__33057_33069 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33058_33070 = null;
var count__33059_33071 = (0);
var i__33060_33072 = (0);
while(true){
if((i__33060_33072 < count__33059_33071)){
var f_33073 = cljs.core._nth.call(null,chunk__33058_33070,i__33060_33072);
cljs.core.println.call(null,"  ",f_33073);

var G__33074 = seq__33057_33069;
var G__33075 = chunk__33058_33070;
var G__33076 = count__33059_33071;
var G__33077 = (i__33060_33072 + (1));
seq__33057_33069 = G__33074;
chunk__33058_33070 = G__33075;
count__33059_33071 = G__33076;
i__33060_33072 = G__33077;
continue;
} else {
var temp__4423__auto___33078 = cljs.core.seq.call(null,seq__33057_33069);
if(temp__4423__auto___33078){
var seq__33057_33079__$1 = temp__4423__auto___33078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33057_33079__$1)){
var c__25361__auto___33080 = cljs.core.chunk_first.call(null,seq__33057_33079__$1);
var G__33081 = cljs.core.chunk_rest.call(null,seq__33057_33079__$1);
var G__33082 = c__25361__auto___33080;
var G__33083 = cljs.core.count.call(null,c__25361__auto___33080);
var G__33084 = (0);
seq__33057_33069 = G__33081;
chunk__33058_33070 = G__33082;
count__33059_33071 = G__33083;
i__33060_33072 = G__33084;
continue;
} else {
var f_33085 = cljs.core.first.call(null,seq__33057_33079__$1);
cljs.core.println.call(null,"  ",f_33085);

var G__33086 = cljs.core.next.call(null,seq__33057_33079__$1);
var G__33087 = null;
var G__33088 = (0);
var G__33089 = (0);
seq__33057_33069 = G__33086;
chunk__33058_33070 = G__33087;
count__33059_33071 = G__33088;
i__33060_33072 = G__33089;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33090 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24575__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33090);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33090)))?cljs.core.second.call(null,arglists_33090):arglists_33090));
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
var seq__33061 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33062 = null;
var count__33063 = (0);
var i__33064 = (0);
while(true){
if((i__33064 < count__33063)){
var vec__33065 = cljs.core._nth.call(null,chunk__33062,i__33064);
var name = cljs.core.nth.call(null,vec__33065,(0),null);
var map__33066 = cljs.core.nth.call(null,vec__33065,(1),null);
var map__33066__$1 = ((cljs.core.seq_QMARK_.call(null,map__33066))?cljs.core.apply.call(null,cljs.core.hash_map,map__33066):map__33066);
var doc = cljs.core.get.call(null,map__33066__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33066__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33091 = seq__33061;
var G__33092 = chunk__33062;
var G__33093 = count__33063;
var G__33094 = (i__33064 + (1));
seq__33061 = G__33091;
chunk__33062 = G__33092;
count__33063 = G__33093;
i__33064 = G__33094;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__33061);
if(temp__4423__auto__){
var seq__33061__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33061__$1)){
var c__25361__auto__ = cljs.core.chunk_first.call(null,seq__33061__$1);
var G__33095 = cljs.core.chunk_rest.call(null,seq__33061__$1);
var G__33096 = c__25361__auto__;
var G__33097 = cljs.core.count.call(null,c__25361__auto__);
var G__33098 = (0);
seq__33061 = G__33095;
chunk__33062 = G__33096;
count__33063 = G__33097;
i__33064 = G__33098;
continue;
} else {
var vec__33067 = cljs.core.first.call(null,seq__33061__$1);
var name = cljs.core.nth.call(null,vec__33067,(0),null);
var map__33068 = cljs.core.nth.call(null,vec__33067,(1),null);
var map__33068__$1 = ((cljs.core.seq_QMARK_.call(null,map__33068))?cljs.core.apply.call(null,cljs.core.hash_map,map__33068):map__33068);
var doc = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33099 = cljs.core.next.call(null,seq__33061__$1);
var G__33100 = null;
var G__33101 = (0);
var G__33102 = (0);
seq__33061 = G__33099;
chunk__33062 = G__33100;
count__33063 = G__33101;
i__33064 = G__33102;
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
}
});

//# sourceMappingURL=repl.js.map