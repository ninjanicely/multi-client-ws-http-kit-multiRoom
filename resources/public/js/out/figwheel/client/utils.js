// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33106_SHARP_,p2__33105_SHARP_){
return [cljs.core.str(p2__33105_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__24563__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__24563__auto__)){
return (window["CustomEvent"]);
} else {
return and__24563__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj33110 = {"detail":data};
return obj33110;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var G__33116 = arguments.length;
switch (G__33116) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__33117 = cljs.core._EQ_;
var expr__33118 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__33117.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__33118))){
return ((function (pred__33117,expr__33118){
return (function (p1__33111_SHARP_){
return console.warn(p1__33111_SHARP_);
});
;})(pred__33117,expr__33118))
} else {
if(cljs.core.truth_(pred__33117.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__33118))){
return ((function (pred__33117,expr__33118){
return (function (p1__33112_SHARP_){
return console.debug(p1__33112_SHARP_);
});
;})(pred__33117,expr__33118))
} else {
if(cljs.core.truth_(pred__33117.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__33118))){
return ((function (pred__33117,expr__33118){
return (function (p1__33113_SHARP_){
return console.error(p1__33113_SHARP_);
});
;})(pred__33117,expr__33118))
} else {
return ((function (pred__33117,expr__33118){
return (function (p1__33114_SHARP_){
return console.log(p1__33114_SHARP_);
});
;})(pred__33117,expr__33118))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map