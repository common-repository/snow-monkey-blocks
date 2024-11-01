(()=>{"use strict";var e={n:l=>{var o=l&&l.__esModule?()=>l.default:()=>l;return e.d(o,{a:o}),o},d:(l,o)=>{for(var t in o)e.o(o,t)&&!e.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:o[t]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};const l=window.wp.blocks,o=window.wp.i18n,t=JSON.parse('{"UU":"snow-monkey-blocks/taxonomy-posts","uK":{"taxonomy":{"type":"string","default":null},"termId":{"type":"number","default":0},"postsPerPage":{"type":"number","default":6},"layout":{"type":"string","default":"rich-media"},"gap":{"type":"string","default":""},"ignoreStickyPosts":{"type":"boolean","default":true},"smCols":{"type":"number","default":0},"noPostsText":{"type":"string","default":""},"itemTitleTagName":{"type":"string","default":"h3"},"itemThumbnailSizeSlug":{"type":"string","default":"full"},"forceDisplayItemMeta":{"type":"boolean","default":false},"forceDisplayItemTerms":{"type":"boolean","default":false},"displayItemAuthor":{"type":"boolean"},"displayItemPublished":{"type":"boolean","default":true},"displayItemModified":{"type":"boolean","default":false},"displayItemExcerpt":{"type":"boolean"},"categoryLabelTaxonomy":{"type":"string","default":""},"arrows":{"type":"boolean","default":false},"dots":{"type":"boolean","default":true},"interval":{"type":"number","default":0},"autoplayButton":{"type":"boolean","default":false},"anchor":{"type":"string","default":""},"clientId":{"type":"string","default":""}}}'),s=window.ReactJSXRuntime,a=(0,s.jsxs)("svg",{viewBox:"0 0 24 24",children:[(0,s.jsx)("rect",{x:"3",y:"6.5",width:"4",height:"1"}),(0,s.jsx)("rect",{x:"9",y:"6.5",width:"13",height:"1"}),(0,s.jsx)("rect",{x:"3",y:"11.5",width:"4",height:"1"}),(0,s.jsx)("rect",{x:"9",y:"11.5",width:"13",height:"1"}),(0,s.jsx)("rect",{x:"3",y:"16.5",width:"4",height:"1"}),(0,s.jsx)("rect",{x:"9",y:"16.5",width:"13",height:"1"})]}),n=window.lodash,i=window.wp.components,r=window.wp.blockEditor,c=window.wp.data,m=window.wp.element,u=window.wp.serverSideRender;var d=e.n(u);const y=(e,l=0,o=null)=>(e=Number(e),(isNaN(e)||e<l)&&(e=l),null!==o&&e>o&&(e=o),e),p=e=>{const l=e.map((e=>({children:[],parent:null,...e}))),o=(0,n.groupBy)(l,"parent");if(o.null&&o.null.length)return l;const t=e=>e.map((e=>{const l=o[e.id];return{...e,children:l&&l.length?t(l):[]}}));return t(o[0]||[])},h=[{attributes:{...t.uK,myAnchor:{type:"string",default:""}},migrate:e=>(e.anchor=e.myAnchor,e),save:()=>null}];(0,l.registerBlockType)(t.UU,{icon:{foreground:"#cd162c",src:a},keywords:[(0,o.__)("Posts list","snow-monkey-blocks"),(0,o.__)("Recent posts","snow-monkey-blocks"),(0,o.__)("Latest posts","snow-monkey-blocks")],edit:function({attributes:e,setAttributes:l,clientId:a}){const{taxonomy:u,termId:h,postsPerPage:b,layout:_,gap:k,ignoreStickyPosts:g,smCols:x,noPostsText:f,itemTitleTagName:w,itemThumbnailSizeSlug:T,forceDisplayItemMeta:I,displayItemAuthor:j,displayItemPublished:D,displayItemModified:P,forceDisplayItemTerms:S,displayItemExcerpt:C,categoryLabelTaxonomy:v,arrows:K,dots:B,interval:V,autoplayButton:N}=e;(0,m.useEffect)((()=>{let e,o;e=null==j?!["text","text2"].includes(_):j,o=null==C?["rich-media","simple","caroucel"].includes(_):C,l({displayItemAuthor:e,displayItemExcerpt:o})}),[_]),(0,m.useEffect)((()=>{l({clientId:e.clientId||a})}),[]);const{taxonomiesTerms:L,taxonomies:M}=(0,c.useSelect)((e=>{const{getTaxonomies:l,getEntityRecords:o}=e("core"),t=(l({per_page:-1})||[]).filter((e=>e.visibility.show_ui)),s=t.map((e=>{const l=o("taxonomy",e.slug,{per_page:-1})||[];return 0<l.length?{taxonomy:e.slug,terms:l}:{}})).filter((e=>e));return{taxonomiesTerms:s,taxonomies:t}}),[]),A=(0,c.useSelect)((e=>{const{getSettings:l}=e("core/block-editor"),{imageSizes:o}=l();return o.map((e=>({value:e.slug,label:e.name})))}),[]),z=(0,m.useMemo)((()=>{const e=M.map((e=>({value:e.slug,label:e.name})));return e.unshift({value:"",label:(0,o.__)("Default (Taxonomy selected in this block)","snow-monkey-blocks")}),e}),[M]),F=(0,n.find)(L,{taxonomy:u}),R=F?(0,n.find)(F.terms,["id",y(h)]):[],E=["h2","h3","h4"],O=[{label:"S",value:1},{label:"M",value:2},{label:"L",value:3}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.InspectorControls,{children:(0,s.jsxs)(i.__experimentalToolsPanel,{label:(0,o.__)("Block settings","snow-monkey-blocks"),children:[L.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>u!==t.uK.taxonomy.default||h!==t.uK.termId.default,isShownByDefault:!0,label:(0,o.__)("Taxonomy","snow-monkey-blocks"),onDeselect:()=>l({taxonomy:t.uK.taxonomy.default,termId:t.uK.termId.default}),children:(0,s.jsx)(i.Flex,{direction:"column",children:L.map((e=>{const o=(0,n.find)(M,["slug",e.taxonomy]);return!!o&&(0,s.jsx)(i.TreeSelect,{label:o.name,noOptionLabel:"-",onChange:e=>{l({taxonomy:o.slug,termId:y(e)})},selectedId:h,tree:p(e.terms)},`${o.slug}-${h}`)}))})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>b!==t.uK.postsPerPage.default,isShownByDefault:!0,label:(0,o.__)("Number of posts","snow-monkey-blocks"),onDeselect:()=>l({postsPerPage:t.uK.postsPerPage.default}),children:(0,s.jsx)(i.RangeControl,{label:(0,o.__)("Number of posts","snow-monkey-blocks"),value:b,onChange:e=>l({postsPerPage:y(e,1,50)}),min:"1",max:"50"})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>_!==t.uK.layout.default,isShownByDefault:!0,label:(0,o.__)("Layout","snow-monkey-blocks"),onDeselect:()=>l({layout:t.uK.layout.default}),children:(0,s.jsx)(i.SelectControl,{label:(0,o.__)("Layout","snow-monkey-blocks"),value:_,onChange:e=>{l({layout:e})},options:[{value:"rich-media",label:(0,o.__)("Rich media","snow-monkey-blocks")},{value:"simple",label:(0,o.__)("Simple","snow-monkey-blocks")},{value:"text",label:(0,o.__)("Text","snow-monkey-blocks")},{value:"text2",label:(0,o.__)("Text 2","snow-monkey-blocks")},{value:"panel",label:(0,o.__)("Panels","snow-monkey-blocks")},{value:"carousel",label:(0,o.sprintf)(
// translators: %1$s: Layout
// translators: %1$s: Layout
(0,o.__)("Carousel (%1$s)","snow-monkey-blocks"),(0,o.__)("Rich media","snow-monkey-blocks"))},{value:"large-image",label:(0,o.__)("Large image","snow-monkey-blocks")}]})})]}):(0,s.jsx)("div",{style:{gridColumn:"1/-1"},children:(0,s.jsx)(i.BaseControl,{label:(0,o.__)("Loading taxonomies…","snow-monkey-blocks"),id:"snow-monkey-blocks/taxonomy-posts/taxonomies",children:(0,s.jsx)(i.Spinner,{})})}),"carousel"===_&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>K!==t.uK.arrows.default,isShownByDefault:!0,label:(0,o.__)("Display arrows","snow-monkey-blocks"),onDeselect:()=>l({arrows:t.uK.arrows.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Display arrows","snow-monkey-blocks"),checked:K,onChange:e=>l({arrows:e})})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>B!==t.uK.dots.default,isShownByDefault:!0,label:(0,o.__)("Display dots","snow-monkey-blocks"),onDeselect:()=>l({dots:t.uK.dots.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Display dots","snow-monkey-blocks"),checked:B,onChange:e=>l({dots:e})})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>V!==t.uK.interval.default,isShownByDefault:!0,label:(0,o.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>l({interval:t.uK.interval.default}),children:(0,s.jsx)(i.RangeControl,{label:(0,o.__)("Autoplay Speed in seconds","snow-monkey-blocks"),help:(0,o.__)('If "0", no scroll.',"snow-monkey-blocks"),value:V,onChange:e=>l({interval:y(e,0,10)}),min:"0",max:"10"})}),0<V&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>N!==t.uK.autoplayButton.default,isShownByDefault:!0,label:(0,o.__)("Autoplay Speed in seconds","snow-monkey-blocks"),onDeselect:()=>l({autoplayButton:t.uK.autoplayButton.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Display pause button for autoplay","snow-monkey-blocks"),checked:N,onChange:e=>l({autoplayButton:e})})})]}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>w!==t.uK.itemTitleTagName.default,isShownByDefault:!0,label:(0,o.__)("Title tag of each items","snow-monkey-blocks"),onDeselect:()=>l({itemTitleTagName:t.uK.itemTitleTagName.default}),children:(0,s.jsx)(i.BaseControl,{label:(0,o.__)("Title tag of each items","snow-monkey-blocks"),id:"snow-monkey-blocks/taxonomy-posts/item-title-tag-name",children:(0,s.jsx)("div",{className:"smb-list-icon-selector",children:(0,n.times)(E.length,(e=>(0,s.jsx)(i.Button,{variant:w===E[e]?"primary":"secondary",onClick:()=>l({itemTitleTagName:E[e]}),children:E[e]},e)))})})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>T!==t.uK.itemThumbnailSizeSlug.default,isShownByDefault:!0,label:(0,o.__)("Images size of each items","snow-monkey-blocks"),onDeselect:()=>l({itemThumbnailSizeSlug:t.uK.itemThumbnailSizeSlug.default}),children:(0,s.jsx)(i.SelectControl,{label:(0,o.__)("Images size of each items","snow-monkey-blocks"),value:T,options:A,onChange:e=>l({itemThumbnailSizeSlug:e})})}),"category"!==u&&"post_tag"!==u&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>I!==t.uK.forceDisplayItemMeta.default,isShownByDefault:!0,label:(0,o.__)("Force display meta of each items","snow-monkey-blocks"),onDeselect:()=>l({forceDisplayItemMeta:t.uK.forceDisplayItemMeta.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Force display meta of each items","snow-monkey-blocks"),help:(0,o.__)("If it's already displayed, this setting will be ignored.","snow-monkey-blocks"),checked:I,onChange:e=>l({forceDisplayItemMeta:e})})}),("category"===u||"post_tag"===u||I)&&"text"!==_&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>j!==!["text","text2"].includes(_),isShownByDefault:!0,label:(0,o.__)("Display author of each items","snow-monkey-blocks"),onDeselect:()=>l({displayItemAuthor:!["text","text2"].includes(_)}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Display author of each items","snow-monkey-blocks"),checked:j,onChange:e=>l({displayItemAuthor:e})})}),("category"===u||"post_tag"===u||I)&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>D!==t.uK.displayItemPublished.default,isShownByDefault:!0,label:(0,o.__)("Display published date of each items","snow-monkey-blocks"),onDeselect:()=>l({displayItemPublished:t.uK.displayItemPublished.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Display published date of each items","snow-monkey-blocks"),checked:D,onChange:e=>l({displayItemPublished:e})})}),("category"===u||"post_tag"===u||I)&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>P!==t.uK.displayItemModified.default,isShownByDefault:!0,label:(0,o.__)("Display modified date of each items","snow-monkey-blocks"),onDeselect:()=>l({displayItemModified:t.uK.displayItemModified.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Display modified date of each items","snow-monkey-blocks"),checked:P,onChange:e=>l({displayItemModified:e})})}),["rich-media","simple","panel","carousel"].includes(_)&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>C===["rich-media","simple","panel","carousel"].includes(_),isShownByDefault:!0,label:(0,o.__)("Display excerpt of each items","snow-monkey-blocks"),onDeselect:()=>{l({displayItemExcerpt:["rich-media","simple","panel","carousel"].includes(_)})},children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Display excerpt of each items","snow-monkey-blocks"),checked:C,onChange:e=>l({displayItemExcerpt:e})})}),"category"!==u&&"post_tag"!==u&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>S!==t.uK.forceDisplayItemTerms.default,isShownByDefault:!0,label:(0,o.__)("Force display category label of each items","snow-monkey-blocks"),onDeselect:()=>l({forceDisplayItemTerms:t.uK.forceDisplayItemTerms.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Force display category label of each items","snow-monkey-blocks"),help:(0,o.__)("If it's already displayed, this setting will be ignored.","snow-monkey-blocks"),checked:S,onChange:e=>l({forceDisplayItemTerms:e})})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>v!==t.uK.categoryLabelTaxonomy.default,isShownByDefault:!0,label:(0,o.__)("Taxonomy to use for the category label","snow-monkey-blocks"),onDeselect:()=>l({categoryLabelTaxonomy:t.uK.categoryLabelTaxonomy.default}),children:(0,s.jsx)(i.SelectControl,{label:(0,o.__)("Taxonomy to use for the category label","snow-monkey-blocks"),help:(0,o.__)("If no category labels are displayed, this setting will be ignored.","snow-monkey-blocks"),value:v,options:z,onChange:e=>l({categoryLabelTaxonomy:e})})}),("rich-media"===_||"panel"===_)&&(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>x!==t.uK.smCols.default,isShownByDefault:!0,label:(0,o.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),onDeselect:()=>l({smCols:t.uK.smCols.default}),children:(0,s.jsx)(i.SelectControl,{label:(0,o.__)("Number of columns displayed on mobile device","snow-monkey-blocks"),value:x,onChange:e=>l({smCols:y(e)}),options:[{value:0,label:(0,o.__)("Default","snow-monkey-blocks")},{value:1,label:(0,o.__)("1 column","snow-monkey-blocks")},{value:2,label:(0,o.__)("2 columns","snow-monkey-blocks")}]})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>g!==t.uK.ignoreStickyPosts.default,isShownByDefault:!0,label:(0,o.__)("Ignore sticky posts","snow-monkey-blocks"),onDeselect:()=>l({ignoreStickyPosts:t.uK.ignoreStickyPosts.default}),children:(0,s.jsx)(i.ToggleControl,{label:(0,o.__)("Ignore sticky posts","snow-monkey-blocks"),checked:g,onChange:e=>l({ignoreStickyPosts:e})})}),(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>f!==t.uK.noPostsText.default,isShownByDefault:!0,label:(0,o.__)("Text if no posts matched","snow-monkey-blocks"),onDeselect:()=>l({noPostsText:t.uK.noPostsText.default}),children:(0,s.jsx)(i.TextareaControl,{label:(0,o.__)("Text if no posts matched","snow-monkey-blocks"),help:(0,o.__)("Allow HTML","snow-monkey-blocks"),value:f||"",onChange:e=>l({noPostsText:e})})})]})}),(0,s.jsx)(r.InspectorControls,{group:"dimensions",children:(0,s.jsx)(i.__experimentalToolsPanelItem,{hasValue:()=>k!==t.uK.gap.default,isShownByDefault:!0,label:(0,o.__)("The gap between each item","snow-monkey-blocks"),onDeselect:()=>l({gap:t.uK.gap.default}),panelId:a,children:(0,s.jsx)(i.BaseControl,{id:"snow-monkey-blocks/recent-posts/gap",label:(0,o.__)("The gap between each item","snow-monkey-blocks"),className:"spacing-sizes-control",children:(0,s.jsx)(i.RangeControl,{className:"spacing-sizes-control__range-control",value:O.filter((e=>e.label?.toLowerCase()===k))?.[0]?.value,resetFallbackValue:void 0,onChange:e=>l({gap:O.filter((l=>l.value===e))?.[0]?.label?.toLowerCase()}),withInputField:!1,min:1,max:3,marks:!0,renderTooltipContent:e=>O.filter((l=>l.value===e))?.[0]?.label?.toUpperCase(),hideLabelFromVision:!0,__nextHasNoMarginBottom:!0})})})}),(0,s.jsx)("div",{...(0,r.useBlockProps)(),children:R&&F?(0,s.jsx)(i.Disabled,{children:(0,s.jsx)(d(),{block:"snow-monkey-blocks/taxonomy-posts",attributes:e})}):(0,s.jsx)(i.Placeholder,{icon:"editor-ul",label:(0,o.__)("Taxonomy posts","snow-monkey-blocks"),children:(0,s.jsx)(i.Spinner,{})})})]})},save:function(){return(0,s.jsx)("div",{...r.useBlockProps.save(),"data-dynamic-block":"snow-monkey-blocks/taxonomy-posts","data-version":"2"})},deprecated:h})})();