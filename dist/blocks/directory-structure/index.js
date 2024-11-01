(()=>{var r,e={3232:(r,e,o)=>{"use strict";const t=window.wp.blocks,n=JSON.parse('{"UU":"snow-monkey-blocks/directory-structure"}'),s=window.ReactJSXRuntime,i=(0,s.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,s.jsx)("path",{d:"M23.28,2.57H18.76a.19.19,0,0,1-.18-.19V.73A.73.73,0,0,0,17.86,0H11.72A.73.73,0,0,0,11,.73v9.54a.73.73,0,0,0,.72.73H23.28a.73.73,0,0,0,.72-.73v-7A.72.72,0,0,0,23.28,2.57Zm-.28,7a.37.37,0,0,1-.37.38H12.37A.37.37,0,0,1,12,9.62V1.37A.37.37,0,0,1,12.37,1h4.76a.37.37,0,0,1,.37.37V3.25a.36.36,0,0,0,.37.37h4.76A.37.37,0,0,1,23,4Z"}),(0,s.jsx)("path",{d:"M23.28,15.57H18.76a.19.19,0,0,1-.18-.19V13.73a.73.73,0,0,0-.72-.73H11.72a.73.73,0,0,0-.72.73v9.54a.73.73,0,0,0,.72.73H23.28a.73.73,0,0,0,.72-.73v-7A.72.72,0,0,0,23.28,15.57ZM23,22.62a.37.37,0,0,1-.37.38H12.37a.37.37,0,0,1-.37-.38V14.37a.37.37,0,0,1,.37-.37h4.76a.37.37,0,0,1,.37.37v1.88a.36.36,0,0,0,.37.37h4.76A.37.37,0,0,1,23,17Z"}),(0,s.jsx)("path",{d:"M3,0H4A0,0,0,0,1,4,0V19a0,0,0,0,1,0,0H3.32A.32.32,0,0,1,3,18.68V0A0,0,0,0,1,3,0Z"}),(0,s.jsx)("rect",{x:"3",y:"5",width:"6",height:"1"}),(0,s.jsx)("rect",{x:"4",y:"18",width:"5",height:"1"})]});var c=o(6942),a=o.n(c);const l=window.wp.blockEditor,u=window.wp.data,d=window.wp.i18n,p=["snow-monkey-blocks/directory-structure-item-directory","snow-monkey-blocks/directory-structure-item-file"];(0,t.registerBlockType)(n.UU,{icon:{foreground:"#cd162c",src:i},edit:function({attributes:r,setAttributes:e,className:o,clientId:t}){const{iconColor:i,templateLock:c}=r,v=(0,u.useSelect)((r=>!!r("core/block-editor").getBlock(t)?.innerBlocks?.length),[t]),f=a()("smb-directory-structure",o),y={"--smb-directory-structure--icon-color":i||void 0},h=(0,l.useBlockProps)({className:f,style:y}),k=(0,l.useInnerBlocksProps)(h,{allowedBlocks:p,templateLock:c,renderAppender:v?l.InnerBlocks.DefaultBlockAppender:l.InnerBlocks.ButtonBlockAppender});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.InspectorControls,{group:"color",children:(0,s.jsx)(l.__experimentalColorGradientSettingsDropdown,{settings:[{colorValue:i,onColorChange:r=>e({iconColor:r}),resetAllFilter:()=>({iconColor:n.iconColor}),label:(0,d.__)("Icon color","snow-monkey-blocks")}],__experimentalIsRenderedInSidebar:!0,...(0,l.__experimentalUseMultipleOriginColorsAndGradients)(),panelId:t})}),(0,s.jsx)("div",{...k})]})},save:function({attributes:r,className:e}){const{iconColor:o}=r,t=a()("smb-directory-structure",e),n={"--smb-directory-structure--icon-color":o||void 0};return(0,s.jsx)("div",{...l.useInnerBlocksProps.save(l.useBlockProps.save({className:t,style:n}))})}})},6942:(r,e)=>{var o;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var r="",e=0;e<arguments.length;e++){var o=arguments[e];o&&(r=i(r,s(o)))}return r}function s(r){if("string"==typeof r||"number"==typeof r)return r;if("object"!=typeof r)return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var e="";for(var o in r)t.call(r,o)&&r[o]&&(e=i(e,o));return e}function i(r,e){return e?r?r+" "+e:r+e:r}r.exports?(n.default=n,r.exports=n):void 0===(o=function(){return n}.apply(e,[]))||(r.exports=o)}()}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}t.m=e,r=[],t.O=(e,o,n,s)=>{if(!o){var i=1/0;for(u=0;u<r.length;u++){o=r[u][0],n=r[u][1],s=r[u][2];for(var c=!0,a=0;a<o.length;a++)(!1&s||i>=s)&&Object.keys(t.O).every((r=>t.O[r](o[a])))?o.splice(a--,1):(c=!1,s<i&&(i=s));if(c){r.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=r.length;u>0&&r[u-1][2]>s;u--)r[u]=r[u-1];r[u]=[o,n,s]},t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r={8164:0,9484:0};t.O.j=e=>0===r[e];var e=(e,o)=>{var n,s,i=o[0],c=o[1],a=o[2],l=0;if(i.some((e=>0!==r[e]))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(a)var u=a(t)}for(e&&e(o);l<i.length;l++)s=i[l],t.o(r,s)&&r[s]&&r[s][0](),r[s]=0;return t.O(u)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var n=t.O(void 0,[9484],(()=>t(3232)));n=t.O(n)})();