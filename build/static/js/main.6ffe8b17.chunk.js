(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{143:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},172:function(e,t,c){},211:function(e,t,c){},234:function(e,t,c){},237:function(e,t,c){},238:function(e,t,c){},239:function(e,t,c){},240:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(128),r=c.n(a),i=(c(143),c(16)),j=c.n(i),o=c(23),l=c(6),u=(c(145),c(146),c(263)),b=c(266),d=c(267),O=c(268),h=c(18),x=c(28),p=c.n(x),m=function(e){return{type:"LOGIN_SUCCESS",payload:e}},v=function(e){return{type:"REGISTER_SUCCESS",payload:e}},f=function(){var e=Object(o.a)(j.a.mark((function e(t,c){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,e.next=4,p.a.post("auth/login",t);case 4:s=e.sent,c(m(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"LOGIN_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(j.a.mark((function e(t,c){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"REGISTER_START"}),e.prev=1,e.next=4,p.a.post("auth/register",t);case 4:s=e.sent,c(v(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"REGISTER_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("@tubeflixsubuser"),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=c(131),w=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"REGISTER_START":return{user:null,isFetching:!0,error:!1};case"REGISTER_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"REGISTER_FAILURE":case"LOGOUT":return{user:null,isFetching:!1,error:!0};default:return Object(y.a)({},e)}},S=c(0),k={user:JSON.parse(localStorage.getItem("@tubeflixsubuser"))||null,isFetching:!1,error:!1},C=Object(s.createContext)(k),E=function(e){var t=e.children,c=Object(s.useReducer)(w,k),n=Object(l.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){localStorage.setItem("@tubeflixsubuser",JSON.stringify(a.user))}),[a.user]),Object(S.jsx)(C.Provider,{value:{user:a.user,isFetching:a.isFetching,error:a.error,dispatch:r},children:t})},T=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useContext)(C),r=(a.user,a.dispatch);a.isFetching;window.onscroll=function(){return n(0===window.pageYOffset),function(){return null==window.onscroll}};return Object(S.jsxs)("div",{className:c?"navbar scrolled":"navbar",children:[Object(S.jsxs)("div",{className:"container",children:[Object(S.jsxs)("div",{className:"left",children:[Object(S.jsx)("img",{src:"/img/tubeflix.svg",alt:""}),Object(S.jsxs)(h.b,{to:"/",className:"link",children:[" ",Object(S.jsx)("span",{children:"Homepage"})]}),Object(S.jsx)(h.b,{to:"series",className:"link",children:Object(S.jsx)("span",{children:"Series"})}),Object(S.jsx)(h.b,{to:"movies",className:"link",children:Object(S.jsx)("span",{children:"Movies"})}),Object(S.jsx)("span",{children:"New and Popular"}),Object(S.jsx)("span",{children:"My List "})]}),Object(S.jsxs)("div",{className:"right",children:[Object(S.jsx)(u.a,{className:"icon"}),Object(S.jsx)("span",{children:"KID"}),Object(S.jsx)(b.a,{className:"icon"}),Object(S.jsx)("img",{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:""}),Object(S.jsxs)("div",{className:"profile",children:[Object(S.jsx)(d.a,{className:"icon"}),Object(S.jsxs)("div",{className:"options",children:[Object(S.jsx)("span",{children:"Settings"}),Object(S.jsx)("span",{children:"Logout"})]})]})]})]}),Object(S.jsxs)("div",{className:"containerMob",children:[Object(S.jsxs)("div",{className:"left",children:[Object(S.jsx)("img",{src:"/img/tubeflix.svg",alt:""}),Object(S.jsxs)("div",{className:"menuMob",children:[Object(S.jsx)(O.a,{className:"icon"}),Object(S.jsxs)("div",{className:"options",children:[Object(S.jsxs)(h.b,{to:"/",className:"link",children:[" ",Object(S.jsx)("span",{children:"Homepage"})]}),Object(S.jsx)(h.b,{to:"series",className:"link",children:Object(S.jsx)("span",{children:"Series"})}),Object(S.jsx)(h.b,{to:"movies",className:"link",children:Object(S.jsx)("span",{children:"Movies"})}),Object(S.jsx)("span",{children:"New and Popular"}),Object(S.jsx)("span",{children:"My List "})]})]})]}),Object(S.jsxs)("div",{className:"right",children:[Object(S.jsx)(u.a,{className:"icon"}),Object(S.jsx)("span",{children:"KID"}),Object(S.jsx)(b.a,{className:"icon"}),Object(S.jsx)("img",{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:""}),Object(S.jsxs)("div",{className:"profile",children:[Object(S.jsx)(d.a,{className:"icon"}),Object(S.jsxs)("div",{className:"options",children:[Object(S.jsx)("span",{children:"Settings"}),Object(S.jsx)("span",{onClick:function(){N(r)},children:"Logout"})]})]})]})]})]})},R=(c(170),c(269)),I=c(270);var A=function(e){var t=e.type,c=Object(s.useState)({}),n=Object(l.a)(c,2),a=n[0],r=n[1],i=Object(s.useContext)(C).user;return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/movies/random?type=".concat(t),{headers:{Authorization:"Bearer ".concat(null===i||void 0===i?void 0:i.accessToken)}});case 3:c=e.sent,r(c.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(S.jsxs)("div",{className:"featured",children:[t&&Object(S.jsxs)("div",{className:"category",children:[Object(S.jsx)("span",{children:"movies"===t?"Movies":"Series"}),Object(S.jsxs)("select",{name:"genre",id:"genre",children:[Object(S.jsx)("option",{value:"Genre",children:"Genre"}),Object(S.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(S.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(S.jsx)("option",{value:"Crime",children:"Crime"}),Object(S.jsx)("option",{value:"Fantasy",children:"Fantasy"}),Object(S.jsx)("option",{value:"Historical",children:"Historical"}),Object(S.jsx)("option",{value:"Horror",children:"Horror"}),Object(S.jsx)("option",{value:"Romance",children:"Romance"}),Object(S.jsx)("option",{value:"Sci-fi",children:"Sci-fi"}),Object(S.jsx)("option",{value:"Thriller",children:"Thriller"}),Object(S.jsx)("option",{value:"Western",children:"Western"}),Object(S.jsx)("option",{value:"Animation",children:"Animation"}),Object(S.jsx)("option",{value:"Drama",children:"Drama"}),Object(S.jsx)("option",{value:"Documentary",children:"Documentary"})]})]}),Object(S.jsxs)("div",{className:"dimPics",children:[Object(S.jsx)("img",{src:a.img,alt:""}),Object(S.jsxs)("div",{className:"info",children:[Object(S.jsx)("img",{src:a.imgTitle,alt:""}),Object(S.jsx)("span",{className:"desc",children:a.desc}),Object(S.jsxs)("div",{className:"buttons",children:[Object(S.jsx)(h.b,{to:{pathname:"/watch/"+a._id,movie:a},children:Object(S.jsxs)("button",{className:"play",children:[Object(S.jsx)(R.a,{}),Object(S.jsx)("span",{children:"Play"})]})}),Object(S.jsxs)("button",{className:"more",children:[Object(S.jsx)(I.a,{}),Object(S.jsx)("span",{children:"Info"})]})]})]})]})]})},F=(c(171),c(274)),L=c(275),G=(c(172),c(271)),M=c(272),_=c(273);c(173);var B=function(e){e.index;var t=e.item,c=Object(s.useState)(!1),n=Object(l.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)({}),u=Object(l.a)(i,2),b=u[0],d=u[1],O=Object(s.useContext)(C).user;return Object(s.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/movies/find/"+t,{headers:{Authorization:"Bearer ".concat(null===O||void 0===O?void 0:O.accessToken)}});case 3:(c=e.sent).data&&d(c.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(S.jsx)(h.b,{to:{pathname:"/watch/"+b._id,movie:b},children:Object(S.jsxs)("div",{className:"listItem",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:[Object(S.jsx)("img",{src:b?b.img:"",alt:""}),a&&Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"itemInfo",children:[Object(S.jsxs)("div",{className:"icons",children:[Object(S.jsx)(R.a,{className:"icon"}),Object(S.jsx)(G.a,{className:"icon"}),Object(S.jsx)(M.a,{className:"icon"}),Object(S.jsx)(_.a,{className:"icon"})]}),Object(S.jsxs)("div",{className:"itemInfoTop",children:[Object(S.jsx)("span",{children:b?b.duration:""}),Object(S.jsx)("span",{className:"limit",children:b?b.limit:""}),Object(S.jsx)("span",{children:b?b.year:""})]}),Object(S.jsx)("div",{className:"desc",children:b?b.title:""}),Object(S.jsx)("div",{className:"genre",children:b?b.genre:""})]})})]})})},U=c(134);var P=function(e){var t=e.list,c=Object(s.useRef)(),n=Object(s.useState)(!1),a=Object(l.a)(n,2),r=a[0],i=(a[1],Object(s.useState)(0)),j=Object(l.a)(i,2);return j[0],j[1],Object(S.jsxs)("div",{className:"list",children:[Object(S.jsx)("span",{className:"listTitle",children:t.title}),Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsx)(U.ScrollMenu,{ref:c,LeftArrow:function(){return Object(S.jsx)(F.a,{style:{display:r?"block":"none"},className:"sliderArrow left"})},RightArrow:function(){return Object(S.jsx)(L.a,{className:"sliderArrow right"})},children:t.content.map((function(e,t){return Object(S.jsx)(B,{index:t,item:e})}))})})]})},H=function(e){var t=e.type,c=Object(s.useState)([]),n=Object(l.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(null),u=Object(l.a)(i,2),b=u[0],d=(u[1],Object(s.useContext)(C).user);return Object(s.useEffect)((function(){var e=function(){var c=Object(o.a)(j.a.mark((function c(){var s;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,p.a.get("list".concat(t?"?type="+t:"").concat(b?"&genre="+b:""),{headers:{Authorization:"Bearer ".concat(null===d||void 0===d?void 0:d.accessToken)}});case 3:s=c.sent,r(s.data),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),e();case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(){return c.apply(this,arguments)}}();e()}),[]),Object(S.jsxs)("div",{className:"home",children:[Object(S.jsx)(T,{}),Object(S.jsx)(A,{type:t}),Object(S.jsx)("div",{className:"homeList",children:a.map((function(e){return Object(S.jsx)(P,{list:e})}))})]})},D=c(276),z=c(17),J=(c(211),c(97),c(40)),V=c.n(J),W=(c(127),c(278));c(234);function K(e){var t=e.title;return Object(S.jsxs)("div",{className:"loadingSpinner",children:[Object(S.jsx)(W.a,{disableShrink:!0}),Object(S.jsx)("h3",{children:t})]})}var Y=c(41);var q=function(){var e=Object(z.h)(),t=Object(s.useState)({}),c=Object(l.a)(t,2),n=c[0],a=c[1],r=(Object(z.g)(),Object(s.useState)(!1)),i=Object(l.a)(r,2),u=(i[0],i[1]),b=e.movie,d=Object(z.i)().id,O=Object(s.useContext)(C).user;Object(s.useEffect)((function(){x()}),[]);var x=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(b),u(!0),e.next=5,p.a.get("/movies/find/"+d,{headers:{Authorization:"Bearer ".concat(null===O||void 0===O?void 0:O.accessToken)}});case 5:t=e.sent,a(t.data),u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u(!1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return n&&Object(S.jsxs)("div",{className:"watch",children:[Object(S.jsx)(h.b,{to:"/",children:Object(S.jsxs)("div",{className:"back",children:[Object(S.jsx)(D.a,{}),"Home"]})}),Object(S.jsxs)("div",{className:"player-wrapper",children:[!Y.isMobile&&Object(S.jsx)(V.a,{className:"react-player",url:n.video,width:"100%",height:"100%"}),Y.isMobile&&Object(S.jsx)(V.a,{className:"react-player",url:n.video,width:"100%"})]})]})||Object(S.jsx)(K,{title:"Page loading"})};c(237);var Q=function(){var e=Object(z.h)(),t=Object(s.useState)({}),c=Object(l.a)(t,2),n=c[0],a=c[1],r=(Object(z.g)(),e.movie),i=Object(z.i)(),u=i.id,b=i.token;Object(s.useEffect)((function(){d()}),[]);var d=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(r),e.next=3,p.a.get("/movies/find/"+u,{headers:{Authorization:"Bearer ".concat(b)}});case 3:t=e.sent,a(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n&&Object(S.jsx)("div",{className:"watch",children:Object(S.jsxs)("div",{className:"player-wrapper",children:[!Y.isMobile&&Object(S.jsx)(V.a,{className:"react-player",url:n.video,width:"100%",height:"100%"}),Y.isMobile&&Object(S.jsx)(V.a,{className:"react-player",url:n.video,width:"100%"})]})})||Object(S.jsx)(K,{title:"Page loading"})};c(238);var X=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),r=Object(l.a)(a,2),i=r[0],j=r[1],o=Object(s.useState)(null),u=Object(l.a)(o,2),b=u[0],d=u[1],O=Object(s.useState)(0),x=Object(l.a)(O,2),p=x[0],m=x[1],v=(Object(s.useRef)(),Object(s.useContext)(C)),f=(v.user,v.dispatch),N=v.isFetching,y=function(){m(p+1)};return Object(S.jsxs)("div",{className:"register",children:[Object(S.jsx)("div",{className:"top",children:Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsx)("img",{src:"/img/tubeflix.svg",alt:"",className:"logo"})})}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(S.jsx)("h2",{children:"Watch anywhere. Cancel anytime"}),Object(S.jsx)("p",{children:"Ready to watch? Enter your email to create or restart a membership"}),0==p&&Object(S.jsxs)("div",{className:"input",children:[Object(S.jsx)("input",{name:"email",onChange:function(e){return n(e.target.value)},type:"email",placeholder:"Enter email address"}),Object(S.jsx)("button",{type:"submit",className:"registerButton",onClick:y,children:"Get Started"})]}),1==p&&Object(S.jsxs)("div",{className:"input",children:[Object(S.jsx)("input",{name:"username ",onChange:function(e){return j(e.target.value)},defaultValue:null,type:"text",placeholder:"Enter username"}),Object(S.jsx)("button",{type:"submit",className:"registerButton",onClick:y,children:"Proceed"})]}),2==p&&Object(S.jsxs)("div",{className:"input",children:[Object(S.jsx)("input",{name:"password ",onChange:function(e){return d(e.target.value)},defaultValue:null,type:"password",placeholder:"Enter password"}),Object(S.jsxs)("button",{type:"submit",disabled:N,className:"registerButton",onClick:function(){try{g({username:i,email:c,password:b},f)}catch(e){}},children:[N&&Object(S.jsx)(S.Fragment,{children:"a moment..."}),!N&&Object(S.jsx)(S.Fragment,{children:"Start"})]})]}),Object(S.jsx)(h.b,{to:"/login",className:"loginButton",children:"Already have an account?"})]})]})};c(239);var Z=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),r=Object(l.a)(a,2),i=r[0],j=r[1],o=(Object(s.useRef)(),Object(s.useContext)(C)),u=(o.user,o.dispatch),b=o.isFetching;return Object(S.jsxs)("div",{className:"login",children:[Object(S.jsx)("div",{className:"top",children:Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsx)("img",{src:"/img/tubeflix.svg",alt:"",className:"logo"})})}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("form",{children:[Object(S.jsx)("h3",{children:"Login"}),Object(S.jsx)("input",{onChange:function(e){return n(e.target.value)},type:"email",placeholder:"Email or phone number"}),Object(S.jsx)("input",{onChange:function(e){return j(e.target.value)},type:"password",placeholder:"Password"}),Object(S.jsxs)("button",{onClick:function(e){e.preventDefault();try{f({email:c,password:i},u)}catch(t){}},type:"submit",disabled:b,className:"loginButton",children:[b&&Object(S.jsx)(S.Fragment,{children:"a moment..."}),!b&&Object(S.jsx)(S.Fragment,{children:"Sign In"})]}),Object(S.jsxs)(h.b,{to:"/register",children:["New to Tubeflix ",Object(S.jsx)("b",{children:"Sign up now."})]}),Object(S.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(S.jsx)("b",{children:"Learn more"})]})]})})]})},$=function(){var e=Object(s.useContext)(C).user;return Object(S.jsx)(h.a,{children:Object(S.jsxs)(z.d,{children:[Object(S.jsx)(z.b,{exact:!0,path:"/movies",component:function(){return e?Object(S.jsx)(H,{type:"movies"}):Object(S.jsx)(z.a,{to:"/register"})}}),Object(S.jsx)(z.b,{exact:!0,path:"/series",component:function(){return e?Object(S.jsx)(H,{type:"series"}):Object(S.jsx)(z.a,{to:"/register"})}}),Object(S.jsx)(z.b,{exact:!0,path:"/watch/:id",component:function(){return e?Object(S.jsx)(q,{}):Object(S.jsx)(z.a,{to:"/register"})}}),Object(S.jsx)(z.b,{exact:!0,path:"/watch-app/:id/:token",component:function(){return Object(S.jsx)(Q,{})}}),Object(S.jsx)(z.b,{exact:!0,path:"/register",component:function(){return e?Object(S.jsx)(z.a,{to:"/"}):Object(S.jsx)(X,{})}}),Object(S.jsx)(z.b,{exact:!0,path:"/login",component:function(){return e?Object(S.jsx)(z.a,{to:"/"}):Object(S.jsx)(Z,{})}}),Object(S.jsx)(z.b,{exact:!0,path:"/",component:function(){return e?Object(S.jsx)(H,{}):Object(S.jsx)(z.a,{to:"/register"})}})]})})};r.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(E,{children:Object(S.jsx)($,{})})}),document.getElementById("root"))}},[[240,14,15]]]);
//# sourceMappingURL=main.6ffe8b17.chunk.js.map