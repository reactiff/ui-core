(this["webpackJsonp@reactiff/ui-core-example"]=this["webpackJsonp@reactiff/ui-core-example"]||[]).push([[0],{129:function(e,t,n){e.exports=n(263)},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"Table",(function(){return Xe}));var a=n(0),o=n.n(a),i=n(9),c=n.n(i),l=n(118),u=n(111),s=n.n(u),m=n(3),d=n(310),f=n(329),p=n(15),g=n(313),h=n(315),v=n(319),b=n(317),y=n(316),w=n(320),E=n(318),x=n(321),k=n(330),j=n(331),O=n(322),C=n(326),S=n(328),N=n(62),A=n(74),R=n(323),_=n(324),I=n(264),B=n(112),z=n(327),F=n(325);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var W={bgColor:"backgroundColor"};var L={scrollableX:"scrollable scrollable-x",scrollableY:"scrollable scrollable-y",borderBox:"border-box"},H=function(e){return e?e.replace(/([A-Z]+|[0-9]+)/g," $1").trim().split(" ").filter((function(e){return e&&e.length})).map((function(e){var t=e.trim();return t[0].toUpperCase()+t.substring(1)})).join(" "):e};function K(e){return Object.assign(e.bag.style,function(e){var t,n,r=Reflect.has(W,e.key)?W[e.key]:e.key;return(t={})[r]=(n=e.value)&&n.hex?n.hex():n,t}(e)),!0}function U(e){var t,n=Reflect.has(L,e.key)?L[e.key]:(t=e.key)?t.replace(/([A-Z]+)/g," $1").trim().split(" ").map((function(e){return e.trim().toLowerCase()})).join("-"):t;return e.bag.classes.push(n),!0}var D={absolute:!0,alignStart:!0,alignCenter:!0,alignEnd:!0,alignStretch:!0,alignBaseline:!0,alignAuto:!0,alignSelfStart:!0,alignSelfCenter:!0,alignSelfEnd:!0,alignSelfStretch:!0,alignSelfBaseline:!0,anchorBottom:!0,anchorLeft:!0,anchorRight:!0,anchorTop:!0,beveled:!0,block:!0,borderBox:!0,centerX:!0,centerXY:!0,centerY:!0,clickable:!0,coverImage:!0,fill:!0,fixed:!0,fullWidth:!0,fullWidthAlways:!0,grow:!0,hidden:!0,horizontal:!0,inline:!0,inlineBlock:!0,justifyStart:!0,justifyCenter:!0,justifyEnd:!0,mobileCenter:!0,mobileColumn:!0,mobileOnly:!0,noBr:!0,noBreak:!0,noMargin:!0,noMobile:!0,noOverflow:!0,noPadding:!0,noSelect:!0,noTransform:!0,noWrap:!0,opaque:!0,overlay:!0,relative:!0,round:!0,rounded:!0,scrollable:!0,scrollableX:!0,scrollableY:!0,shrink:!0,small:!0,smaller:!0,solid:!0,spaced:!0,sticky:!0,tall:!0,translucent:!0,vertical:!0,wide:!0},G={backgroundColor:K,bgColor:K,backgroundImage:K,backgroundRepeat:K,backgroundPosition:K,backgroundSize:K,border:K,borderTop:K,borderRight:K,borderBottom:K,borderLeft:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomLeftRadius:K,borderBottomRightRadius:K,color:K,cursor:K,dataProps:K,fontSize:K,fontStyle:K,fontWeight:K,innerProps:K,lineHeight:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,minHeight:K,minWidth:K,opacity:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,pseudo:K,textAlign:K,textTransform:K,title:K,width:K,height:K,top:K,right:K,bottom:K,left:K},J=function(e,t){return"function"===typeof e?e(t):e},X=function(e,t){for(var n=function(t){return"function"===typeof t?t(e):t===e},r=function(e){return Array.isArray(e)?e.some(n):n(e)},a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];for(var c=0;c<o.length;c+=2){var l=o[c];if(r(l))return J(o[c+1],l)}return J(t,e)},Y=function(e,t){return Object(a.useMemo)((function(){return Object(d.a)((function(){return Object(f.a)(M({},J(e)))}))}),[e,t])},V=["id","children","style","className","ref","data","pseudo","innerProps","css","onBlur","onClick","onChange","onFocus","onMouseUp","onMouseDown","onMouseMove"],$=["dataProps"];function Z(e,t,n){var r=e.id,a=e.children,o=e.style,i=e.className,c=e.ref,l=e.data,u=e.pseudo,s=e.innerProps,f=e.css,p=e.onBlur,g=e.onClick,h=e.onChange,v=e.onFocus,b=e.onMouseUp,y=e.onMouseDown,w=e.onMouseMove,E=T(e,V),x={id:r,children:a,style:o,className:i,ref:c,data:l,pseudo:u,innerProps:s,ownProps:t,css:f,onBlur:p,onClick:g,onChange:h,onFocus:v,onMouseUp:b,onMouseDown:y,onMouseMove:w},k=[],j=Object.keys(E),O={style:M({},f,o),classes:[]};j.forEach((function(t){if(!Reflect.has(x,t)){var n=e[t];if(Reflect.has(D,t))return U({bag:O,key:t,value:n,debug:!1}),void k.push(t);if(Reflect.has(G,t))return G[t]({bag:O,key:t,value:n}),void k.push(t);!0===n&&U({bag:O,key:t,value:n,debug:!1})}}));var C=M({},E);k.forEach((function(e){delete C[e]}));for(var S=Object.keys(e.pseudo||{}).reduce((function(t,n){var r,a=e.pseudo[n],o="&"===n[0]?n:"& :"+n;return Object.assign(t,((r={})[o]=a,r))}),{}),N=Object(d.a)((function(){var e={};return Object.keys(O.style).length&&(e.bag=O.style),Object.keys(S).length&&(e.pseudo=S),e}))(),A={onBlur:p,onClick:g,onChange:h,onFocus:v,onMouseUp:b,onMouseDown:y,onMouseMove:w},R=e.dataProps,_=T(e,$),I=arguments.length,B=new Array(I>3?I-3:0),z=3;z<I;z++)B[z-3]=arguments[z];var F={root:{className:Object(m.a)(i,B,n,O.classes,N.bag,N.pseudo)},props:M({},C,x),attr:_,data:R,events:A};return F}var Q=["children"],ee=["children"],te=["children"],ne=Object(d.a)({root:{maxWidth:345},media:{height:140}});var re=["children"],ae=["children"],oe=["children"],ie=function(e){var t=e.children,n=Z(T(e,re),null),r=n.root,a=n.data,i=n.events;return o.a.createElement("div",M({},a,{className:r.className},i),t)},ce=function(e){var t=e.children,n=Z(T(e,ae),null,"Row","flex row"),r=n.root,a=n.data,i=n.events;return o.a.createElement("div",M({},a,{className:r.className},i),t)},le=function(e){var t=e.children,n=Z(T(e,oe),null,"Col","flex column"),r=n.root,a=n.data,i=n.events;return o.a.createElement("div",M({},a,{className:r.className},i),t)},ue={__proto__:null,div:ie,row:ce,col:le};var se=["children","type"],me={count:1,format:"plain",paragraphLowerBound:3,paragraphUpperBound:7,sentenceLowerBound:5,sentenceUpperBound:15,suffix:"\n",units:"words"};var de={words:function(e,t){return Object(N.loremIpsum)(M({},me,{count:e,units:"words",words:t}))},sentences:function(e,t){return Object(N.loremIpsum)(M({},me,{count:e,units:"sentences",words:t}))},paragraphs:function(e,t){return Object(N.loremIpsum)(M({},me,{count:e,units:"paragraphs",words:t}))}},fe=["colSpan","image","title","description","onClick"],pe=["min","max","items","elementForItem","revision"],ge=function(e){var t=e.element,n=e.colSpan,r=e.image,a=Y((function(){var e={};return n&&(e.gridColumnEnd="span "+n),{root:e,image:{backgroundImage:'url("'+r+'")'}}}),[n,r])();return o.a.createElement("div",{className:Object(m.a)("masonry-item","relative",a.root)},o.a.createElement("div",{className:"content fill"},t))},he=function(e){var t=e.colSpan,n=e.image,r=e.title,a=e.description,i=e.onClick,c=Z(T(e,fe),null,"MasonryItem","masonry-item").root,l=Y((function(){return{root:{gridColumnEnd:t?"span "+t:null},image:{backgroundImage:'url("'+n+'")'}}}),[t,n])();return o.a.createElement("div",{className:Object(m.a)(c.className,l.root),onClick:function(){return i&&i()}},o.a.createElement(A.a,{className:"content"},n&&o.a.createElement("div",{className:Object(m.a)("cover-image",l.image)}),r&&o.a.createElement("div",{className:"title"},r),a&&o.a.createElement("div",{className:"desc"},a)))},ve=o.a.forwardRef((function(e,t){return o.a.createElement(I.a,M({direction:"down",ref:t},e))})),be=function(e){return function(e){return void 0===e}(e)||function(e){return null===e}(e)},ye=function(){function e(){this.ticking=!1}return e.prototype.invokeWithAnimationFrame=function(e){this.nextCallback=e;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.lastKnownParams=n,!this.ticking){var a=this,o=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];a.ticking=!0,a.nextCallback=void 0,a.lastKnownParams=void 0,window.requestAnimationFrame((function(){t.apply(void 0,r),a.ticking=!1,a.nextCallback&&e.apply(void 0,[a.nextCallback].concat(a.lastKnownParams))}))};o.apply(void 0,[this.nextCallback].concat(this.lastKnownParams))}},e}();var we=new function(){this.sticky=!1,this.stickyTop=0},Ee={angle:90};function xe(e){return"string"===typeof e?function(e){var t=e.split(" ");if(1===t.length)return{color:t[0],parts:1};if(2===t.length)return{color:t[0],parts:+t[1]};throw new Error("Max number of color tokens expected is 2")}(e):e}function ke(e){return{backgroundImage:(Array.isArray(e)?e:[e]).map((function(e){var t=e.colors.map((function(e){return function(e){var t;return"string"===typeof e?function(e){var t=e.split(" ");if(t.length>2)throw new Error("Due to current limitation of this function, colors should be canonical without any spaces, e.g.: rgb(255,128,0,0.8) 75% is a valid color and stop pair.");return t}(e):[e.color,null===(t=e.percentage)||void 0===t?void 0:t.toString()]}(e)}));return(e.repeat?"repeating-linear-gradient":"linear-gradient")+"("+e.angle+"deg, "+t.map((function(e){return e.join(" ")})).join(", ")+")"})).join(", ")}}var je={xOffset:0,yOffset:0,blur:5,spread:0,rgba:{r:0,g:0,b:0,a:.75}},Oe="object"===typeof window,Ce={xs:1,sm:2,md:3,lg:4,xl:5,xxl:6,xxxl:7},Se={bootstrap:[[1600,"xxxl"],[1400,"xxl"],[1200,"xl"],[992,"lg"],[768,"md"],[576,"sm"]],material:[[1920,"xl"],[1280,"lg"],[960,"md"],[600,"sm"]]},Ne=function(e){if(!Oe)return"xs";for(var t,n=P(Se[e]);!(t=n()).done;){var r=t.value;if(window.innerWidth>=r[0])return r[1]}return"xs"},Ae=function(e){return{code:e,value:Ce[e]}};function Re(){return window.innerHeight}function _e(){return window.innerWidth}var Ie=function(){var e=Object(a.useRef)({value:{width:0,height:0},ticking:!1}).current,t=Object(a.useState)((function(){return Oe?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0}})),n=t[0],r=t[1];return Object(a.useEffect)((function(){return ze(e,r,"resize",(function(){return{width:window.innerWidth,height:window.innerHeight}}),(function(e,t){return e.width===t.width&&e.height===t.height}))}),[e]),n},Be=function(){return document.body.scrollTop||document.documentElement.scrollTop};function ze(e,t,n,r,a){if(Oe){var o=function(){var n=r();(a||function(e,t){return e===t})(e.value,n)||(e.value=n,e.ticking||(window.requestAnimationFrame((function(){t(e.value),e.ticking=!1})),e.ticking=!0))};return window.addEventListener(n,o),function(){return window.removeEventListener(n,o)}}}var Fe={__proto__:null,createStripes:function(e){return function(e){for(var t=e.angle,n=e.colors?e.colors.map((function(e){return xe(e)})):null,r=2*n.reduce((function(e,t){return+e+t.parts}),0),a=100/r,o=n.length,i=2*o,c=[],l=0,u=0;u<i;u++){var s=u%o,m=(u+1)%o;l+=a*n[s].parts,c.push(n[s].color+" "+l.toFixed(2)+"%"),u<i-1&&c.push(n[m].color+" "+l.toFixed(2)+"%")}var d=e.size||r;return{backgroundImage:"linear-gradient("+t+"deg, "+c.join(", ")+")",backgroundSize:Object(B.isNumber)(d)?d.toFixed(2)+"px "+d.toFixed(2)+"px":d}}(M({},Ee,e))},createLinearGradient:function(e){return ke(e)},createBoxShadow:function(e){var t=M({},je,e),n=e.rgba?"rgba("+t.rgba.r+", "+t.rgba.g+", "+t.rgba.b+", "+t.rgba.a+")":e.hex,r=(e.inset?"inset ":"")+(t.xOffset+"px ")+t.yOffset+"px "+t.blur+"px "+t.spread+"px "+n;return{"-webkit-box-shadow":r,"-moz-box-shadow":r,"box-shadow":r}},useGridSize:function(e){var t=Object(a.useRef)({value:"xs",ticking:!1}).current,n=Object(a.useState)((function(){return Ae(Ne(e))})),r=n[0],o=n[1];return Object(a.useEffect)((function(){return ze(t,(function(e){return o(Ae(e))}),"resize",(function(){return Ne(e)}))}),[]),r},useWindowWidth:function(){var e=Object(a.useRef)({value:0,ticking:!1}).current,t=Object(a.useState)((function(){return Oe?_e():0})),n=t[0],r=t[1];return Object(a.useEffect)((function(){return ze(e,r,"resize",_e)}),[e]),n},useWindowHeight:function(){var e=Object(a.useRef)({value:0,ticking:!1}).current,t=Object(a.useState)((function(){return Oe?Re():0})),n=t[0],r=t[1];return Object(a.useEffect)((function(){return ze(e,r,"resize",Re)}),[e]),n},useWindowSize:Ie,useScrollPosition:function(){var e=Object(a.useRef)({value:0,ticking:!1}).current,t=Object(a.useState)((function(){return Oe?Be():0})),n=t[0],r=t[1];return Object(a.useEffect)((function(){return ze(e,r,"scroll",Be)}),[e]),n}},Me=M({},ue,Fe),Te=new function(){},qe=function(e){var t=e.cols||[];return o.a.createElement("thead",null,o.a.createElement("tr",null,t.map((function(e,t){return o.a.createElement("th",{key:t},e)}))))},Pe=function(e){var t=e.item,n=e.cols,r=Array.isArray(t);return o.a.createElement("tr",null,r&&t.map((function(e,t){return o.a.createElement("td",{key:n[t],className:Le(e)},We(e))})),!r&&n.map((function(e,r){return o.a.createElement("td",{key:n[r],className:Le(t[e])},We(t[e]))})))};function We(e){return"number"===typeof e?e.toFixed(0):e}function Le(e){return"number"===typeof e?"number":""}var He=["cols","items"],Ke=["id","onChange","activeKey","variant","orientation","centered","items","keyForItem","elementForItem"];function Ue(e){var t=e.children,n=e.active,r=e.value,o=e.id;return Object(a.createElement)("div",{role:"tabpanel",hidden:!n,id:o+"-"+r,"aria-labelledby":o+"-"+r},t||Object(a.createElement)("div",null,"No content"))}var De=["size","children"];var Ge={div:function(e){var t=e.children,n=Z(T(e,ee),null),r=n.root,a=n.data,i=n.events;return o.a.createElement("div",M({},a,{className:r.className},i),t)},col:function(e){var t=e.children,n=Z(T(e,Q),null,"","flex column"),r=n.root,a=n.data,i=n.events;return o.a.createElement("div",M({},a,{className:r.className},i),t)},row:function(e){var t=e.children,n=Z(T(e,te),null,"","flex row"),r=n.root,a=n.data,i=n.events;return o.a.createElement("div",M({},a,{className:r.className},i),t)},card:function(e){var t=e.title,n=e.description,r=e.image,a=e.onClick,i=e.footerActions,c=e.children,l=ne();return o.a.createElement(g.a,{className:l.root},o.a.createElement(h.a,{onClick:function(){return a&&a()}},r&&o.a.createElement(y.a,{className:l.media,image:r.url,title:t}),o.a.createElement(b.a,null,t&&o.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),n&&o.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},n),c&&c)),i&&o.a.createElement(v.a,null,Object.keys(i).map((function(e){return o.a.createElement(w.a,{key:e,size:"small",color:"primary",onClick:function(){return i[e]()}},H(e))}))))},counter:function(e){var t=o.a.useRef({count:0}).current;if(++t.count<=("undefined"!==typeof e.min?e.min:0))return null;var n=Y({root:{position:"absolute",zIndex:999999,top:0,left:0,padding:"0 3px",lineHeight:1,fontSize:".7rem",backgroundColor:"red",color:"white"}},[])();return o.a.createElement("div",{title:e.title,className:n.root},t.count)},drawer:function(e){var t=o.a.useState(!1),n=t[0],r=t[1],a=o.a.useState(),i=a[0],c=a[1],l="undefined"!==typeof e.open,u=!i&&(l?e.open:n),s=function(t){return function(n){r(t),t||c(!0),t&&e.onOpen&&e.onOpen(),!t&&e.onClose&&e.onClose()}};return o.a.createElement(o.a.Fragment,null,e.button&&!u&&o.a.cloneElement(e.button,{onClick:s(!0)}),o.a.createElement(x.a,{anchor:e.anchor,open:u,onClose:s(!1)},!i&&u&&e.children))},dropdown:function(e){var t=e.localStorageKey,n=e.label,r=e.defaultValue,a=e.options,i=Object(S.a)(),c=o.a.useState((function(){return(t?localStorage.getItem(t):null)||r})),l=c[0],u=c[1],s=a.find((function(e){var t="object"===typeof e?e.value:e;return l===t}))?[]:[{value:l,text:l,aux:!0}];return o.a.createElement(O.a,null,n&&o.a.createElement(k.a,{id:i},n),o.a.createElement(C.a,{labelId:i,value:l,onChange:function(n){var r=n.target.value;t&&localStorage.setItem(t,r),u(r),e.onChange&&e.onChange(r)}},[].concat(a,s).map((function(e){var t=e,n="object"===typeof t?t.text:e,r="object"===typeof t?t.value:e,a="object"===typeof t&&!0===t.aux;return o.a.createElement(j.a,{key:r,value:r},!a&&n,a&&o.a.createElement(ie,{opacity:.5,fontStyle:"italic"},n))}))))},element:function(e){var t=e.children,n=e.type,r=Z(T(e,se),null),a=r.root,i=r.data,c=r.events;return o.a.createElement.apply(o.a,[n,M({},i,{className:a.className},c)].concat(t||[]))},loremIpsum:de,masonry:function(e){var t=e.min,n=e.max,r=e.items,i=e.elementForItem,c=e.revision,l=T(e,pe),u=Object(p.a)(),s=Z(l,null,"Masonry","ui-masonry-grid masonry-grid grid").root,d=Object(a.useRef)({resizing:!1,gridItems:[]}).current,f=document.getElementsByClassName("masonry-grid")[0],g=Object(a.useMemo)((function(){return f?{grid:f,rowHeight:parseInt(window.getComputedStyle(f).getPropertyValue("grid-auto-rows"),10),rowGap:parseInt(window.getComputedStyle(f).getPropertyValue("grid-row-gap"),10),gridItems:Array.from(document.getElementsByClassName("masonry-item")).map((function(e){var t=e.querySelector(".content > *"),n=+t.getAttribute("heightratio");return{container:e,innerElement:t,heightRatio:n}}))}:{rowHeight:0,rowGap:0,gridItems:[]}}),[f,r,c,d.resizing]),h=g.grid,v=g.rowHeight,b=g.rowGap,y=g.gridItems,w=o.a.useCallback((function(e){var t=e.innerElement.getBoundingClientRect();if(0!==t.width){var n;if(e.heightRatio){var r=Math.round(t.width*e.heightRatio)+b,a=r%(v+b);n=Math.round((r-a)/(v+b))}else{var o=t.height+b,i=o%(v+b);n=Math.round((o-i)/(v+b))}e.container.style.gridRowEnd="span "+n}}),[h,r,y,c,d.resizing]),E=o.a.useCallback((function(){y.forEach((function(e){return w(e)}))}),[h,r,y,c,d.resizing,w]),x=o.a.useCallback((function(){if(!d.resizing){d.resizing=!0;var e=setTimeout((function(){d.resizing=!1}),100);window.requestAnimationFrame((function(){clearTimeout(e),E(),d.resizing=!1}))}}),[h,r,y,c,d.resizing,E]);Object(a.useEffect)((function(){return window.addEventListener("resize",x),function(){window.removeEventListener("resize",x)}}),[h,r,y,c,d.resizing,x]),Object(a.useEffect)((function(){setTimeout((function(){return x()}),100)}),[h,r,y,c,d.resizing,x]),setTimeout((function(){return x()}),0);var k=Y((function(){return{root:{gridTemplateColumns:"repeat(auto-fill, minmax("+(t||"150px")+","+(n||"1.4fr")+"))","& .masonry-item":{boxShadow:X(null,"inherit",(function(){return"light"===u.palette.type}),"2px 2px 4px #9c9c9c"),borderRadius:3,overflow:"hidden"},"& .masonry-item:hover":{boxShadow:X(null,"3px 3px 6px #9c9c9c",(function(){return"dark"===u.palette.type}),"0px 0px 4px #55555522")}}}}),[t,n])();return o.a.createElement("div",{className:Object(m.a)("root",s.className,k.root)},r.map((function(e,t){return i?o.a.createElement(ge,M({key:t},e,{element:i(e,t)})):o.a.createElement(he,M({key:t},e))})))},modal:function(e){var t=function(){return e.onClose()},n=function(){return e.onEscape&&e.onEscape()};return Object(a.useEffect)((function(){return document.addEventListener("keydown",n,!1),function(){return document.removeEventListener("keydown",n,!1)}}),[]),o.a.createElement(R.a,{open:e.show,TransitionComponent:ve,onClose:t,disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"lg"},o.a.createElement(ie,{relative:!0},e.title,e.body),o.a.createElement(_.a,null,o.a.createElement(w.a,{onClick:t,color:"default"},e.onOk?"Cancel":"Close"),e.onOk&&o.a.createElement(w.a,{onClick:function(){e.onOk&&e.onOk(),t()},color:"default"},"OK")))},numberInput:function(e){var t=Object(a.useRef)(new ye).current,n=Object(a.useRef)(null),r=o.a.useState(e.value),i=r[0],c=r[1],l={min:be(e.min)?-999:e.min,max:be(e.max)?999:e.max,step:e.step||1,precision:e.precision||0};if(l.step){var u=l.step.toString().split(".");u.length>1&&(l.precision=u[1].length)}e.unsigned&&l.min<0&&(l.min=0);var s=M({inputRef:n,handleChange:function(n){var r=parseFloat(n);r<l.min&&(r=l.min),r>l.max&&(r=l.max);var a=lib.math.roundDecimal(r,l.precision);c(a),e.onChange&&t.invokeWithAnimationFrame(e.onChange,r)},handleFocus:function(e){n.current.select()},handleBlur:function(e){},props:e,value:i},l);switch(e.variant){case"slider":return function(e){var t=e.inputRef,n=e.handleChange,r=e.handleFocus,a=e.handleBlur,i=e.props,c=e.value,l=e.step,u=e.min,s=e.max,m=c;return o.a.createElement(ui.Flex,{row:!0,tight:!0,alignItems:"center",className:"slider-input-container"},o.a.createElement("input",{ref:t,className:"slider",type:"range",onChange:function(e){return n(e.target.value)},onFocus:r,onBlur:a,title:i.title,value:m,min:u,max:s,step:l}),o.a.createElement(ui.div,{small:!0,marginLeft:15},m))}(s);default:return function(e){var t=e.inputRef,n=e.handleChange,r=e.handleFocus,a=e.handleBlur,i=e.props,c=e.value,l=e.step;return o.a.createElement(ui.Flex,{row:!0,tight:!0,className:"numeric-input-container"},o.a.createElement("button",{className:"numeric-spinner left",onClick:function(){return n(c-l)}},o.a.createElement("span",null,"-")),o.a.createElement("input",{ref:t,className:"numeric-input",type:"number",inputMode:"number",pattern:"[0-9]*",onChange:function(e){return n(e.target.value)},onFocus:r,onBlur:a,value:c,required:i.required,placeholder:i.placeholder,title:i.title}),o.a.createElement("button",{className:"numeric-spinner right",onClick:function(){return n(c+l)}},o.a.createElement("span",null,"+")))}(s)}},page:{layout:function(e){var t=Z(M({},e),Te),n=t.root,r=t.props,a=t.data,i=Y({root:{minHeight:"100vh;","& > .column":{"& > .row":{height:"100vh;","& > .page-panel":{backgroundColor:"#80808011"}}}}},[])();return o.a.createElement(Me.row,M({className:"page-layout "+n.className+" "+i.root},a,{tight:!0}),o.a.createElement(Me.col,{wide:!0},r.header&&J(r.header),o.a.createElement(Me.row,null,r.children)))},panel:function(e){var t=Z(M({},e),we,void 0,"page-panel"),n=t.root,r=t.props,a=t.data;return o.a.createElement(le,M({className:n.className},a,{alignSelfStretch:!0}),o.a.createElement(ie,{relative:!0,alignSelfStart:!0,sticky:r.sticky,top:r.sticky?r.stickyTop:void 0},J(r.children)))}},propertyPage:function(e){var t=e.data,n=Object.keys(t).filter((function(e){return!!t[e]||0===t[e]}));return o.a.createElement(Fragment,null,n.map((function(e){var n=H(e);return o.a.createElement(ce,{key:e,spaced:!0,fontSize:"0.8rem"},o.a.createElement(ie,{width:"50%",opacity:.5},n),o.a.createElement(ie,{width:"50%"},"boolean"===typeof t[e]?t[e].toString():t[e]))})))},table:function(e){var t=e.cols,n=e.items,r=Z(T(e,He),null),a=r.root,i=r.data,c=r.events,l=Y((function(){return{root:{"& th":{textAlign:"left",textTransform:"capitalize",paddingLeft:5,paddingRight:5},"& td":{borderTop:"thin solid #80808080",paddingTop:8,paddingLeft:5,paddingRight:5,paddingBottom:0,lineHeight:1,textAlign:"center"},"& .number":{textAlign:"right"}}}}),[])();return n?o.a.createElement("table",M({cellPadding:0,cellSpacing:0,className:Object(m.a)(l.root,a.className)},i,c),t&&t.length>0&&o.a.createElement(qe,{cols:t}),o.a.createElement("tbody",null,n.map((function(e,n){return o.a.createElement(Pe,{key:n,item:e,cols:t})})))):null},tabs:function(e){var t=e.onChange,n=e.activeKey,r=e.items,o=e.keyForItem,i=e.elementForItem,c=Z(T(e,Ke),null,"ui-tabs"),l=c.root,u=c.props,s=r.map((function(e){if(!o)switch(typeof e){case"string":return e;case"number":return e.toString();default:throw new Error("Invalid key")}return o(e)})),d=Object(a.useState)((function(){return n})),f=d[0],p=d[1],g=Y((function(){return{minWidth:"unset!important",minHeight:"unset!important"}}),[])();if(!s.length)return null;var h=Object(a.createElement)(z.a,{orientation:e.orientation,value:f||s[0],onChange:function(e,n){p(n),t&&t(n)},"aria-label":"tabs with "+s.length+" panels"},s.map((function(e){var t=H(e);return Object(a.createElement)(F.a,{key:e,label:t,value:e})}))),v=r.map((function(e,t){var n=s[t],r="undefined"===typeof f&&0===t||f===n;return Object(a.createElement)(Ue,{key:n,active:r,value:n,id:u.id||"global"},i(e,r))})),b=Object(a.createElement)(ce,{wide:!0},s.length>1&&Object(a.createElement)(le,null,h),Object(a.createElement)(le,{grow:!0},v)),y=Object(a.createElement)(a.Fragment,null,s.length>1&&h,v),w="vertical"===e.orientation;return Object(a.createElement)("div",{className:Object(m.a)("root",l,g)},w&&b,!w&&y)},text:function(e){var t=Z(T(e,De),null),n=t.root,r=t.data,a=t.events;return n.className?o.a.createElement("div",M({},r,{className:n.className},a),J(e.children)):J(e.children)}},Je=n(73);function Xe(){return o.a.createElement(Ge.table,{cols:Je.columns,items:Je.array})}n(260),n(261),n(262);var Ye=function(){var e=Ie(),t={"& > .flex.column":{border:"4px solid #ffffff",padding:"30px","& > .value":{fontSize:"3rem",margin:"0 0 15px 0"}}};return o.a.createElement(Ge.page.layout,null,o.a.createElement(Ge.page.panel,{id:"left_panel",minWidth:100,width:"20%",noMobile:!0},o.a.createElement(Ge.div,{css:{backgroundColor:"#ffffff11",padding:"15px"},wide:!0,borderBox:!0},o.a.createElement("h1",null,"@reactiff/ui-core"),o.a.createElement("p",null,"UI toolkit foundation"),o.a.createElement(s.a,{children:"[![NPM](https://img.shields.io/npm/v/@reactiff/ui-core.svg)](https://www.npmjs.com/package/@reactiff/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)"}))),o.a.createElement(Ge.row,{alignCenter:!0,css:t},o.a.createElement(Ge.div,{css:{color:"yellowgreen"}}),o.a.createElement(Ge.div,{className:"flex column align-center"},o.a.createElement(Ge.text,{className:"value"},"Nothing")),o.a.createElement(Ge.div,{className:"flex column align-center"},o.a.createElement(Ge.text,{className:"value"},o.a.createElement("span",null,"Window: ",e.width,"x",e.height))),Object.entries(r).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement(Ge.div,{key:n,className:"flex column align-center"},r())})),o.a.createElement("p",null,o.a.createElement("a",{href:"https://www.npmjs.com/package/@reactiff/ui-core"},"npm")," | ",o.a.createElement("a",{href:"https://github.com/reactiff/package-name"},"git")," | MIT \xa9 ",o.a.createElement("a",{href:"https://github.com/reactiff"},"Rick Ellis"))))};c.a.render(o.a.createElement(Ye,null),document.getElementById("root"))},73:function(e){e.exports=JSON.parse('{"array":[{"__count":1,"time":1624769288000,"price":500,"qty":17,"exch":"A1"},{"__count":4,"time":1624769289000,"price":506.3673858439066,"qty":-36,"exch":"A1"},{"__count":3,"time":1624769290000,"price":506.3673858439066,"qty":-11,"exch":"A1"},{"__count":1,"time":1624769291000,"price":507.83804610034605,"qty":-48,"exch":"A1"},{"__count":2,"time":1624769292000,"price":509.70354958478947,"qty":19,"exch":"A1"},{"__count":2,"time":1624769293000,"price":509.70354958478947,"qty":19,"exch":"A1"},{"__count":1,"time":1624769294000,"price":500.13800861019183,"qty":-3,"exch":"A1"},{"__count":3,"time":1624769295000,"price":500.13800861019183,"qty":21,"exch":"A1"},{"__count":2,"time":1624769296000,"price":500.13800861019183,"qty":15,"exch":"A1"},{"__count":1,"time":1624769297000,"price":500.13800861019183,"qty":-13,"exch":"A1"},{"__count":2,"time":1624769298000,"price":500.13800861019183,"qty":35,"exch":"A1"},{"__count":1,"time":1624769299000,"price":500.13800861019183,"qty":-39,"exch":"A1"},{"__count":3,"time":1624769300000,"price":500.13800861019183,"qty":18,"exch":"A1"},{"__count":3,"time":1624769301000,"price":504.0623394079271,"qty":-25,"exch":"A1"},{"__count":1,"time":1624769302000,"price":497.51211598686155,"qty":26,"exch":"A1"}],"columns":["time","price","qty","exch"]}')}},[[129,1,2]]]);
//# sourceMappingURL=main.9d2becba.chunk.js.map