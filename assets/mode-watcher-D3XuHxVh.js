import{g as E,w as h,d as F,S as p,i as x,s as $,h as y,Y as _,v as L,z as ee,Z as P,A as w,M,T as q,L as z,o as te}from"./svelte-BoQz9FME.js";let D,J;function Q(o){if(typeof document>"u")return;clearTimeout(D),clearTimeout(J);const e=document.createElement("style"),n=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);e.appendChild(n);const t=()=>document.head.appendChild(e),i=()=>document.head.removeChild(e);if(typeof window.getComputedStyle<"u"){t(),o(),window.getComputedStyle(e).opacity,i();return}if(typeof window.requestAnimationFrame<"u"){t(),o(),window.requestAnimationFrame(i);return}t(),D=window.setTimeout(()=>{o(),J=window.setTimeout(i,120)},120)}function O(o){return o.filter(e=>e.length>0)}const B={getItem:o=>null,setItem:(o,e)=>{}},g=typeof document<"u",ne=["dark","light","system"],T=h("mode-watcher-mode"),C=h("mode-watcher-theme"),I=ie(),K=se(),H=h(void 0),Y=re(),V=h(!0),Z=h([]),j=h([]),G=ae(),oe=ce();function ie(){const o="system",e=g?localStorage:B,n=e.getItem(i());let t=N(n)?n:o;function i(){return E(T)}const{subscribe:a,set:r}=h(t,()=>{if(!g)return;const c=d=>{if(d.key!==i())return;const u=d.newValue;N(u)?r(t=u):r(t=o)};return addEventListener("storage",c),()=>removeEventListener("storage",c)});function s(c){r(t=c),e.setItem(i(),t)}return{subscribe:a,set:s}}function re(){const o=g?localStorage:B,e=o.getItem(t());let n=e??"";function t(){return E(C)}const{subscribe:i,set:a}=h(n,()=>{if(!g)return;const s=c=>{if(c.key!==t())return;const d=c.newValue;a(d===null?n="":n=d)};return addEventListener("storage",s),()=>removeEventListener("storage",s)});function r(s){a(n=s),o.setItem(t(),n)}return{subscribe:i,set:r}}function se(){let e=!0;const{subscribe:n,set:t}=h(void 0,()=>{if(!g)return;const r=c=>{e&&t(c.matches?"light":"dark")},s=window.matchMedia("(prefers-color-scheme: light)");return s.addEventListener("change",r),()=>s.removeEventListener("change",r)});function i(){if(!g)return;const r=window.matchMedia("(prefers-color-scheme: light)");t(r.matches?"light":"dark")}function a(r){e=r}return{subscribe:n,query:i,tracking:a}}function ae(){const{subscribe:o}=F([I,K,H,V,Z,j],([e,n,t,i,a,r])=>{if(!g)return;const s=e==="system"?n:e,c=O(a),d=O(r);function u(){const m=document.documentElement,f=document.querySelector('meta[name="theme-color"]');s==="light"?(c.length&&m.classList.remove(...c),d.length&&m.classList.add(...d),m.style.colorScheme="light",f&&t&&f.setAttribute("content",t.light)):(d.length&&m.classList.remove(...d),c.length&&m.classList.add(...c),m.style.colorScheme="dark",f&&t&&f.setAttribute("content",t.dark))}return i?Q(u):u(),s});return{subscribe:o}}function ce(){const{subscribe:o}=F([Y,V],([e,n])=>{if(!g)return;function t(){document.documentElement.setAttribute("data-theme",e)}return n?Q(t):t(),e});return{subscribe:o}}function N(o){return typeof o!="string"?!1:ne.includes(o)}function ye(){I.set(E(G)==="dark"?"light":"dark")}function le(o){I.set(o)}function de(o){Y.set(o)}function v({defaultMode:o,themeColors:e,darkClassNames:n=["dark"],lightClassNames:t=[],defaultTheme:i=""}){const a=document.documentElement,r=localStorage.getItem("mode-watcher-mode")||o,s=localStorage.getItem("mode-watcher-theme")||i,c=r==="light"||r==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(c?(n.length&&a.classList.remove(...n),t.length&&a.classList.add(...t)):(t.length&&a.classList.remove(...t),n.length&&a.classList.add(...n)),a.style.colorScheme=c?"light":"dark",e){const d=document.querySelector('meta[name="theme-color"]');d&&d.setAttribute("content",r==="light"?e.light:e.dark)}s&&(a.setAttribute("data-theme",s),localStorage.setItem("mode-watcher-theme",s)),localStorage.setItem("mode-watcher-mode",r)}function U(o){let e,n;return{c(){e=ee("meta"),_(e,"name","theme-color"),_(e,"content",n=o[0].dark)},m(t,i){L(t,e,i)},p(t,i){i&1&&n!==(n=t[0].dark)&&_(e,"content",n)},d(t){t&&y(e)}}}function me(o){let e,n="<script>("+v.toString()+")("+JSON.stringify(o[2])+");<\/script>",t;return{c(){e=new P(!1),t=w(),e.a=t},m(i,a){e.m(n,i,a),L(i,t,a)},p:M,d(i){i&&(y(t),e.d())}}}function ue(o){let e,n=`<script nonce=${o[1]}>(`+v.toString()+")("+JSON.stringify(o[2])+");<\/script>",t;return{c(){e=new P(!1),t=w(),e.a=t},m(i,a){e.m(n,i,a),L(i,t,a)},p(i,a){a&2&&n!==(n=`<script nonce=${i[1]}>(`+v.toString()+")("+JSON.stringify(i[2])+");<\/script>")&&e.p(n)},d(i){i&&(y(t),e.d())}}}function fe(o){let e,n,t=o[0]&&U(o);function i(s,c){return s[1]?ue:me}let a=i(o),r=a(o);return{c(){t&&t.c(),e=w(),r.c(),n=w()},m(s,c){t&&t.m(document.head,null),q(document.head,e),r.m(document.head,null),q(document.head,n)},p(s,[c]){s[0]?t?t.p(s,c):(t=U(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),a===(a=i(s))&&r?r.p(s,c):(r.d(1),r=a(s),r&&(r.c(),r.m(n.parentNode,n)))},i:M,o:M,d(s){t&&t.d(s),y(e),r.d(s),y(n)}}}function he(o,e,n){let t,i,a;z(o,C,l=>n(12,i=l)),z(o,T,l=>n(13,a=l));let{track:r=!0}=e,{defaultMode:s="system"}=e,{themeColors:c=void 0}=e,{disableTransitions:d=!0}=e,{darkClassNames:u=["dark"]}=e,{lightClassNames:m=[]}=e,{defaultTheme:f=""}=e,{nonce:k=""}=e,{themeStorageKey:S="mode-watcher-theme"}=e,{modeStorageKey:b="mode-watcher-mode"}=e;te(()=>{const l=G.subscribe(()=>{}),W=oe.subscribe(()=>{});K.tracking(r),K.query();const A=localStorage.getItem(a);le(N(A)?A:s);const X=localStorage.getItem(i);return de(X||f),()=>{l(),W()}});const R={defaultMode:s,themeColors:c,darkClassNames:u,lightClassNames:m,defaultTheme:f,modeStorageKey:b,themeStorageKey:S};return o.$$set=l=>{"track"in l&&n(3,r=l.track),"defaultMode"in l&&n(4,s=l.defaultMode),"themeColors"in l&&n(0,c=l.themeColors),"disableTransitions"in l&&n(5,d=l.disableTransitions),"darkClassNames"in l&&n(6,u=l.darkClassNames),"lightClassNames"in l&&n(7,m=l.lightClassNames),"defaultTheme"in l&&n(8,f=l.defaultTheme),"nonce"in l&&n(9,k=l.nonce),"themeStorageKey"in l&&n(10,S=l.themeStorageKey),"modeStorageKey"in l&&n(11,b=l.modeStorageKey)},o.$$.update=()=>{o.$$.dirty&32&&V.set(d),o.$$.dirty&1&&H.set(c),o.$$.dirty&64&&Z.set(u),o.$$.dirty&128&&j.set(m),o.$$.dirty&2048&&T.set(b),o.$$.dirty&1024&&C.set(S),o.$$.dirty&512&&n(1,t=typeof window>"u"?k:"")},[c,t,R,r,s,d,u,m,f,k,S,b]}class Se extends p{constructor(e){super(),x(this,e,he,fe,$,{track:3,defaultMode:4,themeColors:0,disableTransitions:5,darkClassNames:6,lightClassNames:7,defaultTheme:8,nonce:9,themeStorageKey:10,modeStorageKey:11})}}export{Se as M,G as d,ye as t};
