function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function l(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(){return p(" ")}function d(){return p("")}function g(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function $(e){return Array.from(e.childNodes)}function v(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){for(let e=0;e<s.attributes.length;e+=1){const t=s.attributes[e];n[t.name]||s.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):m(t)}function b(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=t,e.splice(n,1)[0]}return p(t)}function y(e,t){t=""+t,e.data!==t&&(e.data=t)}let E;function _(e){E=e}function S(){if(!E)throw new Error("Function called outside component initialization");return E}const w=[],x=Promise.resolve();let A=!1;const N=[],R=[],P=[];function L(e){R.push(e)}function q(){const e=new Set;do{for(;w.length;){const e=w.shift();_(e),C(e.$$)}for(;N.length;)N.shift()();for(;R.length;){const t=R.pop();e.has(t)||(t(),e.add(t))}}while(w.length);for(;P.length;)P.pop()();A=!1}function C(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(L))}let O;function j(){O={remaining:0,callbacks:[]}}function k(){O.remaining||s(O.callbacks)}function U(e){O.callbacks.push(e)}function I(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)s[e]||(n[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function T(e,t,r){const{fragment:a,on_mount:c,on_destroy:l,after_render:i}=e.$$;a.m(t,r),L(()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]}),i.forEach(L)}function D(e,t){e.$$.dirty||(w.push(e),A||(A=!0,x.then(q)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function H(t,n,o,a,c,l){const i=E;_(t);const u=n.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let m=!1;f.ctx=o?o(t,u,(e,n)=>{f.ctx&&c(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),m&&D(t,e))}):u,f.update(),m=!0,s(f.before_render),f.fragment=a(f.ctx),n.target&&(n.hydrate?f.fragment.l($(n.target)):f.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),T(t,n.target,n.anchor),q()),_(i)}class V{$destroy(){var t,n;n=!0,(t=this).$$&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function B(t,n=e){let r;const s=[];function o(e){if(a(t,e)){if(t=e,!r)return;s.forEach(e=>e[1]()),s.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&r()}}}}const J={},K=()=>({});function M(t){var n,r;return{c(){n=m("a"),r=m("img"),this.h()},l(e){var t=$(n=v(e,"A",{href:!0},!1));$(r=v(t,"IMG",{alt:!0,src:!0,class:!0},!1)).forEach(u),t.forEach(u),this.h()},h(){r.alt="iota-x-team ",r.src="logo.svg",r.className="svelte-v1i57d",n.href="."},m(e,t){i(e,n,t),l(n,r)},p:e,i:e,o:e,d(e){e&&u(n)}}}class W extends V{constructor(e){super(),H(this,e,null,M,a,[])}}function X(t){var n,r,s,o,a,c,f,d,g,y,E,_;return{c(){n=m("nav"),r=m("a"),s=p("home"),a=h(),c=m("a"),f=p("About us"),g=h(),y=m("a"),E=p("blog"),this.h()},l(e){var t=$(n=v(e,"NAV",{class:!0},!1)),o=$(r=v(t,"A",{class:!0,href:!0},!1));s=b(o,"home"),o.forEach(u),a=b(t,"\n  ");var l=$(c=v(t,"A",{class:!0,href:!0},!1));f=b(l,"About us"),l.forEach(u),g=b(t,"\n  ");var i=$(y=v(t,"A",{rel:!0,class:!0,href:!0},!1));E=b(i,"blog"),i.forEach(u),t.forEach(u),this.h()},h(){r.className=o=(void 0===t.segment?"selected":"")+" svelte-c9molh",r.href=".",c.className=d=("about"===t.segment?"selected":"")+" svelte-c9molh",c.href="about",y.rel="prefetch",y.className=_=("blog"===t.segment?"selected":"")+" svelte-c9molh",y.href="blog",n.className="svelte-c9molh"},m(e,t){i(e,n,t),l(n,r),l(r,s),l(n,a),l(n,c),l(c,f),l(n,g),l(n,y),l(y,E)},p(e,t){e.segment&&o!==(o=(void 0===t.segment?"selected":"")+" svelte-c9molh")&&(r.className=o),e.segment&&d!==(d=("about"===t.segment?"selected":"")+" svelte-c9molh")&&(c.className=d),e.segment&&_!==(_=("blog"===t.segment?"selected":"")+" svelte-c9molh")&&(y.className=_)},i:e,o:e,d(e){e&&u(n)}}}function F(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class G extends V{constructor(e){super(),H(this,e,F,X,a,["segment"])}}function Y(e){var t,n,r,s=new W({}),o=new G({props:{segment:e.segment}});return{c(){t=m("header"),s.$$.fragment.c(),n=h(),o.$$.fragment.c(),this.h()},l(e){var r=$(t=v(e,"HEADER",{class:!0},!1));s.$$.fragment.l(r),n=b(r,"\n  "),o.$$.fragment.l(r),r.forEach(u),this.h()},h(){t.className="svelte-y9ah38"},m(e,a){i(e,t,a),T(s,t,null),l(t,n),T(o,t,null),r=!0},p(e,t){var n={};e.segment&&(n.segment=t.segment),o.$set(n)},i(e){r||(s.$$.fragment.i(e),o.$$.fragment.i(e),r=!0)},o(e){s.$$.fragment.o(e),o.$$.fragment.o(e),r=!1},d(e){e&&u(t),s.$destroy(),o.$destroy()}}}function z(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class Q extends V{constructor(e){super(),H(this,e,z,Y,a,["segment"])}}function Z(e){var n,r,s,o,a,f,d,g,y=new Q({props:{segment:e.segment}});const E=e.$$slots.default,_=function(e,t,n){if(e){const r=c(e,t,n);return e[0](r)}}(E,e,null);return{c(){n=m("div"),y.$$.fragment.c(),r=h(),s=m("main"),_&&_.c(),o=h(),a=m("footer"),f=m("span"),d=p("IOTA WebAssembly X-Team"),this.h()},l(e){var t=$(n=v(e,"DIV",{class:!0},!1));y.$$.fragment.l(t),r=b(t,"\n\n  ");var c=$(s=v(t,"MAIN",{class:!0},!1));_&&_.l(c),c.forEach(u),o=b(t,"\n\n  ");var l=$(a=v(t,"FOOTER",{class:!0},!1)),i=$(f=v(l,"SPAN",{},!1));d=b(i,"IOTA WebAssembly X-Team"),i.forEach(u),l.forEach(u),t.forEach(u),this.h()},h(){s.className="svelte-v25qrq",a.className="svelte-v25qrq",n.className="layout svelte-v25qrq"},m(e,t){i(e,n,t),T(y,n,null),l(n,r),l(n,s),_&&_.m(s,null),l(n,o),l(n,a),l(a,f),l(f,d),g=!0},p(e,n){var r={};e.segment&&(r.segment=n.segment),y.$set(r),_&&_.p&&e.$$scope&&_.p(function(e,n,r,s){return e[1]?t({},t(n.$$scope.changed||{},e[1](s?s(r):{}))):n.$$scope.changed||{}}(E,n,e,null),c(E,n,null))},i(e){g||(y.$$.fragment.i(e),_&&_.i&&_.i(e),g=!0)},o(e){y.$$.fragment.o(e),_&&_.o&&_.o(e),g=!1},d(e){e&&u(n),y.$destroy(),_&&_.d(e)}}}function ee(e,t,n){let{segment:r}=t,{$$slots:s={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:s,$$scope:o}}class te extends V{constructor(e){super(),H(this,e,ee,Z,a,["segment"])}}function ne(e){var t,n,r=e.error.stack;return{c(){t=m("pre"),n=p(r)},l(e){var s=$(t=v(e,"PRE",{},!1));n=b(s,r),s.forEach(u)},m(e,r){i(e,t,r),l(t,n)},p(e,t){e.error&&r!==(r=t.error.stack)&&y(n,r)},d(e){e&&u(t)}}}function re(t){var n,r,s,o,a,c,f,g,E,_=t.error.message;document.title=n=t.status;var S=t.dev&&t.error.stack&&ne(t);return{c(){r=h(),s=m("h1"),o=p(t.status),a=h(),c=m("p"),f=p(_),g=h(),S&&S.c(),E=d(),this.h()},l(e){r=b(e,"\n\n");var n=$(s=v(e,"H1",{class:!0},!1));o=b(n,t.status),n.forEach(u),a=b(e,"\n\n");var l=$(c=v(e,"P",{class:!0},!1));f=b(l,_),l.forEach(u),g=b(e,"\n\n"),S&&S.l(e),E=d(),this.h()},h(){s.className="svelte-8od9u6",c.className="svelte-8od9u6"},m(e,t){i(e,r,t),i(e,s,t),l(s,o),i(e,a,t),i(e,c,t),l(c,f),i(e,g,t),S&&S.m(e,t),i(e,E,t)},p(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&y(o,t.status),e.error&&_!==(_=t.error.message)&&y(f,_),t.dev&&t.error.stack?S?S.p(e,t):((S=ne(t)).c(),S.m(E.parentNode,E)):S&&(S.d(1),S=null)},i:e,o:e,d(e){e&&(u(r),u(s),u(a),u(c),u(g)),S&&S.d(e),e&&u(E)}}}function se(e,t,n){let{status:r,error:s}=t;return e.$set=e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:false}}class oe extends V{constructor(e){super(),H(this,e,se,re,a,["status","error"])}}function ae(e){var n,r,s=[e.level1.props],o=e.level1.component;function a(e){let n={};for(var r=0;r<s.length;r+=1)n=t(n,s[r]);return{props:n}}if(o)var c=new o(a());return{c(){c&&c.$$.fragment.c(),n=d()},l(e){c&&c.$$.fragment.l(e),n=d()},m(e,t){c&&T(c,e,t),i(e,n,t),r=!0},p(e,t){var r=e.level1?I(s,[t.level1.props]):{};if(o!==(o=t.level1.component)){if(c){j();const e=c;U(()=>{e.$destroy()}),e.$$.fragment.o(1),k()}o?((c=new o(a())).$$.fragment.c(),c.$$.fragment.i(1),T(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(e){r||(c&&c.$$.fragment.i(e),r=!0)},o(e){c&&c.$$.fragment.o(e),r=!1},d(e){e&&u(n),c&&c.$destroy(e)}}}function ce(e){var t,n=new oe({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,r){T(n,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function le(e){var t,n,r,s,o=[ce,ae],a=[];function c(e){return e.error?0:1}return t=c(e),n=a[t]=o[t](e),{c(){n.c(),r=d()},l(e){n.l(e),r=d()},m(e,n){a[t].m(e,n),i(e,r,n),s=!0},p(e,s){var l=t;(t=c(s))===l?a[t].p(e,s):(j(),U(()=>{a[l].d(1),a[l]=null}),n.o(1),k(),(n=a[t])||(n=a[t]=o[t](s)).c(),n.i(1),n.m(r.parentNode,r))},i(e){s||(n&&n.i(),s=!0)},o(e){n&&n.o(),s=!1},d(e){a[t].d(e),e&&u(r)}}}function ie(e){var n,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[le]},$$scope:{ctx:e}};for(var o=0;o<r.length;o+=1)s=t(s,r[o]);var a=new te({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,t){T(a,e,t),n=!0},p(e,t){var n=e.segments||e.level0?I(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),a.$set(n)},i(e){n||(a.$$.fragment.i(e),n=!0)},o(e){a.$$.fragment.o(e),n=!1},d(e){a.$destroy(e)}}}function ue(e,t,n){let{stores:r,error:s,status:o,segments:a,level0:c,level1:l=null,notify:i}=t;var u,f,m;return u=i,S().$$.after_render.push(u),f=J,m=r,S().$$.context.set(f,m),e.$set=e=>{"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",o=e.status),"segments"in e&&n("segments",a=e.segments),"level0"in e&&n("level0",c=e.level0),"level1"in e&&n("level1",l=e.level1),"notify"in e&&n("notify",i=e.notify)},{stores:r,error:s,status:o,segments:a,level0:c,level1:l,notify:i}}class fe extends V{constructor(e){super(),H(this,e,ue,ie,a,["stores","error","status","segments","level0","level1","notify"])}}const me=[/^\/blog\.json$/,/^\/blog\/posts\/hello-world\/?$/,/^\/blog\/([^\/]+?)\.json$/],pe=[{js:()=>import("./index.380c0ff9.js"),css:[]},{js:()=>import("./about.325fc516.js"),css:[]},{js:()=>import("./index.e4908fd8.js"),css:[]},{js:()=>import("./[slug].5b538479.js"),css:[]}],he=(de=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:de(e[1])})}]}]);var de;const ge="undefined"!=typeof __SAPPER__&&__SAPPER__;let $e,ve,be,ye=!1,Ee=[],_e="{}";const Se={page:function(e){const t=B(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||n&&t!==r)&&e(r=t)})}}}({}),preloading:B(null),session:B(ge&&ge.session)};let we,xe;Se.session.subscribe(async e=>{if(we=e,!ye)return;xe=!0;const t=Oe(new URL(location.href)),n=ve={},{redirect:r,props:s,branch:o}=await Ie(t);n===ve&&await Ue(r,o,s,t.page)});let Ae,Ne=null;let Re,Pe=1;const Le="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},qe={};function Ce(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function Oe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ge.baseUrl))return null;let t=e.pathname.slice(ge.baseUrl.length);if(""===t&&(t="/"),!me.some(e=>e.test(t)))for(let n=0;n<he.length;n+=1){const r=he[n],s=r.pattern.exec(t);if(s){const n=Ce(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:c}}}}function je(){return{x:pageXOffset,y:pageYOffset}}async function ke(e,t,n,r){if(t)Re=t;else{const e=je();qe[Re]=e,t=Re=++Pe,qe[Re]=n?e:{x:0,y:0}}Re=t,$e&&Se.preloading.set(!0);const s=Ne&&Ne.href===e.href?Ne.promise:Ie(e);Ne=null;const o=ve={},{redirect:a,props:c,branch:l}=await s;if(o===ve&&(await Ue(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=qe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}qe[Re]=e,e&&scrollTo(e.x,e.y)}}async function Ue(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=Oe(new URL(e,document.baseURI));return n?(Le[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),ke(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Se.page.set(r),Se.preloading.set(!1),$e)$e.$set(n);else{n.stores={page:{subscribe:Se.page.subscribe},preloading:{subscribe:Se.preloading.subscribe},session:Se.session},n.level0={props:await be},n.notify=Se.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)De(e.nextSibling);De(e),De(t)}$e=new fe({target:Ae,props:n,hydrate:!0})}Ee=t,_e=JSON.stringify(r.query),ye=!0,xe=!1}async function Ie(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;be||(be=ge.preloaded[0]||K.call(a,{host:n.host,path:n.path,query:n.query,params:{}},we));let l=1;try{const s=JSON.stringify(n.query),i=t.pattern.exec(n.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,n,r){if(r!==_e)return!0;const s=Ee[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!t)return{segment:f};const m=l++;if(!xe&&!u&&Ee[c]&&Ee[c].part===t.i)return Ee[c];u=!1;const{default:p,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Te);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(pe[t.i]);let d;return d=ye||!ge.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},we):{}:ge.preloaded[c+1],o["level"+m]={component:p,props:d,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Te(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function De(e){e.parentNode.removeChild(e)}function He(e){const t=Oe(new URL(e,document.baseURI));if(t)return Ne&&e===Ne.href||function(e,t){Ne={href:e,promise:t}}(e,Ie(t)),Ne.promise}let Ve;function Be(e){clearTimeout(Ve),Ve=setTimeout(()=>{Je(e)},20)}function Je(e){const t=Me(e.target);t&&"prefetch"===t.rel&&He(t.href)}function Ke(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Me(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Oe(s);if(o){ke(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Le.pushState({id:Re},"",s.href)}}function Me(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function We(e){if(qe[Re]=je(),e.state){const t=Oe(new URL(location.href));t?ke(t,e.state.id):location.href=location.href}else Pe=Pe+1,function(e){Re=e}(Pe),Le.replaceState({id:Re},"",location.href)}var Xe;Xe={target:document.querySelector("#sapper")},"scrollRestoration"in Le&&(Le.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Le.scrollRestoration="auto"}),addEventListener("load",()=>{Le.scrollRestoration="manual"}),function(e){Ae=e}(Xe.target),addEventListener("click",Ke),addEventListener("popstate",We),addEventListener("touchstart",Je),addEventListener("mousemove",Be),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Le.replaceState({id:Pe},"",t);const n=new URL(location.href);if(ge.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=ge;be||(be=o&&o[0]),Ue(null,[],{error:c,status:a,session:s,level0:{props:be},level1:{props:{status:a,error:c},component:oe},segments:o},{host:t,path:n,query:Ce(r),params:{}})}();const r=Oe(n);return r?ke(r,Pe,!0,e):void 0});export{V as S,h as a,v as b,b as c,$ as d,m as e,u as f,i as g,l as h,H as i,y as j,f as k,g as l,T as m,e as n,a as s,p as t};
