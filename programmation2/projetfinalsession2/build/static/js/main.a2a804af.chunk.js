(this.webpackJsonpprojetfinalsession2=this.webpackJsonpprojetfinalsession2||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/photo2.7334b52f.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/photo3.0c031717.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/photo4.b8e8e757.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/photo5.85a30440.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/photo6.25d5cd8e.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/photo7.b84cdbc3.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/photo1.b9c31d9d.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/logo.8572544f.jpg"},61:function(e,t,a){e.exports=a(77)},66:function(e,t,a){},67:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),i=(a(66),a(67),a(80)),c=a(81),s=a(52),u=a(82),m=a(16),d=a(2),p=a(44),f=a.n(p),h=a(45),E=a.n(h),b=a(46),v=a.n(b),g=a(47),y=a.n(g),x=a(48),j=a.n(x),w=a(49),L=a.n(w),k=a(51),O=a.n(k);function I(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){m.a.from(e,1,{opacity:"0",y:70,ease:d.b.easeIn}),m.a.from(t,1,{opacity:"0",delay:.2,y:70,ease:d.b.easeIn}),m.a.from(a,1,{opacity:"0",delay:.4,y:70,ease:d.b.easeIn})})),r.a.createElement(i.a,{fluid:!0},r.a.createElement(c.a,{className:"p-3",id:"imageIndex"},r.a.createElement(s.a,{xs:"12",md:"6",lg:"4",ref:function(t){e=t}},r.a.createElement(c.a,null,r.a.createElement(u.a,{src:O.a,alt:"essaie",fluid:!0})),r.a.createElement(c.a,null,r.a.createElement(u.a,{src:f.a,fluid:!0}))),r.a.createElement(s.a,{xs:"12",md:"6",lg:"4",ref:function(e){t=e}},r.a.createElement(c.a,null,r.a.createElement("h1",{className:"text-center accentColorText"},"Bienvenue Sur CodeDIY, la place ou trouver et partager les meilleurs Librairies Javascript")),r.a.createElement(c.a,null,r.a.createElement(u.a,{src:j.a,fluid:!0})),r.a.createElement(c.a,null,r.a.createElement(u.a,{src:v.a,fluid:!0}))),r.a.createElement(s.a,{xs:"12",md:"6",lg:"4",ref:function(e){a=e}},r.a.createElement(c.a,null,r.a.createElement(u.a,{src:L.a,fluid:!0})),r.a.createElement(c.a,null,r.a.createElement(u.a,{src:y.a,fluid:!0})),r.a.createElement(c.a,null,r.a.createElement(u.a,{src:E.a,fluid:!0})))))}var N=a(86),B=a(87),C=a(13),M=a(53),A=a.n(M);function S(){return r.a.createElement("h1",null,"BYE LA")}var R=a(12),T=a.n(R),F=a(19),D=a(30),P=a(31),U=a(32),W=a(35),q=a(33),J=a(85),G="https://crudcrud.com/api/d8c6c508daf344e899530822a24aa839/lib/",V=a(23),z=function(e){Object(W.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).state={},n.handleAdd=n.handleAdd.bind(Object(U.a)(n)),n.titre=null,n.titreFromTop=null,n.form=null,n.formFromBot=null,n}return Object(P.a)(a,[{key:"AjouterLibrairies",value:function(){var e=Object(F.a)(T.a.mark((function e(t,a,n,r){var l,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(G,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:t,logo:a,description:n,lien:r})});case 3:if(!(l=e.sent).ok){e.next=11;break}return e.next=7,l.json();case 7:return o=e.sent,this.props.history.push("/"),V.b.success("Ajout de la librairie "+t,{position:"top-left"}),e.abrupt("return",o);case 11:throw new Error("Request failed!");case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"handleAdd",value:function(e){e.preventDefault();var t=document.getElementById("nomLibrairies").value,a=document.getElementById("logoLibrairies").value,n=document.getElementById("descriptionLibrairies").value,r=document.getElementById("lienLibrairies").value;this.AjouterLibrairies(t,a,n,r)}},{key:"handlePhoto",value:function(e){var t=document.getElementById("logoLibrairies").value;this.setState({photo:t})}},{key:"handleNom",value:function(e){var t=document.getElementById("nomLibrairies").value;this.setState({nom:t})}},{key:"handleDescription",value:function(e){var t=document.getElementById("descriptionLibrairies").value;this.setState({description:t})}},{key:"handleLien",value:function(e){var t=document.getElementById("lienLibrairies").value;this.setState({lien:t})}},{key:"componentDidMount",value:function(){this.titreFromTop=d.e.from(this.titre,1,{y:-100}),this.formFromBot=d.e.from(this.form,1,{y:100})}},{key:"render",value:function(){var e=this;return r.a.createElement(i.a,null,r.a.createElement("h1",{ref:function(t){return e.titre=t},className:"text-center accentColorText"},"Ajouter une librairies Javascript a la liste ",r.a.createElement("hr",null)),r.a.createElement("div",null,r.a.createElement(c.a,{className:"w-75 mx-auto "},r.a.createElement(s.a,{sm:"2"},r.a.createElement(c.a,null,""!==this.state.photo&&r.a.createElement(u.a,{src:this.state.photo,rounded:!0,width:"175",className:"p-3"})),r.a.createElement(c.a,null,""!==this.state.nom&&r.a.createElement("h3",{className:"p-3"},this.state.nom))),r.a.createElement(s.a,{sm:"4"},""!==this.state.description&&r.a.createElement("p",{className:"p-3"},this.state.description)),r.a.createElement(s.a,{sm:"2",className:"d-flex align-items-end pb-3"},""!==this.state.lien&&r.a.createElement("a",{href:"#"},this.state.lien)))),r.a.createElement(c.a,{className:"p-3"},r.a.createElement(s.a,{sm:{span:4,offset:4}},r.a.createElement(J.a,{ref:function(t){return e.form=t}},r.a.createElement(J.a.Group,{controlId:"logoLibrairies"},r.a.createElement(J.a.Label,null,"Logo"),r.a.createElement(J.a.Control,{type:"text",placeholder:"Url contenant le logo",onBlur:this.handlePhoto.bind(this),required:!0})),r.a.createElement(J.a.Group,{controlId:"nomLibrairies"},r.a.createElement(J.a.Label,null,"Nom de la librairies"),r.a.createElement(J.a.Control,{type:"text",placeholder:"Entrer le nom de la librairie",onBlur:this.handleNom.bind(this),required:!0})),r.a.createElement(J.a.Group,{controlId:"descriptionLibrairies"},r.a.createElement(J.a.Label,null,"Description "),r.a.createElement(J.a.Control,{type:"text",placeholder:"Entrez un resumer des fonctionnalites de la librairies",onBlur:this.handleDescription.bind(this),required:!0})),r.a.createElement(J.a.Group,{controlId:"lienLibrairies"},r.a.createElement(J.a.Label,null,"Lien"),r.a.createElement(J.a.Control,{type:"text",placeholder:"Entrez l'url pour la docummentation",onBlur:this.handleLien.bind(this),required:!0})),r.a.createElement("button",{className:"accentColor",type:"submit",onClick:this.handleAdd},"Ajouter")))))}}]),a}(r.a.Component),Y=(a(75),a(6)),_=a(25),$=a(88),H=function(e){Object(W.a)(a,e);var t=Object(q.a)(a);function a(e){return Object(D.a)(this,a),t.call(this,e)}return Object(P.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{xs:"4"},r.a.createElement($.a,null,r.a.createElement($.a.Body,null,r.a.createElement($.a.Img,{variant:"top",src:this.props.logo,className:"d-block mx-auto",rounded:!0,fluid:!0}),r.a.createElement(C.b,{to:"/AfficherLibrairie/"+this.props.id},this.props.nom)),r.a.createElement($.a.Footer,null,r.a.createElement(C.b,{to:"/ModifierLibrairie/"+this.props.id},r.a.createElement("button",null,"Mettre les infos a jour"))))))}}]),a}(r.a.Component);function K(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],l=t[1];function o(){return(o=Object(F.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(G);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,l(a),console.log(a),t.ok){e.next=11;break}throw Error(t.statusText);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[a.join(",")]),r.a.createElement(i.a,null,r.a.createElement(c.a,null,a.map((function(e,t){return r.a.createElement(H,{nom:e.nom,id:e._id,description:e.description,logo:e.logo,lien:e.lien,key:e._id})}))))}var Q=a(83),X=a(60),Z=a(84);function ee(e){var t=Object(n.useState)(""),a=Object(_.a)(t,2),l=a[0],o=a[1],m=Object(n.useState)({nom:"",logo:"",description:"",lien:""}),d=Object(_.a)(m,2),p=d[0],f=d[1],h=Object(n.useState)(e.location.pathname.substring(19,e.location.pathname.length)),E=Object(_.a)(h,2),b=E[0];E[1];function v(){return(v=Object(F.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(G+b);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,f(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function g(){return(g=Object(F.a)(T.a.mark((function t(a,n,r,l){var o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(G+b,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:a,logo:n,description:r,lien:l})});case 3:if(!(o=t.sent).ok){t.next=7;break}return e.history.push("/listeLibrairies"),t.abrupt("return",o);case 7:throw new Error("Request failed!");case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function y(){return(y=Object(F.a)(T.a.mark((function t(){var a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(G+b,{method:"delete"});case 3:if(!(a=t.sent).ok){t.next=8;break}return e.history.push("/listeLibrairies"),V.b.error("Supression de "+p.nom),t.abrupt("return",a);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return console.log(b),Object(n.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),r.a.createElement(i.a,null,r.a.createElement("h1",null,"Modification de ",p.nom),r.a.createElement(c.a,null,r.a.createElement(s.a,{xs:"6"},r.a.createElement("h3",null,"Image Actuelle",r.a.createElement("br",null)),r.a.createElement(u.a,{src:p.logo,rounded:!0,fluid:!0})),r.a.createElement(s.a,{xs:"6"},r.a.createElement("h3",null,"Nouvelle Image",r.a.createElement("br",null)),""!==p.logo&&r.a.createElement(u.a,{src:l,rounded:!0,fluid:!0}))),r.a.createElement(c.a,null,r.a.createElement(s.a,{xs:"8"},r.a.createElement(J.a,null,r.a.createElement(J.a.Row,null,r.a.createElement(s.a,{sm:3,className:"my-1"},r.a.createElement(J.a.Label,{htmlFor:"nomModif",srOnly:!0},"Nom"),r.a.createElement(Q.a,{className:"mb-2"},r.a.createElement(Q.a.Prepend,null,r.a.createElement(Q.a.Text,null,"Nom : ")),r.a.createElement(X.a,{id:"nomModif",placeholder:"Username",defaultValue:p.nom}))),r.a.createElement(s.a,{xs:3,className:"my-1"},r.a.createElement(J.a.Label,{htmlFor:"lienModif",srOnly:!0},"Lien"),r.a.createElement(Q.a,{className:"mb-2"},r.a.createElement(Q.a.Prepend,null,r.a.createElement(Q.a.Text,null,"Lien : ")),r.a.createElement(X.a,{id:"lienModif",placeholder:"lien de la librairie",defaultValue:p.lien})))),r.a.createElement(J.a.Group,{controlId:"descriptionModif"},r.a.createElement(J.a.Label,null,"Description "),r.a.createElement(J.a.Control,{id:"descriptionModif",placeholder:"Description de la librairie",defaultValue:p.description})),r.a.createElement(J.a.Group,{controlId:"logoModif"},r.a.createElement(J.a.Label,null,"URL du logo"),r.a.createElement(J.a.Control,{id:"logoModif",type:"text",placeholder:"Entrer une URL valide",onBlur:function(e){var t=document.getElementById("logoModif").value;o(t)},defaultValue:p.logo}))),r.a.createElement(Z.a,{type:"submit",onClick:function(e){e.preventDefault(),function(e,t,a,n){g.apply(this,arguments)}(document.getElementById("nomModif").value,document.getElementById("logoModif").value,document.getElementById("descriptionModif").value,document.getElementById("lienModif").value)}},"Enregistrer"),r.a.createElement(Z.a,{onClick:function(){return y.apply(this,arguments)}},"Effacer"))))}var te=function(){var e=Object(Y.f)();return console.log(e.pathname),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{fluid:!0},r.a.createElement(V.a,{autoClose:3e3,hideProgressBar:!0}),function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useRef)(null);return Object(n.useEffect)((function(){m.a.from(e,.8,{opacity:"0",x:-50,ease:d.c.easeIn}),m.a.from(t,.8,{opacity:"0",y:100,ease:d.c.easeInOut,delay:.2}),m.a.from(a,.8,{opacity:"1",y:-70,ease:d.c.easeIn,delay:.4})})),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(B.a,{className:"p-0"},r.a.createElement(C.b,{exact:!0,to:"/",className:"logo navbar-brand",ref:function(t){e=t}},r.a.createElement(u.a,{src:A.a,roundedCircle:!0,fluid:!0})),r.a.createElement(C.b,{to:"/listeLibrairies",className:"link1 text-center",ref:function(e){t=e}},"Liste des meilleurs Librairies Javascript"),r.a.createElement(C.b,{to:"/ajouterLibrairies",className:"link2 text-center",ref:function(e){a=e}},"Ajouter une Librairies"))))}(),r.a.createElement(c.a,null,r.a.createElement(s.a,{xs:"12"},r.a.createElement(Y.c,{className:"rowafficher"},r.a.createElement(Y.a,{path:"/",exact:!0,component:I}),r.a.createElement(Y.a,{path:"/2",component:I}),r.a.createElement(Y.a,{path:"/listeLibrairies",component:K}),r.a.createElement(Y.a,{path:"/ajouterLibrairies",component:z}),r.a.createElement(Y.a,{path:"/ModifierLibrairie/:id",component:ee}),r.a.createElement(Y.a,{component:S}))))))},ae=(a(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C.a,null,r.a.createElement(te,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.a2a804af.chunk.js.map