(this["webpackJsonp@reactiff/ui-core-example"]=this["webpackJsonp@reactiff/ui-core-example"]||[]).push([[0],{128:function(e,t,n){e.exports=n(262)},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),i=n.n(o),c=n(117),l=n(111),u=n.n(l),s=n(3),f=n(312),m=n(314),d=n(318),p=n(316),g=n(315),h=n(319),v=n(317),b=n(309),y=n(328),E=n(15),w=n(73),k=n.n(w),x=n(320),j=n(329),O=n(330),S=n(321),C=n(325),N=n(327),A=n(62),I=n(74),R=n(322),B=n(323),T=n(263),z=n(326),F=n(324);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var W=function(e,t){return"function"===typeof e?e(t):e},H={fnOrValue:W,switch:function(e,t){for(var n=function(t){return"function"===typeof t?t(e):t===e},r=function(e){return Array.isArray(e)?e.some(n):n(e)},a=arguments.length,o=new Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];for(var c=0;c<o.length;c+=2){var l=o[c];if(r(l))return W(o[c+1],l)}return W(t,e)}},K={camelToSentenceCase:function(e){return e?e.replace(/([A-Z]+|[0-9]+)/g," $1").trim().split(" ").filter((function(e){return e&&e.length})).map((function(e){var t=e.trim();return t[0].toUpperCase()+t.substring(1)})).join(" "):e},camelToKebabCase:function(e){return e?e.replace(/([A-Z]+)/g," $1").trim().split(" ").map((function(e){return e.trim().toLowerCase()})).join("-"):e},toProperCase:function(e){return e?e[0].toUpperCase()+e.substring(1):e},mutateWhile:function(e,t,n){for(var r=e;t(r);)r=n(r);return r},toCamelCase:function(e){if(!e)return e;var t=e.replace(/\s/g,"").trim();return 0===t.length?"":t[0].toLowerCase()+t.substring(1)},removeDoubleSpaces:function(e){return K.mutateWhile(e,(function(e){return e.indexOf("  ")>=0}),(function(e){return e.replaceAll(/\s\s/g," ")})).trim()}};var U={all:function(e,t){return!e.some((function(e){return!t(e)}))},uniques:function(e){return Array.from(new Set(e))},sortBy:function(e,t){var n=t&&"desc"===t?-1:1;return function(t,r){return(e(t)<e(r)?-1:1)*n}},sortByDesc:function(e){return function(t,n){return e(t)>e(n)?-1:1}},toDictionary:function(e,t){return e.reduce((function(e,n){var r;return Object.assign(e,((r={})[t(n)]=n,r))}),{})}};var q={parse:function(e){var t=(new Date).getTimezoneOffset(),n=t%60,r=(t/60).toString().padStart(2,"0")+":"+n.toString().padStart(2,"0"),a=e.split("T")[0].split("-"),o=a[0],i=a[1],c=a[2];return new Date(o+"-"+i+"-"+c+"T"+r+":00.000")},isoToInt:function(e){var t=e.split("T")[0].split("-"),n=t[0],r=t[1],a=t[2];return parseInt(""+n+r+a,10)}};var D=["path","depth"],V=["path","depth"];function G(e,t){t.debug&&console.log(new Array(t.depth).fill(" ").join("")+"traverseLeaf value:",e," ctx:",t);var n=[],r={value:e,type:typeof e,contructorName:e?e.constructor.name:void 0,key:t.key,path:t.path.map((function(e){var t="string"===typeof e?e:e.toString();return"["===t[0]?t:"."+t})).join("").substring(1),tokens:t.path};return t.find&&t.select&&t.find(r)?t.select(r):(t.filter?t.filter(r)&&(t.visit&&t.visit(r),t.select&&(n=n.concat(t.select(r)))):(t.visit&&t.visit(r),t.select&&(n=n.concat(t.select(r)))),Array.isArray(e)?t.expand&&!t.expand(r)||(n=n.concat(function(e,t){t.debug&&console.log(new Array(t.depth).fill(" ").join("")+"traverseArray value:",e," ctx:",t);for(var n=[],r=t.path,a=t.depth,o=L(t,V),i=0;i<e.length;i++)n=n.concat(G(e[i],P({},o,{path:r.concat("["+i+"]"),depth:a+1,key:i,index:i})));return n}(e,t))):"object"===typeof e&&(t.expand&&!t.expand(r)||(n=n.concat(function(e,t){t.debug&&console.log(new Array(t.depth).fill(" ").join("")+"traverseObject value:",e," ctx:",t);var n=[];if(function(e){return"undefined"===typeof e||null===e}(e))return n;for(var r=t.path,a=t.depth,o=L(t,D),i=0,c=Object.keys(e);i<c.length;i++){var l=c[i];n=n.concat(G(e[l],P({},o,{path:r.concat(l),depth:a+1,key:l,index:l})))}var u=Object.getOwnPropertySymbols(e);if(u.length)for(var s,f=_(u);!(s=f()).done;){var m=s.value;n=n.concat(G(e[m],P({},o,{path:r.concat(m),depth:a+1,key:m,index:m})))}return n}(e,t)))),n)}var X=function(e,t){var n="object"===typeof t&&Reflect.has(t,"namespace")?t.namespace:null;return G(e,P({},"object"===typeof t?t:{select:t},{path:n?[n]:[],depth:0}))};function J(e,t,n){for(var r=e,a=0;a<t.length;a+=1){var o=t[a],i=r[o],c=typeof i;if("undefined"===c||null===i?r[o]={}:Array.isArray(r[o])?r[o]=P({},r[o]):"object"===c&&(r[o]=P({},i)),a===t.length-1)return r[o]=n,n;r=r[o]}return n}function Y(e){return e.reduce((function(e,t){return e+t}),0)}var $=function(e,t,n,r){return e?Object.keys(e).map((function(t){return{key:t,item:e[t]}})).reduce((function(r,a){var o=n(a.item,a.key,e);return t(r,o)}),r):r},Z=function(e,t){return e.concat(t)},Q=function(){function e(e){this.object=e}var t=e.prototype;return t.count=function(){return Object.keys(this.object).length},t.map=function(e){var t=this;return Object.entries(this.object).map((function(n){var r=n[0],a=n[1];return e?e(a,r,t.object):a}))},t.concat=function(e){return $(this.object,Z,e,[])},t.min=function(e){return $(this.object,Math.min,e,Number.MAX_VALUE)},t.max=function(e){return $(this.object,Math.max,e,Number.MIN_VALUE)},t.sum=function(e){return Y(this.map(e))},t.avg=function(e){var t=this.map(e);return 0===t.length?0:Y(t)/t.length},e}(),ee={array:U,logic:H,object:{traverse:X,assignPath:J,selectShape:function(e,t){return X(t,{select:function(e){return{tokens:e.tokens,key:e.key,alias:e.value}}}).reduce((function(t,n){var r=n.tokens.slice(0,n.tokens.length-1),a=[].concat(r,[n.key]).join("."),o=k.a.get(e,a);return J(t,[].concat(r,[n.alias]),o),t}),{})},intersect:function(e,t){return Object.keys(t).filter((function(t){return Reflect.has(e,t)})).reduce((function(t,n){return t[n]=e[n],t}),{})},mapReduce:function(e){return new Q(e)}},string:K,date:q},te=Object(b.a)({root:{maxWidth:345},media:{height:140}});var ne=function(e,t){return Object(r.useMemo)((function(){return Object(b.a)((function(){return Object(y.a)(P({},ee.logic.fnOrValue(e)))}))}),[e,t])},re=function(e){var t=e.cols||[];return a.a.createElement("thead",null,a.a.createElement("tr",null,t.map((function(e,t){return a.a.createElement("th",{key:t},e)}))))},ae=function(e){var t=e.item,n=e.cols,r=Array.isArray(t);return a.a.createElement("tr",{className:"no-text-overflow"},r&&t.map((function(e,t){return a.a.createElement("td",{key:n[t]},"number"===typeof e&&e.toFixed(0))})),!r&&n.map((function(e,r){return a.a.createElement("td",{key:n[r]},"number"===typeof t[e]&&t[e].toFixed(0))})))},oe={bgColor:"backgroundColor"};var ie={scrollableX:"scrollable scrollable-x",scrollableY:"scrollable scrollable-y",borderBox:"border-box"};function ce(e){return Object.assign(e.bag.style,function(e){var t,n,r=Reflect.has(oe,e.key)?oe[e.key]:e.key;return(t={})[r]=(n=e.value)&&n.hex?n.hex():n,t}(e)),!0}function le(e){var t=Reflect.has(ie,e.key)?ie[e.key]:K.camelToKebabCase(e.key);return e.bag.classes.push(t),!0}var ue={absolute:!0,alignStart:!0,alignCenter:!0,alignEnd:!0,alignStretch:!0,alignBaseline:!0,alignAuto:!0,alignSelfStart:!0,alignSelfCenter:!0,alignSelfEnd:!0,alignSelfStretch:!0,alignSelfBaseline:!0,anchorBottom:!0,anchorLeft:!0,anchorRight:!0,anchorTop:!0,beveled:!0,block:!0,borderBox:!0,centerX:!0,centerXY:!0,centerY:!0,clickable:!0,coverImage:!0,fill:!0,fixed:!0,fullWidth:!0,fullWidthAlways:!0,grow:!0,hidden:!0,horizontal:!0,inline:!0,inlineBlock:!0,justifyStart:!0,justifyCenter:!0,justifyEnd:!0,mobileCenter:!0,mobileColumn:!0,mobileOnly:!0,noBr:!0,noBreak:!0,noMargin:!0,noMobile:!0,noOverflow:!0,noPadding:!0,noSelect:!0,noTransform:!0,noWrap:!0,opaque:!0,overlay:!0,relative:!0,round:!0,rounded:!0,scrollable:!0,scrollableX:!0,scrollableY:!0,shrink:!0,small:!0,smaller:!0,solid:!0,spaced:!0,sticky:!0,tall:!0,translucent:!0,vertical:!0,wide:!0},se={backgroundColor:ce,bgColor:ce,backgroundImage:ce,backgroundRepeat:ce,backgroundPosition:ce,backgroundSize:ce,border:ce,borderTop:ce,borderRight:ce,borderBottom:ce,borderLeft:ce,borderRadius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomLeftRadius:ce,borderBottomRightRadius:ce,color:ce,cursor:ce,dataProps:ce,fontSize:ce,fontStyle:ce,fontWeight:ce,innerProps:ce,lineHeight:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,minHeight:ce,minWidth:ce,opacity:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,pseudo:ce,textAlign:ce,textTransform:ce,title:ce,width:ce,height:ce,top:ce,right:ce,bottom:ce,left:ce},fe=["id","children","style","className","ref","data","pseudo","innerProps","css","onClick"],me=["dataProps"];function de(e,t,n){var r=e.id,a=e.children,o=e.style,i=e.className,c=e.ref,l=e.data,u=e.pseudo,f=e.innerProps,m=e.css,d=e.onClick,p=L(e,fe),g={id:r,children:a,style:o,className:i,ref:c,data:l,pseudo:u,innerProps:f,ownProps:t,css:m,onClick:d},h=[],v=Object.keys(p),y={style:P({},m,o),classes:[]};v.forEach((function(t){if(!Reflect.has(g,t)){var n=e[t];if(Reflect.has(ue,t))return le({bag:y,key:t,value:n,debug:!1}),void h.push(t);if(Reflect.has(se,t))return se[t]({bag:y,key:t,value:n}),void h.push(t);!0===n&&le({bag:y,key:t,value:n,debug:!1})}}));var E=P({},p);h.forEach((function(e){delete E[e]}));for(var w=Object.keys(e.pseudo||{}).reduce((function(t,n){var r,a=e.pseudo[n],o="&"===n[0]?n:"& :"+n;return Object.assign(t,((r={})[o]=a,r))}),{}),k=Object(b.a)((function(){var e={};return Object.keys(y.style).length&&(e.bag=y.style),Object.keys(w).length&&(e.pseudo=w),e}))(),x=e.dataProps,j=L(e,me),O=arguments.length,S=new Array(O>3?O-3:0),C=3;C<O;C++)S[C-3]=arguments[C];var N={root:{className:Object(s.a)(i,S,n,y.classes,k.bag,k.pseudo)},props:P({},E,g),attr:j,data:x};return N}var pe=["children"],ge=["children"],he=["children"],ve=function(e){var t=e.children,n=de(L(e,pe),null),r=n.root,o=n.props,i=n.attr,c=n.data;return a.a.createElement("div",P({},c,o,i,{className:r.className}),t)},be=function(e){var t=e.children,n=de(L(e,ge),null,"Row","flex row"),r=n.root,o=n.props,i=n.attr,c=n.data;return a.a.createElement("div",P({},c,o,i,{className:r.className}),t)},ye=function(e){var t=e.children,n=de(L(e,he),null,"Col","flex column"),r=n.root,o=n.props,i=n.attr,c=n.data;return a.a.createElement("div",P({},c,o,i,{className:r.className}),t)},Ee={__proto__:null,div:ve,row:be,col:ye};var we={angle:90};var ke={xOffset:0,yOffset:0,blur:5,spread:0,rgba:{r:0,g:0,b:0,a:.75}},xe="object"===typeof window,je={xs:1,sm:2,md:3,lg:4,xl:5,xxl:6,xxxl:7},Oe={bootstrap:[[1600,"xxxl"],[1400,"xxl"],[1200,"xl"],[992,"lg"],[768,"md"],[576,"sm"]],material:[[1920,"xl"],[1280,"lg"],[960,"md"],[600,"sm"]]},Se=function(e){if(!xe)return"xs";for(var t,n=_(Oe[e]);!(t=n()).done;){var r=t.value;if(window.innerWidth>=r[0])return r[1]}return"xs"},Ce=function(e){return{code:e,value:je[e]}};function Ne(){return window.innerHeight}var Ae=function(){return document.body.scrollTop||document.documentElement.scrollTop};function Ie(e,t,n,r,a){if(xe){var o=function(){var n=r();(a||function(e,t){return e===t})(e.value,n)||(e.value=n,e.ticking||(window.requestAnimationFrame((function(){t(e.value),e.ticking=!1})),e.ticking=!0))};return window.addEventListener(n,o),function(){return window.removeEventListener(n,o)}}}var Re={__proto__:null,createStripes:function(e){return function(e){for(var t=e.angle,n=e.colors?e.colors.map((function(e){return"string"===typeof(t=e)?function(e){var t=e.split(" ");if(1===t.length)return{color:t[0],parts:1};if(2===t.length)return{color:t[0],parts:+t[1]};throw new Error("Max number of color tokens expected is 2")}(t):t;var t})):null,r=2*n.reduce((function(e,t){return+e+t.parts}),0),a=100/r,o=n.length,i=2*o,c=[],l=0,u=0;u<i;u++){var s=u%o,f=(u+1)%o;l+=a*n[s].parts,c.push(n[s].color+" "+l.toFixed(2)+"%"),u<i-1&&c.push(n[f].color+" "+l.toFixed(2)+"%")}var m=e.size||r;return{backgroundImage:"linear-gradient("+t+"deg, "+c.join(", ")+")",backgroundSize:Object(w.isNumber)(m)?m.toFixed(2)+"px "+m.toFixed(2)+"px":m}}(P({},we,e))},createLinearGradient:function(e){return function(e){return{backgroundImage:(Array.isArray(e)?e:[e]).map((function(e){var t=e.colors.map((function(e){return function(e){var t;return"string"===typeof e?function(e){var t=e.split(" ");if(t.length>2)throw new Error("Due to current limitation of this function, colors should be canonical without any spaces, e.g.: rgb(255,128,0,0.8) 75% is a valid color and stop pair.");return t}(e):[e.color,null===(t=e.percentage)||void 0===t?void 0:t.toString()]}(e)}));return(e.repeat?"repeating-linear-gradient":"linear-gradient")+"("+e.angle+"deg, "+t.map((function(e){return e.join(" ")})).join(", ")+")"})).join(", ")}}(e)},useBoxShadow:function(e){return a.a.useState((function(){var t=P({},ke,e),n=e.rgba?"rgba("+t.rgba.r+", "+t.rgba.g+", "+t.rgba.b+", "+t.rgba.a+")":e.hex,r=(e.inset?"inset ":"")+(t.xOffset+"px ")+t.yOffset+"px "+t.blur+"px "+t.spread+"px "+n;return{"-webkit-box-shadow":r,"-moz-box-shadow":r,"box-shadow":r}}))[0]},useGridSize:function(e){var t=Object(r.useRef)({value:"xs",ticking:!1}).current,n=Object(r.useState)((function(){return Ce(Se(e))})),a=n[0],o=n[1];return Object(r.useEffect)((function(){return Ie(t,(function(e){return o(Ce(e))}),"resize",(function(){return Se(e)}))}),[]),a},useWindowHeight:function(){var e=Object(r.useRef)({value:0,ticking:!1}).current,t=Object(r.useState)((function(){return xe?Ne():0})),n=t[0],a=t[1];return Object(r.useEffect)((function(){return Ie(e,a,"resize",Ne)}),[e]),n},useScrollPosition:function(){var e=Object(r.useRef)({value:0,ticking:!1}).current,t=Object(r.useState)((function(){return xe?Ae():0})),n=t[0],a=t[1];return Object(r.useEffect)((function(){return Ie(e,a,"scroll",Ae)}),[e]),n}},Be={count:1,format:"plain",paragraphLowerBound:3,paragraphUpperBound:7,sentenceLowerBound:5,sentenceUpperBound:15,suffix:"\n",units:"words"};var Te={words:function(e,t){return Object(A.loremIpsum)(P({},Be,{count:e,units:"words",words:t}))},sentences:function(e,t){return Object(A.loremIpsum)(P({},Be,{count:e,units:"sentences",words:t}))},paragraphs:function(e,t){return Object(A.loremIpsum)(P({},Be,{count:e,units:"paragraphs",words:t}))}},ze=["colSpan","image","title","description","onClick"],Fe=["min","max","items","elementForItem","revision"],Pe=function(e){var t=e.element,n=e.colSpan,r=e.image,o=ne((function(){var e={};return n&&(e.gridColumnEnd="span "+n),{root:e,image:{backgroundImage:'url("'+r+'")'}}}),[n,r])();return a.a.createElement("div",{className:Object(s.a)("masonry-item","relative",o.root)},a.a.createElement("div",{className:"content fill"},t))},Le=function(e){var t=e.colSpan,n=e.image,r=e.title,o=e.description,i=e.onClick,c=de(L(e,ze),null,"MasonryItem","masonry-item").root,l=ne((function(){return{root:{gridColumnEnd:t?"span "+t:null},image:{backgroundImage:'url("'+n+'")'}}}),[t,n])();return a.a.createElement("div",{className:Object(s.a)(c.className,l.root),onClick:function(){return i&&i()}},a.a.createElement(I.a,{className:"content"},n&&a.a.createElement("div",{className:Object(s.a)("cover-image",l.image)}),r&&a.a.createElement("div",{className:"title"},r),o&&a.a.createElement("div",{className:"desc"},o)))},Me=a.a.forwardRef((function(e,t){return a.a.createElement(T.a,P({direction:"down",ref:t},e))})),_e=function(e){return"string"===typeof e},We=function(e){return"undefined"===typeof e},He=function(e){return null===e},Ke=function(e){return We(e)||He(e)},Ue={__proto__:null,isString:_e,isNumber:function(e){return"number"===typeof e},isUndefined:We,isNull:He,isNullOrUndefined:Ke,isJsonPath:function(e){return!!_e(e)&&"json://"===e.substring(0,7)}},qe=function(){function e(){this.lastKnownParams=null,this.ticking=!1}return e.prototype.invokeWithAnimationFrame=function(e,t){var n=this;this.lastKnownParams=t,this.ticking||(this.ticking=!0,window.requestAnimationFrame((function(){e(n.lastKnownParams),n.ticking=!1})))},e}();var De=new function(){this.sticky=!1,this.stickyTop=0},Ve=P({},Ee,Re),Ge=new function(){},Xe={layout:function(e){var t=de(P({},e),Ge),n=t.root,r=t.props,o=t.data,i=ne({root:{minHeight:"100vh;","& > .column":{"& > .row":{height:"100vh;","& > .page-panel":{backgroundColor:"#80808011"}}}}},[])();return a.a.createElement(Ve.row,P({className:"page-layout "+n.className+" "+i.root},o,{tight:!0}),a.a.createElement(Ve.col,{wide:!0},r.header&&W(r.header),a.a.createElement(Ve.row,null,r.children)))},panel:function(e){var t=de(P({},e),De,void 0,"page-panel"),n=t.root,r=t.props,o=t.data;return a.a.createElement(ye,P({className:n.className},o,{alignSelfStretch:!0}),a.a.createElement(ve,{relative:!0,alignSelfStart:!0,sticky:r.sticky,top:r.sticky?r.stickyTop:void 0},W(r.children)))}},Je=["id","onChange","activeKey","variant","orientation","centered","items","keyForItem","elementForItem"];function Ye(e){var t=e.children,n=e.active,r=e.value,o=e.id;return a.a.createElement("div",{role:"tabpanel",hidden:!n,id:o+"-"+r,"aria-labelledby":o+"-"+r},t||a.a.createElement("div",null,"No content"))}var $e=["size","children"],Ze=P({},Ee,{card:function(e){var t=e.title,n=e.description,r=e.image,o=e.onClick,i=e.footerActions,c=e.children,l=te();return a.a.createElement(f.a,{className:l.root},a.a.createElement(m.a,{onClick:function(){return o&&o()}},r&&a.a.createElement(g.a,{className:l.media,image:r.url,title:t}),a.a.createElement(p.a,null,t&&a.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),n&&a.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},n),c&&c)),i&&a.a.createElement(d.a,null,Object.keys(i).map((function(e){return a.a.createElement(h.a,{key:e,size:"small",color:"primary",onClick:function(){return i[e]()}},ee.string.camelToSentenceCase(e))}))))},clsx:s.a,counter:function(e){var t=a.a.useRef({count:0}).current;if(++t.count<=("undefined"!==typeof e.min?e.min:0))return null;var n=ne({root:{position:"absolute",zIndex:999999,top:0,left:0,padding:"0 3px",lineHeight:1,fontSize:".7rem",backgroundColor:"red",color:"white"}},[])();return a.a.createElement("div",{title:e.title,className:n.root},t.count)},drawer:function(e){var t=a.a.useState(!1),n=t[0],r=t[1],o=a.a.useState(),i=o[0],c=o[1],l="undefined"!==typeof e.open,u=!i&&(l?e.open:n),s=function(t){return function(n){r(t),t||c(!0),t&&e.onOpen&&e.onOpen(),!t&&e.onClose&&e.onClose()}};return a.a.createElement(Fragment,null,e.button&&!u&&a.a.cloneElement(e.button,{onClick:s(!0)}),a.a.createElement(x.a,{anchor:e.anchor,open:u,onClose:s(!1)},!i&&u&&e.children))},dropdown:function(e){var t=e.localStorageKey,n=e.label,r=e.defaultValue,o=e.options,i=Object(N.a)(),c=a.a.useState((function(){return(t?localStorage.getItem(t):null)||r})),l=c[0],u=c[1],s=o.find((function(e){var t="object"===typeof e?e.value:e;return l===t}))?[]:[{value:l,text:l,aux:!0}];return a.a.createElement(S.a,null,n&&a.a.createElement(j.a,{id:i},n),a.a.createElement(C.a,{labelId:i,value:l,onChange:function(n){var r=n.target.value;t&&localStorage.setItem(t,r),u(r),e.onChange&&e.onChange(r)}},[].concat(o,s).map((function(e){var t=e,n="object"===typeof t?t.text:e,r="object"===typeof t?t.value:e,o="object"===typeof t&&!0===t.aux;return a.a.createElement(O.a,{key:r,value:r},!o&&n,o&&a.a.createElement(ve,{opacity:.5,fontStyle:"italic"},n))}))))}},Re,{loremIpsum:Te,masonry:function(e){var t=e.min,n=e.max,o=e.items,i=e.elementForItem,c=e.revision,l=L(e,Fe),u=Object(E.a)(),f=de(l,null,"Masonry","ui-masonry-grid masonry-grid grid").root,m=Object(r.useRef)({resizing:!1,gridItems:[]}).current,d=document.getElementsByClassName("masonry-grid")[0],p=Object(r.useMemo)((function(){return d?{grid:d,rowHeight:parseInt(window.getComputedStyle(d).getPropertyValue("grid-auto-rows"),10),rowGap:parseInt(window.getComputedStyle(d).getPropertyValue("grid-row-gap"),10),gridItems:Array.from(document.getElementsByClassName("masonry-item")).map((function(e){var t=e.querySelector(".content > *"),n=+t.getAttribute("heightratio");return{container:e,innerElement:t,heightRatio:n}}))}:{rowHeight:0,rowGap:0,gridItems:[]}}),[d,o,c,m.resizing]),g=p.grid,h=p.rowHeight,v=p.rowGap,b=p.gridItems,y=a.a.useCallback((function(e){var t=e.innerElement.getBoundingClientRect();if(0!==t.width){var n;if(e.heightRatio){var r=Math.round(t.width*e.heightRatio)+v,a=r%(h+v);n=Math.round((r-a)/(h+v))}else{var o=t.height+v,i=o%(h+v);n=Math.round((o-i)/(h+v))}e.container.style.gridRowEnd="span "+n}}),[g,o,b,c,m.resizing]),w=a.a.useCallback((function(){b.forEach((function(e){return y(e)}))}),[g,o,b,c,m.resizing,y]),k=a.a.useCallback((function(){if(!m.resizing){m.resizing=!0;var e=setTimeout((function(){m.resizing=!1}),100);window.requestAnimationFrame((function(){clearTimeout(e),w(),m.resizing=!1}))}}),[g,o,b,c,m.resizing,w]);Object(r.useEffect)((function(){return window.addEventListener("resize",k),function(){window.removeEventListener("resize",k)}}),[g,o,b,c,m.resizing,k]),Object(r.useEffect)((function(){setTimeout((function(){return k()}),100)}),[g,o,b,c,m.resizing,k]),setTimeout((function(){return k()}),0);var x=ne((function(){return{root:{gridTemplateColumns:"repeat(auto-fill, minmax("+(t||"150px")+","+(n||"1.4fr")+"))","& .masonry-item":{boxShadow:H.switch(null,"inherit",(function(){return"light"===u.palette.type}),"2px 2px 4px #9c9c9c"),borderRadius:3,overflow:"hidden"},"& .masonry-item:hover":{boxShadow:H.switch(null,"3px 3px 6px #9c9c9c",(function(){return"dark"===u.palette.type}),"0px 0px 4px #55555522")}}}}),[t,n])();return a.a.createElement("div",{className:Object(s.a)("root",f.className,x.root)},o.map((function(e,t){return i?a.a.createElement(Pe,P({key:t},e,{element:i(e,t)})):a.a.createElement(Le,P({key:t},e))})))},modal:function(e){var t=function(){return e.onClose()},n=function(){return e.onEscape&&e.onEscape()};return Object(r.useEffect)((function(){return document.addEventListener("keydown",n,!1),function(){return document.removeEventListener("keydown",n,!1)}}),[]),a.a.createElement(R.a,{open:e.show,TransitionComponent:Me,onClose:t,disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"lg"},a.a.createElement(ve,{relative:!0},e.title,e.body),a.a.createElement(B.a,null,a.a.createElement(h.a,{onClick:t,color:"default"},e.onOk?"Cancel":"Close"),e.onOk&&a.a.createElement(h.a,{onClick:function(){e.onOk&&e.onOk(),t()},color:"default"},"OK")))},numberInput:function(e){var t=Object(r.useRef)(new qe).current,n=Object(r.useRef)(null),o=a.a.useState(e.value),i=o[0],c=o[1],l={min:Ke(e.min)?-999:e.min,max:Ke(e.max)?999:e.max,step:e.step||1,precision:e.precision||0};if(l.step){var u=l.step.toString().split(".");u.length>1&&(l.precision=u[1].length)}e.unsigned&&l.min<0&&(l.min=0);var s=P({inputRef:n,handleChange:function(n){var r=parseFloat(n);r<l.min&&(r=l.min),r>l.max&&(r=l.max);var a=lib.math.roundDecimal(r,l.precision);c(a),e.onChange&&t.invokeWithAnimationFrame(e.onChange,r)},handleFocus:function(e){n.current.select()},handleBlur:function(e){},props:e,value:i},l);switch(e.variant){case"slider":return function(e){var t=e.inputRef,n=e.handleChange,r=e.handleFocus,o=e.handleBlur,i=e.props,c=e.value,l=e.step,u=e.min,s=e.max,f=c;return a.a.createElement(ui.Flex,{row:!0,tight:!0,alignItems:"center",className:"slider-input-container"},a.a.createElement("input",{ref:t,className:"slider",type:"range",onChange:function(e){return n(e.target.value)},onFocus:r,onBlur:o,title:i.title,value:f,min:u,max:s,step:l}),a.a.createElement(ui.div,{small:!0,marginLeft:15},f))}(s);default:return function(e){var t=e.inputRef,n=e.handleChange,r=e.handleFocus,o=e.handleBlur,i=e.props,c=e.value,l=e.step;return a.a.createElement(ui.Flex,{row:!0,tight:!0,className:"numeric-input-container"},a.a.createElement("button",{className:"numeric-spinner left",onClick:function(){return n(c-l)}},a.a.createElement("span",null,"-")),a.a.createElement("input",{ref:t,className:"numeric-input",type:"number",inputMode:"number",pattern:"[0-9]*",onChange:function(e){return n(e.target.value)},onFocus:r,onBlur:o,value:c,required:i.required,placeholder:i.placeholder,title:i.title}),a.a.createElement("button",{className:"numeric-spinner right",onClick:function(){return n(c+l)}},a.a.createElement("span",null,"+")))}(s)}},page:Xe,propertyPage:function(e){var t=e.data,n=Object.keys(t).filter((function(e){return!!t[e]||0===t[e]}));return a.a.createElement(Fragment,null,n.map((function(e){var n=K.camelToSentenceCase(e);return a.a.createElement(be,{key:e,spaced:!0,fontSize:"0.8rem"},a.a.createElement(ve,{width:"50%",opacity:.5},n),a.a.createElement(ve,{width:"50%"},"boolean"===typeof t[e]?t[e].toString():t[e]))})))},table:function(e){var t=e.cols,n=e.items;return n?a.a.createElement("table",{cellPadding:0,cellSpacing:0,className:"data-table"},t&&t.length>0&&a.a.createElement(re,{cols:t}),a.a.createElement("tbody",null,n.map((function(e,n){return a.a.createElement(ae,{key:n,item:e,cols:t})})))):null},tabs:function(e){var t=e.onChange,n=e.activeKey,r=e.items,o=e.keyForItem,i=e.elementForItem,c=de(L(e,Je),null,"ui-tabs"),l=c.root,u=c.props,f=r.map((function(e){if(!o)switch(typeof e){case"string":return e;case"number":return e.toString();default:throw new Error("Invalid key")}return o(e)})),m=a.a.useState((function(){return n})),d=m[0],p=m[1],g=ne((function(){return{minWidth:"unset!important",minHeight:"unset!important"}}),[])();if(!f.length)return null;var h=a.a.createElement(z.a,{orientation:e.orientation,value:d||f[0],onChange:function(e,n){p(n),t&&t(n)},"aria-label":"tabs with "+f.length+" panels"},f.map((function(e){var t=ee.string.camelToSentenceCase(e);return a.a.createElement(F.a,{key:e,label:t,value:e})}))),v=r.map((function(e,t){var n=f[t],r="undefined"===typeof d&&0===t||d===n;return a.a.createElement(Ye,{key:n,active:r,value:n,id:u.id||"global"},i(e,r))})),b=a.a.createElement(be,{wide:!0},f.length>1&&a.a.createElement(ye,null,h),a.a.createElement(ye,{grow:!0},v)),y=a.a.createElement(Fragment,null,f.length>1&&h,v),E="vertical"===e.orientation;return a.a.createElement("div",{className:Object(s.a)("root",l,g)},E&&b,!E&&y)},text:function(e){var t=de(L(e,$e),null),n=t.root,r=t.props,o=t.attr,i=t.data;return n.className?a.a.createElement("div",P({},i,r,o,{className:n.className}),W(e.children)):W(e.children)},Throttle:qe,useInlineStyle:ne,uuid:N.a},ee,Ue),Qe=(n(259),n(260),n(261),function(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=(t[0],t[1]);Object(r.useEffect)((function(){n({value:0})}),[n]);return a.a.createElement(Ze.page.layout,null,a.a.createElement(Ze.page.panel,{id:"left_panel",minWidth:100,width:"20%",noMobile:!0},a.a.createElement(Ze.div,{css:{backgroundColor:"#ffffff11",padding:"15px"},wide:!0,borderBox:!0},a.a.createElement("h1",null,"@reactiff/ui-core"),a.a.createElement("p",null,"UI toolkit foundation"),a.a.createElement(u.a,{children:"[![NPM](https://img.shields.io/npm/v/@reactiff/ui-core.svg)](https://www.npmjs.com/package/@reactiff/ui-core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)"}))),a.a.createElement(Ze.col,{alignCenter:!0},a.a.createElement(Ze.div,{css:{color:"yellowgreen"}}),a.a.createElement(Ze.div,{className:"flex column align-center",css:{border:"4px solid #ffffff",padding:"30px","& > .value":{fontSize:"3rem",margin:"0 0 15px 0"}}},a.a.createElement(Ze.text,{className:"value"},"Nothing")),a.a.createElement("p",null,a.a.createElement("a",{href:"https://www.npmjs.com/package/@reactiff/ui-core"},"npm")," | ",a.a.createElement("a",{href:"https://github.com/reactiff/package-name"},"git")," | MIT \xa9 ",a.a.createElement("a",{href:"https://github.com/reactiff"},"Rick Ellis"))))});i.a.render(a.a.createElement(Qe,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.92412f30.chunk.js.map