(this.webpackJsonpplayer=this.webpackJsonpplayer||[]).push([[0],{85:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,s,d,m,p,b,l,g,h,u=t(0),x=t.n(u),j=t(24),f=t.n(j),O=t(4),w=t(5),v=Object(w.a)(a||(a=Object(O.a)(["\n    * {\n        margin:0;\n        padding:0;\n        box-sizing: border-box;\n    }\n    html {\n        &::-webkit-scrollbar {\n            width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb {\n            background: #797d86;\n        }\n        &::-webkit-scrollbar-track {\n            background: #1d2a3b;\n        }\n    }\n    body {\n        font-family: 'Lato', sans-serif;\n        width: 100%;\n        background: #283e55;\n    }\n    h2 {\n        font-size: 2.6rem;\n        font-family: 'Luckiest Guy', cursive;\n        letter-spacing: 2px;\n        font-weight: lighter;\n        text-align: center;\n        @media (max-width: 768px) {\n            font-size: 2.5rem;\n        }\n        @media (max-width: 576px) {\n            font-size: 2rem;\n        }\n    }\n    h3 {\n        font-size: 1.3rem;\n        color: #333;\n        margin-bottom: .5rem;\n        @media (max-width: 576px) {\n            font-size: 1rem;\n        }\n    }\n    p {\n        font-size: 1.2rem;\n        line-height: 1.4;\n        color: #333;\n        @media (max-width: 576px) {\n            font-size: 1rem;\n        }\n    }\n    a {\n        text-decoration: none;\n        color: #333;\n    }\n    img {\n        display: block;\n        width: 100%;\n    }\n"]))),y=t(3),k=t(6),E=t(13),_=function(n,e){return n.match(/media\/screenshots/)?n.replace("media/screenshots","media/resize/".concat(e,"/-/screenshots")):n.replace("/media/games/","/media/resize/".concat(e,"/-/games/"))},z=t.p+"static/media/ps4.e632b031.svg",S=t.p+"static/media/ps5.98e19d46.svg",D=t.p+"static/media/steam.5976ce1f.svg",C=t.p+"static/media/xbox.91dcf8af.svg",L=t.p+"static/media/nintendo.a1c5a7e0.svg",A=t.p+"static/media/apple.2f08280f.svg",N=t.p+"static/media/ios.e563a2a9.svg",G=t.p+"static/media/gamepad.3d386ea2.svg",T=t.p+"static/media/star-empty.ff8fe24a.svg",I=t.p+"static/media/star-full.35c9e02e.svg",H=t(1),R=Object(w.b)(k.motion.div)(i||(i=Object(O.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  padding: 20px 0;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #797d86;\n  }\n  &::-webkit-scrollbar-track {\n    background: #1d2a3b;\n  }\n"]))),F=Object(w.b)(k.motion.div)(r||(r=Object(O.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  color: black;\n  @media (max-width: 1300px) {\n    padding: 2rem;\n    width: 90%;\n    left: 5%;\n  }\n  @media (max-width: 768px) {\n    padding: 1rem;\n    width: 96%;\n    left: 2%;\n  }\n"]))),M=Object(w.b)(k.motion.div)(c||(c=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  .rating {\n    margin-bottom: 10px;\n  }\n  .star {\n    width: 1.2rem;\n    height: 1.2rem;\n    display: inline-block;\n    margin-right: 0.1rem;\n  }\n"]))),P=Object(w.b)(k.motion.div)(o||(o=Object(O.a)(["\n  text-align: center;\n"]))),X=Object(w.b)(k.motion.div)(s||(s=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  div {\n    margin-right: 0.8rem;\n    margin-bottom: 0.4rem;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n  img {\n    width: 38px;\n    margin: 0 auto 5px;\n    @media (max-width: 576px) {\n      width: 26px;\n    }\n  }\n  p {\n    font-size: 0.7rem;\n    @media (max-width: 576px) {\n      font-size: 0.6rem;\n    }\n  }\n"]))),J=Object(w.b)(k.motion.div)(d||(d=Object(O.a)(["\n  margin-top: 2rem;\n  @media (max-width: 576px) {\n    margin-top: 1rem;\n  }\n  img {\n    width: 100%;\n  }\n"]))),U=Object(w.b)(k.motion.div)(m||(m=Object(O.a)(["\n  margin: 3rem 0;\n  @media (max-width: 576px) {\n    margin: 1rem 0;\n  }\n"]))),B=function(){var n=Object(y.e)(),e=function(){return document.body.style.overflow="auto"};onpopstate=function(){e()};var t=function(n){switch(n){case"PlayStation 4":return z;case"PlayStation 5":return S;case"Xbox Series S/X":case"Xbox One":return C;case"PC":return D;case"Nintendo Switch":return L;case"macOS":return A;case"iOS":return N;default:return G}},a=Object(E.c)((function(n){return n.detail})),i=a.screen,r=a.game,c=a.isLoading;return Object(H.jsx)(H.Fragment,{children:!c&&Object(H.jsx)(R,{className:"shadow",onClick:function(t){t.target.classList.contains("shadow")&&(e(),n.push("/"))},children:Object(H.jsxs)(F,{children:[Object(H.jsxs)(M,{children:[Object(H.jsxs)("div",{className:"rating",children:[Object(H.jsx)("h3",{children:r.name}),Object(H.jsxs)("p",{children:["Rating: ",r.rating]}),function(){for(var n=[],e=Math.floor(r.rating),t=1;t<=5;t++)t<=e?n.push(Object(H.jsx)("img",{alt:"star",className:"star",src:I},t)):n.push(Object(H.jsx)("img",{alt:"star",className:"star",src:T},t));return n}()]}),Object(H.jsx)(P,{children:Object(H.jsx)(X,{children:r.platforms.map((function(n){return Object(H.jsxs)("div",{children:[Object(H.jsx)("img",{src:t(n.platform.name),alt:n.platform.name}),Object(H.jsx)("p",{children:n.platform.name})]},n.platform.id)}))})})]}),Object(H.jsx)(J,{children:Object(H.jsx)("img",{src:_(r.background_image,1280),alt:"game"})}),Object(H.jsx)(U,{children:Object(H.jsx)("p",{children:r.description_raw})}),Object(H.jsx)("div",{className:"gallery",children:i.results.map((function(n){return Object(H.jsx)("img",{src:_(n.image,1280),alt:"game"},n.id)}))})]})})})},V=t(15),Y=t.n(V),q=t(21),K=t(16),Q=t.n(K),W="e818bff25bc24f18837201c1041ae021",Z="https://api.rawg.io/api/games?key=".concat(W),$=(new Date).getFullYear(),nn=function(){var n=(new Date).getMonth()+1;return n<10?"0".concat(n):n}(),en=function(){var n=(new Date).getDate();return n<10?"0".concat(n):n}(),tn="".concat($,"-").concat(nn,"-").concat(en),an="".concat($-1,"-").concat(nn,"-").concat(en),rn="".concat($+1,"-").concat(nn,"-").concat(en),cn="&dates=".concat(an,",").concat(tn,"&ordering=-rating&page_size=6"),on="&dates=".concat(tn,",").concat(rn,"&ordering=-added&page_size=6"),sn="&dates=".concat(an,",").concat(tn,"&ordering=-released&page_size=6"),dn=function(n){return"https://api.rawg.io/api/games/".concat(n,"/screenshots?key=").concat(W)},mn=function(n){return"".concat(Z,"&search=").concat(n,"&page_size=6 ")},pn={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},bn={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},ln=t(17),gn=Object(w.b)(k.motion.div)(p||(p=Object(O.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);\n  border-radius: 1rem;\n  overflow: hidden;\n  cursor: pointer;\n  transition: box-shadow 0.3s ease-in-out;\n  &:hover {\n    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.7);\n    .gameDes\u0441 {\n      background: black;\n    }\n    h3 {\n      color: #e9e9f4;\n    }\n    p {\n      color: #828291;\n    }\n    img {\n      transform: scale(1.1);\n    }\n  }\n  h3 {\n    color: #aeaebb;\n    transition: color 0.3s ease-in-out;\n  }\n  p {\n    font-size: 1rem;\n    color: #5d6164;\n    transition: color 0.3s ease-in-out;\n  }\n  @media (max-width: 768px) {\n    border-radius: 0.5rem;\n  }\n  .gameDes\u0441 {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    padding: 1rem 2rem;\n    background: #13111e;\n    transition: background 0.3s ease-in-out;\n    @media (max-width: 576px) {\n      padding: 1rem;\n    }\n  }\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n    object-position: center top;\n    transition: transform 0.3s ease;\n  }\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n  }\n  &:last-child {\n    @media (max-width: 768px) {\n      margin-bottom: 0;\n    }\n  }\n"]))),hn=function(n){var e=n.name,t=n.released,a=n.image,i=n.id,r=Object(E.b)();return Object(H.jsx)(gn,{onClick:function(){document.body.style.overflow="hidden",r(function(n){return function(){var e=Object(q.a)(Y.a.mark((function e(t){var a,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_DETAIL"}),e.next=3,Q.a.get("https://api.rawg.io/api/games/".concat(n,"?key=").concat(W));case 3:return a=e.sent,e.next=6,Q.a.get(dn(n));case 6:i=e.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:i.data}});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}(i))},variants:bn,initial:"hidden",animate:"show",children:Object(H.jsxs)(ln.b,{to:"/game/".concat(i),children:[Object(H.jsx)("img",{src:_(a,640),alt:e}),Object(H.jsxs)("div",{className:"gameDes\u0441",children:[Object(H.jsx)("h3",{children:e}),Object(H.jsx)("p",{children:t})]})]})})},un=Object(w.b)(k.motion.div)(b||(b=Object(O.a)(["\n  padding: 0rem 5rem 3rem;\n  @media (max-width: 768px) {\n    padding: 0rem 3rem 3rem;\n  }\n  @media (max-width: 576px) {\n    padding: 0rem 2rem 3rem;\n  }\n  @media (max-width: 375px) {\n    padding: 0rem 1rem 2rem;\n  }\n  h2 {\n    color: #cee4ff;\n    text-transform: uppercase;\n    padding: 4rem 0rem;\n    @media (max-width: 768px) {\n      padding: 3rem 0rem;\n    }\n    @media (max-width: 576px) {\n      padding: 2rem 0rem;\n    }\n  }\n"]))),xn=Object(w.b)(k.motion.div)(l||(l=Object(O.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n  @media (max-width: 1300px) {\n    grid-row-gap: 3rem;\n  }\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]))),jn=function(){var n=Object(y.f)().pathname.split("/")[2],e=Object(E.b)();Object(u.useEffect)((function(){e(function(){var n=Object(q.a)(Y.a.mark((function n(e){var t,a,i;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Q.a.get("".concat(Z).concat(cn));case 2:return t=n.sent,n.next=5,Q.a.get("".concat(Z).concat(on));case 5:return a=n.sent,n.next=8,Q.a.get("".concat(Z).concat(sn));case 8:i=n.sent,e({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:a.data.results,newGames:i.data.results}});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[e]);var t=Object(E.c)((function(n){return n.games})),a=t.popular,i=(t.newGames,t.upcoming),r=t.searched;return Object(H.jsxs)(un,{variants:pn,initial:"hidden",animate:"show",children:[n&&Object(H.jsx)(B,{}),r.length?Object(H.jsxs)("div",{className:"searched",children:[Object(H.jsx)("h2",{children:"Searched games"}),Object(H.jsx)(xn,{children:r.map((function(n){return Object(H.jsx)(hn,{name:n.name,released:n.released,id:n.id,image:n.background_image},n.id)}))})]}):"",Object(H.jsx)("h2",{children:"Upcoming games"}),Object(H.jsx)(xn,{children:i.map((function(n){return Object(H.jsx)(hn,{name:n.name,released:n.released,id:n.id,image:n.background_image},n.id)}))}),Object(H.jsx)("h2",{children:"Popular games"}),Object(H.jsx)(xn,{children:a.map((function(n){return Object(H.jsx)(hn,{name:n.name,released:n.released,id:n.id,image:n.background_image},n.id)}))})]})},fn=t(46),On=t.p+"static/media/logo.babbae64.svg",wn=function(){var n=Object(E.b)(),e=Object(u.useState)(""),t=Object(fn.a)(e,2),a=t[0],i=t[1];return Object(H.jsxs)(vn,{variants:pn,initial:"hidden",animate:"show",children:[Object(H.jsxs)(yn,{onClick:function(){n({type:"CLEAR_SEARCHED"})},children:[Object(H.jsx)("img",{src:On,alt:"logo"}),Object(H.jsxs)("p",{children:["GAMES",Object(H.jsx)("br",{}),"INFO"]})]}),Object(H.jsxs)("form",{className:"search",children:[Object(H.jsx)("input",{value:a,onChange:function(n){i(n.target.value)},type:"text"}),Object(H.jsx)("button",{type:"submit",onClick:function(e){var t;e.preventDefault(),n((t=a,function(){var n=Object(q.a)(Y.a.mark((function n(e){var a;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Q.a.get(mn(t));case 2:a=n.sent,e({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),i("")},children:"Search"})]})]})},vn=Object(w.b)(k.motion.nav)(g||(g=Object(O.a)(["\n  padding: 1rem 5rem 0;\n  text-align: center;\n  @media (max-width: 768px) {\n    padding: 1rem 3rem 0;\n  }\n  @media (max-width: 576px) {\n    padding: 1rem 2rem 0;\n  }\n  @media (max-width: 375px) {\n    padding: 0.5rem 1rem 0;\n  }\n\n  input {\n    display: inline-block;\n    vertical-align: bottom;\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);\n    background: #cee4ff;\n    outline: none;\n    border-radius: 5px 0 0 5px;\n    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n    @media (max-width: 1300px) {\n      width: 60%;\n    }\n    @media (max-width: 576px) {\n      width: 70%;\n      padding: 0.88rem 0.5rem;\n      font-size: 1.2rem;\n    }\n    &:active {\n      background: white;\n      box-shadow: 0 0 30px rgba(255, 255, 255, 0.35);\n    }\n    &:focus {\n      background: white;\n      box-shadow: 0 0 30px rgba(255, 255, 255, 0.35);\n    }\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #4dc530;\n    color: white;\n    border-radius: 0 5px 5px 0;\n    transition: background 0.3s ease-in-out;\n    @media (max-width: 576px) {\n      padding: 1rem;\n      font-size: 1rem;\n    }\n    &:hover {\n      background: #44ac30;\n    }\n  }\n"]))),yn=Object(w.b)(k.motion.div)(h||(h=Object(O.a)(['\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  img {\n    width: 60px;\n    height: auto;\n    margin-right: 0.5rem;\n    font-weight: bold;\n    @media (max-width: 576px) {\n      width: 50px;\n    }\n  }\n  p {\n    color: #5e6a8e;\n    text-align: left;\n    line-height: 1;\n    font-size: 1.5rem;\n    font-family: "Luckiest Guy", cursive;\n    letter-spacing: 1.4px;\n    @media (max-width: 576px) {\n      font-size: 1.2rem;\n    }\n  }\n'])));var kn=function(){return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(v,{}),Object(H.jsx)(wn,{}),Object(H.jsx)(y.a,{path:["/game/:id","/"],children:Object(H.jsx)(jn,{})})]})},En=t(19),_n=t(9),zn={popular:[],newGames:[],upcoming:[],searched:[]},Sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_GAMES":return Object(_n.a)(Object(_n.a)({},n),{},{popular:e.payload.popular,upcoming:e.payload.upcoming,newGames:e.payload.newGames});case"FETCH_SEARCHED":return Object(_n.a)(Object(_n.a)({},n),{},{searched:e.payload.searched});case"CLEAR_SEARCHED":return Object(_n.a)(Object(_n.a)({},n),{},{searched:[]});default:return Object(_n.a)({},n)}},Dn={game:{platforms:[]},screen:{results:[]},isLoading:!0},Cn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAIL":return Object(_n.a)(Object(_n.a)({},n),{},{game:e.payload.game,screen:e.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(_n.a)(Object(_n.a)({},n),{},{isLoading:!0});default:return Object(_n.a)({},n)}},Ln=Object(En.b)({games:Sn,detail:Cn}),An=t(45),Nn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||En.c,Gn=Object(En.d)(Ln,Nn(Object(En.a)(An.a)));f.a.render(Object(H.jsx)(x.a.StrictMode,{children:Object(H.jsx)(E.a,{store:Gn,children:Object(H.jsx)(ln.a,{children:Object(H.jsx)(kn,{})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.e974a852.chunk.js.map