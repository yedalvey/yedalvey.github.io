(self.webpackChunk=self.webpackChunk||[]).push([[465],{99134:function(e,t,n){"use strict";const r=(0,n(67294).createContext)({});t.Z=r},21584:function(e,t,n){"use strict";var r=n(94184),o=n.n(r),i=n(67294),a=n(53124),c=n(99134),s=n(6999),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const u=["xs","sm","md","lg","xl","xxl"],f=i.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:r}=i.useContext(a.E_),{gutter:f,wrap:p,supportFlexGap:d}=i.useContext(c.Z),{prefixCls:y,span:b,order:m,offset:g,push:v,pull:x,className:$,children:h,flex:O,style:w}=e,C=l(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),j=n("col",y),[P,E]=(0,s.c)(j);let S={};u.forEach((t=>{let n={};const o=e[t];"number"==typeof o?n.span=o:"object"==typeof o&&(n=o||{}),delete C[t],S=Object.assign(Object.assign({},S),{[`${j}-${t}-${n.span}`]:void 0!==n.span,[`${j}-${t}-order-${n.order}`]:n.order||0===n.order,[`${j}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${j}-${t}-push-${n.push}`]:n.push||0===n.push,[`${j}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${j}-${t}-flex-${n.flex}`]:n.flex||"auto"===n.flex,[`${j}-rtl`]:"rtl"===r})}));const D=o()(j,{[`${j}-${b}`]:void 0!==b,[`${j}-order-${m}`]:m,[`${j}-offset-${g}`]:g,[`${j}-push-${v}`]:v,[`${j}-pull-${x}`]:x},$,S,E),k={};if(f&&f[0]>0){const e=f[0]/2;k.paddingLeft=e,k.paddingRight=e}if(f&&f[1]>0&&!d){const e=f[1]/2;k.paddingTop=e,k.paddingBottom=e}return O&&(k.flex=function(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}(O),!1!==p||k.minWidth||(k.minWidth=0)),P(i.createElement("div",Object.assign({},C,{style:Object.assign(Object.assign({},k),w),className:D,ref:t}),h))}));t.Z=f},92820:function(e,t,n){"use strict";var r=n(94184),o=n.n(r),i=n(67294),a=n(53124),c=n(98082),s=n(74443),l=n(99134),u=n(6999),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function p(e,t){const[n,r]=i.useState("string"==typeof e?e:"");return i.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<s.c.length;n++){const o=s.c[n];if(!t[o])continue;const i=e[o];if(void 0!==i)return void r(i)}})()}),[JSON.stringify(e),t]),n}const d=i.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:d,className:y,style:b,children:m,gutter:g=0,wrap:v}=e,x=f(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:$,direction:h}=i.useContext(a.E_),[O,w]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[C,j]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),P=p(d,C),E=p(r,C),S=(0,c.Z)(),D=i.useRef(g),k=(0,s.Z)();i.useEffect((()=>{const e=k.subscribe((e=>{j(e);const t=D.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&w(e)}));return()=>k.unsubscribe(e)}),[]);const R=$("row",n),[I,T]=(0,u.V)(R),A=(()=>{const e=[void 0,void 0];return(Array.isArray(g)?g:[g,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<s.c.length;r++){const o=s.c[r];if(O[o]&&void 0!==t[o]){e[n]=t[o];break}}else e[n]=t})),e})(),_=o()(R,{[`${R}-no-wrap`]:!1===v,[`${R}-${E}`]:E,[`${R}-${P}`]:P,[`${R}-rtl`]:"rtl"===h},y,T),M={},N=null!=A[0]&&A[0]>0?A[0]/-2:void 0,Z=null!=A[1]&&A[1]>0?A[1]/-2:void 0;N&&(M.marginLeft=N,M.marginRight=N),S?[,M.rowGap]=A:Z&&(M.marginTop=Z,M.marginBottom=Z);const[G,L]=A,U=i.useMemo((()=>({gutter:[G,L],wrap:v,supportFlexGap:S})),[G,L,v,S]);return I(i.createElement(l.Z.Provider,{value:U},i.createElement("div",Object.assign({},x,{className:_,style:Object.assign(Object.assign({},M),b),ref:t}),m)))}));t.Z=d},6999:function(e,t,n){"use strict";n.d(t,{V:function(){return s},c:function(){return l}});var r=n(67968),o=n(45503);const i=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},a=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},c=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,o={};for(let e=r;e>=0;e--)0===e?(o[`${n}${t}-${e}`]={display:"none"},o[`${n}-push-${e}`]={insetInlineStart:"auto"},o[`${n}-pull-${e}`]={insetInlineEnd:"auto"},o[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},o[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},o[`${n}${t}-offset-${e}`]={marginInlineStart:0},o[`${n}${t}-order-${e}`]={order:0}):(o[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/r*100}%`,maxWidth:e/r*100+"%"},o[`${n}${t}-push-${e}`]={insetInlineStart:e/r*100+"%"},o[`${n}${t}-pull-${e}`]={insetInlineEnd:e/r*100+"%"},o[`${n}${t}-offset-${e}`]={marginInlineStart:e/r*100+"%"},o[`${n}${t}-order-${e}`]={order:e});return o})(e,t),s=(0,r.Z)("Grid",(e=>[i(e)])),l=(0,r.Z)("Grid",(e=>{const t=(0,o.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[a(t),c(t,""),c(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},c(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},20640:function(e,t,n){"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,c,s,l,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),a()}return u}},74300:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=c(n(67294)),i=c(n(20640)),a=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,n,r,c=y(s);function s(){var e;f(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(m(e=c.call.apply(c,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,a=n.onCopy,c=n.children,s=n.options,l=o.default.Children.only(c),u=(0,i.default)(r,s);a&&a(r,u),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,a),r=o.default.Children.only(t);return o.default.cloneElement(r,l(l({},n),{},{onClick:this.onClick}))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.default.PureComponent);t.CopyToClipboard=x,v(x,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,t,n){"use strict";var r=n(74300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);