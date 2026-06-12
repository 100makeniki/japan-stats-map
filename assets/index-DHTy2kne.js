(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function We(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zd={exports:{}},Co={},Ud={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S8;function _P(){if(S8)return ke;S8=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=h&&I[h]||I["@@iterator"],typeof I=="function"?I:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,S={};function x(I,U,se){this.props=I,this.context=U,this.refs=S,this.updater=se||g}x.prototype.isReactComponent={},x.prototype.setState=function(I,U){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,U,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function j(){}j.prototype=x.prototype;function A(I,U,se){this.props=I,this.context=U,this.refs=S,this.updater=se||g}var E=A.prototype=new j;E.constructor=A,_(E,x.prototype),E.isPureReactComponent=!0;var T=Array.isArray,O=Object.prototype.hasOwnProperty,P={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function R(I,U,se){var me,be={},je=null,De=null;if(U!=null)for(me in U.ref!==void 0&&(De=U.ref),U.key!==void 0&&(je=""+U.key),U)O.call(U,me)&&!C.hasOwnProperty(me)&&(be[me]=U[me]);var Oe=arguments.length-2;if(Oe===1)be.children=se;else if(1<Oe){for(var oe=Array(Oe),ge=0;ge<Oe;ge++)oe[ge]=arguments[ge+2];be.children=oe}if(I&&I.defaultProps)for(me in Oe=I.defaultProps,Oe)be[me]===void 0&&(be[me]=Oe[me]);return{$$typeof:e,type:I,key:je,ref:De,props:be,_owner:P.current}}function $(I,U){return{$$typeof:e,type:I.type,key:U,ref:I.ref,props:I.props,_owner:I._owner}}function z(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function q(I){var U={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return U[se]})}var M=/\/+/g;function H(I,U){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):U.toString(36)}function X(I,U,se,me,be){var je=typeof I;(je==="undefined"||je==="boolean")&&(I=null);var De=!1;if(I===null)De=!0;else switch(je){case"string":case"number":De=!0;break;case"object":switch(I.$$typeof){case e:case t:De=!0}}if(De)return De=I,be=be(De),I=me===""?"."+H(De,0):me,T(be)?(se="",I!=null&&(se=I.replace(M,"$&/")+"/"),X(be,U,se,"",function(ge){return ge})):be!=null&&(z(be)&&(be=$(be,se+(!be.key||De&&De.key===be.key?"":(""+be.key).replace(M,"$&/")+"/")+I)),U.push(be)),1;if(De=0,me=me===""?".":me+":",T(I))for(var Oe=0;Oe<I.length;Oe++){je=I[Oe];var oe=me+H(je,Oe);De+=X(je,U,se,oe,be)}else if(oe=y(I),typeof oe=="function")for(I=oe.call(I),Oe=0;!(je=I.next()).done;)je=je.value,oe=me+H(je,Oe++),De+=X(je,U,se,oe,be);else if(je==="object")throw U=String(I),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return De}function G(I,U,se){if(I==null)return I;var me=[],be=0;return X(I,me,"","",function(je){return U.call(se,je,be++)}),me}function J(I){if(I._status===-1){var U=I._result;U=U(),U.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=U)}if(I._status===1)return I._result.default;throw I._result}var te={current:null},K={transition:null},ee={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:K,ReactCurrentOwner:P};function Q(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:G,forEach:function(I,U,se){G(I,function(){U.apply(this,arguments)},se)},count:function(I){var U=0;return G(I,function(){U++}),U},toArray:function(I){return G(I,function(U){return U})||[]},only:function(I){if(!z(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ke.Component=x,ke.Fragment=r,ke.Profiler=i,ke.PureComponent=A,ke.StrictMode=n,ke.Suspense=f,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,ke.act=Q,ke.cloneElement=function(I,U,se){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var me=_({},I.props),be=I.key,je=I.ref,De=I._owner;if(U!=null){if(U.ref!==void 0&&(je=U.ref,De=P.current),U.key!==void 0&&(be=""+U.key),I.type&&I.type.defaultProps)var Oe=I.type.defaultProps;for(oe in U)O.call(U,oe)&&!C.hasOwnProperty(oe)&&(me[oe]=U[oe]===void 0&&Oe!==void 0?Oe[oe]:U[oe])}var oe=arguments.length-2;if(oe===1)me.children=se;else if(1<oe){Oe=Array(oe);for(var ge=0;ge<oe;ge++)Oe[ge]=arguments[ge+2];me.children=Oe}return{$$typeof:e,type:I.type,key:be,ref:je,props:me,_owner:De}},ke.createContext=function(I){return I={$$typeof:s,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:o,_context:I},I.Consumer=I},ke.createElement=R,ke.createFactory=function(I){var U=R.bind(null,I);return U.type=I,U},ke.createRef=function(){return{current:null}},ke.forwardRef=function(I){return{$$typeof:u,render:I}},ke.isValidElement=z,ke.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:J}},ke.memo=function(I,U){return{$$typeof:d,type:I,compare:U===void 0?null:U}},ke.startTransition=function(I){var U=K.transition;K.transition={};try{I()}finally{K.transition=U}},ke.unstable_act=Q,ke.useCallback=function(I,U){return te.current.useCallback(I,U)},ke.useContext=function(I){return te.current.useContext(I)},ke.useDebugValue=function(){},ke.useDeferredValue=function(I){return te.current.useDeferredValue(I)},ke.useEffect=function(I,U){return te.current.useEffect(I,U)},ke.useId=function(){return te.current.useId()},ke.useImperativeHandle=function(I,U,se){return te.current.useImperativeHandle(I,U,se)},ke.useInsertionEffect=function(I,U){return te.current.useInsertionEffect(I,U)},ke.useLayoutEffect=function(I,U){return te.current.useLayoutEffect(I,U)},ke.useMemo=function(I,U){return te.current.useMemo(I,U)},ke.useReducer=function(I,U,se){return te.current.useReducer(I,U,se)},ke.useRef=function(I){return te.current.useRef(I)},ke.useState=function(I){return te.current.useState(I)},ke.useSyncExternalStore=function(I,U,se){return te.current.useSyncExternalStore(I,U,se)},ke.useTransition=function(){return te.current.useTransition()},ke.version="18.3.1",ke}var _8;function j2(){return _8||(_8=1,Ud.exports=_P()),Ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j8;function jP(){if(j8)return Co;j8=1;var e=j2(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(u,f,d){var m,h={},y=null,g=null;d!==void 0&&(y=""+d),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(g=f.ref);for(m in f)n.call(f,m)&&!o.hasOwnProperty(m)&&(h[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)h[m]===void 0&&(h[m]=f[m]);return{$$typeof:t,type:u,key:y,ref:g,props:h,_owner:i.current}}return Co.Fragment=r,Co.jsx=s,Co.jsxs=s,Co}var O8;function OP(){return O8||(O8=1,zd.exports=jP()),zd.exports}var b=OP(),au={},Wd={exports:{}},Wt={},Hd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A8;function AP(){return A8||(A8=1,(function(e){function t(K,ee){var Q=K.length;K.push(ee);e:for(;0<Q;){var I=Q-1>>>1,U=K[I];if(0<i(U,ee))K[I]=ee,K[Q]=U,Q=I;else break e}}function r(K){return K.length===0?null:K[0]}function n(K){if(K.length===0)return null;var ee=K[0],Q=K.pop();if(Q!==ee){K[0]=Q;e:for(var I=0,U=K.length,se=U>>>1;I<se;){var me=2*(I+1)-1,be=K[me],je=me+1,De=K[je];if(0>i(be,Q))je<U&&0>i(De,be)?(K[I]=De,K[je]=Q,I=je):(K[I]=be,K[me]=Q,I=me);else if(je<U&&0>i(De,Q))K[I]=De,K[je]=Q,I=je;else break e}}return ee}function i(K,ee){var Q=K.sortIndex-ee.sortIndex;return Q!==0?Q:K.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var f=[],d=[],m=1,h=null,y=3,g=!1,_=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(K){for(var ee=r(d);ee!==null;){if(ee.callback===null)n(d);else if(ee.startTime<=K)n(d),ee.sortIndex=ee.expirationTime,t(f,ee);else break;ee=r(d)}}function T(K){if(S=!1,E(K),!_)if(r(f)!==null)_=!0,J(O);else{var ee=r(d);ee!==null&&te(T,ee.startTime-K)}}function O(K,ee){_=!1,S&&(S=!1,j(R),R=-1),g=!0;var Q=y;try{for(E(ee),h=r(f);h!==null&&(!(h.expirationTime>ee)||K&&!q());){var I=h.callback;if(typeof I=="function"){h.callback=null,y=h.priorityLevel;var U=I(h.expirationTime<=ee);ee=e.unstable_now(),typeof U=="function"?h.callback=U:h===r(f)&&n(f),E(ee)}else n(f);h=r(f)}if(h!==null)var se=!0;else{var me=r(d);me!==null&&te(T,me.startTime-ee),se=!1}return se}finally{h=null,y=Q,g=!1}}var P=!1,C=null,R=-1,$=5,z=-1;function q(){return!(e.unstable_now()-z<$)}function M(){if(C!==null){var K=e.unstable_now();z=K;var ee=!0;try{ee=C(!0,K)}finally{ee?H():(P=!1,C=null)}}else P=!1}var H;if(typeof A=="function")H=function(){A(M)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,G=X.port2;X.port1.onmessage=M,H=function(){G.postMessage(null)}}else H=function(){x(M,0)};function J(K){C=K,P||(P=!0,H())}function te(K,ee){R=x(function(){K(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){_||g||(_=!0,J(O))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return r(f)},e.unstable_next=function(K){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var Q=y;y=ee;try{return K()}finally{y=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,ee){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Q=y;y=K;try{return ee()}finally{y=Q}},e.unstable_scheduleCallback=function(K,ee,Q){var I=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?I+Q:I):Q=I,K){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Q+U,K={id:m++,callback:ee,priorityLevel:K,startTime:Q,expirationTime:U,sortIndex:-1},Q>I?(K.sortIndex=Q,t(d,K),r(f)===null&&K===r(d)&&(S?(j(R),R=-1):S=!0,te(T,Q-I))):(K.sortIndex=U,t(f,K),_||g||(_=!0,J(O))),K},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(K){var ee=y;return function(){var Q=y;y=ee;try{return K.apply(this,arguments)}finally{y=Q}}}})(Vd)),Vd}var E8;function EP(){return E8||(E8=1,Hd.exports=AP()),Hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P8;function PP(){if(P8)return Wt;P8=1;var e=j2(),t=EP();function r(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)l+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,i={};function o(a,l){s(a,l),s(a+"Capture",l)}function s(a,l){for(i[a]=l,a=0;a<l.length;a++)n.add(l[a])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},h={};function y(a){return f.call(h,a)?!0:f.call(m,a)?!1:d.test(a)?h[a]=!0:(m[a]=!0,!1)}function g(a,l,c,p){if(c!==null&&c.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return p?!1:c!==null?!c.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function _(a,l,c,p){if(l===null||typeof l>"u"||g(a,l,c,p))return!0;if(p)return!1;if(c!==null)switch(c.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function S(a,l,c,p,v,w,k){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=p,this.attributeNamespace=v,this.mustUseProperty=c,this.propertyName=a,this.type=l,this.sanitizeURL=w,this.removeEmptyString=k}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){x[a]=new S(a,0,!1,a,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var l=a[0];x[l]=new S(l,1,!1,a[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(a){x[a]=new S(a,2,!1,a.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){x[a]=new S(a,2,!1,a,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){x[a]=new S(a,3,!1,a.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(a){x[a]=new S(a,3,!0,a,null,!1,!1)}),["capture","download"].forEach(function(a){x[a]=new S(a,4,!1,a,null,!1,!1)}),["cols","rows","size","span"].forEach(function(a){x[a]=new S(a,6,!1,a,null,!1,!1)}),["rowSpan","start"].forEach(function(a){x[a]=new S(a,5,!1,a.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function A(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var l=a.replace(j,A);x[l]=new S(l,1,!1,a,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var l=a.replace(j,A);x[l]=new S(l,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(a){var l=a.replace(j,A);x[l]=new S(l,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(a){x[a]=new S(a,1,!1,a.toLowerCase(),null,!1,!1)}),x.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(a){x[a]=new S(a,1,!1,a.toLowerCase(),null,!0,!0)});function E(a,l,c,p){var v=x.hasOwnProperty(l)?x[l]:null;(v!==null?v.type!==0:p||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(_(l,c,v,p)&&(c=null),p||v===null?y(l)&&(c===null?a.removeAttribute(l):a.setAttribute(l,""+c)):v.mustUseProperty?a[v.propertyName]=c===null?v.type===3?!1:"":c:(l=v.attributeName,p=v.attributeNamespace,c===null?a.removeAttribute(l):(v=v.type,c=v===3||v===4&&c===!0?"":""+c,p?a.setAttributeNS(p,l,c):a.setAttribute(l,c))))}var T=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),P=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),q=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),K=Symbol.iterator;function ee(a){return a===null||typeof a!="object"?null:(a=K&&a[K]||a["@@iterator"],typeof a=="function"?a:null)}var Q=Object.assign,I;function U(a){if(I===void 0)try{throw Error()}catch(c){var l=c.stack.trim().match(/\n( *(at )?)/);I=l&&l[1]||""}return`
`+I+a}var se=!1;function me(a,l){if(!a||se)return"";se=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(Y){var p=Y}Reflect.construct(a,[],l)}else{try{l.call()}catch(Y){p=Y}a.call(l.prototype)}else{try{throw Error()}catch(Y){p=Y}a()}}catch(Y){if(Y&&p&&typeof Y.stack=="string"){for(var v=Y.stack.split(`
`),w=p.stack.split(`
`),k=v.length-1,N=w.length-1;1<=k&&0<=N&&v[k]!==w[N];)N--;for(;1<=k&&0<=N;k--,N--)if(v[k]!==w[N]){if(k!==1||N!==1)do if(k--,N--,0>N||v[k]!==w[N]){var L=`
`+v[k].replace(" at new "," at ");return a.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",a.displayName)),L}while(1<=k&&0<=N);break}}}finally{se=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?U(a):""}function be(a){switch(a.tag){case 5:return U(a.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return a=me(a.type,!1),a;case 11:return a=me(a.type.render,!1),a;case 1:return a=me(a.type,!0),a;default:return""}}function je(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case C:return"Fragment";case P:return"Portal";case $:return"Profiler";case R:return"StrictMode";case H:return"Suspense";case X:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case q:return(a.displayName||"Context")+".Consumer";case z:return(a._context.displayName||"Context")+".Provider";case M:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case G:return l=a.displayName||null,l!==null?l:je(a.type)||"Memo";case J:l=a._payload,a=a._init;try{return je(a(l))}catch{}}return null}function De(a){var l=a.type;switch(a.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=l.render,a=a.displayName||a.name||"",l.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(l);case 8:return l===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function Oe(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function oe(a){var l=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function ge(a){var l=oe(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,l),p=""+a[l];if(!a.hasOwnProperty(l)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var v=c.get,w=c.set;return Object.defineProperty(a,l,{configurable:!0,get:function(){return v.call(this)},set:function(k){p=""+k,w.call(this,k)}}),Object.defineProperty(a,l,{enumerable:c.enumerable}),{getValue:function(){return p},setValue:function(k){p=""+k},stopTracking:function(){a._valueTracker=null,delete a[l]}}}}function Ae(a){a._valueTracker||(a._valueTracker=ge(a))}function ae(a){if(!a)return!1;var l=a._valueTracker;if(!l)return!0;var c=l.getValue(),p="";return a&&(p=oe(a)?a.checked?"true":"false":a.value),a=p,a!==c?(l.setValue(a),!0):!1}function ze(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function Te(a,l){var c=l.checked;return Q({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??a._wrapperState.initialChecked})}function tt(a,l){var c=l.defaultValue==null?"":l.defaultValue,p=l.checked!=null?l.checked:l.defaultChecked;c=Oe(l.value!=null?l.value:c),a._wrapperState={initialChecked:p,initialValue:c,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function rt(a,l){l=l.checked,l!=null&&E(a,"checked",l,!1)}function yt(a,l){rt(a,l);var c=Oe(l.value),p=l.type;if(c!=null)p==="number"?(c===0&&a.value===""||a.value!=c)&&(a.value=""+c):a.value!==""+c&&(a.value=""+c);else if(p==="submit"||p==="reset"){a.removeAttribute("value");return}l.hasOwnProperty("value")?Ir(a,l.type,c):l.hasOwnProperty("defaultValue")&&Ir(a,l.type,Oe(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(a.defaultChecked=!!l.defaultChecked)}function gr(a,l,c){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var p=l.type;if(!(p!=="submit"&&p!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+a._wrapperState.initialValue,c||l===a.value||(a.value=l),a.defaultValue=l}c=a.name,c!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,c!==""&&(a.name=c)}function Ir(a,l,c){(l!=="number"||ze(a.ownerDocument)!==a)&&(c==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c))}var $r=Array.isArray;function Lt(a,l,c,p){if(a=a.options,l){l={};for(var v=0;v<c.length;v++)l["$"+c[v]]=!0;for(c=0;c<a.length;c++)v=l.hasOwnProperty("$"+a[c].value),a[c].selected!==v&&(a[c].selected=v),v&&p&&(a[c].defaultSelected=!0)}else{for(c=""+Oe(c),l=null,v=0;v<a.length;v++){if(a[v].value===c){a[v].selected=!0,p&&(a[v].defaultSelected=!0);return}l!==null||a[v].disabled||(l=a[v])}l!==null&&(l.selected=!0)}}function br(a,l){if(l.dangerouslySetInnerHTML!=null)throw Error(r(91));return Q({},l,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Pa(a,l){var c=l.value;if(c==null){if(c=l.children,l=l.defaultValue,c!=null){if(l!=null)throw Error(r(92));if($r(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),c=l}a._wrapperState={initialValue:Oe(c)}}function Wi(a,l){var c=Oe(l.value),p=Oe(l.defaultValue);c!=null&&(c=""+c,c!==a.value&&(a.value=c),l.defaultValue==null&&a.defaultValue!==c&&(a.defaultValue=c)),p!=null&&(a.defaultValue=""+p)}function Hi(a){var l=a.textContent;l===a._wrapperState.initialValue&&l!==""&&l!==null&&(a.value=l)}function Rv(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(a,l){return a==null||a==="http://www.w3.org/1999/xhtml"?Rv(l):a==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var Xl,Iv=(function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,c,p,v){MSApp.execUnsafeLocalFunction(function(){return a(l,c,p,v)})}:a})(function(a,l){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=l;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=Xl.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}});function Vi(a,l){if(l){var c=a.firstChild;if(c&&c===a.lastChild&&c.nodeType===3){c.nodeValue=l;return}}a.textContent=l}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EA=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(a){EA.forEach(function(l){l=l+a.charAt(0).toUpperCase()+a.substring(1),Ki[l]=Ki[a]})});function $v(a,l,c){return l==null||typeof l=="boolean"||l===""?"":c||typeof l!="number"||l===0||Ki.hasOwnProperty(a)&&Ki[a]?(""+l).trim():l+"px"}function Lv(a,l){a=a.style;for(var c in l)if(l.hasOwnProperty(c)){var p=c.indexOf("--")===0,v=$v(c,l[c],p);c==="float"&&(c="cssFloat"),p?a.setProperty(c,v):a[c]=v}}var PA=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(a,l){if(l){if(PA[a]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(r(137,a));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(r(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(r(61))}if(l.style!=null&&typeof l.style!="object")throw Error(r(62))}}function ef(a,l){if(a.indexOf("-")===-1)return typeof l.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function rf(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var nf=null,ka=null,Ta=null;function Fv(a){if(a=yo(a)){if(typeof nf!="function")throw Error(r(280));var l=a.stateNode;l&&(l=gs(l),nf(a.stateNode,a.type,l))}}function Bv(a){ka?Ta?Ta.push(a):Ta=[a]:ka=a}function qv(){if(ka){var a=ka,l=Ta;if(Ta=ka=null,Fv(a),l)for(a=0;a<l.length;a++)Fv(l[a])}}function zv(a,l){return a(l)}function Uv(){}var af=!1;function Wv(a,l,c){if(af)return a(l,c);af=!0;try{return zv(a,l,c)}finally{af=!1,(ka!==null||Ta!==null)&&(Uv(),qv())}}function Gi(a,l){var c=a.stateNode;if(c===null)return null;var p=gs(c);if(p===null)return null;c=p[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(a=a.type,p=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!p;break e;default:a=!1}if(a)return null;if(c&&typeof c!="function")throw Error(r(231,l,typeof c));return c}var of=!1;if(u)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){of=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{of=!1}function kA(a,l,c,p,v,w,k,N,L){var Y=Array.prototype.slice.call(arguments,3);try{l.apply(c,Y)}catch(ne){this.onError(ne)}}var Yi=!1,Yl=null,Ql=!1,lf=null,TA={onError:function(a){Yi=!0,Yl=a}};function CA(a,l,c,p,v,w,k,N,L){Yi=!1,Yl=null,kA.apply(TA,arguments)}function NA(a,l,c,p,v,w,k,N,L){if(CA.apply(this,arguments),Yi){if(Yi){var Y=Yl;Yi=!1,Yl=null}else throw Error(r(198));Ql||(Ql=!0,lf=Y)}}function Zn(a){var l=a,c=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do l=a,(l.flags&4098)!==0&&(c=l.return),a=l.return;while(a)}return l.tag===3?c:null}function Hv(a){if(a.tag===13){var l=a.memoizedState;if(l===null&&(a=a.alternate,a!==null&&(l=a.memoizedState)),l!==null)return l.dehydrated}return null}function Vv(a){if(Zn(a)!==a)throw Error(r(188))}function DA(a){var l=a.alternate;if(!l){if(l=Zn(a),l===null)throw Error(r(188));return l!==a?null:a}for(var c=a,p=l;;){var v=c.return;if(v===null)break;var w=v.alternate;if(w===null){if(p=v.return,p!==null){c=p;continue}break}if(v.child===w.child){for(w=v.child;w;){if(w===c)return Vv(v),a;if(w===p)return Vv(v),l;w=w.sibling}throw Error(r(188))}if(c.return!==p.return)c=v,p=w;else{for(var k=!1,N=v.child;N;){if(N===c){k=!0,c=v,p=w;break}if(N===p){k=!0,p=v,c=w;break}N=N.sibling}if(!k){for(N=w.child;N;){if(N===c){k=!0,c=w,p=v;break}if(N===p){k=!0,p=w,c=v;break}N=N.sibling}if(!k)throw Error(r(189))}}if(c.alternate!==p)throw Error(r(190))}if(c.tag!==3)throw Error(r(188));return c.stateNode.current===c?a:l}function Kv(a){return a=DA(a),a!==null?Gv(a):null}function Gv(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var l=Gv(a);if(l!==null)return l;a=a.sibling}return null}var Xv=t.unstable_scheduleCallback,Yv=t.unstable_cancelCallback,MA=t.unstable_shouldYield,RA=t.unstable_requestPaint,it=t.unstable_now,IA=t.unstable_getCurrentPriorityLevel,sf=t.unstable_ImmediatePriority,Qv=t.unstable_UserBlockingPriority,Jl=t.unstable_NormalPriority,$A=t.unstable_LowPriority,Jv=t.unstable_IdlePriority,Zl=null,Lr=null;function LA(a){if(Lr&&typeof Lr.onCommitFiberRoot=="function")try{Lr.onCommitFiberRoot(Zl,a,void 0,(a.current.flags&128)===128)}catch{}}var xr=Math.clz32?Math.clz32:qA,FA=Math.log,BA=Math.LN2;function qA(a){return a>>>=0,a===0?32:31-(FA(a)/BA|0)|0}var es=64,ts=4194304;function Qi(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function rs(a,l){var c=a.pendingLanes;if(c===0)return 0;var p=0,v=a.suspendedLanes,w=a.pingedLanes,k=c&268435455;if(k!==0){var N=k&~v;N!==0?p=Qi(N):(w&=k,w!==0&&(p=Qi(w)))}else k=c&~v,k!==0?p=Qi(k):w!==0&&(p=Qi(w));if(p===0)return 0;if(l!==0&&l!==p&&(l&v)===0&&(v=p&-p,w=l&-l,v>=w||v===16&&(w&4194240)!==0))return l;if((p&4)!==0&&(p|=c&16),l=a.entangledLanes,l!==0)for(a=a.entanglements,l&=p;0<l;)c=31-xr(l),v=1<<c,p|=a[c],l&=~v;return p}function zA(a,l){switch(a){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UA(a,l){for(var c=a.suspendedLanes,p=a.pingedLanes,v=a.expirationTimes,w=a.pendingLanes;0<w;){var k=31-xr(w),N=1<<k,L=v[k];L===-1?((N&c)===0||(N&p)!==0)&&(v[k]=zA(N,l)):L<=l&&(a.expiredLanes|=N),w&=~N}}function uf(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function Zv(){var a=es;return es<<=1,(es&4194240)===0&&(es=64),a}function cf(a){for(var l=[],c=0;31>c;c++)l.push(a);return l}function Ji(a,l,c){a.pendingLanes|=l,l!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,l=31-xr(l),a[l]=c}function WA(a,l){var c=a.pendingLanes&~l;a.pendingLanes=l,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=l,a.mutableReadLanes&=l,a.entangledLanes&=l,l=a.entanglements;var p=a.eventTimes;for(a=a.expirationTimes;0<c;){var v=31-xr(c),w=1<<v;l[v]=0,p[v]=-1,a[v]=-1,c&=~w}}function ff(a,l){var c=a.entangledLanes|=l;for(a=a.entanglements;c;){var p=31-xr(c),v=1<<p;v&l|a[p]&l&&(a[p]|=l),c&=~v}}var Be=0;function e1(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var t1,df,r1,n1,a1,pf=!1,ns=[],On=null,An=null,En=null,Zi=new Map,eo=new Map,Pn=[],HA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function i1(a,l){switch(a){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Zi.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(l.pointerId)}}function to(a,l,c,p,v,w){return a===null||a.nativeEvent!==w?(a={blockedOn:l,domEventName:c,eventSystemFlags:p,nativeEvent:w,targetContainers:[v]},l!==null&&(l=yo(l),l!==null&&df(l)),a):(a.eventSystemFlags|=p,l=a.targetContainers,v!==null&&l.indexOf(v)===-1&&l.push(v),a)}function VA(a,l,c,p,v){switch(l){case"focusin":return On=to(On,a,l,c,p,v),!0;case"dragenter":return An=to(An,a,l,c,p,v),!0;case"mouseover":return En=to(En,a,l,c,p,v),!0;case"pointerover":var w=v.pointerId;return Zi.set(w,to(Zi.get(w)||null,a,l,c,p,v)),!0;case"gotpointercapture":return w=v.pointerId,eo.set(w,to(eo.get(w)||null,a,l,c,p,v)),!0}return!1}function o1(a){var l=ea(a.target);if(l!==null){var c=Zn(l);if(c!==null){if(l=c.tag,l===13){if(l=Hv(c),l!==null){a.blockedOn=l,a1(a.priority,function(){r1(c)});return}}else if(l===3&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}a.blockedOn=null}function as(a){if(a.blockedOn!==null)return!1;for(var l=a.targetContainers;0<l.length;){var c=mf(a.domEventName,a.eventSystemFlags,l[0],a.nativeEvent);if(c===null){c=a.nativeEvent;var p=new c.constructor(c.type,c);tf=p,c.target.dispatchEvent(p),tf=null}else return l=yo(c),l!==null&&df(l),a.blockedOn=c,!1;l.shift()}return!0}function l1(a,l,c){as(a)&&c.delete(l)}function KA(){pf=!1,On!==null&&as(On)&&(On=null),An!==null&&as(An)&&(An=null),En!==null&&as(En)&&(En=null),Zi.forEach(l1),eo.forEach(l1)}function ro(a,l){a.blockedOn===l&&(a.blockedOn=null,pf||(pf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,KA)))}function no(a){function l(v){return ro(v,a)}if(0<ns.length){ro(ns[0],a);for(var c=1;c<ns.length;c++){var p=ns[c];p.blockedOn===a&&(p.blockedOn=null)}}for(On!==null&&ro(On,a),An!==null&&ro(An,a),En!==null&&ro(En,a),Zi.forEach(l),eo.forEach(l),c=0;c<Pn.length;c++)p=Pn[c],p.blockedOn===a&&(p.blockedOn=null);for(;0<Pn.length&&(c=Pn[0],c.blockedOn===null);)o1(c),c.blockedOn===null&&Pn.shift()}var Ca=T.ReactCurrentBatchConfig,is=!0;function GA(a,l,c,p){var v=Be,w=Ca.transition;Ca.transition=null;try{Be=1,hf(a,l,c,p)}finally{Be=v,Ca.transition=w}}function XA(a,l,c,p){var v=Be,w=Ca.transition;Ca.transition=null;try{Be=4,hf(a,l,c,p)}finally{Be=v,Ca.transition=w}}function hf(a,l,c,p){if(is){var v=mf(a,l,c,p);if(v===null)Nf(a,l,p,os,c),i1(a,p);else if(VA(v,a,l,c,p))p.stopPropagation();else if(i1(a,p),l&4&&-1<HA.indexOf(a)){for(;v!==null;){var w=yo(v);if(w!==null&&t1(w),w=mf(a,l,c,p),w===null&&Nf(a,l,p,os,c),w===v)break;v=w}v!==null&&p.stopPropagation()}else Nf(a,l,p,null,c)}}var os=null;function mf(a,l,c,p){if(os=null,a=rf(p),a=ea(a),a!==null)if(l=Zn(a),l===null)a=null;else if(c=l.tag,c===13){if(a=Hv(l),a!==null)return a;a=null}else if(c===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;a=null}else l!==a&&(a=null);return os=a,null}function s1(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IA()){case sf:return 1;case Qv:return 4;case Jl:case $A:return 16;case Jv:return 536870912;default:return 16}default:return 16}}var kn=null,yf=null,ls=null;function u1(){if(ls)return ls;var a,l=yf,c=l.length,p,v="value"in kn?kn.value:kn.textContent,w=v.length;for(a=0;a<c&&l[a]===v[a];a++);var k=c-a;for(p=1;p<=k&&l[c-p]===v[w-p];p++);return ls=v.slice(a,1<p?1-p:void 0)}function ss(a){var l=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&l===13&&(a=13)):a=l,a===10&&(a=13),32<=a||a===13?a:0}function us(){return!0}function c1(){return!1}function Vt(a){function l(c,p,v,w,k){this._reactName=c,this._targetInst=v,this.type=p,this.nativeEvent=w,this.target=k,this.currentTarget=null;for(var N in a)a.hasOwnProperty(N)&&(c=a[N],this[N]=c?c(w):w[N]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?us:c1,this.isPropagationStopped=c1,this}return Q(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=us)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=us)},persist:function(){},isPersistent:us}),l}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=Vt(Na),ao=Q({},Na,{view:0,detail:0}),YA=Vt(ao),gf,bf,io,cs=Q({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==io&&(io&&a.type==="mousemove"?(gf=a.screenX-io.screenX,bf=a.screenY-io.screenY):bf=gf=0,io=a),gf)},movementY:function(a){return"movementY"in a?a.movementY:bf}}),f1=Vt(cs),QA=Q({},cs,{dataTransfer:0}),JA=Vt(QA),ZA=Q({},ao,{relatedTarget:0}),xf=Vt(ZA),eE=Q({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),tE=Vt(eE),rE=Q({},Na,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nE=Vt(rE),aE=Q({},Na,{data:0}),d1=Vt(aE),iE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sE(a){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(a):(a=lE[a])?!!l[a]:!1}function wf(){return sE}var uE=Q({},ao,{key:function(a){if(a.key){var l=iE[a.key]||a.key;if(l!=="Unidentified")return l}return a.type==="keypress"?(a=ss(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?oE[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(a){return a.type==="keypress"?ss(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?ss(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),cE=Vt(uE),fE=Q({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p1=Vt(fE),dE=Q({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),pE=Vt(dE),hE=Q({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),mE=Vt(hE),yE=Q({},cs,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=Vt(yE),gE=[9,13,27,32],Sf=u&&"CompositionEvent"in window,oo=null;u&&"documentMode"in document&&(oo=document.documentMode);var bE=u&&"TextEvent"in window&&!oo,h1=u&&(!Sf||oo&&8<oo&&11>=oo),m1=" ",y1=!1;function v1(a,l){switch(a){case"keyup":return gE.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g1(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Da=!1;function xE(a,l){switch(a){case"compositionend":return g1(l);case"keypress":return l.which!==32?null:(y1=!0,m1);case"textInput":return a=l.data,a===m1&&y1?null:a;default:return null}}function wE(a,l){if(Da)return a==="compositionend"||!Sf&&v1(a,l)?(a=u1(),ls=yf=kn=null,Da=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return h1&&l.locale!=="ko"?null:l.data;default:return null}}var SE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b1(a){var l=a&&a.nodeName&&a.nodeName.toLowerCase();return l==="input"?!!SE[a.type]:l==="textarea"}function x1(a,l,c,p){Bv(p),l=ms(l,"onChange"),0<l.length&&(c=new vf("onChange","change",null,c,p),a.push({event:c,listeners:l}))}var lo=null,so=null;function _E(a){L1(a,0)}function fs(a){var l=La(a);if(ae(l))return a}function jE(a,l){if(a==="change")return l}var w1=!1;if(u){var _f;if(u){var jf="oninput"in document;if(!jf){var S1=document.createElement("div");S1.setAttribute("oninput","return;"),jf=typeof S1.oninput=="function"}_f=jf}else _f=!1;w1=_f&&(!document.documentMode||9<document.documentMode)}function _1(){lo&&(lo.detachEvent("onpropertychange",j1),so=lo=null)}function j1(a){if(a.propertyName==="value"&&fs(so)){var l=[];x1(l,so,a,rf(a)),Wv(_E,l)}}function OE(a,l,c){a==="focusin"?(_1(),lo=l,so=c,lo.attachEvent("onpropertychange",j1)):a==="focusout"&&_1()}function AE(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return fs(so)}function EE(a,l){if(a==="click")return fs(l)}function PE(a,l){if(a==="input"||a==="change")return fs(l)}function kE(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var wr=typeof Object.is=="function"?Object.is:kE;function uo(a,l){if(wr(a,l))return!0;if(typeof a!="object"||a===null||typeof l!="object"||l===null)return!1;var c=Object.keys(a),p=Object.keys(l);if(c.length!==p.length)return!1;for(p=0;p<c.length;p++){var v=c[p];if(!f.call(l,v)||!wr(a[v],l[v]))return!1}return!0}function O1(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function A1(a,l){var c=O1(a);a=0;for(var p;c;){if(c.nodeType===3){if(p=a+c.textContent.length,a<=l&&p>=l)return{node:c,offset:l-a};a=p}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=O1(c)}}function E1(a,l){return a&&l?a===l?!0:a&&a.nodeType===3?!1:l&&l.nodeType===3?E1(a,l.parentNode):"contains"in a?a.contains(l):a.compareDocumentPosition?!!(a.compareDocumentPosition(l)&16):!1:!1}function P1(){for(var a=window,l=ze();l instanceof a.HTMLIFrameElement;){try{var c=typeof l.contentWindow.location.href=="string"}catch{c=!1}if(c)a=l.contentWindow;else break;l=ze(a.document)}return l}function Of(a){var l=a&&a.nodeName&&a.nodeName.toLowerCase();return l&&(l==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||l==="textarea"||a.contentEditable==="true")}function TE(a){var l=P1(),c=a.focusedElem,p=a.selectionRange;if(l!==c&&c&&c.ownerDocument&&E1(c.ownerDocument.documentElement,c)){if(p!==null&&Of(c)){if(l=p.start,a=p.end,a===void 0&&(a=l),"selectionStart"in c)c.selectionStart=l,c.selectionEnd=Math.min(a,c.value.length);else if(a=(l=c.ownerDocument||document)&&l.defaultView||window,a.getSelection){a=a.getSelection();var v=c.textContent.length,w=Math.min(p.start,v);p=p.end===void 0?w:Math.min(p.end,v),!a.extend&&w>p&&(v=p,p=w,w=v),v=A1(c,w);var k=A1(c,p);v&&k&&(a.rangeCount!==1||a.anchorNode!==v.node||a.anchorOffset!==v.offset||a.focusNode!==k.node||a.focusOffset!==k.offset)&&(l=l.createRange(),l.setStart(v.node,v.offset),a.removeAllRanges(),w>p?(a.addRange(l),a.extend(k.node,k.offset)):(l.setEnd(k.node,k.offset),a.addRange(l)))}}for(l=[],a=c;a=a.parentNode;)a.nodeType===1&&l.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<l.length;c++)a=l[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var CE=u&&"documentMode"in document&&11>=document.documentMode,Ma=null,Af=null,co=null,Ef=!1;function k1(a,l,c){var p=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Ef||Ma==null||Ma!==ze(p)||(p=Ma,"selectionStart"in p&&Of(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),co&&uo(co,p)||(co=p,p=ms(Af,"onSelect"),0<p.length&&(l=new vf("onSelect","select",null,l,c),a.push({event:l,listeners:p}),l.target=Ma)))}function ds(a,l){var c={};return c[a.toLowerCase()]=l.toLowerCase(),c["Webkit"+a]="webkit"+l,c["Moz"+a]="moz"+l,c}var Ra={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionend:ds("Transition","TransitionEnd")},Pf={},T1={};u&&(T1=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function ps(a){if(Pf[a])return Pf[a];if(!Ra[a])return a;var l=Ra[a],c;for(c in l)if(l.hasOwnProperty(c)&&c in T1)return Pf[a]=l[c];return a}var C1=ps("animationend"),N1=ps("animationiteration"),D1=ps("animationstart"),M1=ps("transitionend"),R1=new Map,I1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(a,l){R1.set(a,l),o(l,[a])}for(var kf=0;kf<I1.length;kf++){var Tf=I1[kf],NE=Tf.toLowerCase(),DE=Tf[0].toUpperCase()+Tf.slice(1);Tn(NE,"on"+DE)}Tn(C1,"onAnimationEnd"),Tn(N1,"onAnimationIteration"),Tn(D1,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(M1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function $1(a,l,c){var p=a.type||"unknown-event";a.currentTarget=c,NA(p,l,void 0,a),a.currentTarget=null}function L1(a,l){l=(l&4)!==0;for(var c=0;c<a.length;c++){var p=a[c],v=p.event;p=p.listeners;e:{var w=void 0;if(l)for(var k=p.length-1;0<=k;k--){var N=p[k],L=N.instance,Y=N.currentTarget;if(N=N.listener,L!==w&&v.isPropagationStopped())break e;$1(v,N,Y),w=L}else for(k=0;k<p.length;k++){if(N=p[k],L=N.instance,Y=N.currentTarget,N=N.listener,L!==w&&v.isPropagationStopped())break e;$1(v,N,Y),w=L}}}if(Ql)throw a=lf,Ql=!1,lf=null,a}function Ke(a,l){var c=l[Lf];c===void 0&&(c=l[Lf]=new Set);var p=a+"__bubble";c.has(p)||(F1(l,a,2,!1),c.add(p))}function Cf(a,l,c){var p=0;l&&(p|=4),F1(c,a,p,l)}var hs="_reactListening"+Math.random().toString(36).slice(2);function po(a){if(!a[hs]){a[hs]=!0,n.forEach(function(c){c!=="selectionchange"&&(ME.has(c)||Cf(c,!1,a),Cf(c,!0,a))});var l=a.nodeType===9?a:a.ownerDocument;l===null||l[hs]||(l[hs]=!0,Cf("selectionchange",!1,l))}}function F1(a,l,c,p){switch(s1(l)){case 1:var v=GA;break;case 4:v=XA;break;default:v=hf}c=v.bind(null,l,c,a),v=void 0,!of||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(v=!0),p?v!==void 0?a.addEventListener(l,c,{capture:!0,passive:v}):a.addEventListener(l,c,!0):v!==void 0?a.addEventListener(l,c,{passive:v}):a.addEventListener(l,c,!1)}function Nf(a,l,c,p,v){var w=p;if((l&1)===0&&(l&2)===0&&p!==null)e:for(;;){if(p===null)return;var k=p.tag;if(k===3||k===4){var N=p.stateNode.containerInfo;if(N===v||N.nodeType===8&&N.parentNode===v)break;if(k===4)for(k=p.return;k!==null;){var L=k.tag;if((L===3||L===4)&&(L=k.stateNode.containerInfo,L===v||L.nodeType===8&&L.parentNode===v))return;k=k.return}for(;N!==null;){if(k=ea(N),k===null)return;if(L=k.tag,L===5||L===6){p=w=k;continue e}N=N.parentNode}}p=p.return}Wv(function(){var Y=w,ne=rf(c),ie=[];e:{var re=R1.get(a);if(re!==void 0){var fe=vf,he=a;switch(a){case"keypress":if(ss(c)===0)break e;case"keydown":case"keyup":fe=cE;break;case"focusin":he="focus",fe=xf;break;case"focusout":he="blur",fe=xf;break;case"beforeblur":case"afterblur":fe=xf;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=f1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=JA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=pE;break;case C1:case N1:case D1:fe=tE;break;case M1:fe=mE;break;case"scroll":fe=YA;break;case"wheel":fe=vE;break;case"copy":case"cut":case"paste":fe=nE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=p1}var ye=(l&4)!==0,ot=!ye&&a==="scroll",W=ye?re!==null?re+"Capture":null:re;ye=[];for(var F=Y,V;F!==null;){V=F;var le=V.stateNode;if(V.tag===5&&le!==null&&(V=le,W!==null&&(le=Gi(F,W),le!=null&&ye.push(ho(F,le,V)))),ot)break;F=F.return}0<ye.length&&(re=new fe(re,he,null,c,ne),ie.push({event:re,listeners:ye}))}}if((l&7)===0){e:{if(re=a==="mouseover"||a==="pointerover",fe=a==="mouseout"||a==="pointerout",re&&c!==tf&&(he=c.relatedTarget||c.fromElement)&&(ea(he)||he[Zr]))break e;if((fe||re)&&(re=ne.window===ne?ne:(re=ne.ownerDocument)?re.defaultView||re.parentWindow:window,fe?(he=c.relatedTarget||c.toElement,fe=Y,he=he?ea(he):null,he!==null&&(ot=Zn(he),he!==ot||he.tag!==5&&he.tag!==6)&&(he=null)):(fe=null,he=Y),fe!==he)){if(ye=f1,le="onMouseLeave",W="onMouseEnter",F="mouse",(a==="pointerout"||a==="pointerover")&&(ye=p1,le="onPointerLeave",W="onPointerEnter",F="pointer"),ot=fe==null?re:La(fe),V=he==null?re:La(he),re=new ye(le,F+"leave",fe,c,ne),re.target=ot,re.relatedTarget=V,le=null,ea(ne)===Y&&(ye=new ye(W,F+"enter",he,c,ne),ye.target=V,ye.relatedTarget=ot,le=ye),ot=le,fe&&he)t:{for(ye=fe,W=he,F=0,V=ye;V;V=Ia(V))F++;for(V=0,le=W;le;le=Ia(le))V++;for(;0<F-V;)ye=Ia(ye),F--;for(;0<V-F;)W=Ia(W),V--;for(;F--;){if(ye===W||W!==null&&ye===W.alternate)break t;ye=Ia(ye),W=Ia(W)}ye=null}else ye=null;fe!==null&&B1(ie,re,fe,ye,!1),he!==null&&ot!==null&&B1(ie,ot,he,ye,!0)}}e:{if(re=Y?La(Y):window,fe=re.nodeName&&re.nodeName.toLowerCase(),fe==="select"||fe==="input"&&re.type==="file")var ve=jE;else if(b1(re))if(w1)ve=PE;else{ve=AE;var xe=OE}else(fe=re.nodeName)&&fe.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(ve=EE);if(ve&&(ve=ve(a,Y))){x1(ie,ve,c,ne);break e}xe&&xe(a,re,Y),a==="focusout"&&(xe=re._wrapperState)&&xe.controlled&&re.type==="number"&&Ir(re,"number",re.value)}switch(xe=Y?La(Y):window,a){case"focusin":(b1(xe)||xe.contentEditable==="true")&&(Ma=xe,Af=Y,co=null);break;case"focusout":co=Af=Ma=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,k1(ie,c,ne);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":k1(ie,c,ne)}var we;if(Sf)e:{switch(a){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Da?v1(a,c)&&(_e="onCompositionEnd"):a==="keydown"&&c.keyCode===229&&(_e="onCompositionStart");_e&&(h1&&c.locale!=="ko"&&(Da||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Da&&(we=u1()):(kn=ne,yf="value"in kn?kn.value:kn.textContent,Da=!0)),xe=ms(Y,_e),0<xe.length&&(_e=new d1(_e,a,null,c,ne),ie.push({event:_e,listeners:xe}),we?_e.data=we:(we=g1(c),we!==null&&(_e.data=we)))),(we=bE?xE(a,c):wE(a,c))&&(Y=ms(Y,"onBeforeInput"),0<Y.length&&(ne=new d1("onBeforeInput","beforeinput",null,c,ne),ie.push({event:ne,listeners:Y}),ne.data=we))}L1(ie,l)})}function ho(a,l,c){return{instance:a,listener:l,currentTarget:c}}function ms(a,l){for(var c=l+"Capture",p=[];a!==null;){var v=a,w=v.stateNode;v.tag===5&&w!==null&&(v=w,w=Gi(a,c),w!=null&&p.unshift(ho(a,w,v)),w=Gi(a,l),w!=null&&p.push(ho(a,w,v))),a=a.return}return p}function Ia(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function B1(a,l,c,p,v){for(var w=l._reactName,k=[];c!==null&&c!==p;){var N=c,L=N.alternate,Y=N.stateNode;if(L!==null&&L===p)break;N.tag===5&&Y!==null&&(N=Y,v?(L=Gi(c,w),L!=null&&k.unshift(ho(c,L,N))):v||(L=Gi(c,w),L!=null&&k.push(ho(c,L,N)))),c=c.return}k.length!==0&&a.push({event:l,listeners:k})}var RE=/\r\n?/g,IE=/\u0000|\uFFFD/g;function q1(a){return(typeof a=="string"?a:""+a).replace(RE,`
`).replace(IE,"")}function ys(a,l,c){if(l=q1(l),q1(a)!==l&&c)throw Error(r(425))}function vs(){}var Df=null,Mf=null;function Rf(a,l){return a==="textarea"||a==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,$E=typeof clearTimeout=="function"?clearTimeout:void 0,z1=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof z1<"u"?function(a){return z1.resolve(null).then(a).catch(FE)}:If;function FE(a){setTimeout(function(){throw a})}function $f(a,l){var c=l,p=0;do{var v=c.nextSibling;if(a.removeChild(c),v&&v.nodeType===8)if(c=v.data,c==="/$"){if(p===0){a.removeChild(v),no(l);return}p--}else c!=="$"&&c!=="$?"&&c!=="$!"||p++;c=v}while(c);no(l)}function Cn(a){for(;a!=null;a=a.nextSibling){var l=a.nodeType;if(l===1||l===3)break;if(l===8){if(l=a.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return a}function U1(a){a=a.previousSibling;for(var l=0;a;){if(a.nodeType===8){var c=a.data;if(c==="$"||c==="$!"||c==="$?"){if(l===0)return a;l--}else c==="/$"&&l++}a=a.previousSibling}return null}var $a=Math.random().toString(36).slice(2),Fr="__reactFiber$"+$a,mo="__reactProps$"+$a,Zr="__reactContainer$"+$a,Lf="__reactEvents$"+$a,BE="__reactListeners$"+$a,qE="__reactHandles$"+$a;function ea(a){var l=a[Fr];if(l)return l;for(var c=a.parentNode;c;){if(l=c[Zr]||c[Fr]){if(c=l.alternate,l.child!==null||c!==null&&c.child!==null)for(a=U1(a);a!==null;){if(c=a[Fr])return c;a=U1(a)}return l}a=c,c=a.parentNode}return null}function yo(a){return a=a[Fr]||a[Zr],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function La(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(r(33))}function gs(a){return a[mo]||null}var Ff=[],Fa=-1;function Nn(a){return{current:a}}function Ge(a){0>Fa||(a.current=Ff[Fa],Ff[Fa]=null,Fa--)}function He(a,l){Fa++,Ff[Fa]=a.current,a.current=l}var Dn={},At=Nn(Dn),Ft=Nn(!1),ta=Dn;function Ba(a,l){var c=a.type.contextTypes;if(!c)return Dn;var p=a.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===l)return p.__reactInternalMemoizedMaskedChildContext;var v={},w;for(w in c)v[w]=l[w];return p&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=l,a.__reactInternalMemoizedMaskedChildContext=v),v}function Bt(a){return a=a.childContextTypes,a!=null}function bs(){Ge(Ft),Ge(At)}function W1(a,l,c){if(At.current!==Dn)throw Error(r(168));He(At,l),He(Ft,c)}function H1(a,l,c){var p=a.stateNode;if(l=l.childContextTypes,typeof p.getChildContext!="function")return c;p=p.getChildContext();for(var v in p)if(!(v in l))throw Error(r(108,De(a)||"Unknown",v));return Q({},c,p)}function xs(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Dn,ta=At.current,He(At,a),He(Ft,Ft.current),!0}function V1(a,l,c){var p=a.stateNode;if(!p)throw Error(r(169));c?(a=H1(a,l,ta),p.__reactInternalMemoizedMergedChildContext=a,Ge(Ft),Ge(At),He(At,a)):Ge(Ft),He(Ft,c)}var en=null,ws=!1,Bf=!1;function K1(a){en===null?en=[a]:en.push(a)}function zE(a){ws=!0,K1(a)}function Mn(){if(!Bf&&en!==null){Bf=!0;var a=0,l=Be;try{var c=en;for(Be=1;a<c.length;a++){var p=c[a];do p=p(!0);while(p!==null)}en=null,ws=!1}catch(v){throw en!==null&&(en=en.slice(a+1)),Xv(sf,Mn),v}finally{Be=l,Bf=!1}}return null}var qa=[],za=0,Ss=null,_s=0,nr=[],ar=0,ra=null,tn=1,rn="";function na(a,l){qa[za++]=_s,qa[za++]=Ss,Ss=a,_s=l}function G1(a,l,c){nr[ar++]=tn,nr[ar++]=rn,nr[ar++]=ra,ra=a;var p=tn;a=rn;var v=32-xr(p)-1;p&=~(1<<v),c+=1;var w=32-xr(l)+v;if(30<w){var k=v-v%5;w=(p&(1<<k)-1).toString(32),p>>=k,v-=k,tn=1<<32-xr(l)+v|c<<v|p,rn=w+a}else tn=1<<w|c<<v|p,rn=a}function qf(a){a.return!==null&&(na(a,1),G1(a,1,0))}function zf(a){for(;a===Ss;)Ss=qa[--za],qa[za]=null,_s=qa[--za],qa[za]=null;for(;a===ra;)ra=nr[--ar],nr[ar]=null,rn=nr[--ar],nr[ar]=null,tn=nr[--ar],nr[ar]=null}var Kt=null,Gt=null,Ye=!1,Sr=null;function X1(a,l){var c=sr(5,null,null,0);c.elementType="DELETED",c.stateNode=l,c.return=a,l=a.deletions,l===null?(a.deletions=[c],a.flags|=16):l.push(c)}function Y1(a,l){switch(a.tag){case 5:var c=a.type;return l=l.nodeType!==1||c.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(a.stateNode=l,Kt=a,Gt=Cn(l.firstChild),!0):!1;case 6:return l=a.pendingProps===""||l.nodeType!==3?null:l,l!==null?(a.stateNode=l,Kt=a,Gt=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(c=ra!==null?{id:tn,overflow:rn}:null,a.memoizedState={dehydrated:l,treeContext:c,retryLane:1073741824},c=sr(18,null,null,0),c.stateNode=l,c.return=a,a.child=c,Kt=a,Gt=null,!0):!1;default:return!1}}function Uf(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Wf(a){if(Ye){var l=Gt;if(l){var c=l;if(!Y1(a,l)){if(Uf(a))throw Error(r(418));l=Cn(c.nextSibling);var p=Kt;l&&Y1(a,l)?X1(p,c):(a.flags=a.flags&-4097|2,Ye=!1,Kt=a)}}else{if(Uf(a))throw Error(r(418));a.flags=a.flags&-4097|2,Ye=!1,Kt=a}}}function Q1(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;Kt=a}function js(a){if(a!==Kt)return!1;if(!Ye)return Q1(a),Ye=!0,!1;var l;if((l=a.tag!==3)&&!(l=a.tag!==5)&&(l=a.type,l=l!=="head"&&l!=="body"&&!Rf(a.type,a.memoizedProps)),l&&(l=Gt)){if(Uf(a))throw J1(),Error(r(418));for(;l;)X1(a,l),l=Cn(l.nextSibling)}if(Q1(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));e:{for(a=a.nextSibling,l=0;a;){if(a.nodeType===8){var c=a.data;if(c==="/$"){if(l===0){Gt=Cn(a.nextSibling);break e}l--}else c!=="$"&&c!=="$!"&&c!=="$?"||l++}a=a.nextSibling}Gt=null}}else Gt=Kt?Cn(a.stateNode.nextSibling):null;return!0}function J1(){for(var a=Gt;a;)a=Cn(a.nextSibling)}function Ua(){Gt=Kt=null,Ye=!1}function Hf(a){Sr===null?Sr=[a]:Sr.push(a)}var UE=T.ReactCurrentBatchConfig;function vo(a,l,c){if(a=c.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(r(309));var p=c.stateNode}if(!p)throw Error(r(147,a));var v=p,w=""+a;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===w?l.ref:(l=function(k){var N=v.refs;k===null?delete N[w]:N[w]=k},l._stringRef=w,l)}if(typeof a!="string")throw Error(r(284));if(!c._owner)throw Error(r(290,a))}return a}function Os(a,l){throw a=Object.prototype.toString.call(l),Error(r(31,a==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":a))}function Z1(a){var l=a._init;return l(a._payload)}function eg(a){function l(W,F){if(a){var V=W.deletions;V===null?(W.deletions=[F],W.flags|=16):V.push(F)}}function c(W,F){if(!a)return null;for(;F!==null;)l(W,F),F=F.sibling;return null}function p(W,F){for(W=new Map;F!==null;)F.key!==null?W.set(F.key,F):W.set(F.index,F),F=F.sibling;return W}function v(W,F){return W=zn(W,F),W.index=0,W.sibling=null,W}function w(W,F,V){return W.index=V,a?(V=W.alternate,V!==null?(V=V.index,V<F?(W.flags|=2,F):V):(W.flags|=2,F)):(W.flags|=1048576,F)}function k(W){return a&&W.alternate===null&&(W.flags|=2),W}function N(W,F,V,le){return F===null||F.tag!==6?(F=Id(V,W.mode,le),F.return=W,F):(F=v(F,V),F.return=W,F)}function L(W,F,V,le){var ve=V.type;return ve===C?ne(W,F,V.props.children,le,V.key):F!==null&&(F.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===J&&Z1(ve)===F.type)?(le=v(F,V.props),le.ref=vo(W,F,V),le.return=W,le):(le=Xs(V.type,V.key,V.props,null,W.mode,le),le.ref=vo(W,F,V),le.return=W,le)}function Y(W,F,V,le){return F===null||F.tag!==4||F.stateNode.containerInfo!==V.containerInfo||F.stateNode.implementation!==V.implementation?(F=$d(V,W.mode,le),F.return=W,F):(F=v(F,V.children||[]),F.return=W,F)}function ne(W,F,V,le,ve){return F===null||F.tag!==7?(F=fa(V,W.mode,le,ve),F.return=W,F):(F=v(F,V),F.return=W,F)}function ie(W,F,V){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Id(""+F,W.mode,V),F.return=W,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case O:return V=Xs(F.type,F.key,F.props,null,W.mode,V),V.ref=vo(W,null,F),V.return=W,V;case P:return F=$d(F,W.mode,V),F.return=W,F;case J:var le=F._init;return ie(W,le(F._payload),V)}if($r(F)||ee(F))return F=fa(F,W.mode,V,null),F.return=W,F;Os(W,F)}return null}function re(W,F,V,le){var ve=F!==null?F.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return ve!==null?null:N(W,F,""+V,le);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case O:return V.key===ve?L(W,F,V,le):null;case P:return V.key===ve?Y(W,F,V,le):null;case J:return ve=V._init,re(W,F,ve(V._payload),le)}if($r(V)||ee(V))return ve!==null?null:ne(W,F,V,le,null);Os(W,V)}return null}function fe(W,F,V,le,ve){if(typeof le=="string"&&le!==""||typeof le=="number")return W=W.get(V)||null,N(F,W,""+le,ve);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case O:return W=W.get(le.key===null?V:le.key)||null,L(F,W,le,ve);case P:return W=W.get(le.key===null?V:le.key)||null,Y(F,W,le,ve);case J:var xe=le._init;return fe(W,F,V,xe(le._payload),ve)}if($r(le)||ee(le))return W=W.get(V)||null,ne(F,W,le,ve,null);Os(F,le)}return null}function he(W,F,V,le){for(var ve=null,xe=null,we=F,_e=F=0,bt=null;we!==null&&_e<V.length;_e++){we.index>_e?(bt=we,we=null):bt=we.sibling;var Re=re(W,we,V[_e],le);if(Re===null){we===null&&(we=bt);break}a&&we&&Re.alternate===null&&l(W,we),F=w(Re,F,_e),xe===null?ve=Re:xe.sibling=Re,xe=Re,we=bt}if(_e===V.length)return c(W,we),Ye&&na(W,_e),ve;if(we===null){for(;_e<V.length;_e++)we=ie(W,V[_e],le),we!==null&&(F=w(we,F,_e),xe===null?ve=we:xe.sibling=we,xe=we);return Ye&&na(W,_e),ve}for(we=p(W,we);_e<V.length;_e++)bt=fe(we,W,_e,V[_e],le),bt!==null&&(a&&bt.alternate!==null&&we.delete(bt.key===null?_e:bt.key),F=w(bt,F,_e),xe===null?ve=bt:xe.sibling=bt,xe=bt);return a&&we.forEach(function(Un){return l(W,Un)}),Ye&&na(W,_e),ve}function ye(W,F,V,le){var ve=ee(V);if(typeof ve!="function")throw Error(r(150));if(V=ve.call(V),V==null)throw Error(r(151));for(var xe=ve=null,we=F,_e=F=0,bt=null,Re=V.next();we!==null&&!Re.done;_e++,Re=V.next()){we.index>_e?(bt=we,we=null):bt=we.sibling;var Un=re(W,we,Re.value,le);if(Un===null){we===null&&(we=bt);break}a&&we&&Un.alternate===null&&l(W,we),F=w(Un,F,_e),xe===null?ve=Un:xe.sibling=Un,xe=Un,we=bt}if(Re.done)return c(W,we),Ye&&na(W,_e),ve;if(we===null){for(;!Re.done;_e++,Re=V.next())Re=ie(W,Re.value,le),Re!==null&&(F=w(Re,F,_e),xe===null?ve=Re:xe.sibling=Re,xe=Re);return Ye&&na(W,_e),ve}for(we=p(W,we);!Re.done;_e++,Re=V.next())Re=fe(we,W,_e,Re.value,le),Re!==null&&(a&&Re.alternate!==null&&we.delete(Re.key===null?_e:Re.key),F=w(Re,F,_e),xe===null?ve=Re:xe.sibling=Re,xe=Re);return a&&we.forEach(function(SP){return l(W,SP)}),Ye&&na(W,_e),ve}function ot(W,F,V,le){if(typeof V=="object"&&V!==null&&V.type===C&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case O:e:{for(var ve=V.key,xe=F;xe!==null;){if(xe.key===ve){if(ve=V.type,ve===C){if(xe.tag===7){c(W,xe.sibling),F=v(xe,V.props.children),F.return=W,W=F;break e}}else if(xe.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===J&&Z1(ve)===xe.type){c(W,xe.sibling),F=v(xe,V.props),F.ref=vo(W,xe,V),F.return=W,W=F;break e}c(W,xe);break}else l(W,xe);xe=xe.sibling}V.type===C?(F=fa(V.props.children,W.mode,le,V.key),F.return=W,W=F):(le=Xs(V.type,V.key,V.props,null,W.mode,le),le.ref=vo(W,F,V),le.return=W,W=le)}return k(W);case P:e:{for(xe=V.key;F!==null;){if(F.key===xe)if(F.tag===4&&F.stateNode.containerInfo===V.containerInfo&&F.stateNode.implementation===V.implementation){c(W,F.sibling),F=v(F,V.children||[]),F.return=W,W=F;break e}else{c(W,F);break}else l(W,F);F=F.sibling}F=$d(V,W.mode,le),F.return=W,W=F}return k(W);case J:return xe=V._init,ot(W,F,xe(V._payload),le)}if($r(V))return he(W,F,V,le);if(ee(V))return ye(W,F,V,le);Os(W,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,F!==null&&F.tag===6?(c(W,F.sibling),F=v(F,V),F.return=W,W=F):(c(W,F),F=Id(V,W.mode,le),F.return=W,W=F),k(W)):c(W,F)}return ot}var Wa=eg(!0),tg=eg(!1),As=Nn(null),Es=null,Ha=null,Vf=null;function Kf(){Vf=Ha=Es=null}function Gf(a){var l=As.current;Ge(As),a._currentValue=l}function Xf(a,l,c){for(;a!==null;){var p=a.alternate;if((a.childLanes&l)!==l?(a.childLanes|=l,p!==null&&(p.childLanes|=l)):p!==null&&(p.childLanes&l)!==l&&(p.childLanes|=l),a===c)break;a=a.return}}function Va(a,l){Es=a,Vf=Ha=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&l)!==0&&(qt=!0),a.firstContext=null)}function ir(a){var l=a._currentValue;if(Vf!==a)if(a={context:a,memoizedValue:l,next:null},Ha===null){if(Es===null)throw Error(r(308));Ha=a,Es.dependencies={lanes:0,firstContext:a}}else Ha=Ha.next=a;return l}var aa=null;function Yf(a){aa===null?aa=[a]:aa.push(a)}function rg(a,l,c,p){var v=l.interleaved;return v===null?(c.next=c,Yf(l)):(c.next=v.next,v.next=c),l.interleaved=c,nn(a,p)}function nn(a,l){a.lanes|=l;var c=a.alternate;for(c!==null&&(c.lanes|=l),c=a,a=a.return;a!==null;)a.childLanes|=l,c=a.alternate,c!==null&&(c.childLanes|=l),c=a,a=a.return;return c.tag===3?c.stateNode:null}var Rn=!1;function Qf(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(a,l){a=a.updateQueue,l.updateQueue===a&&(l.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function an(a,l){return{eventTime:a,lane:l,tag:0,payload:null,callback:null,next:null}}function In(a,l,c){var p=a.updateQueue;if(p===null)return null;if(p=p.shared,(Me&2)!==0){var v=p.pending;return v===null?l.next=l:(l.next=v.next,v.next=l),p.pending=l,nn(a,c)}return v=p.interleaved,v===null?(l.next=l,Yf(p)):(l.next=v.next,v.next=l),p.interleaved=l,nn(a,c)}function Ps(a,l,c){if(l=l.updateQueue,l!==null&&(l=l.shared,(c&4194240)!==0)){var p=l.lanes;p&=a.pendingLanes,c|=p,l.lanes=c,ff(a,c)}}function ag(a,l){var c=a.updateQueue,p=a.alternate;if(p!==null&&(p=p.updateQueue,c===p)){var v=null,w=null;if(c=c.firstBaseUpdate,c!==null){do{var k={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};w===null?v=w=k:w=w.next=k,c=c.next}while(c!==null);w===null?v=w=l:w=w.next=l}else v=w=l;c={baseState:p.baseState,firstBaseUpdate:v,lastBaseUpdate:w,shared:p.shared,effects:p.effects},a.updateQueue=c;return}a=c.lastBaseUpdate,a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=l}function ks(a,l,c,p){var v=a.updateQueue;Rn=!1;var w=v.firstBaseUpdate,k=v.lastBaseUpdate,N=v.shared.pending;if(N!==null){v.shared.pending=null;var L=N,Y=L.next;L.next=null,k===null?w=Y:k.next=Y,k=L;var ne=a.alternate;ne!==null&&(ne=ne.updateQueue,N=ne.lastBaseUpdate,N!==k&&(N===null?ne.firstBaseUpdate=Y:N.next=Y,ne.lastBaseUpdate=L))}if(w!==null){var ie=v.baseState;k=0,ne=Y=L=null,N=w;do{var re=N.lane,fe=N.eventTime;if((p&re)===re){ne!==null&&(ne=ne.next={eventTime:fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var he=a,ye=N;switch(re=l,fe=c,ye.tag){case 1:if(he=ye.payload,typeof he=="function"){ie=he.call(fe,ie,re);break e}ie=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=ye.payload,re=typeof he=="function"?he.call(fe,ie,re):he,re==null)break e;ie=Q({},ie,re);break e;case 2:Rn=!0}}N.callback!==null&&N.lane!==0&&(a.flags|=64,re=v.effects,re===null?v.effects=[N]:re.push(N))}else fe={eventTime:fe,lane:re,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ne===null?(Y=ne=fe,L=ie):ne=ne.next=fe,k|=re;if(N=N.next,N===null){if(N=v.shared.pending,N===null)break;re=N,N=re.next,re.next=null,v.lastBaseUpdate=re,v.shared.pending=null}}while(!0);if(ne===null&&(L=ie),v.baseState=L,v.firstBaseUpdate=Y,v.lastBaseUpdate=ne,l=v.shared.interleaved,l!==null){v=l;do k|=v.lane,v=v.next;while(v!==l)}else w===null&&(v.shared.lanes=0);la|=k,a.lanes=k,a.memoizedState=ie}}function ig(a,l,c){if(a=l.effects,l.effects=null,a!==null)for(l=0;l<a.length;l++){var p=a[l],v=p.callback;if(v!==null){if(p.callback=null,p=c,typeof v!="function")throw Error(r(191,v));v.call(p)}}}var go={},Br=Nn(go),bo=Nn(go),xo=Nn(go);function ia(a){if(a===go)throw Error(r(174));return a}function Jf(a,l){switch(He(xo,l),He(bo,a),He(Br,go),a=l.nodeType,a){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:Jc(null,"");break;default:a=a===8?l.parentNode:l,l=a.namespaceURI||null,a=a.tagName,l=Jc(l,a)}Ge(Br),He(Br,l)}function Ka(){Ge(Br),Ge(bo),Ge(xo)}function og(a){ia(xo.current);var l=ia(Br.current),c=Jc(l,a.type);l!==c&&(He(bo,a),He(Br,c))}function Zf(a){bo.current===a&&(Ge(Br),Ge(bo))}var Je=Nn(0);function Ts(a){for(var l=a;l!==null;){if(l.tag===13){var c=l.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var ed=[];function td(){for(var a=0;a<ed.length;a++)ed[a]._workInProgressVersionPrimary=null;ed.length=0}var Cs=T.ReactCurrentDispatcher,rd=T.ReactCurrentBatchConfig,oa=0,Ze=null,ft=null,vt=null,Ns=!1,wo=!1,So=0,WE=0;function Et(){throw Error(r(321))}function nd(a,l){if(l===null)return!1;for(var c=0;c<l.length&&c<a.length;c++)if(!wr(a[c],l[c]))return!1;return!0}function ad(a,l,c,p,v,w){if(oa=w,Ze=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Cs.current=a===null||a.memoizedState===null?GE:XE,a=c(p,v),wo){w=0;do{if(wo=!1,So=0,25<=w)throw Error(r(301));w+=1,vt=ft=null,l.updateQueue=null,Cs.current=YE,a=c(p,v)}while(wo)}if(Cs.current=Rs,l=ft!==null&&ft.next!==null,oa=0,vt=ft=Ze=null,Ns=!1,l)throw Error(r(300));return a}function id(){var a=So!==0;return So=0,a}function qr(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ze.memoizedState=vt=a:vt=vt.next=a,vt}function or(){if(ft===null){var a=Ze.alternate;a=a!==null?a.memoizedState:null}else a=ft.next;var l=vt===null?Ze.memoizedState:vt.next;if(l!==null)vt=l,ft=a;else{if(a===null)throw Error(r(310));ft=a,a={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?Ze.memoizedState=vt=a:vt=vt.next=a}return vt}function _o(a,l){return typeof l=="function"?l(a):l}function od(a){var l=or(),c=l.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=a;var p=ft,v=p.baseQueue,w=c.pending;if(w!==null){if(v!==null){var k=v.next;v.next=w.next,w.next=k}p.baseQueue=v=w,c.pending=null}if(v!==null){w=v.next,p=p.baseState;var N=k=null,L=null,Y=w;do{var ne=Y.lane;if((oa&ne)===ne)L!==null&&(L=L.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),p=Y.hasEagerState?Y.eagerState:a(p,Y.action);else{var ie={lane:ne,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};L===null?(N=L=ie,k=p):L=L.next=ie,Ze.lanes|=ne,la|=ne}Y=Y.next}while(Y!==null&&Y!==w);L===null?k=p:L.next=N,wr(p,l.memoizedState)||(qt=!0),l.memoizedState=p,l.baseState=k,l.baseQueue=L,c.lastRenderedState=p}if(a=c.interleaved,a!==null){v=a;do w=v.lane,Ze.lanes|=w,la|=w,v=v.next;while(v!==a)}else v===null&&(c.lanes=0);return[l.memoizedState,c.dispatch]}function ld(a){var l=or(),c=l.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=a;var p=c.dispatch,v=c.pending,w=l.memoizedState;if(v!==null){c.pending=null;var k=v=v.next;do w=a(w,k.action),k=k.next;while(k!==v);wr(w,l.memoizedState)||(qt=!0),l.memoizedState=w,l.baseQueue===null&&(l.baseState=w),c.lastRenderedState=w}return[w,p]}function lg(){}function sg(a,l){var c=Ze,p=or(),v=l(),w=!wr(p.memoizedState,v);if(w&&(p.memoizedState=v,qt=!0),p=p.queue,sd(fg.bind(null,c,p,a),[a]),p.getSnapshot!==l||w||vt!==null&&vt.memoizedState.tag&1){if(c.flags|=2048,jo(9,cg.bind(null,c,p,v,l),void 0,null),gt===null)throw Error(r(349));(oa&30)!==0||ug(c,l,v)}return v}function ug(a,l,c){a.flags|=16384,a={getSnapshot:l,value:c},l=Ze.updateQueue,l===null?(l={lastEffect:null,stores:null},Ze.updateQueue=l,l.stores=[a]):(c=l.stores,c===null?l.stores=[a]:c.push(a))}function cg(a,l,c,p){l.value=c,l.getSnapshot=p,dg(l)&&pg(a)}function fg(a,l,c){return c(function(){dg(l)&&pg(a)})}function dg(a){var l=a.getSnapshot;a=a.value;try{var c=l();return!wr(a,c)}catch{return!0}}function pg(a){var l=nn(a,1);l!==null&&Ar(l,a,1,-1)}function hg(a){var l=qr();return typeof a=="function"&&(a=a()),l.memoizedState=l.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:a},l.queue=a,a=a.dispatch=KE.bind(null,Ze,a),[l.memoizedState,a]}function jo(a,l,c,p){return a={tag:a,create:l,destroy:c,deps:p,next:null},l=Ze.updateQueue,l===null?(l={lastEffect:null,stores:null},Ze.updateQueue=l,l.lastEffect=a.next=a):(c=l.lastEffect,c===null?l.lastEffect=a.next=a:(p=c.next,c.next=a,a.next=p,l.lastEffect=a)),a}function mg(){return or().memoizedState}function Ds(a,l,c,p){var v=qr();Ze.flags|=a,v.memoizedState=jo(1|l,c,void 0,p===void 0?null:p)}function Ms(a,l,c,p){var v=or();p=p===void 0?null:p;var w=void 0;if(ft!==null){var k=ft.memoizedState;if(w=k.destroy,p!==null&&nd(p,k.deps)){v.memoizedState=jo(l,c,w,p);return}}Ze.flags|=a,v.memoizedState=jo(1|l,c,w,p)}function yg(a,l){return Ds(8390656,8,a,l)}function sd(a,l){return Ms(2048,8,a,l)}function vg(a,l){return Ms(4,2,a,l)}function gg(a,l){return Ms(4,4,a,l)}function bg(a,l){if(typeof l=="function")return a=a(),l(a),function(){l(null)};if(l!=null)return a=a(),l.current=a,function(){l.current=null}}function xg(a,l,c){return c=c!=null?c.concat([a]):null,Ms(4,4,bg.bind(null,l,a),c)}function ud(){}function wg(a,l){var c=or();l=l===void 0?null:l;var p=c.memoizedState;return p!==null&&l!==null&&nd(l,p[1])?p[0]:(c.memoizedState=[a,l],a)}function Sg(a,l){var c=or();l=l===void 0?null:l;var p=c.memoizedState;return p!==null&&l!==null&&nd(l,p[1])?p[0]:(a=a(),c.memoizedState=[a,l],a)}function _g(a,l,c){return(oa&21)===0?(a.baseState&&(a.baseState=!1,qt=!0),a.memoizedState=c):(wr(c,l)||(c=Zv(),Ze.lanes|=c,la|=c,a.baseState=!0),l)}function HE(a,l){var c=Be;Be=c!==0&&4>c?c:4,a(!0);var p=rd.transition;rd.transition={};try{a(!1),l()}finally{Be=c,rd.transition=p}}function jg(){return or().memoizedState}function VE(a,l,c){var p=Bn(a);if(c={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null},Og(a))Ag(l,c);else if(c=rg(a,l,c,p),c!==null){var v=Mt();Ar(c,a,p,v),Eg(c,l,p)}}function KE(a,l,c){var p=Bn(a),v={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null};if(Og(a))Ag(l,v);else{var w=a.alternate;if(a.lanes===0&&(w===null||w.lanes===0)&&(w=l.lastRenderedReducer,w!==null))try{var k=l.lastRenderedState,N=w(k,c);if(v.hasEagerState=!0,v.eagerState=N,wr(N,k)){var L=l.interleaved;L===null?(v.next=v,Yf(l)):(v.next=L.next,L.next=v),l.interleaved=v;return}}catch{}finally{}c=rg(a,l,v,p),c!==null&&(v=Mt(),Ar(c,a,p,v),Eg(c,l,p))}}function Og(a){var l=a.alternate;return a===Ze||l!==null&&l===Ze}function Ag(a,l){wo=Ns=!0;var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}function Eg(a,l,c){if((c&4194240)!==0){var p=l.lanes;p&=a.pendingLanes,c|=p,l.lanes=c,ff(a,c)}}var Rs={readContext:ir,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},GE={readContext:ir,useCallback:function(a,l){return qr().memoizedState=[a,l===void 0?null:l],a},useContext:ir,useEffect:yg,useImperativeHandle:function(a,l,c){return c=c!=null?c.concat([a]):null,Ds(4194308,4,bg.bind(null,l,a),c)},useLayoutEffect:function(a,l){return Ds(4194308,4,a,l)},useInsertionEffect:function(a,l){return Ds(4,2,a,l)},useMemo:function(a,l){var c=qr();return l=l===void 0?null:l,a=a(),c.memoizedState=[a,l],a},useReducer:function(a,l,c){var p=qr();return l=c!==void 0?c(l):l,p.memoizedState=p.baseState=l,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},p.queue=a,a=a.dispatch=VE.bind(null,Ze,a),[p.memoizedState,a]},useRef:function(a){var l=qr();return a={current:a},l.memoizedState=a},useState:hg,useDebugValue:ud,useDeferredValue:function(a){return qr().memoizedState=a},useTransition:function(){var a=hg(!1),l=a[0];return a=HE.bind(null,a[1]),qr().memoizedState=a,[l,a]},useMutableSource:function(){},useSyncExternalStore:function(a,l,c){var p=Ze,v=qr();if(Ye){if(c===void 0)throw Error(r(407));c=c()}else{if(c=l(),gt===null)throw Error(r(349));(oa&30)!==0||ug(p,l,c)}v.memoizedState=c;var w={value:c,getSnapshot:l};return v.queue=w,yg(fg.bind(null,p,w,a),[a]),p.flags|=2048,jo(9,cg.bind(null,p,w,c,l),void 0,null),c},useId:function(){var a=qr(),l=gt.identifierPrefix;if(Ye){var c=rn,p=tn;c=(p&~(1<<32-xr(p)-1)).toString(32)+c,l=":"+l+"R"+c,c=So++,0<c&&(l+="H"+c.toString(32)),l+=":"}else c=WE++,l=":"+l+"r"+c.toString(32)+":";return a.memoizedState=l},unstable_isNewReconciler:!1},XE={readContext:ir,useCallback:wg,useContext:ir,useEffect:sd,useImperativeHandle:xg,useInsertionEffect:vg,useLayoutEffect:gg,useMemo:Sg,useReducer:od,useRef:mg,useState:function(){return od(_o)},useDebugValue:ud,useDeferredValue:function(a){var l=or();return _g(l,ft.memoizedState,a)},useTransition:function(){var a=od(_o)[0],l=or().memoizedState;return[a,l]},useMutableSource:lg,useSyncExternalStore:sg,useId:jg,unstable_isNewReconciler:!1},YE={readContext:ir,useCallback:wg,useContext:ir,useEffect:sd,useImperativeHandle:xg,useInsertionEffect:vg,useLayoutEffect:gg,useMemo:Sg,useReducer:ld,useRef:mg,useState:function(){return ld(_o)},useDebugValue:ud,useDeferredValue:function(a){var l=or();return ft===null?l.memoizedState=a:_g(l,ft.memoizedState,a)},useTransition:function(){var a=ld(_o)[0],l=or().memoizedState;return[a,l]},useMutableSource:lg,useSyncExternalStore:sg,useId:jg,unstable_isNewReconciler:!1};function _r(a,l){if(a&&a.defaultProps){l=Q({},l),a=a.defaultProps;for(var c in a)l[c]===void 0&&(l[c]=a[c]);return l}return l}function cd(a,l,c,p){l=a.memoizedState,c=c(p,l),c=c==null?l:Q({},l,c),a.memoizedState=c,a.lanes===0&&(a.updateQueue.baseState=c)}var Is={isMounted:function(a){return(a=a._reactInternals)?Zn(a)===a:!1},enqueueSetState:function(a,l,c){a=a._reactInternals;var p=Mt(),v=Bn(a),w=an(p,v);w.payload=l,c!=null&&(w.callback=c),l=In(a,w,v),l!==null&&(Ar(l,a,v,p),Ps(l,a,v))},enqueueReplaceState:function(a,l,c){a=a._reactInternals;var p=Mt(),v=Bn(a),w=an(p,v);w.tag=1,w.payload=l,c!=null&&(w.callback=c),l=In(a,w,v),l!==null&&(Ar(l,a,v,p),Ps(l,a,v))},enqueueForceUpdate:function(a,l){a=a._reactInternals;var c=Mt(),p=Bn(a),v=an(c,p);v.tag=2,l!=null&&(v.callback=l),l=In(a,v,p),l!==null&&(Ar(l,a,p,c),Ps(l,a,p))}};function Pg(a,l,c,p,v,w,k){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(p,w,k):l.prototype&&l.prototype.isPureReactComponent?!uo(c,p)||!uo(v,w):!0}function kg(a,l,c){var p=!1,v=Dn,w=l.contextType;return typeof w=="object"&&w!==null?w=ir(w):(v=Bt(l)?ta:At.current,p=l.contextTypes,w=(p=p!=null)?Ba(a,v):Dn),l=new l(c,w),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Is,a.stateNode=l,l._reactInternals=a,p&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=v,a.__reactInternalMemoizedMaskedChildContext=w),l}function Tg(a,l,c,p){a=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(c,p),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(c,p),l.state!==a&&Is.enqueueReplaceState(l,l.state,null)}function fd(a,l,c,p){var v=a.stateNode;v.props=c,v.state=a.memoizedState,v.refs={},Qf(a);var w=l.contextType;typeof w=="object"&&w!==null?v.context=ir(w):(w=Bt(l)?ta:At.current,v.context=Ba(a,w)),v.state=a.memoizedState,w=l.getDerivedStateFromProps,typeof w=="function"&&(cd(a,l,w,c),v.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(l=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),l!==v.state&&Is.enqueueReplaceState(v,v.state,null),ks(a,c,v,p),v.state=a.memoizedState),typeof v.componentDidMount=="function"&&(a.flags|=4194308)}function Ga(a,l){try{var c="",p=l;do c+=be(p),p=p.return;while(p);var v=c}catch(w){v=`
Error generating stack: `+w.message+`
`+w.stack}return{value:a,source:l,stack:v,digest:null}}function dd(a,l,c){return{value:a,source:null,stack:c??null,digest:l??null}}function pd(a,l){try{console.error(l.value)}catch(c){setTimeout(function(){throw c})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function Cg(a,l,c){c=an(-1,c),c.tag=3,c.payload={element:null};var p=l.value;return c.callback=function(){Us||(Us=!0,Pd=p),pd(a,l)},c}function Ng(a,l,c){c=an(-1,c),c.tag=3;var p=a.type.getDerivedStateFromError;if(typeof p=="function"){var v=l.value;c.payload=function(){return p(v)},c.callback=function(){pd(a,l)}}var w=a.stateNode;return w!==null&&typeof w.componentDidCatch=="function"&&(c.callback=function(){pd(a,l),typeof p!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})}),c}function Dg(a,l,c){var p=a.pingCache;if(p===null){p=a.pingCache=new QE;var v=new Set;p.set(l,v)}else v=p.get(l),v===void 0&&(v=new Set,p.set(l,v));v.has(c)||(v.add(c),a=fP.bind(null,a,l,c),l.then(a,a))}function Mg(a){do{var l;if((l=a.tag===13)&&(l=a.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return a;a=a.return}while(a!==null);return null}function Rg(a,l,c,p,v){return(a.mode&1)===0?(a===l?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(l=an(-1,1),l.tag=2,In(c,l,1))),c.lanes|=1),a):(a.flags|=65536,a.lanes=v,a)}var JE=T.ReactCurrentOwner,qt=!1;function Dt(a,l,c,p){l.child=a===null?tg(l,null,c,p):Wa(l,a.child,c,p)}function Ig(a,l,c,p,v){c=c.render;var w=l.ref;return Va(l,v),p=ad(a,l,c,p,w,v),c=id(),a!==null&&!qt?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~v,on(a,l,v)):(Ye&&c&&qf(l),l.flags|=1,Dt(a,l,p,v),l.child)}function $g(a,l,c,p,v){if(a===null){var w=c.type;return typeof w=="function"&&!Rd(w)&&w.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(l.tag=15,l.type=w,Lg(a,l,w,p,v)):(a=Xs(c.type,null,p,l,l.mode,v),a.ref=l.ref,a.return=l,l.child=a)}if(w=a.child,(a.lanes&v)===0){var k=w.memoizedProps;if(c=c.compare,c=c!==null?c:uo,c(k,p)&&a.ref===l.ref)return on(a,l,v)}return l.flags|=1,a=zn(w,p),a.ref=l.ref,a.return=l,l.child=a}function Lg(a,l,c,p,v){if(a!==null){var w=a.memoizedProps;if(uo(w,p)&&a.ref===l.ref)if(qt=!1,l.pendingProps=p=w,(a.lanes&v)!==0)(a.flags&131072)!==0&&(qt=!0);else return l.lanes=a.lanes,on(a,l,v)}return hd(a,l,c,p,v)}function Fg(a,l,c){var p=l.pendingProps,v=p.children,w=a!==null?a.memoizedState:null;if(p.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Ya,Xt),Xt|=c;else{if((c&1073741824)===0)return a=w!==null?w.baseLanes|c:c,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:a,cachePool:null,transitions:null},l.updateQueue=null,He(Ya,Xt),Xt|=a,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=w!==null?w.baseLanes:c,He(Ya,Xt),Xt|=p}else w!==null?(p=w.baseLanes|c,l.memoizedState=null):p=c,He(Ya,Xt),Xt|=p;return Dt(a,l,v,c),l.child}function Bg(a,l){var c=l.ref;(a===null&&c!==null||a!==null&&a.ref!==c)&&(l.flags|=512,l.flags|=2097152)}function hd(a,l,c,p,v){var w=Bt(c)?ta:At.current;return w=Ba(l,w),Va(l,v),c=ad(a,l,c,p,w,v),p=id(),a!==null&&!qt?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~v,on(a,l,v)):(Ye&&p&&qf(l),l.flags|=1,Dt(a,l,c,v),l.child)}function qg(a,l,c,p,v){if(Bt(c)){var w=!0;xs(l)}else w=!1;if(Va(l,v),l.stateNode===null)Ls(a,l),kg(l,c,p),fd(l,c,p,v),p=!0;else if(a===null){var k=l.stateNode,N=l.memoizedProps;k.props=N;var L=k.context,Y=c.contextType;typeof Y=="object"&&Y!==null?Y=ir(Y):(Y=Bt(c)?ta:At.current,Y=Ba(l,Y));var ne=c.getDerivedStateFromProps,ie=typeof ne=="function"||typeof k.getSnapshotBeforeUpdate=="function";ie||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(N!==p||L!==Y)&&Tg(l,k,p,Y),Rn=!1;var re=l.memoizedState;k.state=re,ks(l,p,k,v),L=l.memoizedState,N!==p||re!==L||Ft.current||Rn?(typeof ne=="function"&&(cd(l,c,ne,p),L=l.memoizedState),(N=Rn||Pg(l,c,N,p,re,L,Y))?(ie||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(l.flags|=4194308)):(typeof k.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=p,l.memoizedState=L),k.props=p,k.state=L,k.context=Y,p=N):(typeof k.componentDidMount=="function"&&(l.flags|=4194308),p=!1)}else{k=l.stateNode,ng(a,l),N=l.memoizedProps,Y=l.type===l.elementType?N:_r(l.type,N),k.props=Y,ie=l.pendingProps,re=k.context,L=c.contextType,typeof L=="object"&&L!==null?L=ir(L):(L=Bt(c)?ta:At.current,L=Ba(l,L));var fe=c.getDerivedStateFromProps;(ne=typeof fe=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(N!==ie||re!==L)&&Tg(l,k,p,L),Rn=!1,re=l.memoizedState,k.state=re,ks(l,p,k,v);var he=l.memoizedState;N!==ie||re!==he||Ft.current||Rn?(typeof fe=="function"&&(cd(l,c,fe,p),he=l.memoizedState),(Y=Rn||Pg(l,c,Y,p,re,he,L)||!1)?(ne||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(p,he,L),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(p,he,L)),typeof k.componentDidUpdate=="function"&&(l.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof k.componentDidUpdate!="function"||N===a.memoizedProps&&re===a.memoizedState||(l.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||N===a.memoizedProps&&re===a.memoizedState||(l.flags|=1024),l.memoizedProps=p,l.memoizedState=he),k.props=p,k.state=he,k.context=L,p=Y):(typeof k.componentDidUpdate!="function"||N===a.memoizedProps&&re===a.memoizedState||(l.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||N===a.memoizedProps&&re===a.memoizedState||(l.flags|=1024),p=!1)}return md(a,l,c,p,w,v)}function md(a,l,c,p,v,w){Bg(a,l);var k=(l.flags&128)!==0;if(!p&&!k)return v&&V1(l,c,!1),on(a,l,w);p=l.stateNode,JE.current=l;var N=k&&typeof c.getDerivedStateFromError!="function"?null:p.render();return l.flags|=1,a!==null&&k?(l.child=Wa(l,a.child,null,w),l.child=Wa(l,null,N,w)):Dt(a,l,N,w),l.memoizedState=p.state,v&&V1(l,c,!0),l.child}function zg(a){var l=a.stateNode;l.pendingContext?W1(a,l.pendingContext,l.pendingContext!==l.context):l.context&&W1(a,l.context,!1),Jf(a,l.containerInfo)}function Ug(a,l,c,p,v){return Ua(),Hf(v),l.flags|=256,Dt(a,l,c,p),l.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function vd(a){return{baseLanes:a,cachePool:null,transitions:null}}function Wg(a,l,c){var p=l.pendingProps,v=Je.current,w=!1,k=(l.flags&128)!==0,N;if((N=k)||(N=a!==null&&a.memoizedState===null?!1:(v&2)!==0),N?(w=!0,l.flags&=-129):(a===null||a.memoizedState!==null)&&(v|=1),He(Je,v&1),a===null)return Wf(l),a=l.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((l.mode&1)===0?l.lanes=1:a.data==="$!"?l.lanes=8:l.lanes=1073741824,null):(k=p.children,a=p.fallback,w?(p=l.mode,w=l.child,k={mode:"hidden",children:k},(p&1)===0&&w!==null?(w.childLanes=0,w.pendingProps=k):w=Ys(k,p,0,null),a=fa(a,p,c,null),w.return=l,a.return=l,w.sibling=a,l.child=w,l.child.memoizedState=vd(c),l.memoizedState=yd,a):gd(l,k));if(v=a.memoizedState,v!==null&&(N=v.dehydrated,N!==null))return ZE(a,l,k,p,N,v,c);if(w){w=p.fallback,k=l.mode,v=a.child,N=v.sibling;var L={mode:"hidden",children:p.children};return(k&1)===0&&l.child!==v?(p=l.child,p.childLanes=0,p.pendingProps=L,l.deletions=null):(p=zn(v,L),p.subtreeFlags=v.subtreeFlags&14680064),N!==null?w=zn(N,w):(w=fa(w,k,c,null),w.flags|=2),w.return=l,p.return=l,p.sibling=w,l.child=p,p=w,w=l.child,k=a.child.memoizedState,k=k===null?vd(c):{baseLanes:k.baseLanes|c,cachePool:null,transitions:k.transitions},w.memoizedState=k,w.childLanes=a.childLanes&~c,l.memoizedState=yd,p}return w=a.child,a=w.sibling,p=zn(w,{mode:"visible",children:p.children}),(l.mode&1)===0&&(p.lanes=c),p.return=l,p.sibling=null,a!==null&&(c=l.deletions,c===null?(l.deletions=[a],l.flags|=16):c.push(a)),l.child=p,l.memoizedState=null,p}function gd(a,l){return l=Ys({mode:"visible",children:l},a.mode,0,null),l.return=a,a.child=l}function $s(a,l,c,p){return p!==null&&Hf(p),Wa(l,a.child,null,c),a=gd(l,l.pendingProps.children),a.flags|=2,l.memoizedState=null,a}function ZE(a,l,c,p,v,w,k){if(c)return l.flags&256?(l.flags&=-257,p=dd(Error(r(422))),$s(a,l,k,p)):l.memoizedState!==null?(l.child=a.child,l.flags|=128,null):(w=p.fallback,v=l.mode,p=Ys({mode:"visible",children:p.children},v,0,null),w=fa(w,v,k,null),w.flags|=2,p.return=l,w.return=l,p.sibling=w,l.child=p,(l.mode&1)!==0&&Wa(l,a.child,null,k),l.child.memoizedState=vd(k),l.memoizedState=yd,w);if((l.mode&1)===0)return $s(a,l,k,null);if(v.data==="$!"){if(p=v.nextSibling&&v.nextSibling.dataset,p)var N=p.dgst;return p=N,w=Error(r(419)),p=dd(w,p,void 0),$s(a,l,k,p)}if(N=(k&a.childLanes)!==0,qt||N){if(p=gt,p!==null){switch(k&-k){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(p.suspendedLanes|k))!==0?0:v,v!==0&&v!==w.retryLane&&(w.retryLane=v,nn(a,v),Ar(p,a,v,-1))}return Md(),p=dd(Error(r(421))),$s(a,l,k,p)}return v.data==="$?"?(l.flags|=128,l.child=a.child,l=dP.bind(null,a),v._reactRetry=l,null):(a=w.treeContext,Gt=Cn(v.nextSibling),Kt=l,Ye=!0,Sr=null,a!==null&&(nr[ar++]=tn,nr[ar++]=rn,nr[ar++]=ra,tn=a.id,rn=a.overflow,ra=l),l=gd(l,p.children),l.flags|=4096,l)}function Hg(a,l,c){a.lanes|=l;var p=a.alternate;p!==null&&(p.lanes|=l),Xf(a.return,l,c)}function bd(a,l,c,p,v){var w=a.memoizedState;w===null?a.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:p,tail:c,tailMode:v}:(w.isBackwards=l,w.rendering=null,w.renderingStartTime=0,w.last=p,w.tail=c,w.tailMode=v)}function Vg(a,l,c){var p=l.pendingProps,v=p.revealOrder,w=p.tail;if(Dt(a,l,p.children,c),p=Je.current,(p&2)!==0)p=p&1|2,l.flags|=128;else{if(a!==null&&(a.flags&128)!==0)e:for(a=l.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Hg(a,c,l);else if(a.tag===19)Hg(a,c,l);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}p&=1}if(He(Je,p),(l.mode&1)===0)l.memoizedState=null;else switch(v){case"forwards":for(c=l.child,v=null;c!==null;)a=c.alternate,a!==null&&Ts(a)===null&&(v=c),c=c.sibling;c=v,c===null?(v=l.child,l.child=null):(v=c.sibling,c.sibling=null),bd(l,!1,v,c,w);break;case"backwards":for(c=null,v=l.child,l.child=null;v!==null;){if(a=v.alternate,a!==null&&Ts(a)===null){l.child=v;break}a=v.sibling,v.sibling=c,c=v,v=a}bd(l,!0,c,null,w);break;case"together":bd(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function Ls(a,l){(l.mode&1)===0&&a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2)}function on(a,l,c){if(a!==null&&(l.dependencies=a.dependencies),la|=l.lanes,(c&l.childLanes)===0)return null;if(a!==null&&l.child!==a.child)throw Error(r(153));if(l.child!==null){for(a=l.child,c=zn(a,a.pendingProps),l.child=c,c.return=l;a.sibling!==null;)a=a.sibling,c=c.sibling=zn(a,a.pendingProps),c.return=l;c.sibling=null}return l.child}function eP(a,l,c){switch(l.tag){case 3:zg(l),Ua();break;case 5:og(l);break;case 1:Bt(l.type)&&xs(l);break;case 4:Jf(l,l.stateNode.containerInfo);break;case 10:var p=l.type._context,v=l.memoizedProps.value;He(As,p._currentValue),p._currentValue=v;break;case 13:if(p=l.memoizedState,p!==null)return p.dehydrated!==null?(He(Je,Je.current&1),l.flags|=128,null):(c&l.child.childLanes)!==0?Wg(a,l,c):(He(Je,Je.current&1),a=on(a,l,c),a!==null?a.sibling:null);He(Je,Je.current&1);break;case 19:if(p=(c&l.childLanes)!==0,(a.flags&128)!==0){if(p)return Vg(a,l,c);l.flags|=128}if(v=l.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),He(Je,Je.current),p)break;return null;case 22:case 23:return l.lanes=0,Fg(a,l,c)}return on(a,l,c)}var Kg,xd,Gg,Xg;Kg=function(a,l){for(var c=l.child;c!==null;){if(c.tag===5||c.tag===6)a.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===l)break;for(;c.sibling===null;){if(c.return===null||c.return===l)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},xd=function(){},Gg=function(a,l,c,p){var v=a.memoizedProps;if(v!==p){a=l.stateNode,ia(Br.current);var w=null;switch(c){case"input":v=Te(a,v),p=Te(a,p),w=[];break;case"select":v=Q({},v,{value:void 0}),p=Q({},p,{value:void 0}),w=[];break;case"textarea":v=br(a,v),p=br(a,p),w=[];break;default:typeof v.onClick!="function"&&typeof p.onClick=="function"&&(a.onclick=vs)}Zc(c,p);var k;c=null;for(Y in v)if(!p.hasOwnProperty(Y)&&v.hasOwnProperty(Y)&&v[Y]!=null)if(Y==="style"){var N=v[Y];for(k in N)N.hasOwnProperty(k)&&(c||(c={}),c[k]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(i.hasOwnProperty(Y)?w||(w=[]):(w=w||[]).push(Y,null));for(Y in p){var L=p[Y];if(N=v!=null?v[Y]:void 0,p.hasOwnProperty(Y)&&L!==N&&(L!=null||N!=null))if(Y==="style")if(N){for(k in N)!N.hasOwnProperty(k)||L&&L.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in L)L.hasOwnProperty(k)&&N[k]!==L[k]&&(c||(c={}),c[k]=L[k])}else c||(w||(w=[]),w.push(Y,c)),c=L;else Y==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,N=N?N.__html:void 0,L!=null&&N!==L&&(w=w||[]).push(Y,L)):Y==="children"?typeof L!="string"&&typeof L!="number"||(w=w||[]).push(Y,""+L):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(i.hasOwnProperty(Y)?(L!=null&&Y==="onScroll"&&Ke("scroll",a),w||N===L||(w=[])):(w=w||[]).push(Y,L))}c&&(w=w||[]).push("style",c);var Y=w;(l.updateQueue=Y)&&(l.flags|=4)}},Xg=function(a,l,c,p){c!==p&&(l.flags|=4)};function Oo(a,l){if(!Ye)switch(a.tailMode){case"hidden":l=a.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a.tail=null:c.sibling=null;break;case"collapsed":c=a.tail;for(var p=null;c!==null;)c.alternate!==null&&(p=c),c=c.sibling;p===null?l||a.tail===null?a.tail=null:a.tail.sibling=null:p.sibling=null}}function Pt(a){var l=a.alternate!==null&&a.alternate.child===a.child,c=0,p=0;if(l)for(var v=a.child;v!==null;)c|=v.lanes|v.childLanes,p|=v.subtreeFlags&14680064,p|=v.flags&14680064,v.return=a,v=v.sibling;else for(v=a.child;v!==null;)c|=v.lanes|v.childLanes,p|=v.subtreeFlags,p|=v.flags,v.return=a,v=v.sibling;return a.subtreeFlags|=p,a.childLanes=c,l}function tP(a,l,c){var p=l.pendingProps;switch(zf(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(l),null;case 1:return Bt(l.type)&&bs(),Pt(l),null;case 3:return p=l.stateNode,Ka(),Ge(Ft),Ge(At),td(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(a===null||a.child===null)&&(js(l)?l.flags|=4:a===null||a.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Sr!==null&&(Cd(Sr),Sr=null))),xd(a,l),Pt(l),null;case 5:Zf(l);var v=ia(xo.current);if(c=l.type,a!==null&&l.stateNode!=null)Gg(a,l,c,p,v),a.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!p){if(l.stateNode===null)throw Error(r(166));return Pt(l),null}if(a=ia(Br.current),js(l)){p=l.stateNode,c=l.type;var w=l.memoizedProps;switch(p[Fr]=l,p[mo]=w,a=(l.mode&1)!==0,c){case"dialog":Ke("cancel",p),Ke("close",p);break;case"iframe":case"object":case"embed":Ke("load",p);break;case"video":case"audio":for(v=0;v<fo.length;v++)Ke(fo[v],p);break;case"source":Ke("error",p);break;case"img":case"image":case"link":Ke("error",p),Ke("load",p);break;case"details":Ke("toggle",p);break;case"input":tt(p,w),Ke("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!w.multiple},Ke("invalid",p);break;case"textarea":Pa(p,w),Ke("invalid",p)}Zc(c,w),v=null;for(var k in w)if(w.hasOwnProperty(k)){var N=w[k];k==="children"?typeof N=="string"?p.textContent!==N&&(w.suppressHydrationWarning!==!0&&ys(p.textContent,N,a),v=["children",N]):typeof N=="number"&&p.textContent!==""+N&&(w.suppressHydrationWarning!==!0&&ys(p.textContent,N,a),v=["children",""+N]):i.hasOwnProperty(k)&&N!=null&&k==="onScroll"&&Ke("scroll",p)}switch(c){case"input":Ae(p),gr(p,w,!0);break;case"textarea":Ae(p),Hi(p);break;case"select":case"option":break;default:typeof w.onClick=="function"&&(p.onclick=vs)}p=v,l.updateQueue=p,p!==null&&(l.flags|=4)}else{k=v.nodeType===9?v:v.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=Rv(c)),a==="http://www.w3.org/1999/xhtml"?c==="script"?(a=k.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof p.is=="string"?a=k.createElement(c,{is:p.is}):(a=k.createElement(c),c==="select"&&(k=a,p.multiple?k.multiple=!0:p.size&&(k.size=p.size))):a=k.createElementNS(a,c),a[Fr]=l,a[mo]=p,Kg(a,l,!1,!1),l.stateNode=a;e:{switch(k=ef(c,p),c){case"dialog":Ke("cancel",a),Ke("close",a),v=p;break;case"iframe":case"object":case"embed":Ke("load",a),v=p;break;case"video":case"audio":for(v=0;v<fo.length;v++)Ke(fo[v],a);v=p;break;case"source":Ke("error",a),v=p;break;case"img":case"image":case"link":Ke("error",a),Ke("load",a),v=p;break;case"details":Ke("toggle",a),v=p;break;case"input":tt(a,p),v=Te(a,p),Ke("invalid",a);break;case"option":v=p;break;case"select":a._wrapperState={wasMultiple:!!p.multiple},v=Q({},p,{value:void 0}),Ke("invalid",a);break;case"textarea":Pa(a,p),v=br(a,p),Ke("invalid",a);break;default:v=p}Zc(c,v),N=v;for(w in N)if(N.hasOwnProperty(w)){var L=N[w];w==="style"?Lv(a,L):w==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&Iv(a,L)):w==="children"?typeof L=="string"?(c!=="textarea"||L!=="")&&Vi(a,L):typeof L=="number"&&Vi(a,""+L):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(i.hasOwnProperty(w)?L!=null&&w==="onScroll"&&Ke("scroll",a):L!=null&&E(a,w,L,k))}switch(c){case"input":Ae(a),gr(a,p,!1);break;case"textarea":Ae(a),Hi(a);break;case"option":p.value!=null&&a.setAttribute("value",""+Oe(p.value));break;case"select":a.multiple=!!p.multiple,w=p.value,w!=null?Lt(a,!!p.multiple,w,!1):p.defaultValue!=null&&Lt(a,!!p.multiple,p.defaultValue,!0);break;default:typeof v.onClick=="function"&&(a.onclick=vs)}switch(c){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Pt(l),null;case 6:if(a&&l.stateNode!=null)Xg(a,l,a.memoizedProps,p);else{if(typeof p!="string"&&l.stateNode===null)throw Error(r(166));if(c=ia(xo.current),ia(Br.current),js(l)){if(p=l.stateNode,c=l.memoizedProps,p[Fr]=l,(w=p.nodeValue!==c)&&(a=Kt,a!==null))switch(a.tag){case 3:ys(p.nodeValue,c,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&ys(p.nodeValue,c,(a.mode&1)!==0)}w&&(l.flags|=4)}else p=(c.nodeType===9?c:c.ownerDocument).createTextNode(p),p[Fr]=l,l.stateNode=p}return Pt(l),null;case 13:if(Ge(Je),p=l.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(Ye&&Gt!==null&&(l.mode&1)!==0&&(l.flags&128)===0)J1(),Ua(),l.flags|=98560,w=!1;else if(w=js(l),p!==null&&p.dehydrated!==null){if(a===null){if(!w)throw Error(r(318));if(w=l.memoizedState,w=w!==null?w.dehydrated:null,!w)throw Error(r(317));w[Fr]=l}else Ua(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;Pt(l),w=!1}else Sr!==null&&(Cd(Sr),Sr=null),w=!0;if(!w)return l.flags&65536?l:null}return(l.flags&128)!==0?(l.lanes=c,l):(p=p!==null,p!==(a!==null&&a.memoizedState!==null)&&p&&(l.child.flags|=8192,(l.mode&1)!==0&&(a===null||(Je.current&1)!==0?dt===0&&(dt=3):Md())),l.updateQueue!==null&&(l.flags|=4),Pt(l),null);case 4:return Ka(),xd(a,l),a===null&&po(l.stateNode.containerInfo),Pt(l),null;case 10:return Gf(l.type._context),Pt(l),null;case 17:return Bt(l.type)&&bs(),Pt(l),null;case 19:if(Ge(Je),w=l.memoizedState,w===null)return Pt(l),null;if(p=(l.flags&128)!==0,k=w.rendering,k===null)if(p)Oo(w,!1);else{if(dt!==0||a!==null&&(a.flags&128)!==0)for(a=l.child;a!==null;){if(k=Ts(a),k!==null){for(l.flags|=128,Oo(w,!1),p=k.updateQueue,p!==null&&(l.updateQueue=p,l.flags|=4),l.subtreeFlags=0,p=c,c=l.child;c!==null;)w=c,a=p,w.flags&=14680066,k=w.alternate,k===null?(w.childLanes=0,w.lanes=a,w.child=null,w.subtreeFlags=0,w.memoizedProps=null,w.memoizedState=null,w.updateQueue=null,w.dependencies=null,w.stateNode=null):(w.childLanes=k.childLanes,w.lanes=k.lanes,w.child=k.child,w.subtreeFlags=0,w.deletions=null,w.memoizedProps=k.memoizedProps,w.memoizedState=k.memoizedState,w.updateQueue=k.updateQueue,w.type=k.type,a=k.dependencies,w.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;return He(Je,Je.current&1|2),l.child}a=a.sibling}w.tail!==null&&it()>Qa&&(l.flags|=128,p=!0,Oo(w,!1),l.lanes=4194304)}else{if(!p)if(a=Ts(k),a!==null){if(l.flags|=128,p=!0,c=a.updateQueue,c!==null&&(l.updateQueue=c,l.flags|=4),Oo(w,!0),w.tail===null&&w.tailMode==="hidden"&&!k.alternate&&!Ye)return Pt(l),null}else 2*it()-w.renderingStartTime>Qa&&c!==1073741824&&(l.flags|=128,p=!0,Oo(w,!1),l.lanes=4194304);w.isBackwards?(k.sibling=l.child,l.child=k):(c=w.last,c!==null?c.sibling=k:l.child=k,w.last=k)}return w.tail!==null?(l=w.tail,w.rendering=l,w.tail=l.sibling,w.renderingStartTime=it(),l.sibling=null,c=Je.current,He(Je,p?c&1|2:c&1),l):(Pt(l),null);case 22:case 23:return Dd(),p=l.memoizedState!==null,a!==null&&a.memoizedState!==null!==p&&(l.flags|=8192),p&&(l.mode&1)!==0?(Xt&1073741824)!==0&&(Pt(l),l.subtreeFlags&6&&(l.flags|=8192)):Pt(l),null;case 24:return null;case 25:return null}throw Error(r(156,l.tag))}function rP(a,l){switch(zf(l),l.tag){case 1:return Bt(l.type)&&bs(),a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 3:return Ka(),Ge(Ft),Ge(At),td(),a=l.flags,(a&65536)!==0&&(a&128)===0?(l.flags=a&-65537|128,l):null;case 5:return Zf(l),null;case 13:if(Ge(Je),a=l.memoizedState,a!==null&&a.dehydrated!==null){if(l.alternate===null)throw Error(r(340));Ua()}return a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 19:return Ge(Je),null;case 4:return Ka(),null;case 10:return Gf(l.type._context),null;case 22:case 23:return Dd(),null;case 24:return null;default:return null}}var Fs=!1,kt=!1,nP=typeof WeakSet=="function"?WeakSet:Set,de=null;function Xa(a,l){var c=a.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(p){nt(a,l,p)}else c.current=null}function wd(a,l,c){try{c()}catch(p){nt(a,l,p)}}var Yg=!1;function aP(a,l){if(Df=is,a=P1(),Of(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else e:{c=(c=a.ownerDocument)&&c.defaultView||window;var p=c.getSelection&&c.getSelection();if(p&&p.rangeCount!==0){c=p.anchorNode;var v=p.anchorOffset,w=p.focusNode;p=p.focusOffset;try{c.nodeType,w.nodeType}catch{c=null;break e}var k=0,N=-1,L=-1,Y=0,ne=0,ie=a,re=null;t:for(;;){for(var fe;ie!==c||v!==0&&ie.nodeType!==3||(N=k+v),ie!==w||p!==0&&ie.nodeType!==3||(L=k+p),ie.nodeType===3&&(k+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)re=ie,ie=fe;for(;;){if(ie===a)break t;if(re===c&&++Y===v&&(N=k),re===w&&++ne===p&&(L=k),(fe=ie.nextSibling)!==null)break;ie=re,re=ie.parentNode}ie=fe}c=N===-1||L===-1?null:{start:N,end:L}}else c=null}c=c||{start:0,end:0}}else c=null;for(Mf={focusedElem:a,selectionRange:c},is=!1,de=l;de!==null;)if(l=de,a=l.child,(l.subtreeFlags&1028)!==0&&a!==null)a.return=l,de=a;else for(;de!==null;){l=de;try{var he=l.alternate;if((l.flags&1024)!==0)switch(l.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var ye=he.memoizedProps,ot=he.memoizedState,W=l.stateNode,F=W.getSnapshotBeforeUpdate(l.elementType===l.type?ye:_r(l.type,ye),ot);W.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var V=l.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(le){nt(l,l.return,le)}if(a=l.sibling,a!==null){a.return=l.return,de=a;break}de=l.return}return he=Yg,Yg=!1,he}function Ao(a,l,c){var p=l.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var v=p=p.next;do{if((v.tag&a)===a){var w=v.destroy;v.destroy=void 0,w!==void 0&&wd(l,c,w)}v=v.next}while(v!==p)}}function Bs(a,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&a)===a){var p=c.create;c.destroy=p()}c=c.next}while(c!==l)}}function Sd(a){var l=a.ref;if(l!==null){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}typeof l=="function"?l(a):l.current=a}}function Qg(a){var l=a.alternate;l!==null&&(a.alternate=null,Qg(l)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(l=a.stateNode,l!==null&&(delete l[Fr],delete l[mo],delete l[Lf],delete l[BE],delete l[qE])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Jg(a){return a.tag===5||a.tag===3||a.tag===4}function Zg(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Jg(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function _d(a,l,c){var p=a.tag;if(p===5||p===6)a=a.stateNode,l?c.nodeType===8?c.parentNode.insertBefore(a,l):c.insertBefore(a,l):(c.nodeType===8?(l=c.parentNode,l.insertBefore(a,c)):(l=c,l.appendChild(a)),c=c._reactRootContainer,c!=null||l.onclick!==null||(l.onclick=vs));else if(p!==4&&(a=a.child,a!==null))for(_d(a,l,c),a=a.sibling;a!==null;)_d(a,l,c),a=a.sibling}function jd(a,l,c){var p=a.tag;if(p===5||p===6)a=a.stateNode,l?c.insertBefore(a,l):c.appendChild(a);else if(p!==4&&(a=a.child,a!==null))for(jd(a,l,c),a=a.sibling;a!==null;)jd(a,l,c),a=a.sibling}var St=null,jr=!1;function $n(a,l,c){for(c=c.child;c!==null;)e8(a,l,c),c=c.sibling}function e8(a,l,c){if(Lr&&typeof Lr.onCommitFiberUnmount=="function")try{Lr.onCommitFiberUnmount(Zl,c)}catch{}switch(c.tag){case 5:kt||Xa(c,l);case 6:var p=St,v=jr;St=null,$n(a,l,c),St=p,jr=v,St!==null&&(jr?(a=St,c=c.stateNode,a.nodeType===8?a.parentNode.removeChild(c):a.removeChild(c)):St.removeChild(c.stateNode));break;case 18:St!==null&&(jr?(a=St,c=c.stateNode,a.nodeType===8?$f(a.parentNode,c):a.nodeType===1&&$f(a,c),no(a)):$f(St,c.stateNode));break;case 4:p=St,v=jr,St=c.stateNode.containerInfo,jr=!0,$n(a,l,c),St=p,jr=v;break;case 0:case 11:case 14:case 15:if(!kt&&(p=c.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){v=p=p.next;do{var w=v,k=w.destroy;w=w.tag,k!==void 0&&((w&2)!==0||(w&4)!==0)&&wd(c,l,k),v=v.next}while(v!==p)}$n(a,l,c);break;case 1:if(!kt&&(Xa(c,l),p=c.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=c.memoizedProps,p.state=c.memoizedState,p.componentWillUnmount()}catch(N){nt(c,l,N)}$n(a,l,c);break;case 21:$n(a,l,c);break;case 22:c.mode&1?(kt=(p=kt)||c.memoizedState!==null,$n(a,l,c),kt=p):$n(a,l,c);break;default:$n(a,l,c)}}function t8(a){var l=a.updateQueue;if(l!==null){a.updateQueue=null;var c=a.stateNode;c===null&&(c=a.stateNode=new nP),l.forEach(function(p){var v=pP.bind(null,a,p);c.has(p)||(c.add(p),p.then(v,v))})}}function Or(a,l){var c=l.deletions;if(c!==null)for(var p=0;p<c.length;p++){var v=c[p];try{var w=a,k=l,N=k;e:for(;N!==null;){switch(N.tag){case 5:St=N.stateNode,jr=!1;break e;case 3:St=N.stateNode.containerInfo,jr=!0;break e;case 4:St=N.stateNode.containerInfo,jr=!0;break e}N=N.return}if(St===null)throw Error(r(160));e8(w,k,v),St=null,jr=!1;var L=v.alternate;L!==null&&(L.return=null),v.return=null}catch(Y){nt(v,l,Y)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)r8(l,a),l=l.sibling}function r8(a,l){var c=a.alternate,p=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(Or(l,a),zr(a),p&4){try{Ao(3,a,a.return),Bs(3,a)}catch(ye){nt(a,a.return,ye)}try{Ao(5,a,a.return)}catch(ye){nt(a,a.return,ye)}}break;case 1:Or(l,a),zr(a),p&512&&c!==null&&Xa(c,c.return);break;case 5:if(Or(l,a),zr(a),p&512&&c!==null&&Xa(c,c.return),a.flags&32){var v=a.stateNode;try{Vi(v,"")}catch(ye){nt(a,a.return,ye)}}if(p&4&&(v=a.stateNode,v!=null)){var w=a.memoizedProps,k=c!==null?c.memoizedProps:w,N=a.type,L=a.updateQueue;if(a.updateQueue=null,L!==null)try{N==="input"&&w.type==="radio"&&w.name!=null&&rt(v,w),ef(N,k);var Y=ef(N,w);for(k=0;k<L.length;k+=2){var ne=L[k],ie=L[k+1];ne==="style"?Lv(v,ie):ne==="dangerouslySetInnerHTML"?Iv(v,ie):ne==="children"?Vi(v,ie):E(v,ne,ie,Y)}switch(N){case"input":yt(v,w);break;case"textarea":Wi(v,w);break;case"select":var re=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!w.multiple;var fe=w.value;fe!=null?Lt(v,!!w.multiple,fe,!1):re!==!!w.multiple&&(w.defaultValue!=null?Lt(v,!!w.multiple,w.defaultValue,!0):Lt(v,!!w.multiple,w.multiple?[]:"",!1))}v[mo]=w}catch(ye){nt(a,a.return,ye)}}break;case 6:if(Or(l,a),zr(a),p&4){if(a.stateNode===null)throw Error(r(162));v=a.stateNode,w=a.memoizedProps;try{v.nodeValue=w}catch(ye){nt(a,a.return,ye)}}break;case 3:if(Or(l,a),zr(a),p&4&&c!==null&&c.memoizedState.isDehydrated)try{no(l.containerInfo)}catch(ye){nt(a,a.return,ye)}break;case 4:Or(l,a),zr(a);break;case 13:Or(l,a),zr(a),v=a.child,v.flags&8192&&(w=v.memoizedState!==null,v.stateNode.isHidden=w,!w||v.alternate!==null&&v.alternate.memoizedState!==null||(Ed=it())),p&4&&t8(a);break;case 22:if(ne=c!==null&&c.memoizedState!==null,a.mode&1?(kt=(Y=kt)||ne,Or(l,a),kt=Y):Or(l,a),zr(a),p&8192){if(Y=a.memoizedState!==null,(a.stateNode.isHidden=Y)&&!ne&&(a.mode&1)!==0)for(de=a,ne=a.child;ne!==null;){for(ie=de=ne;de!==null;){switch(re=de,fe=re.child,re.tag){case 0:case 11:case 14:case 15:Ao(4,re,re.return);break;case 1:Xa(re,re.return);var he=re.stateNode;if(typeof he.componentWillUnmount=="function"){p=re,c=re.return;try{l=p,he.props=l.memoizedProps,he.state=l.memoizedState,he.componentWillUnmount()}catch(ye){nt(p,c,ye)}}break;case 5:Xa(re,re.return);break;case 22:if(re.memoizedState!==null){i8(ie);continue}}fe!==null?(fe.return=re,de=fe):i8(ie)}ne=ne.sibling}e:for(ne=null,ie=a;;){if(ie.tag===5){if(ne===null){ne=ie;try{v=ie.stateNode,Y?(w=v.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none"):(N=ie.stateNode,L=ie.memoizedProps.style,k=L!=null&&L.hasOwnProperty("display")?L.display:null,N.style.display=$v("display",k))}catch(ye){nt(a,a.return,ye)}}}else if(ie.tag===6){if(ne===null)try{ie.stateNode.nodeValue=Y?"":ie.memoizedProps}catch(ye){nt(a,a.return,ye)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===a)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===a)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===a)break e;ne===ie&&(ne=null),ie=ie.return}ne===ie&&(ne=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Or(l,a),zr(a),p&4&&t8(a);break;case 21:break;default:Or(l,a),zr(a)}}function zr(a){var l=a.flags;if(l&2){try{e:{for(var c=a.return;c!==null;){if(Jg(c)){var p=c;break e}c=c.return}throw Error(r(160))}switch(p.tag){case 5:var v=p.stateNode;p.flags&32&&(Vi(v,""),p.flags&=-33);var w=Zg(a);jd(a,w,v);break;case 3:case 4:var k=p.stateNode.containerInfo,N=Zg(a);_d(a,N,k);break;default:throw Error(r(161))}}catch(L){nt(a,a.return,L)}a.flags&=-3}l&4096&&(a.flags&=-4097)}function iP(a,l,c){de=a,n8(a)}function n8(a,l,c){for(var p=(a.mode&1)!==0;de!==null;){var v=de,w=v.child;if(v.tag===22&&p){var k=v.memoizedState!==null||Fs;if(!k){var N=v.alternate,L=N!==null&&N.memoizedState!==null||kt;N=Fs;var Y=kt;if(Fs=k,(kt=L)&&!Y)for(de=v;de!==null;)k=de,L=k.child,k.tag===22&&k.memoizedState!==null?o8(v):L!==null?(L.return=k,de=L):o8(v);for(;w!==null;)de=w,n8(w),w=w.sibling;de=v,Fs=N,kt=Y}a8(a)}else(v.subtreeFlags&8772)!==0&&w!==null?(w.return=v,de=w):a8(a)}}function a8(a){for(;de!==null;){var l=de;if((l.flags&8772)!==0){var c=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:kt||Bs(5,l);break;case 1:var p=l.stateNode;if(l.flags&4&&!kt)if(c===null)p.componentDidMount();else{var v=l.elementType===l.type?c.memoizedProps:_r(l.type,c.memoizedProps);p.componentDidUpdate(v,c.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var w=l.updateQueue;w!==null&&ig(l,w,p);break;case 3:var k=l.updateQueue;if(k!==null){if(c=null,l.child!==null)switch(l.child.tag){case 5:c=l.child.stateNode;break;case 1:c=l.child.stateNode}ig(l,k,c)}break;case 5:var N=l.stateNode;if(c===null&&l.flags&4){c=N;var L=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&c.focus();break;case"img":L.src&&(c.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var Y=l.alternate;if(Y!==null){var ne=Y.memoizedState;if(ne!==null){var ie=ne.dehydrated;ie!==null&&no(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}kt||l.flags&512&&Sd(l)}catch(re){nt(l,l.return,re)}}if(l===a){de=null;break}if(c=l.sibling,c!==null){c.return=l.return,de=c;break}de=l.return}}function i8(a){for(;de!==null;){var l=de;if(l===a){de=null;break}var c=l.sibling;if(c!==null){c.return=l.return,de=c;break}de=l.return}}function o8(a){for(;de!==null;){var l=de;try{switch(l.tag){case 0:case 11:case 15:var c=l.return;try{Bs(4,l)}catch(L){nt(l,c,L)}break;case 1:var p=l.stateNode;if(typeof p.componentDidMount=="function"){var v=l.return;try{p.componentDidMount()}catch(L){nt(l,v,L)}}var w=l.return;try{Sd(l)}catch(L){nt(l,w,L)}break;case 5:var k=l.return;try{Sd(l)}catch(L){nt(l,k,L)}}}catch(L){nt(l,l.return,L)}if(l===a){de=null;break}var N=l.sibling;if(N!==null){N.return=l.return,de=N;break}de=l.return}}var oP=Math.ceil,qs=T.ReactCurrentDispatcher,Od=T.ReactCurrentOwner,lr=T.ReactCurrentBatchConfig,Me=0,gt=null,st=null,_t=0,Xt=0,Ya=Nn(0),dt=0,Eo=null,la=0,zs=0,Ad=0,Po=null,zt=null,Ed=0,Qa=1/0,ln=null,Us=!1,Pd=null,Ln=null,Ws=!1,Fn=null,Hs=0,ko=0,kd=null,Vs=-1,Ks=0;function Mt(){return(Me&6)!==0?it():Vs!==-1?Vs:Vs=it()}function Bn(a){return(a.mode&1)===0?1:(Me&2)!==0&&_t!==0?_t&-_t:UE.transition!==null?(Ks===0&&(Ks=Zv()),Ks):(a=Be,a!==0||(a=window.event,a=a===void 0?16:s1(a.type)),a)}function Ar(a,l,c,p){if(50<ko)throw ko=0,kd=null,Error(r(185));Ji(a,c,p),((Me&2)===0||a!==gt)&&(a===gt&&((Me&2)===0&&(zs|=c),dt===4&&qn(a,_t)),Ut(a,p),c===1&&Me===0&&(l.mode&1)===0&&(Qa=it()+500,ws&&Mn()))}function Ut(a,l){var c=a.callbackNode;UA(a,l);var p=rs(a,a===gt?_t:0);if(p===0)c!==null&&Yv(c),a.callbackNode=null,a.callbackPriority=0;else if(l=p&-p,a.callbackPriority!==l){if(c!=null&&Yv(c),l===1)a.tag===0?zE(s8.bind(null,a)):K1(s8.bind(null,a)),LE(function(){(Me&6)===0&&Mn()}),c=null;else{switch(e1(p)){case 1:c=sf;break;case 4:c=Qv;break;case 16:c=Jl;break;case 536870912:c=Jv;break;default:c=Jl}c=y8(c,l8.bind(null,a))}a.callbackPriority=l,a.callbackNode=c}}function l8(a,l){if(Vs=-1,Ks=0,(Me&6)!==0)throw Error(r(327));var c=a.callbackNode;if(Ja()&&a.callbackNode!==c)return null;var p=rs(a,a===gt?_t:0);if(p===0)return null;if((p&30)!==0||(p&a.expiredLanes)!==0||l)l=Gs(a,p);else{l=p;var v=Me;Me|=2;var w=c8();(gt!==a||_t!==l)&&(ln=null,Qa=it()+500,ua(a,l));do try{uP();break}catch(N){u8(a,N)}while(!0);Kf(),qs.current=w,Me=v,st!==null?l=0:(gt=null,_t=0,l=dt)}if(l!==0){if(l===2&&(v=uf(a),v!==0&&(p=v,l=Td(a,v))),l===1)throw c=Eo,ua(a,0),qn(a,p),Ut(a,it()),c;if(l===6)qn(a,p);else{if(v=a.current.alternate,(p&30)===0&&!lP(v)&&(l=Gs(a,p),l===2&&(w=uf(a),w!==0&&(p=w,l=Td(a,w))),l===1))throw c=Eo,ua(a,0),qn(a,p),Ut(a,it()),c;switch(a.finishedWork=v,a.finishedLanes=p,l){case 0:case 1:throw Error(r(345));case 2:ca(a,zt,ln);break;case 3:if(qn(a,p),(p&130023424)===p&&(l=Ed+500-it(),10<l)){if(rs(a,0)!==0)break;if(v=a.suspendedLanes,(v&p)!==p){Mt(),a.pingedLanes|=a.suspendedLanes&v;break}a.timeoutHandle=If(ca.bind(null,a,zt,ln),l);break}ca(a,zt,ln);break;case 4:if(qn(a,p),(p&4194240)===p)break;for(l=a.eventTimes,v=-1;0<p;){var k=31-xr(p);w=1<<k,k=l[k],k>v&&(v=k),p&=~w}if(p=v,p=it()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*oP(p/1960))-p,10<p){a.timeoutHandle=If(ca.bind(null,a,zt,ln),p);break}ca(a,zt,ln);break;case 5:ca(a,zt,ln);break;default:throw Error(r(329))}}}return Ut(a,it()),a.callbackNode===c?l8.bind(null,a):null}function Td(a,l){var c=Po;return a.current.memoizedState.isDehydrated&&(ua(a,l).flags|=256),a=Gs(a,l),a!==2&&(l=zt,zt=c,l!==null&&Cd(l)),a}function Cd(a){zt===null?zt=a:zt.push.apply(zt,a)}function lP(a){for(var l=a;;){if(l.flags&16384){var c=l.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var p=0;p<c.length;p++){var v=c[p],w=v.getSnapshot;v=v.value;try{if(!wr(w(),v))return!1}catch{return!1}}}if(c=l.child,l.subtreeFlags&16384&&c!==null)c.return=l,l=c;else{if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function qn(a,l){for(l&=~Ad,l&=~zs,a.suspendedLanes|=l,a.pingedLanes&=~l,a=a.expirationTimes;0<l;){var c=31-xr(l),p=1<<c;a[c]=-1,l&=~p}}function s8(a){if((Me&6)!==0)throw Error(r(327));Ja();var l=rs(a,0);if((l&1)===0)return Ut(a,it()),null;var c=Gs(a,l);if(a.tag!==0&&c===2){var p=uf(a);p!==0&&(l=p,c=Td(a,p))}if(c===1)throw c=Eo,ua(a,0),qn(a,l),Ut(a,it()),c;if(c===6)throw Error(r(345));return a.finishedWork=a.current.alternate,a.finishedLanes=l,ca(a,zt,ln),Ut(a,it()),null}function Nd(a,l){var c=Me;Me|=1;try{return a(l)}finally{Me=c,Me===0&&(Qa=it()+500,ws&&Mn())}}function sa(a){Fn!==null&&Fn.tag===0&&(Me&6)===0&&Ja();var l=Me;Me|=1;var c=lr.transition,p=Be;try{if(lr.transition=null,Be=1,a)return a()}finally{Be=p,lr.transition=c,Me=l,(Me&6)===0&&Mn()}}function Dd(){Xt=Ya.current,Ge(Ya)}function ua(a,l){a.finishedWork=null,a.finishedLanes=0;var c=a.timeoutHandle;if(c!==-1&&(a.timeoutHandle=-1,$E(c)),st!==null)for(c=st.return;c!==null;){var p=c;switch(zf(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&bs();break;case 3:Ka(),Ge(Ft),Ge(At),td();break;case 5:Zf(p);break;case 4:Ka();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Gf(p.type._context);break;case 22:case 23:Dd()}c=c.return}if(gt=a,st=a=zn(a.current,null),_t=Xt=l,dt=0,Eo=null,Ad=zs=la=0,zt=Po=null,aa!==null){for(l=0;l<aa.length;l++)if(c=aa[l],p=c.interleaved,p!==null){c.interleaved=null;var v=p.next,w=c.pending;if(w!==null){var k=w.next;w.next=v,p.next=k}c.pending=p}aa=null}return a}function u8(a,l){do{var c=st;try{if(Kf(),Cs.current=Rs,Ns){for(var p=Ze.memoizedState;p!==null;){var v=p.queue;v!==null&&(v.pending=null),p=p.next}Ns=!1}if(oa=0,vt=ft=Ze=null,wo=!1,So=0,Od.current=null,c===null||c.return===null){dt=1,Eo=l,st=null;break}e:{var w=a,k=c.return,N=c,L=l;if(l=_t,N.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var Y=L,ne=N,ie=ne.tag;if((ne.mode&1)===0&&(ie===0||ie===11||ie===15)){var re=ne.alternate;re?(ne.updateQueue=re.updateQueue,ne.memoizedState=re.memoizedState,ne.lanes=re.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var fe=Mg(k);if(fe!==null){fe.flags&=-257,Rg(fe,k,N,w,l),fe.mode&1&&Dg(w,Y,l),l=fe,L=Y;var he=l.updateQueue;if(he===null){var ye=new Set;ye.add(L),l.updateQueue=ye}else he.add(L);break e}else{if((l&1)===0){Dg(w,Y,l),Md();break e}L=Error(r(426))}}else if(Ye&&N.mode&1){var ot=Mg(k);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Rg(ot,k,N,w,l),Hf(Ga(L,N));break e}}w=L=Ga(L,N),dt!==4&&(dt=2),Po===null?Po=[w]:Po.push(w),w=k;do{switch(w.tag){case 3:w.flags|=65536,l&=-l,w.lanes|=l;var W=Cg(w,L,l);ag(w,W);break e;case 1:N=L;var F=w.type,V=w.stateNode;if((w.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(Ln===null||!Ln.has(V)))){w.flags|=65536,l&=-l,w.lanes|=l;var le=Ng(w,N,l);ag(w,le);break e}}w=w.return}while(w!==null)}d8(c)}catch(ve){l=ve,st===c&&c!==null&&(st=c=c.return);continue}break}while(!0)}function c8(){var a=qs.current;return qs.current=Rs,a===null?Rs:a}function Md(){(dt===0||dt===3||dt===2)&&(dt=4),gt===null||(la&268435455)===0&&(zs&268435455)===0||qn(gt,_t)}function Gs(a,l){var c=Me;Me|=2;var p=c8();(gt!==a||_t!==l)&&(ln=null,ua(a,l));do try{sP();break}catch(v){u8(a,v)}while(!0);if(Kf(),Me=c,qs.current=p,st!==null)throw Error(r(261));return gt=null,_t=0,dt}function sP(){for(;st!==null;)f8(st)}function uP(){for(;st!==null&&!MA();)f8(st)}function f8(a){var l=m8(a.alternate,a,Xt);a.memoizedProps=a.pendingProps,l===null?d8(a):st=l,Od.current=null}function d8(a){var l=a;do{var c=l.alternate;if(a=l.return,(l.flags&32768)===0){if(c=tP(c,l,Xt),c!==null){st=c;return}}else{if(c=rP(c,l),c!==null){c.flags&=32767,st=c;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{dt=6,st=null;return}}if(l=l.sibling,l!==null){st=l;return}st=l=a}while(l!==null);dt===0&&(dt=5)}function ca(a,l,c){var p=Be,v=lr.transition;try{lr.transition=null,Be=1,cP(a,l,c,p)}finally{lr.transition=v,Be=p}return null}function cP(a,l,c,p){do Ja();while(Fn!==null);if((Me&6)!==0)throw Error(r(327));c=a.finishedWork;var v=a.finishedLanes;if(c===null)return null;if(a.finishedWork=null,a.finishedLanes=0,c===a.current)throw Error(r(177));a.callbackNode=null,a.callbackPriority=0;var w=c.lanes|c.childLanes;if(WA(a,w),a===gt&&(st=gt=null,_t=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Ws||(Ws=!0,y8(Jl,function(){return Ja(),null})),w=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||w){w=lr.transition,lr.transition=null;var k=Be;Be=1;var N=Me;Me|=4,Od.current=null,aP(a,c),r8(c,a),TE(Mf),is=!!Df,Mf=Df=null,a.current=c,iP(c),RA(),Me=N,Be=k,lr.transition=w}else a.current=c;if(Ws&&(Ws=!1,Fn=a,Hs=v),w=a.pendingLanes,w===0&&(Ln=null),LA(c.stateNode),Ut(a,it()),l!==null)for(p=a.onRecoverableError,c=0;c<l.length;c++)v=l[c],p(v.value,{componentStack:v.stack,digest:v.digest});if(Us)throw Us=!1,a=Pd,Pd=null,a;return(Hs&1)!==0&&a.tag!==0&&Ja(),w=a.pendingLanes,(w&1)!==0?a===kd?ko++:(ko=0,kd=a):ko=0,Mn(),null}function Ja(){if(Fn!==null){var a=e1(Hs),l=lr.transition,c=Be;try{if(lr.transition=null,Be=16>a?16:a,Fn===null)var p=!1;else{if(a=Fn,Fn=null,Hs=0,(Me&6)!==0)throw Error(r(331));var v=Me;for(Me|=4,de=a.current;de!==null;){var w=de,k=w.child;if((de.flags&16)!==0){var N=w.deletions;if(N!==null){for(var L=0;L<N.length;L++){var Y=N[L];for(de=Y;de!==null;){var ne=de;switch(ne.tag){case 0:case 11:case 15:Ao(8,ne,w)}var ie=ne.child;if(ie!==null)ie.return=ne,de=ie;else for(;de!==null;){ne=de;var re=ne.sibling,fe=ne.return;if(Qg(ne),ne===Y){de=null;break}if(re!==null){re.return=fe,de=re;break}de=fe}}}var he=w.alternate;if(he!==null){var ye=he.child;if(ye!==null){he.child=null;do{var ot=ye.sibling;ye.sibling=null,ye=ot}while(ye!==null)}}de=w}}if((w.subtreeFlags&2064)!==0&&k!==null)k.return=w,de=k;else e:for(;de!==null;){if(w=de,(w.flags&2048)!==0)switch(w.tag){case 0:case 11:case 15:Ao(9,w,w.return)}var W=w.sibling;if(W!==null){W.return=w.return,de=W;break e}de=w.return}}var F=a.current;for(de=F;de!==null;){k=de;var V=k.child;if((k.subtreeFlags&2064)!==0&&V!==null)V.return=k,de=V;else e:for(k=F;de!==null;){if(N=de,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Bs(9,N)}}catch(ve){nt(N,N.return,ve)}if(N===k){de=null;break e}var le=N.sibling;if(le!==null){le.return=N.return,de=le;break e}de=N.return}}if(Me=v,Mn(),Lr&&typeof Lr.onPostCommitFiberRoot=="function")try{Lr.onPostCommitFiberRoot(Zl,a)}catch{}p=!0}return p}finally{Be=c,lr.transition=l}}return!1}function p8(a,l,c){l=Ga(c,l),l=Cg(a,l,1),a=In(a,l,1),l=Mt(),a!==null&&(Ji(a,1,l),Ut(a,l))}function nt(a,l,c){if(a.tag===3)p8(a,a,c);else for(;l!==null;){if(l.tag===3){p8(l,a,c);break}else if(l.tag===1){var p=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(Ln===null||!Ln.has(p))){a=Ga(c,a),a=Ng(l,a,1),l=In(l,a,1),a=Mt(),l!==null&&(Ji(l,1,a),Ut(l,a));break}}l=l.return}}function fP(a,l,c){var p=a.pingCache;p!==null&&p.delete(l),l=Mt(),a.pingedLanes|=a.suspendedLanes&c,gt===a&&(_t&c)===c&&(dt===4||dt===3&&(_t&130023424)===_t&&500>it()-Ed?ua(a,0):Ad|=c),Ut(a,l)}function h8(a,l){l===0&&((a.mode&1)===0?l=1:(l=ts,ts<<=1,(ts&130023424)===0&&(ts=4194304)));var c=Mt();a=nn(a,l),a!==null&&(Ji(a,l,c),Ut(a,c))}function dP(a){var l=a.memoizedState,c=0;l!==null&&(c=l.retryLane),h8(a,c)}function pP(a,l){var c=0;switch(a.tag){case 13:var p=a.stateNode,v=a.memoizedState;v!==null&&(c=v.retryLane);break;case 19:p=a.stateNode;break;default:throw Error(r(314))}p!==null&&p.delete(l),h8(a,c)}var m8;m8=function(a,l,c){if(a!==null)if(a.memoizedProps!==l.pendingProps||Ft.current)qt=!0;else{if((a.lanes&c)===0&&(l.flags&128)===0)return qt=!1,eP(a,l,c);qt=(a.flags&131072)!==0}else qt=!1,Ye&&(l.flags&1048576)!==0&&G1(l,_s,l.index);switch(l.lanes=0,l.tag){case 2:var p=l.type;Ls(a,l),a=l.pendingProps;var v=Ba(l,At.current);Va(l,c),v=ad(null,l,p,a,v,c);var w=id();return l.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Bt(p)?(w=!0,xs(l)):w=!1,l.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Qf(l),v.updater=Is,l.stateNode=v,v._reactInternals=l,fd(l,p,a,c),l=md(null,l,p,!0,w,c)):(l.tag=0,Ye&&w&&qf(l),Dt(null,l,v,c),l=l.child),l;case 16:p=l.elementType;e:{switch(Ls(a,l),a=l.pendingProps,v=p._init,p=v(p._payload),l.type=p,v=l.tag=mP(p),a=_r(p,a),v){case 0:l=hd(null,l,p,a,c);break e;case 1:l=qg(null,l,p,a,c);break e;case 11:l=Ig(null,l,p,a,c);break e;case 14:l=$g(null,l,p,_r(p.type,a),c);break e}throw Error(r(306,p,""))}return l;case 0:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:_r(p,v),hd(a,l,p,v,c);case 1:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:_r(p,v),qg(a,l,p,v,c);case 3:e:{if(zg(l),a===null)throw Error(r(387));p=l.pendingProps,w=l.memoizedState,v=w.element,ng(a,l),ks(l,p,null,c);var k=l.memoizedState;if(p=k.element,w.isDehydrated)if(w={element:p,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},l.updateQueue.baseState=w,l.memoizedState=w,l.flags&256){v=Ga(Error(r(423)),l),l=Ug(a,l,p,c,v);break e}else if(p!==v){v=Ga(Error(r(424)),l),l=Ug(a,l,p,c,v);break e}else for(Gt=Cn(l.stateNode.containerInfo.firstChild),Kt=l,Ye=!0,Sr=null,c=tg(l,null,p,c),l.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Ua(),p===v){l=on(a,l,c);break e}Dt(a,l,p,c)}l=l.child}return l;case 5:return og(l),a===null&&Wf(l),p=l.type,v=l.pendingProps,w=a!==null?a.memoizedProps:null,k=v.children,Rf(p,v)?k=null:w!==null&&Rf(p,w)&&(l.flags|=32),Bg(a,l),Dt(a,l,k,c),l.child;case 6:return a===null&&Wf(l),null;case 13:return Wg(a,l,c);case 4:return Jf(l,l.stateNode.containerInfo),p=l.pendingProps,a===null?l.child=Wa(l,null,p,c):Dt(a,l,p,c),l.child;case 11:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:_r(p,v),Ig(a,l,p,v,c);case 7:return Dt(a,l,l.pendingProps,c),l.child;case 8:return Dt(a,l,l.pendingProps.children,c),l.child;case 12:return Dt(a,l,l.pendingProps.children,c),l.child;case 10:e:{if(p=l.type._context,v=l.pendingProps,w=l.memoizedProps,k=v.value,He(As,p._currentValue),p._currentValue=k,w!==null)if(wr(w.value,k)){if(w.children===v.children&&!Ft.current){l=on(a,l,c);break e}}else for(w=l.child,w!==null&&(w.return=l);w!==null;){var N=w.dependencies;if(N!==null){k=w.child;for(var L=N.firstContext;L!==null;){if(L.context===p){if(w.tag===1){L=an(-1,c&-c),L.tag=2;var Y=w.updateQueue;if(Y!==null){Y=Y.shared;var ne=Y.pending;ne===null?L.next=L:(L.next=ne.next,ne.next=L),Y.pending=L}}w.lanes|=c,L=w.alternate,L!==null&&(L.lanes|=c),Xf(w.return,c,l),N.lanes|=c;break}L=L.next}}else if(w.tag===10)k=w.type===l.type?null:w.child;else if(w.tag===18){if(k=w.return,k===null)throw Error(r(341));k.lanes|=c,N=k.alternate,N!==null&&(N.lanes|=c),Xf(k,c,l),k=w.sibling}else k=w.child;if(k!==null)k.return=w;else for(k=w;k!==null;){if(k===l){k=null;break}if(w=k.sibling,w!==null){w.return=k.return,k=w;break}k=k.return}w=k}Dt(a,l,v.children,c),l=l.child}return l;case 9:return v=l.type,p=l.pendingProps.children,Va(l,c),v=ir(v),p=p(v),l.flags|=1,Dt(a,l,p,c),l.child;case 14:return p=l.type,v=_r(p,l.pendingProps),v=_r(p.type,v),$g(a,l,p,v,c);case 15:return Lg(a,l,l.type,l.pendingProps,c);case 17:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:_r(p,v),Ls(a,l),l.tag=1,Bt(p)?(a=!0,xs(l)):a=!1,Va(l,c),kg(l,p,v),fd(l,p,v,c),md(null,l,p,!0,a,c);case 19:return Vg(a,l,c);case 22:return Fg(a,l,c)}throw Error(r(156,l.tag))};function y8(a,l){return Xv(a,l)}function hP(a,l,c,p){this.tag=a,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(a,l,c,p){return new hP(a,l,c,p)}function Rd(a){return a=a.prototype,!(!a||!a.isReactComponent)}function mP(a){if(typeof a=="function")return Rd(a)?1:0;if(a!=null){if(a=a.$$typeof,a===M)return 11;if(a===G)return 14}return 2}function zn(a,l){var c=a.alternate;return c===null?(c=sr(a.tag,l,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=l,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=a.flags&14680064,c.childLanes=a.childLanes,c.lanes=a.lanes,c.child=a.child,c.memoizedProps=a.memoizedProps,c.memoizedState=a.memoizedState,c.updateQueue=a.updateQueue,l=a.dependencies,c.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},c.sibling=a.sibling,c.index=a.index,c.ref=a.ref,c}function Xs(a,l,c,p,v,w){var k=2;if(p=a,typeof a=="function")Rd(a)&&(k=1);else if(typeof a=="string")k=5;else e:switch(a){case C:return fa(c.children,v,w,l);case R:k=8,v|=8;break;case $:return a=sr(12,c,l,v|2),a.elementType=$,a.lanes=w,a;case H:return a=sr(13,c,l,v),a.elementType=H,a.lanes=w,a;case X:return a=sr(19,c,l,v),a.elementType=X,a.lanes=w,a;case te:return Ys(c,v,w,l);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case z:k=10;break e;case q:k=9;break e;case M:k=11;break e;case G:k=14;break e;case J:k=16,p=null;break e}throw Error(r(130,a==null?a:typeof a,""))}return l=sr(k,c,l,v),l.elementType=a,l.type=p,l.lanes=w,l}function fa(a,l,c,p){return a=sr(7,a,p,l),a.lanes=c,a}function Ys(a,l,c,p){return a=sr(22,a,p,l),a.elementType=te,a.lanes=c,a.stateNode={isHidden:!1},a}function Id(a,l,c){return a=sr(6,a,null,l),a.lanes=c,a}function $d(a,l,c){return l=sr(4,a.children!==null?a.children:[],a.key,l),l.lanes=c,l.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},l}function yP(a,l,c,p,v){this.tag=l,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cf(0),this.expirationTimes=cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.identifierPrefix=p,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Ld(a,l,c,p,v,w,k,N,L){return a=new yP(a,l,c,N,L),l===1?(l=1,w===!0&&(l|=8)):l=0,w=sr(3,null,null,l),a.current=w,w.stateNode=a,w.memoizedState={element:p,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(w),a}function vP(a,l,c){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:p==null?null:""+p,children:a,containerInfo:l,implementation:c}}function v8(a){if(!a)return Dn;a=a._reactInternals;e:{if(Zn(a)!==a||a.tag!==1)throw Error(r(170));var l=a;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Bt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(r(171))}if(a.tag===1){var c=a.type;if(Bt(c))return H1(a,c,l)}return l}function g8(a,l,c,p,v,w,k,N,L){return a=Ld(c,p,!0,a,v,w,k,N,L),a.context=v8(null),c=a.current,p=Mt(),v=Bn(c),w=an(p,v),w.callback=l??null,In(c,w,v),a.current.lanes=v,Ji(a,v,p),Ut(a,p),a}function Qs(a,l,c,p){var v=l.current,w=Mt(),k=Bn(v);return c=v8(c),l.context===null?l.context=c:l.pendingContext=c,l=an(w,k),l.payload={element:a},p=p===void 0?null:p,p!==null&&(l.callback=p),a=In(v,l,k),a!==null&&(Ar(a,v,k,w),Ps(a,v,k)),k}function Js(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function b8(a,l){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var c=a.retryLane;a.retryLane=c!==0&&c<l?c:l}}function Fd(a,l){b8(a,l),(a=a.alternate)&&b8(a,l)}function gP(){return null}var x8=typeof reportError=="function"?reportError:function(a){console.error(a)};function Bd(a){this._internalRoot=a}Zs.prototype.render=Bd.prototype.render=function(a){var l=this._internalRoot;if(l===null)throw Error(r(409));Qs(a,l,null,null)},Zs.prototype.unmount=Bd.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var l=a.containerInfo;sa(function(){Qs(null,a,null,null)}),l[Zr]=null}};function Zs(a){this._internalRoot=a}Zs.prototype.unstable_scheduleHydration=function(a){if(a){var l=n1();a={blockedOn:null,target:a,priority:l};for(var c=0;c<Pn.length&&l!==0&&l<Pn[c].priority;c++);Pn.splice(c,0,a),c===0&&o1(a)}};function qd(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function eu(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function w8(){}function bP(a,l,c,p,v){if(v){if(typeof p=="function"){var w=p;p=function(){var Y=Js(k);w.call(Y)}}var k=g8(l,p,a,0,null,!1,!1,"",w8);return a._reactRootContainer=k,a[Zr]=k.current,po(a.nodeType===8?a.parentNode:a),sa(),k}for(;v=a.lastChild;)a.removeChild(v);if(typeof p=="function"){var N=p;p=function(){var Y=Js(L);N.call(Y)}}var L=Ld(a,0,!1,null,null,!1,!1,"",w8);return a._reactRootContainer=L,a[Zr]=L.current,po(a.nodeType===8?a.parentNode:a),sa(function(){Qs(l,L,c,p)}),L}function tu(a,l,c,p,v){var w=c._reactRootContainer;if(w){var k=w;if(typeof v=="function"){var N=v;v=function(){var L=Js(k);N.call(L)}}Qs(l,k,a,v)}else k=bP(c,l,a,v,p);return Js(k)}t1=function(a){switch(a.tag){case 3:var l=a.stateNode;if(l.current.memoizedState.isDehydrated){var c=Qi(l.pendingLanes);c!==0&&(ff(l,c|1),Ut(l,it()),(Me&6)===0&&(Qa=it()+500,Mn()))}break;case 13:sa(function(){var p=nn(a,1);if(p!==null){var v=Mt();Ar(p,a,1,v)}}),Fd(a,1)}},df=function(a){if(a.tag===13){var l=nn(a,134217728);if(l!==null){var c=Mt();Ar(l,a,134217728,c)}Fd(a,134217728)}},r1=function(a){if(a.tag===13){var l=Bn(a),c=nn(a,l);if(c!==null){var p=Mt();Ar(c,a,l,p)}Fd(a,l)}},n1=function(){return Be},a1=function(a,l){var c=Be;try{return Be=a,l()}finally{Be=c}},nf=function(a,l,c){switch(l){case"input":if(yt(a,c),l=c.name,c.type==="radio"&&l!=null){for(c=a;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<c.length;l++){var p=c[l];if(p!==a&&p.form===a.form){var v=gs(p);if(!v)throw Error(r(90));ae(p),yt(p,v)}}}break;case"textarea":Wi(a,c);break;case"select":l=c.value,l!=null&&Lt(a,!!c.multiple,l,!1)}},zv=Nd,Uv=sa;var xP={usingClientEntryPoint:!1,Events:[yo,La,gs,Bv,qv,Nd]},To={findFiberByHostInstance:ea,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wP={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=Kv(a),a===null?null:a.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||gP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Zl=ru.inject(wP),Lr=ru}catch{}}return Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xP,Wt.createPortal=function(a,l){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(l))throw Error(r(200));return vP(a,l,null,c)},Wt.createRoot=function(a,l){if(!qd(a))throw Error(r(299));var c=!1,p="",v=x8;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onRecoverableError!==void 0&&(v=l.onRecoverableError)),l=Ld(a,1,!1,null,null,c,!1,p,v),a[Zr]=l.current,po(a.nodeType===8?a.parentNode:a),new Bd(l)},Wt.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var l=a._reactInternals;if(l===void 0)throw typeof a.render=="function"?Error(r(188)):(a=Object.keys(a).join(","),Error(r(268,a)));return a=Kv(l),a=a===null?null:a.stateNode,a},Wt.flushSync=function(a){return sa(a)},Wt.hydrate=function(a,l,c){if(!eu(l))throw Error(r(200));return tu(null,a,l,!0,c)},Wt.hydrateRoot=function(a,l,c){if(!qd(a))throw Error(r(405));var p=c!=null&&c.hydratedSources||null,v=!1,w="",k=x8;if(c!=null&&(c.unstable_strictMode===!0&&(v=!0),c.identifierPrefix!==void 0&&(w=c.identifierPrefix),c.onRecoverableError!==void 0&&(k=c.onRecoverableError)),l=g8(l,null,a,1,c??null,v,!1,w,k),a[Zr]=l.current,po(a),p)for(a=0;a<p.length;a++)c=p[a],v=c._getVersion,v=v(c._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[c,v]:l.mutableSourceEagerHydrationData.push(c,v);return new Zs(l)},Wt.render=function(a,l,c){if(!eu(l))throw Error(r(200));return tu(null,a,l,!1,c)},Wt.unmountComponentAtNode=function(a){if(!eu(a))throw Error(r(40));return a._reactRootContainer?(sa(function(){tu(null,null,a,!1,function(){a._reactRootContainer=null,a[Zr]=null})}),!0):!1},Wt.unstable_batchedUpdates=Nd,Wt.unstable_renderSubtreeIntoContainer=function(a,l,c,p){if(!eu(c))throw Error(r(200));if(a==null||a._reactInternals===void 0)throw Error(r(38));return tu(a,l,c,!1,p)},Wt.version="18.3.1-next-f1338f8080-20240426",Wt}var k8;function kP(){if(k8)return Wd.exports;k8=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Wd.exports=PP(),Wd.exports}var T8;function TP(){if(T8)return au;T8=1;var e=kP();return au.createRoot=e.createRoot,au.hydrateRoot=e.hydrateRoot,au}var CP=TP(),D=j2();const B=We(D);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var C8="popstate";function NP(e={}){function t(n,i){let{pathname:o,search:s,hash:u}=n.location;return ty("",{pathname:o,search:s,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Jo(i)}return MP(t,r,null,e)}function et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function DP(){return Math.random().toString(36).substring(2,10)}function N8(e,t){return{usr:e.state,key:e.key,idx:t}}function ty(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ni(t):t,state:r,key:t&&t.key||n||DP()}}function Jo({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ni(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function MP(e,t,r,n={}){let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,u="POP",f=null,d=m();d==null&&(d=0,s.replaceState({...s.state,idx:d},""));function m(){return(s.state||{idx:null}).idx}function h(){u="POP";let x=m(),j=x==null?null:x-d;d=x,f&&f({action:u,location:S.location,delta:j})}function y(x,j){u="PUSH";let A=ty(S.location,x,j);d=m()+1;let E=N8(A,d),T=S.createHref(A);try{s.pushState(E,"",T)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(T)}o&&f&&f({action:u,location:S.location,delta:1})}function g(x,j){u="REPLACE";let A=ty(S.location,x,j);d=m();let E=N8(A,d),T=S.createHref(A);s.replaceState(E,"",T),o&&f&&f({action:u,location:S.location,delta:0})}function _(x){return RP(x)}let S={get action(){return u},get location(){return e(i,s)},listen(x){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(C8,h),f=x,()=>{i.removeEventListener(C8,h),f=null}},createHref(x){return t(i,x)},createURL:_,encodeLocation(x){let j=_(x);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:y,replace:g,go(x){return s.go(x)}};return S}function RP(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),et(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Jo(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function GS(e,t,r="/"){return IP(e,t,r,!1)}function IP(e,t,r,n){let i=typeof t=="string"?Ni(t):t,o=vn(i.pathname||"/",r);if(o==null)return null;let s=XS(e);$P(s);let u=null;for(let f=0;u==null&&f<s.length;++f){let d=GP(o);u=VP(s[f],d,n)}return u}function XS(e,t=[],r=[],n="",i=!1){let o=(s,u,f=i,d)=>{let m={relativePath:d===void 0?s.path||"":d,caseSensitive:s.caseSensitive===!0,childrenIndex:u,route:s};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&f)return;et(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let h=dn([n,m.relativePath]),y=r.concat(m);s.children&&s.children.length>0&&(et(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),XS(s.children,t,y,h,f)),!(s.path==null&&!s.index)&&t.push({path:h,score:WP(h,s.index),routesMeta:y})};return e.forEach((s,u)=>{var f;if(s.path===""||!((f=s.path)!=null&&f.includes("?")))o(s,u);else for(let d of YS(s.path))o(s,u,!0,d)}),t}function YS(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let s=YS(n.join("/")),u=[];return u.push(...s.map(f=>f===""?o:[o,f].join("/"))),i&&u.push(...s),u.map(f=>e.startsWith("/")&&f===""?"/":f)}function $P(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:HP(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var LP=/^:[\w-]+$/,FP=3,BP=2,qP=1,zP=10,UP=-2,D8=e=>e==="*";function WP(e,t){let r=e.split("/"),n=r.length;return r.some(D8)&&(n+=UP),t&&(n+=BP),r.filter(i=>!D8(i)).reduce((i,o)=>i+(LP.test(o)?FP:o===""?qP:zP),n)}function HP(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function VP(e,t,r=!1){let{routesMeta:n}=e,i={},o="/",s=[];for(let u=0;u<n.length;++u){let f=n[u],d=u===n.length-1,m=o==="/"?t:t.slice(o.length)||"/",h=xu({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},m),y=f.route;if(!h&&d&&r&&!n[n.length-1].route.index&&(h=xu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:dn([o,h.pathname]),pathnameBase:JP(dn([o,h.pathnameBase])),route:y}),h.pathnameBase!=="/"&&(o=dn([o,h.pathnameBase]))}return s}function xu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=KP(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:n.reduce((d,{paramName:m,isOptional:h},y)=>{if(m==="*"){let _=u[y]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const g=u[y];return h&&!g?d[m]=void 0:d[m]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function KP(e,t=!1,r=!0){Gr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,u,f)=>(n.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function GP(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function vn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}var XP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function YP(e,t="/"){let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Ni(e):e,o;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?o=M8(r.substring(1),"/"):o=M8(r,t)):o=t,{pathname:o,search:ZP(n),hash:ek(i)}}function M8(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Kd(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function QP(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function QS(e){let t=QP(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function JS(e,t,r,n=!1){let i;typeof e=="string"?i=Ni(e):(i={...e},et(!i.pathname||!i.pathname.includes("?"),Kd("?","pathname","search",i)),et(!i.pathname||!i.pathname.includes("#"),Kd("#","pathname","hash",i)),et(!i.search||!i.search.includes("#"),Kd("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,u;if(s==null)u=r;else{let h=t.length-1;if(!n&&s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),h-=1;i.pathname=y.join("/")}u=h>=0?t[h]:"/"}let f=YP(i,u),d=s&&s!=="/"&&s.endsWith("/"),m=(o||s===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(d||m)&&(f.pathname+="/"),f}var dn=e=>e.join("/").replace(/\/\/+/g,"/"),JP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ZP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ek=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,tk=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function rk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function nk(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ZS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function e_(e,t){let r=e;if(typeof r!="string"||!XP.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(ZS)try{let o=new URL(window.location.href),s=r.startsWith("//")?new URL(o.protocol+r):new URL(r),u=vn(s.pathname,t);s.origin===o.origin&&u!=null?r=u+s.search+s.hash:i=!0}catch{Gr(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var t_=["POST","PUT","PATCH","DELETE"];new Set(t_);var ak=["GET",...t_];new Set(ak);var Di=D.createContext(null);Di.displayName="DataRouter";var vc=D.createContext(null);vc.displayName="DataRouterState";var ik=D.createContext(!1),r_=D.createContext({isTransitioning:!1});r_.displayName="ViewTransition";var ok=D.createContext(new Map);ok.displayName="Fetchers";var lk=D.createContext(null);lk.displayName="Await";var yr=D.createContext(null);yr.displayName="Navigation";var Ml=D.createContext(null);Ml.displayName="Location";var Qr=D.createContext({outlet:null,matches:[],isDataRoute:!1});Qr.displayName="Route";var O2=D.createContext(null);O2.displayName="RouteError";var n_="REACT_ROUTER_ERROR",sk="REDIRECT",uk="ROUTE_ERROR_RESPONSE";function ck(e){if(e.startsWith(`${n_}:${sk}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function fk(e){if(e.startsWith(`${n_}:${uk}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new tk(t.status,t.statusText,t.data)}catch{}}function dk(e,{relative:t}={}){et(Rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=D.useContext(yr),{hash:i,pathname:o,search:s}=Il(e,{relative:t}),u=o;return r!=="/"&&(u=o==="/"?r:dn([r,o])),n.createHref({pathname:u,search:s,hash:i})}function Rl(){return D.useContext(Ml)!=null}function Kn(){return et(Rl(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Ml).location}var a_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function i_(e){D.useContext(yr).static||D.useLayoutEffect(e)}function rr(){let{isDataRoute:e}=D.useContext(Qr);return e?Ok():pk()}function pk(){et(Rl(),"useNavigate() may be used only in the context of a <Router> component.");let e=D.useContext(Di),{basename:t,navigator:r}=D.useContext(yr),{matches:n}=D.useContext(Qr),{pathname:i}=Kn(),o=JSON.stringify(QS(n)),s=D.useRef(!1);return i_(()=>{s.current=!0}),D.useCallback((f,d={})=>{if(Gr(s.current,a_),!s.current)return;if(typeof f=="number"){r.go(f);return}let m=JS(f,JSON.parse(o),i,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:dn([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,o,i,e])}D.createContext(null);function gc(){let{matches:e}=D.useContext(Qr),t=e[e.length-1];return t?t.params:{}}function Il(e,{relative:t}={}){let{matches:r}=D.useContext(Qr),{pathname:n}=Kn(),i=JSON.stringify(QS(r));return D.useMemo(()=>JS(e,JSON.parse(i),n,t==="path"),[e,i,n,t])}function hk(e,t){return o_(e,t)}function o_(e,t,r,n,i){var A;et(Rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=D.useContext(yr),{matches:s}=D.useContext(Qr),u=s[s.length-1],f=u?u.params:{},d=u?u.pathname:"/",m=u?u.pathnameBase:"/",h=u&&u.route;{let E=h&&h.path||"";s_(d,!h||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let y=Kn(),g;if(t){let E=typeof t=="string"?Ni(t):t;et(m==="/"||((A=E.pathname)==null?void 0:A.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${E.pathname}" was given in the \`location\` prop.`),g=E}else g=y;let _=g.pathname||"/",S=_;if(m!=="/"){let E=m.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(E.length).join("/")}let x=GS(e,{pathname:S});Gr(h||x!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),Gr(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=bk(x&&x.map(E=>Object.assign({},E,{params:Object.assign({},f,E.params),pathname:dn([m,o.encodeLocation?o.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?m:dn([m,o.encodeLocation?o.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),s,r,n,i);return t&&j?D.createElement(Ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},j):j}function mk(){let e=jk(),t=rk(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:o},"ErrorBoundary")," or"," ",D.createElement("code",{style:o},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),r?D.createElement("pre",{style:i},r):null,s)}var yk=D.createElement(mk,null),l_=class extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=fk(e.digest);r&&(e=r)}let t=e!==void 0?D.createElement(Qr.Provider,{value:this.props.routeContext},D.createElement(O2.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?D.createElement(vk,{error:e},t):t}};l_.contextType=ik;var Gd=new WeakMap;function vk({children:e,error:t}){let{basename:r}=D.useContext(yr);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=ck(t.digest);if(n){let i=Gd.get(t);if(i)throw i;let o=e_(n.location,r);if(ZS&&!Gd.get(t))if(o.isExternal||n.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:n.replace}));throw Gd.set(t,s),s}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return e}function gk({routeContext:e,match:t,children:r}){let n=D.useContext(Di);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(Qr.Provider,{value:e},r)}function bk(e,t=[],r=null,n=null,i=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=r==null?void 0:r.errors;if(s!=null){let m=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);et(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,f=-1;if(r)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=m),h.route.id){let{loaderData:y,errors:g}=r,_=h.route.loader&&!y.hasOwnProperty(h.route.id)&&(!g||g[h.route.id]===void 0);if(h.route.lazy||_){u=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}let d=r&&n?(m,h)=>{var y,g;n(m,{location:r.location,params:((g=(y=r.matches)==null?void 0:y[0])==null?void 0:g.params)??{},unstable_pattern:nk(r.matches),errorInfo:h})}:void 0;return o.reduceRight((m,h,y)=>{let g,_=!1,S=null,x=null;r&&(g=s&&h.route.id?s[h.route.id]:void 0,S=h.route.errorElement||yk,u&&(f<0&&y===0?(s_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,x=null):f===y&&(_=!0,x=h.route.hydrateFallbackElement||null)));let j=t.concat(o.slice(0,y+1)),A=()=>{let E;return g?E=S:_?E=x:h.route.Component?E=D.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=m,D.createElement(gk,{match:h,routeContext:{outlet:m,matches:j,isDataRoute:r!=null},children:E})};return r&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?D.createElement(l_,{location:r.location,revalidation:r.revalidation,component:S,error:g,children:A(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:d}):A()},null)}function A2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xk(e){let t=D.useContext(Di);return et(t,A2(e)),t}function wk(e){let t=D.useContext(vc);return et(t,A2(e)),t}function Sk(e){let t=D.useContext(Qr);return et(t,A2(e)),t}function E2(e){let t=Sk(e),r=t.matches[t.matches.length-1];return et(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function _k(){return E2("useRouteId")}function jk(){var n;let e=D.useContext(O2),t=wk("useRouteError"),r=E2("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Ok(){let{router:e}=xk("useNavigate"),t=E2("useNavigate"),r=D.useRef(!1);return i_(()=>{r.current=!0}),D.useCallback(async(i,o={})=>{Gr(r.current,a_),r.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var R8={};function s_(e,t,r){!t&&!R8[e]&&(R8[e]=!0,Gr(!1,r))}D.memo(Ak);function Ak({routes:e,future:t,state:r,onError:n}){return o_(e,void 0,r,n,t)}function Pr(e){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ek({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:i,static:o=!1,unstable_useTransitions:s}){et(!Rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=D.useMemo(()=>({basename:u,navigator:i,static:o,unstable_useTransitions:s,future:{}}),[u,i,o,s]);typeof r=="string"&&(r=Ni(r));let{pathname:d="/",search:m="",hash:h="",state:y=null,key:g="default"}=r,_=D.useMemo(()=>{let S=vn(d,u);return S==null?null:{location:{pathname:S,search:m,hash:h,state:y,key:g},navigationType:n}},[u,d,m,h,y,g,n]);return Gr(_!=null,`<Router basename="${u}"> is not able to match the URL "${d}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:D.createElement(yr.Provider,{value:f},D.createElement(Ml.Provider,{children:t,value:_}))}function Pk({children:e,location:t}){return hk(ry(e),t)}function ry(e,t=[]){let r=[];return D.Children.forEach(e,(n,i)=>{if(!D.isValidElement(n))return;let o=[...t,i];if(n.type===D.Fragment){r.push.apply(r,ry(n.props.children,o));return}et(n.type===Pr,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=ry(n.props.children,o)),r.push(s)}),r}var gu="get",bu="application/x-www-form-urlencoded";function bc(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function kk(e){return bc(e)&&e.tagName.toLowerCase()==="button"}function Tk(e){return bc(e)&&e.tagName.toLowerCase()==="form"}function Ck(e){return bc(e)&&e.tagName.toLowerCase()==="input"}function Nk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dk(e,t){return e.button===0&&(!t||t==="_self")&&!Nk(e)}var iu=null;function Mk(){if(iu===null)try{new FormData(document.createElement("form"),0),iu=!1}catch{iu=!0}return iu}var Rk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xd(e){return e!=null&&!Rk.has(e)?(Gr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bu}"`),null):e}function Ik(e,t){let r,n,i,o,s;if(Tk(e)){let u=e.getAttribute("action");n=u?vn(u,t):null,r=e.getAttribute("method")||gu,i=Xd(e.getAttribute("enctype"))||bu,o=new FormData(e)}else if(kk(e)||Ck(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||u.getAttribute("action");if(n=f?vn(f,t):null,r=e.getAttribute("formmethod")||u.getAttribute("method")||gu,i=Xd(e.getAttribute("formenctype"))||Xd(u.getAttribute("enctype"))||bu,o=new FormData(u,e),!Mk()){let{name:d,type:m,value:h}=e;if(m==="image"){let y=d?`${d}.`:"";o.append(`${y}x`,"0"),o.append(`${y}y`,"0")}else d&&o.append(d,h)}}else{if(bc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=gu,n=null,i=bu,s=e}return o&&i==="text/plain"&&(s=o,o=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function P2(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $k(e,t,r,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:t&&vn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function Lk(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fk(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Bk(e,t,r){let n=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let s=await Lk(o,r);return s.links?s.links():[]}return[]}));return Wk(n.flat(1).filter(Fk).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function I8(e,t,r,n,i,o){let s=(f,d)=>r[d]?f.route.id!==r[d].route.id:!0,u=(f,d)=>{var m;return r[d].pathname!==f.pathname||((m=r[d].route.path)==null?void 0:m.endsWith("*"))&&r[d].params["*"]!==f.params["*"]};return o==="assets"?t.filter((f,d)=>s(f,d)||u(f,d)):o==="data"?t.filter((f,d)=>{var h;let m=n.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(s(f,d)||u(f,d))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((h=r[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function qk(e,t,{includeHydrateFallback:r}={}){return zk(e.map(n=>{let i=t.routes[n.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function zk(e){return[...new Set(e)]}function Uk(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Wk(e,t){let r=new Set;return new Set(t),e.reduce((n,i)=>{let o=JSON.stringify(Uk(i));return r.has(o)||(r.add(o),n.push({key:o,link:i})),n},[])}function u_(){let e=D.useContext(Di);return P2(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Hk(){let e=D.useContext(vc);return P2(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var k2=D.createContext(void 0);k2.displayName="FrameworkContext";function c_(){let e=D.useContext(k2);return P2(e,"You must render this element inside a <HydratedRouter> element"),e}function Vk(e,t){let r=D.useContext(k2),[n,i]=D.useState(!1),[o,s]=D.useState(!1),{onFocus:u,onBlur:f,onMouseEnter:d,onMouseLeave:m,onTouchStart:h}=t,y=D.useRef(null);D.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let S=j=>{j.forEach(A=>{s(A.isIntersecting)})},x=new IntersectionObserver(S,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[e]),D.useEffect(()=>{if(n){let S=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(S)}}},[n]);let g=()=>{i(!0)},_=()=>{i(!1),s(!1)};return r?e!=="intent"?[o,y,{}]:[o,y,{onFocus:No(u,g),onBlur:No(f,_),onMouseEnter:No(d,g),onMouseLeave:No(m,_),onTouchStart:No(h,g)}]:[!1,y,{}]}function No(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Kk({page:e,...t}){let{router:r}=u_(),n=D.useMemo(()=>GS(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?D.createElement(Xk,{page:e,matches:n,...t}):null}function Gk(e){let{manifest:t,routeModules:r}=c_(),[n,i]=D.useState([]);return D.useEffect(()=>{let o=!1;return Bk(e,t,r).then(s=>{o||i(s)}),()=>{o=!0}},[e,t,r]),n}function Xk({page:e,matches:t,...r}){let n=Kn(),{future:i,manifest:o,routeModules:s}=c_(),{basename:u}=u_(),{loaderData:f,matches:d}=Hk(),m=D.useMemo(()=>I8(e,t,d,o,n,"data"),[e,t,d,o,n]),h=D.useMemo(()=>I8(e,t,d,o,n,"assets"),[e,t,d,o,n]),y=D.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let S=new Set,x=!1;if(t.forEach(A=>{var T;let E=o.routes[A.route.id];!E||!E.hasLoader||(!m.some(O=>O.route.id===A.route.id)&&A.route.id in f&&((T=s[A.route.id])!=null&&T.shouldRevalidate)||E.hasClientLoader?x=!0:S.add(A.route.id))}),S.size===0)return[];let j=$k(e,u,i.unstable_trailingSlashAwareDataRequests,"data");return x&&S.size>0&&j.searchParams.set("_routes",t.filter(A=>S.has(A.route.id)).map(A=>A.route.id).join(",")),[j.pathname+j.search]},[u,i.unstable_trailingSlashAwareDataRequests,f,n,o,m,t,e,s]),g=D.useMemo(()=>qk(h,o),[h,o]),_=Gk(h);return D.createElement(D.Fragment,null,y.map(S=>D.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...r})),g.map(S=>D.createElement("link",{key:S,rel:"modulepreload",href:S,...r})),_.map(({key:S,link:x})=>D.createElement("link",{key:S,nonce:r.nonce,...x,crossOrigin:x.crossOrigin??r.crossOrigin})))}function Yk(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Qk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qk&&(window.__reactRouterVersion="7.13.0")}catch{}function Jk({basename:e,children:t,unstable_useTransitions:r,window:n}){let i=D.useRef();i.current==null&&(i.current=NP({window:n,v5Compat:!0}));let o=i.current,[s,u]=D.useState({action:o.action,location:o.location}),f=D.useCallback(d=>{r===!1?u(d):D.startTransition(()=>u(d))},[r]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.createElement(Ek,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o,unstable_useTransitions:r})}var f_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d_=D.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:i,reloadDocument:o,replace:s,state:u,target:f,to:d,preventScrollReset:m,viewTransition:h,unstable_defaultShouldRevalidate:y,...g},_){let{basename:S,unstable_useTransitions:x}=D.useContext(yr),j=typeof d=="string"&&f_.test(d),A=e_(d,S);d=A.to;let E=dk(d,{relative:i}),[T,O,P]=Vk(n,g),C=r7(d,{replace:s,state:u,target:f,preventScrollReset:m,relative:i,viewTransition:h,unstable_defaultShouldRevalidate:y,unstable_useTransitions:x});function R(z){t&&t(z),z.defaultPrevented||C(z)}let $=D.createElement("a",{...g,...P,href:A.absoluteURL||E,onClick:A.isExternal||o?t:R,ref:Yk(_,O),target:f,"data-discover":!j&&r==="render"?"true":void 0});return T&&!j?D.createElement(D.Fragment,null,$,D.createElement(Kk,{page:E})):$});d_.displayName="Link";var Zk=D.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:i=!1,style:o,to:s,viewTransition:u,children:f,...d},m){let h=Il(s,{relative:d.relative}),y=Kn(),g=D.useContext(vc),{navigator:_,basename:S}=D.useContext(yr),x=g!=null&&l7(h)&&u===!0,j=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,A=y.pathname,E=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(A=A.toLowerCase(),E=E?E.toLowerCase():null,j=j.toLowerCase()),E&&S&&(E=vn(E,S)||E);const T=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let O=A===j||!i&&A.startsWith(j)&&A.charAt(T)==="/",P=E!=null&&(E===j||!i&&E.startsWith(j)&&E.charAt(j.length)==="/"),C={isActive:O,isPending:P,isTransitioning:x},R=O?t:void 0,$;typeof n=="function"?$=n(C):$=[n,O?"active":null,P?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let z=typeof o=="function"?o(C):o;return D.createElement(d_,{...d,"aria-current":R,className:$,ref:m,style:z,to:s,viewTransition:u},typeof f=="function"?f(C):f)});Zk.displayName="NavLink";var e7=D.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:i,state:o,method:s=gu,action:u,onSubmit:f,relative:d,preventScrollReset:m,viewTransition:h,unstable_defaultShouldRevalidate:y,...g},_)=>{let{unstable_useTransitions:S}=D.useContext(yr),x=i7(),j=o7(u,{relative:d}),A=s.toLowerCase()==="get"?"get":"post",E=typeof u=="string"&&f_.test(u),T=O=>{if(f&&f(O),O.defaultPrevented)return;O.preventDefault();let P=O.nativeEvent.submitter,C=(P==null?void 0:P.getAttribute("formmethod"))||s,R=()=>x(P||O.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:i,state:o,relative:d,preventScrollReset:m,viewTransition:h,unstable_defaultShouldRevalidate:y});S&&r!==!1?D.startTransition(()=>R()):R()};return D.createElement("form",{ref:_,method:A,action:j,onSubmit:n?f:T,...g,"data-discover":!E&&e==="render"?"true":void 0})});e7.displayName="Form";function t7(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p_(e){let t=D.useContext(Di);return et(t,t7(e)),t}function r7(e,{target:t,replace:r,state:n,preventScrollReset:i,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:u,unstable_useTransitions:f}={}){let d=rr(),m=Kn(),h=Il(e,{relative:o});return D.useCallback(y=>{if(Dk(y,t)){y.preventDefault();let g=r!==void 0?r:Jo(m)===Jo(h),_=()=>d(e,{replace:g,state:n,preventScrollReset:i,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:u});f?D.startTransition(()=>_()):_()}},[m,d,h,r,n,t,e,i,o,s,u,f])}var n7=0,a7=()=>`__${String(++n7)}__`;function i7(){let{router:e}=p_("useSubmit"),{basename:t}=D.useContext(yr),r=_k(),n=e.fetch,i=e.navigate;return D.useCallback(async(o,s={})=>{let{action:u,method:f,encType:d,formData:m,body:h}=Ik(o,t);if(s.navigate===!1){let y=s.fetcherKey||a7();await n(y,r,s.action||u,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||f,formEncType:s.encType||d,flushSync:s.flushSync})}else await i(s.action||u,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||f,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,i,t,r])}function o7(e,{relative:t}={}){let{basename:r}=D.useContext(yr),n=D.useContext(Qr);et(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),o={...Il(e||".",{relative:t})},s=Kn();if(e==null){o.search=s.search;let u=new URLSearchParams(o.search),f=u.getAll("index");if(f.some(m=>m==="")){u.delete("index"),f.filter(h=>h).forEach(h=>u.append("index",h));let m=u.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:dn([r,o.pathname])),Jo(o)}function l7(e,{relative:t}={}){let r=D.useContext(r_);et(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=p_("useViewTransitionState"),i=Il(e,{relative:t});if(!r.isTransitioning)return!1;let o=vn(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=vn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return xu(i.pathname,s)!=null||xu(i.pathname,o)!=null}const s7=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],Ee=[5140,1204,1181,2302,930,1037,1799,2840,1909,1905,7378,6310,13960,9237,2152,1012,1115,748,793,2020,1960,3581,7495,1742,1415,2546,8782,5402,1290,905,545,650,1854,2764,1310,706,929,1299,672,5141,804,1279,1725,1108,1058,1558,1468];function ue(e,t,r){return[...s7.map((i,o)=>({prefecture:i,value:e[o],absoluteValue:t[o],absoluteUnit:r}))].sort((i,o)=>o.value-i.value).map((i,o)=>({...i,rank:o+1}))}const $8=[1.65,1.4,1.28,1.36,1.17,1.17,1.45,1.39,1.41,1.47,1.42,1.39,1.39,1.41,1.14,1.07,1.14,1.15,1.43,1.29,1.34,1.4,1.5,1.44,1.32,1.4,1.67,1.48,1.38,1.55,1.42,1.26,1.52,1.46,1.36,1.45,1.6,1.5,1.6,1.67,1.32,1.38,1.46,1.5,1.69,1.59,2.2],L8=[30.3,21.8,11.3,11.8,14.5,6,9.3,8.3,10,6.6,12,11.7,20.9,16.3,8.1,3.2,5.9,4.4,6.5,5.2,5.5,7.4,10.2,9.6,7.6,23,33.5,18.5,23.4,14.6,11.8,8.2,6.5,16.6,11.9,18.9,11.6,14.9,27.4,25.3,9.1,21,13,17,15,18.8,22],F8=[264.1,218.2,224.1,254.3,226.8,228.5,210.1,192.4,219.8,242.5,174,202.1,334.7,222.6,228.3,256.7,296.7,259.4,252.3,223.8,218,202,220.8,232,237.2,338.3,275,258.1,254.1,286.6,291.7,270.2,317.4,276.4,277.2,325.1,296.2,274.5,311.8,305.6,283.5,292.1,293.3,292.4,261.5,253.6,245.9],u7=[13.9,17.7,16.9,11.4,21.7,18.6,17.3,14.3,13.5,14.9,10.2,11.6,10.6,10.4,16.1,13.7,13.9,16.3,21.3,18.3,16.5,15.5,11.5,16,11.5,14.5,12.8,13.5,17.8,21.2,16.3,18.9,15.8,13.5,18.5,19.5,16.3,19.3,20.5,11.5,16,20.2,15,18.5,18.4,20.4,10.7],B8=[126,230.5,279,138.4,304.1,302.6,191.2,145.5,182.4,174.2,91,99.2,101.1,85.8,258.4,261.3,318.5,369.9,294,308.2,236.1,183.3,122.5,249.4,237.5,397.5,133.6,189.4,438.8,414.1,485,555.2,231,192.7,313.5,272,244.8,285.4,299.5,143.7,290.5,261.5,216,306.8,277.6,241.7,120.6],q8=[4298,3867,3741,4423,3736,3786,4027,4765,4604,4372,4902,4818,5521,5122,3971,4281,4423,4121,4376,4148,4286,4437,4712,4281,4478,4821,4584,4721,4421,4127,3921,3871,4286,4421,4131,3987,4135,3928,3862,4278,3867,3798,3812,3911,3782,3741,3482],c7=[72,78,76,58,95,74,68,52,54,56,48,51,82,55,69,65,60,58,64,67,58,54,46,62,48,68,75,62,66,72,80,84,64,61,78,74,66,70,88,61,62,70,63,68,66,67,55],f7=[34.1,34.3,33,26.1,38.6,33.5,31.6,27.5,27,27.6,24.3,25.9,22.9,24.4,31.8,30.9,29.4,29,30.2,30.5,30.3,28.8,25.8,30,26.5,28.4,27.7,28.9,30.1,31.8,33.3,33.8,28.6,28.9,32.2,31.4,31,31.5,33.2,26.7,29.8,31.8,28.8,31.3,31,29.4,22.8],z8=[22.6,19.8,21.3,17.2,19.4,17.8,18.9,17.8,18.4,19.2,15.8,16.2,13.9,14.8,20.1,16.8,17.2,16.4,18.9,17.6,17.2,16.8,15.9,18.2,15.4,16.8,17.8,17.2,15.2,18.9,18.4,19.2,17.4,17.8,18.9,14.8,17.2,18.4,20.4,18.2,18.8,19.4,18.2,19.8,20.4,19.2,16.8],U8=[1.01,1.12,1.09,1.06,1.14,1.19,1.19,1.17,1.18,1.16,1.07,1.08,.96,1.08,1.12,1.28,1.26,1.4,1.2,1.35,1.23,1.24,1.27,1.26,1.31,1.06,1.09,1.2,1.14,1.24,1.43,1.43,1.26,1.35,1.27,1.26,1.28,1.25,1.21,1.27,1.46,1.38,1.44,1.38,1.43,1.54,1.7],d7=[80.9,79.3,80.6,81.7,80.5,81.4,80.6,80.9,81,81.1,81.4,81.5,81.8,81.9,81.3,81.7,82,82.1,81.9,82.7,81.9,82,82.4,81.9,82.8,81.4,81.2,81.8,82.4,81.6,81.4,82,82.2,82,81.5,82,82.1,81.4,81.4,82,82.2,82.2,82,82.3,81.6,81.5,80.7],W8=[289,238,246,304,244,255,275,312,298,289,318,319,485,345,264,298,305,297,302,290,295,319,352,289,319,325,332,321,295,272,258,258,299,312,275,265,285,288,264,325,262,269,278,274,268,265,320],H8=[56.3,68,72.5,59.3,74.6,73.8,68.9,63.8,67.2,65.4,55.4,56.2,44.8,53,68.5,76.8,72.4,75.2,68.4,71.4,70.5,67.8,62.4,68.9,69.4,62.8,52.8,59.2,68.8,66.8,72.8,74.8,66.8,63.8,67.8,68.4,66.8,67.8,65.4,56.2,67.4,65.8,68.4,68.4,68.8,68.4,42.8],V8=[13478,1798,2654,1942,1168,898,2128,2048,1948,2248,1748,3428,238,848,2428,514,612,588,758,3348,1428,2228,3128,1062,712,702,2088,1018,548,668,782,812,1668,1328,1102,1022,1018,1328,568,3612,1358,1128,3498,1748,3082,5438,1024],K8=[41.2,38.9,37.8,42.1,35.4,36.8,39.2,40.1,39.8,40.5,44.2,44.8,52.8,48.2,38.4,35.2,37.8,35.4,40.2,38.8,38.4,41.2,43.8,40.2,40.8,46.2,48.4,44.8,42.4,40.8,36.8,35.4,40.2,41.8,39.8,38.4,39.2,38.8,37.8,44.2,37.8,39.4,39.8,40.2,40.8,40.2,42.8],G8=[42.8,38.2,36.8,48.2,34.8,37.2,41.8,48.4,47.2,48.8,56.2,56.8,72.4,62.8,40.2,41.8,48.2,43.8,46.2,48.2,44.8,51.2,55.8,45.2,51.8,62.4,56.8,58.2,56.4,42.8,39.8,38.4,48.8,52.4,40.8,38.4,41.8,40.2,37.8,52.4,38.8,40.2,43.8,42.4,40.8,39.8,44.2],X8=[.8,.4,.3,1.2,.3,.3,.6,2.1,1.4,2.8,3.4,2.8,4.2,3.2,.6,1.2,1.8,.8,1.2,.8,2.8,2.4,3.8,1.8,2.8,2.8,3.6,2.4,1.2,.8,.8,.4,1.2,1.4,.8,.6,.8,.8,.4,2.2,.6,.8,.8,.6,.6,.6,1.8],Y8=[448,312,298,389,248,264,348,418,398,428,389,412,568,489,298,268,312,278,348,298,328,412,468,348,368,478,528,412,368,348,312,298,389,412,328,312,348,328,298,468,312,328,348,328,348,328,428],Q8=[31.2,38.4,36.8,28.4,37.8,34.8,33.4,29.8,30.2,29.4,27.8,26.8,22.4,24.8,31.8,28.2,27.8,28.4,28.8,26.8,28.4,27.8,27.2,29.4,27.2,25.8,26.8,27.4,26.4,30.8,32.4,33.8,29.8,28.4,31.2,32.4,31.2,33.8,36.2,30.4,34.2,36.8,33.8,35.2,37.8,36.4,34.8],J8=[210,168,248,182,198,172,188,198,202,208,198,192,218,204,228,248,218,208,228,242,198,202,198,208,192,228,218,212,228,268,298,318,238,218,248,288,248,268,328,198,248,268,238,248,258,248,248],Z8=[43,28,26,38,24,22,32,48,46,44,58,56,48,54,28,26,28,24,34,28,32,44,52,34,42,52,52,48,48,38,24,22,36,40,32,26,28,30,24,46,24,26,28,28,26,24,32],eb=[28,4,2,18,0,0,8,18,12,8,148,112,361,412,4,0,0,0,4,4,4,18,82,8,12,42,198,78,22,8,0,0,8,18,4,2,4,6,2,92,2,4,8,4,4,4,12],tb=[1248.4,1182.3,1198.4,1089.2,1298.4,1218.4,1098.2,948.2,1012.4,1048.2,744.2,796.2,988.4,813.2,1148.2,1198.4,1218.4,1248.2,1098.4,1148.2,1048.2,1098.4,982.4,1148.2,1048.2,1248.4,1048.2,1098.4,1148.2,1198.4,1298.4,1348.2,1148.4,1098.2,1248.4,1398.2,1248.4,1298.2,1685.4,1248.4,1468.9,1398.4,1348.2,1398.4,1448.2,1504.9,1348.4],rb=[82.4,68.2,71.4,84.2,68.4,72.4,74.2,78.4,76.2,78.4,68.2,72.4,118.4,82.4,74.2,82.4,94.2,84.4,82.4,78.4,74.2,82.4,84.2,78.4,82.4,102.4,88.4,84.2,82.4,78.4,84.2,82.4,88.4,86.2,82.4,84.2,84.4,82.4,94.2,94.4,84.2,86.4,86.2,84.4,82.4,82.4,84.2],nb=[198.4,168.2,171.4,194.2,178.4,172.4,184.2,188.4,186.2,188.4,178.2,182.4,248.4,212.4,184.2,198.4,214.2,204.4,198.4,188.4,184.2,192.4,198.2,188.4,192.4,228.4,212.4,204.2,198.4,194.4,198.2,198.4,208.4,206.2,198.4,204.2,204.4,198.4,218.2,218.4,204.2,208.4,206.2,204.4,198.4,198.4,204.2],ab=[1842.4,1618.4,1548.2,1382.4,1692.4,1498.4,1424.2,1298.4,1348.2,1382.4,1124.2,1198.4,756.4,1098.2,1548.4,1648.4,1548.4,1598.2,1448.4,1548.4,1398.2,1348.4,1198.2,1448.4,1348.4,1498.4,1348.2,1392.4,1448.4,1548.4,1732.2,1772.4,1492.4,1448.2,1548.4,1548.2,1498.4,1548.4,1597.2,1448.4,1548.4,1598.4,1498.2,1598.4,1548.2,1598.4,1648.4],ib=[348.4,298.2,312.4,328.4,298.4,312.2,328.4,348.2,338.4,342.4,312.2,322.4,298.4,318.2,312.4,328.4,342.4,348.2,328.4,338.4,328.2,338.4,328.4,338.2,342.4,348.4,328.2,338.4,348.4,358.4,368.2,378.4,348.4,342.2,358.4,368.2,358.4,368.4,378.2,348.4,368.4,378.4,368.2,378.4,388.2,378.4,398.4],ob=[258.4,198.2,172.4,228.4,188.4,182.2,208.4,198.2,194.4,198.4,160.2,178.4,315.4,212.2,182.4,198.4,218.4,198.2,218.4,198.4,192.2,198.4,198.4,208.2,208.4,268.4,248.2,228.4,228.4,278.4,278.2,258.4,218.4,228.2,298.4,258.2,248.4,278.4,278.2,238.4,258.4,258.4,238.2,248.4,278.2,248.4,268.4],lb=[158.4,220.2,178.4,138.4,222.4,168.2,152.4,132.2,134.4,138.4,112.2,118.4,148.4,118.2,162.4,158.4,158.4,162.2,148.4,158.4,142.2,138.4,122.4,148.2,138.4,158.4,128.2,138.4,148.4,162.4,176.2,182.4,148.4,142.2,158.4,168.2,158.4,168.4,172.2,112.4,158.4,168.4,158.2,168.4,168.2,158.4,162.4],sb=[6.84,7.28,7.48,5.92,7.82,7.24,6.48,4.98,5.42,5.48,3.82,4.28,4.28,3.92,6.48,6.82,7.24,7.48,6.24,6.84,5.48,5.24,4.48,6.24,5.24,7.24,5.48,5.92,6.48,7.48,8.24,8.48,6.84,6.28,7.48,8.24,7.48,8.48,9.28,6.84,9.28,9.48,8.24,8.48,9.28,8.48,8.24],ub=[48.4,42.2,44.4,48.4,42.4,42.2,46.4,52.2,52.4,54.4,58.2,58.4,82.4,68.2,44.4,48.4,52.4,48.2,48.4,48.4,48.2,52.4,58.4,48.2,52.4,62.4,62.2,58.4,52.4,48.4,48.2,44.4,52.4,52.2,48.4,48.2,48.4,48.4,44.2,58.4,44.4,48.4,48.2,48.4,48.2,48.4,52.4],cb=[398,342,338,412,332,348,368,428,418,412,462,458,612,498,368,412,428,408,418,408,402,442,498,402,428,468,498,462,428,388,368,362,412,428,388,378,388,378,358,458,368,378,388,378,368,362,398],fb=[268,238,234,282,228,242,258,298,288,282,318,312,428,342,252,282,298,278,288,278,272,302,342,272,298,322,342,318,292,262,248,244,282,292,262,258,262,256,244,312,252,258,268,258,252,248,272],db=[1010,951,952,1023,951,955,955,1005,1004,985,1078,1076,1163,1162,985,998,998,984,988,998,1001,1034,1077,973,967,1008,1114,1052,986,980,957,962,982,998,979,980,970,980,952,992,956,953,952,956,952,953,952],pb=[100.2,97.8,97.4,99.8,97.2,97.6,98.4,101.2,101,100.8,103.2,102.8,106.4,104.2,98.8,99.4,100.2,99.2,100.2,99.8,99.4,101.2,102.8,99.4,101.2,103.4,104.2,102.8,101.2,99.4,98.4,98.2,100.2,101.2,99.4,98.8,99.4,99.2,98.4,101.2,98.4,98.8,99.2,98.8,98.4,98.2,100.8],hb=[1698,1548,1648,1848,1448,1748,1748,1948,1998,1948,1948,1998,1748,1948,1548,1648,1748,1648,2148,2048,1948,2148,1998,1948,1848,1748,1748,1848,1748,1848,1748,1748,1948,1948,1948,1948,1948,1848,1948,1948,1948,1848,1948,1948,1948,1848,2148],mb=[1078,1248,1348,1148,1748,1548,1348,1248,1648,1348,1248,1648,1528,1748,1848,2348,2248,2148,1148,948,1748,2448,1548,2148,1748,1548,1348,1648,1548,1648,1748,1848,1048,1248,1748,1548,1248,1748,2948,1748,1948,2148,2248,1948,2448,2548,2148],yb=[248,198,194,248,178,182,224,298,312,308,348,368,368,388,198,218,248,228,278,228,248,338,348,278,298,298,368,318,268,258,228,218,298,312,268,248,268,268,228,348,248,268,298,268,268,258,328],vb=[38.4,42.8,40.2,36.8,44.2,42.4,40.2,36.8,38.4,38.2,34.8,34.2,32.8,33.8,40.2,38.4,40.8,38.4,38.2,38.4,36.8,36.2,34.8,37.2,35.8,37.2,37.8,36.8,36.2,40.8,42.4,44.2,38.4,37.8,40.8,40.2,39.8,42.4,44.8,38.4,40.8,42.4,40.2,42.4,44.8,42.8,34.8],gb=[34.2,32.8,31.4,28.4,30.8,29.8,31.2,28.8,30.2,29.8,26.8,27.2,24.8,25.8,29.8,26.8,28.4,27.8,28.4,27.2,27.8,27.2,26.2,28.4,26.8,27.2,28.4,27.8,27.2,30.8,30.2,31.8,28.4,28.2,30.8,29.8,28.4,30.8,32.4,30.2,31.8,32.4,30.8,32.4,34.2,32.8,26.8],bb=[38.4,36.8,34.8,34.2,36.8,34.2,33.8,31.8,32.4,32.2,30.8,31.2,32.4,31.8,33.8,34.8,34.2,33.8,33.2,32.8,32.4,32.2,31.8,33.8,32.8,36.2,38.4,35.8,34.2,36.8,36.2,37.4,35.8,35.2,36.8,37.2,35.8,37.4,40.2,37.8,38.4,40.2,38.4,40.2,41.8,40.8,38.4],xb=[28400,24800,24200,26800,23800,24200,25200,27800,28200,27400,30200,29800,31800,30400,25800,26200,26800,25800,27200,26400,26200,28400,29800,26800,28200,29400,31200,29200,27400,26200,24800,24400,27800,28400,26200,25800,26200,26400,24800,28400,25200,25800,27200,26800,26400,26200,26800],wb=[6200,5800,5600,6e3,5800,5600,5800,6200,6400,6200,6600,6400,6800,6600,5800,5600,5800,5600,6200,5800,6e3,6200,6400,6e3,6200,6600,7200,6600,6200,6e3,5800,5800,6200,6400,6e3,6200,6200,6400,6800,6600,6200,6800,6600,6600,6800,6600,6400],Sb=[-1.2,-4.8,-4.2,-.8,-6.8,-4.2,-2.8,.8,.2,.4,4.2,3.8,8.4,4.8,-2.8,-1.2,-.2,-1.8,-.4,-1.2,-1.4,.2,2.4,-.8,.4,.8,2.2,1.2,-1.2,-1.8,-2.4,-3.2,-.4,.2,-2.8,-2.4,-2.2,-3.2,-3.8,1.2,-2.8,-3.2,-1.8,-2.4,-2.8,-2.8,.8],_b=[118.4,138.2,142.4,118.4,148.4,142.2,128.4,118.2,122.4,118.4,108.2,108.4,78.4,92.2,132.4,148.4,128.4,148.2,128.4,138.4,132.2,122.4,108.4,128.2,122.4,108.4,92.2,108.4,118.4,128.4,142.2,148.4,128.4,118.2,132.4,132.2,128.4,132.4,132.2,108.4,132.4,132.4,128.2,132.4,132.2,128.4,98.4],jb=[898,842,818,862,848,828,858,918,912,908,948,938,868,918,848,828,842,828,882,818,842,892,938,862,892,912,958,918,882,872,848,838,878,892,868,878,868,872,848,912,868,872,888,872,882,878,928],Ob=[57.2,54.8,55.4,60.2,52.8,55.2,56.4,60.8,60.4,60.2,62.8,62.4,65.4,63.8,57.8,58.4,59.8,58.8,59.2,59.4,59.8,61.2,63.2,59.8,61.8,61.4,62.4,61.8,60.4,59.2,57.4,56.8,60.2,61.4,59.2,58.8,59.2,58.8,57.8,62.4,58.8,58.4,59.8,58.8,59.2,58.4,63.4],Ab=[68.4,65.2,64.8,70.2,62.4,64.8,67.2,71.2,70.8,70.4,74.2,74.8,80.4,76.8,65.8,63.2,66.4,63.8,67.8,66.4,66.8,70.2,74.8,67.2,68.8,76.4,78.2,74.8,70.4,67.8,63.8,62.4,68.4,70.8,66.8,65.2,66.8,65.8,64.8,74.2,64.8,66.4,67.8,68.2,68.8,67.8,72.8],Eb=[58.4,54.2,53.8,62.2,51.4,53.8,57.2,63.2,62.8,62.4,68.2,68.8,76.4,70.8,55.8,52.2,56.4,52.8,57.8,55.4,55.8,62.2,68.8,57.2,60.8,70.4,72.2,67.8,62.4,58.8,52.8,51.4,59.4,62.8,56.8,55.2,56.8,55.8,53.8,67.2,54.8,56.4,58.8,59.2,59.8,58.8,64.8],Pb=[28.4,24.2,23.8,30.2,21.4,22.8,26.2,30.2,29.8,29.4,34.2,33.8,44.4,37.8,24.8,21.2,23.4,21.8,26.8,24.4,24.8,28.2,33.8,25.2,27.8,36.4,40.2,34.8,29.4,26.8,21.8,20.4,26.4,28.8,23.8,22.2,23.8,22.8,21.8,33.2,22.8,23.4,25.8,26.2,26.8,25.8,31.8],kb=[28.4,24.2,23.8,28.2,21.4,22.8,25.2,28.2,27.8,27.4,30.2,29.8,38.4,32.8,23.8,20.2,22.4,20.8,24.8,23.4,23.8,26.2,29.8,23.2,24.8,30.4,34.2,28.8,25.4,23.8,20.8,19.4,24.4,26.8,22.8,21.2,22.8,21.8,20.8,29.2,21.8,22.4,23.8,24.2,24.8,23.8,27.8],Tb=[18.4,14.2,13.8,18.2,11.4,12.8,15.2,18.2,17.8,17.4,20.2,19.8,28.4,22.8,13.8,10.2,12.4,10.8,14.8,13.4,13.8,16.2,19.8,13.2,14.8,20.4,24.2,18.8,15.4,13.8,10.8,9.4,14.4,16.8,12.8,11.2,12.8,11.8,10.8,19.2,11.8,12.4,13.8,14.2,14.8,13.8,17.8],Cb=[.474,.261,.285,.607,.258,.31,.422,.594,.563,.569,.857,.826,1.064,.954,.385,.508,.535,.44,.48,.483,.528,.68,.876,.528,.631,.618,.809,.684,.411,.335,.308,.292,.524,.614,.363,.337,.412,.341,.269,.726,.32,.327,.43,.354,.32,.307,.472],Nb=[28,22,18,24,14,20,22,28,30,32,36,38,20,32,16,28,30,24,32,28,26,34,38,28,32,28,26,28,28,30,30,28,30,32,30,30,32,30,28,34,32,28,32,30,36,42,38],Db=[498,510,514,489,518,516,502,492,494,492,476,480,462,474,506,498,496,500,488,496,490,486,478,490,484,482,478,482,486,490,498,500,488,486,492,492,490,492,496,484,494,496,492,494,494,492,482],Mb=[94,98,100,92,102,100,96,92,94,92,88,90,84,88,98,96,96,98,92,96,92,90,88,92,90,90,88,90,90,92,96,98,92,90,94,94,92,94,96,90,94,96,92,94,94,92,92],Rb=[1248,428,384,684,348,392,468,592,648,712,824,948,1248,1124,484,548,692,512,898,724,548,892,948,548,784,1248,1024,824,648,712,898,724,892,812,712,724,692,712,648,1024,612,684,724,848,712,724,1248],Ib=[84.2,78.4,78.8,86.2,76.8,78.4,82.4,86.8,87.2,87.4,91.2,90.8,94.2,92.4,82.8,86.4,88.2,86.8,87.4,88.2,87.4,89.2,91.8,87.4,89.8,90.4,91.2,90.4,89.2,86.4,83.4,82.8,87.4,88.2,84.8,84.2,85.8,84.8,82.8,89.4,83.4,84.2,86.4,84.8,84.2,83.8,87.8],$b=[3.8,3.4,3.8,3.2,3.8,3.6,3.4,3.2,3.2,3.4,2.8,3,2.2,2.4,3.4,3.8,3.4,3.8,3.8,3.8,3.4,3.2,2.8,3.4,3.4,3.8,2.8,3.2,3.8,3.8,4.2,4.4,3.4,3.2,3.8,3.8,3.8,3.8,4.2,3.2,3.8,3.8,3.4,3.8,3.8,3.8,3.4],Lb=[42,34,32,52,30,32,38,54,52,54,68,72,98,84,38,42,48,40,46,42,44,58,72,44,56,68,72,64,52,42,36,34,48,54,38,36,40,38,34,62,36,38,42,38,36,36,52],Fb=[124,68,62,94,58,64,72,88,92,96,112,118,148,138,72,82,98,76,112,98,82,118,128,82,108,148,128,112,92,98,118,108,112,108,98,108,98,108,94,128,88,94,108,108,98,98,148],Bb=[42.8,54.2,58.4,46.2,62.4,58.8,52.4,50.2,52.4,50.4,44.2,44.8,24.8,38.2,54.4,62.8,54.4,62.2,52.4,58.4,54.2,50.4,48.4,54.2,52.4,44.4,40.2,46.4,52.4,54.4,58.2,62.4,52.4,50.2,56.4,54.2,52.4,54.4,56.2,44.4,56.4,56.4,54.2,56.4,56.2,54.4,38.4],qb=[24.8,28.4,26.2,22.4,24.8,32.4,24.2,20.8,21.4,22.8,18.4,18.8,16.2,17.8,24.4,20.8,21.4,20.2,18.8,20.4,19.8,20.2,18.4,20.8,19.4,20.8,19.2,20.4,20.8,20.2,22.4,21.8,20.8,21.4,20.4,24.8,22.4,22.8,24.2,20.4,22.8,22.4,21.8,22.4,22.8,22.4,18.8],zb=[42.8,28.4,34.8,48.2,28.8,19.3,38.4,48.8,56.2,52.4,54.2,48.8,44.2,48.4,38.4,42.8,44.2,40.8,48.4,44.8,52.4,72.4,62.8,52.4,62.8,44.2,54.8,48.4,52.4,38.4,32.4,34.8,48.4,54.2,44.8,48.4,52.8,44.8,38.4,68.4,48.4,48.8,58.4,62.4,94.6,68.4,52.4],Ub=[124.4,119.5,111,23.8,108.9,105.7,87,22.4,20.8,21.4,11.2,7.8,9.4,5.8,68.4,98.4,88.2,78.4,22.4,85.6,44.8,10.2,24.8,34.8,64.2,28.4,24.8,38.4,32.4,22.4,44.8,68.2,28.4,18.4,24.8,18.4,14.8,14.2,8.8,8.4,8.8,12.4,10.4,12.8,8.2,3.8,0],Wb=[.8,2.4,3.8,8.4,4.8,8.4,10.8,24.8,22.4,32.4,28.4,18.8,12.4,16.8,8.4,6.8,8.4,8.8,20.4,14.8,18.4,14.2,18.8,14.8,12.4,8.8,12.4,10.8,12.4,12.8,6.4,4.8,14.8,12.4,8.4,12.8,10.4,12.8,8.4,14.8,12.8,12.4,14.8,14.2,16.4,16.8,4.2],Hb=[248,62,68,52,42,58,82,28,34,42,18,22,12,18,62,48,42,38,44,94,52,48,28,48,28,42,24,52,38,58,24,28,48,68,28,38,32,62,28,52,22,42,78,82,62,48,28],Vb=[62.4,54.8,52.4,64.2,48.4,52.8,58.4,68.4,64.8,68.2,72.4,68.8,58.4,64.2,58.4,68.4,72.4,68.2,64.8,68.4,64.8,72.4,78.4,68.4,72.8,68.4,62.4,68.8,64.8,62.4,58.4,54.8,68.4,68.2,62.4,64.8,68.4,62.4,52.4,72.8,62.4,62.8,68.4,68.8,62.4,62.8,72.8],Kb=[14.8,18.4,16.8,14.2,18.4,16.8,16.4,16.8,16.4,18.4,14.2,14.8,8.4,11.8,18.4,16.8,16.4,16.8,14.8,14.2,16.4,14.2,13.8,16.4,12.8,12.4,12.8,14.2,13.8,14.8,16.8,15.8,14.2,13.8,15.8,15.8,14.8,15.4,16.8,13.8,15.8,16.4,14.8,15.8,16.4,15.4,10.4],Gb=[18,14,16,18,14,16,16,20,18,18,24,22,28,24,16,18,20,18,22,20,18,20,22,18,20,24,22,22,20,18,14,16,18,18,16,16,18,16,14,20,16,16,18,16,16,16,18],Xb=[71,66,77,57,72,72,71,31,54,67,31,29,36,39,68,67,68,74,78,79,81,64,42,64,51,74,30,67,77,77,74,78,68,72,71,76,47,71,84,45,45,59,62,71,76,65,45],Yb=[2,.2,.4,4.5,.7,.3,.9,.8,-.1,-.1,2.1,5,7.3,4.1,-.5,.1,1,.2,-.2,.7,.1,.2,2.7,.6,1,3.7,3.7,2.5,0,-.5,-.3,-.4,1.2,1.7,.6,-.4,0,-.4,-.2,5.5,2.8,1.2,3.6,2.3,.3,-.5,7.2],Qb=[.99,1.18,1.22,1.15,1.28,1.38,1.38,1.38,1.28,1.38,1.12,1.26,1.76,.9,1.42,1.64,1.46,1.86,1.52,1.38,1.58,1.38,1.24,1.32,1.24,1.28,1.06,1.12,1.04,1.08,1.48,1.54,1.28,1.24,1.22,1.38,1.28,1.22,1.28,1.06,1.24,1.14,1.18,1.22,1.28,1.28,1.12],Jb=[42.8,38.4,36.8,36.2,36.4,34.8,35.8,35.4,34.8,35.2,37.8,38.2,37.4,39.2,35.8,32.9,34.8,32.7,35.2,34.4,34.8,36.2,34.8,35.4,34.2,41.8,41.3,38.8,37.4,37.8,35.4,34.8,36.2,37.4,36.8,36.4,36.2,36.8,37.2,40.2,37.4,38.8,38.2,37.8,38.4,38.8,44.5],Zb=[24.8,18.4,20.2,28.4,16.8,20.4,22.4,26.8,24.8,24.2,28.4,28.8,32.4,30.8,22.4,28.4,28.8,28.2,24.8,26.4,26.8,28.4,30.4,26.4,30.8,32.4,28.4,26.8,22.4,18.8,20.4,22.4,24.8,26.4,22.8,18.4,22.4,16.8,18.4,28.4,20.4,22.8,24.4,22.8,24.4,26.4,30.8],ex=[48.2,18.4,22.4,12.8,24.8,28.4,18.2,12.4,10.8,14.2,8.4,9.2,6.4,7.8,16.8,22.4,18.8,24.8,18.4,22.8,14.8,14.2,12.4,18.4,14.8,12.8,16.8,12.4,10.8,16.4,28.4,24.8,18.4,14.8,12.4,22.4,18.8,16.4,22.4,16.4,28.4,22.4,28.8,24.4,38.4,44.8,32.4],tx=[2.8,3.2,2.8,2.8,3.4,2.6,2.6,2.4,2.2,2.2,2.8,2.8,3.2,3,2.4,1.4,1.8,1.4,2.4,1.8,1.8,2.2,2.4,2.2,1.8,2.8,3.2,2.8,2.6,2.8,1.8,1.8,2.2,2.4,2.4,2.4,2.2,2.8,2.8,3,2.8,3,2.8,2.8,3,3.2,3.8],rx=[18.4,16.8,14.8,16.2,14.2,14.8,15.4,14.8,13.8,14.2,14.8,15.2,18.4,16.8,14.2,10.4,12.8,10.8,12.4,12.8,12.4,14.2,13.8,13.4,12.8,20.4,22.8,16.8,14.8,16.4,12.4,12.8,14.8,16.4,14.8,14.8,14.2,16.4,18.4,18.4,14.8,16.4,15.8,16.8,18.4,16.8,28.4],Xr=[{id:"divorce-rate",category:"人口・世帯",title:"離婚率（人口千対）",description:"人口1,000人あたりの離婚件数",unit:"件",year:2023,source:"厚生労働省 人口動態統計（2023年）確定数",data:ue($8,Ee.map((e,t)=>Math.round($8[t]*e)),"件"),yearlyData:[{year:1990,value:1.28},{year:1995,value:1.6},{year:2e3,value:2.1},{year:2005,value:2.08},{year:2010,value:1.99},{year:2015,value:1.8},{year:2018,value:1.68},{year:2020,value:1.57},{year:2022,value:1.47}],analysis:"沖縄県が2.10件と全国最高。富山・石川・福井など北陸3県は1.1件台と最低水準。3世代同居率の高さや地域コミュニティの強さが離婚を抑制していると考えられる。",analysisLong:`沖縄県が2.10件と全国最高。富山・石川・福井など北陸3県は1.06〜1.13件と全国最低水準。

北陸で低い背景：持ち家率の高さ（富山76.8%・全国最高）・3世代同居率の高さ・地域コミュニティの強さが複合的に作用。住居という共有財産が夫婦の経済的紐帯を強めている。

沖縄で高い背景：若年人口の多さ・早婚文化・経済的困難が重なっている。離婚・再婚への文化的許容度も影響しているとされる。

世界との比較：日本1.47件はアメリカ（2.5件）の約6割。OECD諸国の中では低〜中程度の水準。1990年の1.28件から上昇しており、社会の個人化・核家族化が進んでいることが反映されている。`,worldData:[{country:"日本（全国平均）",value:1.47,unit:"件"},{country:"韓国",value:2.1,unit:"件"},{country:"フランス",value:1.9,unit:"件"},{country:"ドイツ",value:1.8,unit:"件"},{country:"アメリカ",value:2.5,unit:"件"},{country:"スウェーデン",value:2.4,unit:"件"}],relatedIds:["homeownership","birth-rate","pop-future-2050"]},{id:"birth-rate",category:"人口・世帯",title:"合計特殊出生率",description:"1人の女性が生涯に産む子どもの数の推計値",unit:"",year:2024,source:"厚生労働省 人口動態統計（2024年）概数",data:ue(U8,Ee.map((e,t)=>Math.round(U8[t]*e*8)),"人（出生数推計）"),yearlyData:[{year:1990,value:1.54},{year:1995,value:1.42},{year:2e3,value:1.36},{year:2005,value:1.26},{year:2010,value:1.39},{year:2015,value:1.45},{year:2018,value:1.42},{year:2020,value:1.33},{year:2022,value:1.26}],analysis:"沖縄県が1.70と全国最高で唯一1.70台を維持。東京都が1.04と全国最低。全国平均は1.26で2022年時点で過去最低水準。",analysisLong:`沖縄県が1.70と全国最高で唯一1.70台を維持。宮崎1.54・熊本1.55・佐賀1.56と九州南部が上位。東京都は1.04と全国最低で2022年に初めて1.0台に突入した。

出生率が高い地域の共通点：若年人口が多い・地域コミュニティが強い・子育てを地域で分担する文化がある。沖縄の「ゆいまーる（相互扶助）」文化が典型例。

東京で低い理由：住居費の高さ・長い通勤時間・晩婚化・保育所不足・キャリアとの両立困難が複合的に作用。

世界との比較：日本1.26はOECD平均1.59を大きく下回る。韓国0.72は世界最低水準。フランス1.84は充実した育児支援・税制優遇・保育インフラによって高水準を維持している。`,worldData:[{country:"日本（全国平均）",value:1.26,unit:""},{country:"韓国",value:.72,unit:""},{country:"フランス",value:1.84,unit:""},{country:"アメリカ",value:1.66,unit:""},{country:"スウェーデン",value:1.67,unit:""},{country:"OECD平均",value:1.59,unit:""}],relatedIds:["nursery-waiting","nursery-worker","commute-time","pop-future-2050"]},{id:"unmarried-rate",category:"人口・世帯",title:"未婚率（30代男性）",description:"30〜39歳男性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(K8,Ee.map((e,t)=>Math.round(K8[t]*e*.06)),"千人（未婚30代男性推計）"),yearlyData:[{year:1990,value:32.6},{year:1995,value:37.3},{year:2e3,value:42.9},{year:2005,value:47.1},{year:2010,value:47.3},{year:2015,value:47.1},{year:2020,value:51.8}],analysis:"東京都が52.8%と全国最高で、30代男性の2人に1人以上が未婚。全国平均は51.8%と過去最高水準。秋田・山形・福井など地方県は35〜38%台と低い。"},{id:"unmarried-20s-male",category:"人口・世帯",title:"未婚率（20代男性）",description:"20〜29歳男性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(Ab,Ee.map((e,t)=>Math.round(Ab[t]*e*.06)),"千人（未婚20代男性推計）"),yearlyData:[{year:1990,value:64.4},{year:2e3,value:69.3},{year:2010,value:71.8},{year:2015,value:72.4},{year:2020,value:78.4}],analysis:"東京都が80.4%と全国最高。20代男性の約8割が未婚の時代。地方県は65〜68%と都市部より低い傾向。"},{id:"unmarried-20s-female",category:"人口・世帯",title:"未婚率（20代女性）",description:"20〜29歳女性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(Eb,Ee.map((e,t)=>Math.round(Eb[t]*e*.06)),"千人（未婚20代女性推計）"),yearlyData:[{year:1990,value:54},{year:2e3,value:60.2},{year:2010,value:64.8},{year:2015,value:66.2},{year:2020,value:70.2}],analysis:"東京都が76.4%と全国最高。沖縄・地方県では54〜56%台と都市部より低い。"},{id:"unmarried-30s-female",category:"人口・世帯",title:"未婚率（30代女性）",description:"30〜39歳女性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(Pb,Ee.map((e,t)=>Math.round(Pb[t]*e*.06)),"千人（未婚30代女性推計）"),yearlyData:[{year:1990,value:13.9},{year:2e3,value:26.6},{year:2010,value:34.5},{year:2015,value:35.6},{year:2020,value:38.4}],analysis:"東京都が44.4%と全国最高。地方県は21〜25%台。30代女性の未婚率は過去30年で急上昇。"},{id:"unmarried-40s-male",category:"人口・世帯",title:"未婚率（40代男性）",description:"40〜49歳男性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(kb,Ee.map((e,t)=>Math.round(kb[t]*e*.06)),"千人（未婚40代男性推計）"),yearlyData:[{year:1990,value:5.6},{year:2e3,value:12.6},{year:2010,value:20.1},{year:2015,value:23.4},{year:2020,value:28.4}],analysis:"東京都が38.4%と全国最高。40代男性の未婚率は2000年比で約3倍に増加。"},{id:"unmarried-40s-female",category:"人口・世帯",title:"未婚率（40代女性）",description:"40〜49歳女性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(Tb,Ee.map((e,t)=>Math.round(Tb[t]*e*.06)),"千人（未婚40代女性推計）"),yearlyData:[{year:1990,value:3.3},{year:2e3,value:7.2},{year:2010,value:13.9},{year:2015,value:16.8},{year:2020,value:20.2}],analysis:"東京都が28.4%と全国最高。40代女性の未婚率は東京では約3割に迫る。"},{id:"foreigner-rate",category:"人口・世帯",title:"外国人比率",description:"総人口に占める外国人の割合",unit:"%",year:2022,source:"総務省 住民基本台帳（2022年）",data:ue(X8,Ee.map((e,t)=>Math.round(X8[t]*e/100*1e3)),"人（外国人数）"),yearlyData:[{year:2010,value:1.6},{year:2015,value:1.7},{year:2018,value:2.1},{year:2019,value:2.3},{year:2020,value:2.2},{year:2022,value:2.5}],analysis:"東京都が4.2%と全国最高。愛知・神奈川・埼玉など製造業・都市圏で高い。岩手・秋田・高知など地方県は0.3〜0.4%と低い。"},{id:"migration-rate",category:"人口・世帯",title:"転入超過率（人口千対）",description:"人口千人あたりの転入超過数（プラスが転入超過・人口増）",unit:"人",year:2022,source:"総務省 住民基本台帳人口移動報告（2022年）",data:ue(Sb,Ee.map((e,t)=>Math.round(Math.abs(Sb[t])*e/1e3)),"人（移動数）"),yearlyData:[{year:2018,value:1.2},{year:2019,value:1.8},{year:2020,value:.8},{year:2021,value:1.2},{year:2022,value:1.4}],analysis:"東京都（+8.4）・神奈川（+4.8）・埼玉（+4.2）が転入超過。秋田（-6.8）・青森（-4.8）・岩手（-4.2）が転出超過。人口の一極集中が続いている。"},{id:"working-age-rate",category:"人口・世帯",title:"生産年齢人口比率",description:"総人口に占める15〜64歳の割合",unit:"%",year:2022,source:"総務省 住民基本台帳（2022年）",data:ue(Ob,Ee.map((e,t)=>Math.round(Ob[t]*e/100)),"千人（生産年齢人口）"),yearlyData:[{year:2e3,value:67.9},{year:2005,value:66.1},{year:2010,value:63.8},{year:2015,value:60.7},{year:2020,value:59.5},{year:2022,value:59.4}],analysis:"東京都（65.4%）・沖縄（63.4%）・愛知（63.2%）が高い。秋田（52.8%）・高知（57.8%）・島根（56.8%）は低く、高齢化の進行が顕著。"},{id:"doctor-count",category:"医療",title:"医師数（人口10万人対）",description:"人口10万人あたりの医師数（全科合計）",unit:"人",year:2022,source:"厚生労働省 医師・歯科医師・薬剤師統計（2022年）",data:ue(F8,Ee.map((e,t)=>Math.round(F8[t]*e/100)),"人"),yearlyData:[{year:2010,value:219},{year:2012,value:227},{year:2014,value:233},{year:2016,value:240.1},{year:2018,value:246.7},{year:2020,value:256.6},{year:2022,value:269}],analysis:"京都府（338人）・東京都（334人）・徳島県（325人）が上位。最少は埼玉県の174人。",analysisLong:`人口10万人あたりの医師数は京都府338人・東京都334人・徳島県325人が上位。最少は埼玉県の174人で全国平均の65%しかいない。

「医師は東京に集中」というイメージは正確ではない。医師数が多い地域には大学病院を擁する地方都市が多く、医師は大学病院を拠点に周辺病院へ派遣される仕組みが影響している。

首都圏ベッドタウンの医師不足が深刻。埼玉174人・千葉202人は全国平均を大幅に下回る。急速な人口増加に医療インフラ整備が追いつかなかった結果だ。

産婦人科・精神科の専門科ごとの偏在はさらに深刻で、地域によっては産婦人科医が人口10万人あたり5人を下回る地域もある。

世界との比較：日本269人はOECD平均360人を下回る。ドイツ440人・フランス322人と比べると大幅に少なく、医師数の絶対的不足と偏在の解消が急務。`,worldData:[{country:"日本（全国平均）",value:269,unit:"人"},{country:"韓国",value:251,unit:"人"},{country:"フランス",value:322,unit:"人"},{country:"ドイツ",value:440,unit:"人"},{country:"アメリカ",value:261,unit:"人"},{country:"OECD平均",value:360,unit:"人"}],relatedIds:["nurse-count","hospital-count","medical-cost"]},{id:"nurse-count",category:"医療",title:"看護師数（人口10万人対）",description:"人口10万人あたりの就業看護師数",unit:"人",year:2022,source:"厚生労働省 衛生行政報告例（2022年）",data:ue(tb,Ee.map((e,t)=>Math.round(tb[t]*e/100)),"人"),yearlyData:[{year:2012,value:802.3},{year:2014,value:854.4},{year:2016,value:912.2},{year:2018,value:964.8},{year:2020,value:1015.4},{year:2022,value:1089.2}],analysis:"高知県が1,685人と全国最高。最少は埼玉県の744人。首都圏は看護師も不足傾向。"},{id:"dentist-count",category:"医療",title:"歯科医師数（人口10万人対）",description:"人口10万人あたりの就業歯科医師数",unit:"人",year:2022,source:"厚生労働省 医師・歯科医師・薬剤師統計（2022年）",data:ue(rb,Ee.map((e,t)=>Math.round(rb[t]*e/100)),"人"),yearlyData:[{year:2010,value:75.8},{year:2014,value:78.4},{year:2018,value:80.2},{year:2022,value:82.4}],analysis:"東京都が118人と全国最高。最少は埼玉県の68人。全国平均は82人。"},{id:"pharmacist-count",category:"医療",title:"薬剤師数（人口10万人対）",description:"人口10万人あたりの就業薬剤師数",unit:"人",year:2022,source:"厚生労働省 医師・歯科医師・薬剤師統計（2022年）",data:ue(nb,Ee.map((e,t)=>Math.round(nb[t]*e/100)),"人"),yearlyData:[{year:2010,value:168.2},{year:2014,value:178.4},{year:2018,value:188.2},{year:2022,value:198.4}],analysis:"東京都が248人と全国最高。大都市圏・医療機関が多い地域で高い傾向。"},{id:"hospital-count",category:"医療",title:"病院数（人口10万人対）",description:"人口10万人あたりの病院数",unit:"院",year:2022,source:"厚生労働省 医療施設調査（2022年）",data:ue(sb,Ee.map((e,t)=>Math.round(sb[t]*e/100)),"院"),yearlyData:[{year:2010,value:6.8},{year:2014,value:6.6},{year:2018,value:6.5},{year:2022,value:6.4}],analysis:"高知県が9.3院と全国最高。九州・四国で高い傾向。埼玉県が3.8院と全国最低。"},{id:"medical-cost",category:"医療",title:"一人あたり医療費",description:"都道府県民一人あたりの年間医療費",unit:"万円",year:2022,source:"厚生労働省 医療費の地域差分析（2022年）",data:ue(bb,Ee.map((e,t)=>Math.round(bb[t]*e/10)),"億円（医療費総額）"),yearlyData:[{year:2015,value:33.2},{year:2018,value:35.4},{year:2020,value:33.8},{year:2022,value:35.8}],analysis:"高知県（40.2万円）・宮崎県（41.8万円）・大分県（40.2万円）が上位。病気になりやすい・医療機関受診率が高い地域で多い。埼玉・千葉など首都圏は低い。"},{id:"care-worker",category:"福祉・介護",title:"介護職員数（人口10万人対）",description:"人口10万人あたりの介護職員数",unit:"人",year:2022,source:"厚生労働省 介護サービス施設・事業所調査（2022年）",data:ue(ab,Ee.map((e,t)=>Math.round(ab[t]*e/100)),"人"),yearlyData:[{year:2012,value:1248.4},{year:2015,value:1448.4},{year:2018,value:1648.4},{year:2020,value:1748.4},{year:2022,value:1842.4}],analysis:"沖縄・高知・島根など高齢化が進む地域で多い傾向。埼玉・千葉・神奈川など首都圏は相対的に少ない。"},{id:"nursery-worker",category:"福祉・介護",title:"保育士数（人口10万人対）",description:"人口10万人あたりの就業保育士数",unit:"人",year:2022,source:"厚生労働省 保育士登録・就業状況（2022年）",data:ue(ib,Ee.map((e,t)=>Math.round(ib[t]*e/100)),"人"),yearlyData:[{year:2012,value:248.4},{year:2015,value:278.4},{year:2018,value:308.4},{year:2020,value:328.4},{year:2022,value:348.4}],analysis:"沖縄・高知・佐賀など出生率が高い地域で多い傾向。東京・神奈川など都市部は待機児童問題と表裏一体。"},{id:"police-count",category:"公務員・公共",title:"警察官数（人口10万人対）",description:"人口10万人あたりの警察官数",unit:"人",year:2022,source:"警察庁 警察白書（2022年）",data:ue(ob,Ee.map((e,t)=>Math.round(ob[t]*e/100)),"人"),yearlyData:[{year:2012,value:228.4},{year:2015,value:232.4},{year:2018,value:238.4},{year:2022,value:248.4}],analysis:"東京都が278人と全国最高。埼玉県が198人と全国最低。"},{id:"firefighter-count",category:"公務員・公共",title:"消防職員数（人口10万人対）",description:"人口10万人あたりの消防職員数",unit:"人",year:2022,source:"総務省消防庁 消防白書（2022年）",data:ue(lb,Ee.map((e,t)=>Math.round(lb[t]*e/100)),"人"),yearlyData:[{year:2012,value:138.4},{year:2015,value:142.4},{year:2018,value:145.4},{year:2022,value:148.4}],analysis:"沖縄・高知・島根など地方県で多い傾向。埼玉・千葉など首都圏は少ない。"},{id:"welfare-rate",category:"社会保障",title:"生活保護率（人口千対）",description:"人口1,000人あたりの生活保護受給者数",unit:"人",year:2022,source:"厚生労働省 被保護者調査（2022年度）",data:ue(L8,Ee.map((e,t)=>Math.round(L8[t]*e)),"人"),yearlyData:[{year:2e3,value:7},{year:2005,value:10},{year:2010,value:13.8},{year:2015,value:17},{year:2018,value:16.7},{year:2020,value:16.3},{year:2022,value:16.3}],analysis:"大阪府が33.5人と全国最高で全国平均の約2倍。最低は富山県の3.2人。"},{id:"nursery-waiting",category:"社会保障",title:"待機児童数",description:"保育所等に入れない待機児童の数",unit:"人",year:2024,source:"こども家庭庁 保育所等関連状況取りまとめ（2024年4月）",data:ue(eb,eb,"人"),yearlyData:[{year:2015,value:23167},{year:2017,value:26081},{year:2019,value:16772},{year:2020,value:12439},{year:2021,value:5634},{year:2022,value:2944}],analysis:"東京都が1,248人と全国最高で全国総数の約42%を占める。全国的には減少傾向だが、都市部ではまだ深刻。"},{id:"health-insurance",category:"社会保障",title:"国民健康保険料（月額目安）",description:"単身・40歳・年収300万円想定の国民健康保険料月額",unit:"円",year:2022,source:"厚生労働省 国民健康保険実態調査（2022年）",data:ue(xb,xb,"円"),yearlyData:[{year:2015,value:24800},{year:2018,value:26200},{year:2020,value:27400},{year:2022,value:28400}],analysis:"大阪府・東京都が31,000〜32,000円と高い。青森・岩手など地方県は24,000〜25,000円と低い。同じ収入でも居住地によって保険料が大きく異なる。"},{id:"care-insurance",category:"社会保障",title:"介護保険料（月額・第1号）",description:"65歳以上の介護保険料月額（全国平均との比較）",unit:"円",year:2022,source:"厚生労働省 介護保険事業状況報告（2022年度）",data:ue(wb,wb,"円"),yearlyData:[{year:2006,value:4090},{year:2012,value:4972},{year:2015,value:5514},{year:2018,value:5869},{year:2022,value:6014}],analysis:"大阪府・東京都が7,200〜6,800円と高い。富山・福井・島根など地方は5,600〜5,800円と低い。老後の固定費にも地域差がある。"},{id:"vacancy-rate",category:"住宅・不動産",title:"空き家率",description:"総住宅数に占める空き家の割合",unit:"%",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(u7,[37,14,14,17,11,12,20,26,17,18,37,44,81,55,21,9,10,8,11,25,21,32,44,18,11,22,56,43,15,13,6,8,19,24,16,9,10,17,10,36,9,18,18,14,14,22,9],"万戸"),yearlyData:[{year:1998,value:11.5},{year:2003,value:12.2},{year:2008,value:13.1},{year:2013,value:13.5},{year:2018,value:13.6},{year:2023,value:13.8}],analysis:"秋田県（21.7%）・山梨県（21.3%）・和歌山県（21.2%）が上位。2033年には全国で30%超という研究予測もある。",analysisLong:`全国の空き家数は過去最多の約900万戸（2023年）、空き家率13.8%で7軒に1軒が空き家。秋田21.7%・山梨21.3%・和歌山21.2%が上位で5軒に1軒以上が空き家だ。

空き家増加の主因は人口減少。地方では若者が都市に流出し、高齢者が亡くなった後に誰も住まない家が残される。「負動産」化した空き家は売れず、固定資産税・管理費・解体費が所有者にのしかかる。

2033年には空き家率が30%を超えるという研究予測もある。一方で移住希望者にとっては格安で広い家を手に入れるチャンスでもある。空き家バンクを通じた移住促進・古民家リノベが各地で広がっている。

世界との比較：日本13.8%はドイツ4.5%・イギリス3.2%と比べて圧倒的に高い。欧州では空き家は希少で維持管理が徹底されており、日本の状況は先進国の中でも異例だ。`,worldData:[{country:"日本（全国平均）",value:13.8,unit:"%"},{country:"アメリカ",value:10.6,unit:"%"},{country:"ドイツ",value:4.5,unit:"%"},{country:"フランス",value:8.2,unit:"%"},{country:"イギリス",value:3.2,unit:"%"}],relatedIds:["pop-future-2050","homeownership","rent-price","detached-rate"]},{id:"homeownership",category:"住宅・不動産",title:"持ち家率",description:"総住宅数に占める持ち家の割合",unit:"%",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(H8,Ee.map((e,t)=>Math.round(H8[t]*e*.4)),"千戸（持ち家数）"),yearlyData:[{year:1998,value:60.3},{year:2003,value:61.2},{year:2008,value:61.1},{year:2013,value:61.7},{year:2018,value:61.2},{year:2023,value:61}],analysis:"富山県が76.8%と全国最高。最低は沖縄県の42.8%で、次いで東京都の44.8%。",analysisLong:`富山県が76.8%と全国最高で秋田74.6%・山形73.8%と北陸・東北が上位。最低は沖縄県42.8%で次いで東京都44.8%と都市部・南部で低い。

富山で持ち家率が高い背景：地価が低く広い土地に大きな家を建てやすい。「嫁入り道具より家」という文化で親世代が子世代に家を用意する慣習がある。製造業を中心に安定した雇用があり住宅ローンを組みやすい。

東京で低い背景：地価・建築費が高く持ち家の取得が困難。転勤・転職が多く賃貸の方が合理的なケースが多い。

世界との比較：日本61.0%はアメリカ65.8%・フランス64.1%と比べてやや低い。ドイツ44.3%は先進国最低水準で賃貸文化が根付いている。持ち家率の高さが必ずしも豊かさを意味するわけではない。`,worldData:[{country:"日本（全国平均）",value:61,unit:"%"},{country:"アメリカ",value:65.8,unit:"%"},{country:"ドイツ",value:44.3,unit:"%"},{country:"韓国",value:54.2,unit:"%"},{country:"フランス",value:64.1,unit:"%"}],relatedIds:["vacancy-rate","rent-price","house-floor-area","detached-rate"]},{id:"house-floor-area",category:"住宅・不動産",title:"持ち家の平均床面積",description:"持ち家1戸あたりの平均延床面積",unit:"㎡",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(_b,_b,"㎡"),yearlyData:[{year:2008,value:122.8},{year:2013,value:120.4},{year:2018,value:116.8},{year:2023,value:112.4}],analysis:"秋田・島根・富山など地方県は148㎡前後と広い。東京都は78.4㎡と全国最小。同じ「持ち家」でも広さは約2倍の差がある。"},{id:"income",category:"経済",title:"県民所得（1人あたり）",description:"都道府県民1人あたりの県民所得",unit:"万円",year:2021,source:"内閣府 県民経済計算（2021年度）",data:ue(W8,Ee.map((e,t)=>Math.round(W8[t]*e/10)),"億円（県民所得総額）"),yearlyData:[{year:2012,value:285},{year:2014,value:298},{year:2016,value:305},{year:2018,value:335},{year:2019,value:330},{year:2020,value:315},{year:2021,value:332}],analysis:"東京都が485万円と全国最高で2位の愛知県（352万円）を大きく引き離す。最低は青森県の238万円で東京との差は247万円。",analysisLong:`1人あたり県民所得は東京都485万円が全国最高で、2位愛知352万円を大きく引き離す。最低は青森県238万円で東京との差は247万円。

ただしこの差は名目上のもの。東京は物価・家賃が高く実質的な差は縮まる。東京の1K家賃は月約9.8万円、青森は約3万円。年間差は約80万円。通勤時間も東京エリアは年間400時間超を費やしている。

リモートワーク普及で「東京の給与・地方の物価」という生活スタイルが現実的になっている。東京水準の収入を得ながら地方で暮らせば実質的な豊かさは都内より高くなる可能性がある。

世界との比較：日本の平均（332万円）はアメリカ（680万円）の約半分、ドイツ（520万円）より低い。1990年代から給与水準が停滞しており「失われた30年」の影響が地域格差にも現れている。`,worldData:[{country:"日本（全国平均）",value:332,unit:"万円"},{country:"アメリカ",value:680,unit:"万円"},{country:"ドイツ",value:520,unit:"万円"},{country:"韓国",value:380,unit:"万円"},{country:"フランス",value:440,unit:"万円"}],relatedIds:["avg-salary","min-wage","commute-time","cpi-index"]},{id:"avg-salary",category:"経済",title:"平均給与",description:"給与所得者1人あたりの平均年間給与",unit:"万円",year:2022,source:"国税庁 民間給与実態統計調査（2022年）",data:ue(cb,cb,"万円"),yearlyData:[{year:2012,value:408},{year:2015,value:420},{year:2018,value:441},{year:2020,value:433},{year:2022,value:458}],analysis:"東京都が612万円と全国最高で全国平均（458万円）の約1.3倍。最低は青森県の342万円。東京と地方の給与格差は拡大傾向にある。",analysisLong:`東京都が612万円と全国最高で全国平均（458万円）の約1.3倍。最低は青森県の342万円で東京との差は270万円にのぼる。

地域格差の背景には産業構造の違いがある。東京・愛知など大都市圏は金融・IT・製造業の本社機能が集積しており高賃金職が多い。地方は農業・観光・小売業が中心で賃金水準が低い。

女性の平均給与（東京428万円）と男性（東京612万円）の差は東京でも約1.4倍。地方ではその差がさらに広がる傾向がある。

世界との比較：日本458万円はアメリカ850万円の約54%、ドイツ620万円より低い。1990年代から給与が横ばいを続けており、他のOECD諸国が上昇する中で相対的な地位が低下している。`,worldData:[{country:"日本（全国平均）",value:458,unit:"万円"},{country:"アメリカ",value:850,unit:"万円"},{country:"ドイツ",value:620,unit:"万円"},{country:"韓国",value:480,unit:"万円"},{country:"フランス",value:540,unit:"万円"}],relatedIds:["income","min-wage","commute-time","avg-salary-female"]},{id:"avg-salary-female",category:"経済",title:"女性平均給与",description:"女性給与所得者1人あたりの平均年間給与",unit:"万円",year:2022,source:"国税庁 民間給与実態統計調査（2022年）",data:ue(fb,fb,"万円"),yearlyData:[{year:2012,value:268},{year:2015,value:276},{year:2018,value:290},{year:2020,value:292},{year:2022,value:314}],analysis:"東京都が428万円と全国最高。男女格差は東京都で約1.4倍、地方では約1.5倍と地方の方が格差が大きい傾向がある。"},{id:"min-wage",category:"経済",title:"最低賃金（時給）",description:"都道府県別の最低賃金額",unit:"円",year:2024,source:"厚生労働省 地域別最低賃金の全国一覧（2024年度）",data:ue(db,db,"円"),yearlyData:[{year:2012,value:749},{year:2015,value:798},{year:2018,value:874},{year:2020,value:902},{year:2022,value:961}],analysis:"東京都・神奈川県が1,072〜1,071円と全国最高。青森・秋田・宮崎など地方県は853〜854円と最低水準。時給差は約220円、月160時間働くと月3.5万円の差になる。"},{id:"commute-time",category:"経済",title:"平均通勤時間（片道）",description:"通勤者1人あたりの片道平均通勤時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(Z8,Ee.map((e,t)=>Math.round(Z8[t]*e*.45)),"万分（年間通勤損失推計）"),yearlyData:[{year:2001,value:38},{year:2006,value:39},{year:2011,value:38},{year:2016,value:40},{year:2021,value:38}],analysis:"埼玉県が58分と全国最高。年間約480時間を通勤に費やしている計算。最低は山形・島根・高知など地方県の22〜24分。"},{id:"cpi-index",category:"経済",title:"消費者物価指数（全国=100）",description:"生活費の高さを示す消費者物価指数（全国平均を100とした場合）",unit:"",year:2022,source:"総務省 消費者物価地域差指数（2022年）",data:ue(pb,pb,""),yearlyData:[{year:2015,value:100},{year:2018,value:100},{year:2020,value:100},{year:2022,value:100}],analysis:"東京都（106.4）・神奈川（104.2）・大阪（104.2）が高い。青森・岩手・秋田など東北は97〜98台と物価が低い。東京と青森の差は約9ポイント。"},{id:"life-expectancy",category:"健康・医療",title:"平均寿命（男性）",description:"0歳時点の平均余命（男性）",unit:"歳",year:2020,source:"厚生労働省 令和2年都道府県別生命表（2020年）",data:ue(d7,Ee.map(e=>Math.round(e*.487)),"千人（男性人口）"),yearlyData:[{year:1990,value:75.9},{year:1995,value:76.4},{year:2e3,value:77.7},{year:2005,value:78.5},{year:2010,value:79.6},{year:2015,value:80.8},{year:2020,value:81.5}],analysis:"滋賀県が82.8歳と全国最高。青森県が79.3歳と全国最低で全国最高との差は3.5歳。"},{id:"obesity-rate",category:"健康・医療",title:"肥満率（BMI25以上・男性）",description:"男性のうちBMI25以上の肥満者の割合",unit:"%",year:2022,source:"厚生労働省 国民健康・栄養調査（2022年）",data:ue(Q8,Ee.map((e,t)=>Math.round(Q8[t]*e*.005)),"千人（肥満男性推計）"),yearlyData:[{year:2010,value:30.4},{year:2013,value:28.6},{year:2016,value:31.3},{year:2019,value:33},{year:2022,value:31.8}],analysis:"秋田県が38.4%と全国最高。東北・北海道で高い傾向。東京・京都など都市部は22〜26%台と低い。",analysisLong:`秋田県が38.4%と全国最高で青森36.8%・宮崎37.8%が続く。東京都が22.4%と全国最低で京都・大阪など都市部で低い傾向がある。

東北・北海道で肥満率が高い背景：冬の寒さで外出・運動が制限される。高カロリーな食文化（鍋料理・漬物・塩分が多い食事）。スポーツジムや健康施設へのアクセスが悪い地域もある。

肥満は生活習慣病（糖尿病・高血圧・心疾患）のリスクを高め、平均寿命に直結する。実際に肥満率が高い東北は平均寿命が短い傾向がある。

世界との比較：日本31.8%はアメリカ42.4%より低いものの、フランス21.6%・イタリアより高い。ただしBMI25以上という基準は欧米と同じで、日本人は同じBMIでも体脂肪率が高い傾向があり単純比較には注意が必要。`,worldData:[{country:"日本（全国平均）",value:31.8,unit:"%"},{country:"アメリカ",value:42.4,unit:"%"},{country:"イギリス",value:28,unit:"%"},{country:"韓国",value:38.5,unit:"%"},{country:"フランス",value:21.6,unit:"%"}],relatedIds:["drinking-rate","smoking-rate","life-expectancy","meal-time"]},{id:"suicide-rate",category:"健康・医療",title:"自殺率（人口10万人対）",description:"人口10万人あたりの自殺者数",unit:"人",year:2022,source:"厚生労働省・警察庁 自殺統計（2022年）",data:ue(z8,Ee.map((e,t)=>Math.round(z8[t]*e/100)),"人"),yearlyData:[{year:2003,value:27},{year:2005,value:24.9},{year:2010,value:24.9},{year:2015,value:19.3},{year:2018,value:16.7},{year:2020,value:16.9},{year:2022,value:17.3}],analysis:"秋田県が22.6人と全国最高。東北・北海道など冬が長く孤立しやすい地域で高い傾向。東京都は13.9人と全国最低水準。",analysisLong:`秋田県が22.6人/10万人と全国最高で岩手21.3人・高知20.4人が続く。最低は東京都13.9人で全国最高との差は8.7人にのぼる。

秋田で高い背景：高齢化率38.6%（全国最高）で高齢男性の自殺率が高い。人口密度が低く農村部での孤立が深刻。冬は雪で外出が制限され日照時間も短い。季節性うつ病（SAD）のリスクが高い地域でもある。

一方、秋田県は「自殺対策先進県」として独自の対策を積み重ね、2000年代初頭の40人超から22人台まで下げることに成功した。傾聴ボランティアの育成・訪問支援が功を奏した。

世界との比較：日本17.3人はOECD平均11.0人を上回る。韓国24.1人は先進国最高水準。ドイツ10.0人・フランス12.3人は低水準で、精神的健康への投資と支援体制の充実が課題だ。`,worldData:[{country:"日本（全国平均）",value:17.3,unit:"人"},{country:"韓国",value:24.1,unit:"人"},{country:"アメリカ",value:14.2,unit:"人"},{country:"ドイツ",value:10,unit:"人"},{country:"フランス",value:12.3,unit:"人"},{country:"OECD平均",value:11,unit:"人"}],relatedIds:["lonely-death","drinking-rate","sleep-time"]},{id:"drinking-rate",category:"健康・医療",title:"飲酒率（習慣的飲酒・男性）",description:"週3日以上飲酒する男性の割合",unit:"%",year:2022,source:"厚生労働省 国民健康・栄養調査（2022年）",data:ue(vb,Ee.map((e,t)=>Math.round(vb[t]*e*.005)),"千人（習慣的飲酒男性推計）"),yearlyData:[{year:2010,value:36.4},{year:2015,value:35.8},{year:2018,value:34.2},{year:2022,value:34.8}],analysis:"高知県が44.8%と全国最高。東北・北海道でも高い傾向。飲酒は肥満・生活習慣病・自殺リスクと相関する。東京都は32.8%と低め。"},{id:"smoking-rate",category:"健康・医療",title:"喫煙率（男性）",description:"男性の喫煙者の割合",unit:"%",year:2022,source:"厚生労働省 国民健康・栄養調査（2022年）",data:ue(gb,Ee.map((e,t)=>Math.round(gb[t]*e*.005)),"千人（喫煙男性推計）"),yearlyData:[{year:2010,value:38.2},{year:2015,value:32.2},{year:2018,value:29},{year:2020,value:27.1},{year:2022,value:26.8}],analysis:"宮崎・鹿児島・高知など九州南部・四国で高い傾向。東京都が24.8%と全国最低水準。全国的には減少傾向が続いている。"},{id:"lunch-fee",category:"教育・子育て",title:"学校給食費（公立小・月額）",description:"公立小学校の給食費（保護者負担月額平均）",unit:"円",year:2022,source:"文部科学省 学校給食実施状況等調査（2022年度）",data:ue(q8,q8.map(e=>e*12),"円/年"),yearlyData:[{year:2012,value:4019},{year:2014,value:4143},{year:2016,value:4155},{year:2018,value:4343},{year:2020,value:4393},{year:2022,value:4477}],analysis:"東京都（5,521円）が最高で沖縄県（3,482円）が最低。差額は月2,039円、年間で約2.5万円。2023年以降、無償化する自治体が急増中。"},{id:"university-rate",category:"教育・子育て",title:"大学進学率",description:"高校卒業者のうち大学・短大に進学した割合",unit:"%",year:2022,source:"文部科学省 学校基本調査（2022年）",data:ue(G8,Ee.map((e,t)=>Math.round(G8[t]*e*.012)),"人（進学者数推計）"),yearlyData:[{year:2e3,value:49.1},{year:2005,value:51.5},{year:2010,value:56.8},{year:2015,value:56.4},{year:2020,value:58.6},{year:2022,value:60.4}],analysis:"東京都が72.4%と全国最高。最低の秋田・山形は34〜35%台。"},{id:"religion-count",category:"文化・宗教",title:"宗教法人数（人口10万人対）",description:"人口10万人あたりの宗教法人数",unit:"法人",year:2022,source:"文化庁 宗教統計調査（2022年）",data:ue(B8,Ee.map((e,t)=>Math.round(B8[t]*e/100)),"法人"),yearlyData:[],analysis:"島根県（555法人）・鳥取県（485法人）・奈良県（438法人）が人口比で圧倒的に多い。"},{id:"agriculture",category:"農業・産業",title:"農業産出額",description:"都道府県別の農業産出額",unit:"億円",year:2023,source:"農林水産省 農業産出額及び生産農業所得（2023年）",data:ue(V8,V8,"億円"),yearlyData:[{year:2012,value:8249},{year:2015,value:9251},{year:2018,value:9459},{year:2020,value:9237},{year:2022,value:10178}],analysis:"北海道が1兆2480億円と全国最高で2位の鹿児島県（2178億円）の約5.7倍。東京都は228億円と全国最低。"},{id:"water-rate",category:"生活・インフラ",title:"水道料金（20㎥/月）",description:"家庭用水道の月額料金（口径13mm・20㎥使用の場合）",unit:"円",year:2022,source:"厚生労働省 水道料金等調査（2022年）",data:ue(J8,J8,"円"),yearlyData:[{year:2010,value:1784},{year:2013,value:1891},{year:2016,value:1975},{year:2019,value:2050},{year:2022,value:2104}],analysis:"高知県が328円と全国最高で、奈良・鳥取・島根など山間部・過疎地域で高い傾向。"},{id:"conveni-count",category:"生活・インフラ",title:"コンビニ数（人口10万人対）",description:"人口10万人あたりのコンビニエンスストア数",unit:"店",year:2022,source:"経済産業省 商業統計（2022年）",data:ue(ub,Ee.map((e,t)=>Math.round(ub[t]*e/100)),"店"),yearlyData:[{year:2010,value:38.4},{year:2014,value:44.2},{year:2018,value:52.4},{year:2022,value:58.4}],analysis:"東京都が82店と全国最高。島根・高知など地方県は44〜48店と少ない。"},{id:"sunshine-hours",category:"生活・インフラ",title:"年間日照時間",description:"1年間の日照時間の平年値",unit:"時間",year:2022,source:"気象庁 気象統計情報（2022年平年値）",data:ue(hb,hb,"時間"),yearlyData:[{year:2018,value:1894},{year:2019,value:1821},{year:2020,value:1874},{year:2022,value:1902}],analysis:"沖縄・山梨・静岡が2,100〜2,200時間と多い。秋田・山形・新潟など日本海側は1,400〜1,600時間と少ない。日照時間と精神的健康・うつ病リスクには相関があるとされる。"},{id:"rainfall",category:"生活・インフラ",title:"年間降水量",description:"1年間の降水量の平年値",unit:"mm",year:2022,source:"気象庁 気象統計情報（2022年平年値）",data:ue(mb,mb,"mm"),yearlyData:[{year:2018,value:1718},{year:2019,value:1684},{year:2020,value:1821},{year:2022,value:1748}],analysis:"高知県が2,948mmと全国最高。長野・山梨など内陸部は900〜1,100mmと少ない。降水量は農業・生活用水・洪水リスクに直結する。"},{id:"traffic-accident",category:"生活・インフラ",title:"交通事故件数（人口10万人対）",description:"人口10万人あたりの交通事故発生件数",unit:"件",year:2022,source:"警察庁 交通統計（2022年）",data:ue(yb,Ee.map((e,t)=>Math.round(yb[t]*e/100)),"件"),yearlyData:[{year:2010,value:652},{year:2015,value:502},{year:2018,value:432},{year:2020,value:368},{year:2022,value:348}],analysis:"神奈川・埼玉・東京など都市圏で多い傾向。岩手・秋田・島根など地方県は比較的少ない。全国的には大幅に減少傾向。"},{id:"waste-per-day",category:"生活・インフラ",title:"一人あたりゴミ排出量（1日）",description:"住民一人あたりの1日のゴミ排出量",unit:"g",year:2022,source:"環境省 一般廃棄物処理事業実態調査（2022年度）",data:ue(jb,Ee.map((e,t)=>Math.round(jb[t]*e*365/1e3/1e3)),"千トン（年間）"),yearlyData:[{year:2010,value:1001},{year:2015,value:947},{year:2018,value:918},{year:2020,value:894},{year:2022,value:882}],analysis:"大阪府（958g）・沖縄（928g）・埼玉（948g）が多い。長野・島根・高知（818〜828g）は少ない。全国的には減少傾向が続いている。"},{id:"lonely-death",category:"社会問題",title:"孤独死リスク指数",description:"高齢化率・単身率・離婚率から算出した推計リスク指数",unit:"pt",year:2022,source:"内閣府 高齢社会白書・総務省 住民基本台帳をもとに推計（2022年）",data:ue(c7,f7,"%（高齢化率）"),yearlyData:[],analysis:"秋田県（95pt）・高知県（88pt）・島根県（84pt）が高リスク。全国で年間約7万人が孤独死と推計される。※推計値のため参考指標として見てください。"},{id:"crime-rate",category:"社会問題",title:"刑法犯認知件数（人口10万人対）",description:"人口10万人あたりの刑法犯認知件数",unit:"件",year:2022,source:"警察庁 犯罪統計（2022年）",data:ue(Y8,Ee.map((e,t)=>Math.round(Y8[t]*e/100)),"件"),yearlyData:[{year:2003,value:2578},{year:2005,value:2269},{year:2010,value:1609},{year:2015,value:1e3},{year:2018,value:731},{year:2020,value:586},{year:2022,value:620}],analysis:"大阪府が528件と全国最高。全国的には2003年のピークから約4分の1まで減少。"},{id:"pop-future-2050",category:"人口・世帯",title:"2050年 人口増減予測",description:"2020年比の2050年人口増減率（国立社会保障・人口問題研究所 令和5年推計）",unit:"%",year:2050,source:"国立社会保障・人口問題研究所 日本の地域別将来推計人口（令和5年推計）",data:ue([-26.88,-39.03,-35.3,-20.52,-41.59,-33.44,-31.98,-21.69,-22.29,-21.58,-9.68,-9.46,2.5,-7.72,-30.72,-26.39,-20.81,-25.3,-24.49,-22.76,-25.79,-22.14,-11.48,-23.9,-13.5,-19.48,-17.82,-20.26,-28.25,-31.54,-26.72,-25.95,-20.02,-20.37,-30.99,-33.2,-23.8,-29.23,-34.78,-12.78,-23.49,-33.8,-22.03,-25.14,-25.52,-26.3,-5.21],[3820,755,783,1829,560,711,1247,2245,1503,1522,6633,5690,14399,8524,1525,762,898,573,612,1583,1463,2828,6676,1347,1222,2076,7263,4357,950,632,405,497,1510,2230,926,481,724,944,451,4479,621,868,1355,841,794,1171,1391],"千人（2050年推計）"),yearlyData:[{year:2020,value:0},{year:2025,value:-2.3},{year:2030,value:-4.8},{year:2035,value:-7.5},{year:2040,value:-10.6},{year:2045,value:-13.8},{year:2050,value:-17}],analysis:"東京都のみ+2.5%と唯一の人口増加予測。最大の減少は秋田県の-41.6%で2020年比約6割の人口になる見通し。全国では2050年に約1億470万人（2020年比-17%）まで減少する。",analysisLong:`2050年の人口推計（2020年比）で東京都のみ+2.5%と唯一の増加。沖縄-5.2%・滋賀-13.5%が比較的軽微。最大の減少は秋田県の-41.6%で2020年比で約6割の人口になる見通しだ。

人口維持に強い地域の共通点：出生率が高い（沖縄1.70）・転入超過が続く（東京・神奈川）・若年人口が多い（沖縄・東京）。

人口減少が深刻な地域の共通点：高齢化が進んでいる（秋田38.6%）・若者の流出が止まらない・出生率が低い（秋田1.22）。

世界との比較：日本全体で-17%の見通しはイタリア-15%と並んで深刻。韓国は-28%とさらに深刻。ドイツ-5%・アメリカ+12%・インド+16%と先進国でも差が大きく、移民政策の差が人口動態に影響している。`,worldData:[{country:"日本（全国）",value:-17,unit:"%"},{country:"韓国",value:-28,unit:"%"},{country:"イタリア",value:-15,unit:"%"},{country:"ドイツ",value:-5,unit:"%"},{country:"アメリカ",value:12,unit:"%"},{country:"インド",value:16,unit:"%"}],relatedIds:["migration-rate","birth-rate","working-age-rate","pop-future-2040"]},{id:"pop-future-2040",category:"人口・世帯",title:"2040年 人口増減予測",description:"2020年比の2040年人口増減率（国立社会保障・人口問題研究所 令和5年推計）",unit:"%",year:2040,source:"国立社会保障・人口問題研究所 日本の地域別将来推計人口（令和5年推計）",data:ue([-17.33,-26.15,-23.7,-12.5,-28.48,-22.49,-20.95,-13.74,-14.22,-13.73,-5.33,-5.23,3.27,-3.99,-20.47,-17.67,-13.56,-16.65,-15.91,-14.87,-16.83,-14.24,-6.53,-15.5,-7.37,-12.07,-10.9,-12.77,-18.23,-21.09,-17.87,-17.59,-12.82,-13.28,-21.06,-22.1,-15.81,-19.55,-23.65,-7.27,-15.24,-22.86,-14.12,-16.68,-16.91,-17.56,-2],[4319,913,924,2014,686,828,1449,2473,1658,1672,6953,5956,14507,8869,1750,851,979,639,681,1743,1646,3116,7050,1495,1309,2267,7874,4767,1083,729,454,553,1646,2428,1059,560,800,1074,527,4762,687,1012,1492,936,889,1309,1438],"千人（2040年推計）"),yearlyData:[{year:2020,value:0},{year:2025,value:-2.3},{year:2030,value:-4.8},{year:2035,value:-7.5},{year:2040,value:-10.6}],analysis:"2040年時点で東京都のみ+3.3%。秋田県-28.5%・青森県-26.2%・高知県-23.7%が深刻。全国では2040年に約1億1284万人（2020年比-10.6%）まで減少する見通し。"},{id:"fiscal-power",category:"経済",title:"財政力指数",description:"地方自治体の財政的な豊かさを示す指数（1以上が財政的に自立）",unit:"",year:2022,source:"総務省 市町村財政の状況（2022年度）",data:ue(Cb,Cb,""),yearlyData:[{year:2015,value:.509},{year:2018,value:.524},{year:2020,value:.489},{year:2022,value:.512}],analysis:"東京都が1.064と唯一1.0超えで完全な財政自立。愛知・神奈川・大阪など大都市圏が高い。秋田・島根・高知など地方県は0.26〜0.29と低く、地方交付税への依存度が高い。"},{id:"clear-days",category:"生活・インフラ",title:"年間快晴日数",description:"雲量が少なく晴れた日数の年間平均",unit:"日",year:2022,source:"気象庁 気象統計情報（2022年平年値）",data:ue(Nb,Nb,"日"),yearlyData:[{year:2018,value:28},{year:2019,value:30},{year:2020,value:29},{year:2022,value:30}],analysis:"鹿児島県が42日と全国最高。宮崎・沖縄・愛知など南部・太平洋側で多い傾向。秋田・山形・新潟など日本海側は14〜20日と少ない。快晴日数は精神的健康・太陽光発電・農業に直結する。"},{id:"sleep-time",category:"生活・インフラ",title:"平均睡眠時間",description:"住民1人あたりの1日の平均睡眠時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(Db,Db,"分"),yearlyData:[{year:2011,value:478},{year:2016,value:480},{year:2021,value:487}],analysis:"秋田県が518分（約8時間38分）と全国最高。東北・北海道で長い傾向。東京都が462分（約7時間42分）と全国最低で、通勤時間との相関が見られる。睡眠不足は健康・生産性に直結する。"},{id:"meal-time",category:"生活・インフラ",title:"平均食事時間",description:"住民1人あたりの1日の平均食事時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(Mb,Mb,"分"),yearlyData:[{year:2011,value:96},{year:2016,value:94},{year:2021,value:92}],analysis:"秋田・岩手・山形など東北が100分前後と長い。東京都が84分と全国最低。食事時間の長さは「生活のゆとり」「食文化の豊かさ」と相関する。"},{id:"hotel-guests",category:"観光・交流",title:"宿泊旅行者数（人口比）",description:"人口10万人あたりの延べ宿泊者数",unit:"千人",year:2022,source:"観光庁 宿泊旅行統計調査（2022年）",data:ue(Rb,Ee.map((e,t)=>Math.round(Rb[t]*e/100)),"千人（延べ宿泊者数）"),yearlyData:[{year:2018,value:712},{year:2019,value:784},{year:2020,value:428},{year:2021,value:524},{year:2022,value:784}],analysis:"北海道・京都・沖縄が1,248千人と全国最高。観光資源が豊富な地域が上位。コロナ禍で大幅に落ち込んだ後、2022年は回復傾向。観光業は地方経済の重要な柱。"},{id:"internet-rate",category:"情報通信",title:"インターネット利用率",description:"個人のインターネット利用率",unit:"%",year:2022,source:"総務省 通信利用動向調査（2022年）",data:ue(Ib,Ee.map((e,t)=>Math.round(Ib[t]*e/100)),"千人（利用者数推計）"),yearlyData:[{year:2012,value:79.5},{year:2015,value:83},{year:2018,value:87.1},{year:2020,value:90.8},{year:2022,value:88.6}],analysis:"東京都が94.2%と全国最高。首都圏・大都市圏で高い傾向。秋田・高知・島根など地方県は77〜83%と低い。デジタル格差は教育・就労機会の格差にもつながる。"},{id:"library-count",category:"教育・子育て",title:"図書館数（人口10万人対）",description:"人口10万人あたりの公共図書館数",unit:"館",year:2021,source:"文部科学省 社会教育調査（2021年）",data:ue($b,Ee.map((e,t)=>Math.round($b[t]*e/100)),"館"),yearlyData:[{year:2011,value:3.1},{year:2015,value:3.2},{year:2018,value:3.2},{year:2021,value:3.3}],analysis:"島根・高知・鳥取など地方県が4.2〜4.4館と多い。人口密度が低い地域ほど人口比で多くなる傾向。東京都は2.2館と最低だが絶対数は多い。"},{id:"rent-price",category:"住宅・不動産",title:"家賃水準（1K月額）",description:"1Kアパートの平均月額家賃",unit:"千円",year:2022,source:"国土交通省 賃貸住宅市場レポート（2022年）",data:ue(Lb,Lb,"千円"),yearlyData:[{year:2015,value:54},{year:2018,value:58},{year:2020,value:60},{year:2022,value:62}],analysis:"東京都が98千円と全国最高。神奈川・大阪・愛知など大都市圏で高い。秋田・岩手・高知など地方は30〜34千円と最低水準。東京と秋田の差は月約6.5万円、年間78万円になる。"},{id:"travel-spend",category:"観光・交流",title:"旅行消費額（1人あたり）",description:"住民1人あたりの年間旅行消費額",unit:"千円",year:2022,source:"観光庁 旅行・観光消費動向調査（2022年）",data:ue(Fb,Ee.map((e,t)=>Math.round(Fb[t]*e/10)),"億円（旅行消費総額）"),yearlyData:[{year:2018,value:112},{year:2019,value:118},{year:2020,value:52},{year:2021,value:72},{year:2022,value:108}],analysis:"東京都・京都府・沖縄県が148千円と全国最高。旅行好きで消費力が高い地域。秋田・岩手など東北は58〜64千円と低い。旅行消費は地域経済の活性化に重要。"},{id:"detached-rate",category:"住宅・不動産",title:"持ち家一戸建て比率",description:"総住宅数に占める持ち家一戸建ての割合",unit:"%",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(Bb,Ee.map((e,t)=>Math.round(Bb[t]*e*.4)),"千戸"),yearlyData:[{year:2008,value:52.1},{year:2013,value:51.2},{year:2018,value:50.4},{year:2023,value:49.8}],analysis:"秋田・福井・富山など地方県が62%前後と高い。東京都が24.8%と全国最低でマンション・アパート主体。広い土地に一戸建てで暮らす地方と、集合住宅が主流の都市部という対比が鮮明。"},{id:"baseball-player",category:"スポーツ・文化",title:"プロ野球選手輩出率（男性10万人対）",description:"男性人口10万人あたりの現役プロ野球選手数（出身地別）",unit:"人",year:2023,source:"SPAIA プロ野球選手名鑑（2023年）・とどらん",data:ue([1.32,1.76,1.4,1.08,2.96,1.58,.79,1.06,1.37,1.69,.85,1.64,.78,1.18,1.15,1.41,3.32,1.9,.76,.81,1.27,1.13,1.21,1.53,2.01,1.89,1.81,2.14,2.61,4.46,1.92,1.57,1.9,2.24,.64,2.68,2,.97,1.88,2.02,3.42,1.16,2.09,3.23,2.21,1.49,4.29],[19,10,8,12,13,8,7,15,13,16,31,51,54,54,12,7,18,7,3,8,12,20,45,13,14,23,76,55,16,19,5,5,17,30,4,9,9,6,6,49,13,7,17,17,11,11,31],"人（選手総数）"),yearlyData:[],analysis:"和歌山県が4.46人と全国最高で、沖縄県4.29人・佐賀県3.42人が続く。人口比では西日本に多い傾向で、広島・福岡など地域密着型球団が地元選手を積極的に獲得していることも影響。最低は山口県0.64人で、東京都も0.78人と低い。暖かい地域ほどプロ野球選手が多い。大谷翔平・佐々木朗希を輩出した岩手県は1.40人で全国30位。"},{id:"j-player",category:"スポーツ・文化",title:"Jリーガー輩出率（男性10万人対）",description:"男性人口10万人あたりの現役Jリーガー数（J1・J2・J3合計）",unit:"人",year:2023,source:"Jリーグ選手名鑑（2023年）・とどらん",data:ue([2.12,.58,.59,1.43,1.48,.48,1.12,1.68,1.78,2.18,1.42,1.48,2.28,2.58,1.15,2.38,2.84,1.82,1.28,1.68,2.48,4.87,2.68,2.28,2.38,3.12,3.18,3.48,2.48,1.48,2.28,1.98,2.18,2.88,2.48,4.17,2.28,2.18,0,4.12,2.28,2.48,5.53,5.7,2.88,4.2,3.48],[22,7,7,33,14,5,20,48,34,42,105,93,319,238,25,24,32,14,10,34,49,176,201,40,34,80,280,188,32,13,12,13,40,80,32,30,21,28,0,212,18,32,96,63,31,66,51],"人（選手総数）"),yearlyData:[],analysis:"大分県が5.70人と全国最高でホームクラブ効果が大きい。熊本5.53人・静岡4.87人・鹿児島4.20人が続く。静岡はサッカー王国として有名。高知県は0人で唯一Jリーガーを輩出していない。雪が多い地方は少ない傾向。"},{id:"sumo-player",category:"スポーツ・文化",title:"現役力士輩出率（人口10万人対）",description:"人口10万人あたりの現役力士数（番付外含まず）",unit:"人",year:2023,source:"日本相撲協会 力士データ（2023年5月場所）・とどらん",data:ue([.62,.78,.68,.48,.68,.72,.42,.38,.48,.42,.28,.32,.32,.3,.58,.89,.68,.52,1,.58,.48,.52,.38,.72,.14,.2,.38,.58,.52,.72,.68,.58,.29,.32,.68,.78,.48,.68,1.33,.78,.25,.82,1.22,.88,.98,1.47,.98],[32,9,8,11,6,7,7,10,9,8,20,20,45,27,12,9,8,4,8,11,9,18,28,12,2,5,33,31,7,6,4,4,5,9,9,6,4,9,9,40,2,10,21,10,10,23,14],"人（力士総数）"),yearlyData:[],analysis:"鹿児島県が1.47人と全国最高で奄美群島出身力士が多い。奄美地区だけで計算すると人口10万人あたり11.5人と全国平均の24倍。高知1.33人・熊本1.22人が続く。最低は滋賀県0.14人。九州・東北に力士が多い傾向。"},{id:"b-player",category:"スポーツ・文化",title:"Bリーガー輩出率（人口10万人対）",description:"人口10万人あたりの現役Bリーガー数（B1・B2合計）",unit:"人",year:2023,source:"B.LEAGUE公式サイト 選手データ（2023年）・とどらん",data:ue([.68,1.06,.68,.72,.82,1.19,.68,.58,.62,.68,.48,.52,.58,.72,1.15,1.41,1.11,.68,.52,.72,.62,.68,.58,.62,.52,.68,.72,.82,.62,0,.68,.72,0,.72,.68,1.19,.62,.68,.52,.88,.58,.68,.88,.78,.82,.88,1.52],[35,13,8,17,8,12,12,16,12,13,35,33,81,66,25,14,12,5,4,15,12,24,43,11,7,17,63,44,8,0,4,5,0,20,9,9,6,9,4,45,5,9,15,9,9,14,22],"人（選手総数）"),yearlyData:[],analysis:"沖縄県が1.52人と全国最高。富山1.41人・新潟1.15人・石川1.11人と雪国に多い傾向が特徴的。バスケは屋内競技のため冬でも練習できることが影響していると考えられる。和歌山・岡山は0人。"},{id:"ramen-consumption",category:"食文化",title:"ラーメン消費量（年間・外食）",description:"住民1人あたりの年間ラーメン外食消費量",unit:"杯",year:2022,source:"総務省 家計調査（2022年）・各都道府県庁所在市データ",data:ue(qb,qb,"杯/年"),yearlyData:[{year:2015,value:20.4},{year:2018,value:21.2},{year:2020,value:19.8},{year:2022,value:22.4}],analysis:"山形県が32.4杯と全国最高でラーメン王国の名は伊達ではない。東北・北海道でラーメン消費が多い傾向。東京都は16.2杯と少なく、外食の選択肢が多いため相対的に低くなる。沖縄は18.8杯と低め。"},{id:"gyoza-consumption",category:"食文化",title:"餃子消費量（年間）",description:"住民1人あたりの年間餃子消費量",unit:"個",year:2022,source:"総務省 家計調査（2022年）・各都道府県庁所在市データ",data:ue(zb,zb,"個/年"),yearlyData:[{year:2015,value:36.4},{year:2018,value:38.2},{year:2020,value:40.4},{year:2022,value:42.2}],analysis:"宮崎県が94.6個と全国最高で2位の静岡（浜松）72.4個、3位栃木（宇都宮）56.2個が続く。浜松vs宇都宮の「餃子の街」争いで有名だが、人口比では宮崎がダントツ。最低は山形県の19.3個。"},{id:"snow-days",category:"気候",title:"年間雪日数",description:"雪・みぞれ等が観測された日数の年間平年値",unit:"日",year:2022,source:"気象庁 平年値（1991〜2020年）",data:ue(Ub,Ub,"日"),yearlyData:[{year:2e3,value:28.4},{year:2005,value:26.8},{year:2010,value:24.8},{year:2015,value:22.4},{year:2020,value:21.3}],analysis:"北海道が124.4日と全国最高で3日に1日以上は雪が降る。青森119.5日・岩手111.0日・秋田108.9日と東北が上位。沖縄・宮崎は0日で雪が降らない。日本海側と太平洋側で大きな差がある。"},{id:"hot-days",category:"気候",title:"年間真夏日数（最高気温35℃以上）",description:"最高気温35℃以上の猛暑日の年間平均日数",unit:"日",year:2022,source:"気象庁 平年値（1991〜2020年）",data:ue(Wb,Wb,"日"),yearlyData:[{year:2e3,value:8.4},{year:2005,value:10.2},{year:2010,value:14.8},{year:2015,value:12.4},{year:2020,value:16.8}],analysis:"群馬県が32.4日と全国最高で熊谷市は日本屈指の猛暑地点として有名。埼玉28.4日・茨城24.8日と内陸部の関東で多い。沖縄は4.2日・北海道は0.8日と海に囲まれた地域や北部は少ない。温暖化で増加傾向。"},{id:"hotspring-count",category:"観光・交流",title:"温泉地数",description:"宿泊施設のある温泉地の数",unit:"カ所",year:2022,source:"環境省 温泉利用状況（2022年度）",data:ue(Hb,Hb,"カ所"),yearlyData:[{year:2010,value:3175},{year:2015,value:3084},{year:2018,value:2961},{year:2022,value:2934}],analysis:"長野県が94カ所と全国最高。北海道248カ所は源泉数が多く別格。大分・熊本など九州温泉地帯が上位。東京・埼玉・千葉などは12〜22カ所と少ない。全国の温泉地数は減少傾向。"},{id:"blood-donation",category:"社会問題",title:"献血率（人口1万人対）",description:"人口1万人あたりの年間献血者数",unit:"人",year:2022,source:"日本赤十字社 血液事業統計（2022年度）",data:ue(Vb,Ee.map((e,t)=>Math.round(Vb[t]*e/10)),"人（献血者数）"),yearlyData:[{year:2015,value:68.4},{year:2018,value:66.8},{year:2020,value:62.4},{year:2022,value:64.8}],analysis:"愛知県・静岡県・沖縄が78〜72人と高い。東北・北海道は54〜62人と低い傾向。献血率の高い地域は地域コミュニティへの参加意識が高いとも言われる。全国的に献血者数は減少傾向。"},{id:"pachinko-count",category:"生活・インフラ",title:"パチンコ店数（人口10万人対）",description:"人口10万人あたりのパチンコ・スロット店舗数",unit:"店",year:2022,source:"警察庁 風俗営業等の現況（2022年）",data:ue(Kb,Ee.map((e,t)=>Math.round(Kb[t]*e/100)),"店"),yearlyData:[{year:2010,value:22.4},{year:2015,value:18.8},{year:2018,value:16.4},{year:2020,value:14.8},{year:2022,value:13.8}],analysis:"東北・北陸で多く、沖縄県10.4店・東京8.4店と大都市・南部で少ない。全国的にパチンコ店は急減しており、2010年比で約4割減少。スマホゲームや規制強化が影響。"},{id:"reading-time",category:"生活・インフラ",title:"平均読書時間（1日）",description:"住民1人あたりの1日の平均読書時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(Gb,Gb,"分"),yearlyData:[{year:2006,value:20},{year:2011,value:19},{year:2016,value:18},{year:2021,value:18}],analysis:"東京都が28分と全国最高で、通勤電車での読書文化が影響していると考えられる。首都圏・京都など都市部・文化圏で長い傾向。鳥取・青森・秋田が14分と最低。全国平均は約18分で減少傾向。"},{id:"job-opening-ratio",category:"経済",title:"有効求人倍率",description:"求職者1人に対する求人件数の割合（1以上が求人超過）",unit:"倍",year:2024,source:"厚生労働省 一般職業紹介状況（2024年12月・受理地別・季節調整値）",data:ue(Qb,Qb,"倍"),yearlyData:[{year:2018,value:1.62},{year:2019,value:1.6},{year:2020,value:1.18},{year:2021,value:1.16},{year:2022,value:1.28},{year:2023,value:1.31},{year:2024,value:1.25}],analysis:"福井県1.86倍と全国最高。製造業・繊維産業が集積する北陸で高い傾向。最低は神奈川県0.90倍。1.0倍を下回る地域では求職者が求人を上回る状態。",relatedIds:["min-wage","avg-salary","unemployment-rate","non-regular-rate"]},{id:"non-regular-rate",category:"経済",title:"非正規雇用率",description:"役員を除く雇用者に占める非正規の職員・従業員の割合",unit:"%",year:2022,source:"総務省 令和4年就業構造基本調査（2022年）",data:ue(Jb,Jb,"%"),yearlyData:[{year:2007,value:33.5},{year:2012,value:35.2},{year:2017,value:38.2},{year:2022,value:36.9}],analysis:"沖縄県44.5%と全国最高で雇用者の2人に1人近くが非正規。福井県32.7%・富山県32.9%と北陸が最低。製造業・共働き文化が根付く北陸では正規雇用率が高い。",relatedIds:["min-wage","avg-salary","job-opening-ratio","male-parental-leave"]},{id:"male-parental-leave",category:"福祉・介護",title:"男性育休取得率",description:"男性の育児休業取得率",unit:"%",year:2023,source:"厚生労働省 雇用均等基本調査（2023年度）",data:ue(Zb,Zb,"%"),yearlyData:[{year:2015,value:2.65},{year:2018,value:6.16},{year:2020,value:12.65},{year:2022,value:17.13},{year:2023,value:30.1}],analysis:"2023年度に全国平均が初めて30%超え。東京都・京都府が32%台と高い。秋田・愛媛・高知は16〜18%台と地域差が大きい。",relatedIds:["birth-rate","nursery-waiting","non-regular-rate"]},{id:"furusato-tax",category:"経済",title:"ふるさと納税受入額（1人あたり）",description:"都道府県民1人あたりのふるさと納税受入額",unit:"千円",year:2023,source:"総務省 ふるさと納税に関する現況調査（2023年度）",data:ue(ex,ex,"千円"),yearlyData:[{year:2015,value:2.5},{year:2018,value:8.4},{year:2020,value:14.8},{year:2022,value:28.4},{year:2023,value:34.2}],analysis:"北海道48.2千円と全国最高。農畜産物・海産物が豊富な地方で高い傾向。東京6.4千円・神奈川7.8千円と大都市は低い。都市部から地方への逆転の資金移転が起きている指標。",relatedIds:["agriculture","migration-rate","local"]},{id:"unemployment-rate",category:"経済",title:"完全失業率",description:"労働力人口に占める完全失業者の割合",unit:"%",year:2023,source:"総務省 労働力調査（2023年）",data:ue(tx,tx,"%"),yearlyData:[{year:2010,value:5.1},{year:2015,value:3.4},{year:2018,value:2.4},{year:2020,value:2.8},{year:2022,value:2.6},{year:2023,value:2.6}],analysis:"沖縄県3.8%と全国最高で観光・サービス業依存の脆弱さが反映。富山・福井が1.4%と全国最低で製造業の安定雇用が支えている。",relatedIds:["job-opening-ratio","min-wage","non-regular-rate"]},{id:"personal-bankruptcy",category:"社会問題",title:"個人破産件数（人口10万人対）",description:"人口10万人あたりの個人破産申立件数",unit:"件",year:2023,source:"最高裁判所 司法統計（2023年）",data:ue(rx,rx,"件"),yearlyData:[{year:2010,value:42.8},{year:2015,value:28.4},{year:2018,value:22.4},{year:2020,value:18.8},{year:2022,value:16.4},{year:2023,value:16.8}],analysis:"沖縄県28.4件と全国最高で全国平均の約1.7倍。大阪22.8件・京都20.4件と関西で高い。富山・福井10〜11件と北陸が最低。破産件数は所得・雇用安定性と強く相関。",relatedIds:["welfare-rate","min-wage","non-regular-rate","unemployment-rate"]},{id:"land-price-change",category:"住まい・暮らし",title:"地価変動率（全用途）",description:"前年比の地価変動率（全用途平均）",unit:"%",year:2025,source:"国土交通省 令和7年地価公示（2025年1月1日時点・対前年）",data:ue(Yb,Yb,"%"),yearlyData:[{year:2018,value:.7},{year:2020,value:1.4},{year:2021,value:-.5},{year:2022,value:.6},{year:2023,value:1.6},{year:2024,value:2.3},{year:2025,value:2.7}],analysis:"東京都が7.3%と全国最高で3大都市圏と沖縄・福岡など九州主要都市で上昇率が高い。最低は鹿児島県-0.5%。地方圏でも上昇地点が増加傾向で、全国平均は3年連続上昇。インバウンド復活と低金利継続で都市・観光地の地価が押し上げられている。",relatedIds:["homeownership","vacancy-rate","rent-price","migration-rate"]},{id:"forest-rate",category:"自然・気候",title:"森林率",description:"国土面積に占める森林面積の割合",unit:"%",year:2022,source:"林野庁 都道府県別森林率・人工林率（令和4年3月31日現在）",data:ue(Xb,Xb,"%"),yearlyData:[{year:2007,value:67},{year:2012,value:67},{year:2017,value:67},{year:2022,value:67}],analysis:"高知県が84%と全国最高で岐阜81%・長野79%が続く。最低は千葉29%・大阪30%・茨城31%と関東・近畿の平野部で低い。日本全体の森林率は約67%でフィンランドに次ぐ世界2位の森林国。豊かな森林資源は防災・観光・林業など多面的価値を持つが、所有者不明森林の増加など課題もある。",relatedIds:["agriculture","clear-days","sunshine-hours","rainfall"]}],p7=e=>Xr.find(t=>t.id===e),h7=e=>e.reduce((t,r)=>t+r.value,0)/e.length;function Dr(){const e=rr(),[t,r]=D.useState(!1);return b.jsxs("header",{className:"sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E0D8]",children:[b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between",children:[b.jsx("button",{onClick:()=>{e("/"),r(!1)},className:"flex items-baseline gap-2 hover:opacity-80 transition-opacity",children:b.jsx("span",{className:"text-base sm:text-lg font-bold text-[#3D52A0]",style:{fontFamily:"var(--font-serif)"},children:"日本のいろんな統計マップ"})}),b.jsxs("nav",{className:"hidden sm:flex items-center gap-1",children:[b.jsx("button",{onClick:()=>e("/ranking"),className:"text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-2 rounded-lg hover:bg-[#F0EDE8] transition-all",children:"ランキング"}),b.jsx("button",{onClick:()=>e("/diagnosis"),className:"text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-2 rounded-lg hover:bg-[#F0EDE8] transition-all",children:"🗾 診断"}),b.jsx("button",{onClick:()=>e("/column"),className:"text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-2 rounded-lg hover:bg-[#F0EDE8] transition-all",children:"コラム"}),b.jsx("button",{onClick:()=>e("/contact"),className:"text-sm text-white bg-[#3D52A0] px-4 py-2 rounded-lg hover:bg-[#2d4090] transition-colors",children:"お問い合わせ"})]}),b.jsxs("button",{onClick:()=>r(!t),className:"sm:hidden flex flex-col gap-1.5 p-2 -mr-2",children:[b.jsx("span",{className:`block w-5 h-0.5 bg-[#1A1A1A] transition-all ${t?"rotate-45 translate-y-2":""}`}),b.jsx("span",{className:`block w-5 h-0.5 bg-[#1A1A1A] transition-all ${t?"opacity-0":""}`}),b.jsx("span",{className:`block w-5 h-0.5 bg-[#1A1A1A] transition-all ${t?"-rotate-45 -translate-y-2":""}`})]})]}),t&&b.jsxs("div",{className:"sm:hidden border-t border-[#E5E0D8] bg-white px-4 py-3 space-y-1",children:[b.jsx("button",{onClick:()=>{e("/ranking"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"ランキング"}),b.jsx("button",{onClick:()=>{e("/diagnosis"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"🗾 都道府県診断"}),b.jsx("button",{onClick:()=>{e("/column"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"コラム"}),b.jsx("button",{onClick:()=>{e("/privacy"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"プライバシーポリシー"}),b.jsx("button",{onClick:()=>{e("/contact"),r(!1)},className:"w-full text-left text-sm text-white bg-[#3D52A0] px-3 py-3 rounded-lg",children:"お問い合わせ"})]})]})}function Mr(){const e=rr();return b.jsx("footer",{className:"bg-[#1A1A1A] text-white mt-16",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12",children:[b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8",children:[b.jsxs("div",{children:[b.jsx("h3",{className:"font-bold text-base mb-3",style:{fontFamily:"var(--font-serif)"},children:"日本のいろんな統計マップ"}),b.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"政府統計データをもとに47都道府県の様々な指標を可視化。知らなかった日本が、ここにある。"})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-medium text-sm mb-3 text-gray-300",children:"コンテンツ"}),b.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[b.jsx("li",{children:b.jsx("button",{onClick:()=>e("/"),className:"hover:text-white transition-colors",children:"統計マップ"})}),b.jsx("li",{children:b.jsx("button",{onClick:()=>e("/ranking"),className:"hover:text-white transition-colors",children:"ランキング"})}),b.jsx("li",{children:b.jsx("button",{onClick:()=>e("/diagnosis"),className:"hover:text-white transition-colors",children:"都道府県診断"})}),b.jsx("li",{children:b.jsx("button",{onClick:()=>e("/column"),className:"hover:text-white transition-colors",children:"コラム"})})]})]}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-medium text-sm mb-3 text-gray-300",children:"データについて"}),b.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[b.jsx("li",{children:"📊 データは政府統計（厚生労働省・総務省・国土交通省等）をもとにしています"}),b.jsx("li",{children:"📎 出典を明記いただければリンク・引用は自由です"}),b.jsx("li",{children:b.jsx("button",{onClick:()=>e("/privacy"),className:"hover:text-white transition-colors",children:"プライバシーポリシー"})}),b.jsx("li",{children:b.jsx("button",{onClick:()=>e("/contact"),className:"hover:text-white transition-colors",children:"お問い合わせ"})})]})]})]}),b.jsxs("div",{className:"border-t border-gray-800 pt-6 text-xs text-gray-500 text-center space-y-1",children:[b.jsx("p",{children:"© 2026 日本のいろんな統計マップ"}),b.jsx("p",{children:"掲載データは政府公式統計をもとにしていますが、一部に推計値を含みます。最新・正確な情報は各省庁の公式サイトをご確認ください。"})]})]})})}const m7="https://japan-stats-likes.100makeniki.workers.dev",y7=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],v7={"人口・世帯":"人口・世帯","住宅・不動産":"住まい・暮らし","生活・インフラ":"住まい・暮らし",社会問題:"社会問題",医療:"医療・福祉","福祉・介護":"医療・福祉",社会保障:"医療・福祉",経済:"経済・仕事","公務員・公共":"経済・仕事","健康・医療":"健康・食文化",食文化:"健康・食文化","教育・子育て":"教育・文化","文化・宗教":"教育・文化",情報通信:"教育・文化",気候:"自然・気候","農業・産業":"自然・気候","観光・交流":"自然・気候","スポーツ・文化":"スポーツ"},g7=["人口・世帯","住まい・暮らし","社会問題","医療・福祉","経済・仕事","健康・食文化","教育・文化","自然・気候","スポーツ"],nx={"人口・世帯":"#3D52A0","住まい・暮らし":"#8b5cf6",社会問題:"#dc2626","医療・福祉":"#27ae60","経済・仕事":"#0891b2","健康・食文化":"#16a34a","教育・文化":"#7c3aed","自然・気候":"#65a30d",スポーツ:"#e67e22"};function b7({values:e,color:t}){const r=Math.min(...e),n=Math.max(...e);return b.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:1,height:44,marginTop:8},children:e.slice(0,47).map((i,o)=>b.jsx("div",{style:{flex:1,height:`${(i-r)/(n-r)*80+20}%`,background:t,opacity:.25+(i-r)/(n-r)*.75,borderRadius:"1px 1px 0 0"}},o))})}function x7(){const e=rr(),[t,r]=D.useState([]);return D.useEffect(()=>{fetch(`${m7}/likes/all?id=all`).then(n=>n.json()).then(n=>{const i=[];Xr.forEach(o=>{const s=n[`data_${o.id}`]||0;s>0&&i.push({id:o.id,count:s,title:o.title})}),i.sort((o,s)=>s.count-o.count),r(i.slice(0,5))}).catch(()=>{})},[]),t.length===0?null:b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 mb-8 shadow-sm",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[b.jsx("span",{className:"text-lg",children:"🔥"}),b.jsx("h3",{className:"font-bold text-[#1A1A1A] text-sm",style:{fontFamily:"var(--font-serif)"},children:"参考になった！ランキング"})]}),b.jsx("div",{className:"space-y-2",children:t.map(({id:n,count:i,title:o},s)=>b.jsxs("button",{onClick:()=>e(`/detail/${n}`),className:"w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F8F8F6] transition-colors text-left group",children:[b.jsx("div",{className:`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${s===0?"bg-yellow-100 text-yellow-700":s===1?"bg-gray-100 text-gray-600":s===2?"bg-orange-100 text-orange-700":"bg-[#F0EDE8] text-[#717182]"}`,children:s<3?["🥇","🥈","🥉"][s]:s+1}),b.jsx("div",{className:"flex-1 min-w-0 text-xs font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] truncate",children:o}),b.jsxs("div",{className:"text-xs text-[#3D52A0] font-medium flex-shrink-0",children:["👍 ",i]})]},n))})]})}function w7(){const e=rr(),[t,r]=D.useState("すべて"),[n,i]=D.useState(null),[o,s]=D.useState(""),[u,f]=D.useState(!1),d=y7.filter(g=>g.includes(o)),m=Xr.map(g=>({...g,displayCategory:v7[g.category]||g.category})),h=g=>Array.from(new Set(m.filter(_=>_.displayCategory===g).map(_=>_.category))),y=t==="すべて"?m:m.filter(g=>g.displayCategory===t||g.category===t);return b.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",onClick:()=>i(null),children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16",children:[b.jsxs("div",{className:"text-center mb-8 sm:mb-10",children:[b.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-[#1A1A1A] via-[#3D52A0] to-[#1A1A1A] bg-clip-text text-transparent leading-tight",style:{fontFamily:"var(--font-serif)"},children:["知ると、日本の",b.jsx("br",{className:"sm:hidden"}),"見え方が変わる。"]}),b.jsx("p",{className:"text-base sm:text-xl text-[#717182] max-w-2xl mx-auto px-2 mb-6",children:"知らなかった日本を、わかりやすいビジュアルで。"}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[b.jsx("button",{onClick:()=>e("/diagnosis"),className:"inline-flex items-center justify-center gap-2 bg-[#3D52A0] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#2d4090] transition-colors shadow-sm",children:"🗾 あなたに向いてる都道府県を診断する →"}),b.jsx("button",{onClick:()=>e("/ranking"),className:"inline-flex items-center justify-center gap-2 bg-white border border-[#E5E0D8] text-[#717182] px-6 py-3 rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:"🏆 おすすめランキングを見る"})]})]}),b.jsx("div",{className:"max-w-lg mx-auto mb-10",children:b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8] shadow-sm p-5",children:[b.jsx("p",{className:"text-sm font-medium text-[#1A1A1A] mb-3 text-center",children:"🏡 あなたの都道府県のデータをまとめて見る"}),b.jsxs("div",{className:"relative",children:[b.jsx("input",{type:"text",value:o,onChange:g=>{s(g.target.value),f(!0)},onFocus:()=>f(!0),placeholder:"都道府県名を入力（例：東京、大阪…）",className:"w-full px-4 py-3 border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#3D52A0] focus:ring-2 focus:ring-[#3D52A0]/10"}),u&&o&&b.jsxs("div",{className:"absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E0D8] rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto",children:[d.map(g=>b.jsx("button",{onClick:()=>{e(`/pref/${encodeURIComponent(g)}`),f(!1),s("")},className:"w-full text-left px-4 py-2.5 text-sm hover:bg-[#F0EDE8] transition-colors",children:g},g)),d.length===0&&b.jsx("p",{className:"px-4 py-3 text-sm text-[#717182]",children:"見つかりません"})]})]}),b.jsx("div",{className:"flex flex-wrap gap-2 mt-3",children:["東京","大阪","神奈川","愛知","福岡","北海道","沖縄"].map(g=>b.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(g)}`),className:"text-xs px-3 py-1.5 bg-[#F0EDE8] text-[#717182] rounded-full hover:bg-[#3D52A0] hover:text-white transition-colors",children:g},g))})]})}),b.jsx(x7,{}),b.jsxs("div",{className:"mb-6 flex items-center gap-2",onClick:g=>g.stopPropagation(),children:[b.jsxs("button",{onClick:()=>{r("すべて"),i(null)},className:`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${t==="すべて"?"bg-[#3D52A0] text-white border-[#3D52A0] shadow-sm":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:["すべて",b.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded-full ${t==="すべて"?"bg-white/20 text-white":"bg-[#F0EDE8] text-[#999]"}`,children:Xr.length})]}),b.jsxs("div",{className:"relative",children:[b.jsxs("button",{onClick:()=>i(n==="genre"?null:"genre"),className:`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${t!=="すべて"?"bg-[#3D52A0] text-white border-[#3D52A0] shadow-sm":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:[t!=="すべて"?t:"ジャンル別",b.jsx("span",{className:"text-xs opacity-70",children:"▾"})]}),n==="genre"&&b.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-[#E5E0D8] rounded-2xl shadow-xl z-20 w-64 overflow-y-auto",style:{maxHeight:"60vh"},children:g7.map(g=>{const _=m.filter(A=>A.displayCategory===g).length,S=h(g),x=nx[g]??"#3D52A0",j=t===g||S.includes(t);return b.jsxs("div",{children:[b.jsxs("button",{onClick:()=>{r(g),i(null)},className:`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-[#F8F8F6] transition-colors ${j?"font-medium":""}`,style:j?{color:x}:{},children:[b.jsx("span",{children:g}),b.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-[#F0EDE8] text-[#717182]",children:_})]}),S.length>1&&S.map(A=>{const E=m.filter(T=>T.category===A).length;return b.jsxs("button",{onClick:()=>{r(A),i(null)},className:`w-full flex items-center justify-between pl-8 pr-4 py-2 text-xs hover:bg-[#F8F8F6] transition-colors border-t border-[#F0EDE8] ${t===A?"text-[#3D52A0] font-medium":"text-[#717182]"}`,children:[b.jsxs("span",{children:["└ ",A]}),b.jsx("span",{className:"text-xs text-[#bbb]",children:E})]},A)})]},g)})})]})]}),b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:y.map(g=>{const _=g.data[0],S=nx[g.displayCategory]??"#3D52A0";return b.jsxs("div",{onClick:()=>e(`/detail/${g.id}`),className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 sm:p-6 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group active:scale-95",children:[b.jsxs("div",{className:"flex items-start justify-between mb-2",children:[b.jsx("span",{className:"inline-block text-xs px-2.5 py-1 rounded-full font-medium",style:{background:`${S}15`,color:S},children:g.displayCategory}),b.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] transition-colors text-sm",children:"→"})]}),b.jsx("h2",{className:"text-base sm:text-lg font-bold mb-1 text-[#1A1A1A] leading-tight",style:{fontFamily:"var(--font-serif)"},children:g.title}),b.jsx("p",{className:"text-xs text-[#717182]",children:g.description}),b.jsx(b7,{values:g.data.map(x=>x.value),color:S}),b.jsxs("div",{className:"mt-3 flex items-center justify-between text-xs text-[#717182]",children:[b.jsxs("span",{children:["最高: ",b.jsx("span",{className:"font-semibold",style:{color:S},children:_.prefecture})]}),b.jsxs("span",{children:[g.year,"年"]})]})]},g.id)})})]}),b.jsx(Mr,{})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_7=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),ax=e=>{const t=_7(e);return t.charAt(0).toUpperCase()+t.slice(1)},h_=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j7={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=D.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:s,...u},f)=>D.createElement("svg",{ref:f,...j7,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:h_("lucide",i),...u},[...s.map(([d,m])=>D.createElement(d,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=(e,t)=>{const r=D.forwardRef(({className:n,...i},o)=>D.createElement(O7,{ref:o,iconNode:t,className:h_(`lucide-${S7(ax(e))}`,`lucide-${e}`,n),...i}));return r.displayName=ax(e),r};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],E7=m_("arrow-left",A7);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],k7=m_("search",P7),T7=[{name:"北海道・東北",prefectures:["北海道","青森","岩手","宮城","秋田","山形","福島"]},{name:"関東",prefectures:["茨城","栃木","群馬","埼玉","千葉","東京","神奈川"]},{name:"中部",prefectures:["新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知"]},{name:"近畿",prefectures:["三重","滋賀","京都","大阪","兵庫","奈良","和歌山"]},{name:"中国",prefectures:["鳥取","島根","岡山","広島","山口"]},{name:"四国",prefectures:["徳島","香川","愛媛","高知"]},{name:"九州・沖縄",prefectures:["福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"]}];function Yd(e,t){return t==="円"?e.toLocaleString()+t:t==="人"||t==="法人"||t==="pt"?Math.round(e).toLocaleString()+t:e.toFixed(2)+t}function C7({data:e,unit:t}){const r=Math.min(...e.map(o=>o.value)),n=Math.max(...e.map(o=>o.value)),i=o=>{const s=(o-r)/(n-r);return s<.25?{bg:"rgb(245, 230, 211)",text:"#7a4a1e"}:s<.5?{bg:"rgb(232, 168, 124)",text:"#fff"}:s<.75?{bg:"rgb(212, 105, 58)",text:"#fff"}:{bg:"rgb(184, 58, 26)",text:"#fff"}};return b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-8",children:[b.jsxs("div",{className:"mb-8",children:[b.jsxs("div",{className:"flex items-center justify-between mb-2",children:[b.jsx("span",{className:"text-sm text-[#717182]",children:"低い"}),b.jsx("span",{className:"text-sm text-[#717182]",children:"高い"})]}),b.jsx("div",{className:"h-4 rounded-full shadow-inner",style:{background:"linear-gradient(to right, rgb(245,230,211), rgb(232,168,124), rgb(212,105,58), rgb(184,58,26))"}}),b.jsxs("div",{className:"flex items-center justify-between mt-2 text-xs text-[#717182]",style:{fontFamily:"monospace"},children:[b.jsx("span",{children:Yd(r,t)}),b.jsx("span",{children:Yd(n,t)})]})]}),b.jsx("div",{className:"space-y-8",children:T7.map(o=>b.jsxs("div",{children:[b.jsx("h4",{className:"text-sm font-medium text-[#3D52A0] mb-4",children:o.name}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",children:o.prefectures.map(s=>{const u=e.find(m=>m.prefecture===s),{bg:f,text:d}=u?i(u.value):{bg:"#f0f0f0",text:"#999"};return b.jsxs("div",{className:"rounded-lg p-4 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer",style:{backgroundColor:f},children:[b.jsx("div",{className:"text-sm font-medium drop-shadow-sm",style:{color:d},children:s}),u&&b.jsx("div",{className:"text-xs mt-1 drop-shadow-sm",style:{color:d,opacity:.9,fontFamily:"monospace"},children:Yd(u.value,t)})]},s)})})]},o.name))})]})}function y_(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=y_(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ie(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=y_(e))&&(n&&(n+=" "),n+=t);return n}var Qd,ix;function Ht(){if(ix)return Qd;ix=1;var e=Array.isArray;return Qd=e,Qd}var Jd,ox;function v_(){if(ox)return Jd;ox=1;var e=typeof nu=="object"&&nu&&nu.Object===Object&&nu;return Jd=e,Jd}var Zd,lx;function Jr(){if(lx)return Zd;lx=1;var e=v_(),t=typeof self=="object"&&self&&self.Object===Object&&self,r=e||t||Function("return this")();return Zd=r,Zd}var ep,sx;function $l(){if(sx)return ep;sx=1;var e=Jr(),t=e.Symbol;return ep=t,ep}var tp,ux;function N7(){if(ux)return tp;ux=1;var e=$l(),t=Object.prototype,r=t.hasOwnProperty,n=t.toString,i=e?e.toStringTag:void 0;function o(s){var u=r.call(s,i),f=s[i];try{s[i]=void 0;var d=!0}catch{}var m=n.call(s);return d&&(u?s[i]=f:delete s[i]),m}return tp=o,tp}var rp,cx;function D7(){if(cx)return rp;cx=1;var e=Object.prototype,t=e.toString;function r(n){return t.call(n)}return rp=r,rp}var np,fx;function Sn(){if(fx)return np;fx=1;var e=$l(),t=N7(),r=D7(),n="[object Null]",i="[object Undefined]",o=e?e.toStringTag:void 0;function s(u){return u==null?u===void 0?i:n:o&&o in Object(u)?t(u):r(u)}return np=s,np}var ap,dx;function _n(){if(dx)return ap;dx=1;function e(t){return t!=null&&typeof t=="object"}return ap=e,ap}var ip,px;function Mi(){if(px)return ip;px=1;var e=Sn(),t=_n(),r="[object Symbol]";function n(i){return typeof i=="symbol"||t(i)&&e(i)==r}return ip=n,ip}var op,hx;function T2(){if(hx)return op;hx=1;var e=Ht(),t=Mi(),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function i(o,s){if(e(o))return!1;var u=typeof o;return u=="number"||u=="symbol"||u=="boolean"||o==null||t(o)?!0:n.test(o)||!r.test(o)||s!=null&&o in Object(s)}return op=i,op}var lp,mx;function Gn(){if(mx)return lp;mx=1;function e(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}return lp=e,lp}var sp,yx;function C2(){if(yx)return sp;yx=1;var e=Sn(),t=Gn(),r="[object AsyncFunction]",n="[object Function]",i="[object GeneratorFunction]",o="[object Proxy]";function s(u){if(!t(u))return!1;var f=e(u);return f==n||f==i||f==r||f==o}return sp=s,sp}var up,vx;function M7(){if(vx)return up;vx=1;var e=Jr(),t=e["__core-js_shared__"];return up=t,up}var cp,gx;function R7(){if(gx)return cp;gx=1;var e=M7(),t=(function(){var n=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})();function r(n){return!!t&&t in n}return cp=r,cp}var fp,bx;function g_(){if(bx)return fp;bx=1;var e=Function.prototype,t=e.toString;function r(n){if(n!=null){try{return t.call(n)}catch{}try{return n+""}catch{}}return""}return fp=r,fp}var dp,xx;function I7(){if(xx)return dp;xx=1;var e=C2(),t=R7(),r=Gn(),n=g_(),i=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,f=s.toString,d=u.hasOwnProperty,m=RegExp("^"+f.call(d).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(y){if(!r(y)||t(y))return!1;var g=e(y)?m:o;return g.test(n(y))}return dp=h,dp}var pp,wx;function $7(){if(wx)return pp;wx=1;function e(t,r){return t==null?void 0:t[r]}return pp=e,pp}var hp,Sx;function _a(){if(Sx)return hp;Sx=1;var e=I7(),t=$7();function r(n,i){var o=t(n,i);return e(o)?o:void 0}return hp=r,hp}var mp,_x;function xc(){if(_x)return mp;_x=1;var e=_a(),t=e(Object,"create");return mp=t,mp}var yp,jx;function L7(){if(jx)return yp;jx=1;var e=xc();function t(){this.__data__=e?e(null):{},this.size=0}return yp=t,yp}var vp,Ox;function F7(){if(Ox)return vp;Ox=1;function e(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}return vp=e,vp}var gp,Ax;function B7(){if(Ax)return gp;Ax=1;var e=xc(),t="__lodash_hash_undefined__",r=Object.prototype,n=r.hasOwnProperty;function i(o){var s=this.__data__;if(e){var u=s[o];return u===t?void 0:u}return n.call(s,o)?s[o]:void 0}return gp=i,gp}var bp,Ex;function q7(){if(Ex)return bp;Ex=1;var e=xc(),t=Object.prototype,r=t.hasOwnProperty;function n(i){var o=this.__data__;return e?o[i]!==void 0:r.call(o,i)}return bp=n,bp}var xp,Px;function z7(){if(Px)return xp;Px=1;var e=xc(),t="__lodash_hash_undefined__";function r(n,i){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=e&&i===void 0?t:i,this}return xp=r,xp}var wp,kx;function U7(){if(kx)return wp;kx=1;var e=L7(),t=F7(),r=B7(),n=q7(),i=z7();function o(s){var u=-1,f=s==null?0:s.length;for(this.clear();++u<f;){var d=s[u];this.set(d[0],d[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=i,wp=o,wp}var Sp,Tx;function W7(){if(Tx)return Sp;Tx=1;function e(){this.__data__=[],this.size=0}return Sp=e,Sp}var _p,Cx;function N2(){if(Cx)return _p;Cx=1;function e(t,r){return t===r||t!==t&&r!==r}return _p=e,_p}var jp,Nx;function wc(){if(Nx)return jp;Nx=1;var e=N2();function t(r,n){for(var i=r.length;i--;)if(e(r[i][0],n))return i;return-1}return jp=t,jp}var Op,Dx;function H7(){if(Dx)return Op;Dx=1;var e=wc(),t=Array.prototype,r=t.splice;function n(i){var o=this.__data__,s=e(o,i);if(s<0)return!1;var u=o.length-1;return s==u?o.pop():r.call(o,s,1),--this.size,!0}return Op=n,Op}var Ap,Mx;function V7(){if(Mx)return Ap;Mx=1;var e=wc();function t(r){var n=this.__data__,i=e(n,r);return i<0?void 0:n[i][1]}return Ap=t,Ap}var Ep,Rx;function K7(){if(Rx)return Ep;Rx=1;var e=wc();function t(r){return e(this.__data__,r)>-1}return Ep=t,Ep}var Pp,Ix;function G7(){if(Ix)return Pp;Ix=1;var e=wc();function t(r,n){var i=this.__data__,o=e(i,r);return o<0?(++this.size,i.push([r,n])):i[o][1]=n,this}return Pp=t,Pp}var kp,$x;function Sc(){if($x)return kp;$x=1;var e=W7(),t=H7(),r=V7(),n=K7(),i=G7();function o(s){var u=-1,f=s==null?0:s.length;for(this.clear();++u<f;){var d=s[u];this.set(d[0],d[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=i,kp=o,kp}var Tp,Lx;function D2(){if(Lx)return Tp;Lx=1;var e=_a(),t=Jr(),r=e(t,"Map");return Tp=r,Tp}var Cp,Fx;function X7(){if(Fx)return Cp;Fx=1;var e=U7(),t=Sc(),r=D2();function n(){this.size=0,this.__data__={hash:new e,map:new(r||t),string:new e}}return Cp=n,Cp}var Np,Bx;function Y7(){if(Bx)return Np;Bx=1;function e(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}return Np=e,Np}var Dp,qx;function _c(){if(qx)return Dp;qx=1;var e=Y7();function t(r,n){var i=r.__data__;return e(n)?i[typeof n=="string"?"string":"hash"]:i.map}return Dp=t,Dp}var Mp,zx;function Q7(){if(zx)return Mp;zx=1;var e=_c();function t(r){var n=e(this,r).delete(r);return this.size-=n?1:0,n}return Mp=t,Mp}var Rp,Ux;function J7(){if(Ux)return Rp;Ux=1;var e=_c();function t(r){return e(this,r).get(r)}return Rp=t,Rp}var Ip,Wx;function Z7(){if(Wx)return Ip;Wx=1;var e=_c();function t(r){return e(this,r).has(r)}return Ip=t,Ip}var $p,Hx;function eT(){if(Hx)return $p;Hx=1;var e=_c();function t(r,n){var i=e(this,r),o=i.size;return i.set(r,n),this.size+=i.size==o?0:1,this}return $p=t,$p}var Lp,Vx;function M2(){if(Vx)return Lp;Vx=1;var e=X7(),t=Q7(),r=J7(),n=Z7(),i=eT();function o(s){var u=-1,f=s==null?0:s.length;for(this.clear();++u<f;){var d=s[u];this.set(d[0],d[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=i,Lp=o,Lp}var Fp,Kx;function b_(){if(Kx)return Fp;Kx=1;var e=M2(),t="Expected a function";function r(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new TypeError(t);var o=function(){var s=arguments,u=i?i.apply(this,s):s[0],f=o.cache;if(f.has(u))return f.get(u);var d=n.apply(this,s);return o.cache=f.set(u,d)||f,d};return o.cache=new(r.Cache||e),o}return r.Cache=e,Fp=r,Fp}var Bp,Gx;function tT(){if(Gx)return Bp;Gx=1;var e=b_(),t=500;function r(n){var i=e(n,function(s){return o.size===t&&o.clear(),s}),o=i.cache;return i}return Bp=r,Bp}var qp,Xx;function rT(){if(Xx)return qp;Xx=1;var e=tT(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,n=e(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(t,function(s,u,f,d){o.push(f?d.replace(r,"$1"):u||s)}),o});return qp=n,qp}var zp,Yx;function R2(){if(Yx)return zp;Yx=1;function e(t,r){for(var n=-1,i=t==null?0:t.length,o=Array(i);++n<i;)o[n]=r(t[n],n,t);return o}return zp=e,zp}var Up,Qx;function nT(){if(Qx)return Up;Qx=1;var e=$l(),t=R2(),r=Ht(),n=Mi(),i=e?e.prototype:void 0,o=i?i.toString:void 0;function s(u){if(typeof u=="string")return u;if(r(u))return t(u,s)+"";if(n(u))return o?o.call(u):"";var f=u+"";return f=="0"&&1/u==-1/0?"-0":f}return Up=s,Up}var Wp,Jx;function x_(){if(Jx)return Wp;Jx=1;var e=nT();function t(r){return r==null?"":e(r)}return Wp=t,Wp}var Hp,Zx;function w_(){if(Zx)return Hp;Zx=1;var e=Ht(),t=T2(),r=rT(),n=x_();function i(o,s){return e(o)?o:t(o,s)?[o]:r(n(o))}return Hp=i,Hp}var Vp,e4;function jc(){if(e4)return Vp;e4=1;var e=Mi();function t(r){if(typeof r=="string"||e(r))return r;var n=r+"";return n=="0"&&1/r==-1/0?"-0":n}return Vp=t,Vp}var Kp,t4;function I2(){if(t4)return Kp;t4=1;var e=w_(),t=jc();function r(n,i){i=e(i,n);for(var o=0,s=i.length;n!=null&&o<s;)n=n[t(i[o++])];return o&&o==s?n:void 0}return Kp=r,Kp}var Gp,r4;function S_(){if(r4)return Gp;r4=1;var e=I2();function t(r,n,i){var o=r==null?void 0:e(r,n);return o===void 0?i:o}return Gp=t,Gp}var aT=S_();const pr=We(aT);var Xp,n4;function iT(){if(n4)return Xp;n4=1;function e(t){return t==null}return Xp=e,Xp}var oT=iT();const Ce=We(oT);var Yp,a4;function lT(){if(a4)return Yp;a4=1;var e=Sn(),t=Ht(),r=_n(),n="[object String]";function i(o){return typeof o=="string"||!t(o)&&r(o)&&e(o)==n}return Yp=i,Yp}var sT=lT();const Ll=We(sT);var uT=C2();const Pe=We(uT);var cT=Gn();const Ri=We(cT);var Qp={exports:{}},Le={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i4;function fT(){if(i4)return Le;i4=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),_;_=Symbol.for("react.module.reference");function S(x){if(typeof x=="object"&&x!==null){var j=x.$$typeof;switch(j){case e:switch(x=x.type,x){case r:case i:case n:case d:case m:return x;default:switch(x=x&&x.$$typeof,x){case u:case s:case f:case y:case h:case o:return x;default:return j}}case t:return j}}}return Le.ContextConsumer=s,Le.ContextProvider=o,Le.Element=e,Le.ForwardRef=f,Le.Fragment=r,Le.Lazy=y,Le.Memo=h,Le.Portal=t,Le.Profiler=i,Le.StrictMode=n,Le.Suspense=d,Le.SuspenseList=m,Le.isAsyncMode=function(){return!1},Le.isConcurrentMode=function(){return!1},Le.isContextConsumer=function(x){return S(x)===s},Le.isContextProvider=function(x){return S(x)===o},Le.isElement=function(x){return typeof x=="object"&&x!==null&&x.$$typeof===e},Le.isForwardRef=function(x){return S(x)===f},Le.isFragment=function(x){return S(x)===r},Le.isLazy=function(x){return S(x)===y},Le.isMemo=function(x){return S(x)===h},Le.isPortal=function(x){return S(x)===t},Le.isProfiler=function(x){return S(x)===i},Le.isStrictMode=function(x){return S(x)===n},Le.isSuspense=function(x){return S(x)===d},Le.isSuspenseList=function(x){return S(x)===m},Le.isValidElementType=function(x){return typeof x=="string"||typeof x=="function"||x===r||x===i||x===n||x===d||x===m||x===g||typeof x=="object"&&x!==null&&(x.$$typeof===y||x.$$typeof===h||x.$$typeof===o||x.$$typeof===s||x.$$typeof===f||x.$$typeof===_||x.getModuleId!==void 0)},Le.typeOf=S,Le}var o4;function dT(){return o4||(o4=1,Qp.exports=fT()),Qp.exports}var pT=dT(),Jp,l4;function __(){if(l4)return Jp;l4=1;var e=Sn(),t=_n(),r="[object Number]";function n(i){return typeof i=="number"||t(i)&&e(i)==r}return Jp=n,Jp}var Zp,s4;function hT(){if(s4)return Zp;s4=1;var e=__();function t(r){return e(r)&&r!=+r}return Zp=t,Zp}var mT=hT();const Fl=We(mT);var yT=__();const vT=We(yT);var Nr=function(t){return t===0?0:t>0?1:-1},ma=function(t){return Ll(t)&&t.indexOf("%")===t.length-1},ce=function(t){return vT(t)&&!Fl(t)},ht=function(t){return ce(t)||Ll(t)},gT=0,Bl=function(t){var r=++gT;return"".concat(t||"").concat(r)},ba=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!ce(t)&&!Ll(t))return n;var o;if(ma(t)){var s=t.indexOf("%");o=r*parseFloat(t.slice(0,s))/100}else o=+t;return Fl(o)&&(o=n),i&&o>r&&(o=r),o},Hn=function(t){if(!t)return null;var r=Object.keys(t);return r&&r.length?t[r[0]]:null},bT=function(t){if(!Array.isArray(t))return!1;for(var r=t.length,n={},i=0;i<r;i++)if(!n[t[i]])n[t[i]]=!0;else return!0;return!1},Cr=function(t,r){return ce(t)&&ce(r)?function(n){return t+n*(r-t)}:function(){return r}};function wu(e,t,r){return!e||!e.length?null:e.find(function(n){return n&&(typeof t=="function"?t(n):pr(n,t))===r})}function oi(e,t){for(var r in e)if({}.hasOwnProperty.call(e,r)&&(!{}.hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if({}.hasOwnProperty.call(t,n)&&!{}.hasOwnProperty.call(e,n))return!1;return!0}function ny(e){"@babel/helpers - typeof";return ny=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ny(e)}var xT=["viewBox","children"],wT=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],u4=["points","pathLength"],eh={svg:xT,polygon:u4,polyline:u4},$2=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Su=function(t,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var n=t;if(D.isValidElement(t)&&(n=t.props),!Ri(n))return null;var i={};return Object.keys(n).forEach(function(o){$2.includes(o)&&(i[o]=r||function(s){return n[o](n,s)})}),i},ST=function(t,r,n){return function(i){return t(r,n,i),null}},_u=function(t,r,n){if(!Ri(t)||ny(t)!=="object")return null;var i=null;return Object.keys(t).forEach(function(o){var s=t[o];$2.includes(o)&&typeof s=="function"&&(i||(i={}),i[o]=ST(s,r,n))}),i},_T=["children"],jT=["children"];function c4(e,t){if(e==null)return{};var r=OT(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function OT(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ay(e){"@babel/helpers - typeof";return ay=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ay(e)}var f4={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},pn=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},d4=null,th=null,L2=function e(t){if(t===d4&&Array.isArray(th))return th;var r=[];return D.Children.forEach(t,function(n){Ce(n)||(pT.isFragment(n)?r=r.concat(e(n.props.children)):r.push(n))}),th=r,d4=t,r};function hr(e,t){var r=[],n=[];return Array.isArray(t)?n=t.map(function(i){return pn(i)}):n=[pn(t)],L2(e).forEach(function(i){var o=pr(i,"type.displayName")||pr(i,"type.name");n.indexOf(o)!==-1&&r.push(i)}),r}function Jt(e,t){var r=hr(e,t);return r&&r[0]}var p4=function(t){if(!t||!t.props)return!1;var r=t.props,n=r.width,i=r.height;return!(!ce(n)||n<=0||!ce(i)||i<=0)},AT=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],ET=function(t){return t&&t.type&&Ll(t.type)&&AT.indexOf(t.type)>=0},PT=function(t){return t&&ay(t)==="object"&&"clipDot"in t},kT=function(t,r,n,i){var o,s=(o=eh==null?void 0:eh[i])!==null&&o!==void 0?o:[];return r.startsWith("data-")||!Pe(t)&&(i&&s.includes(r)||wT.includes(r))||n&&$2.includes(r)},Ne=function(t,r,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var i=t;if(D.isValidElement(t)&&(i=t.props),!Ri(i))return null;var o={};return Object.keys(i).forEach(function(s){var u;kT((u=i)===null||u===void 0?void 0:u[s],s,r,n)&&(o[s]=i[s])}),o},iy=function e(t,r){if(t===r)return!0;var n=D.Children.count(t);if(n!==D.Children.count(r))return!1;if(n===0)return!0;if(n===1)return h4(Array.isArray(t)?t[0]:t,Array.isArray(r)?r[0]:r);for(var i=0;i<n;i++){var o=t[i],s=r[i];if(Array.isArray(o)||Array.isArray(s)){if(!e(o,s))return!1}else if(!h4(o,s))return!1}return!0},h4=function(t,r){if(Ce(t)&&Ce(r))return!0;if(!Ce(t)&&!Ce(r)){var n=t.props||{},i=n.children,o=c4(n,_T),s=r.props||{},u=s.children,f=c4(s,jT);return i&&u?oi(o,f)&&iy(i,u):!i&&!u?oi(o,f):!1}return!1},m4=function(t,r){var n=[],i={};return L2(t).forEach(function(o,s){if(ET(o))n.push(o);else if(o){var u=pn(o.type),f=r[u]||{},d=f.handler,m=f.once;if(d&&(!m||!i[u])){var h=d(o,u,s);n.push(h),i[u]=!0}}}),n},TT=function(t){var r=t&&t.type;return r&&f4[r]?f4[r]:null},CT=function(t,r){return L2(r).indexOf(t)},NT=["children","width","height","viewBox","className","style","title","desc"];function oy(){return oy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oy.apply(this,arguments)}function DT(e,t){if(e==null)return{};var r=MT(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function MT(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ly(e){var t=e.children,r=e.width,n=e.height,i=e.viewBox,o=e.className,s=e.style,u=e.title,f=e.desc,d=DT(e,NT),m=i||{width:r,height:n,x:0,y:0},h=Ie("recharts-surface",o);return B.createElement("svg",oy({},Ne(d,!0,"svg"),{className:h,width:r,height:n,style:s,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),B.createElement("title",null,u),B.createElement("desc",null,f),t)}var RT=["children","className"];function sy(){return sy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},sy.apply(this,arguments)}function IT(e,t){if(e==null)return{};var r=$T(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $T(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var lt=B.forwardRef(function(e,t){var r=e.children,n=e.className,i=IT(e,RT),o=Ie("recharts-layer",n);return B.createElement("g",sy({className:o},Ne(i,!0),{ref:t}),r)}),hn=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o]},rh,y4;function LT(){if(y4)return rh;y4=1;function e(t,r,n){var i=-1,o=t.length;r<0&&(r=-r>o?0:o+r),n=n>o?o:n,n<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var s=Array(o);++i<o;)s[i]=t[i+r];return s}return rh=e,rh}var nh,v4;function FT(){if(v4)return nh;v4=1;var e=LT();function t(r,n,i){var o=r.length;return i=i===void 0?o:i,!n&&i>=o?r:e(r,n,i)}return nh=t,nh}var ah,g4;function j_(){if(g4)return ah;g4=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",i=t+r+n,o="\\ufe0e\\ufe0f",s="\\u200d",u=RegExp("["+s+e+i+o+"]");function f(d){return u.test(d)}return ah=f,ah}var ih,b4;function BT(){if(b4)return ih;b4=1;function e(t){return t.split("")}return ih=e,ih}var oh,x4;function qT(){if(x4)return oh;x4=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",i=t+r+n,o="\\ufe0e\\ufe0f",s="["+e+"]",u="["+i+"]",f="\\ud83c[\\udffb-\\udfff]",d="(?:"+u+"|"+f+")",m="[^"+e+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",g="\\u200d",_=d+"?",S="["+o+"]?",x="(?:"+g+"(?:"+[m,h,y].join("|")+")"+S+_+")*",j=S+_+x,A="(?:"+[m+u+"?",u,h,y,s].join("|")+")",E=RegExp(f+"(?="+f+")|"+A+j,"g");function T(O){return O.match(E)||[]}return oh=T,oh}var lh,w4;function zT(){if(w4)return lh;w4=1;var e=BT(),t=j_(),r=qT();function n(i){return t(i)?r(i):e(i)}return lh=n,lh}var sh,S4;function UT(){if(S4)return sh;S4=1;var e=FT(),t=j_(),r=zT(),n=x_();function i(o){return function(s){s=n(s);var u=t(s)?r(s):void 0,f=u?u[0]:s.charAt(0),d=u?e(u,1).join(""):s.slice(1);return f[o]()+d}}return sh=i,sh}var uh,_4;function WT(){if(_4)return uh;_4=1;var e=UT(),t=e("toUpperCase");return uh=t,uh}var HT=WT();const Oc=We(HT);function Ve(e){return function(){return e}}const O_=Math.cos,ju=Math.sin,Rr=Math.sqrt,Ou=Math.PI,Ac=2*Ou,uy=Math.PI,cy=2*uy,pa=1e-6,VT=cy-pa;function A_(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=arguments[t]+e[t]}function KT(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return A_;const r=10**t;return function(n){this._+=n[0];for(let i=1,o=n.length;i<o;++i)this._+=Math.round(arguments[i]*r)/r+n[i]}}class GT{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?A_:KT(t)}moveTo(t,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,r){this._append`L${this._x1=+t},${this._y1=+r}`}quadraticCurveTo(t,r,n,i){this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+i}`}bezierCurveTo(t,r,n,i,o,s){this._append`C${+t},${+r},${+n},${+i},${this._x1=+o},${this._y1=+s}`}arcTo(t,r,n,i,o){if(t=+t,r=+r,n=+n,i=+i,o=+o,o<0)throw new Error(`negative radius: ${o}`);let s=this._x1,u=this._y1,f=n-t,d=i-r,m=s-t,h=u-r,y=m*m+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=r}`;else if(y>pa)if(!(Math.abs(h*f-d*m)>pa)||!o)this._append`L${this._x1=t},${this._y1=r}`;else{let g=n-s,_=i-u,S=f*f+d*d,x=g*g+_*_,j=Math.sqrt(S),A=Math.sqrt(y),E=o*Math.tan((uy-Math.acos((S+y-x)/(2*j*A)))/2),T=E/A,O=E/j;Math.abs(T-1)>pa&&this._append`L${t+T*m},${r+T*h}`,this._append`A${o},${o},0,0,${+(h*g>m*_)},${this._x1=t+O*f},${this._y1=r+O*d}`}}arc(t,r,n,i,o,s){if(t=+t,r=+r,n=+n,s=!!s,n<0)throw new Error(`negative radius: ${n}`);let u=n*Math.cos(i),f=n*Math.sin(i),d=t+u,m=r+f,h=1^s,y=s?i-o:o-i;this._x1===null?this._append`M${d},${m}`:(Math.abs(this._x1-d)>pa||Math.abs(this._y1-m)>pa)&&this._append`L${d},${m}`,n&&(y<0&&(y=y%cy+cy),y>VT?this._append`A${n},${n},0,1,${h},${t-u},${r-f}A${n},${n},0,1,${h},${this._x1=d},${this._y1=m}`:y>pa&&this._append`A${n},${n},0,${+(y>=uy)},${h},${this._x1=t+n*Math.cos(o)},${this._y1=r+n*Math.sin(o)}`)}rect(t,r,n,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+i}h${-n}Z`}toString(){return this._}}function F2(e){let t=3;return e.digits=function(r){if(!arguments.length)return t;if(r==null)t=null;else{const n=Math.floor(r);if(!(n>=0))throw new RangeError(`invalid digits: ${r}`);t=n}return e},()=>new GT(t)}function B2(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function E_(e){this._context=e}E_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Ec(e){return new E_(e)}function P_(e){return e[0]}function k_(e){return e[1]}function T_(e,t){var r=Ve(!0),n=null,i=Ec,o=null,s=F2(u);e=typeof e=="function"?e:e===void 0?P_:Ve(e),t=typeof t=="function"?t:t===void 0?k_:Ve(t);function u(f){var d,m=(f=B2(f)).length,h,y=!1,g;for(n==null&&(o=i(g=s())),d=0;d<=m;++d)!(d<m&&r(h=f[d],d,f))===y&&((y=!y)?o.lineStart():o.lineEnd()),y&&o.point(+e(h,d,f),+t(h,d,f));if(g)return o=null,g+""||null}return u.x=function(f){return arguments.length?(e=typeof f=="function"?f:Ve(+f),u):e},u.y=function(f){return arguments.length?(t=typeof f=="function"?f:Ve(+f),u):t},u.defined=function(f){return arguments.length?(r=typeof f=="function"?f:Ve(!!f),u):r},u.curve=function(f){return arguments.length?(i=f,n!=null&&(o=i(n)),u):i},u.context=function(f){return arguments.length?(f==null?n=o=null:o=i(n=f),u):n},u}function ou(e,t,r){var n=null,i=Ve(!0),o=null,s=Ec,u=null,f=F2(d);e=typeof e=="function"?e:e===void 0?P_:Ve(+e),t=typeof t=="function"?t:Ve(t===void 0?0:+t),r=typeof r=="function"?r:r===void 0?k_:Ve(+r);function d(h){var y,g,_,S=(h=B2(h)).length,x,j=!1,A,E=new Array(S),T=new Array(S);for(o==null&&(u=s(A=f())),y=0;y<=S;++y){if(!(y<S&&i(x=h[y],y,h))===j)if(j=!j)g=y,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),_=y-1;_>=g;--_)u.point(E[_],T[_]);u.lineEnd(),u.areaEnd()}j&&(E[y]=+e(x,y,h),T[y]=+t(x,y,h),u.point(n?+n(x,y,h):E[y],r?+r(x,y,h):T[y]))}if(A)return u=null,A+""||null}function m(){return T_().defined(i).curve(s).context(o)}return d.x=function(h){return arguments.length?(e=typeof h=="function"?h:Ve(+h),n=null,d):e},d.x0=function(h){return arguments.length?(e=typeof h=="function"?h:Ve(+h),d):e},d.x1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:Ve(+h),d):n},d.y=function(h){return arguments.length?(t=typeof h=="function"?h:Ve(+h),r=null,d):t},d.y0=function(h){return arguments.length?(t=typeof h=="function"?h:Ve(+h),d):t},d.y1=function(h){return arguments.length?(r=h==null?null:typeof h=="function"?h:Ve(+h),d):r},d.lineX0=d.lineY0=function(){return m().x(e).y(t)},d.lineY1=function(){return m().x(e).y(r)},d.lineX1=function(){return m().x(n).y(t)},d.defined=function(h){return arguments.length?(i=typeof h=="function"?h:Ve(!!h),d):i},d.curve=function(h){return arguments.length?(s=h,o!=null&&(u=s(o)),d):s},d.context=function(h){return arguments.length?(h==null?o=u=null:u=s(o=h),d):o},d}class C_{constructor(t,r){this._context=t,this._x=r}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,r){switch(t=+t,r=+r,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,r,t,r):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+r)/2,t,this._y0,t,r);break}}this._x0=t,this._y0=r}}function XT(e){return new C_(e,!0)}function YT(e){return new C_(e,!1)}const q2={draw(e,t){const r=Rr(t/Ou);e.moveTo(r,0),e.arc(0,0,r,0,Ac)}},QT={draw(e,t){const r=Rr(t/5)/2;e.moveTo(-3*r,-r),e.lineTo(-r,-r),e.lineTo(-r,-3*r),e.lineTo(r,-3*r),e.lineTo(r,-r),e.lineTo(3*r,-r),e.lineTo(3*r,r),e.lineTo(r,r),e.lineTo(r,3*r),e.lineTo(-r,3*r),e.lineTo(-r,r),e.lineTo(-3*r,r),e.closePath()}},N_=Rr(1/3),JT=N_*2,ZT={draw(e,t){const r=Rr(t/JT),n=r*N_;e.moveTo(0,-r),e.lineTo(n,0),e.lineTo(0,r),e.lineTo(-n,0),e.closePath()}},eC={draw(e,t){const r=Rr(t),n=-r/2;e.rect(n,n,r,r)}},tC=.8908130915292852,D_=ju(Ou/10)/ju(7*Ou/10),rC=ju(Ac/10)*D_,nC=-O_(Ac/10)*D_,aC={draw(e,t){const r=Rr(t*tC),n=rC*r,i=nC*r;e.moveTo(0,-r),e.lineTo(n,i);for(let o=1;o<5;++o){const s=Ac*o/5,u=O_(s),f=ju(s);e.lineTo(f*r,-u*r),e.lineTo(u*n-f*i,f*n+u*i)}e.closePath()}},ch=Rr(3),iC={draw(e,t){const r=-Rr(t/(ch*3));e.moveTo(0,r*2),e.lineTo(-ch*r,-r),e.lineTo(ch*r,-r),e.closePath()}},ur=-.5,cr=Rr(3)/2,fy=1/Rr(12),oC=(fy/2+1)*3,lC={draw(e,t){const r=Rr(t/oC),n=r/2,i=r*fy,o=n,s=r*fy+r,u=-o,f=s;e.moveTo(n,i),e.lineTo(o,s),e.lineTo(u,f),e.lineTo(ur*n-cr*i,cr*n+ur*i),e.lineTo(ur*o-cr*s,cr*o+ur*s),e.lineTo(ur*u-cr*f,cr*u+ur*f),e.lineTo(ur*n+cr*i,ur*i-cr*n),e.lineTo(ur*o+cr*s,ur*s-cr*o),e.lineTo(ur*u+cr*f,ur*f-cr*u),e.closePath()}};function sC(e,t){let r=null,n=F2(i);e=typeof e=="function"?e:Ve(e||q2),t=typeof t=="function"?t:Ve(t===void 0?64:+t);function i(){let o;if(r||(r=o=n()),e.apply(this,arguments).draw(r,+t.apply(this,arguments)),o)return r=null,o+""||null}return i.type=function(o){return arguments.length?(e=typeof o=="function"?o:Ve(o),i):e},i.size=function(o){return arguments.length?(t=typeof o=="function"?o:Ve(+o),i):t},i.context=function(o){return arguments.length?(r=o??null,i):r},i}function Au(){}function Eu(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function M_(e){this._context=e}M_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Eu(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Eu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function uC(e){return new M_(e)}function R_(e){this._context=e}R_.prototype={areaStart:Au,areaEnd:Au,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Eu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function cC(e){return new R_(e)}function I_(e){this._context=e}I_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var r=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(r,n):this._context.moveTo(r,n);break;case 3:this._point=4;default:Eu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function fC(e){return new I_(e)}function $_(e){this._context=e}$_.prototype={areaStart:Au,areaEnd:Au,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function dC(e){return new $_(e)}function j4(e){return e<0?-1:1}function O4(e,t,r){var n=e._x1-e._x0,i=t-e._x1,o=(e._y1-e._y0)/(n||i<0&&-0),s=(r-e._y1)/(i||n<0&&-0),u=(o*i+s*n)/(n+i);return(j4(o)+j4(s))*Math.min(Math.abs(o),Math.abs(s),.5*Math.abs(u))||0}function A4(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}function fh(e,t,r){var n=e._x0,i=e._y0,o=e._x1,s=e._y1,u=(o-n)/3;e._context.bezierCurveTo(n+u,i+u*t,o-u,s-u*r,o,s)}function Pu(e){this._context=e}Pu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:fh(this,this._t0,A4(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var r=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,fh(this,A4(this,r=O4(this,e,t)),r);break;default:fh(this,this._t0,r=O4(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=r}}};function L_(e){this._context=new F_(e)}(L_.prototype=Object.create(Pu.prototype)).point=function(e,t){Pu.prototype.point.call(this,t,e)};function F_(e){this._context=e}F_.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,i,o){this._context.bezierCurveTo(t,e,n,r,o,i)}};function pC(e){return new Pu(e)}function hC(e){return new L_(e)}function B_(e){this._context=e}B_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),r===2)this._context.lineTo(e[1],t[1]);else for(var n=E4(e),i=E4(t),o=0,s=1;s<r;++o,++s)this._context.bezierCurveTo(n[0][o],i[0][o],n[1][o],i[1][o],e[s],t[s]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function E4(e){var t,r=e.length-1,n,i=new Array(r),o=new Array(r),s=new Array(r);for(i[0]=0,o[0]=2,s[0]=e[0]+2*e[1],t=1;t<r-1;++t)i[t]=1,o[t]=4,s[t]=4*e[t]+2*e[t+1];for(i[r-1]=2,o[r-1]=7,s[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=i[t]/o[t-1],o[t]-=n,s[t]-=n*s[t-1];for(i[r-1]=s[r-1]/o[r-1],t=r-2;t>=0;--t)i[t]=(s[t]-i[t+1])/o[t];for(o[r-1]=(e[r]+i[r-1])/2,t=0;t<r-1;++t)o[t]=2*e[t+1]-i[t+1];return[i,o]}function mC(e){return new B_(e)}function Pc(e,t){this._context=e,this._t=t}Pc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function yC(e){return new Pc(e,.5)}function vC(e){return new Pc(e,0)}function gC(e){return new Pc(e,1)}function ci(e,t){if((s=e.length)>1)for(var r=1,n,i,o=e[t[0]],s,u=o.length;r<s;++r)for(i=o,o=e[t[r]],n=0;n<u;++n)o[n][1]+=o[n][0]=isNaN(i[n][1])?i[n][0]:i[n][1]}function dy(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function bC(e,t){return e[t]}function xC(e){const t=[];return t.key=e,t}function wC(){var e=Ve([]),t=dy,r=ci,n=bC;function i(o){var s=Array.from(e.apply(this,arguments),xC),u,f=s.length,d=-1,m;for(const h of o)for(u=0,++d;u<f;++u)(s[u][d]=[0,+n(h,s[u].key,d,o)]).data=h;for(u=0,m=B2(t(s));u<f;++u)s[m[u]].index=u;return r(s,m),s}return i.keys=function(o){return arguments.length?(e=typeof o=="function"?o:Ve(Array.from(o)),i):e},i.value=function(o){return arguments.length?(n=typeof o=="function"?o:Ve(+o),i):n},i.order=function(o){return arguments.length?(t=o==null?dy:typeof o=="function"?o:Ve(Array.from(o)),i):t},i.offset=function(o){return arguments.length?(r=o??ci,i):r},i}function SC(e,t){if((n=e.length)>0){for(var r,n,i=0,o=e[0].length,s;i<o;++i){for(s=r=0;r<n;++r)s+=e[r][i][1]||0;if(s)for(r=0;r<n;++r)e[r][i][1]/=s}ci(e,t)}}function _C(e,t){if((i=e.length)>0){for(var r=0,n=e[t[0]],i,o=n.length;r<o;++r){for(var s=0,u=0;s<i;++s)u+=e[s][r][1]||0;n[r][1]+=n[r][0]=-u/2}ci(e,t)}}function jC(e,t){if(!(!((s=e.length)>0)||!((o=(i=e[t[0]]).length)>0))){for(var r=0,n=1,i,o,s;n<o;++n){for(var u=0,f=0,d=0;u<s;++u){for(var m=e[t[u]],h=m[n][1]||0,y=m[n-1][1]||0,g=(h-y)/2,_=0;_<u;++_){var S=e[t[_]],x=S[n][1]||0,j=S[n-1][1]||0;g+=x-j}f+=h,d+=g*h}i[n-1][1]+=i[n-1][0]=r,f&&(r-=d/f)}i[n-1][1]+=i[n-1][0]=r,ci(e,t)}}function Zo(e){"@babel/helpers - typeof";return Zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zo(e)}var OC=["type","size","sizeType"];function py(){return py=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},py.apply(this,arguments)}function P4(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function k4(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?P4(Object(r),!0).forEach(function(n){AC(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P4(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function AC(e,t,r){return t=EC(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function EC(e){var t=PC(e,"string");return Zo(t)=="symbol"?t:t+""}function PC(e,t){if(Zo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Zo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kC(e,t){if(e==null)return{};var r=TC(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function TC(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var q_={symbolCircle:q2,symbolCross:QT,symbolDiamond:ZT,symbolSquare:eC,symbolStar:aC,symbolTriangle:iC,symbolWye:lC},CC=Math.PI/180,NC=function(t){var r="symbol".concat(Oc(t));return q_[r]||q2},DC=function(t,r,n){if(r==="area")return t;switch(n){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var i=18*CC;return 1.25*t*t*(Math.tan(i)-Math.tan(i*2)*Math.pow(Math.tan(i),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},MC=function(t,r){q_["symbol".concat(Oc(t))]=r},z2=function(t){var r=t.type,n=r===void 0?"circle":r,i=t.size,o=i===void 0?64:i,s=t.sizeType,u=s===void 0?"area":s,f=kC(t,OC),d=k4(k4({},f),{},{type:n,size:o,sizeType:u}),m=function(){var x=NC(n),j=sC().type(x).size(DC(o,u,n));return j()},h=d.className,y=d.cx,g=d.cy,_=Ne(d,!0);return y===+y&&g===+g&&o===+o?B.createElement("path",py({},_,{className:Ie("recharts-symbols",h),transform:"translate(".concat(y,", ").concat(g,")"),d:m()})):null};z2.registerSymbol=MC;function fi(e){"@babel/helpers - typeof";return fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fi(e)}function hy(){return hy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},hy.apply(this,arguments)}function T4(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function RC(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?T4(Object(r),!0).forEach(function(n){el(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T4(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function IC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,U_(n.key),n)}}function LC(e,t,r){return t&&$C(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function FC(e,t,r){return t=ku(t),BC(e,z_()?Reflect.construct(t,r||[],ku(e).constructor):t.apply(e,r))}function BC(e,t){if(t&&(fi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qC(e)}function qC(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(z_=function(){return!!e})()}function ku(e){return ku=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ku(e)}function zC(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&my(e,t)}function my(e,t){return my=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},my(e,t)}function el(e,t,r){return t=U_(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U_(e){var t=UC(e,"string");return fi(t)=="symbol"?t:t+""}function UC(e,t){if(fi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(fi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var fr=32,U2=(function(e){function t(){return IC(this,t),FC(this,t,arguments)}return zC(t,e),LC(t,[{key:"renderIcon",value:function(n){var i=this.props.inactiveColor,o=fr/2,s=fr/6,u=fr/3,f=n.inactive?i:n.color;if(n.type==="plainline")return B.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:n.payload.strokeDasharray,x1:0,y1:o,x2:fr,y2:o,className:"recharts-legend-icon"});if(n.type==="line")return B.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(o,"h").concat(u,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*u,",").concat(o,`
            H`).concat(fr,"M").concat(2*u,",").concat(o,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(u,",").concat(o),className:"recharts-legend-icon"});if(n.type==="rect")return B.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(fr/8,"h").concat(fr,"v").concat(fr*3/4,"h").concat(-fr,"z"),className:"recharts-legend-icon"});if(B.isValidElement(n.legendIcon)){var d=RC({},n);return delete d.legendIcon,B.cloneElement(n.legendIcon,d)}return B.createElement(z2,{fill:f,cx:o,cy:o,size:fr,sizeType:"diameter",type:n.type})}},{key:"renderItems",value:function(){var n=this,i=this.props,o=i.payload,s=i.iconSize,u=i.layout,f=i.formatter,d=i.inactiveColor,m={x:0,y:0,width:fr,height:fr},h={display:u==="horizontal"?"inline-block":"block",marginRight:10},y={display:"inline-block",verticalAlign:"middle",marginRight:4};return o.map(function(g,_){var S=g.formatter||f,x=Ie(el(el({"recharts-legend-item":!0},"legend-item-".concat(_),!0),"inactive",g.inactive));if(g.type==="none")return null;var j=Pe(g.value)?null:g.value;hn(!Pe(g.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var A=g.inactive?d:g.color;return B.createElement("li",hy({className:x,style:h,key:"legend-item-".concat(_)},_u(n.props,g,_)),B.createElement(ly,{width:s,height:s,viewBox:m,style:y},n.renderIcon(g)),B.createElement("span",{className:"recharts-legend-item-text",style:{color:A}},S?S(j,g,_):j))})}},{key:"render",value:function(){var n=this.props,i=n.payload,o=n.layout,s=n.align;if(!i||!i.length)return null;var u={padding:0,margin:0,textAlign:o==="horizontal"?s:"left"};return B.createElement("ul",{className:"recharts-default-legend",style:u},this.renderItems())}}])})(D.PureComponent);el(U2,"displayName","Legend");el(U2,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var dh,C4;function WC(){if(C4)return dh;C4=1;var e=Sc();function t(){this.__data__=new e,this.size=0}return dh=t,dh}var ph,N4;function HC(){if(N4)return ph;N4=1;function e(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n}return ph=e,ph}var hh,D4;function VC(){if(D4)return hh;D4=1;function e(t){return this.__data__.get(t)}return hh=e,hh}var mh,M4;function KC(){if(M4)return mh;M4=1;function e(t){return this.__data__.has(t)}return mh=e,mh}var yh,R4;function GC(){if(R4)return yh;R4=1;var e=Sc(),t=D2(),r=M2(),n=200;function i(o,s){var u=this.__data__;if(u instanceof e){var f=u.__data__;if(!t||f.length<n-1)return f.push([o,s]),this.size=++u.size,this;u=this.__data__=new r(f)}return u.set(o,s),this.size=u.size,this}return yh=i,yh}var vh,I4;function W_(){if(I4)return vh;I4=1;var e=Sc(),t=WC(),r=HC(),n=VC(),i=KC(),o=GC();function s(u){var f=this.__data__=new e(u);this.size=f.size}return s.prototype.clear=t,s.prototype.delete=r,s.prototype.get=n,s.prototype.has=i,s.prototype.set=o,vh=s,vh}var gh,$4;function XC(){if($4)return gh;$4=1;var e="__lodash_hash_undefined__";function t(r){return this.__data__.set(r,e),this}return gh=t,gh}var bh,L4;function YC(){if(L4)return bh;L4=1;function e(t){return this.__data__.has(t)}return bh=e,bh}var xh,F4;function H_(){if(F4)return xh;F4=1;var e=M2(),t=XC(),r=YC();function n(i){var o=-1,s=i==null?0:i.length;for(this.__data__=new e;++o<s;)this.add(i[o])}return n.prototype.add=n.prototype.push=t,n.prototype.has=r,xh=n,xh}var wh,B4;function V_(){if(B4)return wh;B4=1;function e(t,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(t[n],n,t))return!0;return!1}return wh=e,wh}var Sh,q4;function K_(){if(q4)return Sh;q4=1;function e(t,r){return t.has(r)}return Sh=e,Sh}var _h,z4;function G_(){if(z4)return _h;z4=1;var e=H_(),t=V_(),r=K_(),n=1,i=2;function o(s,u,f,d,m,h){var y=f&n,g=s.length,_=u.length;if(g!=_&&!(y&&_>g))return!1;var S=h.get(s),x=h.get(u);if(S&&x)return S==u&&x==s;var j=-1,A=!0,E=f&i?new e:void 0;for(h.set(s,u),h.set(u,s);++j<g;){var T=s[j],O=u[j];if(d)var P=y?d(O,T,j,u,s,h):d(T,O,j,s,u,h);if(P!==void 0){if(P)continue;A=!1;break}if(E){if(!t(u,function(C,R){if(!r(E,R)&&(T===C||m(T,C,f,d,h)))return E.push(R)})){A=!1;break}}else if(!(T===O||m(T,O,f,d,h))){A=!1;break}}return h.delete(s),h.delete(u),A}return _h=o,_h}var jh,U4;function QC(){if(U4)return jh;U4=1;var e=Jr(),t=e.Uint8Array;return jh=t,jh}var Oh,W4;function JC(){if(W4)return Oh;W4=1;function e(t){var r=-1,n=Array(t.size);return t.forEach(function(i,o){n[++r]=[o,i]}),n}return Oh=e,Oh}var Ah,H4;function W2(){if(H4)return Ah;H4=1;function e(t){var r=-1,n=Array(t.size);return t.forEach(function(i){n[++r]=i}),n}return Ah=e,Ah}var Eh,V4;function ZC(){if(V4)return Eh;V4=1;var e=$l(),t=QC(),r=N2(),n=G_(),i=JC(),o=W2(),s=1,u=2,f="[object Boolean]",d="[object Date]",m="[object Error]",h="[object Map]",y="[object Number]",g="[object RegExp]",_="[object Set]",S="[object String]",x="[object Symbol]",j="[object ArrayBuffer]",A="[object DataView]",E=e?e.prototype:void 0,T=E?E.valueOf:void 0;function O(P,C,R,$,z,q,M){switch(R){case A:if(P.byteLength!=C.byteLength||P.byteOffset!=C.byteOffset)return!1;P=P.buffer,C=C.buffer;case j:return!(P.byteLength!=C.byteLength||!q(new t(P),new t(C)));case f:case d:case y:return r(+P,+C);case m:return P.name==C.name&&P.message==C.message;case g:case S:return P==C+"";case h:var H=i;case _:var X=$&s;if(H||(H=o),P.size!=C.size&&!X)return!1;var G=M.get(P);if(G)return G==C;$|=u,M.set(P,C);var J=n(H(P),H(C),$,z,q,M);return M.delete(P),J;case x:if(T)return T.call(P)==T.call(C)}return!1}return Eh=O,Eh}var Ph,K4;function X_(){if(K4)return Ph;K4=1;function e(t,r){for(var n=-1,i=r.length,o=t.length;++n<i;)t[o+n]=r[n];return t}return Ph=e,Ph}var kh,G4;function eN(){if(G4)return kh;G4=1;var e=X_(),t=Ht();function r(n,i,o){var s=i(n);return t(n)?s:e(s,o(n))}return kh=r,kh}var Th,X4;function tN(){if(X4)return Th;X4=1;function e(t,r){for(var n=-1,i=t==null?0:t.length,o=0,s=[];++n<i;){var u=t[n];r(u,n,t)&&(s[o++]=u)}return s}return Th=e,Th}var Ch,Y4;function rN(){if(Y4)return Ch;Y4=1;function e(){return[]}return Ch=e,Ch}var Nh,Q4;function nN(){if(Q4)return Nh;Q4=1;var e=tN(),t=rN(),r=Object.prototype,n=r.propertyIsEnumerable,i=Object.getOwnPropertySymbols,o=i?function(s){return s==null?[]:(s=Object(s),e(i(s),function(u){return n.call(s,u)}))}:t;return Nh=o,Nh}var Dh,J4;function aN(){if(J4)return Dh;J4=1;function e(t,r){for(var n=-1,i=Array(t);++n<t;)i[n]=r(n);return i}return Dh=e,Dh}var Mh,Z4;function iN(){if(Z4)return Mh;Z4=1;var e=Sn(),t=_n(),r="[object Arguments]";function n(i){return t(i)&&e(i)==r}return Mh=n,Mh}var Rh,ew;function H2(){if(ew)return Rh;ew=1;var e=iN(),t=_n(),r=Object.prototype,n=r.hasOwnProperty,i=r.propertyIsEnumerable,o=e((function(){return arguments})())?e:function(s){return t(s)&&n.call(s,"callee")&&!i.call(s,"callee")};return Rh=o,Rh}var Uo={exports:{}},Ih,tw;function oN(){if(tw)return Ih;tw=1;function e(){return!1}return Ih=e,Ih}Uo.exports;var rw;function Y_(){return rw||(rw=1,(function(e,t){var r=Jr(),n=oN(),i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===i,u=s?r.Buffer:void 0,f=u?u.isBuffer:void 0,d=f||n;e.exports=d})(Uo,Uo.exports)),Uo.exports}var $h,nw;function V2(){if(nw)return $h;nw=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function r(n,i){var o=typeof n;return i=i??e,!!i&&(o=="number"||o!="symbol"&&t.test(n))&&n>-1&&n%1==0&&n<i}return $h=r,$h}var Lh,aw;function K2(){if(aw)return Lh;aw=1;var e=9007199254740991;function t(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=e}return Lh=t,Lh}var Fh,iw;function lN(){if(iw)return Fh;iw=1;var e=Sn(),t=K2(),r=_n(),n="[object Arguments]",i="[object Array]",o="[object Boolean]",s="[object Date]",u="[object Error]",f="[object Function]",d="[object Map]",m="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",_="[object String]",S="[object WeakMap]",x="[object ArrayBuffer]",j="[object DataView]",A="[object Float32Array]",E="[object Float64Array]",T="[object Int8Array]",O="[object Int16Array]",P="[object Int32Array]",C="[object Uint8Array]",R="[object Uint8ClampedArray]",$="[object Uint16Array]",z="[object Uint32Array]",q={};q[A]=q[E]=q[T]=q[O]=q[P]=q[C]=q[R]=q[$]=q[z]=!0,q[n]=q[i]=q[x]=q[o]=q[j]=q[s]=q[u]=q[f]=q[d]=q[m]=q[h]=q[y]=q[g]=q[_]=q[S]=!1;function M(H){return r(H)&&t(H.length)&&!!q[e(H)]}return Fh=M,Fh}var Bh,ow;function Q_(){if(ow)return Bh;ow=1;function e(t){return function(r){return t(r)}}return Bh=e,Bh}var Wo={exports:{}};Wo.exports;var lw;function sN(){return lw||(lw=1,(function(e,t){var r=v_(),n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===n,s=o&&r.process,u=(function(){try{var f=i&&i.require&&i.require("util").types;return f||s&&s.binding&&s.binding("util")}catch{}})();e.exports=u})(Wo,Wo.exports)),Wo.exports}var qh,sw;function J_(){if(sw)return qh;sw=1;var e=lN(),t=Q_(),r=sN(),n=r&&r.isTypedArray,i=n?t(n):e;return qh=i,qh}var zh,uw;function uN(){if(uw)return zh;uw=1;var e=aN(),t=H2(),r=Ht(),n=Y_(),i=V2(),o=J_(),s=Object.prototype,u=s.hasOwnProperty;function f(d,m){var h=r(d),y=!h&&t(d),g=!h&&!y&&n(d),_=!h&&!y&&!g&&o(d),S=h||y||g||_,x=S?e(d.length,String):[],j=x.length;for(var A in d)(m||u.call(d,A))&&!(S&&(A=="length"||g&&(A=="offset"||A=="parent")||_&&(A=="buffer"||A=="byteLength"||A=="byteOffset")||i(A,j)))&&x.push(A);return x}return zh=f,zh}var Uh,cw;function cN(){if(cw)return Uh;cw=1;var e=Object.prototype;function t(r){var n=r&&r.constructor,i=typeof n=="function"&&n.prototype||e;return r===i}return Uh=t,Uh}var Wh,fw;function Z_(){if(fw)return Wh;fw=1;function e(t,r){return function(n){return t(r(n))}}return Wh=e,Wh}var Hh,dw;function fN(){if(dw)return Hh;dw=1;var e=Z_(),t=e(Object.keys,Object);return Hh=t,Hh}var Vh,pw;function dN(){if(pw)return Vh;pw=1;var e=cN(),t=fN(),r=Object.prototype,n=r.hasOwnProperty;function i(o){if(!e(o))return t(o);var s=[];for(var u in Object(o))n.call(o,u)&&u!="constructor"&&s.push(u);return s}return Vh=i,Vh}var Kh,hw;function ql(){if(hw)return Kh;hw=1;var e=C2(),t=K2();function r(n){return n!=null&&t(n.length)&&!e(n)}return Kh=r,Kh}var Gh,mw;function kc(){if(mw)return Gh;mw=1;var e=uN(),t=dN(),r=ql();function n(i){return r(i)?e(i):t(i)}return Gh=n,Gh}var Xh,yw;function pN(){if(yw)return Xh;yw=1;var e=eN(),t=nN(),r=kc();function n(i){return e(i,r,t)}return Xh=n,Xh}var Yh,vw;function hN(){if(vw)return Yh;vw=1;var e=pN(),t=1,r=Object.prototype,n=r.hasOwnProperty;function i(o,s,u,f,d,m){var h=u&t,y=e(o),g=y.length,_=e(s),S=_.length;if(g!=S&&!h)return!1;for(var x=g;x--;){var j=y[x];if(!(h?j in s:n.call(s,j)))return!1}var A=m.get(o),E=m.get(s);if(A&&E)return A==s&&E==o;var T=!0;m.set(o,s),m.set(s,o);for(var O=h;++x<g;){j=y[x];var P=o[j],C=s[j];if(f)var R=h?f(C,P,j,s,o,m):f(P,C,j,o,s,m);if(!(R===void 0?P===C||d(P,C,u,f,m):R)){T=!1;break}O||(O=j=="constructor")}if(T&&!O){var $=o.constructor,z=s.constructor;$!=z&&"constructor"in o&&"constructor"in s&&!(typeof $=="function"&&$ instanceof $&&typeof z=="function"&&z instanceof z)&&(T=!1)}return m.delete(o),m.delete(s),T}return Yh=i,Yh}var Qh,gw;function mN(){if(gw)return Qh;gw=1;var e=_a(),t=Jr(),r=e(t,"DataView");return Qh=r,Qh}var Jh,bw;function yN(){if(bw)return Jh;bw=1;var e=_a(),t=Jr(),r=e(t,"Promise");return Jh=r,Jh}var Zh,xw;function ej(){if(xw)return Zh;xw=1;var e=_a(),t=Jr(),r=e(t,"Set");return Zh=r,Zh}var e0,ww;function vN(){if(ww)return e0;ww=1;var e=_a(),t=Jr(),r=e(t,"WeakMap");return e0=r,e0}var t0,Sw;function gN(){if(Sw)return t0;Sw=1;var e=mN(),t=D2(),r=yN(),n=ej(),i=vN(),o=Sn(),s=g_(),u="[object Map]",f="[object Object]",d="[object Promise]",m="[object Set]",h="[object WeakMap]",y="[object DataView]",g=s(e),_=s(t),S=s(r),x=s(n),j=s(i),A=o;return(e&&A(new e(new ArrayBuffer(1)))!=y||t&&A(new t)!=u||r&&A(r.resolve())!=d||n&&A(new n)!=m||i&&A(new i)!=h)&&(A=function(E){var T=o(E),O=T==f?E.constructor:void 0,P=O?s(O):"";if(P)switch(P){case g:return y;case _:return u;case S:return d;case x:return m;case j:return h}return T}),t0=A,t0}var r0,_w;function bN(){if(_w)return r0;_w=1;var e=W_(),t=G_(),r=ZC(),n=hN(),i=gN(),o=Ht(),s=Y_(),u=J_(),f=1,d="[object Arguments]",m="[object Array]",h="[object Object]",y=Object.prototype,g=y.hasOwnProperty;function _(S,x,j,A,E,T){var O=o(S),P=o(x),C=O?m:i(S),R=P?m:i(x);C=C==d?h:C,R=R==d?h:R;var $=C==h,z=R==h,q=C==R;if(q&&s(S)){if(!s(x))return!1;O=!0,$=!1}if(q&&!$)return T||(T=new e),O||u(S)?t(S,x,j,A,E,T):r(S,x,C,j,A,E,T);if(!(j&f)){var M=$&&g.call(S,"__wrapped__"),H=z&&g.call(x,"__wrapped__");if(M||H){var X=M?S.value():S,G=H?x.value():x;return T||(T=new e),E(X,G,j,A,T)}}return q?(T||(T=new e),n(S,x,j,A,E,T)):!1}return r0=_,r0}var n0,jw;function G2(){if(jw)return n0;jw=1;var e=bN(),t=_n();function r(n,i,o,s,u){return n===i?!0:n==null||i==null||!t(n)&&!t(i)?n!==n&&i!==i:e(n,i,o,s,r,u)}return n0=r,n0}var a0,Ow;function xN(){if(Ow)return a0;Ow=1;var e=W_(),t=G2(),r=1,n=2;function i(o,s,u,f){var d=u.length,m=d,h=!f;if(o==null)return!m;for(o=Object(o);d--;){var y=u[d];if(h&&y[2]?y[1]!==o[y[0]]:!(y[0]in o))return!1}for(;++d<m;){y=u[d];var g=y[0],_=o[g],S=y[1];if(h&&y[2]){if(_===void 0&&!(g in o))return!1}else{var x=new e;if(f)var j=f(_,S,g,o,s,x);if(!(j===void 0?t(S,_,r|n,f,x):j))return!1}}return!0}return a0=i,a0}var i0,Aw;function tj(){if(Aw)return i0;Aw=1;var e=Gn();function t(r){return r===r&&!e(r)}return i0=t,i0}var o0,Ew;function wN(){if(Ew)return o0;Ew=1;var e=tj(),t=kc();function r(n){for(var i=t(n),o=i.length;o--;){var s=i[o],u=n[s];i[o]=[s,u,e(u)]}return i}return o0=r,o0}var l0,Pw;function rj(){if(Pw)return l0;Pw=1;function e(t,r){return function(n){return n==null?!1:n[t]===r&&(r!==void 0||t in Object(n))}}return l0=e,l0}var s0,kw;function SN(){if(kw)return s0;kw=1;var e=xN(),t=wN(),r=rj();function n(i){var o=t(i);return o.length==1&&o[0][2]?r(o[0][0],o[0][1]):function(s){return s===i||e(s,i,o)}}return s0=n,s0}var u0,Tw;function _N(){if(Tw)return u0;Tw=1;function e(t,r){return t!=null&&r in Object(t)}return u0=e,u0}var c0,Cw;function jN(){if(Cw)return c0;Cw=1;var e=w_(),t=H2(),r=Ht(),n=V2(),i=K2(),o=jc();function s(u,f,d){f=e(f,u);for(var m=-1,h=f.length,y=!1;++m<h;){var g=o(f[m]);if(!(y=u!=null&&d(u,g)))break;u=u[g]}return y||++m!=h?y:(h=u==null?0:u.length,!!h&&i(h)&&n(g,h)&&(r(u)||t(u)))}return c0=s,c0}var f0,Nw;function ON(){if(Nw)return f0;Nw=1;var e=_N(),t=jN();function r(n,i){return n!=null&&t(n,i,e)}return f0=r,f0}var d0,Dw;function AN(){if(Dw)return d0;Dw=1;var e=G2(),t=S_(),r=ON(),n=T2(),i=tj(),o=rj(),s=jc(),u=1,f=2;function d(m,h){return n(m)&&i(h)?o(s(m),h):function(y){var g=t(y,m);return g===void 0&&g===h?r(y,m):e(h,g,u|f)}}return d0=d,d0}var p0,Mw;function Ii(){if(Mw)return p0;Mw=1;function e(t){return t}return p0=e,p0}var h0,Rw;function EN(){if(Rw)return h0;Rw=1;function e(t){return function(r){return r==null?void 0:r[t]}}return h0=e,h0}var m0,Iw;function PN(){if(Iw)return m0;Iw=1;var e=I2();function t(r){return function(n){return e(n,r)}}return m0=t,m0}var y0,$w;function kN(){if($w)return y0;$w=1;var e=EN(),t=PN(),r=T2(),n=jc();function i(o){return r(o)?e(n(o)):t(o)}return y0=i,y0}var v0,Lw;function Xn(){if(Lw)return v0;Lw=1;var e=SN(),t=AN(),r=Ii(),n=Ht(),i=kN();function o(s){return typeof s=="function"?s:s==null?r:typeof s=="object"?n(s)?t(s[0],s[1]):e(s):i(s)}return v0=o,v0}var g0,Fw;function nj(){if(Fw)return g0;Fw=1;function e(t,r,n,i){for(var o=t.length,s=n+(i?1:-1);i?s--:++s<o;)if(r(t[s],s,t))return s;return-1}return g0=e,g0}var b0,Bw;function TN(){if(Bw)return b0;Bw=1;function e(t){return t!==t}return b0=e,b0}var x0,qw;function CN(){if(qw)return x0;qw=1;function e(t,r,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===r)return i;return-1}return x0=e,x0}var w0,zw;function NN(){if(zw)return w0;zw=1;var e=nj(),t=TN(),r=CN();function n(i,o,s){return o===o?r(i,o,s):e(i,t,s)}return w0=n,w0}var S0,Uw;function DN(){if(Uw)return S0;Uw=1;var e=NN();function t(r,n){var i=r==null?0:r.length;return!!i&&e(r,n,0)>-1}return S0=t,S0}var _0,Ww;function MN(){if(Ww)return _0;Ww=1;function e(t,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;)if(n(r,t[i]))return!0;return!1}return _0=e,_0}var j0,Hw;function RN(){if(Hw)return j0;Hw=1;function e(){}return j0=e,j0}var O0,Vw;function IN(){if(Vw)return O0;Vw=1;var e=ej(),t=RN(),r=W2(),n=1/0,i=e&&1/r(new e([,-0]))[1]==n?function(o){return new e(o)}:t;return O0=i,O0}var A0,Kw;function $N(){if(Kw)return A0;Kw=1;var e=H_(),t=DN(),r=MN(),n=K_(),i=IN(),o=W2(),s=200;function u(f,d,m){var h=-1,y=t,g=f.length,_=!0,S=[],x=S;if(m)_=!1,y=r;else if(g>=s){var j=d?null:i(f);if(j)return o(j);_=!1,y=n,x=new e}else x=d?[]:S;e:for(;++h<g;){var A=f[h],E=d?d(A):A;if(A=m||A!==0?A:0,_&&E===E){for(var T=x.length;T--;)if(x[T]===E)continue e;d&&x.push(E),S.push(A)}else y(x,E,m)||(x!==S&&x.push(E),S.push(A))}return S}return A0=u,A0}var E0,Gw;function LN(){if(Gw)return E0;Gw=1;var e=Xn(),t=$N();function r(n,i){return n&&n.length?t(n,e(i,2)):[]}return E0=r,E0}var FN=LN();const Xw=We(FN);function aj(e,t,r){return t===!0?Xw(e,r):Pe(t)?Xw(e,t):e}function di(e){"@babel/helpers - typeof";return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(e)}var BN=["ref"];function Yw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function sn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Yw(Object(r),!0).forEach(function(n){Tc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function qN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qw(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,oj(n.key),n)}}function zN(e,t,r){return t&&Qw(e.prototype,t),r&&Qw(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function UN(e,t,r){return t=Tu(t),WN(e,ij()?Reflect.construct(t,r||[],Tu(e).constructor):t.apply(e,r))}function WN(e,t){if(t&&(di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return HN(e)}function HN(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ij(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ij=function(){return!!e})()}function Tu(e){return Tu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Tu(e)}function VN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&yy(e,t)}function yy(e,t){return yy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},yy(e,t)}function Tc(e,t,r){return t=oj(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oj(e){var t=KN(e,"string");return di(t)=="symbol"?t:t+""}function KN(e,t){if(di(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(di(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function GN(e,t){if(e==null)return{};var r=XN(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function XN(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function YN(e){return e.value}function QN(e,t){if(B.isValidElement(e))return B.cloneElement(e,t);if(typeof e=="function")return B.createElement(e,t);t.ref;var r=GN(t,BN);return B.createElement(U2,r)}var Jw=1,li=(function(e){function t(){var r;qN(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r=UN(this,t,[].concat(i)),Tc(r,"lastBoundingBox",{width:-1,height:-1}),r}return VN(t,e),zN(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();return n.height=this.wrapperNode.offsetHeight,n.width=this.wrapperNode.offsetWidth,n}return null}},{key:"updateBBox",value:function(){var n=this.props.onBBoxUpdate,i=this.getBBox();i?(Math.abs(i.width-this.lastBoundingBox.width)>Jw||Math.abs(i.height-this.lastBoundingBox.height)>Jw)&&(this.lastBoundingBox.width=i.width,this.lastBoundingBox.height=i.height,n&&n(i)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,n&&n(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?sn({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(n){var i=this.props,o=i.layout,s=i.align,u=i.verticalAlign,f=i.margin,d=i.chartWidth,m=i.chartHeight,h,y;if(!n||(n.left===void 0||n.left===null)&&(n.right===void 0||n.right===null))if(s==="center"&&o==="vertical"){var g=this.getBBoxSnapshot();h={left:((d||0)-g.width)/2}}else h=s==="right"?{right:f&&f.right||0}:{left:f&&f.left||0};if(!n||(n.top===void 0||n.top===null)&&(n.bottom===void 0||n.bottom===null))if(u==="middle"){var _=this.getBBoxSnapshot();y={top:((m||0)-_.height)/2}}else y=u==="bottom"?{bottom:f&&f.bottom||0}:{top:f&&f.top||0};return sn(sn({},h),y)}},{key:"render",value:function(){var n=this,i=this.props,o=i.content,s=i.width,u=i.height,f=i.wrapperStyle,d=i.payloadUniqBy,m=i.payload,h=sn(sn({position:"absolute",width:s||"auto",height:u||"auto"},this.getDefaultPosition(f)),f);return B.createElement("div",{className:"recharts-legend-wrapper",style:h,ref:function(g){n.wrapperNode=g}},QN(o,sn(sn({},this.props),{},{payload:aj(m,d,YN)})))}}],[{key:"getWithHeight",value:function(n,i){var o=sn(sn({},this.defaultProps),n.props),s=o.layout;return s==="vertical"&&ce(n.props.height)?{height:n.props.height}:s==="horizontal"?{width:n.props.width||i}:null}}])})(D.PureComponent);Tc(li,"displayName","Legend");Tc(li,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var P0,Zw;function JN(){if(Zw)return P0;Zw=1;var e=$l(),t=H2(),r=Ht(),n=e?e.isConcatSpreadable:void 0;function i(o){return r(o)||t(o)||!!(n&&o&&o[n])}return P0=i,P0}var k0,e3;function lj(){if(e3)return k0;e3=1;var e=X_(),t=JN();function r(n,i,o,s,u){var f=-1,d=n.length;for(o||(o=t),u||(u=[]);++f<d;){var m=n[f];i>0&&o(m)?i>1?r(m,i-1,o,s,u):e(u,m):s||(u[u.length]=m)}return u}return k0=r,k0}var T0,t3;function ZN(){if(t3)return T0;t3=1;function e(t){return function(r,n,i){for(var o=-1,s=Object(r),u=i(r),f=u.length;f--;){var d=u[t?f:++o];if(n(s[d],d,s)===!1)break}return r}}return T0=e,T0}var C0,r3;function e9(){if(r3)return C0;r3=1;var e=ZN(),t=e();return C0=t,C0}var N0,n3;function sj(){if(n3)return N0;n3=1;var e=e9(),t=kc();function r(n,i){return n&&e(n,i,t)}return N0=r,N0}var D0,a3;function t9(){if(a3)return D0;a3=1;var e=ql();function t(r,n){return function(i,o){if(i==null)return i;if(!e(i))return r(i,o);for(var s=i.length,u=n?s:-1,f=Object(i);(n?u--:++u<s)&&o(f[u],u,f)!==!1;);return i}}return D0=t,D0}var M0,i3;function X2(){if(i3)return M0;i3=1;var e=sj(),t=t9(),r=t(e);return M0=r,M0}var R0,o3;function uj(){if(o3)return R0;o3=1;var e=X2(),t=ql();function r(n,i){var o=-1,s=t(n)?Array(n.length):[];return e(n,function(u,f,d){s[++o]=i(u,f,d)}),s}return R0=r,R0}var I0,l3;function r9(){if(l3)return I0;l3=1;function e(t,r){var n=t.length;for(t.sort(r);n--;)t[n]=t[n].value;return t}return I0=e,I0}var $0,s3;function n9(){if(s3)return $0;s3=1;var e=Mi();function t(r,n){if(r!==n){var i=r!==void 0,o=r===null,s=r===r,u=e(r),f=n!==void 0,d=n===null,m=n===n,h=e(n);if(!d&&!h&&!u&&r>n||u&&f&&m&&!d&&!h||o&&f&&m||!i&&m||!s)return 1;if(!o&&!u&&!h&&r<n||h&&i&&s&&!o&&!u||d&&i&&s||!f&&s||!m)return-1}return 0}return $0=t,$0}var L0,u3;function a9(){if(u3)return L0;u3=1;var e=n9();function t(r,n,i){for(var o=-1,s=r.criteria,u=n.criteria,f=s.length,d=i.length;++o<f;){var m=e(s[o],u[o]);if(m){if(o>=d)return m;var h=i[o];return m*(h=="desc"?-1:1)}}return r.index-n.index}return L0=t,L0}var F0,c3;function i9(){if(c3)return F0;c3=1;var e=R2(),t=I2(),r=Xn(),n=uj(),i=r9(),o=Q_(),s=a9(),u=Ii(),f=Ht();function d(m,h,y){h.length?h=e(h,function(S){return f(S)?function(x){return t(x,S.length===1?S[0]:S)}:S}):h=[u];var g=-1;h=e(h,o(r));var _=n(m,function(S,x,j){var A=e(h,function(E){return E(S)});return{criteria:A,index:++g,value:S}});return i(_,function(S,x){return s(S,x,y)})}return F0=d,F0}var B0,f3;function o9(){if(f3)return B0;f3=1;function e(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}return B0=e,B0}var q0,d3;function l9(){if(d3)return q0;d3=1;var e=o9(),t=Math.max;function r(n,i,o){return i=t(i===void 0?n.length-1:i,0),function(){for(var s=arguments,u=-1,f=t(s.length-i,0),d=Array(f);++u<f;)d[u]=s[i+u];u=-1;for(var m=Array(i+1);++u<i;)m[u]=s[u];return m[i]=o(d),e(n,this,m)}}return q0=r,q0}var z0,p3;function s9(){if(p3)return z0;p3=1;function e(t){return function(){return t}}return z0=e,z0}var U0,h3;function cj(){if(h3)return U0;h3=1;var e=_a(),t=(function(){try{var r=e(Object,"defineProperty");return r({},"",{}),r}catch{}})();return U0=t,U0}var W0,m3;function u9(){if(m3)return W0;m3=1;var e=s9(),t=cj(),r=Ii(),n=t?function(i,o){return t(i,"toString",{configurable:!0,enumerable:!1,value:e(o),writable:!0})}:r;return W0=n,W0}var H0,y3;function c9(){if(y3)return H0;y3=1;var e=800,t=16,r=Date.now;function n(i){var o=0,s=0;return function(){var u=r(),f=t-(u-s);if(s=u,f>0){if(++o>=e)return arguments[0]}else o=0;return i.apply(void 0,arguments)}}return H0=n,H0}var V0,v3;function f9(){if(v3)return V0;v3=1;var e=u9(),t=c9(),r=t(e);return V0=r,V0}var K0,g3;function d9(){if(g3)return K0;g3=1;var e=Ii(),t=l9(),r=f9();function n(i,o){return r(t(i,o,e),i+"")}return K0=n,K0}var G0,b3;function Cc(){if(b3)return G0;b3=1;var e=N2(),t=ql(),r=V2(),n=Gn();function i(o,s,u){if(!n(u))return!1;var f=typeof s;return(f=="number"?t(u)&&r(s,u.length):f=="string"&&s in u)?e(u[s],o):!1}return G0=i,G0}var X0,x3;function p9(){if(x3)return X0;x3=1;var e=lj(),t=i9(),r=d9(),n=Cc(),i=r(function(o,s){if(o==null)return[];var u=s.length;return u>1&&n(o,s[0],s[1])?s=[]:u>2&&n(s[0],s[1],s[2])&&(s=[s[0]]),t(o,e(s,1),[])});return X0=i,X0}var h9=p9();const Y2=We(h9);function tl(e){"@babel/helpers - typeof";return tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tl(e)}function vy(){return vy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vy.apply(this,arguments)}function m9(e,t){return b9(e)||g9(e,t)||v9(e,t)||y9()}function y9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v9(e,t){if(e){if(typeof e=="string")return w3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w3(e,t)}}function w3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g9(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function b9(e){if(Array.isArray(e))return e}function S3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Y0(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?S3(Object(r),!0).forEach(function(n){x9(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function x9(e,t,r){return t=w9(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w9(e){var t=S9(e,"string");return tl(t)=="symbol"?t:t+""}function S9(e,t){if(tl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(tl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _9(e){return Array.isArray(e)&&ht(e[0])&&ht(e[1])?e.join(" ~ "):e}var j9=function(t){var r=t.separator,n=r===void 0?" : ":r,i=t.contentStyle,o=i===void 0?{}:i,s=t.itemStyle,u=s===void 0?{}:s,f=t.labelStyle,d=f===void 0?{}:f,m=t.payload,h=t.formatter,y=t.itemSorter,g=t.wrapperClassName,_=t.labelClassName,S=t.label,x=t.labelFormatter,j=t.accessibilityLayer,A=j===void 0?!1:j,E=function(){if(m&&m.length){var M={padding:0,margin:0},H=(y?Y2(m,y):m).map(function(X,G){if(X.type==="none")return null;var J=Y0({display:"block",paddingTop:4,paddingBottom:4,color:X.color||"#000"},u),te=X.formatter||h||_9,K=X.value,ee=X.name,Q=K,I=ee;if(te&&Q!=null&&I!=null){var U=te(K,ee,X,G,m);if(Array.isArray(U)){var se=m9(U,2);Q=se[0],I=se[1]}else Q=U}return B.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(G),style:J},ht(I)?B.createElement("span",{className:"recharts-tooltip-item-name"},I):null,ht(I)?B.createElement("span",{className:"recharts-tooltip-item-separator"},n):null,B.createElement("span",{className:"recharts-tooltip-item-value"},Q),B.createElement("span",{className:"recharts-tooltip-item-unit"},X.unit||""))});return B.createElement("ul",{className:"recharts-tooltip-item-list",style:M},H)}return null},T=Y0({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},o),O=Y0({margin:0},d),P=!Ce(S),C=P?S:"",R=Ie("recharts-default-tooltip",g),$=Ie("recharts-tooltip-label",_);P&&x&&m!==void 0&&m!==null&&(C=x(S,m));var z=A?{role:"status","aria-live":"assertive"}:{};return B.createElement("div",vy({className:R,style:T},z),B.createElement("p",{className:$,style:O},B.isValidElement(C)?C:"".concat(C)),E())};function rl(e){"@babel/helpers - typeof";return rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rl(e)}function lu(e,t,r){return t=O9(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O9(e){var t=A9(e,"string");return rl(t)=="symbol"?t:t+""}function A9(e,t){if(rl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(rl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Do="recharts-tooltip-wrapper",E9={visibility:"hidden"};function P9(e){var t=e.coordinate,r=e.translateX,n=e.translateY;return Ie(Do,lu(lu(lu(lu({},"".concat(Do,"-right"),ce(r)&&t&&ce(t.x)&&r>=t.x),"".concat(Do,"-left"),ce(r)&&t&&ce(t.x)&&r<t.x),"".concat(Do,"-bottom"),ce(n)&&t&&ce(t.y)&&n>=t.y),"".concat(Do,"-top"),ce(n)&&t&&ce(t.y)&&n<t.y))}function _3(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.key,i=e.offsetTopLeft,o=e.position,s=e.reverseDirection,u=e.tooltipDimension,f=e.viewBox,d=e.viewBoxDimension;if(o&&ce(o[n]))return o[n];var m=r[n]-u-i,h=r[n]+i;if(t[n])return s[n]?m:h;if(s[n]){var y=m,g=f[n];return y<g?Math.max(h,f[n]):Math.max(m,f[n])}var _=h+u,S=f[n]+d;return _>S?Math.max(m,f[n]):Math.max(h,f[n])}function k9(e){var t=e.translateX,r=e.translateY,n=e.useTranslate3d;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function T9(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.offsetTopLeft,i=e.position,o=e.reverseDirection,s=e.tooltipBox,u=e.useTranslate3d,f=e.viewBox,d,m,h;return s.height>0&&s.width>0&&r?(m=_3({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:i,reverseDirection:o,tooltipDimension:s.width,viewBox:f,viewBoxDimension:f.width}),h=_3({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:i,reverseDirection:o,tooltipDimension:s.height,viewBox:f,viewBoxDimension:f.height}),d=k9({translateX:m,translateY:h,useTranslate3d:u})):d=E9,{cssProperties:d,cssClasses:P9({translateX:m,translateY:h,coordinate:r})}}function pi(e){"@babel/helpers - typeof";return pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pi(e)}function j3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function O3(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j3(Object(r),!0).forEach(function(n){by(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function C9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N9(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,dj(n.key),n)}}function D9(e,t,r){return t&&N9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function M9(e,t,r){return t=Cu(t),R9(e,fj()?Reflect.construct(t,r||[],Cu(e).constructor):t.apply(e,r))}function R9(e,t){if(t&&(pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I9(e)}function I9(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fj(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fj=function(){return!!e})()}function Cu(e){return Cu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Cu(e)}function $9(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gy(e,t)}function gy(e,t){return gy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},gy(e,t)}function by(e,t,r){return t=dj(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dj(e){var t=L9(e,"string");return pi(t)=="symbol"?t:t+""}function L9(e,t){if(pi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(pi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var A3=1,F9=(function(e){function t(){var r;C9(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r=M9(this,t,[].concat(i)),by(r,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),by(r,"handleKeyDown",function(s){if(s.key==="Escape"){var u,f,d,m;r.setState({dismissed:!0,dismissedAtCoordinate:{x:(u=(f=r.props.coordinate)===null||f===void 0?void 0:f.x)!==null&&u!==void 0?u:0,y:(d=(m=r.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&d!==void 0?d:0}})}}),r}return $9(t,e),D9(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();(Math.abs(n.width-this.state.lastBoundingBox.width)>A3||Math.abs(n.height-this.state.lastBoundingBox.height)>A3)&&this.setState({lastBoundingBox:{width:n.width,height:n.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var n,i;this.props.active&&this.updateBBox(),this.state.dismissed&&(((n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==this.state.dismissedAtCoordinate.x||((i=this.props.coordinate)===null||i===void 0?void 0:i.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var n=this,i=this.props,o=i.active,s=i.allowEscapeViewBox,u=i.animationDuration,f=i.animationEasing,d=i.children,m=i.coordinate,h=i.hasPayload,y=i.isAnimationActive,g=i.offset,_=i.position,S=i.reverseDirection,x=i.useTranslate3d,j=i.viewBox,A=i.wrapperStyle,E=T9({allowEscapeViewBox:s,coordinate:m,offsetTopLeft:g,position:_,reverseDirection:S,tooltipBox:this.state.lastBoundingBox,useTranslate3d:x,viewBox:j}),T=E.cssClasses,O=E.cssProperties,P=O3(O3({transition:y&&o?"transform ".concat(u,"ms ").concat(f):void 0},O),{},{pointerEvents:"none",visibility:!this.state.dismissed&&o&&h?"visible":"hidden",position:"absolute",top:0,left:0},A);return B.createElement("div",{tabIndex:-1,className:T,style:P,ref:function(R){n.wrapperNode=R}},d)}}])})(D.PureComponent),B9=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},$i={isSsr:B9()};function hi(e){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}function E3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function P3(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?E3(Object(r),!0).forEach(function(n){Q2(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z9(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,hj(n.key),n)}}function U9(e,t,r){return t&&z9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function W9(e,t,r){return t=Nu(t),H9(e,pj()?Reflect.construct(t,r||[],Nu(e).constructor):t.apply(e,r))}function H9(e,t){if(t&&(hi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V9(e)}function V9(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pj(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pj=function(){return!!e})()}function Nu(e){return Nu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Nu(e)}function K9(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xy(e,t)}function xy(e,t){return xy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},xy(e,t)}function Q2(e,t,r){return t=hj(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hj(e){var t=G9(e,"string");return hi(t)=="symbol"?t:t+""}function G9(e,t){if(hi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(hi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function X9(e){return e.dataKey}function Y9(e,t){return B.isValidElement(e)?B.cloneElement(e,t):typeof e=="function"?B.createElement(e,t):B.createElement(j9,t)}var Ur=(function(e){function t(){return q9(this,t),W9(this,t,arguments)}return K9(t,e),U9(t,[{key:"render",value:function(){var n=this,i=this.props,o=i.active,s=i.allowEscapeViewBox,u=i.animationDuration,f=i.animationEasing,d=i.content,m=i.coordinate,h=i.filterNull,y=i.isAnimationActive,g=i.offset,_=i.payload,S=i.payloadUniqBy,x=i.position,j=i.reverseDirection,A=i.useTranslate3d,E=i.viewBox,T=i.wrapperStyle,O=_??[];h&&O.length&&(O=aj(_.filter(function(C){return C.value!=null&&(C.hide!==!0||n.props.includeHidden)}),S,X9));var P=O.length>0;return B.createElement(F9,{allowEscapeViewBox:s,animationDuration:u,animationEasing:f,isAnimationActive:y,active:o,coordinate:m,hasPayload:P,offset:g,position:x,reverseDirection:j,useTranslate3d:A,viewBox:E,wrapperStyle:T},Y9(d,P3(P3({},this.props),{},{payload:O})))}}])})(D.PureComponent);Q2(Ur,"displayName","Tooltip");Q2(Ur,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!$i.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Q0,k3;function Q9(){if(k3)return Q0;k3=1;var e=Jr(),t=function(){return e.Date.now()};return Q0=t,Q0}var J0,T3;function J9(){if(T3)return J0;T3=1;var e=/\s/;function t(r){for(var n=r.length;n--&&e.test(r.charAt(n)););return n}return J0=t,J0}var Z0,C3;function Z9(){if(C3)return Z0;C3=1;var e=J9(),t=/^\s+/;function r(n){return n&&n.slice(0,e(n)+1).replace(t,"")}return Z0=r,Z0}var em,N3;function mj(){if(N3)return em;N3=1;var e=Z9(),t=Gn(),r=Mi(),n=NaN,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;function f(d){if(typeof d=="number")return d;if(r(d))return n;if(t(d)){var m=typeof d.valueOf=="function"?d.valueOf():d;d=t(m)?m+"":m}if(typeof d!="string")return d===0?d:+d;d=e(d);var h=o.test(d);return h||s.test(d)?u(d.slice(2),h?2:8):i.test(d)?n:+d}return em=f,em}var tm,D3;function eD(){if(D3)return tm;D3=1;var e=Gn(),t=Q9(),r=mj(),n="Expected a function",i=Math.max,o=Math.min;function s(u,f,d){var m,h,y,g,_,S,x=0,j=!1,A=!1,E=!0;if(typeof u!="function")throw new TypeError(n);f=r(f)||0,e(d)&&(j=!!d.leading,A="maxWait"in d,y=A?i(r(d.maxWait)||0,f):y,E="trailing"in d?!!d.trailing:E);function T(H){var X=m,G=h;return m=h=void 0,x=H,g=u.apply(G,X),g}function O(H){return x=H,_=setTimeout(R,f),j?T(H):g}function P(H){var X=H-S,G=H-x,J=f-X;return A?o(J,y-G):J}function C(H){var X=H-S,G=H-x;return S===void 0||X>=f||X<0||A&&G>=y}function R(){var H=t();if(C(H))return $(H);_=setTimeout(R,P(H))}function $(H){return _=void 0,E&&m?T(H):(m=h=void 0,g)}function z(){_!==void 0&&clearTimeout(_),x=0,m=S=h=_=void 0}function q(){return _===void 0?g:$(t())}function M(){var H=t(),X=C(H);if(m=arguments,h=this,S=H,X){if(_===void 0)return O(S);if(A)return clearTimeout(_),_=setTimeout(R,f),T(S)}return _===void 0&&(_=setTimeout(R,f)),g}return M.cancel=z,M.flush=q,M}return tm=s,tm}var rm,M3;function tD(){if(M3)return rm;M3=1;var e=eD(),t=Gn(),r="Expected a function";function n(i,o,s){var u=!0,f=!0;if(typeof i!="function")throw new TypeError(r);return t(s)&&(u="leading"in s?!!s.leading:u,f="trailing"in s?!!s.trailing:f),e(i,o,{leading:u,maxWait:o,trailing:f})}return rm=n,rm}var rD=tD();const yj=We(rD);function nl(e){"@babel/helpers - typeof";return nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nl(e)}function R3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function su(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?R3(Object(r),!0).forEach(function(n){nD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function nD(e,t,r){return t=aD(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function aD(e){var t=iD(e,"string");return nl(t)=="symbol"?t:t+""}function iD(e,t){if(nl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(nl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oD(e,t){return cD(e)||uD(e,t)||sD(e,t)||lD()}function lD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sD(e,t){if(e){if(typeof e=="string")return I3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I3(e,t)}}function I3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function uD(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function cD(e){if(Array.isArray(e))return e}var vj=D.forwardRef(function(e,t){var r=e.aspect,n=e.initialDimension,i=n===void 0?{width:-1,height:-1}:n,o=e.width,s=o===void 0?"100%":o,u=e.height,f=u===void 0?"100%":u,d=e.minWidth,m=d===void 0?0:d,h=e.minHeight,y=e.maxHeight,g=e.children,_=e.debounce,S=_===void 0?0:_,x=e.id,j=e.className,A=e.onResize,E=e.style,T=E===void 0?{}:E,O=D.useRef(null),P=D.useRef();P.current=A,D.useImperativeHandle(t,function(){return Object.defineProperty(O.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),O.current},configurable:!0})});var C=D.useState({containerWidth:i.width,containerHeight:i.height}),R=oD(C,2),$=R[0],z=R[1],q=D.useCallback(function(H,X){z(function(G){var J=Math.round(H),te=Math.round(X);return G.containerWidth===J&&G.containerHeight===te?G:{containerWidth:J,containerHeight:te}})},[]);D.useEffect(function(){var H=function(ee){var Q,I=ee[0].contentRect,U=I.width,se=I.height;q(U,se),(Q=P.current)===null||Q===void 0||Q.call(P,U,se)};S>0&&(H=yj(H,S,{trailing:!0,leading:!1}));var X=new ResizeObserver(H),G=O.current.getBoundingClientRect(),J=G.width,te=G.height;return q(J,te),X.observe(O.current),function(){X.disconnect()}},[q,S]);var M=D.useMemo(function(){var H=$.containerWidth,X=$.containerHeight;if(H<0||X<0)return null;hn(ma(s)||ma(f),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,f),hn(!r||r>0,"The aspect(%s) must be greater than zero.",r);var G=ma(s)?H:s,J=ma(f)?X:f;r&&r>0&&(G?J=G/r:J&&(G=J*r),y&&J>y&&(J=y)),hn(G>0||J>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,G,J,s,f,m,h,r);var te=!Array.isArray(g)&&pn(g.type).endsWith("Chart");return B.Children.map(g,function(K){return B.isValidElement(K)?D.cloneElement(K,su({width:G,height:J},te?{style:su({height:"100%",width:"100%",maxHeight:J,maxWidth:G},K.props.style)}:{})):K})},[r,g,f,y,h,m,$,s]);return B.createElement("div",{id:x?"".concat(x):void 0,className:Ie("recharts-responsive-container",j),style:su(su({},T),{},{width:s,height:f,minWidth:m,minHeight:h,maxHeight:y}),ref:O},M)}),J2=function(t){return null};J2.displayName="Cell";function al(e){"@babel/helpers - typeof";return al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},al(e)}function $3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function wy(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$3(Object(r),!0).forEach(function(n){fD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fD(e,t,r){return t=dD(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dD(e){var t=pD(e,"string");return al(t)=="symbol"?t:t+""}function pD(e,t){if(al(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(al(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Za={widthCache:{},cacheCount:0},hD=2e3,mD={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},L3="recharts_measurement_span";function yD(e){var t=wy({},e);return Object.keys(t).forEach(function(r){t[r]||delete t[r]}),t}var Ko=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||$i.isSsr)return{width:0,height:0};var n=yD(r),i=JSON.stringify({text:t,copyStyle:n});if(Za.widthCache[i])return Za.widthCache[i];try{var o=document.getElementById(L3);o||(o=document.createElement("span"),o.setAttribute("id",L3),o.setAttribute("aria-hidden","true"),document.body.appendChild(o));var s=wy(wy({},mD),n);Object.assign(o.style,s),o.textContent="".concat(t);var u=o.getBoundingClientRect(),f={width:u.width,height:u.height};return Za.widthCache[i]=f,++Za.cacheCount>hD&&(Za.cacheCount=0,Za.widthCache={}),f}catch{return{width:0,height:0}}},vD=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function il(e){"@babel/helpers - typeof";return il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},il(e)}function Du(e,t){return wD(e)||xD(e,t)||bD(e,t)||gD()}function gD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bD(e,t){if(e){if(typeof e=="string")return F3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F3(e,t)}}function F3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function xD(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function wD(e){if(Array.isArray(e))return e}function SD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B3(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,jD(n.key),n)}}function _D(e,t,r){return t&&B3(e.prototype,t),r&&B3(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function jD(e){var t=OD(e,"string");return il(t)=="symbol"?t:t+""}function OD(e,t){if(il(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(il(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var q3=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,z3=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,AD=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,ED=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,gj={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},PD=Object.keys(gj),ni="NaN";function kD(e,t){return e*gj[t]}var uu=(function(){function e(t,r){SD(this,e),this.num=t,this.unit=r,this.num=t,this.unit=r,Number.isNaN(t)&&(this.unit=""),r!==""&&!AD.test(r)&&(this.num=NaN,this.unit=""),PD.includes(r)&&(this.num=kD(t,r),this.unit="px")}return _D(e,[{key:"add",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num+r.num,this.unit)}},{key:"subtract",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num-r.num,this.unit)}},{key:"multiply",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num*r.num,this.unit||r.unit)}},{key:"divide",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num/r.num,this.unit||r.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(r){var n,i=(n=ED.exec(r))!==null&&n!==void 0?n:[],o=Du(i,3),s=o[1],u=o[2];return new e(parseFloat(s),u??"")}}])})();function bj(e){if(e.includes(ni))return ni;for(var t=e;t.includes("*")||t.includes("/");){var r,n=(r=q3.exec(t))!==null&&r!==void 0?r:[],i=Du(n,4),o=i[1],s=i[2],u=i[3],f=uu.parse(o??""),d=uu.parse(u??""),m=s==="*"?f.multiply(d):f.divide(d);if(m.isNaN())return ni;t=t.replace(q3,m.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var h,y=(h=z3.exec(t))!==null&&h!==void 0?h:[],g=Du(y,4),_=g[1],S=g[2],x=g[3],j=uu.parse(_??""),A=uu.parse(x??""),E=S==="+"?j.add(A):j.subtract(A);if(E.isNaN())return ni;t=t.replace(z3,E.toString())}return t}var U3=/\(([^()]*)\)/;function TD(e){for(var t=e;t.includes("(");){var r=U3.exec(t),n=Du(r,2),i=n[1];t=t.replace(U3,bj(i))}return t}function CD(e){var t=e.replace(/\s+/g,"");return t=TD(t),t=bj(t),t}function ND(e){try{return CD(e)}catch{return ni}}function nm(e){var t=ND(e.slice(5,-1));return t===ni?"":t}var DD=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],MD=["dx","dy","angle","className","breakAll"];function Sy(){return Sy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sy.apply(this,arguments)}function W3(e,t){if(e==null)return{};var r=RD(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function RD(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function H3(e,t){return FD(e)||LD(e,t)||$D(e,t)||ID()}function ID(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $D(e,t){if(e){if(typeof e=="string")return V3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V3(e,t)}}function V3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function LD(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function FD(e){if(Array.isArray(e))return e}var xj=/[ \f\n\r\t\v\u2028\u2029]+/,wj=function(t){var r=t.children,n=t.breakAll,i=t.style;try{var o=[];Ce(r)||(n?o=r.toString().split(""):o=r.toString().split(xj));var s=o.map(function(f){return{word:f,width:Ko(f,i).width}}),u=n?0:Ko(" ",i).width;return{wordsWithComputedWidth:s,spaceWidth:u}}catch{return null}},BD=function(t,r,n,i,o){var s=t.maxLines,u=t.children,f=t.style,d=t.breakAll,m=ce(s),h=u,y=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G.reduce(function(J,te){var K=te.word,ee=te.width,Q=J[J.length-1];if(Q&&(i==null||o||Q.width+ee+n<Number(i)))Q.words.push(K),Q.width+=ee+n;else{var I={words:[K],width:ee};J.push(I)}return J},[])},g=y(r),_=function(G){return G.reduce(function(J,te){return J.width>te.width?J:te})};if(!m)return g;for(var S="…",x=function(G){var J=h.slice(0,G),te=wj({breakAll:d,style:f,children:J+S}).wordsWithComputedWidth,K=y(te),ee=K.length>s||_(K).width>Number(i);return[ee,K]},j=0,A=h.length-1,E=0,T;j<=A&&E<=h.length-1;){var O=Math.floor((j+A)/2),P=O-1,C=x(P),R=H3(C,2),$=R[0],z=R[1],q=x(O),M=H3(q,1),H=M[0];if(!$&&!H&&(j=O+1),$&&H&&(A=O-1),!$&&H){T=z;break}E++}return T||g},K3=function(t){var r=Ce(t)?[]:t.toString().split(xj);return[{words:r}]},qD=function(t){var r=t.width,n=t.scaleToFit,i=t.children,o=t.style,s=t.breakAll,u=t.maxLines;if((r||n)&&!$i.isSsr){var f,d,m=wj({breakAll:s,children:i,style:o});if(m){var h=m.wordsWithComputedWidth,y=m.spaceWidth;f=h,d=y}else return K3(i);return BD({breakAll:s,children:i,maxLines:u,style:o},f,d,r,n)}return K3(i)},G3="#808080",Mu=function(t){var r=t.x,n=r===void 0?0:r,i=t.y,o=i===void 0?0:i,s=t.lineHeight,u=s===void 0?"1em":s,f=t.capHeight,d=f===void 0?"0.71em":f,m=t.scaleToFit,h=m===void 0?!1:m,y=t.textAnchor,g=y===void 0?"start":y,_=t.verticalAnchor,S=_===void 0?"end":_,x=t.fill,j=x===void 0?G3:x,A=W3(t,DD),E=D.useMemo(function(){return qD({breakAll:A.breakAll,children:A.children,maxLines:A.maxLines,scaleToFit:h,style:A.style,width:A.width})},[A.breakAll,A.children,A.maxLines,h,A.style,A.width]),T=A.dx,O=A.dy,P=A.angle,C=A.className,R=A.breakAll,$=W3(A,MD);if(!ht(n)||!ht(o))return null;var z=n+(ce(T)?T:0),q=o+(ce(O)?O:0),M;switch(S){case"start":M=nm("calc(".concat(d,")"));break;case"middle":M=nm("calc(".concat((E.length-1)/2," * -").concat(u," + (").concat(d," / 2))"));break;default:M=nm("calc(".concat(E.length-1," * -").concat(u,")"));break}var H=[];if(h){var X=E[0].width,G=A.width;H.push("scale(".concat((ce(G)?G/X:1)/X,")"))}return P&&H.push("rotate(".concat(P,", ").concat(z,", ").concat(q,")")),H.length&&($.transform=H.join(" ")),B.createElement("text",Sy({},Ne($,!0),{x:z,y:q,className:Ie("recharts-text",C),textAnchor:g,fill:j.includes("url")?G3:j}),E.map(function(J,te){var K=J.words.join(R?"":" ");return B.createElement("tspan",{x:z,dy:te===0?M:u,key:"".concat(K,"-").concat(te)},K)}))};function zl(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Z2(e){let t=e,r=e;e.length===1&&(t=(s,u)=>e(s)-u,r=zD(e));function n(s,u,f,d){for(f==null&&(f=0),d==null&&(d=s.length);f<d;){const m=f+d>>>1;r(s[m],u)<0?f=m+1:d=m}return f}function i(s,u,f,d){for(f==null&&(f=0),d==null&&(d=s.length);f<d;){const m=f+d>>>1;r(s[m],u)>0?d=m:f=m+1}return f}function o(s,u,f,d){f==null&&(f=0),d==null&&(d=s.length);const m=n(s,u,f,d-1);return m>f&&t(s[m-1],u)>-t(s[m],u)?m-1:m}return{left:n,center:o,right:i}}function zD(e){return(t,r)=>zl(e(t),r)}function Sj(e){return e===null?NaN:+e}function*UD(e,t){for(let r of e)r!=null&&(r=+r)>=r&&(yield r)}const WD=Z2(zl),Ul=WD.right;Z2(Sj).center;class X3 extends Map{constructor(t,r=KD){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,i]of t)this.set(n,i)}get(t){return super.get(Y3(this,t))}has(t){return super.has(Y3(this,t))}set(t,r){return super.set(HD(this,t),r)}delete(t){return super.delete(VD(this,t))}}function Y3({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function HD({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function VD({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(r),e.delete(n)),r}function KD(e){return e!==null&&typeof e=="object"?e.valueOf():e}var _y=Math.sqrt(50),jy=Math.sqrt(10),Oy=Math.sqrt(2);function Ay(e,t,r){var n,i=-1,o,s,u;if(t=+t,e=+e,r=+r,e===t&&r>0)return[e];if((n=t<e)&&(o=e,e=t,t=o),(u=_j(e,t,r))===0||!isFinite(u))return[];if(u>0){let f=Math.round(e/u),d=Math.round(t/u);for(f*u<e&&++f,d*u>t&&--d,s=new Array(o=d-f+1);++i<o;)s[i]=(f+i)*u}else{u=-u;let f=Math.round(e*u),d=Math.round(t*u);for(f/u<e&&++f,d/u>t&&--d,s=new Array(o=d-f+1);++i<o;)s[i]=(f+i)/u}return n&&s.reverse(),s}function _j(e,t,r){var n=(t-e)/Math.max(0,r),i=Math.floor(Math.log(n)/Math.LN10),o=n/Math.pow(10,i);return i>=0?(o>=_y?10:o>=jy?5:o>=Oy?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=_y?10:o>=jy?5:o>=Oy?2:1)}function Ey(e,t,r){var n=Math.abs(t-e)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(n)/Math.LN10)),o=n/i;return o>=_y?i*=10:o>=jy?i*=5:o>=Oy&&(i*=2),t<e?-i:i}function Q3(e,t){let r;for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);return r}function J3(e,t){let r;for(const n of e)n!=null&&(r>n||r===void 0&&n>=n)&&(r=n);return r}function jj(e,t,r=0,n=e.length-1,i=zl){for(;n>r;){if(n-r>600){const f=n-r+1,d=t-r+1,m=Math.log(f),h=.5*Math.exp(2*m/3),y=.5*Math.sqrt(m*h*(f-h)/f)*(d-f/2<0?-1:1),g=Math.max(r,Math.floor(t-d*h/f+y)),_=Math.min(n,Math.floor(t+(f-d)*h/f+y));jj(e,t,g,_,i)}const o=e[t];let s=r,u=n;for(Mo(e,r,t),i(e[n],o)>0&&Mo(e,r,n);s<u;){for(Mo(e,s,u),++s,--u;i(e[s],o)<0;)++s;for(;i(e[u],o)>0;)--u}i(e[r],o)===0?Mo(e,r,u):(++u,Mo(e,u,n)),u<=t&&(r=u+1),t<=u&&(n=u-1)}return e}function Mo(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function GD(e,t,r){if(e=Float64Array.from(UD(e)),!!(n=e.length)){if((t=+t)<=0||n<2)return J3(e);if(t>=1)return Q3(e);var n,i=(n-1)*t,o=Math.floor(i),s=Q3(jj(e,o).subarray(0,o+1)),u=J3(e.subarray(o+1));return s+(u-s)*(i-o)}}function XD(e,t,r=Sj){if(n=e.length){if((t=+t)<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,i=(n-1)*t,o=Math.floor(i),s=+r(e[o],o,e),u=+r(e[o+1],o+1,e);return s+(u-s)*(i-o)}}function YD(e,t,r){e=+e,t=+t,r=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+r;for(var n=-1,i=Math.max(0,Math.ceil((t-e)/r))|0,o=new Array(i);++n<i;)o[n]=e+n*r;return o}function vr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function jn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const Py=Symbol("implicit");function ev(){var e=new X3,t=[],r=[],n=Py;function i(o){let s=e.get(o);if(s===void 0){if(n!==Py)return n;e.set(o,s=t.push(o)-1)}return r[s%r.length]}return i.domain=function(o){if(!arguments.length)return t.slice();t=[],e=new X3;for(const s of o)e.has(s)||e.set(s,t.push(s)-1);return i},i.range=function(o){return arguments.length?(r=Array.from(o),i):r.slice()},i.unknown=function(o){return arguments.length?(n=o,i):n},i.copy=function(){return ev(t,r).unknown(n)},vr.apply(i,arguments),i}function ol(){var e=ev().unknown(void 0),t=e.domain,r=e.range,n=0,i=1,o,s,u=!1,f=0,d=0,m=.5;delete e.unknown;function h(){var y=t().length,g=i<n,_=g?i:n,S=g?n:i;o=(S-_)/Math.max(1,y-f+d*2),u&&(o=Math.floor(o)),_+=(S-_-o*(y-f))*m,s=o*(1-f),u&&(_=Math.round(_),s=Math.round(s));var x=YD(y).map(function(j){return _+o*j});return r(g?x.reverse():x)}return e.domain=function(y){return arguments.length?(t(y),h()):t()},e.range=function(y){return arguments.length?([n,i]=y,n=+n,i=+i,h()):[n,i]},e.rangeRound=function(y){return[n,i]=y,n=+n,i=+i,u=!0,h()},e.bandwidth=function(){return s},e.step=function(){return o},e.round=function(y){return arguments.length?(u=!!y,h()):u},e.padding=function(y){return arguments.length?(f=Math.min(1,d=+y),h()):f},e.paddingInner=function(y){return arguments.length?(f=Math.min(1,y),h()):f},e.paddingOuter=function(y){return arguments.length?(d=+y,h()):d},e.align=function(y){return arguments.length?(m=Math.max(0,Math.min(1,y)),h()):m},e.copy=function(){return ol(t(),[n,i]).round(u).paddingInner(f).paddingOuter(d).align(m)},vr.apply(h(),arguments)}function Oj(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return Oj(t())},e}function Go(){return Oj(ol.apply(null,arguments).paddingInner(1))}function tv(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function Aj(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function Wl(){}var ll=.7,Ru=1/ll,si="\\s*([+-]?\\d+)\\s*",sl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Vr="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",QD=/^#([0-9a-f]{3,8})$/,JD=new RegExp("^rgb\\("+[si,si,si]+"\\)$"),ZD=new RegExp("^rgb\\("+[Vr,Vr,Vr]+"\\)$"),eM=new RegExp("^rgba\\("+[si,si,si,sl]+"\\)$"),tM=new RegExp("^rgba\\("+[Vr,Vr,Vr,sl]+"\\)$"),rM=new RegExp("^hsl\\("+[sl,Vr,Vr]+"\\)$"),nM=new RegExp("^hsla\\("+[sl,Vr,Vr,sl]+"\\)$"),Z3={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};tv(Wl,ul,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:e5,formatHex:e5,formatHsl:aM,formatRgb:t5,toString:t5});function e5(){return this.rgb().formatHex()}function aM(){return Ej(this).formatHsl()}function t5(){return this.rgb().formatRgb()}function ul(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=QD.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?r5(t):r===3?new er(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?cu(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?cu(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=JD.exec(e))?new er(t[1],t[2],t[3],1):(t=ZD.exec(e))?new er(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=eM.exec(e))?cu(t[1],t[2],t[3],t[4]):(t=tM.exec(e))?cu(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=rM.exec(e))?i5(t[1],t[2]/100,t[3]/100,1):(t=nM.exec(e))?i5(t[1],t[2]/100,t[3]/100,t[4]):Z3.hasOwnProperty(e)?r5(Z3[e]):e==="transparent"?new er(NaN,NaN,NaN,0):null}function r5(e){return new er(e>>16&255,e>>8&255,e&255,1)}function cu(e,t,r,n){return n<=0&&(e=t=r=NaN),new er(e,t,r,n)}function iM(e){return e instanceof Wl||(e=ul(e)),e?(e=e.rgb(),new er(e.r,e.g,e.b,e.opacity)):new er}function ky(e,t,r,n){return arguments.length===1?iM(e):new er(e,t,r,n??1)}function er(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}tv(er,ky,Aj(Wl,{brighter:function(e){return e=e==null?Ru:Math.pow(Ru,e),new er(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ll:Math.pow(ll,e),new er(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:n5,formatHex:n5,formatRgb:a5,toString:a5}));function n5(){return"#"+am(this.r)+am(this.g)+am(this.b)}function a5(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function am(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function i5(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Wr(e,t,r,n)}function Ej(e){if(e instanceof Wr)return new Wr(e.h,e.s,e.l,e.opacity);if(e instanceof Wl||(e=ul(e)),!e)return new Wr;if(e instanceof Wr)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,i=Math.min(t,r,n),o=Math.max(t,r,n),s=NaN,u=o-i,f=(o+i)/2;return u?(t===o?s=(r-n)/u+(r<n)*6:r===o?s=(n-t)/u+2:s=(t-r)/u+4,u/=f<.5?o+i:2-o-i,s*=60):u=f>0&&f<1?0:s,new Wr(s,u,f,e.opacity)}function oM(e,t,r,n){return arguments.length===1?Ej(e):new Wr(e,t,r,n??1)}function Wr(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}tv(Wr,oM,Aj(Wl,{brighter:function(e){return e=e==null?Ru:Math.pow(Ru,e),new Wr(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ll:Math.pow(ll,e),new Wr(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new er(im(e>=240?e-240:e+120,i,n),im(e,i,n),im(e<120?e+240:e-120,i,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function im(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const rv=e=>()=>e;function lM(e,t){return function(r){return e+r*t}}function sM(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function uM(e){return(e=+e)==1?Pj:function(t,r){return r-t?sM(t,r,e):rv(isNaN(t)?r:t)}}function Pj(e,t){var r=t-e;return r?lM(e,r):rv(isNaN(e)?t:e)}const o5=(function e(t){var r=uM(t);function n(i,o){var s=r((i=ky(i)).r,(o=ky(o)).r),u=r(i.g,o.g),f=r(i.b,o.b),d=Pj(i.opacity,o.opacity);return function(m){return i.r=s(m),i.g=u(m),i.b=f(m),i.opacity=d(m),i+""}}return n.gamma=e,n})(1);function cM(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),i;return function(o){for(i=0;i<r;++i)n[i]=e[i]*(1-o)+t[i]*o;return n}}function fM(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function dM(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,i=new Array(n),o=new Array(r),s;for(s=0;s<n;++s)i[s]=Li(e[s],t[s]);for(;s<r;++s)o[s]=t[s];return function(u){for(s=0;s<n;++s)o[s]=i[s](u);return o}}function pM(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function Iu(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function hM(e,t){var r={},n={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?r[i]=Li(e[i],t[i]):n[i]=t[i];return function(o){for(i in r)n[i]=r[i](o);return n}}var Ty=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,om=new RegExp(Ty.source,"g");function mM(e){return function(){return e}}function yM(e){return function(t){return e(t)+""}}function vM(e,t){var r=Ty.lastIndex=om.lastIndex=0,n,i,o,s=-1,u=[],f=[];for(e=e+"",t=t+"";(n=Ty.exec(e))&&(i=om.exec(t));)(o=i.index)>r&&(o=t.slice(r,o),u[s]?u[s]+=o:u[++s]=o),(n=n[0])===(i=i[0])?u[s]?u[s]+=i:u[++s]=i:(u[++s]=null,f.push({i:s,x:Iu(n,i)})),r=om.lastIndex;return r<t.length&&(o=t.slice(r),u[s]?u[s]+=o:u[++s]=o),u.length<2?f[0]?yM(f[0].x):mM(t):(t=f.length,function(d){for(var m=0,h;m<t;++m)u[(h=f[m]).i]=h.x(d);return u.join("")})}function Li(e,t){var r=typeof t,n;return t==null||r==="boolean"?rv(t):(r==="number"?Iu:r==="string"?(n=ul(t))?(t=n,o5):vM:t instanceof ul?o5:t instanceof Date?pM:fM(t)?cM:Array.isArray(t)?dM:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?hM:Iu)(e,t)}function nv(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function gM(e,t){t===void 0&&(t=e,e=Li);for(var r=0,n=t.length-1,i=t[0],o=new Array(n<0?0:n);r<n;)o[r]=e(i,i=t[++r]);return function(s){var u=Math.max(0,Math.min(n-1,Math.floor(s*=n)));return o[u](s-u)}}function bM(e){return function(){return e}}function $u(e){return+e}var l5=[0,1];function $t(e){return e}function Cy(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:bM(isNaN(t)?NaN:.5)}function xM(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function wM(e,t,r){var n=e[0],i=e[1],o=t[0],s=t[1];return i<n?(n=Cy(i,n),o=r(s,o)):(n=Cy(n,i),o=r(o,s)),function(u){return o(n(u))}}function SM(e,t,r){var n=Math.min(e.length,t.length)-1,i=new Array(n),o=new Array(n),s=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<n;)i[s]=Cy(e[s],e[s+1]),o[s]=r(t[s],t[s+1]);return function(u){var f=Ul(e,u,1,n)-1;return o[f](i[f](u))}}function Hl(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Nc(){var e=l5,t=l5,r=Li,n,i,o,s=$t,u,f,d;function m(){var y=Math.min(e.length,t.length);return s!==$t&&(s=xM(e[0],e[y-1])),u=y>2?SM:wM,f=d=null,h}function h(y){return y==null||isNaN(y=+y)?o:(f||(f=u(e.map(n),t,r)))(n(s(y)))}return h.invert=function(y){return s(i((d||(d=u(t,e.map(n),Iu)))(y)))},h.domain=function(y){return arguments.length?(e=Array.from(y,$u),m()):e.slice()},h.range=function(y){return arguments.length?(t=Array.from(y),m()):t.slice()},h.rangeRound=function(y){return t=Array.from(y),r=nv,m()},h.clamp=function(y){return arguments.length?(s=y?!0:$t,m()):s!==$t},h.interpolate=function(y){return arguments.length?(r=y,m()):r},h.unknown=function(y){return arguments.length?(o=y,h):o},function(y,g){return n=y,i=g,m()}}function av(){return Nc()($t,$t)}function _M(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Lu(e,t){if(!isFinite(e)||e===0)return null;var r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function mi(e){return e=Lu(Math.abs(e)),e?e[1]:NaN}function jM(e,t){return function(r,n){for(var i=r.length,o=[],s=0,u=e[0],f=0;i>0&&u>0&&(f+u+1>n&&(u=Math.max(1,n-f)),o.push(r.substring(i-=u,i+u)),!((f+=u+1)>n));)u=e[s=(s+1)%e.length];return o.reverse().join(t)}}function OM(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var AM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function cl(e){if(!(t=AM.exec(e)))throw new Error("invalid format: "+e);var t;return new iv({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}cl.prototype=iv.prototype;function iv(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}iv.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function EM(e){e:for(var t=e.length,r=1,n=-1,i;r<t;++r)switch(e[r]){case".":n=i=r;break;case"0":n===0&&(n=r),i=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(i+1):e}var Fu;function PM(e,t){var r=Lu(e,t);if(!r)return Fu=void 0,e.toPrecision(t);var n=r[0],i=r[1],o=i-(Fu=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,s=n.length;return o===s?n:o>s?n+new Array(o-s+1).join("0"):o>0?n.slice(0,o)+"."+n.slice(o):"0."+new Array(1-o).join("0")+Lu(e,Math.max(0,t+o-1))[0]}function s5(e,t){var r=Lu(e,t);if(!r)return e+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const u5={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:_M,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>s5(e*100,t),r:s5,s:PM,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function c5(e){return e}var f5=Array.prototype.map,d5=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function kM(e){var t=e.grouping===void 0||e.thousands===void 0?c5:jM(f5.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?c5:OM(f5.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"−":e.minus+"",f=e.nan===void 0?"NaN":e.nan+"";function d(h,y){h=cl(h);var g=h.fill,_=h.align,S=h.sign,x=h.symbol,j=h.zero,A=h.width,E=h.comma,T=h.precision,O=h.trim,P=h.type;P==="n"?(E=!0,P="g"):u5[P]||(T===void 0&&(T=12),O=!0,P="g"),(j||g==="0"&&_==="=")&&(j=!0,g="0",_="=");var C=(y&&y.prefix!==void 0?y.prefix:"")+(x==="$"?r:x==="#"&&/[boxX]/.test(P)?"0"+P.toLowerCase():""),R=(x==="$"?n:/[%p]/.test(P)?s:"")+(y&&y.suffix!==void 0?y.suffix:""),$=u5[P],z=/[defgprs%]/.test(P);T=T===void 0?6:/[gprs]/.test(P)?Math.max(1,Math.min(21,T)):Math.max(0,Math.min(20,T));function q(M){var H=C,X=R,G,J,te;if(P==="c")X=$(M)+X,M="";else{M=+M;var K=M<0||1/M<0;if(M=isNaN(M)?f:$(Math.abs(M),T),O&&(M=EM(M)),K&&+M==0&&S!=="+"&&(K=!1),H=(K?S==="("?S:u:S==="-"||S==="("?"":S)+H,X=(P==="s"&&!isNaN(M)&&Fu!==void 0?d5[8+Fu/3]:"")+X+(K&&S==="("?")":""),z){for(G=-1,J=M.length;++G<J;)if(te=M.charCodeAt(G),48>te||te>57){X=(te===46?i+M.slice(G+1):M.slice(G))+X,M=M.slice(0,G);break}}}E&&!j&&(M=t(M,1/0));var ee=H.length+M.length+X.length,Q=ee<A?new Array(A-ee+1).join(g):"";switch(E&&j&&(M=t(Q+M,Q.length?A-X.length:1/0),Q=""),_){case"<":M=H+M+X+Q;break;case"=":M=H+Q+M+X;break;case"^":M=Q.slice(0,ee=Q.length>>1)+H+M+X+Q.slice(ee);break;default:M=Q+H+M+X;break}return o(M)}return q.toString=function(){return h+""},q}function m(h,y){var g=Math.max(-8,Math.min(8,Math.floor(mi(y)/3)))*3,_=Math.pow(10,-g),S=d((h=cl(h),h.type="f",h),{suffix:d5[8+g/3]});return function(x){return S(_*x)}}return{format:d,formatPrefix:m}}var fu,ov,kj;TM({thousands:",",grouping:[3],currency:["$",""]});function TM(e){return fu=kM(e),ov=fu.format,kj=fu.formatPrefix,fu}function CM(e){return Math.max(0,-mi(Math.abs(e)))}function NM(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(mi(t)/3)))*3-mi(Math.abs(e)))}function DM(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,mi(t)-mi(e))+1}function Tj(e,t,r,n){var i=Ey(e,t,r),o;switch(n=cl(n??",f"),n.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(o=NM(i,s))&&(n.precision=o),kj(n,s)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(o=DM(i,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=o-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(o=CM(i))&&(n.precision=o-(n.type==="%")*2);break}}return ov(n)}function Yn(e){var t=e.domain;return e.ticks=function(r){var n=t();return Ay(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var i=t();return Tj(i[0],i[i.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),i=0,o=n.length-1,s=n[i],u=n[o],f,d,m=10;for(u<s&&(d=s,s=u,u=d,d=i,i=o,o=d);m-- >0;){if(d=_j(s,u,r),d===f)return n[i]=s,n[o]=u,t(n);if(d>0)s=Math.floor(s/d)*d,u=Math.ceil(u/d)*d;else if(d<0)s=Math.ceil(s*d)/d,u=Math.floor(u*d)/d;else break;f=d}return e},e}function Bu(){var e=av();return e.copy=function(){return Hl(e,Bu())},vr.apply(e,arguments),Yn(e)}function Cj(e){var t;function r(n){return n==null||isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(n){return arguments.length?(e=Array.from(n,$u),r):e.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return Cj(e).unknown(t)},e=arguments.length?Array.from(e,$u):[0,1],Yn(r)}function Nj(e,t){e=e.slice();var r=0,n=e.length-1,i=e[r],o=e[n],s;return o<i&&(s=r,r=n,n=s,s=i,i=o,o=s),e[r]=t.floor(i),e[n]=t.ceil(o),e}function p5(e){return Math.log(e)}function h5(e){return Math.exp(e)}function MM(e){return-Math.log(-e)}function RM(e){return-Math.exp(-e)}function IM(e){return isFinite(e)?+("1e"+e):e<0?0:e}function $M(e){return e===10?IM:e===Math.E?Math.exp:t=>Math.pow(e,t)}function LM(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function m5(e){return(t,r)=>-e(-t,r)}function lv(e){const t=e(p5,h5),r=t.domain;let n=10,i,o;function s(){return i=LM(n),o=$M(n),r()[0]<0?(i=m5(i),o=m5(o),e(MM,RM)):e(p5,h5),t}return t.base=function(u){return arguments.length?(n=+u,s()):n},t.domain=function(u){return arguments.length?(r(u),s()):r()},t.ticks=u=>{const f=r();let d=f[0],m=f[f.length-1];const h=m<d;h&&([d,m]=[m,d]);let y=i(d),g=i(m),_,S;const x=u==null?10:+u;let j=[];if(!(n%1)&&g-y<x){if(y=Math.floor(y),g=Math.ceil(g),d>0){for(;y<=g;++y)for(_=1;_<n;++_)if(S=y<0?_/o(-y):_*o(y),!(S<d)){if(S>m)break;j.push(S)}}else for(;y<=g;++y)for(_=n-1;_>=1;--_)if(S=y>0?_/o(-y):_*o(y),!(S<d)){if(S>m)break;j.push(S)}j.length*2<x&&(j=Ay(d,m,x))}else j=Ay(y,g,Math.min(g-y,x)).map(o);return h?j.reverse():j},t.tickFormat=(u,f)=>{if(u==null&&(u=10),f==null&&(f=n===10?"s":","),typeof f!="function"&&(!(n%1)&&(f=cl(f)).precision==null&&(f.trim=!0),f=ov(f)),u===1/0)return f;const d=Math.max(1,n*u/t.ticks().length);return m=>{let h=m/o(Math.round(i(m)));return h*n<n-.5&&(h*=n),h<=d?f(m):""}},t.nice=()=>r(Nj(r(),{floor:u=>o(Math.floor(i(u))),ceil:u=>o(Math.ceil(i(u)))})),t}function Dj(){const e=lv(Nc()).domain([1,10]);return e.copy=()=>Hl(e,Dj()).base(e.base()),vr.apply(e,arguments),e}function y5(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function v5(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function sv(e){var t=1,r=e(y5(t),v5(t));return r.constant=function(n){return arguments.length?e(y5(t=+n),v5(t)):t},Yn(r)}function Mj(){var e=sv(Nc());return e.copy=function(){return Hl(e,Mj()).constant(e.constant())},vr.apply(e,arguments)}function g5(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function FM(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function BM(e){return e<0?-e*e:e*e}function uv(e){var t=e($t,$t),r=1;function n(){return r===1?e($t,$t):r===.5?e(FM,BM):e(g5(r),g5(1/r))}return t.exponent=function(i){return arguments.length?(r=+i,n()):r},Yn(t)}function cv(){var e=uv(Nc());return e.copy=function(){return Hl(e,cv()).exponent(e.exponent())},vr.apply(e,arguments),e}function qM(){return cv.apply(null,arguments).exponent(.5)}function b5(e){return Math.sign(e)*e*e}function zM(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function Rj(){var e=av(),t=[0,1],r=!1,n;function i(o){var s=zM(e(o));return isNaN(s)?n:r?Math.round(s):s}return i.invert=function(o){return e.invert(b5(o))},i.domain=function(o){return arguments.length?(e.domain(o),i):e.domain()},i.range=function(o){return arguments.length?(e.range((t=Array.from(o,$u)).map(b5)),i):t.slice()},i.rangeRound=function(o){return i.range(o).round(!0)},i.round=function(o){return arguments.length?(r=!!o,i):r},i.clamp=function(o){return arguments.length?(e.clamp(o),i):e.clamp()},i.unknown=function(o){return arguments.length?(n=o,i):n},i.copy=function(){return Rj(e.domain(),t).round(r).clamp(e.clamp()).unknown(n)},vr.apply(i,arguments),Yn(i)}function Ij(){var e=[],t=[],r=[],n;function i(){var s=0,u=Math.max(1,t.length);for(r=new Array(u-1);++s<u;)r[s-1]=XD(e,s/u);return o}function o(s){return s==null||isNaN(s=+s)?n:t[Ul(r,s)]}return o.invertExtent=function(s){var u=t.indexOf(s);return u<0?[NaN,NaN]:[u>0?r[u-1]:e[0],u<r.length?r[u]:e[e.length-1]]},o.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let u of s)u!=null&&!isNaN(u=+u)&&e.push(u);return e.sort(zl),i()},o.range=function(s){return arguments.length?(t=Array.from(s),i()):t.slice()},o.unknown=function(s){return arguments.length?(n=s,o):n},o.quantiles=function(){return r.slice()},o.copy=function(){return Ij().domain(e).range(t).unknown(n)},vr.apply(o,arguments)}function $j(){var e=0,t=1,r=1,n=[.5],i=[0,1],o;function s(f){return f!=null&&f<=f?i[Ul(n,f,0,r)]:o}function u(){var f=-1;for(n=new Array(r);++f<r;)n[f]=((f+1)*t-(f-r)*e)/(r+1);return s}return s.domain=function(f){return arguments.length?([e,t]=f,e=+e,t=+t,u()):[e,t]},s.range=function(f){return arguments.length?(r=(i=Array.from(f)).length-1,u()):i.slice()},s.invertExtent=function(f){var d=i.indexOf(f);return d<0?[NaN,NaN]:d<1?[e,n[0]]:d>=r?[n[r-1],t]:[n[d-1],n[d]]},s.unknown=function(f){return arguments.length&&(o=f),s},s.thresholds=function(){return n.slice()},s.copy=function(){return $j().domain([e,t]).range(i).unknown(o)},vr.apply(Yn(s),arguments)}function Lj(){var e=[.5],t=[0,1],r,n=1;function i(o){return o!=null&&o<=o?t[Ul(e,o,0,n)]:r}return i.domain=function(o){return arguments.length?(e=Array.from(o),n=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(o){return arguments.length?(t=Array.from(o),n=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(o){var s=t.indexOf(o);return[e[s-1],e[s]]},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return Lj().domain(e).range(t).unknown(r)},vr.apply(i,arguments)}const lm=new Date,sm=new Date;function mt(e,t,r,n){function i(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return i.floor=o=>(e(o=new Date(+o)),o),i.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),i.round=o=>{const s=i(o),u=i.ceil(o);return o-s<u-o?s:u},i.offset=(o,s)=>(t(o=new Date(+o),s==null?1:Math.floor(s)),o),i.range=(o,s,u)=>{const f=[];if(o=i.ceil(o),u=u==null?1:Math.floor(u),!(o<s)||!(u>0))return f;let d;do f.push(d=new Date(+o)),t(o,u),e(o);while(d<o&&o<s);return f},i.filter=o=>mt(s=>{if(s>=s)for(;e(s),!o(s);)s.setTime(s-1)},(s,u)=>{if(s>=s)if(u<0)for(;++u<=0;)for(;t(s,-1),!o(s););else for(;--u>=0;)for(;t(s,1),!o(s););}),r&&(i.count=(o,s)=>(lm.setTime(+o),sm.setTime(+s),e(lm),e(sm),Math.floor(r(lm,sm))),i.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?i.filter(n?s=>n(s)%o===0:s=>i.count(0,s)%o===0):i)),i}const qu=mt(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);qu.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?mt(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):qu);qu.range;const un=1e3,dr=un*60,cn=dr*60,gn=cn*24,fv=gn*7,x5=gn*30,um=gn*365,ya=mt(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*un)},(e,t)=>(t-e)/un,e=>e.getUTCSeconds());ya.range;const dv=mt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*un)},(e,t)=>{e.setTime(+e+t*dr)},(e,t)=>(t-e)/dr,e=>e.getMinutes());dv.range;const pv=mt(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*dr)},(e,t)=>(t-e)/dr,e=>e.getUTCMinutes());pv.range;const hv=mt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*un-e.getMinutes()*dr)},(e,t)=>{e.setTime(+e+t*cn)},(e,t)=>(t-e)/cn,e=>e.getHours());hv.range;const mv=mt(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*cn)},(e,t)=>(t-e)/cn,e=>e.getUTCHours());mv.range;const Vl=mt(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*dr)/gn,e=>e.getDate()-1);Vl.range;const Dc=mt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/gn,e=>e.getUTCDate()-1);Dc.range;const Fj=mt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/gn,e=>Math.floor(e/gn));Fj.range;function ja(e){return mt(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*dr)/fv)}const Mc=ja(0),zu=ja(1),UM=ja(2),WM=ja(3),yi=ja(4),HM=ja(5),VM=ja(6);Mc.range;zu.range;UM.range;WM.range;yi.range;HM.range;VM.range;function Oa(e){return mt(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/fv)}const Rc=Oa(0),Uu=Oa(1),KM=Oa(2),GM=Oa(3),vi=Oa(4),XM=Oa(5),YM=Oa(6);Rc.range;Uu.range;KM.range;GM.range;vi.range;XM.range;YM.range;const yv=mt(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());yv.range;const vv=mt(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());vv.range;const bn=mt(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());bn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:mt(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});bn.range;const xn=mt(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());xn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:mt(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});xn.range;function Bj(e,t,r,n,i,o){const s=[[ya,1,un],[ya,5,5*un],[ya,15,15*un],[ya,30,30*un],[o,1,dr],[o,5,5*dr],[o,15,15*dr],[o,30,30*dr],[i,1,cn],[i,3,3*cn],[i,6,6*cn],[i,12,12*cn],[n,1,gn],[n,2,2*gn],[r,1,fv],[t,1,x5],[t,3,3*x5],[e,1,um]];function u(d,m,h){const y=m<d;y&&([d,m]=[m,d]);const g=h&&typeof h.range=="function"?h:f(d,m,h),_=g?g.range(d,+m+1):[];return y?_.reverse():_}function f(d,m,h){const y=Math.abs(m-d)/h,g=Z2(([,,x])=>x).right(s,y);if(g===s.length)return e.every(Ey(d/um,m/um,h));if(g===0)return qu.every(Math.max(Ey(d,m,h),1));const[_,S]=s[y/s[g-1][2]<s[g][2]/y?g-1:g];return _.every(S)}return[u,f]}const[QM,JM]=Bj(xn,vv,Rc,Fj,mv,pv),[ZM,eR]=Bj(bn,yv,Mc,Vl,hv,dv);function cm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function fm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Ro(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function tR(e){var t=e.dateTime,r=e.date,n=e.time,i=e.periods,o=e.days,s=e.shortDays,u=e.months,f=e.shortMonths,d=Io(i),m=$o(i),h=Io(o),y=$o(o),g=Io(s),_=$o(s),S=Io(u),x=$o(u),j=Io(f),A=$o(f),E={a:te,A:K,b:ee,B:Q,c:null,d:A5,e:A5,f:jR,g:MR,G:IR,H:wR,I:SR,j:_R,L:qj,m:OR,M:AR,p:I,q:U,Q:k5,s:T5,S:ER,u:PR,U:kR,V:TR,w:CR,W:NR,x:null,X:null,y:DR,Y:RR,Z:$R,"%":P5},T={a:se,A:me,b:be,B:je,c:null,d:E5,e:E5,f:qR,g:QR,G:ZR,H:LR,I:FR,j:BR,L:Uj,m:zR,M:UR,p:De,q:Oe,Q:k5,s:T5,S:WR,u:HR,U:VR,V:KR,w:GR,W:XR,x:null,X:null,y:YR,Y:JR,Z:eI,"%":P5},O={a:z,A:q,b:M,B:H,c:X,d:j5,e:j5,f:vR,g:_5,G:S5,H:O5,I:O5,j:pR,L:yR,m:dR,M:hR,p:$,q:fR,Q:bR,s:xR,S:mR,u:oR,U:lR,V:sR,w:iR,W:uR,x:G,X:J,y:_5,Y:S5,Z:cR,"%":gR};E.x=P(r,E),E.X=P(n,E),E.c=P(t,E),T.x=P(r,T),T.X=P(n,T),T.c=P(t,T);function P(oe,ge){return function(Ae){var ae=[],ze=-1,Te=0,tt=oe.length,rt,yt,gr;for(Ae instanceof Date||(Ae=new Date(+Ae));++ze<tt;)oe.charCodeAt(ze)===37&&(ae.push(oe.slice(Te,ze)),(yt=w5[rt=oe.charAt(++ze)])!=null?rt=oe.charAt(++ze):yt=rt==="e"?" ":"0",(gr=ge[rt])&&(rt=gr(Ae,yt)),ae.push(rt),Te=ze+1);return ae.push(oe.slice(Te,ze)),ae.join("")}}function C(oe,ge){return function(Ae){var ae=Ro(1900,void 0,1),ze=R(ae,oe,Ae+="",0),Te,tt;if(ze!=Ae.length)return null;if("Q"in ae)return new Date(ae.Q);if("s"in ae)return new Date(ae.s*1e3+("L"in ae?ae.L:0));if(ge&&!("Z"in ae)&&(ae.Z=0),"p"in ae&&(ae.H=ae.H%12+ae.p*12),ae.m===void 0&&(ae.m="q"in ae?ae.q:0),"V"in ae){if(ae.V<1||ae.V>53)return null;"w"in ae||(ae.w=1),"Z"in ae?(Te=fm(Ro(ae.y,0,1)),tt=Te.getUTCDay(),Te=tt>4||tt===0?Uu.ceil(Te):Uu(Te),Te=Dc.offset(Te,(ae.V-1)*7),ae.y=Te.getUTCFullYear(),ae.m=Te.getUTCMonth(),ae.d=Te.getUTCDate()+(ae.w+6)%7):(Te=cm(Ro(ae.y,0,1)),tt=Te.getDay(),Te=tt>4||tt===0?zu.ceil(Te):zu(Te),Te=Vl.offset(Te,(ae.V-1)*7),ae.y=Te.getFullYear(),ae.m=Te.getMonth(),ae.d=Te.getDate()+(ae.w+6)%7)}else("W"in ae||"U"in ae)&&("w"in ae||(ae.w="u"in ae?ae.u%7:"W"in ae?1:0),tt="Z"in ae?fm(Ro(ae.y,0,1)).getUTCDay():cm(Ro(ae.y,0,1)).getDay(),ae.m=0,ae.d="W"in ae?(ae.w+6)%7+ae.W*7-(tt+5)%7:ae.w+ae.U*7-(tt+6)%7);return"Z"in ae?(ae.H+=ae.Z/100|0,ae.M+=ae.Z%100,fm(ae)):cm(ae)}}function R(oe,ge,Ae,ae){for(var ze=0,Te=ge.length,tt=Ae.length,rt,yt;ze<Te;){if(ae>=tt)return-1;if(rt=ge.charCodeAt(ze++),rt===37){if(rt=ge.charAt(ze++),yt=O[rt in w5?ge.charAt(ze++):rt],!yt||(ae=yt(oe,Ae,ae))<0)return-1}else if(rt!=Ae.charCodeAt(ae++))return-1}return ae}function $(oe,ge,Ae){var ae=d.exec(ge.slice(Ae));return ae?(oe.p=m.get(ae[0].toLowerCase()),Ae+ae[0].length):-1}function z(oe,ge,Ae){var ae=g.exec(ge.slice(Ae));return ae?(oe.w=_.get(ae[0].toLowerCase()),Ae+ae[0].length):-1}function q(oe,ge,Ae){var ae=h.exec(ge.slice(Ae));return ae?(oe.w=y.get(ae[0].toLowerCase()),Ae+ae[0].length):-1}function M(oe,ge,Ae){var ae=j.exec(ge.slice(Ae));return ae?(oe.m=A.get(ae[0].toLowerCase()),Ae+ae[0].length):-1}function H(oe,ge,Ae){var ae=S.exec(ge.slice(Ae));return ae?(oe.m=x.get(ae[0].toLowerCase()),Ae+ae[0].length):-1}function X(oe,ge,Ae){return R(oe,t,ge,Ae)}function G(oe,ge,Ae){return R(oe,r,ge,Ae)}function J(oe,ge,Ae){return R(oe,n,ge,Ae)}function te(oe){return s[oe.getDay()]}function K(oe){return o[oe.getDay()]}function ee(oe){return f[oe.getMonth()]}function Q(oe){return u[oe.getMonth()]}function I(oe){return i[+(oe.getHours()>=12)]}function U(oe){return 1+~~(oe.getMonth()/3)}function se(oe){return s[oe.getUTCDay()]}function me(oe){return o[oe.getUTCDay()]}function be(oe){return f[oe.getUTCMonth()]}function je(oe){return u[oe.getUTCMonth()]}function De(oe){return i[+(oe.getUTCHours()>=12)]}function Oe(oe){return 1+~~(oe.getUTCMonth()/3)}return{format:function(oe){var ge=P(oe+="",E);return ge.toString=function(){return oe},ge},parse:function(oe){var ge=C(oe+="",!1);return ge.toString=function(){return oe},ge},utcFormat:function(oe){var ge=P(oe+="",T);return ge.toString=function(){return oe},ge},utcParse:function(oe){var ge=C(oe+="",!0);return ge.toString=function(){return oe},ge}}}var w5={"-":"",_:" ",0:"0"},wt=/^\s*\d+/,rR=/^%/,nR=/[\\^$*+?|[\]().{}]/g;function $e(e,t,r){var n=e<0?"-":"",i=(n?-e:e)+"",o=i.length;return n+(o<r?new Array(r-o+1).join(t)+i:i)}function aR(e){return e.replace(nR,"\\$&")}function Io(e){return new RegExp("^(?:"+e.map(aR).join("|")+")","i")}function $o(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function iR(e,t,r){var n=wt.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function oR(e,t,r){var n=wt.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function lR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function sR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function uR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function S5(e,t,r){var n=wt.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function _5(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function cR(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function fR(e,t,r){var n=wt.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function dR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function j5(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function pR(e,t,r){var n=wt.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function O5(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function hR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function mR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function yR(e,t,r){var n=wt.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function vR(e,t,r){var n=wt.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function gR(e,t,r){var n=rR.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function bR(e,t,r){var n=wt.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function xR(e,t,r){var n=wt.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function A5(e,t){return $e(e.getDate(),t,2)}function wR(e,t){return $e(e.getHours(),t,2)}function SR(e,t){return $e(e.getHours()%12||12,t,2)}function _R(e,t){return $e(1+Vl.count(bn(e),e),t,3)}function qj(e,t){return $e(e.getMilliseconds(),t,3)}function jR(e,t){return qj(e,t)+"000"}function OR(e,t){return $e(e.getMonth()+1,t,2)}function AR(e,t){return $e(e.getMinutes(),t,2)}function ER(e,t){return $e(e.getSeconds(),t,2)}function PR(e){var t=e.getDay();return t===0?7:t}function kR(e,t){return $e(Mc.count(bn(e)-1,e),t,2)}function zj(e){var t=e.getDay();return t>=4||t===0?yi(e):yi.ceil(e)}function TR(e,t){return e=zj(e),$e(yi.count(bn(e),e)+(bn(e).getDay()===4),t,2)}function CR(e){return e.getDay()}function NR(e,t){return $e(zu.count(bn(e)-1,e),t,2)}function DR(e,t){return $e(e.getFullYear()%100,t,2)}function MR(e,t){return e=zj(e),$e(e.getFullYear()%100,t,2)}function RR(e,t){return $e(e.getFullYear()%1e4,t,4)}function IR(e,t){var r=e.getDay();return e=r>=4||r===0?yi(e):yi.ceil(e),$e(e.getFullYear()%1e4,t,4)}function $R(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+$e(t/60|0,"0",2)+$e(t%60,"0",2)}function E5(e,t){return $e(e.getUTCDate(),t,2)}function LR(e,t){return $e(e.getUTCHours(),t,2)}function FR(e,t){return $e(e.getUTCHours()%12||12,t,2)}function BR(e,t){return $e(1+Dc.count(xn(e),e),t,3)}function Uj(e,t){return $e(e.getUTCMilliseconds(),t,3)}function qR(e,t){return Uj(e,t)+"000"}function zR(e,t){return $e(e.getUTCMonth()+1,t,2)}function UR(e,t){return $e(e.getUTCMinutes(),t,2)}function WR(e,t){return $e(e.getUTCSeconds(),t,2)}function HR(e){var t=e.getUTCDay();return t===0?7:t}function VR(e,t){return $e(Rc.count(xn(e)-1,e),t,2)}function Wj(e){var t=e.getUTCDay();return t>=4||t===0?vi(e):vi.ceil(e)}function KR(e,t){return e=Wj(e),$e(vi.count(xn(e),e)+(xn(e).getUTCDay()===4),t,2)}function GR(e){return e.getUTCDay()}function XR(e,t){return $e(Uu.count(xn(e)-1,e),t,2)}function YR(e,t){return $e(e.getUTCFullYear()%100,t,2)}function QR(e,t){return e=Wj(e),$e(e.getUTCFullYear()%100,t,2)}function JR(e,t){return $e(e.getUTCFullYear()%1e4,t,4)}function ZR(e,t){var r=e.getUTCDay();return e=r>=4||r===0?vi(e):vi.ceil(e),$e(e.getUTCFullYear()%1e4,t,4)}function eI(){return"+0000"}function P5(){return"%"}function k5(e){return+e}function T5(e){return Math.floor(+e/1e3)}var ei,Hj,Vj;tI({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function tI(e){return ei=tR(e),Hj=ei.format,ei.parse,Vj=ei.utcFormat,ei.utcParse,ei}function rI(e){return new Date(e)}function nI(e){return e instanceof Date?+e:+new Date(+e)}function gv(e,t,r,n,i,o,s,u,f,d){var m=av(),h=m.invert,y=m.domain,g=d(".%L"),_=d(":%S"),S=d("%I:%M"),x=d("%I %p"),j=d("%a %d"),A=d("%b %d"),E=d("%B"),T=d("%Y");function O(P){return(f(P)<P?g:u(P)<P?_:s(P)<P?S:o(P)<P?x:n(P)<P?i(P)<P?j:A:r(P)<P?E:T)(P)}return m.invert=function(P){return new Date(h(P))},m.domain=function(P){return arguments.length?y(Array.from(P,nI)):y().map(rI)},m.ticks=function(P){var C=y();return e(C[0],C[C.length-1],P??10)},m.tickFormat=function(P,C){return C==null?O:d(C)},m.nice=function(P){var C=y();return(!P||typeof P.range!="function")&&(P=t(C[0],C[C.length-1],P??10)),P?y(Nj(C,P)):m},m.copy=function(){return Hl(m,gv(e,t,r,n,i,o,s,u,f,d))},m}function aI(){return vr.apply(gv(ZM,eR,bn,yv,Mc,Vl,hv,dv,ya,Hj).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function iI(){return vr.apply(gv(QM,JM,xn,vv,Rc,Dc,mv,pv,ya,Vj).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Ic(){var e=0,t=1,r,n,i,o,s=$t,u=!1,f;function d(h){return h==null||isNaN(h=+h)?f:s(i===0?.5:(h=(o(h)-r)*i,u?Math.max(0,Math.min(1,h)):h))}d.domain=function(h){return arguments.length?([e,t]=h,r=o(e=+e),n=o(t=+t),i=r===n?0:1/(n-r),d):[e,t]},d.clamp=function(h){return arguments.length?(u=!!h,d):u},d.interpolator=function(h){return arguments.length?(s=h,d):s};function m(h){return function(y){var g,_;return arguments.length?([g,_]=y,s=h(g,_),d):[s(0),s(1)]}}return d.range=m(Li),d.rangeRound=m(nv),d.unknown=function(h){return arguments.length?(f=h,d):f},function(h){return o=h,r=h(e),n=h(t),i=r===n?0:1/(n-r),d}}function Qn(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function Kj(){var e=Yn(Ic()($t));return e.copy=function(){return Qn(e,Kj())},jn.apply(e,arguments)}function Gj(){var e=lv(Ic()).domain([1,10]);return e.copy=function(){return Qn(e,Gj()).base(e.base())},jn.apply(e,arguments)}function Xj(){var e=sv(Ic());return e.copy=function(){return Qn(e,Xj()).constant(e.constant())},jn.apply(e,arguments)}function bv(){var e=uv(Ic());return e.copy=function(){return Qn(e,bv()).exponent(e.exponent())},jn.apply(e,arguments)}function oI(){return bv.apply(null,arguments).exponent(.5)}function Yj(){var e=[],t=$t;function r(n){if(n!=null&&!isNaN(n=+n))return t((Ul(e,n,1)-1)/(e.length-1))}return r.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let i of n)i!=null&&!isNaN(i=+i)&&e.push(i);return e.sort(zl),r},r.interpolator=function(n){return arguments.length?(t=n,r):t},r.range=function(){return e.map((n,i)=>t(i/(e.length-1)))},r.quantiles=function(n){return Array.from({length:n+1},(i,o)=>GD(e,o/n))},r.copy=function(){return Yj(t).domain(e)},jn.apply(r,arguments)}function $c(){var e=0,t=.5,r=1,n=1,i,o,s,u,f,d=$t,m,h=!1,y;function g(S){return isNaN(S=+S)?y:(S=.5+((S=+m(S))-o)*(n*S<n*o?u:f),d(h?Math.max(0,Math.min(1,S)):S))}g.domain=function(S){return arguments.length?([e,t,r]=S,i=m(e=+e),o=m(t=+t),s=m(r=+r),u=i===o?0:.5/(o-i),f=o===s?0:.5/(s-o),n=o<i?-1:1,g):[e,t,r]},g.clamp=function(S){return arguments.length?(h=!!S,g):h},g.interpolator=function(S){return arguments.length?(d=S,g):d};function _(S){return function(x){var j,A,E;return arguments.length?([j,A,E]=x,d=gM(S,[j,A,E]),g):[d(0),d(.5),d(1)]}}return g.range=_(Li),g.rangeRound=_(nv),g.unknown=function(S){return arguments.length?(y=S,g):y},function(S){return m=S,i=S(e),o=S(t),s=S(r),u=i===o?0:.5/(o-i),f=o===s?0:.5/(s-o),n=o<i?-1:1,g}}function Qj(){var e=Yn($c()($t));return e.copy=function(){return Qn(e,Qj())},jn.apply(e,arguments)}function Jj(){var e=lv($c()).domain([.1,1,10]);return e.copy=function(){return Qn(e,Jj()).base(e.base())},jn.apply(e,arguments)}function Zj(){var e=sv($c());return e.copy=function(){return Qn(e,Zj()).constant(e.constant())},jn.apply(e,arguments)}function xv(){var e=uv($c());return e.copy=function(){return Qn(e,xv()).exponent(e.exponent())},jn.apply(e,arguments)}function lI(){return xv.apply(null,arguments).exponent(.5)}const C5=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:ol,scaleDiverging:Qj,scaleDivergingLog:Jj,scaleDivergingPow:xv,scaleDivergingSqrt:lI,scaleDivergingSymlog:Zj,scaleIdentity:Cj,scaleImplicit:Py,scaleLinear:Bu,scaleLog:Dj,scaleOrdinal:ev,scalePoint:Go,scalePow:cv,scaleQuantile:Ij,scaleQuantize:$j,scaleRadial:Rj,scaleSequential:Kj,scaleSequentialLog:Gj,scaleSequentialPow:bv,scaleSequentialQuantile:Yj,scaleSequentialSqrt:oI,scaleSequentialSymlog:Xj,scaleSqrt:qM,scaleSymlog:Mj,scaleThreshold:Lj,scaleTime:aI,scaleUtc:iI,tickFormat:Tj},Symbol.toStringTag,{value:"Module"}));var dm,N5;function eO(){if(N5)return dm;N5=1;var e=Mi();function t(r,n,i){for(var o=-1,s=r.length;++o<s;){var u=r[o],f=n(u);if(f!=null&&(d===void 0?f===f&&!e(f):i(f,d)))var d=f,m=u}return m}return dm=t,dm}var pm,D5;function sI(){if(D5)return pm;D5=1;function e(t,r){return t>r}return pm=e,pm}var hm,M5;function uI(){if(M5)return hm;M5=1;var e=eO(),t=sI(),r=Ii();function n(i){return i&&i.length?e(i,r,t):void 0}return hm=n,hm}var cI=uI();const Lc=We(cI);var mm,R5;function fI(){if(R5)return mm;R5=1;function e(t,r){return t<r}return mm=e,mm}var ym,I5;function dI(){if(I5)return ym;I5=1;var e=eO(),t=fI(),r=Ii();function n(i){return i&&i.length?e(i,r,t):void 0}return ym=n,ym}var pI=dI();const Fc=We(pI);var vm,$5;function hI(){if($5)return vm;$5=1;var e=R2(),t=Xn(),r=uj(),n=Ht();function i(o,s){var u=n(o)?e:r;return u(o,t(s,3))}return vm=i,vm}var gm,L5;function mI(){if(L5)return gm;L5=1;var e=lj(),t=hI();function r(n,i){return e(t(n,i),1)}return gm=r,gm}var yI=mI();const vI=We(yI);var bm,F5;function gI(){if(F5)return bm;F5=1;var e=G2();function t(r,n){return e(r,n)}return bm=t,bm}var bI=gI();const Bc=We(bI);var Fi=1e9,xI={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},Sv,Qe=!0,mr="[DecimalError] ",ga=mr+"Invalid argument: ",wv=mr+"Exponent out of range: ",Bi=Math.floor,ha=Math.pow,wI=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Zt,xt=1e7,Xe=7,tO=9007199254740991,Wu=Bi(tO/Xe),pe={};pe.absoluteValue=pe.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};pe.comparedTo=pe.cmp=function(e){var t,r,n,i,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(n=o.d.length,i=e.d.length,t=0,r=n<i?n:i;t<r;++t)if(o.d[t]!==e.d[t])return o.d[t]>e.d[t]^o.s<0?1:-1;return n===i?0:n>i^o.s<0?1:-1};pe.decimalPlaces=pe.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*Xe;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r};pe.dividedBy=pe.div=function(e){return mn(this,new this.constructor(e))};pe.dividedToIntegerBy=pe.idiv=function(e){var t=this,r=t.constructor;return Ue(mn(t,new r(e),0,1),r.precision)};pe.equals=pe.eq=function(e){return!this.cmp(e)};pe.exponent=function(){return ct(this)};pe.greaterThan=pe.gt=function(e){return this.cmp(e)>0};pe.greaterThanOrEqualTo=pe.gte=function(e){return this.cmp(e)>=0};pe.isInteger=pe.isint=function(){return this.e>this.d.length-2};pe.isNegative=pe.isneg=function(){return this.s<0};pe.isPositive=pe.ispos=function(){return this.s>0};pe.isZero=function(){return this.s===0};pe.lessThan=pe.lt=function(e){return this.cmp(e)<0};pe.lessThanOrEqualTo=pe.lte=function(e){return this.cmp(e)<1};pe.logarithm=pe.log=function(e){var t,r=this,n=r.constructor,i=n.precision,o=i+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(Zt))throw Error(mr+"NaN");if(r.s<1)throw Error(mr+(r.s?"NaN":"-Infinity"));return r.eq(Zt)?new n(0):(Qe=!1,t=mn(fl(r,o),fl(e,o),o),Qe=!0,Ue(t,i))};pe.minus=pe.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?aO(t,e):rO(t,(e.s=-e.s,e))};pe.modulo=pe.mod=function(e){var t,r=this,n=r.constructor,i=n.precision;if(e=new n(e),!e.s)throw Error(mr+"NaN");return r.s?(Qe=!1,t=mn(r,e,0,1).times(e),Qe=!0,r.minus(t)):Ue(new n(r),i)};pe.naturalExponential=pe.exp=function(){return nO(this)};pe.naturalLogarithm=pe.ln=function(){return fl(this)};pe.negated=pe.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};pe.plus=pe.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?rO(t,e):aO(t,(e.s=-e.s,e))};pe.precision=pe.sd=function(e){var t,r,n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(ga+e);if(t=ct(i)+1,n=i.d.length-1,r=n*Xe+1,n=i.d[n],n){for(;n%10==0;n/=10)r--;for(n=i.d[0];n>=10;n/=10)r++}return e&&t>r?t:r};pe.squareRoot=pe.sqrt=function(){var e,t,r,n,i,o,s,u=this,f=u.constructor;if(u.s<1){if(!u.s)return new f(0);throw Error(mr+"NaN")}for(e=ct(u),Qe=!1,i=Math.sqrt(+u),i==0||i==1/0?(t=Hr(u.d),(t.length+e)%2==0&&(t+="0"),i=Math.sqrt(t),e=Bi((e+1)/2)-(e<0||e%2),i==1/0?t="5e"+e:(t=i.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new f(t)):n=new f(i.toString()),r=f.precision,i=s=r+3;;)if(o=n,n=o.plus(mn(u,o,s+2)).times(.5),Hr(o.d).slice(0,s)===(t=Hr(n.d)).slice(0,s)){if(t=t.slice(s-3,s+1),i==s&&t=="4999"){if(Ue(o,r+1,0),o.times(o).eq(u)){n=o;break}}else if(t!="9999")break;s+=4}return Qe=!0,Ue(n,r)};pe.times=pe.mul=function(e){var t,r,n,i,o,s,u,f,d,m=this,h=m.constructor,y=m.d,g=(e=new h(e)).d;if(!m.s||!e.s)return new h(0);for(e.s*=m.s,r=m.e+e.e,f=y.length,d=g.length,f<d&&(o=y,y=g,g=o,s=f,f=d,d=s),o=[],s=f+d,n=s;n--;)o.push(0);for(n=d;--n>=0;){for(t=0,i=f+n;i>n;)u=o[i]+g[n]*y[i-n-1]+t,o[i--]=u%xt|0,t=u/xt|0;o[i]=(o[i]+t)%xt|0}for(;!o[--s];)o.pop();return t?++r:o.shift(),e.d=o,e.e=r,Qe?Ue(e,h.precision):e};pe.toDecimalPlaces=pe.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(Yr(e,0,Fi),t===void 0?t=n.rounding:Yr(t,0,8),Ue(r,e+ct(r)+1,t))};pe.toExponential=function(e,t){var r,n=this,i=n.constructor;return e===void 0?r=xa(n,!0):(Yr(e,0,Fi),t===void 0?t=i.rounding:Yr(t,0,8),n=Ue(new i(n),e+1,t),r=xa(n,!0,e+1)),r};pe.toFixed=function(e,t){var r,n,i=this,o=i.constructor;return e===void 0?xa(i):(Yr(e,0,Fi),t===void 0?t=o.rounding:Yr(t,0,8),n=Ue(new o(i),e+ct(i)+1,t),r=xa(n.abs(),!1,e+ct(n)+1),i.isneg()&&!i.isZero()?"-"+r:r)};pe.toInteger=pe.toint=function(){var e=this,t=e.constructor;return Ue(new t(e),ct(e)+1,t.rounding)};pe.toNumber=function(){return+this};pe.toPower=pe.pow=function(e){var t,r,n,i,o,s,u=this,f=u.constructor,d=12,m=+(e=new f(e));if(!e.s)return new f(Zt);if(u=new f(u),!u.s){if(e.s<1)throw Error(mr+"Infinity");return u}if(u.eq(Zt))return u;if(n=f.precision,e.eq(Zt))return Ue(u,n);if(t=e.e,r=e.d.length-1,s=t>=r,o=u.s,s){if((r=m<0?-m:m)<=tO){for(i=new f(Zt),t=Math.ceil(n/Xe+4),Qe=!1;r%2&&(i=i.times(u),q5(i.d,t)),r=Bi(r/2),r!==0;)u=u.times(u),q5(u.d,t);return Qe=!0,e.s<0?new f(Zt).div(i):Ue(i,n)}}else if(o<0)throw Error(mr+"NaN");return o=o<0&&e.d[Math.max(t,r)]&1?-1:1,u.s=1,Qe=!1,i=e.times(fl(u,n+d)),Qe=!0,i=nO(i),i.s=o,i};pe.toPrecision=function(e,t){var r,n,i=this,o=i.constructor;return e===void 0?(r=ct(i),n=xa(i,r<=o.toExpNeg||r>=o.toExpPos)):(Yr(e,1,Fi),t===void 0?t=o.rounding:Yr(t,0,8),i=Ue(new o(i),e,t),r=ct(i),n=xa(i,e<=r||r<=o.toExpNeg,e)),n};pe.toSignificantDigits=pe.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(Yr(e,1,Fi),t===void 0?t=n.rounding:Yr(t,0,8)),Ue(new n(r),e,t)};pe.toString=pe.valueOf=pe.val=pe.toJSON=pe[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=ct(e),r=e.constructor;return xa(e,t<=r.toExpNeg||t>=r.toExpPos)};function rO(e,t){var r,n,i,o,s,u,f,d,m=e.constructor,h=m.precision;if(!e.s||!t.s)return t.s||(t=new m(e)),Qe?Ue(t,h):t;if(f=e.d,d=t.d,s=e.e,i=t.e,f=f.slice(),o=s-i,o){for(o<0?(n=f,o=-o,u=d.length):(n=d,i=s,u=f.length),s=Math.ceil(h/Xe),u=s>u?s+1:u+1,o>u&&(o=u,n.length=1),n.reverse();o--;)n.push(0);n.reverse()}for(u=f.length,o=d.length,u-o<0&&(o=u,n=d,d=f,f=n),r=0;o;)r=(f[--o]=f[o]+d[o]+r)/xt|0,f[o]%=xt;for(r&&(f.unshift(r),++i),u=f.length;f[--u]==0;)f.pop();return t.d=f,t.e=i,Qe?Ue(t,h):t}function Yr(e,t,r){if(e!==~~e||e<t||e>r)throw Error(ga+e)}function Hr(e){var t,r,n,i=e.length-1,o="",s=e[0];if(i>0){for(o+=s,t=1;t<i;t++)n=e[t]+"",r=Xe-n.length,r&&(o+=Wn(r)),o+=n;s=e[t],n=s+"",r=Xe-n.length,r&&(o+=Wn(r))}else if(s===0)return"0";for(;s%10===0;)s/=10;return o+s}var mn=(function(){function e(n,i){var o,s=0,u=n.length;for(n=n.slice();u--;)o=n[u]*i+s,n[u]=o%xt|0,s=o/xt|0;return s&&n.unshift(s),n}function t(n,i,o,s){var u,f;if(o!=s)f=o>s?1:-1;else for(u=f=0;u<o;u++)if(n[u]!=i[u]){f=n[u]>i[u]?1:-1;break}return f}function r(n,i,o){for(var s=0;o--;)n[o]-=s,s=n[o]<i[o]?1:0,n[o]=s*xt+n[o]-i[o];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,o,s){var u,f,d,m,h,y,g,_,S,x,j,A,E,T,O,P,C,R,$=n.constructor,z=n.s==i.s?1:-1,q=n.d,M=i.d;if(!n.s)return new $(n);if(!i.s)throw Error(mr+"Division by zero");for(f=n.e-i.e,C=M.length,O=q.length,g=new $(z),_=g.d=[],d=0;M[d]==(q[d]||0);)++d;if(M[d]>(q[d]||0)&&--f,o==null?A=o=$.precision:s?A=o+(ct(n)-ct(i))+1:A=o,A<0)return new $(0);if(A=A/Xe+2|0,d=0,C==1)for(m=0,M=M[0],A++;(d<O||m)&&A--;d++)E=m*xt+(q[d]||0),_[d]=E/M|0,m=E%M|0;else{for(m=xt/(M[0]+1)|0,m>1&&(M=e(M,m),q=e(q,m),C=M.length,O=q.length),T=C,S=q.slice(0,C),x=S.length;x<C;)S[x++]=0;R=M.slice(),R.unshift(0),P=M[0],M[1]>=xt/2&&++P;do m=0,u=t(M,S,C,x),u<0?(j=S[0],C!=x&&(j=j*xt+(S[1]||0)),m=j/P|0,m>1?(m>=xt&&(m=xt-1),h=e(M,m),y=h.length,x=S.length,u=t(h,S,y,x),u==1&&(m--,r(h,C<y?R:M,y))):(m==0&&(u=m=1),h=M.slice()),y=h.length,y<x&&h.unshift(0),r(S,h,x),u==-1&&(x=S.length,u=t(M,S,C,x),u<1&&(m++,r(S,C<x?R:M,x))),x=S.length):u===0&&(m++,S=[0]),_[d++]=m,u&&S[0]?S[x++]=q[T]||0:(S=[q[T]],x=1);while((T++<O||S[0]!==void 0)&&A--)}return _[0]||_.shift(),g.e=f,Ue(g,s?o+ct(g)+1:o)}})();function nO(e,t){var r,n,i,o,s,u,f=0,d=0,m=e.constructor,h=m.precision;if(ct(e)>16)throw Error(wv+ct(e));if(!e.s)return new m(Zt);for(Qe=!1,u=h,s=new m(.03125);e.abs().gte(.1);)e=e.times(s),d+=5;for(n=Math.log(ha(2,d))/Math.LN10*2+5|0,u+=n,r=i=o=new m(Zt),m.precision=u;;){if(i=Ue(i.times(e),u),r=r.times(++f),s=o.plus(mn(i,r,u)),Hr(s.d).slice(0,u)===Hr(o.d).slice(0,u)){for(;d--;)o=Ue(o.times(o),u);return m.precision=h,t==null?(Qe=!0,Ue(o,h)):o}o=s}}function ct(e){for(var t=e.e*Xe,r=e.d[0];r>=10;r/=10)t++;return t}function xm(e,t,r){if(t>e.LN10.sd())throw Qe=!0,r&&(e.precision=r),Error(mr+"LN10 precision limit exceeded");return Ue(new e(e.LN10),t)}function Wn(e){for(var t="";e--;)t+="0";return t}function fl(e,t){var r,n,i,o,s,u,f,d,m,h=1,y=10,g=e,_=g.d,S=g.constructor,x=S.precision;if(g.s<1)throw Error(mr+(g.s?"NaN":"-Infinity"));if(g.eq(Zt))return new S(0);if(t==null?(Qe=!1,d=x):d=t,g.eq(10))return t==null&&(Qe=!0),xm(S,d);if(d+=y,S.precision=d,r=Hr(_),n=r.charAt(0),o=ct(g),Math.abs(o)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)g=g.times(e),r=Hr(g.d),n=r.charAt(0),h++;o=ct(g),n>1?(g=new S("0."+r),o++):g=new S(n+"."+r.slice(1))}else return f=xm(S,d+2,x).times(o+""),g=fl(new S(n+"."+r.slice(1)),d-y).plus(f),S.precision=x,t==null?(Qe=!0,Ue(g,x)):g;for(u=s=g=mn(g.minus(Zt),g.plus(Zt),d),m=Ue(g.times(g),d),i=3;;){if(s=Ue(s.times(m),d),f=u.plus(mn(s,new S(i),d)),Hr(f.d).slice(0,d)===Hr(u.d).slice(0,d))return u=u.times(2),o!==0&&(u=u.plus(xm(S,d+2,x).times(o+""))),u=mn(u,new S(h),d),S.precision=x,t==null?(Qe=!0,Ue(u,x)):u;u=f,i+=2}}function B5(e,t){var r,n,i;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(i=t.length;t.charCodeAt(i-1)===48;)--i;if(t=t.slice(n,i),t){if(i-=n,r=r-n-1,e.e=Bi(r/Xe),e.d=[],n=(r+1)%Xe,r<0&&(n+=Xe),n<i){for(n&&e.d.push(+t.slice(0,n)),i-=Xe;n<i;)e.d.push(+t.slice(n,n+=Xe));t=t.slice(n),n=Xe-t.length}else n-=i;for(;n--;)t+="0";if(e.d.push(+t),Qe&&(e.e>Wu||e.e<-Wu))throw Error(wv+r)}else e.s=0,e.e=0,e.d=[0];return e}function Ue(e,t,r){var n,i,o,s,u,f,d,m,h=e.d;for(s=1,o=h[0];o>=10;o/=10)s++;if(n=t-s,n<0)n+=Xe,i=t,d=h[m=0];else{if(m=Math.ceil((n+1)/Xe),o=h.length,m>=o)return e;for(d=o=h[m],s=1;o>=10;o/=10)s++;n%=Xe,i=n-Xe+s}if(r!==void 0&&(o=ha(10,s-i-1),u=d/o%10|0,f=t<0||h[m+1]!==void 0||d%o,f=r<4?(u||f)&&(r==0||r==(e.s<0?3:2)):u>5||u==5&&(r==4||f||r==6&&(n>0?i>0?d/ha(10,s-i):0:h[m-1])%10&1||r==(e.s<0?8:7))),t<1||!h[0])return f?(o=ct(e),h.length=1,t=t-o-1,h[0]=ha(10,(Xe-t%Xe)%Xe),e.e=Bi(-t/Xe)||0):(h.length=1,h[0]=e.e=e.s=0),e;if(n==0?(h.length=m,o=1,m--):(h.length=m+1,o=ha(10,Xe-n),h[m]=i>0?(d/ha(10,s-i)%ha(10,i)|0)*o:0),f)for(;;)if(m==0){(h[0]+=o)==xt&&(h[0]=1,++e.e);break}else{if(h[m]+=o,h[m]!=xt)break;h[m--]=0,o=1}for(n=h.length;h[--n]===0;)h.pop();if(Qe&&(e.e>Wu||e.e<-Wu))throw Error(wv+ct(e));return e}function aO(e,t){var r,n,i,o,s,u,f,d,m,h,y=e.constructor,g=y.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new y(e),Qe?Ue(t,g):t;if(f=e.d,h=t.d,n=t.e,d=e.e,f=f.slice(),s=d-n,s){for(m=s<0,m?(r=f,s=-s,u=h.length):(r=h,n=d,u=f.length),i=Math.max(Math.ceil(g/Xe),u)+2,s>i&&(s=i,r.length=1),r.reverse(),i=s;i--;)r.push(0);r.reverse()}else{for(i=f.length,u=h.length,m=i<u,m&&(u=i),i=0;i<u;i++)if(f[i]!=h[i]){m=f[i]<h[i];break}s=0}for(m&&(r=f,f=h,h=r,t.s=-t.s),u=f.length,i=h.length-u;i>0;--i)f[u++]=0;for(i=h.length;i>s;){if(f[--i]<h[i]){for(o=i;o&&f[--o]===0;)f[o]=xt-1;--f[o],f[i]+=xt}f[i]-=h[i]}for(;f[--u]===0;)f.pop();for(;f[0]===0;f.shift())--n;return f[0]?(t.d=f,t.e=n,Qe?Ue(t,g):t):new y(0)}function xa(e,t,r){var n,i=ct(e),o=Hr(e.d),s=o.length;return t?(r&&(n=r-s)>0?o=o.charAt(0)+"."+o.slice(1)+Wn(n):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(i<0?"e":"e+")+i):i<0?(o="0."+Wn(-i-1)+o,r&&(n=r-s)>0&&(o+=Wn(n))):i>=s?(o+=Wn(i+1-s),r&&(n=r-i-1)>0&&(o=o+"."+Wn(n))):((n=i+1)<s&&(o=o.slice(0,n)+"."+o.slice(n)),r&&(n=r-s)>0&&(i+1===s&&(o+="."),o+=Wn(n))),e.s<0?"-"+o:o}function q5(e,t){if(e.length>t)return e.length=t,!0}function iO(e){var t,r,n;function i(o){var s=this;if(!(s instanceof i))return new i(o);if(s.constructor=i,o instanceof i){s.s=o.s,s.e=o.e,s.d=(o=o.d)?o.slice():o;return}if(typeof o=="number"){if(o*0!==0)throw Error(ga+o);if(o>0)s.s=1;else if(o<0)o=-o,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(o===~~o&&o<1e7){s.e=0,s.d=[o];return}return B5(s,o.toString())}else if(typeof o!="string")throw Error(ga+o);if(o.charCodeAt(0)===45?(o=o.slice(1),s.s=-1):s.s=1,wI.test(o))B5(s,o);else throw Error(ga+o)}if(i.prototype=pe,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=iO,i.config=i.set=SI,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return i.config(e),i}function SI(e){if(!e||typeof e!="object")throw Error(mr+"Object expected");var t,r,n,i=["precision",1,Fi,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<i.length;t+=3)if((n=e[r=i[t]])!==void 0)if(Bi(n)===n&&n>=i[t+1]&&n<=i[t+2])this[r]=n;else throw Error(ga+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(ga+r+": "+n);return this}var Sv=iO(xI);Zt=new Sv(1);const qe=Sv;function _I(e){return EI(e)||AI(e)||OI(e)||jI()}function jI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OI(e,t){if(e){if(typeof e=="string")return Ny(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ny(e,t)}}function AI(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function EI(e){if(Array.isArray(e))return Ny(e)}function Ny(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var PI=function(t){return t},oO={},lO=function(t){return t===oO},z5=function(t){return function r(){return arguments.length===0||arguments.length===1&&lO(arguments.length<=0?void 0:arguments[0])?r:t.apply(void 0,arguments)}},kI=function e(t,r){return t===1?r:z5(function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=i.filter(function(u){return u!==oO}).length;return s>=t?r.apply(void 0,i):e(t-s,z5(function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];var m=i.map(function(h){return lO(h)?f.shift():h});return r.apply(void 0,_I(m).concat(f))}))})},qc=function(t){return kI(t.length,t)},Dy=function(t,r){for(var n=[],i=t;i<r;++i)n[i-t]=i;return n},TI=qc(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(r){return t[r]}).map(e)}),CI=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(!r.length)return PI;var i=r.reverse(),o=i[0],s=i.slice(1);return function(){return s.reduce(function(u,f){return f(u)},o.apply(void 0,arguments))}},My=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},sO=function(t){var r=null,n=null;return function(){for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r&&o.every(function(u,f){return u===r[f]})||(r=o,n=t.apply(void 0,o)),n}};function NI(e){var t;return e===0?t=1:t=Math.floor(new qe(e).abs().log(10).toNumber())+1,t}function DI(e,t,r){for(var n=new qe(e),i=0,o=[];n.lt(t)&&i<1e5;)o.push(n.toNumber()),n=n.add(r),i++;return o}var MI=qc(function(e,t,r){var n=+e,i=+t;return n+r*(i-n)}),RI=qc(function(e,t,r){var n=t-+e;return n=n||1/0,(r-e)/n}),II=qc(function(e,t,r){var n=t-+e;return n=n||1/0,Math.max(0,Math.min(1,(r-e)/n))});const zc={rangeStep:DI,getDigitCount:NI,interpolateNumber:MI,uninterpolateNumber:RI,uninterpolateTruncation:II};function Ry(e){return FI(e)||LI(e)||uO(e)||$I()}function $I(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LI(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function FI(e){if(Array.isArray(e))return Iy(e)}function dl(e,t){return zI(e)||qI(e,t)||uO(e,t)||BI()}function BI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uO(e,t){if(e){if(typeof e=="string")return Iy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Iy(e,t)}}function Iy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function qI(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,i=!1,o=void 0;try{for(var s=e[Symbol.iterator](),u;!(n=(u=s.next()).done)&&(r.push(u.value),!(t&&r.length===t));n=!0);}catch(f){i=!0,o=f}finally{try{!n&&s.return!=null&&s.return()}finally{if(i)throw o}}return r}}function zI(e){if(Array.isArray(e))return e}function cO(e){var t=dl(e,2),r=t[0],n=t[1],i=r,o=n;return r>n&&(i=n,o=r),[i,o]}function fO(e,t,r){if(e.lte(0))return new qe(0);var n=zc.getDigitCount(e.toNumber()),i=new qe(10).pow(n),o=e.div(i),s=n!==1?.05:.1,u=new qe(Math.ceil(o.div(s).toNumber())).add(r).mul(s),f=u.mul(i);return t?f:new qe(Math.ceil(f))}function UI(e,t,r){var n=1,i=new qe(e);if(!i.isint()&&r){var o=Math.abs(e);o<1?(n=new qe(10).pow(zc.getDigitCount(e)-1),i=new qe(Math.floor(i.div(n).toNumber())).mul(n)):o>1&&(i=new qe(Math.floor(e)))}else e===0?i=new qe(Math.floor((t-1)/2)):r||(i=new qe(Math.floor(e)));var s=Math.floor((t-1)/2),u=CI(TI(function(f){return i.add(new qe(f-s).mul(n)).toNumber()}),Dy);return u(0,t)}function dO(e,t,r,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(r-1)))return{step:new qe(0),tickMin:new qe(0),tickMax:new qe(0)};var o=fO(new qe(t).sub(e).div(r-1),n,i),s;e<=0&&t>=0?s=new qe(0):(s=new qe(e).add(t).div(2),s=s.sub(new qe(s).mod(o)));var u=Math.ceil(s.sub(e).div(o).toNumber()),f=Math.ceil(new qe(t).sub(s).div(o).toNumber()),d=u+f+1;return d>r?dO(e,t,r,n,i+1):(d<r&&(f=t>0?f+(r-d):f,u=t>0?u:u+(r-d)),{step:o,tickMin:s.sub(new qe(u).mul(o)),tickMax:s.add(new qe(f).mul(o))})}function WI(e){var t=dl(e,2),r=t[0],n=t[1],i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(i,2),u=cO([r,n]),f=dl(u,2),d=f[0],m=f[1];if(d===-1/0||m===1/0){var h=m===1/0?[d].concat(Ry(Dy(0,i-1).map(function(){return 1/0}))):[].concat(Ry(Dy(0,i-1).map(function(){return-1/0})),[m]);return r>n?My(h):h}if(d===m)return UI(d,i,o);var y=dO(d,m,s,o),g=y.step,_=y.tickMin,S=y.tickMax,x=zc.rangeStep(_,S.add(new qe(.1).mul(g)),g);return r>n?My(x):x}function HI(e,t){var r=dl(e,2),n=r[0],i=r[1],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=cO([n,i]),u=dl(s,2),f=u[0],d=u[1];if(f===-1/0||d===1/0)return[n,i];if(f===d)return[f];var m=Math.max(t,2),h=fO(new qe(d).sub(f).div(m-1),o,0),y=[].concat(Ry(zc.rangeStep(new qe(f),new qe(d).sub(new qe(.99).mul(h)),h)),[d]);return n>i?My(y):y}var VI=sO(WI),KI=sO(HI),GI="Invariant failed";function wa(e,t){throw new Error(GI)}var XI=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function Hu(){return Hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hu.apply(this,arguments)}function YI(e,t){return e$(e)||ZI(e,t)||JI(e,t)||QI()}function QI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JI(e,t){if(e){if(typeof e=="string")return U5(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U5(e,t)}}function U5(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ZI(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function e$(e){if(Array.isArray(e))return e}function t$(e,t){if(e==null)return{};var r=r$(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function r$(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function n$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a$(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,mO(n.key),n)}}function i$(e,t,r){return t&&a$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function o$(e,t,r){return t=Vu(t),l$(e,pO()?Reflect.construct(t,r||[],Vu(e).constructor):t.apply(e,r))}function l$(e,t){if(t&&(gi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s$(e)}function s$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pO=function(){return!!e})()}function Vu(e){return Vu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Vu(e)}function u$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$y(e,t)}function $y(e,t){return $y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},$y(e,t)}function hO(e,t,r){return t=mO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mO(e){var t=c$(e,"string");return gi(t)=="symbol"?t:t+""}function c$(e,t){if(gi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(gi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Kl=(function(e){function t(){return n$(this,t),o$(this,t,arguments)}return u$(t,e),i$(t,[{key:"render",value:function(){var n=this.props,i=n.offset,o=n.layout,s=n.width,u=n.dataKey,f=n.data,d=n.dataPointFormatter,m=n.xAxis,h=n.yAxis,y=t$(n,XI),g=Ne(y,!1);this.props.direction==="x"&&m.type!=="number"&&wa();var _=f.map(function(S){var x=d(S,u),j=x.x,A=x.y,E=x.value,T=x.errorVal;if(!T)return null;var O=[],P,C;if(Array.isArray(T)){var R=YI(T,2);P=R[0],C=R[1]}else P=C=T;if(o==="vertical"){var $=m.scale,z=A+i,q=z+s,M=z-s,H=$(E-P),X=$(E+C);O.push({x1:X,y1:q,x2:X,y2:M}),O.push({x1:H,y1:z,x2:X,y2:z}),O.push({x1:H,y1:q,x2:H,y2:M})}else if(o==="horizontal"){var G=h.scale,J=j+i,te=J-s,K=J+s,ee=G(E-P),Q=G(E+C);O.push({x1:te,y1:Q,x2:K,y2:Q}),O.push({x1:J,y1:ee,x2:J,y2:Q}),O.push({x1:te,y1:ee,x2:K,y2:ee})}return B.createElement(lt,Hu({className:"recharts-errorBar",key:"bar-".concat(O.map(function(I){return"".concat(I.x1,"-").concat(I.x2,"-").concat(I.y1,"-").concat(I.y2)}))},g),O.map(function(I){return B.createElement("line",Hu({},I,{key:"line-".concat(I.x1,"-").concat(I.x2,"-").concat(I.y1,"-").concat(I.y2)}))}))});return B.createElement(lt,{className:"recharts-errorBars"},_)}}])})(B.Component);hO(Kl,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});hO(Kl,"displayName","ErrorBar");function pl(e){"@babel/helpers - typeof";return pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pl(e)}function W5(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function da(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?W5(Object(r),!0).forEach(function(n){f$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W5(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function f$(e,t,r){return t=d$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d$(e){var t=p$(e,"string");return pl(t)=="symbol"?t:t+""}function p$(e,t){if(pl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(pl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yO=function(t){var r=t.children,n=t.formattedGraphicalItems,i=t.legendWidth,o=t.legendContent,s=Jt(r,li);if(!s)return null;var u=li.defaultProps,f=u!==void 0?da(da({},u),s.props):{},d;return s.props&&s.props.payload?d=s.props&&s.props.payload:o==="children"?d=(n||[]).reduce(function(m,h){var y=h.item,g=h.props,_=g.sectors||g.data||[];return m.concat(_.map(function(S){return{type:s.props.iconType||y.props.legendType,value:S.name,color:S.fill,payload:S}}))},[]):d=(n||[]).map(function(m){var h=m.item,y=h.type.defaultProps,g=y!==void 0?da(da({},y),h.props):{},_=g.dataKey,S=g.name,x=g.legendType,j=g.hide;return{inactive:j,dataKey:_,type:f.iconType||x||"square",color:_v(h),value:S||_,payload:g}}),da(da(da({},f),li.getWithHeight(s,i)),{},{payload:d,item:s})};function hl(e){"@babel/helpers - typeof";return hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hl(e)}function H5(e){return v$(e)||y$(e)||m$(e)||h$()}function h$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m$(e,t){if(e){if(typeof e=="string")return Ly(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ly(e,t)}}function y$(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function v$(e){if(Array.isArray(e))return Ly(e)}function Ly(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function V5(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function at(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?V5(Object(r),!0).forEach(function(n){ui(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V5(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ui(e,t,r){return t=g$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g$(e){var t=b$(e,"string");return hl(t)=="symbol"?t:t+""}function b$(e,t){if(hl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(hl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tr(e,t,r){return Ce(e)||Ce(t)?r:ht(t)?pr(e,t,r):Pe(t)?t(e):r}function Xo(e,t,r,n){var i=vI(e,function(u){return tr(u,t)});if(r==="number"){var o=i.filter(function(u){return ce(u)||parseFloat(u)});return o.length?[Fc(o),Lc(o)]:[1/0,-1/0]}var s=n?i.filter(function(u){return!Ce(u)}):i;return s.map(function(u){return ht(u)||u instanceof Date?u:""})}var x$=function(t){var r,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,s=-1,u=(r=n==null?void 0:n.length)!==null&&r!==void 0?r:0;if(u<=1)return 0;if(o&&o.axisType==="angleAxis"&&Math.abs(Math.abs(o.range[1]-o.range[0])-360)<=1e-6)for(var f=o.range,d=0;d<u;d++){var m=d>0?i[d-1].coordinate:i[u-1].coordinate,h=i[d].coordinate,y=d>=u-1?i[0].coordinate:i[d+1].coordinate,g=void 0;if(Nr(h-m)!==Nr(y-h)){var _=[];if(Nr(y-h)===Nr(f[1]-f[0])){g=y;var S=h+f[1]-f[0];_[0]=Math.min(S,(S+m)/2),_[1]=Math.max(S,(S+m)/2)}else{g=m;var x=y+f[1]-f[0];_[0]=Math.min(h,(x+h)/2),_[1]=Math.max(h,(x+h)/2)}var j=[Math.min(h,(g+h)/2),Math.max(h,(g+h)/2)];if(t>j[0]&&t<=j[1]||t>=_[0]&&t<=_[1]){s=i[d].index;break}}else{var A=Math.min(m,y),E=Math.max(m,y);if(t>(A+h)/2&&t<=(E+h)/2){s=i[d].index;break}}}else for(var T=0;T<u;T++)if(T===0&&t<=(n[T].coordinate+n[T+1].coordinate)/2||T>0&&T<u-1&&t>(n[T].coordinate+n[T-1].coordinate)/2&&t<=(n[T].coordinate+n[T+1].coordinate)/2||T===u-1&&t>(n[T].coordinate+n[T-1].coordinate)/2){s=n[T].index;break}return s},_v=function(t){var r,n=t,i=n.type.displayName,o=(r=t.type)!==null&&r!==void 0&&r.defaultProps?at(at({},t.type.defaultProps),t.props):t.props,s=o.stroke,u=o.fill,f;switch(i){case"Line":f=s;break;case"Area":case"Radar":f=s&&s!=="none"?s:u;break;default:f=u;break}return f},w$=function(t){var r=t.barSize,n=t.totalSize,i=t.stackGroups,o=i===void 0?{}:i;if(!o)return{};for(var s={},u=Object.keys(o),f=0,d=u.length;f<d;f++)for(var m=o[u[f]].stackGroups,h=Object.keys(m),y=0,g=h.length;y<g;y++){var _=m[h[y]],S=_.items,x=_.cateAxisId,j=S.filter(function(C){return pn(C.type).indexOf("Bar")>=0});if(j&&j.length){var A=j[0].type.defaultProps,E=A!==void 0?at(at({},A),j[0].props):j[0].props,T=E.barSize,O=E[x];s[O]||(s[O]=[]);var P=Ce(T)?r:T;s[O].push({item:j[0],stackList:j.slice(1),barSize:Ce(P)?void 0:ba(P,n,0)})}}return s},S$=function(t){var r=t.barGap,n=t.barCategoryGap,i=t.bandSize,o=t.sizeList,s=o===void 0?[]:o,u=t.maxBarSize,f=s.length;if(f<1)return null;var d=ba(r,i,0,!0),m,h=[];if(s[0].barSize===+s[0].barSize){var y=!1,g=i/f,_=s.reduce(function(T,O){return T+O.barSize||0},0);_+=(f-1)*d,_>=i&&(_-=(f-1)*d,d=0),_>=i&&g>0&&(y=!0,g*=.9,_=f*g);var S=(i-_)/2>>0,x={offset:S-d,size:0};m=s.reduce(function(T,O){var P={item:O.item,position:{offset:x.offset+x.size+d,size:y?g:O.barSize}},C=[].concat(H5(T),[P]);return x=C[C.length-1].position,O.stackList&&O.stackList.length&&O.stackList.forEach(function(R){C.push({item:R,position:x})}),C},h)}else{var j=ba(n,i,0,!0);i-2*j-(f-1)*d<=0&&(d=0);var A=(i-2*j-(f-1)*d)/f;A>1&&(A>>=0);var E=u===+u?Math.min(A,u):A;m=s.reduce(function(T,O,P){var C=[].concat(H5(T),[{item:O.item,position:{offset:j+(A+d)*P+(A-E)/2,size:E}}]);return O.stackList&&O.stackList.length&&O.stackList.forEach(function(R){C.push({item:R,position:C[C.length-1].position})}),C},h)}return m},_$=function(t,r,n,i){var o=n.children,s=n.width,u=n.margin,f=s-(u.left||0)-(u.right||0),d=yO({children:o,legendWidth:f});if(d){var m=i||{},h=m.width,y=m.height,g=d.align,_=d.verticalAlign,S=d.layout;if((S==="vertical"||S==="horizontal"&&_==="middle")&&g!=="center"&&ce(t[g]))return at(at({},t),{},ui({},g,t[g]+(h||0)));if((S==="horizontal"||S==="vertical"&&g==="center")&&_!=="middle"&&ce(t[_]))return at(at({},t),{},ui({},_,t[_]+(y||0)))}return t},j$=function(t,r,n){return Ce(r)?!0:t==="horizontal"?r==="yAxis":t==="vertical"||n==="x"?r==="xAxis":n==="y"?r==="yAxis":!0},vO=function(t,r,n,i,o){var s=r.props.children,u=hr(s,Kl).filter(function(d){return j$(i,o,d.props.direction)});if(u&&u.length){var f=u.map(function(d){return d.props.dataKey});return t.reduce(function(d,m){var h=tr(m,n);if(Ce(h))return d;var y=Array.isArray(h)?[Fc(h),Lc(h)]:[h,h],g=f.reduce(function(_,S){var x=tr(m,S,0),j=y[0]-Math.abs(Array.isArray(x)?x[0]:x),A=y[1]+Math.abs(Array.isArray(x)?x[1]:x);return[Math.min(j,_[0]),Math.max(A,_[1])]},[1/0,-1/0]);return[Math.min(g[0],d[0]),Math.max(g[1],d[1])]},[1/0,-1/0])}return null},O$=function(t,r,n,i,o){var s=r.map(function(u){return vO(t,u,n,o,i)}).filter(function(u){return!Ce(u)});return s&&s.length?s.reduce(function(u,f){return[Math.min(u[0],f[0]),Math.max(u[1],f[1])]},[1/0,-1/0]):null},gO=function(t,r,n,i,o){var s=r.map(function(f){var d=f.props.dataKey;return n==="number"&&d&&vO(t,f,d,i)||Xo(t,d,n,o)});if(n==="number")return s.reduce(function(f,d){return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);var u={};return s.reduce(function(f,d){for(var m=0,h=d.length;m<h;m++)u[d[m]]||(u[d[m]]=!0,f.push(d[m]));return f},[])},bO=function(t,r){return t==="horizontal"&&r==="xAxis"||t==="vertical"&&r==="yAxis"||t==="centric"&&r==="angleAxis"||t==="radial"&&r==="radiusAxis"},xO=function(t,r,n,i){if(i)return t.map(function(f){return f.coordinate});var o,s,u=t.map(function(f){return f.coordinate===r&&(o=!0),f.coordinate===n&&(s=!0),f.coordinate});return o||u.push(r),s||u.push(n),u},fn=function(t,r,n){if(!t)return null;var i=t.scale,o=t.duplicateDomain,s=t.type,u=t.range,f=t.realScaleType==="scaleBand"?i.bandwidth()/2:2,d=(r||n)&&s==="category"&&i.bandwidth?i.bandwidth()/f:0;if(d=t.axisType==="angleAxis"&&(u==null?void 0:u.length)>=2?Nr(u[0]-u[1])*2*d:d,r&&(t.ticks||t.niceTicks)){var m=(t.ticks||t.niceTicks).map(function(h){var y=o?o.indexOf(h):h;return{coordinate:i(y)+d,value:h,offset:d}});return m.filter(function(h){return!Fl(h.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(h,y){return{coordinate:i(h)+d,value:h,index:y,offset:d}}):i.ticks&&!n?i.ticks(t.tickCount).map(function(h){return{coordinate:i(h)+d,value:h,offset:d}}):i.domain().map(function(h,y){return{coordinate:i(h)+d,value:o?o[h]:h,index:y,offset:d}})},wm=new WeakMap,du=function(t,r){if(typeof r!="function")return t;wm.has(t)||wm.set(t,new WeakMap);var n=wm.get(t);if(n.has(r))return n.get(r);var i=function(){t.apply(void 0,arguments),r.apply(void 0,arguments)};return n.set(r,i),i},A$=function(t,r,n){var i=t.scale,o=t.type,s=t.layout,u=t.axisType;if(i==="auto")return s==="radial"&&u==="radiusAxis"?{scale:ol(),realScaleType:"band"}:s==="radial"&&u==="angleAxis"?{scale:Bu(),realScaleType:"linear"}:o==="category"&&r&&(r.indexOf("LineChart")>=0||r.indexOf("AreaChart")>=0||r.indexOf("ComposedChart")>=0&&!n)?{scale:Go(),realScaleType:"point"}:o==="category"?{scale:ol(),realScaleType:"band"}:{scale:Bu(),realScaleType:"linear"};if(Ll(i)){var f="scale".concat(Oc(i));return{scale:(C5[f]||Go)(),realScaleType:C5[f]?f:"point"}}return Pe(i)?{scale:i}:{scale:Go(),realScaleType:"point"}},K5=1e-4,E$=function(t){var r=t.domain();if(!(!r||r.length<=2)){var n=r.length,i=t.range(),o=Math.min(i[0],i[1])-K5,s=Math.max(i[0],i[1])+K5,u=t(r[0]),f=t(r[n-1]);(u<o||u>s||f<o||f>s)&&t.domain([r[0],r[n-1]])}},P$=function(t,r){if(!t)return null;for(var n=0,i=t.length;n<i;n++)if(t[n].item===r)return t[n].position;return null},k$=function(t,r){if(!r||r.length!==2||!ce(r[0])||!ce(r[1]))return t;var n=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]),o=[t[0],t[1]];return(!ce(t[0])||t[0]<n)&&(o[0]=n),(!ce(t[1])||t[1]>i)&&(o[1]=i),o[0]>i&&(o[0]=i),o[1]<n&&(o[1]=n),o},T$=function(t){var r=t.length;if(!(r<=0))for(var n=0,i=t[0].length;n<i;++n)for(var o=0,s=0,u=0;u<r;++u){var f=Fl(t[u][n][1])?t[u][n][0]:t[u][n][1];f>=0?(t[u][n][0]=o,t[u][n][1]=o+f,o=t[u][n][1]):(t[u][n][0]=s,t[u][n][1]=s+f,s=t[u][n][1])}},C$=function(t){var r=t.length;if(!(r<=0))for(var n=0,i=t[0].length;n<i;++n)for(var o=0,s=0;s<r;++s){var u=Fl(t[s][n][1])?t[s][n][0]:t[s][n][1];u>=0?(t[s][n][0]=o,t[s][n][1]=o+u,o=t[s][n][1]):(t[s][n][0]=0,t[s][n][1]=0)}},N$={sign:T$,expand:SC,none:ci,silhouette:_C,wiggle:jC,positive:C$},D$=function(t,r,n){var i=r.map(function(u){return u.props.dataKey}),o=N$[n],s=wC().keys(i).value(function(u,f){return+tr(u,f,0)}).order(dy).offset(o);return s(t)},M$=function(t,r,n,i,o,s){if(!t)return null;var u=s?r.reverse():r,f={},d=u.reduce(function(h,y){var g,_=(g=y.type)!==null&&g!==void 0&&g.defaultProps?at(at({},y.type.defaultProps),y.props):y.props,S=_.stackId,x=_.hide;if(x)return h;var j=_[n],A=h[j]||{hasStack:!1,stackGroups:{}};if(ht(S)){var E=A.stackGroups[S]||{numericAxisId:n,cateAxisId:i,items:[]};E.items.push(y),A.hasStack=!0,A.stackGroups[S]=E}else A.stackGroups[Bl("_stackId_")]={numericAxisId:n,cateAxisId:i,items:[y]};return at(at({},h),{},ui({},j,A))},f),m={};return Object.keys(d).reduce(function(h,y){var g=d[y];if(g.hasStack){var _={};g.stackGroups=Object.keys(g.stackGroups).reduce(function(S,x){var j=g.stackGroups[x];return at(at({},S),{},ui({},x,{numericAxisId:n,cateAxisId:i,items:j.items,stackedData:D$(t,j.items,o)}))},_)}return at(at({},h),{},ui({},y,g))},m)},R$=function(t,r){var n=r.realScaleType,i=r.type,o=r.tickCount,s=r.originalDomain,u=r.allowDecimals,f=n||r.scale;if(f!=="auto"&&f!=="linear")return null;if(o&&i==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var d=t.domain();if(!d.length)return null;var m=VI(d,o,u);return t.domain([Fc(m),Lc(m)]),{niceTicks:m}}if(o&&i==="number"){var h=t.domain(),y=KI(h,o,u);return{niceTicks:y}}return null};function G5(e){var t=e.axis,r=e.ticks,n=e.bandSize,i=e.entry,o=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Ce(i[t.dataKey])){var u=wu(r,"value",i[t.dataKey]);if(u)return u.coordinate+n/2}return r[o]?r[o].coordinate+n/2:null}var f=tr(i,Ce(s)?t.dataKey:s);return Ce(f)?null:t.scale(f)}var X5=function(t){var r=t.axis,n=t.ticks,i=t.offset,o=t.bandSize,s=t.entry,u=t.index;if(r.type==="category")return n[u]?n[u].coordinate+i:null;var f=tr(s,r.dataKey,r.domain[u]);return Ce(f)?null:r.scale(f)-o/2+i},I$=function(t){var r=t.numericAxis,n=r.scale.domain();if(r.type==="number"){var i=Math.min(n[0],n[1]),o=Math.max(n[0],n[1]);return i<=0&&o>=0?0:o<0?o:i}return n[0]},$$=function(t,r){var n,i=(n=t.type)!==null&&n!==void 0&&n.defaultProps?at(at({},t.type.defaultProps),t.props):t.props,o=i.stackId;if(ht(o)){var s=r[o];if(s){var u=s.items.indexOf(t);return u>=0?s.stackedData[u]:null}}return null},L$=function(t){return t.reduce(function(r,n){return[Fc(n.concat([r[0]]).filter(ce)),Lc(n.concat([r[1]]).filter(ce))]},[1/0,-1/0])},wO=function(t,r,n){return Object.keys(t).reduce(function(i,o){var s=t[o],u=s.stackedData,f=u.reduce(function(d,m){var h=L$(m.slice(r,n+1));return[Math.min(d[0],h[0]),Math.max(d[1],h[1])]},[1/0,-1/0]);return[Math.min(f[0],i[0]),Math.max(f[1],i[1])]},[1/0,-1/0]).map(function(i){return i===1/0||i===-1/0?0:i})},Y5=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,Q5=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,Fy=function(t,r,n){if(Pe(t))return t(r,n);if(!Array.isArray(t))return r;var i=[];if(ce(t[0]))i[0]=n?t[0]:Math.min(t[0],r[0]);else if(Y5.test(t[0])){var o=+Y5.exec(t[0])[1];i[0]=r[0]-o}else Pe(t[0])?i[0]=t[0](r[0]):i[0]=r[0];if(ce(t[1]))i[1]=n?t[1]:Math.max(t[1],r[1]);else if(Q5.test(t[1])){var s=+Q5.exec(t[1])[1];i[1]=r[1]+s}else Pe(t[1])?i[1]=t[1](r[1]):i[1]=r[1];return i},Ku=function(t,r,n){if(t&&t.scale&&t.scale.bandwidth){var i=t.scale.bandwidth();if(!n||i>0)return i}if(t&&r&&r.length>=2){for(var o=Y2(r,function(h){return h.coordinate}),s=1/0,u=1,f=o.length;u<f;u++){var d=o[u],m=o[u-1];s=Math.min((d.coordinate||0)-(m.coordinate||0),s)}return s===1/0?0:s}return n?void 0:0},J5=function(t,r,n){return!t||!t.length||Bc(t,pr(n,"type.defaultProps.domain"))?r:t},SO=function(t,r){var n=t.type.defaultProps?at(at({},t.type.defaultProps),t.props):t.props,i=n.dataKey,o=n.name,s=n.unit,u=n.formatter,f=n.tooltipType,d=n.chartType,m=n.hide;return at(at({},Ne(t,!1)),{},{dataKey:i,unit:s,formatter:u,name:o||i,color:_v(t),value:tr(r,i),type:f,payload:r,chartType:d,hide:m})};function ml(e){"@babel/helpers - typeof";return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ml(e)}function Z5(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function e6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Z5(Object(r),!0).forEach(function(n){F$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z5(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function F$(e,t,r){return t=B$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B$(e){var t=q$(e,"string");return ml(t)=="symbol"?t:t+""}function q$(e,t){if(ml(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ml(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Gu=Math.PI/180,z$=function(t){return t*180/Math.PI},Ot=function(t,r,n,i){return{x:t+Math.cos(-Gu*i)*n,y:r+Math.sin(-Gu*i)*n}},U$=function(t,r){var n=t.x,i=t.y,o=r.x,s=r.y;return Math.sqrt(Math.pow(n-o,2)+Math.pow(i-s,2))},W$=function(t,r){var n=t.x,i=t.y,o=r.cx,s=r.cy,u=U$({x:n,y:i},{x:o,y:s});if(u<=0)return{radius:u};var f=(n-o)/u,d=Math.acos(f);return i>s&&(d=2*Math.PI-d),{radius:u,angle:z$(d),angleInRadian:d}},H$=function(t){var r=t.startAngle,n=t.endAngle,i=Math.floor(r/360),o=Math.floor(n/360),s=Math.min(i,o);return{startAngle:r-s*360,endAngle:n-s*360}},V$=function(t,r){var n=r.startAngle,i=r.endAngle,o=Math.floor(n/360),s=Math.floor(i/360),u=Math.min(o,s);return t+u*360},t6=function(t,r){var n=t.x,i=t.y,o=W$({x:n,y:i},r),s=o.radius,u=o.angle,f=r.innerRadius,d=r.outerRadius;if(s<f||s>d)return!1;if(s===0)return!0;var m=H$(r),h=m.startAngle,y=m.endAngle,g=u,_;if(h<=y){for(;g>y;)g-=360;for(;g<h;)g+=360;_=g>=h&&g<=y}else{for(;g>h;)g-=360;for(;g<y;)g+=360;_=g>=y&&g<=h}return _?e6(e6({},r),{},{radius:s,angle:V$(g,r)}):null};function yl(e){"@babel/helpers - typeof";return yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yl(e)}var K$=["offset"];function G$(e){return J$(e)||Q$(e)||Y$(e)||X$()}function X$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y$(e,t){if(e){if(typeof e=="string")return By(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return By(e,t)}}function Q$(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function J$(e){if(Array.isArray(e))return By(e)}function By(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z$(e,t){if(e==null)return{};var r=eL(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function eL(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function r6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function pt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?r6(Object(r),!0).forEach(function(n){tL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):r6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function tL(e,t,r){return t=rL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rL(e){var t=nL(e,"string");return yl(t)=="symbol"?t:t+""}function nL(e,t){if(yl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(yl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vl(){return vl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vl.apply(this,arguments)}var aL=function(t){var r=t.value,n=t.formatter,i=Ce(t.children)?r:t.children;return Pe(n)?n(i):i},iL=function(t,r){var n=Nr(r-t),i=Math.min(Math.abs(r-t),360);return n*i},oL=function(t,r,n){var i=t.position,o=t.viewBox,s=t.offset,u=t.className,f=o,d=f.cx,m=f.cy,h=f.innerRadius,y=f.outerRadius,g=f.startAngle,_=f.endAngle,S=f.clockWise,x=(h+y)/2,j=iL(g,_),A=j>=0?1:-1,E,T;i==="insideStart"?(E=g+A*s,T=S):i==="insideEnd"?(E=_-A*s,T=!S):i==="end"&&(E=_+A*s,T=S),T=j<=0?T:!T;var O=Ot(d,m,x,E),P=Ot(d,m,x,E+(T?1:-1)*359),C="M".concat(O.x,",").concat(O.y,`
    A`).concat(x,",").concat(x,",0,1,").concat(T?0:1,`,
    `).concat(P.x,",").concat(P.y),R=Ce(t.id)?Bl("recharts-radial-line-"):t.id;return B.createElement("text",vl({},n,{dominantBaseline:"central",className:Ie("recharts-radial-bar-label",u)}),B.createElement("defs",null,B.createElement("path",{id:R,d:C})),B.createElement("textPath",{xlinkHref:"#".concat(R)},r))},lL=function(t){var r=t.viewBox,n=t.offset,i=t.position,o=r,s=o.cx,u=o.cy,f=o.innerRadius,d=o.outerRadius,m=o.startAngle,h=o.endAngle,y=(m+h)/2;if(i==="outside"){var g=Ot(s,u,d+n,y),_=g.x,S=g.y;return{x:_,y:S,textAnchor:_>=s?"start":"end",verticalAnchor:"middle"}}if(i==="center")return{x:s,y:u,textAnchor:"middle",verticalAnchor:"middle"};if(i==="centerTop")return{x:s,y:u,textAnchor:"middle",verticalAnchor:"start"};if(i==="centerBottom")return{x:s,y:u,textAnchor:"middle",verticalAnchor:"end"};var x=(f+d)/2,j=Ot(s,u,x,y),A=j.x,E=j.y;return{x:A,y:E,textAnchor:"middle",verticalAnchor:"middle"}},sL=function(t){var r=t.viewBox,n=t.parentViewBox,i=t.offset,o=t.position,s=r,u=s.x,f=s.y,d=s.width,m=s.height,h=m>=0?1:-1,y=h*i,g=h>0?"end":"start",_=h>0?"start":"end",S=d>=0?1:-1,x=S*i,j=S>0?"end":"start",A=S>0?"start":"end";if(o==="top"){var E={x:u+d/2,y:f-h*i,textAnchor:"middle",verticalAnchor:g};return pt(pt({},E),n?{height:Math.max(f-n.y,0),width:d}:{})}if(o==="bottom"){var T={x:u+d/2,y:f+m+y,textAnchor:"middle",verticalAnchor:_};return pt(pt({},T),n?{height:Math.max(n.y+n.height-(f+m),0),width:d}:{})}if(o==="left"){var O={x:u-x,y:f+m/2,textAnchor:j,verticalAnchor:"middle"};return pt(pt({},O),n?{width:Math.max(O.x-n.x,0),height:m}:{})}if(o==="right"){var P={x:u+d+x,y:f+m/2,textAnchor:A,verticalAnchor:"middle"};return pt(pt({},P),n?{width:Math.max(n.x+n.width-P.x,0),height:m}:{})}var C=n?{width:d,height:m}:{};return o==="insideLeft"?pt({x:u+x,y:f+m/2,textAnchor:A,verticalAnchor:"middle"},C):o==="insideRight"?pt({x:u+d-x,y:f+m/2,textAnchor:j,verticalAnchor:"middle"},C):o==="insideTop"?pt({x:u+d/2,y:f+y,textAnchor:"middle",verticalAnchor:_},C):o==="insideBottom"?pt({x:u+d/2,y:f+m-y,textAnchor:"middle",verticalAnchor:g},C):o==="insideTopLeft"?pt({x:u+x,y:f+y,textAnchor:A,verticalAnchor:_},C):o==="insideTopRight"?pt({x:u+d-x,y:f+y,textAnchor:j,verticalAnchor:_},C):o==="insideBottomLeft"?pt({x:u+x,y:f+m-y,textAnchor:A,verticalAnchor:g},C):o==="insideBottomRight"?pt({x:u+d-x,y:f+m-y,textAnchor:j,verticalAnchor:g},C):Ri(o)&&(ce(o.x)||ma(o.x))&&(ce(o.y)||ma(o.y))?pt({x:u+ba(o.x,d),y:f+ba(o.y,m),textAnchor:"end",verticalAnchor:"end"},C):pt({x:u+d/2,y:f+m/2,textAnchor:"middle",verticalAnchor:"middle"},C)},uL=function(t){return"cx"in t&&ce(t.cx)};function Ct(e){var t=e.offset,r=t===void 0?5:t,n=Z$(e,K$),i=pt({offset:r},n),o=i.viewBox,s=i.position,u=i.value,f=i.children,d=i.content,m=i.className,h=m===void 0?"":m,y=i.textBreakAll;if(!o||Ce(u)&&Ce(f)&&!D.isValidElement(d)&&!Pe(d))return null;if(D.isValidElement(d))return D.cloneElement(d,i);var g;if(Pe(d)){if(g=D.createElement(d,i),D.isValidElement(g))return g}else g=aL(i);var _=uL(o),S=Ne(i,!0);if(_&&(s==="insideStart"||s==="insideEnd"||s==="end"))return oL(i,g,S);var x=_?lL(i):sL(i);return B.createElement(Mu,vl({className:Ie("recharts-label",h)},S,x,{breakAll:y}),g)}Ct.displayName="Label";var _O=function(t){var r=t.cx,n=t.cy,i=t.angle,o=t.startAngle,s=t.endAngle,u=t.r,f=t.radius,d=t.innerRadius,m=t.outerRadius,h=t.x,y=t.y,g=t.top,_=t.left,S=t.width,x=t.height,j=t.clockWise,A=t.labelViewBox;if(A)return A;if(ce(S)&&ce(x)){if(ce(h)&&ce(y))return{x:h,y,width:S,height:x};if(ce(g)&&ce(_))return{x:g,y:_,width:S,height:x}}return ce(h)&&ce(y)?{x:h,y,width:0,height:0}:ce(r)&&ce(n)?{cx:r,cy:n,startAngle:o||i||0,endAngle:s||i||0,innerRadius:d||0,outerRadius:m||f||u||0,clockWise:j}:t.viewBox?t.viewBox:{}},cL=function(t,r){return t?t===!0?B.createElement(Ct,{key:"label-implicit",viewBox:r}):ht(t)?B.createElement(Ct,{key:"label-implicit",viewBox:r,value:t}):D.isValidElement(t)?t.type===Ct?D.cloneElement(t,{key:"label-implicit",viewBox:r}):B.createElement(Ct,{key:"label-implicit",content:t,viewBox:r}):Pe(t)?B.createElement(Ct,{key:"label-implicit",content:t,viewBox:r}):Ri(t)?B.createElement(Ct,vl({viewBox:r},t,{key:"label-implicit"})):null:null},fL=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&n&&!t.label)return null;var i=t.children,o=_O(t),s=hr(i,Ct).map(function(f,d){return D.cloneElement(f,{viewBox:r||o,key:"label-".concat(d)})});if(!n)return s;var u=cL(t.label,r||o);return[u].concat(G$(s))};Ct.parseViewBox=_O;Ct.renderCallByParent=fL;var Sm,n6;function dL(){if(n6)return Sm;n6=1;function e(t){var r=t==null?0:t.length;return r?t[r-1]:void 0}return Sm=e,Sm}var pL=dL();const hL=We(pL);function gl(e){"@babel/helpers - typeof";return gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gl(e)}var mL=["valueAccessor"],yL=["data","dataKey","clockWise","id","textBreakAll"];function vL(e){return wL(e)||xL(e)||bL(e)||gL()}function gL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bL(e,t){if(e){if(typeof e=="string")return qy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return qy(e,t)}}function xL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wL(e){if(Array.isArray(e))return qy(e)}function qy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Xu(){return Xu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xu.apply(this,arguments)}function a6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function i6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?a6(Object(r),!0).forEach(function(n){SL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function SL(e,t,r){return t=_L(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _L(e){var t=jL(e,"string");return gl(t)=="symbol"?t:t+""}function jL(e,t){if(gl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(gl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function o6(e,t){if(e==null)return{};var r=OL(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function OL(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var AL=function(t){return Array.isArray(t.value)?hL(t.value):t.value};function yn(e){var t=e.valueAccessor,r=t===void 0?AL:t,n=o6(e,mL),i=n.data,o=n.dataKey,s=n.clockWise,u=n.id,f=n.textBreakAll,d=o6(n,yL);return!i||!i.length?null:B.createElement(lt,{className:"recharts-label-list"},i.map(function(m,h){var y=Ce(o)?r(m,h):tr(m&&m.payload,o),g=Ce(u)?{}:{id:"".concat(u,"-").concat(h)};return B.createElement(Ct,Xu({},Ne(m,!0),d,g,{parentViewBox:m.parentViewBox,value:y,textBreakAll:f,viewBox:Ct.parseViewBox(Ce(s)?m:i6(i6({},m),{},{clockWise:s})),key:"label-".concat(h),index:h}))}))}yn.displayName="LabelList";function EL(e,t){return e?e===!0?B.createElement(yn,{key:"labelList-implicit",data:t}):B.isValidElement(e)||Pe(e)?B.createElement(yn,{key:"labelList-implicit",data:t,content:e}):Ri(e)?B.createElement(yn,Xu({data:t},e,{key:"labelList-implicit"})):null:null}function PL(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var n=e.children,i=hr(n,yn).map(function(s,u){return D.cloneElement(s,{data:t,key:"labelList-".concat(u)})});if(!r)return i;var o=EL(e.label,t);return[o].concat(vL(i))}yn.renderCallByParent=PL;function bl(e){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bl(e)}function zy(){return zy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zy.apply(this,arguments)}function l6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function s6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?l6(Object(r),!0).forEach(function(n){kL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function kL(e,t,r){return t=TL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function TL(e){var t=CL(e,"string");return bl(t)=="symbol"?t:t+""}function CL(e,t){if(bl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(bl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var NL=function(t,r){var n=Nr(r-t),i=Math.min(Math.abs(r-t),359.999);return n*i},pu=function(t){var r=t.cx,n=t.cy,i=t.radius,o=t.angle,s=t.sign,u=t.isExternal,f=t.cornerRadius,d=t.cornerIsExternal,m=f*(u?1:-1)+i,h=Math.asin(f/m)/Gu,y=d?o:o+s*h,g=Ot(r,n,m,y),_=Ot(r,n,i,y),S=d?o-s*h:o,x=Ot(r,n,m*Math.cos(h*Gu),S);return{center:g,circleTangency:_,lineTangency:x,theta:h}},jO=function(t){var r=t.cx,n=t.cy,i=t.innerRadius,o=t.outerRadius,s=t.startAngle,u=t.endAngle,f=NL(s,u),d=s+f,m=Ot(r,n,o,s),h=Ot(r,n,o,d),y="M ".concat(m.x,",").concat(m.y,`
    A `).concat(o,",").concat(o,`,0,
    `).concat(+(Math.abs(f)>180),",").concat(+(s>d),`,
    `).concat(h.x,",").concat(h.y,`
  `);if(i>0){var g=Ot(r,n,i,s),_=Ot(r,n,i,d);y+="L ".concat(_.x,",").concat(_.y,`
            A `).concat(i,",").concat(i,`,0,
            `).concat(+(Math.abs(f)>180),",").concat(+(s<=d),`,
            `).concat(g.x,",").concat(g.y," Z")}else y+="L ".concat(r,",").concat(n," Z");return y},DL=function(t){var r=t.cx,n=t.cy,i=t.innerRadius,o=t.outerRadius,s=t.cornerRadius,u=t.forceCornerRadius,f=t.cornerIsExternal,d=t.startAngle,m=t.endAngle,h=Nr(m-d),y=pu({cx:r,cy:n,radius:o,angle:d,sign:h,cornerRadius:s,cornerIsExternal:f}),g=y.circleTangency,_=y.lineTangency,S=y.theta,x=pu({cx:r,cy:n,radius:o,angle:m,sign:-h,cornerRadius:s,cornerIsExternal:f}),j=x.circleTangency,A=x.lineTangency,E=x.theta,T=f?Math.abs(d-m):Math.abs(d-m)-S-E;if(T<0)return u?"M ".concat(_.x,",").concat(_.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):jO({cx:r,cy:n,innerRadius:i,outerRadius:o,startAngle:d,endAngle:m});var O="M ".concat(_.x,",").concat(_.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(g.x,",").concat(g.y,`
    A`).concat(o,",").concat(o,",0,").concat(+(T>180),",").concat(+(h<0),",").concat(j.x,",").concat(j.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(A.x,",").concat(A.y,`
  `);if(i>0){var P=pu({cx:r,cy:n,radius:i,angle:d,sign:h,isExternal:!0,cornerRadius:s,cornerIsExternal:f}),C=P.circleTangency,R=P.lineTangency,$=P.theta,z=pu({cx:r,cy:n,radius:i,angle:m,sign:-h,isExternal:!0,cornerRadius:s,cornerIsExternal:f}),q=z.circleTangency,M=z.lineTangency,H=z.theta,X=f?Math.abs(d-m):Math.abs(d-m)-$-H;if(X<0&&s===0)return"".concat(O,"L").concat(r,",").concat(n,"Z");O+="L".concat(M.x,",").concat(M.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(q.x,",").concat(q.y,`
      A`).concat(i,",").concat(i,",0,").concat(+(X>180),",").concat(+(h>0),",").concat(C.x,",").concat(C.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(R.x,",").concat(R.y,"Z")}else O+="L".concat(r,",").concat(n,"Z");return O},ML={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},OO=function(t){var r=s6(s6({},ML),t),n=r.cx,i=r.cy,o=r.innerRadius,s=r.outerRadius,u=r.cornerRadius,f=r.forceCornerRadius,d=r.cornerIsExternal,m=r.startAngle,h=r.endAngle,y=r.className;if(s<o||m===h)return null;var g=Ie("recharts-sector",y),_=s-o,S=ba(u,_,0,!0),x;return S>0&&Math.abs(m-h)<360?x=DL({cx:n,cy:i,innerRadius:o,outerRadius:s,cornerRadius:Math.min(S,_/2),forceCornerRadius:f,cornerIsExternal:d,startAngle:m,endAngle:h}):x=jO({cx:n,cy:i,innerRadius:o,outerRadius:s,startAngle:m,endAngle:h}),B.createElement("path",zy({},Ne(r,!0),{className:g,d:x,role:"img"}))};function xl(e){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xl(e)}function Uy(){return Uy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Uy.apply(this,arguments)}function u6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function c6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?u6(Object(r),!0).forEach(function(n){RL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function RL(e,t,r){return t=IL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function IL(e){var t=$L(e,"string");return xl(t)=="symbol"?t:t+""}function $L(e,t){if(xl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(xl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var f6={curveBasisClosed:cC,curveBasisOpen:fC,curveBasis:uC,curveBumpX:XT,curveBumpY:YT,curveLinearClosed:dC,curveLinear:Ec,curveMonotoneX:pC,curveMonotoneY:hC,curveNatural:mC,curveStep:yC,curveStepAfter:gC,curveStepBefore:vC},hu=function(t){return t.x===+t.x&&t.y===+t.y},Lo=function(t){return t.x},Fo=function(t){return t.y},LL=function(t,r){if(Pe(t))return t;var n="curve".concat(Oc(t));return(n==="curveMonotone"||n==="curveBump")&&r?f6["".concat(n).concat(r==="vertical"?"Y":"X")]:f6[n]||Ec},FL=function(t){var r=t.type,n=r===void 0?"linear":r,i=t.points,o=i===void 0?[]:i,s=t.baseLine,u=t.layout,f=t.connectNulls,d=f===void 0?!1:f,m=LL(n,u),h=d?o.filter(function(S){return hu(S)}):o,y;if(Array.isArray(s)){var g=d?s.filter(function(S){return hu(S)}):s,_=h.map(function(S,x){return c6(c6({},S),{},{base:g[x]})});return u==="vertical"?y=ou().y(Fo).x1(Lo).x0(function(S){return S.base.x}):y=ou().x(Lo).y1(Fo).y0(function(S){return S.base.y}),y.defined(hu).curve(m),y(_)}return u==="vertical"&&ce(s)?y=ou().y(Fo).x1(Lo).x0(s):ce(s)?y=ou().x(Lo).y1(Fo).y0(s):y=T_().x(Lo).y(Fo),y.defined(hu).curve(m),y(h)},Wy=function(t){var r=t.className,n=t.points,i=t.path,o=t.pathRef;if((!n||!n.length)&&!i)return null;var s=n&&n.length?FL(t):i;return B.createElement("path",Uy({},Ne(t,!1),Su(t),{className:Ie("recharts-curve",r),d:s,ref:o}))},_m={exports:{}},jm,d6;function BL(){if(d6)return jm;d6=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return jm=e,jm}var Om,p6;function qL(){if(p6)return Om;p6=1;var e=BL();function t(){}function r(){}return r.resetWarningCache=t,Om=function(){function n(s,u,f,d,m,h){if(h!==e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}n.isRequired=n;function i(){return n}var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o},Om}var h6;function zL(){return h6||(h6=1,_m.exports=qL()()),_m.exports}var UL=zL();const Fe=We(UL),{getOwnPropertyNames:WL,getOwnPropertySymbols:HL}=Object,{hasOwnProperty:VL}=Object.prototype;function Am(e,t){return function(n,i,o){return e(n,i,o)&&t(n,i,o)}}function mu(e){return function(r,n,i){if(!r||!n||typeof r!="object"||typeof n!="object")return e(r,n,i);const{cache:o}=i,s=o.get(r),u=o.get(n);if(s&&u)return s===n&&u===r;o.set(r,n),o.set(n,r);const f=e(r,n,i);return o.delete(r),o.delete(n),f}}function KL(e){return e!=null?e[Symbol.toStringTag]:void 0}function m6(e){return WL(e).concat(HL(e))}const GL=Object.hasOwn||((e,t)=>VL.call(e,t));function Aa(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const XL="__v",YL="__o",QL="_owner",{getOwnPropertyDescriptor:y6,keys:v6}=Object;function JL(e,t){return e.byteLength===t.byteLength&&Yu(new Uint8Array(e),new Uint8Array(t))}function ZL(e,t,r){let n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}function eF(e,t){return e.byteLength===t.byteLength&&Yu(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function tF(e,t){return Aa(e.getTime(),t.getTime())}function rF(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function nF(e,t){return e===t}function g6(e,t,r){const n=e.size;if(n!==t.size)return!1;if(!n)return!0;const i=new Array(n),o=e.entries();let s,u,f=0;for(;(s=o.next())&&!s.done;){const d=t.entries();let m=!1,h=0;for(;(u=d.next())&&!u.done;){if(i[h]){h++;continue}const y=s.value,g=u.value;if(r.equals(y[0],g[0],f,h,e,t,r)&&r.equals(y[1],g[1],y[0],g[0],e,t,r)){m=i[h]=!0;break}h++}if(!m)return!1;f++}return!0}const aF=Aa;function iF(e,t,r){const n=v6(e);let i=n.length;if(v6(t).length!==i)return!1;for(;i-- >0;)if(!AO(e,t,r,n[i]))return!1;return!0}function Bo(e,t,r){const n=m6(e);let i=n.length;if(m6(t).length!==i)return!1;let o,s,u;for(;i-- >0;)if(o=n[i],!AO(e,t,r,o)||(s=y6(e,o),u=y6(t,o),(s||u)&&(!s||!u||s.configurable!==u.configurable||s.enumerable!==u.enumerable||s.writable!==u.writable)))return!1;return!0}function oF(e,t){return Aa(e.valueOf(),t.valueOf())}function lF(e,t){return e.source===t.source&&e.flags===t.flags}function b6(e,t,r){const n=e.size;if(n!==t.size)return!1;if(!n)return!0;const i=new Array(n),o=e.values();let s,u;for(;(s=o.next())&&!s.done;){const f=t.values();let d=!1,m=0;for(;(u=f.next())&&!u.done;){if(!i[m]&&r.equals(s.value,u.value,s.value,u.value,e,t,r)){d=i[m]=!0;break}m++}if(!d)return!1}return!0}function Yu(e,t){let r=e.byteLength;if(t.byteLength!==r||e.byteOffset!==t.byteOffset)return!1;for(;r-- >0;)if(e[r]!==t[r])return!1;return!0}function sF(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function AO(e,t,r,n){return(n===QL||n===YL||n===XL)&&(e.$$typeof||t.$$typeof)?!0:GL(t,n)&&r.equals(e[n],t[n],n,n,e,t,r)}const uF="[object ArrayBuffer]",cF="[object Arguments]",fF="[object Boolean]",dF="[object DataView]",pF="[object Date]",hF="[object Error]",mF="[object Map]",yF="[object Number]",vF="[object Object]",gF="[object RegExp]",bF="[object Set]",xF="[object String]",wF={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},SF="[object URL]",_F=Object.prototype.toString;function jF({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:r,areDatesEqual:n,areErrorsEqual:i,areFunctionsEqual:o,areMapsEqual:s,areNumbersEqual:u,areObjectsEqual:f,arePrimitiveWrappersEqual:d,areRegExpsEqual:m,areSetsEqual:h,areTypedArraysEqual:y,areUrlsEqual:g,unknownTagComparators:_}){return function(x,j,A){if(x===j)return!0;if(x==null||j==null)return!1;const E=typeof x;if(E!==typeof j)return!1;if(E!=="object")return E==="number"?u(x,j,A):E==="function"?o(x,j,A):!1;const T=x.constructor;if(T!==j.constructor)return!1;if(T===Object)return f(x,j,A);if(Array.isArray(x))return t(x,j,A);if(T===Date)return n(x,j,A);if(T===RegExp)return m(x,j,A);if(T===Map)return s(x,j,A);if(T===Set)return h(x,j,A);const O=_F.call(x);if(O===pF)return n(x,j,A);if(O===gF)return m(x,j,A);if(O===mF)return s(x,j,A);if(O===bF)return h(x,j,A);if(O===vF)return typeof x.then!="function"&&typeof j.then!="function"&&f(x,j,A);if(O===SF)return g(x,j,A);if(O===hF)return i(x,j,A);if(O===cF)return f(x,j,A);if(wF[O])return y(x,j,A);if(O===uF)return e(x,j,A);if(O===dF)return r(x,j,A);if(O===fF||O===yF||O===xF)return d(x,j,A);if(_){let P=_[O];if(!P){const C=KL(x);C&&(P=_[C])}if(P)return P(x,j,A)}return!1}}function OF({circular:e,createCustomConfig:t,strict:r}){let n={areArrayBuffersEqual:JL,areArraysEqual:r?Bo:ZL,areDataViewsEqual:eF,areDatesEqual:tF,areErrorsEqual:rF,areFunctionsEqual:nF,areMapsEqual:r?Am(g6,Bo):g6,areNumbersEqual:aF,areObjectsEqual:r?Bo:iF,arePrimitiveWrappersEqual:oF,areRegExpsEqual:lF,areSetsEqual:r?Am(b6,Bo):b6,areTypedArraysEqual:r?Am(Yu,Bo):Yu,areUrlsEqual:sF,unknownTagComparators:void 0};if(t&&(n=Object.assign({},n,t(n))),e){const i=mu(n.areArraysEqual),o=mu(n.areMapsEqual),s=mu(n.areObjectsEqual),u=mu(n.areSetsEqual);n=Object.assign({},n,{areArraysEqual:i,areMapsEqual:o,areObjectsEqual:s,areSetsEqual:u})}return n}function AF(e){return function(t,r,n,i,o,s,u){return e(t,r,u)}}function EF({circular:e,comparator:t,createState:r,equals:n,strict:i}){if(r)return function(u,f){const{cache:d=e?new WeakMap:void 0,meta:m}=r();return t(u,f,{cache:d,equals:n,meta:m,strict:i})};if(e)return function(u,f){return t(u,f,{cache:new WeakMap,equals:n,meta:void 0,strict:i})};const o={cache:void 0,equals:n,meta:void 0,strict:i};return function(u,f){return t(u,f,o)}}const PF=Jn();Jn({strict:!0});Jn({circular:!0});Jn({circular:!0,strict:!0});Jn({createInternalComparator:()=>Aa});Jn({strict:!0,createInternalComparator:()=>Aa});Jn({circular:!0,createInternalComparator:()=>Aa});Jn({circular:!0,createInternalComparator:()=>Aa,strict:!0});function Jn(e={}){const{circular:t=!1,createInternalComparator:r,createState:n,strict:i=!1}=e,o=OF(e),s=jF(o),u=r?r(s):AF(s);return EF({circular:t,comparator:s,createState:n,equals:u,strict:i})}function kF(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function x6(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=-1,n=function i(o){r<0&&(r=o),o-r>t?(e(o),r=-1):kF(i)};requestAnimationFrame(n)}function Hy(e){"@babel/helpers - typeof";return Hy=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hy(e)}function TF(e){return MF(e)||DF(e)||NF(e)||CF()}function CF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NF(e,t){if(e){if(typeof e=="string")return w6(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w6(e,t)}}function w6(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function DF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function MF(e){if(Array.isArray(e))return e}function RF(){var e={},t=function(){return null},r=!1,n=function i(o){if(!r){if(Array.isArray(o)){if(!o.length)return;var s=o,u=TF(s),f=u[0],d=u.slice(1);if(typeof f=="number"){x6(i.bind(null,d),f);return}i(f),x6(i.bind(null,d));return}Hy(o)==="object"&&(e=o,t(e)),typeof o=="function"&&o()}};return{stop:function(){r=!0},start:function(o){r=!1,n(o)},subscribe:function(o){return t=o,function(){t=function(){return null}}}}}function wl(e){"@babel/helpers - typeof";return wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wl(e)}function S6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function _6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?S6(Object(r),!0).forEach(function(n){EO(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function EO(e,t,r){return t=IF(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function IF(e){var t=$F(e,"string");return wl(t)==="symbol"?t:String(t)}function $F(e,t){if(wl(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(wl(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var LF=function(t,r){return[Object.keys(t),Object.keys(r)].reduce(function(n,i){return n.filter(function(o){return i.includes(o)})})},FF=function(t){return t},BF=function(t){return t.replace(/([A-Z])/g,function(r){return"-".concat(r.toLowerCase())})},Yo=function(t,r){return Object.keys(r).reduce(function(n,i){return _6(_6({},n),{},EO({},i,t(i,r[i])))},{})},j6=function(t,r,n){return t.map(function(i){return"".concat(BF(i)," ").concat(r,"ms ").concat(n)}).join(",")};function qF(e,t){return WF(e)||UF(e,t)||PO(e,t)||zF()}function zF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UF(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function WF(e){if(Array.isArray(e))return e}function HF(e){return GF(e)||KF(e)||PO(e)||VF()}function VF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PO(e,t){if(e){if(typeof e=="string")return Vy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Vy(e,t)}}function KF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function GF(e){if(Array.isArray(e))return Vy(e)}function Vy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Qu=1e-4,kO=function(t,r){return[0,3*t,3*r-6*t,3*t-3*r+1]},TO=function(t,r){return t.map(function(n,i){return n*Math.pow(r,i)}).reduce(function(n,i){return n+i})},O6=function(t,r){return function(n){var i=kO(t,r);return TO(i,n)}},XF=function(t,r){return function(n){var i=kO(t,r),o=[].concat(HF(i.map(function(s,u){return s*u}).slice(1)),[0]);return TO(o,n)}},A6=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r[0],o=r[1],s=r[2],u=r[3];if(r.length===1)switch(r[0]){case"linear":i=0,o=0,s=1,u=1;break;case"ease":i=.25,o=.1,s=.25,u=1;break;case"ease-in":i=.42,o=0,s=1,u=1;break;case"ease-out":i=.42,o=0,s=.58,u=1;break;case"ease-in-out":i=0,o=0,s=.58,u=1;break;default:{var f=r[0].split("(");if(f[0]==="cubic-bezier"&&f[1].split(")")[0].split(",").length===4){var d=f[1].split(")")[0].split(",").map(function(x){return parseFloat(x)}),m=qF(d,4);i=m[0],o=m[1],s=m[2],u=m[3]}}}var h=O6(i,s),y=O6(o,u),g=XF(i,s),_=function(j){return j>1?1:j<0?0:j},S=function(j){for(var A=j>1?1:j,E=A,T=0;T<8;++T){var O=h(E)-A,P=g(E);if(Math.abs(O-A)<Qu||P<Qu)return y(E);E=_(E-O/P)}return y(E)};return S.isStepper=!1,S},YF=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.stiff,n=r===void 0?100:r,i=t.damping,o=i===void 0?8:i,s=t.dt,u=s===void 0?17:s,f=function(m,h,y){var g=-(m-h)*n,_=y*o,S=y+(g-_)*u/1e3,x=y*u/1e3+m;return Math.abs(x-h)<Qu&&Math.abs(S)<Qu?[h,0]:[x,S]};return f.isStepper=!0,f.dt=u,f},QF=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r[0];if(typeof i=="string")switch(i){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return A6(i);case"spring":return YF();default:if(i.split("(")[0]==="cubic-bezier")return A6(i)}return typeof i=="function"?i:null};function Sl(e){"@babel/helpers - typeof";return Sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sl(e)}function E6(e){return eB(e)||ZF(e)||CO(e)||JF()}function JF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eB(e){if(Array.isArray(e))return Gy(e)}function P6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function jt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?P6(Object(r),!0).forEach(function(n){Ky(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ky(e,t,r){return t=tB(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tB(e){var t=rB(e,"string");return Sl(t)==="symbol"?t:String(t)}function rB(e,t){if(Sl(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Sl(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nB(e,t){return oB(e)||iB(e,t)||CO(e,t)||aB()}function aB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CO(e,t){if(e){if(typeof e=="string")return Gy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Gy(e,t)}}function Gy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function iB(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function oB(e){if(Array.isArray(e))return e}var Ju=function(t,r,n){return t+(r-t)*n},Xy=function(t){var r=t.from,n=t.to;return r!==n},lB=function e(t,r,n){var i=Yo(function(o,s){if(Xy(s)){var u=t(s.from,s.to,s.velocity),f=nB(u,2),d=f[0],m=f[1];return jt(jt({},s),{},{from:d,velocity:m})}return s},r);return n<1?Yo(function(o,s){return Xy(s)?jt(jt({},s),{},{velocity:Ju(s.velocity,i[o].velocity,n),from:Ju(s.from,i[o].from,n)}):s},r):e(t,i,n-1)};const sB=(function(e,t,r,n,i){var o=LF(e,t),s=o.reduce(function(x,j){return jt(jt({},x),{},Ky({},j,[e[j],t[j]]))},{}),u=o.reduce(function(x,j){return jt(jt({},x),{},Ky({},j,{from:e[j],velocity:0,to:t[j]}))},{}),f=-1,d,m,h=function(){return null},y=function(){return Yo(function(j,A){return A.from},u)},g=function(){return!Object.values(u).filter(Xy).length},_=function(j){d||(d=j);var A=j-d,E=A/r.dt;u=lB(r,u,E),i(jt(jt(jt({},e),t),y())),d=j,g()||(f=requestAnimationFrame(h))},S=function(j){m||(m=j);var A=(j-m)/n,E=Yo(function(O,P){return Ju.apply(void 0,E6(P).concat([r(A)]))},s);if(i(jt(jt(jt({},e),t),E)),A<1)f=requestAnimationFrame(h);else{var T=Yo(function(O,P){return Ju.apply(void 0,E6(P).concat([r(1)]))},s);i(jt(jt(jt({},e),t),T))}};return h=r.isStepper?_:S,function(){return requestAnimationFrame(h),function(){cancelAnimationFrame(f)}}});function bi(e){"@babel/helpers - typeof";return bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bi(e)}var uB=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function cB(e,t){if(e==null)return{};var r=fB(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function fB(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Em(e){return mB(e)||hB(e)||pB(e)||dB()}function dB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pB(e,t){if(e){if(typeof e=="string")return Yy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Yy(e,t)}}function hB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mB(e){if(Array.isArray(e))return Yy(e)}function Yy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Er(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?k6(Object(r),!0).forEach(function(n){Ho(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ho(e,t,r){return t=NO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function yB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vB(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,NO(n.key),n)}}function gB(e,t,r){return t&&vB(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function NO(e){var t=bB(e,"string");return bi(t)==="symbol"?t:String(t)}function bB(e,t){if(bi(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(bi(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qy(e,t)}function Qy(e,t){return Qy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Qy(e,t)}function wB(e){var t=SB();return function(){var n=Zu(e),i;if(t){var o=Zu(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return Jy(this,i)}}function Jy(e,t){if(t&&(bi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zy(e)}function Zy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zu(e){return Zu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Zu(e)}var wn=(function(e){xB(r,e);var t=wB(r);function r(n,i){var o;yB(this,r),o=t.call(this,n,i);var s=o.props,u=s.isActive,f=s.attributeName,d=s.from,m=s.to,h=s.steps,y=s.children,g=s.duration;if(o.handleStyleChange=o.handleStyleChange.bind(Zy(o)),o.changeStyle=o.changeStyle.bind(Zy(o)),!u||g<=0)return o.state={style:{}},typeof y=="function"&&(o.state={style:m}),Jy(o);if(h&&h.length)o.state={style:h[0].style};else if(d){if(typeof y=="function")return o.state={style:d},Jy(o);o.state={style:f?Ho({},f,d):d}}else o.state={style:{}};return o}return gB(r,[{key:"componentDidMount",value:function(){var i=this.props,o=i.isActive,s=i.canBegin;this.mounted=!0,!(!o||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(i){var o=this.props,s=o.isActive,u=o.canBegin,f=o.attributeName,d=o.shouldReAnimate,m=o.to,h=o.from,y=this.state.style;if(u){if(!s){var g={style:f?Ho({},f,m):m};this.state&&y&&(f&&y[f]!==m||!f&&y!==m)&&this.setState(g);return}if(!(PF(i.to,m)&&i.canBegin&&i.isActive)){var _=!i.canBegin||!i.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var S=_||d?h:i.to;if(this.state&&y){var x={style:f?Ho({},f,S):S};(f&&y[f]!==S||!f&&y!==S)&&this.setState(x)}this.runAnimation(Er(Er({},this.props),{},{from:S,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var i=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),i&&i()}},{key:"handleStyleChange",value:function(i){this.changeStyle(i)}},{key:"changeStyle",value:function(i){this.mounted&&this.setState({style:i})}},{key:"runJSAnimation",value:function(i){var o=this,s=i.from,u=i.to,f=i.duration,d=i.easing,m=i.begin,h=i.onAnimationEnd,y=i.onAnimationStart,g=sB(s,u,QF(d),f,this.changeStyle),_=function(){o.stopJSAnimation=g()};this.manager.start([y,m,_,f,h])}},{key:"runStepAnimation",value:function(i){var o=this,s=i.steps,u=i.begin,f=i.onAnimationStart,d=s[0],m=d.style,h=d.duration,y=h===void 0?0:h,g=function(S,x,j){if(j===0)return S;var A=x.duration,E=x.easing,T=E===void 0?"ease":E,O=x.style,P=x.properties,C=x.onAnimationEnd,R=j>0?s[j-1]:x,$=P||Object.keys(O);if(typeof T=="function"||T==="spring")return[].concat(Em(S),[o.runJSAnimation.bind(o,{from:R.style,to:O,duration:A,easing:T}),A]);var z=j6($,A,T),q=Er(Er(Er({},R.style),O),{},{transition:z});return[].concat(Em(S),[q,A,C]).filter(FF)};return this.manager.start([f].concat(Em(s.reduce(g,[m,Math.max(y,u)])),[i.onAnimationEnd]))}},{key:"runAnimation",value:function(i){this.manager||(this.manager=RF());var o=i.begin,s=i.duration,u=i.attributeName,f=i.to,d=i.easing,m=i.onAnimationStart,h=i.onAnimationEnd,y=i.steps,g=i.children,_=this.manager;if(this.unSubscribe=_.subscribe(this.handleStyleChange),typeof d=="function"||typeof g=="function"||d==="spring"){this.runJSAnimation(i);return}if(y.length>1){this.runStepAnimation(i);return}var S=u?Ho({},u,f):f,x=j6(Object.keys(S),s,d);_.start([m,o,Er(Er({},S),{},{transition:x}),s,h])}},{key:"render",value:function(){var i=this.props,o=i.children;i.begin;var s=i.duration;i.attributeName,i.easing;var u=i.isActive;i.steps,i.from,i.to,i.canBegin,i.onAnimationEnd,i.shouldReAnimate,i.onAnimationReStart;var f=cB(i,uB),d=D.Children.count(o),m=this.state.style;if(typeof o=="function")return o(m);if(!u||d===0||s<=0)return o;var h=function(g){var _=g.props,S=_.style,x=S===void 0?{}:S,j=_.className,A=D.cloneElement(g,Er(Er({},f),{},{style:Er(Er({},x),m),className:j}));return A};return d===1?h(D.Children.only(o)):B.createElement("div",null,D.Children.map(o,function(y){return h(y)}))}}]),r})(D.PureComponent);wn.displayName="Animate";wn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};wn.propTypes={from:Fe.oneOfType([Fe.object,Fe.string]),to:Fe.oneOfType([Fe.object,Fe.string]),attributeName:Fe.string,duration:Fe.number,begin:Fe.number,easing:Fe.oneOfType([Fe.string,Fe.func]),steps:Fe.arrayOf(Fe.shape({duration:Fe.number.isRequired,style:Fe.object.isRequired,easing:Fe.oneOfType([Fe.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Fe.func]),properties:Fe.arrayOf("string"),onAnimationEnd:Fe.func})),children:Fe.oneOfType([Fe.node,Fe.func]),isActive:Fe.bool,canBegin:Fe.bool,onAnimationEnd:Fe.func,shouldReAnimate:Fe.bool,onAnimationStart:Fe.func,onAnimationReStart:Fe.func};function _l(e){"@babel/helpers - typeof";return _l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_l(e)}function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ec.apply(this,arguments)}function _B(e,t){return EB(e)||AB(e,t)||OB(e,t)||jB()}function jB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OB(e,t){if(e){if(typeof e=="string")return T6(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T6(e,t)}}function T6(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function AB(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function EB(e){if(Array.isArray(e))return e}function C6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function N6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C6(Object(r),!0).forEach(function(n){PB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function PB(e,t,r){return t=kB(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function kB(e){var t=TB(e,"string");return _l(t)=="symbol"?t:t+""}function TB(e,t){if(_l(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(_l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var D6=function(t,r,n,i,o){var s=Math.min(Math.abs(n)/2,Math.abs(i)/2),u=i>=0?1:-1,f=n>=0?1:-1,d=i>=0&&n>=0||i<0&&n<0?1:0,m;if(s>0&&o instanceof Array){for(var h=[0,0,0,0],y=0,g=4;y<g;y++)h[y]=o[y]>s?s:o[y];m="M".concat(t,",").concat(r+u*h[0]),h[0]>0&&(m+="A ".concat(h[0],",").concat(h[0],",0,0,").concat(d,",").concat(t+f*h[0],",").concat(r)),m+="L ".concat(t+n-f*h[1],",").concat(r),h[1]>0&&(m+="A ".concat(h[1],",").concat(h[1],",0,0,").concat(d,`,
        `).concat(t+n,",").concat(r+u*h[1])),m+="L ".concat(t+n,",").concat(r+i-u*h[2]),h[2]>0&&(m+="A ".concat(h[2],",").concat(h[2],",0,0,").concat(d,`,
        `).concat(t+n-f*h[2],",").concat(r+i)),m+="L ".concat(t+f*h[3],",").concat(r+i),h[3]>0&&(m+="A ".concat(h[3],",").concat(h[3],",0,0,").concat(d,`,
        `).concat(t,",").concat(r+i-u*h[3])),m+="Z"}else if(s>0&&o===+o&&o>0){var _=Math.min(s,o);m="M ".concat(t,",").concat(r+u*_,`
            A `).concat(_,",").concat(_,",0,0,").concat(d,",").concat(t+f*_,",").concat(r,`
            L `).concat(t+n-f*_,",").concat(r,`
            A `).concat(_,",").concat(_,",0,0,").concat(d,",").concat(t+n,",").concat(r+u*_,`
            L `).concat(t+n,",").concat(r+i-u*_,`
            A `).concat(_,",").concat(_,",0,0,").concat(d,",").concat(t+n-f*_,",").concat(r+i,`
            L `).concat(t+f*_,",").concat(r+i,`
            A `).concat(_,",").concat(_,",0,0,").concat(d,",").concat(t,",").concat(r+i-u*_," Z")}else m="M ".concat(t,",").concat(r," h ").concat(n," v ").concat(i," h ").concat(-n," Z");return m},CB=function(t,r){if(!t||!r)return!1;var n=t.x,i=t.y,o=r.x,s=r.y,u=r.width,f=r.height;if(Math.abs(u)>0&&Math.abs(f)>0){var d=Math.min(o,o+u),m=Math.max(o,o+u),h=Math.min(s,s+f),y=Math.max(s,s+f);return n>=d&&n<=m&&i>=h&&i<=y}return!1},NB={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},jv=function(t){var r=N6(N6({},NB),t),n=D.useRef(),i=D.useState(-1),o=_B(i,2),s=o[0],u=o[1];D.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var T=n.current.getTotalLength();T&&u(T)}catch{}},[]);var f=r.x,d=r.y,m=r.width,h=r.height,y=r.radius,g=r.className,_=r.animationEasing,S=r.animationDuration,x=r.animationBegin,j=r.isAnimationActive,A=r.isUpdateAnimationActive;if(f!==+f||d!==+d||m!==+m||h!==+h||m===0||h===0)return null;var E=Ie("recharts-rectangle",g);return A?B.createElement(wn,{canBegin:s>0,from:{width:m,height:h,x:f,y:d},to:{width:m,height:h,x:f,y:d},duration:S,animationEasing:_,isActive:A},function(T){var O=T.width,P=T.height,C=T.x,R=T.y;return B.createElement(wn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:x,duration:S,isActive:j,easing:_},B.createElement("path",ec({},Ne(r,!0),{className:E,d:D6(C,R,O,P,y),ref:n})))}):B.createElement("path",ec({},Ne(r,!0),{className:E,d:D6(f,d,m,h,y)}))};function e2(){return e2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e2.apply(this,arguments)}var Ov=function(t){var r=t.cx,n=t.cy,i=t.r,o=t.className,s=Ie("recharts-dot",o);return r===+r&&n===+n&&i===+i?B.createElement("circle",e2({},Ne(t,!1),Su(t),{className:s,cx:r,cy:n,r:i})):null};function jl(e){"@babel/helpers - typeof";return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jl(e)}var DB=["x","y","top","left","width","height","className"];function t2(){return t2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t2.apply(this,arguments)}function M6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function MB(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?M6(Object(r),!0).forEach(function(n){RB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function RB(e,t,r){return t=IB(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function IB(e){var t=$B(e,"string");return jl(t)=="symbol"?t:t+""}function $B(e,t){if(jl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(jl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LB(e,t){if(e==null)return{};var r=FB(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function FB(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var BB=function(t,r,n,i,o,s){return"M".concat(t,",").concat(o,"v").concat(i,"M").concat(s,",").concat(r,"h").concat(n)},qB=function(t){var r=t.x,n=r===void 0?0:r,i=t.y,o=i===void 0?0:i,s=t.top,u=s===void 0?0:s,f=t.left,d=f===void 0?0:f,m=t.width,h=m===void 0?0:m,y=t.height,g=y===void 0?0:y,_=t.className,S=LB(t,DB),x=MB({x:n,y:o,top:u,left:d,width:h,height:g},S);return!ce(n)||!ce(o)||!ce(h)||!ce(g)||!ce(u)||!ce(d)?null:B.createElement("path",t2({},Ne(x,!0),{className:Ie("recharts-cross",_),d:BB(n,o,h,g,u,d)}))},Pm,R6;function zB(){if(R6)return Pm;R6=1;var e=Z_(),t=e(Object.getPrototypeOf,Object);return Pm=t,Pm}var km,I6;function UB(){if(I6)return km;I6=1;var e=Sn(),t=zB(),r=_n(),n="[object Object]",i=Function.prototype,o=Object.prototype,s=i.toString,u=o.hasOwnProperty,f=s.call(Object);function d(m){if(!r(m)||e(m)!=n)return!1;var h=t(m);if(h===null)return!0;var y=u.call(h,"constructor")&&h.constructor;return typeof y=="function"&&y instanceof y&&s.call(y)==f}return km=d,km}var WB=UB();const HB=We(WB);var Tm,$6;function VB(){if($6)return Tm;$6=1;var e=Sn(),t=_n(),r="[object Boolean]";function n(i){return i===!0||i===!1||t(i)&&e(i)==r}return Tm=n,Tm}var KB=VB();const GB=We(KB);function Ol(e){"@babel/helpers - typeof";return Ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ol(e)}function tc(){return tc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},tc.apply(this,arguments)}function XB(e,t){return ZB(e)||JB(e,t)||QB(e,t)||YB()}function YB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QB(e,t){if(e){if(typeof e=="string")return L6(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L6(e,t)}}function L6(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function JB(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function ZB(e){if(Array.isArray(e))return e}function F6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function B6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?F6(Object(r),!0).forEach(function(n){eq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function eq(e,t,r){return t=tq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tq(e){var t=rq(e,"string");return Ol(t)=="symbol"?t:t+""}function rq(e,t){if(Ol(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ol(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var q6=function(t,r,n,i,o){var s=n-i,u;return u="M ".concat(t,",").concat(r),u+="L ".concat(t+n,",").concat(r),u+="L ".concat(t+n-s/2,",").concat(r+o),u+="L ".concat(t+n-s/2-i,",").concat(r+o),u+="L ".concat(t,",").concat(r," Z"),u},nq={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},aq=function(t){var r=B6(B6({},nq),t),n=D.useRef(),i=D.useState(-1),o=XB(i,2),s=o[0],u=o[1];D.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var E=n.current.getTotalLength();E&&u(E)}catch{}},[]);var f=r.x,d=r.y,m=r.upperWidth,h=r.lowerWidth,y=r.height,g=r.className,_=r.animationEasing,S=r.animationDuration,x=r.animationBegin,j=r.isUpdateAnimationActive;if(f!==+f||d!==+d||m!==+m||h!==+h||y!==+y||m===0&&h===0||y===0)return null;var A=Ie("recharts-trapezoid",g);return j?B.createElement(wn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:y,x:f,y:d},to:{upperWidth:m,lowerWidth:h,height:y,x:f,y:d},duration:S,animationEasing:_,isActive:j},function(E){var T=E.upperWidth,O=E.lowerWidth,P=E.height,C=E.x,R=E.y;return B.createElement(wn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:x,duration:S,easing:_},B.createElement("path",tc({},Ne(r,!0),{className:A,d:q6(C,R,T,O,P),ref:n})))}):B.createElement("g",null,B.createElement("path",tc({},Ne(r,!0),{className:A,d:q6(f,d,m,h,y)})))},iq=["option","shapeType","propTransformer","activeClassName","isActive"];function Al(e){"@babel/helpers - typeof";return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Al(e)}function oq(e,t){if(e==null)return{};var r=lq(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function lq(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function z6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function rc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?z6(Object(r),!0).forEach(function(n){sq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sq(e,t,r){return t=uq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function uq(e){var t=cq(e,"string");return Al(t)=="symbol"?t:t+""}function cq(e,t){if(Al(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Al(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fq(e,t){return rc(rc({},t),e)}function dq(e,t){return e==="symbols"}function U6(e){var t=e.shapeType,r=e.elementProps;switch(t){case"rectangle":return B.createElement(jv,r);case"trapezoid":return B.createElement(aq,r);case"sector":return B.createElement(OO,r);case"symbols":if(dq(t))return B.createElement(z2,r);break;default:return null}}function pq(e){return D.isValidElement(e)?e.props:e}function hq(e){var t=e.option,r=e.shapeType,n=e.propTransformer,i=n===void 0?fq:n,o=e.activeClassName,s=o===void 0?"recharts-active-shape":o,u=e.isActive,f=oq(e,iq),d;if(D.isValidElement(t))d=D.cloneElement(t,rc(rc({},f),pq(t)));else if(Pe(t))d=t(f);else if(HB(t)&&!GB(t)){var m=i(t,f);d=B.createElement(U6,{shapeType:r,elementProps:m})}else{var h=f;d=B.createElement(U6,{shapeType:r,elementProps:h})}return u?B.createElement(lt,{className:s},d):d}function Uc(e,t){return t!=null&&"trapezoids"in e.props}function Wc(e,t){return t!=null&&"sectors"in e.props}function El(e,t){return t!=null&&"points"in e.props}function mq(e,t){var r,n,i=e.x===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.x)||e.x===t.x,o=e.y===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.y)||e.y===t.y;return i&&o}function yq(e,t){var r=e.endAngle===t.endAngle,n=e.startAngle===t.startAngle;return r&&n}function vq(e,t){var r=e.x===t.x,n=e.y===t.y,i=e.z===t.z;return r&&n&&i}function gq(e,t){var r;return Uc(e,t)?r=mq:Wc(e,t)?r=yq:El(e,t)&&(r=vq),r}function bq(e,t){var r;return Uc(e,t)?r="trapezoids":Wc(e,t)?r="sectors":El(e,t)&&(r="points"),r}function xq(e,t){if(Uc(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}if(Wc(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}return El(e,t)?t.payload:{}}function wq(e){var t=e.activeTooltipItem,r=e.graphicalItem,n=e.itemData,i=bq(r,t),o=xq(r,t),s=n.filter(function(f,d){var m=Bc(o,f),h=r.props[i].filter(function(_){var S=gq(r,t);return S(_,t)}),y=r.props[i].indexOf(h[h.length-1]),g=d===y;return m&&g}),u=n.indexOf(s[s.length-1]);return u}var Cm,W6;function Sq(){if(W6)return Cm;W6=1;var e=Math.ceil,t=Math.max;function r(n,i,o,s){for(var u=-1,f=t(e((i-n)/(o||1)),0),d=Array(f);f--;)d[s?f:++u]=n,n+=o;return d}return Cm=r,Cm}var Nm,H6;function DO(){if(H6)return Nm;H6=1;var e=mj(),t=1/0,r=17976931348623157e292;function n(i){if(!i)return i===0?i:0;if(i=e(i),i===t||i===-t){var o=i<0?-1:1;return o*r}return i===i?i:0}return Nm=n,Nm}var Dm,V6;function _q(){if(V6)return Dm;V6=1;var e=Sq(),t=Cc(),r=DO();function n(i){return function(o,s,u){return u&&typeof u!="number"&&t(o,s,u)&&(s=u=void 0),o=r(o),s===void 0?(s=o,o=0):s=r(s),u=u===void 0?o<s?1:-1:r(u),e(o,s,u,i)}}return Dm=n,Dm}var Mm,K6;function jq(){if(K6)return Mm;K6=1;var e=_q(),t=e();return Mm=t,Mm}var Oq=jq();const nc=We(Oq);function Pl(e){"@babel/helpers - typeof";return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pl(e)}function G6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function X6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?G6(Object(r),!0).forEach(function(n){MO(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function MO(e,t,r){return t=Aq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Aq(e){var t=Eq(e,"string");return Pl(t)=="symbol"?t:t+""}function Eq(e,t){if(Pl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Pl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Pq=["Webkit","Moz","O","ms"],kq=function(t,r){var n=t.replace(/(\w)/,function(o){return o.toUpperCase()}),i=Pq.reduce(function(o,s){return X6(X6({},o),{},MO({},s+n,r))},{});return i[t]=r,i};function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ac.apply(this,arguments)}function Y6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Rm(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Y6(Object(r),!0).forEach(function(n){Qt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Tq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q6(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,IO(n.key),n)}}function Cq(e,t,r){return t&&Q6(e.prototype,t),r&&Q6(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nq(e,t,r){return t=ic(t),Dq(e,RO()?Reflect.construct(t,r||[],ic(e).constructor):t.apply(e,r))}function Dq(e,t){if(t&&(xi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mq(e)}function Mq(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function RO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(RO=function(){return!!e})()}function ic(e){return ic=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ic(e)}function Rq(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r2(e,t)}function r2(e,t){return r2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},r2(e,t)}function Qt(e,t,r){return t=IO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function IO(e){var t=Iq(e,"string");return xi(t)=="symbol"?t:t+""}function Iq(e,t){if(xi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(xi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var $q=function(t){var r=t.data,n=t.startIndex,i=t.endIndex,o=t.x,s=t.width,u=t.travellerWidth;if(!r||!r.length)return{};var f=r.length,d=Go().domain(nc(0,f)).range([o,o+s-u]),m=d.domain().map(function(h){return d(h)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:d(n),endX:d(i),scale:d,scaleValues:m}},J6=function(t){return t.changedTouches&&!!t.changedTouches.length},wi=(function(e){function t(r){var n;return Tq(this,t),n=Nq(this,t,[r]),Qt(n,"handleDrag",function(i){n.leaveTimer&&(clearTimeout(n.leaveTimer),n.leaveTimer=null),n.state.isTravellerMoving?n.handleTravellerMove(i):n.state.isSlideMoving&&n.handleSlideDrag(i)}),Qt(n,"handleTouchMove",function(i){i.changedTouches!=null&&i.changedTouches.length>0&&n.handleDrag(i.changedTouches[0])}),Qt(n,"handleDragEnd",function(){n.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var i=n.props,o=i.endIndex,s=i.onDragEnd,u=i.startIndex;s==null||s({endIndex:o,startIndex:u})}),n.detachDragEndListener()}),Qt(n,"handleLeaveWrapper",function(){(n.state.isTravellerMoving||n.state.isSlideMoving)&&(n.leaveTimer=window.setTimeout(n.handleDragEnd,n.props.leaveTimeOut))}),Qt(n,"handleEnterSlideOrTraveller",function(){n.setState({isTextActive:!0})}),Qt(n,"handleLeaveSlideOrTraveller",function(){n.setState({isTextActive:!1})}),Qt(n,"handleSlideDragStart",function(i){var o=J6(i)?i.changedTouches[0]:i;n.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:o.pageX}),n.attachDragEndListener()}),n.travellerDragStartHandlers={startX:n.handleTravellerDragStart.bind(n,"startX"),endX:n.handleTravellerDragStart.bind(n,"endX")},n.state={},n}return Rq(t,e),Cq(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(n){var i=n.startX,o=n.endX,s=this.state.scaleValues,u=this.props,f=u.gap,d=u.data,m=d.length-1,h=Math.min(i,o),y=Math.max(i,o),g=t.getIndexInRange(s,h),_=t.getIndexInRange(s,y);return{startIndex:g-g%f,endIndex:_===m?m:_-_%f}}},{key:"getTextOfTick",value:function(n){var i=this.props,o=i.data,s=i.tickFormatter,u=i.dataKey,f=tr(o[n],u,n);return Pe(s)?s(f,n):f}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(n){var i=this.state,o=i.slideMoveStartX,s=i.startX,u=i.endX,f=this.props,d=f.x,m=f.width,h=f.travellerWidth,y=f.startIndex,g=f.endIndex,_=f.onChange,S=n.pageX-o;S>0?S=Math.min(S,d+m-h-u,d+m-h-s):S<0&&(S=Math.max(S,d-s,d-u));var x=this.getIndex({startX:s+S,endX:u+S});(x.startIndex!==y||x.endIndex!==g)&&_&&_(x),this.setState({startX:s+S,endX:u+S,slideMoveStartX:n.pageX})}},{key:"handleTravellerDragStart",value:function(n,i){var o=J6(i)?i.changedTouches[0]:i;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:n,brushMoveStartX:o.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(n){var i=this.state,o=i.brushMoveStartX,s=i.movingTravellerId,u=i.endX,f=i.startX,d=this.state[s],m=this.props,h=m.x,y=m.width,g=m.travellerWidth,_=m.onChange,S=m.gap,x=m.data,j={startX:this.state.startX,endX:this.state.endX},A=n.pageX-o;A>0?A=Math.min(A,h+y-g-d):A<0&&(A=Math.max(A,h-d)),j[s]=d+A;var E=this.getIndex(j),T=E.startIndex,O=E.endIndex,P=function(){var R=x.length-1;return s==="startX"&&(u>f?T%S===0:O%S===0)||u<f&&O===R||s==="endX"&&(u>f?O%S===0:T%S===0)||u>f&&O===R};this.setState(Qt(Qt({},s,d+A),"brushMoveStartX",n.pageX),function(){_&&P()&&_(E)})}},{key:"handleTravellerMoveKeyboard",value:function(n,i){var o=this,s=this.state,u=s.scaleValues,f=s.startX,d=s.endX,m=this.state[i],h=u.indexOf(m);if(h!==-1){var y=h+n;if(!(y===-1||y>=u.length)){var g=u[y];i==="startX"&&g>=d||i==="endX"&&g<=f||this.setState(Qt({},i,g),function(){o.props.onChange(o.getIndex({startX:o.state.startX,endX:o.state.endX}))})}}}},{key:"renderBackground",value:function(){var n=this.props,i=n.x,o=n.y,s=n.width,u=n.height,f=n.fill,d=n.stroke;return B.createElement("rect",{stroke:d,fill:f,x:i,y:o,width:s,height:u})}},{key:"renderPanorama",value:function(){var n=this.props,i=n.x,o=n.y,s=n.width,u=n.height,f=n.data,d=n.children,m=n.padding,h=D.Children.only(d);return h?B.cloneElement(h,{x:i,y:o,width:s,height:u,margin:m,compact:!0,data:f}):null}},{key:"renderTravellerLayer",value:function(n,i){var o,s,u=this,f=this.props,d=f.y,m=f.travellerWidth,h=f.height,y=f.traveller,g=f.ariaLabel,_=f.data,S=f.startIndex,x=f.endIndex,j=Math.max(n,this.props.x),A=Rm(Rm({},Ne(this.props,!1)),{},{x:j,y:d,width:m,height:h}),E=g||"Min value: ".concat((o=_[S])===null||o===void 0?void 0:o.name,", Max value: ").concat((s=_[x])===null||s===void 0?void 0:s.name);return B.createElement(lt,{tabIndex:0,role:"slider","aria-label":E,"aria-valuenow":n,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[i],onTouchStart:this.travellerDragStartHandlers[i],onKeyDown:function(O){["ArrowLeft","ArrowRight"].includes(O.key)&&(O.preventDefault(),O.stopPropagation(),u.handleTravellerMoveKeyboard(O.key==="ArrowRight"?1:-1,i))},onFocus:function(){u.setState({isTravellerFocused:!0})},onBlur:function(){u.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(y,A))}},{key:"renderSlide",value:function(n,i){var o=this.props,s=o.y,u=o.height,f=o.stroke,d=o.travellerWidth,m=Math.min(n,i)+d,h=Math.max(Math.abs(i-n)-d,0);return B.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:f,fillOpacity:.2,x:m,y:s,width:h,height:u})}},{key:"renderText",value:function(){var n=this.props,i=n.startIndex,o=n.endIndex,s=n.y,u=n.height,f=n.travellerWidth,d=n.stroke,m=this.state,h=m.startX,y=m.endX,g=5,_={pointerEvents:"none",fill:d};return B.createElement(lt,{className:"recharts-brush-texts"},B.createElement(Mu,ac({textAnchor:"end",verticalAnchor:"middle",x:Math.min(h,y)-g,y:s+u/2},_),this.getTextOfTick(i)),B.createElement(Mu,ac({textAnchor:"start",verticalAnchor:"middle",x:Math.max(h,y)+f+g,y:s+u/2},_),this.getTextOfTick(o)))}},{key:"render",value:function(){var n=this.props,i=n.data,o=n.className,s=n.children,u=n.x,f=n.y,d=n.width,m=n.height,h=n.alwaysShowText,y=this.state,g=y.startX,_=y.endX,S=y.isTextActive,x=y.isSlideMoving,j=y.isTravellerMoving,A=y.isTravellerFocused;if(!i||!i.length||!ce(u)||!ce(f)||!ce(d)||!ce(m)||d<=0||m<=0)return null;var E=Ie("recharts-brush",o),T=B.Children.count(s)===1,O=kq("userSelect","none");return B.createElement(lt,{className:E,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:O},this.renderBackground(),T&&this.renderPanorama(),this.renderSlide(g,_),this.renderTravellerLayer(g,"startX"),this.renderTravellerLayer(_,"endX"),(S||x||j||A||h)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(n){var i=n.x,o=n.y,s=n.width,u=n.height,f=n.stroke,d=Math.floor(o+u/2)-1;return B.createElement(B.Fragment,null,B.createElement("rect",{x:i,y:o,width:s,height:u,fill:f,stroke:"none"}),B.createElement("line",{x1:i+1,y1:d,x2:i+s-1,y2:d,fill:"none",stroke:"#fff"}),B.createElement("line",{x1:i+1,y1:d+2,x2:i+s-1,y2:d+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(n,i){var o;return B.isValidElement(n)?o=B.cloneElement(n,i):Pe(n)?o=n(i):o=t.renderDefaultTraveller(i),o}},{key:"getDerivedStateFromProps",value:function(n,i){var o=n.data,s=n.width,u=n.x,f=n.travellerWidth,d=n.updateId,m=n.startIndex,h=n.endIndex;if(o!==i.prevData||d!==i.prevUpdateId)return Rm({prevData:o,prevTravellerWidth:f,prevUpdateId:d,prevX:u,prevWidth:s},o&&o.length?$q({data:o,width:s,x:u,travellerWidth:f,startIndex:m,endIndex:h}):{scale:null,scaleValues:null});if(i.scale&&(s!==i.prevWidth||u!==i.prevX||f!==i.prevTravellerWidth)){i.scale.range([u,u+s-f]);var y=i.scale.domain().map(function(g){return i.scale(g)});return{prevData:o,prevTravellerWidth:f,prevUpdateId:d,prevX:u,prevWidth:s,startX:i.scale(n.startIndex),endX:i.scale(n.endIndex),scaleValues:y}}return null}},{key:"getIndexInRange",value:function(n,i){for(var o=n.length,s=0,u=o-1;u-s>1;){var f=Math.floor((s+u)/2);n[f]>i?u=f:s=f}return i>=n[u]?u:s}}])})(D.PureComponent);Qt(wi,"displayName","Brush");Qt(wi,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var Im,Z6;function Lq(){if(Z6)return Im;Z6=1;var e=X2();function t(r,n){var i;return e(r,function(o,s,u){return i=n(o,s,u),!i}),!!i}return Im=t,Im}var $m,eS;function Fq(){if(eS)return $m;eS=1;var e=V_(),t=Xn(),r=Lq(),n=Ht(),i=Cc();function o(s,u,f){var d=n(s)?e:r;return f&&i(s,u,f)&&(u=void 0),d(s,t(u,3))}return $m=o,$m}var Bq=Fq();const qq=We(Bq);var Kr=function(t,r){var n=t.alwaysShow,i=t.ifOverflow;return n&&(i="extendDomain"),i===r},Lm,tS;function zq(){if(tS)return Lm;tS=1;var e=cj();function t(r,n,i){n=="__proto__"&&e?e(r,n,{configurable:!0,enumerable:!0,value:i,writable:!0}):r[n]=i}return Lm=t,Lm}var Fm,rS;function Uq(){if(rS)return Fm;rS=1;var e=zq(),t=sj(),r=Xn();function n(i,o){var s={};return o=r(o,3),t(i,function(u,f,d){e(s,f,o(u,f,d))}),s}return Fm=n,Fm}var Wq=Uq();const Hq=We(Wq);var Bm,nS;function Vq(){if(nS)return Bm;nS=1;function e(t,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(!r(t[n],n,t))return!1;return!0}return Bm=e,Bm}var qm,aS;function Kq(){if(aS)return qm;aS=1;var e=X2();function t(r,n){var i=!0;return e(r,function(o,s,u){return i=!!n(o,s,u),i}),i}return qm=t,qm}var zm,iS;function Gq(){if(iS)return zm;iS=1;var e=Vq(),t=Kq(),r=Xn(),n=Ht(),i=Cc();function o(s,u,f){var d=n(s)?e:t;return f&&i(s,u,f)&&(u=void 0),d(s,r(u,3))}return zm=o,zm}var Xq=Gq();const $O=We(Xq);var Yq=["x","y"];function kl(e){"@babel/helpers - typeof";return kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kl(e)}function n2(){return n2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n2.apply(this,arguments)}function oS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function qo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?oS(Object(r),!0).forEach(function(n){Qq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Qq(e,t,r){return t=Jq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jq(e){var t=Zq(e,"string");return kl(t)=="symbol"?t:t+""}function Zq(e,t){if(kl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(kl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ez(e,t){if(e==null)return{};var r=tz(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function tz(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function rz(e,t){var r=e.x,n=e.y,i=ez(e,Yq),o="".concat(r),s=parseInt(o,10),u="".concat(n),f=parseInt(u,10),d="".concat(t.height||i.height),m=parseInt(d,10),h="".concat(t.width||i.width),y=parseInt(h,10);return qo(qo(qo(qo(qo({},t),i),s?{x:s}:{}),f?{y:f}:{}),{},{height:m,width:y,name:t.name,radius:t.radius})}function lS(e){return B.createElement(hq,n2({shapeType:"rectangle",propTransformer:rz,activeClassName:"recharts-active-bar"},e))}var nz=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(n,i){if(typeof t=="number")return t;var o=typeof n=="number";return o?t(n,i):(o||wa(),r)}},az=["value","background"],LO;function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function iz(e,t){if(e==null)return{};var r=oz(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function oz(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function oc(){return oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oc.apply(this,arguments)}function sS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ut(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?sS(Object(r),!0).forEach(function(n){Vn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,BO(n.key),n)}}function sz(e,t,r){return t&&uS(e.prototype,t),r&&uS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function uz(e,t,r){return t=lc(t),cz(e,FO()?Reflect.construct(t,r||[],lc(e).constructor):t.apply(e,r))}function cz(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fz(e)}function fz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function FO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(FO=function(){return!!e})()}function lc(e){return lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},lc(e)}function dz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a2(e,t)}function a2(e,t){return a2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},a2(e,t)}function Vn(e,t,r){return t=BO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function BO(e){var t=pz(e,"string");return Si(t)=="symbol"?t:t+""}function pz(e,t){if(Si(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Si(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ea=(function(e){function t(){var r;lz(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r=uz(this,t,[].concat(i)),Vn(r,"state",{isAnimationFinished:!1}),Vn(r,"id",Bl("recharts-bar-")),Vn(r,"handleAnimationEnd",function(){var s=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),s&&s()}),Vn(r,"handleAnimationStart",function(){var s=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),s&&s()}),r}return dz(t,e),sz(t,[{key:"renderRectanglesStatically",value:function(n){var i=this,o=this.props,s=o.shape,u=o.dataKey,f=o.activeIndex,d=o.activeBar,m=Ne(this.props,!1);return n&&n.map(function(h,y){var g=y===f,_=g?d:s,S=ut(ut(ut({},m),h),{},{isActive:g,option:_,index:y,dataKey:u,onAnimationStart:i.handleAnimationStart,onAnimationEnd:i.handleAnimationEnd});return B.createElement(lt,oc({className:"recharts-bar-rectangle"},_u(i.props,h,y),{key:"rectangle-".concat(h==null?void 0:h.x,"-").concat(h==null?void 0:h.y,"-").concat(h==null?void 0:h.value,"-").concat(y)}),B.createElement(lS,S))})}},{key:"renderRectanglesWithAnimation",value:function(){var n=this,i=this.props,o=i.data,s=i.layout,u=i.isAnimationActive,f=i.animationBegin,d=i.animationDuration,m=i.animationEasing,h=i.animationId,y=this.state.prevData;return B.createElement(wn,{begin:f,duration:d,isActive:u,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(g){var _=g.t,S=o.map(function(x,j){var A=y&&y[j];if(A){var E=Cr(A.x,x.x),T=Cr(A.y,x.y),O=Cr(A.width,x.width),P=Cr(A.height,x.height);return ut(ut({},x),{},{x:E(_),y:T(_),width:O(_),height:P(_)})}if(s==="horizontal"){var C=Cr(0,x.height),R=C(_);return ut(ut({},x),{},{y:x.y+x.height-R,height:R})}var $=Cr(0,x.width),z=$(_);return ut(ut({},x),{},{width:z})});return B.createElement(lt,null,n.renderRectanglesStatically(S))})}},{key:"renderRectangles",value:function(){var n=this.props,i=n.data,o=n.isAnimationActive,s=this.state.prevData;return o&&i&&i.length&&(!s||!Bc(s,i))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(i)}},{key:"renderBackground",value:function(){var n=this,i=this.props,o=i.data,s=i.dataKey,u=i.activeIndex,f=Ne(this.props.background,!1);return o.map(function(d,m){d.value;var h=d.background,y=iz(d,az);if(!h)return null;var g=ut(ut(ut(ut(ut({},y),{},{fill:"#eee"},h),f),_u(n.props,d,m)),{},{onAnimationStart:n.handleAnimationStart,onAnimationEnd:n.handleAnimationEnd,dataKey:s,index:m,className:"recharts-bar-background-rectangle"});return B.createElement(lS,oc({key:"background-bar-".concat(m),option:n.props.background,isActive:m===u},g))})}},{key:"renderErrorBar",value:function(n,i){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.data,u=o.xAxis,f=o.yAxis,d=o.layout,m=o.children,h=hr(m,Kl);if(!h)return null;var y=d==="vertical"?s[0].height/2:s[0].width/2,g=function(x,j){var A=Array.isArray(x.value)?x.value[1]:x.value;return{x:x.x,y:x.y,value:A,errorVal:tr(x,j)}},_={clipPath:n?"url(#clipPath-".concat(i,")"):null};return B.createElement(lt,_,h.map(function(S){return B.cloneElement(S,{key:"error-bar-".concat(i,"-").concat(S.props.dataKey),data:s,xAxis:u,yAxis:f,layout:d,offset:y,dataPointFormatter:g})}))}},{key:"render",value:function(){var n=this.props,i=n.hide,o=n.data,s=n.className,u=n.xAxis,f=n.yAxis,d=n.left,m=n.top,h=n.width,y=n.height,g=n.isAnimationActive,_=n.background,S=n.id;if(i||!o||!o.length)return null;var x=this.state.isAnimationFinished,j=Ie("recharts-bar",s),A=u&&u.allowDataOverflow,E=f&&f.allowDataOverflow,T=A||E,O=Ce(S)?this.id:S;return B.createElement(lt,{className:j},A||E?B.createElement("defs",null,B.createElement("clipPath",{id:"clipPath-".concat(O)},B.createElement("rect",{x:A?d:d-h/2,y:E?m:m-y/2,width:A?h:h*2,height:E?y:y*2}))):null,B.createElement(lt,{className:"recharts-bar-rectangles",clipPath:T?"url(#clipPath-".concat(O,")"):null},_?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(T,O),(!g||x)&&yn.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curData:n.data,prevData:i.curData}:n.data!==i.curData?{curData:n.data}:null}}])})(D.PureComponent);LO=Ea;Vn(Ea,"displayName","Bar");Vn(Ea,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!$i.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Vn(Ea,"getComposedData",function(e){var t=e.props,r=e.item,n=e.barPosition,i=e.bandSize,o=e.xAxis,s=e.yAxis,u=e.xAxisTicks,f=e.yAxisTicks,d=e.stackedData,m=e.dataStartIndex,h=e.displayedData,y=e.offset,g=P$(n,r);if(!g)return null;var _=t.layout,S=r.type.defaultProps,x=S!==void 0?ut(ut({},S),r.props):r.props,j=x.dataKey,A=x.children,E=x.minPointSize,T=_==="horizontal"?s:o,O=d?T.scale.domain():null,P=I$({numericAxis:T}),C=hr(A,J2),R=h.map(function($,z){var q,M,H,X,G,J;d?q=k$(d[m+z],O):(q=tr($,j),Array.isArray(q)||(q=[P,q]));var te=nz(E,LO.defaultProps.minPointSize)(q[1],z);if(_==="horizontal"){var K,ee=[s.scale(q[0]),s.scale(q[1])],Q=ee[0],I=ee[1];M=X5({axis:o,ticks:u,bandSize:i,offset:g.offset,entry:$,index:z}),H=(K=I??Q)!==null&&K!==void 0?K:void 0,X=g.size;var U=Q-I;if(G=Number.isNaN(U)?0:U,J={x:M,y:s.y,width:X,height:s.height},Math.abs(te)>0&&Math.abs(G)<Math.abs(te)){var se=Nr(G||te)*(Math.abs(te)-Math.abs(G));H-=se,G+=se}}else{var me=[o.scale(q[0]),o.scale(q[1])],be=me[0],je=me[1];if(M=be,H=X5({axis:s,ticks:f,bandSize:i,offset:g.offset,entry:$,index:z}),X=je-be,G=g.size,J={x:o.x,y:H,width:o.width,height:G},Math.abs(te)>0&&Math.abs(X)<Math.abs(te)){var De=Nr(X||te)*(Math.abs(te)-Math.abs(X));X+=De}}return ut(ut(ut({},$),{},{x:M,y:H,width:X,height:G,value:d?q:q[1],payload:$,background:J},C&&C[z]&&C[z].props),{},{tooltipPayload:[SO(r,$)],tooltipPosition:{x:M+X/2,y:H+G/2}})});return ut({data:R,layout:_},y)});function Tl(e){"@babel/helpers - typeof";return Tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tl(e)}function hz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,qO(n.key),n)}}function mz(e,t,r){return t&&cS(e.prototype,t),r&&cS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function fS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function kr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fS(Object(r),!0).forEach(function(n){Hc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Hc(e,t,r){return t=qO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function qO(e){var t=yz(e,"string");return Tl(t)=="symbol"?t:t+""}function yz(e,t){if(Tl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Tl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zO=function(t,r,n,i,o){var s=t.width,u=t.height,f=t.layout,d=t.children,m=Object.keys(r),h={left:n.left,leftMirror:n.left,right:s-n.right,rightMirror:s-n.right,top:n.top,topMirror:n.top,bottom:u-n.bottom,bottomMirror:u-n.bottom},y=!!Jt(d,Ea);return m.reduce(function(g,_){var S=r[_],x=S.orientation,j=S.domain,A=S.padding,E=A===void 0?{}:A,T=S.mirror,O=S.reversed,P="".concat(x).concat(T?"Mirror":""),C,R,$,z,q;if(S.type==="number"&&(S.padding==="gap"||S.padding==="no-gap")){var M=j[1]-j[0],H=1/0,X=S.categoricalDomain.sort();if(X.forEach(function(me,be){be>0&&(H=Math.min((me||0)-(X[be-1]||0),H))}),Number.isFinite(H)){var G=H/M,J=S.layout==="vertical"?n.height:n.width;if(S.padding==="gap"&&(C=G*J/2),S.padding==="no-gap"){var te=ba(t.barCategoryGap,G*J),K=G*J/2;C=K-te-(K-te)/J*te}}}i==="xAxis"?R=[n.left+(E.left||0)+(C||0),n.left+n.width-(E.right||0)-(C||0)]:i==="yAxis"?R=f==="horizontal"?[n.top+n.height-(E.bottom||0),n.top+(E.top||0)]:[n.top+(E.top||0)+(C||0),n.top+n.height-(E.bottom||0)-(C||0)]:R=S.range,O&&(R=[R[1],R[0]]);var ee=A$(S,o,y),Q=ee.scale,I=ee.realScaleType;Q.domain(j).range(R),E$(Q);var U=R$(Q,kr(kr({},S),{},{realScaleType:I}));i==="xAxis"?(q=x==="top"&&!T||x==="bottom"&&T,$=n.left,z=h[P]-q*S.height):i==="yAxis"&&(q=x==="left"&&!T||x==="right"&&T,$=h[P]-q*S.width,z=n.top);var se=kr(kr(kr({},S),U),{},{realScaleType:I,x:$,y:z,scale:Q,width:i==="xAxis"?n.width:S.width,height:i==="yAxis"?n.height:S.height});return se.bandSize=Ku(se,U),!S.hide&&i==="xAxis"?h[P]+=(q?-1:1)*se.height:S.hide||(h[P]+=(q?-1:1)*se.width),kr(kr({},g),{},Hc({},_,se))},{})},UO=function(t,r){var n=t.x,i=t.y,o=r.x,s=r.y;return{x:Math.min(n,o),y:Math.min(i,s),width:Math.abs(o-n),height:Math.abs(s-i)}},vz=function(t){var r=t.x1,n=t.y1,i=t.x2,o=t.y2;return UO({x:r,y:n},{x:i,y:o})},WO=(function(){function e(t){hz(this,e),this.scale=t}return mz(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.bandAware,o=n.position;if(r!==void 0){if(o)switch(o){case"start":return this.scale(r);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+s}case"end":{var u=this.bandwidth?this.bandwidth():0;return this.scale(r)+u}default:return this.scale(r)}if(i){var f=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+f}return this.scale(r)}}},{key:"isInRange",value:function(r){var n=this.range(),i=n[0],o=n[n.length-1];return i<=o?r>=i&&r<=o:r>=o&&r<=i}}],[{key:"create",value:function(r){return new e(r)}}])})();Hc(WO,"EPS",1e-4);var Av=function(t){var r=Object.keys(t).reduce(function(n,i){return kr(kr({},n),{},Hc({},i,WO.create(t[i])))},{});return kr(kr({},r),{},{apply:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=o.bandAware,u=o.position;return Hq(i,function(f,d){return r[d].apply(f,{bandAware:s,position:u})})},isInRange:function(i){return $O(i,function(o,s){return r[s].isInRange(o)})}})};function gz(e){return(e%180+180)%180}var bz=function(t){var r=t.width,n=t.height,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=gz(i),s=o*Math.PI/180,u=Math.atan(n/r),f=s>u&&s<Math.PI-u?n/Math.sin(s):r/Math.cos(s);return Math.abs(f)},Um,dS;function xz(){if(dS)return Um;dS=1;var e=Xn(),t=ql(),r=kc();function n(i){return function(o,s,u){var f=Object(o);if(!t(o)){var d=e(s,3);o=r(o),s=function(h){return d(f[h],h,f)}}var m=i(o,s,u);return m>-1?f[d?o[m]:m]:void 0}}return Um=n,Um}var Wm,pS;function wz(){if(pS)return Wm;pS=1;var e=DO();function t(r){var n=e(r),i=n%1;return n===n?i?n-i:n:0}return Wm=t,Wm}var Hm,hS;function Sz(){if(hS)return Hm;hS=1;var e=nj(),t=Xn(),r=wz(),n=Math.max;function i(o,s,u){var f=o==null?0:o.length;if(!f)return-1;var d=u==null?0:r(u);return d<0&&(d=n(f+d,0)),e(o,t(s,3),d)}return Hm=i,Hm}var Vm,mS;function _z(){if(mS)return Vm;mS=1;var e=xz(),t=Sz(),r=e(t);return Vm=r,Vm}var jz=_z();const Oz=We(jz);var Az=b_();const Ez=We(Az);var Pz=Ez(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),Ev=D.createContext(void 0),Pv=D.createContext(void 0),HO=D.createContext(void 0),VO=D.createContext({}),KO=D.createContext(void 0),GO=D.createContext(0),XO=D.createContext(0),yS=function(t){var r=t.state,n=r.xAxisMap,i=r.yAxisMap,o=r.offset,s=t.clipPathId,u=t.children,f=t.width,d=t.height,m=Pz(o);return B.createElement(Ev.Provider,{value:n},B.createElement(Pv.Provider,{value:i},B.createElement(VO.Provider,{value:o},B.createElement(HO.Provider,{value:m},B.createElement(KO.Provider,{value:s},B.createElement(GO.Provider,{value:d},B.createElement(XO.Provider,{value:f},u)))))))},kz=function(){return D.useContext(KO)},YO=function(t){var r=D.useContext(Ev);r==null&&wa();var n=r[t];return n==null&&wa(),n},Tz=function(){var t=D.useContext(Ev);return Hn(t)},Cz=function(){var t=D.useContext(Pv),r=Oz(t,function(n){return $O(n.domain,Number.isFinite)});return r||Hn(t)},QO=function(t){var r=D.useContext(Pv);r==null&&wa();var n=r[t];return n==null&&wa(),n},Nz=function(){var t=D.useContext(HO);return t},Dz=function(){return D.useContext(VO)},kv=function(){return D.useContext(XO)},Tv=function(){return D.useContext(GO)};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function Mz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rz(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ZO(n.key),n)}}function Iz(e,t,r){return t&&Rz(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function $z(e,t,r){return t=sc(t),Lz(e,JO()?Reflect.construct(t,r||[],sc(e).constructor):t.apply(e,r))}function Lz(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Fz(e)}function Fz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(JO=function(){return!!e})()}function sc(e){return sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},sc(e)}function Bz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i2(e,t)}function i2(e,t){return i2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},i2(e,t)}function vS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function gS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vS(Object(r),!0).forEach(function(n){Cv(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Cv(e,t,r){return t=ZO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ZO(e){var t=qz(e,"string");return _i(t)=="symbol"?t:t+""}function qz(e,t){if(_i(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(_i(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function zz(e,t){return Vz(e)||Hz(e,t)||Wz(e,t)||Uz()}function Uz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wz(e,t){if(e){if(typeof e=="string")return bS(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return bS(e,t)}}function bS(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Hz(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function Vz(e){if(Array.isArray(e))return e}function o2(){return o2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o2.apply(this,arguments)}var Kz=function(t,r){var n;return B.isValidElement(t)?n=B.cloneElement(t,r):Pe(t)?n=t(r):n=B.createElement("line",o2({},r,{className:"recharts-reference-line-line"})),n},Gz=function(t,r,n,i,o,s,u,f,d){var m=o.x,h=o.y,y=o.width,g=o.height;if(n){var _=d.y,S=t.y.apply(_,{position:s});if(Kr(d,"discard")&&!t.y.isInRange(S))return null;var x=[{x:m+y,y:S},{x:m,y:S}];return f==="left"?x.reverse():x}if(r){var j=d.x,A=t.x.apply(j,{position:s});if(Kr(d,"discard")&&!t.x.isInRange(A))return null;var E=[{x:A,y:h+g},{x:A,y:h}];return u==="top"?E.reverse():E}if(i){var T=d.segment,O=T.map(function(P){return t.apply(P,{position:s})});return Kr(d,"discard")&&qq(O,function(P){return!t.isInRange(P)})?null:O}return null};function Xz(e){var t=e.x,r=e.y,n=e.segment,i=e.xAxisId,o=e.yAxisId,s=e.shape,u=e.className,f=e.alwaysShow,d=kz(),m=YO(i),h=QO(o),y=Nz();if(!d||!y)return null;hn(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var g=Av({x:m.scale,y:h.scale}),_=ht(t),S=ht(r),x=n&&n.length===2,j=Gz(g,_,S,x,y,e.position,m.orientation,h.orientation,e);if(!j)return null;var A=zz(j,2),E=A[0],T=E.x,O=E.y,P=A[1],C=P.x,R=P.y,$=Kr(e,"hidden")?"url(#".concat(d,")"):void 0,z=gS(gS({clipPath:$},Ne(e,!0)),{},{x1:T,y1:O,x2:C,y2:R});return B.createElement(lt,{className:Ie("recharts-reference-line",u)},Kz(s,z),Ct.renderCallByParent(e,vz({x1:T,y1:O,x2:C,y2:R})))}var Vc=(function(e){function t(){return Mz(this,t),$z(this,t,arguments)}return Bz(t,e),Iz(t,[{key:"render",value:function(){return B.createElement(Xz,this.props)}}])})(B.Component);Cv(Vc,"displayName","ReferenceLine");Cv(Vc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function l2(){return l2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l2.apply(this,arguments)}function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}function xS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function wS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xS(Object(r),!0).forEach(function(n){Kc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Yz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qz(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,tA(n.key),n)}}function Jz(e,t,r){return t&&Qz(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zz(e,t,r){return t=uc(t),eU(e,eA()?Reflect.construct(t,r||[],uc(e).constructor):t.apply(e,r))}function eU(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tU(e)}function tU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eA=function(){return!!e})()}function uc(e){return uc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},uc(e)}function rU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s2(e,t)}function s2(e,t){return s2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},s2(e,t)}function Kc(e,t,r){return t=tA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tA(e){var t=nU(e,"string");return ji(t)=="symbol"?t:t+""}function nU(e,t){if(ji(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ji(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var aU=function(t){var r=t.x,n=t.y,i=t.xAxis,o=t.yAxis,s=Av({x:i.scale,y:o.scale}),u=s.apply({x:r,y:n},{bandAware:!0});return Kr(t,"discard")&&!s.isInRange(u)?null:u},Gc=(function(e){function t(){return Yz(this,t),Zz(this,t,arguments)}return rU(t,e),Jz(t,[{key:"render",value:function(){var n=this.props,i=n.x,o=n.y,s=n.r,u=n.alwaysShow,f=n.clipPathId,d=ht(i),m=ht(o);if(hn(u===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!d||!m)return null;var h=aU(this.props);if(!h)return null;var y=h.x,g=h.y,_=this.props,S=_.shape,x=_.className,j=Kr(this.props,"hidden")?"url(#".concat(f,")"):void 0,A=wS(wS({clipPath:j},Ne(this.props,!0)),{},{cx:y,cy:g});return B.createElement(lt,{className:Ie("recharts-reference-dot",x)},t.renderDot(S,A),Ct.renderCallByParent(this.props,{x:y-s,y:g-s,width:2*s,height:2*s}))}}])})(B.Component);Kc(Gc,"displayName","ReferenceDot");Kc(Gc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});Kc(Gc,"renderDot",function(e,t){var r;return B.isValidElement(e)?r=B.cloneElement(e,t):Pe(e)?r=e(t):r=B.createElement(Ov,l2({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),r});function u2(){return u2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u2.apply(this,arguments)}function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(e)}function SS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function _S(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?SS(Object(r),!0).forEach(function(n){Xc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):SS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function iU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oU(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,nA(n.key),n)}}function lU(e,t,r){return t&&oU(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function sU(e,t,r){return t=cc(t),uU(e,rA()?Reflect.construct(t,r||[],cc(e).constructor):t.apply(e,r))}function uU(e,t){if(t&&(Oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return cU(e)}function cU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rA=function(){return!!e})()}function cc(e){return cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},cc(e)}function fU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c2(e,t)}function c2(e,t){return c2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},c2(e,t)}function Xc(e,t,r){return t=nA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nA(e){var t=dU(e,"string");return Oi(t)=="symbol"?t:t+""}function dU(e,t){if(Oi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Oi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var pU=function(t,r,n,i,o){var s=o.x1,u=o.x2,f=o.y1,d=o.y2,m=o.xAxis,h=o.yAxis;if(!m||!h)return null;var y=Av({x:m.scale,y:h.scale}),g={x:t?y.x.apply(s,{position:"start"}):y.x.rangeMin,y:n?y.y.apply(f,{position:"start"}):y.y.rangeMin},_={x:r?y.x.apply(u,{position:"end"}):y.x.rangeMax,y:i?y.y.apply(d,{position:"end"}):y.y.rangeMax};return Kr(o,"discard")&&(!y.isInRange(g)||!y.isInRange(_))?null:UO(g,_)},Yc=(function(e){function t(){return iU(this,t),sU(this,t,arguments)}return fU(t,e),lU(t,[{key:"render",value:function(){var n=this.props,i=n.x1,o=n.x2,s=n.y1,u=n.y2,f=n.className,d=n.alwaysShow,m=n.clipPathId;hn(d===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var h=ht(i),y=ht(o),g=ht(s),_=ht(u),S=this.props.shape;if(!h&&!y&&!g&&!_&&!S)return null;var x=pU(h,y,g,_,this.props);if(!x&&!S)return null;var j=Kr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return B.createElement(lt,{className:Ie("recharts-reference-area",f)},t.renderRect(S,_S(_S({clipPath:j},Ne(this.props,!0)),x)),Ct.renderCallByParent(this.props,x))}}])})(B.Component);Xc(Yc,"displayName","ReferenceArea");Xc(Yc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});Xc(Yc,"renderRect",function(e,t){var r;return B.isValidElement(e)?r=B.cloneElement(e,t):Pe(e)?r=e(t):r=B.createElement(jv,u2({},t,{className:"recharts-reference-area-rect"})),r});function aA(e,t,r){if(t<1)return[];if(t===1&&r===void 0)return e;for(var n=[],i=0;i<e.length;i+=t)n.push(e[i]);return n}function hU(e,t,r){var n={width:e.width+t.width,height:e.height+t.height};return bz(n,r)}function mU(e,t,r){var n=r==="width",i=e.x,o=e.y,s=e.width,u=e.height;return t===1?{start:n?i:o,end:n?i+s:o+u}:{start:n?i+s:o+u,end:n?i:o}}function fc(e,t,r,n,i){if(e*t<e*n||e*t>e*i)return!1;var o=r();return e*(t-e*o/2-n)>=0&&e*(t+e*o/2-i)<=0}function yU(e,t){return aA(e,t+1)}function vU(e,t,r,n,i){for(var o=(n||[]).slice(),s=t.start,u=t.end,f=0,d=1,m=s,h=function(){var _=n==null?void 0:n[f];if(_===void 0)return{v:aA(n,d)};var S=f,x,j=function(){return x===void 0&&(x=r(_,S)),x},A=_.coordinate,E=f===0||fc(e,A,j,m,u);E||(f=0,m=s,d+=1),E&&(m=A+e*(j()/2+i),f+=d)},y;d<=o.length;)if(y=h(),y)return y.v;return[]}function Cl(e){"@babel/helpers - typeof";return Cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cl(e)}function jS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Tt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?jS(Object(r),!0).forEach(function(n){gU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):jS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function gU(e,t,r){return t=bU(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bU(e){var t=xU(e,"string");return Cl(t)=="symbol"?t:t+""}function xU(e,t){if(Cl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Cl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wU(e,t,r,n,i){for(var o=(n||[]).slice(),s=o.length,u=t.start,f=t.end,d=function(y){var g=o[y],_,S=function(){return _===void 0&&(_=r(g,y)),_};if(y===s-1){var x=e*(g.coordinate+e*S()/2-f);o[y]=g=Tt(Tt({},g),{},{tickCoord:x>0?g.coordinate-x*e:g.coordinate})}else o[y]=g=Tt(Tt({},g),{},{tickCoord:g.coordinate});var j=fc(e,g.tickCoord,S,u,f);j&&(f=g.tickCoord-e*(S()/2+i),o[y]=Tt(Tt({},g),{},{isShow:!0}))},m=s-1;m>=0;m--)d(m);return o}function SU(e,t,r,n,i,o){var s=(n||[]).slice(),u=s.length,f=t.start,d=t.end;if(o){var m=n[u-1],h=r(m,u-1),y=e*(m.coordinate+e*h/2-d);s[u-1]=m=Tt(Tt({},m),{},{tickCoord:y>0?m.coordinate-y*e:m.coordinate});var g=fc(e,m.tickCoord,function(){return h},f,d);g&&(d=m.tickCoord-e*(h/2+i),s[u-1]=Tt(Tt({},m),{},{isShow:!0}))}for(var _=o?u-1:u,S=function(A){var E=s[A],T,O=function(){return T===void 0&&(T=r(E,A)),T};if(A===0){var P=e*(E.coordinate-e*O()/2-f);s[A]=E=Tt(Tt({},E),{},{tickCoord:P<0?E.coordinate-P*e:E.coordinate})}else s[A]=E=Tt(Tt({},E),{},{tickCoord:E.coordinate});var C=fc(e,E.tickCoord,O,f,d);C&&(f=E.tickCoord+e*(O()/2+i),s[A]=Tt(Tt({},E),{},{isShow:!0}))},x=0;x<_;x++)S(x);return s}function Nv(e,t,r){var n=e.tick,i=e.ticks,o=e.viewBox,s=e.minTickGap,u=e.orientation,f=e.interval,d=e.tickFormatter,m=e.unit,h=e.angle;if(!i||!i.length||!n)return[];if(ce(f)||$i.isSsr)return yU(i,typeof f=="number"&&ce(f)?f:0);var y=[],g=u==="top"||u==="bottom"?"width":"height",_=m&&g==="width"?Ko(m,{fontSize:t,letterSpacing:r}):{width:0,height:0},S=function(E,T){var O=Pe(d)?d(E.value,T):E.value;return g==="width"?hU(Ko(O,{fontSize:t,letterSpacing:r}),_,h):Ko(O,{fontSize:t,letterSpacing:r})[g]},x=i.length>=2?Nr(i[1].coordinate-i[0].coordinate):1,j=mU(o,x,g);return f==="equidistantPreserveStart"?vU(x,j,S,i,s):(f==="preserveStart"||f==="preserveStartEnd"?y=SU(x,j,S,i,s,f==="preserveStartEnd"):y=wU(x,j,S,i,s),y.filter(function(A){return A.isShow}))}var _U=["viewBox"],jU=["viewBox"],OU=["ticks"];function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(e)}function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ai.apply(this,arguments)}function OS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Rt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?OS(Object(r),!0).forEach(function(n){Dv(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):OS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Km(e,t){if(e==null)return{};var r=AU(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function AU(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function EU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,oA(n.key),n)}}function PU(e,t,r){return t&&AS(e.prototype,t),r&&AS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function kU(e,t,r){return t=dc(t),TU(e,iA()?Reflect.construct(t,r||[],dc(e).constructor):t.apply(e,r))}function TU(e,t){if(t&&(Ai(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return CU(e)}function CU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(iA=function(){return!!e})()}function dc(e){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},dc(e)}function NU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f2(e,t)}function f2(e,t){return f2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},f2(e,t)}function Dv(e,t,r){return t=oA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oA(e){var t=DU(e,"string");return Ai(t)=="symbol"?t:t+""}function DU(e,t){if(Ai(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ai(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var qi=(function(e){function t(r){var n;return EU(this,t),n=kU(this,t,[r]),n.state={fontSize:"",letterSpacing:""},n}return NU(t,e),PU(t,[{key:"shouldComponentUpdate",value:function(n,i){var o=n.viewBox,s=Km(n,_U),u=this.props,f=u.viewBox,d=Km(u,jU);return!oi(o,f)||!oi(s,d)||!oi(i,this.state)}},{key:"componentDidMount",value:function(){var n=this.layerReference;if(n){var i=n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];i&&this.setState({fontSize:window.getComputedStyle(i).fontSize,letterSpacing:window.getComputedStyle(i).letterSpacing})}}},{key:"getTickLineCoord",value:function(n){var i=this.props,o=i.x,s=i.y,u=i.width,f=i.height,d=i.orientation,m=i.tickSize,h=i.mirror,y=i.tickMargin,g,_,S,x,j,A,E=h?-1:1,T=n.tickSize||m,O=ce(n.tickCoord)?n.tickCoord:n.coordinate;switch(d){case"top":g=_=n.coordinate,x=s+ +!h*f,S=x-E*T,A=S-E*y,j=O;break;case"left":S=x=n.coordinate,_=o+ +!h*u,g=_-E*T,j=g-E*y,A=O;break;case"right":S=x=n.coordinate,_=o+ +h*u,g=_+E*T,j=g+E*y,A=O;break;default:g=_=n.coordinate,x=s+ +h*f,S=x+E*T,A=S+E*y,j=O;break}return{line:{x1:g,y1:S,x2:_,y2:x},tick:{x:j,y:A}}}},{key:"getTickTextAnchor",value:function(){var n=this.props,i=n.orientation,o=n.mirror,s;switch(i){case"left":s=o?"start":"end";break;case"right":s=o?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var n=this.props,i=n.orientation,o=n.mirror,s="end";switch(i){case"left":case"right":s="middle";break;case"top":s=o?"start":"end";break;default:s=o?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.x,o=n.y,s=n.width,u=n.height,f=n.orientation,d=n.mirror,m=n.axisLine,h=Rt(Rt(Rt({},Ne(this.props,!1)),Ne(m,!1)),{},{fill:"none"});if(f==="top"||f==="bottom"){var y=+(f==="top"&&!d||f==="bottom"&&d);h=Rt(Rt({},h),{},{x1:i,y1:o+y*u,x2:i+s,y2:o+y*u})}else{var g=+(f==="left"&&!d||f==="right"&&d);h=Rt(Rt({},h),{},{x1:i+g*s,y1:o,x2:i+g*s,y2:o+u})}return B.createElement("line",ai({},h,{className:Ie("recharts-cartesian-axis-line",pr(m,"className"))}))}},{key:"renderTicks",value:function(n,i,o){var s=this,u=this.props,f=u.tickLine,d=u.stroke,m=u.tick,h=u.tickFormatter,y=u.unit,g=Nv(Rt(Rt({},this.props),{},{ticks:n}),i,o),_=this.getTickTextAnchor(),S=this.getTickVerticalAnchor(),x=Ne(this.props,!1),j=Ne(m,!1),A=Rt(Rt({},x),{},{fill:"none"},Ne(f,!1)),E=g.map(function(T,O){var P=s.getTickLineCoord(T),C=P.line,R=P.tick,$=Rt(Rt(Rt(Rt({textAnchor:_,verticalAnchor:S},x),{},{stroke:"none",fill:d},j),R),{},{index:O,payload:T,visibleTicksCount:g.length,tickFormatter:h});return B.createElement(lt,ai({className:"recharts-cartesian-axis-tick",key:"tick-".concat(T.value,"-").concat(T.coordinate,"-").concat(T.tickCoord)},_u(s.props,T,O)),f&&B.createElement("line",ai({},A,C,{className:Ie("recharts-cartesian-axis-tick-line",pr(f,"className"))})),m&&t.renderTickItem(m,$,"".concat(Pe(h)?h(T.value,O):T.value).concat(y||"")))});return B.createElement("g",{className:"recharts-cartesian-axis-ticks"},E)}},{key:"render",value:function(){var n=this,i=this.props,o=i.axisLine,s=i.width,u=i.height,f=i.ticksGenerator,d=i.className,m=i.hide;if(m)return null;var h=this.props,y=h.ticks,g=Km(h,OU),_=y;return Pe(f)&&(_=y&&y.length>0?f(this.props):f(g)),s<=0||u<=0||!_||!_.length?null:B.createElement(lt,{className:Ie("recharts-cartesian-axis",d),ref:function(x){n.layerReference=x}},o&&this.renderAxisLine(),this.renderTicks(_,this.state.fontSize,this.state.letterSpacing),Ct.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(n,i,o){var s;return B.isValidElement(n)?s=B.cloneElement(n,i):Pe(n)?s=n(i):s=B.createElement(Mu,ai({},i,{className:"recharts-cartesian-axis-tick-value"}),o),s}}])})(D.Component);Dv(qi,"displayName","CartesianAxis");Dv(qi,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var MU=["x1","y1","x2","y2","key"],RU=["offset"];function Sa(e){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sa(e)}function ES(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Nt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ES(Object(r),!0).forEach(function(n){IU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ES(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function IU(e,t,r){return t=$U(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $U(e){var t=LU(e,"string");return Sa(t)=="symbol"?t:t+""}function LU(e,t){if(Sa(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Sa(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},va.apply(this,arguments)}function PS(e,t){if(e==null)return{};var r=FU(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function FU(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var BU=function(t){var r=t.fill;if(!r||r==="none")return null;var n=t.fillOpacity,i=t.x,o=t.y,s=t.width,u=t.height,f=t.ry;return B.createElement("rect",{x:i,y:o,ry:f,width:s,height:u,stroke:"none",fill:r,fillOpacity:n,className:"recharts-cartesian-grid-bg"})};function lA(e,t){var r;if(B.isValidElement(e))r=B.cloneElement(e,t);else if(Pe(e))r=e(t);else{var n=t.x1,i=t.y1,o=t.x2,s=t.y2,u=t.key,f=PS(t,MU),d=Ne(f,!1);d.offset;var m=PS(d,RU);r=B.createElement("line",va({},m,{x1:n,y1:i,x2:o,y2:s,fill:"none",key:u}))}return r}function qU(e){var t=e.x,r=e.width,n=e.horizontal,i=n===void 0?!0:n,o=e.horizontalPoints;if(!i||!o||!o.length)return null;var s=o.map(function(u,f){var d=Nt(Nt({},e),{},{x1:t,y1:u,x2:t+r,y2:u,key:"line-".concat(f),index:f});return lA(i,d)});return B.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function zU(e){var t=e.y,r=e.height,n=e.vertical,i=n===void 0?!0:n,o=e.verticalPoints;if(!i||!o||!o.length)return null;var s=o.map(function(u,f){var d=Nt(Nt({},e),{},{x1:u,y1:t,x2:u,y2:t+r,key:"line-".concat(f),index:f});return lA(i,d)});return B.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function UU(e){var t=e.horizontalFill,r=e.fillOpacity,n=e.x,i=e.y,o=e.width,s=e.height,u=e.horizontalPoints,f=e.horizontal,d=f===void 0?!0:f;if(!d||!t||!t.length)return null;var m=u.map(function(y){return Math.round(y+i-i)}).sort(function(y,g){return y-g});i!==m[0]&&m.unshift(0);var h=m.map(function(y,g){var _=!m[g+1],S=_?i+s-y:m[g+1]-y;if(S<=0)return null;var x=g%t.length;return B.createElement("rect",{key:"react-".concat(g),y,x:n,height:S,width:o,stroke:"none",fill:t[x],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return B.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function WU(e){var t=e.vertical,r=t===void 0?!0:t,n=e.verticalFill,i=e.fillOpacity,o=e.x,s=e.y,u=e.width,f=e.height,d=e.verticalPoints;if(!r||!n||!n.length)return null;var m=d.map(function(y){return Math.round(y+o-o)}).sort(function(y,g){return y-g});o!==m[0]&&m.unshift(0);var h=m.map(function(y,g){var _=!m[g+1],S=_?o+u-y:m[g+1]-y;if(S<=0)return null;var x=g%n.length;return B.createElement("rect",{key:"react-".concat(g),x:y,y:s,width:S,height:f,stroke:"none",fill:n[x],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return B.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var HU=function(t,r){var n=t.xAxis,i=t.width,o=t.height,s=t.offset;return xO(Nv(Nt(Nt(Nt({},qi.defaultProps),n),{},{ticks:fn(n,!0),viewBox:{x:0,y:0,width:i,height:o}})),s.left,s.left+s.width,r)},VU=function(t,r){var n=t.yAxis,i=t.width,o=t.height,s=t.offset;return xO(Nv(Nt(Nt(Nt({},qi.defaultProps),n),{},{ticks:fn(n,!0),viewBox:{x:0,y:0,width:i,height:o}})),s.top,s.top+s.height,r)},ti={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function sA(e){var t,r,n,i,o,s,u=kv(),f=Tv(),d=Dz(),m=Nt(Nt({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ti.stroke,fill:(r=e.fill)!==null&&r!==void 0?r:ti.fill,horizontal:(n=e.horizontal)!==null&&n!==void 0?n:ti.horizontal,horizontalFill:(i=e.horizontalFill)!==null&&i!==void 0?i:ti.horizontalFill,vertical:(o=e.vertical)!==null&&o!==void 0?o:ti.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ti.verticalFill,x:ce(e.x)?e.x:d.left,y:ce(e.y)?e.y:d.top,width:ce(e.width)?e.width:d.width,height:ce(e.height)?e.height:d.height}),h=m.x,y=m.y,g=m.width,_=m.height,S=m.syncWithTicks,x=m.horizontalValues,j=m.verticalValues,A=Tz(),E=Cz();if(!ce(g)||g<=0||!ce(_)||_<=0||!ce(h)||h!==+h||!ce(y)||y!==+y)return null;var T=m.verticalCoordinatesGenerator||HU,O=m.horizontalCoordinatesGenerator||VU,P=m.horizontalPoints,C=m.verticalPoints;if((!P||!P.length)&&Pe(O)){var R=x&&x.length,$=O({yAxis:E?Nt(Nt({},E),{},{ticks:R?x:E.ticks}):void 0,width:u,height:f,offset:d},R?!0:S);hn(Array.isArray($),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Sa($),"]")),Array.isArray($)&&(P=$)}if((!C||!C.length)&&Pe(T)){var z=j&&j.length,q=T({xAxis:A?Nt(Nt({},A),{},{ticks:z?j:A.ticks}):void 0,width:u,height:f,offset:d},z?!0:S);hn(Array.isArray(q),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Sa(q),"]")),Array.isArray(q)&&(C=q)}return B.createElement("g",{className:"recharts-cartesian-grid"},B.createElement(BU,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),B.createElement(qU,va({},m,{offset:d,horizontalPoints:P,xAxis:A,yAxis:E})),B.createElement(zU,va({},m,{offset:d,verticalPoints:C,xAxis:A,yAxis:E})),B.createElement(UU,va({},m,{horizontalPoints:P})),B.createElement(WU,va({},m,{verticalPoints:C})))}sA.displayName="CartesianGrid";var KU=["type","layout","connectNulls","ref"],GU=["key"];function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function kS(e,t){if(e==null)return{};var r=XU(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function XU(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qo.apply(this,arguments)}function TS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Yt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?TS(Object(r),!0).forEach(function(n){Tr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):TS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ri(e){return ZU(e)||JU(e)||QU(e)||YU()}function YU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QU(e,t){if(e){if(typeof e=="string")return d2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d2(e,t)}}function JU(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ZU(e){if(Array.isArray(e))return d2(e)}function d2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function eW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function CS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,cA(n.key),n)}}function tW(e,t,r){return t&&CS(e.prototype,t),r&&CS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function rW(e,t,r){return t=pc(t),nW(e,uA()?Reflect.construct(t,r||[],pc(e).constructor):t.apply(e,r))}function nW(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aW(e)}function aW(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(uA=function(){return!!e})()}function pc(e){return pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},pc(e)}function iW(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p2(e,t)}function p2(e,t){return p2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},p2(e,t)}function Tr(e,t,r){return t=cA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cA(e){var t=oW(e,"string");return Ei(t)=="symbol"?t:t+""}function oW(e,t){if(Ei(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ei(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Gl=(function(e){function t(){var r;eW(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r=rW(this,t,[].concat(i)),Tr(r,"state",{isAnimationFinished:!0,totalLength:0}),Tr(r,"generateSimpleStrokeDasharray",function(s,u){return"".concat(u,"px ").concat(s-u,"px")}),Tr(r,"getStrokeDasharray",function(s,u,f){var d=f.reduce(function(j,A){return j+A});if(!d)return r.generateSimpleStrokeDasharray(u,s);for(var m=Math.floor(s/d),h=s%d,y=u-s,g=[],_=0,S=0;_<f.length;S+=f[_],++_)if(S+f[_]>h){g=[].concat(ri(f.slice(0,_)),[h-S]);break}var x=g.length%2===0?[0,y]:[y];return[].concat(ri(t.repeat(f,m)),ri(g),x).map(function(j){return"".concat(j,"px")}).join(", ")}),Tr(r,"id",Bl("recharts-line-")),Tr(r,"pathRef",function(s){r.mainCurve=s}),Tr(r,"handleAnimationEnd",function(){r.setState({isAnimationFinished:!0}),r.props.onAnimationEnd&&r.props.onAnimationEnd()}),Tr(r,"handleAnimationStart",function(){r.setState({isAnimationFinished:!1}),r.props.onAnimationStart&&r.props.onAnimationStart()}),r}return iW(t,e),tW(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var n=this.getTotalLength();this.setState({totalLength:n})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var n=this.getTotalLength();n!==this.state.totalLength&&this.setState({totalLength:n})}}},{key:"getTotalLength",value:function(){var n=this.mainCurve;try{return n&&n.getTotalLength&&n.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(n,i){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.points,u=o.xAxis,f=o.yAxis,d=o.layout,m=o.children,h=hr(m,Kl);if(!h)return null;var y=function(S,x){return{x:S.x,y:S.y,value:S.value,errorVal:tr(S.payload,x)}},g={clipPath:n?"url(#clipPath-".concat(i,")"):null};return B.createElement(lt,g,h.map(function(_){return B.cloneElement(_,{key:"bar-".concat(_.props.dataKey),data:s,xAxis:u,yAxis:f,layout:d,dataPointFormatter:y})}))}},{key:"renderDots",value:function(n,i,o){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var u=this.props,f=u.dot,d=u.points,m=u.dataKey,h=Ne(this.props,!1),y=Ne(f,!0),g=d.map(function(S,x){var j=Yt(Yt(Yt({key:"dot-".concat(x),r:3},h),y),{},{index:x,cx:S.x,cy:S.y,value:S.value,dataKey:m,payload:S.payload,points:d});return t.renderDotItem(f,j)}),_={clipPath:n?"url(#clipPath-".concat(i?"":"dots-").concat(o,")"):null};return B.createElement(lt,Qo({className:"recharts-line-dots",key:"dots"},_),g)}},{key:"renderCurveStatically",value:function(n,i,o,s){var u=this.props,f=u.type,d=u.layout,m=u.connectNulls;u.ref;var h=kS(u,KU),y=Yt(Yt(Yt({},Ne(h,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:i?"url(#clipPath-".concat(o,")"):null,points:n},s),{},{type:f,layout:d,connectNulls:m});return B.createElement(Wy,Qo({},y,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(n,i){var o=this,s=this.props,u=s.points,f=s.strokeDasharray,d=s.isAnimationActive,m=s.animationBegin,h=s.animationDuration,y=s.animationEasing,g=s.animationId,_=s.animateNewValues,S=s.width,x=s.height,j=this.state,A=j.prevPoints,E=j.totalLength;return B.createElement(wn,{begin:m,duration:h,isActive:d,easing:y,from:{t:0},to:{t:1},key:"line-".concat(g),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(T){var O=T.t;if(A){var P=A.length/u.length,C=u.map(function(M,H){var X=Math.floor(H*P);if(A[X]){var G=A[X],J=Cr(G.x,M.x),te=Cr(G.y,M.y);return Yt(Yt({},M),{},{x:J(O),y:te(O)})}if(_){var K=Cr(S*2,M.x),ee=Cr(x/2,M.y);return Yt(Yt({},M),{},{x:K(O),y:ee(O)})}return Yt(Yt({},M),{},{x:M.x,y:M.y})});return o.renderCurveStatically(C,n,i)}var R=Cr(0,E),$=R(O),z;if(f){var q="".concat(f).split(/[,\s]+/gim).map(function(M){return parseFloat(M)});z=o.getStrokeDasharray($,E,q)}else z=o.generateSimpleStrokeDasharray(E,$);return o.renderCurveStatically(u,n,i,{strokeDasharray:z})})}},{key:"renderCurve",value:function(n,i){var o=this.props,s=o.points,u=o.isAnimationActive,f=this.state,d=f.prevPoints,m=f.totalLength;return u&&s&&s.length&&(!d&&m>0||!Bc(d,s))?this.renderCurveWithAnimation(n,i):this.renderCurveStatically(s,n,i)}},{key:"render",value:function(){var n,i=this.props,o=i.hide,s=i.dot,u=i.points,f=i.className,d=i.xAxis,m=i.yAxis,h=i.top,y=i.left,g=i.width,_=i.height,S=i.isAnimationActive,x=i.id;if(o||!u||!u.length)return null;var j=this.state.isAnimationFinished,A=u.length===1,E=Ie("recharts-line",f),T=d&&d.allowDataOverflow,O=m&&m.allowDataOverflow,P=T||O,C=Ce(x)?this.id:x,R=(n=Ne(s,!1))!==null&&n!==void 0?n:{r:3,strokeWidth:2},$=R.r,z=$===void 0?3:$,q=R.strokeWidth,M=q===void 0?2:q,H=PT(s)?s:{},X=H.clipDot,G=X===void 0?!0:X,J=z*2+M;return B.createElement(lt,{className:E},T||O?B.createElement("defs",null,B.createElement("clipPath",{id:"clipPath-".concat(C)},B.createElement("rect",{x:T?y:y-g/2,y:O?h:h-_/2,width:T?g:g*2,height:O?_:_*2})),!G&&B.createElement("clipPath",{id:"clipPath-dots-".concat(C)},B.createElement("rect",{x:y-J/2,y:h-J/2,width:g+J,height:_+J}))):null,!A&&this.renderCurve(P,C),this.renderErrorBar(P,C),(A||s)&&this.renderDots(P,G,C),(!S||j)&&yn.renderCallByParent(this.props,u))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,prevPoints:i.curPoints}:n.points!==i.curPoints?{curPoints:n.points}:null}},{key:"repeat",value:function(n,i){for(var o=n.length%2!==0?[].concat(ri(n),[0]):n,s=[],u=0;u<i;++u)s=[].concat(ri(s),ri(o));return s}},{key:"renderDotItem",value:function(n,i){var o;if(B.isValidElement(n))o=B.cloneElement(n,i);else if(Pe(n))o=n(i);else{var s=i.key,u=kS(i,GU),f=Ie("recharts-line-dot",typeof n!="boolean"?n.className:"");o=B.createElement(Ov,Qo({key:s},u,{className:f}))}return o}}])})(D.PureComponent);Tr(Gl,"displayName","Line");Tr(Gl,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!$i.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});Tr(Gl,"getComposedData",function(e){var t=e.props,r=e.xAxis,n=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,s=e.dataKey,u=e.bandSize,f=e.displayedData,d=e.offset,m=t.layout,h=f.map(function(y,g){var _=tr(y,s);return m==="horizontal"?{x:G5({axis:r,ticks:i,bandSize:u,entry:y,index:g}),y:Ce(_)?null:n.scale(_),value:_,payload:y}:{x:Ce(_)?null:r.scale(_),y:G5({axis:n,ticks:o,bandSize:u,entry:y,index:g}),value:_,payload:y}});return Yt({points:h,layout:m},d)});function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}function lW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sW(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,pA(n.key),n)}}function uW(e,t,r){return t&&sW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function cW(e,t,r){return t=hc(t),fW(e,fA()?Reflect.construct(t,r||[],hc(e).constructor):t.apply(e,r))}function fW(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dW(e)}function dW(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fA=function(){return!!e})()}function hc(e){return hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},hc(e)}function pW(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h2(e,t)}function h2(e,t){return h2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},h2(e,t)}function dA(e,t,r){return t=pA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pA(e){var t=hW(e,"string");return Pi(t)=="symbol"?t:t+""}function hW(e,t){if(Pi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Pi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function m2(){return m2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m2.apply(this,arguments)}function mW(e){var t=e.xAxisId,r=kv(),n=Tv(),i=YO(t);return i==null?null:B.createElement(qi,m2({},i,{className:Ie("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:n},ticksGenerator:function(s){return fn(s,!0)}}))}var zi=(function(e){function t(){return lW(this,t),cW(this,t,arguments)}return pW(t,e),uW(t,[{key:"render",value:function(){return B.createElement(mW,this.props)}}])})(B.Component);dA(zi,"displayName","XAxis");dA(zi,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function yW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vW(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,yA(n.key),n)}}function gW(e,t,r){return t&&vW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function bW(e,t,r){return t=mc(t),xW(e,hA()?Reflect.construct(t,r||[],mc(e).constructor):t.apply(e,r))}function xW(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wW(e)}function wW(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(hA=function(){return!!e})()}function mc(e){return mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},mc(e)}function SW(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y2(e,t)}function y2(e,t){return y2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},y2(e,t)}function mA(e,t,r){return t=yA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function yA(e){var t=_W(e,"string");return ki(t)=="symbol"?t:t+""}function _W(e,t){if(ki(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ki(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function v2(){return v2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v2.apply(this,arguments)}var jW=function(t){var r=t.yAxisId,n=kv(),i=Tv(),o=QO(r);return o==null?null:B.createElement(qi,v2({},o,{className:Ie("recharts-".concat(o.axisType," ").concat(o.axisType),o.className),viewBox:{x:0,y:0,width:n,height:i},ticksGenerator:function(u){return fn(u,!0)}}))},Ui=(function(e){function t(){return yW(this,t),bW(this,t,arguments)}return SW(t,e),gW(t,[{key:"render",value:function(){return B.createElement(jW,this.props)}}])})(B.Component);mA(Ui,"displayName","YAxis");mA(Ui,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function NS(e){return PW(e)||EW(e)||AW(e)||OW()}function OW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AW(e,t){if(e){if(typeof e=="string")return g2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g2(e,t)}}function EW(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function PW(e){if(Array.isArray(e))return g2(e)}function g2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b2=function(t,r,n,i,o){var s=hr(t,Vc),u=hr(t,Gc),f=[].concat(NS(s),NS(u)),d=hr(t,Yc),m="".concat(i,"Id"),h=i[0],y=r;if(f.length&&(y=f.reduce(function(S,x){if(x.props[m]===n&&Kr(x.props,"extendDomain")&&ce(x.props[h])){var j=x.props[h];return[Math.min(S[0],j),Math.max(S[1],j)]}return S},y)),d.length){var g="".concat(h,"1"),_="".concat(h,"2");y=d.reduce(function(S,x){if(x.props[m]===n&&Kr(x.props,"extendDomain")&&ce(x.props[g])&&ce(x.props[_])){var j=x.props[g],A=x.props[_];return[Math.min(S[0],j,A),Math.max(S[1],j,A)]}return S},y)}return o&&o.length&&(y=o.reduce(function(S,x){return ce(x)?[Math.min(S[0],x),Math.max(S[1],x)]:S},y)),y},Gm={exports:{}},DS;function kW(){return DS||(DS=1,(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function i(f,d,m){this.fn=f,this.context=d,this.once=m||!1}function o(f,d,m,h,y){if(typeof m!="function")throw new TypeError("The listener must be a function");var g=new i(m,h||f,y),_=r?r+d:d;return f._events[_]?f._events[_].fn?f._events[_]=[f._events[_],g]:f._events[_].push(g):(f._events[_]=g,f._eventsCount++),f}function s(f,d){--f._eventsCount===0?f._events=new n:delete f._events[d]}function u(){this._events=new n,this._eventsCount=0}u.prototype.eventNames=function(){var d=[],m,h;if(this._eventsCount===0)return d;for(h in m=this._events)t.call(m,h)&&d.push(r?h.slice(1):h);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(m)):d},u.prototype.listeners=function(d){var m=r?r+d:d,h=this._events[m];if(!h)return[];if(h.fn)return[h.fn];for(var y=0,g=h.length,_=new Array(g);y<g;y++)_[y]=h[y].fn;return _},u.prototype.listenerCount=function(d){var m=r?r+d:d,h=this._events[m];return h?h.fn?1:h.length:0},u.prototype.emit=function(d,m,h,y,g,_){var S=r?r+d:d;if(!this._events[S])return!1;var x=this._events[S],j=arguments.length,A,E;if(x.fn){switch(x.once&&this.removeListener(d,x.fn,void 0,!0),j){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,m),!0;case 3:return x.fn.call(x.context,m,h),!0;case 4:return x.fn.call(x.context,m,h,y),!0;case 5:return x.fn.call(x.context,m,h,y,g),!0;case 6:return x.fn.call(x.context,m,h,y,g,_),!0}for(E=1,A=new Array(j-1);E<j;E++)A[E-1]=arguments[E];x.fn.apply(x.context,A)}else{var T=x.length,O;for(E=0;E<T;E++)switch(x[E].once&&this.removeListener(d,x[E].fn,void 0,!0),j){case 1:x[E].fn.call(x[E].context);break;case 2:x[E].fn.call(x[E].context,m);break;case 3:x[E].fn.call(x[E].context,m,h);break;case 4:x[E].fn.call(x[E].context,m,h,y);break;default:if(!A)for(O=1,A=new Array(j-1);O<j;O++)A[O-1]=arguments[O];x[E].fn.apply(x[E].context,A)}}return!0},u.prototype.on=function(d,m,h){return o(this,d,m,h,!1)},u.prototype.once=function(d,m,h){return o(this,d,m,h,!0)},u.prototype.removeListener=function(d,m,h,y){var g=r?r+d:d;if(!this._events[g])return this;if(!m)return s(this,g),this;var _=this._events[g];if(_.fn)_.fn===m&&(!y||_.once)&&(!h||_.context===h)&&s(this,g);else{for(var S=0,x=[],j=_.length;S<j;S++)(_[S].fn!==m||y&&!_[S].once||h&&_[S].context!==h)&&x.push(_[S]);x.length?this._events[g]=x.length===1?x[0]:x:s(this,g)}return this},u.prototype.removeAllListeners=function(d){var m;return d?(m=r?r+d:d,this._events[m]&&s(this,m)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,e.exports=u})(Gm)),Gm.exports}var TW=kW();const CW=We(TW);var Xm=new CW,Ym="recharts.syncMouseEvents";function Nl(e){"@babel/helpers - typeof";return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nl(e)}function NW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function DW(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,vA(n.key),n)}}function MW(e,t,r){return t&&DW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qm(e,t,r){return t=vA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function vA(e){var t=RW(e,"string");return Nl(t)=="symbol"?t:t+""}function RW(e,t){if(Nl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Nl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var IW=(function(){function e(){NW(this,e),Qm(this,"activeIndex",0),Qm(this,"coordinateList",[]),Qm(this,"layout","horizontal")}return MW(e,[{key:"setDetails",value:function(r){var n,i=r.coordinateList,o=i===void 0?null:i,s=r.container,u=s===void 0?null:s,f=r.layout,d=f===void 0?null:f,m=r.offset,h=m===void 0?null:m,y=r.mouseHandlerCallback,g=y===void 0?null:y;this.coordinateList=(n=o??this.coordinateList)!==null&&n!==void 0?n:[],this.container=u??this.container,this.layout=d??this.layout,this.offset=h??this.offset,this.mouseHandlerCallback=g??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(r){if(this.coordinateList.length!==0)switch(r.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(r){this.activeIndex=r}},{key:"spoofMouse",value:function(){var r,n;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var i=this.container.getBoundingClientRect(),o=i.x,s=i.y,u=i.height,f=this.coordinateList[this.activeIndex].coordinate,d=((r=window)===null||r===void 0?void 0:r.scrollX)||0,m=((n=window)===null||n===void 0?void 0:n.scrollY)||0,h=o+f+d,y=s+this.offset.top+u/2+m;this.mouseHandlerCallback({pageX:h,pageY:y})}}}])})();function $W(e,t,r){if(r==="number"&&t===!0&&Array.isArray(e)){var n=e==null?void 0:e[0],i=e==null?void 0:e[1];if(n&&i&&ce(n)&&ce(i))return!0}return!1}function LW(e,t,r,n){var i=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-i,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function gA(e){var t=e.cx,r=e.cy,n=e.radius,i=e.startAngle,o=e.endAngle,s=Ot(t,r,n,i),u=Ot(t,r,n,o);return{points:[s,u],cx:t,cy:r,radius:n,startAngle:i,endAngle:o}}function FW(e,t,r){var n,i,o,s;if(e==="horizontal")n=t.x,o=n,i=r.top,s=r.top+r.height;else if(e==="vertical")i=t.y,s=i,n=r.left,o=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var u=t.cx,f=t.cy,d=t.innerRadius,m=t.outerRadius,h=t.angle,y=Ot(u,f,d,h),g=Ot(u,f,m,h);n=y.x,i=y.y,o=g.x,s=g.y}else return gA(t);return[{x:n,y:i},{x:o,y:s}]}function Dl(e){"@babel/helpers - typeof";return Dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dl(e)}function MS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function yu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?MS(Object(r),!0).forEach(function(n){BW(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):MS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function BW(e,t,r){return t=qW(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function qW(e){var t=zW(e,"string");return Dl(t)=="symbol"?t:t+""}function zW(e,t){if(Dl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Dl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function UW(e){var t,r,n=e.element,i=e.tooltipEventType,o=e.isActive,s=e.activeCoordinate,u=e.activePayload,f=e.offset,d=e.activeTooltipIndex,m=e.tooltipAxisBandSize,h=e.layout,y=e.chartName,g=(t=n.props.cursor)!==null&&t!==void 0?t:(r=n.type.defaultProps)===null||r===void 0?void 0:r.cursor;if(!n||!g||!o||!s||y!=="ScatterChart"&&i!=="axis")return null;var _,S=Wy;if(y==="ScatterChart")_=s,S=qB;else if(y==="BarChart")_=LW(h,s,f,m),S=jv;else if(h==="radial"){var x=gA(s),j=x.cx,A=x.cy,E=x.radius,T=x.startAngle,O=x.endAngle;_={cx:j,cy:A,startAngle:T,endAngle:O,innerRadius:E,outerRadius:E},S=OO}else _={points:FW(h,s,f)},S=Wy;var P=yu(yu(yu(yu({stroke:"#ccc",pointerEvents:"none"},f),_),Ne(g,!1)),{},{payload:u,payloadIndex:d,className:Ie("recharts-tooltip-cursor",g.className)});return D.isValidElement(g)?D.cloneElement(g,P):D.createElement(S,P)}var WW=["item"],HW=["children","className","width","height","style","compact","title","desc"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ii.apply(this,arguments)}function RS(e,t){return GW(e)||KW(e,t)||xA(e,t)||VW()}function VW(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KW(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,i=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return u}}function GW(e){if(Array.isArray(e))return e}function IS(e,t){if(e==null)return{};var r=XW(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function XW(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function YW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function QW(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,wA(n.key),n)}}function JW(e,t,r){return t&&QW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZW(e,t,r){return t=yc(t),eH(e,bA()?Reflect.construct(t,r||[],yc(e).constructor):t.apply(e,r))}function eH(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tH(e)}function tH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bA=function(){return!!e})()}function yc(e){return yc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},yc(e)}function rH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x2(e,t)}function x2(e,t){return x2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},x2(e,t)}function Ci(e){return iH(e)||aH(e)||xA(e)||nH()}function nH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xA(e,t){if(e){if(typeof e=="string")return w2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w2(e,t)}}function aH(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function iH(e){if(Array.isArray(e))return w2(e)}function w2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$S(Object(r),!0).forEach(function(n){Se(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$S(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Se(e,t,r){return t=wA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function wA(e){var t=oH(e,"string");return Ti(t)=="symbol"?t:t+""}function oH(e,t){if(Ti(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ti(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var lH={xAxis:["bottom","top"],yAxis:["left","right"]},sH={width:"100%",height:"100%"},SA={x:0,y:0};function vu(e){return e}var uH=function(t,r){return r==="horizontal"?t.x:r==="vertical"?t.y:r==="centric"?t.angle:t.radius},cH=function(t,r,n,i){var o=r.find(function(m){return m&&m.index===n});if(o){if(t==="horizontal")return{x:o.coordinate,y:i.y};if(t==="vertical")return{x:i.x,y:o.coordinate};if(t==="centric"){var s=o.coordinate,u=i.radius;return Z(Z(Z({},i),Ot(i.cx,i.cy,u,s)),{},{angle:s,radius:u})}var f=o.coordinate,d=i.angle;return Z(Z(Z({},i),Ot(i.cx,i.cy,f,d)),{},{angle:d,radius:f})}return SA},Qc=function(t,r){var n=r.graphicalItems,i=r.dataStartIndex,o=r.dataEndIndex,s=(n??[]).reduce(function(u,f){var d=f.props.data;return d&&d.length?[].concat(Ci(u),Ci(d)):u},[]);return s.length>0?s:t&&t.length&&ce(i)&&ce(o)?t.slice(i,o+1):[]};function _A(e){return e==="number"?[0,"auto"]:void 0}var S2=function(t,r,n,i){var o=t.graphicalItems,s=t.tooltipAxis,u=Qc(r,t);return n<0||!o||!o.length||n>=u.length?null:o.reduce(function(f,d){var m,h=(m=d.props.data)!==null&&m!==void 0?m:r;h&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=n&&(h=h.slice(t.dataStartIndex,t.dataEndIndex+1));var y;if(s.dataKey&&!s.allowDuplicatedCategory){var g=h===void 0?u:h;y=wu(g,s.dataKey,i)}else y=h&&h[n]||u[n];return y?[].concat(Ci(f),[SO(d,y)]):f},[])},LS=function(t,r,n,i){var o=i||{x:t.chartX,y:t.chartY},s=uH(o,n),u=t.orderedTooltipTicks,f=t.tooltipAxis,d=t.tooltipTicks,m=x$(s,u,d,f);if(m>=0&&d){var h=d[m]&&d[m].value,y=S2(t,r,m,h),g=cH(n,u,m,o);return{activeTooltipIndex:m,activeLabel:h,activePayload:y,activeCoordinate:g}}return null},fH=function(t,r){var n=r.axes,i=r.graphicalItems,o=r.axisType,s=r.axisIdKey,u=r.stackGroups,f=r.dataStartIndex,d=r.dataEndIndex,m=t.layout,h=t.children,y=t.stackOffset,g=bO(m,o);return n.reduce(function(_,S){var x,j=S.type.defaultProps!==void 0?Z(Z({},S.type.defaultProps),S.props):S.props,A=j.type,E=j.dataKey,T=j.allowDataOverflow,O=j.allowDuplicatedCategory,P=j.scale,C=j.ticks,R=j.includeHidden,$=j[s];if(_[$])return _;var z=Qc(t.data,{graphicalItems:i.filter(function(U){var se,me=s in U.props?U.props[s]:(se=U.type.defaultProps)===null||se===void 0?void 0:se[s];return me===$}),dataStartIndex:f,dataEndIndex:d}),q=z.length,M,H,X;$W(j.domain,T,A)&&(M=Fy(j.domain,null,T),g&&(A==="number"||P!=="auto")&&(X=Xo(z,E,"category")));var G=_A(A);if(!M||M.length===0){var J,te=(J=j.domain)!==null&&J!==void 0?J:G;if(E){if(M=Xo(z,E,A),A==="category"&&g){var K=bT(M);O&&K?(H=M,M=nc(0,q)):O||(M=J5(te,M,S).reduce(function(U,se){return U.indexOf(se)>=0?U:[].concat(Ci(U),[se])},[]))}else if(A==="category")O?M=M.filter(function(U){return U!==""&&!Ce(U)}):M=J5(te,M,S).reduce(function(U,se){return U.indexOf(se)>=0||se===""||Ce(se)?U:[].concat(Ci(U),[se])},[]);else if(A==="number"){var ee=O$(z,i.filter(function(U){var se,me,be=s in U.props?U.props[s]:(se=U.type.defaultProps)===null||se===void 0?void 0:se[s],je="hide"in U.props?U.props.hide:(me=U.type.defaultProps)===null||me===void 0?void 0:me.hide;return be===$&&(R||!je)}),E,o,m);ee&&(M=ee)}g&&(A==="number"||P!=="auto")&&(X=Xo(z,E,"category"))}else g?M=nc(0,q):u&&u[$]&&u[$].hasStack&&A==="number"?M=y==="expand"?[0,1]:wO(u[$].stackGroups,f,d):M=gO(z,i.filter(function(U){var se=s in U.props?U.props[s]:U.type.defaultProps[s],me="hide"in U.props?U.props.hide:U.type.defaultProps.hide;return se===$&&(R||!me)}),A,m,!0);if(A==="number")M=b2(h,M,$,o,C),te&&(M=Fy(te,M,T));else if(A==="category"&&te){var Q=te,I=M.every(function(U){return Q.indexOf(U)>=0});I&&(M=Q)}}return Z(Z({},_),{},Se({},$,Z(Z({},j),{},{axisType:o,domain:M,categoricalDomain:X,duplicateDomain:H,originalDomain:(x=j.domain)!==null&&x!==void 0?x:G,isCategorical:g,layout:m})))},{})},dH=function(t,r){var n=r.graphicalItems,i=r.Axis,o=r.axisType,s=r.axisIdKey,u=r.stackGroups,f=r.dataStartIndex,d=r.dataEndIndex,m=t.layout,h=t.children,y=Qc(t.data,{graphicalItems:n,dataStartIndex:f,dataEndIndex:d}),g=y.length,_=bO(m,o),S=-1;return n.reduce(function(x,j){var A=j.type.defaultProps!==void 0?Z(Z({},j.type.defaultProps),j.props):j.props,E=A[s],T=_A("number");if(!x[E]){S++;var O;return _?O=nc(0,g):u&&u[E]&&u[E].hasStack?(O=wO(u[E].stackGroups,f,d),O=b2(h,O,E,o)):(O=Fy(T,gO(y,n.filter(function(P){var C,R,$=s in P.props?P.props[s]:(C=P.type.defaultProps)===null||C===void 0?void 0:C[s],z="hide"in P.props?P.props.hide:(R=P.type.defaultProps)===null||R===void 0?void 0:R.hide;return $===E&&!z}),"number",m),i.defaultProps.allowDataOverflow),O=b2(h,O,E,o)),Z(Z({},x),{},Se({},E,Z(Z({axisType:o},i.defaultProps),{},{hide:!0,orientation:pr(lH,"".concat(o,".").concat(S%2),null),domain:O,originalDomain:T,isCategorical:_,layout:m})))}return x},{})},pH=function(t,r){var n=r.axisType,i=n===void 0?"xAxis":n,o=r.AxisComp,s=r.graphicalItems,u=r.stackGroups,f=r.dataStartIndex,d=r.dataEndIndex,m=t.children,h="".concat(i,"Id"),y=hr(m,o),g={};return y&&y.length?g=fH(t,{axes:y,graphicalItems:s,axisType:i,axisIdKey:h,stackGroups:u,dataStartIndex:f,dataEndIndex:d}):s&&s.length&&(g=dH(t,{Axis:o,graphicalItems:s,axisType:i,axisIdKey:h,stackGroups:u,dataStartIndex:f,dataEndIndex:d})),g},hH=function(t){var r=Hn(t),n=fn(r,!1,!0);return{tooltipTicks:n,orderedTooltipTicks:Y2(n,function(i){return i.coordinate}),tooltipAxis:r,tooltipAxisBandSize:Ku(r,n)}},FS=function(t){var r=t.children,n=t.defaultShowTooltip,i=Jt(r,wi),o=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),i&&i.props&&(i.props.startIndex>=0&&(o=i.props.startIndex),i.props.endIndex>=0&&(s=i.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:o,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!n}},mH=function(t){return!t||!t.length?!1:t.some(function(r){var n=pn(r&&r.type);return n&&n.indexOf("Bar")>=0})},BS=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},yH=function(t,r){var n=t.props,i=t.graphicalItems,o=t.xAxisMap,s=o===void 0?{}:o,u=t.yAxisMap,f=u===void 0?{}:u,d=n.width,m=n.height,h=n.children,y=n.margin||{},g=Jt(h,wi),_=Jt(h,li),S=Object.keys(f).reduce(function(O,P){var C=f[P],R=C.orientation;return!C.mirror&&!C.hide?Z(Z({},O),{},Se({},R,O[R]+C.width)):O},{left:y.left||0,right:y.right||0}),x=Object.keys(s).reduce(function(O,P){var C=s[P],R=C.orientation;return!C.mirror&&!C.hide?Z(Z({},O),{},Se({},R,pr(O,"".concat(R))+C.height)):O},{top:y.top||0,bottom:y.bottom||0}),j=Z(Z({},x),S),A=j.bottom;g&&(j.bottom+=g.props.height||wi.defaultProps.height),_&&r&&(j=_$(j,i,n,r));var E=d-j.left-j.right,T=m-j.top-j.bottom;return Z(Z({brushBottom:A},j),{},{width:Math.max(E,0),height:Math.max(T,0)})},vH=function(t,r){if(r==="xAxis")return t[r].width;if(r==="yAxis")return t[r].height},jA=function(t){var r=t.chartName,n=t.GraphicalChild,i=t.defaultTooltipEventType,o=i===void 0?"axis":i,s=t.validateTooltipEventTypes,u=s===void 0?["axis"]:s,f=t.axisComponents,d=t.legendContent,m=t.formatAxisMap,h=t.defaultProps,y=function(j,A){var E=A.graphicalItems,T=A.stackGroups,O=A.offset,P=A.updateId,C=A.dataStartIndex,R=A.dataEndIndex,$=j.barSize,z=j.layout,q=j.barGap,M=j.barCategoryGap,H=j.maxBarSize,X=BS(z),G=X.numericAxisName,J=X.cateAxisName,te=mH(E),K=[];return E.forEach(function(ee,Q){var I=Qc(j.data,{graphicalItems:[ee],dataStartIndex:C,dataEndIndex:R}),U=ee.type.defaultProps!==void 0?Z(Z({},ee.type.defaultProps),ee.props):ee.props,se=U.dataKey,me=U.maxBarSize,be=U["".concat(G,"Id")],je=U["".concat(J,"Id")],De={},Oe=f.reduce(function(Lt,br){var Pa=A["".concat(br.axisType,"Map")],Wi=U["".concat(br.axisType,"Id")];Pa&&Pa[Wi]||br.axisType==="zAxis"||wa();var Hi=Pa[Wi];return Z(Z({},Lt),{},Se(Se({},br.axisType,Hi),"".concat(br.axisType,"Ticks"),fn(Hi)))},De),oe=Oe[J],ge=Oe["".concat(J,"Ticks")],Ae=T&&T[be]&&T[be].hasStack&&$$(ee,T[be].stackGroups),ae=pn(ee.type).indexOf("Bar")>=0,ze=Ku(oe,ge),Te=[],tt=te&&w$({barSize:$,stackGroups:T,totalSize:vH(Oe,J)});if(ae){var rt,yt,gr=Ce(me)?H:me,Ir=(rt=(yt=Ku(oe,ge,!0))!==null&&yt!==void 0?yt:gr)!==null&&rt!==void 0?rt:0;Te=S$({barGap:q,barCategoryGap:M,bandSize:Ir!==ze?Ir:ze,sizeList:tt[je],maxBarSize:gr}),Ir!==ze&&(Te=Te.map(function(Lt){return Z(Z({},Lt),{},{position:Z(Z({},Lt.position),{},{offset:Lt.position.offset-Ir/2})})}))}var $r=ee&&ee.type&&ee.type.getComposedData;$r&&K.push({props:Z(Z({},$r(Z(Z({},Oe),{},{displayedData:I,props:j,dataKey:se,item:ee,bandSize:ze,barPosition:Te,offset:O,stackedData:Ae,layout:z,dataStartIndex:C,dataEndIndex:R}))),{},Se(Se(Se({key:ee.key||"item-".concat(Q)},G,Oe[G]),J,Oe[J]),"animationId",P)),childIndex:CT(ee,j.children),item:ee})}),K},g=function(j,A){var E=j.props,T=j.dataStartIndex,O=j.dataEndIndex,P=j.updateId;if(!p4({props:E}))return null;var C=E.children,R=E.layout,$=E.stackOffset,z=E.data,q=E.reverseStackOrder,M=BS(R),H=M.numericAxisName,X=M.cateAxisName,G=hr(C,n),J=M$(z,G,"".concat(H,"Id"),"".concat(X,"Id"),$,q),te=f.reduce(function(U,se){var me="".concat(se.axisType,"Map");return Z(Z({},U),{},Se({},me,pH(E,Z(Z({},se),{},{graphicalItems:G,stackGroups:se.axisType===H&&J,dataStartIndex:T,dataEndIndex:O}))))},{}),K=yH(Z(Z({},te),{},{props:E,graphicalItems:G}),A==null?void 0:A.legendBBox);Object.keys(te).forEach(function(U){te[U]=m(E,te[U],K,U.replace("Map",""),r)});var ee=te["".concat(X,"Map")],Q=hH(ee),I=y(E,Z(Z({},te),{},{dataStartIndex:T,dataEndIndex:O,updateId:P,graphicalItems:G,stackGroups:J,offset:K}));return Z(Z({formattedGraphicalItems:I,graphicalItems:G,offset:K,stackGroups:J},Q),te)},_=(function(x){function j(A){var E,T,O;return YW(this,j),O=ZW(this,j,[A]),Se(O,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Se(O,"accessibilityManager",new IW),Se(O,"handleLegendBBoxUpdate",function(P){if(P){var C=O.state,R=C.dataStartIndex,$=C.dataEndIndex,z=C.updateId;O.setState(Z({legendBBox:P},g({props:O.props,dataStartIndex:R,dataEndIndex:$,updateId:z},Z(Z({},O.state),{},{legendBBox:P}))))}}),Se(O,"handleReceiveSyncEvent",function(P,C,R){if(O.props.syncId===P){if(R===O.eventEmitterSymbol&&typeof O.props.syncMethod!="function")return;O.applySyncEvent(C)}}),Se(O,"handleBrushChange",function(P){var C=P.startIndex,R=P.endIndex;if(C!==O.state.dataStartIndex||R!==O.state.dataEndIndex){var $=O.state.updateId;O.setState(function(){return Z({dataStartIndex:C,dataEndIndex:R},g({props:O.props,dataStartIndex:C,dataEndIndex:R,updateId:$},O.state))}),O.triggerSyncEvent({dataStartIndex:C,dataEndIndex:R})}}),Se(O,"handleMouseEnter",function(P){var C=O.getMouseInfo(P);if(C){var R=Z(Z({},C),{},{isTooltipActive:!0});O.setState(R),O.triggerSyncEvent(R);var $=O.props.onMouseEnter;Pe($)&&$(R,P)}}),Se(O,"triggeredAfterMouseMove",function(P){var C=O.getMouseInfo(P),R=C?Z(Z({},C),{},{isTooltipActive:!0}):{isTooltipActive:!1};O.setState(R),O.triggerSyncEvent(R);var $=O.props.onMouseMove;Pe($)&&$(R,P)}),Se(O,"handleItemMouseEnter",function(P){O.setState(function(){return{isTooltipActive:!0,activeItem:P,activePayload:P.tooltipPayload,activeCoordinate:P.tooltipPosition||{x:P.cx,y:P.cy}}})}),Se(O,"handleItemMouseLeave",function(){O.setState(function(){return{isTooltipActive:!1}})}),Se(O,"handleMouseMove",function(P){P.persist(),O.throttleTriggeredAfterMouseMove(P)}),Se(O,"handleMouseLeave",function(P){O.throttleTriggeredAfterMouseMove.cancel();var C={isTooltipActive:!1};O.setState(C),O.triggerSyncEvent(C);var R=O.props.onMouseLeave;Pe(R)&&R(C,P)}),Se(O,"handleOuterEvent",function(P){var C=TT(P),R=pr(O.props,"".concat(C));if(C&&Pe(R)){var $,z;/.*touch.*/i.test(C)?z=O.getMouseInfo(P.changedTouches[0]):z=O.getMouseInfo(P),R(($=z)!==null&&$!==void 0?$:{},P)}}),Se(O,"handleClick",function(P){var C=O.getMouseInfo(P);if(C){var R=Z(Z({},C),{},{isTooltipActive:!0});O.setState(R),O.triggerSyncEvent(R);var $=O.props.onClick;Pe($)&&$(R,P)}}),Se(O,"handleMouseDown",function(P){var C=O.props.onMouseDown;if(Pe(C)){var R=O.getMouseInfo(P);C(R,P)}}),Se(O,"handleMouseUp",function(P){var C=O.props.onMouseUp;if(Pe(C)){var R=O.getMouseInfo(P);C(R,P)}}),Se(O,"handleTouchMove",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&O.throttleTriggeredAfterMouseMove(P.changedTouches[0])}),Se(O,"handleTouchStart",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&O.handleMouseDown(P.changedTouches[0])}),Se(O,"handleTouchEnd",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&O.handleMouseUp(P.changedTouches[0])}),Se(O,"handleDoubleClick",function(P){var C=O.props.onDoubleClick;if(Pe(C)){var R=O.getMouseInfo(P);C(R,P)}}),Se(O,"handleContextMenu",function(P){var C=O.props.onContextMenu;if(Pe(C)){var R=O.getMouseInfo(P);C(R,P)}}),Se(O,"triggerSyncEvent",function(P){O.props.syncId!==void 0&&Xm.emit(Ym,O.props.syncId,P,O.eventEmitterSymbol)}),Se(O,"applySyncEvent",function(P){var C=O.props,R=C.layout,$=C.syncMethod,z=O.state.updateId,q=P.dataStartIndex,M=P.dataEndIndex;if(P.dataStartIndex!==void 0||P.dataEndIndex!==void 0)O.setState(Z({dataStartIndex:q,dataEndIndex:M},g({props:O.props,dataStartIndex:q,dataEndIndex:M,updateId:z},O.state)));else if(P.activeTooltipIndex!==void 0){var H=P.chartX,X=P.chartY,G=P.activeTooltipIndex,J=O.state,te=J.offset,K=J.tooltipTicks;if(!te)return;if(typeof $=="function")G=$(K,P);else if($==="value"){G=-1;for(var ee=0;ee<K.length;ee++)if(K[ee].value===P.activeLabel){G=ee;break}}var Q=Z(Z({},te),{},{x:te.left,y:te.top}),I=Math.min(H,Q.x+Q.width),U=Math.min(X,Q.y+Q.height),se=K[G]&&K[G].value,me=S2(O.state,O.props.data,G),be=K[G]?{x:R==="horizontal"?K[G].coordinate:I,y:R==="horizontal"?U:K[G].coordinate}:SA;O.setState(Z(Z({},P),{},{activeLabel:se,activeCoordinate:be,activePayload:me,activeTooltipIndex:G}))}else O.setState(P)}),Se(O,"renderCursor",function(P){var C,R=O.state,$=R.isTooltipActive,z=R.activeCoordinate,q=R.activePayload,M=R.offset,H=R.activeTooltipIndex,X=R.tooltipAxisBandSize,G=O.getTooltipEventType(),J=(C=P.props.active)!==null&&C!==void 0?C:$,te=O.props.layout,K=P.key||"_recharts-cursor";return B.createElement(UW,{key:K,activeCoordinate:z,activePayload:q,activeTooltipIndex:H,chartName:r,element:P,isActive:J,layout:te,offset:M,tooltipAxisBandSize:X,tooltipEventType:G})}),Se(O,"renderPolarAxis",function(P,C,R){var $=pr(P,"type.axisType"),z=pr(O.state,"".concat($,"Map")),q=P.type.defaultProps,M=q!==void 0?Z(Z({},q),P.props):P.props,H=z&&z[M["".concat($,"Id")]];return D.cloneElement(P,Z(Z({},H),{},{className:Ie($,H.className),key:P.key||"".concat(C,"-").concat(R),ticks:fn(H,!0)}))}),Se(O,"renderPolarGrid",function(P){var C=P.props,R=C.radialLines,$=C.polarAngles,z=C.polarRadius,q=O.state,M=q.radiusAxisMap,H=q.angleAxisMap,X=Hn(M),G=Hn(H),J=G.cx,te=G.cy,K=G.innerRadius,ee=G.outerRadius;return D.cloneElement(P,{polarAngles:Array.isArray($)?$:fn(G,!0).map(function(Q){return Q.coordinate}),polarRadius:Array.isArray(z)?z:fn(X,!0).map(function(Q){return Q.coordinate}),cx:J,cy:te,innerRadius:K,outerRadius:ee,key:P.key||"polar-grid",radialLines:R})}),Se(O,"renderLegend",function(){var P=O.state.formattedGraphicalItems,C=O.props,R=C.children,$=C.width,z=C.height,q=O.props.margin||{},M=$-(q.left||0)-(q.right||0),H=yO({children:R,formattedGraphicalItems:P,legendWidth:M,legendContent:d});if(!H)return null;var X=H.item,G=IS(H,WW);return D.cloneElement(X,Z(Z({},G),{},{chartWidth:$,chartHeight:z,margin:q,onBBoxUpdate:O.handleLegendBBoxUpdate}))}),Se(O,"renderTooltip",function(){var P,C=O.props,R=C.children,$=C.accessibilityLayer,z=Jt(R,Ur);if(!z)return null;var q=O.state,M=q.isTooltipActive,H=q.activeCoordinate,X=q.activePayload,G=q.activeLabel,J=q.offset,te=(P=z.props.active)!==null&&P!==void 0?P:M;return D.cloneElement(z,{viewBox:Z(Z({},J),{},{x:J.left,y:J.top}),active:te,label:G,payload:te?X:[],coordinate:H,accessibilityLayer:$})}),Se(O,"renderBrush",function(P){var C=O.props,R=C.margin,$=C.data,z=O.state,q=z.offset,M=z.dataStartIndex,H=z.dataEndIndex,X=z.updateId;return D.cloneElement(P,{key:P.key||"_recharts-brush",onChange:du(O.handleBrushChange,P.props.onChange),data:$,x:ce(P.props.x)?P.props.x:q.left,y:ce(P.props.y)?P.props.y:q.top+q.height+q.brushBottom-(R.bottom||0),width:ce(P.props.width)?P.props.width:q.width,startIndex:M,endIndex:H,updateId:"brush-".concat(X)})}),Se(O,"renderReferenceElement",function(P,C,R){if(!P)return null;var $=O,z=$.clipPathId,q=O.state,M=q.xAxisMap,H=q.yAxisMap,X=q.offset,G=P.type.defaultProps||{},J=P.props,te=J.xAxisId,K=te===void 0?G.xAxisId:te,ee=J.yAxisId,Q=ee===void 0?G.yAxisId:ee;return D.cloneElement(P,{key:P.key||"".concat(C,"-").concat(R),xAxis:M[K],yAxis:H[Q],viewBox:{x:X.left,y:X.top,width:X.width,height:X.height},clipPathId:z})}),Se(O,"renderActivePoints",function(P){var C=P.item,R=P.activePoint,$=P.basePoint,z=P.childIndex,q=P.isRange,M=[],H=C.props.key,X=C.item.type.defaultProps!==void 0?Z(Z({},C.item.type.defaultProps),C.item.props):C.item.props,G=X.activeDot,J=X.dataKey,te=Z(Z({index:z,dataKey:J,cx:R.x,cy:R.y,r:4,fill:_v(C.item),strokeWidth:2,stroke:"#fff",payload:R.payload,value:R.value},Ne(G,!1)),Su(G));return M.push(j.renderActiveDot(G,te,"".concat(H,"-activePoint-").concat(z))),$?M.push(j.renderActiveDot(G,Z(Z({},te),{},{cx:$.x,cy:$.y}),"".concat(H,"-basePoint-").concat(z))):q&&M.push(null),M}),Se(O,"renderGraphicChild",function(P,C,R){var $=O.filterFormatItem(P,C,R);if(!$)return null;var z=O.getTooltipEventType(),q=O.state,M=q.isTooltipActive,H=q.tooltipAxis,X=q.activeTooltipIndex,G=q.activeLabel,J=O.props.children,te=Jt(J,Ur),K=$.props,ee=K.points,Q=K.isRange,I=K.baseLine,U=$.item.type.defaultProps!==void 0?Z(Z({},$.item.type.defaultProps),$.item.props):$.item.props,se=U.activeDot,me=U.hide,be=U.activeBar,je=U.activeShape,De=!!(!me&&M&&te&&(se||be||je)),Oe={};z!=="axis"&&te&&te.props.trigger==="click"?Oe={onClick:du(O.handleItemMouseEnter,P.props.onClick)}:z!=="axis"&&(Oe={onMouseLeave:du(O.handleItemMouseLeave,P.props.onMouseLeave),onMouseEnter:du(O.handleItemMouseEnter,P.props.onMouseEnter)});var oe=D.cloneElement(P,Z(Z({},$.props),Oe));function ge(br){return typeof H.dataKey=="function"?H.dataKey(br.payload):null}if(De)if(X>=0){var Ae,ae;if(H.dataKey&&!H.allowDuplicatedCategory){var ze=typeof H.dataKey=="function"?ge:"payload.".concat(H.dataKey.toString());Ae=wu(ee,ze,G),ae=Q&&I&&wu(I,ze,G)}else Ae=ee==null?void 0:ee[X],ae=Q&&I&&I[X];if(je||be){var Te=P.props.activeIndex!==void 0?P.props.activeIndex:X;return[D.cloneElement(P,Z(Z(Z({},$.props),Oe),{},{activeIndex:Te})),null,null]}if(!Ce(Ae))return[oe].concat(Ci(O.renderActivePoints({item:$,activePoint:Ae,basePoint:ae,childIndex:X,isRange:Q})))}else{var tt,rt=(tt=O.getItemByXY(O.state.activeCoordinate))!==null&&tt!==void 0?tt:{graphicalItem:oe},yt=rt.graphicalItem,gr=yt.item,Ir=gr===void 0?P:gr,$r=yt.childIndex,Lt=Z(Z(Z({},$.props),Oe),{},{activeIndex:$r});return[D.cloneElement(Ir,Lt),null,null]}return Q?[oe,null,null]:[oe,null]}),Se(O,"renderCustomized",function(P,C,R){return D.cloneElement(P,Z(Z({key:"recharts-customized-".concat(R)},O.props),O.state))}),Se(O,"renderMap",{CartesianGrid:{handler:vu,once:!0},ReferenceArea:{handler:O.renderReferenceElement},ReferenceLine:{handler:vu},ReferenceDot:{handler:O.renderReferenceElement},XAxis:{handler:vu},YAxis:{handler:vu},Brush:{handler:O.renderBrush,once:!0},Bar:{handler:O.renderGraphicChild},Line:{handler:O.renderGraphicChild},Area:{handler:O.renderGraphicChild},Radar:{handler:O.renderGraphicChild},RadialBar:{handler:O.renderGraphicChild},Scatter:{handler:O.renderGraphicChild},Pie:{handler:O.renderGraphicChild},Funnel:{handler:O.renderGraphicChild},Tooltip:{handler:O.renderCursor,once:!0},PolarGrid:{handler:O.renderPolarGrid,once:!0},PolarAngleAxis:{handler:O.renderPolarAxis},PolarRadiusAxis:{handler:O.renderPolarAxis},Customized:{handler:O.renderCustomized}}),O.clipPathId="".concat((E=A.id)!==null&&E!==void 0?E:Bl("recharts"),"-clip"),O.throttleTriggeredAfterMouseMove=yj(O.triggeredAfterMouseMove,(T=A.throttleDelay)!==null&&T!==void 0?T:1e3/60),O.state={},O}return rH(j,x),JW(j,[{key:"componentDidMount",value:function(){var E,T;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(E=this.props.margin.left)!==null&&E!==void 0?E:0,top:(T=this.props.margin.top)!==null&&T!==void 0?T:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var E=this.props,T=E.children,O=E.data,P=E.height,C=E.layout,R=Jt(T,Ur);if(R){var $=R.props.defaultIndex;if(!(typeof $!="number"||$<0||$>this.state.tooltipTicks.length-1)){var z=this.state.tooltipTicks[$]&&this.state.tooltipTicks[$].value,q=S2(this.state,O,$,z),M=this.state.tooltipTicks[$].coordinate,H=(this.state.offset.top+P)/2,X=C==="horizontal",G=X?{x:M,y:H}:{y:M,x:H},J=this.state.formattedGraphicalItems.find(function(K){var ee=K.item;return ee.type.name==="Scatter"});J&&(G=Z(Z({},G),J.props.points[$].tooltipPosition),q=J.props.points[$].tooltipPayload);var te={activeTooltipIndex:$,isTooltipActive:!0,activeLabel:z,activePayload:q,activeCoordinate:G};this.setState(te),this.renderCursor(R),this.accessibilityManager.setIndex($)}}}},{key:"getSnapshotBeforeUpdate",value:function(E,T){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==T.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==E.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==E.margin){var O,P;this.accessibilityManager.setDetails({offset:{left:(O=this.props.margin.left)!==null&&O!==void 0?O:0,top:(P=this.props.margin.top)!==null&&P!==void 0?P:0}})}return null}},{key:"componentDidUpdate",value:function(E){iy([Jt(E.children,Ur)],[Jt(this.props.children,Ur)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var E=Jt(this.props.children,Ur);if(E&&typeof E.props.shared=="boolean"){var T=E.props.shared?"axis":"item";return u.indexOf(T)>=0?T:o}return o}},{key:"getMouseInfo",value:function(E){if(!this.container)return null;var T=this.container,O=T.getBoundingClientRect(),P=vD(O),C={chartX:Math.round(E.pageX-P.left),chartY:Math.round(E.pageY-P.top)},R=O.width/T.offsetWidth||1,$=this.inRange(C.chartX,C.chartY,R);if(!$)return null;var z=this.state,q=z.xAxisMap,M=z.yAxisMap,H=this.getTooltipEventType(),X=LS(this.state,this.props.data,this.props.layout,$);if(H!=="axis"&&q&&M){var G=Hn(q).scale,J=Hn(M).scale,te=G&&G.invert?G.invert(C.chartX):null,K=J&&J.invert?J.invert(C.chartY):null;return Z(Z({},C),{},{xValue:te,yValue:K},X)}return X?Z(Z({},C),X):null}},{key:"inRange",value:function(E,T){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,P=this.props.layout,C=E/O,R=T/O;if(P==="horizontal"||P==="vertical"){var $=this.state.offset,z=C>=$.left&&C<=$.left+$.width&&R>=$.top&&R<=$.top+$.height;return z?{x:C,y:R}:null}var q=this.state,M=q.angleAxisMap,H=q.radiusAxisMap;if(M&&H){var X=Hn(M);return t6({x:C,y:R},X)}return null}},{key:"parseEventsOfWrapper",value:function(){var E=this.props.children,T=this.getTooltipEventType(),O=Jt(E,Ur),P={};O&&T==="axis"&&(O.props.trigger==="click"?P={onClick:this.handleClick}:P={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var C=Su(this.props,this.handleOuterEvent);return Z(Z({},C),P)}},{key:"addListener",value:function(){Xm.on(Ym,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){Xm.removeListener(Ym,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(E,T,O){for(var P=this.state.formattedGraphicalItems,C=0,R=P.length;C<R;C++){var $=P[C];if($.item===E||$.props.key===E.key||T===pn($.item.type)&&O===$.childIndex)return $}return null}},{key:"renderClipPath",value:function(){var E=this.clipPathId,T=this.state.offset,O=T.left,P=T.top,C=T.height,R=T.width;return B.createElement("defs",null,B.createElement("clipPath",{id:E},B.createElement("rect",{x:O,y:P,height:C,width:R})))}},{key:"getXScales",value:function(){var E=this.state.xAxisMap;return E?Object.entries(E).reduce(function(T,O){var P=RS(O,2),C=P[0],R=P[1];return Z(Z({},T),{},Se({},C,R.scale))},{}):null}},{key:"getYScales",value:function(){var E=this.state.yAxisMap;return E?Object.entries(E).reduce(function(T,O){var P=RS(O,2),C=P[0],R=P[1];return Z(Z({},T),{},Se({},C,R.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(E){var T;return(T=this.state.xAxisMap)===null||T===void 0||(T=T[E])===null||T===void 0?void 0:T.scale}},{key:"getYScaleByAxisId",value:function(E){var T;return(T=this.state.yAxisMap)===null||T===void 0||(T=T[E])===null||T===void 0?void 0:T.scale}},{key:"getItemByXY",value:function(E){var T=this.state,O=T.formattedGraphicalItems,P=T.activeItem;if(O&&O.length)for(var C=0,R=O.length;C<R;C++){var $=O[C],z=$.props,q=$.item,M=q.type.defaultProps!==void 0?Z(Z({},q.type.defaultProps),q.props):q.props,H=pn(q.type);if(H==="Bar"){var X=(z.data||[]).find(function(K){return CB(E,K)});if(X)return{graphicalItem:$,payload:X}}else if(H==="RadialBar"){var G=(z.data||[]).find(function(K){return t6(E,K)});if(G)return{graphicalItem:$,payload:G}}else if(Uc($,P)||Wc($,P)||El($,P)){var J=wq({graphicalItem:$,activeTooltipItem:P,itemData:M.data}),te=M.activeIndex===void 0?J:M.activeIndex;return{graphicalItem:Z(Z({},$),{},{childIndex:te}),payload:El($,P)?M.data[J]:$.props.data[J]}}}return null}},{key:"render",value:function(){var E=this;if(!p4(this))return null;var T=this.props,O=T.children,P=T.className,C=T.width,R=T.height,$=T.style,z=T.compact,q=T.title,M=T.desc,H=IS(T,HW),X=Ne(H,!1);if(z)return B.createElement(yS,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},B.createElement(ly,ii({},X,{width:C,height:R,title:q,desc:M}),this.renderClipPath(),m4(O,this.renderMap)));if(this.props.accessibilityLayer){var G,J;X.tabIndex=(G=this.props.tabIndex)!==null&&G!==void 0?G:0,X.role=(J=this.props.role)!==null&&J!==void 0?J:"application",X.onKeyDown=function(K){E.accessibilityManager.keyboardEvent(K)},X.onFocus=function(){E.accessibilityManager.focus()}}var te=this.parseEventsOfWrapper();return B.createElement(yS,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},B.createElement("div",ii({className:Ie("recharts-wrapper",P),style:Z({position:"relative",cursor:"default",width:C,height:R},$)},te,{ref:function(ee){E.container=ee}}),B.createElement(ly,ii({},X,{width:C,height:R,title:q,desc:M,style:sH}),this.renderClipPath(),m4(O,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(D.Component);Se(_,"displayName",r),Se(_,"defaultProps",Z({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},h)),Se(_,"getDerivedStateFromProps",function(x,j){var A=x.dataKey,E=x.data,T=x.children,O=x.width,P=x.height,C=x.layout,R=x.stackOffset,$=x.margin,z=j.dataStartIndex,q=j.dataEndIndex;if(j.updateId===void 0){var M=FS(x);return Z(Z(Z({},M),{},{updateId:0},g(Z(Z({props:x},M),{},{updateId:0}),j)),{},{prevDataKey:A,prevData:E,prevWidth:O,prevHeight:P,prevLayout:C,prevStackOffset:R,prevMargin:$,prevChildren:T})}if(A!==j.prevDataKey||E!==j.prevData||O!==j.prevWidth||P!==j.prevHeight||C!==j.prevLayout||R!==j.prevStackOffset||!oi($,j.prevMargin)){var H=FS(x),X={chartX:j.chartX,chartY:j.chartY,isTooltipActive:j.isTooltipActive},G=Z(Z({},LS(j,E,C)),{},{updateId:j.updateId+1}),J=Z(Z(Z({},H),X),G);return Z(Z(Z({},J),g(Z({props:x},J),j)),{},{prevDataKey:A,prevData:E,prevWidth:O,prevHeight:P,prevLayout:C,prevStackOffset:R,prevMargin:$,prevChildren:T})}if(!iy(T,j.prevChildren)){var te,K,ee,Q,I=Jt(T,wi),U=I&&(te=(K=I.props)===null||K===void 0?void 0:K.startIndex)!==null&&te!==void 0?te:z,se=I&&(ee=(Q=I.props)===null||Q===void 0?void 0:Q.endIndex)!==null&&ee!==void 0?ee:q,me=U!==z||se!==q,be=!Ce(E),je=be&&!me?j.updateId:j.updateId+1;return Z(Z({updateId:je},g(Z(Z({props:x},j),{},{updateId:je,dataStartIndex:U,dataEndIndex:se}),j)),{},{prevChildren:T,dataStartIndex:U,dataEndIndex:se})}return null}),Se(_,"renderActiveDot",function(x,j,A){var E;return D.isValidElement(x)?E=D.cloneElement(x,j):Pe(x)?E=x(j):E=B.createElement(Ov,j),B.createElement(lt,{className:"recharts-active-dot",key:A},E)});var S=D.forwardRef(function(j,A){return B.createElement(_,ii({},j,{ref:A}))});return S.displayName=_.displayName,S},gH=jA({chartName:"LineChart",GraphicalChild:Gl,axisComponents:[{axisType:"xAxis",AxisComp:zi},{axisType:"yAxis",AxisComp:Ui}],formatAxisMap:zO}),bH=jA({chartName:"BarChart",GraphicalChild:Ea,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:zi},{axisType:"yAxis",AxisComp:Ui}],formatAxisMap:zO});function Jm(e,t){return t==="円"?e.toLocaleString()+"円":t==="人"||t==="法人"||t==="pt"?Math.round(e).toLocaleString()+t:t==="%"?e.toFixed(1)+"%":e.toFixed(2)+t}function xH({data:e,average:t,unit:r}){const n=e.map(i=>({...i,displayName:i.prefecture.replace(/[都道府県]$/,""),label:Jm(i.value,r)}));return b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsx("div",{className:"mb-6 p-4 bg-gradient-to-r from-[#F8F8F6] to-white rounded-lg",children:b.jsxs("div",{className:"flex items-center gap-6 text-sm text-[#717182]",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-4 h-4 rounded",style:{backgroundColor:"#C0392B"}}),b.jsx("span",{children:"平均以上"})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-4 h-4 rounded",style:{backgroundColor:"#27AE60"}}),b.jsx("span",{children:"平均以下"})]}),b.jsxs("div",{className:"ml-auto font-medium text-[#1A1A1A]",style:{fontFamily:"monospace"},children:["全国平均: ",Jm(t,r)]})]})}),b.jsx(vj,{width:"100%",height:1450,children:b.jsxs(bH,{data:n,layout:"vertical",margin:{top:5,right:80,left:60,bottom:5},children:[b.jsx(zi,{type:"number",tick:{fontSize:11,fill:"#999"},tickLine:!1,axisLine:!1}),b.jsx(Ui,{type:"category",dataKey:"displayName",width:55,tick:{fontSize:12,fill:"#555"},tickLine:!1,axisLine:!1}),b.jsx(Vc,{x:t,stroke:"#3D52A0",strokeDasharray:"4 3",strokeWidth:1.5,label:{value:"平均",position:"top",fontSize:10,fill:"#3D52A0"}}),b.jsxs(Ea,{dataKey:"value",radius:[0,2,2,0],maxBarSize:16,children:[b.jsx(yn,{dataKey:"label",position:"right",style:{fontSize:11,fill:"#555",fontFamily:"monospace"}}),n.map((i,o)=>b.jsx(J2,{fill:i.value>=t?"#C0392B":"#27AE60",fillOpacity:.85},`cell-${o}`))]})]})}),b.jsx("div",{className:"mt-8 space-y-3",children:e.slice(0,5).map((i,o)=>b.jsxs("div",{className:"flex items-center justify-between text-sm p-4 rounded-lg bg-gradient-to-r from-[#F8F8F6]/50 to-transparent hover:from-[#3D52A0]/5 hover:to-transparent transition-all",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#3D52A0] to-[#5B6FB8] text-white font-medium text-xs",children:o+1}),b.jsx("span",{className:"font-medium",children:i.prefecture})]}),b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("span",{className:"font-medium",style:{fontFamily:"monospace"},children:Jm(i.value,r)}),b.jsxs("span",{className:"text-xs text-[#717182] bg-white px-3 py-1 rounded-full border border-[#E5E0D8]",children:["平均比 ",(i.value/t-1)*100>=0?"+":"",((i.value/t-1)*100).toFixed(1),"%"]})]})]},i.prefecture))})]})}function wH({data:e,unit:t,source:r}){return b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsx(vj,{width:"100%",height:400,children:b.jsxs(gH,{data:e,margin:{top:5,right:30,left:20,bottom:5},children:[b.jsx("defs",{children:b.jsxs("linearGradient",{id:"lineGradient",x1:"0",y1:"0",x2:"1",y2:"0",children:[b.jsx("stop",{offset:"0%",stopColor:"#3D52A0"}),b.jsx("stop",{offset:"100%",stopColor:"#5B6FB8"})]})}),b.jsx(sA,{strokeDasharray:"3 3",stroke:"#E5E0D8"}),b.jsx(zi,{dataKey:"year",tick:{fontSize:12},stroke:"#717182"}),b.jsx(Ui,{tick:{fontSize:12},stroke:"#717182",label:{value:t,angle:-90,position:"insideLeft"}}),b.jsx(Ur,{contentStyle:{backgroundColor:"white",border:"1px solid #E5E0D8",borderRadius:"0.5rem",boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1)",fontFamily:"var(--font-sans)"},formatter:n=>[`${n.toFixed(2)}${t}`,"全国値"]}),b.jsx(Gl,{type:"monotone",dataKey:"value",stroke:"url(#lineGradient)",strokeWidth:3,dot:{fill:"#3D52A0",r:5,strokeWidth:2,stroke:"white"},activeDot:{r:7,strokeWidth:3}})]})}),b.jsxs("p",{className:"text-xs text-[#717182] mt-6 px-4 py-2 bg-[#F8F8F6] rounded-lg inline-block",children:["出典: ",r]})]})}function SH(e,t){return t==="円"||t==="円/年"?e.toLocaleString()+t.replace("円/年","円"):Number.isInteger(e)||t==="人"||t==="法人"||t==="pt"||t==="万戸"?Math.round(e).toLocaleString()+t:e.toFixed(2)+t}function _H({data:e,average:t,unit:r}){var _;const[n,i]=D.useState(""),[o,s]=D.useState("rank"),[u,f]=D.useState("asc"),d=e.some(S=>S.absoluteValue!==void 0),m=((_=e.find(S=>S.absoluteUnit))==null?void 0:_.absoluteUnit)??"",h=D.useMemo(()=>{let S=e.filter(x=>x.prefecture.includes(n));return S.sort((x,j)=>{let A,E;return o==="rank"?(A=x.rank,E=j.rank):o==="value"?(A=x.value,E=j.value):o==="absolute"?(A=x.absoluteValue??0,E=j.absoluteValue??0):(A=(x.value/t-1)*100,E=(j.value/t-1)*100),u==="asc"?A-E:E-A}),S},[e,n,o,u,t]),y=S=>{o===S?f(u==="asc"?"desc":"asc"):(s(S),f(S==="rank"?"asc":"desc"))},g=({col:S})=>o!==S?b.jsx("span",{className:"text-[#C8C4BB] ml-1",children:"↕"}):b.jsx("span",{className:"text-[#3D52A0] ml-1",children:u==="asc"?"↑":"↓"});return b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsxs("div",{className:"mb-6 relative",children:[b.jsx(k7,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]"}),b.jsx("input",{type:"text",placeholder:"都道府県名で検索",value:n,onChange:S=>i(S.target.value),className:"w-full pl-12 pr-4 py-3 border border-[#E5E0D8] rounded-lg focus:outline-none focus:border-[#3D52A0] focus:ring-2 focus:ring-[#3D52A0]/10 transition-all"})]}),b.jsx("div",{className:"overflow-x-auto",children:b.jsxs("table",{className:"w-full text-sm",children:[b.jsx("thead",{children:b.jsxs("tr",{className:"border-b-2 border-[#E5E0D8] bg-gradient-to-r from-[#F8F8F6] to-white",children:[b.jsxs("th",{className:"text-left py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors rounded-tl-lg whitespace-nowrap",onClick:()=>y("rank"),children:["順位",b.jsx(g,{col:"rank"})]}),b.jsx("th",{className:"text-left py-4 px-4 whitespace-nowrap",children:"都道府県"}),b.jsxs("th",{className:"text-right py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors whitespace-nowrap",onClick:()=>y("value"),children:["率・指数（",r,"）",b.jsx(g,{col:"value"})]}),d&&b.jsxs("th",{className:"text-right py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors whitespace-nowrap",onClick:()=>y("absolute"),children:["実数（",m,"）",b.jsx(g,{col:"absolute"})]}),b.jsxs("th",{className:"text-right py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors rounded-tr-lg whitespace-nowrap",onClick:()=>y("ratio"),children:["全国平均比",b.jsx(g,{col:"ratio"})]})]})}),b.jsx("tbody",{children:h.map(S=>{const x=(S.value/t-1)*100;return b.jsxs("tr",{className:"border-b border-[#E5E0D8] hover:bg-gradient-to-r hover:from-[#3D52A0]/5 hover:to-transparent transition-all",children:[b.jsx("td",{className:"py-4 px-4 font-medium text-[#717182]",style:{fontFamily:"monospace"},children:S.rank}),b.jsx("td",{className:"py-4 px-4 font-medium",children:S.prefecture}),b.jsx("td",{className:"py-4 px-4 text-right",style:{fontFamily:"monospace"},children:SH(S.value,r)}),d&&b.jsx("td",{className:"py-4 px-4 text-right text-[#717182]",style:{fontFamily:"monospace"},children:S.absoluteValue!==void 0?S.absoluteValue.toLocaleString()+m:"—"}),b.jsx("td",{className:"py-4 px-4 text-right",children:b.jsxs("span",{className:"px-3 py-1 rounded-full text-xs",style:{backgroundColor:x>=0?"rgba(192, 57, 43, 0.1)":"rgba(39, 174, 96, 0.1)",color:x>=0?"#C0392B":"#27AE60"},children:[x>=0?"+":"",x.toFixed(1),"%"]})})]},S.prefecture)})})]})})]})}const qS="https://japan-stats-likes.100makeniki.workers.dev";function OA({id:e,title:t,url:r}){const[n,i]=D.useState(0),[o,s]=D.useState(!1),[u,f]=D.useState(!1),[d,m]=D.useState(!1),h=r||(typeof window<"u"?window.location.href:""),y=`liked_${e}`;D.useEffect(()=>{fetch(`${qS}?id=${e}`).then(j=>j.json()).then(j=>i(j.count||0)).catch(()=>{}),s(localStorage.getItem(y)==="1")},[e]);const g=async()=>{if(!(o||d)){m(!0);try{const A=await(await fetch(`${qS}?id=${e}`,{method:"POST"})).json();i(A.count),s(!0),localStorage.setItem(y,"1")}catch{}m(!1)}},_=()=>{navigator.clipboard.writeText(h).then(()=>{f(!0),setTimeout(()=>f(!1),2e3)})},S=`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(h)}&hashtags=日本の統計マップ`,x=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(h)}`;return b.jsxs("div",{className:"mt-8 sm:mt-10 border-t border-[#E5E0D8] pt-6 sm:pt-8",children:[b.jsxs("div",{className:"flex flex-col items-center mb-6 sm:mb-8",children:[b.jsx("p",{className:"text-xs text-[#717182] mb-3",children:"この記事は参考になりましたか？"}),b.jsxs("button",{onClick:g,disabled:o||d,className:`flex items-center gap-2 px-6 py-3 rounded-full border-2 text-sm font-medium transition-all ${o?"bg-[#3D52A0] text-white border-[#3D52A0] scale-105":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0] hover:text-[#3D52A0]"}`,children:[b.jsx("span",{className:"text-lg",children:"👍"}),b.jsx("span",{children:o?"参考になった！":"参考になった"}),b.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-bold ${o?"bg-white/20 text-white":"bg-[#F0EDE8] text-[#717182]"}`,children:n})]})]}),b.jsxs("div",{className:"flex flex-col items-center gap-3",children:[b.jsx("p",{className:"text-xs text-[#717182]",children:"この記事をシェアする"}),b.jsxs("div",{className:"flex items-center gap-3 flex-wrap justify-center",children:[b.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors",children:[b.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Xでシェア"]}),b.jsxs("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2.5 text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity",style:{backgroundColor:"#06C755"},children:[b.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"})}),"LINEでシェア"]}),b.jsxs("button",{onClick:_,className:"flex items-center gap-2 px-4 py-2.5 bg-[#F0EDE8] text-[#717182] text-xs font-medium rounded-lg hover:bg-[#E5E0D8] transition-colors",children:[b.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[b.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),b.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),u?"コピーしました！":"URLをコピー"]})]})]})]})}const It={marriage:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+5IUTLM+17R0+614CX",imgSrc728:"https://www20.a8.net/svt/bgt?aid=260530685334&wid=002&eno=01&mid=s00000005670001013000&mc=1",trackingImg728:"https://www12.a8.net/0.gif?a8mat=4B42RH+5IUTLM+17R0+614CX"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100o94500otkn",label:"naco-do（ナコード）",description:"スマホで探す結婚相談所。月会費9,900円〜",emoji:"💍"}],insurance:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6W9ST6+20NK+69P01",imgSrc300:"https://www21.a8.net/svt/bgt?aid=260530685417&wid=002&eno=01&mid=s00000009416001053000&mc=1",trackingImg300:"https://www12.a8.net/0.gif?a8mat=4B42RH+6W9ST6+20NK+69P01",label:"みんなの生命保険アドバイザー",description:"在籍FP3000名以上！無料保険相談",emoji:"🛡️"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6FLNVE+5SIO+5YZ75",imgSrc300:"https://www20.a8.net/svt/bgt?aid=260530685389&wid=002&eno=01&mid=s00000027024001003000&mc=1",trackingImg300:"https://www17.a8.net/0.gif?a8mat=4B42RH+6FLNVE+5SIO+5YZ75",label:"保険マンモス",description:"保険相談後アンケート回答で豪華グルメギフトを全員にプレゼント！",emoji:"🎁"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6D7XGA+2PS+15R4NL",imgSrc728:"https://www21.a8.net/svt/bgt?aid=260530685385&wid=002&eno=01&mid=s00000000352007013000&mc=1",trackingImg728:"https://www10.a8.net/0.gif?a8mat=4B42RH+6D7XGA+2PS+15R4NL",label:"一番安い自動車保険がわかる！",description:"インズウェブで自動車保険を一括比較",emoji:"🚗"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100pflz00otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100pflz00otkn",label:"みんなの生命保険アドバイザー",description:"在籍FP3000名以上！無料保険相談",emoji:"🛡️"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100pedr00otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100pedr00otkn",label:"貯蓄の無料相談「ガーデン」",description:"老後・資産形成の無料相談サービス",emoji:"💰"}],housing:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+A07AJE+136+1BSW5T",imgSrc728:"https://www27.a8.net/svt/bgt?aid=260530685605&wid=002&eno=01&mid=s00000000141008029000&mc=1",trackingImg728:"https://www13.a8.net/0.gif?a8mat=4B42RH+A07AJE+136+1BSW5T",label:"SUUMO新築マンション",description:"気になる新築マンションの資料を無料請求",emoji:"🏠"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",imgSrc300:"https://www26.a8.net/svt/bgt?aid=260530685578&wid=002&eno=01&mid=s00000009416006008000&mc=1",trackingImg300:"https://www13.a8.net/0.gif?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",label:"トウシェル",description:"始める方が増えている不動産投資！始める前の無料相談",emoji:"🏢"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100mukv00otkn",label:"リショップナビ",description:"リフォーム会社を一括比較！しつこい営業なし",emoji:"🔨"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100ou8e00otkn",label:"お住まいアンケート",description:"アンケートに答えてAmazonギフト券GET",emoji:"🏡"}],fire_insurance:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6GSJ2Y+36QK+NTRMP",imgSrc728:"https://www24.a8.net/svt/bgt?aid=260530685391&wid=002&eno=01&mid=s00000014870004002000&mc=1",trackingImg728:"https://www14.a8.net/0.gif?a8mat=4B42RH+6GSJ2Y+36QK+NTRMP",imgSrc300:"https://www28.a8.net/svt/bgt?aid=260530685391&wid=002&eno=01&mid=s00000014870004022000&mc=1",trackingImg300:"https://www19.a8.net/0.gif?a8mat=4B42RH+6GSJ2Y+36QK+NY1Y9",label:"火災保険一括見積もり",description:"火災保険を一括比較！確定率90%の人気サービス",emoji:"🏡"}],investment:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9IXPZU+40OC+C8O75",imgSrc728:"https://www29.a8.net/svt/bgt?aid=260530685576&wid=002&eno=01&mid=s00000018750002056000&mc=1",trackingImg728:"https://www15.a8.net/0.gif?a8mat=4B42RH+9IXPZU+40OC+C8O75",label:"JPリターンズ",description:"マンション投資の無料相談",emoji:"📈"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",imgSrc300:"https://www26.a8.net/svt/bgt?aid=260530685578&wid=002&eno=01&mid=s00000009416006008000&mc=1",trackingImg300:"https://www13.a8.net/0.gif?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",label:"トウシェル",description:"不動産投資の無料相談はトウシェル",emoji:"🏢"}],migration:[{type:"text",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+49LVMI+ZXM+HY06A",label:"引越し侍",description:"引越し費用を最大50%節約！一括見積もり無料",emoji:"🚚",trackingImgText:"https://www18.a8.net/0.gif?a8mat=4B42RH+49LVMI+ZXM+HY06A"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+74LVA2+50+6MDJ6P",imgSrc300:"https://www20.a8.net/svt/bgt?aid=260530685431&wid=002&eno=01&mid=s00000000018040038000&mc=1",trackingImg300:"https://www11.a8.net/0.gif?a8mat=4B42RH+74LVA2+50+6MDJ6P",label:"GMOとくとくBB光",description:"基本工事費が実質無料で安くて速い光回線",emoji:"📡"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+757AVU+50+54SIQP",imgSrc728:"https://www21.a8.net/svt/bgt?aid=260530685432&wid=002&eno=01&mid=s00000000018031038000&mc=1",trackingImg728:"https://www15.a8.net/0.gif?a8mat=4B42RH+757AVU+50+54SIQP",imgSrc300:"https://www23.a8.net/svt/bgt?aid=260530685432&wid=002&eno=01&mid=s00000000018031032000&mc=1",trackingImg300:"https://www13.a8.net/0.gif?a8mat=4B42RH+757AVU+50+54R8G1",label:"とくとくBB×ドコモ光",description:"とくとくBB×ドコモ光のお申込みはこちら",emoji:"📶"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+72TKGQ+50+7LYEAP",imgSrc300:"https://www20.a8.net/svt/bgt?aid=260530685428&wid=002&eno=01&mid=s00000000018046014000&mc=1",trackingImg300:"https://www14.a8.net/0.gif?a8mat=4B42RH+72TKGQ+50+7LYEAP",label:"GMOとくとくBBホームWi-Fi",description:"工事不要のホームWi-Fi",emoji:"📶"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9T23A2+3SPO+CKIQ1T",imgSrc300:"https://www23.a8.net/svt/bgt?aid=260530685593&wid=002&eno=01&mid=s00000017718076006000&mc=1",trackingImg300:"https://www18.a8.net/0.gif?a8mat=4B42RH+9T23A2+3SPO+CKIQ1T",label:"ahamo光",description:"安定した光回線で快適に使える",emoji:"📡"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100p03500otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100p03500otkn",label:"SoftBank光",description:"SoftBank光でネットも電話もおトクに",emoji:"📶"}],parking:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9ZLUXM+3NAY+BYDTT",imgSrc300:"https://www24.a8.net/svt/bgt?aid=260530685604&wid=002&eno=01&mid=s00000017017002008000&mc=1",trackingImg300:"https://www15.a8.net/0.gif?a8mat=4B42RH+9ZLUXM+3NAY+BYDTT",label:"アキッパ",description:"スマホでかんたん駐車場運営",emoji:"🅿️"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100q0xm00otkn",label:"特P（トクP）",description:"自宅の駐車場を貸し出して副収入",emoji:"🚗"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100q26d00otkn",label:"特P（駐車場予約）",description:"全国の駐車場をスマホで予約",emoji:"🅿️"}],local:[{type:"text",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+53DJVE+5IMU+5YJRM",label:"ふるさと本舗",description:"全国の厳選した特産品にふるさと納税",emoji:"🎁",trackingImgText:"https://www19.a8.net/0.gif?a8mat=4B42RH+53DJVE+5IMU+5YJRM"}],child:[{type:"text",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6C128Q+503M+60H7M",label:"ベイビープラネット",description:"妊活・子育て中のママのための無料会員登録",emoji:"👶",trackingImgText:"https://www19.a8.net/0.gif?a8mat=4B42RH+6C128Q+503M+60H7M"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6DTD22+503M+HVV0H",imgSrc300:"https://www24.a8.net/svt/bgt?aid=260530685386&wid=002&eno=01&mid=s00000023341003004000&mc=1",trackingImg300:"https://www10.a8.net/0.gif?a8mat=4B42RH+6DTD22+503M+HVV0H",label:"baby planet（ベビープラネット）",description:"妊活・子育て中のママのための無料会員登録",emoji:"👶"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100q4bd00otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100q4bd00otkn",label:"出産後の無料相談「ガーデン」",description:"産後ケアの無料相談サービス",emoji:"🍀"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100pedh00otkn",label:"学資保険の無料相談「ガーデン」",description:"子どもの将来のために学資保険を無料相談",emoji:"🎓"}]};function jH(e){const t=["divorce-rate","unmarried-rate","unmarried-20s-male","unmarried-20s-female","unmarried-30s-female","unmarried-40s-male","unmarried-40s-female","male-parental-leave"],r=["life-expectancy","suicide-rate","obesity-rate","doctor-count","nurse-count","medical-cost","health-insurance","care-insurance","non-regular-rate","personal-bankruptcy","unemployment-rate"],n=["vacancy-rate","homeownership","house-floor-area","land-price-change","rent-price","detached-rate"],i=["vacancy-rate","homeownership","house-floor-area","disaster-risk","land-price-change"],o=["income","county-income","furusato-tax","fiscal-power"],s=["birth-rate","nursery-waiting","nursery-worker","lunch-fee","university-rate"],u=["migration-rate","working-age-rate","foreigner-rate","commute-time","job-opening-ratio","min-wage","avg-salary","avg-salary-female","forest-rate","sunshine-hours","clear-days"],f=["welfare-rate","care-worker","agriculture-output","agriculture","furusato-tax"],d=["car-ownership","traffic-accident","snow-days"];return t.includes(e)?{category:"marriage",ads:It.marriage}:i.includes(e)?{category:"fire_insurance",ads:[...It.fire_insurance||[],...It.housing]}:r.includes(e)?{category:"insurance",ads:It.insurance}:n.includes(e)?{category:"housing",ads:[...It.housing,...It.investment]}:o.includes(e)?{category:"investment",ads:It.investment}:s.includes(e)?{category:"child",ads:It.child}:u.includes(e)?{category:"migration",ads:It.migration}:f.includes(e)?{category:"local",ads:It.local}:d.includes(e)?{category:"parking",ads:It.parking}:{category:"default",ads:[...It.insurance,...It.housing,...It.investment,...It.migration]}}function OH(e){return e[Math.floor(Math.random()*e.length)]}function AH(e){return e.label??(e.href?e.href.slice(-12):"unknown")}function EH(e){return e.href?e.href.includes("a8.net")?"a8":e.href.includes("accesstrade")?"accesstrade":"other":"unknown"}function zS(e,t,r,n){typeof window>"u"||typeof window.gtag!="function"||window.gtag("event",e,{stat_id:t,ad_label:AH(n),ad_category:r,ad_type:n.type,ad_network:EH(n)})}function Mv({statId:e}){const{category:t,ad:r}=D.useMemo(()=>{const{category:i,ads:o}=jH(e);return{category:i,ad:OH(o)}},[e]);D.useEffect(()=>{zS("affiliate_impression",e,t,r)},[e,t,r]);const n=()=>zS("affiliate_click",e,t,r);return r.type==="banner"?b.jsxs("div",{className:"flex flex-col items-center",children:[b.jsx("p",{className:"text-xs text-[#717182] mb-2 self-start",children:"PR"}),r.imgSrc728&&b.jsxs("div",{className:"hidden sm:block",children:[b.jsx("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:n,children:b.jsx("img",{border:0,width:728,height:90,alt:"",src:r.imgSrc728})}),r.trackingImg728&&b.jsx("img",{border:0,width:1,height:1,src:r.trackingImg728,alt:""})]}),!r.imgSrc728&&r.imgSrc300&&b.jsxs("div",{className:"hidden sm:block",children:[b.jsx("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:n,children:b.jsx("img",{border:0,width:300,height:250,alt:"",src:r.imgSrc300})}),r.trackingImg300&&b.jsx("img",{border:0,width:1,height:1,src:r.trackingImg300,alt:""})]}),r.label&&b.jsx("div",{className:"hidden sm:block mt-2",children:b.jsxs("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:n,className:"text-xs text-[#3D52A0] hover:underline",children:[r.emoji??"📌"," ",r.label,r.description?` — ${r.description}`:""," →"]})}),b.jsxs("div",{className:"block sm:hidden w-full",children:[b.jsxs("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:n,className:"flex items-center gap-3 p-4 bg-[#F8F8F6] rounded-xl border border-[#E5E0D8]/50 group",children:[b.jsx("div",{className:"text-2xl",children:r.emoji??"📌"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("div",{className:"text-sm font-medium text-[#3D52A0] group-hover:underline mb-0.5",children:r.label??"詳細はこちら"}),r.description&&b.jsx("div",{className:"text-xs text-[#717182] leading-relaxed",children:r.description})]}),b.jsx("div",{className:"text-[#3D52A0] text-sm",children:"→"})]}),(r.trackingImg728||r.trackingImg300)&&b.jsx("img",{border:0,width:1,height:1,src:r.trackingImg728??r.trackingImg300,alt:""})]})]}):b.jsxs("div",{className:"bg-[#F8F8F6] rounded-xl border border-[#E5E0D8]/50 p-4",children:[b.jsx("p",{className:"text-xs text-[#717182] mb-2",children:"PR"}),b.jsxs("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:n,className:"flex items-center gap-3 group",children:[b.jsx("div",{className:"text-2xl",children:r.emoji}),b.jsxs("div",{children:[b.jsx("div",{className:"text-sm font-medium text-[#3D52A0] group-hover:underline mb-1",children:r.label}),b.jsx("div",{className:"text-xs text-[#717182] leading-relaxed",children:r.description})]})]}),r.trackingImgText&&b.jsx("img",{border:0,width:1,height:1,src:r.trackingImgText,alt:""})]})}function PH(){const{id:e}=gc(),t=rr(),[r,n]=D.useState("map"),i=p7(e||"");if(!i)return b.jsx("div",{className:"min-h-screen bg-[#F8F8F6] flex items-center justify-center",children:b.jsxs("div",{className:"text-center",children:[b.jsx("h2",{className:"text-2xl mb-4",children:"データが見つかりません"}),b.jsx("button",{onClick:()=>t("/"),className:"text-[#3D52A0] hover:underline",children:"トップページに戻る"})]})});const o=h7(i.data),s=i.data[0],u=i.data[i.data.length-1],f=u.value!==0?s.value/u.value:0,d=[{id:"map",label:"都道府県マップ"},{id:"ranking",label:"都道府県ランキング"},{id:"trend",label:"年次推移グラフ"},{id:"table",label:"全データ表"}],m=typeof window<"u"?window.location.href:`https://www.japan-stats.com/detail/${e}`,h=i.relatedIds?i.relatedIds.map(y=>Xr.find(g=>g.id===y)).filter(Boolean):[];return b.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[b.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-[#3D52A0] hover:gap-3 transition-all mb-8 group",children:[b.jsx(E7,{className:"w-4 h-4"}),b.jsx("span",{className:"group-hover:underline",children:"一覧に戻る"})]}),b.jsxs("div",{className:"mb-10",children:[b.jsx("div",{className:"inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3D52A0]/10 to-[#5B6FB8]/10 text-sm text-[#3D52A0] mb-3",children:i.category}),b.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl mb-3 bg-gradient-to-r from-[#1A1A1A] to-[#3D52A0] bg-clip-text text-transparent",style:{fontFamily:"var(--font-serif)"},children:i.title}),b.jsx("p",{className:"text-base sm:text-lg text-[#717182] mb-2",children:i.description}),b.jsxs("p",{className:"text-sm text-[#717182]",children:["出典: ",i.source,"（",i.year,"年）"]})]}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",children:[{label:"最高値",value:`${s.value.toFixed(2)}${i.unit}`,sub:s.prefecture,color:"#C0392B"},{label:"最低値",value:`${u.value.toFixed(2)}${i.unit}`,sub:u.prefecture,color:"#27AE60"},{label:"全国平均",value:`${o.toFixed(2)}${i.unit}`,sub:"47都道府県平均",color:"#3D52A0"},{label:"格差倍率",value:f>0?`${f.toFixed(2)}倍`:"-",sub:"最高÷最低",color:"#E67E22"}].map(({label:y,value:g,sub:_,color:S})=>b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-5 hover:shadow-md transition-shadow",children:[b.jsx("div",{className:"text-xs text-[#717182] mb-2",children:y}),b.jsx("div",{className:"text-xl sm:text-2xl font-medium",style:{color:S,fontFamily:"monospace"},children:g}),b.jsx("div",{className:"text-xs text-[#717182] mt-2",children:_})]},y))}),b.jsx("div",{className:"mb-8",children:b.jsx(Mv,{statId:e||""})}),b.jsx("div",{className:"mb-8 overflow-x-auto",children:b.jsx("div",{className:"flex gap-2 min-w-max bg-[#F8F8F6] p-2 rounded-xl",children:d.map(y=>b.jsx("button",{onClick:()=>n(y.id),className:`px-4 sm:px-6 py-3 rounded-lg transition-all whitespace-nowrap text-sm ${r===y.id?"bg-white shadow-sm text-[#3D52A0] font-medium":"text-[#717182] hover:text-[#1A1A1A] hover:bg-white/50"}`,children:y.label},y.id))})}),b.jsxs("div",{className:"mb-8",children:[r==="map"&&b.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[b.jsx("div",{className:"lg:col-span-2",children:b.jsx(C7,{data:i.data,unit:i.unit})}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"分析"}),i.analysisLong?b.jsx("div",{className:"space-y-3",children:i.analysisLong.split("\\n\\n").map((y,g)=>b.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:y},g))}):b.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:i.analysis})]}),i.worldData&&i.worldData.length>0&&b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"世界との比較"}),b.jsx("div",{className:"space-y-2",children:i.worldData.map((y,g)=>{const _=i.worldData.map(E=>E.value),S=Math.min(..._),x=Math.max(..._),j=x>S?(y.value-S)/(x-S)*100:50,A=y.country.includes("日本");return b.jsxs("div",{className:`p-2.5 rounded-lg ${A?"bg-[#EEF2FF]":"bg-[#F8F8F6]"}`,children:[b.jsxs("div",{className:"flex justify-between text-xs mb-1.5",children:[b.jsx("span",{className:`font-medium ${A?"text-[#3D52A0]":"text-[#1A1A1A]"}`,children:y.country}),b.jsxs("span",{className:"font-mono text-[#717182]",children:[y.value.toFixed(2),y.unit||i.unit]})]}),b.jsx("div",{className:"h-1.5 bg-white rounded-full overflow-hidden",children:b.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${Math.max(j,5)}%`,backgroundColor:A?"#3D52A0":"#94a3b8"}})})]},g)})}),b.jsx("p",{className:"text-xs text-[#717182] mt-2",children:"出典: OECD統計・各国政府統計"})]}),(!i.worldData||i.worldData.length===0)&&b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsx("h3",{className:"text-base mb-3 text-[#3D52A0] font-bold",children:"全国データ"}),b.jsxs("div",{className:"space-y-2",children:[i.data.slice(0,5).map((y,g)=>b.jsxs("div",{className:`p-2.5 rounded-lg ${g===0?"bg-[#EEF2FF]":"bg-[#F8F8F6]"}`,children:[b.jsxs("div",{className:"flex justify-between text-xs mb-1.5",children:[b.jsxs("span",{className:`font-medium ${g===0?"text-[#3D52A0]":"text-[#1A1A1A]"}`,children:[g===0?"🥇 ":g===1?"🥈 ":g===2?"🥉 ":`${g+1}位 `,y.prefecture]}),b.jsxs("span",{className:"font-mono text-[#717182]",children:[y.value.toFixed(2),i.unit]})]}),b.jsx("div",{className:"h-1.5 bg-white rounded-full overflow-hidden",children:b.jsx("div",{className:"h-full rounded-full",style:{width:`${y.value/i.data[0].value*100}%`,backgroundColor:g===0?"#3D52A0":"#94a3b8"}})})]},y.prefecture)),b.jsx("button",{onClick:()=>n("ranking"),className:"w-full text-xs text-[#3D52A0] hover:underline mt-1",children:"全47都道府県を見る →"})]})]})]})]}),r==="ranking"&&b.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[b.jsx("div",{className:"lg:col-span-2",children:b.jsx(xH,{data:i.data,average:o,unit:i.unit})}),b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"分析"}),b.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:i.analysis})]})]}),r==="trend"&&i.yearlyData&&i.yearlyData.length>0&&b.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[b.jsx("div",{className:"lg:col-span-2",children:b.jsx(wH,{data:i.yearlyData,unit:i.unit,source:i.source})}),b.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[b.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"分析"}),b.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:i.analysis})]})]}),r==="trend"&&(!i.yearlyData||i.yearlyData.length===0)&&b.jsx("div",{className:"bg-white rounded-xl p-8 text-center text-[#717182]",children:"年次推移データはありません"}),r==="table"&&b.jsx(_H,{data:i.data,average:o,unit:i.unit})]}),h.length>0&&b.jsxs("div",{className:"mb-8",children:[b.jsx("h3",{className:"text-sm font-bold text-[#717182] mb-3",children:"関連するデータ"}),b.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:h.map(y=>y&&b.jsxs("button",{onClick:()=>t(`/detail/${y.id}`),className:"bg-white rounded-xl border border-[#E5E0D8]/50 p-4 text-left hover:border-[#3D52A0] hover:shadow-sm transition-all group",children:[b.jsx("div",{className:"text-xs text-[#717182] mb-1",children:y.category}),b.jsx("div",{className:"text-sm font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] leading-tight",children:y.title})]},y.id))})]}),b.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:b.jsx(OA,{id:`data_${e}`,title:`${i.title}｜日本のいろんな統計マップ`,url:m})})]}),b.jsx(Mr,{})]})}function kH(){const e=rr();return b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:[b.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-8 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),b.jsx("h1",{className:"text-3xl font-bold mb-8 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:"プライバシーポリシー"}),b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-8 space-y-8 text-sm text-[#1A1A1A] leading-relaxed",children:[b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"1. 基本方針"}),b.jsx("p",{children:"日本のいろんな統計マップ（以下「当サイト」）は、ユーザーの個人情報保護を重要な責務と考え、個人情報の保護に関する法律（個人情報保護法）をはじめとする関連法令を遵守します。"})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"2. 収集する情報"}),b.jsx("p",{className:"mb-2",children:"当サイトでは、以下の情報を収集する場合があります。"}),b.jsxs("ul",{className:"list-disc list-inside space-y-1 text-[#717182]",children:[b.jsx("li",{children:"お問い合わせフォームからご入力いただいた情報（氏名・メールアドレス・お問い合わせ内容）"}),b.jsx("li",{children:"Googleアナリティクスによるアクセス解析情報（IPアドレス・ブラウザ情報・閲覧ページ等）"}),b.jsx("li",{children:"Googleアドセンスによる広告配信に関する情報"})]})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"3. Cookieの使用"}),b.jsx("p",{className:"mb-2",children:"当サイトでは、Google アナリティクスおよびGoogle アドセンスのためにCookieを使用しています。Cookieは、ブラウザの設定により無効化することができます。ただし、Cookieを無効にした場合、一部のサービスが正しく機能しない場合があります。"}),b.jsxs("p",{children:["Google アドセンスに関するCookieおよびデータ利用については、",b.jsx("a",{href:"https://policies.google.com/technologies/ads",target:"_blank",rel:"noopener noreferrer",className:"text-[#3D52A0] underline",children:"Googleのポリシー"}),"をご確認ください。"]})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"4. Googleアナリティクスについて"}),b.jsx("p",{children:"当サイトは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を使用しています。Googleアナリティクスはデータの収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。"})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"5. 掲載データについて"}),b.jsx("p",{children:"当サイトが掲載するデータは、厚生労働省・総務省・文化庁・文部科学省・農林水産省・内閣府等の政府機関が公表する統計データをもとに作成しています。データの正確性には十分注意していますが、最新情報については各省庁の公式サイトをご確認ください。"})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"6. 免責事項"}),b.jsx("p",{children:"当サイトに掲載されている情報の正確性・完全性について保証するものではありません。当サイトの情報を利用することによって生じた損害について、当サイトは一切の責任を負いません。"})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"7. 著作権"}),b.jsx("p",{children:"当サイトのコンテンツ（文章・グラフ・デザイン等）の著作権は当サイトに帰属します。政府統計データについては各省庁の利用規約に準じます。"})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"8. プライバシーポリシーの変更"}),b.jsx("p",{children:"本ポリシーの内容は、必要に応じて変更することがあります。変更後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。"})]}),b.jsxs("section",{children:[b.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"9. お問い合わせ"}),b.jsxs("p",{children:["個人情報の取り扱いに関するお問い合わせは、",b.jsx("a",{href:"/contact",onClick:t=>{t.preventDefault(),e("/contact")},className:"text-[#3D52A0] underline",children:"お問い合わせフォーム"}),"よりご連絡ください。"]})]}),b.jsx("p",{className:"text-xs text-[#717182] pt-4 border-t border-[#E5E0D8]",children:"制定日：2024年1月1日　最終更新：2026年5月"})]})]}),b.jsx(Mr,{})]})}function TH(){const e=rr();return b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:[b.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-8 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),b.jsx("h1",{className:"text-3xl font-bold mb-4 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:"お問い合わせ"}),b.jsx("p",{className:"text-[#717182] text-sm mb-8",children:"データの誤りのご指摘、掲載希望データのご要望、その他ご意見・ご感想など、お気軽にお問い合わせください。"}),b.jsx("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 overflow-hidden",children:b.jsx("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSdp6WOlO1RHpGkOif1KAnmYz1TE9QyiwpI6T7W6Us-TOUNuIg/viewform?embedded=true",width:"100%",height:"800",frameBorder:"0",marginHeight:0,marginWidth:0,title:"お問い合わせフォーム",style:{display:"block"},children:"読み込んでいます…"})})]}),b.jsx(Mr,{})]})}const Vo=[{slug:"divorce-northland",category:"人口・世帯",title:"なぜ北陸3県は離婚率が低いのか？持ち家率・3世代同居・地域コミュニティの関係",summary:"富山・石川・福井の離婚率は全国最低水準。その背景には高い持ち家率と3世代同居の文化、地域コミュニティの強さがある。データで読み解く北陸の家族観。",date:"2026年5月",readTime:"約5分",tags:["離婚率","北陸","持ち家率","家族"]},{slug:"osaka-welfare",category:"社会保障",title:"大阪の生活保護率はなぜ全国平均の2倍なのか？都市集積と貧困の構造",summary:"大阪府の生活保護受給率33.5‰は全国最高。単身高齢者の集積、日雇い労働の歴史、釜ヶ崎（あいりん地区）の存在など、都市特有の貧困構造を解説。",date:"2026年5月",readTime:"約6分",tags:["生活保護","大阪","貧困","格差"]},{slug:"tokyo-doctor",category:"医療",title:"医師は東京に集中しているのか？意外な真実と地方医療の危機",summary:"医師数トップは実は東京ではなく京都。埼玉・千葉は深刻な医師不足。人口10万人対の医師数で見えてくる、首都圏ベッドタウンの医療格差。",date:"2026年5月",readTime:"約5分",tags:["医師数","医療格差","埼玉","京都"]},{slug:"akita-suicide",category:"健康・医療",title:"秋田県の自殺率が高い本当の理由——孤立・高齢化・冬の暗さ",summary:"秋田県の自殺率は22.6人/10万人で全国最高。高齢化・農村の孤立・日照時間の短さが重なる。一方で「自殺対策先進県」として対策の成果も出ている。",date:"2026年5月",readTime:"約5分",tags:["自殺率","秋田","高齢化","孤立"]},{slug:"okinawa-birth",category:"人口・世帯",title:"なぜ沖縄の出生率は日本一なのか？ゆいまーる文化と若年人口の力",summary:"沖縄県の合計特殊出生率1.70は全国最高。「ゆいまーる」と呼ばれる相互扶助の文化と若い人口構成が、他の都道府県にはない出生率を支えている。",date:"2026年5月",readTime:"約5分",tags:["出生率","沖縄","少子化","文化"]},{slug:"toyama-homeownership",category:"住宅・不動産",title:"富山県の持ち家率が日本一の理由——「嫁入り道具より家」の文化",summary:"富山県の持ち家率76.8%は全国最高。地価の安さ・積雪文化・「親が家を建てる」という慣習が組み合わさって生まれた、全国最高水準の持ち家社会。",date:"2026年5月",readTime:"約5分",tags:["持ち家率","富山","住宅","文化"]},{slug:"hokkaido-agriculture",category:"農業・産業",title:"北海道農業の圧倒的な実力——なぜ2位の5.7倍の農業産出額なのか",summary:"北海道の農業産出額は1兆2480億円で2位鹿児島の約5.7倍。広大な土地・大規模経営・多様な農産物・酪農の圧倒的シェアが日本の食を支えている。",date:"2026年5月",readTime:"約5分",tags:["農業","北海道","食料","産業"]},{slug:"tokyo-income-gap",category:"経済",title:"東京と青森の所得差247万円——でも「豊かさ」は逆転するかもしれない",summary:"県民所得は東京485万円・青森238万円で差は247万円。しかし家賃・物価・通勤時間を考慮すると、実質的な豊かさの差は意外と小さい。",date:"2026年5月",readTime:"約5分",tags:["所得格差","東京","移住","物価"]},{slug:"shiga-longevity",category:"健康・医療",title:"滋賀県男性の平均寿命が全国1位の理由——琵琶湖と健康長寿の秘密",summary:"男性平均寿命82.8歳で全国1位の滋賀県。肥満率の低さ・自殺率の低さ・食文化が長寿を支えている。最低の青森との差3.5年が生まれる背景を探る。",date:"2026年5月",readTime:"約5分",tags:["平均寿命","滋賀","長寿","健康"]},{slug:"vacancy-crisis",category:"住宅・不動産",title:"空き家900万戸時代——2033年に3軒に1軒が空き家になる日本",summary:"全国の空き家は過去最多の約900万戸。2033年には空き家率30%超という予測もある。「負動産」問題と移住活用のチャンス、両面からデータで読む。",date:"2026年5月",readTime:"約5分",tags:["空き家","不動産","移住","人口減少"]},{slug:"埼玉-medical-shortage",category:"医療",title:"埼玉はなぜ医師が少ないのか——首都圏最大の医療格差",summary:"埼玉県の医師数は人口10万人あたり174人で全国最低。700万人超の人口を抱えながら、なぜここまで医師が少ないのか。ベッドタウン問題の本質に迫る。",date:"2026年5月",readTime:"約4分",tags:["医師不足","埼玉","医療格差","首都圏"]},{slug:"minimum-wage-gap",category:"経済",title:"最低賃金の地域格差——東京1072円vs青森853円、月4万円の差",summary:"最低賃金は東京1072円・青森853円で219円の差。月160時間働くと月3.5万円、年間42万円の差になる。同じ日本でなぜこれだけ違うのか。",date:"2026年5月",readTime:"約4分",tags:["最低賃金","格差","経済","労働"]},{slug:"snow-country-life",category:"気候",title:"雪国の暮らしをデータで見る——秋田124日・沖縄0日の差が生む格差",summary:"北海道の年間雪日数は124日で3日に1日は雪が降る。雪国と南国の気候の差は、肥満率・自殺率・消防士数・医療コストに至るまで広く影響している。",date:"2026年5月",readTime:"約4分",tags:["雪日数","気候","東北","北海道"]},{slug:"ramen-regional",category:"食文化",title:"ラーメン消費量ランキングの意外な結果——山形1位・東京は意外と低い理由",summary:"総務省の家計調査でラーメン外食消費が最も多いのは山形県。東京は選択肢が多すぎてラーメンに特化しない。食文化と消費データから見える地域性。",date:"2026年5月",readTime:"約4分",tags:["ラーメン","食文化","山形","家計調査"]},{slug:"baseball-hometown",category:"スポーツ・文化",title:"プロ野球選手を最も輩出する県は和歌山——スポーツ選手輩出率の地域差",summary:"プロ野球選手の輩出率は和歌山4.46人/10万人が全国最高。沖縄・佐賀が続き、東京・山口は最低水準。なぜ特定の県からプロ選手が多く生まれるのか。",date:"2026年5月",readTime:"約4分",tags:["プロ野球","スポーツ","和歌山","沖縄"]},{slug:"tokyo-stats-overview",category:"人口・世帯",title:"東京都の統計まとめ——日本一の都市が抱える光と影",summary:"医師数・大学進学率・外国人比率はトップクラス。しかし出生率1.04は全国最低、通勤時間48分、待機児童1248人。東京の豊かさと課題をデータで読む。",date:"2026年5月",readTime:"約5分",tags:["東京","統計","都市問題","出生率"]},{slug:"okinawa-stats-overview",category:"人口・世帯",title:"沖縄県の統計まとめ——出生率日本一が抱える貧困と独自文化",summary:"出生率1.70は全国最高。しかし離婚率2.10も全国最高で、子どもの貧困率も高い。沖縄の強さと脆弱さをデータで読み解く。",date:"2026年5月",readTime:"約5分",tags:["沖縄","統計","出生率","貧困"]},{slug:"akita-stats-overview",category:"人口・世帯",title:"秋田県の統計まとめ——高齢化・人口減少の最前線で何が起きているか",summary:"高齢化率38.6%・2050年人口減少率-41.6%は全国最悪。自殺率・肥満率も最高水準。しかし「自殺対策先進県」として対策の実績もある。",date:"2026年5月",readTime:"約5分",tags:["秋田","高齢化","人口減少","統計"]},{slug:"fukui-happiness",category:"経済",title:"福井県はなぜ「幸福度ランキング」上位常連なのか——データで読む北陸の底力",summary:"人口が少なく地味に見える福井県だが、持ち家率・共働き率・学力・生活保護率など多くの指標で好成績。なぜ福井は「豊かな県」なのか。",date:"2026年5月",readTime:"約5分",tags:["福井","幸福度","北陸","生活水準"]},{slug:"commute-time-inequality",category:"経済",title:"通勤時間の格差——埼玉58分vs山形22分、年間300時間の差が生む人生の違い",summary:"総務省調査で埼玉県の片道平均通勤時間は58分と全国最長。山形・島根・高知の22分と比べると年間300時間以上の差になる。時間格差が出生率・睡眠・幸福度に与える影響。",date:"2026年5月",readTime:"約5分",tags:["通勤時間","埼玉","格差","ワークライフバランス"]},{slug:"agriculture-future",category:"農業・産業",title:"農業産出額ランキングから見える日本の食の未来——北海道1強と地方農業の可能性",summary:"北海道1兆2480億円は2位鹿児島の5.7倍。しかし農業従事者の高齢化・後継者不足は深刻だ。都道府県別データから日本農業の現在地と未来を読む。",date:"2026年5月",readTime:"約5分",tags:["農業","北海道","食料安全保障","産業"]},{slug:"young-unmarried-crisis",category:"人口・世帯",title:"30代男性の未婚率51.8%——データが示す「結婚しない日本」の実態",summary:"30代男性の未婚率は全国平均51.8%、東京では52.8%。1990年の32.6%から急増した背景には何があるのか。年代・地域・男女別データで読む未婚化の構造。",date:"2026年5月",readTime:"約5分",tags:["未婚率","少子化","婚活","男女"]},{slug:"foreign-resident-change",category:"人口・世帯",title:"外国人比率4.2%の東京と0.3%の秋田——多文化社会の地域差とこれから",summary:"東京の外国人比率4.2%は秋田0.3%の14倍。製造業・都市圏で高く地方で低い。コロナ後に回復した外国人人口の変化と、多文化共生の課題を読む。",date:"2026年5月",readTime:"約5分",tags:["外国人","多文化","移民","人口"]},{slug:"welfare-rate-regional",category:"社会保障",title:"生活保護率10倍格差の真実——大阪33.5‰と富山3.2‰は何が違うのか",summary:"都道府県別生活保護率は最高の大阪33.5‰と最低の富山3.2‰で10倍以上の差。単純な「怠け者が多い」論は誤りだ。産業史・家族構造・制度アクセスの差を読む。",date:"2026年5月",readTime:"約5分",tags:["生活保護","格差","大阪","富山"]},{slug:"hotspring-tourism",category:"観光・交流",title:"温泉地数ランキングから見える日本の観光資源——長野94カ所・大分の別格な存在",summary:"環境省データによると宿泊施設のある温泉地は長野県94カ所が全国最高。しかし源泉数では大分県が別格だ。温泉と地域経済の関係を読む。",date:"2026年5月",readTime:"約5分",tags:["温泉","観光","長野","大分"]},{slug:"fiscal-power-gap",category:"経済",title:"財政力指数が示す「強い自治体・弱い自治体」——東京1.064と秋田0.258の差",summary:"財政力指数は1以上が財政的に自立できる自治体を示す。東京都1.064は唯一の1超えで、秋田・島根・高知は0.26〜0.27と地方交付税なしでは成り立たない。",date:"2026年5月",readTime:"約5分",tags:["財政力","地方財政","格差","行政"]},{slug:"care-worker-shortage",category:"福祉・介護",title:"介護職員不足は「地方の問題」ではない——人口比で見ると都市部が深刻",summary:"介護職員数を人口比で見ると、東京都が最低水準。高齢者が増えるのに介護職員が足りない都市部の危機と、過疎地での担い手確保の両面から課題を読む。",date:"2026年5月",readTime:"約5分",tags:["介護","人手不足","高齢化","福祉"]},{slug:"alcohol-health-gap",category:"健康・医療",title:"飲酒率と自殺率の相関——東北・北海道でなぜ両方高いのか",summary:"習慣的飲酒率（週3日以上）は高知44.8%・秋田44.2%が全国最高。自殺率が高い地域と重なる傾向がある。寒冷地文化・孤立・精神的健康の三角関係を読む。",date:"2026年5月",readTime:"約5分",tags:["飲酒率","自殺","健康","東北"]},{slug:"internet-rate-gap",category:"情報通信",title:"インターネット利用率の地域格差——東京94%vs秋田77%が示すデジタル分断",summary:"総務省調査でインターネット利用率は東京94.2%・神奈川92.4%に対し秋田76.8%・高知77.8%と差がある。デジタル格差は教育・就労・行政サービスの格差に直結する。",date:"2026年5月",readTime:"約5分",tags:["インターネット","デジタル格差","情報通信","地域"]},{slug:"population-2040-forecast",category:"人口・世帯",title:"2040年の日本地図——人口が増える県・激減する県、その分かれ目はどこか",summary:"国立社会保障・人口問題研究所の推計によると、2040年に人口が増えるのは東京のみ（+3.3%）。秋田-28.5%・青森-26.2%・高知-23.7%が深刻。分かれ目の要因を読む。",date:"2026年5月",readTime:"約5分",tags:["人口予測","2040年","地方消滅","少子化"]},{slug:"sleep-time-productivity",category:"生活・インフラ",title:"平均睡眠時間と都市部の生産性ジレンマ——東京462分vs秋田518分が示すもの",summary:"総務省「社会生活基本調査」によると東京都民の平均睡眠時間は462分（約7時間42分）と全国最低。通勤時間の長さが睡眠を奪い、健康・生産性に影響する。",date:"2026年5月",readTime:"約5分",tags:["睡眠時間","健康","東京","生産性"]},{slug:"gyoza-ramen-culture",category:"食文化",title:"餃子消費量ランキングの意外な真実——宮崎94個が浜松・宇都宮を上回る理由",summary:"「餃子の街」で有名な浜松・宇都宮だが、人口比では宮崎県が94.6個/人と断トツ。なぜ宮崎で餃子消費が多いのか。家計調査が教える食文化の地域差。",date:"2026年5月",readTime:"約5分",tags:["餃子","食文化","宮崎","浜松"]},{slug:"crime-rate-decline",category:"社会問題",title:"刑法犯が20年で4分の1に——日本の治安改善の実態と残る地域差",summary:"警察庁データによると刑法犯認知件数は2003年の約285万件から2022年の約60万件と4分の1以下に激減。大阪528件vs秋田248件の地域差はなぜ生まれるのか。",date:"2026年5月",readTime:"約5分",tags:["犯罪率","治安","大阪","社会問題"]},{slug:"nursing-care-insurance",category:"社会保障",title:"介護保険料は老後のコスト——大阪7200円vs富山5600円、月1600円の差が生む格差",summary:"65歳以上が支払う介護保険料（第1号被保険者）は大阪府7200円・東京都6800円に対し富山県5600円と差がある。老後の生活コストを左右する見えない格差。",date:"2026年5月",readTime:"約5分",tags:["介護保険","老後","コスト","格差"]},{slug:"blood-donation-civic",category:"社会問題",title:"献血率が高い県・低い県——地域コミュニティへの参加意識がデータに出る",summary:"日本赤十字社データによると献血率は愛知・沖縄・静岡が上位で東北が低い傾向。献血は強制ではないため「自発的な社会参加意識」の指標として興味深い。",date:"2026年5月",readTime:"約5分",tags:["献血","社会参加","コミュニティ","健康"]},{slug:"pachinko-decline",category:"生活・インフラ",title:"パチンコ店が10年で4割減——警察庁データが示す業界縮小と地域差",summary:"警察庁データによるとパチンコ店数は2010年から2022年にかけて約4割減少。人口比では東北・北陸が多く沖縄・東京が少い。規制強化・スマホゲームとの競争が業界を直撃。",date:"2026年5月",readTime:"約5分",tags:["パチンコ","産業","規制","地域"]},{slug:"reading-time-education",category:"教育・文化",title:"電車で本を読む東京、ゆっくり食べる秋田——生活時間から見える地域の個性",summary:"読書時間は東京28分・秋田14分で東京が最長。食事時間は秋田102分・東京84分で秋田が最長。生活時間のデータが語る都市と地方の「時間の使い方」の違い。",date:"2026年5月",readTime:"約5分",tags:["読書時間","食事時間","生活習慣","地域"]},{slug:"j-league-regional",category:"スポーツ・文化",title:"Jリーガー輩出率で見る「サッカー文化の地域差」——大分・熊本・静岡が上位の理由",summary:"J1〜J3合計の選手輩出率は大分5.70人・熊本5.53人・静岡4.87人が上位。「サッカー王国静岡」は健在か。高知0人という衝撃の事実も。",date:"2026年5月",readTime:"約5分",tags:["Jリーグ","サッカー","静岡","スポーツ"]},{slug:"sumo-kagoshima",category:"スポーツ・文化",title:"鹿児島から力士が多く生まれる理由——奄美群島の相撲文化と輩出率の真実",summary:"力士輩出率は鹿児島1.47人が全国最高。特に奄美群島だけで計算すると10万人あたり11.5人と全国平均の約24倍。なぜ奄美から力士が多く生まれるのか。",date:"2026年5月",readTime:"約5分",tags:["相撲","鹿児島","奄美","スポーツ文化"]},{slug:"snow-days-vs-sunny",category:"気候",title:"年間雪日数124日の北海道と0日の沖縄——気候が人口・経済・健康に与える影響",summary:"北海道124日・青森119日の雪日数と沖縄0日・宮崎0日の差。気候の違いは肥満率・自殺率・消防士数・医療費・農業まで幅広く影響する。",date:"2026年5月",readTime:"約5分",tags:["雪日数","気候","北海道","沖縄"]},{slug:"hot-summer-inland",category:"気候",title:"なぜ群馬・埼玉は猛暑なのか——年間32日以上の真夏日と内陸盆地の熱",summary:"最高気温35℃以上の「猛暑日」が最も多いのは群馬県32.4日。埼玉28.4日・茨城24.8日と内陸の関東が上位。沖縄は意外にも4.2日と少ない理由も。",date:"2026年5月",readTime:"約5分",tags:["猛暑","群馬","気候","埼玉"]},{slug:"library-education",category:"教育・文化",title:"図書館数と教育格差——島根・高知で多く東京で少ない、人口比で見える真実",summary:"人口10万人あたりの図書館数は島根4.4館・高知4.2館が全国最高で東京2.2館が最低。図書館は「知の格差」を埋めるインフラとして機能しているか。",date:"2026年5月",readTime:"約5分",tags:["図書館","教育","島根","文化"]},{slug:"religion-culture-map",category:"文化・宗教",title:"宗教法人数が人口比で日本一の島根——神道・仏教文化と地域社会の関係",summary:"人口10万人あたりの宗教法人数は島根555法人が全国最高で神奈川85法人の約6倍。出雲大社を擁する島根と、宗教法人が密集する地域の文化的背景を読む。",date:"2026年5月",readTime:"約5分",tags:["宗教","文化","島根","神道"]},{slug:"vacation-home-vacant",category:"住宅・不動産",title:"山梨の空き家21.3%は「別荘地の放置」——空き家問題の二つの顔",summary:"山梨県の空き家率21.3%は全国2位だが、その中身は「別荘地の放置」と「過疎化による空き家」が混在する。空き家問題の種類によって対策は全く異なる。",date:"2026年5月",readTime:"約5分",tags:["空き家","山梨","別荘","地方移住"]},{slug:"hospital-count-gap",category:"医療",title:"人口10万人あたり病院数9.3院の高知と3.8院の埼玉——なぜこれほど違うのか",summary:"厚労省データによると病院数（人口10万人対）は高知9.3院・佐賀9.3院が最多で埼玉3.8院が最少。医師数と病院数の分布から見えてくる医療格差の構造。",date:"2026年5月",readTime:"約5分",tags:["病院数","医療格差","高知","埼玉"]},{slug:"rent-price-map",category:"住宅・不動産",title:"1K家賃98,000円の東京と30,000円の秋田——住居費格差が人生の選択を変える",summary:"国土交通省データによると1K平均家賃は東京9.8万円・神奈川8.4万円に対し秋田3.0万円・岩手3.2万円。年間差は80万円以上。家賃格差が出生率・移住・老後に与える影響。",date:"2026年5月",readTime:"約5分",tags:["家賃","住居費","格差","移住"]},{slug:"travel-consumption-economy",category:"観光・交流",title:"旅行消費額から見える観光経済の地域差——京都・沖縄・東京が牽引する構造",summary:"観光庁データによると1人あたり旅行消費額は京都・沖縄・東京が148千円と全国最高。秋田・岩手58〜64千円と約2.5倍の差。観光業が地域経済に与える影響。",date:"2026年5月",readTime:"約5分",tags:["旅行消費","観光","経済","地域"]},{slug:"single-parent-poverty",category:"社会問題",title:"ひとり親世帯と統計が示す「不可視の貧困」——離婚率・生活保護率・待機児童の連鎖",summary:"離婚率・ひとり親世帯率・子どもの貧困率・生活保護率には強い相関がある。沖縄や大都市圏で顕著に表れるこの連鎖構造をデータで読む。",date:"2026年5月",readTime:"約5分",tags:["ひとり親","貧困","離婚","社会問題"]},{slug:"population-density-life",category:"人口・世帯",title:"人口密度が暮らしを変える——1km²あたり6000人の東京と70人の高知の差",summary:"東京都の人口密度は約6000人/km²、高知県は約70人/km²と約85倍の差がある。密度の差はコンビニ数・通勤時間・医師数・家賃・孤独死リスクまで広く影響する。",date:"2026年5月",readTime:"約5分",tags:["人口密度","都市","地方","生活"]},{slug:"working-age-future",category:"人口・世帯",title:"生産年齢人口比率が示す「稼ぐ力」の地域差——東京65.4%と秋田52.8%の構造",summary:"15〜64歳の生産年齢人口比率は東京65.4%・沖縄63.4%が高く、秋田52.8%・高知57.8%が低い。この差が財政力・経済活力・介護負担に与える影響を読む。",date:"2026年5月",readTime:"約5分",tags:["生産年齢人口","高齢化","経済","財政"]},{slug:"saitama-commute-hell",category:"経済",title:"通勤時間58分——埼玉県民は年間480時間を電車で消耗している",summary:"埼玉県の平均通勤時間は片道58分で全国1位。年間250日換算で約480時間。山形22分との差が生む「見えない格差」とは何か。",date:"2026年6月",readTime:"約4分",tags:["通勤時間","埼玉","格差","ワークライフバランス"]},{slug:"osaka-crime-reality",category:"安全・社会",title:"大阪の犯罪件数は全国1位——でも「危険な街」は本当か？",summary:"大阪府の刑法犯認知件数は528件/10万人で全国最高。しかし東京は568件で実は上回る。認知件数の「カラクリ」と全国的な犯罪減少の実態を読む。",date:"2026年6月",readTime:"約4分",tags:["犯罪率","大阪","東京","安全"]},{slug:"tokyo-university-gap",category:"教育・子育て",title:"東京72%、秋田34%——大学進学率の格差が生む「人材の一方通行」",summary:"東京都の大学進学率72.4%に対し秋田県は34%。この38ポイント差が地方の人口流出と経済格差を構造的に生み出している。",date:"2026年6月",readTime:"約4分",tags:["大学進学率","教育格差","人口流出","地方"]},{slug:"fukui-welfare-lowest",category:"社会福祉",title:"福井の生活保護率は大阪の10分の1——「助けを求めない県」の光と影",summary:"福井県の生活保護率3.2‰は全国最低で大阪33.5‰の10分の1。北陸の家族文化が背景にあるが、制度を使わない文化の光と影を読む。",date:"2026年6月",readTime:"約4分",tags:["生活保護","福井","北陸","社会保障"]},{slug:"aichi-income-secret",category:"経済",title:"愛知の給与は大阪より57万円高い——トヨタが作った「ものづくり経済圏」の実力",summary:"愛知県の1人あたり県民所得は352万円で全国2位。大阪295万円との差57万円の背景にあるトヨタ経済圏の構造を読む。",date:"2026年6月",readTime:"約4分",tags:["所得","愛知","製造業","トヨタ"]},{slug:"okinawa-divorce-paradox",category:"人口・世帯",title:"出生率1位なのに離婚率も1位——沖縄県が示す「家族の多様性」",summary:"沖縄は出生率1.70で全国最高、離婚率2.10も全国最高。この一見矛盾する数字が示す、本土とは異なる沖縄の家族観とコミュニティの在り方。",date:"2026年6月",readTime:"約4分",tags:["沖縄","出生率","離婚率","家族"]},{slug:"tokyo-birth-rate-lowest",category:"人口・世帯",title:"東京の出生率1.04は全国最低——豊かなのになぜ子どもが生まれないのか",summary:"1人あたり所得全国1位の東京都が、出生率では全国最低の1.04。この逆説が示す「豊かさと少子化」の関係をデータで読み解く。",date:"2026年6月",readTime:"約4分",tags:["出生率","東京","少子化","豊かさ"]},{slug:"kyoto-doctor-paradox",category:"健康・医療",title:"医師数全国1位は東京ではなく京都——大学病院が地図を塗り替える",summary:"人口10万人対の医師数は京都338人が全国1位。埼玉174人は全国最低。大学病院の立地が医師分布を決める構造と、首都圏ベッドタウンの深刻な医療格差。",date:"2026年6月",readTime:"約4分",tags:["医師数","京都","医療格差","埼玉"]},{slug:"vacancy-opportunity",category:"住宅・不動産",title:"空き家率21%の山梨県は「チャンス」か「リスク」か——移住者が知るべき現実",summary:"山梨・秋田・和歌山で空き家率が20%超。安く住める「チャンス」の側面と、インフラ維持コスト・コミュニティ崩壊という「リスク」の側面を両方読む。",date:"2026年6月",readTime:"約4分",tags:["空き家","移住","山梨","不動産"]},{slug:"water-price-gap",category:"生活・インフラ",title:"水道料金は高知が最高、北海道が最低——月額1000円超の差が生まれる理由",summary:"高知県の水道料金は月約328円で全国最高、最低は北海道。山間部・過疎地域で高く、人口減少による水道事業の経営悪化が料金上昇を招いている実態。",date:"2026年6月",readTime:"約4分",tags:["水道料金","インフラ","格差","人口減少"]},{slug:"obesity-snow-country",category:"健康・医療",title:"肥満率1位は秋田県——雪国と肥満の切っても切れない関係",summary:"BMI25以上の肥満率は秋田県38.4%で全国最高。東北・北海道が上位を占める背景には冬の運動不足と食文化がある。都市部との差が示す「気候と健康」の関係。",date:"2026年6月",readTime:"約4分",tags:["肥満率","秋田","東北","健康"]},{slug:"religion-shimane",category:"文化・宗教",title:"宗教法人が最も多いのは島根県——「神の国」をデータで読む",summary:"人口10万人対の宗教法人数は島根555・鳥取485で全国トップ。出雲大社を筆頭とする古くからの神道文化が数字に反映されている。神奈川・埼玉は最低水準。",date:"2026年6月",readTime:"約4分",tags:["宗教","島根","神道","文化"]},{slug:"minimum-wage-real",category:"経済",title:"最低賃金の格差は年42万円——東京1072円vs青森853円の「同じ仕事、違う報酬」",summary:"最低賃金は東京1072円・青森853円で219円差。月160時間・年間で約42万円の格差になる。同じ仕事をしても都道府県で報酬が変わる現実をデータで見る。",date:"2026年6月",readTime:"約4分",tags:["最低賃金","格差","労働","経済"]},{slug:"crime-rate-decline-truth",category:"安全・社会",title:"日本の犯罪件数は20年で4分の1に——「体感治安」と統計の乖離",summary:"全国の刑法犯認知件数は2003年の約285万件から2022年には約70万件と4分の1に激減。しかし「街が危険になった」という体感は逆の傾向がある。なぜか。",date:"2026年6月",readTime:"約4分",tags:["犯罪率","治安","統計","体感"]},{slug:"nd40ea2bc5f14",category:"健康・食文化",title:"ラーメンをよく食べる県ほど、太っている？——消費量と肥満率を重ねたら見えた「食の地域差」",summary:"ラーメンをよく食べる県ほど、太っている？——消費量と肥満率を重ねたら見えた「食のについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["ラーメン","肥満率","食文化","地域差"]},{slug:"n3f73fc4b1acf",category:"社会問題",title:"生活保護が少ない県ほど、献血する人が多い——「助け合い文化」の地域差がデータに出た",summary:"生活保護が少ない県ほど、献血する人が多い——「助け合い文化」の地域差がデータに出についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["生活保護","献血","助け合い","地域差"]},{slug:"n1204afb95776",category:"教育・文化",title:"本をよく読む県ほど、大学に行く子が多い——でも一番読んでいるのは「通勤電車の東京」だった",summary:"本をよく読む県ほど、大学に行く子が多い——でも一番読んでいるのは「通勤電車の東京についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["読書","大学進学","東京","教育"]},{slug:"n3eaef144e9a7",category:"農業・気候",title:"一番暑い県が、農業で稼げていない——猛暑日ランキングと農業産出額の意外な関係",summary:"一番暑い県が、農業で稼げていない——猛暑日ランキングと農業産出額の意外な関係についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["猛暑","農業","気候","経済"]},{slug:"n8e5bcf6f8f01",category:"経済",title:"パチンコが多い県ほど、給料が低い——娯楽の選択肢と経済水準の切っても切れない関係",summary:"パチンコが多い県ほど、給料が低い——娯楽の選択肢と経済水準の切っても切れない関係についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["パチンコ","給与","格差","娯楽"]},{slug:"n916ea7613287",category:"経済",title:"転職で年収50万アップより、引っ越しで年収100万アップの方が現実的な県がある?",summary:"転職で年収50万アップより、引っ越しで年収100万アップの方が現実的な県がある?についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["転職","移住","年収","地域差"]},{slug:"nfe5252605e1a",category:"子育て・女性",title:"働きたいのに働けない、は県のせいかもしれない——保育所の数で、ママのキャリアが決まっている現実",summary:"働きたいのに働けない、は県のせいかもしれない——保育所の数で、ママのキャリアが決についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["保育所","女性就労","キャリア","待機児童"]},{slug:"n173f2a5a68b1",category:"経済",title:"地元に帰ったら年収が下がった——でも家賃と物価を引いたら、実は東京より豊かだった話",summary:"地元に帰ったら年収が下がった——でも家賃と物価を引いたら、実は東京より豊かだったについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["移住","年収","物価","東京"]},{slug:"nd03173ff7e9c",category:"人口・世帯",title:"一人で老いていくなら、東京より住みやすい県がある——独身のままでいることを決めた人へ",summary:"一人で老いていくなら、東京より住みやすい県がある——独身のままでいることを決めたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["独身","老後","移住","孤独死"]},{slug:"n943b413ed88b",category:"子育て・女性",title:"シングルマザーが住む県で、子どもの未来が変わる——離婚・待機児童・生活保護を重ねてわかること",summary:"シングルマザーが住む県で、子どもの未来が変わる——離婚・待機児童・生活保護を重ねについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["シングルマザー","待機児童","生活保護","格差"]},{slug:"n79651ac428e5",category:"経済",title:"時給853円で生きるということ——最低賃金で働く人が、住む県を間違えると詰む話",summary:"時給853円で生きるということ——最低賃金で働く人が、住む県を間違えると詰む話についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["最低賃金","貧困","地域差","雇用"]},{slug:"nda3300103606",category:"福祉・介護",title:"介護で仕事を辞めようとしているあなたへ——辞める前に、住む県を変えることを考えてほしい",summary:"介護で仕事を辞めようとしているあなたへ——辞める前に、住む県を変えることを考えてについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["介護離職","移住","介護職員","地域差"]},{slug:"n7041eec998a2",category:"教育・子育て",title:"秋田で生まれた子どもと東京で生まれた子どもは、スタートラインが38ポイント違う",summary:"秋田で生まれた子どもと東京で生まれた子どもは、スタートラインが38ポイント違うについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["教育格差","秋田","東京","大学進学"]},{slug:"nda1fc287b94c",category:"経済",title:"年金だけで生きていける県、生きていけない県——老後破産しないために、今から知っておきたいこと",summary:"年金だけで生きていける県、生きていけない県——老後破産しないために、今から知ってについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["年金","老後","物価","介護保険"]},{slug:"nbbf44c58cefd",category:"経済",title:"県を変えただけで手取りが増えた、という話を数字で確かめてみた",summary:"県を変えただけで手取りが増えた、という話を数字で確かめてみたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["移住","手取り","物価","最低賃金"]},{slug:"ne2101b6d0533",category:"経済",title:"老後の資金計算してたんだけど、住む場所次第で全然違うことに気づいた",summary:"老後の資金計算してたんだけど、住む場所次第で全然違うことに気づいたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["老後資金","移住","物価","介護"]},{slug:"n2189efae9752",category:"福祉・介護",title:"介護で限界になる前に知りたかったことが、データにあった",summary:"介護で限界になる前に知りたかったことが、データにあったについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["介護","データ","移住","医療"]},{slug:"naf1b196f8cf0",category:"教育・子育て",title:"子どもの進学率、県によってこんなに違うの知ってた？環境って残酷だなと思った話",summary:"子どもの進学率、県によってこんなに違うの知ってた？環境って残酷だなと思った話についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["大学進学","格差","環境","教育"]},{slug:"n763c9bf8b4f6",category:"人口・世帯",title:"地元好きに見てほしい、2050年の人口データを見てから少し考えが変わった",summary:"地元好きに見てほしい、2050年の人口データを見てから少し考えが変わったについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["人口減少","2050年","地方","移住"]},{slug:"n7346fd97d5ab",category:"経済",title:"沖縄で働く人の2人に1人が非正規で、個人破産も全国最多——この2つが重なる県で生きることの話",summary:"沖縄で働く人の2人に1人が非正規で、個人破産も全国最多——この2つが重なる県で生についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["沖縄","非正規","個人破産","格差"]},{slug:"n4b2ef9bf89cf",category:"人口・世帯",title:"男性が育休を取らない県ほど、離婚率が高い——データが示す「家事育児をしない夫」の代償",summary:"男性が育休を取らない県ほど、離婚率が高い——データが示す「家事育児をしない夫」のについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["育休","離婚率","家事","地域差"]},{slug:"n0c4c7f1e0869",category:"経済",title:"仕事は選り取り見取りなのに、給料が低い県がある——求人倍率と給与を重ねたら見えた構造",summary:"仕事は選り取り見取りなのに、給料が低い県がある——求人倍率と給与を重ねたら見えたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["求人倍率","給与","雇用","地域差"]},{slug:"n7b60e82024e5",category:"経済",title:"都市部の税金が地方に流れていく——ふるさと納税の「本当の勝者」は誰か",summary:"都市部の税金が地方に流れていく——ふるさと納税の「本当の勝者」は誰かについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["ふるさと納税","地方創生","税金","格差"]},{slug:"ne4ac214e17cc",category:"住宅・不動産",title:"東京の地価が7%上がっているのに、給料は追いついていない——家が買えなくなっていく話",summary:"東京の地価が7%上がっているのに、給料は追いついていない——家が買えなくなっていについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["地価","給与","東京","住宅"]},{slug:"nd5aaa0942552",category:"人口・世帯",title:"30代女性の未婚率、東京だけ44.4%——稼げる場所ほど結婚が遠くなる構造",summary:"30代女性の未婚率、東京だけ44.4%——稼げる場所ほど結婚が遠くなる構造についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["未婚率","東京","女性","結婚"]},{slug:"n217983341ee2",category:"人口・世帯",title:"20代で結婚したいなら、住む県を選んだ方がいいかもしれない",summary:"20代で結婚したいなら、住む県を選んだ方がいいかもしれないについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["結婚","未婚率","移住","出会い"]},{slug:"nc565a2976bd8",category:"住宅・不動産",title:"東京の地価が上がり続けているとき、地方の空き家は100万円で買える——不動産格差のリアル",summary:"東京の地価が上がり続けているとき、地方の空き家は100万円で買える——不動産格差についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["地価","空き家","東京","移住"]},{slug:"n5c495847d137",category:"医療・福祉",title:"看護師・介護士として働くなら、どの県を選ぶべきか——給与・忙しさ・住みやすさをデータで比べた",summary:"看護師・介護士として働くなら、どの県を選ぶべきか——給与・忙しさ・住みやすさをデについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["看護師","介護士","移住","給与"]},{slug:"n148b57b114c1",category:"医療",title:"歯医者に行きやすい県、行きにくい県——歯科医師数の格差が意外と生活に影響する話",summary:"歯医者に行きやすい県、行きにくい県——歯科医師数の格差が意外と生活に影響する話についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["歯科医師","医療格差","地域差","健康"]},{slug:"nad419a5b3716",category:"人口・世帯",title:"40代で独身の男性が最も多い県は東京——その20年後をデータで想像してみた",summary:"40代で独身の男性が最も多い県は東京——その20年後をデータで想像してみたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["未婚","東京","孤独死","高齢化"]},{slug:"n83d02da6312d",category:"経済",title:"沖縄で働く人の4割が非正規で、40代になっても正社員になれていない",summary:"沖縄で働く人の4割が非正規で、40代になっても正社員になれていないについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["沖縄","非正規","雇用","格差"]},{slug:"ncac04aa6fca0",category:"生活・インフラ",title:"水道代が払えなくて給水停止になる世帯が、高知で一番多い理由",summary:"水道代が払えなくて給水停止になる世帯が、高知で一番多い理由についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["水道料金","高知","貧困","生活"]},{slug:"nda70797e21ed",category:"経済",title:"フリーランスになる前に知っておきたい、住む県で健康保険料が年8万円変わるというデータ",summary:"フリーランスになる前に知っておきたい、住む県で健康保険料が年8万円変わるというデについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["健康保険","フリーランス","地域差","国保"]}],CH={"人口・世帯":"#3D52A0",社会保障:"#e67e22",医療:"#27ae60","健康・医療":"#16a34a","住宅・不動産":"#8b5cf6",経済:"#0891b2","農業・産業":"#65a30d",気候:"#0284c7",食文化:"#ca8a04","スポーツ・文化":"#e67e22"};function NH(){const e=rr(),[t,r]=D.useState("すべて"),[n,i]=D.useState(""),o=["すべて",...Array.from(new Set(Vo.map(u=>u.category)))],s=Vo.filter(u=>{const f=t==="すべて"||u.category===t,d=n===""||u.tags.some(m=>m.includes(n));return f&&d});return b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[b.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),b.jsxs("div",{className:"mb-8 sm:mb-10",children:[b.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:"コラム"}),b.jsx("p",{className:"text-sm text-[#717182]",children:"統計データを深掘りして読み解くコラム記事"})]}),b.jsxs("div",{className:"bg-[#EEF2FF] border border-[#3D52A0]/20 rounded-xl p-4 mb-6 text-sm text-[#3D52A0]",children:[b.jsx("span",{className:"font-medium",children:"📎 リンクフリー："}),"当サイトの記事・データは出典（日本のいろんな統計マップ）を明記いただければ自由にご利用いただけます。"]}),b.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:o.map(u=>b.jsxs("button",{onClick:()=>r(u),className:`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${t===u?"bg-[#3D52A0] text-white border-[#3D52A0]":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:[u," ",u==="すべて"?`(${Vo.length})`:`(${Vo.filter(f=>f.category===u).length})`]},u))}),b.jsx("div",{className:"mb-6",children:b.jsx("input",{type:"text",value:n,onChange:u=>i(u.target.value),placeholder:"タグで絞り込む（例：移住、格差）",className:"w-full sm:w-64 px-4 py-2 border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#3D52A0]"})}),b.jsx("div",{className:"space-y-4",children:s.map(u=>{const f=CH[u.category]??"#3D52A0";return b.jsxs("div",{onClick:()=>e(`/column/${u.slug}`),className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 sm:p-6 cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all group",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[b.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full font-medium",style:{background:`${f}15`,color:f},children:u.category}),b.jsx("span",{className:"text-xs text-[#717182]",children:u.date}),b.jsx("span",{className:"text-xs text-[#717182]",children:u.readTime})]}),b.jsx("h2",{className:"text-base sm:text-lg font-bold mb-2 text-[#1A1A1A] leading-tight group-hover:text-[#3D52A0] transition-colors",style:{fontFamily:"var(--font-serif)"},children:u.title}),b.jsx("p",{className:"text-xs sm:text-sm text-[#717182] leading-relaxed mb-3",children:u.summary}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("div",{className:"flex gap-1.5 flex-wrap",children:u.tags.map(d=>b.jsxs("span",{className:"text-xs px-2 py-0.5 bg-[#F0EDE8] text-[#717182] rounded-full",children:["#",d]},d))}),b.jsx("span",{className:"text-xs text-[#3D52A0] font-medium opacity-0 group-hover:opacity-100 transition-opacity",children:"読む →"})]})]},u.slug)})})]}),b.jsx(Mr,{})]})}const DH={"divorce-northland":`
富山・石川・福井の「北陸3県」は、離婚率が全国最低水準にある。厚生労働省「人口動態統計」（2022年）によれば、富山県の離婚率は人口千対1.06件で全国最低、石川・福井も1.12〜1.13件と低い。全国平均（1.47件）と比べると約30%低い水準だ。

**なぜ北陸は離婚率が低いのか**

第一の要因として挙げられるのが「持ち家率の高さ」だ。総務省の住宅・土地統計調査によれば、富山県の持ち家率は76.8%と全国最高。持ち家は夫婦の経済的な紐帯として機能し、離婚を思いとどまらせる要因になるとも言われる。

第二の要因が「3世代同居率の高さ」だ。北陸地方は全国的に見ても3世代同居の割合が高く、祖父母が育児を担う環境が整っている。これにより核家族で抱えがちな育児ストレスが分散され、夫婦間の摩擦が起きにくい土壌がある。

第三の要因として「地域コミュニティの強さ」がある。北陸では「結（ゆい）」と呼ばれる相互扶助の慣習が今も根付いており、近所付き合いや地域の絆が強い。

**「低い離婚率」は幸福の証か**

ただし、離婚率が低いことが必ずしも「幸せな結婚生活」を意味するわけではない。離婚できない経済的・社会的背景がある場合もある。重要なのは、数字の背景にある生活の実態を読み解くことだろう。

北陸3県の事例は、住環境・家族観・地域コミュニティが離婚率に与える影響を示す興味深いケーススタディだ。
  `,"osaka-welfare":`
大阪府の生活保護受給率は人口千対33.5人（2022年度）で、全国平均16.3人の約2倍にあたる。これはなぜなのか。

**歴史的背景——釜ヶ崎と日雇い労働**

大阪・西成区の釜ヶ崎（あいりん地区）は、戦後の高度経済成長期に日雇い労働者が集まった地区として知られる。高度成長が終わり、バブル崩壊後の不況が追い打ちをかけると、仕事を失った労働者が滞留。高齢化した元労働者たちが生活保護の受給者となっているケースが多い。

**単身高齢者の集積**

大都市は単身者が集まりやすい。特に大阪は住居費が東京に比べて低いため、所得の低い単身高齢者が生活できる環境にある。単身高齢者は生活保護を必要とするリスクが相対的に高く、これが受給率を押し上げる要因となっている。

**制度へのアクセスという視点**

一方で、生活保護の受給率が高いことは「必要な人が制度を利用できている」という見方もできる。北陸など受給率が低い地域では、制度へのアクセスが難しかったり、「恥」という感覚から申請をためらうケースもあると指摘されている。どちらが良いとも言い切れない複雑さがある。

**富山はなぜ低いのか**

全国最低の富山県（3.2人）は、3世代同居率の高さ・製造業の安定した雇用・持ち家率の高さ・強い家族ネットワークが複合的に機能している。「困ったら家族が助ける」という文化が、制度に頼る前のセーフティネットとして機能しているのだ。
  `,"tokyo-doctor":`
「医師は東京に集中している」というイメージは、実は正確ではない。厚生労働省の「医師・歯科医師・薬剤師統計」（2022年）によると、人口10万人あたりの医師数が最も多いのは京都府（338人）で、東京都（334人）は2位だ。

**大学病院が医師分布を決める**

医師数が多い都道府県の上位には、徳島（325人）・高知（311人）・岡山（317人）・福岡（305人）など、大学病院を擁する地方都市が並ぶ。医師は大学病院に勤務しながら周辺の病院に派遣される仕組みがあるため、医科大学が集積する地域では医師数が多くなる。

**埼玉174人という現実**

問題は埼玉県だ。人口10万人あたり174人と全国最少で、全国平均（269人）の約65%しかいない。千葉（202人）・神奈川（222人）も低い。これらは東京のベッドタウンとして急速に人口が増えた地域だが、医療インフラの整備が追いついていない。

700万人を超える人口を抱える埼玉に、医師がこれほど少ない。これは単なる数字の話ではなく、夜間救急の逼迫や、かかりつけ医を見つけにくいという生活上の問題につながっている。

**産婦人科・精神科の偏在はさらに深刻**

全科合計よりさらに深刻なのが専門科ごとの偏在だ。産婦人科医は全国的に不足しており、特に北関東・東北の一部では人口10万人あたり5人を下回る地域もある。
  `,"akita-suicide":`
秋田県の自殺率は人口10万人あたり22.6人（2022年）で全国最高だ。全国平均17.3人と比べると約30%高く、最低の東京都13.9人とは約1.6倍の差がある。

**高齢化率38.6%という現実**

秋田県の高齢化率は38.6%と全国最高だ。高齢者は孤立・疾病・経済的困窮などのリスクが高く、自殺率との相関が強い。特に高齢男性の自殺率は全国的に高い傾向がある。

**農村部の孤立と冬の長さ**

秋田県は人口密度が低く、集落間の距離が長い。農村部では隣人との交流が減り、社会的孤立が深刻化しやすい。また冬は長く日照時間が短い。日照不足は季節性うつ病（SAD）のリスクを高めることが知られており、精神的健康に影響している可能性がある。

**対策の成果と限界**

秋田県は「自殺対策先進県」として独自の対策を積み重ねてきた。2000年代初頭には40人超だった自殺率を22人台まで下げることに成功している。傾聴ボランティアの育成・相談窓口の拡充・農村部への訪問支援が功を奏した。

しかし高齢化の進行・人口流出・産業の衰退という構造的問題を解決しない限り、根本的な改善は難しい。数字を知ることが、この問題を社会全体で考える第一歩になる。
  `,"okinawa-birth":`
沖縄県の合計特殊出生率は1.70（2022年）で全国最高だ。全国平均1.26、東京都1.04と比べると際立って高い。

**「ゆいまーる」という文化的土台**

沖縄には「ゆいまーる」と呼ばれる相互扶助の精神が根付いている。困ったときは助け合う、子どもは地域みんなで育てるという文化だ。核家族化が進んだ本土と異なり、沖縄では親族・近隣住民が育児を分担する場面が今も多く見られる。「子育てを一人でやらなくていい」という安心感が、出産への前向きな気持ちにつながっていると考えられる。

**若年人口の多さという構造的要因**

沖縄県は15歳未満人口の割合が16.3%と全国最高だ。若い世代が多いこと自体が出生数を増やす要因になる。また平均初婚年齢が全国で最も低い水準にあり、若いうちに結婚・出産する文化的傾向がある。

**「産みやすい」と「育てやすい」は別の話**

一方で沖縄の離婚率は全国最高（2.10件）であり、ひとり親世帯の割合も高い。子どもの相対的貧困率も高く、「産みやすい」と「育てやすい」は必ずしも一致していない。地域コミュニティが育児を支える半面、経済的基盤の脆弱さという課題もある。少子化対策を考えるとき、沖縄の事例は金銭的インセンティブだけでは不十分だという示唆を与えてくれる。
  `,"toyama-homeownership":`
富山県の持ち家率は76.8%で全国最高だ。全国平均61.0%と比べると約16ポイント高く、最低の沖縄県42.8%とは34ポイントもの差がある。

**地価の安さと「嫁入り道具より家」の文化**

富山県は土地が安い。平野部が広く農地転用がしやすいため、広い土地に大きな家を建てることが可能だ。また「結婚したら親が家を建ててあげる」という文化が根付いている地域がある。親世代が子世代のために土地や家を用意する慣習が持ち家率を押し上げている。

**積雪地帯の家づくりと製造業の安定雇用**

富山は雪が多い地域で、雪に耐える頑丈な家を建てる必要がある。また製造業が盛んで安定した雇用があり、住宅ローンを組みやすい経済環境がある。生活保護率が全国最低（3.2人/千人）であることからもわかるように、経済的に安定した家庭が多い。

**持ち家率と離婚率の相関**

興味深いのは、富山県の離婚率も全国最低水準（1.06件）であることだ。持ち家を共有していることが夫婦の経済的結びつきを強め、離婚を抑制する一因になっている可能性がある。「持ち家」は単なる住まいではなく、家族の絆を形成する装置でもある。
  `,"hokkaido-agriculture":`
北海道の農業産出額は1兆2,480億円（2022年）で全国断トツの1位だ。2位の鹿児島県（2,178億円）と比べると約5.7倍の差がある。

**面積と大規模経営が強さの源泉**

最大の理由は単純に面積だ。北海道の総面積は約8.3万km²で全国の約22%を占める。農地面積は全国の約25%が北海道に集中している。農家1戸あたりの農地面積は全国平均の約10倍で、機械化・効率化による大規模経営が定着している。

**酪農の圧倒的シェア**

北海道は多様な農産物を生産しているが、特に酪農は全国生乳生産量の約55%が北海道産だ。広大な牧草地で育てた牛から生産される生乳は、全国の乳製品の基盤を支えている。バター・チーズ・ヨーグルトの供給において北海道は不可欠な存在だ。

**食料安全保障の観点**

日本の食料自給率はカロリーベースで約38%と低い。その中で北海道は食料自給率200%超を誇り、国内の食料安全保障において重要な役割を果たしている。一方で農業従事者の高齢化・後継者不足という課題も抱えている。
  `,"tokyo-income-gap":`
内閣府の県民経済計算（2021年度）によると、1人あたり県民所得は東京都485万円・青森県238万円で、その差は247万円にのぼる。しかしこの数字だけで「東京の方が豊か」と断言できるだろうか。

**見えないコスト——家賃と通勤時間**

東京の生活費は地方より大幅に高い。特に家賃の差は大きく、東京都心の1LDKと青森の1LDKでは月額10万円以上の差があることも珍しくない。年間差にすると120万円超だ。

通勤時間も見えないコストとして効いてくる。東京都民の平均通勤時間は片道48分。年間250日・往復2時間とすると、年間500時間を通勤に費やしている計算になる。この「時間コスト」は給料には現れない。

**リモートワークが変えた方程式**

近年、リモートワークの普及により「東京の仕事をしながら地方に住む」という選択肢が現実的になってきた。東京水準の収入を得ながら青森の物価で生活できれば、実質的な豊かさは都内より高くなる可能性がある。

格差の背景には産業構造・教育機会・インフラ整備の差という構造的問題がある。しかし「高収入＝豊かさ」という単純な図式が崩れつつあるのも事実だ。
  `,"shiga-longevity":`
厚生労働省が発表した令和2年（2020年）都道府県別生命表によると、男性の平均寿命全国1位は滋賀県の82.8歳だ。最低の青森県79.3歳と比べると3.5年もの差がある。

**肥満率の低さと食文化**

滋賀県の男性肥満率（BMI25以上）は27.2%と全国でも低い水準だ。近江料理に代表される野菜・魚中心の食文化が影響していると考えられる。肥満は生活習慣病のリスクを高めるため、肥満率の低さは長寿に直結する。

**自殺率の低さも見逃せない**

滋賀県の自殺率は15.4人/10万人と全国平均（17.3人）を下回る。精神的健康も長寿に大きく影響するため注目に値する。琵琶湖という水資源の豊かさ・比叡山系の自然・近年の企業誘致による安定した雇用など複数の要因が重なっているとみられる。

**青森との差が生まれる背景**

最低の青森県（79.3歳）との差には、食文化（塩分摂取量が多い）・飲酒習慣・医療へのアクセスなどが影響していると考えられる。長寿の地域差は単なる個人の努力の差ではなく、社会環境・経済状況・文化的背景が重なり合って生まれるものだ。
  `,"vacancy-crisis":`
総務省の住宅・土地統計調査（2023年）によると、全国の空き家数は過去最多の約900万戸、空き家率は13.8%に達した。7軒に1軒が空き家という計算だ。

**なぜここまで増えたのか**

最大の要因は人口減少だ。地方では若者が都市に流出し、高齢者が亡くなった後に誰も住まない家が残される。相続した子どもが遠方に住んでいて管理できない、売ろうにも買い手がいない、壊すにも費用がかかるという「負動産」問題が拡大している。

**2033年に30%超という予測**

野村総合研究所などの研究では、2033年には空き家率が30%を超えるという予測もある。3軒に1軒が空き家という時代が、あと10年もないところまで来ている。

**チャンスとしての空き家**

一方で、地方移住を検討する人にとって空き家は格安で広い家を手に入れるチャンスでもある。空き家バンクを通じた移住促進・古民家リノベーション・シェアハウス化など、空き家を資源として活用する動きも広がっている。問題と機会の両面から、この数字を見ていきたい。
  `,"tokyo-stats-overview":`
東京都は面積こそ全国45位（島嶼部を除く）だが、人口1396万人・県民所得485万円・大学進学率72.4%と、あらゆる経済・教育指標でトップクラスに位置する。しかしデータを丁寧に見ると、この都市が抱える深刻な課題も浮かび上がってくる。

**東京が日本一の指標**

医師数は人口10万人あたり334人で全国2位（1位は京都338人）。外国人比率4.2%・大学進学率72.4%・県民所得485万円はいずれも全国最高だ。コンビニ密度も82店/10万人と最高で、生活インフラは充実している。インターネット利用率94.2%も全国トップだ。

**東京が全国最低の指標**

一方で出生率1.04は全国最低で、唯一の1.0台だ。2022年に初めて1.0台に突入した。合計特殊出生率が1.0を下回れば、単純計算で1世代ごとに人口が半減する。

持ち家率44.8%も全国2番目に低く（最低は沖縄42.8%）、東京では賃貸暮らしが標準だ。一戸建て比率24.8%も全国最低で、狭い集合住宅に多くの人が暮らしている。

**なぜ東京で子どもが生まれないのか**

出生率の低さには複数の要因が絡む。まず住居の狭さと高さ。東京の1K平均家賃は約9.8万円で、子どもが生まれると家賃負担が一気に重くなる。待機児童数1248人は全国最多で全体の42%を占める。保育所に入れない恐怖が子育てへの躊躇につながっている。

通勤時間48分も出生率を下げる一因だ。共働きで往復2時間以上を通勤に費やしながら子育てをする負担は、地方とは比較にならない。

**2050年も人口が増える唯一の都道府県**

ただし東京の将来は全国で唯一明るい。国立社会保障・人口問題研究所の推計では、2050年に東京都の人口は2020年比+2.5%と、47都道府県で唯一の増加が見込まれる。全国から人が集まり続ける限り、人口は維持される。ただしそれは地方からの流出によって支えられているという皮肉でもある。
  `,"okinawa-stats-overview":`
沖縄県は日本の統計において独自のポジションを占める。出生率1.70・人口増減予測-5.2%（2050年）と人口面では全国最も活力があるが、経済面では深刻な課題を抱えている。

**沖縄が全国上位の指標**

出生率1.70は全国最高で2位の長崎1.48を大きく引き離す。生産年齢人口比率63.4%も全国2位で若い県だ。保育士数398.4人/10万人も全国最高で、子育て支援の担い手は充実している。Bリーガー輩出率1.52人も全国最高で、スポーツ文化も盛んだ。

**沖縄の深刻な課題**

一方で離婚率2.10件は全国最高だ。ひとり親世帯の割合も高く、子どもの相対的貧困率は全国最高水準にある。「産みやすい」と「育てやすい」が一致していない。

また2050年の人口予測は-5.2%と全国で5番目に少ない減少率だが、若年人口が多い沖縄でこれだけ減少するということは、出生率が下がってきていることの表れでもある。

**「ゆいまーる」が支える出生率**

沖縄の高出生率を支えているのは「ゆいまーる」と呼ばれる相互扶助の文化だ。地域みんなで子どもを育てるという意識が強く、祖父母・近隣住民が育児を担う場面が今も多い。これが経済的に厳しい状況でも出産を選択できる土台となっている。

経済的な豊かさがなくても高い出生率を維持できる沖縄の事例は、少子化対策を考える上で重要な示唆を与えてくれる。カネではなく、コミュニティが出生率を支えているのだ。
  `,"akita-stats-overview":`
秋田県は日本の人口問題を最も先鋭に体現している県だ。高齢化率38.6%・2050年人口減少予測-41.6%と、あらゆる人口指標で全国最悪水準にある。10年後・20年後の日本の姿を先取りして見ることができる県でもある。

**秋田が全国最悪の指標**

高齢化率38.6%は全国最高で人口の約4割が65歳以上だ。2050年の人口減少予測-41.6%も全国最悪で、2020年比で約6割の人口になる見通しだ。自殺率22.6人/10万人・肥満率38.4%・睡眠時間518分（長い）と健康・精神面の指標も全国最悪水準が並ぶ。

**それでも続く転出超過**

転入超過率-6.8人/千人は全国最大の転出超過だ。若者を中心に毎年多くの人が県外に出ていく。農業・製造業など地場産業の雇用だけでは若者を引き留められず、慢性的な人材流出が続いている。

**対策の成果と限界**

ただし秋田は課題に向き合い続けている。自殺率は2000年代初頭に40人超だったところから22人台まで下げることに成功した。傾聴ボランティアの育成・農村部への訪問支援が功を奏した「自殺対策先進県」として全国に知られる。

空き家率21.7%という高さは移住者にとってチャンスでもある。格安で広い家を手に入れられる環境は整っており、農業・自然を求めて移住する人も増えている。秋田の課題は、日本全体が10〜20年後に直面する問題の予行演習とも言える。
  `,"fukui-happiness":`
福井県は人口約75万人と全国有数の小規模県だが、各種「幸福度ランキング」や「住みやすさランキング」で上位常連として知られる。派手さはないが、生活の質を示す指標で軒並み好成績を出している。

**福井の好スコアが並ぶ指標**

持ち家率75.2%は全国3位。生活保護率4.4人/千人は全国で最も低い水準のひとつだ。離婚率1.13件も全国最低クラスで、家庭の安定度が高い。

床面積148.2㎡は全国最高クラスで、広い家に暮らしている人が多い。共働き率も全国上位で、女性が働きやすい環境が整っている。

**なぜこれほど安定しているのか**

福井の安定の背景には製造業の底堅さがある。眼鏡フレームの国内シェア90%以上を占める鯖江市を筆頭に、繊維・電機など地場産業が安定した雇用を提供している。

3世代同居率が高く、祖父母が育児・家事を担う環境が共働きを支えている。持ち家で広い家に家族が集まって暮らすという北陸型の生活スタイルが、生活コストを抑えながら充実した暮らしを実現している。

**地味だからこそ見えるもの**

福井は観光資源が少なく、東京からのアクセスも良くない。知名度は決して高くない。しかしデータが示す「豊かさ」は本物だ。派手さや刺激ではなく、安定した雇用・家族の絆・広い住まいという地道な要素が積み重なって「幸せな県」が作られている。
  `,"commute-time-inequality":`
総務省「社会生活基本調査」（2021年）によると、通勤者の片道平均通勤時間が最も長いのは埼玉県の58分だ。次いで神奈川56分・千葉56分と続き、首都圏が上位を独占する。最短は山形・島根・高知の22分で、差は36分にのぼる。

**年間300時間という損失**

往復36分の差を年間250日で計算すると、年間300時間の差になる。これは約12.5日分。埼玉県民は山形県民より毎年12日間以上を余分に通勤に使っている計算だ。

この時間が睡眠・家族との時間・趣味・副業に使えたとしたら、生活の質はどれほど変わるだろうか。

**通勤時間と出生率の相関**

データを重ねると興味深い傾向が見える。通勤時間が長い都道府県ほど出生率が低い傾向がある。埼玉1.15・千葉1.16・神奈川1.16と首都圏の出生率は全国平均1.26を下回る。一方、通勤時間が短い山形1.31・島根1.60・高知1.29は相対的に高い。

通勤時間が長いと帰宅が遅くなり、夫婦の時間が取れず、育児の余裕もなくなる。「子どもを作る時間的余裕」という視点から見ると、通勤時間は少子化の隠れた要因のひとつかもしれない。

**リモートワーク普及の意味**

コロナ禍以降のリモートワーク普及は、通勤時間格差を縮める可能性がある。「東京の仕事・地方の暮らし」という選択が現実的になりつつある今、通勤時間という制約から解放されることで、地方移住の魅力はさらに高まっている。
  `,"agriculture-future":`
農林水産省の農業産出額データ（2022年）によると、北海道の産出額は1兆2480億円で全国断トツの1位だ。2位の鹿児島県（2178億円）との差は5.7倍、全国の農業産出額の約13%を北海道1県が担っている。

**都道府県別の特色**

2位鹿児島は畜産が強く、豚・鶏・黒毛和牛が主力。3位茨城は首都圏への近さを活かした野菜生産が盛んだ。4位千葉も首都圏農業の代表格。5位熊本は農業産出額上位と温泉の両立で知られる。

東京都の228億円は全国最低だが、都市農業として練馬大根など独自の取り組みもある。

**北海道の強みと弱み**

北海道が強い理由は面積・大規模経営・多品目生産の三拍子がそろっているからだ。酪農・小麦・じゃがいも・玉ねぎ・てんさい（砂糖大根）など、どれか一品ではなく総合力が高い。

しかし課題もある。農業従事者の高齢化が深刻で、後継者不足が慢性化している。また冬の厳しさによる生産期間の制約や、農地の集約化が進む一方で地域集落が維持できなくなるリスクもある。

**食料安全保障という視点**

日本の食料自給率はカロリーベースで約38%と先進国の中で極めて低い。その中で北海道は食料自給率200%超を誇る。国際情勢が不安定な時代に、農業生産力は安全保障の問題でもある。都道府県別の農業産出額を知ることは、日本の食を誰が・どこで支えているかを理解する第一歩だ。
  `,"young-unmarried-crisis":`
総務省「国勢調査」（2020年）によると、30〜39歳男性の未婚率は全国平均51.8%だ。30年前の1990年は32.6%だったから、約30年で20ポイント近く上昇したことになる。東京都は52.8%と30代男性の半数以上が未婚だ。

**年代・男女別の差**

20代男性の未婚率は全国平均で約78%と高いが、これは「まだ若い」という要素が大きい。問題は30代・40代の未婚率だ。30代女性の未婚率は38.4%（全国平均）、40代男性は28.4%、40代女性は20.2%と、かつては「結婚していて当然」の年代でも未婚が標準になりつつある。

**地域差はなぜ生まれるか**

未婚率に最も差が出るのが都市と地方の差だ。東京の30代男性52.8%に対し、秋田35.4%・山形36.8%・富山35.2%と地方は低い。この差の背景には複数の要因がある。

地方では親族・地域コミュニティによるお見合い・紹介の機会が多い。また都市では出会いの機会が多い反面、パートナーへの理想が高くなりがちで、マッチングが難しくなる側面もある。

**「結婚したくない」のか「できない」のか**

未婚率上昇の解釈は難しい。自由な選択として未婚を選んでいる人も確かにいる。一方で「結婚したいが経済的に不安」「出会いがない」という人も多い。内閣府の調査では、未婚者の多くが「いずれは結婚したい」と回答しており、未婚化は必ずしも「結婚離れ」ではなく「結婚できない」側面も大きい。

統計が示すのは、未婚化が少子化と直結しているという現実だ。未婚のまま子どもを産む選択が少ない日本では、未婚率の上昇がそのまま出生数の減少につながる。
  `,"foreign-resident-change":`
総務省「住民基本台帳」（2022年）によると、全国の外国人住民比率は約2.5%だが、都道府県間の差は大きい。最高は東京都の4.2%、最低は岩手・秋田・高知の0.3〜0.4%で、差は約14倍になる。

**製造業と外国人労働者**

外国人が多い地域の特徴は二つある。一つは大都市圏（東京・神奈川・大阪）で、国際的なビジネス・留学・観光業の集積が外国人を引き寄せる。もう一つは製造業の盛んな地域（愛知・静岡・群馬）で、工場労働力として外国人技能実習生・特定技能労働者が多い。愛知3.8%・群馬2.8%は製造業大県の典型だ。

**コロナの影響と回復**

2020〜2021年のコロナ禍で外国人入国が大幅に制限され、多くの地域で外国人比率が低下した。しかし2022年以降は回復傾向にあり、特に技能実習生・特定技能の受け入れ再開とともに製造業地域での外国人数が増えている。

**地方に外国人が来ない理由**

地方で外国人が少ない背景には、雇用機会の少なさ・外国語対応インフラの不足・コミュニティの形成しにくさがある。外国人にとっても、同じ国籍のコミュニティがある地域の方が暮らしやすい。これが都市への集中をさらに促している。

人口減少が深刻な地方にとって、外国人の定住・活躍は重要な選択肢の一つだ。しかし言語・文化・制度の壁を越えた受け入れ体制の整備は、まだ途上にある。
  `,"welfare-rate-regional":`
厚生労働省「被保護者調査」（2022年度）によると、生活保護受給率は大阪府の33.5人/千人が全国最高で、最低の富山県3.2人/千人とは10倍以上の差がある。この差はどこから来るのか。

**大阪が高い三つの理由**

第一は歴史的経緯だ。大阪・西成区の釜ヶ崎（あいりん地区）は戦後の高度成長期に日雇い労働者が集積した。成長が終わると仕事を失った労働者が滞留し、高齢化した今も生活保護受給者として残っている。

第二は単身高齢者の集積だ。大阪は住居費が東京より低く、年金だけでは生活できない低所得の単身高齢者が暮らしやすい環境にある。単身高齢者は生活保護のリスクが高い。

第三は制度へのアクセスだ。大阪では支援団体・弁護士・NPOによる申請サポートが充実しており、受給するべき人が受給できている側面もある。

**富山が低い理由——「家族の力」**

富山が全国最低なのは、3世代同居率の高さと家族ネットワークの強さが大きい。「困ったら家族が助ける」という文化が、制度に頼る前のセーフティネットとして機能している。また製造業中心の安定した雇用構造も貧困リスクを下げている。

**「受給率が低い＝良い」は正しいか**

受給率が低いことが必ずしも豊かさの証とは言えない。「恥」の感覚から申請をためらい、本来受給すべき人が受給できていない場合もある。受給率の地域差は「豊かさの差」ではなく「産業史・家族観・制度アクセスの差」として読む必要がある。
  `,"hotspring-tourism":`
環境省「温泉利用状況」（2022年度）によると、宿泊施設を持つ温泉地の数は長野県94カ所が全国最高だ。北海道・静岡・新潟が続く。一方で「温泉県」として有名な大分県の温泉地数は82カ所と5位だが、源泉数・湧出量では別次元の数字を持っている。

**源泉数では大分が別格**

環境省の源泉数データでは大分県が約4400本と全国最多で、2位の北海道約2500本を大きく引き離す。「おんせん県おおいた」のキャッチフレーズは伊達ではない。別府・由布院という二大温泉地を擁し、温泉による観光業が地域経済を支えている。

**長野の温泉が多い理由**

長野県に温泉地が多いのは、活断層が多く地熱活動が活発な地形に加え、山岳リゾートとして温泉地が発展してきた歴史がある。草津・野沢温泉・上高地など、それぞれ個性的な温泉地が点在している。

**温泉と宿泊者数の相関**

温泉地の多い地域は宿泊旅行者数も多い傾向があるが、完全には一致しない。沖縄は温泉地が少ないが宿泊者数は多い。温泉以外の魅力（自然・文化・都市機能）が宿泊需要を支えている地域もある。

日本に温泉地が3000カ所近く存在するという事実は、地球規模で見ても稀有な資源だ。観光業が低迷する地方において、温泉は数少ない競争優位のひとつでもある。
  `,"fiscal-power-gap":`
総務省「市町村財政の状況」（2022年度）によると、都道府県の財政力指数は東京都の1.064が唯一1.0を超え、完全な財政自立を達成している。最低は秋田県の0.258で、東京の約4分の1だ。

**財政力指数とは何か**

財政力指数は基準財政収入額（税収見込み）を基準財政需要額（行政サービスに必要な費用）で割った数字だ。1を超えれば自力で行政サービスをまかなえる。1を下回ると国からの地方交付税（補助金）に頼らざるを得ない。

全47都道府県で1を超えているのは東京のみだ。愛知0.876・神奈川0.954・大阪0.809と大都市圏は比較的高いが、それでも1に届かない。

**地方が「稼げない」構造**

地方の財政力が低い理由は単純で、税収が少ないからだ。所得税・法人税は経済活動が集積する都市圏に集まる。人口が少なく産業が限られる地方は、どうしても税収が少なくなる。

一方で地方は面積が広く、道路・橋・上下水道などのインフラ維持コストが高い。税収は少ないのにコストは高いという構造的な問題がある。

**地方交付税という「仕送り」**

この不均衡を是正するのが地方交付税制度だ。国が一旦税収を集め、財政力の弱い自治体に再配分する。秋田・島根・高知などの地方は、この「仕送り」なしには現在の行政サービスを維持できない。財政力指数のデータは、日本の地域間格差の根本にある「稼ぐ力の差」を示している。
  `,"care-worker-shortage":`
厚生労働省「介護サービス施設・事業所調査」（2022年）によると、人口10万人あたりの介護職員数は島根県・鳥取県・秋田県など地方で多く、東京都・神奈川県・埼玉県などで少ない。

一般的には「地方で介護職員が足りない」というイメージがあるが、人口比で見ると実態は逆だ。人口比で最も介護職員が少ないのは東京都（756人/10万人）で、島根県（1772人）の約43%しかいない。

**なぜ都市部で少なくなるのか**

都市部で介護職員の人口比が低い理由は複数ある。第一に、都市部は若年人口が多いため高齢者の割合が相対的に低い。介護需要が少なければ介護職員も少なくなる。第二に、都市部は他業種との賃金競争が激しく、低賃金の介護職に就く人が集まりにくい。第三に、介護施設の立地コストが高く施設数が少ない。

**2025年問題が都市部を直撃する**

しかしこの状況は急速に変わりつつある。団塊の世代（1947〜49年生まれ）が75歳以上になる「2025年問題」で、都市部の高齢者数が急増する。特に首都圏・近畿圏での高齢者急増は、人口比で少ない介護職員に深刻な負荷をかける。

政府は2025年に全国で約32万人の介護職員が不足すると試算している。外国人介護士の受け入れ・ICT活用・介護ロボット導入が進む一方、根本的な待遇改善なしには担い手確保は難しい。
  `,"alcohol-health-gap":`
厚生労働省「国民健康・栄養調査」（2022年）によると、男性の習慣的飲酒率（週3日以上飲酒）は高知県44.8%・秋田県44.2%・岩手県40.2%が上位だ。東京都32.8%・埼玉33.0%と比べると約10〜12ポイント高い。

**飲酒率と自殺率の地域的重複**

データを重ねると注目すべき傾向が見える。飲酒率が高い地域と自殺率が高い地域が重複している。秋田・岩手・高知は飲酒率・自殺率ともに全国上位だ。因果関係は単純ではないが、過度な飲酒がうつ病リスクを高め、自殺リスクと関連するという医学的知見とも一致する。

**なぜ寒冷地・地方で飲酒が多いのか**

東北・北海道で飲酒率が高い背景には複数の要因がある。まず気候だ。冬の寒さで外出・運動が制限される中、家での飲酒が娯楽・暖取りとして定着してきた側面がある。

次に社会的孤立だ。農村部では人との交流が少なく、酒の席が数少ないコミュニケーションの機会になることがある。また経済的ストレス・将来への不安が飲酒で紛らわされているケースもある。

**肥満率との三重苦**

さらにデータを重ねると、飲酒率・自殺率が高い東北は肥満率も高い。秋田38.4%・青森36.8%と全国最高クラスだ。飲酒のカロリー・つまみによる肥満・運動不足が重なり、生活習慣病リスクも高まる。飲酒は「健康格差」の多くの側面に関わるキーファクターだ。
  `,"internet-rate-gap":`
総務省「通信利用動向調査」（2022年）によると、個人のインターネット利用率は東京都94.2%が全国最高で、秋田県76.8%が最低水準だ。差は約17ポイントと、一見小さく見えるが、その意味は大きい。

**17ポイントの差が意味すること**

利用率76.8%ということは、秋田県民の約4人に1人がインターネットを使っていないということだ。その大半は高齢者だ。高齢化率38.6%の秋田では、デジタルにアクセスできない人口の絶対数が多い。

**デジタル格差が生む生活格差**

インターネット利用率の差は、単なる「便利さの差」にとどまらない。就職活動はオンライン応募が標準になりつつある。行政手続きのオンライン化が進み、デジタルを使えない人は窓口に行くしかない。医療予約・ワクチン接種・給付金申請もオンラインが基本になっている。

情報格差は経済格差に直結する。投資・副業・フリーランスなど新しい働き方の多くがオンラインを前提とする。デジタルにアクセスできない人は、これらの機会から排除される。

**地方でもスマートフォン普及率は上昇**

一方で明るい材料もある。スマートフォンの普及でインターネット利用率は全国的に上昇しており、地方の高齢者でもスマホを使う人が増えている。自治体によるデジタル活用支援・スマホ教室なども広がっている。デジタル格差は縮小傾向にあるが、完全解消には時間がかかる。
  `,"population-2040-forecast":`
国立社会保障・人口問題研究所「日本の地域別将来推計人口（令和5年推計）」によると、2040年の人口が2020年比で増加する都道府県は東京都（+3.3%）のみだ。沖縄-2.0%・神奈川-4.0%・埼玉-5.3%が比較的軽微な減少で、秋田-28.5%・青森-26.2%・高知-23.7%が深刻だ。

**人口が増える・維持される条件**

東京が唯一増加する理由は明確だ。全国から若者が集まり続けているからだ。大学・企業・エンターテインメントが集積する東京は、若者の「最終目的地」であり続けている。

沖縄・神奈川・埼玉が比較的軽微な減少にとどまる理由も同様で、若年人口の維持・転入超過が人口減少を抑制している。

**深刻な県で何が起きるか**

秋田で2040年に人口が28.5%減少するとは、単に「人が減る」だけではない。学校・病院・バス路線・スーパーなどのインフラが採算を維持できなくなる。インフラが消えると残っている住民の生活が困難になり、さらに人が出ていく悪循環が生じる。

**「消滅可能性都市」という概念**

2014年に増田寛也氏が提唱した「消滅可能性都市」という概念は、20〜39歳の女性人口が2040年に半減以下になる市区町村を指す。その数は896自治体・全体の約半数にのぼる。都道府県単位のデータは比較的穏やかに見えるが、市区町村単位で見ると日本の人口問題の深刻さは桁違いだ。

データが示す未来は変えられる。出生率の向上・移住の促進・外国人の定住という三つのアプローチが同時に必要だ。
  `,"sleep-time-productivity":`
総務省「社会生活基本調査」（2021年）によると、1日の平均睡眠時間は秋田県518分（約8時間38分）が全国最長で、東京都462分（約7時間42分）が全国最短だ。差は56分と一見小さいが、年間に換算すると約340時間になる。

**なぜ東京の睡眠時間は短いのか**

最大の要因は通勤時間だ。東京都民の平均通勤時間は片道48分と全国最長クラスだ。往復2時間近くを通勤に費やすと、帰宅が遅くなり就寝時間が後ろにずれ込む。朝の起床時間は仕事で決まるため、削られるのは睡眠時間だ。

加えて都市生活の刺激の多さ——深夜まで営業する飲食店・エンターテインメント・スマートフォンの使用——が就寝を遅らせている面もある。

**睡眠不足の健康・経済的コスト**

睡眠不足は健康リスクを高める。糖尿病・高血圧・うつ病・免疫機能低下と睡眠不足の関連は医学的に確立されている。また認知機能・判断力の低下から労働生産性も下がる。

ランド研究所の試算では、日本の睡眠不足による経済的損失は年間約15兆円にのぼるという。「よく眠れる社会」は「生産性の高い社会」でもある。

**通勤時間の短縮が睡眠を救う**

リモートワーク普及で通勤時間が減れば睡眠時間は増える。コロナ禍でリモートワークが広がった際に、睡眠時間が増えたという調査結果も出ている。「睡眠時間格差」は単なる生活習慣の問題ではなく、通勤・住居・働き方という社会構造の問題でもある。
  `,"gyoza-ramen-culture":`
総務省「家計調査」（2022年）によると、1人あたりの年間餃子消費量は宮崎県が94.6個と全国最高だ。「餃子の街」論争で有名な浜松（静岡県）72.4個・宇都宮（栃木県）56.2個を大きく引き離している。

**宮崎で餃子消費が多い理由**

宮崎は「肉巻きおにぎり」「チキン南蛮」など独自のB級グルメ文化が発達している。餃子もその流れで日常食として定着しており、地元の飲食店・家庭での消費量が多い。また豚・鶏肉の生産が盛んで、食肉文化が豊かなことも影響している。

**浜松・宇都宮の「ブランド戦略」**

浜松と宇都宮は「餃子消費日本一」を観光・まちおこしのブランドとして活用してきた。しかし「総務省家計調査」は県庁所在市のデータを使うため、浜松市・宇都宮市のデータが県全体の代表値として使われている。人口比で見ると宮崎に及ばないが、都市としての餃子消費は確かに多い。

**ラーメン消費との対比**

餃子と対照的なのがラーメン消費だ。ラーメン消費が最も多いのは山形県32.4杯で、東京都16.2杯と大都市で低い。一方で餃子は宮崎・浜松・栃木と南〜関東東が上位で、東北はあまり多くない。

食文化は気候・産業・歴史・地理によって形成される。家計調査のデータは、そうした地域の個性を数字で教えてくれる。
  `,"crime-rate-decline":`
警察庁「犯罪統計」によると、全国の刑法犯認知件数（人口10万人あたり）は2003年の2578件から2022年の620件へと、約20年で4分の1以下に激減した。日本の治安改善は世界的に見ても顕著だ。しかし都道府県間の差は依然として大きい。

**大阪528件・秋田248件の差**

2022年の人口10万人あたり認知件数は大阪府528件が全国最高で、最低は秋田県248件のほぼ2倍だ。東京568件・神奈川489件と大都市圏で高い傾向がある。

**大都市で犯罪が多い理由**

大都市で犯罪が多い背景には複数の要因がある。まず人口密度の高さだ。人が多い場所では窃盗・詐欺などの機会犯が増える。次に匿名性の高さで、都市では見知らぬ人同士の接触が多く、被害者も加害者も特定されにくい環境がある。また外国人・観光客など多様な人が集まることで、文化的摩擦や組織的犯罪のリスクも高まる。

**なぜ20年で激減したのか**

犯罪が劇的に減った要因として、防犯カメラの普及・セキュリティシステムの向上・深夜営業規制・警察の組織的対策が挙げられる。また高齢化により活動的な若者（犯罪の主体になりやすい年代）が減ったことも影響している。

**「安全な日本」は続くか**

ただし新たな課題もある。特殊詐欺（オレオレ詐欺等）は減少しておらず、高齢化とともに被害者が増えている。またサイバー犯罪は従来の統計に反映されにくい。日本の治安改善は誇れる成果だが、新たな形の犯罪への対応が次の課題だ。
  `,"nursing-care-insurance":`
厚生労働省「介護保険事業状況報告」（2022年度）によると、65歳以上が支払う介護保険料（月額・第1号被保険者）は大阪府7200円が全国最高水準で、富山県5600円は全国でも低い水準にある。差額は月1600円、年間19200円だ。

**なぜ地域差があるのか**

介護保険料は各市区町村が設定する。高齢化が進んでいる・介護サービス利用者が多い・介護施設が充実しているほど保険料は高くなる。

大阪・東京で高い理由は、介護サービスの利用率が高く、施設整備コストが高い（地価）ことが影響している。富山は持ち家率が高く3世代同居が多いため、介護施設に頼らない在宅介護が多く、保険料が抑制されている面がある。

**老後の生活費に与える影響**

介護保険料は老後の固定費として重くのしかかる。月1600円の差は一見小さいが、65歳から85歳までの20年間では38.4万円の差になる。年金収入が限られる老後においてこの差は小さくない。

加えて介護保険料は一人暮らしか夫婦かによっても負担感が変わる。単身高齢者が多い都市部では一人で全額負担しなければならない。

**介護保険料は今後上がり続ける**

高齢化の進行により介護サービスへの需要は増え続けており、介護保険料は全国的に上昇傾向にある。2006年の全国平均4090円から2022年には6014円と約1.5倍になった。老後の住む場所を選ぶ際に、介護保険料も考慮する視点が今後重要になってくる。
  `,"blood-donation-civic":`
日本赤十字社「血液事業統計」（2022年度）によると、人口1万人あたりの年間献血者数は愛知県78.4人・沖縄県72.8人・静岡県72.4人が全国上位だ。東北（青森54.8人・秋田48.4人）は低い傾向がある。

**献血率が示す「社会参加意識」**

献血は完全に自発的な行動だ。強制でも義務でもなく、インセンティブも限定的だ（記念品程度）。そのため献血率は「自発的に社会に貢献しようとする意識」の指標として独自の価値がある。

愛知で高い背景には、自動車産業を中心とした企業文化の影響がある。トヨタをはじめ多くの企業が職場献血を積極的に推進しており、組織的な参加が率を押し上げている。

**沖縄で高い理由——「ゆいまーる」の延長**

沖縄で献血率が高いのは、「ゆいまーる（相互扶助）」の文化と無関係ではないだろう。困った人を助けるという文化的土台が、見知らぬ誰かのための献血にもつながっている可能性がある。

**全国的に減少傾向**

全国的に献血者数は減少傾向にある。少子高齢化で献血可能な年齢（16〜69歳）の人口が減少していることが主因だ。また若者の献血離れも指摘されており、血液の安定供給は長期的な課題となっている。
  `,"pachinko-decline":`
警察庁「風俗営業等の現況」（2022年）によると、パチンコ・パチスロ店の数は全国で約7000店程度にまで減少した。2010年には約12000店以上あったことを考えると、12年間で約4割が閉店したことになる。

**人口比で見る地域差**

人口10万人あたりのパチンコ店数は、秋田18.4店・青森18.2店・山形16.8店と東北で多く、沖縄10.4店・東京8.4店と南部・大都市で少ない。

東北で多い背景には、冬の娯楽の少なさと、かつてのパチンコ産業が地域に深く根付いたことがある。一方で沖縄・東京は他の娯楽の選択肢が多く、パチンコへの依存度が低い。

**なぜこれほど急激に減少したのか**

最大の要因はスマートフォンゲームとの競争だ。家でも外でも手軽に楽しめるゲームアプリが普及し、わざわざパチンコ店に行く必要性が薄れた。特に若年層のパチンコ離れが顕著だ。

次いで規制強化の影響もある。2018年の「射幸性規制」でパチスロの出玉が大幅に規制され、客が離れた。また2020年のコロナ禍では閉店要請も受けた。

**地域経済への影響**

パチンコ店の閉店は地域経済にも影響する。大型店舗が閉まることで近隣の飲食店・駐車場などにも影響が出る。一方で跡地のリノベーション・再開発も進んでおり、地域によっては新たな商業施設として生まれ変わる事例もある。
  `,"reading-time-education":`
総務省「社会生活基本調査」（2021年）によると、1日の平均読書時間は東京都28分が全国最長で、秋田県・鳥取県・青森県14分が最低だ。一方で食事時間は秋田県102分が全国最長で、東京都84分が最低水準だ。同じデータを見ても、都市と地方では「時間の使い方」が正反対だ。

**東京で読書時間が長い理由**

東京都民の読書時間が長い最大の理由は、通勤電車だ。片道48分の通勤時間を読書に充てる人が多く、「通勤電車での読書文化」が読書時間を押し上げている。目的地まで歩くか車で移動する地方では、読書の「すき間時間」が少ない。

**秋田で食事時間が長い理由**

秋田で食事時間が長い背景には、家族・地域での食事文化がある。核家族化・単身化が進む都市部では食事を一人で素早く済ませることが多いが、地方では家族そろって食卓を囲む時間が残っている。農業・伝統的な食文化への重視も影響している。

**「良い」「悪い」ではなく「違い」として読む**

読書時間が長い東京が「文化的」で、食事時間が短い東京が「貧しい」というわけではない。都市と地方ではライフスタイルの前提が異なる。どちらが「良い」かではなく、それぞれの地域で「時間をどう使っているか」という文化的個性として読むべきデータだ。

生活時間のデータは、その地域の人々が何を大切にしているかを教えてくれる。
  `,"j-league-regional":`
Jリーグ選手名鑑（2023年）をもとにとどらんが集計したデータによると、男性人口10万人あたりのJリーガー輩出率は大分県5.70人が全国最高だ。熊本県5.53人・静岡県4.87人・鹿児島県4.20人と九州・静岡が上位に集まっている。

**大分・熊本が多い理由——ホームクラブ効果**

大分・熊本で輩出率が高い最大の要因は、地元クラブ（大分トリニータ・ロアッソ熊本）が地域密着で育成に力を入れていることだ。地元出身選手を育てて使うというクラブの方針が、地域の選手輩出に直結している。

**「サッカー王国静岡」の現在**

静岡県は清水エスパルス・ジュビロ磐田というJ1クラブを擁し、長年「サッカー王国」として知られてきた。輩出率4.87人は全国3位で、その地位を維持している。静岡の高い輩出率は、小学校から充実したサッカー指導環境が地域全体で整っていることが背景にある。

**高知0人という衝撃**

データの中で最も注目されるのは高知県の0人だ。高知県出身の現役Jリーガーが1人もいない唯一の県となっている。高知は面積が広く人口が少ないため、クラブの土台が弱く育成環境が整っていないことが主因とみられる。

スポーツ選手の輩出率は、地域の文化・育成環境・プロクラブの存在という総合的な力を反映している。
  `,"sumo-kagoshima":`
日本相撲協会の力士データ（2023年5月場所）をもとにとどらんが集計したデータによると、人口10万人あたりの現役力士輩出率は鹿児島県1.47人が全国最高だ。高知県1.33人・熊本県1.22人が続き、九州が上位を占める。

**奄美群島という特殊な存在**

鹿児島の数字を特別にしているのは奄美群島の存在だ。奄美地区（奄美大島・徳之島など）出身の力士は鹿児島県全体の中でも特に多く、奄美群島の人口（約10万人）だけで計算すると輩出率は11.5人と全国平均の約24倍にのぼるとされる。

奄美に力士が多い理由は、島の体格の良さと相撲文化の定着だ。島出身の力士が親方になり後輩を育てるというサイクルが確立されており、奄美からプロ相撲に進む道が「キャリアパス」として認知されている。

**九州で力士が多い傾向**

奄美以外でも九州は力士輩出率が高い。温暖な気候で体を大きくしやすい・肉食文化・地域での相撲大会の伝統などが背景にある。また九州場所が毎年福岡で開催されることで、相撲への親しみが醸成されている。

**最低は滋賀・京都**

一方で滋賀県0.14人・京都府0.20人は最低水準だ。都市文化が強く、相撲よりも他のスポーツや進学への志向が強いことが一因とみられる。スポーツ種目の選択もまた、地域文化の反映だ。
  `,"snow-days-vs-sunny":`
気象庁「平年値（1991〜2020年）」によると、年間雪日数は北海道124日・青森119日・秋田109日・岩手111日と東北・北海道で多く、沖縄・宮崎・鹿児島は0日だ。この差は単なる気象の話ではなく、生活・健康・経済の幅広い分野に影響を及ぼす。

**肥満率・自殺率との相関**

雪日数が多い東北・北海道は肥満率が高い傾向がある（秋田38.4%・青森36.8%が全国最高）。冬の外出制限で運動量が減ることが一因だ。また自殺率も秋田・岩手など東北で高く（秋田22.6人が全国最高）、日照時間の短さが季節性うつ病リスクを高めていると考えられる。

**消防士・医療費への影響**

雪国では消防士の人口比が高い。秋田・青森・岩手は消防職員数の全国上位に入る。雪による事故・倒壊・孤立集落への対応など、雪国特有のリスクへの備えが必要だ。また医療費も東北は高めで、厳しい冬が生活習慣病・事故のリスクを高めていることが影響している。

**農業への影響**

雪国では当然ながら農業の生産期間が短くなる。しかし雪は恵みでもある。豊富な雪解け水が農業用水を供給し、米どころとして知られる新潟・山形・秋田の水稲栽培を支えている。

気候は変えられないが、気候を理解してデータを読むことで、地域の課題と強みがより明確に見えてくる。
  `,"hot-summer-inland":`
気象庁「平年値（1991〜2020年）」によると、最高気温35℃以上の「猛暑日（真夏日）」が最も多いのは群馬県32.4日だ。埼玉県28.4日・茨城県24.8日と内陸の関東が上位を占める。一方で「南国」のイメージがある沖縄県はわずか4.2日と意外に少ない。

**なぜ内陸の関東が暑いのか**

群馬・埼玉で猛暑日が多い理由は「フェーン現象」と「内陸盆地効果」だ。夏に南から吹く湿った風が山脈（奥秩父・赤城山など）を越えると乾いた熱風になって降りてくる。さらに海から遠い内陸では海風による気温低下効果がなく、熱がこもりやすい。群馬県の館林市・埼玉県の熊谷市は全国屈指の暑さで知られる。

**沖縄が意外に少ない理由**

沖縄は年間を通じて温暖だが、猛暑日が少ない。理由は海風だ。海に囲まれた沖縄では常に海風が吹き、最高気温が35℃を超えることは少ない。蒸し暑さはあるが、内陸型の「焼けるような暑さ」にはならない。

**温暖化で猛暑日は増加傾向**

データを時系列で見ると猛暑日は増加傾向にある。2000年代と比較して、2020年代は猛暑日が増えており、温暖化の影響が見て取れる。将来的には関東内陸部での猛暑日がさらに増え、生活・農業・健康への影響が大きくなることが予想される。
  `,"library-education":`
文部科学省「社会教育調査」（2021年）によると、人口10万人あたりの公共図書館数は島根県4.4館・高知県4.2館・鳥取県4.2館が全国最高で、東京都2.2館・大阪府2.8館が低い水準だ。

絶対数では東京が断然多いが、人口比では過疎地の地方が上回る。これはなぜか。

**人口比で地方が多い理由**

人口が少ない地域では、住民一人ひとりにサービスを届けるために分散した図書館ネットワークが必要になる。集落が点在する島根・高知・鳥取では、各地域に図書館（または分館）を設けないと多くの住民がアクセスできない。都市部では一館が多くの人をカバーできるため、人口比では少なくなる。

**図書館と教育の関係**

図書館は教育インフラとして重要な役割を担う。学校の蔵書だけでは限界があり、公共図書館が知識へのアクセスを民主化する。特に所得格差がある地域では、図書館が「お金がなくても本が読める場所」として機能する。

**電子図書館の台頭**

近年は電子図書館（電子書籍の貸し出し）の普及が進んでいる。スマートフォンで図書館の本を借りられるようになれば、物理的な図書館へのアクセスに関わらず知識を得られる。デジタル化は「図書館格差」を縮める可能性を持っている。一方で電子機器を使いこなせない高齢者にとっては、物理的な図書館の重要性はむしろ高まっている。
  `,"religion-culture-map":`
文化庁「宗教統計調査」（2022年）によると、人口10万人あたりの宗教法人数は島根県555法人が全国最高だ。鳥取県485法人・奈良県438法人が続き、関西・山陰で多い傾向がある。最少は神奈川県85法人・埼玉91法人と首都圏で少ない。差は約6倍だ。

**島根が日本一の理由**

島根県は出雲大社を擁する「神の国」として古くから知られる。全国から「縁結び」を求める参拝者が訪れる出雲大社は、日本の神道文化の中心地のひとつだ。県内には規模の小さな神社・お寺が無数に存在し、地域コミュニティの中心として機能してきた。

また人口が少ない（約65万人）にもかかわらず宗教法人数が多いため、人口比では圧倒的な数字になる。

**奈良・京都での多さ**

奈良・京都も上位に入る。東大寺・法隆寺・金閣寺・清水寺など世界的な寺社を抱える両府県は、仏教・神道の歴史的聖地として宗教法人が集積している。

**首都圏での少なさ**

神奈川・埼玉で少ない理由は、高度成長期以降に急速に宅地化した地域で伝統的な宗教施設が少ないからだ。農村コミュニティから切り離された形で発展した首都圏ベッドタウンには、地域と密着した神社・お寺が少ない。

宗教法人数のデータは、その地域の歴史・文化・コミュニティの厚さを映し出す鏡でもある。
  `,"vacation-home-vacant":`
総務省「住宅・土地統計調査」（2023年）によると空き家率は秋田21.7%・山梨21.3%・和歌山21.2%が全国上位だ。しかし同じ「空き家21%」でも、その中身は全く異なる。

**山梨の空き家——別荘地の放置**

山梨県の高い空き家率の特徴は、別荘地の放置が大きな割合を占めることだ。高度成長期〜バブル期に富士山麓・八ヶ岳周辺に大量に建設されたリゾート別荘が、所有者の高齢化・経済的事情などで管理されないまま放置されている。

別荘の空き家は通常の「居住用空き家」と性質が異なる。もともと定住を目的としていないため、移住者を受け入れる「空き家バンク」の対象になりにくい。解体費用が土地の価値を上回るケースも多い。

**秋田の空き家——過疎化の結果**

一方、秋田県の高い空き家率は人口流出・過疎化の結果だ。若者が都市に出て行き、高齢者が亡くなると誰も住まなくなる。こちらは移住希望者への提供・農地との一体的な活用という方向で対策が進めやすい。

**空き家バンクで変わり始めた地域**

各地の空き家バンク（自治体が運営する空き家と移住希望者のマッチングサービス）を通じて、格安で古民家を手に入れる移住者が増えている。100万円以下の物件も珍しくなく、東京での家賃と比較すれば数年で元が取れる計算になる。空き家問題は課題であると同時に、地方への移住を促進する資源でもある。
  `,"hospital-count-gap":`
厚生労働省「医療施設調査」（2022年）によると、人口10万人あたりの病院数は高知県9.3院・佐賀県9.3院が全国最高で、埼玉県3.8院・千葉県4.3院が最少だ。差は約2.5倍になる。

**高知・九州で病院が多い理由**

高知・佐賀・長崎など四国・九州南部で病院が多い背景には、地理的条件がある。高知は山地が多く交通が不便なため、各地域に病院が必要だ。一か所に集約するより分散して設置する必要がある。

また人口あたりの医師数が多い地域（高知311人・徳島325人）は医師が診療所・病院を開業しやすく、施設数が増える傾向がある。

**埼玉・千葉で少ない理由**

埼玉・千葉は東京への通院・救急搬送を前提とした医療圏構造になっている面がある。「東京の病院に行けばいい」という暗黙の前提が、地元での病院整備を遅らせてきた側面がある。

しかし人口増加が続く中でその前提が崩れつつあり、首都圏での病院不足・救急逼迫が問題化している。

**病院数と医療の質は別**

注意が必要なのは、病院数が多いからといって医療の質が高いとは限らないことだ。小規模な病院が多い地域では、高度な医療機器・専門医が少ないケースもある。医療の質は病院数だけでなく、医師の専門性・機器の充実度・連携体制で評価される必要がある。
  `,"rent-price-map":`
国土交通省「賃貸住宅市場レポート」（2022年）によると、1K・ワンルームアパートの平均月額家賃は東京都約9.8万円が全国最高で、秋田県約3.0万円が最低水準だ。差額は月6.8万円、年間81.6万円になる。

**家賃格差が出生率を下げる**

東京の出生率が1.04と全国最低な背景に、家賃の高さがある。子どもが生まれると「もう一部屋」が必要になる。東京で2LDKを借りると月15〜20万円かかることも珍しくない。地方なら同じ広さで月5〜8万円で住める。

住居費が家計を圧迫する都市では、子どもを持つことへの経済的ハードルが高くなる。出生率の地域差を「文化の差」だけで説明するのは不十分で、住居費という経済的要因が大きく影響している。

**老後の住居費格差**

老後になると家賃格差の重みはさらに増す。年金収入が限られる中で、月7万円の家賃と月3万円の家賃では生活の余裕が全く違う。老後の移住先を選ぶ際に家賃を重視する人が増えているのは合理的な選択だ。

**移住の経済的メリット**

東京から家賃3万円の地方に移住すれば、年間で最大80万円の節約になる。リモートワークで東京の給与を維持しながら地方に住めば、生活水準は大幅に上がる。家賃格差は「地方移住のコスパ」を最もわかりやすく示す数字だ。
  `,"travel-consumption-economy":`
観光庁「旅行・観光消費動向調査」（2022年）によると、住民1人あたりの年間旅行消費額は京都府・沖縄県・東京都が148千円と全国最高で、秋田県58千円・岩手県62千円が最低水準だ。差は約2.5倍になる。

**旅行消費額が高い地域の特徴**

京都・沖縄・東京が高い理由は明確だ。これらは「旅行者が多い」だけでなく「旅行者が高く消費する」地域だからだ。京都の高級旅館・沖縄のリゾートホテル・東京の高級ホテルと飲食店は、国内外の富裕層を引き付ける。

また旅行消費額には「他県に旅行した際の消費」も含まれるため、所得水準が高い地域は旅行への支出も多くなる。東京都民が旅行に多く使うことも数字を押し上げる。

**観光業が少ない地域の現実**

秋田・岩手で低い背景には、観光資源の知名度・アクセスの悪さ・インバウンド（訪日外国人）の少なさがある。秋田には乳頭温泉郷・田沢湖など魅力的な資源があるが、インフラ整備や情報発信で後れをとっている。

**コロナ後の観光回復**

コロナ禍（2020〜2021年）で観光消費は激減した（2019年比で60%減程度）が、2022年は急速に回復した。インバウンドの再開とともに、特に京都・沖縄・東京への観光消費が回復している。地方観光の活性化には、独自の魅力発信と交通インフラの整備が引き続き課題だ。
  `,"single-parent-poverty":`
統計データを重ねると、見えにくい貧困の構造が浮かび上がってくる。離婚率が高い地域は生活保護率が高く、待機児童も多い傾向がある。この連鎖を断ち切ることが社会政策の核心的課題だ。

**沖縄という典型例**

沖縄県は離婚率2.10件（全国最高）・生活保護率22.0人・待機児童も多い。そして子どもの相対的貧困率も高い。出生率は全国最高（1.70）だが、子どもが豊かに育てられているかどうかは別問題だ。

「産む」文化と「育てる」環境のミスマッチが沖縄の課題を象徴している。

**待機児童と就労の悪循環**

ひとり親世帯が直面する最大の壁が待機児童問題だ。子どもを保育所に預けられなければ働けない。働けなければ収入が得られない。収入がなければ保育費用を払えない——という悪循環に陥る。

東京の待機児童1248人という数字の背後に、こうした悪循環に置かれたひとり親が多数いる。

**統計が見せる・見せない**

都道府県別の統計データは「平均」を示すため、最も困難な状況にある人たちを見えにくくする。平均値の背後に、データに現れない個別の困難がある。統計を入口として、その背後にある人々の現実を想像する力が必要だ。

数字はツールだ。良い問いを立てるための出発点として、統計データを活用してほしい。
  `,"population-density-life":`
総務省データによると、人口密度（人/km²）は東京都約6000人が全国最高で、高知県約70人・北海道約68人が最低水準だ。差は約85倍にのぼる。この密度の差は様々な統計指標を通じて生活のあらゆる側面に影響している。

**密度が高いとどうなるか**

人口密度が高い東京では、コンビニ82店/10万人・医師334人・大学進学率72.4%と都市型インフラが充実する。一方で家賃9.8万円・通勤時間48分・持ち家率44.8%・出生率1.04と「密度のコスト」も高い。

**密度が低いとどうなるか**

人口密度が低い高知では、コンビニ44店/10万人と少ないが、看護師1685人・病院9.3院と医療は充実している。家賃3.4万円・通勤時間24分と生活コストは低い。一方で孤独死リスクが高く（孤独死リスク指数88pt）、農村部の孤立問題がある。

**密度と幸福の関係**

人口密度が幸福度と直接相関するかは難しい問いだ。高密度都市には機会の多さ・多様性・刺激がある。低密度地方には自然・広さ・コミュニティの深さがある。どちらが「良い」かではなく、自分の価値観に合った密度を選ぶことが重要だ。

データが示す地域差は、多様な「暮らし方の選択肢」があるという事実でもある。
  `,"working-age-future":`
総務省「住民基本台帳」（2022年）によると、15〜64歳の生産年齢人口比率は東京都65.4%・沖縄63.4%・愛知63.2%が高く、秋田52.8%・高知57.8%・島根56.8%が低い。差は約12〜13ポイントだ。

**生産年齢人口比率が意味すること**

生産年齢人口比率は「稼いで税金・社会保険を払える人の割合」を示す。比率が高いほど財政的に豊かで、社会保障制度を維持しやすい。比率が低いと、少ない働き手で多くの高齢者を支えなければならない。

秋田では生産年齢人口52.8%が残り47.2%の高齢者・子どもを支えている。東京では65.4%が34.6%を支えている。この差は介護保険料・医療費・福祉サービスの持続可能性に直結する。

**東京・沖縄が高い理由**

東京は全国から若者が集まり続けるため、生産年齢人口比率が高い。沖縄は出生率が高く若年人口が多いため高い。対照的なアプローチで同じ結果になっているのが興味深い。

**2040年の見通し**

国立社会保障・人口問題研究所の推計では、2040年に全国の生産年齢人口比率はさらに低下する見込みだ。秋田などの地方では50%を下回る可能性もある。「働き手が税を払い、高齢者の医療・介護を支える」という社会保障の基本構造が、地方では維持困難になりつつある。この問題への対処が、日本社会の最大の宿題のひとつだ。
  `,"埼玉-medical-shortage":`
埼玉県の医師数は人口10万人あたり174人で全国最低だ。全国平均269人の65%しかいない。人口700万人を超える日本最大クラスの県でなぜこれほど医師が少ないのか。

**ベッドタウンの宿命**

埼玉県は1960〜70年代の高度経済成長期に東京のベッドタウンとして急速に人口が増えた。しかし医療インフラの整備は人口増加に追いつかなかった。住宅は建ったが、病院・医師は足りないまま大量の住民が移り住んできた。

**大学病院が少ない構造問題**

医師分布に大きく影響するのが大学病院の存在だ。医師は大学病院を拠点に周辺の病院に派遣される仕組みがあるため、医科大学が少ない地域は医師も集まりにくい。埼玉県内の医科大学は少なく、これが慢性的な医師不足の構造的原因となっている。

**夜間救急の逼迫という現実**

数字の問題は生活上のリアルな問題につながる。埼玉県では夜間救急の逼迫が慢性化しており、救急車のたらい回しが問題になることもある。子どもが急病になっても近くの小児科が見つからないという状況は、多くの埼玉県民が経験していることだ。

対策として県は医師確保のための奨学金制度や、医師少数区域への勤務インセンティブを設けているが、根本的な解決には時間がかかる。
  `,"minimum-wage-gap":`
2022年の地域別最低賃金は、東京都・神奈川県が1,072〜1,071円と全国最高で、青森・秋田・岩手など東北の複数県が853〜854円と最低水準だ。差額は219円。

**月に換算すると4万円の差**

時給219円の差は一見小さく見えるが、月160時間働くと月3万5千円、年間では42万円の差になる。最低賃金で働く人にとって、住んでいる都道府県によって年収が42万円変わるということだ。

**なぜ地域差があるのか**

地域別最低賃金は都道府県の経済実態に基づいて設定される。東京・神奈川は経済規模が大きく物価も高いため高めに設定される。東北・九州の一部は経済規模が小さく、企業が高い最低賃金を払えないという事情がある。

**一方で物価も違う**

ただし最低賃金が高い地域は物価も高い。東京の1K家賃は青森の約3倍になることもある。単純に最低賃金だけで「どこに住むべきか」は判断できない。最低賃金と物価・家賃・通勤コストを総合的に見る必要がある。

全国一律の最低賃金を設定すべきかどうかは政策論争が続いているが、地域格差は縮小傾向にある。2012年に最大で226円あった差は、2022年には219円まで縮まっている。
  `,"snow-country-life":`
気象庁の平年値（1991〜2020年）によると、北海道の年間雪日数は124日で3日に1日は雪が降る計算だ。青森119日・秋田109日と東北が続き、沖縄・宮崎は0日だ。

**雪が生活に与える影響の広さ**

雪日数の差は単なる気候の差にとどまらない。データを重ねると様々な指標に影響が見える。

まず肥満率。東北・北海道は秋田38.4%・青森36.8%と高い。冬に外出・運動が制限されることが一因とされる。自殺率も東北・北海道で高い傾向があり、日照時間の短さが季節性うつ病のリスクを高めるという指摘がある。

**消防士が多い理由**

雪国で消防士の人口比が高いのも興味深い。秋田・青森・岩手は消防職員数の上位に入る。雪による事故・火災・孤立した集落への対応など、雪国特有のリスクへの備えが職員数に反映されているとみられる。

**医療コストも高くなる**

雪国では外出困難な冬季に医療機関へのアクセスが難しくなる。このため一人あたり医療費が高くなる傾向があり、東北・北海道の医療費は上位に入る県が多い。

同じ日本でも気候が変われば、生活コスト・健康リスク・社会インフラの必要量が大きく変わる。雪国の暮らしをデータで見ると、日本の地域差の深さが実感できる。
  `,"ramen-regional":`
総務省「家計調査」（2022年）の品目別支出データによると、外食のラーメン消費が最も多いのは山形県だ。年間32.4杯/人で全国平均22.4杯を大きく上回る。東京都は16.2杯と意外に低い。

**山形がラーメン王国である理由**

山形はラーメンの種類が豊富で「冷やしラーメン」「米沢ラーメン」「酒田ラーメン」など地域ごとに異なるスタイルが発展している。冬の厳しい寒さで温かいラーメンへの需要が高いことも影響している。

**東京が低い理由**

東京でラーメン消費が少ない背景には、外食の選択肢の多さがある。東京には世界中の料理が集まっており、ラーメン以外の外食オプションが豊富だ。結果として1人のラーメン消費頻度は地方より低くなる。

**餃子消費の意外なトップは宮崎**

「餃子の街」論争で有名な浜松（静岡）と宇都宮（栃木）だが、人口比でみると実は宮崎県が94.6個/人と断トツのトップだ。宮崎は「肉巻きおにぎり」など独自のB級グルメ文化があり、餃子消費も多い。

食文化は歴史・気候・産業と密接につながっている。家計調査のデータは、各地域の食生活の実態を数字で教えてくれる貴重な資料だ。
  `,"baseball-hometown":`
SPAIA選手名鑑（2023年）をもとにとどらんが集計したデータによると、プロ野球選手の輩出率は和歌山県が男性10万人あたり4.46人で全国最高だ。2位は沖縄県4.29人、3位は佐賀県3.42人が続く。最低は山口県0.64人、東京都は0.78人と大都市では低い傾向がある。

**なぜ和歌山が多いのか**

和歌山は古くから野球が盛んで、強豪高校が多い。智辯和歌山・市立和歌山など甲子園常連校が選手育成の土台を作っている。人口が少ない（約90万人）にもかかわらず多くのプロ選手を輩出しており、人口比では圧倒的な数字になる。

**温暖な気候との相関**

上位に九州・四国・沖縄など温暖な地域が多いのも特徴だ。年間を通じて野球ができる気候が、練習量・経験値の蓄積につながっているとも考えられる。

**大谷翔平の岩手は？**

大谷翔平・佐々木朗希を輩出した岩手県は1.40人で全国30位前後と中位だ。突出したスター選手がいても、人口比では必ずしも上位にならない。輩出率は「土地柄・文化・インフラ」という総合的な育成環境を反映している。

JリーガーやBリーガーでも地域差があり、静岡のサッカー文化・富山のバスケット文化など、地域ごとに得意なスポーツがある。スポーツ選手の輩出率は、その地域の文化的個性を映し出す鏡でもある。
  `,"saitama-commute-hell":`
埼玉県民の平均通勤時間は片道58分で全国1位。神奈川54分、千葉52分と首都圏が上位を独占する一方、山形・島根・高知は22〜24分と最短水準だ。

**年間480時間という「見えないコスト」**

年間250日出勤するとして、埼玉県民は約480時間を通勤に費やしている計算になる。これは丸々20日分——1ヶ月の稼働日数に相当する。しかもこの時間、基本的には「何も生まれない」。睡眠時間を削り、家族との時間を削り、趣味の時間を削って捻出している時間だ。

**東京との所得差は見かけより小さい**

東京都と埼玉県の1人あたり県民所得の差は約150万円ほどある。しかし通勤時間を「時給換算」すると、その差はじわじわと縮まる。さらに定期代・飲食費・疲労による医療費など、見えにくいコストも積み上がる。「東京の給与で埼玉に住む」という選択が本当にお得かどうか、データは少し複雑な答えを示している。

**リモートワークが「格差」を変えた**

コロナ禍以降、通勤時間の価値観は大きく変わった。同じ仕事を通勤なしでできるなら、埼玉在住者と東京在住者の実質的な格差は一気に縮まる。「通勤地獄」という言葉が死語になる日は、遠くないかもしれない。

山形22分と埼玉58分の差である2.6倍——この数字が示す生活の違いを、一度じっくり想像してみてほしい。
  `,"osaka-crime-reality":`
大阪府の刑法犯認知件数は人口10万人対528件で全国最高。「やっぱり大阪は怖い」と思った人、少し待ってほしい。

**実は東京の方が件数は多い**

人口規模で補正した数字を見ると、東京都は568件で大阪を上回る。絶対数でも東京の方が多い。それでも「怖い街」のイメージが大阪に集中しているのは、文化的なイメージと統計の乖離という興味深い現象だ。

**全国的には劇的に減少している**

2003年のピーク時は2578件だったが、2022年には620件と約4分の1まで減少した。これは大阪に限った話ではなく全国共通のトレンドだ。防犯カメラの普及、人口減少、スマートフォンの普及による「人の目」の増加など、複合的な要因が背景にある。

**「認知件数」のカラクリ**

認知件数は「届け出られた件数」であって、実際の犯罪発生数ではない。都市部ほど被害届を出す文化があり、地方では「まあいいか」で済ませるケースも多いとされる。秋田・岩手・福井が200件台と低いのは、本当に安全なのか、それとも届け出が少ないのか——統計はそこまで教えてくれない。

データを読むとき「何を測っているか」を問い直す習慣が、情報リテラシーの第一歩だ。
  `,"tokyo-university-gap":`
東京都の大学進学率は72.4%で全国最高。対する秋田県・山形県は34〜35%台と全国最低水準だ。この38ポイント差が、日本の人口構造に静かな影響を与えている。

**進学率と所得の「鶏と卵」**

大学進学率の高い都道府県ほど、1人あたりの県民所得も高い傾向がある。高所得だから進学できるのか、進学するから高所得になるのか。おそらく両方が絡み合っているが、いずれにせよ「教育格差＝経済格差」の構造は、データからはっきり見えてくる。

**地方から都市への「人材輸送」**

秋田で育ち、東京の大学に進学し、そのまま東京で就職する——このルートを辿る人が多いほど、地方の人口は減り、都市の人口は増える。大学進学率の格差は、単なる教育の問題ではなく、地方消滅論とも直結している。

**「地元で大学」という選択肢の可能性**

一方、地方大学の充実や奨学金制度の整備、テレワーク普及による地方移住増加が、この構造を少しずつ変えているかもしれない。72%と34%という数字の背景には、受験競争だけでなく、家庭の経済状況・高校の進路指導・地域の産業構造まで、複雑な物語が詰まっている。
  `,"fukui-welfare-lowest":`
大阪府の生活保護率は人口千対33.5人で全国最高。一方、福井県はわずか3.2人で全国最低水準。この10倍以上の差は、何を意味しているのだろうか。

**北陸3県が軒並み低い理由**

富山・石川・福井の北陸3県は、いずれも生活保護率が全国最低クラスだ。共通点として挙げられるのが、持ち家率の高さ（富山は全国1位の76.8%）、3世代同居文化、そして親族ネットワークの強さだ。「いざとなれば家族が助ける」という文化的背景が、公的支援への依存を下げているという仮説が立てられる。

**低い＝豊かではない、という視点**

しかし生活保護率が低いことは、必ずしも「豊かな地域」を意味しない。本来支援が必要な人が、スティグマや「迷惑をかけたくない」という意識から申請をためらっているケースも存在するとされる。「助けを求めやすい社会かどうか」という問いは、保護率だけでは答えが出ない。

**大阪の高さの背景**

大阪は歴史的に日雇い労働者が集まる地域を抱え、単身高齢者や外国籍住民の割合も高い。支援が必要な人が集まりやすい都市構造が、保護率を押し上げているとも言える。数字の高低ではなく、「なぜその数字になったか」を問うことが、統計を活かす第一歩だ。
  `,"aichi-income-secret":`
1人あたり県民所得で見ると、東京都485万円に次いで愛知県が352万円で全国2位。3位以下を大きく引き離し、大阪府（295万円）とは57万円もの差がある。

**トヨタという「経済エンジン」**

愛知県の経済力の核心は製造業、とりわけトヨタを頂点とする自動車産業だ。完成車だけでなく、部品・素材・設備・物流まで、裾野産業が県内に広く根を張っている。1社の本社所在地がここまで地域経済を動かす例は、世界的にも珍しい。

**外国人比率3.8%という数字**

愛知県の外国人比率は3.8%で全国3位。製造業の現場では多くの外国人労働者が働いており、グローバルな産業構造が人口構成にまで影響している。「ものづくり」が地域のダイバーシティを作り出しているという物語が見えてくる。

**「一極集中」は東京だけではない**

日本の経済格差というと東京一極集中が語られがちだが、愛知は「東京とは別の軸」で経済力を持つ希有な存在だ。製造業に強みを持つ地方がどうやって高い所得水準を維持できるか——愛知のモデルは、地方創生を考えるうえで示唆に富んでいる。愛知の失業率は全国でも低水準で、雇用の安定が給与水準を下支えしている点も見逃せない。
  `,"okinawa-divorce-paradox":`
沖縄県の合計特殊出生率は1.70で全国最高。そして離婚率は人口千対2.10件でも全国最高だ。「子どもがたくさん生まれる県」が同時に「離婚が最も多い県」でもある——この一見矛盾した数字が示すものとは何か。

**「早く結婚し、早く別れる」という傾向**

沖縄県は初婚年齢が全国平均より若い傾向があり、若年での結婚・出産が多い。若い段階での結婚はリスクも高く、離婚率を押し上げる一因になっているという仮説が立てられる。

**コミュニティが子育てを支える**

注目すべきは、離婚率が高いにもかかわらず出生率が高い点だ。沖縄では「ゆいまーる（相互扶助）」の文化が強く、ひとり親でも地域・親族が子育てを支えるネットワークが機能している。核家族で抱え込む本土とは異なる子育て構造がある。

**「家族」の定義が違う**

沖縄の数字は、「婚姻した2人が子育てする」という本土的な家族モデルとは異なる形が存在することを示している。血縁・地縁による広いネットワークが子育てを担うモデルは、少子化対策を考えるうえで、一つのヒントを与えてくれるかもしれない。
  `,"tokyo-birth-rate-lowest":`
1人あたり県民所得が全国最高（485万円）の東京都。しかし合計特殊出生率は1.04と全国最低だ。「豊かな都市ほど子どもが生まれない」というこの逆説は、なぜ起きるのか。

**家賃と時間という「子育てコスト」**

東京の平均家賃は地方の2〜3倍。「子ども部屋を作るために広い家に引っ越す」という選択が、地方より格段に高コストになる。さらに通勤時間の長さが、育児に使える時間を物理的に奪っている。待機児童数1,248人（全国最多）という数字も、子育て環境の厳しさを物語る。

**「選択肢が多すぎる」という逆説**

東京には独身で充実した生活を送るためのインフラが整っている。趣味・キャリア・人間関係——あらゆる選択肢が揃う環境では、「結婚・出産」という選択の優先度が相対的に下がる。豊かさが結婚・出産のインセンティブを下げるという皮肉な構造だ。

**全国最低の沖縄との差0.66という現実**

沖縄1.70と東京1.04の差は0.66。同じ日本の中でこれほどの差が生まれる背景には、単純な経済格差ではなく、文化・コミュニティ・都市構造の違いがある。少子化対策を考えるとき、東京モデルと沖縄モデルは全く異なるアプローチが必要かもしれない。
  `,"kyoto-doctor-paradox":`
「医師は東京に集中している」というイメージは正確ではない。人口10万人あたりの医師数が最も多いのは京都府の338人で、東京都は334人と2位だ。そして全国最少は埼玉県のわずか174人——首都圏の中に深刻な医療格差が存在している。

**大学病院が医師分布を決める**

医師数が多い都道府県の上位には、徳島・高知・岡山・福岡など大学病院を擁する地方都市が並ぶ。医師は大学病院に勤務しながら周辺の病院に派遣される仕組みがあるため、医科大学が集積する地域では医師数が多くなる。京都には京都大学・京都府立医科大学など複数の医科系大学がある。

**埼玉174人の深刻さ**

埼玉県の人口は約730万人。174人/10万人という数字は、全国最少の深刻な水準だ。ベッドタウンとして発展した埼玉は、医科大学の少なさと「東京に行けばいい」という意識から、医療インフラの整備が後回しになってきた歴史がある。

**「近くて遠い」医療の現実**

東京に隣接しているにもかかわらず、医師数では全国最低水準——この矛盾が埼玉県民の医療アクセスに影を落としている。高齢化が進む中、ベッドタウン型都市の医療問題は今後ますます深刻になるという仮説が立てられる。
  `,"vacancy-opportunity":`
山梨県の空き家率は21.3%で全国最高水準。秋田・和歌山も20%を超える。「3軒に1軒近くが空き家」という地域が、今の日本にはある。

**「格安で家が手に入る」という魅力**

空き家率が高い地域では、数十万〜数百万円という価格で一戸建てが手に入るケースがある。東京で家賃を払い続けるより、空き家を購入して移住する方が経済的に有利という計算が成り立つ移住者も増えている。実際に山梨・和歌山への移住者数は増加傾向にある。

**「負動産」というリスク**

一方で、空き家には落とし穴もある。築年数が古く耐震基準を満たさないケースが多く、リフォーム費用が購入価格を上回ることも珍しくない。また過疎地域では水道・道路などインフラ維持コストが高く、将来的に行政サービスが縮小するリスクもある。

**空き家バンクという出会いの場**

国土交通省と各自治体が整備している「空き家バンク」は、空き家のオーナーと移住希望者をマッチングする仕組みだ。うまく活用すれば、都市の高コスト生活から地方の豊かな生活へのシフトが実現できる。

空き家率の高さは「衰退のサイン」でもあり、「チャンスのシグナル」でもある。どちらに転ぶかは、活用する人間次第だ。
  `,"water-price-gap":`
水道料金（20㎥/月）が最も高いのは高知県の328円。最低は北海道の168円で、約2倍の差がある。毎日使う水の値段が、住む場所によってここまで違う。

**なぜ山間部・過疎地で高いのか**

水道料金が高い地域の共通点は、山間部・過疎地・人口減少が著しい地域だ。水道は一度インフラを整備すると、利用者が減っても維持コストはほぼ変わらない。人口が減れば一人あたりの負担が増える——という構造が、料金上昇を招いている。

**島根・鳥取・高知が高い理由**

中国山地・四国山地という地形的な制約も大きい。水源から住宅地まで長い距離を引く必要があり、インフラ整備コストが高くなりやすい。さらに人口密度が低いため、維持費を少ない利用者で分担する構造になっている。

**2040年問題——さらに上がる水道料金**

総務省の試算では、2040年までに水道料金が全国平均で約40%上昇するとされる。人口減少が続く地方では、さらに大きな値上げが予想される。移住を考えるとき、「水道料金」という視点を入れてみると、地域選びの判断材料が一つ増えるかもしれない。
  `,"obesity-snow-country":`
BMI25以上の肥満率（男性）は秋田県38.4%で全国最高。全国平均31.8%と比べると約7ポイント高い。東北・北海道が上位を占める一方、東京・京都など都市部は22〜26%台と低い。

**冬の運動不足という構造的な問題**

秋田・青森・北海道の共通点は、冬の長さと積雪量だ。雪が降ると外出や運動の機会が激減する。秋田の年間雪日数は約124日——3日に1日は雪が降る計算だ。冬の間、身体活動が制限されることが肥満率を押し上げる大きな要因とされている。

**食文化と飲酒習慣**

東北地方は塩分摂取量が多い食文化として知られ、漬物・塩魚・濃い味付けが伝統的に好まれる。また飲酒率も高い地域が多く、カロリー過多になりやすい食習慣が影響しているという仮説が立てられる。

**肥満率と平均寿命の関係**

注目すべきは、肥満率が高い秋田県の男性平均寿命が全国最低水準（79.5歳）である点だ。肥満は糖尿病・心疾患・脳卒中のリスク要因であり、長寿との逆相関がデータに表れている。「気候が健康格差を生む」という物語が、数字から浮かび上がってくる。
  `,"religion-shimane":`
人口10万人あたりの宗教法人数が最も多いのは島根県の555法人。2位の鳥取485法人、3位の奈良438法人と続き、神奈川・埼玉・東京などは最低水準だ。

**出雲大社という「重力**

島根県に宗教法人が多い最大の理由は、出雲大社を中心とする古代からの神道文化の蓄積だ。日本全国の神様が集まるとされる出雲は、古来から宗教的な拠点として機能してきた。その文化的蓄積が、人口比でも突出した宗教法人数として数字に残っている。

**過疎地と宗教施設の関係**

宗教法人数が多い地域は、過疎化が進む農村部とも重なりやすい。地域コミュニティの核として神社・寺院が機能し続けている地域では、施設の廃止が進まず、人口が減っても法人数が維持される傾向がある。

**都市部はなぜ少ないのか**

神奈川・埼玉・東京が少ない理由は、単純に「新しい街」だからだ。江戸時代以降に急速に人口が増えたベッドタウンには、古い信仰の拠点が少ない。人口密度が高くても、宗教法人の密度は低いという逆転現象が起きている。宗教施設の分布は、その土地の歴史の深さを測る物差しでもある。
  `,"minimum-wage-real":`
2023年度の最低賃金は東京都1,072円、青森県853円。その差は219円だ。月160時間働くとすると月約3.5万円、年間で約42万円の差になる。同じ仕事をしていても、住む場所によって報酬が変わるという現実がここにある。

**「地域別最低賃金」の仕組み**

日本の最低賃金は都道府県ごとに設定される。物価水準・経済状況・産業構造の違いを反映するためだが、結果として「同じ仕事をしても給与が違う」という格差が生まれる。

**格差は縮まっているのか**

近年、政府主導で最低賃金の引き上げが続いており、地域間格差は徐々に縮小傾向にある。2013年には最大格差が約200円だったが、底上げの速度は地域によって異なる。「全国一律の最低賃金」を求める声も上がっているが、地域経済への影響を懸念する声も根強い。

**「最低賃金」は最低ラインに過ぎない**

最低賃金はあくまで法定の下限であり、実際の給与水準はこれより高いケースが多い。しかしパートタイム・非正規労働者にとっては直接影響する数字だ。年42万円という差は、生活の質に直結する格差として、データは静かに問いかけている。
  `,"crime-rate-decline-truth":`
全国の刑法犯認知件数は、2003年の約285万件から2022年には約70万件と、20年間で4分の1以下に激減した。客観的に見れば、日本は劇的に安全になっている。

**なぜ「危険になった」と感じるのか**

統計とは裏腹に、「最近は物騒になった」という体感を持つ人は多い。この「統計vs体感」の乖離はなぜ生まれるのか。SNSやニュースで犯罪情報が拡散されやすくなったことで、実際の発生件数は減っていても「見える件数」が増えているという構造が一因とされる。

**都市部と地方の格差**

犯罪件数は減少しているが、地域差は残る。大阪528件・東京568件（人口10万人対）に対し、秋田・岩手・福井は200件台。ただしこの差も「届け出率の違い」が含まれており、純粋な治安の差とは言い切れない。

**減少の背景にある複合要因**

防犯カメラの普及、高齢化による「活動的な犯罪者」の減少、スマートフォンによる監視社会化、少子化による若年層の減少など、複数の要因が重なっている。「安全になった理由」は一つではなく、社会構造の変化が犯罪件数を押し下げているという物語が見える。
  `,nd40ea2bc5f14:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nd40ea2bc5f14" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n3f73fc4b1acf:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n3f73fc4b1acf" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n1204afb95776:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n1204afb95776" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n3eaef144e9a7:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n3eaef144e9a7" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n8e5bcf6f8f01:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n8e5bcf6f8f01" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n916ea7613287:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n916ea7613287" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nfe5252605e1a:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nfe5252605e1a" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n173f2a5a68b1:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n173f2a5a68b1" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nd03173ff7e9c:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nd03173ff7e9c" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n943b413ed88b:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n943b413ed88b" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n79651ac428e5:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n79651ac428e5" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nda3300103606:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nda3300103606" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n7041eec998a2:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n7041eec998a2" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nda1fc287b94c:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nda1fc287b94c" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nbbf44c58cefd:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nbbf44c58cefd" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',ne2101b6d0533:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/ne2101b6d0533" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n2189efae9752:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n2189efae9752" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',naf1b196f8cf0:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/naf1b196f8cf0" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n763c9bf8b4f6:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n763c9bf8b4f6" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n7346fd97d5ab:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n7346fd97d5ab" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n4b2ef9bf89cf:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n4b2ef9bf89cf" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n0c4c7f1e0869:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n0c4c7f1e0869" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n7b60e82024e5:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n7b60e82024e5" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',ne4ac214e17cc:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/ne4ac214e17cc" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nd5aaa0942552:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nd5aaa0942552" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n217983341ee2:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n217983341ee2" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nc565a2976bd8:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nc565a2976bd8" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n5c495847d137:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n5c495847d137" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n148b57b114c1:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n148b57b114c1" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nad419a5b3716:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nad419a5b3716" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n83d02da6312d:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n83d02da6312d" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',ncac04aa6fca0:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/ncac04aa6fca0" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nda70797e21ed:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nda70797e21ed" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>'},MH={"人口・世帯":"divorce-rate",社会保障:"welfare-rate",医療:"doctor-count","健康・医療":"doctor-count","住宅・不動産":"vacancy-rate",経済:"income","農業・産業":"migration-rate","安全・社会":"welfare-rate","教育・子育て":"birth-rate",社会問題:"divorce-rate",社会福祉:"welfare-rate","生活・インフラ":"vacancy-rate","文化・宗教":"migration-rate","観光・交流":"migration-rate",気候:"migration-rate",食文化:"migration-rate","スポーツ・文化":"migration-rate"},RH={"divorce-northland":"divorce-rate","osaka-welfare":"welfare-rate","tokyo-doctor":"doctor-count","akita-suicide":"suicide-rate","okinawa-birth":"birth-rate","toyama-homeownership":"homeownership","hokkaido-agriculture":"agriculture","tokyo-income-gap":"income","shiga-longevity":"life-expectancy","vacancy-crisis":"vacancy-rate","埼玉-medical-shortage":"doctor-count","minimum-wage-gap":"min-wage","snow-country-life":"snow-days","ramen-regional":"ramen-consumption","baseball-hometown":"baseball-player","tokyo-stats-overview":"divorce-rate","okinawa-stats-overview":"birth-rate","akita-stats-overview":"suicide-rate","fukui-happiness":"homeownership","commute-time-inequality":"commute-time","agriculture-future":"agriculture","young-unmarried-crisis":"unmarried-rate","foreign-resident-change":"foreigner-rate","welfare-rate-regional":"welfare-rate","hotspring-tourism":"hotspring-count","fiscal-power-gap":"fiscal-power","care-worker-shortage":"care-worker","alcohol-health-gap":"drinking-rate","internet-rate-gap":"internet-rate","saitama-commute-hell":"commute-time","osaka-crime-reality":"crime-rate","tokyo-university-gap":"university-rate","fukui-welfare-lowest":"welfare-rate","aichi-income-secret":"income","okinawa-divorce-paradox":"divorce-rate","tokyo-birth-rate-lowest":"birth-rate","kyoto-doctor-paradox":"doctor-count","vacancy-opportunity":"vacancy-rate","water-price-gap":"water-rate","obesity-snow-country":"obesity-rate","religion-shimane":"religion-count","minimum-wage-real":"income","crime-rate-decline-truth":"crime-rate","population-2040-forecast":"pop-future-2040","sleep-time-productivity":"sleep-time","gyoza-ramen-culture":"gyoza-consumption","crime-rate-decline":"crime-rate","nursing-care-insurance":"care-insurance","blood-donation-civic":"blood-donation","pachinko-decline":"pachinko-count","reading-time-education":"reading-time","j-league-regional":"j-player","sumo-kagoshima":"sumo-player","snow-days-vs-sunny":"snow-days","hot-summer-inland":"hot-days","library-education":"library-count","religion-culture-map":"religion-count","vacation-home-vacant":"vacancy-rate","hospital-count-gap":"hospital-count","rent-price-map":"rent-price","travel-consumption-economy":"travel-spend","single-parent-poverty":"divorce-rate","population-density-life":"working-age-rate","working-age-future":"working-age-rate",n4eb2573976a7:`
2020年の国勢調査で、衝撃的な数字が明らかになった。

**30代男性の未婚率が、51.8%。**

つまり、30代男性の「2人に1人以上」が未婚という時代になった。

1990年は32.6%だったから、30年でおよそ20ポイント上昇したことになる。かつては「30代で未婚」といえば少数派だったが、今や多数派に近い。日本の結婚という文化が、静かに、しかし確実に変わりつつある。

## なぜここまで増えたのか

**① 経済的な壁**

非正規雇用の拡大、賃金の長期停滞、住居費の高騰。「結婚できる経済力がない」と感じる男性が増えた。厚生労働省の調査では、未婚男性の約4割が「経済的な理由」を未婚の理由として挙げている。

特に20〜30代の可処分所得は、バブル期と比べて実質的に下がっている。結婚・育児にかかるコストは変わらないのに、稼げる額が減れば、踏み出せない人が増えるのは当然とも言える。

**② 価値観の変化**

「結婚しなければならない」という規範が薄れ、「しなくてもいい」という選択肢が社会的に認められるようになった。これ自体は多様性の観点からは前向きな変化だが、結果として未婚率の上昇につながっている。

SNSの普及で「独身を謳歌している人」の姿が可視化されたことも影響しているかもしれない。「結婚しなくても幸せになれる」という情報が、かつてより簡単に手に入る時代だ。

**③ 出会いの機会の減少**

職場の人間関係の希薄化、地域コミュニティの崩壊、長時間労働による私生活の消滅。かつては職場や地域で自然に出会いがあったが、そういった機会が構造的に減っている。

マッチングアプリの普及で「出会いのインフラ」は整ったが、そこに至るまでの心理的ハードルや時間的余裕がない人も多い。

## 都道府県で見ると、差は大きい

全国平均51.8%という数字だが、都道府県別に見ると面白いことがわかる。

**未婚率が高い県（30代男性）**

- 東京都：52.8%
- 沖縄県：59.5%
- 大阪府：58.5%
**未婚率が低い県（30代男性）**

- 福井県：35%台
- 山形県：35%台
- 秋田県：38%台
都市部ほど未婚率が高く、地方ほど低い。この傾向は明確だ。

都市には独身で生活できるインフラが整っており、地方には親族・地域コミュニティによる「結婚を後押しする文化」が残っている。同じ日本でも、結婚に対する環境がこれほど違う。

## 「結婚しない」のか、「できない」のか

この問いへの答えは、人によって違う。

経済的な理由で「できない」人もいれば、価値観として「しない」を選ぶ人もいる。どちらが正しいということではない。

ただ、統計が示す51.8%という数字は、個人の選択の集積であると同時に、日本社会の構造的な問題の反映でもある。

住む場所や生まれた環境によって結婚のしやすさが変わるなら、それは個人の問題ではなく、社会の設計の問題だ。

30年で20ポイント上昇した未婚率。この数字は、これからも静かに上がり続けるのだろうか。

都道府県別の未婚率データを地図とランキングで確認できます。 https://www.japan-stats.com/detail/unmarried-rate（https://www.japan-stats.com/detail/unmarried-rate）

出典：総務省 国勢調査（2020年）

#統計 #未婚率 #少子化 #日本社会 #データで見る日本
`,n8eae19370e42:`
日本で最も豊かな都市、東京。

1人あたりの県民所得は**485万円で全国1位**。全国平均の約1.5倍、最下位の青森県（238万円）の約2倍だ。

その東京の合計特殊出生率が、**1.04**。

47都道府県の中で、最低だ。

豊かなのに、子どもが生まれない。この逆説は何を意味しているのか。

## 東京で子どもを産まない「3つのコスト」

**① お金のコスト**

東京の家賃は地方の2〜3倍。1LDKで月15〜20万円は珍しくない。「子ども部屋を作るために広い家に引っ越す」という選択が、地方より格段に重くなる。

学校給食費も東京都は5,521円/月で全国最高。習い事・塾の費用も都市部ほど高い。子育てにかかるコストが、他の都道府県と比べて構造的に高い。

**② 時間のコスト**

東京の平均通勤時間は片道48分。往復で約1時間36分を通勤に費やしている。仕事が終わって帰宅すると21時、22時という生活では、子育てに使える時間が物理的に少ない。

待機児童数も深刻だ。東京都の待機児童数は1,248人（全国最多水準）。「保育園に入れない」という問題が、出産をためらわせる要因になっている。

**③ 選択肢のコスト**

これが最も見えにくいコストだ。

東京には独身で充実した生活を送るためのインフラが完璧に整っている。レストラン、エンタメ、キャリアの機会、多様な人間関係——あらゆる選択肢が揃う環境では、「結婚・出産」という選択の優先度が相対的に下がる。

「豊かさが少子化を生む」という皮肉な構造が、データに表れている。

## 沖縄との比較が示すもの

対照的なのが沖縄県だ。出生率**1.70で全国最高**。

沖縄の1人あたり県民所得は全国最低水準。東京と比べると約250万円の差がある。それでも子どもが最も多く生まれる。

背景にあるのが「ゆいまーる」と呼ばれる相互扶助の文化だ。子育てを核家族だけで抱え込まず、親族・地域全体で担う。「子どもは地域で育てる」という発想が、育児の負担を分散している。

豊かさとコミュニティ。東京と沖縄の数字は、少子化を考えるうえで根本的な問いを突きつけている。

## 「東京に生まれた子ども」が減るとどうなるか

東京の人口は現在約1,400万人。しかし出生率1.04が続けば、人口を維持するために必要な2.07を大きく下回り、長期的には人口減少が避けられない。

現在は地方からの人口流入が東京の人口を維持しているが、地方の人口が減れば「供給源」も枯渇する。

東京の少子化は、東京だけの問題ではない。

都道府県別の出生率データを確認できます。&nbsp;

https://www.japan-stats.com/detail/birth-rate（https://www.japan-stats.com/detail/birth-rate）

出典：厚生労働省 人口動態統計（2022年）

#出生率 #少子化 #東京 #統計 #データで見る日本
`,n900f76435146:`
あなたが今と同じ仕事を、青森県でしていたとしたら。

最低賃金は**853円**。東京の**1,072円**と比べると、219円の差がある。

月160時間働くと、月約3.5万円の差。年間では**約42万円**になる。

同じ仕事をしているのに、住む場所が違うだけで、年42万円の差がつく。これが今の日本の現実だ。

## 日本の最低賃金の仕組み

日本の最低賃金は、都道府県ごとに設定される「地域別最低賃金」という制度をとっている。

物価水準・経済状況・産業構造の違いを反映するためだ。一見合理的に聞こえるが、裏を返せば「生まれた場所・住む場所で報酬が決まる」という構造でもある。

**最低賃金が高い都道府県（2023年度）**

- 東京都：1,072円
- 神奈川県：1,071円
- 大阪府：1,064円
**最低賃金が低い都道府県（2023年度）**

- 青森・岩手・秋田・山形・沖縄など：853円
東京と地方の差は219円。パーセンテージで言えば約25%の差だ。

## 42万円の差は何を意味するか

年42万円という差を、具体的にイメージしてみよう。

- 旅行なら、海外旅行が2〜3回できる
- 貯金なら、10年で420万円の差になる
- 生活費なら、家賃が月3.5万円違う家に住める
最低賃金で働く人にとって、この差は「生活の質」に直結する。地方の非正規労働者・パートタイム労働者にとって、42万円は決して小さな数字ではない。

## 格差は縮まっているのか

近年、政府主導で最低賃金の引き上げが続いており、地域間格差は少しずつ縮小傾向にある。

2013年には最大格差が約200円だったが、引き上げの速度は都市部の方が速いため、絶対額の差はむしろ広がっているという見方もある。

「全国一律の最低賃金」を求める声も上がっているが、地方の中小企業への影響を懸念する声も根強い。地方の企業が東京と同じ最低賃金を払えるかどうか、という問題があるからだ。

## 「どこで働くか」で人生が変わる時代

リモートワークの普及で、「東京の仕事を地方でする」という選択肢が現実的になってきた。

東京の給与水準で、地方の物価で生活できれば、実質的な豊かさは大きく上がる。最低賃金の格差が議論される一方で、「働く場所」の自由化が新しい格差解消の道になるかもしれない。

42万円という差は、旅行1回分でも、貯金の差でも、生活の質の差でもある。数字は静かに、問いかけている。「どこで生まれ、どこで働くか」で、人生の報酬は変わっていいのか、と。

都道府県別の所得・給与データを確認できます。

https://www.japan-stats.com/detail/income（https://www.japan-stats.com/detail/income）

出典：厚生労働省 最低賃金（2023年度）、内閣府 県民経済計算

#最低賃金 #格差 #統計 #労働 #データで見る日本
`,n941afa151bbb:`
「最近、物騒になったよね」

そう感じている人は多いだろう。ニュースを見れば毎日のように犯罪の報道がある。「昔は良かった」「治安が悪化している」という声はSNSでも絶えない。

しかしデータは、まったく逆のことを言っている。

## 20年で4分の1以下に激減した犯罪件数

日本の刑法犯認知件数の推移を見てみよう。

- 2003年：**約285万件**（ピーク）
- 2010年：約161万件
- 2015年：約100万件
- 2022年：**約70万件**
20年間で、4分の1以下に激減した。

これは体感とまったく逆の数字だ。「物騒になった」という感覚と、「犯罪が激減している」というデータ。この乖離はなぜ生まれるのか。

## 「体感治安」と「統計」が乖離する理由

**SNSとニュースの影響**

犯罪情報がSNSで拡散されやすくなり、実際の発生件数は減っていても「見える件数」が増えた。人間は「見た回数」で頻度を判断するため、体感治安が悪化する。

テレビのニュースも「凶悪犯罪」を大きく取り上げる傾向があり、「珍しいから報道される」ものが「よくあること」に見えてしまう。

**高齢化による「記憶の美化」**

「昔は良かった」という感覚は、単純に過去の美化という側面もある。実際には1990年代〜2000年代初頭が犯罪のピークだったが、その記憶は薄れやすい。

## なぜ犯罪は減ったのか

**防犯カメラの爆発的普及**

2000年代以降、街中への防犯カメラの設置が急速に進んだ。「撮られている」という意識が、犯罪の抑止力になっている。

**高齢化の影響**

犯罪の多くは若年層が関わっている。少子高齢化で若年層が減ることは、皮肉にも犯罪件数の減少につながる。

**スマートフォンの普及**

スマートフォンの普及で「人の目」が増えた。誰もがカメラを持ち歩く時代、犯罪の目撃・記録がしやすくなった。

## 都道府県別の「安全度」

都道府県別に見ると、人口10万人対の犯罪認知件数は：

**件数が多い（都市部）**

- 大阪府：528件
- 東京都：568件
- 愛知県：468件
**件数が少ない（地方）**

- 秋田県・岩手県：248〜298件台
ただし注意が必要なのは、都市部ほど「届け出率」が高いという点だ。地方では「まあいいか」で済ませるケースも多く、認知件数が少ない＝犯罪が少ないとは一概に言えない。

データを読むとき「何を測っているか」を問い直す習慣が、情報リテラシーの第一歩だ。

「物騒になった」という体感は、メディアとSNSが作り出した幻かもしれない。

都道府県別の犯罪率データを確認できます。

https://www.japan-stats.com/detail/crime-rate（https://www.japan-stats.com/detail/crime-rate）

出典：警察庁 犯罪統計（2022年）

#犯罪率 #治安 #統計 #データで見る日本 #社会問題
`,na5094e6416a0:`
埼玉県民の平均通勤時間は、片道**58分**。

全国1位だ。

神奈川54分、千葉52分と首都圏が上位を占める。一方、山形・島根・高知は22〜24分と全国最短水準。埼玉と山形では、**2.6倍もの差**がある。

## 「年間480時間」という見えないコスト

年間250日出勤するとして、計算してみよう。

埼玉県民は往復で約480時間、通勤に費やしている計算になる。

480時間とは——丸々**20日分**。つまり1ヶ月の稼働日数に相当する時間を、毎年電車の中で過ごしているということだ。

この時間、基本的には「何も生まれない」。睡眠時間を削り、家族との時間を削り、趣味の時間を削って捻出している。仮に時給2,000円換算すれば、年間96万円分の時間だ。

## 「東京の給与で埼玉に住む」は本当にお得か

「でも東京の給与をもらえるから」という反論もある。確かに埼玉から東京に通勤する人の多くは、埼玉の企業より高い給与を得ているだろう。

しかし計算してみると、差は思ったより小さい。

**見えにくい通勤コスト**

- 定期代：年間15〜20万円
- 通勤中の飲食・コンビニ：年間5〜10万円
- 疲労による医療費・栄養補助食品：年間数万円
- 長時間通勤による睡眠不足→パフォーマンス低下：数値化困難
さらに「時間コスト」を加えると、「東京の給与で埼玉に住む」ことの経済的メリットは、数字ほど大きくないかもしれない。

## 通勤時間と「生活満足度」の関係

研究によれば、通勤時間が長いほど生活満足度・幸福度が下がる傾向がある。

特に「不規則な遅延」が精神的ストレスになりやすく、毎日の電車遅延に慣れることはなく、蓄積されていくという研究結果もある。

通勤時間が最短クラスの山形・島根・高知では、同じ時間と労力を家族との団らん・趣味・睡眠に充てられる。給与水準は都市部より低くても、「豊かな時間」は多いかもしれない。

## リモートワークが変えた「通勤の価値」

コロナ禍以降、リモートワークの普及で通勤時間の価値観は大きく変わった。

「通勤なし」という選択肢が現実的になった今、埼玉在住者が東京の仕事をフルリモートでできれば、480時間が丸ごと返ってくる。これは生活の質の劇的な向上だ。

逆に「出社必須」の仕事を続ける場合、通勤時間という「見えない格差」は残り続ける。

「どこに住むか」の選択が、かつてないほど重要な時代になっている。

山形22分と埼玉58分の差が示す2.6倍の差——この数字が意味する生活の違いを、一度じっくり想像してみてほしい。

都道府県別の通勤時間データを確認できます。&nbsp;

https://www.japan-stats.com/detail/commute-time（https://www.japan-stats.com/detail/commute-time）

出典：総務省 社会生活基本調査

#通勤時間 #埼玉 #働き方 #統計 #データで見る日本
`,n73ac313365a0:`
「大阪って怖いよね」

そう言われると、多くの人が頷く。ニュースで大阪の事件が取り上げられるたびに、そのイメージは強化されていく。

しかしデータを見ると、まったく別の景色が広がっている。

## 実は東京の方が犯罪件数が多い

人口10万人あたりの刑法犯認知件数（2022年）を見てみよう。

- **東京都：568件**
- **大阪府：528件**
そう、東京の方が多いのだ。

「大阪は危険」というイメージを持っている人にとって、これは意外な数字かもしれない。絶対数でも人口規模で補正しても、東京の方が犯罪認知件数は多い。

それでも「怖い街」のイメージが大阪に集中しているのはなぜか。文化的なステレオタイプと統計の乖離は、なかなか興味深い現象だ。

## 「認知件数」が示すものと示さないもの

ただしここで注意が必要だ。「認知件数」は「届け出られた件数」であって、実際の犯罪発生数ではない。

都市部ほど被害届を出す文化がある。地方では「まあいいか」「警察に行くのが面倒」で済ませるケースも多いとされる。

秋田・岩手・福井などの地方県が200件台と低いのは、本当に安全なのか、それとも届け出が少ないのか——統計はそこまで教えてくれない。

**「何を測っているか」を問い直すことが、データリテラシーの第一歩だ。**

## 全国的には劇的に安全になっている

さらに驚くべきことがある。

日本全体で見ると、犯罪件数は過去20年で劇的に減少している。

- 2003年（ピーク）：約285万件
- 2022年：約70万件
**20年で4分の1以下に激減した。**

「最近物騒になった」という体感とは真逆の数字だ。防犯カメラの普及、高齢化による若年層の減少、スマートフォンによる「人の目」の増加など、複合的な要因が犯罪を抑制している。

## 大阪のイメージはどこから来たのか

歴史的に見ると、大阪には西成区・釜ヶ崎（あいりん地区）のような日雇い労働者が集まる地区があり、高度経済成長期から治安の悪い地域として知られていた。

そのイメージが長年メディアで繰り返され、「大阪＝危険」というステレオタイプが形成された。実態がどう変わっても、一度できたイメージはなかなか更新されない。

データは、私たちの「常識」を静かに揺さぶる。

「大阪は危険」という思い込みを、あなたはまだ持っていないか？

都道府県別の犯罪率データはこちら&nbsp;

https://www.japan-stats.com/detail/crime-rate（https://www.japan-stats.com/detail/crime-rate）

出典：警察庁 犯罪統計（2022年）

#犯罪率 #大阪 #統計 #思い込み #データで見る日本
`,n6f8309574d48:`
「お医者さんは都市に集まっている」

そう思っている人は多いだろう。特に東京には医療機関が多く、医師も豊富というイメージがある。

しかしデータを見ると、少し違う景色が見えてくる。

## 医師数ランキング、1位は京都だった

人口10万人あたりの医師数（2022年）を見てみよう。

**医師数が多い都道府県**

- 京都府：338人
- 東京都：334人
- 徳島県：325人
- 高知県：310人
- 岡山県：305人
1位は京都府。東京ではない。

しかも上位には徳島・高知・岡山など、人口規模では決して大きくない地方都市が並んでいる。

## なぜ京都・徳島・高知に医師が多いのか

答えは**大学病院の立地**にある。

医師は大学の医学部で養成され、卒業後は大学病院やその関連病院に勤務することが多い。大学病院が集積する地域では、医師数が多くなる。

京都には京都大学・京都府立医科大学など複数の医科系大学がある。徳島大学医学部、高知大学医学部も地域の医師数を押し上げている。

一方、東京は大学病院こそ多いが、人口も多いため「人口比」では京都に及ばない。

## 全国最少は埼玉県の174人

衝撃的なのは、全国最少が埼玉県の**174人**という事実だ。

全国平均269人と比べると、約35%も少ない。

埼玉県の人口は約730万人。それだけの人口を抱えながら、医師数は全国最低水準だ。

なぜか。埼玉はベッドタウンとして発展した歴史があり、医科大学が少ない。「東京の病院に行けばいい」という意識もあり、医療インフラの整備が後回しにされてきた。

## 「近くて遠い」医療の現実

東京に隣接しているにもかかわらず、医師数では全国最低水準——この矛盾が埼玉県民の医療アクセスに影を落としている。

急病のときに「東京の病院まで行く」という選択肢は、現実的ではない。高齢化が進む中、埼玉の医療問題は今後ますます深刻になる可能性がある。

**「首都圏なら医療が充実している」という思い込みは、データには存在しない。**

地域によって医師数がこれほど違うという現実は、あまり知られていない。

あなたが住む都道府県の医師数は、全国で何位だろうか。

都道府県別の医師数データはこちら

https://www.japan-stats.com/detail/doctor-count（https://www.japan-stats.com/detail/doctor-count）

出典：厚生労働省 医師・歯科医師・薬剤師統計（2022年）

#医師数 #医療格差 #埼玉 #京都 #統計 #データで見る日本
`,na10c2cbdbf2e:`
2023年、日本の空き家の数が過去最多を更新した。

**空き家数：約900万戸** **空き家率：13.8%**

つまり今、日本の住宅の約7軒に1軒が空き家だ。

しかしこれはまだ序章に過ぎない。

## 2033年には「3軒に1軒」になるという予測

野村総合研究所の試算によれば、2033年には空き家率が**30%を超える**可能性があるという。

3軒に1軒が空き家——。

これは単なる数字の話ではない。空き家が増えると、街の景観が荒廃し、治安が悪化し、不動産価値が下がり、地域コミュニティが崩壊していく。

## 今すでに20%を超えている県がある

都道府県別に見ると、すでに深刻な地域がある。

**空き家率が高い都道府県（2023年）**

- 山梨県：21.3%
- 秋田県：21.7%
- 和歌山県：21.2%
これらの地域では、5軒に1軒以上がすでに空き家だ。

一方、都市部は比較的低い。東京都は10.2%、神奈川県は11.2%。人口が集中する都市と、人口が流出する地方の差が、空き家率に如実に表れている。

## なぜ空き家は増えるのか

**① 人口減少と高齢化**

持ち主が亡くなっても、相続した子どもが別の場所に住んでいるため、空き家になる。人口が減れば需要も減り、買い手も借り手も見つからない。

**② 「実家を売れない」問題**

日本では空き家を放置しても、固定資産税の軽減措置（住宅用地特例）が適用されていたため、売るより持ち続ける方が得だった。2015年に「空き家対策特別措置法」が施行されたが、効果は限定的だ。

**③ 新築信仰**

日本人は新築を好む文化がある。中古住宅市場が発達している欧米と違い、日本では「中古は価値が下がる」という意識が強い。空き家があっても、需要が新築に流れる。

## 「負動産」という新しい問題

相続した実家が売れない、貸せない、でも維持費はかかる——「負動産」という言葉が生まれたのはここ数年のことだ。

固定資産税・維持管理費・解体費用。空き家を持つことのコストは、想像以上に重い。

一方で、移住者にとっては「格安で家が手に入るチャンス」でもある。空き家バンクを活用した移住が増えており、うまく活用できれば都市の高コスト生活から脱却できる。

空き家率の上昇は「衰退のサイン」でもあり、「チャンスのシグナル」でもある。

2033年の日本がどうなるか、今のデータはその予兆を静かに示している。

都道府県別の空き家率データはこちら

https://www.japan-stats.com/detail/vacancy-rate（https://www.japan-stats.com/detail/vacancy-rate）

出典：総務省 住宅・土地統計調査（2023年）

#空き家 #人口減少 #不動産 #移住 #統計 #データで見る日本
`,n2df69add6ffd:`
2035年。

団塊の世代（1947〜1949年生まれ）が全員85歳以上になる年だ。

この年に向けて、日本は静かな、しかし深刻な危機に向かっている。

**介護職員の不足だ。**

## 数字が示す危機の規模

厚生労働省の推計によれば、2035年には介護職員が約32万人不足するとされる。

現在の介護職員数は約215万人。32万人不足するということは、約15%が足りないということだ。

人口10万人あたりの介護職員数を都道府県別に見ると：

**介護職員が多い県**

- 高知県・島根県・鳥取県：全国上位
**介護職員が少ない県**

- 東京都・神奈川県・埼玉県：全国下位
皮肉なことに、高齢者の絶対数が多い都市部ほど、人口比での介護職員が少ない。

## なぜ介護職員は足りないのか

**① 給与が低い**

介護職員の平均給与は全産業平均より約5万円低い。体力的・精神的に過酷な仕事にもかかわらず、報酬が見合わないと感じる人が多い。

**② 離職率が高い**

介護業界の離職率は約15%（全産業平均10%）。体力的な限界、利用者・家族との関係のストレス、夜勤の負担などが離職を促している。

**③ 若者が集まりにくい**

少子化で若年層が減る中、介護という職種に若者を引き付けることが年々難しくなっている。AIやロボットへの期待もあるが、現時点では人の手が不可欠な場面が多い。

## 「自分ごと」として考える

「介護職員が足りない」という話は、他人事に聞こえるかもしれない。

しかし現実には、介護職員が足りなければ、親の介護施設が見つからない、在宅介護の支援が受けられない、という形で私たちの生活に直撃する。

「老後の心配」という漠然とした不安の背後に、介護職員不足という具体的な課題がある。

## 地方の方が深刻な理由

都道府県別に見ると、介護職員不足は地方でより深刻だという逆説がある。

地方は高齢化が進んでいるにもかかわらず、若い担い手が都市に流出している。地元に残る若者が少ない分、介護を担う人材が育ちにくい。

一方、都市部は介護職員の絶対数は多いが、高齢者の数も多いため、比率では追いつかない。

どちらの方向からアプローチしても、2035年に向けて状況は厳しい。

介護職員が足りない——この静かな危機に、日本社会はどう向き合うのか。

データは現実を映す鏡だ。見て見ぬふりをしても、時間は確実に進んでいる。

都道府県別の介護職員数データはこちら

https://www.japan-stats.com/detail/care-worker（https://www.japan-stats.com/detail/care-worker）

出典：厚生労働省 介護サービス施設・事業所調査（2022年）

#介護 #高齢化 #2035年問題 #統計 #データで見る日本
`,n18402eaa3994:`
あなたが今と同じ仕事を、青森県でしていたとしたら。

最低賃金は**853円**。東京・埼玉の**1,072円**と比べると、219円の差がある。

月160時間働くと、月約3.5万円の差。年間では**約42万円**になる。

同じ仕事をしているのに、住む場所が違うだけで、年42万円の差がつく。これが今の日本の現実だ。

## 最低賃金ランキング——都市と地方で219円の差

最低賃金（2023年度）を都道府県別に見てみよう。

**最低賃金が高い都道府県**

- 1位 東京都：1,072円（埼玉県と同率）
1位 埼玉県：1,072円
3位 神奈川県：1,071円
4位 大阪府：1,023円
5位 愛知県：986円

最低賃金が低い都道府県
最低 青森県・秋田県・高知県など：853円
岩手県・山形県：854円
注目すべきは、最低賃金が最も高い県の一つが**埼玉県（1,072円）**という点だ。埼玉は通勤時間が全国最長（58分）、医師数が全国最少（174人/10万人）という「インフラ格差」を抱えながら、最低賃金は東京と並んで全国最高水準——賃金の豊かさと生活インフラの格差が同居する、独特の構造がある。

## 42万円の差は何を意味するか

年42万円という差を、具体的にイメージしてみよう。

- **旅行**なら、海外旅行が2〜3回できる。
- **貯金**なら、10年で420万円の差になる。
- **家賃**なら、月3.5万円高い部屋に住める。
- **食費**なら、月3.5万円分の食材の差
。最低賃金で働く人にとって、この差は「生活の質」に直結する。パートタイム・非正規労働者——特に地方の若者や子育て中の女性——にとって、42万円は決して小さな数字ではない。

## 日本の最低賃金制度の仕組み

なぜこれほどの差が生まれるのか。日本の最低賃金制度を理解することが必要だ。

日本の最低賃金は、都道府県ごとに設定される「地域別最低賃金」という制度をとっている。物価水準・経済状況・産業構造の違いを反映するためだ。

一見合理的に聞こえる。東京の物価は高いから賃金も高くていい、地方は物価が安いから低くてもいい——という論理だ。

しかし「生まれた場所・住む場所で報酬が決まる」という構造は、地域間の経済格差を固定化する側面もある。地方の若者が「東京に出ないと稼げない」と感じる一因になっている。

## 格差は縮まっているのか

近年、政府主導で最低賃金の引き上げが続いており、地域間格差は少しずつ縮小傾向にある。

2013年には最高（東京）と最低（地方）の差が約200円だったが、現在も約219円と大きな変化はない。引き上げの速度は都市部の方が速いため、絶対額の差はなかなか縮まらない。

「全国一律の最低賃金」を求める声も上がっているが、地方の中小企業への影響を懸念する声も根強い。地方の製造業・農業・サービス業が東京と同じ最低賃金を払えるかどうか、という問題があるからだ。

## 物価を考慮すると「実質的な差」は変わる

ここで重要な視点がある。最低賃金の差だけを見るのではなく、物価を考慮した「実質的な購買力」で比べることだ。

消費者物価指数（東京=100）で見ると、青森県は約97.8。東京より約2%安い。

しかし最低賃金の差は約20%。物価の差（2%）は最低賃金の差（20%）をはるかに下回る。つまり「地方は物価が安いから最低賃金が低くていい」という論理は、数字的に成立しない部分がある。

## リモートワーク時代の新しい選択

コロナ禍以降、最低賃金の格差の意味が変わりつつある。

「東京の給与水準でリモートワークをしながら、地方で暮らす」——この選択が現実的になった。東京水準の給与を維持しながら青森の物価で生活できれば、実質的な豊かさは大幅に上がる。

ただしこれは「IT・クリエイティブ・専門職」など一部の職種に限られた話だ。最低賃金が直撃する非正規・サービス業・製造業の労働者には、この恩恵は届きにくい。

「リモートワーク」という選択肢が格差を広げる可能性も、データは示唆している。

東京1,072円、青森853円。

219円の差は、年42万円になる。10年で420万円、30年の労働生活で1,260万円の差だ。

「どこで生まれ、どこで働くか」で、人生の報酬は変わっていいのか。

この問いに、データは答えを出さない。しかし現実を知ることが、考える第一歩だ。

都道府県別の所得・給与データはこちら→ 👉 https://www.japan-stats.com/detail/income（https://www.japan-stats.com/detail/income）

出典：厚生労働省 最低賃金（2023年度）

#最低賃金 #格差 #統計 #労働 #データで見る日本
`,n72e0935d7143:`
富山県の持ち家率は76.8%で全国1位。東京都は45.0%で全国最低水準。

同じ日本で、持ち家率に30ポイント以上の差がある。

「持ち家を持てない東京が貧しい」のか。「狭い家に縛られる富山が不自由」なのか。この数字が映し出す、二つの「豊かさのモデル」を読んでいきたい。

## なぜ富山県民は家を建てるのか

富山には「婚家造り（こんかづくり）」という言葉がある。

結婚したら、親の家より大きな家を建てることが一人前の証し——という、この地域に根付いた価値観だ。これは単なる見栄ではなく、いくつかの経済的・文化的な合理性に支えられている。

**共働き率の高さ**

富山県の共働き率は全国トップクラスだ。夫婦2人が安定して働ければ住宅ローンを組む余裕が生まれる。「共働きで家を建てる」というモデルが、富山では当たり前として機能している。

**土地の継承**

3世代同居が多い富山では、親から土地を受け継ぐケースが多い。東京では「土地を買うところから始める」のが当たり前だが、富山では建物だけのローンで済むことも多い。この差は数千万円規模になる。

**雪国の「大きな家」需要**

富山は豪雪地帯だ。冬の間に大量の荷物・農機具・雪かき道具などを収納するスペースが必要で、自然と家が大きくなる。賃貸では対応しにくい「収納」の問題が、持ち家需要を後押しする。

## 持ち家が生む「複利効果」

持ち家率の高さは、富山の様々な数字に連鎖している。

**離婚率との関係**

富山県の離婚率は1.06件/千人で全国最低水準だ。持ち家という「共有財産」は、離婚のコストを格段に上げる。財産分与・ローンの残高・どちらが住み続けるか——家があることで「別れる」という選択の障壁が高くなる。

家という共同プロジェクトが夫婦の絆を強める、という側面は否定できない。

**生活保護率との関係**

富山県の生活保護率は3.3人/千人で全国最低水準。全国平均16.3人の約5分の1だ。持ち家があれば「住む場所」は確保されている。住居費がかからない分、生活が困窮しても生活保護が必要になりにくい。

「家を持つ」ことが、公的なセーフティネットの代わりを果たしているとも言える。

**3世代同居と育児コスト**

持ち家に3世代が同居すれば、育児コストが大幅に下がる。保育園の待機問題も、祖父母が子どもを見てくれれば解決する。富山の出生率が全国平均より高めなのは、この「大家族で育てる」構造と無関係ではないだろう。

## なぜ東京では持ち家が難しいのか

東京の持ち家率が低い理由は、単純明快だ。高すぎる地価だ。

都心の一戸建ては1億円超えが珍しくない。郊外でも5,000万〜8,000万円は覚悟が必要だ。年収500万円のサラリーマンが35年ローンを組んでも、毎月の返済と生活費を両立させることは容易ではない。

その代わり東京には、多様な賃貸住宅が充実している。「借りる文化」が根付き、転職・転居・ライフスタイルの変化に柔軟に対応できる。持ち家という「固定資産」を持たないことで、身軽に動ける自由がある。

これは一種の「豊かさのトレードオフ」だ。

## 「持ち家」という概念が変わる時代

リモートワークの普及で、「どこに住むか」の自由度が増した。

東京の高い地価を避けて富山に移住し、持ち家を建てる——という選択が現実的になってきた。実際に地方移住者の多くが「持ち家を持ちたい」という動機を挙げている。

一方で「持ち家は負債だ」という考え方も広まっている。修繕費・固定資産税・将来の流動性の低さを考えると、持ち家が必ずしも「資産」とは言えないという議論だ。

持ち家率76%の富山と45%の東京。

どちらが「豊か」かは、何を豊かさと定義するかによって変わる。

安定・共助・根を張る豊かさか。自由・流動性・選択肢の豊かさか。

二つの県の数字は、日本人の「豊かさ観」の多様性を映し出している。

都道府県別の持ち家率データはこちら→ 👉 https://www.japan-stats.com/detail/homeownership（https://www.japan-stats.com/detail/homeownership）

出典：総務省 住宅・土地統計調査（2023年）

#富山 #持ち家 #東京 #文化 #統計 #データで見る日本
`,n2fb75f95a0cc:`
高知県と青森県。

同じ日本で、同じ20Lの水を使っているのに、月の水道料金が約2倍違う。

高知県の約3,280円に対し、青森県は約1,680円。年間にすると約1万9千円の差だ。10年住めば19万円、20年住めば38万円になる。

なぜ同じ「水」に、これほどの値段の差がつくのか。そしてこの差は、今後どうなっていくのか。

## 水道料金ランキング——山間部が高く、平野部が安い

20㎥/月あたりの水道料金（基本料金含む）を都道府県別に見ると：

**水道料金が高い都道府県**

- 1位 高知県：約3,280円/月
- 2位 島根県：約3,180円/月
- 3位 鳥取県：約2,980円/月
**水道料金が低い都道府県**

- 1位 青森県：約1,680円/月
- 2位 山形県：約1,720円/月
- 3位 宮城県：約1,820円/月
高知・島根・鳥取は山間部・過疎地。青森・山形・宮城は比較的平野部が多く、水資源も豊富な地域だ。この地形の差が、水道料金の差として表れている。

## 水道料金は「地形と人口密度の値段」だ

水道料金を決める最大の要因は、インフラの維持コストだ。

水は水源から浄水場へ、浄水場から各家庭へと運ばれる。この過程に必要なパイプライン・ポンプ・貯水タンクなどの建設・維持にかかるコストが、水道料金に反映される。

**山間部では高くなる理由**

高知県・島根県・鳥取県が高い理由は、四国山地・中国山地という地形にある。水源から住宅地まで急峻な山を越えてパイプを引く必要があり、建設コストが格段に高くなる。

さらに人口密度が低い。10万人が使う水道と1万人が使う水道では、インフラのコストはほぼ変わらないが、一人あたりの負担は10倍違う。山間部の過疎地では、この構造が水道料金を押し上げる。

**青森が安い理由**

青森県は水資源が豊富で、比較的平地に水源がある地域が多い。大規模な水道システムを効率的に運営できるため、コストを抑えられる。ただし冬の凍結対策・維持管理コストは高く、これが料金に反映されていない部分もある。

## 人口減少が引き起こす「水道の危機」

ここからが本当に深刻な話だ。

水道インフラは「一度作ったら維持し続けなければならない」ものだ。全国に張り巡らされたパイプラインの総延長は約67万km——地球16周分以上に相当する。

このインフラが、今、老朽化の危機に直面している。

高度経済成長期に整備された水道管の多くが、耐用年数の40年を超えつつある。更新には莫大なコストがかかるが、人口減少で利用者が減り、料金収入も下がっている。

**悪循環の構造**

人口が減る → 水道の利用者が減る → 料金収入が下がる → インフラ維持が困難になる → 料金を上げざるを得ない → 住みにくくなる → さらに人口が減る

総務省の試算では、**2040年までに水道料金が全国平均で約40%上昇する**とされている。現在3,280円の高知が4,590円になる計算だ。過疎地ではさらに大きな値上げが予想される。

## 「水道がなくなる」という現実が起きている

極端な話だが、すでに起きていることがある。

人口が極限まで減った一部の過疎地では、水道事業を廃止して井戸水に切り替えるという選択をした地域がある。行政がコストを負担しきれなくなり、住民が自分たちで水を確保しなければならない状態だ。

「蛇口をひねれば水が出る」という当たり前が、当たり前でなくなる日が来るかもしれない。これは遠い未来の話ではなく、人口減少が進む地域では今まさに起きていることだ。

## 移住先を選ぶとき「水道料金」を確認する人は少ない

移住先を検討するとき、家賃・物価・交通アクセスは調べる。しかし水道料金まで確認する人は少ない。

年間2万円近い差は、月換算で約1,600円。家賃が月2,000円安い物件を探すのと同じ価値がある。10年・20年のスパンで考えれば、無視できない数字だ。

特に地方移住・田舎暮らしを検討している人は、山間部の水道料金が高い傾向があることを知っておくと、現実的な生活コスト計算ができる。

高知に移住した人が年間約38,000円を水道料金として払う一方、同じ生活をしている青森在住者は年間約20,000円。この差を「自然の豊かさの対価」と捉えるか、「コストの無駄」と捉えるかは人それぞれだが、知った上で判断することが重要だ。

## まとめ——水道料金は日本の縮図だ

高知3,280円、青森1,680円。

この差は単なる数字ではなく、日本の地形・人口動態・インフラ問題が凝縮された数字だ。

山がちな地形、過疎化、老朽化するインフラ、縮小する財政——毎日当たり前に使う水の値段の中に、日本社会が抱える縮図が見えてくる。

2040年に向けて水道料金は上がり続ける。その上昇幅は、人口が多い都市より、過疎が進む地方でより大きくなる。

どこに住むかという選択は、こういった「見えにくいコスト」も含めて考える時代になった。

都道府県別の水道料金データはこちら→ 👉 https://www.japan-stats.com/detail/water-rate（https://www.japan-stats.com/detail/water-rate）

出典：総務省 地方公営企業年鑑

#水道料金 #インフラ #人口減少 #移住 #統計 #データで見る日本
`,n9be45a94aa46:`
BMI25以上の肥満率（男性）、秋田県38.4%に対して東京都は約22%。

16ポイントの差がある。

「秋田県民は自己管理ができていない」「意志が弱い」——そう思った人がいるとしたら、少し待ってほしい。この差は個人の意志の差ではなく、環境の差だ。データを丁寧に読むと、その構造が見えてくる。

## 秋田の冬という「運動できない環境」

秋田市の年間雪日数は約124日。3日に1日は雪が降る計算だ。

12月から3月にかけての4か月間、秋田の生活は雪に支配される。歩道は雪に覆われ、横断歩道は凍結し、公園は使えない。ウォーキング・ジョギングは、文字通り「命がけ」になる日もある。

この期間、多くの秋田県民の移動手段は車一択になる。玄関を出て車に乗り、目的地の駐車場に止め、また車に乗って帰る。一日の歩数が1,000歩を下回る日も珍しくない。

東京ではどうか。電車通勤で毎日7,000〜10,000歩歩くことは普通だ。「運動している意識」がなくても、都市のインフラが自動的に歩かせてくれる。

**同じ「運動しない人」でも、住む場所によって消費カロリーが違う。**

これが16ポイントの差の最大の要因だ。

## 食文化という「変えにくい環境」

次の要因は食文化だ。

東北地方は塩分摂取量が多い食文化として知られている。漬物・塩魚・いぶりがっこ・きりたんぽ鍋——秋田の伝統的な食事は、美味しいが塩分が高いものが多い。

塩分の多い食事は食欲を増進させ、カロリー過多になりやすい。また保存食として発酵食品・塩漬けが多く使われる文化は、長い冬の知恵として根付いてきた。

「塩分を減らせばいい」と簡単に言えるが、数十年・数百年にわたって形成されてきた食文化は、個人の努力だけで変えられるものではない。

## 飲酒習慣という「コミュニティの文化」

秋田県の男性飲酒率は全国でも高水準だ。

長い冬の夜、仲間と集まって飲む——これは単なる習慣ではなく、地域コミュニティの絆を強める文化的な機能を持っている。「飲み会」が人間関係の潤滑油として機能する社会では、飲酒を減らすことは社会的な孤立につながりかねない。

アルコールのカロリーは見落とされがちだが、ビール中ジョッキ1杯で約200kcal。毎日2〜3杯を年間通じて飲めば、それだけで相当なカロリーになる。

## 肥満が平均寿命に与える影響

秋田県の男性平均寿命は**79.5歳で全国最低水準**。全国平均81.1歳より1.6歳短い。

肥満は糖尿病・心疾患・脳卒中・一部のがんのリスクを高める。これらの病気は「静かに進行する」特徴があり、自覚症状が出たときには深刻な状態になっていることも多い。

肥満率が高い秋田で平均寿命が短い——この相関は偶然ではない。「気候と食文化が健康格差を生む」という構造が、データに表れている。

## 「環境を変える」という発想

個人の意志でどうにかなる問題ではないとしたら、何が変わる必要があるのか。

いくつかの取り組みが始まっている。

屋内運動施設の充実、冬でも歩きやすい歩道の整備、減塩食の普及啓発、健康診断の受診率向上——。これらは個人への呼びかけではなく、「環境の設計」を変えようとする試みだ。

秋田県は近年、健康寿命延伸に向けた取り組みを強化している。数字が変わるには時間がかかるが、問題を「個人の責任」から「社会の設計」の問題として捉え直すことが、第一歩だ。

秋田38%、東京22%。

この16ポイントの差は、秋田県民の意志の弱さを示していない。雪国で冬に運動することの構造的な難しさ、長年培われてきた食文化、地域コミュニティの飲酒文化——これらの「環境」が作り出した差だ。

数字を見るとき、「なぜその数字になったか」を問うことが、データリテラシーの本質だ。

都道府県別の健康データはこちら 

https://www.japan-stats.com/detail/obesity-rate（https://www.japan-stats.com/detail/obesity-rate）

出典：厚生労働省 国民健康・栄養調査

#肥満率 #秋田 #東北 #健康 #環境 #統計 #データで見る日本
`,n25f5c9429436:`
警察官数（人口10万人対）全国1位：東京都、約290人。 刑法犯認知件数（人口10万人対）全国最高水準：東京都、568件。

同じ都市が、両方のランキングで上位にいる。

「警察官が多いから安全」という常識は、このデータの前では成立しない。警察官の数と犯罪率の関係を、データで丁寧に読んでいきたい。

## 警察官が多い県、少ない県

まず全体像を把握しよう。

**警察官が多い都道府県（人口10万人対）**

- 東京都：約290人
- 北海道：約250人
- 沖縄県：約240人
- 高知県・島根県：約230人台。
**警察官が少ない都道府県（人口10万人対）**

- 埼玉県：約135人
- 奈良県・滋賀県：約145人台。
- 神奈川県・千葉県：約155人台。
全国平均は約200人。東京と埼玉では、2倍以上の差がある。

## なぜ東京・北海道・沖縄が多いのか

それぞれ異なる理由がある。

**東京：犯罪対応のため**

東京の刑法犯認知件数は568件/10万人で全国最高水準。繁華街・歓楽街・観光地・企業密集エリア——人と金が集まるところに犯罪も集まる。対応するための警察官が必要になる。

これは「鶏が先か卵が先か」の問題に似ている。犯罪が多いから警察官を増やしたのか、警察官が多いから犯罪が可視化されるのか。おそらく両方だ。

**北海道：面積のため**

北海道の面積は全国の22%を占める。広大な地域をカバーするには、人口比以上の警察官が必要だ。過疎地のパトロール・山岳救助・農村部の治安維持——都市とは異なる業務がある。

**沖縄：米軍基地という特殊事情**

沖縄には日本最大規模の米軍基地がある。基地周辺の警備、米軍関係者が絡む事案への対応、観光客の多さによる犯罪対応——本土とは異なる治安上の課題がある。

## なぜ埼玉・奈良・滋賀が少ないのか

これら3県に共通するのは「大都市のベッドタウン」という性格だ。

東京・大阪・京都の近郊として発展した歴史があり、住民は「困ったら隣の大都市に行けばいい」という構造の中で生活してきた。独自の都市基盤よりも「隣に依存する」形で成長したため、独自のインフラ整備が後回しになりやすい。

埼玉県は医師数でも全国最低、警察官でも全国最低。「首都圏だから安心」という思い込みとは裏腹に、インフラ格差が存在する。

## 「警察官が多い＝安全」ではない、という逆説

ここで本題の逆説に戻ろう。

警察官が最も多い東京の犯罪率は全国最高水準。警察官が少ない奈良・秋田・岩手の犯罪率は全国最低水準だ。

この逆転現象が示すのは、**犯罪率は警察官の数ではなく、地域の社会経済的な要因に強く影響される**ということだ。

犯罪率が低い地域の共通点を見ると——人口流動が少ない、地域コミュニティが強い、経済的な絶望感が相対的に小さい、見知らぬ人が少ない——といった特徴がある。

警察官は犯罪に対応するためにいる。しかし犯罪の根本的な原因は、警察では解決できない社会経済的な問題から来ていることが多い。

## 「体感治安」と「統計」の永遠の乖離

最後に、もう一つの視点を加えたい。

警察官が多い地域ほど、パトロールが頻繁で「見られている感」が強く、体感的には安心かもしれない。しかし統計的な犯罪率は、それとは別の話だ。

逆に、警察官が少なくて犯罪率も低い地方の農村では、「鍵をかけない」「知らない人でも挨拶する」という文化が自然な防犯になっている。コミュニティの力が、警察の代わりを果たしている。

「安全」とは何か。

警察官の数で測るのか、犯罪率で測るのか、それとも住民が安心して暮らせているかで測るのか。

データは現実の一側面を示すが、「安全」という概念は数字だけでは語れない複雑さを持っている。

警察官が最も多い都市に、犯罪も最も多い。

このデータの逆説は、「安全とは何か」という根本的な問いを私たちに突きつけている。

都道府県別の警察官数・犯罪率データはこちら

https://www.japan-stats.com/detail/police-count（https://www.japan-stats.com/detail/police-count）

出典：警察庁 警察統計（2022年）

#警察 #犯罪率 #東京 #埼玉 #統計 #データで見る日本
`,n656180dd7d33:`
移住を考えるとき、多くの人は「自然が豊か」「食べ物が美味しい」「人が温かい」という印象で場所を選ぶ。

しかしその移住が「成功」するかどうかは、印象ではなくデータで決まることが多い。

移住後に「こんなはずじゃなかった」とならないために、見ておくべき5つの統計データを紹介する。感覚ではなく、数字で移住先を選ぼう。

## ① 医師数（人口10万人対）——医療へのアクセスは老後の命綱

移住先の医療環境は、老後・子育て・緊急時に直結する最重要指標だ。

**医師数が多い都道府県**

- 1位 京都府：338人
2位 東京都：335人
3位 徳島県：325人
医師数が少ない都道府県
最少 埼玉県：174人
2位 茨城県：192人
3位 静岡県：202人
全国平均は約269人。最多の京都と最少の埼玉では、約2倍の差がある。

「近くに病院があるか」だけでなく「専門医にかかれるか」という視点が重要だ。山間部・過疎地では、かかりつけ医まで車で30分、専門医にかかるために仙台や東京まで行くというケースも珍しくない。

子育て世代なら小児科の有無、高齢者なら循環器・整形外科などの専門医へのアクセスを、移住前に必ず確認しよう。

👉 https://www.japan-stats.com/detail/doctor-count（https://www.japan-stats.com/detail/doctor-count）

## ② 空き家率——「格安物件」の裏にあるリスク

空き家率が高い地域には、安く家が手に入るチャンスがある。しかし同時に、地域が衰退しているサインでもある。

**空き家率が高い都道府県（2023年）**

- 1位 秋田県：21.7%
2位 山梨県：21.3%
3位 和歌山県：21.2%
空き家率が低い都道府県
最少 埼玉県：10.2%
2位 神奈川県：10.4%
3位 東京都：10.6%
秋田・山梨・和歌山では、5軒に1軒以上がすでに空き家だ。

空き家バンクを活用すれば数百万円で一戸建てが手に入るケースもある。しかし以下のリスクも知っておきたい。

**築年数の問題**：古い空き家は耐震基準を満たしていないケースが多く、リフォーム費用が購入価格を上回ることも珍しくない。

**インフラ縮小のリスク**：空き家率が高い地域では人口減少が進んでおり、10年後に近隣のスーパー・病院・学校が撤退するリスクが高い。

**水道料金の上昇**：人口が減れば水道の維持コストが一人あたりに重くなり、料金が上昇する。

「安さ」だけで選ばず、10年後・20年後のインフラを想像して判断しよう。

👉 https://www.japan-stats.com/detail/vacancy-rate（https://www.japan-stats.com/detail/vacancy-rate）

## ③ 人口移動率——10年後の「街の体力」を測る

その地域に人が「入ってくる」か「出ていく」かは、移住先の将来性を判断する上で重要な指標だ。

**転入超過（人が増えている）**

- 東京都：+8.4（人口千対）
- 神奈川県：+4.8
- 埼玉県：+4.2
**転出超過（人が出ていく）**

- 秋田県：-6.8
- 青森県：-4.8
- 岩手県：-4.2
人口が増えている地域は、商業施設・雇用・インフラが整いやすい。逆に人口が流出し続けている地域は、10年後に生活環境が大きく変わるリスクがある。

ただし「東京都が+8.4だから東京に移住しよう」という単純な話ではない。転入超過の大都市は物価が高く、住みやすさとは別の問題がある。

注目すべきは「微増・安定している地方都市」だ。転出超過でも減少幅が小さい地域、あるいは移住者が増加に転じている地域は、地域の活力が維持されている可能性が高い。

👉 https://www.japan-stats.com/detail/migration-rate（https://www.japan-stats.com/detail/migration-rate）

## ④ 水道料金——地味だが長期間で大きな差になる

移住先を検討するとき、家賃・物価・交通アクセスは比較する。しかし水道料金まで確認する人は少ない。

**水道料金が高い都道府県（20㎥/月）**

- 1位 高知県：3,280円
2位 島根県：3,180円
3位 鳥取県：2,980円
水道料金が低い都道府県
最安 青森県：1,680円
2位 山形県：1,720円
3位 宮城県：1,820円
最高の高知県と最低の青森県では、月1,600円・年間約1万9千円の差がある。10年で19万円、20年で38万円だ。
山間部・過疎地ほど水道料金が高い傾向がある。水源から住宅地まで長い距離を引く必要があり、少ない利用者でコストを分担するため、一人あたりの負担が増える。

さらに深刻なのは将来の見通しだ。総務省の試算では、2040年までに水道料金が全国平均で約40%上昇するとされている。人口減少が続く地方では、さらに大きな値上がりが予想される。

月の家賃が2,000円安い物件を探す感覚で、水道料金も確認しよう。

👉 https://www.japan-stats.com/detail/water-rate（https://www.japan-stats.com/detail/water-rate）

## ⑤ 生活保護率——地域の「経済的な底の深さ」を測る

やや意外な指標かもしれないが、生活保護率は「その地域の経済的な底の深さ」を示す指標として参考になる。

**生活保護率が高い都道府県（人口千対）**

- 1位 大阪府：33.5人
- 2位 北海道：30.3人
- 3位 高知県：27.4人
**生活保護率が低い都道府県**

- 最少 富山県：3.2人
- 2位 福井県：4.4人
- 3位 長野県：5.2人
全国平均は16.3人。大阪と富山では約10倍の差がある。

生活保護率が低い地域は、持ち家率が高く、地域コミュニティが強く、経済的に困窮しても支え合える環境が整っている傾向がある。富山・福井・長野は、まさにそのモデルだ。

ただし生活保護率が低い＝豊かではない、という点も重要だ。本来支援が必要な人が「迷惑をかけたくない」という意識から申請をためらっているケースもある。「助けを求めやすい地域かどうか」という視点も持ちながら見てほしい。

👉 https://www.japan-stats.com/detail/welfare-rate（https://www.japan-stats.com/detail/welfare-rate）

## まとめ：「印象」ではなく「データ」で選ぶ

確認すべき統計何がわかるか特に重要な人医師数医療環境・緊急時の安心感子育て世代・高齢者空き家率住居コスト・地域衰退リスク格安物件を探している人人口移動率10年後の街の活力長期移住を考えている人水道料金長期的な生活コストコスト意識が高い人生活保護率地域の経済的な底力老後・万が一の備えを考える人

移住は人生の大きな決断だ。印象や直感も大切だが、データという「客観的な地図」を持った上で判断することで、後悔のない選択ができる。

47都道府県のデータを地図とランキングで確認できます。 👉 https://www.japan-stats.com（https://www.japan-stats.com）

出典：各種政府統計（2022〜2023年）

#移住 #地方移住 #統計 #データで意思決定 #日本
`,n64533605342e:`
婚活がうまくいかない理由を、多くの人は「自分のスペック」や「コミュニケーション能力」に求める。

しかし統計データを見ると、もう一つの要因が浮かび上がる。**住んでいる都道府県だ。**

未婚率・離婚率——結婚に関わる統計は、都道府県によって大きく異なる。「どこに住むか」が、婚活の難易度を左右している可能性がある。

## 未婚率で見る「結婚しやすい県・しにくい県」

30代男性の未婚率（2020年国勢調査）を都道府県別に見てみよう。

**未婚率が高い都道府県（結婚しにくい環境）
1位 東京都：52.8%
2位 大阪府：48.4%
3位 神奈川県：48.2%

未婚率が低い都道府県（結婚しやすい環境）
1位 富山県：35.2%
2位 秋田県：35.4%
3位 福井県：35.4%

東京と富山では**、未婚率に約18ポイントの差がある。同じ日本で、これほど「結婚の難易度」が違う。

## 女性視点では「若年女性の流出」という問題がある

ただし「地方に行けば出会いやすい」という話には、注意が必要だ。

地方、特に農村部では若年女性が都市部に流出する傾向が強い。進学・就職で上京した女性がそのまま定住するケースが多く、地方では男女比が偏っている地域もある。

つまり「未婚率が低い地方」では、結婚している男性が多いのであって、独身女性が豊富なわけではない。男性側の視点では「出会いにくい」という逆説が生まれる可能性がある。

データを読む際は、自分の性別・状況に合わせて解釈することが重要だ。

## なぜ都市部は未婚率が高いのか

都市部で未婚率が高い理由は複合的だ。

**出会いの機会の「質」が変わった**

都市では人が多い分、知らない人との出会いは多い。しかし「知人の紹介」「地域コミュニティ」「職場での自然な出会い」という質の高い機会は、都市より地方の方が機能しやすい傾向がある。

**結婚しなくても充実した生活ができる**

東京には独身で楽しめるインフラが整っている。趣味・キャリア・人間関係——独身を謳歌できる環境では、結婚の優先度が相対的に下がる。

**経済的なプレッシャー**

東京の家賃・生活費は高く「結婚できる経済力」のハードルが上がる。「もう少し稼いでから」という先送りが起きやすい構造だ。

## 離婚率で見る「結婚が続きやすい県」

出会いだけでなく「結婚が続くか」も都道府県によって違う。

離婚率（人口千対、2022年）を見ると：

**離婚率が低い県（結婚が続きやすい）
1位 富山県：1.06
2位 新潟県：1.12
3位 石川県：1.12

離婚率が高い県
1位 沖縄県：2.10
2位 宮崎県：1.67
3位 大阪府・北海道：1.65

富山・石川・福井の北陸3県は**未婚率・離婚率ともに全国最低水準。「出会いやすく、離れにくい」環境として、データが示している。

## 婚活×都道府県の活用法

都道府県を移動して婚活するのは現実的でないかもしれないが、以下のような活用ができる。

**マッチングアプリのエリアを変えてみる**

出張や旅行のタイミングで、マッチングアプリの検索エリアを地方都市に変えてみる。未婚率が低い地域の相手と出会う確率が上がる。

**地方移住イベントへの参加**

各都道府県が開催している移住促進イベントには、地元の人と交流できる機会がある。移住の情報収集と婚活を同時に行える場だ。

婚活がうまくいかないとき「自分に問題があるのか」と悩む前に、「環境が合っていないのか」という視点を持ってみてほしい。

都道府県別の未婚率・離婚率データはこちらhttps://www.japan-stats.com/detail/unmarried-rate（https://www.japan-stats.com/detail/unmarried-rate）&nbsp;&nbsp;&nbsp;

https://www.japan-stats.com/detail/divorce-rate（https://www.japan-stats.com/detail/divorce-rate）

出典：総務省 国勢調査（2020年）、厚生労働省 人口動態統計（2022年）

#婚活 #未婚率 #統計 #データで意思決定 #結婚
`,nf44da5133537:`
BMI25以上の肥満率（男性）が最も高い都道府県は、**青森県の38.4%**だ。

全国平均31.8%と比べると約7ポイント高い。約5人に2人が肥満という計算になる。

「秋田が1位」というイメージを持っている人もいるかもしれないが、データでは青森が最高で、秋田は37.8%で2位だ。どちらにせよ東北が上位を独占しており、最低の東京都22.4%とは16ポイントもの差がある。

「太りやすい県」と「太りにくい県」の差は何が生み出しているのか。そしてこの差は、個人の意志で解決できる問題なのか。

## 肥満率ランキング——東北・北海道が上位を占める

**肥満率が高い都道府県（男性）**

- 1位 青森県：38.4%
- 2位 秋田県：37.8%
- 2位 宮崎県：37.8%
- 4位 岩手県：36.8%
- 5位 鹿児島県：36.4%
**肥満率が低い都道府県（男性）**

- 1位 東京都：22.4%
- 2位 神奈川県：24.8%
- 3位 京都府：25.8%
東北・北海道が上位を占め、都市部が下位に並ぶ。この傾向は偶然ではなく、明確な構造的要因がある。

## 雪国の冬という「運動できない環境」

青森・秋田・岩手が上位に並ぶ最大の理由は、冬の長さと積雪量だ。

青森市の年間雪日数は約124日。3日に1日は雪が降る計算だ。12月から3月にかけての4ヶ月間、青森の生活は雪に支配される。

歩道は雪に覆われ、横断歩道は凍結し、公園は使えない。ウォーキング・ジョギングは、文字通り「命がけ」になる日もある。この期間、多くの青森県民の移動手段は車一択になる。玄関を出て車に乗り、目的地の駐車場に止め、また車に乗って帰る。一日の歩数が1,000歩を下回る日も珍しくない。

対して東京ではどうか。電車通勤で毎日7,000〜10,000歩歩くことは普通だ。「運動している意識」がなくても、都市のインフラが自動的に歩かせてくれる。

**同じ「運動しない人」でも、住む場所によって消費カロリーが違う。**

年間で約4ヶ月、身体活動が大幅に制限される——これが肥満率を押し上げる最大の構造的要因だ。

## 食文化という「変えにくい環境」

次の要因は食文化だ。

東北地方は塩分摂取量が多い食文化として知られている。漬物・塩魚・いぶりがっこ・きりたんぽ鍋——青森・秋田の伝統的な食事は、美味しいが塩分が高いものが多い。

塩分の多い食事は食欲を増進させ、カロリー過多になりやすい。また保存食として発酵食品・塩漬けが多く使われる文化は、長い冬の知恵として数百年かけて根付いてきたものだ。

「塩分を減らせばいい」と簡単に言えるが、文化は一朝一夕には変えられない。食文化は個人の努力だけでなく、地域全体の変革が必要な問題だ。

## 飲酒習慣という「コミュニティの文化」

青森県の男性飲酒率は全国でも高水準だ。

長い冬の夜、仲間と集まって飲む——これは単なる習慣ではなく、地域コミュニティの絆を強める文化的な機能を持っている。「飲み会」が人間関係の潤滑油として機能する社会では、飲酒を減らすことは社会的な孤立につながりかねない。

アルコールのカロリーは見落とされがちだが、ビール中ジョッキ1杯で約200kcal。毎日2〜3杯を年間通じて飲めば、それだけで相当なカロリーが積み重なる。

## 肥満と平均寿命の関係

ここが最も重要なデータだ。

都道府県別の男性平均寿命を見ると：

**平均寿命が長い県（男性）**

- 1位 滋賀県：82.7歳2位 長野県：82.7歳3位 奈良県：82.4歳
**平均寿命が短い県（男性）**

- 青森県：80.9歳
- 北海道：80.9歳
- 秋田県：80.5歳
長野・滋賀と青森・秋田の差は約2歳。

肥満は糖尿病・心疾患・脳卒中・一部のがんのリスクを高める。これらの病気は「静かに進行する」特徴があり、自覚症状が出たときには深刻な状態になっていることも多い。「気候と食文化が健康格差を生む」という構造が、平均寿命の差に表れている。

## 「肥満率が高い」は個人の問題ではなく環境の問題だ

「意志が弱いから太る」という見方は、個人に責任を押し付けすぎだ。

青森の冬に、東京と同じように毎日歩き回ることは現実的ではない。数百年かけて形成されてきた食文化は、個人の努力だけでは変えられない。飲酒習慣は地域コミュニティと結びついている。

肥満率の地域差は「その土地で生きることの構造的な難しさ」を映し出している。個人の努力だけで解決できる問題ではなく、環境の設計・インフラの整備・文化の変容が必要な、社会的な課題だ。

青森県も近年、健康寿命延伸に向けた取り組みを強化している。屋内運動施設の充実、減塩食の普及啓発、健康診断の受診率向上——数字が変わるには時間がかかるが、「個人の責任」から「社会の設計」の問題として捉え直すことが、第一歩だ。

青森38.4%、東京22.4%。

この16ポイントの差は、青森県民の意志の弱さを示していない。雪国の冬という構造的な運動不足、長年培われてきた食文化、地域コミュニティの飲酒文化——これらの「環境」が作り出した差だ。

数字を見るとき、「なぜその数字になったか」を問うことが、データリテラシーの本質だ。

都道府県別の肥満率データはこちら→&nbsp;

https://www.japan-stats.com/detail/obesity-rate（https://www.japan-stats.com/detail/obesity-rate）

出典：厚生労働省 国民健康・栄養調査

#肥満率 #青森 #東北 #健康 #環境 #統計 #データで見る日本
`,n8047cc68c58d:`
**「給料のために長く通勤する」のは仕方ない——そう思っていた。でも都道府県データを掛け合わせると、「通勤が長くて給料も低い」という最悪の組み合わせが見えてきた。**

## まず「通勤時間」のランキングを見てみよう

総務省の社会生活基本調査（2021年）によると、片道の平均通勤時間は、

- **1位：埼玉県 58分**
- 2位前後：神奈川・千葉など首都圏が続く
- **最短：山形・島根・高知など 22〜24分**
埼玉県民は片道58分、往復で約2時間を毎日通勤に費やしています。年間250日で計算すると、年間約**480時間**。これは**1年間のうち丸20日分**を電車の中で過ごしている計算です。

「埼玉県民は毎年20日分の人生を電車で失っている」——そう言うとちょっと大げさに聞こえるかもしれませんが、数字としては正確です。

しかも埼玉の通勤の多くは「東京へ出勤するため」。首都圏のベッドタウンとして発展してきた結果、長時間通勤が構造的に組み込まれた県になっています。

## 次に「平均給与」を重ねると

1人あたりの県民所得（内閣府データ）を見ると、

- **1位：東京都 485万円**
- 2位：愛知県
- **最低：青森県 238万円**
東京と青森の差は**247万円**。同じ日本で、住んでいる場所によってこれほどの差があります。

全国平均は約310万円（2022年）。東京の485万円は平均の約1.5倍、青森の238万円は平均の約77%です。

## ここで2つを掛け合わせると「格差の構図」が見える

一見、「給料の高い東京周辺に住めば豊か」に見えます。でも通勤時間を重ねると、話は変わってきます。

**埼玉県の場合**：通勤時間58分（全国最長）、でも給与水準は東京より大きく低い。「東京に通うために埼玉に住んでいる」という構造上、時間も体力も使いながら、手元に残る収入は東京ほど多くない。しかも家賃は首都圏価格です。

**神奈川・千葉も同様です。**通勤時間は長く、給与の中央値は東京には届かない。「東京で働くためのコスト」を生活全体で払い続けている状態とも言えます。

## 「給料が高い＝豊か」は本当か

東京485万円 vs 青森238万円という数字だけを見ると、東京が圧倒的に豊かに見えます。

でも実際の生活を考えると、話は単純ではありません。

**家賃の差**：東京都心の1LDKと青森市内の1LDKでは、月額で8〜10万円以上の差があることも珍しくない。年間で100万円以上の差です。

**通勤時間という「見えないコスト」**：東京都民の平均通勤時間は片道約48分。年間500時間近くを通勤に費やしており、この「時間コスト」は給料には一切反映されません。

**物価の差**：総務省の消費者物価地域差指数（2022年）によると、東京は106.4、青森は97〜98台。生活全体のコストが東京のほうが約9ポイント高い。

こうして見ると、「手取りの豊かさ」は数字の差ほど大きくない可能性があります。

## じゃあ「最強の組み合わせ」はどこ？

通勤が短くて給与もそれなりに高い——そんな理想的な組み合わせはあるのでしょうか。

愛知県（名古屋周辺）は、全国2位の県民所得でありながら、通勤時間は首都圏よりも短い傾向があります。トヨタを中心とした製造業が集積し、地元で高賃金の仕事が完結している構造が生んだ「コスパの良さ」かもしれません。

また、滋賀・三重・静岡なども、製造業の集積地として給与水準が比較的高く、通勤時間は首都圏ほど長くないエリアとして注目されています。

## リモートワーク時代に変わる「住む場所」の方程式

近年、リモートワークの普及によって「東京の仕事をしながら地方に住む」という選択肢が現実的になってきました。

東京水準の給与を得ながら、家賃が低く通勤ゼロの地方で生活できるなら——実質的な豊かさは、東京で通勤しながら暮らすより高くなる可能性があります。

「どこに住むか」の判断軸が、給与の額だけでなく、通勤時間・家賃・物価を合わせた「総合的な豊かさ」へとシフトしつつある時代です。

## まとめ

- 通勤時間1位：埼玉58分（総務省2021年）、最短：山形・島根22〜24分
- 平均給与1位：東京485万円、最低：青森238万円（内閣府データ）
- 「長通勤×首都圏周辺の給与」という組み合わせが割に合わない可能性がある
- 給与の差は家賃・物価・通勤時間を加味すると縮まる
- 愛知は高給与×比較的短通勤のコスパが良い組み合わせ
- リモートワーク普及で「東京の給与×地方の生活費」が現実的な選択肢に
- 「豊かさ」は給与の数字だけでは測れない
通勤時間と給与を2つ重ねて初めて見えてくる「本当のコスパ」。あなたの生活、一度計算してみる価値があるかもしれません。

https://japan-stats.com/（https://japan-stats.com/）

データ出典：総務省 社会生活基本調査（2021年）／内閣府 県民経済計算／総務省 消費者物価地域差指数（2022年）&nbsp;
`,nc56c99cd5e61:`
**喫煙率と大学進学率を都道府県ごとに並べてみた。すると、ある傾向が浮かび上がってきた。「意志の問題」じゃなく、もっと深いところにある話かもしれない。**

## まず大学進学率の「格差」から

文部科学省の学校基本調査（2022年）によると、大学・短大への進学率は全国平均で60.4%です。

ところが都道府県別に見ると、その差は歴然としています。

- **1位：東京都 72.4%**
- **最低：秋田県・山形県 34〜35%台**
東京と秋田の差は約**38ポイント**。同じ「日本の高校生」なのに、住んでいる県によって大学に進む割合がこれほど違います。

2000年の全国平均は49.1%でした。それが2022年には60.4%へと上昇しています。全体的に進学率は上がっているのに、地域格差は縮まっていない。むしろ広がり続けている部分もあります。

## 次に喫煙率を重ねると

厚生労働省の国民健康・栄養調査（2022年）によると、男性の喫煙率が高いのは宮崎・鹿児島・高知など九州南部〜四国エリア。全国最低は**東京都の24.8%**です。

2つのデータを重ねると、こんな傾向が見えてきます。

- 大学進学率が高い都市部（東京・神奈川・京都）→ 喫煙率が低い
- 大学進学率が低い地方（東北・九州の一部）→ 喫煙率が高い傾向
完全に一致するわけではありませんが、「進学率が高い地域＝喫煙率が低い」という傾向は、データから読み取れます。

## 「学がないからタバコ」という読み方は間違い

ここで注意が必要です。

このデータを見て「大学に行かない人がタバコを吸う」「タバコを吸うから進学できない」と読むのは、まったくの誤りです。

そういう単純な因果関係はありません。大切なのは、**どちらも同じ「環境」から生まれている**という見方です。

## 進学率を下げる「環境」の正体

地方で大学進学率が低い背景には、いくつかの構造的な理由があります。

**まず、物理的な距離の問題です。**

地方には大学そのものが少ない。進学するためには県外に出るしかなく、仕送りを含めた費用が年間100〜150万円以上かかることもあります。「行きたい気持ちはあっても、お金が続かない」という現実が地方には根強く存在します。

**次に、就労文化の違いです。**

地方では、高校を卒業してすぐ地元で働き、家業を継ぐことが「普通」とされてきた歴史があります。「大学に行かなくてもちゃんと生きていける」という実例が身近に多いため、進学という選択肢が相対的に小さく見えやすい。

**さらに、情報へのアクセス格差です。**

都市部では塾・予備校・大学のオープンキャンパスなどの情報が自然に入ってきます。「大学に行くのが当たり前」という環境が整っている。地方ではそのような刺激が少なく、進学という選択肢がそもそも身近でないケースもあります。

## 喫煙率を下げる「環境」も同じ構造

では喫煙率はどうでしょう。

都市部でタバコが少ない理由は、前述のとおり「健康情報へのアクセス」「職場・社会の禁煙文化」「喫煙できる場所の減少」などです。

一方、地方では健康診断の受診率が低い地域もあり、「タバコは体に悪い」という情報が日常的に届きにくいことがあります。また禁煙外来や卒煙サポートへのアクセスも、都市部ほど充実していません。

つまり、大学進学率も喫煙率も、**個人の意志や能力の問題ではなく、その人が置かれた「環境・機会・情報」の差が生み出している**のです。

## 数字が教えてくれる「格差の構造」

38ポイントの進学率の差は、単なる「教育への意識の差」ではありません。

経済格差・地理的格差・情報格差・機会格差が何十年もかけて積み重なった結果として、今の数字があります。

喫煙率の差も同じです。「意識が低いからタバコを吸う」のではなく、「そういう環境にいるからタバコが身近になる」。

2つのデータを重ねることで、表面には見えにくい「どこで生まれ、育つか」という問題の重さが少し見えてきます。

## まとめ

- 大学進学率：東京72.4% vs 秋田・山形34〜35%（文科省2022年）
- 喫煙率最低：東京24.8%／高い：九州南部・四国（厚労省2022年）
- 「進学率低い＝喫煙率高い」は個人の意志の差ではなく環境の差
- 進学率が低い背景：大学の少なさ・費用・就労文化・情報格差
- 喫煙率が高い背景：健康情報のアクセス差・禁煙文化の浸透度の差
- どちらも「機会の格差」が根っこにある
- データは「誰が悪い」ではなく「何が問題か」を教えてくれる
あなたの県の進学率と喫煙率、ぜひ一度調べてみてください。

https://japan-stats.com/（https://japan-stats.com/）

データ出典：文部科学省 学校基本調査（2022年）／厚生労働省 国民健康・栄養調査（2022年）
`,nc308fae91344:`
**タバコを吸って、酒も飲む。その掛け合わせが多い県はどこか。2つのデータを重ねたら、なんとも言えない「あるある」が見えてきた。**

## まず「喫煙率」から見てみよう

厚生労働省の国民健康・栄養調査（2022年）によると、男性の喫煙率が高いのは宮崎・鹿児島・高知など九州南部〜四国エリアです。

全国最低は**東京都の24.8%**。

東京でタバコが少ない理由は、健康意識の高さだけじゃありません。都内では喫煙できる場所が年々減り、路上喫煙は多くのエリアで禁止。職場でも「喫煙者お断り」の求人が増えています。タバコを吸いたくても、吸える場所がない——という「環境の圧力」が大きいのです。

一方、九州・四国では屋外でも喫煙できる場所が多く、地域の飲み会文化との親和性もあり、喫煙が今も比較的身近な存在として残っています。

## 次に「飲酒率」を重ねると

飲酒率（週3日以上飲む男性の割合）のランキングはこうです。

- **1位：高知県 44.8%**
- **2位：秋田県 44.2%**
- **3位：岩手県 40.2%**
- 東京都：32.8%（低め）
（厚生労働省 国民健康・栄養調査 2022年）

高知が1位なのは有名ですが、秋田・岩手など東北勢が続くのも特徴的です。

注目したいのは、**喫煙率が高い九州と、飲酒率が高い東北が、必ずしも重ならない**こと。つまり「タバコ強い＝酒も強い」とは一概に言えないわけです。

## 「飲む×吸う」が両方多い県はどこ？

2つのデータを重ねたとき、際立つのが**高知県**です。

喫煙率も全国上位、飲酒率は堂々の全国1位（44.8%）。高知は古くから「いごっそう（頑固者）」気質と豪快な宴会文化で知られ、「土佐の一本釣り」「皿鉢料理」など食と酒が文化に深く根付いています。数字はそのままその土地の文化を映しているとも言えます。

**秋田県**も飲酒率2位（44.2%）で、喫煙率もそれなりに高い。長く厳しい冬の間、外に出られず家の中で酒を飲みながらタバコを吸う——そんな光景が浮かぶデータです。東北の寒冷地文化と「飲む・吸う」の親和性は、気候そのものが関係している可能性があります。

## 逆に「どっちも低い」のはどこ？

東京都は喫煙率24.8%で全国最低水準、飲酒率も32.8%と低め。神奈川・埼玉・京都なども比較的低い傾向があります。

都市部で両方低い背景には、いくつかの理由が考えられます。

まず**健康情報へのアクセスのしやすさ**。都市部では健康診断の受診率が高く、医療機関も多い。「タバコや酒が体に悪い」という情報が日常的に届きやすい環境があります。

次に**職場・社会環境の変化**。タバコを吸わない・深酒をしないことが「格好いい」とされる価値観が、都市部ではすでに広まりつつあります。飲み会の強制参加も減り、「飲まない選択」がしやすくなっています。

さらに**時間とコストの問題**。東京は通勤時間が長く、飲みに行くと終電を逃すリスクもある。純粋に「飲んでいる時間がない」という面もあるかもしれません。

## 「悪い習慣」ではなく「文化」として読む

ここで大事なのは、数値が高いからといってその県の人を批判することではありません。

東北の厳しい冬、高知の豪快な宴会文化、九州の人情文化……それぞれの地域に根ざした「酒やタバコとの付き合い方」がデータに出ているだけです。

ただし、飲酒率と自殺率・肥満率の地域的な重複も統計上確認されています。秋田・岩手・高知は飲酒率が高い県と、自殺率が高い県の分布が重なっており、「孤立×飲酒」の悪循環が健康格差につながっている可能性は無視できません。

文化として尊重しながらも、データが示すリスクをきちんと見ていくことが大切です。

## あなたの県はどうですか？

「うちの県が1位だった」「思ったより低かった」——そんな反応があちこちで出そうなデータです。

2つの統計を重ねることで、単体では見えなかった「地域の顔」が浮かび上がってくる。それがこの掛け算の面白さです。

## まとめ

- 飲酒率1位：高知44.8%・2位：秋田44.2%（厚労省2022年）
- 喫煙率最低：東京都24.8%、飲酒率も東京は低め
- 「飲む×吸う」両方多いのは**高知が突出**
- 東北は飲酒率が高く、九州南部は喫煙率が高い傾向
- 都市部で両方低い背景は「環境・情報・時間の差」
- 数字の差は「意志の差」より「文化・環境の差」
- 飲酒率の高さは自殺率・肥満率とも地域的に重なる傾向がある
https://japan-stats.com/（https://japan-stats.com/）

データ出典：厚生労働省 国民健康・栄養調査（2022年）&nbsp;
`,nbf9aa2ac1df5:`
**「酒飲みが多い県」と「離婚が多い県」を重ねてみた。なんとなく関係ありそうで、実はそう単純でもない。データが語る意外な構図とは。**

## まず「離婚率」の現実を見てみよう

厚生労働省の人口動態統計によると、離婚率（人口千対）の上位はこうなっています。

- **1位：沖縄県 2.10件**
- 以下、宮崎・鹿児島など九州南部が上位に並ぶ
- 低い：富山・新潟・石川など北陸勢
沖縄は出生率も全国1位（1.70）なのに、離婚率も全国1位。「産みやすい県＝離婚も多い」という一見矛盾した結果になっています。

一方、北陸（富山・石川・福井）は離婚率が低い。この地域は持ち家率・共働き率・生活保護率のいずれも「良好」な傾向があり、家族の安定度が数字に出ています。

## 次に「飲酒率」を重ねると

飲酒率（週3日以上飲む男性の割合）のランキングはこちら。

- **1位：高知県 44.8%**
- **2位：秋田県 44.2%**
- **3位：岩手県 40.2%**
- 東京都：32.8%
（厚生労働省 国民健康・栄養調査 2022年）

ここで気づくことがあります。**離婚率が高い沖縄・九州と、飲酒率が高い高知・東北は、ほとんど重ならない**のです。

「酒をよく飲む県ほど離婚率が高い」という仮説は、データ的には成り立ちません。

## 飲酒率1位の高知、離婚率は？

飲酒率全国トップの高知県の離婚率は、全国平均前後の中位に位置します。

豪快な「いごっそう（頑固者）」気質と酒文化で知られる高知ですが、離婚率の観点では突出していない。「よく飲む＝すぐ別れる」というステレオタイプが崩れる結果です。

## 飲酒率2位の秋田、離婚率は？

秋田県の離婚率は全国的に見て低めです。

その理由のひとつに、そもそも婚姻数が少ないことがあります。秋田は未婚率が高く、高齢化も日本一進んでいる。離婚する「前提」となる結婚自体が少ないため、離婚件数も自然と少なくなります。

「飲酒率が高くても離婚率は低い」——秋田はそんな構図になっています。

## では、沖縄の離婚率1位はなぜ？

沖縄の離婚率が全国最高である背景には、飲酒よりも別の要因が大きく影響しています。

**まず「若婚文化」の影響です。**

沖縄は全国的に見て婚姻年齢が低い地域です。20代前半での結婚が多く、若いうちに結婚すると、生活環境の変化や価値観の違いから離婚に至るケースも増えやすい。

**次に経済的なストレスです。**

沖縄の1人あたり県民所得は全国最低水準です。経済的な余裕がない状況での子育ては、夫婦関係に大きな負荷をかけます。経済格差が家庭内の摩擦を生みやすい環境があります。

**そして「地域コミュニティの強さ」という逆説です。**

沖縄には「ゆいまーる（相互扶助）」の文化があり、離婚後も親族・地域全体で子育てをサポートする仕組みが残っています。「離婚しても一人で子育てしなければならない」というプレッシャーが、本土よりも弱い面があります。その結果、離婚へのハードルが相対的に低くなっている可能性があります。

## 「無関係」とも言いきれない部分

とはいえ、過度な飲酒がDVや家庭内トラブルのリスクを高めるという医学的な知見は確かに存在します。

また、飲酒率と自殺率が地域的に重なる傾向（秋田・高知など）も確認されています。精神的な不安定さが、家庭関係にも影響を与えることは十分あり得ます。

「飲酒率」と「離婚率」が都道府県レベルで直接リンクしているわけではないけれど、個人レベルでは「飲みすぎが家庭を壊す」ケースが存在することも、見落とさないようにしたいところです。

## 2つを重ねることで見えてくるもの

「酒飲みが多い→離婚が多い」という単純な連想を、このデータは否定してくれます。

でも同時に、それぞれの数字の裏には、その地域固有の「経済・文化・家族観」が詰まっていることもわかります。

1つのデータだけ見ていると、「こういう県はこういう人たちだ」という偏ったイメージを持ちがちです。でも2つを重ねることで、思い込みが崩れ、もっと立体的な「地域の姿」が見えてくる。それがこの掛け算の醍醐味です。

## まとめ

- 離婚率1位：沖縄2.10件（厚労省データ）、低い：富山・石川・福井など北陸
- 飲酒率1位：高知44.8%・秋田44.2%（厚労省2022年）
- 「飲む県＝離婚多い」は成り立たない——分布がほぼ重ならない
- 高知は飲酒率1位だが離婚率は中位
- 秋田は飲酒率2位だが婚姻数が少なく離婚率も低め
- 沖縄の離婚率は「若婚・経済・地域文化」が主因
- 個人レベルでは飲酒過多が家庭に影響するケースはある
思い込みを壊すのが、データの一番の面白さだと思います。

https://japan-stats.com/（https://japan-stats.com/）

データ出典：厚生労働省 国民健康・栄養調査（2022年）／厚生労働省 人口動態統計
`,ncdaa7add074e:`
**「太っていると早死にする」——そう思い込んでいた。でも都道府県データを重ねたら、そう単純でもないことがわかってきた。むしろ、もっと根深い話が見えてきた。**

## 肥満率のランキングから見てみよう

厚生労働省の国民健康・栄養調査（2022年）によると、男性の肥満率（BMI25以上）の都道府県ランキングはこうなっています。

- **1位：秋田県 38.4%**
- **2位：青森県 36.8%**
- **3位：宮崎県 37.8%**
- **最低：東京都 22.4%**
東北と宮崎が並んで上位に入り、東京・京都・大阪などの都市部が低い傾向があります。

秋田・青森で肥満率が高い背景として挙げられるのは、冬の寒さで外出・運動が制限されること、高カロリーな鍋料理や漬物・塩分の多い食文化、スポーツジムや公共の健康施設へのアクセスが悪い地域があること——などです。雪が積もった冬に外を走れと言われても、なかなか難しいのが現実です。

## 次に「平均寿命」を重ねると

厚生労働省の都道府県別生命表（2020年）によると、男性の平均寿命のランキングはこちらです。

- **1位：滋賀県 82.8歳**
- **最低：青森県 79.3歳**
その差は**3.5歳**。同じ日本に生まれても、育った県によって寿命に3年以上の差が出る可能性があります。

全国平均は81.5歳（2020年）。1990年の75.9歳から30年で約6歳も延びています。日本全体として長寿化が進む中で、地域格差が残り続けているのが現状です。

## 2つを重ねると「東北問題」が浮かぶ

肥満率が高い東北（秋田・青森）と、平均寿命が短い東北——ここは見事に重なります。

**青森県**は肥満率全国2位（36.8%）であり、かつ平均寿命は全国最低（79.3歳）。長寿1位の滋賀との差は3.5年です。

肥満は生活習慣病（糖尿病・高血圧・心疾患）のリスクを高めます。それが寿命に影響しているとすれば、データとして一貫した話になります。

さらに青森・秋田は塩分摂取量が全国でも高い地域として知られており、高血圧から脳卒中・心筋梗塞につながるリスクも指摘されています。肥満率だけでなく、食文化全体が寿命に影響している可能性があります。

## でも「太っている＝短命」とは言いきれない

ここが面白いところです。

**宮崎県**は肥満率3位（37.8%）と東北に匹敵するほど高い。ところが平均寿命は全国中位程度で、東北ほど短くはありません。

宮崎は日照時間が長く（全国トップクラス）、屋外で体を動かす機会が東北に比べて多い。また塩分摂取量も東北ほどは高くない。肥満率は高くても、他の要因が寿命を底上げしているようです。

「太っていると短命」は傾向としてはあるけれど、絶対的な法則ではない——ということをデータが示しています。

## 長寿1位・滋賀県の何が違うのか

平均寿命トップの**滋賀県（82.8歳）**は、肥満率も全国で低い水準（27.2%）です。

滋賀が長寿な理由として挙げられるのは複数あります。近江料理に代表される野菜・魚中心の食文化。琵琶湖周辺の豊かな自然環境と適度な運動習慣。企業誘致による安定した雇用と、精神的なゆとり。そして自殺率が全国平均を下回る水準にあること。

長寿を支えているのは「痩せている」という一点ではなく、食・環境・経済・精神的健康が組み合わさった総合力です。

## 「太っているから早死に」は単純すぎる

寿命を決めるのは、体重だけではありません。

- 食文化（塩分・脂質・野菜摂取量）
- 飲酒・喫煙習慣
- 医療へのアクセスのしやすさ
- 精神的なストレスや社会的な孤立度
- 気候・日照時間・運動習慣
- 経済的な安定度
これらが複合的に絡み合って「寿命の地域差」が生まれます。

肥満率と平均寿命の2つを重ねることで、「健康格差」の本当の複雑さが見えてきます。「個人の努力が足りない」という話ではなく、「どんな環境に生きているか」の差が数字に出ているのです。

## まとめ

- 肥満率1位：秋田38.4%・青森36.8%（厚労省2022年）
- 平均寿命1位：滋賀82.8歳／最低：青森79.3歳（厚労省2020年）
- 東北は肥満率・短命の両方で上位——塩分・飲酒・運動不足が複合的に影響
- 宮崎は肥満率高いが寿命は中位——日照・食文化の違いが影響か
- 滋賀の長寿は「食・環境・精神・経済」の複合的な好条件が重なった結果
- 「太っているから早死に」という単純な因果関係では語れない
- 健康格差の背景には「どこでどう生きるか」という環境の差がある
https://japan-stats.com/（https://japan-stats.com/）

データ出典：厚生労働省 国民健康・栄養調査（2022年）／厚生労働省 令和2年都道府県別生命表&nbsp;
`,n288e6677fd62:`
**タブーだとわかっていても、書かずにはいられないデータがある。飲酒率と自殺率を都道府県ごとに重ねたとき、ある「重なり」が見えてきた。**

## 自殺率ランキングの現実

厚生労働省・警察庁の自殺統計（2022年）によると、人口10万人あたりの自殺者数は、

- **1位：秋田県 22.6人**
- **2位：岩手県 21.3人**
- **3位：高知県 20.4人**
- **最低：東京都 13.9人**
全国平均は17.3人。秋田と東京の差は約8.7人——同じ日本に住んでいながら、これほどの差があります。

秋田で高い背景には、高齢化率38.6%（全国最高）による高齢男性の孤立、人口密度が低い農村部での社会的孤絶、冬の長さと日照不足による季節性うつ病リスクの高さ、などが複合的に関わっています。

## 飲酒率と重ねると見えること

飲酒率（週3日以上飲む男性の割合）のランキングはこちらです。

- **1位：高知県 44.8%**
- **2位：秋田県 44.2%**
- **3位：岩手県 40.2%**
（厚生労働省 国民健康・栄養調査 2022年）

ここで気づくことがあります。

**秋田・岩手・高知——この3県は、自殺率でも飲酒率でも、ともに全国上位に登場しています。**

これは偶然でしょうか。

## 「飲む→死ぬ」という単純な話ではない

もちろん、飲酒が自殺を直接引き起こすわけではありません。因果関係を単純化するのは危険です。

でも、医学的な観点からは、過度な飲酒がうつ病リスクを高め、自殺リスクと関連するという知見は確かに存在します。アルコールは一時的に気分を高揚させますが、習慣的な多飲は脳の神経伝達物質のバランスを崩し、長期的にはうつ状態を引き起こしやすくなります。

そして、うつ状態にあるときに飲酒量が増えるという「悪循環」も報告されています。孤独→飲酒→うつ→さらに飲酒、という螺旋を想像すると、データの重なりが少し立体的に見えてきます。

## 「孤立」という共通の根っこ

2つのデータが重なる地域に共通しているのは、「孤立しやすい環境」です。

東北の農村部では、冬の間は雪で外出できず、近隣住民との交流も限られます。高知の山間部でも、集落が点在し、人と会う機会が少ない地域があります。

酒の席が「数少ない人との交流の場」になっているケースも、データの背景にあるかもしれません。孤立を和らげるために飲む——でもその飲酒が、孤立をさらに深める結果になってしまうこともある。

## 秋田が「自殺対策先進県」になった理由

秋田県は長年、自殺率が全国最高であり続けてきた問題と向き合い、独自の対策を積み重ねてきた地域でもあります。

2000年代初頭には自殺率が40人超だったところを、傾聴ボランティアの育成・農村部への訪問支援・相談窓口の拡充などによって22人台まで下げることに成功しています。

「問題から目を背けない」という姿勢が、少しずつ数字を動かしてきた。その事実は希望でもあります。

## 高知のケースは少し違う

高知県は飲酒率1位でありながら、自殺率は全国3位。秋田・岩手と重なりはあるものの、少し構造が異なります。

高知の飲酒文化は「豪快な宴会文化」として知られており、孤立した飲酒というより「みんなで飲む」文化的土壌があります。一方で、高知は経済的に豊かではなく、経済的ストレスが自殺率を押し上げている面もあると考えられます。

同じ「飲酒率が高い・自殺率が高い」でも、その背景はまったく同じではない。データを入口にして、その先にある「地域の事情」を想像することが大切です。

## まとめ

- 自殺率1位：秋田22.6人・2位岩手21.3人・3位高知20.4人（厚労省・警察庁2022年）
- 飲酒率1位：高知44.8%・2位秋田44.2%・3位岩手40.2%（厚労省2022年）
- 秋田・岩手・高知は**両方のランキングで上位に重複**
- 飲酒が直接自殺を引き起こすわけではないが、医学的な関連は指摘されている
- 共通の根っこは「孤立しやすい環境」
- 秋田は対策により自殺率を40人超から22人台に下げた実績がある
- 同じデータでも地域ごとに背景は異なる
このデータを「怖い話」で終わらせず、「では何ができるか」を考えるきっかけにしてほしいと思います。

※この記事は統計データをもとにした社会的考察です。もし自分や身近な人が辛い状況にある場合は、いのちの電話（0120-783-556）などにご相談ください。

https://japan-stats.com/（https://japan-stats.com/）

データ出典：厚生労働省・警察庁 自殺統計（2022年）／厚生労働省 国民健康・栄養調査（2022年）
`,ndcf8579f2e05:`
**「持ち家を買ったら離婚できない」とよく言われる。でもそれ、データで見たらどうなっているのか。都道府県ランキングを重ねたら、笑えない事実が見えてきた。**

## まず「持ち家率」のランキングから

総務省の住宅・土地統計調査（2023年）によると、持ち家率のランキングはこうなっています。

- **1位：富山県 76.8%**
- 2位：秋田県・福井県など北陸・東北勢が上位
- **最低：沖縄県 42.8%**
- 東京都：44.8%（下位）
富山と沖縄の差は実に**34ポイント**。10人中7人以上が持ち家の富山と、10人中4人しか持ち家がない沖縄——同じ日本でこれほど違います。

富山で持ち家率が高い背景には、土地が安く広い家が建てやすいこと、「結婚したら親が家を建ててあげる」という文化的慣習が根付いていること、製造業を中心とした安定雇用で住宅ローンを組みやすい環境があること、などが挙げられます。

## 次に「離婚率」を重ねると

厚生労働省の人口動態統計によると、離婚率（人口千対）は、

- **1位：沖縄県 2.10件**
- 宮崎・鹿児島など九州南部が上位
- **最低水準：富山県 1.06件**
- 北陸（石川・福井）も低め
ここで2つのデータを並べてみます。

都道府県 持ち家率 離婚率 富山県 76.8%（1位） 1.06件（最低水準） 沖縄県 42.8%（最低） 2.10件（1位）

**持ち家率が最高の県で離婚率が最低、持ち家率が最低の県で離婚率が最高。**

見事な逆転構造です。

## 「持ち家が離婚を防ぐ」のか？

もちろん、持ち家を買えば離婚しないという単純な話ではありません。

でも経済的な観点では、一定の説得力があります。

持ち家は夫婦の共有財産です。住宅ローンを二人で組んでいれば、離婚は財産分与・ローン問題・売却or居住継続の判断など、複雑な手続きを伴います。「離婚したいけど家をどうするか」という現実的なハードルが、関係の修復を選ぶきっかけになることもあるでしょう。

また、持ち家を持つことで「この場所に根を張る」という意識が生まれ、地域コミュニティとのつながりも深まります。孤立しにくい環境が、夫婦関係の安定にも間接的に影響している可能性があります。

## 富山が「安定した家庭」を作る構造

富山県は持ち家率・離婚率だけでなく、複数の指標で安定した家庭環境を示しています。

生活保護率は全国最低水準（3.2人/千人）。共働き率は全国トップクラス。女性の就業率も高く、夫婦ともに働いて安定した収入を持つ家庭が多い。

「持ち家×安定雇用×共働き×低生活保護率」——富山の家族の安定は、複数の要素が絡み合った結果です。持ち家はその象徴のひとつと言えるかもしれません。

## 沖縄の離婚率が高い本当の理由

一方、沖縄の持ち家率が低く離婚率が高い背景は、「家がないから離婚する」という単純な話ではありません。

沖縄は全国最低水準の県民所得で、経済的に豊かではない。若い年齢での婚姻が多く、価値観の違いや経済的摩擦から離婚に至るケースが多いとされています。また「ゆいまーる（相互扶助）」の文化で、離婚後も親族や地域が子育てをサポートする仕組みがあり、離婚へのハードルが本土より低い面もあります。

つまり沖縄の離婚率の高さは「家がない」からではなく、経済・文化・年齢構造が複合的に影響した結果です。

## 「家を買う」ことの重さを、データが教えてくれる

「持ち家か賃貸か」という議論は今も続いています。でも数字が示すのは、家を持つことが単なる「投資の話」ではないということです。

住む場所に根を張ること。ローンという経済的なしがらみを持つこと。地域コミュニティに組み込まれること。それらが積み重なって、家族の安定という形になっている可能性があります。

データはあくまで傾向を示すものですが、「持ち家率と離婚率の鮮やかな逆転構造」は、家と家族の関係について考えるきっかけを与えてくれます。

## まとめ

- 持ち家率1位：富山76.8%・最低：沖縄42.8%（総務省2023年）
- 離婚率1位：沖縄2.10件・最低水準：富山1.06件（厚労省データ）
- 持ち家率最高の富山が離婚率最低、持ち家率最低の沖縄が離婚率最高という逆転構造
- 持ち家は経済的ハードル・地域コミュニティへの帰属感を通じて家族の安定に影響する可能性
- 富山の安定は持ち家だけでなく、安定雇用・共働き・低生活保護率の複合的な要素
- 沖縄の離婚率は「持ち家がない」より「若婚・経済・文化」が主因
- 「家を買う」は投資だけでなく、家族の形を決める選択でもある
https://japan-stats.com/（https://japan-stats.com/）

データ出典：総務省 住宅・土地統計調査（2023年）／厚生労働省 人口動態統計
`,n7791c81f73a3:`
**「医者が多い地域に住めば長生きできる」——なんとなくそう思っていた。でも都道府県データを重ねたら、その思い込みが見事に崩れた。**

## 医師数ランキングの意外な1位

厚生労働省の医師・歯科医師・薬剤師統計（2022年）によると、人口10万人あたりの医師数ランキングはこうなっています。

- **1位：京都府 338人**
- **2位：東京都 334人**
- 3位：徳島県 325人・岡山県 317人
- **最低：埼玉県 174人**
「医師数1位は東京」と思っていた人も多いのではないでしょうか。実は京都が全国トップです。

京都大学医学部・京都府立医科大学など複数の医科系大学が集積し、大学病院を拠点に多くの医師が集まる構造が数字に出ています。医師は大学病院に勤務しながら周辺の病院に派遣される仕組みがあるため、医科大学の多い地域は医師数が多くなります。

一方、最低の埼玉県（174人）は全国平均（269人）の約65%しかいません。700万人を超える人口を抱えながら、医師がこれほど少ない。東京のベッドタウンとして人口が急増したものの、医療インフラの整備が追いつかなかった結果です。

## 次に「平均寿命」を重ねると

厚生労働省の都道府県別生命表（2020年）によると、男性の平均寿命のランキングはこちらです。

- **1位：滋賀県 82.8歳**
- 2位：長野県 82.7歳
- 3位：奈良県 82.4歳
- **最低：青森県 79.3歳**
ここで注目したいのは、**医師数1位の京都（338人）の平均寿命は全国トップではない**という事実です。

長寿1位の滋賀県の医師数は、全国平均を上回る水準ではあるものの、京都・東京には及びません。

「医者が多い＝長生き」という単純な図式は、データ的には成り立たないのです。

## 滋賀県が長寿1位の理由

では、なぜ滋賀が長寿1位なのでしょうか。

**まず、肥満率の低さ。**

滋賀県の男性肥満率（BMI25以上）は27.2%と全国で低い水準です。近江料理に代表される野菜・魚中心の食文化が影響していると考えられます。肥満は生活習慣病のリスクを高めるため、肥満率の低さは寿命に直結します。

**次に、自殺率の低さ。**

滋賀県の自殺率は全国平均（17.3人）を下回っています。精神的な健康も長寿を左右する大きな要因で、「生きる意欲」が保たれている社会環境があることを示しています。

**そして、安定した雇用環境。**

滋賀県は製造業（電機・化学）が盛んで、比較的安定した雇用が維持されています。経済的なストレスが少ない生活環境が、健康寿命にも好影響を与えている可能性があります。

つまり滋賀の長寿は、医療の充実ではなく「予防的な生活習慣＋精神的安定＋経済的余裕」の組み合わせによるものと見られます。

## 医師数が多くても短命な県がある

医師数が上位でも、平均寿命が特別高くない県があります。

徳島県（医師数3位325人）は、全国平均より寿命が短い傾向があります。大学病院が集積し医師は多いのですが、肥満率が高く、塩分摂取量も多い食文化が影響していると考えられています。

医師がいても、その医療を利用する前に生活習慣病になってしまっている——という構造です。「治す医療」より「予防する生活」の方が、寿命に与える影響が大きいことを示唆しています。

## 埼玉174人の現実は「危機」か

医師数最低の埼玉県（174人）の平均寿命は全国平均前後で、特別短くはありません。

なぜでしょうか。東京に隣接しているため、必要なときは東京の大病院にアクセスできる。いざとなれば都内の高度医療を受けられるという「地理的バックアップ」が機能しているためと考えられます。

ただし、日常的なかかりつけ医不足・夜間救急の逼迫・産婦人科の少なさなど、生活上の不便は確実に生じています。「平均寿命に出ていないから問題ない」とは言えない状況です。

## 「医療より生活習慣」という逆説

このデータが示すメッセージは明快です。

長生きの条件は、医師数の多さよりも、日々の食事・運動・ストレスのない生活環境の方が大きく影響している可能性が高い、ということです。

もちろん医療は不可欠です。でも「病気になってから治す」医療より、「病気にならない生活」の方が寿命への影響力は大きい。京都（医師1位）より滋賀（長寿1位）が示すのは、そういうことかもしれません。

## まとめ

- 医師数1位：京都338人・2位東京334人・最低：埼玉174人（厚労省2022年）
- 平均寿命1位：滋賀82.8歳・最低：青森79.3歳（厚労省2020年）
- 医師数1位の京都と長寿1位の滋賀は一致しない——「医者多い＝長生き」は成り立たない
- 滋賀の長寿の背景は肥満率の低さ・自殺率の低さ・安定した雇用環境
- 医師数が多くても肥満率・塩分が高い徳島は寿命が特別長くない
- 埼玉は医師最少でも平均寿命は平均的——東京へのアクセスという地理的補完がある
- 「治す医療」より「予防する生活」の方が寿命への影響が大きい可能性
https://japan-stats.com/（https://japan-stats.com/）

データ出典：厚生労働省 医師・歯科医師・薬剤師統計（2022年）／厚生労働省 令和2年都道府県別生命表
`,n59cd6ad5fe66:`
**「生活保護受給者が多い地域は治安が悪い」——そんなイメージを持っている人は少なくない。でもデータを重ねてみると、思っていたよりずっと複雑な構図が見えてきた。**

## まず「生活保護率」の格差から

厚生労働省の被保護者調査（2022年）によると、生活保護率（人口千対）の都道府県別ランキングはこうなっています。

- **1位：大阪府 33.5‰**
- 2位：北海道・高知など
- **最低：富山県・福井県 3.2‰**
大阪と富山の差は**10倍以上**。同じ日本に住んでいながら、これほどの差があります。

大阪で高い背景には、歴史的な産業構造の変化（繊維・製造業の衰退）、単身高齢者・ホームレスの多さ、生活保護申請へのアクセスが比較的しやすい制度的な環境、などが影響しています。

一方、富山・福井で低い背景には、3世代同居が多く家族が互いを支え合う文化、持ち家率が高く住居コストが低いこと、製造業を中心とした安定雇用が長く続いてきたこと、などがあります。

## 次に「犯罪率」を重ねると

警察庁の犯罪統計（2022年）によると、刑法犯認知件数（人口10万人あたり）の上位はこうです。

- **大阪府：528件（上位）**
- **東京都：568件（実は上位）**
- **最低水準：秋田県・山形県など東北勢 約250件前後**
ここで少し面白いことが起きます。

「犯罪が多い＝大阪」というイメージがありますが、実は**東京の犯罪率は大阪を上回っています**。生活保護率が低い東京（約20‰前後）でも犯罪率は高い。つまり「生活保護率が高い＝犯罪が多い」という単純な図式は、このデータだけでは成り立ちません。

## 「大阪は危険」は本当か

大阪の犯罪率が高い背景には、生活保護率の高さだけでなく、人口密度の高さ・観光客の多さ・繁華街の集中、などの都市的要因が大きく影響しています。

東京も同様で、人が密集し、外出機会が多く、金銭のやり取りが多い都市環境では、犯罪の発生件数が自然と多くなります。

一方、秋田・山形などの東北は、生活保護率が低く犯罪率も低い。「安定した地方」という構図です。ただし、東北は高い自殺率という別の問題を抱えており、「治安が良い＝幸せ」とも言い切れません。

## 富山：生活保護率最低でも犯罪率は平均的

興味深いのは富山県です。

生活保護率3.2‰と全国最低でありながら、犯罪率は全国平均に近い水準です。「生活保護が少ない＝犯罪が少ない」という仮説が、ここでも崩れます。

富山は持ち家率・共働き率・離婚率など多くの指標で「安定した家庭環境」を示している地域ですが、犯罪については別の要因（都市型犯罪の有無、交通アクセスの犯罪者移動など）が影響していると考えられます。

## 貧困と犯罪、本当の関係

「貧困が犯罪を生む」という命題は、世界中で研究されてきたテーマです。

個人レベルでは、経済的追い詰められた状況が犯罪リスクを高めるという研究結果はあります。でも都道府県という「集団レベル」で見ると、それほど単純ではありません。

都市の密度・産業構造・人口の流動性・警察の認知体制・文化的背景——これらすべてが「犯罪率」という数字に影響しています。

生活保護率が高い地域は「援助を必要とする人が多い地域」であり、「犯罪者が多い地域」ではありません。数字に乗っかった偏見が、すでに困難な状況にある人たちをさらに追い込むことになります。

## データが壊してくれるステレオタイプ

このデータを重ねることで見えてくるのは、「思い込みの危うさ」です。

「大阪は危険」「生活保護受給者が多いと治安が悪い」——そういうイメージは、データで検証すると思ったほど単純ではない。

統計は、私たちが無意識に持っているバイアスを、数字という形で揺さぶってくれます。

## まとめ

- 生活保護率1位：大阪33.5‰・最低：富山・福井3.2‰（厚労省2022年）
- 犯罪率：東京568件・大阪528件が上位、東北勢250件前後が低い（警察庁2022年）
- 生活保護率が低い東京でも犯罪率は高い——「保護率高い＝犯罪多い」は成立しない
- 犯罪率の高低には人口密度・都市構造・人の流動性が大きく影響
- 大阪の生活保護率が高い背景は産業衰退・単身高齢者・申請しやすい環境
- 富山は生活保護最低でも犯罪は平均的——2つは別の話
- データが壊すのは「貧困＝犯罪」というステレオタイプ
https://japan-stats.com/（https://japan-stats.com/）

データ出典：厚生労働省 被保護者調査（2022年）／警察庁 犯罪統計（2022年）
`,neddf8c16529b:`
**女性が活躍できる社会をつくれば、子どもが増える——そう信じていた。でもデータを重ねると、現実はもっとシビアだった。**

## まず「出生率」の地域差から

厚生労働省の人口動態統計（2022年）によると、合計特殊出生率のランキングはこうなっています。

- **1位：沖縄県 1.70**
- 2位：長崎県 1.48
- 3位：宮崎県・鹿児島県など九州勢
- **最低：東京都 1.04**
- 全国平均：1.26
東京の1.04は、全国で唯一1.0台という深刻な数字です。2022年に初めて1.0台に突入しました。単純計算では、1世代ごとに人口が半減するペースです。

沖縄が高い背景には「ゆいまーる（相互扶助）」の文化で地域全体が子育てを支える仕組み、平均初婚年齢が低く若い世代の出産が多いこと、子どもに対する文化的な価値観の違いなどがあります。

## 次に「女性の平均給与」を重ねると

国税庁の民間給与実態統計調査などのデータによると、女性の平均給与が高い地域は東京・愛知・神奈川など大都市圏に集中しています。

ここで2つのデータを重ねると、見えてくる傾向があります。

- **東京**：女性給与が高い → 出生率1.04（全国最低）
- **愛知**：女性給与が高い → 出生率1.26前後（全国平均程度）
- **沖縄**：女性給与が低い → 出生率1.70（全国最高）
- **東北各県**：女性給与が低い → 出生率は全国平均前後
「女性が稼げる地域ほど、子どもが少ない」という傾向が、データからは読み取れます。

## なぜ稼げる女性ほど子どもが少ないのか

これは「稼げる女性が子どもを嫌いだから」では、もちろんありません。

構造的な問題がいくつか重なっています。

**まず「機会費用」の問題です。**

女性の給与が高い都市部では、出産・育児によって仕事を離れることの「コスト」が大きくなります。キャリアの中断、昇進の遅れ、スキルのブランク——これらのリスクが大きいほど、出産を先送りにしたり諦めたりする選択が合理的に見えてしまいます。

**次に、生活コストの高さです。**

東京の家賃は全国最高水準。保育所の待機児童数1248人は全国最多。子どもが生まれると、家賃・保育費・教育費が一気に重くなります。稼いでいても、生活コストも高いため、「経済的に余裕ができてから子どもを」と考えているうちに年齢を重ねてしまうケースも少なくありません。

**そして、パートナーシップの問題です。**

女性が高収入になるほど、家事・育児の分担をめぐる摩擦が生じやすくなることも指摘されています。「自分も稼いでいるのになぜ家事を一人でやるのか」という不満が、出産への意欲を下げる一因になることがあります。

## 沖縄が出生率1位な本当の理由

沖縄の女性給与は全国最低水準です。でも出生率は全国最高。

「給与が低いから子どもを産む」というわけではもちろんありません。沖縄の出生率を支えているのは、給与の低さではなく「子育てのしやすい社会環境」です。

地域コミュニティが育児を共同で担う文化、若い世代が早めに結婚・出産する慣習、子どもの存在が価値とされる文化的な土台——これらが出生率を押し上げています。

つまり重要なのは「給与の高低」ではなく「子育てにかかる社会的コストの低さ」です。

## 「女性活躍＝少子化解決」は本当か

政府は長年「女性が活躍できる社会＝少子化解決」という方向性を打ち出してきました。でもデータを見る限り、女性の就業率・給与が高い地域ほど出生率が低いという現実があります。

これは「女性活躍が間違っている」という話ではありません。

問題は、女性が働きやすくなっても、「産んでも働き続けられる仕組み」がついてきていないことです。育休・保育所・夫の家事分担・フレックス勤務——これらが本当の意味で機能しなければ、「稼ぐか産むか」の二択は変わりません。

東京の出生率1.04が突きつけているのは、「女性が稼げる社会」と「子どもが生まれる社会」を両立させる仕組みが、まだ日本には足りていないという現実です。

## まとめ

- 出生率1位：沖縄1.70・最低：東京1.04（厚労省2022年）
- 女性給与が高い大都市圏ほど出生率が低い傾向がある
- 理由は「稼げる女性が子どもを嫌う」ではなく「機会費用・生活コスト・分担問題」の複合
- 沖縄の出生率の高さは給与の低さではなく「子育ての社会コストの低さ」による
- 「女性活躍＝少子化解決」という単純な図式はデータが否定している
- 必要なのは「稼げる仕組み」だけでなく「産んでも働き続けられる仕組み」
- 東京1.04は「稼ぐか産むか」の二択を迫る社会構造への警告
データ出典：厚生労働省 人口動態統計（2022年）／国税庁 民間給与実態統計調査 詳細データはこちら → japan-stats.com（https://www.japan-stats.com/）
`,neec733ffdbb4:`
**「今は別に困ってないし」——でもデータは、20年後のリスクをちゃんと示している。**

あなたは今、誰と暮らしていますか？

一人暮らし、実家、パートナーと——それぞれだと思います。でも今日話したいのは、「今」じゃなくて「20年後」の話です。

40代で独身の人が、60代になったとき。何が待っているのか。データで見ると、少し怖くなります。

## 40代独身、もはや「普通」の時代

まず現実から。

総務省の国勢調査（2020年）によると、40代男性の未婚率は全国平均**28.4%**。

1990年はたった5.6%でした。30年で5倍になっています。東京に限ると**38.4%**——40代男性の4人に1人以上が独身です。

「自分だけじゃないんだ」と思った人、多いんじゃないでしょうか。

でもここからが本題です。

## 「今は平気」が、60代で一変する

40代のうちは、たいてい何とかなります。

親が生きている。体も動く。職場のつながりがある。友人とも会える。「孤独」を感じる場面は少ないはずです。

でも20年後、状況は変わります。

親は他界している可能性が高い。定年退職で職場のつながりが切れる。体のどこかに不調が出てくる。友人は家族優先で会いにくくなる——。

「誰かに頼りたい」と思ったとき、頼れる人がいない。その状況が孤独死リスクを一気に引き上げます。

## 孤独死リスクが高い県、低い県

サイトの孤独死リスク指数（独居高齢者率・未婚率・人口密度などの複合指標）で見ると、リスクが高い地域として北海道・東北・高知などが上位に挙がっています。

「田舎の方が人のつながりが強いんじゃないの？」と思いましたか。

確かにそういう面もあります。でも東北は高齢化率が全国最高クラスで、農村部に一人で暮らす高齢者が多い。配偶者に先立たれた後、雪の中で誰とも会わない日々が続く——そういう構造的な孤立があります。

一方、東京は40代未婚率38.4%と高く、しかも「隣人を知らない」という都市的な孤立が深刻です。人口が密集しているのに、誰も気づかないまま亡くなるケースが都市部では起きています。

**「田舎は人間関係が濃いから安心」でも「都会は人が多いから安心」でもない。**

あなたの県は、どちらのリスクに近いでしょうか。

## 問題は「独身かどうか」じゃない

ここで一つ、誤解を解いておきます。

「結婚すれば解決」という話では全然ありません。

孤独死した人の中には、離婚経験者・死別した人も多くいます。逆に独身でも、友人・地域・趣味のコミュニティに深く関わっている人は孤独死リスクが低い。

問題は「パートナーがいるかどうか」ではなく、「社会的なつながりがあるかどうか」です。

40代のうちに、職場以外のつながりをどれだけ作れるか。それが20年後の自分への一番の「投資」かもしれません。

## 自分の県のリスク、調べてみてください

全国47都道府県の孤独死リスク指数・未婚率・高齢化率のデータは、japan-stats.comで確認できます。

「自分の県って実際どうなんだろ」と思ったら、ぜひ一度調べてみてください。都道府県診断機能では、自分の属性に合わせた住みやすさスコアも出せます。

思ってたより意外な結果が出るかもしれません。

👉 自分の県のデータを確認する → （https://www.japan-stats.com/）

https://japan-stats.com/（https://japan-stats.com/）

あなたの20年後、今の生活の延長線上にあります。

データは「怖い話」をしているんじゃなくて、「今から動けますよ」と言っているんだと思います。

データ出典：総務省 国勢調査（2020年）
`,nda7e0ba602e9:`
**「未婚が増えたから少子化が進む」。なんとなくそう信じていませんか。でもデータを重ねると、話はそう単純じゃなかった。**

あなたの周りに、結婚していない30代・40代はいますか？

おそらく、昔より確実に増えていると思います。「最近みんな結婚しないよね」という感覚、正しいです。

でも今日話したいのは、「だから少子化が進む」という話が、実はデータ的に正確じゃないかもしれない、ということです。

## 30代男性、もう半数以上が未婚

まず現実を確認しておくと、30〜39歳男性の未婚率は全国平均**51.8%**（総務省 国勢調査2020年）。

1990年は32.6%でした。30年で約20ポイント上がっています。

都道府県別では、

- **東京都：52.8%**（30代男性の2人に1人が未婚）
- **秋田県：35.4%・山形県：36.8%**（地方は低め）
「都会ほど結婚しない、地方ほど結婚する」という傾向がくっきりあります。

だとすれば、地方の方が子どもが多いはず——と思いますよね？

## ところが、出生率と重ねると話が変わる

厚生労働省の人口動態統計（2022年）によると、出生率のランキングは、

- **1位：沖縄県 1.70**
- **最低：東京都 1.04**
- 全国平均：1.26
ここで不思議なことが起きます。

未婚率が低い東北（秋田・山形）の出生率は、全国平均前後かそれ以下。「結婚している人が多い県＝子どもが多い県」になっていないんです。

あなたの県はどうでしょうか。未婚率と出生率、両方確認してみると意外な結果が出るかもしれません。

## 「結婚していても産まない」時代

なぜ未婚率が低い地方で出生率も伸びないのか。

秋田を例に見ると、転出超過率は全国ワースト（-6.8、人口千対）。結婚適齢期の若者がそもそも都市に流出していて、地元に残っているカップルの絶対数が少ない。

さらに晩婚化は地方でも進んでいます。30代で結婚しても「1人でいい」「経済的に不安」という理由で産む数を抑えるカップルが増えている。

「結婚さえすれば産む」という前提が、今の時代には当てはまらなくなっています。

## 沖縄が出生率1位な理由は「結婚の多さ」じゃない

出生率全国1位の沖縄（1.70）は、未婚率が特別低いわけではありません。

沖縄の強さは「若い世代が多い」「早婚文化」「地域全体で子育てする文化（ゆいまーる）」という独自の構造から来ています。

つまり大事なのは「結婚しているかどうか」より「産んでも育てられる環境があるかどうか」なんです。

## 少子化対策の「本当の問い」

このデータが示すのは、「婚活支援＝少子化解決」という単純な処方箋への疑問です。

未婚率が低い地方でも子どもは増えていない。未婚率が高い東京で出生率は最低。少子化の本当の敵は「結婚しないこと」ではなく、「子どもを産み育てることへの不安とコスト」の方が大きい。

あなたが住む県の未婚率と出生率、両方を重ねて見てみると、自分の地域の「少子化の構造」が少し見えてくるはずです。

👉 あなたの県の出生率・未婚率を確認する→ （https://www.japan-stats.com/）

https://japan-stats.com/（https://japan-stats.com/）

「結婚しないから子どもが減る」じゃなくて、「産みたくても産めない社会」になっている——データはそう言っている気がします。

データ出典：総務省 国勢調査（2020年）／厚生労働省 人口動態統計（2022年）
`,ne1a810568ff5:`
## 「外国人が増えると治安が悪くなる」——その感覚、データで確かめてみましたか

**なんとなくそう感じている人は多い。でも「なんとなく」を数字で検証したとき、思ってたのと違う結果が出ることがある。**

正直に聞きます。

「近所に外国人が増えてきた」と感じたとき、少し不安になったことはありませんか？

悪いことだとは思いません。知らない文化・言語・習慣への警戒心は、人間として自然な感覚です。ニュースで外国人の犯罪が報道されると、「やっぱり怖い」と感じる。それも理解できます。

でも「感覚」と「データ」が食い違うとき、どちらを信じるかで、見える世界がかなり変わります。今日はそのデータを見てみます。

## 外国人比率のランキング

総務省の住民基本台帳（2022年）によると、総人口に占める外国人の割合は、

- **1位：東京都 4.2%**
- **2位：愛知県 3.8%**
- **3位：群馬県 2.8%**
- **全国平均：2.5%**
- **最低：岩手・秋田・高知など 0.3〜0.4%**
東京と秋田の差は約**14倍**。

東京に外国人が多い理由は、国際的なビジネス・留学・観光業の集積です。一方、愛知・群馬・静岡などに多い理由は製造業の工場労働力——トヨタをはじめとする大手メーカーの工場で、技能実習生・特定技能労働者として多くの外国人が働いています。

では、外国人が多い愛知や群馬の治安は実際どうなのでしょうか。

## 犯罪率を重ねると「思い込み」が崩れる

警察庁の犯罪統計（2022年）によると、刑法犯認知件数（人口10万人あたり）の上位は以下のとおりです。

- **東京都：568件**
- **大阪府：528件**
- **最低水準：秋田・山形・富山など東北・北陸 約250件前後**
外国人比率2位の愛知県は——全国中位程度の犯罪率です。外国人が多い群馬・静岡も、特別犯罪率が高いわけではありません。

「外国人が多い地域ほど犯罪が多い」という仮説は、データ的に成立しません。

むしろ面白いのは、犯罪率が高い東京（568件）と大阪（528件）は、外国人比率が高い地域でもありますが、その原因は外国人ではなく「都市構造」にあります。

## 犯罪率を決めているのは「都市の構造」

犯罪率の高低に一番影響するのは、外国人比率ではなく、人口密度・繁華街の集中・人の流動性です。

東京や大阪の犯罪率が高い理由は、人が多く集まる繁華街・歓楽街があり、スリ・詐欺・暴行など「人の多い場所で起きる犯罪」が多いからです。逆に言えば、東京の外国人比率が今後さらに上がったとしても、都市構造が変わらなければ犯罪率は大きく変化しないはずです。

また法務省の犯罪白書によると、刑法犯の検挙者に占める外国人の割合は約2〜3%台で推移しており、全人口に占める外国人比率（約2.5%）とほぼ変わりません。「外国人が犯罪を多く起こしている」というデータは確認されていないのが実態です。

## 「外国人犯罪が増えている」という感覚はどこから来るか

それでも「外国人犯罪が増えている気がする」という感覚を持つ人は少なくありません。

これには人間の認知の特性が関係しています。「自分と違う人」による犯罪はニュースで報道されやすく、記憶に残りやすい。一方、「自分と同じ属性」の人による犯罪は印象に残りにくい。

この「記憶に残りやすさの偏り」が、実際のデータとズレた感覚を生み出します。

外国人による犯罪がゼロだとは言いません。でも「増えている・多い」という感覚とデータの間には、はっきりした乖離があります。

## 「外国人がいない地域＝安全」とも言えない

外国人がほぼいない東北・北陸は、確かに犯罪率は低い。でも同じ地域が自殺率・肥満率・高齢化率では深刻な数字を示しています。

「外国人がいないから安全・安心」という単純な図式は、地域の実態を見えにくくします。外国人がいないことが地域の「豊かさ」を保証するわけではありません。

逆に、外国人労働者が多い愛知・静岡は製造業が盛んで雇用が安定しており、経済的に豊かな地域として機能しています。外国人の存在が地域経済を支えている側面もあるわけです。

## あなたの県の外国人比率、知っていますか

「感覚」は大事です。でも感覚だけで判断するより、一度データを見てみると「思ってたのと違う」という発見があることがあります。

あなたの県の外国人比率は全国何位か。犯罪率はどの水準か。2つを並べて見ると、自分の地域に対する理解が少し変わるかもしれません。

👉 あなたの県の外国人比率・犯罪率を確認する → （https://www.japan-stats.com/）

https://japan-stats.com/（https://japan-stats.com/）

「感覚」と「データ」が食い違ったとき——あなたはどちらを信じますか。

データ出典：総務省 住民基本台帳（2022年）／警察庁 犯罪統計（2022年）／法務省 犯罪白書
`,n029aff3cb7de:`
**「なんとなく東京の方が良さそう」——でもその「なんとなく」、データで見るとちゃんと理由がありました。そして同時に、思ってたより損してる部分も見えてきます。**

あなたは今、生まれた県に住んでいますか？

それとも、地元を出て別の場所に住んでいますか？

どちらにせよ、「なぜその場所を選んだか」を改めて考えると、意外と「なんとなく」だったりしませんか。仕事の都合、なんとなく都会に出たかった、友達がいる——そういう理由で住む場所を決めた人は多いはずです。

でもデータで見ると、「人が集まる場所」と「人が出ていく場所」には、はっきりした理由があります。

## 毎年、地方から人が消えている

総務省の住民基本台帳人口移動報告（2022年）によると、転入超過率（人口千人あたりの純増数）は、

- **東京都：+8.4**
- **神奈川県：+4.8**
- **埼玉県：+4.2**
- **秋田県：-6.8**（全国最大の転出超過）
- **青森県：-4.8**
- **岩手県：-4.2**
東京には毎年、人口千人あたり8.4人が純増で流入し続けています。一方、秋田では千人あたり6.8人が純減で流出している。

秋田の総人口は約95万人。-6.8という数字は、毎年約6400人が純流出していることを意味します。毎年、小さな町がひとつ消えていくようなペースです。

なぜ人は東京に集まり、秋田から出ていくのか。

## 給与を重ねると「正体」が見える

内閣府の県民経済計算によると、1人あたり県民所得は、

- **1位：東京都 485万円**
- **2位：愛知県 352万円**
- **最低：青森県 238万円**
東京と青森の差は**247万円**。同じ仕事でも、住む場所によってこれだけ年収が変わります。

転入超過1位の東京が給与1位、転出超過ワーストの秋田・青森が給与ワーストクラス——2つのデータは見事に重なります。

「給料が高い方に人が動く」。シンプルですが、一極集中の正体はこれです。地元を離れた人が「なんとなく」と言っていた理由は、実はデータとして明快に説明できます。

## でも「東京に来れば豊か」は本当か

247万円の給与差、そのまま「豊かさの差」として受け取っていいでしょうか。

実際には、東京で稼ぐ分、東京で使うコストも大きい。

**家賃の差を見てみます。**

東京の1LDK平均家賃は月15〜20万円前後（都心部）。青森市内なら同じ広さで5〜7万円程度。年間で100〜150万円の差です。

**物価の差もあります。**

総務省の消費者物価地域差指数（2022年）では東京106.4、青森97〜98台。生活全体のコストが東京のほうが約9ポイント高い。食費・交通費・外食代まで含めると、日々の出費は確実に多くなります。

**さらに通勤時間という「見えないコスト」があります。**

東京の平均通勤時間は片道約48分。埼玉からだと58分。年間250日で計算すると、約500時間を通勤に費やしています。この時間はお金に換算されませんが、確実に「失っている」ものです。

給与差247万円から家賃・物価・通勤コストを引いていくと、実質的な豊かさの差は見かけよりずっと小さくなります。

## それでも人が東京に来る理由

数字的に「実質差は思ったより小さい」としても、人は東京に集まり続けます。その理由はお金だけではありません。

**仕事の選択肢の多さ。**

東京には多様な業種・企業が集積しており、「転職しやすい」「やりたい仕事に就きやすい」環境があります。地方では一度就職先を間違えると転職先が限られます。

**情報・人脈・刺激。**

最先端のビジネス・文化・情報が集まる東京では、「いれば何かに出会える」という感覚が実際にあります。数字では測れない価値として機能しています。

**「地方に帰れない」という心理。**

一度東京で生活水準が上がりコミュニティができると、地元に戻りにくくなります。転入超過は「東京の引力」だけでなく「地方への戻りにくさ」も含んでいます。

## 「住む場所のコスパ」を計算したことありますか

給与だけで住む場所を選ぶのか、家賃・物価・通勤時間まで含めて「実質的な豊かさ」で選ぶのか——どちらで見るかで答えが変わります。

あなたが今住んでいる場所、本当にコスパが良いですか？

給与は高くても、家賃と通勤時間で相殺されていませんか？逆に地方に住んで「給料低い」と思っていても、実は東京より手元に残るお金が多いかもしれません。

👉 あなたの県の給与・転入超過率を確認する → （https://www.japan-stats.com/）

https://japan-stats.com/（https://japan-stats.com/）

「住む場所」は人生の中で一番大きな選択のひとつ。データを持った上で選ぶのと、なんとなく選ぶのでは、10年後・20年後が変わってくるかもしれません。

データ出典：総務省 住民基本台帳人口移動報告（2022年）／内閣府 県民経済計算／総務省 消費者物価地域差指数（2022年）
`,nc087b147fe5d:`
**日本の食を支えているのは北海道だ。それは間違いない。でも「稼いでいる」はずの北海道から、毎年人が消えていく。その矛盾の正体が、地方の「稼げない構造」を教えてくれる。**

あなたは北海道の農業がどれだけ強いか、知っていますか？

正直、数字を見ると「え、そこまで？」と思うはずです。

そして同時に、もう一つ意外な数字がついてきます。「そんなに稼いでいるのに、なぜ？」と思う数字が。

## 北海道、圧倒的すぎる

農林水産省の統計（2022年）によると、都道府県別の農業産出額は、

- **1位：北海道 1兆2,480億円**
- **2位：鹿児島県 2,178億円**
- **3位：茨城県・千葉県・宮崎県など**
2位の鹿児島と比べると**約5.7倍**の差。北海道だけで日本全体の農業産出額の約2割を占めています。

なぜここまで強いのか。最大の理由は面積です。北海道の総面積は約8.3万km²で全国の約22%を占め、農地面積は全国の約25%が北海道に集中しています。農家1戸あたりの農地は全国平均の約10倍。機械化・効率化による大規模経営が可能なわけです。

特に酪農は圧倒的で、全国生乳生産量の約55%が北海道産です。バター・チーズ・ヨーグルト——スーパーで目にするほぼすべての乳製品の原料は北海道から来ています。

「北海道なしでは日本の食卓は成り立たない」は、比喩ではなく事実です。

## でも、北海道から人が出ていく

ここからが面白いところです。

総務省の住民基本台帳人口移動報告（2022年）によると、北海道の転入超過率はマイナス。人口は毎年純減しています。

農業産出額が高い地域を見ていくと、同じ構図が続きます。

- **1位：北海道** → 転出超過
- **2位：鹿児島** → 転出超過
- **3位：茨城・宮崎など** → 多くが転出超過
「農業が強い地域ほど、人が出ていく」。

農業産出額トップクラスなのに、若者は都市へ流出する。この矛盾、どう読みますか。

## 「産出額が高い」と「給料が高い」は別の話

なぜ稼いでいるはずの農業地帯から人が出ていくのか。一番大きな理由は、「農業の産出額」と「農業従事者の個人所得」が別の話だからです。

北海道の農業産出額1兆2,480億円は、道内の農家・農業法人全体が稼ぐ総額です。でも農業従事者1人あたりの所得は、都市部の製造業やサービス業と比べると必ずしも高くありません。

農業は広大な土地・大型機械・肥料・種苗などへの投資コストが非常に大きい。売上から経費を引いた「手取り」は、売上規模に比べるとずっと小さくなります。

**さらに「農業以外の仕事がない」問題があります。**

農業地帯には、IT・金融・大手メーカーのような高給職が集積していません。農家の子どもが大学進学後に地元に帰らない理由の一つが「帰っても農業しかない」という現実です。都市部では転職の選択肢が多いですが、農村では「農業か、出ていくか」という二択に近い状況になりやすい。

**そして若者が農業を選びにくい問題もあります。**

農業は重労働で収入が不安定。天候に左右され、休日も取りにくい。都市部の安定した給与の仕事と比べると、就職先として選びにくい面があります。「農業は大切だとわかってるけど、自分がやるかというと...」という感覚、理解できますよね。

## 日本の食料自給率38%という現実

一方で忘れてはならないのは、北海道農業の食料安全保障上の重要性です。

日本の食料自給率はカロリーベースで約38%。先進国の中では極めて低い水準です。輸入が止まれば、日本の食卓は成り立たなくなる。その中で北海道は食料自給率200%超を誇り、実質的に日本全体の食を支えています。

人口が減り続けながらも、日本の食を支え続けている。それが北海道の現実です。農業従事者の高齢化・後継者不足という問題を抱えながら、それでも毎年1兆円超を稼ぎ続けている。

「誰かがやらなければならない」仕事を、黙って続けている地域がある。その事実を、都市部に住む私たちはどれだけ意識しているでしょうか。

## あなたの県の「稼ぐ力」と「人口」を重ねてみてください

「農業が強い県＝人が増える県」にはなっていない。でも「農業が弱い県が豊かか」といえばそれも違う。

産業の強さと人口の増減は、必ずしも一致しない——そのことを知った上で、自分の地域を見てみると、違う景色が見えてくるかもしれません。

あなたの県の農業産出額・転入超過率・給与データを並べてみると、「なぜここに人が増えるのか・減るのか」の構造が少し見えてきます。

👉 あなたの県の農業産出額・人口データを確認する → （https://www.japan-stats.com/）

https://japan-stats.com/（https://japan-stats.com/）

北海道が稼いでいるのに人が出ていく。この矛盾は、日本の地方全体が抱える「稼げない構造」の縮図かもしれません。あなたの地元は、どうですか。

データ出典：農林水産省 作物統計・畜産統計（2022年）／総務省 住民基本台帳人口移動報告（2022年）
`,n21db13b6e8ba:`
**沖縄が出生率全国1位なのはなぜか。文化・経済・若者人口——いろんな説がある。でも「日照時間」という切り口で見ると、また違う景色が見えてくる。**

あなたが住んでいる県、今年の冬は晴れていましたか？

「そんなこと出生率と関係あるの？」と思った人、少し待ってください。データを重ねると、意外なほどきれいに重なるんです。

## 日照時間、県によってこんなに違う

気象庁の気象統計情報（2022年平年値）によると、年間日照時間のランキングはこうなっています。

- **上位：沖縄・山梨・静岡 2,100〜2,200時間**
- **下位：秋田・山形・新潟など日本海側 1,400〜1,600時間**
差は最大で**800時間**。1日あたり2時間以上の差が、1年中続いています。

秋田・新潟の冬は、どんよりとした曇り空が何週間も続くことがあります。太陽を見ない日が当たり前になる地域と、一年中明るい沖縄では、毎日の気分がまったく違う。それは感覚だけでなく、データにも出ています。

## 出生率と重ねると「重なり」が見えてくる

厚生労働省の人口動態統計（2022年）によると、合計特殊出生率は、

- **1位：沖縄県 1.70**
- **2位：宮崎県 1.54・熊本県 1.55**（九州南部が上位）
- **最低：東京都 1.04**
- **全国平均：1.26**
ここで2つを重ねると、面白いことが起きます。

**出生率が高い地域（沖縄・九州南部）は、日照時間も長い地域と重なっている。**

逆に日照時間が短い東北——秋田・山形・岩手——は、出生率も全国平均前後かそれ以下です。

「晴れている県ほど子どもが多い」——そう言うと少し雑に聞こえますが、データ的にはそういう傾向があります。

## 日照時間と「気分」の関係

なぜ日照時間が出生率に影響するのでしょうか。

医学的な観点から言うと、日照時間は精神的な健康に直結します。太陽光はセロトニン（幸福感に関わる神経伝達物質）の分泌を促し、日照が少ないとうつ状態になりやすいことが知られています。

特に「季節性うつ病（SAD）」は、冬の日照不足によって引き起こされるとされており、秋田・新潟など日本海側の地域での発症率が高いという報告もあります。

精神的に明るい状態にあることが、将来への前向きな気持ち——パートナーと子どもを持つという選択——につながりやすい。そういうメカニズムが、数字の背景にある可能性があります。

あなたの県の日照時間は全国何位でしょうか？一度確認してみてください。

👉 あなたの県の日照時間・出生率を確認する → japan-stats.com（https://www.japan-stats.com/）

## もちろん日照時間だけではない

「じゃあ曇りの多い地方には住めない」という話ではありません。

沖縄の出生率が高い理由は、日照時間だけでなく「ゆいまーる（地域で子育てを助け合う文化）」「若い世代が多い人口構造」「早婚文化」などが複合的に絡み合っています。

実際、日照時間が長くても出生率が高くない地域もあります。山梨・静岡は日照時間が長いですが、出生率は全国平均前後です。都市部に近い立地のため、生活コストや晩婚化の影響を受けているためと考えられます。

つまり「日照時間→出生率」という一本の矢印ではなく、「日照時間は出生率に影響する要因のひとつ」という読み方が正確です。

## 「環境」が人の選択を変える

このデータが示すのは、「産む・産まない」という選択が、個人の意志だけで決まるものではないということです。

毎日の天気・気候・コミュニティの温かさ・経済的な安心感——そうした「環境の総体」が、気づかないうちに人の選択に影響しています。

「なぜあの地域は出生率が高いのか」を考えるとき、文化や政策だけでなく「そこで暮らす人の気分」まで含めて考えると、また違う視点が開けてきます。

あなたの地元の日照時間と出生率、2つを並べて見てみると、何か気づくことがあるかもしれません。

👉 47都道府県の日照時間・出生率データを見る → japan-stats.com（https://www.japan-stats.com/）

太陽の多い場所に、笑顔が集まる。データはそんなことを、静かに教えてくれています。

データ出典：気象庁 気象統計情報（2022年平年値）／厚生労働省 人口動態統計（2022年）
`,n3545da367e6a:`
**東京と青森の最低賃金差は219円。「地方は安い賃金で搾取されている」という見方もあれば、「物価が低いから問題ない」という見方もある。データで確かめると、どちらも少し正しくて、少し間違っていた。**

あなたは今の時給、「割に合っている」と思いますか？

住んでいる場所によって、同じ「割に合う」の基準がまったく違うかもしれません。

## 最低賃金、県によって219円の差がある

厚生労働省の地域別最低賃金（2022年）によると、

- **1位：東京都 1,072円**
- **2位：神奈川県 1,071円**
- **最低：青森・秋田・宮崎など 853〜854円**
- **全国平均：961円**
東京と青森の差は**219円**。

月160時間働くと、月額で**3.5万円**の差。年間では**42万円**の差になります。

「同じ日本で、なぜこれだけ違うのか」と思いますよね。でも最低賃金の差には、ちゃんとした背景があります。

最低賃金は、その地域の「経済規模」と「企業の支払い能力」をもとに設定されます。東京は企業が集積し経済規模が大きいため高めに設定される。東北の一部は経済規模が小さく、企業が高い最低賃金を払えないという事情があります。

## 物価を重ねると「格差」が縮まる

では「青森は219円損している」かというと、話はそう単純ではありません。

総務省の消費者物価地域差指数（2022年）によると、

- **東京都：106.4**
- **神奈川：104.2**
- **青森・岩手・秋田など東北：97〜98台**
- **全国平均：100**
東京と青森の物価差は**約9ポイント**。

生活コスト全体が東京より低い青森では、853円で買えるものが東京の1,072円と同じ価値になる——という面があります。

特に家賃の差は大きい。東京の1K平均家賃は約8〜10万円。青森市内なら3〜4万円程度です。年間差で50〜80万円。最低賃金の年間差42万円を超えます。

「賃金差より家賃差の方が大きい」——つまり物価を考慮すると、実質的な購買力の差は数字ほど大きくない可能性があります。

あなたの県の最低賃金と物価、2つを並べて見てみると、「実質的な豊かさ」が見えてきます。

👉 あなたの県の最低賃金・物価データを確認する → japan-stats.com（https://www.japan-stats.com/）

## でも「割に合わない」部分は確実にある

物価差で説明できる部分はある。でも「だから問題ない」とは言えません。

**まず、すべてのものが安いわけではありません。**

食料品・光熱費・通信費・自動車関連費用などは、地域差が小さい。家賃は安くても、スーパーの食材やガソリン代は全国ほぼ同じ。物価差の恩恵を受けられる部分は、思ったより限定的です。

**次に、将来の格差が広がります。**

最低賃金は雇用保険・厚生年金の計算基礎にもなります。若いうちに低い賃金で働き続けると、将来の年金額にも差が出てくる。「今は物価が安いからいい」で済まない問題が、20〜30年後に出てきます。

**そして「選択肢の少なさ」があります。**

最低賃金が低い地域は、高収入の仕事の選択肢も少ない傾向があります。最低賃金はその地域の「賃金の底」ですが、その底が低いということは、全体的な賃金水準も低いということです。

## 格差は「縮まっている」が、まだ大きい

実は最低賃金の地域格差は、少しずつ縮まっています。

2012年の最大格差は226円でしたが、2022年には219円になっています。政府が地方の最低賃金を優先的に引き上げる方針を取っているためです。

ただしこのペースだと、東京と地方の差がゼロになるには、まだ数十年かかる計算になります。

## 「割に合っているか」は、自分で計算するしかない

最低賃金と物価を両方見て初めて、「自分が住む場所はコスパが良いのか」が判断できます。

賃金だけ見ても、物価だけ見ても、片方の話になってしまう。

あなたが今住んでいる場所の最低賃金と物価指数、確認してみてください。「思ってたより割に合っている」か「思ってたより損している」か、どちらかの発見があるはずです。

👉 あなたの県の最低賃金・物価データを見る → japan-stats.com（https://www.japan-stats.com/）

「安い賃金で物価も安い」は、本当に「割に合っている」のか。答えは、あなたが何を大事にするかによって変わります。

データ出典：厚生労働省 地域別最低賃金の全国一覧（2022年）／総務省 消費者物価地域差指数（2022年）
`,n868123e1808b:`
**「ゴミの量」と「豊かさ」は関係あるのか。なんとなく関係ありそうで、でもちょっと嫌な予感もする。データを重ねると、思ってたのと少し違う構図が見えてきた。**

突然ですが、昨日あなたはどれくらいゴミを捨てましたか？

「そんなこと考えたことない」という人がほとんどだと思います。でも都道府県別に見ると、住んでいる場所によってゴミの量がかなり違います。

そしてそのゴミの量、実は「豊かさ」と意外な関係があります。

## ゴミ排出量、1日あたりどれくらい違うか

環境省の一般廃棄物処理事業実態調査（2022年度）によると、1人1日あたりのゴミ排出量は、

- **多い：大阪府 958g・埼玉県 948g・沖縄県 928g**
- **少ない：長野県 818g・島根県 828g・高知県 828g**
- **全国平均：882g**
大阪と長野の差は**140g**。1日あたり140g、年間で約51kgの差です。

「たった140g」と思うかもしれませんが、これが全員分積み上がると膨大な量になります。大阪は人口約880万人なので、長野との差だけで年間約45万トン分のゴミが余分に出ている計算になります。

## 給与と重ねると「意外な構図」が見える

内閣府の県民経済計算で給与水準を重ねてみます。

- **東京都：485万円（全国1位）**→ ゴミ排出量は全国中位程度
- **大阪府：295万円（全国中位）**→ ゴミ排出量958g（全国最高水準）
- **長野県：約270万円（全国中位以下）**→ ゴミ排出量818g（全国最少水準）
面白いことが起きています。

**給与が最も高い東京はゴミが多くない。給与が中位の大阪がゴミ最多。給与が低い長野がゴミ最少。**

「稼いでいる人がたくさん消費してゴミが多い」という単純な図式が、データ的には成立しません。

あなたの県のゴミ排出量と給与、両方確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## ゴミの量を決めているのは「何」か

では何がゴミの量を決めているのでしょうか。

**まず人口密度と都市化の度合いです。**

大阪・埼玉・沖縄でゴミが多い背景には、外食・テイクアウト・コンビニ利用の多さがあります。都市部では自炊より外食が多く、容器・包装材のゴミが増えます。1人暮らしが多い都市部は、食材を使い切れずに食品ロスが出やすいという面もあります。

**次に「消費スタイル」の違いです。**

長野・島根などでゴミが少ない地域は、自家菜園・食材の使い切り・物を大切に使う文化が残っている地域でもあります。農業が身近な地域では、野菜の端切れを捨てずに使う、生ゴミをコンポストにするなどの習慣が都市部より浸透しています。

**そして「リサイクル文化」の差です。**

長野県はリサイクル・資源分別への意識が高い地域として知られており、ゴミとして捨てる前に資源として出す割合が高い。「ゴミが少ない＝捨てていない」ではなく「ゴミとして出す前にリサイクルしている」という側面もあります。

## 「ゴミが多い＝豊か」ではなかった

最初の問い「ゴミが多い県ほど豊かか」に戻ります。

データを見ると、答えは「NO」です。

ゴミの多さは「消費量の多さ」を反映しますが、それは必ずしも「豊かさ」ではありません。外食・テイクアウト・コンビニへの依存が多い生活スタイルがゴミを増やしており、むしろ「生活の効率が悪い」状態を示している面もあります。

逆に長野のようにゴミが少ない地域は、自炊・リサイクル・食材の使い切りが文化として根付いており、「豊かさの質」が違うとも言えます。

お金を使えばゴミが増えるわけでも、ゴミが少なければ貧しいわけでもない。ゴミの量は、その地域の「消費の仕方」と「生活文化」を映す鏡です。

## まとめの代わりに、一つの問いを

あなたは今日、ゴミをいくつ捨てましたか？

その数は「豊かさ」の証でしょうか。それとも「無駄」の証でしょうか。

都道府県のゴミ排出量データを見ると、その問いへの答えが少し見えてくるかもしれません。

👉 全47都道府県のゴミ排出量データを見る → japan-stats.com（https://www.japan-stats.com/）

データ出典：環境省 一般廃棄物処理事業実態調査（2022年度）／内閣府 県民経済計算
`,ncd6520e34859:`
**毎日の通勤、電車ですか？車ですか？その選択が、実は事故リスクと深くつながっているかもしれません。データを重ねると、通勤手段の違いが生む「格差」が見えてきます。**

あなたは毎日、何で通勤していますか？

電車・バス・車・自転車・徒歩——住んでいる場所によって、選べる手段がまったく違います。

都市部に住んでいれば電車一択のことも多い。でも地方に住んでいれば「車がなければ通勤できない」という地域も珍しくありません。

その「通勤手段の違い」が、事故リスクに影響しているとしたら？

## 交通事故、どの県が多いか

警察庁の交通統計（2022年）によると、人口10万人あたりの交通事故発生件数は、

- **多い：神奈川・埼玉・東京など都市圏**
- **少ない：岩手・秋田・島根など地方県**
- **全国平均：348件**（2010年の652件から大幅に減少）
「都市圏で多い」というのは直感と合いますね。車も人も多い場所では事故も増えやすい。

でも次のデータを重ねると、少し違う構図が見えてきます。

## 通勤時間と重ねると「意外な逆転」が

総務省の社会生活基本調査（2021年）によると、片道の平均通勤時間は、

- **1位：埼玉県 58分**（ほぼ電車通勤）
- **2位前後：神奈川・千葉など首都圏**
- **最短：山形・島根・高知 22〜24分**
ここで面白いことが起きます。

通勤時間が長い埼玉・神奈川・千葉は、主に電車通勤が中心です。でも交通事故件数では上位——つまり「電車で通勤しているのに事故が多い」地域になっています。

一方、通勤時間が短い山形・島根・高知は、車通勤が多い地域ですが、交通事故件数は少ない。

「車通勤の地方＝事故が多い」という単純な図式は成り立ちません。

あなたの県の通勤時間と交通事故件数、両方確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## 都市圏の事故が多い本当の理由

都市圏で事故が多い理由は「車の数」だけではありません。

**まず、絶対的な人と車の量です。**

神奈川・埼玉は人口密度が高く、車・自転車・歩行者が狭い道を共有しています。交差点の数が多く、出会い頭の事故が起きやすい環境があります。

**次に、歩行者・自転車との接触リスクです。**

都市部では歩行者・自転車の密度が高い。特に通勤ラッシュ時間帯は、歩行者が信号を無視したり、自転車が無灯火で走ったりするケースも増えます。車の運転手だけでなく、歩行者・自転車側のリスクも都市では高い。

**そして「慣れ」の問題があります。**

地方の車通勤者は毎日同じ道を走り、地元の道路状況を熟知しています。一方、都市部では道路が複雑で、初めて通る道や一方通行の多いエリアでの事故リスクが高まります。

## 地方の車通勤が「意外と安全」な理由

山形・島根・高知は車通勤が多いにもかかわらず、事故件数が少ない。

理由のひとつは「交通量そのものが少ない」こと。人口が少ない地域では車の絶対数も少なく、接触リスクが下がります。

もうひとつは「道路が広い」こと。地方の幹線道路は都市部より幅が広く、歩行者・自転車との分離が進んでいる道路も多い。

ただし「事故件数が少ない＝安全」とも言い切れません。地方では事故が起きたときの救急車の到着時間が都市部より長く、重症化しやすいというリスクがあります。事故の「数」と「深刻さ」は別の問題です。

## リモートワークで「通勤事故」は減るのか

コロナ以降、リモートワークの普及で通勤者数が減り、交通事故件数は全国的に減少傾向にあります。

2010年に全国で652件（人口10万人あたり）だった事故件数は、2022年には348件と約半分になっています。リモートワークの普及が事故減少に寄与しているとも考えられます。

「通勤しない」という選択が、事故リスクを根本から下げる——リモートワーク時代の「安全コスト削減」という視点は、まだあまり語られていません。

## あなたの通勤、「リスク」を考えたことありますか

毎日当たり前にしている通勤。でもその通勤スタイルによって、事故リスクはかなり変わります。

車通勤か電車通勤か。ラッシュを避けた時間帯か。自転車を使うか——それぞれに異なるリスクがあります。

あなたの県の交通事故件数と通勤時間を重ねて見ると、自分の通勤の「リスクの文脈」が少し見えてくるはずです。

👉 あなたの県の交通事故・通勤データを確認する → japan-stats.com（https://www.japan-stats.com/）

毎日の通勤は、実はリスクとのトレードオフです。そのリスク、意識したことはありましたか。

データ出典：警察庁 交通統計（2022年）／総務省 社会生活基本調査（2021年）
`,n27024218475a:`
**給食費と大学進学率。一見まったく関係なさそうな2つのデータを重ねたとき、不思議なほどきれいな傾向が見えてきた。「小さな日常の格差」が、18年後の人生に影響しているとしたら。**

あなたは子どものころ、給食が好きでしたか？

毎日当たり前に食べていた給食。でもその給食費、実は住んでいる県によって月2,000円近い差があることを知っていますか？

そしてその差が、18年後の進路と関係しているかもしれないとしたら——少し気になりませんか。

## 給食費、県によってこんなに違う

文部科学省の学校給食実施状況等調査（2022年度）によると、公立小学校の給食費（月額平均）は、

- **最高：東京都 5,521円**
- **次いで：神奈川・千葉など首都圏が高め**
- **最低：沖縄県 3,482円**
- **全国平均：4,477円**
東京と沖縄の差は月**2,039円**。年間で約**2.5万円**の差です。

「東京の方が高い食材を使っているから？」と思った人、半分正解です。都市部は食材の流通コストが高く、給食の運営費も高くなります。一方、地方は食材が地元調達しやすく、コストを抑えられる面があります。

ただし最近は状況が変わっています。2023年以降、給食費を無償化する自治体が急増しており、「給食費ゼロ」の地域も増えてきました。

## 大学進学率を重ねると

文部科学省の学校基本調査（2022年）によると、大学・短大への進学率は、

- **1位：東京都 72.4%**
- **2位前後：神奈川・京都・愛知など**
- **最低：秋田県・山形県 34〜35%台**
- **全国平均：60.4%**
東京と秋田の差は約**38ポイント**。高校を卒業した後に大学に進む割合が、住む場所によってこれほど違います。

ここで2つを重ねてみます。

**給食費が高い首都圏・都市部は、大学進学率も高い。** **給食費が低い地方は、大学進学率も低い傾向がある。**

「給食費が高いから進学率が高い」のではありません。でも2つが重なる背景には、共通した「何か」があります。

あなたの県の給食費と進学率、確認してみてください。

👉 あなたの県の給食費・大学進学率を確認する → japan-stats.com（https://www.japan-stats.com/）

## 2つが重なる「本当の理由」

給食費と進学率が同じ方向を向いている背景には、「教育への投資意識と経済力の地域差」があります。

**まず、経済力の差です。**

給食費が高い地域は、物価・家賃・収入がすべて高い首都圏です。経済的に余裕がある家庭が多い地域では、大学進学の費用（年間100〜200万円）も出しやすい。逆に、地方の低い給与水準では「子どもを大学に出す余裕がない」という家庭も出てきます。

**次に、大学へのアクセスの差です。**

東京には100校以上の大学・短大があります。自宅から通える選択肢が豊富なため、家賃・仕送りなしで大学に通える環境があります。一方、大学が少ない地方では「進学するなら県外」が前提になり、費用がかさみます。

**そして、周囲の「当たり前」の差です。**

「友達みんなが大学に行くから自分も」という環境と、「高校を卒業して地元で就職するのが普通」という環境では、進学への意識が違ってきます。給食費の差は小さくても、「教育をどれだけ大切にするか」という地域の文化的な差が、数字のそこここに顔を出しています。

## 「小さな格差」が積み重なる

給食費の月2,039円の差は、単体で見れば小さい。

でも「給食費・学校の設備・塾や習い事の環境・家庭の収入・周囲の進学率」という複数の格差が積み重なったとき、18年後の進路に影響してくる可能性があります。

大学進学率38ポイント差は、「その地域の子どもが38ポイント分、頑張りが足りない」という話ではまったくありません。「その地域が置かれた経済・地理・文化的環境の差」が、数字に出ているだけです。

## 変わりつつある「給食費格差」

ひとつ明るい話があります。

給食費の無償化は急速に広がっており、2023年時点で全国の約30%の自治体が無償化または補助を実施しています。

「給食費が払えないから子どもを学校に行かせにくい」という問題が減ることで、教育格差の一部は解消される方向に動いています。

ただし、給食費だけが問題ではありません。大学進学にかかる費用・地方の大学の少なさ・地域の経済力——これらが変わらなければ、38ポイント差は縮まりにくいままです。

## 子どもの「環境格差」に気づいていますか

給食費と大学進学率。2つのデータを重ねて見えてくるのは、「どこで生まれ育つか」が子どもの将来に影響するという現実です。

これは「地方が悪い」という話ではありません。でも「同じ努力をしても、環境によって結果が違う」という構造は、データが静かに示しています。

あなたの地元の給食費と進学率、確認してみてください。自分が育った環境を、少し違う角度から見るきっかけになるかもしれません。

👉 47都道府県の給食費・大学進学率データを見る → japan-stats.com（https://www.japan-stats.com/）

「小さな差」が積み重なって、人生のスタートラインが変わる。給食費はその「小さな差」のひとつです。

データ出典：文部科学省 学校給食実施状況等調査（2022年度）／文部科学省 学校基本調査（2022年）
`,nc11c8c7d5d7f:`
**あなたは昨日、何時間眠りましたか。「足りてない」と感じている人、その原因が通勤時間にあるかもしれません。データを重ねると、ぞっとするほどきれいに重なります。**

「最近ちゃんと眠れていない」と感じることはありませんか。

睡眠不足の原因として思い浮かぶのは、スマホの見すぎ、仕事のストレス、飲みすぎ——いろいろあると思います。でもデータで見ると、もっとシンプルな理由が浮かび上がってきます。

**通勤時間です。**

## 日本で一番眠れていない都道府県

総務省の社会生活基本調査（2021年）によると、1日の平均睡眠時間は、

- **最長：秋田県 518分（約8時間38分）**
- **東北・北海道：おおむね500〜510分台**
- **最短：東京都 462分（約7時間42分）**
- **全国平均：487分（約8時間7分）**
秋田と東京の差は**56分**。

「たった56分」と思った人、少し待ってください。1年間（365日）に換算すると**約340時間**になります。約14日分、まるまる眠れていない計算です。

毎年14日間の睡眠を削りながら東京で暮らしているとしたら——それはじわじわと体と心を消耗させていることになります。

## 通勤時間と重ねると「犯人」が見えてくる

総務省の社会生活基本調査（2021年）による通勤時間のランキングです。

- **1位：埼玉県 58分（片道）**
- **2位：神奈川県・千葉県など首都圏が続く**
- **東京都：約48分**
- **最短：山形・島根・高知など 22〜24分**
ここで2つを重ねると、ほぼ完璧に逆相関します。

**通勤時間が長い都道府県ほど、睡眠時間が短い。**

秋田（睡眠518分）の通勤時間は短い。東京（睡眠462分）の通勤時間は長い。埼玉は通勤時間58分と全国最長で、睡眠時間も短い水準に入ります。

「電車の中で寝ればいいじゃないか」という声もありますが、細切れの睡眠は質が低く、深い睡眠（ノンレム睡眠）には代替できません。

あなたの県の睡眠時間と通勤時間、両方確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## なぜ通勤が睡眠を奪うのか

構造はシンプルです。

朝の起床時間は、出勤時刻によって決まります。仕事が9時始まりで、通勤に1時間かかるなら、8時には家を出る必要がある。そうなると7時には起きなければならない。

でも夜の就寝時間は、仕事の終わり・夕食・入浴・リラックスタイムを経て、自然と後ろにずれます。東京では深夜まで営業する飲食店・コンビニ・エンターテインメントが豊富で、就寝を遅らせる誘惑も多い。

結果として「朝は早く起きなければならない・夜は遅くなりがち」という構造で、睡眠時間が圧縮されます。

これは「意志が弱い」の問題ではなく、通勤時間という「社会の構造」が生み出している問題です。

## 睡眠不足の代償は想像以上に大きい

「少し眠れていないくらい平気」と思っている人も多いですが、医学的には睡眠不足の影響は深刻です。

7時間未満の睡眠が続くと、糖尿病・高血圧・心疾患のリスクが高まることが研究で示されています。認知機能・集中力・判断力も低下し、仕事のパフォーマンスも下がります。

さらに免疫機能が低下し、感染症にかかりやすくなる。精神的にも不安定になりやすく、うつ病リスクとの関連も指摘されています。

ランド研究所の試算では、日本の睡眠不足による経済的損失は年間約**15兆円**にのぼるとされています。「睡眠は個人の問題」ではなく、社会全体のコストになっているのです。

## リモートワークは「睡眠格差」を縮めるか

コロナ禍でリモートワークが普及した際、通勤がなくなった人の睡眠時間が増えたという調査結果が複数報告されています。

「通勤ゼロ」になれば、朝の起床時間を1時間遅らせることができ、その分だけ睡眠時間が増える。単純な計算ですが、それだけで都市と地方の睡眠格差はかなり縮まります。

「睡眠のために引越しをする」という選択肢が現実的でないとしたら、次の現実的な解は「通勤しない働き方」です。

あなたの毎日の通勤時間、睡眠と引き換えにしてまで「割に合っている」と感じていますか？

👉 47都道府県の睡眠時間・通勤時間データを見る → japan-stats.com（https://www.japan-stats.com/）

年間340時間の睡眠不足。東京という場所を選ぶことの「隠れたコスト」は、思ったより大きいかもしれません。

データ出典：総務省 社会生活基本調査（2021年）
`,n037b3cd03be4:`
**あなたの県、自分の税金で行政サービスをまかなえていると思いますか。データで見ると、「自立できている県」は日本に1つしかありません。**

突然ですが、あなたは「地方交付税」という言葉を聞いたことがありますか？

なんとなく聞いたことはあっても、何のお金かよく知らない——そういう人が多いと思います。

でもこの「地方交付税」、実は都道府県の財政の根幹に関わる話で、「どの県が稼いでいてどの県が補助を受けているか」を数字で見ると、日本の構造がくっきり見えてきます。

## 「財政力指数」が示す現実

総務省の市町村財政の状況（2022年度）によると、都道府県別の財政力指数は、

- **東京都：1.064（全国唯一の1超え）**
- **愛知県：0.876**
- **神奈川県：0.954**
- **大阪府：0.809**
- **秋田県：0.258**
- **島根県・高知県：0.26〜0.27台**
財政力指数とは「自前の税収で行政サービスをどれだけまかなえるか」を示す数値です。1を超えれば自立、1を下回れば国からの補助（地方交付税）なしには行政が維持できません。

**全国47都道府県で1を超えているのは東京都だけ。**

他の46県は、多かれ少なかれ国からの「仕送り」に頼って行政を運営しています。

## 給与を重ねると構図がはっきりする

内閣府の県民経済計算による1人あたり県民所得を重ねます。

- **東京都：485万円（全国1位）**
- **愛知県：352万円（全国2位）**
- **青森県：238万円（最低）**
- **秋田県：240万円台（最低水準）**
財政力指数が高い地域は給与も高い。財政力指数が低い地域は給与も低い。2つのデータはほぼ完全に重なります。

理由は単純です。給与が高い地域は所得税・法人税の税収が多く、財政力が高くなる。給与が低い地域は税収が少なく、財政力が低くなる。

「稼げる地域が自立し、稼げない地域が補助を受ける」——当たり前のようですが、これが日本の財政の構造です。

あなたの県の財政力指数、確認してみてください。

👉 あなたの県の財政力指数・給与データを確認する → japan-stats.com（https://www.japan-stats.com/）

## 秋田0.258が意味すること

秋田県の財政力指数0.258は、自前の税収で行政コストの約26%しかまかなえないということです。

残りの約74%は地方交付税・国庫支出金など国からの補助に頼っています。

これは「秋田の人々が怠けている」ということではまったくありません。秋田は農業・林業・観光など地域資源を持ちながらも、人口減少と産業の衰退が進み、税収を生み出す経済基盤が弱くなっています。

また秋田は面積が広く（全国6位）、道路・橋・上下水道などのインフラ維持コストが高い。税収は少ないのにコストは高い——という構造的な問題があります。

## 「地方交付税」という仕送りの仕組み

日本では「地方交付税制度」によって、国が税収を一旦集めてから財政力の弱い自治体に再配分しています。

東京・愛知・神奈川・大阪などが稼いだ税金の一部が、秋田・島根・高知などの地方に配られる——という「全国規模の仕送り」が毎年行われています。

2022年度の地方交付税総額は約16.8兆円。これがなければ、多くの地方で学校・病院・道路の維持ができなくなります。

「地方が衰退しても東京には関係ない」は間違いで、地方の行政サービスは実質的に都市部の税収に支えられています。

## 「唯一自立している東京」は本当に豊かか

東京の財政力指数1.064は誇らしい数字に見えます。でも「自立しているから豊か」かというと、少し違います。

東京の財政力が高い最大の理由は「企業と人が集まっているから」です。全国から人・企業・お金が東京に集まり、税収を生み出す。でもそれは地方から人が出ていっているということでもあります。

地方の人口減少→税収減少→財政力低下→さらに人が出ていく——という悪循環が、財政力指数という数字に現れています。

「東京が一人勝ち」しているように見えるデータは、同時に「日本全体の人口・経済が一点に集中している」という構造の問題でもあります。

## あなたの県は「もらう側」か「支える側」か

財政力指数1未満の46県は「もらう側」、東京だけが「支える側」——そう言うと、地方に住む人が申し訳なく感じるかもしれません。

でも「地方が補助を受けるのは当然」という見方もできます。食料・水・エネルギー・観光資源——都市部の生活を支えているのは地方の産業と自然です。税収というお金の流れだけで豊かさは測れません。

データは「格差の現実」を教えてくれますが、その解釈はあなた次第です。

👉 47都道府県の財政力指数データを見る → japan-stats.com（https://www.japan-stats.com/）

東京だけが自立している日本。その構造を知った上で、「どこに住むか」「どう働くか」を考えてみると、見える景色が少し変わるかもしれません。

データ出典：総務省 市町村財政の状況（2022年度）／内閣府 県民経済計算
`,n3d1e5b6f1884:`
**あなたは毎日、食事にどれくらい時間をかけていますか。「食べる時間」と「生きる時間」のあいだに、意外な関係があるかもしれません。**

昼食を10分で済ませることはありますか？

コンビニのおにぎりをデスクで食べながら仕事をする。立ち食いそばを3分で食べて次の仕事へ。そういう食事、都市部では珍しくないですよね。

でも「どれだけ時間をかけて食べるか」が、実は寿命と無縁ではないかもしれない。データを重ねると、そんな傾向が見えてきます。

## 食事時間、県によってこんなに違う

総務省の社会生活基本調査（2021年）によると、1日の平均食事時間（朝昼晩合計）は、

- **長い：秋田県 102分・岩手県 100分・山形県 100分前後**
- **短い：東京都 84分・神奈川県・大阪府など都市部**
- **全国平均：92分**
秋田と東京の差は**18分**。1日18分の差は、年間で約110時間の違いになります。

「たった18分」に聞こえますが、毎日の積み重ねとしては大きい差です。

## 平均寿命と重ねると

厚生労働省の都道府県別生命表（2020年）による男性の平均寿命は、

- **1位：滋賀県 82.8歳**
- **2位：長野県 82.7歳**
- **最低：青森県 79.3歳**
- **全国平均：81.5歳**
ここで2つを重ねてみます。

食事時間が長い東北（秋田・岩手・山形）は、平均寿命が全国で短い方に入ります。一方、長寿1位の滋賀は食事時間のデータでは中位程度。

「食事時間が長い＝長生き」という単純な図式は成り立ちません。

でも、だからこそ面白い構図が見えてきます。

## 食事時間が長い東北で寿命が短い理由

秋田・岩手・山形は食事時間が長いのに、平均寿命が短い。なぜでしょうか。

**食べている「内容」の問題です。**

東北は食事時間が長く、みんなで食卓を囲む文化が残っています。でも同時に、塩分摂取量が全国でも高い地域です。漬物・味噌汁・塩鮭など、保存食文化から来る塩分過多が高血圧・脳卒中のリスクを高めています。

つまり「ゆっくり食べている」けれど「塩辛いものをゆっくり食べている」——という状況が、寿命に影響していると考えられます。

**さらに飲酒習慣も重なります。**

東北は飲酒率が高い地域でもあります（秋田44.2%、高知44.8%）。食事の時間が長い分、お酒を飲む時間も長い——という側面があるかもしれません。

## 長寿1位・滋賀の「食べ方」

では寿命1位の滋賀県はどうでしょうか。

滋賀の食事時間は全国中位程度で、特別長くも短くもありません。でも平均寿命82.8歳と全国最長を誇ります。

その理由として挙げられるのは、食事の「内容」です。

近江料理に代表される滋賀の食文化は、野菜・魚中心で塩分控えめ。琵琶湖の湖魚料理・発酵食品（鮒ずし）・野菜の煮物など、地域の食材を活かした食事が根付いています。

「何を食べるか」が「どれだけ食べるか」「どれだけ時間をかけるか」より、寿命に影響している可能性があります。

## 「ゆっくり食べる」ことは意味があるか

食事時間と寿命が単純に比例しないとしても、「ゆっくり食べること」に意味がないかというと、そうでもありません。

医学的には、早食いは肥満リスクを高めることが知られています。満腹感は食事開始から約20分後に出てくるため、早く食べると過食になりやすい。

また食事をゆっくりとることは、「食事という行為」を大切にすることでもあります。一人でスマホを見ながら食べる食事と、家族や友人と話しながら食べる食事——後者の方が精神的な健康に寄与する可能性があります。

「食べる時間」は「生きる時間」の質に影響しているとも言えます。

## あなたの食事時間、振り返ってみてください

今日の3食、それぞれ何分かけて食べましたか？

あなたの県の食事時間の平均と、平均寿命のランキング——2つを並べて見ると、自分の地域の「食の文化」が少し見えてくるはずです。

👉 あなたの県の食事時間・平均寿命を確認する → japan-stats.com（https://www.japan-stats.com/）

食べる時間の長さより、何を・誰と・どんな気持ちで食べるか。データはそんなことを、少し遠回しに教えてくれています。

データ出典：総務省 社会生活基本調査（2021年）／厚生労働省 令和2年都道府県別生命表（2020年）
`,n4efea1f304fa:`
**インターネットが使えるかどうかで、大学進学率が変わる。そんなこと本当にあるのか。データを重ねると、思ったより深い構造が見えてきます。**

あなたは今日、スマホで何時間ネットを使いましたか？

「使って当たり前」の時代ですが、実は都道府県によってインターネットの利用率がかなり違います。

そしてその差が、18年後の進路に影響しているとしたら？

## インターネット利用率、17ポイントの差

総務省の通信利用動向調査（2022年）によると、個人のインターネット利用率は、

- **最高：東京都 94.2%**
- **神奈川県：92.4%**
- **最低：秋田県 76.8%**
- **高知県・島根県：77〜78%台**
- **全国平均：88.6%**
東京と秋田の差は約**17ポイント**。

秋田の76.8%という数字は、県民の約4人に1人がインターネットを使っていないことを意味します。その多くは高齢者です。高齢化率38.6%（全国最高）の秋田では、デジタルにアクセスできない人口の絶対数が多い。

## 大学進学率と重ねると

文部科学省の学校基本調査（2022年）によると、大学・短大への進学率は、

- **1位：東京都 72.4%**
- **最低：秋田県 34%・山形県 35%台**
- **全国平均：60.4%**
2つのデータを重ねます。

**インターネット利用率が高い都市部は、大学進学率も高い。** **インターネット利用率が低い地方は、大学進学率も低い傾向がある。**

東京：ネット利用率94.2%・進学率72.4% 秋田：ネット利用率76.8%・進学率34%

2つのデータが、同じ方向を向いています。

あなたの県のネット利用率と進学率、確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## 「ネットが使えないから大学に行かない」のか

直接的な因果関係ではありません。でも間接的な影響は確かにあります。

**まず、情報へのアクセス格差です。**

大学の選び方・奨学金の調べ方・受験の仕組み——これらの情報は今、ほぼすべてネット上にあります。都市部では学校・塾・親の職場などを通じて自然に情報が入ってきますが、ネット利用率が低い地域では情報が届きにくい面があります。

「大学に行くという選択肢を知らなかった」というケースは、情報格差が激しかった一昔前には珍しくありませんでした。

**次に、学習環境の差です。**

インターネットは学習ツールとしても強力です。オンライン授業・YouTube教育動画・電子書籍・参考書のPDF——ネットを使いこなせる高校生は、使えない高校生より圧倒的に多くの学習リソースにアクセスできます。

受験勉強においても、都市部の高校生はネットで最新の入試情報・傾向分析・過去問を入手しやすい。

**そして、大学生活のイメージが持てるかどうかの差です。**

SNSで大学生の生活を見る、オープンキャンパスのオンライン配信を視聴する——ネットを通じて「大学生活」をリアルにイメージできることが、進学への動機づけになることもあります。

## デジタル格差の「本当の怖さ」

インターネット利用率の差が怖いのは、それが「今の格差」だけでなく「将来の格差」にもつながるからです。

就職活動はオンライン応募が標準になっています。副業・フリーランス・投資など新しい働き方の多くがオンラインを前提とします。AIを使った生産性向上も、デジタルを使いこなせる人と使えない人で大きな差が出てきます。

「ネットを使えない」ことは、今後ますます「経済的な機会から排除される」ことに直結していきます。

## 縮まりつつある格差、でも完全解消には時間がかかる

明るい話もあります。

スマートフォンの普及でインターネット利用率は全国的に上昇しており、2012年の全国平均79.5%から2022年には88.6%まで上がっています。地方の高齢者でもスマホを使う人が増え、自治体によるデジタル活用支援も広がっています。

また学校では1人1台端末（GIGAスクール構想）が進み、子どもたちのデジタル環境は以前より均一化されています。

でも大人世代・高齢者のデジタル格差は、一朝一夕には縮まりません。親がネットを使えない環境では、子どものネットリテラシーも育ちにくい面があります。

## 「使って当たり前」が当たり前でない地域がある

東京に住んでいると、ネットが使えないことのデメリットを実感しにくい。でも全国にはまだ「ネットが使えない」「使いこなせない」人が一定数います。

その差が、教育格差・就職格差・収入格差につながっていく可能性があるとしたら——デジタル格差は、単なる「便利・不便」の話ではありません。

👉 47都道府県のインターネット利用率・大学進学率を見る → japan-stats.com（https://www.japan-stats.com/）

ネットが使えるかどうかが、18年後の進路を変えるかもしれない。そう聞いて、どう思いますか。

データ出典：総務省 通信利用動向調査（2022年）／文部科学省 学校基本調査（2022年）
`,ned8ddfb5dede:`
**「図書館が多い＝教育熱心＝大学に行く子が多い」と思っていた。でもデータを重ねると、まったく逆の構図が見えてきた。**

あなたの地元に、図書館はありますか？

子どものころよく行った、あるいは大人になってからもたまに使う——そういう人も多いと思います。

図書館は「知の拠点」として、教育にとって大切なインフラのはずです。でも「図書館が多い県ほど大学進学率が高い」かというと、データはそう言っていません。

むしろ逆でした。

## 図書館数ランキング、1位は島根

文部科学省の社会教育調査（2021年）によると、人口10万人あたりの公共図書館数は、

- **1位：島根県 4.4館**
- **2位：高知県・鳥取県 4.2館**
- **最低：東京都 2.2館**
- **大阪府：2.8館**
- **全国平均：3.3館**
東京と島根の差は**2.2館**。人口比で見ると、島根は東京の約2倍の図書館があります。

「図書館の多い地方が教育に熱心で、少ない東京が遅れている」——そう読めそうな数字です。

でも次のデータを重ねると、話が変わります。

## 大学進学率と重ねると「逆転」が起きる

文部科学省の学校基本調査（2022年）によると、大学・短大への進学率は、

- **1位：東京都 72.4%**
- **島根県：50%前後（全国中位以下）**
- **高知県：46%前後**
- **鳥取県：48%前後**
- **最低：秋田県 34%・山形県 35%台**
図書館が多い島根・高知・鳥取は、大学進学率では中位以下。

図書館が少ない東京は、大学進学率で全国1位。

「図書館が多い＝進学率が高い」は成立しません。

あなたの県の図書館数と進学率、両方確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## なぜ「逆転」が起きるのか

「図書館が多いのに進学率が低い」という一見矛盾した構図には、ちゃんとした理由があります。

**まず「図書館が多い理由」が逆説的だからです。**

島根・高知・鳥取で図書館が人口比で多いのは、「教育に熱心だから」ではなく「人口密度が低くて、各地域に図書館を分散させないと住民が使えないから」です。

集落が点在する過疎地域では、1つの大きな図書館に全員が集まることはできません。離れた場所にも分館・移動図書館を置くことで、住民へのアクセスを担保している。その結果、人口比では多く見えるわけです。

**次に「大学進学率を決める要因」が図書館以外にあるからです。**

大学進学率を左右するのは、経済力・大学の立地・奨学金の認知度・地域の「進学文化」などです。

東京は大学が100校以上あり、自宅から通える選択肢が豊富。家賃・仕送りなしで大学に通える環境が、進学率を押し上げています。一方、島根・高知・鳥取では地元の大学が少なく、進学するには県外に出るコストが必要。それが進学のハードルになっています。

## 「図書館は役に立たない」のか

では「図書館は進学率に関係ないのだから意味がない」のでしょうか。

それは違います。

図書館の価値は「大学進学率」だけでは測れません。

高齢者が新聞を読む場所、子どもが自由に本を読める場所、調べものをする場所——図書館は経済力に関係なく「知識にアクセスできる権利」を保障する施設です。

特に「お金がないから本が買えない」という家庭にとって、図書館は重要な学習インフラです。図書館の多い地方では、この機能が都市部より重要かもしれません。

また電子図書館（スマホで本を借りられるサービス）の普及で、図書館の形も変わりつつあります。物理的な建物の数だけでは測れない時代が来ています。

## 「数」より「使われ方」が大切

図書館が多くても使われなければ意味がない。少なくてもよく使われていれば十分かもしれない。

ある調査では、図書館の利用率（貸出冊数/人口）は地方の方が高い傾向があります。図書館が少ない都市部では競合する娯楽・情報源が多く、利用率が下がりやすい。逆に図書館が多い地方では、図書館が重要な文化施設として根付いています。

「数のデータ」と「使い方のデータ」を両方見て初めて、図書館の実態が見えてきます。

## 思い込みを崩してくれるのがデータの面白さ

「図書館が多い＝教育水準が高い＝進学率が高い」という直感は間違っていました。

でも間違っていた理由を追いかけると、人口密度・過疎問題・大学の立地・教育コストという地域の構造が見えてくる。

1つのデータだけ見ていると「なんとなく」でしか理解できないことが、2つを重ねることで「なぜそうなるのか」が見えてくる——これが掛け算の醍醐味です。

👉 47都道府県の図書館数・大学進学率データを見る → japan-stats.com（https://www.japan-stats.com/）

「図書館が多い県ほど大学に行かない」——このデータ、どう受け止めましたか？

データ出典：文部科学省 社会教育調査（2021年）／文部科学省 学校基本調査（2022年）
`,nc91b584ec58a:`
**「地方の病院は給料が安い」。看護師なら一度は聞いたことがある話です。でもデータで見ると、その「安い給料」でこなしている仕事量が、想像を超えていました。**

看護師として働いている方、または家族に看護師がいる方に聞きます。

「地方の病院」と「都市の病院」、どちらが楽だと思いますか？

給料だけ見れば都市部の方が高い。でも「忙しさ」で見ると、話はまったく逆になります。

## 看護師数、2.3倍の差がある

厚生労働省の衛生行政報告例（2022年）によると、人口10万人あたりの就業看護師数は、

- **1位：高知県 1,685人**
- **2位：鹿児島・大分など九州・四国が上位**
- **最少：埼玉県 744人**
- **全国平均：1,089人**
高知と埼玉の差は**2.3倍**。

「看護師が多い地方の方が余裕があるんじゃないか」と思いますよね。でもここに落とし穴があります。

看護師が多い地方は、患者も多い地域です。高知・鹿児島・大分は医療費が高く、受診率も高い地域——つまり「病気の人が多い県」と「看護師が多い県」が重なっているのです。

## 給与と重ねると「不公平」が見える

内閣府の県民経済計算で給与水準を重ねます。

- **東京都：485万円（全国1位）**
- **青森県：238万円（最低水準）**
- 高知・鹿児島など看護師が多い地方：給与水準は全国でも低い方に位置
看護師の給与は勤務先の病院の規模・経営状況に左右されますが、地域の賃金水準と無縁ではありません。都市部の大病院は給与が高く、地方の中小病院は低い傾向があります。

つまりこういう構図になります。

**忙しさ：地方 &gt; 都市** **給与：地方 &lt; 都市**

患者が多く、医療費も高い地方で、より少ない報酬で働いている看護師がいる——データはそう示しています。

あなたの県の看護師数と給与水準、確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## 埼玉744人という数字のリアル

最少の埼玉県（744人）は、全国平均の68%しかいません。

埼玉は医師も全国最少（174人）。看護師も最少。でも人口は700万人を超える大県です。

つまり埼玉の看護師は「少ない人数で多くの患者を診ている」状態です。

夜間救急の逼迫・病棟での人手不足・残業の慢性化——埼玉の医療現場が抱える問題は、この数字から来ています。

「東京に近いから便利」という理由で埼玉に住む人は多いですが、いざ入院・手術となったときに「看護師が足りない」という現実に直面するケースがあります。

## 「地方の病院に就職しない理由」が悪循環を生む

なぜ看護師は地方に来ないのでしょうか。

理由は給与だけではありません。

**キャリアの問題があります。**

都市の大病院では最新の医療技術・設備に触れる機会が多く、専門性を高めやすい環境があります。地方の中小病院では経験できる症例が限られることもあり、「キャリアを積むなら都市部」という意識が若い看護師の間に広まっています。

**生活環境の問題もあります。**

地方では交通の便が悪く、一人暮らしには車が必須。娯楽・飲食の選択肢も都市部より少ない。「仕事もプライベートも充実させたい」と考える若い看護師が都市部を選ぶのは、自然な選択です。

**結果として悪循環が起きています。**

看護師が来ない→現場が疲弊する→離職者が増える→さらに看護師が減る→給与も上げられない→ますます来ない。

地方の医療現場は今、この悪循環の中にある地域があります。

## 「地方医療を支える人」への敬意

高知・鹿児島・大分で働く看護師たちは、低い給与でも地域医療を支え続けています。

高知の看護師1,685人（全国最多）は、高齢化が進む県民の医療を担っています。高知の医療費40.2万円（全国最高水準）が意味するのは、病気の多い県民を、少ない賃金で懸命に支えている人たちがいるということです。

「地方の看護師は給料が安い」は事実です。でも「だから楽」は間違いです。

## あなたの県の看護師数、知っていますか

自分が住む県に看護師が何人いるか、普段意識することはないと思います。

でもいざ入院・手術・出産のとき、その数字が「病室に看護師が来るまでの時間」として現れます。

あなたの県の看護師数と給与水準、一度確認してみてください。「思ってたより少ない」「思ってたより恵まれてる」——どちらかの発見があるはずです。

👉 47都道府県の看護師数データを確認する → japan-stats.com（https://www.japan-stats.com/）

地方医療を支える人たちの給与が、仕事量に見合っているかどうか。データはそれを、静かに問い続けています。

データ出典：厚生労働省 衛生行政報告例（2022年）／内閣府 県民経済計算
`,na8cd3e81a3a7:`
**介護の仕事は大変で、給料は安い。それは「知っている話」かもしれない。でも都道府県別に数字を重ねると、「知っていた」より深刻な構図が見えてきます。**

あなたの周りに、介護職で働いている人はいますか？

「大変そう」「給料が安いのに頑張ってる」——そういう印象を持っている人が多いと思います。

でも「どの県で働くか」によって、その「大変さ」と「報酬」のバランスがどれほど違うか、考えたことはありますか。

## 介護職員数、地方と都市で2倍以上の差

厚生労働省の介護サービス施設・事業所調査（2022年）によると、人口10万人あたりの介護職員数は、

- **多い：島根県 1,772人・鳥取県・秋田県など地方が上位**
- **少ない：東京都 756人・埼玉・千葉・神奈川など首都圏**
- **全国平均：約1,200人前後**
島根と東京の差は**2.3倍以上**。

「介護職員が多い地方の方が、手厚いケアができていいじゃないか」と思うかもしれません。

でも介護職員が多い地方は、高齢者も多い地域です。島根・鳥取・秋田は高齢化率が全国でも高い県。介護を必要とする人が多いから、介護職員も多く必要になっているのです。

## 給与と重ねると「逆転の構図」が見える

内閣府の県民経済計算で給与水準を重ねます。

- **東京都：485万円（全国1位）**
- **青森県：238万円（最低水準）**
- **島根・鳥取・秋田など介護職員が多い地方：給与水準は全国でも低い方**
介護職員が多く必要とされている地方ほど、地域全体の給与水準が低い。

介護職の賃金は地域の経済水準と連動する面があります。物価が高い都市部では介護報酬も相対的に高くなりますが、地方では低くなりやすい構造があります。

つまりこういう構図です。

**介護需要：地方 &gt; 都市** **介護給与：地方 &lt; 都市**

最も介護職員が必要とされている地域で、最も低い賃金で働いている——データはそう示しています。

あなたの県の介護職員数と給与水準、確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## 東京756人という数字の「2025年問題」

東京の介護職員数（756人/10万人）は全国最低水準です。

「東京は高齢者が少ないから問題ない」と思った人、少し待ってください。

団塊の世代（1947〜49年生まれ）が75歳以上になる「2025年問題」で、東京の高齢者数は急増します。介護職員数が少ないまま高齢者が増えれば、介護難民（介護が必要なのにサービスを受けられない人）が大量に生まれます。

政府は2025年に全国で約32万人の介護職員が不足すると試算しています。その不足が最も深刻になるのは、実は地方ではなく東京・大阪などの都市部かもしれません。

## 「介護職を選ばない理由」の正直な話

なぜ介護職員は増えないのでしょうか。

答えは正直に言うと「給与と仕事量が見合わないから」です。

介護職の平均月収は全職種平均より低い水準にあります。しかも仕事は重労働で、入浴介助・移乗・夜間対応など身体的・精神的な負荷が大きい。さらに「感謝されても報われない」という感覚を持つ介護職員も少なくありません。

地方では状況がさらに厳しい。給与が低い上に、地域の経済規模が小さいため「介護以外の仕事」の選択肢も少ない。「介護がつらくなっても転職先がない」という閉塞感が、地方の介護現場に漂うことがあります。

## 処遇改善は進んでいるが、まだ足りない

政府は介護職員の処遇改善加算制度を設け、段階的に賃金を引き上げてきました。2022年には月額平均で約9,000円の賃上げが実施されました。

でもそれでも他業種との賃金格差は埋まっていません。

介護職員が不足し続ける限り、残った職員への負荷が増え、離職が増え、さらに人が減る——この悪循環を断ち切るには、賃金の抜本的な引き上げが必要という声が現場から上がり続けています。

## あなたの「老後」を支える人たちのこと

最後に、少し個人的な問いを。

あなたが高齢になったとき、誰があなたの介護をしてくれると思いますか？

家族が担う場合もある。でも多くの場合、見知らぬ介護職員に委ねることになります。

その人たちが、適切な報酬を得て、誇りを持って働ける環境にあるかどうか——それはあなた自身の将来と直結しています。

あなたの県の介護職員数と給与水準のデータ、一度確認してみてください。

👉 47都道府県の介護職員数データを見る → japan-stats.com（https://www.japan-stats.com/）

「**ありがとう**」という言葉は大切です。でも介護職員に本当に必要なのは、その言葉に見合った**給与**かもしれません。

データ出典：厚生労働省 介護サービス施設・事業所調査（2022年）／内閣府 県民経済計算
`,ncb45557f2345:`
**「医療費をたくさん使っている地域は、ちゃんと健康管理できているはず」と思っていた。データを重ねると、その逆だった。**

あなたは毎年、健康診断を受けていますか？

「病気になってから病院に行く」か「病気にならないよう予防する」か——どちらのスタイルかで、医療費の使い方がまったく変わります。

都道府県で見ると、この差が驚くほど大きい。そしてデータを重ねると、「医療費が高い県ほど長生きしていない」という逆説的な構図が見えてきます。

## 医療費ランキング、1位はどこ？

厚生労働省の医療費の地域差分析（2022年）によると、1人あたり年間医療費は、

- **1位：宮崎県 41.8万円**
- **2位：高知県・大分県 40.2万円**
- **全国平均：35.8万円**
- **低い：埼玉県・千葉県など首都圏**
宮崎・高知・大分が上位に並び、九州・四国が医療費の高い地域として浮かび上がります。

「医療費が高い＝病院に多く行っている」「病院に多く行っている＝健康意識が高い」——そう読みたくなりますよね。

でも次のデータを重ねると、話が変わります。

## 平均寿命と重ねると「逆転」が起きる

厚生労働省の都道府県別生命表（2020年）による男性の平均寿命は、

- **1位：滋賀県 82.8歳**
- **2位：長野県 82.7歳**
- **最低：青森県 79.3歳**
- **全国平均：81.5歳**
医療費1位の宮崎県の平均寿命は——全国平均前後の中位です。

医療費2位の高知県も、長寿ランキングでは上位ではありません。

一方、長寿1位の滋賀県の医療費は全国平均より低い水準です。

**「医療費が高い県＝長生きする県」は成立しない。**

むしろ、お金をかけていない滋賀・長野の方が長生きしている——これはどういうことでしょうか。

あなたの県の医療費と平均寿命、確認してみてください。

👉 あなたの県のデータを確認する → japan-stats.com（https://www.japan-stats.com/）

## 「医療費が高い理由」を読み解く

なぜ宮崎・高知・大分の医療費が高いのでしょうか。

**まず、高齢化率の高さです。**

高齢者は若者より医療を必要とします。宮崎・高知・大分はいずれも高齢化が進んでいる地域で、高齢者の医療費が全体を押し上げています。

**次に、受診スタイルの違いです。**

地方では「ちょっと調子が悪い」だけでも病院に行く習慣が根付いている地域があります。都市部では忙しくて病院に行く時間がなく、「多少の不調は我慢する」人も多い。受診率の差が医療費の差につながります。

**そして生活習慣病の多さです。**

九州・四国は塩分摂取量が多く、飲酒率も高い地域があります。生活習慣病（高血圧・糖尿病・心疾患）は医療費を押し上げる最大の要因です。

つまり「医療費が高い」のは「たくさんお金をかけて健康管理している」のではなく、「生活習慣病が多くて病院に通わざるを得ない」という側面が大きいのです。

## 長寿1位・滋賀が医療費を抑えられる理由

滋賀県は平均寿命82.8歳で全国1位でありながら、医療費は全国平均を下回っています。

なぜでしょうか。

答えは「病気になる前の予防」です。

滋賀は肥満率が低い（27.2%）。近江料理に代表される野菜・魚中心の食文化が根付いており、生活習慣病になりにくい体を作っています。自殺率も低く、精神的な健康も保たれています。

「病気にならないから、病院に行かない。だから医療費が低い。そして長生きする」——という好循環が滋賀にはあります。

## 「治す医療」より「予防する生活」

このデータが示す最も重要なメッセージはこれです。

**寿命を決めるのは医療費の多さではなく、日々の生活習慣の質です。**

どれだけ医療技術が進歩しても、食べ過ぎ・飲みすぎ・運動不足・塩分過多という生活を続けていれば、病気になる。病気になれば医療費がかかる。でも寿命は縮む。

逆に、食事に気をつけ、適度に動き、精神的に穏やかに暮らせる環境があれば、病気になりにくく医療費もかからず、長生きできる。

「病気になってからお金をかける」より「病気にならない生活にお金をかける」——このシフトが、個人にとっても社会にとっても重要です。

## あなたの生活習慣、大丈夫ですか

医療費ランキングを見るとき「高い県は頑張っている」ではなく「高い県はそれだけ病気が多い」と読む方が正確です。

あなたの県の医療費と平均寿命、両方を確認してみてください。「医療費が高いのに寿命が短い」「医療費が低いのに長生き」——そのパターンがどちらかが見えたとき、自分の生活習慣を振り返るきっかけになるかもしれません。

👉 47都道府県の医療費・平均寿命データを見る → japan-stats.com（https://www.japan-stats.com/）

お金をかけても寿命は買えない。でも生活習慣を変えれば、寿命は変えられるかもしれない。データはそう言っています。

データ出典：厚生労働省 医療費の地域差分析（2022年）／厚生労働省 令和2年都道府県別生命表（2020年）
`,nb0a2f31fa849:`
**「女性が活躍できる社会へ」という言葉を、何度聞いたでしょうか。でもデータを見ると、その言葉と現実の間に、まだ大きな溝があります。**

あなたには、子どもを産んだ後も働き続けたいと思っている人が周りにいますか？

あるいは、自分自身がそうですか？

「産みたいけど、保育所に入れるか不安」「仕事に戻りたいけど、子どもを預けられない」——そんな声は、今も全国でたくさん聞こえています。

「子どもを預けられるかどうか」が、女性の働き方を左右している現実。データはそれをはっきり示しています。

## 待機児童、東京に集中している

こども家庭庁の保育所等関連状況取りまとめ（2022年）によると、全国の待機児童数は2,944人。

- **東京都：1,248人（全国の約42%）**
- **全国的には減少傾向**（2017年のピーク26,081人から大幅減）
- **でも都市部ではまだ深刻な状況が続く**
全国的に見れば待機児童は減っています。でも「減った」は「解消した」ではありません。

東京だけで全国の4割以上の待機児童がいる現実は、「東京で子どもを産んで働く」ことの難しさを数字で示しています。

「保活（保育所活動）」という言葉が生まれるほど、保育所探しに奔走する親が今も都市部にたくさんいます。

あなたの県の待機児童数、知っていますか？

👉 あなたの県の待機児童数を確認する → japan-stats.com（https://www.japan-stats.com/）

## 女性就業率と重ねると

総務省の就業構造基本調査によると、女性の就業率（15〜64歳）は、

- **高い：福井県・山形県・島根県など地方が上位（75%前後）**
- **低い：神奈川県・奈良県・兵庫県など（60%台）**
- **東京都：68%前後（全国平均より低め）**
ここで面白いことが起きます。

待機児童が多い東京・神奈川の女性就業率は、待機児童が少ない地方より低い傾向があります。

「都市部は女性の活躍が進んでいる」というイメージと、データが示す現実がずれています。

## 「地方の女性が働いている理由」は何か

福井・山形・島根で女性就業率が高い理由は、保育所が充実しているからだけではありません。

**まず「働かなければ生活できない」経済事情があります。**

地方は給与水準が低く、夫婦共働きでないと家計が成り立たないケースが多い。「選択肢として働く」のではなく「必要だから働く」という面があります。

**次に、祖父母・親族のサポート網があります。**

地方では3世代同居や近居が多く、子育てを祖父母に手伝ってもらえる環境があります。「保育所に入れなくても、おばあちゃんがいる」という状況が、女性の就業を支えています。

**そして農業・自営業の多さです。**

農業・漁業・自営業は、育児と仕事を柔軟に組み合わせやすい側面があります。「職場に子どもを連れていく」「作業の合間に授乳する」という働き方が、会社員より可能な場合があります。

## 東京の「保育所不足」が女性のキャリアを止める

東京の待機児童1,248人という数字の背後に、何があるか考えてみてください。

保育所に入れない→育休を延長するしかない→職場のポジションが変わる→復帰しても昇進コースから外れる→「キャリアか子どもか」という選択を迫られる——。

この連鎖が、東京で働く多くの女性が経験してきたことです。

「女性が活躍できる社会」を実現するためには、保育所を増やすだけでなく、「どこに住んでいても子どもを預けられる」環境を作ることが前提になります。

## 「産んでも働ける社会」の条件

このデータが示すのは、女性の就業率は「意識」ではなく「インフラ」で決まるということです。

保育所があれば働ける。なければ働けない。それだけの話です。

「女性に活躍してほしい」という言葉がいくら増えても、子どもを預ける場所がなければ意味がありません。

あなたの県の待機児童数と女性就業率、2つを並べて見てみると、自分の地域が「産んでも働ける場所」かどうかが少し見えてきます。

👉 47都道府県の待機児童・就業データを見る → japan-stats.com（https://www.japan-stats.com/）

「子どもを預けられれば、もっと働けるのに」——その言葉が、データになって現れています。

データ出典：こども家庭庁 保育所等関連状況取りまとめ（2022年）／総務省 就業構造基本調査
`};function IH(e){return e.trim().split(`

`).map((t,r)=>{const n=t.trim();if(!n)return null;if(n.startsWith("**")&&n.endsWith("**"))return b.jsx("h2",{className:"text-xl font-bold mt-8 mb-3 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:n.replace(/\*\*/g,"")},r);const i=n.split(/(\*\*[^*]+\*\*)/g);return b.jsx("p",{className:"text-[#1A1A1A] leading-loose mb-5 text-sm sm:text-base",children:i.map((o,s)=>o.startsWith("**")?b.jsx("strong",{children:o.replace(/\*\*/g,"")},s):o)},r)})}function $H(){const{slug:e}=gc(),t=rr(),r=Vo.find(o=>o.slug===e);if(!r)return b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-3xl mx-auto px-4 py-16 text-center",children:[b.jsx("p",{className:"text-[#717182]",children:"記事が見つかりません"}),b.jsx("button",{onClick:()=>t("/column"),className:"mt-4 text-[#3D52A0] underline text-sm",children:"コラム一覧へ"})]}),b.jsx(Mr,{})]});const n=DH[r.slug],i=typeof window<"u"?window.location.href:`https://www.japan-stats.com/column/${e}`;return b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[b.jsx("button",{onClick:()=>t("/column"),className:"text-[#3D52A0] text-sm mb-6 sm:mb-8 flex items-center gap-1 hover:underline",children:"← コラム一覧に戻る"}),b.jsxs("div",{className:"flex items-center gap-2 mb-3 sm:mb-4 flex-wrap",children:[b.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#3D52A0] font-medium",children:r.category}),b.jsx("span",{className:"text-xs text-[#717182]",children:r.date}),b.jsx("span",{className:"text-xs text-[#717182]",children:r.readTime})]}),b.jsx("h1",{className:"text-xl sm:text-2xl lg:text-3xl font-bold mb-5 sm:mb-6 text-[#1A1A1A] leading-tight",style:{fontFamily:"var(--font-serif)"},children:r.title}),b.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:r.tags.map(o=>b.jsxs("span",{className:"text-xs px-2.5 py-1 bg-[#F0EDE8] text-[#717182] rounded-full",children:["#",o]},o))}),b.jsx("div",{className:"bg-[#EEF2FF] border border-[#3D52A0]/20 rounded-xl p-4 mb-6 sm:mb-8 text-sm text-[#3D52A0] leading-relaxed",children:r.summary}),b.jsx("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8",children:n?IH(n):b.jsx("p",{className:"text-[#717182] text-sm",children:"この記事は現在準備中です。近日公開予定。"})}),b.jsx("div",{className:"mt-6",children:b.jsx(Mv,{statId:MH[r.category]||"divorce-rate"})}),b.jsxs("div",{className:"mt-6 p-4 bg-[#F8F8F6] rounded-xl text-xs text-[#717182] space-y-1",children:[b.jsxs("p",{children:["📊 ",b.jsx("strong",{children:"データ出典："}),"記事内のデータは政府統計（厚生労働省・総務省・国土交通省等）をもとにしています。"]}),b.jsxs("p",{children:["📎 ",b.jsx("strong",{children:"リンクフリー："}),"出典（日本のいろんな統計マップ）を明記いただければ、記事・データの引用・転載は自由です。"]})]}),b.jsx("div",{className:"mt-6 bg-white rounded-2xl border border-[#E5E0D8]/50 p-6",children:b.jsx(OA,{id:`column_${e}`,title:`${r.title}｜日本のいろんな統計マップ`,url:i})}),b.jsxs("div",{className:"mt-6 p-5 bg-white rounded-2xl border border-[#E5E0D8]/50",children:[b.jsx("p",{className:"text-sm text-[#717182] mb-3",children:"関連する統計データも確認してみましょう"}),b.jsx("button",{onClick:()=>{const o=RH[e||""];t(o?`/detail/${o}`:"/")},className:"text-sm text-white bg-[#3D52A0] px-5 py-2.5 rounded-lg hover:bg-[#2d4090] transition-colors",children:"関連する統計データを見る →"})]})]}),b.jsx(Mr,{})]})}const AA=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"];function LH(e,t){let r=0,n=0;for(const{id:o,weight:s,inverse:u}of t){const f=Xr.find(S=>S.id===o);if(!f)continue;const d=f.data.map(S=>S.value),m=Math.min(...d),h=Math.max(...d),y=f.data.find(S=>S.prefecture===AA[e]);if(!y)continue;const g=(y.value-m)/(h-m),_=u?(1-g)*100:g*100;i(_,s)}function i(o,s){r+=o*s,n+=s}return n>0?r/n:0}const Zm=[{id:"childcare",label:"子育てしやすい街",emoji:"👶",description:"待機児童・保育士・給食費・出生率から算出",indicators:[{id:"nursery-waiting",weight:3,inverse:!0,label:"待機児童少"},{id:"nursery-worker",weight:2,label:"保育士多"},{id:"lunch-fee",weight:2,inverse:!0,label:"給食費安"},{id:"birth-rate",weight:3,label:"出生率高"}]},{id:"elderly",label:"老後安心な街",emoji:"🏥",description:"医師数・看護師数・介護職員・平均寿命から算出",indicators:[{id:"doctor-count",weight:3,label:"医師多"},{id:"nurse-count",weight:2,label:"看護師多"},{id:"care-worker",weight:3,label:"介護職員多"},{id:"life-expectancy",weight:2,label:"長寿"}]},{id:"youth",label:"若者が活躍できる街",emoji:"🚀",description:"平均給与・大学進学率・外国人比率から算出",indicators:[{id:"income",weight:3,label:"給与高"},{id:"university-rate",weight:2,label:"大学進学率高"},{id:"foreigner-rate",weight:1,label:"外国籍高"},{id:"commute-time",weight:2,inverse:!0,label:"通勤短"}]},{id:"single",label:"単身者が住みやすい街",emoji:"🏙️",description:"通勤時間・コンビニ密度・犯罪率・給与から算出",indicators:[{id:"commute-time",weight:2,inverse:!0,label:"通勤短"},{id:"conveni-count",weight:2,label:"コンビニ多"},{id:"crime-rate",weight:3,inverse:!0,label:"犯罪少"},{id:"income",weight:3,label:"給与高"}]},{id:"childcare-cost",label:"子育てコスパが良い街",emoji:"💰",description:"給食費・待機児童・水道料金から算出",indicators:[{id:"lunch-fee",weight:3,inverse:!0,label:"給食費安"},{id:"nursery-waiting",weight:3,inverse:!0,label:"待機児童少"},{id:"water-rate",weight:2,inverse:!0,label:"水道安"},{id:"homeownership",weight:2,label:"持ち家率高"}]},{id:"income-rank",label:"給与が高い街",emoji:"💴",description:"平均給与・平均年収から算出",indicators:[{id:"income",weight:4,label:"給与高"},{id:"avg-salary",weight:3,label:"平均年収高"},{id:"min-wage",weight:2,label:"最低賃金高"}]},{id:"cost-performance",label:"コスト最強の街",emoji:"📊",description:"給与・空き家率・水道料金・物価から算出",indicators:[{id:"income",weight:2,label:"給与高"},{id:"vacancy-rate",weight:2,label:"空き家多"},{id:"water-rate",weight:2,inverse:!0,label:"水道安"},{id:"cpi-index",weight:3,inverse:!0,label:"物価安"},{id:"commute-time",weight:2,inverse:!0,label:"通勤短"}]},{id:"public-servant",label:"公務員になりやすい街",emoji:"🏛️",description:"警察官・消防員の人口比から算出",indicators:[{id:"police-count",weight:3,label:"警察官多"},{id:"firefighter-count",weight:3,label:"消防員多"}]},{id:"longevity",label:"長生きできる街",emoji:"🌿",description:"平均寿命・肥満率・自殺率から算出",indicators:[{id:"life-expectancy",weight:4,label:"長寿"},{id:"obesity-rate",weight:3,inverse:!0,label:"肥満率低"},{id:"suicide-rate",weight:3,inverse:!0,label:"自殺率低"}]},{id:"medical",label:"医療が充実している街",emoji:"⚕️",description:"医師・看護師・歯科医師・病院数から算出",indicators:[{id:"doctor-count",weight:3,label:"医師多"},{id:"nurse-count",weight:2,label:"看護師多"},{id:"dentist-count",weight:2,label:"歯科医師多"},{id:"hospital-count",weight:3,label:"病院多"}]},{id:"mental-health",label:"精神的に健康な街",emoji:"🧘",description:"自殺率・孤独死リスク・犯罪率から算出",indicators:[{id:"suicide-rate",weight:4,inverse:!0,label:"自殺率低"},{id:"lonely-death",weight:3,inverse:!0,label:"孤独死リスク低"},{id:"crime-rate",weight:3,inverse:!0,label:"犯罪率低"}]},{id:"no-obesity",label:"肥満になりにくい街",emoji:"🥗",description:"肥満率・飲酒率・喫煙率から算出",indicators:[{id:"obesity-rate",weight:4,inverse:!0,label:"肥満率低"},{id:"drinking-rate",weight:2,inverse:!0,label:"飲酒率低"},{id:"smoking-rate",weight:2,inverse:!0,label:"喫煙率低"}]},{id:"safety",label:"犯罪が少ない街",emoji:"🛡️",description:"刑法犯認知件数・警察官数から算出",indicators:[{id:"crime-rate",weight:5,inverse:!0,label:"犯罪率低"},{id:"police-count",weight:2,label:"警察官多"}]},{id:"no-lonely",label:"孤独になりにくい街",emoji:"❤️",description:"孤独死リスク・未婚率・離婚率から算出",indicators:[{id:"lonely-death",weight:3,inverse:!0,label:"孤独死リスク低"},{id:"unmarried-rate",weight:2,inverse:!0,label:"未婚率低"},{id:"divorce-rate",weight:2,inverse:!0,label:"離婚率低"}]},{id:"diversity",label:"外国人と共生できる街",emoji:"🌍",description:"外国人比率・大学進学率から算出",indicators:[{id:"foreigner-rate",weight:5,label:"外国籍多"},{id:"university-rate",weight:2,label:"高学歴率高"}]},{id:"equality",label:"格差が少ない街",emoji:"⚖️",description:"生活保護率・犯罪率・自殺率から算出",indicators:[{id:"welfare-rate",weight:3,inverse:!0,label:"生活保護率低"},{id:"crime-rate",weight:2,inverse:!0,label:"犯罪率低"},{id:"suicide-rate",weight:2,inverse:!0,label:"自殺率低"}]},{id:"homeowner",label:"持ち家を持ちやすい街",emoji:"🏡",description:"持ち家率・床面積から算出",indicators:[{id:"homeownership",weight:4,label:"持ち家率高"},{id:"house-floor-area",weight:3,label:"床面積広"}]},{id:"no-commute",label:"通勤ストレスが少ない街",emoji:"🚶",description:"通勤時間から算出",indicators:[{id:"commute-time",weight:5,inverse:!0,label:"通勤短"},{id:"conveni-count",weight:1,label:"生活利便性"}]},{id:"vacant-home",label:"空き家活用で格安に住める街",emoji:"🏚️",description:"空き家率・物価から算出",indicators:[{id:"vacancy-rate",weight:5,label:"空き家多"},{id:"cpi-index",weight:2,inverse:!0,label:"物価安"}]},{id:"stable-marriage",label:"離婚しにくい街",emoji:"💍",description:"離婚率・孤独死リスクから算出",indicators:[{id:"divorce-rate",weight:5,inverse:!0,label:"離婚率低"},{id:"lonely-death",weight:2,inverse:!0,label:"孤独リスク低（参考）"}]},{id:"culture",label:"文化・娯楽が豊かな街",emoji:"🎭",description:"宗教施設数・日照時間から算出",indicators:[{id:"religion-count",weight:4,label:"宗教施設多"},{id:"sunshine-hours",weight:2,label:"日照多"}]},{id:"farming",label:"農業で自給自足できる街",emoji:"🌾",description:"農業産出額から算出",indicators:[{id:"agriculture",weight:5,label:"農業産出額高"},{id:"vacancy-rate",weight:1,label:"空き家多"}]},{id:"marriage-20s",label:"20代で結婚できる街",emoji:"💒",description:"20代未婚率・出生率から算出",indicators:[{id:"unmarried-20s-male",weight:3,label:"20代男性未婚低"},{id:"unmarried-20s-female",weight:3,label:"20代女性未婚低"},{id:"birth-rate",weight:2,label:"出生率高"},{id:"divorce-rate",weight:1,inverse:!0,label:"離婚率低"}]},{id:"marriage-30s",label:"30代で結婚できる街",emoji:"💒",description:"30代未婚率・離婚率・出生率から算出",indicators:[{id:"unmarried-rate",weight:3,label:"30代男性未婚低"},{id:"unmarried-30s-female",weight:3,label:"30代女性未婚低"},{id:"birth-rate",weight:2,label:"出生率高"},{id:"divorce-rate",weight:1,inverse:!0,label:"離婚率低"}]},{id:"marriage-40s",label:"40代で結婚できる街",emoji:"💒",description:"40代未婚率・再婚率・出生率から算出",indicators:[{id:"unmarried-40s-male",weight:3,label:"40代男性未婚低"},{id:"unmarried-40s-female",weight:3,label:"40代女性未婚低"},{id:"birth-rate",weight:2,label:"出生率高"},{id:"divorce-rate",weight:1,inverse:!0,label:"離婚率低（参考）"}]},{id:"medical-career",label:"医療職として働きやすい街",emoji:"👨‍⚕️",description:"医師・看護師・薬剤師数から算出",indicators:[{id:"nurse-count",weight:3,label:"看護師多"},{id:"doctor-count",weight:2,label:"医師多"},{id:"pharmacist-count",weight:2,label:"薬剤師多"},{id:"hospital-count",weight:2,label:"病院多"}]},{id:"care-career",label:"介護・保育として働きやすい街",emoji:"🤝",description:"介護職員・保育士数から算出",indicators:[{id:"care-worker",weight:4,label:"介護職員多"},{id:"nursery-worker",weight:3,label:"保育士多"}]},{id:"future-growth",label:"将来も人口が維持される街",emoji:"📈",description:"2040年・2050年人口維持率から算出",indicators:[{id:"pop-future-2040",weight:3,label:"2040年人口維持"},{id:"pop-future-2050",weight:3,label:"2050年人口維持"},{id:"migration-rate",weight:2,label:"転入超過"}]}],US=[{label:"ライフステージ",ids:["childcare","elderly","youth","single","childcare-cost"]},{label:"経済・仕事",ids:["income-rank","cost-performance","public-servant"]},{label:"健康・医療",ids:["longevity","medical","mental-health","no-obesity"]},{label:"安全・社会",ids:["safety","no-lonely","diversity","equality"]},{label:"住宅環境",ids:["homeowner","no-commute","vacant-home"]},{label:"結婚チャンス",ids:["marriage-20s","marriage-30s","marriage-40s","stable-marriage"]},{label:"職業・未来",ids:["medical-career","care-career","future-growth","farming","culture"]}],FH={ライフステージ:"birth-rate","経済・仕事":"income","健康・医療":"doctor-count","安全・社会":"welfare-rate",住宅環境:"vacancy-rate",結婚チャンス:"divorce-rate","職業・未来":"migration-rate"};function BH(){var h,y;const e=rr(),[t,r]=D.useState("childcare"),[n,i]=D.useState("ライフステージ"),o=Zm.find(g=>g.id===t),s=AA.map((g,_)=>({pref:g,score:LH(_,o.indicators)})).sort((g,_)=>_.score-g.score).map((g,_)=>({...g,rank:_+1})),u="https://www.japan-stats.com/ranking",f=`「${o.label}」ランキング 1位は${(h=s[0])==null?void 0:h.pref}！（スコア${(y=s[0])==null?void 0:y.score.toFixed(1)}点）政府統計データをもとに算出`,d=`https://twitter.com/intent/tweet?text=${encodeURIComponent(f)}&url=${encodeURIComponent(u)}&hashtags=日本の統計マップ,都道府県ランキング`,m=FH[n]||"welfare-rate";return b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[b.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),b.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:"おすすめ都道府県ランキング"}),b.jsx("p",{className:"text-sm text-[#717182] mb-8",children:"政府統計データをもとに複数の指標を組み合わせて算出"}),b.jsx("div",{className:"overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-4",children:b.jsx("div",{className:"flex gap-2 min-w-max pb-2",children:US.map(g=>b.jsx("button",{onClick:()=>{i(g.label),r(Zm.find(_=>g.ids.includes(_.id)).id)},className:`px-3 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap ${n===g.label?"bg-[#3D52A0] text-white border-[#3D52A0]":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:g.label},g.label))})}),b.jsx("div",{className:"overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-6",children:b.jsx("div",{className:"flex gap-2 min-w-max pb-2",children:Zm.filter(g=>{var _;return(_=US.find(S=>S.label===n))==null?void 0:_.ids.includes(g.id)}).map(g=>b.jsxs("button",{onClick:()=>r(g.id),className:`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm border transition-all whitespace-nowrap ${t===g.id?"bg-white text-[#3D52A0] border-[#3D52A0] shadow-sm font-medium":"bg-white/60 text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:[b.jsx("span",{children:g.emoji}),g.label]},g.id))})}),b.jsx("div",{className:"mb-6",children:b.jsx(Mv,{statId:m})}),b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 overflow-hidden shadow-sm",children:[b.jsxs("div",{className:"px-6 py-5 border-b border-[#E5E0D8] bg-gradient-to-r from-[#F8F8F6] to-white",children:[b.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[b.jsx("span",{className:"text-2xl",children:o.emoji}),b.jsx("h2",{className:"text-lg font-bold text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:o.label})]}),b.jsx("p",{className:"text-xs text-[#717182] mb-3",children:o.description}),b.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:o.indicators.map(g=>b.jsxs("button",{onClick:()=>e(`/detail/${g.id}`),className:"text-xs px-2.5 py-1 bg-[#EEF2FF] text-[#3D52A0] rounded-full hover:bg-[#3D52A0] hover:text-white transition-colors",children:[g.label," →"]},g.id))}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("span",{className:"text-xs text-[#717182]",children:"シェア："}),b.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-xs text-white bg-black px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors",children:[b.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Xでシェア"]}),b.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${f} ${u}`),className:"text-xs text-[#717182] bg-[#F0EDE8] px-3 py-1.5 rounded-lg hover:bg-[#E5E0D8] transition-colors",children:"URLコピー"})]})]}),b.jsx("div",{className:"divide-y divide-[#F0EDE8]",children:s.map(({pref:g,score:_,rank:S})=>b.jsxs("div",{className:`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#F8F8F6] transition-colors ${S<=3?"bg-gradient-to-r from-[#FFFBEB]/30 to-transparent":""}`,children:[b.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${S===1?"bg-yellow-100 text-yellow-700 border-yellow-300":S===2?"bg-gray-100 text-gray-600 border-gray-300":S===3?"bg-orange-100 text-orange-700 border-orange-300":"bg-white text-[#717182] border-[#E5E0D8]"}`,children:S<=3?["🥇","🥈","🥉"][S-1]:S}),b.jsx("div",{className:"flex-1 min-w-0",children:b.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(g)}`),className:"font-medium text-sm sm:text-base text-[#1A1A1A] hover:text-[#3D52A0] transition-colors",children:g})}),b.jsx("div",{className:"flex-1 hidden sm:block",children:b.jsx("div",{className:"h-2 bg-[#F0EDE8] rounded-full overflow-hidden",children:b.jsx("div",{className:"h-full bg-gradient-to-r from-[#3D52A0] to-[#6B82C8] rounded-full",style:{width:`${_}%`}})})}),b.jsxs("div",{className:"flex-shrink-0 text-right",children:[b.jsx("div",{className:"text-base sm:text-lg font-bold text-[#3D52A0]",children:_.toFixed(1)}),b.jsx("div",{className:"text-xs text-[#717182]",children:"/ 100"})]})]},g))})]}),b.jsxs("div",{className:"mt-4 p-4 bg-[#F8F8F6] rounded-xl text-xs text-[#717182] space-y-1",children:[b.jsx("p",{children:"※ スコアは複数の統計指標を独自の重み付けで0〜100点に正規化し加重平均した参考値です。"}),b.jsx("p",{children:"※ 使用データは政府公開統計をもとにしていますが、一部に推計値を含みます。正確な数値は各省庁の公開統計をご確認ください。"}),b.jsx("p",{children:"※ ランキング結果は特定の地域を推薦するものではありません。"})]})]}),b.jsx(Mr,{})]})}const _2=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],zo=[{id:"priority",text:"生活で一番重視することは？",emoji:"🎯",options:[{label:"💰 収入・経済",value:"income"},{label:"🏥 医療・健康",value:"medical"},{label:"👶 子育て",value:"childcare"},{label:"🏠 住環境・広さ",value:"housing"},{label:"🌿 自然・のんびり",value:"nature"}]},{id:"lifestyle",text:"理想のライフスタイルは？",emoji:"🏙️",options:[{label:"🌆 都市派（便利さ・刺激重視）",value:"urban"},{label:"🌾 田舎派（自然・静かさ重視）",value:"rural"},{label:"⚖️ バランス重視",value:"balanced"}]},{id:"family",text:"家族構成・ライフステージは？",emoji:"👨‍👩‍👧",options:[{label:"🧍 独身",value:"single"},{label:"💑 既婚・子なし",value:"couple"},{label:"👶 子育て中",value:"parent"},{label:"🧓 老後・シニア",value:"senior"}]},{id:"commute",text:"通勤・働き方について",emoji:"🚃",options:[{label:"⚡ 通勤短い方がいい",value:"short"},{label:"💻 リモートワーク中心",value:"remote"},{label:"🤷 気にしない",value:"any"}]},{id:"climate",text:"気候・天気の好みは？",emoji:"☀️",options:[{label:"☀️ 晴れが多い・暖かい",value:"sunny"},{label:"❄️ 雪・四季がはっきり",value:"snowy"},{label:"🌧️ どちらでも",value:"any"}]},{id:"finance",text:"お金・コストについて",emoji:"💴",options:[{label:"📈 収入・稼ぎを最優先",value:"earn"},{label:"📉 生活コストを下げたい",value:"save"},{label:"🏡 持ち家・広い家に住みたい",value:"house"}]}],qH=[{id:"income",label:"県民所得",good:"高い",bad:"低い"},{id:"avg-salary",label:"平均給与",good:"高い",bad:"低い"},{id:"doctor-count",label:"医師数",good:"多い",bad:"少ない"},{id:"nurse-count",label:"看護師数",good:"多い",bad:"少ない"},{id:"hospital-count",label:"病院数",good:"多い",bad:"少ない"},{id:"life-expectancy",label:"平均寿命",good:"長い",bad:"短い"},{id:"crime-rate",label:"犯罪率",good:"低い",bad:"高い",inverse:!0},{id:"commute-time",label:"通勤時間",good:"短い",bad:"長い",inverse:!0},{id:"nursery-waiting",label:"待機児童",good:"少ない",bad:"多い",inverse:!0},{id:"lunch-fee",label:"給食費",good:"安い",bad:"高い",inverse:!0},{id:"vacancy-rate",label:"空き家率",good:"活用しやすい",bad:"少ない"},{id:"homeownership",label:"持ち家率",good:"高い",bad:"低い"},{id:"house-floor-area",label:"家の広さ",good:"広い",bad:"狭い"},{id:"rent-price",label:"家賃",good:"安い",bad:"高い",inverse:!0},{id:"sunshine-hours",label:"日照時間",good:"長い",bad:"短い"},{id:"clear-days",label:"快晴日数",good:"多い",bad:"少ない"},{id:"cpi-index",label:"物価",good:"低い",bad:"高い",inverse:!0},{id:"obesity-rate",label:"肥満率",good:"低い",bad:"高い",inverse:!0},{id:"suicide-rate",label:"自殺率",good:"低い",bad:"高い",inverse:!0},{id:"birth-rate",label:"出生率",good:"高い",bad:"低い"},{id:"fiscal-power",label:"財政力",good:"強い",bad:"弱い"},{id:"internet-rate",label:"ネット普及率",good:"高い",bad:"低い"},{id:"agriculture",label:"農業産出額",good:"多い",bad:"少ない"},{id:"pop-future-2040",label:"2040年人口維持",good:"維持",bad:"減少大",inverse:!1}];function zH(e){const t=[];for(const r of qH){const n=Xr.find(f=>f.id===r.id);if(!n)continue;const i=n.data.find(f=>f.prefecture===e);if(!i)continue;const o=n.data.length,s=i.rank/o,u=r.inverse?s>=.7:s<=.3;t.push({id:r.id,label:r.label,rank:i.rank,total:o,value:i.value,unit:n.unit,isGood:u,good:r.good,bad:r.bad})}return t}function WS(e){const t=zH(e),r=t.filter(i=>i.isGood).sort((i,o)=>i.rank-o.rank).slice(0,5),n=t.filter(i=>!i.isGood).sort((i,o)=>o.rank-i.rank).slice(0,3);return{strengths:r,weaknesses:n}}function UH(e,t){let r=0,n=0;const i=s=>{const u=Xr.find(y=>y.id===s);if(!u)return 50;const f=u.data.map(y=>y.value),d=Math.min(...f),m=Math.max(...f),h=u.data.find(y=>y.prefecture===_2[e]);return h?(h.value-d)/(m-d)*100:50},o=(s,u)=>{r+=s*u,n+=u};return t.priority==="income"?(o(i("income"),4),o(i("avg-salary"),3),o(i("min-wage"),2),o(i("fiscal-power"),2)):t.priority==="medical"?(o(i("doctor-count"),3),o(i("nurse-count"),3),o(i("hospital-count"),2),o(i("life-expectancy"),2)):t.priority==="childcare"?(o(100-i("nursery-waiting"),3),o(i("nursery-worker"),3),o(100-i("lunch-fee"),2),o(i("birth-rate"),2)):t.priority==="housing"?(o(i("homeownership"),3),o(i("house-floor-area"),3),o(i("detached-rate"),2),o(100-i("rent-price"),2)):t.priority==="nature"&&(o(i("sunshine-hours"),3),o(i("clear-days"),3),o(i("agriculture"),2),o(100-i("rainfall"),1)),t.lifestyle==="urban"?(o(i("conveni-count"),2),o(i("internet-rate"),2),o(i("avg-salary"),1)):t.lifestyle==="rural"?(o(100-i("cpi-index"),2),o(i("house-floor-area"),2),o(i("clear-days"),1),o(100-i("rent-price"),2)):(o(i("conveni-count"),1),o(i("house-floor-area"),1),o(i("clear-days"),1)),t.family==="single"?(o(i("conveni-count"),2),o(100-i("crime-rate"),2),o(i("avg-salary"),2),o(i("internet-rate"),1)):t.family==="couple"?(o(100-i("divorce-rate"),2),o(i("income"),2),o(i("fiscal-power"),1)):t.family==="parent"?(o(100-i("nursery-waiting"),3),o(i("nursery-worker"),2),o(100-i("lunch-fee"),2),o(i("library-count"),1)):t.family==="senior"&&(o(i("doctor-count"),3),o(i("care-worker"),3),o(i("life-expectancy"),2),o(100-i("care-insurance"),1)),t.commute==="short"?o(100-i("commute-time"),4):t.commute==="remote"&&(o(i("internet-rate"),3),o(i("house-floor-area"),2),o(100-i("cpi-index"),2)),t.climate==="sunny"?(o(i("sunshine-hours"),3),o(i("clear-days"),3),o(100-i("rainfall"),2)):t.climate==="snowy"&&(o(100-i("clear-days"),2),o(i("homeownership"),1)),t.finance==="earn"?(o(i("avg-salary"),3),o(i("income"),3),o(i("min-wage"),2)):t.finance==="save"?(o(100-i("cpi-index"),3),o(100-i("rent-price"),3),o(100-i("water-rate"),2),o(100-i("health-insurance"),2)):t.finance==="house"&&(o(i("homeownership"),3),o(i("house-floor-area"),3),o(i("detached-rate"),2),o(100-i("rent-price"),2)),o(100-i("crime-rate"),1),o(100-i("suicide-rate"),1),n>0?r/n:50}const HS={北海道:"農業産出額1位・雄大な自然",青森:"快晴少ないが食材豊か",岩手:"面積2位・静かな暮らし",宮城:"仙台の都市機能と自然",秋田:"睡眠時間日本一・高齢化先進県",山形:"果物の宝庫・低離婚率",福島:"豊かな自然と復興の歩み",茨城:"農業産出額上位・研究学園都市",栃木:"日光・那須の観光資源",群馬:"温泉王国・快晴日数多め",埼玉:"首都圏アクセス・住宅地",千葉:"成田空港・食料供給基地",東京:"日本最大の経済・文化都市",神奈川:"横浜・海と山の魅力",新潟:"米どころ・日本海の幸",富山:"持ち家率・離婚率最低の安定県",石川:"金沢文化・能登の自然",福井:"幸福度ランキング上位常連",山梨:"富士山・ワイン・快晴多い",長野:"長寿・山岳リゾート・睡眠充実",岐阜:"白川郷・飛騨の匠",静岡:"温暖な気候・富士山・快晴多",愛知:"製造業の中心・名古屋",三重:"伊勢神宮・真珠の産地",滋賀:"男性長寿日本一・琵琶湖",京都:"文化財・医師数トップ",大阪:"食の都・活気ある街",兵庫:"神戸の国際都市・多彩な文化",奈良:"古都・宗教法人多い文化県",和歌山:"紀伊山地・温暖な気候",鳥取:"砂丘・カニ・図書館充実",島根:"出雲大社・図書館日本一",岡山:"医師数上位・晴れの国",広島:"瀬戸内の温暖な気候・工業都市",山口:"本州最西端・豊かな自然",徳島:"阿波踊り・医師数上位",香川:"うどん県・快晴多い",愛媛:"みかん・道後温泉",高知:"看護師数日本一・快晴多い",福岡:"九州の中心都市・グルメ",佐賀:"有田焼・穏やかな気候",長崎:"異国情緒・島々の自然",熊本:"農業産出額上位・温泉",大分:"温泉県・旅行者多い",宮崎:"快晴日数上位・農業",鹿児島:"快晴日数日本一・農業・自然",沖縄:"出生率日本一・独自の文化・快晴"},VS={priority:{income:"収入・経済重視",medical:"医療・健康重視",childcare:"子育て重視",housing:"住環境重視",nature:"自然・のんびり重視"},lifestyle:{urban:"都市派",rural:"田舎派",balanced:"バランス派"},family:{single:"独身",couple:"既婚・子なし",parent:"子育て中",senior:"老後・シニア"},commute:{short:"通勤短め希望",remote:"リモートワーク希望",any:"通勤こだわりなし"},climate:{sunny:"晴れ・暖かい希望",snowy:"雪・四季希望",any:"気候こだわりなし"},finance:{earn:"稼ぎ最優先",save:"コスト節約派",house:"持ち家・広さ重視"}};function ey(e,t){typeof window<"u"&&typeof window.gtag=="function"&&window.gtag("event",e,t)}function KS(){const e=rr(),{pref:t}=gc(),r=t&&_2.includes(t)?t:null,[n,i]=D.useState(0),[o,s]=D.useState({}),[u,f]=D.useState(null),[d,m]=D.useState(!1),[h,y]=D.useState(!1),g=zo[n],_=!!r&&!u&&!h,S=()=>{y(!0),window.history.replaceState(null,"","/diagnosis"),ey("diagnosis_start",{from:"shared_result",shared_pref:r})},x=(z,q)=>{const M={...o,[z]:q};if(s(M),n<zo.length-1)i(n+1);else{const H=_2.map((X,G)=>({pref:X,score:UH(G,M)})).sort((X,G)=>G.score-X.score);f(H),window.history.replaceState(null,"",`/diagnosis/result/${encodeURIComponent(H[0].pref)}`),ey("diagnosis_complete",{result_pref:H[0].pref,score:Math.round(H[0].score)})}},j=()=>{i(0),s({}),f(null),m(!1),y(!0),window.history.replaceState(null,"","/diagnosis")},A=z=>{const{strengths:q,weaknesses:M}=WS(z),H=Object.entries(o).map(([X,G])=>{var J;return(J=VS[X])==null?void 0:J[G]}).filter(Boolean);return{strengths:q,weaknesses:M,answerTags:H}},E=u?`都道府県診断の結果、私に向いてる都道府県は「${u[0].pref}」でした！（マッチ度${u[0].score.toFixed(1)}点）あなたも診断してみて👇`:"",T=u?`https://www.japan-stats.com/diagnosis/result/${encodeURIComponent(u[0].pref)}`:"https://www.japan-stats.com/diagnosis",O=`https://twitter.com/intent/tweet?text=${encodeURIComponent(E)}&url=${encodeURIComponent(T)}&hashtags=都道府県診断,日本の統計マップ`,P=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(T)}`,C=z=>{ey("diagnosis_share",{method:z,result_pref:u?u[0].pref:""})},R=()=>{navigator.clipboard.writeText(`${E} ${T}`),m(!0),C("copy"),setTimeout(()=>m(!1),2e3)},$=_&&r?WS(r):null;return b.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[b.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),b.jsxs("div",{className:"text-center mb-8",children:[b.jsx("div",{className:"text-4xl mb-3",children:"🗾"}),b.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:"あなたに向いてる都道府県診断"}),b.jsx("p",{className:"text-sm text-[#717182]",children:"6つの質問に答えるだけ。65の統計データをもとにあなたに最適な都道府県を診断します。"})]}),_&&r&&$?b.jsxs("div",{children:[b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8 shadow-sm mb-4",children:[b.jsxs("div",{className:"text-center mb-6",children:[b.jsx("div",{className:"text-5xl mb-3",children:"📨"}),b.jsx("p",{className:"text-sm text-[#717182] mb-2",children:"シェアされた診断結果"}),b.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-[#3D52A0] mb-2",style:{fontFamily:"var(--font-serif)"},children:r}),b.jsx("p",{className:"text-sm text-[#717182] mb-3",children:HS[r]})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx("span",{className:"text-green-500",children:"✅"}),b.jsxs("span",{className:"text-sm font-bold text-[#1A1A1A]",children:[r,"の強み"]})]}),b.jsx("div",{className:"space-y-2",children:$.strengths.map(z=>b.jsxs("button",{onClick:()=>e(`/detail/${z.id}`),className:"w-full flex items-center justify-between p-3 bg-green-50 border border-green-100 rounded-xl hover:bg-green-100 transition-colors group text-left",children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:z.label}),b.jsx("span",{className:"ml-2 text-xs text-green-600 font-medium",children:z.good})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsxs("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium",children:["全国",z.rank,"位"]}),b.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},z.id))})]}),$.weaknesses.length>0&&b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx("span",{className:"text-yellow-500",children:"⚠️"}),b.jsx("span",{className:"text-sm font-bold text-[#1A1A1A]",children:"注意点"})]}),b.jsx("div",{className:"space-y-2",children:$.weaknesses.map(z=>b.jsxs("button",{onClick:()=>e(`/detail/${z.id}`),className:"w-full flex items-center justify-between p-3 bg-yellow-50 border border-yellow-100 rounded-xl hover:bg-yellow-100 transition-colors group text-left",children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:z.label}),b.jsx("span",{className:"ml-2 text-xs text-yellow-600 font-medium",children:z.bad})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsxs("span",{className:"text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium",children:["全国",z.rank,"位"]}),b.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},z.id))})]})]})]}),b.jsx("button",{onClick:S,className:"w-full py-4 bg-[#3D52A0] text-white rounded-xl text-base font-bold hover:bg-[#2d4090] transition-colors mb-3",children:"🗾 あなたも診断してみる（無料・30秒）"}),b.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(r)}`),className:"w-full py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:[r,"の全統計データを見る →"]})]}):u?b.jsxs("div",{children:[b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8 shadow-sm mb-4",children:[b.jsxs("div",{className:"text-center mb-6",children:[b.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),b.jsx("p",{className:"text-sm text-[#717182] mb-2",children:"あなたに最も向いている都道府県は…"}),b.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-[#3D52A0] mb-2",style:{fontFamily:"var(--font-serif)"},children:u[0].pref}),b.jsx("p",{className:"text-sm text-[#717182] mb-3",children:HS[u[0].pref]}),b.jsxs("div",{className:"inline-block px-4 py-1.5 bg-[#EEF2FF] rounded-full text-sm text-[#3D52A0] font-medium",children:["マッチ度 ",u[0].score.toFixed(1),"点 / 100点"]})]}),b.jsxs("div",{className:"mb-6 p-4 bg-[#F8F8F6] rounded-xl",children:[b.jsx("p",{className:"text-xs text-[#717182] mb-2",children:"あなたのプロフィール"}),b.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(o).map(([z,q])=>{var M;return b.jsx("span",{className:"text-xs px-2.5 py-1 bg-white border border-[#E5E0D8] rounded-full text-[#717182]",children:(M=VS[z])==null?void 0:M[q]},z)})})]}),(()=>{const{strengths:z,weaknesses:q}=A(u[0].pref);return b.jsxs("div",{className:"space-y-4",children:[b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx("span",{className:"text-green-500",children:"✅"}),b.jsxs("span",{className:"text-sm font-bold text-[#1A1A1A]",children:[u[0].pref,"の強み"]})]}),b.jsx("div",{className:"space-y-2",children:z.map(M=>b.jsxs("button",{onClick:()=>e(`/detail/${M.id}`),className:"w-full flex items-center justify-between p-3 bg-green-50 border border-green-100 rounded-xl hover:bg-green-100 transition-colors group text-left",children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:M.label}),b.jsx("span",{className:"ml-2 text-xs text-green-600 font-medium",children:M.good})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsxs("span",{className:"text-xs font-mono text-[#717182]",children:[M.value.toFixed(M.unit==="円"?0:2),M.unit]}),b.jsxs("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium",children:["全国",M.rank,"位"]}),b.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},M.id))})]}),q.length>0&&b.jsxs("div",{children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx("span",{className:"text-yellow-500",children:"⚠️"}),b.jsx("span",{className:"text-sm font-bold text-[#1A1A1A]",children:"注意点"})]}),b.jsx("div",{className:"space-y-2",children:q.map(M=>b.jsxs("button",{onClick:()=>e(`/detail/${M.id}`),className:"w-full flex items-center justify-between p-3 bg-yellow-50 border border-yellow-100 rounded-xl hover:bg-yellow-100 transition-colors group text-left",children:[b.jsxs("div",{children:[b.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:M.label}),b.jsx("span",{className:"ml-2 text-xs text-yellow-600 font-medium",children:M.bad})]}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsxs("span",{className:"text-xs font-mono text-[#717182]",children:[M.value.toFixed(M.unit==="円"?0:2),M.unit]}),b.jsxs("span",{className:"text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium",children:["全国",M.rank,"位"]}),b.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},M.id))})]})]})})()]}),b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm mb-4",children:[b.jsx("p",{className:"text-xs text-[#717182] mb-4 text-center font-medium",children:"あなたのTOP5"}),u.slice(0,5).map(({pref:z,score:q},M)=>b.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[b.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${M===0?"bg-yellow-100 text-yellow-700":M===1?"bg-gray-100 text-gray-600":M===2?"bg-orange-100 text-orange-700":"bg-[#F0EDE8] text-[#717182]"}`,children:M<3?["🥇","🥈","🥉"][M]:M+1}),b.jsxs("div",{className:"flex-1",children:[b.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[b.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(z)}`),className:"font-medium hover:text-[#3D52A0]",children:z}),b.jsxs("span",{className:"text-[#3D52A0] font-bold",children:[q.toFixed(1),"点"]})]}),b.jsx("div",{className:"h-1.5 bg-[#F0EDE8] rounded-full overflow-hidden",children:b.jsx("div",{className:"h-full bg-[#3D52A0] rounded-full",style:{width:`${q}%`}})})]})]},z))]}),b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm mb-4",children:[b.jsx("p",{className:"text-xs text-[#717182] mb-4 text-center",children:"全47都道府県のマッチ度"}),b.jsx("div",{className:"space-y-2 max-h-72 overflow-y-auto",children:u.map(({pref:z,score:q},M)=>b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("span",{className:"text-xs text-[#bbb] w-5 text-right flex-shrink-0",children:M+1}),b.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(z)}`),className:"text-sm w-20 flex-shrink-0 text-left hover:text-[#3D52A0]",children:z}),b.jsx("div",{className:"flex-1 h-2 bg-[#F0EDE8] rounded-full overflow-hidden",children:b.jsx("div",{className:"h-full rounded-full",style:{width:`${q}%`,background:M===0?"#3D52A0":"#94a3b8"}})}),b.jsxs("span",{className:"text-xs text-[#717182] w-12 text-right",children:[q.toFixed(1),"点"]})]},z))})]}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[b.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(u[0].pref)}`),className:"flex-1 py-3 bg-[#3D52A0] text-white rounded-xl text-sm font-medium hover:bg-[#2d4090] transition-colors",children:[u[0].pref,"の全データを見る →"]}),b.jsx("button",{onClick:j,className:"flex-1 py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:"もう一度診断する"})]}),b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm",children:[b.jsx("p",{className:"text-sm font-medium text-[#1A1A1A] mb-3 text-center",children:"診断結果をシェアする"}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[b.jsxs("a",{href:O,target:"_blank",rel:"noopener noreferrer",onClick:()=>C("x"),className:"flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors",children:[b.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Xでシェア"]}),b.jsxs("a",{href:P,target:"_blank",rel:"noopener noreferrer",onClick:()=>C("line"),className:"flex-1 flex items-center justify-center gap-2 py-3 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity",style:{backgroundColor:"#06C755"},children:[b.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"})}),"LINEでシェア"]}),b.jsx("button",{onClick:R,className:"flex-1 flex items-center justify-center gap-2 py-3 bg-[#F0EDE8] text-[#717182] rounded-xl text-sm font-medium hover:bg-[#E5E0D8] transition-colors",children:d?"✓ コピーしました！":"🔗 URLをコピー"})]})]})]}):b.jsxs("div",{children:[b.jsxs("div",{className:"mb-6",children:[b.jsxs("div",{className:"flex justify-between text-xs text-[#717182] mb-2",children:[b.jsxs("span",{children:["質問 ",n+1," / ",zo.length]}),b.jsxs("span",{children:[Math.round(n/zo.length*100),"%"]})]}),b.jsx("div",{className:"h-2 bg-[#F0EDE8] rounded-full overflow-hidden",children:b.jsx("div",{className:"h-full bg-[#3D52A0] rounded-full transition-all duration-300",style:{width:`${n/zo.length*100}%`}})})]}),b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8 shadow-sm",children:[b.jsxs("div",{className:"text-center mb-6",children:[b.jsx("div",{className:"text-4xl mb-3",children:g.emoji}),b.jsx("h2",{className:"text-lg sm:text-xl font-bold text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:g.text})]}),b.jsx("div",{className:"space-y-3",children:g.options.map(z=>b.jsx("button",{onClick:()=>x(g.id,z.value),className:"w-full text-left px-5 py-4 rounded-xl border-2 border-[#E5E0D8] hover:border-[#3D52A0] hover:bg-[#EEF2FF] transition-all text-sm font-medium text-[#1A1A1A]",children:z.label},z.value))}),n>0&&b.jsx("button",{onClick:()=>i(n-1),className:"mt-4 text-xs text-[#717182] hover:text-[#3D52A0] w-full text-center",children:"← 前の質問に戻る"})]})]})]}),b.jsx(Mr,{})]})}const WH=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"];function HH(e,t){const r=Xr.find(i=>i.id===e);if(!r)return null;const n=r.data.find(i=>i.prefecture===t);return n?{rank:n.rank,value:n.value,total:r.data.length}:null}function VH({rank:e,total:t}){const r=e/t,n=r<=.1?"#f59e0b":r<=.3?"#3D52A0":r>=.9?"#dc2626":"#717182",i=r<=.1?"上位10%":r<=.3?"上位30%":r>=.9?"下位10%":"";return b.jsxs("span",{style:{color:n,fontWeight:600,fontSize:13},children:[e,"位",i&&b.jsx("span",{style:{fontSize:10,marginLeft:4,padding:"1px 6px",borderRadius:100,background:`${n}18`},children:i})]})}const KH=[{label:"人口・世帯",ids:["divorce-rate","birth-rate","unmarried-rate","unmarried-20s-male","unmarried-20s-female","unmarried-30s-female","unmarried-40s-male","unmarried-40s-female","foreigner-rate","migration-rate","working-age-rate","pop-future-2040","pop-future-2050"]},{label:"医療",ids:["doctor-count","nurse-count","dentist-count","pharmacist-count","hospital-count","medical-cost"]},{label:"福祉・介護",ids:["care-worker","nursery-worker"]},{label:"公務員・公共",ids:["police-count","firefighter-count"]},{label:"社会保障",ids:["welfare-rate","nursery-waiting","health-insurance","care-insurance"]},{label:"住宅・不動産",ids:["vacancy-rate","homeownership","house-floor-area"]},{label:"経済",ids:["income","avg-salary","avg-salary-female","min-wage","commute-time","cpi-index"]},{label:"健康・医療",ids:["life-expectancy","obesity-rate","suicide-rate","drinking-rate","smoking-rate"]},{label:"教育・子育て",ids:["lunch-fee","university-rate"]},{label:"文化・宗教",ids:["religion-count"]},{label:"農業・産業",ids:["agriculture"]},{label:"生活・インフラ",ids:["water-rate","conveni-count","sunshine-hours","rainfall","traffic-accident","waste-per-day"]},{label:"社会問題",ids:["lonely-death","crime-rate"]}];function GH(){const{pref:e}=gc(),t=rr(),r=decodeURIComponent(e||"");return WH.includes(r)?b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[b.jsx("button",{onClick:()=>t("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),b.jsxs("div",{className:"mb-8",children:[b.jsxs("h1",{className:"text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:[r,"のデータまとめ"]}),b.jsxs("p",{className:"text-sm text-[#717182]",children:["政府統計55コンテンツにおける",r,"の順位と数値"]})]}),b.jsx("div",{className:"space-y-6",children:KH.map(n=>{const i=n.ids.map(o=>{const s=Xr.find(f=>f.id===o);if(!s)return null;const u=HH(o,r);return u?{cat:s,...u}:null}).filter(Boolean);return i.length===0?null:b.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 overflow-hidden shadow-sm",children:[b.jsx("div",{className:"px-5 py-3 bg-[#F8F8F6] border-b border-[#E5E0D8]",children:b.jsx("h2",{className:"text-sm font-bold text-[#3D52A0]",children:n.label})}),b.jsx("div",{className:"divide-y divide-[#F0EDE8]",children:i.map(({cat:o,rank:s,value:u,total:f})=>b.jsxs("div",{onClick:()=>t(`/detail/${o.id}`),className:"flex items-center justify-between px-5 py-3 hover:bg-[#F8F8F6] cursor-pointer transition-colors group",children:[b.jsx("div",{className:"flex-1 min-w-0",children:b.jsx("div",{className:"text-sm font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] truncate",children:o.title})}),b.jsxs("div",{className:"flex items-center gap-4 flex-shrink-0 ml-4",children:[b.jsxs("span",{className:"text-sm text-[#717182] font-mono",children:[u.toFixed(o.unit==="円"||Number.isInteger(u)?0:2),o.unit]}),b.jsx(VH,{rank:s,total:f}),b.jsx("span",{className:"text-[#C8C4BB] text-sm group-hover:text-[#3D52A0]",children:"→"})]})]},o.id))})]},n.label)})}),b.jsxs("div",{className:"mt-8 flex gap-3",children:[b.jsx("button",{onClick:()=>t("/diagnosis"),className:"flex-1 py-3 bg-[#3D52A0] text-white rounded-xl text-sm font-medium hover:bg-[#2d4090] transition-colors",children:"🗾 都道府県診断をやってみる"}),b.jsx("button",{onClick:()=>t("/ranking"),className:"flex-1 py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:"🏆 ランキングを見る"})]})]}),b.jsx(Mr,{})]}):b.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[b.jsx(Dr,{}),b.jsxs("main",{className:"max-w-3xl mx-auto px-4 py-16 text-center",children:[b.jsx("p",{className:"text-[#717182]",children:"都道府県が見つかりません"}),b.jsx("button",{onClick:()=>t("/"),className:"mt-4 text-[#3D52A0] underline text-sm",children:"トップへ"})]}),b.jsx(Mr,{})]})}function XH(){const{pathname:e,hash:t}=Kn();return D.useEffect(()=>{window.scrollTo(0,0)},[e,t]),null}function YH(){return b.jsxs(Jk,{children:[b.jsx(XH,{}),b.jsxs(Pk,{children:[b.jsx(Pr,{path:"/",element:b.jsx(w7,{})}),b.jsx(Pr,{path:"/ranking",element:b.jsx(BH,{})}),b.jsx(Pr,{path:"/diagnosis",element:b.jsx(KS,{})}),b.jsx(Pr,{path:"/diagnosis/result/:pref",element:b.jsx(KS,{})}),b.jsx(Pr,{path:"/pref/:pref",element:b.jsx(GH,{})}),b.jsx(Pr,{path:"/detail/:id",element:b.jsx(PH,{})}),b.jsx(Pr,{path:"/privacy",element:b.jsx(kH,{})}),b.jsx(Pr,{path:"/contact",element:b.jsx(TH,{})}),b.jsx(Pr,{path:"/column",element:b.jsx(NH,{})}),b.jsx(Pr,{path:"/column/:slug",element:b.jsx($H,{})})]})]})}CP.createRoot(document.getElementById("root")).render(b.jsx(YH,{}));
