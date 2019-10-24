(this["webpackJsonpsbc-rating-combinations"]=this["webpackJsonpsbc-rating-combinations"]||[]).push([[0],{46:function(e,t,a){e.exports=a(82)},51:function(e,t,a){},70:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(51),a(45)),u=a(22),i=a(23),m=a.n(i),s=a(39),f=a(10),E=a(40),g=a.n(E),b=(a(70),a(44)),p=a(5),d=a(9),h=a(26),v=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return Number(e)+a}))},y=a(24),O=function(e,t,a,n){for(var r=Object(y.a)(e).slice(0),l=Object(y.a)(a).slice(0),c="https://ancient-journey-38675.herokuapp.com/combinacoes3?",o=0;o<r.length;o++)c=c+"lista="+r[o]+"&";c=c+"tamanho="+t+"&";for(var u=0;u<l.length;u++)c=c+"fixo="+l[u]+"&";return c=c+"ovr="+n},j=a(6),x={marginBottom:"10px"};function w(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Header,null,"STEP 1 (required)"),r.a.createElement(j.a.Body,null,r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Label,null,"Enter the target squad rating"),r.a.createElement(p.a.Control,{type:"text",pattern:"[0-9]*",value:e.value,style:x,min:"60",max:"99",onChange:e.onchange,required:!0})))))}var k={marginBottom:"10px"};function S(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Header,null,"STEP 3 (optional)"),r.a.createElement(j.a.Body,null,r.a.createElement(p.a.Label,null,"Enter the ratings of the cards which you want to use for this sbc (maximum 10)"),r.a.createElement(p.a.Row,null,e.fixed.map((function(t,a){return r.a.createElement("div",{key:a,className:0===a||5===a?"col-2 offset-1":"col-2"},r.a.createElement(p.a.Control,{type:"text",pattern:"[0-9]*","data-index":a,value:t,style:k,min:"60",max:"99",onChange:e.onchange}))}))))))}var C={marginBottom:"10px"};function P(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Header,null,"STEP 2 (required)"),r.a.createElement(j.a.Body,null,r.a.createElement(p.a.Label,null,"Player ratings to try (Min/Max)"),r.a.createElement(p.a.Row,null,r.a.createElement(d.a,null,r.a.createElement(p.a.Control,{type:"text",pattern:"[0-9]*",value:e.interval.min,style:C,min:"60",max:"99",step:"1",name:"min",onChange:e.onchange,required:!0})),r.a.createElement(d.a,null,r.a.createElement(p.a.Control,{type:"text",pattern:"[0-9]*",value:e.interval.max,style:C,min:e.interval.min,max:"99",name:"max",step:"1",onChange:e.onchange,required:!0}))))))}var B=a(42);function R(e){return r.a.createElement(j.a,null,r.a.createElement(j.a.Header,null,"RESULT - ",e.table.length," combinations for remaining ",11-e.fixed.length," cards"),r.a.createElement(j.a.Body,{style:{maxWidth:"full",maxHeight:"900px",overflowY:"auto",overflowX:"auto",fontSize:"14px",textAlign:"center"}},r.a.createElement(B.a,{bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,e.header.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement("tbody",null,e.table.map((function(e,t){return r.a.createElement("tr",{key:t},Object.keys(e).map((function(t,a){return r.a.createElement("td",{key:a},e[t])})))}))))))}var N=a(25);function q(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{bg:"dark",variant:"dark"},r.a.createElement(N.a.Brand,null,r.a.createElement("img",{alt:"",src:"images/logo192.png",width:"30",height:"30",className:"d-inline-block align-top"})," SBC Rating Combinations Calculator")))}function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D={marginTop:"10px",marginBottom:"10px"};var F=function(){var e=Object(n.useState)(83),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),i=Object(f.a)(c,2),E=i[0],y=i[1],j=Object(n.useState)([]),x=Object(f.a)(j,2),k=x[0],C=x[1],B=Object(n.useState)([]),N=Object(f.a)(B,2),F=N[0],H=N[1],L=Object(n.useState)(["","","","","","","","","",""]),W=Object(f.a)(L,2),A=W[0],J=W[1],M=Object(n.useState)({min:78,max:86}),z=Object(f.a)(M,2),I=z[0],U=z[1],V=Object(n.useState)(!1),X=Object(f.a)(V,2),Y=X[0],$=X[1],G=Object(n.useState)(!1),K=Object(f.a)(G,2),Q=K[0],Z=K[1];return Object(n.useEffect)((function(){if(Y&&Q){var e=A.filter((function(e){return""!==e})),t=11-e.length;(function(){var n=Object(s.a)(m.a.mark((function n(){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g()(O(F,t,e,a));case 2:r=n.sent,y(r.data),$(!Y);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}}),[Y,Q]),Object(n.useEffect)((function(){var e=E.map((function(e){return e.reduce((function(e,t){var a=String(t);return e[a]=(e[a]||0)+1,e}),{})})).map((function(e){return F.reduce((function(t,a){var n=String(a);return t[n]=e[n]||0,t}),{})}));C(e)}),[E]),r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(b.a,null,r.a.createElement(p.a,{validated:Q,onSubmit:function(e){!1===e.currentTarget.checkValidity()?(Z(!1),$(!1)):(Z(!0),$(!0),H(v(I.min,I.max))),e.stopPropagation(),e.preventDefault()}},r.a.createElement(p.a.Row,{style:D},r.a.createElement(d.a,null,r.a.createElement(w,{value:a,onchange:function(e){return l(Number(e.target.value))}})),r.a.createElement(d.a,null,r.a.createElement(P,{interval:I,onchange:function(e){return U(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},I,Object(u.a)({},e.target.name,Number(e.target.value))))}}))),r.a.createElement(S,{fixed:A,onchange:function(e){var t=Object(o.a)(A);t.splice(e.target.dataset.index,1,""===e.target.value?"":Number(e.target.value)),J(t)}}),r.a.createElement(p.a.Row,{style:D},r.a.createElement("div",{className:"col-3"},r.a.createElement(h.a,{block:!0,variant:"secondary",onClick:function(){l(83),y([]),C([]),H([]),J(["","","","","","","","","",""]),U({min:78,max:86}),Z(!1),$(!1)}},"Reset")),r.a.createElement(d.a,null,r.a.createElement(h.a,{type:"submit",block:!0,variant:Y?"primary":"success"},Y?"Loading...":"Calculate"))),r.a.createElement(R,{header:F,table:k,fixed:A.filter((function(e){return""!==e}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(81);c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.886c3f01.chunk.js.map