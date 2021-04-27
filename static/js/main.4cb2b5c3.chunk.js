(this["webpackJsonpdoggy-daycare"]=this["webpackJsonpdoggy-daycare"]||[]).push([[0],{24:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(18),o=c.n(a),r=(c(24),c(16)),i=c(8),l=c(2),d=c(10),j=c.n(d),g=c(13),h=function(){var e=Object(g.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t).then(function(){var e=Object(g.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,console.log("fetch OK"),localStorage.setItem("dogs",JSON.stringify(n)),c();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("There was an error: ",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),b=(c(26),c(0)),u=function(){var e=Object(l.f)();return Object(b.jsxs)("section",{className:"Welcome",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Welcome to Doggy Daycare"}),Object(b.jsx)("p",{children:"Would you like to view all dogs currently registered with us?"})]}),Object(b.jsx)("div",{className:"divButton",onClick:function(){e.push("listofdogs")},children:"Yes please!"})]})},O=(c(33),c.p+"static/media/dog-paw.d6a69466.svg"),p=c.p+"static/media/dog-paw-absent.dc02ff77.svg",x=function(e){var t=e.saveSelected,c=e.dataLoaded,n=localStorage.getItem("dogs"),s=JSON.parse(n),a=Object(l.f)();return Object(b.jsx)("div",{children:c&&s?s.map((function(e,c){return Object(b.jsxs)("div",{className:"dogEntry",onClick:function(){!function(e){localStorage.setItem("clickedDog",JSON.stringify(e)),t(),a.push("/individualdog")}(e)},children:[Object(b.jsx)("img",{className:"dogImageSmall",src:e.img,alt:""}),Object(b.jsxs)("div",{className:"dogInfo",children:[Object(b.jsx)("h3",{className:"dogName",children:e.name}),Object(b.jsx)("img",{className:"dogPresentIndicator",src:e.present?O:p,alt:""})]})]},c)})):Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Loading doggos, please wait"})})})},m=(c(34),function(e){var t=e.dogData;return t||(console.log("no data through props - using data from local storage"),t=JSON.parse(localStorage.getItem("clickedDog"))),Object(b.jsx)("div",{children:t?Object(b.jsxs)("div",{className:"selectedDog",children:[Object(b.jsxs)("section",{className:"dogSection",children:[Object(b.jsx)("img",{src:t.img,alt:""}),Object(b.jsxs)("div",{className:"dawgInfo",children:[Object(b.jsxs)("p",{children:["Name: ",t.name]}),Object(b.jsxs)("p",{children:["Age: ",t.age]})]})]}),Object(b.jsxs)("section",{className:"dawgInfoMore",children:[Object(b.jsxs)("p",{children:["Breed: ",t.breed]}),Object(b.jsxs)("p",{children:["Chipnumber: ",t.chipNumber]}),Object(b.jsxs)("p",{children:["Sex: ",t.sex]}),Object(b.jsxs)("p",{children:["Present:  ",t.present?"Present":"Not present"]})]}),Object(b.jsxs)("section",{className:"ownerSection",children:[Object(b.jsx)("h4",{children:"Owner"}),Object(b.jsxs)("p",{children:["Name: ",t.owner.name," ",t.owner.lastName]}),Object(b.jsxs)("p",{children:["Phone number: ",t.owner.phoneNumber]})]})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:"There was an error loading your data - please try again"}),Object(b.jsx)(i.b,{to:"/listofdogs",children:Object(b.jsx)("h6",{children:"Go to list of dogs"})})]})})});c(35);var f=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),o=Object(r.a)(a,2),d=o[0],j=o[1];function g(){var e=JSON.parse(localStorage.getItem("clickedDog"));s(e)}return Object(n.useEffect)((function(){h("https://api.jsonbin.io/b/607ef0d824143e5df08a0676",(function(){return j(!0)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:"Doggy Daycare"}),Object(b.jsxs)("div",{className:"Dev-tools",children:[Object(b.jsx)("button",{onClick:function(){var e=localStorage.getItem("dogs");console.log("localDogs: ",JSON.parse(e))},children:"What's in Local Storage?"}),Object(b.jsx)("button",{onClick:g,children:"Any clicked dog?"}),Object(b.jsx)("button",{onClick:function(){localStorage.removeItem("dogs"),localStorage.removeItem("clickedDog")},children:"Delete local storage"})]})]}),Object(b.jsx)("main",{children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(u,{})}),Object(b.jsx)(l.a,{path:"/listofdogs",children:Object(b.jsx)(x,{saveSelected:g,dataLoaded:d})}),Object(b.jsx)(l.a,{path:"/individualdog",children:Object(b.jsx)(m,{dogData:c})})]})})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),v()}},[[36,1,2]]]);
//# sourceMappingURL=main.4cb2b5c3.chunk.js.map