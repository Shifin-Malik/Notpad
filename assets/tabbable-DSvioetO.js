/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var w=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],v=w.join(","),T=typeof Element>"u",o=T?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,b=!T&&Element.prototype.getRootNode?function(i){var t;return i==null||(t=i.getRootNode)===null||t===void 0?void 0:t.call(i)}:function(i){return i==null?void 0:i.ownerDocument},h=function i(t,e){var r;e===void 0&&(e=!0);var a=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),l=a===""||a==="true",n=l||e&&t&&i(t.parentNode);return n},A=function(t){var e,r=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return r===""||r==="true"},I=function(t,e,r){if(h(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(v));return e&&o.call(t,v)&&a.unshift(t),a=a.filter(r),a},m=function i(t,e,r){for(var a=[],l=Array.from(t);l.length;){var n=l.shift();if(!h(n,!1))if(n.tagName==="SLOT"){var u=n.assignedElements(),c=u.length?u:n.children,s=i(c,!0,r);r.flatten?a.push.apply(a,s):a.push({scopeParent:n,candidates:s})}else{var f=o.call(n,v);f&&r.filter(n)&&(e||!t.includes(n))&&a.push(n);var d=n.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(n),E=!h(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(n));if(d&&E){var y=i(d===!0?n.children:d.children,!0,r);r.flatten?a.push.apply(a,y):a.push({scopeParent:n,candidates:y})}else l.unshift.apply(l,n.children)}}return a},N=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},R=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||A(t))&&!N(t)?0:t.tabIndex},x=function(t,e){var r=R(t);return r<0&&e&&!N(t)?0:r},O=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},C=function(t){return t.tagName==="INPUT"},F=function(t){return C(t)&&t.type==="hidden"},D=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return e},k=function(t,e){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===e)return t[r]},M=function(t){if(!t.name)return!0;var e=t.form||b(t),r=function(u){return e.querySelectorAll('input[type="radio"][name="'+u+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=r(window.CSS.escape(t.name));else try{a=r(t.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var l=k(a,t.form);return!l||l===t},L=function(t){return C(t)&&t.type==="radio"},P=function(t){return L(t)&&!M(t)},B=function(t){var e,r=t&&b(t),a=(e=r)===null||e===void 0?void 0:e.host,l=!1;if(r&&r!==t){var n,u,c;for(l=!!((n=a)!==null&&n!==void 0&&(u=n.ownerDocument)!==null&&u!==void 0&&u.contains(a)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!l&&a;){var s,f,d;r=b(a),a=(s=r)===null||s===void 0?void 0:s.host,l=!!((f=a)!==null&&f!==void 0&&(d=f.ownerDocument)!==null&&d!==void 0&&d.contains(a))}}return l},p=function(t){var e=t.getBoundingClientRect(),r=e.width,a=e.height;return r===0&&a===0},q=function(t,e){var r=e.displayCheck,a=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var l=o.call(t,"details>summary:first-of-type"),n=l?t.parentElement:t;if(o.call(n,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof a=="function"){for(var u=t;t;){var c=t.parentElement,s=b(t);if(c&&!c.shadowRoot&&a(c)===!0)return p(t);t.assignedSlot?t=t.assignedSlot:!c&&s!==t.ownerDocument?t=s.host:t=c}t=u}if(B(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return p(t);return!1},U=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var r=0;r<e.children.length;r++){var a=e.children.item(r);if(a.tagName==="LEGEND")return o.call(e,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}e=e.parentElement}return!1},g=function(t,e){return!(e.disabled||h(e)||F(e)||q(e,t)||D(e)||U(e))},S=function(t,e){return!(P(e)||R(e)<0||!g(t,e))},V=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},j=function i(t){var e=[],r=[];return t.forEach(function(a,l){var n=!!a.scopeParent,u=n?a.scopeParent:a,c=x(u,n),s=n?i(a.candidates):u;c===0?n?e.push.apply(e,s):e.push(u):r.push({documentOrder:l,tabIndex:c,item:a,isScope:n,content:s})}),r.sort(O).reduce(function(a,l){return l.isScope?a.push.apply(a,l.content):a.push(l.content),a},[]).concat(e)},Z=function(t,e){e=e||{};var r;return e.getShadowRoot?r=m([t],e.includeContainer,{filter:S.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:V}):r=I(t,e.includeContainer,S.bind(null,e)),j(r)},z=function(t,e){e=e||{};var r;return e.getShadowRoot?r=m([t],e.includeContainer,{filter:g.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):r=I(t,e.includeContainer,g.bind(null,e)),r},G=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return o.call(t,v)===!1?!1:S(e,t)},W=w.concat("iframe").join(","),X=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return o.call(t,W)===!1?!1:g(e,t)};export{G as a,z as f,R as g,X as i,Z as t};
