/*! For license information please see 85.9c354873.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{85:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var r,o,i,a,c,u,s,l,f,h,p=n(439),d=n(634),v=n(168),g=n(867),y=g.ZP.input(r||(r=(0,v.Z)(["\n  padding: 4px 4px;\n  width: 250px;\n  border-radius: 4px;\n  border: 2px solid #ba704f;\n  outline: none;\n  margin-right: 5px;\n"]))),m=g.ZP.button(o||(o=(0,v.Z)(["\n  padding: 4px 4px;\n  border-radius: 4px;\n  border: 2px solid #ba704f;\n  background-color: #ffffff;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: #ba704f;\n  }\n"]))),x=n(184),w=function(t){var e=t.inputValue,n=t.onSubmit;return(0,x.jsxs)("form",{children:[(0,x.jsx)(y,{type:"text",name:"query",value:e,onSubmit:function(t){return n(t.target.value)},placeholder:"Search movies"}),(0,x.jsx)(m,{type:"submit",children:"Search"})]})},b=n(861),j=n(243),L=n(791),_=n(87),Z=g.ZP.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 35px;\n  list-style: none;\n  margin: 45px 0 0 0;\n  padding: 0;\n"]))),E=g.ZP.li(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 5px;\n  font-size: 14px;\n  width: 160px;\n  text-align: center;\n"]))),k=g.ZP.img(c||(c=(0,v.Z)(["\n  width: 100px;\n  height: 150px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n"]))),P=g.ZP.img(u||(u=(0,v.Z)(["\n  width: 100px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n"]))),O=g.ZP.p(s||(s=(0,v.Z)(["\n  font-weight: 500;\n"]))),S=g.ZP.p(l||(l=(0,v.Z)(["\n  font-weight: 400;\n"]))),N=(0,g.ZP)(_.OL)(f||(f=(0,v.Z)(["\n  padding: 4px 4px;\n  border-radius: 4px;\n  border: 2px solid #ba704f;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  font-size: 14px;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: #ba704f;\n  }\n"]))),G=g.ZP.p(h||(h=(0,v.Z)(["\n  font-weight: 500;\n  text-align: start;\n  position: absolute;\n  top: 120px;\n  left: 25px;\n"])));function F(){F=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new Z(o||[]);return r(a,"_invoke",{value:b(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(E([])));y&&y!==e&&n.call(y,i)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,i,a,c){var u=l(t[r],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,r(m,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=E,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var T=function(t){var e=t.movieName,n=(0,L.useState)(""),r=(0,p.Z)(n,2),o=r[0],i=r[1];return(0,L.useEffect)((function(){var t=function(){var t=(0,b.Z)(F().mark((function t(){var n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"40f1e2fc01a3359e74179736ebf3e1b9",t.next=4,j.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("40f1e2fc01a3359e74179736ebf3e1b9","&query=").concat(e));case 4:n=t.sent,i(n.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Something went wrong while getting the movies. Please reload the page.");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();e&&t()}),[e]),(0,x.jsx)(Z,{children:e&&o.length>0?o.map((function(t){return(0,x.jsxs)(E,{children:[t.poster_path?(0,x.jsx)(k,{src:"https://www.themoviedb.org/t/p/w300".concat(t.poster_path),alt:"".concat(t.original_title," poster")}):(0,x.jsx)(P,{src:"https://via.placeholder.com/100x150"}),(0,x.jsx)(O,{children:t.original_title}),(0,x.jsxs)(S,{children:["(",t.release_date.substring(0,4),")"]}),(0,x.jsx)(N,{to:"/movies/".concat(t.id),state:{from:"/movies"},children:"Details"})]},t.id)})):(0,x.jsx)(G,{children:e?'No results found for "'.concat(e,'"'):""})})},q=function(){var t,e=(0,_.lr)(),n=(0,p.Z)(e,2),r=n[0],o=n[1],i=null!==(t=r.get("query"))&&void 0!==t?t:"";return(0,x.jsxs)(d.or,{children:[(0,x.jsx)(w,{value:i,onSubmit:function(t){o(""!==t?{query:t}:{})}}),(0,x.jsx)(T,{movieName:i})]})}}}]);
//# sourceMappingURL=85.9c354873.chunk.js.map