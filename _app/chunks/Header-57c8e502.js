import{S as a,i as s,s as e,e as r,t as i,k as l,c as t,a as c,g as o,d as n,n as h,b as v,H as d,f as b,I as f,J as m,K as u,L as p,M as g,x as E,r as j,u as A,w as V,N,O as S}from"./vendor-84bd5ead.js";import{p as k}from"./stores-28788c6b.js";function x(a){let s,e,p,g,E,j,A,V,N;return{c(){s=r("div"),e=r("div"),p=r("a"),g=i("Home"),E=l(),j=r("a"),A=i("Sobre nosotros"),this.h()},l(a){s=t(a,"DIV",{class:!0});var r=c(s);e=t(r,"DIV",{class:!0});var i=c(e);p=t(i,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var l=c(p);g=o(l,"Home"),l.forEach(n),E=h(i),j=t(i,"A",{class:!0,href:!0});var v=c(j);A=o(v,"Sobre nosotros"),v.forEach(n),i.forEach(n),r.forEach(n),this.h()},h(){v(p,"class","navbar-item"),v(p,"sveltekit:prefetch",""),v(p,"href","/"),d(p,"is-active","/"===a[2].path),v(j,"class","navbar-item"),v(j,"href","/sobre-nosotros"),d(j,"is-active","/sobre-nosotros"===a[2].path),v(e,"class","navbar-start"),v(s,"class","navbar-menu is-active svelte-1cjbm7e")},m(a,r){b(a,s,r),f(s,e),f(e,p),f(p,g),f(e,E),f(e,j),f(j,A),N=!0},p(a,s){4&s&&d(p,"is-active","/"===a[2].path),4&s&&d(j,"is-active","/sobre-nosotros"===a[2].path)},i(a){N||(m((()=>{V||(V=u(s,S,{},!0)),V.run(1)})),N=!0)},o(a){V||(V=u(s,S,{},!1)),V.run(0),N=!1},d(a){a&&n(s),a&&V&&V.end()}}}function H(a){let s,e,i,o,m,u,N,S,k,H,I,D,P,M,O,T,$,w=a[1]&&x(a);return{c(){s=r("header"),e=r("nav"),i=r("div"),o=r("button"),m=r("span"),u=l(),N=r("span"),S=l(),k=r("span"),H=l(),I=r("a"),D=r("img"),M=l(),w&&w.c(),this.h()},l(a){s=t(a,"HEADER",{});var r=c(s);e=t(r,"NAV",{class:!0,role:!0,"aria-label":!0});var l=c(e);i=t(l,"DIV",{class:!0});var v=c(i);o=t(v,"BUTTON",{class:!0,"aria-label":!0,"aria-expanded":!0});var d=c(o);m=t(d,"SPAN",{"aria-hidden":!0,class:!0}),c(m).forEach(n),u=h(d),N=t(d,"SPAN",{"aria-hidden":!0,class:!0}),c(N).forEach(n),S=h(d),k=t(d,"SPAN",{"aria-hidden":!0,class:!0}),c(k).forEach(n),d.forEach(n),H=h(v),I=t(v,"A",{class:!0,href:!0});var b=c(I);D=t(b,"IMG",{src:!0,id:!0,alt:!0,class:!0}),b.forEach(n),v.forEach(n),M=h(l),w&&w.l(l),l.forEach(n),r.forEach(n),this.h()},h(){v(m,"aria-hidden","true"),v(m,"class","svelte-1cjbm7e"),v(N,"aria-hidden","true"),v(N,"class","svelte-1cjbm7e"),v(k,"aria-hidden","true"),v(k,"class","svelte-1cjbm7e"),v(o,"class","navbar-burger svelte-1cjbm7e"),v(o,"aria-label","menu"),v(o,"aria-expanded","false"),d(o,"is-active",a[1]),p(D.src,P="/logo-merepresenta.svg")||v(D,"src","/logo-merepresenta.svg"),v(D,"id","logo"),v(D,"alt","logo"),v(D,"class","svelte-1cjbm7e"),v(I,"class","navbar-item"),v(I,"href","/"),d(I,"is-hidden",!a[0]),v(i,"class","navbar-brand left-burger svelte-1cjbm7e"),v(e,"class","navbar is-dark svelte-1cjbm7e"),v(e,"role","navigation"),v(e,"aria-label","main navigation")},m(r,l){b(r,s,l),f(s,e),f(e,i),f(i,o),f(o,m),f(o,u),f(o,N),f(o,S),f(o,k),f(i,H),f(i,I),f(I,D),f(e,M),w&&w.m(e,null),O=!0,T||($=g(o,"click",a[3]),T=!0)},p(a,[s]){2&s&&d(o,"is-active",a[1]),1&s&&d(I,"is-hidden",!a[0]),a[1]?w?(w.p(a,s),2&s&&E(w,1)):(w=x(a),w.c(),E(w,1),w.m(e,null)):w&&(j(),A(w,1,1,(()=>{w=null})),V())},i(a){O||(E(w),O=!0)},o(a){A(w),O=!1},d(a){a&&n(s),w&&w.d(),T=!1,$()}}}function I(a,s,e){let r;N(a,k,(a=>e(2,r=a)));let i=!1,{logoVisible:l=!0}=s;return a.$$set=a=>{"logoVisible"in a&&e(0,l=a.logoVisible)},[l,i,r,()=>e(1,i=!i)]}class D extends a{constructor(a){super(),s(this,a,I,H,e,{logoVisible:0})}}export{D as H};
