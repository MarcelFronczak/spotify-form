function _v(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function kv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gr={},Sv={get exports(){return Gr},set exports(e){Gr=e}},ho={},C={},Ev={get exports(){return C},set exports(e){C=e}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),Iv=Symbol.for("react.portal"),bv=Symbol.for("react.fragment"),Cv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Ov=Symbol.for("react.suspense"),Rv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),mc=Symbol.iterator;function Lv(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var Od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rd=Object.assign,Ad={};function vr(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Od}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ld(){}Ld.prototype=vr.prototype;function ql(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Od}var Zl=ql.prototype=new Ld;Zl.constructor=ql;Rd(Zl,vr.prototype);Zl.isPureReactComponent=!0;var vc=Array.isArray,Dd=Object.prototype.hasOwnProperty,eu={current:null},Md={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Dd.call(t,r)&&!Md.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Si,type:e,key:a,ref:o,props:i,_owner:eu.current}}function Dv(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function Mv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gc=/\/+/g;function Vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mv(""+e.key):t.toString(36)}function fa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Si:case Iv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Vo(o,0):r,vc(i)?(n="",e!=null&&(n=e.replace(gc,"$&/")+"/"),fa(i,t,n,"",function(u){return u})):i!=null&&(tu(i)&&(i=Dv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",vc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Vo(a,s);o+=fa(a,t,n,l,i)}else if(l=Lv(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Vo(a,s++),o+=fa(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function zi(e,t,n){if(e==null)return e;var r=[],i=0;return fa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Uv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},da={transition:null},zv={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:da,ReactCurrentOwner:eu};F.Children={map:zi,forEach:function(e,t,n){zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zi(e,function(){t++}),t},toArray:function(e){return zi(e,function(t){return t})||[]},only:function(e){if(!tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=vr;F.Fragment=bv;F.Profiler=xv;F.PureComponent=ql;F.StrictMode=Cv;F.Suspense=Ov;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zv;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rd({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=eu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Dd.call(t,l)&&!Md.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Si,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Pv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tv,_context:e},e.Consumer=e};F.createElement=Ud;F.createFactory=function(e){var t=Ud.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Nv,render:e}};F.isValidElement=tu;F.lazy=function(e){return{$$typeof:Av,_payload:{_status:-1,_result:e},_init:Uv}};F.memo=function(e,t){return{$$typeof:Rv,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=da.transition;da.transition={};try{e()}finally{da.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Se.current.useCallback(e,t)};F.useContext=function(e){return Se.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};F.useEffect=function(e,t){return Se.current.useEffect(e,t)};F.useId=function(){return Se.current.useId()};F.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Se.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};F.useRef=function(e){return Se.current.useRef(e)};F.useState=function(e){return Se.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Se.current.useTransition()};F.version="18.2.0";(function(e){e.exports=F})(Ev);const po=kv(C),Os=_v({__proto__:null,default:po},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=C,jv=Symbol.for("react.element"),$v=Symbol.for("react.fragment"),Bv=Object.prototype.hasOwnProperty,Wv=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hv={key:!0,ref:!0,__self:!0,__source:!0};function zd(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Bv.call(t,r)&&!Hv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jv,type:e,key:a,ref:o,props:i,_owner:Wv.current}}ho.Fragment=$v;ho.jsx=zd;ho.jsxs=zd;(function(e){e.exports=ho})(Sv);const Vv=Gr.Fragment,_=Gr.jsx,M=Gr.jsxs;var Rs={},As={},Yv={get exports(){return As},set exports(e){As=e}},Le={},Ls={},Kv={get exports(){return Ls},set exports(e){Ls=e}},Fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,L){var U=P.length;P.push(L);e:for(;0<U;){var te=U-1>>>1,ue=P[te];if(0<i(ue,L))P[te]=L,P[U]=ue,U=te;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],U=P.pop();if(U!==L){P[0]=U;e:for(var te=0,ue=P.length,Mi=ue>>>1;te<Mi;){var un=2*(te+1)-1,Ho=P[un],cn=un+1,Ui=P[cn];if(0>i(Ho,U))cn<ue&&0>i(Ui,Ho)?(P[te]=Ui,P[cn]=U,te=cn):(P[te]=Ho,P[un]=U,te=un);else if(cn<ue&&0>i(Ui,U))P[te]=Ui,P[cn]=U,te=cn;else break e}}return L}function i(P,L){var U=P.sortIndex-L.sortIndex;return U!==0?U:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,p=3,v=!1,w=!1,g=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function y(P){if(g=!1,m(P),!w)if(n(l)!==null)w=!0,Je(S);else{var L=n(u);L!==null&&Wo(y,L.startTime-P)}}function S(P,L){w=!1,g&&(g=!1,h(N),N=-1),v=!0;var U=p;try{for(m(L),d=n(l);d!==null&&(!(d.expirationTime>L)||P&&!Pe());){var te=d.callback;if(typeof te=="function"){d.callback=null,p=d.priorityLevel;var ue=te(d.expirationTime<=L);L=e.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(l)&&r(l),m(L)}else r(l);d=n(l)}if(d!==null)var Mi=!0;else{var un=n(u);un!==null&&Wo(y,un.startTime-L),Mi=!1}return Mi}finally{d=null,p=U,v=!1}}var I=!1,b=null,N=-1,z=5,A=-1;function Pe(){return!(e.unstable_now()-A<z)}function sn(){if(b!==null){var P=e.unstable_now();A=P;var L=!0;try{L=b(!0,P)}finally{L?ln():(I=!1,b=null)}}else I=!1}var ln;if(typeof f=="function")ln=function(){f(sn)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ie=Q.port2;Q.port1.onmessage=sn,ln=function(){ie.postMessage(null)}}else ln=function(){E(sn,0)};function Je(P){b=P,I||(I=!0,ln())}function Wo(P,L){N=E(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Je(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var U=p;p=L;try{return P()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=p;p=P;try{return L()}finally{p=U}},e.unstable_scheduleCallback=function(P,L,U){var te=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,P){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=U+ue,P={id:c++,callback:L,priorityLevel:P,startTime:U,expirationTime:ue,sortIndex:-1},U>te?(P.sortIndex=U,t(u,P),n(l)===null&&P===n(u)&&(g?(h(N),N=-1):g=!0,Wo(y,U-te))):(P.sortIndex=ue,t(l,P),w||v||(w=!0,Je(S))),P},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(P){var L=p;return function(){var U=p;p=L;try{return P.apply(this,arguments)}finally{p=U}}}})(Fd);(function(e){e.exports=Fd})(Kv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=C,Ae=Ls;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,Qr={};function Rn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Qr[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=Object.prototype.hasOwnProperty,Gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yc={},wc={};function Qv(e){return Ds.call(wc,e)?!0:Ds.call(yc,e)?!1:Gv.test(e)?wc[e]=!0:(yc[e]=!0,!1)}function Xv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jv(e,t,n,r){if(t===null||typeof t>"u"||Xv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var nu=/[\-:]([a-z])/g;function ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nu,ru);pe[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nu,ru);pe[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nu,ru);pe[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function iu(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jv(t,n,i,r)&&(n=null),r||i===null?Qv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),Bd=Symbol.for("react.provider"),Wd=Symbol.for("react.context"),ou=Symbol.for("react.forward_ref"),Us=Symbol.for("react.suspense"),zs=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Hd=Symbol.for("react.offscreen"),_c=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Yo;function Or(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Ko=!1;function Go(e,t){if(!e||Ko)return"";Ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Ko=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Or(e):""}function qv(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=Go(e.type,!1),e;case 11:return e=Go(e.type.render,!1),e;case 1:return e=Go(e.type,!0),e;default:return""}}function Fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Dn:return"Portal";case Ms:return"Profiler";case au:return"StrictMode";case Us:return"Suspense";case zs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wd:return(e.displayName||"Context")+".Consumer";case Bd:return(e._context.displayName||"Context")+".Provider";case ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case su:return t=e.displayName||null,t!==null?t:Fs(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return Fs(e(t))}catch{}}return null}function Zv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fs(t);case 8:return t===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function eg(e){var t=Vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=eg(e))}function Yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function js(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kd(e,t){t=t.checked,t!=null&&iu(e,"checked",t,!1)}function $s(e,t){Kd(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||Na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ec(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Rr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function Gd(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ic(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tg=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){tg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function qd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ng=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(ng[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ks=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,qn=null,Zn=null;function bc(e){if(e=bi(e)){if(typeof Gs!="function")throw Error(k(280));var t=e.stateNode;t&&(t=wo(t),Gs(e.stateNode,e.type,t))}}function Zd(e){qn?Zn?Zn.push(e):Zn=[e]:qn=e}function eh(){if(qn){var e=qn,t=Zn;if(Zn=qn=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function th(e,t){return e(t)}function nh(){}var Qo=!1;function rh(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return th(e,t,n)}finally{Qo=!1,(qn!==null||Zn!==null)&&(nh(),eh())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Qs=!1;if(ht)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Qs=!1}function rg(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ur=!1,Oa=null,Ra=!1,Xs=null,ig={onError:function(e){Ur=!0,Oa=e}};function ag(e,t,n,r,i,a,o,s,l){Ur=!1,Oa=null,rg.apply(ig,arguments)}function og(e,t,n,r,i,a,o,s,l){if(ag.apply(this,arguments),Ur){if(Ur){var u=Oa;Ur=!1,Oa=null}else throw Error(k(198));Ra||(Ra=!0,Xs=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ih(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cc(e){if(An(e)!==e)throw Error(k(188))}function sg(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Cc(i),e;if(a===r)return Cc(i),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function ah(e){return e=sg(e),e!==null?oh(e):null}function oh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oh(e);if(t!==null)return t;e=e.sibling}return null}var sh=Ae.unstable_scheduleCallback,xc=Ae.unstable_cancelCallback,lg=Ae.unstable_shouldYield,ug=Ae.unstable_requestPaint,ne=Ae.unstable_now,cg=Ae.unstable_getCurrentPriorityLevel,uu=Ae.unstable_ImmediatePriority,lh=Ae.unstable_UserBlockingPriority,Aa=Ae.unstable_NormalPriority,fg=Ae.unstable_LowPriority,uh=Ae.unstable_IdlePriority,mo=null,nt=null;function dg(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:mg,hg=Math.log,pg=Math.LN2;function mg(e){return e>>>=0,e===0?32:31-(hg(e)/pg|0)|0}var Bi=64,Wi=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function La(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Ar(s):(a&=o,a!==0&&(r=Ar(a)))}else o=n&~i,o!==0?r=Ar(o):a!==0&&(r=Ar(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function vg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ge(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=vg(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ch(){var e=Bi;return Bi<<=1,!(Bi&4194240)&&(Bi=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function yg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function fh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dh,fu,hh,ph,mh,qs=!1,Hi=[],Ft=null,jt=null,$t=null,qr=new Map,Zr=new Map,Pt=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function br(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=bi(t),t!==null&&fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _g(e,t,n,r,i){switch(t){case"focusin":return Ft=br(Ft,e,t,n,r,i),!0;case"dragenter":return jt=br(jt,e,t,n,r,i),!0;case"mouseover":return $t=br($t,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qr.set(a,br(qr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Zr.set(a,br(Zr.get(a)||null,e,t,n,r,i)),!0}return!1}function vh(e){var t=pn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=ih(n),t!==null){e.blockedOn=t,mh(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ha(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ks=r,n.target.dispatchEvent(r),Ks=null}else return t=bi(n),t!==null&&fu(t),e.blockedOn=n,!1;t.shift()}return!0}function Pc(e,t,n){ha(e)&&n.delete(t)}function kg(){qs=!1,Ft!==null&&ha(Ft)&&(Ft=null),jt!==null&&ha(jt)&&(jt=null),$t!==null&&ha($t)&&($t=null),qr.forEach(Pc),Zr.forEach(Pc)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,kg)))}function ei(e){function t(i){return Cr(i,e)}if(0<Hi.length){Cr(Hi[0],e);for(var n=1;n<Hi.length;n++){var r=Hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&Cr(Ft,e),jt!==null&&Cr(jt,e),$t!==null&&Cr($t,e),qr.forEach(t),Zr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)vh(n),n.blockedOn===null&&Pt.shift()}var er=St.ReactCurrentBatchConfig,Da=!0;function Sg(e,t,n,r){var i=$,a=er.transition;er.transition=null;try{$=1,du(e,t,n,r)}finally{$=i,er.transition=a}}function Eg(e,t,n,r){var i=$,a=er.transition;er.transition=null;try{$=4,du(e,t,n,r)}finally{$=i,er.transition=a}}function du(e,t,n,r){if(Da){var i=Zs(e,t,n,r);if(i===null)os(e,t,r,Ma,n),Tc(e,r);else if(_g(i,e,t,n,r))r.stopPropagation();else if(Tc(e,r),t&4&&-1<wg.indexOf(e)){for(;i!==null;){var a=bi(i);if(a!==null&&dh(a),a=Zs(e,t,n,r),a===null&&os(e,t,r,Ma,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var Ma=null;function Zs(e,t,n,r){if(Ma=null,e=lu(r),e=pn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ih(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function gh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cg()){case uu:return 1;case lh:return 4;case Aa:case fg:return 16;case uh:return 536870912;default:return 16}default:return 16}}var Dt=null,hu=null,pa=null;function yh(){if(pa)return pa;var e,t=hu,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pa=i.slice(e,1<r?1-r:void 0)}function ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Nc(){return!1}function De(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vi:Nc,this.isPropagationStopped=Nc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=De(gr),Ii=q({},gr,{view:0,detail:0}),Ig=De(Ii),Jo,qo,xr,vo=q({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Jo=e.screenX-xr.screenX,qo=e.screenY-xr.screenY):qo=Jo=0,xr=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),Oc=De(vo),bg=q({},vo,{dataTransfer:0}),Cg=De(bg),xg=q({},Ii,{relatedTarget:0}),Zo=De(xg),Tg=q({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=De(Tg),Ng=q({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Og=De(Ng),Rg=q({},gr,{data:0}),Rc=De(Rg),Ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dg[e])?!!t[e]:!1}function mu(){return Mg}var Ug=q({},Ii,{key:function(e){if(e.key){var t=Ag[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zg=De(Ug),Fg=q({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ac=De(Fg),jg=q({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),$g=De(jg),Bg=q({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wg=De(Bg),Hg=q({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=De(Hg),Yg=[9,13,27,32],vu=ht&&"CompositionEvent"in window,zr=null;ht&&"documentMode"in document&&(zr=document.documentMode);var Kg=ht&&"TextEvent"in window&&!zr,wh=ht&&(!vu||zr&&8<zr&&11>=zr),Lc=String.fromCharCode(32),Dc=!1;function _h(e,t){switch(e){case"keyup":return Yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Gg(e,t){switch(e){case"compositionend":return kh(t);case"keypress":return t.which!==32?null:(Dc=!0,Lc);case"textInput":return e=t.data,e===Lc&&Dc?null:e;default:return null}}function Qg(e,t){if(Un)return e==="compositionend"||!vu&&_h(e,t)?(e=yh(),pa=hu=Dt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wh&&t.locale!=="ko"?null:t.data;default:return null}}var Xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xg[e.type]:t==="textarea"}function Sh(e,t,n,r){Zd(r),t=Ua(t,"onChange"),0<t.length&&(n=new pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,ti=null;function Jg(e){Ah(e,0)}function go(e){var t=jn(e);if(Yd(t))return e}function qg(e,t){if(e==="change")return t}var Eh=!1;if(ht){var es;if(ht){var ts="oninput"in document;if(!ts){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),ts=typeof Uc.oninput=="function"}es=ts}else es=!1;Eh=es&&(!document.documentMode||9<document.documentMode)}function zc(){Fr&&(Fr.detachEvent("onpropertychange",Ih),ti=Fr=null)}function Ih(e){if(e.propertyName==="value"&&go(ti)){var t=[];Sh(t,ti,e,lu(e)),rh(Jg,t)}}function Zg(e,t,n){e==="focusin"?(zc(),Fr=t,ti=n,Fr.attachEvent("onpropertychange",Ih)):e==="focusout"&&zc()}function ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(ti)}function ty(e,t){if(e==="click")return go(t)}function ny(e,t){if(e==="input"||e==="change")return go(t)}function ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:ry;function ni(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ds.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jc(e,t){var n=Fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fc(n)}}function bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ch(){for(var e=window,t=Na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Na(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function iy(e){var t=Ch(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bh(n.ownerDocument.documentElement,n)){if(r!==null&&gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=jc(n,a);var o=jc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ay=ht&&"documentMode"in document&&11>=document.documentMode,zn=null,el=null,jr=null,tl=!1;function $c(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||zn==null||zn!==Na(r)||(r=zn,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&ni(jr,r)||(jr=r,r=Ua(el,"onSelect"),0<r.length&&(t=new pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},ns={},xh={};ht&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function yo(e){if(ns[e])return ns[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xh)return ns[e]=t[n];return e}var Th=yo("animationend"),Ph=yo("animationiteration"),Nh=yo("animationstart"),Oh=yo("transitionend"),Rh=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Rh.set(e,t),Rn(t,[e])}for(var rs=0;rs<Bc.length;rs++){var is=Bc[rs],oy=is.toLowerCase(),sy=is[0].toUpperCase()+is.slice(1);nn(oy,"on"+sy)}nn(Th,"onAnimationEnd");nn(Ph,"onAnimationIteration");nn(Nh,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Oh,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Wc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,og(r,t,void 0,e),e.currentTarget=null}function Ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Wc(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Wc(i,s,u),a=l}}}if(Ra)throw e=Xs,Ra=!1,Xs=null,e}function H(e,t){var n=t[ol];n===void 0&&(n=t[ol]=new Set);var r=e+"__bubble";n.has(r)||(Lh(t,e,2,!1),n.add(r))}function as(e,t,n){var r=0;t&&(r|=4),Lh(n,e,r,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[Ki]){e[Ki]=!0,$d.forEach(function(n){n!=="selectionchange"&&(ly.has(n)||as(n,!1,e),as(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,as("selectionchange",!1,t))}}function Lh(e,t,n,r){switch(gh(t)){case 1:var i=Sg;break;case 4:i=Eg;break;default:i=du}n=i.bind(null,t,n,e),i=void 0,!Qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function os(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=pn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}rh(function(){var u=a,c=lu(n),d=[];e:{var p=Rh.get(e);if(p!==void 0){var v=pu,w=e;switch(e){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":v=zg;break;case"focusin":w="focus",v=Zo;break;case"focusout":w="blur",v=Zo;break;case"beforeblur":case"afterblur":v=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=$g;break;case Th:case Ph:case Nh:v=Pg;break;case Oh:v=Wg;break;case"scroll":v=Ig;break;case"wheel":v=Vg;break;case"copy":case"cut":case"paste":v=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ac}var g=(t&4)!==0,E=!g&&e==="scroll",h=g?p!==null?p+"Capture":null:p;g=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=Jr(f,h),y!=null&&g.push(ii(f,y,m)))),E)break;f=f.return}0<g.length&&(p=new v(p,w,null,n,c),d.push({event:p,listeners:g}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Ks&&(w=n.relatedTarget||n.fromElement)&&(pn(w)||w[pt]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?pn(w):null,w!==null&&(E=An(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(g=Oc,y="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(g=Ac,y="onPointerLeave",h="onPointerEnter",f="pointer"),E=v==null?p:jn(v),m=w==null?p:jn(w),p=new g(y,f+"leave",v,n,c),p.target=E,p.relatedTarget=m,y=null,pn(c)===u&&(g=new g(h,f+"enter",w,n,c),g.target=m,g.relatedTarget=E,y=g),E=y,v&&w)t:{for(g=v,h=w,f=0,m=g;m;m=Ln(m))f++;for(m=0,y=h;y;y=Ln(y))m++;for(;0<f-m;)g=Ln(g),f--;for(;0<m-f;)h=Ln(h),m--;for(;f--;){if(g===h||h!==null&&g===h.alternate)break t;g=Ln(g),h=Ln(h)}g=null}else g=null;v!==null&&Hc(d,p,v,g,!1),w!==null&&E!==null&&Hc(d,E,w,g,!0)}}e:{if(p=u?jn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=qg;else if(Mc(p))if(Eh)S=ny;else{S=ey;var I=Zg}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=ty);if(S&&(S=S(e,u))){Sh(d,S,n,c);break e}I&&I(e,p,u),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&Bs(p,"number",p.value)}switch(I=u?jn(u):window,e){case"focusin":(Mc(I)||I.contentEditable==="true")&&(zn=I,el=u,jr=null);break;case"focusout":jr=el=zn=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,$c(d,n,c);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":$c(d,n,c)}var b;if(vu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Un?_h(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(wh&&n.locale!=="ko"&&(Un||N!=="onCompositionStart"?N==="onCompositionEnd"&&Un&&(b=yh()):(Dt=c,hu="value"in Dt?Dt.value:Dt.textContent,Un=!0)),I=Ua(u,N),0<I.length&&(N=new Rc(N,e,null,n,c),d.push({event:N,listeners:I}),b?N.data=b:(b=kh(n),b!==null&&(N.data=b)))),(b=Kg?Gg(e,n):Qg(e,n))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(c=new Rc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}Ah(d,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ua(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Jr(e,n),a!=null&&r.unshift(ii(e,a,i)),a=Jr(e,t),a!=null&&r.push(ii(e,a,i))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hc(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Jr(n,a),l!=null&&o.unshift(ii(n,l,s))):i||(l=Jr(n,a),l!=null&&o.push(ii(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var uy=/\r\n?/g,cy=/\u0000|\uFFFD/g;function Vc(e){return(typeof e=="string"?e:""+e).replace(uy,`
`).replace(cy,"")}function Gi(e,t,n){if(t=Vc(t),Vc(e)!==t&&n)throw Error(k(425))}function za(){}var nl=null,rl=null;function il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(hy)}:al;function hy(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ei(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),et="__reactFiber$"+yr,ai="__reactProps$"+yr,pt="__reactContainer$"+yr,ol="__reactEvents$"+yr,py="__reactListeners$"+yr,my="__reactHandles$"+yr;function pn(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kc(e);e!==null;){if(n=e[et])return n;e=Kc(e)}return t}e=n,n=e.parentNode}return null}function bi(e){return e=e[et]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function wo(e){return e[ai]||null}var sl=[],$n=-1;function rn(e){return{current:e}}function Y(e){0>$n||(e.current=sl[$n],sl[$n]=null,$n--)}function W(e,t){$n++,sl[$n]=e.current,e.current=t}var Jt={},ye=rn(Jt),Ce=rn(!1),Sn=Jt;function lr(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Fa(){Y(Ce),Y(ye)}function Gc(e,t,n){if(ye.current!==Jt)throw Error(k(168));W(ye,t),W(Ce,n)}function Dh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Zv(e)||"Unknown",i));return q({},n,r)}function ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,Sn=ye.current,W(ye,e),W(Ce,Ce.current),!0}function Qc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Dh(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,Y(Ce),Y(ye),W(ye,e)):Y(Ce),W(Ce,n)}var st=null,_o=!1,ls=!1;function Mh(e){st===null?st=[e]:st.push(e)}function vy(e){_o=!0,Mh(e)}function an(){if(!ls&&st!==null){ls=!0;var e=0,t=$;try{var n=st;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,_o=!1}catch(i){throw st!==null&&(st=st.slice(e+1)),sh(uu,an),i}finally{$=t,ls=!1}}return null}var Bn=[],Wn=0,$a=null,Ba=0,Ue=[],ze=0,En=null,lt=1,ut="";function fn(e,t){Bn[Wn++]=Ba,Bn[Wn++]=$a,$a=e,Ba=t}function Uh(e,t,n){Ue[ze++]=lt,Ue[ze++]=ut,Ue[ze++]=En,En=e;var r=lt;e=ut;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,lt=1<<32-Ge(t)+i|n<<i|r,ut=a+e}else lt=1<<a|n<<i|r,ut=e}function yu(e){e.return!==null&&(fn(e,1),Uh(e,1,0))}function wu(e){for(;e===$a;)$a=Bn[--Wn],Bn[Wn]=null,Ba=Bn[--Wn],Bn[Wn]=null;for(;e===En;)En=Ue[--ze],Ue[ze]=null,ut=Ue[--ze],Ue[ze]=null,lt=Ue[--ze],Ue[ze]=null}var Re=null,Oe=null,G=!1,Ye=null;function zh(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Oe=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:lt,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Oe=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(G){var t=Oe;if(t){var n=t;if(!Xc(e,t)){if(ll(e))throw Error(k(418));t=Bt(n.nextSibling);var r=Re;t&&Xc(e,t)?zh(r,n):(e.flags=e.flags&-4097|2,G=!1,Re=e)}}else{if(ll(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Re=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Qi(e){if(e!==Re)return!1;if(!G)return Jc(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!il(e.type,e.memoizedProps)),t&&(t=Oe)){if(ll(e))throw Fh(),Error(k(418));for(;t;)zh(e,t),t=Bt(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Re?Bt(e.stateNode.nextSibling):null;return!0}function Fh(){for(var e=Oe;e;)e=Bt(e.nextSibling)}function ur(){Oe=Re=null,G=!1}function _u(e){Ye===null?Ye=[e]:Ye.push(e)}var gy=St.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wa=rn(null),Ha=null,Hn=null,ku=null;function Su(){ku=Hn=Ha=null}function Eu(e){var t=Wa.current;Y(Wa),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){Ha=e,ku=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(ku!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(Ha===null)throw Error(k(308));Hn=e,Ha.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var mn=null;function Iu(e){mn===null?mn=[e]:mn.push(e)}function jh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Iu(t)):(n.next=i.next,i.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Iu(r)):(t.next=i.next,i.next=t),r.interleaved=t,mt(e,n)}function va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}function qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var i=e.updateQueue;Tt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var p=s.lane,v=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,g=s;switch(p=t,v=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){d=w.call(v,d,p);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,p=typeof w=="function"?w.call(v,d,p):w,p==null)break e;d=q({},d,p);break e;case 2:Tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);bn|=o,e.lanes=o,e.memoizedState=d}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Bh=new jd.Component().refs;function fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Vt(e),a=dt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Wt(e,a,i),t!==null&&(Qe(t,e,i,r),va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Vt(e),a=dt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Wt(e,a,i),t!==null&&(Qe(t,e,i,r),va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Vt(e),i=dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wt(e,i,r),t!==null&&(Qe(t,e,r,n),va(t,e,r))}};function ef(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(i,a):!0}function Wh(e,t,n){var r=!1,i=Jt,a=t.contextType;return typeof a=="object"&&a!==null?a=$e(a):(i=xe(t)?Sn:ye.current,r=t.contextTypes,a=(r=r!=null)?lr(e,i):Jt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function tf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bh,bu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=$e(a):(a=xe(t)?Sn:ye.current,i.context=lr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ko.enqueueReplaceState(i,i.state,null),Va(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===Bh&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nf(e){var t=e._init;return t(e._payload)}function Hh(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Yt(h,f),h.index=0,h.sibling=null,h}function a(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,m,y){return f===null||f.tag!==6?(f=ms(m,h.mode,y),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,y){var S=m.type;return S===Mn?c(h,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&nf(S)===f.type)?(y=i(f,m.props),y.ref=Tr(h,f,m),y.return=h,y):(y=Sa(m.type,m.key,m.props,null,h.mode,y),y.ref=Tr(h,f,m),y.return=h,y)}function u(h,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=vs(m,h.mode,y),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,y,S){return f===null||f.tag!==7?(f=_n(m,h.mode,y,S),f.return=h,f):(f=i(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ms(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fi:return m=Sa(f.type,f.key,f.props,null,h.mode,m),m.ref=Tr(h,null,f),m.return=h,m;case Dn:return f=vs(f,h.mode,m),f.return=h,f;case xt:var y=f._init;return d(h,y(f._payload),m)}if(Rr(f)||Er(f))return f=_n(f,h.mode,m,null),f.return=h,f;Xi(h,f)}return null}function p(h,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(h,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fi:return m.key===S?l(h,f,m,y):null;case Dn:return m.key===S?u(h,f,m,y):null;case xt:return S=m._init,p(h,f,S(m._payload),y)}if(Rr(m)||Er(m))return S!==null?null:c(h,f,m,y,null);Xi(h,m)}return null}function v(h,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,s(f,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fi:return h=h.get(y.key===null?m:y.key)||null,l(f,h,y,S);case Dn:return h=h.get(y.key===null?m:y.key)||null,u(f,h,y,S);case xt:var I=y._init;return v(h,f,m,I(y._payload),S)}if(Rr(y)||Er(y))return h=h.get(m)||null,c(f,h,y,S,null);Xi(f,y)}return null}function w(h,f,m,y){for(var S=null,I=null,b=f,N=f=0,z=null;b!==null&&N<m.length;N++){b.index>N?(z=b,b=null):z=b.sibling;var A=p(h,b,m[N],y);if(A===null){b===null&&(b=z);break}e&&b&&A.alternate===null&&t(h,b),f=a(A,f,N),I===null?S=A:I.sibling=A,I=A,b=z}if(N===m.length)return n(h,b),G&&fn(h,N),S;if(b===null){for(;N<m.length;N++)b=d(h,m[N],y),b!==null&&(f=a(b,f,N),I===null?S=b:I.sibling=b,I=b);return G&&fn(h,N),S}for(b=r(h,b);N<m.length;N++)z=v(b,h,N,m[N],y),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?N:z.key),f=a(z,f,N),I===null?S=z:I.sibling=z,I=z);return e&&b.forEach(function(Pe){return t(h,Pe)}),G&&fn(h,N),S}function g(h,f,m,y){var S=Er(m);if(typeof S!="function")throw Error(k(150));if(m=S.call(m),m==null)throw Error(k(151));for(var I=S=null,b=f,N=f=0,z=null,A=m.next();b!==null&&!A.done;N++,A=m.next()){b.index>N?(z=b,b=null):z=b.sibling;var Pe=p(h,b,A.value,y);if(Pe===null){b===null&&(b=z);break}e&&b&&Pe.alternate===null&&t(h,b),f=a(Pe,f,N),I===null?S=Pe:I.sibling=Pe,I=Pe,b=z}if(A.done)return n(h,b),G&&fn(h,N),S;if(b===null){for(;!A.done;N++,A=m.next())A=d(h,A.value,y),A!==null&&(f=a(A,f,N),I===null?S=A:I.sibling=A,I=A);return G&&fn(h,N),S}for(b=r(h,b);!A.done;N++,A=m.next())A=v(b,h,N,A.value,y),A!==null&&(e&&A.alternate!==null&&b.delete(A.key===null?N:A.key),f=a(A,f,N),I===null?S=A:I.sibling=A,I=A);return e&&b.forEach(function(sn){return t(h,sn)}),G&&fn(h,N),S}function E(h,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Fi:e:{for(var S=m.key,I=f;I!==null;){if(I.key===S){if(S=m.type,S===Mn){if(I.tag===7){n(h,I.sibling),f=i(I,m.props.children),f.return=h,h=f;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&nf(S)===I.type){n(h,I.sibling),f=i(I,m.props),f.ref=Tr(h,I,m),f.return=h,h=f;break e}n(h,I);break}else t(h,I);I=I.sibling}m.type===Mn?(f=_n(m.props.children,h.mode,y,m.key),f.return=h,h=f):(y=Sa(m.type,m.key,m.props,null,h.mode,y),y.ref=Tr(h,f,m),y.return=h,h=y)}return o(h);case Dn:e:{for(I=m.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=vs(m,h.mode,y),f.return=h,h=f}return o(h);case xt:return I=m._init,E(h,f,I(m._payload),y)}if(Rr(m))return w(h,f,m,y);if(Er(m))return g(h,f,m,y);Xi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=ms(m,h.mode,y),f.return=h,h=f),o(h)):n(h,f)}return E}var cr=Hh(!0),Vh=Hh(!1),Ci={},rt=rn(Ci),oi=rn(Ci),si=rn(Ci);function vn(e){if(e===Ci)throw Error(k(174));return e}function Cu(e,t){switch(W(si,t),W(oi,e),W(rt,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hs(t,e)}Y(rt),W(rt,t)}function fr(){Y(rt),Y(oi),Y(si)}function Yh(e){vn(si.current);var t=vn(rt.current),n=Hs(t,e.type);t!==n&&(W(oi,e),W(rt,n))}function xu(e){oi.current===e&&(Y(rt),Y(oi))}var X=rn(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var us=[];function Tu(){for(var e=0;e<us.length;e++)us[e]._workInProgressVersionPrimary=null;us.length=0}var ga=St.ReactCurrentDispatcher,cs=St.ReactCurrentBatchConfig,In=0,J=null,ae=null,ce=null,Ka=!1,$r=!1,li=0,yy=0;function me(){throw Error(k(321))}function Pu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Nu(e,t,n,r,i,a){if(In=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ga.current=e===null||e.memoizedState===null?Sy:Ey,e=n(r,i),$r){a=0;do{if($r=!1,li=0,25<=a)throw Error(k(301));a+=1,ce=ae=null,t.updateQueue=null,ga.current=Iy,e=n(r,i)}while($r)}if(ga.current=Ga,t=ae!==null&&ae.next!==null,In=0,ce=ae=J=null,Ka=!1,t)throw Error(k(300));return e}function Ou(){var e=li!==0;return li=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=e:ce=ce.next=e,ce}function Be(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?J.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(k(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?J.memoizedState=ce=e:ce=ce.next=e}return ce}function ui(e,t){return typeof t=="function"?t(e):t}function fs(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((In&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,J.lanes|=c,bn|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Xe(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,J.lanes|=a,bn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ds(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Xe(a,t.memoizedState)||(be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Kh(){}function Gh(e,t){var n=J,r=Be(),i=t(),a=!Xe(r.memoizedState,i);if(a&&(r.memoizedState=i,be=!0),r=r.queue,Ru(Jh.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,ci(9,Xh.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(k(349));In&30||Qh(n,t,i)}return i}function Qh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xh(e,t,n,r){t.value=n,t.getSnapshot=r,qh(t)&&Zh(e)}function Jh(e,t,n){return n(function(){qh(t)&&Zh(e)})}function qh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Zh(e){var t=mt(e,1);t!==null&&Qe(t,e,1,-1)}function rf(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=ky.bind(null,J,e),[t.memoizedState,e]}function ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ep(){return Be().memoizedState}function ya(e,t,n,r){var i=Ze();J.flags|=e,i.memoizedState=ci(1|t,n,void 0,r===void 0?null:r)}function So(e,t,n,r){var i=Be();r=r===void 0?null:r;var a=void 0;if(ae!==null){var o=ae.memoizedState;if(a=o.destroy,r!==null&&Pu(r,o.deps)){i.memoizedState=ci(t,n,a,r);return}}J.flags|=e,i.memoizedState=ci(1|t,n,a,r)}function af(e,t){return ya(8390656,8,e,t)}function Ru(e,t){return So(2048,8,e,t)}function tp(e,t){return So(4,2,e,t)}function np(e,t){return So(4,4,e,t)}function rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,n){return n=n!=null?n.concat([e]):null,So(4,4,rp.bind(null,t,e),n)}function Au(){}function ap(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function op(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sp(e,t,n){return In&21?(Xe(n,t)||(n=ch(),J.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function wy(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=cs.transition;cs.transition={};try{e(!1),t()}finally{$=n,cs.transition=r}}function lp(){return Be().memoizedState}function _y(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},up(e))cp(t,n);else if(n=jh(e,t,n,r),n!==null){var i=ke();Qe(n,e,r,i),fp(n,t,r)}}function ky(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(up(e))cp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Xe(s,o)){var l=t.interleaved;l===null?(i.next=i,Iu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=jh(e,t,i,r),n!==null&&(i=ke(),Qe(n,e,r,i),fp(n,t,r))}}function up(e){var t=e.alternate;return e===J||t!==null&&t===J}function cp(e,t){$r=Ka=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}var Ga={readContext:$e,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Sy={readContext:$e,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:af,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ya(4194308,4,rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return ya(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_y.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:rf,useDebugValue:Au,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=rf(!1),t=e[0];return e=wy.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=Ze();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),fe===null)throw Error(k(349));In&30||Qh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,af(Jh.bind(null,r,a,e),[e]),r.flags|=2048,ci(9,Xh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ze(),t=fe.identifierPrefix;if(G){var n=ut,r=lt;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ey={readContext:$e,useCallback:ap,useContext:$e,useEffect:Ru,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:fs,useRef:ep,useState:function(){return fs(ui)},useDebugValue:Au,useDeferredValue:function(e){var t=Be();return sp(t,ae.memoizedState,e)},useTransition:function(){var e=fs(ui)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Kh,useSyncExternalStore:Gh,useId:lp,unstable_isNewReconciler:!1},Iy={readContext:$e,useCallback:ap,useContext:$e,useEffect:Ru,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:ds,useRef:ep,useState:function(){return ds(ui)},useDebugValue:Au,useDeferredValue:function(e){var t=Be();return ae===null?t.memoizedState=e:sp(t,ae.memoizedState,e)},useTransition:function(){var e=ds(ui)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Kh,useSyncExternalStore:Gh,useId:lp,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=qv(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function hs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var by=typeof WeakMap=="function"?WeakMap:Map;function dp(e,t,n){n=dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xa||(Xa=!0,El=r),hl(e,t)},n}function hp(e,t,n){n=dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){hl(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function of(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new by;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fy.bind(null,e,t,n),t.then(e,e))}function sf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var Cy=St.ReactCurrentOwner,be=!1;function _e(e,t,n,r){t.child=e===null?Vh(t,null,n,r):cr(t,e.child,n,r)}function uf(e,t,n,r,i){n=n.render;var a=t.ref;return tr(t,i),r=Nu(e,t,n,r,a,i),n=Ou(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(G&&n&&yu(t),t.flags|=1,_e(e,t,r,i),t.child)}function cf(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!$u(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,pp(e,t,a,r,i)):(e=Sa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(o,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=Yt(a,r),e.ref=t.ref,e.return=t,t.child=e}function pp(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ni(a,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,vt(e,t,i)}return pl(e,t,n,r,i)}function mp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Yn,Ne),Ne|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Yn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,W(Yn,Ne),Ne|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,W(Yn,Ne),Ne|=r;return _e(e,t,i,n),t.child}function vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,n,r,i){var a=xe(n)?Sn:ye.current;return a=lr(t,a),tr(t,i),n=Nu(e,t,n,r,a,i),r=Ou(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(G&&r&&yu(t),t.flags|=1,_e(e,t,n,i),t.child)}function ff(e,t,n,r,i){if(xe(n)){var a=!0;ja(t)}else a=!1;if(tr(t,i),t.stateNode===null)wa(e,t),Wh(t,n,r),dl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$e(u):(u=xe(n)?Sn:ye.current,u=lr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&tf(t,o,r,u),Tt=!1;var p=t.memoizedState;o.state=p,Va(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Ce.current||Tt?(typeof c=="function"&&(fl(t,n,c,r),l=t.memoizedState),(s=Tt||ef(t,n,s,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,$h(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:He(t.type,s),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=xe(n)?Sn:ye.current,l=lr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==l)&&tf(t,o,r,l),Tt=!1,p=t.memoizedState,o.state=p,Va(t,r,o,i);var w=t.memoizedState;s!==d||p!==w||Ce.current||Tt?(typeof v=="function"&&(fl(t,n,v,r),w=t.memoizedState),(u=Tt||ef(t,n,u,r,p,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,a,i)}function ml(e,t,n,r,i,a){vp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Qc(t,n,!1),vt(e,t,a);r=t.stateNode,Cy.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cr(t,e.child,null,a),t.child=cr(t,null,s,a)):_e(e,t,s,a),t.memoizedState=r.state,i&&Qc(t,n,!0),t.child}function gp(e){var t=e.stateNode;t.pendingContext?Gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gc(e,t.context,!1),Cu(e,t.containerInfo)}function df(e,t,n,r,i){return ur(),_u(i),t.flags|=256,_e(e,t,n,r),t.child}var vl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yp(e,t,n){var r=t.pendingProps,i=X.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(X,i&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=bo(o,r,0,null),e=_n(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=gl(n),t.memoizedState=vl,e):Lu(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return xy(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Yt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Yt(s,a):(a=_n(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?gl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=vl,r}return a=e.child,e=a.sibling,r=Yt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lu(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,r){return r!==null&&_u(r),cr(t,e.child,null,n),e=Lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xy(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=hs(Error(k(422))),Ji(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=bo({mode:"visible",children:r.children},i,0,null),a=_n(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&cr(t,e.child,null,o),t.child.memoizedState=gl(o),t.memoizedState=vl,a);if(!(t.mode&1))return Ji(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(k(419)),r=hs(a,r,void 0),Ji(e,t,o,r)}if(s=(o&e.childLanes)!==0,be||s){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,mt(e,i),Qe(r,e,i,-1))}return ju(),r=hs(Error(k(421))),Ji(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jy.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Oe=Bt(i.nextSibling),Re=t,G=!0,Ye=null,e!==null&&(Ue[ze++]=lt,Ue[ze++]=ut,Ue[ze++]=En,lt=e.id,ut=e.overflow,En=t),t=Lu(t,r.children),t.flags|=4096,t)}function hf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function ps(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function wp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(_e(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hf(e,n,t);else if(e.tag===19)hf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ya(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ps(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ya(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ps(t,!0,n,null,a);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ty(e,t,n){switch(t.tag){case 3:gp(t),ur();break;case 5:Yh(t);break;case 1:xe(t.type)&&ja(t);break;case 4:Cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Wa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?yp(e,t,n):(W(X,X.current&1),e=vt(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,mp(e,t,n)}return vt(e,t,n)}var _p,yl,kp,Sp;_p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};kp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vn(rt.current);var a=null;switch(n){case"input":i=js(e,i),r=js(e,r),a=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":i=Ws(e,i),r=Ws(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=za)}Vs(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Sp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Py(e,t,n){var r=t.pendingProps;switch(wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return xe(t.type)&&Fa(),ve(t),null;case 3:return r=t.stateNode,fr(),Y(Ce),Y(ye),Tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Cl(Ye),Ye=null))),yl(e,t),ve(t),null;case 5:xu(t);var i=vn(si.current);if(n=t.type,e!==null&&t.stateNode!=null)kp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=vn(rt.current),Qi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[et]=t,r[ai]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)H(Lr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":kc(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":Ec(r,a),H("invalid",r)}Vs(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Gi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Gi(r.textContent,s,e),i=["children",""+s]):Qr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":ji(r),Sc(r,a,!0);break;case"textarea":ji(r),Ic(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=za)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[et]=t,e[ai]=r,_p(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ys(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)H(Lr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":kc(e,r),i=js(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ec(e,r),i=Ws(e,r),H("invalid",e);break;default:i=r}Vs(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?qd(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xd(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xr(e,l):typeof l=="number"&&Xr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&H("scroll",e):l!=null&&iu(e,a,l,o))}switch(n){case"input":ji(e),Sc(e,r,!1);break;case"textarea":ji(e),Ic(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Jn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Sp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=vn(si.current),vn(rt.current),Qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(a=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Oe!==null&&t.mode&1&&!(t.flags&128))Fh(),ur(),t.flags|=98560,a=!1;else if(a=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[et]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),a=!1}else Ye!==null&&(Cl(Ye),Ye=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?oe===0&&(oe=3):ju())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return fr(),yl(e,t),e===null&&ri(t.stateNode.containerInfo),ve(t),null;case 10:return Eu(t.type._context),ve(t),null;case 17:return xe(t.type)&&Fa(),ve(t),null;case 19:if(Y(X),a=t.memoizedState,a===null)return ve(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Pr(a,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ya(e),o!==null){for(t.flags|=128,Pr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>hr&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ya(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!G)return ve(t),null}else 2*ne()-a.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Ny(e,t){switch(wu(t),t.tag){case 1:return xe(t.type)&&Fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),Y(Ce),Y(ye),Tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xu(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return fr(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var qi=!1,ge=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,T=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function wl(e,t,n){try{n()}catch(r){Z(e,t,r)}}var pf=!1;function Ry(e,t){if(nl=Da,e=Ch(),gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},Da=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,E=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:He(t.type,g),E);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=pf,pf=!1,w}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&wl(t,n,a)}i=i.next}while(i!==r)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ep(e){var t=e.alternate;t!==null&&(e.alternate=null,Ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[ai],delete t[ol],delete t[py],delete t[my])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ip(e){return e.tag===5||e.tag===3||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=za));else if(r!==4&&(e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var de=null,Ve=!1;function It(e,t,n){for(n=n.child;n!==null;)bp(e,t,n),n=n.sibling}function bp(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:ge||Vn(n,t);case 6:var r=de,i=Ve;de=null,It(e,t,n),de=r,Ve=i,de!==null&&(Ve?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ve?(e=de,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),ei(e)):ss(de,n.stateNode));break;case 4:r=de,i=Ve,de=n.stateNode.containerInfo,Ve=!0,It(e,t,n),de=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&wl(n,t,o),i=i.next}while(i!==r)}It(e,t,n);break;case 1:if(!ge&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,It(e,t,n),ge=r):It(e,t,n);break;default:It(e,t,n)}}function vf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oy),t.forEach(function(r){var i=$y.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,Ve=!1;break e;case 3:de=s.stateNode.containerInfo,Ve=!0;break e;case 4:de=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(de===null)throw Error(k(160));bp(a,o,i),de=null,Ve=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cp(t,e),t=t.sibling}function Cp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),qe(e),r&4){try{Br(3,e,e.return),Eo(3,e)}catch(g){Z(e,e.return,g)}try{Br(5,e,e.return)}catch(g){Z(e,e.return,g)}}break;case 1:We(t,e),qe(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(We(t,e),qe(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(g){Z(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Kd(i,a),Ys(s,o);var u=Ys(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?qd(i,d):c==="dangerouslySetInnerHTML"?Xd(i,d):c==="children"?Xr(i,d):iu(i,c,d,u)}switch(s){case"input":$s(i,a);break;case"textarea":Gd(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Jn(i,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?Jn(i,!!a.multiple,a.defaultValue,!0):Jn(i,!!a.multiple,a.multiple?[]:"",!1))}i[ai]=a}catch(g){Z(e,e.return,g)}}break;case 6:if(We(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Z(e,e.return,g)}}break;case 3:if(We(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(g){Z(e,e.return,g)}break;case 4:We(t,e),qe(e);break;case 13:We(t,e),qe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Uu=ne())),r&4&&vf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||c,We(t,e),ge=u):We(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(d=T=c;T!==null;){switch(p=T,v=p.child,p.tag){case 0:case 11:case 14:case 15:Br(4,p,p.return);break;case 1:Vn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){Z(r,n,g)}}break;case 5:Vn(p,p.return);break;case 22:if(p.memoizedState!==null){yf(d);continue}}v!==null?(v.return=p,T=v):yf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Jd("display",o))}catch(g){Z(e,e.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Z(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:We(t,e),qe(e),r&4&&vf(e);break;case 21:break;default:We(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ip(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var a=mf(e);Sl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=mf(e);kl(e,s,o);break;default:throw Error(k(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ay(e,t,n){T=e,xp(e)}function xp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qi;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ge;s=qi;var u=ge;if(qi=o,(ge=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?wf(i):l!==null?(l.return=o,T=l):wf(i);for(;a!==null;)T=a,xp(a),a=a.sibling;T=i,qi=s,ge=u}gf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):gf(e)}}function gf(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Eo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zc(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ei(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&_l(t)}catch(p){Z(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function yf(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function wf(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eo(4,t)}catch(l){Z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Z(t,i,l)}}var a=t.return;try{_l(t)}catch(l){Z(t,a,l)}break;case 5:var o=t.return;try{_l(t)}catch(l){Z(t,o,l)}}}catch(l){Z(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Ly=Math.ceil,Qa=St.ReactCurrentDispatcher,Du=St.ReactCurrentOwner,je=St.ReactCurrentBatchConfig,j=0,fe=null,re=null,he=0,Ne=0,Yn=rn(0),oe=0,fi=null,bn=0,Io=0,Mu=0,Wr=null,Ie=null,Uu=0,hr=1/0,ot=null,Xa=!1,El=null,Ht=null,Zi=!1,Mt=null,Ja=0,Hr=0,Il=null,_a=-1,ka=0;function ke(){return j&6?ne():_a!==-1?_a:_a=ne()}function Vt(e){return e.mode&1?j&2&&he!==0?he&-he:gy.transition!==null?(ka===0&&(ka=ch()),ka):(e=$,e!==0||(e=window.event,e=e===void 0?16:gh(e.type)),e):1}function Qe(e,t,n,r){if(50<Hr)throw Hr=0,Il=null,Error(k(185));Ei(e,n,r),(!(j&2)||e!==fe)&&(e===fe&&(!(j&2)&&(Io|=n),oe===4&&Nt(e,he)),Te(e,r),n===1&&j===0&&!(t.mode&1)&&(hr=ne()+500,_o&&an()))}function Te(e,t){var n=e.callbackNode;gg(e,t);var r=La(e,e===fe?he:0);if(r===0)n!==null&&xc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xc(n),t===1)e.tag===0?vy(_f.bind(null,e)):Mh(_f.bind(null,e)),dy(function(){!(j&6)&&an()}),n=null;else{switch(fh(r)){case 1:n=uu;break;case 4:n=lh;break;case 16:n=Aa;break;case 536870912:n=uh;break;default:n=Aa}n=Dp(n,Tp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tp(e,t){if(_a=-1,ka=0,j&6)throw Error(k(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=La(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qa(e,r);else{t=r;var i=j;j|=2;var a=Np();(fe!==e||he!==t)&&(ot=null,hr=ne()+500,wn(e,t));do try{Uy();break}catch(s){Pp(e,s)}while(1);Su(),Qa.current=a,j=i,re!==null?t=0:(fe=null,he=0,t=oe)}if(t!==0){if(t===2&&(i=Js(e),i!==0&&(r=i,t=bl(e,i))),t===1)throw n=fi,wn(e,0),Nt(e,r),Te(e,ne()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dy(i)&&(t=qa(e,r),t===2&&(a=Js(e),a!==0&&(r=a,t=bl(e,a))),t===1))throw n=fi,wn(e,0),Nt(e,r),Te(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:dn(e,Ie,ot);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Uu+500-ne(),10<t)){if(La(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=al(dn.bind(null,e,Ie,ot),t);break}dn(e,Ie,ot);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ge(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ly(r/1960))-r,10<r){e.timeoutHandle=al(dn.bind(null,e,Ie,ot),r);break}dn(e,Ie,ot);break;case 5:dn(e,Ie,ot);break;default:throw Error(k(329))}}}return Te(e,ne()),e.callbackNode===n?Tp.bind(null,e):null}function bl(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=qa(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Cl(t)),e}function Cl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Dy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Xe(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Mu,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function _f(e){if(j&6)throw Error(k(327));nr();var t=La(e,0);if(!(t&1))return Te(e,ne()),null;var n=qa(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=bl(e,r))}if(n===1)throw n=fi,wn(e,0),Nt(e,t),Te(e,ne()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Ie,ot),Te(e,ne()),null}function zu(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(hr=ne()+500,_o&&an())}}function Cn(e){Mt!==null&&Mt.tag===0&&!(j&6)&&nr();var t=j;j|=1;var n=je.transition,r=$;try{if(je.transition=null,$=1,e)return e()}finally{$=r,je.transition=n,j=t,!(j&6)&&an()}}function Fu(){Ne=Yn.current,Y(Yn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fa();break;case 3:fr(),Y(Ce),Y(ye),Tu();break;case 5:xu(r);break;case 4:fr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Eu(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(fe=e,re=e=Yt(e.current,null),he=Ne=t,oe=0,fi=null,Mu=Io=bn=0,Ie=Wr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}mn=null}return e}function Pp(e,t){do{var n=re;try{if(Su(),ga.current=Ga,Ka){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ka=!1}if(In=0,ce=ae=J=null,$r=!1,li=0,Du.current=null,n===null||n.return===null){oe=1,fi=t,re=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=he,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=sf(o);if(v!==null){v.flags&=-257,lf(v,o,s,a,t),v.mode&1&&of(a,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(l),t.updateQueue=g}else w.add(l);break e}else{if(!(t&1)){of(a,u,t),ju();break e}l=Error(k(426))}}else if(G&&s.mode&1){var E=sf(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),lf(E,o,s,a,t),_u(dr(l,s));break e}}a=l=dr(l,s),oe!==4&&(oe=2),Wr===null?Wr=[a]:Wr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=dp(a,l,t);qc(a,h);break e;case 1:s=l;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=hp(a,s,t);qc(a,y);break e}}a=a.return}while(a!==null)}Rp(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Np(){var e=Qa.current;return Qa.current=Ga,e===null?Ga:e}function ju(){(oe===0||oe===3||oe===2)&&(oe=4),fe===null||!(bn&268435455)&&!(Io&268435455)||Nt(fe,he)}function qa(e,t){var n=j;j|=2;var r=Np();(fe!==e||he!==t)&&(ot=null,wn(e,t));do try{My();break}catch(i){Pp(e,i)}while(1);if(Su(),j=n,Qa.current=r,re!==null)throw Error(k(261));return fe=null,he=0,oe}function My(){for(;re!==null;)Op(re)}function Uy(){for(;re!==null&&!lg();)Op(re)}function Op(e){var t=Lp(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Rp(e):re=t,Du.current=null}function Rp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ny(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(n=Py(n,t,Ne),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);oe===0&&(oe=5)}function dn(e,t,n){var r=$,i=je.transition;try{je.transition=null,$=1,zy(e,t,n,r)}finally{je.transition=i,$=r}return null}function zy(e,t,n,r){do nr();while(Mt!==null);if(j&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(yg(e,a),e===fe&&(re=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,Dp(Aa,function(){return nr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=je.transition,je.transition=null;var o=$;$=1;var s=j;j|=4,Du.current=null,Ry(e,n),Cp(n,e),iy(rl),Da=!!nl,rl=nl=null,e.current=n,Ay(n),ug(),j=s,$=o,je.transition=a}else e.current=n;if(Zi&&(Zi=!1,Mt=e,Ja=i),a=e.pendingLanes,a===0&&(Ht=null),dg(n.stateNode),Te(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xa)throw Xa=!1,e=El,El=null,e;return Ja&1&&e.tag!==0&&nr(),a=e.pendingLanes,a&1?e===Il?Hr++:(Hr=0,Il=e):Hr=0,an(),null}function nr(){if(Mt!==null){var e=fh(Ja),t=je.transition,n=$;try{if(je.transition=null,$=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Ja=0,j&6)throw Error(k(331));var i=j;for(j|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Br(8,c,a)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var p=c.sibling,v=c.return;if(Ep(c),c===u){T=null;break}if(p!==null){p.return=v,T=p;break}T=v}}}var w=a.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var E=g.sibling;g.sibling=null,g=E}while(g!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Br(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}var f=e.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Eo(9,s)}}catch(S){Z(s,s.return,S)}if(s===o){T=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,T=y;break e}T=s.return}}if(j=i,an(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{$=n,je.transition=t}}return!1}function kf(e,t,n){t=dr(n,t),t=dp(e,t,1),e=Wt(e,t,1),t=ke(),e!==null&&(Ei(e,1,t),Te(e,t))}function Z(e,t,n){if(e.tag===3)kf(e,e,n);else for(;t!==null;){if(t.tag===3){kf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=dr(n,e),e=hp(t,e,1),t=Wt(t,e,1),e=ke(),t!==null&&(Ei(t,1,e),Te(t,e));break}}t=t.return}}function Fy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(oe===4||oe===3&&(he&130023424)===he&&500>ne()-Uu?wn(e,0):Mu|=n),Te(e,t)}function Ap(e,t){t===0&&(e.mode&1?(t=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):t=1);var n=ke();e=mt(e,t),e!==null&&(Ei(e,t,n),Te(e,n))}function jy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ap(e,n)}function $y(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Ap(e,n)}var Lp;Lp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,Ty(e,t,n);be=!!(e.flags&131072)}else be=!1,G&&t.flags&1048576&&Uh(t,Ba,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wa(e,t),e=t.pendingProps;var i=lr(t,ye.current);tr(t,n),i=Nu(null,t,r,e,i,n);var a=Ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(a=!0,ja(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bu(t),i.updater=ko,t.stateNode=i,i._reactInternals=t,dl(t,r,e,n),t=ml(null,t,r,!0,a,n)):(t.tag=0,G&&a&&yu(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Wy(r),e=He(r,e),i){case 0:t=pl(null,t,r,e,n);break e;case 1:t=ff(null,t,r,e,n);break e;case 11:t=uf(null,t,r,e,n);break e;case 14:t=cf(null,t,r,He(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ff(e,t,r,i,n);case 3:e:{if(gp(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,i=a.element,$h(e,t),Va(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=dr(Error(k(423)),t),t=df(e,t,r,n,i);break e}else if(r!==i){i=dr(Error(k(424)),t),t=df(e,t,r,n,i);break e}else for(Oe=Bt(t.stateNode.containerInfo.firstChild),Re=t,G=!0,Ye=null,n=Vh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=vt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Yh(t),e===null&&ul(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,il(r,i)?o=null:a!==null&&il(r,a)&&(t.flags|=32),vp(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&ul(t),null;case 13:return yp(e,t,n);case 4:return Cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),uf(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,W(Wa,r._currentValue),r._currentValue=o,a!==null)if(Xe(a.value,o)){if(a.children===i.children&&!Ce.current){t=vt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=dt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),cl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),cl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tr(t,n),i=$e(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),cf(e,t,r,i,n);case 15:return pp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),wa(e,t),t.tag=1,xe(r)?(e=!0,ja(t)):e=!1,tr(t,n),Wh(t,r,i),dl(t,r,i,n),ml(null,t,r,!0,e,n);case 19:return wp(e,t,n);case 22:return mp(e,t,n)}throw Error(k(156,t.tag))};function Dp(e,t){return sh(e,t)}function By(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new By(e,t,n,r)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wy(e){if(typeof e=="function")return $u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ou)return 11;if(e===su)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sa(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")$u(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mn:return _n(n.children,i,a,t);case au:o=8,i|=8;break;case Ms:return e=Fe(12,n,t,i|2),e.elementType=Ms,e.lanes=a,e;case Us:return e=Fe(13,n,t,i),e.elementType=Us,e.lanes=a,e;case zs:return e=Fe(19,n,t,i),e.elementType=zs,e.lanes=a,e;case Hd:return bo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bd:o=10;break e;case Wd:o=9;break e;case ou:o=11;break e;case su:o=14;break e;case xt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Fe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function _n(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Hd,e.lanes=n,e.stateNode={isHidden:!1},e}function ms(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function vs(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,i,a,o,s,l){return e=new Hy(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Fe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(a),e}function Vy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mp(e){if(!e)return Jt;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return Dh(e,n,t)}return t}function Up(e,t,n,r,i,a,o,s,l){return e=Bu(n,r,!0,e,i,a,o,s,l),e.context=Mp(null),n=e.current,r=ke(),i=Vt(n),a=dt(r,i),a.callback=t??null,Wt(n,a,i),e.current.lanes=i,Ei(e,i,r),Te(e,r),e}function Co(e,t,n,r){var i=t.current,a=ke(),o=Vt(i);return n=Mp(n),t.context===null?t.context=n:t.pendingContext=n,t=dt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(i,t,o),e!==null&&(Qe(e,i,o,a),va(e,i,o)),o}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wu(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function Yy(){return null}var zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hu(e){this._internalRoot=e}xo.prototype.render=Hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Co(e,t,null,null)};xo.prototype.unmount=Hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){Co(null,e,null,null)}),t[pt]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&vh(e)}};function Vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ef(){}function Ky(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Za(o);a.call(u)}}var o=Up(t,r,e,0,null,!1,!1,"",Ef);return e._reactRootContainer=o,e[pt]=o.current,ri(e.nodeType===8?e.parentNode:e),Cn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Za(l);s.call(u)}}var l=Bu(e,0,!1,null,null,!1,!1,"",Ef);return e._reactRootContainer=l,e[pt]=l.current,ri(e.nodeType===8?e.parentNode:e),Cn(function(){Co(t,l,n,r)}),l}function Po(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Za(o);s.call(l)}}Co(t,o,e,i)}else o=Ky(n,t,e,i,r);return Za(o)}dh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(cu(t,n|1),Te(t,ne()),!(j&6)&&(hr=ne()+500,an()))}break;case 13:Cn(function(){var r=mt(e,1);if(r!==null){var i=ke();Qe(r,e,1,i)}}),Wu(e,1)}};fu=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=ke();Qe(t,e,134217728,n)}Wu(e,134217728)}};hh=function(e){if(e.tag===13){var t=Vt(e),n=mt(e,t);if(n!==null){var r=ke();Qe(n,e,t,r)}Wu(e,t)}};ph=function(){return $};mh=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Gs=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(k(90));Yd(r),$s(r,i)}}}break;case"textarea":Gd(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};th=zu;nh=Cn;var Gy={usingClientEntryPoint:!1,Events:[bi,jn,wo,Zd,eh,zu]},Nr={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qy={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ah(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{mo=ea.inject(Qy),nt=ea}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(t))throw Error(k(200));return Vy(e,t,null,n)};Le.createRoot=function(e,t){if(!Vu(e))throw Error(k(299));var n=!1,r="",i=zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bu(e,1,!1,null,null,n,!1,r,i),e[pt]=t.current,ri(e.nodeType===8?e.parentNode:e),new Hu(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=ah(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Cn(e)};Le.hydrate=function(e,t,n){if(!To(t))throw Error(k(200));return Po(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Vu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=zp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Up(t,null,e,1,n??null,i,!1,a,o),e[pt]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xo(t)};Le.render=function(e,t,n){if(!To(t))throw Error(k(200));return Po(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!To(e))throw Error(k(40));return e._reactRootContainer?(Cn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Le.unstable_batchedUpdates=zu;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!To(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Po(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Le})(Yv);var If=As;Rs.createRoot=If.createRoot,Rs.hydrateRoot=If.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},di.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const bf="popstate";function Xy(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return xl("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:eo(i)}return qy(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jy(){return Math.random().toString(36).substr(2,8)}function Cf(e,t){return{usr:e.state,key:e.key,idx:t}}function xl(e,t,n,r){return n===void 0&&(n=null),di({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wr(t):t,{state:n,key:t&&t.key||r||Jy()})}function eo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Ut.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(di({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=Ut.Pop;let E=c(),h=E==null?null:E-u;u=E,l&&l({action:s,location:g.location,delta:h})}function p(E,h){s=Ut.Push;let f=xl(g.location,E,h);n&&n(f,E),u=c()+1;let m=Cf(f,u),y=g.createHref(f);try{o.pushState(m,"",y)}catch{i.location.assign(y)}a&&l&&l({action:s,location:g.location,delta:1})}function v(E,h){s=Ut.Replace;let f=xl(g.location,E,h);n&&n(f,E),u=c();let m=Cf(f,u),y=g.createHref(f);o.replaceState(m,"",y),a&&l&&l({action:s,location:g.location,delta:0})}function w(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:eo(E);return se(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let g={get action(){return s},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bf,d),l=E,()=>{i.removeEventListener(bf,d),l=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let h=w(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go(E){return o.go(E)}};return g}var xf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xf||(xf={}));function Zy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?wr(t):t,i=$p(r.pathname||"/",n);if(i==null)return null;let a=Fp(e);e0(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=u0(a[s],d0(i));return o}function Fp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(se(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Fp(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:s0(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of jp(a.path))i(a,o,l)}),t}function jp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=jp(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function e0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:l0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const t0=/^:\w+$/,n0=3,r0=2,i0=1,a0=10,o0=-2,Tf=e=>e==="*";function s0(e,t){let n=e.split("/"),r=n.length;return n.some(Tf)&&(r+=o0),t&&(r+=r0),n.filter(i=>!Tf(i)).reduce((i,a)=>i+(t0.test(a)?n0:a===""?i0:a0),r)}function l0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function u0(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=c0({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;a.push({params:r,pathname:Kt([i,c.pathname]),pathnameBase:v0(Kt([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Kt([i,c.pathnameBase]))}return a}function c0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=f0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=s[d]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=h0(s[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function f0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function d0(e){try{return decodeURI(e)}catch(t){return Yu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function h0(e,t){try{return decodeURIComponent(e)}catch(n){return Yu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function $p(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Yu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function p0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?wr(e):e;return{pathname:n?n.startsWith("/")?n:m0(n,t):t,search:g0(r),hash:y0(i)}}function m0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=wr(e):(i=di({},e),se(!i.pathname||!i.pathname.includes("?"),gs("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),gs("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),gs("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let d=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=p0(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),v0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,y0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function w0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _0=["post","put","patch","delete"];[..._0];/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tl.apply(this,arguments)}function k0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const S0=typeof Object.is=="function"?Object.is:k0,{useState:E0,useEffect:I0,useLayoutEffect:b0,useDebugValue:C0}=Os;function x0(e,t,n){const r=t(),[{inst:i},a]=E0({inst:{value:r,getSnapshot:t}});return b0(()=>{i.value=r,i.getSnapshot=t,ys(i)&&a({inst:i})},[e,r,t]),I0(()=>(ys(i)&&a({inst:i}),e(()=>{ys(i)&&a({inst:i})})),[e]),C0(r),r}function ys(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!S0(n,r)}catch{return!0}}function T0(e,t,n){return t()}const P0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N0=!P0,O0=N0?T0:x0;"useSyncExternalStore"in Os&&(e=>e.useSyncExternalStore)(Os);const Hp=C.createContext(null),Vp=C.createContext(null),No=C.createContext(null),Oo=C.createContext(null),_r=C.createContext({outlet:null,matches:[]}),Yp=C.createContext(null);function R0(e,t){let{relative:n}=t===void 0?{}:t;xi()||se(!1);let{basename:r,navigator:i}=C.useContext(No),{hash:a,pathname:o,search:s}=Kp(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function xi(){return C.useContext(Oo)!=null}function Ro(){return xi()||se(!1),C.useContext(Oo).location}function A0(){xi()||se(!1);let{basename:e,navigator:t}=C.useContext(No),{matches:n}=C.useContext(_r),{pathname:r}=Ro(),i=JSON.stringify(Bp(n).map(s=>s.pathnameBase)),a=C.useRef(!1);return C.useEffect(()=>{a.current=!0}),C.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=Wp(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Kt([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Kp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(_r),{pathname:i}=Ro(),a=JSON.stringify(Bp(r).map(o=>o.pathnameBase));return C.useMemo(()=>Wp(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function L0(e,t){xi()||se(!1);let{navigator:n}=C.useContext(No),r=C.useContext(Vp),{matches:i}=C.useContext(_r),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=Ro(),u;if(t){var c;let g=typeof t=="string"?wr(t):t;s==="/"||(c=g.pathname)!=null&&c.startsWith(s)||se(!1),u=g}else u=l;let d=u.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",v=Zy(e,{pathname:p}),w=z0(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Kt([s,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?s:Kt([s,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r||void 0);return t&&w?C.createElement(Oo.Provider,{value:{location:Tl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ut.Pop}},w):w}function D0(){let e=B0(),t=w0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,a)}class M0 extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(_r.Provider,{value:this.props.routeContext},C.createElement(Yp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U0(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Hp);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(_r.Provider,{value:t},r)}function z0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||se(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,s)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||C.createElement(D0,null):null,c=t.concat(r.slice(0,s+1)),d=()=>C.createElement(U0,{match:o,routeContext:{outlet:a,matches:c}},l?u:o.route.element!==void 0?o.route.element:a);return n&&(o.route.errorElement||s===0)?C.createElement(M0,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Pf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Pf||(Pf={}));var to;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(to||(to={}));function F0(e){let t=C.useContext(Vp);return t||se(!1),t}function j0(e){let t=C.useContext(_r);return t||se(!1),t}function $0(e){let t=j0(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function B0(){var e;let t=C.useContext(Yp),n=F0(to.UseRouteError),r=$0(to.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Ea(e){se(!1)}function W0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:a,static:o=!1}=e;xi()&&se(!1);let s=t.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=wr(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:v="default"}=r,w=C.useMemo(()=>{let g=$p(u,s);return g==null?null:{pathname:g,search:c,hash:d,state:p,key:v}},[s,u,c,d,p,v]);return w==null?null:C.createElement(No.Provider,{value:l},C.createElement(Oo.Provider,{children:n,value:{location:w,navigationType:i}}))}function H0(e){let{children:t,location:n}=e,r=C.useContext(Hp),i=r&&!t?r.router.routes:Pl(t);return L0(i,n)}var Nf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Nf||(Nf={}));new Promise(()=>{});function Pl(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,Pl(r.props.children,t));return}r.type!==Ea&&se(!1),!r.props.index||!r.props.children||se(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Pl(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nl.apply(this,arguments)}function V0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Y0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function K0(e,t){return e.button===0&&(!t||t==="_self")&&!Y0(e)}const G0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Q0(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=Xy({window:r,v5Compat:!0}));let a=i.current,[o,s]=C.useState({action:a.action,location:a.location});return C.useLayoutEffect(()=>a.listen(s),[a]),C.createElement(W0,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gp=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,d=V0(t,G0),p,v=!1;if(X0&&typeof u=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)){p=u;let h=new URL(window.location.href),f=u.startsWith("//")?new URL(h.protocol+u):new URL(u);f.origin===h.origin?u=f.pathname+f.search+f.hash:v=!0}let w=R0(u,{relative:i}),g=J0(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function E(h){r&&r(h),h.defaultPrevented||g(h)}return C.createElement("a",Nl({},d,{href:p||w,onClick:v||a?r:E,ref:n,target:l}))});var Of;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Of||(Of={}));var Rf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rf||(Rf={}));function J0(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=A0(),l=Ro(),u=Kp(e,{relative:o});return C.useCallback(c=>{if(K0(c,n)){c.preventDefault();let d=r!==void 0?r:eo(l)===eo(u);s(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}function Af(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Af(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Af(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function no(e){return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},no(e)}function q0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z0(e,t,n){return t&&Lf(e.prototype,t),n&&Lf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ku(e,t){return t1(e)||r1(e,t)||Qp(e,t)||a1()}function Ti(e){return e1(e)||n1(e)||Qp(e)||i1()}function e1(e){if(Array.isArray(e))return Ol(e)}function t1(e){if(Array.isArray(e))return e}function n1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function r1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Qp(e,t){if(e){if(typeof e=="string")return Ol(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ol(e,t)}}function Ol(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Df=function(){},Gu={},Xp={},Jp=null,qp={mark:Df,measure:Df};try{typeof window<"u"&&(Gu=window),typeof document<"u"&&(Xp=document),typeof MutationObserver<"u"&&(Jp=MutationObserver),typeof performance<"u"&&(qp=performance)}catch{}var o1=Gu.navigator||{},Mf=o1.userAgent,Uf=Mf===void 0?"":Mf,qt=Gu,K=Xp,zf=Jp,ta=qp;qt.document;var Et=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Zp=~Uf.indexOf("MSIE")||~Uf.indexOf("Trident/"),na,ra,ia,aa,oa,gt="___FONT_AWESOME___",Rl=16,em="fa",tm="svg-inline--fa",xn="data-fa-i2svg",Al="data-fa-pseudo-element",s1="data-fa-pseudo-element-pending",Qu="data-prefix",Xu="data-icon",Ff="fontawesome-i2svg",l1="async",u1=["HTML","HEAD","STYLE","SCRIPT"],nm=function(){try{return!0}catch{return!1}}(),V="classic",ee="sharp",Ju=[V,ee];function Pi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var hi=Pi((na={},le(na,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(na,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),na)),pi=Pi((ra={},le(ra,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(ra,ee,{solid:"fass",regular:"fasr"}),ra)),mi=Pi((ia={},le(ia,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(ia,ee,{fass:"fa-solid",fasr:"fa-regular"}),ia)),c1=Pi((aa={},le(aa,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(aa,ee,{"fa-solid":"fass","fa-regular":"fasr"}),aa)),f1=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,rm="fa-layers-text",d1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,h1=Pi((oa={},le(oa,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(oa,ee,{900:"fass",400:"fasr"}),oa)),im=[1,2,3,4,5,6,7,8,9,10],p1=im.concat([11,12,13,14,15,16,17,18,19,20]),m1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vi=new Set;Object.keys(pi[V]).map(vi.add.bind(vi));Object.keys(pi[ee]).map(vi.add.bind(vi));var v1=[].concat(Ju,Ti(vi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gn.GROUP,gn.SWAP_OPACITY,gn.PRIMARY,gn.SECONDARY]).concat(im.map(function(e){return"".concat(e,"x")})).concat(p1.map(function(e){return"w-".concat(e)})),Vr=qt.FontAwesomeConfig||{};function g1(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function y1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var w1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];w1.forEach(function(e){var t=Ku(e,2),n=t[0],r=t[1],i=y1(g1(n));i!=null&&(Vr[r]=i)})}var am={styleDefault:"solid",familyDefault:"classic",cssPrefix:em,replacementClass:tm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vr.familyPrefix&&(Vr.cssPrefix=Vr.familyPrefix);var pr=x(x({},am),Vr);pr.autoReplaceSvg||(pr.observeMutations=!1);var O={};Object.keys(am).forEach(function(e){Object.defineProperty(O,e,{enumerable:!0,set:function(n){pr[e]=n,Yr.forEach(function(r){return r(O)})},get:function(){return pr[e]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(t){pr.cssPrefix=t,Yr.forEach(function(n){return n(O)})},get:function(){return pr.cssPrefix}});qt.FontAwesomeConfig=O;var Yr=[];function _1(e){return Yr.push(e),function(){Yr.splice(Yr.indexOf(e),1)}}var bt=Rl,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function k1(e){if(!(!e||!Et)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var S1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gi(){for(var e=12,t="";e-- >0;)t+=S1[Math.random()*62|0];return t}function kr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qu(e){return e.classList?kr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function om(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(om(e[n]),'" ')},"").trim()}function Ao(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Zu(e){return e.size!==tt.size||e.x!==tt.x||e.y!==tt.y||e.rotate!==tt.rotate||e.flipX||e.flipY}function I1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function b1(e){var t=e.transform,n=e.width,r=n===void 0?Rl:n,i=e.height,a=i===void 0?Rl:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Zp?l+="translate(".concat(t.x/bt-r/2,"em, ").concat(t.y/bt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/bt,"em), calc(-50% + ").concat(t.y/bt,"em)) "):l+="translate(".concat(t.x/bt,"em, ").concat(t.y/bt,"em) "),l+="scale(".concat(t.size/bt*(t.flipX?-1:1),", ").concat(t.size/bt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var C1=`:root, :host {
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
}`;function sm(){var e=em,t=tm,n=O.cssPrefix,r=O.replacementClass,i=C1;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var jf=!1;function ws(){O.autoAddCss&&!jf&&(k1(sm()),jf=!0)}var x1={mixout:function(){return{dom:{css:sm,insertCss:ws}}},hooks:function(){return{beforeDOMElementCreation:function(){ws()},beforeI2svg:function(){ws()}}}},yt=qt||{};yt[gt]||(yt[gt]={});yt[gt].styles||(yt[gt].styles={});yt[gt].hooks||(yt[gt].hooks={});yt[gt].shims||(yt[gt].shims=[]);var Ke=yt[gt],lm=[],T1=function e(){K.removeEventListener("DOMContentLoaded",e),ro=1,lm.map(function(t){return t()})},ro=!1;Et&&(ro=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),ro||K.addEventListener("DOMContentLoaded",T1));function P1(e){Et&&(ro?setTimeout(e,0):lm.push(e))}function Ni(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?om(e):"<".concat(t," ").concat(E1(r),">").concat(a.map(Ni).join(""),"</").concat(t,">")}function $f(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var N1=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},_s=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?N1(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function O1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ll(e){var t=O1(e);return t.length===1?t[0].toString(16):null}function R1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Bf(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Bf(t);typeof Ke.hooks.addPack=="function"&&!i?Ke.hooks.addPack(e,Bf(t)):Ke.styles[e]=x(x({},Ke.styles[e]||{}),a),e==="fas"&&Dl("fa",t)}var sa,la,ua,Kn=Ke.styles,A1=Ke.shims,L1=(sa={},le(sa,V,Object.values(mi[V])),le(sa,ee,Object.values(mi[ee])),sa),ec=null,um={},cm={},fm={},dm={},hm={},D1=(la={},le(la,V,Object.keys(hi[V])),le(la,ee,Object.keys(hi[ee])),la);function M1(e){return~v1.indexOf(e)}function U1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!M1(i)?i:null}var pm=function(){var t=function(a){return _s(Kn,function(o,s,l){return o[l]=_s(s,a,{}),o},{})};um=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),cm=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),hm=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Kn||O.autoFetchSvg,r=_s(A1,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});fm=r.names,dm=r.unicodes,ec=Lo(O.styleDefault,{family:O.familyDefault})};_1(function(e){ec=Lo(e.styleDefault,{family:O.familyDefault})});pm();function tc(e,t){return(um[e]||{})[t]}function z1(e,t){return(cm[e]||{})[t]}function yn(e,t){return(hm[e]||{})[t]}function mm(e){return fm[e]||{prefix:null,iconName:null}}function F1(e){var t=dm[e],n=tc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zt(){return ec}var nc=function(){return{prefix:null,iconName:null,rest:[]}};function Lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,i=hi[r][e],a=pi[r][e]||pi[r][i],o=e in Ke.styles?e:null;return a||o||null}var Wf=(ua={},le(ua,V,Object.keys(mi[V])),le(ua,ee,Object.keys(mi[ee])),ua);function Do(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,V,"".concat(O.cssPrefix,"-").concat(V)),le(t,ee,"".concat(O.cssPrefix,"-").concat(ee)),t),o=null,s=V;(e.includes(a[V])||e.some(function(u){return Wf[V].includes(u)}))&&(s=V),(e.includes(a[ee])||e.some(function(u){return Wf[ee].includes(u)}))&&(s=ee);var l=e.reduce(function(u,c){var d=U1(O.cssPrefix,c);if(Kn[c]?(c=L1[s].includes(c)?c1[s][c]:c,o=c,u.prefix=c):D1[s].indexOf(c)>-1?(o=c,u.prefix=Lo(c,{family:s})):d?u.iconName=d:c!==O.replacementClass&&c!==a[V]&&c!==a[ee]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?mm(u.iconName):{},v=yn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Kn.far&&Kn.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},nc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ee&&(Kn.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=yn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Zt()||"fas"),l}var j1=function(){function e(){q0(this,e),this.definitions={}}return Z0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),o[s]),Dl(s,o[s]);var l=mi[V][s];l&&Dl(l,o[s]),pm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),Hf=[],Gn={},rr={},$1=Object.keys(rr);function B1(e,t){var n=t.mixoutsTo;return Hf=e,Gn={},Object.keys(rr).forEach(function(r){$1.indexOf(r)===-1&&delete rr[r]}),Hf.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),no(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Gn[o]||(Gn[o]=[]),Gn[o].push(a[o])})}r.provides&&r.provides(rr)}),n}function Ml(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Gn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Gn[e]||[];i.forEach(function(a){a.apply(null,n)})}function wt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rr[e]?rr[e].apply(null,t):void 0}function Ul(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Zt();if(t)return t=yn(n,t)||t,$f(vm.definitions,n,t)||$f(Ke.styles,n,t)}var vm=new j1,W1=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,Tn("noAuto")},H1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(Tn("beforeI2svg",t),wt("pseudoElements2svg",t),wt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,P1(function(){Y1({autoReplaceSvgRoot:n}),Tn("watch",t)})}},V1={icon:function(t){if(t===null)return null;if(no(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Lo(t[0]);return{prefix:r,iconName:yn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(O.cssPrefix,"-"))>-1||t.match(f1))){var i=Do(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Zt(),iconName:yn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Zt();return{prefix:a,iconName:yn(a,t)||t}}}},Me={noAuto:W1,config:O,dom:H1,parse:V1,library:vm,findIconDefinition:Ul,toHtml:Ni},Y1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(Ke.styles).length>0||O.autoFetchSvg)&&Et&&O.autoReplaceSvg&&Me.dom.i2svg({node:r})};function Mo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ni(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Et){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function K1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Zu(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Ao(x(x({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function G1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(O.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},i),{},{id:o}),children:r}]}]}function rc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,v=p===void 0?!1:p,w=r.found?r:n,g=w.width,E=w.height,h=i==="fak",f=[O.replacementClass,a?"".concat(O.cssPrefix,"-").concat(a):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),m={children:[],attributes:x(x({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(E)})},y=h&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/E*16*.0625,"em")}:{};v&&(m.attributes[xn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||gi())},children:[l]}),delete m.attributes.title);var S=x(x({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:x(x({},y),d.styles)}),I=r.found&&n.found?wt("generateAbstractMask",S)||{children:[],attributes:{}}:wt("generateAbstractIcon",S)||{children:[],attributes:{}},b=I.children,N=I.attributes;return S.children=b,S.attributes=N,s?G1(S):K1(S)}function Vf(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=x(x(x({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[xn]="");var c=x({},o.styles);Zu(i)&&(c.transform=b1({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ao(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function Q1(e){var t=e.content,n=e.title,r=e.extra,i=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ao(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ks=Ke.styles;function zl(e){var t=e[0],n=e[1],r=e.slice(4),i=Ku(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(gn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(gn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(gn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var X1={found:!1,width:512,height:512};function J1(e,t){!nm&&!O.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Fl(e,t){var n=t;return t==="fa"&&O.styleDefault!==null&&(t=Zt()),new Promise(function(r,i){if(wt("missingIconAbstract"),n==="fa"){var a=mm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ks[t]&&ks[t][e]){var o=ks[t][e];return r(zl(o))}J1(e,t),r(x(x({},X1),{},{icon:O.showMissingIcons&&e?wt("missingIconAbstract")||{}:{}}))})}var Yf=function(){},jl=O.measurePerformance&&ta&&ta.mark&&ta.measure?ta:{mark:Yf,measure:Yf},Dr='FA "6.3.0"',q1=function(t){return jl.mark("".concat(Dr," ").concat(t," begins")),function(){return gm(t)}},gm=function(t){jl.mark("".concat(Dr," ").concat(t," ends")),jl.measure("".concat(Dr," ").concat(t),"".concat(Dr," ").concat(t," begins"),"".concat(Dr," ").concat(t," ends"))},ic={begin:q1,end:gm},Ia=function(){};function Kf(e){var t=e.getAttribute?e.getAttribute(xn):null;return typeof t=="string"}function Z1(e){var t=e.getAttribute?e.getAttribute(Qu):null,n=e.getAttribute?e.getAttribute(Xu):null;return t&&n}function ew(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function tw(){if(O.autoReplaceSvg===!0)return ba.replace;var e=ba[O.autoReplaceSvg];return e||ba.replace}function nw(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function rw(e){return K.createElement(e)}function ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nw:rw:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(ym(o,{ceFn:r}))}),i}function iw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ba={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(ym(i),n)}),n.getAttribute(xn)===null&&O.keepOriginalSource){var r=K.createComment(iw(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qu(n).indexOf(O.replacementClass))return ba.replace(t);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===O.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Ni(s)}).join(`
`);n.setAttribute(xn,""),n.innerHTML=o}};function Gf(e){e()}function wm(e,t){var n=typeof t=="function"?t:Ia;if(e.length===0)n();else{var r=Gf;O.mutateApproach===l1&&(r=qt.requestAnimationFrame||Gf),r(function(){var i=tw(),a=ic.begin("mutate");e.map(i),a(),n()})}}var ac=!1;function _m(){ac=!0}function $l(){ac=!1}var io=null;function Qf(e){if(zf&&O.observeMutations){var t=e.treeCallback,n=t===void 0?Ia:t,r=e.nodeCallback,i=r===void 0?Ia:r,a=e.pseudoElementsCallback,o=a===void 0?Ia:a,s=e.observeMutationsRoot,l=s===void 0?K:s;io=new zf(function(u){if(!ac){var c=Zt();kr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Kf(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Kf(d.target)&&~m1.indexOf(d.attributeName))if(d.attributeName==="class"&&Z1(d.target)){var p=Do(qu(d.target)),v=p.prefix,w=p.iconName;d.target.setAttribute(Qu,v||c),w&&d.target.setAttribute(Xu,w)}else ew(d.target)&&i(d.target)})}}),Et&&io.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function aw(){io&&io.disconnect()}function ow(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function sw(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Do(qu(e));return i.prefix||(i.prefix=Zt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=z1(i.prefix,e.innerText)||tc(i.prefix,Ll(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function lw(e){var t=kr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return O.autoA11y&&(n?t["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||gi()):(t["aria-hidden"]="true",t.focusable="false")),t}function uw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=sw(e),r=n.iconName,i=n.prefix,a=n.rest,o=lw(e),s=Ml("parseNodeAttributes",{},e),l=t.styleParser?ow(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var cw=Ke.styles;function km(e){var t=O.autoReplaceSvg==="nest"?Xf(e,{styleParser:!1}):Xf(e);return~t.extra.classes.indexOf(rm)?wt("generateLayersText",e,t):wt("generateSvgReplacementMutation",e,t)}var en=new Set;Ju.map(function(e){en.add("fa-".concat(e))});Object.keys(hi[V]).map(en.add.bind(en));Object.keys(hi[ee]).map(en.add.bind(en));en=Ti(en);function Jf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();var n=K.documentElement.classList,r=function(d){return n.add("".concat(Ff,"-").concat(d))},i=function(d){return n.remove("".concat(Ff,"-").concat(d))},a=O.autoFetchSvg?en:Ju.map(function(c){return"fa-".concat(c)}).concat(Object.keys(cw));a.includes("fa")||a.push("fa");var o=[".".concat(rm,":not([").concat(xn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(xn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=kr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ic.begin("onTree"),u=s.reduce(function(c,d){try{var p=km(d);p&&c.push(p)}catch(v){nm||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){wm(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function fw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;km(e).then(function(n){n&&wm([n],t)})}function dw(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ul(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ul(i||{})),e(r,x(x({},n),{},{mask:i}))}}var hw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?tt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,v=n.titleId,w=v===void 0?null:v,g=n.classes,E=g===void 0?[]:g,h=n.attributes,f=h===void 0?{}:h,m=n.styles,y=m===void 0?{}:m;if(t){var S=t.prefix,I=t.iconName,b=t.icon;return Mo(x({type:"icon"},t),function(){return Tn("beforeDOMElementCreation",{iconDefinition:t,params:n}),O.autoA11y&&(p?f["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(w||gi()):(f["aria-hidden"]="true",f.focusable="false")),rc({icons:{main:zl(b),mask:l?zl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:I,transform:x(x({},tt),i),symbol:o,title:p,maskId:c,titleId:w,extra:{attributes:f,styles:y,classes:E}})})}},pw={mixout:function(){return{icon:dw(hw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Jf,n.nodeCallback=fw,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return Jf(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(v,w){Promise.all([Fl(i,s),c.iconName?Fl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var E=Ku(g,2),h=E[0],f=E[1];v([n,rc({icons:{main:h,mask:f},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Ao(s);l.length>0&&(i.style=l);var u;return Zu(o)&&(u=wt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},mw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Mo({type:"layer"},function(){Tn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(Ti(a)).join(" ")},children:o}]})}}}},vw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Mo({type:"counter",content:n},function(){return Tn("beforeDOMElementCreation",{content:n,params:r}),Q1({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(Ti(s))}})})}}}},gw={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?tt:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return Mo({type:"text",content:n},function(){return Tn("beforeDOMElementCreation",{content:n,params:r}),Vf({content:n,transform:x(x({},tt),a),title:s,extra:{attributes:d,styles:v,classes:["".concat(O.cssPrefix,"-layers-text")].concat(Ti(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Zp){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Vf({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},yw=new RegExp('"',"ug"),qf=[1105920,1112319];function ww(e){var t=e.replace(yw,""),n=R1(t,0),r=n>=qf[0]&&n<=qf[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ll(i?t[0]:t),isSecondary:r||i}}function Zf(e,t){var n="".concat(s1).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=kr(e.children),o=a.filter(function(b){return b.getAttribute(Al)===t})[0],s=qt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(d1),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ee:V,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pi[p][l[2].toLowerCase()]:h1[p][u],w=ww(d),g=w.value,E=w.isSecondary,h=l[0].startsWith("FontAwesome"),f=tc(v,g),m=f;if(h){var y=F1(g);y.iconName&&y.prefix&&(f=y.iconName,v=y.prefix)}if(f&&!E&&(!o||o.getAttribute(Qu)!==v||o.getAttribute(Xu)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var S=uw(),I=S.extra;I.attributes[Al]=t,Fl(f,v).then(function(b){var N=rc(x(x({},S),{},{icons:{main:b,mask:nc()},prefix:v,iconName:m,extra:I,watchable:!0})),z=K.createElement("svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=N.map(function(A){return Ni(A)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function _w(e){return Promise.all([Zf(e,"::before"),Zf(e,"::after")])}function kw(e){return e.parentNode!==document.head&&!~u1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Al)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ed(e){if(Et)return new Promise(function(t,n){var r=kr(e.querySelectorAll("*")).filter(kw).map(_w),i=ic.begin("searchPseudoElements");_m(),Promise.all(r).then(function(){i(),$l(),t()}).catch(function(){i(),$l(),n()})})}var Sw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ed,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;O.searchPseudoElements&&ed(i)}}},td=!1,Ew={mixout:function(){return{dom:{unwatch:function(){_m(),td=!0}}}},hooks:function(){return{bootstrap:function(){Qf(Ml("mutationObserverCallbacks",{}))},noAuto:function(){aw()},watch:function(n){var r=n.observeMutationsRoot;td?$l():Qf(Ml("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},nd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Iw={mixout:function(){return{parse:{transform:function(n){return nd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=nd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:x({},v.outer),children:[{tag:"g",attributes:x({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),v.path)}]}]}}}},Ss={x:0,y:0,width:"100%",height:"100%"};function rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function bw(e){return e.tag==="g"?e.children:[e]}var Cw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Do(i.split(" ").map(function(o){return o.trim()})):nc();return a.prefix||(a.prefix=Zt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,p=o.icon,v=I1({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:x(x({},Ss),{},{fill:"white"})},g=c.children?{children:c.children.map(rd)}:{},E={tag:"g",attributes:x({},v.inner),children:[rd(x({tag:c.tag,attributes:x(x({},c.attributes),v.path)},g))]},h={tag:"g",attributes:x({},v.outer),children:[E]},f="mask-".concat(s||gi()),m="clip-".concat(s||gi()),y={tag:"mask",attributes:x(x({},Ss),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,h]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:bw(p)},y]};return r.push(S,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(f,")")},Ss)}),{children:r,attributes:i}}}},xw={provides:function(t){var n=!1;qt.matchMedia&&(n=qt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Tw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Pw=[x1,pw,mw,vw,gw,Sw,Ew,Iw,Cw,xw,Tw];B1(Pw,{mixoutsTo:Me});Me.noAuto;Me.config;Me.library;Me.dom;var Bl=Me.parse;Me.findIconDefinition;Me.toHtml;var Nw=Me.icon;Me.layer;Me.text;Me.counter;var D={},Ow={get exports(){return D},set exports(e){D=e}},Rw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Aw=Rw,Lw=Aw;function Sm(){}function Em(){}Em.resetWarningCache=Sm;var Dw=function(){function e(r,i,a,o,s,l){if(l!==Lw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Em,resetWarningCache:Sm};return n.PropTypes=n,n};Ow.exports=Dw();function id(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function zt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?id(Object(n),!0).forEach(function(r){Qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):id(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ao(e){return ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ao(e)}function Qn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Uw(e,t){if(e==null)return{};var n=Mw(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wl(e){return zw(e)||Fw(e)||jw(e)||$w()}function zw(e){if(Array.isArray(e))return Hl(e)}function Fw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jw(e,t){if(e){if(typeof e=="string")return Hl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hl(e,t)}}function Hl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $w(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bw(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,v=e.inverse,w=e.border,g=e.listItem,E=e.flip,h=e.size,f=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":w,"fa-li":g,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Qn(t,"fa-".concat(h),typeof h<"u"&&h!==null),Qn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Qn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Qn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}function Ww(e){return e=e-0,e===e}function Im(e){return Ww(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Hw=["style"];function Vw(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Yw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Im(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[Vw(i)]=a:t[i]=a,t},{})}function bm(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return bm(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Yw(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Im(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Uw(n,Hw);return i.attrs.style=zt(zt({},i.attrs.style),o),e.apply(void 0,[t.tag,zt(zt({},i.attrs),s)].concat(Wl(r)))}var Cm=!1;try{Cm=!0}catch{}function Kw(){if(!Cm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ad(e){if(e&&ao(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bl.icon)return Bl.icon(e);if(e===null)return null;if(e&&ao(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Es(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qn({},e,t):{}}var tn=po.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=ad(n),c=Es("classes",[].concat(Wl(Bw(e)),Wl(a.split(" ")))),d=Es("transform",typeof e.transform=="string"?Bl.transform(e.transform):e.transform),p=Es("mask",ad(r)),v=Nw(u,zt(zt(zt(zt({},c),d),p),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!v)return Kw("Could not find icon",u),null;var w=v.abstract,g={ref:t};return Object.keys(e).forEach(function(E){tn.defaultProps.hasOwnProperty(E)||(g[E]=e[E])}),Gw(w[0],g)});tn.displayName="FontAwesomeIcon";tn.propTypes={beat:D.bool,border:D.bool,beatFade:D.bool,bounce:D.bool,className:D.string,fade:D.bool,flash:D.bool,mask:D.oneOfType([D.object,D.array,D.string]),maskId:D.string,fixedWidth:D.bool,inverse:D.bool,flip:D.oneOf([!0,!1,"horizontal","vertical","both"]),icon:D.oneOfType([D.object,D.array,D.string]),listItem:D.bool,pull:D.oneOf(["right","left"]),pulse:D.bool,rotation:D.oneOf([0,90,180,270]),shake:D.bool,size:D.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:D.bool,spinPulse:D.bool,spinReverse:D.bool,symbol:D.oneOfType([D.bool,D.string]),title:D.string,titleId:D.string,transform:D.oneOfType([D.string,D.object]),swapOpacity:D.bool};tn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Gw=bm.bind(null,po.createElement),Qw={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Xw={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},xm={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]};const Tm="/spotify-form/assets/icons8-google-27-b244f71f.svg";/**
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
 */const Pm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Jw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,d=(a&3)<<4|s>>4;let p=(s&15)<<2|u>>6,v=u&63;l||(v=64,o||(p=64)),r.push(n[c],n[d],n[p],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Jw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||d==null)throw new qw;const p=a<<2|s>>4;if(r.push(p),u!==64){const v=s<<4&240|u>>2;if(r.push(v),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zw=function(e){const t=Pm(e);return Nm.encodeByteArray(t,!0)},Om=function(e){return Zw(e).replace(/\./g,"")},Rm=function(e){try{return Nm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function e_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const t_=()=>e_().__FIREBASE_DEFAULTS__,n_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},r_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rm(e[1]);return t&&JSON.parse(t)},oc=()=>{try{return t_()||n_()||r_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},i_=e=>{var t,n;return(n=(t=oc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},a_=()=>{var e;return(e=oc())===null||e===void 0?void 0:e.config},Am=e=>{var t;return(t=oc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class o_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function l_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function u_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c_(){const e=we();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function f_(){try{return typeof indexedDB=="object"}catch{return!1}}function d_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const h_="FirebaseError";class on extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=h_,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?p_(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new on(i,s,r)}}function p_(e,t){return e.replace(m_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const m_=/\{\$([^}]+)}/g;function v_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(od(a)&&od(o)){if(!oo(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function od(e){return e!==null&&typeof e=="object"}/**
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
 */function Ri(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function g_(e,t){const n=new y_(e,t);return n.subscribe.bind(n)}class y_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");w_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Is(){}/**
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
 */function Sr(e){return e&&e._delegate?e._delegate:e}class mr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const hn="[DEFAULT]";/**
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
 */class __{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new o_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(S_(t))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hn){return this.instances.has(t)}getOptions(t=hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=hn){return this.component?this.component.multipleInstances?t:hn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k_(e){return e===hn?void 0:e}function S_(e){return e.instantiationMode==="EAGER"}/**
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
 */class E_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new __(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const I_={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},b_=B.INFO,C_={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},x_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=C_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lm{constructor(t){this.name=t,this._logLevel=b_,this._logHandler=x_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?I_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const T_=(e,t)=>t.some(n=>e instanceof n);let sd,ld;function P_(){return sd||(sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N_(){return ld||(ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dm=new WeakMap,Vl=new WeakMap,Mm=new WeakMap,bs=new WeakMap,sc=new WeakMap;function O_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Gt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Dm.set(n,e)}).catch(()=>{}),sc.set(t,e),t}function R_(e){if(Vl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Vl.set(e,t)}let Yl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Mm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function A_(e){Yl=e(Yl)}function L_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cs(this),t,...n);return Mm.set(r,t.sort?t.sort():[t]),Gt(r)}:N_().includes(e)?function(...t){return e.apply(Cs(this),t),Gt(Dm.get(this))}:function(...t){return Gt(e.apply(Cs(this),t))}}function D_(e){return typeof e=="function"?L_(e):(e instanceof IDBTransaction&&R_(e),T_(e,P_())?new Proxy(e,Yl):e)}function Gt(e){if(e instanceof IDBRequest)return O_(e);if(bs.has(e))return bs.get(e);const t=D_(e);return t!==e&&(bs.set(e,t),sc.set(t,e)),t}const Cs=e=>sc.get(e);function M_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Gt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gt(o.result),l.oldVersion,l.newVersion,Gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const U_=["get","getKey","getAll","getAllKeys","count"],z_=["put","add","delete","clear"],xs=new Map;function ud(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xs.get(t))return xs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=z_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||U_.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return xs.set(t,a),a}A_(e=>({...e,get:(t,n,r)=>ud(t,n)||e.get(t,n,r),has:(t,n)=>!!ud(t,n)||e.has(t,n)}));/**
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
 */class F_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function j_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kl="@firebase/app",cd="0.9.4";/**
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
 */const Pn=new Lm("@firebase/app"),$_="@firebase/app-compat",B_="@firebase/analytics-compat",W_="@firebase/analytics",H_="@firebase/app-check-compat",V_="@firebase/app-check",Y_="@firebase/auth",K_="@firebase/auth-compat",G_="@firebase/database",Q_="@firebase/database-compat",X_="@firebase/functions",J_="@firebase/functions-compat",q_="@firebase/installations",Z_="@firebase/installations-compat",ek="@firebase/messaging",tk="@firebase/messaging-compat",nk="@firebase/performance",rk="@firebase/performance-compat",ik="@firebase/remote-config",ak="@firebase/remote-config-compat",ok="@firebase/storage",sk="@firebase/storage-compat",lk="@firebase/firestore",uk="@firebase/firestore-compat",ck="firebase",fk="9.17.2";/**
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
 */const Gl="[DEFAULT]",dk={[Kl]:"fire-core",[$_]:"fire-core-compat",[W_]:"fire-analytics",[B_]:"fire-analytics-compat",[V_]:"fire-app-check",[H_]:"fire-app-check-compat",[Y_]:"fire-auth",[K_]:"fire-auth-compat",[G_]:"fire-rtdb",[Q_]:"fire-rtdb-compat",[X_]:"fire-fn",[J_]:"fire-fn-compat",[q_]:"fire-iid",[Z_]:"fire-iid-compat",[ek]:"fire-fcm",[tk]:"fire-fcm-compat",[nk]:"fire-perf",[rk]:"fire-perf-compat",[ik]:"fire-rc",[ak]:"fire-rc-compat",[ok]:"fire-gcs",[sk]:"fire-gcs-compat",[lk]:"fire-fst",[uk]:"fire-fst-compat","fire-js":"fire-js",[ck]:"fire-js-all"};/**
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
 */const so=new Map,Ql=new Map;function hk(e,t){try{e.container.addComponent(t)}catch(n){Pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yi(e){const t=e.name;if(Ql.has(t))return Pn.debug(`There were multiple attempts to register component ${t}.`),!1;Ql.set(t,e);for(const n of so.values())hk(n,e);return!0}function Um(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const pk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new Oi("app","Firebase",pk);/**
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
 */class mk{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Uo=fk;function zm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Qt.create("bad-app-name",{appName:String(i)});if(n||(n=a_()),!n)throw Qt.create("no-options");const a=so.get(i);if(a){if(oo(n,a.options)&&oo(r,a.config))return a;throw Qt.create("duplicate-app",{appName:i})}const o=new E_(i);for(const l of Ql.values())o.addComponent(l);const s=new mk(n,r,o);return so.set(i,s),s}function vk(e=Gl){const t=so.get(e);if(!t&&e===Gl)return zm();if(!t)throw Qt.create("no-app",{appName:e});return t}function ir(e,t,n){var r;let i=(r=dk[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pn.warn(s.join(" "));return}yi(new mr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const gk="firebase-heartbeat-database",yk=1,wi="firebase-heartbeat-store";let Ts=null;function Fm(){return Ts||(Ts=M_(gk,yk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wi)}}}).catch(e=>{throw Qt.create("idb-open",{originalErrorMessage:e.message})})),Ts}async function wk(e){try{return(await Fm()).transaction(wi).objectStore(wi).get(jm(e))}catch(t){if(t instanceof on)Pn.warn(t.message);else{const n=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(n.message)}}}async function fd(e,t){try{const r=(await Fm()).transaction(wi,"readwrite");return await r.objectStore(wi).put(t,jm(e)),r.done}catch(n){if(n instanceof on)Pn.warn(n.message);else{const r=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function jm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const _k=1024,kk=30*24*60*60*1e3;class Sk{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ik(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=kk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dd(),{heartbeatsToSend:n,unsentEntries:r}=Ek(this._heartbeatsCache.heartbeats),i=Om(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dd(){return new Date().toISOString().substring(0,10)}function Ek(e,t=_k){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),hd(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ik{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f_()?d_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function hd(e){return Om(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function bk(e){yi(new mr("platform-logger",t=>new F_(t),"PRIVATE")),yi(new mr("heartbeat",t=>new Sk(t),"PRIVATE")),ir(Kl,cd,e),ir(Kl,cd,"esm2017"),ir("fire-js","")}bk("");function lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $m(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ck=$m,Bm=new Oi("auth","Firebase",$m());/**
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
 */const pd=new Lm("@firebase/auth");function Ca(e,...t){pd.logLevel<=B.ERROR&&pd.error(`Auth (${Uo}): ${e}`,...t)}/**
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
 */function _t(e,...t){throw uc(e,...t)}function it(e,...t){return uc(e,...t)}function xk(e,t,n){const r=Object.assign(Object.assign({},Ck()),{[t]:n});return new Oi("auth","Firebase",r).create(t,{appName:e.name})}function uc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Bm.create(e,...t)}function R(e,t,...n){if(!e)throw uc(t,...n)}function ct(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ca(t),new Error(t)}function kt(e,t){e||ct(t)}/**
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
 */const md=new Map;function ft(e){kt(e instanceof Function,"Expected a class definition");let t=md.get(e);return t?(kt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,md.set(e,t),t)}/**
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
 */function Tk(e,t){const n=Um(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(oo(a,t??{}))return i;_t(i,"already-initialized")}return n.initialize({options:t})}function Pk(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Xl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Nk(){return vd()==="http:"||vd()==="https:"}function vd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Ok(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nk()||l_()||"connection"in navigator)?navigator.onLine:!0}function Rk(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ai{constructor(t,n){this.shortDelay=t,this.longDelay=n,kt(n>t,"Short delay should be less than long delay!"),this.isMobile=s_()||u_()}get(){return Ok()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cc(e,t){kt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Wm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ak={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Lk=new Ai(3e4,6e4);function Hm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zo(e,t,n,r,i={}){return Vm(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Ri(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Wm.fetch()(Km(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Vm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ak),t);try{const i=new Dk(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw ca(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ca(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ca(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xk(e,c,u);_t(e,c)}}catch(i){if(i instanceof on)throw i;_t(e,"internal-error",{message:String(i)})}}async function Ym(e,t,n,r,i={}){const a=await zo(e,t,n,r,i);return"mfaPendingCredential"in a&&_t(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Km(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?cc(e.config,i):`${e.config.apiScheme}://${i}`}class Dk{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Lk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ca(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Mk(e,t){return zo(e,"POST","/v1/accounts:delete",t)}async function Uk(e,t){return zo(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Kr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zk(e,t=!1){const n=Sr(e),r=await n.getIdToken(t),i=fc(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Kr(Ps(i.auth_time)),issuedAtTime:Kr(Ps(i.iat)),expirationTime:Kr(Ps(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ps(e){return Number(e)*1e3}function fc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rm(n);return i?JSON.parse(i):(Ca("Failed to decode base64 JWT payload"),null)}catch(i){return Ca("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fk(e){const t=fc(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function _i(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof on&&jk(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function jk({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class $k{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kr(this.lastLoginAt),this.creationTime=Kr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await _i(e,Uk(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?Hk(a.providerUserInfo):[],s=Wk(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Gm(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Bk(e){const t=Sr(e);await lo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Wk(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Hk(e){return e.map(t=>{var{providerId:n}=t,r=lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Vk(e,t){const n=await Vm(e,{},async()=>{const r=Ri({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Km(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Wm.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Fk(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await Vk(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new ki;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(R(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function Ct(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class kn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $k(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Gm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await _i(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return zk(this,t)}reload(){return Bk(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new kn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await _i(this,Mk(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(s=n.tenantId)!==null&&s!==void 0?s:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:I,stsTokenManager:b}=n;R(m&&b,t,"internal-error");const N=ki.fromJSON(this.name,b);R(typeof m=="string",t,"internal-error"),Ct(d,t.name),Ct(p,t.name),R(typeof y=="boolean",t,"internal-error"),R(typeof S=="boolean",t,"internal-error"),Ct(v,t.name),Ct(w,t.name),Ct(g,t.name),Ct(E,t.name),Ct(h,t.name),Ct(f,t.name);const z=new kn({uid:m,auth:t,email:p,emailVerified:y,displayName:d,isAnonymous:S,photoURL:w,phoneNumber:v,tenantId:g,stsTokenManager:N,createdAt:h,lastLoginAt:f});return I&&Array.isArray(I)&&(z.providerData=I.map(A=>Object.assign({},A))),E&&(z._redirectEventId=E),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new ki;i.updateFromServerResponse(n);const a=new kn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await lo(a),a}}/**
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
 */class Qm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Qm.type="NONE";const gd=Qm;/**
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
 */function xa(e,t,n){return`firebase:${e}:${t}:${n}`}class ar{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,a),this.fullPersistenceKey=xa("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?kn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ar(ft(gd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||ft(gd);const o=xa(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const d=kn._fromJSON(t,c);u!==a&&(s=d),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new ar(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new ar(a,t,r))}}/**
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
 */function yd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ev(t))return"Blackberry";if(tv(t))return"Webos";if(dc(t))return"Safari";if((t.includes("chrome/")||Jm(t))&&!t.includes("edge/"))return"Chrome";if(Zm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xm(e=we()){return/firefox\//i.test(e)}function dc(e=we()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jm(e=we()){return/crios\//i.test(e)}function qm(e=we()){return/iemobile/i.test(e)}function Zm(e=we()){return/android/i.test(e)}function ev(e=we()){return/blackberry/i.test(e)}function tv(e=we()){return/webos/i.test(e)}function Fo(e=we()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Yk(e=we()){var t;return Fo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Kk(){return c_()&&document.documentMode===10}function nv(e=we()){return Fo(e)||Zm(e)||tv(e)||ev(e)||/windows phone/i.test(e)||qm(e)}function Gk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rv(e,t=[]){let n;switch(e){case"Browser":n=yd(we());break;case"Worker":n=`${yd(we())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Uo}/${r}`}/**
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
 */class Qk{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Xk{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wd(this),this.idTokenSubscription=new wd(this),this.beforeStateQueue=new Qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ar.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await lo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Rk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Sr(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Oi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ft(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function jo(e){return Sr(e)}class wd{constructor(t){this.auth=t,this.observer=null,this.addObserver=g_(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Jk(e,t,n){const r=jo(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=iv(t),{host:o,port:s}=qk(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Zk()}function iv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qk(e){const t=iv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:_d(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:_d(o)}}}function _d(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Zk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class av{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(t){return ct("not implemented")}_linkToIdToken(t,n){return ct("not implemented")}_getReauthenticationResolver(t){return ct("not implemented")}}/**
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
 */async function or(e,t){return Ym(e,"POST","/v1/accounts:signInWithIdp",Hm(e,t))}/**
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
 */const eS="http://localhost";class Nn extends av{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Nn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=lc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Nn(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return or(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,or(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,or(t,n)}buildRequest(){const t={requestUri:eS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ri(n)}return t}}/**
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
 */class ov{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Li extends ov{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ot extends Li{constructor(){super("facebook.com")}static credential(t){return Nn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class At extends Li{constructor(){super("github.com")}static credential(t){return Nn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
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
 */class Lt extends Li{constructor(){super("twitter.com")}static credential(t,n){return Nn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
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
 */async function tS(e,t){return Ym(e,"POST","/v1/accounts:signUp",Hm(e,t))}/**
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
 */class On{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await kn._fromIdTokenResponse(t,r,i),o=kd(r);return new On({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=kd(r);return new On({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function kd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class uo extends on{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uo.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new uo(t,n,r,i)}}function sv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?uo._fromErrorAndOperation(e,a,t,r):a})}async function nS(e,t,n=!1){const r=await _i(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return On._forOperation(e,"link",r)}/**
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
 */async function rS(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await _i(e,sv(r,i,t,e),n);R(a.idToken,r,"internal-error");const o=fc(a.idToken);R(o,r,"internal-error");const{sub:s}=o;return R(e.uid===s,r,"user-mismatch"),On._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),a}}/**
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
 */async function iS(e,t,n=!1){const r="signIn",i=await sv(e,r,t),a=await On._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function aS(e,t,n){const r=jo(e),i=await tS(r,{returnSecureToken:!0,email:t,password:n}),a=await On._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(a.user),a}function oS(e,t,n,r){return Sr(e).onIdTokenChanged(t,n,r)}function sS(e,t,n){return Sr(e).beforeAuthStateChanged(t,n)}const co="__sak";/**
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
 */class lv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lS(){const e=we();return dc(e)||Fo(e)}const uS=1e3,cS=10;class uv extends lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lS()&&Gk(),this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);Kk()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,cS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}uv.type="LOCAL";const fS=uv;/**
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
 */class cv extends lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}cv.type="SESSION";const fv=cv;/**
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
 */function dS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $o{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new $o(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await dS(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
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
 */function hc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class hS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=hc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(p.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function pS(e){at().location.href=e}/**
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
 */function dv(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function mS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function gS(){return dv()?self:null}/**
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
 */const hv="firebaseLocalStorageDb",yS=1,fo="firebaseLocalStorage",pv="fbase_key";class Di{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bo(e,t){return e.transaction([fo],t?"readwrite":"readonly").objectStore(fo)}function wS(){const e=indexedDB.deleteDatabase(hv);return new Di(e).toPromise()}function Jl(){const e=indexedDB.open(hv,yS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(fo,{keyPath:pv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(fo)?t(r):(r.close(),await wS(),t(await Jl()))})})}async function Sd(e,t,n){const r=Bo(e,!0).put({[pv]:t,value:n});return new Di(r).toPromise()}async function _S(e,t){const n=Bo(e,!1).get(t),r=await new Di(n).toPromise();return r===void 0?null:r.value}function Ed(e,t){const n=Bo(e,!0).delete(t);return new Di(n).toPromise()}const kS=800,SS=3;class mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>SS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(gS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await mS(),!this.activeServiceWorker)return;this.sender=new hS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Jl();return await Sd(t,co,"1"),await Ed(t,co),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>_S(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ed(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Bo(i,!1).getAll();return new Di(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mv.type="LOCAL";const ES=mv;/**
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
 */function IS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function bS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=it("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",IS().appendChild(r)})}function CS(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ai(3e4,6e4);/**
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
 */function xS(e,t){return t?ft(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class pc extends av{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return or(t,this._buildIdpRequest())}_linkToIdToken(t,n){return or(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return or(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function TS(e){return iS(e.auth,new pc(e),e.bypassAuthState)}function PS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),rS(n,new pc(e),e.bypassAuthState)}async function NS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),nS(n,new pc(e),e.bypassAuthState)}/**
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
 */class vv{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return TS;case"linkViaPopup":case"linkViaRedirect":return NS;case"reauthViaPopup":case"reauthViaRedirect":return PS;default:_t(this.auth,"internal-error")}}resolve(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OS=new Ai(2e3,1e4);class Xn extends vv{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const t=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,OS.get())};t()}}Xn.currentPopupAction=null;/**
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
 */const RS="pendingRedirect",Ta=new Map;class AS extends vv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ta.get(this.auth._key());if(!t){try{const r=await LS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ta.set(this.auth._key(),t)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LS(e,t){const n=US(t),r=MS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DS(e,t){Ta.set(e._key(),t)}function MS(e){return ft(e._redirectPersistence)}function US(e){return xa(RS,e.config.apiKey,e.name)}async function zS(e,t,n=!1){const r=jo(e),i=xS(r,t),o=await new AS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const FS=10*60*1e3;class jS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$S(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!gv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=FS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Id(t))}saveEventToCache(t){this.cachedEventUids.add(Id(t)),this.lastProcessedEventTime=Date.now()}}function Id(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function gv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function $S(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(e);default:return!1}}/**
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
 */async function BS(e,t={}){return zo(e,"GET","/v1/projects",t)}/**
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
 */const WS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HS=/^https?/;async function VS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await BS(e);for(const n of t)try{if(YS(n))return}catch{}_t(e,"unauthorized-domain")}function YS(e){const t=Xl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HS.test(n))return!1;if(WS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const KS=new Ai(3e4,6e4);function bd(){const e=at().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function GS(e){return new Promise((t,n)=>{var r,i,a;function o(){bd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bd(),n(it(e,"network-request-failed"))},timeout:KS.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=at().gapi)===null||a===void 0)&&a.load)o();else{const s=CS("iframefcb");return at()[s]=()=>{gapi.load?o():n(it(e,"network-request-failed"))},bS(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Pa=null,t})}let Pa=null;function QS(e){return Pa=Pa||GS(e),Pa}/**
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
 */const XS=new Ai(5e3,15e3),JS="__/auth/iframe",qS="emulator/auth/iframe",ZS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tE(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cc(t,qS):`https://${e.config.authDomain}/${JS}`,r={apiKey:t.apiKey,appName:e.name,v:Uo},i=eE.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ri(r).slice(1)}`}async function nE(e){const t=await QS(e),n=at().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:tE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZS,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=it(e,"network-request-failed"),s=at().setTimeout(()=>{a(o)},XS.get());function l(){at().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const rE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iE=500,aE=600,oE="_blank",sE="http://localhost";class Cd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lE(e,t,n,r=iE,i=aE){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},rE),{width:r.toString(),height:i.toString(),top:a,left:o}),u=we().toLowerCase();n&&(s=Jm(u)?oE:n),Xm(u)&&(t=t||sE,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[v,w])=>`${p}${v}=${w},`,"");if(Yk(u)&&s!=="_self")return uE(t||"",s),new Cd(null);const d=window.open(t||"",s,c);R(d,e,"popup-blocked");try{d.focus()}catch{}return new Cd(d)}function uE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cE="__/auth/handler",fE="emulator/auth/handler";function xd(e,t,n,r,i,a){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Uo,eventId:i};if(t instanceof ov){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",v_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(a||{}))o[l]=u}if(t instanceof Li){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${dE(e)}?${Ri(s).slice(1)}`}function dE({config:e}){return e.emulator?cc(e,fE):`https://${e.authDomain}/${cE}`}/**
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
 */const Ns="webStorageSupport";class hE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fv,this._completeRedirectFn=zS,this._overrideRedirectResult=DS}async _openPopup(t,n,r,i){var a;kt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=xd(t,n,r,Xl(),i);return lE(t,o,hc())}async _openRedirect(t,n,r,i){return await this._originValidation(t),pS(xd(t,n,r,Xl(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(kt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await nE(t),r=new jS(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ns,{type:Ns},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Ns];o!==void 0&&n(!!o),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return nv()||dc()||Fo()}}const pE=hE;var Td="@firebase/auth",Pd="0.21.4";/**
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
 */class mE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gE(e){yi(new mr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:a,authDomain:o}=r.options;return((s,l)=>{R(a&&!a.includes(":"),"invalid-api-key",{appName:s.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:s.name});const u={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(e)},c=new Xk(s,l,u);return Pk(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),yi(new mr("auth-internal",t=>{const n=jo(t.getProvider("auth").getImmediate());return(r=>new mE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Td,Pd,vE(e)),ir(Td,Pd,"esm2017")}/**
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
 */const yE=5*60,wE=Am("authIdTokenMaxAge")||yE;let Nd=null;const _E=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wE)return;const i=n==null?void 0:n.token;Nd!==i&&(Nd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kE(e=vk()){const t=Um(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Tk(e,{popupRedirectResolver:pE,persistence:[ES,fS,fv]}),r=Am("authTokenSyncURL");if(r){const a=_E(r);sS(n,a,()=>a(n.currentUser)),oS(n,o=>a(o))}const i=i_("auth");return i&&Jk(n,`http://${i}`),n}gE("Browser");var SE="firebase",EE="9.17.2";/**
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
 */ir(SE,EE,"app");const IE={apiKey:{}.API_KEY,authDomain:"spotify-form.firebaseapp.com",projectId:"spotify-form",storageBucket:"spotify-form.appspot.com",messagingSenderId:{}.MESSAGING_SENDER_ID,appId:{}.APP_ID},bE=zm(IE),CE=kE(bE),yv=C.createContext(),wv=({children:e})=>{const t=(n,r)=>aS(CE,n,r);return _(yv.Provider,{value:t,children:e})};wv.propTypes={children:D.node.isRequired};const xE=()=>C.useContext(yv),TE=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(!1),[i,a]=C.useState(!1),[o,s]=C.useState(""),[l,u]=C.useState(!1),[c,d]=C.useState(!1),[p,v]=C.useState(""),[w,g]=C.useState(!1),[E,h]=C.useState(!1),[f,m]=C.useState(""),{createUser:y}=xE(),S=async Q=>{Q.preventDefault(),m("");try{await y(e,o)}catch(ie){m(ie.message),console.log(ie.message)}},I=Q=>{const ie=Q.target.value;t(ie),new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm").test(ie)||ie.length===0?r(!1):r(!0)},b=Q=>{const ie=Q.target.value;ie===e||ie.length===0?a(!1):a(!0)},N=Q=>{const ie=Q.target.value;s(ie),ie.length>=6||ie.length===0?u(!1):u(!0)},z=()=>{d(!c)},A=Q=>{v(Q)},Pe=Q=>{const ie=Q.target.value,Je=parseInt(Q.target.value);ie.length===0||Je>=1&&Je<=31?g(!1):g(!0)},sn=Q=>{const ie=Q.target.value,Je=parseInt(Q.target.value);ie.length===0||Je>=1920&&Je<=2005?h(!1):h(!0)},ln=["January","February","March","April","May","June","July","August","September","October","November","December"];return _("div",{children:M("form",{onSubmit:S,className:"registration_form",children:[_("p",{className:"spotify_heading",children:"Spotify"}),_("h1",{className:"font_xxl",children:"Sign up for free to start listening."}),M("div",{className:"buttons",children:[_("a",{href:"#",className:"button_facebook",children:M("div",{children:[_(tn,{icon:xm,className:"facebook_icon"}),_("p",{className:"font_l",children:"Sign up with Facebook"})]})}),_("a",{href:"#",className:"button_google",children:M("div",{children:[_("img",{src:Tm,alt:""}),_("p",{className:"font_l",children:"Sign up with Google"})]})})]}),M("div",{className:"separation",children:[_("hr",{className:"line"}),_("p",{className:"font_l_regular",children:"or"}),_("hr",{className:"line"})]}),_("h2",{className:"font_xl",children:"Sign up with your email address"}),M("section",{className:"user_input",children:[M("div",{className:"input_box",children:[_("label",{htmlFor:"email",className:"font_m",children:"What's your email?"}),_("input",{className:n?"error":"",type:"text",id:"email",placeholder:"Enter your email.",value:e,onInput:I}),_("p",{className:n?"error_message active":"error_message",children:"Incorrect e-mail"})]}),M("div",{className:"input_box",children:[_("label",{htmlFor:"email_confirm",className:"font_m",children:"Confirm your email"}),_("input",{className:i?"error":"",type:"text",id:"email_confirm",placeholder:"Enter your email again.",onInput:b}),_("p",{className:i?"error_message active":"error_message",children:"Please provide same e-mail"})]}),M("div",{className:"input_box",children:[_("label",{htmlFor:"create_password",className:"font_m",children:"Create a password"}),_("input",{className:l?"error":"",type:"password",id:"create_password",placeholder:"Create a password.",onInput:N}),_("p",{className:l?"error_message active":"error_message",children:"Password should be at least 6 characters"})]}),M("div",{className:"input_box",children:[_("label",{htmlFor:"name",className:"font_m",children:"What should we call you?"}),_("input",{type:"text",id:"name",placeholder:"Enter a profile name."})]}),_("p",{className:"font_s",children:"This appears on your profile."})]}),M("section",{className:"birth_container",children:[_("p",{className:"font_m",children:"What's your date of birth?"}),M("div",{className:"birth_content_box",children:[M("div",{className:"birth_month_box",children:[_("label",{htmlFor:"custom_select",className:"font_s",children:"Month"}),M("button",{type:"button",className:p.length!==0?"custom_select filled":"custom_select",onClick:z,children:[p.length===0?_("p",{className:"select_placeholder",children:"Month"}):_("p",{children:p}),_(tn,{icon:Qw,className:"arrow_icon"}),_("ul",{className:c?"select_list open":"select_list",children:ln.map(Q=>_("li",{value:Q,onClick:()=>A(Q),children:Q},Q))})]})]}),M("div",{className:"birth_day_box",children:[_("label",{htmlFor:"day",className:"font_s",children:"Day"}),_("input",{type:"text",id:"day",placeholder:"DD",className:w?"error":"",onInput:Pe})]}),M("div",{className:"birth_year_box",children:[_("label",{htmlFor:"year",className:"font_s",children:"Year"}),_("input",{type:"text",placeholder:"YYY",className:E?"error":"",onInput:sn})]})]})]}),M("section",{className:"gender_container",children:[_("label",{className:"font_m",children:"What's your gender?"}),M("div",{className:"gender_radio_box",children:[M("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio1"}),_("label",{htmlFor:"radio1",children:"Male"})]}),M("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio2"}),_("label",{htmlFor:"radio2",children:"Female"})]}),M("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio3"}),_("label",{htmlFor:"radio3",children:"Non-binary"})]}),M("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio4"}),_("label",{htmlFor:"radio4",children:"Other"})]}),M("div",{className:"radio_box font_s",children:[_("input",{type:"radio",name:"radio",id:"radio5"}),_("label",{htmlFor:"radio5",children:"Prefer not to say"})]})]})]}),M("label",{className:"marketing_checkbox font_s",children:["Share my registration date with Spotify's content providers for marketing purposes.",_("input",{type:"checkbox"}),_("span",{className:"geekmark"})]}),M("section",{className:"terms_privacy_policy_container",children:[M("p",{children:["By clicking on sing-up. you agree to Spotify's ",_("a",{href:"#",children:"Terms and Conditions of Use"}),"."]}),M("p",{children:["To learn more about how. Spotify collects, uses, shares and protects your personal data, please see ",_("a",{href:"#",children:"Spotify's Privacy Policy"}),"."]})]}),_("button",{type:"submit",className:"sign_up_button",children:"Sign up"}),M("p",{className:"redirect_text",children:["Have an account? ",_(Gp,{to:"/spotify-form/login/",children:"Log in"})]})]})})};const PE=()=>_("div",{className:"wrap",children:M("form",{className:"login_form",children:[_("p",{className:"spotify_heading",children:"Spotify"}),_("h4",{className:"font_l",children:"Please sign in to Spotify to continue."}),M("div",{className:"buttons",children:[_("a",{href:"#",className:"button_facebook",children:M("div",{children:[_(tn,{icon:xm,className:"facebook_icon"}),_("p",{className:"font_l",children:"Sign up with Facebook"})]})}),_("a",{href:"#",className:"button_apple",children:M("div",{children:[_(tn,{icon:Xw,className:"apple_icon"}),_("p",{className:"font_l",children:"Sign up with Apple"})]})}),_("a",{href:"#",className:"button_google",children:M("div",{children:[_("img",{src:Tm,alt:""}),_("p",{className:"font_l",children:"Sign up with Google"})]})})]}),M("div",{className:"separation",children:[_("hr",{className:"line"}),_("p",{className:"font_l_regular",children:"or"}),_("hr",{className:"line"})]}),M("section",{className:"user_input",children:[M("div",{className:"input_box",children:[_("label",{htmlFor:"email_login",className:"font_m",children:"Email address or username"}),_("input",{type:"text",id:"email_login",placeholder:"Email address or username"})]}),M("div",{className:"input_box",children:[_("label",{htmlFor:"password_login",className:"font_m",children:"Password"}),_("input",{type:"password",id:"password_login",placeholder:"Password"})]}),_("a",{href:"#",className:"font_s",children:"Do not you remember your password?"})]}),M("section",{className:"sign_in_container",children:[M("label",{className:"remember_me_checkbox font_s",children:["Remember me",_("input",{type:"checkbox"}),_("span",{className:"geekmark"})]}),_("button",{type:"submit",className:"sign_up_button",children:"Sign up"})]}),_("div",{className:"separator"}),_("p",{className:"font_xl",children:"You don't have account yet?"}),_(Gp,{to:"/spotify-form/",className:"sign_up_button_redirect",children:"Sign up for spotify"}),_("p",{className:"non_visible",children:"nnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn"})]})}),NE=()=>_("div",{}),OE=()=>_(Vv,{children:_(wv,{children:M(H0,{children:[_(Ea,{path:"/spotify-form",element:_(TE,{})}),_(Ea,{path:"/spotify-form/login",element:_(PE,{})}),_(Ea,{path:"/spotify-form/account",element:_(NE,{})})]})})});Rs.createRoot(document.getElementById("root")).render(_(Q0,{children:_(po.StrictMode,{children:_(OE,{})})}));
