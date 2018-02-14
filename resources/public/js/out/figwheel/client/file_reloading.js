// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__33123_SHARP_,p2__33124_SHARP_){
var and__24563__auto__ = p1__33123_SHARP_;
if(cljs.core.truth_(and__24563__auto__)){
return p2__33124_SHARP_;
} else {
return and__24563__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24575__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24575__auto__){
return or__24575__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__24575__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__24575__auto__){
return or__24575__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__24575__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__25471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25475__auto__,method_table__25471__auto__,prefer_table__25472__auto__,method_cache__25473__auto__,cached_hierarchy__25474__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33125){
var map__33126 = p__33125;
var map__33126__$1 = ((cljs.core.seq_QMARK_.call(null,map__33126))?cljs.core.apply.call(null,cljs.core.hash_map,map__33126):map__33126);
var file = cljs.core.get.call(null,map__33126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__33127){
var map__33128 = p__33127;
var map__33128__$1 = ((cljs.core.seq_QMARK_.call(null,map__33128))?cljs.core.apply.call(null,cljs.core.hash_map,map__33128):map__33128);
var namespace = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__25471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25475__auto__,method_table__25471__auto__,prefer_table__25472__auto__,method_cache__25473__auto__,cached_hierarchy__25474__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e33129){if((e33129 instanceof Error)){
var e = e33129;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33129;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__33131 = arguments.length;
switch (G__33131) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33133,callback){
var map__33135 = p__33133;
var map__33135__$1 = ((cljs.core.seq_QMARK_.call(null,map__33135))?cljs.core.apply.call(null,cljs.core.hash_map,map__33135):map__33135);
var file_msg = map__33135__$1;
var request_url = cljs.core.get.call(null,map__33135__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33135,map__33135__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33135,map__33135__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33136){
var map__33138 = p__33136;
var map__33138__$1 = ((cljs.core.seq_QMARK_.call(null,map__33138))?cljs.core.apply.call(null,cljs.core.hash_map,map__33138):map__33138);
var file_msg = map__33138__$1;
var namespace = cljs.core.get.call(null,map__33138__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__33138__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__24575__auto__ = meta_data;
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__24563__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__24563__auto__){
var or__24575__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__24575__auto____$1)){
return or__24575__auto____$1;
} else {
var and__24563__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__24563__auto____$1){
var or__24575__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__24575__auto____$2){
return or__24575__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__24563__auto____$1;
}
}
}
} else {
return and__24563__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33139,callback){
var map__33141 = p__33139;
var map__33141__$1 = ((cljs.core.seq_QMARK_.call(null,map__33141))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);
var file_msg = map__33141__$1;
var request_url = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27964__auto___33228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___33228,out){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___33228,out){
return (function (state_33210){
var state_val_33211 = (state_33210[(1)]);
if((state_val_33211 === (1))){
var inst_33188 = cljs.core.nth.call(null,files,(0),null);
var inst_33189 = cljs.core.nthnext.call(null,files,(1));
var inst_33190 = files;
var state_33210__$1 = (function (){var statearr_33212 = state_33210;
(statearr_33212[(7)] = inst_33189);

(statearr_33212[(8)] = inst_33188);

(statearr_33212[(9)] = inst_33190);

return statearr_33212;
})();
var statearr_33213_33229 = state_33210__$1;
(statearr_33213_33229[(2)] = null);

(statearr_33213_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (2))){
var inst_33193 = (state_33210[(10)]);
var inst_33190 = (state_33210[(9)]);
var inst_33193__$1 = cljs.core.nth.call(null,inst_33190,(0),null);
var inst_33194 = cljs.core.nthnext.call(null,inst_33190,(1));
var inst_33195 = (inst_33193__$1 == null);
var inst_33196 = cljs.core.not.call(null,inst_33195);
var state_33210__$1 = (function (){var statearr_33214 = state_33210;
(statearr_33214[(10)] = inst_33193__$1);

(statearr_33214[(11)] = inst_33194);

return statearr_33214;
})();
if(inst_33196){
var statearr_33215_33230 = state_33210__$1;
(statearr_33215_33230[(1)] = (4));

} else {
var statearr_33216_33231 = state_33210__$1;
(statearr_33216_33231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (3))){
var inst_33208 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33210__$1,inst_33208);
} else {
if((state_val_33211 === (4))){
var inst_33193 = (state_33210[(10)]);
var inst_33198 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33193);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33210__$1,(7),inst_33198);
} else {
if((state_val_33211 === (5))){
var inst_33204 = cljs.core.async.close_BANG_.call(null,out);
var state_33210__$1 = state_33210;
var statearr_33217_33232 = state_33210__$1;
(statearr_33217_33232[(2)] = inst_33204);

(statearr_33217_33232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (6))){
var inst_33206 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33218_33233 = state_33210__$1;
(statearr_33218_33233[(2)] = inst_33206);

(statearr_33218_33233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (7))){
var inst_33194 = (state_33210[(11)]);
var inst_33200 = (state_33210[(2)]);
var inst_33201 = cljs.core.async.put_BANG_.call(null,out,inst_33200);
var inst_33190 = inst_33194;
var state_33210__$1 = (function (){var statearr_33219 = state_33210;
(statearr_33219[(12)] = inst_33201);

(statearr_33219[(9)] = inst_33190);

return statearr_33219;
})();
var statearr_33220_33234 = state_33210__$1;
(statearr_33220_33234[(2)] = null);

(statearr_33220_33234[(1)] = (2));


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
});})(c__27964__auto___33228,out))
;
return ((function (switch__27902__auto__,c__27964__auto___33228,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto____0 = (function (){
var statearr_33224 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33224[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto__);

(statearr_33224[(1)] = (1));

return statearr_33224;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto____1 = (function (state_33210){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_33210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e33225){if((e33225 instanceof Object)){
var ex__27906__auto__ = e33225;
var statearr_33226_33235 = state_33210;
(statearr_33226_33235[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33236 = state_33210;
state_33210 = G__33236;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto__ = function(state_33210){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto____1.call(this,state_33210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___33228,out))
})();
var state__27966__auto__ = (function (){var statearr_33227 = f__27965__auto__.call(null);
(statearr_33227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___33228);

return statearr_33227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___33228,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__33237,p__33238){
var map__33241 = p__33237;
var map__33241__$1 = ((cljs.core.seq_QMARK_.call(null,map__33241))?cljs.core.apply.call(null,cljs.core.hash_map,map__33241):map__33241);
var opts = map__33241__$1;
var url_rewriter = cljs.core.get.call(null,map__33241__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__33242 = p__33238;
var map__33242__$1 = ((cljs.core.seq_QMARK_.call(null,map__33242))?cljs.core.apply.call(null,cljs.core.hash_map,map__33242):map__33242);
var file_msg = map__33242__$1;
var file = cljs.core.get.call(null,map__33242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33243){
var map__33246 = p__33243;
var map__33246__$1 = ((cljs.core.seq_QMARK_.call(null,map__33246))?cljs.core.apply.call(null,cljs.core.hash_map,map__33246):map__33246);
var eval_body__$1 = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24563__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24563__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24563__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e33247){var e = e33247;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33252,p__33253){
var map__33455 = p__33252;
var map__33455__$1 = ((cljs.core.seq_QMARK_.call(null,map__33455))?cljs.core.apply.call(null,cljs.core.hash_map,map__33455):map__33455);
var opts = map__33455__$1;
var before_jsload = cljs.core.get.call(null,map__33455__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33455__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__33455__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__33456 = p__33253;
var map__33456__$1 = ((cljs.core.seq_QMARK_.call(null,map__33456))?cljs.core.apply.call(null,cljs.core.hash_map,map__33456):map__33456);
var msg = map__33456__$1;
var files = cljs.core.get.call(null,map__33456__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (state_33581){
var state_val_33582 = (state_33581[(1)]);
if((state_val_33582 === (7))){
var inst_33468 = (state_33581[(7)]);
var inst_33469 = (state_33581[(8)]);
var inst_33471 = (state_33581[(9)]);
var inst_33470 = (state_33581[(10)]);
var inst_33476 = cljs.core._nth.call(null,inst_33469,inst_33471);
var inst_33477 = figwheel.client.file_reloading.eval_body.call(null,inst_33476);
var inst_33478 = (inst_33471 + (1));
var tmp33583 = inst_33468;
var tmp33584 = inst_33469;
var tmp33585 = inst_33470;
var inst_33468__$1 = tmp33583;
var inst_33469__$1 = tmp33584;
var inst_33470__$1 = tmp33585;
var inst_33471__$1 = inst_33478;
var state_33581__$1 = (function (){var statearr_33586 = state_33581;
(statearr_33586[(7)] = inst_33468__$1);

(statearr_33586[(8)] = inst_33469__$1);

(statearr_33586[(11)] = inst_33477);

(statearr_33586[(9)] = inst_33471__$1);

(statearr_33586[(10)] = inst_33470__$1);

return statearr_33586;
})();
var statearr_33587_33656 = state_33581__$1;
(statearr_33587_33656[(2)] = null);

(statearr_33587_33656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (20))){
var inst_33514 = (state_33581[(12)]);
var inst_33513 = (state_33581[(13)]);
var inst_33518 = (state_33581[(14)]);
var inst_33517 = (state_33581[(15)]);
var inst_33520 = (state_33581[(16)]);
var inst_33523 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33525 = (function (){var all_files = inst_33513;
var files_SINGLEQUOTE_ = inst_33514;
var res_SINGLEQUOTE_ = inst_33517;
var res = inst_33518;
var files_not_loaded = inst_33520;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33514,inst_33513,inst_33518,inst_33517,inst_33520,inst_33523,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (p__33524){
var map__33588 = p__33524;
var map__33588__$1 = ((cljs.core.seq_QMARK_.call(null,map__33588))?cljs.core.apply.call(null,cljs.core.hash_map,map__33588):map__33588);
var namespace = cljs.core.get.call(null,map__33588__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33514,inst_33513,inst_33518,inst_33517,inst_33520,inst_33523,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var inst_33526 = cljs.core.map.call(null,inst_33525,inst_33518);
var inst_33527 = cljs.core.pr_str.call(null,inst_33526);
var inst_33528 = figwheel.client.utils.log.call(null,inst_33527);
var inst_33529 = (function (){var all_files = inst_33513;
var files_SINGLEQUOTE_ = inst_33514;
var res_SINGLEQUOTE_ = inst_33517;
var res = inst_33518;
var files_not_loaded = inst_33520;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33514,inst_33513,inst_33518,inst_33517,inst_33520,inst_33523,inst_33525,inst_33526,inst_33527,inst_33528,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33514,inst_33513,inst_33518,inst_33517,inst_33520,inst_33523,inst_33525,inst_33526,inst_33527,inst_33528,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var inst_33530 = setTimeout(inst_33529,(10));
var state_33581__$1 = (function (){var statearr_33589 = state_33581;
(statearr_33589[(17)] = inst_33523);

(statearr_33589[(18)] = inst_33528);

return statearr_33589;
})();
var statearr_33590_33657 = state_33581__$1;
(statearr_33590_33657[(2)] = inst_33530);

(statearr_33590_33657[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (27))){
var inst_33540 = (state_33581[(19)]);
var state_33581__$1 = state_33581;
var statearr_33591_33658 = state_33581__$1;
(statearr_33591_33658[(2)] = inst_33540);

(statearr_33591_33658[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (1))){
var inst_33460 = (state_33581[(20)]);
var inst_33457 = before_jsload.call(null,files);
var inst_33458 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33459 = (function (){return ((function (inst_33460,inst_33457,inst_33458,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (p1__33248_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33248_SHARP_);
});
;})(inst_33460,inst_33457,inst_33458,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var inst_33460__$1 = cljs.core.filter.call(null,inst_33459,files);
var inst_33461 = cljs.core.not_empty.call(null,inst_33460__$1);
var state_33581__$1 = (function (){var statearr_33592 = state_33581;
(statearr_33592[(20)] = inst_33460__$1);

(statearr_33592[(21)] = inst_33457);

(statearr_33592[(22)] = inst_33458);

return statearr_33592;
})();
if(cljs.core.truth_(inst_33461)){
var statearr_33593_33659 = state_33581__$1;
(statearr_33593_33659[(1)] = (2));

} else {
var statearr_33594_33660 = state_33581__$1;
(statearr_33594_33660[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (24))){
var state_33581__$1 = state_33581;
var statearr_33595_33661 = state_33581__$1;
(statearr_33595_33661[(2)] = null);

(statearr_33595_33661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (4))){
var inst_33505 = (state_33581[(2)]);
var inst_33506 = (function (){return ((function (inst_33505,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (p1__33249_SHARP_){
var and__24563__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33249_SHARP_);
if(cljs.core.truth_(and__24563__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33249_SHARP_));
} else {
return and__24563__auto__;
}
});
;})(inst_33505,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var inst_33507 = cljs.core.filter.call(null,inst_33506,files);
var state_33581__$1 = (function (){var statearr_33596 = state_33581;
(statearr_33596[(23)] = inst_33507);

(statearr_33596[(24)] = inst_33505);

return statearr_33596;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33597_33662 = state_33581__$1;
(statearr_33597_33662[(1)] = (16));

} else {
var statearr_33598_33663 = state_33581__$1;
(statearr_33598_33663[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (15))){
var inst_33495 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33599_33664 = state_33581__$1;
(statearr_33599_33664[(2)] = inst_33495);

(statearr_33599_33664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (21))){
var state_33581__$1 = state_33581;
var statearr_33600_33665 = state_33581__$1;
(statearr_33600_33665[(2)] = null);

(statearr_33600_33665[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (31))){
var inst_33548 = (state_33581[(25)]);
var inst_33558 = (state_33581[(2)]);
var inst_33559 = cljs.core.not_empty.call(null,inst_33548);
var state_33581__$1 = (function (){var statearr_33601 = state_33581;
(statearr_33601[(26)] = inst_33558);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33559)){
var statearr_33602_33666 = state_33581__$1;
(statearr_33602_33666[(1)] = (32));

} else {
var statearr_33603_33667 = state_33581__$1;
(statearr_33603_33667[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (32))){
var inst_33548 = (state_33581[(25)]);
var inst_33561 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33548);
var inst_33562 = cljs.core.pr_str.call(null,inst_33561);
var inst_33563 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33562)].join('');
var inst_33564 = figwheel.client.utils.log.call(null,inst_33563);
var state_33581__$1 = state_33581;
var statearr_33604_33668 = state_33581__$1;
(statearr_33604_33668[(2)] = inst_33564);

(statearr_33604_33668[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (33))){
var state_33581__$1 = state_33581;
var statearr_33605_33669 = state_33581__$1;
(statearr_33605_33669[(2)] = null);

(statearr_33605_33669[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (13))){
var inst_33481 = (state_33581[(27)]);
var inst_33485 = cljs.core.chunk_first.call(null,inst_33481);
var inst_33486 = cljs.core.chunk_rest.call(null,inst_33481);
var inst_33487 = cljs.core.count.call(null,inst_33485);
var inst_33468 = inst_33486;
var inst_33469 = inst_33485;
var inst_33470 = inst_33487;
var inst_33471 = (0);
var state_33581__$1 = (function (){var statearr_33606 = state_33581;
(statearr_33606[(7)] = inst_33468);

(statearr_33606[(8)] = inst_33469);

(statearr_33606[(9)] = inst_33471);

(statearr_33606[(10)] = inst_33470);

return statearr_33606;
})();
var statearr_33607_33670 = state_33581__$1;
(statearr_33607_33670[(2)] = null);

(statearr_33607_33670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (22))){
var inst_33520 = (state_33581[(16)]);
var inst_33533 = (state_33581[(2)]);
var inst_33534 = cljs.core.not_empty.call(null,inst_33520);
var state_33581__$1 = (function (){var statearr_33608 = state_33581;
(statearr_33608[(28)] = inst_33533);

return statearr_33608;
})();
if(cljs.core.truth_(inst_33534)){
var statearr_33609_33671 = state_33581__$1;
(statearr_33609_33671[(1)] = (23));

} else {
var statearr_33610_33672 = state_33581__$1;
(statearr_33610_33672[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (36))){
var state_33581__$1 = state_33581;
var statearr_33611_33673 = state_33581__$1;
(statearr_33611_33673[(2)] = null);

(statearr_33611_33673[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (29))){
var inst_33547 = (state_33581[(29)]);
var inst_33552 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33547);
var inst_33553 = cljs.core.pr_str.call(null,inst_33552);
var inst_33554 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33553)].join('');
var inst_33555 = figwheel.client.utils.log.call(null,inst_33554);
var state_33581__$1 = state_33581;
var statearr_33612_33674 = state_33581__$1;
(statearr_33612_33674[(2)] = inst_33555);

(statearr_33612_33674[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (6))){
var inst_33502 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33613_33675 = state_33581__$1;
(statearr_33613_33675[(2)] = inst_33502);

(statearr_33613_33675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (28))){
var inst_33547 = (state_33581[(29)]);
var inst_33546 = (state_33581[(2)]);
var inst_33547__$1 = cljs.core.get.call(null,inst_33546,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33548 = cljs.core.get.call(null,inst_33546,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33549 = cljs.core.get.call(null,inst_33546,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33550 = cljs.core.not_empty.call(null,inst_33547__$1);
var state_33581__$1 = (function (){var statearr_33614 = state_33581;
(statearr_33614[(25)] = inst_33548);

(statearr_33614[(30)] = inst_33549);

(statearr_33614[(29)] = inst_33547__$1);

return statearr_33614;
})();
if(cljs.core.truth_(inst_33550)){
var statearr_33615_33676 = state_33581__$1;
(statearr_33615_33676[(1)] = (29));

} else {
var statearr_33616_33677 = state_33581__$1;
(statearr_33616_33677[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (25))){
var inst_33579 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33581__$1,inst_33579);
} else {
if((state_val_33582 === (34))){
var inst_33549 = (state_33581[(30)]);
var inst_33567 = (state_33581[(2)]);
var inst_33568 = cljs.core.not_empty.call(null,inst_33549);
var state_33581__$1 = (function (){var statearr_33617 = state_33581;
(statearr_33617[(31)] = inst_33567);

return statearr_33617;
})();
if(cljs.core.truth_(inst_33568)){
var statearr_33618_33678 = state_33581__$1;
(statearr_33618_33678[(1)] = (35));

} else {
var statearr_33619_33679 = state_33581__$1;
(statearr_33619_33679[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (17))){
var inst_33507 = (state_33581[(23)]);
var state_33581__$1 = state_33581;
var statearr_33620_33680 = state_33581__$1;
(statearr_33620_33680[(2)] = inst_33507);

(statearr_33620_33680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (3))){
var state_33581__$1 = state_33581;
var statearr_33621_33681 = state_33581__$1;
(statearr_33621_33681[(2)] = null);

(statearr_33621_33681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (12))){
var inst_33498 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33622_33682 = state_33581__$1;
(statearr_33622_33682[(2)] = inst_33498);

(statearr_33622_33682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (2))){
var inst_33460 = (state_33581[(20)]);
var inst_33467 = cljs.core.seq.call(null,inst_33460);
var inst_33468 = inst_33467;
var inst_33469 = null;
var inst_33470 = (0);
var inst_33471 = (0);
var state_33581__$1 = (function (){var statearr_33623 = state_33581;
(statearr_33623[(7)] = inst_33468);

(statearr_33623[(8)] = inst_33469);

(statearr_33623[(9)] = inst_33471);

(statearr_33623[(10)] = inst_33470);

return statearr_33623;
})();
var statearr_33624_33683 = state_33581__$1;
(statearr_33624_33683[(2)] = null);

(statearr_33624_33683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (23))){
var inst_33514 = (state_33581[(12)]);
var inst_33540 = (state_33581[(19)]);
var inst_33513 = (state_33581[(13)]);
var inst_33518 = (state_33581[(14)]);
var inst_33517 = (state_33581[(15)]);
var inst_33520 = (state_33581[(16)]);
var inst_33536 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33539 = (function (){var all_files = inst_33513;
var files_SINGLEQUOTE_ = inst_33514;
var res_SINGLEQUOTE_ = inst_33517;
var res = inst_33518;
var files_not_loaded = inst_33520;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33514,inst_33540,inst_33513,inst_33518,inst_33517,inst_33520,inst_33536,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (p__33538){
var map__33625 = p__33538;
var map__33625__$1 = ((cljs.core.seq_QMARK_.call(null,map__33625))?cljs.core.apply.call(null,cljs.core.hash_map,map__33625):map__33625);
var meta_data = cljs.core.get.call(null,map__33625__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_33514,inst_33540,inst_33513,inst_33518,inst_33517,inst_33520,inst_33536,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var inst_33540__$1 = cljs.core.group_by.call(null,inst_33539,inst_33520);
var inst_33541 = cljs.core.seq_QMARK_.call(null,inst_33540__$1);
var state_33581__$1 = (function (){var statearr_33626 = state_33581;
(statearr_33626[(19)] = inst_33540__$1);

(statearr_33626[(32)] = inst_33536);

return statearr_33626;
})();
if(inst_33541){
var statearr_33627_33684 = state_33581__$1;
(statearr_33627_33684[(1)] = (26));

} else {
var statearr_33628_33685 = state_33581__$1;
(statearr_33628_33685[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (35))){
var inst_33549 = (state_33581[(30)]);
var inst_33570 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33549);
var inst_33571 = cljs.core.pr_str.call(null,inst_33570);
var inst_33572 = [cljs.core.str("not required: "),cljs.core.str(inst_33571)].join('');
var inst_33573 = figwheel.client.utils.log.call(null,inst_33572);
var state_33581__$1 = state_33581;
var statearr_33629_33686 = state_33581__$1;
(statearr_33629_33686[(2)] = inst_33573);

(statearr_33629_33686[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (19))){
var inst_33514 = (state_33581[(12)]);
var inst_33513 = (state_33581[(13)]);
var inst_33518 = (state_33581[(14)]);
var inst_33517 = (state_33581[(15)]);
var inst_33517__$1 = (state_33581[(2)]);
var inst_33518__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33517__$1);
var inst_33519 = (function (){var all_files = inst_33513;
var files_SINGLEQUOTE_ = inst_33514;
var res_SINGLEQUOTE_ = inst_33517__$1;
var res = inst_33518__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33514,inst_33513,inst_33518,inst_33517,inst_33517__$1,inst_33518__$1,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (p1__33251_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33251_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_33514,inst_33513,inst_33518,inst_33517,inst_33517__$1,inst_33518__$1,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var inst_33520 = cljs.core.filter.call(null,inst_33519,inst_33517__$1);
var inst_33521 = cljs.core.not_empty.call(null,inst_33518__$1);
var state_33581__$1 = (function (){var statearr_33630 = state_33581;
(statearr_33630[(14)] = inst_33518__$1);

(statearr_33630[(15)] = inst_33517__$1);

(statearr_33630[(16)] = inst_33520);

return statearr_33630;
})();
if(cljs.core.truth_(inst_33521)){
var statearr_33631_33687 = state_33581__$1;
(statearr_33631_33687[(1)] = (20));

} else {
var statearr_33632_33688 = state_33581__$1;
(statearr_33632_33688[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (11))){
var state_33581__$1 = state_33581;
var statearr_33633_33689 = state_33581__$1;
(statearr_33633_33689[(2)] = null);

(statearr_33633_33689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (9))){
var inst_33500 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33634_33690 = state_33581__$1;
(statearr_33634_33690[(2)] = inst_33500);

(statearr_33634_33690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (5))){
var inst_33471 = (state_33581[(9)]);
var inst_33470 = (state_33581[(10)]);
var inst_33473 = (inst_33471 < inst_33470);
var inst_33474 = inst_33473;
var state_33581__$1 = state_33581;
if(cljs.core.truth_(inst_33474)){
var statearr_33635_33691 = state_33581__$1;
(statearr_33635_33691[(1)] = (7));

} else {
var statearr_33636_33692 = state_33581__$1;
(statearr_33636_33692[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (14))){
var inst_33481 = (state_33581[(27)]);
var inst_33490 = cljs.core.first.call(null,inst_33481);
var inst_33491 = figwheel.client.file_reloading.eval_body.call(null,inst_33490);
var inst_33492 = cljs.core.next.call(null,inst_33481);
var inst_33468 = inst_33492;
var inst_33469 = null;
var inst_33470 = (0);
var inst_33471 = (0);
var state_33581__$1 = (function (){var statearr_33637 = state_33581;
(statearr_33637[(7)] = inst_33468);

(statearr_33637[(8)] = inst_33469);

(statearr_33637[(9)] = inst_33471);

(statearr_33637[(10)] = inst_33470);

(statearr_33637[(33)] = inst_33491);

return statearr_33637;
})();
var statearr_33638_33693 = state_33581__$1;
(statearr_33638_33693[(2)] = null);

(statearr_33638_33693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (26))){
var inst_33540 = (state_33581[(19)]);
var inst_33543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33540);
var state_33581__$1 = state_33581;
var statearr_33639_33694 = state_33581__$1;
(statearr_33639_33694[(2)] = inst_33543);

(statearr_33639_33694[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (16))){
var inst_33507 = (state_33581[(23)]);
var inst_33509 = (function (){var all_files = inst_33507;
return ((function (all_files,inst_33507,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function (p1__33250_SHARP_){
return cljs.core.update_in.call(null,p1__33250_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_33507,state_val_33582,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var inst_33510 = cljs.core.map.call(null,inst_33509,inst_33507);
var state_33581__$1 = state_33581;
var statearr_33640_33695 = state_33581__$1;
(statearr_33640_33695[(2)] = inst_33510);

(statearr_33640_33695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (30))){
var state_33581__$1 = state_33581;
var statearr_33641_33696 = state_33581__$1;
(statearr_33641_33696[(2)] = null);

(statearr_33641_33696[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (10))){
var inst_33481 = (state_33581[(27)]);
var inst_33483 = cljs.core.chunked_seq_QMARK_.call(null,inst_33481);
var state_33581__$1 = state_33581;
if(inst_33483){
var statearr_33642_33697 = state_33581__$1;
(statearr_33642_33697[(1)] = (13));

} else {
var statearr_33643_33698 = state_33581__$1;
(statearr_33643_33698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (18))){
var inst_33514 = (state_33581[(12)]);
var inst_33513 = (state_33581[(13)]);
var inst_33513__$1 = (state_33581[(2)]);
var inst_33514__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_33513__$1);
var inst_33515 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33514__$1);
var state_33581__$1 = (function (){var statearr_33644 = state_33581;
(statearr_33644[(12)] = inst_33514__$1);

(statearr_33644[(13)] = inst_33513__$1);

return statearr_33644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33581__$1,(19),inst_33515);
} else {
if((state_val_33582 === (37))){
var inst_33576 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33645_33699 = state_33581__$1;
(statearr_33645_33699[(2)] = inst_33576);

(statearr_33645_33699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (8))){
var inst_33468 = (state_33581[(7)]);
var inst_33481 = (state_33581[(27)]);
var inst_33481__$1 = cljs.core.seq.call(null,inst_33468);
var state_33581__$1 = (function (){var statearr_33646 = state_33581;
(statearr_33646[(27)] = inst_33481__$1);

return statearr_33646;
})();
if(inst_33481__$1){
var statearr_33647_33700 = state_33581__$1;
(statearr_33647_33700[(1)] = (10));

} else {
var statearr_33648_33701 = state_33581__$1;
(statearr_33648_33701[(1)] = (11));

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
});})(c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
;
return ((function (switch__27902__auto__,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto____0 = (function (){
var statearr_33652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33652[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto__);

(statearr_33652[(1)] = (1));

return statearr_33652;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto____1 = (function (state_33581){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_33581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e33653){if((e33653 instanceof Object)){
var ex__27906__auto__ = e33653;
var statearr_33654_33702 = state_33581;
(statearr_33654_33702[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33703 = state_33581;
state_33581 = G__33703;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto__ = function(state_33581){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto____1.call(this,state_33581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
})();
var state__27966__auto__ = (function (){var statearr_33655 = f__27965__auto__.call(null);
(statearr_33655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_33655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__,map__33455,map__33455__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__33456,map__33456__$1,msg,files))
);

return c__27964__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33706,link){
var map__33708 = p__33706;
var map__33708__$1 = ((cljs.core.seq_QMARK_.call(null,map__33708))?cljs.core.apply.call(null,cljs.core.hash_map,map__33708):map__33708);
var file = cljs.core.get.call(null,map__33708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__33708,map__33708__$1,file){
return (function (p1__33704_SHARP_,p2__33705_SHARP_){
if(cljs.core._EQ_.call(null,p1__33704_SHARP_,p2__33705_SHARP_)){
return p1__33704_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__33708,map__33708__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33712){
var map__33713 = p__33712;
var map__33713__$1 = ((cljs.core.seq_QMARK_.call(null,map__33713))?cljs.core.apply.call(null,cljs.core.hash_map,map__33713):map__33713);
var match_length = cljs.core.get.call(null,map__33713__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33713__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33709_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33709_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__33715 = arguments.length;
switch (G__33715) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33717){
var map__33719 = p__33717;
var map__33719__$1 = ((cljs.core.seq_QMARK_.call(null,map__33719))?cljs.core.apply.call(null,cljs.core.hash_map,map__33719):map__33719);
var f_data = map__33719__$1;
var file = cljs.core.get.call(null,map__33719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__33719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__24575__auto__ = request_url;
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33720,files_msg){
var map__33742 = p__33720;
var map__33742__$1 = ((cljs.core.seq_QMARK_.call(null,map__33742))?cljs.core.apply.call(null,cljs.core.hash_map,map__33742):map__33742);
var opts = map__33742__$1;
var on_cssload = cljs.core.get.call(null,map__33742__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33743_33763 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33744_33764 = null;
var count__33745_33765 = (0);
var i__33746_33766 = (0);
while(true){
if((i__33746_33766 < count__33745_33765)){
var f_33767 = cljs.core._nth.call(null,chunk__33744_33764,i__33746_33766);
figwheel.client.file_reloading.reload_css_file.call(null,f_33767);

var G__33768 = seq__33743_33763;
var G__33769 = chunk__33744_33764;
var G__33770 = count__33745_33765;
var G__33771 = (i__33746_33766 + (1));
seq__33743_33763 = G__33768;
chunk__33744_33764 = G__33769;
count__33745_33765 = G__33770;
i__33746_33766 = G__33771;
continue;
} else {
var temp__4423__auto___33772 = cljs.core.seq.call(null,seq__33743_33763);
if(temp__4423__auto___33772){
var seq__33743_33773__$1 = temp__4423__auto___33772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33743_33773__$1)){
var c__25361__auto___33774 = cljs.core.chunk_first.call(null,seq__33743_33773__$1);
var G__33775 = cljs.core.chunk_rest.call(null,seq__33743_33773__$1);
var G__33776 = c__25361__auto___33774;
var G__33777 = cljs.core.count.call(null,c__25361__auto___33774);
var G__33778 = (0);
seq__33743_33763 = G__33775;
chunk__33744_33764 = G__33776;
count__33745_33765 = G__33777;
i__33746_33766 = G__33778;
continue;
} else {
var f_33779 = cljs.core.first.call(null,seq__33743_33773__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33779);

var G__33780 = cljs.core.next.call(null,seq__33743_33773__$1);
var G__33781 = null;
var G__33782 = (0);
var G__33783 = (0);
seq__33743_33763 = G__33780;
chunk__33744_33764 = G__33781;
count__33745_33765 = G__33782;
i__33746_33766 = G__33783;
continue;
}
} else {
}
}
break;
}

var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__,map__33742,map__33742__$1,opts,on_cssload){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__,map__33742,map__33742__$1,opts,on_cssload){
return (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (1))){
var inst_33747 = cljs.core.async.timeout.call(null,(100));
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33753__$1,(2),inst_33747);
} else {
if((state_val_33754 === (2))){
var inst_33749 = (state_33753[(2)]);
var inst_33750 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_33751 = on_cssload.call(null,inst_33750);
var state_33753__$1 = (function (){var statearr_33755 = state_33753;
(statearr_33755[(7)] = inst_33749);

return statearr_33755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33753__$1,inst_33751);
} else {
return null;
}
}
});})(c__27964__auto__,map__33742,map__33742__$1,opts,on_cssload))
;
return ((function (switch__27902__auto__,c__27964__auto__,map__33742,map__33742__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto____0 = (function (){
var statearr_33759 = [null,null,null,null,null,null,null,null];
(statearr_33759[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto__);

(statearr_33759[(1)] = (1));

return statearr_33759;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto____1 = (function (state_33753){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_33753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e33760){if((e33760 instanceof Object)){
var ex__27906__auto__ = e33760;
var statearr_33761_33784 = state_33753;
(statearr_33761_33784[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33785 = state_33753;
state_33753 = G__33785;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__,map__33742,map__33742__$1,opts,on_cssload))
})();
var state__27966__auto__ = (function (){var statearr_33762 = f__27965__auto__.call(null);
(statearr_33762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__,map__33742,map__33742__$1,opts,on_cssload))
);

return c__27964__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map