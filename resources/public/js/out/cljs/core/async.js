// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t33836 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33836 = (function (fn_handler,f,meta33837){
this.fn_handler = fn_handler;
this.f = f;
this.meta33837 = meta33837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33838,meta33837__$1){
var self__ = this;
var _33838__$1 = this;
return (new cljs.core.async.t33836(self__.fn_handler,self__.f,meta33837__$1));
});

cljs.core.async.t33836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33838){
var self__ = this;
var _33838__$1 = this;
return self__.meta33837;
});

cljs.core.async.t33836.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t33836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t33836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta33837","meta33837",814692588,null)], null);
});

cljs.core.async.t33836.cljs$lang$type = true;

cljs.core.async.t33836.cljs$lang$ctorStr = "cljs.core.async/t33836";

cljs.core.async.t33836.cljs$lang$ctorPrWriter = (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t33836");
});

cljs.core.async.__GT_t33836 = (function cljs$core$async$fn_handler_$___GT_t33836(fn_handler__$1,f__$1,meta33837){
return (new cljs.core.async.t33836(fn_handler__$1,f__$1,meta33837));
});

}

return (new cljs.core.async.t33836(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__33840 = buff;
if(G__33840){
var bit__25250__auto__ = null;
if(cljs.core.truth_((function (){var or__24575__auto__ = bit__25250__auto__;
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return G__33840.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__33840.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33840);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33840);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__33842 = arguments.length;
switch (G__33842) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__33845 = arguments.length;
switch (G__33845) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33847 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33847);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33847,ret){
return (function (){
return fn1.call(null,val_33847);
});})(val_33847,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__33849 = arguments.length;
switch (G__33849) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25461__auto___33851 = n;
var x_33852 = (0);
while(true){
if((x_33852 < n__25461__auto___33851)){
(a[x_33852] = (0));

var G__33853 = (x_33852 + (1));
x_33852 = G__33853;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33854 = (i + (1));
i = G__33854;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t33858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33858 = (function (alt_flag,flag,meta33859){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33859 = meta33859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33860,meta33859__$1){
var self__ = this;
var _33860__$1 = this;
return (new cljs.core.async.t33858(self__.alt_flag,self__.flag,meta33859__$1));
});})(flag))
;

cljs.core.async.t33858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33860){
var self__ = this;
var _33860__$1 = this;
return self__.meta33859;
});})(flag))
;

cljs.core.async.t33858.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t33858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t33858.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33859","meta33859",-2065364339,null)], null);
});})(flag))
;

cljs.core.async.t33858.cljs$lang$type = true;

cljs.core.async.t33858.cljs$lang$ctorStr = "cljs.core.async/t33858";

cljs.core.async.t33858.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t33858");
});})(flag))
;

cljs.core.async.__GT_t33858 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t33858(alt_flag__$1,flag__$1,meta33859){
return (new cljs.core.async.t33858(alt_flag__$1,flag__$1,meta33859));
});})(flag))
;

}

return (new cljs.core.async.t33858(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t33864 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33864 = (function (alt_handler,flag,cb,meta33865){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33865 = meta33865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33866,meta33865__$1){
var self__ = this;
var _33866__$1 = this;
return (new cljs.core.async.t33864(self__.alt_handler,self__.flag,self__.cb,meta33865__$1));
});

cljs.core.async.t33864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33866){
var self__ = this;
var _33866__$1 = this;
return self__.meta33865;
});

cljs.core.async.t33864.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t33864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t33864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33865","meta33865",-850917541,null)], null);
});

cljs.core.async.t33864.cljs$lang$type = true;

cljs.core.async.t33864.cljs$lang$ctorStr = "cljs.core.async/t33864";

cljs.core.async.t33864.cljs$lang$ctorPrWriter = (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t33864");
});

cljs.core.async.__GT_t33864 = (function cljs$core$async$alt_handler_$___GT_t33864(alt_handler__$1,flag__$1,cb__$1,meta33865){
return (new cljs.core.async.t33864(alt_handler__$1,flag__$1,cb__$1,meta33865));
});

}

