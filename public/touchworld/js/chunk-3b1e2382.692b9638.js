(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b1e2382"],{"044b":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},"0a06":function(t,e,n){"use strict";var r=n("2444"),o=n("c532"),i=n("f6b4"),a=n("5270");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"===typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(r,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});while(e.length)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){c.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){c.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=c},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),a=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=a(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)})}}n.d(e,"a",function(){return o})},"214f":function(t,e,n){"use strict";var r=n("32e9"),o=n("2aba"),i=n("79e5"),a=n("be13"),c=n("2b4c");t.exports=function(t,e,n){var s=c(t),u=n(a,s,""[t]),f=u[0],l=u[1];i(function(){var e={};return e[s]=function(){return 7},7!=""[t](e)})&&(o(String.prototype,t,f),r(RegExp.prototype,s,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)}))}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function c(){var t;return"undefined"!==typeof XMLHttpRequest?t=n("b50d"):"undefined"!==typeof e&&(t=n("b50d")),t}var s={adapter:c(),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(t){s.headers[t]={}}),r.forEach(["post","put","patch"],function(t){s.headers[t]=r.merge(i)}),t.exports=s}).call(this,n("4362"))},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var a=[];r.forEach(e,function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},"391a":function(t,e,n){"use strict";var r=n("2b0e"),o=n("a142"),i=Object.prototype.hasOwnProperty;function a(t,e,n){var r=e[n];!Object(o["c"])(r)||i.call(t,n)&&!Object(o["c"])(t[n])||(i.call(t,n)&&Object(o["d"])(r)?t[n]=c(Object(t[n]),e[n]):t[n]=r)}function c(t,e){for(var n in e)i.call(e,n)&&a(t,e,n);return t}var s={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loadingTip:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",confirmDelete:"确定要删除么",telInvalid:"请填写正确的电话",vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCouponCell:{title:"优惠券",tips:"使用优惠",count:function(t){return"你有 "+t+" 个可用优惠"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠",enable:"可使用优惠券",disabled:"不可使用优惠券",placeholder:"请输入优惠码"},vanCouponItem:{valid:"有效期",unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}},u=r["a"].prototype,f="zh-CN",l={install:function(){var t;u.$vantLang||(r["a"].util.defineReactive(u,"$vantLang",f),r["a"].util.defineReactive(u,"$vantMessages",(t={},t[f]=s,t)))},use:function(t,e){var n;u.$vantLang=t,this.add((n={},n[t]=e,n))},add:function(t){void 0===t&&(t={}),c(u.$vantMessages,t)}};l.install();var p="__",h="--",d=function(t,e,n){return e?t+n+e:t},v=function t(e,n){if("string"===typeof n)return d(e,n,h);if(Array.isArray(n))return n.map(function(n){return t(e,n)});var r={};return Object.keys(n).forEach(function(t){r[e+h+t]=n[t]}),r},m={methods:{b:function(t,e){var n=this.$options.name;return t&&"string"!==typeof t&&(e=t,t=""),t=d(n,t,p),e?[t,v(t,e)]:t}}},y={computed:{$t:function(){var t=this.$options.name,e=t?Object(o["a"])(t)+".":"";if(!this.$vantMessages)return function(){return""};var n=this.$vantMessages[this.$vantLang];return function(t){for(var r=Object(o["b"])(n,e+t)||Object(o["b"])(n,t),i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];return"function"===typeof r?r.apply(null,a):r}}}},g=function(t){t.component(this.name,this)};e["a"]=function(t){return t.name="van-"+t.name,t.install=t.install||g,t.mixins=t.mixins||[],t.mixins.push(y,m),t.methods=t.methods||{},t.methods.isDef=o["c"],t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"3edb":function(t,e,n){"use strict";var r=n("d5e9"),o=n.n(r);o.a},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"4ec3":function(t,e,n){"use strict";n("96cf");var r=n("1da1"),o=n("bc3a"),i=n.n(o);e["a"]={getHomeInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/articles");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getArticle:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/articles/"+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getAboutInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/about");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getVideoInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/videos");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getVideo:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/videos/"+e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},5270:function(t,e,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),a=n("2444"),c=n("d925"),s=n("e683");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.baseURL&&!c(t.url)&&(t.url=s(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||a.adapter;return e(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"543e":function(t,e,n){"use strict";var r=n("391a"),o="#c9c9c9";e["a"]=Object(r["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.b([t.type,t.colorType]),style:t.style},[n("span",{class:t.b("spinner",t.type)},[t._l("spinner"===t.type?12:0,function(t,e){return n("i",{key:e})}),"circular"===t.type?n("svg",{class:t.b("circular"),attrs:{viewBox:"25 25 50 50"}},[n("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]):t._e()],2)])},name:"loading",props:{size:String,type:{type:String,default:"circular"},color:{type:String,default:o}},computed:{colorType:function(){var t=this.color;return"white"===t||"black"===t?t:""},style:function(){return{color:"black"===this.color?o:this.color,width:this.size,height:this.size}}}})},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},"68ef":function(t,e,n){},"6f2f":function(t,e,n){"use strict";var r=n("391a");e["a"]=Object(r["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDef(t.info)?n("div",{class:t.b()},[t._v("\n  "+t._s(t.info)+"\n")]):t._e()},name:"info",props:{info:[String,Number]}})},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,a){var c=[];c.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(i)&&c.push("domain="+i),!0===a&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"8df4":function(t,e,n){"use strict";var r=n("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o(function(e){t=e});return{token:e,cancel:t}},t.exports=o},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},9312:function(t,e,n){},9584:function(t,e,n){"use strict";e["a"]={props:{url:String,replace:Boolean,to:[String,Object]},methods:{routerLink:function(){var t=this.to,e=this.url,n=this.$router,r=this.replace;t&&n?n[r?"replace":"push"](t):e&&(r?location.replace(e):location.href=e)}}}},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=w;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},m={};m[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==r&&o.call(g,a)&&(m=g);var b=j.prototype=E.prototype=Object.create(m);_.prototype=b.constructor=j,j.constructor=_,j[s]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},f.awrap=function(t){return{__await:t}},S(C.prototype),C.prototype[c]=function(){return this},f.AsyncIterator=C,f.async=function(t,e,n,r){var o=new C(w(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=R,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=O(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function E(){}function _(){}function j(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){function e(n,r,i,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function O(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return I()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?d:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9d6f":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tabbar",{on:{change:t.handleChange},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},[n("tabbar-item",[n("i",{staticClass:"iconfont"},[t._v("")]),n("span",{staticClass:"home-text"},[t._v("首页")])]),n("tabbar-item",[n("i",{staticClass:"iconfont"},[t._v("")]),n("span",{staticClass:"home-text"},[t._v("视频展示")])]),n("tabbar-item",[n("i",{staticClass:"iconfont"},[t._v("")]),n("span",{staticClass:"home-text"},[t._v("关于我们")])])],1)},i=[],a=(n("a481"),n("c5f6"),n("68ef"),n("ae73"),n("6f2f")),c=n("fe7e"),s=n("9584"),u=Object(c["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.b({active:t.active}),on:{click:t.onClick}},[n("div",{class:t.b("icon",{dot:t.dot})},[t._t("icon",[t.icon?n("icon",{attrs:{name:t.icon}}):t._e()],{active:t.active}),n("van-info",{attrs:{info:t.info}})],2),n("div",{class:t.b("text")},[t._t("default",null,{active:t.active})],2)])},name:"tabbar-item",components:(r={},r[a["a"].name]=a["a"],r),mixins:[s["a"]],props:{icon:String,dot:Boolean,info:[String,Number]},data:function(){return{active:!1}},beforeCreate:function(){this.$parent.items.push(this)},destroyed:function(){this.$parent.items.splice(this.$parent.items.indexOf(this),1)},methods:{onClick:function(t){this.$parent.onChange(this.$parent.items.indexOf(this)),this.$emit("click",t),this.routerLink()}}}),f=(n("9312"),Object(c["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"van-hairline--top-bottom",class:t.b({fixed:t.fixed}),style:t.style},[t._t("default")],2)},name:"tabbar",data:function(){return{items:[]}},props:{value:Number,fixed:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},computed:{style:function(){return{zIndex:this.zIndex}}},watch:{items:function(){this.setActiveItem()},value:function(){this.setActiveItem()}},methods:{setActiveItem:function(){var t=this;this.items.forEach(function(e,n){e.active=n===t.value})},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))}}})),l={name:"TabBar",components:{Tabbar:f,TabbarItem:u},props:{active:{type:Number,default:0}},data:function(){return{activeIndex:this.active}},activated:function(){this.activeIndex=this.active},methods:{handleChange:function(){switch(this.activeIndex){case 0:this.$router.replace("/");break;case 1:this.$router.replace("/navVideo");break;case 2:this.$router.replace("/navAbout");break}}}},p=l,h=(n("3edb"),n("2877")),d=Object(h["a"])(p,o,i,!1,null,null,null);d.options.__file="TabBar.vue";e["a"]=d.exports},"9fa6":function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}function i(t){for(var e,n,i=String(t),a="",c=0,s=r;i.charAt(0|c)||(s="=",c%1);a+=s.charAt(63&e>>8-c%1*8)){if(n=i.charCodeAt(c+=.75),n>255)throw new o;e=e<<8|n}return a}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=i},a142:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"d",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"e",function(){return o}),n.d(e,"a",function(){return u});var r=n("2b0e"),o=r["a"].prototype.$isServer;function i(t){return void 0!==t&&null!==t}function a(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function c(t,e){var n=e.split("."),r=t;return n.forEach(function(t){r=i(r[t])?r[t]:""}),r}var s=/-(\w)/g;function u(t){return t.replace(s,function(t,e){return e.toUpperCase()})}},a481:function(t,e,n){n("214f")("replace",2,function(t,e,n){return[function(r,o){"use strict";var i=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},n]})},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),i=n("79e5"),a=n("fdef"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var o={},c=i(function(){return!!a[t]()||s[t]()!=s}),u=o[t]=c?e(p):a[t];n&&(o[n]=u),r(r.P+r.F*c,"String",o)},p=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},ae73:function(t,e,n){},b50d:function(t,e,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),a=n("c345"),c=n("3934"),s=n("2d83"),u="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n("9fa6");t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var h=new XMLHttpRequest,d="onreadystatechange",v=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in h||c(t.url)||(h=new window.XDomainRequest,d="onload",v=!0,h.onprogress=function(){},h.ontimeout=function(){}),t.auth){var m=t.auth.username||"",y=t.auth.password||"";p.Authorization="Basic "+u(m+":"+y)}if(h.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h[d]=function(){if(h&&(4===h.readyState||v)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?h.response:h.responseText,i={data:r,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:n,config:t,request:h};o(e,f,i),h=null}},h.onerror=function(){f(s("Network Error",t,null,h)),h=null},h.ontimeout=function(){f(s("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var g=n("7aac"),b=(t.withCredentials||c(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;b&&(p[t.xsrfHeaderName]=b)}if("setRequestHeader"in h&&r.forEach(p,function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete p[e]:h.setRequestHeader(e,t)}),t.withCredentials&&(h.withCredentials=!0),t.responseType)try{h.responseType=t.responseType}catch(w){if("json"!==t.responseType)throw w}"function"===typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){h&&(h.abort(),f(t),h=null)}),void 0===l&&(l=null),h.send(l)})}},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},c401:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},c532:function(t,e,n){"use strict";var r=n("1d2b"),o=n("044b"),i=Object.prototype.toString;function a(t){return"[object Array]"===i.call(t)}function c(t){return"[object ArrayBuffer]"===i.call(t)}function s(t){return"undefined"!==typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function l(t){return"number"===typeof t}function p(t){return"undefined"===typeof t}function h(t){return null!==t&&"object"===typeof t}function d(t){return"[object Date]"===i.call(t)}function v(t){return"[object File]"===i.call(t)}function m(t){return"[object Blob]"===i.call(t)}function y(t){return"[object Function]"===i.call(t)}function g(t){return h(t)&&y(t.pipe)}function b(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function w(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function _(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=_(t[n],e):t[n]=e}for(var n=0,r=arguments.length;n<r;n++)E(arguments[n],e);return t}function j(t,e,n){return E(e,function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e}),t}t.exports={isArray:a,isArrayBuffer:c,isBuffer:o,isFormData:s,isArrayBufferView:u,isString:f,isNumber:l,isObject:h,isUndefined:p,isDate:d,isFile:v,isBlob:m,isFunction:y,isStream:g,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:E,merge:_,extend:j,trim:w}},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("2d95"),a=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,f=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,h="Number",d=r[h],v=d,m=d.prototype,y=i(n("2aeb")(m))==h,g="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():p(e,3);var n,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var a,s=e.slice(2),u=0,f=s.length;u<f;u++)if(a=s.charCodeAt(u),a<48||a>o)return NaN;return parseInt(s,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(y?s(function(){m.valueOf.call(n)}):i(n)!=h)?a(new v(b(e)),n,d):b(e)};for(var w,x=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)o(v,w=x[E])&&!o(d,w)&&l(d,w,f(v,w));d.prototype=m,m.constructor=d,n("2aba")(r,h,d)}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},cee4:function(t,e,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),a=n("2444");function c(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var s=c(a);s.Axios=i,s.create=function(t){return c(r.merge(a,t))},s.Cancel=n("7a77"),s.CancelToken=n("8df4"),s.isCancel=n("2e67"),s.all=function(t){return Promise.all(t)},s.spread=n("0df6"),t.exports=s,t.exports.default=s},d5e9:function(t,e,n){},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===a(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),c=a,s=0;s<a;s++)if(o[s]!==i[s]){c=s;break}var u=[];for(s=c;s<o.length;s++)u.push("..");return u=u.concat(i.slice(c)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},fe7e:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}var o,i=n("391a"),a=n("6f2f"),c=Object(i["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",t._g({class:[t.classPrefix,t.classPrefix+"-"+t.name],style:t.style},t.$listeners),[t._t("default"),n("van-info",{attrs:{info:t.info}})],2)},name:"icon",components:(o={},o[a["a"].name]=a["a"],o),props:{name:String,info:[String,Number],color:String,size:String,classPrefix:{type:String,default:"van-icon"}},computed:{style:function(){return{color:this.color,fontSize:this.size}}}}),s=n("543e"),u=n("9584"),f=Object(i["a"])({render:function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{class:[e.b((t={center:e.center,required:e.required,borderless:!e.border,clickable:e.isLink||e.clickable},t[e.size]=e.size,t))],on:{click:e.onClick}},[e._t("icon",[e.icon?r("icon",{class:e.b("left-icon"),attrs:{name:e.icon}}):e._e()]),e.isDef(e.title)||e.$slots.title?r("div",{class:e.b("title")},[e._t("title",[r("span",{domProps:{textContent:e._s(e.title)}}),e.label?r("div",{class:e.b("label"),domProps:{textContent:e._s(e.label)}}):e._e()])],2):e._e(),e.isDef(e.value)||e.$slots.default?r("div",{class:e.b("value",{alone:!e.$slots.title&&!e.title})},[e._t("default",[r("span",{domProps:{textContent:e._s(e.value)}})])],2):e._e(),e._t("right-icon",[e.isLink?r("icon",{class:e.b("right-icon",e.arrowDirection),attrs:{name:"arrow"}}):e._e()]),e._t("extra")],2)},name:"cell",components:{Icon:c},mixins:[u["a"]],props:{icon:String,size:String,label:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,title:[String,Number],value:[String,Number],arrowDirection:String,border:{type:Boolean,default:!0}},methods:{onClick:function(){this.$emit("click"),this.routerLink()}}}),l=Object(i["a"])({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.b(),{"van-hairline--top-bottom":t.border}]},[t._t("default")],2)},name:"cell-group",props:{border:{type:Boolean,default:!0}}});e["a"]=function(t){return t.components=r(t.components||{},{Icon:c,Loading:s["a"],Cell:f,CellGroup:l}),Object(i["a"])(t)}}}]);
//# sourceMappingURL=chunk-3b1e2382.692b9638.js.map