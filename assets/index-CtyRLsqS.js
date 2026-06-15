(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function We(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},Ro={},Gd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx;function CP(){if(kx)return ke;kx=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=h&&I[h]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,S={};function b(I,U,se){this.props=I,this.context=U,this.refs=S,this.updater=se||x}b.prototype.isReactComponent={},b.prototype.setState=function(I,U){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,U,"setState")},b.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function A(){}A.prototype=b.prototype;function O(I,U,se){this.props=I,this.context=U,this.refs=S,this.updater=se||x}var E=O.prototype=new A;E.constructor=O,j(E,b.prototype),E.isPureReactComponent=!0;var N=Array.isArray,_=Object.prototype.hasOwnProperty,P={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function R(I,U,se){var me,xe={},_e=null,De=null;if(U!=null)for(me in U.ref!==void 0&&(De=U.ref),U.key!==void 0&&(_e=""+U.key),U)_.call(U,me)&&!T.hasOwnProperty(me)&&(xe[me]=U[me]);var Ae=arguments.length-2;if(Ae===1)xe.children=se;else if(1<Ae){for(var oe=Array(Ae),ge=0;ge<Ae;ge++)oe[ge]=arguments[ge+2];xe.children=oe}if(I&&I.defaultProps)for(me in Ae=I.defaultProps,Ae)xe[me]===void 0&&(xe[me]=Ae[me]);return{$$typeof:e,type:I,key:_e,ref:De,props:xe,_owner:P.current}}function $(I,U){return{$$typeof:e,type:I.type,key:U,ref:I.ref,props:I.props,_owner:I._owner}}function z(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function B(I){var U={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return U[se]})}var M=/\/+/g;function H(I,U){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):U.toString(36)}function X(I,U,se,me,xe){var _e=typeof I;(_e==="undefined"||_e==="boolean")&&(I=null);var De=!1;if(I===null)De=!0;else switch(_e){case"string":case"number":De=!0;break;case"object":switch(I.$$typeof){case e:case t:De=!0}}if(De)return De=I,xe=xe(De),I=me===""?"."+H(De,0):me,N(xe)?(se="",I!=null&&(se=I.replace(M,"$&/")+"/"),X(xe,U,se,"",function(ge){return ge})):xe!=null&&(z(xe)&&(xe=$(xe,se+(!xe.key||De&&De.key===xe.key?"":(""+xe.key).replace(M,"$&/")+"/")+I)),U.push(xe)),1;if(De=0,me=me===""?".":me+":",N(I))for(var Ae=0;Ae<I.length;Ae++){_e=I[Ae];var oe=me+H(_e,Ae);De+=X(_e,U,se,oe,xe)}else if(oe=g(I),typeof oe=="function")for(I=oe.call(I),Ae=0;!(_e=I.next()).done;)_e=_e.value,oe=me+H(_e,Ae++),De+=X(_e,U,se,oe,xe);else if(_e==="object")throw U=String(I),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return De}function Y(I,U,se){if(I==null)return I;var me=[],xe=0;return X(I,me,"","",function(_e){return U.call(se,_e,xe++)}),me}function W(I){if(I._status===-1){var U=I._result;U=U(),U.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=U)}if(I._status===1)return I._result.default;throw I._result}var Z={current:null},V={transition:null},ee={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:V,ReactCurrentOwner:P};function J(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Y,forEach:function(I,U,se){Y(I,function(){U.apply(this,arguments)},se)},count:function(I){var U=0;return Y(I,function(){U++}),U},toArray:function(I){return Y(I,function(U){return U})||[]},only:function(I){if(!z(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ke.Component=b,ke.Fragment=r,ke.Profiler=a,ke.PureComponent=O,ke.StrictMode=n,ke.Suspense=f,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,ke.act=J,ke.cloneElement=function(I,U,se){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var me=j({},I.props),xe=I.key,_e=I.ref,De=I._owner;if(U!=null){if(U.ref!==void 0&&(_e=U.ref,De=P.current),U.key!==void 0&&(xe=""+U.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(oe in U)_.call(U,oe)&&!T.hasOwnProperty(oe)&&(me[oe]=U[oe]===void 0&&Ae!==void 0?Ae[oe]:U[oe])}var oe=arguments.length-2;if(oe===1)me.children=se;else if(1<oe){Ae=Array(oe);for(var ge=0;ge<oe;ge++)Ae[ge]=arguments[ge+2];me.children=Ae}return{$$typeof:e,type:I.type,key:xe,ref:_e,props:me,_owner:De}},ke.createContext=function(I){return I={$$typeof:s,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:o,_context:I},I.Consumer=I},ke.createElement=R,ke.createFactory=function(I){var U=R.bind(null,I);return U.type=I,U},ke.createRef=function(){return{current:null}},ke.forwardRef=function(I){return{$$typeof:u,render:I}},ke.isValidElement=z,ke.lazy=function(I){return{$$typeof:m,_payload:{_status:-1,_result:I},_init:W}},ke.memo=function(I,U){return{$$typeof:d,type:I,compare:U===void 0?null:U}},ke.startTransition=function(I){var U=V.transition;V.transition={};try{I()}finally{V.transition=U}},ke.unstable_act=J,ke.useCallback=function(I,U){return Z.current.useCallback(I,U)},ke.useContext=function(I){return Z.current.useContext(I)},ke.useDebugValue=function(){},ke.useDeferredValue=function(I){return Z.current.useDeferredValue(I)},ke.useEffect=function(I,U){return Z.current.useEffect(I,U)},ke.useId=function(){return Z.current.useId()},ke.useImperativeHandle=function(I,U,se){return Z.current.useImperativeHandle(I,U,se)},ke.useInsertionEffect=function(I,U){return Z.current.useInsertionEffect(I,U)},ke.useLayoutEffect=function(I,U){return Z.current.useLayoutEffect(I,U)},ke.useMemo=function(I,U){return Z.current.useMemo(I,U)},ke.useReducer=function(I,U,se){return Z.current.useReducer(I,U,se)},ke.useRef=function(I){return Z.current.useRef(I)},ke.useState=function(I){return Z.current.useState(I)},ke.useSyncExternalStore=function(I,U,se){return Z.current.useSyncExternalStore(I,U,se)},ke.useTransition=function(){return Z.current.useTransition()},ke.version="18.3.1",ke}var Nx;function Ty(){return Nx||(Nx=1,Gd.exports=CP()),Gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx;function DP(){if(Tx)return Ro;Tx=1;var e=Ty(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(u,f,d){var m,h={},g=null,x=null;d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(x=f.ref);for(m in f)n.call(f,m)&&!o.hasOwnProperty(m)&&(h[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)h[m]===void 0&&(h[m]=f[m]);return{$$typeof:t,type:u,key:g,ref:x,props:h,_owner:a.current}}return Ro.Fragment=r,Ro.jsx=s,Ro.jsxs=s,Ro}var Cx;function MP(){return Cx||(Cx=1,Vd.exports=DP()),Vd.exports}var y=MP(),su={},Xd={exports:{}},Ht={},Yd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx;function RP(){return Dx||(Dx=1,(function(e){function t(V,ee){var J=V.length;V.push(ee);e:for(;0<J;){var I=J-1>>>1,U=V[I];if(0<a(U,ee))V[I]=ee,V[J]=U,J=I;else break e}}function r(V){return V.length===0?null:V[0]}function n(V){if(V.length===0)return null;var ee=V[0],J=V.pop();if(J!==ee){V[0]=J;e:for(var I=0,U=V.length,se=U>>>1;I<se;){var me=2*(I+1)-1,xe=V[me],_e=me+1,De=V[_e];if(0>a(xe,J))_e<U&&0>a(De,xe)?(V[I]=De,V[_e]=J,I=_e):(V[I]=xe,V[me]=J,I=me);else if(_e<U&&0>a(De,J))V[I]=De,V[_e]=J,I=_e;else break e}}return ee}function a(V,ee){var J=V.sortIndex-ee.sortIndex;return J!==0?J:V.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var f=[],d=[],m=1,h=null,g=3,x=!1,j=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var ee=r(d);ee!==null;){if(ee.callback===null)n(d);else if(ee.startTime<=V)n(d),ee.sortIndex=ee.expirationTime,t(f,ee);else break;ee=r(d)}}function N(V){if(S=!1,E(V),!j)if(r(f)!==null)j=!0,W(_);else{var ee=r(d);ee!==null&&Z(N,ee.startTime-V)}}function _(V,ee){j=!1,S&&(S=!1,A(R),R=-1),x=!0;var J=g;try{for(E(ee),h=r(f);h!==null&&(!(h.expirationTime>ee)||V&&!B());){var I=h.callback;if(typeof I=="function"){h.callback=null,g=h.priorityLevel;var U=I(h.expirationTime<=ee);ee=e.unstable_now(),typeof U=="function"?h.callback=U:h===r(f)&&n(f),E(ee)}else n(f);h=r(f)}if(h!==null)var se=!0;else{var me=r(d);me!==null&&Z(N,me.startTime-ee),se=!1}return se}finally{h=null,g=J,x=!1}}var P=!1,T=null,R=-1,$=5,z=-1;function B(){return!(e.unstable_now()-z<$)}function M(){if(T!==null){var V=e.unstable_now();z=V;var ee=!0;try{ee=T(!0,V)}finally{ee?H():(P=!1,T=null)}}else P=!1}var H;if(typeof O=="function")H=function(){O(M)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Y=X.port2;X.port1.onmessage=M,H=function(){Y.postMessage(null)}}else H=function(){b(M,0)};function W(V){T=V,P||(P=!0,H())}function Z(V,ee){R=b(function(){V(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){j||x||(j=!0,W(_))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(f)},e.unstable_next=function(V){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var J=g;g=ee;try{return V()}finally{g=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,ee){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var J=g;g=V;try{return ee()}finally{g=J}},e.unstable_scheduleCallback=function(V,ee,J){var I=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?I+J:I):J=I,V){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=J+U,V={id:m++,callback:ee,priorityLevel:V,startTime:J,expirationTime:U,sortIndex:-1},J>I?(V.sortIndex=J,t(d,V),r(f)===null&&V===r(d)&&(S?(A(R),R=-1):S=!0,Z(N,J-I))):(V.sortIndex=U,t(f,V),j||x||(j=!0,W(_))),V},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(V){var ee=g;return function(){var J=g;g=ee;try{return V.apply(this,arguments)}finally{g=J}}}})(Qd)),Qd}var Mx;function IP(){return Mx||(Mx=1,Yd.exports=RP()),Yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx;function $P(){if(Rx)return Ht;Rx=1;var e=Ty(),t=IP();function r(i){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)l+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,a={};function o(i,l){s(i,l),s(i+"Capture",l)}function s(i,l){for(a[i]=l,i=0;i<l.length;i++)n.add(l[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},h={};function g(i){return f.call(h,i)?!0:f.call(m,i)?!1:d.test(i)?h[i]=!0:(m[i]=!0,!1)}function x(i,l,c,p){if(c!==null&&c.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return p?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function j(i,l,c,p){if(l===null||typeof l>"u"||x(i,l,c,p))return!0;if(p)return!1;if(c!==null)switch(c.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function S(i,l,c,p,v,w,k){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=p,this.attributeNamespace=v,this.mustUseProperty=c,this.propertyName=i,this.type=l,this.sanitizeURL=w,this.removeEmptyString=k}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){b[i]=new S(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var l=i[0];b[l]=new S(l,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){b[i]=new S(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){b[i]=new S(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){b[i]=new S(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){b[i]=new S(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){b[i]=new S(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){b[i]=new S(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){b[i]=new S(i,5,!1,i.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function O(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var l=i.replace(A,O);b[l]=new S(l,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var l=i.replace(A,O);b[l]=new S(l,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var l=i.replace(A,O);b[l]=new S(l,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){b[i]=new S(i,1,!1,i.toLowerCase(),null,!1,!1)}),b.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){b[i]=new S(i,1,!1,i.toLowerCase(),null,!0,!0)});function E(i,l,c,p){var v=b.hasOwnProperty(l)?b[l]:null;(v!==null?v.type!==0:p||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(j(l,c,v,p)&&(c=null),p||v===null?g(l)&&(c===null?i.removeAttribute(l):i.setAttribute(l,""+c)):v.mustUseProperty?i[v.propertyName]=c===null?v.type===3?!1:"":c:(l=v.attributeName,p=v.attributeNamespace,c===null?i.removeAttribute(l):(v=v.type,c=v===3||v===4&&c===!0?"":""+c,p?i.setAttributeNS(p,l,c):i.setAttribute(l,c))))}var N=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),P=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),V=Symbol.iterator;function ee(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var J=Object.assign,I;function U(i){if(I===void 0)try{throw Error()}catch(c){var l=c.stack.trim().match(/\n( *(at )?)/);I=l&&l[1]||""}return`
`+I+i}var se=!1;function me(i,l){if(!i||se)return"";se=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(Q){var p=Q}Reflect.construct(i,[],l)}else{try{l.call()}catch(Q){p=Q}i.call(l.prototype)}else{try{throw Error()}catch(Q){p=Q}i()}}catch(Q){if(Q&&p&&typeof Q.stack=="string"){for(var v=Q.stack.split(`
`),w=p.stack.split(`
`),k=v.length-1,C=w.length-1;1<=k&&0<=C&&v[k]!==w[C];)C--;for(;1<=k&&0<=C;k--,C--)if(v[k]!==w[C]){if(k!==1||C!==1)do if(k--,C--,0>C||v[k]!==w[C]){var L=`
`+v[k].replace(" at new "," at ");return i.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",i.displayName)),L}while(1<=k&&0<=C);break}}}finally{se=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?U(i):""}function xe(i){switch(i.tag){case 5:return U(i.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return i=me(i.type,!1),i;case 11:return i=me(i.type.render,!1),i;case 1:return i=me(i.type,!0),i;default:return""}}function _e(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case T:return"Fragment";case P:return"Portal";case $:return"Profiler";case R:return"StrictMode";case H:return"Suspense";case X:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case z:return(i._context.displayName||"Context")+".Provider";case M:var l=i.render;return i=i.displayName,i||(i=l.displayName||l.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Y:return l=i.displayName||null,l!==null?l:_e(i.type)||"Memo";case W:l=i._payload,i=i._init;try{return _e(i(l))}catch{}}return null}function De(i){var l=i.type;switch(i.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=l.render,i=i.displayName||i.name||"",l.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(l);case 8:return l===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function oe(i){var l=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function ge(i){var l=oe(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,l),p=""+i[l];if(!i.hasOwnProperty(l)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var v=c.get,w=c.set;return Object.defineProperty(i,l,{configurable:!0,get:function(){return v.call(this)},set:function(k){p=""+k,w.call(this,k)}}),Object.defineProperty(i,l,{enumerable:c.enumerable}),{getValue:function(){return p},setValue:function(k){p=""+k},stopTracking:function(){i._valueTracker=null,delete i[l]}}}}function Oe(i){i._valueTracker||(i._valueTracker=ge(i))}function ae(i){if(!i)return!1;var l=i._valueTracker;if(!l)return!0;var c=l.getValue(),p="";return i&&(p=oe(i)?i.checked?"true":"false":i.value),i=p,i!==c?(l.setValue(i),!0):!1}function ze(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ne(i,l){var c=l.checked;return J({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function tt(i,l){var c=l.defaultValue==null?"":l.defaultValue,p=l.checked!=null?l.checked:l.defaultChecked;c=Ae(l.value!=null?l.value:c),i._wrapperState={initialChecked:p,initialValue:c,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function rt(i,l){l=l.checked,l!=null&&E(i,"checked",l,!1)}function yt(i,l){rt(i,l);var c=Ae(l.value),p=l.type;if(c!=null)p==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(p==="submit"||p==="reset"){i.removeAttribute("value");return}l.hasOwnProperty("value")?$r(i,l.type,c):l.hasOwnProperty("defaultValue")&&$r(i,l.type,Ae(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(i.defaultChecked=!!l.defaultChecked)}function Sr(i,l,c){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var p=l.type;if(!(p!=="submit"&&p!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+i._wrapperState.initialValue,c||l===i.value||(i.value=l),i.defaultValue=l}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function $r(i,l,c){(l!=="number"||ze(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var Lr=Array.isArray;function Ft(i,l,c,p){if(i=i.options,l){l={};for(var v=0;v<c.length;v++)l["$"+c[v]]=!0;for(c=0;c<i.length;c++)v=l.hasOwnProperty("$"+i[c].value),i[c].selected!==v&&(i[c].selected=v),v&&p&&(i[c].defaultSelected=!0)}else{for(c=""+Ae(c),l=null,v=0;v<i.length;v++){if(i[v].value===c){i[v].selected=!0,p&&(i[v].defaultSelected=!0);return}l!==null||i[v].disabled||(l=i[v])}l!==null&&(l.selected=!0)}}function jr(i,l){if(l.dangerouslySetInnerHTML!=null)throw Error(r(91));return J({},l,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Ta(i,l){var c=l.value;if(c==null){if(c=l.children,l=l.defaultValue,c!=null){if(l!=null)throw Error(r(92));if(Lr(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),c=l}i._wrapperState={initialValue:Ae(c)}}function Gi(i,l){var c=Ae(l.value),p=Ae(l.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),l.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),p!=null&&(i.defaultValue=""+p)}function Xi(i){var l=i.textContent;l===i._wrapperState.initialValue&&l!==""&&l!==null&&(i.value=l)}function zv(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(i,l){return i==null||i==="http://www.w3.org/1999/xhtml"?zv(l):i==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Zl,Uv=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,c,p,v){MSApp.execUnsafeLocalFunction(function(){return i(l,c,p,v)})}:i})(function(i,l){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=l;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=Zl.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;l.firstChild;)i.appendChild(l.firstChild)}});function Yi(i,l){if(l){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=l;return}}i.textContent=l}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IO=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(i){IO.forEach(function(l){l=l+i.charAt(0).toUpperCase()+i.substring(1),Qi[l]=Qi[i]})});function Wv(i,l,c){return l==null||typeof l=="boolean"||l===""?"":c||typeof l!="number"||l===0||Qi.hasOwnProperty(i)&&Qi[i]?(""+l).trim():l+"px"}function Hv(i,l){i=i.style;for(var c in l)if(l.hasOwnProperty(c)){var p=c.indexOf("--")===0,v=Wv(c,l[c],p);c==="float"&&(c="cssFloat"),p?i.setProperty(c,v):i[c]=v}}var $O=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(i,l){if(l){if($O[i]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(r(137,i));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(r(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(r(61))}if(l.style!=null&&typeof l.style!="object")throw Error(r(62))}}function of(i,l){if(i.indexOf("-")===-1)return typeof l.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function sf(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var uf=null,Ca=null,Da=null;function Kv(i){if(i=bo(i)){if(typeof uf!="function")throw Error(r(280));var l=i.stateNode;l&&(l=Ss(l),uf(i.stateNode,i.type,l))}}function Vv(i){Ca?Da?Da.push(i):Da=[i]:Ca=i}function Gv(){if(Ca){var i=Ca,l=Da;if(Da=Ca=null,Kv(i),l)for(i=0;i<l.length;i++)Kv(l[i])}}function Xv(i,l){return i(l)}function Yv(){}var cf=!1;function Qv(i,l,c){if(cf)return i(l,c);cf=!0;try{return Xv(i,l,c)}finally{cf=!1,(Ca!==null||Da!==null)&&(Yv(),Gv())}}function Ji(i,l){var c=i.stateNode;if(c===null)return null;var p=Ss(c);if(p===null)return null;c=p[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(i=i.type,p=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!p;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(r(231,l,typeof c));return c}var ff=!1;if(u)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){ff=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{ff=!1}function LO(i,l,c,p,v,w,k,C,L){var Q=Array.prototype.slice.call(arguments,3);try{l.apply(c,Q)}catch(ne){this.onError(ne)}}var eo=!1,es=null,ts=!1,df=null,FO={onError:function(i){eo=!0,es=i}};function BO(i,l,c,p,v,w,k,C,L){eo=!1,es=null,LO.apply(FO,arguments)}function qO(i,l,c,p,v,w,k,C,L){if(BO.apply(this,arguments),eo){if(eo){var Q=es;eo=!1,es=null}else throw Error(r(198));ts||(ts=!0,df=Q)}}function ta(i){var l=i,c=i;if(i.alternate)for(;l.return;)l=l.return;else{i=l;do l=i,(l.flags&4098)!==0&&(c=l.return),i=l.return;while(i)}return l.tag===3?c:null}function Jv(i){if(i.tag===13){var l=i.memoizedState;if(l===null&&(i=i.alternate,i!==null&&(l=i.memoizedState)),l!==null)return l.dehydrated}return null}function Zv(i){if(ta(i)!==i)throw Error(r(188))}function zO(i){var l=i.alternate;if(!l){if(l=ta(i),l===null)throw Error(r(188));return l!==i?null:i}for(var c=i,p=l;;){var v=c.return;if(v===null)break;var w=v.alternate;if(w===null){if(p=v.return,p!==null){c=p;continue}break}if(v.child===w.child){for(w=v.child;w;){if(w===c)return Zv(v),i;if(w===p)return Zv(v),l;w=w.sibling}throw Error(r(188))}if(c.return!==p.return)c=v,p=w;else{for(var k=!1,C=v.child;C;){if(C===c){k=!0,c=v,p=w;break}if(C===p){k=!0,p=v,c=w;break}C=C.sibling}if(!k){for(C=w.child;C;){if(C===c){k=!0,c=w,p=v;break}if(C===p){k=!0,p=w,c=v;break}C=C.sibling}if(!k)throw Error(r(189))}}if(c.alternate!==p)throw Error(r(190))}if(c.tag!==3)throw Error(r(188));return c.stateNode.current===c?i:l}function e1(i){return i=zO(i),i!==null?t1(i):null}function t1(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var l=t1(i);if(l!==null)return l;i=i.sibling}return null}var r1=t.unstable_scheduleCallback,n1=t.unstable_cancelCallback,UO=t.unstable_shouldYield,WO=t.unstable_requestPaint,it=t.unstable_now,HO=t.unstable_getCurrentPriorityLevel,pf=t.unstable_ImmediatePriority,a1=t.unstable_UserBlockingPriority,rs=t.unstable_NormalPriority,KO=t.unstable_LowPriority,i1=t.unstable_IdlePriority,ns=null,Fr=null;function VO(i){if(Fr&&typeof Fr.onCommitFiberRoot=="function")try{Fr.onCommitFiberRoot(ns,i,void 0,(i.current.flags&128)===128)}catch{}}var _r=Math.clz32?Math.clz32:YO,GO=Math.log,XO=Math.LN2;function YO(i){return i>>>=0,i===0?32:31-(GO(i)/XO|0)|0}var as=64,is=4194304;function to(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function os(i,l){var c=i.pendingLanes;if(c===0)return 0;var p=0,v=i.suspendedLanes,w=i.pingedLanes,k=c&268435455;if(k!==0){var C=k&~v;C!==0?p=to(C):(w&=k,w!==0&&(p=to(w)))}else k=c&~v,k!==0?p=to(k):w!==0&&(p=to(w));if(p===0)return 0;if(l!==0&&l!==p&&(l&v)===0&&(v=p&-p,w=l&-l,v>=w||v===16&&(w&4194240)!==0))return l;if((p&4)!==0&&(p|=c&16),l=i.entangledLanes,l!==0)for(i=i.entanglements,l&=p;0<l;)c=31-_r(l),v=1<<c,p|=i[c],l&=~v;return p}function QO(i,l){switch(i){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JO(i,l){for(var c=i.suspendedLanes,p=i.pingedLanes,v=i.expirationTimes,w=i.pendingLanes;0<w;){var k=31-_r(w),C=1<<k,L=v[k];L===-1?((C&c)===0||(C&p)!==0)&&(v[k]=QO(C,l)):L<=l&&(i.expiredLanes|=C),w&=~C}}function hf(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function o1(){var i=as;return as<<=1,(as&4194240)===0&&(as=64),i}function mf(i){for(var l=[],c=0;31>c;c++)l.push(i);return l}function ro(i,l,c){i.pendingLanes|=l,l!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,l=31-_r(l),i[l]=c}function ZO(i,l){var c=i.pendingLanes&~l;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=l,i.mutableReadLanes&=l,i.entangledLanes&=l,l=i.entanglements;var p=i.eventTimes;for(i=i.expirationTimes;0<c;){var v=31-_r(c),w=1<<v;l[v]=0,p[v]=-1,i[v]=-1,c&=~w}}function yf(i,l){var c=i.entangledLanes|=l;for(i=i.entanglements;c;){var p=31-_r(c),v=1<<p;v&l|i[p]&l&&(i[p]|=l),c&=~v}}var Be=0;function l1(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var s1,vf,u1,c1,f1,gf=!1,ls=[],On=null,En=null,Pn=null,no=new Map,ao=new Map,kn=[],eE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d1(i,l){switch(i){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":no.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(l.pointerId)}}function io(i,l,c,p,v,w){return i===null||i.nativeEvent!==w?(i={blockedOn:l,domEventName:c,eventSystemFlags:p,nativeEvent:w,targetContainers:[v]},l!==null&&(l=bo(l),l!==null&&vf(l)),i):(i.eventSystemFlags|=p,l=i.targetContainers,v!==null&&l.indexOf(v)===-1&&l.push(v),i)}function tE(i,l,c,p,v){switch(l){case"focusin":return On=io(On,i,l,c,p,v),!0;case"dragenter":return En=io(En,i,l,c,p,v),!0;case"mouseover":return Pn=io(Pn,i,l,c,p,v),!0;case"pointerover":var w=v.pointerId;return no.set(w,io(no.get(w)||null,i,l,c,p,v)),!0;case"gotpointercapture":return w=v.pointerId,ao.set(w,io(ao.get(w)||null,i,l,c,p,v)),!0}return!1}function p1(i){var l=ra(i.target);if(l!==null){var c=ta(l);if(c!==null){if(l=c.tag,l===13){if(l=Jv(c),l!==null){i.blockedOn=l,f1(i.priority,function(){u1(c)});return}}else if(l===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ss(i){if(i.blockedOn!==null)return!1;for(var l=i.targetContainers;0<l.length;){var c=bf(i.domEventName,i.eventSystemFlags,l[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var p=new c.constructor(c.type,c);lf=p,c.target.dispatchEvent(p),lf=null}else return l=bo(c),l!==null&&vf(l),i.blockedOn=c,!1;l.shift()}return!0}function h1(i,l,c){ss(i)&&c.delete(l)}function rE(){gf=!1,On!==null&&ss(On)&&(On=null),En!==null&&ss(En)&&(En=null),Pn!==null&&ss(Pn)&&(Pn=null),no.forEach(h1),ao.forEach(h1)}function oo(i,l){i.blockedOn===l&&(i.blockedOn=null,gf||(gf=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,rE)))}function lo(i){function l(v){return oo(v,i)}if(0<ls.length){oo(ls[0],i);for(var c=1;c<ls.length;c++){var p=ls[c];p.blockedOn===i&&(p.blockedOn=null)}}for(On!==null&&oo(On,i),En!==null&&oo(En,i),Pn!==null&&oo(Pn,i),no.forEach(l),ao.forEach(l),c=0;c<kn.length;c++)p=kn[c],p.blockedOn===i&&(p.blockedOn=null);for(;0<kn.length&&(c=kn[0],c.blockedOn===null);)p1(c),c.blockedOn===null&&kn.shift()}var Ma=N.ReactCurrentBatchConfig,us=!0;function nE(i,l,c,p){var v=Be,w=Ma.transition;Ma.transition=null;try{Be=1,xf(i,l,c,p)}finally{Be=v,Ma.transition=w}}function aE(i,l,c,p){var v=Be,w=Ma.transition;Ma.transition=null;try{Be=4,xf(i,l,c,p)}finally{Be=v,Ma.transition=w}}function xf(i,l,c,p){if(us){var v=bf(i,l,c,p);if(v===null)$f(i,l,p,cs,c),d1(i,p);else if(tE(v,i,l,c,p))p.stopPropagation();else if(d1(i,p),l&4&&-1<eE.indexOf(i)){for(;v!==null;){var w=bo(v);if(w!==null&&s1(w),w=bf(i,l,c,p),w===null&&$f(i,l,p,cs,c),w===v)break;v=w}v!==null&&p.stopPropagation()}else $f(i,l,p,null,c)}}var cs=null;function bf(i,l,c,p){if(cs=null,i=sf(p),i=ra(i),i!==null)if(l=ta(i),l===null)i=null;else if(c=l.tag,c===13){if(i=Jv(l),i!==null)return i;i=null}else if(c===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;i=null}else l!==i&&(i=null);return cs=i,null}function m1(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HO()){case pf:return 1;case a1:return 4;case rs:case KO:return 16;case i1:return 536870912;default:return 16}default:return 16}}var Nn=null,wf=null,fs=null;function y1(){if(fs)return fs;var i,l=wf,c=l.length,p,v="value"in Nn?Nn.value:Nn.textContent,w=v.length;for(i=0;i<c&&l[i]===v[i];i++);var k=c-i;for(p=1;p<=k&&l[c-p]===v[w-p];p++);return fs=v.slice(i,1<p?1-p:void 0)}function ds(i){var l=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&l===13&&(i=13)):i=l,i===10&&(i=13),32<=i||i===13?i:0}function ps(){return!0}function v1(){return!1}function Yt(i){function l(c,p,v,w,k){this._reactName=c,this._targetInst=v,this.type=p,this.nativeEvent=w,this.target=k,this.currentTarget=null;for(var C in i)i.hasOwnProperty(C)&&(c=i[C],this[C]=c?c(w):w[C]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?ps:v1,this.isPropagationStopped=v1,this}return J(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),l}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=Yt(Ra),so=J({},Ra,{view:0,detail:0}),iE=Yt(so),jf,_f,uo,hs=J({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==uo&&(uo&&i.type==="mousemove"?(jf=i.screenX-uo.screenX,_f=i.screenY-uo.screenY):_f=jf=0,uo=i),jf)},movementY:function(i){return"movementY"in i?i.movementY:_f}}),g1=Yt(hs),oE=J({},hs,{dataTransfer:0}),lE=Yt(oE),sE=J({},so,{relatedTarget:0}),Af=Yt(sE),uE=J({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),cE=Yt(uE),fE=J({},Ra,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),dE=Yt(fE),pE=J({},Ra,{data:0}),x1=Yt(pE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vE(i){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(i):(i=yE[i])?!!l[i]:!1}function Of(){return vE}var gE=J({},so,{key:function(i){if(i.key){var l=hE[i.key]||i.key;if(l!=="Unidentified")return l}return i.type==="keypress"?(i=ds(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?mE[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(i){return i.type==="keypress"?ds(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ds(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),xE=Yt(gE),bE=J({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b1=Yt(bE),wE=J({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),SE=Yt(wE),jE=J({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),_E=Yt(jE),AE=J({},hs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),OE=Yt(AE),EE=[9,13,27,32],Ef=u&&"CompositionEvent"in window,co=null;u&&"documentMode"in document&&(co=document.documentMode);var PE=u&&"TextEvent"in window&&!co,w1=u&&(!Ef||co&&8<co&&11>=co),S1=" ",j1=!1;function _1(i,l){switch(i){case"keyup":return EE.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A1(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ia=!1;function kE(i,l){switch(i){case"compositionend":return A1(l);case"keypress":return l.which!==32?null:(j1=!0,S1);case"textInput":return i=l.data,i===S1&&j1?null:i;default:return null}}function NE(i,l){if(Ia)return i==="compositionend"||!Ef&&_1(i,l)?(i=y1(),fs=wf=Nn=null,Ia=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return w1&&l.locale!=="ko"?null:l.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O1(i){var l=i&&i.nodeName&&i.nodeName.toLowerCase();return l==="input"?!!TE[i.type]:l==="textarea"}function E1(i,l,c,p){Vv(p),l=xs(l,"onChange"),0<l.length&&(c=new Sf("onChange","change",null,c,p),i.push({event:c,listeners:l}))}var fo=null,po=null;function CE(i){H1(i,0)}function ms(i){var l=qa(i);if(ae(l))return i}function DE(i,l){if(i==="change")return l}var P1=!1;if(u){var Pf;if(u){var kf="oninput"in document;if(!kf){var k1=document.createElement("div");k1.setAttribute("oninput","return;"),kf=typeof k1.oninput=="function"}Pf=kf}else Pf=!1;P1=Pf&&(!document.documentMode||9<document.documentMode)}function N1(){fo&&(fo.detachEvent("onpropertychange",T1),po=fo=null)}function T1(i){if(i.propertyName==="value"&&ms(po)){var l=[];E1(l,po,i,sf(i)),Qv(CE,l)}}function ME(i,l,c){i==="focusin"?(N1(),fo=l,po=c,fo.attachEvent("onpropertychange",T1)):i==="focusout"&&N1()}function RE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ms(po)}function IE(i,l){if(i==="click")return ms(l)}function $E(i,l){if(i==="input"||i==="change")return ms(l)}function LE(i,l){return i===l&&(i!==0||1/i===1/l)||i!==i&&l!==l}var Ar=typeof Object.is=="function"?Object.is:LE;function ho(i,l){if(Ar(i,l))return!0;if(typeof i!="object"||i===null||typeof l!="object"||l===null)return!1;var c=Object.keys(i),p=Object.keys(l);if(c.length!==p.length)return!1;for(p=0;p<c.length;p++){var v=c[p];if(!f.call(l,v)||!Ar(i[v],l[v]))return!1}return!0}function C1(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function D1(i,l){var c=C1(i);i=0;for(var p;c;){if(c.nodeType===3){if(p=i+c.textContent.length,i<=l&&p>=l)return{node:c,offset:l-i};i=p}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=C1(c)}}function M1(i,l){return i&&l?i===l?!0:i&&i.nodeType===3?!1:l&&l.nodeType===3?M1(i,l.parentNode):"contains"in i?i.contains(l):i.compareDocumentPosition?!!(i.compareDocumentPosition(l)&16):!1:!1}function R1(){for(var i=window,l=ze();l instanceof i.HTMLIFrameElement;){try{var c=typeof l.contentWindow.location.href=="string"}catch{c=!1}if(c)i=l.contentWindow;else break;l=ze(i.document)}return l}function Nf(i){var l=i&&i.nodeName&&i.nodeName.toLowerCase();return l&&(l==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||l==="textarea"||i.contentEditable==="true")}function FE(i){var l=R1(),c=i.focusedElem,p=i.selectionRange;if(l!==c&&c&&c.ownerDocument&&M1(c.ownerDocument.documentElement,c)){if(p!==null&&Nf(c)){if(l=p.start,i=p.end,i===void 0&&(i=l),"selectionStart"in c)c.selectionStart=l,c.selectionEnd=Math.min(i,c.value.length);else if(i=(l=c.ownerDocument||document)&&l.defaultView||window,i.getSelection){i=i.getSelection();var v=c.textContent.length,w=Math.min(p.start,v);p=p.end===void 0?w:Math.min(p.end,v),!i.extend&&w>p&&(v=p,p=w,w=v),v=D1(c,w);var k=D1(c,p);v&&k&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==k.node||i.focusOffset!==k.offset)&&(l=l.createRange(),l.setStart(v.node,v.offset),i.removeAllRanges(),w>p?(i.addRange(l),i.extend(k.node,k.offset)):(l.setEnd(k.node,k.offset),i.addRange(l)))}}for(l=[],i=c;i=i.parentNode;)i.nodeType===1&&l.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<l.length;c++)i=l[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var BE=u&&"documentMode"in document&&11>=document.documentMode,$a=null,Tf=null,mo=null,Cf=!1;function I1(i,l,c){var p=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Cf||$a==null||$a!==ze(p)||(p=$a,"selectionStart"in p&&Nf(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),mo&&ho(mo,p)||(mo=p,p=xs(Tf,"onSelect"),0<p.length&&(l=new Sf("onSelect","select",null,l,c),i.push({event:l,listeners:p}),l.target=$a)))}function ys(i,l){var c={};return c[i.toLowerCase()]=l.toLowerCase(),c["Webkit"+i]="webkit"+l,c["Moz"+i]="moz"+l,c}var La={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionend:ys("Transition","TransitionEnd")},Df={},$1={};u&&($1=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function vs(i){if(Df[i])return Df[i];if(!La[i])return i;var l=La[i],c;for(c in l)if(l.hasOwnProperty(c)&&c in $1)return Df[i]=l[c];return i}var L1=vs("animationend"),F1=vs("animationiteration"),B1=vs("animationstart"),q1=vs("transitionend"),z1=new Map,U1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(i,l){z1.set(i,l),o(l,[i])}for(var Mf=0;Mf<U1.length;Mf++){var Rf=U1[Mf],qE=Rf.toLowerCase(),zE=Rf[0].toUpperCase()+Rf.slice(1);Tn(qE,"on"+zE)}Tn(L1,"onAnimationEnd"),Tn(F1,"onAnimationIteration"),Tn(B1,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(q1,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function W1(i,l,c){var p=i.type||"unknown-event";i.currentTarget=c,qO(p,l,void 0,i),i.currentTarget=null}function H1(i,l){l=(l&4)!==0;for(var c=0;c<i.length;c++){var p=i[c],v=p.event;p=p.listeners;e:{var w=void 0;if(l)for(var k=p.length-1;0<=k;k--){var C=p[k],L=C.instance,Q=C.currentTarget;if(C=C.listener,L!==w&&v.isPropagationStopped())break e;W1(v,C,Q),w=L}else for(k=0;k<p.length;k++){if(C=p[k],L=C.instance,Q=C.currentTarget,C=C.listener,L!==w&&v.isPropagationStopped())break e;W1(v,C,Q),w=L}}}if(ts)throw i=df,ts=!1,df=null,i}function Ve(i,l){var c=l[Uf];c===void 0&&(c=l[Uf]=new Set);var p=i+"__bubble";c.has(p)||(K1(l,i,2,!1),c.add(p))}function If(i,l,c){var p=0;l&&(p|=4),K1(c,i,p,l)}var gs="_reactListening"+Math.random().toString(36).slice(2);function vo(i){if(!i[gs]){i[gs]=!0,n.forEach(function(c){c!=="selectionchange"&&(UE.has(c)||If(c,!1,i),If(c,!0,i))});var l=i.nodeType===9?i:i.ownerDocument;l===null||l[gs]||(l[gs]=!0,If("selectionchange",!1,l))}}function K1(i,l,c,p){switch(m1(l)){case 1:var v=nE;break;case 4:v=aE;break;default:v=xf}c=v.bind(null,l,c,i),v=void 0,!ff||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(v=!0),p?v!==void 0?i.addEventListener(l,c,{capture:!0,passive:v}):i.addEventListener(l,c,!0):v!==void 0?i.addEventListener(l,c,{passive:v}):i.addEventListener(l,c,!1)}function $f(i,l,c,p,v){var w=p;if((l&1)===0&&(l&2)===0&&p!==null)e:for(;;){if(p===null)return;var k=p.tag;if(k===3||k===4){var C=p.stateNode.containerInfo;if(C===v||C.nodeType===8&&C.parentNode===v)break;if(k===4)for(k=p.return;k!==null;){var L=k.tag;if((L===3||L===4)&&(L=k.stateNode.containerInfo,L===v||L.nodeType===8&&L.parentNode===v))return;k=k.return}for(;C!==null;){if(k=ra(C),k===null)return;if(L=k.tag,L===5||L===6){p=w=k;continue e}C=C.parentNode}}p=p.return}Qv(function(){var Q=w,ne=sf(c),ie=[];e:{var re=z1.get(i);if(re!==void 0){var fe=Sf,he=i;switch(i){case"keypress":if(ds(c)===0)break e;case"keydown":case"keyup":fe=xE;break;case"focusin":he="focus",fe=Af;break;case"focusout":he="blur",fe=Af;break;case"beforeblur":case"afterblur":fe=Af;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=g1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=lE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=SE;break;case L1:case F1:case B1:fe=cE;break;case q1:fe=_E;break;case"scroll":fe=iE;break;case"wheel":fe=OE;break;case"copy":case"cut":case"paste":fe=dE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=b1}var ye=(l&4)!==0,ot=!ye&&i==="scroll",K=ye?re!==null?re+"Capture":null:re;ye=[];for(var F=Q,G;F!==null;){G=F;var le=G.stateNode;if(G.tag===5&&le!==null&&(G=le,K!==null&&(le=Ji(F,K),le!=null&&ye.push(go(F,le,G)))),ot)break;F=F.return}0<ye.length&&(re=new fe(re,he,null,c,ne),ie.push({event:re,listeners:ye}))}}if((l&7)===0){e:{if(re=i==="mouseover"||i==="pointerover",fe=i==="mouseout"||i==="pointerout",re&&c!==lf&&(he=c.relatedTarget||c.fromElement)&&(ra(he)||he[Zr]))break e;if((fe||re)&&(re=ne.window===ne?ne:(re=ne.ownerDocument)?re.defaultView||re.parentWindow:window,fe?(he=c.relatedTarget||c.toElement,fe=Q,he=he?ra(he):null,he!==null&&(ot=ta(he),he!==ot||he.tag!==5&&he.tag!==6)&&(he=null)):(fe=null,he=Q),fe!==he)){if(ye=g1,le="onMouseLeave",K="onMouseEnter",F="mouse",(i==="pointerout"||i==="pointerover")&&(ye=b1,le="onPointerLeave",K="onPointerEnter",F="pointer"),ot=fe==null?re:qa(fe),G=he==null?re:qa(he),re=new ye(le,F+"leave",fe,c,ne),re.target=ot,re.relatedTarget=G,le=null,ra(ne)===Q&&(ye=new ye(K,F+"enter",he,c,ne),ye.target=G,ye.relatedTarget=ot,le=ye),ot=le,fe&&he)t:{for(ye=fe,K=he,F=0,G=ye;G;G=Fa(G))F++;for(G=0,le=K;le;le=Fa(le))G++;for(;0<F-G;)ye=Fa(ye),F--;for(;0<G-F;)K=Fa(K),G--;for(;F--;){if(ye===K||K!==null&&ye===K.alternate)break t;ye=Fa(ye),K=Fa(K)}ye=null}else ye=null;fe!==null&&V1(ie,re,fe,ye,!1),he!==null&&ot!==null&&V1(ie,ot,he,ye,!0)}}e:{if(re=Q?qa(Q):window,fe=re.nodeName&&re.nodeName.toLowerCase(),fe==="select"||fe==="input"&&re.type==="file")var ve=DE;else if(O1(re))if(P1)ve=$E;else{ve=RE;var be=ME}else(fe=re.nodeName)&&fe.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(ve=IE);if(ve&&(ve=ve(i,Q))){E1(ie,ve,c,ne);break e}be&&be(i,re,Q),i==="focusout"&&(be=re._wrapperState)&&be.controlled&&re.type==="number"&&$r(re,"number",re.value)}switch(be=Q?qa(Q):window,i){case"focusin":(O1(be)||be.contentEditable==="true")&&($a=be,Tf=Q,mo=null);break;case"focusout":mo=Tf=$a=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,I1(ie,c,ne);break;case"selectionchange":if(BE)break;case"keydown":case"keyup":I1(ie,c,ne)}var we;if(Ef)e:{switch(i){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Ia?_1(i,c)&&(je="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(je="onCompositionStart");je&&(w1&&c.locale!=="ko"&&(Ia||je!=="onCompositionStart"?je==="onCompositionEnd"&&Ia&&(we=y1()):(Nn=ne,wf="value"in Nn?Nn.value:Nn.textContent,Ia=!0)),be=xs(Q,je),0<be.length&&(je=new x1(je,i,null,c,ne),ie.push({event:je,listeners:be}),we?je.data=we:(we=A1(c),we!==null&&(je.data=we)))),(we=PE?kE(i,c):NE(i,c))&&(Q=xs(Q,"onBeforeInput"),0<Q.length&&(ne=new x1("onBeforeInput","beforeinput",null,c,ne),ie.push({event:ne,listeners:Q}),ne.data=we))}H1(ie,l)})}function go(i,l,c){return{instance:i,listener:l,currentTarget:c}}function xs(i,l){for(var c=l+"Capture",p=[];i!==null;){var v=i,w=v.stateNode;v.tag===5&&w!==null&&(v=w,w=Ji(i,c),w!=null&&p.unshift(go(i,w,v)),w=Ji(i,l),w!=null&&p.push(go(i,w,v))),i=i.return}return p}function Fa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function V1(i,l,c,p,v){for(var w=l._reactName,k=[];c!==null&&c!==p;){var C=c,L=C.alternate,Q=C.stateNode;if(L!==null&&L===p)break;C.tag===5&&Q!==null&&(C=Q,v?(L=Ji(c,w),L!=null&&k.unshift(go(c,L,C))):v||(L=Ji(c,w),L!=null&&k.push(go(c,L,C)))),c=c.return}k.length!==0&&i.push({event:l,listeners:k})}var WE=/\r\n?/g,HE=/\u0000|\uFFFD/g;function G1(i){return(typeof i=="string"?i:""+i).replace(WE,`
`).replace(HE,"")}function bs(i,l,c){if(l=G1(l),G1(i)!==l&&c)throw Error(r(425))}function ws(){}var Lf=null,Ff=null;function Bf(i,l){return i==="textarea"||i==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,KE=typeof clearTimeout=="function"?clearTimeout:void 0,X1=typeof Promise=="function"?Promise:void 0,VE=typeof queueMicrotask=="function"?queueMicrotask:typeof X1<"u"?function(i){return X1.resolve(null).then(i).catch(GE)}:qf;function GE(i){setTimeout(function(){throw i})}function zf(i,l){var c=l,p=0;do{var v=c.nextSibling;if(i.removeChild(c),v&&v.nodeType===8)if(c=v.data,c==="/$"){if(p===0){i.removeChild(v),lo(l);return}p--}else c!=="$"&&c!=="$?"&&c!=="$!"||p++;c=v}while(c);lo(l)}function Cn(i){for(;i!=null;i=i.nextSibling){var l=i.nodeType;if(l===1||l===3)break;if(l===8){if(l=i.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return i}function Y1(i){i=i.previousSibling;for(var l=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(l===0)return i;l--}else c==="/$"&&l++}i=i.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),Br="__reactFiber$"+Ba,xo="__reactProps$"+Ba,Zr="__reactContainer$"+Ba,Uf="__reactEvents$"+Ba,XE="__reactListeners$"+Ba,YE="__reactHandles$"+Ba;function ra(i){var l=i[Br];if(l)return l;for(var c=i.parentNode;c;){if(l=c[Zr]||c[Br]){if(c=l.alternate,l.child!==null||c!==null&&c.child!==null)for(i=Y1(i);i!==null;){if(c=i[Br])return c;i=Y1(i)}return l}i=c,c=i.parentNode}return null}function bo(i){return i=i[Br]||i[Zr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function qa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(r(33))}function Ss(i){return i[xo]||null}var Wf=[],za=-1;function Dn(i){return{current:i}}function Ge(i){0>za||(i.current=Wf[za],Wf[za]=null,za--)}function He(i,l){za++,Wf[za]=i.current,i.current=l}var Mn={},Ot=Dn(Mn),Bt=Dn(!1),na=Mn;function Ua(i,l){var c=i.type.contextTypes;if(!c)return Mn;var p=i.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===l)return p.__reactInternalMemoizedMaskedChildContext;var v={},w;for(w in c)v[w]=l[w];return p&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=l,i.__reactInternalMemoizedMaskedChildContext=v),v}function qt(i){return i=i.childContextTypes,i!=null}function js(){Ge(Bt),Ge(Ot)}function Q1(i,l,c){if(Ot.current!==Mn)throw Error(r(168));He(Ot,l),He(Bt,c)}function J1(i,l,c){var p=i.stateNode;if(l=l.childContextTypes,typeof p.getChildContext!="function")return c;p=p.getChildContext();for(var v in p)if(!(v in l))throw Error(r(108,De(i)||"Unknown",v));return J({},c,p)}function _s(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Mn,na=Ot.current,He(Ot,i),He(Bt,Bt.current),!0}function Z1(i,l,c){var p=i.stateNode;if(!p)throw Error(r(169));c?(i=J1(i,l,na),p.__reactInternalMemoizedMergedChildContext=i,Ge(Bt),Ge(Ot),He(Ot,i)):Ge(Bt),He(Bt,c)}var en=null,As=!1,Hf=!1;function eg(i){en===null?en=[i]:en.push(i)}function QE(i){As=!0,eg(i)}function Rn(){if(!Hf&&en!==null){Hf=!0;var i=0,l=Be;try{var c=en;for(Be=1;i<c.length;i++){var p=c[i];do p=p(!0);while(p!==null)}en=null,As=!1}catch(v){throw en!==null&&(en=en.slice(i+1)),r1(pf,Rn),v}finally{Be=l,Hf=!1}}return null}var Wa=[],Ha=0,Os=null,Es=0,or=[],lr=0,aa=null,tn=1,rn="";function ia(i,l){Wa[Ha++]=Es,Wa[Ha++]=Os,Os=i,Es=l}function tg(i,l,c){or[lr++]=tn,or[lr++]=rn,or[lr++]=aa,aa=i;var p=tn;i=rn;var v=32-_r(p)-1;p&=~(1<<v),c+=1;var w=32-_r(l)+v;if(30<w){var k=v-v%5;w=(p&(1<<k)-1).toString(32),p>>=k,v-=k,tn=1<<32-_r(l)+v|c<<v|p,rn=w+i}else tn=1<<w|c<<v|p,rn=i}function Kf(i){i.return!==null&&(ia(i,1),tg(i,1,0))}function Vf(i){for(;i===Os;)Os=Wa[--Ha],Wa[Ha]=null,Es=Wa[--Ha],Wa[Ha]=null;for(;i===aa;)aa=or[--lr],or[lr]=null,rn=or[--lr],or[lr]=null,tn=or[--lr],or[lr]=null}var Qt=null,Jt=null,Ye=!1,Or=null;function rg(i,l){var c=fr(5,null,null,0);c.elementType="DELETED",c.stateNode=l,c.return=i,l=i.deletions,l===null?(i.deletions=[c],i.flags|=16):l.push(c)}function ng(i,l){switch(i.tag){case 5:var c=i.type;return l=l.nodeType!==1||c.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(i.stateNode=l,Qt=i,Jt=Cn(l.firstChild),!0):!1;case 6:return l=i.pendingProps===""||l.nodeType!==3?null:l,l!==null?(i.stateNode=l,Qt=i,Jt=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(c=aa!==null?{id:tn,overflow:rn}:null,i.memoizedState={dehydrated:l,treeContext:c,retryLane:1073741824},c=fr(18,null,null,0),c.stateNode=l,c.return=i,i.child=c,Qt=i,Jt=null,!0):!1;default:return!1}}function Gf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Xf(i){if(Ye){var l=Jt;if(l){var c=l;if(!ng(i,l)){if(Gf(i))throw Error(r(418));l=Cn(c.nextSibling);var p=Qt;l&&ng(i,l)?rg(p,c):(i.flags=i.flags&-4097|2,Ye=!1,Qt=i)}}else{if(Gf(i))throw Error(r(418));i.flags=i.flags&-4097|2,Ye=!1,Qt=i}}}function ag(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qt=i}function Ps(i){if(i!==Qt)return!1;if(!Ye)return ag(i),Ye=!0,!1;var l;if((l=i.tag!==3)&&!(l=i.tag!==5)&&(l=i.type,l=l!=="head"&&l!=="body"&&!Bf(i.type,i.memoizedProps)),l&&(l=Jt)){if(Gf(i))throw ig(),Error(r(418));for(;l;)rg(i,l),l=Cn(l.nextSibling)}if(ag(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,l=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(l===0){Jt=Cn(i.nextSibling);break e}l--}else c!=="$"&&c!=="$!"&&c!=="$?"||l++}i=i.nextSibling}Jt=null}}else Jt=Qt?Cn(i.stateNode.nextSibling):null;return!0}function ig(){for(var i=Jt;i;)i=Cn(i.nextSibling)}function Ka(){Jt=Qt=null,Ye=!1}function Yf(i){Or===null?Or=[i]:Or.push(i)}var JE=N.ReactCurrentBatchConfig;function wo(i,l,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(r(309));var p=c.stateNode}if(!p)throw Error(r(147,i));var v=p,w=""+i;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===w?l.ref:(l=function(k){var C=v.refs;k===null?delete C[w]:C[w]=k},l._stringRef=w,l)}if(typeof i!="string")throw Error(r(284));if(!c._owner)throw Error(r(290,i))}return i}function ks(i,l){throw i=Object.prototype.toString.call(l),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":i))}function og(i){var l=i._init;return l(i._payload)}function lg(i){function l(K,F){if(i){var G=K.deletions;G===null?(K.deletions=[F],K.flags|=16):G.push(F)}}function c(K,F){if(!i)return null;for(;F!==null;)l(K,F),F=F.sibling;return null}function p(K,F){for(K=new Map;F!==null;)F.key!==null?K.set(F.key,F):K.set(F.index,F),F=F.sibling;return K}function v(K,F){return K=Un(K,F),K.index=0,K.sibling=null,K}function w(K,F,G){return K.index=G,i?(G=K.alternate,G!==null?(G=G.index,G<F?(K.flags|=2,F):G):(K.flags|=2,F)):(K.flags|=1048576,F)}function k(K){return i&&K.alternate===null&&(K.flags|=2),K}function C(K,F,G,le){return F===null||F.tag!==6?(F=qd(G,K.mode,le),F.return=K,F):(F=v(F,G),F.return=K,F)}function L(K,F,G,le){var ve=G.type;return ve===T?ne(K,F,G.props.children,le,G.key):F!==null&&(F.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===W&&og(ve)===F.type)?(le=v(F,G.props),le.ref=wo(K,F,G),le.return=K,le):(le=Zs(G.type,G.key,G.props,null,K.mode,le),le.ref=wo(K,F,G),le.return=K,le)}function Q(K,F,G,le){return F===null||F.tag!==4||F.stateNode.containerInfo!==G.containerInfo||F.stateNode.implementation!==G.implementation?(F=zd(G,K.mode,le),F.return=K,F):(F=v(F,G.children||[]),F.return=K,F)}function ne(K,F,G,le,ve){return F===null||F.tag!==7?(F=pa(G,K.mode,le,ve),F.return=K,F):(F=v(F,G),F.return=K,F)}function ie(K,F,G){if(typeof F=="string"&&F!==""||typeof F=="number")return F=qd(""+F,K.mode,G),F.return=K,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case _:return G=Zs(F.type,F.key,F.props,null,K.mode,G),G.ref=wo(K,null,F),G.return=K,G;case P:return F=zd(F,K.mode,G),F.return=K,F;case W:var le=F._init;return ie(K,le(F._payload),G)}if(Lr(F)||ee(F))return F=pa(F,K.mode,G,null),F.return=K,F;ks(K,F)}return null}function re(K,F,G,le){var ve=F!==null?F.key:null;if(typeof G=="string"&&G!==""||typeof G=="number")return ve!==null?null:C(K,F,""+G,le);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case _:return G.key===ve?L(K,F,G,le):null;case P:return G.key===ve?Q(K,F,G,le):null;case W:return ve=G._init,re(K,F,ve(G._payload),le)}if(Lr(G)||ee(G))return ve!==null?null:ne(K,F,G,le,null);ks(K,G)}return null}function fe(K,F,G,le,ve){if(typeof le=="string"&&le!==""||typeof le=="number")return K=K.get(G)||null,C(F,K,""+le,ve);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case _:return K=K.get(le.key===null?G:le.key)||null,L(F,K,le,ve);case P:return K=K.get(le.key===null?G:le.key)||null,Q(F,K,le,ve);case W:var be=le._init;return fe(K,F,G,be(le._payload),ve)}if(Lr(le)||ee(le))return K=K.get(G)||null,ne(F,K,le,ve,null);ks(F,le)}return null}function he(K,F,G,le){for(var ve=null,be=null,we=F,je=F=0,xt=null;we!==null&&je<G.length;je++){we.index>je?(xt=we,we=null):xt=we.sibling;var Re=re(K,we,G[je],le);if(Re===null){we===null&&(we=xt);break}i&&we&&Re.alternate===null&&l(K,we),F=w(Re,F,je),be===null?ve=Re:be.sibling=Re,be=Re,we=xt}if(je===G.length)return c(K,we),Ye&&ia(K,je),ve;if(we===null){for(;je<G.length;je++)we=ie(K,G[je],le),we!==null&&(F=w(we,F,je),be===null?ve=we:be.sibling=we,be=we);return Ye&&ia(K,je),ve}for(we=p(K,we);je<G.length;je++)xt=fe(we,K,je,G[je],le),xt!==null&&(i&&xt.alternate!==null&&we.delete(xt.key===null?je:xt.key),F=w(xt,F,je),be===null?ve=xt:be.sibling=xt,be=xt);return i&&we.forEach(function(Wn){return l(K,Wn)}),Ye&&ia(K,je),ve}function ye(K,F,G,le){var ve=ee(G);if(typeof ve!="function")throw Error(r(150));if(G=ve.call(G),G==null)throw Error(r(151));for(var be=ve=null,we=F,je=F=0,xt=null,Re=G.next();we!==null&&!Re.done;je++,Re=G.next()){we.index>je?(xt=we,we=null):xt=we.sibling;var Wn=re(K,we,Re.value,le);if(Wn===null){we===null&&(we=xt);break}i&&we&&Wn.alternate===null&&l(K,we),F=w(Wn,F,je),be===null?ve=Wn:be.sibling=Wn,be=Wn,we=xt}if(Re.done)return c(K,we),Ye&&ia(K,je),ve;if(we===null){for(;!Re.done;je++,Re=G.next())Re=ie(K,Re.value,le),Re!==null&&(F=w(Re,F,je),be===null?ve=Re:be.sibling=Re,be=Re);return Ye&&ia(K,je),ve}for(we=p(K,we);!Re.done;je++,Re=G.next())Re=fe(we,K,je,Re.value,le),Re!==null&&(i&&Re.alternate!==null&&we.delete(Re.key===null?je:Re.key),F=w(Re,F,je),be===null?ve=Re:be.sibling=Re,be=Re);return i&&we.forEach(function(TP){return l(K,TP)}),Ye&&ia(K,je),ve}function ot(K,F,G,le){if(typeof G=="object"&&G!==null&&G.type===T&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case _:e:{for(var ve=G.key,be=F;be!==null;){if(be.key===ve){if(ve=G.type,ve===T){if(be.tag===7){c(K,be.sibling),F=v(be,G.props.children),F.return=K,K=F;break e}}else if(be.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===W&&og(ve)===be.type){c(K,be.sibling),F=v(be,G.props),F.ref=wo(K,be,G),F.return=K,K=F;break e}c(K,be);break}else l(K,be);be=be.sibling}G.type===T?(F=pa(G.props.children,K.mode,le,G.key),F.return=K,K=F):(le=Zs(G.type,G.key,G.props,null,K.mode,le),le.ref=wo(K,F,G),le.return=K,K=le)}return k(K);case P:e:{for(be=G.key;F!==null;){if(F.key===be)if(F.tag===4&&F.stateNode.containerInfo===G.containerInfo&&F.stateNode.implementation===G.implementation){c(K,F.sibling),F=v(F,G.children||[]),F.return=K,K=F;break e}else{c(K,F);break}else l(K,F);F=F.sibling}F=zd(G,K.mode,le),F.return=K,K=F}return k(K);case W:return be=G._init,ot(K,F,be(G._payload),le)}if(Lr(G))return he(K,F,G,le);if(ee(G))return ye(K,F,G,le);ks(K,G)}return typeof G=="string"&&G!==""||typeof G=="number"?(G=""+G,F!==null&&F.tag===6?(c(K,F.sibling),F=v(F,G),F.return=K,K=F):(c(K,F),F=qd(G,K.mode,le),F.return=K,K=F),k(K)):c(K,F)}return ot}var Va=lg(!0),sg=lg(!1),Ns=Dn(null),Ts=null,Ga=null,Qf=null;function Jf(){Qf=Ga=Ts=null}function Zf(i){var l=Ns.current;Ge(Ns),i._currentValue=l}function ed(i,l,c){for(;i!==null;){var p=i.alternate;if((i.childLanes&l)!==l?(i.childLanes|=l,p!==null&&(p.childLanes|=l)):p!==null&&(p.childLanes&l)!==l&&(p.childLanes|=l),i===c)break;i=i.return}}function Xa(i,l){Ts=i,Qf=Ga=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&l)!==0&&(zt=!0),i.firstContext=null)}function sr(i){var l=i._currentValue;if(Qf!==i)if(i={context:i,memoizedValue:l,next:null},Ga===null){if(Ts===null)throw Error(r(308));Ga=i,Ts.dependencies={lanes:0,firstContext:i}}else Ga=Ga.next=i;return l}var oa=null;function td(i){oa===null?oa=[i]:oa.push(i)}function ug(i,l,c,p){var v=l.interleaved;return v===null?(c.next=c,td(l)):(c.next=v.next,v.next=c),l.interleaved=c,nn(i,p)}function nn(i,l){i.lanes|=l;var c=i.alternate;for(c!==null&&(c.lanes|=l),c=i,i=i.return;i!==null;)i.childLanes|=l,c=i.alternate,c!==null&&(c.childLanes|=l),c=i,i=i.return;return c.tag===3?c.stateNode:null}var In=!1;function rd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(i,l){i=i.updateQueue,l.updateQueue===i&&(l.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function an(i,l){return{eventTime:i,lane:l,tag:0,payload:null,callback:null,next:null}}function $n(i,l,c){var p=i.updateQueue;if(p===null)return null;if(p=p.shared,(Me&2)!==0){var v=p.pending;return v===null?l.next=l:(l.next=v.next,v.next=l),p.pending=l,nn(i,c)}return v=p.interleaved,v===null?(l.next=l,td(p)):(l.next=v.next,v.next=l),p.interleaved=l,nn(i,c)}function Cs(i,l,c){if(l=l.updateQueue,l!==null&&(l=l.shared,(c&4194240)!==0)){var p=l.lanes;p&=i.pendingLanes,c|=p,l.lanes=c,yf(i,c)}}function fg(i,l){var c=i.updateQueue,p=i.alternate;if(p!==null&&(p=p.updateQueue,c===p)){var v=null,w=null;if(c=c.firstBaseUpdate,c!==null){do{var k={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};w===null?v=w=k:w=w.next=k,c=c.next}while(c!==null);w===null?v=w=l:w=w.next=l}else v=w=l;c={baseState:p.baseState,firstBaseUpdate:v,lastBaseUpdate:w,shared:p.shared,effects:p.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=l:i.next=l,c.lastBaseUpdate=l}function Ds(i,l,c,p){var v=i.updateQueue;In=!1;var w=v.firstBaseUpdate,k=v.lastBaseUpdate,C=v.shared.pending;if(C!==null){v.shared.pending=null;var L=C,Q=L.next;L.next=null,k===null?w=Q:k.next=Q,k=L;var ne=i.alternate;ne!==null&&(ne=ne.updateQueue,C=ne.lastBaseUpdate,C!==k&&(C===null?ne.firstBaseUpdate=Q:C.next=Q,ne.lastBaseUpdate=L))}if(w!==null){var ie=v.baseState;k=0,ne=Q=L=null,C=w;do{var re=C.lane,fe=C.eventTime;if((p&re)===re){ne!==null&&(ne=ne.next={eventTime:fe,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var he=i,ye=C;switch(re=l,fe=c,ye.tag){case 1:if(he=ye.payload,typeof he=="function"){ie=he.call(fe,ie,re);break e}ie=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=ye.payload,re=typeof he=="function"?he.call(fe,ie,re):he,re==null)break e;ie=J({},ie,re);break e;case 2:In=!0}}C.callback!==null&&C.lane!==0&&(i.flags|=64,re=v.effects,re===null?v.effects=[C]:re.push(C))}else fe={eventTime:fe,lane:re,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ne===null?(Q=ne=fe,L=ie):ne=ne.next=fe,k|=re;if(C=C.next,C===null){if(C=v.shared.pending,C===null)break;re=C,C=re.next,re.next=null,v.lastBaseUpdate=re,v.shared.pending=null}}while(!0);if(ne===null&&(L=ie),v.baseState=L,v.firstBaseUpdate=Q,v.lastBaseUpdate=ne,l=v.shared.interleaved,l!==null){v=l;do k|=v.lane,v=v.next;while(v!==l)}else w===null&&(v.shared.lanes=0);ua|=k,i.lanes=k,i.memoizedState=ie}}function dg(i,l,c){if(i=l.effects,l.effects=null,i!==null)for(l=0;l<i.length;l++){var p=i[l],v=p.callback;if(v!==null){if(p.callback=null,p=c,typeof v!="function")throw Error(r(191,v));v.call(p)}}}var So={},qr=Dn(So),jo=Dn(So),_o=Dn(So);function la(i){if(i===So)throw Error(r(174));return i}function nd(i,l){switch(He(_o,l),He(jo,i),He(qr,So),i=l.nodeType,i){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:nf(null,"");break;default:i=i===8?l.parentNode:l,l=i.namespaceURI||null,i=i.tagName,l=nf(l,i)}Ge(qr),He(qr,l)}function Ya(){Ge(qr),Ge(jo),Ge(_o)}function pg(i){la(_o.current);var l=la(qr.current),c=nf(l,i.type);l!==c&&(He(jo,i),He(qr,c))}function ad(i){jo.current===i&&(Ge(qr),Ge(jo))}var Je=Dn(0);function Ms(i){for(var l=i;l!==null;){if(l.tag===13){var c=l.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var id=[];function od(){for(var i=0;i<id.length;i++)id[i]._workInProgressVersionPrimary=null;id.length=0}var Rs=N.ReactCurrentDispatcher,ld=N.ReactCurrentBatchConfig,sa=0,Ze=null,ft=null,vt=null,Is=!1,Ao=!1,Oo=0,ZE=0;function Et(){throw Error(r(321))}function sd(i,l){if(l===null)return!1;for(var c=0;c<l.length&&c<i.length;c++)if(!Ar(i[c],l[c]))return!1;return!0}function ud(i,l,c,p,v,w){if(sa=w,Ze=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Rs.current=i===null||i.memoizedState===null?nP:aP,i=c(p,v),Ao){w=0;do{if(Ao=!1,Oo=0,25<=w)throw Error(r(301));w+=1,vt=ft=null,l.updateQueue=null,Rs.current=iP,i=c(p,v)}while(Ao)}if(Rs.current=Fs,l=ft!==null&&ft.next!==null,sa=0,vt=ft=Ze=null,Is=!1,l)throw Error(r(300));return i}function cd(){var i=Oo!==0;return Oo=0,i}function zr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ze.memoizedState=vt=i:vt=vt.next=i,vt}function ur(){if(ft===null){var i=Ze.alternate;i=i!==null?i.memoizedState:null}else i=ft.next;var l=vt===null?Ze.memoizedState:vt.next;if(l!==null)vt=l,ft=i;else{if(i===null)throw Error(r(310));ft=i,i={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?Ze.memoizedState=vt=i:vt=vt.next=i}return vt}function Eo(i,l){return typeof l=="function"?l(i):l}function fd(i){var l=ur(),c=l.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=i;var p=ft,v=p.baseQueue,w=c.pending;if(w!==null){if(v!==null){var k=v.next;v.next=w.next,w.next=k}p.baseQueue=v=w,c.pending=null}if(v!==null){w=v.next,p=p.baseState;var C=k=null,L=null,Q=w;do{var ne=Q.lane;if((sa&ne)===ne)L!==null&&(L=L.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),p=Q.hasEagerState?Q.eagerState:i(p,Q.action);else{var ie={lane:ne,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};L===null?(C=L=ie,k=p):L=L.next=ie,Ze.lanes|=ne,ua|=ne}Q=Q.next}while(Q!==null&&Q!==w);L===null?k=p:L.next=C,Ar(p,l.memoizedState)||(zt=!0),l.memoizedState=p,l.baseState=k,l.baseQueue=L,c.lastRenderedState=p}if(i=c.interleaved,i!==null){v=i;do w=v.lane,Ze.lanes|=w,ua|=w,v=v.next;while(v!==i)}else v===null&&(c.lanes=0);return[l.memoizedState,c.dispatch]}function dd(i){var l=ur(),c=l.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=i;var p=c.dispatch,v=c.pending,w=l.memoizedState;if(v!==null){c.pending=null;var k=v=v.next;do w=i(w,k.action),k=k.next;while(k!==v);Ar(w,l.memoizedState)||(zt=!0),l.memoizedState=w,l.baseQueue===null&&(l.baseState=w),c.lastRenderedState=w}return[w,p]}function hg(){}function mg(i,l){var c=Ze,p=ur(),v=l(),w=!Ar(p.memoizedState,v);if(w&&(p.memoizedState=v,zt=!0),p=p.queue,pd(gg.bind(null,c,p,i),[i]),p.getSnapshot!==l||w||vt!==null&&vt.memoizedState.tag&1){if(c.flags|=2048,Po(9,vg.bind(null,c,p,v,l),void 0,null),gt===null)throw Error(r(349));(sa&30)!==0||yg(c,l,v)}return v}function yg(i,l,c){i.flags|=16384,i={getSnapshot:l,value:c},l=Ze.updateQueue,l===null?(l={lastEffect:null,stores:null},Ze.updateQueue=l,l.stores=[i]):(c=l.stores,c===null?l.stores=[i]:c.push(i))}function vg(i,l,c,p){l.value=c,l.getSnapshot=p,xg(l)&&bg(i)}function gg(i,l,c){return c(function(){xg(l)&&bg(i)})}function xg(i){var l=i.getSnapshot;i=i.value;try{var c=l();return!Ar(i,c)}catch{return!0}}function bg(i){var l=nn(i,1);l!==null&&Nr(l,i,1,-1)}function wg(i){var l=zr();return typeof i=="function"&&(i=i()),l.memoizedState=l.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:i},l.queue=i,i=i.dispatch=rP.bind(null,Ze,i),[l.memoizedState,i]}function Po(i,l,c,p){return i={tag:i,create:l,destroy:c,deps:p,next:null},l=Ze.updateQueue,l===null?(l={lastEffect:null,stores:null},Ze.updateQueue=l,l.lastEffect=i.next=i):(c=l.lastEffect,c===null?l.lastEffect=i.next=i:(p=c.next,c.next=i,i.next=p,l.lastEffect=i)),i}function Sg(){return ur().memoizedState}function $s(i,l,c,p){var v=zr();Ze.flags|=i,v.memoizedState=Po(1|l,c,void 0,p===void 0?null:p)}function Ls(i,l,c,p){var v=ur();p=p===void 0?null:p;var w=void 0;if(ft!==null){var k=ft.memoizedState;if(w=k.destroy,p!==null&&sd(p,k.deps)){v.memoizedState=Po(l,c,w,p);return}}Ze.flags|=i,v.memoizedState=Po(1|l,c,w,p)}function jg(i,l){return $s(8390656,8,i,l)}function pd(i,l){return Ls(2048,8,i,l)}function _g(i,l){return Ls(4,2,i,l)}function Ag(i,l){return Ls(4,4,i,l)}function Og(i,l){if(typeof l=="function")return i=i(),l(i),function(){l(null)};if(l!=null)return i=i(),l.current=i,function(){l.current=null}}function Eg(i,l,c){return c=c!=null?c.concat([i]):null,Ls(4,4,Og.bind(null,l,i),c)}function hd(){}function Pg(i,l){var c=ur();l=l===void 0?null:l;var p=c.memoizedState;return p!==null&&l!==null&&sd(l,p[1])?p[0]:(c.memoizedState=[i,l],i)}function kg(i,l){var c=ur();l=l===void 0?null:l;var p=c.memoizedState;return p!==null&&l!==null&&sd(l,p[1])?p[0]:(i=i(),c.memoizedState=[i,l],i)}function Ng(i,l,c){return(sa&21)===0?(i.baseState&&(i.baseState=!1,zt=!0),i.memoizedState=c):(Ar(c,l)||(c=o1(),Ze.lanes|=c,ua|=c,i.baseState=!0),l)}function eP(i,l){var c=Be;Be=c!==0&&4>c?c:4,i(!0);var p=ld.transition;ld.transition={};try{i(!1),l()}finally{Be=c,ld.transition=p}}function Tg(){return ur().memoizedState}function tP(i,l,c){var p=qn(i);if(c={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null},Cg(i))Dg(l,c);else if(c=ug(i,l,c,p),c!==null){var v=Rt();Nr(c,i,p,v),Mg(c,l,p)}}function rP(i,l,c){var p=qn(i),v={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null};if(Cg(i))Dg(l,v);else{var w=i.alternate;if(i.lanes===0&&(w===null||w.lanes===0)&&(w=l.lastRenderedReducer,w!==null))try{var k=l.lastRenderedState,C=w(k,c);if(v.hasEagerState=!0,v.eagerState=C,Ar(C,k)){var L=l.interleaved;L===null?(v.next=v,td(l)):(v.next=L.next,L.next=v),l.interleaved=v;return}}catch{}finally{}c=ug(i,l,v,p),c!==null&&(v=Rt(),Nr(c,i,p,v),Mg(c,l,p))}}function Cg(i){var l=i.alternate;return i===Ze||l!==null&&l===Ze}function Dg(i,l){Ao=Is=!0;var c=i.pending;c===null?l.next=l:(l.next=c.next,c.next=l),i.pending=l}function Mg(i,l,c){if((c&4194240)!==0){var p=l.lanes;p&=i.pendingLanes,c|=p,l.lanes=c,yf(i,c)}}var Fs={readContext:sr,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},nP={readContext:sr,useCallback:function(i,l){return zr().memoizedState=[i,l===void 0?null:l],i},useContext:sr,useEffect:jg,useImperativeHandle:function(i,l,c){return c=c!=null?c.concat([i]):null,$s(4194308,4,Og.bind(null,l,i),c)},useLayoutEffect:function(i,l){return $s(4194308,4,i,l)},useInsertionEffect:function(i,l){return $s(4,2,i,l)},useMemo:function(i,l){var c=zr();return l=l===void 0?null:l,i=i(),c.memoizedState=[i,l],i},useReducer:function(i,l,c){var p=zr();return l=c!==void 0?c(l):l,p.memoizedState=p.baseState=l,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:l},p.queue=i,i=i.dispatch=tP.bind(null,Ze,i),[p.memoizedState,i]},useRef:function(i){var l=zr();return i={current:i},l.memoizedState=i},useState:wg,useDebugValue:hd,useDeferredValue:function(i){return zr().memoizedState=i},useTransition:function(){var i=wg(!1),l=i[0];return i=eP.bind(null,i[1]),zr().memoizedState=i,[l,i]},useMutableSource:function(){},useSyncExternalStore:function(i,l,c){var p=Ze,v=zr();if(Ye){if(c===void 0)throw Error(r(407));c=c()}else{if(c=l(),gt===null)throw Error(r(349));(sa&30)!==0||yg(p,l,c)}v.memoizedState=c;var w={value:c,getSnapshot:l};return v.queue=w,jg(gg.bind(null,p,w,i),[i]),p.flags|=2048,Po(9,vg.bind(null,p,w,c,l),void 0,null),c},useId:function(){var i=zr(),l=gt.identifierPrefix;if(Ye){var c=rn,p=tn;c=(p&~(1<<32-_r(p)-1)).toString(32)+c,l=":"+l+"R"+c,c=Oo++,0<c&&(l+="H"+c.toString(32)),l+=":"}else c=ZE++,l=":"+l+"r"+c.toString(32)+":";return i.memoizedState=l},unstable_isNewReconciler:!1},aP={readContext:sr,useCallback:Pg,useContext:sr,useEffect:pd,useImperativeHandle:Eg,useInsertionEffect:_g,useLayoutEffect:Ag,useMemo:kg,useReducer:fd,useRef:Sg,useState:function(){return fd(Eo)},useDebugValue:hd,useDeferredValue:function(i){var l=ur();return Ng(l,ft.memoizedState,i)},useTransition:function(){var i=fd(Eo)[0],l=ur().memoizedState;return[i,l]},useMutableSource:hg,useSyncExternalStore:mg,useId:Tg,unstable_isNewReconciler:!1},iP={readContext:sr,useCallback:Pg,useContext:sr,useEffect:pd,useImperativeHandle:Eg,useInsertionEffect:_g,useLayoutEffect:Ag,useMemo:kg,useReducer:dd,useRef:Sg,useState:function(){return dd(Eo)},useDebugValue:hd,useDeferredValue:function(i){var l=ur();return ft===null?l.memoizedState=i:Ng(l,ft.memoizedState,i)},useTransition:function(){var i=dd(Eo)[0],l=ur().memoizedState;return[i,l]},useMutableSource:hg,useSyncExternalStore:mg,useId:Tg,unstable_isNewReconciler:!1};function Er(i,l){if(i&&i.defaultProps){l=J({},l),i=i.defaultProps;for(var c in i)l[c]===void 0&&(l[c]=i[c]);return l}return l}function md(i,l,c,p){l=i.memoizedState,c=c(p,l),c=c==null?l:J({},l,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var Bs={isMounted:function(i){return(i=i._reactInternals)?ta(i)===i:!1},enqueueSetState:function(i,l,c){i=i._reactInternals;var p=Rt(),v=qn(i),w=an(p,v);w.payload=l,c!=null&&(w.callback=c),l=$n(i,w,v),l!==null&&(Nr(l,i,v,p),Cs(l,i,v))},enqueueReplaceState:function(i,l,c){i=i._reactInternals;var p=Rt(),v=qn(i),w=an(p,v);w.tag=1,w.payload=l,c!=null&&(w.callback=c),l=$n(i,w,v),l!==null&&(Nr(l,i,v,p),Cs(l,i,v))},enqueueForceUpdate:function(i,l){i=i._reactInternals;var c=Rt(),p=qn(i),v=an(c,p);v.tag=2,l!=null&&(v.callback=l),l=$n(i,v,p),l!==null&&(Nr(l,i,p,c),Cs(l,i,p))}};function Rg(i,l,c,p,v,w,k){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(p,w,k):l.prototype&&l.prototype.isPureReactComponent?!ho(c,p)||!ho(v,w):!0}function Ig(i,l,c){var p=!1,v=Mn,w=l.contextType;return typeof w=="object"&&w!==null?w=sr(w):(v=qt(l)?na:Ot.current,p=l.contextTypes,w=(p=p!=null)?Ua(i,v):Mn),l=new l(c,w),i.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Bs,i.stateNode=l,l._reactInternals=i,p&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=w),l}function $g(i,l,c,p){i=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(c,p),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(c,p),l.state!==i&&Bs.enqueueReplaceState(l,l.state,null)}function yd(i,l,c,p){var v=i.stateNode;v.props=c,v.state=i.memoizedState,v.refs={},rd(i);var w=l.contextType;typeof w=="object"&&w!==null?v.context=sr(w):(w=qt(l)?na:Ot.current,v.context=Ua(i,w)),v.state=i.memoizedState,w=l.getDerivedStateFromProps,typeof w=="function"&&(md(i,l,w,c),v.state=i.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(l=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),l!==v.state&&Bs.enqueueReplaceState(v,v.state,null),Ds(i,c,v,p),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function Qa(i,l){try{var c="",p=l;do c+=xe(p),p=p.return;while(p);var v=c}catch(w){v=`
Error generating stack: `+w.message+`
`+w.stack}return{value:i,source:l,stack:v,digest:null}}function vd(i,l,c){return{value:i,source:null,stack:c??null,digest:l??null}}function gd(i,l){try{console.error(l.value)}catch(c){setTimeout(function(){throw c})}}var oP=typeof WeakMap=="function"?WeakMap:Map;function Lg(i,l,c){c=an(-1,c),c.tag=3,c.payload={element:null};var p=l.value;return c.callback=function(){Vs||(Vs=!0,Dd=p),gd(i,l)},c}function Fg(i,l,c){c=an(-1,c),c.tag=3;var p=i.type.getDerivedStateFromError;if(typeof p=="function"){var v=l.value;c.payload=function(){return p(v)},c.callback=function(){gd(i,l)}}var w=i.stateNode;return w!==null&&typeof w.componentDidCatch=="function"&&(c.callback=function(){gd(i,l),typeof p!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})}),c}function Bg(i,l,c){var p=i.pingCache;if(p===null){p=i.pingCache=new oP;var v=new Set;p.set(l,v)}else v=p.get(l),v===void 0&&(v=new Set,p.set(l,v));v.has(c)||(v.add(c),i=bP.bind(null,i,l,c),l.then(i,i))}function qg(i){do{var l;if((l=i.tag===13)&&(l=i.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return i;i=i.return}while(i!==null);return null}function zg(i,l,c,p,v){return(i.mode&1)===0?(i===l?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(l=an(-1,1),l.tag=2,$n(c,l,1))),c.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var lP=N.ReactCurrentOwner,zt=!1;function Mt(i,l,c,p){l.child=i===null?sg(l,null,c,p):Va(l,i.child,c,p)}function Ug(i,l,c,p,v){c=c.render;var w=l.ref;return Xa(l,v),p=ud(i,l,c,p,w,v),c=cd(),i!==null&&!zt?(l.updateQueue=i.updateQueue,l.flags&=-2053,i.lanes&=~v,on(i,l,v)):(Ye&&c&&Kf(l),l.flags|=1,Mt(i,l,p,v),l.child)}function Wg(i,l,c,p,v){if(i===null){var w=c.type;return typeof w=="function"&&!Bd(w)&&w.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(l.tag=15,l.type=w,Hg(i,l,w,p,v)):(i=Zs(c.type,null,p,l,l.mode,v),i.ref=l.ref,i.return=l,l.child=i)}if(w=i.child,(i.lanes&v)===0){var k=w.memoizedProps;if(c=c.compare,c=c!==null?c:ho,c(k,p)&&i.ref===l.ref)return on(i,l,v)}return l.flags|=1,i=Un(w,p),i.ref=l.ref,i.return=l,l.child=i}function Hg(i,l,c,p,v){if(i!==null){var w=i.memoizedProps;if(ho(w,p)&&i.ref===l.ref)if(zt=!1,l.pendingProps=p=w,(i.lanes&v)!==0)(i.flags&131072)!==0&&(zt=!0);else return l.lanes=i.lanes,on(i,l,v)}return xd(i,l,c,p,v)}function Kg(i,l,c){var p=l.pendingProps,v=p.children,w=i!==null?i.memoizedState:null;if(p.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Za,Zt),Zt|=c;else{if((c&1073741824)===0)return i=w!==null?w.baseLanes|c:c,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:i,cachePool:null,transitions:null},l.updateQueue=null,He(Za,Zt),Zt|=i,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=w!==null?w.baseLanes:c,He(Za,Zt),Zt|=p}else w!==null?(p=w.baseLanes|c,l.memoizedState=null):p=c,He(Za,Zt),Zt|=p;return Mt(i,l,v,c),l.child}function Vg(i,l){var c=l.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(l.flags|=512,l.flags|=2097152)}function xd(i,l,c,p,v){var w=qt(c)?na:Ot.current;return w=Ua(l,w),Xa(l,v),c=ud(i,l,c,p,w,v),p=cd(),i!==null&&!zt?(l.updateQueue=i.updateQueue,l.flags&=-2053,i.lanes&=~v,on(i,l,v)):(Ye&&p&&Kf(l),l.flags|=1,Mt(i,l,c,v),l.child)}function Gg(i,l,c,p,v){if(qt(c)){var w=!0;_s(l)}else w=!1;if(Xa(l,v),l.stateNode===null)zs(i,l),Ig(l,c,p),yd(l,c,p,v),p=!0;else if(i===null){var k=l.stateNode,C=l.memoizedProps;k.props=C;var L=k.context,Q=c.contextType;typeof Q=="object"&&Q!==null?Q=sr(Q):(Q=qt(c)?na:Ot.current,Q=Ua(l,Q));var ne=c.getDerivedStateFromProps,ie=typeof ne=="function"||typeof k.getSnapshotBeforeUpdate=="function";ie||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(C!==p||L!==Q)&&$g(l,k,p,Q),In=!1;var re=l.memoizedState;k.state=re,Ds(l,p,k,v),L=l.memoizedState,C!==p||re!==L||Bt.current||In?(typeof ne=="function"&&(md(l,c,ne,p),L=l.memoizedState),(C=In||Rg(l,c,C,p,re,L,Q))?(ie||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(l.flags|=4194308)):(typeof k.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=p,l.memoizedState=L),k.props=p,k.state=L,k.context=Q,p=C):(typeof k.componentDidMount=="function"&&(l.flags|=4194308),p=!1)}else{k=l.stateNode,cg(i,l),C=l.memoizedProps,Q=l.type===l.elementType?C:Er(l.type,C),k.props=Q,ie=l.pendingProps,re=k.context,L=c.contextType,typeof L=="object"&&L!==null?L=sr(L):(L=qt(c)?na:Ot.current,L=Ua(l,L));var fe=c.getDerivedStateFromProps;(ne=typeof fe=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(C!==ie||re!==L)&&$g(l,k,p,L),In=!1,re=l.memoizedState,k.state=re,Ds(l,p,k,v);var he=l.memoizedState;C!==ie||re!==he||Bt.current||In?(typeof fe=="function"&&(md(l,c,fe,p),he=l.memoizedState),(Q=In||Rg(l,c,Q,p,re,he,L)||!1)?(ne||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(p,he,L),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(p,he,L)),typeof k.componentDidUpdate=="function"&&(l.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof k.componentDidUpdate!="function"||C===i.memoizedProps&&re===i.memoizedState||(l.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&re===i.memoizedState||(l.flags|=1024),l.memoizedProps=p,l.memoizedState=he),k.props=p,k.state=he,k.context=L,p=Q):(typeof k.componentDidUpdate!="function"||C===i.memoizedProps&&re===i.memoizedState||(l.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&re===i.memoizedState||(l.flags|=1024),p=!1)}return bd(i,l,c,p,w,v)}function bd(i,l,c,p,v,w){Vg(i,l);var k=(l.flags&128)!==0;if(!p&&!k)return v&&Z1(l,c,!1),on(i,l,w);p=l.stateNode,lP.current=l;var C=k&&typeof c.getDerivedStateFromError!="function"?null:p.render();return l.flags|=1,i!==null&&k?(l.child=Va(l,i.child,null,w),l.child=Va(l,null,C,w)):Mt(i,l,C,w),l.memoizedState=p.state,v&&Z1(l,c,!0),l.child}function Xg(i){var l=i.stateNode;l.pendingContext?Q1(i,l.pendingContext,l.pendingContext!==l.context):l.context&&Q1(i,l.context,!1),nd(i,l.containerInfo)}function Yg(i,l,c,p,v){return Ka(),Yf(v),l.flags|=256,Mt(i,l,c,p),l.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Sd(i){return{baseLanes:i,cachePool:null,transitions:null}}function Qg(i,l,c){var p=l.pendingProps,v=Je.current,w=!1,k=(l.flags&128)!==0,C;if((C=k)||(C=i!==null&&i.memoizedState===null?!1:(v&2)!==0),C?(w=!0,l.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),He(Je,v&1),i===null)return Xf(l),i=l.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((l.mode&1)===0?l.lanes=1:i.data==="$!"?l.lanes=8:l.lanes=1073741824,null):(k=p.children,i=p.fallback,w?(p=l.mode,w=l.child,k={mode:"hidden",children:k},(p&1)===0&&w!==null?(w.childLanes=0,w.pendingProps=k):w=eu(k,p,0,null),i=pa(i,p,c,null),w.return=l,i.return=l,w.sibling=i,l.child=w,l.child.memoizedState=Sd(c),l.memoizedState=wd,i):jd(l,k));if(v=i.memoizedState,v!==null&&(C=v.dehydrated,C!==null))return sP(i,l,k,p,C,v,c);if(w){w=p.fallback,k=l.mode,v=i.child,C=v.sibling;var L={mode:"hidden",children:p.children};return(k&1)===0&&l.child!==v?(p=l.child,p.childLanes=0,p.pendingProps=L,l.deletions=null):(p=Un(v,L),p.subtreeFlags=v.subtreeFlags&14680064),C!==null?w=Un(C,w):(w=pa(w,k,c,null),w.flags|=2),w.return=l,p.return=l,p.sibling=w,l.child=p,p=w,w=l.child,k=i.child.memoizedState,k=k===null?Sd(c):{baseLanes:k.baseLanes|c,cachePool:null,transitions:k.transitions},w.memoizedState=k,w.childLanes=i.childLanes&~c,l.memoizedState=wd,p}return w=i.child,i=w.sibling,p=Un(w,{mode:"visible",children:p.children}),(l.mode&1)===0&&(p.lanes=c),p.return=l,p.sibling=null,i!==null&&(c=l.deletions,c===null?(l.deletions=[i],l.flags|=16):c.push(i)),l.child=p,l.memoizedState=null,p}function jd(i,l){return l=eu({mode:"visible",children:l},i.mode,0,null),l.return=i,i.child=l}function qs(i,l,c,p){return p!==null&&Yf(p),Va(l,i.child,null,c),i=jd(l,l.pendingProps.children),i.flags|=2,l.memoizedState=null,i}function sP(i,l,c,p,v,w,k){if(c)return l.flags&256?(l.flags&=-257,p=vd(Error(r(422))),qs(i,l,k,p)):l.memoizedState!==null?(l.child=i.child,l.flags|=128,null):(w=p.fallback,v=l.mode,p=eu({mode:"visible",children:p.children},v,0,null),w=pa(w,v,k,null),w.flags|=2,p.return=l,w.return=l,p.sibling=w,l.child=p,(l.mode&1)!==0&&Va(l,i.child,null,k),l.child.memoizedState=Sd(k),l.memoizedState=wd,w);if((l.mode&1)===0)return qs(i,l,k,null);if(v.data==="$!"){if(p=v.nextSibling&&v.nextSibling.dataset,p)var C=p.dgst;return p=C,w=Error(r(419)),p=vd(w,p,void 0),qs(i,l,k,p)}if(C=(k&i.childLanes)!==0,zt||C){if(p=gt,p!==null){switch(k&-k){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(p.suspendedLanes|k))!==0?0:v,v!==0&&v!==w.retryLane&&(w.retryLane=v,nn(i,v),Nr(p,i,v,-1))}return Fd(),p=vd(Error(r(421))),qs(i,l,k,p)}return v.data==="$?"?(l.flags|=128,l.child=i.child,l=wP.bind(null,i),v._reactRetry=l,null):(i=w.treeContext,Jt=Cn(v.nextSibling),Qt=l,Ye=!0,Or=null,i!==null&&(or[lr++]=tn,or[lr++]=rn,or[lr++]=aa,tn=i.id,rn=i.overflow,aa=l),l=jd(l,p.children),l.flags|=4096,l)}function Jg(i,l,c){i.lanes|=l;var p=i.alternate;p!==null&&(p.lanes|=l),ed(i.return,l,c)}function _d(i,l,c,p,v){var w=i.memoizedState;w===null?i.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:p,tail:c,tailMode:v}:(w.isBackwards=l,w.rendering=null,w.renderingStartTime=0,w.last=p,w.tail=c,w.tailMode=v)}function Zg(i,l,c){var p=l.pendingProps,v=p.revealOrder,w=p.tail;if(Mt(i,l,p.children,c),p=Je.current,(p&2)!==0)p=p&1|2,l.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=l.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jg(i,c,l);else if(i.tag===19)Jg(i,c,l);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break e;for(;i.sibling===null;){if(i.return===null||i.return===l)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}p&=1}if(He(Je,p),(l.mode&1)===0)l.memoizedState=null;else switch(v){case"forwards":for(c=l.child,v=null;c!==null;)i=c.alternate,i!==null&&Ms(i)===null&&(v=c),c=c.sibling;c=v,c===null?(v=l.child,l.child=null):(v=c.sibling,c.sibling=null),_d(l,!1,v,c,w);break;case"backwards":for(c=null,v=l.child,l.child=null;v!==null;){if(i=v.alternate,i!==null&&Ms(i)===null){l.child=v;break}i=v.sibling,v.sibling=c,c=v,v=i}_d(l,!0,c,null,w);break;case"together":_d(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function zs(i,l){(l.mode&1)===0&&i!==null&&(i.alternate=null,l.alternate=null,l.flags|=2)}function on(i,l,c){if(i!==null&&(l.dependencies=i.dependencies),ua|=l.lanes,(c&l.childLanes)===0)return null;if(i!==null&&l.child!==i.child)throw Error(r(153));if(l.child!==null){for(i=l.child,c=Un(i,i.pendingProps),l.child=c,c.return=l;i.sibling!==null;)i=i.sibling,c=c.sibling=Un(i,i.pendingProps),c.return=l;c.sibling=null}return l.child}function uP(i,l,c){switch(l.tag){case 3:Xg(l),Ka();break;case 5:pg(l);break;case 1:qt(l.type)&&_s(l);break;case 4:nd(l,l.stateNode.containerInfo);break;case 10:var p=l.type._context,v=l.memoizedProps.value;He(Ns,p._currentValue),p._currentValue=v;break;case 13:if(p=l.memoizedState,p!==null)return p.dehydrated!==null?(He(Je,Je.current&1),l.flags|=128,null):(c&l.child.childLanes)!==0?Qg(i,l,c):(He(Je,Je.current&1),i=on(i,l,c),i!==null?i.sibling:null);He(Je,Je.current&1);break;case 19:if(p=(c&l.childLanes)!==0,(i.flags&128)!==0){if(p)return Zg(i,l,c);l.flags|=128}if(v=l.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),He(Je,Je.current),p)break;return null;case 22:case 23:return l.lanes=0,Kg(i,l,c)}return on(i,l,c)}var ex,Ad,tx,rx;ex=function(i,l){for(var c=l.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===l)break;for(;c.sibling===null;){if(c.return===null||c.return===l)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Ad=function(){},tx=function(i,l,c,p){var v=i.memoizedProps;if(v!==p){i=l.stateNode,la(qr.current);var w=null;switch(c){case"input":v=Ne(i,v),p=Ne(i,p),w=[];break;case"select":v=J({},v,{value:void 0}),p=J({},p,{value:void 0}),w=[];break;case"textarea":v=jr(i,v),p=jr(i,p),w=[];break;default:typeof v.onClick!="function"&&typeof p.onClick=="function"&&(i.onclick=ws)}af(c,p);var k;c=null;for(Q in v)if(!p.hasOwnProperty(Q)&&v.hasOwnProperty(Q)&&v[Q]!=null)if(Q==="style"){var C=v[Q];for(k in C)C.hasOwnProperty(k)&&(c||(c={}),c[k]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?w||(w=[]):(w=w||[]).push(Q,null));for(Q in p){var L=p[Q];if(C=v!=null?v[Q]:void 0,p.hasOwnProperty(Q)&&L!==C&&(L!=null||C!=null))if(Q==="style")if(C){for(k in C)!C.hasOwnProperty(k)||L&&L.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in L)L.hasOwnProperty(k)&&C[k]!==L[k]&&(c||(c={}),c[k]=L[k])}else c||(w||(w=[]),w.push(Q,c)),c=L;else Q==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,C=C?C.__html:void 0,L!=null&&C!==L&&(w=w||[]).push(Q,L)):Q==="children"?typeof L!="string"&&typeof L!="number"||(w=w||[]).push(Q,""+L):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(L!=null&&Q==="onScroll"&&Ve("scroll",i),w||C===L||(w=[])):(w=w||[]).push(Q,L))}c&&(w=w||[]).push("style",c);var Q=w;(l.updateQueue=Q)&&(l.flags|=4)}},rx=function(i,l,c,p){c!==p&&(l.flags|=4)};function ko(i,l){if(!Ye)switch(i.tailMode){case"hidden":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var p=null;c!==null;)c.alternate!==null&&(p=c),c=c.sibling;p===null?l||i.tail===null?i.tail=null:i.tail.sibling=null:p.sibling=null}}function Pt(i){var l=i.alternate!==null&&i.alternate.child===i.child,c=0,p=0;if(l)for(var v=i.child;v!==null;)c|=v.lanes|v.childLanes,p|=v.subtreeFlags&14680064,p|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)c|=v.lanes|v.childLanes,p|=v.subtreeFlags,p|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=p,i.childLanes=c,l}function cP(i,l,c){var p=l.pendingProps;switch(Vf(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(l),null;case 1:return qt(l.type)&&js(),Pt(l),null;case 3:return p=l.stateNode,Ya(),Ge(Bt),Ge(Ot),od(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(i===null||i.child===null)&&(Ps(l)?l.flags|=4:i===null||i.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Or!==null&&(Id(Or),Or=null))),Ad(i,l),Pt(l),null;case 5:ad(l);var v=la(_o.current);if(c=l.type,i!==null&&l.stateNode!=null)tx(i,l,c,p,v),i.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!p){if(l.stateNode===null)throw Error(r(166));return Pt(l),null}if(i=la(qr.current),Ps(l)){p=l.stateNode,c=l.type;var w=l.memoizedProps;switch(p[Br]=l,p[xo]=w,i=(l.mode&1)!==0,c){case"dialog":Ve("cancel",p),Ve("close",p);break;case"iframe":case"object":case"embed":Ve("load",p);break;case"video":case"audio":for(v=0;v<yo.length;v++)Ve(yo[v],p);break;case"source":Ve("error",p);break;case"img":case"image":case"link":Ve("error",p),Ve("load",p);break;case"details":Ve("toggle",p);break;case"input":tt(p,w),Ve("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!w.multiple},Ve("invalid",p);break;case"textarea":Ta(p,w),Ve("invalid",p)}af(c,w),v=null;for(var k in w)if(w.hasOwnProperty(k)){var C=w[k];k==="children"?typeof C=="string"?p.textContent!==C&&(w.suppressHydrationWarning!==!0&&bs(p.textContent,C,i),v=["children",C]):typeof C=="number"&&p.textContent!==""+C&&(w.suppressHydrationWarning!==!0&&bs(p.textContent,C,i),v=["children",""+C]):a.hasOwnProperty(k)&&C!=null&&k==="onScroll"&&Ve("scroll",p)}switch(c){case"input":Oe(p),Sr(p,w,!0);break;case"textarea":Oe(p),Xi(p);break;case"select":case"option":break;default:typeof w.onClick=="function"&&(p.onclick=ws)}p=v,l.updateQueue=p,p!==null&&(l.flags|=4)}else{k=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=zv(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=k.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof p.is=="string"?i=k.createElement(c,{is:p.is}):(i=k.createElement(c),c==="select"&&(k=i,p.multiple?k.multiple=!0:p.size&&(k.size=p.size))):i=k.createElementNS(i,c),i[Br]=l,i[xo]=p,ex(i,l,!1,!1),l.stateNode=i;e:{switch(k=of(c,p),c){case"dialog":Ve("cancel",i),Ve("close",i),v=p;break;case"iframe":case"object":case"embed":Ve("load",i),v=p;break;case"video":case"audio":for(v=0;v<yo.length;v++)Ve(yo[v],i);v=p;break;case"source":Ve("error",i),v=p;break;case"img":case"image":case"link":Ve("error",i),Ve("load",i),v=p;break;case"details":Ve("toggle",i),v=p;break;case"input":tt(i,p),v=Ne(i,p),Ve("invalid",i);break;case"option":v=p;break;case"select":i._wrapperState={wasMultiple:!!p.multiple},v=J({},p,{value:void 0}),Ve("invalid",i);break;case"textarea":Ta(i,p),v=jr(i,p),Ve("invalid",i);break;default:v=p}af(c,v),C=v;for(w in C)if(C.hasOwnProperty(w)){var L=C[w];w==="style"?Hv(i,L):w==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&Uv(i,L)):w==="children"?typeof L=="string"?(c!=="textarea"||L!=="")&&Yi(i,L):typeof L=="number"&&Yi(i,""+L):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(a.hasOwnProperty(w)?L!=null&&w==="onScroll"&&Ve("scroll",i):L!=null&&E(i,w,L,k))}switch(c){case"input":Oe(i),Sr(i,p,!1);break;case"textarea":Oe(i),Xi(i);break;case"option":p.value!=null&&i.setAttribute("value",""+Ae(p.value));break;case"select":i.multiple=!!p.multiple,w=p.value,w!=null?Ft(i,!!p.multiple,w,!1):p.defaultValue!=null&&Ft(i,!!p.multiple,p.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=ws)}switch(c){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Pt(l),null;case 6:if(i&&l.stateNode!=null)rx(i,l,i.memoizedProps,p);else{if(typeof p!="string"&&l.stateNode===null)throw Error(r(166));if(c=la(_o.current),la(qr.current),Ps(l)){if(p=l.stateNode,c=l.memoizedProps,p[Br]=l,(w=p.nodeValue!==c)&&(i=Qt,i!==null))switch(i.tag){case 3:bs(p.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&bs(p.nodeValue,c,(i.mode&1)!==0)}w&&(l.flags|=4)}else p=(c.nodeType===9?c:c.ownerDocument).createTextNode(p),p[Br]=l,l.stateNode=p}return Pt(l),null;case 13:if(Ge(Je),p=l.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ye&&Jt!==null&&(l.mode&1)!==0&&(l.flags&128)===0)ig(),Ka(),l.flags|=98560,w=!1;else if(w=Ps(l),p!==null&&p.dehydrated!==null){if(i===null){if(!w)throw Error(r(318));if(w=l.memoizedState,w=w!==null?w.dehydrated:null,!w)throw Error(r(317));w[Br]=l}else Ka(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;Pt(l),w=!1}else Or!==null&&(Id(Or),Or=null),w=!0;if(!w)return l.flags&65536?l:null}return(l.flags&128)!==0?(l.lanes=c,l):(p=p!==null,p!==(i!==null&&i.memoizedState!==null)&&p&&(l.child.flags|=8192,(l.mode&1)!==0&&(i===null||(Je.current&1)!==0?dt===0&&(dt=3):Fd())),l.updateQueue!==null&&(l.flags|=4),Pt(l),null);case 4:return Ya(),Ad(i,l),i===null&&vo(l.stateNode.containerInfo),Pt(l),null;case 10:return Zf(l.type._context),Pt(l),null;case 17:return qt(l.type)&&js(),Pt(l),null;case 19:if(Ge(Je),w=l.memoizedState,w===null)return Pt(l),null;if(p=(l.flags&128)!==0,k=w.rendering,k===null)if(p)ko(w,!1);else{if(dt!==0||i!==null&&(i.flags&128)!==0)for(i=l.child;i!==null;){if(k=Ms(i),k!==null){for(l.flags|=128,ko(w,!1),p=k.updateQueue,p!==null&&(l.updateQueue=p,l.flags|=4),l.subtreeFlags=0,p=c,c=l.child;c!==null;)w=c,i=p,w.flags&=14680066,k=w.alternate,k===null?(w.childLanes=0,w.lanes=i,w.child=null,w.subtreeFlags=0,w.memoizedProps=null,w.memoizedState=null,w.updateQueue=null,w.dependencies=null,w.stateNode=null):(w.childLanes=k.childLanes,w.lanes=k.lanes,w.child=k.child,w.subtreeFlags=0,w.deletions=null,w.memoizedProps=k.memoizedProps,w.memoizedState=k.memoizedState,w.updateQueue=k.updateQueue,w.type=k.type,i=k.dependencies,w.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return He(Je,Je.current&1|2),l.child}i=i.sibling}w.tail!==null&&it()>ei&&(l.flags|=128,p=!0,ko(w,!1),l.lanes=4194304)}else{if(!p)if(i=Ms(k),i!==null){if(l.flags|=128,p=!0,c=i.updateQueue,c!==null&&(l.updateQueue=c,l.flags|=4),ko(w,!0),w.tail===null&&w.tailMode==="hidden"&&!k.alternate&&!Ye)return Pt(l),null}else 2*it()-w.renderingStartTime>ei&&c!==1073741824&&(l.flags|=128,p=!0,ko(w,!1),l.lanes=4194304);w.isBackwards?(k.sibling=l.child,l.child=k):(c=w.last,c!==null?c.sibling=k:l.child=k,w.last=k)}return w.tail!==null?(l=w.tail,w.rendering=l,w.tail=l.sibling,w.renderingStartTime=it(),l.sibling=null,c=Je.current,He(Je,p?c&1|2:c&1),l):(Pt(l),null);case 22:case 23:return Ld(),p=l.memoizedState!==null,i!==null&&i.memoizedState!==null!==p&&(l.flags|=8192),p&&(l.mode&1)!==0?(Zt&1073741824)!==0&&(Pt(l),l.subtreeFlags&6&&(l.flags|=8192)):Pt(l),null;case 24:return null;case 25:return null}throw Error(r(156,l.tag))}function fP(i,l){switch(Vf(l),l.tag){case 1:return qt(l.type)&&js(),i=l.flags,i&65536?(l.flags=i&-65537|128,l):null;case 3:return Ya(),Ge(Bt),Ge(Ot),od(),i=l.flags,(i&65536)!==0&&(i&128)===0?(l.flags=i&-65537|128,l):null;case 5:return ad(l),null;case 13:if(Ge(Je),i=l.memoizedState,i!==null&&i.dehydrated!==null){if(l.alternate===null)throw Error(r(340));Ka()}return i=l.flags,i&65536?(l.flags=i&-65537|128,l):null;case 19:return Ge(Je),null;case 4:return Ya(),null;case 10:return Zf(l.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Us=!1,kt=!1,dP=typeof WeakSet=="function"?WeakSet:Set,de=null;function Ja(i,l){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(p){nt(i,l,p)}else c.current=null}function Od(i,l,c){try{c()}catch(p){nt(i,l,p)}}var nx=!1;function pP(i,l){if(Lf=us,i=R1(),Nf(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var p=c.getSelection&&c.getSelection();if(p&&p.rangeCount!==0){c=p.anchorNode;var v=p.anchorOffset,w=p.focusNode;p=p.focusOffset;try{c.nodeType,w.nodeType}catch{c=null;break e}var k=0,C=-1,L=-1,Q=0,ne=0,ie=i,re=null;t:for(;;){for(var fe;ie!==c||v!==0&&ie.nodeType!==3||(C=k+v),ie!==w||p!==0&&ie.nodeType!==3||(L=k+p),ie.nodeType===3&&(k+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)re=ie,ie=fe;for(;;){if(ie===i)break t;if(re===c&&++Q===v&&(C=k),re===w&&++ne===p&&(L=k),(fe=ie.nextSibling)!==null)break;ie=re,re=ie.parentNode}ie=fe}c=C===-1||L===-1?null:{start:C,end:L}}else c=null}c=c||{start:0,end:0}}else c=null;for(Ff={focusedElem:i,selectionRange:c},us=!1,de=l;de!==null;)if(l=de,i=l.child,(l.subtreeFlags&1028)!==0&&i!==null)i.return=l,de=i;else for(;de!==null;){l=de;try{var he=l.alternate;if((l.flags&1024)!==0)switch(l.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var ye=he.memoizedProps,ot=he.memoizedState,K=l.stateNode,F=K.getSnapshotBeforeUpdate(l.elementType===l.type?ye:Er(l.type,ye),ot);K.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var G=l.stateNode.containerInfo;G.nodeType===1?G.textContent="":G.nodeType===9&&G.documentElement&&G.removeChild(G.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(le){nt(l,l.return,le)}if(i=l.sibling,i!==null){i.return=l.return,de=i;break}de=l.return}return he=nx,nx=!1,he}function No(i,l,c){var p=l.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var v=p=p.next;do{if((v.tag&i)===i){var w=v.destroy;v.destroy=void 0,w!==void 0&&Od(l,c,w)}v=v.next}while(v!==p)}}function Ws(i,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&i)===i){var p=c.create;c.destroy=p()}c=c.next}while(c!==l)}}function Ed(i){var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof l=="function"?l(i):l.current=i}}function ax(i){var l=i.alternate;l!==null&&(i.alternate=null,ax(l)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(l=i.stateNode,l!==null&&(delete l[Br],delete l[xo],delete l[Uf],delete l[XE],delete l[YE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function ix(i){return i.tag===5||i.tag===3||i.tag===4}function ox(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||ix(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Pd(i,l,c){var p=i.tag;if(p===5||p===6)i=i.stateNode,l?c.nodeType===8?c.parentNode.insertBefore(i,l):c.insertBefore(i,l):(c.nodeType===8?(l=c.parentNode,l.insertBefore(i,c)):(l=c,l.appendChild(i)),c=c._reactRootContainer,c!=null||l.onclick!==null||(l.onclick=ws));else if(p!==4&&(i=i.child,i!==null))for(Pd(i,l,c),i=i.sibling;i!==null;)Pd(i,l,c),i=i.sibling}function kd(i,l,c){var p=i.tag;if(p===5||p===6)i=i.stateNode,l?c.insertBefore(i,l):c.appendChild(i);else if(p!==4&&(i=i.child,i!==null))for(kd(i,l,c),i=i.sibling;i!==null;)kd(i,l,c),i=i.sibling}var St=null,Pr=!1;function Ln(i,l,c){for(c=c.child;c!==null;)lx(i,l,c),c=c.sibling}function lx(i,l,c){if(Fr&&typeof Fr.onCommitFiberUnmount=="function")try{Fr.onCommitFiberUnmount(ns,c)}catch{}switch(c.tag){case 5:kt||Ja(c,l);case 6:var p=St,v=Pr;St=null,Ln(i,l,c),St=p,Pr=v,St!==null&&(Pr?(i=St,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):St.removeChild(c.stateNode));break;case 18:St!==null&&(Pr?(i=St,c=c.stateNode,i.nodeType===8?zf(i.parentNode,c):i.nodeType===1&&zf(i,c),lo(i)):zf(St,c.stateNode));break;case 4:p=St,v=Pr,St=c.stateNode.containerInfo,Pr=!0,Ln(i,l,c),St=p,Pr=v;break;case 0:case 11:case 14:case 15:if(!kt&&(p=c.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){v=p=p.next;do{var w=v,k=w.destroy;w=w.tag,k!==void 0&&((w&2)!==0||(w&4)!==0)&&Od(c,l,k),v=v.next}while(v!==p)}Ln(i,l,c);break;case 1:if(!kt&&(Ja(c,l),p=c.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=c.memoizedProps,p.state=c.memoizedState,p.componentWillUnmount()}catch(C){nt(c,l,C)}Ln(i,l,c);break;case 21:Ln(i,l,c);break;case 22:c.mode&1?(kt=(p=kt)||c.memoizedState!==null,Ln(i,l,c),kt=p):Ln(i,l,c);break;default:Ln(i,l,c)}}function sx(i){var l=i.updateQueue;if(l!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new dP),l.forEach(function(p){var v=SP.bind(null,i,p);c.has(p)||(c.add(p),p.then(v,v))})}}function kr(i,l){var c=l.deletions;if(c!==null)for(var p=0;p<c.length;p++){var v=c[p];try{var w=i,k=l,C=k;e:for(;C!==null;){switch(C.tag){case 5:St=C.stateNode,Pr=!1;break e;case 3:St=C.stateNode.containerInfo,Pr=!0;break e;case 4:St=C.stateNode.containerInfo,Pr=!0;break e}C=C.return}if(St===null)throw Error(r(160));lx(w,k,v),St=null,Pr=!1;var L=v.alternate;L!==null&&(L.return=null),v.return=null}catch(Q){nt(v,l,Q)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)ux(l,i),l=l.sibling}function ux(i,l){var c=i.alternate,p=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(kr(l,i),Ur(i),p&4){try{No(3,i,i.return),Ws(3,i)}catch(ye){nt(i,i.return,ye)}try{No(5,i,i.return)}catch(ye){nt(i,i.return,ye)}}break;case 1:kr(l,i),Ur(i),p&512&&c!==null&&Ja(c,c.return);break;case 5:if(kr(l,i),Ur(i),p&512&&c!==null&&Ja(c,c.return),i.flags&32){var v=i.stateNode;try{Yi(v,"")}catch(ye){nt(i,i.return,ye)}}if(p&4&&(v=i.stateNode,v!=null)){var w=i.memoizedProps,k=c!==null?c.memoizedProps:w,C=i.type,L=i.updateQueue;if(i.updateQueue=null,L!==null)try{C==="input"&&w.type==="radio"&&w.name!=null&&rt(v,w),of(C,k);var Q=of(C,w);for(k=0;k<L.length;k+=2){var ne=L[k],ie=L[k+1];ne==="style"?Hv(v,ie):ne==="dangerouslySetInnerHTML"?Uv(v,ie):ne==="children"?Yi(v,ie):E(v,ne,ie,Q)}switch(C){case"input":yt(v,w);break;case"textarea":Gi(v,w);break;case"select":var re=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!w.multiple;var fe=w.value;fe!=null?Ft(v,!!w.multiple,fe,!1):re!==!!w.multiple&&(w.defaultValue!=null?Ft(v,!!w.multiple,w.defaultValue,!0):Ft(v,!!w.multiple,w.multiple?[]:"",!1))}v[xo]=w}catch(ye){nt(i,i.return,ye)}}break;case 6:if(kr(l,i),Ur(i),p&4){if(i.stateNode===null)throw Error(r(162));v=i.stateNode,w=i.memoizedProps;try{v.nodeValue=w}catch(ye){nt(i,i.return,ye)}}break;case 3:if(kr(l,i),Ur(i),p&4&&c!==null&&c.memoizedState.isDehydrated)try{lo(l.containerInfo)}catch(ye){nt(i,i.return,ye)}break;case 4:kr(l,i),Ur(i);break;case 13:kr(l,i),Ur(i),v=i.child,v.flags&8192&&(w=v.memoizedState!==null,v.stateNode.isHidden=w,!w||v.alternate!==null&&v.alternate.memoizedState!==null||(Cd=it())),p&4&&sx(i);break;case 22:if(ne=c!==null&&c.memoizedState!==null,i.mode&1?(kt=(Q=kt)||ne,kr(l,i),kt=Q):kr(l,i),Ur(i),p&8192){if(Q=i.memoizedState!==null,(i.stateNode.isHidden=Q)&&!ne&&(i.mode&1)!==0)for(de=i,ne=i.child;ne!==null;){for(ie=de=ne;de!==null;){switch(re=de,fe=re.child,re.tag){case 0:case 11:case 14:case 15:No(4,re,re.return);break;case 1:Ja(re,re.return);var he=re.stateNode;if(typeof he.componentWillUnmount=="function"){p=re,c=re.return;try{l=p,he.props=l.memoizedProps,he.state=l.memoizedState,he.componentWillUnmount()}catch(ye){nt(p,c,ye)}}break;case 5:Ja(re,re.return);break;case 22:if(re.memoizedState!==null){dx(ie);continue}}fe!==null?(fe.return=re,de=fe):dx(ie)}ne=ne.sibling}e:for(ne=null,ie=i;;){if(ie.tag===5){if(ne===null){ne=ie;try{v=ie.stateNode,Q?(w=v.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none"):(C=ie.stateNode,L=ie.memoizedProps.style,k=L!=null&&L.hasOwnProperty("display")?L.display:null,C.style.display=Wv("display",k))}catch(ye){nt(i,i.return,ye)}}}else if(ie.tag===6){if(ne===null)try{ie.stateNode.nodeValue=Q?"":ie.memoizedProps}catch(ye){nt(i,i.return,ye)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===i)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===i)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===i)break e;ne===ie&&(ne=null),ie=ie.return}ne===ie&&(ne=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:kr(l,i),Ur(i),p&4&&sx(i);break;case 21:break;default:kr(l,i),Ur(i)}}function Ur(i){var l=i.flags;if(l&2){try{e:{for(var c=i.return;c!==null;){if(ix(c)){var p=c;break e}c=c.return}throw Error(r(160))}switch(p.tag){case 5:var v=p.stateNode;p.flags&32&&(Yi(v,""),p.flags&=-33);var w=ox(i);kd(i,w,v);break;case 3:case 4:var k=p.stateNode.containerInfo,C=ox(i);Pd(i,C,k);break;default:throw Error(r(161))}}catch(L){nt(i,i.return,L)}i.flags&=-3}l&4096&&(i.flags&=-4097)}function hP(i,l,c){de=i,cx(i)}function cx(i,l,c){for(var p=(i.mode&1)!==0;de!==null;){var v=de,w=v.child;if(v.tag===22&&p){var k=v.memoizedState!==null||Us;if(!k){var C=v.alternate,L=C!==null&&C.memoizedState!==null||kt;C=Us;var Q=kt;if(Us=k,(kt=L)&&!Q)for(de=v;de!==null;)k=de,L=k.child,k.tag===22&&k.memoizedState!==null?px(v):L!==null?(L.return=k,de=L):px(v);for(;w!==null;)de=w,cx(w),w=w.sibling;de=v,Us=C,kt=Q}fx(i)}else(v.subtreeFlags&8772)!==0&&w!==null?(w.return=v,de=w):fx(i)}}function fx(i){for(;de!==null;){var l=de;if((l.flags&8772)!==0){var c=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:kt||Ws(5,l);break;case 1:var p=l.stateNode;if(l.flags&4&&!kt)if(c===null)p.componentDidMount();else{var v=l.elementType===l.type?c.memoizedProps:Er(l.type,c.memoizedProps);p.componentDidUpdate(v,c.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var w=l.updateQueue;w!==null&&dg(l,w,p);break;case 3:var k=l.updateQueue;if(k!==null){if(c=null,l.child!==null)switch(l.child.tag){case 5:c=l.child.stateNode;break;case 1:c=l.child.stateNode}dg(l,k,c)}break;case 5:var C=l.stateNode;if(c===null&&l.flags&4){c=C;var L=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&c.focus();break;case"img":L.src&&(c.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var Q=l.alternate;if(Q!==null){var ne=Q.memoizedState;if(ne!==null){var ie=ne.dehydrated;ie!==null&&lo(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}kt||l.flags&512&&Ed(l)}catch(re){nt(l,l.return,re)}}if(l===i){de=null;break}if(c=l.sibling,c!==null){c.return=l.return,de=c;break}de=l.return}}function dx(i){for(;de!==null;){var l=de;if(l===i){de=null;break}var c=l.sibling;if(c!==null){c.return=l.return,de=c;break}de=l.return}}function px(i){for(;de!==null;){var l=de;try{switch(l.tag){case 0:case 11:case 15:var c=l.return;try{Ws(4,l)}catch(L){nt(l,c,L)}break;case 1:var p=l.stateNode;if(typeof p.componentDidMount=="function"){var v=l.return;try{p.componentDidMount()}catch(L){nt(l,v,L)}}var w=l.return;try{Ed(l)}catch(L){nt(l,w,L)}break;case 5:var k=l.return;try{Ed(l)}catch(L){nt(l,k,L)}}}catch(L){nt(l,l.return,L)}if(l===i){de=null;break}var C=l.sibling;if(C!==null){C.return=l.return,de=C;break}de=l.return}}var mP=Math.ceil,Hs=N.ReactCurrentDispatcher,Nd=N.ReactCurrentOwner,cr=N.ReactCurrentBatchConfig,Me=0,gt=null,st=null,jt=0,Zt=0,Za=Dn(0),dt=0,To=null,ua=0,Ks=0,Td=0,Co=null,Ut=null,Cd=0,ei=1/0,ln=null,Vs=!1,Dd=null,Fn=null,Gs=!1,Bn=null,Xs=0,Do=0,Md=null,Ys=-1,Qs=0;function Rt(){return(Me&6)!==0?it():Ys!==-1?Ys:Ys=it()}function qn(i){return(i.mode&1)===0?1:(Me&2)!==0&&jt!==0?jt&-jt:JE.transition!==null?(Qs===0&&(Qs=o1()),Qs):(i=Be,i!==0||(i=window.event,i=i===void 0?16:m1(i.type)),i)}function Nr(i,l,c,p){if(50<Do)throw Do=0,Md=null,Error(r(185));ro(i,c,p),((Me&2)===0||i!==gt)&&(i===gt&&((Me&2)===0&&(Ks|=c),dt===4&&zn(i,jt)),Wt(i,p),c===1&&Me===0&&(l.mode&1)===0&&(ei=it()+500,As&&Rn()))}function Wt(i,l){var c=i.callbackNode;JO(i,l);var p=os(i,i===gt?jt:0);if(p===0)c!==null&&n1(c),i.callbackNode=null,i.callbackPriority=0;else if(l=p&-p,i.callbackPriority!==l){if(c!=null&&n1(c),l===1)i.tag===0?QE(mx.bind(null,i)):eg(mx.bind(null,i)),VE(function(){(Me&6)===0&&Rn()}),c=null;else{switch(l1(p)){case 1:c=pf;break;case 4:c=a1;break;case 16:c=rs;break;case 536870912:c=i1;break;default:c=rs}c=jx(c,hx.bind(null,i))}i.callbackPriority=l,i.callbackNode=c}}function hx(i,l){if(Ys=-1,Qs=0,(Me&6)!==0)throw Error(r(327));var c=i.callbackNode;if(ti()&&i.callbackNode!==c)return null;var p=os(i,i===gt?jt:0);if(p===0)return null;if((p&30)!==0||(p&i.expiredLanes)!==0||l)l=Js(i,p);else{l=p;var v=Me;Me|=2;var w=vx();(gt!==i||jt!==l)&&(ln=null,ei=it()+500,fa(i,l));do try{gP();break}catch(C){yx(i,C)}while(!0);Jf(),Hs.current=w,Me=v,st!==null?l=0:(gt=null,jt=0,l=dt)}if(l!==0){if(l===2&&(v=hf(i),v!==0&&(p=v,l=Rd(i,v))),l===1)throw c=To,fa(i,0),zn(i,p),Wt(i,it()),c;if(l===6)zn(i,p);else{if(v=i.current.alternate,(p&30)===0&&!yP(v)&&(l=Js(i,p),l===2&&(w=hf(i),w!==0&&(p=w,l=Rd(i,w))),l===1))throw c=To,fa(i,0),zn(i,p),Wt(i,it()),c;switch(i.finishedWork=v,i.finishedLanes=p,l){case 0:case 1:throw Error(r(345));case 2:da(i,Ut,ln);break;case 3:if(zn(i,p),(p&130023424)===p&&(l=Cd+500-it(),10<l)){if(os(i,0)!==0)break;if(v=i.suspendedLanes,(v&p)!==p){Rt(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=qf(da.bind(null,i,Ut,ln),l);break}da(i,Ut,ln);break;case 4:if(zn(i,p),(p&4194240)===p)break;for(l=i.eventTimes,v=-1;0<p;){var k=31-_r(p);w=1<<k,k=l[k],k>v&&(v=k),p&=~w}if(p=v,p=it()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*mP(p/1960))-p,10<p){i.timeoutHandle=qf(da.bind(null,i,Ut,ln),p);break}da(i,Ut,ln);break;case 5:da(i,Ut,ln);break;default:throw Error(r(329))}}}return Wt(i,it()),i.callbackNode===c?hx.bind(null,i):null}function Rd(i,l){var c=Co;return i.current.memoizedState.isDehydrated&&(fa(i,l).flags|=256),i=Js(i,l),i!==2&&(l=Ut,Ut=c,l!==null&&Id(l)),i}function Id(i){Ut===null?Ut=i:Ut.push.apply(Ut,i)}function yP(i){for(var l=i;;){if(l.flags&16384){var c=l.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var p=0;p<c.length;p++){var v=c[p],w=v.getSnapshot;v=v.value;try{if(!Ar(w(),v))return!1}catch{return!1}}}if(c=l.child,l.subtreeFlags&16384&&c!==null)c.return=l,l=c;else{if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function zn(i,l){for(l&=~Td,l&=~Ks,i.suspendedLanes|=l,i.pingedLanes&=~l,i=i.expirationTimes;0<l;){var c=31-_r(l),p=1<<c;i[c]=-1,l&=~p}}function mx(i){if((Me&6)!==0)throw Error(r(327));ti();var l=os(i,0);if((l&1)===0)return Wt(i,it()),null;var c=Js(i,l);if(i.tag!==0&&c===2){var p=hf(i);p!==0&&(l=p,c=Rd(i,p))}if(c===1)throw c=To,fa(i,0),zn(i,l),Wt(i,it()),c;if(c===6)throw Error(r(345));return i.finishedWork=i.current.alternate,i.finishedLanes=l,da(i,Ut,ln),Wt(i,it()),null}function $d(i,l){var c=Me;Me|=1;try{return i(l)}finally{Me=c,Me===0&&(ei=it()+500,As&&Rn())}}function ca(i){Bn!==null&&Bn.tag===0&&(Me&6)===0&&ti();var l=Me;Me|=1;var c=cr.transition,p=Be;try{if(cr.transition=null,Be=1,i)return i()}finally{Be=p,cr.transition=c,Me=l,(Me&6)===0&&Rn()}}function Ld(){Zt=Za.current,Ge(Za)}function fa(i,l){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,KE(c)),st!==null)for(c=st.return;c!==null;){var p=c;switch(Vf(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&js();break;case 3:Ya(),Ge(Bt),Ge(Ot),od();break;case 5:ad(p);break;case 4:Ya();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Zf(p.type._context);break;case 22:case 23:Ld()}c=c.return}if(gt=i,st=i=Un(i.current,null),jt=Zt=l,dt=0,To=null,Td=Ks=ua=0,Ut=Co=null,oa!==null){for(l=0;l<oa.length;l++)if(c=oa[l],p=c.interleaved,p!==null){c.interleaved=null;var v=p.next,w=c.pending;if(w!==null){var k=w.next;w.next=v,p.next=k}c.pending=p}oa=null}return i}function yx(i,l){do{var c=st;try{if(Jf(),Rs.current=Fs,Is){for(var p=Ze.memoizedState;p!==null;){var v=p.queue;v!==null&&(v.pending=null),p=p.next}Is=!1}if(sa=0,vt=ft=Ze=null,Ao=!1,Oo=0,Nd.current=null,c===null||c.return===null){dt=1,To=l,st=null;break}e:{var w=i,k=c.return,C=c,L=l;if(l=jt,C.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var Q=L,ne=C,ie=ne.tag;if((ne.mode&1)===0&&(ie===0||ie===11||ie===15)){var re=ne.alternate;re?(ne.updateQueue=re.updateQueue,ne.memoizedState=re.memoizedState,ne.lanes=re.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var fe=qg(k);if(fe!==null){fe.flags&=-257,zg(fe,k,C,w,l),fe.mode&1&&Bg(w,Q,l),l=fe,L=Q;var he=l.updateQueue;if(he===null){var ye=new Set;ye.add(L),l.updateQueue=ye}else he.add(L);break e}else{if((l&1)===0){Bg(w,Q,l),Fd();break e}L=Error(r(426))}}else if(Ye&&C.mode&1){var ot=qg(k);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),zg(ot,k,C,w,l),Yf(Qa(L,C));break e}}w=L=Qa(L,C),dt!==4&&(dt=2),Co===null?Co=[w]:Co.push(w),w=k;do{switch(w.tag){case 3:w.flags|=65536,l&=-l,w.lanes|=l;var K=Lg(w,L,l);fg(w,K);break e;case 1:C=L;var F=w.type,G=w.stateNode;if((w.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||G!==null&&typeof G.componentDidCatch=="function"&&(Fn===null||!Fn.has(G)))){w.flags|=65536,l&=-l,w.lanes|=l;var le=Fg(w,C,l);fg(w,le);break e}}w=w.return}while(w!==null)}xx(c)}catch(ve){l=ve,st===c&&c!==null&&(st=c=c.return);continue}break}while(!0)}function vx(){var i=Hs.current;return Hs.current=Fs,i===null?Fs:i}function Fd(){(dt===0||dt===3||dt===2)&&(dt=4),gt===null||(ua&268435455)===0&&(Ks&268435455)===0||zn(gt,jt)}function Js(i,l){var c=Me;Me|=2;var p=vx();(gt!==i||jt!==l)&&(ln=null,fa(i,l));do try{vP();break}catch(v){yx(i,v)}while(!0);if(Jf(),Me=c,Hs.current=p,st!==null)throw Error(r(261));return gt=null,jt=0,dt}function vP(){for(;st!==null;)gx(st)}function gP(){for(;st!==null&&!UO();)gx(st)}function gx(i){var l=Sx(i.alternate,i,Zt);i.memoizedProps=i.pendingProps,l===null?xx(i):st=l,Nd.current=null}function xx(i){var l=i;do{var c=l.alternate;if(i=l.return,(l.flags&32768)===0){if(c=cP(c,l,Zt),c!==null){st=c;return}}else{if(c=fP(c,l),c!==null){c.flags&=32767,st=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{dt=6,st=null;return}}if(l=l.sibling,l!==null){st=l;return}st=l=i}while(l!==null);dt===0&&(dt=5)}function da(i,l,c){var p=Be,v=cr.transition;try{cr.transition=null,Be=1,xP(i,l,c,p)}finally{cr.transition=v,Be=p}return null}function xP(i,l,c,p){do ti();while(Bn!==null);if((Me&6)!==0)throw Error(r(327));c=i.finishedWork;var v=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0;var w=c.lanes|c.childLanes;if(ZO(i,w),i===gt&&(st=gt=null,jt=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Gs||(Gs=!0,jx(rs,function(){return ti(),null})),w=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||w){w=cr.transition,cr.transition=null;var k=Be;Be=1;var C=Me;Me|=4,Nd.current=null,pP(i,c),ux(c,i),FE(Ff),us=!!Lf,Ff=Lf=null,i.current=c,hP(c),WO(),Me=C,Be=k,cr.transition=w}else i.current=c;if(Gs&&(Gs=!1,Bn=i,Xs=v),w=i.pendingLanes,w===0&&(Fn=null),VO(c.stateNode),Wt(i,it()),l!==null)for(p=i.onRecoverableError,c=0;c<l.length;c++)v=l[c],p(v.value,{componentStack:v.stack,digest:v.digest});if(Vs)throw Vs=!1,i=Dd,Dd=null,i;return(Xs&1)!==0&&i.tag!==0&&ti(),w=i.pendingLanes,(w&1)!==0?i===Md?Do++:(Do=0,Md=i):Do=0,Rn(),null}function ti(){if(Bn!==null){var i=l1(Xs),l=cr.transition,c=Be;try{if(cr.transition=null,Be=16>i?16:i,Bn===null)var p=!1;else{if(i=Bn,Bn=null,Xs=0,(Me&6)!==0)throw Error(r(331));var v=Me;for(Me|=4,de=i.current;de!==null;){var w=de,k=w.child;if((de.flags&16)!==0){var C=w.deletions;if(C!==null){for(var L=0;L<C.length;L++){var Q=C[L];for(de=Q;de!==null;){var ne=de;switch(ne.tag){case 0:case 11:case 15:No(8,ne,w)}var ie=ne.child;if(ie!==null)ie.return=ne,de=ie;else for(;de!==null;){ne=de;var re=ne.sibling,fe=ne.return;if(ax(ne),ne===Q){de=null;break}if(re!==null){re.return=fe,de=re;break}de=fe}}}var he=w.alternate;if(he!==null){var ye=he.child;if(ye!==null){he.child=null;do{var ot=ye.sibling;ye.sibling=null,ye=ot}while(ye!==null)}}de=w}}if((w.subtreeFlags&2064)!==0&&k!==null)k.return=w,de=k;else e:for(;de!==null;){if(w=de,(w.flags&2048)!==0)switch(w.tag){case 0:case 11:case 15:No(9,w,w.return)}var K=w.sibling;if(K!==null){K.return=w.return,de=K;break e}de=w.return}}var F=i.current;for(de=F;de!==null;){k=de;var G=k.child;if((k.subtreeFlags&2064)!==0&&G!==null)G.return=k,de=G;else e:for(k=F;de!==null;){if(C=de,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Ws(9,C)}}catch(ve){nt(C,C.return,ve)}if(C===k){de=null;break e}var le=C.sibling;if(le!==null){le.return=C.return,de=le;break e}de=C.return}}if(Me=v,Rn(),Fr&&typeof Fr.onPostCommitFiberRoot=="function")try{Fr.onPostCommitFiberRoot(ns,i)}catch{}p=!0}return p}finally{Be=c,cr.transition=l}}return!1}function bx(i,l,c){l=Qa(c,l),l=Lg(i,l,1),i=$n(i,l,1),l=Rt(),i!==null&&(ro(i,1,l),Wt(i,l))}function nt(i,l,c){if(i.tag===3)bx(i,i,c);else for(;l!==null;){if(l.tag===3){bx(l,i,c);break}else if(l.tag===1){var p=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(Fn===null||!Fn.has(p))){i=Qa(c,i),i=Fg(l,i,1),l=$n(l,i,1),i=Rt(),l!==null&&(ro(l,1,i),Wt(l,i));break}}l=l.return}}function bP(i,l,c){var p=i.pingCache;p!==null&&p.delete(l),l=Rt(),i.pingedLanes|=i.suspendedLanes&c,gt===i&&(jt&c)===c&&(dt===4||dt===3&&(jt&130023424)===jt&&500>it()-Cd?fa(i,0):Td|=c),Wt(i,l)}function wx(i,l){l===0&&((i.mode&1)===0?l=1:(l=is,is<<=1,(is&130023424)===0&&(is=4194304)));var c=Rt();i=nn(i,l),i!==null&&(ro(i,l,c),Wt(i,c))}function wP(i){var l=i.memoizedState,c=0;l!==null&&(c=l.retryLane),wx(i,c)}function SP(i,l){var c=0;switch(i.tag){case 13:var p=i.stateNode,v=i.memoizedState;v!==null&&(c=v.retryLane);break;case 19:p=i.stateNode;break;default:throw Error(r(314))}p!==null&&p.delete(l),wx(i,c)}var Sx;Sx=function(i,l,c){if(i!==null)if(i.memoizedProps!==l.pendingProps||Bt.current)zt=!0;else{if((i.lanes&c)===0&&(l.flags&128)===0)return zt=!1,uP(i,l,c);zt=(i.flags&131072)!==0}else zt=!1,Ye&&(l.flags&1048576)!==0&&tg(l,Es,l.index);switch(l.lanes=0,l.tag){case 2:var p=l.type;zs(i,l),i=l.pendingProps;var v=Ua(l,Ot.current);Xa(l,c),v=ud(null,l,p,i,v,c);var w=cd();return l.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,qt(p)?(w=!0,_s(l)):w=!1,l.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,rd(l),v.updater=Bs,l.stateNode=v,v._reactInternals=l,yd(l,p,i,c),l=bd(null,l,p,!0,w,c)):(l.tag=0,Ye&&w&&Kf(l),Mt(null,l,v,c),l=l.child),l;case 16:p=l.elementType;e:{switch(zs(i,l),i=l.pendingProps,v=p._init,p=v(p._payload),l.type=p,v=l.tag=_P(p),i=Er(p,i),v){case 0:l=xd(null,l,p,i,c);break e;case 1:l=Gg(null,l,p,i,c);break e;case 11:l=Ug(null,l,p,i,c);break e;case 14:l=Wg(null,l,p,Er(p.type,i),c);break e}throw Error(r(306,p,""))}return l;case 0:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:Er(p,v),xd(i,l,p,v,c);case 1:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:Er(p,v),Gg(i,l,p,v,c);case 3:e:{if(Xg(l),i===null)throw Error(r(387));p=l.pendingProps,w=l.memoizedState,v=w.element,cg(i,l),Ds(l,p,null,c);var k=l.memoizedState;if(p=k.element,w.isDehydrated)if(w={element:p,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},l.updateQueue.baseState=w,l.memoizedState=w,l.flags&256){v=Qa(Error(r(423)),l),l=Yg(i,l,p,c,v);break e}else if(p!==v){v=Qa(Error(r(424)),l),l=Yg(i,l,p,c,v);break e}else for(Jt=Cn(l.stateNode.containerInfo.firstChild),Qt=l,Ye=!0,Or=null,c=sg(l,null,p,c),l.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Ka(),p===v){l=on(i,l,c);break e}Mt(i,l,p,c)}l=l.child}return l;case 5:return pg(l),i===null&&Xf(l),p=l.type,v=l.pendingProps,w=i!==null?i.memoizedProps:null,k=v.children,Bf(p,v)?k=null:w!==null&&Bf(p,w)&&(l.flags|=32),Vg(i,l),Mt(i,l,k,c),l.child;case 6:return i===null&&Xf(l),null;case 13:return Qg(i,l,c);case 4:return nd(l,l.stateNode.containerInfo),p=l.pendingProps,i===null?l.child=Va(l,null,p,c):Mt(i,l,p,c),l.child;case 11:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:Er(p,v),Ug(i,l,p,v,c);case 7:return Mt(i,l,l.pendingProps,c),l.child;case 8:return Mt(i,l,l.pendingProps.children,c),l.child;case 12:return Mt(i,l,l.pendingProps.children,c),l.child;case 10:e:{if(p=l.type._context,v=l.pendingProps,w=l.memoizedProps,k=v.value,He(Ns,p._currentValue),p._currentValue=k,w!==null)if(Ar(w.value,k)){if(w.children===v.children&&!Bt.current){l=on(i,l,c);break e}}else for(w=l.child,w!==null&&(w.return=l);w!==null;){var C=w.dependencies;if(C!==null){k=w.child;for(var L=C.firstContext;L!==null;){if(L.context===p){if(w.tag===1){L=an(-1,c&-c),L.tag=2;var Q=w.updateQueue;if(Q!==null){Q=Q.shared;var ne=Q.pending;ne===null?L.next=L:(L.next=ne.next,ne.next=L),Q.pending=L}}w.lanes|=c,L=w.alternate,L!==null&&(L.lanes|=c),ed(w.return,c,l),C.lanes|=c;break}L=L.next}}else if(w.tag===10)k=w.type===l.type?null:w.child;else if(w.tag===18){if(k=w.return,k===null)throw Error(r(341));k.lanes|=c,C=k.alternate,C!==null&&(C.lanes|=c),ed(k,c,l),k=w.sibling}else k=w.child;if(k!==null)k.return=w;else for(k=w;k!==null;){if(k===l){k=null;break}if(w=k.sibling,w!==null){w.return=k.return,k=w;break}k=k.return}w=k}Mt(i,l,v.children,c),l=l.child}return l;case 9:return v=l.type,p=l.pendingProps.children,Xa(l,c),v=sr(v),p=p(v),l.flags|=1,Mt(i,l,p,c),l.child;case 14:return p=l.type,v=Er(p,l.pendingProps),v=Er(p.type,v),Wg(i,l,p,v,c);case 15:return Hg(i,l,l.type,l.pendingProps,c);case 17:return p=l.type,v=l.pendingProps,v=l.elementType===p?v:Er(p,v),zs(i,l),l.tag=1,qt(p)?(i=!0,_s(l)):i=!1,Xa(l,c),Ig(l,p,v),yd(l,p,v,c),bd(null,l,p,!0,i,c);case 19:return Zg(i,l,c);case 22:return Kg(i,l,c)}throw Error(r(156,l.tag))};function jx(i,l){return r1(i,l)}function jP(i,l,c,p){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fr(i,l,c,p){return new jP(i,l,c,p)}function Bd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function _P(i){if(typeof i=="function")return Bd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===M)return 11;if(i===Y)return 14}return 2}function Un(i,l){var c=i.alternate;return c===null?(c=fr(i.tag,l,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=l,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,l=i.dependencies,c.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function Zs(i,l,c,p,v,w){var k=2;if(p=i,typeof i=="function")Bd(i)&&(k=1);else if(typeof i=="string")k=5;else e:switch(i){case T:return pa(c.children,v,w,l);case R:k=8,v|=8;break;case $:return i=fr(12,c,l,v|2),i.elementType=$,i.lanes=w,i;case H:return i=fr(13,c,l,v),i.elementType=H,i.lanes=w,i;case X:return i=fr(19,c,l,v),i.elementType=X,i.lanes=w,i;case Z:return eu(c,v,w,l);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case z:k=10;break e;case B:k=9;break e;case M:k=11;break e;case Y:k=14;break e;case W:k=16,p=null;break e}throw Error(r(130,i==null?i:typeof i,""))}return l=fr(k,c,l,v),l.elementType=i,l.type=p,l.lanes=w,l}function pa(i,l,c,p){return i=fr(7,i,p,l),i.lanes=c,i}function eu(i,l,c,p){return i=fr(22,i,p,l),i.elementType=Z,i.lanes=c,i.stateNode={isHidden:!1},i}function qd(i,l,c){return i=fr(6,i,null,l),i.lanes=c,i}function zd(i,l,c){return l=fr(4,i.children!==null?i.children:[],i.key,l),l.lanes=c,l.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},l}function AP(i,l,c,p,v){this.tag=l,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=p,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Ud(i,l,c,p,v,w,k,C,L){return i=new AP(i,l,c,C,L),l===1?(l=1,w===!0&&(l|=8)):l=0,w=fr(3,null,null,l),i.current=w,w.stateNode=i,w.memoizedState={element:p,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(w),i}function OP(i,l,c){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:p==null?null:""+p,children:i,containerInfo:l,implementation:c}}function _x(i){if(!i)return Mn;i=i._reactInternals;e:{if(ta(i)!==i||i.tag!==1)throw Error(r(170));var l=i;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(qt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(r(171))}if(i.tag===1){var c=i.type;if(qt(c))return J1(i,c,l)}return l}function Ax(i,l,c,p,v,w,k,C,L){return i=Ud(c,p,!0,i,v,w,k,C,L),i.context=_x(null),c=i.current,p=Rt(),v=qn(c),w=an(p,v),w.callback=l??null,$n(c,w,v),i.current.lanes=v,ro(i,v,p),Wt(i,p),i}function tu(i,l,c,p){var v=l.current,w=Rt(),k=qn(v);return c=_x(c),l.context===null?l.context=c:l.pendingContext=c,l=an(w,k),l.payload={element:i},p=p===void 0?null:p,p!==null&&(l.callback=p),i=$n(v,l,k),i!==null&&(Nr(i,v,k,w),Cs(i,v,k)),k}function ru(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ox(i,l){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<l?c:l}}function Wd(i,l){Ox(i,l),(i=i.alternate)&&Ox(i,l)}function EP(){return null}var Ex=typeof reportError=="function"?reportError:function(i){console.error(i)};function Hd(i){this._internalRoot=i}nu.prototype.render=Hd.prototype.render=function(i){var l=this._internalRoot;if(l===null)throw Error(r(409));tu(i,l,null,null)},nu.prototype.unmount=Hd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var l=i.containerInfo;ca(function(){tu(null,i,null,null)}),l[Zr]=null}};function nu(i){this._internalRoot=i}nu.prototype.unstable_scheduleHydration=function(i){if(i){var l=c1();i={blockedOn:null,target:i,priority:l};for(var c=0;c<kn.length&&l!==0&&l<kn[c].priority;c++);kn.splice(c,0,i),c===0&&p1(i)}};function Kd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function au(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Px(){}function PP(i,l,c,p,v){if(v){if(typeof p=="function"){var w=p;p=function(){var Q=ru(k);w.call(Q)}}var k=Ax(l,p,i,0,null,!1,!1,"",Px);return i._reactRootContainer=k,i[Zr]=k.current,vo(i.nodeType===8?i.parentNode:i),ca(),k}for(;v=i.lastChild;)i.removeChild(v);if(typeof p=="function"){var C=p;p=function(){var Q=ru(L);C.call(Q)}}var L=Ud(i,0,!1,null,null,!1,!1,"",Px);return i._reactRootContainer=L,i[Zr]=L.current,vo(i.nodeType===8?i.parentNode:i),ca(function(){tu(l,L,c,p)}),L}function iu(i,l,c,p,v){var w=c._reactRootContainer;if(w){var k=w;if(typeof v=="function"){var C=v;v=function(){var L=ru(k);C.call(L)}}tu(l,k,i,v)}else k=PP(c,l,i,v,p);return ru(k)}s1=function(i){switch(i.tag){case 3:var l=i.stateNode;if(l.current.memoizedState.isDehydrated){var c=to(l.pendingLanes);c!==0&&(yf(l,c|1),Wt(l,it()),(Me&6)===0&&(ei=it()+500,Rn()))}break;case 13:ca(function(){var p=nn(i,1);if(p!==null){var v=Rt();Nr(p,i,1,v)}}),Wd(i,1)}},vf=function(i){if(i.tag===13){var l=nn(i,134217728);if(l!==null){var c=Rt();Nr(l,i,134217728,c)}Wd(i,134217728)}},u1=function(i){if(i.tag===13){var l=qn(i),c=nn(i,l);if(c!==null){var p=Rt();Nr(c,i,l,p)}Wd(i,l)}},c1=function(){return Be},f1=function(i,l){var c=Be;try{return Be=i,l()}finally{Be=c}},uf=function(i,l,c){switch(l){case"input":if(yt(i,c),l=c.name,c.type==="radio"&&l!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<c.length;l++){var p=c[l];if(p!==i&&p.form===i.form){var v=Ss(p);if(!v)throw Error(r(90));ae(p),yt(p,v)}}}break;case"textarea":Gi(i,c);break;case"select":l=c.value,l!=null&&Ft(i,!!c.multiple,l,!1)}},Xv=$d,Yv=ca;var kP={usingClientEntryPoint:!1,Events:[bo,qa,Ss,Vv,Gv,$d]},Mo={findFiberByHostInstance:ra,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NP={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=e1(i),i===null?null:i.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||EP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{ns=ou.inject(NP),Fr=ou}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kP,Ht.createPortal=function(i,l){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(l))throw Error(r(200));return OP(i,l,null,c)},Ht.createRoot=function(i,l){if(!Kd(i))throw Error(r(299));var c=!1,p="",v=Ex;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onRecoverableError!==void 0&&(v=l.onRecoverableError)),l=Ud(i,1,!1,null,null,c,!1,p,v),i[Zr]=l.current,vo(i.nodeType===8?i.parentNode:i),new Hd(l)},Ht.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var l=i._reactInternals;if(l===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=e1(l),i=i===null?null:i.stateNode,i},Ht.flushSync=function(i){return ca(i)},Ht.hydrate=function(i,l,c){if(!au(l))throw Error(r(200));return iu(null,i,l,!0,c)},Ht.hydrateRoot=function(i,l,c){if(!Kd(i))throw Error(r(405));var p=c!=null&&c.hydratedSources||null,v=!1,w="",k=Ex;if(c!=null&&(c.unstable_strictMode===!0&&(v=!0),c.identifierPrefix!==void 0&&(w=c.identifierPrefix),c.onRecoverableError!==void 0&&(k=c.onRecoverableError)),l=Ax(l,null,i,1,c??null,v,!1,w,k),i[Zr]=l.current,vo(i),p)for(i=0;i<p.length;i++)c=p[i],v=c._getVersion,v=v(c._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[c,v]:l.mutableSourceEagerHydrationData.push(c,v);return new nu(l)},Ht.render=function(i,l,c){if(!au(l))throw Error(r(200));return iu(null,i,l,!1,c)},Ht.unmountComponentAtNode=function(i){if(!au(i))throw Error(r(40));return i._reactRootContainer?(ca(function(){iu(null,null,i,!1,function(){i._reactRootContainer=null,i[Zr]=null})}),!0):!1},Ht.unstable_batchedUpdates=$d,Ht.unstable_renderSubtreeIntoContainer=function(i,l,c,p){if(!au(c))throw Error(r(200));if(i==null||i._reactInternals===void 0)throw Error(r(38));return iu(i,l,c,!1,p)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Ix;function LP(){if(Ix)return Xd.exports;Ix=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Xd.exports=$P(),Xd.exports}var $x;function FP(){if($x)return su;$x=1;var e=LP();return su.createRoot=e.createRoot,su.hydrateRoot=e.hydrateRoot,su}var BP=FP(),D=Ty();const q=We(D);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lx="popstate";function qP(e={}){function t(n,a){let{pathname:o,search:s,hash:u}=n.location;return l2("",{pathname:o,search:s,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:rl(a)}return UP(t,r,null,e)}function et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zP(){return Math.random().toString(36).substring(2,10)}function Fx(e,t){return{usr:e.state,key:e.key,idx:t}}function l2(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ii(t):t,state:r,key:t&&t.key||n||zP()}}function rl({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ii(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function UP(e,t,r,n={}){let{window:a=document.defaultView,v5Compat:o=!1}=n,s=a.history,u="POP",f=null,d=m();d==null&&(d=0,s.replaceState({...s.state,idx:d},""));function m(){return(s.state||{idx:null}).idx}function h(){u="POP";let b=m(),A=b==null?null:b-d;d=b,f&&f({action:u,location:S.location,delta:A})}function g(b,A){u="PUSH";let O=l2(S.location,b,A);d=m()+1;let E=Fx(O,d),N=S.createHref(O);try{s.pushState(E,"",N)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(N)}o&&f&&f({action:u,location:S.location,delta:1})}function x(b,A){u="REPLACE";let O=l2(S.location,b,A);d=m();let E=Fx(O,d),N=S.createHref(O);s.replaceState(E,"",N),o&&f&&f({action:u,location:S.location,delta:0})}function j(b){return WP(b)}let S={get action(){return u},get location(){return e(a,s)},listen(b){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(Lx,h),f=b,()=>{a.removeEventListener(Lx,h),f=null}},createHref(b){return t(a,b)},createURL:j,encodeLocation(b){let A=j(b);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:g,replace:x,go(b){return s.go(b)}};return S}function WP(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),et(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:rl(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function rj(e,t,r="/"){return HP(e,t,r,!1)}function HP(e,t,r,n){let a=typeof t=="string"?Ii(t):t,o=gn(a.pathname||"/",r);if(o==null)return null;let s=nj(e);KP(s);let u=null;for(let f=0;u==null&&f<s.length;++f){let d=n7(o);u=t7(s[f],d,n)}return u}function nj(e,t=[],r=[],n="",a=!1){let o=(s,u,f=a,d)=>{let m={relativePath:d===void 0?s.path||"":d,caseSensitive:s.caseSensitive===!0,childrenIndex:u,route:s};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&f)return;et(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let h=pn([n,m.relativePath]),g=r.concat(m);s.children&&s.children.length>0&&(et(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),nj(s.children,t,g,h,f)),!(s.path==null&&!s.index)&&t.push({path:h,score:ZP(h,s.index),routesMeta:g})};return e.forEach((s,u)=>{var f;if(s.path===""||!((f=s.path)!=null&&f.includes("?")))o(s,u);else for(let d of aj(s.path))o(s,u,!0,d)}),t}function aj(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let s=aj(n.join("/")),u=[];return u.push(...s.map(f=>f===""?o:[o,f].join("/"))),a&&u.push(...s),u.map(f=>e.startsWith("/")&&f===""?"/":f)}function KP(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:e7(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var VP=/^:[\w-]+$/,GP=3,XP=2,YP=1,QP=10,JP=-2,Bx=e=>e==="*";function ZP(e,t){let r=e.split("/"),n=r.length;return r.some(Bx)&&(n+=JP),t&&(n+=XP),r.filter(a=>!Bx(a)).reduce((a,o)=>a+(VP.test(o)?GP:o===""?YP:QP),n)}function e7(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function t7(e,t,r=!1){let{routesMeta:n}=e,a={},o="/",s=[];for(let u=0;u<n.length;++u){let f=n[u],d=u===n.length-1,m=o==="/"?t:t.slice(o.length)||"/",h=Au({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},m),g=f.route;if(!h&&d&&r&&!n[n.length-1].route.index&&(h=Au({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!h)return null;Object.assign(a,h.params),s.push({params:a,pathname:pn([o,h.pathname]),pathnameBase:l7(pn([o,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(o=pn([o,h.pathnameBase]))}return s}function Au(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=r7(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:n.reduce((d,{paramName:m,isOptional:h},g)=>{if(m==="*"){let j=u[g]||"";s=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const x=u[g];return h&&!x?d[m]=void 0:d[m]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function r7(e,t=!1,r=!0){Xr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,u,f)=>(n.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function n7(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}var a7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function i7(e,t="/"){let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Ii(e):e,o;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?o=qx(r.substring(1),"/"):o=qx(r,t)):o=t,{pathname:o,search:s7(n),hash:u7(a)}}function qx(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Jd(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function o7(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ij(e){let t=o7(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function oj(e,t,r,n=!1){let a;typeof e=="string"?a=Ii(e):(a={...e},et(!a.pathname||!a.pathname.includes("?"),Jd("?","pathname","search",a)),et(!a.pathname||!a.pathname.includes("#"),Jd("#","pathname","hash",a)),et(!a.search||!a.search.includes("#"),Jd("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,u;if(s==null)u=r;else{let h=t.length-1;if(!n&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),h-=1;a.pathname=g.join("/")}u=h>=0?t[h]:"/"}let f=i7(a,u),d=s&&s!=="/"&&s.endsWith("/"),m=(o||s===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(d||m)&&(f.pathname+="/"),f}var pn=e=>e.join("/").replace(/\/\/+/g,"/"),l7=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s7=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,u7=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,c7=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function f7(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function d7(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var lj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function sj(e,t){let r=e;if(typeof r!="string"||!a7.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,a=!1;if(lj)try{let o=new URL(window.location.href),s=r.startsWith("//")?new URL(o.protocol+r):new URL(r),u=gn(s.pathname,t);s.origin===o.origin&&u!=null?r=u+s.search+s.hash:a=!0}catch{Xr(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:a,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var uj=["POST","PUT","PATCH","DELETE"];new Set(uj);var p7=["GET",...uj];new Set(p7);var $i=D.createContext(null);$i.displayName="DataRouter";var Sc=D.createContext(null);Sc.displayName="DataRouterState";var h7=D.createContext(!1),cj=D.createContext({isTransitioning:!1});cj.displayName="ViewTransition";var m7=D.createContext(new Map);m7.displayName="Fetchers";var y7=D.createContext(null);y7.displayName="Await";var br=D.createContext(null);br.displayName="Navigation";var Ll=D.createContext(null);Ll.displayName="Location";var Qr=D.createContext({outlet:null,matches:[],isDataRoute:!1});Qr.displayName="Route";var Cy=D.createContext(null);Cy.displayName="RouteError";var fj="REACT_ROUTER_ERROR",v7="REDIRECT",g7="ROUTE_ERROR_RESPONSE";function x7(e){if(e.startsWith(`${fj}:${v7}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function b7(e){if(e.startsWith(`${fj}:${g7}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new c7(t.status,t.statusText,t.data)}catch{}}function w7(e,{relative:t}={}){et(Fl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=D.useContext(br),{hash:a,pathname:o,search:s}=Bl(e,{relative:t}),u=o;return r!=="/"&&(u=o==="/"?r:pn([r,o])),n.createHref({pathname:u,search:s,hash:a})}function Fl(){return D.useContext(Ll)!=null}function Xn(){return et(Fl(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Ll).location}var dj="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pj(e){D.useContext(br).static||D.useLayoutEffect(e)}function Dt(){let{isDataRoute:e}=D.useContext(Qr);return e?M7():S7()}function S7(){et(Fl(),"useNavigate() may be used only in the context of a <Router> component.");let e=D.useContext($i),{basename:t,navigator:r}=D.useContext(br),{matches:n}=D.useContext(Qr),{pathname:a}=Xn(),o=JSON.stringify(ij(n)),s=D.useRef(!1);return pj(()=>{s.current=!0}),D.useCallback((f,d={})=>{if(Xr(s.current,dj),!s.current)return;if(typeof f=="number"){r.go(f);return}let m=oj(f,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:pn([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,o,a,e])}D.createContext(null);function jc(){let{matches:e}=D.useContext(Qr),t=e[e.length-1];return t?t.params:{}}function Bl(e,{relative:t}={}){let{matches:r}=D.useContext(Qr),{pathname:n}=Xn(),a=JSON.stringify(ij(r));return D.useMemo(()=>oj(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function j7(e,t){return hj(e,t)}function hj(e,t,r,n,a){var O;et(Fl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=D.useContext(br),{matches:s}=D.useContext(Qr),u=s[s.length-1],f=u?u.params:{},d=u?u.pathname:"/",m=u?u.pathnameBase:"/",h=u&&u.route;{let E=h&&h.path||"";yj(d,!h||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let g=Xn(),x;if(t){let E=typeof t=="string"?Ii(t):t;et(m==="/"||((O=E.pathname)==null?void 0:O.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${E.pathname}" was given in the \`location\` prop.`),x=E}else x=g;let j=x.pathname||"/",S=j;if(m!=="/"){let E=m.replace(/^\//,"").split("/");S="/"+j.replace(/^\//,"").split("/").slice(E.length).join("/")}let b=rj(e,{pathname:S});Xr(h||b!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Xr(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=P7(b&&b.map(E=>Object.assign({},E,{params:Object.assign({},f,E.params),pathname:pn([m,o.encodeLocation?o.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?m:pn([m,o.encodeLocation?o.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),s,r,n,a);return t&&A?D.createElement(Ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},A):A}function _7(){let e=D7(),t=f7(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:o},"ErrorBoundary")," or"," ",D.createElement("code",{style:o},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),r?D.createElement("pre",{style:a},r):null,s)}var A7=D.createElement(_7,null),mj=class extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=b7(e.digest);r&&(e=r)}let t=e!==void 0?D.createElement(Qr.Provider,{value:this.props.routeContext},D.createElement(Cy.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?D.createElement(O7,{error:e},t):t}};mj.contextType=h7;var Zd=new WeakMap;function O7({children:e,error:t}){let{basename:r}=D.useContext(br);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=x7(t.digest);if(n){let a=Zd.get(t);if(a)throw a;let o=sj(n.location,r);if(lj&&!Zd.get(t))if(o.isExternal||n.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:n.replace}));throw Zd.set(t,s),s}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return e}function E7({routeContext:e,match:t,children:r}){let n=D.useContext($i);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),D.createElement(Qr.Provider,{value:e},r)}function P7(e,t=[],r=null,n=null,a=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=r==null?void 0:r.errors;if(s!=null){let m=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);et(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,f=-1;if(r)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=m),h.route.id){let{loaderData:g,errors:x}=r,j=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!x||x[h.route.id]===void 0);if(h.route.lazy||j){u=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}let d=r&&n?(m,h)=>{var g,x;n(m,{location:r.location,params:((x=(g=r.matches)==null?void 0:g[0])==null?void 0:x.params)??{},unstable_pattern:d7(r.matches),errorInfo:h})}:void 0;return o.reduceRight((m,h,g)=>{let x,j=!1,S=null,b=null;r&&(x=s&&h.route.id?s[h.route.id]:void 0,S=h.route.errorElement||A7,u&&(f<0&&g===0?(yj("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,b=null):f===g&&(j=!0,b=h.route.hydrateFallbackElement||null)));let A=t.concat(o.slice(0,g+1)),O=()=>{let E;return x?E=S:j?E=b:h.route.Component?E=D.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=m,D.createElement(E7,{match:h,routeContext:{outlet:m,matches:A,isDataRoute:r!=null},children:E})};return r&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?D.createElement(mj,{location:r.location,revalidation:r.revalidation,component:S,error:x,children:O(),routeContext:{outlet:null,matches:A,isDataRoute:!0},onError:d}):O()},null)}function Dy(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function k7(e){let t=D.useContext($i);return et(t,Dy(e)),t}function N7(e){let t=D.useContext(Sc);return et(t,Dy(e)),t}function T7(e){let t=D.useContext(Qr);return et(t,Dy(e)),t}function My(e){let t=T7(e),r=t.matches[t.matches.length-1];return et(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function C7(){return My("useRouteId")}function D7(){var n;let e=D.useContext(Cy),t=N7("useRouteError"),r=My("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function M7(){let{router:e}=k7("useNavigate"),t=My("useNavigate"),r=D.useRef(!1);return pj(()=>{r.current=!0}),D.useCallback(async(a,o={})=>{Xr(r.current,dj),r.current&&(typeof a=="number"?await e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var zx={};function yj(e,t,r){!t&&!zx[e]&&(zx[e]=!0,Xr(!1,r))}D.memo(R7);function R7({routes:e,future:t,state:r,onError:n}){return hj(e,void 0,r,n,t)}function Kt(e){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function I7({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:o=!1,unstable_useTransitions:s}){et(!Fl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=D.useMemo(()=>({basename:u,navigator:a,static:o,unstable_useTransitions:s,future:{}}),[u,a,o,s]);typeof r=="string"&&(r=Ii(r));let{pathname:d="/",search:m="",hash:h="",state:g=null,key:x="default"}=r,j=D.useMemo(()=>{let S=gn(d,u);return S==null?null:{location:{pathname:S,search:m,hash:h,state:g,key:x},navigationType:n}},[u,d,m,h,g,x,n]);return Xr(j!=null,`<Router basename="${u}"> is not able to match the URL "${d}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:D.createElement(br.Provider,{value:f},D.createElement(Ll.Provider,{children:t,value:j}))}function $7({children:e,location:t}){return j7(s2(e),t)}function s2(e,t=[]){let r=[];return D.Children.forEach(e,(n,a)=>{if(!D.isValidElement(n))return;let o=[...t,a];if(n.type===D.Fragment){r.push.apply(r,s2(n.props.children,o));return}et(n.type===Kt,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!n.props.index||!n.props.children,"An index route cannot have child routes.");let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=s2(n.props.children,o)),r.push(s)}),r}var ju="get",_u="application/x-www-form-urlencoded";function _c(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function L7(e){return _c(e)&&e.tagName.toLowerCase()==="button"}function F7(e){return _c(e)&&e.tagName.toLowerCase()==="form"}function B7(e){return _c(e)&&e.tagName.toLowerCase()==="input"}function q7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function z7(e,t){return e.button===0&&(!t||t==="_self")&&!q7(e)}var uu=null;function U7(){if(uu===null)try{new FormData(document.createElement("form"),0),uu=!1}catch{uu=!0}return uu}var W7=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ep(e){return e!=null&&!W7.has(e)?(Xr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_u}"`),null):e}function H7(e,t){let r,n,a,o,s;if(F7(e)){let u=e.getAttribute("action");n=u?gn(u,t):null,r=e.getAttribute("method")||ju,a=ep(e.getAttribute("enctype"))||_u,o=new FormData(e)}else if(L7(e)||B7(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||u.getAttribute("action");if(n=f?gn(f,t):null,r=e.getAttribute("formmethod")||u.getAttribute("method")||ju,a=ep(e.getAttribute("formenctype"))||ep(u.getAttribute("enctype"))||_u,o=new FormData(u,e),!U7()){let{name:d,type:m,value:h}=e;if(m==="image"){let g=d?`${d}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else d&&o.append(d,h)}}else{if(_c(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ju,n=null,a=_u,s=e}return o&&a==="text/plain"&&(s=o,o=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ry(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function K7(e,t,r,n){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${n}`:a.pathname=`${a.pathname}.${n}`:a.pathname==="/"?a.pathname=`_root.${n}`:t&&gn(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function V7(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G7(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function X7(e,t,r){let n=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let s=await V7(o,r);return s.links?s.links():[]}return[]}));return Z7(n.flat(1).filter(G7).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ux(e,t,r,n,a,o){let s=(f,d)=>r[d]?f.route.id!==r[d].route.id:!0,u=(f,d)=>{var m;return r[d].pathname!==f.pathname||((m=r[d].route.path)==null?void 0:m.endsWith("*"))&&r[d].params["*"]!==f.params["*"]};return o==="assets"?t.filter((f,d)=>s(f,d)||u(f,d)):o==="data"?t.filter((f,d)=>{var h;let m=n.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(s(f,d)||u(f,d))return!0;if(f.route.shouldRevalidate){let g=f.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((h=r[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Y7(e,t,{includeHydrateFallback:r}={}){return Q7(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function Q7(e){return[...new Set(e)]}function J7(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Z7(e,t){let r=new Set;return new Set(t),e.reduce((n,a)=>{let o=JSON.stringify(J7(a));return r.has(o)||(r.add(o),n.push({key:o,link:a})),n},[])}function vj(){let e=D.useContext($i);return Ry(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ek(){let e=D.useContext(Sc);return Ry(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Iy=D.createContext(void 0);Iy.displayName="FrameworkContext";function gj(){let e=D.useContext(Iy);return Ry(e,"You must render this element inside a <HydratedRouter> element"),e}function tk(e,t){let r=D.useContext(Iy),[n,a]=D.useState(!1),[o,s]=D.useState(!1),{onFocus:u,onBlur:f,onMouseEnter:d,onMouseLeave:m,onTouchStart:h}=t,g=D.useRef(null);D.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let S=A=>{A.forEach(O=>{s(O.isIntersecting)})},b=new IntersectionObserver(S,{threshold:.5});return g.current&&b.observe(g.current),()=>{b.disconnect()}}},[e]),D.useEffect(()=>{if(n){let S=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(S)}}},[n]);let x=()=>{a(!0)},j=()=>{a(!1),s(!1)};return r?e!=="intent"?[o,g,{}]:[o,g,{onFocus:Io(u,x),onBlur:Io(f,j),onMouseEnter:Io(d,x),onMouseLeave:Io(m,j),onTouchStart:Io(h,x)}]:[!1,g,{}]}function Io(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function rk({page:e,...t}){let{router:r}=vj(),n=D.useMemo(()=>rj(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?D.createElement(ak,{page:e,matches:n,...t}):null}function nk(e){let{manifest:t,routeModules:r}=gj(),[n,a]=D.useState([]);return D.useEffect(()=>{let o=!1;return X7(e,t,r).then(s=>{o||a(s)}),()=>{o=!0}},[e,t,r]),n}function ak({page:e,matches:t,...r}){let n=Xn(),{future:a,manifest:o,routeModules:s}=gj(),{basename:u}=vj(),{loaderData:f,matches:d}=ek(),m=D.useMemo(()=>Ux(e,t,d,o,n,"data"),[e,t,d,o,n]),h=D.useMemo(()=>Ux(e,t,d,o,n,"assets"),[e,t,d,o,n]),g=D.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let S=new Set,b=!1;if(t.forEach(O=>{var N;let E=o.routes[O.route.id];!E||!E.hasLoader||(!m.some(_=>_.route.id===O.route.id)&&O.route.id in f&&((N=s[O.route.id])!=null&&N.shouldRevalidate)||E.hasClientLoader?b=!0:S.add(O.route.id))}),S.size===0)return[];let A=K7(e,u,a.unstable_trailingSlashAwareDataRequests,"data");return b&&S.size>0&&A.searchParams.set("_routes",t.filter(O=>S.has(O.route.id)).map(O=>O.route.id).join(",")),[A.pathname+A.search]},[u,a.unstable_trailingSlashAwareDataRequests,f,n,o,m,t,e,s]),x=D.useMemo(()=>Y7(h,o),[h,o]),j=nk(h);return D.createElement(D.Fragment,null,g.map(S=>D.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...r})),x.map(S=>D.createElement("link",{key:S,rel:"modulepreload",href:S,...r})),j.map(({key:S,link:b})=>D.createElement("link",{key:S,nonce:r.nonce,...b,crossOrigin:b.crossOrigin??r.crossOrigin})))}function ik(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var ok=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ok&&(window.__reactRouterVersion="7.13.0")}catch{}function lk({basename:e,children:t,unstable_useTransitions:r,window:n}){let a=D.useRef();a.current==null&&(a.current=qP({window:n,v5Compat:!0}));let o=a.current,[s,u]=D.useState({action:o.action,location:o.location}),f=D.useCallback(d=>{r===!1?u(d):D.startTransition(()=>u(d))},[r]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.createElement(I7,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o,unstable_useTransitions:r})}var xj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bj=D.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:a,reloadDocument:o,replace:s,state:u,target:f,to:d,preventScrollReset:m,viewTransition:h,unstable_defaultShouldRevalidate:g,...x},j){let{basename:S,unstable_useTransitions:b}=D.useContext(br),A=typeof d=="string"&&xj.test(d),O=sj(d,S);d=O.to;let E=w7(d,{relative:a}),[N,_,P]=tk(n,x),T=fk(d,{replace:s,state:u,target:f,preventScrollReset:m,relative:a,viewTransition:h,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b});function R(z){t&&t(z),z.defaultPrevented||T(z)}let $=D.createElement("a",{...x,...P,href:O.absoluteURL||E,onClick:O.isExternal||o?t:R,ref:ik(j,_),target:f,"data-discover":!A&&r==="render"?"true":void 0});return N&&!A?D.createElement(D.Fragment,null,$,D.createElement(rk,{page:E})):$});bj.displayName="Link";var sk=D.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:a=!1,style:o,to:s,viewTransition:u,children:f,...d},m){let h=Bl(s,{relative:d.relative}),g=Xn(),x=D.useContext(Sc),{navigator:j,basename:S}=D.useContext(br),b=x!=null&&yk(h)&&u===!0,A=j.encodeLocation?j.encodeLocation(h).pathname:h.pathname,O=g.pathname,E=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(O=O.toLowerCase(),E=E?E.toLowerCase():null,A=A.toLowerCase()),E&&S&&(E=gn(E,S)||E);const N=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let _=O===A||!a&&O.startsWith(A)&&O.charAt(N)==="/",P=E!=null&&(E===A||!a&&E.startsWith(A)&&E.charAt(A.length)==="/"),T={isActive:_,isPending:P,isTransitioning:b},R=_?t:void 0,$;typeof n=="function"?$=n(T):$=[n,_?"active":null,P?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let z=typeof o=="function"?o(T):o;return D.createElement(bj,{...d,"aria-current":R,className:$,ref:m,style:z,to:s,viewTransition:u},typeof f=="function"?f(T):f)});sk.displayName="NavLink";var uk=D.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:a,state:o,method:s=ju,action:u,onSubmit:f,relative:d,preventScrollReset:m,viewTransition:h,unstable_defaultShouldRevalidate:g,...x},j)=>{let{unstable_useTransitions:S}=D.useContext(br),b=hk(),A=mk(u,{relative:d}),O=s.toLowerCase()==="get"?"get":"post",E=typeof u=="string"&&xj.test(u),N=_=>{if(f&&f(_),_.defaultPrevented)return;_.preventDefault();let P=_.nativeEvent.submitter,T=(P==null?void 0:P.getAttribute("formmethod"))||s,R=()=>b(P||_.currentTarget,{fetcherKey:t,method:T,navigate:r,replace:a,state:o,relative:d,preventScrollReset:m,viewTransition:h,unstable_defaultShouldRevalidate:g});S&&r!==!1?D.startTransition(()=>R()):R()};return D.createElement("form",{ref:j,method:O,action:A,onSubmit:n?f:N,...x,"data-discover":!E&&e==="render"?"true":void 0})});uk.displayName="Form";function ck(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wj(e){let t=D.useContext($i);return et(t,ck(e)),t}function fk(e,{target:t,replace:r,state:n,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:u,unstable_useTransitions:f}={}){let d=Dt(),m=Xn(),h=Bl(e,{relative:o});return D.useCallback(g=>{if(z7(g,t)){g.preventDefault();let x=r!==void 0?r:rl(m)===rl(h),j=()=>d(e,{replace:x,state:n,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:u});f?D.startTransition(()=>j()):j()}},[m,d,h,r,n,t,e,a,o,s,u,f])}var dk=0,pk=()=>`__${String(++dk)}__`;function hk(){let{router:e}=wj("useSubmit"),{basename:t}=D.useContext(br),r=C7(),n=e.fetch,a=e.navigate;return D.useCallback(async(o,s={})=>{let{action:u,method:f,encType:d,formData:m,body:h}=H7(o,t);if(s.navigate===!1){let g=s.fetcherKey||pk();await n(g,r,s.action||u,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||f,formEncType:s.encType||d,flushSync:s.flushSync})}else await a(s.action||u,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:h,formMethod:s.method||f,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,a,t,r])}function mk(e,{relative:t}={}){let{basename:r}=D.useContext(br),n=D.useContext(Qr);et(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),o={...Bl(e||".",{relative:t})},s=Xn();if(e==null){o.search=s.search;let u=new URLSearchParams(o.search),f=u.getAll("index");if(f.some(m=>m==="")){u.delete("index"),f.filter(h=>h).forEach(h=>u.append("index",h));let m=u.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:pn([r,o.pathname])),rl(o)}function yk(e,{relative:t}={}){let r=D.useContext(cj);et(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=wj("useViewTransitionState"),a=Bl(e,{relative:t});if(!r.isTransitioning)return!1;let o=gn(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=gn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Au(a.pathname,s)!=null||Au(a.pathname,o)!=null}const vk=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],Ee=[5140,1204,1181,2302,930,1037,1799,2840,1909,1905,7378,6310,13960,9237,2152,1012,1115,748,793,2020,1960,3581,7495,1742,1415,2546,8782,5402,1290,905,545,650,1854,2764,1310,706,929,1299,672,5141,804,1279,1725,1108,1058,1558,1468];function ue(e,t,r){return[...vk.map((a,o)=>({prefecture:a,value:e[o],absoluteValue:t[o],absoluteUnit:r}))].sort((a,o)=>o.value-a.value).map((a,o)=>({...a,rank:o+1}))}const Wx=[1.65,1.4,1.28,1.36,1.17,1.17,1.45,1.39,1.41,1.47,1.42,1.39,1.39,1.41,1.14,1.07,1.14,1.15,1.43,1.29,1.34,1.4,1.5,1.44,1.32,1.4,1.67,1.48,1.38,1.55,1.42,1.26,1.52,1.46,1.36,1.45,1.6,1.5,1.6,1.67,1.32,1.38,1.46,1.5,1.69,1.59,2.2],Hx=[30.3,21.8,11.3,11.8,14.5,6,9.3,8.3,10,6.6,12,11.7,20.9,16.3,8.1,3.2,5.9,4.4,6.5,5.2,5.5,7.4,10.2,9.6,7.6,23,33.5,18.5,23.4,14.6,11.8,8.2,6.5,16.6,11.9,18.9,11.6,14.9,27.4,25.3,9.1,21,13,17,15,18.8,22],Kx=[264.1,218.2,224.1,254.3,226.8,228.5,210.1,192.4,219.8,242.5,174,202.1,334.7,222.6,228.3,256.7,296.7,259.4,252.3,223.8,218,202,220.8,232,237.2,338.3,275,258.1,254.1,286.6,291.7,270.2,317.4,276.4,277.2,325.1,296.2,274.5,311.8,305.6,283.5,292.1,293.3,292.4,261.5,253.6,245.9],gk=[13.9,17.7,16.9,11.4,21.7,18.6,17.3,14.3,13.5,14.9,10.2,11.6,10.6,10.4,16.1,13.7,13.9,16.3,21.3,18.3,16.5,15.5,11.5,16,11.5,14.5,12.8,13.5,17.8,21.2,16.3,18.9,15.8,13.5,18.5,19.5,16.3,19.3,20.5,11.5,16,20.2,15,18.5,18.4,20.4,10.7],Vx=[126,230.5,279,138.4,304.1,302.6,191.2,145.5,182.4,174.2,91,99.2,101.1,85.8,258.4,261.3,318.5,369.9,294,308.2,236.1,183.3,122.5,249.4,237.5,397.5,133.6,189.4,438.8,414.1,485,555.2,231,192.7,313.5,272,244.8,285.4,299.5,143.7,290.5,261.5,216,306.8,277.6,241.7,120.6],Gx=[4298,3867,3741,4423,3736,3786,4027,4765,4604,4372,4902,4818,5521,5122,3971,4281,4423,4121,4376,4148,4286,4437,4712,4281,4478,4821,4584,4721,4421,4127,3921,3871,4286,4421,4131,3987,4135,3928,3862,4278,3867,3798,3812,3911,3782,3741,3482],xk=[72,78,76,58,95,74,68,52,54,56,48,51,82,55,69,65,60,58,64,67,58,54,46,62,48,68,75,62,66,72,80,84,64,61,78,74,66,70,88,61,62,70,63,68,66,67,55],bk=[34.1,34.3,33,26.1,38.6,33.5,31.6,27.5,27,27.6,24.3,25.9,22.9,24.4,31.8,30.9,29.4,29,30.2,30.5,30.3,28.8,25.8,30,26.5,28.4,27.7,28.9,30.1,31.8,33.3,33.8,28.6,28.9,32.2,31.4,31,31.5,33.2,26.7,29.8,31.8,28.8,31.3,31,29.4,22.8],Xx=[22.6,19.8,21.3,17.2,19.4,17.8,18.9,17.8,18.4,19.2,15.8,16.2,13.9,14.8,20.1,16.8,17.2,16.4,18.9,17.6,17.2,16.8,15.9,18.2,15.4,16.8,17.8,17.2,15.2,18.9,18.4,19.2,17.4,17.8,18.9,14.8,17.2,18.4,20.4,18.2,18.8,19.4,18.2,19.8,20.4,19.2,16.8],Yx=[1.01,1.12,1.09,1.06,1.14,1.19,1.19,1.17,1.18,1.16,1.07,1.08,.96,1.08,1.12,1.28,1.26,1.4,1.2,1.35,1.23,1.24,1.27,1.26,1.31,1.06,1.09,1.2,1.14,1.24,1.43,1.43,1.26,1.35,1.27,1.26,1.28,1.25,1.21,1.27,1.46,1.38,1.44,1.38,1.43,1.54,1.7],wk=[80.9,79.3,80.6,81.7,80.5,81.4,80.6,80.9,81,81.1,81.4,81.5,81.8,81.9,81.3,81.7,82,82.1,81.9,82.7,81.9,82,82.4,81.9,82.8,81.4,81.2,81.8,82.4,81.6,81.4,82,82.2,82,81.5,82,82.1,81.4,81.4,82,82.2,82.2,82,82.3,81.6,81.5,80.7],Qx=[289,238,246,304,244,255,275,312,298,289,318,319,485,345,264,298,305,297,302,290,295,319,352,289,319,325,332,321,295,272,258,258,299,312,275,265,285,288,264,325,262,269,278,274,268,265,320],Jx=[56.3,68,72.5,59.3,74.6,73.8,68.9,63.8,67.2,65.4,55.4,56.2,44.8,53,68.5,76.8,72.4,75.2,68.4,71.4,70.5,67.8,62.4,68.9,69.4,62.8,52.8,59.2,68.8,66.8,72.8,74.8,66.8,63.8,67.8,68.4,66.8,67.8,65.4,56.2,67.4,65.8,68.4,68.4,68.8,68.4,42.8],Zx=[13478,1798,2654,1942,1168,898,2128,2048,1948,2248,1748,3428,238,848,2428,514,612,588,758,3348,1428,2228,3128,1062,712,702,2088,1018,548,668,782,812,1668,1328,1102,1022,1018,1328,568,3612,1358,1128,3498,1748,3082,5438,1024],e8=[41.2,38.9,37.8,42.1,35.4,36.8,39.2,40.1,39.8,40.5,44.2,44.8,52.8,48.2,38.4,35.2,37.8,35.4,40.2,38.8,38.4,41.2,43.8,40.2,40.8,46.2,48.4,44.8,42.4,40.8,36.8,35.4,40.2,41.8,39.8,38.4,39.2,38.8,37.8,44.2,37.8,39.4,39.8,40.2,40.8,40.2,42.8],t8=[42.8,38.2,36.8,48.2,34.8,37.2,41.8,48.4,47.2,48.8,56.2,56.8,72.4,62.8,40.2,41.8,48.2,43.8,46.2,48.2,44.8,51.2,55.8,45.2,51.8,62.4,56.8,58.2,56.4,42.8,39.8,38.4,48.8,52.4,40.8,38.4,41.8,40.2,37.8,52.4,38.8,40.2,43.8,42.4,40.8,39.8,44.2],r8=[.8,.4,.3,1.2,.3,.3,.6,2.1,1.4,2.8,3.4,2.8,4.2,3.2,.6,1.2,1.8,.8,1.2,.8,2.8,2.4,3.8,1.8,2.8,2.8,3.6,2.4,1.2,.8,.8,.4,1.2,1.4,.8,.6,.8,.8,.4,2.2,.6,.8,.8,.6,.6,.6,1.8],n8=[448,312,298,389,248,264,348,418,398,428,389,412,568,489,298,268,312,278,348,298,328,412,468,348,368,478,528,412,368,348,312,298,389,412,328,312,348,328,298,468,312,328,348,328,348,328,428],a8=[31.2,38.4,36.8,28.4,37.8,34.8,33.4,29.8,30.2,29.4,27.8,26.8,22.4,24.8,31.8,28.2,27.8,28.4,28.8,26.8,28.4,27.8,27.2,29.4,27.2,25.8,26.8,27.4,26.4,30.8,32.4,33.8,29.8,28.4,31.2,32.4,31.2,33.8,36.2,30.4,34.2,36.8,33.8,35.2,37.8,36.4,34.8],i8=[210,168,248,182,198,172,188,198,202,208,198,192,218,204,228,248,218,208,228,242,198,202,198,208,192,228,218,212,228,268,298,318,238,218,248,288,248,268,328,198,248,268,238,248,258,248,248],o8=[43,28,26,38,24,22,32,48,46,44,58,56,48,54,28,26,28,24,34,28,32,44,52,34,42,52,52,48,48,38,24,22,36,40,32,26,28,30,24,46,24,26,28,28,26,24,32],l8=[28,4,2,18,0,0,8,18,12,8,148,112,361,412,4,0,0,0,4,4,4,18,82,8,12,42,198,78,22,8,0,0,8,18,4,2,4,6,2,92,2,4,8,4,4,4,12],s8=[1248.4,1182.3,1198.4,1089.2,1298.4,1218.4,1098.2,948.2,1012.4,1048.2,744.2,796.2,988.4,813.2,1148.2,1198.4,1218.4,1248.2,1098.4,1148.2,1048.2,1098.4,982.4,1148.2,1048.2,1248.4,1048.2,1098.4,1148.2,1198.4,1298.4,1348.2,1148.4,1098.2,1248.4,1398.2,1248.4,1298.2,1685.4,1248.4,1468.9,1398.4,1348.2,1398.4,1448.2,1504.9,1348.4],u8=[82.4,68.2,71.4,84.2,68.4,72.4,74.2,78.4,76.2,78.4,68.2,72.4,118.4,82.4,74.2,82.4,94.2,84.4,82.4,78.4,74.2,82.4,84.2,78.4,82.4,102.4,88.4,84.2,82.4,78.4,84.2,82.4,88.4,86.2,82.4,84.2,84.4,82.4,94.2,94.4,84.2,86.4,86.2,84.4,82.4,82.4,84.2],c8=[198.4,168.2,171.4,194.2,178.4,172.4,184.2,188.4,186.2,188.4,178.2,182.4,248.4,212.4,184.2,198.4,214.2,204.4,198.4,188.4,184.2,192.4,198.2,188.4,192.4,228.4,212.4,204.2,198.4,194.4,198.2,198.4,208.4,206.2,198.4,204.2,204.4,198.4,218.2,218.4,204.2,208.4,206.2,204.4,198.4,198.4,204.2],f8=[1842.4,1618.4,1548.2,1382.4,1692.4,1498.4,1424.2,1298.4,1348.2,1382.4,1124.2,1198.4,756.4,1098.2,1548.4,1648.4,1548.4,1598.2,1448.4,1548.4,1398.2,1348.4,1198.2,1448.4,1348.4,1498.4,1348.2,1392.4,1448.4,1548.4,1732.2,1772.4,1492.4,1448.2,1548.4,1548.2,1498.4,1548.4,1597.2,1448.4,1548.4,1598.4,1498.2,1598.4,1548.2,1598.4,1648.4],d8=[348.4,298.2,312.4,328.4,298.4,312.2,328.4,348.2,338.4,342.4,312.2,322.4,298.4,318.2,312.4,328.4,342.4,348.2,328.4,338.4,328.2,338.4,328.4,338.2,342.4,348.4,328.2,338.4,348.4,358.4,368.2,378.4,348.4,342.2,358.4,368.2,358.4,368.4,378.2,348.4,368.4,378.4,368.2,378.4,388.2,378.4,398.4],p8=[258.4,198.2,172.4,228.4,188.4,182.2,208.4,198.2,194.4,198.4,160.2,178.4,315.4,212.2,182.4,198.4,218.4,198.2,218.4,198.4,192.2,198.4,198.4,208.2,208.4,268.4,248.2,228.4,228.4,278.4,278.2,258.4,218.4,228.2,298.4,258.2,248.4,278.4,278.2,238.4,258.4,258.4,238.2,248.4,278.2,248.4,268.4],h8=[158.4,220.2,178.4,138.4,222.4,168.2,152.4,132.2,134.4,138.4,112.2,118.4,148.4,118.2,162.4,158.4,158.4,162.2,148.4,158.4,142.2,138.4,122.4,148.2,138.4,158.4,128.2,138.4,148.4,162.4,176.2,182.4,148.4,142.2,158.4,168.2,158.4,168.4,172.2,112.4,158.4,168.4,158.2,168.4,168.2,158.4,162.4],m8=[6.84,7.28,7.48,5.92,7.82,7.24,6.48,4.98,5.42,5.48,3.82,4.28,4.28,3.92,6.48,6.82,7.24,7.48,6.24,6.84,5.48,5.24,4.48,6.24,5.24,7.24,5.48,5.92,6.48,7.48,8.24,8.48,6.84,6.28,7.48,8.24,7.48,8.48,9.28,6.84,9.28,9.48,8.24,8.48,9.28,8.48,8.24],y8=[48.4,42.2,44.4,48.4,42.4,42.2,46.4,52.2,52.4,54.4,58.2,58.4,82.4,68.2,44.4,48.4,52.4,48.2,48.4,48.4,48.2,52.4,58.4,48.2,52.4,62.4,62.2,58.4,52.4,48.4,48.2,44.4,52.4,52.2,48.4,48.2,48.4,48.4,44.2,58.4,44.4,48.4,48.2,48.4,48.2,48.4,52.4],v8=[398,342,338,412,332,348,368,428,418,412,462,458,612,498,368,412,428,408,418,408,402,442,498,402,428,468,498,462,428,388,368,362,412,428,388,378,388,378,358,458,368,378,388,378,368,362,398],g8=[268,238,234,282,228,242,258,298,288,282,318,312,428,342,252,282,298,278,288,278,272,302,342,272,298,322,342,318,292,262,248,244,282,292,262,258,262,256,244,312,252,258,268,258,252,248,272],x8=[1010,951,952,1023,951,955,955,1005,1004,985,1078,1076,1163,1162,985,998,998,984,988,998,1001,1034,1077,973,967,1008,1114,1052,986,980,957,962,982,998,979,980,970,980,952,992,956,953,952,956,952,953,952],b8=[100.2,97.8,97.4,99.8,97.2,97.6,98.4,101.2,101,100.8,103.2,102.8,106.4,104.2,98.8,99.4,100.2,99.2,100.2,99.8,99.4,101.2,102.8,99.4,101.2,103.4,104.2,102.8,101.2,99.4,98.4,98.2,100.2,101.2,99.4,98.8,99.4,99.2,98.4,101.2,98.4,98.8,99.2,98.8,98.4,98.2,100.8],w8=[1698,1548,1648,1848,1448,1748,1748,1948,1998,1948,1948,1998,1748,1948,1548,1648,1748,1648,2148,2048,1948,2148,1998,1948,1848,1748,1748,1848,1748,1848,1748,1748,1948,1948,1948,1948,1948,1848,1948,1948,1948,1848,1948,1948,1948,1848,2148],S8=[1078,1248,1348,1148,1748,1548,1348,1248,1648,1348,1248,1648,1528,1748,1848,2348,2248,2148,1148,948,1748,2448,1548,2148,1748,1548,1348,1648,1548,1648,1748,1848,1048,1248,1748,1548,1248,1748,2948,1748,1948,2148,2248,1948,2448,2548,2148],j8=[248,198,194,248,178,182,224,298,312,308,348,368,368,388,198,218,248,228,278,228,248,338,348,278,298,298,368,318,268,258,228,218,298,312,268,248,268,268,228,348,248,268,298,268,268,258,328],_8=[38.4,42.8,40.2,36.8,44.2,42.4,40.2,36.8,38.4,38.2,34.8,34.2,32.8,33.8,40.2,38.4,40.8,38.4,38.2,38.4,36.8,36.2,34.8,37.2,35.8,37.2,37.8,36.8,36.2,40.8,42.4,44.2,38.4,37.8,40.8,40.2,39.8,42.4,44.8,38.4,40.8,42.4,40.2,42.4,44.8,42.8,34.8],A8=[34.2,32.8,31.4,28.4,30.8,29.8,31.2,28.8,30.2,29.8,26.8,27.2,24.8,25.8,29.8,26.8,28.4,27.8,28.4,27.2,27.8,27.2,26.2,28.4,26.8,27.2,28.4,27.8,27.2,30.8,30.2,31.8,28.4,28.2,30.8,29.8,28.4,30.8,32.4,30.2,31.8,32.4,30.8,32.4,34.2,32.8,26.8],O8=[38.4,36.8,34.8,34.2,36.8,34.2,33.8,31.8,32.4,32.2,30.8,31.2,32.4,31.8,33.8,34.8,34.2,33.8,33.2,32.8,32.4,32.2,31.8,33.8,32.8,36.2,38.4,35.8,34.2,36.8,36.2,37.4,35.8,35.2,36.8,37.2,35.8,37.4,40.2,37.8,38.4,40.2,38.4,40.2,41.8,40.8,38.4],E8=[28400,24800,24200,26800,23800,24200,25200,27800,28200,27400,30200,29800,31800,30400,25800,26200,26800,25800,27200,26400,26200,28400,29800,26800,28200,29400,31200,29200,27400,26200,24800,24400,27800,28400,26200,25800,26200,26400,24800,28400,25200,25800,27200,26800,26400,26200,26800],P8=[6200,5800,5600,6e3,5800,5600,5800,6200,6400,6200,6600,6400,6800,6600,5800,5600,5800,5600,6200,5800,6e3,6200,6400,6e3,6200,6600,7200,6600,6200,6e3,5800,5800,6200,6400,6e3,6200,6200,6400,6800,6600,6200,6800,6600,6600,6800,6600,6400],k8=[-1.2,-4.8,-4.2,-.8,-6.8,-4.2,-2.8,.8,.2,.4,4.2,3.8,8.4,4.8,-2.8,-1.2,-.2,-1.8,-.4,-1.2,-1.4,.2,2.4,-.8,.4,.8,2.2,1.2,-1.2,-1.8,-2.4,-3.2,-.4,.2,-2.8,-2.4,-2.2,-3.2,-3.8,1.2,-2.8,-3.2,-1.8,-2.4,-2.8,-2.8,.8],N8=[118.4,138.2,142.4,118.4,148.4,142.2,128.4,118.2,122.4,118.4,108.2,108.4,78.4,92.2,132.4,148.4,128.4,148.2,128.4,138.4,132.2,122.4,108.4,128.2,122.4,108.4,92.2,108.4,118.4,128.4,142.2,148.4,128.4,118.2,132.4,132.2,128.4,132.4,132.2,108.4,132.4,132.4,128.2,132.4,132.2,128.4,98.4],T8=[898,842,818,862,848,828,858,918,912,908,948,938,868,918,848,828,842,828,882,818,842,892,938,862,892,912,958,918,882,872,848,838,878,892,868,878,868,872,848,912,868,872,888,872,882,878,928],C8=[57.2,54.8,55.4,60.2,52.8,55.2,56.4,60.8,60.4,60.2,62.8,62.4,65.4,63.8,57.8,58.4,59.8,58.8,59.2,59.4,59.8,61.2,63.2,59.8,61.8,61.4,62.4,61.8,60.4,59.2,57.4,56.8,60.2,61.4,59.2,58.8,59.2,58.8,57.8,62.4,58.8,58.4,59.8,58.8,59.2,58.4,63.4],D8=[68.4,65.2,64.8,70.2,62.4,64.8,67.2,71.2,70.8,70.4,74.2,74.8,80.4,76.8,65.8,63.2,66.4,63.8,67.8,66.4,66.8,70.2,74.8,67.2,68.8,76.4,78.2,74.8,70.4,67.8,63.8,62.4,68.4,70.8,66.8,65.2,66.8,65.8,64.8,74.2,64.8,66.4,67.8,68.2,68.8,67.8,72.8],M8=[58.4,54.2,53.8,62.2,51.4,53.8,57.2,63.2,62.8,62.4,68.2,68.8,76.4,70.8,55.8,52.2,56.4,52.8,57.8,55.4,55.8,62.2,68.8,57.2,60.8,70.4,72.2,67.8,62.4,58.8,52.8,51.4,59.4,62.8,56.8,55.2,56.8,55.8,53.8,67.2,54.8,56.4,58.8,59.2,59.8,58.8,64.8],R8=[28.4,24.2,23.8,30.2,21.4,22.8,26.2,30.2,29.8,29.4,34.2,33.8,44.4,37.8,24.8,21.2,23.4,21.8,26.8,24.4,24.8,28.2,33.8,25.2,27.8,36.4,40.2,34.8,29.4,26.8,21.8,20.4,26.4,28.8,23.8,22.2,23.8,22.8,21.8,33.2,22.8,23.4,25.8,26.2,26.8,25.8,31.8],I8=[28.4,24.2,23.8,28.2,21.4,22.8,25.2,28.2,27.8,27.4,30.2,29.8,38.4,32.8,23.8,20.2,22.4,20.8,24.8,23.4,23.8,26.2,29.8,23.2,24.8,30.4,34.2,28.8,25.4,23.8,20.8,19.4,24.4,26.8,22.8,21.2,22.8,21.8,20.8,29.2,21.8,22.4,23.8,24.2,24.8,23.8,27.8],$8=[18.4,14.2,13.8,18.2,11.4,12.8,15.2,18.2,17.8,17.4,20.2,19.8,28.4,22.8,13.8,10.2,12.4,10.8,14.8,13.4,13.8,16.2,19.8,13.2,14.8,20.4,24.2,18.8,15.4,13.8,10.8,9.4,14.4,16.8,12.8,11.2,12.8,11.8,10.8,19.2,11.8,12.4,13.8,14.2,14.8,13.8,17.8],L8=[.474,.261,.285,.607,.258,.31,.422,.594,.563,.569,.857,.826,1.064,.954,.385,.508,.535,.44,.48,.483,.528,.68,.876,.528,.631,.618,.809,.684,.411,.335,.308,.292,.524,.614,.363,.337,.412,.341,.269,.726,.32,.327,.43,.354,.32,.307,.472],F8=[28,22,18,24,14,20,22,28,30,32,36,38,20,32,16,28,30,24,32,28,26,34,38,28,32,28,26,28,28,30,30,28,30,32,30,30,32,30,28,34,32,28,32,30,36,42,38],B8=[498,510,514,489,518,516,502,492,494,492,476,480,462,474,506,498,496,500,488,496,490,486,478,490,484,482,478,482,486,490,498,500,488,486,492,492,490,492,496,484,494,496,492,494,494,492,482],q8=[94,98,100,92,102,100,96,92,94,92,88,90,84,88,98,96,96,98,92,96,92,90,88,92,90,90,88,90,90,92,96,98,92,90,94,94,92,94,96,90,94,96,92,94,94,92,92],z8=[1248,428,384,684,348,392,468,592,648,712,824,948,1248,1124,484,548,692,512,898,724,548,892,948,548,784,1248,1024,824,648,712,898,724,892,812,712,724,692,712,648,1024,612,684,724,848,712,724,1248],U8=[84.2,78.4,78.8,86.2,76.8,78.4,82.4,86.8,87.2,87.4,91.2,90.8,94.2,92.4,82.8,86.4,88.2,86.8,87.4,88.2,87.4,89.2,91.8,87.4,89.8,90.4,91.2,90.4,89.2,86.4,83.4,82.8,87.4,88.2,84.8,84.2,85.8,84.8,82.8,89.4,83.4,84.2,86.4,84.8,84.2,83.8,87.8],W8=[3.8,3.4,3.8,3.2,3.8,3.6,3.4,3.2,3.2,3.4,2.8,3,2.2,2.4,3.4,3.8,3.4,3.8,3.8,3.8,3.4,3.2,2.8,3.4,3.4,3.8,2.8,3.2,3.8,3.8,4.2,4.4,3.4,3.2,3.8,3.8,3.8,3.8,4.2,3.2,3.8,3.8,3.4,3.8,3.8,3.8,3.4],H8=[42,34,32,52,30,32,38,54,52,54,68,72,98,84,38,42,48,40,46,42,44,58,72,44,56,68,72,64,52,42,36,34,48,54,38,36,40,38,34,62,36,38,42,38,36,36,52],K8=[124,68,62,94,58,64,72,88,92,96,112,118,148,138,72,82,98,76,112,98,82,118,128,82,108,148,128,112,92,98,118,108,112,108,98,108,98,108,94,128,88,94,108,108,98,98,148],V8=[42.8,54.2,58.4,46.2,62.4,58.8,52.4,50.2,52.4,50.4,44.2,44.8,24.8,38.2,54.4,62.8,54.4,62.2,52.4,58.4,54.2,50.4,48.4,54.2,52.4,44.4,40.2,46.4,52.4,54.4,58.2,62.4,52.4,50.2,56.4,54.2,52.4,54.4,56.2,44.4,56.4,56.4,54.2,56.4,56.2,54.4,38.4],G8=[124.4,119.5,111,23.8,108.9,105.7,87,22.4,20.8,21.4,11.2,7.8,9.4,5.8,68.4,98.4,88.2,78.4,22.4,85.6,44.8,10.2,24.8,34.8,64.2,28.4,24.8,38.4,32.4,22.4,44.8,68.2,28.4,18.4,24.8,18.4,14.8,14.2,8.8,8.4,8.8,12.4,10.4,12.8,8.2,3.8,0],X8=[.8,2.4,3.8,8.4,4.8,8.4,10.8,24.8,22.4,32.4,28.4,18.8,12.4,16.8,8.4,6.8,8.4,8.8,20.4,14.8,18.4,14.2,18.8,14.8,12.4,8.8,12.4,10.8,12.4,12.8,6.4,4.8,14.8,12.4,8.4,12.8,10.4,12.8,8.4,14.8,12.8,12.4,14.8,14.2,16.4,16.8,4.2],Y8=[248,62,68,52,42,58,82,28,34,42,18,22,12,18,62,48,42,38,44,94,52,48,28,48,28,42,24,52,38,58,24,28,48,68,28,38,32,62,28,52,22,42,78,82,62,48,28],Q8=[62.4,54.8,52.4,64.2,48.4,52.8,58.4,68.4,64.8,68.2,72.4,68.8,58.4,64.2,58.4,68.4,72.4,68.2,64.8,68.4,64.8,72.4,78.4,68.4,72.8,68.4,62.4,68.8,64.8,62.4,58.4,54.8,68.4,68.2,62.4,64.8,68.4,62.4,52.4,72.8,62.4,62.8,68.4,68.8,62.4,62.8,72.8],J8=[14.8,18.4,16.8,14.2,18.4,16.8,16.4,16.8,16.4,18.4,14.2,14.8,8.4,11.8,18.4,16.8,16.4,16.8,14.8,14.2,16.4,14.2,13.8,16.4,12.8,12.4,12.8,14.2,13.8,14.8,16.8,15.8,14.2,13.8,15.8,15.8,14.8,15.4,16.8,13.8,15.8,16.4,14.8,15.8,16.4,15.4,10.4],Z8=[18,14,16,18,14,16,16,20,18,18,24,22,28,24,16,18,20,18,22,20,18,20,22,18,20,24,22,22,20,18,14,16,18,18,16,16,18,16,14,20,16,16,18,16,16,16,18],eb=[71,66,77,57,72,72,71,31,54,67,31,29,36,39,68,67,68,74,78,79,81,64,42,64,51,74,30,67,77,77,74,78,68,72,71,76,47,71,84,45,45,59,62,71,76,65,45],tb=[2,.2,.4,4.5,.7,.3,.9,.8,-.1,-.1,2.1,5,7.3,4.1,-.5,.1,1,.2,-.2,.7,.1,.2,2.7,.6,1,3.7,3.7,2.5,0,-.5,-.3,-.4,1.2,1.7,.6,-.4,0,-.4,-.2,5.5,2.8,1.2,3.6,2.3,.3,-.5,7.2],rb=[.99,1.18,1.22,1.15,1.28,1.38,1.38,1.38,1.28,1.38,1.12,1.26,1.76,.9,1.42,1.64,1.46,1.86,1.52,1.38,1.58,1.38,1.24,1.32,1.24,1.28,1.06,1.12,1.04,1.08,1.48,1.54,1.28,1.24,1.22,1.38,1.28,1.22,1.28,1.06,1.24,1.14,1.18,1.22,1.28,1.28,1.12],nb=[42.8,38.4,36.8,36.2,36.4,34.8,35.8,35.4,34.8,35.2,37.8,38.2,37.4,39.2,35.8,32.9,34.8,32.7,35.2,34.4,34.8,36.2,34.8,35.4,34.2,41.8,41.3,38.8,37.4,37.8,35.4,34.8,36.2,37.4,36.8,36.4,36.2,36.8,37.2,40.2,37.4,38.8,38.2,37.8,38.4,38.8,44.5],ab=[24.8,18.4,20.2,28.4,16.8,20.4,22.4,26.8,24.8,24.2,28.4,28.8,32.4,30.8,22.4,28.4,28.8,28.2,24.8,26.4,26.8,28.4,30.4,26.4,30.8,32.4,28.4,26.8,22.4,18.8,20.4,22.4,24.8,26.4,22.8,18.4,22.4,16.8,18.4,28.4,20.4,22.8,24.4,22.8,24.4,26.4,30.8],ib=[48.2,18.4,22.4,12.8,24.8,28.4,18.2,12.4,10.8,14.2,8.4,9.2,6.4,7.8,16.8,22.4,18.8,24.8,18.4,22.8,14.8,14.2,12.4,18.4,14.8,12.8,16.8,12.4,10.8,16.4,28.4,24.8,18.4,14.8,12.4,22.4,18.8,16.4,22.4,16.4,28.4,22.4,28.8,24.4,38.4,44.8,32.4],ob=[2.8,3.2,2.8,2.8,3.4,2.6,2.6,2.4,2.2,2.2,2.8,2.8,3.2,3,2.4,1.4,1.8,1.4,2.4,1.8,1.8,2.2,2.4,2.2,1.8,2.8,3.2,2.8,2.6,2.8,1.8,1.8,2.2,2.4,2.4,2.4,2.2,2.8,2.8,3,2.8,3,2.8,2.8,3,3.2,3.8],lb=[18.4,16.8,14.8,16.2,14.2,14.8,15.4,14.8,13.8,14.2,14.8,15.2,18.4,16.8,14.2,10.4,12.8,10.8,12.4,12.8,12.4,14.2,13.8,13.4,12.8,20.4,22.8,16.8,14.8,16.4,12.4,12.8,14.8,16.4,14.8,14.8,14.2,16.4,18.4,18.4,14.8,16.4,15.8,16.8,18.4,16.8,28.4],yr=[{id:"divorce-rate",category:"人口・世帯",title:"離婚率（人口千対）",description:"人口1,000人あたりの離婚件数",unit:"件",year:2023,source:"厚生労働省 人口動態統計（2023年）確定数",data:ue(Wx,Ee.map((e,t)=>Math.round(Wx[t]*e)),"件"),yearlyData:[{year:1990,value:1.28},{year:1995,value:1.6},{year:2e3,value:2.1},{year:2005,value:2.08},{year:2010,value:1.99},{year:2015,value:1.8},{year:2018,value:1.68},{year:2020,value:1.57},{year:2022,value:1.47}],analysis:"沖縄県が2.10件と全国最高。富山・石川・福井など北陸3県は1.1件台と最低水準。3世代同居率の高さや地域コミュニティの強さが離婚を抑制していると考えられる。",analysisLong:`沖縄県が2.10件と全国最高。富山・石川・福井など北陸3県は1.06〜1.13件と全国最低水準。

北陸で低い背景：持ち家率の高さ（富山76.8%・全国最高）・3世代同居率の高さ・地域コミュニティの強さが複合的に作用。住居という共有財産が夫婦の経済的紐帯を強めている。

沖縄で高い背景：若年人口の多さ・早婚文化・経済的困難が重なっている。離婚・再婚への文化的許容度も影響しているとされる。

世界との比較：日本1.47件はアメリカ（2.5件）の約6割。OECD諸国の中では低〜中程度の水準。1990年の1.28件から上昇しており、社会の個人化・核家族化が進んでいることが反映されている。`,worldData:[{country:"日本（全国平均）",value:1.47,unit:"件"},{country:"韓国",value:2.1,unit:"件"},{country:"フランス",value:1.9,unit:"件"},{country:"ドイツ",value:1.8,unit:"件"},{country:"アメリカ",value:2.5,unit:"件"},{country:"スウェーデン",value:2.4,unit:"件"}],relatedIds:["homeownership","birth-rate","pop-future-2050"]},{id:"birth-rate",category:"人口・世帯",title:"合計特殊出生率",description:"1人の女性が生涯に産む子どもの数の推計値",unit:"",year:2024,source:"厚生労働省 人口動態統計（2024年）概数",data:ue(Yx,Ee.map((e,t)=>Math.round(Yx[t]*e*8)),"人（出生数推計）"),yearlyData:[{year:1990,value:1.54},{year:1995,value:1.42},{year:2e3,value:1.36},{year:2005,value:1.26},{year:2010,value:1.39},{year:2015,value:1.45},{year:2018,value:1.42},{year:2020,value:1.33},{year:2022,value:1.26}],analysis:"沖縄県が1.70と全国最高で唯一1.70台を維持。東京都が1.04と全国最低。全国平均は1.26で2022年時点で過去最低水準。",analysisLong:`沖縄県が1.70と全国最高で唯一1.70台を維持。宮崎1.54・熊本1.55・佐賀1.56と九州南部が上位。東京都は1.04と全国最低で2022年に初めて1.0台に突入した。

出生率が高い地域の共通点：若年人口が多い・地域コミュニティが強い・子育てを地域で分担する文化がある。沖縄の「ゆいまーる（相互扶助）」文化が典型例。

東京で低い理由：住居費の高さ・長い通勤時間・晩婚化・保育所不足・キャリアとの両立困難が複合的に作用。

世界との比較：日本1.26はOECD平均1.59を大きく下回る。韓国0.72は世界最低水準。フランス1.84は充実した育児支援・税制優遇・保育インフラによって高水準を維持している。`,worldData:[{country:"日本（全国平均）",value:1.26,unit:""},{country:"韓国",value:.72,unit:""},{country:"フランス",value:1.84,unit:""},{country:"アメリカ",value:1.66,unit:""},{country:"スウェーデン",value:1.67,unit:""},{country:"OECD平均",value:1.59,unit:""}],relatedIds:["nursery-waiting","nursery-worker","commute-time","pop-future-2050"]},{id:"unmarried-rate",category:"人口・世帯",title:"未婚率（30代男性）",description:"30〜39歳男性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(e8,Ee.map((e,t)=>Math.round(e8[t]*e*.06)),"千人（未婚30代男性推計）"),yearlyData:[{year:1990,value:32.6},{year:1995,value:37.3},{year:2e3,value:42.9},{year:2005,value:47.1},{year:2010,value:47.3},{year:2015,value:47.1},{year:2020,value:51.8}],analysis:"東京都が52.8%と全国最高で、30代男性の2人に1人以上が未婚。全国平均は51.8%と過去最高水準。秋田・山形・福井など地方県は35〜38%台と低い。"},{id:"unmarried-20s-male",category:"人口・世帯",title:"未婚率（20代男性）",description:"20〜29歳男性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(D8,Ee.map((e,t)=>Math.round(D8[t]*e*.06)),"千人（未婚20代男性推計）"),yearlyData:[{year:1990,value:64.4},{year:2e3,value:69.3},{year:2010,value:71.8},{year:2015,value:72.4},{year:2020,value:78.4}],analysis:"東京都が80.4%と全国最高。20代男性の約8割が未婚の時代。地方県は65〜68%と都市部より低い傾向。"},{id:"unmarried-20s-female",category:"人口・世帯",title:"未婚率（20代女性）",description:"20〜29歳女性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(M8,Ee.map((e,t)=>Math.round(M8[t]*e*.06)),"千人（未婚20代女性推計）"),yearlyData:[{year:1990,value:54},{year:2e3,value:60.2},{year:2010,value:64.8},{year:2015,value:66.2},{year:2020,value:70.2}],analysis:"東京都が76.4%と全国最高。沖縄・地方県では54〜56%台と都市部より低い。"},{id:"unmarried-30s-female",category:"人口・世帯",title:"未婚率（30代女性）",description:"30〜39歳女性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(R8,Ee.map((e,t)=>Math.round(R8[t]*e*.06)),"千人（未婚30代女性推計）"),yearlyData:[{year:1990,value:13.9},{year:2e3,value:26.6},{year:2010,value:34.5},{year:2015,value:35.6},{year:2020,value:38.4}],analysis:"東京都が44.4%と全国最高。地方県は21〜25%台。30代女性の未婚率は過去30年で急上昇。"},{id:"unmarried-40s-male",category:"人口・世帯",title:"未婚率（40代男性）",description:"40〜49歳男性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue(I8,Ee.map((e,t)=>Math.round(I8[t]*e*.06)),"千人（未婚40代男性推計）"),yearlyData:[{year:1990,value:5.6},{year:2e3,value:12.6},{year:2010,value:20.1},{year:2015,value:23.4},{year:2020,value:28.4}],analysis:"東京都が38.4%と全国最高。40代男性の未婚率は2000年比で約3倍に増加。"},{id:"unmarried-40s-female",category:"人口・世帯",title:"未婚率（40代女性）",description:"40〜49歳女性の未婚率",unit:"%",year:2020,source:"総務省 国勢調査（2020年）",data:ue($8,Ee.map((e,t)=>Math.round($8[t]*e*.06)),"千人（未婚40代女性推計）"),yearlyData:[{year:1990,value:3.3},{year:2e3,value:7.2},{year:2010,value:13.9},{year:2015,value:16.8},{year:2020,value:20.2}],analysis:"東京都が28.4%と全国最高。40代女性の未婚率は東京では約3割に迫る。"},{id:"foreigner-rate",category:"人口・世帯",title:"外国人比率",description:"総人口に占める外国人の割合",unit:"%",year:2022,source:"総務省 住民基本台帳（2022年）",data:ue(r8,Ee.map((e,t)=>Math.round(r8[t]*e/100*1e3)),"人（外国人数）"),yearlyData:[{year:2010,value:1.6},{year:2015,value:1.7},{year:2018,value:2.1},{year:2019,value:2.3},{year:2020,value:2.2},{year:2022,value:2.5}],analysis:"東京都が4.2%と全国最高。愛知・神奈川・埼玉など製造業・都市圏で高い。岩手・秋田・高知など地方県は0.3〜0.4%と低い。"},{id:"migration-rate",category:"人口・世帯",title:"転入超過率（人口千対）",description:"人口千人あたりの転入超過数（プラスが転入超過・人口増）",unit:"人",year:2022,source:"総務省 住民基本台帳人口移動報告（2022年）",data:ue(k8,Ee.map((e,t)=>Math.round(Math.abs(k8[t])*e/1e3)),"人（移動数）"),yearlyData:[{year:2018,value:1.2},{year:2019,value:1.8},{year:2020,value:.8},{year:2021,value:1.2},{year:2022,value:1.4}],analysis:"東京都（+8.4）・神奈川（+4.8）・埼玉（+4.2）が転入超過。秋田（-6.8）・青森（-4.8）・岩手（-4.2）が転出超過。人口の一極集中が続いている。"},{id:"working-age-rate",category:"人口・世帯",title:"生産年齢人口比率",description:"総人口に占める15〜64歳の割合",unit:"%",year:2022,source:"総務省 住民基本台帳（2022年）",data:ue(C8,Ee.map((e,t)=>Math.round(C8[t]*e/100)),"千人（生産年齢人口）"),yearlyData:[{year:2e3,value:67.9},{year:2005,value:66.1},{year:2010,value:63.8},{year:2015,value:60.7},{year:2020,value:59.5},{year:2022,value:59.4}],analysis:"東京都（65.4%）・沖縄（63.4%）・愛知（63.2%）が高い。秋田（52.8%）・高知（57.8%）・島根（56.8%）は低く、高齢化の進行が顕著。"},{id:"doctor-count",category:"医療",title:"医師数（人口10万人対）",description:"人口10万人あたりの医師数（全科合計）",unit:"人",year:2022,source:"厚生労働省 医師・歯科医師・薬剤師統計（2022年）",data:ue(Kx,Ee.map((e,t)=>Math.round(Kx[t]*e/100)),"人"),yearlyData:[{year:2010,value:219},{year:2012,value:227},{year:2014,value:233},{year:2016,value:240.1},{year:2018,value:246.7},{year:2020,value:256.6},{year:2022,value:269}],analysis:"京都府（338人）・東京都（334人）・徳島県（325人）が上位。最少は埼玉県の174人。",analysisLong:`人口10万人あたりの医師数は京都府338人・東京都334人・徳島県325人が上位。最少は埼玉県の174人で全国平均の65%しかいない。

「医師は東京に集中」というイメージは正確ではない。医師数が多い地域には大学病院を擁する地方都市が多く、医師は大学病院を拠点に周辺病院へ派遣される仕組みが影響している。

首都圏ベッドタウンの医師不足が深刻。埼玉174人・千葉202人は全国平均を大幅に下回る。急速な人口増加に医療インフラ整備が追いつかなかった結果だ。

産婦人科・精神科の専門科ごとの偏在はさらに深刻で、地域によっては産婦人科医が人口10万人あたり5人を下回る地域もある。

世界との比較：日本269人はOECD平均360人を下回る。ドイツ440人・フランス322人と比べると大幅に少なく、医師数の絶対的不足と偏在の解消が急務。`,worldData:[{country:"日本（全国平均）",value:269,unit:"人"},{country:"韓国",value:251,unit:"人"},{country:"フランス",value:322,unit:"人"},{country:"ドイツ",value:440,unit:"人"},{country:"アメリカ",value:261,unit:"人"},{country:"OECD平均",value:360,unit:"人"}],relatedIds:["nurse-count","hospital-count","medical-cost"]},{id:"nurse-count",category:"医療",title:"看護師数（人口10万人対）",description:"人口10万人あたりの就業看護師数",unit:"人",year:2022,source:"厚生労働省 衛生行政報告例（2022年）",data:ue(s8,Ee.map((e,t)=>Math.round(s8[t]*e/100)),"人"),yearlyData:[{year:2012,value:802.3},{year:2014,value:854.4},{year:2016,value:912.2},{year:2018,value:964.8},{year:2020,value:1015.4},{year:2022,value:1089.2}],analysis:"高知県が1,685人と全国最高。最少は埼玉県の744人。首都圏は看護師も不足傾向。"},{id:"dentist-count",category:"医療",title:"歯科医師数（人口10万人対）",description:"人口10万人あたりの就業歯科医師数",unit:"人",year:2022,source:"厚生労働省 医師・歯科医師・薬剤師統計（2022年）",data:ue(u8,Ee.map((e,t)=>Math.round(u8[t]*e/100)),"人"),yearlyData:[{year:2010,value:75.8},{year:2014,value:78.4},{year:2018,value:80.2},{year:2022,value:82.4}],analysis:"東京都が118人と全国最高。最少は埼玉県の68人。全国平均は82人。"},{id:"pharmacist-count",category:"医療",title:"薬剤師数（人口10万人対）",description:"人口10万人あたりの就業薬剤師数",unit:"人",year:2022,source:"厚生労働省 医師・歯科医師・薬剤師統計（2022年）",data:ue(c8,Ee.map((e,t)=>Math.round(c8[t]*e/100)),"人"),yearlyData:[{year:2010,value:168.2},{year:2014,value:178.4},{year:2018,value:188.2},{year:2022,value:198.4}],analysis:"東京都が248人と全国最高。大都市圏・医療機関が多い地域で高い傾向。"},{id:"hospital-count",category:"医療",title:"病院数（人口10万人対）",description:"人口10万人あたりの病院数",unit:"院",year:2022,source:"厚生労働省 医療施設調査（2022年）",data:ue(m8,Ee.map((e,t)=>Math.round(m8[t]*e/100)),"院"),yearlyData:[{year:2010,value:6.8},{year:2014,value:6.6},{year:2018,value:6.5},{year:2022,value:6.4}],analysis:"高知県が9.3院と全国最高。九州・四国で高い傾向。埼玉県が3.8院と全国最低。"},{id:"medical-cost",category:"医療",title:"一人あたり医療費",description:"都道府県民一人あたりの年間医療費",unit:"万円",year:2022,source:"厚生労働省 医療費の地域差分析（2022年）",data:ue(O8,Ee.map((e,t)=>Math.round(O8[t]*e/10)),"億円（医療費総額）"),yearlyData:[{year:2015,value:33.2},{year:2018,value:35.4},{year:2020,value:33.8},{year:2022,value:35.8}],analysis:"高知県（40.2万円）・宮崎県（41.8万円）・大分県（40.2万円）が上位。病気になりやすい・医療機関受診率が高い地域で多い。埼玉・千葉など首都圏は低い。"},{id:"care-worker",category:"福祉・介護",title:"介護職員数（人口10万人対）",description:"人口10万人あたりの介護職員数",unit:"人",year:2022,source:"厚生労働省 介護サービス施設・事業所調査（2022年）",data:ue(f8,Ee.map((e,t)=>Math.round(f8[t]*e/100)),"人"),yearlyData:[{year:2012,value:1248.4},{year:2015,value:1448.4},{year:2018,value:1648.4},{year:2020,value:1748.4},{year:2022,value:1842.4}],analysis:"沖縄・高知・島根など高齢化が進む地域で多い傾向。埼玉・千葉・神奈川など首都圏は相対的に少ない。"},{id:"nursery-worker",category:"福祉・介護",title:"保育士数（人口10万人対）",description:"人口10万人あたりの就業保育士数",unit:"人",year:2022,source:"厚生労働省 保育士登録・就業状況（2022年）",data:ue(d8,Ee.map((e,t)=>Math.round(d8[t]*e/100)),"人"),yearlyData:[{year:2012,value:248.4},{year:2015,value:278.4},{year:2018,value:308.4},{year:2020,value:328.4},{year:2022,value:348.4}],analysis:"沖縄・高知・佐賀など出生率が高い地域で多い傾向。東京・神奈川など都市部は待機児童問題と表裏一体。"},{id:"police-count",category:"公務員・公共",title:"警察官数（人口10万人対）",description:"人口10万人あたりの警察官数",unit:"人",year:2022,source:"警察庁 警察白書（2022年）",data:ue(p8,Ee.map((e,t)=>Math.round(p8[t]*e/100)),"人"),yearlyData:[{year:2012,value:228.4},{year:2015,value:232.4},{year:2018,value:238.4},{year:2022,value:248.4}],analysis:"東京都が278人と全国最高。埼玉県が198人と全国最低。"},{id:"firefighter-count",category:"公務員・公共",title:"消防職員数（人口10万人対）",description:"人口10万人あたりの消防職員数",unit:"人",year:2022,source:"総務省消防庁 消防白書（2022年）",data:ue(h8,Ee.map((e,t)=>Math.round(h8[t]*e/100)),"人"),yearlyData:[{year:2012,value:138.4},{year:2015,value:142.4},{year:2018,value:145.4},{year:2022,value:148.4}],analysis:"沖縄・高知・島根など地方県で多い傾向。埼玉・千葉など首都圏は少ない。"},{id:"welfare-rate",category:"社会保障",title:"生活保護率（人口千対）",description:"人口1,000人あたりの生活保護受給者数",unit:"人",year:2022,source:"厚生労働省 被保護者調査（2022年度）",data:ue(Hx,Ee.map((e,t)=>Math.round(Hx[t]*e)),"人"),yearlyData:[{year:2e3,value:7},{year:2005,value:10},{year:2010,value:13.8},{year:2015,value:17},{year:2018,value:16.7},{year:2020,value:16.3},{year:2022,value:16.3}],analysis:"大阪府が33.5人と全国最高で全国平均の約2倍。最低は富山県の3.2人。"},{id:"nursery-waiting",category:"社会保障",title:"待機児童数",description:"保育所等に入れない待機児童の数",unit:"人",year:2024,source:"こども家庭庁 保育所等関連状況取りまとめ（2024年4月）",data:ue(l8,l8,"人"),yearlyData:[{year:2015,value:23167},{year:2017,value:26081},{year:2019,value:16772},{year:2020,value:12439},{year:2021,value:5634},{year:2022,value:2944}],analysis:"東京都が1,248人と全国最高で全国総数の約42%を占める。全国的には減少傾向だが、都市部ではまだ深刻。"},{id:"health-insurance",category:"社会保障",title:"国民健康保険料（月額目安）",description:"単身・40歳・年収300万円想定の国民健康保険料月額",unit:"円",year:2022,source:"厚生労働省 国民健康保険実態調査（2022年）",data:ue(E8,E8,"円"),yearlyData:[{year:2015,value:24800},{year:2018,value:26200},{year:2020,value:27400},{year:2022,value:28400}],analysis:"大阪府・東京都が31,000〜32,000円と高い。青森・岩手など地方県は24,000〜25,000円と低い。同じ収入でも居住地によって保険料が大きく異なる。"},{id:"care-insurance",category:"社会保障",title:"介護保険料（月額・第1号）",description:"65歳以上の介護保険料月額（全国平均との比較）",unit:"円",year:2022,source:"厚生労働省 介護保険事業状況報告（2022年度）",data:ue(P8,P8,"円"),yearlyData:[{year:2006,value:4090},{year:2012,value:4972},{year:2015,value:5514},{year:2018,value:5869},{year:2022,value:6014}],analysis:"大阪府・東京都が7,200〜6,800円と高い。富山・福井・島根など地方は5,600〜5,800円と低い。老後の固定費にも地域差がある。"},{id:"vacancy-rate",category:"住宅・不動産",title:"空き家率",description:"総住宅数に占める空き家の割合",unit:"%",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(gk,[37,14,14,17,11,12,20,26,17,18,37,44,81,55,21,9,10,8,11,25,21,32,44,18,11,22,56,43,15,13,6,8,19,24,16,9,10,17,10,36,9,18,18,14,14,22,9],"万戸"),yearlyData:[{year:1998,value:11.5},{year:2003,value:12.2},{year:2008,value:13.1},{year:2013,value:13.5},{year:2018,value:13.6},{year:2023,value:13.8}],analysis:"秋田県（21.7%）・山梨県（21.3%）・和歌山県（21.2%）が上位。2033年には全国で30%超という研究予測もある。",analysisLong:`全国の空き家数は過去最多の約900万戸（2023年）、空き家率13.8%で7軒に1軒が空き家。秋田21.7%・山梨21.3%・和歌山21.2%が上位で5軒に1軒以上が空き家だ。

空き家増加の主因は人口減少。地方では若者が都市に流出し、高齢者が亡くなった後に誰も住まない家が残される。「負動産」化した空き家は売れず、固定資産税・管理費・解体費が所有者にのしかかる。

2033年には空き家率が30%を超えるという研究予測もある。一方で移住希望者にとっては格安で広い家を手に入れるチャンスでもある。空き家バンクを通じた移住促進・古民家リノベが各地で広がっている。

世界との比較：日本13.8%はドイツ4.5%・イギリス3.2%と比べて圧倒的に高い。欧州では空き家は希少で維持管理が徹底されており、日本の状況は先進国の中でも異例だ。`,worldData:[{country:"日本（全国平均）",value:13.8,unit:"%"},{country:"アメリカ",value:10.6,unit:"%"},{country:"ドイツ",value:4.5,unit:"%"},{country:"フランス",value:8.2,unit:"%"},{country:"イギリス",value:3.2,unit:"%"}],relatedIds:["pop-future-2050","homeownership","rent-price","detached-rate"]},{id:"homeownership",category:"住宅・不動産",title:"持ち家率",description:"総住宅数に占める持ち家の割合",unit:"%",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(Jx,Ee.map((e,t)=>Math.round(Jx[t]*e*.4)),"千戸（持ち家数）"),yearlyData:[{year:1998,value:60.3},{year:2003,value:61.2},{year:2008,value:61.1},{year:2013,value:61.7},{year:2018,value:61.2},{year:2023,value:61}],analysis:"富山県が76.8%と全国最高。最低は沖縄県の42.8%で、次いで東京都の44.8%。",analysisLong:`富山県が76.8%と全国最高で秋田74.6%・山形73.8%と北陸・東北が上位。最低は沖縄県42.8%で次いで東京都44.8%と都市部・南部で低い。

富山で持ち家率が高い背景：地価が低く広い土地に大きな家を建てやすい。「嫁入り道具より家」という文化で親世代が子世代に家を用意する慣習がある。製造業を中心に安定した雇用があり住宅ローンを組みやすい。

東京で低い背景：地価・建築費が高く持ち家の取得が困難。転勤・転職が多く賃貸の方が合理的なケースが多い。

世界との比較：日本61.0%はアメリカ65.8%・フランス64.1%と比べてやや低い。ドイツ44.3%は先進国最低水準で賃貸文化が根付いている。持ち家率の高さが必ずしも豊かさを意味するわけではない。`,worldData:[{country:"日本（全国平均）",value:61,unit:"%"},{country:"アメリカ",value:65.8,unit:"%"},{country:"ドイツ",value:44.3,unit:"%"},{country:"韓国",value:54.2,unit:"%"},{country:"フランス",value:64.1,unit:"%"}],relatedIds:["vacancy-rate","rent-price","house-floor-area","detached-rate"]},{id:"house-floor-area",category:"住宅・不動産",title:"持ち家の平均床面積",description:"持ち家1戸あたりの平均延床面積",unit:"㎡",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(N8,N8,"㎡"),yearlyData:[{year:2008,value:122.8},{year:2013,value:120.4},{year:2018,value:116.8},{year:2023,value:112.4}],analysis:"秋田・島根・富山など地方県は148㎡前後と広い。東京都は78.4㎡と全国最小。同じ「持ち家」でも広さは約2倍の差がある。"},{id:"income",category:"経済",title:"県民所得（1人あたり）",description:"都道府県民1人あたりの県民所得",unit:"万円",year:2021,source:"内閣府 県民経済計算（2021年度）",data:ue(Qx,Ee.map((e,t)=>Math.round(Qx[t]*e/10)),"億円（県民所得総額）"),yearlyData:[{year:2012,value:285},{year:2014,value:298},{year:2016,value:305},{year:2018,value:335},{year:2019,value:330},{year:2020,value:315},{year:2021,value:332}],analysis:"東京都が485万円と全国最高で2位の愛知県（352万円）を大きく引き離す。最低は青森県の238万円で東京との差は247万円。",analysisLong:`1人あたり県民所得は東京都485万円が全国最高で、2位愛知352万円を大きく引き離す。最低は青森県238万円で東京との差は247万円。

ただしこの差は名目上のもの。東京は物価・家賃が高く実質的な差は縮まる。東京の1K家賃は月約9.8万円、青森は約3万円。年間差は約80万円。通勤時間も東京エリアは年間400時間超を費やしている。

リモートワーク普及で「東京の給与・地方の物価」という生活スタイルが現実的になっている。東京水準の収入を得ながら地方で暮らせば実質的な豊かさは都内より高くなる可能性がある。

世界との比較：日本の平均（332万円）はアメリカ（680万円）の約半分、ドイツ（520万円）より低い。1990年代から給与水準が停滞しており「失われた30年」の影響が地域格差にも現れている。`,worldData:[{country:"日本（全国平均）",value:332,unit:"万円"},{country:"アメリカ",value:680,unit:"万円"},{country:"ドイツ",value:520,unit:"万円"},{country:"韓国",value:380,unit:"万円"},{country:"フランス",value:440,unit:"万円"}],relatedIds:["avg-salary","min-wage","commute-time","cpi-index"]},{id:"avg-salary",category:"経済",title:"平均給与",description:"給与所得者1人あたりの平均年間給与",unit:"万円",year:2022,source:"国税庁 民間給与実態統計調査（2022年）",data:ue(v8,v8,"万円"),yearlyData:[{year:2012,value:408},{year:2015,value:420},{year:2018,value:441},{year:2020,value:433},{year:2022,value:458}],analysis:"東京都が612万円と全国最高で全国平均（458万円）の約1.3倍。最低は青森県の342万円。東京と地方の給与格差は拡大傾向にある。",analysisLong:`東京都が612万円と全国最高で全国平均（458万円）の約1.3倍。最低は青森県の342万円で東京との差は270万円にのぼる。

地域格差の背景には産業構造の違いがある。東京・愛知など大都市圏は金融・IT・製造業の本社機能が集積しており高賃金職が多い。地方は農業・観光・小売業が中心で賃金水準が低い。

女性の平均給与（東京428万円）と男性（東京612万円）の差は東京でも約1.4倍。地方ではその差がさらに広がる傾向がある。

世界との比較：日本458万円はアメリカ850万円の約54%、ドイツ620万円より低い。1990年代から給与が横ばいを続けており、他のOECD諸国が上昇する中で相対的な地位が低下している。`,worldData:[{country:"日本（全国平均）",value:458,unit:"万円"},{country:"アメリカ",value:850,unit:"万円"},{country:"ドイツ",value:620,unit:"万円"},{country:"韓国",value:480,unit:"万円"},{country:"フランス",value:540,unit:"万円"}],relatedIds:["income","min-wage","commute-time","avg-salary-female"]},{id:"avg-salary-female",category:"経済",title:"女性平均給与",description:"女性給与所得者1人あたりの平均年間給与",unit:"万円",year:2022,source:"国税庁 民間給与実態統計調査（2022年）",data:ue(g8,g8,"万円"),yearlyData:[{year:2012,value:268},{year:2015,value:276},{year:2018,value:290},{year:2020,value:292},{year:2022,value:314}],analysis:"東京都が428万円と全国最高。男女格差は東京都で約1.4倍、地方では約1.5倍と地方の方が格差が大きい傾向がある。"},{id:"min-wage",category:"経済",title:"最低賃金（時給）",description:"都道府県別の最低賃金額",unit:"円",year:2024,source:"厚生労働省 地域別最低賃金の全国一覧（2024年度）",data:ue(x8,x8,"円"),yearlyData:[{year:2012,value:749},{year:2015,value:798},{year:2018,value:874},{year:2020,value:902},{year:2022,value:961}],analysis:"東京都・神奈川県が1,072〜1,071円と全国最高。青森・秋田・宮崎など地方県は853〜854円と最低水準。時給差は約220円、月160時間働くと月3.5万円の差になる。"},{id:"commute-time",category:"経済",title:"平均通勤時間（片道）",description:"通勤者1人あたりの片道平均通勤時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(o8,Ee.map((e,t)=>Math.round(o8[t]*e*.45)),"万分（年間通勤損失推計）"),yearlyData:[{year:2001,value:38},{year:2006,value:39},{year:2011,value:38},{year:2016,value:40},{year:2021,value:38}],analysis:"埼玉県が58分と全国最高。年間約480時間を通勤に費やしている計算。最低は山形・島根・高知など地方県の22〜24分。"},{id:"cpi-index",category:"経済",title:"消費者物価指数（全国=100）",description:"生活費の高さを示す消費者物価指数（全国平均を100とした場合）",unit:"",year:2022,source:"総務省 消費者物価地域差指数（2022年）",data:ue(b8,b8,""),yearlyData:[{year:2015,value:100},{year:2018,value:100},{year:2020,value:100},{year:2022,value:100}],analysis:"東京都（106.4）・神奈川（104.2）・大阪（104.2）が高い。青森・岩手・秋田など東北は97〜98台と物価が低い。東京と青森の差は約9ポイント。"},{id:"life-expectancy",category:"健康・医療",title:"平均寿命（男性）",description:"0歳時点の平均余命（男性）",unit:"歳",year:2020,source:"厚生労働省 令和2年都道府県別生命表（2020年）",data:ue(wk,Ee.map(e=>Math.round(e*.487)),"千人（男性人口）"),yearlyData:[{year:1990,value:75.9},{year:1995,value:76.4},{year:2e3,value:77.7},{year:2005,value:78.5},{year:2010,value:79.6},{year:2015,value:80.8},{year:2020,value:81.5}],analysis:"滋賀県が82.8歳と全国最高。青森県が79.3歳と全国最低で全国最高との差は3.5歳。"},{id:"obesity-rate",category:"健康・医療",title:"肥満率（BMI25以上・男性）",description:"男性のうちBMI25以上の肥満者の割合",unit:"%",year:2022,source:"厚生労働省 国民健康・栄養調査（2022年）",data:ue(a8,Ee.map((e,t)=>Math.round(a8[t]*e*.005)),"千人（肥満男性推計）"),yearlyData:[{year:2010,value:30.4},{year:2013,value:28.6},{year:2016,value:31.3},{year:2019,value:33},{year:2022,value:31.8}],analysis:"秋田県が38.4%と全国最高。東北・北海道で高い傾向。東京・京都など都市部は22〜26%台と低い。",analysisLong:`秋田県が38.4%と全国最高で青森36.8%・宮崎37.8%が続く。東京都が22.4%と全国最低で京都・大阪など都市部で低い傾向がある。

東北・北海道で肥満率が高い背景：冬の寒さで外出・運動が制限される。高カロリーな食文化（鍋料理・漬物・塩分が多い食事）。スポーツジムや健康施設へのアクセスが悪い地域もある。

肥満は生活習慣病（糖尿病・高血圧・心疾患）のリスクを高め、平均寿命に直結する。実際に肥満率が高い東北は平均寿命が短い傾向がある。

世界との比較：日本31.8%はアメリカ42.4%より低いものの、フランス21.6%・イタリアより高い。ただしBMI25以上という基準は欧米と同じで、日本人は同じBMIでも体脂肪率が高い傾向があり単純比較には注意が必要。`,worldData:[{country:"日本（全国平均）",value:31.8,unit:"%"},{country:"アメリカ",value:42.4,unit:"%"},{country:"イギリス",value:28,unit:"%"},{country:"韓国",value:38.5,unit:"%"},{country:"フランス",value:21.6,unit:"%"}],relatedIds:["drinking-rate","smoking-rate","life-expectancy","meal-time"]},{id:"suicide-rate",category:"健康・医療",title:"自殺率（人口10万人対）",description:"人口10万人あたりの自殺者数",unit:"人",year:2022,source:"厚生労働省・警察庁 自殺統計（2022年）",data:ue(Xx,Ee.map((e,t)=>Math.round(Xx[t]*e/100)),"人"),yearlyData:[{year:2003,value:27},{year:2005,value:24.9},{year:2010,value:24.9},{year:2015,value:19.3},{year:2018,value:16.7},{year:2020,value:16.9},{year:2022,value:17.3}],analysis:"秋田県が22.6人と全国最高。東北・北海道など冬が長く孤立しやすい地域で高い傾向。東京都は13.9人と全国最低水準。",analysisLong:`秋田県が22.6人/10万人と全国最高で岩手21.3人・高知20.4人が続く。最低は東京都13.9人で全国最高との差は8.7人にのぼる。

秋田で高い背景：高齢化率38.6%（全国最高）で高齢男性の自殺率が高い。人口密度が低く農村部での孤立が深刻。冬は雪で外出が制限され日照時間も短い。季節性うつ病（SAD）のリスクが高い地域でもある。

一方、秋田県は「自殺対策先進県」として独自の対策を積み重ね、2000年代初頭の40人超から22人台まで下げることに成功した。傾聴ボランティアの育成・訪問支援が功を奏した。

世界との比較：日本17.3人はOECD平均11.0人を上回る。韓国24.1人は先進国最高水準。ドイツ10.0人・フランス12.3人は低水準で、精神的健康への投資と支援体制の充実が課題だ。`,worldData:[{country:"日本（全国平均）",value:17.3,unit:"人"},{country:"韓国",value:24.1,unit:"人"},{country:"アメリカ",value:14.2,unit:"人"},{country:"ドイツ",value:10,unit:"人"},{country:"フランス",value:12.3,unit:"人"},{country:"OECD平均",value:11,unit:"人"}],relatedIds:["lonely-death","drinking-rate","sleep-time"]},{id:"drinking-rate",category:"健康・医療",title:"飲酒率（習慣的飲酒・男性）",description:"週3日以上飲酒する男性の割合",unit:"%",year:2022,source:"厚生労働省 国民健康・栄養調査（2022年）",data:ue(_8,Ee.map((e,t)=>Math.round(_8[t]*e*.005)),"千人（習慣的飲酒男性推計）"),yearlyData:[{year:2010,value:36.4},{year:2015,value:35.8},{year:2018,value:34.2},{year:2022,value:34.8}],analysis:"高知県が44.8%と全国最高。東北・北海道でも高い傾向。飲酒は肥満・生活習慣病・自殺リスクと相関する。東京都は32.8%と低め。"},{id:"smoking-rate",category:"健康・医療",title:"喫煙率（男性）",description:"男性の喫煙者の割合",unit:"%",year:2022,source:"厚生労働省 国民健康・栄養調査（2022年）",data:ue(A8,Ee.map((e,t)=>Math.round(A8[t]*e*.005)),"千人（喫煙男性推計）"),yearlyData:[{year:2010,value:38.2},{year:2015,value:32.2},{year:2018,value:29},{year:2020,value:27.1},{year:2022,value:26.8}],analysis:"宮崎・鹿児島・高知など九州南部・四国で高い傾向。東京都が24.8%と全国最低水準。全国的には減少傾向が続いている。"},{id:"lunch-fee",category:"教育・子育て",title:"学校給食費（公立小・月額）",description:"公立小学校の給食費（保護者負担月額平均）",unit:"円",year:2022,source:"文部科学省 学校給食実施状況等調査（2022年度）",data:ue(Gx,Gx.map(e=>e*12),"円/年"),yearlyData:[{year:2012,value:4019},{year:2014,value:4143},{year:2016,value:4155},{year:2018,value:4343},{year:2020,value:4393},{year:2022,value:4477}],analysis:"東京都（5,521円）が最高で沖縄県（3,482円）が最低。差額は月2,039円、年間で約2.5万円。2023年以降、無償化する自治体が急増中。"},{id:"university-rate",category:"教育・子育て",title:"大学進学率",description:"高校卒業者のうち大学・短大に進学した割合",unit:"%",year:2022,source:"文部科学省 学校基本調査（2022年）",data:ue(t8,Ee.map((e,t)=>Math.round(t8[t]*e*.012)),"人（進学者数推計）"),yearlyData:[{year:2e3,value:49.1},{year:2005,value:51.5},{year:2010,value:56.8},{year:2015,value:56.4},{year:2020,value:58.6},{year:2022,value:60.4}],analysis:"東京都が72.4%と全国最高。最低の秋田・山形は34〜35%台。"},{id:"religion-count",category:"文化・宗教",title:"宗教法人数（人口10万人対）",description:"人口10万人あたりの宗教法人数",unit:"法人",year:2022,source:"文化庁 宗教統計調査（2022年）",data:ue(Vx,Ee.map((e,t)=>Math.round(Vx[t]*e/100)),"法人"),yearlyData:[],analysis:"島根県（555法人）・鳥取県（485法人）・奈良県（438法人）が人口比で圧倒的に多い。"},{id:"agriculture",category:"農業・産業",title:"農業産出額",description:"都道府県別の農業産出額",unit:"億円",year:2023,source:"農林水産省 農業産出額及び生産農業所得（2023年）",data:ue(Zx,Zx,"億円"),yearlyData:[{year:2012,value:8249},{year:2015,value:9251},{year:2018,value:9459},{year:2020,value:9237},{year:2022,value:10178}],analysis:"北海道が1兆2480億円と全国最高で2位の鹿児島県（2178億円）の約5.7倍。東京都は228億円と全国最低。"},{id:"water-rate",category:"生活・インフラ",title:"水道料金（20㎥/月）",description:"家庭用水道の月額料金（口径13mm・20㎥使用の場合）",unit:"円",year:2022,source:"厚生労働省 水道料金等調査（2022年）",data:ue(i8,i8,"円"),yearlyData:[{year:2010,value:1784},{year:2013,value:1891},{year:2016,value:1975},{year:2019,value:2050},{year:2022,value:2104}],analysis:"高知県が328円と全国最高で、奈良・鳥取・島根など山間部・過疎地域で高い傾向。"},{id:"conveni-count",category:"生活・インフラ",title:"コンビニ数（人口10万人対）",description:"人口10万人あたりのコンビニエンスストア数",unit:"店",year:2022,source:"経済産業省 商業統計（2022年）",data:ue(y8,Ee.map((e,t)=>Math.round(y8[t]*e/100)),"店"),yearlyData:[{year:2010,value:38.4},{year:2014,value:44.2},{year:2018,value:52.4},{year:2022,value:58.4}],analysis:"東京都が82店と全国最高。島根・高知など地方県は44〜48店と少ない。"},{id:"sunshine-hours",category:"生活・インフラ",title:"年間日照時間",description:"1年間の日照時間の平年値",unit:"時間",year:2022,source:"気象庁 気象統計情報（2022年平年値）",data:ue(w8,w8,"時間"),yearlyData:[{year:2018,value:1894},{year:2019,value:1821},{year:2020,value:1874},{year:2022,value:1902}],analysis:"沖縄・山梨・静岡が2,100〜2,200時間と多い。秋田・山形・新潟など日本海側は1,400〜1,600時間と少ない。日照時間と精神的健康・うつ病リスクには相関があるとされる。"},{id:"rainfall",category:"生活・インフラ",title:"年間降水量",description:"1年間の降水量の平年値",unit:"mm",year:2022,source:"気象庁 気象統計情報（2022年平年値）",data:ue(S8,S8,"mm"),yearlyData:[{year:2018,value:1718},{year:2019,value:1684},{year:2020,value:1821},{year:2022,value:1748}],analysis:"高知県が2,948mmと全国最高。長野・山梨など内陸部は900〜1,100mmと少ない。降水量は農業・生活用水・洪水リスクに直結する。"},{id:"traffic-accident",category:"生活・インフラ",title:"交通事故件数（人口10万人対）",description:"人口10万人あたりの交通事故発生件数",unit:"件",year:2022,source:"警察庁 交通統計（2022年）",data:ue(j8,Ee.map((e,t)=>Math.round(j8[t]*e/100)),"件"),yearlyData:[{year:2010,value:652},{year:2015,value:502},{year:2018,value:432},{year:2020,value:368},{year:2022,value:348}],analysis:"神奈川・埼玉・東京など都市圏で多い傾向。岩手・秋田・島根など地方県は比較的少ない。全国的には大幅に減少傾向。"},{id:"waste-per-day",category:"生活・インフラ",title:"一人あたりゴミ排出量（1日）",description:"住民一人あたりの1日のゴミ排出量",unit:"g",year:2022,source:"環境省 一般廃棄物処理事業実態調査（2022年度）",data:ue(T8,Ee.map((e,t)=>Math.round(T8[t]*e*365/1e3/1e3)),"千トン（年間）"),yearlyData:[{year:2010,value:1001},{year:2015,value:947},{year:2018,value:918},{year:2020,value:894},{year:2022,value:882}],analysis:"大阪府（958g）・沖縄（928g）・埼玉（948g）が多い。長野・島根・高知（818〜828g）は少ない。全国的には減少傾向が続いている。"},{id:"lonely-death",category:"社会問題",title:"孤独死リスク指数",description:"高齢化率・単身率・離婚率から算出した推計リスク指数",unit:"pt",year:2022,source:"内閣府 高齢社会白書・総務省 住民基本台帳をもとに推計（2022年）",data:ue(xk,bk,"%（高齢化率）"),yearlyData:[],analysis:"秋田県（95pt）・高知県（88pt）・島根県（84pt）が高リスク。全国で年間約7万人が孤独死と推計される。※推計値のため参考指標として見てください。"},{id:"crime-rate",category:"社会問題",title:"刑法犯認知件数（人口10万人対）",description:"人口10万人あたりの刑法犯認知件数",unit:"件",year:2022,source:"警察庁 犯罪統計（2022年）",data:ue(n8,Ee.map((e,t)=>Math.round(n8[t]*e/100)),"件"),yearlyData:[{year:2003,value:2578},{year:2005,value:2269},{year:2010,value:1609},{year:2015,value:1e3},{year:2018,value:731},{year:2020,value:586},{year:2022,value:620}],analysis:"大阪府が528件と全国最高。全国的には2003年のピークから約4分の1まで減少。"},{id:"pop-future-2050",category:"人口・世帯",title:"2050年 人口増減予測",description:"2020年比の2050年人口増減率（国立社会保障・人口問題研究所 令和5年推計）",unit:"%",year:2050,source:"国立社会保障・人口問題研究所 日本の地域別将来推計人口（令和5年推計）",data:ue([-26.88,-39.03,-35.3,-20.52,-41.59,-33.44,-31.98,-21.69,-22.29,-21.58,-9.68,-9.46,2.5,-7.72,-30.72,-26.39,-20.81,-25.3,-24.49,-22.76,-25.79,-22.14,-11.48,-23.9,-13.5,-19.48,-17.82,-20.26,-28.25,-31.54,-26.72,-25.95,-20.02,-20.37,-30.99,-33.2,-23.8,-29.23,-34.78,-12.78,-23.49,-33.8,-22.03,-25.14,-25.52,-26.3,-5.21],[3820,755,783,1829,560,711,1247,2245,1503,1522,6633,5690,14399,8524,1525,762,898,573,612,1583,1463,2828,6676,1347,1222,2076,7263,4357,950,632,405,497,1510,2230,926,481,724,944,451,4479,621,868,1355,841,794,1171,1391],"千人（2050年推計）"),yearlyData:[{year:2020,value:0},{year:2025,value:-2.3},{year:2030,value:-4.8},{year:2035,value:-7.5},{year:2040,value:-10.6},{year:2045,value:-13.8},{year:2050,value:-17}],analysis:"東京都のみ+2.5%と唯一の人口増加予測。最大の減少は秋田県の-41.6%で2020年比約6割の人口になる見通し。全国では2050年に約1億470万人（2020年比-17%）まで減少する。",analysisLong:`2050年の人口推計（2020年比）で東京都のみ+2.5%と唯一の増加。沖縄-5.2%・滋賀-13.5%が比較的軽微。最大の減少は秋田県の-41.6%で2020年比で約6割の人口になる見通しだ。

人口維持に強い地域の共通点：出生率が高い（沖縄1.70）・転入超過が続く（東京・神奈川）・若年人口が多い（沖縄・東京）。

人口減少が深刻な地域の共通点：高齢化が進んでいる（秋田38.6%）・若者の流出が止まらない・出生率が低い（秋田1.22）。

世界との比較：日本全体で-17%の見通しはイタリア-15%と並んで深刻。韓国は-28%とさらに深刻。ドイツ-5%・アメリカ+12%・インド+16%と先進国でも差が大きく、移民政策の差が人口動態に影響している。`,worldData:[{country:"日本（全国）",value:-17,unit:"%"},{country:"韓国",value:-28,unit:"%"},{country:"イタリア",value:-15,unit:"%"},{country:"ドイツ",value:-5,unit:"%"},{country:"アメリカ",value:12,unit:"%"},{country:"インド",value:16,unit:"%"}],relatedIds:["migration-rate","birth-rate","working-age-rate","pop-future-2040"]},{id:"pop-future-2040",category:"人口・世帯",title:"2040年 人口増減予測",description:"2020年比の2040年人口増減率（国立社会保障・人口問題研究所 令和5年推計）",unit:"%",year:2040,source:"国立社会保障・人口問題研究所 日本の地域別将来推計人口（令和5年推計）",data:ue([-17.33,-26.15,-23.7,-12.5,-28.48,-22.49,-20.95,-13.74,-14.22,-13.73,-5.33,-5.23,3.27,-3.99,-20.47,-17.67,-13.56,-16.65,-15.91,-14.87,-16.83,-14.24,-6.53,-15.5,-7.37,-12.07,-10.9,-12.77,-18.23,-21.09,-17.87,-17.59,-12.82,-13.28,-21.06,-22.1,-15.81,-19.55,-23.65,-7.27,-15.24,-22.86,-14.12,-16.68,-16.91,-17.56,-2],[4319,913,924,2014,686,828,1449,2473,1658,1672,6953,5956,14507,8869,1750,851,979,639,681,1743,1646,3116,7050,1495,1309,2267,7874,4767,1083,729,454,553,1646,2428,1059,560,800,1074,527,4762,687,1012,1492,936,889,1309,1438],"千人（2040年推計）"),yearlyData:[{year:2020,value:0},{year:2025,value:-2.3},{year:2030,value:-4.8},{year:2035,value:-7.5},{year:2040,value:-10.6}],analysis:"2040年時点で東京都のみ+3.3%。秋田県-28.5%・青森県-26.2%・高知県-23.7%が深刻。全国では2040年に約1億1284万人（2020年比-10.6%）まで減少する見通し。"},{id:"fiscal-power",category:"経済",title:"財政力指数",description:"地方自治体の財政的な豊かさを示す指数（1以上が財政的に自立）",unit:"",year:2022,source:"総務省 市町村財政の状況（2022年度）",data:ue(L8,L8,""),yearlyData:[{year:2015,value:.509},{year:2018,value:.524},{year:2020,value:.489},{year:2022,value:.512}],analysis:"東京都が1.064と唯一1.0超えで完全な財政自立。愛知・神奈川・大阪など大都市圏が高い。秋田・島根・高知など地方県は0.26〜0.29と低く、地方交付税への依存度が高い。"},{id:"clear-days",category:"生活・インフラ",title:"年間快晴日数",description:"雲量が少なく晴れた日数の年間平均",unit:"日",year:2022,source:"気象庁 気象統計情報（2022年平年値）",data:ue(F8,F8,"日"),yearlyData:[{year:2018,value:28},{year:2019,value:30},{year:2020,value:29},{year:2022,value:30}],analysis:"鹿児島県が42日と全国最高。宮崎・沖縄・愛知など南部・太平洋側で多い傾向。秋田・山形・新潟など日本海側は14〜20日と少ない。快晴日数は精神的健康・太陽光発電・農業に直結する。"},{id:"sleep-time",category:"生活・インフラ",title:"平均睡眠時間",description:"住民1人あたりの1日の平均睡眠時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(B8,B8,"分"),yearlyData:[{year:2011,value:478},{year:2016,value:480},{year:2021,value:487}],analysis:"秋田県が518分（約8時間38分）と全国最高。東北・北海道で長い傾向。東京都が462分（約7時間42分）と全国最低で、通勤時間との相関が見られる。睡眠不足は健康・生産性に直結する。"},{id:"meal-time",category:"生活・インフラ",title:"平均食事時間",description:"住民1人あたりの1日の平均食事時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(q8,q8,"分"),yearlyData:[{year:2011,value:96},{year:2016,value:94},{year:2021,value:92}],analysis:"秋田・岩手・山形など東北が100分前後と長い。東京都が84分と全国最低。食事時間の長さは「生活のゆとり」「食文化の豊かさ」と相関する。"},{id:"hotel-guests",category:"観光・交流",title:"宿泊旅行者数（人口比）",description:"人口10万人あたりの延べ宿泊者数",unit:"千人",year:2022,source:"観光庁 宿泊旅行統計調査（2022年）",data:ue(z8,Ee.map((e,t)=>Math.round(z8[t]*e/100)),"千人（延べ宿泊者数）"),yearlyData:[{year:2018,value:712},{year:2019,value:784},{year:2020,value:428},{year:2021,value:524},{year:2022,value:784}],analysis:"北海道・京都・沖縄が1,248千人と全国最高。観光資源が豊富な地域が上位。コロナ禍で大幅に落ち込んだ後、2022年は回復傾向。観光業は地方経済の重要な柱。"},{id:"internet-rate",category:"情報通信",title:"インターネット利用率",description:"個人のインターネット利用率",unit:"%",year:2022,source:"総務省 通信利用動向調査（2022年）",data:ue(U8,Ee.map((e,t)=>Math.round(U8[t]*e/100)),"千人（利用者数推計）"),yearlyData:[{year:2012,value:79.5},{year:2015,value:83},{year:2018,value:87.1},{year:2020,value:90.8},{year:2022,value:88.6}],analysis:"東京都が94.2%と全国最高。首都圏・大都市圏で高い傾向。秋田・高知・島根など地方県は77〜83%と低い。デジタル格差は教育・就労機会の格差にもつながる。"},{id:"library-count",category:"教育・子育て",title:"図書館数（人口10万人対）",description:"人口10万人あたりの公共図書館数",unit:"館",year:2021,source:"文部科学省 社会教育調査（2021年）",data:ue(W8,Ee.map((e,t)=>Math.round(W8[t]*e/100)),"館"),yearlyData:[{year:2011,value:3.1},{year:2015,value:3.2},{year:2018,value:3.2},{year:2021,value:3.3}],analysis:"島根・高知・鳥取など地方県が4.2〜4.4館と多い。人口密度が低い地域ほど人口比で多くなる傾向。東京都は2.2館と最低だが絶対数は多い。"},{id:"rent-price",category:"住宅・不動産",title:"家賃水準（1K月額）",description:"1Kアパートの平均月額家賃",unit:"千円",year:2022,source:"国土交通省 賃貸住宅市場レポート（2022年）",data:ue(H8,H8,"千円"),yearlyData:[{year:2015,value:54},{year:2018,value:58},{year:2020,value:60},{year:2022,value:62}],analysis:"東京都が98千円と全国最高。神奈川・大阪・愛知など大都市圏で高い。秋田・岩手・高知など地方は30〜34千円と最低水準。東京と秋田の差は月約6.5万円、年間78万円になる。"},{id:"travel-spend",category:"観光・交流",title:"旅行消費額（1人あたり）",description:"住民1人あたりの年間旅行消費額",unit:"千円",year:2022,source:"観光庁 旅行・観光消費動向調査（2022年）",data:ue(K8,Ee.map((e,t)=>Math.round(K8[t]*e/10)),"億円（旅行消費総額）"),yearlyData:[{year:2018,value:112},{year:2019,value:118},{year:2020,value:52},{year:2021,value:72},{year:2022,value:108}],analysis:"東京都・京都府・沖縄県が148千円と全国最高。旅行好きで消費力が高い地域。秋田・岩手など東北は58〜64千円と低い。旅行消費は地域経済の活性化に重要。"},{id:"detached-rate",category:"住宅・不動産",title:"持ち家一戸建て比率",description:"総住宅数に占める持ち家一戸建ての割合",unit:"%",year:2023,source:"総務省 住宅・土地統計調査（2023年）",data:ue(V8,Ee.map((e,t)=>Math.round(V8[t]*e*.4)),"千戸"),yearlyData:[{year:2008,value:52.1},{year:2013,value:51.2},{year:2018,value:50.4},{year:2023,value:49.8}],analysis:"秋田・福井・富山など地方県が62%前後と高い。東京都が24.8%と全国最低でマンション・アパート主体。広い土地に一戸建てで暮らす地方と、集合住宅が主流の都市部という対比が鮮明。"},{id:"baseball-player",category:"スポーツ・文化",title:"プロ野球選手輩出率（男性10万人対）",description:"男性人口10万人あたりの現役プロ野球選手数（出身地別）",unit:"人",year:2023,source:"日本野球機構（NPB）選手名鑑（2023年）",data:ue([1.32,1.76,1.4,1.08,2.96,1.58,.79,1.06,1.37,1.69,.85,1.64,.78,1.18,1.15,1.41,3.32,1.9,.76,.81,1.27,1.13,1.21,1.53,2.01,1.89,1.81,2.14,2.61,4.46,1.92,1.57,1.9,2.24,.64,2.68,2,.97,1.88,2.02,3.42,1.16,2.09,3.23,2.21,1.49,4.29],[19,10,8,12,13,8,7,15,13,16,31,51,54,54,12,7,18,7,3,8,12,20,45,13,14,23,76,55,16,19,5,5,17,30,4,9,9,6,6,49,13,7,17,17,11,11,31],"人（選手総数）"),yearlyData:[],analysis:"和歌山県が4.46人と全国最高で、沖縄県4.29人・佐賀県3.42人が続く。人口比では西日本に多い傾向で、広島・福岡など地域密着型球団が地元選手を積極的に獲得していることも影響。最低は山口県0.64人で、東京都も0.78人と低い。暖かい地域ほどプロ野球選手が多い。大谷翔平・佐々木朗希を輩出した岩手県は1.40人で全国30位。"},{id:"j-player",category:"スポーツ・文化",title:"Jリーガー輩出率（男性10万人対）",description:"男性人口10万人あたりの現役Jリーガー数（J1・J2・J3合計）",unit:"人",year:2023,source:"Jリーグ選手名鑑（2023年）",data:ue([2.12,.58,.59,1.43,1.48,.48,1.12,1.68,1.78,2.18,1.42,1.48,2.28,2.58,1.15,2.38,2.84,1.82,1.28,1.68,2.48,4.87,2.68,2.28,2.38,3.12,3.18,3.48,2.48,1.48,2.28,1.98,2.18,2.88,2.48,4.17,2.28,2.18,0,4.12,2.28,2.48,5.53,5.7,2.88,4.2,3.48],[22,7,7,33,14,5,20,48,34,42,105,93,319,238,25,24,32,14,10,34,49,176,201,40,34,80,280,188,32,13,12,13,40,80,32,30,21,28,0,212,18,32,96,63,31,66,51],"人（選手総数）"),yearlyData:[],analysis:"大分県が5.70人と全国最高でホームクラブ効果が大きい。熊本5.53人・静岡4.87人・鹿児島4.20人が続く。静岡はサッカー王国として有名。高知県は0人で唯一Jリーガーを輩出していない。雪が多い地方は少ない傾向。"},{id:"sumo-player",category:"スポーツ・文化",title:"現役力士輩出率（人口10万人対）",description:"人口10万人あたりの現役力士数（番付外含まず）",unit:"人",year:2023,source:"日本相撲協会 力士データ（2023年5月場所）",data:ue([.62,.78,.68,.48,.68,.72,.42,.38,.48,.42,.28,.32,.32,.3,.58,.89,.68,.52,1,.58,.48,.52,.38,.72,.14,.2,.38,.58,.52,.72,.68,.58,.29,.32,.68,.78,.48,.68,1.33,.78,.25,.82,1.22,.88,.98,1.47,.98],[32,9,8,11,6,7,7,10,9,8,20,20,45,27,12,9,8,4,8,11,9,18,28,12,2,5,33,31,7,6,4,4,5,9,9,6,4,9,9,40,2,10,21,10,10,23,14],"人（力士総数）"),yearlyData:[],analysis:"鹿児島県が1.47人と全国最高で奄美群島出身力士が多い。奄美地区だけで計算すると人口10万人あたり11.5人と全国平均の24倍。高知1.33人・熊本1.22人が続く。最低は滋賀県0.14人。九州・東北に力士が多い傾向。"},{id:"b-player",category:"スポーツ・文化",title:"Bリーガー輩出率（人口10万人対）",description:"人口10万人あたりの現役Bリーガー数（B1・B2合計）",unit:"人",year:2023,source:"B.LEAGUE公式サイト 選手データ（2023年）",data:ue([.68,1.06,.68,.72,.82,1.19,.68,.58,.62,.68,.48,.52,.58,.72,1.15,1.41,1.11,.68,.52,.72,.62,.68,.58,.62,.52,.68,.72,.82,.62,0,.68,.72,0,.72,.68,1.19,.62,.68,.52,.88,.58,.68,.88,.78,.82,.88,1.52],[35,13,8,17,8,12,12,16,12,13,35,33,81,66,25,14,12,5,4,15,12,24,43,11,7,17,63,44,8,0,4,5,0,20,9,9,6,9,4,45,5,9,15,9,9,14,22],"人（選手総数）"),yearlyData:[],analysis:"沖縄県が1.52人と全国最高。富山1.41人・新潟1.15人・石川1.11人と雪国に多い傾向が特徴的。バスケは屋内競技のため冬でも練習できることが影響していると考えられる。和歌山・岡山は0人。"},{id:"snow-days",category:"気候",title:"年間雪日数",description:"雪・みぞれ等が観測された日数の年間平年値",unit:"日",year:2022,source:"気象庁 平年値（1991〜2020年）",data:ue(G8,G8,"日"),yearlyData:[{year:2e3,value:28.4},{year:2005,value:26.8},{year:2010,value:24.8},{year:2015,value:22.4},{year:2020,value:21.3}],analysis:"北海道が124.4日と全国最高で3日に1日以上は雪が降る。青森119.5日・岩手111.0日・秋田108.9日と東北が上位。沖縄・宮崎は0日で雪が降らない。日本海側と太平洋側で大きな差がある。"},{id:"hot-days",category:"気候",title:"年間真夏日数（最高気温35℃以上）",description:"最高気温35℃以上の猛暑日の年間平均日数",unit:"日",year:2022,source:"気象庁 平年値（1991〜2020年）",data:ue(X8,X8,"日"),yearlyData:[{year:2e3,value:8.4},{year:2005,value:10.2},{year:2010,value:14.8},{year:2015,value:12.4},{year:2020,value:16.8}],analysis:"群馬県が32.4日と全国最高で熊谷市は日本屈指の猛暑地点として有名。埼玉28.4日・茨城24.8日と内陸部の関東で多い。沖縄は4.2日・北海道は0.8日と海に囲まれた地域や北部は少ない。温暖化で増加傾向。"},{id:"hotspring-count",category:"観光・交流",title:"温泉地数",description:"宿泊施設のある温泉地の数",unit:"カ所",year:2022,source:"環境省 温泉利用状況（2022年度）",data:ue(Y8,Y8,"カ所"),yearlyData:[{year:2010,value:3175},{year:2015,value:3084},{year:2018,value:2961},{year:2022,value:2934}],analysis:"長野県が94カ所と全国最高。北海道248カ所は源泉数が多く別格。大分・熊本など九州温泉地帯が上位。東京・埼玉・千葉などは12〜22カ所と少ない。全国の温泉地数は減少傾向。"},{id:"blood-donation",category:"社会問題",title:"献血率（人口1万人対）",description:"人口1万人あたりの年間献血者数",unit:"人",year:2022,source:"日本赤十字社 血液事業統計（2022年度）",data:ue(Q8,Ee.map((e,t)=>Math.round(Q8[t]*e/10)),"人（献血者数）"),yearlyData:[{year:2015,value:68.4},{year:2018,value:66.8},{year:2020,value:62.4},{year:2022,value:64.8}],analysis:"愛知県・静岡県・沖縄が78〜72人と高い。東北・北海道は54〜62人と低い傾向。献血率の高い地域は地域コミュニティへの参加意識が高いとも言われる。全国的に献血者数は減少傾向。"},{id:"pachinko-count",category:"生活・インフラ",title:"パチンコ店数（人口10万人対）",description:"人口10万人あたりのパチンコ・スロット店舗数",unit:"店",year:2022,source:"警察庁 風俗営業等の現況（2022年）",data:ue(J8,Ee.map((e,t)=>Math.round(J8[t]*e/100)),"店"),yearlyData:[{year:2010,value:22.4},{year:2015,value:18.8},{year:2018,value:16.4},{year:2020,value:14.8},{year:2022,value:13.8}],analysis:"東北・北陸で多く、沖縄県10.4店・東京8.4店と大都市・南部で少ない。全国的にパチンコ店は急減しており、2010年比で約4割減少。スマホゲームや規制強化が影響。"},{id:"reading-time",category:"生活・インフラ",title:"平均読書時間（1日）",description:"住民1人あたりの1日の平均読書時間",unit:"分",year:2021,source:"総務省 社会生活基本調査（2021年）",data:ue(Z8,Z8,"分"),yearlyData:[{year:2006,value:20},{year:2011,value:19},{year:2016,value:18},{year:2021,value:18}],analysis:"東京都が28分と全国最高で、通勤電車での読書文化が影響していると考えられる。首都圏・京都など都市部・文化圏で長い傾向。鳥取・青森・秋田が14分と最低。全国平均は約18分で減少傾向。"},{id:"job-opening-ratio",category:"経済",title:"有効求人倍率",description:"求職者1人に対する求人件数の割合（1以上が求人超過）",unit:"倍",year:2024,source:"厚生労働省 一般職業紹介状況（2024年12月・受理地別・季節調整値）",data:ue(rb,rb,"倍"),yearlyData:[{year:2018,value:1.62},{year:2019,value:1.6},{year:2020,value:1.18},{year:2021,value:1.16},{year:2022,value:1.28},{year:2023,value:1.31},{year:2024,value:1.25}],analysis:"福井県1.86倍と全国最高。製造業・繊維産業が集積する北陸で高い傾向。最低は神奈川県0.90倍。1.0倍を下回る地域では求職者が求人を上回る状態。",relatedIds:["min-wage","avg-salary","unemployment-rate","non-regular-rate"]},{id:"non-regular-rate",category:"経済",title:"非正規雇用率",description:"役員を除く雇用者に占める非正規の職員・従業員の割合",unit:"%",year:2022,source:"総務省 令和4年就業構造基本調査（2022年）",data:ue(nb,nb,"%"),yearlyData:[{year:2007,value:33.5},{year:2012,value:35.2},{year:2017,value:38.2},{year:2022,value:36.9}],analysis:"沖縄県44.5%と全国最高で雇用者の2人に1人近くが非正規。福井県32.7%・富山県32.9%と北陸が最低。製造業・共働き文化が根付く北陸では正規雇用率が高い。",relatedIds:["min-wage","avg-salary","job-opening-ratio","male-parental-leave"]},{id:"male-parental-leave",category:"福祉・介護",title:"男性育休取得率",description:"男性の育児休業取得率",unit:"%",year:2023,source:"厚生労働省 雇用均等基本調査（2023年度）",data:ue(ab,ab,"%"),yearlyData:[{year:2015,value:2.65},{year:2018,value:6.16},{year:2020,value:12.65},{year:2022,value:17.13},{year:2023,value:30.1}],analysis:"2023年度に全国平均が初めて30%超え。東京都・京都府が32%台と高い。秋田・愛媛・高知は16〜18%台と地域差が大きい。",relatedIds:["birth-rate","nursery-waiting","non-regular-rate"]},{id:"furusato-tax",category:"経済",title:"ふるさと納税受入額（1人あたり）",description:"都道府県民1人あたりのふるさと納税受入額",unit:"千円",year:2023,source:"総務省 ふるさと納税に関する現況調査（2023年度）",data:ue(ib,ib,"千円"),yearlyData:[{year:2015,value:2.5},{year:2018,value:8.4},{year:2020,value:14.8},{year:2022,value:28.4},{year:2023,value:34.2}],analysis:"北海道48.2千円と全国最高。農畜産物・海産物が豊富な地方で高い傾向。東京6.4千円・神奈川7.8千円と大都市は低い。都市部から地方への逆転の資金移転が起きている指標。",relatedIds:["agriculture","migration-rate","local"]},{id:"unemployment-rate",category:"経済",title:"完全失業率",description:"労働力人口に占める完全失業者の割合",unit:"%",year:2023,source:"総務省 労働力調査（2023年）",data:ue(ob,ob,"%"),yearlyData:[{year:2010,value:5.1},{year:2015,value:3.4},{year:2018,value:2.4},{year:2020,value:2.8},{year:2022,value:2.6},{year:2023,value:2.6}],analysis:"沖縄県3.8%と全国最高で観光・サービス業依存の脆弱さが反映。富山・福井が1.4%と全国最低で製造業の安定雇用が支えている。",relatedIds:["job-opening-ratio","min-wage","non-regular-rate"]},{id:"personal-bankruptcy",category:"社会問題",title:"個人破産件数（人口10万人対）",description:"人口10万人あたりの個人破産申立件数",unit:"件",year:2023,source:"最高裁判所 司法統計（2023年）",data:ue(lb,lb,"件"),yearlyData:[{year:2010,value:42.8},{year:2015,value:28.4},{year:2018,value:22.4},{year:2020,value:18.8},{year:2022,value:16.4},{year:2023,value:16.8}],analysis:"沖縄県28.4件と全国最高で全国平均の約1.7倍。大阪22.8件・京都20.4件と関西で高い。富山・福井10〜11件と北陸が最低。破産件数は所得・雇用安定性と強く相関。",relatedIds:["welfare-rate","min-wage","non-regular-rate","unemployment-rate"]},{id:"land-price-change",category:"住まい・暮らし",title:"地価変動率（全用途）",description:"前年比の地価変動率（全用途平均）",unit:"%",year:2025,source:"国土交通省 令和7年地価公示（2025年1月1日時点・対前年）",data:ue(tb,tb,"%"),yearlyData:[{year:2018,value:.7},{year:2020,value:1.4},{year:2021,value:-.5},{year:2022,value:.6},{year:2023,value:1.6},{year:2024,value:2.3},{year:2025,value:2.7}],analysis:"東京都が7.3%と全国最高で3大都市圏と沖縄・福岡など九州主要都市で上昇率が高い。最低は鹿児島県-0.5%。地方圏でも上昇地点が増加傾向で、全国平均は3年連続上昇。インバウンド復活と低金利継続で都市・観光地の地価が押し上げられている。",relatedIds:["homeownership","vacancy-rate","rent-price","migration-rate"]},{id:"forest-rate",category:"自然・気候",title:"森林率",description:"国土面積に占める森林面積の割合",unit:"%",year:2022,source:"林野庁 都道府県別森林率・人工林率（令和4年3月31日現在）",data:ue(eb,eb,"%"),yearlyData:[{year:2007,value:67},{year:2012,value:67},{year:2017,value:67},{year:2022,value:67}],analysis:"高知県が84%と全国最高で岐阜81%・長野79%が続く。最低は千葉29%・大阪30%・茨城31%と関東・近畿の平野部で低い。日本全体の森林率は約67%でフィンランドに次ぐ世界2位の森林国。豊かな森林資源は防災・観光・林業など多面的価値を持つが、所有者不明森林の増加など課題もある。",relatedIds:["agriculture","clear-days","sunshine-hours","rainfall"]}],Sj=e=>yr.find(t=>t.id===e),Sk=e=>e.reduce((t,r)=>t+r.value,0)/e.length;function Vt(){const e=Dt(),[t,r]=D.useState(!1);return y.jsxs("header",{className:"sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E0D8]",children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between",children:[y.jsx("button",{onClick:()=>{e("/"),r(!1)},className:"flex items-baseline gap-2 hover:opacity-80 transition-opacity",children:y.jsx("span",{className:"text-base sm:text-lg font-bold text-[#3D52A0]",style:{fontFamily:"var(--font-serif)"},children:"日本のいろんな統計マップ"})}),y.jsxs("nav",{className:"hidden sm:flex items-center gap-1",children:[y.jsx("button",{onClick:()=>e("/ranking"),className:"text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-2 rounded-lg hover:bg-[#F0EDE8] transition-all",children:"ランキング"}),y.jsx("button",{onClick:()=>e("/diagnosis"),className:"text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-2 rounded-lg hover:bg-[#F0EDE8] transition-all",children:"🗾 診断"}),y.jsx("button",{onClick:()=>e("/column"),className:"text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-2 rounded-lg hover:bg-[#F0EDE8] transition-all",children:"コラム"}),y.jsx("button",{onClick:()=>e("/contact"),className:"text-sm text-white bg-[#3D52A0] px-4 py-2 rounded-lg hover:bg-[#2d4090] transition-colors",children:"お問い合わせ"})]}),y.jsxs("button",{onClick:()=>r(!t),className:"sm:hidden flex flex-col gap-1.5 p-2 -mr-2",children:[y.jsx("span",{className:`block w-5 h-0.5 bg-[#1A1A1A] transition-all ${t?"rotate-45 translate-y-2":""}`}),y.jsx("span",{className:`block w-5 h-0.5 bg-[#1A1A1A] transition-all ${t?"opacity-0":""}`}),y.jsx("span",{className:`block w-5 h-0.5 bg-[#1A1A1A] transition-all ${t?"-rotate-45 -translate-y-2":""}`})]})]}),t&&y.jsxs("div",{className:"sm:hidden border-t border-[#E5E0D8] bg-white px-4 py-3 space-y-1",children:[y.jsx("button",{onClick:()=>{e("/ranking"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"ランキング"}),y.jsx("button",{onClick:()=>{e("/diagnosis"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"🗾 都道府県診断"}),y.jsx("button",{onClick:()=>{e("/column"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"コラム"}),y.jsx("button",{onClick:()=>{e("/privacy"),r(!1)},className:"w-full text-left text-sm text-[#717182] hover:text-[#3D52A0] px-3 py-3 rounded-lg hover:bg-[#F0EDE8]",children:"プライバシーポリシー"}),y.jsx("button",{onClick:()=>{e("/contact"),r(!1)},className:"w-full text-left text-sm text-white bg-[#3D52A0] px-3 py-3 rounded-lg",children:"お問い合わせ"})]})]})}function Gt(){const e=Dt();return y.jsx("footer",{className:"bg-[#1A1A1A] text-white mt-16",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12",children:[y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"font-bold text-base mb-3",style:{fontFamily:"var(--font-serif)"},children:"日本のいろんな統計マップ"}),y.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"政府統計データをもとに47都道府県の様々な指標を可視化。知らなかった日本が、ここにある。"})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"font-medium text-sm mb-3 text-gray-300",children:"コンテンツ"}),y.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[y.jsx("li",{children:y.jsx("button",{onClick:()=>e("/"),className:"hover:text-white transition-colors",children:"統計マップ"})}),y.jsx("li",{children:y.jsx("button",{onClick:()=>e("/ranking"),className:"hover:text-white transition-colors",children:"ランキング"})}),y.jsx("li",{children:y.jsx("button",{onClick:()=>e("/diagnosis"),className:"hover:text-white transition-colors",children:"都道府県診断"})}),y.jsx("li",{children:y.jsx("button",{onClick:()=>e("/column"),className:"hover:text-white transition-colors",children:"コラム"})})]})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"font-medium text-sm mb-3 text-gray-300",children:"データについて"}),y.jsxs("ul",{className:"space-y-2 text-sm text-gray-400",children:[y.jsx("li",{children:"📊 データは政府統計（厚生労働省・総務省・国土交通省等）をもとにしています"}),y.jsx("li",{children:"📎 出典を明記いただければリンク・引用は自由です"}),y.jsx("li",{children:y.jsx("button",{onClick:()=>e("/privacy"),className:"hover:text-white transition-colors",children:"プライバシーポリシー"})}),y.jsx("li",{children:y.jsx("button",{onClick:()=>e("/contact"),className:"hover:text-white transition-colors",children:"お問い合わせ"})})]})]})]}),y.jsxs("div",{className:"border-t border-gray-800 pt-6 text-xs text-gray-500 text-center space-y-1",children:[y.jsx("p",{children:"© 2026 日本のいろんな統計マップ"}),y.jsx("p",{children:"掲載データは政府公式統計をもとにしていますが、一部に推計値を含みます。最新・正確な情報は各省庁の公式サイトをご確認ください。"})]})]})})}const jk="https://japan-stats-likes.100makeniki.workers.dev",_k=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],Ak={"人口・世帯":"人口・世帯","住宅・不動産":"住まい・暮らし","生活・インフラ":"住まい・暮らし",社会問題:"社会問題",医療:"医療・福祉","福祉・介護":"医療・福祉",社会保障:"医療・福祉",経済:"経済・仕事","公務員・公共":"経済・仕事","健康・医療":"健康・食文化",食文化:"健康・食文化","教育・子育て":"教育・文化","文化・宗教":"教育・文化",情報通信:"教育・文化",気候:"自然・気候","農業・産業":"自然・気候","観光・交流":"自然・気候","スポーツ・文化":"スポーツ"},Ok=["人口・世帯","住まい・暮らし","社会問題","医療・福祉","経済・仕事","健康・食文化","教育・文化","自然・気候","スポーツ"],sb={"人口・世帯":"#3D52A0","住まい・暮らし":"#8b5cf6",社会問題:"#dc2626","医療・福祉":"#27ae60","経済・仕事":"#0891b2","健康・食文化":"#16a34a","教育・文化":"#7c3aed","自然・気候":"#65a30d",スポーツ:"#e67e22"};function Ek({values:e,color:t}){const r=Math.min(...e),n=Math.max(...e);return y.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:1,height:44,marginTop:8},children:e.slice(0,47).map((a,o)=>y.jsx("div",{style:{flex:1,height:`${(a-r)/(n-r)*80+20}%`,background:t,opacity:.25+(a-r)/(n-r)*.75,borderRadius:"1px 1px 0 0"}},o))})}function Pk(){const e=Dt(),[t,r]=D.useState([]);return D.useEffect(()=>{fetch(`${jk}/likes/all?id=all`).then(n=>n.json()).then(n=>{const a=[];yr.forEach(o=>{const s=n[`data_${o.id}`]||0;s>0&&a.push({id:o.id,count:s,title:o.title})}),a.sort((o,s)=>s.count-o.count),r(a.slice(0,5))}).catch(()=>{})},[]),t.length===0?null:y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 mb-8 shadow-sm",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[y.jsx("span",{className:"text-lg",children:"🔥"}),y.jsx("h3",{className:"font-bold text-[#1A1A1A] text-sm",style:{fontFamily:"var(--font-serif)"},children:"参考になった！ランキング"})]}),y.jsx("div",{className:"space-y-2",children:t.map(({id:n,count:a,title:o},s)=>y.jsxs("button",{onClick:()=>e(`/detail/${n}`),className:"w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F8F8F6] transition-colors text-left group",children:[y.jsx("div",{className:`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${s===0?"bg-yellow-100 text-yellow-700":s===1?"bg-gray-100 text-gray-600":s===2?"bg-orange-100 text-orange-700":"bg-[#F0EDE8] text-[#717182]"}`,children:s<3?["🥇","🥈","🥉"][s]:s+1}),y.jsx("div",{className:"flex-1 min-w-0 text-xs font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] truncate",children:o}),y.jsxs("div",{className:"text-xs text-[#3D52A0] font-medium flex-shrink-0",children:["👍 ",a]})]},n))})]})}function kk(){const e=Dt(),[t,r]=D.useState("すべて"),[n,a]=D.useState(null),[o,s]=D.useState(""),[u,f]=D.useState(!1),d=_k.filter(x=>x.includes(o)),m=yr.map(x=>({...x,displayCategory:Ak[x.category]||x.category})),h=x=>Array.from(new Set(m.filter(j=>j.displayCategory===x).map(j=>j.category))),g=t==="すべて"?m:m.filter(x=>x.displayCategory===t||x.category===t);return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",onClick:()=>a(null),children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16",children:[y.jsxs("div",{className:"text-center mb-8 sm:mb-10",children:[y.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-[#1A1A1A] via-[#3D52A0] to-[#1A1A1A] bg-clip-text text-transparent leading-tight",style:{fontFamily:"var(--font-serif)"},children:["知ると、日本の",y.jsx("br",{className:"sm:hidden"}),"見え方が変わる。"]}),y.jsxs("p",{className:"text-base sm:text-xl text-[#717182] max-w-2xl mx-auto px-2",children:["47都道府県の政府統計を、地図とランキングで。",y.jsx("br",{className:"hidden sm:block"}),"あなたの暮らしに近いデータから見つけてください。"]})]}),y.jsxs("div",{className:"max-w-3xl mx-auto mb-12",children:[y.jsx("button",{onClick:()=>e("/tools/life-simulator"),className:"block w-full text-left bg-[#3D52A0] rounded-2xl p-6 sm:p-7 mb-3 hover:bg-[#33458a] transition-colors group",children:y.jsxs("div",{className:"flex items-center justify-between gap-4",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-xs text-white/70 mb-1.5 font-medium tracking-wide",children:"人生シミュレーター"}),y.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white mb-1.5",style:{fontFamily:"var(--font-serif)"},children:"もし、あの県に住んでいたら？"}),y.jsx("p",{className:"text-sm text-white/85",children:"年収と家族構成を入れるだけ。47都道府県での暮らしの差と、将来の貯蓄差を試算します。"})]}),y.jsx("span",{className:"text-white text-2xl flex-shrink-0 group-hover:translate-x-1 transition-transform",children:"→"})]})}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{to:"/guide/migration",emoji:"📊",title:"移住先を数字で選ぶ",desc:"6軸でTOP5を一覧"},{to:"/tools/rent-compare",emoji:"🏠",title:"家賃で住める広さ比較",desc:"家賃を入れるだけ"},{to:"/diagnosis",emoji:"🗾",title:"向いてる県を診断",desc:"価値観から判定"}].map(x=>y.jsxs("button",{onClick:()=>e(x.to),className:"text-left bg-white border border-[#E5E0D8] rounded-2xl p-4 hover:border-[#3D52A0] hover:shadow-sm transition-all group",children:[y.jsx("div",{className:"text-xl mb-2",children:x.emoji}),y.jsx("h4",{className:"text-sm font-bold text-[#1A1A1A] mb-0.5 group-hover:text-[#3D52A0] transition-colors",children:x.title}),y.jsx("p",{className:"text-xs text-[#717182]",children:x.desc})]},x.to))})]}),y.jsx("div",{className:"max-w-lg mx-auto mb-10",children:y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8] shadow-sm p-5",children:[y.jsx("p",{className:"text-sm font-medium text-[#1A1A1A] mb-3 text-center",children:"🏡 あなたの都道府県のデータをまとめて見る"}),y.jsxs("div",{className:"relative",children:[y.jsx("input",{type:"text",value:o,onChange:x=>{s(x.target.value),f(!0)},onFocus:()=>f(!0),placeholder:"都道府県名を入力（例：東京、大阪…）",className:"w-full px-4 py-3 border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#3D52A0] focus:ring-2 focus:ring-[#3D52A0]/10"}),u&&o&&y.jsxs("div",{className:"absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E0D8] rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto",children:[d.map(x=>y.jsx("button",{onClick:()=>{e(`/pref/${encodeURIComponent(x)}`),f(!1),s("")},className:"w-full text-left px-4 py-2.5 text-sm hover:bg-[#F0EDE8] transition-colors",children:x},x)),d.length===0&&y.jsx("p",{className:"px-4 py-3 text-sm text-[#717182]",children:"見つかりません"})]})]}),y.jsx("div",{className:"flex flex-wrap gap-2 mt-3",children:["東京","大阪","神奈川","愛知","福岡","北海道","沖縄"].map(x=>y.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(x)}`),className:"text-xs px-3 py-1.5 bg-[#F0EDE8] text-[#717182] rounded-full hover:bg-[#3D52A0] hover:text-white transition-colors",children:x},x))})]})}),y.jsx(Pk,{}),y.jsxs("div",{className:"mb-6 flex items-center justify-between gap-2",onClick:x=>x.stopPropagation(),children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("button",{onClick:()=>{r("すべて"),a(null)},className:`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${t==="すべて"?"bg-[#3D52A0] text-white border-[#3D52A0] shadow-sm":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:["すべて",y.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded-full ${t==="すべて"?"bg-white/20 text-white":"bg-[#F0EDE8] text-[#999]"}`,children:yr.length})]}),y.jsxs("div",{className:"relative",children:[y.jsxs("button",{onClick:()=>a(n==="genre"?null:"genre"),className:`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border ${t!=="すべて"?"bg-[#3D52A0] text-white border-[#3D52A0] shadow-sm":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:[t!=="すべて"?t:"ジャンル別",y.jsx("span",{className:"text-xs opacity-70",children:"▾"})]}),n==="genre"&&y.jsx("div",{className:"absolute top-full left-0 mt-1 bg-white border border-[#E5E0D8] rounded-2xl shadow-xl z-20 w-64 overflow-y-auto",style:{maxHeight:"60vh"},children:Ok.map(x=>{const j=m.filter(O=>O.displayCategory===x).length,S=h(x),b=sb[x]??"#3D52A0",A=t===x||S.includes(t);return y.jsxs("div",{children:[y.jsxs("button",{onClick:()=>{r(x),a(null)},className:`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-[#F8F8F6] transition-colors ${A?"font-medium":""}`,style:A?{color:b}:{},children:[y.jsx("span",{children:x}),y.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-[#F0EDE8] text-[#717182]",children:j})]}),S.length>1&&S.map(O=>{const E=m.filter(N=>N.category===O).length;return y.jsxs("button",{onClick:()=>{r(O),a(null)},className:`w-full flex items-center justify-between pl-8 pr-4 py-2 text-xs hover:bg-[#F8F8F6] transition-colors border-t border-[#F0EDE8] ${t===O?"text-[#3D52A0] font-medium":"text-[#717182]"}`,children:[y.jsxs("span",{children:["└ ",O]}),y.jsx("span",{className:"text-xs text-[#bbb]",children:E})]},O)})]},x)})})]})]}),y.jsxs("button",{onClick:()=>e("/ranking"),className:"text-xs text-[#717182] hover:text-[#3D52A0] whitespace-nowrap flex-shrink-0",children:["全",yr.length,"指標の一覧 →"]})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:g.map(x=>{const j=x.data[0],S=sb[x.displayCategory]??"#3D52A0";return y.jsxs("div",{onClick:()=>e(`/detail/${x.id}`),className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 sm:p-6 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group active:scale-95",children:[y.jsxs("div",{className:"flex items-start justify-between mb-2",children:[y.jsx("span",{className:"inline-block text-xs px-2.5 py-1 rounded-full font-medium",style:{background:`${S}15`,color:S},children:x.displayCategory}),y.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] transition-colors text-sm",children:"→"})]}),y.jsx("h2",{className:"text-base sm:text-lg font-bold mb-1 text-[#1A1A1A] leading-tight",style:{fontFamily:"var(--font-serif)"},children:x.title}),y.jsx("p",{className:"text-xs text-[#717182]",children:x.description}),y.jsx(Ek,{values:x.data.map(b=>b.value),color:S}),y.jsxs("div",{className:"mt-3 flex items-center justify-between text-xs text-[#717182]",children:[y.jsxs("span",{children:["最高: ",y.jsx("span",{className:"font-semibold",style:{color:S},children:j.prefecture})]}),y.jsxs("span",{children:[x.year,"年"]})]})]},x.id)})})]}),y.jsx(Gt,{})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tk=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),ub=e=>{const t=Tk(e);return t.charAt(0).toUpperCase()+t.slice(1)},jj=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ck={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=D.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:s,...u},f)=>D.createElement("svg",{ref:f,...Ck,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:jj("lucide",a),...u},[...s.map(([d,m])=>D.createElement(d,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=(e,t)=>{const r=D.forwardRef(({className:n,...a},o)=>D.createElement(Dk,{ref:o,iconNode:t,className:jj(`lucide-${Nk(ub(e))}`,`lucide-${e}`,n),...a}));return r.displayName=ub(e),r};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Rk=_j("arrow-left",Mk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],$k=_j("search",Ik),Lk=[{name:"北海道・東北",prefectures:["北海道","青森","岩手","宮城","秋田","山形","福島"]},{name:"関東",prefectures:["茨城","栃木","群馬","埼玉","千葉","東京","神奈川"]},{name:"中部",prefectures:["新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知"]},{name:"近畿",prefectures:["三重","滋賀","京都","大阪","兵庫","奈良","和歌山"]},{name:"中国",prefectures:["鳥取","島根","岡山","広島","山口"]},{name:"四国",prefectures:["徳島","香川","愛媛","高知"]},{name:"九州・沖縄",prefectures:["福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"]}];function tp(e,t){return t==="円"?e.toLocaleString()+t:t==="人"||t==="法人"||t==="pt"?Math.round(e).toLocaleString()+t:e.toFixed(2)+t}function Fk({data:e,unit:t}){const r=Math.min(...e.map(o=>o.value)),n=Math.max(...e.map(o=>o.value)),a=o=>{const s=(o-r)/(n-r);return s<.25?{bg:"rgb(245, 230, 211)",text:"#7a4a1e"}:s<.5?{bg:"rgb(232, 168, 124)",text:"#fff"}:s<.75?{bg:"rgb(212, 105, 58)",text:"#fff"}:{bg:"rgb(184, 58, 26)",text:"#fff"}};return y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-8",children:[y.jsxs("div",{className:"mb-8",children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsx("span",{className:"text-sm text-[#717182]",children:"低い"}),y.jsx("span",{className:"text-sm text-[#717182]",children:"高い"})]}),y.jsx("div",{className:"h-4 rounded-full shadow-inner",style:{background:"linear-gradient(to right, rgb(245,230,211), rgb(232,168,124), rgb(212,105,58), rgb(184,58,26))"}}),y.jsxs("div",{className:"flex items-center justify-between mt-2 text-xs text-[#717182]",style:{fontFamily:"monospace"},children:[y.jsx("span",{children:tp(r,t)}),y.jsx("span",{children:tp(n,t)})]})]}),y.jsx("div",{className:"space-y-8",children:Lk.map(o=>y.jsxs("div",{children:[y.jsx("h4",{className:"text-sm font-medium text-[#3D52A0] mb-4",children:o.name}),y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",children:o.prefectures.map(s=>{const u=e.find(m=>m.prefecture===s),{bg:f,text:d}=u?a(u.value):{bg:"#f0f0f0",text:"#999"};return y.jsxs("div",{className:"rounded-lg p-4 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer",style:{backgroundColor:f},children:[y.jsx("div",{className:"text-sm font-medium drop-shadow-sm",style:{color:d},children:s}),u&&y.jsx("div",{className:"text-xs mt-1 drop-shadow-sm",style:{color:d,opacity:.9,fontFamily:"monospace"},children:tp(u.value,t)})]},s)})})]},o.name))})]})}function Aj(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Aj(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ie(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Aj(e))&&(n&&(n+=" "),n+=t);return n}var rp,cb;function Xt(){if(cb)return rp;cb=1;var e=Array.isArray;return rp=e,rp}var np,fb;function Oj(){if(fb)return np;fb=1;var e=typeof lu=="object"&&lu&&lu.Object===Object&&lu;return np=e,np}var ap,db;function Jr(){if(db)return ap;db=1;var e=Oj(),t=typeof self=="object"&&self&&self.Object===Object&&self,r=e||t||Function("return this")();return ap=r,ap}var ip,pb;function ql(){if(pb)return ip;pb=1;var e=Jr(),t=e.Symbol;return ip=t,ip}var op,hb;function Bk(){if(hb)return op;hb=1;var e=ql(),t=Object.prototype,r=t.hasOwnProperty,n=t.toString,a=e?e.toStringTag:void 0;function o(s){var u=r.call(s,a),f=s[a];try{s[a]=void 0;var d=!0}catch{}var m=n.call(s);return d&&(u?s[a]=f:delete s[a]),m}return op=o,op}var lp,mb;function qk(){if(mb)return lp;mb=1;var e=Object.prototype,t=e.toString;function r(n){return t.call(n)}return lp=r,lp}var sp,yb;function jn(){if(yb)return sp;yb=1;var e=ql(),t=Bk(),r=qk(),n="[object Null]",a="[object Undefined]",o=e?e.toStringTag:void 0;function s(u){return u==null?u===void 0?a:n:o&&o in Object(u)?t(u):r(u)}return sp=s,sp}var up,vb;function _n(){if(vb)return up;vb=1;function e(t){return t!=null&&typeof t=="object"}return up=e,up}var cp,gb;function Li(){if(gb)return cp;gb=1;var e=jn(),t=_n(),r="[object Symbol]";function n(a){return typeof a=="symbol"||t(a)&&e(a)==r}return cp=n,cp}var fp,xb;function $y(){if(xb)return fp;xb=1;var e=Xt(),t=Li(),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function a(o,s){if(e(o))return!1;var u=typeof o;return u=="number"||u=="symbol"||u=="boolean"||o==null||t(o)?!0:n.test(o)||!r.test(o)||s!=null&&o in Object(s)}return fp=a,fp}var dp,bb;function Yn(){if(bb)return dp;bb=1;function e(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}return dp=e,dp}var pp,wb;function Ly(){if(wb)return pp;wb=1;var e=jn(),t=Yn(),r="[object AsyncFunction]",n="[object Function]",a="[object GeneratorFunction]",o="[object Proxy]";function s(u){if(!t(u))return!1;var f=e(u);return f==n||f==a||f==r||f==o}return pp=s,pp}var hp,Sb;function zk(){if(Sb)return hp;Sb=1;var e=Jr(),t=e["__core-js_shared__"];return hp=t,hp}var mp,jb;function Uk(){if(jb)return mp;jb=1;var e=zk(),t=(function(){var n=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})();function r(n){return!!t&&t in n}return mp=r,mp}var yp,_b;function Ej(){if(_b)return yp;_b=1;var e=Function.prototype,t=e.toString;function r(n){if(n!=null){try{return t.call(n)}catch{}try{return n+""}catch{}}return""}return yp=r,yp}var vp,Ab;function Wk(){if(Ab)return vp;Ab=1;var e=Ly(),t=Uk(),r=Yn(),n=Ej(),a=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,f=s.toString,d=u.hasOwnProperty,m=RegExp("^"+f.call(d).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(g){if(!r(g)||t(g))return!1;var x=e(g)?m:o;return x.test(n(g))}return vp=h,vp}var gp,Ob;function Hk(){if(Ob)return gp;Ob=1;function e(t,r){return t==null?void 0:t[r]}return gp=e,gp}var xp,Eb;function Oa(){if(Eb)return xp;Eb=1;var e=Wk(),t=Hk();function r(n,a){var o=t(n,a);return e(o)?o:void 0}return xp=r,xp}var bp,Pb;function Ac(){if(Pb)return bp;Pb=1;var e=Oa(),t=e(Object,"create");return bp=t,bp}var wp,kb;function Kk(){if(kb)return wp;kb=1;var e=Ac();function t(){this.__data__=e?e(null):{},this.size=0}return wp=t,wp}var Sp,Nb;function Vk(){if(Nb)return Sp;Nb=1;function e(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}return Sp=e,Sp}var jp,Tb;function Gk(){if(Tb)return jp;Tb=1;var e=Ac(),t="__lodash_hash_undefined__",r=Object.prototype,n=r.hasOwnProperty;function a(o){var s=this.__data__;if(e){var u=s[o];return u===t?void 0:u}return n.call(s,o)?s[o]:void 0}return jp=a,jp}var _p,Cb;function Xk(){if(Cb)return _p;Cb=1;var e=Ac(),t=Object.prototype,r=t.hasOwnProperty;function n(a){var o=this.__data__;return e?o[a]!==void 0:r.call(o,a)}return _p=n,_p}var Ap,Db;function Yk(){if(Db)return Ap;Db=1;var e=Ac(),t="__lodash_hash_undefined__";function r(n,a){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=e&&a===void 0?t:a,this}return Ap=r,Ap}var Op,Mb;function Qk(){if(Mb)return Op;Mb=1;var e=Kk(),t=Vk(),r=Gk(),n=Xk(),a=Yk();function o(s){var u=-1,f=s==null?0:s.length;for(this.clear();++u<f;){var d=s[u];this.set(d[0],d[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=a,Op=o,Op}var Ep,Rb;function Jk(){if(Rb)return Ep;Rb=1;function e(){this.__data__=[],this.size=0}return Ep=e,Ep}var Pp,Ib;function Fy(){if(Ib)return Pp;Ib=1;function e(t,r){return t===r||t!==t&&r!==r}return Pp=e,Pp}var kp,$b;function Oc(){if($b)return kp;$b=1;var e=Fy();function t(r,n){for(var a=r.length;a--;)if(e(r[a][0],n))return a;return-1}return kp=t,kp}var Np,Lb;function Zk(){if(Lb)return Np;Lb=1;var e=Oc(),t=Array.prototype,r=t.splice;function n(a){var o=this.__data__,s=e(o,a);if(s<0)return!1;var u=o.length-1;return s==u?o.pop():r.call(o,s,1),--this.size,!0}return Np=n,Np}var Tp,Fb;function eN(){if(Fb)return Tp;Fb=1;var e=Oc();function t(r){var n=this.__data__,a=e(n,r);return a<0?void 0:n[a][1]}return Tp=t,Tp}var Cp,Bb;function tN(){if(Bb)return Cp;Bb=1;var e=Oc();function t(r){return e(this.__data__,r)>-1}return Cp=t,Cp}var Dp,qb;function rN(){if(qb)return Dp;qb=1;var e=Oc();function t(r,n){var a=this.__data__,o=e(a,r);return o<0?(++this.size,a.push([r,n])):a[o][1]=n,this}return Dp=t,Dp}var Mp,zb;function Ec(){if(zb)return Mp;zb=1;var e=Jk(),t=Zk(),r=eN(),n=tN(),a=rN();function o(s){var u=-1,f=s==null?0:s.length;for(this.clear();++u<f;){var d=s[u];this.set(d[0],d[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=a,Mp=o,Mp}var Rp,Ub;function By(){if(Ub)return Rp;Ub=1;var e=Oa(),t=Jr(),r=e(t,"Map");return Rp=r,Rp}var Ip,Wb;function nN(){if(Wb)return Ip;Wb=1;var e=Qk(),t=Ec(),r=By();function n(){this.size=0,this.__data__={hash:new e,map:new(r||t),string:new e}}return Ip=n,Ip}var $p,Hb;function aN(){if(Hb)return $p;Hb=1;function e(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}return $p=e,$p}var Lp,Kb;function Pc(){if(Kb)return Lp;Kb=1;var e=aN();function t(r,n){var a=r.__data__;return e(n)?a[typeof n=="string"?"string":"hash"]:a.map}return Lp=t,Lp}var Fp,Vb;function iN(){if(Vb)return Fp;Vb=1;var e=Pc();function t(r){var n=e(this,r).delete(r);return this.size-=n?1:0,n}return Fp=t,Fp}var Bp,Gb;function oN(){if(Gb)return Bp;Gb=1;var e=Pc();function t(r){return e(this,r).get(r)}return Bp=t,Bp}var qp,Xb;function lN(){if(Xb)return qp;Xb=1;var e=Pc();function t(r){return e(this,r).has(r)}return qp=t,qp}var zp,Yb;function sN(){if(Yb)return zp;Yb=1;var e=Pc();function t(r,n){var a=e(this,r),o=a.size;return a.set(r,n),this.size+=a.size==o?0:1,this}return zp=t,zp}var Up,Qb;function qy(){if(Qb)return Up;Qb=1;var e=nN(),t=iN(),r=oN(),n=lN(),a=sN();function o(s){var u=-1,f=s==null?0:s.length;for(this.clear();++u<f;){var d=s[u];this.set(d[0],d[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=a,Up=o,Up}var Wp,Jb;function Pj(){if(Jb)return Wp;Jb=1;var e=qy(),t="Expected a function";function r(n,a){if(typeof n!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var o=function(){var s=arguments,u=a?a.apply(this,s):s[0],f=o.cache;if(f.has(u))return f.get(u);var d=n.apply(this,s);return o.cache=f.set(u,d)||f,d};return o.cache=new(r.Cache||e),o}return r.Cache=e,Wp=r,Wp}var Hp,Zb;function uN(){if(Zb)return Hp;Zb=1;var e=Pj(),t=500;function r(n){var a=e(n,function(s){return o.size===t&&o.clear(),s}),o=a.cache;return a}return Hp=r,Hp}var Kp,e4;function cN(){if(e4)return Kp;e4=1;var e=uN(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,n=e(function(a){var o=[];return a.charCodeAt(0)===46&&o.push(""),a.replace(t,function(s,u,f,d){o.push(f?d.replace(r,"$1"):u||s)}),o});return Kp=n,Kp}var Vp,t4;function zy(){if(t4)return Vp;t4=1;function e(t,r){for(var n=-1,a=t==null?0:t.length,o=Array(a);++n<a;)o[n]=r(t[n],n,t);return o}return Vp=e,Vp}var Gp,r4;function fN(){if(r4)return Gp;r4=1;var e=ql(),t=zy(),r=Xt(),n=Li(),a=e?e.prototype:void 0,o=a?a.toString:void 0;function s(u){if(typeof u=="string")return u;if(r(u))return t(u,s)+"";if(n(u))return o?o.call(u):"";var f=u+"";return f=="0"&&1/u==-1/0?"-0":f}return Gp=s,Gp}var Xp,n4;function kj(){if(n4)return Xp;n4=1;var e=fN();function t(r){return r==null?"":e(r)}return Xp=t,Xp}var Yp,a4;function Nj(){if(a4)return Yp;a4=1;var e=Xt(),t=$y(),r=cN(),n=kj();function a(o,s){return e(o)?o:t(o,s)?[o]:r(n(o))}return Yp=a,Yp}var Qp,i4;function kc(){if(i4)return Qp;i4=1;var e=Li();function t(r){if(typeof r=="string"||e(r))return r;var n=r+"";return n=="0"&&1/r==-1/0?"-0":n}return Qp=t,Qp}var Jp,o4;function Uy(){if(o4)return Jp;o4=1;var e=Nj(),t=kc();function r(n,a){a=e(a,n);for(var o=0,s=a.length;n!=null&&o<s;)n=n[t(a[o++])];return o&&o==s?n:void 0}return Jp=r,Jp}var Zp,l4;function Tj(){if(l4)return Zp;l4=1;var e=Uy();function t(r,n,a){var o=r==null?void 0:e(r,n);return o===void 0?a:o}return Zp=t,Zp}var dN=Tj();const vr=We(dN);var eh,s4;function pN(){if(s4)return eh;s4=1;function e(t){return t==null}return eh=e,eh}var hN=pN();const Te=We(hN);var th,u4;function mN(){if(u4)return th;u4=1;var e=jn(),t=Xt(),r=_n(),n="[object String]";function a(o){return typeof o=="string"||!t(o)&&r(o)&&e(o)==n}return th=a,th}var yN=mN();const zl=We(yN);var vN=Ly();const Pe=We(vN);var gN=Yn();const Fi=We(gN);var rh={exports:{}},Le={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c4;function xN(){if(c4)return Le;c4=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),j;j=Symbol.for("react.module.reference");function S(b){if(typeof b=="object"&&b!==null){var A=b.$$typeof;switch(A){case e:switch(b=b.type,b){case r:case a:case n:case d:case m:return b;default:switch(b=b&&b.$$typeof,b){case u:case s:case f:case g:case h:case o:return b;default:return A}}case t:return A}}}return Le.ContextConsumer=s,Le.ContextProvider=o,Le.Element=e,Le.ForwardRef=f,Le.Fragment=r,Le.Lazy=g,Le.Memo=h,Le.Portal=t,Le.Profiler=a,Le.StrictMode=n,Le.Suspense=d,Le.SuspenseList=m,Le.isAsyncMode=function(){return!1},Le.isConcurrentMode=function(){return!1},Le.isContextConsumer=function(b){return S(b)===s},Le.isContextProvider=function(b){return S(b)===o},Le.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===e},Le.isForwardRef=function(b){return S(b)===f},Le.isFragment=function(b){return S(b)===r},Le.isLazy=function(b){return S(b)===g},Le.isMemo=function(b){return S(b)===h},Le.isPortal=function(b){return S(b)===t},Le.isProfiler=function(b){return S(b)===a},Le.isStrictMode=function(b){return S(b)===n},Le.isSuspense=function(b){return S(b)===d},Le.isSuspenseList=function(b){return S(b)===m},Le.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===r||b===a||b===n||b===d||b===m||b===x||typeof b=="object"&&b!==null&&(b.$$typeof===g||b.$$typeof===h||b.$$typeof===o||b.$$typeof===s||b.$$typeof===f||b.$$typeof===j||b.getModuleId!==void 0)},Le.typeOf=S,Le}var f4;function bN(){return f4||(f4=1,rh.exports=xN()),rh.exports}var wN=bN(),nh,d4;function Cj(){if(d4)return nh;d4=1;var e=jn(),t=_n(),r="[object Number]";function n(a){return typeof a=="number"||t(a)&&e(a)==r}return nh=n,nh}var ah,p4;function SN(){if(p4)return ah;p4=1;var e=Cj();function t(r){return e(r)&&r!=+r}return ah=t,ah}var jN=SN();const Ul=We(jN);var _N=Cj();const AN=We(_N);var Rr=function(t){return t===0?0:t>0?1:-1},va=function(t){return zl(t)&&t.indexOf("%")===t.length-1},ce=function(t){return AN(t)&&!Ul(t)},ht=function(t){return ce(t)||zl(t)},ON=0,Wl=function(t){var r=++ON;return"".concat(t||"").concat(r)},Sa=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!ce(t)&&!zl(t))return n;var o;if(va(t)){var s=t.indexOf("%");o=r*parseFloat(t.slice(0,s))/100}else o=+t;return Ul(o)&&(o=n),a&&o>r&&(o=r),o},Vn=function(t){if(!t)return null;var r=Object.keys(t);return r&&r.length?t[r[0]]:null},EN=function(t){if(!Array.isArray(t))return!1;for(var r=t.length,n={},a=0;a<r;a++)if(!n[t[a]])n[t[a]]=!0;else return!0;return!1},Mr=function(t,r){return ce(t)&&ce(r)?function(n){return t+n*(r-t)}:function(){return r}};function Ou(e,t,r){return!e||!e.length?null:e.find(function(n){return n&&(typeof t=="function"?t(n):vr(n,t))===r})}function ci(e,t){for(var r in e)if({}.hasOwnProperty.call(e,r)&&(!{}.hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if({}.hasOwnProperty.call(t,n)&&!{}.hasOwnProperty.call(e,n))return!1;return!0}function u2(e){"@babel/helpers - typeof";return u2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u2(e)}var PN=["viewBox","children"],kN=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],h4=["points","pathLength"],ih={svg:PN,polygon:h4,polyline:h4},Wy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Eu=function(t,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var n=t;if(D.isValidElement(t)&&(n=t.props),!Fi(n))return null;var a={};return Object.keys(n).forEach(function(o){Wy.includes(o)&&(a[o]=r||function(s){return n[o](n,s)})}),a},NN=function(t,r,n){return function(a){return t(r,n,a),null}},Pu=function(t,r,n){if(!Fi(t)||u2(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(o){var s=t[o];Wy.includes(o)&&typeof s=="function"&&(a||(a={}),a[o]=NN(s,r,n))}),a},TN=["children"],CN=["children"];function m4(e,t){if(e==null)return{};var r=DN(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function DN(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function c2(e){"@babel/helpers - typeof";return c2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c2(e)}var y4={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},hn=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},v4=null,oh=null,Hy=function e(t){if(t===v4&&Array.isArray(oh))return oh;var r=[];return D.Children.forEach(t,function(n){Te(n)||(wN.isFragment(n)?r=r.concat(e(n.props.children)):r.push(n))}),oh=r,v4=t,r};function gr(e,t){var r=[],n=[];return Array.isArray(t)?n=t.map(function(a){return hn(a)}):n=[hn(t)],Hy(e).forEach(function(a){var o=vr(a,"type.displayName")||vr(a,"type.name");n.indexOf(o)!==-1&&r.push(a)}),r}function rr(e,t){var r=gr(e,t);return r&&r[0]}var g4=function(t){if(!t||!t.props)return!1;var r=t.props,n=r.width,a=r.height;return!(!ce(n)||n<=0||!ce(a)||a<=0)},MN=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],RN=function(t){return t&&t.type&&zl(t.type)&&MN.indexOf(t.type)>=0},IN=function(t){return t&&c2(t)==="object"&&"clipDot"in t},$N=function(t,r,n,a){var o,s=(o=ih==null?void 0:ih[a])!==null&&o!==void 0?o:[];return r.startsWith("data-")||!Pe(t)&&(a&&s.includes(r)||kN.includes(r))||n&&Wy.includes(r)},Ce=function(t,r,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(D.isValidElement(t)&&(a=t.props),!Fi(a))return null;var o={};return Object.keys(a).forEach(function(s){var u;$N((u=a)===null||u===void 0?void 0:u[s],s,r,n)&&(o[s]=a[s])}),o},f2=function e(t,r){if(t===r)return!0;var n=D.Children.count(t);if(n!==D.Children.count(r))return!1;if(n===0)return!0;if(n===1)return x4(Array.isArray(t)?t[0]:t,Array.isArray(r)?r[0]:r);for(var a=0;a<n;a++){var o=t[a],s=r[a];if(Array.isArray(o)||Array.isArray(s)){if(!e(o,s))return!1}else if(!x4(o,s))return!1}return!0},x4=function(t,r){if(Te(t)&&Te(r))return!0;if(!Te(t)&&!Te(r)){var n=t.props||{},a=n.children,o=m4(n,TN),s=r.props||{},u=s.children,f=m4(s,CN);return a&&u?ci(o,f)&&f2(a,u):!a&&!u?ci(o,f):!1}return!1},b4=function(t,r){var n=[],a={};return Hy(t).forEach(function(o,s){if(RN(o))n.push(o);else if(o){var u=hn(o.type),f=r[u]||{},d=f.handler,m=f.once;if(d&&(!m||!a[u])){var h=d(o,u,s);n.push(h),a[u]=!0}}}),n},LN=function(t){var r=t&&t.type;return r&&y4[r]?y4[r]:null},FN=function(t,r){return Hy(r).indexOf(t)},BN=["children","width","height","viewBox","className","style","title","desc"];function d2(){return d2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d2.apply(this,arguments)}function qN(e,t){if(e==null)return{};var r=zN(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function zN(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function p2(e){var t=e.children,r=e.width,n=e.height,a=e.viewBox,o=e.className,s=e.style,u=e.title,f=e.desc,d=qN(e,BN),m=a||{width:r,height:n,x:0,y:0},h=Ie("recharts-surface",o);return q.createElement("svg",d2({},Ce(d,!0,"svg"),{className:h,width:r,height:n,style:s,viewBox:"".concat(m.x," ").concat(m.y," ").concat(m.width," ").concat(m.height)}),q.createElement("title",null,u),q.createElement("desc",null,f),t)}var UN=["children","className"];function h2(){return h2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h2.apply(this,arguments)}function WN(e,t){if(e==null)return{};var r=HN(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function HN(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var lt=q.forwardRef(function(e,t){var r=e.children,n=e.className,a=WN(e,UN),o=Ie("recharts-layer",n);return q.createElement("g",h2({className:o},Ce(a,!0),{ref:t}),r)}),mn=function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o]},lh,w4;function KN(){if(w4)return lh;w4=1;function e(t,r,n){var a=-1,o=t.length;r<0&&(r=-r>o?0:o+r),n=n>o?o:n,n<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var s=Array(o);++a<o;)s[a]=t[a+r];return s}return lh=e,lh}var sh,S4;function VN(){if(S4)return sh;S4=1;var e=KN();function t(r,n,a){var o=r.length;return a=a===void 0?o:a,!n&&a>=o?r:e(r,n,a)}return sh=t,sh}var uh,j4;function Dj(){if(j4)return uh;j4=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",a=t+r+n,o="\\ufe0e\\ufe0f",s="\\u200d",u=RegExp("["+s+e+a+o+"]");function f(d){return u.test(d)}return uh=f,uh}var ch,_4;function GN(){if(_4)return ch;_4=1;function e(t){return t.split("")}return ch=e,ch}var fh,A4;function XN(){if(A4)return fh;A4=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",a=t+r+n,o="\\ufe0e\\ufe0f",s="["+e+"]",u="["+a+"]",f="\\ud83c[\\udffb-\\udfff]",d="(?:"+u+"|"+f+")",m="[^"+e+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",x="\\u200d",j=d+"?",S="["+o+"]?",b="(?:"+x+"(?:"+[m,h,g].join("|")+")"+S+j+")*",A=S+j+b,O="(?:"+[m+u+"?",u,h,g,s].join("|")+")",E=RegExp(f+"(?="+f+")|"+O+A,"g");function N(_){return _.match(E)||[]}return fh=N,fh}var dh,O4;function YN(){if(O4)return dh;O4=1;var e=GN(),t=Dj(),r=XN();function n(a){return t(a)?r(a):e(a)}return dh=n,dh}var ph,E4;function QN(){if(E4)return ph;E4=1;var e=VN(),t=Dj(),r=YN(),n=kj();function a(o){return function(s){s=n(s);var u=t(s)?r(s):void 0,f=u?u[0]:s.charAt(0),d=u?e(u,1).join(""):s.slice(1);return f[o]()+d}}return ph=a,ph}var hh,P4;function JN(){if(P4)return hh;P4=1;var e=QN(),t=e("toUpperCase");return hh=t,hh}var ZN=JN();const Nc=We(ZN);function Ke(e){return function(){return e}}const Mj=Math.cos,ku=Math.sin,Ir=Math.sqrt,Nu=Math.PI,Tc=2*Nu,m2=Math.PI,y2=2*m2,ma=1e-6,e9=y2-ma;function Rj(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=arguments[t]+e[t]}function t9(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Rj;const r=10**t;return function(n){this._+=n[0];for(let a=1,o=n.length;a<o;++a)this._+=Math.round(arguments[a]*r)/r+n[a]}}class r9{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Rj:t9(t)}moveTo(t,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,r){this._append`L${this._x1=+t},${this._y1=+r}`}quadraticCurveTo(t,r,n,a){this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+a}`}bezierCurveTo(t,r,n,a,o,s){this._append`C${+t},${+r},${+n},${+a},${this._x1=+o},${this._y1=+s}`}arcTo(t,r,n,a,o){if(t=+t,r=+r,n=+n,a=+a,o=+o,o<0)throw new Error(`negative radius: ${o}`);let s=this._x1,u=this._y1,f=n-t,d=a-r,m=s-t,h=u-r,g=m*m+h*h;if(this._x1===null)this._append`M${this._x1=t},${this._y1=r}`;else if(g>ma)if(!(Math.abs(h*f-d*m)>ma)||!o)this._append`L${this._x1=t},${this._y1=r}`;else{let x=n-s,j=a-u,S=f*f+d*d,b=x*x+j*j,A=Math.sqrt(S),O=Math.sqrt(g),E=o*Math.tan((m2-Math.acos((S+g-b)/(2*A*O)))/2),N=E/O,_=E/A;Math.abs(N-1)>ma&&this._append`L${t+N*m},${r+N*h}`,this._append`A${o},${o},0,0,${+(h*x>m*j)},${this._x1=t+_*f},${this._y1=r+_*d}`}}arc(t,r,n,a,o,s){if(t=+t,r=+r,n=+n,s=!!s,n<0)throw new Error(`negative radius: ${n}`);let u=n*Math.cos(a),f=n*Math.sin(a),d=t+u,m=r+f,h=1^s,g=s?a-o:o-a;this._x1===null?this._append`M${d},${m}`:(Math.abs(this._x1-d)>ma||Math.abs(this._y1-m)>ma)&&this._append`L${d},${m}`,n&&(g<0&&(g=g%y2+y2),g>e9?this._append`A${n},${n},0,1,${h},${t-u},${r-f}A${n},${n},0,1,${h},${this._x1=d},${this._y1=m}`:g>ma&&this._append`A${n},${n},0,${+(g>=m2)},${h},${this._x1=t+n*Math.cos(o)},${this._y1=r+n*Math.sin(o)}`)}rect(t,r,n,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+a}h${-n}Z`}toString(){return this._}}function Ky(e){let t=3;return e.digits=function(r){if(!arguments.length)return t;if(r==null)t=null;else{const n=Math.floor(r);if(!(n>=0))throw new RangeError(`invalid digits: ${r}`);t=n}return e},()=>new r9(t)}function Vy(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Ij(e){this._context=e}Ij.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function Cc(e){return new Ij(e)}function $j(e){return e[0]}function Lj(e){return e[1]}function Fj(e,t){var r=Ke(!0),n=null,a=Cc,o=null,s=Ky(u);e=typeof e=="function"?e:e===void 0?$j:Ke(e),t=typeof t=="function"?t:t===void 0?Lj:Ke(t);function u(f){var d,m=(f=Vy(f)).length,h,g=!1,x;for(n==null&&(o=a(x=s())),d=0;d<=m;++d)!(d<m&&r(h=f[d],d,f))===g&&((g=!g)?o.lineStart():o.lineEnd()),g&&o.point(+e(h,d,f),+t(h,d,f));if(x)return o=null,x+""||null}return u.x=function(f){return arguments.length?(e=typeof f=="function"?f:Ke(+f),u):e},u.y=function(f){return arguments.length?(t=typeof f=="function"?f:Ke(+f),u):t},u.defined=function(f){return arguments.length?(r=typeof f=="function"?f:Ke(!!f),u):r},u.curve=function(f){return arguments.length?(a=f,n!=null&&(o=a(n)),u):a},u.context=function(f){return arguments.length?(f==null?n=o=null:o=a(n=f),u):n},u}function cu(e,t,r){var n=null,a=Ke(!0),o=null,s=Cc,u=null,f=Ky(d);e=typeof e=="function"?e:e===void 0?$j:Ke(+e),t=typeof t=="function"?t:Ke(t===void 0?0:+t),r=typeof r=="function"?r:r===void 0?Lj:Ke(+r);function d(h){var g,x,j,S=(h=Vy(h)).length,b,A=!1,O,E=new Array(S),N=new Array(S);for(o==null&&(u=s(O=f())),g=0;g<=S;++g){if(!(g<S&&a(b=h[g],g,h))===A)if(A=!A)x=g,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),j=g-1;j>=x;--j)u.point(E[j],N[j]);u.lineEnd(),u.areaEnd()}A&&(E[g]=+e(b,g,h),N[g]=+t(b,g,h),u.point(n?+n(b,g,h):E[g],r?+r(b,g,h):N[g]))}if(O)return u=null,O+""||null}function m(){return Fj().defined(a).curve(s).context(o)}return d.x=function(h){return arguments.length?(e=typeof h=="function"?h:Ke(+h),n=null,d):e},d.x0=function(h){return arguments.length?(e=typeof h=="function"?h:Ke(+h),d):e},d.x1=function(h){return arguments.length?(n=h==null?null:typeof h=="function"?h:Ke(+h),d):n},d.y=function(h){return arguments.length?(t=typeof h=="function"?h:Ke(+h),r=null,d):t},d.y0=function(h){return arguments.length?(t=typeof h=="function"?h:Ke(+h),d):t},d.y1=function(h){return arguments.length?(r=h==null?null:typeof h=="function"?h:Ke(+h),d):r},d.lineX0=d.lineY0=function(){return m().x(e).y(t)},d.lineY1=function(){return m().x(e).y(r)},d.lineX1=function(){return m().x(n).y(t)},d.defined=function(h){return arguments.length?(a=typeof h=="function"?h:Ke(!!h),d):a},d.curve=function(h){return arguments.length?(s=h,o!=null&&(u=s(o)),d):s},d.context=function(h){return arguments.length?(h==null?o=u=null:u=s(o=h),d):o},d}class Bj{constructor(t,r){this._context=t,this._x=r}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,r){switch(t=+t,r=+r,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,r,t,r):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+r)/2,t,this._y0,t,r);break}}this._x0=t,this._y0=r}}function n9(e){return new Bj(e,!0)}function a9(e){return new Bj(e,!1)}const Gy={draw(e,t){const r=Ir(t/Nu);e.moveTo(r,0),e.arc(0,0,r,0,Tc)}},i9={draw(e,t){const r=Ir(t/5)/2;e.moveTo(-3*r,-r),e.lineTo(-r,-r),e.lineTo(-r,-3*r),e.lineTo(r,-3*r),e.lineTo(r,-r),e.lineTo(3*r,-r),e.lineTo(3*r,r),e.lineTo(r,r),e.lineTo(r,3*r),e.lineTo(-r,3*r),e.lineTo(-r,r),e.lineTo(-3*r,r),e.closePath()}},qj=Ir(1/3),o9=qj*2,l9={draw(e,t){const r=Ir(t/o9),n=r*qj;e.moveTo(0,-r),e.lineTo(n,0),e.lineTo(0,r),e.lineTo(-n,0),e.closePath()}},s9={draw(e,t){const r=Ir(t),n=-r/2;e.rect(n,n,r,r)}},u9=.8908130915292852,zj=ku(Nu/10)/ku(7*Nu/10),c9=ku(Tc/10)*zj,f9=-Mj(Tc/10)*zj,d9={draw(e,t){const r=Ir(t*u9),n=c9*r,a=f9*r;e.moveTo(0,-r),e.lineTo(n,a);for(let o=1;o<5;++o){const s=Tc*o/5,u=Mj(s),f=ku(s);e.lineTo(f*r,-u*r),e.lineTo(u*n-f*a,f*n+u*a)}e.closePath()}},mh=Ir(3),p9={draw(e,t){const r=-Ir(t/(mh*3));e.moveTo(0,r*2),e.lineTo(-mh*r,-r),e.lineTo(mh*r,-r),e.closePath()}},dr=-.5,pr=Ir(3)/2,v2=1/Ir(12),h9=(v2/2+1)*3,m9={draw(e,t){const r=Ir(t/h9),n=r/2,a=r*v2,o=n,s=r*v2+r,u=-o,f=s;e.moveTo(n,a),e.lineTo(o,s),e.lineTo(u,f),e.lineTo(dr*n-pr*a,pr*n+dr*a),e.lineTo(dr*o-pr*s,pr*o+dr*s),e.lineTo(dr*u-pr*f,pr*u+dr*f),e.lineTo(dr*n+pr*a,dr*a-pr*n),e.lineTo(dr*o+pr*s,dr*s-pr*o),e.lineTo(dr*u+pr*f,dr*f-pr*u),e.closePath()}};function y9(e,t){let r=null,n=Ky(a);e=typeof e=="function"?e:Ke(e||Gy),t=typeof t=="function"?t:Ke(t===void 0?64:+t);function a(){let o;if(r||(r=o=n()),e.apply(this,arguments).draw(r,+t.apply(this,arguments)),o)return r=null,o+""||null}return a.type=function(o){return arguments.length?(e=typeof o=="function"?o:Ke(o),a):e},a.size=function(o){return arguments.length?(t=typeof o=="function"?o:Ke(+o),a):t},a.context=function(o){return arguments.length?(r=o??null,a):r},a}function Tu(){}function Cu(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function Uj(e){this._context=e}Uj.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Cu(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Cu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function v9(e){return new Uj(e)}function Wj(e){this._context=e}Wj.prototype={areaStart:Tu,areaEnd:Tu,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Cu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function g9(e){return new Wj(e)}function Hj(e){this._context=e}Hj.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var r=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(r,n):this._context.moveTo(r,n);break;case 3:this._point=4;default:Cu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function x9(e){return new Hj(e)}function Kj(e){this._context=e}Kj.prototype={areaStart:Tu,areaEnd:Tu,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function b9(e){return new Kj(e)}function k4(e){return e<0?-1:1}function N4(e,t,r){var n=e._x1-e._x0,a=t-e._x1,o=(e._y1-e._y0)/(n||a<0&&-0),s=(r-e._y1)/(a||n<0&&-0),u=(o*a+s*n)/(n+a);return(k4(o)+k4(s))*Math.min(Math.abs(o),Math.abs(s),.5*Math.abs(u))||0}function T4(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}function yh(e,t,r){var n=e._x0,a=e._y0,o=e._x1,s=e._y1,u=(o-n)/3;e._context.bezierCurveTo(n+u,a+u*t,o-u,s-u*r,o,s)}function Du(e){this._context=e}Du.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:yh(this,this._t0,T4(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var r=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,yh(this,T4(this,r=N4(this,e,t)),r);break;default:yh(this,this._t0,r=N4(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=r}}};function Vj(e){this._context=new Gj(e)}(Vj.prototype=Object.create(Du.prototype)).point=function(e,t){Du.prototype.point.call(this,t,e)};function Gj(e){this._context=e}Gj.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,a,o){this._context.bezierCurveTo(t,e,n,r,o,a)}};function w9(e){return new Du(e)}function S9(e){return new Vj(e)}function Xj(e){this._context=e}Xj.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),r===2)this._context.lineTo(e[1],t[1]);else for(var n=C4(e),a=C4(t),o=0,s=1;s<r;++o,++s)this._context.bezierCurveTo(n[0][o],a[0][o],n[1][o],a[1][o],e[s],t[s]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function C4(e){var t,r=e.length-1,n,a=new Array(r),o=new Array(r),s=new Array(r);for(a[0]=0,o[0]=2,s[0]=e[0]+2*e[1],t=1;t<r-1;++t)a[t]=1,o[t]=4,s[t]=4*e[t]+2*e[t+1];for(a[r-1]=2,o[r-1]=7,s[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=a[t]/o[t-1],o[t]-=n,s[t]-=n*s[t-1];for(a[r-1]=s[r-1]/o[r-1],t=r-2;t>=0;--t)a[t]=(s[t]-a[t+1])/o[t];for(o[r-1]=(e[r]+a[r-1])/2,t=0;t<r-1;++t)o[t]=2*e[t+1]-a[t+1];return[a,o]}function j9(e){return new Xj(e)}function Dc(e,t){this._context=e,this._t=t}Dc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function _9(e){return new Dc(e,.5)}function A9(e){return new Dc(e,0)}function O9(e){return new Dc(e,1)}function hi(e,t){if((s=e.length)>1)for(var r=1,n,a,o=e[t[0]],s,u=o.length;r<s;++r)for(a=o,o=e[t[r]],n=0;n<u;++n)o[n][1]+=o[n][0]=isNaN(a[n][1])?a[n][0]:a[n][1]}function g2(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function E9(e,t){return e[t]}function P9(e){const t=[];return t.key=e,t}function k9(){var e=Ke([]),t=g2,r=hi,n=E9;function a(o){var s=Array.from(e.apply(this,arguments),P9),u,f=s.length,d=-1,m;for(const h of o)for(u=0,++d;u<f;++u)(s[u][d]=[0,+n(h,s[u].key,d,o)]).data=h;for(u=0,m=Vy(t(s));u<f;++u)s[m[u]].index=u;return r(s,m),s}return a.keys=function(o){return arguments.length?(e=typeof o=="function"?o:Ke(Array.from(o)),a):e},a.value=function(o){return arguments.length?(n=typeof o=="function"?o:Ke(+o),a):n},a.order=function(o){return arguments.length?(t=o==null?g2:typeof o=="function"?o:Ke(Array.from(o)),a):t},a.offset=function(o){return arguments.length?(r=o??hi,a):r},a}function N9(e,t){if((n=e.length)>0){for(var r,n,a=0,o=e[0].length,s;a<o;++a){for(s=r=0;r<n;++r)s+=e[r][a][1]||0;if(s)for(r=0;r<n;++r)e[r][a][1]/=s}hi(e,t)}}function T9(e,t){if((a=e.length)>0){for(var r=0,n=e[t[0]],a,o=n.length;r<o;++r){for(var s=0,u=0;s<a;++s)u+=e[s][r][1]||0;n[r][1]+=n[r][0]=-u/2}hi(e,t)}}function C9(e,t){if(!(!((s=e.length)>0)||!((o=(a=e[t[0]]).length)>0))){for(var r=0,n=1,a,o,s;n<o;++n){for(var u=0,f=0,d=0;u<s;++u){for(var m=e[t[u]],h=m[n][1]||0,g=m[n-1][1]||0,x=(h-g)/2,j=0;j<u;++j){var S=e[t[j]],b=S[n][1]||0,A=S[n-1][1]||0;x+=b-A}f+=h,d+=x*h}a[n-1][1]+=a[n-1][0]=r,f&&(r-=d/f)}a[n-1][1]+=a[n-1][0]=r,hi(e,t)}}function nl(e){"@babel/helpers - typeof";return nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nl(e)}var D9=["type","size","sizeType"];function x2(){return x2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x2.apply(this,arguments)}function D4(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function M4(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?D4(Object(r),!0).forEach(function(n){M9(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D4(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function M9(e,t,r){return t=R9(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R9(e){var t=I9(e,"string");return nl(t)=="symbol"?t:t+""}function I9(e,t){if(nl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(nl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $9(e,t){if(e==null)return{};var r=L9(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function L9(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var Yj={symbolCircle:Gy,symbolCross:i9,symbolDiamond:l9,symbolSquare:s9,symbolStar:d9,symbolTriangle:p9,symbolWye:m9},F9=Math.PI/180,B9=function(t){var r="symbol".concat(Nc(t));return Yj[r]||Gy},q9=function(t,r,n){if(r==="area")return t;switch(n){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*F9;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},z9=function(t,r){Yj["symbol".concat(Nc(t))]=r},Xy=function(t){var r=t.type,n=r===void 0?"circle":r,a=t.size,o=a===void 0?64:a,s=t.sizeType,u=s===void 0?"area":s,f=$9(t,D9),d=M4(M4({},f),{},{type:n,size:o,sizeType:u}),m=function(){var b=B9(n),A=y9().type(b).size(q9(o,u,n));return A()},h=d.className,g=d.cx,x=d.cy,j=Ce(d,!0);return g===+g&&x===+x&&o===+o?q.createElement("path",x2({},j,{className:Ie("recharts-symbols",h),transform:"translate(".concat(g,", ").concat(x,")"),d:m()})):null};Xy.registerSymbol=z9;function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function b2(){return b2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b2.apply(this,arguments)}function R4(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function U9(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?R4(Object(r),!0).forEach(function(n){al(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R4(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function W9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H9(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Jj(n.key),n)}}function K9(e,t,r){return t&&H9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function V9(e,t,r){return t=Mu(t),G9(e,Qj()?Reflect.construct(t,r||[],Mu(e).constructor):t.apply(e,r))}function G9(e,t){if(t&&(mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return X9(e)}function X9(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qj(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Qj=function(){return!!e})()}function Mu(e){return Mu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Mu(e)}function Y9(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w2(e,t)}function w2(e,t){return w2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},w2(e,t)}function al(e,t,r){return t=Jj(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jj(e){var t=Q9(e,"string");return mi(t)=="symbol"?t:t+""}function Q9(e,t){if(mi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(mi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var hr=32,Yy=(function(e){function t(){return W9(this,t),V9(this,t,arguments)}return Y9(t,e),K9(t,[{key:"renderIcon",value:function(n){var a=this.props.inactiveColor,o=hr/2,s=hr/6,u=hr/3,f=n.inactive?a:n.color;if(n.type==="plainline")return q.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:n.payload.strokeDasharray,x1:0,y1:o,x2:hr,y2:o,className:"recharts-legend-icon"});if(n.type==="line")return q.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(o,"h").concat(u,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(2*u,",").concat(o,`
            H`).concat(hr,"M").concat(2*u,",").concat(o,`
            A`).concat(s,",").concat(s,",0,1,1,").concat(u,",").concat(o),className:"recharts-legend-icon"});if(n.type==="rect")return q.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(hr/8,"h").concat(hr,"v").concat(hr*3/4,"h").concat(-hr,"z"),className:"recharts-legend-icon"});if(q.isValidElement(n.legendIcon)){var d=U9({},n);return delete d.legendIcon,q.cloneElement(n.legendIcon,d)}return q.createElement(Xy,{fill:f,cx:o,cy:o,size:hr,sizeType:"diameter",type:n.type})}},{key:"renderItems",value:function(){var n=this,a=this.props,o=a.payload,s=a.iconSize,u=a.layout,f=a.formatter,d=a.inactiveColor,m={x:0,y:0,width:hr,height:hr},h={display:u==="horizontal"?"inline-block":"block",marginRight:10},g={display:"inline-block",verticalAlign:"middle",marginRight:4};return o.map(function(x,j){var S=x.formatter||f,b=Ie(al(al({"recharts-legend-item":!0},"legend-item-".concat(j),!0),"inactive",x.inactive));if(x.type==="none")return null;var A=Pe(x.value)?null:x.value;mn(!Pe(x.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var O=x.inactive?d:x.color;return q.createElement("li",b2({className:b,style:h,key:"legend-item-".concat(j)},Pu(n.props,x,j)),q.createElement(p2,{width:s,height:s,viewBox:m,style:g},n.renderIcon(x)),q.createElement("span",{className:"recharts-legend-item-text",style:{color:O}},S?S(A,x,j):A))})}},{key:"render",value:function(){var n=this.props,a=n.payload,o=n.layout,s=n.align;if(!a||!a.length)return null;var u={padding:0,margin:0,textAlign:o==="horizontal"?s:"left"};return q.createElement("ul",{className:"recharts-default-legend",style:u},this.renderItems())}}])})(D.PureComponent);al(Yy,"displayName","Legend");al(Yy,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var vh,I4;function J9(){if(I4)return vh;I4=1;var e=Ec();function t(){this.__data__=new e,this.size=0}return vh=t,vh}var gh,$4;function Z9(){if($4)return gh;$4=1;function e(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n}return gh=e,gh}var xh,L4;function eT(){if(L4)return xh;L4=1;function e(t){return this.__data__.get(t)}return xh=e,xh}var bh,F4;function tT(){if(F4)return bh;F4=1;function e(t){return this.__data__.has(t)}return bh=e,bh}var wh,B4;function rT(){if(B4)return wh;B4=1;var e=Ec(),t=By(),r=qy(),n=200;function a(o,s){var u=this.__data__;if(u instanceof e){var f=u.__data__;if(!t||f.length<n-1)return f.push([o,s]),this.size=++u.size,this;u=this.__data__=new r(f)}return u.set(o,s),this.size=u.size,this}return wh=a,wh}var Sh,q4;function Zj(){if(q4)return Sh;q4=1;var e=Ec(),t=J9(),r=Z9(),n=eT(),a=tT(),o=rT();function s(u){var f=this.__data__=new e(u);this.size=f.size}return s.prototype.clear=t,s.prototype.delete=r,s.prototype.get=n,s.prototype.has=a,s.prototype.set=o,Sh=s,Sh}var jh,z4;function nT(){if(z4)return jh;z4=1;var e="__lodash_hash_undefined__";function t(r){return this.__data__.set(r,e),this}return jh=t,jh}var _h,U4;function aT(){if(U4)return _h;U4=1;function e(t){return this.__data__.has(t)}return _h=e,_h}var Ah,W4;function e_(){if(W4)return Ah;W4=1;var e=qy(),t=nT(),r=aT();function n(a){var o=-1,s=a==null?0:a.length;for(this.__data__=new e;++o<s;)this.add(a[o])}return n.prototype.add=n.prototype.push=t,n.prototype.has=r,Ah=n,Ah}var Oh,H4;function t_(){if(H4)return Oh;H4=1;function e(t,r){for(var n=-1,a=t==null?0:t.length;++n<a;)if(r(t[n],n,t))return!0;return!1}return Oh=e,Oh}var Eh,K4;function r_(){if(K4)return Eh;K4=1;function e(t,r){return t.has(r)}return Eh=e,Eh}var Ph,V4;function n_(){if(V4)return Ph;V4=1;var e=e_(),t=t_(),r=r_(),n=1,a=2;function o(s,u,f,d,m,h){var g=f&n,x=s.length,j=u.length;if(x!=j&&!(g&&j>x))return!1;var S=h.get(s),b=h.get(u);if(S&&b)return S==u&&b==s;var A=-1,O=!0,E=f&a?new e:void 0;for(h.set(s,u),h.set(u,s);++A<x;){var N=s[A],_=u[A];if(d)var P=g?d(_,N,A,u,s,h):d(N,_,A,s,u,h);if(P!==void 0){if(P)continue;O=!1;break}if(E){if(!t(u,function(T,R){if(!r(E,R)&&(N===T||m(N,T,f,d,h)))return E.push(R)})){O=!1;break}}else if(!(N===_||m(N,_,f,d,h))){O=!1;break}}return h.delete(s),h.delete(u),O}return Ph=o,Ph}var kh,G4;function iT(){if(G4)return kh;G4=1;var e=Jr(),t=e.Uint8Array;return kh=t,kh}var Nh,X4;function oT(){if(X4)return Nh;X4=1;function e(t){var r=-1,n=Array(t.size);return t.forEach(function(a,o){n[++r]=[o,a]}),n}return Nh=e,Nh}var Th,Y4;function Qy(){if(Y4)return Th;Y4=1;function e(t){var r=-1,n=Array(t.size);return t.forEach(function(a){n[++r]=a}),n}return Th=e,Th}var Ch,Q4;function lT(){if(Q4)return Ch;Q4=1;var e=ql(),t=iT(),r=Fy(),n=n_(),a=oT(),o=Qy(),s=1,u=2,f="[object Boolean]",d="[object Date]",m="[object Error]",h="[object Map]",g="[object Number]",x="[object RegExp]",j="[object Set]",S="[object String]",b="[object Symbol]",A="[object ArrayBuffer]",O="[object DataView]",E=e?e.prototype:void 0,N=E?E.valueOf:void 0;function _(P,T,R,$,z,B,M){switch(R){case O:if(P.byteLength!=T.byteLength||P.byteOffset!=T.byteOffset)return!1;P=P.buffer,T=T.buffer;case A:return!(P.byteLength!=T.byteLength||!B(new t(P),new t(T)));case f:case d:case g:return r(+P,+T);case m:return P.name==T.name&&P.message==T.message;case x:case S:return P==T+"";case h:var H=a;case j:var X=$&s;if(H||(H=o),P.size!=T.size&&!X)return!1;var Y=M.get(P);if(Y)return Y==T;$|=u,M.set(P,T);var W=n(H(P),H(T),$,z,B,M);return M.delete(P),W;case b:if(N)return N.call(P)==N.call(T)}return!1}return Ch=_,Ch}var Dh,J4;function a_(){if(J4)return Dh;J4=1;function e(t,r){for(var n=-1,a=r.length,o=t.length;++n<a;)t[o+n]=r[n];return t}return Dh=e,Dh}var Mh,Z4;function sT(){if(Z4)return Mh;Z4=1;var e=a_(),t=Xt();function r(n,a,o){var s=a(n);return t(n)?s:e(s,o(n))}return Mh=r,Mh}var Rh,ew;function uT(){if(ew)return Rh;ew=1;function e(t,r){for(var n=-1,a=t==null?0:t.length,o=0,s=[];++n<a;){var u=t[n];r(u,n,t)&&(s[o++]=u)}return s}return Rh=e,Rh}var Ih,tw;function cT(){if(tw)return Ih;tw=1;function e(){return[]}return Ih=e,Ih}var $h,rw;function fT(){if(rw)return $h;rw=1;var e=uT(),t=cT(),r=Object.prototype,n=r.propertyIsEnumerable,a=Object.getOwnPropertySymbols,o=a?function(s){return s==null?[]:(s=Object(s),e(a(s),function(u){return n.call(s,u)}))}:t;return $h=o,$h}var Lh,nw;function dT(){if(nw)return Lh;nw=1;function e(t,r){for(var n=-1,a=Array(t);++n<t;)a[n]=r(n);return a}return Lh=e,Lh}var Fh,aw;function pT(){if(aw)return Fh;aw=1;var e=jn(),t=_n(),r="[object Arguments]";function n(a){return t(a)&&e(a)==r}return Fh=n,Fh}var Bh,iw;function Jy(){if(iw)return Bh;iw=1;var e=pT(),t=_n(),r=Object.prototype,n=r.hasOwnProperty,a=r.propertyIsEnumerable,o=e((function(){return arguments})())?e:function(s){return t(s)&&n.call(s,"callee")&&!a.call(s,"callee")};return Bh=o,Bh}var Go={exports:{}},qh,ow;function hT(){if(ow)return qh;ow=1;function e(){return!1}return qh=e,qh}Go.exports;var lw;function i_(){return lw||(lw=1,(function(e,t){var r=Jr(),n=hT(),a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===a,u=s?r.Buffer:void 0,f=u?u.isBuffer:void 0,d=f||n;e.exports=d})(Go,Go.exports)),Go.exports}var zh,sw;function Zy(){if(sw)return zh;sw=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function r(n,a){var o=typeof n;return a=a??e,!!a&&(o=="number"||o!="symbol"&&t.test(n))&&n>-1&&n%1==0&&n<a}return zh=r,zh}var Uh,uw;function ev(){if(uw)return Uh;uw=1;var e=9007199254740991;function t(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=e}return Uh=t,Uh}var Wh,cw;function mT(){if(cw)return Wh;cw=1;var e=jn(),t=ev(),r=_n(),n="[object Arguments]",a="[object Array]",o="[object Boolean]",s="[object Date]",u="[object Error]",f="[object Function]",d="[object Map]",m="[object Number]",h="[object Object]",g="[object RegExp]",x="[object Set]",j="[object String]",S="[object WeakMap]",b="[object ArrayBuffer]",A="[object DataView]",O="[object Float32Array]",E="[object Float64Array]",N="[object Int8Array]",_="[object Int16Array]",P="[object Int32Array]",T="[object Uint8Array]",R="[object Uint8ClampedArray]",$="[object Uint16Array]",z="[object Uint32Array]",B={};B[O]=B[E]=B[N]=B[_]=B[P]=B[T]=B[R]=B[$]=B[z]=!0,B[n]=B[a]=B[b]=B[o]=B[A]=B[s]=B[u]=B[f]=B[d]=B[m]=B[h]=B[g]=B[x]=B[j]=B[S]=!1;function M(H){return r(H)&&t(H.length)&&!!B[e(H)]}return Wh=M,Wh}var Hh,fw;function o_(){if(fw)return Hh;fw=1;function e(t){return function(r){return t(r)}}return Hh=e,Hh}var Xo={exports:{}};Xo.exports;var dw;function yT(){return dw||(dw=1,(function(e,t){var r=Oj(),n=t&&!t.nodeType&&t,a=n&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===n,s=o&&r.process,u=(function(){try{var f=a&&a.require&&a.require("util").types;return f||s&&s.binding&&s.binding("util")}catch{}})();e.exports=u})(Xo,Xo.exports)),Xo.exports}var Kh,pw;function l_(){if(pw)return Kh;pw=1;var e=mT(),t=o_(),r=yT(),n=r&&r.isTypedArray,a=n?t(n):e;return Kh=a,Kh}var Vh,hw;function vT(){if(hw)return Vh;hw=1;var e=dT(),t=Jy(),r=Xt(),n=i_(),a=Zy(),o=l_(),s=Object.prototype,u=s.hasOwnProperty;function f(d,m){var h=r(d),g=!h&&t(d),x=!h&&!g&&n(d),j=!h&&!g&&!x&&o(d),S=h||g||x||j,b=S?e(d.length,String):[],A=b.length;for(var O in d)(m||u.call(d,O))&&!(S&&(O=="length"||x&&(O=="offset"||O=="parent")||j&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||a(O,A)))&&b.push(O);return b}return Vh=f,Vh}var Gh,mw;function gT(){if(mw)return Gh;mw=1;var e=Object.prototype;function t(r){var n=r&&r.constructor,a=typeof n=="function"&&n.prototype||e;return r===a}return Gh=t,Gh}var Xh,yw;function s_(){if(yw)return Xh;yw=1;function e(t,r){return function(n){return t(r(n))}}return Xh=e,Xh}var Yh,vw;function xT(){if(vw)return Yh;vw=1;var e=s_(),t=e(Object.keys,Object);return Yh=t,Yh}var Qh,gw;function bT(){if(gw)return Qh;gw=1;var e=gT(),t=xT(),r=Object.prototype,n=r.hasOwnProperty;function a(o){if(!e(o))return t(o);var s=[];for(var u in Object(o))n.call(o,u)&&u!="constructor"&&s.push(u);return s}return Qh=a,Qh}var Jh,xw;function Hl(){if(xw)return Jh;xw=1;var e=Ly(),t=ev();function r(n){return n!=null&&t(n.length)&&!e(n)}return Jh=r,Jh}var Zh,bw;function Mc(){if(bw)return Zh;bw=1;var e=vT(),t=bT(),r=Hl();function n(a){return r(a)?e(a):t(a)}return Zh=n,Zh}var em,ww;function wT(){if(ww)return em;ww=1;var e=sT(),t=fT(),r=Mc();function n(a){return e(a,r,t)}return em=n,em}var tm,Sw;function ST(){if(Sw)return tm;Sw=1;var e=wT(),t=1,r=Object.prototype,n=r.hasOwnProperty;function a(o,s,u,f,d,m){var h=u&t,g=e(o),x=g.length,j=e(s),S=j.length;if(x!=S&&!h)return!1;for(var b=x;b--;){var A=g[b];if(!(h?A in s:n.call(s,A)))return!1}var O=m.get(o),E=m.get(s);if(O&&E)return O==s&&E==o;var N=!0;m.set(o,s),m.set(s,o);for(var _=h;++b<x;){A=g[b];var P=o[A],T=s[A];if(f)var R=h?f(T,P,A,s,o,m):f(P,T,A,o,s,m);if(!(R===void 0?P===T||d(P,T,u,f,m):R)){N=!1;break}_||(_=A=="constructor")}if(N&&!_){var $=o.constructor,z=s.constructor;$!=z&&"constructor"in o&&"constructor"in s&&!(typeof $=="function"&&$ instanceof $&&typeof z=="function"&&z instanceof z)&&(N=!1)}return m.delete(o),m.delete(s),N}return tm=a,tm}var rm,jw;function jT(){if(jw)return rm;jw=1;var e=Oa(),t=Jr(),r=e(t,"DataView");return rm=r,rm}var nm,_w;function _T(){if(_w)return nm;_w=1;var e=Oa(),t=Jr(),r=e(t,"Promise");return nm=r,nm}var am,Aw;function u_(){if(Aw)return am;Aw=1;var e=Oa(),t=Jr(),r=e(t,"Set");return am=r,am}var im,Ow;function AT(){if(Ow)return im;Ow=1;var e=Oa(),t=Jr(),r=e(t,"WeakMap");return im=r,im}var om,Ew;function OT(){if(Ew)return om;Ew=1;var e=jT(),t=By(),r=_T(),n=u_(),a=AT(),o=jn(),s=Ej(),u="[object Map]",f="[object Object]",d="[object Promise]",m="[object Set]",h="[object WeakMap]",g="[object DataView]",x=s(e),j=s(t),S=s(r),b=s(n),A=s(a),O=o;return(e&&O(new e(new ArrayBuffer(1)))!=g||t&&O(new t)!=u||r&&O(r.resolve())!=d||n&&O(new n)!=m||a&&O(new a)!=h)&&(O=function(E){var N=o(E),_=N==f?E.constructor:void 0,P=_?s(_):"";if(P)switch(P){case x:return g;case j:return u;case S:return d;case b:return m;case A:return h}return N}),om=O,om}var lm,Pw;function ET(){if(Pw)return lm;Pw=1;var e=Zj(),t=n_(),r=lT(),n=ST(),a=OT(),o=Xt(),s=i_(),u=l_(),f=1,d="[object Arguments]",m="[object Array]",h="[object Object]",g=Object.prototype,x=g.hasOwnProperty;function j(S,b,A,O,E,N){var _=o(S),P=o(b),T=_?m:a(S),R=P?m:a(b);T=T==d?h:T,R=R==d?h:R;var $=T==h,z=R==h,B=T==R;if(B&&s(S)){if(!s(b))return!1;_=!0,$=!1}if(B&&!$)return N||(N=new e),_||u(S)?t(S,b,A,O,E,N):r(S,b,T,A,O,E,N);if(!(A&f)){var M=$&&x.call(S,"__wrapped__"),H=z&&x.call(b,"__wrapped__");if(M||H){var X=M?S.value():S,Y=H?b.value():b;return N||(N=new e),E(X,Y,A,O,N)}}return B?(N||(N=new e),n(S,b,A,O,E,N)):!1}return lm=j,lm}var sm,kw;function tv(){if(kw)return sm;kw=1;var e=ET(),t=_n();function r(n,a,o,s,u){return n===a?!0:n==null||a==null||!t(n)&&!t(a)?n!==n&&a!==a:e(n,a,o,s,r,u)}return sm=r,sm}var um,Nw;function PT(){if(Nw)return um;Nw=1;var e=Zj(),t=tv(),r=1,n=2;function a(o,s,u,f){var d=u.length,m=d,h=!f;if(o==null)return!m;for(o=Object(o);d--;){var g=u[d];if(h&&g[2]?g[1]!==o[g[0]]:!(g[0]in o))return!1}for(;++d<m;){g=u[d];var x=g[0],j=o[x],S=g[1];if(h&&g[2]){if(j===void 0&&!(x in o))return!1}else{var b=new e;if(f)var A=f(j,S,x,o,s,b);if(!(A===void 0?t(S,j,r|n,f,b):A))return!1}}return!0}return um=a,um}var cm,Tw;function c_(){if(Tw)return cm;Tw=1;var e=Yn();function t(r){return r===r&&!e(r)}return cm=t,cm}var fm,Cw;function kT(){if(Cw)return fm;Cw=1;var e=c_(),t=Mc();function r(n){for(var a=t(n),o=a.length;o--;){var s=a[o],u=n[s];a[o]=[s,u,e(u)]}return a}return fm=r,fm}var dm,Dw;function f_(){if(Dw)return dm;Dw=1;function e(t,r){return function(n){return n==null?!1:n[t]===r&&(r!==void 0||t in Object(n))}}return dm=e,dm}var pm,Mw;function NT(){if(Mw)return pm;Mw=1;var e=PT(),t=kT(),r=f_();function n(a){var o=t(a);return o.length==1&&o[0][2]?r(o[0][0],o[0][1]):function(s){return s===a||e(s,a,o)}}return pm=n,pm}var hm,Rw;function TT(){if(Rw)return hm;Rw=1;function e(t,r){return t!=null&&r in Object(t)}return hm=e,hm}var mm,Iw;function CT(){if(Iw)return mm;Iw=1;var e=Nj(),t=Jy(),r=Xt(),n=Zy(),a=ev(),o=kc();function s(u,f,d){f=e(f,u);for(var m=-1,h=f.length,g=!1;++m<h;){var x=o(f[m]);if(!(g=u!=null&&d(u,x)))break;u=u[x]}return g||++m!=h?g:(h=u==null?0:u.length,!!h&&a(h)&&n(x,h)&&(r(u)||t(u)))}return mm=s,mm}var ym,$w;function DT(){if($w)return ym;$w=1;var e=TT(),t=CT();function r(n,a){return n!=null&&t(n,a,e)}return ym=r,ym}var vm,Lw;function MT(){if(Lw)return vm;Lw=1;var e=tv(),t=Tj(),r=DT(),n=$y(),a=c_(),o=f_(),s=kc(),u=1,f=2;function d(m,h){return n(m)&&a(h)?o(s(m),h):function(g){var x=t(g,m);return x===void 0&&x===h?r(g,m):e(h,x,u|f)}}return vm=d,vm}var gm,Fw;function Bi(){if(Fw)return gm;Fw=1;function e(t){return t}return gm=e,gm}var xm,Bw;function RT(){if(Bw)return xm;Bw=1;function e(t){return function(r){return r==null?void 0:r[t]}}return xm=e,xm}var bm,qw;function IT(){if(qw)return bm;qw=1;var e=Uy();function t(r){return function(n){return e(n,r)}}return bm=t,bm}var wm,zw;function $T(){if(zw)return wm;zw=1;var e=RT(),t=IT(),r=$y(),n=kc();function a(o){return r(o)?e(n(o)):t(o)}return wm=a,wm}var Sm,Uw;function Qn(){if(Uw)return Sm;Uw=1;var e=NT(),t=MT(),r=Bi(),n=Xt(),a=$T();function o(s){return typeof s=="function"?s:s==null?r:typeof s=="object"?n(s)?t(s[0],s[1]):e(s):a(s)}return Sm=o,Sm}var jm,Ww;function d_(){if(Ww)return jm;Ww=1;function e(t,r,n,a){for(var o=t.length,s=n+(a?1:-1);a?s--:++s<o;)if(r(t[s],s,t))return s;return-1}return jm=e,jm}var _m,Hw;function LT(){if(Hw)return _m;Hw=1;function e(t){return t!==t}return _m=e,_m}var Am,Kw;function FT(){if(Kw)return Am;Kw=1;function e(t,r,n){for(var a=n-1,o=t.length;++a<o;)if(t[a]===r)return a;return-1}return Am=e,Am}var Om,Vw;function BT(){if(Vw)return Om;Vw=1;var e=d_(),t=LT(),r=FT();function n(a,o,s){return o===o?r(a,o,s):e(a,t,s)}return Om=n,Om}var Em,Gw;function qT(){if(Gw)return Em;Gw=1;var e=BT();function t(r,n){var a=r==null?0:r.length;return!!a&&e(r,n,0)>-1}return Em=t,Em}var Pm,Xw;function zT(){if(Xw)return Pm;Xw=1;function e(t,r,n){for(var a=-1,o=t==null?0:t.length;++a<o;)if(n(r,t[a]))return!0;return!1}return Pm=e,Pm}var km,Yw;function UT(){if(Yw)return km;Yw=1;function e(){}return km=e,km}var Nm,Qw;function WT(){if(Qw)return Nm;Qw=1;var e=u_(),t=UT(),r=Qy(),n=1/0,a=e&&1/r(new e([,-0]))[1]==n?function(o){return new e(o)}:t;return Nm=a,Nm}var Tm,Jw;function HT(){if(Jw)return Tm;Jw=1;var e=e_(),t=qT(),r=zT(),n=r_(),a=WT(),o=Qy(),s=200;function u(f,d,m){var h=-1,g=t,x=f.length,j=!0,S=[],b=S;if(m)j=!1,g=r;else if(x>=s){var A=d?null:a(f);if(A)return o(A);j=!1,g=n,b=new e}else b=d?[]:S;e:for(;++h<x;){var O=f[h],E=d?d(O):O;if(O=m||O!==0?O:0,j&&E===E){for(var N=b.length;N--;)if(b[N]===E)continue e;d&&b.push(E),S.push(O)}else g(b,E,m)||(b!==S&&b.push(E),S.push(O))}return S}return Tm=u,Tm}var Cm,Zw;function KT(){if(Zw)return Cm;Zw=1;var e=Qn(),t=HT();function r(n,a){return n&&n.length?t(n,e(a,2)):[]}return Cm=r,Cm}var VT=KT();const e3=We(VT);function p_(e,t,r){return t===!0?e3(e,r):Pe(t)?e3(e,t):e}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}var GT=["ref"];function t3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function sn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?t3(Object(r),!0).forEach(function(n){Rc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function XT(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r3(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m_(n.key),n)}}function YT(e,t,r){return t&&r3(e.prototype,t),r&&r3(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function QT(e,t,r){return t=Ru(t),JT(e,h_()?Reflect.construct(t,r||[],Ru(e).constructor):t.apply(e,r))}function JT(e,t){if(t&&(yi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ZT(e)}function ZT(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(h_=function(){return!!e})()}function Ru(e){return Ru=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Ru(e)}function eC(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S2(e,t)}function S2(e,t){return S2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},S2(e,t)}function Rc(e,t,r){return t=m_(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m_(e){var t=tC(e,"string");return yi(t)=="symbol"?t:t+""}function tC(e,t){if(yi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(yi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function rC(e,t){if(e==null)return{};var r=nC(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function nC(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function aC(e){return e.value}function iC(e,t){if(q.isValidElement(e))return q.cloneElement(e,t);if(typeof e=="function")return q.createElement(e,t);t.ref;var r=rC(t,GT);return q.createElement(Yy,r)}var n3=1,fi=(function(e){function t(){var r;XT(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=QT(this,t,[].concat(a)),Rc(r,"lastBoundingBox",{width:-1,height:-1}),r}return eC(t,e),YT(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();return n.height=this.wrapperNode.offsetHeight,n.width=this.wrapperNode.offsetWidth,n}return null}},{key:"updateBBox",value:function(){var n=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>n3||Math.abs(a.height-this.lastBoundingBox.height)>n3)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,n&&n(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,n&&n(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?sn({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(n){var a=this.props,o=a.layout,s=a.align,u=a.verticalAlign,f=a.margin,d=a.chartWidth,m=a.chartHeight,h,g;if(!n||(n.left===void 0||n.left===null)&&(n.right===void 0||n.right===null))if(s==="center"&&o==="vertical"){var x=this.getBBoxSnapshot();h={left:((d||0)-x.width)/2}}else h=s==="right"?{right:f&&f.right||0}:{left:f&&f.left||0};if(!n||(n.top===void 0||n.top===null)&&(n.bottom===void 0||n.bottom===null))if(u==="middle"){var j=this.getBBoxSnapshot();g={top:((m||0)-j.height)/2}}else g=u==="bottom"?{bottom:f&&f.bottom||0}:{top:f&&f.top||0};return sn(sn({},h),g)}},{key:"render",value:function(){var n=this,a=this.props,o=a.content,s=a.width,u=a.height,f=a.wrapperStyle,d=a.payloadUniqBy,m=a.payload,h=sn(sn({position:"absolute",width:s||"auto",height:u||"auto"},this.getDefaultPosition(f)),f);return q.createElement("div",{className:"recharts-legend-wrapper",style:h,ref:function(x){n.wrapperNode=x}},iC(o,sn(sn({},this.props),{},{payload:p_(m,d,aC)})))}}],[{key:"getWithHeight",value:function(n,a){var o=sn(sn({},this.defaultProps),n.props),s=o.layout;return s==="vertical"&&ce(n.props.height)?{height:n.props.height}:s==="horizontal"?{width:n.props.width||a}:null}}])})(D.PureComponent);Rc(fi,"displayName","Legend");Rc(fi,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var Dm,a3;function oC(){if(a3)return Dm;a3=1;var e=ql(),t=Jy(),r=Xt(),n=e?e.isConcatSpreadable:void 0;function a(o){return r(o)||t(o)||!!(n&&o&&o[n])}return Dm=a,Dm}var Mm,i3;function y_(){if(i3)return Mm;i3=1;var e=a_(),t=oC();function r(n,a,o,s,u){var f=-1,d=n.length;for(o||(o=t),u||(u=[]);++f<d;){var m=n[f];a>0&&o(m)?a>1?r(m,a-1,o,s,u):e(u,m):s||(u[u.length]=m)}return u}return Mm=r,Mm}var Rm,o3;function lC(){if(o3)return Rm;o3=1;function e(t){return function(r,n,a){for(var o=-1,s=Object(r),u=a(r),f=u.length;f--;){var d=u[t?f:++o];if(n(s[d],d,s)===!1)break}return r}}return Rm=e,Rm}var Im,l3;function sC(){if(l3)return Im;l3=1;var e=lC(),t=e();return Im=t,Im}var $m,s3;function v_(){if(s3)return $m;s3=1;var e=sC(),t=Mc();function r(n,a){return n&&e(n,a,t)}return $m=r,$m}var Lm,u3;function uC(){if(u3)return Lm;u3=1;var e=Hl();function t(r,n){return function(a,o){if(a==null)return a;if(!e(a))return r(a,o);for(var s=a.length,u=n?s:-1,f=Object(a);(n?u--:++u<s)&&o(f[u],u,f)!==!1;);return a}}return Lm=t,Lm}var Fm,c3;function rv(){if(c3)return Fm;c3=1;var e=v_(),t=uC(),r=t(e);return Fm=r,Fm}var Bm,f3;function g_(){if(f3)return Bm;f3=1;var e=rv(),t=Hl();function r(n,a){var o=-1,s=t(n)?Array(n.length):[];return e(n,function(u,f,d){s[++o]=a(u,f,d)}),s}return Bm=r,Bm}var qm,d3;function cC(){if(d3)return qm;d3=1;function e(t,r){var n=t.length;for(t.sort(r);n--;)t[n]=t[n].value;return t}return qm=e,qm}var zm,p3;function fC(){if(p3)return zm;p3=1;var e=Li();function t(r,n){if(r!==n){var a=r!==void 0,o=r===null,s=r===r,u=e(r),f=n!==void 0,d=n===null,m=n===n,h=e(n);if(!d&&!h&&!u&&r>n||u&&f&&m&&!d&&!h||o&&f&&m||!a&&m||!s)return 1;if(!o&&!u&&!h&&r<n||h&&a&&s&&!o&&!u||d&&a&&s||!f&&s||!m)return-1}return 0}return zm=t,zm}var Um,h3;function dC(){if(h3)return Um;h3=1;var e=fC();function t(r,n,a){for(var o=-1,s=r.criteria,u=n.criteria,f=s.length,d=a.length;++o<f;){var m=e(s[o],u[o]);if(m){if(o>=d)return m;var h=a[o];return m*(h=="desc"?-1:1)}}return r.index-n.index}return Um=t,Um}var Wm,m3;function pC(){if(m3)return Wm;m3=1;var e=zy(),t=Uy(),r=Qn(),n=g_(),a=cC(),o=o_(),s=dC(),u=Bi(),f=Xt();function d(m,h,g){h.length?h=e(h,function(S){return f(S)?function(b){return t(b,S.length===1?S[0]:S)}:S}):h=[u];var x=-1;h=e(h,o(r));var j=n(m,function(S,b,A){var O=e(h,function(E){return E(S)});return{criteria:O,index:++x,value:S}});return a(j,function(S,b){return s(S,b,g)})}return Wm=d,Wm}var Hm,y3;function hC(){if(y3)return Hm;y3=1;function e(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}return Hm=e,Hm}var Km,v3;function mC(){if(v3)return Km;v3=1;var e=hC(),t=Math.max;function r(n,a,o){return a=t(a===void 0?n.length-1:a,0),function(){for(var s=arguments,u=-1,f=t(s.length-a,0),d=Array(f);++u<f;)d[u]=s[a+u];u=-1;for(var m=Array(a+1);++u<a;)m[u]=s[u];return m[a]=o(d),e(n,this,m)}}return Km=r,Km}var Vm,g3;function yC(){if(g3)return Vm;g3=1;function e(t){return function(){return t}}return Vm=e,Vm}var Gm,x3;function x_(){if(x3)return Gm;x3=1;var e=Oa(),t=(function(){try{var r=e(Object,"defineProperty");return r({},"",{}),r}catch{}})();return Gm=t,Gm}var Xm,b3;function vC(){if(b3)return Xm;b3=1;var e=yC(),t=x_(),r=Bi(),n=t?function(a,o){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(o),writable:!0})}:r;return Xm=n,Xm}var Ym,w3;function gC(){if(w3)return Ym;w3=1;var e=800,t=16,r=Date.now;function n(a){var o=0,s=0;return function(){var u=r(),f=t-(u-s);if(s=u,f>0){if(++o>=e)return arguments[0]}else o=0;return a.apply(void 0,arguments)}}return Ym=n,Ym}var Qm,S3;function xC(){if(S3)return Qm;S3=1;var e=vC(),t=gC(),r=t(e);return Qm=r,Qm}var Jm,j3;function bC(){if(j3)return Jm;j3=1;var e=Bi(),t=mC(),r=xC();function n(a,o){return r(t(a,o,e),a+"")}return Jm=n,Jm}var Zm,_3;function Ic(){if(_3)return Zm;_3=1;var e=Fy(),t=Hl(),r=Zy(),n=Yn();function a(o,s,u){if(!n(u))return!1;var f=typeof s;return(f=="number"?t(u)&&r(s,u.length):f=="string"&&s in u)?e(u[s],o):!1}return Zm=a,Zm}var e0,A3;function wC(){if(A3)return e0;A3=1;var e=y_(),t=pC(),r=bC(),n=Ic(),a=r(function(o,s){if(o==null)return[];var u=s.length;return u>1&&n(o,s[0],s[1])?s=[]:u>2&&n(s[0],s[1],s[2])&&(s=[s[0]]),t(o,e(s,1),[])});return e0=a,e0}var SC=wC();const nv=We(SC);function il(e){"@babel/helpers - typeof";return il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},il(e)}function j2(){return j2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j2.apply(this,arguments)}function jC(e,t){return EC(e)||OC(e,t)||AC(e,t)||_C()}function _C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AC(e,t){if(e){if(typeof e=="string")return O3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O3(e,t)}}function O3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function OC(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function EC(e){if(Array.isArray(e))return e}function E3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function t0(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?E3(Object(r),!0).forEach(function(n){PC(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function PC(e,t,r){return t=kC(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function kC(e){var t=NC(e,"string");return il(t)=="symbol"?t:t+""}function NC(e,t){if(il(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(il(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function TC(e){return Array.isArray(e)&&ht(e[0])&&ht(e[1])?e.join(" ~ "):e}var CC=function(t){var r=t.separator,n=r===void 0?" : ":r,a=t.contentStyle,o=a===void 0?{}:a,s=t.itemStyle,u=s===void 0?{}:s,f=t.labelStyle,d=f===void 0?{}:f,m=t.payload,h=t.formatter,g=t.itemSorter,x=t.wrapperClassName,j=t.labelClassName,S=t.label,b=t.labelFormatter,A=t.accessibilityLayer,O=A===void 0?!1:A,E=function(){if(m&&m.length){var M={padding:0,margin:0},H=(g?nv(m,g):m).map(function(X,Y){if(X.type==="none")return null;var W=t0({display:"block",paddingTop:4,paddingBottom:4,color:X.color||"#000"},u),Z=X.formatter||h||TC,V=X.value,ee=X.name,J=V,I=ee;if(Z&&J!=null&&I!=null){var U=Z(V,ee,X,Y,m);if(Array.isArray(U)){var se=jC(U,2);J=se[0],I=se[1]}else J=U}return q.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(Y),style:W},ht(I)?q.createElement("span",{className:"recharts-tooltip-item-name"},I):null,ht(I)?q.createElement("span",{className:"recharts-tooltip-item-separator"},n):null,q.createElement("span",{className:"recharts-tooltip-item-value"},J),q.createElement("span",{className:"recharts-tooltip-item-unit"},X.unit||""))});return q.createElement("ul",{className:"recharts-tooltip-item-list",style:M},H)}return null},N=t0({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},o),_=t0({margin:0},d),P=!Te(S),T=P?S:"",R=Ie("recharts-default-tooltip",x),$=Ie("recharts-tooltip-label",j);P&&b&&m!==void 0&&m!==null&&(T=b(S,m));var z=O?{role:"status","aria-live":"assertive"}:{};return q.createElement("div",j2({className:R,style:N},z),q.createElement("p",{className:$,style:_},q.isValidElement(T)?T:"".concat(T)),E())};function ol(e){"@babel/helpers - typeof";return ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ol(e)}function fu(e,t,r){return t=DC(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function DC(e){var t=MC(e,"string");return ol(t)=="symbol"?t:t+""}function MC(e,t){if(ol(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ol(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var $o="recharts-tooltip-wrapper",RC={visibility:"hidden"};function IC(e){var t=e.coordinate,r=e.translateX,n=e.translateY;return Ie($o,fu(fu(fu(fu({},"".concat($o,"-right"),ce(r)&&t&&ce(t.x)&&r>=t.x),"".concat($o,"-left"),ce(r)&&t&&ce(t.x)&&r<t.x),"".concat($o,"-bottom"),ce(n)&&t&&ce(t.y)&&n>=t.y),"".concat($o,"-top"),ce(n)&&t&&ce(t.y)&&n<t.y))}function P3(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.key,a=e.offsetTopLeft,o=e.position,s=e.reverseDirection,u=e.tooltipDimension,f=e.viewBox,d=e.viewBoxDimension;if(o&&ce(o[n]))return o[n];var m=r[n]-u-a,h=r[n]+a;if(t[n])return s[n]?m:h;if(s[n]){var g=m,x=f[n];return g<x?Math.max(h,f[n]):Math.max(m,f[n])}var j=h+u,S=f[n]+d;return j>S?Math.max(m,f[n]):Math.max(h,f[n])}function $C(e){var t=e.translateX,r=e.translateY,n=e.useTranslate3d;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function LC(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.offsetTopLeft,a=e.position,o=e.reverseDirection,s=e.tooltipBox,u=e.useTranslate3d,f=e.viewBox,d,m,h;return s.height>0&&s.width>0&&r?(m=P3({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:a,reverseDirection:o,tooltipDimension:s.width,viewBox:f,viewBoxDimension:f.width}),h=P3({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:a,reverseDirection:o,tooltipDimension:s.height,viewBox:f,viewBoxDimension:f.height}),d=$C({translateX:m,translateY:h,useTranslate3d:u})):d=RC,{cssProperties:d,cssClasses:IC({translateX:m,translateY:h,coordinate:r})}}function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}function k3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function N3(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?k3(Object(r),!0).forEach(function(n){A2(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function FC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function BC(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w_(n.key),n)}}function qC(e,t,r){return t&&BC(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function zC(e,t,r){return t=Iu(t),UC(e,b_()?Reflect.construct(t,r||[],Iu(e).constructor):t.apply(e,r))}function UC(e,t){if(t&&(vi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return WC(e)}function WC(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(b_=function(){return!!e})()}function Iu(e){return Iu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Iu(e)}function HC(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_2(e,t)}function _2(e,t){return _2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},_2(e,t)}function A2(e,t,r){return t=w_(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w_(e){var t=KC(e,"string");return vi(t)=="symbol"?t:t+""}function KC(e,t){if(vi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(vi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var T3=1,VC=(function(e){function t(){var r;FC(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=zC(this,t,[].concat(a)),A2(r,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),A2(r,"handleKeyDown",function(s){if(s.key==="Escape"){var u,f,d,m;r.setState({dismissed:!0,dismissedAtCoordinate:{x:(u=(f=r.props.coordinate)===null||f===void 0?void 0:f.x)!==null&&u!==void 0?u:0,y:(d=(m=r.props.coordinate)===null||m===void 0?void 0:m.y)!==null&&d!==void 0?d:0}})}}),r}return HC(t,e),qC(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();(Math.abs(n.width-this.state.lastBoundingBox.width)>T3||Math.abs(n.height-this.state.lastBoundingBox.height)>T3)&&this.setState({lastBoundingBox:{width:n.width,height:n.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var n,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var n=this,a=this.props,o=a.active,s=a.allowEscapeViewBox,u=a.animationDuration,f=a.animationEasing,d=a.children,m=a.coordinate,h=a.hasPayload,g=a.isAnimationActive,x=a.offset,j=a.position,S=a.reverseDirection,b=a.useTranslate3d,A=a.viewBox,O=a.wrapperStyle,E=LC({allowEscapeViewBox:s,coordinate:m,offsetTopLeft:x,position:j,reverseDirection:S,tooltipBox:this.state.lastBoundingBox,useTranslate3d:b,viewBox:A}),N=E.cssClasses,_=E.cssProperties,P=N3(N3({transition:g&&o?"transform ".concat(u,"ms ").concat(f):void 0},_),{},{pointerEvents:"none",visibility:!this.state.dismissed&&o&&h?"visible":"hidden",position:"absolute",top:0,left:0},O);return q.createElement("div",{tabIndex:-1,className:N,style:P,ref:function(R){n.wrapperNode=R}},d)}}])})(D.PureComponent),GC=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},qi={isSsr:GC()};function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function C3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function D3(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C3(Object(r),!0).forEach(function(n){av(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function XC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function YC(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,j_(n.key),n)}}function QC(e,t,r){return t&&YC(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function JC(e,t,r){return t=$u(t),ZC(e,S_()?Reflect.construct(t,r||[],$u(e).constructor):t.apply(e,r))}function ZC(e,t){if(t&&(gi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eD(e)}function eD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S_(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(S_=function(){return!!e})()}function $u(e){return $u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},$u(e)}function tD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O2(e,t)}function O2(e,t){return O2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},O2(e,t)}function av(e,t,r){return t=j_(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j_(e){var t=rD(e,"string");return gi(t)=="symbol"?t:t+""}function rD(e,t){if(gi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(gi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function nD(e){return e.dataKey}function aD(e,t){return q.isValidElement(e)?q.cloneElement(e,t):typeof e=="function"?q.createElement(e,t):q.createElement(CC,t)}var Wr=(function(e){function t(){return XC(this,t),JC(this,t,arguments)}return tD(t,e),QC(t,[{key:"render",value:function(){var n=this,a=this.props,o=a.active,s=a.allowEscapeViewBox,u=a.animationDuration,f=a.animationEasing,d=a.content,m=a.coordinate,h=a.filterNull,g=a.isAnimationActive,x=a.offset,j=a.payload,S=a.payloadUniqBy,b=a.position,A=a.reverseDirection,O=a.useTranslate3d,E=a.viewBox,N=a.wrapperStyle,_=j??[];h&&_.length&&(_=p_(j.filter(function(T){return T.value!=null&&(T.hide!==!0||n.props.includeHidden)}),S,nD));var P=_.length>0;return q.createElement(VC,{allowEscapeViewBox:s,animationDuration:u,animationEasing:f,isAnimationActive:g,active:o,coordinate:m,hasPayload:P,offset:x,position:b,reverseDirection:A,useTranslate3d:O,viewBox:E,wrapperStyle:N},aD(d,D3(D3({},this.props),{},{payload:_})))}}])})(D.PureComponent);av(Wr,"displayName","Tooltip");av(Wr,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!qi.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var r0,M3;function iD(){if(M3)return r0;M3=1;var e=Jr(),t=function(){return e.Date.now()};return r0=t,r0}var n0,R3;function oD(){if(R3)return n0;R3=1;var e=/\s/;function t(r){for(var n=r.length;n--&&e.test(r.charAt(n)););return n}return n0=t,n0}var a0,I3;function lD(){if(I3)return a0;I3=1;var e=oD(),t=/^\s+/;function r(n){return n&&n.slice(0,e(n)+1).replace(t,"")}return a0=r,a0}var i0,$3;function __(){if($3)return i0;$3=1;var e=lD(),t=Yn(),r=Li(),n=NaN,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;function f(d){if(typeof d=="number")return d;if(r(d))return n;if(t(d)){var m=typeof d.valueOf=="function"?d.valueOf():d;d=t(m)?m+"":m}if(typeof d!="string")return d===0?d:+d;d=e(d);var h=o.test(d);return h||s.test(d)?u(d.slice(2),h?2:8):a.test(d)?n:+d}return i0=f,i0}var o0,L3;function sD(){if(L3)return o0;L3=1;var e=Yn(),t=iD(),r=__(),n="Expected a function",a=Math.max,o=Math.min;function s(u,f,d){var m,h,g,x,j,S,b=0,A=!1,O=!1,E=!0;if(typeof u!="function")throw new TypeError(n);f=r(f)||0,e(d)&&(A=!!d.leading,O="maxWait"in d,g=O?a(r(d.maxWait)||0,f):g,E="trailing"in d?!!d.trailing:E);function N(H){var X=m,Y=h;return m=h=void 0,b=H,x=u.apply(Y,X),x}function _(H){return b=H,j=setTimeout(R,f),A?N(H):x}function P(H){var X=H-S,Y=H-b,W=f-X;return O?o(W,g-Y):W}function T(H){var X=H-S,Y=H-b;return S===void 0||X>=f||X<0||O&&Y>=g}function R(){var H=t();if(T(H))return $(H);j=setTimeout(R,P(H))}function $(H){return j=void 0,E&&m?N(H):(m=h=void 0,x)}function z(){j!==void 0&&clearTimeout(j),b=0,m=S=h=j=void 0}function B(){return j===void 0?x:$(t())}function M(){var H=t(),X=T(H);if(m=arguments,h=this,S=H,X){if(j===void 0)return _(S);if(O)return clearTimeout(j),j=setTimeout(R,f),N(S)}return j===void 0&&(j=setTimeout(R,f)),x}return M.cancel=z,M.flush=B,M}return o0=s,o0}var l0,F3;function uD(){if(F3)return l0;F3=1;var e=sD(),t=Yn(),r="Expected a function";function n(a,o,s){var u=!0,f=!0;if(typeof a!="function")throw new TypeError(r);return t(s)&&(u="leading"in s?!!s.leading:u,f="trailing"in s?!!s.trailing:f),e(a,o,{leading:u,maxWait:o,trailing:f})}return l0=n,l0}var cD=uD();const A_=We(cD);function ll(e){"@babel/helpers - typeof";return ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ll(e)}function B3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function du(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?B3(Object(r),!0).forEach(function(n){fD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fD(e,t,r){return t=dD(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dD(e){var t=pD(e,"string");return ll(t)=="symbol"?t:t+""}function pD(e,t){if(ll(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ll(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hD(e,t){return gD(e)||vD(e,t)||yD(e,t)||mD()}function mD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yD(e,t){if(e){if(typeof e=="string")return q3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q3(e,t)}}function q3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function vD(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function gD(e){if(Array.isArray(e))return e}var O_=D.forwardRef(function(e,t){var r=e.aspect,n=e.initialDimension,a=n===void 0?{width:-1,height:-1}:n,o=e.width,s=o===void 0?"100%":o,u=e.height,f=u===void 0?"100%":u,d=e.minWidth,m=d===void 0?0:d,h=e.minHeight,g=e.maxHeight,x=e.children,j=e.debounce,S=j===void 0?0:j,b=e.id,A=e.className,O=e.onResize,E=e.style,N=E===void 0?{}:E,_=D.useRef(null),P=D.useRef();P.current=O,D.useImperativeHandle(t,function(){return Object.defineProperty(_.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),_.current},configurable:!0})});var T=D.useState({containerWidth:a.width,containerHeight:a.height}),R=hD(T,2),$=R[0],z=R[1],B=D.useCallback(function(H,X){z(function(Y){var W=Math.round(H),Z=Math.round(X);return Y.containerWidth===W&&Y.containerHeight===Z?Y:{containerWidth:W,containerHeight:Z}})},[]);D.useEffect(function(){var H=function(ee){var J,I=ee[0].contentRect,U=I.width,se=I.height;B(U,se),(J=P.current)===null||J===void 0||J.call(P,U,se)};S>0&&(H=A_(H,S,{trailing:!0,leading:!1}));var X=new ResizeObserver(H),Y=_.current.getBoundingClientRect(),W=Y.width,Z=Y.height;return B(W,Z),X.observe(_.current),function(){X.disconnect()}},[B,S]);var M=D.useMemo(function(){var H=$.containerWidth,X=$.containerHeight;if(H<0||X<0)return null;mn(va(s)||va(f),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,s,f),mn(!r||r>0,"The aspect(%s) must be greater than zero.",r);var Y=va(s)?H:s,W=va(f)?X:f;r&&r>0&&(Y?W=Y/r:W&&(Y=W*r),g&&W>g&&(W=g)),mn(Y>0||W>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,Y,W,s,f,m,h,r);var Z=!Array.isArray(x)&&hn(x.type).endsWith("Chart");return q.Children.map(x,function(V){return q.isValidElement(V)?D.cloneElement(V,du({width:Y,height:W},Z?{style:du({height:"100%",width:"100%",maxHeight:W,maxWidth:Y},V.props.style)}:{})):V})},[r,x,f,g,h,m,$,s]);return q.createElement("div",{id:b?"".concat(b):void 0,className:Ie("recharts-responsive-container",A),style:du(du({},N),{},{width:s,height:f,minWidth:m,minHeight:h,maxHeight:g}),ref:_},M)}),iv=function(t){return null};iv.displayName="Cell";function sl(e){"@babel/helpers - typeof";return sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sl(e)}function z3(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function E2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?z3(Object(r),!0).forEach(function(n){xD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z3(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function xD(e,t,r){return t=bD(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bD(e){var t=wD(e,"string");return sl(t)=="symbol"?t:t+""}function wD(e,t){if(sl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(sl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ri={widthCache:{},cacheCount:0},SD=2e3,jD={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},U3="recharts_measurement_span";function _D(e){var t=E2({},e);return Object.keys(t).forEach(function(r){t[r]||delete t[r]}),t}var Qo=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||qi.isSsr)return{width:0,height:0};var n=_D(r),a=JSON.stringify({text:t,copyStyle:n});if(ri.widthCache[a])return ri.widthCache[a];try{var o=document.getElementById(U3);o||(o=document.createElement("span"),o.setAttribute("id",U3),o.setAttribute("aria-hidden","true"),document.body.appendChild(o));var s=E2(E2({},jD),n);Object.assign(o.style,s),o.textContent="".concat(t);var u=o.getBoundingClientRect(),f={width:u.width,height:u.height};return ri.widthCache[a]=f,++ri.cacheCount>SD&&(ri.cacheCount=0,ri.widthCache={}),f}catch{return{width:0,height:0}}},AD=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function ul(e){"@babel/helpers - typeof";return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ul(e)}function Lu(e,t){return kD(e)||PD(e,t)||ED(e,t)||OD()}function OD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ED(e,t){if(e){if(typeof e=="string")return W3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W3(e,t)}}function W3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function PD(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function kD(e){if(Array.isArray(e))return e}function ND(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H3(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,CD(n.key),n)}}function TD(e,t,r){return t&&H3(e.prototype,t),r&&H3(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function CD(e){var t=DD(e,"string");return ul(t)=="symbol"?t:t+""}function DD(e,t){if(ul(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ul(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var K3=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,V3=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,MD=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,RD=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,E_={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},ID=Object.keys(E_),li="NaN";function $D(e,t){return e*E_[t]}var pu=(function(){function e(t,r){ND(this,e),this.num=t,this.unit=r,this.num=t,this.unit=r,Number.isNaN(t)&&(this.unit=""),r!==""&&!MD.test(r)&&(this.num=NaN,this.unit=""),ID.includes(r)&&(this.num=$D(t,r),this.unit="px")}return TD(e,[{key:"add",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num+r.num,this.unit)}},{key:"subtract",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num-r.num,this.unit)}},{key:"multiply",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num*r.num,this.unit||r.unit)}},{key:"divide",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num/r.num,this.unit||r.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(r){var n,a=(n=RD.exec(r))!==null&&n!==void 0?n:[],o=Lu(a,3),s=o[1],u=o[2];return new e(parseFloat(s),u??"")}}])})();function P_(e){if(e.includes(li))return li;for(var t=e;t.includes("*")||t.includes("/");){var r,n=(r=K3.exec(t))!==null&&r!==void 0?r:[],a=Lu(n,4),o=a[1],s=a[2],u=a[3],f=pu.parse(o??""),d=pu.parse(u??""),m=s==="*"?f.multiply(d):f.divide(d);if(m.isNaN())return li;t=t.replace(K3,m.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var h,g=(h=V3.exec(t))!==null&&h!==void 0?h:[],x=Lu(g,4),j=x[1],S=x[2],b=x[3],A=pu.parse(j??""),O=pu.parse(b??""),E=S==="+"?A.add(O):A.subtract(O);if(E.isNaN())return li;t=t.replace(V3,E.toString())}return t}var G3=/\(([^()]*)\)/;function LD(e){for(var t=e;t.includes("(");){var r=G3.exec(t),n=Lu(r,2),a=n[1];t=t.replace(G3,P_(a))}return t}function FD(e){var t=e.replace(/\s+/g,"");return t=LD(t),t=P_(t),t}function BD(e){try{return FD(e)}catch{return li}}function s0(e){var t=BD(e.slice(5,-1));return t===li?"":t}var qD=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],zD=["dx","dy","angle","className","breakAll"];function P2(){return P2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P2.apply(this,arguments)}function X3(e,t){if(e==null)return{};var r=UD(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function UD(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Y3(e,t){return VD(e)||KD(e,t)||HD(e,t)||WD()}function WD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HD(e,t){if(e){if(typeof e=="string")return Q3(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Q3(e,t)}}function Q3(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function KD(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function VD(e){if(Array.isArray(e))return e}var k_=/[ \f\n\r\t\v\u2028\u2029]+/,N_=function(t){var r=t.children,n=t.breakAll,a=t.style;try{var o=[];Te(r)||(n?o=r.toString().split(""):o=r.toString().split(k_));var s=o.map(function(f){return{word:f,width:Qo(f,a).width}}),u=n?0:Qo(" ",a).width;return{wordsWithComputedWidth:s,spaceWidth:u}}catch{return null}},GD=function(t,r,n,a,o){var s=t.maxLines,u=t.children,f=t.style,d=t.breakAll,m=ce(s),h=u,g=function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return Y.reduce(function(W,Z){var V=Z.word,ee=Z.width,J=W[W.length-1];if(J&&(a==null||o||J.width+ee+n<Number(a)))J.words.push(V),J.width+=ee+n;else{var I={words:[V],width:ee};W.push(I)}return W},[])},x=g(r),j=function(Y){return Y.reduce(function(W,Z){return W.width>Z.width?W:Z})};if(!m)return x;for(var S="…",b=function(Y){var W=h.slice(0,Y),Z=N_({breakAll:d,style:f,children:W+S}).wordsWithComputedWidth,V=g(Z),ee=V.length>s||j(V).width>Number(a);return[ee,V]},A=0,O=h.length-1,E=0,N;A<=O&&E<=h.length-1;){var _=Math.floor((A+O)/2),P=_-1,T=b(P),R=Y3(T,2),$=R[0],z=R[1],B=b(_),M=Y3(B,1),H=M[0];if(!$&&!H&&(A=_+1),$&&H&&(O=_-1),!$&&H){N=z;break}E++}return N||x},J3=function(t){var r=Te(t)?[]:t.toString().split(k_);return[{words:r}]},XD=function(t){var r=t.width,n=t.scaleToFit,a=t.children,o=t.style,s=t.breakAll,u=t.maxLines;if((r||n)&&!qi.isSsr){var f,d,m=N_({breakAll:s,children:a,style:o});if(m){var h=m.wordsWithComputedWidth,g=m.spaceWidth;f=h,d=g}else return J3(a);return GD({breakAll:s,children:a,maxLines:u,style:o},f,d,r,n)}return J3(a)},Z3="#808080",Fu=function(t){var r=t.x,n=r===void 0?0:r,a=t.y,o=a===void 0?0:a,s=t.lineHeight,u=s===void 0?"1em":s,f=t.capHeight,d=f===void 0?"0.71em":f,m=t.scaleToFit,h=m===void 0?!1:m,g=t.textAnchor,x=g===void 0?"start":g,j=t.verticalAnchor,S=j===void 0?"end":j,b=t.fill,A=b===void 0?Z3:b,O=X3(t,qD),E=D.useMemo(function(){return XD({breakAll:O.breakAll,children:O.children,maxLines:O.maxLines,scaleToFit:h,style:O.style,width:O.width})},[O.breakAll,O.children,O.maxLines,h,O.style,O.width]),N=O.dx,_=O.dy,P=O.angle,T=O.className,R=O.breakAll,$=X3(O,zD);if(!ht(n)||!ht(o))return null;var z=n+(ce(N)?N:0),B=o+(ce(_)?_:0),M;switch(S){case"start":M=s0("calc(".concat(d,")"));break;case"middle":M=s0("calc(".concat((E.length-1)/2," * -").concat(u," + (").concat(d," / 2))"));break;default:M=s0("calc(".concat(E.length-1," * -").concat(u,")"));break}var H=[];if(h){var X=E[0].width,Y=O.width;H.push("scale(".concat((ce(Y)?Y/X:1)/X,")"))}return P&&H.push("rotate(".concat(P,", ").concat(z,", ").concat(B,")")),H.length&&($.transform=H.join(" ")),q.createElement("text",P2({},Ce($,!0),{x:z,y:B,className:Ie("recharts-text",T),textAnchor:x,fill:A.includes("url")?Z3:A}),E.map(function(W,Z){var V=W.words.join(R?"":" ");return q.createElement("tspan",{x:z,dy:Z===0?M:u,key:"".concat(V,"-").concat(Z)},V)}))};function Kl(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ov(e){let t=e,r=e;e.length===1&&(t=(s,u)=>e(s)-u,r=YD(e));function n(s,u,f,d){for(f==null&&(f=0),d==null&&(d=s.length);f<d;){const m=f+d>>>1;r(s[m],u)<0?f=m+1:d=m}return f}function a(s,u,f,d){for(f==null&&(f=0),d==null&&(d=s.length);f<d;){const m=f+d>>>1;r(s[m],u)>0?d=m:f=m+1}return f}function o(s,u,f,d){f==null&&(f=0),d==null&&(d=s.length);const m=n(s,u,f,d-1);return m>f&&t(s[m-1],u)>-t(s[m],u)?m-1:m}return{left:n,center:o,right:a}}function YD(e){return(t,r)=>Kl(e(t),r)}function T_(e){return e===null?NaN:+e}function*QD(e,t){for(let r of e)r!=null&&(r=+r)>=r&&(yield r)}const JD=ov(Kl),Vl=JD.right;ov(T_).center;class e5 extends Map{constructor(t,r=tM){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,a]of t)this.set(n,a)}get(t){return super.get(t5(this,t))}has(t){return super.has(t5(this,t))}set(t,r){return super.set(ZD(this,t),r)}delete(t){return super.delete(eM(this,t))}}function t5({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function ZD({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function eM({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(r),e.delete(n)),r}function tM(e){return e!==null&&typeof e=="object"?e.valueOf():e}var k2=Math.sqrt(50),N2=Math.sqrt(10),T2=Math.sqrt(2);function C2(e,t,r){var n,a=-1,o,s,u;if(t=+t,e=+e,r=+r,e===t&&r>0)return[e];if((n=t<e)&&(o=e,e=t,t=o),(u=C_(e,t,r))===0||!isFinite(u))return[];if(u>0){let f=Math.round(e/u),d=Math.round(t/u);for(f*u<e&&++f,d*u>t&&--d,s=new Array(o=d-f+1);++a<o;)s[a]=(f+a)*u}else{u=-u;let f=Math.round(e*u),d=Math.round(t*u);for(f/u<e&&++f,d/u>t&&--d,s=new Array(o=d-f+1);++a<o;)s[a]=(f+a)/u}return n&&s.reverse(),s}function C_(e,t,r){var n=(t-e)/Math.max(0,r),a=Math.floor(Math.log(n)/Math.LN10),o=n/Math.pow(10,a);return a>=0?(o>=k2?10:o>=N2?5:o>=T2?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(o>=k2?10:o>=N2?5:o>=T2?2:1)}function D2(e,t,r){var n=Math.abs(t-e)/Math.max(0,r),a=Math.pow(10,Math.floor(Math.log(n)/Math.LN10)),o=n/a;return o>=k2?a*=10:o>=N2?a*=5:o>=T2&&(a*=2),t<e?-a:a}function r5(e,t){let r;for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);return r}function n5(e,t){let r;for(const n of e)n!=null&&(r>n||r===void 0&&n>=n)&&(r=n);return r}function D_(e,t,r=0,n=e.length-1,a=Kl){for(;n>r;){if(n-r>600){const f=n-r+1,d=t-r+1,m=Math.log(f),h=.5*Math.exp(2*m/3),g=.5*Math.sqrt(m*h*(f-h)/f)*(d-f/2<0?-1:1),x=Math.max(r,Math.floor(t-d*h/f+g)),j=Math.min(n,Math.floor(t+(f-d)*h/f+g));D_(e,t,x,j,a)}const o=e[t];let s=r,u=n;for(Lo(e,r,t),a(e[n],o)>0&&Lo(e,r,n);s<u;){for(Lo(e,s,u),++s,--u;a(e[s],o)<0;)++s;for(;a(e[u],o)>0;)--u}a(e[r],o)===0?Lo(e,r,u):(++u,Lo(e,u,n)),u<=t&&(r=u+1),t<=u&&(n=u-1)}return e}function Lo(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function rM(e,t,r){if(e=Float64Array.from(QD(e)),!!(n=e.length)){if((t=+t)<=0||n<2)return n5(e);if(t>=1)return r5(e);var n,a=(n-1)*t,o=Math.floor(a),s=r5(D_(e,o).subarray(0,o+1)),u=n5(e.subarray(o+1));return s+(u-s)*(a-o)}}function nM(e,t,r=T_){if(n=e.length){if((t=+t)<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,a=(n-1)*t,o=Math.floor(a),s=+r(e[o],o,e),u=+r(e[o+1],o+1,e);return s+(u-s)*(a-o)}}function aM(e,t,r){e=+e,t=+t,r=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+r;for(var n=-1,a=Math.max(0,Math.ceil((t-e)/r))|0,o=new Array(a);++n<a;)o[n]=e+n*r;return o}function wr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function An(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const M2=Symbol("implicit");function lv(){var e=new e5,t=[],r=[],n=M2;function a(o){let s=e.get(o);if(s===void 0){if(n!==M2)return n;e.set(o,s=t.push(o)-1)}return r[s%r.length]}return a.domain=function(o){if(!arguments.length)return t.slice();t=[],e=new e5;for(const s of o)e.has(s)||e.set(s,t.push(s)-1);return a},a.range=function(o){return arguments.length?(r=Array.from(o),a):r.slice()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.copy=function(){return lv(t,r).unknown(n)},wr.apply(a,arguments),a}function cl(){var e=lv().unknown(void 0),t=e.domain,r=e.range,n=0,a=1,o,s,u=!1,f=0,d=0,m=.5;delete e.unknown;function h(){var g=t().length,x=a<n,j=x?a:n,S=x?n:a;o=(S-j)/Math.max(1,g-f+d*2),u&&(o=Math.floor(o)),j+=(S-j-o*(g-f))*m,s=o*(1-f),u&&(j=Math.round(j),s=Math.round(s));var b=aM(g).map(function(A){return j+o*A});return r(x?b.reverse():b)}return e.domain=function(g){return arguments.length?(t(g),h()):t()},e.range=function(g){return arguments.length?([n,a]=g,n=+n,a=+a,h()):[n,a]},e.rangeRound=function(g){return[n,a]=g,n=+n,a=+a,u=!0,h()},e.bandwidth=function(){return s},e.step=function(){return o},e.round=function(g){return arguments.length?(u=!!g,h()):u},e.padding=function(g){return arguments.length?(f=Math.min(1,d=+g),h()):f},e.paddingInner=function(g){return arguments.length?(f=Math.min(1,g),h()):f},e.paddingOuter=function(g){return arguments.length?(d=+g,h()):d},e.align=function(g){return arguments.length?(m=Math.max(0,Math.min(1,g)),h()):m},e.copy=function(){return cl(t(),[n,a]).round(u).paddingInner(f).paddingOuter(d).align(m)},wr.apply(h(),arguments)}function M_(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return M_(t())},e}function Jo(){return M_(cl.apply(null,arguments).paddingInner(1))}function sv(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function R_(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function Gl(){}var fl=.7,Bu=1/fl,di="\\s*([+-]?\\d+)\\s*",dl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Vr="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",iM=/^#([0-9a-f]{3,8})$/,oM=new RegExp("^rgb\\("+[di,di,di]+"\\)$"),lM=new RegExp("^rgb\\("+[Vr,Vr,Vr]+"\\)$"),sM=new RegExp("^rgba\\("+[di,di,di,dl]+"\\)$"),uM=new RegExp("^rgba\\("+[Vr,Vr,Vr,dl]+"\\)$"),cM=new RegExp("^hsl\\("+[dl,Vr,Vr]+"\\)$"),fM=new RegExp("^hsla\\("+[dl,Vr,Vr,dl]+"\\)$"),a5={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};sv(Gl,pl,{copy:function(e){return Object.assign(new this.constructor,this,e)},displayable:function(){return this.rgb().displayable()},hex:i5,formatHex:i5,formatHsl:dM,formatRgb:o5,toString:o5});function i5(){return this.rgb().formatHex()}function dM(){return I_(this).formatHsl()}function o5(){return this.rgb().formatRgb()}function pl(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=iM.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?l5(t):r===3?new ar(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?hu(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?hu(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=oM.exec(e))?new ar(t[1],t[2],t[3],1):(t=lM.exec(e))?new ar(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=sM.exec(e))?hu(t[1],t[2],t[3],t[4]):(t=uM.exec(e))?hu(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=cM.exec(e))?c5(t[1],t[2]/100,t[3]/100,1):(t=fM.exec(e))?c5(t[1],t[2]/100,t[3]/100,t[4]):a5.hasOwnProperty(e)?l5(a5[e]):e==="transparent"?new ar(NaN,NaN,NaN,0):null}function l5(e){return new ar(e>>16&255,e>>8&255,e&255,1)}function hu(e,t,r,n){return n<=0&&(e=t=r=NaN),new ar(e,t,r,n)}function pM(e){return e instanceof Gl||(e=pl(e)),e?(e=e.rgb(),new ar(e.r,e.g,e.b,e.opacity)):new ar}function R2(e,t,r,n){return arguments.length===1?pM(e):new ar(e,t,r,n??1)}function ar(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}sv(ar,R2,R_(Gl,{brighter:function(e){return e=e==null?Bu:Math.pow(Bu,e),new ar(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?fl:Math.pow(fl,e),new ar(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:s5,formatHex:s5,formatRgb:u5,toString:u5}));function s5(){return"#"+u0(this.r)+u0(this.g)+u0(this.b)}function u5(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}function u0(e){return e=Math.max(0,Math.min(255,Math.round(e)||0)),(e<16?"0":"")+e.toString(16)}function c5(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Hr(e,t,r,n)}function I_(e){if(e instanceof Hr)return new Hr(e.h,e.s,e.l,e.opacity);if(e instanceof Gl||(e=pl(e)),!e)return new Hr;if(e instanceof Hr)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,a=Math.min(t,r,n),o=Math.max(t,r,n),s=NaN,u=o-a,f=(o+a)/2;return u?(t===o?s=(r-n)/u+(r<n)*6:r===o?s=(n-t)/u+2:s=(t-r)/u+4,u/=f<.5?o+a:2-o-a,s*=60):u=f>0&&f<1?0:s,new Hr(s,u,f,e.opacity)}function hM(e,t,r,n){return arguments.length===1?I_(e):new Hr(e,t,r,n??1)}function Hr(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}sv(Hr,hM,R_(Gl,{brighter:function(e){return e=e==null?Bu:Math.pow(Bu,e),new Hr(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?fl:Math.pow(fl,e),new Hr(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,a=2*r-n;return new ar(c0(e>=240?e-240:e+120,a,n),c0(e,a,n),c0(e<120?e+240:e-120,a,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(e===1?")":", "+e+")")}}));function c0(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const uv=e=>()=>e;function mM(e,t){return function(r){return e+r*t}}function yM(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function vM(e){return(e=+e)==1?$_:function(t,r){return r-t?yM(t,r,e):uv(isNaN(t)?r:t)}}function $_(e,t){var r=t-e;return r?mM(e,r):uv(isNaN(e)?t:e)}const f5=(function e(t){var r=vM(t);function n(a,o){var s=r((a=R2(a)).r,(o=R2(o)).r),u=r(a.g,o.g),f=r(a.b,o.b),d=$_(a.opacity,o.opacity);return function(m){return a.r=s(m),a.g=u(m),a.b=f(m),a.opacity=d(m),a+""}}return n.gamma=e,n})(1);function gM(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),a;return function(o){for(a=0;a<r;++a)n[a]=e[a]*(1-o)+t[a]*o;return n}}function xM(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function bM(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,a=new Array(n),o=new Array(r),s;for(s=0;s<n;++s)a[s]=zi(e[s],t[s]);for(;s<r;++s)o[s]=t[s];return function(u){for(s=0;s<n;++s)o[s]=a[s](u);return o}}function wM(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function qu(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function SM(e,t){var r={},n={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?r[a]=zi(e[a],t[a]):n[a]=t[a];return function(o){for(a in r)n[a]=r[a](o);return n}}var I2=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,f0=new RegExp(I2.source,"g");function jM(e){return function(){return e}}function _M(e){return function(t){return e(t)+""}}function AM(e,t){var r=I2.lastIndex=f0.lastIndex=0,n,a,o,s=-1,u=[],f=[];for(e=e+"",t=t+"";(n=I2.exec(e))&&(a=f0.exec(t));)(o=a.index)>r&&(o=t.slice(r,o),u[s]?u[s]+=o:u[++s]=o),(n=n[0])===(a=a[0])?u[s]?u[s]+=a:u[++s]=a:(u[++s]=null,f.push({i:s,x:qu(n,a)})),r=f0.lastIndex;return r<t.length&&(o=t.slice(r),u[s]?u[s]+=o:u[++s]=o),u.length<2?f[0]?_M(f[0].x):jM(t):(t=f.length,function(d){for(var m=0,h;m<t;++m)u[(h=f[m]).i]=h.x(d);return u.join("")})}function zi(e,t){var r=typeof t,n;return t==null||r==="boolean"?uv(t):(r==="number"?qu:r==="string"?(n=pl(t))?(t=n,f5):AM:t instanceof pl?f5:t instanceof Date?wM:xM(t)?gM:Array.isArray(t)?bM:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?SM:qu)(e,t)}function cv(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function OM(e,t){t===void 0&&(t=e,e=zi);for(var r=0,n=t.length-1,a=t[0],o=new Array(n<0?0:n);r<n;)o[r]=e(a,a=t[++r]);return function(s){var u=Math.max(0,Math.min(n-1,Math.floor(s*=n)));return o[u](s-u)}}function EM(e){return function(){return e}}function zu(e){return+e}var d5=[0,1];function Lt(e){return e}function $2(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:EM(isNaN(t)?NaN:.5)}function PM(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function kM(e,t,r){var n=e[0],a=e[1],o=t[0],s=t[1];return a<n?(n=$2(a,n),o=r(s,o)):(n=$2(n,a),o=r(o,s)),function(u){return o(n(u))}}function NM(e,t,r){var n=Math.min(e.length,t.length)-1,a=new Array(n),o=new Array(n),s=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++s<n;)a[s]=$2(e[s],e[s+1]),o[s]=r(t[s],t[s+1]);return function(u){var f=Vl(e,u,1,n)-1;return o[f](a[f](u))}}function Xl(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function $c(){var e=d5,t=d5,r=zi,n,a,o,s=Lt,u,f,d;function m(){var g=Math.min(e.length,t.length);return s!==Lt&&(s=PM(e[0],e[g-1])),u=g>2?NM:kM,f=d=null,h}function h(g){return g==null||isNaN(g=+g)?o:(f||(f=u(e.map(n),t,r)))(n(s(g)))}return h.invert=function(g){return s(a((d||(d=u(t,e.map(n),qu)))(g)))},h.domain=function(g){return arguments.length?(e=Array.from(g,zu),m()):e.slice()},h.range=function(g){return arguments.length?(t=Array.from(g),m()):t.slice()},h.rangeRound=function(g){return t=Array.from(g),r=cv,m()},h.clamp=function(g){return arguments.length?(s=g?!0:Lt,m()):s!==Lt},h.interpolate=function(g){return arguments.length?(r=g,m()):r},h.unknown=function(g){return arguments.length?(o=g,h):o},function(g,x){return n=g,a=x,m()}}function fv(){return $c()(Lt,Lt)}function TM(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Uu(e,t){if(!isFinite(e)||e===0)return null;var r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function xi(e){return e=Uu(Math.abs(e)),e?e[1]:NaN}function CM(e,t){return function(r,n){for(var a=r.length,o=[],s=0,u=e[0],f=0;a>0&&u>0&&(f+u+1>n&&(u=Math.max(1,n-f)),o.push(r.substring(a-=u,a+u)),!((f+=u+1)>n));)u=e[s=(s+1)%e.length];return o.reverse().join(t)}}function DM(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var MM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function hl(e){if(!(t=MM.exec(e)))throw new Error("invalid format: "+e);var t;return new dv({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}hl.prototype=dv.prototype;function dv(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}dv.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function RM(e){e:for(var t=e.length,r=1,n=-1,a;r<t;++r)switch(e[r]){case".":n=a=r;break;case"0":n===0&&(n=r),a=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(a+1):e}var Wu;function IM(e,t){var r=Uu(e,t);if(!r)return Wu=void 0,e.toPrecision(t);var n=r[0],a=r[1],o=a-(Wu=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,s=n.length;return o===s?n:o>s?n+new Array(o-s+1).join("0"):o>0?n.slice(0,o)+"."+n.slice(o):"0."+new Array(1-o).join("0")+Uu(e,Math.max(0,t+o-1))[0]}function p5(e,t){var r=Uu(e,t);if(!r)return e+"";var n=r[0],a=r[1];return a<0?"0."+new Array(-a).join("0")+n:n.length>a+1?n.slice(0,a+1)+"."+n.slice(a+1):n+new Array(a-n.length+2).join("0")}const h5={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:TM,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>p5(e*100,t),r:p5,s:IM,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function m5(e){return e}var y5=Array.prototype.map,v5=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function $M(e){var t=e.grouping===void 0||e.thousands===void 0?m5:CM(y5.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?m5:DM(y5.call(e.numerals,String)),s=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"−":e.minus+"",f=e.nan===void 0?"NaN":e.nan+"";function d(h,g){h=hl(h);var x=h.fill,j=h.align,S=h.sign,b=h.symbol,A=h.zero,O=h.width,E=h.comma,N=h.precision,_=h.trim,P=h.type;P==="n"?(E=!0,P="g"):h5[P]||(N===void 0&&(N=12),_=!0,P="g"),(A||x==="0"&&j==="=")&&(A=!0,x="0",j="=");var T=(g&&g.prefix!==void 0?g.prefix:"")+(b==="$"?r:b==="#"&&/[boxX]/.test(P)?"0"+P.toLowerCase():""),R=(b==="$"?n:/[%p]/.test(P)?s:"")+(g&&g.suffix!==void 0?g.suffix:""),$=h5[P],z=/[defgprs%]/.test(P);N=N===void 0?6:/[gprs]/.test(P)?Math.max(1,Math.min(21,N)):Math.max(0,Math.min(20,N));function B(M){var H=T,X=R,Y,W,Z;if(P==="c")X=$(M)+X,M="";else{M=+M;var V=M<0||1/M<0;if(M=isNaN(M)?f:$(Math.abs(M),N),_&&(M=RM(M)),V&&+M==0&&S!=="+"&&(V=!1),H=(V?S==="("?S:u:S==="-"||S==="("?"":S)+H,X=(P==="s"&&!isNaN(M)&&Wu!==void 0?v5[8+Wu/3]:"")+X+(V&&S==="("?")":""),z){for(Y=-1,W=M.length;++Y<W;)if(Z=M.charCodeAt(Y),48>Z||Z>57){X=(Z===46?a+M.slice(Y+1):M.slice(Y))+X,M=M.slice(0,Y);break}}}E&&!A&&(M=t(M,1/0));var ee=H.length+M.length+X.length,J=ee<O?new Array(O-ee+1).join(x):"";switch(E&&A&&(M=t(J+M,J.length?O-X.length:1/0),J=""),j){case"<":M=H+M+X+J;break;case"=":M=H+J+M+X;break;case"^":M=J.slice(0,ee=J.length>>1)+H+M+X+J.slice(ee);break;default:M=J+H+M+X;break}return o(M)}return B.toString=function(){return h+""},B}function m(h,g){var x=Math.max(-8,Math.min(8,Math.floor(xi(g)/3)))*3,j=Math.pow(10,-x),S=d((h=hl(h),h.type="f",h),{suffix:v5[8+x/3]});return function(b){return S(j*b)}}return{format:d,formatPrefix:m}}var mu,pv,L_;LM({thousands:",",grouping:[3],currency:["$",""]});function LM(e){return mu=$M(e),pv=mu.format,L_=mu.formatPrefix,mu}function FM(e){return Math.max(0,-xi(Math.abs(e)))}function BM(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(xi(t)/3)))*3-xi(Math.abs(e)))}function qM(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,xi(t)-xi(e))+1}function F_(e,t,r,n){var a=D2(e,t,r),o;switch(n=hl(n??",f"),n.type){case"s":{var s=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(o=BM(a,s))&&(n.precision=o),L_(n,s)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(o=qM(a,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=o-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(o=FM(a))&&(n.precision=o-(n.type==="%")*2);break}}return pv(n)}function Jn(e){var t=e.domain;return e.ticks=function(r){var n=t();return C2(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var a=t();return F_(a[0],a[a.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),a=0,o=n.length-1,s=n[a],u=n[o],f,d,m=10;for(u<s&&(d=s,s=u,u=d,d=a,a=o,o=d);m-- >0;){if(d=C_(s,u,r),d===f)return n[a]=s,n[o]=u,t(n);if(d>0)s=Math.floor(s/d)*d,u=Math.ceil(u/d)*d;else if(d<0)s=Math.ceil(s*d)/d,u=Math.floor(u*d)/d;else break;f=d}return e},e}function Hu(){var e=fv();return e.copy=function(){return Xl(e,Hu())},wr.apply(e,arguments),Jn(e)}function B_(e){var t;function r(n){return n==null||isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(n){return arguments.length?(e=Array.from(n,zu),r):e.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return B_(e).unknown(t)},e=arguments.length?Array.from(e,zu):[0,1],Jn(r)}function q_(e,t){e=e.slice();var r=0,n=e.length-1,a=e[r],o=e[n],s;return o<a&&(s=r,r=n,n=s,s=a,a=o,o=s),e[r]=t.floor(a),e[n]=t.ceil(o),e}function g5(e){return Math.log(e)}function x5(e){return Math.exp(e)}function zM(e){return-Math.log(-e)}function UM(e){return-Math.exp(-e)}function WM(e){return isFinite(e)?+("1e"+e):e<0?0:e}function HM(e){return e===10?WM:e===Math.E?Math.exp:t=>Math.pow(e,t)}function KM(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function b5(e){return(t,r)=>-e(-t,r)}function hv(e){const t=e(g5,x5),r=t.domain;let n=10,a,o;function s(){return a=KM(n),o=HM(n),r()[0]<0?(a=b5(a),o=b5(o),e(zM,UM)):e(g5,x5),t}return t.base=function(u){return arguments.length?(n=+u,s()):n},t.domain=function(u){return arguments.length?(r(u),s()):r()},t.ticks=u=>{const f=r();let d=f[0],m=f[f.length-1];const h=m<d;h&&([d,m]=[m,d]);let g=a(d),x=a(m),j,S;const b=u==null?10:+u;let A=[];if(!(n%1)&&x-g<b){if(g=Math.floor(g),x=Math.ceil(x),d>0){for(;g<=x;++g)for(j=1;j<n;++j)if(S=g<0?j/o(-g):j*o(g),!(S<d)){if(S>m)break;A.push(S)}}else for(;g<=x;++g)for(j=n-1;j>=1;--j)if(S=g>0?j/o(-g):j*o(g),!(S<d)){if(S>m)break;A.push(S)}A.length*2<b&&(A=C2(d,m,b))}else A=C2(g,x,Math.min(x-g,b)).map(o);return h?A.reverse():A},t.tickFormat=(u,f)=>{if(u==null&&(u=10),f==null&&(f=n===10?"s":","),typeof f!="function"&&(!(n%1)&&(f=hl(f)).precision==null&&(f.trim=!0),f=pv(f)),u===1/0)return f;const d=Math.max(1,n*u/t.ticks().length);return m=>{let h=m/o(Math.round(a(m)));return h*n<n-.5&&(h*=n),h<=d?f(m):""}},t.nice=()=>r(q_(r(),{floor:u=>o(Math.floor(a(u))),ceil:u=>o(Math.ceil(a(u)))})),t}function z_(){const e=hv($c()).domain([1,10]);return e.copy=()=>Xl(e,z_()).base(e.base()),wr.apply(e,arguments),e}function w5(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function S5(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function mv(e){var t=1,r=e(w5(t),S5(t));return r.constant=function(n){return arguments.length?e(w5(t=+n),S5(t)):t},Jn(r)}function U_(){var e=mv($c());return e.copy=function(){return Xl(e,U_()).constant(e.constant())},wr.apply(e,arguments)}function j5(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function VM(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function GM(e){return e<0?-e*e:e*e}function yv(e){var t=e(Lt,Lt),r=1;function n(){return r===1?e(Lt,Lt):r===.5?e(VM,GM):e(j5(r),j5(1/r))}return t.exponent=function(a){return arguments.length?(r=+a,n()):r},Jn(t)}function vv(){var e=yv($c());return e.copy=function(){return Xl(e,vv()).exponent(e.exponent())},wr.apply(e,arguments),e}function XM(){return vv.apply(null,arguments).exponent(.5)}function _5(e){return Math.sign(e)*e*e}function YM(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function W_(){var e=fv(),t=[0,1],r=!1,n;function a(o){var s=YM(e(o));return isNaN(s)?n:r?Math.round(s):s}return a.invert=function(o){return e.invert(_5(o))},a.domain=function(o){return arguments.length?(e.domain(o),a):e.domain()},a.range=function(o){return arguments.length?(e.range((t=Array.from(o,zu)).map(_5)),a):t.slice()},a.rangeRound=function(o){return a.range(o).round(!0)},a.round=function(o){return arguments.length?(r=!!o,a):r},a.clamp=function(o){return arguments.length?(e.clamp(o),a):e.clamp()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.copy=function(){return W_(e.domain(),t).round(r).clamp(e.clamp()).unknown(n)},wr.apply(a,arguments),Jn(a)}function H_(){var e=[],t=[],r=[],n;function a(){var s=0,u=Math.max(1,t.length);for(r=new Array(u-1);++s<u;)r[s-1]=nM(e,s/u);return o}function o(s){return s==null||isNaN(s=+s)?n:t[Vl(r,s)]}return o.invertExtent=function(s){var u=t.indexOf(s);return u<0?[NaN,NaN]:[u>0?r[u-1]:e[0],u<r.length?r[u]:e[e.length-1]]},o.domain=function(s){if(!arguments.length)return e.slice();e=[];for(let u of s)u!=null&&!isNaN(u=+u)&&e.push(u);return e.sort(Kl),a()},o.range=function(s){return arguments.length?(t=Array.from(s),a()):t.slice()},o.unknown=function(s){return arguments.length?(n=s,o):n},o.quantiles=function(){return r.slice()},o.copy=function(){return H_().domain(e).range(t).unknown(n)},wr.apply(o,arguments)}function K_(){var e=0,t=1,r=1,n=[.5],a=[0,1],o;function s(f){return f!=null&&f<=f?a[Vl(n,f,0,r)]:o}function u(){var f=-1;for(n=new Array(r);++f<r;)n[f]=((f+1)*t-(f-r)*e)/(r+1);return s}return s.domain=function(f){return arguments.length?([e,t]=f,e=+e,t=+t,u()):[e,t]},s.range=function(f){return arguments.length?(r=(a=Array.from(f)).length-1,u()):a.slice()},s.invertExtent=function(f){var d=a.indexOf(f);return d<0?[NaN,NaN]:d<1?[e,n[0]]:d>=r?[n[r-1],t]:[n[d-1],n[d]]},s.unknown=function(f){return arguments.length&&(o=f),s},s.thresholds=function(){return n.slice()},s.copy=function(){return K_().domain([e,t]).range(a).unknown(o)},wr.apply(Jn(s),arguments)}function V_(){var e=[.5],t=[0,1],r,n=1;function a(o){return o!=null&&o<=o?t[Vl(e,o,0,n)]:r}return a.domain=function(o){return arguments.length?(e=Array.from(o),n=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(o){return arguments.length?(t=Array.from(o),n=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(o){var s=t.indexOf(o);return[e[s-1],e[s]]},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return V_().domain(e).range(t).unknown(r)},wr.apply(a,arguments)}const d0=new Date,p0=new Date;function mt(e,t,r,n){function a(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return a.floor=o=>(e(o=new Date(+o)),o),a.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),a.round=o=>{const s=a(o),u=a.ceil(o);return o-s<u-o?s:u},a.offset=(o,s)=>(t(o=new Date(+o),s==null?1:Math.floor(s)),o),a.range=(o,s,u)=>{const f=[];if(o=a.ceil(o),u=u==null?1:Math.floor(u),!(o<s)||!(u>0))return f;let d;do f.push(d=new Date(+o)),t(o,u),e(o);while(d<o&&o<s);return f},a.filter=o=>mt(s=>{if(s>=s)for(;e(s),!o(s);)s.setTime(s-1)},(s,u)=>{if(s>=s)if(u<0)for(;++u<=0;)for(;t(s,-1),!o(s););else for(;--u>=0;)for(;t(s,1),!o(s););}),r&&(a.count=(o,s)=>(d0.setTime(+o),p0.setTime(+s),e(d0),e(p0),Math.floor(r(d0,p0))),a.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?a.filter(n?s=>n(s)%o===0:s=>a.count(0,s)%o===0):a)),a}const Ku=mt(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Ku.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?mt(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):Ku);Ku.range;const cn=1e3,mr=cn*60,fn=mr*60,xn=fn*24,gv=xn*7,A5=xn*30,h0=xn*365,ga=mt(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*cn)},(e,t)=>(t-e)/cn,e=>e.getUTCSeconds());ga.range;const xv=mt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*cn)},(e,t)=>{e.setTime(+e+t*mr)},(e,t)=>(t-e)/mr,e=>e.getMinutes());xv.range;const bv=mt(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*mr)},(e,t)=>(t-e)/mr,e=>e.getUTCMinutes());bv.range;const wv=mt(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*cn-e.getMinutes()*mr)},(e,t)=>{e.setTime(+e+t*fn)},(e,t)=>(t-e)/fn,e=>e.getHours());wv.range;const Sv=mt(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*fn)},(e,t)=>(t-e)/fn,e=>e.getUTCHours());Sv.range;const Yl=mt(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*mr)/xn,e=>e.getDate()-1);Yl.range;const Lc=mt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/xn,e=>e.getUTCDate()-1);Lc.range;const G_=mt(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/xn,e=>Math.floor(e/xn));G_.range;function Ea(e){return mt(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*mr)/gv)}const Fc=Ea(0),Vu=Ea(1),QM=Ea(2),JM=Ea(3),bi=Ea(4),ZM=Ea(5),eR=Ea(6);Fc.range;Vu.range;QM.range;JM.range;bi.range;ZM.range;eR.range;function Pa(e){return mt(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/gv)}const Bc=Pa(0),Gu=Pa(1),tR=Pa(2),rR=Pa(3),wi=Pa(4),nR=Pa(5),aR=Pa(6);Bc.range;Gu.range;tR.range;rR.range;wi.range;nR.range;aR.range;const jv=mt(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());jv.range;const _v=mt(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());_v.range;const bn=mt(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());bn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:mt(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});bn.range;const wn=mt(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());wn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:mt(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});wn.range;function X_(e,t,r,n,a,o){const s=[[ga,1,cn],[ga,5,5*cn],[ga,15,15*cn],[ga,30,30*cn],[o,1,mr],[o,5,5*mr],[o,15,15*mr],[o,30,30*mr],[a,1,fn],[a,3,3*fn],[a,6,6*fn],[a,12,12*fn],[n,1,xn],[n,2,2*xn],[r,1,gv],[t,1,A5],[t,3,3*A5],[e,1,h0]];function u(d,m,h){const g=m<d;g&&([d,m]=[m,d]);const x=h&&typeof h.range=="function"?h:f(d,m,h),j=x?x.range(d,+m+1):[];return g?j.reverse():j}function f(d,m,h){const g=Math.abs(m-d)/h,x=ov(([,,b])=>b).right(s,g);if(x===s.length)return e.every(D2(d/h0,m/h0,h));if(x===0)return Ku.every(Math.max(D2(d,m,h),1));const[j,S]=s[g/s[x-1][2]<s[x][2]/g?x-1:x];return j.every(S)}return[u,f]}const[iR,oR]=X_(wn,_v,Bc,G_,Sv,bv),[lR,sR]=X_(bn,jv,Fc,Yl,wv,xv);function m0(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function y0(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Fo(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function uR(e){var t=e.dateTime,r=e.date,n=e.time,a=e.periods,o=e.days,s=e.shortDays,u=e.months,f=e.shortMonths,d=Bo(a),m=qo(a),h=Bo(o),g=qo(o),x=Bo(s),j=qo(s),S=Bo(u),b=qo(u),A=Bo(f),O=qo(f),E={a:Z,A:V,b:ee,B:J,c:null,d:T5,e:T5,f:CR,g:zR,G:WR,H:kR,I:NR,j:TR,L:Y_,m:DR,M:MR,p:I,q:U,Q:M5,s:R5,S:RR,u:IR,U:$R,V:LR,w:FR,W:BR,x:null,X:null,y:qR,Y:UR,Z:HR,"%":D5},N={a:se,A:me,b:xe,B:_e,c:null,d:C5,e:C5,f:XR,g:iI,G:lI,H:KR,I:VR,j:GR,L:J_,m:YR,M:QR,p:De,q:Ae,Q:M5,s:R5,S:JR,u:ZR,U:eI,V:tI,w:rI,W:nI,x:null,X:null,y:aI,Y:oI,Z:sI,"%":D5},_={a:z,A:B,b:M,B:H,c:X,d:k5,e:k5,f:AR,g:P5,G:E5,H:N5,I:N5,j:wR,L:_R,m:bR,M:SR,p:$,q:xR,Q:ER,s:PR,S:jR,u:hR,U:mR,V:yR,w:pR,W:vR,x:Y,X:W,y:P5,Y:E5,Z:gR,"%":OR};E.x=P(r,E),E.X=P(n,E),E.c=P(t,E),N.x=P(r,N),N.X=P(n,N),N.c=P(t,N);function P(oe,ge){return function(Oe){var ae=[],ze=-1,Ne=0,tt=oe.length,rt,yt,Sr;for(Oe instanceof Date||(Oe=new Date(+Oe));++ze<tt;)oe.charCodeAt(ze)===37&&(ae.push(oe.slice(Ne,ze)),(yt=O5[rt=oe.charAt(++ze)])!=null?rt=oe.charAt(++ze):yt=rt==="e"?" ":"0",(Sr=ge[rt])&&(rt=Sr(Oe,yt)),ae.push(rt),Ne=ze+1);return ae.push(oe.slice(Ne,ze)),ae.join("")}}function T(oe,ge){return function(Oe){var ae=Fo(1900,void 0,1),ze=R(ae,oe,Oe+="",0),Ne,tt;if(ze!=Oe.length)return null;if("Q"in ae)return new Date(ae.Q);if("s"in ae)return new Date(ae.s*1e3+("L"in ae?ae.L:0));if(ge&&!("Z"in ae)&&(ae.Z=0),"p"in ae&&(ae.H=ae.H%12+ae.p*12),ae.m===void 0&&(ae.m="q"in ae?ae.q:0),"V"in ae){if(ae.V<1||ae.V>53)return null;"w"in ae||(ae.w=1),"Z"in ae?(Ne=y0(Fo(ae.y,0,1)),tt=Ne.getUTCDay(),Ne=tt>4||tt===0?Gu.ceil(Ne):Gu(Ne),Ne=Lc.offset(Ne,(ae.V-1)*7),ae.y=Ne.getUTCFullYear(),ae.m=Ne.getUTCMonth(),ae.d=Ne.getUTCDate()+(ae.w+6)%7):(Ne=m0(Fo(ae.y,0,1)),tt=Ne.getDay(),Ne=tt>4||tt===0?Vu.ceil(Ne):Vu(Ne),Ne=Yl.offset(Ne,(ae.V-1)*7),ae.y=Ne.getFullYear(),ae.m=Ne.getMonth(),ae.d=Ne.getDate()+(ae.w+6)%7)}else("W"in ae||"U"in ae)&&("w"in ae||(ae.w="u"in ae?ae.u%7:"W"in ae?1:0),tt="Z"in ae?y0(Fo(ae.y,0,1)).getUTCDay():m0(Fo(ae.y,0,1)).getDay(),ae.m=0,ae.d="W"in ae?(ae.w+6)%7+ae.W*7-(tt+5)%7:ae.w+ae.U*7-(tt+6)%7);return"Z"in ae?(ae.H+=ae.Z/100|0,ae.M+=ae.Z%100,y0(ae)):m0(ae)}}function R(oe,ge,Oe,ae){for(var ze=0,Ne=ge.length,tt=Oe.length,rt,yt;ze<Ne;){if(ae>=tt)return-1;if(rt=ge.charCodeAt(ze++),rt===37){if(rt=ge.charAt(ze++),yt=_[rt in O5?ge.charAt(ze++):rt],!yt||(ae=yt(oe,Oe,ae))<0)return-1}else if(rt!=Oe.charCodeAt(ae++))return-1}return ae}function $(oe,ge,Oe){var ae=d.exec(ge.slice(Oe));return ae?(oe.p=m.get(ae[0].toLowerCase()),Oe+ae[0].length):-1}function z(oe,ge,Oe){var ae=x.exec(ge.slice(Oe));return ae?(oe.w=j.get(ae[0].toLowerCase()),Oe+ae[0].length):-1}function B(oe,ge,Oe){var ae=h.exec(ge.slice(Oe));return ae?(oe.w=g.get(ae[0].toLowerCase()),Oe+ae[0].length):-1}function M(oe,ge,Oe){var ae=A.exec(ge.slice(Oe));return ae?(oe.m=O.get(ae[0].toLowerCase()),Oe+ae[0].length):-1}function H(oe,ge,Oe){var ae=S.exec(ge.slice(Oe));return ae?(oe.m=b.get(ae[0].toLowerCase()),Oe+ae[0].length):-1}function X(oe,ge,Oe){return R(oe,t,ge,Oe)}function Y(oe,ge,Oe){return R(oe,r,ge,Oe)}function W(oe,ge,Oe){return R(oe,n,ge,Oe)}function Z(oe){return s[oe.getDay()]}function V(oe){return o[oe.getDay()]}function ee(oe){return f[oe.getMonth()]}function J(oe){return u[oe.getMonth()]}function I(oe){return a[+(oe.getHours()>=12)]}function U(oe){return 1+~~(oe.getMonth()/3)}function se(oe){return s[oe.getUTCDay()]}function me(oe){return o[oe.getUTCDay()]}function xe(oe){return f[oe.getUTCMonth()]}function _e(oe){return u[oe.getUTCMonth()]}function De(oe){return a[+(oe.getUTCHours()>=12)]}function Ae(oe){return 1+~~(oe.getUTCMonth()/3)}return{format:function(oe){var ge=P(oe+="",E);return ge.toString=function(){return oe},ge},parse:function(oe){var ge=T(oe+="",!1);return ge.toString=function(){return oe},ge},utcFormat:function(oe){var ge=P(oe+="",N);return ge.toString=function(){return oe},ge},utcParse:function(oe){var ge=T(oe+="",!0);return ge.toString=function(){return oe},ge}}}var O5={"-":"",_:" ",0:"0"},wt=/^\s*\d+/,cR=/^%/,fR=/[\\^$*+?|[\]().{}]/g;function $e(e,t,r){var n=e<0?"-":"",a=(n?-e:e)+"",o=a.length;return n+(o<r?new Array(r-o+1).join(t)+a:a)}function dR(e){return e.replace(fR,"\\$&")}function Bo(e){return new RegExp("^(?:"+e.map(dR).join("|")+")","i")}function qo(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function pR(e,t,r){var n=wt.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function hR(e,t,r){var n=wt.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function mR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function yR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function vR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function E5(e,t,r){var n=wt.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function P5(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function gR(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function xR(e,t,r){var n=wt.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function bR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function k5(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function wR(e,t,r){var n=wt.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function N5(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function SR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function jR(e,t,r){var n=wt.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function _R(e,t,r){var n=wt.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function AR(e,t,r){var n=wt.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function OR(e,t,r){var n=cR.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function ER(e,t,r){var n=wt.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function PR(e,t,r){var n=wt.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function T5(e,t){return $e(e.getDate(),t,2)}function kR(e,t){return $e(e.getHours(),t,2)}function NR(e,t){return $e(e.getHours()%12||12,t,2)}function TR(e,t){return $e(1+Yl.count(bn(e),e),t,3)}function Y_(e,t){return $e(e.getMilliseconds(),t,3)}function CR(e,t){return Y_(e,t)+"000"}function DR(e,t){return $e(e.getMonth()+1,t,2)}function MR(e,t){return $e(e.getMinutes(),t,2)}function RR(e,t){return $e(e.getSeconds(),t,2)}function IR(e){var t=e.getDay();return t===0?7:t}function $R(e,t){return $e(Fc.count(bn(e)-1,e),t,2)}function Q_(e){var t=e.getDay();return t>=4||t===0?bi(e):bi.ceil(e)}function LR(e,t){return e=Q_(e),$e(bi.count(bn(e),e)+(bn(e).getDay()===4),t,2)}function FR(e){return e.getDay()}function BR(e,t){return $e(Vu.count(bn(e)-1,e),t,2)}function qR(e,t){return $e(e.getFullYear()%100,t,2)}function zR(e,t){return e=Q_(e),$e(e.getFullYear()%100,t,2)}function UR(e,t){return $e(e.getFullYear()%1e4,t,4)}function WR(e,t){var r=e.getDay();return e=r>=4||r===0?bi(e):bi.ceil(e),$e(e.getFullYear()%1e4,t,4)}function HR(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+$e(t/60|0,"0",2)+$e(t%60,"0",2)}function C5(e,t){return $e(e.getUTCDate(),t,2)}function KR(e,t){return $e(e.getUTCHours(),t,2)}function VR(e,t){return $e(e.getUTCHours()%12||12,t,2)}function GR(e,t){return $e(1+Lc.count(wn(e),e),t,3)}function J_(e,t){return $e(e.getUTCMilliseconds(),t,3)}function XR(e,t){return J_(e,t)+"000"}function YR(e,t){return $e(e.getUTCMonth()+1,t,2)}function QR(e,t){return $e(e.getUTCMinutes(),t,2)}function JR(e,t){return $e(e.getUTCSeconds(),t,2)}function ZR(e){var t=e.getUTCDay();return t===0?7:t}function eI(e,t){return $e(Bc.count(wn(e)-1,e),t,2)}function Z_(e){var t=e.getUTCDay();return t>=4||t===0?wi(e):wi.ceil(e)}function tI(e,t){return e=Z_(e),$e(wi.count(wn(e),e)+(wn(e).getUTCDay()===4),t,2)}function rI(e){return e.getUTCDay()}function nI(e,t){return $e(Gu.count(wn(e)-1,e),t,2)}function aI(e,t){return $e(e.getUTCFullYear()%100,t,2)}function iI(e,t){return e=Z_(e),$e(e.getUTCFullYear()%100,t,2)}function oI(e,t){return $e(e.getUTCFullYear()%1e4,t,4)}function lI(e,t){var r=e.getUTCDay();return e=r>=4||r===0?wi(e):wi.ceil(e),$e(e.getUTCFullYear()%1e4,t,4)}function sI(){return"+0000"}function D5(){return"%"}function M5(e){return+e}function R5(e){return Math.floor(+e/1e3)}var ni,eA,tA;uI({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function uI(e){return ni=uR(e),eA=ni.format,ni.parse,tA=ni.utcFormat,ni.utcParse,ni}function cI(e){return new Date(e)}function fI(e){return e instanceof Date?+e:+new Date(+e)}function Av(e,t,r,n,a,o,s,u,f,d){var m=fv(),h=m.invert,g=m.domain,x=d(".%L"),j=d(":%S"),S=d("%I:%M"),b=d("%I %p"),A=d("%a %d"),O=d("%b %d"),E=d("%B"),N=d("%Y");function _(P){return(f(P)<P?x:u(P)<P?j:s(P)<P?S:o(P)<P?b:n(P)<P?a(P)<P?A:O:r(P)<P?E:N)(P)}return m.invert=function(P){return new Date(h(P))},m.domain=function(P){return arguments.length?g(Array.from(P,fI)):g().map(cI)},m.ticks=function(P){var T=g();return e(T[0],T[T.length-1],P??10)},m.tickFormat=function(P,T){return T==null?_:d(T)},m.nice=function(P){var T=g();return(!P||typeof P.range!="function")&&(P=t(T[0],T[T.length-1],P??10)),P?g(q_(T,P)):m},m.copy=function(){return Xl(m,Av(e,t,r,n,a,o,s,u,f,d))},m}function dI(){return wr.apply(Av(lR,sR,bn,jv,Fc,Yl,wv,xv,ga,eA).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function pI(){return wr.apply(Av(iR,oR,wn,_v,Bc,Lc,Sv,bv,ga,tA).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function qc(){var e=0,t=1,r,n,a,o,s=Lt,u=!1,f;function d(h){return h==null||isNaN(h=+h)?f:s(a===0?.5:(h=(o(h)-r)*a,u?Math.max(0,Math.min(1,h)):h))}d.domain=function(h){return arguments.length?([e,t]=h,r=o(e=+e),n=o(t=+t),a=r===n?0:1/(n-r),d):[e,t]},d.clamp=function(h){return arguments.length?(u=!!h,d):u},d.interpolator=function(h){return arguments.length?(s=h,d):s};function m(h){return function(g){var x,j;return arguments.length?([x,j]=g,s=h(x,j),d):[s(0),s(1)]}}return d.range=m(zi),d.rangeRound=m(cv),d.unknown=function(h){return arguments.length?(f=h,d):f},function(h){return o=h,r=h(e),n=h(t),a=r===n?0:1/(n-r),d}}function Zn(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function rA(){var e=Jn(qc()(Lt));return e.copy=function(){return Zn(e,rA())},An.apply(e,arguments)}function nA(){var e=hv(qc()).domain([1,10]);return e.copy=function(){return Zn(e,nA()).base(e.base())},An.apply(e,arguments)}function aA(){var e=mv(qc());return e.copy=function(){return Zn(e,aA()).constant(e.constant())},An.apply(e,arguments)}function Ov(){var e=yv(qc());return e.copy=function(){return Zn(e,Ov()).exponent(e.exponent())},An.apply(e,arguments)}function hI(){return Ov.apply(null,arguments).exponent(.5)}function iA(){var e=[],t=Lt;function r(n){if(n!=null&&!isNaN(n=+n))return t((Vl(e,n,1)-1)/(e.length-1))}return r.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let a of n)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Kl),r},r.interpolator=function(n){return arguments.length?(t=n,r):t},r.range=function(){return e.map((n,a)=>t(a/(e.length-1)))},r.quantiles=function(n){return Array.from({length:n+1},(a,o)=>rM(e,o/n))},r.copy=function(){return iA(t).domain(e)},An.apply(r,arguments)}function zc(){var e=0,t=.5,r=1,n=1,a,o,s,u,f,d=Lt,m,h=!1,g;function x(S){return isNaN(S=+S)?g:(S=.5+((S=+m(S))-o)*(n*S<n*o?u:f),d(h?Math.max(0,Math.min(1,S)):S))}x.domain=function(S){return arguments.length?([e,t,r]=S,a=m(e=+e),o=m(t=+t),s=m(r=+r),u=a===o?0:.5/(o-a),f=o===s?0:.5/(s-o),n=o<a?-1:1,x):[e,t,r]},x.clamp=function(S){return arguments.length?(h=!!S,x):h},x.interpolator=function(S){return arguments.length?(d=S,x):d};function j(S){return function(b){var A,O,E;return arguments.length?([A,O,E]=b,d=OM(S,[A,O,E]),x):[d(0),d(.5),d(1)]}}return x.range=j(zi),x.rangeRound=j(cv),x.unknown=function(S){return arguments.length?(g=S,x):g},function(S){return m=S,a=S(e),o=S(t),s=S(r),u=a===o?0:.5/(o-a),f=o===s?0:.5/(s-o),n=o<a?-1:1,x}}function oA(){var e=Jn(zc()(Lt));return e.copy=function(){return Zn(e,oA())},An.apply(e,arguments)}function lA(){var e=hv(zc()).domain([.1,1,10]);return e.copy=function(){return Zn(e,lA()).base(e.base())},An.apply(e,arguments)}function sA(){var e=mv(zc());return e.copy=function(){return Zn(e,sA()).constant(e.constant())},An.apply(e,arguments)}function Ev(){var e=yv(zc());return e.copy=function(){return Zn(e,Ev()).exponent(e.exponent())},An.apply(e,arguments)}function mI(){return Ev.apply(null,arguments).exponent(.5)}const I5=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:cl,scaleDiverging:oA,scaleDivergingLog:lA,scaleDivergingPow:Ev,scaleDivergingSqrt:mI,scaleDivergingSymlog:sA,scaleIdentity:B_,scaleImplicit:M2,scaleLinear:Hu,scaleLog:z_,scaleOrdinal:lv,scalePoint:Jo,scalePow:vv,scaleQuantile:H_,scaleQuantize:K_,scaleRadial:W_,scaleSequential:rA,scaleSequentialLog:nA,scaleSequentialPow:Ov,scaleSequentialQuantile:iA,scaleSequentialSqrt:hI,scaleSequentialSymlog:aA,scaleSqrt:XM,scaleSymlog:U_,scaleThreshold:V_,scaleTime:dI,scaleUtc:pI,tickFormat:F_},Symbol.toStringTag,{value:"Module"}));var v0,$5;function uA(){if($5)return v0;$5=1;var e=Li();function t(r,n,a){for(var o=-1,s=r.length;++o<s;){var u=r[o],f=n(u);if(f!=null&&(d===void 0?f===f&&!e(f):a(f,d)))var d=f,m=u}return m}return v0=t,v0}var g0,L5;function yI(){if(L5)return g0;L5=1;function e(t,r){return t>r}return g0=e,g0}var x0,F5;function vI(){if(F5)return x0;F5=1;var e=uA(),t=yI(),r=Bi();function n(a){return a&&a.length?e(a,r,t):void 0}return x0=n,x0}var gI=vI();const Uc=We(gI);var b0,B5;function xI(){if(B5)return b0;B5=1;function e(t,r){return t<r}return b0=e,b0}var w0,q5;function bI(){if(q5)return w0;q5=1;var e=uA(),t=xI(),r=Bi();function n(a){return a&&a.length?e(a,r,t):void 0}return w0=n,w0}var wI=bI();const Wc=We(wI);var S0,z5;function SI(){if(z5)return S0;z5=1;var e=zy(),t=Qn(),r=g_(),n=Xt();function a(o,s){var u=n(o)?e:r;return u(o,t(s,3))}return S0=a,S0}var j0,U5;function jI(){if(U5)return j0;U5=1;var e=y_(),t=SI();function r(n,a){return e(t(n,a),1)}return j0=r,j0}var _I=jI();const AI=We(_I);var _0,W5;function OI(){if(W5)return _0;W5=1;var e=tv();function t(r,n){return e(r,n)}return _0=t,_0}var EI=OI();const Hc=We(EI);var Ui=1e9,PI={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},kv,Qe=!0,xr="[DecimalError] ",wa=xr+"Invalid argument: ",Pv=xr+"Exponent out of range: ",Wi=Math.floor,ya=Math.pow,kI=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,nr,bt=1e7,Xe=7,cA=9007199254740991,Xu=Wi(cA/Xe),pe={};pe.absoluteValue=pe.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};pe.comparedTo=pe.cmp=function(e){var t,r,n,a,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(n=o.d.length,a=e.d.length,t=0,r=n<a?n:a;t<r;++t)if(o.d[t]!==e.d[t])return o.d[t]>e.d[t]^o.s<0?1:-1;return n===a?0:n>a^o.s<0?1:-1};pe.decimalPlaces=pe.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*Xe;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r};pe.dividedBy=pe.div=function(e){return yn(this,new this.constructor(e))};pe.dividedToIntegerBy=pe.idiv=function(e){var t=this,r=t.constructor;return Ue(yn(t,new r(e),0,1),r.precision)};pe.equals=pe.eq=function(e){return!this.cmp(e)};pe.exponent=function(){return ct(this)};pe.greaterThan=pe.gt=function(e){return this.cmp(e)>0};pe.greaterThanOrEqualTo=pe.gte=function(e){return this.cmp(e)>=0};pe.isInteger=pe.isint=function(){return this.e>this.d.length-2};pe.isNegative=pe.isneg=function(){return this.s<0};pe.isPositive=pe.ispos=function(){return this.s>0};pe.isZero=function(){return this.s===0};pe.lessThan=pe.lt=function(e){return this.cmp(e)<0};pe.lessThanOrEqualTo=pe.lte=function(e){return this.cmp(e)<1};pe.logarithm=pe.log=function(e){var t,r=this,n=r.constructor,a=n.precision,o=a+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(nr))throw Error(xr+"NaN");if(r.s<1)throw Error(xr+(r.s?"NaN":"-Infinity"));return r.eq(nr)?new n(0):(Qe=!1,t=yn(ml(r,o),ml(e,o),o),Qe=!0,Ue(t,a))};pe.minus=pe.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?pA(t,e):fA(t,(e.s=-e.s,e))};pe.modulo=pe.mod=function(e){var t,r=this,n=r.constructor,a=n.precision;if(e=new n(e),!e.s)throw Error(xr+"NaN");return r.s?(Qe=!1,t=yn(r,e,0,1).times(e),Qe=!0,r.minus(t)):Ue(new n(r),a)};pe.naturalExponential=pe.exp=function(){return dA(this)};pe.naturalLogarithm=pe.ln=function(){return ml(this)};pe.negated=pe.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};pe.plus=pe.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?fA(t,e):pA(t,(e.s=-e.s,e))};pe.precision=pe.sd=function(e){var t,r,n,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(wa+e);if(t=ct(a)+1,n=a.d.length-1,r=n*Xe+1,n=a.d[n],n){for(;n%10==0;n/=10)r--;for(n=a.d[0];n>=10;n/=10)r++}return e&&t>r?t:r};pe.squareRoot=pe.sqrt=function(){var e,t,r,n,a,o,s,u=this,f=u.constructor;if(u.s<1){if(!u.s)return new f(0);throw Error(xr+"NaN")}for(e=ct(u),Qe=!1,a=Math.sqrt(+u),a==0||a==1/0?(t=Kr(u.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=Wi((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new f(t)):n=new f(a.toString()),r=f.precision,a=s=r+3;;)if(o=n,n=o.plus(yn(u,o,s+2)).times(.5),Kr(o.d).slice(0,s)===(t=Kr(n.d)).slice(0,s)){if(t=t.slice(s-3,s+1),a==s&&t=="4999"){if(Ue(o,r+1,0),o.times(o).eq(u)){n=o;break}}else if(t!="9999")break;s+=4}return Qe=!0,Ue(n,r)};pe.times=pe.mul=function(e){var t,r,n,a,o,s,u,f,d,m=this,h=m.constructor,g=m.d,x=(e=new h(e)).d;if(!m.s||!e.s)return new h(0);for(e.s*=m.s,r=m.e+e.e,f=g.length,d=x.length,f<d&&(o=g,g=x,x=o,s=f,f=d,d=s),o=[],s=f+d,n=s;n--;)o.push(0);for(n=d;--n>=0;){for(t=0,a=f+n;a>n;)u=o[a]+x[n]*g[a-n-1]+t,o[a--]=u%bt|0,t=u/bt|0;o[a]=(o[a]+t)%bt|0}for(;!o[--s];)o.pop();return t?++r:o.shift(),e.d=o,e.e=r,Qe?Ue(e,h.precision):e};pe.toDecimalPlaces=pe.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(Yr(e,0,Ui),t===void 0?t=n.rounding:Yr(t,0,8),Ue(r,e+ct(r)+1,t))};pe.toExponential=function(e,t){var r,n=this,a=n.constructor;return e===void 0?r=ja(n,!0):(Yr(e,0,Ui),t===void 0?t=a.rounding:Yr(t,0,8),n=Ue(new a(n),e+1,t),r=ja(n,!0,e+1)),r};pe.toFixed=function(e,t){var r,n,a=this,o=a.constructor;return e===void 0?ja(a):(Yr(e,0,Ui),t===void 0?t=o.rounding:Yr(t,0,8),n=Ue(new o(a),e+ct(a)+1,t),r=ja(n.abs(),!1,e+ct(n)+1),a.isneg()&&!a.isZero()?"-"+r:r)};pe.toInteger=pe.toint=function(){var e=this,t=e.constructor;return Ue(new t(e),ct(e)+1,t.rounding)};pe.toNumber=function(){return+this};pe.toPower=pe.pow=function(e){var t,r,n,a,o,s,u=this,f=u.constructor,d=12,m=+(e=new f(e));if(!e.s)return new f(nr);if(u=new f(u),!u.s){if(e.s<1)throw Error(xr+"Infinity");return u}if(u.eq(nr))return u;if(n=f.precision,e.eq(nr))return Ue(u,n);if(t=e.e,r=e.d.length-1,s=t>=r,o=u.s,s){if((r=m<0?-m:m)<=cA){for(a=new f(nr),t=Math.ceil(n/Xe+4),Qe=!1;r%2&&(a=a.times(u),K5(a.d,t)),r=Wi(r/2),r!==0;)u=u.times(u),K5(u.d,t);return Qe=!0,e.s<0?new f(nr).div(a):Ue(a,n)}}else if(o<0)throw Error(xr+"NaN");return o=o<0&&e.d[Math.max(t,r)]&1?-1:1,u.s=1,Qe=!1,a=e.times(ml(u,n+d)),Qe=!0,a=dA(a),a.s=o,a};pe.toPrecision=function(e,t){var r,n,a=this,o=a.constructor;return e===void 0?(r=ct(a),n=ja(a,r<=o.toExpNeg||r>=o.toExpPos)):(Yr(e,1,Ui),t===void 0?t=o.rounding:Yr(t,0,8),a=Ue(new o(a),e,t),r=ct(a),n=ja(a,e<=r||r<=o.toExpNeg,e)),n};pe.toSignificantDigits=pe.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(Yr(e,1,Ui),t===void 0?t=n.rounding:Yr(t,0,8)),Ue(new n(r),e,t)};pe.toString=pe.valueOf=pe.val=pe.toJSON=pe[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=ct(e),r=e.constructor;return ja(e,t<=r.toExpNeg||t>=r.toExpPos)};function fA(e,t){var r,n,a,o,s,u,f,d,m=e.constructor,h=m.precision;if(!e.s||!t.s)return t.s||(t=new m(e)),Qe?Ue(t,h):t;if(f=e.d,d=t.d,s=e.e,a=t.e,f=f.slice(),o=s-a,o){for(o<0?(n=f,o=-o,u=d.length):(n=d,a=s,u=f.length),s=Math.ceil(h/Xe),u=s>u?s+1:u+1,o>u&&(o=u,n.length=1),n.reverse();o--;)n.push(0);n.reverse()}for(u=f.length,o=d.length,u-o<0&&(o=u,n=d,d=f,f=n),r=0;o;)r=(f[--o]=f[o]+d[o]+r)/bt|0,f[o]%=bt;for(r&&(f.unshift(r),++a),u=f.length;f[--u]==0;)f.pop();return t.d=f,t.e=a,Qe?Ue(t,h):t}function Yr(e,t,r){if(e!==~~e||e<t||e>r)throw Error(wa+e)}function Kr(e){var t,r,n,a=e.length-1,o="",s=e[0];if(a>0){for(o+=s,t=1;t<a;t++)n=e[t]+"",r=Xe-n.length,r&&(o+=Kn(r)),o+=n;s=e[t],n=s+"",r=Xe-n.length,r&&(o+=Kn(r))}else if(s===0)return"0";for(;s%10===0;)s/=10;return o+s}var yn=(function(){function e(n,a){var o,s=0,u=n.length;for(n=n.slice();u--;)o=n[u]*a+s,n[u]=o%bt|0,s=o/bt|0;return s&&n.unshift(s),n}function t(n,a,o,s){var u,f;if(o!=s)f=o>s?1:-1;else for(u=f=0;u<o;u++)if(n[u]!=a[u]){f=n[u]>a[u]?1:-1;break}return f}function r(n,a,o){for(var s=0;o--;)n[o]-=s,s=n[o]<a[o]?1:0,n[o]=s*bt+n[o]-a[o];for(;!n[0]&&n.length>1;)n.shift()}return function(n,a,o,s){var u,f,d,m,h,g,x,j,S,b,A,O,E,N,_,P,T,R,$=n.constructor,z=n.s==a.s?1:-1,B=n.d,M=a.d;if(!n.s)return new $(n);if(!a.s)throw Error(xr+"Division by zero");for(f=n.e-a.e,T=M.length,_=B.length,x=new $(z),j=x.d=[],d=0;M[d]==(B[d]||0);)++d;if(M[d]>(B[d]||0)&&--f,o==null?O=o=$.precision:s?O=o+(ct(n)-ct(a))+1:O=o,O<0)return new $(0);if(O=O/Xe+2|0,d=0,T==1)for(m=0,M=M[0],O++;(d<_||m)&&O--;d++)E=m*bt+(B[d]||0),j[d]=E/M|0,m=E%M|0;else{for(m=bt/(M[0]+1)|0,m>1&&(M=e(M,m),B=e(B,m),T=M.length,_=B.length),N=T,S=B.slice(0,T),b=S.length;b<T;)S[b++]=0;R=M.slice(),R.unshift(0),P=M[0],M[1]>=bt/2&&++P;do m=0,u=t(M,S,T,b),u<0?(A=S[0],T!=b&&(A=A*bt+(S[1]||0)),m=A/P|0,m>1?(m>=bt&&(m=bt-1),h=e(M,m),g=h.length,b=S.length,u=t(h,S,g,b),u==1&&(m--,r(h,T<g?R:M,g))):(m==0&&(u=m=1),h=M.slice()),g=h.length,g<b&&h.unshift(0),r(S,h,b),u==-1&&(b=S.length,u=t(M,S,T,b),u<1&&(m++,r(S,T<b?R:M,b))),b=S.length):u===0&&(m++,S=[0]),j[d++]=m,u&&S[0]?S[b++]=B[N]||0:(S=[B[N]],b=1);while((N++<_||S[0]!==void 0)&&O--)}return j[0]||j.shift(),x.e=f,Ue(x,s?o+ct(x)+1:o)}})();function dA(e,t){var r,n,a,o,s,u,f=0,d=0,m=e.constructor,h=m.precision;if(ct(e)>16)throw Error(Pv+ct(e));if(!e.s)return new m(nr);for(Qe=!1,u=h,s=new m(.03125);e.abs().gte(.1);)e=e.times(s),d+=5;for(n=Math.log(ya(2,d))/Math.LN10*2+5|0,u+=n,r=a=o=new m(nr),m.precision=u;;){if(a=Ue(a.times(e),u),r=r.times(++f),s=o.plus(yn(a,r,u)),Kr(s.d).slice(0,u)===Kr(o.d).slice(0,u)){for(;d--;)o=Ue(o.times(o),u);return m.precision=h,t==null?(Qe=!0,Ue(o,h)):o}o=s}}function ct(e){for(var t=e.e*Xe,r=e.d[0];r>=10;r/=10)t++;return t}function A0(e,t,r){if(t>e.LN10.sd())throw Qe=!0,r&&(e.precision=r),Error(xr+"LN10 precision limit exceeded");return Ue(new e(e.LN10),t)}function Kn(e){for(var t="";e--;)t+="0";return t}function ml(e,t){var r,n,a,o,s,u,f,d,m,h=1,g=10,x=e,j=x.d,S=x.constructor,b=S.precision;if(x.s<1)throw Error(xr+(x.s?"NaN":"-Infinity"));if(x.eq(nr))return new S(0);if(t==null?(Qe=!1,d=b):d=t,x.eq(10))return t==null&&(Qe=!0),A0(S,d);if(d+=g,S.precision=d,r=Kr(j),n=r.charAt(0),o=ct(x),Math.abs(o)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)x=x.times(e),r=Kr(x.d),n=r.charAt(0),h++;o=ct(x),n>1?(x=new S("0."+r),o++):x=new S(n+"."+r.slice(1))}else return f=A0(S,d+2,b).times(o+""),x=ml(new S(n+"."+r.slice(1)),d-g).plus(f),S.precision=b,t==null?(Qe=!0,Ue(x,b)):x;for(u=s=x=yn(x.minus(nr),x.plus(nr),d),m=Ue(x.times(x),d),a=3;;){if(s=Ue(s.times(m),d),f=u.plus(yn(s,new S(a),d)),Kr(f.d).slice(0,d)===Kr(u.d).slice(0,d))return u=u.times(2),o!==0&&(u=u.plus(A0(S,d+2,b).times(o+""))),u=yn(u,new S(h),d),S.precision=b,t==null?(Qe=!0,Ue(u,b)):u;u=f,a+=2}}function H5(e,t){var r,n,a;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(n,a),t){if(a-=n,r=r-n-1,e.e=Wi(r/Xe),e.d=[],n=(r+1)%Xe,r<0&&(n+=Xe),n<a){for(n&&e.d.push(+t.slice(0,n)),a-=Xe;n<a;)e.d.push(+t.slice(n,n+=Xe));t=t.slice(n),n=Xe-t.length}else n-=a;for(;n--;)t+="0";if(e.d.push(+t),Qe&&(e.e>Xu||e.e<-Xu))throw Error(Pv+r)}else e.s=0,e.e=0,e.d=[0];return e}function Ue(e,t,r){var n,a,o,s,u,f,d,m,h=e.d;for(s=1,o=h[0];o>=10;o/=10)s++;if(n=t-s,n<0)n+=Xe,a=t,d=h[m=0];else{if(m=Math.ceil((n+1)/Xe),o=h.length,m>=o)return e;for(d=o=h[m],s=1;o>=10;o/=10)s++;n%=Xe,a=n-Xe+s}if(r!==void 0&&(o=ya(10,s-a-1),u=d/o%10|0,f=t<0||h[m+1]!==void 0||d%o,f=r<4?(u||f)&&(r==0||r==(e.s<0?3:2)):u>5||u==5&&(r==4||f||r==6&&(n>0?a>0?d/ya(10,s-a):0:h[m-1])%10&1||r==(e.s<0?8:7))),t<1||!h[0])return f?(o=ct(e),h.length=1,t=t-o-1,h[0]=ya(10,(Xe-t%Xe)%Xe),e.e=Wi(-t/Xe)||0):(h.length=1,h[0]=e.e=e.s=0),e;if(n==0?(h.length=m,o=1,m--):(h.length=m+1,o=ya(10,Xe-n),h[m]=a>0?(d/ya(10,s-a)%ya(10,a)|0)*o:0),f)for(;;)if(m==0){(h[0]+=o)==bt&&(h[0]=1,++e.e);break}else{if(h[m]+=o,h[m]!=bt)break;h[m--]=0,o=1}for(n=h.length;h[--n]===0;)h.pop();if(Qe&&(e.e>Xu||e.e<-Xu))throw Error(Pv+ct(e));return e}function pA(e,t){var r,n,a,o,s,u,f,d,m,h,g=e.constructor,x=g.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new g(e),Qe?Ue(t,x):t;if(f=e.d,h=t.d,n=t.e,d=e.e,f=f.slice(),s=d-n,s){for(m=s<0,m?(r=f,s=-s,u=h.length):(r=h,n=d,u=f.length),a=Math.max(Math.ceil(x/Xe),u)+2,s>a&&(s=a,r.length=1),r.reverse(),a=s;a--;)r.push(0);r.reverse()}else{for(a=f.length,u=h.length,m=a<u,m&&(u=a),a=0;a<u;a++)if(f[a]!=h[a]){m=f[a]<h[a];break}s=0}for(m&&(r=f,f=h,h=r,t.s=-t.s),u=f.length,a=h.length-u;a>0;--a)f[u++]=0;for(a=h.length;a>s;){if(f[--a]<h[a]){for(o=a;o&&f[--o]===0;)f[o]=bt-1;--f[o],f[a]+=bt}f[a]-=h[a]}for(;f[--u]===0;)f.pop();for(;f[0]===0;f.shift())--n;return f[0]?(t.d=f,t.e=n,Qe?Ue(t,x):t):new g(0)}function ja(e,t,r){var n,a=ct(e),o=Kr(e.d),s=o.length;return t?(r&&(n=r-s)>0?o=o.charAt(0)+"."+o.slice(1)+Kn(n):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(a<0?"e":"e+")+a):a<0?(o="0."+Kn(-a-1)+o,r&&(n=r-s)>0&&(o+=Kn(n))):a>=s?(o+=Kn(a+1-s),r&&(n=r-a-1)>0&&(o=o+"."+Kn(n))):((n=a+1)<s&&(o=o.slice(0,n)+"."+o.slice(n)),r&&(n=r-s)>0&&(a+1===s&&(o+="."),o+=Kn(n))),e.s<0?"-"+o:o}function K5(e,t){if(e.length>t)return e.length=t,!0}function hA(e){var t,r,n;function a(o){var s=this;if(!(s instanceof a))return new a(o);if(s.constructor=a,o instanceof a){s.s=o.s,s.e=o.e,s.d=(o=o.d)?o.slice():o;return}if(typeof o=="number"){if(o*0!==0)throw Error(wa+o);if(o>0)s.s=1;else if(o<0)o=-o,s.s=-1;else{s.s=0,s.e=0,s.d=[0];return}if(o===~~o&&o<1e7){s.e=0,s.d=[o];return}return H5(s,o.toString())}else if(typeof o!="string")throw Error(wa+o);if(o.charCodeAt(0)===45?(o=o.slice(1),s.s=-1):s.s=1,kI.test(o))H5(s,o);else throw Error(wa+o)}if(a.prototype=pe,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=hA,a.config=a.set=NI,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return a.config(e),a}function NI(e){if(!e||typeof e!="object")throw Error(xr+"Object expected");var t,r,n,a=["precision",1,Ui,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((n=e[r=a[t]])!==void 0)if(Wi(n)===n&&n>=a[t+1]&&n<=a[t+2])this[r]=n;else throw Error(wa+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(wa+r+": "+n);return this}var kv=hA(PI);nr=new kv(1);const qe=kv;function TI(e){return RI(e)||MI(e)||DI(e)||CI()}function CI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DI(e,t){if(e){if(typeof e=="string")return L2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L2(e,t)}}function MI(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function RI(e){if(Array.isArray(e))return L2(e)}function L2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var II=function(t){return t},mA={},yA=function(t){return t===mA},V5=function(t){return function r(){return arguments.length===0||arguments.length===1&&yA(arguments.length<=0?void 0:arguments[0])?r:t.apply(void 0,arguments)}},$I=function e(t,r){return t===1?r:V5(function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];var s=a.filter(function(u){return u!==mA}).length;return s>=t?r.apply(void 0,a):e(t-s,V5(function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];var m=a.map(function(h){return yA(h)?f.shift():h});return r.apply(void 0,TI(m).concat(f))}))})},Kc=function(t){return $I(t.length,t)},F2=function(t,r){for(var n=[],a=t;a<r;++a)n[a-t]=a;return n},LI=Kc(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(r){return t[r]}).map(e)}),FI=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(!r.length)return II;var a=r.reverse(),o=a[0],s=a.slice(1);return function(){return s.reduce(function(u,f){return f(u)},o.apply(void 0,arguments))}},B2=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},vA=function(t){var r=null,n=null;return function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return r&&o.every(function(u,f){return u===r[f]})||(r=o,n=t.apply(void 0,o)),n}};function BI(e){var t;return e===0?t=1:t=Math.floor(new qe(e).abs().log(10).toNumber())+1,t}function qI(e,t,r){for(var n=new qe(e),a=0,o=[];n.lt(t)&&a<1e5;)o.push(n.toNumber()),n=n.add(r),a++;return o}var zI=Kc(function(e,t,r){var n=+e,a=+t;return n+r*(a-n)}),UI=Kc(function(e,t,r){var n=t-+e;return n=n||1/0,(r-e)/n}),WI=Kc(function(e,t,r){var n=t-+e;return n=n||1/0,Math.max(0,Math.min(1,(r-e)/n))});const Vc={rangeStep:qI,getDigitCount:BI,interpolateNumber:zI,uninterpolateNumber:UI,uninterpolateTruncation:WI};function q2(e){return VI(e)||KI(e)||gA(e)||HI()}function HI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KI(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function VI(e){if(Array.isArray(e))return z2(e)}function yl(e,t){return YI(e)||XI(e,t)||gA(e,t)||GI()}function GI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gA(e,t){if(e){if(typeof e=="string")return z2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z2(e,t)}}function z2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function XI(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),u;!(n=(u=s.next()).done)&&(r.push(u.value),!(t&&r.length===t));n=!0);}catch(f){a=!0,o=f}finally{try{!n&&s.return!=null&&s.return()}finally{if(a)throw o}}return r}}function YI(e){if(Array.isArray(e))return e}function xA(e){var t=yl(e,2),r=t[0],n=t[1],a=r,o=n;return r>n&&(a=n,o=r),[a,o]}function bA(e,t,r){if(e.lte(0))return new qe(0);var n=Vc.getDigitCount(e.toNumber()),a=new qe(10).pow(n),o=e.div(a),s=n!==1?.05:.1,u=new qe(Math.ceil(o.div(s).toNumber())).add(r).mul(s),f=u.mul(a);return t?f:new qe(Math.ceil(f))}function QI(e,t,r){var n=1,a=new qe(e);if(!a.isint()&&r){var o=Math.abs(e);o<1?(n=new qe(10).pow(Vc.getDigitCount(e)-1),a=new qe(Math.floor(a.div(n).toNumber())).mul(n)):o>1&&(a=new qe(Math.floor(e)))}else e===0?a=new qe(Math.floor((t-1)/2)):r||(a=new qe(Math.floor(e)));var s=Math.floor((t-1)/2),u=FI(LI(function(f){return a.add(new qe(f-s).mul(n)).toNumber()}),F2);return u(0,t)}function wA(e,t,r,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(r-1)))return{step:new qe(0),tickMin:new qe(0),tickMax:new qe(0)};var o=bA(new qe(t).sub(e).div(r-1),n,a),s;e<=0&&t>=0?s=new qe(0):(s=new qe(e).add(t).div(2),s=s.sub(new qe(s).mod(o)));var u=Math.ceil(s.sub(e).div(o).toNumber()),f=Math.ceil(new qe(t).sub(s).div(o).toNumber()),d=u+f+1;return d>r?wA(e,t,r,n,a+1):(d<r&&(f=t>0?f+(r-d):f,u=t>0?u:u+(r-d)),{step:o,tickMin:s.sub(new qe(u).mul(o)),tickMax:s.add(new qe(f).mul(o))})}function JI(e){var t=yl(e,2),r=t[0],n=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=Math.max(a,2),u=xA([r,n]),f=yl(u,2),d=f[0],m=f[1];if(d===-1/0||m===1/0){var h=m===1/0?[d].concat(q2(F2(0,a-1).map(function(){return 1/0}))):[].concat(q2(F2(0,a-1).map(function(){return-1/0})),[m]);return r>n?B2(h):h}if(d===m)return QI(d,a,o);var g=wA(d,m,s,o),x=g.step,j=g.tickMin,S=g.tickMax,b=Vc.rangeStep(j,S.add(new qe(.1).mul(x)),x);return r>n?B2(b):b}function ZI(e,t){var r=yl(e,2),n=r[0],a=r[1],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=xA([n,a]),u=yl(s,2),f=u[0],d=u[1];if(f===-1/0||d===1/0)return[n,a];if(f===d)return[f];var m=Math.max(t,2),h=bA(new qe(d).sub(f).div(m-1),o,0),g=[].concat(q2(Vc.rangeStep(new qe(f),new qe(d).sub(new qe(.99).mul(h)),h)),[d]);return n>a?B2(g):g}var e$=vA(JI),t$=vA(ZI),r$="Invariant failed";function _a(e,t){throw new Error(r$)}var n$=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function Yu(){return Yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Yu.apply(this,arguments)}function a$(e,t){return s$(e)||l$(e,t)||o$(e,t)||i$()}function i$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o$(e,t){if(e){if(typeof e=="string")return G5(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G5(e,t)}}function G5(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l$(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function s$(e){if(Array.isArray(e))return e}function u$(e,t){if(e==null)return{};var r=c$(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c$(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function f$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d$(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_A(n.key),n)}}function p$(e,t,r){return t&&d$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function h$(e,t,r){return t=Qu(t),m$(e,SA()?Reflect.construct(t,r||[],Qu(e).constructor):t.apply(e,r))}function m$(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y$(e)}function y$(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function SA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SA=function(){return!!e})()}function Qu(e){return Qu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Qu(e)}function v$(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U2(e,t)}function U2(e,t){return U2=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},U2(e,t)}function jA(e,t,r){return t=_A(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _A(e){var t=g$(e,"string");return Si(t)=="symbol"?t:t+""}function g$(e,t){if(Si(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Si(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Ql=(function(e){function t(){return f$(this,t),h$(this,t,arguments)}return v$(t,e),p$(t,[{key:"render",value:function(){var n=this.props,a=n.offset,o=n.layout,s=n.width,u=n.dataKey,f=n.data,d=n.dataPointFormatter,m=n.xAxis,h=n.yAxis,g=u$(n,n$),x=Ce(g,!1);this.props.direction==="x"&&m.type!=="number"&&_a();var j=f.map(function(S){var b=d(S,u),A=b.x,O=b.y,E=b.value,N=b.errorVal;if(!N)return null;var _=[],P,T;if(Array.isArray(N)){var R=a$(N,2);P=R[0],T=R[1]}else P=T=N;if(o==="vertical"){var $=m.scale,z=O+a,B=z+s,M=z-s,H=$(E-P),X=$(E+T);_.push({x1:X,y1:B,x2:X,y2:M}),_.push({x1:H,y1:z,x2:X,y2:z}),_.push({x1:H,y1:B,x2:H,y2:M})}else if(o==="horizontal"){var Y=h.scale,W=A+a,Z=W-s,V=W+s,ee=Y(E-P),J=Y(E+T);_.push({x1:Z,y1:J,x2:V,y2:J}),_.push({x1:W,y1:ee,x2:W,y2:J}),_.push({x1:Z,y1:ee,x2:V,y2:ee})}return q.createElement(lt,Yu({className:"recharts-errorBar",key:"bar-".concat(_.map(function(I){return"".concat(I.x1,"-").concat(I.x2,"-").concat(I.y1,"-").concat(I.y2)}))},x),_.map(function(I){return q.createElement("line",Yu({},I,{key:"line-".concat(I.x1,"-").concat(I.x2,"-").concat(I.y1,"-").concat(I.y2)}))}))});return q.createElement(lt,{className:"recharts-errorBars"},j)}}])})(q.Component);jA(Ql,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});jA(Ql,"displayName","ErrorBar");function vl(e){"@babel/helpers - typeof";return vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vl(e)}function X5(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ha(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?X5(Object(r),!0).forEach(function(n){x$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X5(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function x$(e,t,r){return t=b$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b$(e){var t=w$(e,"string");return vl(t)=="symbol"?t:t+""}function w$(e,t){if(vl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(vl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var AA=function(t){var r=t.children,n=t.formattedGraphicalItems,a=t.legendWidth,o=t.legendContent,s=rr(r,fi);if(!s)return null;var u=fi.defaultProps,f=u!==void 0?ha(ha({},u),s.props):{},d;return s.props&&s.props.payload?d=s.props&&s.props.payload:o==="children"?d=(n||[]).reduce(function(m,h){var g=h.item,x=h.props,j=x.sectors||x.data||[];return m.concat(j.map(function(S){return{type:s.props.iconType||g.props.legendType,value:S.name,color:S.fill,payload:S}}))},[]):d=(n||[]).map(function(m){var h=m.item,g=h.type.defaultProps,x=g!==void 0?ha(ha({},g),h.props):{},j=x.dataKey,S=x.name,b=x.legendType,A=x.hide;return{inactive:A,dataKey:j,type:f.iconType||b||"square",color:Nv(h),value:S||j,payload:x}}),ha(ha(ha({},f),fi.getWithHeight(s,a)),{},{payload:d,item:s})};function gl(e){"@babel/helpers - typeof";return gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gl(e)}function Y5(e){return A$(e)||_$(e)||j$(e)||S$()}function S$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j$(e,t){if(e){if(typeof e=="string")return W2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W2(e,t)}}function _$(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A$(e){if(Array.isArray(e))return W2(e)}function W2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Q5(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function at(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Q5(Object(r),!0).forEach(function(n){pi(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q5(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function pi(e,t,r){return t=O$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O$(e){var t=E$(e,"string");return gl(t)=="symbol"?t:t+""}function E$(e,t){if(gl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(gl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ir(e,t,r){return Te(e)||Te(t)?r:ht(t)?vr(e,t,r):Pe(t)?t(e):r}function Zo(e,t,r,n){var a=AI(e,function(u){return ir(u,t)});if(r==="number"){var o=a.filter(function(u){return ce(u)||parseFloat(u)});return o.length?[Wc(o),Uc(o)]:[1/0,-1/0]}var s=n?a.filter(function(u){return!Te(u)}):a;return s.map(function(u){return ht(u)||u instanceof Date?u:""})}var P$=function(t){var r,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,s=-1,u=(r=n==null?void 0:n.length)!==null&&r!==void 0?r:0;if(u<=1)return 0;if(o&&o.axisType==="angleAxis"&&Math.abs(Math.abs(o.range[1]-o.range[0])-360)<=1e-6)for(var f=o.range,d=0;d<u;d++){var m=d>0?a[d-1].coordinate:a[u-1].coordinate,h=a[d].coordinate,g=d>=u-1?a[0].coordinate:a[d+1].coordinate,x=void 0;if(Rr(h-m)!==Rr(g-h)){var j=[];if(Rr(g-h)===Rr(f[1]-f[0])){x=g;var S=h+f[1]-f[0];j[0]=Math.min(S,(S+m)/2),j[1]=Math.max(S,(S+m)/2)}else{x=m;var b=g+f[1]-f[0];j[0]=Math.min(h,(b+h)/2),j[1]=Math.max(h,(b+h)/2)}var A=[Math.min(h,(x+h)/2),Math.max(h,(x+h)/2)];if(t>A[0]&&t<=A[1]||t>=j[0]&&t<=j[1]){s=a[d].index;break}}else{var O=Math.min(m,g),E=Math.max(m,g);if(t>(O+h)/2&&t<=(E+h)/2){s=a[d].index;break}}}else for(var N=0;N<u;N++)if(N===0&&t<=(n[N].coordinate+n[N+1].coordinate)/2||N>0&&N<u-1&&t>(n[N].coordinate+n[N-1].coordinate)/2&&t<=(n[N].coordinate+n[N+1].coordinate)/2||N===u-1&&t>(n[N].coordinate+n[N-1].coordinate)/2){s=n[N].index;break}return s},Nv=function(t){var r,n=t,a=n.type.displayName,o=(r=t.type)!==null&&r!==void 0&&r.defaultProps?at(at({},t.type.defaultProps),t.props):t.props,s=o.stroke,u=o.fill,f;switch(a){case"Line":f=s;break;case"Area":case"Radar":f=s&&s!=="none"?s:u;break;default:f=u;break}return f},k$=function(t){var r=t.barSize,n=t.totalSize,a=t.stackGroups,o=a===void 0?{}:a;if(!o)return{};for(var s={},u=Object.keys(o),f=0,d=u.length;f<d;f++)for(var m=o[u[f]].stackGroups,h=Object.keys(m),g=0,x=h.length;g<x;g++){var j=m[h[g]],S=j.items,b=j.cateAxisId,A=S.filter(function(T){return hn(T.type).indexOf("Bar")>=0});if(A&&A.length){var O=A[0].type.defaultProps,E=O!==void 0?at(at({},O),A[0].props):A[0].props,N=E.barSize,_=E[b];s[_]||(s[_]=[]);var P=Te(N)?r:N;s[_].push({item:A[0],stackList:A.slice(1),barSize:Te(P)?void 0:Sa(P,n,0)})}}return s},N$=function(t){var r=t.barGap,n=t.barCategoryGap,a=t.bandSize,o=t.sizeList,s=o===void 0?[]:o,u=t.maxBarSize,f=s.length;if(f<1)return null;var d=Sa(r,a,0,!0),m,h=[];if(s[0].barSize===+s[0].barSize){var g=!1,x=a/f,j=s.reduce(function(N,_){return N+_.barSize||0},0);j+=(f-1)*d,j>=a&&(j-=(f-1)*d,d=0),j>=a&&x>0&&(g=!0,x*=.9,j=f*x);var S=(a-j)/2>>0,b={offset:S-d,size:0};m=s.reduce(function(N,_){var P={item:_.item,position:{offset:b.offset+b.size+d,size:g?x:_.barSize}},T=[].concat(Y5(N),[P]);return b=T[T.length-1].position,_.stackList&&_.stackList.length&&_.stackList.forEach(function(R){T.push({item:R,position:b})}),T},h)}else{var A=Sa(n,a,0,!0);a-2*A-(f-1)*d<=0&&(d=0);var O=(a-2*A-(f-1)*d)/f;O>1&&(O>>=0);var E=u===+u?Math.min(O,u):O;m=s.reduce(function(N,_,P){var T=[].concat(Y5(N),[{item:_.item,position:{offset:A+(O+d)*P+(O-E)/2,size:E}}]);return _.stackList&&_.stackList.length&&_.stackList.forEach(function(R){T.push({item:R,position:T[T.length-1].position})}),T},h)}return m},T$=function(t,r,n,a){var o=n.children,s=n.width,u=n.margin,f=s-(u.left||0)-(u.right||0),d=AA({children:o,legendWidth:f});if(d){var m=a||{},h=m.width,g=m.height,x=d.align,j=d.verticalAlign,S=d.layout;if((S==="vertical"||S==="horizontal"&&j==="middle")&&x!=="center"&&ce(t[x]))return at(at({},t),{},pi({},x,t[x]+(h||0)));if((S==="horizontal"||S==="vertical"&&x==="center")&&j!=="middle"&&ce(t[j]))return at(at({},t),{},pi({},j,t[j]+(g||0)))}return t},C$=function(t,r,n){return Te(r)?!0:t==="horizontal"?r==="yAxis":t==="vertical"||n==="x"?r==="xAxis":n==="y"?r==="yAxis":!0},OA=function(t,r,n,a,o){var s=r.props.children,u=gr(s,Ql).filter(function(d){return C$(a,o,d.props.direction)});if(u&&u.length){var f=u.map(function(d){return d.props.dataKey});return t.reduce(function(d,m){var h=ir(m,n);if(Te(h))return d;var g=Array.isArray(h)?[Wc(h),Uc(h)]:[h,h],x=f.reduce(function(j,S){var b=ir(m,S,0),A=g[0]-Math.abs(Array.isArray(b)?b[0]:b),O=g[1]+Math.abs(Array.isArray(b)?b[1]:b);return[Math.min(A,j[0]),Math.max(O,j[1])]},[1/0,-1/0]);return[Math.min(x[0],d[0]),Math.max(x[1],d[1])]},[1/0,-1/0])}return null},D$=function(t,r,n,a,o){var s=r.map(function(u){return OA(t,u,n,o,a)}).filter(function(u){return!Te(u)});return s&&s.length?s.reduce(function(u,f){return[Math.min(u[0],f[0]),Math.max(u[1],f[1])]},[1/0,-1/0]):null},EA=function(t,r,n,a,o){var s=r.map(function(f){var d=f.props.dataKey;return n==="number"&&d&&OA(t,f,d,a)||Zo(t,d,n,o)});if(n==="number")return s.reduce(function(f,d){return[Math.min(f[0],d[0]),Math.max(f[1],d[1])]},[1/0,-1/0]);var u={};return s.reduce(function(f,d){for(var m=0,h=d.length;m<h;m++)u[d[m]]||(u[d[m]]=!0,f.push(d[m]));return f},[])},PA=function(t,r){return t==="horizontal"&&r==="xAxis"||t==="vertical"&&r==="yAxis"||t==="centric"&&r==="angleAxis"||t==="radial"&&r==="radiusAxis"},kA=function(t,r,n,a){if(a)return t.map(function(f){return f.coordinate});var o,s,u=t.map(function(f){return f.coordinate===r&&(o=!0),f.coordinate===n&&(s=!0),f.coordinate});return o||u.push(r),s||u.push(n),u},dn=function(t,r,n){if(!t)return null;var a=t.scale,o=t.duplicateDomain,s=t.type,u=t.range,f=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,d=(r||n)&&s==="category"&&a.bandwidth?a.bandwidth()/f:0;if(d=t.axisType==="angleAxis"&&(u==null?void 0:u.length)>=2?Rr(u[0]-u[1])*2*d:d,r&&(t.ticks||t.niceTicks)){var m=(t.ticks||t.niceTicks).map(function(h){var g=o?o.indexOf(h):h;return{coordinate:a(g)+d,value:h,offset:d}});return m.filter(function(h){return!Ul(h.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(h,g){return{coordinate:a(h)+d,value:h,index:g,offset:d}}):a.ticks&&!n?a.ticks(t.tickCount).map(function(h){return{coordinate:a(h)+d,value:h,offset:d}}):a.domain().map(function(h,g){return{coordinate:a(h)+d,value:o?o[h]:h,index:g,offset:d}})},O0=new WeakMap,yu=function(t,r){if(typeof r!="function")return t;O0.has(t)||O0.set(t,new WeakMap);var n=O0.get(t);if(n.has(r))return n.get(r);var a=function(){t.apply(void 0,arguments),r.apply(void 0,arguments)};return n.set(r,a),a},M$=function(t,r,n){var a=t.scale,o=t.type,s=t.layout,u=t.axisType;if(a==="auto")return s==="radial"&&u==="radiusAxis"?{scale:cl(),realScaleType:"band"}:s==="radial"&&u==="angleAxis"?{scale:Hu(),realScaleType:"linear"}:o==="category"&&r&&(r.indexOf("LineChart")>=0||r.indexOf("AreaChart")>=0||r.indexOf("ComposedChart")>=0&&!n)?{scale:Jo(),realScaleType:"point"}:o==="category"?{scale:cl(),realScaleType:"band"}:{scale:Hu(),realScaleType:"linear"};if(zl(a)){var f="scale".concat(Nc(a));return{scale:(I5[f]||Jo)(),realScaleType:I5[f]?f:"point"}}return Pe(a)?{scale:a}:{scale:Jo(),realScaleType:"point"}},J5=1e-4,R$=function(t){var r=t.domain();if(!(!r||r.length<=2)){var n=r.length,a=t.range(),o=Math.min(a[0],a[1])-J5,s=Math.max(a[0],a[1])+J5,u=t(r[0]),f=t(r[n-1]);(u<o||u>s||f<o||f>s)&&t.domain([r[0],r[n-1]])}},I$=function(t,r){if(!t)return null;for(var n=0,a=t.length;n<a;n++)if(t[n].item===r)return t[n].position;return null},$$=function(t,r){if(!r||r.length!==2||!ce(r[0])||!ce(r[1]))return t;var n=Math.min(r[0],r[1]),a=Math.max(r[0],r[1]),o=[t[0],t[1]];return(!ce(t[0])||t[0]<n)&&(o[0]=n),(!ce(t[1])||t[1]>a)&&(o[1]=a),o[0]>a&&(o[0]=a),o[1]<n&&(o[1]=n),o},L$=function(t){var r=t.length;if(!(r<=0))for(var n=0,a=t[0].length;n<a;++n)for(var o=0,s=0,u=0;u<r;++u){var f=Ul(t[u][n][1])?t[u][n][0]:t[u][n][1];f>=0?(t[u][n][0]=o,t[u][n][1]=o+f,o=t[u][n][1]):(t[u][n][0]=s,t[u][n][1]=s+f,s=t[u][n][1])}},F$=function(t){var r=t.length;if(!(r<=0))for(var n=0,a=t[0].length;n<a;++n)for(var o=0,s=0;s<r;++s){var u=Ul(t[s][n][1])?t[s][n][0]:t[s][n][1];u>=0?(t[s][n][0]=o,t[s][n][1]=o+u,o=t[s][n][1]):(t[s][n][0]=0,t[s][n][1]=0)}},B$={sign:L$,expand:N9,none:hi,silhouette:T9,wiggle:C9,positive:F$},q$=function(t,r,n){var a=r.map(function(u){return u.props.dataKey}),o=B$[n],s=k9().keys(a).value(function(u,f){return+ir(u,f,0)}).order(g2).offset(o);return s(t)},z$=function(t,r,n,a,o,s){if(!t)return null;var u=s?r.reverse():r,f={},d=u.reduce(function(h,g){var x,j=(x=g.type)!==null&&x!==void 0&&x.defaultProps?at(at({},g.type.defaultProps),g.props):g.props,S=j.stackId,b=j.hide;if(b)return h;var A=j[n],O=h[A]||{hasStack:!1,stackGroups:{}};if(ht(S)){var E=O.stackGroups[S]||{numericAxisId:n,cateAxisId:a,items:[]};E.items.push(g),O.hasStack=!0,O.stackGroups[S]=E}else O.stackGroups[Wl("_stackId_")]={numericAxisId:n,cateAxisId:a,items:[g]};return at(at({},h),{},pi({},A,O))},f),m={};return Object.keys(d).reduce(function(h,g){var x=d[g];if(x.hasStack){var j={};x.stackGroups=Object.keys(x.stackGroups).reduce(function(S,b){var A=x.stackGroups[b];return at(at({},S),{},pi({},b,{numericAxisId:n,cateAxisId:a,items:A.items,stackedData:q$(t,A.items,o)}))},j)}return at(at({},h),{},pi({},g,x))},m)},U$=function(t,r){var n=r.realScaleType,a=r.type,o=r.tickCount,s=r.originalDomain,u=r.allowDecimals,f=n||r.scale;if(f!=="auto"&&f!=="linear")return null;if(o&&a==="number"&&s&&(s[0]==="auto"||s[1]==="auto")){var d=t.domain();if(!d.length)return null;var m=e$(d,o,u);return t.domain([Wc(m),Uc(m)]),{niceTicks:m}}if(o&&a==="number"){var h=t.domain(),g=t$(h,o,u);return{niceTicks:g}}return null};function Z5(e){var t=e.axis,r=e.ticks,n=e.bandSize,a=e.entry,o=e.index,s=e.dataKey;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!Te(a[t.dataKey])){var u=Ou(r,"value",a[t.dataKey]);if(u)return u.coordinate+n/2}return r[o]?r[o].coordinate+n/2:null}var f=ir(a,Te(s)?t.dataKey:s);return Te(f)?null:t.scale(f)}var e6=function(t){var r=t.axis,n=t.ticks,a=t.offset,o=t.bandSize,s=t.entry,u=t.index;if(r.type==="category")return n[u]?n[u].coordinate+a:null;var f=ir(s,r.dataKey,r.domain[u]);return Te(f)?null:r.scale(f)-o/2+a},W$=function(t){var r=t.numericAxis,n=r.scale.domain();if(r.type==="number"){var a=Math.min(n[0],n[1]),o=Math.max(n[0],n[1]);return a<=0&&o>=0?0:o<0?o:a}return n[0]},H$=function(t,r){var n,a=(n=t.type)!==null&&n!==void 0&&n.defaultProps?at(at({},t.type.defaultProps),t.props):t.props,o=a.stackId;if(ht(o)){var s=r[o];if(s){var u=s.items.indexOf(t);return u>=0?s.stackedData[u]:null}}return null},K$=function(t){return t.reduce(function(r,n){return[Wc(n.concat([r[0]]).filter(ce)),Uc(n.concat([r[1]]).filter(ce))]},[1/0,-1/0])},NA=function(t,r,n){return Object.keys(t).reduce(function(a,o){var s=t[o],u=s.stackedData,f=u.reduce(function(d,m){var h=K$(m.slice(r,n+1));return[Math.min(d[0],h[0]),Math.max(d[1],h[1])]},[1/0,-1/0]);return[Math.min(f[0],a[0]),Math.max(f[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},t6=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,r6=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,H2=function(t,r,n){if(Pe(t))return t(r,n);if(!Array.isArray(t))return r;var a=[];if(ce(t[0]))a[0]=n?t[0]:Math.min(t[0],r[0]);else if(t6.test(t[0])){var o=+t6.exec(t[0])[1];a[0]=r[0]-o}else Pe(t[0])?a[0]=t[0](r[0]):a[0]=r[0];if(ce(t[1]))a[1]=n?t[1]:Math.max(t[1],r[1]);else if(r6.test(t[1])){var s=+r6.exec(t[1])[1];a[1]=r[1]+s}else Pe(t[1])?a[1]=t[1](r[1]):a[1]=r[1];return a},Ju=function(t,r,n){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!n||a>0)return a}if(t&&r&&r.length>=2){for(var o=nv(r,function(h){return h.coordinate}),s=1/0,u=1,f=o.length;u<f;u++){var d=o[u],m=o[u-1];s=Math.min((d.coordinate||0)-(m.coordinate||0),s)}return s===1/0?0:s}return n?void 0:0},n6=function(t,r,n){return!t||!t.length||Hc(t,vr(n,"type.defaultProps.domain"))?r:t},TA=function(t,r){var n=t.type.defaultProps?at(at({},t.type.defaultProps),t.props):t.props,a=n.dataKey,o=n.name,s=n.unit,u=n.formatter,f=n.tooltipType,d=n.chartType,m=n.hide;return at(at({},Ce(t,!1)),{},{dataKey:a,unit:s,formatter:u,name:o||a,color:Nv(t),value:ir(r,a),type:f,payload:r,chartType:d,hide:m})};function xl(e){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xl(e)}function a6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function i6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?a6(Object(r),!0).forEach(function(n){V$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function V$(e,t,r){return t=G$(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G$(e){var t=X$(e,"string");return xl(t)=="symbol"?t:t+""}function X$(e,t){if(xl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(xl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Zu=Math.PI/180,Y$=function(t){return t*180/Math.PI},At=function(t,r,n,a){return{x:t+Math.cos(-Zu*a)*n,y:r+Math.sin(-Zu*a)*n}},Q$=function(t,r){var n=t.x,a=t.y,o=r.x,s=r.y;return Math.sqrt(Math.pow(n-o,2)+Math.pow(a-s,2))},J$=function(t,r){var n=t.x,a=t.y,o=r.cx,s=r.cy,u=Q$({x:n,y:a},{x:o,y:s});if(u<=0)return{radius:u};var f=(n-o)/u,d=Math.acos(f);return a>s&&(d=2*Math.PI-d),{radius:u,angle:Y$(d),angleInRadian:d}},Z$=function(t){var r=t.startAngle,n=t.endAngle,a=Math.floor(r/360),o=Math.floor(n/360),s=Math.min(a,o);return{startAngle:r-s*360,endAngle:n-s*360}},eL=function(t,r){var n=r.startAngle,a=r.endAngle,o=Math.floor(n/360),s=Math.floor(a/360),u=Math.min(o,s);return t+u*360},o6=function(t,r){var n=t.x,a=t.y,o=J$({x:n,y:a},r),s=o.radius,u=o.angle,f=r.innerRadius,d=r.outerRadius;if(s<f||s>d)return!1;if(s===0)return!0;var m=Z$(r),h=m.startAngle,g=m.endAngle,x=u,j;if(h<=g){for(;x>g;)x-=360;for(;x<h;)x+=360;j=x>=h&&x<=g}else{for(;x>h;)x-=360;for(;x<g;)x+=360;j=x>=g&&x<=h}return j?i6(i6({},r),{},{radius:s,angle:eL(x,r)}):null};function bl(e){"@babel/helpers - typeof";return bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bl(e)}var tL=["offset"];function rL(e){return oL(e)||iL(e)||aL(e)||nL()}function nL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aL(e,t){if(e){if(typeof e=="string")return K2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K2(e,t)}}function iL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oL(e){if(Array.isArray(e))return K2(e)}function K2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function lL(e,t){if(e==null)return{};var r=sL(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function sL(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function l6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function pt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?l6(Object(r),!0).forEach(function(n){uL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function uL(e,t,r){return t=cL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cL(e){var t=fL(e,"string");return bl(t)=="symbol"?t:t+""}function fL(e,t){if(bl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(bl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wl.apply(this,arguments)}var dL=function(t){var r=t.value,n=t.formatter,a=Te(t.children)?r:t.children;return Pe(n)?n(a):a},pL=function(t,r){var n=Rr(r-t),a=Math.min(Math.abs(r-t),360);return n*a},hL=function(t,r,n){var a=t.position,o=t.viewBox,s=t.offset,u=t.className,f=o,d=f.cx,m=f.cy,h=f.innerRadius,g=f.outerRadius,x=f.startAngle,j=f.endAngle,S=f.clockWise,b=(h+g)/2,A=pL(x,j),O=A>=0?1:-1,E,N;a==="insideStart"?(E=x+O*s,N=S):a==="insideEnd"?(E=j-O*s,N=!S):a==="end"&&(E=j+O*s,N=S),N=A<=0?N:!N;var _=At(d,m,b,E),P=At(d,m,b,E+(N?1:-1)*359),T="M".concat(_.x,",").concat(_.y,`
    A`).concat(b,",").concat(b,",0,1,").concat(N?0:1,`,
    `).concat(P.x,",").concat(P.y),R=Te(t.id)?Wl("recharts-radial-line-"):t.id;return q.createElement("text",wl({},n,{dominantBaseline:"central",className:Ie("recharts-radial-bar-label",u)}),q.createElement("defs",null,q.createElement("path",{id:R,d:T})),q.createElement("textPath",{xlinkHref:"#".concat(R)},r))},mL=function(t){var r=t.viewBox,n=t.offset,a=t.position,o=r,s=o.cx,u=o.cy,f=o.innerRadius,d=o.outerRadius,m=o.startAngle,h=o.endAngle,g=(m+h)/2;if(a==="outside"){var x=At(s,u,d+n,g),j=x.x,S=x.y;return{x:j,y:S,textAnchor:j>=s?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:s,y:u,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:s,y:u,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:s,y:u,textAnchor:"middle",verticalAnchor:"end"};var b=(f+d)/2,A=At(s,u,b,g),O=A.x,E=A.y;return{x:O,y:E,textAnchor:"middle",verticalAnchor:"middle"}},yL=function(t){var r=t.viewBox,n=t.parentViewBox,a=t.offset,o=t.position,s=r,u=s.x,f=s.y,d=s.width,m=s.height,h=m>=0?1:-1,g=h*a,x=h>0?"end":"start",j=h>0?"start":"end",S=d>=0?1:-1,b=S*a,A=S>0?"end":"start",O=S>0?"start":"end";if(o==="top"){var E={x:u+d/2,y:f-h*a,textAnchor:"middle",verticalAnchor:x};return pt(pt({},E),n?{height:Math.max(f-n.y,0),width:d}:{})}if(o==="bottom"){var N={x:u+d/2,y:f+m+g,textAnchor:"middle",verticalAnchor:j};return pt(pt({},N),n?{height:Math.max(n.y+n.height-(f+m),0),width:d}:{})}if(o==="left"){var _={x:u-b,y:f+m/2,textAnchor:A,verticalAnchor:"middle"};return pt(pt({},_),n?{width:Math.max(_.x-n.x,0),height:m}:{})}if(o==="right"){var P={x:u+d+b,y:f+m/2,textAnchor:O,verticalAnchor:"middle"};return pt(pt({},P),n?{width:Math.max(n.x+n.width-P.x,0),height:m}:{})}var T=n?{width:d,height:m}:{};return o==="insideLeft"?pt({x:u+b,y:f+m/2,textAnchor:O,verticalAnchor:"middle"},T):o==="insideRight"?pt({x:u+d-b,y:f+m/2,textAnchor:A,verticalAnchor:"middle"},T):o==="insideTop"?pt({x:u+d/2,y:f+g,textAnchor:"middle",verticalAnchor:j},T):o==="insideBottom"?pt({x:u+d/2,y:f+m-g,textAnchor:"middle",verticalAnchor:x},T):o==="insideTopLeft"?pt({x:u+b,y:f+g,textAnchor:O,verticalAnchor:j},T):o==="insideTopRight"?pt({x:u+d-b,y:f+g,textAnchor:A,verticalAnchor:j},T):o==="insideBottomLeft"?pt({x:u+b,y:f+m-g,textAnchor:O,verticalAnchor:x},T):o==="insideBottomRight"?pt({x:u+d-b,y:f+m-g,textAnchor:A,verticalAnchor:x},T):Fi(o)&&(ce(o.x)||va(o.x))&&(ce(o.y)||va(o.y))?pt({x:u+Sa(o.x,d),y:f+Sa(o.y,m),textAnchor:"end",verticalAnchor:"end"},T):pt({x:u+d/2,y:f+m/2,textAnchor:"middle",verticalAnchor:"middle"},T)},vL=function(t){return"cx"in t&&ce(t.cx)};function Tt(e){var t=e.offset,r=t===void 0?5:t,n=lL(e,tL),a=pt({offset:r},n),o=a.viewBox,s=a.position,u=a.value,f=a.children,d=a.content,m=a.className,h=m===void 0?"":m,g=a.textBreakAll;if(!o||Te(u)&&Te(f)&&!D.isValidElement(d)&&!Pe(d))return null;if(D.isValidElement(d))return D.cloneElement(d,a);var x;if(Pe(d)){if(x=D.createElement(d,a),D.isValidElement(x))return x}else x=dL(a);var j=vL(o),S=Ce(a,!0);if(j&&(s==="insideStart"||s==="insideEnd"||s==="end"))return hL(a,x,S);var b=j?mL(a):yL(a);return q.createElement(Fu,wl({className:Ie("recharts-label",h)},S,b,{breakAll:g}),x)}Tt.displayName="Label";var CA=function(t){var r=t.cx,n=t.cy,a=t.angle,o=t.startAngle,s=t.endAngle,u=t.r,f=t.radius,d=t.innerRadius,m=t.outerRadius,h=t.x,g=t.y,x=t.top,j=t.left,S=t.width,b=t.height,A=t.clockWise,O=t.labelViewBox;if(O)return O;if(ce(S)&&ce(b)){if(ce(h)&&ce(g))return{x:h,y:g,width:S,height:b};if(ce(x)&&ce(j))return{x,y:j,width:S,height:b}}return ce(h)&&ce(g)?{x:h,y:g,width:0,height:0}:ce(r)&&ce(n)?{cx:r,cy:n,startAngle:o||a||0,endAngle:s||a||0,innerRadius:d||0,outerRadius:m||f||u||0,clockWise:A}:t.viewBox?t.viewBox:{}},gL=function(t,r){return t?t===!0?q.createElement(Tt,{key:"label-implicit",viewBox:r}):ht(t)?q.createElement(Tt,{key:"label-implicit",viewBox:r,value:t}):D.isValidElement(t)?t.type===Tt?D.cloneElement(t,{key:"label-implicit",viewBox:r}):q.createElement(Tt,{key:"label-implicit",content:t,viewBox:r}):Pe(t)?q.createElement(Tt,{key:"label-implicit",content:t,viewBox:r}):Fi(t)?q.createElement(Tt,wl({viewBox:r},t,{key:"label-implicit"})):null:null},xL=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&n&&!t.label)return null;var a=t.children,o=CA(t),s=gr(a,Tt).map(function(f,d){return D.cloneElement(f,{viewBox:r||o,key:"label-".concat(d)})});if(!n)return s;var u=gL(t.label,r||o);return[u].concat(rL(s))};Tt.parseViewBox=CA;Tt.renderCallByParent=xL;var E0,s6;function bL(){if(s6)return E0;s6=1;function e(t){var r=t==null?0:t.length;return r?t[r-1]:void 0}return E0=e,E0}var wL=bL();const SL=We(wL);function Sl(e){"@babel/helpers - typeof";return Sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sl(e)}var jL=["valueAccessor"],_L=["data","dataKey","clockWise","id","textBreakAll"];function AL(e){return kL(e)||PL(e)||EL(e)||OL()}function OL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EL(e,t){if(e){if(typeof e=="string")return V2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V2(e,t)}}function PL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kL(e){if(Array.isArray(e))return V2(e)}function V2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ec.apply(this,arguments)}function u6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function c6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?u6(Object(r),!0).forEach(function(n){NL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function NL(e,t,r){return t=TL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function TL(e){var t=CL(e,"string");return Sl(t)=="symbol"?t:t+""}function CL(e,t){if(Sl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Sl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function f6(e,t){if(e==null)return{};var r=DL(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function DL(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var ML=function(t){return Array.isArray(t.value)?SL(t.value):t.value};function vn(e){var t=e.valueAccessor,r=t===void 0?ML:t,n=f6(e,jL),a=n.data,o=n.dataKey,s=n.clockWise,u=n.id,f=n.textBreakAll,d=f6(n,_L);return!a||!a.length?null:q.createElement(lt,{className:"recharts-label-list"},a.map(function(m,h){var g=Te(o)?r(m,h):ir(m&&m.payload,o),x=Te(u)?{}:{id:"".concat(u,"-").concat(h)};return q.createElement(Tt,ec({},Ce(m,!0),d,x,{parentViewBox:m.parentViewBox,value:g,textBreakAll:f,viewBox:Tt.parseViewBox(Te(s)?m:c6(c6({},m),{},{clockWise:s})),key:"label-".concat(h),index:h}))}))}vn.displayName="LabelList";function RL(e,t){return e?e===!0?q.createElement(vn,{key:"labelList-implicit",data:t}):q.isValidElement(e)||Pe(e)?q.createElement(vn,{key:"labelList-implicit",data:t,content:e}):Fi(e)?q.createElement(vn,ec({data:t},e,{key:"labelList-implicit"})):null:null}function IL(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var n=e.children,a=gr(n,vn).map(function(s,u){return D.cloneElement(s,{data:t,key:"labelList-".concat(u)})});if(!r)return a;var o=RL(e.label,t);return[o].concat(AL(a))}vn.renderCallByParent=IL;function jl(e){"@babel/helpers - typeof";return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jl(e)}function G2(){return G2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G2.apply(this,arguments)}function d6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function p6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?d6(Object(r),!0).forEach(function(n){$L(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $L(e,t,r){return t=LL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function LL(e){var t=FL(e,"string");return jl(t)=="symbol"?t:t+""}function FL(e,t){if(jl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(jl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var BL=function(t,r){var n=Rr(r-t),a=Math.min(Math.abs(r-t),359.999);return n*a},vu=function(t){var r=t.cx,n=t.cy,a=t.radius,o=t.angle,s=t.sign,u=t.isExternal,f=t.cornerRadius,d=t.cornerIsExternal,m=f*(u?1:-1)+a,h=Math.asin(f/m)/Zu,g=d?o:o+s*h,x=At(r,n,m,g),j=At(r,n,a,g),S=d?o-s*h:o,b=At(r,n,m*Math.cos(h*Zu),S);return{center:x,circleTangency:j,lineTangency:b,theta:h}},DA=function(t){var r=t.cx,n=t.cy,a=t.innerRadius,o=t.outerRadius,s=t.startAngle,u=t.endAngle,f=BL(s,u),d=s+f,m=At(r,n,o,s),h=At(r,n,o,d),g="M ".concat(m.x,",").concat(m.y,`
    A `).concat(o,",").concat(o,`,0,
    `).concat(+(Math.abs(f)>180),",").concat(+(s>d),`,
    `).concat(h.x,",").concat(h.y,`
  `);if(a>0){var x=At(r,n,a,s),j=At(r,n,a,d);g+="L ".concat(j.x,",").concat(j.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(f)>180),",").concat(+(s<=d),`,
            `).concat(x.x,",").concat(x.y," Z")}else g+="L ".concat(r,",").concat(n," Z");return g},qL=function(t){var r=t.cx,n=t.cy,a=t.innerRadius,o=t.outerRadius,s=t.cornerRadius,u=t.forceCornerRadius,f=t.cornerIsExternal,d=t.startAngle,m=t.endAngle,h=Rr(m-d),g=vu({cx:r,cy:n,radius:o,angle:d,sign:h,cornerRadius:s,cornerIsExternal:f}),x=g.circleTangency,j=g.lineTangency,S=g.theta,b=vu({cx:r,cy:n,radius:o,angle:m,sign:-h,cornerRadius:s,cornerIsExternal:f}),A=b.circleTangency,O=b.lineTangency,E=b.theta,N=f?Math.abs(d-m):Math.abs(d-m)-S-E;if(N<0)return u?"M ".concat(j.x,",").concat(j.y,`
        a`).concat(s,",").concat(s,",0,0,1,").concat(s*2,`,0
        a`).concat(s,",").concat(s,",0,0,1,").concat(-s*2,`,0
      `):DA({cx:r,cy:n,innerRadius:a,outerRadius:o,startAngle:d,endAngle:m});var _="M ".concat(j.x,",").concat(j.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(x.x,",").concat(x.y,`
    A`).concat(o,",").concat(o,",0,").concat(+(N>180),",").concat(+(h<0),",").concat(A.x,",").concat(A.y,`
    A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(O.x,",").concat(O.y,`
  `);if(a>0){var P=vu({cx:r,cy:n,radius:a,angle:d,sign:h,isExternal:!0,cornerRadius:s,cornerIsExternal:f}),T=P.circleTangency,R=P.lineTangency,$=P.theta,z=vu({cx:r,cy:n,radius:a,angle:m,sign:-h,isExternal:!0,cornerRadius:s,cornerIsExternal:f}),B=z.circleTangency,M=z.lineTangency,H=z.theta,X=f?Math.abs(d-m):Math.abs(d-m)-$-H;if(X<0&&s===0)return"".concat(_,"L").concat(r,",").concat(n,"Z");_+="L".concat(M.x,",").concat(M.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(B.x,",").concat(B.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(X>180),",").concat(+(h>0),",").concat(T.x,",").concat(T.y,`
      A`).concat(s,",").concat(s,",0,0,").concat(+(h<0),",").concat(R.x,",").concat(R.y,"Z")}else _+="L".concat(r,",").concat(n,"Z");return _},zL={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},MA=function(t){var r=p6(p6({},zL),t),n=r.cx,a=r.cy,o=r.innerRadius,s=r.outerRadius,u=r.cornerRadius,f=r.forceCornerRadius,d=r.cornerIsExternal,m=r.startAngle,h=r.endAngle,g=r.className;if(s<o||m===h)return null;var x=Ie("recharts-sector",g),j=s-o,S=Sa(u,j,0,!0),b;return S>0&&Math.abs(m-h)<360?b=qL({cx:n,cy:a,innerRadius:o,outerRadius:s,cornerRadius:Math.min(S,j/2),forceCornerRadius:f,cornerIsExternal:d,startAngle:m,endAngle:h}):b=DA({cx:n,cy:a,innerRadius:o,outerRadius:s,startAngle:m,endAngle:h}),q.createElement("path",G2({},Ce(r,!0),{className:x,d:b,role:"img"}))};function _l(e){"@babel/helpers - typeof";return _l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_l(e)}function X2(){return X2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X2.apply(this,arguments)}function h6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function m6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?h6(Object(r),!0).forEach(function(n){UL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function UL(e,t,r){return t=WL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function WL(e){var t=HL(e,"string");return _l(t)=="symbol"?t:t+""}function HL(e,t){if(_l(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(_l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var y6={curveBasisClosed:g9,curveBasisOpen:x9,curveBasis:v9,curveBumpX:n9,curveBumpY:a9,curveLinearClosed:b9,curveLinear:Cc,curveMonotoneX:w9,curveMonotoneY:S9,curveNatural:j9,curveStep:_9,curveStepAfter:O9,curveStepBefore:A9},gu=function(t){return t.x===+t.x&&t.y===+t.y},zo=function(t){return t.x},Uo=function(t){return t.y},KL=function(t,r){if(Pe(t))return t;var n="curve".concat(Nc(t));return(n==="curveMonotone"||n==="curveBump")&&r?y6["".concat(n).concat(r==="vertical"?"Y":"X")]:y6[n]||Cc},VL=function(t){var r=t.type,n=r===void 0?"linear":r,a=t.points,o=a===void 0?[]:a,s=t.baseLine,u=t.layout,f=t.connectNulls,d=f===void 0?!1:f,m=KL(n,u),h=d?o.filter(function(S){return gu(S)}):o,g;if(Array.isArray(s)){var x=d?s.filter(function(S){return gu(S)}):s,j=h.map(function(S,b){return m6(m6({},S),{},{base:x[b]})});return u==="vertical"?g=cu().y(Uo).x1(zo).x0(function(S){return S.base.x}):g=cu().x(zo).y1(Uo).y0(function(S){return S.base.y}),g.defined(gu).curve(m),g(j)}return u==="vertical"&&ce(s)?g=cu().y(Uo).x1(zo).x0(s):ce(s)?g=cu().x(zo).y1(Uo).y0(s):g=Fj().x(zo).y(Uo),g.defined(gu).curve(m),g(h)},Y2=function(t){var r=t.className,n=t.points,a=t.path,o=t.pathRef;if((!n||!n.length)&&!a)return null;var s=n&&n.length?VL(t):a;return q.createElement("path",X2({},Ce(t,!1),Eu(t),{className:Ie("recharts-curve",r),d:s,ref:o}))},P0={exports:{}},k0,v6;function GL(){if(v6)return k0;v6=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return k0=e,k0}var N0,g6;function XL(){if(g6)return N0;g6=1;var e=GL();function t(){}function r(){}return r.resetWarningCache=t,N0=function(){function n(s,u,f,d,m,h){if(h!==e){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}n.isRequired=n;function a(){return n}var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:a,element:n,elementType:n,instanceOf:a,node:n,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o},N0}var x6;function YL(){return x6||(x6=1,P0.exports=XL()()),P0.exports}var QL=YL();const Fe=We(QL),{getOwnPropertyNames:JL,getOwnPropertySymbols:ZL}=Object,{hasOwnProperty:eF}=Object.prototype;function T0(e,t){return function(n,a,o){return e(n,a,o)&&t(n,a,o)}}function xu(e){return function(r,n,a){if(!r||!n||typeof r!="object"||typeof n!="object")return e(r,n,a);const{cache:o}=a,s=o.get(r),u=o.get(n);if(s&&u)return s===n&&u===r;o.set(r,n),o.set(n,r);const f=e(r,n,a);return o.delete(r),o.delete(n),f}}function tF(e){return e!=null?e[Symbol.toStringTag]:void 0}function b6(e){return JL(e).concat(ZL(e))}const rF=Object.hasOwn||((e,t)=>eF.call(e,t));function ka(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const nF="__v",aF="__o",iF="_owner",{getOwnPropertyDescriptor:w6,keys:S6}=Object;function oF(e,t){return e.byteLength===t.byteLength&&tc(new Uint8Array(e),new Uint8Array(t))}function lF(e,t,r){let n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}function sF(e,t){return e.byteLength===t.byteLength&&tc(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function uF(e,t){return ka(e.getTime(),t.getTime())}function cF(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function fF(e,t){return e===t}function j6(e,t,r){const n=e.size;if(n!==t.size)return!1;if(!n)return!0;const a=new Array(n),o=e.entries();let s,u,f=0;for(;(s=o.next())&&!s.done;){const d=t.entries();let m=!1,h=0;for(;(u=d.next())&&!u.done;){if(a[h]){h++;continue}const g=s.value,x=u.value;if(r.equals(g[0],x[0],f,h,e,t,r)&&r.equals(g[1],x[1],g[0],x[0],e,t,r)){m=a[h]=!0;break}h++}if(!m)return!1;f++}return!0}const dF=ka;function pF(e,t,r){const n=S6(e);let a=n.length;if(S6(t).length!==a)return!1;for(;a-- >0;)if(!RA(e,t,r,n[a]))return!1;return!0}function Wo(e,t,r){const n=b6(e);let a=n.length;if(b6(t).length!==a)return!1;let o,s,u;for(;a-- >0;)if(o=n[a],!RA(e,t,r,o)||(s=w6(e,o),u=w6(t,o),(s||u)&&(!s||!u||s.configurable!==u.configurable||s.enumerable!==u.enumerable||s.writable!==u.writable)))return!1;return!0}function hF(e,t){return ka(e.valueOf(),t.valueOf())}function mF(e,t){return e.source===t.source&&e.flags===t.flags}function _6(e,t,r){const n=e.size;if(n!==t.size)return!1;if(!n)return!0;const a=new Array(n),o=e.values();let s,u;for(;(s=o.next())&&!s.done;){const f=t.values();let d=!1,m=0;for(;(u=f.next())&&!u.done;){if(!a[m]&&r.equals(s.value,u.value,s.value,u.value,e,t,r)){d=a[m]=!0;break}m++}if(!d)return!1}return!0}function tc(e,t){let r=e.byteLength;if(t.byteLength!==r||e.byteOffset!==t.byteOffset)return!1;for(;r-- >0;)if(e[r]!==t[r])return!1;return!0}function yF(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function RA(e,t,r,n){return(n===iF||n===aF||n===nF)&&(e.$$typeof||t.$$typeof)?!0:rF(t,n)&&r.equals(e[n],t[n],n,n,e,t,r)}const vF="[object ArrayBuffer]",gF="[object Arguments]",xF="[object Boolean]",bF="[object DataView]",wF="[object Date]",SF="[object Error]",jF="[object Map]",_F="[object Number]",AF="[object Object]",OF="[object RegExp]",EF="[object Set]",PF="[object String]",kF={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},NF="[object URL]",TF=Object.prototype.toString;function CF({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:r,areDatesEqual:n,areErrorsEqual:a,areFunctionsEqual:o,areMapsEqual:s,areNumbersEqual:u,areObjectsEqual:f,arePrimitiveWrappersEqual:d,areRegExpsEqual:m,areSetsEqual:h,areTypedArraysEqual:g,areUrlsEqual:x,unknownTagComparators:j}){return function(b,A,O){if(b===A)return!0;if(b==null||A==null)return!1;const E=typeof b;if(E!==typeof A)return!1;if(E!=="object")return E==="number"?u(b,A,O):E==="function"?o(b,A,O):!1;const N=b.constructor;if(N!==A.constructor)return!1;if(N===Object)return f(b,A,O);if(Array.isArray(b))return t(b,A,O);if(N===Date)return n(b,A,O);if(N===RegExp)return m(b,A,O);if(N===Map)return s(b,A,O);if(N===Set)return h(b,A,O);const _=TF.call(b);if(_===wF)return n(b,A,O);if(_===OF)return m(b,A,O);if(_===jF)return s(b,A,O);if(_===EF)return h(b,A,O);if(_===AF)return typeof b.then!="function"&&typeof A.then!="function"&&f(b,A,O);if(_===NF)return x(b,A,O);if(_===SF)return a(b,A,O);if(_===gF)return f(b,A,O);if(kF[_])return g(b,A,O);if(_===vF)return e(b,A,O);if(_===bF)return r(b,A,O);if(_===xF||_===_F||_===PF)return d(b,A,O);if(j){let P=j[_];if(!P){const T=tF(b);T&&(P=j[T])}if(P)return P(b,A,O)}return!1}}function DF({circular:e,createCustomConfig:t,strict:r}){let n={areArrayBuffersEqual:oF,areArraysEqual:r?Wo:lF,areDataViewsEqual:sF,areDatesEqual:uF,areErrorsEqual:cF,areFunctionsEqual:fF,areMapsEqual:r?T0(j6,Wo):j6,areNumbersEqual:dF,areObjectsEqual:r?Wo:pF,arePrimitiveWrappersEqual:hF,areRegExpsEqual:mF,areSetsEqual:r?T0(_6,Wo):_6,areTypedArraysEqual:r?T0(tc,Wo):tc,areUrlsEqual:yF,unknownTagComparators:void 0};if(t&&(n=Object.assign({},n,t(n))),e){const a=xu(n.areArraysEqual),o=xu(n.areMapsEqual),s=xu(n.areObjectsEqual),u=xu(n.areSetsEqual);n=Object.assign({},n,{areArraysEqual:a,areMapsEqual:o,areObjectsEqual:s,areSetsEqual:u})}return n}function MF(e){return function(t,r,n,a,o,s,u){return e(t,r,u)}}function RF({circular:e,comparator:t,createState:r,equals:n,strict:a}){if(r)return function(u,f){const{cache:d=e?new WeakMap:void 0,meta:m}=r();return t(u,f,{cache:d,equals:n,meta:m,strict:a})};if(e)return function(u,f){return t(u,f,{cache:new WeakMap,equals:n,meta:void 0,strict:a})};const o={cache:void 0,equals:n,meta:void 0,strict:a};return function(u,f){return t(u,f,o)}}const IF=ea();ea({strict:!0});ea({circular:!0});ea({circular:!0,strict:!0});ea({createInternalComparator:()=>ka});ea({strict:!0,createInternalComparator:()=>ka});ea({circular:!0,createInternalComparator:()=>ka});ea({circular:!0,createInternalComparator:()=>ka,strict:!0});function ea(e={}){const{circular:t=!1,createInternalComparator:r,createState:n,strict:a=!1}=e,o=DF(e),s=CF(o),u=r?r(s):MF(s);return RF({circular:t,comparator:s,createState:n,equals:u,strict:a})}function $F(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function A6(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=-1,n=function a(o){r<0&&(r=o),o-r>t?(e(o),r=-1):$F(a)};requestAnimationFrame(n)}function Q2(e){"@babel/helpers - typeof";return Q2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q2(e)}function LF(e){return zF(e)||qF(e)||BF(e)||FF()}function FF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BF(e,t){if(e){if(typeof e=="string")return O6(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O6(e,t)}}function O6(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function qF(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zF(e){if(Array.isArray(e))return e}function UF(){var e={},t=function(){return null},r=!1,n=function a(o){if(!r){if(Array.isArray(o)){if(!o.length)return;var s=o,u=LF(s),f=u[0],d=u.slice(1);if(typeof f=="number"){A6(a.bind(null,d),f);return}a(f),A6(a.bind(null,d));return}Q2(o)==="object"&&(e=o,t(e)),typeof o=="function"&&o()}};return{stop:function(){r=!0},start:function(o){r=!1,n(o)},subscribe:function(o){return t=o,function(){t=function(){return null}}}}}function Al(e){"@babel/helpers - typeof";return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Al(e)}function E6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function P6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?E6(Object(r),!0).forEach(function(n){IA(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function IA(e,t,r){return t=WF(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function WF(e){var t=HF(e,"string");return Al(t)==="symbol"?t:String(t)}function HF(e,t){if(Al(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Al(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var KF=function(t,r){return[Object.keys(t),Object.keys(r)].reduce(function(n,a){return n.filter(function(o){return a.includes(o)})})},VF=function(t){return t},GF=function(t){return t.replace(/([A-Z])/g,function(r){return"-".concat(r.toLowerCase())})},el=function(t,r){return Object.keys(r).reduce(function(n,a){return P6(P6({},n),{},IA({},a,t(a,r[a])))},{})},k6=function(t,r,n){return t.map(function(a){return"".concat(GF(a)," ").concat(r,"ms ").concat(n)}).join(",")};function XF(e,t){return JF(e)||QF(e,t)||$A(e,t)||YF()}function YF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QF(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function JF(e){if(Array.isArray(e))return e}function ZF(e){return rB(e)||tB(e)||$A(e)||eB()}function eB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $A(e,t){if(e){if(typeof e=="string")return J2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return J2(e,t)}}function tB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rB(e){if(Array.isArray(e))return J2(e)}function J2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var rc=1e-4,LA=function(t,r){return[0,3*t,3*r-6*t,3*t-3*r+1]},FA=function(t,r){return t.map(function(n,a){return n*Math.pow(r,a)}).reduce(function(n,a){return n+a})},N6=function(t,r){return function(n){var a=LA(t,r);return FA(a,n)}},nB=function(t,r){return function(n){var a=LA(t,r),o=[].concat(ZF(a.map(function(s,u){return s*u}).slice(1)),[0]);return FA(o,n)}},T6=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var a=r[0],o=r[1],s=r[2],u=r[3];if(r.length===1)switch(r[0]){case"linear":a=0,o=0,s=1,u=1;break;case"ease":a=.25,o=.1,s=.25,u=1;break;case"ease-in":a=.42,o=0,s=1,u=1;break;case"ease-out":a=.42,o=0,s=.58,u=1;break;case"ease-in-out":a=0,o=0,s=.58,u=1;break;default:{var f=r[0].split("(");if(f[0]==="cubic-bezier"&&f[1].split(")")[0].split(",").length===4){var d=f[1].split(")")[0].split(",").map(function(b){return parseFloat(b)}),m=XF(d,4);a=m[0],o=m[1],s=m[2],u=m[3]}}}var h=N6(a,s),g=N6(o,u),x=nB(a,s),j=function(A){return A>1?1:A<0?0:A},S=function(A){for(var O=A>1?1:A,E=O,N=0;N<8;++N){var _=h(E)-O,P=x(E);if(Math.abs(_-O)<rc||P<rc)return g(E);E=j(E-_/P)}return g(E)};return S.isStepper=!1,S},aB=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.stiff,n=r===void 0?100:r,a=t.damping,o=a===void 0?8:a,s=t.dt,u=s===void 0?17:s,f=function(m,h,g){var x=-(m-h)*n,j=g*o,S=g+(x-j)*u/1e3,b=g*u/1e3+m;return Math.abs(b-h)<rc&&Math.abs(S)<rc?[h,0]:[b,S]};return f.isStepper=!0,f.dt=u,f},iB=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var a=r[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return T6(a);case"spring":return aB();default:if(a.split("(")[0]==="cubic-bezier")return T6(a)}return typeof a=="function"?a:null};function Ol(e){"@babel/helpers - typeof";return Ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ol(e)}function C6(e){return sB(e)||lB(e)||BA(e)||oB()}function oB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sB(e){if(Array.isArray(e))return ey(e)}function D6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function _t(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?D6(Object(r),!0).forEach(function(n){Z2(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Z2(e,t,r){return t=uB(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function uB(e){var t=cB(e,"string");return Ol(t)==="symbol"?t:String(t)}function cB(e,t){if(Ol(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ol(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fB(e,t){return hB(e)||pB(e,t)||BA(e,t)||dB()}function dB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BA(e,t){if(e){if(typeof e=="string")return ey(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ey(e,t)}}function ey(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function pB(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function hB(e){if(Array.isArray(e))return e}var nc=function(t,r,n){return t+(r-t)*n},ty=function(t){var r=t.from,n=t.to;return r!==n},mB=function e(t,r,n){var a=el(function(o,s){if(ty(s)){var u=t(s.from,s.to,s.velocity),f=fB(u,2),d=f[0],m=f[1];return _t(_t({},s),{},{from:d,velocity:m})}return s},r);return n<1?el(function(o,s){return ty(s)?_t(_t({},s),{},{velocity:nc(s.velocity,a[o].velocity,n),from:nc(s.from,a[o].from,n)}):s},r):e(t,a,n-1)};const yB=(function(e,t,r,n,a){var o=KF(e,t),s=o.reduce(function(b,A){return _t(_t({},b),{},Z2({},A,[e[A],t[A]]))},{}),u=o.reduce(function(b,A){return _t(_t({},b),{},Z2({},A,{from:e[A],velocity:0,to:t[A]}))},{}),f=-1,d,m,h=function(){return null},g=function(){return el(function(A,O){return O.from},u)},x=function(){return!Object.values(u).filter(ty).length},j=function(A){d||(d=A);var O=A-d,E=O/r.dt;u=mB(r,u,E),a(_t(_t(_t({},e),t),g())),d=A,x()||(f=requestAnimationFrame(h))},S=function(A){m||(m=A);var O=(A-m)/n,E=el(function(_,P){return nc.apply(void 0,C6(P).concat([r(O)]))},s);if(a(_t(_t(_t({},e),t),E)),O<1)f=requestAnimationFrame(h);else{var N=el(function(_,P){return nc.apply(void 0,C6(P).concat([r(1)]))},s);a(_t(_t(_t({},e),t),N))}};return h=r.isStepper?j:S,function(){return requestAnimationFrame(h),function(){cancelAnimationFrame(f)}}});function ji(e){"@babel/helpers - typeof";return ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ji(e)}var vB=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function gB(e,t){if(e==null)return{};var r=xB(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function xB(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function C0(e){return jB(e)||SB(e)||wB(e)||bB()}function bB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wB(e,t){if(e){if(typeof e=="string")return ry(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ry(e,t)}}function SB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jB(e){if(Array.isArray(e))return ry(e)}function ry(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Tr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?M6(Object(r),!0).forEach(function(n){Yo(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Yo(e,t,r){return t=qA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AB(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,qA(n.key),n)}}function OB(e,t,r){return t&&AB(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function qA(e){var t=EB(e,"string");return ji(t)==="symbol"?t:String(t)}function EB(e,t){if(ji(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ji(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function PB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ny(e,t)}function ny(e,t){return ny=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},ny(e,t)}function kB(e){var t=NB();return function(){var n=ac(e),a;if(t){var o=ac(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return ay(this,a)}}function ay(e,t){if(t&&(ji(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iy(e)}function iy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function NB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ac(e){return ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ac(e)}var Sn=(function(e){PB(r,e);var t=kB(r);function r(n,a){var o;_B(this,r),o=t.call(this,n,a);var s=o.props,u=s.isActive,f=s.attributeName,d=s.from,m=s.to,h=s.steps,g=s.children,x=s.duration;if(o.handleStyleChange=o.handleStyleChange.bind(iy(o)),o.changeStyle=o.changeStyle.bind(iy(o)),!u||x<=0)return o.state={style:{}},typeof g=="function"&&(o.state={style:m}),ay(o);if(h&&h.length)o.state={style:h[0].style};else if(d){if(typeof g=="function")return o.state={style:d},ay(o);o.state={style:f?Yo({},f,d):d}}else o.state={style:{}};return o}return OB(r,[{key:"componentDidMount",value:function(){var a=this.props,o=a.isActive,s=a.canBegin;this.mounted=!0,!(!o||!s)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var o=this.props,s=o.isActive,u=o.canBegin,f=o.attributeName,d=o.shouldReAnimate,m=o.to,h=o.from,g=this.state.style;if(u){if(!s){var x={style:f?Yo({},f,m):m};this.state&&g&&(f&&g[f]!==m||!f&&g!==m)&&this.setState(x);return}if(!(IF(a.to,m)&&a.canBegin&&a.isActive)){var j=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var S=j||d?h:a.to;if(this.state&&g){var b={style:f?Yo({},f,S):S};(f&&g[f]!==S||!f&&g!==S)&&this.setState(b)}this.runAnimation(Tr(Tr({},this.props),{},{from:S,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var o=this,s=a.from,u=a.to,f=a.duration,d=a.easing,m=a.begin,h=a.onAnimationEnd,g=a.onAnimationStart,x=yB(s,u,iB(d),f,this.changeStyle),j=function(){o.stopJSAnimation=x()};this.manager.start([g,m,j,f,h])}},{key:"runStepAnimation",value:function(a){var o=this,s=a.steps,u=a.begin,f=a.onAnimationStart,d=s[0],m=d.style,h=d.duration,g=h===void 0?0:h,x=function(S,b,A){if(A===0)return S;var O=b.duration,E=b.easing,N=E===void 0?"ease":E,_=b.style,P=b.properties,T=b.onAnimationEnd,R=A>0?s[A-1]:b,$=P||Object.keys(_);if(typeof N=="function"||N==="spring")return[].concat(C0(S),[o.runJSAnimation.bind(o,{from:R.style,to:_,duration:O,easing:N}),O]);var z=k6($,O,N),B=Tr(Tr(Tr({},R.style),_),{},{transition:z});return[].concat(C0(S),[B,O,T]).filter(VF)};return this.manager.start([f].concat(C0(s.reduce(x,[m,Math.max(g,u)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=UF());var o=a.begin,s=a.duration,u=a.attributeName,f=a.to,d=a.easing,m=a.onAnimationStart,h=a.onAnimationEnd,g=a.steps,x=a.children,j=this.manager;if(this.unSubscribe=j.subscribe(this.handleStyleChange),typeof d=="function"||typeof x=="function"||d==="spring"){this.runJSAnimation(a);return}if(g.length>1){this.runStepAnimation(a);return}var S=u?Yo({},u,f):f,b=k6(Object.keys(S),s,d);j.start([m,o,Tr(Tr({},S),{},{transition:b}),s,h])}},{key:"render",value:function(){var a=this.props,o=a.children;a.begin;var s=a.duration;a.attributeName,a.easing;var u=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var f=gB(a,vB),d=D.Children.count(o),m=this.state.style;if(typeof o=="function")return o(m);if(!u||d===0||s<=0)return o;var h=function(x){var j=x.props,S=j.style,b=S===void 0?{}:S,A=j.className,O=D.cloneElement(x,Tr(Tr({},f),{},{style:Tr(Tr({},b),m),className:A}));return O};return d===1?h(D.Children.only(o)):q.createElement("div",null,D.Children.map(o,function(g){return h(g)}))}}]),r})(D.PureComponent);Sn.displayName="Animate";Sn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Sn.propTypes={from:Fe.oneOfType([Fe.object,Fe.string]),to:Fe.oneOfType([Fe.object,Fe.string]),attributeName:Fe.string,duration:Fe.number,begin:Fe.number,easing:Fe.oneOfType([Fe.string,Fe.func]),steps:Fe.arrayOf(Fe.shape({duration:Fe.number.isRequired,style:Fe.object.isRequired,easing:Fe.oneOfType([Fe.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Fe.func]),properties:Fe.arrayOf("string"),onAnimationEnd:Fe.func})),children:Fe.oneOfType([Fe.node,Fe.func]),isActive:Fe.bool,canBegin:Fe.bool,onAnimationEnd:Fe.func,shouldReAnimate:Fe.bool,onAnimationStart:Fe.func,onAnimationReStart:Fe.func};function El(e){"@babel/helpers - typeof";return El=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},El(e)}function ic(){return ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ic.apply(this,arguments)}function TB(e,t){return RB(e)||MB(e,t)||DB(e,t)||CB()}function CB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DB(e,t){if(e){if(typeof e=="string")return R6(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R6(e,t)}}function R6(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function MB(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function RB(e){if(Array.isArray(e))return e}function I6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function $6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?I6(Object(r),!0).forEach(function(n){IB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function IB(e,t,r){return t=$B(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $B(e){var t=LB(e,"string");return El(t)=="symbol"?t:t+""}function LB(e,t){if(El(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(El(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L6=function(t,r,n,a,o){var s=Math.min(Math.abs(n)/2,Math.abs(a)/2),u=a>=0?1:-1,f=n>=0?1:-1,d=a>=0&&n>=0||a<0&&n<0?1:0,m;if(s>0&&o instanceof Array){for(var h=[0,0,0,0],g=0,x=4;g<x;g++)h[g]=o[g]>s?s:o[g];m="M".concat(t,",").concat(r+u*h[0]),h[0]>0&&(m+="A ".concat(h[0],",").concat(h[0],",0,0,").concat(d,",").concat(t+f*h[0],",").concat(r)),m+="L ".concat(t+n-f*h[1],",").concat(r),h[1]>0&&(m+="A ".concat(h[1],",").concat(h[1],",0,0,").concat(d,`,
        `).concat(t+n,",").concat(r+u*h[1])),m+="L ".concat(t+n,",").concat(r+a-u*h[2]),h[2]>0&&(m+="A ".concat(h[2],",").concat(h[2],",0,0,").concat(d,`,
        `).concat(t+n-f*h[2],",").concat(r+a)),m+="L ".concat(t+f*h[3],",").concat(r+a),h[3]>0&&(m+="A ".concat(h[3],",").concat(h[3],",0,0,").concat(d,`,
        `).concat(t,",").concat(r+a-u*h[3])),m+="Z"}else if(s>0&&o===+o&&o>0){var j=Math.min(s,o);m="M ".concat(t,",").concat(r+u*j,`
            A `).concat(j,",").concat(j,",0,0,").concat(d,",").concat(t+f*j,",").concat(r,`
            L `).concat(t+n-f*j,",").concat(r,`
            A `).concat(j,",").concat(j,",0,0,").concat(d,",").concat(t+n,",").concat(r+u*j,`
            L `).concat(t+n,",").concat(r+a-u*j,`
            A `).concat(j,",").concat(j,",0,0,").concat(d,",").concat(t+n-f*j,",").concat(r+a,`
            L `).concat(t+f*j,",").concat(r+a,`
            A `).concat(j,",").concat(j,",0,0,").concat(d,",").concat(t,",").concat(r+a-u*j," Z")}else m="M ".concat(t,",").concat(r," h ").concat(n," v ").concat(a," h ").concat(-n," Z");return m},FB=function(t,r){if(!t||!r)return!1;var n=t.x,a=t.y,o=r.x,s=r.y,u=r.width,f=r.height;if(Math.abs(u)>0&&Math.abs(f)>0){var d=Math.min(o,o+u),m=Math.max(o,o+u),h=Math.min(s,s+f),g=Math.max(s,s+f);return n>=d&&n<=m&&a>=h&&a<=g}return!1},BB={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},Tv=function(t){var r=$6($6({},BB),t),n=D.useRef(),a=D.useState(-1),o=TB(a,2),s=o[0],u=o[1];D.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var N=n.current.getTotalLength();N&&u(N)}catch{}},[]);var f=r.x,d=r.y,m=r.width,h=r.height,g=r.radius,x=r.className,j=r.animationEasing,S=r.animationDuration,b=r.animationBegin,A=r.isAnimationActive,O=r.isUpdateAnimationActive;if(f!==+f||d!==+d||m!==+m||h!==+h||m===0||h===0)return null;var E=Ie("recharts-rectangle",x);return O?q.createElement(Sn,{canBegin:s>0,from:{width:m,height:h,x:f,y:d},to:{width:m,height:h,x:f,y:d},duration:S,animationEasing:j,isActive:O},function(N){var _=N.width,P=N.height,T=N.x,R=N.y;return q.createElement(Sn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:S,isActive:A,easing:j},q.createElement("path",ic({},Ce(r,!0),{className:E,d:L6(T,R,_,P,g),ref:n})))}):q.createElement("path",ic({},Ce(r,!0),{className:E,d:L6(f,d,m,h,g)}))};function oy(){return oy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oy.apply(this,arguments)}var Cv=function(t){var r=t.cx,n=t.cy,a=t.r,o=t.className,s=Ie("recharts-dot",o);return r===+r&&n===+n&&a===+a?q.createElement("circle",oy({},Ce(t,!1),Eu(t),{className:s,cx:r,cy:n,r:a})):null};function Pl(e){"@babel/helpers - typeof";return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pl(e)}var qB=["x","y","top","left","width","height","className"];function ly(){return ly=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ly.apply(this,arguments)}function F6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function zB(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?F6(Object(r),!0).forEach(function(n){UB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function UB(e,t,r){return t=WB(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function WB(e){var t=HB(e,"string");return Pl(t)=="symbol"?t:t+""}function HB(e,t){if(Pl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Pl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function KB(e,t){if(e==null)return{};var r=VB(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function VB(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var GB=function(t,r,n,a,o,s){return"M".concat(t,",").concat(o,"v").concat(a,"M").concat(s,",").concat(r,"h").concat(n)},XB=function(t){var r=t.x,n=r===void 0?0:r,a=t.y,o=a===void 0?0:a,s=t.top,u=s===void 0?0:s,f=t.left,d=f===void 0?0:f,m=t.width,h=m===void 0?0:m,g=t.height,x=g===void 0?0:g,j=t.className,S=KB(t,qB),b=zB({x:n,y:o,top:u,left:d,width:h,height:x},S);return!ce(n)||!ce(o)||!ce(h)||!ce(x)||!ce(u)||!ce(d)?null:q.createElement("path",ly({},Ce(b,!0),{className:Ie("recharts-cross",j),d:GB(n,o,h,x,u,d)}))},D0,B6;function YB(){if(B6)return D0;B6=1;var e=s_(),t=e(Object.getPrototypeOf,Object);return D0=t,D0}var M0,q6;function QB(){if(q6)return M0;q6=1;var e=jn(),t=YB(),r=_n(),n="[object Object]",a=Function.prototype,o=Object.prototype,s=a.toString,u=o.hasOwnProperty,f=s.call(Object);function d(m){if(!r(m)||e(m)!=n)return!1;var h=t(m);if(h===null)return!0;var g=u.call(h,"constructor")&&h.constructor;return typeof g=="function"&&g instanceof g&&s.call(g)==f}return M0=d,M0}var JB=QB();const ZB=We(JB);var R0,z6;function eq(){if(z6)return R0;z6=1;var e=jn(),t=_n(),r="[object Boolean]";function n(a){return a===!0||a===!1||t(a)&&e(a)==r}return R0=n,R0}var tq=eq();const rq=We(tq);function kl(e){"@babel/helpers - typeof";return kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kl(e)}function oc(){return oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},oc.apply(this,arguments)}function nq(e,t){return lq(e)||oq(e,t)||iq(e,t)||aq()}function aq(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iq(e,t){if(e){if(typeof e=="string")return U6(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U6(e,t)}}function U6(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function oq(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function lq(e){if(Array.isArray(e))return e}function W6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function H6(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?W6(Object(r),!0).forEach(function(n){sq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sq(e,t,r){return t=uq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function uq(e){var t=cq(e,"string");return kl(t)=="symbol"?t:t+""}function cq(e,t){if(kl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(kl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var K6=function(t,r,n,a,o){var s=n-a,u;return u="M ".concat(t,",").concat(r),u+="L ".concat(t+n,",").concat(r),u+="L ".concat(t+n-s/2,",").concat(r+o),u+="L ".concat(t+n-s/2-a,",").concat(r+o),u+="L ".concat(t,",").concat(r," Z"),u},fq={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},dq=function(t){var r=H6(H6({},fq),t),n=D.useRef(),a=D.useState(-1),o=nq(a,2),s=o[0],u=o[1];D.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var E=n.current.getTotalLength();E&&u(E)}catch{}},[]);var f=r.x,d=r.y,m=r.upperWidth,h=r.lowerWidth,g=r.height,x=r.className,j=r.animationEasing,S=r.animationDuration,b=r.animationBegin,A=r.isUpdateAnimationActive;if(f!==+f||d!==+d||m!==+m||h!==+h||g!==+g||m===0&&h===0||g===0)return null;var O=Ie("recharts-trapezoid",x);return A?q.createElement(Sn,{canBegin:s>0,from:{upperWidth:0,lowerWidth:0,height:g,x:f,y:d},to:{upperWidth:m,lowerWidth:h,height:g,x:f,y:d},duration:S,animationEasing:j,isActive:A},function(E){var N=E.upperWidth,_=E.lowerWidth,P=E.height,T=E.x,R=E.y;return q.createElement(Sn,{canBegin:s>0,from:"0px ".concat(s===-1?1:s,"px"),to:"".concat(s,"px 0px"),attributeName:"strokeDasharray",begin:b,duration:S,easing:j},q.createElement("path",oc({},Ce(r,!0),{className:O,d:K6(T,R,N,_,P),ref:n})))}):q.createElement("g",null,q.createElement("path",oc({},Ce(r,!0),{className:O,d:K6(f,d,m,h,g)})))},pq=["option","shapeType","propTransformer","activeClassName","isActive"];function Nl(e){"@babel/helpers - typeof";return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nl(e)}function hq(e,t){if(e==null)return{};var r=mq(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function mq(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function V6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function lc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?V6(Object(r),!0).forEach(function(n){yq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function yq(e,t,r){return t=vq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function vq(e){var t=gq(e,"string");return Nl(t)=="symbol"?t:t+""}function gq(e,t){if(Nl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Nl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xq(e,t){return lc(lc({},t),e)}function bq(e,t){return e==="symbols"}function G6(e){var t=e.shapeType,r=e.elementProps;switch(t){case"rectangle":return q.createElement(Tv,r);case"trapezoid":return q.createElement(dq,r);case"sector":return q.createElement(MA,r);case"symbols":if(bq(t))return q.createElement(Xy,r);break;default:return null}}function wq(e){return D.isValidElement(e)?e.props:e}function Sq(e){var t=e.option,r=e.shapeType,n=e.propTransformer,a=n===void 0?xq:n,o=e.activeClassName,s=o===void 0?"recharts-active-shape":o,u=e.isActive,f=hq(e,pq),d;if(D.isValidElement(t))d=D.cloneElement(t,lc(lc({},f),wq(t)));else if(Pe(t))d=t(f);else if(ZB(t)&&!rq(t)){var m=a(t,f);d=q.createElement(G6,{shapeType:r,elementProps:m})}else{var h=f;d=q.createElement(G6,{shapeType:r,elementProps:h})}return u?q.createElement(lt,{className:s},d):d}function Gc(e,t){return t!=null&&"trapezoids"in e.props}function Xc(e,t){return t!=null&&"sectors"in e.props}function Tl(e,t){return t!=null&&"points"in e.props}function jq(e,t){var r,n,a=e.x===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.x)||e.x===t.x,o=e.y===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.y)||e.y===t.y;return a&&o}function _q(e,t){var r=e.endAngle===t.endAngle,n=e.startAngle===t.startAngle;return r&&n}function Aq(e,t){var r=e.x===t.x,n=e.y===t.y,a=e.z===t.z;return r&&n&&a}function Oq(e,t){var r;return Gc(e,t)?r=jq:Xc(e,t)?r=_q:Tl(e,t)&&(r=Aq),r}function Eq(e,t){var r;return Gc(e,t)?r="trapezoids":Xc(e,t)?r="sectors":Tl(e,t)&&(r="points"),r}function Pq(e,t){if(Gc(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}if(Xc(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}return Tl(e,t)?t.payload:{}}function kq(e){var t=e.activeTooltipItem,r=e.graphicalItem,n=e.itemData,a=Eq(r,t),o=Pq(r,t),s=n.filter(function(f,d){var m=Hc(o,f),h=r.props[a].filter(function(j){var S=Oq(r,t);return S(j,t)}),g=r.props[a].indexOf(h[h.length-1]),x=d===g;return m&&x}),u=n.indexOf(s[s.length-1]);return u}var I0,X6;function Nq(){if(X6)return I0;X6=1;var e=Math.ceil,t=Math.max;function r(n,a,o,s){for(var u=-1,f=t(e((a-n)/(o||1)),0),d=Array(f);f--;)d[s?f:++u]=n,n+=o;return d}return I0=r,I0}var $0,Y6;function zA(){if(Y6)return $0;Y6=1;var e=__(),t=1/0,r=17976931348623157e292;function n(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var o=a<0?-1:1;return o*r}return a===a?a:0}return $0=n,$0}var L0,Q6;function Tq(){if(Q6)return L0;Q6=1;var e=Nq(),t=Ic(),r=zA();function n(a){return function(o,s,u){return u&&typeof u!="number"&&t(o,s,u)&&(s=u=void 0),o=r(o),s===void 0?(s=o,o=0):s=r(s),u=u===void 0?o<s?1:-1:r(u),e(o,s,u,a)}}return L0=n,L0}var F0,J6;function Cq(){if(J6)return F0;J6=1;var e=Tq(),t=e();return F0=t,F0}var Dq=Cq();const sc=We(Dq);function Cl(e){"@babel/helpers - typeof";return Cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cl(e)}function Z6(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function eS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Z6(Object(r),!0).forEach(function(n){UA(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z6(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function UA(e,t,r){return t=Mq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Mq(e){var t=Rq(e,"string");return Cl(t)=="symbol"?t:t+""}function Rq(e,t){if(Cl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Cl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Iq=["Webkit","Moz","O","ms"],$q=function(t,r){var n=t.replace(/(\w)/,function(o){return o.toUpperCase()}),a=Iq.reduce(function(o,s){return eS(eS({},o),{},UA({},s+n,r))},{});return a[t]=r,a};function _i(e){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(e)}function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},uc.apply(this,arguments)}function tS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function B0(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tS(Object(r),!0).forEach(function(n){tr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Lq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,HA(n.key),n)}}function Fq(e,t,r){return t&&rS(e.prototype,t),r&&rS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bq(e,t,r){return t=cc(t),qq(e,WA()?Reflect.construct(t,r||[],cc(e).constructor):t.apply(e,r))}function qq(e,t){if(t&&(_i(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zq(e)}function zq(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function WA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(WA=function(){return!!e})()}function cc(e){return cc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},cc(e)}function Uq(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&sy(e,t)}function sy(e,t){return sy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},sy(e,t)}function tr(e,t,r){return t=HA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function HA(e){var t=Wq(e,"string");return _i(t)=="symbol"?t:t+""}function Wq(e,t){if(_i(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(_i(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Hq=function(t){var r=t.data,n=t.startIndex,a=t.endIndex,o=t.x,s=t.width,u=t.travellerWidth;if(!r||!r.length)return{};var f=r.length,d=Jo().domain(sc(0,f)).range([o,o+s-u]),m=d.domain().map(function(h){return d(h)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:d(n),endX:d(a),scale:d,scaleValues:m}},nS=function(t){return t.changedTouches&&!!t.changedTouches.length},Ai=(function(e){function t(r){var n;return Lq(this,t),n=Bq(this,t,[r]),tr(n,"handleDrag",function(a){n.leaveTimer&&(clearTimeout(n.leaveTimer),n.leaveTimer=null),n.state.isTravellerMoving?n.handleTravellerMove(a):n.state.isSlideMoving&&n.handleSlideDrag(a)}),tr(n,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&n.handleDrag(a.changedTouches[0])}),tr(n,"handleDragEnd",function(){n.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=n.props,o=a.endIndex,s=a.onDragEnd,u=a.startIndex;s==null||s({endIndex:o,startIndex:u})}),n.detachDragEndListener()}),tr(n,"handleLeaveWrapper",function(){(n.state.isTravellerMoving||n.state.isSlideMoving)&&(n.leaveTimer=window.setTimeout(n.handleDragEnd,n.props.leaveTimeOut))}),tr(n,"handleEnterSlideOrTraveller",function(){n.setState({isTextActive:!0})}),tr(n,"handleLeaveSlideOrTraveller",function(){n.setState({isTextActive:!1})}),tr(n,"handleSlideDragStart",function(a){var o=nS(a)?a.changedTouches[0]:a;n.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:o.pageX}),n.attachDragEndListener()}),n.travellerDragStartHandlers={startX:n.handleTravellerDragStart.bind(n,"startX"),endX:n.handleTravellerDragStart.bind(n,"endX")},n.state={},n}return Uq(t,e),Fq(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(n){var a=n.startX,o=n.endX,s=this.state.scaleValues,u=this.props,f=u.gap,d=u.data,m=d.length-1,h=Math.min(a,o),g=Math.max(a,o),x=t.getIndexInRange(s,h),j=t.getIndexInRange(s,g);return{startIndex:x-x%f,endIndex:j===m?m:j-j%f}}},{key:"getTextOfTick",value:function(n){var a=this.props,o=a.data,s=a.tickFormatter,u=a.dataKey,f=ir(o[n],u,n);return Pe(s)?s(f,n):f}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(n){var a=this.state,o=a.slideMoveStartX,s=a.startX,u=a.endX,f=this.props,d=f.x,m=f.width,h=f.travellerWidth,g=f.startIndex,x=f.endIndex,j=f.onChange,S=n.pageX-o;S>0?S=Math.min(S,d+m-h-u,d+m-h-s):S<0&&(S=Math.max(S,d-s,d-u));var b=this.getIndex({startX:s+S,endX:u+S});(b.startIndex!==g||b.endIndex!==x)&&j&&j(b),this.setState({startX:s+S,endX:u+S,slideMoveStartX:n.pageX})}},{key:"handleTravellerDragStart",value:function(n,a){var o=nS(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:n,brushMoveStartX:o.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(n){var a=this.state,o=a.brushMoveStartX,s=a.movingTravellerId,u=a.endX,f=a.startX,d=this.state[s],m=this.props,h=m.x,g=m.width,x=m.travellerWidth,j=m.onChange,S=m.gap,b=m.data,A={startX:this.state.startX,endX:this.state.endX},O=n.pageX-o;O>0?O=Math.min(O,h+g-x-d):O<0&&(O=Math.max(O,h-d)),A[s]=d+O;var E=this.getIndex(A),N=E.startIndex,_=E.endIndex,P=function(){var R=b.length-1;return s==="startX"&&(u>f?N%S===0:_%S===0)||u<f&&_===R||s==="endX"&&(u>f?_%S===0:N%S===0)||u>f&&_===R};this.setState(tr(tr({},s,d+O),"brushMoveStartX",n.pageX),function(){j&&P()&&j(E)})}},{key:"handleTravellerMoveKeyboard",value:function(n,a){var o=this,s=this.state,u=s.scaleValues,f=s.startX,d=s.endX,m=this.state[a],h=u.indexOf(m);if(h!==-1){var g=h+n;if(!(g===-1||g>=u.length)){var x=u[g];a==="startX"&&x>=d||a==="endX"&&x<=f||this.setState(tr({},a,x),function(){o.props.onChange(o.getIndex({startX:o.state.startX,endX:o.state.endX}))})}}}},{key:"renderBackground",value:function(){var n=this.props,a=n.x,o=n.y,s=n.width,u=n.height,f=n.fill,d=n.stroke;return q.createElement("rect",{stroke:d,fill:f,x:a,y:o,width:s,height:u})}},{key:"renderPanorama",value:function(){var n=this.props,a=n.x,o=n.y,s=n.width,u=n.height,f=n.data,d=n.children,m=n.padding,h=D.Children.only(d);return h?q.cloneElement(h,{x:a,y:o,width:s,height:u,margin:m,compact:!0,data:f}):null}},{key:"renderTravellerLayer",value:function(n,a){var o,s,u=this,f=this.props,d=f.y,m=f.travellerWidth,h=f.height,g=f.traveller,x=f.ariaLabel,j=f.data,S=f.startIndex,b=f.endIndex,A=Math.max(n,this.props.x),O=B0(B0({},Ce(this.props,!1)),{},{x:A,y:d,width:m,height:h}),E=x||"Min value: ".concat((o=j[S])===null||o===void 0?void 0:o.name,", Max value: ").concat((s=j[b])===null||s===void 0?void 0:s.name);return q.createElement(lt,{tabIndex:0,role:"slider","aria-label":E,"aria-valuenow":n,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(_){["ArrowLeft","ArrowRight"].includes(_.key)&&(_.preventDefault(),_.stopPropagation(),u.handleTravellerMoveKeyboard(_.key==="ArrowRight"?1:-1,a))},onFocus:function(){u.setState({isTravellerFocused:!0})},onBlur:function(){u.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(g,O))}},{key:"renderSlide",value:function(n,a){var o=this.props,s=o.y,u=o.height,f=o.stroke,d=o.travellerWidth,m=Math.min(n,a)+d,h=Math.max(Math.abs(a-n)-d,0);return q.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:f,fillOpacity:.2,x:m,y:s,width:h,height:u})}},{key:"renderText",value:function(){var n=this.props,a=n.startIndex,o=n.endIndex,s=n.y,u=n.height,f=n.travellerWidth,d=n.stroke,m=this.state,h=m.startX,g=m.endX,x=5,j={pointerEvents:"none",fill:d};return q.createElement(lt,{className:"recharts-brush-texts"},q.createElement(Fu,uc({textAnchor:"end",verticalAnchor:"middle",x:Math.min(h,g)-x,y:s+u/2},j),this.getTextOfTick(a)),q.createElement(Fu,uc({textAnchor:"start",verticalAnchor:"middle",x:Math.max(h,g)+f+x,y:s+u/2},j),this.getTextOfTick(o)))}},{key:"render",value:function(){var n=this.props,a=n.data,o=n.className,s=n.children,u=n.x,f=n.y,d=n.width,m=n.height,h=n.alwaysShowText,g=this.state,x=g.startX,j=g.endX,S=g.isTextActive,b=g.isSlideMoving,A=g.isTravellerMoving,O=g.isTravellerFocused;if(!a||!a.length||!ce(u)||!ce(f)||!ce(d)||!ce(m)||d<=0||m<=0)return null;var E=Ie("recharts-brush",o),N=q.Children.count(s)===1,_=$q("userSelect","none");return q.createElement(lt,{className:E,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:_},this.renderBackground(),N&&this.renderPanorama(),this.renderSlide(x,j),this.renderTravellerLayer(x,"startX"),this.renderTravellerLayer(j,"endX"),(S||b||A||O||h)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(n){var a=n.x,o=n.y,s=n.width,u=n.height,f=n.stroke,d=Math.floor(o+u/2)-1;return q.createElement(q.Fragment,null,q.createElement("rect",{x:a,y:o,width:s,height:u,fill:f,stroke:"none"}),q.createElement("line",{x1:a+1,y1:d,x2:a+s-1,y2:d,fill:"none",stroke:"#fff"}),q.createElement("line",{x1:a+1,y1:d+2,x2:a+s-1,y2:d+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(n,a){var o;return q.isValidElement(n)?o=q.cloneElement(n,a):Pe(n)?o=n(a):o=t.renderDefaultTraveller(a),o}},{key:"getDerivedStateFromProps",value:function(n,a){var o=n.data,s=n.width,u=n.x,f=n.travellerWidth,d=n.updateId,m=n.startIndex,h=n.endIndex;if(o!==a.prevData||d!==a.prevUpdateId)return B0({prevData:o,prevTravellerWidth:f,prevUpdateId:d,prevX:u,prevWidth:s},o&&o.length?Hq({data:o,width:s,x:u,travellerWidth:f,startIndex:m,endIndex:h}):{scale:null,scaleValues:null});if(a.scale&&(s!==a.prevWidth||u!==a.prevX||f!==a.prevTravellerWidth)){a.scale.range([u,u+s-f]);var g=a.scale.domain().map(function(x){return a.scale(x)});return{prevData:o,prevTravellerWidth:f,prevUpdateId:d,prevX:u,prevWidth:s,startX:a.scale(n.startIndex),endX:a.scale(n.endIndex),scaleValues:g}}return null}},{key:"getIndexInRange",value:function(n,a){for(var o=n.length,s=0,u=o-1;u-s>1;){var f=Math.floor((s+u)/2);n[f]>a?u=f:s=f}return a>=n[u]?u:s}}])})(D.PureComponent);tr(Ai,"displayName","Brush");tr(Ai,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var q0,aS;function Kq(){if(aS)return q0;aS=1;var e=rv();function t(r,n){var a;return e(r,function(o,s,u){return a=n(o,s,u),!a}),!!a}return q0=t,q0}var z0,iS;function Vq(){if(iS)return z0;iS=1;var e=t_(),t=Qn(),r=Kq(),n=Xt(),a=Ic();function o(s,u,f){var d=n(s)?e:r;return f&&a(s,u,f)&&(u=void 0),d(s,t(u,3))}return z0=o,z0}var Gq=Vq();const Xq=We(Gq);var Gr=function(t,r){var n=t.alwaysShow,a=t.ifOverflow;return n&&(a="extendDomain"),a===r},U0,oS;function Yq(){if(oS)return U0;oS=1;var e=x_();function t(r,n,a){n=="__proto__"&&e?e(r,n,{configurable:!0,enumerable:!0,value:a,writable:!0}):r[n]=a}return U0=t,U0}var W0,lS;function Qq(){if(lS)return W0;lS=1;var e=Yq(),t=v_(),r=Qn();function n(a,o){var s={};return o=r(o,3),t(a,function(u,f,d){e(s,f,o(u,f,d))}),s}return W0=n,W0}var Jq=Qq();const Zq=We(Jq);var H0,sS;function ez(){if(sS)return H0;sS=1;function e(t,r){for(var n=-1,a=t==null?0:t.length;++n<a;)if(!r(t[n],n,t))return!1;return!0}return H0=e,H0}var K0,uS;function tz(){if(uS)return K0;uS=1;var e=rv();function t(r,n){var a=!0;return e(r,function(o,s,u){return a=!!n(o,s,u),a}),a}return K0=t,K0}var V0,cS;function rz(){if(cS)return V0;cS=1;var e=ez(),t=tz(),r=Qn(),n=Xt(),a=Ic();function o(s,u,f){var d=n(s)?e:t;return f&&a(s,u,f)&&(u=void 0),d(s,r(u,3))}return V0=o,V0}var nz=rz();const KA=We(nz);var az=["x","y"];function Dl(e){"@babel/helpers - typeof";return Dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dl(e)}function uy(){return uy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},uy.apply(this,arguments)}function fS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Ho(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fS(Object(r),!0).forEach(function(n){iz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function iz(e,t,r){return t=oz(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oz(e){var t=lz(e,"string");return Dl(t)=="symbol"?t:t+""}function lz(e,t){if(Dl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Dl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function sz(e,t){if(e==null)return{};var r=uz(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function uz(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function cz(e,t){var r=e.x,n=e.y,a=sz(e,az),o="".concat(r),s=parseInt(o,10),u="".concat(n),f=parseInt(u,10),d="".concat(t.height||a.height),m=parseInt(d,10),h="".concat(t.width||a.width),g=parseInt(h,10);return Ho(Ho(Ho(Ho(Ho({},t),a),s?{x:s}:{}),f?{y:f}:{}),{},{height:m,width:g,name:t.name,radius:t.radius})}function dS(e){return q.createElement(Sq,uy({shapeType:"rectangle",propTransformer:cz,activeClassName:"recharts-active-bar"},e))}var fz=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(n,a){if(typeof t=="number")return t;var o=typeof n=="number";return o?t(n,a):(o||_a(),r)}},dz=["value","background"],VA;function Oi(e){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(e)}function pz(e,t){if(e==null)return{};var r=hz(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function hz(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function fc(){return fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fc.apply(this,arguments)}function pS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ut(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pS(Object(r),!0).forEach(function(n){Gn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function mz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,XA(n.key),n)}}function yz(e,t,r){return t&&hS(e.prototype,t),r&&hS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function vz(e,t,r){return t=dc(t),gz(e,GA()?Reflect.construct(t,r||[],dc(e).constructor):t.apply(e,r))}function gz(e,t){if(t&&(Oi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xz(e)}function xz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GA(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(GA=function(){return!!e})()}function dc(e){return dc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},dc(e)}function bz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&cy(e,t)}function cy(e,t){return cy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},cy(e,t)}function Gn(e,t,r){return t=XA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function XA(e){var t=wz(e,"string");return Oi(t)=="symbol"?t:t+""}function wz(e,t){if(Oi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Oi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Na=(function(e){function t(){var r;mz(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=vz(this,t,[].concat(a)),Gn(r,"state",{isAnimationFinished:!1}),Gn(r,"id",Wl("recharts-bar-")),Gn(r,"handleAnimationEnd",function(){var s=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),s&&s()}),Gn(r,"handleAnimationStart",function(){var s=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),s&&s()}),r}return bz(t,e),yz(t,[{key:"renderRectanglesStatically",value:function(n){var a=this,o=this.props,s=o.shape,u=o.dataKey,f=o.activeIndex,d=o.activeBar,m=Ce(this.props,!1);return n&&n.map(function(h,g){var x=g===f,j=x?d:s,S=ut(ut(ut({},m),h),{},{isActive:x,option:j,index:g,dataKey:u,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return q.createElement(lt,fc({className:"recharts-bar-rectangle"},Pu(a.props,h,g),{key:"rectangle-".concat(h==null?void 0:h.x,"-").concat(h==null?void 0:h.y,"-").concat(h==null?void 0:h.value,"-").concat(g)}),q.createElement(dS,S))})}},{key:"renderRectanglesWithAnimation",value:function(){var n=this,a=this.props,o=a.data,s=a.layout,u=a.isAnimationActive,f=a.animationBegin,d=a.animationDuration,m=a.animationEasing,h=a.animationId,g=this.state.prevData;return q.createElement(Sn,{begin:f,duration:d,isActive:u,easing:m,from:{t:0},to:{t:1},key:"bar-".concat(h),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(x){var j=x.t,S=o.map(function(b,A){var O=g&&g[A];if(O){var E=Mr(O.x,b.x),N=Mr(O.y,b.y),_=Mr(O.width,b.width),P=Mr(O.height,b.height);return ut(ut({},b),{},{x:E(j),y:N(j),width:_(j),height:P(j)})}if(s==="horizontal"){var T=Mr(0,b.height),R=T(j);return ut(ut({},b),{},{y:b.y+b.height-R,height:R})}var $=Mr(0,b.width),z=$(j);return ut(ut({},b),{},{width:z})});return q.createElement(lt,null,n.renderRectanglesStatically(S))})}},{key:"renderRectangles",value:function(){var n=this.props,a=n.data,o=n.isAnimationActive,s=this.state.prevData;return o&&a&&a.length&&(!s||!Hc(s,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var n=this,a=this.props,o=a.data,s=a.dataKey,u=a.activeIndex,f=Ce(this.props.background,!1);return o.map(function(d,m){d.value;var h=d.background,g=pz(d,dz);if(!h)return null;var x=ut(ut(ut(ut(ut({},g),{},{fill:"#eee"},h),f),Pu(n.props,d,m)),{},{onAnimationStart:n.handleAnimationStart,onAnimationEnd:n.handleAnimationEnd,dataKey:s,index:m,className:"recharts-bar-background-rectangle"});return q.createElement(dS,fc({key:"background-bar-".concat(m),option:n.props.background,isActive:m===u},x))})}},{key:"renderErrorBar",value:function(n,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.data,u=o.xAxis,f=o.yAxis,d=o.layout,m=o.children,h=gr(m,Ql);if(!h)return null;var g=d==="vertical"?s[0].height/2:s[0].width/2,x=function(b,A){var O=Array.isArray(b.value)?b.value[1]:b.value;return{x:b.x,y:b.y,value:O,errorVal:ir(b,A)}},j={clipPath:n?"url(#clipPath-".concat(a,")"):null};return q.createElement(lt,j,h.map(function(S){return q.cloneElement(S,{key:"error-bar-".concat(a,"-").concat(S.props.dataKey),data:s,xAxis:u,yAxis:f,layout:d,offset:g,dataPointFormatter:x})}))}},{key:"render",value:function(){var n=this.props,a=n.hide,o=n.data,s=n.className,u=n.xAxis,f=n.yAxis,d=n.left,m=n.top,h=n.width,g=n.height,x=n.isAnimationActive,j=n.background,S=n.id;if(a||!o||!o.length)return null;var b=this.state.isAnimationFinished,A=Ie("recharts-bar",s),O=u&&u.allowDataOverflow,E=f&&f.allowDataOverflow,N=O||E,_=Te(S)?this.id:S;return q.createElement(lt,{className:A},O||E?q.createElement("defs",null,q.createElement("clipPath",{id:"clipPath-".concat(_)},q.createElement("rect",{x:O?d:d-h/2,y:E?m:m-g/2,width:O?h:h*2,height:E?g:g*2}))):null,q.createElement(lt,{className:"recharts-bar-rectangles",clipPath:N?"url(#clipPath-".concat(_,")"):null},j?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(N,_),(!x||b)&&vn.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(n,a){return n.animationId!==a.prevAnimationId?{prevAnimationId:n.animationId,curData:n.data,prevData:a.curData}:n.data!==a.curData?{curData:n.data}:null}}])})(D.PureComponent);VA=Na;Gn(Na,"displayName","Bar");Gn(Na,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!qi.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Gn(Na,"getComposedData",function(e){var t=e.props,r=e.item,n=e.barPosition,a=e.bandSize,o=e.xAxis,s=e.yAxis,u=e.xAxisTicks,f=e.yAxisTicks,d=e.stackedData,m=e.dataStartIndex,h=e.displayedData,g=e.offset,x=I$(n,r);if(!x)return null;var j=t.layout,S=r.type.defaultProps,b=S!==void 0?ut(ut({},S),r.props):r.props,A=b.dataKey,O=b.children,E=b.minPointSize,N=j==="horizontal"?s:o,_=d?N.scale.domain():null,P=W$({numericAxis:N}),T=gr(O,iv),R=h.map(function($,z){var B,M,H,X,Y,W;d?B=$$(d[m+z],_):(B=ir($,A),Array.isArray(B)||(B=[P,B]));var Z=fz(E,VA.defaultProps.minPointSize)(B[1],z);if(j==="horizontal"){var V,ee=[s.scale(B[0]),s.scale(B[1])],J=ee[0],I=ee[1];M=e6({axis:o,ticks:u,bandSize:a,offset:x.offset,entry:$,index:z}),H=(V=I??J)!==null&&V!==void 0?V:void 0,X=x.size;var U=J-I;if(Y=Number.isNaN(U)?0:U,W={x:M,y:s.y,width:X,height:s.height},Math.abs(Z)>0&&Math.abs(Y)<Math.abs(Z)){var se=Rr(Y||Z)*(Math.abs(Z)-Math.abs(Y));H-=se,Y+=se}}else{var me=[o.scale(B[0]),o.scale(B[1])],xe=me[0],_e=me[1];if(M=xe,H=e6({axis:s,ticks:f,bandSize:a,offset:x.offset,entry:$,index:z}),X=_e-xe,Y=x.size,W={x:o.x,y:H,width:o.width,height:Y},Math.abs(Z)>0&&Math.abs(X)<Math.abs(Z)){var De=Rr(X||Z)*(Math.abs(Z)-Math.abs(X));X+=De}}return ut(ut(ut({},$),{},{x:M,y:H,width:X,height:Y,value:d?B:B[1],payload:$,background:W},T&&T[z]&&T[z].props),{},{tooltipPayload:[TA(r,$)],tooltipPosition:{x:M+X/2,y:H+Y/2}})});return ut({data:R,layout:j},g)});function Ml(e){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ml(e)}function Sz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,YA(n.key),n)}}function jz(e,t,r){return t&&mS(e.prototype,t),r&&mS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function yS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Cr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yS(Object(r),!0).forEach(function(n){Yc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):yS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Yc(e,t,r){return t=YA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function YA(e){var t=_z(e,"string");return Ml(t)=="symbol"?t:t+""}function _z(e,t){if(Ml(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ml(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var QA=function(t,r,n,a,o){var s=t.width,u=t.height,f=t.layout,d=t.children,m=Object.keys(r),h={left:n.left,leftMirror:n.left,right:s-n.right,rightMirror:s-n.right,top:n.top,topMirror:n.top,bottom:u-n.bottom,bottomMirror:u-n.bottom},g=!!rr(d,Na);return m.reduce(function(x,j){var S=r[j],b=S.orientation,A=S.domain,O=S.padding,E=O===void 0?{}:O,N=S.mirror,_=S.reversed,P="".concat(b).concat(N?"Mirror":""),T,R,$,z,B;if(S.type==="number"&&(S.padding==="gap"||S.padding==="no-gap")){var M=A[1]-A[0],H=1/0,X=S.categoricalDomain.sort();if(X.forEach(function(me,xe){xe>0&&(H=Math.min((me||0)-(X[xe-1]||0),H))}),Number.isFinite(H)){var Y=H/M,W=S.layout==="vertical"?n.height:n.width;if(S.padding==="gap"&&(T=Y*W/2),S.padding==="no-gap"){var Z=Sa(t.barCategoryGap,Y*W),V=Y*W/2;T=V-Z-(V-Z)/W*Z}}}a==="xAxis"?R=[n.left+(E.left||0)+(T||0),n.left+n.width-(E.right||0)-(T||0)]:a==="yAxis"?R=f==="horizontal"?[n.top+n.height-(E.bottom||0),n.top+(E.top||0)]:[n.top+(E.top||0)+(T||0),n.top+n.height-(E.bottom||0)-(T||0)]:R=S.range,_&&(R=[R[1],R[0]]);var ee=M$(S,o,g),J=ee.scale,I=ee.realScaleType;J.domain(A).range(R),R$(J);var U=U$(J,Cr(Cr({},S),{},{realScaleType:I}));a==="xAxis"?(B=b==="top"&&!N||b==="bottom"&&N,$=n.left,z=h[P]-B*S.height):a==="yAxis"&&(B=b==="left"&&!N||b==="right"&&N,$=h[P]-B*S.width,z=n.top);var se=Cr(Cr(Cr({},S),U),{},{realScaleType:I,x:$,y:z,scale:J,width:a==="xAxis"?n.width:S.width,height:a==="yAxis"?n.height:S.height});return se.bandSize=Ju(se,U),!S.hide&&a==="xAxis"?h[P]+=(B?-1:1)*se.height:S.hide||(h[P]+=(B?-1:1)*se.width),Cr(Cr({},x),{},Yc({},j,se))},{})},JA=function(t,r){var n=t.x,a=t.y,o=r.x,s=r.y;return{x:Math.min(n,o),y:Math.min(a,s),width:Math.abs(o-n),height:Math.abs(s-a)}},Az=function(t){var r=t.x1,n=t.y1,a=t.x2,o=t.y2;return JA({x:r,y:n},{x:a,y:o})},ZA=(function(){function e(t){Sz(this,e),this.scale=t}return jz(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.bandAware,o=n.position;if(r!==void 0){if(o)switch(o){case"start":return this.scale(r);case"middle":{var s=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+s}case"end":{var u=this.bandwidth?this.bandwidth():0;return this.scale(r)+u}default:return this.scale(r)}if(a){var f=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+f}return this.scale(r)}}},{key:"isInRange",value:function(r){var n=this.range(),a=n[0],o=n[n.length-1];return a<=o?r>=a&&r<=o:r>=o&&r<=a}}],[{key:"create",value:function(r){return new e(r)}}])})();Yc(ZA,"EPS",1e-4);var Dv=function(t){var r=Object.keys(t).reduce(function(n,a){return Cr(Cr({},n),{},Yc({},a,ZA.create(t[a])))},{});return Cr(Cr({},r),{},{apply:function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=o.bandAware,u=o.position;return Zq(a,function(f,d){return r[d].apply(f,{bandAware:s,position:u})})},isInRange:function(a){return KA(a,function(o,s){return r[s].isInRange(o)})}})};function Oz(e){return(e%180+180)%180}var Ez=function(t){var r=t.width,n=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=Oz(a),s=o*Math.PI/180,u=Math.atan(n/r),f=s>u&&s<Math.PI-u?n/Math.sin(s):r/Math.cos(s);return Math.abs(f)},G0,vS;function Pz(){if(vS)return G0;vS=1;var e=Qn(),t=Hl(),r=Mc();function n(a){return function(o,s,u){var f=Object(o);if(!t(o)){var d=e(s,3);o=r(o),s=function(h){return d(f[h],h,f)}}var m=a(o,s,u);return m>-1?f[d?o[m]:m]:void 0}}return G0=n,G0}var X0,gS;function kz(){if(gS)return X0;gS=1;var e=zA();function t(r){var n=e(r),a=n%1;return n===n?a?n-a:n:0}return X0=t,X0}var Y0,xS;function Nz(){if(xS)return Y0;xS=1;var e=d_(),t=Qn(),r=kz(),n=Math.max;function a(o,s,u){var f=o==null?0:o.length;if(!f)return-1;var d=u==null?0:r(u);return d<0&&(d=n(f+d,0)),e(o,t(s,3),d)}return Y0=a,Y0}var Q0,bS;function Tz(){if(bS)return Q0;bS=1;var e=Pz(),t=Nz(),r=e(t);return Q0=r,Q0}var Cz=Tz();const Dz=We(Cz);var Mz=Pj();const Rz=We(Mz);var Iz=Rz(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),Mv=D.createContext(void 0),Rv=D.createContext(void 0),eO=D.createContext(void 0),tO=D.createContext({}),rO=D.createContext(void 0),nO=D.createContext(0),aO=D.createContext(0),wS=function(t){var r=t.state,n=r.xAxisMap,a=r.yAxisMap,o=r.offset,s=t.clipPathId,u=t.children,f=t.width,d=t.height,m=Iz(o);return q.createElement(Mv.Provider,{value:n},q.createElement(Rv.Provider,{value:a},q.createElement(tO.Provider,{value:o},q.createElement(eO.Provider,{value:m},q.createElement(rO.Provider,{value:s},q.createElement(nO.Provider,{value:d},q.createElement(aO.Provider,{value:f},u)))))))},$z=function(){return D.useContext(rO)},iO=function(t){var r=D.useContext(Mv);r==null&&_a();var n=r[t];return n==null&&_a(),n},Lz=function(){var t=D.useContext(Mv);return Vn(t)},Fz=function(){var t=D.useContext(Rv),r=Dz(t,function(n){return KA(n.domain,Number.isFinite)});return r||Vn(t)},oO=function(t){var r=D.useContext(Rv);r==null&&_a();var n=r[t];return n==null&&_a(),n},Bz=function(){var t=D.useContext(eO);return t},qz=function(){return D.useContext(tO)},Iv=function(){return D.useContext(aO)},$v=function(){return D.useContext(nO)};function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(e)}function zz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Uz(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,sO(n.key),n)}}function Wz(e,t,r){return t&&Uz(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Hz(e,t,r){return t=pc(t),Kz(e,lO()?Reflect.construct(t,r||[],pc(e).constructor):t.apply(e,r))}function Kz(e,t){if(t&&(Ei(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vz(e)}function Vz(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lO=function(){return!!e})()}function pc(e){return pc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},pc(e)}function Gz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fy(e,t)}function fy(e,t){return fy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},fy(e,t)}function SS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function jS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?SS(Object(r),!0).forEach(function(n){Lv(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):SS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Lv(e,t,r){return t=sO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sO(e){var t=Xz(e,"string");return Ei(t)=="symbol"?t:t+""}function Xz(e,t){if(Ei(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ei(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Yz(e,t){return eU(e)||Zz(e,t)||Jz(e,t)||Qz()}function Qz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jz(e,t){if(e){if(typeof e=="string")return _S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _S(e,t)}}function _S(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Zz(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function eU(e){if(Array.isArray(e))return e}function dy(){return dy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dy.apply(this,arguments)}var tU=function(t,r){var n;return q.isValidElement(t)?n=q.cloneElement(t,r):Pe(t)?n=t(r):n=q.createElement("line",dy({},r,{className:"recharts-reference-line-line"})),n},rU=function(t,r,n,a,o,s,u,f,d){var m=o.x,h=o.y,g=o.width,x=o.height;if(n){var j=d.y,S=t.y.apply(j,{position:s});if(Gr(d,"discard")&&!t.y.isInRange(S))return null;var b=[{x:m+g,y:S},{x:m,y:S}];return f==="left"?b.reverse():b}if(r){var A=d.x,O=t.x.apply(A,{position:s});if(Gr(d,"discard")&&!t.x.isInRange(O))return null;var E=[{x:O,y:h+x},{x:O,y:h}];return u==="top"?E.reverse():E}if(a){var N=d.segment,_=N.map(function(P){return t.apply(P,{position:s})});return Gr(d,"discard")&&Xq(_,function(P){return!t.isInRange(P)})?null:_}return null};function nU(e){var t=e.x,r=e.y,n=e.segment,a=e.xAxisId,o=e.yAxisId,s=e.shape,u=e.className,f=e.alwaysShow,d=$z(),m=iO(a),h=oO(o),g=Bz();if(!d||!g)return null;mn(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var x=Dv({x:m.scale,y:h.scale}),j=ht(t),S=ht(r),b=n&&n.length===2,A=rU(x,j,S,b,g,e.position,m.orientation,h.orientation,e);if(!A)return null;var O=Yz(A,2),E=O[0],N=E.x,_=E.y,P=O[1],T=P.x,R=P.y,$=Gr(e,"hidden")?"url(#".concat(d,")"):void 0,z=jS(jS({clipPath:$},Ce(e,!0)),{},{x1:N,y1:_,x2:T,y2:R});return q.createElement(lt,{className:Ie("recharts-reference-line",u)},tU(s,z),Tt.renderCallByParent(e,Az({x1:N,y1:_,x2:T,y2:R})))}var Qc=(function(e){function t(){return zz(this,t),Hz(this,t,arguments)}return Gz(t,e),Wz(t,[{key:"render",value:function(){return q.createElement(nU,this.props)}}])})(q.Component);Lv(Qc,"displayName","ReferenceLine");Lv(Qc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function py(){return py=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},py.apply(this,arguments)}function Pi(e){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}function AS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function OS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?AS(Object(r),!0).forEach(function(n){Jc(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):AS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function aU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iU(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,cO(n.key),n)}}function oU(e,t,r){return t&&iU(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function lU(e,t,r){return t=hc(t),sU(e,uO()?Reflect.construct(t,r||[],hc(e).constructor):t.apply(e,r))}function sU(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uU(e)}function uU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(uO=function(){return!!e})()}function hc(e){return hc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},hc(e)}function cU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hy(e,t)}function hy(e,t){return hy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},hy(e,t)}function Jc(e,t,r){return t=cO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cO(e){var t=fU(e,"string");return Pi(t)=="symbol"?t:t+""}function fU(e,t){if(Pi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Pi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var dU=function(t){var r=t.x,n=t.y,a=t.xAxis,o=t.yAxis,s=Dv({x:a.scale,y:o.scale}),u=s.apply({x:r,y:n},{bandAware:!0});return Gr(t,"discard")&&!s.isInRange(u)?null:u},Zc=(function(e){function t(){return aU(this,t),lU(this,t,arguments)}return cU(t,e),oU(t,[{key:"render",value:function(){var n=this.props,a=n.x,o=n.y,s=n.r,u=n.alwaysShow,f=n.clipPathId,d=ht(a),m=ht(o);if(mn(u===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!d||!m)return null;var h=dU(this.props);if(!h)return null;var g=h.x,x=h.y,j=this.props,S=j.shape,b=j.className,A=Gr(this.props,"hidden")?"url(#".concat(f,")"):void 0,O=OS(OS({clipPath:A},Ce(this.props,!0)),{},{cx:g,cy:x});return q.createElement(lt,{className:Ie("recharts-reference-dot",b)},t.renderDot(S,O),Tt.renderCallByParent(this.props,{x:g-s,y:x-s,width:2*s,height:2*s}))}}])})(q.Component);Jc(Zc,"displayName","ReferenceDot");Jc(Zc,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});Jc(Zc,"renderDot",function(e,t){var r;return q.isValidElement(e)?r=q.cloneElement(e,t):Pe(e)?r=e(t):r=q.createElement(Cv,py({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),r});function my(){return my=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},my.apply(this,arguments)}function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function ES(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function PS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ES(Object(r),!0).forEach(function(n){ef(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ES(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function pU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hU(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,dO(n.key),n)}}function mU(e,t,r){return t&&hU(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function yU(e,t,r){return t=mc(t),vU(e,fO()?Reflect.construct(t,r||[],mc(e).constructor):t.apply(e,r))}function vU(e,t){if(t&&(ki(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gU(e)}function gU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fO=function(){return!!e})()}function mc(e){return mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},mc(e)}function xU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&yy(e,t)}function yy(e,t){return yy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},yy(e,t)}function ef(e,t,r){return t=dO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dO(e){var t=bU(e,"string");return ki(t)=="symbol"?t:t+""}function bU(e,t){if(ki(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ki(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var wU=function(t,r,n,a,o){var s=o.x1,u=o.x2,f=o.y1,d=o.y2,m=o.xAxis,h=o.yAxis;if(!m||!h)return null;var g=Dv({x:m.scale,y:h.scale}),x={x:t?g.x.apply(s,{position:"start"}):g.x.rangeMin,y:n?g.y.apply(f,{position:"start"}):g.y.rangeMin},j={x:r?g.x.apply(u,{position:"end"}):g.x.rangeMax,y:a?g.y.apply(d,{position:"end"}):g.y.rangeMax};return Gr(o,"discard")&&(!g.isInRange(x)||!g.isInRange(j))?null:JA(x,j)},tf=(function(e){function t(){return pU(this,t),yU(this,t,arguments)}return xU(t,e),mU(t,[{key:"render",value:function(){var n=this.props,a=n.x1,o=n.x2,s=n.y1,u=n.y2,f=n.className,d=n.alwaysShow,m=n.clipPathId;mn(d===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var h=ht(a),g=ht(o),x=ht(s),j=ht(u),S=this.props.shape;if(!h&&!g&&!x&&!j&&!S)return null;var b=wU(h,g,x,j,this.props);if(!b&&!S)return null;var A=Gr(this.props,"hidden")?"url(#".concat(m,")"):void 0;return q.createElement(lt,{className:Ie("recharts-reference-area",f)},t.renderRect(S,PS(PS({clipPath:A},Ce(this.props,!0)),b)),Tt.renderCallByParent(this.props,b))}}])})(q.Component);ef(tf,"displayName","ReferenceArea");ef(tf,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});ef(tf,"renderRect",function(e,t){var r;return q.isValidElement(e)?r=q.cloneElement(e,t):Pe(e)?r=e(t):r=q.createElement(Tv,my({},t,{className:"recharts-reference-area-rect"})),r});function pO(e,t,r){if(t<1)return[];if(t===1&&r===void 0)return e;for(var n=[],a=0;a<e.length;a+=t)n.push(e[a]);return n}function SU(e,t,r){var n={width:e.width+t.width,height:e.height+t.height};return Ez(n,r)}function jU(e,t,r){var n=r==="width",a=e.x,o=e.y,s=e.width,u=e.height;return t===1?{start:n?a:o,end:n?a+s:o+u}:{start:n?a+s:o+u,end:n?a:o}}function yc(e,t,r,n,a){if(e*t<e*n||e*t>e*a)return!1;var o=r();return e*(t-e*o/2-n)>=0&&e*(t+e*o/2-a)<=0}function _U(e,t){return pO(e,t+1)}function AU(e,t,r,n,a){for(var o=(n||[]).slice(),s=t.start,u=t.end,f=0,d=1,m=s,h=function(){var j=n==null?void 0:n[f];if(j===void 0)return{v:pO(n,d)};var S=f,b,A=function(){return b===void 0&&(b=r(j,S)),b},O=j.coordinate,E=f===0||yc(e,O,A,m,u);E||(f=0,m=s,d+=1),E&&(m=O+e*(A()/2+a),f+=d)},g;d<=o.length;)if(g=h(),g)return g.v;return[]}function Rl(e){"@babel/helpers - typeof";return Rl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rl(e)}function kS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Nt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?kS(Object(r),!0).forEach(function(n){OU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):kS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function OU(e,t,r){return t=EU(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function EU(e){var t=PU(e,"string");return Rl(t)=="symbol"?t:t+""}function PU(e,t){if(Rl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Rl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kU(e,t,r,n,a){for(var o=(n||[]).slice(),s=o.length,u=t.start,f=t.end,d=function(g){var x=o[g],j,S=function(){return j===void 0&&(j=r(x,g)),j};if(g===s-1){var b=e*(x.coordinate+e*S()/2-f);o[g]=x=Nt(Nt({},x),{},{tickCoord:b>0?x.coordinate-b*e:x.coordinate})}else o[g]=x=Nt(Nt({},x),{},{tickCoord:x.coordinate});var A=yc(e,x.tickCoord,S,u,f);A&&(f=x.tickCoord-e*(S()/2+a),o[g]=Nt(Nt({},x),{},{isShow:!0}))},m=s-1;m>=0;m--)d(m);return o}function NU(e,t,r,n,a,o){var s=(n||[]).slice(),u=s.length,f=t.start,d=t.end;if(o){var m=n[u-1],h=r(m,u-1),g=e*(m.coordinate+e*h/2-d);s[u-1]=m=Nt(Nt({},m),{},{tickCoord:g>0?m.coordinate-g*e:m.coordinate});var x=yc(e,m.tickCoord,function(){return h},f,d);x&&(d=m.tickCoord-e*(h/2+a),s[u-1]=Nt(Nt({},m),{},{isShow:!0}))}for(var j=o?u-1:u,S=function(O){var E=s[O],N,_=function(){return N===void 0&&(N=r(E,O)),N};if(O===0){var P=e*(E.coordinate-e*_()/2-f);s[O]=E=Nt(Nt({},E),{},{tickCoord:P<0?E.coordinate-P*e:E.coordinate})}else s[O]=E=Nt(Nt({},E),{},{tickCoord:E.coordinate});var T=yc(e,E.tickCoord,_,f,d);T&&(f=E.tickCoord+e*(_()/2+a),s[O]=Nt(Nt({},E),{},{isShow:!0}))},b=0;b<j;b++)S(b);return s}function Fv(e,t,r){var n=e.tick,a=e.ticks,o=e.viewBox,s=e.minTickGap,u=e.orientation,f=e.interval,d=e.tickFormatter,m=e.unit,h=e.angle;if(!a||!a.length||!n)return[];if(ce(f)||qi.isSsr)return _U(a,typeof f=="number"&&ce(f)?f:0);var g=[],x=u==="top"||u==="bottom"?"width":"height",j=m&&x==="width"?Qo(m,{fontSize:t,letterSpacing:r}):{width:0,height:0},S=function(E,N){var _=Pe(d)?d(E.value,N):E.value;return x==="width"?SU(Qo(_,{fontSize:t,letterSpacing:r}),j,h):Qo(_,{fontSize:t,letterSpacing:r})[x]},b=a.length>=2?Rr(a[1].coordinate-a[0].coordinate):1,A=jU(o,b,x);return f==="equidistantPreserveStart"?AU(b,A,S,a,s):(f==="preserveStart"||f==="preserveStartEnd"?g=NU(b,A,S,a,s,f==="preserveStartEnd"):g=kU(b,A,S,a,s),g.filter(function(O){return O.isShow}))}var TU=["viewBox"],CU=["viewBox"],DU=["ticks"];function Ni(e){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ni(e)}function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},si.apply(this,arguments)}function NS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function It(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?NS(Object(r),!0).forEach(function(n){Bv(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):NS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function J0(e,t){if(e==null)return{};var r=MU(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function MU(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function RU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function TS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,mO(n.key),n)}}function IU(e,t,r){return t&&TS(e.prototype,t),r&&TS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function $U(e,t,r){return t=vc(t),LU(e,hO()?Reflect.construct(t,r||[],vc(e).constructor):t.apply(e,r))}function LU(e,t){if(t&&(Ni(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return FU(e)}function FU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(hO=function(){return!!e})()}function vc(e){return vc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},vc(e)}function BU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vy(e,t)}function vy(e,t){return vy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},vy(e,t)}function Bv(e,t,r){return t=mO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mO(e){var t=qU(e,"string");return Ni(t)=="symbol"?t:t+""}function qU(e,t){if(Ni(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ni(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Hi=(function(e){function t(r){var n;return RU(this,t),n=$U(this,t,[r]),n.state={fontSize:"",letterSpacing:""},n}return BU(t,e),IU(t,[{key:"shouldComponentUpdate",value:function(n,a){var o=n.viewBox,s=J0(n,TU),u=this.props,f=u.viewBox,d=J0(u,CU);return!ci(o,f)||!ci(s,d)||!ci(a,this.state)}},{key:"componentDidMount",value:function(){var n=this.layerReference;if(n){var a=n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(n){var a=this.props,o=a.x,s=a.y,u=a.width,f=a.height,d=a.orientation,m=a.tickSize,h=a.mirror,g=a.tickMargin,x,j,S,b,A,O,E=h?-1:1,N=n.tickSize||m,_=ce(n.tickCoord)?n.tickCoord:n.coordinate;switch(d){case"top":x=j=n.coordinate,b=s+ +!h*f,S=b-E*N,O=S-E*g,A=_;break;case"left":S=b=n.coordinate,j=o+ +!h*u,x=j-E*N,A=x-E*g,O=_;break;case"right":S=b=n.coordinate,j=o+ +h*u,x=j+E*N,A=x+E*g,O=_;break;default:x=j=n.coordinate,b=s+ +h*f,S=b+E*N,O=S+E*g,A=_;break}return{line:{x1:x,y1:S,x2:j,y2:b},tick:{x:A,y:O}}}},{key:"getTickTextAnchor",value:function(){var n=this.props,a=n.orientation,o=n.mirror,s;switch(a){case"left":s=o?"start":"end";break;case"right":s=o?"end":"start";break;default:s="middle";break}return s}},{key:"getTickVerticalAnchor",value:function(){var n=this.props,a=n.orientation,o=n.mirror,s="end";switch(a){case"left":case"right":s="middle";break;case"top":s=o?"start":"end";break;default:s=o?"end":"start";break}return s}},{key:"renderAxisLine",value:function(){var n=this.props,a=n.x,o=n.y,s=n.width,u=n.height,f=n.orientation,d=n.mirror,m=n.axisLine,h=It(It(It({},Ce(this.props,!1)),Ce(m,!1)),{},{fill:"none"});if(f==="top"||f==="bottom"){var g=+(f==="top"&&!d||f==="bottom"&&d);h=It(It({},h),{},{x1:a,y1:o+g*u,x2:a+s,y2:o+g*u})}else{var x=+(f==="left"&&!d||f==="right"&&d);h=It(It({},h),{},{x1:a+x*s,y1:o,x2:a+x*s,y2:o+u})}return q.createElement("line",si({},h,{className:Ie("recharts-cartesian-axis-line",vr(m,"className"))}))}},{key:"renderTicks",value:function(n,a,o){var s=this,u=this.props,f=u.tickLine,d=u.stroke,m=u.tick,h=u.tickFormatter,g=u.unit,x=Fv(It(It({},this.props),{},{ticks:n}),a,o),j=this.getTickTextAnchor(),S=this.getTickVerticalAnchor(),b=Ce(this.props,!1),A=Ce(m,!1),O=It(It({},b),{},{fill:"none"},Ce(f,!1)),E=x.map(function(N,_){var P=s.getTickLineCoord(N),T=P.line,R=P.tick,$=It(It(It(It({textAnchor:j,verticalAnchor:S},b),{},{stroke:"none",fill:d},A),R),{},{index:_,payload:N,visibleTicksCount:x.length,tickFormatter:h});return q.createElement(lt,si({className:"recharts-cartesian-axis-tick",key:"tick-".concat(N.value,"-").concat(N.coordinate,"-").concat(N.tickCoord)},Pu(s.props,N,_)),f&&q.createElement("line",si({},O,T,{className:Ie("recharts-cartesian-axis-tick-line",vr(f,"className"))})),m&&t.renderTickItem(m,$,"".concat(Pe(h)?h(N.value,_):N.value).concat(g||"")))});return q.createElement("g",{className:"recharts-cartesian-axis-ticks"},E)}},{key:"render",value:function(){var n=this,a=this.props,o=a.axisLine,s=a.width,u=a.height,f=a.ticksGenerator,d=a.className,m=a.hide;if(m)return null;var h=this.props,g=h.ticks,x=J0(h,DU),j=g;return Pe(f)&&(j=g&&g.length>0?f(this.props):f(x)),s<=0||u<=0||!j||!j.length?null:q.createElement(lt,{className:Ie("recharts-cartesian-axis",d),ref:function(b){n.layerReference=b}},o&&this.renderAxisLine(),this.renderTicks(j,this.state.fontSize,this.state.letterSpacing),Tt.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(n,a,o){var s;return q.isValidElement(n)?s=q.cloneElement(n,a):Pe(n)?s=n(a):s=q.createElement(Fu,si({},a,{className:"recharts-cartesian-axis-tick-value"}),o),s}}])})(D.Component);Bv(Hi,"displayName","CartesianAxis");Bv(Hi,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var zU=["x1","y1","x2","y2","key"],UU=["offset"];function Aa(e){"@babel/helpers - typeof";return Aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Aa(e)}function CS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Ct(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?CS(Object(r),!0).forEach(function(n){WU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):CS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function WU(e,t,r){return t=HU(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function HU(e){var t=KU(e,"string");return Aa(t)=="symbol"?t:t+""}function KU(e,t){if(Aa(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Aa(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xa.apply(this,arguments)}function DS(e,t){if(e==null)return{};var r=VU(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function VU(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var GU=function(t){var r=t.fill;if(!r||r==="none")return null;var n=t.fillOpacity,a=t.x,o=t.y,s=t.width,u=t.height,f=t.ry;return q.createElement("rect",{x:a,y:o,ry:f,width:s,height:u,stroke:"none",fill:r,fillOpacity:n,className:"recharts-cartesian-grid-bg"})};function yO(e,t){var r;if(q.isValidElement(e))r=q.cloneElement(e,t);else if(Pe(e))r=e(t);else{var n=t.x1,a=t.y1,o=t.x2,s=t.y2,u=t.key,f=DS(t,zU),d=Ce(f,!1);d.offset;var m=DS(d,UU);r=q.createElement("line",xa({},m,{x1:n,y1:a,x2:o,y2:s,fill:"none",key:u}))}return r}function XU(e){var t=e.x,r=e.width,n=e.horizontal,a=n===void 0?!0:n,o=e.horizontalPoints;if(!a||!o||!o.length)return null;var s=o.map(function(u,f){var d=Ct(Ct({},e),{},{x1:t,y1:u,x2:t+r,y2:u,key:"line-".concat(f),index:f});return yO(a,d)});return q.createElement("g",{className:"recharts-cartesian-grid-horizontal"},s)}function YU(e){var t=e.y,r=e.height,n=e.vertical,a=n===void 0?!0:n,o=e.verticalPoints;if(!a||!o||!o.length)return null;var s=o.map(function(u,f){var d=Ct(Ct({},e),{},{x1:u,y1:t,x2:u,y2:t+r,key:"line-".concat(f),index:f});return yO(a,d)});return q.createElement("g",{className:"recharts-cartesian-grid-vertical"},s)}function QU(e){var t=e.horizontalFill,r=e.fillOpacity,n=e.x,a=e.y,o=e.width,s=e.height,u=e.horizontalPoints,f=e.horizontal,d=f===void 0?!0:f;if(!d||!t||!t.length)return null;var m=u.map(function(g){return Math.round(g+a-a)}).sort(function(g,x){return g-x});a!==m[0]&&m.unshift(0);var h=m.map(function(g,x){var j=!m[x+1],S=j?a+s-g:m[x+1]-g;if(S<=0)return null;var b=x%t.length;return q.createElement("rect",{key:"react-".concat(x),y:g,x:n,height:S,width:o,stroke:"none",fill:t[b],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return q.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},h)}function JU(e){var t=e.vertical,r=t===void 0?!0:t,n=e.verticalFill,a=e.fillOpacity,o=e.x,s=e.y,u=e.width,f=e.height,d=e.verticalPoints;if(!r||!n||!n.length)return null;var m=d.map(function(g){return Math.round(g+o-o)}).sort(function(g,x){return g-x});o!==m[0]&&m.unshift(0);var h=m.map(function(g,x){var j=!m[x+1],S=j?o+u-g:m[x+1]-g;if(S<=0)return null;var b=x%n.length;return q.createElement("rect",{key:"react-".concat(x),x:g,y:s,width:S,height:f,stroke:"none",fill:n[b],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return q.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},h)}var ZU=function(t,r){var n=t.xAxis,a=t.width,o=t.height,s=t.offset;return kA(Fv(Ct(Ct(Ct({},Hi.defaultProps),n),{},{ticks:dn(n,!0),viewBox:{x:0,y:0,width:a,height:o}})),s.left,s.left+s.width,r)},eW=function(t,r){var n=t.yAxis,a=t.width,o=t.height,s=t.offset;return kA(Fv(Ct(Ct(Ct({},Hi.defaultProps),n),{},{ticks:dn(n,!0),viewBox:{x:0,y:0,width:a,height:o}})),s.top,s.top+s.height,r)},ai={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function vO(e){var t,r,n,a,o,s,u=Iv(),f=$v(),d=qz(),m=Ct(Ct({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ai.stroke,fill:(r=e.fill)!==null&&r!==void 0?r:ai.fill,horizontal:(n=e.horizontal)!==null&&n!==void 0?n:ai.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ai.horizontalFill,vertical:(o=e.vertical)!==null&&o!==void 0?o:ai.vertical,verticalFill:(s=e.verticalFill)!==null&&s!==void 0?s:ai.verticalFill,x:ce(e.x)?e.x:d.left,y:ce(e.y)?e.y:d.top,width:ce(e.width)?e.width:d.width,height:ce(e.height)?e.height:d.height}),h=m.x,g=m.y,x=m.width,j=m.height,S=m.syncWithTicks,b=m.horizontalValues,A=m.verticalValues,O=Lz(),E=Fz();if(!ce(x)||x<=0||!ce(j)||j<=0||!ce(h)||h!==+h||!ce(g)||g!==+g)return null;var N=m.verticalCoordinatesGenerator||ZU,_=m.horizontalCoordinatesGenerator||eW,P=m.horizontalPoints,T=m.verticalPoints;if((!P||!P.length)&&Pe(_)){var R=b&&b.length,$=_({yAxis:E?Ct(Ct({},E),{},{ticks:R?b:E.ticks}):void 0,width:u,height:f,offset:d},R?!0:S);mn(Array.isArray($),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Aa($),"]")),Array.isArray($)&&(P=$)}if((!T||!T.length)&&Pe(N)){var z=A&&A.length,B=N({xAxis:O?Ct(Ct({},O),{},{ticks:z?A:O.ticks}):void 0,width:u,height:f,offset:d},z?!0:S);mn(Array.isArray(B),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Aa(B),"]")),Array.isArray(B)&&(T=B)}return q.createElement("g",{className:"recharts-cartesian-grid"},q.createElement(GU,{fill:m.fill,fillOpacity:m.fillOpacity,x:m.x,y:m.y,width:m.width,height:m.height,ry:m.ry}),q.createElement(XU,xa({},m,{offset:d,horizontalPoints:P,xAxis:O,yAxis:E})),q.createElement(YU,xa({},m,{offset:d,verticalPoints:T,xAxis:O,yAxis:E})),q.createElement(QU,xa({},m,{horizontalPoints:P})),q.createElement(JU,xa({},m,{verticalPoints:T})))}vO.displayName="CartesianGrid";var tW=["type","layout","connectNulls","ref"],rW=["key"];function Ti(e){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(e)}function MS(e,t){if(e==null)return{};var r=nW(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function nW(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function tl(){return tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},tl.apply(this,arguments)}function RS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?RS(Object(r),!0).forEach(function(n){Dr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):RS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ii(e){return lW(e)||oW(e)||iW(e)||aW()}function aW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iW(e,t){if(e){if(typeof e=="string")return gy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return gy(e,t)}}function oW(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lW(e){if(Array.isArray(e))return gy(e)}function gy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function sW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function IS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,xO(n.key),n)}}function uW(e,t,r){return t&&IS(e.prototype,t),r&&IS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function cW(e,t,r){return t=gc(t),fW(e,gO()?Reflect.construct(t,r||[],gc(e).constructor):t.apply(e,r))}function fW(e,t){if(t&&(Ti(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dW(e)}function dW(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gO=function(){return!!e})()}function gc(e){return gc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},gc(e)}function pW(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xy(e,t)}function xy(e,t){return xy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},xy(e,t)}function Dr(e,t,r){return t=xO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xO(e){var t=hW(e,"string");return Ti(t)=="symbol"?t:t+""}function hW(e,t){if(Ti(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ti(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Jl=(function(e){function t(){var r;sW(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=cW(this,t,[].concat(a)),Dr(r,"state",{isAnimationFinished:!0,totalLength:0}),Dr(r,"generateSimpleStrokeDasharray",function(s,u){return"".concat(u,"px ").concat(s-u,"px")}),Dr(r,"getStrokeDasharray",function(s,u,f){var d=f.reduce(function(A,O){return A+O});if(!d)return r.generateSimpleStrokeDasharray(u,s);for(var m=Math.floor(s/d),h=s%d,g=u-s,x=[],j=0,S=0;j<f.length;S+=f[j],++j)if(S+f[j]>h){x=[].concat(ii(f.slice(0,j)),[h-S]);break}var b=x.length%2===0?[0,g]:[g];return[].concat(ii(t.repeat(f,m)),ii(x),b).map(function(A){return"".concat(A,"px")}).join(", ")}),Dr(r,"id",Wl("recharts-line-")),Dr(r,"pathRef",function(s){r.mainCurve=s}),Dr(r,"handleAnimationEnd",function(){r.setState({isAnimationFinished:!0}),r.props.onAnimationEnd&&r.props.onAnimationEnd()}),Dr(r,"handleAnimationStart",function(){r.setState({isAnimationFinished:!1}),r.props.onAnimationStart&&r.props.onAnimationStart()}),r}return pW(t,e),uW(t,[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var n=this.getTotalLength();this.setState({totalLength:n})}}},{key:"componentDidUpdate",value:function(){if(this.props.isAnimationActive){var n=this.getTotalLength();n!==this.state.totalLength&&this.setState({totalLength:n})}}},{key:"getTotalLength",value:function(){var n=this.mainCurve;try{return n&&n.getTotalLength&&n.getTotalLength()||0}catch{return 0}}},{key:"renderErrorBar",value:function(n,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.points,u=o.xAxis,f=o.yAxis,d=o.layout,m=o.children,h=gr(m,Ql);if(!h)return null;var g=function(S,b){return{x:S.x,y:S.y,value:S.value,errorVal:ir(S.payload,b)}},x={clipPath:n?"url(#clipPath-".concat(a,")"):null};return q.createElement(lt,x,h.map(function(j){return q.cloneElement(j,{key:"bar-".concat(j.props.dataKey),data:s,xAxis:u,yAxis:f,layout:d,dataPointFormatter:g})}))}},{key:"renderDots",value:function(n,a,o){var s=this.props.isAnimationActive;if(s&&!this.state.isAnimationFinished)return null;var u=this.props,f=u.dot,d=u.points,m=u.dataKey,h=Ce(this.props,!1),g=Ce(f,!0),x=d.map(function(S,b){var A=er(er(er({key:"dot-".concat(b),r:3},h),g),{},{index:b,cx:S.x,cy:S.y,value:S.value,dataKey:m,payload:S.payload,points:d});return t.renderDotItem(f,A)}),j={clipPath:n?"url(#clipPath-".concat(a?"":"dots-").concat(o,")"):null};return q.createElement(lt,tl({className:"recharts-line-dots",key:"dots"},j),x)}},{key:"renderCurveStatically",value:function(n,a,o,s){var u=this.props,f=u.type,d=u.layout,m=u.connectNulls;u.ref;var h=MS(u,tW),g=er(er(er({},Ce(h,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:a?"url(#clipPath-".concat(o,")"):null,points:n},s),{},{type:f,layout:d,connectNulls:m});return q.createElement(Y2,tl({},g,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(n,a){var o=this,s=this.props,u=s.points,f=s.strokeDasharray,d=s.isAnimationActive,m=s.animationBegin,h=s.animationDuration,g=s.animationEasing,x=s.animationId,j=s.animateNewValues,S=s.width,b=s.height,A=this.state,O=A.prevPoints,E=A.totalLength;return q.createElement(Sn,{begin:m,duration:h,isActive:d,easing:g,from:{t:0},to:{t:1},key:"line-".concat(x),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(N){var _=N.t;if(O){var P=O.length/u.length,T=u.map(function(M,H){var X=Math.floor(H*P);if(O[X]){var Y=O[X],W=Mr(Y.x,M.x),Z=Mr(Y.y,M.y);return er(er({},M),{},{x:W(_),y:Z(_)})}if(j){var V=Mr(S*2,M.x),ee=Mr(b/2,M.y);return er(er({},M),{},{x:V(_),y:ee(_)})}return er(er({},M),{},{x:M.x,y:M.y})});return o.renderCurveStatically(T,n,a)}var R=Mr(0,E),$=R(_),z;if(f){var B="".concat(f).split(/[,\s]+/gim).map(function(M){return parseFloat(M)});z=o.getStrokeDasharray($,E,B)}else z=o.generateSimpleStrokeDasharray(E,$);return o.renderCurveStatically(u,n,a,{strokeDasharray:z})})}},{key:"renderCurve",value:function(n,a){var o=this.props,s=o.points,u=o.isAnimationActive,f=this.state,d=f.prevPoints,m=f.totalLength;return u&&s&&s.length&&(!d&&m>0||!Hc(d,s))?this.renderCurveWithAnimation(n,a):this.renderCurveStatically(s,n,a)}},{key:"render",value:function(){var n,a=this.props,o=a.hide,s=a.dot,u=a.points,f=a.className,d=a.xAxis,m=a.yAxis,h=a.top,g=a.left,x=a.width,j=a.height,S=a.isAnimationActive,b=a.id;if(o||!u||!u.length)return null;var A=this.state.isAnimationFinished,O=u.length===1,E=Ie("recharts-line",f),N=d&&d.allowDataOverflow,_=m&&m.allowDataOverflow,P=N||_,T=Te(b)?this.id:b,R=(n=Ce(s,!1))!==null&&n!==void 0?n:{r:3,strokeWidth:2},$=R.r,z=$===void 0?3:$,B=R.strokeWidth,M=B===void 0?2:B,H=IN(s)?s:{},X=H.clipDot,Y=X===void 0?!0:X,W=z*2+M;return q.createElement(lt,{className:E},N||_?q.createElement("defs",null,q.createElement("clipPath",{id:"clipPath-".concat(T)},q.createElement("rect",{x:N?g:g-x/2,y:_?h:h-j/2,width:N?x:x*2,height:_?j:j*2})),!Y&&q.createElement("clipPath",{id:"clipPath-dots-".concat(T)},q.createElement("rect",{x:g-W/2,y:h-W/2,width:x+W,height:j+W}))):null,!O&&this.renderCurve(P,T),this.renderErrorBar(P,T),(O||s)&&this.renderDots(P,Y,T),(!S||A)&&vn.renderCallByParent(this.props,u))}}],[{key:"getDerivedStateFromProps",value:function(n,a){return n.animationId!==a.prevAnimationId?{prevAnimationId:n.animationId,curPoints:n.points,prevPoints:a.curPoints}:n.points!==a.curPoints?{curPoints:n.points}:null}},{key:"repeat",value:function(n,a){for(var o=n.length%2!==0?[].concat(ii(n),[0]):n,s=[],u=0;u<a;++u)s=[].concat(ii(s),ii(o));return s}},{key:"renderDotItem",value:function(n,a){var o;if(q.isValidElement(n))o=q.cloneElement(n,a);else if(Pe(n))o=n(a);else{var s=a.key,u=MS(a,rW),f=Ie("recharts-line-dot",typeof n!="boolean"?n.className:"");o=q.createElement(Cv,tl({key:s},u,{className:f}))}return o}}])})(D.PureComponent);Dr(Jl,"displayName","Line");Dr(Jl,"defaultProps",{xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!qi.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1,label:!1});Dr(Jl,"getComposedData",function(e){var t=e.props,r=e.xAxis,n=e.yAxis,a=e.xAxisTicks,o=e.yAxisTicks,s=e.dataKey,u=e.bandSize,f=e.displayedData,d=e.offset,m=t.layout,h=f.map(function(g,x){var j=ir(g,s);return m==="horizontal"?{x:Z5({axis:r,ticks:a,bandSize:u,entry:g,index:x}),y:Te(j)?null:n.scale(j),value:j,payload:g}:{x:Te(j)?null:r.scale(j),y:Z5({axis:n,ticks:o,bandSize:u,entry:g,index:x}),value:j,payload:g}});return er({points:h,layout:m},d)});function Ci(e){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(e)}function mW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yW(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,SO(n.key),n)}}function vW(e,t,r){return t&&yW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function gW(e,t,r){return t=xc(t),xW(e,bO()?Reflect.construct(t,r||[],xc(e).constructor):t.apply(e,r))}function xW(e,t){if(t&&(Ci(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return bW(e)}function bW(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bO=function(){return!!e})()}function xc(e){return xc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},xc(e)}function wW(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&by(e,t)}function by(e,t){return by=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},by(e,t)}function wO(e,t,r){return t=SO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function SO(e){var t=SW(e,"string");return Ci(t)=="symbol"?t:t+""}function SW(e,t){if(Ci(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ci(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function wy(){return wy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wy.apply(this,arguments)}function jW(e){var t=e.xAxisId,r=Iv(),n=$v(),a=iO(t);return a==null?null:q.createElement(Hi,wy({},a,{className:Ie("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:r,height:n},ticksGenerator:function(s){return dn(s,!0)}}))}var Ki=(function(e){function t(){return mW(this,t),gW(this,t,arguments)}return wW(t,e),vW(t,[{key:"render",value:function(){return q.createElement(jW,this.props)}}])})(q.Component);wO(Ki,"displayName","XAxis");wO(Ki,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Di(e){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}function _W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AW(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,AO(n.key),n)}}function OW(e,t,r){return t&&AW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function EW(e,t,r){return t=bc(t),PW(e,jO()?Reflect.construct(t,r||[],bc(e).constructor):t.apply(e,r))}function PW(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kW(e)}function kW(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jO=function(){return!!e})()}function bc(e){return bc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},bc(e)}function NW(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Sy(e,t)}function Sy(e,t){return Sy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Sy(e,t)}function _O(e,t,r){return t=AO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function AO(e){var t=TW(e,"string");return Di(t)=="symbol"?t:t+""}function TW(e,t){if(Di(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Di(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function jy(){return jy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},jy.apply(this,arguments)}var CW=function(t){var r=t.yAxisId,n=Iv(),a=$v(),o=oO(r);return o==null?null:q.createElement(Hi,jy({},o,{className:Ie("recharts-".concat(o.axisType," ").concat(o.axisType),o.className),viewBox:{x:0,y:0,width:n,height:a},ticksGenerator:function(u){return dn(u,!0)}}))},Vi=(function(e){function t(){return _W(this,t),EW(this,t,arguments)}return NW(t,e),OW(t,[{key:"render",value:function(){return q.createElement(CW,this.props)}}])})(q.Component);_O(Vi,"displayName","YAxis");_O(Vi,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function $S(e){return IW(e)||RW(e)||MW(e)||DW()}function DW(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MW(e,t){if(e){if(typeof e=="string")return _y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _y(e,t)}}function RW(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function IW(e){if(Array.isArray(e))return _y(e)}function _y(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ay=function(t,r,n,a,o){var s=gr(t,Qc),u=gr(t,Zc),f=[].concat($S(s),$S(u)),d=gr(t,tf),m="".concat(a,"Id"),h=a[0],g=r;if(f.length&&(g=f.reduce(function(S,b){if(b.props[m]===n&&Gr(b.props,"extendDomain")&&ce(b.props[h])){var A=b.props[h];return[Math.min(S[0],A),Math.max(S[1],A)]}return S},g)),d.length){var x="".concat(h,"1"),j="".concat(h,"2");g=d.reduce(function(S,b){if(b.props[m]===n&&Gr(b.props,"extendDomain")&&ce(b.props[x])&&ce(b.props[j])){var A=b.props[x],O=b.props[j];return[Math.min(S[0],A,O),Math.max(S[1],A,O)]}return S},g)}return o&&o.length&&(g=o.reduce(function(S,b){return ce(b)?[Math.min(S[0],b),Math.max(S[1],b)]:S},g)),g},Z0={exports:{}},LS;function $W(){return LS||(LS=1,(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function a(f,d,m){this.fn=f,this.context=d,this.once=m||!1}function o(f,d,m,h,g){if(typeof m!="function")throw new TypeError("The listener must be a function");var x=new a(m,h||f,g),j=r?r+d:d;return f._events[j]?f._events[j].fn?f._events[j]=[f._events[j],x]:f._events[j].push(x):(f._events[j]=x,f._eventsCount++),f}function s(f,d){--f._eventsCount===0?f._events=new n:delete f._events[d]}function u(){this._events=new n,this._eventsCount=0}u.prototype.eventNames=function(){var d=[],m,h;if(this._eventsCount===0)return d;for(h in m=this._events)t.call(m,h)&&d.push(r?h.slice(1):h);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(m)):d},u.prototype.listeners=function(d){var m=r?r+d:d,h=this._events[m];if(!h)return[];if(h.fn)return[h.fn];for(var g=0,x=h.length,j=new Array(x);g<x;g++)j[g]=h[g].fn;return j},u.prototype.listenerCount=function(d){var m=r?r+d:d,h=this._events[m];return h?h.fn?1:h.length:0},u.prototype.emit=function(d,m,h,g,x,j){var S=r?r+d:d;if(!this._events[S])return!1;var b=this._events[S],A=arguments.length,O,E;if(b.fn){switch(b.once&&this.removeListener(d,b.fn,void 0,!0),A){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,m),!0;case 3:return b.fn.call(b.context,m,h),!0;case 4:return b.fn.call(b.context,m,h,g),!0;case 5:return b.fn.call(b.context,m,h,g,x),!0;case 6:return b.fn.call(b.context,m,h,g,x,j),!0}for(E=1,O=new Array(A-1);E<A;E++)O[E-1]=arguments[E];b.fn.apply(b.context,O)}else{var N=b.length,_;for(E=0;E<N;E++)switch(b[E].once&&this.removeListener(d,b[E].fn,void 0,!0),A){case 1:b[E].fn.call(b[E].context);break;case 2:b[E].fn.call(b[E].context,m);break;case 3:b[E].fn.call(b[E].context,m,h);break;case 4:b[E].fn.call(b[E].context,m,h,g);break;default:if(!O)for(_=1,O=new Array(A-1);_<A;_++)O[_-1]=arguments[_];b[E].fn.apply(b[E].context,O)}}return!0},u.prototype.on=function(d,m,h){return o(this,d,m,h,!1)},u.prototype.once=function(d,m,h){return o(this,d,m,h,!0)},u.prototype.removeListener=function(d,m,h,g){var x=r?r+d:d;if(!this._events[x])return this;if(!m)return s(this,x),this;var j=this._events[x];if(j.fn)j.fn===m&&(!g||j.once)&&(!h||j.context===h)&&s(this,x);else{for(var S=0,b=[],A=j.length;S<A;S++)(j[S].fn!==m||g&&!j[S].once||h&&j[S].context!==h)&&b.push(j[S]);b.length?this._events[x]=b.length===1?b[0]:b:s(this,x)}return this},u.prototype.removeAllListeners=function(d){var m;return d?(m=r?r+d:d,this._events[m]&&s(this,m)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,e.exports=u})(Z0)),Z0.exports}var LW=$W();const FW=We(LW);var e2=new FW,t2="recharts.syncMouseEvents";function Il(e){"@babel/helpers - typeof";return Il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Il(e)}function BW(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qW(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,OO(n.key),n)}}function zW(e,t,r){return t&&qW(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function r2(e,t,r){return t=OO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function OO(e){var t=UW(e,"string");return Il(t)=="symbol"?t:t+""}function UW(e,t){if(Il(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Il(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var WW=(function(){function e(){BW(this,e),r2(this,"activeIndex",0),r2(this,"coordinateList",[]),r2(this,"layout","horizontal")}return zW(e,[{key:"setDetails",value:function(r){var n,a=r.coordinateList,o=a===void 0?null:a,s=r.container,u=s===void 0?null:s,f=r.layout,d=f===void 0?null:f,m=r.offset,h=m===void 0?null:m,g=r.mouseHandlerCallback,x=g===void 0?null:g;this.coordinateList=(n=o??this.coordinateList)!==null&&n!==void 0?n:[],this.container=u??this.container,this.layout=d??this.layout,this.offset=h??this.offset,this.mouseHandlerCallback=x??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(r){if(this.coordinateList.length!==0)switch(r.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(r){this.activeIndex=r}},{key:"spoofMouse",value:function(){var r,n;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),o=a.x,s=a.y,u=a.height,f=this.coordinateList[this.activeIndex].coordinate,d=((r=window)===null||r===void 0?void 0:r.scrollX)||0,m=((n=window)===null||n===void 0?void 0:n.scrollY)||0,h=o+f+d,g=s+this.offset.top+u/2+m;this.mouseHandlerCallback({pageX:h,pageY:g})}}}])})();function HW(e,t,r){if(r==="number"&&t===!0&&Array.isArray(e)){var n=e==null?void 0:e[0],a=e==null?void 0:e[1];if(n&&a&&ce(n)&&ce(a))return!0}return!1}function KW(e,t,r,n){var a=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-a,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function EO(e){var t=e.cx,r=e.cy,n=e.radius,a=e.startAngle,o=e.endAngle,s=At(t,r,n,a),u=At(t,r,n,o);return{points:[s,u],cx:t,cy:r,radius:n,startAngle:a,endAngle:o}}function VW(e,t,r){var n,a,o,s;if(e==="horizontal")n=t.x,o=n,a=r.top,s=r.top+r.height;else if(e==="vertical")a=t.y,s=a,n=r.left,o=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var u=t.cx,f=t.cy,d=t.innerRadius,m=t.outerRadius,h=t.angle,g=At(u,f,d,h),x=At(u,f,m,h);n=g.x,a=g.y,o=x.x,s=x.y}else return EO(t);return[{x:n,y:a},{x:o,y:s}]}function $l(e){"@babel/helpers - typeof";return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$l(e)}function FS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function bu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?FS(Object(r),!0).forEach(function(n){GW(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):FS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function GW(e,t,r){return t=XW(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function XW(e){var t=YW(e,"string");return $l(t)=="symbol"?t:t+""}function YW(e,t){if($l(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if($l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function QW(e){var t,r,n=e.element,a=e.tooltipEventType,o=e.isActive,s=e.activeCoordinate,u=e.activePayload,f=e.offset,d=e.activeTooltipIndex,m=e.tooltipAxisBandSize,h=e.layout,g=e.chartName,x=(t=n.props.cursor)!==null&&t!==void 0?t:(r=n.type.defaultProps)===null||r===void 0?void 0:r.cursor;if(!n||!x||!o||!s||g!=="ScatterChart"&&a!=="axis")return null;var j,S=Y2;if(g==="ScatterChart")j=s,S=XB;else if(g==="BarChart")j=KW(h,s,f,m),S=Tv;else if(h==="radial"){var b=EO(s),A=b.cx,O=b.cy,E=b.radius,N=b.startAngle,_=b.endAngle;j={cx:A,cy:O,startAngle:N,endAngle:_,innerRadius:E,outerRadius:E},S=MA}else j={points:VW(h,s,f)},S=Y2;var P=bu(bu(bu(bu({stroke:"#ccc",pointerEvents:"none"},f),j),Ce(x,!1)),{},{payload:u,payloadIndex:d,className:Ie("recharts-tooltip-cursor",x.className)});return D.isValidElement(x)?D.cloneElement(x,P):D.createElement(S,P)}var JW=["item"],ZW=["children","className","width","height","style","compact","title","desc"];function Mi(e){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(e)}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ui.apply(this,arguments)}function BS(e,t){return rH(e)||tH(e,t)||kO(e,t)||eH()}function eH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tH(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,s,u=[],f=!0,d=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(m){d=!0,a=m}finally{try{if(!f&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw a}}return u}}function rH(e){if(Array.isArray(e))return e}function qS(e,t){if(e==null)return{};var r=nH(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function nH(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function aH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iH(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,NO(n.key),n)}}function oH(e,t,r){return t&&iH(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function lH(e,t,r){return t=wc(t),sH(e,PO()?Reflect.construct(t,r||[],wc(e).constructor):t.apply(e,r))}function sH(e,t){if(t&&(Mi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uH(e)}function uH(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(PO=function(){return!!e})()}function wc(e){return wc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},wc(e)}function cH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Oy(e,t)}function Oy(e,t){return Oy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Oy(e,t)}function Ri(e){return pH(e)||dH(e)||kO(e)||fH()}function fH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kO(e,t){if(e){if(typeof e=="string")return Ey(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ey(e,t)}}function dH(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pH(e){if(Array.isArray(e))return Ey(e)}function Ey(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function zS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?zS(Object(r),!0).forEach(function(n){Se(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Se(e,t,r){return t=NO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function NO(e){var t=hH(e,"string");return Mi(t)=="symbol"?t:t+""}function hH(e,t){if(Mi(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Mi(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mH={xAxis:["bottom","top"],yAxis:["left","right"]},yH={width:"100%",height:"100%"},TO={x:0,y:0};function wu(e){return e}var vH=function(t,r){return r==="horizontal"?t.x:r==="vertical"?t.y:r==="centric"?t.angle:t.radius},gH=function(t,r,n,a){var o=r.find(function(m){return m&&m.index===n});if(o){if(t==="horizontal")return{x:o.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:o.coordinate};if(t==="centric"){var s=o.coordinate,u=a.radius;return te(te(te({},a),At(a.cx,a.cy,u,s)),{},{angle:s,radius:u})}var f=o.coordinate,d=a.angle;return te(te(te({},a),At(a.cx,a.cy,f,d)),{},{angle:d,radius:f})}return TO},rf=function(t,r){var n=r.graphicalItems,a=r.dataStartIndex,o=r.dataEndIndex,s=(n??[]).reduce(function(u,f){var d=f.props.data;return d&&d.length?[].concat(Ri(u),Ri(d)):u},[]);return s.length>0?s:t&&t.length&&ce(a)&&ce(o)?t.slice(a,o+1):[]};function CO(e){return e==="number"?[0,"auto"]:void 0}var Py=function(t,r,n,a){var o=t.graphicalItems,s=t.tooltipAxis,u=rf(r,t);return n<0||!o||!o.length||n>=u.length?null:o.reduce(function(f,d){var m,h=(m=d.props.data)!==null&&m!==void 0?m:r;h&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=n&&(h=h.slice(t.dataStartIndex,t.dataEndIndex+1));var g;if(s.dataKey&&!s.allowDuplicatedCategory){var x=h===void 0?u:h;g=Ou(x,s.dataKey,a)}else g=h&&h[n]||u[n];return g?[].concat(Ri(f),[TA(d,g)]):f},[])},US=function(t,r,n,a){var o=a||{x:t.chartX,y:t.chartY},s=vH(o,n),u=t.orderedTooltipTicks,f=t.tooltipAxis,d=t.tooltipTicks,m=P$(s,u,d,f);if(m>=0&&d){var h=d[m]&&d[m].value,g=Py(t,r,m,h),x=gH(n,u,m,o);return{activeTooltipIndex:m,activeLabel:h,activePayload:g,activeCoordinate:x}}return null},xH=function(t,r){var n=r.axes,a=r.graphicalItems,o=r.axisType,s=r.axisIdKey,u=r.stackGroups,f=r.dataStartIndex,d=r.dataEndIndex,m=t.layout,h=t.children,g=t.stackOffset,x=PA(m,o);return n.reduce(function(j,S){var b,A=S.type.defaultProps!==void 0?te(te({},S.type.defaultProps),S.props):S.props,O=A.type,E=A.dataKey,N=A.allowDataOverflow,_=A.allowDuplicatedCategory,P=A.scale,T=A.ticks,R=A.includeHidden,$=A[s];if(j[$])return j;var z=rf(t.data,{graphicalItems:a.filter(function(U){var se,me=s in U.props?U.props[s]:(se=U.type.defaultProps)===null||se===void 0?void 0:se[s];return me===$}),dataStartIndex:f,dataEndIndex:d}),B=z.length,M,H,X;HW(A.domain,N,O)&&(M=H2(A.domain,null,N),x&&(O==="number"||P!=="auto")&&(X=Zo(z,E,"category")));var Y=CO(O);if(!M||M.length===0){var W,Z=(W=A.domain)!==null&&W!==void 0?W:Y;if(E){if(M=Zo(z,E,O),O==="category"&&x){var V=EN(M);_&&V?(H=M,M=sc(0,B)):_||(M=n6(Z,M,S).reduce(function(U,se){return U.indexOf(se)>=0?U:[].concat(Ri(U),[se])},[]))}else if(O==="category")_?M=M.filter(function(U){return U!==""&&!Te(U)}):M=n6(Z,M,S).reduce(function(U,se){return U.indexOf(se)>=0||se===""||Te(se)?U:[].concat(Ri(U),[se])},[]);else if(O==="number"){var ee=D$(z,a.filter(function(U){var se,me,xe=s in U.props?U.props[s]:(se=U.type.defaultProps)===null||se===void 0?void 0:se[s],_e="hide"in U.props?U.props.hide:(me=U.type.defaultProps)===null||me===void 0?void 0:me.hide;return xe===$&&(R||!_e)}),E,o,m);ee&&(M=ee)}x&&(O==="number"||P!=="auto")&&(X=Zo(z,E,"category"))}else x?M=sc(0,B):u&&u[$]&&u[$].hasStack&&O==="number"?M=g==="expand"?[0,1]:NA(u[$].stackGroups,f,d):M=EA(z,a.filter(function(U){var se=s in U.props?U.props[s]:U.type.defaultProps[s],me="hide"in U.props?U.props.hide:U.type.defaultProps.hide;return se===$&&(R||!me)}),O,m,!0);if(O==="number")M=Ay(h,M,$,o,T),Z&&(M=H2(Z,M,N));else if(O==="category"&&Z){var J=Z,I=M.every(function(U){return J.indexOf(U)>=0});I&&(M=J)}}return te(te({},j),{},Se({},$,te(te({},A),{},{axisType:o,domain:M,categoricalDomain:X,duplicateDomain:H,originalDomain:(b=A.domain)!==null&&b!==void 0?b:Y,isCategorical:x,layout:m})))},{})},bH=function(t,r){var n=r.graphicalItems,a=r.Axis,o=r.axisType,s=r.axisIdKey,u=r.stackGroups,f=r.dataStartIndex,d=r.dataEndIndex,m=t.layout,h=t.children,g=rf(t.data,{graphicalItems:n,dataStartIndex:f,dataEndIndex:d}),x=g.length,j=PA(m,o),S=-1;return n.reduce(function(b,A){var O=A.type.defaultProps!==void 0?te(te({},A.type.defaultProps),A.props):A.props,E=O[s],N=CO("number");if(!b[E]){S++;var _;return j?_=sc(0,x):u&&u[E]&&u[E].hasStack?(_=NA(u[E].stackGroups,f,d),_=Ay(h,_,E,o)):(_=H2(N,EA(g,n.filter(function(P){var T,R,$=s in P.props?P.props[s]:(T=P.type.defaultProps)===null||T===void 0?void 0:T[s],z="hide"in P.props?P.props.hide:(R=P.type.defaultProps)===null||R===void 0?void 0:R.hide;return $===E&&!z}),"number",m),a.defaultProps.allowDataOverflow),_=Ay(h,_,E,o)),te(te({},b),{},Se({},E,te(te({axisType:o},a.defaultProps),{},{hide:!0,orientation:vr(mH,"".concat(o,".").concat(S%2),null),domain:_,originalDomain:N,isCategorical:j,layout:m})))}return b},{})},wH=function(t,r){var n=r.axisType,a=n===void 0?"xAxis":n,o=r.AxisComp,s=r.graphicalItems,u=r.stackGroups,f=r.dataStartIndex,d=r.dataEndIndex,m=t.children,h="".concat(a,"Id"),g=gr(m,o),x={};return g&&g.length?x=xH(t,{axes:g,graphicalItems:s,axisType:a,axisIdKey:h,stackGroups:u,dataStartIndex:f,dataEndIndex:d}):s&&s.length&&(x=bH(t,{Axis:o,graphicalItems:s,axisType:a,axisIdKey:h,stackGroups:u,dataStartIndex:f,dataEndIndex:d})),x},SH=function(t){var r=Vn(t),n=dn(r,!1,!0);return{tooltipTicks:n,orderedTooltipTicks:nv(n,function(a){return a.coordinate}),tooltipAxis:r,tooltipAxisBandSize:Ju(r,n)}},WS=function(t){var r=t.children,n=t.defaultShowTooltip,a=rr(r,Ai),o=0,s=0;return t.data&&t.data.length!==0&&(s=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(o=a.props.startIndex),a.props.endIndex>=0&&(s=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:o,dataEndIndex:s,activeTooltipIndex:-1,isTooltipActive:!!n}},jH=function(t){return!t||!t.length?!1:t.some(function(r){var n=hn(r&&r.type);return n&&n.indexOf("Bar")>=0})},HS=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},_H=function(t,r){var n=t.props,a=t.graphicalItems,o=t.xAxisMap,s=o===void 0?{}:o,u=t.yAxisMap,f=u===void 0?{}:u,d=n.width,m=n.height,h=n.children,g=n.margin||{},x=rr(h,Ai),j=rr(h,fi),S=Object.keys(f).reduce(function(_,P){var T=f[P],R=T.orientation;return!T.mirror&&!T.hide?te(te({},_),{},Se({},R,_[R]+T.width)):_},{left:g.left||0,right:g.right||0}),b=Object.keys(s).reduce(function(_,P){var T=s[P],R=T.orientation;return!T.mirror&&!T.hide?te(te({},_),{},Se({},R,vr(_,"".concat(R))+T.height)):_},{top:g.top||0,bottom:g.bottom||0}),A=te(te({},b),S),O=A.bottom;x&&(A.bottom+=x.props.height||Ai.defaultProps.height),j&&r&&(A=T$(A,a,n,r));var E=d-A.left-A.right,N=m-A.top-A.bottom;return te(te({brushBottom:O},A),{},{width:Math.max(E,0),height:Math.max(N,0)})},AH=function(t,r){if(r==="xAxis")return t[r].width;if(r==="yAxis")return t[r].height},DO=function(t){var r=t.chartName,n=t.GraphicalChild,a=t.defaultTooltipEventType,o=a===void 0?"axis":a,s=t.validateTooltipEventTypes,u=s===void 0?["axis"]:s,f=t.axisComponents,d=t.legendContent,m=t.formatAxisMap,h=t.defaultProps,g=function(A,O){var E=O.graphicalItems,N=O.stackGroups,_=O.offset,P=O.updateId,T=O.dataStartIndex,R=O.dataEndIndex,$=A.barSize,z=A.layout,B=A.barGap,M=A.barCategoryGap,H=A.maxBarSize,X=HS(z),Y=X.numericAxisName,W=X.cateAxisName,Z=jH(E),V=[];return E.forEach(function(ee,J){var I=rf(A.data,{graphicalItems:[ee],dataStartIndex:T,dataEndIndex:R}),U=ee.type.defaultProps!==void 0?te(te({},ee.type.defaultProps),ee.props):ee.props,se=U.dataKey,me=U.maxBarSize,xe=U["".concat(Y,"Id")],_e=U["".concat(W,"Id")],De={},Ae=f.reduce(function(Ft,jr){var Ta=O["".concat(jr.axisType,"Map")],Gi=U["".concat(jr.axisType,"Id")];Ta&&Ta[Gi]||jr.axisType==="zAxis"||_a();var Xi=Ta[Gi];return te(te({},Ft),{},Se(Se({},jr.axisType,Xi),"".concat(jr.axisType,"Ticks"),dn(Xi)))},De),oe=Ae[W],ge=Ae["".concat(W,"Ticks")],Oe=N&&N[xe]&&N[xe].hasStack&&H$(ee,N[xe].stackGroups),ae=hn(ee.type).indexOf("Bar")>=0,ze=Ju(oe,ge),Ne=[],tt=Z&&k$({barSize:$,stackGroups:N,totalSize:AH(Ae,W)});if(ae){var rt,yt,Sr=Te(me)?H:me,$r=(rt=(yt=Ju(oe,ge,!0))!==null&&yt!==void 0?yt:Sr)!==null&&rt!==void 0?rt:0;Ne=N$({barGap:B,barCategoryGap:M,bandSize:$r!==ze?$r:ze,sizeList:tt[_e],maxBarSize:Sr}),$r!==ze&&(Ne=Ne.map(function(Ft){return te(te({},Ft),{},{position:te(te({},Ft.position),{},{offset:Ft.position.offset-$r/2})})}))}var Lr=ee&&ee.type&&ee.type.getComposedData;Lr&&V.push({props:te(te({},Lr(te(te({},Ae),{},{displayedData:I,props:A,dataKey:se,item:ee,bandSize:ze,barPosition:Ne,offset:_,stackedData:Oe,layout:z,dataStartIndex:T,dataEndIndex:R}))),{},Se(Se(Se({key:ee.key||"item-".concat(J)},Y,Ae[Y]),W,Ae[W]),"animationId",P)),childIndex:FN(ee,A.children),item:ee})}),V},x=function(A,O){var E=A.props,N=A.dataStartIndex,_=A.dataEndIndex,P=A.updateId;if(!g4({props:E}))return null;var T=E.children,R=E.layout,$=E.stackOffset,z=E.data,B=E.reverseStackOrder,M=HS(R),H=M.numericAxisName,X=M.cateAxisName,Y=gr(T,n),W=z$(z,Y,"".concat(H,"Id"),"".concat(X,"Id"),$,B),Z=f.reduce(function(U,se){var me="".concat(se.axisType,"Map");return te(te({},U),{},Se({},me,wH(E,te(te({},se),{},{graphicalItems:Y,stackGroups:se.axisType===H&&W,dataStartIndex:N,dataEndIndex:_}))))},{}),V=_H(te(te({},Z),{},{props:E,graphicalItems:Y}),O==null?void 0:O.legendBBox);Object.keys(Z).forEach(function(U){Z[U]=m(E,Z[U],V,U.replace("Map",""),r)});var ee=Z["".concat(X,"Map")],J=SH(ee),I=g(E,te(te({},Z),{},{dataStartIndex:N,dataEndIndex:_,updateId:P,graphicalItems:Y,stackGroups:W,offset:V}));return te(te({formattedGraphicalItems:I,graphicalItems:Y,offset:V,stackGroups:W},J),Z)},j=(function(b){function A(O){var E,N,_;return aH(this,A),_=lH(this,A,[O]),Se(_,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),Se(_,"accessibilityManager",new WW),Se(_,"handleLegendBBoxUpdate",function(P){if(P){var T=_.state,R=T.dataStartIndex,$=T.dataEndIndex,z=T.updateId;_.setState(te({legendBBox:P},x({props:_.props,dataStartIndex:R,dataEndIndex:$,updateId:z},te(te({},_.state),{},{legendBBox:P}))))}}),Se(_,"handleReceiveSyncEvent",function(P,T,R){if(_.props.syncId===P){if(R===_.eventEmitterSymbol&&typeof _.props.syncMethod!="function")return;_.applySyncEvent(T)}}),Se(_,"handleBrushChange",function(P){var T=P.startIndex,R=P.endIndex;if(T!==_.state.dataStartIndex||R!==_.state.dataEndIndex){var $=_.state.updateId;_.setState(function(){return te({dataStartIndex:T,dataEndIndex:R},x({props:_.props,dataStartIndex:T,dataEndIndex:R,updateId:$},_.state))}),_.triggerSyncEvent({dataStartIndex:T,dataEndIndex:R})}}),Se(_,"handleMouseEnter",function(P){var T=_.getMouseInfo(P);if(T){var R=te(te({},T),{},{isTooltipActive:!0});_.setState(R),_.triggerSyncEvent(R);var $=_.props.onMouseEnter;Pe($)&&$(R,P)}}),Se(_,"triggeredAfterMouseMove",function(P){var T=_.getMouseInfo(P),R=T?te(te({},T),{},{isTooltipActive:!0}):{isTooltipActive:!1};_.setState(R),_.triggerSyncEvent(R);var $=_.props.onMouseMove;Pe($)&&$(R,P)}),Se(_,"handleItemMouseEnter",function(P){_.setState(function(){return{isTooltipActive:!0,activeItem:P,activePayload:P.tooltipPayload,activeCoordinate:P.tooltipPosition||{x:P.cx,y:P.cy}}})}),Se(_,"handleItemMouseLeave",function(){_.setState(function(){return{isTooltipActive:!1}})}),Se(_,"handleMouseMove",function(P){P.persist(),_.throttleTriggeredAfterMouseMove(P)}),Se(_,"handleMouseLeave",function(P){_.throttleTriggeredAfterMouseMove.cancel();var T={isTooltipActive:!1};_.setState(T),_.triggerSyncEvent(T);var R=_.props.onMouseLeave;Pe(R)&&R(T,P)}),Se(_,"handleOuterEvent",function(P){var T=LN(P),R=vr(_.props,"".concat(T));if(T&&Pe(R)){var $,z;/.*touch.*/i.test(T)?z=_.getMouseInfo(P.changedTouches[0]):z=_.getMouseInfo(P),R(($=z)!==null&&$!==void 0?$:{},P)}}),Se(_,"handleClick",function(P){var T=_.getMouseInfo(P);if(T){var R=te(te({},T),{},{isTooltipActive:!0});_.setState(R),_.triggerSyncEvent(R);var $=_.props.onClick;Pe($)&&$(R,P)}}),Se(_,"handleMouseDown",function(P){var T=_.props.onMouseDown;if(Pe(T)){var R=_.getMouseInfo(P);T(R,P)}}),Se(_,"handleMouseUp",function(P){var T=_.props.onMouseUp;if(Pe(T)){var R=_.getMouseInfo(P);T(R,P)}}),Se(_,"handleTouchMove",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&_.throttleTriggeredAfterMouseMove(P.changedTouches[0])}),Se(_,"handleTouchStart",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&_.handleMouseDown(P.changedTouches[0])}),Se(_,"handleTouchEnd",function(P){P.changedTouches!=null&&P.changedTouches.length>0&&_.handleMouseUp(P.changedTouches[0])}),Se(_,"handleDoubleClick",function(P){var T=_.props.onDoubleClick;if(Pe(T)){var R=_.getMouseInfo(P);T(R,P)}}),Se(_,"handleContextMenu",function(P){var T=_.props.onContextMenu;if(Pe(T)){var R=_.getMouseInfo(P);T(R,P)}}),Se(_,"triggerSyncEvent",function(P){_.props.syncId!==void 0&&e2.emit(t2,_.props.syncId,P,_.eventEmitterSymbol)}),Se(_,"applySyncEvent",function(P){var T=_.props,R=T.layout,$=T.syncMethod,z=_.state.updateId,B=P.dataStartIndex,M=P.dataEndIndex;if(P.dataStartIndex!==void 0||P.dataEndIndex!==void 0)_.setState(te({dataStartIndex:B,dataEndIndex:M},x({props:_.props,dataStartIndex:B,dataEndIndex:M,updateId:z},_.state)));else if(P.activeTooltipIndex!==void 0){var H=P.chartX,X=P.chartY,Y=P.activeTooltipIndex,W=_.state,Z=W.offset,V=W.tooltipTicks;if(!Z)return;if(typeof $=="function")Y=$(V,P);else if($==="value"){Y=-1;for(var ee=0;ee<V.length;ee++)if(V[ee].value===P.activeLabel){Y=ee;break}}var J=te(te({},Z),{},{x:Z.left,y:Z.top}),I=Math.min(H,J.x+J.width),U=Math.min(X,J.y+J.height),se=V[Y]&&V[Y].value,me=Py(_.state,_.props.data,Y),xe=V[Y]?{x:R==="horizontal"?V[Y].coordinate:I,y:R==="horizontal"?U:V[Y].coordinate}:TO;_.setState(te(te({},P),{},{activeLabel:se,activeCoordinate:xe,activePayload:me,activeTooltipIndex:Y}))}else _.setState(P)}),Se(_,"renderCursor",function(P){var T,R=_.state,$=R.isTooltipActive,z=R.activeCoordinate,B=R.activePayload,M=R.offset,H=R.activeTooltipIndex,X=R.tooltipAxisBandSize,Y=_.getTooltipEventType(),W=(T=P.props.active)!==null&&T!==void 0?T:$,Z=_.props.layout,V=P.key||"_recharts-cursor";return q.createElement(QW,{key:V,activeCoordinate:z,activePayload:B,activeTooltipIndex:H,chartName:r,element:P,isActive:W,layout:Z,offset:M,tooltipAxisBandSize:X,tooltipEventType:Y})}),Se(_,"renderPolarAxis",function(P,T,R){var $=vr(P,"type.axisType"),z=vr(_.state,"".concat($,"Map")),B=P.type.defaultProps,M=B!==void 0?te(te({},B),P.props):P.props,H=z&&z[M["".concat($,"Id")]];return D.cloneElement(P,te(te({},H),{},{className:Ie($,H.className),key:P.key||"".concat(T,"-").concat(R),ticks:dn(H,!0)}))}),Se(_,"renderPolarGrid",function(P){var T=P.props,R=T.radialLines,$=T.polarAngles,z=T.polarRadius,B=_.state,M=B.radiusAxisMap,H=B.angleAxisMap,X=Vn(M),Y=Vn(H),W=Y.cx,Z=Y.cy,V=Y.innerRadius,ee=Y.outerRadius;return D.cloneElement(P,{polarAngles:Array.isArray($)?$:dn(Y,!0).map(function(J){return J.coordinate}),polarRadius:Array.isArray(z)?z:dn(X,!0).map(function(J){return J.coordinate}),cx:W,cy:Z,innerRadius:V,outerRadius:ee,key:P.key||"polar-grid",radialLines:R})}),Se(_,"renderLegend",function(){var P=_.state.formattedGraphicalItems,T=_.props,R=T.children,$=T.width,z=T.height,B=_.props.margin||{},M=$-(B.left||0)-(B.right||0),H=AA({children:R,formattedGraphicalItems:P,legendWidth:M,legendContent:d});if(!H)return null;var X=H.item,Y=qS(H,JW);return D.cloneElement(X,te(te({},Y),{},{chartWidth:$,chartHeight:z,margin:B,onBBoxUpdate:_.handleLegendBBoxUpdate}))}),Se(_,"renderTooltip",function(){var P,T=_.props,R=T.children,$=T.accessibilityLayer,z=rr(R,Wr);if(!z)return null;var B=_.state,M=B.isTooltipActive,H=B.activeCoordinate,X=B.activePayload,Y=B.activeLabel,W=B.offset,Z=(P=z.props.active)!==null&&P!==void 0?P:M;return D.cloneElement(z,{viewBox:te(te({},W),{},{x:W.left,y:W.top}),active:Z,label:Y,payload:Z?X:[],coordinate:H,accessibilityLayer:$})}),Se(_,"renderBrush",function(P){var T=_.props,R=T.margin,$=T.data,z=_.state,B=z.offset,M=z.dataStartIndex,H=z.dataEndIndex,X=z.updateId;return D.cloneElement(P,{key:P.key||"_recharts-brush",onChange:yu(_.handleBrushChange,P.props.onChange),data:$,x:ce(P.props.x)?P.props.x:B.left,y:ce(P.props.y)?P.props.y:B.top+B.height+B.brushBottom-(R.bottom||0),width:ce(P.props.width)?P.props.width:B.width,startIndex:M,endIndex:H,updateId:"brush-".concat(X)})}),Se(_,"renderReferenceElement",function(P,T,R){if(!P)return null;var $=_,z=$.clipPathId,B=_.state,M=B.xAxisMap,H=B.yAxisMap,X=B.offset,Y=P.type.defaultProps||{},W=P.props,Z=W.xAxisId,V=Z===void 0?Y.xAxisId:Z,ee=W.yAxisId,J=ee===void 0?Y.yAxisId:ee;return D.cloneElement(P,{key:P.key||"".concat(T,"-").concat(R),xAxis:M[V],yAxis:H[J],viewBox:{x:X.left,y:X.top,width:X.width,height:X.height},clipPathId:z})}),Se(_,"renderActivePoints",function(P){var T=P.item,R=P.activePoint,$=P.basePoint,z=P.childIndex,B=P.isRange,M=[],H=T.props.key,X=T.item.type.defaultProps!==void 0?te(te({},T.item.type.defaultProps),T.item.props):T.item.props,Y=X.activeDot,W=X.dataKey,Z=te(te({index:z,dataKey:W,cx:R.x,cy:R.y,r:4,fill:Nv(T.item),strokeWidth:2,stroke:"#fff",payload:R.payload,value:R.value},Ce(Y,!1)),Eu(Y));return M.push(A.renderActiveDot(Y,Z,"".concat(H,"-activePoint-").concat(z))),$?M.push(A.renderActiveDot(Y,te(te({},Z),{},{cx:$.x,cy:$.y}),"".concat(H,"-basePoint-").concat(z))):B&&M.push(null),M}),Se(_,"renderGraphicChild",function(P,T,R){var $=_.filterFormatItem(P,T,R);if(!$)return null;var z=_.getTooltipEventType(),B=_.state,M=B.isTooltipActive,H=B.tooltipAxis,X=B.activeTooltipIndex,Y=B.activeLabel,W=_.props.children,Z=rr(W,Wr),V=$.props,ee=V.points,J=V.isRange,I=V.baseLine,U=$.item.type.defaultProps!==void 0?te(te({},$.item.type.defaultProps),$.item.props):$.item.props,se=U.activeDot,me=U.hide,xe=U.activeBar,_e=U.activeShape,De=!!(!me&&M&&Z&&(se||xe||_e)),Ae={};z!=="axis"&&Z&&Z.props.trigger==="click"?Ae={onClick:yu(_.handleItemMouseEnter,P.props.onClick)}:z!=="axis"&&(Ae={onMouseLeave:yu(_.handleItemMouseLeave,P.props.onMouseLeave),onMouseEnter:yu(_.handleItemMouseEnter,P.props.onMouseEnter)});var oe=D.cloneElement(P,te(te({},$.props),Ae));function ge(jr){return typeof H.dataKey=="function"?H.dataKey(jr.payload):null}if(De)if(X>=0){var Oe,ae;if(H.dataKey&&!H.allowDuplicatedCategory){var ze=typeof H.dataKey=="function"?ge:"payload.".concat(H.dataKey.toString());Oe=Ou(ee,ze,Y),ae=J&&I&&Ou(I,ze,Y)}else Oe=ee==null?void 0:ee[X],ae=J&&I&&I[X];if(_e||xe){var Ne=P.props.activeIndex!==void 0?P.props.activeIndex:X;return[D.cloneElement(P,te(te(te({},$.props),Ae),{},{activeIndex:Ne})),null,null]}if(!Te(Oe))return[oe].concat(Ri(_.renderActivePoints({item:$,activePoint:Oe,basePoint:ae,childIndex:X,isRange:J})))}else{var tt,rt=(tt=_.getItemByXY(_.state.activeCoordinate))!==null&&tt!==void 0?tt:{graphicalItem:oe},yt=rt.graphicalItem,Sr=yt.item,$r=Sr===void 0?P:Sr,Lr=yt.childIndex,Ft=te(te(te({},$.props),Ae),{},{activeIndex:Lr});return[D.cloneElement($r,Ft),null,null]}return J?[oe,null,null]:[oe,null]}),Se(_,"renderCustomized",function(P,T,R){return D.cloneElement(P,te(te({key:"recharts-customized-".concat(R)},_.props),_.state))}),Se(_,"renderMap",{CartesianGrid:{handler:wu,once:!0},ReferenceArea:{handler:_.renderReferenceElement},ReferenceLine:{handler:wu},ReferenceDot:{handler:_.renderReferenceElement},XAxis:{handler:wu},YAxis:{handler:wu},Brush:{handler:_.renderBrush,once:!0},Bar:{handler:_.renderGraphicChild},Line:{handler:_.renderGraphicChild},Area:{handler:_.renderGraphicChild},Radar:{handler:_.renderGraphicChild},RadialBar:{handler:_.renderGraphicChild},Scatter:{handler:_.renderGraphicChild},Pie:{handler:_.renderGraphicChild},Funnel:{handler:_.renderGraphicChild},Tooltip:{handler:_.renderCursor,once:!0},PolarGrid:{handler:_.renderPolarGrid,once:!0},PolarAngleAxis:{handler:_.renderPolarAxis},PolarRadiusAxis:{handler:_.renderPolarAxis},Customized:{handler:_.renderCustomized}}),_.clipPathId="".concat((E=O.id)!==null&&E!==void 0?E:Wl("recharts"),"-clip"),_.throttleTriggeredAfterMouseMove=A_(_.triggeredAfterMouseMove,(N=O.throttleDelay)!==null&&N!==void 0?N:1e3/60),_.state={},_}return cH(A,b),oH(A,[{key:"componentDidMount",value:function(){var E,N;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(E=this.props.margin.left)!==null&&E!==void 0?E:0,top:(N=this.props.margin.top)!==null&&N!==void 0?N:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var E=this.props,N=E.children,_=E.data,P=E.height,T=E.layout,R=rr(N,Wr);if(R){var $=R.props.defaultIndex;if(!(typeof $!="number"||$<0||$>this.state.tooltipTicks.length-1)){var z=this.state.tooltipTicks[$]&&this.state.tooltipTicks[$].value,B=Py(this.state,_,$,z),M=this.state.tooltipTicks[$].coordinate,H=(this.state.offset.top+P)/2,X=T==="horizontal",Y=X?{x:M,y:H}:{y:M,x:H},W=this.state.formattedGraphicalItems.find(function(V){var ee=V.item;return ee.type.name==="Scatter"});W&&(Y=te(te({},Y),W.props.points[$].tooltipPosition),B=W.props.points[$].tooltipPayload);var Z={activeTooltipIndex:$,isTooltipActive:!0,activeLabel:z,activePayload:B,activeCoordinate:Y};this.setState(Z),this.renderCursor(R),this.accessibilityManager.setIndex($)}}}},{key:"getSnapshotBeforeUpdate",value:function(E,N){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==N.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==E.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==E.margin){var _,P;this.accessibilityManager.setDetails({offset:{left:(_=this.props.margin.left)!==null&&_!==void 0?_:0,top:(P=this.props.margin.top)!==null&&P!==void 0?P:0}})}return null}},{key:"componentDidUpdate",value:function(E){f2([rr(E.children,Wr)],[rr(this.props.children,Wr)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var E=rr(this.props.children,Wr);if(E&&typeof E.props.shared=="boolean"){var N=E.props.shared?"axis":"item";return u.indexOf(N)>=0?N:o}return o}},{key:"getMouseInfo",value:function(E){if(!this.container)return null;var N=this.container,_=N.getBoundingClientRect(),P=AD(_),T={chartX:Math.round(E.pageX-P.left),chartY:Math.round(E.pageY-P.top)},R=_.width/N.offsetWidth||1,$=this.inRange(T.chartX,T.chartY,R);if(!$)return null;var z=this.state,B=z.xAxisMap,M=z.yAxisMap,H=this.getTooltipEventType(),X=US(this.state,this.props.data,this.props.layout,$);if(H!=="axis"&&B&&M){var Y=Vn(B).scale,W=Vn(M).scale,Z=Y&&Y.invert?Y.invert(T.chartX):null,V=W&&W.invert?W.invert(T.chartY):null;return te(te({},T),{},{xValue:Z,yValue:V},X)}return X?te(te({},T),X):null}},{key:"inRange",value:function(E,N){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,P=this.props.layout,T=E/_,R=N/_;if(P==="horizontal"||P==="vertical"){var $=this.state.offset,z=T>=$.left&&T<=$.left+$.width&&R>=$.top&&R<=$.top+$.height;return z?{x:T,y:R}:null}var B=this.state,M=B.angleAxisMap,H=B.radiusAxisMap;if(M&&H){var X=Vn(M);return o6({x:T,y:R},X)}return null}},{key:"parseEventsOfWrapper",value:function(){var E=this.props.children,N=this.getTooltipEventType(),_=rr(E,Wr),P={};_&&N==="axis"&&(_.props.trigger==="click"?P={onClick:this.handleClick}:P={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var T=Eu(this.props,this.handleOuterEvent);return te(te({},T),P)}},{key:"addListener",value:function(){e2.on(t2,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){e2.removeListener(t2,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(E,N,_){for(var P=this.state.formattedGraphicalItems,T=0,R=P.length;T<R;T++){var $=P[T];if($.item===E||$.props.key===E.key||N===hn($.item.type)&&_===$.childIndex)return $}return null}},{key:"renderClipPath",value:function(){var E=this.clipPathId,N=this.state.offset,_=N.left,P=N.top,T=N.height,R=N.width;return q.createElement("defs",null,q.createElement("clipPath",{id:E},q.createElement("rect",{x:_,y:P,height:T,width:R})))}},{key:"getXScales",value:function(){var E=this.state.xAxisMap;return E?Object.entries(E).reduce(function(N,_){var P=BS(_,2),T=P[0],R=P[1];return te(te({},N),{},Se({},T,R.scale))},{}):null}},{key:"getYScales",value:function(){var E=this.state.yAxisMap;return E?Object.entries(E).reduce(function(N,_){var P=BS(_,2),T=P[0],R=P[1];return te(te({},N),{},Se({},T,R.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(E){var N;return(N=this.state.xAxisMap)===null||N===void 0||(N=N[E])===null||N===void 0?void 0:N.scale}},{key:"getYScaleByAxisId",value:function(E){var N;return(N=this.state.yAxisMap)===null||N===void 0||(N=N[E])===null||N===void 0?void 0:N.scale}},{key:"getItemByXY",value:function(E){var N=this.state,_=N.formattedGraphicalItems,P=N.activeItem;if(_&&_.length)for(var T=0,R=_.length;T<R;T++){var $=_[T],z=$.props,B=$.item,M=B.type.defaultProps!==void 0?te(te({},B.type.defaultProps),B.props):B.props,H=hn(B.type);if(H==="Bar"){var X=(z.data||[]).find(function(V){return FB(E,V)});if(X)return{graphicalItem:$,payload:X}}else if(H==="RadialBar"){var Y=(z.data||[]).find(function(V){return o6(E,V)});if(Y)return{graphicalItem:$,payload:Y}}else if(Gc($,P)||Xc($,P)||Tl($,P)){var W=kq({graphicalItem:$,activeTooltipItem:P,itemData:M.data}),Z=M.activeIndex===void 0?W:M.activeIndex;return{graphicalItem:te(te({},$),{},{childIndex:Z}),payload:Tl($,P)?M.data[W]:$.props.data[W]}}}return null}},{key:"render",value:function(){var E=this;if(!g4(this))return null;var N=this.props,_=N.children,P=N.className,T=N.width,R=N.height,$=N.style,z=N.compact,B=N.title,M=N.desc,H=qS(N,ZW),X=Ce(H,!1);if(z)return q.createElement(wS,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},q.createElement(p2,ui({},X,{width:T,height:R,title:B,desc:M}),this.renderClipPath(),b4(_,this.renderMap)));if(this.props.accessibilityLayer){var Y,W;X.tabIndex=(Y=this.props.tabIndex)!==null&&Y!==void 0?Y:0,X.role=(W=this.props.role)!==null&&W!==void 0?W:"application",X.onKeyDown=function(V){E.accessibilityManager.keyboardEvent(V)},X.onFocus=function(){E.accessibilityManager.focus()}}var Z=this.parseEventsOfWrapper();return q.createElement(wS,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},q.createElement("div",ui({className:Ie("recharts-wrapper",P),style:te({position:"relative",cursor:"default",width:T,height:R},$)},Z,{ref:function(ee){E.container=ee}}),q.createElement(p2,ui({},X,{width:T,height:R,title:B,desc:M,style:yH}),this.renderClipPath(),b4(_,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(D.Component);Se(j,"displayName",r),Se(j,"defaultProps",te({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},h)),Se(j,"getDerivedStateFromProps",function(b,A){var O=b.dataKey,E=b.data,N=b.children,_=b.width,P=b.height,T=b.layout,R=b.stackOffset,$=b.margin,z=A.dataStartIndex,B=A.dataEndIndex;if(A.updateId===void 0){var M=WS(b);return te(te(te({},M),{},{updateId:0},x(te(te({props:b},M),{},{updateId:0}),A)),{},{prevDataKey:O,prevData:E,prevWidth:_,prevHeight:P,prevLayout:T,prevStackOffset:R,prevMargin:$,prevChildren:N})}if(O!==A.prevDataKey||E!==A.prevData||_!==A.prevWidth||P!==A.prevHeight||T!==A.prevLayout||R!==A.prevStackOffset||!ci($,A.prevMargin)){var H=WS(b),X={chartX:A.chartX,chartY:A.chartY,isTooltipActive:A.isTooltipActive},Y=te(te({},US(A,E,T)),{},{updateId:A.updateId+1}),W=te(te(te({},H),X),Y);return te(te(te({},W),x(te({props:b},W),A)),{},{prevDataKey:O,prevData:E,prevWidth:_,prevHeight:P,prevLayout:T,prevStackOffset:R,prevMargin:$,prevChildren:N})}if(!f2(N,A.prevChildren)){var Z,V,ee,J,I=rr(N,Ai),U=I&&(Z=(V=I.props)===null||V===void 0?void 0:V.startIndex)!==null&&Z!==void 0?Z:z,se=I&&(ee=(J=I.props)===null||J===void 0?void 0:J.endIndex)!==null&&ee!==void 0?ee:B,me=U!==z||se!==B,xe=!Te(E),_e=xe&&!me?A.updateId:A.updateId+1;return te(te({updateId:_e},x(te(te({props:b},A),{},{updateId:_e,dataStartIndex:U,dataEndIndex:se}),A)),{},{prevChildren:N,dataStartIndex:U,dataEndIndex:se})}return null}),Se(j,"renderActiveDot",function(b,A,O){var E;return D.isValidElement(b)?E=D.cloneElement(b,A):Pe(b)?E=b(A):E=q.createElement(Cv,A),q.createElement(lt,{className:"recharts-active-dot",key:O},E)});var S=D.forwardRef(function(A,O){return q.createElement(j,ui({},A,{ref:O}))});return S.displayName=j.displayName,S},OH=DO({chartName:"LineChart",GraphicalChild:Jl,axisComponents:[{axisType:"xAxis",AxisComp:Ki},{axisType:"yAxis",AxisComp:Vi}],formatAxisMap:QA}),EH=DO({chartName:"BarChart",GraphicalChild:Na,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Ki},{axisType:"yAxis",AxisComp:Vi}],formatAxisMap:QA});function n2(e,t){return t==="円"?e.toLocaleString()+"円":t==="人"||t==="法人"||t==="pt"?Math.round(e).toLocaleString()+t:t==="%"?e.toFixed(1)+"%":e.toFixed(2)+t}function PH({data:e,average:t,unit:r}){const n=e.map(a=>({...a,displayName:a.prefecture.replace(/[都道府県]$/,""),label:n2(a.value,r)}));return y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsx("div",{className:"mb-6 p-4 bg-gradient-to-r from-[#F8F8F6] to-white rounded-lg",children:y.jsxs("div",{className:"flex items-center gap-6 text-sm text-[#717182]",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-4 h-4 rounded",style:{backgroundColor:"#C0392B"}}),y.jsx("span",{children:"平均以上"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-4 h-4 rounded",style:{backgroundColor:"#27AE60"}}),y.jsx("span",{children:"平均以下"})]}),y.jsxs("div",{className:"ml-auto font-medium text-[#1A1A1A]",style:{fontFamily:"monospace"},children:["全国平均: ",n2(t,r)]})]})}),y.jsx(O_,{width:"100%",height:1450,children:y.jsxs(EH,{data:n,layout:"vertical",margin:{top:5,right:80,left:60,bottom:5},children:[y.jsx(Ki,{type:"number",tick:{fontSize:11,fill:"#999"},tickLine:!1,axisLine:!1}),y.jsx(Vi,{type:"category",dataKey:"displayName",width:55,tick:{fontSize:12,fill:"#555"},tickLine:!1,axisLine:!1}),y.jsx(Qc,{x:t,stroke:"#3D52A0",strokeDasharray:"4 3",strokeWidth:1.5,label:{value:"平均",position:"top",fontSize:10,fill:"#3D52A0"}}),y.jsxs(Na,{dataKey:"value",radius:[0,2,2,0],maxBarSize:16,children:[y.jsx(vn,{dataKey:"label",position:"right",style:{fontSize:11,fill:"#555",fontFamily:"monospace"}}),n.map((a,o)=>y.jsx(iv,{fill:a.value>=t?"#C0392B":"#27AE60",fillOpacity:.85},`cell-${o}`))]})]})}),y.jsx("div",{className:"mt-8 space-y-3",children:e.slice(0,5).map((a,o)=>y.jsxs("div",{className:"flex items-center justify-between text-sm p-4 rounded-lg bg-gradient-to-r from-[#F8F8F6]/50 to-transparent hover:from-[#3D52A0]/5 hover:to-transparent transition-all",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#3D52A0] to-[#5B6FB8] text-white font-medium text-xs",children:o+1}),y.jsx("span",{className:"font-medium",children:a.prefecture})]}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("span",{className:"font-medium",style:{fontFamily:"monospace"},children:n2(a.value,r)}),y.jsxs("span",{className:"text-xs text-[#717182] bg-white px-3 py-1 rounded-full border border-[#E5E0D8]",children:["平均比 ",(a.value/t-1)*100>=0?"+":"",((a.value/t-1)*100).toFixed(1),"%"]})]})]},a.prefecture))})]})}function kH({data:e,unit:t,source:r}){return y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsx(O_,{width:"100%",height:400,children:y.jsxs(OH,{data:e,margin:{top:5,right:30,left:20,bottom:5},children:[y.jsx("defs",{children:y.jsxs("linearGradient",{id:"lineGradient",x1:"0",y1:"0",x2:"1",y2:"0",children:[y.jsx("stop",{offset:"0%",stopColor:"#3D52A0"}),y.jsx("stop",{offset:"100%",stopColor:"#5B6FB8"})]})}),y.jsx(vO,{strokeDasharray:"3 3",stroke:"#E5E0D8"}),y.jsx(Ki,{dataKey:"year",tick:{fontSize:12},stroke:"#717182"}),y.jsx(Vi,{tick:{fontSize:12},stroke:"#717182",label:{value:t,angle:-90,position:"insideLeft"}}),y.jsx(Wr,{contentStyle:{backgroundColor:"white",border:"1px solid #E5E0D8",borderRadius:"0.5rem",boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1)",fontFamily:"var(--font-sans)"},formatter:n=>[`${n.toFixed(2)}${t}`,"全国値"]}),y.jsx(Jl,{type:"monotone",dataKey:"value",stroke:"url(#lineGradient)",strokeWidth:3,dot:{fill:"#3D52A0",r:5,strokeWidth:2,stroke:"white"},activeDot:{r:7,strokeWidth:3}})]})}),y.jsxs("p",{className:"text-xs text-[#717182] mt-6 px-4 py-2 bg-[#F8F8F6] rounded-lg inline-block",children:["出典: ",r]})]})}function NH(e,t){return t==="円"||t==="円/年"?e.toLocaleString()+t.replace("円/年","円"):Number.isInteger(e)||t==="人"||t==="法人"||t==="pt"||t==="万戸"?Math.round(e).toLocaleString()+t:e.toFixed(2)+t}function TH({data:e,average:t,unit:r}){var j;const[n,a]=D.useState(""),[o,s]=D.useState("rank"),[u,f]=D.useState("asc"),d=e.some(S=>S.absoluteValue!==void 0),m=((j=e.find(S=>S.absoluteUnit))==null?void 0:j.absoluteUnit)??"",h=D.useMemo(()=>{let S=e.filter(b=>b.prefecture.includes(n));return S.sort((b,A)=>{let O,E;return o==="rank"?(O=b.rank,E=A.rank):o==="value"?(O=b.value,E=A.value):o==="absolute"?(O=b.absoluteValue??0,E=A.absoluteValue??0):(O=(b.value/t-1)*100,E=(A.value/t-1)*100),u==="asc"?O-E:E-O}),S},[e,n,o,u,t]),g=S=>{o===S?f(u==="asc"?"desc":"asc"):(s(S),f(S==="rank"?"asc":"desc"))},x=({col:S})=>o!==S?y.jsx("span",{className:"text-[#C8C4BB] ml-1",children:"↕"}):y.jsx("span",{className:"text-[#3D52A0] ml-1",children:u==="asc"?"↑":"↓"});return y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsxs("div",{className:"mb-6 relative",children:[y.jsx($k,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]"}),y.jsx("input",{type:"text",placeholder:"都道府県名で検索",value:n,onChange:S=>a(S.target.value),className:"w-full pl-12 pr-4 py-3 border border-[#E5E0D8] rounded-lg focus:outline-none focus:border-[#3D52A0] focus:ring-2 focus:ring-[#3D52A0]/10 transition-all"})]}),y.jsx("div",{className:"overflow-x-auto",children:y.jsxs("table",{className:"w-full text-sm",children:[y.jsx("thead",{children:y.jsxs("tr",{className:"border-b-2 border-[#E5E0D8] bg-gradient-to-r from-[#F8F8F6] to-white",children:[y.jsxs("th",{className:"text-left py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors rounded-tl-lg whitespace-nowrap",onClick:()=>g("rank"),children:["順位",y.jsx(x,{col:"rank"})]}),y.jsx("th",{className:"text-left py-4 px-4 whitespace-nowrap",children:"都道府県"}),y.jsxs("th",{className:"text-right py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors whitespace-nowrap",onClick:()=>g("value"),children:["率・指数（",r,"）",y.jsx(x,{col:"value"})]}),d&&y.jsxs("th",{className:"text-right py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors whitespace-nowrap",onClick:()=>g("absolute"),children:["実数（",m,"）",y.jsx(x,{col:"absolute"})]}),y.jsxs("th",{className:"text-right py-4 px-4 cursor-pointer hover:bg-[#3D52A0]/5 transition-colors rounded-tr-lg whitespace-nowrap",onClick:()=>g("ratio"),children:["全国平均比",y.jsx(x,{col:"ratio"})]})]})}),y.jsx("tbody",{children:h.map(S=>{const b=(S.value/t-1)*100;return y.jsxs("tr",{className:"border-b border-[#E5E0D8] hover:bg-gradient-to-r hover:from-[#3D52A0]/5 hover:to-transparent transition-all",children:[y.jsx("td",{className:"py-4 px-4 font-medium text-[#717182]",style:{fontFamily:"monospace"},children:S.rank}),y.jsx("td",{className:"py-4 px-4 font-medium",children:S.prefecture}),y.jsx("td",{className:"py-4 px-4 text-right",style:{fontFamily:"monospace"},children:NH(S.value,r)}),d&&y.jsx("td",{className:"py-4 px-4 text-right text-[#717182]",style:{fontFamily:"monospace"},children:S.absoluteValue!==void 0?S.absoluteValue.toLocaleString()+m:"—"}),y.jsx("td",{className:"py-4 px-4 text-right",children:y.jsxs("span",{className:"px-3 py-1 rounded-full text-xs",style:{backgroundColor:b>=0?"rgba(192, 57, 43, 0.1)":"rgba(39, 174, 96, 0.1)",color:b>=0?"#C0392B":"#27AE60"},children:[b>=0?"+":"",b.toFixed(1),"%"]})})]},S.prefecture)})})]})})]})}const KS="https://japan-stats-likes.100makeniki.workers.dev";function MO({id:e,title:t,url:r}){const[n,a]=D.useState(0),[o,s]=D.useState(!1),[u,f]=D.useState(!1),[d,m]=D.useState(!1),h=r||(typeof window<"u"?window.location.href:""),g=`liked_${e}`;D.useEffect(()=>{fetch(`${KS}?id=${e}`).then(A=>A.json()).then(A=>a(A.count||0)).catch(()=>{}),s(localStorage.getItem(g)==="1")},[e]);const x=async()=>{if(!(o||d)){m(!0);try{const O=await(await fetch(`${KS}?id=${e}`,{method:"POST"})).json();a(O.count),s(!0),localStorage.setItem(g,"1")}catch{}m(!1)}},j=()=>{navigator.clipboard.writeText(h).then(()=>{f(!0),setTimeout(()=>f(!1),2e3)})},S=`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(h)}&hashtags=日本の統計マップ`,b=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(h)}`;return y.jsxs("div",{className:"mt-8 sm:mt-10 border-t border-[#E5E0D8] pt-6 sm:pt-8",children:[y.jsxs("div",{className:"flex flex-col items-center mb-6 sm:mb-8",children:[y.jsx("p",{className:"text-xs text-[#717182] mb-3",children:"この記事は参考になりましたか？"}),y.jsxs("button",{onClick:x,disabled:o||d,className:`flex items-center gap-2 px-6 py-3 rounded-full border-2 text-sm font-medium transition-all ${o?"bg-[#3D52A0] text-white border-[#3D52A0] scale-105":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0] hover:text-[#3D52A0]"}`,children:[y.jsx("span",{className:"text-lg",children:"👍"}),y.jsx("span",{children:o?"参考になった！":"参考になった"}),y.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs font-bold ${o?"bg-white/20 text-white":"bg-[#F0EDE8] text-[#717182]"}`,children:n})]})]}),y.jsxs("div",{className:"flex flex-col items-center gap-3",children:[y.jsx("p",{className:"text-xs text-[#717182]",children:"この記事をシェアする"}),y.jsxs("div",{className:"flex items-center gap-3 flex-wrap justify-center",children:[y.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors",children:[y.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Xでシェア"]}),y.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2.5 text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity",style:{backgroundColor:"#06C755"},children:[y.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"})}),"LINEでシェア"]}),y.jsxs("button",{onClick:j,className:"flex items-center gap-2 px-4 py-2.5 bg-[#F0EDE8] text-[#717182] text-xs font-medium rounded-lg hover:bg-[#E5E0D8] transition-colors",children:[y.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),y.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),u?"コピーしました！":"URLをコピー"]})]})]})]})}const $t={marriage:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+5IUTLM+17R0+614CX",imgSrc728:"https://www20.a8.net/svt/bgt?aid=260530685334&wid=002&eno=01&mid=s00000005670001013000&mc=1",trackingImg728:"https://www12.a8.net/0.gif?a8mat=4B42RH+5IUTLM+17R0+614CX"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100o94500otkn",label:"naco-do（ナコード）",description:"スマホで探す結婚相談所。月会費9,900円〜",emoji:"💍"}],insurance:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6W9ST6+20NK+69P01",imgSrc300:"https://www21.a8.net/svt/bgt?aid=260530685417&wid=002&eno=01&mid=s00000009416001053000&mc=1",trackingImg300:"https://www12.a8.net/0.gif?a8mat=4B42RH+6W9ST6+20NK+69P01",label:"みんなの生命保険アドバイザー",description:"在籍FP3000名以上！無料保険相談",emoji:"🛡️"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6FLNVE+5SIO+5YZ75",imgSrc300:"https://www20.a8.net/svt/bgt?aid=260530685389&wid=002&eno=01&mid=s00000027024001003000&mc=1",trackingImg300:"https://www17.a8.net/0.gif?a8mat=4B42RH+6FLNVE+5SIO+5YZ75",label:"保険マンモス",description:"保険相談後アンケート回答で豪華グルメギフトを全員にプレゼント！",emoji:"🎁"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6D7XGA+2PS+15R4NL",imgSrc728:"https://www21.a8.net/svt/bgt?aid=260530685385&wid=002&eno=01&mid=s00000000352007013000&mc=1",trackingImg728:"https://www10.a8.net/0.gif?a8mat=4B42RH+6D7XGA+2PS+15R4NL",label:"一番安い自動車保険がわかる！",description:"インズウェブで自動車保険を一括比較",emoji:"🚗"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100pflz00otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100pflz00otkn",label:"みんなの生命保険アドバイザー",description:"在籍FP3000名以上！無料保険相談",emoji:"🛡️"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100pedr00otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100pedr00otkn",label:"貯蓄の無料相談「ガーデン」",description:"老後・資産形成の無料相談サービス",emoji:"💰"}],housing:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+A07AJE+136+1BSW5T",imgSrc728:"https://www27.a8.net/svt/bgt?aid=260530685605&wid=002&eno=01&mid=s00000000141008029000&mc=1",trackingImg728:"https://www13.a8.net/0.gif?a8mat=4B42RH+A07AJE+136+1BSW5T",label:"SUUMO新築マンション",description:"気になる新築マンションの資料を無料請求",emoji:"🏠"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",imgSrc300:"https://www26.a8.net/svt/bgt?aid=260530685578&wid=002&eno=01&mid=s00000009416006008000&mc=1",trackingImg300:"https://www13.a8.net/0.gif?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",label:"トウシェル",description:"始める方が増えている不動産投資！始める前の無料相談",emoji:"🏢"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100mukv00otkn",label:"リショップナビ",description:"リフォーム会社を一括比較！しつこい営業なし",emoji:"🔨"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100ou8e00otkn",label:"お住まいアンケート",description:"アンケートに答えてAmazonギフト券GET",emoji:"🏡"}],fire_insurance:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6GSJ2Y+36QK+NTRMP",imgSrc728:"https://www24.a8.net/svt/bgt?aid=260530685391&wid=002&eno=01&mid=s00000014870004002000&mc=1",trackingImg728:"https://www14.a8.net/0.gif?a8mat=4B42RH+6GSJ2Y+36QK+NTRMP",imgSrc300:"https://www28.a8.net/svt/bgt?aid=260530685391&wid=002&eno=01&mid=s00000014870004022000&mc=1",trackingImg300:"https://www19.a8.net/0.gif?a8mat=4B42RH+6GSJ2Y+36QK+NY1Y9",label:"火災保険一括見積もり",description:"火災保険を一括比較！確定率90%の人気サービス",emoji:"🏡"}],investment:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9IXPZU+40OC+C8O75",imgSrc728:"https://www29.a8.net/svt/bgt?aid=260530685576&wid=002&eno=01&mid=s00000018750002056000&mc=1",trackingImg728:"https://www15.a8.net/0.gif?a8mat=4B42RH+9IXPZU+40OC+C8O75",label:"JPリターンズ",description:"マンション投資の無料相談",emoji:"📈"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",imgSrc300:"https://www26.a8.net/svt/bgt?aid=260530685578&wid=002&eno=01&mid=s00000009416006008000&mc=1",trackingImg300:"https://www13.a8.net/0.gif?a8mat=4B42RH+9K4L7E+20NK+ZRQ0X",label:"トウシェル",description:"不動産投資の無料相談はトウシェル",emoji:"🏢"}],migration:[{type:"text",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+49LVMI+ZXM+HY06A",label:"引越し侍",description:"引越し費用を最大50%節約！一括見積もり無料",emoji:"🚚",trackingImgText:"https://www18.a8.net/0.gif?a8mat=4B42RH+49LVMI+ZXM+HY06A"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+74LVA2+50+6MDJ6P",imgSrc300:"https://www20.a8.net/svt/bgt?aid=260530685431&wid=002&eno=01&mid=s00000000018040038000&mc=1",trackingImg300:"https://www11.a8.net/0.gif?a8mat=4B42RH+74LVA2+50+6MDJ6P",label:"GMOとくとくBB光",description:"基本工事費が実質無料で安くて速い光回線",emoji:"📡"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+757AVU+50+54SIQP",imgSrc728:"https://www21.a8.net/svt/bgt?aid=260530685432&wid=002&eno=01&mid=s00000000018031038000&mc=1",trackingImg728:"https://www15.a8.net/0.gif?a8mat=4B42RH+757AVU+50+54SIQP",imgSrc300:"https://www23.a8.net/svt/bgt?aid=260530685432&wid=002&eno=01&mid=s00000000018031032000&mc=1",trackingImg300:"https://www13.a8.net/0.gif?a8mat=4B42RH+757AVU+50+54R8G1",label:"とくとくBB×ドコモ光",description:"とくとくBB×ドコモ光のお申込みはこちら",emoji:"📶"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+72TKGQ+50+7LYEAP",imgSrc300:"https://www20.a8.net/svt/bgt?aid=260530685428&wid=002&eno=01&mid=s00000000018046014000&mc=1",trackingImg300:"https://www14.a8.net/0.gif?a8mat=4B42RH+72TKGQ+50+7LYEAP",label:"GMOとくとくBBホームWi-Fi",description:"工事不要のホームWi-Fi",emoji:"📶"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9T23A2+3SPO+CKIQ1T",imgSrc300:"https://www23.a8.net/svt/bgt?aid=260530685593&wid=002&eno=01&mid=s00000017718076006000&mc=1",trackingImg300:"https://www18.a8.net/0.gif?a8mat=4B42RH+9T23A2+3SPO+CKIQ1T",label:"ahamo光",description:"安定した光回線で快適に使える",emoji:"📡"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100p03500otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100p03500otkn",label:"SoftBank光",description:"SoftBank光でネットも電話もおトクに",emoji:"📶"}],parking:[{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+9ZLUXM+3NAY+BYDTT",imgSrc300:"https://www24.a8.net/svt/bgt?aid=260530685604&wid=002&eno=01&mid=s00000017017002008000&mc=1",trackingImg300:"https://www15.a8.net/0.gif?a8mat=4B42RH+9ZLUXM+3NAY+BYDTT",label:"アキッパ",description:"スマホでかんたん駐車場運営",emoji:"🅿️"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100q0xm00otkn",label:"特P（トクP）",description:"自宅の駐車場を貸し出して副収入",emoji:"🚗"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100q26d00otkn",label:"特P（駐車場予約）",description:"全国の駐車場をスマホで予約",emoji:"🅿️"}],local:[{type:"text",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+53DJVE+5IMU+5YJRM",label:"ふるさと本舗",description:"全国の厳選した特産品にふるさと納税",emoji:"🎁",trackingImgText:"https://www19.a8.net/0.gif?a8mat=4B42RH+53DJVE+5IMU+5YJRM"}],child:[{type:"text",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6C128Q+503M+60H7M",label:"ベイビープラネット",description:"妊活・子育て中のママのための無料会員登録",emoji:"👶",trackingImgText:"https://www19.a8.net/0.gif?a8mat=4B42RH+6C128Q+503M+60H7M"},{type:"banner",href:"https://px.a8.net/svt/ejp?a8mat=4B42RH+6DTD22+503M+HVV0H",imgSrc300:"https://www24.a8.net/svt/bgt?aid=260530685386&wid=002&eno=01&mid=s00000023341003004000&mc=1",trackingImg300:"https://www10.a8.net/0.gif?a8mat=4B42RH+6DTD22+503M+HVV0H",label:"baby planet（ベビープラネット）",description:"妊活・子育て中のママのための無料会員登録",emoji:"👶"},{type:"banner",href:"https://h.accesstrade.net/sp/cc?rk=0100q4bd00otkn",imgSrc300:"https://h.accesstrade.net/sp/rr?rk=0100q4bd00otkn",label:"出産後の無料相談「ガーデン」",description:"産後ケアの無料相談サービス",emoji:"🍀"},{type:"text",href:"https://h.accesstrade.net/sp/cc?rk=0100pedh00otkn",label:"学資保険の無料相談「ガーデン」",description:"子どもの将来のために学資保険を無料相談",emoji:"🎓"}]};function CH(e){const t=["divorce-rate","unmarried-rate","unmarried-20s-male","unmarried-20s-female","unmarried-30s-female","unmarried-40s-male","unmarried-40s-female","male-parental-leave"],r=["life-expectancy","suicide-rate","obesity-rate","doctor-count","nurse-count","medical-cost","health-insurance","care-insurance","non-regular-rate","personal-bankruptcy","unemployment-rate"],n=["vacancy-rate","homeownership","house-floor-area","land-price-change","rent-price","detached-rate"],a=["vacancy-rate","homeownership","house-floor-area","disaster-risk","land-price-change"],o=["income","county-income","furusato-tax","fiscal-power"],s=["birth-rate","nursery-waiting","nursery-worker","lunch-fee","university-rate"],u=["migration-rate","working-age-rate","foreigner-rate","commute-time","job-opening-ratio","min-wage","avg-salary","avg-salary-female","forest-rate","sunshine-hours","clear-days"],f=["welfare-rate","care-worker","agriculture-output","agriculture","furusato-tax"],d=["car-ownership","traffic-accident","snow-days"];return t.includes(e)?{category:"marriage",ads:$t.marriage}:a.includes(e)?{category:"fire_insurance",ads:[...$t.fire_insurance||[],...$t.housing]}:r.includes(e)?{category:"insurance",ads:$t.insurance}:n.includes(e)?{category:"housing",ads:[...$t.housing,...$t.investment]}:o.includes(e)?{category:"investment",ads:$t.investment}:s.includes(e)?{category:"child",ads:$t.child}:u.includes(e)?{category:"migration",ads:$t.migration}:f.includes(e)?{category:"local",ads:$t.local}:d.includes(e)?{category:"parking",ads:$t.parking}:{category:"default",ads:[...$t.insurance,...$t.housing,...$t.investment,...$t.migration]}}function DH(e){return e[Math.floor(Math.random()*e.length)]}function MH(e){return e.label??(e.href?e.href.slice(-12):"unknown")}function RH(e){return e.href?e.href.includes("a8.net")?"a8":e.href.includes("accesstrade")?"accesstrade":"other":"unknown"}function VS(e,t,r,n){typeof window>"u"||typeof window.gtag!="function"||window.gtag("event",e,{stat_id:t,ad_label:MH(n),ad_category:r,ad_type:n.type,ad_network:RH(n)})}const GS={marriage:"出会いや結婚は環境も大切。スマホで始められる婚活サービスもあります。",insurance:"地域差があるからこそ、自分の備えは一度プロに無料相談を。",housing:"住まい選びはデータ比較から。資料請求や見積もりは無料です。",fire_insurance:"持ち家なら火災保険の見直しで保険料が下がることも。比較は無料です。",investment:"地域差を資産形成でカバーする選択肢も。まずは無料相談から。",child:"子育て環境の地域差に備えるなら、無料で使える相談サービスもあります。",migration:"環境を変えるなら、引越しや回線の一括比較で初期費用を抑えられます。",local:"気になる地域は、ふるさと納税で特産品を楽しみながら応援できます。",parking:"クルマの維持費にも地域差。駐車場の貸し借りで固定費を見直せます。",default:"データを見たついでに、暮らしの固定費も見直してみませんか。"};function IH(e,t){const r=Sj(e);if(!r||!r.data||r.data.length===0)return null;const n=r.data[0],a=r.data[r.data.length-1],o=f=>`${f.toFixed(r.unit==="円"||Number.isInteger(f)?0:2)}${r.unit}`;let s;if(a.value!==0&&n.value/a.value>=1.5){const f=(n.value/a.value).toFixed(1);s=`${r.title}は最高${n.prefecture}・最低${a.prefecture}で約${f}倍の差。`}else s=`${r.title}の全国トップは${n.prefecture}（${o(n.value)}）。`;const u=GS[t]??GS.default;return`${s}${u}`}function qv({statId:e}){const{category:t,ad:r}=D.useMemo(()=>{const{category:s,ads:u}=CH(e);return{category:s,ad:DH(u)}},[e]),n=D.useMemo(()=>IH(e,t),[e,t]);D.useEffect(()=>{VS("affiliate_impression",e,t,r)},[e,t,r]);const a=()=>VS("affiliate_click",e,t,r),o=n?y.jsx("div",{className:"mb-3 px-4 py-3 bg-[#EEF2FF]/60 rounded-lg w-full",children:y.jsxs("p",{className:"text-xs sm:text-sm text-[#1A1A1A] leading-relaxed",children:["💡 ",n]})}):null;return r.type==="banner"?y.jsxs("div",{className:"flex flex-col items-center",children:[o,y.jsx("p",{className:"text-xs text-[#717182] mb-2 self-start",children:"PR"}),r.imgSrc728&&y.jsxs("div",{className:"hidden sm:block",children:[y.jsx("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:a,children:y.jsx("img",{border:0,width:728,height:90,alt:"",src:r.imgSrc728})}),r.trackingImg728&&y.jsx("img",{border:0,width:1,height:1,src:r.trackingImg728,alt:""})]}),!r.imgSrc728&&r.imgSrc300&&y.jsxs("div",{className:"hidden sm:block",children:[y.jsx("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:a,children:y.jsx("img",{border:0,width:300,height:250,alt:"",src:r.imgSrc300})}),r.trackingImg300&&y.jsx("img",{border:0,width:1,height:1,src:r.trackingImg300,alt:""})]}),r.label&&y.jsx("div",{className:"hidden sm:block mt-2",children:y.jsxs("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:a,className:"text-xs text-[#3D52A0] hover:underline",children:[r.emoji??"📌"," ",r.label,r.description?` — ${r.description}`:""," →"]})}),y.jsxs("div",{className:"block sm:hidden w-full",children:[y.jsxs("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:a,className:"flex items-center gap-3 p-4 bg-[#F8F8F6] rounded-xl border border-[#E5E0D8]/50 group",children:[y.jsx("div",{className:"text-2xl",children:r.emoji??"📌"}),y.jsxs("div",{className:"flex-1",children:[y.jsx("div",{className:"text-sm font-medium text-[#3D52A0] group-hover:underline mb-0.5",children:r.label??"詳細はこちら"}),r.description&&y.jsx("div",{className:"text-xs text-[#717182] leading-relaxed",children:r.description})]}),y.jsx("div",{className:"text-[#3D52A0] text-sm",children:"→"})]}),(r.trackingImg728||r.trackingImg300)&&y.jsx("img",{border:0,width:1,height:1,src:r.trackingImg728??r.trackingImg300,alt:""})]})]}):y.jsxs("div",{children:[o,y.jsxs("div",{className:"bg-[#F8F8F6] rounded-xl border border-[#E5E0D8]/50 p-4",children:[y.jsx("p",{className:"text-xs text-[#717182] mb-2",children:"PR"}),y.jsxs("a",{href:r.href,rel:"nofollow",target:"_blank",onClick:a,className:"flex items-center gap-3 group",children:[y.jsx("div",{className:"text-2xl",children:r.emoji}),y.jsxs("div",{children:[y.jsx("div",{className:"text-sm font-medium text-[#3D52A0] group-hover:underline mb-1",children:r.label}),y.jsx("div",{className:"text-xs text-[#717182] leading-relaxed",children:r.description})]})]}),r.trackingImgText&&y.jsx("img",{border:0,width:1,height:1,src:r.trackingImgText,alt:""})]})]})}const ba=[{slug:"divorce-northland",category:"人口・世帯",title:"なぜ北陸3県は離婚率が低いのか？持ち家率・3世代同居・地域コミュニティの関係",summary:"富山・石川・福井の離婚率は全国最低水準。その背景には高い持ち家率と3世代同居の文化、地域コミュニティの強さがある。データで読み解く北陸の家族観。",date:"2026年5月",readTime:"約5分",tags:["離婚率","北陸","持ち家率","家族"]},{slug:"osaka-welfare",category:"社会保障",title:"大阪の生活保護率はなぜ全国平均の2倍なのか？都市集積と貧困の構造",summary:"大阪府の生活保護受給率33.5‰は全国最高。単身高齢者の集積、日雇い労働の歴史、釜ヶ崎（あいりん地区）の存在など、都市特有の貧困構造を解説。",date:"2026年5月",readTime:"約6分",tags:["生活保護","大阪","貧困","格差"]},{slug:"tokyo-doctor",category:"医療",title:"医師は東京に集中しているのか？意外な真実と地方医療の危機",summary:"医師数トップは実は東京ではなく京都。埼玉・千葉は深刻な医師不足。人口10万人対の医師数で見えてくる、首都圏ベッドタウンの医療格差。",date:"2026年5月",readTime:"約5分",tags:["医師数","医療格差","埼玉","京都"]},{slug:"akita-suicide",category:"健康・医療",title:"秋田県の自殺率が高い本当の理由——孤立・高齢化・冬の暗さ",summary:"秋田県の自殺率は22.6人/10万人で全国最高。高齢化・農村の孤立・日照時間の短さが重なる。一方で「自殺対策先進県」として対策の成果も出ている。",date:"2026年5月",readTime:"約5分",tags:["自殺率","秋田","高齢化","孤立"]},{slug:"okinawa-birth",category:"人口・世帯",title:"なぜ沖縄の出生率は日本一なのか？ゆいまーる文化と若年人口の力",summary:"沖縄県の合計特殊出生率1.70は全国最高。「ゆいまーる」と呼ばれる相互扶助の文化と若い人口構成が、他の都道府県にはない出生率を支えている。",date:"2026年5月",readTime:"約5分",tags:["出生率","沖縄","少子化","文化"]},{slug:"toyama-homeownership",category:"住宅・不動産",title:"富山県の持ち家率が日本一の理由——「嫁入り道具より家」の文化",summary:"富山県の持ち家率76.8%は全国最高。地価の安さ・積雪文化・「親が家を建てる」という慣習が組み合わさって生まれた、全国最高水準の持ち家社会。",date:"2026年5月",readTime:"約5分",tags:["持ち家率","富山","住宅","文化"]},{slug:"hokkaido-agriculture",category:"農業・産業",title:"北海道農業の圧倒的な実力——なぜ2位の5.7倍の農業産出額なのか",summary:"北海道の農業産出額は1兆2480億円で2位鹿児島の約5.7倍。広大な土地・大規模経営・多様な農産物・酪農の圧倒的シェアが日本の食を支えている。",date:"2026年5月",readTime:"約5分",tags:["農業","北海道","食料","産業"]},{slug:"tokyo-income-gap",category:"経済",title:"東京と青森の所得差247万円——でも「豊かさ」は逆転するかもしれない",summary:"県民所得は東京485万円・青森238万円で差は247万円。しかし家賃・物価・通勤時間を考慮すると、実質的な豊かさの差は意外と小さい。",date:"2026年5月",readTime:"約5分",tags:["所得格差","東京","移住","物価"]},{slug:"shiga-longevity",category:"健康・医療",title:"滋賀県男性の平均寿命が全国1位の理由——琵琶湖と健康長寿の秘密",summary:"男性平均寿命82.8歳で全国1位の滋賀県。肥満率の低さ・自殺率の低さ・食文化が長寿を支えている。最低の青森との差3.5年が生まれる背景を探る。",date:"2026年5月",readTime:"約5分",tags:["平均寿命","滋賀","長寿","健康"]},{slug:"vacancy-crisis",category:"住宅・不動産",title:"空き家900万戸時代——2033年に3軒に1軒が空き家になる日本",summary:"全国の空き家は過去最多の約900万戸。2033年には空き家率30%超という予測もある。「負動産」問題と移住活用のチャンス、両面からデータで読む。",date:"2026年5月",readTime:"約5分",tags:["空き家","不動産","移住","人口減少"]},{slug:"埼玉-medical-shortage",category:"医療",title:"埼玉はなぜ医師が少ないのか——首都圏最大の医療格差",summary:"埼玉県の医師数は人口10万人あたり174人で全国最低。700万人超の人口を抱えながら、なぜここまで医師が少ないのか。ベッドタウン問題の本質に迫る。",date:"2026年5月",readTime:"約4分",tags:["医師不足","埼玉","医療格差","首都圏"]},{slug:"minimum-wage-gap",category:"経済",title:"最低賃金の地域格差——東京1072円vs青森853円、月4万円の差",summary:"最低賃金は東京1072円・青森853円で219円の差。月160時間働くと月3.5万円、年間42万円の差になる。同じ日本でなぜこれだけ違うのか。",date:"2026年5月",readTime:"約4分",tags:["最低賃金","格差","経済","労働"]},{slug:"snow-country-life",category:"気候",title:"雪国の暮らしをデータで見る——秋田124日・沖縄0日の差が生む格差",summary:"北海道の年間雪日数は124日で3日に1日は雪が降る。雪国と南国の気候の差は、肥満率・自殺率・消防士数・医療コストに至るまで広く影響している。",date:"2026年5月",readTime:"約4分",tags:["雪日数","気候","東北","北海道"]},{slug:"ramen-regional",category:"食文化",title:"ラーメン消費量ランキングの意外な結果——山形1位・東京は意外と低い理由",summary:"総務省の家計調査でラーメン外食消費が最も多いのは山形県。東京は選択肢が多すぎてラーメンに特化しない。食文化と消費データから見える地域性。",date:"2026年5月",readTime:"約4分",tags:["ラーメン","食文化","山形","家計調査"]},{slug:"baseball-hometown",category:"スポーツ・文化",title:"プロ野球選手を最も輩出する県は和歌山——スポーツ選手輩出率の地域差",summary:"プロ野球選手の輩出率は和歌山4.46人/10万人が全国最高。沖縄・佐賀が続き、東京・山口は最低水準。なぜ特定の県からプロ選手が多く生まれるのか。",date:"2026年5月",readTime:"約4分",tags:["プロ野球","スポーツ","和歌山","沖縄"]},{slug:"tokyo-stats-overview",category:"人口・世帯",title:"東京都の統計まとめ——日本一の都市が抱える光と影",summary:"医師数・大学進学率・外国人比率はトップクラス。しかし出生率1.04は全国最低、通勤時間48分、待機児童1248人。東京の豊かさと課題をデータで読む。",date:"2026年5月",readTime:"約5分",tags:["東京","統計","都市問題","出生率"]},{slug:"okinawa-stats-overview",category:"人口・世帯",title:"沖縄県の統計まとめ——出生率日本一が抱える貧困と独自文化",summary:"出生率1.70は全国最高。しかし離婚率2.10も全国最高で、子どもの貧困率も高い。沖縄の強さと脆弱さをデータで読み解く。",date:"2026年5月",readTime:"約5分",tags:["沖縄","統計","出生率","貧困"]},{slug:"akita-stats-overview",category:"人口・世帯",title:"秋田県の統計まとめ——高齢化・人口減少の最前線で何が起きているか",summary:"高齢化率38.6%・2050年人口減少率-41.6%は全国最悪。自殺率・肥満率も最高水準。しかし「自殺対策先進県」として対策の実績もある。",date:"2026年5月",readTime:"約5分",tags:["秋田","高齢化","人口減少","統計"]},{slug:"fukui-happiness",category:"経済",title:"福井県はなぜ「幸福度ランキング」上位常連なのか——データで読む北陸の底力",summary:"人口が少なく地味に見える福井県だが、持ち家率・共働き率・学力・生活保護率など多くの指標で好成績。なぜ福井は「豊かな県」なのか。",date:"2026年5月",readTime:"約5分",tags:["福井","幸福度","北陸","生活水準"]},{slug:"commute-time-inequality",category:"経済",title:"通勤時間の格差——埼玉58分vs山形22分、年間300時間の差が生む人生の違い",summary:"総務省調査で埼玉県の片道平均通勤時間は58分と全国最長。山形・島根・高知の22分と比べると年間300時間以上の差になる。時間格差が出生率・睡眠・幸福度に与える影響。",date:"2026年5月",readTime:"約5分",tags:["通勤時間","埼玉","格差","ワークライフバランス"]},{slug:"agriculture-future",category:"農業・産業",title:"農業産出額ランキングから見える日本の食の未来——北海道1強と地方農業の可能性",summary:"北海道1兆2480億円は2位鹿児島の5.7倍。しかし農業従事者の高齢化・後継者不足は深刻だ。都道府県別データから日本農業の現在地と未来を読む。",date:"2026年5月",readTime:"約5分",tags:["農業","北海道","食料安全保障","産業"]},{slug:"young-unmarried-crisis",category:"人口・世帯",title:"30代男性の未婚率51.8%——データが示す「結婚しない日本」の実態",summary:"30代男性の未婚率は全国平均51.8%、東京では52.8%。1990年の32.6%から急増した背景には何があるのか。年代・地域・男女別データで読む未婚化の構造。",date:"2026年5月",readTime:"約5分",tags:["未婚率","少子化","婚活","男女"]},{slug:"foreign-resident-change",category:"人口・世帯",title:"外国人比率4.2%の東京と0.3%の秋田——多文化社会の地域差とこれから",summary:"東京の外国人比率4.2%は秋田0.3%の14倍。製造業・都市圏で高く地方で低い。コロナ後に回復した外国人人口の変化と、多文化共生の課題を読む。",date:"2026年5月",readTime:"約5分",tags:["外国人","多文化","移民","人口"]},{slug:"welfare-rate-regional",category:"社会保障",title:"生活保護率10倍格差の真実——大阪33.5‰と富山3.2‰は何が違うのか",summary:"都道府県別生活保護率は最高の大阪33.5‰と最低の富山3.2‰で10倍以上の差。単純な「怠け者が多い」論は誤りだ。産業史・家族構造・制度アクセスの差を読む。",date:"2026年5月",readTime:"約5分",tags:["生活保護","格差","大阪","富山"]},{slug:"hotspring-tourism",category:"観光・交流",title:"温泉地数ランキングから見える日本の観光資源——長野94カ所・大分の別格な存在",summary:"環境省データによると宿泊施設のある温泉地は長野県94カ所が全国最高。しかし源泉数では大分県が別格だ。温泉と地域経済の関係を読む。",date:"2026年5月",readTime:"約5分",tags:["温泉","観光","長野","大分"]},{slug:"fiscal-power-gap",category:"経済",title:"財政力指数が示す「強い自治体・弱い自治体」——東京1.064と秋田0.258の差",summary:"財政力指数は1以上が財政的に自立できる自治体を示す。東京都1.064は唯一の1超えで、秋田・島根・高知は0.26〜0.27と地方交付税なしでは成り立たない。",date:"2026年5月",readTime:"約5分",tags:["財政力","地方財政","格差","行政"]},{slug:"care-worker-shortage",category:"福祉・介護",title:"介護職員不足は「地方の問題」ではない——人口比で見ると都市部が深刻",summary:"介護職員数を人口比で見ると、東京都が最低水準。高齢者が増えるのに介護職員が足りない都市部の危機と、過疎地での担い手確保の両面から課題を読む。",date:"2026年5月",readTime:"約5分",tags:["介護","人手不足","高齢化","福祉"]},{slug:"alcohol-health-gap",category:"健康・医療",title:"飲酒率と自殺率の相関——東北・北海道でなぜ両方高いのか",summary:"習慣的飲酒率（週3日以上）は高知44.8%・秋田44.2%が全国最高。自殺率が高い地域と重なる傾向がある。寒冷地文化・孤立・精神的健康の三角関係を読む。",date:"2026年5月",readTime:"約5分",tags:["飲酒率","自殺","健康","東北"]},{slug:"internet-rate-gap",category:"情報通信",title:"インターネット利用率の地域格差——東京94%vs秋田77%が示すデジタル分断",summary:"総務省調査でインターネット利用率は東京94.2%・神奈川92.4%に対し秋田76.8%・高知77.8%と差がある。デジタル格差は教育・就労・行政サービスの格差に直結する。",date:"2026年5月",readTime:"約5分",tags:["インターネット","デジタル格差","情報通信","地域"]},{slug:"population-2040-forecast",category:"人口・世帯",title:"2040年の日本地図——人口が増える県・激減する県、その分かれ目はどこか",summary:"国立社会保障・人口問題研究所の推計によると、2040年に人口が増えるのは東京のみ（+3.3%）。秋田-28.5%・青森-26.2%・高知-23.7%が深刻。分かれ目の要因を読む。",date:"2026年5月",readTime:"約5分",tags:["人口予測","2040年","地方消滅","少子化"]},{slug:"sleep-time-productivity",category:"生活・インフラ",title:"平均睡眠時間と都市部の生産性ジレンマ——東京462分vs秋田518分が示すもの",summary:"総務省「社会生活基本調査」によると東京都民の平均睡眠時間は462分（約7時間42分）と全国最低。通勤時間の長さが睡眠を奪い、健康・生産性に影響する。",date:"2026年5月",readTime:"約5分",tags:["睡眠時間","健康","東京","生産性"]},{slug:"gyoza-ramen-culture",category:"食文化",title:"餃子消費量ランキングの意外な真実——宮崎94個が浜松・宇都宮を上回る理由",summary:"「餃子の街」で有名な浜松・宇都宮だが、人口比では宮崎県が94.6個/人と断トツ。なぜ宮崎で餃子消費が多いのか。家計調査が教える食文化の地域差。",date:"2026年5月",readTime:"約5分",tags:["餃子","食文化","宮崎","浜松"]},{slug:"crime-rate-decline",category:"社会問題",title:"刑法犯が20年で4分の1に——日本の治安改善の実態と残る地域差",summary:"警察庁データによると刑法犯認知件数は2003年の約285万件から2022年の約60万件と4分の1以下に激減。大阪528件vs秋田248件の地域差はなぜ生まれるのか。",date:"2026年5月",readTime:"約5分",tags:["犯罪率","治安","大阪","社会問題"]},{slug:"nursing-care-insurance",category:"社会保障",title:"介護保険料は老後のコスト——大阪7200円vs富山5600円、月1600円の差が生む格差",summary:"65歳以上が支払う介護保険料（第1号被保険者）は大阪府7200円・東京都6800円に対し富山県5600円と差がある。老後の生活コストを左右する見えない格差。",date:"2026年5月",readTime:"約5分",tags:["介護保険","老後","コスト","格差"]},{slug:"blood-donation-civic",category:"社会問題",title:"献血率が高い県・低い県——地域コミュニティへの参加意識がデータに出る",summary:"日本赤十字社データによると献血率は愛知・沖縄・静岡が上位で東北が低い傾向。献血は強制ではないため「自発的な社会参加意識」の指標として興味深い。",date:"2026年5月",readTime:"約5分",tags:["献血","社会参加","コミュニティ","健康"]},{slug:"pachinko-decline",category:"生活・インフラ",title:"パチンコ店が10年で4割減——警察庁データが示す業界縮小と地域差",summary:"警察庁データによるとパチンコ店数は2010年から2022年にかけて約4割減少。人口比では東北・北陸が多く沖縄・東京が少い。規制強化・スマホゲームとの競争が業界を直撃。",date:"2026年5月",readTime:"約5分",tags:["パチンコ","産業","規制","地域"]},{slug:"reading-time-education",category:"教育・文化",title:"電車で本を読む東京、ゆっくり食べる秋田——生活時間から見える地域の個性",summary:"読書時間は東京28分・秋田14分で東京が最長。食事時間は秋田102分・東京84分で秋田が最長。生活時間のデータが語る都市と地方の「時間の使い方」の違い。",date:"2026年5月",readTime:"約5分",tags:["読書時間","食事時間","生活習慣","地域"]},{slug:"j-league-regional",category:"スポーツ・文化",title:"Jリーガー輩出率で見る「サッカー文化の地域差」——大分・熊本・静岡が上位の理由",summary:"J1〜J3合計の選手輩出率は大分5.70人・熊本5.53人・静岡4.87人が上位。「サッカー王国静岡」は健在か。高知0人という衝撃の事実も。",date:"2026年5月",readTime:"約5分",tags:["Jリーグ","サッカー","静岡","スポーツ"]},{slug:"sumo-kagoshima",category:"スポーツ・文化",title:"鹿児島から力士が多く生まれる理由——奄美群島の相撲文化と輩出率の真実",summary:"力士輩出率は鹿児島1.47人が全国最高。特に奄美群島だけで計算すると10万人あたり11.5人と全国平均の約24倍。なぜ奄美から力士が多く生まれるのか。",date:"2026年5月",readTime:"約5分",tags:["相撲","鹿児島","奄美","スポーツ文化"]},{slug:"snow-days-vs-sunny",category:"気候",title:"年間雪日数124日の北海道と0日の沖縄——気候が人口・経済・健康に与える影響",summary:"北海道124日・青森119日の雪日数と沖縄0日・宮崎0日の差。気候の違いは肥満率・自殺率・消防士数・医療費・農業まで幅広く影響する。",date:"2026年5月",readTime:"約5分",tags:["雪日数","気候","北海道","沖縄"]},{slug:"hot-summer-inland",category:"気候",title:"なぜ群馬・埼玉は猛暑なのか——年間32日以上の真夏日と内陸盆地の熱",summary:"最高気温35℃以上の「猛暑日」が最も多いのは群馬県32.4日。埼玉28.4日・茨城24.8日と内陸の関東が上位。沖縄は意外にも4.2日と少ない理由も。",date:"2026年5月",readTime:"約5分",tags:["猛暑","群馬","気候","埼玉"]},{slug:"library-education",category:"教育・文化",title:"図書館数と教育格差——島根・高知で多く東京で少ない、人口比で見える真実",summary:"人口10万人あたりの図書館数は島根4.4館・高知4.2館が全国最高で東京2.2館が最低。図書館は「知の格差」を埋めるインフラとして機能しているか。",date:"2026年5月",readTime:"約5分",tags:["図書館","教育","島根","文化"]},{slug:"religion-culture-map",category:"文化・宗教",title:"宗教法人数が人口比で日本一の島根——神道・仏教文化と地域社会の関係",summary:"人口10万人あたりの宗教法人数は島根555法人が全国最高で神奈川85法人の約6倍。出雲大社を擁する島根と、宗教法人が密集する地域の文化的背景を読む。",date:"2026年5月",readTime:"約5分",tags:["宗教","文化","島根","神道"]},{slug:"vacation-home-vacant",category:"住宅・不動産",title:"山梨の空き家21.3%は「別荘地の放置」——空き家問題の二つの顔",summary:"山梨県の空き家率21.3%は全国2位だが、その中身は「別荘地の放置」と「過疎化による空き家」が混在する。空き家問題の種類によって対策は全く異なる。",date:"2026年5月",readTime:"約5分",tags:["空き家","山梨","別荘","地方移住"]},{slug:"hospital-count-gap",category:"医療",title:"人口10万人あたり病院数9.3院の高知と3.8院の埼玉——なぜこれほど違うのか",summary:"厚労省データによると病院数（人口10万人対）は高知9.3院・佐賀9.3院が最多で埼玉3.8院が最少。医師数と病院数の分布から見えてくる医療格差の構造。",date:"2026年5月",readTime:"約5分",tags:["病院数","医療格差","高知","埼玉"]},{slug:"rent-price-map",category:"住宅・不動産",title:"1K家賃98,000円の東京と30,000円の秋田——住居費格差が人生の選択を変える",summary:"国土交通省データによると1K平均家賃は東京9.8万円・神奈川8.4万円に対し秋田3.0万円・岩手3.2万円。年間差は80万円以上。家賃格差が出生率・移住・老後に与える影響。",date:"2026年5月",readTime:"約5分",tags:["家賃","住居費","格差","移住"]},{slug:"travel-consumption-economy",category:"観光・交流",title:"旅行消費額から見える観光経済の地域差——京都・沖縄・東京が牽引する構造",summary:"観光庁データによると1人あたり旅行消費額は京都・沖縄・東京が148千円と全国最高。秋田・岩手58〜64千円と約2.5倍の差。観光業が地域経済に与える影響。",date:"2026年5月",readTime:"約5分",tags:["旅行消費","観光","経済","地域"]},{slug:"single-parent-poverty",category:"社会問題",title:"ひとり親世帯と統計が示す「不可視の貧困」——離婚率・生活保護率・待機児童の連鎖",summary:"離婚率・ひとり親世帯率・子どもの貧困率・生活保護率には強い相関がある。沖縄や大都市圏で顕著に表れるこの連鎖構造をデータで読む。",date:"2026年5月",readTime:"約5分",tags:["ひとり親","貧困","離婚","社会問題"]},{slug:"population-density-life",category:"人口・世帯",title:"人口密度が暮らしを変える——1km²あたり6000人の東京と70人の高知の差",summary:"東京都の人口密度は約6000人/km²、高知県は約70人/km²と約85倍の差がある。密度の差はコンビニ数・通勤時間・医師数・家賃・孤独死リスクまで広く影響する。",date:"2026年5月",readTime:"約5分",tags:["人口密度","都市","地方","生活"]},{slug:"working-age-future",category:"人口・世帯",title:"生産年齢人口比率が示す「稼ぐ力」の地域差——東京65.4%と秋田52.8%の構造",summary:"15〜64歳の生産年齢人口比率は東京65.4%・沖縄63.4%が高く、秋田52.8%・高知57.8%が低い。この差が財政力・経済活力・介護負担に与える影響を読む。",date:"2026年5月",readTime:"約5分",tags:["生産年齢人口","高齢化","経済","財政"]},{slug:"saitama-commute-hell",category:"経済",title:"通勤時間58分——埼玉県民は年間480時間を電車で消耗している",summary:"埼玉県の平均通勤時間は片道58分で全国1位。年間250日換算で約480時間。山形22分との差が生む「見えない格差」とは何か。",date:"2026年6月",readTime:"約4分",tags:["通勤時間","埼玉","格差","ワークライフバランス"]},{slug:"osaka-crime-reality",category:"安全・社会",title:"大阪の犯罪件数は全国1位——でも「危険な街」は本当か？",summary:"大阪府の刑法犯認知件数は528件/10万人で全国最高。しかし東京は568件で実は上回る。認知件数の「カラクリ」と全国的な犯罪減少の実態を読む。",date:"2026年6月",readTime:"約4分",tags:["犯罪率","大阪","東京","安全"]},{slug:"tokyo-university-gap",category:"教育・子育て",title:"東京72%、秋田34%——大学進学率の格差が生む「人材の一方通行」",summary:"東京都の大学進学率72.4%に対し秋田県は34%。この38ポイント差が地方の人口流出と経済格差を構造的に生み出している。",date:"2026年6月",readTime:"約4分",tags:["大学進学率","教育格差","人口流出","地方"]},{slug:"fukui-welfare-lowest",category:"社会福祉",title:"福井の生活保護率は大阪の10分の1——「助けを求めない県」の光と影",summary:"福井県の生活保護率3.2‰は全国最低で大阪33.5‰の10分の1。北陸の家族文化が背景にあるが、制度を使わない文化の光と影を読む。",date:"2026年6月",readTime:"約4分",tags:["生活保護","福井","北陸","社会保障"]},{slug:"aichi-income-secret",category:"経済",title:"愛知の給与は大阪より57万円高い——トヨタが作った「ものづくり経済圏」の実力",summary:"愛知県の1人あたり県民所得は352万円で全国2位。大阪295万円との差57万円の背景にあるトヨタ経済圏の構造を読む。",date:"2026年6月",readTime:"約4分",tags:["所得","愛知","製造業","トヨタ"]},{slug:"okinawa-divorce-paradox",category:"人口・世帯",title:"出生率1位なのに離婚率も1位——沖縄県が示す「家族の多様性」",summary:"沖縄は出生率1.70で全国最高、離婚率2.10も全国最高。この一見矛盾する数字が示す、本土とは異なる沖縄の家族観とコミュニティの在り方。",date:"2026年6月",readTime:"約4分",tags:["沖縄","出生率","離婚率","家族"]},{slug:"tokyo-birth-rate-lowest",category:"人口・世帯",title:"東京の出生率1.04は全国最低——豊かなのになぜ子どもが生まれないのか",summary:"1人あたり所得全国1位の東京都が、出生率では全国最低の1.04。この逆説が示す「豊かさと少子化」の関係をデータで読み解く。",date:"2026年6月",readTime:"約4分",tags:["出生率","東京","少子化","豊かさ"]},{slug:"kyoto-doctor-paradox",category:"健康・医療",title:"医師数全国1位は東京ではなく京都——大学病院が地図を塗り替える",summary:"人口10万人対の医師数は京都338人が全国1位。埼玉174人は全国最低。大学病院の立地が医師分布を決める構造と、首都圏ベッドタウンの深刻な医療格差。",date:"2026年6月",readTime:"約4分",tags:["医師数","京都","医療格差","埼玉"]},{slug:"vacancy-opportunity",category:"住宅・不動産",title:"空き家率21%の山梨県は「チャンス」か「リスク」か——移住者が知るべき現実",summary:"山梨・秋田・和歌山で空き家率が20%超。安く住める「チャンス」の側面と、インフラ維持コスト・コミュニティ崩壊という「リスク」の側面を両方読む。",date:"2026年6月",readTime:"約4分",tags:["空き家","移住","山梨","不動産"]},{slug:"water-price-gap",category:"生活・インフラ",title:"水道料金は高知が最高、北海道が最低——月額1000円超の差が生まれる理由",summary:"高知県の水道料金は月約328円で全国最高、最低は北海道。山間部・過疎地域で高く、人口減少による水道事業の経営悪化が料金上昇を招いている実態。",date:"2026年6月",readTime:"約4分",tags:["水道料金","インフラ","格差","人口減少"]},{slug:"obesity-snow-country",category:"健康・医療",title:"肥満率1位は秋田県——雪国と肥満の切っても切れない関係",summary:"BMI25以上の肥満率は秋田県38.4%で全国最高。東北・北海道が上位を占める背景には冬の運動不足と食文化がある。都市部との差が示す「気候と健康」の関係。",date:"2026年6月",readTime:"約4分",tags:["肥満率","秋田","東北","健康"]},{slug:"religion-shimane",category:"文化・宗教",title:"宗教法人が最も多いのは島根県——「神の国」をデータで読む",summary:"人口10万人対の宗教法人数は島根555・鳥取485で全国トップ。出雲大社を筆頭とする古くからの神道文化が数字に反映されている。神奈川・埼玉は最低水準。",date:"2026年6月",readTime:"約4分",tags:["宗教","島根","神道","文化"]},{slug:"minimum-wage-real",category:"経済",title:"最低賃金の格差は年42万円——東京1072円vs青森853円の「同じ仕事、違う報酬」",summary:"最低賃金は東京1072円・青森853円で219円差。月160時間・年間で約42万円の格差になる。同じ仕事をしても都道府県で報酬が変わる現実をデータで見る。",date:"2026年6月",readTime:"約4分",tags:["最低賃金","格差","労働","経済"]},{slug:"crime-rate-decline-truth",category:"安全・社会",title:"日本の犯罪件数は20年で4分の1に——「体感治安」と統計の乖離",summary:"全国の刑法犯認知件数は2003年の約285万件から2022年には約70万件と4分の1に激減。しかし「街が危険になった」という体感は逆の傾向がある。なぜか。",date:"2026年6月",readTime:"約4分",tags:["犯罪率","治安","統計","体感"]},{slug:"nd40ea2bc5f14",category:"健康・食文化",title:"ラーメンをよく食べる県ほど、太っている？——消費量と肥満率を重ねたら見えた「食の地域差」",summary:"ラーメンをよく食べる県ほど、太っている？——消費量と肥満率を重ねたら見えた「食のについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["ラーメン","肥満率","食文化","地域差"]},{slug:"n3f73fc4b1acf",category:"社会問題",title:"生活保護が少ない県ほど、献血する人が多い——「助け合い文化」の地域差がデータに出た",summary:"生活保護が少ない県ほど、献血する人が多い——「助け合い文化」の地域差がデータに出についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["生活保護","献血","助け合い","地域差"]},{slug:"n1204afb95776",category:"教育・文化",title:"本をよく読む県ほど、大学に行く子が多い——でも一番読んでいるのは「通勤電車の東京」だった",summary:"本をよく読む県ほど、大学に行く子が多い——でも一番読んでいるのは「通勤電車の東京についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["読書","大学進学","東京","教育"]},{slug:"n3eaef144e9a7",category:"農業・気候",title:"一番暑い県が、農業で稼げていない——猛暑日ランキングと農業産出額の意外な関係",summary:"一番暑い県が、農業で稼げていない——猛暑日ランキングと農業産出額の意外な関係についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["猛暑","農業","気候","経済"]},{slug:"n8e5bcf6f8f01",category:"経済",title:"パチンコが多い県ほど、給料が低い——娯楽の選択肢と経済水準の切っても切れない関係",summary:"パチンコが多い県ほど、給料が低い——娯楽の選択肢と経済水準の切っても切れない関係についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["パチンコ","給与","格差","娯楽"]},{slug:"n916ea7613287",category:"経済",title:"転職で年収50万アップより、引っ越しで年収100万アップの方が現実的な県がある?",summary:"転職で年収50万アップより、引っ越しで年収100万アップの方が現実的な県がある?についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["転職","移住","年収","地域差"]},{slug:"nfe5252605e1a",category:"子育て・女性",title:"働きたいのに働けない、は県のせいかもしれない——保育所の数で、ママのキャリアが決まっている現実",summary:"働きたいのに働けない、は県のせいかもしれない——保育所の数で、ママのキャリアが決についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["保育所","女性就労","キャリア","待機児童"]},{slug:"n173f2a5a68b1",category:"経済",title:"地元に帰ったら年収が下がった——でも家賃と物価を引いたら、実は東京より豊かだった話",summary:"地元に帰ったら年収が下がった——でも家賃と物価を引いたら、実は東京より豊かだったについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["移住","年収","物価","東京"]},{slug:"nd03173ff7e9c",category:"人口・世帯",title:"一人で老いていくなら、東京より住みやすい県がある——独身のままでいることを決めた人へ",summary:"一人で老いていくなら、東京より住みやすい県がある——独身のままでいることを決めたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["独身","老後","移住","孤独死"]},{slug:"n943b413ed88b",category:"子育て・女性",title:"シングルマザーが住む県で、子どもの未来が変わる——離婚・待機児童・生活保護を重ねてわかること",summary:"シングルマザーが住む県で、子どもの未来が変わる——離婚・待機児童・生活保護を重ねについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["シングルマザー","待機児童","生活保護","格差"]},{slug:"n79651ac428e5",category:"経済",title:"時給853円で生きるということ——最低賃金で働く人が、住む県を間違えると詰む話",summary:"時給853円で生きるということ——最低賃金で働く人が、住む県を間違えると詰む話についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["最低賃金","貧困","地域差","雇用"]},{slug:"nda3300103606",category:"福祉・介護",title:"介護で仕事を辞めようとしているあなたへ——辞める前に、住む県を変えることを考えてほしい",summary:"介護で仕事を辞めようとしているあなたへ——辞める前に、住む県を変えることを考えてについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["介護離職","移住","介護職員","地域差"]},{slug:"n7041eec998a2",category:"教育・子育て",title:"秋田で生まれた子どもと東京で生まれた子どもは、スタートラインが38ポイント違う",summary:"秋田で生まれた子どもと東京で生まれた子どもは、スタートラインが38ポイント違うについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["教育格差","秋田","東京","大学進学"]},{slug:"nda1fc287b94c",category:"経済",title:"年金だけで生きていける県、生きていけない県——老後破産しないために、今から知っておきたいこと",summary:"年金だけで生きていける県、生きていけない県——老後破産しないために、今から知ってについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["年金","老後","物価","介護保険"]},{slug:"nbbf44c58cefd",category:"経済",title:"県を変えただけで手取りが増えた、という話を数字で確かめてみた",summary:"県を変えただけで手取りが増えた、という話を数字で確かめてみたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["移住","手取り","物価","最低賃金"]},{slug:"ne2101b6d0533",category:"経済",title:"老後の資金計算してたんだけど、住む場所次第で全然違うことに気づいた",summary:"老後の資金計算してたんだけど、住む場所次第で全然違うことに気づいたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["老後資金","移住","物価","介護"]},{slug:"n2189efae9752",category:"福祉・介護",title:"介護で限界になる前に知りたかったことが、データにあった",summary:"介護で限界になる前に知りたかったことが、データにあったについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["介護","データ","移住","医療"]},{slug:"naf1b196f8cf0",category:"教育・子育て",title:"子どもの進学率、県によってこんなに違うの知ってた？環境って残酷だなと思った話",summary:"子どもの進学率、県によってこんなに違うの知ってた？環境って残酷だなと思った話についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["大学進学","格差","環境","教育"]},{slug:"n763c9bf8b4f6",category:"人口・世帯",title:"地元好きに見てほしい、2050年の人口データを見てから少し考えが変わった",summary:"地元好きに見てほしい、2050年の人口データを見てから少し考えが変わったについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["人口減少","2050年","地方","移住"]},{slug:"n7346fd97d5ab",category:"経済",title:"沖縄で働く人の2人に1人が非正規で、個人破産も全国最多——この2つが重なる県で生きることの話",summary:"沖縄で働く人の2人に1人が非正規で、個人破産も全国最多——この2つが重なる県で生についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["沖縄","非正規","個人破産","格差"]},{slug:"n4b2ef9bf89cf",category:"人口・世帯",title:"男性が育休を取らない県ほど、離婚率が高い——データが示す「家事育児をしない夫」の代償",summary:"男性が育休を取らない県ほど、離婚率が高い——データが示す「家事育児をしない夫」のについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["育休","離婚率","家事","地域差"]},{slug:"n0c4c7f1e0869",category:"経済",title:"仕事は選り取り見取りなのに、給料が低い県がある——求人倍率と給与を重ねたら見えた構造",summary:"仕事は選り取り見取りなのに、給料が低い県がある——求人倍率と給与を重ねたら見えたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["求人倍率","給与","雇用","地域差"]},{slug:"n7b60e82024e5",category:"経済",title:"都市部の税金が地方に流れていく——ふるさと納税の「本当の勝者」は誰か",summary:"都市部の税金が地方に流れていく——ふるさと納税の「本当の勝者」は誰かについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["ふるさと納税","地方創生","税金","格差"]},{slug:"ne4ac214e17cc",category:"住宅・不動産",title:"東京の地価が7%上がっているのに、給料は追いついていない——家が買えなくなっていく話",summary:"東京の地価が7%上がっているのに、給料は追いついていない——家が買えなくなっていについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["地価","給与","東京","住宅"]},{slug:"nd5aaa0942552",category:"人口・世帯",title:"30代女性の未婚率、東京だけ44.4%——稼げる場所ほど結婚が遠くなる構造",summary:"30代女性の未婚率、東京だけ44.4%——稼げる場所ほど結婚が遠くなる構造についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["未婚率","東京","女性","結婚"]},{slug:"n217983341ee2",category:"人口・世帯",title:"20代で結婚したいなら、住む県を選んだ方がいいかもしれない",summary:"20代で結婚したいなら、住む県を選んだ方がいいかもしれないについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["結婚","未婚率","移住","出会い"]},{slug:"nc565a2976bd8",category:"住宅・不動産",title:"東京の地価が上がり続けているとき、地方の空き家は100万円で買える——不動産格差のリアル",summary:"東京の地価が上がり続けているとき、地方の空き家は100万円で買える——不動産格差についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["地価","空き家","東京","移住"]},{slug:"n5c495847d137",category:"医療・福祉",title:"看護師・介護士として働くなら、どの県を選ぶべきか——給与・忙しさ・住みやすさをデータで比べた",summary:"看護師・介護士として働くなら、どの県を選ぶべきか——給与・忙しさ・住みやすさをデについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["看護師","介護士","移住","給与"]},{slug:"n148b57b114c1",category:"医療",title:"歯医者に行きやすい県、行きにくい県——歯科医師数の格差が意外と生活に影響する話",summary:"歯医者に行きやすい県、行きにくい県——歯科医師数の格差が意外と生活に影響する話についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["歯科医師","医療格差","地域差","健康"]},{slug:"nad419a5b3716",category:"人口・世帯",title:"40代で独身の男性が最も多い県は東京——その20年後をデータで想像してみた",summary:"40代で独身の男性が最も多い県は東京——その20年後をデータで想像してみたについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["未婚","東京","孤独死","高齢化"]},{slug:"n83d02da6312d",category:"経済",title:"沖縄で働く人の4割が非正規で、40代になっても正社員になれていない",summary:"沖縄で働く人の4割が非正規で、40代になっても正社員になれていないについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["沖縄","非正規","雇用","格差"]},{slug:"ncac04aa6fca0",category:"生活・インフラ",title:"水道代が払えなくて給水停止になる世帯が、高知で一番多い理由",summary:"水道代が払えなくて給水停止になる世帯が、高知で一番多い理由についてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["水道料金","高知","貧困","生活"]},{slug:"nda70797e21ed",category:"経済",title:"フリーランスになる前に知っておきたい、住む県で健康保険料が年8万円変わるというデータ",summary:"フリーランスになる前に知っておきたい、住む県で健康保険料が年8万円変わるというデについてデータで解説。",date:"2026年6月",readTime:"約5分",tags:["健康保険","フリーランス","地域差","国保"]}],$H={"人口・世帯":"#3D52A0",社会保障:"#e67e22",医療:"#27ae60","健康・医療":"#16a34a","住宅・不動産":"#8b5cf6",経済:"#0891b2","農業・産業":"#65a30d",気候:"#0284c7",食文化:"#ca8a04","スポーツ・文化":"#e67e22"};function LH(){const e=Dt(),[t,r]=D.useState("すべて"),[n,a]=D.useState(""),o=["すべて",...Array.from(new Set(ba.map(u=>u.category)))],s=ba.filter(u=>{const f=t==="すべて"||u.category===t,d=n===""||u.tags.some(m=>m.includes(n));return f&&d});return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsxs("div",{className:"mb-8 sm:mb-10",children:[y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:"コラム"}),y.jsx("p",{className:"text-sm text-[#717182]",children:"統計データを深掘りして読み解くコラム記事"})]}),y.jsxs("div",{className:"bg-[#EEF2FF] border border-[#3D52A0]/20 rounded-xl p-4 mb-6 text-sm text-[#3D52A0]",children:[y.jsx("span",{className:"font-medium",children:"📎 リンクフリー："}),"当サイトの記事・データは出典（日本のいろんな統計マップ）を明記いただければ自由にご利用いただけます。"]}),y.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:o.map(u=>y.jsxs("button",{onClick:()=>r(u),className:`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${t===u?"bg-[#3D52A0] text-white border-[#3D52A0]":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:[u," ",u==="すべて"?`(${ba.length})`:`(${ba.filter(f=>f.category===u).length})`]},u))}),y.jsx("div",{className:"mb-6",children:y.jsx("input",{type:"text",value:n,onChange:u=>a(u.target.value),placeholder:"タグで絞り込む（例：移住、格差）",className:"w-full sm:w-64 px-4 py-2 border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#3D52A0]"})}),y.jsx("div",{className:"space-y-4",children:s.map(u=>{const f=$H[u.category]??"#3D52A0";return y.jsxs("div",{onClick:()=>e(`/column/${u.slug}`),className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 sm:p-6 cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all group",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-2 flex-wrap",children:[y.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full font-medium",style:{background:`${f}15`,color:f},children:u.category}),y.jsx("span",{className:"text-xs text-[#717182]",children:u.date}),y.jsx("span",{className:"text-xs text-[#717182]",children:u.readTime})]}),y.jsx("h2",{className:"text-base sm:text-lg font-bold mb-2 text-[#1A1A1A] leading-tight group-hover:text-[#3D52A0] transition-colors",style:{fontFamily:"var(--font-serif)"},children:u.title}),y.jsx("p",{className:"text-xs sm:text-sm text-[#717182] leading-relaxed mb-3",children:u.summary}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("div",{className:"flex gap-1.5 flex-wrap",children:u.tags.map(d=>y.jsxs("span",{className:"text-xs px-2 py-0.5 bg-[#F0EDE8] text-[#717182] rounded-full",children:["#",d]},d))}),y.jsx("span",{className:"text-xs text-[#3D52A0] font-medium opacity-0 group-hover:opacity-100 transition-opacity",children:"読む →"})]})]},u.slug)})})]}),y.jsx(Gt,{})]})}function FH(){const{id:e}=jc(),t=Dt(),[r,n]=D.useState("map"),a=Sj(e||"");if(!a)return y.jsx("div",{className:"min-h-screen bg-[#F8F8F6] flex items-center justify-center",children:y.jsxs("div",{className:"text-center",children:[y.jsx("h2",{className:"text-2xl mb-4",children:"データが見つかりません"}),y.jsx("button",{onClick:()=>t("/"),className:"text-[#3D52A0] hover:underline",children:"トップページに戻る"})]})});const o=Sk(a.data),s=a.data[0],u=a.data[a.data.length-1],f=u.value!==0?s.value/u.value:0,d=[{id:"map",label:"都道府県マップ"},{id:"ranking",label:"都道府県ランキング"},{id:"trend",label:"年次推移グラフ"},{id:"table",label:"全データ表"}],m=typeof window<"u"?window.location.href:`https://www.japan-stats.com/detail/${e}`,h=a.relatedIds?a.relatedIds.map(x=>yr.find(j=>j.id===x)).filter(Boolean):[],g=ba.map(x=>({col:x,score:x.tags.reduce((j,S)=>j+(S.length>=2&&a.title.includes(S)?S.length:0),0)})).filter(x=>x.score>0).sort((x,j)=>j.score-x.score).slice(0,4);return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[y.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-[#3D52A0] hover:gap-3 transition-all mb-8 group",children:[y.jsx(Rk,{className:"w-4 h-4"}),y.jsx("span",{className:"group-hover:underline",children:"一覧に戻る"})]}),y.jsxs("div",{className:"mb-10",children:[y.jsx("div",{className:"inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3D52A0]/10 to-[#5B6FB8]/10 text-sm text-[#3D52A0] mb-3",children:a.category}),y.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl mb-3 bg-gradient-to-r from-[#1A1A1A] to-[#3D52A0] bg-clip-text text-transparent",style:{fontFamily:"var(--font-serif)"},children:a.title}),y.jsx("p",{className:"text-base sm:text-lg text-[#717182] mb-2",children:a.description}),y.jsxs("p",{className:"text-sm text-[#717182]",children:["出典: ",a.source,"（",a.year,"年）"]})]}),y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",children:[{label:"最高値",value:`${s.value.toFixed(2)}${a.unit}`,sub:s.prefecture,color:"#C0392B"},{label:"最低値",value:`${u.value.toFixed(2)}${a.unit}`,sub:u.prefecture,color:"#27AE60"},{label:"全国平均",value:`${o.toFixed(2)}${a.unit}`,sub:"47都道府県平均",color:"#3D52A0"},{label:"格差倍率",value:f>0?`${f.toFixed(2)}倍`:"-",sub:"最高÷最低",color:"#E67E22"}].map(({label:x,value:j,sub:S,color:b})=>y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-5 hover:shadow-md transition-shadow",children:[y.jsx("div",{className:"text-xs text-[#717182] mb-2",children:x}),y.jsx("div",{className:"text-xl sm:text-2xl font-medium",style:{color:b,fontFamily:"monospace"},children:j}),y.jsx("div",{className:"text-xs text-[#717182] mt-2",children:S})]},x))}),y.jsx("div",{className:"mb-8",children:y.jsx(qv,{statId:e||""})}),y.jsx("div",{className:"mb-8 overflow-x-auto",children:y.jsx("div",{className:"flex gap-2 min-w-max bg-[#F8F8F6] p-2 rounded-xl",children:d.map(x=>y.jsx("button",{onClick:()=>n(x.id),className:`px-4 sm:px-6 py-3 rounded-lg transition-all whitespace-nowrap text-sm ${r===x.id?"bg-white shadow-sm text-[#3D52A0] font-medium":"text-[#717182] hover:text-[#1A1A1A] hover:bg-white/50"}`,children:x.label},x.id))})}),y.jsxs("div",{className:"mb-8",children:[r==="map"&&y.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[y.jsx("div",{className:"lg:col-span-2",children:y.jsx(Fk,{data:a.data,unit:a.unit})}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"分析"}),a.analysisLong?y.jsx("div",{className:"space-y-3",children:a.analysisLong.split("\\n\\n").map((x,j)=>y.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:x},j))}):y.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:a.analysis})]}),a.worldData&&a.worldData.length>0&&y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"世界との比較"}),y.jsx("div",{className:"space-y-2",children:a.worldData.map((x,j)=>{const S=a.worldData.map(N=>N.value),b=Math.min(...S),A=Math.max(...S),O=A>b?(x.value-b)/(A-b)*100:50,E=x.country.includes("日本");return y.jsxs("div",{className:`p-2.5 rounded-lg ${E?"bg-[#EEF2FF]":"bg-[#F8F8F6]"}`,children:[y.jsxs("div",{className:"flex justify-between text-xs mb-1.5",children:[y.jsx("span",{className:`font-medium ${E?"text-[#3D52A0]":"text-[#1A1A1A]"}`,children:x.country}),y.jsxs("span",{className:"font-mono text-[#717182]",children:[x.value.toFixed(2),x.unit||a.unit]})]}),y.jsx("div",{className:"h-1.5 bg-white rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${Math.max(O,5)}%`,backgroundColor:E?"#3D52A0":"#94a3b8"}})})]},j)})}),y.jsx("p",{className:"text-xs text-[#717182] mt-2",children:"出典: OECD統計・各国政府統計"})]}),(!a.worldData||a.worldData.length===0)&&y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsx("h3",{className:"text-base mb-3 text-[#3D52A0] font-bold",children:"全国データ"}),y.jsxs("div",{className:"space-y-2",children:[a.data.slice(0,5).map((x,j)=>y.jsxs("div",{className:`p-2.5 rounded-lg ${j===0?"bg-[#EEF2FF]":"bg-[#F8F8F6]"}`,children:[y.jsxs("div",{className:"flex justify-between text-xs mb-1.5",children:[y.jsxs("span",{className:`font-medium ${j===0?"text-[#3D52A0]":"text-[#1A1A1A]"}`,children:[j===0?"🥇 ":j===1?"🥈 ":j===2?"🥉 ":`${j+1}位 `,x.prefecture]}),y.jsxs("span",{className:"font-mono text-[#717182]",children:[x.value.toFixed(2),a.unit]})]}),y.jsx("div",{className:"h-1.5 bg-white rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full rounded-full",style:{width:`${x.value/a.data[0].value*100}%`,backgroundColor:j===0?"#3D52A0":"#94a3b8"}})})]},x.prefecture)),y.jsx("button",{onClick:()=>n("ranking"),className:"w-full text-xs text-[#3D52A0] hover:underline mt-1",children:"全47都道府県を見る →"})]})]})]})]}),r==="ranking"&&y.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[y.jsx("div",{className:"lg:col-span-2",children:y.jsx(PH,{data:a.data,average:o,unit:a.unit})}),y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"分析"}),y.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:a.analysis})]})]}),r==="trend"&&a.yearlyData&&a.yearlyData.length>0&&y.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[y.jsx("div",{className:"lg:col-span-2",children:y.jsx(kH,{data:a.yearlyData,unit:a.unit,source:a.source})}),y.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:[y.jsx("h3",{className:"text-lg mb-3 text-[#3D52A0] font-bold",style:{fontFamily:"var(--font-serif)"},children:"分析"}),y.jsx("p",{className:"text-sm leading-relaxed text-[#1A1A1A]",children:a.analysis})]})]}),r==="trend"&&(!a.yearlyData||a.yearlyData.length===0)&&y.jsx("div",{className:"bg-white rounded-xl p-8 text-center text-[#717182]",children:"年次推移データはありません"}),r==="table"&&y.jsx(TH,{data:a.data,average:o,unit:a.unit})]}),h.length>0&&y.jsxs("div",{className:"mb-8",children:[y.jsx("h3",{className:"text-sm font-bold text-[#717182] mb-3",children:"関連するデータ"}),y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:h.map(x=>x&&y.jsxs("button",{onClick:()=>t(`/detail/${x.id}`),className:"bg-white rounded-xl border border-[#E5E0D8]/50 p-4 text-left hover:border-[#3D52A0] hover:shadow-sm transition-all group",children:[y.jsx("div",{className:"text-xs text-[#717182] mb-1",children:x.category}),y.jsx("div",{className:"text-sm font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] leading-tight",children:x.title})]},x.id))})]}),g.length>0&&y.jsxs("div",{className:"mb-8",children:[y.jsx("h3",{className:"text-sm font-bold text-[#717182] mb-3",children:"📖 このデータを深掘りしたコラム"}),y.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:g.map(({col:x})=>y.jsxs("button",{onClick:()=>t(`/column/${x.slug}`),className:"bg-white rounded-xl border border-[#E5E0D8]/50 p-4 text-left hover:border-[#3D52A0] hover:shadow-sm transition-all group",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[y.jsx("span",{className:"text-xs px-2 py-0.5 bg-[#EEF2FF] text-[#3D52A0] rounded-full",children:x.category}),y.jsx("span",{className:"text-xs text-[#717182]",children:x.readTime})]}),y.jsx("div",{className:"text-sm font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] leading-snug",children:x.title})]},x.slug))})]}),y.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-[#E5E0D8]/50 p-6",children:y.jsx(MO,{id:`data_${e}`,title:`${a.title}｜日本のいろんな統計マップ`,url:m})})]}),y.jsx(Gt,{})]})}function BH(){const e=Dt();return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-8 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsx("h1",{className:"text-3xl font-bold mb-8 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:"プライバシーポリシー"}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-8 space-y-8 text-sm text-[#1A1A1A] leading-relaxed",children:[y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"1. 基本方針"}),y.jsx("p",{children:"日本のいろんな統計マップ（以下「当サイト」）は、ユーザーの個人情報保護を重要な責務と考え、個人情報の保護に関する法律（個人情報保護法）をはじめとする関連法令を遵守します。"})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"2. 収集する情報"}),y.jsx("p",{className:"mb-2",children:"当サイトでは、以下の情報を収集する場合があります。"}),y.jsxs("ul",{className:"list-disc list-inside space-y-1 text-[#717182]",children:[y.jsx("li",{children:"お問い合わせフォームからご入力いただいた情報（氏名・メールアドレス・お問い合わせ内容）"}),y.jsx("li",{children:"Googleアナリティクスによるアクセス解析情報（IPアドレス・ブラウザ情報・閲覧ページ等）"}),y.jsx("li",{children:"Googleアドセンスによる広告配信に関する情報"})]})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"3. Cookieの使用"}),y.jsx("p",{className:"mb-2",children:"当サイトでは、Google アナリティクスおよびGoogle アドセンスのためにCookieを使用しています。Cookieは、ブラウザの設定により無効化することができます。ただし、Cookieを無効にした場合、一部のサービスが正しく機能しない場合があります。"}),y.jsxs("p",{children:["Google アドセンスに関するCookieおよびデータ利用については、",y.jsx("a",{href:"https://policies.google.com/technologies/ads",target:"_blank",rel:"noopener noreferrer",className:"text-[#3D52A0] underline",children:"Googleのポリシー"}),"をご確認ください。"]})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"4. Googleアナリティクスについて"}),y.jsx("p",{children:"当サイトは、Googleが提供するアクセス解析ツール「Googleアナリティクス」を使用しています。Googleアナリティクスはデータの収集のためにCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。"})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"5. 掲載データについて"}),y.jsx("p",{children:"当サイトが掲載するデータは、厚生労働省・総務省・文化庁・文部科学省・農林水産省・内閣府等の政府機関が公表する統計データをもとに作成しています。データの正確性には十分注意していますが、最新情報については各省庁の公式サイトをご確認ください。"})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"6. 免責事項"}),y.jsx("p",{children:"当サイトに掲載されている情報の正確性・完全性について保証するものではありません。当サイトの情報を利用することによって生じた損害について、当サイトは一切の責任を負いません。"})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"7. 著作権"}),y.jsx("p",{children:"当サイトのコンテンツ（文章・グラフ・デザイン等）の著作権は当サイトに帰属します。政府統計データについては各省庁の利用規約に準じます。"})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"8. プライバシーポリシーの変更"}),y.jsx("p",{children:"本ポリシーの内容は、必要に応じて変更することがあります。変更後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。"})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-lg font-bold mb-3 text-[#3D52A0]",children:"9. お問い合わせ"}),y.jsxs("p",{children:["個人情報の取り扱いに関するお問い合わせは、",y.jsx("a",{href:"/contact",onClick:t=>{t.preventDefault(),e("/contact")},className:"text-[#3D52A0] underline",children:"お問い合わせフォーム"}),"よりご連絡ください。"]})]}),y.jsx("p",{className:"text-xs text-[#717182] pt-4 border-t border-[#E5E0D8]",children:"制定日：2024年1月1日　最終更新：2026年5月"})]})]}),y.jsx(Gt,{})]})}function qH(){const e=Dt();return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-8 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsx("h1",{className:"text-3xl font-bold mb-4 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:"お問い合わせ"}),y.jsx("p",{className:"text-[#717182] text-sm mb-8",children:"データの誤りのご指摘、掲載希望データのご要望、その他ご意見・ご感想など、お気軽にお問い合わせください。"}),y.jsx("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 overflow-hidden",children:y.jsx("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSdp6WOlO1RHpGkOif1KAnmYz1TE9QyiwpI6T7W6Us-TOUNuIg/viewform?embedded=true",width:"100%",height:"800",frameBorder:"0",marginHeight:0,marginWidth:0,title:"お問い合わせフォーム",style:{display:"block"},children:"読み込んでいます…"})})]}),y.jsx(Gt,{})]})}const zH={"divorce-northland":`
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
  `,nd40ea2bc5f14:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nd40ea2bc5f14" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n3f73fc4b1acf:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n3f73fc4b1acf" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n1204afb95776:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n1204afb95776" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n3eaef144e9a7:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n3eaef144e9a7" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n8e5bcf6f8f01:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n8e5bcf6f8f01" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n916ea7613287:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n916ea7613287" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nfe5252605e1a:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nfe5252605e1a" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n173f2a5a68b1:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n173f2a5a68b1" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nd03173ff7e9c:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nd03173ff7e9c" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n943b413ed88b:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n943b413ed88b" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n79651ac428e5:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n79651ac428e5" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nda3300103606:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nda3300103606" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n7041eec998a2:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n7041eec998a2" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nda1fc287b94c:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nda1fc287b94c" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nbbf44c58cefd:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nbbf44c58cefd" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',ne2101b6d0533:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/ne2101b6d0533" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n2189efae9752:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n2189efae9752" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',naf1b196f8cf0:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/naf1b196f8cf0" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n763c9bf8b4f6:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n763c9bf8b4f6" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n7346fd97d5ab:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n7346fd97d5ab" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n4b2ef9bf89cf:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n4b2ef9bf89cf" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n0c4c7f1e0869:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n0c4c7f1e0869" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n7b60e82024e5:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n7b60e82024e5" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',ne4ac214e17cc:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/ne4ac214e17cc" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nd5aaa0942552:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nd5aaa0942552" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n217983341ee2:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n217983341ee2" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nc565a2976bd8:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nc565a2976bd8" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n5c495847d137:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n5c495847d137" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n148b57b114c1:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n148b57b114c1" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nad419a5b3716:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nad419a5b3716" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',n83d02da6312d:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/n83d02da6312d" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',ncac04aa6fca0:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/ncac04aa6fca0" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>',nda70797e21ed:'<p>この記事はNoteで公開中です。下のリンクからお読みください。</p><p><a href="https://note.com/brisk_lupine5865/n/nda70797e21ed" target="_blank" rel="noopener noreferrer" style="color:#3D52A0;font-weight:bold;text-decoration:underline;">Noteで読む →</a></p>'},UH={"人口・世帯":"divorce-rate",社会保障:"welfare-rate",医療:"doctor-count","健康・医療":"doctor-count","住宅・不動産":"vacancy-rate",経済:"income","農業・産業":"migration-rate","安全・社会":"welfare-rate","教育・子育て":"birth-rate",社会問題:"divorce-rate",社会福祉:"welfare-rate","生活・インフラ":"vacancy-rate","文化・宗教":"migration-rate","観光・交流":"migration-rate",気候:"migration-rate",食文化:"migration-rate","スポーツ・文化":"migration-rate"},WH={"divorce-northland":"divorce-rate","osaka-welfare":"welfare-rate","tokyo-doctor":"doctor-count","akita-suicide":"suicide-rate","okinawa-birth":"birth-rate","toyama-homeownership":"homeownership","hokkaido-agriculture":"agriculture","tokyo-income-gap":"income","shiga-longevity":"life-expectancy","vacancy-crisis":"vacancy-rate","埼玉-medical-shortage":"doctor-count","minimum-wage-gap":"min-wage","snow-country-life":"snow-days","ramen-regional":"ramen-consumption","baseball-hometown":"baseball-player","tokyo-stats-overview":"divorce-rate","okinawa-stats-overview":"birth-rate","akita-stats-overview":"suicide-rate","fukui-happiness":"homeownership","commute-time-inequality":"commute-time","agriculture-future":"agriculture","young-unmarried-crisis":"unmarried-rate","foreign-resident-change":"foreigner-rate","welfare-rate-regional":"welfare-rate","hotspring-tourism":"hotspring-count","fiscal-power-gap":"fiscal-power","care-worker-shortage":"care-worker","alcohol-health-gap":"drinking-rate","internet-rate-gap":"internet-rate","saitama-commute-hell":"commute-time","osaka-crime-reality":"crime-rate","tokyo-university-gap":"university-rate","fukui-welfare-lowest":"welfare-rate","aichi-income-secret":"income","okinawa-divorce-paradox":"divorce-rate","tokyo-birth-rate-lowest":"birth-rate","kyoto-doctor-paradox":"doctor-count","vacancy-opportunity":"vacancy-rate","water-price-gap":"water-rate","obesity-snow-country":"obesity-rate","religion-shimane":"religion-count","minimum-wage-real":"income","crime-rate-decline-truth":"crime-rate","population-2040-forecast":"pop-future-2040","sleep-time-productivity":"sleep-time","gyoza-ramen-culture":"gyoza-consumption","crime-rate-decline":"crime-rate","nursing-care-insurance":"care-insurance","blood-donation-civic":"blood-donation","pachinko-decline":"pachinko-count","reading-time-education":"reading-time","j-league-regional":"j-player","sumo-kagoshima":"sumo-player","snow-days-vs-sunny":"snow-days","hot-summer-inland":"hot-days","library-education":"library-count","religion-culture-map":"religion-count","vacation-home-vacant":"vacancy-rate","hospital-count-gap":"hospital-count","rent-price-map":"rent-price","travel-consumption-economy":"travel-spend","single-parent-poverty":"divorce-rate","population-density-life":"working-age-rate","working-age-future":"working-age-rate",n4eb2573976a7:`
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
`};function HH(e){return e.trim().split(`

`).map((t,r)=>{const n=t.trim();if(!n)return null;if(n.startsWith("**")&&n.endsWith("**"))return y.jsx("h2",{className:"text-xl font-bold mt-8 mb-3 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:n.replace(/\*\*/g,"")},r);const a=n.split(/(\*\*[^*]+\*\*)/g);return y.jsx("p",{className:"text-[#1A1A1A] leading-loose mb-5 text-sm sm:text-base",children:a.map((o,s)=>o.startsWith("**")?y.jsx("strong",{children:o.replace(/\*\*/g,"")},s):o)},r)})}function KH(){const{slug:e}=jc(),t=Dt(),r=ba.find(o=>o.slug===e);if(!r)return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 py-16 text-center",children:[y.jsx("p",{className:"text-[#717182]",children:"記事が見つかりません"}),y.jsx("button",{onClick:()=>t("/column"),className:"mt-4 text-[#3D52A0] underline text-sm",children:"コラム一覧へ"})]}),y.jsx(Gt,{})]});const n=zH[r.slug],a=typeof window<"u"?window.location.href:`https://www.japan-stats.com/column/${e}`;return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[y.jsx("button",{onClick:()=>t("/column"),className:"text-[#3D52A0] text-sm mb-6 sm:mb-8 flex items-center gap-1 hover:underline",children:"← コラム一覧に戻る"}),y.jsxs("div",{className:"flex items-center gap-2 mb-3 sm:mb-4 flex-wrap",children:[y.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#3D52A0] font-medium",children:r.category}),y.jsx("span",{className:"text-xs text-[#717182]",children:r.date}),y.jsx("span",{className:"text-xs text-[#717182]",children:r.readTime})]}),y.jsx("h1",{className:"text-xl sm:text-2xl lg:text-3xl font-bold mb-5 sm:mb-6 text-[#1A1A1A] leading-tight",style:{fontFamily:"var(--font-serif)"},children:r.title}),y.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:r.tags.map(o=>y.jsxs("span",{className:"text-xs px-2.5 py-1 bg-[#F0EDE8] text-[#717182] rounded-full",children:["#",o]},o))}),y.jsx("div",{className:"bg-[#EEF2FF] border border-[#3D52A0]/20 rounded-xl p-4 mb-6 sm:mb-8 text-sm text-[#3D52A0] leading-relaxed",children:r.summary}),y.jsx("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8",children:n?HH(n):y.jsx("p",{className:"text-[#717182] text-sm",children:"この記事は現在準備中です。近日公開予定。"})}),y.jsx("div",{className:"mt-6",children:y.jsx(qv,{statId:UH[r.category]||"divorce-rate"})}),y.jsxs("div",{className:"mt-6 p-4 bg-[#F8F8F6] rounded-xl text-xs text-[#717182] space-y-1",children:[y.jsxs("p",{children:["📊 ",y.jsx("strong",{children:"データ出典："}),"記事内のデータは政府統計（厚生労働省・総務省・国土交通省等）をもとにしています。"]}),y.jsxs("p",{children:["📎 ",y.jsx("strong",{children:"リンクフリー："}),"出典（日本のいろんな統計マップ）を明記いただければ、記事・データの引用・転載は自由です。"]})]}),y.jsx("div",{className:"mt-6 bg-white rounded-2xl border border-[#E5E0D8]/50 p-6",children:y.jsx(MO,{id:`column_${e}`,title:`${r.title}｜日本のいろんな統計マップ`,url:a})}),y.jsxs("div",{className:"mt-6 p-5 bg-white rounded-2xl border border-[#E5E0D8]/50",children:[y.jsx("p",{className:"text-sm text-[#717182] mb-3",children:"関連する統計データも確認してみましょう"}),y.jsx("button",{onClick:()=>{const o=WH[e||""];t(o?`/detail/${o}`:"/")},className:"text-sm text-white bg-[#3D52A0] px-5 py-2.5 rounded-lg hover:bg-[#2d4090] transition-colors",children:"関連する統計データを見る →"})]})]}),y.jsx(Gt,{})]})}const RO=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"];function VH(e,t){let r=0,n=0;for(const{id:o,weight:s,inverse:u}of t){const f=yr.find(S=>S.id===o);if(!f)continue;const d=f.data.map(S=>S.value),m=Math.min(...d),h=Math.max(...d),g=f.data.find(S=>S.prefecture===RO[e]);if(!g)continue;const x=(g.value-m)/(h-m),j=u?(1-x)*100:x*100;a(j,s)}function a(o,s){r+=o*s,n+=s}return n>0?r/n:0}const a2=[{id:"childcare",label:"子育てしやすい街",emoji:"👶",description:"待機児童・保育士・給食費・出生率から算出",indicators:[{id:"nursery-waiting",weight:3,inverse:!0,label:"待機児童少"},{id:"nursery-worker",weight:2,label:"保育士多"},{id:"lunch-fee",weight:2,inverse:!0,label:"給食費安"},{id:"birth-rate",weight:3,label:"出生率高"}]},{id:"elderly",label:"老後安心な街",emoji:"🏥",description:"医師数・看護師数・介護職員・平均寿命から算出",indicators:[{id:"doctor-count",weight:3,label:"医師多"},{id:"nurse-count",weight:2,label:"看護師多"},{id:"care-worker",weight:3,label:"介護職員多"},{id:"life-expectancy",weight:2,label:"長寿"}]},{id:"youth",label:"若者が活躍できる街",emoji:"🚀",description:"平均給与・大学進学率・外国人比率から算出",indicators:[{id:"income",weight:3,label:"給与高"},{id:"university-rate",weight:2,label:"大学進学率高"},{id:"foreigner-rate",weight:1,label:"外国籍高"},{id:"commute-time",weight:2,inverse:!0,label:"通勤短"}]},{id:"single",label:"単身者が住みやすい街",emoji:"🏙️",description:"通勤時間・コンビニ密度・犯罪率・給与から算出",indicators:[{id:"commute-time",weight:2,inverse:!0,label:"通勤短"},{id:"conveni-count",weight:2,label:"コンビニ多"},{id:"crime-rate",weight:3,inverse:!0,label:"犯罪少"},{id:"income",weight:3,label:"給与高"}]},{id:"childcare-cost",label:"子育てコスパが良い街",emoji:"💰",description:"給食費・待機児童・水道料金から算出",indicators:[{id:"lunch-fee",weight:3,inverse:!0,label:"給食費安"},{id:"nursery-waiting",weight:3,inverse:!0,label:"待機児童少"},{id:"water-rate",weight:2,inverse:!0,label:"水道安"},{id:"homeownership",weight:2,label:"持ち家率高"}]},{id:"income-rank",label:"給与が高い街",emoji:"💴",description:"平均給与・平均年収から算出",indicators:[{id:"income",weight:4,label:"給与高"},{id:"avg-salary",weight:3,label:"平均年収高"},{id:"min-wage",weight:2,label:"最低賃金高"}]},{id:"cost-performance",label:"コスト最強の街",emoji:"📊",description:"給与・空き家率・水道料金・物価から算出",indicators:[{id:"income",weight:2,label:"給与高"},{id:"vacancy-rate",weight:2,label:"空き家多"},{id:"water-rate",weight:2,inverse:!0,label:"水道安"},{id:"cpi-index",weight:3,inverse:!0,label:"物価安"},{id:"commute-time",weight:2,inverse:!0,label:"通勤短"}]},{id:"public-servant",label:"公務員になりやすい街",emoji:"🏛️",description:"警察官・消防員の人口比から算出",indicators:[{id:"police-count",weight:3,label:"警察官多"},{id:"firefighter-count",weight:3,label:"消防員多"}]},{id:"longevity",label:"長生きできる街",emoji:"🌿",description:"平均寿命・肥満率・自殺率から算出",indicators:[{id:"life-expectancy",weight:4,label:"長寿"},{id:"obesity-rate",weight:3,inverse:!0,label:"肥満率低"},{id:"suicide-rate",weight:3,inverse:!0,label:"自殺率低"}]},{id:"medical",label:"医療が充実している街",emoji:"⚕️",description:"医師・看護師・歯科医師・病院数から算出",indicators:[{id:"doctor-count",weight:3,label:"医師多"},{id:"nurse-count",weight:2,label:"看護師多"},{id:"dentist-count",weight:2,label:"歯科医師多"},{id:"hospital-count",weight:3,label:"病院多"}]},{id:"mental-health",label:"精神的に健康な街",emoji:"🧘",description:"自殺率・孤独死リスク・犯罪率から算出",indicators:[{id:"suicide-rate",weight:4,inverse:!0,label:"自殺率低"},{id:"lonely-death",weight:3,inverse:!0,label:"孤独死リスク低"},{id:"crime-rate",weight:3,inverse:!0,label:"犯罪率低"}]},{id:"no-obesity",label:"肥満になりにくい街",emoji:"🥗",description:"肥満率・飲酒率・喫煙率から算出",indicators:[{id:"obesity-rate",weight:4,inverse:!0,label:"肥満率低"},{id:"drinking-rate",weight:2,inverse:!0,label:"飲酒率低"},{id:"smoking-rate",weight:2,inverse:!0,label:"喫煙率低"}]},{id:"safety",label:"犯罪が少ない街",emoji:"🛡️",description:"刑法犯認知件数・警察官数から算出",indicators:[{id:"crime-rate",weight:5,inverse:!0,label:"犯罪率低"},{id:"police-count",weight:2,label:"警察官多"}]},{id:"no-lonely",label:"孤独になりにくい街",emoji:"❤️",description:"孤独死リスク・未婚率・離婚率から算出",indicators:[{id:"lonely-death",weight:3,inverse:!0,label:"孤独死リスク低"},{id:"unmarried-rate",weight:2,inverse:!0,label:"未婚率低"},{id:"divorce-rate",weight:2,inverse:!0,label:"離婚率低"}]},{id:"diversity",label:"外国人と共生できる街",emoji:"🌍",description:"外国人比率・大学進学率から算出",indicators:[{id:"foreigner-rate",weight:5,label:"外国籍多"},{id:"university-rate",weight:2,label:"高学歴率高"}]},{id:"equality",label:"格差が少ない街",emoji:"⚖️",description:"生活保護率・犯罪率・自殺率から算出",indicators:[{id:"welfare-rate",weight:3,inverse:!0,label:"生活保護率低"},{id:"crime-rate",weight:2,inverse:!0,label:"犯罪率低"},{id:"suicide-rate",weight:2,inverse:!0,label:"自殺率低"}]},{id:"homeowner",label:"持ち家を持ちやすい街",emoji:"🏡",description:"持ち家率・床面積から算出",indicators:[{id:"homeownership",weight:4,label:"持ち家率高"},{id:"house-floor-area",weight:3,label:"床面積広"}]},{id:"no-commute",label:"通勤ストレスが少ない街",emoji:"🚶",description:"通勤時間から算出",indicators:[{id:"commute-time",weight:5,inverse:!0,label:"通勤短"},{id:"conveni-count",weight:1,label:"生活利便性"}]},{id:"vacant-home",label:"空き家活用で格安に住める街",emoji:"🏚️",description:"空き家率・物価から算出",indicators:[{id:"vacancy-rate",weight:5,label:"空き家多"},{id:"cpi-index",weight:2,inverse:!0,label:"物価安"}]},{id:"stable-marriage",label:"離婚しにくい街",emoji:"💍",description:"離婚率・孤独死リスクから算出",indicators:[{id:"divorce-rate",weight:5,inverse:!0,label:"離婚率低"},{id:"lonely-death",weight:2,inverse:!0,label:"孤独リスク低（参考）"}]},{id:"culture",label:"文化・娯楽が豊かな街",emoji:"🎭",description:"宗教施設数・日照時間から算出",indicators:[{id:"religion-count",weight:4,label:"宗教施設多"},{id:"sunshine-hours",weight:2,label:"日照多"}]},{id:"farming",label:"農業で自給自足できる街",emoji:"🌾",description:"農業産出額から算出",indicators:[{id:"agriculture",weight:5,label:"農業産出額高"},{id:"vacancy-rate",weight:1,label:"空き家多"}]},{id:"marriage-20s",label:"20代で結婚できる街",emoji:"💒",description:"20代未婚率・出生率から算出",indicators:[{id:"unmarried-20s-male",weight:3,label:"20代男性未婚低"},{id:"unmarried-20s-female",weight:3,label:"20代女性未婚低"},{id:"birth-rate",weight:2,label:"出生率高"},{id:"divorce-rate",weight:1,inverse:!0,label:"離婚率低"}]},{id:"marriage-30s",label:"30代で結婚できる街",emoji:"💒",description:"30代未婚率・離婚率・出生率から算出",indicators:[{id:"unmarried-rate",weight:3,label:"30代男性未婚低"},{id:"unmarried-30s-female",weight:3,label:"30代女性未婚低"},{id:"birth-rate",weight:2,label:"出生率高"},{id:"divorce-rate",weight:1,inverse:!0,label:"離婚率低"}]},{id:"marriage-40s",label:"40代で結婚できる街",emoji:"💒",description:"40代未婚率・再婚率・出生率から算出",indicators:[{id:"unmarried-40s-male",weight:3,label:"40代男性未婚低"},{id:"unmarried-40s-female",weight:3,label:"40代女性未婚低"},{id:"birth-rate",weight:2,label:"出生率高"},{id:"divorce-rate",weight:1,inverse:!0,label:"離婚率低（参考）"}]},{id:"medical-career",label:"医療職として働きやすい街",emoji:"👨‍⚕️",description:"医師・看護師・薬剤師数から算出",indicators:[{id:"nurse-count",weight:3,label:"看護師多"},{id:"doctor-count",weight:2,label:"医師多"},{id:"pharmacist-count",weight:2,label:"薬剤師多"},{id:"hospital-count",weight:2,label:"病院多"}]},{id:"care-career",label:"介護・保育として働きやすい街",emoji:"🤝",description:"介護職員・保育士数から算出",indicators:[{id:"care-worker",weight:4,label:"介護職員多"},{id:"nursery-worker",weight:3,label:"保育士多"}]},{id:"future-growth",label:"将来も人口が維持される街",emoji:"📈",description:"2040年・2050年人口維持率から算出",indicators:[{id:"pop-future-2040",weight:3,label:"2040年人口維持"},{id:"pop-future-2050",weight:3,label:"2050年人口維持"},{id:"migration-rate",weight:2,label:"転入超過"}]}],XS=[{label:"ライフステージ",ids:["childcare","elderly","youth","single","childcare-cost"]},{label:"経済・仕事",ids:["income-rank","cost-performance","public-servant"]},{label:"健康・医療",ids:["longevity","medical","mental-health","no-obesity"]},{label:"安全・社会",ids:["safety","no-lonely","diversity","equality"]},{label:"住宅環境",ids:["homeowner","no-commute","vacant-home"]},{label:"結婚チャンス",ids:["marriage-20s","marriage-30s","marriage-40s","stable-marriage"]},{label:"職業・未来",ids:["medical-career","care-career","future-growth","farming","culture"]}],GH={ライフステージ:"birth-rate","経済・仕事":"income","健康・医療":"doctor-count","安全・社会":"welfare-rate",住宅環境:"vacancy-rate",結婚チャンス:"divorce-rate","職業・未来":"migration-rate"};function XH(){var h,g;const e=Dt(),[t,r]=D.useState("childcare"),[n,a]=D.useState("ライフステージ"),o=a2.find(x=>x.id===t),s=RO.map((x,j)=>({pref:x,score:VH(j,o.indicators)})).sort((x,j)=>j.score-x.score).map((x,j)=>({...x,rank:j+1})),u="https://www.japan-stats.com/ranking",f=`「${o.label}」ランキング 1位は${(h=s[0])==null?void 0:h.pref}！（スコア${(g=s[0])==null?void 0:g.score.toFixed(1)}点）政府統計データをもとに算出`,d=`https://twitter.com/intent/tweet?text=${encodeURIComponent(f)}&url=${encodeURIComponent(u)}&hashtags=日本の統計マップ,都道府県ランキング`,m=GH[n]||"welfare-rate";return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold mb-2 text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:"おすすめ都道府県ランキング"}),y.jsx("p",{className:"text-sm text-[#717182] mb-8",children:"政府統計データをもとに複数の指標を組み合わせて算出"}),y.jsx("div",{className:"overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-4",children:y.jsx("div",{className:"flex gap-2 min-w-max pb-2",children:XS.map(x=>y.jsx("button",{onClick:()=>{a(x.label),r(a2.find(j=>x.ids.includes(j.id)).id)},className:`px-3 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap ${n===x.label?"bg-[#3D52A0] text-white border-[#3D52A0]":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:x.label},x.label))})}),y.jsx("div",{className:"overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-6",children:y.jsx("div",{className:"flex gap-2 min-w-max pb-2",children:a2.filter(x=>{var j;return(j=XS.find(S=>S.label===n))==null?void 0:j.ids.includes(x.id)}).map(x=>y.jsxs("button",{onClick:()=>r(x.id),className:`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm border transition-all whitespace-nowrap ${t===x.id?"bg-white text-[#3D52A0] border-[#3D52A0] shadow-sm font-medium":"bg-white/60 text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:[y.jsx("span",{children:x.emoji}),x.label]},x.id))})}),y.jsx("div",{className:"mb-6",children:y.jsx(qv,{statId:m})}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 overflow-hidden shadow-sm",children:[y.jsxs("div",{className:"px-6 py-5 border-b border-[#E5E0D8] bg-gradient-to-r from-[#F8F8F6] to-white",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[y.jsx("span",{className:"text-2xl",children:o.emoji}),y.jsx("h2",{className:"text-lg font-bold text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:o.label})]}),y.jsx("p",{className:"text-xs text-[#717182] mb-3",children:o.description}),y.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:o.indicators.map(x=>y.jsxs("button",{onClick:()=>e(`/detail/${x.id}`),className:"text-xs px-2.5 py-1 bg-[#EEF2FF] text-[#3D52A0] rounded-full hover:bg-[#3D52A0] hover:text-white transition-colors",children:[x.label," →"]},x.id))}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-xs text-[#717182]",children:"シェア："}),y.jsxs("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-xs text-white bg-black px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors",children:[y.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Xでシェア"]}),y.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${f} ${u}`),className:"text-xs text-[#717182] bg-[#F0EDE8] px-3 py-1.5 rounded-lg hover:bg-[#E5E0D8] transition-colors",children:"URLコピー"})]})]}),y.jsx("div",{className:"divide-y divide-[#F0EDE8]",children:s.map(({pref:x,score:j,rank:S})=>y.jsxs("div",{className:`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#F8F8F6] transition-colors ${S<=3?"bg-gradient-to-r from-[#FFFBEB]/30 to-transparent":""}`,children:[y.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${S===1?"bg-yellow-100 text-yellow-700 border-yellow-300":S===2?"bg-gray-100 text-gray-600 border-gray-300":S===3?"bg-orange-100 text-orange-700 border-orange-300":"bg-white text-[#717182] border-[#E5E0D8]"}`,children:S<=3?["🥇","🥈","🥉"][S-1]:S}),y.jsx("div",{className:"flex-1 min-w-0",children:y.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(x)}`),className:"font-medium text-sm sm:text-base text-[#1A1A1A] hover:text-[#3D52A0] transition-colors",children:x})}),y.jsx("div",{className:"flex-1 hidden sm:block",children:y.jsx("div",{className:"h-2 bg-[#F0EDE8] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-[#3D52A0] to-[#6B82C8] rounded-full",style:{width:`${j}%`}})})}),y.jsxs("div",{className:"flex-shrink-0 text-right",children:[y.jsx("div",{className:"text-base sm:text-lg font-bold text-[#3D52A0]",children:j.toFixed(1)}),y.jsx("div",{className:"text-xs text-[#717182]",children:"/ 100"})]})]},x))})]}),y.jsxs("div",{className:"mt-4 p-4 bg-[#F8F8F6] rounded-xl text-xs text-[#717182] space-y-1",children:[y.jsx("p",{children:"※ スコアは複数の統計指標を独自の重み付けで0〜100点に正規化し加重平均した参考値です。"}),y.jsx("p",{children:"※ 使用データは政府公開統計をもとにしていますが、一部に推計値を含みます。正確な数値は各省庁の公開統計をご確認ください。"}),y.jsx("p",{children:"※ ランキング結果は特定の地域を推薦するものではありません。"})]})]}),y.jsx(Gt,{})]})}const ky=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"],Ko=[{id:"priority",text:"生活で一番重視することは？",emoji:"🎯",options:[{label:"💰 収入・経済",value:"income"},{label:"🏥 医療・健康",value:"medical"},{label:"👶 子育て",value:"childcare"},{label:"🏠 住環境・広さ",value:"housing"},{label:"🌿 自然・のんびり",value:"nature"}]},{id:"lifestyle",text:"理想のライフスタイルは？",emoji:"🏙️",options:[{label:"🌆 都市派（便利さ・刺激重視）",value:"urban"},{label:"🌾 田舎派（自然・静かさ重視）",value:"rural"},{label:"⚖️ バランス重視",value:"balanced"}]},{id:"family",text:"家族構成・ライフステージは？",emoji:"👨‍👩‍👧",options:[{label:"🧍 独身",value:"single"},{label:"💑 既婚・子なし",value:"couple"},{label:"👶 子育て中",value:"parent"},{label:"🧓 老後・シニア",value:"senior"}]},{id:"commute",text:"通勤・働き方について",emoji:"🚃",options:[{label:"⚡ 通勤短い方がいい",value:"short"},{label:"💻 リモートワーク中心",value:"remote"},{label:"🤷 気にしない",value:"any"}]},{id:"climate",text:"気候・天気の好みは？",emoji:"☀️",options:[{label:"☀️ 晴れが多い・暖かい",value:"sunny"},{label:"❄️ 雪・四季がはっきり",value:"snowy"},{label:"🌧️ どちらでも",value:"any"}]},{id:"finance",text:"お金・コストについて",emoji:"💴",options:[{label:"📈 収入・稼ぎを最優先",value:"earn"},{label:"📉 生活コストを下げたい",value:"save"},{label:"🏡 持ち家・広い家に住みたい",value:"house"}]}],YH=[{id:"income",label:"県民所得",good:"高い",bad:"低い"},{id:"avg-salary",label:"平均給与",good:"高い",bad:"低い"},{id:"doctor-count",label:"医師数",good:"多い",bad:"少ない"},{id:"nurse-count",label:"看護師数",good:"多い",bad:"少ない"},{id:"hospital-count",label:"病院数",good:"多い",bad:"少ない"},{id:"life-expectancy",label:"平均寿命",good:"長い",bad:"短い"},{id:"crime-rate",label:"犯罪率",good:"低い",bad:"高い",inverse:!0},{id:"commute-time",label:"通勤時間",good:"短い",bad:"長い",inverse:!0},{id:"nursery-waiting",label:"待機児童",good:"少ない",bad:"多い",inverse:!0},{id:"lunch-fee",label:"給食費",good:"安い",bad:"高い",inverse:!0},{id:"vacancy-rate",label:"空き家率",good:"活用しやすい",bad:"少ない"},{id:"homeownership",label:"持ち家率",good:"高い",bad:"低い"},{id:"house-floor-area",label:"家の広さ",good:"広い",bad:"狭い"},{id:"rent-price",label:"家賃",good:"安い",bad:"高い",inverse:!0},{id:"sunshine-hours",label:"日照時間",good:"長い",bad:"短い"},{id:"clear-days",label:"快晴日数",good:"多い",bad:"少ない"},{id:"cpi-index",label:"物価",good:"低い",bad:"高い",inverse:!0},{id:"obesity-rate",label:"肥満率",good:"低い",bad:"高い",inverse:!0},{id:"suicide-rate",label:"自殺率",good:"低い",bad:"高い",inverse:!0},{id:"birth-rate",label:"出生率",good:"高い",bad:"低い"},{id:"fiscal-power",label:"財政力",good:"強い",bad:"弱い"},{id:"internet-rate",label:"ネット普及率",good:"高い",bad:"低い"},{id:"agriculture",label:"農業産出額",good:"多い",bad:"少ない"},{id:"pop-future-2040",label:"2040年人口維持",good:"維持",bad:"減少大",inverse:!1}];function QH(e){const t=[];for(const r of YH){const n=yr.find(f=>f.id===r.id);if(!n)continue;const a=n.data.find(f=>f.prefecture===e);if(!a)continue;const o=n.data.length,s=a.rank/o,u=r.inverse?s>=.7:s<=.3;t.push({id:r.id,label:r.label,rank:a.rank,total:o,value:a.value,unit:n.unit,isGood:u,good:r.good,bad:r.bad})}return t}function YS(e){const t=QH(e),r=t.filter(a=>a.isGood).sort((a,o)=>a.rank-o.rank).slice(0,5),n=t.filter(a=>!a.isGood).sort((a,o)=>o.rank-a.rank).slice(0,3);return{strengths:r,weaknesses:n}}function JH(e,t){let r=0,n=0;const a=s=>{const u=yr.find(g=>g.id===s);if(!u)return 50;const f=u.data.map(g=>g.value),d=Math.min(...f),m=Math.max(...f),h=u.data.find(g=>g.prefecture===ky[e]);return h?(h.value-d)/(m-d)*100:50},o=(s,u)=>{r+=s*u,n+=u};return t.priority==="income"?(o(a("income"),4),o(a("avg-salary"),3),o(a("min-wage"),2),o(a("fiscal-power"),2)):t.priority==="medical"?(o(a("doctor-count"),3),o(a("nurse-count"),3),o(a("hospital-count"),2),o(a("life-expectancy"),2)):t.priority==="childcare"?(o(100-a("nursery-waiting"),3),o(a("nursery-worker"),3),o(100-a("lunch-fee"),2),o(a("birth-rate"),2)):t.priority==="housing"?(o(a("homeownership"),3),o(a("house-floor-area"),3),o(a("detached-rate"),2),o(100-a("rent-price"),2)):t.priority==="nature"&&(o(a("sunshine-hours"),3),o(a("clear-days"),3),o(a("agriculture"),2),o(100-a("rainfall"),1)),t.lifestyle==="urban"?(o(a("conveni-count"),2),o(a("internet-rate"),2),o(a("avg-salary"),1)):t.lifestyle==="rural"?(o(100-a("cpi-index"),2),o(a("house-floor-area"),2),o(a("clear-days"),1),o(100-a("rent-price"),2)):(o(a("conveni-count"),1),o(a("house-floor-area"),1),o(a("clear-days"),1)),t.family==="single"?(o(a("conveni-count"),2),o(100-a("crime-rate"),2),o(a("avg-salary"),2),o(a("internet-rate"),1)):t.family==="couple"?(o(100-a("divorce-rate"),2),o(a("income"),2),o(a("fiscal-power"),1)):t.family==="parent"?(o(100-a("nursery-waiting"),3),o(a("nursery-worker"),2),o(100-a("lunch-fee"),2),o(a("library-count"),1)):t.family==="senior"&&(o(a("doctor-count"),3),o(a("care-worker"),3),o(a("life-expectancy"),2),o(100-a("care-insurance"),1)),t.commute==="short"?o(100-a("commute-time"),4):t.commute==="remote"&&(o(a("internet-rate"),3),o(a("house-floor-area"),2),o(100-a("cpi-index"),2)),t.climate==="sunny"?(o(a("sunshine-hours"),3),o(a("clear-days"),3),o(100-a("rainfall"),2)):t.climate==="snowy"&&(o(100-a("clear-days"),2),o(a("homeownership"),1)),t.finance==="earn"?(o(a("avg-salary"),3),o(a("income"),3),o(a("min-wage"),2)):t.finance==="save"?(o(100-a("cpi-index"),3),o(100-a("rent-price"),3),o(100-a("water-rate"),2),o(100-a("health-insurance"),2)):t.finance==="house"&&(o(a("homeownership"),3),o(a("house-floor-area"),3),o(a("detached-rate"),2),o(100-a("rent-price"),2)),o(100-a("crime-rate"),1),o(100-a("suicide-rate"),1),n>0?r/n:50}const QS={北海道:"農業産出額1位・雄大な自然",青森:"快晴少ないが食材豊か",岩手:"面積2位・静かな暮らし",宮城:"仙台の都市機能と自然",秋田:"睡眠時間日本一・高齢化先進県",山形:"果物の宝庫・低離婚率",福島:"豊かな自然と復興の歩み",茨城:"農業産出額上位・研究学園都市",栃木:"日光・那須の観光資源",群馬:"温泉王国・快晴日数多め",埼玉:"首都圏アクセス・住宅地",千葉:"成田空港・食料供給基地",東京:"日本最大の経済・文化都市",神奈川:"横浜・海と山の魅力",新潟:"米どころ・日本海の幸",富山:"持ち家率・離婚率最低の安定県",石川:"金沢文化・能登の自然",福井:"幸福度ランキング上位常連",山梨:"富士山・ワイン・快晴多い",長野:"長寿・山岳リゾート・睡眠充実",岐阜:"白川郷・飛騨の匠",静岡:"温暖な気候・富士山・快晴多",愛知:"製造業の中心・名古屋",三重:"伊勢神宮・真珠の産地",滋賀:"男性長寿日本一・琵琶湖",京都:"文化財・医師数トップ",大阪:"食の都・活気ある街",兵庫:"神戸の国際都市・多彩な文化",奈良:"古都・宗教法人多い文化県",和歌山:"紀伊山地・温暖な気候",鳥取:"砂丘・カニ・図書館充実",島根:"出雲大社・図書館日本一",岡山:"医師数上位・晴れの国",広島:"瀬戸内の温暖な気候・工業都市",山口:"本州最西端・豊かな自然",徳島:"阿波踊り・医師数上位",香川:"うどん県・快晴多い",愛媛:"みかん・道後温泉",高知:"看護師数日本一・快晴多い",福岡:"九州の中心都市・グルメ",佐賀:"有田焼・穏やかな気候",長崎:"異国情緒・島々の自然",熊本:"農業産出額上位・温泉",大分:"温泉県・旅行者多い",宮崎:"快晴日数上位・農業",鹿児島:"快晴日数日本一・農業・自然",沖縄:"出生率日本一・独自の文化・快晴"},JS={priority:{income:"収入・経済重視",medical:"医療・健康重視",childcare:"子育て重視",housing:"住環境重視",nature:"自然・のんびり重視"},lifestyle:{urban:"都市派",rural:"田舎派",balanced:"バランス派"},family:{single:"独身",couple:"既婚・子なし",parent:"子育て中",senior:"老後・シニア"},commute:{short:"通勤短め希望",remote:"リモートワーク希望",any:"通勤こだわりなし"},climate:{sunny:"晴れ・暖かい希望",snowy:"雪・四季希望",any:"気候こだわりなし"},finance:{earn:"稼ぎ最優先",save:"コスト節約派",house:"持ち家・広さ重視"}};function i2(e,t){typeof window<"u"&&typeof window.gtag=="function"&&window.gtag("event",e,t)}function ZS(){const e=Dt(),{pref:t}=jc(),r=t&&ky.includes(t)?t:null,[n,a]=D.useState(0),[o,s]=D.useState({}),[u,f]=D.useState(null),[d,m]=D.useState(!1),[h,g]=D.useState(!1),x=Ko[n],j=!!r&&!u&&!h,S=()=>{g(!0),window.history.replaceState(null,"","/diagnosis"),i2("diagnosis_start",{from:"shared_result",shared_pref:r})},b=(z,B)=>{const M={...o,[z]:B};if(s(M),n<Ko.length-1)a(n+1);else{const H=ky.map((X,Y)=>({pref:X,score:JH(Y,M)})).sort((X,Y)=>Y.score-X.score);f(H),window.history.replaceState(null,"",`/diagnosis/result/${encodeURIComponent(H[0].pref)}`),i2("diagnosis_complete",{result_pref:H[0].pref,score:Math.round(H[0].score)})}},A=()=>{a(0),s({}),f(null),m(!1),g(!0),window.history.replaceState(null,"","/diagnosis")},O=z=>{const{strengths:B,weaknesses:M}=YS(z),H=Object.entries(o).map(([X,Y])=>{var W;return(W=JS[X])==null?void 0:W[Y]}).filter(Boolean);return{strengths:B,weaknesses:M,answerTags:H}},E=u?`都道府県診断の結果、私に向いてる都道府県は「${u[0].pref}」でした！（マッチ度${u[0].score.toFixed(1)}点）あなたも診断してみて👇`:"",N=u?`https://www.japan-stats.com/diagnosis/result/${encodeURIComponent(u[0].pref)}`:"https://www.japan-stats.com/diagnosis",_=`https://twitter.com/intent/tweet?text=${encodeURIComponent(E)}&url=${encodeURIComponent(N)}&hashtags=都道府県診断,日本の統計マップ`,P=`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(N)}`,T=z=>{i2("diagnosis_share",{method:z,result_pref:u?u[0].pref:""})},R=()=>{navigator.clipboard.writeText(`${E} ${N}`),m(!0),T("copy"),setTimeout(()=>m(!1),2e3)},$=j&&r?YS(r):null;return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("div",{className:"text-4xl mb-3",children:"🗾"}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:"あなたに向いてる都道府県診断"}),y.jsx("p",{className:"text-sm text-[#717182]",children:"6つの質問に答えるだけ。65の統計データをもとにあなたに最適な都道府県を診断します。"})]}),j&&r&&$?y.jsxs("div",{children:[y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8 shadow-sm mb-4",children:[y.jsxs("div",{className:"text-center mb-6",children:[y.jsx("div",{className:"text-5xl mb-3",children:"📨"}),y.jsx("p",{className:"text-sm text-[#717182] mb-2",children:"シェアされた診断結果"}),y.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-[#3D52A0] mb-2",style:{fontFamily:"var(--font-serif)"},children:r}),y.jsx("p",{className:"text-sm text-[#717182] mb-3",children:QS[r]})]}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[y.jsx("span",{className:"text-green-500",children:"✅"}),y.jsxs("span",{className:"text-sm font-bold text-[#1A1A1A]",children:[r,"の強み"]})]}),y.jsx("div",{className:"space-y-2",children:$.strengths.map(z=>y.jsxs("button",{onClick:()=>e(`/detail/${z.id}`),className:"w-full flex items-center justify-between p-3 bg-green-50 border border-green-100 rounded-xl hover:bg-green-100 transition-colors group text-left",children:[y.jsxs("div",{children:[y.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:z.label}),y.jsx("span",{className:"ml-2 text-xs text-green-600 font-medium",children:z.good})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium",children:["全国",z.rank,"位"]}),y.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},z.id))})]}),$.weaknesses.length>0&&y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[y.jsx("span",{className:"text-yellow-500",children:"⚠️"}),y.jsx("span",{className:"text-sm font-bold text-[#1A1A1A]",children:"注意点"})]}),y.jsx("div",{className:"space-y-2",children:$.weaknesses.map(z=>y.jsxs("button",{onClick:()=>e(`/detail/${z.id}`),className:"w-full flex items-center justify-between p-3 bg-yellow-50 border border-yellow-100 rounded-xl hover:bg-yellow-100 transition-colors group text-left",children:[y.jsxs("div",{children:[y.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:z.label}),y.jsx("span",{className:"ml-2 text-xs text-yellow-600 font-medium",children:z.bad})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("span",{className:"text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium",children:["全国",z.rank,"位"]}),y.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},z.id))})]})]})]}),y.jsx("button",{onClick:S,className:"w-full py-4 bg-[#3D52A0] text-white rounded-xl text-base font-bold hover:bg-[#2d4090] transition-colors mb-3",children:"🗾 あなたも診断してみる（無料・30秒）"}),y.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(r)}`),className:"w-full py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:[r,"の全統計データを見る →"]})]}):u?y.jsxs("div",{children:[y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8 shadow-sm mb-4",children:[y.jsxs("div",{className:"text-center mb-6",children:[y.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),y.jsx("p",{className:"text-sm text-[#717182] mb-2",children:"あなたに最も向いている都道府県は…"}),y.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-[#3D52A0] mb-2",style:{fontFamily:"var(--font-serif)"},children:u[0].pref}),y.jsx("p",{className:"text-sm text-[#717182] mb-3",children:QS[u[0].pref]}),y.jsxs("div",{className:"inline-block px-4 py-1.5 bg-[#EEF2FF] rounded-full text-sm text-[#3D52A0] font-medium",children:["マッチ度 ",u[0].score.toFixed(1),"点 / 100点"]})]}),y.jsxs("div",{className:"mb-6 p-4 bg-[#F8F8F6] rounded-xl",children:[y.jsx("p",{className:"text-xs text-[#717182] mb-2",children:"あなたのプロフィール"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(o).map(([z,B])=>{var M;return y.jsx("span",{className:"text-xs px-2.5 py-1 bg-white border border-[#E5E0D8] rounded-full text-[#717182]",children:(M=JS[z])==null?void 0:M[B]},z)})})]}),(()=>{const{strengths:z,weaknesses:B}=O(u[0].pref);return y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[y.jsx("span",{className:"text-green-500",children:"✅"}),y.jsxs("span",{className:"text-sm font-bold text-[#1A1A1A]",children:[u[0].pref,"の強み"]})]}),y.jsx("div",{className:"space-y-2",children:z.map(M=>y.jsxs("button",{onClick:()=>e(`/detail/${M.id}`),className:"w-full flex items-center justify-between p-3 bg-green-50 border border-green-100 rounded-xl hover:bg-green-100 transition-colors group text-left",children:[y.jsxs("div",{children:[y.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:M.label}),y.jsx("span",{className:"ml-2 text-xs text-green-600 font-medium",children:M.good})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("span",{className:"text-xs font-mono text-[#717182]",children:[M.value.toFixed(M.unit==="円"?0:2),M.unit]}),y.jsxs("span",{className:"text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium",children:["全国",M.rank,"位"]}),y.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},M.id))})]}),B.length>0&&y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[y.jsx("span",{className:"text-yellow-500",children:"⚠️"}),y.jsx("span",{className:"text-sm font-bold text-[#1A1A1A]",children:"注意点"})]}),y.jsx("div",{className:"space-y-2",children:B.map(M=>y.jsxs("button",{onClick:()=>e(`/detail/${M.id}`),className:"w-full flex items-center justify-between p-3 bg-yellow-50 border border-yellow-100 rounded-xl hover:bg-yellow-100 transition-colors group text-left",children:[y.jsxs("div",{children:[y.jsx("span",{className:"text-sm font-medium text-[#1A1A1A]",children:M.label}),y.jsx("span",{className:"ml-2 text-xs text-yellow-600 font-medium",children:M.bad})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("span",{className:"text-xs font-mono text-[#717182]",children:[M.value.toFixed(M.unit==="円"?0:2),M.unit]}),y.jsxs("span",{className:"text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium",children:["全国",M.rank,"位"]}),y.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]})]},M.id))})]})]})})()]}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm mb-4",children:[y.jsx("p",{className:"text-xs text-[#717182] mb-4 text-center font-medium",children:"あなたのTOP5"}),u.slice(0,5).map(({pref:z,score:B},M)=>y.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[y.jsx("div",{className:`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${M===0?"bg-yellow-100 text-yellow-700":M===1?"bg-gray-100 text-gray-600":M===2?"bg-orange-100 text-orange-700":"bg-[#F0EDE8] text-[#717182]"}`,children:M<3?["🥇","🥈","🥉"][M]:M+1}),y.jsxs("div",{className:"flex-1",children:[y.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[y.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(z)}`),className:"font-medium hover:text-[#3D52A0]",children:z}),y.jsxs("span",{className:"text-[#3D52A0] font-bold",children:[B.toFixed(1),"点"]})]}),y.jsx("div",{className:"h-1.5 bg-[#F0EDE8] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-[#3D52A0] rounded-full",style:{width:`${B}%`}})})]})]},z))]}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm mb-4",children:[y.jsx("p",{className:"text-xs text-[#717182] mb-4 text-center",children:"全47都道府県のマッチ度"}),y.jsx("div",{className:"space-y-2 max-h-72 overflow-y-auto",children:u.map(({pref:z,score:B},M)=>y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-xs text-[#bbb] w-5 text-right flex-shrink-0",children:M+1}),y.jsx("button",{onClick:()=>e(`/pref/${encodeURIComponent(z)}`),className:"text-sm w-20 flex-shrink-0 text-left hover:text-[#3D52A0]",children:z}),y.jsx("div",{className:"flex-1 h-2 bg-[#F0EDE8] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full rounded-full",style:{width:`${B}%`,background:M===0?"#3D52A0":"#94a3b8"}})}),y.jsxs("span",{className:"text-xs text-[#717182] w-12 text-right",children:[B.toFixed(1),"点"]})]},z))})]}),y.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[y.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(u[0].pref)}`),className:"flex-1 py-3 bg-[#3D52A0] text-white rounded-xl text-sm font-medium hover:bg-[#2d4090] transition-colors",children:[u[0].pref,"の全データを見る →"]}),y.jsx("button",{onClick:A,className:"flex-1 py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:"もう一度診断する"})]}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm",children:[y.jsx("p",{className:"text-sm font-medium text-[#1A1A1A] mb-3 text-center",children:"診断結果をシェアする"}),y.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[y.jsxs("a",{href:_,target:"_blank",rel:"noopener noreferrer",onClick:()=>T("x"),className:"flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors",children:[y.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Xでシェア"]}),y.jsxs("a",{href:P,target:"_blank",rel:"noopener noreferrer",onClick:()=>T("line"),className:"flex-1 flex items-center justify-center gap-2 py-3 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity",style:{backgroundColor:"#06C755"},children:[y.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:y.jsx("path",{d:"M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"})}),"LINEでシェア"]}),y.jsx("button",{onClick:R,className:"flex-1 flex items-center justify-center gap-2 py-3 bg-[#F0EDE8] text-[#717182] rounded-xl text-sm font-medium hover:bg-[#E5E0D8] transition-colors",children:d?"✓ コピーしました！":"🔗 URLをコピー"})]})]})]}):y.jsxs("div",{children:[y.jsxs("div",{className:"mb-6",children:[y.jsxs("div",{className:"flex justify-between text-xs text-[#717182] mb-2",children:[y.jsxs("span",{children:["質問 ",n+1," / ",Ko.length]}),y.jsxs("span",{children:[Math.round(n/Ko.length*100),"%"]})]}),y.jsx("div",{className:"h-2 bg-[#F0EDE8] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-[#3D52A0] rounded-full transition-all duration-300",style:{width:`${n/Ko.length*100}%`}})})]}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 sm:p-8 shadow-sm",children:[y.jsxs("div",{className:"text-center mb-6",children:[y.jsx("div",{className:"text-4xl mb-3",children:x.emoji}),y.jsx("h2",{className:"text-lg sm:text-xl font-bold text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:x.text})]}),y.jsx("div",{className:"space-y-3",children:x.options.map(z=>y.jsx("button",{onClick:()=>b(x.id,z.value),className:"w-full text-left px-5 py-4 rounded-xl border-2 border-[#E5E0D8] hover:border-[#3D52A0] hover:bg-[#EEF2FF] transition-all text-sm font-medium text-[#1A1A1A]",children:z.label},z.value))}),n>0&&y.jsx("button",{onClick:()=>a(n-1),className:"mt-4 text-xs text-[#717182] hover:text-[#3D52A0] w-full text-center",children:"← 前の質問に戻る"})]})]})]}),y.jsx(Gt,{})]})}const ZH=["北海道","青森","岩手","宮城","秋田","山形","福島","茨城","栃木","群馬","埼玉","千葉","東京","神奈川","新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知","三重","滋賀","京都","大阪","兵庫","奈良","和歌山","鳥取","島根","岡山","広島","山口","徳島","香川","愛媛","高知","福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島","沖縄"];function eK(e,t){const r=yr.find(a=>a.id===e);if(!r)return null;const n=r.data.find(a=>a.prefecture===t);return n?{rank:n.rank,value:n.value,total:r.data.length}:null}function tK({rank:e,total:t}){const r=e/t,n=r<=.1?"#f59e0b":r<=.3?"#3D52A0":r>=.9?"#dc2626":"#717182",a=r<=.1?"上位10%":r<=.3?"上位30%":r>=.9?"下位10%":"";return y.jsxs("span",{style:{color:n,fontWeight:600,fontSize:13},children:[e,"位",a&&y.jsx("span",{style:{fontSize:10,marginLeft:4,padding:"1px 6px",borderRadius:100,background:`${n}18`},children:a})]})}const rK=[{label:"人口・世帯",ids:["divorce-rate","birth-rate","unmarried-rate","unmarried-20s-male","unmarried-20s-female","unmarried-30s-female","unmarried-40s-male","unmarried-40s-female","foreigner-rate","migration-rate","working-age-rate","pop-future-2040","pop-future-2050"]},{label:"医療",ids:["doctor-count","nurse-count","dentist-count","pharmacist-count","hospital-count","medical-cost"]},{label:"福祉・介護",ids:["care-worker","nursery-worker"]},{label:"公務員・公共",ids:["police-count","firefighter-count"]},{label:"社会保障",ids:["welfare-rate","nursery-waiting","health-insurance","care-insurance"]},{label:"住宅・不動産",ids:["vacancy-rate","homeownership","house-floor-area"]},{label:"経済",ids:["income","avg-salary","avg-salary-female","min-wage","commute-time","cpi-index"]},{label:"健康・医療",ids:["life-expectancy","obesity-rate","suicide-rate","drinking-rate","smoking-rate"]},{label:"教育・子育て",ids:["lunch-fee","university-rate"]},{label:"文化・宗教",ids:["religion-count"]},{label:"農業・産業",ids:["agriculture"]},{label:"生活・インフラ",ids:["water-rate","conveni-count","sunshine-hours","rainfall","traffic-accident","waste-per-day"]},{label:"社会問題",ids:["lonely-death","crime-rate"]}],nK={北陸:["富山","石川","福井"],東北:["青森","岩手","宮城","秋田","山形","福島"],関東:["茨城","栃木","群馬","埼玉","千葉","東京","神奈川"],首都圏:["埼玉","千葉","東京","神奈川"],東海:["岐阜","静岡","愛知","三重"],関西:["滋賀","京都","大阪","兵庫","奈良","和歌山"],近畿:["滋賀","京都","大阪","兵庫","奈良","和歌山"],中国地方:["鳥取","島根","岡山","広島","山口"],山陰:["鳥取","島根"],四国:["徳島","香川","愛媛","高知"],九州:["福岡","佐賀","長崎","熊本","大分","宮崎","鹿児島"]};function aK(){const{pref:e}=jc(),t=Dt(),r=decodeURIComponent(e||"");if(!ZH.includes(r))return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 py-16 text-center",children:[y.jsx("p",{className:"text-[#717182]",children:"都道府県が見つかりません"}),y.jsx("button",{onClick:()=>t("/"),className:"mt-4 text-[#3D52A0] underline text-sm",children:"トップへ"})]}),y.jsx(Gt,{})]});const n=ba.filter(a=>a.tags.includes(r)||a.title.includes(r)||a.summary.includes(r)?!0:a.tags.some(o=>{var s;return(s=nK[o])==null?void 0:s.includes(r)})).slice(0,6);return y.jsxs("div",{className:"min-h-screen bg-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16",children:[y.jsx("button",{onClick:()=>t("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsxs("div",{className:"mb-8",children:[y.jsxs("h1",{className:"text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:[r,"のデータまとめ"]}),y.jsxs("p",{className:"text-sm text-[#717182]",children:["政府統計",yr.length,"指標における",r,"の順位と数値"]})]}),y.jsx("div",{className:"space-y-6",children:rK.map(a=>{const o=a.ids.map(s=>{const u=yr.find(d=>d.id===s);if(!u)return null;const f=eK(s,r);return f?{cat:u,...f}:null}).filter(Boolean);return o.length===0?null:y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 overflow-hidden shadow-sm",children:[y.jsx("div",{className:"px-5 py-3 bg-[#F8F8F6] border-b border-[#E5E0D8]",children:y.jsx("h2",{className:"text-sm font-bold text-[#3D52A0]",children:a.label})}),y.jsx("div",{className:"divide-y divide-[#F0EDE8]",children:o.map(({cat:s,rank:u,value:f,total:d})=>y.jsxs("div",{onClick:()=>t(`/detail/${s.id}`),className:"flex items-center justify-between px-5 py-3 hover:bg-[#F8F8F6] cursor-pointer transition-colors group",children:[y.jsx("div",{className:"flex-1 min-w-0",children:y.jsx("div",{className:"text-sm font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] truncate",children:s.title})}),y.jsxs("div",{className:"flex items-center gap-4 flex-shrink-0 ml-4",children:[y.jsxs("span",{className:"text-sm text-[#717182] font-mono",children:[f.toFixed(s.unit==="円"||Number.isInteger(f)?0:2),s.unit]}),y.jsx(tK,{rank:u,total:d}),y.jsx("span",{className:"text-[#C8C4BB] text-sm group-hover:text-[#3D52A0]",children:"→"})]})]},s.id))})]},a.label)})}),n.length>0&&y.jsxs("div",{className:"mt-8",children:[y.jsxs("h2",{className:"text-sm font-bold text-[#717182] mb-3",children:["📖 ",r,"に関するコラム"]}),y.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:n.map(a=>y.jsxs("button",{onClick:()=>t(`/column/${a.slug}`),className:"bg-white rounded-xl border border-[#E5E0D8]/50 p-4 text-left hover:border-[#3D52A0] hover:shadow-sm transition-all group",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[y.jsx("span",{className:"text-xs px-2 py-0.5 bg-[#EEF2FF] text-[#3D52A0] rounded-full",children:a.category}),y.jsx("span",{className:"text-xs text-[#717182]",children:a.readTime})]}),y.jsx("div",{className:"text-sm font-medium text-[#1A1A1A] group-hover:text-[#3D52A0] leading-snug",children:a.title})]},a.slug))})]}),y.jsxs("div",{className:"mt-8 flex gap-3",children:[y.jsx("button",{onClick:()=>t("/diagnosis"),className:"flex-1 py-3 bg-[#3D52A0] text-white rounded-xl text-sm font-medium hover:bg-[#2d4090] transition-colors",children:"🗾 都道府県診断をやってみる"}),y.jsx("button",{onClick:()=>t("/ranking"),className:"flex-1 py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:"🏆 ランキングを見る"})]})]}),y.jsx(Gt,{})]})}const Ny=[{pref:"北海道",rent:42,floor:118.4,commute:43,cpi:100.2,salary:398,wage:1010},{pref:"青森",rent:34,floor:138.2,commute:28,cpi:97.8,salary:342,wage:951},{pref:"岩手",rent:32,floor:142.4,commute:26,cpi:97.4,salary:338,wage:952},{pref:"宮城",rent:52,floor:118.4,commute:38,cpi:99.8,salary:412,wage:1023},{pref:"秋田",rent:30,floor:148.4,commute:24,cpi:97.2,salary:332,wage:951},{pref:"山形",rent:32,floor:142.2,commute:22,cpi:97.6,salary:348,wage:955},{pref:"福島",rent:38,floor:128.4,commute:32,cpi:98.4,salary:368,wage:955},{pref:"茨城",rent:54,floor:118.2,commute:48,cpi:101.2,salary:428,wage:1005},{pref:"栃木",rent:52,floor:122.4,commute:46,cpi:101,salary:418,wage:1004},{pref:"群馬",rent:54,floor:118.4,commute:44,cpi:100.8,salary:412,wage:985},{pref:"埼玉",rent:68,floor:108.2,commute:58,cpi:103.2,salary:462,wage:1078},{pref:"千葉",rent:72,floor:108.4,commute:56,cpi:102.8,salary:458,wage:1076},{pref:"東京",rent:98,floor:78.4,commute:48,cpi:106.4,salary:612,wage:1163},{pref:"神奈川",rent:84,floor:92.2,commute:54,cpi:104.2,salary:498,wage:1162},{pref:"新潟",rent:38,floor:132.4,commute:28,cpi:98.8,salary:368,wage:985},{pref:"富山",rent:42,floor:148.4,commute:26,cpi:99.4,salary:412,wage:998},{pref:"石川",rent:48,floor:128.4,commute:28,cpi:100.2,salary:428,wage:998},{pref:"福井",rent:40,floor:148.2,commute:24,cpi:99.2,salary:408,wage:984},{pref:"山梨",rent:46,floor:128.4,commute:34,cpi:100.2,salary:418,wage:988},{pref:"長野",rent:42,floor:138.4,commute:28,cpi:99.8,salary:408,wage:998},{pref:"岐阜",rent:44,floor:132.2,commute:32,cpi:99.4,salary:402,wage:1001},{pref:"静岡",rent:58,floor:122.4,commute:44,cpi:101.2,salary:442,wage:1034},{pref:"愛知",rent:72,floor:108.4,commute:52,cpi:102.8,salary:498,wage:1077},{pref:"三重",rent:44,floor:128.2,commute:34,cpi:99.4,salary:402,wage:973},{pref:"滋賀",rent:56,floor:122.4,commute:42,cpi:101.2,salary:428,wage:967},{pref:"京都",rent:68,floor:108.4,commute:52,cpi:103.4,salary:468,wage:1008},{pref:"大阪",rent:72,floor:92.2,commute:52,cpi:104.2,salary:498,wage:1114},{pref:"兵庫",rent:64,floor:108.4,commute:48,cpi:102.8,salary:462,wage:1052},{pref:"奈良",rent:52,floor:118.4,commute:48,cpi:101.2,salary:428,wage:986},{pref:"和歌山",rent:42,floor:128.4,commute:38,cpi:99.4,salary:388,wage:980},{pref:"鳥取",rent:36,floor:142.2,commute:24,cpi:98.4,salary:368,wage:957},{pref:"島根",rent:34,floor:148.4,commute:22,cpi:98.2,salary:362,wage:962},{pref:"岡山",rent:48,floor:128.4,commute:36,cpi:100.2,salary:412,wage:982},{pref:"広島",rent:54,floor:118.2,commute:40,cpi:101.2,salary:428,wage:998},{pref:"山口",rent:38,floor:132.4,commute:32,cpi:99.4,salary:388,wage:979},{pref:"徳島",rent:36,floor:132.2,commute:26,cpi:98.8,salary:378,wage:980},{pref:"香川",rent:40,floor:128.4,commute:28,cpi:99.4,salary:388,wage:970},{pref:"愛媛",rent:38,floor:132.4,commute:30,cpi:99.2,salary:378,wage:980},{pref:"高知",rent:34,floor:132.2,commute:24,cpi:98.4,salary:358,wage:952},{pref:"福岡",rent:62,floor:108.4,commute:46,cpi:101.2,salary:458,wage:992},{pref:"佐賀",rent:36,floor:132.4,commute:24,cpi:98.4,salary:368,wage:956},{pref:"長崎",rent:38,floor:132.4,commute:26,cpi:98.8,salary:378,wage:953},{pref:"熊本",rent:42,floor:128.2,commute:28,cpi:99.2,salary:388,wage:952},{pref:"大分",rent:38,floor:132.4,commute:28,cpi:98.8,salary:378,wage:956},{pref:"宮崎",rent:36,floor:132.2,commute:26,cpi:98.4,salary:368,wage:952},{pref:"鹿児島",rent:36,floor:128.4,commute:24,cpi:98.2,salary:362,wage:953},{pref:"沖縄",rent:52,floor:98.4,commute:32,cpi:100.8,salary:398,wage:952}],iK=Ny.map(e=>e.pref);function oK(){const e=Dt(),[t,r]=D.useState("東京"),[n,a]=D.useState(80),[o,s]=D.useState(!1),u=Ny.find(h=>h.pref===t),f=D.useMemo(()=>Ny.map(h=>{const g=u.rent/h.rent,x=Math.round(u.floor*g),j=Math.round((h.rent-u.rent)/u.rent*100);return{...h,budgetRatio:g,effFloor:x,rentDiff:j}}).sort((h,g)=>g.budgetRatio-h.budgetRatio),[t,u.rent,u.floor]),d=f.findIndex(h=>h.pref===t)+1,m=f[0];return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("div",{className:"text-4xl mb-3",children:"🏠"}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:"その家賃、他の県ならどれだけ広く住める？"}),y.jsx("p",{className:"text-sm text-[#717182]",children:"いまの家賃と都道府県を入れるだけ。47都道府県の「住める広さ」を政府統計から換算します。"})]}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 shadow-sm mb-6",children:[y.jsxs("div",{className:"grid sm:grid-cols-2 gap-5",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-medium text-[#717182] mb-2",children:"いま住んでいる都道府県"}),y.jsx("select",{value:t,onChange:h=>{r(h.target.value),s(!1)},className:"w-full px-4 py-3 border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#3D52A0] bg-white",children:iK.map(h=>y.jsx("option",{value:h,children:h},h))})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-medium text-[#717182] mb-2",children:"いまの家賃（月・万円）"}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("input",{type:"range",min:3,max:30,step:.5,value:n/10,onChange:h=>{a(Number(h.target.value)*10),s(!1)},className:"flex-1 accent-[#3D52A0]"}),y.jsxs("span",{className:"text-lg font-bold text-[#3D52A0] font-mono w-20 text-right",children:[(n/10).toFixed(1),"万円"]})]})]})]}),y.jsx("button",{onClick:()=>s(!0),className:"w-full mt-5 py-3.5 bg-[#3D52A0] text-white rounded-xl text-sm font-bold hover:bg-[#2d4090] transition-colors",children:"47都道府県で比べる"})]}),o&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"bg-gradient-to-br from-[#3D52A0] to-[#5B6FB8] rounded-2xl p-6 text-white mb-6 shadow-sm",children:[y.jsxs("p",{className:"text-sm opacity-90 mb-1",children:[t,"で家賃",(n/10).toFixed(1),"万円のあなたが、同じ予算でいちばん広く住めるのは"]}),y.jsxs("div",{className:"flex items-baseline gap-3 mb-2",children:[y.jsx("span",{className:"text-3xl font-bold",style:{fontFamily:"var(--font-serif)"},children:m.pref}),y.jsxs("span",{className:"text-lg",children:["約",m.effFloor,"㎡相当（",m.budgetRatio.toFixed(1),"倍の予算余裕）"]})]}),y.jsxs("p",{className:"text-xs opacity-80",children:[t,"は47都道府県中、住居コストの安さで",d,"位でした。"]})]}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm",children:[y.jsx("h2",{className:"text-sm font-bold text-[#717182] mb-4",children:"同じ家賃で「広く住める」県ランキング"}),y.jsx("div",{className:"space-y-1.5 max-h-[28rem] overflow-y-auto",children:f.map((h,g)=>{const x=h.pref===t;return y.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(h.pref)}`),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors group ${x?"bg-[#EEF2FF] border border-[#3D52A0]/30":"hover:bg-[#F8F8F6]"}`,children:[y.jsx("span",{className:"text-xs text-[#bbb] w-5 text-right flex-shrink-0",children:g+1}),y.jsxs("span",{className:`text-sm w-16 flex-shrink-0 ${x?"font-bold text-[#3D52A0]":"font-medium"}`,children:[h.pref,x&&"（今）"]}),y.jsx("div",{className:"flex-1 h-2 bg-[#F0EDE8] rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full rounded-full",style:{width:`${Math.min(h.budgetRatio/f[0].budgetRatio*100,100)}%`,background:g===0?"#3D52A0":x?"#5B6FB8":"#94a3b8"}})}),y.jsxs("span",{className:"text-xs font-mono text-[#717182] w-24 text-right flex-shrink-0",children:["約",h.effFloor,"㎡ / ",h.rentDiff>0?"+":"",h.rentDiff,"%"]}),y.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs flex-shrink-0",children:"→"})]},h.pref)})}),y.jsx("p",{className:"text-xs text-[#717182] mt-4 leading-relaxed",children:"※「住める広さ」は各県の1K家賃相場と持ち家平均床面積から算出した目安です。県名をタップすると、その県の通勤時間・物価・給与など全データを見られます。"})]}),y.jsxs("div",{className:"grid sm:grid-cols-2 gap-3 mt-6",children:[y.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(m.pref)}`),className:"py-3 bg-[#3D52A0] text-white rounded-xl text-sm font-medium hover:bg-[#2d4090] transition-colors",children:[m.pref,"の暮らしデータを見る →"]}),y.jsx("button",{onClick:()=>e("/diagnosis"),className:"py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:"🗾 向いてる県を診断する"})]})]})]}),y.jsx(Gt,{})]})}const un=[{pref:"北海道",rent:42,floor:118.4,cpi:100.2,commute:43,salary:398,lunch:4298,nursery:28,doctor:264.1,life:80.9,clear:28,univ:42.8},{pref:"青森",rent:34,floor:138.2,cpi:97.8,commute:28,salary:342,lunch:3867,nursery:4,doctor:218.2,life:79.3,clear:22,univ:38.2},{pref:"岩手",rent:32,floor:142.4,cpi:97.4,commute:26,salary:338,lunch:3741,nursery:2,doctor:224.1,life:80.6,clear:18,univ:36.8},{pref:"宮城",rent:52,floor:118.4,cpi:99.8,commute:38,salary:412,lunch:4423,nursery:18,doctor:254.3,life:81.7,clear:24,univ:48.2},{pref:"秋田",rent:30,floor:148.4,cpi:97.2,commute:24,salary:332,lunch:3736,nursery:0,doctor:226.8,life:80.5,clear:14,univ:34.8},{pref:"山形",rent:32,floor:142.2,cpi:97.6,commute:22,salary:348,lunch:3786,nursery:0,doctor:228.5,life:81.4,clear:20,univ:37.2},{pref:"福島",rent:38,floor:128.4,cpi:98.4,commute:32,salary:368,lunch:4027,nursery:8,doctor:210.1,life:80.6,clear:22,univ:41.8},{pref:"茨城",rent:54,floor:118.2,cpi:101.2,commute:48,salary:428,lunch:4765,nursery:18,doctor:192.4,life:80.9,clear:28,univ:48.4},{pref:"栃木",rent:52,floor:122.4,cpi:101,commute:46,salary:418,lunch:4604,nursery:12,doctor:219.8,life:81,clear:30,univ:47.2},{pref:"群馬",rent:54,floor:118.4,cpi:100.8,commute:44,salary:412,lunch:4372,nursery:8,doctor:242.5,life:81.1,clear:32,univ:48.8},{pref:"埼玉",rent:68,floor:108.2,cpi:103.2,commute:58,salary:462,lunch:4902,nursery:148,doctor:174,life:81.4,clear:36,univ:56.2},{pref:"千葉",rent:72,floor:108.4,cpi:102.8,commute:56,salary:458,lunch:4818,nursery:112,doctor:202.1,life:81.5,clear:38,univ:56.8},{pref:"東京",rent:98,floor:78.4,cpi:106.4,commute:48,salary:612,lunch:5521,nursery:361,doctor:334.7,life:81.8,clear:20,univ:72.4},{pref:"神奈川",rent:84,floor:92.2,cpi:104.2,commute:54,salary:498,lunch:5122,nursery:412,doctor:222.6,life:81.9,clear:32,univ:62.8},{pref:"新潟",rent:38,floor:132.4,cpi:98.8,commute:28,salary:368,lunch:3971,nursery:4,doctor:228.3,life:81.3,clear:16,univ:40.2},{pref:"富山",rent:42,floor:148.4,cpi:99.4,commute:26,salary:412,lunch:4281,nursery:0,doctor:256.7,life:81.7,clear:28,univ:41.8},{pref:"石川",rent:48,floor:128.4,cpi:100.2,commute:28,salary:428,lunch:4423,nursery:0,doctor:296.7,life:82,clear:30,univ:48.2},{pref:"福井",rent:40,floor:148.2,cpi:99.2,commute:24,salary:408,lunch:4121,nursery:0,doctor:259.4,life:82.1,clear:24,univ:43.8},{pref:"山梨",rent:46,floor:128.4,cpi:100.2,commute:34,salary:418,lunch:4376,nursery:4,doctor:252.3,life:81.9,clear:32,univ:46.2},{pref:"長野",rent:42,floor:138.4,cpi:99.8,commute:28,salary:408,lunch:4148,nursery:4,doctor:223.8,life:82.7,clear:28,univ:48.2},{pref:"岐阜",rent:44,floor:132.2,cpi:99.4,commute:32,salary:402,lunch:4286,nursery:4,doctor:218,life:81.9,clear:26,univ:44.8},{pref:"静岡",rent:58,floor:122.4,cpi:101.2,commute:44,salary:442,lunch:4437,nursery:18,doctor:202,life:82,clear:34,univ:51.2},{pref:"愛知",rent:72,floor:108.4,cpi:102.8,commute:52,salary:498,lunch:4712,nursery:82,doctor:220.8,life:82.4,clear:38,univ:55.8},{pref:"三重",rent:44,floor:128.2,cpi:99.4,commute:34,salary:402,lunch:4281,nursery:8,doctor:232,life:81.9,clear:28,univ:45.2},{pref:"滋賀",rent:56,floor:122.4,cpi:101.2,commute:42,salary:428,lunch:4478,nursery:12,doctor:237.2,life:82.8,clear:32,univ:51.8},{pref:"京都",rent:68,floor:108.4,cpi:103.4,commute:52,salary:468,lunch:4821,nursery:42,doctor:338.3,life:81.4,clear:28,univ:62.4},{pref:"大阪",rent:72,floor:92.2,cpi:104.2,commute:52,salary:498,lunch:4584,nursery:198,doctor:275,life:81.2,clear:26,univ:56.8},{pref:"兵庫",rent:64,floor:108.4,cpi:102.8,commute:48,salary:462,lunch:4721,nursery:78,doctor:258.1,life:81.8,clear:28,univ:58.2},{pref:"奈良",rent:52,floor:118.4,cpi:101.2,commute:48,salary:428,lunch:4421,nursery:22,doctor:254.1,life:82.4,clear:28,univ:56.4},{pref:"和歌山",rent:42,floor:128.4,cpi:99.4,commute:38,salary:388,lunch:4127,nursery:8,doctor:286.6,life:81.6,clear:30,univ:42.8},{pref:"鳥取",rent:36,floor:142.2,cpi:98.4,commute:24,salary:368,lunch:3921,nursery:0,doctor:291.7,life:81.4,clear:30,univ:39.8},{pref:"島根",rent:34,floor:148.4,cpi:98.2,commute:22,salary:362,lunch:3871,nursery:0,doctor:270.2,life:82,clear:28,univ:38.4},{pref:"岡山",rent:48,floor:128.4,cpi:100.2,commute:36,salary:412,lunch:4286,nursery:8,doctor:317.4,life:82.2,clear:30,univ:48.8},{pref:"広島",rent:54,floor:118.2,cpi:101.2,commute:40,salary:428,lunch:4421,nursery:18,doctor:276.4,life:82,clear:32,univ:52.4},{pref:"山口",rent:38,floor:132.4,cpi:99.4,commute:32,salary:388,lunch:4131,nursery:4,doctor:277.2,life:81.5,clear:30,univ:40.8},{pref:"徳島",rent:36,floor:132.2,cpi:98.8,commute:26,salary:378,lunch:3987,nursery:2,doctor:325.1,life:82,clear:30,univ:38.4},{pref:"香川",rent:40,floor:128.4,cpi:99.4,commute:28,salary:388,lunch:4135,nursery:4,doctor:296.2,life:82.1,clear:32,univ:41.8},{pref:"愛媛",rent:38,floor:132.4,cpi:99.2,commute:30,salary:378,lunch:3928,nursery:6,doctor:274.5,life:81.4,clear:30,univ:40.2},{pref:"高知",rent:34,floor:132.2,cpi:98.4,commute:24,salary:358,lunch:3862,nursery:2,doctor:311.8,life:81.4,clear:28,univ:37.8},{pref:"福岡",rent:62,floor:108.4,cpi:101.2,commute:46,salary:458,lunch:4278,nursery:92,doctor:305.6,life:82,clear:34,univ:52.4},{pref:"佐賀",rent:36,floor:132.4,cpi:98.4,commute:24,salary:368,lunch:3867,nursery:2,doctor:283.5,life:82.2,clear:32,univ:38.8},{pref:"長崎",rent:38,floor:132.4,cpi:98.8,commute:26,salary:378,lunch:3798,nursery:4,doctor:292.1,life:82.2,clear:28,univ:40.2},{pref:"熊本",rent:42,floor:128.2,cpi:99.2,commute:28,salary:388,lunch:3812,nursery:8,doctor:293.3,life:82,clear:32,univ:43.8},{pref:"大分",rent:38,floor:132.4,cpi:98.8,commute:28,salary:378,lunch:3911,nursery:4,doctor:292.4,life:82.3,clear:30,univ:42.4},{pref:"宮崎",rent:36,floor:132.2,cpi:98.4,commute:26,salary:368,lunch:3782,nursery:4,doctor:261.5,life:81.6,clear:36,univ:40.8},{pref:"鹿児島",rent:36,floor:128.4,cpi:98.2,commute:24,salary:362,lunch:3741,nursery:4,doctor:253.6,life:81.5,clear:42,univ:39.8},{pref:"沖縄",rent:52,floor:98.4,cpi:100.8,commute:32,salary:398,lunch:3482,nursery:12,doctor:245.9,life:80.7,clear:38,univ:44.2}],ej=un.map(e=>e.pref),tj=e=>un.find(t=>t.pref===e),Su=(e,t)=>{const r=Math.min(...e),n=Math.max(...e);return e.map(a=>t?(n-a)/(n-r):(a-r)/(n-r))},Vo=(e,t)=>[...un].sort((n,a)=>t?e(n)-e(a):e(a)-e(n))[0].pref,lK=()=>{const e=Su(un.map(s=>s.nursery),!0),t=Su(un.map(s=>s.lunch),!0),r=Su(un.map(s=>s.doctor),!1),n=Su(un.map(s=>s.life),!1);let a=0,o=-1;return un.forEach((s,u)=>{const f=e[u]*.4+t[u]*.2+r[u]*.2+n[u]*.2;f>o&&(o=f,a=u)}),un[a].pref},o2=[{key:"money",emoji:"💰",label:"とにかく稼ぎたい",pick:()=>Vo(e=>e.salary,!1)},{key:"space",emoji:"🏠",label:"広い家に住みたい",pick:()=>Vo(e=>e.floor,!1)},{key:"child",emoji:"👶",label:"子育てしやすい",pick:()=>lK()},{key:"commute",emoji:"🚃",label:"通勤で消耗したくない",pick:()=>Vo(e=>e.commute,!0)},{key:"health",emoji:"🏥",label:"医療が充実してほしい",pick:()=>Vo(e=>e.doctor,!1)},{key:"sun",emoji:"☀️",label:"晴れた土地で暮らしたい",pick:()=>Vo(e=>e.clear,!1)}];function sK(){const e=Dt(),[t,r]=D.useState("東京"),[n,a]=D.useState(500),[o,s]=D.useState(35),[u,f]=D.useState("single"),[d,m]=D.useState(10),[h,g]=D.useState(!0),[x,j]=D.useState("axis"),[S,b]=D.useState("space"),[A,O]=D.useState("秋田"),[E,N]=D.useState(!1),_=D.useMemo(()=>x==="pref"?A:o2.find(Z=>Z.key===S).pick(),[x,S,A]),P=tj(t),T=tj(_),R=u==="single"?150:u==="couple"?230:320,$=u==="single"?1:u==="couple"?1.6:2.2,z=W=>{const Z=h?n:n*(W.salary/P.salary),V=W.rent*$*12/10,ee=R*(W.cpi/100),J=Z-V-ee;return Math.round(P.floor*(P.rent/W.rent)*1),{adjIncome:Z,rentY:V,livingY:ee,disposable:J,floor:W.floor,commute:W.commute,savings:J*d}},B=z(P),M=z(T),H=W=>Math.round(W).toLocaleString("ja-JP"),X=M.savings-B.savings,Y=_===t;return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("div",{className:"text-4xl mb-3",children:"👥"}),y.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2",style:{fontFamily:"var(--font-serif)"},children:"もう一人の自分に、会いに行く"}),y.jsx("p",{className:"text-sm text-[#717182]",children:"いまのあなたと、別の県に住む「もう一人のあなた」を並べて比べます。住む場所を変えただけで、暮らしはどう変わる？"})]}),y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 shadow-sm mb-6 space-y-5",children:[y.jsxs("div",{className:"grid sm:grid-cols-3 gap-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-medium text-[#717182] mb-2",children:"いまの県"}),y.jsx("select",{value:t,onChange:W=>{r(W.target.value),N(!1)},className:"w-full px-3 py-2.5 border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#3D52A0] bg-white",children:ej.map(W=>y.jsx("option",{value:W,children:W},W))})]}),y.jsxs("div",{children:[y.jsxs("label",{className:"block text-xs font-medium text-[#717182] mb-2",children:["年収：",n,"万"]}),y.jsx("input",{type:"range",min:200,max:1500,step:50,value:n,onChange:W=>{a(Number(W.target.value)),N(!1)},className:"w-full accent-[#3D52A0] mt-2.5"})]}),y.jsxs("div",{children:[y.jsxs("label",{className:"block text-xs font-medium text-[#717182] mb-2",children:[d,"年後の姿を見る"]}),y.jsx("input",{type:"range",min:5,max:30,step:5,value:d,onChange:W=>{m(Number(W.target.value)),N(!1)},className:"w-full accent-[#3D52A0] mt-2.5"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-xs font-medium text-[#717182] mb-2",children:"家族構成"}),y.jsx("div",{className:"flex gap-2",children:[["single","独身"],["couple","夫婦"],["family","子あり"]].map(([W,Z])=>y.jsx("button",{onClick:()=>{f(W),N(!1)},className:`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all ${u===W?"bg-[#3D52A0] text-white border-[#3D52A0]":"bg-white text-[#717182] border-[#E5E0D8] hover:border-[#3D52A0]"}`,children:Z},W))})]}),y.jsxs("div",{className:"bg-[#F8F8F6] rounded-xl p-4",children:[y.jsx("p",{className:"text-xs font-medium text-[#717182] mb-2.5",children:"引っ越しても、年収は？"}),y.jsxs("div",{className:"flex gap-2",children:[y.jsxs("button",{onClick:()=>{g(!0),N(!1)},className:`flex-1 py-2.5 rounded-xl text-xs font-medium border transition-all ${h?"bg-[#3D52A0] text-white border-[#3D52A0]":"bg-white text-[#717182] border-[#E5E0D8]"}`,children:["維持できる",y.jsx("br",{}),y.jsx("span",{className:"text-[10px] opacity-80",children:"（リモート・転職なし）"})]}),y.jsxs("button",{onClick:()=>{g(!1),N(!1)},className:`flex-1 py-2.5 rounded-xl text-xs font-medium border transition-all ${h?"bg-white text-[#717182] border-[#E5E0D8]":"bg-[#3D52A0] text-white border-[#3D52A0]"}`,children:["その県の水準になる",y.jsx("br",{}),y.jsx("span",{className:"text-[10px] opacity-80",children:"（地元で再就職）"})]})]})]}),y.jsxs("div",{className:"border-t border-[#F0EDE8] pt-5",children:[y.jsx("p",{className:"text-xs font-medium text-[#717182] mb-3",children:"「もう一人の自分」をどう決める？"}),y.jsxs("div",{className:"flex gap-2 mb-4",children:[y.jsx("button",{onClick:()=>{j("axis"),N(!1)},className:`flex-1 py-2.5 rounded-xl text-sm font-medium border ${x==="axis"?"bg-[#5B6FB8] text-white border-[#5B6FB8]":"bg-white text-[#717182] border-[#E5E0D8]"}`,children:"重視するもので選ぶ"}),y.jsx("button",{onClick:()=>{j("pref"),N(!1)},className:`flex-1 py-2.5 rounded-xl text-sm font-medium border ${x==="pref"?"bg-[#5B6FB8] text-white border-[#5B6FB8]":"bg-white text-[#717182] border-[#E5E0D8]"}`,children:"県を指定する"})]}),x==="axis"?y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:o2.map(W=>y.jsxs("button",{onClick:()=>{b(W.key),N(!1)},className:`px-3 py-3 rounded-xl text-xs font-medium border text-left transition-all ${S===W.key?"bg-[#EEF2FF] border-[#3D52A0] text-[#3D52A0]":"bg-white border-[#E5E0D8] text-[#717182] hover:border-[#3D52A0]"}`,children:[y.jsx("span",{className:"text-base",children:W.emoji}),y.jsx("br",{}),W.label]},W.key))}):y.jsx("select",{value:A,onChange:W=>{O(W.target.value),N(!1)},className:"w-full px-3 py-2.5 border border-[#E5E0D8] rounded-xl text-sm focus:outline-none focus:border-[#3D52A0] bg-white",children:ej.filter(W=>W!==t).map(W=>y.jsx("option",{value:W,children:W},W))})]}),y.jsx("button",{onClick:()=>N(!0),className:"w-full py-3.5 bg-[#3D52A0] text-white rounded-xl text-sm font-bold hover:bg-[#2d4090] transition-colors",children:"もう一人の自分に会う"})]}),E&&!Y&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm",children:[y.jsxs("div",{className:"text-center mb-4",children:[y.jsx("p",{className:"text-xs text-[#717182] mb-1",children:"いまのあなた"}),y.jsx("p",{className:"text-2xl font-bold text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:t})]}),y.jsx(Hn,{label:"手取り（年・可処分）",value:`${H(B.disposable)}万`}),y.jsx(Hn,{label:"家の広さ",value:`${P.floor}㎡`}),y.jsx(Hn,{label:"通勤（片道）",value:`${P.commute}分`}),y.jsx(Hn,{label:`${d}年でたまるお金`,value:`${H(B.savings)}万`,highlight:!0})]}),y.jsxs("div",{className:"bg-gradient-to-br from-[#3D52A0] to-[#5B6FB8] rounded-2xl p-5 shadow-sm text-white",children:[y.jsxs("div",{className:"text-center mb-4",children:[y.jsx("p",{className:"text-xs opacity-80 mb-1",children:"もう一人のあなた"}),y.jsx("p",{className:"text-2xl font-bold",style:{fontFamily:"var(--font-serif)"},children:_})]}),y.jsx(Hn,{label:"手取り（年・可処分）",value:`${H(M.disposable)}万`,dark:!0}),y.jsx(Hn,{label:"家の広さ",value:`${T.floor}㎡`,dark:!0}),y.jsx(Hn,{label:"通勤（片道）",value:`${T.commute}分`,dark:!0}),y.jsx(Hn,{label:`${d}年でたまるお金`,value:`${H(M.savings)}万`,dark:!0,highlight:!0})]})]}),y.jsx("div",{className:"bg-[#EEF2FF] rounded-2xl p-6 mb-4",children:y.jsxs("p",{className:"text-sm text-[#1A1A1A] leading-relaxed",children:[x==="axis"&&y.jsxs(y.Fragment,{children:["「",o2.find(W=>W.key===S).label,"」なら、相手は",y.jsx("strong",{children:_}),"。",y.jsx("br",{})]}),_,"に住むもう一人のあなたは、家が",y.jsx("strong",{children:T.floor>P.floor?`${Math.round((T.floor/P.floor-1)*100)}%広く`:`${Math.round((1-T.floor/P.floor)*100)}%狭く`}),"、 通勤は",y.jsx("strong",{children:P.commute-T.commute>0?`片道${P.commute-T.commute}分短い`:`片道${T.commute-P.commute}分長い`}),"暮らし。",X>0?y.jsxs(y.Fragment,{children:[" そして",d,"年後には、いまのあなたより",y.jsxs("strong",{children:["約",H(X),"万円"]}),"多く貯まっている計算です",h?"（年収を維持できた場合）":"（移住先の給与水準でも、です）","。"]}):y.jsxs(y.Fragment,{children:[" ただし",d,"年後の貯蓄では、いまの",t,"のあなたが",y.jsxs("strong",{children:["約",H(-X),"万円"]}),"上回ります。稼ぎの差が効いてくるのです。"]})]})}),y.jsx("div",{className:"bg-[#FFF9E6] border border-[#F0E0A0]/50 rounded-xl p-4 mb-6",children:y.jsxs("p",{className:"text-xs text-[#8a7a3a] leading-relaxed",children:["⚠️ 政府統計（家賃・物価・給与・床面積など）を元にした",y.jsx("strong",{children:"試算"}),"です。年収は「維持／その県の水準」の選択に応じて計算しています。実際の暮らしは個人差が大きいため、傾向をつかむ参考としてご覧ください。"]})}),y.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[y.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(_)}`),className:"py-3 bg-[#3D52A0] text-white rounded-xl text-sm font-medium hover:bg-[#2d4090] transition-colors",children:[_,"の全データを見る →"]}),y.jsx("button",{onClick:()=>e("/diagnosis"),className:"py-3 bg-white border border-[#E5E0D8] text-[#717182] rounded-xl text-sm font-medium hover:border-[#3D52A0] hover:text-[#3D52A0] transition-all",children:"🗾 価値観から向いてる県を診断 →"})]})]}),E&&Y&&y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-6 text-center text-sm text-[#717182]",children:["選んだ条件だと、相手も「",t,"」になりました。別の軸や県を選ぶと、もう一人の自分に会えます。"]})]}),y.jsx(Gt,{})]})}function Hn({label:e,value:t,dark:r,highlight:n}){return y.jsxs("div",{className:`flex justify-between items-baseline py-2 ${n?"":"border-b"} ${r?"border-white/15":"border-[#F0EDE8]"}`,children:[y.jsx("span",{className:`text-xs ${r?"opacity-80":"text-[#717182]"}`,children:e}),y.jsx("span",{className:`font-mono font-bold ${n?"text-base":"text-sm"} ${r?"text-white":n?"text-[#3D52A0]":"text-[#1A1A1A]"}`,children:t})]})}const oi={rentCheap:[{pref:"秋田",value:30},{pref:"岩手",value:32},{pref:"山形",value:32},{pref:"青森",value:34},{pref:"島根",value:34}],floorWide:[{pref:"秋田",value:148.4},{pref:"富山",value:148.4},{pref:"島根",value:148.4},{pref:"福井",value:148.2},{pref:"岩手",value:142.4}],commuteShort:[{pref:"山形",value:22},{pref:"島根",value:22},{pref:"秋田",value:24},{pref:"福井",value:24},{pref:"鳥取",value:24}],incomeHigh:[{pref:"東京",value:485},{pref:"愛知",value:352},{pref:"神奈川",value:345},{pref:"大阪",value:332},{pref:"京都",value:325}],nurseryOk:[{pref:"秋田",value:0},{pref:"山形",value:0},{pref:"富山",value:0},{pref:"石川",value:0},{pref:"福井",value:0}],doctorMany:[{pref:"京都",value:338.3},{pref:"東京",value:334.7},{pref:"徳島",value:325.1},{pref:"岡山",value:317.4},{pref:"高知",value:311.8}]},uK=[{emoji:"🏡",title:"家賃が安い県",lead:"1Kの家賃相場が低い順。同じ予算で広く住めます。",unit:"千円",suffix:"/月",data:oi.rentCheap,detailId:"rent-price"},{emoji:"🏠",title:"家が広い県",lead:"持ち家の平均床面積が広い順。子育て世帯にゆとりを。",unit:"㎡",suffix:"",data:oi.floorWide,detailId:"house-floor-area"},{emoji:"🚃",title:"通勤がラクな県",lead:"平均通勤時間が短い順。可処分時間が増えます。",unit:"分",suffix:"/片道",data:oi.commuteShort,detailId:"commute-time"},{emoji:"💰",title:"所得が高い県",lead:"1人あたり県民所得が高い順。稼ぐ機会の多さ。",unit:"万円",suffix:"",data:oi.incomeHigh,detailId:"income"},{emoji:"👶",title:"子どもを預けやすい県",lead:"待機児童数が少ない順。共働き・子育て世帯に。",unit:"人",suffix:"",data:oi.nurseryOk,detailId:"nursery-waiting"},{emoji:"🏥",title:"医療が充実した県",lead:"人口10万人あたり医師数が多い順。安心の医療体制。",unit:"人",suffix:"",data:oi.doctorMany,detailId:"doctor-count"}];function cK(){const e=Dt();return y.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#F8F8F6] via-white to-[#F8F8F6]",children:[y.jsx(Vt,{}),y.jsxs("main",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14",children:[y.jsx("button",{onClick:()=>e("/"),className:"text-[#3D52A0] text-sm mb-6 flex items-center gap-1 hover:underline",children:"← トップに戻る"}),y.jsxs("div",{className:"mb-8",children:[y.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-3 leading-tight",style:{fontFamily:"var(--font-serif)"},children:["データで選ぶ、移住先の都道府県",y.jsx("br",{className:"hidden sm:block"}),"——家賃・年収・暮らしを数字で比較"]}),y.jsx("p",{className:"text-sm text-[#717182] leading-relaxed",children:"「住みやすい県」は人によって違います。大切なのは、雰囲気ではなく自分の優先順位に合う数字。家賃・所得・通勤・子育て・医療の6つの軸で、政府統計に基づくTOP5を一覧にしました。気になる県は、タップでその県の全データへ。最後に、あなたの年収で各県の暮らしを試算できるツールも紹介します。"})]}),y.jsx("div",{className:"space-y-5",children:uK.map(t=>y.jsxs("div",{className:"bg-white rounded-2xl border border-[#E5E0D8]/50 p-5 shadow-sm",children:[y.jsxs("div",{className:"flex items-start justify-between mb-1",children:[y.jsxs("h2",{className:"text-lg font-bold text-[#1A1A1A]",style:{fontFamily:"var(--font-serif)"},children:[y.jsx("span",{className:"mr-1.5",children:t.emoji}),t.title]}),y.jsx("button",{onClick:()=>e(`/detail/${t.detailId}`),className:"text-xs text-[#3D52A0] hover:underline flex-shrink-0 mt-1",children:"全国ランキング →"})]}),y.jsx("p",{className:"text-xs text-[#717182] mb-3",children:t.lead}),y.jsx("div",{className:"space-y-1",children:t.data.map((r,n)=>y.jsxs("button",{onClick:()=>e(`/pref/${encodeURIComponent(r.pref)}`),className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#F8F8F6] transition-colors group text-left",children:[y.jsx("span",{className:`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${n===0?"bg-[#3D52A0] text-white":"bg-[#F0EDE8] text-[#717182]"}`,children:n+1}),y.jsx("span",{className:"flex-1 text-sm font-medium text-[#1A1A1A] group-hover:text-[#3D52A0]",children:r.pref}),y.jsxs("span",{className:"text-sm font-mono text-[#717182]",children:[r.value,t.unit,t.suffix]}),y.jsx("span",{className:"text-[#C8C4BB] group-hover:text-[#3D52A0] text-xs",children:"→"})]},r.pref))})]},t.detailId))}),y.jsxs("div",{className:"mt-8 bg-gradient-to-br from-[#3D52A0] to-[#5B6FB8] rounded-2xl p-6 text-white",children:[y.jsx("h2",{className:"text-lg font-bold mb-2",style:{fontFamily:"var(--font-serif)"},children:"あなたの場合は、どうなる？"}),y.jsx("p",{className:"text-sm opacity-90 mb-4",children:"年収と家族構成を入れると、いまの県と移住先の「暮らしの差」と「将来の貯蓄差」を試算できます。一覧の数字を、自分ごとに。"}),y.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[y.jsx("button",{onClick:()=>e("/tools/life-simulator"),className:"py-3 bg-white text-[#3D52A0] rounded-xl text-sm font-bold hover:bg-white/90 transition-colors",children:"🔮 人生シミュレーターを使う"}),y.jsx("button",{onClick:()=>e("/tools/rent-compare"),className:"py-3 bg-white/15 text-white rounded-xl text-sm font-medium hover:bg-white/25 transition-colors border border-white/20",children:"🏠 家賃で住める広さを比べる"})]})]}),y.jsx("div",{className:"mt-4 text-center",children:y.jsx("button",{onClick:()=>e("/diagnosis"),className:"text-sm text-[#3D52A0] hover:underline",children:"🗾 価値観から「向いてる県」を診断する →"})}),y.jsx("p",{className:"text-xs text-[#717182] mt-8 leading-relaxed",children:"※ 各ランキングは政府統計（国土交通省・総務省・内閣府・厚生労働省・文部科学省ほか）に基づきます。調査年は指標により異なります。数値は傾向を把握するための目安としてご覧ください。"})]}),y.jsx(Gt,{})]})}function fK(){const{pathname:e,hash:t}=Xn();return D.useEffect(()=>{window.scrollTo(0,0)},[e,t]),null}function dK(){return y.jsxs(lk,{children:[y.jsx(fK,{}),y.jsxs($7,{children:[y.jsx(Kt,{path:"/",element:y.jsx(kk,{})}),y.jsx(Kt,{path:"/ranking",element:y.jsx(XH,{})}),y.jsx(Kt,{path:"/diagnosis",element:y.jsx(ZS,{})}),y.jsx(Kt,{path:"/diagnosis/result/:pref",element:y.jsx(ZS,{})}),y.jsx(Kt,{path:"/pref/:pref",element:y.jsx(aK,{})}),y.jsx(Kt,{path:"/detail/:id",element:y.jsx(FH,{})}),y.jsx(Kt,{path:"/tools/rent-compare",element:y.jsx(oK,{})}),y.jsx(Kt,{path:"/tools/life-simulator",element:y.jsx(sK,{})}),y.jsx(Kt,{path:"/guide/migration",element:y.jsx(cK,{})}),y.jsx(Kt,{path:"/privacy",element:y.jsx(BH,{})}),y.jsx(Kt,{path:"/contact",element:y.jsx(qH,{})}),y.jsx(Kt,{path:"/column",element:y.jsx(LH,{})}),y.jsx(Kt,{path:"/column/:slug",element:y.jsx(KH,{})})]})]})}BP.createRoot(document.getElementById("root")).render(y.jsx(dK,{}));