return (new cljs.core.async.t33864(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33867_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33867_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33868_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33868_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24575__auto__ = wport;
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33869 = (i + (1));
i = G__33869;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24575__auto__ = ret;
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__24563__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24563__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24563__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__25616__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25616__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33872){
var map__33873 = p__33872;
var map__33873__$1 = ((cljs.core.seq_QMARK_.call(null,map__33873))?cljs.core.apply.call(null,cljs.core.hash_map,map__33873):map__33873);
var opts = map__33873__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33870){
var G__33871 = cljs.core.first.call(null,seq33870);
var seq33870__$1 = cljs.core.next.call(null,seq33870);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33871,seq33870__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__33875 = arguments.length;
switch (G__33875) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27964__auto___33924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___33924){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___33924){
return (function (state_33899){
var state_val_33900 = (state_33899[(1)]);
if((state_val_33900 === (7))){
var inst_33895 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33901_33925 = state_33899__$1;
(statearr_33901_33925[(2)] = inst_33895);

(statearr_33901_33925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (1))){
var state_33899__$1 = state_33899;
var statearr_33902_33926 = state_33899__$1;
(statearr_33902_33926[(2)] = null);

(statearr_33902_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (4))){
var inst_33878 = (state_33899[(7)]);
var inst_33878__$1 = (state_33899[(2)]);
var inst_33879 = (inst_33878__$1 == null);
var state_33899__$1 = (function (){var statearr_33903 = state_33899;
(statearr_33903[(7)] = inst_33878__$1);

return statearr_33903;
})();
if(cljs.core.truth_(inst_33879)){
var statearr_33904_33927 = state_33899__$1;
(statearr_33904_33927[(1)] = (5));

} else {
var statearr_33905_33928 = state_33899__$1;
(statearr_33905_33928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (13))){
var state_33899__$1 = state_33899;
var statearr_33906_33929 = state_33899__$1;
(statearr_33906_33929[(2)] = null);

(statearr_33906_33929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (6))){
var inst_33878 = (state_33899[(7)]);
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33899__$1,(11),to,inst_33878);
} else {
if((state_val_33900 === (3))){
var inst_33897 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33899__$1,inst_33897);
} else {
if((state_val_33900 === (12))){
var state_33899__$1 = state_33899;
var statearr_33907_33930 = state_33899__$1;
(statearr_33907_33930[(2)] = null);

(statearr_33907_33930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (2))){
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33899__$1,(4),from);
} else {
if((state_val_33900 === (11))){
var inst_33888 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
if(cljs.core.truth_(inst_33888)){
var statearr_33908_33931 = state_33899__$1;
(statearr_33908_33931[(1)] = (12));

} else {
var statearr_33909_33932 = state_33899__$1;
(statearr_33909_33932[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (9))){
var state_33899__$1 = state_33899;
var statearr_33910_33933 = state_33899__$1;
(statearr_33910_33933[(2)] = null);

(statearr_33910_33933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (5))){
var state_33899__$1 = state_33899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33911_33934 = state_33899__$1;
(statearr_33911_33934[(1)] = (8));

} else {
var statearr_33912_33935 = state_33899__$1;
(statearr_33912_33935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (14))){
var inst_33893 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33913_33936 = state_33899__$1;
(statearr_33913_33936[(2)] = inst_33893);

(statearr_33913_33936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (10))){
var inst_33885 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33914_33937 = state_33899__$1;
(statearr_33914_33937[(2)] = inst_33885);

(statearr_33914_33937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (8))){
var inst_33882 = cljs.core.async.close_BANG_.call(null,to);
var state_33899__$1 = state_33899;
var statearr_33915_33938 = state_33899__$1;
(statearr_33915_33938[(2)] = inst_33882);

(statearr_33915_33938[(1)] = (10));


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
});})(c__27964__auto___33924))
;
return ((function (switch__27902__auto__,c__27964__auto___33924){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_33919 = [null,null,null,null,null,null,null,null];
(statearr_33919[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_33919[(1)] = (1));

return statearr_33919;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_33899){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_33899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e33920){if((e33920 instanceof Object)){
var ex__27906__auto__ = e33920;
var statearr_33921_33939 = state_33899;
(statearr_33921_33939[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33940 = state_33899;
state_33899 = G__33940;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_33899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_33899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___33924))
})();
var state__27966__auto__ = (function (){var statearr_33922 = f__27965__auto__.call(null);
(statearr_33922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___33924);

return statearr_33922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___33924))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34124){
var vec__34125 = p__34124;
var v = cljs.core.nth.call(null,vec__34125,(0),null);
var p = cljs.core.nth.call(null,vec__34125,(1),null);
var job = vec__34125;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27964__auto___34307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___34307,res,vec__34125,v,p,job,jobs,results){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___34307,res,vec__34125,v,p,job,jobs,results){
return (function (state_34130){
var state_val_34131 = (state_34130[(1)]);
if((state_val_34131 === (1))){
var state_34130__$1 = state_34130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34130__$1,(2),res,v);
} else {
if((state_val_34131 === (2))){
var inst_34127 = (state_34130[(2)]);
var inst_34128 = cljs.core.async.close_BANG_.call(null,res);
var state_34130__$1 = (function (){var statearr_34132 = state_34130;
(statearr_34132[(7)] = inst_34127);

return statearr_34132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34130__$1,inst_34128);
} else {
return null;
}
}
});})(c__27964__auto___34307,res,vec__34125,v,p,job,jobs,results))
;
return ((function (switch__27902__auto__,c__27964__auto___34307,res,vec__34125,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0 = (function (){
var statearr_34136 = [null,null,null,null,null,null,null,null];
(statearr_34136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__);

(statearr_34136[(1)] = (1));

return statearr_34136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1 = (function (state_34130){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34137){if((e34137 instanceof Object)){
var ex__27906__auto__ = e34137;
var statearr_34138_34308 = state_34130;
(statearr_34138_34308[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34309 = state_34130;
state_34130 = G__34309;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = function(state_34130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1.call(this,state_34130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___34307,res,vec__34125,v,p,job,jobs,results))
})();
var state__27966__auto__ = (function (){var statearr_34139 = f__27965__auto__.call(null);
(statearr_34139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___34307);

return statearr_34139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___34307,res,vec__34125,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34140){
var vec__34141 = p__34140;
var v = cljs.core.nth.call(null,vec__34141,(0),null);
var p = cljs.core.nth.call(null,vec__34141,(1),null);
var job = vec__34141;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25461__auto___34310 = n;
var __34311 = (0);
while(true){
if((__34311 < n__25461__auto___34310)){
var G__34142_34312 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34142_34312) {
case "compute":
var c__27964__auto___34314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34311,c__27964__auto___34314,G__34142_34312,n__25461__auto___34310,jobs,results,process,async){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (__34311,c__27964__auto___34314,G__34142_34312,n__25461__auto___34310,jobs,results,process,async){
return (function (state_34155){
var state_val_34156 = (state_34155[(1)]);
if((state_val_34156 === (1))){
var state_34155__$1 = state_34155;
var statearr_34157_34315 = state_34155__$1;
(statearr_34157_34315[(2)] = null);

(statearr_34157_34315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (2))){
var state_34155__$1 = state_34155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34155__$1,(4),jobs);
} else {
if((state_val_34156 === (3))){
var inst_34153 = (state_34155[(2)]);
var state_34155__$1 = state_34155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34155__$1,inst_34153);
} else {
if((state_val_34156 === (4))){
var inst_34145 = (state_34155[(2)]);
var inst_34146 = process.call(null,inst_34145);
var state_34155__$1 = state_34155;
if(cljs.core.truth_(inst_34146)){
var statearr_34158_34316 = state_34155__$1;
(statearr_34158_34316[(1)] = (5));

} else {
var statearr_34159_34317 = state_34155__$1;
(statearr_34159_34317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (5))){
var state_34155__$1 = state_34155;
var statearr_34160_34318 = state_34155__$1;
(statearr_34160_34318[(2)] = null);

(statearr_34160_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (6))){
var state_34155__$1 = state_34155;
var statearr_34161_34319 = state_34155__$1;
(statearr_34161_34319[(2)] = null);

(statearr_34161_34319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (7))){
var inst_34151 = (state_34155[(2)]);
var state_34155__$1 = state_34155;
var statearr_34162_34320 = state_34155__$1;
(statearr_34162_34320[(2)] = inst_34151);

(statearr_34162_34320[(1)] = (3));


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
});})(__34311,c__27964__auto___34314,G__34142_34312,n__25461__auto___34310,jobs,results,process,async))
;
return ((function (__34311,switch__27902__auto__,c__27964__auto___34314,G__34142_34312,n__25461__auto___34310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0 = (function (){
var statearr_34166 = [null,null,null,null,null,null,null];
(statearr_34166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__);

(statearr_34166[(1)] = (1));

return statearr_34166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1 = (function (state_34155){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34167){if((e34167 instanceof Object)){
var ex__27906__auto__ = e34167;
var statearr_34168_34321 = state_34155;
(statearr_34168_34321[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34322 = state_34155;
state_34155 = G__34322;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = function(state_34155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1.call(this,state_34155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__;
})()
;})(__34311,switch__27902__auto__,c__27964__auto___34314,G__34142_34312,n__25461__auto___34310,jobs,results,process,async))
})();
var state__27966__auto__ = (function (){var statearr_34169 = f__27965__auto__.call(null);
(statearr_34169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___34314);

return statearr_34169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(__34311,c__27964__auto___34314,G__34142_34312,n__25461__auto___34310,jobs,results,process,async))
);


break;
case "async":
var c__27964__auto___34323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34311,c__27964__auto___34323,G__34142_34312,n__25461__auto___34310,jobs,results,process,async){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (__34311,c__27964__auto___34323,G__34142_34312,n__25461__auto___34310,jobs,results,process,async){
return (function (state_34182){
var state_val_34183 = (state_34182[(1)]);
if((state_val_34183 === (1))){
var state_34182__$1 = state_34182;
var statearr_34184_34324 = state_34182__$1;
(statearr_34184_34324[(2)] = null);

(statearr_34184_34324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (2))){
var state_34182__$1 = state_34182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34182__$1,(4),jobs);
} else {
if((state_val_34183 === (3))){
var inst_34180 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34182__$1,inst_34180);
} else {
if((state_val_34183 === (4))){
var inst_34172 = (state_34182[(2)]);
var inst_34173 = async.call(null,inst_34172);
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34173)){
var statearr_34185_34325 = state_34182__$1;
(statearr_34185_34325[(1)] = (5));

} else {
var statearr_34186_34326 = state_34182__$1;
(statearr_34186_34326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (5))){
var state_34182__$1 = state_34182;
var statearr_34187_34327 = state_34182__$1;
(statearr_34187_34327[(2)] = null);

(statearr_34187_34327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (6))){
var state_34182__$1 = state_34182;
var statearr_34188_34328 = state_34182__$1;
(statearr_34188_34328[(2)] = null);

(statearr_34188_34328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34183 === (7))){
var inst_34178 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34189_34329 = state_34182__$1;
(statearr_34189_34329[(2)] = inst_34178);

(statearr_34189_34329[(1)] = (3));


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
});})(__34311,c__27964__auto___34323,G__34142_34312,n__25461__auto___34310,jobs,results,process,async))
;
return ((function (__34311,switch__27902__auto__,c__27964__auto___34323,G__34142_34312,n__25461__auto___34310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0 = (function (){
var statearr_34193 = [null,null,null,null,null,null,null];
(statearr_34193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__);

(statearr_34193[(1)] = (1));

return statearr_34193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1 = (function (state_34182){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34194){if((e34194 instanceof Object)){
var ex__27906__auto__ = e34194;
var statearr_34195_34330 = state_34182;
(statearr_34195_34330[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34331 = state_34182;
state_34182 = G__34331;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = function(state_34182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1.call(this,state_34182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__;
})()
;})(__34311,switch__27902__auto__,c__27964__auto___34323,G__34142_34312,n__25461__auto___34310,jobs,results,process,async))
})();
var state__27966__auto__ = (function (){var statearr_34196 = f__27965__auto__.call(null);
(statearr_34196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___34323);

return statearr_34196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(__34311,c__27964__auto___34323,G__34142_34312,n__25461__auto___34310,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34332 = (__34311 + (1));
__34311 = G__34332;
continue;
} else {
}
break;
}

var c__27964__auto___34333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___34333,jobs,results,process,async){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___34333,jobs,results,process,async){
return (function (state_34218){
var state_val_34219 = (state_34218[(1)]);
if((state_val_34219 === (1))){
var state_34218__$1 = state_34218;
var statearr_34220_34334 = state_34218__$1;
(statearr_34220_34334[(2)] = null);

(statearr_34220_34334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (2))){
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34218__$1,(4),from);
} else {
if((state_val_34219 === (3))){
var inst_34216 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34218__$1,inst_34216);
} else {
if((state_val_34219 === (4))){
var inst_34199 = (state_34218[(7)]);
var inst_34199__$1 = (state_34218[(2)]);
var inst_34200 = (inst_34199__$1 == null);
var state_34218__$1 = (function (){var statearr_34221 = state_34218;
(statearr_34221[(7)] = inst_34199__$1);

return statearr_34221;
})();
if(cljs.core.truth_(inst_34200)){
var statearr_34222_34335 = state_34218__$1;
(statearr_34222_34335[(1)] = (5));

} else {
var statearr_34223_34336 = state_34218__$1;
(statearr_34223_34336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (5))){
var inst_34202 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34218__$1 = state_34218;
var statearr_34224_34337 = state_34218__$1;
(statearr_34224_34337[(2)] = inst_34202);

(statearr_34224_34337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (6))){
var inst_34199 = (state_34218[(7)]);
var inst_34204 = (state_34218[(8)]);
var inst_34204__$1 = cljs.core.async.chan.call(null,(1));
var inst_34205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34206 = [inst_34199,inst_34204__$1];
var inst_34207 = (new cljs.core.PersistentVector(null,2,(5),inst_34205,inst_34206,null));
var state_34218__$1 = (function (){var statearr_34225 = state_34218;
(statearr_34225[(8)] = inst_34204__$1);

return statearr_34225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34218__$1,(8),jobs,inst_34207);
} else {
if((state_val_34219 === (7))){
var inst_34214 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34226_34338 = state_34218__$1;
(statearr_34226_34338[(2)] = inst_34214);

(statearr_34226_34338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (8))){
var inst_34204 = (state_34218[(8)]);
var inst_34209 = (state_34218[(2)]);
var state_34218__$1 = (function (){var statearr_34227 = state_34218;
(statearr_34227[(9)] = inst_34209);

return statearr_34227;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34218__$1,(9),results,inst_34204);
} else {
if((state_val_34219 === (9))){
var inst_34211 = (state_34218[(2)]);
var state_34218__$1 = (function (){var statearr_34228 = state_34218;
(statearr_34228[(10)] = inst_34211);

return statearr_34228;
})();
var statearr_34229_34339 = state_34218__$1;
(statearr_34229_34339[(2)] = null);

(statearr_34229_34339[(1)] = (2));


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
});})(c__27964__auto___34333,jobs,results,process,async))
;
return ((function (switch__27902__auto__,c__27964__auto___34333,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0 = (function (){
var statearr_34233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__);

(statearr_34233[(1)] = (1));

return statearr_34233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1 = (function (state_34218){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34234){if((e34234 instanceof Object)){
var ex__27906__auto__ = e34234;
var statearr_34235_34340 = state_34218;
(statearr_34235_34340[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34341 = state_34218;
state_34218 = G__34341;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = function(state_34218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1.call(this,state_34218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___34333,jobs,results,process,async))
})();
var state__27966__auto__ = (function (){var statearr_34236 = f__27965__auto__.call(null);
(statearr_34236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___34333);

return statearr_34236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___34333,jobs,results,process,async))
);


var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__,jobs,results,process,async){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__,jobs,results,process,async){
return (function (state_34274){
var state_val_34275 = (state_34274[(1)]);
if((state_val_34275 === (7))){
var inst_34270 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34276_34342 = state_34274__$1;
(statearr_34276_34342[(2)] = inst_34270);

(statearr_34276_34342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (20))){
var state_34274__$1 = state_34274;
var statearr_34277_34343 = state_34274__$1;
(statearr_34277_34343[(2)] = null);

(statearr_34277_34343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (1))){
var state_34274__$1 = state_34274;
var statearr_34278_34344 = state_34274__$1;
(statearr_34278_34344[(2)] = null);

(statearr_34278_34344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (4))){
var inst_34239 = (state_34274[(7)]);
var inst_34239__$1 = (state_34274[(2)]);
var inst_34240 = (inst_34239__$1 == null);
var state_34274__$1 = (function (){var statearr_34279 = state_34274;
(statearr_34279[(7)] = inst_34239__$1);

return statearr_34279;
})();
if(cljs.core.truth_(inst_34240)){
var statearr_34280_34345 = state_34274__$1;
(statearr_34280_34345[(1)] = (5));

} else {
var statearr_34281_34346 = state_34274__$1;
(statearr_34281_34346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (15))){
var inst_34252 = (state_34274[(8)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34274__$1,(18),to,inst_34252);
} else {
if((state_val_34275 === (21))){
var inst_34265 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34282_34347 = state_34274__$1;
(statearr_34282_34347[(2)] = inst_34265);

(statearr_34282_34347[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (13))){
var inst_34267 = (state_34274[(2)]);
var state_34274__$1 = (function (){var statearr_34283 = state_34274;
(statearr_34283[(9)] = inst_34267);

return statearr_34283;
})();
var statearr_34284_34348 = state_34274__$1;
(statearr_34284_34348[(2)] = null);

(statearr_34284_34348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (6))){
var inst_34239 = (state_34274[(7)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34274__$1,(11),inst_34239);
} else {
if((state_val_34275 === (17))){
var inst_34260 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
if(cljs.core.truth_(inst_34260)){
var statearr_34285_34349 = state_34274__$1;
(statearr_34285_34349[(1)] = (19));

} else {
var statearr_34286_34350 = state_34274__$1;
(statearr_34286_34350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (3))){
var inst_34272 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34274__$1,inst_34272);
} else {
if((state_val_34275 === (12))){
var inst_34249 = (state_34274[(10)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34274__$1,(14),inst_34249);
} else {
if((state_val_34275 === (2))){
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34274__$1,(4),results);
} else {
if((state_val_34275 === (19))){
var state_34274__$1 = state_34274;
var statearr_34287_34351 = state_34274__$1;
(statearr_34287_34351[(2)] = null);

(statearr_34287_34351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (11))){
var inst_34249 = (state_34274[(2)]);
var state_34274__$1 = (function (){var statearr_34288 = state_34274;
(statearr_34288[(10)] = inst_34249);

return statearr_34288;
})();
var statearr_34289_34352 = state_34274__$1;
(statearr_34289_34352[(2)] = null);

(statearr_34289_34352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (9))){
var state_34274__$1 = state_34274;
var statearr_34290_34353 = state_34274__$1;
(statearr_34290_34353[(2)] = null);

(statearr_34290_34353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (5))){
var state_34274__$1 = state_34274;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34291_34354 = state_34274__$1;
(statearr_34291_34354[(1)] = (8));

} else {
var statearr_34292_34355 = state_34274__$1;
(statearr_34292_34355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (14))){
var inst_34254 = (state_34274[(11)]);
var inst_34252 = (state_34274[(8)]);
var inst_34252__$1 = (state_34274[(2)]);
var inst_34253 = (inst_34252__$1 == null);
var inst_34254__$1 = cljs.core.not.call(null,inst_34253);
var state_34274__$1 = (function (){var statearr_34293 = state_34274;
(statearr_34293[(11)] = inst_34254__$1);

(statearr_34293[(8)] = inst_34252__$1);

return statearr_34293;
})();
if(inst_34254__$1){
var statearr_34294_34356 = state_34274__$1;
(statearr_34294_34356[(1)] = (15));

} else {
var statearr_34295_34357 = state_34274__$1;
(statearr_34295_34357[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (16))){
var inst_34254 = (state_34274[(11)]);
var state_34274__$1 = state_34274;
var statearr_34296_34358 = state_34274__$1;
(statearr_34296_34358[(2)] = inst_34254);

(statearr_34296_34358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (10))){
var inst_34246 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34297_34359 = state_34274__$1;
(statearr_34297_34359[(2)] = inst_34246);

(statearr_34297_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (18))){
var inst_34257 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34298_34360 = state_34274__$1;
(statearr_34298_34360[(2)] = inst_34257);

(statearr_34298_34360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34275 === (8))){
var inst_34243 = cljs.core.async.close_BANG_.call(null,to);
var state_34274__$1 = state_34274;
var statearr_34299_34361 = state_34274__$1;
(statearr_34299_34361[(2)] = inst_34243);

(statearr_34299_34361[(1)] = (10));


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
});})(c__27964__auto__,jobs,results,process,async))
;
return ((function (switch__27902__auto__,c__27964__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0 = (function (){
var statearr_34303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__);

(statearr_34303[(1)] = (1));

return statearr_34303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1 = (function (state_34274){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34304){if((e34304 instanceof Object)){
var ex__27906__auto__ = e34304;
var statearr_34305_34362 = state_34274;
(statearr_34305_34362[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34363 = state_34274;
state_34274 = G__34363;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__ = function(state_34274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1.call(this,state_34274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__,jobs,results,process,async))
})();
var state__27966__auto__ = (function (){var statearr_34306 = f__27965__auto__.call(null);
(statearr_34306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_34306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__,jobs,results,process,async))
);

return c__27964__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__34365 = arguments.length;
switch (G__34365) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__34368 = arguments.length;
switch (G__34368) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__34371 = arguments.length;
switch (G__34371) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27964__auto___34423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___34423,tc,fc){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___34423,tc,fc){
return (function (state_34397){
var state_val_34398 = (state_34397[(1)]);
if((state_val_34398 === (7))){
var inst_34393 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
var statearr_34399_34424 = state_34397__$1;
(statearr_34399_34424[(2)] = inst_34393);

(statearr_34399_34424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (1))){
var state_34397__$1 = state_34397;
var statearr_34400_34425 = state_34397__$1;
(statearr_34400_34425[(2)] = null);

(statearr_34400_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (4))){
var inst_34374 = (state_34397[(7)]);
var inst_34374__$1 = (state_34397[(2)]);
var inst_34375 = (inst_34374__$1 == null);
var state_34397__$1 = (function (){var statearr_34401 = state_34397;
(statearr_34401[(7)] = inst_34374__$1);

return statearr_34401;
})();
if(cljs.core.truth_(inst_34375)){
var statearr_34402_34426 = state_34397__$1;
(statearr_34402_34426[(1)] = (5));

} else {
var statearr_34403_34427 = state_34397__$1;
(statearr_34403_34427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (13))){
var state_34397__$1 = state_34397;
var statearr_34404_34428 = state_34397__$1;
(statearr_34404_34428[(2)] = null);

(statearr_34404_34428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (6))){
var inst_34374 = (state_34397[(7)]);
var inst_34380 = p.call(null,inst_34374);
var state_34397__$1 = state_34397;
if(cljs.core.truth_(inst_34380)){
var statearr_34405_34429 = state_34397__$1;
(statearr_34405_34429[(1)] = (9));

} else {
var statearr_34406_34430 = state_34397__$1;
(statearr_34406_34430[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (3))){
var inst_34395 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34397__$1,inst_34395);
} else {
if((state_val_34398 === (12))){
var state_34397__$1 = state_34397;
var statearr_34407_34431 = state_34397__$1;
(statearr_34407_34431[(2)] = null);

(statearr_34407_34431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (2))){
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34397__$1,(4),ch);
} else {
if((state_val_34398 === (11))){
var inst_34374 = (state_34397[(7)]);
var inst_34384 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34397__$1,(8),inst_34384,inst_34374);
} else {
if((state_val_34398 === (9))){
var state_34397__$1 = state_34397;
var statearr_34408_34432 = state_34397__$1;
(statearr_34408_34432[(2)] = tc);

(statearr_34408_34432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (5))){
var inst_34377 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34378 = cljs.core.async.close_BANG_.call(null,fc);
var state_34397__$1 = (function (){var statearr_34409 = state_34397;
(statearr_34409[(8)] = inst_34377);

return statearr_34409;
})();
var statearr_34410_34433 = state_34397__$1;
(statearr_34410_34433[(2)] = inst_34378);

(statearr_34410_34433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (14))){
var inst_34391 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
var statearr_34411_34434 = state_34397__$1;
(statearr_34411_34434[(2)] = inst_34391);

(statearr_34411_34434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (10))){
var state_34397__$1 = state_34397;
var statearr_34412_34435 = state_34397__$1;
(statearr_34412_34435[(2)] = fc);

(statearr_34412_34435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (8))){
var inst_34386 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
if(cljs.core.truth_(inst_34386)){
var statearr_34413_34436 = state_34397__$1;
(statearr_34413_34436[(1)] = (12));

} else {
var statearr_34414_34437 = state_34397__$1;
(statearr_34414_34437[(1)] = (13));

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
});})(c__27964__auto___34423,tc,fc))
;
return ((function (switch__27902__auto__,c__27964__auto___34423,tc,fc){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_34418 = [null,null,null,null,null,null,null,null,null];
(statearr_34418[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_34418[(1)] = (1));

return statearr_34418;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_34397){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34419){if((e34419 instanceof Object)){
var ex__27906__auto__ = e34419;
var statearr_34420_34438 = state_34397;
(statearr_34420_34438[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34439 = state_34397;
state_34397 = G__34439;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_34397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_34397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___34423,tc,fc))
})();
var state__27966__auto__ = (function (){var statearr_34421 = f__27965__auto__.call(null);
(statearr_34421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___34423);

return statearr_34421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___34423,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__){
return (function (state_34486){
var state_val_34487 = (state_34486[(1)]);
if((state_val_34487 === (1))){
var inst_34472 = init;
var state_34486__$1 = (function (){var statearr_34488 = state_34486;
(statearr_34488[(7)] = inst_34472);

return statearr_34488;
})();
var statearr_34489_34504 = state_34486__$1;
(statearr_34489_34504[(2)] = null);

(statearr_34489_34504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (2))){
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34486__$1,(4),ch);
} else {
if((state_val_34487 === (3))){
var inst_34484 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34486__$1,inst_34484);
} else {
if((state_val_34487 === (4))){
var inst_34475 = (state_34486[(8)]);
var inst_34475__$1 = (state_34486[(2)]);
var inst_34476 = (inst_34475__$1 == null);
var state_34486__$1 = (function (){var statearr_34490 = state_34486;
(statearr_34490[(8)] = inst_34475__$1);

return statearr_34490;
})();
if(cljs.core.truth_(inst_34476)){
var statearr_34491_34505 = state_34486__$1;
(statearr_34491_34505[(1)] = (5));

} else {
var statearr_34492_34506 = state_34486__$1;
(statearr_34492_34506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (5))){
var inst_34472 = (state_34486[(7)]);
var state_34486__$1 = state_34486;
var statearr_34493_34507 = state_34486__$1;
(statearr_34493_34507[(2)] = inst_34472);

(statearr_34493_34507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (6))){
var inst_34475 = (state_34486[(8)]);
var inst_34472 = (state_34486[(7)]);
var inst_34479 = f.call(null,inst_34472,inst_34475);
var inst_34472__$1 = inst_34479;
var state_34486__$1 = (function (){var statearr_34494 = state_34486;
(statearr_34494[(7)] = inst_34472__$1);

return statearr_34494;
})();
var statearr_34495_34508 = state_34486__$1;
(statearr_34495_34508[(2)] = null);

(statearr_34495_34508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (7))){
var inst_34482 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34496_34509 = state_34486__$1;
(statearr_34496_34509[(2)] = inst_34482);

(statearr_34496_34509[(1)] = (3));


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
});})(c__27964__auto__))
;
return ((function (switch__27902__auto__,c__27964__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27903__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27903__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$reduce_$_state_machine__27903__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var cljs$core$async$reduce_$_state_machine__27903__auto____1 = (function (state_34486){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__27906__auto__ = e34501;
var statearr_34502_34510 = state_34486;
(statearr_34502_34510[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34511 = state_34486;
state_34486 = G__34511;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27903__auto__ = function(state_34486){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27903__auto____1.call(this,state_34486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27903__auto____0;
cljs$core$async$reduce_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27903__auto____1;
return cljs$core$async$reduce_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__))
})();
var state__27966__auto__ = (function (){var statearr_34503 = f__27965__auto__.call(null);
(statearr_34503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__))
);

return c__27964__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__34513 = arguments.length;
switch (G__34513) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__){
return (function (state_34538){
var state_val_34539 = (state_34538[(1)]);
if((state_val_34539 === (7))){
var inst_34520 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34540_34564 = state_34538__$1;
(statearr_34540_34564[(2)] = inst_34520);

(statearr_34540_34564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (1))){
var inst_34514 = cljs.core.seq.call(null,coll);
var inst_34515 = inst_34514;
var state_34538__$1 = (function (){var statearr_34541 = state_34538;
(statearr_34541[(7)] = inst_34515);

return statearr_34541;
})();
var statearr_34542_34565 = state_34538__$1;
(statearr_34542_34565[(2)] = null);

(statearr_34542_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (4))){
var inst_34515 = (state_34538[(7)]);
var inst_34518 = cljs.core.first.call(null,inst_34515);
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34538__$1,(7),ch,inst_34518);
} else {
if((state_val_34539 === (13))){
var inst_34532 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34543_34566 = state_34538__$1;
(statearr_34543_34566[(2)] = inst_34532);

(statearr_34543_34566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (6))){
var inst_34523 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
if(cljs.core.truth_(inst_34523)){
var statearr_34544_34567 = state_34538__$1;
(statearr_34544_34567[(1)] = (8));

} else {
var statearr_34545_34568 = state_34538__$1;
(statearr_34545_34568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (3))){
var inst_34536 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34538__$1,inst_34536);
} else {
if((state_val_34539 === (12))){
var state_34538__$1 = state_34538;
var statearr_34546_34569 = state_34538__$1;
(statearr_34546_34569[(2)] = null);

(statearr_34546_34569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (2))){
var inst_34515 = (state_34538[(7)]);
var state_34538__$1 = state_34538;
if(cljs.core.truth_(inst_34515)){
var statearr_34547_34570 = state_34538__$1;
(statearr_34547_34570[(1)] = (4));

} else {
var statearr_34548_34571 = state_34538__$1;
(statearr_34548_34571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (11))){
var inst_34529 = cljs.core.async.close_BANG_.call(null,ch);
var state_34538__$1 = state_34538;
var statearr_34549_34572 = state_34538__$1;
(statearr_34549_34572[(2)] = inst_34529);

(statearr_34549_34572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (9))){
var state_34538__$1 = state_34538;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34550_34573 = state_34538__$1;
(statearr_34550_34573[(1)] = (11));

} else {
var statearr_34551_34574 = state_34538__$1;
(statearr_34551_34574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (5))){
var inst_34515 = (state_34538[(7)]);
var state_34538__$1 = state_34538;
var statearr_34552_34575 = state_34538__$1;
(statearr_34552_34575[(2)] = inst_34515);

(statearr_34552_34575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (10))){
var inst_34534 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34553_34576 = state_34538__$1;
(statearr_34553_34576[(2)] = inst_34534);

(statearr_34553_34576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (8))){
var inst_34515 = (state_34538[(7)]);
var inst_34525 = cljs.core.next.call(null,inst_34515);
var inst_34515__$1 = inst_34525;
var state_34538__$1 = (function (){var statearr_34554 = state_34538;
(statearr_34554[(7)] = inst_34515__$1);

return statearr_34554;
})();
var statearr_34555_34577 = state_34538__$1;
(statearr_34555_34577[(2)] = null);

(statearr_34555_34577[(1)] = (2));


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
});})(c__27964__auto__))
;
return ((function (switch__27902__auto__,c__27964__auto__){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_34559 = [null,null,null,null,null,null,null,null];
(statearr_34559[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_34559[(1)] = (1));

return statearr_34559;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_34538){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e34560){if((e34560 instanceof Object)){
var ex__27906__auto__ = e34560;
var statearr_34561_34578 = state_34538;
(statearr_34561_34578[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_34538;
state_34538 = G__34579;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_34538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_34538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__))
})();
var state__27966__auto__ = (function (){var statearr_34562 = f__27965__auto__.call(null);
(statearr_34562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_34562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__))
);

return c__27964__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj34581 = {};
return obj34581;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__24563__auto__ = _;
if(and__24563__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__24563__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25212__auto__ = (((_ == null))?null:_);
return (function (){var or__24575__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj34583 = {};
return obj34583;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t34805 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34805 = (function (mult,ch,cs,meta34806){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34806 = meta34806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34807,meta34806__$1){
var self__ = this;
var _34807__$1 = this;
return (new cljs.core.async.t34805(self__.mult,self__.ch,self__.cs,meta34806__$1));
});})(cs))
;

cljs.core.async.t34805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34807){
var self__ = this;
var _34807__$1 = this;
return self__.meta34806;
});})(cs))
;

cljs.core.async.t34805.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t34805.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t34805.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t34805.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t34805.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t34805.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34806","meta34806",-1970969599,null)], null);
});})(cs))
;

cljs.core.async.t34805.cljs$lang$type = true;

cljs.core.async.t34805.cljs$lang$ctorStr = "cljs.core.async/t34805";

cljs.core.async.t34805.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t34805");
});})(cs))
;

cljs.core.async.__GT_t34805 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t34805(mult__$1,ch__$1,cs__$1,meta34806){
return (new cljs.core.async.t34805(mult__$1,ch__$1,cs__$1,meta34806));
});})(cs))
;

}

return (new cljs.core.async.t34805(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27964__auto___35026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___35026,cs,m,dchan,dctr,done){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___35026,cs,m,dchan,dctr,done){
return (function (state_34938){
var state_val_34939 = (state_34938[(1)]);
if((state_val_34939 === (7))){
var inst_34934 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34940_35027 = state_34938__$1;
(statearr_34940_35027[(2)] = inst_34934);

(statearr_34940_35027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (20))){
var inst_34839 = (state_34938[(7)]);
var inst_34849 = cljs.core.first.call(null,inst_34839);
var inst_34850 = cljs.core.nth.call(null,inst_34849,(0),null);
var inst_34851 = cljs.core.nth.call(null,inst_34849,(1),null);
var state_34938__$1 = (function (){var statearr_34941 = state_34938;
(statearr_34941[(8)] = inst_34850);

return statearr_34941;
})();
if(cljs.core.truth_(inst_34851)){
var statearr_34942_35028 = state_34938__$1;
(statearr_34942_35028[(1)] = (22));

} else {
var statearr_34943_35029 = state_34938__$1;
(statearr_34943_35029[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (27))){
var inst_34879 = (state_34938[(9)]);
var inst_34810 = (state_34938[(10)]);
var inst_34886 = (state_34938[(11)]);
var inst_34881 = (state_34938[(12)]);
var inst_34886__$1 = cljs.core._nth.call(null,inst_34879,inst_34881);
var inst_34887 = cljs.core.async.put_BANG_.call(null,inst_34886__$1,inst_34810,done);
var state_34938__$1 = (function (){var statearr_34944 = state_34938;
(statearr_34944[(11)] = inst_34886__$1);

return statearr_34944;
})();
if(cljs.core.truth_(inst_34887)){
var statearr_34945_35030 = state_34938__$1;
(statearr_34945_35030[(1)] = (30));

} else {
var statearr_34946_35031 = state_34938__$1;
(statearr_34946_35031[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (1))){
var state_34938__$1 = state_34938;
var statearr_34947_35032 = state_34938__$1;
(statearr_34947_35032[(2)] = null);

(statearr_34947_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (24))){
var inst_34839 = (state_34938[(7)]);
var inst_34856 = (state_34938[(2)]);
var inst_34857 = cljs.core.next.call(null,inst_34839);
var inst_34819 = inst_34857;
var inst_34820 = null;
var inst_34821 = (0);
var inst_34822 = (0);
var state_34938__$1 = (function (){var statearr_34948 = state_34938;
(statearr_34948[(13)] = inst_34856);

(statearr_34948[(14)] = inst_34819);

(statearr_34948[(15)] = inst_34822);

(statearr_34948[(16)] = inst_34821);

(statearr_34948[(17)] = inst_34820);

return statearr_34948;
})();
var statearr_34949_35033 = state_34938__$1;
(statearr_34949_35033[(2)] = null);

(statearr_34949_35033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (39))){
var state_34938__$1 = state_34938;
var statearr_34953_35034 = state_34938__$1;
(statearr_34953_35034[(2)] = null);

(statearr_34953_35034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (4))){
var inst_34810 = (state_34938[(10)]);
var inst_34810__$1 = (state_34938[(2)]);
var inst_34811 = (inst_34810__$1 == null);
var state_34938__$1 = (function (){var statearr_34954 = state_34938;
(statearr_34954[(10)] = inst_34810__$1);

return statearr_34954;
})();
if(cljs.core.truth_(inst_34811)){
var statearr_34955_35035 = state_34938__$1;
(statearr_34955_35035[(1)] = (5));

} else {
var statearr_34956_35036 = state_34938__$1;
(statearr_34956_35036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (15))){
var inst_34819 = (state_34938[(14)]);
var inst_34822 = (state_34938[(15)]);
var inst_34821 = (state_34938[(16)]);
var inst_34820 = (state_34938[(17)]);
var inst_34835 = (state_34938[(2)]);
var inst_34836 = (inst_34822 + (1));
var tmp34950 = inst_34819;
var tmp34951 = inst_34821;
var tmp34952 = inst_34820;
var inst_34819__$1 = tmp34950;
var inst_34820__$1 = tmp34952;
var inst_34821__$1 = tmp34951;
var inst_34822__$1 = inst_34836;
var state_34938__$1 = (function (){var statearr_34957 = state_34938;
(statearr_34957[(18)] = inst_34835);

(statearr_34957[(14)] = inst_34819__$1);

(statearr_34957[(15)] = inst_34822__$1);

(statearr_34957[(16)] = inst_34821__$1);

(statearr_34957[(17)] = inst_34820__$1);

return statearr_34957;
})();
var statearr_34958_35037 = state_34938__$1;
(statearr_34958_35037[(2)] = null);

(statearr_34958_35037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (21))){
var inst_34860 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34962_35038 = state_34938__$1;
(statearr_34962_35038[(2)] = inst_34860);

(statearr_34962_35038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (31))){
var inst_34886 = (state_34938[(11)]);
var inst_34890 = done.call(null,null);
var inst_34891 = cljs.core.async.untap_STAR_.call(null,m,inst_34886);
var state_34938__$1 = (function (){var statearr_34963 = state_34938;
(statearr_34963[(19)] = inst_34890);

return statearr_34963;
})();
var statearr_34964_35039 = state_34938__$1;
(statearr_34964_35039[(2)] = inst_34891);

(statearr_34964_35039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (32))){
var inst_34879 = (state_34938[(9)]);
var inst_34881 = (state_34938[(12)]);
var inst_34878 = (state_34938[(20)]);
var inst_34880 = (state_34938[(21)]);
var inst_34893 = (state_34938[(2)]);
var inst_34894 = (inst_34881 + (1));
var tmp34959 = inst_34879;
var tmp34960 = inst_34878;
var tmp34961 = inst_34880;
var inst_34878__$1 = tmp34960;
var inst_34879__$1 = tmp34959;
var inst_34880__$1 = tmp34961;
var inst_34881__$1 = inst_34894;
var state_34938__$1 = (function (){var statearr_34965 = state_34938;
(statearr_34965[(9)] = inst_34879__$1);

(statearr_34965[(12)] = inst_34881__$1);

(statearr_34965[(20)] = inst_34878__$1);

(statearr_34965[(21)] = inst_34880__$1);

(statearr_34965[(22)] = inst_34893);

return statearr_34965;
})();
var statearr_34966_35040 = state_34938__$1;
(statearr_34966_35040[(2)] = null);

(statearr_34966_35040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (40))){
var inst_34906 = (state_34938[(23)]);
var inst_34910 = done.call(null,null);
var inst_34911 = cljs.core.async.untap_STAR_.call(null,m,inst_34906);
var state_34938__$1 = (function (){var statearr_34967 = state_34938;
(statearr_34967[(24)] = inst_34910);

return statearr_34967;
})();
var statearr_34968_35041 = state_34938__$1;
(statearr_34968_35041[(2)] = inst_34911);

(statearr_34968_35041[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (33))){
var inst_34897 = (state_34938[(25)]);
var inst_34899 = cljs.core.chunked_seq_QMARK_.call(null,inst_34897);
var state_34938__$1 = state_34938;
if(inst_34899){
var statearr_34969_35042 = state_34938__$1;
(statearr_34969_35042[(1)] = (36));

} else {
var statearr_34970_35043 = state_34938__$1;
(statearr_34970_35043[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (13))){
var inst_34829 = (state_34938[(26)]);
var inst_34832 = cljs.core.async.close_BANG_.call(null,inst_34829);
var state_34938__$1 = state_34938;
var statearr_34971_35044 = state_34938__$1;
(statearr_34971_35044[(2)] = inst_34832);

(statearr_34971_35044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (22))){
var inst_34850 = (state_34938[(8)]);
var inst_34853 = cljs.core.async.close_BANG_.call(null,inst_34850);
var state_34938__$1 = state_34938;
var statearr_34972_35045 = state_34938__$1;
(statearr_34972_35045[(2)] = inst_34853);

(statearr_34972_35045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (36))){
var inst_34897 = (state_34938[(25)]);
var inst_34901 = cljs.core.chunk_first.call(null,inst_34897);
var inst_34902 = cljs.core.chunk_rest.call(null,inst_34897);
var inst_34903 = cljs.core.count.call(null,inst_34901);
var inst_34878 = inst_34902;
var inst_34879 = inst_34901;
var inst_34880 = inst_34903;
var inst_34881 = (0);
var state_34938__$1 = (function (){var statearr_34973 = state_34938;
(statearr_34973[(9)] = inst_34879);

(statearr_34973[(12)] = inst_34881);

(statearr_34973[(20)] = inst_34878);

(statearr_34973[(21)] = inst_34880);

return statearr_34973;
})();
var statearr_34974_35046 = state_34938__$1;
(statearr_34974_35046[(2)] = null);

(statearr_34974_35046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (41))){
var inst_34897 = (state_34938[(25)]);
var inst_34913 = (state_34938[(2)]);
var inst_34914 = cljs.core.next.call(null,inst_34897);
var inst_34878 = inst_34914;
var inst_34879 = null;
var inst_34880 = (0);
var inst_34881 = (0);
var state_34938__$1 = (function (){var statearr_34975 = state_34938;
(statearr_34975[(9)] = inst_34879);

(statearr_34975[(27)] = inst_34913);

(statearr_34975[(12)] = inst_34881);

(statearr_34975[(20)] = inst_34878);

(statearr_34975[(21)] = inst_34880);

return statearr_34975;
})();
var statearr_34976_35047 = state_34938__$1;
(statearr_34976_35047[(2)] = null);

(statearr_34976_35047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (43))){
var state_34938__$1 = state_34938;
var statearr_34977_35048 = state_34938__$1;
(statearr_34977_35048[(2)] = null);

(statearr_34977_35048[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (29))){
var inst_34922 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34978_35049 = state_34938__$1;
(statearr_34978_35049[(2)] = inst_34922);

(statearr_34978_35049[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (44))){
var inst_34931 = (state_34938[(2)]);
var state_34938__$1 = (function (){var statearr_34979 = state_34938;
(statearr_34979[(28)] = inst_34931);

return statearr_34979;
})();
var statearr_34980_35050 = state_34938__$1;
(statearr_34980_35050[(2)] = null);

(statearr_34980_35050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (6))){
var inst_34870 = (state_34938[(29)]);
var inst_34869 = cljs.core.deref.call(null,cs);
var inst_34870__$1 = cljs.core.keys.call(null,inst_34869);
var inst_34871 = cljs.core.count.call(null,inst_34870__$1);
var inst_34872 = cljs.core.reset_BANG_.call(null,dctr,inst_34871);
var inst_34877 = cljs.core.seq.call(null,inst_34870__$1);
var inst_34878 = inst_34877;
var inst_34879 = null;
var inst_34880 = (0);
var inst_34881 = (0);
var state_34938__$1 = (function (){var statearr_34981 = state_34938;
(statearr_34981[(9)] = inst_34879);

(statearr_34981[(29)] = inst_34870__$1);

(statearr_34981[(30)] = inst_34872);

(statearr_34981[(12)] = inst_34881);

(statearr_34981[(20)] = inst_34878);

(statearr_34981[(21)] = inst_34880);

return statearr_34981;
})();
var statearr_34982_35051 = state_34938__$1;
(statearr_34982_35051[(2)] = null);

(statearr_34982_35051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (28))){
var inst_34897 = (state_34938[(25)]);
var inst_34878 = (state_34938[(20)]);
var inst_34897__$1 = cljs.core.seq.call(null,inst_34878);
var state_34938__$1 = (function (){var statearr_34983 = state_34938;
(statearr_34983[(25)] = inst_34897__$1);

return statearr_34983;
})();
if(inst_34897__$1){
var statearr_34984_35052 = state_34938__$1;
(statearr_34984_35052[(1)] = (33));

} else {
var statearr_34985_35053 = state_34938__$1;
(statearr_34985_35053[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (25))){
var inst_34881 = (state_34938[(12)]);
var inst_34880 = (state_34938[(21)]);
var inst_34883 = (inst_34881 < inst_34880);
var inst_34884 = inst_34883;
var state_34938__$1 = state_34938;
if(cljs.core.truth_(inst_34884)){
var statearr_34986_35054 = state_34938__$1;
(statearr_34986_35054[(1)] = (27));

} else {
var statearr_34987_35055 = state_34938__$1;
(statearr_34987_35055[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (34))){
var state_34938__$1 = state_34938;
var statearr_34988_35056 = state_34938__$1;
(statearr_34988_35056[(2)] = null);

(statearr_34988_35056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (17))){
var state_34938__$1 = state_34938;
var statearr_34989_35057 = state_34938__$1;
(statearr_34989_35057[(2)] = null);

(statearr_34989_35057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (3))){
var inst_34936 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34938__$1,inst_34936);
} else {
if((state_val_34939 === (12))){
var inst_34865 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34990_35058 = state_34938__$1;
(statearr_34990_35058[(2)] = inst_34865);

(statearr_34990_35058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (2))){
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34938__$1,(4),ch);
} else {
if((state_val_34939 === (23))){
var state_34938__$1 = state_34938;
var statearr_34991_35059 = state_34938__$1;
(statearr_34991_35059[(2)] = null);

(statearr_34991_35059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (35))){
var inst_34920 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34992_35060 = state_34938__$1;
(statearr_34992_35060[(2)] = inst_34920);

(statearr_34992_35060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (19))){
var inst_34839 = (state_34938[(7)]);
var inst_34843 = cljs.core.chunk_first.call(null,inst_34839);
var inst_34844 = cljs.core.chunk_rest.call(null,inst_34839);
var inst_34845 = cljs.core.count.call(null,inst_34843);
var inst_34819 = inst_34844;
var inst_34820 = inst_34843;
var inst_34821 = inst_34845;
var inst_34822 = (0);
var state_34938__$1 = (function (){var statearr_34993 = state_34938;
(statearr_34993[(14)] = inst_34819);

(statearr_34993[(15)] = inst_34822);

(statearr_34993[(16)] = inst_34821);

(statearr_34993[(17)] = inst_34820);

return statearr_34993;
})();
var statearr_34994_35061 = state_34938__$1;
(statearr_34994_35061[(2)] = null);

(statearr_34994_35061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (11))){
var inst_34819 = (state_34938[(14)]);
var inst_34839 = (state_34938[(7)]);
var inst_34839__$1 = cljs.core.seq.call(null,inst_34819);
var state_34938__$1 = (function (){var statearr_34995 = state_34938;
(statearr_34995[(7)] = inst_34839__$1);

return statearr_34995;
})();
if(inst_34839__$1){
var statearr_34996_35062 = state_34938__$1;
(statearr_34996_35062[(1)] = (16));

} else {
var statearr_34997_35063 = state_34938__$1;
(statearr_34997_35063[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (9))){
var inst_34867 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34998_35064 = state_34938__$1;
(statearr_34998_35064[(2)] = inst_34867);

(statearr_34998_35064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (5))){
var inst_34817 = cljs.core.deref.call(null,cs);
var inst_34818 = cljs.core.seq.call(null,inst_34817);
var inst_34819 = inst_34818;
var inst_34820 = null;
var inst_34821 = (0);
var inst_34822 = (0);
var state_34938__$1 = (function (){var statearr_34999 = state_34938;
(statearr_34999[(14)] = inst_34819);

(statearr_34999[(15)] = inst_34822);

(statearr_34999[(16)] = inst_34821);

(statearr_34999[(17)] = inst_34820);

return statearr_34999;
})();
var statearr_35000_35065 = state_34938__$1;
(statearr_35000_35065[(2)] = null);

(statearr_35000_35065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (14))){
var state_34938__$1 = state_34938;
var statearr_35001_35066 = state_34938__$1;
(statearr_35001_35066[(2)] = null);

(statearr_35001_35066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (45))){
var inst_34928 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_35002_35067 = state_34938__$1;
(statearr_35002_35067[(2)] = inst_34928);

(statearr_35002_35067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (26))){
var inst_34870 = (state_34938[(29)]);
var inst_34924 = (state_34938[(2)]);
var inst_34925 = cljs.core.seq.call(null,inst_34870);
var state_34938__$1 = (function (){var statearr_35003 = state_34938;
(statearr_35003[(31)] = inst_34924);

return statearr_35003;
})();
if(inst_34925){
var statearr_35004_35068 = state_34938__$1;
(statearr_35004_35068[(1)] = (42));

} else {
var statearr_35005_35069 = state_34938__$1;
(statearr_35005_35069[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (16))){
var inst_34839 = (state_34938[(7)]);
var inst_34841 = cljs.core.chunked_seq_QMARK_.call(null,inst_34839);
var state_34938__$1 = state_34938;
if(inst_34841){
var statearr_35006_35070 = state_34938__$1;
(statearr_35006_35070[(1)] = (19));

} else {
var statearr_35007_35071 = state_34938__$1;
(statearr_35007_35071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (38))){
var inst_34917 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_35008_35072 = state_34938__$1;
(statearr_35008_35072[(2)] = inst_34917);

(statearr_35008_35072[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (30))){
var state_34938__$1 = state_34938;
var statearr_35009_35073 = state_34938__$1;
(statearr_35009_35073[(2)] = null);

(statearr_35009_35073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (10))){
var inst_34822 = (state_34938[(15)]);
var inst_34820 = (state_34938[(17)]);
var inst_34828 = cljs.core._nth.call(null,inst_34820,inst_34822);
var inst_34829 = cljs.core.nth.call(null,inst_34828,(0),null);
var inst_34830 = cljs.core.nth.call(null,inst_34828,(1),null);
var state_34938__$1 = (function (){var statearr_35010 = state_34938;
(statearr_35010[(26)] = inst_34829);

return statearr_35010;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_35011_35074 = state_34938__$1;
(statearr_35011_35074[(1)] = (13));

} else {
var statearr_35012_35075 = state_34938__$1;
(statearr_35012_35075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (18))){
var inst_34863 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_35013_35076 = state_34938__$1;
(statearr_35013_35076[(2)] = inst_34863);

(statearr_35013_35076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (42))){
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34938__$1,(45),dchan);
} else {
if((state_val_34939 === (37))){
var inst_34810 = (state_34938[(10)]);
var inst_34897 = (state_34938[(25)]);
var inst_34906 = (state_34938[(23)]);
var inst_34906__$1 = cljs.core.first.call(null,inst_34897);
var inst_34907 = cljs.core.async.put_BANG_.call(null,inst_34906__$1,inst_34810,done);
var state_34938__$1 = (function (){var statearr_35014 = state_34938;
(statearr_35014[(23)] = inst_34906__$1);

return statearr_35014;
})();
if(cljs.core.truth_(inst_34907)){
var statearr_35015_35077 = state_34938__$1;
(statearr_35015_35077[(1)] = (39));

} else {
var statearr_35016_35078 = state_34938__$1;
(statearr_35016_35078[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (8))){
var inst_34822 = (state_34938[(15)]);
var inst_34821 = (state_34938[(16)]);
var inst_34824 = (inst_34822 < inst_34821);
var inst_34825 = inst_34824;
var state_34938__$1 = state_34938;
if(cljs.core.truth_(inst_34825)){
var statearr_35017_35079 = state_34938__$1;
(statearr_35017_35079[(1)] = (10));

} else {
var statearr_35018_35080 = state_34938__$1;
(statearr_35018_35080[(1)] = (11));

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
});})(c__27964__auto___35026,cs,m,dchan,dctr,done))
;
return ((function (switch__27902__auto__,c__27964__auto___35026,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27903__auto__ = null;
var cljs$core$async$mult_$_state_machine__27903__auto____0 = (function (){
var statearr_35022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35022[(0)] = cljs$core$async$mult_$_state_machine__27903__auto__);

(statearr_35022[(1)] = (1));

return statearr_35022;
});
var cljs$core$async$mult_$_state_machine__27903__auto____1 = (function (state_34938){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_34938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e35023){if((e35023 instanceof Object)){
var ex__27906__auto__ = e35023;
var statearr_35024_35081 = state_34938;
(statearr_35024_35081[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35082 = state_34938;
state_34938 = G__35082;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27903__auto__ = function(state_34938){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27903__auto____1.call(this,state_34938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27903__auto____0;
cljs$core$async$mult_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27903__auto____1;
return cljs$core$async$mult_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___35026,cs,m,dchan,dctr,done))
})();
var state__27966__auto__ = (function (){var statearr_35025 = f__27965__auto__.call(null);
(statearr_35025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___35026);

return statearr_35025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___35026,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__35084 = arguments.length;
switch (G__35084) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj35087 = {};
return obj35087;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__24563__auto__ = m;
if(and__24563__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__24563__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25212__auto__ = (((m == null))?null:m);
return (function (){var or__24575__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__25616__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25616__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35092){
var map__35093 = p__35092;
var map__35093__$1 = ((cljs.core.seq_QMARK_.call(null,map__35093))?cljs.core.apply.call(null,cljs.core.hash_map,map__35093):map__35093);
var opts = map__35093__$1;
var statearr_35094_35097 = state;
(statearr_35094_35097[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__35093,map__35093__$1,opts){
return (function (val){
var statearr_35095_35098 = state;
(statearr_35095_35098[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35093,map__35093__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_35096_35099 = state;
(statearr_35096_35099[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35088){
var G__35089 = cljs.core.first.call(null,seq35088);
var seq35088__$1 = cljs.core.next.call(null,seq35088);
var G__35090 = cljs.core.first.call(null,seq35088__$1);
var seq35088__$2 = cljs.core.next.call(null,seq35088__$1);
var G__35091 = cljs.core.first.call(null,seq35088__$2);
var seq35088__$3 = cljs.core.next.call(null,seq35088__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35089,G__35090,G__35091,seq35088__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t35219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35219 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35220){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35220 = meta35220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35221,meta35220__$1){
var self__ = this;
var _35221__$1 = this;
return (new cljs.core.async.t35219(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35220__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35221){
var self__ = this;
var _35221__$1 = this;
return self__.meta35220;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t35219.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35220","meta35220",128034578,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35219.cljs$lang$type = true;

cljs.core.async.t35219.cljs$lang$ctorStr = "cljs.core.async/t35219";

cljs.core.async.t35219.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t35219");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t35219 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t35219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35220){
return (new cljs.core.async.t35219(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35220));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t35219(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27964__auto___35338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___35338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___35338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35291){
var state_val_35292 = (state_35291[(1)]);
if((state_val_35292 === (7))){
var inst_35235 = (state_35291[(7)]);
var inst_35240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35235);
var state_35291__$1 = state_35291;
var statearr_35293_35339 = state_35291__$1;
(statearr_35293_35339[(2)] = inst_35240);

(statearr_35293_35339[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (20))){
var inst_35250 = (state_35291[(8)]);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35291__$1,(23),out,inst_35250);
} else {
if((state_val_35292 === (1))){
var inst_35225 = (state_35291[(9)]);
var inst_35225__$1 = calc_state.call(null);
var inst_35226 = cljs.core.seq_QMARK_.call(null,inst_35225__$1);
var state_35291__$1 = (function (){var statearr_35294 = state_35291;
(statearr_35294[(9)] = inst_35225__$1);

return statearr_35294;
})();
if(inst_35226){
var statearr_35295_35340 = state_35291__$1;
(statearr_35295_35340[(1)] = (2));

} else {
var statearr_35296_35341 = state_35291__$1;
(statearr_35296_35341[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (24))){
var inst_35243 = (state_35291[(10)]);
var inst_35235 = inst_35243;
var state_35291__$1 = (function (){var statearr_35297 = state_35291;
(statearr_35297[(7)] = inst_35235);

return statearr_35297;
})();
var statearr_35298_35342 = state_35291__$1;
(statearr_35298_35342[(2)] = null);

(statearr_35298_35342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (4))){
var inst_35225 = (state_35291[(9)]);
var inst_35231 = (state_35291[(2)]);
var inst_35232 = cljs.core.get.call(null,inst_35231,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35233 = cljs.core.get.call(null,inst_35231,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35234 = cljs.core.get.call(null,inst_35231,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35235 = inst_35225;
var state_35291__$1 = (function (){var statearr_35299 = state_35291;
(statearr_35299[(11)] = inst_35232);

(statearr_35299[(7)] = inst_35235);

(statearr_35299[(12)] = inst_35233);

(statearr_35299[(13)] = inst_35234);

return statearr_35299;
})();
var statearr_35300_35343 = state_35291__$1;
(statearr_35300_35343[(2)] = null);

(statearr_35300_35343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (15))){
var state_35291__$1 = state_35291;
var statearr_35301_35344 = state_35291__$1;
(statearr_35301_35344[(2)] = null);

(statearr_35301_35344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (21))){
var inst_35243 = (state_35291[(10)]);
var inst_35235 = inst_35243;
var state_35291__$1 = (function (){var statearr_35302 = state_35291;
(statearr_35302[(7)] = inst_35235);

return statearr_35302;
})();
var statearr_35303_35345 = state_35291__$1;
(statearr_35303_35345[(2)] = null);

(statearr_35303_35345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (13))){
var inst_35287 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35304_35346 = state_35291__$1;
(statearr_35304_35346[(2)] = inst_35287);

(statearr_35304_35346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (22))){
var inst_35285 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35305_35347 = state_35291__$1;
(statearr_35305_35347[(2)] = inst_35285);

(statearr_35305_35347[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (6))){
var inst_35289 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35291__$1,inst_35289);
} else {
if((state_val_35292 === (25))){
var state_35291__$1 = state_35291;
var statearr_35306_35348 = state_35291__$1;
(statearr_35306_35348[(2)] = null);

(statearr_35306_35348[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (17))){
var inst_35265 = (state_35291[(14)]);
var state_35291__$1 = state_35291;
var statearr_35307_35349 = state_35291__$1;
(statearr_35307_35349[(2)] = inst_35265);

(statearr_35307_35349[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (3))){
var inst_35225 = (state_35291[(9)]);
var state_35291__$1 = state_35291;
var statearr_35308_35350 = state_35291__$1;
(statearr_35308_35350[(2)] = inst_35225);

(statearr_35308_35350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (12))){
var inst_35265 = (state_35291[(14)]);
var inst_35251 = (state_35291[(15)]);
var inst_35244 = (state_35291[(16)]);
var inst_35265__$1 = inst_35244.call(null,inst_35251);
var state_35291__$1 = (function (){var statearr_35309 = state_35291;
(statearr_35309[(14)] = inst_35265__$1);

return statearr_35309;
})();
if(cljs.core.truth_(inst_35265__$1)){
var statearr_35310_35351 = state_35291__$1;
(statearr_35310_35351[(1)] = (17));

} else {
var statearr_35311_35352 = state_35291__$1;
(statearr_35311_35352[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (2))){
var inst_35225 = (state_35291[(9)]);
var inst_35228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35225);
var state_35291__$1 = state_35291;
var statearr_35312_35353 = state_35291__$1;
(statearr_35312_35353[(2)] = inst_35228);

(statearr_35312_35353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (23))){
var inst_35276 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35276)){
var statearr_35313_35354 = state_35291__$1;
(statearr_35313_35354[(1)] = (24));

} else {
var statearr_35314_35355 = state_35291__$1;
(statearr_35314_35355[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (19))){
var inst_35273 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35273)){
var statearr_35315_35356 = state_35291__$1;
(statearr_35315_35356[(1)] = (20));

} else {
var statearr_35316_35357 = state_35291__$1;
(statearr_35316_35357[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (11))){
var inst_35250 = (state_35291[(8)]);
var inst_35256 = (inst_35250 == null);
var state_35291__$1 = state_35291;
if(cljs.core.truth_(inst_35256)){
var statearr_35317_35358 = state_35291__$1;
(statearr_35317_35358[(1)] = (14));

} else {
var statearr_35318_35359 = state_35291__$1;
(statearr_35318_35359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (9))){
var inst_35243 = (state_35291[(10)]);
var inst_35243__$1 = (state_35291[(2)]);
var inst_35244 = cljs.core.get.call(null,inst_35243__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35245 = cljs.core.get.call(null,inst_35243__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35246 = cljs.core.get.call(null,inst_35243__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35291__$1 = (function (){var statearr_35319 = state_35291;
(statearr_35319[(17)] = inst_35245);

(statearr_35319[(10)] = inst_35243__$1);

(statearr_35319[(16)] = inst_35244);

return statearr_35319;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35291__$1,(10),inst_35246);
} else {
if((state_val_35292 === (5))){
var inst_35235 = (state_35291[(7)]);
var inst_35238 = cljs.core.seq_QMARK_.call(null,inst_35235);
var state_35291__$1 = state_35291;
if(inst_35238){
var statearr_35320_35360 = state_35291__$1;
(statearr_35320_35360[(1)] = (7));

} else {
var statearr_35321_35361 = state_35291__$1;
(statearr_35321_35361[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (14))){
var inst_35251 = (state_35291[(15)]);
var inst_35258 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35251);
var state_35291__$1 = state_35291;
var statearr_35322_35362 = state_35291__$1;
(statearr_35322_35362[(2)] = inst_35258);

(statearr_35322_35362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (26))){
var inst_35281 = (state_35291[(2)]);
var state_35291__$1 = state_35291;
var statearr_35323_35363 = state_35291__$1;
(statearr_35323_35363[(2)] = inst_35281);

(statearr_35323_35363[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (16))){
var inst_35261 = (state_35291[(2)]);
var inst_35262 = calc_state.call(null);
var inst_35235 = inst_35262;
var state_35291__$1 = (function (){var statearr_35324 = state_35291;
(statearr_35324[(18)] = inst_35261);

(statearr_35324[(7)] = inst_35235);

return statearr_35324;
})();
var statearr_35325_35364 = state_35291__$1;
(statearr_35325_35364[(2)] = null);

(statearr_35325_35364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (10))){
var inst_35250 = (state_35291[(8)]);
var inst_35251 = (state_35291[(15)]);
var inst_35249 = (state_35291[(2)]);
var inst_35250__$1 = cljs.core.nth.call(null,inst_35249,(0),null);
var inst_35251__$1 = cljs.core.nth.call(null,inst_35249,(1),null);
var inst_35252 = (inst_35250__$1 == null);
var inst_35253 = cljs.core._EQ_.call(null,inst_35251__$1,change);
var inst_35254 = (inst_35252) || (inst_35253);
var state_35291__$1 = (function (){var statearr_35326 = state_35291;
(statearr_35326[(8)] = inst_35250__$1);

(statearr_35326[(15)] = inst_35251__$1);

return statearr_35326;
})();
if(cljs.core.truth_(inst_35254)){
var statearr_35327_35365 = state_35291__$1;
(statearr_35327_35365[(1)] = (11));

} else {
var statearr_35328_35366 = state_35291__$1;
(statearr_35328_35366[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (18))){
var inst_35251 = (state_35291[(15)]);
var inst_35245 = (state_35291[(17)]);
var inst_35244 = (state_35291[(16)]);
var inst_35268 = cljs.core.empty_QMARK_.call(null,inst_35244);
var inst_35269 = inst_35245.call(null,inst_35251);
var inst_35270 = cljs.core.not.call(null,inst_35269);
var inst_35271 = (inst_35268) && (inst_35270);
var state_35291__$1 = state_35291;
var statearr_35329_35367 = state_35291__$1;
(statearr_35329_35367[(2)] = inst_35271);

(statearr_35329_35367[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35292 === (8))){
var inst_35235 = (state_35291[(7)]);
var state_35291__$1 = state_35291;
var statearr_35330_35368 = state_35291__$1;
(statearr_35330_35368[(2)] = inst_35235);

(statearr_35330_35368[(1)] = (9));


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
});})(c__27964__auto___35338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27902__auto__,c__27964__auto___35338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27903__auto__ = null;
var cljs$core$async$mix_$_state_machine__27903__auto____0 = (function (){
var statearr_35334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35334[(0)] = cljs$core$async$mix_$_state_machine__27903__auto__);

(statearr_35334[(1)] = (1));

return statearr_35334;
});
var cljs$core$async$mix_$_state_machine__27903__auto____1 = (function (state_35291){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_35291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e35335){if((e35335 instanceof Object)){
var ex__27906__auto__ = e35335;
var statearr_35336_35369 = state_35291;
(statearr_35336_35369[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35370 = state_35291;
state_35291 = G__35370;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27903__auto__ = function(state_35291){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27903__auto____1.call(this,state_35291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27903__auto____0;
cljs$core$async$mix_$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27903__auto____1;
return cljs$core$async$mix_$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___35338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27966__auto__ = (function (){var statearr_35337 = f__27965__auto__.call(null);
(statearr_35337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___35338);

return statearr_35337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___35338,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj35372 = {};
return obj35372;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__24563__auto__ = p;
if(and__24563__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__24563__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25212__auto__ = (((p == null))?null:p);
return (function (){var or__24575__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__24563__auto__ = p;
if(and__24563__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__24563__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25212__auto__ = (((p == null))?null:p);
return (function (){var or__24575__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__35374 = arguments.length;
switch (G__35374) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__24563__auto__ = p;
if(and__24563__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__24563__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25212__auto__ = (((p == null))?null:p);
return (function (){var or__24575__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__24563__auto__ = p;
if(and__24563__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__24563__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25212__auto__ = (((p == null))?null:p);
return (function (){var or__24575__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25212__auto__)]);
if(or__24575__auto__){
return or__24575__auto__;
} else {
var or__24575__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__24575__auto____$1){
return or__24575__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__35378 = arguments.length;
switch (G__35378) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24575__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24575__auto__)){
return or__24575__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24575__auto__,mults){
return (function (p1__35376_SHARP_){
if(cljs.core.truth_(p1__35376_SHARP_.call(null,topic))){
return p1__35376_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35376_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24575__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t35379 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35379 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35380){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35380 = meta35380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35381,meta35380__$1){
var self__ = this;
var _35381__$1 = this;
return (new cljs.core.async.t35379(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35380__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t35379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35381){
var self__ = this;
var _35381__$1 = this;
return self__.meta35380;
});})(mults,ensure_mult))
;

cljs.core.async.t35379.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t35379.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t35379.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t35379.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t35379.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t35379.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t35379.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35380","meta35380",1148363522,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t35379.cljs$lang$type = true;

cljs.core.async.t35379.cljs$lang$ctorStr = "cljs.core.async/t35379";

cljs.core.async.t35379.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t35379");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t35379 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t35379(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35380){
return (new cljs.core.async.t35379(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35380));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t35379(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27964__auto___35502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___35502,mults,ensure_mult,p){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___35502,mults,ensure_mult,p){
return (function (state_35453){
var state_val_35454 = (state_35453[(1)]);
if((state_val_35454 === (7))){
var inst_35449 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
var statearr_35455_35503 = state_35453__$1;
(statearr_35455_35503[(2)] = inst_35449);

(statearr_35455_35503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (20))){
var state_35453__$1 = state_35453;
var statearr_35456_35504 = state_35453__$1;
(statearr_35456_35504[(2)] = null);

(statearr_35456_35504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (1))){
var state_35453__$1 = state_35453;
var statearr_35457_35505 = state_35453__$1;
(statearr_35457_35505[(2)] = null);

(statearr_35457_35505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (24))){
var inst_35432 = (state_35453[(7)]);
var inst_35441 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35432);
var state_35453__$1 = state_35453;
var statearr_35458_35506 = state_35453__$1;
(statearr_35458_35506[(2)] = inst_35441);

(statearr_35458_35506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (4))){
var inst_35384 = (state_35453[(8)]);
var inst_35384__$1 = (state_35453[(2)]);
var inst_35385 = (inst_35384__$1 == null);
var state_35453__$1 = (function (){var statearr_35459 = state_35453;
(statearr_35459[(8)] = inst_35384__$1);

return statearr_35459;
})();
if(cljs.core.truth_(inst_35385)){
var statearr_35460_35507 = state_35453__$1;
(statearr_35460_35507[(1)] = (5));

} else {
var statearr_35461_35508 = state_35453__$1;
(statearr_35461_35508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (15))){
var inst_35426 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
var statearr_35462_35509 = state_35453__$1;
(statearr_35462_35509[(2)] = inst_35426);

(statearr_35462_35509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (21))){
var inst_35446 = (state_35453[(2)]);
var state_35453__$1 = (function (){var statearr_35463 = state_35453;
(statearr_35463[(9)] = inst_35446);

return statearr_35463;
})();
var statearr_35464_35510 = state_35453__$1;
(statearr_35464_35510[(2)] = null);

(statearr_35464_35510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (13))){
var inst_35408 = (state_35453[(10)]);
var inst_35410 = cljs.core.chunked_seq_QMARK_.call(null,inst_35408);
var state_35453__$1 = state_35453;
if(inst_35410){
var statearr_35465_35511 = state_35453__$1;
(statearr_35465_35511[(1)] = (16));

} else {
var statearr_35466_35512 = state_35453__$1;
(statearr_35466_35512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (22))){
var inst_35438 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
if(cljs.core.truth_(inst_35438)){
var statearr_35467_35513 = state_35453__$1;
(statearr_35467_35513[(1)] = (23));

} else {
var statearr_35468_35514 = state_35453__$1;
(statearr_35468_35514[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (6))){
var inst_35434 = (state_35453[(11)]);
var inst_35384 = (state_35453[(8)]);
var inst_35432 = (state_35453[(7)]);
var inst_35432__$1 = topic_fn.call(null,inst_35384);
var inst_35433 = cljs.core.deref.call(null,mults);
var inst_35434__$1 = cljs.core.get.call(null,inst_35433,inst_35432__$1);
var state_35453__$1 = (function (){var statearr_35469 = state_35453;
(statearr_35469[(11)] = inst_35434__$1);

(statearr_35469[(7)] = inst_35432__$1);

return statearr_35469;
})();
if(cljs.core.truth_(inst_35434__$1)){
var statearr_35470_35515 = state_35453__$1;
(statearr_35470_35515[(1)] = (19));

} else {
var statearr_35471_35516 = state_35453__$1;
(statearr_35471_35516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (25))){
var inst_35443 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
var statearr_35472_35517 = state_35453__$1;
(statearr_35472_35517[(2)] = inst_35443);

(statearr_35472_35517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (17))){
var inst_35408 = (state_35453[(10)]);
var inst_35417 = cljs.core.first.call(null,inst_35408);
var inst_35418 = cljs.core.async.muxch_STAR_.call(null,inst_35417);
var inst_35419 = cljs.core.async.close_BANG_.call(null,inst_35418);
var inst_35420 = cljs.core.next.call(null,inst_35408);
var inst_35394 = inst_35420;
var inst_35395 = null;
var inst_35396 = (0);
var inst_35397 = (0);
var state_35453__$1 = (function (){var statearr_35473 = state_35453;
(statearr_35473[(12)] = inst_35396);

(statearr_35473[(13)] = inst_35419);

(statearr_35473[(14)] = inst_35395);

(statearr_35473[(15)] = inst_35394);

(statearr_35473[(16)] = inst_35397);

return statearr_35473;
})();
var statearr_35474_35518 = state_35453__$1;
(statearr_35474_35518[(2)] = null);

(statearr_35474_35518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (3))){
var inst_35451 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35453__$1,inst_35451);
} else {
if((state_val_35454 === (12))){
var inst_35428 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
var statearr_35475_35519 = state_35453__$1;
(statearr_35475_35519[(2)] = inst_35428);

(statearr_35475_35519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (2))){
var state_35453__$1 = state_35453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35453__$1,(4),ch);
} else {
if((state_val_35454 === (23))){
var state_35453__$1 = state_35453;
var statearr_35476_35520 = state_35453__$1;
(statearr_35476_35520[(2)] = null);

(statearr_35476_35520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (19))){
var inst_35434 = (state_35453[(11)]);
var inst_35384 = (state_35453[(8)]);
var inst_35436 = cljs.core.async.muxch_STAR_.call(null,inst_35434);
var state_35453__$1 = state_35453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35453__$1,(22),inst_35436,inst_35384);
} else {
if((state_val_35454 === (11))){
var inst_35408 = (state_35453[(10)]);
var inst_35394 = (state_35453[(15)]);
var inst_35408__$1 = cljs.core.seq.call(null,inst_35394);
var state_35453__$1 = (function (){var statearr_35477 = state_35453;
(statearr_35477[(10)] = inst_35408__$1);

return statearr_35477;
})();
if(inst_35408__$1){
var statearr_35478_35521 = state_35453__$1;
(statearr_35478_35521[(1)] = (13));

} else {
var statearr_35479_35522 = state_35453__$1;
(statearr_35479_35522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (9))){
var inst_35430 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
var statearr_35480_35523 = state_35453__$1;
(statearr_35480_35523[(2)] = inst_35430);

(statearr_35480_35523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (5))){
var inst_35391 = cljs.core.deref.call(null,mults);
var inst_35392 = cljs.core.vals.call(null,inst_35391);
var inst_35393 = cljs.core.seq.call(null,inst_35392);
var inst_35394 = inst_35393;
var inst_35395 = null;
var inst_35396 = (0);
var inst_35397 = (0);
var state_35453__$1 = (function (){var statearr_35481 = state_35453;
(statearr_35481[(12)] = inst_35396);

(statearr_35481[(14)] = inst_35395);

(statearr_35481[(15)] = inst_35394);

(statearr_35481[(16)] = inst_35397);

return statearr_35481;
})();
var statearr_35482_35524 = state_35453__$1;
(statearr_35482_35524[(2)] = null);

(statearr_35482_35524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (14))){
var state_35453__$1 = state_35453;
var statearr_35486_35525 = state_35453__$1;
(statearr_35486_35525[(2)] = null);

(statearr_35486_35525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (16))){
var inst_35408 = (state_35453[(10)]);
var inst_35412 = cljs.core.chunk_first.call(null,inst_35408);
var inst_35413 = cljs.core.chunk_rest.call(null,inst_35408);
var inst_35414 = cljs.core.count.call(null,inst_35412);
var inst_35394 = inst_35413;
var inst_35395 = inst_35412;
var inst_35396 = inst_35414;
var inst_35397 = (0);
var state_35453__$1 = (function (){var statearr_35487 = state_35453;
(statearr_35487[(12)] = inst_35396);

(statearr_35487[(14)] = inst_35395);

(statearr_35487[(15)] = inst_35394);

(statearr_35487[(16)] = inst_35397);

return statearr_35487;
})();
var statearr_35488_35526 = state_35453__$1;
(statearr_35488_35526[(2)] = null);

(statearr_35488_35526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (10))){
var inst_35396 = (state_35453[(12)]);
var inst_35395 = (state_35453[(14)]);
var inst_35394 = (state_35453[(15)]);
var inst_35397 = (state_35453[(16)]);
var inst_35402 = cljs.core._nth.call(null,inst_35395,inst_35397);
var inst_35403 = cljs.core.async.muxch_STAR_.call(null,inst_35402);
var inst_35404 = cljs.core.async.close_BANG_.call(null,inst_35403);
var inst_35405 = (inst_35397 + (1));
var tmp35483 = inst_35396;
var tmp35484 = inst_35395;
var tmp35485 = inst_35394;
var inst_35394__$1 = tmp35485;
var inst_35395__$1 = tmp35484;
var inst_35396__$1 = tmp35483;
var inst_35397__$1 = inst_35405;
var state_35453__$1 = (function (){var statearr_35489 = state_35453;
(statearr_35489[(12)] = inst_35396__$1);

(statearr_35489[(14)] = inst_35395__$1);

(statearr_35489[(15)] = inst_35394__$1);

(statearr_35489[(17)] = inst_35404);

(statearr_35489[(16)] = inst_35397__$1);

return statearr_35489;
})();
var statearr_35490_35527 = state_35453__$1;
(statearr_35490_35527[(2)] = null);

(statearr_35490_35527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (18))){
var inst_35423 = (state_35453[(2)]);
var state_35453__$1 = state_35453;
var statearr_35491_35528 = state_35453__$1;
(statearr_35491_35528[(2)] = inst_35423);

(statearr_35491_35528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35454 === (8))){
var inst_35396 = (state_35453[(12)]);
var inst_35397 = (state_35453[(16)]);
var inst_35399 = (inst_35397 < inst_35396);
var inst_35400 = inst_35399;
var state_35453__$1 = state_35453;
if(cljs.core.truth_(inst_35400)){
var statearr_35492_35529 = state_35453__$1;
(statearr_35492_35529[(1)] = (10));

} else {
var statearr_35493_35530 = state_35453__$1;
(statearr_35493_35530[(1)] = (11));

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
});})(c__27964__auto___35502,mults,ensure_mult,p))
;
return ((function (switch__27902__auto__,c__27964__auto___35502,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_35497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35497[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_35497[(1)] = (1));

return statearr_35497;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_35453){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_35453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e35498){if((e35498 instanceof Object)){
var ex__27906__auto__ = e35498;
var statearr_35499_35531 = state_35453;
(statearr_35499_35531[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35532 = state_35453;
state_35453 = G__35532;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_35453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_35453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___35502,mults,ensure_mult,p))
})();
var state__27966__auto__ = (function (){var statearr_35500 = f__27965__auto__.call(null);
(statearr_35500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___35502);

return statearr_35500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___35502,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__35534 = arguments.length;
switch (G__35534) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__35537 = arguments.length;
switch (G__35537) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__35540 = arguments.length;
switch (G__35540) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27964__auto___35610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___35610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___35610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35579){
var state_val_35580 = (state_35579[(1)]);
if((state_val_35580 === (7))){
var state_35579__$1 = state_35579;
var statearr_35581_35611 = state_35579__$1;
(statearr_35581_35611[(2)] = null);

(statearr_35581_35611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (1))){
var state_35579__$1 = state_35579;
var statearr_35582_35612 = state_35579__$1;
(statearr_35582_35612[(2)] = null);

(statearr_35582_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (4))){
var inst_35543 = (state_35579[(7)]);
var inst_35545 = (inst_35543 < cnt);
var state_35579__$1 = state_35579;
if(cljs.core.truth_(inst_35545)){
var statearr_35583_35613 = state_35579__$1;
(statearr_35583_35613[(1)] = (6));

} else {
var statearr_35584_35614 = state_35579__$1;
(statearr_35584_35614[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (15))){
var inst_35575 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
var statearr_35585_35615 = state_35579__$1;
(statearr_35585_35615[(2)] = inst_35575);

(statearr_35585_35615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (13))){
var inst_35568 = cljs.core.async.close_BANG_.call(null,out);
var state_35579__$1 = state_35579;
var statearr_35586_35616 = state_35579__$1;
(statearr_35586_35616[(2)] = inst_35568);

(statearr_35586_35616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (6))){
var state_35579__$1 = state_35579;
var statearr_35587_35617 = state_35579__$1;
(statearr_35587_35617[(2)] = null);

(statearr_35587_35617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (3))){
var inst_35577 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35579__$1,inst_35577);
} else {
if((state_val_35580 === (12))){
var inst_35565 = (state_35579[(8)]);
var inst_35565__$1 = (state_35579[(2)]);
var inst_35566 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35565__$1);
var state_35579__$1 = (function (){var statearr_35588 = state_35579;
(statearr_35588[(8)] = inst_35565__$1);

return statearr_35588;
})();
if(cljs.core.truth_(inst_35566)){
var statearr_35589_35618 = state_35579__$1;
(statearr_35589_35618[(1)] = (13));

} else {
var statearr_35590_35619 = state_35579__$1;
(statearr_35590_35619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (2))){
var inst_35542 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35543 = (0);
var state_35579__$1 = (function (){var statearr_35591 = state_35579;
(statearr_35591[(9)] = inst_35542);

(statearr_35591[(7)] = inst_35543);

return statearr_35591;
})();
var statearr_35592_35620 = state_35579__$1;
(statearr_35592_35620[(2)] = null);

(statearr_35592_35620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (11))){
var inst_35543 = (state_35579[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35579,(10),Object,null,(9));
var inst_35552 = chs__$1.call(null,inst_35543);
var inst_35553 = done.call(null,inst_35543);
var inst_35554 = cljs.core.async.take_BANG_.call(null,inst_35552,inst_35553);
var state_35579__$1 = state_35579;
var statearr_35593_35621 = state_35579__$1;
(statearr_35593_35621[(2)] = inst_35554);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (9))){
var inst_35543 = (state_35579[(7)]);
var inst_35556 = (state_35579[(2)]);
var inst_35557 = (inst_35543 + (1));
var inst_35543__$1 = inst_35557;
var state_35579__$1 = (function (){var statearr_35594 = state_35579;
(statearr_35594[(7)] = inst_35543__$1);

(statearr_35594[(10)] = inst_35556);

return statearr_35594;
})();
var statearr_35595_35622 = state_35579__$1;
(statearr_35595_35622[(2)] = null);

(statearr_35595_35622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (5))){
var inst_35563 = (state_35579[(2)]);
var state_35579__$1 = (function (){var statearr_35596 = state_35579;
(statearr_35596[(11)] = inst_35563);

return statearr_35596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35579__$1,(12),dchan);
} else {
if((state_val_35580 === (14))){
var inst_35565 = (state_35579[(8)]);
var inst_35570 = cljs.core.apply.call(null,f,inst_35565);
var state_35579__$1 = state_35579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35579__$1,(16),out,inst_35570);
} else {
if((state_val_35580 === (16))){
var inst_35572 = (state_35579[(2)]);
var state_35579__$1 = (function (){var statearr_35597 = state_35579;
(statearr_35597[(12)] = inst_35572);

return statearr_35597;
})();
var statearr_35598_35623 = state_35579__$1;
(statearr_35598_35623[(2)] = null);

(statearr_35598_35623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (10))){
var inst_35547 = (state_35579[(2)]);
var inst_35548 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35579__$1 = (function (){var statearr_35599 = state_35579;
(statearr_35599[(13)] = inst_35547);

return statearr_35599;
})();
var statearr_35600_35624 = state_35579__$1;
(statearr_35600_35624[(2)] = inst_35548);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35579__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35580 === (8))){
var inst_35561 = (state_35579[(2)]);
var state_35579__$1 = state_35579;
var statearr_35601_35625 = state_35579__$1;
(statearr_35601_35625[(2)] = inst_35561);

(statearr_35601_35625[(1)] = (5));


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
});})(c__27964__auto___35610,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27902__auto__,c__27964__auto___35610,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_35605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35605[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_35605[(1)] = (1));

return statearr_35605;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_35579){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_35579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e35606){if((e35606 instanceof Object)){
var ex__27906__auto__ = e35606;
var statearr_35607_35626 = state_35579;
(statearr_35607_35626[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35627 = state_35579;
state_35579 = G__35627;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_35579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_35579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___35610,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27966__auto__ = (function (){var statearr_35608 = f__27965__auto__.call(null);
(statearr_35608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___35610);

return statearr_35608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___35610,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__35630 = arguments.length;
switch (G__35630) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27964__auto___35685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___35685,out){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___35685,out){
return (function (state_35660){
var state_val_35661 = (state_35660[(1)]);
if((state_val_35661 === (7))){
var inst_35639 = (state_35660[(7)]);
var inst_35640 = (state_35660[(8)]);
var inst_35639__$1 = (state_35660[(2)]);
var inst_35640__$1 = cljs.core.nth.call(null,inst_35639__$1,(0),null);
var inst_35641 = cljs.core.nth.call(null,inst_35639__$1,(1),null);
var inst_35642 = (inst_35640__$1 == null);
var state_35660__$1 = (function (){var statearr_35662 = state_35660;
(statearr_35662[(9)] = inst_35641);

(statearr_35662[(7)] = inst_35639__$1);

(statearr_35662[(8)] = inst_35640__$1);

return statearr_35662;
})();
if(cljs.core.truth_(inst_35642)){
var statearr_35663_35686 = state_35660__$1;
(statearr_35663_35686[(1)] = (8));

} else {
var statearr_35664_35687 = state_35660__$1;
(statearr_35664_35687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35661 === (1))){
var inst_35631 = cljs.core.vec.call(null,chs);
var inst_35632 = inst_35631;
var state_35660__$1 = (function (){var statearr_35665 = state_35660;
(statearr_35665[(10)] = inst_35632);

return statearr_35665;
})();
var statearr_35666_35688 = state_35660__$1;
(statearr_35666_35688[(2)] = null);

(statearr_35666_35688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35661 === (4))){
var inst_35632 = (state_35660[(10)]);
var state_35660__$1 = state_35660;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35660__$1,(7),inst_35632);
} else {
if((state_val_35661 === (6))){
var inst_35656 = (state_35660[(2)]);
var state_35660__$1 = state_35660;
var statearr_35667_35689 = state_35660__$1;
(statearr_35667_35689[(2)] = inst_35656);

(statearr_35667_35689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35661 === (3))){
var inst_35658 = (state_35660[(2)]);
var state_35660__$1 = state_35660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35660__$1,inst_35658);
} else {
if((state_val_35661 === (2))){
var inst_35632 = (state_35660[(10)]);
var inst_35634 = cljs.core.count.call(null,inst_35632);
var inst_35635 = (inst_35634 > (0));
var state_35660__$1 = state_35660;
if(cljs.core.truth_(inst_35635)){
var statearr_35669_35690 = state_35660__$1;
(statearr_35669_35690[(1)] = (4));

} else {
var statearr_35670_35691 = state_35660__$1;
(statearr_35670_35691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35661 === (11))){
var inst_35632 = (state_35660[(10)]);
var inst_35649 = (state_35660[(2)]);
var tmp35668 = inst_35632;
var inst_35632__$1 = tmp35668;
var state_35660__$1 = (function (){var statearr_35671 = state_35660;
(statearr_35671[(11)] = inst_35649);

(statearr_35671[(10)] = inst_35632__$1);

return statearr_35671;
})();
var statearr_35672_35692 = state_35660__$1;
(statearr_35672_35692[(2)] = null);

(statearr_35672_35692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35661 === (9))){
var inst_35640 = (state_35660[(8)]);
var state_35660__$1 = state_35660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35660__$1,(11),out,inst_35640);
} else {
if((state_val_35661 === (5))){
var inst_35654 = cljs.core.async.close_BANG_.call(null,out);
var state_35660__$1 = state_35660;
var statearr_35673_35693 = state_35660__$1;
(statearr_35673_35693[(2)] = inst_35654);

(statearr_35673_35693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35661 === (10))){
var inst_35652 = (state_35660[(2)]);
var state_35660__$1 = state_35660;
var statearr_35674_35694 = state_35660__$1;
(statearr_35674_35694[(2)] = inst_35652);

(statearr_35674_35694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35661 === (8))){
var inst_35641 = (state_35660[(9)]);
var inst_35639 = (state_35660[(7)]);
var inst_35640 = (state_35660[(8)]);
var inst_35632 = (state_35660[(10)]);
var inst_35644 = (function (){var cs = inst_35632;
var vec__35637 = inst_35639;
var v = inst_35640;
var c = inst_35641;
return ((function (cs,vec__35637,v,c,inst_35641,inst_35639,inst_35640,inst_35632,state_val_35661,c__27964__auto___35685,out){
return (function (p1__35628_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35628_SHARP_);
});
;})(cs,vec__35637,v,c,inst_35641,inst_35639,inst_35640,inst_35632,state_val_35661,c__27964__auto___35685,out))
})();
var inst_35645 = cljs.core.filterv.call(null,inst_35644,inst_35632);
var inst_35632__$1 = inst_35645;
var state_35660__$1 = (function (){var statearr_35675 = state_35660;
(statearr_35675[(10)] = inst_35632__$1);

return statearr_35675;
})();
var statearr_35676_35695 = state_35660__$1;
(statearr_35676_35695[(2)] = null);

(statearr_35676_35695[(1)] = (2));


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
});})(c__27964__auto___35685,out))
;
return ((function (switch__27902__auto__,c__27964__auto___35685,out){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_35680 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35680[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_35680[(1)] = (1));

return statearr_35680;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_35660){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_35660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e35681){if((e35681 instanceof Object)){
var ex__27906__auto__ = e35681;
var statearr_35682_35696 = state_35660;
(statearr_35682_35696[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35697 = state_35660;
state_35660 = G__35697;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_35660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_35660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___35685,out))
})();
var state__27966__auto__ = (function (){var statearr_35683 = f__27965__auto__.call(null);
(statearr_35683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___35685);

return statearr_35683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___35685,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__35699 = arguments.length;
switch (G__35699) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27964__auto___35747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___35747,out){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___35747,out){
return (function (state_35723){
var state_val_35724 = (state_35723[(1)]);
if((state_val_35724 === (7))){
var inst_35705 = (state_35723[(7)]);
var inst_35705__$1 = (state_35723[(2)]);
var inst_35706 = (inst_35705__$1 == null);
var inst_35707 = cljs.core.not.call(null,inst_35706);
var state_35723__$1 = (function (){var statearr_35725 = state_35723;
(statearr_35725[(7)] = inst_35705__$1);

return statearr_35725;
})();
if(inst_35707){
var statearr_35726_35748 = state_35723__$1;
(statearr_35726_35748[(1)] = (8));

} else {
var statearr_35727_35749 = state_35723__$1;
(statearr_35727_35749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (1))){
var inst_35700 = (0);
var state_35723__$1 = (function (){var statearr_35728 = state_35723;
(statearr_35728[(8)] = inst_35700);

return statearr_35728;
})();
var statearr_35729_35750 = state_35723__$1;
(statearr_35729_35750[(2)] = null);

(statearr_35729_35750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (4))){
var state_35723__$1 = state_35723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35723__$1,(7),ch);
} else {
if((state_val_35724 === (6))){
var inst_35718 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35730_35751 = state_35723__$1;
(statearr_35730_35751[(2)] = inst_35718);

(statearr_35730_35751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (3))){
var inst_35720 = (state_35723[(2)]);
var inst_35721 = cljs.core.async.close_BANG_.call(null,out);
var state_35723__$1 = (function (){var statearr_35731 = state_35723;
(statearr_35731[(9)] = inst_35720);

return statearr_35731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35723__$1,inst_35721);
} else {
if((state_val_35724 === (2))){
var inst_35700 = (state_35723[(8)]);
var inst_35702 = (inst_35700 < n);
var state_35723__$1 = state_35723;
if(cljs.core.truth_(inst_35702)){
var statearr_35732_35752 = state_35723__$1;
(statearr_35732_35752[(1)] = (4));

} else {
var statearr_35733_35753 = state_35723__$1;
(statearr_35733_35753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (11))){
var inst_35700 = (state_35723[(8)]);
var inst_35710 = (state_35723[(2)]);
var inst_35711 = (inst_35700 + (1));
var inst_35700__$1 = inst_35711;
var state_35723__$1 = (function (){var statearr_35734 = state_35723;
(statearr_35734[(8)] = inst_35700__$1);

(statearr_35734[(10)] = inst_35710);

return statearr_35734;
})();
var statearr_35735_35754 = state_35723__$1;
(statearr_35735_35754[(2)] = null);

(statearr_35735_35754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (9))){
var state_35723__$1 = state_35723;
var statearr_35736_35755 = state_35723__$1;
(statearr_35736_35755[(2)] = null);

(statearr_35736_35755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (5))){
var state_35723__$1 = state_35723;
var statearr_35737_35756 = state_35723__$1;
(statearr_35737_35756[(2)] = null);

(statearr_35737_35756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (10))){
var inst_35715 = (state_35723[(2)]);
var state_35723__$1 = state_35723;
var statearr_35738_35757 = state_35723__$1;
(statearr_35738_35757[(2)] = inst_35715);

(statearr_35738_35757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35724 === (8))){
var inst_35705 = (state_35723[(7)]);
var state_35723__$1 = state_35723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35723__$1,(11),out,inst_35705);
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
});})(c__27964__auto___35747,out))
;
return ((function (switch__27902__auto__,c__27964__auto___35747,out){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_35742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35742[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_35742[(1)] = (1));

return statearr_35742;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_35723){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_35723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e35743){if((e35743 instanceof Object)){
var ex__27906__auto__ = e35743;
var statearr_35744_35758 = state_35723;
(statearr_35744_35758[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35759 = state_35723;
state_35723 = G__35759;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_35723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_35723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___35747,out))
})();
var state__27966__auto__ = (function (){var statearr_35745 = f__27965__auto__.call(null);
(statearr_35745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___35747);

return statearr_35745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___35747,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t35767 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35767 = (function (map_LT_,f,ch,meta35768){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35768 = meta35768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35769,meta35768__$1){
var self__ = this;
var _35769__$1 = this;
return (new cljs.core.async.t35767(self__.map_LT_,self__.f,self__.ch,meta35768__$1));
});

cljs.core.async.t35767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35769){
var self__ = this;
var _35769__$1 = this;
return self__.meta35768;
});

cljs.core.async.t35767.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t35770 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35770 = (function (map_LT_,f,ch,meta35768,_,fn1,meta35771){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35768 = meta35768;
this._ = _;
this.fn1 = fn1;
this.meta35771 = meta35771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35772,meta35771__$1){
var self__ = this;
var _35772__$1 = this;
return (new cljs.core.async.t35770(self__.map_LT_,self__.f,self__.ch,self__.meta35768,self__._,self__.fn1,meta35771__$1));
});})(___$1))
;

cljs.core.async.t35770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35772){
var self__ = this;
var _35772__$1 = this;
return self__.meta35771;
});})(___$1))
;

cljs.core.async.t35770.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t35770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35760_SHARP_){
return f1.call(null,(((p1__35760_SHARP_ == null))?null:self__.f.call(null,p1__35760_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35770.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35768","meta35768",-951341409,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35771","meta35771",182953560,null)], null);
});})(___$1))
;

cljs.core.async.t35770.cljs$lang$type = true;

cljs.core.async.t35770.cljs$lang$ctorStr = "cljs.core.async/t35770";

cljs.core.async.t35770.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t35770");
});})(___$1))
;

cljs.core.async.__GT_t35770 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t35770(map_LT___$1,f__$1,ch__$1,meta35768__$1,___$2,fn1__$1,meta35771){
return (new cljs.core.async.t35770(map_LT___$1,f__$1,ch__$1,meta35768__$1,___$2,fn1__$1,meta35771));
});})(___$1))
;

}

return (new cljs.core.async.t35770(self__.map_LT_,self__.f,self__.ch,self__.meta35768,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24563__auto__ = ret;
if(cljs.core.truth_(and__24563__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24563__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t35767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t35767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35768","meta35768",-951341409,null)], null);
});

cljs.core.async.t35767.cljs$lang$type = true;

cljs.core.async.t35767.cljs$lang$ctorStr = "cljs.core.async/t35767";

cljs.core.async.t35767.cljs$lang$ctorPrWriter = (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t35767");
});

cljs.core.async.__GT_t35767 = (function cljs$core$async$map_LT__$___GT_t35767(map_LT___$1,f__$1,ch__$1,meta35768){
return (new cljs.core.async.t35767(map_LT___$1,f__$1,ch__$1,meta35768));
});

}

return (new cljs.core.async.t35767(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t35776 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35776 = (function (map_GT_,f,ch,meta35777){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35777 = meta35777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35778,meta35777__$1){
var self__ = this;
var _35778__$1 = this;
return (new cljs.core.async.t35776(self__.map_GT_,self__.f,self__.ch,meta35777__$1));
});

cljs.core.async.t35776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35778){
var self__ = this;
var _35778__$1 = this;
return self__.meta35777;
});

cljs.core.async.t35776.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t35776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35777","meta35777",1905094139,null)], null);
});

cljs.core.async.t35776.cljs$lang$type = true;

cljs.core.async.t35776.cljs$lang$ctorStr = "cljs.core.async/t35776";

cljs.core.async.t35776.cljs$lang$ctorPrWriter = (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t35776");
});

cljs.core.async.__GT_t35776 = (function cljs$core$async$map_GT__$___GT_t35776(map_GT___$1,f__$1,ch__$1,meta35777){
return (new cljs.core.async.t35776(map_GT___$1,f__$1,ch__$1,meta35777));
});

}

return (new cljs.core.async.t35776(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t35782 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35782 = (function (filter_GT_,p,ch,meta35783){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35783 = meta35783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35784,meta35783__$1){
var self__ = this;
var _35784__$1 = this;
return (new cljs.core.async.t35782(self__.filter_GT_,self__.p,self__.ch,meta35783__$1));
});

cljs.core.async.t35782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35784){
var self__ = this;
var _35784__$1 = this;
return self__.meta35783;
});

cljs.core.async.t35782.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35782.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35782.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35782.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t35782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35783","meta35783",-1399959315,null)], null);
});

cljs.core.async.t35782.cljs$lang$type = true;

cljs.core.async.t35782.cljs$lang$ctorStr = "cljs.core.async/t35782";

cljs.core.async.t35782.cljs$lang$ctorPrWriter = (function (this__25155__auto__,writer__25156__auto__,opt__25157__auto__){
return cljs.core._write.call(null,writer__25156__auto__,"cljs.core.async/t35782");
});

cljs.core.async.__GT_t35782 = (function cljs$core$async$filter_GT__$___GT_t35782(filter_GT___$1,p__$1,ch__$1,meta35783){
return (new cljs.core.async.t35782(filter_GT___$1,p__$1,ch__$1,meta35783));
});

}

return (new cljs.core.async.t35782(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__35786 = arguments.length;
switch (G__35786) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27964__auto___35829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___35829,out){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___35829,out){
return (function (state_35807){
var state_val_35808 = (state_35807[(1)]);
if((state_val_35808 === (7))){
var inst_35803 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35809_35830 = state_35807__$1;
(statearr_35809_35830[(2)] = inst_35803);

(statearr_35809_35830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (1))){
var state_35807__$1 = state_35807;
var statearr_35810_35831 = state_35807__$1;
(statearr_35810_35831[(2)] = null);

(statearr_35810_35831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (4))){
var inst_35789 = (state_35807[(7)]);
var inst_35789__$1 = (state_35807[(2)]);
var inst_35790 = (inst_35789__$1 == null);
var state_35807__$1 = (function (){var statearr_35811 = state_35807;
(statearr_35811[(7)] = inst_35789__$1);

return statearr_35811;
})();
if(cljs.core.truth_(inst_35790)){
var statearr_35812_35832 = state_35807__$1;
(statearr_35812_35832[(1)] = (5));

} else {
var statearr_35813_35833 = state_35807__$1;
(statearr_35813_35833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (6))){
var inst_35789 = (state_35807[(7)]);
var inst_35794 = p.call(null,inst_35789);
var state_35807__$1 = state_35807;
if(cljs.core.truth_(inst_35794)){
var statearr_35814_35834 = state_35807__$1;
(statearr_35814_35834[(1)] = (8));

} else {
var statearr_35815_35835 = state_35807__$1;
(statearr_35815_35835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (3))){
var inst_35805 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35807__$1,inst_35805);
} else {
if((state_val_35808 === (2))){
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35807__$1,(4),ch);
} else {
if((state_val_35808 === (11))){
var inst_35797 = (state_35807[(2)]);
var state_35807__$1 = state_35807;
var statearr_35816_35836 = state_35807__$1;
(statearr_35816_35836[(2)] = inst_35797);

(statearr_35816_35836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (9))){
var state_35807__$1 = state_35807;
var statearr_35817_35837 = state_35807__$1;
(statearr_35817_35837[(2)] = null);

(statearr_35817_35837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (5))){
var inst_35792 = cljs.core.async.close_BANG_.call(null,out);
var state_35807__$1 = state_35807;
var statearr_35818_35838 = state_35807__$1;
(statearr_35818_35838[(2)] = inst_35792);

(statearr_35818_35838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (10))){
var inst_35800 = (state_35807[(2)]);
var state_35807__$1 = (function (){var statearr_35819 = state_35807;
(statearr_35819[(8)] = inst_35800);

return statearr_35819;
})();
var statearr_35820_35839 = state_35807__$1;
(statearr_35820_35839[(2)] = null);

(statearr_35820_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35808 === (8))){
var inst_35789 = (state_35807[(7)]);
var state_35807__$1 = state_35807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35807__$1,(11),out,inst_35789);
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
});})(c__27964__auto___35829,out))
;
return ((function (switch__27902__auto__,c__27964__auto___35829,out){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_35824 = [null,null,null,null,null,null,null,null,null];
(statearr_35824[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_35824[(1)] = (1));

return statearr_35824;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_35807){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_35807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e35825){if((e35825 instanceof Object)){
var ex__27906__auto__ = e35825;
var statearr_35826_35840 = state_35807;
(statearr_35826_35840[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35841 = state_35807;
state_35807 = G__35841;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_35807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_35807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___35829,out))
})();
var state__27966__auto__ = (function (){var statearr_35827 = f__27965__auto__.call(null);
(statearr_35827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___35829);

return statearr_35827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___35829,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__35843 = arguments.length;
switch (G__35843) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto__){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto__){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (7))){
var inst_36006 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36012_36053 = state_36010__$1;
(statearr_36012_36053[(2)] = inst_36006);

(statearr_36012_36053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (20))){
var inst_35976 = (state_36010[(7)]);
var inst_35987 = (state_36010[(2)]);
var inst_35988 = cljs.core.next.call(null,inst_35976);
var inst_35962 = inst_35988;
var inst_35963 = null;
var inst_35964 = (0);
var inst_35965 = (0);
var state_36010__$1 = (function (){var statearr_36013 = state_36010;
(statearr_36013[(8)] = inst_35964);

(statearr_36013[(9)] = inst_35963);

(statearr_36013[(10)] = inst_35965);

(statearr_36013[(11)] = inst_35987);

(statearr_36013[(12)] = inst_35962);

return statearr_36013;
})();
var statearr_36014_36054 = state_36010__$1;
(statearr_36014_36054[(2)] = null);

(statearr_36014_36054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (1))){
var state_36010__$1 = state_36010;
var statearr_36015_36055 = state_36010__$1;
(statearr_36015_36055[(2)] = null);

(statearr_36015_36055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (4))){
var inst_35951 = (state_36010[(13)]);
var inst_35951__$1 = (state_36010[(2)]);
var inst_35952 = (inst_35951__$1 == null);
var state_36010__$1 = (function (){var statearr_36016 = state_36010;
(statearr_36016[(13)] = inst_35951__$1);

return statearr_36016;
})();
if(cljs.core.truth_(inst_35952)){
var statearr_36017_36056 = state_36010__$1;
(statearr_36017_36056[(1)] = (5));

} else {
var statearr_36018_36057 = state_36010__$1;
(statearr_36018_36057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (15))){
var state_36010__$1 = state_36010;
var statearr_36022_36058 = state_36010__$1;
(statearr_36022_36058[(2)] = null);

(statearr_36022_36058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (21))){
var state_36010__$1 = state_36010;
var statearr_36023_36059 = state_36010__$1;
(statearr_36023_36059[(2)] = null);

(statearr_36023_36059[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (13))){
var inst_35964 = (state_36010[(8)]);
var inst_35963 = (state_36010[(9)]);
var inst_35965 = (state_36010[(10)]);
var inst_35962 = (state_36010[(12)]);
var inst_35972 = (state_36010[(2)]);
var inst_35973 = (inst_35965 + (1));
var tmp36019 = inst_35964;
var tmp36020 = inst_35963;
var tmp36021 = inst_35962;
var inst_35962__$1 = tmp36021;
var inst_35963__$1 = tmp36020;
var inst_35964__$1 = tmp36019;
var inst_35965__$1 = inst_35973;
var state_36010__$1 = (function (){var statearr_36024 = state_36010;
(statearr_36024[(8)] = inst_35964__$1);

(statearr_36024[(9)] = inst_35963__$1);

(statearr_36024[(14)] = inst_35972);

(statearr_36024[(10)] = inst_35965__$1);

(statearr_36024[(12)] = inst_35962__$1);

return statearr_36024;
})();
var statearr_36025_36060 = state_36010__$1;
(statearr_36025_36060[(2)] = null);

(statearr_36025_36060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (22))){
var state_36010__$1 = state_36010;
var statearr_36026_36061 = state_36010__$1;
(statearr_36026_36061[(2)] = null);

(statearr_36026_36061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (6))){
var inst_35951 = (state_36010[(13)]);
var inst_35960 = f.call(null,inst_35951);
var inst_35961 = cljs.core.seq.call(null,inst_35960);
var inst_35962 = inst_35961;
var inst_35963 = null;
var inst_35964 = (0);
var inst_35965 = (0);
var state_36010__$1 = (function (){var statearr_36027 = state_36010;
(statearr_36027[(8)] = inst_35964);

(statearr_36027[(9)] = inst_35963);

(statearr_36027[(10)] = inst_35965);

(statearr_36027[(12)] = inst_35962);

return statearr_36027;
})();
var statearr_36028_36062 = state_36010__$1;
(statearr_36028_36062[(2)] = null);

(statearr_36028_36062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (17))){
var inst_35976 = (state_36010[(7)]);
var inst_35980 = cljs.core.chunk_first.call(null,inst_35976);
var inst_35981 = cljs.core.chunk_rest.call(null,inst_35976);
var inst_35982 = cljs.core.count.call(null,inst_35980);
var inst_35962 = inst_35981;
var inst_35963 = inst_35980;
var inst_35964 = inst_35982;
var inst_35965 = (0);
var state_36010__$1 = (function (){var statearr_36029 = state_36010;
(statearr_36029[(8)] = inst_35964);

(statearr_36029[(9)] = inst_35963);

(statearr_36029[(10)] = inst_35965);

(statearr_36029[(12)] = inst_35962);

return statearr_36029;
})();
var statearr_36030_36063 = state_36010__$1;
(statearr_36030_36063[(2)] = null);

(statearr_36030_36063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (3))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (12))){
var inst_35996 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36031_36064 = state_36010__$1;
(statearr_36031_36064[(2)] = inst_35996);

(statearr_36031_36064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (2))){
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(4),in$);
} else {
if((state_val_36011 === (23))){
var inst_36004 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36032_36065 = state_36010__$1;
(statearr_36032_36065[(2)] = inst_36004);

(statearr_36032_36065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (19))){
var inst_35991 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36033_36066 = state_36010__$1;
(statearr_36033_36066[(2)] = inst_35991);

(statearr_36033_36066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (11))){
var inst_35976 = (state_36010[(7)]);
var inst_35962 = (state_36010[(12)]);
var inst_35976__$1 = cljs.core.seq.call(null,inst_35962);
var state_36010__$1 = (function (){var statearr_36034 = state_36010;
(statearr_36034[(7)] = inst_35976__$1);

return statearr_36034;
})();
if(inst_35976__$1){
var statearr_36035_36067 = state_36010__$1;
(statearr_36035_36067[(1)] = (14));

} else {
var statearr_36036_36068 = state_36010__$1;
(statearr_36036_36068[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (9))){
var inst_35998 = (state_36010[(2)]);
var inst_35999 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36010__$1 = (function (){var statearr_36037 = state_36010;
(statearr_36037[(15)] = inst_35998);

return statearr_36037;
})();
if(cljs.core.truth_(inst_35999)){
var statearr_36038_36069 = state_36010__$1;
(statearr_36038_36069[(1)] = (21));

} else {
var statearr_36039_36070 = state_36010__$1;
(statearr_36039_36070[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (5))){
var inst_35954 = cljs.core.async.close_BANG_.call(null,out);
var state_36010__$1 = state_36010;
var statearr_36040_36071 = state_36010__$1;
(statearr_36040_36071[(2)] = inst_35954);

(statearr_36040_36071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (14))){
var inst_35976 = (state_36010[(7)]);
var inst_35978 = cljs.core.chunked_seq_QMARK_.call(null,inst_35976);
var state_36010__$1 = state_36010;
if(inst_35978){
var statearr_36041_36072 = state_36010__$1;
(statearr_36041_36072[(1)] = (17));

} else {
var statearr_36042_36073 = state_36010__$1;
(statearr_36042_36073[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (16))){
var inst_35994 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36043_36074 = state_36010__$1;
(statearr_36043_36074[(2)] = inst_35994);

(statearr_36043_36074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (10))){
var inst_35963 = (state_36010[(9)]);
var inst_35965 = (state_36010[(10)]);
var inst_35970 = cljs.core._nth.call(null,inst_35963,inst_35965);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36010__$1,(13),out,inst_35970);
} else {
if((state_val_36011 === (18))){
var inst_35976 = (state_36010[(7)]);
var inst_35985 = cljs.core.first.call(null,inst_35976);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36010__$1,(20),out,inst_35985);
} else {
if((state_val_36011 === (8))){
var inst_35964 = (state_36010[(8)]);
var inst_35965 = (state_36010[(10)]);
var inst_35967 = (inst_35965 < inst_35964);
var inst_35968 = inst_35967;
var state_36010__$1 = state_36010;
if(cljs.core.truth_(inst_35968)){
var statearr_36044_36075 = state_36010__$1;
(statearr_36044_36075[(1)] = (10));

} else {
var statearr_36045_36076 = state_36010__$1;
(statearr_36045_36076[(1)] = (11));

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
});})(c__27964__auto__))
;
return ((function (switch__27902__auto__,c__27964__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27903__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27903__auto____0 = (function (){
var statearr_36049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36049[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27903__auto__);

(statearr_36049[(1)] = (1));

return statearr_36049;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27903__auto____1 = (function (state_36010){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_36010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e36050){if((e36050 instanceof Object)){
var ex__27906__auto__ = e36050;
var statearr_36051_36077 = state_36010;
(statearr_36051_36077[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36078 = state_36010;
state_36010 = G__36078;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27903__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27903__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27903__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27903__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto__))
})();
var state__27966__auto__ = (function (){var statearr_36052 = f__27965__auto__.call(null);
(statearr_36052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto__);

return statearr_36052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto__))
);

return c__27964__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__36080 = arguments.length;
switch (G__36080) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__36083 = arguments.length;
switch (G__36083) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__36086 = arguments.length;
switch (G__36086) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27964__auto___36136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___36136,out){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___36136,out){
return (function (state_36110){
var state_val_36111 = (state_36110[(1)]);
if((state_val_36111 === (7))){
var inst_36105 = (state_36110[(2)]);
var state_36110__$1 = state_36110;
var statearr_36112_36137 = state_36110__$1;
(statearr_36112_36137[(2)] = inst_36105);

(statearr_36112_36137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (1))){
var inst_36087 = null;
var state_36110__$1 = (function (){var statearr_36113 = state_36110;
(statearr_36113[(7)] = inst_36087);

return statearr_36113;
})();
var statearr_36114_36138 = state_36110__$1;
(statearr_36114_36138[(2)] = null);

(statearr_36114_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (4))){
var inst_36090 = (state_36110[(8)]);
var inst_36090__$1 = (state_36110[(2)]);
var inst_36091 = (inst_36090__$1 == null);
var inst_36092 = cljs.core.not.call(null,inst_36091);
var state_36110__$1 = (function (){var statearr_36115 = state_36110;
(statearr_36115[(8)] = inst_36090__$1);

return statearr_36115;
})();
if(inst_36092){
var statearr_36116_36139 = state_36110__$1;
(statearr_36116_36139[(1)] = (5));

} else {
var statearr_36117_36140 = state_36110__$1;
(statearr_36117_36140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (6))){
var state_36110__$1 = state_36110;
var statearr_36118_36141 = state_36110__$1;
(statearr_36118_36141[(2)] = null);

(statearr_36118_36141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (3))){
var inst_36107 = (state_36110[(2)]);
var inst_36108 = cljs.core.async.close_BANG_.call(null,out);
var state_36110__$1 = (function (){var statearr_36119 = state_36110;
(statearr_36119[(9)] = inst_36107);

return statearr_36119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36110__$1,inst_36108);
} else {
if((state_val_36111 === (2))){
var state_36110__$1 = state_36110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36110__$1,(4),ch);
} else {
if((state_val_36111 === (11))){
var inst_36090 = (state_36110[(8)]);
var inst_36099 = (state_36110[(2)]);
var inst_36087 = inst_36090;
var state_36110__$1 = (function (){var statearr_36120 = state_36110;
(statearr_36120[(7)] = inst_36087);

(statearr_36120[(10)] = inst_36099);

return statearr_36120;
})();
var statearr_36121_36142 = state_36110__$1;
(statearr_36121_36142[(2)] = null);

(statearr_36121_36142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (9))){
var inst_36090 = (state_36110[(8)]);
var state_36110__$1 = state_36110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36110__$1,(11),out,inst_36090);
} else {
if((state_val_36111 === (5))){
var inst_36087 = (state_36110[(7)]);
var inst_36090 = (state_36110[(8)]);
var inst_36094 = cljs.core._EQ_.call(null,inst_36090,inst_36087);
var state_36110__$1 = state_36110;
if(inst_36094){
var statearr_36123_36143 = state_36110__$1;
(statearr_36123_36143[(1)] = (8));

} else {
var statearr_36124_36144 = state_36110__$1;
(statearr_36124_36144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (10))){
var inst_36102 = (state_36110[(2)]);
var state_36110__$1 = state_36110;
var statearr_36125_36145 = state_36110__$1;
(statearr_36125_36145[(2)] = inst_36102);

(statearr_36125_36145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36111 === (8))){
var inst_36087 = (state_36110[(7)]);
var tmp36122 = inst_36087;
var inst_36087__$1 = tmp36122;
var state_36110__$1 = (function (){var statearr_36126 = state_36110;
(statearr_36126[(7)] = inst_36087__$1);

return statearr_36126;
})();
var statearr_36127_36146 = state_36110__$1;
(statearr_36127_36146[(2)] = null);

(statearr_36127_36146[(1)] = (2));


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
});})(c__27964__auto___36136,out))
;
return ((function (switch__27902__auto__,c__27964__auto___36136,out){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_36131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36131[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_36131[(1)] = (1));

return statearr_36131;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_36110){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_36110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e36132){if((e36132 instanceof Object)){
var ex__27906__auto__ = e36132;
var statearr_36133_36147 = state_36110;
(statearr_36133_36147[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36148 = state_36110;
state_36110 = G__36148;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_36110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_36110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___36136,out))
})();
var state__27966__auto__ = (function (){var statearr_36134 = f__27965__auto__.call(null);
(statearr_36134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___36136);

return statearr_36134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___36136,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__36150 = arguments.length;
switch (G__36150) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27964__auto___36219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___36219,out){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___36219,out){
return (function (state_36188){
var state_val_36189 = (state_36188[(1)]);
if((state_val_36189 === (7))){
var inst_36184 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
var statearr_36190_36220 = state_36188__$1;
(statearr_36190_36220[(2)] = inst_36184);

(statearr_36190_36220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (1))){
var inst_36151 = (new Array(n));
var inst_36152 = inst_36151;
var inst_36153 = (0);
var state_36188__$1 = (function (){var statearr_36191 = state_36188;
(statearr_36191[(7)] = inst_36152);

(statearr_36191[(8)] = inst_36153);

return statearr_36191;
})();
var statearr_36192_36221 = state_36188__$1;
(statearr_36192_36221[(2)] = null);

(statearr_36192_36221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (4))){
var inst_36156 = (state_36188[(9)]);
var inst_36156__$1 = (state_36188[(2)]);
var inst_36157 = (inst_36156__$1 == null);
var inst_36158 = cljs.core.not.call(null,inst_36157);
var state_36188__$1 = (function (){var statearr_36193 = state_36188;
(statearr_36193[(9)] = inst_36156__$1);

return statearr_36193;
})();
if(inst_36158){
var statearr_36194_36222 = state_36188__$1;
(statearr_36194_36222[(1)] = (5));

} else {
var statearr_36195_36223 = state_36188__$1;
(statearr_36195_36223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (15))){
var inst_36178 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
var statearr_36196_36224 = state_36188__$1;
(statearr_36196_36224[(2)] = inst_36178);

(statearr_36196_36224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (13))){
var state_36188__$1 = state_36188;
var statearr_36197_36225 = state_36188__$1;
(statearr_36197_36225[(2)] = null);

(statearr_36197_36225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (6))){
var inst_36153 = (state_36188[(8)]);
var inst_36174 = (inst_36153 > (0));
var state_36188__$1 = state_36188;
if(cljs.core.truth_(inst_36174)){
var statearr_36198_36226 = state_36188__$1;
(statearr_36198_36226[(1)] = (12));

} else {
var statearr_36199_36227 = state_36188__$1;
(statearr_36199_36227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (3))){
var inst_36186 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36188__$1,inst_36186);
} else {
if((state_val_36189 === (12))){
var inst_36152 = (state_36188[(7)]);
var inst_36176 = cljs.core.vec.call(null,inst_36152);
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36188__$1,(15),out,inst_36176);
} else {
if((state_val_36189 === (2))){
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36188__$1,(4),ch);
} else {
if((state_val_36189 === (11))){
var inst_36168 = (state_36188[(2)]);
var inst_36169 = (new Array(n));
var inst_36152 = inst_36169;
var inst_36153 = (0);
var state_36188__$1 = (function (){var statearr_36200 = state_36188;
(statearr_36200[(7)] = inst_36152);

(statearr_36200[(8)] = inst_36153);

(statearr_36200[(10)] = inst_36168);

return statearr_36200;
})();
var statearr_36201_36228 = state_36188__$1;
(statearr_36201_36228[(2)] = null);

(statearr_36201_36228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (9))){
var inst_36152 = (state_36188[(7)]);
var inst_36166 = cljs.core.vec.call(null,inst_36152);
var state_36188__$1 = state_36188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36188__$1,(11),out,inst_36166);
} else {
if((state_val_36189 === (5))){
var inst_36152 = (state_36188[(7)]);
var inst_36153 = (state_36188[(8)]);
var inst_36161 = (state_36188[(11)]);
var inst_36156 = (state_36188[(9)]);
var inst_36160 = (inst_36152[inst_36153] = inst_36156);
var inst_36161__$1 = (inst_36153 + (1));
var inst_36162 = (inst_36161__$1 < n);
var state_36188__$1 = (function (){var statearr_36202 = state_36188;
(statearr_36202[(12)] = inst_36160);

(statearr_36202[(11)] = inst_36161__$1);

return statearr_36202;
})();
if(cljs.core.truth_(inst_36162)){
var statearr_36203_36229 = state_36188__$1;
(statearr_36203_36229[(1)] = (8));

} else {
var statearr_36204_36230 = state_36188__$1;
(statearr_36204_36230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (14))){
var inst_36181 = (state_36188[(2)]);
var inst_36182 = cljs.core.async.close_BANG_.call(null,out);
var state_36188__$1 = (function (){var statearr_36206 = state_36188;
(statearr_36206[(13)] = inst_36181);

return statearr_36206;
})();
var statearr_36207_36231 = state_36188__$1;
(statearr_36207_36231[(2)] = inst_36182);

(statearr_36207_36231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (10))){
var inst_36172 = (state_36188[(2)]);
var state_36188__$1 = state_36188;
var statearr_36208_36232 = state_36188__$1;
(statearr_36208_36232[(2)] = inst_36172);

(statearr_36208_36232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36189 === (8))){
var inst_36152 = (state_36188[(7)]);
var inst_36161 = (state_36188[(11)]);
var tmp36205 = inst_36152;
var inst_36152__$1 = tmp36205;
var inst_36153 = inst_36161;
var state_36188__$1 = (function (){var statearr_36209 = state_36188;
(statearr_36209[(7)] = inst_36152__$1);

(statearr_36209[(8)] = inst_36153);

return statearr_36209;
})();
var statearr_36210_36233 = state_36188__$1;
(statearr_36210_36233[(2)] = null);

(statearr_36210_36233[(1)] = (2));


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
});})(c__27964__auto___36219,out))
;
return ((function (switch__27902__auto__,c__27964__auto___36219,out){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_36214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36214[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_36214[(1)] = (1));

return statearr_36214;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_36188){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_36188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e36215){if((e36215 instanceof Object)){
var ex__27906__auto__ = e36215;
var statearr_36216_36234 = state_36188;
(statearr_36216_36234[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36235 = state_36188;
state_36188 = G__36235;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_36188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_36188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___36219,out))
})();
var state__27966__auto__ = (function (){var statearr_36217 = f__27965__auto__.call(null);
(statearr_36217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___36219);

return statearr_36217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___36219,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__36237 = arguments.length;
switch (G__36237) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27964__auto___36310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27964__auto___36310,out){
return (function (){
var f__27965__auto__ = (function (){var switch__27902__auto__ = ((function (c__27964__auto___36310,out){
return (function (state_36279){
var state_val_36280 = (state_36279[(1)]);
if((state_val_36280 === (7))){
var inst_36275 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36281_36311 = state_36279__$1;
(statearr_36281_36311[(2)] = inst_36275);

(statearr_36281_36311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (1))){
var inst_36238 = [];
var inst_36239 = inst_36238;
var inst_36240 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36279__$1 = (function (){var statearr_36282 = state_36279;
(statearr_36282[(7)] = inst_36240);

(statearr_36282[(8)] = inst_36239);

return statearr_36282;
})();
var statearr_36283_36312 = state_36279__$1;
(statearr_36283_36312[(2)] = null);

(statearr_36283_36312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (4))){
var inst_36243 = (state_36279[(9)]);
var inst_36243__$1 = (state_36279[(2)]);
var inst_36244 = (inst_36243__$1 == null);
var inst_36245 = cljs.core.not.call(null,inst_36244);
var state_36279__$1 = (function (){var statearr_36284 = state_36279;
(statearr_36284[(9)] = inst_36243__$1);

return statearr_36284;
})();
if(inst_36245){
var statearr_36285_36313 = state_36279__$1;
(statearr_36285_36313[(1)] = (5));

} else {
var statearr_36286_36314 = state_36279__$1;
(statearr_36286_36314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (15))){
var inst_36269 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36287_36315 = state_36279__$1;
(statearr_36287_36315[(2)] = inst_36269);

(statearr_36287_36315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (13))){
var state_36279__$1 = state_36279;
var statearr_36288_36316 = state_36279__$1;
(statearr_36288_36316[(2)] = null);

(statearr_36288_36316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (6))){
var inst_36239 = (state_36279[(8)]);
var inst_36264 = inst_36239.length;
var inst_36265 = (inst_36264 > (0));
var state_36279__$1 = state_36279;
if(cljs.core.truth_(inst_36265)){
var statearr_36289_36317 = state_36279__$1;
(statearr_36289_36317[(1)] = (12));

} else {
var statearr_36290_36318 = state_36279__$1;
(statearr_36290_36318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (3))){
var inst_36277 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36279__$1,inst_36277);
} else {
if((state_val_36280 === (12))){
var inst_36239 = (state_36279[(8)]);
var inst_36267 = cljs.core.vec.call(null,inst_36239);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36279__$1,(15),out,inst_36267);
} else {
if((state_val_36280 === (2))){
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36279__$1,(4),ch);
} else {
if((state_val_36280 === (11))){
var inst_36243 = (state_36279[(9)]);
var inst_36247 = (state_36279[(10)]);
var inst_36257 = (state_36279[(2)]);
var inst_36258 = [];
var inst_36259 = inst_36258.push(inst_36243);
var inst_36239 = inst_36258;
var inst_36240 = inst_36247;
var state_36279__$1 = (function (){var statearr_36291 = state_36279;
(statearr_36291[(11)] = inst_36257);

(statearr_36291[(7)] = inst_36240);

(statearr_36291[(8)] = inst_36239);

(statearr_36291[(12)] = inst_36259);

return statearr_36291;
})();
var statearr_36292_36319 = state_36279__$1;
(statearr_36292_36319[(2)] = null);

(statearr_36292_36319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (9))){
var inst_36239 = (state_36279[(8)]);
var inst_36255 = cljs.core.vec.call(null,inst_36239);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36279__$1,(11),out,inst_36255);
} else {
if((state_val_36280 === (5))){
var inst_36243 = (state_36279[(9)]);
var inst_36247 = (state_36279[(10)]);
var inst_36240 = (state_36279[(7)]);
var inst_36247__$1 = f.call(null,inst_36243);
var inst_36248 = cljs.core._EQ_.call(null,inst_36247__$1,inst_36240);
var inst_36249 = cljs.core.keyword_identical_QMARK_.call(null,inst_36240,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36250 = (inst_36248) || (inst_36249);
var state_36279__$1 = (function (){var statearr_36293 = state_36279;
(statearr_36293[(10)] = inst_36247__$1);

return statearr_36293;
})();
if(cljs.core.truth_(inst_36250)){
var statearr_36294_36320 = state_36279__$1;
(statearr_36294_36320[(1)] = (8));

} else {
var statearr_36295_36321 = state_36279__$1;
(statearr_36295_36321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (14))){
var inst_36272 = (state_36279[(2)]);
var inst_36273 = cljs.core.async.close_BANG_.call(null,out);
var state_36279__$1 = (function (){var statearr_36297 = state_36279;
(statearr_36297[(13)] = inst_36272);

return statearr_36297;
})();
var statearr_36298_36322 = state_36279__$1;
(statearr_36298_36322[(2)] = inst_36273);

(statearr_36298_36322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (10))){
var inst_36262 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36299_36323 = state_36279__$1;
(statearr_36299_36323[(2)] = inst_36262);

(statearr_36299_36323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (8))){
var inst_36243 = (state_36279[(9)]);
var inst_36247 = (state_36279[(10)]);
var inst_36239 = (state_36279[(8)]);
var inst_36252 = inst_36239.push(inst_36243);
var tmp36296 = inst_36239;
var inst_36239__$1 = tmp36296;
var inst_36240 = inst_36247;
var state_36279__$1 = (function (){var statearr_36300 = state_36279;
(statearr_36300[(14)] = inst_36252);

(statearr_36300[(7)] = inst_36240);

(statearr_36300[(8)] = inst_36239__$1);

return statearr_36300;
})();
var statearr_36301_36324 = state_36279__$1;
(statearr_36301_36324[(2)] = null);

(statearr_36301_36324[(1)] = (2));


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
});})(c__27964__auto___36310,out))
;
return ((function (switch__27902__auto__,c__27964__auto___36310,out){
return (function() {
var cljs$core$async$state_machine__27903__auto__ = null;
var cljs$core$async$state_machine__27903__auto____0 = (function (){
var statearr_36305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36305[(0)] = cljs$core$async$state_machine__27903__auto__);

(statearr_36305[(1)] = (1));

return statearr_36305;
});
var cljs$core$async$state_machine__27903__auto____1 = (function (state_36279){
while(true){
var ret_value__27904__auto__ = (function (){try{while(true){
var result__27905__auto__ = switch__27902__auto__.call(null,state_36279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27905__auto__;
}
break;
}
}catch (e36306){if((e36306 instanceof Object)){
var ex__27906__auto__ = e36306;
var statearr_36307_36325 = state_36279;
(statearr_36307_36325[(5)] = ex__27906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36326 = state_36279;
state_36279 = G__36326;
continue;
} else {
return ret_value__27904__auto__;
}
break;
}
});
cljs$core$async$state_machine__27903__auto__ = function(state_36279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27903__auto____1.call(this,state_36279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27903__auto____0;
cljs$core$async$state_machine__27903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27903__auto____1;
return cljs$core$async$state_machine__27903__auto__;
})()
;})(switch__27902__auto__,c__27964__auto___36310,out))
})();
var state__27966__auto__ = (function (){var statearr_36308 = f__27965__auto__.call(null);
(statearr_36308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27964__auto___36310);

return statearr_36308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27966__auto__);
});})(c__27964__auto___36310,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map