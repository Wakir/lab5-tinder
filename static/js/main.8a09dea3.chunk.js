(this["webpackJsonplab5-tinder"]=this["webpackJsonplab5-tinder"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),c=a(25),r=a.n(c),s=(a(35),a(36),a(10)),o=a(7),l=a(15);a(37),a(39);l.a.app.lenght?l.a.app():l.a.initializeApp({apiKey:"AIzaSyBW2YM-HQiOGt1j9jibRYMNPY95naS7hzE",authDomain:"lab7-tinder.firebaseapp.com",databaseURL:"https://lab7-tinder-default-rtdb.europe-west1.firebasedatabase.app",projectId:"lab7-tinder",storageBucket:"lab7-tinder.appspot.com",messagingSenderId:"483700471976",appId:"1:483700471976:web:51f99793e1783fceaeaa9d",measurementId:"G-WGBB5J6SPJ"});var j=l.a.auth(),b=l.a.database(),u=a(1),d=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)((function(){var e=j.onAuthStateChanged((function(e){e?i(e):console.log("U\u017cytkownik nie znaleziony")}));return function(){return e()}}));return a?Object(u.jsxs)("nav",{children:[Object(u.jsx)(s.b,{to:"/",children:"Start"}),Object(u.jsx)(s.b,{to:"/oferty",exact:!0,children:"Lista ofert"}),Object(u.jsx)(s.b,{to:"/new",children:"Dodaj nowy"}),Object(u.jsx)("a",{href:"/",className:"nav-button",onClick:function(){j.signOut()},children:"Wyloguj"})]}):Object(u.jsxs)("nav",{children:[Object(u.jsx)(s.b,{to:"/",children:"Start"}),Object(u.jsx)(s.b,{to:"/login",children:"Zaloguj"}),Object(u.jsx)(s.b,{to:"/register",children:"Zarejestruj"})]})},m=a(27),h=a(28),O=a(30),p=a(29),f=a(5),x=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],l=r[1],b=Object(n.useState)(!1),d=Object(o.a)(b,2),m=d[0],h=d[1];return m?Object(u.jsx)(f.a,{to:"/"}):Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("input",{className:"form-input",placeholder:"Email",value:a,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("input",{className:"form-input",placeholder:"Has\u0142o",type:"password",value:s,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("button",{onClick:function(){j.signInWithEmailAndPassword(a,s).then((function(){console.log("Zalogowano"),h(!0)})).catch((function(e){console.log(e)}))},children:"Zaloguj"})]})},g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],l=r[1],j=Object(n.useState)(""),d=Object(o.a)(j,2),m=d[0],h=d[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container-sm",children:[Object(u.jsxs)("div",{className:"form-row",children:[Object(u.jsxs)("div",{className:"form-group col-md-6",children:[Object(u.jsx)("label",{htmlFor:"newWorkerName",children:"Imie i nazwisko studenta:"}),Object(u.jsx)("input",{type:"text",className:"form-control",name:"name",id:"newWorkerName",placeholder:"Imie i Nazwisko",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group col-md-6",children:[Object(u.jsx)("label",{htmlFor:"newWorkerMail",children:"Mail studenta:"}),Object(u.jsx)("input",{type:"mail",className:"form-control",name:"mail",id:"newWorkerMail",placeholder:"Mail",value:s,onChange:function(e){return l(e.target.value)}})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"newWorkerDescription",children:"Opis studenta:"}),Object(u.jsx)("input",{className:"form-control",name:"description",id:"newWorkerDescription",row:"3",value:m,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=b.ref("WorkerBase"),t={name:a,email:s,description:m};e.push(t),i(""),l(""),h("")},children:"Utw\xf3rz nowego studenta"})]})})};var w=function(e){return Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[e.text.name," (",e.text.email,")"]})}),Object(u.jsx)("div",{children:e.text.description}),Object(u.jsx)("div",{children:"Tagi: Python"})]})},v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){b.ref("WorkerBase").on("value",(function(e){var t=e.val(),a=[];for(var n in t)a.push(t[n]);console.log(a),i(a)}))}),[]),Object(u.jsx)("div",{class:"container-sm",children:a?a.map((function(e){return Object(u.jsx)(w,{text:e},e.index)})):""})},k=a(17),y=function(){var e,t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),l=s[0],b=s[1],d=Object(n.useState)(""),m=Object(o.a)(d,2),h=m[0],O=m[1],p=Object(n.useState)(!1),x=Object(o.a)(p,2),g=x[0],w=x[1];return g?Object(u.jsx)(f.a,{to:"/"}):Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("label",{htmlFor:"dispayName",children:"Nazwa u\u017cytkownika:"}),Object(u.jsx)("input",{id:"dispayName",type:"username",className:"form-input",placeholder:"Nazwa u\u017cytkownika",value:h,onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(u.jsx)("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"Email",value:i,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"email",children:"Haslo:"}),Object(u.jsx)("input",(e={id:"password",type:"password",name:"password",className:"form-input",placeholder:"Has\u0142o"},Object(k.a)(e,"type","password"),Object(k.a)(e,"value",l),Object(k.a)(e,"onChange",(function(e){return b(e.target.value)})),e)),Object(u.jsx)("button",{onClick:function(){j.createUserWithEmailAndPassword(i,l).then((function(e){e.user.updateProfile({displayName:h}),w(!0)})).catch((function(e){console.log(e)}))},children:"Utw\xf3rz u\u017cytkownika"})]})},z=function(e){Object(O.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={workerList:[{name:"Maciej B\u0142o\u0144ski",mail:"maciej.blonski@cosiek.pl",description:"Programista z 5 letnim do\u015bwiadczeniem",tagi:["Pyhton"],visible:!0},{name:"Kamil Szewczyk",mail:"kamil.szewczyk@cosiek.pl",description:"Programista z 10 letnim do\u015bwiadczeniem",tagi:["Java","HTML"],visible:!0},{name:"Stanis\u0142aw Koz\u0142owski",mail:"stanislaw.kozlowski@cosiek.pl",description:"Programista z 8 letnim do\u015bwiadczeniem",tagi:["Java","HTML","C#"],visible:!0},{name:"Kasia Kowalska",mail:"kasia.kowalska@cosiek.pl",description:"Programistka z 10 letnim do\u015bwiadczeniem",tagi:["HTML","Java","C#"],visible:!0},{name:"Wojciech Mak",mail:"wojciech.mak@cosiek.pl",description:"Programista z 10 letnim do\u015bwiadczeniem",tagi:["HTML","Java","C#"],visible:!0}],showWarning1:!1,showWarning2:!1},e.adder=function(t){for(var a=0;a<e.state.workerList.length;a++)if(0===e.state.workerList[a].mail.localeCompare(t.mail))return void e.setState({showWarning1:!0,showWarning2:!1});""===t.mail?e.setState({showWarning1:!1,showWarning2:!0}):e.setState({workerList:e.state.workerList.concat({name:t.name,mail:t.mail,description:t.description,tagi:t.tagi,visible:!0}),newWorker:{name:"",mail:"",description:""},showWarning1:!1,showWarning2:!1})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(f.d,{children:[Object(u.jsx)(f.b,{path:"/",exact:!0}),Object(u.jsx)(f.b,{path:"/oferty",exact:!0,children:Object(u.jsx)(v,{workerList:this.state.workerList})}),Object(u.jsx)(f.b,{path:"/login",exact:!0,children:Object(u.jsx)(x,{})}),Object(u.jsx)(f.b,{path:"/register",exact:!0,children:Object(u.jsx)(y,{})}),Object(u.jsx)(f.b,{path:"/new",children:Object(u.jsx)(g,{})}),Object(u.jsx)(f.b,{children:Object(u.jsx)("section",{children:Object(u.jsx)("h2",{children:"Error 404: Page not found"})})})]})}}]),a}(i.a.Component);var N=function(){return Object(u.jsxs)(s.a,{basename:"/lab5-tinder",children:[Object(u.jsx)("header",{children:"Tinder do projekt\xf3w"}),Object(u.jsxs)("main",{children:[Object(u.jsx)(d,{}),Object(u.jsx)(z,{})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),S()}},[[48,1,2]]]);
//# sourceMappingURL=main.8a09dea3.chunk.js.map