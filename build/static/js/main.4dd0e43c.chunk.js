(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(142)},105:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(105),a(72),a(46)),i=a(41),s=a(59),u=a(58),m=a(143),d=a(191),p=a(202),h=a(201),E=a(196),f=a(211),v=a(212),g=a(195),b=a(192),w=a(197),y=a(194),k=a(198),C=a(199),x=a(203),j=a(60),O=a(204),S=a(89),P=a.n(S),B=a(200),N=a(85),A=a.n(N),W=a(84),R=a.n(W),I=a(83),L=a.n(I),M=a(86),U=a.n(M),D=a(87),T=a.n(D),H=a(88),J=a.n(H),X=Object(m.a)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},drawer:Object(u.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(u.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(u.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),drawerPaper:{width:240},nested:{paddingLeft:e.spacing(4)},links:{textDecoration:"none",color:"inherit"},active:{backgroundColor:e.palette.action.selected}}});var z=function(e){var t=e.container,a=X(),n=Object(d.a)(),o=r.a.useState(!1),c=Object(s.a)(o,2),i=c[0],u=c[1],m=r.a.useState(!1),S=Object(s.a)(m,2),N=S[0],W=S[1],I=r.a.useState(null),M=Object(s.a)(I,2),D=M[0],H=M[1];function z(){u(!i)}function F(e,t){H(t)}var G=r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(y.a,{button:!0,to:"/",component:l.b,onClick:function(e){return F(0,"/")}},r.a.createElement(g.a,{style:{width:"100%",height:"50px"},image:"https://upload.wikimedia.org/wikipedia/en/3/3f/2011.Cerner.logo.png",title:"logo"}))),r.a.createElement(E.a,null),r.a.createElement(b.a,{component:"nav",subheader:r.a.createElement(w.a,{component:"div"},"Public API"),className:a.root},r.a.createElement(y.a,{button:!0,component:l.b,to:"/country",selected:"/country"===D||"/country"===window.location.pathname,onClick:function(e){return F(0,"/country")}},r.a.createElement(k.a,null,r.a.createElement(L.a,null)),r.a.createElement(C.a,{primary:"Country"})),r.a.createElement(y.a,{button:!0,component:l.b,to:"/marvel",selected:"/marvel"===D||"/marvel"===window.location.pathname,onClick:function(e){return F(0,"/marvel")}},r.a.createElement(k.a,null,r.a.createElement(R.a,null)),r.a.createElement(C.a,{primary:"Marvel"})),r.a.createElement(y.a,{button:!0,onClick:function(){W(!N)}},r.a.createElement(k.a,null,r.a.createElement(A.a,null)),r.a.createElement(C.a,{primary:"Inbox"}),N?r.a.createElement(U.a,null):r.a.createElement(T.a,null)),r.a.createElement(B.a,{in:N,timeout:"auto",unmountOnExit:!0},r.a.createElement(b.a,{component:"div",disablePadding:!0},r.a.createElement(y.a,{button:!0,className:a.nested},r.a.createElement(k.a,null,r.a.createElement(J.a,null)),r.a.createElement(C.a,{primary:"Starred"}))))));return r.a.createElement("div",null,r.a.createElement(h.a,null),r.a.createElement(p.a,{position:"fixed",className:a.appBar},r.a.createElement(x.a,null,r.a.createElement(O.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:z,className:a.menuButton},r.a.createElement(P.a,null)),r.a.createElement(j.a,{variant:"h6",noWrap:!0},"MyApp"))),r.a.createElement("nav",{className:a.drawer},r.a.createElement(v.a,{smUp:!0,implementation:"css"},r.a.createElement(f.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:i,onClose:z,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},G)),r.a.createElement(v.a,{xsDown:!0,implementation:"css"},r.a.createElement(f.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},G))))},F=a(90),G=a(45),K=a(94),V=a(91),$=a(25),q=a(95),Q=a(92),Y=a.n(Q),Z=a(205),_=a(209),ee=a(206),te=a(207),ae=a(208),ne=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(K.a)(this,Object(V.a)(t).call(this,e))).state={name:"",countries:[]},a.handleChange=a.handleChange.bind(Object($.a)(a)),a.searchCountry=a.searchCountry.bind(Object($.a)(a)),a}return Object(q.a)(t,e),Object(G.a)(t,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"searchCountry",value:function(e){var t=this;e.preventDefault(),""!==this.state.name&&Y.a.get("https://restcountries-v1.p.rapidapi.com/name/"+this.state.name,{headers:{"X-RapidAPI-Host":"restcountries-v1.p.rapidapi.com","X-RapidAPI-Key":"b247b756e2mshd1f681d7c4d09d9p11f61ejsnc4a1fde3adf7"}}).then(function(e){t.setState({countries:e.data})}).catch(function(){t.setState({countries:[]})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{variant:"h6",gutterBottom:!0},"Find Country Information"),r.a.createElement(j.a,{variant:"body1",gutterBottom:!0},"Enter keyword to get country detail information"),r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.searchCountry},r.a.createElement(Z.a,{container:!0,spacing:2},r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(_.a,{id:"standard-name",label:"Country Name",value:this.state.name,margin:"normal",variant:"outlined",onChange:this.handleChange,fullWidth:!0})),r.a.createElement(Z.a,{item:!0,xs:12},r.a.createElement(ee.a,{type:"submit",variant:"contained",color:"secondary",size:"large",onClick:this.searchCountry},"Search")))),this.state.countries.length?r.a.createElement(j.a,{variant:"h6",gutterBottom:!0,style:{marginTop:"20px"}},"Search Result"):null,r.a.createElement(Z.a,{container:!0,spacing:2},this.state.countries.map(function(e,t){return r.a.createElement(Z.a,{item:!0,xs:12,md:6,lg:4,key:t},r.a.createElement(te.a,null,r.a.createElement(ae.a,null,r.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary",component:"p",m:0},"Population: ",e.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary",component:"p",m:0},"Capital: ",e.capital),r.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary",component:"p",m:0},"Currency: ",r.a.createElement("span",null," "),e.currencies.map(function(e,t){return r.a.createElement(j.a,{variant:"subtitle2",color:"textSecondary",component:"span",key:t},e)})))))})))}}]),t}(r.a.Component),re=Object(m.a)(function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3)},toolbar:e.mixins.toolbar}});var oe=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Home Page"))},ce=function(){var e=re();return r.a.createElement(l.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(z,null),r.a.createElement("div",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:oe}),r.a.createElement(i.a,{path:"/country",component:ne})))))},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var se=a(93),ue=a(213),me=Object(se.a)({palette:{primary:{main:"#0277bd"}}});c.a.render(r.a.createElement(function(){return r.a.createElement(ue.a,{theme:me},r.a.createElement(ce,null))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");le?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ie(t,e)})}}()},72:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.4dd0e43c.chunk.js.map