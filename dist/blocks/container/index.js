(()=>{var e,t={5539:(e,t,n)=>{"use strict";const o=window.wp.blocks,s=JSON.parse('{"UU":"snow-monkey-blocks/container","uK":{"D$":{},"IR":{"A":false},"$I":{"A":false}}}'),r=window.ReactJSXRuntime,l=(0,r.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{d:"M3.86,2.5H1a1,1,0,0,0-1,1v16a1,1,0,0,0,1,1H3.86v-1H1.5A.5.5,0,0,1,1,19V4a.5.5,0,0,1,.5-.5H3.86v-1"}),(0,r.jsx)("path",{d:"M20.14,2.5H23a1,1,0,0,1,1,1v16a1,1,0,0,1-1,1H20.14v-1H22.5A.5.5,0,0,0,23,19V4a.5.5,0,0,0-.5-.5H20.14v-1"})]});var a=n(6942),i=n.n(a);const c=window.wp.blockEditor,d=window.wp.components,u=window.wp.data,m=window.wp.i18n;function p({label:e,onChange:t,value:n,withReset:o=!0},s){const l=(0,d.__experimentalUseCustomUnits)({availableUnits:["px","em","rem","%","vw"]}),a="smb-width-picker";return(0,r.jsx)("fieldset",{className:a,...s?{}:{ref:s},children:(0,r.jsx)("div",{className:`${a}__controls`,children:(0,r.jsxs)(d.Flex,{justify:"space-between",className:`${a}__custom-size-control`,children:[(0,r.jsx)(d.FlexItem,{isBlock:!0,children:(0,r.jsx)(d.__experimentalUnitControl,{label:e,labelPosition:"edge",value:n,onChange:e=>{e=0>parseFloat(e)||0===parseFloat(e)?void 0:e,t(e)},units:l})}),o&&(0,r.jsx)(d.FlexItem,{isBlock:!0,children:(0,r.jsx)(d.Button,{className:"components-color-palette__clear",disabled:void 0===n,onClick:()=>t(void 0),isSmall:!0,isSecondary:!0,children:(0,m.__)("Reset")})})]})})})}const h={from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert(e){const t=["wide","full"],n=e.reduce(((e,n)=>{const{align:o}=n.attributes;return t.indexOf(o)>t.indexOf(e)?o:e}),void 0),s=e.map((e=>(0,o.createBlock)(e.name,e.attributes,e.innerBlocks)));return(0,o.createBlock)("snow-monkey-blocks/container",{align:n},s)}}],ungroup:(e,t)=>t.flatMap((e=>e))};(0,o.registerBlockType)(s.UU,{icon:{foreground:"#cd162c",src:l},edit:function({attributes:e,setAttributes:t,className:n,clientId:o}){const{contentsMaxWidth:l,isSlim:a,removeGutters:h,templateLock:v}=e,f=(0,u.useSelect)((e=>{const{getBlock:t}=e("core/block-editor"),n=t(o);return!(!n||!n.innerBlocks.length)}),[o]),k=i()("smb-container","c-container",n,{"smb-container--no-gutters":h}),b=i()("smb-container__body",{"u-slim-width":a&&!l}),x={width:l&&!a?l:void 0},w=(0,c.useBlockProps)({className:k}),_=(0,c.useInnerBlocksProps)({className:b,style:x},{templateLock:v,renderAppender:f?c.InnerBlocks.DefaultBlockAppender:c.InnerBlocks.ButtonBlockAppender}),g=!!l,y=a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.InspectorControls,{children:(0,r.jsxs)(d.__experimentalToolsPanel,{label:(0,m.__)("Block settings","snow-monkey-blocks"),children:[!y&&(0,r.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>l!==s.uK.D$.default,isShownByDefault:!0,label:(0,m.__)("Max width of the contents","snow-monkey-blocks"),onDeselect:()=>t({contentsMaxWidth:s.uK.D$.default}),children:(0,r.jsx)(d.BaseControl,{label:(0,m.__)("Max width of the contents","snow-monkey-blocks"),id:"snow-monkey-blocks/container/contents-max-width",children:(0,r.jsx)(p,{value:l,onChange:e=>t({contentsMaxWidth:e}),withReset:!1})})}),!g&&(0,r.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>a!==s.uK.IR.A,isShownByDefault:!0,label:(0,m.__)("Make the contents width slim","snow-monkey-blocks"),onDeselect:()=>t({isSlim:s.uK.IR.A}),children:(0,r.jsx)(d.ToggleControl,{label:(0,m.__)("Make the contents width slim","snow-monkey-blocks"),checked:a,onChange:e=>t({isSlim:e})})}),(0,r.jsx)(d.__experimentalToolsPanelItem,{hasValue:()=>h!==s.uK.$I.A,isShownByDefault:!0,label:(0,m.__)("Remove left and right spaces","snow-monkey-blocks"),onDeselect:()=>t({removeGutters:s.uK.$I.A}),children:(0,r.jsx)(d.ToggleControl,{label:(0,m.__)("Remove left and right spaces","snow-monkey-blocks"),checked:h,onChange:e=>t({removeGutters:e})})})]})}),(0,r.jsx)("div",{...w,children:(0,r.jsx)("div",{..._})})]})},save:function({attributes:e,className:t}){const{contentsMaxWidth:n,isSlim:o,removeGutters:s}=e,l=i()("smb-container","c-container",t,{"smb-container--no-gutters":s}),a=i()("smb-container__body",{"u-slim-width":o&&!n}),d={width:n&&!o?n:void 0};return(0,r.jsx)("div",{...c.useBlockProps.save({className:l}),children:(0,r.jsx)("div",{...c.useInnerBlocksProps.save({className:a,style:d})})})},transforms:h})},6942:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,s,r)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],r=e[d][2];for(var a=!0,i=0;i<n.length;i++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(a=!1,r<l&&(l=r));if(a){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,s,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={4184:0,4992:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var s,r,l=n[0],a=n[1],i=n[2],c=0;if(l.some((t=>0!==e[t]))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(i)var d=i(o)}for(t&&t(n);c<l.length;c++)r=l[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=o.O(void 0,[4992],(()=>o(5539)));s=o.O(s)})();