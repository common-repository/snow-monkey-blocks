(()=>{var e={6942:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=l(e,s(o)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=l(t,o));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"name":"snow-monkey-blocks/information-item","uK":{"label":{"type":"string","source":"html","selector":".smb-information__item__label"},"labelColumnSize":{"type":"number","default":25},"smIsSplitColumn":{"type":"boolean","default":false},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}}}'),n=window.ReactJSXRuntime,r=(0,n.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,n.jsx)("path",{d:"M19.82,4.18V19.82H4.18V4.18H19.82M20.31,3H3.69A.69.69,0,0,0,3,3.69V20.31a.69.69,0,0,0,.69.69H20.31a.69.69,0,0,0,.69-.69V3.69A.69.69,0,0,0,20.31,3Z"}),(0,n.jsx)("rect",{x:"7.5",y:"4.07",width:"1.18",height:"15.99"}),(0,n.jsx)("rect",{x:"4.07",y:"7.38",width:"16.93",height:"1.18"}),(0,n.jsx)("rect",{x:"10.7",y:"11.41",width:"2.84",height:"1.18"}),(0,n.jsx)("rect",{x:"10.7",y:"14.96",width:"2.84",height:"1.18"}),(0,n.jsx)("rect",{x:"14.61",y:"11.41",width:"2.84",height:"1.18"}),(0,n.jsx)("rect",{x:"14.61",y:"14.96",width:"2.84",height:"1.18"})]});var s=o(6942),l=o.n(s);const i=window.wp.blockEditor,c=window.wp.data,a=window.wp.element,m=window.wp.i18n,d=(window.lodash,(e,t=null)=>{let o="1-3",n="2-3";return 75===parseInt(e)?(o="1-4",n="3-4"):66===parseInt(e)?(o="1-3",n="2-3"):50===parseInt(e)?(o="1-2",n="1-2"):33===parseInt(e)?(o="2-3",n="1-3"):25===parseInt(e)&&(o="3-4",n="1-4"),t&&100-parseInt(e)>=parseInt(t)&&(75===parseInt(t)?o="3-4":66===parseInt(t)?o="2-3":50===parseInt(t)?o="1-2":33===parseInt(t)?o="1-3":25===parseInt(t)&&(o="1-4")),{textColumnWidth:o,mediaColumnWidth:n,imageColumnWidth:n}}),_=[{attributes:{...t.uK},save({attributes:e,className:t}){const{label:o,labelColumnSize:r,smIsSplitColumn:s}=e,{imageColumnWidth:c,textColumnWidth:a}=d(r),m=l()("smb-information__item",t),_=l()("c-row__col",{"c-row__col--1-1":!s,[`c-row__col--md-${c}`]:!s,[`c-row__col--${c}`]:s}),u=l()("c-row__col",{"c-row__col--1-1":!s,[`c-row__col--md-${a}`]:!s,[`c-row__col--${a}`]:s});return(0,n.jsx)("div",{...i.useBlockProps.save({className:m}),children:(0,n.jsxs)("div",{className:"c-row c-row--fill",children:[(0,n.jsx)("div",{className:_,children:(0,n.jsx)("div",{className:"smb-information__item__label",children:(0,n.jsx)(i.RichText.Content,{value:o})})}),(0,n.jsx)("div",{className:u,children:(0,n.jsx)("div",{className:"smb-information__item__body",children:(0,n.jsx)(i.InnerBlocks.Content,{})})})]})})}}],{name:u}=t;(0,e.registerBlockType)(t.name,{icon:{foreground:"#cd162c",src:r},edit:function({attributes:e,setAttributes:t,className:o,clientId:r,context:s}){const{label:_,templateLock:u}=e,{"snow-monkey-blocks/labelColumnSize":p,"snow-monkey-blocks/smIsSplitColumn":w}=s,h=(0,c.useSelect)((e=>!!e("core/block-editor").getBlock(r)?.innerBlocks?.length),[r]);(0,a.useEffect)((()=>{t({labelColumnSize:p,smIsSplitColumn:w})}),[p,w]);const{imageColumnWidth:x,textColumnWidth:b}=d(p),v=l()("smb-information__item",o),f=l()("c-row__col",{"c-row__col--1-1":!w,[`c-row__col--md-${x}`]:!w,[`c-row__col--${x}`]:w}),j=l()("c-row__col",{"c-row__col--1-1":!w,[`c-row__col--md-${b}`]:!w,[`c-row__col--${b}`]:w}),y=(0,i.useBlockProps)({className:v}),g=(0,i.useInnerBlocksProps)({className:"smb-information__item__body"},{templateLock:u,renderAppender:h?i.InnerBlocks.DefaultBlockAppender:i.InnerBlocks.ButtonBlockAppender});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{...y,children:(0,n.jsxs)("div",{className:"c-row",children:[(0,n.jsx)("div",{className:f,children:(0,n.jsx)("div",{className:"smb-information__item__label",children:(0,n.jsx)(i.RichText,{placeholder:(0,m.__)("Write label…","snow-monkey-blocks"),value:_,onChange:e=>t({label:e})})})}),(0,n.jsx)("div",{className:j,children:(0,n.jsx)("div",{...g})})]})})})},save:function({attributes:e,className:t}){const{label:o,labelColumnSize:r,smIsSplitColumn:s}=e,{imageColumnWidth:c,textColumnWidth:a}=d(r),m=l()("smb-information__item",t),_=l()("c-row__col",{"c-row__col--1-1":!s,[`c-row__col--md-${c}`]:!s,[`c-row__col--${c}`]:s}),u=l()("c-row__col",{"c-row__col--1-1":!s,[`c-row__col--md-${a}`]:!s,[`c-row__col--${a}`]:s});return(0,n.jsx)("div",{...i.useBlockProps.save({className:m}),children:(0,n.jsxs)("div",{className:"c-row",children:[(0,n.jsx)("div",{className:_,children:(0,n.jsx)(i.RichText.Content,{tagName:"div",className:"smb-information__item__label",value:o})}),(0,n.jsx)("div",{className:u,children:(0,n.jsx)("div",{...i.useInnerBlocksProps.save({className:"smb-information__item__body"})})})]})})},deprecated:_})})()})();