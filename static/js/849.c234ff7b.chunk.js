"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[849],{849:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o,a,i,c,s,l,p,u,d,x,g=t(433),f=t(861),h=t(439),b=t(687),m=t.n(b),A=t(791),w=t(243),v=new URL("https://642f9845c26d69edc87f8191.mockapi.io/tweets"),Z=function(){var n=(0,f.Z)(m().mark((function n(e){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.Z.get("".concat(v,"?page=").concat(e,"&limit=3"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=(0,f.Z)(m().mark((function n(e,t){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.Z.put("".concat(v,"/").concat(e),{followers:"".concat(t)});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),S=t(168),j=t(444),y=t(956),E=t(661),F=j.ZP.ul(r||(r=(0,S.Z)(["\n  display: flew;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  padding: 10px;\n  font-size: 20px;\n  color: #ebd8ff;\n  font-family: 'Montserrat';\n"]))),N=j.ZP.li(o||(o=(0,S.Z)(["\n  width: 379px;\n  height: 460px;\n  border: 1px solid #000000;\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  background-image: url(","),\n    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);\n  background-repeat: no-repeat;\n  background-position: 36px 28px, 0px 0px;\n\n  list-style: none;\n\n  &:hover,\n  &:focus {\n    scale: 1.02;\n  }\n"])),y),Y=j.ZP.img(a||(a=(0,S.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-left: 20px;\n"]))),I=j.ZP.div(i||(i=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n  margin-top: 136px;\n  margin-bottom: 26px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: -6px 0px;\n"])),E),O=j.ZP.img(c||(c=(0,S.Z)(["\n  display: block;\n  border-radius: 50%;\n"]))),B=j.ZP.p(s||(s=(0,S.Z)(["\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-weight: 500;\n  text-align: center;\n"]))),T=j.ZP.button(l||(l=(0,S.Z)(["\n  display: block;\n  width: 196px;\n  padding: 14px 0px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 26px;\n  margin-bottom: 36px;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 18px;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  &:hover {\n    background-color: #5cd3a8;\n  }\n"]))),C=t(949),Q=t(184),R=function(n){var e=n.item,t=n.onFollow,r=e.id,o=e.tweets,a=e.followers,i=e.avatar,c=e.user,s=(0,A.useState)(a),l=(0,h.Z)(s,2),p=l[0],u=l[1],d=(0,A.useState)(!1),x=(0,h.Z)(d,2),b=x[0],w=x[1],v=p.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");(0,A.useEffect)((function(){null!==t&&void 0!==t&&t.some((function(n){return n.id===r}))&&w(!0)}),[t,r]);var Z=function(){S(),function(){j.apply(this,arguments)}(),y()},S=function(){if(w(!b),b){var n=JSON.parse(localStorage.getItem("onFollow")).filter((function(n){return n.id!==r}));localStorage.setItem("onFollow",JSON.stringify(n))}else localStorage.getItem("onFollow")?localStorage.setItem("onFollow",JSON.stringify([].concat((0,g.Z)(JSON.parse(localStorage.getItem("onFollow"))),[{id:r,user:c}]))):localStorage.setItem("onFollow",JSON.stringify([{id:r,user:c}]))};function j(){return(j=(0,f.Z)(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k(r,b?Number(p)-1:Number(p)+1);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}var y=function(){u(b?Number(p)-1:Number(p)+1)};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Y,{src:C,alt:"logo"}),(0,Q.jsx)(I,{children:(0,Q.jsx)(O,{src:i,alt:"avatar",width:62})}),(0,Q.jsxs)(B,{children:[o," ",(0,Q.jsx)("span",{children:"TWEETS"})," "]}),(0,Q.jsxs)(B,{children:[v," ",(0,Q.jsx)("span",{children:"FOLLOWERS"})]}),(0,Q.jsx)(T,{type:"submit",onClick:function(){return Z()},style:{backgroundColor:b&&"#5cd3a8"},children:b?(0,Q.jsx)(Q.Fragment,{children:"Following "}):(0,Q.jsx)(Q.Fragment,{children:" Follow"})})]})},L=function(n){var e=n.users,t=n.onFollow;return(0,Q.jsx)(F,{children:e.map((function(n){return(0,Q.jsx)(N,{children:(0,Q.jsx)(R,{item:n,onFollow:t})},n.id)}))})},P=j.ZP.div(p||(p=(0,S.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),q=j.ZP.button(u||(u=(0,S.Z)(["\n  padding: 8px 16px;\n  background-color: #5736a3;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #ebd8ff;\n  border: 1px solid #5736a3;\n  border-radius: 10px;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 196px;\n  padding: 14px 0px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #5cd3a8;\n    color: #000;\n  }\n"]))),W=function(n){var e=n.onClick;return(0,Q.jsx)(P,{children:(0,Q.jsx)(q,{onClick:e,type:"button",children:"Load more"})})},z=t(689),J=t(185),U=t(87),V=j.ZP.div(d||(d=(0,S.Z)(["\n  padding: 0px 16px;\n"]))),D=(0,j.ZP)(U.rU)(x||(x=(0,S.Z)(["\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 10px;\n  background-color: #5736a3;\n  font-size: 14px;\n  color: #ebd8ff;\n  text-decoration: none;\n\n  border-radius: 5px;\n  border: 1px solid #bbbbbb;\n\n  &:hover,\n  :focus {\n    background-color: #5cd3a8;\n    color: #000;\n  }\n"]))),M=function(n){var e=n.locationBack;return(0,Q.jsx)(V,{children:(0,Q.jsxs)(D,{to:e,children:[(0,Q.jsx)(J.i1r,{size:20}),"Go bacK"]})})},G=function(){var n,e,t=(0,A.useState)([]),r=(0,h.Z)(t,2),o=r[0],a=r[1],i=(0,A.useState)("idle"),c=(0,h.Z)(i,2),s=c[0],l=c[1],p=(0,A.useState)(!1),u=(0,h.Z)(p,2),d=u[0],x=u[1],b=(0,A.useState)(1),w=(0,h.Z)(b,2),v=w[0],k=w[1],S=(0,A.useState)(null),j=(0,h.Z)(S,2),y=j[0],E=j[1],F=(0,z.TH)(),N=(0,A.useRef)(null!==(n=null===(e=F.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,A.useEffect)((function(){function n(){return(n=(0,f.Z)(m().mark((function n(){var e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(v);case 3:e=n.sent,l("resolved"),x(!0),Math.ceil(e.length<3)&&x(!1),a((function(n){return[].concat((0,g.Z)(n),(0,g.Z)(e))})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[v]),(0,A.useEffect)((function(){localStorage.getItem("onFollow")&&E(JSON.parse(localStorage.getItem("onFollow")))}),[]);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("div",{children:(0,Q.jsx)(M,{locationBack:N.current})}),"idle"===s&&(0,Q.jsx)("div",{children:"Loading..."}),"resolved"===s&&(0,Q.jsx)(L,{users:o,onFollow:y}),"resolved"===s&&(d?(0,Q.jsx)(W,{onClick:function(){k((function(n){return n+1}))}}):(0,Q.jsx)("p",{children:"These are all user's tweets..."}))]})}},661:function(n,e,t){n.exports=t.p+"static/media/avatar_frame.a8f48c1b243fe77543f0.png"},956:function(n,e,t){n.exports=t.p+"static/media/bg_picture.032662a2a907475127d7.png"},949:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=849.c234ff7b.chunk.js.map