function Nv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ov(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jr={},Rv={get exports(){return Jr},set exports(e){Jr=e}},Eo={},I={},Av={get exports(){return I},set exports(e){I=e}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Lv=Symbol.for("react.portal"),Dv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Uv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),$v=Symbol.for("react.suspense"),Bv=Symbol.for("react.memo"),Wv=Symbol.for("react.lazy"),xc=Symbol.iterator;function Hv(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var Wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hd=Object.assign,Vd={};function gr(e,t,n){this.props=e,this.context=t,this.refs=Vd,this.updater=n||Wd}gr.prototype.isReactComponent={};gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=gr.prototype;function ou(e,t,n){this.props=e,this.context=t,this.refs=Vd,this.updater=n||Wd}var su=ou.prototype=new Yd;su.constructor=ou;Hd(su,gr.prototype);su.isPureReactComponent=!0;var Tc=Array.isArray,Kd=Object.prototype.hasOwnProperty,lu={current:null},Gd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Kd.call(t,r)&&!Gd.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ci,type:e,key:a,ref:o,props:i,_owner:lu.current}}function Vv(e,t){return{$$typeof:Ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ci}function Yv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pc=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yv(""+e.key):t.toString(36)}function ka(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ci:case Lv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Zo(o,0):r,Tc(i)?(n="",e!=null&&(n=e.replace(Pc,"$&/")+"/"),ka(i,t,n,"",function(u){return u})):i!=null&&(uu(i)&&(i=Vv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Tc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Zo(a,s);o+=ka(a,t,n,l,i)}else if(l=Hv(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Zo(a,s++),o+=ka(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ki(e,t,n){if(e==null)return e;var r=[],i=0;return ka(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Kv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Sa={transition:null},Gv={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:lu};F.Children={map:Ki,forEach:function(e,t,n){Ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ki(e,function(){t++}),t},toArray:function(e){return Ki(e,function(t){return t})||[]},only:function(e){if(!uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=gr;F.Fragment=Dv;F.Profiler=Uv;F.PureComponent=ou;F.StrictMode=Mv;F.Suspense=$v;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gv;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hd({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=lu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Kd.call(t,l)&&!Gd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ci,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Fv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zv,_context:e},e.Consumer=e};F.createElement=Qd;F.createFactory=function(e){var t=Qd.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:jv,render:e}};F.isValidElement=uu;F.lazy=function(e){return{$$typeof:Wv,_payload:{_status:-1,_result:e},_init:Kv}};F.memo=function(e,t){return{$$typeof:Bv,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Sa.transition;Sa.transition={};try{e()}finally{Sa.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Se.current.useCallback(e,t)};F.useContext=function(e){return Se.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};F.useEffect=function(e,t){return Se.current.useEffect(e,t)};F.useId=function(){return Se.current.useId()};F.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Se.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};F.useRef=function(e){return Se.current.useRef(e)};F.useState=function(e){return Se.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Se.current.useTransition()};F.version="18.2.0";(function(e){e.exports=F})(Av);const Io=Ov(I),Fs=Nv({__proto__:null,default:Io},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=I,Xv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),qv=Object.prototype.hasOwnProperty,Zv=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eg={key:!0,ref:!0,__self:!0,__source:!0};function Xd(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)qv.call(t,r)&&!eg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Xv,type:e,key:a,ref:o,props:i,_owner:Zv.current}}Eo.Fragment=Jv;Eo.jsx=Xd;Eo.jsxs=Xd;(function(e){e.exports=Eo})(Rv);const tg=Jr.Fragment,_=Jr.jsx,A=Jr.jsxs;var js={},$s={},ng={get exports(){return $s},set exports(e){$s=e}},Le={},Bs={},rg={get exports(){return Bs},set exports(e){Bs=e}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var U=P.length;P.push(D);e:for(;0<U;){var ne=U-1>>>1,ue=P[ne];if(0<i(ue,D))P[ne]=D,P[U]=ue,U=ne;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],U=P.pop();if(U!==D){P[0]=U;e:for(var ne=0,ue=P.length,Vi=ue>>>1;ne<Vi;){var cn=2*(ne+1)-1,qo=P[cn],fn=cn+1,Yi=P[fn];if(0>i(qo,U))fn<ue&&0>i(Yi,qo)?(P[ne]=Yi,P[fn]=U,ne=fn):(P[ne]=qo,P[cn]=U,ne=cn);else if(fn<ue&&0>i(Yi,U))P[ne]=Yi,P[fn]=U,ne=fn;else break e}}return D}function i(P,D){var U=P.sortIndex-D.sortIndex;return U!==0?U:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,p=3,v=!1,w=!1,g=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function y(P){if(g=!1,m(P),!w)if(n(l)!==null)w=!0,te(S);else{var D=n(u);D!==null&&qe(y,D.startTime-P)}}function S(P,D){w=!1,g&&(g=!1,h(N),N=-1),v=!0;var U=p;try{for(m(D),d=n(l);d!==null&&(!(d.expirationTime>D)||P&&!Pe());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,p=d.priorityLevel;var ue=ne(d.expirationTime<=D);D=e.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(l)&&r(l),m(D)}else r(l);d=n(l)}if(d!==null)var Vi=!0;else{var cn=n(u);cn!==null&&qe(y,cn.startTime-D),Vi=!1}return Vi}finally{d=null,p=U,v=!1}}var b=!1,C=null,N=-1,z=5,L=-1;function Pe(){return!(e.unstable_now()-L<z)}function ln(){if(C!==null){var P=e.unstable_now();L=P;var D=!0;try{D=C(!0,P)}finally{D?un():(b=!1,C=null)}}else b=!1}var un;if(typeof f=="function")un=function(){f(ln)};else if(typeof MessageChannel<"u"){var Hi=new MessageChannel,q=Hi.port2;Hi.port1.onmessage=ln,un=function(){q.postMessage(null)}}else un=function(){E(ln,0)};function te(P){C=P,b||(b=!0,un())}function qe(P,D){N=E(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,te(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var U=p;p=D;try{return P()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=p;p=P;try{return D()}finally{p=U}},e.unstable_scheduleCallback=function(P,D,U){var ne=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ne+U:ne):U=ne,P){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=U+ue,P={id:c++,callback:D,priorityLevel:P,startTime:U,expirationTime:ue,sortIndex:-1},U>ne?(P.sortIndex=U,t(u,P),n(l)===null&&P===n(u)&&(g?(h(N),N=-1):g=!0,qe(y,U-ne))):(P.sortIndex=ue,t(l,P),w||v||(w=!0,te(S))),P},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(P){var D=p;return function(){var U=p;p=D;try{return P.apply(this,arguments)}finally{p=U}}}})(Jd);(function(e){e.exports=Jd})(rg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=I,Ae=Bs;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zd=new Set,qr={};function An(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(qr[e]=t,e=0;e<t.length;e++)Zd.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Oc={};function ag(e){return Ws.call(Oc,e)?!0:Ws.call(Nc,e)?!1:ig.test(e)?Oc[e]=!0:(Nc[e]=!0,!1)}function og(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sg(e,t,n,r){if(t===null||typeof t>"u"||og(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var cu=/[\-:]([a-z])/g;function fu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cu,fu);pe[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cu,fu);pe[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cu,fu);pe[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function du(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sg(t,n,i,r)&&(n=null),r||i===null?ag(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),hu=Symbol.for("react.strict_mode"),Hs=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),Vs=Symbol.for("react.suspense"),Ys=Symbol.for("react.suspense_list"),mu=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),nh=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,es;function Rr(e){if(es===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);es=t&&t[1]||""}return`
`+es+e}var ts=!1;function ns(e,t){if(!e||ts)return"";ts=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{ts=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function lg(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=ns(e.type,!1),e;case 11:return e=ns(e.type.render,!1),e;case 1:return e=ns(e.type,!0),e;default:return""}}function Ks(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Mn:return"Portal";case Hs:return"Profiler";case hu:return"StrictMode";case Vs:return"Suspense";case Ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case th:return(e.displayName||"Context")+".Consumer";case eh:return(e._context.displayName||"Context")+".Provider";case pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mu:return t=e.displayName||null,t!==null?t:Ks(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Ks(e(t))}catch{}}return null}function ug(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ks(t);case 8:return t===hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cg(e){var t=rh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=cg(e))}function ih(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ja(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gs(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ah(e,t){t=t.checked,t!=null&&du(e,"checked",t,!1)}function Qs(e,t){ah(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xs(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xs(e,t,n){(t!=="number"||ja(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Js(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ar(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function oh(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,lh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fg=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){fg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function uh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function ch(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dg=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zs(e,t){if(t){if(dg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function el(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tl=null;function vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,Zn=null,er=null;function Uc(e){if(e=Pi(e)){if(typeof nl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Po(t),nl(e.stateNode,e.type,t))}}function fh(e){Zn?er?er.push(e):er=[e]:Zn=e}function dh(){if(Zn){var e=Zn,t=er;if(er=Zn=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function hh(e,t){return e(t)}function ph(){}var rs=!1;function mh(e,t,n){if(rs)return e(t,n);rs=!0;try{return hh(e,t,n)}finally{rs=!1,(Zn!==null||er!==null)&&(ph(),dh())}}function ei(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var rl=!1;if(pt)try{var br={};Object.defineProperty(br,"passive",{get:function(){rl=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{rl=!1}function hg(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var jr=!1,$a=null,Ba=!1,il=null,pg={onError:function(e){jr=!0,$a=e}};function mg(e,t,n,r,i,a,o,s,l){jr=!1,$a=null,hg.apply(pg,arguments)}function vg(e,t,n,r,i,a,o,s,l){if(mg.apply(this,arguments),jr){if(jr){var u=$a;jr=!1,$a=null}else throw Error(k(198));Ba||(Ba=!0,il=u)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(Ln(e)!==e)throw Error(k(188))}function gg(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return zc(i),e;if(a===r)return zc(i),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function gh(e){return e=gg(e),e!==null?yh(e):null}function yh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yh(e);if(t!==null)return t;e=e.sibling}return null}var wh=Ae.unstable_scheduleCallback,Fc=Ae.unstable_cancelCallback,yg=Ae.unstable_shouldYield,wg=Ae.unstable_requestPaint,re=Ae.unstable_now,_g=Ae.unstable_getCurrentPriorityLevel,gu=Ae.unstable_ImmediatePriority,_h=Ae.unstable_UserBlockingPriority,Wa=Ae.unstable_NormalPriority,kg=Ae.unstable_LowPriority,kh=Ae.unstable_IdlePriority,bo=null,rt=null;function Sg(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:bg,Eg=Math.log,Ig=Math.LN2;function bg(e){return e>>>=0,e===0?32:31-(Eg(e)/Ig|0)|0}var Ji=64,qi=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ha(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Lr(s):(a&=o,a!==0&&(r=Lr(a)))}else o=n&~i,o!==0?r=Lr(o):a!==0&&(r=Lr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function Cg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ge(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Cg(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sh(){var e=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),e}function is(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function Tg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function yu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Eh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,wu,bh,Ch,xh,ol=!1,Zi=[],jt=null,$t=null,Bt=null,ti=new Map,ni=new Map,Nt=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function Cr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ng(e,t,n,r,i){switch(t){case"focusin":return jt=Cr(jt,e,t,n,r,i),!0;case"dragenter":return $t=Cr($t,e,t,n,r,i),!0;case"mouseover":return Bt=Cr(Bt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ti.set(a,Cr(ti.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ni.set(a,Cr(ni.get(a)||null,e,t,n,r,i)),!0}return!1}function Th(e){var t=mn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=vh(n),t!==null){e.blockedOn=t,xh(e.priority,function(){bh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tl=r,n.target.dispatchEvent(r),tl=null}else return t=Pi(n),t!==null&&wu(t),e.blockedOn=n,!1;t.shift()}return!0}function $c(e,t,n){Ea(e)&&n.delete(t)}function Og(){ol=!1,jt!==null&&Ea(jt)&&(jt=null),$t!==null&&Ea($t)&&($t=null),Bt!==null&&Ea(Bt)&&(Bt=null),ti.forEach($c),ni.forEach($c)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ol||(ol=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Og)))}function ri(e){function t(i){return xr(i,e)}if(0<Zi.length){xr(Zi[0],e);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&xr(jt,e),$t!==null&&xr($t,e),Bt!==null&&xr(Bt,e),ti.forEach(t),ni.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)Th(n),n.blockedOn===null&&Nt.shift()}var tr=St.ReactCurrentBatchConfig,Va=!0;function Rg(e,t,n,r){var i=$,a=tr.transition;tr.transition=null;try{$=1,_u(e,t,n,r)}finally{$=i,tr.transition=a}}function Ag(e,t,n,r){var i=$,a=tr.transition;tr.transition=null;try{$=4,_u(e,t,n,r)}finally{$=i,tr.transition=a}}function _u(e,t,n,r){if(Va){var i=sl(e,t,n,r);if(i===null)ps(e,t,r,Ya,n),jc(e,r);else if(Ng(i,e,t,n,r))r.stopPropagation();else if(jc(e,r),t&4&&-1<Pg.indexOf(e)){for(;i!==null;){var a=Pi(i);if(a!==null&&Ih(a),a=sl(e,t,n,r),a===null&&ps(e,t,r,Ya,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ps(e,t,r,null,n)}}var Ya=null;function sl(e,t,n,r){if(Ya=null,e=vu(r),e=mn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ya=e,null}function Ph(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_g()){case gu:return 1;case _h:return 4;case Wa:case kg:return 16;case kh:return 536870912;default:return 16}default:return 16}}var Mt=null,ku=null,Ia=null;function Nh(){if(Ia)return Ia;var e,t=ku,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ia=i.slice(e,1<r?1-r:void 0)}function ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ea(){return!0}function Bc(){return!1}function De(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ea:Bc,this.isPropagationStopped=Bc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=De(yr),Ti=J({},yr,{view:0,detail:0}),Lg=De(Ti),as,os,Tr,Co=J({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(as=e.screenX-Tr.screenX,os=e.screenY-Tr.screenY):os=as=0,Tr=e),as)},movementY:function(e){return"movementY"in e?e.movementY:os}}),Wc=De(Co),Dg=J({},Co,{dataTransfer:0}),Mg=De(Dg),Ug=J({},Ti,{relatedTarget:0}),ss=De(Ug),zg=J({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=De(zg),jg=J({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$g=De(jg),Bg=J({},yr,{data:0}),Hc=De(Bg),Wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vg[e])?!!t[e]:!1}function Eu(){return Yg}var Kg=J({},Ti,{key:function(e){if(e.key){var t=Wg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gg=De(Kg),Qg=J({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=De(Qg),Xg=J({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Jg=De(Xg),qg=J({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=De(qg),ey=J({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=De(ey),ny=[9,13,27,32],Iu=pt&&"CompositionEvent"in window,$r=null;pt&&"documentMode"in document&&($r=document.documentMode);var ry=pt&&"TextEvent"in window&&!$r,Oh=pt&&(!Iu||$r&&8<$r&&11>=$r),Yc=String.fromCharCode(32),Kc=!1;function Rh(e,t){switch(e){case"keyup":return ny.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function iy(e,t){switch(e){case"compositionend":return Ah(t);case"keypress":return t.which!==32?null:(Kc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Kc?null:e;default:return null}}function ay(e,t){if(zn)return e==="compositionend"||!Iu&&Rh(e,t)?(e=Nh(),Ia=ku=Mt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oh&&t.locale!=="ko"?null:t.data;default:return null}}var oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oy[e.type]:t==="textarea"}function Lh(e,t,n,r){fh(r),t=Ka(t,"onChange"),0<t.length&&(n=new Su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,ii=null;function sy(e){Vh(e,0)}function xo(e){var t=$n(e);if(ih(t))return e}function ly(e,t){if(e==="change")return t}var Dh=!1;if(pt){var ls;if(pt){var us="oninput"in document;if(!us){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),us=typeof Qc.oninput=="function"}ls=us}else ls=!1;Dh=ls&&(!document.documentMode||9<document.documentMode)}function Xc(){Br&&(Br.detachEvent("onpropertychange",Mh),ii=Br=null)}function Mh(e){if(e.propertyName==="value"&&xo(ii)){var t=[];Lh(t,ii,e,vu(e)),mh(sy,t)}}function uy(e,t,n){e==="focusin"?(Xc(),Br=t,ii=n,Br.attachEvent("onpropertychange",Mh)):e==="focusout"&&Xc()}function cy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(ii)}function fy(e,t){if(e==="click")return xo(t)}function dy(e,t){if(e==="input"||e==="change")return xo(t)}function hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:hy;function ai(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ws.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var n=Jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jc(n)}}function Uh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zh(){for(var e=window,t=ja();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ja(e.document)}return t}function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function py(e){var t=zh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uh(n.ownerDocument.documentElement,n)){if(r!==null&&bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=qc(n,a);var o=qc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var my=pt&&"documentMode"in document&&11>=document.documentMode,Fn=null,ll=null,Wr=null,ul=!1;function Zc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||Fn==null||Fn!==ja(r)||(r=Fn,"selectionStart"in r&&bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&ai(Wr,r)||(Wr=r,r=Ka(ll,"onSelect"),0<r.length&&(t=new Su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},cs={},Fh={};pt&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function To(e){if(cs[e])return cs[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fh)return cs[e]=t[n];return e}var jh=To("animationend"),$h=To("animationiteration"),Bh=To("animationstart"),Wh=To("transitionend"),Hh=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Hh.set(e,t),An(t,[e])}for(var fs=0;fs<ef.length;fs++){var ds=ef[fs],vy=ds.toLowerCase(),gy=ds[0].toUpperCase()+ds.slice(1);rn(vy,"on"+gy)}rn(jh,"onAnimationEnd");rn($h,"onAnimationIteration");rn(Bh,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(Wh,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function tf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vg(r,t,void 0,e),e.currentTarget=null}function Vh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;tf(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;tf(i,s,u),a=l}}}if(Ba)throw e=il,Ba=!1,il=null,e}function H(e,t){var n=t[pl];n===void 0&&(n=t[pl]=new Set);var r=e+"__bubble";n.has(r)||(Yh(t,e,2,!1),n.add(r))}function hs(e,t,n){var r=0;t&&(r|=4),Yh(n,e,r,t)}var na="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[na]){e[na]=!0,Zd.forEach(function(n){n!=="selectionchange"&&(yy.has(n)||hs(n,!1,e),hs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[na]||(t[na]=!0,hs("selectionchange",!1,t))}}function Yh(e,t,n,r){switch(Ph(t)){case 1:var i=Rg;break;case 4:i=Ag;break;default:i=_u}n=i.bind(null,t,n,e),i=void 0,!rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ps(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=mn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}mh(function(){var u=a,c=vu(n),d=[];e:{var p=Hh.get(e);if(p!==void 0){var v=Su,w=e;switch(e){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":v=Gg;break;case"focusin":w="focus",v=ss;break;case"focusout":w="blur",v=ss;break;case"beforeblur":case"afterblur":v=ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jg;break;case jh:case $h:case Bh:v=Fg;break;case Wh:v=Zg;break;case"scroll":v=Lg;break;case"wheel":v=ty;break;case"copy":case"cut":case"paste":v=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vc}var g=(t&4)!==0,E=!g&&e==="scroll",h=g?p!==null?p+"Capture":null:p;g=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=ei(f,h),y!=null&&g.push(si(f,y,m)))),E)break;f=f.return}0<g.length&&(p=new v(p,w,null,n,c),d.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==tl&&(w=n.relatedTarget||n.fromElement)&&(mn(w)||w[mt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?mn(w):null,w!==null&&(E=Ln(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(g=Wc,y="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(g=Vc,y="onPointerLeave",h="onPointerEnter",f="pointer"),E=v==null?p:$n(v),m=w==null?p:$n(w),p=new g(y,f+"leave",v,n,c),p.target=E,p.relatedTarget=m,y=null,mn(c)===u&&(g=new g(h,f+"enter",w,n,c),g.target=m,g.relatedTarget=E,y=g),E=y,v&&w)t:{for(g=v,h=w,f=0,m=g;m;m=Dn(m))f++;for(m=0,y=h;y;y=Dn(y))m++;for(;0<f-m;)g=Dn(g),f--;for(;0<m-f;)h=Dn(h),m--;for(;f--;){if(g===h||h!==null&&g===h.alternate)break t;g=Dn(g),h=Dn(h)}g=null}else g=null;v!==null&&nf(d,p,v,g,!1),w!==null&&E!==null&&nf(d,E,w,g,!0)}}e:{if(p=u?$n(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=ly;else if(Gc(p))if(Dh)S=dy;else{S=cy;var b=uy}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=fy);if(S&&(S=S(e,u))){Lh(d,S,n,c);break e}b&&b(e,p,u),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&Xs(p,"number",p.value)}switch(b=u?$n(u):window,e){case"focusin":(Gc(b)||b.contentEditable==="true")&&(Fn=b,ll=u,Wr=null);break;case"focusout":Wr=ll=Fn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Zc(d,n,c);break;case"selectionchange":if(my)break;case"keydown":case"keyup":Zc(d,n,c)}var C;if(Iu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else zn?Rh(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Oh&&n.locale!=="ko"&&(zn||N!=="onCompositionStart"?N==="onCompositionEnd"&&zn&&(C=Nh()):(Mt=c,ku="value"in Mt?Mt.value:Mt.textContent,zn=!0)),b=Ka(u,N),0<b.length&&(N=new Hc(N,e,null,n,c),d.push({event:N,listeners:b}),C?N.data=C:(C=Ah(n),C!==null&&(N.data=C)))),(C=ry?iy(e,n):ay(e,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(c=new Hc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Vh(d,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ei(e,n),a!=null&&r.unshift(si(e,a,i)),a=ei(e,t),a!=null&&r.push(si(e,a,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ei(n,a),l!=null&&o.unshift(si(n,l,s))):i||(l=ei(n,a),l!=null&&o.push(si(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var wy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function rf(e){return(typeof e=="string"?e:""+e).replace(wy,`
`).replace(_y,"")}function ra(e,t,n){if(t=rf(t),rf(e)!==t&&n)throw Error(k(425))}function Ga(){}var cl=null,fl=null;function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,af=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof af<"u"?function(e){return af.resolve(null).then(e).catch(Ey)}:hl;function Ey(e){setTimeout(function(){throw e})}function ms(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ri(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),tt="__reactFiber$"+wr,li="__reactProps$"+wr,mt="__reactContainer$"+wr,pl="__reactEvents$"+wr,Iy="__reactListeners$"+wr,by="__reactHandles$"+wr;function mn(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=of(e);e!==null;){if(n=e[tt])return n;e=of(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[tt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Po(e){return e[li]||null}var ml=[],Bn=-1;function an(e){return{current:e}}function Y(e){0>Bn||(e.current=ml[Bn],ml[Bn]=null,Bn--)}function W(e,t){Bn++,ml[Bn]=e.current,e.current=t}var qt={},ye=an(qt),Ce=an(!1),En=qt;function ur(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Qa(){Y(Ce),Y(ye)}function sf(e,t,n){if(ye.current!==qt)throw Error(k(168));W(ye,t),W(Ce,n)}function Kh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,ug(e)||"Unknown",i));return J({},n,r)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,En=ye.current,W(ye,e),W(Ce,Ce.current),!0}function lf(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Kh(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,Y(Ce),Y(ye),W(ye,e)):Y(Ce),W(Ce,n)}var lt=null,No=!1,vs=!1;function Gh(e){lt===null?lt=[e]:lt.push(e)}function Cy(e){No=!0,Gh(e)}function on(){if(!vs&&lt!==null){vs=!0;var e=0,t=$;try{var n=lt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,No=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),wh(gu,on),i}finally{$=t,vs=!1}}return null}var Wn=[],Hn=0,Ja=null,qa=0,Ue=[],ze=0,In=null,ut=1,ct="";function dn(e,t){Wn[Hn++]=qa,Wn[Hn++]=Ja,Ja=e,qa=t}function Qh(e,t,n){Ue[ze++]=ut,Ue[ze++]=ct,Ue[ze++]=In,In=e;var r=ut;e=ct;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ut=1<<32-Ge(t)+i|n<<i|r,ct=a+e}else ut=1<<a|n<<i|r,ct=e}function Cu(e){e.return!==null&&(dn(e,1),Qh(e,1,0))}function xu(e){for(;e===Ja;)Ja=Wn[--Hn],Wn[Hn]=null,qa=Wn[--Hn],Wn[Hn]=null;for(;e===In;)In=Ue[--ze],Ue[ze]=null,ct=Ue[--ze],Ue[ze]=null,ut=Ue[--ze],Ue[ze]=null}var Re=null,Oe=null,G=!1,Ye=null;function Xh(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Oe=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Oe=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gl(e){if(G){var t=Oe;if(t){var n=t;if(!uf(e,t)){if(vl(e))throw Error(k(418));t=Wt(n.nextSibling);var r=Re;t&&uf(e,t)?Xh(r,n):(e.flags=e.flags&-4097|2,G=!1,Re=e)}}else{if(vl(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Re=e}}}function cf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function ia(e){if(e!==Re)return!1;if(!G)return cf(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dl(e.type,e.memoizedProps)),t&&(t=Oe)){if(vl(e))throw Jh(),Error(k(418));for(;t;)Xh(e,t),t=Wt(t.nextSibling)}if(cf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Re?Wt(e.stateNode.nextSibling):null;return!0}function Jh(){for(var e=Oe;e;)e=Wt(e.nextSibling)}function cr(){Oe=Re=null,G=!1}function Tu(e){Ye===null?Ye=[e]:Ye.push(e)}var xy=St.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Za=an(null),eo=null,Vn=null,Pu=null;function Nu(){Pu=Vn=eo=null}function Ou(e){var t=Za.current;Y(Za),e._currentValue=t}function yl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){eo=e,Pu=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Pu!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(eo===null)throw Error(k(308));Vn=e,eo.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var vn=null;function Ru(e){vn===null?vn=[e]:vn.push(e)}function qh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ru(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ru(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Ca(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)}}function ff(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;Pt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var p=s.lane,v=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,g=s;switch(p=t,v=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){d=w.call(v,d,p);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,p=typeof w=="function"?w.call(v,d,p):w,p==null)break e;d=J({},d,p);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Cn|=o,e.lanes=o,e.memoizedState=d}}function df(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ep=new qd.Component().refs;function wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Yt(e),a=ht(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,i),t!==null&&(Qe(t,e,i,r),Ca(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Yt(e),a=ht(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,i),t!==null&&(Qe(t,e,i,r),Ca(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Yt(e),i=ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ht(e,i,r),t!==null&&(Qe(t,e,r,n),Ca(t,e,r))}};function hf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ai(n,r)||!ai(i,a):!0}function tp(e,t,n){var r=!1,i=qt,a=t.contextType;return typeof a=="object"&&a!==null?a=$e(a):(i=xe(t)?En:ye.current,r=t.contextTypes,a=(r=r!=null)?ur(e,i):qt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function pf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ep,Au(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=$e(a):(a=xe(t)?En:ye.current,i.context=ur(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(wl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===ep&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function aa(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mf(e){var t=e._init;return t(e._payload)}function np(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Kt(h,f),h.index=0,h.sibling=null,h}function a(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,m,y){return f===null||f.tag!==6?(f=Es(m,h.mode,y),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,y){var S=m.type;return S===Un?c(h,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&mf(S)===f.type)?(y=i(f,m.props),y.ref=Pr(h,f,m),y.return=h,y):(y=Ra(m.type,m.key,m.props,null,h.mode,y),y.ref=Pr(h,f,m),y.return=h,y)}function u(h,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Is(m,h.mode,y),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,y,S){return f===null||f.tag!==7?(f=kn(m,h.mode,y,S),f.return=h,f):(f=i(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Es(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Gi:return m=Ra(f.type,f.key,f.props,null,h.mode,m),m.ref=Pr(h,null,f),m.return=h,m;case Mn:return f=Is(f,h.mode,m),f.return=h,f;case Tt:var y=f._init;return d(h,y(f._payload),m)}if(Ar(f)||Ir(f))return f=kn(f,h.mode,m,null),f.return=h,f;aa(h,f)}return null}function p(h,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(h,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:return m.key===S?l(h,f,m,y):null;case Mn:return m.key===S?u(h,f,m,y):null;case Tt:return S=m._init,p(h,f,S(m._payload),y)}if(Ar(m)||Ir(m))return S!==null?null:c(h,f,m,y,null);aa(h,m)}return null}function v(h,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,s(f,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gi:return h=h.get(y.key===null?m:y.key)||null,l(f,h,y,S);case Mn:return h=h.get(y.key===null?m:y.key)||null,u(f,h,y,S);case Tt:var b=y._init;return v(h,f,m,b(y._payload),S)}if(Ar(y)||Ir(y))return h=h.get(m)||null,c(f,h,y,S,null);aa(f,y)}return null}function w(h,f,m,y){for(var S=null,b=null,C=f,N=f=0,z=null;C!==null&&N<m.length;N++){C.index>N?(z=C,C=null):z=C.sibling;var L=p(h,C,m[N],y);if(L===null){C===null&&(C=z);break}e&&C&&L.alternate===null&&t(h,C),f=a(L,f,N),b===null?S=L:b.sibling=L,b=L,C=z}if(N===m.length)return n(h,C),G&&dn(h,N),S;if(C===null){for(;N<m.length;N++)C=d(h,m[N],y),C!==null&&(f=a(C,f,N),b===null?S=C:b.sibling=C,b=C);return G&&dn(h,N),S}for(C=r(h,C);N<m.length;N++)z=v(C,h,N,m[N],y),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?N:z.key),f=a(z,f,N),b===null?S=z:b.sibling=z,b=z);return e&&C.forEach(function(Pe){return t(h,Pe)}),G&&dn(h,N),S}function g(h,f,m,y){var S=Ir(m);if(typeof S!="function")throw Error(k(150));if(m=S.call(m),m==null)throw Error(k(151));for(var b=S=null,C=f,N=f=0,z=null,L=m.next();C!==null&&!L.done;N++,L=m.next()){C.index>N?(z=C,C=null):z=C.sibling;var Pe=p(h,C,L.value,y);if(Pe===null){C===null&&(C=z);break}e&&C&&Pe.alternate===null&&t(h,C),f=a(Pe,f,N),b===null?S=Pe:b.sibling=Pe,b=Pe,C=z}if(L.done)return n(h,C),G&&dn(h,N),S;if(C===null){for(;!L.done;N++,L=m.next())L=d(h,L.value,y),L!==null&&(f=a(L,f,N),b===null?S=L:b.sibling=L,b=L);return G&&dn(h,N),S}for(C=r(h,C);!L.done;N++,L=m.next())L=v(C,h,N,L.value,y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),f=a(L,f,N),b===null?S=L:b.sibling=L,b=L);return e&&C.forEach(function(ln){return t(h,ln)}),G&&dn(h,N),S}function E(h,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Un&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Gi:e:{for(var S=m.key,b=f;b!==null;){if(b.key===S){if(S=m.type,S===Un){if(b.tag===7){n(h,b.sibling),f=i(b,m.props.children),f.return=h,h=f;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&mf(S)===b.type){n(h,b.sibling),f=i(b,m.props),f.ref=Pr(h,b,m),f.return=h,h=f;break e}n(h,b);break}else t(h,b);b=b.sibling}m.type===Un?(f=kn(m.props.children,h.mode,y,m.key),f.return=h,h=f):(y=Ra(m.type,m.key,m.props,null,h.mode,y),y.ref=Pr(h,f,m),y.return=h,h=y)}return o(h);case Mn:e:{for(b=m.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Is(m,h.mode,y),f.return=h,h=f}return o(h);case Tt:return b=m._init,E(h,f,b(m._payload),y)}if(Ar(m))return w(h,f,m,y);if(Ir(m))return g(h,f,m,y);aa(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Es(m,h.mode,y),f.return=h,h=f),o(h)):n(h,f)}return E}var fr=np(!0),rp=np(!1),Ni={},it=an(Ni),ui=an(Ni),ci=an(Ni);function gn(e){if(e===Ni)throw Error(k(174));return e}function Lu(e,t){switch(W(ci,t),W(ui,e),W(it,Ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qs(t,e)}Y(it),W(it,t)}function dr(){Y(it),Y(ui),Y(ci)}function ip(e){gn(ci.current);var t=gn(it.current),n=qs(t,e.type);t!==n&&(W(ui,e),W(it,n))}function Du(e){ui.current===e&&(Y(it),Y(ui))}var Q=an(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gs=[];function Mu(){for(var e=0;e<gs.length;e++)gs[e]._workInProgressVersionPrimary=null;gs.length=0}var xa=St.ReactCurrentDispatcher,ys=St.ReactCurrentBatchConfig,bn=0,X=null,ae=null,ce=null,ro=!1,Hr=!1,fi=0,Ty=0;function me(){throw Error(k(321))}function Uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function zu(e,t,n,r,i,a){if(bn=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xa.current=e===null||e.memoizedState===null?Ry:Ay,e=n(r,i),Hr){a=0;do{if(Hr=!1,fi=0,25<=a)throw Error(k(301));a+=1,ce=ae=null,t.updateQueue=null,xa.current=Ly,e=n(r,i)}while(Hr)}if(xa.current=io,t=ae!==null&&ae.next!==null,bn=0,ce=ae=X=null,ro=!1,t)throw Error(k(300));return e}function Fu(){var e=fi!==0;return fi=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=e:ce=ce.next=e,ce}function Be(){if(ae===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?X.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(k(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?X.memoizedState=ce=e:ce=ce.next=e}return ce}function di(e,t){return typeof t=="function"?t(e):t}function ws(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((bn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,X.lanes|=c,Cn|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Xe(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,X.lanes|=a,Cn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _s(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Xe(a,t.memoizedState)||(be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ap(){}function op(e,t){var n=X,r=Be(),i=t(),a=!Xe(r.memoizedState,i);if(a&&(r.memoizedState=i,be=!0),r=r.queue,ju(up.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,hi(9,lp.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(k(349));bn&30||sp(n,t,i)}return i}function sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lp(e,t,n,r){t.value=n,t.getSnapshot=r,cp(t)&&fp(e)}function up(e,t,n){return n(function(){cp(t)&&fp(e)})}function cp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function fp(e){var t=vt(e,1);t!==null&&Qe(t,e,1,-1)}function vf(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=Oy.bind(null,X,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dp(){return Be().memoizedState}function Ta(e,t,n,r){var i=et();X.flags|=e,i.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var i=Be();r=r===void 0?null:r;var a=void 0;if(ae!==null){var o=ae.memoizedState;if(a=o.destroy,r!==null&&Uu(r,o.deps)){i.memoizedState=hi(t,n,a,r);return}}X.flags|=e,i.memoizedState=hi(1|t,n,a,r)}function gf(e,t){return Ta(8390656,8,e,t)}function ju(e,t){return Ro(2048,8,e,t)}function hp(e,t){return Ro(4,2,e,t)}function pp(e,t){return Ro(4,4,e,t)}function mp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vp(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,mp.bind(null,t,e),n)}function $u(){}function gp(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yp(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wp(e,t,n){return bn&21?(Xe(n,t)||(n=Sh(),X.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function Py(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{$=n,ys.transition=r}}function _p(){return Be().memoizedState}function Ny(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(e))Sp(t,n);else if(n=qh(e,t,n,r),n!==null){var i=ke();Qe(n,e,r,i),Ep(n,t,r)}}function Oy(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(e))Sp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Xe(s,o)){var l=t.interleaved;l===null?(i.next=i,Ru(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=qh(e,t,i,r),n!==null&&(i=ke(),Qe(n,e,r,i),Ep(n,t,r))}}function kp(e){var t=e.alternate;return e===X||t!==null&&t===X}function Sp(e,t){Hr=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ep(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)}}var io={readContext:$e,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Ry={readContext:$e,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:gf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,mp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ny.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:vf,useDebugValue:$u,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=vf(!1),t=e[0];return e=Py.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=et();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),fe===null)throw Error(k(349));bn&30||sp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,gf(up.bind(null,r,a,e),[e]),r.flags|=2048,hi(9,lp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=et(),t=fe.identifierPrefix;if(G){var n=ct,r=ut;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ty++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ay={readContext:$e,useCallback:gp,useContext:$e,useEffect:ju,useImperativeHandle:vp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:yp,useReducer:ws,useRef:dp,useState:function(){return ws(di)},useDebugValue:$u,useDeferredValue:function(e){var t=Be();return wp(t,ae.memoizedState,e)},useTransition:function(){var e=ws(di)[0],t=Be().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:op,useId:_p,unstable_isNewReconciler:!1},Ly={readContext:$e,useCallback:gp,useContext:$e,useEffect:ju,useImperativeHandle:vp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:yp,useReducer:_s,useRef:dp,useState:function(){return _s(di)},useDebugValue:$u,useDeferredValue:function(e){var t=Be();return ae===null?t.memoizedState=e:wp(t,ae.memoizedState,e)},useTransition:function(){var e=_s(di)[0],t=Be().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:op,useId:_p,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=lg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ks(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dy=typeof WeakMap=="function"?WeakMap:Map;function Ip(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Ol=r),kl(e,t)},n}function bp(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){kl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){kl(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function yf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qy.bind(null,e,t,n),t.then(e,e))}function wf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _f(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var My=St.ReactCurrentOwner,be=!1;function _e(e,t,n,r){t.child=e===null?rp(t,null,n,r):fr(t,e.child,n,r)}function kf(e,t,n,r,i){n=n.render;var a=t.ref;return nr(t,i),r=zu(e,t,n,r,a,i),n=Fu(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(G&&n&&Cu(t),t.flags|=1,_e(e,t,r,i),t.child)}function Sf(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Qu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Cp(e,t,a,r,i)):(e=Ra(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ai,n(o,r)&&e.ref===t.ref)return gt(e,t,i)}return t.flags|=1,e=Kt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Cp(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ai(a,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,gt(e,t,i)}return Sl(e,t,n,r,i)}function xp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Kn,Ne),Ne|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Kn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,W(Kn,Ne),Ne|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,W(Kn,Ne),Ne|=r;return _e(e,t,i,n),t.child}function Tp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,i){var a=xe(n)?En:ye.current;return a=ur(t,a),nr(t,i),n=zu(e,t,n,r,a,i),r=Fu(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(G&&r&&Cu(t),t.flags|=1,_e(e,t,n,i),t.child)}function Ef(e,t,n,r,i){if(xe(n)){var a=!0;Xa(t)}else a=!1;if(nr(t,i),t.stateNode===null)Pa(e,t),tp(t,n,r),_l(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=xe(n)?En:ye.current,u=ur(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&pf(t,o,r,u),Pt=!1;var p=t.memoizedState;o.state=p,to(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Ce.current||Pt?(typeof c=="function"&&(wl(t,n,c,r),l=t.memoizedState),(s=Pt||hf(t,n,s,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:He(t.type,s),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=xe(n)?En:ye.current,l=ur(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==l)&&pf(t,o,r,l),Pt=!1,p=t.memoizedState,o.state=p,to(t,r,o,i);var w=t.memoizedState;s!==d||p!==w||Ce.current||Pt?(typeof v=="function"&&(wl(t,n,v,r),w=t.memoizedState),(u=Pt||hf(t,n,u,r,p,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return El(e,t,n,r,a,i)}function El(e,t,n,r,i,a){Tp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&lf(t,n,!1),gt(e,t,a);r=t.stateNode,My.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,s,a)):_e(e,t,s,a),t.memoizedState=r.state,i&&lf(t,n,!0),t.child}function Pp(e){var t=e.stateNode;t.pendingContext?sf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sf(e,t.context,!1),Lu(e,t.containerInfo)}function If(e,t,n,r,i){return cr(),Tu(i),t.flags|=256,_e(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Np(e,t,n){var r=t.pendingProps,i=Q.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Do(o,r,0,null),e=kn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=bl(n),t.memoizedState=Il,e):Bu(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Uy(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Kt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Kt(s,a):(a=kn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?bl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return a=e.child,e=a.sibling,r=Kt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bu(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,n,r){return r!==null&&Tu(r),fr(t,e.child,null,n),e=Bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uy(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ks(Error(k(422))),oa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Do({mode:"visible",children:r.children},i,0,null),a=kn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&fr(t,e.child,null,o),t.child.memoizedState=bl(o),t.memoizedState=Il,a);if(!(t.mode&1))return oa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(k(419)),r=ks(a,r,void 0),oa(e,t,o,r)}if(s=(o&e.childLanes)!==0,be||s){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,vt(e,i),Qe(r,e,i,-1))}return Gu(),r=ks(Error(k(421))),oa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xy.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Oe=Wt(i.nextSibling),Re=t,G=!0,Ye=null,e!==null&&(Ue[ze++]=ut,Ue[ze++]=ct,Ue[ze++]=In,ut=e.id,ct=e.overflow,In=t),t=Bu(t,r.children),t.flags|=4096,t)}function bf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yl(e.return,t,n)}function Ss(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Op(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(_e(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,n,t);else if(e.tag===19)bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ss(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ss(t,!0,n,null,a);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zy(e,t,n){switch(t.tag){case 3:Pp(t),cr();break;case 5:ip(t);break;case 1:xe(t.type)&&Xa(t);break;case 4:Lu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Za,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Np(e,t,n):(W(Q,Q.current&1),e=gt(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Op(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,xp(e,t,n)}return gt(e,t,n)}var Rp,Cl,Ap,Lp;Rp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cl=function(){};Ap=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(it.current);var a=null;switch(n){case"input":i=Gs(e,i),r=Gs(e,r),a=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),a=[];break;case"textarea":i=Js(e,i),r=Js(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ga)}Zs(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Lp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fy(e,t,n){var r=t.pendingProps;switch(xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return xe(t.type)&&Qa(),ve(t),null;case 3:return r=t.stateNode,dr(),Y(Ce),Y(ye),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Ll(Ye),Ye=null))),Cl(e,t),ve(t),null;case 5:Du(t);var i=gn(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Ap(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=gn(it.current),ia(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[tt]=t,r[li]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)H(Dr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ac(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":Dc(r,a),H("invalid",r)}Zs(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ra(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ra(r.textContent,s,e),i=["children",""+s]):qr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Qi(r),Lc(r,a,!0);break;case"textarea":Qi(r),Mc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ga)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tt]=t,e[li]=r,Rp(e,t,!1,!1),t.stateNode=e;e:{switch(o=el(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)H(Dr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Ac(e,r),i=Gs(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),H("invalid",e);break;case"textarea":Dc(e,r),i=Js(e,r),H("invalid",e);break;default:i=r}Zs(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?ch(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lh(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zr(e,l):typeof l=="number"&&Zr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(qr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&H("scroll",e):l!=null&&du(e,a,l,o))}switch(n){case"input":Qi(e),Lc(e,r,!1);break;case"textarea":Qi(e),Mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?qn(e,!!r.multiple,a,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Lp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=gn(ci.current),gn(it.current),ia(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(a=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:ra(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ra(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Oe!==null&&t.mode&1&&!(t.flags&128))Jh(),cr(),t.flags|=98560,a=!1;else if(a=ia(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[tt]=t}else cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),a=!1}else Ye!==null&&(Ll(Ye),Ye=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?oe===0&&(oe=3):Gu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return dr(),Cl(e,t),e===null&&oi(t.stateNode.containerInfo),ve(t),null;case 10:return Ou(t.type._context),ve(t),null;case 17:return xe(t.type)&&Qa(),ve(t),null;case 19:if(Y(Q),a=t.memoizedState,a===null)return ve(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Nr(a,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=no(e),o!==null){for(t.flags|=128,Nr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}a.tail!==null&&re()>pr&&(t.flags|=128,r=!0,Nr(a,!1),t.lanes=4194304)}else{if(!r)if(e=no(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!G)return ve(t),null}else 2*re()-a.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=re(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Ku(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function jy(e,t){switch(xu(t),t.tag){case 1:return xe(t.type)&&Qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),Y(Ce),Y(ye),Mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Du(t),null;case 13:if(Y(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Q),null;case 4:return dr(),null;case 10:return Ou(t.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var sa=!1,ge=!1,$y=typeof WeakSet=="function"?WeakSet:Set,T=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Cf=!1;function By(e,t){if(cl=Va,e=zh(),bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},Va=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,E=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:He(t.type,g),E);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Cf,Cf=!1,w}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&xl(t,n,a)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dp(e){var t=e.alternate;t!==null&&(e.alternate=null,Dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[li],delete t[pl],delete t[Iy],delete t[by])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mp(e){return e.tag===5||e.tag===3||e.tag===4}function xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}var de=null,Ve=!1;function bt(e,t,n){for(n=n.child;n!==null;)Up(e,t,n),n=n.sibling}function Up(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:ge||Yn(n,t);case 6:var r=de,i=Ve;de=null,bt(e,t,n),de=r,Ve=i,de!==null&&(Ve?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ve?(e=de,n=n.stateNode,e.nodeType===8?ms(e.parentNode,n):e.nodeType===1&&ms(e,n),ri(e)):ms(de,n.stateNode));break;case 4:r=de,i=Ve,de=n.stateNode.containerInfo,Ve=!0,bt(e,t,n),de=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&xl(n,t,o),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!ge&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,bt(e,t,n),ge=r):bt(e,t,n);break;default:bt(e,t,n)}}function Tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $y),t.forEach(function(r){var i=Jy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,Ve=!1;break e;case 3:de=s.stateNode.containerInfo,Ve=!0;break e;case 4:de=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(de===null)throw Error(k(160));Up(a,o,i),de=null,Ve=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zp(t,e),t=t.sibling}function zp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ze(e),r&4){try{Vr(3,e,e.return),Ao(3,e)}catch(g){Z(e,e.return,g)}try{Vr(5,e,e.return)}catch(g){Z(e,e.return,g)}}break;case 1:We(t,e),Ze(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(We(t,e),Ze(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{Zr(i,"")}catch(g){Z(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&ah(i,a),el(s,o);var u=el(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ch(i,d):c==="dangerouslySetInnerHTML"?lh(i,d):c==="children"?Zr(i,d):du(i,c,d,u)}switch(s){case"input":Qs(i,a);break;case"textarea":oh(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?qn(i,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?qn(i,!!a.multiple,a.defaultValue,!0):qn(i,!!a.multiple,a.multiple?[]:"",!1))}i[li]=a}catch(g){Z(e,e.return,g)}}break;case 6:if(We(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Z(e,e.return,g)}}break;case 3:if(We(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(g){Z(e,e.return,g)}break;case 4:We(t,e),Ze(e);break;case 13:We(t,e),Ze(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Vu=re())),r&4&&Tf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||c,We(t,e),ge=u):We(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(d=T=c;T!==null;){switch(p=T,v=p.child,p.tag){case 0:case 11:case 14:case 15:Vr(4,p,p.return);break;case 1:Yn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){Z(r,n,g)}}break;case 5:Yn(p,p.return);break;case 22:if(p.memoizedState!==null){Nf(d);continue}}v!==null?(v.return=p,T=v):Nf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=uh("display",o))}catch(g){Z(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Z(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:We(t,e),Ze(e),r&4&&Tf(e);break;case 21:break;default:We(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mp(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zr(i,""),r.flags&=-33);var a=xf(e);Nl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=xf(e);Pl(e,s,o);break;default:throw Error(k(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wy(e,t,n){T=e,Fp(e)}function Fp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sa;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ge;s=sa;var u=ge;if(sa=o,(ge=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Of(i):l!==null?(l.return=o,T=l):Of(i);for(;a!==null;)T=a,Fp(a),a=a.sibling;T=i,sa=s,ge=u}Pf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):Pf(e)}}function Pf(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&df(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}df(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ri(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&Tl(t)}catch(p){Z(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Nf(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Of(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(l){Z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Z(t,i,l)}}var a=t.return;try{Tl(t)}catch(l){Z(t,a,l)}break;case 5:var o=t.return;try{Tl(t)}catch(l){Z(t,o,l)}}}catch(l){Z(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Hy=Math.ceil,ao=St.ReactCurrentDispatcher,Wu=St.ReactCurrentOwner,je=St.ReactCurrentBatchConfig,j=0,fe=null,ie=null,he=0,Ne=0,Kn=an(0),oe=0,pi=null,Cn=0,Lo=0,Hu=0,Yr=null,Ie=null,Vu=0,pr=1/0,st=null,oo=!1,Ol=null,Vt=null,la=!1,Ut=null,so=0,Kr=0,Rl=null,Na=-1,Oa=0;function ke(){return j&6?re():Na!==-1?Na:Na=re()}function Yt(e){return e.mode&1?j&2&&he!==0?he&-he:xy.transition!==null?(Oa===0&&(Oa=Sh()),Oa):(e=$,e!==0||(e=window.event,e=e===void 0?16:Ph(e.type)),e):1}function Qe(e,t,n,r){if(50<Kr)throw Kr=0,Rl=null,Error(k(185));xi(e,n,r),(!(j&2)||e!==fe)&&(e===fe&&(!(j&2)&&(Lo|=n),oe===4&&Ot(e,he)),Te(e,r),n===1&&j===0&&!(t.mode&1)&&(pr=re()+500,No&&on()))}function Te(e,t){var n=e.callbackNode;xg(e,t);var r=Ha(e,e===fe?he:0);if(r===0)n!==null&&Fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fc(n),t===1)e.tag===0?Cy(Rf.bind(null,e)):Gh(Rf.bind(null,e)),Sy(function(){!(j&6)&&on()}),n=null;else{switch(Eh(r)){case 1:n=gu;break;case 4:n=_h;break;case 16:n=Wa;break;case 536870912:n=kh;break;default:n=Wa}n=Kp(n,jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jp(e,t){if(Na=-1,Oa=0,j&6)throw Error(k(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=Ha(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=j;j|=2;var a=Bp();(fe!==e||he!==t)&&(st=null,pr=re()+500,_n(e,t));do try{Ky();break}catch(s){$p(e,s)}while(1);Nu(),ao.current=a,j=i,ie!==null?t=0:(fe=null,he=0,t=oe)}if(t!==0){if(t===2&&(i=al(e),i!==0&&(r=i,t=Al(e,i))),t===1)throw n=pi,_n(e,0),Ot(e,r),Te(e,re()),n;if(t===6)Ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!Vy(i)&&(t=lo(e,r),t===2&&(a=al(e),a!==0&&(r=a,t=Al(e,a))),t===1))throw n=pi,_n(e,0),Ot(e,r),Te(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:hn(e,Ie,st);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=Vu+500-re(),10<t)){if(Ha(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hl(hn.bind(null,e,Ie,st),t);break}hn(e,Ie,st);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ge(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hy(r/1960))-r,10<r){e.timeoutHandle=hl(hn.bind(null,e,Ie,st),r);break}hn(e,Ie,st);break;case 5:hn(e,Ie,st);break;default:throw Error(k(329))}}}return Te(e,re()),e.callbackNode===n?jp.bind(null,e):null}function Al(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=lo(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Ll(t)),e}function Ll(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Vy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Xe(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~Hu,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function Rf(e){if(j&6)throw Error(k(327));rr();var t=Ha(e,0);if(!(t&1))return Te(e,re()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=al(e);r!==0&&(t=r,n=Al(e,r))}if(n===1)throw n=pi,_n(e,0),Ot(e,t),Te(e,re()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Ie,st),Te(e,re()),null}function Yu(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(pr=re()+500,No&&on())}}function xn(e){Ut!==null&&Ut.tag===0&&!(j&6)&&rr();var t=j;j|=1;var n=je.transition,r=$;try{if(je.transition=null,$=1,e)return e()}finally{$=r,je.transition=n,j=t,!(j&6)&&on()}}function Ku(){Ne=Kn.current,Y(Kn)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ky(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:dr(),Y(Ce),Y(ye),Mu();break;case 5:Du(r);break;case 4:dr();break;case 13:Y(Q);break;case 19:Y(Q);break;case 10:Ou(r.type._context);break;case 22:case 23:Ku()}n=n.return}if(fe=e,ie=e=Kt(e.current,null),he=Ne=t,oe=0,pi=null,Hu=Lo=Cn=0,Ie=Yr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}vn=null}return e}function $p(e,t){do{var n=ie;try{if(Nu(),xa.current=io,ro){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(bn=0,ce=ae=X=null,Hr=!1,fi=0,Wu.current=null,n===null||n.return===null){oe=1,pi=t,ie=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=he,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=wf(o);if(v!==null){v.flags&=-257,_f(v,o,s,a,t),v.mode&1&&yf(a,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(l),t.updateQueue=g}else w.add(l);break e}else{if(!(t&1)){yf(a,u,t),Gu();break e}l=Error(k(426))}}else if(G&&s.mode&1){var E=wf(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),_f(E,o,s,a,t),Tu(hr(l,s));break e}}a=l=hr(l,s),oe!==4&&(oe=2),Yr===null?Yr=[a]:Yr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Ip(a,l,t);ff(a,h);break e;case 1:s=l;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=bp(a,s,t);ff(a,y);break e}}a=a.return}while(a!==null)}Hp(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Bp(){var e=ao.current;return ao.current=io,e===null?io:e}function Gu(){(oe===0||oe===3||oe===2)&&(oe=4),fe===null||!(Cn&268435455)&&!(Lo&268435455)||Ot(fe,he)}function lo(e,t){var n=j;j|=2;var r=Bp();(fe!==e||he!==t)&&(st=null,_n(e,t));do try{Yy();break}catch(i){$p(e,i)}while(1);if(Nu(),j=n,ao.current=r,ie!==null)throw Error(k(261));return fe=null,he=0,oe}function Yy(){for(;ie!==null;)Wp(ie)}function Ky(){for(;ie!==null&&!yg();)Wp(ie)}function Wp(e){var t=Yp(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Hp(e):ie=t,Wu.current=null}function Hp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jy(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ie=null;return}}else if(n=Fy(n,t,Ne),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);oe===0&&(oe=5)}function hn(e,t,n){var r=$,i=je.transition;try{je.transition=null,$=1,Gy(e,t,n,r)}finally{je.transition=i,$=r}return null}function Gy(e,t,n,r){do rr();while(Ut!==null);if(j&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Tg(e,a),e===fe&&(ie=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,Kp(Wa,function(){return rr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=je.transition,je.transition=null;var o=$;$=1;var s=j;j|=4,Wu.current=null,By(e,n),zp(n,e),py(fl),Va=!!cl,fl=cl=null,e.current=n,Wy(n),wg(),j=s,$=o,je.transition=a}else e.current=n;if(la&&(la=!1,Ut=e,so=i),a=e.pendingLanes,a===0&&(Vt=null),Sg(n.stateNode),Te(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Ol,Ol=null,e;return so&1&&e.tag!==0&&rr(),a=e.pendingLanes,a&1?e===Rl?Kr++:(Kr=0,Rl=e):Kr=0,on(),null}function rr(){if(Ut!==null){var e=Eh(so),t=je.transition,n=$;try{if(je.transition=null,$=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,so=0,j&6)throw Error(k(331));var i=j;for(j|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Vr(8,c,a)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var p=c.sibling,v=c.return;if(Dp(c),c===u){T=null;break}if(p!==null){p.return=v,T=p;break}T=v}}}var w=a.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var E=g.sibling;g.sibling=null,g=E}while(g!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Vr(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}var f=e.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ao(9,s)}}catch(S){Z(s,s.return,S)}if(s===o){T=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,T=y;break e}T=s.return}}if(j=i,on(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{$=n,je.transition=t}}return!1}function Af(e,t,n){t=hr(n,t),t=Ip(e,t,1),e=Ht(e,t,1),t=ke(),e!==null&&(xi(e,1,t),Te(e,t))}function Z(e,t,n){if(e.tag===3)Af(e,e,n);else for(;t!==null;){if(t.tag===3){Af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=hr(n,e),e=bp(t,e,1),t=Ht(t,e,1),e=ke(),t!==null&&(xi(t,1,e),Te(t,e));break}}t=t.return}}function Qy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(oe===4||oe===3&&(he&130023424)===he&&500>re()-Vu?_n(e,0):Hu|=n),Te(e,t)}function Vp(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=ke();e=vt(e,t),e!==null&&(xi(e,t,n),Te(e,n))}function Xy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vp(e,n)}function Jy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Vp(e,n)}var Yp;Yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,zy(e,t,n);be=!!(e.flags&131072)}else be=!1,G&&t.flags&1048576&&Qh(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pa(e,t),e=t.pendingProps;var i=ur(t,ye.current);nr(t,n),i=zu(null,t,r,e,i,n);var a=Fu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(a=!0,Xa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Au(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,_l(t,r,e,n),t=El(null,t,r,!0,a,n)):(t.tag=0,G&&a&&Cu(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Zy(r),e=He(r,e),i){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=Ef(null,t,r,e,n);break e;case 11:t=kf(null,t,r,e,n);break e;case 14:t=Sf(null,t,r,He(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Ef(e,t,r,i,n);case 3:e:{if(Pp(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Zh(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=hr(Error(k(423)),t),t=If(e,t,r,n,i);break e}else if(r!==i){i=hr(Error(k(424)),t),t=If(e,t,r,n,i);break e}else for(Oe=Wt(t.stateNode.containerInfo.firstChild),Re=t,G=!0,Ye=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===i){t=gt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return ip(t),e===null&&gl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,dl(r,i)?o=null:a!==null&&dl(r,a)&&(t.flags|=32),Tp(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&gl(t),null;case 13:return Np(e,t,n);case 4:return Lu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),kf(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,W(Za,r._currentValue),r._currentValue=o,a!==null)if(Xe(a.value,o)){if(a.children===i.children&&!Ce.current){t=gt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=ht(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),yl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nr(t,n),i=$e(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),Sf(e,t,r,i,n);case 15:return Cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Pa(e,t),t.tag=1,xe(r)?(e=!0,Xa(t)):e=!1,nr(t,n),tp(t,r,i),_l(t,r,i,n),El(null,t,r,!0,e,n);case 19:return Op(e,t,n);case 22:return xp(e,t,n)}throw Error(k(156,t.tag))};function Kp(e,t){return wh(e,t)}function qy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new qy(e,t,n,r)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zy(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pu)return 11;if(e===mu)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ra(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Qu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Un:return kn(n.children,i,a,t);case hu:o=8,i|=8;break;case Hs:return e=Fe(12,n,t,i|2),e.elementType=Hs,e.lanes=a,e;case Vs:return e=Fe(13,n,t,i),e.elementType=Vs,e.lanes=a,e;case Ys:return e=Fe(19,n,t,i),e.elementType=Ys,e.lanes=a,e;case nh:return Do(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eh:o=10;break e;case th:o=9;break e;case pu:o=11;break e;case mu:o=14;break e;case Tt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Fe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function kn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=nh,e.lanes=n,e.stateNode={isHidden:!1},e}function Es(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Is(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=is(0),this.expirationTimes=is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xu(e,t,n,r,i,a,o,s,l){return e=new e0(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Fe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(a),e}function t0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gp(e){if(!e)return qt;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return Kh(e,n,t)}return t}function Qp(e,t,n,r,i,a,o,s,l){return e=Xu(n,r,!0,e,i,a,o,s,l),e.context=Gp(null),n=e.current,r=ke(),i=Yt(n),a=ht(r,i),a.callback=t??null,Ht(n,a,i),e.current.lanes=i,xi(e,i,r),Te(e,r),e}function Mo(e,t,n,r){var i=t.current,a=ke(),o=Yt(i);return n=Gp(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(i,t,o),e!==null&&(Qe(e,i,o,a),Ca(e,i,o)),o}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ju(e,t){Lf(e,t),(e=e.alternate)&&Lf(e,t)}function n0(){return null}var Xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}Uo.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Mo(e,t,null,null)};Uo.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Mo(null,e,null,null)}),t[mt]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ch();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&Th(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Df(){}function r0(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=uo(o);a.call(u)}}var o=Qp(t,r,e,0,null,!1,!1,"",Df);return e._reactRootContainer=o,e[mt]=o.current,oi(e.nodeType===8?e.parentNode:e),xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=uo(l);s.call(u)}}var l=Xu(e,0,!1,null,null,!1,!1,"",Df);return e._reactRootContainer=l,e[mt]=l.current,oi(e.nodeType===8?e.parentNode:e),xn(function(){Mo(t,l,n,r)}),l}function Fo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=uo(o);s.call(l)}}Mo(t,o,e,i)}else o=r0(n,t,e,i,r);return uo(o)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lr(t.pendingLanes);n!==0&&(yu(t,n|1),Te(t,re()),!(j&6)&&(pr=re()+500,on()))}break;case 13:xn(function(){var r=vt(e,1);if(r!==null){var i=ke();Qe(r,e,1,i)}}),Ju(e,1)}};wu=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=ke();Qe(t,e,134217728,n)}Ju(e,134217728)}};bh=function(e){if(e.tag===13){var t=Yt(e),n=vt(e,t);if(n!==null){var r=ke();Qe(n,e,t,r)}Ju(e,t)}};Ch=function(){return $};xh=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};nl=function(e,t,n){switch(t){case"input":if(Qs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(k(90));ih(r),Qs(r,i)}}}break;case"textarea":oh(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};hh=Yu;ph=xn;var i0={usingClientEntryPoint:!1,Events:[Pi,$n,Po,fh,dh,Yu]},Or={findFiberByHostInstance:mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a0={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gh(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{bo=ua.inject(a0),rt=ua}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i0;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(t))throw Error(k(200));return t0(e,t,null,n)};Le.createRoot=function(e,t){if(!Zu(e))throw Error(k(299));var n=!1,r="",i=Xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xu(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,oi(e.nodeType===8?e.parentNode:e),new qu(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=gh(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return xn(e)};Le.hydrate=function(e,t,n){if(!zo(t))throw Error(k(200));return Fo(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Zu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Qp(t,null,e,1,n??null,i,!1,a,o),e[mt]=t.current,oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};Le.render=function(e,t,n){if(!zo(t))throw Error(k(200));return Fo(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!zo(e))throw Error(k(40));return e._reactRootContainer?(xn(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Le.unstable_batchedUpdates=Yu;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Fo(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Le})(ng);var Mf=$s;js.createRoot=Mf.createRoot,js.hydrateRoot=Mf.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const Uf="popstate";function o0(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Dl("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:co(i)}return l0(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function s0(){return Math.random().toString(36).substr(2,8)}function zf(e,t){return{usr:e.state,key:e.key,idx:t}}function Dl(e,t,n,r){return n===void 0&&(n=null),mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_r(t):t,{state:n,key:t&&t.key||r||s0()})}function co(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function l0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=zt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(mi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=zt.Pop;let E=c(),h=E==null?null:E-u;u=E,l&&l({action:s,location:g.location,delta:h})}function p(E,h){s=zt.Push;let f=Dl(g.location,E,h);n&&n(f,E),u=c()+1;let m=zf(f,u),y=g.createHref(f);try{o.pushState(m,"",y)}catch{i.location.assign(y)}a&&l&&l({action:s,location:g.location,delta:1})}function v(E,h){s=zt.Replace;let f=Dl(g.location,E,h);n&&n(f,E),u=c();let m=zf(f,u),y=g.createHref(f);o.replaceState(m,"",y),a&&l&&l({action:s,location:g.location,delta:0})}function w(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:co(E);return se(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let g={get action(){return s},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Uf,d),l=E,()=>{i.removeEventListener(Uf,d),l=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let h=w(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go(E){return o.go(E)}};return g}var Ff;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ff||(Ff={}));function u0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?_r(t):t,i=Zp(r.pathname||"/",n);if(i==null)return null;let a=Jp(e);c0(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=w0(a[s],S0(i));return o}function Jp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Gt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(se(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jp(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:g0(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of qp(a.path))i(a,o,l)}),t}function qp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=qp(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function c0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f0=/^:\w+$/,d0=3,h0=2,p0=1,m0=10,v0=-2,jf=e=>e==="*";function g0(e,t){let n=e.split("/"),r=n.length;return n.some(jf)&&(r+=v0),t&&(r+=h0),n.filter(i=>!jf(i)).reduce((i,a)=>i+(f0.test(a)?d0:a===""?p0:m0),r)}function y0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function w0(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=_0({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;a.push({params:r,pathname:Gt([i,c.pathname]),pathnameBase:C0(Gt([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Gt([i,c.pathnameBase]))}return a}function _0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=k0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=s[d]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=E0(s[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function k0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ec(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function S0(e){try{return decodeURI(e)}catch(t){return ec(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function E0(e,t){try{return decodeURIComponent(e)}catch(n){return ec(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Zp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ec(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function I0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?_r(e):e;return{pathname:n?n.startsWith("/")?n:b0(n,t):t,search:x0(r),hash:T0(i)}}function b0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function em(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=_r(e):(i=mi({},e),se(!i.pathname||!i.pathname.includes("?"),bs("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),bs("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),bs("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let d=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=I0(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gt=e=>e.join("/").replace(/\/\/+/g,"/"),C0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function P0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const N0=["post","put","patch","delete"];[...N0];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}function O0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const R0=typeof Object.is=="function"?Object.is:O0,{useState:A0,useEffect:L0,useLayoutEffect:D0,useDebugValue:M0}=Fs;function U0(e,t,n){const r=t(),[{inst:i},a]=A0({inst:{value:r,getSnapshot:t}});return D0(()=>{i.value=r,i.getSnapshot=t,Cs(i)&&a({inst:i})},[e,r,t]),L0(()=>(Cs(i)&&a({inst:i}),e(()=>{Cs(i)&&a({inst:i})})),[e]),M0(r),r}function Cs(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!R0(n,r)}catch{return!0}}function z0(e,t,n){return t()}const F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j0=!F0,$0=j0?z0:U0;"useSyncExternalStore"in Fs&&(e=>e.useSyncExternalStore)(Fs);const nm=I.createContext(null),rm=I.createContext(null),jo=I.createContext(null),$o=I.createContext(null),kr=I.createContext({outlet:null,matches:[]}),im=I.createContext(null);function B0(e,t){let{relative:n}=t===void 0?{}:t;Oi()||se(!1);let{basename:r,navigator:i}=I.useContext(jo),{hash:a,pathname:o,search:s}=am(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Gt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Oi(){return I.useContext($o)!=null}function Bo(){return Oi()||se(!1),I.useContext($o).location}function Wo(){Oi()||se(!1);let{basename:e,navigator:t}=I.useContext(jo),{matches:n}=I.useContext(kr),{pathname:r}=Bo(),i=JSON.stringify(em(n).map(s=>s.pathnameBase)),a=I.useRef(!1);return I.useEffect(()=>{a.current=!0}),I.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=tm(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Gt([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function am(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(kr),{pathname:i}=Bo(),a=JSON.stringify(em(r).map(o=>o.pathnameBase));return I.useMemo(()=>tm(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function W0(e,t){Oi()||se(!1);let{navigator:n}=I.useContext(jo),r=I.useContext(rm),{matches:i}=I.useContext(kr),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=Bo(),u;if(t){var c;let g=typeof t=="string"?_r(t):t;s==="/"||(c=g.pathname)!=null&&c.startsWith(s)||se(!1),u=g}else u=l;let d=u.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",v=u0(e,{pathname:p}),w=K0(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Gt([s,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?s:Gt([s,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r||void 0);return t&&w?I.createElement($o.Provider,{value:{location:Ml({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:zt.Pop}},w):w}function H0(){let e=J0(),t=P0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,a)}class V0 extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(kr.Provider,{value:this.props.routeContext},I.createElement(im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y0(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(nm);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(kr.Provider,{value:t},r)}function K0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||se(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,s)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||I.createElement(H0,null):null,c=t.concat(r.slice(0,s+1)),d=()=>I.createElement(Y0,{match:o,routeContext:{outlet:a,matches:c}},l?u:o.route.element!==void 0?o.route.element:a);return n&&(o.route.errorElement||s===0)?I.createElement(V0,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var $f;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})($f||($f={}));var fo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(fo||(fo={}));function G0(e){let t=I.useContext(rm);return t||se(!1),t}function Q0(e){let t=I.useContext(kr);return t||se(!1),t}function X0(e){let t=Q0(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function J0(){var e;let t=I.useContext(im),n=G0(fo.UseRouteError),r=X0(fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Aa(e){se(!1)}function q0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=zt.Pop,navigator:a,static:o=!1}=e;Oi()&&se(!1);let s=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=_r(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:v="default"}=r,w=I.useMemo(()=>{let g=Zp(u,s);return g==null?null:{pathname:g,search:c,hash:d,state:p,key:v}},[s,u,c,d,p,v]);return w==null?null:I.createElement(jo.Provider,{value:l},I.createElement($o.Provider,{children:n,value:{location:w,navigationType:i}}))}function Z0(e){let{children:t,location:n}=e,r=I.useContext(nm),i=r&&!t?r.router.routes:Ul(t);return W0(i,n)}var Bf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Bf||(Bf={}));new Promise(()=>{});function Ul(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,Ul(r.props.children,t));return}r.type!==Aa&&se(!1),!r.props.index||!r.props.children||se(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Ul(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zl.apply(this,arguments)}function e1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function t1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n1(e,t){return e.button===0&&(!t||t==="_self")&&!t1(e)}const r1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function i1(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=o0({window:r,v5Compat:!0}));let a=i.current,[o,s]=I.useState({action:a.action,location:a.location});return I.useLayoutEffect(()=>a.listen(s),[a]),I.createElement(q0,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const a1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",om=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,d=e1(t,r1),p,v=!1;if(a1&&typeof u=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)){p=u;let h=new URL(window.location.href),f=u.startsWith("//")?new URL(h.protocol+u):new URL(u);f.origin===h.origin?u=f.pathname+f.search+f.hash:v=!0}let w=B0(u,{relative:i}),g=o1(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function E(h){r&&r(h),h.defaultPrevented||g(h)}return I.createElement("a",zl({},d,{href:p||w,onClick:v||a?r:E,ref:n,target:l}))});var Wf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Wf||(Wf={}));var Hf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hf||(Hf={}));function o1(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=Wo(),l=Bo(),u=am(e,{relative:o});return I.useCallback(c=>{if(n1(c,n)){c.preventDefault();let d=r!==void 0?r:co(l)===co(u);s(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}function Vf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vf(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ho(e){return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ho(e)}function s1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l1(e,t,n){return t&&Yf(e.prototype,t),n&&Yf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tc(e,t){return c1(e)||d1(e,t)||sm(e,t)||p1()}function Ri(e){return u1(e)||f1(e)||sm(e)||h1()}function u1(e){if(Array.isArray(e))return Fl(e)}function c1(e){if(Array.isArray(e))return e}function f1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function d1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function sm(e,t){if(e){if(typeof e=="string")return Fl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fl(e,t)}}function Fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Kf=function(){},nc={},lm={},um=null,cm={mark:Kf,measure:Kf};try{typeof window<"u"&&(nc=window),typeof document<"u"&&(lm=document),typeof MutationObserver<"u"&&(um=MutationObserver),typeof performance<"u"&&(cm=performance)}catch{}var m1=nc.navigator||{},Gf=m1.userAgent,Qf=Gf===void 0?"":Gf,Zt=nc,K=lm,Xf=um,ca=cm;Zt.document;var Et=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",fm=~Qf.indexOf("MSIE")||~Qf.indexOf("Trident/"),fa,da,ha,pa,ma,yt="___FONT_AWESOME___",jl=16,dm="fa",hm="svg-inline--fa",Tn="data-fa-i2svg",$l="data-fa-pseudo-element",v1="data-fa-pseudo-element-pending",rc="data-prefix",ic="data-icon",Jf="fontawesome-i2svg",g1="async",y1=["HTML","HEAD","STYLE","SCRIPT"],pm=function(){try{return!0}catch{return!1}}(),V="classic",ee="sharp",ac=[V,ee];function Ai(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var vi=Ai((fa={},le(fa,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(fa,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),fa)),gi=Ai((da={},le(da,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(da,ee,{solid:"fass",regular:"fasr"}),da)),yi=Ai((ha={},le(ha,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(ha,ee,{fass:"fa-solid",fasr:"fa-regular"}),ha)),w1=Ai((pa={},le(pa,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(pa,ee,{"fa-solid":"fass","fa-regular":"fasr"}),pa)),_1=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,mm="fa-layers-text",k1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,S1=Ai((ma={},le(ma,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(ma,ee,{900:"fass",400:"fasr"}),ma)),vm=[1,2,3,4,5,6,7,8,9,10],E1=vm.concat([11,12,13,14,15,16,17,18,19,20]),I1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wi=new Set;Object.keys(gi[V]).map(wi.add.bind(wi));Object.keys(gi[ee]).map(wi.add.bind(wi));var b1=[].concat(ac,Ri(wi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yn.GROUP,yn.SWAP_OPACITY,yn.PRIMARY,yn.SECONDARY]).concat(vm.map(function(e){return"".concat(e,"x")})).concat(E1.map(function(e){return"w-".concat(e)})),Gr=Zt.FontAwesomeConfig||{};function C1(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function x1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var T1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];T1.forEach(function(e){var t=tc(e,2),n=t[0],r=t[1],i=x1(C1(n));i!=null&&(Gr[r]=i)})}var gm={styleDefault:"solid",familyDefault:"classic",cssPrefix:dm,replacementClass:hm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gr.familyPrefix&&(Gr.cssPrefix=Gr.familyPrefix);var mr=x(x({},gm),Gr);mr.autoReplaceSvg||(mr.observeMutations=!1);var O={};Object.keys(gm).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){mr[e]=n,Qr.forEach(function(r){return r(O)})},get:function(){return mr[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){mr.cssPrefix=t,Qr.forEach(function(n){return n(O)})},get:function(){return mr.cssPrefix}});Zt.FontAwesomeConfig=O;var Qr=[];function P1(e){return Qr.push(e),function(){Qr.splice(Qr.indexOf(e),1)}}var Ct=jl,nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N1(e){if(!(!e||!Et)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var O1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _i(){for(var e=12,t="";e-- >0;)t+=O1[Math.random()*62|0];return t}function Sr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function oc(e){return e.classList?Sr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ym(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ym(e[n]),'" ')},"").trim()}function Ho(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function sc(e){return e.size!==nt.size||e.x!==nt.x||e.y!==nt.y||e.rotate!==nt.rotate||e.flipX||e.flipY}function A1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function L1(e){var t=e.transform,n=e.width,r=n===void 0?jl:n,i=e.height,a=i===void 0?jl:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&fm?l+="translate(".concat(t.x/Ct-r/2,"em, ").concat(t.y/Ct-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ct,"em), calc(-50% + ").concat(t.y/Ct,"em)) "):l+="translate(".concat(t.x/Ct,"em, ").concat(t.y/Ct,"em) "),l+="scale(".concat(t.size/Ct*(t.flipX?-1:1),", ").concat(t.size/Ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var D1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wm(){var e=dm,t=hm,n=O.cssPrefix,r=O.replacementClass,i=D1;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var qf=!1;function xs(){O.autoAddCss&&!qf&&(N1(wm()),qf=!0)}var M1={mixout:function(){return{dom:{css:wm,insertCss:xs}}},hooks:function(){return{beforeDOMElementCreation:function(){xs()},beforeI2svg:function(){xs()}}}},wt=Zt||{};wt[yt]||(wt[yt]={});wt[yt].styles||(wt[yt].styles={});wt[yt].hooks||(wt[yt].hooks={});wt[yt].shims||(wt[yt].shims=[]);var Ke=wt[yt],_m=[],U1=function e(){K.removeEventListener("DOMContentLoaded",e),po=1,_m.map(function(t){return t()})},po=!1;Et&&(po=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),po||K.addEventListener("DOMContentLoaded",U1));function z1(e){Et&&(po?setTimeout(e,0):_m.push(e))}function Li(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?ym(e):"<".concat(t," ").concat(R1(r),">").concat(a.map(Li).join(""),"</").concat(t,">")}function Zf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var F1=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Ts=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?F1(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function j1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Bl(e){var t=j1(e);return t.length===1?t[0].toString(16):null}function $1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ed(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=ed(t);typeof Ke.hooks.addPack=="function"&&!i?Ke.hooks.addPack(e,ed(t)):Ke.styles[e]=x(x({},Ke.styles[e]||{}),a),e==="fas"&&Wl("fa",t)}var va,ga,ya,Gn=Ke.styles,B1=Ke.shims,W1=(va={},le(va,V,Object.values(yi[V])),le(va,ee,Object.values(yi[ee])),va),lc=null,km={},Sm={},Em={},Im={},bm={},H1=(ga={},le(ga,V,Object.keys(vi[V])),le(ga,ee,Object.keys(vi[ee])),ga);function V1(e){return~b1.indexOf(e)}function Y1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!V1(i)?i:null}var Cm=function(){var t=function(a){return Ts(Gn,function(o,s,l){return o[l]=Ts(s,a,{}),o},{})};km=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Sm=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),bm=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Gn||O.autoFetchSvg,r=Ts(B1,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Em=r.names,Im=r.unicodes,lc=Vo(O.styleDefault,{family:O.familyDefault})};P1(function(e){lc=Vo(e.styleDefault,{family:O.familyDefault})});Cm();function uc(e,t){return(km[e]||{})[t]}function K1(e,t){return(Sm[e]||{})[t]}function wn(e,t){return(bm[e]||{})[t]}function xm(e){return Em[e]||{prefix:null,iconName:null}}function G1(e){var t=Im[e],n=uc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function en(){return lc}var cc=function(){return{prefix:null,iconName:null,rest:[]}};function Vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,i=vi[r][e],a=gi[r][e]||gi[r][i],o=e in Ke.styles?e:null;return a||o||null}var td=(ya={},le(ya,V,Object.keys(yi[V])),le(ya,ee,Object.keys(yi[ee])),ya);function Yo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,V,"".concat(O.cssPrefix,"-").concat(V)),le(t,ee,"".concat(O.cssPrefix,"-").concat(ee)),t),o=null,s=V;(e.includes(a[V])||e.some(function(u){return td[V].includes(u)}))&&(s=V),(e.includes(a[ee])||e.some(function(u){return td[ee].includes(u)}))&&(s=ee);var l=e.reduce(function(u,c){var d=Y1(O.cssPrefix,c);if(Gn[c]?(c=W1[s].includes(c)?w1[s][c]:c,o=c,u.prefix=c):H1[s].indexOf(c)>-1?(o=c,u.prefix=Vo(c,{family:s})):d?u.iconName=d:c!==O.replacementClass&&c!==a[V]&&c!==a[ee]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?xm(u.iconName):{},v=wn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Gn.far&&Gn.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},cc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(Gn.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=wn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=en()||"fas"),l}var Q1=function(){function e(){s1(this,e),this.definitions={}}return l1(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),o[s]),Wl(s,o[s]);var l=yi[V][s];l&&Wl(l,o[s]),Cm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),nd=[],Qn={},ir={},X1=Object.keys(ir);function J1(e,t){var n=t.mixoutsTo;return nd=e,Qn={},Object.keys(ir).forEach(function(r){X1.indexOf(r)===-1&&delete ir[r]}),nd.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ho(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Qn[o]||(Qn[o]=[]),Qn[o].push(a[o])})}r.provides&&r.provides(ir)}),n}function Hl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Qn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Qn[e]||[];i.forEach(function(a){a.apply(null,n)})}function _t(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ir[e]?ir[e].apply(null,t):void 0}function Vl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||en();if(t)return t=wn(n,t)||t,Zf(Tm.definitions,n,t)||Zf(Ke.styles,n,t)}var Tm=new Q1,q1=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,Pn("noAuto")},Z1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(Pn("beforeI2svg",t),_t("pseudoElements2svg",t),_t("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,z1(function(){tw({autoReplaceSvgRoot:n}),Pn("watch",t)})}},ew={icon:function(t){if(t===null)return null;if(ho(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:wn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Vo(t[0]);return{prefix:r,iconName:wn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(_1))){var i=Yo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||en(),iconName:wn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=en();return{prefix:a,iconName:wn(a,t)||t}}}},Me={noAuto:q1,config:O,dom:Z1,parse:ew,library:Tm,findIconDefinition:Vl,toHtml:Li},tw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(Ke.styles).length>0||O.autoFetchSvg)&&Et&&O.autoReplaceSvg&&Me.dom.i2svg({node:r})};function Ko(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Li(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Et){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nw(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(sc(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Ho(x(x({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function rw(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function fc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,v=p===void 0?!1:p,w=r.found?r:n,g=w.width,E=w.height,h=i==="fak",f=[O.replacementClass,a?"".concat(O.cssPrefix,"-").concat(a):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),m={children:[],attributes:x(x({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(E)})},y=h&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/E*16*.0625,"em")}:{};v&&(m.attributes[Tn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||_i())},children:[l]}),delete m.attributes.title);var S=x(x({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:x(x({},y),d.styles)}),b=r.found&&n.found?_t("generateAbstractMask",S)||{children:[],attributes:{}}:_t("generateAbstractIcon",S)||{children:[],attributes:{}},C=b.children,N=b.attributes;return S.children=C,S.attributes=N,s?rw(S):nw(S)}function rd(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=x(x(x({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Tn]="");var c=x({},o.styles);sc(i)&&(c.transform=L1({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ho(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function iw(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ho(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ps=Ke.styles;function Yl(e){var t=e[0],n=e[1],r=e.slice(4),i=tc(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(yn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(yn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var aw={found:!1,width:512,height:512};function ow(e,t){!pm&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Kl(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=en()),new Promise(function(r,i){if(_t("missingIconAbstract"),n==="fa"){var a=xm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ps[t]&&Ps[t][e]){var o=Ps[t][e];return r(Yl(o))}ow(e,t),r(x(x({},aw),{},{icon:O.showMissingIcons&&e?_t("missingIconAbstract")||{}:{}}))})}var id=function(){},Gl=O.measurePerformance&&ca&&ca.mark&&ca.measure?ca:{mark:id,measure:id},Mr='FA "6.3.0"',sw=function(t){return Gl.mark("".concat(Mr," ").concat(t," begins")),function(){return Pm(t)}},Pm=function(t){Gl.mark("".concat(Mr," ").concat(t," ends")),Gl.measure("".concat(Mr," ").concat(t),"".concat(Mr," ").concat(t," begins"),"".concat(Mr," ").concat(t," ends"))},dc={begin:sw,end:Pm},La=function(){};function ad(e){var t=e.getAttribute?e.getAttribute(Tn):null;return typeof t=="string"}function lw(e){var t=e.getAttribute?e.getAttribute(rc):null,n=e.getAttribute?e.getAttribute(ic):null;return t&&n}function uw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function cw(){if(O.autoReplaceSvg===!0)return Da.replace;var e=Da[O.autoReplaceSvg];return e||Da.replace}function fw(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function dw(e){return K.createElement(e)}function Nm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fw:dw:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Nm(o,{ceFn:r}))}),i}function hw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Da={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Nm(i),n)}),n.getAttribute(Tn)===null&&O.keepOriginalSource){var r=K.createComment(hw(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~oc(n).indexOf(O.replacementClass))return Da.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===O.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Li(s)}).join(`
`);n.setAttribute(Tn,""),n.innerHTML=o}};function od(e){e()}function Om(e,t){var n=typeof t=="function"?t:La;if(e.length===0)n();else{var r=od;O.mutateApproach===g1&&(r=Zt.requestAnimationFrame||od),r(function(){var i=cw(),a=dc.begin("mutate");e.map(i),a(),n()})}}var hc=!1;function Rm(){hc=!0}function Ql(){hc=!1}var mo=null;function sd(e){if(Xf&&O.observeMutations){var t=e.treeCallback,n=t===void 0?La:t,r=e.nodeCallback,i=r===void 0?La:r,a=e.pseudoElementsCallback,o=a===void 0?La:a,s=e.observeMutationsRoot,l=s===void 0?K:s;mo=new Xf(function(u){if(!hc){var c=en();Sr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ad(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ad(d.target)&&~I1.indexOf(d.attributeName))if(d.attributeName==="class"&&lw(d.target)){var p=Yo(oc(d.target)),v=p.prefix,w=p.iconName;d.target.setAttribute(rc,v||c),w&&d.target.setAttribute(ic,w)}else uw(d.target)&&i(d.target)})}}),Et&&mo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pw(){mo&&mo.disconnect()}function mw(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function vw(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Yo(oc(e));return i.prefix||(i.prefix=en()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=K1(i.prefix,e.innerText)||uc(i.prefix,Bl(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function gw(e){var t=Sr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||_i()):(t["aria-hidden"]="true",t.focusable="false")),t}function yw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vw(e),r=n.iconName,i=n.prefix,a=n.rest,o=gw(e),s=Hl("parseNodeAttributes",{},e),l=t.styleParser?mw(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var ww=Ke.styles;function Am(e){var t=O.autoReplaceSvg==="nest"?ld(e,{styleParser:!1}):ld(e);return~t.extra.classes.indexOf(mm)?_t("generateLayersText",e,t):_t("generateSvgReplacementMutation",e,t)}var tn=new Set;ac.map(function(e){tn.add("fa-".concat(e))});Object.keys(vi[V]).map(tn.add.bind(tn));Object.keys(vi[ee]).map(tn.add.bind(tn));tn=Ri(tn);function ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();var n=K.documentElement.classList,r=function(d){return n.add("".concat(Jf,"-").concat(d))},i=function(d){return n.remove("".concat(Jf,"-").concat(d))},a=O.autoFetchSvg?tn:ac.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ww));a.includes("fa")||a.push("fa");var o=[".".concat(mm,":not([").concat(Tn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Tn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Sr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=dc.begin("onTree"),u=s.reduce(function(c,d){try{var p=Am(d);p&&c.push(p)}catch(v){pm||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){Om(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function _w(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Am(e).then(function(n){n&&Om([n],t)})}function kw(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Vl(i||{})),e(r,x(x({},n),{},{mask:i}))}}var Sw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?nt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,v=n.titleId,w=v===void 0?null:v,g=n.classes,E=g===void 0?[]:g,h=n.attributes,f=h===void 0?{}:h,m=n.styles,y=m===void 0?{}:m;if(t){var S=t.prefix,b=t.iconName,C=t.icon;return Ko(x({type:"icon"},t),function(){return Pn("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(p?f["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(w||_i()):(f["aria-hidden"]="true",f.focusable="false")),fc({icons:{main:Yl(C),mask:l?Yl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:b,transform:x(x({},nt),i),symbol:o,title:p,maskId:c,titleId:w,extra:{attributes:f,styles:y,classes:E}})})}},Ew={mixout:function(){return{icon:kw(Sw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ud,n.nodeCallback=_w,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return ud(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(v,w){Promise.all([Kl(i,s),c.iconName?Kl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var E=tc(g,2),h=E[0],f=E[1];v([n,fc({icons:{main:h,mask:f},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Ho(s);l.length>0&&(i.style=l);var u;return sc(o)&&(u=_t("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Iw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ko({type:"layer"},function(){Pn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(Ri(a)).join(" ")},children:o}]})}}}},bw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ko({type:"counter",content:n},function(){return Pn("beforeDOMElementCreation",{content:n,params:r}),iw({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(Ri(s))}})})}}}},Cw={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?nt:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return Ko({type:"text",content:n},function(){return Pn("beforeDOMElementCreation",{content:n,params:r}),rd({content:n,transform:x(x({},nt),a),title:s,extra:{attributes:d,styles:v,classes:["".concat(O.cssPrefix,"-layers-text")].concat(Ri(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(fm){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,rd({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},xw=new RegExp('"',"ug"),cd=[1105920,1112319];function Tw(e){var t=e.replace(xw,""),n=$1(t,0),r=n>=cd[0]&&n<=cd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Bl(i?t[0]:t),isSecondary:r||i}}function fd(e,t){var n="".concat(v1).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Sr(e.children),o=a.filter(function(C){return C.getAttribute($l)===t})[0],s=Zt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(k1),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ee:V,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?gi[p][l[2].toLowerCase()]:S1[p][u],w=Tw(d),g=w.value,E=w.isSecondary,h=l[0].startsWith("FontAwesome"),f=uc(v,g),m=f;if(h){var y=G1(g);y.iconName&&y.prefix&&(f=y.iconName,v=y.prefix)}if(f&&!E&&(!o||o.getAttribute(rc)!==v||o.getAttribute(ic)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var S=yw(),b=S.extra;b.attributes[$l]=t,Kl(f,v).then(function(C){var N=fc(x(x({},S),{},{icons:{main:C,mask:cc()},prefix:v,iconName:m,extra:b,watchable:!0})),z=K.createElement("svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=N.map(function(L){return Li(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Pw(e){return Promise.all([fd(e,"::before"),fd(e,"::after")])}function Nw(e){return e.parentNode!==document.head&&!~y1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($l)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function dd(e){if(Et)return new Promise(function(t,n){var r=Sr(e.querySelectorAll("*")).filter(Nw).map(Pw),i=dc.begin("searchPseudoElements");Rm(),Promise.all(r).then(function(){i(),Ql(),t()}).catch(function(){i(),Ql(),n()})})}var Ow={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=dd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;O.searchPseudoElements&&dd(i)}}},hd=!1,Rw={mixout:function(){return{dom:{unwatch:function(){Rm(),hd=!0}}}},hooks:function(){return{bootstrap:function(){sd(Hl("mutationObserverCallbacks",{}))},noAuto:function(){pw()},watch:function(n){var r=n.observeMutationsRoot;hd?Ql():sd(Hl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},pd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Aw={mixout:function(){return{parse:{transform:function(n){return pd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=pd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:x({},v.outer),children:[{tag:"g",attributes:x({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),v.path)}]}]}}}},Ns={x:0,y:0,width:"100%",height:"100%"};function md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lw(e){return e.tag==="g"?e.children:[e]}var Dw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Yo(i.split(" ").map(function(o){return o.trim()})):cc();return a.prefix||(a.prefix=en()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,p=o.icon,v=A1({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:x(x({},Ns),{},{fill:"white"})},g=c.children?{children:c.children.map(md)}:{},E={tag:"g",attributes:x({},v.inner),children:[md(x({tag:c.tag,attributes:x(x({},c.attributes),v.path)},g))]},h={tag:"g",attributes:x({},v.outer),children:[E]},f="mask-".concat(s||_i()),m="clip-".concat(s||_i()),y={tag:"mask",attributes:x(x({},Ns),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,h]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Lw(p)},y]};return r.push(S,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(f,")")},Ns)}),{children:r,attributes:i}}}},Mw={provides:function(t){var n=!1;Zt.matchMedia&&(n=Zt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Uw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},zw=[M1,Ew,Iw,bw,Cw,Ow,Rw,Aw,Dw,Mw,Uw];J1(zw,{mixoutsTo:Me});Me.noAuto;Me.config;Me.library;Me.dom;var Xl=Me.parse;Me.findIconDefinition;Me.toHtml;var Fw=Me.icon;Me.layer;Me.text;Me.counter;var M={},jw={get exports(){return M},set exports(e){M=e}},$w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Bw=$w,Ww=Bw;function Lm(){}function Dm(){}Dm.resetWarningCache=Lm;var Hw=function(){function e(r,i,a,o,s,l){if(l!==Ww){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dm,resetWarningCache:Lm};return n.PropTypes=n,n};jw.exports=Hw();function vd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ft(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vd(Object(n),!0).forEach(function(r){Xn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vo(e){return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vo(e)}function Xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Yw(e,t){if(e==null)return{};var n=Vw(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jl(e){return Kw(e)||Gw(e)||Qw(e)||Xw()}function Kw(e){if(Array.isArray(e))return ql(e)}function Gw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qw(e,t){if(e){if(typeof e=="string")return ql(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ql(e,t)}}function ql(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jw(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,v=e.inverse,w=e.border,g=e.listItem,E=e.flip,h=e.size,f=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":w,"fa-li":g,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Xn(t,"fa-".concat(h),typeof h<"u"&&h!==null),Xn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Xn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Xn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}function qw(e){return e=e-0,e===e}function Mm(e){return qw(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Zw=["style"];function e_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function t_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Mm(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[e_(i)]=a:t[i]=a,t},{})}function Um(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Um(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=t_(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Mm(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Yw(n,Zw);return i.attrs.style=Ft(Ft({},i.attrs.style),o),e.apply(void 0,[t.tag,Ft(Ft({},i.attrs),s)].concat(Jl(r)))}var zm=!1;try{zm=!0}catch{}function n_(){if(!zm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gd(e){if(e&&vo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xl.icon)return Xl.icon(e);if(e===null)return null;if(e&&vo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Os(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Xn({},e,t):{}}var nn=Io.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=gd(n),c=Os("classes",[].concat(Jl(Jw(e)),Jl(a.split(" ")))),d=Os("transform",typeof e.transform=="string"?Xl.transform(e.transform):e.transform),p=Os("mask",gd(r)),v=Fw(u,Ft(Ft(Ft(Ft({},c),d),p),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!v)return n_("Could not find icon",u),null;var w=v.abstract,g={ref:t};return Object.keys(e).forEach(function(E){nn.defaultProps.hasOwnProperty(E)||(g[E]=e[E])}),r_(w[0],g)});nn.displayName="FontAwesomeIcon";nn.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};nn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var r_=Um.bind(null,Io.createElement),i_={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},a_={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},Fm={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]};const jm="/spotify-form/assets/icons8-google-27-b244f71f.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},o_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,d=(a&3)<<4|s>>4;let p=(s&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[c],n[d],n[p],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($m(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||d==null)throw new s_;const p=a<<2|s>>4;if(r.push(p),u!==64){const v=s<<4&240|u>>2;if(r.push(v),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l_=function(e){const t=$m(e);return Bm.encodeByteArray(t,!0)},Wm=function(e){return l_(e).replace(/\./g,"")},Hm=function(e){try{return Bm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=()=>u_().__FIREBASE_DEFAULTS__,f_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},d_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hm(e[1]);return t&&JSON.parse(t)},pc=()=>{try{return c_()||f_()||d_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},h_=e=>{var t,n;return(n=(t=pc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},p_=()=>{var e;return(e=pc())===null||e===void 0?void 0:e.config},Vm=e=>{var t;return(t=pc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function g_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function y_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w_(){const e=we();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function __(){try{return typeof indexedDB=="object"}catch{return!1}}function k_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="FirebaseError";class sn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=S_,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?E_(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new sn(i,s,r)}}function E_(e,t){return e.replace(I_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const I_=/\{\$([^}]+)}/g;function b_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function go(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(yd(a)&&yd(o)){if(!go(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ur(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function zr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function C_(e,t){const n=new x_(e,t);return n.subscribe.bind(n)}class x_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Rs),i.error===void 0&&(i.error=Rs),i.complete===void 0&&(i.complete=Rs);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return e&&e._delegate?e._delegate:e}class vr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new m_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(O_(t))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pn){return this.instances.has(t)}getOptions(t=pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:N_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=pn){return this.component?this.component.multipleInstances?t:pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N_(e){return e===pn?void 0:e}function O_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new P_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const A_={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},L_=B.INFO,D_={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},M_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=D_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ym{constructor(t){this.name=t,this._logLevel=L_,this._logHandler=M_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?A_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const U_=(e,t)=>t.some(n=>e instanceof n);let wd,_d;function z_(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F_(){return _d||(_d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Km=new WeakMap,Zl=new WeakMap,Gm=new WeakMap,As=new WeakMap,mc=new WeakMap;function j_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Qt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Km.set(n,e)}).catch(()=>{}),mc.set(t,e),t}function $_(e){if(Zl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Zl.set(e,t)}let eu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Zl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Gm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function B_(e){eu=e(eu)}function W_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ls(this),t,...n);return Gm.set(r,t.sort?t.sort():[t]),Qt(r)}:F_().includes(e)?function(...t){return e.apply(Ls(this),t),Qt(Km.get(this))}:function(...t){return Qt(e.apply(Ls(this),t))}}function H_(e){return typeof e=="function"?W_(e):(e instanceof IDBTransaction&&$_(e),U_(e,z_())?new Proxy(e,eu):e)}function Qt(e){if(e instanceof IDBRequest)return j_(e);if(As.has(e))return As.get(e);const t=H_(e);return t!==e&&(As.set(e,t),mc.set(t,e)),t}const Ls=e=>mc.get(e);function V_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Qt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qt(o.result),l.oldVersion,l.newVersion,Qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const Y_=["get","getKey","getAll","getAllKeys","count"],K_=["put","add","delete","clear"],Ds=new Map;function kd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=K_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Y_.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Ds.set(t,a),a}B_(e=>({...e,get:(t,n,r)=>kd(t,n)||e.get(t,n,r),has:(t,n)=>!!kd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Q_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Q_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const tu="@firebase/app",Sd="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Ym("@firebase/app"),X_="@firebase/app-compat",J_="@firebase/analytics-compat",q_="@firebase/analytics",Z_="@firebase/app-check-compat",ek="@firebase/app-check",tk="@firebase/auth",nk="@firebase/auth-compat",rk="@firebase/database",ik="@firebase/database-compat",ak="@firebase/functions",ok="@firebase/functions-compat",sk="@firebase/installations",lk="@firebase/installations-compat",uk="@firebase/messaging",ck="@firebase/messaging-compat",fk="@firebase/performance",dk="@firebase/performance-compat",hk="@firebase/remote-config",pk="@firebase/remote-config-compat",mk="@firebase/storage",vk="@firebase/storage-compat",gk="@firebase/firestore",yk="@firebase/firestore-compat",wk="firebase",_k="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="[DEFAULT]",kk={[tu]:"fire-core",[X_]:"fire-core-compat",[q_]:"fire-analytics",[J_]:"fire-analytics-compat",[ek]:"fire-app-check",[Z_]:"fire-app-check-compat",[tk]:"fire-auth",[nk]:"fire-auth-compat",[rk]:"fire-rtdb",[ik]:"fire-rtdb-compat",[ak]:"fire-fn",[ok]:"fire-fn-compat",[sk]:"fire-iid",[lk]:"fire-iid-compat",[uk]:"fire-fcm",[ck]:"fire-fcm-compat",[fk]:"fire-perf",[dk]:"fire-perf-compat",[hk]:"fire-rc",[pk]:"fire-rc-compat",[mk]:"fire-gcs",[vk]:"fire-gcs-compat",[gk]:"fire-fst",[yk]:"fire-fst-compat","fire-js":"fire-js",[wk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map,ru=new Map;function Sk(e,t){try{e.container.addComponent(t)}catch(n){Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ki(e){const t=e.name;if(ru.has(t))return Nn.debug(`There were multiple attempts to register component ${t}.`),!1;ru.set(t,e);for(const n of yo.values())Sk(n,e);return!0}function Qm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xt=new Di("app","Firebase",Ek);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=_k;function vc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:nu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Xt.create("bad-app-name",{appName:String(i)});if(n||(n=p_()),!n)throw Xt.create("no-options");const a=yo.get(i);if(a){if(go(n,a.options)&&go(r,a.config))return a;throw Xt.create("duplicate-app",{appName:i})}const o=new R_(i);for(const l of ru.values())o.addComponent(l);const s=new Ik(n,r,o);return yo.set(i,s),s}function bk(e=nu){const t=yo.get(e);if(!t&&e===nu)return vc();if(!t)throw Xt.create("no-app",{appName:e});return t}function ar(e,t,n){var r;let i=(r=kk[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nn.warn(s.join(" "));return}ki(new vr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="firebase-heartbeat-database",xk=1,Si="firebase-heartbeat-store";let Ms=null;function Xm(){return Ms||(Ms=V_(Ck,xk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Si)}}}).catch(e=>{throw Xt.create("idb-open",{originalErrorMessage:e.message})})),Ms}async function Tk(e){try{return(await Xm()).transaction(Si).objectStore(Si).get(Jm(e))}catch(t){if(t instanceof sn)Nn.warn(t.message);else{const n=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nn.warn(n.message)}}}async function Ed(e,t){try{const r=(await Xm()).transaction(Si,"readwrite");return await r.objectStore(Si).put(t,Jm(e)),r.done}catch(n){if(n instanceof sn)Nn.warn(n.message);else{const r=Xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Jm(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=1024,Nk=30*24*60*60*1e3;class Ok{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ak(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Id();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Nk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Id(),{heartbeatsToSend:n,unsentEntries:r}=Rk(this._heartbeatsCache.heartbeats),i=Wm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Id(){return new Date().toISOString().substring(0,10)}function Rk(e,t=Pk){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),bd(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ak{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return __()?k_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bd(e){return Wm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(e){ki(new vr("platform-logger",t=>new G_(t),"PRIVATE")),ki(new vr("heartbeat",t=>new Ok(t),"PRIVATE")),ar(tu,Sd,e),ar(tu,Sd,"esm2017"),ar("fire-js","")}Lk("");function gc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function qm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dk=qm,Zm=new Di("auth","Firebase",qm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Ym("@firebase/auth");function Ma(e,...t){Cd.logLevel<=B.ERROR&&Cd.error(`Auth (${Go}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e,...t){throw yc(e,...t)}function at(e,...t){return yc(e,...t)}function Mk(e,t,n){const r=Object.assign(Object.assign({},Dk()),{[t]:n});return new Di("auth","Firebase",r).create(t,{appName:e.name})}function yc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Zm.create(e,...t)}function R(e,t,...n){if(!e)throw yc(t,...n)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ma(t),new Error(t)}function kt(e,t){e||ft(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new Map;function dt(e){kt(e instanceof Function,"Expected a class definition");let t=xd.get(e);return t?(kt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xd.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(e,t){const n=Qm(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(go(a,t??{}))return i;Je(i,"already-initialized")}return n.initialize({options:t})}function zk(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Fk(){return Td()==="http:"||Td()==="https:"}function Td(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fk()||g_()||"connection"in navigator)?navigator.onLine:!0}function $k(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n){this.shortDelay=t,this.longDelay=n,kt(n>t,"Short delay should be less than long delay!"),this.isMobile=v_()||y_()}get(){return jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(e,t){kt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=new Ui(3e4,6e4);function zi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Fi(e,t,n,r,i={}){return tv(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Mi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ev.fetch()(nv(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function tv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bk),t);try{const i=new Hk(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw wa(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wa(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw wa(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mk(e,c,u);Je(e,c)}}catch(i){if(i instanceof sn)throw i;Je(e,"internal-error",{message:String(i)})}}async function ji(e,t,n,r,i={}){const a=await Fi(e,t,n,r,i);return"mfaPendingCredential"in a&&Je(e,"multi-factor-auth-required",{_serverResponse:a}),a}function nv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?wc(e.config,i):`${e.config.apiScheme}://${i}`}class Hk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Wk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=at(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(e,t){return Fi(e,"POST","/v1/accounts:delete",t)}async function Yk(e,t){return Fi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Kk(e,t=!1){const n=It(e),r=await n.getIdToken(t),i=_c(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Xr(Us(i.auth_time)),issuedAtTime:Xr(Us(i.iat)),expirationTime:Xr(Us(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Us(e){return Number(e)*1e3}function _c(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hm(n);return i?JSON.parse(i):(Ma("Failed to decode base64 JWT payload"),null)}catch(i){return Ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gk(e){const t=_c(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof sn&&Qk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ei(e,Yk(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?Zk(a.providerUserInfo):[],s=qk(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new rv(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Jk(e){const t=It(e);await wo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function qk(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Zk(e){return e.map(t=>{var{providerId:n}=t,r=gc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(e,t){const n=await tv(e,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=nv(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",ev.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Gk(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await eS(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new Ii;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(R(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Sn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=gc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new rv(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Kk(this,t)}reload(){return Jk(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Sn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ei(this,Vk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(s=n.tenantId)!==null&&s!==void 0?s:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:b,stsTokenManager:C}=n;R(m&&C,t,"internal-error");const N=Ii.fromJSON(this.name,C);R(typeof m=="string",t,"internal-error"),xt(d,t.name),xt(p,t.name),R(typeof y=="boolean",t,"internal-error"),R(typeof S=="boolean",t,"internal-error"),xt(v,t.name),xt(w,t.name),xt(g,t.name),xt(E,t.name),xt(h,t.name),xt(f,t.name);const z=new Sn({uid:m,auth:t,email:p,emailVerified:y,displayName:d,isAnonymous:S,photoURL:w,phoneNumber:v,tenantId:g,stsTokenManager:N,createdAt:h,lastLoginAt:f});return b&&Array.isArray(b)&&(z.providerData=b.map(L=>Object.assign({},L))),E&&(z._redirectEventId=E),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ii;i.updateFromServerResponse(n);const a=new Sn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await wo(a),a}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}iv.type="NONE";const Pd=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e,t,n){return`firebase:${e}:${t}:${n}`}class or{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ua(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ua("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Sn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new or(dt(Pd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||dt(Pd);const o=Ua(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Sn._fromJSON(t,c);u!==a&&(s=d),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new or(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new or(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(av(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uv(t))return"Blackberry";if(cv(t))return"Webos";if(kc(t))return"Safari";if((t.includes("chrome/")||ov(t))&&!t.includes("edge/"))return"Chrome";if(lv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function av(e=we()){return/firefox\//i.test(e)}function kc(e=we()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ov(e=we()){return/crios\//i.test(e)}function sv(e=we()){return/iemobile/i.test(e)}function lv(e=we()){return/android/i.test(e)}function uv(e=we()){return/blackberry/i.test(e)}function cv(e=we()){return/webos/i.test(e)}function Qo(e=we()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tS(e=we()){var t;return Qo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function nS(){return w_()&&document.documentMode===10}function fv(e=we()){return Qo(e)||lv(e)||cv(e)||uv(e)||/windows phone/i.test(e)||sv(e)}function rS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(e,t=[]){let n;switch(e){case"Browser":n=Nd(we());break;case"Worker":n=`${Nd(we())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Go}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new iS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await or.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await wo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$k()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?It(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Di("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function $i(e){return It(e)}class Od{constructor(t){this.auth=t,this.observer=null,this.addObserver=C_(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function oS(e,t,n){const r=$i(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=hv(t),{host:o,port:s}=sS(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lS()}function hv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function sS(e){const t=hv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Rd(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:Rd(o)}}}function Rd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function lS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(t){return ft("not implemented")}_linkToIdToken(t,n){return ft("not implemented")}_getReauthenticationResolver(t){return ft("not implemented")}}async function uS(e,t){return Fi(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(e,t){return ji(e,"POST","/v1/accounts:signInWithPassword",zi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(e,t){return ji(e,"POST","/v1/accounts:signInWithEmailLink",zi(e,t))}async function dS(e,t){return ji(e,"POST","/v1/accounts:signInWithEmailLink",zi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Sc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new bi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new bi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return cS(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fS(t,{email:this._email,oobCode:this._password});default:Je(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return uS(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dS(t,{idToken:n,email:this._email,oobCode:this._password});default:Je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t){return ji(e,"POST","/v1/accounts:signInWithIdp",zi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="http://localhost";class On extends Sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new On(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=gc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new On(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return sr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,sr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,sr(t,n)}buildRequest(){const t={requestUri:hS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Mi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mS(e){const t=Ur(zr(e)).link,n=t?Ur(zr(t)).deep_link_id:null,r=Ur(zr(e)).deep_link_id;return(r?Ur(zr(r)).link:null)||r||n||t||e}class Ec{constructor(t){var n,r,i,a,o,s;const l=Ur(zr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=pS((i=l.mode)!==null&&i!==void 0?i:null);R(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=mS(t);try{return new Ec(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.providerId=Er.PROVIDER_ID}static credential(t,n){return bi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ec.parseLink(n);return R(r,"argument-error"),bi._fromEmailAndCode(t,r.code,r.tenantId)}}Er.PROVIDER_ID="password";Er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends pv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Bi{constructor(){super("facebook.com")}static credential(t){return On._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return On._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Bi{constructor(){super("github.com")}static credential(t){return On._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lt.credential(t.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Bi{constructor(){super("twitter.com")}static credential(t,n){return On._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(e,t){return ji(e,"POST","/v1/accounts:signUp",zi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await Sn._fromIdTokenResponse(t,r,i),o=Ad(r);return new Rn({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Ad(r);return new Rn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Ad(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends sn{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new _o(t,n,r,i)}}function mv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(e,a,t,r):a})}async function gS(e,t,n=!1){const r=await Ei(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await Ei(e,mv(r,i,t,e),n);R(a.idToken,r,"internal-error");const o=_c(a.idToken);R(o,r,"internal-error");const{sub:s}=o;return R(e.uid===s,r,"user-mismatch"),Rn._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(e,t,n=!1){const r="signIn",i=await mv(e,r,t),a=await Rn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function wS(e,t){return vv($i(e),t)}async function _S(e,t,n){const r=$i(e),i=await vS(r,{returnSecureToken:!0,email:t,password:n}),a=await Rn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(a.user),a}function kS(e,t,n){return wS(It(e),Er.credential(t,n))}function SS(e,t,n,r){return It(e).onIdTokenChanged(t,n,r)}function ES(e,t,n){return It(e).beforeAuthStateChanged(t,n)}function IS(e,t,n,r){return It(e).onAuthStateChanged(t,n,r)}function bS(e){return It(e).signOut()}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){const e=we();return kc(e)||Qo(e)}const xS=1e3,TS=10;class yv extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CS()&&rS(),this.fallbackToPolling=fv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);nS()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,TS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},xS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yv.type="LOCAL";const PS=yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}wv.type="SESSION";const _v=wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Xo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await NS(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=Ic("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(p.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function RS(e){ot().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function AS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function DS(){return kv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="firebaseLocalStorageDb",MS=1,So="firebaseLocalStorage",Ev="fbase_key";class Wi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(e,t){return e.transaction([So],t?"readwrite":"readonly").objectStore(So)}function US(){const e=indexedDB.deleteDatabase(Sv);return new Wi(e).toPromise()}function au(){const e=indexedDB.open(Sv,MS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(So,{keyPath:Ev})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(So)?t(r):(r.close(),await US(),t(await au()))})})}async function Ld(e,t,n){const r=Jo(e,!0).put({[Ev]:t,value:n});return new Wi(r).toPromise()}async function zS(e,t){const n=Jo(e,!1).get(t),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function Dd(e,t){const n=Jo(e,!0).delete(t);return new Wi(n).toPromise()}const FS=800,jS=3;class Iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await au(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>jS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(DS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await AS(),!this.activeServiceWorker)return;this.sender=new OS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||LS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await au();return await Ld(t,ko,"1"),await Dd(t,ko),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ld(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>zS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Jo(i,!1).getAll();return new Wi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iv.type="LOCAL";const $S=Iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function WS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=at("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",BS().appendChild(r)})}function HS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(e,t){return t?dt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends Sc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return sr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return sr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return sr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function YS(e){return vv(e.auth,new bc(e),e.bypassAuthState)}function KS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),yS(n,new bc(e),e.bypassAuthState)}async function GS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),gS(n,new bc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return YS;case"linkViaPopup":case"linkViaRedirect":return GS;case"reauthViaPopup":case"reauthViaRedirect":return KS;default:Je(this.auth,"internal-error")}}resolve(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new Ui(2e3,1e4);class Jn extends bv{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const t=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,QS.get())};t()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="pendingRedirect",za=new Map;class JS extends bv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=za.get(this.auth._key());if(!t){try{const r=await qS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}za.set(this.auth._key(),t)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qS(e,t){const n=tE(t),r=eE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ZS(e,t){za.set(e._key(),t)}function eE(e){return dt(e._redirectPersistence)}function tE(e){return Ua(XS,e.config.apiKey,e.name)}async function nE(e,t,n=!1){const r=$i(e),i=VS(r,t),o=await new JS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=10*60*1e3;class iE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!aE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Cv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=rE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(t))}saveEventToCache(t){this.cachedEventUids.add(Md(t)),this.lastProcessedEventTime=Date.now()}}function Md(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Cv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function aE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(e,t={}){return Fi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lE=/^https?/;async function uE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await oE(e);for(const n of t)try{if(cE(n))return}catch{}Je(e,"unauthorized-domain")}function cE(e){const t=iu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lE.test(n))return!1;if(sE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=new Ui(3e4,6e4);function Ud(){const e=ot().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function dE(e){return new Promise((t,n)=>{var r,i,a;function o(){Ud(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ud(),n(at(e,"network-request-failed"))},timeout:fE.get()})}if(!((i=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=ot().gapi)===null||a===void 0)&&a.load)o();else{const s=HS("iframefcb");return ot()[s]=()=>{gapi.load?o():n(at(e,"network-request-failed"))},WS(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Fa=null,t})}let Fa=null;function hE(e){return Fa=Fa||dE(e),Fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Ui(5e3,15e3),mE="__/auth/iframe",vE="emulator/auth/iframe",gE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wE(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wc(t,vE):`https://${e.config.authDomain}/${mE}`,r={apiKey:t.apiKey,appName:e.name,v:Go},i=yE.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Mi(r).slice(1)}`}async function _E(e){const t=await hE(e),n=ot().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:wE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gE,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=at(e,"network-request-failed"),s=ot().setTimeout(()=>{a(o)},pE.get());function l(){ot().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SE=500,EE=600,IE="_blank",bE="http://localhost";class zd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CE(e,t,n,r=SE,i=EE){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},kE),{width:r.toString(),height:i.toString(),top:a,left:o}),u=we().toLowerCase();n&&(s=ov(u)?IE:n),av(u)&&(t=t||bE,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[v,w])=>`${p}${v}=${w},`,"");if(tS(u)&&s!=="_self")return xE(t||"",s),new zd(null);const d=window.open(t||"",s,c);R(d,e,"popup-blocked");try{d.focus()}catch{}return new zd(d)}function xE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="__/auth/handler",PE="emulator/auth/handler";function Fd(e,t,n,r,i,a){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Go,eventId:i};if(t instanceof pv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",b_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(a||{}))o[l]=u}if(t instanceof Bi){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${NE(e)}?${Mi(s).slice(1)}`}function NE({config:e}){return e.emulator?wc(e,PE):`https://${e.authDomain}/${TE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="webStorageSupport";class OE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_v,this._completeRedirectFn=nE,this._overrideRedirectResult=ZS}async _openPopup(t,n,r,i){var a;kt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=Fd(t,n,r,iu(),i);return CE(t,o,Ic())}async _openRedirect(t,n,r,i){return await this._originValidation(t),RS(Fd(t,n,r,iu(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(kt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await _E(t),r=new iE(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(zs,{type:zs},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[zs];o!==void 0&&n(!!o),Je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return fv()||kc()||Qo()}}const RE=OE;var jd="@firebase/auth",$d="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DE(e){ki(new vr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:a,authDomain:o}=r.options;return((s,l)=>{R(a&&!a.includes(":"),"invalid-api-key",{appName:s.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:s.name});const u={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dv(e)},c=new aS(s,l,u);return zk(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ki(new vr("auth-internal",t=>{const n=$i(t.getProvider("auth").getImmediate());return(r=>new AE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(jd,$d,LE(e)),ar(jd,$d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=5*60,UE=Vm("authIdTokenMaxAge")||ME;let Bd=null;const zE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UE)return;const i=n==null?void 0:n.token;Bd!==i&&(Bd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FE(e=bk()){const t=Qm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Uk(e,{popupRedirectResolver:RE,persistence:[$S,PS,_v]}),r=Vm("authTokenSyncURL");if(r){const a=zE(r);ES(n,a,()=>a(n.currentUser)),SS(n,o=>a(o))}const i=h_("auth");return i&&oS(n,`http://${i}`),n}DE("Browser");var jE="firebase",$E="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(jE,$E,"app");const xv={apiKey:"AIzaSyCZHuwhnQxfh7cO3cm1uez8GjuCSKsNa8g",authDomain:"spotify-form.firebaseapp.com",projectId:"spotify-form",storageBucket:"spotify-form.appspot.com",messagingSenderId:"517516794669",appId:"1:517516794669:web:061a916b54466d3af711a4"};vc(xv);const _a=FE(vc(xv)),Tv=I.createContext(),Pv=({children:e})=>{const[t,n]=I.useState({}),r=(o,s)=>_S(_a,o,s),i=(o,s)=>kS(_a,o,s),a=()=>bS(_a);return I.useEffect(()=>{const o=IS(_a,s=>{console.log(s),n(s)});return()=>{o()}}),_(Tv.Provider,{value:{createUser:r,user:t,signIn:i,logout:a},children:e})};Pv.propTypes={children:M.node.isRequired};const Cc=()=>I.useContext(Tv),BE=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(!1),[i,a]=I.useState(!1),[o,s]=I.useState(""),[l,u]=I.useState(!1),[c,d]=I.useState(!1),[p,v]=I.useState(""),[w,g]=I.useState(!1),[E,h]=I.useState(!1),[f,m]=I.useState(""),{createUser:y}=Cc(),S=Wo(),b=async q=>{q.preventDefault(),m("");try{await y(e,o),S("/spotify-form/account")}catch(te){m(te.message),alert(te.message)}},C=q=>{const te=q.target.value;t(te),new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm").test(te)||te.length===0?r(!1):r(!0)},N=q=>{const te=q.target.value;te===e||te.length===0?a(!1):a(!0)},z=q=>{const te=q.target.value;s(te),te.length>=6||te.length===0?u(!1):u(!0)},L=()=>{d(!c)},Pe=q=>{v(q)},ln=q=>{const te=q.target.value,qe=parseInt(q.target.value);te.length===0||qe>=1&&qe<=31?g(!1):g(!0)},un=q=>{const te=q.target.value,qe=parseInt(q.target.value);te.length===0||qe>=1920&&qe<=2005?h(!1):h(!0)},Hi=["January","February","March","April","May","June","July","August","September","October","November","December"];return _("div",{children:A("form",{onSubmit:b,className:"registration_form",children:[_("p",{className:"spotify_heading",children:"Spotify"}),_("h1",{className:"font_xxl",children:"Sign up for free to start listening."}),A("div",{className:"buttons",children:[_("a",{href:"#",className:"button_facebook",children:A("div",{children:[_(nn,{icon:Fm,className:"facebook_icon"}),_("p",{className:"font_l",children:"Sign up with Facebook"})]})}),_("a",{href:"#",className:"button_google",children:A("div",{children:[_("img",{src:jm,alt:""}),_("p",{className:"font_l",children:"Sign up with Google"})]})})]}),A("div",{className:"separation",children:[_("hr",{className:"line"}),_("p",{className:"font_l_regular",children:"or"}),_("hr",{className:"line"})]}),_("h2",{className:"font_xl",children:"Sign up with your email address"}),A("section",{className:"user_input",children:[A("div",{className:"input_box",children:[_("label",{htmlFor:"email",className:"font_m",children:"What's your email?"}),_("input",{className:n?"error":"",type:"text",id:"email",placeholder:"Enter your email.",value:e,onInput:C}),_("p",{className:n?"error_message active":"error_message",children:"Incorrect e-mail"})]}),A("div",{className:"input_box",children:[_("label",{htmlFor:"email_confirm",className:"font_m",children:"Confirm your email"}),_("input",{className:i?"error":"",type:"text",id:"email_confirm",placeholder:"Enter your email again.",onInput:N}),_("p",{className:i?"error_message active":"error_message",children:"Please provide same e-mail"})]}),A("div",{className:"input_box",children:[_("label",{htmlFor:"create_password",className:"font_m",children:"Create a password"}),_("input",{className:l?"error":"",type:"password",id:"create_password",placeholder:"Create a password.",onInput:z}),_("p",{className:l?"error_message active":"error_message",children:"Password should be at least 6 characters"})]}),A("div",{className:"input_box",children:[_("label",{htmlFor:"name",className:"font_m",children:"What should we call you?"}),_("input",{type:"text",id:"name",placeholder:"Enter a profile name."})]}),_("p",{className:"font_s",children:"This appears on your profile."})]}),A("section",{className:"birth_container",children:[_("p",{className:"font_m",children:"What's your date of birth?"}),A("div",{className:"birth_content_box",children:[A("div",{className:"birth_month_box",children:[_("label",{htmlFor:"custom_select",className:"font_s",children:"Month"}),A("button",{type:"button",className:p.length!==0?"custom_select filled":"custom_select",onClick:L,children:[p.length===0?_("p",{className:"select_placeholder",children:"Month"}):_("p",{children:p}),_(nn,{icon:i_,className:"arrow_icon"}),_("ul",{className:c?"select_list open":"select_list",children:Hi.map(q=>_("li",{value:q,onClick:()=>Pe(q),children:q},q))})]})]}),A("div",{className:"birth_day_box",children:[_("label",{htmlFor:"day",className:"font_s",children:"Day"}),_("input",{type:"text",id:"day",placeholder:"DD",className:w?"error":"",onInput:ln})]}),A("div",{className:"birth_year_box",children:[_("label",{htmlFor:"year",className:"font_s",children:"Year"}),_("input",{type:"text",placeholder:"YYY",className:E?"error":"",onInput:un})]})]})]}),A("section",{className:"gender_container",children:[_("label",{className:"font_m",children:"What's your gender?"}),A("div",{className:"gender_radio_box",children:[A("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio1"}),_("label",{htmlFor:"radio1",children:"Male"})]}),A("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio2"}),_("label",{htmlFor:"radio2",children:"Female"})]}),A("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio3"}),_("label",{htmlFor:"radio3",children:"Non-binary"})]}),A("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio4"}),_("label",{htmlFor:"radio4",children:"Other"})]}),A("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio5"}),_("label",{htmlFor:"radio5",children:"Prefer not to say"})]})]})]}),A("label",{className:"marketing_checkbox font_s",children:["Share my registration date with Spotify's content providers for marketing purposes.",_("input",{type:"checkbox"}),_("span",{className:"geekmark"})]}),A("section",{className:"terms_privacy_policy_container",children:[A("p",{children:["By clicking on sing-up. you agree to Spotify's ",_("a",{href:"#",children:"Terms and Conditions of Use"}),"."]}),A("p",{children:["To learn more about how. Spotify collects, uses, shares and protects your personal data, please see ",_("a",{href:"#",children:"Spotify's Privacy Policy"}),"."]})]}),_("button",{type:"submit",className:"sign_up_button",children:"Sign up"}),A("p",{className:"redirect_text",children:["Have an account? ",_(om,{to:"/spotify-form/login/",children:"Log in"})]})]})})};const WE=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),[i,a]=I.useState(""),o=Wo(),{signIn:s}=Cc();return _("div",{className:"wrap",children:A("form",{className:"login_form",onSubmit:async d=>{d.preventDefault(),a("");try{await s(e,n),o("/spotify-form/account")}catch(p){a(p.message),alert(p.message)}},children:[_("p",{className:"spotify_heading",children:"Spotify"}),_("h4",{className:"font_l",children:"Please sign in to Spotify to continue."}),A("div",{className:"buttons",children:[_("a",{href:"#",className:"button_facebook",children:A("div",{children:[_(nn,{icon:Fm,className:"facebook_icon"}),_("p",{className:"font_l",children:"Sign up with Facebook"})]})}),_("a",{href:"#",className:"button_apple",children:A("div",{children:[_(nn,{icon:a_,className:"apple_icon"}),_("p",{className:"font_l",children:"Sign up with Apple"})]})}),_("a",{href:"#",className:"button_google",children:A("div",{children:[_("img",{src:jm,alt:""}),_("p",{className:"font_l",children:"Sign up with Google"})]})})]}),A("div",{className:"separation",children:[_("hr",{className:"line"}),_("p",{className:"font_l_regular",children:"or"}),_("hr",{className:"line"})]}),A("section",{className:"user_input",children:[A("div",{className:"input_box",children:[_("label",{htmlFor:"email_login",className:"font_m",children:"Email address or username"}),_("input",{type:"text",id:"email_login",placeholder:"Email address or username",value:e,onInput:d=>{t(d.target.value)}})]}),A("div",{className:"input_box",children:[_("label",{htmlFor:"password_login",className:"font_m",children:"Password"}),_("input",{type:"password",id:"password_login",placeholder:"Password",value:n,onInput:d=>{r(d.target.value)}})]}),_("a",{href:"#",className:"font_s",children:"Do not you remember your password?"})]}),A("section",{className:"sign_in_container",children:[A("label",{className:"remember_me_checkbox font_s",children:["Remember me",_("input",{type:"checkbox"}),_("span",{className:"geekmark"})]}),_("button",{type:"submit",className:"sign_up_button",children:"Sign up"})]}),_("div",{className:"separator"}),_("p",{className:"font_xl",children:"You don't have account yet?"}),_(om,{to:"/spotify-form/",className:"sign_up_button_redirect",children:"Sign up for spotify"}),_("p",{className:"non_visible",children:"nnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn"})]})})},HE=()=>{const e=Wo(),{user:t,logout:n}=Cc(),r=async()=>{try{await n(),e("/spotify-form/"),console.log("You are logged out")}catch(i){console.log(i.message)}};return A("div",{children:[_("h2",{children:"Account"}),A("h4",{children:["User Email: ",t&&t.email]}),_("button",{onClick:r,children:"Logout"})]})},VE=()=>_(tg,{children:_(Pv,{children:A(Z0,{children:[_(Aa,{path:"/spotify-form",element:_(BE,{})}),_(Aa,{path:"/spotify-form/login",element:_(WE,{})}),_(Aa,{path:"/spotify-form/account",element:_(HE,{})})]})})});js.createRoot(document.getElementById("root")).render(_(i1,{children:_(Io.StrictMode,{children:_(VE,{})})}));
