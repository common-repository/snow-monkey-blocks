(()=>{var o,e={6854:(o,e,a)=>{"use strict";const r=window.wp.blocks,l=JSON.parse('{"UU":"snow-monkey-blocks/balloon","uK":{"showAvatar":{"type":"boolean","default":true},"avatarID":{"type":"number","default":0},"avatarURL":{"type":"string","source":"attribute","selector":"img","attribute":"src","default":"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},"avatarAlt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"avatarBorderColor":{"type":"string"},"avatarBorderStyle":{"type":"string"},"avatarBorderWidth":{"type":"string"},"backgroundColor":{"type":"string"},"borderColor":{"type":"string"},"borderStyle":{"type":"string"},"borderWidth":{"type":"string"},"textColor":{"type":"string"},"balloonName":{"type":"string","default":""},"modifier":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"html":false,"spacing":{"margin":true},"layout":{"allowSwitching":false,"allowEditing":false,"allowInheriting":false,"default":{"type":"constrained"}},"snowmonkeyeditor":{"blockPresets":{"ignore":["balloonBody"]}}}}'),t=window.ReactJSXRuntime,s=(0,t.jsx)("svg",{viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M20,5.48H4a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H7l1.12,3,3.29-3H20a1,1,0,0,0,1-1v-8A1,1,0,0,0,20,5.48ZM20,14a.5.5,0,0,1-.5.5H11.31l-1.1,1h0l-1.12,1-.5.46-.11-.31L8,15.4H8l-.35-.92H4.5A.5.5,0,0,1,4,14V7a.5.5,0,0,1,.5-.5h15A.5.5,0,0,1,20,7Z"})});var n=a(6942),i=a.n(n);const d=window.wp.blockEditor,b=window.wp.components,c=window.wp.primitives,m=(0,t.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(c.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})}),v=(0,t.jsx)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(c.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})}),u=window.wp.i18n,h=[["core/paragraph"]],p=l.uK,x=l.xY,_=[{attributes:{...p,balloonBody:{type:"string",source:"html",selector:".smb-balloon__body",multiline:"p",default:""}},supports:{...x},migrate(o){const{balloonBody:e}=o,a=(e.match(/<p>(.+?)<\/p>/g)||[]).map((o=>(0,r.rawHandler)({HTML:o})[0]));return[{...o},[...a]]},save({attributes:o,className:e}){const{avatarID:a,avatarAlt:r,avatarURL:l,avatarBorderColor:s,backgroundColor:n,textColor:b,balloonName:c,balloonBody:m,modifier:v}=o,u={"--smb-balloon--background-color":n||void 0,"--smb-balloon--border-color":n||void 0,"--smb-balloon--color":b||void 0,"--smb-balloon--avatar-border-color":s||void 0},h=i()("smb-balloon",{[e]:!!e,[`smb-balloon--${v}`]:!!v});return(0,t.jsxs)("div",{...d.useBlockProps.save({className:h,style:u}),children:[(0,t.jsxs)("div",{className:"smb-balloon__person",children:[(0,t.jsx)("div",{className:"smb-balloon__figure",children:(0,t.jsx)("img",{src:l,alt:r,className:`wp-image-${a}`})}),(0,t.jsx)("div",{className:"smb-balloon__name",children:(0,t.jsx)(d.RichText.Content,{value:c})})]}),(0,t.jsx)("div",{className:"smb-balloon__body",children:(0,t.jsx)(d.RichText.Content,{value:m})})]})}},{attributes:{...p,balloonBody:{type:"string",source:"html",selector:".smb-balloon__body",multiline:"p",default:""}},supports:{...x},migrate(o){const{balloonBody:e}=o,a=(e.match(/<p>(.+?)<\/p>/g)||[]).map((o=>(0,r.rawHandler)({HTML:o})[0]));return[{...o},[...a]]},save({attributes:o,className:e}){const{avatarID:a,avatarAlt:r,avatarURL:l,avatarBorderColor:s,backgroundColor:n,textColor:b,balloonName:c,balloonBody:m,modifier:v}=o,u={borderColor:s||void 0},h={backgroundColor:n||void 0,borderColor:n||void 0,color:b||void 0},p=i()("smb-balloon",{[e]:!!e,[`smb-balloon--${v}`]:!!v});return(0,t.jsxs)("div",{...d.useBlockProps.save({className:p}),children:[(0,t.jsxs)("div",{className:"smb-balloon__person",children:[(0,t.jsx)("div",{className:"smb-balloon__figure",style:u,children:(0,t.jsx)("img",{src:l,alt:r,className:`wp-image-${a}`})}),(0,t.jsx)("div",{className:"smb-balloon__name",children:(0,t.jsx)(d.RichText.Content,{value:c})})]}),(0,t.jsx)("div",{className:"smb-balloon__body",style:h,children:(0,t.jsx)(d.RichText.Content,{value:m})})]})}},{attributes:{...p,balloonBody:{type:"string",source:"html",selector:".smb-balloon__body",multiline:"p",default:""}},supports:{...x},migrate(o){const{balloonBody:e}=o,a=(e.match(/<p>(.+?)<\/p>/g)||[]).map((o=>(0,r.rawHandler)({HTML:o})[0]));return[{...o},[...a]]},save({attributes:o}){const{avatarID:e,avatarURL:a,avatarBorderColor:r,balloonName:l,balloonBody:s,modifier:n}=o;return(0,t.jsxs)("div",{className:i()("smb-balloon",{[`smb-balloon--${n}`]:!!n}),children:[(0,t.jsxs)("div",{className:"smb-balloon__person",children:[(0,t.jsx)("div",{className:"smb-balloon__figure",style:{borderColor:r},children:(0,t.jsx)("img",{src:a,alt:"",className:`wp-image-${e}`})}),(0,t.jsx)("div",{className:"smb-balloon__name",children:l})]}),(0,t.jsx)("div",{className:"smb-balloon__body",children:(0,t.jsx)(d.RichText.Content,{value:s})})]})}},{attributes:{...p,balloonBody:{type:"string",source:"html",selector:".smb-balloon__body",multiline:"p",default:""}},supports:{...x},migrate(o){const{balloonBody:e}=o,a=(e.match(/<p>(.+?)<\/p>/g)||[]).map((o=>(0,r.rawHandler)({HTML:o})[0]));return[{...o},[...a]]},save({attributes:o}){const{avatarURL:e,avatarBorderColor:a,balloonName:r,balloonBody:l,modifier:s}=o;return(0,t.jsxs)("div",{className:i()("smb-balloon",{[`smb-balloon--${s}`]:!!s}),children:[(0,t.jsxs)("div",{className:"smb-balloon__person",children:[(0,t.jsx)("div",{className:"smb-balloon__figure",style:{borderColor:a},children:(0,t.jsx)("img",{src:e,alt:""})}),(0,t.jsx)("div",{className:"smb-balloon__name",children:r})]}),(0,t.jsx)("div",{className:"smb-balloon__body",children:(0,t.jsx)(d.RichText.Content,{value:l})})]})}}];(0,r.registerBlockType)(l.UU,{icon:{foreground:"#cd162c",src:s},edit:function({attributes:o,setAttributes:e,className:a}){const{showAvatar:r,avatarID:s,avatarAlt:n,avatarURL:c,avatarBorderColor:p,avatarBorderStyle:x,avatarBorderWidth:_,backgroundColor:y,borderColor:g,borderStyle:f,borderWidth:w,textColor:j,balloonName:k,modifier:C,templateLock:B}=o,N=(0,d.__experimentalUseMultipleOriginColorsAndGradients)(),S={"--smb-balloon--background-color":y||void 0,"--smb-balloon--border-color":g||y||void 0,"--smb-balloon--border-style":f||void 0,"--smb-balloon--border-width":w||void 0,"--smb-balloon--color":j||void 0,"--smb-balloon--avatar-border-color":p||void 0,"--smb-balloon--avatar-border-style":x||void 0,"--smb-balloon--avatar-border-width":_||void 0},A=i()("smb-balloon",{[a]:!!a,[`smb-balloon--${C}`]:!!C}),T=(0,d.useBlockProps)({className:A,style:S}),R=(0,d.useInnerBlocksProps)({className:"smb-balloon__body"},{template:h,templateLock:B});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.InspectorControls,{children:[(0,t.jsxs)(b.__experimentalToolsPanel,{label:(0,u.__)("Balloon settings","snow-monkey-blocks"),children:[(0,t.jsx)(b.__experimentalToolsPanelItem,{hasValue:()=>g!==l.uK.borderColor.default||f!==l.uK.borderStyle.default||w!==l.uK.borderWidth.default,isShownByDefault:!0,label:(0,u.__)("Border","snow-monkey-blocks"),onDeselect:()=>e({borderColor:l.uK.borderColor.default,borderStyle:l.uK.borderStyle.default,borderWidth:l.uK.borderWidth.default}),children:(0,t.jsx)(b.__experimentalBorderBoxControl,{...N,className:"smb-border-box-control",label:(0,u.__)("Border","snow-monkey-blocks"),enableAlpha:!0,enableStyle:!0,onChange:o=>{e({borderColor:o?.color,borderStyle:o?.style,borderWidth:o?.width})},popoverOffset:40,popoverPlacement:"left-start",value:{color:g,style:f,width:w},__experimentalIsRenderedInSidebar:!0})}),(0,t.jsxs)("div",{className:"smb-color-gradient-settings-dropdown",children:[(0,t.jsx)(d.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,u.__)("Background color","snow-monkey-blocks"),colorValue:y,onColorChange:o=>e({backgroundColor:o})},{label:(0,u.__)("Text color","snow-monkey-blocks"),colorValue:j,onColorChange:o=>e({textColor:o})}],__experimentalIsRenderedInSidebar:!0,...N}),(0,t.jsx)(d.ContrastChecker,{backgroundColor:y,textColor:j})]})]}),(0,t.jsxs)(b.__experimentalToolsPanel,{label:(0,u.__)("Avatar settings","snow-monkey-blocks"),children:[(0,t.jsx)(b.__experimentalToolsPanelItem,{hasValue:()=>r!==l.uK.showAvatar.default,isShownByDefault:!0,label:(0,u.__)("Show avatar","snow-monkey-blocks"),onDeselect:()=>e({showAvatar:l.uK.showAvatar.default}),children:(0,t.jsx)(b.ToggleControl,{label:(0,u.__)("Show avatar","snow-monkey-blocks"),checked:r,onChange:o=>e({showAvatar:o})})}),r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.__experimentalToolsPanelItem,{hasValue:()=>C!==l.uK.modifier.default,isShownByDefault:!0,label:(0,u.__)("Avatar position","snow-monkey-blocks"),onDeselect:()=>e({modifier:l.uK.modifier.default}),children:(0,t.jsx)(b.SelectControl,{label:(0,u.__)("Avatar position","snow-monkey-blocks"),value:C,onChange:o=>e({modifier:"reverse"===o?o:""}),options:[{value:"",label:(0,u.__)("Left","snow-monkey-blocks")},{value:"reverse",label:(0,u.__)("Right","snow-monkey-blocks")}]})}),(0,t.jsx)(b.__experimentalToolsPanelItem,{hasValue:()=>p!==l.uK.avatarBorderColor.default||x!==l.uK.avatarBorderStyle.default||_!==l.uK.avatarBorderWidth.default,isShownByDefault:!0,label:(0,u.__)("Border","snow-monkey-blocks"),onDeselect:()=>e({avatarBorderColor:l.uK.avatarBorderColor.default,avatarBorderStyle:l.uK.avatarBorderStyle.default,avatarBorderWidth:l.uK.avatarBorderWidth.default}),children:(0,t.jsx)(b.__experimentalBorderBoxControl,{...N,className:"smb-border-box-control",label:(0,u.__)("Border","snow-monkey-blocks"),enableAlpha:!0,enableStyle:!0,onChange:o=>{e({avatarBorderColor:o?.color,avatarBorderStyle:o?.style,avatarBorderWidth:o?.width})},popoverOffset:40,popoverPlacement:"left-start",value:{color:p,style:x,width:_},__experimentalIsRenderedInSidebar:!0})})]})]})]}),r&&(0,t.jsx)(d.BlockControls,{group:"block",children:(0,t.jsxs)(b.ToolbarGroup,{children:[(0,t.jsx)(b.ToolbarButton,{icon:m,title:(0,u.__)("Show avatar on left","snow-monkey-blocks"),isActive:""===C,onClick:()=>e({modifier:""})}),(0,t.jsx)(b.ToolbarButton,{icon:v,title:(0,u.__)("Show avatar on right","snow-monkey-blocks"),isActive:"reverse"===C,onClick:()=>e({modifier:"reverse"})})]})}),(0,t.jsxs)("div",{...T,children:[r&&(0,t.jsxs)("div",{className:"smb-balloon__person",children:[(0,t.jsx)("div",{className:"smb-balloon__figure",children:(0,t.jsx)(d.MediaUpload,{onSelect:o=>{const a=o.sizes.thumbnail?o.sizes.thumbnail.url:o.url;e({avatarURL:a,avatarID:o.id,avatarAlt:o.alt})},type:"image",value:s,render:o=>(0,t.jsx)(b.Button,{className:"image-button",onClick:o.open,style:{padding:0},children:(0,t.jsx)("img",{src:c,alt:n,className:`wp-image-${s}`})})})}),(0,t.jsx)(d.RichText,{className:"smb-balloon__name",value:k,onChange:o=>e({balloonName:o}),placeholder:(0,u.__)("Name","snow-monkey-blocks")})]}),(0,t.jsx)("div",{...R})]})]})},save:function({attributes:o,className:e}){const{showAvatar:a,avatarID:r,avatarAlt:l,avatarURL:s,avatarBorderColor:n,avatarBorderStyle:b,avatarBorderWidth:c,backgroundColor:m,borderColor:v,borderStyle:u,borderWidth:h,textColor:p,balloonName:x,modifier:_}=o,y={"--smb-balloon--background-color":m||void 0,"--smb-balloon--border-color":v||m||void 0,"--smb-balloon--border-style":u||void 0,"--smb-balloon--border-width":h||void 0,"--smb-balloon--color":p||void 0,"--smb-balloon--avatar-border-color":n||void 0,"--smb-balloon--avatar-border-style":b||void 0,"--smb-balloon--avatar-border-width":c||void 0},g=i()("smb-balloon",{[e]:!!e,[`smb-balloon--${_}`]:!!_});return(0,t.jsxs)("div",{...d.useBlockProps.save({className:g,style:y}),children:[a&&(0,t.jsxs)("div",{className:"smb-balloon__person",children:[(0,t.jsx)("div",{className:"smb-balloon__figure",children:(0,t.jsx)("img",{src:s,alt:l,className:`wp-image-${r}`})}),(0,t.jsx)("div",{className:"smb-balloon__name",children:(0,t.jsx)(d.RichText.Content,{value:x})})]}),(0,t.jsx)("div",{...d.useInnerBlocksProps.save({className:"smb-balloon__body"})})]})},deprecated:_})},6942:(o,e)=>{var a;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var o="",e=0;e<arguments.length;e++){var a=arguments[e];a&&(o=s(o,t(a)))}return o}function t(o){if("string"==typeof o||"number"==typeof o)return o;if("object"!=typeof o)return"";if(Array.isArray(o))return l.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var e="";for(var a in o)r.call(o,a)&&o[a]&&(e=s(e,a));return e}function s(o,e){return e?o?o+" "+e:o+e:o}o.exports?(l.default=l,o.exports=l):void 0===(a=function(){return l}.apply(e,[]))||(o.exports=a)}()}},a={};function r(o){var l=a[o];if(void 0!==l)return l.exports;var t=a[o]={exports:{}};return e[o](t,t.exports,r),t.exports}r.m=e,o=[],r.O=(e,a,l,t)=>{if(!a){var s=1/0;for(b=0;b<o.length;b++){a=o[b][0],l=o[b][1],t=o[b][2];for(var n=!0,i=0;i<a.length;i++)(!1&t||s>=t)&&Object.keys(r.O).every((o=>r.O[o](a[i])))?a.splice(i--,1):(n=!1,t<s&&(s=t));if(n){o.splice(b--,1);var d=l();void 0!==d&&(e=d)}}return e}t=t||0;for(var b=o.length;b>0&&o[b-1][2]>t;b--)o[b]=o[b-1];o[b]=[a,l,t]},r.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return r.d(e,{a:e}),e},r.d=(o,e)=>{for(var a in e)r.o(e,a)&&!r.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:e[a]})},r.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{var o={1192:0,3296:0};r.O.j=e=>0===o[e];var e=(e,a)=>{var l,t,s=a[0],n=a[1],i=a[2],d=0;if(s.some((e=>0!==o[e]))){for(l in n)r.o(n,l)&&(r.m[l]=n[l]);if(i)var b=i(r)}for(e&&e(a);d<s.length;d++)t=s[d],r.o(o,t)&&o[t]&&o[t][0](),o[t]=0;return r.O(b)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var l=r.O(void 0,[3296],(()=>r(6854)));l=r.O(l)})();