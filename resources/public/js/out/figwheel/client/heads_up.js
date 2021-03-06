// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__25616__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25616__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32814_32822 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32815_32823 = null;
var count__32816_32824 = (0);
var i__32817_32825 = (0);
while(true){
if((i__32817_32825 < count__32816_32824)){
var k_32826 = cljs.core._nth.call(null,chunk__32815_32823,i__32817_32825);
e.setAttribute(cljs.core.name.call(null,k_32826),cljs.core.get.call(null,attrs,k_32826));

var G__32827 = seq__32814_32822;
var G__32828 = chunk__32815_32823;
var G__32829 = count__32816_32824;
var G__32830 = (i__32817_32825 + (1));
seq__32814_32822 = G__32827;
chunk__32815_32823 = G__32828;
count__32816_32824 = G__32829;
i__32817_32825 = G__32830;
continue;
} else {
var temp__4423__auto___32831 = cljs.core.seq.call(null,seq__32814_32822);
if(temp__4423__auto___32831){
var seq__32814_32832__$1 = temp__4423__auto___32831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32814_32832__$1)){
var c__25361__auto___32833 = cljs.core.chunk_first.call(null,seq__32814_32832__$1);
var G__32834 = cljs.core.chunk_rest.call(null,seq__32814_32832__$1);
var G__32835 = c__25361__auto___32833;
var G__32836 = cljs.core.count.call(null,c__25361__auto___32833);
var G__32837 = (0);
seq__32814_32822 = G__32834;
chunk__32815_32823 = G__32835;
count__32816_32824 = G__32836;
i__32817_32825 = G__32837;
continue;
} else {
var k_32838 = cljs.core.first.call(null,seq__32814_32832__$1);
e.setAttribute(cljs.core.name.call(null,k_32838),cljs.core.get.call(null,attrs,k_32838));

var G__32839 = cljs.core.next.call(null,seq__32814_32832__$1);
var G__32840 = null;
var G__32841 = (0);
var G__32842 = (0);
seq__32814_32822 = G__32839;
chunk__32815_32823 = G__32840;
count__32816_32824 = G__32841;
i__32817_32825 = G__32842;
continue;
}
} else {
}
}
break;
}

