// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32164__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32165__i = 0, G__32165__a = new Array(arguments.length -  0);
while (G__32165__i < G__32165__a.length) {G__32165__a[G__32165__i] = arguments[G__32165__i + 0]; ++G__32165__i;}
  args = new cljs.core.IndexedSeq(G__32165__a,0);
} 
return G__32164__delegate.call(this,args);};
G__32164.cljs$lang$maxFixedArity = 0;
G__32164.cljs$lang$applyTo = (function (arglist__32166){
var args = cljs.core.seq(arglist__32166);
return G__32164__delegate(args);
});
G__32164.cljs$core$IFn$_invoke$arity$variadic = G__32164__delegate;
return G__32164;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32167){
var map__32169 = p__32167;
var map__32169__$1 = ((cljs.core.seq_QMARK_.call(null,map__32169))?cljs.core.apply.call(null,cljs.core.hash_map,map__32169):map__32169);
var message = cljs.core.get.call(null,map__32169__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32169__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24575__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24563__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24563__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24563__auto__;
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
var c__27964__auto___32298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___32298,ch){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___32298,ch){
return (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (7))){
var inst_32268 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32274_32299 = state_32272__$1;
(statearr_32274_32299[(2)] = inst_32268);

(statearr_32274_32299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (1))){
var state_32272__$1 = state_32272;
var statearr_32275_32300 = state_32272__$1;
(statearr_32275_32300[(2)] = null);

(statearr_32275_32300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (4))){
var inst_32236 = (state_32272[(7)]);
var inst_32236__$1 = (state_32272[(2)]);
var state_32272__$1 = (function (){var statearr_32276 = state_32272;
(statearr_32276[(7)] = inst_32236__$1);

return statearr_32276;
})();
if(cljs.core.truth_(inst_32236__$1)){
var statearr_32277_32301 = state_32272__$1;
(statearr_32277_32301[(1)] = (5));

} else {
var statearr_32278_32302 = state_32272__$1;
(statearr_32278_32302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (13))){
var state_32272__$1 = state_32272;
var statearr_32279_32303 = state_32272__$1;
(statearr_32279_32303[(2)] = null);

(statearr_32279_32303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (6))){
var state_32272__$1 = state_32272;
var statearr_32280_32304 = state_32272__$1;
(statearr_32280_32304[(2)] = null);

(statearr_32280_32304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (3))){
var inst_32270 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32272__$1,inst_32270);
} else {
if((state_val_32273 === (12))){
var inst_32243 = (state_32272[(8)]);
var inst_32256 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32243);
var inst_32257 = cljs.core.first.call(null,inst_32256);
var inst_32258 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32257);
var inst_32259 = console.warn("Figwheel: Not loading code with warnings - ",inst_32258);
var state_32272__$1 = state_32272;
var statearr_32281_32305 = state_32272__$1;
(statearr_32281_32305[(2)] = inst_32259);

(statearr_32281_32305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (2))){
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32272__$1,(4),ch);
} else {
if((state_val_32273 === (11))){
var inst_32252 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32282_32306 = state_32272__$1;
(statearr_32282_32306[(2)] = inst_32252);

(statearr_32282_32306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (9))){
var inst_32242 = (state_32272[(9)]);
var inst_32254 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32242,opts);
var state_32272__$1 = state_32272;
if(cljs.core.truth_(inst_32254)){
var statearr_32283_32307 = state_32272__$1;
(statearr_32283_32307[(1)] = (12));

} else {
var statearr_32284_32308 = state_32272__$1;
(statearr_32284_32308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (5))){
var inst_32236 = (state_32272[(7)]);
var inst_32242 = (state_32272[(9)]);
var inst_32238 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32239 = (new cljs.core.PersistentArrayMap(null,2,inst_32238,null));
var inst_32240 = (new cljs.core.PersistentHashSet(null,inst_32239,null));
var inst_32241 = figwheel.client.focus_msgs.call(null,inst_32240,inst_32236);
var inst_32242__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32241);
var inst_32243 = cljs.core.first.call(null,inst_32241);
var inst_32244 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32242__$1,opts);
var state_32272__$1 = (function (){var statearr_32285 = state_32272;
(statearr_32285[(9)] = inst_32242__$1);

(statearr_32285[(8)] = inst_32243);

return statearr_32285;
})();
if(cljs.core.truth_(inst_32244)){
var statearr_32286_32309 = state_32272__$1;
(statearr_32286_32309[(1)] = (8));

} else {
var statearr_32287_32310 = state_32272__$1;
(statearr_32287_32310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (14))){
var inst_32262 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32288_32311 = state_32272__$1;
(statearr_32288_32311[(2)] = inst_32262);

(statearr_32288_32311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (10))){
var inst_32264 = (state_32272[(2)]);
var state_32272__$1 = (function (){var statearr_32289 = state_32272;
(statearr_32289[(10)] = inst_32264);

return statearr_32289;
})();
var statearr_32290_32312 = state_32272__$1;
(statearr_32290_32312[(2)] = null);

(statearr_32290_32312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (8))){
var inst_32243 = (state_32272[(8)]);
var inst_32246 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32247 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32243);
var inst_32248 = cljs.core.async.timeout.call(null,(1000));
var inst_32249 = [inst_32247,inst_32248];
var inst_32250 = (new cljs.core.PersistentVector(null,2,(5),inst_32246,inst_32249,null));
var state_32272__$1 = state_32272;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32272__$1,(11),inst_32250);
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
});})(c__27964__auto___32298,ch))
;
return ((function (switch__27902__auto__,c__27964__auto___32298,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27903__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27903__auto____0 = (function (){
var statearr_32294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32294[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27903__auto__);

(statearr_32294[(1)] = (1));

return statearr_32294;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27903__auto____1 = (function (state_32272){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_32272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e32295){if((e32295 instanceof Object)){
var ex__27906__auto__ = e32295;
var statearr_32296_32313 = state_32272;
(statearr_32296_32313[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32314 = state_32272;
state_32272 = G__32314;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27903__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27903__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27903__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27903__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___32298,ch))
})();
var state__27966__auto__ = (function (){var statearr_32297 = f__27965__auto__.call(null);
(statearr_32297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___32298);

return statearr_32297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___32298,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32315_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32315_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_32322 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32322){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_32320 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32321 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32320,_STAR_print_newline_STAR_32321,base_path_32322){
return (function() { 
var G__32323__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32324__i = 0, G__32324__a = new Array(arguments.length -  0);
while (G__32324__i < G__32324__a.length) {G__32324__a[G__32324__i] = arguments[G__32324__i + 0]; ++G__32324__i;}
  args = new cljs.core.IndexedSeq(G__32324__a,0);
} 
return G__32323__delegate.call(this,args);};
G__32323.cljs$lang$maxFixedArity = 0;
G__32323.cljs$lang$applyTo = (function (arglist__32325){
var args = cljs.core.seq(arglist__32325);
return G__32323__delegate(args);
});
G__32323.cljs$core$IFn$_invoke$arity$variadic = G__32323__delegate;
return G__32323;
})()
;})(_STAR_print_fn_STAR_32320,_STAR_print_newline_STAR_32321,base_path_32322))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32321;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32320;
}}catch (e32319){if((e32319 instanceof Error)){
var e = e32319;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32322], null));
} else {
var e = e32319;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32322))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32326){
var map__32331 = p__32326;
var map__32331__$1 = ((cljs.core.seq_QMARK_.call(null,map__32331))?cljs.core.apply.call(null,cljs.core.hash_map,map__32331):map__32331);
var opts = map__32331__$1;
var build_id = cljs.core.get.call(null,map__32331__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32331,map__32331__$1,opts,build_id){
return (function (p__32332){
var vec__32333 = p__32332;
var map__32334 = cljs.core.nth.call(null,vec__32333,(0),null);
var map__32334__$1 = ((cljs.core.seq_QMARK_.call(null,map__32334))?cljs.core.apply.call(null,cljs.core.hash_map,map__32334):map__32334);
var msg = map__32334__$1;
var msg_name = cljs.core.get.call(null,map__32334__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32333,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__32333,map__32334,map__32334__$1,msg,msg_name,_,map__32331,map__32331__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32333,map__32334,map__32334__$1,msg,msg_name,_,map__32331,map__32331__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32331,map__32331__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32338){
var vec__32339 = p__32338;
var map__32340 = cljs.core.nth.call(null,vec__32339,(0),null);
var map__32340__$1 = ((cljs.core.seq_QMARK_.call(null,map__32340))?cljs.core.apply.call(null,cljs.core.hash_map,map__32340):map__32340);
var msg = map__32340__$1;
var msg_name = cljs.core.get.call(null,map__32340__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32339,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32341){
var map__32349 = p__32341;
var map__32349__$1 = ((cljs.core.seq_QMARK_.call(null,map__32349))?cljs.core.apply.call(null,cljs.core.hash_map,map__32349):map__32349);
var on_compile_warning = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32349__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32349,map__32349__$1,on_compile_warning,on_compile_fail){
return (function (p__32350){
var vec__32351 = p__32350;
var map__32352 = cljs.core.nth.call(null,vec__32351,(0),null);
var map__32352__$1 = ((cljs.core.seq_QMARK_.call(null,map__32352))?cljs.core.apply.call(null,cljs.core.hash_map,map__32352):map__32352);
var msg = map__32352__$1;
var msg_name = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32351,(1));
var pred__32353 = cljs.core._EQ_;
var expr__32354 = msg_name;
if(cljs.core.truth_(pred__32353.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32354))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32353.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32354))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32349,map__32349__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__,msg_hist,msg_names,msg){
return (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32489 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32557_32598 = state_32555__$1;
(statearr_32557_32598[(2)] = inst_32489);

(statearr_32557_32598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (20))){
var inst_32517 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32517)){
var statearr_32558_32599 = state_32555__$1;
(statearr_32558_32599[(1)] = (22));

} else {
var statearr_32559_32600 = state_32555__$1;
(statearr_32559_32600[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (27))){
var inst_32529 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32530 = figwheel.client.heads_up.display_warning.call(null,inst_32529);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(30),inst_32530);
} else {
if((state_val_32556 === (1))){
var inst_32477 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32477)){
var statearr_32560_32601 = state_32555__$1;
(statearr_32560_32601[(1)] = (2));

} else {
var statearr_32561_32602 = state_32555__$1;
(statearr_32561_32602[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (24))){
var inst_32545 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32562_32603 = state_32555__$1;
(statearr_32562_32603[(2)] = inst_32545);

(statearr_32562_32603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (15))){
var inst_32505 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32506 = figwheel.client.format_messages.call(null,inst_32505);
var inst_32507 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32508 = figwheel.client.heads_up.display_error.call(null,inst_32506,inst_32507);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(18),inst_32508);
} else {
if((state_val_32556 === (21))){
var inst_32547 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32563_32604 = state_32555__$1;
(statearr_32563_32604[(2)] = inst_32547);

(statearr_32563_32604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (31))){
var inst_32536 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(34),inst_32536);
} else {
if((state_val_32556 === (32))){
var state_32555__$1 = state_32555;
var statearr_32564_32605 = state_32555__$1;
(statearr_32564_32605[(2)] = null);

(statearr_32564_32605[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (33))){
var inst_32541 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32565_32606 = state_32555__$1;
(statearr_32565_32606[(2)] = inst_32541);

(statearr_32565_32606[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (13))){
var inst_32495 = (state_32555[(2)]);
var inst_32496 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32497 = figwheel.client.format_messages.call(null,inst_32496);
var inst_32498 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32499 = figwheel.client.heads_up.display_error.call(null,inst_32497,inst_32498);
var state_32555__$1 = (function (){var statearr_32566 = state_32555;
(statearr_32566[(7)] = inst_32495);

return statearr_32566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(14),inst_32499);
} else {
if((state_val_32556 === (22))){
var inst_32519 = figwheel.client.heads_up.clear.call(null);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(25),inst_32519);
} else {
if((state_val_32556 === (29))){
var inst_32543 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32567_32607 = state_32555__$1;
(statearr_32567_32607[(2)] = inst_32543);

(statearr_32567_32607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var inst_32485 = figwheel.client.heads_up.clear.call(null);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(9),inst_32485);
} else {
if((state_val_32556 === (28))){
var inst_32534 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32534)){
var statearr_32568_32608 = state_32555__$1;
(statearr_32568_32608[(1)] = (31));

} else {
var statearr_32569_32609 = state_32555__$1;
(statearr_32569_32609[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (25))){
var inst_32521 = (state_32555[(2)]);
var inst_32522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32523 = figwheel.client.heads_up.display_warning.call(null,inst_32522);
var state_32555__$1 = (function (){var statearr_32570 = state_32555;
(statearr_32570[(8)] = inst_32521);

return statearr_32570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(26),inst_32523);
} else {
if((state_val_32556 === (34))){
var inst_32538 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32571_32610 = state_32555__$1;
(statearr_32571_32610[(2)] = inst_32538);

(statearr_32571_32610[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (17))){
var inst_32549 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32572_32611 = state_32555__$1;
(statearr_32572_32611[(2)] = inst_32549);

(statearr_32572_32611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32491 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32491)){
var statearr_32573_32612 = state_32555__$1;
(statearr_32573_32612[(1)] = (10));

} else {
var statearr_32574_32613 = state_32555__$1;
(statearr_32574_32613[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (12))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32575_32614 = state_32555__$1;
(statearr_32575_32614[(2)] = inst_32551);

(statearr_32575_32614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (2))){
var inst_32479 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32479)){
var statearr_32576_32615 = state_32555__$1;
(statearr_32576_32615[(1)] = (5));

} else {
var statearr_32577_32616 = state_32555__$1;
(statearr_32577_32616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (23))){
var inst_32527 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32527)){
var statearr_32578_32617 = state_32555__$1;
(statearr_32578_32617[(1)] = (27));

} else {
var statearr_32579_32618 = state_32555__$1;
(statearr_32579_32618[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (19))){
var inst_32514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32515 = figwheel.client.heads_up.append_message.call(null,inst_32514);
var state_32555__$1 = state_32555;
var statearr_32580_32619 = state_32555__$1;
(statearr_32580_32619[(2)] = inst_32515);

(statearr_32580_32619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (11))){
var inst_32503 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32503)){
var statearr_32581_32620 = state_32555__$1;
(statearr_32581_32620[(1)] = (15));

} else {
var statearr_32582_32621 = state_32555__$1;
(statearr_32582_32621[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var inst_32487 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32583_32622 = state_32555__$1;
(statearr_32583_32622[(2)] = inst_32487);

(statearr_32583_32622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (5))){
var inst_32481 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(8),inst_32481);
} else {
if((state_val_32556 === (14))){
var inst_32501 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32584_32623 = state_32555__$1;
(statearr_32584_32623[(2)] = inst_32501);

(statearr_32584_32623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (26))){
var inst_32525 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32585_32624 = state_32555__$1;
(statearr_32585_32624[(2)] = inst_32525);

(statearr_32585_32624[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (16))){
var inst_32512 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32512)){
var statearr_32586_32625 = state_32555__$1;
(statearr_32586_32625[(1)] = (19));

} else {
var statearr_32587_32626 = state_32555__$1;
(statearr_32587_32626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (30))){
var inst_32532 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32588_32627 = state_32555__$1;
(statearr_32588_32627[(2)] = inst_32532);

(statearr_32588_32627[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32493 = figwheel.client.heads_up.clear.call(null);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(13),inst_32493);
} else {
if((state_val_32556 === (18))){
var inst_32510 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32589_32628 = state_32555__$1;
(statearr_32589_32628[(2)] = inst_32510);

(statearr_32589_32628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32483 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32590_32629 = state_32555__$1;
(statearr_32590_32629[(2)] = inst_32483);

(statearr_32590_32629[(1)] = (7));


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
});})(c__27964__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27902__auto__,c__27964__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null,null,null];
(statearr_32594[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto____1 = (function (state_32555){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_32555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e32595){if((e32595 instanceof Object)){
var ex__27906__auto__ = e32595;
var statearr_32596_32630 = state_32555;
(statearr_32596_32630[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32631 = state_32555;
state_32555 = G__32631;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__,msg_hist,msg_names,msg))
})();
var state__27966__auto__ = (function (){var statearr_32597 = f__27965__auto__.call(null);
(statearr_32597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_32597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__,msg_hist,msg_names,msg))
);

return c__27964__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27964__auto___32694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___32694,ch){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___32694,ch){
return (function (state_32677){
var state_val_32678 = (state_32677[(1)]);
if((state_val_32678 === (1))){
var state_32677__$1 = state_32677;
var statearr_32679_32695 = state_32677__$1;
(statearr_32679_32695[(2)] = null);

(statearr_32679_32695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (2))){
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32677__$1,(4),ch);
} else {
if((state_val_32678 === (3))){
var inst_32675 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32677__$1,inst_32675);
} else {
if((state_val_32678 === (4))){
var inst_32665 = (state_32677[(7)]);
var inst_32665__$1 = (state_32677[(2)]);
var state_32677__$1 = (function (){var statearr_32680 = state_32677;
(statearr_32680[(7)] = inst_32665__$1);

return statearr_32680;
})();
if(cljs.core.truth_(inst_32665__$1)){
var statearr_32681_32696 = state_32677__$1;
(statearr_32681_32696[(1)] = (5));

} else {
var statearr_32682_32697 = state_32677__$1;
(statearr_32682_32697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (5))){
var inst_32665 = (state_32677[(7)]);
var inst_32667 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32665);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32677__$1,(8),inst_32667);
} else {
if((state_val_32678 === (6))){
var state_32677__$1 = state_32677;
var statearr_32683_32698 = state_32677__$1;
(statearr_32683_32698[(2)] = null);

(statearr_32683_32698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (7))){
var inst_32673 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32684_32699 = state_32677__$1;
(statearr_32684_32699[(2)] = inst_32673);

(statearr_32684_32699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (8))){
var inst_32669 = (state_32677[(2)]);
var state_32677__$1 = (function (){var statearr_32685 = state_32677;
(statearr_32685[(8)] = inst_32669);

return statearr_32685;
})();
var statearr_32686_32700 = state_32677__$1;
(statearr_32686_32700[(2)] = null);

(statearr_32686_32700[(1)] = (2));


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
});})(c__27964__auto___32694,ch))
;
return ((function (switch__27902__auto__,c__27964__auto___32694,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27903__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27903__auto____0 = (function (){
var statearr_32690 = [null,null,null,null,null,null,null,null,null];
(statearr_32690[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27903__auto__);

(statearr_32690[(1)] = (1));

return statearr_32690;
});
var figwheel$client$heads_up_plugin_$_state_machine__27903__auto____1 = (function (state_32677){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_32677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e32691){if((e32691 instanceof Object)){
var ex__27906__auto__ = e32691;
var statearr_32692_32701 = state_32677;
(statearr_32692_32701[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32702 = state_32677;
state_32677 = G__32702;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27903__auto__ = function(state_32677){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27903__auto____1.call(this,state_32677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27903__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27903__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___32694,ch))
})();
var state__27966__auto__ = (function (){var statearr_32693 = f__27965__auto__.call(null);
(statearr_32693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___32694);

return statearr_32693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___32694,ch))
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
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__){
return (function (state_32723){
var state_val_32724 = (state_32723[(1)]);
if((state_val_32724 === (1))){
var inst_32718 = cljs.core.async.timeout.call(null,(3000));
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32723__$1,(2),inst_32718);
} else {
if((state_val_32724 === (2))){
var inst_32720 = (state_32723[(2)]);
var inst_32721 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32723__$1 = (function (){var statearr_32725 = state_32723;
(statearr_32725[(7)] = inst_32720);

return statearr_32725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32723__$1,inst_32721);
} else {
return null;
}
}
});})(c__27964__auto__))
;
return ((function (switch__27902__auto__,c__27964__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27903__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27903__auto____0 = (function (){
var statearr_32729 = [null,null,null,null,null,null,null,null];
(statearr_32729[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27903__auto__);

(statearr_32729[(1)] = (1));

return statearr_32729;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27903__auto____1 = (function (state_32723){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_32723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e32730){if((e32730 instanceof Object)){
var ex__27906__auto__ = e32730;
var statearr_32731_32733 = state_32723;
(statearr_32731_32733[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32734 = state_32723;
state_32723 = G__32734;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27903__auto__ = function(state_32723){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27903__auto____1.call(this,state_32723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27903__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27903__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__))
})();
var state__27966__auto__ = (function (){var statearr_32732 = f__27965__auto__.call(null);
(statearr_32732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_32732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__))
);

return c__27964__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32735){
var map__32741 = p__32735;
var map__32741__$1 = ((cljs.core.seq_QMARK_.call(null,map__32741))?cljs.core.apply.call(null,cljs.core.hash_map,map__32741):map__32741);
var ed = map__32741__$1;
var formatted_exception = cljs.core.get.call(null,map__32741__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32741__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32741__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32742_32746 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32743_32747 = null;
var count__32744_32748 = (0);
var i__32745_32749 = (0);
while(true){
if((i__32745_32749 < count__32744_32748)){
var msg_32750 = cljs.core._nth.call(null,chunk__32743_32747,i__32745_32749);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32750);

var G__32751 = seq__32742_32746;
var G__32752 = chunk__32743_32747;
var G__32753 = count__32744_32748;
var G__32754 = (i__32745_32749 + (1));
seq__32742_32746 = G__32751;
chunk__32743_32747 = G__32752;
count__32744_32748 = G__32753;
i__32745_32749 = G__32754;
continue;
} else {
var temp__4423__auto___32755 = cljs.core.seq.call(null,seq__32742_32746);
if(temp__4423__auto___32755){
var seq__32742_32756__$1 = temp__4423__auto___32755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32742_32756__$1)){
var c__25361__auto___32757 = cljs.core.chunk_first.call(null,seq__32742_32756__$1);
var G__32758 = cljs.core.chunk_rest.call(null,seq__32742_32756__$1);
var G__32759 = c__25361__auto___32757;
var G__32760 = cljs.core.count.call(null,c__25361__auto___32757);
var G__32761 = (0);
seq__32742_32746 = G__32758;
chunk__32743_32747 = G__32759;
count__32744_32748 = G__32760;
i__32745_32749 = G__32761;
continue;
} else {
var msg_32762 = cljs.core.first.call(null,seq__32742_32756__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32762);

var G__32763 = cljs.core.next.call(null,seq__32742_32756__$1);
var G__32764 = null;
var G__32765 = (0);
var G__32766 = (0);
seq__32742_32746 = G__32763;
chunk__32743_32747 = G__32764;
count__32744_32748 = G__32765;
i__32745_32749 = G__32766;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32767){
var map__32769 = p__32767;
var map__32769__$1 = ((cljs.core.seq_QMARK_.call(null,map__32769))?cljs.core.apply.call(null,cljs.core.hash_map,map__32769):map__32769);
var w = map__32769__$1;
var message = cljs.core.get.call(null,map__32769__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24563__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24563__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24563__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32776 = cljs.core.seq.call(null,plugins);
var chunk__32777 = null;
var count__32778 = (0);
var i__32779 = (0);
while(true){
if((i__32779 < count__32778)){
var vec__32780 = cljs.core._nth.call(null,chunk__32777,i__32779);
var k = cljs.core.nth.call(null,vec__32780,(0),null);
var plugin = cljs.core.nth.call(null,vec__32780,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32782 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32776,chunk__32777,count__32778,i__32779,pl_32782,vec__32780,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32782.call(null,msg_hist);
});})(seq__32776,chunk__32777,count__32778,i__32779,pl_32782,vec__32780,k,plugin))
);
} else {
}

var G__32783 = seq__32776;
var G__32784 = chunk__32777;
var G__32785 = count__32778;
var G__32786 = (i__32779 + (1));
seq__32776 = G__32783;
chunk__32777 = G__32784;
count__32778 = G__32785;
i__32779 = G__32786;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__32776);
if(temp__4423__auto__){
var seq__32776__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32776__$1)){
var c__25361__auto__ = cljs.core.chunk_first.call(null,seq__32776__$1);
var G__32787 = cljs.core.chunk_rest.call(null,seq__32776__$1);
var G__32788 = c__25361__auto__;
var G__32789 = cljs.core.count.call(null,c__25361__auto__);
var G__32790 = (0);
seq__32776 = G__32787;
chunk__32777 = G__32788;
count__32778 = G__32789;
i__32779 = G__32790;
continue;
} else {
var vec__32781 = cljs.core.first.call(null,seq__32776__$1);
var k = cljs.core.nth.call(null,vec__32781,(0),null);
var plugin = cljs.core.nth.call(null,vec__32781,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32791 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32776,chunk__32777,count__32778,i__32779,pl_32791,vec__32781,k,plugin,seq__32776__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32791.call(null,msg_hist);
});})(seq__32776,chunk__32777,count__32778,i__32779,pl_32791,vec__32781,k,plugin,seq__32776__$1,temp__4423__auto__))
);
} else {
}

var G__32792 = cljs.core.next.call(null,seq__32776__$1);
var G__32793 = null;
var G__32794 = (0);
var G__32795 = (0);
seq__32776 = G__32792;
chunk__32777 = G__32793;
count__32778 = G__32794;
i__32779 = G__32795;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__32797 = arguments.length;
switch (G__32797) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__25616__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25616__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32800){
var map__32801 = p__32800;
var map__32801__$1 = ((cljs.core.seq_QMARK_.call(null,map__32801))?cljs.core.apply.call(null,cljs.core.hash_map,map__32801):map__32801);
var opts = map__32801__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32799){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32799));
});

//# sourceMappingURL=client.js.map