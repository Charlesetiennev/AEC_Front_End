(this.webpackJsonpapipost=this.webpackJsonpapipost||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},25:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=(n(25),n(26),n(11)),l=n.n(o),s=n(17),u=n(6),p=n(7),h=n(5),d=n(9),f=n(8),v=n(34),m=n(32),b=n(18),g=n(33),L=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a.grandURL=a.grandURL.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"grandURL",value:function(){var e=document.getElementById("inputURL").value;this.props.onChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{lg:"6"},r.a.createElement(g.a,{onChange:function(){return e.grandURL()}},r.a.createElement(g.a.Group,{controlId:"inputURL"},r.a.createElement(g.a.Label,null,"Entrez l'URL"),r.a.createElement(g.a.Control,{type:"text"}))))}}]),n}(r.a.Component),U=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,{lg:"6"},"Votre Lien : ",this.props.grandURL,r.a.createElement("br",null),"Votre nouveau lien plus court : ",r.a.createElement("a",{href:"{this.props.petitURL}"},this.props.petitURL))}}]),n}(r.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={click:!1,grandURL:"",petitURL:""},a.click=a.click.bind(Object(h.a)(a)),a.envoieURL=a.envoieURL.bind(Object(h.a)(a)),a.getData=a.getData.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"getData",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"cef2bd7af23c4c5e998e32fd313b6ca6",e.prev=1,e.next=4,fetch("https://api.rebrandly.com/v1/links",{method:"POST",headers:{"Content-Type":"application/json",apikey:"cef2bd7af23c4c5e998e32fd313b6ca6"},body:JSON.stringify({destination:this.state.grandURL})});case 4:if(!(t=e.sent).ok){e.next=13;break}return e.next=8,t.json();case 8:return n=e.sent,console.log(n),this.setState({petitURL:n.shortUrl,click:!0}),console.log(n.shortUrl),e.abrupt("return",n);case 13:throw new Error("Request failed!");case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[1,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"envoieURL",value:function(e,t){this.setState({grandURL:e,petitURL:t})}},{key:"click",value:function(){var e=this;return!1===this.state.click?r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{onChange:this.envoieURL}),r.a.createElement(v.a,{variant:"primary",onClick:function(){return e.getData()}},"Generer")):!0===this.state.click?r.a.createElement(U,{grandURL:this.state.grandURL,petitURL:this.state.petitURL}):void 0}},{key:"render",value:function(){return r.a.createElement(m.a,null,this.click())}}]),n}(r.a.Component);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.03055e3d.chunk.js.map