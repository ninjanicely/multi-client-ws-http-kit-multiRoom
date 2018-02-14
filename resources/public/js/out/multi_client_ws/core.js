// Compiled by ClojureScript 0.0-3291 {}
goog.provide('multi_client_ws.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('multi_client_ws.websockets');
if(typeof multi_client_ws.core.messages !== 'undefined'){
} else {
multi_client_ws.core.messages = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
multi_client_ws.core.chatroomName = [cljs.core.str("default")].join('');
multi_client_ws.core.message_list = (function multi_client_ws$core$message_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25330__auto__ = (function multi_client_ws$core$message_list_$_iter__26870(s__26871){
return (new cljs.core.LazySeq(null,(function (){
var s__26871__$1 = s__26871;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__26871__$1);
if(temp__4423__auto__){
var s__26871__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26871__$2)){
var c__25328__auto__ = cljs.core.chunk_first.call(null,s__26871__$2);
var size__25329__auto__ = cljs.core.count.call(null,c__25328__auto__);
var b__26873 = cljs.core.chunk_buffer.call(null,size__25329__auto__);
if((function (){var i__26872 = (0);
while(true){
if((i__26872 < size__25329__auto__)){
var vec__26876 = cljs.core._nth.call(null,c__25328__auto__,i__26872);
var i = cljs.core.nth.call(null,vec__26876,(0),null);
var message = cljs.core.nth.call(null,vec__26876,(1),null);
cljs.core.chunk_append.call(null,b__26873,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__26878 = (i__26872 + (1));
i__26872 = G__26878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26873),multi_client_ws$core$message_list_$_iter__26870.call(null,cljs.core.chunk_rest.call(null,s__26871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26873),null);
}
} else {
var vec__26877 = cljs.core.first.call(null,s__26871__$2);
var i = cljs.core.nth.call(null,vec__26877,(0),null);
var message = cljs.core.nth.call(null,vec__26877,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),message], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),multi_client_ws$core$message_list_$_iter__26870.call(null,cljs.core.rest.call(null,s__26871__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25330__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,multi_client_ws.core.messages)));
})()], null);
});
multi_client_ws.core.message_input = (function multi_client_ws$core$message_input(){
var value = reagent.core.atom.call(null,null);
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"type in a message and press enter",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__26879_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__26879_SHARP_.target.value);
});})(value))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (value){
return (function (p1__26880_SHARP_){
if(cljs.core._EQ_.call(null,p1__26880_SHARP_.keyCode,(13))){
multi_client_ws.websockets.send_transit_msg_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref.call(null,value)], null));

return cljs.core.reset_BANG_.call(null,value,null);
} else {
return null;
}
});})(value))
], null)], null);
});
;})(value))
});
multi_client_ws.core.chatroomName_input = (function multi_client_ws$core$chatroomName_input(){
var value = reagent.core.atom.call(null,null);
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter a chatroom name:",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value){
return (function (p1__26881_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__26881_SHARP_.target.value);
});})(value))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (value){
return (function (p1__26882_SHARP_){
if(cljs.core._EQ_.call(null,p1__26882_SHARP_.keyCode,(13))){
return multi_client_ws.websockets.make_websocket_BANG_.call(null,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str([cljs.core.str("/ws/"),cljs.core.str(cljs.core.deref.call(null,value))].join(''))].join(''),multi_client_ws.core.update_messages_BANG_);
} else {
return null;
}
});})(value))
], null)], null);
});
;})(value))
});
multi_client_ws.core.home_page = (function multi_client_ws$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str("Welcome to chatroom: "),cljs.core.str(multi_client_ws.core.chatroomName)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_client_ws.core.message_list], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_client_ws.core.message_input], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [multi_client_ws.core.chatroomName_input], null)], null)], null)], null);
});
multi_client_ws.core.update_messages_BANG_ = (function multi_client_ws$core$update_messages_BANG_(p__26884){
var map__26886 = p__26884;
var map__26886__$1 = ((cljs.core.seq_QMARK_.call(null,map__26886))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);
var message = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return cljs.core.swap_BANG_.call(null,multi_client_ws.core.messages,((function (map__26886,map__26886__$1,message){
return (function (p1__26883_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,(10),cljs.core.conj.call(null,p1__26883_SHARP_,message)));
});})(map__26886,map__26886__$1,message))
);
});
multi_client_ws.core.mount_components = (function multi_client_ws$core$mount_components(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return multi_client_ws.core.home_page;},new cljs.core.Symbol("multi-client-ws.core","home-page","multi-client-ws.core/home-page",978128108,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"multi-client-ws.core","multi-client-ws.core",-546349665,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src-cljs/multi_client_ws/core.cljs",16,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(multi_client_ws.core.home_page)?multi_client_ws.core.home_page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
multi_client_ws.core.init_BANG_ = (function multi_client_ws$core$init_BANG_(){
return multi_client_ws.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map