(()=>{var e={6942:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,n(r)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"snow-monkey-blocks/tab-panel","uK":{"tabPanelId":{"type":"string","default":""},"ariaHidden":{"type":"string","source":"attribute","selector":".smb-tab-panel","attribute":"aria-hidden","default":"true"},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"customClassName":false,"reusable":false,"html":false,"anchor":true,"__experimentalToolbar":false,"inserter":false,"color":{"background":true,"text":true,"link":true},"layout":{"allowSwitching":false,"allowEditing":false,"allowInheriting":false,"default":{"type":"constrained"}}}}'),a=window.ReactJSXRuntime,o=(0,a.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{cx:"6.5",cy:"8",r:"1"}),(0,a.jsx)("path",{d:"M20,8H13.75a.25.25,0,0,1-.25-.25V5.5a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9A1,1,0,0,0,20,8Zm0,10a.54.54,0,0,1-.53.54H4.53A.54.54,0,0,1,4,18V6a.54.54,0,0,1,.53-.54H12A.54.54,0,0,1,12.5,6V8.25a.54.54,0,0,0,.53.54h6.44a.54.54,0,0,1,.53.54Z"})]});var n=r(6942),s=r.n(n);const l=window.wp.blockEditor,c=window.wp.data,i=window.wp.element;window.lodash;const d=e=>{if(null===e||"object"!=typeof e||Array.isArray(e))return e;const t=Object.entries(e).map((([e,t])=>[e,d(t)])).filter((([,e])=>null!=e&&""!==e));return t.length?Object.fromEntries(t):void 0},u=[{attributes:{...t.uK,tabPanelId:{type:"string",source:"attribute",selector:".smb-tab-panel",attribute:"id",default:""}},supports:{...t.xY,anchor:!1},migrate(e){const t={...e};return!t?.anchor&&t.tabPanelId&&(t.anchor=t?.tabPanelId),t},save({attributes:e,className:t}){const{tabPanelId:r,ariaHidden:o}=e,n=s()("smb-tab-panel",t);return(0,a.jsx)("div",{...l.useBlockProps.save({className:n}),id:r,"aria-hidden":o,role:"tabpanel",children:(0,a.jsx)("div",{...l.useInnerBlocksProps.save({className:"smb-tab-panel__body"})})})}}];(0,e.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:o},edit:function({attributes:e,setAttributes:t,className:r,clientId:o}){const{tabPanelId:n,backgroundColor:u,textColor:b,anchor:p,style:f,templateLock:m}=e,{updateBlockAttributes:k}=(0,c.useDispatch)("core/block-editor"),{getBlockParents:v,getBlockAttributes:g,getBlockOrder:y}=(0,c.useSelect)("core/block-editor"),h=v(o,!0)[0];(0,i.useEffect)((()=>{const e=g(h)?.tabs;if(!e)return;const r=JSON.parse(e),a=y(h).map(((e,a)=>{const s=r[a];if(e===o){const e=`block-${o}`,r=n!==e?e:n;n!==r&&t({tabPanelId:r});const a=p?.match(/^block(-([\da-z]+?)){5}$/)&&p!==r?r:p||r;return p!==a&&t({anchor:a}),d({...s,anchor:a,tabPanelId:r,backgroundColor:u||void 0,textColor:b||void 0,style:{...s?.style,color:{...s?.style?.color,background:f?.color?.background||void 0,text:f?.color?.text||void 0}}})}return s}));k(h,{tabs:JSON.stringify(a)})}),[u,b,f?.color?.background,f?.color?.text,p,o]);const x=(0,c.useSelect)((e=>!!e("core/block-editor").getBlock(o)?.innerBlocks?.length),[o]),w=s()("smb-tab-panel",r),B=(0,l.useBlockProps)({className:w}),P=(0,l.useInnerBlocksProps)({className:"smb-tab-panel__body"},{templateLock:m,renderAppender:x?l.InnerBlocks.DefaultBlockAppender:l.InnerBlocks.ButtonBlockAppender});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{...B,role:"tabpanel",id:p,children:(0,a.jsx)("div",{...P})})})},save:function({attributes:e,className:t}){const{ariaHidden:r}=e,o=s()("smb-tab-panel",t);return(0,a.jsx)("div",{...l.useBlockProps.save({className:o}),"aria-hidden":r,role:"tabpanel",children:(0,a.jsx)("div",{...l.useInnerBlocksProps.save({className:"smb-tab-panel__body"})})})},deprecated:u})})()})();