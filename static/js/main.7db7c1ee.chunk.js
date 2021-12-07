(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{24:function(n,e,t){},25:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r,c=t(0),i=t.n(c),a=t(12),o=t.n(a),s=(t(24),t(7)),d=(t(25),t(3)),l=t(4),j=t(2),b=t(1),u=l.a.div(r||(r=Object(d.a)(["\n  cursor: pointer;\n  &:hover .details {\n    border: 1px solid var(--black);\n    border-top: none;\n    border-radius: 0 0 5px 5px;\n  }\n  text-align: left;\n  border-radius: 5px;\n  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);\n  img {\n    width: 100%;\n    height: 160px;\n    border-radius: 5px 5px 0 0;\n    vertical-align: top;\n  }\n  .details {\n    padding: 1.5em;\n    border: 1px solid transparent;\n    border-top: none;\n    transition: 0.3s border;\n    background: var(--white);\n  }\n  h2 {\n    margin: 0;\n    margin-bottom: 1rem;\n    font-size: 18px;\n    font-weight: 700;\n  }\n  p {\n    font-size: 0.8em;\n    margin-bottom: 0.5rem;\n  }\n"])));var p,g=function(n){var e=n.flag,t=n.name,r=n.population,c=n.region,i=n.capital,a=n.code,o=Object(j.f)();return Object(b.jsxs)(u,{onClick:function(){o("/country/".concat(a))},children:[Object(b.jsx)("img",{loading:"lazy",src:e,alt:""}),Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Population: "}),r]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Region: "}),c]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Capital: "}),i]})]})]})},x=t(8),m=t(5),h=l.a.label(p||(p=Object(d.a)(["\n  display: inline-flex;\n  background: var(--white);\n  align-items: center;\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);\n  padding: 0 2rem;\n  border-radius: 5px;\n  flex: 1;\n  i {\n    margin-right: 1em;\n    color: #c4c4c4;\n  }\n  input {\n    flex: 1;\n    border: none;\n    height: 48px;\n    line-height: 48px;\n    font-size: 0.7em;\n    background: var(--white);\n    outline: 0;\n    color: var(--black);\n    &::-webkit-input-placeholder {\n      color: #c4c4c4;\n    }\n  }\n"])));var O,f=function(n){var e=Object.assign({},n);return Object(b.jsxs)(h,{children:[Object(b.jsx)("i",{className:"fas fa-search"}),Object(b.jsx)("input",Object(m.a)({type:"text"},e))]})},v=l.a.div(O||(O=Object(d.a)(["\n  display: flex;\n  position: relative;\n  .close {\n    position: absolute;\n    right: 1em;\n    top: 1em;\n    border-radius: 50%;\n    border: none;\n    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);\n  }\n"])));var y,k,w=function(){var n=Object(x.b)(),e=Object(c.useState)(""),t=Object(s.a)(e,2),r=t[0],i=t[1];return Object(b.jsxs)(v,{children:[r&&Object(b.jsx)("i",{className:"fas fa-times close",onClick:function(){n({type:"SET_COUNTRY_BY_NAME",payload:""}),i("")}}),Object(b.jsx)(f,{placeholder:"Search for a country...",value:r,onChange:function(e){i(e.target.value),n({type:"SET_COUNTRY_BY_NAME",payload:e.target.value})}})]})},N=l.a.select(y||(y=Object(d.a)(["\n  padding: 1em;\n  border: none;\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n  background: var(--white);\n  outline: 0;\n  color: var(--black);\n"]))),B=function(){var n=Object(x.b)(),e=Object(x.c)((function(n){return n.filterByRegion}));return Object(b.jsxs)(N,{onChange:function(e){var t=e.target.value;n({type:"FILTER_BY_REGION",payload:{regionSelected:t}})},value:e,children:[Object(b.jsx)("option",{value:"",children:"Filter by region"}),Object(b.jsx)("option",{value:"Africa",children:"Africa"}),Object(b.jsx)("option",{value:"Americas",children:"Americas"}),Object(b.jsx)("option",{value:"Asia",children:"Asia"}),Object(b.jsx)("option",{value:"Europe",children:"Europe"}),Object(b.jsx)("option",{value:"Oceania",children:"Oceania"})]})},R=l.a.div(k||(k=Object(d.a)(["\n  max-width: 1280px;\n  margin: auto;\n  padding: 0 1rem;\n"])));var L,C=function(n){var e=n.children;return Object(b.jsx)(R,{children:e})},E=l.a.div(L||(L=Object(d.a)(["\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-row-gap: 20px;\n  }\n  @media screen and (min-width: 768px) {\n    .grid {\n      grid-template-columns: 480px 1fr 200px;\n    }\n  }\n"])));var T,_=function(){return Object(b.jsx)(E,{children:Object(b.jsx)(C,{children:Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)(w,{}),Object(b.jsx)("span",{}),Object(b.jsx)(B,{})]})})})},S=l.a.div(T||(T=Object(d.a)(["\n  display: grid;\n  grid-auto-flow: columns;\n  grid-template-columns: repeat(auto-fill, 264px);\n  grid-column-gap: 70px;\n  grid-row-gap: 2.3em;\n  background: var(--background);\n  justify-content: center;\n  padding: 3em 0;\n"])));var F=function(){var n=Object(x.b)(),e=Object(x.c)((function(n){return n.countryListByName})),t=Object(x.c)((function(n){return""!==n.filterByRegion&&e.length>=0?n.countryFilteredByRegion:e.length>0?e:n.countryList}));return Object(c.useEffect)((function(){fetch("https://restcountries.com/v3.1/all").then((function(n){return n.json()})).then((function(e){n({type:"SET_COUNTRY_LIST",payload:e.filter((function(n){return void 0!==n.ccn3}))})})).catch((function(){console.log("error")}))}),[n]),Object(b.jsxs)(C,{children:[Object(b.jsx)(_,{}),Object(b.jsx)(S,{children:t.map((function(n){var e=n.name,t=n.flags,r=n.population,c=n.capital,i=n.region,a=n.ccn3;return Object(b.jsx)(g,{flag:t.png,name:e.common,code:a,population:r,region:i,capital:c},e.common)}))})]})},Y=t(19);var A,z=t(9),I=l.a.div(A||(A=Object(d.a)(["\n  background: var(--white);\n  margin-bottom: 1em;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  .content {\n    height: 80px;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n  }\n  h1 {\n    font-size: 14px;\n  }\n  .dark-mode {\n    cursor: pointer;\n    .moon {\n      transform: rotate(-25deg);\n      margin-right: 10px;\n      display: inline-flex;\n    }\n    p {\n      font-size: 12px;\n      font-weight: 600;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: var(--black);\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 3em;\n    h1 {\n      font-size: 24px;\n    }\n    .dark-mode {\n      p {\n        font-size: 16px;\n      }\n    }\n  }\n"])));var M,D=function(n){var e=n.setDarkmode,t=n.darkMode;return Object(b.jsx)(I,{children:Object(b.jsx)(C,{children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(z.b,{to:"/",children:Object(b.jsx)("h1",{children:"Where in the world?"})}),Object(b.jsx)("div",{className:"dark-mode",children:Object(b.jsxs)("p",{onClick:function(){e(!t)},children:[Object(b.jsx)("span",{className:"moon",children:t?Object(b.jsx)("i",{className:"fas fa-moon"}):Object(b.jsx)("i",{className:"far fa-moon"})}),"Dark Mode"]})})]})})})},U=l.a.div(M||(M=Object(d.a)(['\n  margin-top: 3em;\n  padding-bottom: 3em;\n  img {\n    width: 100%;\n    margin-bottom: 2em;\n  }\n  .grid {\n    display: grid;\n    grid-row-gap: 1em;\n  }\n  .border-item {\n    padding: 0.5em 2em;\n    border-radius: 5px;\n    margin-right: 15px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n    display: inline-flex;\n    margin-bottom: 15px;\n    background: var(--white);\n    cursor: pointer;\n  }\n  .grid span {\n    &:after {\n      content: ", ";\n    }\n    &:last-child {\n      &:after {\n        display: none;\n      }\n    }\n  }\n  @media screen and (min-width: 1024px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 120px;\n    margin-top: 5em;\n    .grid {\n      grid-template-columns: 1fr 1fr;\n    }\n    .borders {\n      display: inline-flex;\n      margin-right: 1em;\n      margin-top: 4em;\n    }\n  }\n'])));var P,G=function(n){var e=n.flags,t=n.name,r=n.population,c=n.region,i=n.subregion,a=n.capital,o=n.tld,s=n.currencies,d=n.languages,l=n.borders;return Object(b.jsxs)(U,{children:[Object(b.jsx)("img",{src:e.png}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t.common}),Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Native Name: "}),Object.keys(t.nativeName).map((function(n){return Object(b.jsx)("span",{children:t.nativeName[n].official})}))]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Population: "}),r]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Region: "}),c]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Sub Region: "}),i]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Capital: "}),a]})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Top Level Domain: "}),o]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Currencies: "}),Object.keys(s).map((function(n){return Object(b.jsx)("span",{children:"".concat(s[n].name," (").concat(s[n].symbol,")")})}))]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:"Languages: "}),Object.keys(d).map((function(n){return Object(b.jsx)("span",{children:d[n]})}))]})]})]}),Object(b.jsx)("p",{className:"borders",children:Object(b.jsx)("strong",{children:"Border Countries: "})}),l?l.map((function(n){return Object(b.jsx)("span",{className:"border-item",children:n})})):"None"]})]})},J=l.a.div(P||(P=Object(d.a)(["\n  .back {\n    background: var(--white);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    padding: 0.5em 2.2em;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n    margin-top: 3em;\n    color: var(--black);\n    i {\n      margin-right: 5px;\n    }\n  }\n  @media screen and (min-width: 1024px) {\n    .back {\n      margin-top: 3em;\n    }\n  }\n"])));var W=function(){var n=Object(j.f)(),e=Object(j.g)(),t=Object(c.useState)(),r=Object(s.a)(t,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){var n=!0;return fetch("https://restcountries.com/v3.1/alpha/".concat(e.id)).then((function(n){return n.json()})).then((function(e){n&&a(e[0])})),function(){return n=!1}}),[]),Object(b.jsx)(J,{children:Object(b.jsxs)(C,{children:[Object(b.jsxs)("button",{className:"back",onClick:function(){n(-1)},children:[Object(b.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Back"]}),i?Object(b.jsx)(G,Object(m.a)({},i)):Object(b.jsx)("p",{children:"Cargando..."})]})})},q=Object(Y.a)((function(n,e){switch(e.type){case"SET_COUNTRY_LIST":return Object(m.a)(Object(m.a)({},n),{},{countryList:e.payload});case"SET_COUNTRY_BY_NAME":var t,r=[];if(""!==n.filterByRegion){if(t=n.countryFilteredByRegion,""===e.payload)return r=(t=n.countryList).filter((function(e){return e.region===n.filterByRegion})),Object(m.a)(Object(m.a)({},n),{},{countryListByName:t,countryFilteredByRegion:r})}else t=n.countryList;var c=t.filter((function(n){return n.name.common.toLowerCase().includes(e.payload.toLowerCase())}));return Object(m.a)(Object(m.a)({},n),{},{countryListByName:c});case"FILTER_BY_REGION":var i=e.payload.regionSelected,a=[];return""===i?Object(m.a)(Object(m.a)({},n),{},{countryFilteredByRegion:[],filterByRegion:""}):(a=n.countryListByName?n.countryListByName.filter((function(n){return n.region===i})):n.countryList.filter((function(n){return n.region===i})),Object(m.a)(Object(m.a)({},n),{},{countryFilteredByRegion:a,filterByRegion:i}));default:return n}}),{countryList:[],countryListByName:[],coutryFilteredByRegion:[],filterByRegion:""});var H=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],r=e[1],i=t?"is-dark-mode":"is-light-mode";return Object(c.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)")}),[]),Object(b.jsx)("main",{className:i,children:Object(b.jsx)(x.a,{store:q,children:Object(b.jsxs)(z.a,{children:[Object(b.jsx)(D,{darkMode:t,setDarkmode:r}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/country/:id",element:Object(b.jsx)(W,{})}),Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(F,{})})]})]})})})},K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),K()}},[[34,1,2]]]);
//# sourceMappingURL=main.7db7c1ee.chunk.js.map