"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[616],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,a,n)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&r.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=a(c)===c&&n(c)!==c,s=i,i=n(c)===c&&a(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{G:function(){return Y},L:function(){return h},M:function(){return j},P:function(){return k},_:function(){return s},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return m},h:function(){return o}});var a=r(7294),n=(r(3204),r(5697)),l=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(r=l[a])>=0||(n[r]=e[r]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),i({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function m(e,t,r,a,n,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(g,i({},r)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:r,loading:n,alt:l="",shouldLoad:o}=e,c=s(e,y);return a.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,alt:l}))},E=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,l=s(e,f);const o=l.sizes||(null==t?void 0:t.sizes),c=a.createElement(v,i({},l,t,{sizes:o,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:l}=e;return a.createElement("source",{key:t+"-"+l+"-"+r,type:l,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:o})})),c):c};var w;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],k=function(e){let{fallback:t}=e,r=s(e,b);return t?a.createElement(E,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},r))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(w=E.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const j=function(e){return a.createElement(a.Fragment,null,a.createElement(E,i({},e)),a.createElement("noscript",null,a.createElement(E,i({},e,{shouldLoad:!0}))))};j.displayName="MainImage",j.propTypes=E.propTypes;const M=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],x=e=>e.replace(/\n/g,""),S=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:l().object.isRequired,alt:S},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],A=new Set;let G,R;const U=function(e){let{as:t="div",image:n,style:l,backgroundColor:c,className:u,class:m,onStartLoad:p,onLoad:g,onError:h}=e,y=s(e,C);const{width:f,height:v,layout:E}=n,w=d(f,v,E),{style:b,className:k}=w,j=s(w,I),M=(0,a.useRef)(),N=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const x=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(E,f,v);return(0,a.useEffect)((()=>{G||(G=Promise.all([r.e(774),r.e(731)]).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=M.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(N);if(R&&A.has(N))return;let t,a;return G.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;M.current&&(M.current.innerHTML=r(i({isLoading:!0,isLoaded:A.has(N),image:n},y)),A.has(N)||(t=requestAnimationFrame((()=>{M.current&&(a=s(M.current,N,A,l,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{A.has(N)&&R&&(M.current.innerHTML=R(i({isLoading:A.has(N),isLoaded:A.has(N),image:n},y)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,i({},j,{style:i({},b,l,{backgroundColor:c}),className:k+(u?" "+u:""),ref:M,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},Y=(0,a.memo)((function(e){return e.image?(0,a.createElement)(U,e):null}));Y.propTypes=L,Y.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function Z(e){return function(t){let{src:r,__imageData:n,__error:l}=t,o=s(t,D);return l&&console.warn(l),n?a.createElement(e,i({image:n},o)):(console.warn("Image not loaded",r),null)}}const B=Z((function(e){let{as:t="div",className:r,class:n,style:l,image:o,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:y,objectFit:f,objectPosition:v}=e,E=s(e,M);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),g=i({objectFit:f,objectPosition:v,backgroundColor:y},g);const{width:w,height:b,layout:S,images:L,placeholder:C,backgroundColor:I}=o,A=d(w,b,S),{style:G,className:R}=A,U=s(A,N),Y={fallback:void 0,sources:[]};return L.fallback&&(Y.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?x(L.fallback.srcSet):void 0})),L.sources&&(Y.sources=L.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),a.createElement(t,i({},U,{style:i({},G,l,{backgroundColor:y}),className:R+(r?" "+r:"")}),a.createElement(h,{layout:S,width:w,height:b},a.createElement(k,i({},m(C,!1,S,w,b,I,f,v))),a.createElement(j,i({"data-gatsby-image-ssr":"",className:p},E,u("eager"===c,!1,Y,c,g)))))})),J=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:l().string.isRequired,alt:S,width:J,height:J,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};B.displayName="StaticImage",B.propTypes=F;const O=Z(Y);O.displayName="StaticImage",O.propTypes=F},618:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7294),n=r(1883),l=r(6893),i=r.p+"static/logo-bed40b132a49933625c59845dc57ecc9.jpg";var s=()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:r,1:s}=(0,a.useState)(!1),{0:o,1:c}=(0,a.useState)(!1),{0:d,1:u}=(0,a.useState)(!1),m=()=>{u(!d)};return(0,a.useEffect)((()=>{window.addEventListener("scroll",(()=>{window.scrollY>0?c(!0):c(!1)}))}),[]),a.createElement("nav",{className:o?"fixed-navbar":""},a.createElement("div",{className:"nav-center"},a.createElement("div",{className:"nav-header"},a.createElement(n.rU,{to:"/"},a.createElement("img",{src:o?i:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA/CAYAAAACEjHEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc5NDQ3QUIyRjI3MTFFREIzMDhEMEM0MUM5MzA2QUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDc5NDQ3QUEyRjI3MTFFREIzMDhEMEM0MUM5MzA2QUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNDBCNjNDRTZDQjQxMUVBQTM2NEI2MDdBNjgwRUM4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNDBCNjNDRjZDQjQxMUVBQTM2NEI2MDdBNjgwRUM4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiyeBfIAAA87SURBVHja7F0J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",alt:"Hewlett Packard Enterprise"})),a.createElement("button",{className:"nav-btn",onClick:()=>t(!e)},a.createElement(l.X_s,null))),a.createElement("ul",{className:"navul"},a.createElement("li",null,a.createElement(n.rU,{to:"/",className:o?"nav-link":"nav-linkactive",activeClassName:"active-link",onClick:()=>t(!1)},"home")),a.createElement("li",{className:"dropdown",onMouseEnter:m,onMouseLeave:m},a.createElement(n.rU,{className:o?"nav-link ":"nav-linkactive ",activeClassName:"active-link",onClick:()=>t(!1)},"Service Portfolios"),a.createElement("ul",{className:"dropdown-menu "+(d?"show":"")},a.createElement("li",null,a.createElement(n.rU,{to:"/ivaas",className:"dropdown-scroll"},"IVaaS")),a.createElement("li",null,a.createElement(n.rU,{to:"/recipes/history/",className:"dropdown-scroll"},"Big Data")),a.createElement("li",null,a.createElement(n.rU,{to:"/recipes/history/",className:"dropdown-scroll"},"IoT")),a.createElement("li",null,a.createElement(n.rU,{to:"/recipes/history/",className:"dropdown-scroll"},"Computer Vision")))))))},o=r(9583);var c=[{id:1,icon:a.createElement(o.R9i,{className:"social-icon"}),url:"https://www.facebook.com/HewlettPackardEnterprise/"},{id:2,icon:a.createElement(o.ltd,{className:"social-icon"}),url:"https://www.linkedin.com/company/hewlett-packard-enterprise/"},{id:3,icon:a.createElement(o.dR1,{className:"social-icon"}),url:"https://z-p4.www.instagram.com/hpe/channel/"},{id:4,icon:a.createElement(o.N1v,{className:"social-icon"}),url:"https://twitter.com/HPE?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}];var d=()=>a.createElement("footer",{className:"footer"},a.createElement("div",null,a.createElement("h4",null," Subscribe and be first to get our latest updates")),a.createElement("div",{className:"footer-links social-links"},c.map((e=>a.createElement("a",{href:e.url,key:e.id,className:"social-link"},e.icon,a.createElement("span",null," "))))),a.createElement("h4",{className:"footer h4"},"copyright © ",(new Date).getFullYear()," Hewlett Packard Enterprise"));var u=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(s,null),t,a.createElement(d,null))}},3260:function(e,t,r){var a=r(7294);t.Z=e=>{let{title:t}=e;return a.createElement("div",{className:"section-title"},a.createElement("h3",null,a.createElement("b",null,t||"default title")))}},6893:function(e,t,r){r.d(t,{Tfp:function(){return i},X_s:function(){return n},YFh:function(){return l}});var a=r(4405);function n(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"21",y1:"10",x2:"3",y2:"10"}},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"}},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"}},{tag:"line",attr:{x1:"21",y1:"18",x2:"3",y2:"18"}}]})(e)}function l(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function i(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}},4405:function(e,t,r){r.d(t,{w_:function(){return c}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),i=function(){return i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)},s=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function o(e){return e&&e.map((function(e,t){return a.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return a.createElement(d,i({attr:i({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var r,n=e.attr,l=e.size,o=e.title,c=s(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=9e50e3d65e7c6af3cae85f13daa70f247c5c6b7e-1fcd220e69474d2acfec.js.map