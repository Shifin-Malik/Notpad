var j={},P={},D={};Object.defineProperty(D,"__esModule",{value:!0});D.default=ee;let w;const z=new Uint8Array(16);function ee(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(z)}var M={},U={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.default=void 0;var te=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;I.default=te;Object.defineProperty(U,"__esModule",{value:!0});U.default=void 0;var re=ne(I);function ne(e){return e&&e.__esModule?e:{default:e}}function fe(e){return typeof e=="string"&&re.default.test(e)}var ue=fe;U.default=ue;Object.defineProperty(M,"__esModule",{value:!0});M.default=void 0;M.unsafeStringify=K;var ae=le(U);function le(e){return e&&e.__esModule?e:{default:e}}const _=[];for(let e=0;e<256;++e)_.push((e+256).toString(16).slice(1));function K(e,a=0){return _[e[a+0]]+_[e[a+1]]+_[e[a+2]]+_[e[a+3]]+"-"+_[e[a+4]]+_[e[a+5]]+"-"+_[e[a+6]]+_[e[a+7]]+"-"+_[e[a+8]]+_[e[a+9]]+"-"+_[e[a+10]]+_[e[a+11]]+_[e[a+12]]+_[e[a+13]]+_[e[a+14]]+_[e[a+15]]}function de(e,a=0){const t=K(e,a);if(!(0,ae.default)(t))throw TypeError("Stringified UUID is invalid");return t}var ie=de;M.default=ie;Object.defineProperty(P,"__esModule",{value:!0});P.default=void 0;var oe=ve(D),ce=M;function ve(e){return e&&e.__esModule?e:{default:e}}let b,E,k=0,V=0;function se(e,a,t){let r=a&&t||0;const n=a||new Array(16);e=e||{};let f=e.node||b,u=e.clockseq!==void 0?e.clockseq:E;if(f==null||u==null){const v=e.random||(e.rng||oe.default)();f==null&&(f=b=[v[0]|1,v[1],v[2],v[3],v[4],v[5]]),u==null&&(u=E=(v[6]<<8|v[7])&16383)}let l=e.msecs!==void 0?e.msecs:Date.now(),d=e.nsecs!==void 0?e.nsecs:V+1;const c=l-k+(d-V)/1e4;if(c<0&&e.clockseq===void 0&&(u=u+1&16383),(c<0||l>k)&&e.nsecs===void 0&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");k=l,V=d,E=u,l+=122192928e5;const i=((l&268435455)*1e4+d)%4294967296;n[r++]=i>>>24&255,n[r++]=i>>>16&255,n[r++]=i>>>8&255,n[r++]=i&255;const o=l/4294967296*1e4&268435455;n[r++]=o>>>8&255,n[r++]=o&255,n[r++]=o>>>24&15|16,n[r++]=o>>>16&255,n[r++]=u>>>8|128,n[r++]=u&255;for(let v=0;v<6;++v)n[r+v]=f[v];return a||(0,ce.unsafeStringify)(n)}var _e=se;P.default=_e;var R={},$={},O={};Object.defineProperty(O,"__esModule",{value:!0});O.default=void 0;var ge=pe(U);function pe(e){return e&&e.__esModule?e:{default:e}}function ye(e){if(!(0,ge.default)(e))throw TypeError("Invalid UUID");let a;const t=new Uint8Array(16);return t[0]=(a=parseInt(e.slice(0,8),16))>>>24,t[1]=a>>>16&255,t[2]=a>>>8&255,t[3]=a&255,t[4]=(a=parseInt(e.slice(9,13),16))>>>8,t[5]=a&255,t[6]=(a=parseInt(e.slice(14,18),16))>>>8,t[7]=a&255,t[8]=(a=parseInt(e.slice(19,23),16))>>>8,t[9]=a&255,t[10]=(a=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=a/4294967296&255,t[12]=a>>>24&255,t[13]=a>>>16&255,t[14]=a>>>8&255,t[15]=a&255,t}var he=ye;O.default=he;Object.defineProperty($,"__esModule",{value:!0});$.URL=$.DNS=void 0;$.default=Oe;var me=M,$e=Me(O);function Me(e){return e&&e.__esModule?e:{default:e}}function Ue(e){e=unescape(encodeURIComponent(e));const a=[];for(let t=0;t<e.length;++t)a.push(e.charCodeAt(t));return a}const F="6ba7b810-9dad-11d1-80b4-00c04fd430c8";$.DNS=F;const G="6ba7b811-9dad-11d1-80b4-00c04fd430c8";$.URL=G;function Oe(e,a,t){function r(n,f,u,l){var d;if(typeof n=="string"&&(n=Ue(n)),typeof f=="string"&&(f=(0,$e.default)(f)),((d=f)===null||d===void 0?void 0:d.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+n.length);if(c.set(f),c.set(n,f.length),c=t(c),c[6]=c[6]&15|a,c[8]=c[8]&63|128,u){l=l||0;for(let i=0;i<16;++i)u[l+i]=c[i];return u}return(0,me.unsafeStringify)(c)}try{r.name=e}catch{}return r.DNS=F,r.URL=G,r}var A={};Object.defineProperty(A,"__esModule",{value:!0});A.default=void 0;function we(e){if(typeof e=="string"){const a=unescape(encodeURIComponent(e));e=new Uint8Array(a.length);for(let t=0;t<a.length;++t)e[t]=a.charCodeAt(t)}return Pe(De(Ie(e),e.length*8))}function Pe(e){const a=[],t=e.length*32,r="0123456789abcdef";for(let n=0;n<t;n+=8){const f=e[n>>5]>>>n%32&255,u=parseInt(r.charAt(f>>>4&15)+r.charAt(f&15),16);a.push(u)}return a}function J(e){return(e+64>>>9<<4)+14+1}function De(e,a){e[a>>5]|=128<<a%32,e[J(a)-1]=a;let t=1732584193,r=-271733879,n=-1732584194,f=271733878;for(let u=0;u<e.length;u+=16){const l=t,d=r,c=n,i=f;t=g(t,r,n,f,e[u],7,-680876936),f=g(f,t,r,n,e[u+1],12,-389564586),n=g(n,f,t,r,e[u+2],17,606105819),r=g(r,n,f,t,e[u+3],22,-1044525330),t=g(t,r,n,f,e[u+4],7,-176418897),f=g(f,t,r,n,e[u+5],12,1200080426),n=g(n,f,t,r,e[u+6],17,-1473231341),r=g(r,n,f,t,e[u+7],22,-45705983),t=g(t,r,n,f,e[u+8],7,1770035416),f=g(f,t,r,n,e[u+9],12,-1958414417),n=g(n,f,t,r,e[u+10],17,-42063),r=g(r,n,f,t,e[u+11],22,-1990404162),t=g(t,r,n,f,e[u+12],7,1804603682),f=g(f,t,r,n,e[u+13],12,-40341101),n=g(n,f,t,r,e[u+14],17,-1502002290),r=g(r,n,f,t,e[u+15],22,1236535329),t=p(t,r,n,f,e[u+1],5,-165796510),f=p(f,t,r,n,e[u+6],9,-1069501632),n=p(n,f,t,r,e[u+11],14,643717713),r=p(r,n,f,t,e[u],20,-373897302),t=p(t,r,n,f,e[u+5],5,-701558691),f=p(f,t,r,n,e[u+10],9,38016083),n=p(n,f,t,r,e[u+15],14,-660478335),r=p(r,n,f,t,e[u+4],20,-405537848),t=p(t,r,n,f,e[u+9],5,568446438),f=p(f,t,r,n,e[u+14],9,-1019803690),n=p(n,f,t,r,e[u+3],14,-187363961),r=p(r,n,f,t,e[u+8],20,1163531501),t=p(t,r,n,f,e[u+13],5,-1444681467),f=p(f,t,r,n,e[u+2],9,-51403784),n=p(n,f,t,r,e[u+7],14,1735328473),r=p(r,n,f,t,e[u+12],20,-1926607734),t=y(t,r,n,f,e[u+5],4,-378558),f=y(f,t,r,n,e[u+8],11,-2022574463),n=y(n,f,t,r,e[u+11],16,1839030562),r=y(r,n,f,t,e[u+14],23,-35309556),t=y(t,r,n,f,e[u+1],4,-1530992060),f=y(f,t,r,n,e[u+4],11,1272893353),n=y(n,f,t,r,e[u+7],16,-155497632),r=y(r,n,f,t,e[u+10],23,-1094730640),t=y(t,r,n,f,e[u+13],4,681279174),f=y(f,t,r,n,e[u],11,-358537222),n=y(n,f,t,r,e[u+3],16,-722521979),r=y(r,n,f,t,e[u+6],23,76029189),t=y(t,r,n,f,e[u+9],4,-640364487),f=y(f,t,r,n,e[u+12],11,-421815835),n=y(n,f,t,r,e[u+15],16,530742520),r=y(r,n,f,t,e[u+2],23,-995338651),t=h(t,r,n,f,e[u],6,-198630844),f=h(f,t,r,n,e[u+7],10,1126891415),n=h(n,f,t,r,e[u+14],15,-1416354905),r=h(r,n,f,t,e[u+5],21,-57434055),t=h(t,r,n,f,e[u+12],6,1700485571),f=h(f,t,r,n,e[u+3],10,-1894986606),n=h(n,f,t,r,e[u+10],15,-1051523),r=h(r,n,f,t,e[u+1],21,-2054922799),t=h(t,r,n,f,e[u+8],6,1873313359),f=h(f,t,r,n,e[u+15],10,-30611744),n=h(n,f,t,r,e[u+6],15,-1560198380),r=h(r,n,f,t,e[u+13],21,1309151649),t=h(t,r,n,f,e[u+4],6,-145523070),f=h(f,t,r,n,e[u+11],10,-1120210379),n=h(n,f,t,r,e[u+2],15,718787259),r=h(r,n,f,t,e[u+9],21,-343485551),t=m(t,l),r=m(r,d),n=m(n,c),f=m(f,i)}return[t,r,n,f]}function Ie(e){if(e.length===0)return[];const a=e.length*8,t=new Uint32Array(J(a));for(let r=0;r<a;r+=8)t[r>>5]|=(e[r/8]&255)<<r%32;return t}function m(e,a){const t=(e&65535)+(a&65535);return(e>>16)+(a>>16)+(t>>16)<<16|t&65535}function Re(e,a){return e<<a|e>>>32-a}function q(e,a,t,r,n,f){return m(Re(m(m(a,e),m(r,f)),n),t)}function g(e,a,t,r,n,f,u){return q(a&t|~a&r,e,a,n,f,u)}function p(e,a,t,r,n,f,u){return q(a&r|t&~r,e,a,n,f,u)}function y(e,a,t,r,n,f,u){return q(a^t^r,e,a,n,f,u)}function h(e,a,t,r,n,f,u){return q(t^(a|~r),e,a,n,f,u)}var Ae=we;A.default=Ae;Object.defineProperty(R,"__esModule",{value:!0});R.default=void 0;var qe=Q($),Se=Q(A);function Q(e){return e&&e.__esModule?e:{default:e}}const Te=(0,qe.default)("v3",48,Se.default);var Le=Te;R.default=Le;var S={},T={};Object.defineProperty(T,"__esModule",{value:!0});T.default=void 0;const Ne=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var xe={randomUUID:Ne};T.default=xe;Object.defineProperty(S,"__esModule",{value:!0});S.default=void 0;var W=X(T),Ce=X(D),Ee=M;function X(e){return e&&e.__esModule?e:{default:e}}function ke(e,a,t){if(W.default.randomUUID&&!a&&!e)return W.default.randomUUID();e=e||{};const r=e.random||(e.rng||Ce.default)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,a){t=t||0;for(let n=0;n<16;++n)a[t+n]=r[n];return a}return(0,Ee.unsafeStringify)(r)}var Ve=ke;S.default=Ve;var L={},N={};Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;function Be(e,a,t,r){switch(e){case 0:return a&t^~a&r;case 1:return a^t^r;case 2:return a&t^a&r^t&r;case 3:return a^t^r}}function B(e,a){return e<<a|e>>>32-a}function He(e){const a=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){const u=unescape(encodeURIComponent(e));e=[];for(let l=0;l<u.length;++l)e.push(u.charCodeAt(l))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const r=e.length/4+2,n=Math.ceil(r/16),f=new Array(n);for(let u=0;u<n;++u){const l=new Uint32Array(16);for(let d=0;d<16;++d)l[d]=e[u*64+d*4]<<24|e[u*64+d*4+1]<<16|e[u*64+d*4+2]<<8|e[u*64+d*4+3];f[u]=l}f[n-1][14]=(e.length-1)*8/Math.pow(2,32),f[n-1][14]=Math.floor(f[n-1][14]),f[n-1][15]=(e.length-1)*8&4294967295;for(let u=0;u<n;++u){const l=new Uint32Array(80);for(let s=0;s<16;++s)l[s]=f[u][s];for(let s=16;s<80;++s)l[s]=B(l[s-3]^l[s-8]^l[s-14]^l[s-16],1);let d=t[0],c=t[1],i=t[2],o=t[3],v=t[4];for(let s=0;s<80;++s){const H=Math.floor(s/20),Z=B(d,5)+Be(H,c,i,o)+v+a[H]+l[s]>>>0;v=o,o=i,i=B(c,30)>>>0,c=d,d=Z}t[0]=t[0]+d>>>0,t[1]=t[1]+c>>>0,t[2]=t[2]+i>>>0,t[3]=t[3]+o>>>0,t[4]=t[4]+v>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,t[0]&255,t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,t[1]&255,t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,t[2]&255,t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,t[3]&255,t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,t[4]&255]}var be=He;N.default=be;Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var We=Y($),Ke=Y(N);function Y(e){return e&&e.__esModule?e:{default:e}}const Fe=(0,We.default)("v5",80,Ke.default);var Ge=Fe;L.default=Ge;var x={};Object.defineProperty(x,"__esModule",{value:!0});x.default=void 0;var Je="00000000-0000-0000-0000-000000000000";x.default=Je;var C={};Object.defineProperty(C,"__esModule",{value:!0});C.default=void 0;var Qe=Xe(U);function Xe(e){return e&&e.__esModule?e:{default:e}}function Ye(e){if(!(0,Qe.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}var Ze=Ye;C.default=Ze;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"NIL",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"v1",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"v3",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"v4",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"v5",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"validate",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"version",{enumerable:!0,get:function(){return u.default}});var a=i(P),t=i(R),r=i(S),n=i(L),f=i(x),u=i(C),l=i(U),d=i(M),c=i(O);function i(o){return o&&o.__esModule?o:{default:o}}})(j);export{j as c};
