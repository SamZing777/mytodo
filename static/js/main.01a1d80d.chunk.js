(this.webpackJsonpMyToDo=this.webpackJsonpMyToDo||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(20),n(21),n(4)),l=n(5),s=n(6),u=n(7),m=n(14),d=n(2),h=n(11),f=n(12),v=n(13);n(27);var p=function(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"col list mb-1",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.updateItem(n.target.value,t.key)}}),r.a.createElement("span",null," ",r.a.createElement(h.a,{className:"text-danger",icon:f.a,onClick:function(){return e.deleteItem(t.key)}})," ")))}));return r.a.createElement("div",null,r.a.createElement(v.a,{durationn:250,easing:"ease-in-out"},t))},y=(n(28),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.addItem=a.addItem.bind(Object(d.a)(a)),a.deleteItem=a.deleteItem.bind(Object(d.a)(a)),a.updateItem=a.updateItem.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(m.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"updateItem",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"text-center"},r.a.createElement("form",{id:"to-do",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter to do",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(p,{items:this.state.items,deleteItem:this.deleteItem,updateItem:this.updateItem})))))}}]),n}(a.Component)),b=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"text-light text-center"},"My To do"))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col"},r.a.createElement(y,null))))},E=(n(29),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),n}(a.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mytodo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mytodo","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.01a1d80d.chunk.js.map