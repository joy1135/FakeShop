(function(){"use strict";var a={4317:function(a,e,t){var r=t(5130),s=t(6768),n=t.p+"img/logo.60c176e5.png",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0klEQVR4nO3VTwqCQBTH8bmEkveIFhVE17GD1AGq6xhJu1a58Ay1bv8VYSAYnD+ib6jwB4JPefNhmCcq9UsBUuCurzQWmgAPPqmBLMZOKw1Wxn0aY6c1MOt4lomjyv4uE0fFcAJQMfx/A9yQT9kFR4n6JriM4F5t53xxNC2BVY/aTOEasLOtyzwSX92RowveCcK5C94Kwhvfb08KTqywbnwJwE8n6prsgXARAp8sze2nsu5Rh010yGQPSK58ARYC8NwLa/wAvEcA2zX2QeiUKWqkNGWirTSRNl3AAAAAAElFTkSuQmCC";const i={class:"header"},l={class:"header__container container"},o={class:"header__menu"},u={class:"header__menu-list"},d={class:"menu__item"},v={class:"menu__item"},p={class:"menu__item"};function _(a,e){const t=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",l,[e[3]||(e[3]=(0,s.Lk)("img",{src:n,alt:"",class:"header__logo"},null,-1)),(0,s.Lk)("nav",o,[(0,s.Lk)("ul",u,[(0,s.Lk)("li",d,[(0,s.bF)(t,{to:"/"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.Lk)("a",{href:"",class:"menu__link"},"Главная",-1)]))),_:1})]),(0,s.Lk)("li",v,[(0,s.bF)(t,{to:"/shop"},{default:(0,s.k6)((()=>e[1]||(e[1]=[(0,s.Lk)("a",{href:"",class:"menu__link"},"Товары",-1)]))),_:1})]),(0,s.Lk)("li",p,[(0,s.bF)(t,{to:"/basc"},{default:(0,s.k6)((()=>e[2]||(e[2]=[(0,s.Lk)("img",{src:c,alt:"",class:"menu__link--img"},null,-1)]))),_:1})])])])])])}var m=t(1241);const k={},A=(0,m.A)(k,[["render",_],["__scopeId","data-v-361be384"]]);var g=A,f={__name:"App",setup(a){return(a,e)=>{const t=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(g),(0,s.bF)(t)],64)}}};const h=f;var b=h,L=(t(8992),t(8872),t(144)),C=t(4232);const y=(0,L.Kh)({}),E=(0,L.Kh)([]);t(2577);const w={key:0,class:"basc-pr"},I={class:"basc-pr__img-block"},O=["src"],K={class:"basc-pr__info"},S={class:"basc-pr__name"},X={class:"basc-pr__count"},F={class:"basc-pr__sum"};var B={__name:"BascPr",props:{id:{type:Number},quantity:{type:Number}},emits:["remove"],setup(a,{emit:e}){const t=a,r=(0,s.EW)((()=>E.find((a=>a.id===t.id)))),n=(0,s.EW)((()=>(r.value.price*t.quantity).toFixed(2))),c=e,i=()=>{y[t.id]>1?y[t.id]--:delete y[t.id],localStorage.setItem("cart",JSON.stringify(y)),c("remove",t.id)};return(e,t)=>r.value?((0,s.uX)(),(0,s.CE)("div",w,[(0,s.Lk)("div",I,[(0,s.Lk)("img",{src:r.value.image,alt:"product image",class:"basc-pr__img"},null,8,O)]),(0,s.Lk)("div",K,[(0,s.Lk)("div",S,(0,C.v_)(r.value.title),1),(0,s.Lk)("div",X," Количество: "+(0,C.v_)(a.quantity),1),(0,s.Lk)("div",F," Сумма: "+(0,C.v_)(Math.round(100*n.value))+" ₽ ",1)]),(0,s.Lk)("button",{class:"basc-pr__del",onClick:i}," X ")])):(0,s.Q3)("",!0)}};const R=(0,m.A)(B,[["__scopeId","data-v-6d9bc366"]]);var N=R;const W={class:"bask"},M={class:"basc__cont container"},q={class:"basc__total"},J={class:"basc__sum"};var x={__name:"BascComp",setup(a){const e=(0,s.EW)((()=>E.reduce(((a,e)=>y[e.id]?a+e.price*y[e.id]:a),0)));return(a,t)=>((0,s.uX)(),(0,s.CE)("div",W,[(0,s.Lk)("div",M,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,L.R1)(y),((a,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e,class:"basc__cards"},[(0,s.bF)(N,{id:Number(e),quantity:a},null,8,["id","quantity"])])))),128)),(0,s.Lk)("div",q,[t[0]||(t[0]=(0,s.Lk)("div",{class:"basc__text"},"Итоговая сумма:",-1)),(0,s.Lk)("div",J,(0,C.v_)(Math.round(100*e.value)),1)])])]))}};const P=(0,m.A)(x,[["__scopeId","data-v-f3c3d38a"]]);var Q=P,V=t(1387);const U={class:"card-pr"},j={class:"card-pr__container container"},T={class:"card-pr__main"},Y={class:"card-pt__img-block"},z=["src"],G={class:"card-pr__info"},D={class:"card-pr__name"},Z={class:"card-pr__cat"},H={class:"card-pr__rate-num"},$={class:"pr-card__rate"},aa={class:"card-pr__rate-cou"},ea={class:"card-pr__price"},ta={class:"card-pr__foot"},ra={class:"card-pr__desc"},sa=5;var na={__name:"CardPr",setup(a){const e=(0,L.KR)({}),t=(0,V.lq)(),r=t.params.id;function n(a){y[a]||(y[a]=0),y[a]+=1}return fetch(`https://fakestoreapi.com/products/${r}`).then((a=>a.json())).then((a=>{e.value=a})),(0,s.sV)((()=>{const a=localStorage.getItem("cart");a&&Object.assign(y,JSON.parse(a))})),(0,s.wB)(y,(a=>{localStorage.setItem("cart",JSON.stringify(a))}),{deep:!0}),(a,t)=>((0,s.uX)(),(0,s.CE)("div",U,[(0,s.Lk)("div",j,[(0,s.Lk)("div",T,[(0,s.Lk)("div",Y,[(0,s.Lk)("img",{src:e.value.image,alt:"",class:"card-pr__img"},null,8,z)]),(0,s.Lk)("div",G,[(0,s.Lk)("div",D,(0,C.v_)(e.value.title),1),(0,s.Lk)("div",Z,(0,C.v_)(e.value.category),1),(0,s.Lk)("div",H,(0,C.v_)(e.value.rating?.rate),1),(0,s.Lk)("div",$,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(sa,(a=>(0,s.Lk)("span",{key:a,class:(0,C.C4)(["star",{filled:a<=Math.round(e.value.rating?.rate||0)}])}," ★ ",2))),64)),(0,s.Lk)("div",aa,(0,C.v_)(e.value.rating?.count+" отзывов"),1)]),(0,s.Lk)("div",ea,(0,C.v_)(100*e.value.price+"₽"),1),(0,s.Lk)("button",{class:"card-pr__btn",onClick:t[0]||(t[0]=a=>n(e.value.id))}," Купить ")])]),(0,s.Lk)("div",ta,[t[1]||(t[1]=(0,s.Lk)("div",{class:"card-pr__txt"}," О товаре ",-1)),(0,s.Lk)("div",ra,(0,C.v_)(e.value.description),1)])])]))}};const ca=(0,m.A)(na,[["__scopeId","data-v-35c6744d"]]);var ia=ca;const la={class:"main"};function oa(a,e){return(0,s.uX)(),(0,s.CE)("div",la,e[0]||(e[0]=[(0,s.Lk)("div",{class:"main__container container"},[(0,s.Lk)("div",{class:"main__title"}," Добро пожаловать в SHOP "),(0,s.Lk)("div",{class:"main__desc"}," Здесь вы найдете всё, что нужно для комфортной, стильной и современной жизни. Мы предлагаем только качественные товары, выгодные цены и удобный сервис, чтобы ваши покупки приносили радость. ")],-1)]))}const ua={},da=(0,m.A)(ua,[["render",oa]]);var va=da,pa=(t(4520),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVR4nO2WvU7DMBSF/RLIPidOxMgAE2zwAkhQ8RrQH56FsQIWRnZ+3qRF7KCytbDRCmQpVKhSnGubiAy90pWiyM6nc3N8fZVaR9sCQAGgT/IRwJjkh8vy2b3rkcz/DGitzUgOSc5JftXkAsCt1nozVeUJyXcBcDVnJDux0HOnIAL6W/0gRukiAbqEi5VnWWZ95QWwb4zZIzmRlj3Pc0rUXvs+BGDXrdNabwfAL+ughcC9EwcNhM9dJX3ggVDBm7V2p9yzBeBFsKdbCSb5EGCcIOUA7nyKnwNdK1YOYOxTPIs4Mkvlpdsr3a1aBwbwlFJqkq+etaNWmqvXgNKfPPUpzhtqIJ/eBlLCrxpomUMlvPgr3Q3gIPCSmBZFASUJY8yhcOKQXIvHIuhK304dBPoqJkh2IpvKlOSRSgljzAbJC+dMYWlvxP80YDLpkrx3XaicUlyOXHMgeVZ7ZNah/iG+AaWSKo6dKGgsAAAAAElFTkSuQmCC");const _a={class:"filter"},ma={class:"shop__filters"},ka=["value"];var Aa={__name:"FilterComp",props:{categories:{type:Array,required:!0},initialCategory:{type:String,default:""}},emits:["categoryChanged"],setup(a,{emit:e}){const t=a,n=e,c=(0,L.KR)(t.initialCategory),i=()=>{n("categoryChanged",c.value)};return(e,t)=>((0,s.uX)(),(0,s.CE)("div",_a,[(0,s.Lk)("div",ma,[t[2]||(t[2]=(0,s.Lk)("label",{for:"category"},"Фильтровать по категории:",-1)),(0,s.bo)((0,s.Lk)("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=a=>c.value=a),onChange:i},[t[1]||(t[1]=(0,s.Lk)("option",{value:""},"Все",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.categories,(a=>((0,s.uX)(),(0,s.CE)("option",{key:a,value:a},(0,C.v_)(a),9,ka)))),128))],544),[[r.u1,c.value]])])]))}};const ga=(0,m.A)(Aa,[["__scopeId","data-v-ee7c4b74"]]);var fa=ga;const ha={class:"pr-card"},ba={class:"pr-card__photo"},La=["src"],Ca={class:"pr-card__info"},ya={class:"pr-card__name"},Ea={class:"pr-card__rate"},wa={class:"pr-card__price"},Ia=5;var Oa={__name:"ProductCard",props:{urlImage:{type:String,default:""},name:{type:String,default:""},rate:{type:Number,default:0},price:{type:Number,default:0},id:{type:Number,default:0}},setup(a){function e(a){y[a]||(y[a]=0),y[a]+=1}return(0,s.sV)((()=>{const a=localStorage.getItem("cart");a&&Object.assign(y,JSON.parse(a))})),(0,s.wB)(y,(a=>{localStorage.setItem("cart",JSON.stringify(a))}),{deep:!0}),(t,r)=>{const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",ha,[(0,s.bF)(n,{to:`/card/${a.id}`},{default:(0,s.k6)((()=>[(0,s.Lk)("div",ba,[(0,s.Lk)("img",{src:a.urlImage,alt:"",class:"pr-card__img"},null,8,La)])])),_:1},8,["to"]),(0,s.Lk)("div",Ca,[(0,s.bF)(n,{to:`/card/${a.id}`},{default:(0,s.k6)((()=>[(0,s.Lk)("div",ya,(0,C.v_)(a.name),1),(0,s.Lk)("div",Ea,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(Ia,(e=>(0,s.Lk)("span",{key:e,class:(0,C.C4)(["star",{filled:e<=Math.round(a.rate||0)}])}," ★ ",2))),64))]),(0,s.Lk)("div",wa,(0,C.v_)(100*a.price+"₽"),1)])),_:1},8,["to"]),(0,s.Lk)("button",{class:"pr-card__btn",onClick:r[0]||(r[0]=t=>e(a.id))},"Купить")])])}}};const Ka=(0,m.A)(Oa,[["__scopeId","data-v-10c16f73"]]);var Sa=Ka;const Xa={class:"shop"},Fa={class:"shop__container container"},Ba={class:"shop__cards"},Ra={class:"shop__pagination"},Na=["disabled"],Wa={class:"pg__number"},Ma=["disabled"],qa=10;var Ja={__name:"ShopComp",setup(a){const e=(0,L.KR)([]),t=(0,L.KR)(""),r=["electronics","jewelery","men's clothing","women's clothing"];fetch("https://fakestoreapi.com/products").then((a=>a.json())).then((a=>{e.value=a,E.splice(0,E.length,...e.value)}));const n=a=>{t.value=a,i.value=1},c=(0,s.EW)((()=>t.value&&"All"!==t.value?e.value.filter((a=>a.category===t.value)):e.value)),i=(0,L.KR)(1),l=(0,s.EW)((()=>Math.ceil(c.value.length/qa))),o=(0,s.EW)((()=>{const a=(i.value-1)*qa,e=a+qa;return c.value.slice(a,e)})),u=()=>{i.value>1&&(i.value--,v())},d=()=>{i.value<l.value&&(i.value++,v())},v=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(a,e)=>((0,s.uX)(),(0,s.CE)("div",Xa,[(0,s.Lk)("div",Fa,[(0,s.bF)(fa,{categories:r,initialCategory:t.value,onCategoryChanged:n},null,8,["initialCategory"]),(0,s.Lk)("div",Ba,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.value,((a,e)=>((0,s.uX)(),(0,s.Wv)(Sa,{key:e,id:a.id,urlImage:a.image,name:a.title,rate:a.rating.rate,price:a.price},null,8,["id","urlImage","name","rate","price"])))),128))]),(0,s.Lk)("div",Ra,[(0,s.Lk)("img",{src:pa,alt:"",class:"sh-pg__arr",onClick:u,disabled:1===i.value},null,8,Na),(0,s.Lk)("span",Wa,(0,C.v_)(i.value)+" / "+(0,C.v_)(l.value),1),(0,s.Lk)("img",{src:pa,alt:"",class:"sh-pg__arr",onClick:d,disabled:i.value===l.value},null,8,Ma)])])]))}};const xa=(0,m.A)(Ja,[["__scopeId","data-v-52535a40"]]);var Pa=xa;const Qa=[{path:"/",name:"main",component:va},{path:"/shop",name:"shop",component:Pa},{path:"/card/:id",name:"card",component:ia},{path:"/basc",name:"basc",component:Q}],Va=(0,V.aE)({history:(0,V.LA)("/FakeShop/"),routes:Qa});var Ua=Va;(0,r.Ef)(b).use(Ua).mount("#app")}},e={};function t(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return a[r].call(n.exports,n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,r,s,n){if(!r){var c=1/0;for(u=0;u<a.length;u++){r=a[u][0],s=a[u][1],n=a[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||c>=n)&&Object.keys(t.O).every((function(a){return t.O[a](r[l])}))?r.splice(l--,1):(i=!1,n<c&&(c=n));if(i){a.splice(u--,1);var o=s();void 0!==o&&(e=o)}}return e}n=n||0;for(var u=a.length;u>0&&a[u-1][2]>n;u--)a[u]=a[u-1];a[u]=[r,s,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var r in e)t.o(e,r)&&!t.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/FakeShop/"}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,r){var s,n,c=r[0],i=r[1],l=r[2],o=0;if(c.some((function(e){return 0!==a[e]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(l)var u=l(t)}for(e&&e(r);o<c.length;o++)n=c[o],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(u)},r=self["webpackChunkshop"]=self["webpackChunkshop"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4317)}));r=t.O(r)})();
//# sourceMappingURL=app.a1727b8e.js.map