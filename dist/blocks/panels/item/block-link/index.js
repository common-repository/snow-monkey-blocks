(()=>{var e={6942:(e,o)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",o=0;o<arguments.length;o++){var t=arguments[o];t&&(e=l(e,s(t)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var t in e)n.call(e,t)&&e[t]&&(o=l(o,t));return o}function l(e,o){return o?e?e+" "+o:e+o:e}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(o,[]))||(e.exports=t)}()}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var s=o[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";const e=window.wp.blocks,o=JSON.parse('{"UU":"snow-monkey-blocks/panels-item-block-link","uK":{"linkURL":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"href","default":""},"linkTarget":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"target","default":"_self"},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"html":false,"color":{"background":true,"gradients":true,"text":true,"link":true},"layout":{"allowSwitching":false,"allowEditing":false,"allowInheriting":false,"default":{"type":"constrained"}}}}'),n=window.ReactJSXRuntime,r=(0,n.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,n.jsx)("path",{d:"M3,3v8h8V3Zm7,7H4V4h6Z"}),(0,n.jsx)("path",{d:"M13,3v8h8V3Zm7,7H14V4h6Z"}),(0,n.jsx)("path",{d:"M3,13v8h8V13Zm7,7H4V14h6Z"}),(0,n.jsx)("path",{d:"M13,13v8h8V13Zm7,7H14V14h6Z"})]});var s=t(6942),l=t.n(s);const a=window.wp.blockEditor,i=window.wp.compose,c=window.wp.components,d=window.wp.element,p=window.wp.data,m=window.wp.i18n,k=window.wp.primitives,u=(0,n.jsx)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(k.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})}),b={to:[{type:"block",blocks:["snow-monkey-blocks/panels-item"],transform:o=>(0,e.createBlock)("snow-monkey-blocks/panels-item",o)},{type:"block",blocks:["snow-monkey-blocks/panels-item-horizontal"],transform:o=>(0,e.createBlock)("snow-monkey-blocks/panels-item-horizontal",o)},{type:"block",blocks:["snow-monkey-blocks/panels-item-free"],transform:(o,t)=>(0,e.createBlock)("snow-monkey-blocks/panels-item-free",o,t)}]},_=[{attributes:{...o.uK,backgroundColor:{type:"string"},backgroundGradientColor:{type:"string"},textColor:{type:"string"}},supports:{...o.xY,color:{background:!1,gradients:!1,text:!1,link:!1}},migrate(e){const{backgroundColor:o,backgroundGradientColor:t,textColor:n}=e;let r={...e};return o&&(r={...r,backgroundColor:void 0,style:{...r?.style,color:{...r?.style?.color,background:o}}}),t&&(r={...r,backgroundGradientColor:void 0,style:{...r?.style,color:{...r?.style?.color,gradient:t}}}),n&&(r={...r,textColor:void 0,style:{...r?.style,color:{...r?.style?.color,text:n}}}),r},save({attributes:e,className:o}){const{backgroundColor:t,backgroundGradientColor:r,textColor:s,linkURL:i,linkTarget:c}=e,d=l()("c-row__col",o),p=l()("smb-panels__item","smb-panels__item--block-link"),k=l()("smb-panels__item__action","smb-panels__item__action--nolabel"),u={"--smb-panel--background-color":t,"--smb-panel--background-image":r,"--smb-panel--color":s};return(0,n.jsx)("div",{...a.useBlockProps.save({className:d}),children:(0,n.jsxs)("div",{className:p,style:u,children:[(0,n.jsx)("div",{...a.useInnerBlocksProps.save({className:"smb-panels__item__body"})}),!!i&&(0,n.jsx)("div",{className:k,children:(0,n.jsx)("a",{href:i,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer",children:(0,n.jsx)("span",{className:"screen-reader-text",children:(0,m.__)("Link","snow-monkey-blocks")})})})]})})}}];(0,e.registerBlockType)(o.UU,{icon:{foreground:"#cd162c",src:r},edit:function({attributes:e,setAttributes:o,isSelected:t,clientId:r}){const{linkURL:s,linkTarget:k,templateLock:b}=e,_=(0,a.__experimentalUseColorProps)({style:{color:{...e?.style?.color}},backgroundColor:e?.backgroundColor||void 0,textColor:e?.textColor||void 0,gradient:e?.gradient||void 0}),[v,g]=(0,d.useState)(!1),x=!!s,y="_blank"===k,[w,f]=(0,d.useState)(null),h=(0,p.useSelect)((e=>!!e("core/block-editor").getBlock(r)?.innerBlocks?.length),[r]),j=l()("smb-panels__item","smb-panels__item--block-link",_?.className),C=_?.style,N=l()("smb-panels__item__action","smb-panels__item__action--nolabel"),B=(0,d.useRef)(),L=(0,a.useBlockProps)({className:"c-row__col",ref:(0,i.useMergeRefs)([f,B])}),S=(0,a.useInnerBlocksProps)({className:"smb-panels__item__body"},{templateLock:b,renderAppender:h?a.InnerBlocks.DefaultBlockAppender:a.InnerBlocks.ButtonBlockAppender});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{...L,children:(0,n.jsxs)("div",{className:j,style:C,children:[(0,n.jsx)("div",{...S}),x&&(0,n.jsx)("div",{className:N,children:(0,n.jsx)("span",{className:"screen-reader-text",children:(0,m.__)("Link","snow-monkey-blocks")})})]})}),(0,n.jsx)(a.BlockControls,{group:"block",children:(0,n.jsx)(c.ToolbarButton,{name:"link",icon:u,title:(0,m.__)("Link","snow-monkey-blocks"),onClick:e=>{e.preventDefault(),g(!0)},isActive:x})}),t&&v&&(0,n.jsx)(c.Popover,{placement:"bottom",anchor:w,onClose:()=>{g(!1)},children:(0,n.jsx)(a.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:s,opensInNewTab:y},onChange:({url:e,opensInNewTab:t})=>o({linkURL:e,linkTarget:t?"_blank":"_self"}),onRemove:()=>{o({linkURL:void 0,linkTarget:void 0}),g(!1)},forceIsEditingLink:!x})})]})},save:function({attributes:e}){const{linkURL:o,linkTarget:t}=e,r=(0,a.__experimentalGetColorClassesAndStyles)({style:{color:{...e?.style?.color}},backgroundColor:e?.backgroundColor||void 0,textColor:e?.textColor||void 0,gradient:e?.gradient||void 0}),s=l()("smb-panels__item","smb-panels__item--block-link",r?.className),i=r?.style,c=l()("smb-panels__item__action","smb-panels__item__action--nolabel");return(0,n.jsx)("div",{...a.useBlockProps.save({className:"c-row__col"}),children:(0,n.jsxs)("div",{className:s,style:i,children:[(0,n.jsx)("div",{...a.useInnerBlocksProps.save({className:"smb-panels__item__body"})}),!!o&&(0,n.jsx)("div",{className:c,children:(0,n.jsx)("a",{href:o,target:"_self"===t?void 0:t,rel:"_self"===t?void 0:"noopener noreferrer",children:(0,n.jsx)("span",{className:"screen-reader-text",children:(0,m.__)("Link","snow-monkey-blocks")})})})]})})},transforms:b,deprecated:_})})()})();