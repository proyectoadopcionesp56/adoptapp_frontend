/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[13],{371:function(ha,ea,f){f.r(ea);var ba=f(2),z=f(0);f.n(z);var fa=f(1),da=f(124);ha=f(44);var ca=f(78),y=f(205),x=f(56),w=f(204);f=f(318);var e=window,h=function(){function f(e,f,h){var n=-1===e.indexOf("?")?"?":"&";switch(f){case x.a.NEVER_CACHE:this.url=e+n+"_="+Object(z.uniqueId)();break;default:this.url=e}this.nf=h;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=w.a.NOT_STARTED}f.prototype.start=function(e,h){var n=this,r=this,x=this.request,y;r.gv=0;e&&Object.keys(e).forEach(function(f){n.request.setRequestHeader(f,e[f])});h&&(this.request.withCredentials=h);this.lB=setInterval(function(){var e=0===window.document.URL.indexOf("file:///");e=200===x.status||e&&0===x.status;
if(x.readyState!==w.b.DONE||e){try{x.responseText}catch(ua){return}r.gv<x.responseText.length&&(y=r.baa())&&r.trigger(f.Events.DATA,[y]);0===x.readyState&&(clearInterval(r.lB),r.trigger(f.Events.DONE))}else clearInterval(r.lB),r.trigger(f.Events.DONE,["Error received return status "+x.status])},1E3);this.request.send(null);this.status=w.a.STARTED};f.prototype.baa=function(){var h=this.request,r=h.responseText;if(0!==r.length)if(this.gv===r.length)clearInterval(this.lB),this.trigger(f.Events.DONE);
else return r=Math.min(this.gv+3E6,r.length),h=e.TP(h,this.gv,!0,r),this.gv=r,h};f.prototype.abort=function(){clearInterval(this.lB);var e=this;this.request.onreadystatechange=function(){Object(fa.i)("StreamingRequest aborted");e.status=w.a.ABORTED;return e.trigger(f.Events.ABORTED)};this.request.abort()};f.prototype.finish=function(){var e=this;this.request.onreadystatechange=function(){e.status=w.a.SUCCESS;return e.trigger(f.Events.DONE)};this.request.abort()};f.Events={DONE:"done",DATA:"data",
ABORTED:"aborted"};return f}();Object(ha.a)(h);var r;(function(e){e[e.LOCAL_HEADER=0]="LOCAL_HEADER";e[e.FILE=1]="FILE";e[e.CENTRAL_DIR=2]="CENTRAL_DIR"})(r||(r={}));var aa=function(e){function f(){var f=e.call(this)||this;f.buffer="";f.state=r.LOCAL_HEADER;f.uJ=4;f.Yk=null;f.Ir=da.c;f.rm={};return f}Object(ba.c)(f,e);f.prototype.W$=function(e){var h;for(e=this.buffer+e;e.length>=this.Ir;)switch(this.state){case r.LOCAL_HEADER:this.Yk=h=this.faa(e.slice(0,this.Ir));if(h.qs!==da.g)throw Error("Wrong signature in local header: "+
h.qs);e=e.slice(this.Ir);this.state=r.FILE;this.Ir=h.sE+h.cp+h.mu+this.uJ;this.trigger(f.Events.HEADER,[h]);break;case r.FILE:this.Yk.name=e.slice(0,this.Yk.cp);this.rm[this.Yk.name]=this.Yk;h=this.Ir-this.uJ;var n=e.slice(this.Yk.cp+this.Yk.mu,h);this.trigger(f.Events.FILE,[this.Yk.name,n,this.Yk.IE]);e=e.slice(h);if(e.slice(0,this.uJ)===da.h)this.state=r.LOCAL_HEADER,this.Ir=da.c;else return this.state=r.CENTRAL_DIR,!0}this.buffer=e;return!1};f.Events={HEADER:"header",FILE:"file"};return f}(y.a);
Object(ha.a)(aa);ha=function(e){function f(f,n,r,w,x){r=e.call(this,f,r,w)||this;r.url=f;r.stream=new h(f,n);r.Md=new aa;r.AS=window.createPromiseCapability();r.XS={};r.nf=x;return r}Object(ba.c)(f,e);f.prototype.Uv=function(e){var f=this;this.request([this.Ii,this.Tj,this.Hi]);this.stream.addEventListener(h.Events.DATA,function(h){try{if(f.Md.W$(h))return f.stream.finish()}catch(qa){throw f.stream.abort(),f.ju(qa),e(qa),qa;}});this.stream.addEventListener(h.Events.DONE,function(h){f.D$=!0;f.AS.resolve();
h&&(f.ju(h),e(h))});this.Md.addEventListener(aa.Events.HEADER,Object(z.bind)(this.WS,this));this.Md.addEventListener(aa.Events.FILE,Object(z.bind)(this.vaa,this));return this.stream.start(this.nf,this.withCredentials)};f.prototype.QP=function(e){var f=this;this.AS.promise.then(function(){e(Object.keys(f.Md.rm))})};f.prototype.Xm=function(){return!0};f.prototype.request=function(e){var f=this;this.D$&&e.forEach(function(e){f.XS[e]||f.Aea(e)})};f.prototype.WS=function(){};f.prototype.abort=function(){this.stream&&
this.stream.abort()};f.prototype.Aea=function(e){this.trigger(ca.a.Events.PART_READY,[{ab:e,error:"Requested part not found",Qh:!1,Lf:!1}])};f.prototype.vaa=function(e,f,h){this.XS[e]=!0;this.trigger(ca.a.Events.PART_READY,[{ab:e,data:f,Qh:!1,Lf:!1,error:null,$c:h}])};return f}(ca.a);Object(f.a)(ha);Object(f.b)(ha);ea["default"]=ha}}]);}).call(this || window)