var seq__32818_32843 = cljs.core.seq.call(null,children);
var chunk__32819_32844 = null;
var count__32820_32845 = (0);
var i__32821_32846 = (0);
while(true){
if((i__32821_32846 < count__32820_32845)){
var ch_32847 = cljs.core._nth.call(null,chunk__32819_32844,i__32821_32846);
e.appendChild(ch_32847);

var G__32848 = seq__32818_32843;
var G__32849 = chunk__32819_32844;
var G__32850 = count__32820_32845;
var G__32851 = (i__32821_32846 + (1));
seq__32818_32843 = G__32848;
chunk__32819_32844 = G__32849;
count__32820_32845 = G__32850;
i__32821_32846 = G__32851;
continue;
} else {
var temp__4423__auto___32852 = cljs.core.seq.call(null,seq__32818_32843);
if(temp__4423__auto___32852){
var seq__32818_32853__$1 = temp__4423__auto___32852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32818_32853__$1)){
var c__25361__auto___32854 = cljs.core.chunk_first.call(null,seq__32818_32853__$1);
var G__32855 = cljs.core.chunk_rest.call(null,seq__32818_32853__$1);
var G__32856 = c__25361__auto___32854;
var G__32857 = cljs.core.count.call(null,c__25361__auto___32854);
var G__32858 = (0);
seq__32818_32843 = G__32855;
chunk__32819_32844 = G__32856;
count__32820_32845 = G__32857;
i__32821_32846 = G__32858;
continue;
} else {
var ch_32859 = cljs.core.first.call(null,seq__32818_32853__$1);
e.appendChild(ch_32859);

var G__32860 = cljs.core.next.call(null,seq__32818_32853__$1);
var G__32861 = null;
var G__32862 = (0);
var G__32863 = (0);
seq__32818_32843 = G__32860;
chunk__32819_32844 = G__32861;
count__32820_32845 = G__32862;
i__32821_32846 = G__32863;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32811){
var G__32812 = cljs.core.first.call(null,seq32811);
var seq32811__$1 = cljs.core.next.call(null,seq32811);
var G__32813 = cljs.core.first.call(null,seq32811__$1);
var seq32811__$2 = cljs.core.next.call(null,seq32811__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32812,G__32813,seq32811__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25471__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25475__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25471__auto__,prefer_table__25472__auto__,method_cache__25473__auto__,cached_hierarchy__25474__auto__,hierarchy__25475__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25471__auto__,prefer_table__25472__auto__,method_cache__25473__auto__,cached_hierarchy__25474__auto__,hierarchy__25475__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25475__auto__,method_table__25471__auto__,prefer_table__25472__auto__,method_cache__25473__auto__,cached_hierarchy__25474__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32864 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32864.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32864.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_32864.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32864);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32865,st_map){
var map__32869 = p__32865;
var map__32869__$1 = ((cljs.core.seq_QMARK_.call(null,map__32869))?cljs.core.apply.call(null,cljs.core.hash_map,map__32869):map__32869);
var container_el = cljs.core.get.call(null,map__32869__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32869,map__32869__$1,container_el){
return (function (p__32870){
var vec__32871 = p__32870;
var k = cljs.core.nth.call(null,vec__32871,(0),null);
var v = cljs.core.nth.call(null,vec__32871,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32869,map__32869__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32872,dom_str){
var map__32874 = p__32872;
var map__32874__$1 = ((cljs.core.seq_QMARK_.call(null,map__32874))?cljs.core.apply.call(null,cljs.core.hash_map,map__32874):map__32874);
var c = map__32874__$1;
var content_area_el = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32875){
var map__32877 = p__32875;
var map__32877__$1 = ((cljs.core.seq_QMARK_.call(null,map__32877))?cljs.core.apply.call(null,cljs.core.hash_map,map__32877):map__32877);
var content_area_el = cljs.core.get.call(null,map__32877__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__){
return (function (state_32919){
var state_val_32920 = (state_32919[(1)]);
if((state_val_32920 === (1))){
var inst_32904 = (state_32919[(7)]);
var inst_32904__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32905 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32906 = ["10px","10px","100%","68px","1.0"];
var inst_32907 = cljs.core.PersistentHashMap.fromArrays(inst_32905,inst_32906);
var inst_32908 = cljs.core.merge.call(null,inst_32907,style);
var inst_32909 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32904__$1,inst_32908);
var inst_32910 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32904__$1,msg);
var inst_32911 = cljs.core.async.timeout.call(null,(300));
var state_32919__$1 = (function (){var statearr_32921 = state_32919;
(statearr_32921[(7)] = inst_32904__$1);

(statearr_32921[(8)] = inst_32909);

(statearr_32921[(9)] = inst_32910);

return statearr_32921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32919__$1,(2),inst_32911);
} else {
if((state_val_32920 === (2))){
var inst_32904 = (state_32919[(7)]);
var inst_32913 = (state_32919[(2)]);
var inst_32914 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32915 = ["auto"];
var inst_32916 = cljs.core.PersistentHashMap.fromArrays(inst_32914,inst_32915);
var inst_32917 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32904,inst_32916);
var state_32919__$1 = (function (){var statearr_32922 = state_32919;
(statearr_32922[(10)] = inst_32913);

return statearr_32922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32919__$1,inst_32917);
} else {
return null;
}
}
});})(c__27964__auto__))
;
return ((function (switch__27902__auto__,c__27964__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto____0 = (function (){
var statearr_32926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32926[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto__);

(statearr_32926[(1)] = (1));

return statearr_32926;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto____1 = (function (state_32919){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_32919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e32927){if((e32927 instanceof Object)){
var ex__27906__auto__ = e32927;
var statearr_32928_32930 = state_32919;
(statearr_32928_32930[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32931 = state_32919;
state_32919 = G__32931;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto__ = function(state_32919){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto____1.call(this,state_32919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__))
})();
var state__27966__auto__ = (function (){var statearr_32929 = f__27965__auto__.call(null);
(statearr_32929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_32929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__))
);

return c__27964__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__32933 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__32933,(0),null);
var ln = cljs.core.nth.call(null,vec__32933,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32936 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32936,(0),null);
var file_line = cljs.core.nth.call(null,vec__32936,(1),null);
var file_column = cljs.core.nth.call(null,vec__32936,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32936,file_name,file_line,file_column){
return (function (p1__32934_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32934_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__32936,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__24575__auto__ = file_line;
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
var and__24563__auto__ = cause;
if(cljs.core.truth_(and__24563__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__24563__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32938 = figwheel.client.heads_up.ensure_container.call(null);
var map__32938__$1 = ((cljs.core.seq_QMARK_.call(null,map__32938))?cljs.core.apply.call(null,cljs.core.hash_map,map__32938):map__32938);
var content_area_el = cljs.core.get.call(null,map__32938__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__){
return (function (state_32985){
var state_val_32986 = (state_32985[(1)]);
if((state_val_32986 === (1))){
var inst_32968 = (state_32985[(7)]);
var inst_32968__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32969 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32970 = ["0.0"];
var inst_32971 = cljs.core.PersistentHashMap.fromArrays(inst_32969,inst_32970);
var inst_32972 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32968__$1,inst_32971);
var inst_32973 = cljs.core.async.timeout.call(null,(300));
var state_32985__$1 = (function (){var statearr_32987 = state_32985;
(statearr_32987[(8)] = inst_32972);

(statearr_32987[(7)] = inst_32968__$1);

return statearr_32987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32985__$1,(2),inst_32973);
} else {
if((state_val_32986 === (2))){
var inst_32968 = (state_32985[(7)]);
var inst_32975 = (state_32985[(2)]);
var inst_32976 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32977 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32978 = cljs.core.PersistentHashMap.fromArrays(inst_32976,inst_32977);
var inst_32979 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32968,inst_32978);
var inst_32980 = cljs.core.async.timeout.call(null,(200));
var state_32985__$1 = (function (){var statearr_32988 = state_32985;
(statearr_32988[(9)] = inst_32979);

(statearr_32988[(10)] = inst_32975);

return statearr_32988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32985__$1,(3),inst_32980);
} else {
if((state_val_32986 === (3))){
var inst_32968 = (state_32985[(7)]);
var inst_32982 = (state_32985[(2)]);
var inst_32983 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32968,"");
var state_32985__$1 = (function (){var statearr_32989 = state_32985;
(statearr_32989[(11)] = inst_32982);

return statearr_32989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32985__$1,inst_32983);
} else {
return null;
}
}
}
});})(c__27964__auto__))
;
return ((function (switch__27902__auto__,c__27964__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__27903__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__27903__auto____0 = (function (){
var statearr_32993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32993[(0)] = figwheel$client$heads_up$clear_$_state_machine__27903__auto__);

(statearr_32993[(1)] = (1));

return statearr_32993;
});
var figwheel$client$heads_up$clear_$_state_machine__27903__auto____1 = (function (state_32985){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_32985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e32994){if((e32994 instanceof Object)){
var ex__27906__auto__ = e32994;
var statearr_32995_32997 = state_32985;
(statearr_32995_32997[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_32985;
state_32985 = G__32998;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__27903__auto__ = function(state_32985){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__27903__auto____1.call(this,state_32985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__27903__auto____0;
figwheel$client$heads_up$clear_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__27903__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__))
})();
var state__27966__auto__ = (function (){var statearr_32996 = f__27965__auto__.call(null);
(statearr_32996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_32996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__))
);

return c__27964__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__){
return (function (state_33030){
var state_val_33031 = (state_33030[(1)]);
if((state_val_33031 === (1))){
var inst_33020 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33030__$1,(2),inst_33020);
} else {
if((state_val_33031 === (2))){
var inst_33022 = (state_33030[(2)]);
var inst_33023 = cljs.core.async.timeout.call(null,(400));
var state_33030__$1 = (function (){var statearr_33032 = state_33030;
(statearr_33032[(7)] = inst_33022);

return statearr_33032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33030__$1,(3),inst_33023);
} else {
if((state_val_33031 === (3))){
var inst_33025 = (state_33030[(2)]);
var inst_33026 = figwheel.client.heads_up.clear.call(null);
var state_33030__$1 = (function (){var statearr_33033 = state_33030;
(statearr_33033[(8)] = inst_33025);

return statearr_33033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33030__$1,(4),inst_33026);
} else {
if((state_val_33031 === (4))){
var inst_33028 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33030__$1,inst_33028);
} else {
return null;
}
}
}
}
});})(c__27964__auto__))
;
return ((function (switch__27902__auto__,c__27964__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto____0 = (function (){
var statearr_33037 = [null,null,null,null,null,null,null,null,null];
(statearr_33037[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto__);

(statearr_33037[(1)] = (1));

return statearr_33037;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto____1 = (function (state_33030){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_33030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e33038){if((e33038 instanceof Object)){
var ex__27906__auto__ = e33038;
var statearr_33039_33041 = state_33030;
(statearr_33039_33041[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33042 = state_33030;
state_33030 = G__33042;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto__ = function(state_33030){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto____1.call(this,state_33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__))
})();
var state__27966__auto__ = (function (){var statearr_33040 = f__27965__auto__.call(null);
(statearr_33040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_33040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__))
);

return c__27964__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map