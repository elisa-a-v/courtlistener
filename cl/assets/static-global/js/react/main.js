!function(e){function t(t){for(var a,i,c=t[0],l=t[1],s=t[2],d=0,m=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([133,1]),n()}({133:function(e,t,n){e.exports=n(209)},209:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),i=n.n(o),c=n(130),l=n(12),s=n(17),u=n.n(s),d=n(35),m=n.n(d),p=n(36),g=n.n(p),f=n(13),b=n.n(f),h=n(121),v=n(64),A=function(e){var t=e.id,n=e.name,a=e.assocId,o=e.isSelected,i=e.user,c=n.startsWith("Create Tag: ");return r.a.createElement("a",{className:"list-group-item cursor"},c?r.a.createElement("p",null,r.a.createElement("strong",null,n)):r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",id:null==a?void 0:a.toString(),value:n,checked:o,onChange:function(e){return e.preventDefault()},style:{marginRight:"1rem"},className:"form-check position-static ".concat(o?"checked":""),"data-tagid":t}),r.a.createElement("label",{className:"form-check-label"},n),r.a.createElement("span",{className:"float-right gray"},r.a.createElement("i",{className:"fa fa-external-link cursor",onClick:function(e){return function(e){window.location.href="/tags/".concat(i,"/").concat(n,"/"),e.preventDefault(),e.stopPropagation()}(e)},title:"View this tag"}))))},E=n(14),w=n.n(E),y=n(26),k=n.n(y),x=n(24),C=n(120),O=n.n(C);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t){return P.apply(this,arguments)}function P(){return(P=k()(w.a.mark((function e(t,n){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},r={method:(null==n?void 0:n.method)||"GET",headers:(null==n?void 0:n.headers)?j(j({},a),n.headers):a},(null==n?void 0:n.body)&&(r.body=JSON.stringify(n.body)),e.abrupt("return",fetch(t,r).then((function(e){if(!e.ok)throw new Error(e.statusText);return"DELETE"===(null==n?void 0:n.method)?new Promise((function(e){return e(!0)})):e.json()})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(){var e=r.a.useCallback(function(){var e=k()(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("/api/rest/v3/tags/".concat(t.id,"/"),{method:"PUT",body:T({},t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),t=r.a.useCallback(function(){var e=k()(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("/api/rest/v3/tags/".concat(t,"/"),{method:"DELETE"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),n=Object(x.c)(t,{onSuccess:function(e,t){console.log("Successfully deletion")}}),a=b()(n,1)[0],o=Object(x.c)(e,{onSuccess:function(e,t){console.log("Successful update to Tag")}});return{modifyTags:b()(o,1)[0],deleteTags:a}};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.userId,n=e.userName,a=e.editUrl,o=e.docket,i=r.a.useState(null),c=b()(i,2),l=c[0],s=c[1],d=function(e){var t=e.docket,n=e.enabled,a=e.userId,o=r.a.useState(""),i=b()(o,2),c=i[0],l=i[1],s=r.a.useCallback(function(){var e=k()(w.a.mark((function e(t){var n,r=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,B("/api/rest/v3/tags/?user=".concat(a,"&page=").concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),u=r.a.useCallback(function(){var e=k()(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("/api/rest/v3/docket-tags/?docket=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),d=r.a.useCallback(function(){var e=k()(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,B("/api/rest/v3/tags/",{method:"POST",body:{name:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),p=r.a.useCallback(function(){var e=k()(w.a.mark((function e(n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.tag,e.next=3,B("/api/rest/v3/docket-tags/",{method:"POST",body:{tag:a,docket:t}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),f=r.a.useCallback(function(){var e=k()(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.assocId,e.next=3,B("/api/rest/v3/docket-tags/".concat(n,"/"),{method:"DELETE"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),h=Object(x.e)("associations",u,{enabled:n}).data,v=h?h.results:[],A=Object(x.b)("tags",s,{enabled:n,getFetchMore:function(e,t){var n=e.next;if(!n)return!1;var a=n.match(/page=(\d+)/);return!(!a||!a[1])&&a[1]}}),E=A.status,y=A.data,C=A.isFetching,O=A.isFetchingMore,N=A.fetchMore,j=A.canFetchMore,P=Object(x.c)(f,{onSuccess:function(e,t){x.a.setQueryData("associations",(function(n){return console.log(e,n),T(T({},n),{},{results:n.results.filter((function(e){return e.id!==t.assocId}))})}))}}),S=b()(P,1)[0],D=Object(x.c)(p,{onSuccess:function(e,t){return x.a.setQueryData("associations",(function(t){return console.log(e,t),T(T({},t),{},{results:[].concat(g()(t.results),[e])})}))}}),I=b()(D,1)[0],_=Object(x.c)(d,{onSuccess:function(e,n){l(""),x.a.setQueryData("tags",(function(n){var a=Object.keys(n),r=a[a.length-1],o=n[r],i=T(T({},o),{},{results:[].concat(g()(o.results),[T(T({},e),{},{dockets:[].concat(g()(e.dockets),[t])})])});return T(T({},n),{},m()({},r,i))})),I({tag:e.id})}}),M=b()(_,1)[0];return{infiniteQueryState:{status:E,canFetchMore:j,isFetching:C,isFetchingMore:O,fetchMore:N},tags:r.a.useMemo((function(){var e,t=(y?Object.entries(y).map((function(e){var t=b()(e,2);t[0];return t[1].results})).flat(1):[]).map((function(e){if(!v)return e;var t=v.find((function(t){return t.tag===e.id}));return T(T({},e),{},{assocId:null==t?void 0:t.id})})).sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}));if(!c)return t;var n=t.filter((function(t){return c&&t.name===c&&(e=!0),t.name.toLowerCase().includes(c.toLowerCase())}));return e?n:[{id:"-10",name:"Create Tag: ".concat(c),dockets:[]}].concat(g()(n))}),[y,c,v]),textVal:c,setTextVal:l,associations:v,addNewTag:M,addNewAssociation:I,deleteAssociation:S}}({docket:o,enabled:!!o&&n,userId:t}),p=d.infiniteQueryState,f=(p.status,p.canFetchMore),E=(p.isFetching,p.isFetchingMore),y=p.fetchMore,C=d.textVal,O=d.setTextVal,N=d.tags,j=d.associations,P=d.addNewTag,S=d.addNewAssociation,D=d.deleteAssociation,I=r.a.useRef(null),M=Object(h.a)({size:f?N.length+1:N.length,parentRef:I,estimateSize:r.a.useCallback((function(){return 40}),[])});r.a.useEffect((function(){var e=g()(M.virtualItems).reverse(),t=b()(e,1)[0];t&&t.index===M.virtualItems.length-1&&f&&!E&&(console.log("fetching more"),y())}),[f,y,N.length,E,M.virtualItems]);var F=Object(v.a)({inputValue:C,itemToString:function(e){return e?e.name:""},selectedItem:null,items:N,scrollIntoView:function(){},stateReducer:function(e,t){var n=t.changes;switch(t.type){case v.a.stateChangeTypes.InputKeyDownEnter:return _(_({},n),{},{isOpen:!0,highlightedIndex:e.highlightedIndex,inputValue:"return"});case v.a.stateChangeTypes.ItemClick:return _(_({},n),{},{isOpen:!0,highlightedIndex:e.highlightedIndex,inputValue:""});default:return n}},onInputValueChange:function(e){if("return"===e.inputValue){var t=document.querySelector("div.list-group > div > div > div > div").textContent||"";if(t.startsWith("Create Tag:")){if(!C.match(/^[a-z0-9-]*$/))return s("Only lowercase letters, numbers, and '-' allowed");var n=t.replace("Create Tag: ","");return P({name:n})}}},onSelectedItemChange:function(e){var t=e.selectedItem;if(t){if(t.name.startsWith("Create Tag:"))return C.match(/^[a-z0-9-]*$/)?P({name:t.name.replace("Create Tag: ","")}):s("Only lowercase letters, numbers, and '-' allowed");!!j&&!!j.find((function(e){return e.tag===t.id}))?(console.log("Removing ".concat(t.name," from tags for docket ").concat(o)),D({assocId:t.assocId})):(console.log("Adding ".concat(t.name," to tags for docket ").concat(o)),S({tag:parseInt(t.id,10)}))}},onHighlightedIndexChange:function(e){var t=e.highlightedIndex;t&&t>=0&&M.scrollToIndex(t)}}),L=F.isOpen,z=F.getToggleButtonProps,U=F.getLabelProps,V=F.getMenuProps,R=F.getInputProps,W=F.getComboboxProps,K=F.highlightedIndex,Y=F.getItemProps,J=function(e){return e.nativeEvent.preventDownshiftDefault=!0};return r.a.createElement("div",null,r.a.createElement("button",u()({},z({onClick:function(e){n||J(e)},onKeyDown:function(e){n||J(e)}}),{"aria-label":"toggle tag menu",className:n?"btn btn-success":"btn btn-success logged-out-modal-trigger"}),r.a.createElement("i",{className:"fa fa-tags"})," Tags ",r.a.createElement("span",{className:"caret"})),r.a.createElement("div",{className:"list-group",style:{marginTop:"2px",border:L?"1px solid grey":"none",zIndex:L?10:0,minWidth:"300px",maxWidth:"500px",position:"absolute"}},r.a.createElement("a",u()({type:"button",className:"list-group-item",style:{display:L?"block":"none"}},U()),"Apply tags to this item"),r.a.createElement("a",u()({type:"button",style:{padding:"1em",display:L?"block":"none"}},W(),{className:"list-group-item"}),r.a.createElement("input",u()({},R({onBlur:function(e){return s(null)},onChange:function(e){return O(e.target.value)}}),{className:"form-control ".concat(l&&"is-invalid"),placeholder:"Search tags…"})),l&&r.a.createElement("div",{style:{padding:"1px"},className:"invalid-feedback"},l)),r.a.createElement("div",{style:{overflowY:L?"auto":"hidden",maxHeight:"500px"}},r.a.createElement("div",u()({},V({ref:I}),{style:{height:"".concat(M.totalSize,"px"),width:"100%",position:"relative"}}),L&&M.virtualItems.map((function(e,t){var a=e.index>N.length-1,o=N[e.index];return r.a.createElement("div",{key:e.index,style:{position:"absolute",top:0,left:0,width:"100%",height:"".concat(e.size,"px"),transform:"translateY(".concat(e.start,"px)")}},r.a.createElement("div",u()({key:o?o.name:"loading row"},Y({item:o,index:e.index}),{style:{backgroundColor:K===e.index?"#bde4ff":""}}),a?f?"Loading more...":"Nothing more to load":r.a.createElement(A,u()({isSelected:!!j.find((function(e){return e.tag===o.id})),key:e.index,user:n},o))))})))),r.a.createElement("a",{style:{display:L?"block":"none"},className:"list-group-item",href:a},r.a.createElement("i",{className:"fa fa-pencil",style:{marginRight:"1em"}}),"Edit Tags")))},F=n(132),L=n(123),z=n(124),U=n.n(z),V=n(62),R=function(e){var t=e.state,n=e.name,o=e.id,i=D(),c=i.modifyTags,l=(i.deleteTags,Object(a.useState)(+t)),s=b()(l,2),u=s[0],d=s[1];return r.a.createElement(V.a,{className:"toggle",value:u,onChange:function(e){d(e),c({published:!!e,name:n,id:o})}})},W=function(e){var t=e.data,n=e.isPageOwner,a=e.userName,o=D(),i=(o.modifyTags,o.deleteTags),c=r.a.useState(t),l=b()(c,2),s=l[0],u=l[1],d=function(e,t){e.metaKey||e.ctrlKey?window.open("/tags/".concat(a,"/").concat(t,"/")):window.location.href="/tags/".concat(a,"/").concat(t,"/")};return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table settings-table tablesorter-bootstrap"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Views"),n&&r.a.createElement("th",null,"Public"),n&&r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,s.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{style:{cursor:"pointer"},onClick:function(t){return d(t,e.name)}},r.a.createElement("span",{className:"tag"},e.name)),r.a.createElement("td",{style:{cursor:"pointer"},onClick:function(t){return d(t,e.name)}},Object(F.a)(Object(L.a)(e.date_created||""),"MMM d, yyyy")),r.a.createElement("td",{style:{cursor:"pointer"},onClick:function(t){return d(t,e.name)}},e.view_count),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,r.a.createElement(R,{id:e.id,name:e.name,state:e.published})),r.a.createElement("td",null,r.a.createElement(U.a,{id:"dlt_".concat(e.id),onClick:function(n){return function(e,n){if(window.confirm("Are you sure you want to delete this item?")){i(n);var a=t.findIndex((function(e){return e.id===n}));t.splice(a,1),u(t)}}(0,Number("".concat(e.id)))},className:"fa fa-trash btn-sm inline delete-tag"}," Delete"))))})))))},K=function(e){var t=e.userId,n=e.userName,a=e.isPageOwner,o=r.a.useState(1),i=b()(o,2),c=i[0],l=i[1],s=r.a.useCallback(function(){var e=k()(w.a.mark((function e(n){var a,r=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,B("/api/rest/v3/tags/?user=".concat(t,"&page=").concat(a,"&page_size=10&order_by=name"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),u=Object(x.d)(["tags",c],s),d=u.isLoading,m=u.isError,p=u.error,g=(u.resolvedData,u.latestData),f=u.isFetching;return null==g?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,a?r.a.createElement("h1",null,"Your Tags"):r.a.createElement("h1",null,"Tags for: ",n),d?r.a.createElement("div",null,"Loading..."):m?r.a.createElement("div",null,"Error: ",p.message," "):r.a.createElement(W,{data:g.results,isPageOwner:a,userName:n}),1===c&&g&&!g.next?null:r.a.createElement("div",{className:"well v-offset-above-3 hidden-print"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-2 col-sm-3"},c>1?r.a.createElement("div",{className:"text-left"},r.a.createElement("a",{onClick:function(){return l((function(e){return Math.max(e-1,0)}))},className:"btn btn-default",rel:"prev"},r.a.createElement("i",{className:"fa fa-caret-left no-underline"})," ",r.a.createElement("span",{className:"hidden-xs hidden-sm"},"Previous"),r.a.createElement("span",{className:"hidden-xs hidden-md hidden-lg"},"Prev."))):null),r.a.createElement("div",{className:"col-xs-8 col-sm-6"},r.a.createElement("div",{className:"text-center large"},r.a.createElement("span",{className:"hidden-xs"},f?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fa fa-spinner fa-pulse gray"})," Loading..."):"Page "+c))),r.a.createElement("div",{className:"col-xs-2 col-sm-3"},g&&g.next?r.a.createElement("div",{className:"text-right"},r.a.createElement("a",{onClick:function(){return l((function(e){return g&&g.next?e+1:e}))},rel:"next",className:"btn btn-default"},r.a.createElement("span",{className:"hidden-xs"},"Next")," ",r.a.createElement("i",{className:"fa fa-caret-right no-underline"}))):null))),f?r.a.createElement("span",null," Fetching..."):null," ")},Y=n(85),J=n(20),Q=n(211),q=n(213),H=n(212),Z=n(60),$=n(214),G=n(215),X=n(59),ee=n(55),te=n.n(ee),ne=n(86),ae={insert:"head",singleton:!1},re=(te()(ne.a,ae),ne.a.locals,n(126)),oe=n.n(re),ie=(n(187),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("h1",{className:"clearfix"},r.a.createElement("span",{className:"tag"},e.name)))),r.a.createElement("p",null,"Created by",r.a.createElement("a",{className:"alt tag-back",href:"/tags/".concat(e.user,"/")}," ",e.user)," on",r.a.createElement("span",{className:"alt"}," ",e.dateCreatedDate)," with ",e.viewCount))}),ce=function(e){var t=D(),n=t.modifyTags,o=t.deleteTags,i=Object(a.useState)("True"==e.published),c=b()(i,2),l=c[0],s=c[1];return r.a.createElement("div",null,r.a.createElement("div",{id:"tag-settings-parent",className:"float-right v-offset-above-1"},r.a.createElement(Q.a,null,r.a.createElement(q.a,{pullRight:!0,className:"fa fa-gear gray",bsSize:"large",noCaret:!0,title:"",id:"tag-settings"},r.a.createElement("li",{role:"presentation",value:+l,onClick:function(t){return a=l,r="".concat(e.name),o=Number("".concat(e.id)),n({published:!a,name:r,id:o}),void s(!a);var a,r,o},className:""},r.a.createElement("a",{role:"menuitem",href:"#"},r.a.createElement(V.a,{value:+l})," Is Publicly Available")),r.a.createElement(H.a,{divider:!0}),r.a.createElement(H.a,{checked:!0,onClick:function(t){return function(e){if(window.confirm("Are you sure you want to delete this item?")){o(e);var t=window.location.href.slice(0,-1);window.location.href=t.substr(0,t.lastIndexOf("/")+1)}}(Number("".concat(e.id)))},eventKey:"4"},r.a.createElement("i",{className:"fa fa-trash gray"})," Delete")))))},le=function(e){var t=D(),n=t.modifyTags,o=(t.deleteTags,Object(a.useState)(e.description)),i=b()(o,2),c=i[0],l=i[1],s=Object(a.useState)("write"),d=b()(s,2),m=d[0],p=d[1],g=Object(a.useState)(!0),f=b()(g,2),h=f[0],v=f[1];if("False"==e.pageOwner)return""==c?r.a.createElement("div",null,r.a.createElement(ie,e)):r.a.createElement("div",null,r.a.createElement(ie,e),r.a.createElement("div",{id:"markdown_viewer",className:"col-12 view-only"},r.a.createElement(Y.a,{markdown:c||"",flavor:"github",options:{tables:!0,emoji:!0,simpleLineBreaks:!0}})));var A=new J.Converter({tables:!0,emoji:!0,simpleLineBreaks:!0});return r.a.createElement("div",null,r.a.createElement(ce,e),r.a.createElement(ie,e),r.a.createElement(Z.a,{id:"tab-tabs",defaultActiveKey:"first"},r.a.createElement($.a,{id:"controlled-tab-example",activeKey:m,onSelect:function(t){if(t!==m&&"write"==t){var a={description:c,name:e.name,id:e.id};n(a).then((function(e){v(!0)}))}p(t)}},r.a.createElement(G.a,{eventKey:"write",title:"Notes"},r.a.createElement("div",{id:"markdown_viewer",className:"col-12"},r.a.createElement(Y.a,{markdown:c||"",flavor:"github",options:{tables:!0,emoji:!0,simpleLineBreaks:!0}}))),r.a.createElement(G.a,{eventKey:"preview",title:"Edit"},r.a.createElement(oe.a,{value:c,onChange:function(e){var t=u()({},e);l(t.text),v(!1)},style:{height:"500px"},plugins:["header","font-bold","font-italic","font-underline","font-strikethrough","list-unordered","list-ordered","block-quote","block-wrap","block-code-block","block-code-inline","mode-toggle","logger","table","link","auto-resize","tab-insert"],renderHTML:function(e){return A.makeHtml(e)}}),r.a.createElement("span",{id:"save_span",style:{float:"right"}},r.a.createElement(X.a,{disabled:h,id:"save_button",onClick:function(){var t={description:c,name:e.name,id:e.id};n(t).then((function(e){v(!0)}))},className:"whitesmoke"},r.a.createElement("i",{className:"fa fa-save"})," Save"))))))},se=function(){var e=document.getElementById("react-root"),t=JSON.parse(JSON.stringify(e.dataset));return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/docket"},r.a.createElement(M,t)),r.a.createElement(l.a,{exact:!0,path:"/tags/:userName/"},r.a.createElement(K,{userId:t.requestedUserId,userName:t.requestedUser,isPageOwner:t.isPageOwner})),r.a.createElement(l.a,{path:"/tags/:userName/:id"},r.a.createElement(le,t))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("react-root"))},86:function(e,t,n){"use strict";var a=n(56),r=n.n(a),o=n(57),i=n.n(o)()(r.a);i.push([e.i,"\n.editor-toolbar {\n  border-top: none;\n  border-top-left-radius: 1px;\n  border-top-right-radius: 1px;\n  border-left: 1px solid lightgray;\n  border-right: 1px solid lightgray;\n}\n\n#markdown_viewer {\n  border: 1px solid;\n  border-color: lightgrey;\n  padding: 10px;\n  min-height: 100px;\n  border-top: none;\n}\n\n#react-root[data-page-owner='False'] > div > div#markdown_viewer {\n  border-top: 1px solid lightgrey;\n\n}\n\n/*Update the tables inside markdown viewer to look better*/\n#markdown_viewer table, #markdown_viewer thead, #markdown_viewer tbody, #markdown_viewer tr, #markdown_viewer td, #markdown_viewer th {\n  border: 1px solid;\n  padding:5px;\n}\n\n/*Provide consitent spacing on markdown viewing*/\n.view-only {\n  margin-top: 50px;\n  border: none;\n}\n\n/*Add consistent spacing for tabs*/\n#tab-tabs {\n    margin-top: 40px;\n}\n\n/*Make save button on markdown page more subtle*/\n#save_button {\n  margin-top: 2px;\n  border-radius: 2px;\n}\n\n/*Remove blue borders around tabs*/\nli:focus {\n  outline: 0;\n}\n\na:focus {\n  outline: 0;\n}\n\n/*Align content in tag tables and dropdown better*/\ntd  {\n  vertical-align: middle;\n}\n\n.delete-tag {\n  font-size: 10px;\n  line-height: 1.0;\n}\n\nlabel.toggle input span {\n  border-radius: 2px;\n}\n\nlabel.toggle {\n  vertical-align: text-top;\n  height: 16px;\n  width: 28px;\n}\n\nspan.tag {\n  white-space: nowrap;\n}\n\n.tag-back {\n  color: #009;\n}\n\n#tag-settings {\n  z-index: 1;\n}\n","",{version:3,sources:["webpack://./assets/react/tag-page.css"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,2BAA2B;EAC3B,4BAA4B;EAC5B,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;;AAEjC;;AAEA,0DAA0D;AAC1D;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA,gDAAgD;AAChD;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA,kCAAkC;AAClC;IACI,gBAAgB;AACpB;;AAEA,gDAAgD;AAChD;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA,kCAAkC;AAClC;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA,kDAAkD;AAClD;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ",sourcesContent:["\n.editor-toolbar {\n  border-top: none;\n  border-top-left-radius: 1px;\n  border-top-right-radius: 1px;\n  border-left: 1px solid lightgray;\n  border-right: 1px solid lightgray;\n}\n\n#markdown_viewer {\n  border: 1px solid;\n  border-color: lightgrey;\n  padding: 10px;\n  min-height: 100px;\n  border-top: none;\n}\n\n#react-root[data-page-owner='False'] > div > div#markdown_viewer {\n  border-top: 1px solid lightgrey;\n\n}\n\n/*Update the tables inside markdown viewer to look better*/\n#markdown_viewer table, #markdown_viewer thead, #markdown_viewer tbody, #markdown_viewer tr, #markdown_viewer td, #markdown_viewer th {\n  border: 1px solid;\n  padding:5px;\n}\n\n/*Provide consitent spacing on markdown viewing*/\n.view-only {\n  margin-top: 50px;\n  border: none;\n}\n\n/*Add consistent spacing for tabs*/\n#tab-tabs {\n    margin-top: 40px;\n}\n\n/*Make save button on markdown page more subtle*/\n#save_button {\n  margin-top: 2px;\n  border-radius: 2px;\n}\n\n/*Remove blue borders around tabs*/\nli:focus {\n  outline: 0;\n}\n\na:focus {\n  outline: 0;\n}\n\n/*Align content in tag tables and dropdown better*/\ntd  {\n  vertical-align: middle;\n}\n\n.delete-tag {\n  font-size: 10px;\n  line-height: 1.0;\n}\n\nlabel.toggle input span {\n  border-radius: 2px;\n}\n\nlabel.toggle {\n  vertical-align: text-top;\n  height: 16px;\n  width: 28px;\n}\n\nspan.tag {\n  white-space: nowrap;\n}\n\n.tag-back {\n  color: #009;\n}\n\n#tag-settings {\n  z-index: 1;\n}\n"],sourceRoot:""}]),t.a=i}});
//# sourceMappingURL=main.js.map