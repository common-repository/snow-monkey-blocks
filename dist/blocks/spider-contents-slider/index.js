(()=>{var e,s={8674:(e,s,o)=>{"use strict";const t=window.wp.blocks,a=window.wp.i18n,r=JSON.parse('{"UU":"snow-monkey-blocks/spider-contents-slider","uK":{"sizeSlug":{"type":"string","default":"full"},"dots":{"type":"boolean","default":false},"arrows":{"type":"boolean","default":false},"fade":{"type":"boolean","default":false},"shuffle":{"type":"boolean","default":false},"shifted":{"type":"boolean","default":false},"gutter":{"type":"string"},"interval":{"type":"number","default":0},"autoplayButton":{"type":"boolean","default":false},"duration":{"type":"number","default":0},"lgSlidesToShow":{"type":"number","default":1},"mdSlidesToShow":{"type":"number","default":1},"smSlidesToShow":{"type":"number","default":1},"canvasPadding":{"type":"object","default":{}},"sliderClientIds":{"type":"string","default":"[]"},"border":{"type":"object","default":{"color":"","style":"","width":1,"radius":0}},"boxShadow":{"type":"object","default":{"color":"","opacity":0.1,"blur":10,"position":""}},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"xY":{"align":["wide","full"],"spacing":{"margin":true}}}'),i=window.ReactJSXRuntime,l=(0,i.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,i.jsx)("path",{d:"M5,5.78V18.22a.78.78,0,0,0,.78.78H18.22a.78.78,0,0,0,.78-.78V5.78A.78.78,0,0,0,18.22,5H5.78A.78.78,0,0,0,5,5.78m12.44,12H6.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H17.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39"}),(0,i.jsx)("path",{d:"M6.17,14.16l3.06-2.23a.22.22,0,0,1,.22,0l2.34,1.5a.21.21,0,0,0,.24,0l3-2.83a.19.19,0,0,1,.27,0l3.09,3v1.16l-3.09-3a.18.18,0,0,0-.27,0l-3,2.82a.19.19,0,0,1-.24,0L9.45,13.11a.18.18,0,0,0-.22,0L6.17,15.33Z"}),(0,i.jsx)("path",{d:"M2.22,5H0V6.17H1.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39H0V19H2.22A.78.78,0,0,0,3,18.22V5.78A.78.78,0,0,0,2.22,5Z"}),(0,i.jsx)("path",{d:"M24,17.83H22.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H24V5H21.78a.78.78,0,0,0-.78.78V18.22a.78.78,0,0,0,.78.78H24Z"})]});var d=o(6942),n=o.n(d),c=o(3558),p=o.n(c);const u=window.wp.blockEditor,h=window.wp.components,m=window.wp.data,b=window.wp.element,v=(0,b.forwardRef)((function({icon:e,size:s=24,...o},t){return(0,b.cloneElement)(e,{width:s,height:s,...o,ref:t})})),f=window.wp.primitives,w=(0,i.jsx)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,i.jsx)(f.Path,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"})});function x({settings:e,label:s}){const o={},t={},r=e.map(((e,s)=>{if(e.hasOwnProperty("colorValue")&&e.hasOwnProperty("onColorChange")){o.color=e.colorValue,t.color=e.onColorChange;const r=(0,u.__experimentalUseMultipleOriginColorsAndGradients)();return r.colors=r.colors.map((e=>{const s=e.colors.filter((e=>!e.color.match(/^var\(/)));return!(1>s.length)&&(e.colors=s,e)})).filter(Boolean),(0,i.jsx)("div",{className:"smb-color-gradient-settings-dropdown",children:(0,i.jsx)(u.__experimentalColorGradientSettingsDropdown,{settings:[{label:(0,a.__)("Color","snow-monkey-blocks"),colorValue:e.colorValue,onColorChange:e.onColorChange}],__experimentalIsRenderedInSidebar:!0,...r})},s)}return e.hasOwnProperty("opacityValue")&&e.hasOwnProperty("onOpacityChange")?(o.opacity=e.opacityValue,t.opacity=e.onOpacityChange,(0,i.jsx)(h.RangeControl,{label:(0,a.__)("Opacity","snow-monkey-blocks"),value:Number(e.opacityValue.toFixed(1)),onChange:e.onOpacityChange,min:0,max:1,step:.1},s)):e.hasOwnProperty("horizontalValue")&&e.hasOwnProperty("onHorizontalChange")?(o.horizontal=e.horizontalValue,t.horizontal=e.onHorizontalChange,(0,i.jsx)(h.RangeControl,{label:(0,a.__)("Horizontal","snow-monkey-blocks"),value:e.horizontalValue,onChange:e.onHorizontalChange,min:null!==(r=e?.min)&&void 0!==r?r:-100,max:null!==(l=e?.max)&&void 0!==l?l:100},s)):e.hasOwnProperty("verticalValue")&&e.hasOwnProperty("onVerticalChange")?(o.vertical=e.verticalValue,t.vertical=e.onVerticalChange,(0,i.jsx)(h.RangeControl,{label:(0,a.__)("Vertical","snow-monkey-blocks"),value:e.verticalValue,onChange:e.onVerticalChange,min:null!==(d=e?.min)&&void 0!==d?d:-100,max:null!==(n=e?.max)&&void 0!==n?n:100},s)):e.hasOwnProperty("blurValue")&&e.hasOwnProperty("onBlurChange")?(o.blur=e.blurValue,t.blur=e.onBlurChange,(0,i.jsx)(h.RangeControl,{label:(0,a.__)("Blur","snow-monkey-blocks"),value:e.blurValue,onChange:e.onBlurChange,min:null!==(c=e?.min)&&void 0!==c?c:0,max:null!==(p=e?.max)&&void 0!==p?p:100},s)):e.hasOwnProperty("spreadValue")&&e.hasOwnProperty("onSpreadChange")?(o.spread=e.spreadValue,t.spread=e.onSpreadChange,(0,i.jsx)(h.RangeControl,{label:(0,a.__)("Spread","snow-monkey-blocks"),value:e.spreadValue,onChange:e.onSpreadChange,min:null!==(m=e?.min)&&void 0!==m?m:-100,max:null!==(v=e?.max)&&void 0!==v?v:100},s)):e.hasOwnProperty("positionValue")&&e.hasOwnProperty("onPositionChange")?(o.position=e.positionValue,t.position=e.onPositionChange,(0,i.jsx)(h.SelectControl,{label:(0,a.__)("Position","snow-monkey-blocks"),value:e.positionValue,onChange:e.onPositionChange,options:[{value:"",label:(0,a.__)("Outline","snow-monkey-blocks")},{value:"inset",label:(0,a.__)("Inset","snow-monkey-blocks")}]},s)):(0,i.jsx)(b.Fragment,{},s);var r,l,d,n,c,p,m,v}));return(0,i.jsx)(h.__experimentalToolsPanel,{label:s||(0,a.__)("Box Shadow","snow-monkey-blocks"),className:"smb-box-shadow-tools-panel",children:(0,i.jsx)(h.__experimentalToolsPanelItem,{label:s||(0,a.__)("Box Shadow","snow-monkey-blocks"),hasValue:()=>e.some((e=>{if(e.hasOwnProperty("defaultValue")){let s;return e.hasOwnProperty("opacityValue")?s=e.opacityValue:e.hasOwnProperty("horizontalValue")?s=e.horizontalValue:e.hasOwnProperty("verticalValue")?s=e.verticalValue:e.hasOwnProperty("blurValue")?s=e.blurValue:e.hasOwnProperty("spreadValue")?s=e.spreadValue:e.hasOwnProperty("positionValue")&&(s=e.positionValue),void 0!==s&&e.defaultValue!==s}return!1})),isShownByDefault:!0,onDeselect:()=>{e.forEach((e=>{if(e.hasOwnProperty("defaultValue")){let s;e.hasOwnProperty("onOpacityChange")?s=e.onOpacityChange:e.hasOwnProperty("onHorizontalChange")?s=e.onHorizontalChange:e.hasOwnProperty("onVerticalChange")?s=e.onVerticalChange:e.hasOwnProperty("onBlurChange")?s=e.onBlurChange:e.hasOwnProperty("onSpreadChange")?s=e.onSpreadChange:e.hasOwnProperty("onPositionChange")&&(s=e.onPositionChange),void 0!==s&&s(e.defaultValue)}}))},children:r})})}function g(e){const{desktop:s,tablet:o,mobile:t}=e,a=[];return s&&a.push({name:"desktop",title:(0,i.jsx)(h.Dashicon,{icon:"desktop"})}),o&&a.push({name:"tablet",title:(0,i.jsx)(h.Dashicon,{icon:"tablet"})}),t&&a.push({name:"mobile",title:(0,i.jsx)(h.Dashicon,{icon:"smartphone"})}),(0,i.jsx)(h.TabPanel,{className:"smb-inspector-tabs",tabs:a,children:e=>{if(e.name){if("desktop"===e.name)return s();if("tablet"===e.name)return o();if("mobile"===e.name)return t()}}})}window.lodash;const _=(e,s=0,o=null)=>(e=Number(e),(isNaN(e)||e<s)&&(e=s),null!==o&&e>o&&(e=o),e),y=["snow-monkey-blocks/spider-contents-slider-item"],j=r.uK,S=r.xY,k=[{attributes:{...j},supports:{...S},save({attributes:e,className:s}){const{arrows:o,dots:t,fade:r,shuffle:l,shifted:d,gutter:c,interval:h,autoplayButton:m,duration:b,lgSlidesToShow:v,mdSlidesToShow:f,smSlidesToShow:w,canvasPadding:x,border:g,boxShadow:_,sliderClientIds:y}=e,j=JSON.parse(y),S="wide"===e.align,k="full"===e.align,N=d&&!r&&(S||k),C=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":N,[`smb-spider-slider--gutter-${c}`]:!!c}),P=String(g.width).match(/^\d+$/)?`${g.width}px`:g.width,B=String(g.radius).match(/^\d+$/)?`${g.radius}px`:g.radius,V={"--smb-spider-contents-slider--canvas-offset-top":!!x?.top&&`${x?.top}px`||void 0,"--smb-spider-contents-slider--canvas-offset-right":!!x?.right&&r&&`${x?.right}px`||void 0,"--smb-spider-contents-slider--canvas-offset-bottom":!!x?.bottom&&`${x?.bottom}px`||void 0,"--smb-spider-contents-slider--canvas-offset-left":!!x?.left&&r&&`${x?.left}px`||void 0,"--smb-spider-slider--gap":!c&&!r&&(!!x?.right||!!x?.left)&&(x?.right+x?.left)/2+"px"||void 0,"--smb-spider-contents-slider--slide-border-width":!!g.color&&0<parseInt(P)&&P||void 0,"--smb-spider-contents-slider--slide-border-color":g.color||void 0,"--smb-spider-contents-slider--slide-border-type":g.style||void 0,"--smb-spider-contents-slider--slide-border-radius":0<parseInt(B)&&B||void 0,"--smb-spider-contents-slider--slide-box-shadow":_.color?`0 0 ${_.blur}px ${p()(_.color,_.opacity)}`:void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:C,style:V}),"data-fade":r?"true":"false","data-shuffle":l?"true":"false","data-interval":0<h?1e3*h:void 0,"data-duration":0<b?1e3*b:void 0,"data-lg-slide-to-show":!r&&1<v?v:void 0,"data-md-slide-to-show":!r&&1<f?f:void 0,"data-sm-slide-to-show":!r&&1<w?w:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[N&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference"})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas"})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),(0<h&&m||t)&&(0,i.jsxs)("div",{className:"spider__dots",children:[m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"spider__stop",title:(0,a.__)("Pause autoplay","snow-monkey-blocks"),children:"⏸"}),(0,i.jsx)("button",{className:"spider__start",title:(0,a.__)("Start autoplay","snow-monkey-blocks"),children:"▶"})]}),t&&j.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))]})]})}},{attributes:{...j},supports:{...S},save({attributes:e,className:s}){const{arrows:o,dots:t,fade:a,shifted:r,gutter:l,interval:d,duration:c,lgSlidesToShow:h,mdSlidesToShow:m,smSlidesToShow:b,canvasPadding:v,border:f,boxShadow:w,sliderClientIds:x}=e,g=JSON.parse(x),_="wide"===e.align,y="full"===e.align,j=r&&!a&&(_||y),S=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":j,[`smb-spider-slider--gutter-${l}`]:!!l}),k=String(f.width).match(/^\d+$/)?`${f.width}px`:f.width,N=String(f.radius).match(/^\d+$/)?`${f.radius}px`:f.radius,C={"--smb-spider-contents-slider--canvas-offset-top":!!v?.top&&`${v?.top}px`||void 0,"--smb-spider-contents-slider--canvas-offset-right":!!v?.right&&a&&`${v?.right}px`||void 0,"--smb-spider-contents-slider--canvas-offset-bottom":!!v?.bottom&&`${v?.bottom}px`||void 0,"--smb-spider-contents-slider--canvas-offset-left":!!v?.left&&a&&`${v?.left}px`||void 0,"--smb-spider-slider--gap":!l&&!a&&(!!v?.right||!!v?.left)&&(v?.right+v?.left)/2+"px"||void 0,"--smb-spider-contents-slider--slide-border-width":!!f.color&&0<parseInt(k)&&k||void 0,"--smb-spider-contents-slider--slide-border-color":f.color||void 0,"--smb-spider-contents-slider--slide-border-type":f.style||void 0,"--smb-spider-contents-slider--slide-border-radius":0<parseInt(N)&&N||void 0,"--smb-spider-contents-slider--slide-box-shadow":w.color?`0 0 ${w.blur}px ${p()(w.color,w.opacity)}`:void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:S,style:C}),"data-fade":a?"true":"false","data-interval":0<d?1e3*d:void 0,"data-duration":0<c?1e3*c:void 0,"data-lg-slide-to-show":!a&&1<h?h:void 0,"data-md-slide-to-show":!a&&1<m?m:void 0,"data-sm-slide-to-show":!a&&1<b?b:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[j&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference"})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas"})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),t&&(0,i.jsx)("div",{className:"spider__dots",children:g.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))})]})}},{attributes:{...j},supports:{...S},save({attributes:e,className:s}){const{arrows:o,dots:t,fade:a,shifted:r,gutter:l,interval:d,duration:c,lgSlidesToShow:h,mdSlidesToShow:m,smSlidesToShow:b,canvasPadding:v,border:f,boxShadow:w,sliderClientIds:x}=e,g=JSON.parse(x),_="wide"===e.align,y="full"===e.align,j=r&&!a&&(_||y),S=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":j,[`smb-spider-slider--gutter-${l}`]:!!l}),k=String(f.width).match(/^\d+$/)?`${f.width}px`:f.width,N=String(f.radius).match(/^\d+$/)?`${f.radius}px`:f.radius,C={"--smb-spider-contents-slider--canvas-offset-top":!!v?.top&&`${v?.top}px`||void 0,"--smb-spider-contents-slider--canvas-offset-right":!!v?.right&&a&&`${v?.right}px`||void 0,"--smb-spider-contents-slider--canvas-offset-bottom":!!v?.bottom&&`${v?.bottom}px`||void 0,"--smb-spider-contents-slider--canvas-offset-left":!!v?.left&&a&&`${v?.left}px`||void 0,"--smb-spider-slider--gap":!l&&!a&&(!!v?.right||!!v?.left)&&(v?.right+v?.left)/2+"px"||void 0,"--smb-spider-contents-slider--slide-border-width":!!f.color&&0<parseInt(k)&&k||void 0,"--smb-spider-contents-slider--slide-border-color":f.color||void 0,"--smb-spider-contents-slider--slide-border-radius":0<parseInt(N)&&N||void 0,"--smb-spider-contents-slider--slide-box-shadow":w.color?`0 0 ${w.blur}px ${p()(w.color,w.opacity)}`:void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:S,style:C}),"data-fade":a?"true":"false","data-interval":0<d?1e3*d:void 0,"data-duration":0<c?1e3*c:void 0,"data-lg-slide-to-show":!a&&1<h?h:void 0,"data-md-slide-to-show":!a&&1<m?m:void 0,"data-sm-slide-to-show":!a&&1<b?b:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[j&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference"})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas"})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),t&&(0,i.jsx)("div",{className:"spider__dots",children:g.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))})]})}},{attributes:{...j},supports:{...S},save({attributes:e,className:s}){const{arrows:o,dots:t,fade:a,shifted:r,gutter:l,interval:d,duration:c,lgSlidesToShow:p,mdSlidesToShow:h,smSlidesToShow:m,canvasPadding:b,sliderClientIds:v}=e,f=JSON.parse(v),w="wide"===e.align,x="full"===e.align,g=r&&!a&&(w||x),_=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":g,[`smb-spider-slider--gutter-${l}`]:!!l}),y={"--smb-spider-contents-slider--canvas-offset-top":`${b?.top}px`||void 0,"--smb-spider-contents-slider--canvas-offset-right":a&&`${b?.right}px`||void 0,"--smb-spider-contents-slider--canvas-offset-bottom":`${b?.bottom}px`||void 0,"--smb-spider-contents-slider--canvas-offset-left":a&&`${b?.left}px`||void 0,"--smb-spider-slider--gap":!l&&!a&&(b?.right+b?.left)/2+"px"||void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:_,style:y}),"data-fade":a?"true":"false","data-interval":0<d?1e3*d:void 0,"data-duration":0<c?1e3*c:void 0,"data-lg-slide-to-show":!a&&1<p?p:void 0,"data-md-slide-to-show":!a&&1<h?h:void 0,"data-sm-slide-to-show":!a&&1<m?m:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[g&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference"})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas"})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),t&&(0,i.jsx)("div",{className:"spider__dots",children:f.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))})]})}},{attributes:{...j},supports:{...S},save({attributes:e,className:s}){const{arrows:o,dots:t,fade:a,shifted:r,gutter:l,interval:d,duration:c,lgSlidesToShow:p,mdSlidesToShow:h,smSlidesToShow:m,canvasPadding:b,sliderClientIds:v}=e,f=JSON.parse(v),w="wide"===e.align,x="full"===e.align,g=r&&!a&&(w||x),_=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":g,[`smb-spider-slider--gutter-${l}`]:!!l}),y={paddingTop:b?.top||void 0,paddingBottom:b?.bottom||void 0,paddingRight:b?.right||void 0,paddingLeft:b?.left||void 0},j={marginRight:b?.right||void 0,marginLeft:b?.left||void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:_}),"data-fade":a?"true":"false","data-interval":0<d?1e3*d:void 0,"data-duration":0<c?1e3*c:void 0,"data-lg-slide-to-show":!a&&1<p?p:void 0,"data-md-slide-to-show":!a&&1<h?h:void 0,"data-sm-slide-to-show":!a&&1<m?m:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[g&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference",style:j})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas",style:y})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),t&&(0,i.jsx)("div",{className:"spider__dots",children:f.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))})]})}},{attributes:{...j},supports:{...S},save({attributes:e,className:s}){const{arrows:o,dots:t,fade:a,shifted:r,gutter:l,interval:d,duration:c,lgSlidesToShow:p,mdSlidesToShow:h,smSlidesToShow:m,canvasPadding:b,sliderClientIds:v}=e,f=JSON.parse(v),w="wide"===e.align,x="full"===e.align,g=r&&!a&&(w||x),_=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":g,[`smb-spider-slider--gutter-${l}`]:!!l}),y={paddingTop:b?.top||void 0,paddingBottom:b?.bottom||void 0,paddingRight:b?.right||void 0,paddingLeft:b?.left||void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:_}),"data-fade":a?"true":"false","data-interval":0<d?1e3*d:void 0,"data-duration":0<c?1e3*c:void 0,"data-lg-slide-to-show":!a&&1<p?p:void 0,"data-md-slide-to-show":!a&&1<h?h:void 0,"data-sm-slide-to-show":!a&&1<m?m:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[g&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference"})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas",style:y})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),t&&(0,i.jsx)("div",{className:"spider__dots",children:f.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))})]})}},{attributes:{...j},supports:{...S},save({attributes:e,className:s}){const{arrows:o,dots:t,fade:a,shifted:r,gutter:l,interval:d,duration:c,lgSlidesToShow:p,mdSlidesToShow:h,smSlidesToShow:m,canvasPadding:b,sliderClientIds:v}=e,f=JSON.parse(v),w="wide"===e.align,x="full"===e.align,g=r&&!a&&(w||x),_=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":g,[`smb-spider-slider--gutter-${l}`]:!!l}),y={paddingTop:b?.top||void 0,paddingBottom:b?.bottom||void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:_}),"data-fade":a?"true":"false","data-interval":0<d?1e3*d:void 0,"data-duration":0<c?1e3*c:void 0,"data-lg-slide-to-show":!a&&1<p?p:void 0,"data-md-slide-to-show":!a&&1<h?h:void 0,"data-sm-slide-to-show":!a&&1<m?m:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[g&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference"})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas",style:y})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),t&&(0,i.jsx)("div",{className:"spider__dots",children:f.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))})]})}}];(0,t.registerBlockType)(r.UU,{icon:{foreground:"#cd162c",src:l},keywords:[(0,a.__)("Carousel","snow-monkey-blocks")],edit:function({attributes:e,setAttributes:s,className:o,isSelected:t,clientId:l}){const{arrows:d,dots:c,fade:f,shuffle:j,shifted:S,gutter:k,interval:N,autoplayButton:C,duration:P,lgSlidesToShow:B,mdSlidesToShow:V,smSlidesToShow:I,canvasPadding:T,border:$,boxShadow:O,sliderClientIds:D,templateLock:K}=e,A=JSON.parse(D),R="wide"===e.align,z="full"===e.align,H=!f,L=S&&H&&(R||z),M=(0,b.useRef)(),F=(0,b.useRef)(),J=(0,b.useRef)(),[E,G]=(0,b.useState)(void 0),{updateBlockAttributes:U,selectBlock:Z}=(0,m.useDispatch)("core/block-editor"),{getBlockAttributes:W,nowSliderClientIds:q,slides:Y,hasChildSelected:X}=(0,m.useSelect)((e=>{const s=e("core/block-editor").hasSelectedInnerBlock(l,!0);return{getBlockAttributes:e("core/block-editor").getBlockAttributes,nowSliderClientIds:e("core/block-editor").getBlockOrder(l),slides:e("core/block-editor").getBlock(l).innerBlocks,hasChildSelected:s}}),[l]);(0,b.useEffect)((()=>{let e;0<Y.length&&(e=Y.reduce(((e,s)=>(!!e?.attributes?.boxShadow?.color&&0<e?.attributes?.boxShadow?.blur||0)<(!!s?.attributes?.boxShadow?.color&&0<s?.attributes?.boxShadow?.blur||0)?s:e)));const o=O?.color&&0<O?.blur?O?.blur:0,t=e?.attributes?.boxShadow?.color&&0<e?.attributes?.boxShadow?.blur?e?.attributes?.boxShadow?.blur:0,a=o>t?o:t;a===T?.top&&a===T?.bottom&&a===T?.right&&a===T?.left||s({canvasPadding:{...T,top:a,bottom:a,right:a,left:a}})}),[Y.join(),O.blur]);const Q=(0,m.useSelect)((e=>{const s=Y.filter((s=>s.clientId===e("core/block-editor").getSelectedBlockClientId()));if(0<s.length)return G(s[0]),s[0]}),[Y.join()]);(0,b.useEffect)((()=>{0<q.length&&!E&&G(q[0]),A.length!==q.length&&s({sliderClientIds:JSON.stringify(q)}),q.forEach(((e,s)=>{const o=W(e);s!==parseInt(o?.sliderId)&&U(e,{sliderId:s})}))}),[q.join(),E]);const ee=!!M.current&&M.current.offsetWidth;(0,b.useEffect)((()=>{const e=!!M.current&&!!J.current&&L&&Math.floor(M.current.offsetWidth);e&&(M.current.style.setProperty("--spider--canvas-width",`${e}px`),J.current.style.width=`${e}px`);const s=!!F.current&&L&&Math.floor(F.current.offsetWidth);s&&M.current.style.setProperty("--spider--reference-width",`${s}px`)}),[ee,L]);const se=n()("smb-spider-slider","smb-spider-contents-slider",o,{"smb-spider-slider--shifted":L,[`smb-spider-slider--gutter-${k}`]:!!k}),oe=String($.width).match(/^\d+$/)?`${$.width}px`:$.width,te=String($.radius).match(/^\d+$/)?`${$.radius}px`:$.radius,ae={"--smb-spider-contents-slider--canvas-offset-top":!!T?.top&&`${T?.top}px`||void 0,"--smb-spider-contents-slider--canvas-offset-right":!!T?.right&&f&&`${T?.right}px`||void 0,"--smb-spider-contents-slider--canvas-offset-bottom":!!T?.bottom&&`${T?.bottom}px`||void 0,"--smb-spider-contents-slider--canvas-offset-left":!!T?.left&&f&&`${T?.left}px`||void 0,"--smb-spider-slider--gap":!k&&!f&&(!!T?.right||!!T?.left)&&(T?.right+T?.left)/2+"px"||void 0,"--smb-spider-contents-slider--slide-border-width":!!$.color&&0<parseInt(oe)&&oe||void 0,"--smb-spider-contents-slider--slide-border-color":$.color||void 0,"--smb-spider-contents-slider--slide-border-type":$.style||void 0,"--smb-spider-contents-slider--slide-border-radius":0<parseInt(te)&&te||void 0,"--smb-spider-contents-slider--slide-box-shadow":O.color?`0 0 ${O.blur}px ${p()(O.color,O.opacity)}`:void 0},re=[{value:"",label:(0,a.__)("None","snow-monkey-blocks")},{value:"s",label:(0,a.__)("S","snow-monkey-blocks")},{value:"m",label:(0,a.__)("M","snow-monkey-blocks")},{value:"l",label:(0,a.__)("L","snow-monkey-blocks")}],ie=(0,u.useInnerBlocksProps)({className:"spider__canvas"},{templateLock:K,allowedBlocks:y,orientation:"horizontal",renderAppender:!1});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.InspectorControls,{group:"dimensions",children:(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>k!==r.uK.gutter.default,isShownByDefault:!0,label:(0,a.__)("Gap","snow-monkey-blocks"),onDeselect:()=>s({gutter:r.uK.gutter.default}),panelId:l,children:(0,i.jsx)(h.SelectControl,{label:(0,a.__)("Gap","snow-monkey-blocks"),value:k,onChange:e=>s({gutter:e}),options:re})})}),(0,i.jsxs)(u.InspectorControls,{group:"border",children:[(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>$.color!==r.uK.border.default.color||$.style!==r.uK.border.default.style||$.width!==r.uK.border.default.width,isShownByDefault:!0,label:(0,a.__)("Border","snow-monkey-blocks"),onDeselect:()=>{s({border:{...$,color:r.uK.border.default.color,style:r.uK.border.default.style,width:r.uK.border.default.width}})},panelId:l,children:(0,i.jsx)(h.__experimentalBorderBoxControl,{...(0,u.__experimentalUseMultipleOriginColorsAndGradients)(),className:"smb-border-box-control",enableAlpha:!0,enableStyle:!0,onChange:e=>{s({border:{...$,color:e?.color,style:e?.style,width:e?.width}})},popoverOffset:40,popoverPlacement:"left-start",value:{color:$.color,style:$.style,width:$.width},__experimentalIsRenderedInSidebar:!0})}),(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>$.radius!==r.uK.border.default.radius,isShownByDefault:!0,label:(0,a.__)("Border radius","snow-monkey-blocks"),onDeselect:()=>{s({border:{...$,radius:r.uK.border.default.radius}})},panelId:l,children:(0,i.jsx)("div",{className:"smb-border-radius-control",children:(0,i.jsx)(u.__experimentalBorderRadiusControl,{values:$.radius,onChange:e=>{s({border:{...$,radius:e}})}})})})]}),(0,i.jsx)(u.InspectorControls,{group:"styles",children:(0,i.jsx)(x,{settings:[{colorValue:O.color||"",onColorChange:e=>{s({boxShadow:{...O,color:e}})}},{opacityValue:O.opacity,onOpacityChange:e=>{s({boxShadow:{...O,opacity:e}})}},{blurValue:O.blur,onBlurChange:e=>{s({boxShadow:{...O,blur:e}})},max:10}],defaultValues:{...r.uK.boxShadow.default}})}),(0,i.jsx)(u.InspectorControls,{children:(0,i.jsxs)(h.__experimentalToolsPanel,{label:(0,a.__)("Block settings","snow-monkey-blocks"),children:[(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>d!==r.uK.arrows.default,isShownByDefault:!0,label:(0,a.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>s({arrows:r.uK.arrows.default}),children:(0,i.jsx)(h.ToggleControl,{label:(0,a.__)("Display arrows","snow-monkey-blocks"),checked:d,onChange:e=>s({arrows:e})})}),(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>c!==r.uK.dots.default,isShownByDefault:!0,label:(0,a.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>s({dots:r.uK.dots.default}),children:(0,i.jsx)(h.ToggleControl,{label:(0,a.__)("Display dots","snow-monkey-blocks"),checked:c,onChange:e=>s({dots:e})})}),(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>f!==r.uK.fade.default,isShownByDefault:!0,label:(0,a.__)("Fade","snow-monkey-blocks"),onDeselect:()=>s({fade:r.uK.fade.default}),children:(0,i.jsx)(h.ToggleControl,{label:(0,a.__)("Fade","snow-monkey-blocks"),checked:f,onChange:e=>s({fade:e})})}),(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>j!==r.uK.shuffle.default,isShownByDefault:!0,label:(0,a.__)("Shuffle slides","snow-monkey-blocks"),onDeselect:()=>s({shuffle:r.uK.shuffle.default}),children:(0,i.jsx)(h.ToggleControl,{label:(0,a.__)("Shuffle slides","snow-monkey-blocks"),checked:j,onChange:e=>s({shuffle:e})})}),H&&(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>S!==r.uK.shifted.default,isShownByDefault:!0,label:(0,a.__)("Shifting the slider","snow-monkey-blocks"),onDeselect:()=>s({shifted:r.uK.shifted.default}),children:(0,i.jsx)(h.ToggleControl,{label:(0,a.__)("Shifting the slider","snow-monkey-blocks"),help:S&&(!z||!R)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{icon:w,style:{fill:"#d94f4f"}}),(0,a.__)("It must be full width (.alignfull) or wide width (.alignwide).","snow-monkey-blocks")]}),checked:S,onChange:e=>s({shifted:e})})}),(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>N!==r.uK.interval.default,isShownByDefault:!0,label:(0,a.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>s({interval:r.uK.interval.default}),children:(0,i.jsx)(h.RangeControl,{label:(0,a.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,a.__)('If "0", no scroll.',"snow-monkey-blocks"),value:N,onChange:e=>s({interval:_(e,0,10)}),min:"0",max:"10"})}),0<N&&(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>C!==r.uK.autoplayButton.default,isShownByDefault:!0,label:(0,a.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>s({autoplayButton:r.uK.autoplayButton.default}),children:(0,i.jsx)(h.ToggleControl,{label:(0,a.__)("Display pause button for autoplay","snow-monkey-blocks"),checked:C,onChange:e=>s({autoplayButton:e})})}),(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>P!==r.uK.duration.default,isShownByDefault:!0,label:(0,a.__)("Animation speed in seconds","snow-monkey-blocks"),onDeselect:()=>s({duration:r.uK.duration.default}),children:(0,i.jsx)(h.RangeControl,{label:(0,a.__)("Animation speed in seconds","snow-monkey-blocks"),help:(0,a.__)('If "0", default animation speed.',"snow-monkey-blocks"),value:P,onChange:e=>s({duration:_(e,0,10)}),min:"0",max:"5",step:"0.1"})}),!f&&(0,i.jsx)(h.__experimentalToolsPanelItem,{hasValue:()=>B!==r.uK.lgSlidesToShow.default||V!==r.uK.mdSlidesToShow.default||I!==r.uK.smSlidesToShow.default,isShownByDefault:!0,label:(0,a.__)("Slides settings","snow-monkey-blocks"),onDeselect:()=>s({lgSlidesToShow:r.uK.lgSlidesToShow.default,mdSlidesToShow:r.uK.mdSlidesToShow.default,smSlidesToShow:r.uK.smSlidesToShow.default}),children:(0,i.jsx)(g,{desktop:()=>(0,i.jsx)(h.RangeControl,{label:(0,a.__)("# of slides to show (Large window)","snow-monkey-blocks"),value:B,onChange:e=>s({lgSlidesToShow:_(e,1,6)}),min:"1",max:6<q.length?6:q.length}),tablet:()=>(0,i.jsx)(h.RangeControl,{label:(0,a.__)("# of slides to show (Medium window)","snow-monkey-blocks"),value:V,onChange:e=>s({mdSlidesToShow:_(e,1,6)}),min:"1",max:6<q.length?6:q.length}),mobile:()=>(0,i.jsx)(h.RangeControl,{label:(0,a.__)("# of slides to show (Small window)","snow-monkey-blocks"),value:I,onChange:e=>s({smSlidesToShow:_(e,1,6)}),min:"1",max:6<q.length?6:q.length})})})]})}),(0,i.jsxs)("div",{...(0,u.useBlockProps)({className:se,style:ae,ref:M}),"data-fade":f?"true":"false","data-shuffle":j?"true":"false","data-interval":0<N?1e3*N:void 0,"data-lg-slide-to-show":!f&&1<B?B:void 0,"data-md-slide-to-show":!f&&1<V?V:void 0,"data-sm-slide-to-show":!f&&1<I?I:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[L&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference",ref:F})}),(0,i.jsx)("div",{...ie,ref:J}),d&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),(0<N&&C||c)&&(0,i.jsxs)("div",{className:"spider__dots",children:[C&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"spider__stop",children:(0,i.jsxs)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,a.__)("Pause autoplay","snow-monkey-blocks"),children:[(0,i.jsx)("rect",{width:"5",height:"16",fill:"currentColor"}),(0,i.jsx)("rect",{x:"7",width:"5",height:"16",fill:"currentColor"})]})}),(0,i.jsx)("button",{className:"spider__start",children:(0,i.jsx)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,a.__)("Start autoplay","snow-monkey-blocks"),children:(0,i.jsx)("path",{d:"M12 8L-2.29967e-06 16L-2.29967e-06 0L12 8Z",fill:"currentColor"})})})]}),c&&q.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))]}),(t||X)&&(0,i.jsxs)("div",{className:"smb-slider-pagination",children:[q.map(((e,s)=>(0,i.jsx)(h.Button,{variant:E===e||Q?.clientId===e?"primary":"secondary",onClick:()=>{G(e),Z(e)},children:(0,i.jsx)("span",{children:s+1})},s))),(0,i.jsx)(u.InnerBlocks.ButtonBlockAppender,{})]})]})]})},save:function({attributes:e,className:s}){const{arrows:o,dots:t,fade:r,shuffle:l,shifted:d,gutter:c,interval:h,autoplayButton:m,duration:b,lgSlidesToShow:v,mdSlidesToShow:f,smSlidesToShow:w,canvasPadding:x,border:g,boxShadow:_,sliderClientIds:y}=e,j=JSON.parse(y),S="wide"===e.align,k="full"===e.align,N=d&&!r&&(S||k),C=n()("smb-spider-slider","smb-spider-contents-slider",s,{"smb-spider-slider--shifted":N,[`smb-spider-slider--gutter-${c}`]:!!c}),P=String(g.width).match(/^\d+$/)?`${g.width}px`:g.width,B=String(g.radius).match(/^\d+$/)?`${g.radius}px`:g.radius,V={"--smb-spider-contents-slider--canvas-offset-top":!!x?.top&&`${x?.top}px`||void 0,"--smb-spider-contents-slider--canvas-offset-right":!!x?.right&&r&&`${x?.right}px`||void 0,"--smb-spider-contents-slider--canvas-offset-bottom":!!x?.bottom&&`${x?.bottom}px`||void 0,"--smb-spider-contents-slider--canvas-offset-left":!!x?.left&&r&&`${x?.left}px`||void 0,"--smb-spider-slider--gap":!c&&!r&&(!!x?.right||!!x?.left)&&(x?.right+x?.left)/2+"px"||void 0,"--smb-spider-contents-slider--slide-border-width":!!g.color&&0<parseInt(P)&&P||void 0,"--smb-spider-contents-slider--slide-border-color":g.color||void 0,"--smb-spider-contents-slider--slide-border-type":g.style||void 0,"--smb-spider-contents-slider--slide-border-radius":0<parseInt(B)&&B||void 0,"--smb-spider-contents-slider--slide-box-shadow":_.color?`0 0 ${_.blur}px ${p()(_.color,_.opacity)}`:void 0};return(0,i.jsxs)("div",{...u.useBlockProps.save({className:C,style:V}),"data-fade":r?"true":"false","data-shuffle":l?"true":"false","data-interval":0<h?1e3*h:void 0,"data-duration":0<b?1e3*b:void 0,"data-lg-slide-to-show":!r&&1<v?v:void 0,"data-md-slide-to-show":!r&&1<f?f:void 0,"data-sm-slide-to-show":!r&&1<w?w:void 0,children:[(0,i.jsxs)("div",{className:"spider",children:[N&&(0,i.jsx)("div",{className:"c-container",children:(0,i.jsx)("div",{className:"spider__reference"})}),(0,i.jsx)("div",{...u.useInnerBlocksProps.save({className:"spider__canvas"})}),o&&(0,i.jsxs)("div",{className:"spider__arrows",children:[(0,i.jsx)("button",{className:"spider__arrow","data-direction":"prev",children:"Prev"}),(0,i.jsx)("button",{className:"spider__arrow","data-direction":"next",children:"Next"})]})]}),(0<h&&m||t)&&(0,i.jsxs)("div",{className:"spider__dots",children:[m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{className:"spider__stop",children:(0,i.jsxs)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,a.__)("Pause autoplay","snow-monkey-blocks"),children:[(0,i.jsx)("rect",{width:"5",height:"16",fill:"currentColor"}),(0,i.jsx)("rect",{x:"7",width:"5",height:"16",fill:"currentColor"})]})}),(0,i.jsx)("button",{className:"spider__start",children:(0,i.jsx)("svg",{width:"12",height:"16",viewBox:"0 0 12 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",title:(0,a.__)("Start autoplay","snow-monkey-blocks"),children:(0,i.jsx)("path",{d:"M12 8L-2.29967e-06 16L-2.29967e-06 0L12 8Z",fill:"currentColor"})})})]}),t&&j.map(((e,s)=>(0,i.jsx)("button",{className:"spider__dot","data-id":s,children:s},s)))]})]})},deprecated:k,example:{attributes:{arrows:!0,dots:!0},innerBlocks:[{name:"snow-monkey-blocks/spider-contents-slider-item",attributes:{contentPadding:"s"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}]},{name:"snow-monkey-blocks/spider-contents-slider-item",attributes:{contentPadding:"s"},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}]}]}})},3558:e=>{"use strict";var s=function(e){return parseInt(e,16)};e.exports=function(e,o){var t,a,r=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e),i=function(e){var o=e.g,t=e.b,a=e.a;return{r:s(e.r),g:s(o),b:s(t),a:+(s(a)/255).toFixed(2)}}({r:(a=3===(t=r).length||4===t.length)?"".concat(t.slice(0,1)).concat(t.slice(0,1)):t.slice(0,2),g:a?"".concat(t.slice(1,2)).concat(t.slice(1,2)):t.slice(2,4),b:a?"".concat(t.slice(2,3)).concat(t.slice(2,3)):t.slice(4,6),a:(a?"".concat(t.slice(3,4)).concat(t.slice(3,4)):t.slice(6,8))||"ff"});return function(e,s){var o,t=e.r,a=e.g,r=e.b,i=e.a,l=(o=s,!isNaN(parseFloat(o))&&isFinite(o)?s:i);return"rgba(".concat(t,", ").concat(a,", ").concat(r,", ").concat(l,")")}(i,o)}},6942:(e,s)=>{var o;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e="",s=0;s<arguments.length;s++){var o=arguments[s];o&&(e=i(e,r(o)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var o in e)t.call(e,o)&&e[o]&&(s=i(s,o));return s}function i(e,s){return s?e?e+" "+s:e+s:e}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(s,[]))||(e.exports=o)}()}},o={};function t(e){var a=o[e];if(void 0!==a)return a.exports;var r=o[e]={exports:{}};return s[e](r,r.exports,t),r.exports}t.m=s,e=[],t.O=(s,o,a,r)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var l=!0,d=0;d<o.length;d++)(!1&r||i>=r)&&Object.keys(t.O).every((e=>t.O[e](o[d])))?o.splice(d--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var n=a();void 0!==n&&(s=n)}}return s}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]},t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={9021:0,465:0};t.O.j=s=>0===e[s];var s=(s,o)=>{var a,r,i=o[0],l=o[1],d=o[2],n=0;if(i.some((s=>0!==e[s]))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(d)var c=d(t)}for(s&&s(o);n<i.length;n++)r=i[n],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))})();var a=t.O(void 0,[465],(()=>t(8674)));a=t.O(a)})();