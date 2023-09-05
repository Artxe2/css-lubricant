import{s as se,f as _,g as v,h as p,d as h,j as c,i as N,r as ne,u as J,a as I,v as te,c as V,w as d,x as at,o as Ee,y as Se,e as oe,z as De,l as Ie,m as Ve,A as Te,B as Le,C as Me,n as He,D as Ue,E as nt,F as We,G as Fe,H as ct,p as Be,I as Re,J as ut,K as ht}from"../chunks/scheduler.751e6dae.js";import{S as le,i as re,g as ue,t as A,c as he,a as z,b as q,d as K,m as P,e as X,f as Ce}from"../chunks/index.91d8d602.js";import{b as M}from"../chunks/paths.1ac93f45.js";import{t as ve}from"../chunks/store.0a8a265b.js";import{e as me}from"../chunks/each.e59479a4.js";import{p as qe}from"../chunks/stores.f565ad4e.js";import{s as Ke}from"../chunks/styles.b585f6af.js";const dt=!0,gt=!0,hs=Object.freeze(Object.defineProperty({__proto__:null,prerender:dt,ssr:gt},Symbol.toStringTag,{value:"Module"}));function _t(n){let e,t,s,l;return{c(){e=_("button"),this.h()},l(a){e=v(a,"BUTTON",{class:!0}),p(e).forEach(h),this.h()},h(){c(e,"class",t="fixed t=0 l=0 w=100% h=100% bg=rgb(15,23,42,.4) "+(n[0]?`z=${n[1]}`:"none"))},m(a,r){N(a,e,r),s||(l=ne(e,"click",n[2]),s=!0)},p(a,[r]){r&3&&t!==(t="fixed t=0 l=0 w=100% h=100% bg=rgb(15,23,42,.4) "+(a[0]?`z=${a[1]}`:"none"))&&c(e,"class",t)},i:J,o:J,d(a){a&&h(e),s=!1,l()}}}function vt(n,e,t){let{is_open:s}=e,{z_level:l=0}=e;const a=()=>t(0,s=!1);return n.$$set=r=>{"is_open"in r&&t(0,s=r.is_open),"z_level"in r&&t(1,l=r.z_level)},[s,l,a]}class mt extends le{constructor(e){super(),re(this,e,vt,_t,se,{is_open:0,z_level:1})}}function bt(n){let e,t,s,l=`<svg class="absolute i=.25 w=2.5 h=2.5 t=0.25"><use xlink:href="${M}/icons.svg#dark-mode"></use></svg> <svg class="absolute i=.25 w=2.5 h=2.5 t=0.25 tt=opacity_.3s"><use xlink:href="${M}/icons.svg#dark-mode-fill"></use></svg>`,a,r,i,o,g=`<svg class="absolute i=.25 w=2.5 h=2.5 t=0.25"><use xlink:href="${M}/icons.svg#light-mode"></use></svg> <svg class="absolute i=.25 w=2.5 h=2.5 t=0.25 tt=opacity_.3s"><use xlink:href="${M}/icons.svg#light-mode-fill"></use></svg>`,u,f,m,k='<span class="fs=1.25">Switch theme</span>',E,D;return{c(){e=_("button"),t=_("div"),s=_("div"),s.innerHTML=l,a=I(),r=_("div"),i=I(),o=_("div"),o.innerHTML=g,f=I(),m=_("div"),m.innerHTML=k,this.h()},l(L){e=v(L,"BUTTON",{class:!0});var H=p(e);t=v(H,"DIV",{class:!0});var w=p(t);s=v(w,"DIV",{class:!0,"data-svelte-h":!0}),te(s)!=="svelte-19dv5e7"&&(s.innerHTML=l),a=V(w),r=v(w,"DIV",{class:!0}),p(r).forEach(h),i=V(w),o=v(w,"DIV",{class:!0,"data-svelte-h":!0}),te(o)!=="svelte-13xdv7p"&&(o.innerHTML=g),w.forEach(h),f=V(H),m=v(H,"DIV",{class:!0,"data-svelte-h":!0}),te(m)!=="svelte-1q4o859"&&(m.innerHTML=k),H.forEach(h),this.h()},h(){c(s,"class","relative w=3 h=3"),c(r,"class","h=10"),c(o,"class","relative w=3 h=3"),c(t,"class",u="flex column ai=center p=6_15 "+(n[1]?"tt=transform_cubic-bezier(.9,0,.45,1.35)_.6s":"")+" tf=translate(-13em,-6em)_rotate("+n[0]+"deg)"),c(m,"class","absolute t=0 l=4 ai=center flex h=3"),c(e,"class","relative w=14 h=3 br=1.75 ol=.1_solid o=hidden _svg/f=currentcolor :not(:hover)>div>div>svg:nth-of-type(even)/op=0 :hover/c=--gray-20 @dark@:hover/c=--gray-90 :hover/bg=--gray-80 @dark@:hover/bg=--gray-40")},m(L,H){N(L,e,H),d(e,t),d(t,s),d(t,a),d(t,r),d(t,i),d(t,o),d(e,f),d(e,m),E||(D=ne(e,"click",n[2]),E=!0)},p(L,[H]){H&3&&u!==(u="flex column ai=center p=6_15 "+(L[1]?"tt=transform_cubic-bezier(.9,0,.45,1.35)_.6s":"")+" tf=translate(-13em,-6em)_rotate("+L[0]+"deg)")&&c(t,"class",u)},i:J,o:J,d(L){L&&h(e),E=!1,D()}}}function pt(n,e,t){let s;at(n,ve,i=>t(3,s=i));let l=-180,a;const r=()=>{t(0,l-=180),Se(ve,s=s=="DARK"?"LIGHT":"DARK",s),localStorage.setItem("THEME",s),cssLube()};return Ee(()=>{let i=localStorage.getItem("THEME")||"";!i&&(matchMedia!=null&&matchMedia("(prefers-color-scheme: dark)").matches)&&(i="DARK",localStorage.setItem("THEME","DARK")),Se(ve,s=i,s),i=="DARK"&&t(0,l=0),setTimeout(()=>t(1,a=!0),50)}),[l,a,r]}class $t extends le{constructor(e){super(),re(this,e,pt,bt,se,{})}}function Je(n,e,t){const s=n.slice();return s[2]=e[t],s}function kt(n){let e,t,s,l,a,r,i,o;const g=n[6].default,u=De(g,n,n[5],null);return{c(){e=_("a"),t=_("button"),u&&u.c(),s=I(),l=_("span"),a=Ie(n[2]),this.h()},l(f){e=v(f,"A",{href:!0});var m=p(e);t=v(m,"BUTTON",{class:!0});var k=p(t);u&&u.l(k),s=V(k),l=v(k,"SPAN",{class:!0});var E=p(l);a=Ve(E,n[2]),E.forEach(h),k.forEach(h),m.forEach(h),this.h()},h(){c(l,"class","fs=1.5"),c(t,"class",r="w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25 :hover/bg=--gray-70 @dark@:hover/bg=--gray-40 "+(n[4]?"bg=--primary-50!! c=--primary-90!!":"")+" "+n[1]),c(e,"href",i=n[0].href)},m(f,m){N(f,e,m),d(e,t),u&&u.m(t,null),d(t,s),d(t,l),d(l,a),o=!0},p(f,m){u&&u.p&&(!o||m&32)&&Te(u,g,f,f[5],o?Me(g,f[5],m,null):Le(f[5]),null),(!o||m&4)&&He(a,f[2]),(!o||m&18&&r!==(r="w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25 :hover/bg=--gray-70 @dark@:hover/bg=--gray-40 "+(f[4]?"bg=--primary-50!! c=--primary-90!!":"")+" "+f[1]))&&c(t,"class",r),(!o||m&1&&i!==(i=f[0].href))&&c(e,"href",i)},i(f){o||(z(u,f),o=!0)},o(f){A(u,f),o=!1},d(f){f&&h(e),u&&u.d(f)}}}function wt(n){let e,t,s,l,a,r,i,o,g,u,f,m,k,E,D,L,H;const w=n[6].default,R=De(w,n,n[5],null);let $=n[0].childs&&Qe(n);return{c(){e=_("button"),R&&R.c(),t=I(),s=_("span"),l=Ie(n[2]),a=I(),r=_("div"),o=I(),g=_("div"),m=I(),k=_("ul"),$&&$.c(),this.h()},l(b){e=v(b,"BUTTON",{class:!0});var y=p(e);R&&R.l(y),t=V(y),s=v(y,"SPAN",{class:!0});var O=p(s);l=Ve(O,n[2]),O.forEach(h),a=V(y),r=v(y,"DIV",{class:!0}),p(r).forEach(h),o=V(y),g=v(y,"DIV",{class:!0}),p(g).forEach(h),y.forEach(h),m=V(b),k=v(b,"UL",{class:!0});var Y=p(k);$&&$.l(Y),Y.forEach(h),this.h()},h(){c(s,"class","fs=1.5"),c(r,"class",i="absolute b=50% r=1 h=.75 w=.25 br=.125 tt=transform_.3s tfo=bottom tf=rotate("+(n[3]?"-135deg":"-45deg")+")_translateY(.1em) bg=--gray-30 @dark@bg=--gray-70 "+(n[4]?"bg=--primary-90!":"")),c(g,"class",u="absolute b=50% r=1 h=.75 w=.25 br=.125 tt=transform_.3s tfo=bottom tf=rotate("+(n[3]?"135deg":"45deg")+")_translateY(.1em) bg=--gray-30 @dark@bg=--gray-70 "+(n[4]?"bg=--primary-90!":"")),c(e,"class",f="relative w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25 :hover/bg=--gray-70 @dark@:hover/bg=--gray-40 "+(n[4]?"bg=--primary-50!! c=--primary-90!!":"")+" "+n[1]),c(k,"class",E="ml=1 o=hidden "+(n[3]?"":"h=0"))},m(b,y){N(b,e,y),R&&R.m(e,null),d(e,t),d(e,s),d(s,l),d(e,a),d(e,r),d(e,o),d(e,g),N(b,m,y),N(b,k,y),$&&$.m(k,null),D=!0,L||(H=ne(e,"click",n[7]),L=!0)},p(b,y){R&&R.p&&(!D||y&32)&&Te(R,w,b,b[5],D?Me(w,b[5],y,null):Le(b[5]),null),(!D||y&4)&&He(l,b[2]),(!D||y&24&&i!==(i="absolute b=50% r=1 h=.75 w=.25 br=.125 tt=transform_.3s tfo=bottom tf=rotate("+(b[3]?"-135deg":"-45deg")+")_translateY(.1em) bg=--gray-30 @dark@bg=--gray-70 "+(b[4]?"bg=--primary-90!":"")))&&c(r,"class",i),(!D||y&24&&u!==(u="absolute b=50% r=1 h=.75 w=.25 br=.125 tt=transform_.3s tfo=bottom tf=rotate("+(b[3]?"135deg":"45deg")+")_translateY(.1em) bg=--gray-30 @dark@bg=--gray-70 "+(b[4]?"bg=--primary-90!":"")))&&c(g,"class",u),(!D||y&18&&f!==(f="relative w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25 :hover/bg=--gray-70 @dark@:hover/bg=--gray-40 "+(b[4]?"bg=--primary-50!! c=--primary-90!!":"")+" "+b[1]))&&c(e,"class",f),b[0].childs?$?($.p(b,y),y&1&&z($,1)):($=Qe(b),$.c(),z($,1),$.m(k,null)):$&&(ue(),A($,1,1,()=>{$=null}),he()),(!D||y&8&&E!==(E="ml=1 o=hidden "+(b[3]?"":"h=0")))&&c(k,"class",E)},i(b){D||(z(R,b),z($),D=!0)},o(b){A(R,b),A($),D=!1},d(b){b&&(h(e),h(m),h(k)),R&&R.d(b),$&&$.d(),L=!1,H()}}}function Qe(n){let e,t,s=me(Object.keys(n[0].childs)),l=[];for(let r=0;r<s.length;r+=1)l[r]=Ze(Je(n,s,r));const a=r=>A(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=oe()},l(r){for(let i=0;i<l.length;i+=1)l[i].l(r);e=oe()},m(r,i){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,i);N(r,e,i),t=!0},p(r,i){if(i&1){s=me(Object.keys(r[0].childs));let o;for(o=0;o<s.length;o+=1){const g=Je(r,s,o);l[o]?(l[o].p(g,i),z(l[o],1)):(l[o]=Ze(g),l[o].c(),z(l[o],1),l[o].m(e.parentNode,e))}for(ue(),o=s.length;o<l.length;o+=1)a(o);he()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)z(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)A(l[i]);t=!1},d(r){r&&h(e),Ue(l,r)}}}function Ze(n){let e,t,s,l;return t=new ye({props:{text:n[2],data:n[0].childs[n[2]]}}),{c(){e=_("li"),q(t.$$.fragment),s=I()},l(a){e=v(a,"LI",{});var r=p(e);K(t.$$.fragment,r),s=V(r),r.forEach(h)},m(a,r){N(a,e,r),P(t,e,null),d(e,s),l=!0},p(a,r){const i={};r&1&&(i.text=a[2]),r&1&&(i.data=a[0].childs[a[2]]),t.$set(i)},i(a){l||(z(t.$$.fragment,a),l=!0)},o(a){A(t.$$.fragment,a),l=!1},d(a){a&&h(e),X(t)}}}function yt(n){let e,t,s,l;const a=[wt,kt],r=[];function i(o,g){return"childs"in o[0]?0:1}return e=i(n),t=r[e]=a[e](n),{c(){t.c(),s=oe()},l(o){t.l(o),s=oe()},m(o,g){r[e].m(o,g),N(o,s,g),l=!0},p(o,[g]){let u=e;e=i(o),e===u?r[e].p(o,g):(ue(),A(r[u],1,1,()=>{r[u]=null}),he(),t=r[e],t?t.p(o,g):(t=r[e]=a[e](o),t.c()),z(t,1),t.m(s.parentNode,s))},i(o){l||(z(t),l=!0)},o(o){A(t),l=!1},d(o){o&&h(s),r[e].d(o)}}}function Et(n,e,t){let{$$slots:s={},$$scope:l}=e,{text:a}=e,{data:r}=e,{classs:i=""}=e,o,g;"href"in r&&Ee(()=>{qe.subscribe(()=>{t(4,g=r.href==M+"/"?location.pathname==r.href||location.pathname+"/"==r.href:location.pathname.startsWith(r.href))})});const u=()=>t(3,o=!o);return n.$$set=f=>{"text"in f&&t(2,a=f.text),"data"in f&&t(0,r=f.data),"classs"in f&&t(1,i=f.classs),"$$scope"in f&&t(5,l=f.$$scope)},[r,i,a,o,g,l,s,u]}let ye=class extends le{constructor(e){super(),re(this,e,Et,yt,se,{text:2,data:0,classs:1})}};const _e={Home:{href:M+"/"},Documents:{href:M+"/docs",childs:{"Getting Started":{href:M+"/docs/start"},Syntax:{href:M+"/docs/syntax"}}},REPl:{href:M+"/repl"},Reference:{href:M+"/ref",childs:{Customizing:{href:M+"/ref/custom"},Benchmark:{href:M+"/ref/benchmark"},"Useful Tips":{href:M+"/ref/tips"},Utils:{href:M+"/ref/utils",childs:{"Carousel Slider":{href:M+"/ref/utils/carousel-slider"},"Drag and Drop":{href:M+"/ref/utils/drag-and-drop"},"Infinite Scroll":{href:M+"/ref/utils/infinite-scroll"}}},Animations:{href:M+"/ref/animation",childs:{"Loading Circle":{href:M+"/ref/animation/loading-circle"},"Text Animation":{href:M+"/ref/animation/text-animation"}}}}}};function Dt(n){let e,t;return{c(){e=_("img"),this.h()},l(s){e=v(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){nt(e.src,t=M+"/favicon.png")||c(e,"src",t),c(e,"alt","logo"),c(e,"class","icon w=1.7 pb=.2 mr=.5")},m(s,l){N(s,e,l)},p:J,d(s){s&&h(e)}}}function It(n){let e,t=`<svg class="absolute w=1.5 h=1.5"><use xlink:href="${M}/icons.svg#library-books"></use></svg> <svg class="absolute w=1.5 h=1.5"><use xlink:href="${M}/icons.svg#library-books-fill"></use></svg>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1busvyx"&&(e.innerHTML=t),this.h()},h(){c(e,"class","icon relative inline-block w=1.5 h=1.3 mr=.5")},m(s,l){N(s,e,l)},p:J,d(s){s&&h(e)}}}function Vt(n){let e,t;return{c(){e=We("svg"),t=We("use"),this.h()},l(s){e=Fe(s,"svg",{class:!0});var l=p(e);t=Fe(l,"use",{"xlink:href":!0}),p(t).forEach(h),l.forEach(h),this.h()},h(){ct(t,"xlink:href",M+"/icons.svg#code"),c(e,"class","icon w=2 h=2 m=0_-.25 lh=1.7 mr=.25")},m(s,l){N(s,e,l),d(e,t)},p:J,d(s){s&&h(e)}}}function Tt(n){let e,t=`<svg class="absolute w=1.5 h=1.5"><use xlink:href="${M}/icons.svg#quick-reference"></use></svg> <svg class="absolute w=1.5 h=1.5"><use xlink:href="${M}/icons.svg#quick-reference-fill"></use></svg>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-kfp2ad"&&(e.innerHTML=t),this.h()},h(){c(e,"class","icon relative inline-block w=1.5 h=1.3 mr=.5")},m(s,l){N(s,e,l)},p:J,d(s){s&&h(e)}}}function Lt(n){let e,t,s,l,a,r,i,o,g,u,f,m,k,E,D,L,H,w,R=`<svg class="w=2.2 h=2.2 f=--gray-10"><use xlink:href="${M}/icons.svg#github"></use></svg>`,$,b,y,O,Y,Q,W,ae,Z,x;return r=new ye({props:{classs:":hover_.icon/tf=scale(1.2)",text:"Home",data:_e.Home,$$slots:{default:[Dt]},$$scope:{ctx:n}}}),o=new ye({props:{classs:`:not(:hover)_.icon>svg:nth-of-type(even)/op=0\r
					:hover_.icon>svg:nth-of-type(odd)/op=0`,text:"Documents",data:_e.Documents,$$slots:{default:[It]},$$scope:{ctx:n}}}),u=new ye({props:{classs:":hover_.icon/tf=scale(1.2)",text:"REPl",data:_e.REPl,$$slots:{default:[Vt]},$$scope:{ctx:n}}}),m=new ye({props:{classs:`:not(:hover)_.icon>svg:nth-of-type(even)/op=0\r
					:hover_.icon>svg:nth-of-type(odd)/op=0`,text:"Reference",data:_e.Reference,$$slots:{default:[Tt]},$$scope:{ctx:n}}}),O=new $t({}),{c(){e=_("nav"),t=_("div"),s=_("div"),l=I(),a=_("div"),q(r.$$.fragment),i=I(),q(o.$$.fragment),g=I(),q(u.$$.fragment),f=I(),q(m.$$.fragment),k=I(),E=_("div"),D=I(),L=_("div"),H=_("div"),w=_("a"),w.innerHTML=R,$=I(),b=_("div"),y=I(),q(O.$$.fragment),Y=I(),Q=_("div"),ae=I(),Z=_("div"),this.h()},l(C){e=v(C,"NAV",{class:!0});var T=p(e);t=v(T,"DIV",{class:!0});var S=p(t);s=v(S,"DIV",{class:!0}),p(s).forEach(h),l=V(S),a=v(S,"DIV",{class:!0});var U=p(a);K(r.$$.fragment,U),i=V(U),K(o.$$.fragment,U),g=V(U),K(u.$$.fragment,U),f=V(U),K(m.$$.fragment,U),U.forEach(h),k=V(S),E=v(S,"DIV",{class:!0}),p(E).forEach(h),D=V(S),L=v(S,"DIV",{class:!0});var G=p(L);H=v(G,"DIV",{class:!0});var ee=p(H);w=v(ee,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),te(w)!=="svelte-99qqun"&&(w.innerHTML=R),$=V(ee),b=v(ee,"DIV",{class:!0}),p(b).forEach(h),y=V(ee),K(O.$$.fragment,ee),ee.forEach(h),G.forEach(h),Y=V(S),Q=v(S,"DIV",{class:!0}),p(Q).forEach(h),S.forEach(h),T.forEach(h),ae=V(C),Z=v(C,"DIV",{class:!0}),p(Z).forEach(h),this.h()},h(){c(s,"class","h=5"),c(a,"class","flex column p=.5 fg=1"),c(E,"class","h=7"),c(w,"href","https://github.com/Artxe2/css-lube"),c(w,"target","_blank"),c(w,"class","flex ai=center fs=1.5 :hover_svg/f=#000 @dark@:hover_svg/f=#fff"),c(b,"class","w=1"),c(H,"class","flex ai=center"),c(L,"class","flex w=100% jc=center"),c(Q,"class","h=1"),c(t,"class","h=100% oy=auto flex column "+Ke.scrollbar.primary),c(e,"class",W="z=2 fixed t=0 l=-30 w=30 pl=10 h=100% br=0_1_1_0 tt=transform_.3s o=auto c=--gray-30 @dark@c=--gray-70 bg=--gray-90 @dark@bg=--gray-30 _svg/f=--gray-10 @dark@_svg/f=--gray-70 "+(n[0]?"tf=translateX(20em)":"")),c(Z,"class","w=4 @!lg@none")},m(C,T){N(C,e,T),d(e,t),d(t,s),d(t,l),d(t,a),P(r,a,null),d(a,i),P(o,a,null),d(a,g),P(u,a,null),d(a,f),P(m,a,null),d(t,k),d(t,E),d(t,D),d(t,L),d(L,H),d(H,w),d(H,$),d(H,b),d(H,y),P(O,H,null),d(t,Y),d(t,Q),N(C,ae,T),N(C,Z,T),x=!0},p(C,[T]){const S={};T&2&&(S.$$scope={dirty:T,ctx:C}),r.$set(S);const U={};T&2&&(U.$$scope={dirty:T,ctx:C}),o.$set(U);const G={};T&2&&(G.$$scope={dirty:T,ctx:C}),u.$set(G);const ee={};T&2&&(ee.$$scope={dirty:T,ctx:C}),m.$set(ee),(!x||T&1&&W!==(W="z=2 fixed t=0 l=-30 w=30 pl=10 h=100% br=0_1_1_0 tt=transform_.3s o=auto c=--gray-30 @dark@c=--gray-70 bg=--gray-90 @dark@bg=--gray-30 _svg/f=--gray-10 @dark@_svg/f=--gray-70 "+(C[0]?"tf=translateX(20em)":"")))&&c(e,"class",W)},i(C){x||(z(r.$$.fragment,C),z(o.$$.fragment,C),z(u.$$.fragment,C),z(m.$$.fragment,C),z(O.$$.fragment,C),x=!0)},o(C){A(r.$$.fragment,C),A(o.$$.fragment,C),A(u.$$.fragment,C),A(m.$$.fragment,C),A(O.$$.fragment,C),x=!1},d(C){C&&(h(e),h(ae),h(Z)),X(r),X(o),X(u),X(m),X(O)}}}function Mt(n,e,t){let{is_open:s}=e;return n.$$set=l=>{"is_open"in l&&t(0,s=l.is_open)},[s]}let Ht=class extends le{constructor(e){super(),re(this,e,Mt,Lt,se,{is_open:0})}};function zt(n){let e,t,s=`<div class="w=4.5"></div> <a href="${M}/"><div class="flex ai=center p=.2_.5 br=1.75 :hover/bg=--gray-90 @dark@:hover/bg=--gray-30 :hover&gt;img/tf=scale(1.2,1.2)"><img src="${M}/favicon.png" alt="logo" class="inline-block w=2 h=2"/> <span class="fs=2 bold">CSS Lube</span> <div class="w=1"></div></div></a>`,l,a,r,i,o,g,u,f,m,k,E,D,L,H,w,R,$,b,y,O,Y,Q,W;function ae(T){n[1](T)}let Z={};n[0]!==void 0&&(Z.is_open=n[0]),a=new mt({props:Z}),Be.push(()=>Ce(a,"is_open",ae));function x(T){n[2](T)}let C={};return n[0]!==void 0&&(C.is_open=n[0]),o=new Ht({props:C}),Be.push(()=>Ce(o,"is_open",x)),{c(){e=_("nav"),t=_("div"),t.innerHTML=s,l=I(),q(a.$$.fragment),i=I(),q(o.$$.fragment),u=I(),f=_("button"),m=_("div"),k=_("div"),D=I(),L=_("div"),w=I(),R=_("div"),y=I(),O=_("div"),this.h()},l(T){e=v(T,"NAV",{class:!0});var S=p(e);t=v(S,"DIV",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-134ckuw"&&(t.innerHTML=s),l=V(S),K(a.$$.fragment,S),i=V(S),K(o.$$.fragment,S),u=V(S),f=v(S,"BUTTON",{class:!0});var U=p(f);m=v(U,"DIV",{class:!0});var G=p(m);k=v(G,"DIV",{class:!0}),p(k).forEach(h),D=V(G),L=v(G,"DIV",{class:!0}),p(L).forEach(h),w=V(G),R=v(G,"DIV",{class:!0}),p(R).forEach(h),G.forEach(h),U.forEach(h),S.forEach(h),y=V(T),O=v(T,"DIV",{class:!0}),p(O).forEach(h),this.h()},h(){c(t,"class","flex h=5 ai=center bg=--gray-95 @dark@bg=--gray-20"),c(k,"class",E="absolute w=100% h=.3 t=0 tt=transform_.4s br=.15 bg=--gray-30 @dark@bg=--gray-70 "+(n[0]?"tf=translateY(.75em)_rotate(-45deg)":"")),c(L,"class",H="absolute w=100% h=.3 t=.75 tt=transform_.4s_linear,opacity_.4s br=.15 bg=--gray-30 @dark@bg=--gray-70 "+(n[0]?"tf=translateX(2.5em) op=0":"")),c(R,"class",$="absolute w=100% h=.3 b=0 tt=transform_.4s br=.15 bg=--gray-30 @dark@bg=--gray-70 "+(n[0]?"tf=translateY(-.75em)_rotate(45deg)":"")),c(m,"class","relative w=2 h=1.8"),c(f,"class",b="z=3 fixed t=.6 l=.5 p=1 br=2.5 :hover/bg=--gray-"+(n[0]?"80":"90")+" @dark@:hover/bg=--gray-"+(n[0]?"40":"30")),c(e,"class","z=9000 fixed t=0 l=0 w=100% c=--gray-30 @dark@c=--gray-70 @lg@v=hidden"),c(O,"class","h=5 @lg@none")},m(T,S){N(T,e,S),d(e,t),d(e,l),P(a,e,null),d(e,i),P(o,e,null),d(e,u),d(e,f),d(f,m),d(m,k),d(m,D),d(m,L),d(m,w),d(m,R),N(T,y,S),N(T,O,S),Y=!0,Q||(W=ne(f,"click",n[3]),Q=!0)},p(T,[S]){const U={};!r&&S&1&&(r=!0,U.is_open=T[0],Re(()=>r=!1)),a.$set(U);const G={};!g&&S&1&&(g=!0,G.is_open=T[0],Re(()=>g=!1)),o.$set(G),(!Y||S&1&&E!==(E="absolute w=100% h=.3 t=0 tt=transform_.4s br=.15 bg=--gray-30 @dark@bg=--gray-70 "+(T[0]?"tf=translateY(.75em)_rotate(-45deg)":"")))&&c(k,"class",E),(!Y||S&1&&H!==(H="absolute w=100% h=.3 t=.75 tt=transform_.4s_linear,opacity_.4s br=.15 bg=--gray-30 @dark@bg=--gray-70 "+(T[0]?"tf=translateX(2.5em) op=0":"")))&&c(L,"class",H),(!Y||S&1&&$!==($="absolute w=100% h=.3 b=0 tt=transform_.4s br=.15 bg=--gray-30 @dark@bg=--gray-70 "+(T[0]?"tf=translateY(-.75em)_rotate(45deg)":"")))&&c(R,"class",$),(!Y||S&1&&b!==(b="z=3 fixed t=.6 l=.5 p=1 br=2.5 :hover/bg=--gray-"+(T[0]?"80":"90")+" @dark@:hover/bg=--gray-"+(T[0]?"40":"30")))&&c(f,"class",b)},i(T){Y||(z(a.$$.fragment,T),z(o.$$.fragment,T),Y=!0)},o(T){A(a.$$.fragment,T),A(o.$$.fragment,T),Y=!1},d(T){T&&(h(e),h(y),h(O)),X(a),X(o),Q=!1,W()}}}function At(n,e,t){let s;function l(i){s=i,t(0,s)}function a(i){s=i,t(0,s)}return[s,l,a,()=>t(0,s=!s)]}class Nt extends le{constructor(e){super(),re(this,e,At,zt,se,{})}}function St(n){let e,t,s,l,a,r,i,o,g,u,f,m;const k=n[6].default,E=De(k,n,n[5],null);return{c(){e=_("a"),t=_("div"),s=_("div"),a=I(),E&&E.c(),r=I(),i=_("span"),o=Ie(n[1]),this.h()},l(D){e=v(D,"A",{href:!0,class:!0});var L=p(e);t=v(L,"DIV",{class:!0});var H=p(t);s=v(H,"DIV",{class:!0}),p(s).forEach(h),a=V(H),E&&E.l(H),H.forEach(h),r=V(L),i=v(L,"SPAN",{class:!0});var w=p(i);o=Ve(w,n[1]),w.forEach(h),L.forEach(h),this.h()},h(){c(s,"class",l="absolute bg=--primary-50 w=3 h=1.5 br=.75 "+(n[3]?"tt=transform_.3s":"")+" "+(n[4]?"":"tf=rotateY(90deg)")),c(t,"class","relative flex jc=center ai=center w=3 h=1.5 br=.75"),c(i,"class","fs=.6"),c(e,"href",n[0]),c(e,"class",g="flex column ai=center :hover/bold :hover/c=--gray-10 @dark@:hover/c=--gray-80 :hover>div/bg=--gray-80 @dark@:hover>div/bg=--gray-30 "+(n[3]?"c=--primary-50!! _svg/f=--primary-90":"")+" "+n[2])},m(D,L){N(D,e,L),d(e,t),d(t,s),d(t,a),E&&E.m(t,null),d(e,r),d(e,i),d(i,o),u=!0,f||(m=ne(e,"mouseenter",n[7]),f=!0)},p(D,[L]){(!u||L&24&&l!==(l="absolute bg=--primary-50 w=3 h=1.5 br=.75 "+(D[3]?"tt=transform_.3s":"")+" "+(D[4]?"":"tf=rotateY(90deg)")))&&c(s,"class",l),E&&E.p&&(!u||L&32)&&Te(E,k,D,D[5],u?Me(k,D[5],L,null):Le(D[5]),null),(!u||L&2)&&He(o,D[1]),(!u||L&1)&&c(e,"href",D[0]),(!u||L&12&&g!==(g="flex column ai=center :hover/bold :hover/c=--gray-10 @dark@:hover/c=--gray-80 :hover>div/bg=--gray-80 @dark@:hover>div/bg=--gray-30 "+(D[3]?"c=--primary-50!! _svg/f=--primary-90":"")+" "+D[2]))&&c(e,"class",g)},i(D){u||(z(E,D),u=!0)},o(D){A(E,D),u=!1},d(D){D&&h(e),E&&E.d(D),f=!1,m()}}}function Bt(n,e,t){let{$$slots:s={},$$scope:l}=e,{href:a}=e,{text:r}=e,{classs:i=""}=e,o,g;Ee(()=>{qe.subscribe(()=>{t(3,o=a==M+"/"?location.pathname==a||location.pathname+"/"==a:location.pathname.startsWith(a)),o!=g&&setTimeout(()=>t(4,g=o),50)})});function u(f){ut.call(this,n,f)}return n.$$set=f=>{"href"in f&&t(0,a=f.href),"text"in f&&t(1,r=f.text),"classs"in f&&t(2,i=f.classs),"$$scope"in f&&t(5,l=f.$$scope)},[a,r,i,o,g,l,s,u]}let Ne=class extends le{constructor(e){super(),re(this,e,Bt,St,se,{href:0,text:1,classs:2})}};function xe(n,e,t){const s=n.slice();return s[1]=e[t],s}function Rt(n){let e,t,s,l,a;return{c(){e=_("a"),t=_("button"),s=Ie(n[1]),this.h()},l(r){e=v(r,"A",{href:!0});var i=p(e);t=v(i,"BUTTON",{class:!0});var o=p(t);s=Ve(o,n[1]),o.forEach(h),i.forEach(h),this.h()},h(){c(t,"class",l="w=100% h=2.5 br=1.25 pl=1 ta=left mb=.25 :hover/bg=--gray-80 @dark@:hover/bg=--gray-30 "+(n[3]?"bg=--primary-50!! c=--primary-90!!":"")),c(e,"href",a=n[0].href)},m(r,i){N(r,e,i),d(e,t),d(t,s)},p(r,i){i&2&&He(s,r[1]),i&8&&l!==(l="w=100% h=2.5 br=1.25 pl=1 ta=left mb=.25 :hover/bg=--gray-80 @dark@:hover/bg=--gray-30 "+(r[3]?"bg=--primary-50!! c=--primary-90!!":""))&&c(t,"class",l),i&1&&a!==(a=r[0].href)&&c(e,"href",a)},i:J,o:J,d(r){r&&h(e)}}}function Ct(n){let e,t,s,l,a,r,i,o,g,u,f,m,k,E,D,L,H=me(Object.keys(n[0].childs)),w=[];for(let $=0;$<H.length;$+=1)w[$]=et(xe(n,H,$));const R=$=>A(w[$],1,1,()=>{w[$]=null});return{c(){e=_("button"),t=_("span"),s=Ie(n[1]),l=I(),a=_("div"),i=I(),o=_("div"),f=I(),m=_("ul");for(let $=0;$<w.length;$+=1)w[$].c();this.h()},l($){e=v($,"BUTTON",{class:!0});var b=p(e);t=v(b,"SPAN",{});var y=p(t);s=Ve(y,n[1]),y.forEach(h),l=V(b),a=v(b,"DIV",{class:!0}),p(a).forEach(h),i=V(b),o=v(b,"DIV",{class:!0}),p(o).forEach(h),b.forEach(h),f=V($),m=v($,"UL",{class:!0});var O=p(m);for(let Y=0;Y<w.length;Y+=1)w[Y].l(O);O.forEach(h),this.h()},h(){c(a,"class",r="absolute b=50% r=1 h=.5 w=.15 br=.1 tt=transform_.3s tfo=bottom tf=rotate("+(n[2]?"-135deg":"-45deg")+")_translateY(.05em) bg=--gray-30 @dark@bg=--gray-70 "+(n[3]?"bg=--primary-90!":"")),c(o,"class",g="absolute b=50% r=1 h=.5 w=.15 br=.1 tt=transform_.3s tfo=bottom tf=rotate("+(n[2]?"135deg":"45deg")+")_translateY(.05em) bg=--gray-30 @dark@bg=--gray-70 "+(n[3]?"bg=--primary-90!":"")),c(e,"class",u="relative w=100% h=2.5 br=1.25 pl=1 ta=left mb=.25 :hover/bg=--gray-80 @dark@:hover/bg=--gray-30 "+(n[3]?"bg=--primary-50!! c=--primary-90!!":"")),c(m,"class",k="ml=1 o=hidden tt=height_.3s h="+(n[2]?Object.keys(n[0].childs).length*2.75:0))},m($,b){N($,e,b),d(e,t),d(t,s),d(e,l),d(e,a),d(e,i),d(e,o),N($,f,b),N($,m,b);for(let y=0;y<w.length;y+=1)w[y]&&w[y].m(m,null);E=!0,D||(L=ne(e,"click",n[4]),D=!0)},p($,b){if((!E||b&2)&&He(s,$[1]),(!E||b&12&&r!==(r="absolute b=50% r=1 h=.5 w=.15 br=.1 tt=transform_.3s tfo=bottom tf=rotate("+($[2]?"-135deg":"-45deg")+")_translateY(.05em) bg=--gray-30 @dark@bg=--gray-70 "+($[3]?"bg=--primary-90!":"")))&&c(a,"class",r),(!E||b&12&&g!==(g="absolute b=50% r=1 h=.5 w=.15 br=.1 tt=transform_.3s tfo=bottom tf=rotate("+($[2]?"135deg":"45deg")+")_translateY(.05em) bg=--gray-30 @dark@bg=--gray-70 "+($[3]?"bg=--primary-90!":"")))&&c(o,"class",g),(!E||b&8&&u!==(u="relative w=100% h=2.5 br=1.25 pl=1 ta=left mb=.25 :hover/bg=--gray-80 @dark@:hover/bg=--gray-30 "+($[3]?"bg=--primary-50!! c=--primary-90!!":"")))&&c(e,"class",u),b&1){H=me(Object.keys($[0].childs));let y;for(y=0;y<H.length;y+=1){const O=xe($,H,y);w[y]?(w[y].p(O,b),z(w[y],1)):(w[y]=et(O),w[y].c(),z(w[y],1),w[y].m(m,null))}for(ue(),y=H.length;y<w.length;y+=1)R(y);he()}(!E||b&5&&k!==(k="ml=1 o=hidden tt=height_.3s h="+($[2]?Object.keys($[0].childs).length*2.75:0)))&&c(m,"class",k)},i($){if(!E){for(let b=0;b<H.length;b+=1)z(w[b]);E=!0}},o($){w=w.filter(Boolean);for(let b=0;b<w.length;b+=1)A(w[b]);E=!1},d($){$&&(h(e),h(f),h(m)),Ue(w,$),D=!1,L()}}}function et(n){let e,t,s,l;return t=new ot({props:{text:n[1],data:n[0].childs[n[1]]}}),{c(){e=_("li"),q(t.$$.fragment),s=I()},l(a){e=v(a,"LI",{});var r=p(e);K(t.$$.fragment,r),s=V(r),r.forEach(h)},m(a,r){N(a,e,r),P(t,e,null),d(e,s),l=!0},p(a,r){const i={};r&1&&(i.text=a[1]),r&1&&(i.data=a[0].childs[a[1]]),t.$set(i)},i(a){l||(z(t.$$.fragment,a),l=!0)},o(a){A(t.$$.fragment,a),l=!1},d(a){a&&h(e),X(t)}}}function Ot(n){let e,t,s,l;const a=[Ct,Rt],r=[];function i(o,g){return"childs"in o[0]?0:1}return e=i(n),t=r[e]=a[e](n),{c(){t.c(),s=oe()},l(o){t.l(o),s=oe()},m(o,g){r[e].m(o,g),N(o,s,g),l=!0},p(o,[g]){let u=e;e=i(o),e===u?r[e].p(o,g):(ue(),A(r[u],1,1,()=>{r[u]=null}),he(),t=r[e],t?t.p(o,g):(t=r[e]=a[e](o),t.c()),z(t,1),t.m(s.parentNode,s))},i(o){l||(z(t),l=!0)},o(o){A(t),l=!1},d(o){o&&h(s),r[e].d(o)}}}function jt(n,e,t){let{text:s}=e,{data:l}=e,a,r,i;Ee(()=>{qe.subscribe(()=>{t(3,r=location.pathname.startsWith(l.href)),r!=i&&setTimeout(()=>i=r,50)})});const o=()=>t(2,a=!a);return n.$$set=g=>{"text"in g&&t(1,s=g.text),"data"in g&&t(0,l=g.data)},[l,s,a,r,o]}class ot extends le{constructor(e){super(),re(this,e,jt,Ot,se,{text:1,data:0})}}function tt(n,e,t){const s=n.slice();return s[2]=e[t],s}function st(n){let e,t,s=me(Object.keys(n[0].childs)),l=[];for(let r=0;r<s.length;r+=1)l[r]=lt(tt(n,s,r));const a=r=>A(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=oe()},l(r){for(let i=0;i<l.length;i+=1)l[i].l(r);e=oe()},m(r,i){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,i);N(r,e,i),t=!0},p(r,i){if(i&1){s=me(Object.keys(r[0].childs));let o;for(o=0;o<s.length;o+=1){const g=tt(r,s,o);l[o]?(l[o].p(g,i),z(l[o],1)):(l[o]=lt(g),l[o].c(),z(l[o],1),l[o].m(e.parentNode,e))}for(ue(),o=s.length;o<l.length;o+=1)a(o);he()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)z(l[i]);t=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)A(l[i]);t=!1},d(r){r&&h(e),Ue(l,r)}}}function lt(n){let e,t,s,l;return t=new ot({props:{text:n[2],data:n[0].childs[n[2]]}}),{c(){e=_("li"),q(t.$$.fragment),s=I()},l(a){e=v(a,"LI",{});var r=p(e);K(t.$$.fragment,r),s=V(r),r.forEach(h)},m(a,r){N(a,e,r),P(t,e,null),d(e,s),l=!0},p(a,r){const i={};r&1&&(i.text=a[2]),r&1&&(i.data=a[0].childs[a[2]]),t.$set(i)},i(a){l||(z(t.$$.fragment,a),l=!0)},o(a){A(t.$$.fragment,a),l=!1},d(a){a&&h(e),X(t)}}}function Yt(n){let e,t,s,l,a,r,i,o,g=n[0].childs&&st(n);return{c(){e=_("div"),t=_("div"),s=_("div"),l=_("div"),a=_("ul"),g&&g.c(),this.h()},l(u){e=v(u,"DIV",{class:!0});var f=p(e);t=v(f,"DIV",{class:!0});var m=p(t);s=v(m,"DIV",{class:!0});var k=p(s);l=v(k,"DIV",{class:!0});var E=p(l);a=v(E,"UL",{class:!0});var D=p(a);g&&g.l(D),D.forEach(h),E.forEach(h),k.forEach(h),m.forEach(h),f.forEach(h),this.h()},h(){c(a,"class","flex column p=.5 fs=.75"),c(l,"class","h=100% oy=auto "+Ke.scrollbar.primary),c(s,"class",r="absolute l=-13 h=100% w=13 br=0_1_1_0 bdl=.1_solid tt=transform_.3s o=hidden bg=--gray-95 @dark@bg=--gray-20 "+(n[1]?"tf=translateX(13em) bs=0_0_.4":"")),c(t,"class","relative h=100%"),c(e,"class",i="fixed t=0 l=4 h=100% w=14 o=hidden "+(n[1]?"z=1":"v=hidden"))},m(u,f){N(u,e,f),d(e,t),d(t,s),d(s,l),d(l,a),g&&g.m(a,null),o=!0},p(u,[f]){u[0].childs?g?(g.p(u,f),f&1&&z(g,1)):(g=st(u),g.c(),z(g,1),g.m(a,null)):g&&(ue(),A(g,1,1,()=>{g=null}),he()),(!o||f&2&&r!==(r="absolute l=-13 h=100% w=13 br=0_1_1_0 bdl=.1_solid tt=transform_.3s o=hidden bg=--gray-95 @dark@bg=--gray-20 "+(u[1]?"tf=translateX(13em) bs=0_0_.4":"")))&&c(s,"class",r),(!o||f&2&&i!==(i="fixed t=0 l=4 h=100% w=14 o=hidden "+(u[1]?"z=1":"v=hidden")))&&c(e,"class",i)},i(u){o||(z(g),o=!0)},o(u){A(g),o=!1},d(u){u&&h(e),g&&g.d()}}}function Ut(n,e,t){let{data:s}=e,{is_open:l}=e;return n.$$set=a=>{"data"in a&&t(0,s=a.data),"is_open"in a&&t(1,l=a.is_open)},[s,l]}class rt extends le{constructor(e){super(),re(this,e,Ut,Yt,se,{data:0,is_open:1})}}function qt(n){let e,t,s,l=`<svg class="absolute i=.25 w=1.5 h=1.5"><use xlink:href="${M}/icons.svg#dark-mode"></use></svg> <svg class="absolute i=.25 w=1.5 h=1.5 tt=opacity_.3s"><use xlink:href="${M}/icons.svg#dark-mode-fill"></use></svg>`,a,r,i=`<svg class="absolute i=.25 w=1.5 h=1.5"><use xlink:href="${M}/icons.svg#light-mode"></use></svg> <svg class="absolute i=.25 w=1.5 h=1.5 tt=opacity_.3s"><use xlink:href="${M}/icons.svg#light-mode-fill"></use></svg>`,o,g,u;return{c(){e=_("button"),t=_("div"),s=_("div"),s.innerHTML=l,a=I(),r=_("div"),r.innerHTML=i,this.h()},l(f){e=v(f,"BUTTON",{class:!0});var m=p(e);t=v(m,"DIV",{class:!0});var k=p(t);s=v(k,"DIV",{class:!0,"data-svelte-h":!0}),te(s)!=="svelte-15uc3i7"&&(s.innerHTML=l),a=V(k),r=v(k,"DIV",{class:!0,"data-svelte-h":!0}),te(r)!=="svelte-5uzrgx"&&(r.innerHTML=i),k.forEach(h),m.forEach(h),this.h()},h(){c(s,"class","relative w=2 h=2"),c(r,"class","relative w=2 h=2"),c(t,"class",o="flex column ai=center p=0_2 "+(n[1]?"tt=transform_cubic-bezier(.9,0,.45,1.8)_.5s":"")+" tf=translateX(-1em)_rotate("+n[0]+"deg)"),c(e,"class","w=2 h=2 br=1 ol=.1_solid o=hidden :hover/bg=--gray-90 @dark@:hover/bg=--gray-30 _svg/f=--gray-60 :not(:hover)>div>div>svg:nth-of-type(even)/op=0")},m(f,m){N(f,e,m),d(e,t),d(t,s),d(t,a),d(t,r),g||(u=ne(e,"click",n[2]),g=!0)},p(f,[m]){m&3&&o!==(o="flex column ai=center p=0_2 "+(f[1]?"tt=transform_cubic-bezier(.9,0,.45,1.8)_.5s":"")+" tf=translateX(-1em)_rotate("+f[0]+"deg)")&&c(t,"class",o)},i:J,o:J,d(f){f&&h(e),g=!1,u()}}}function Kt(n,e,t){let s;at(n,ve,i=>t(3,s=i));let l=-180,a;const r=()=>{t(0,l-=180),Se(ve,s=s=="DARK"?"LIGHT":"DARK",s),localStorage.setItem("THEME",s),cssLube()};return Ee(()=>{let i=localStorage.getItem("THEME")||"";!i&&(matchMedia!=null&&matchMedia("(prefers-color-scheme: dark)").matches)&&(i="DARK",localStorage.setItem("THEME","DARK")),Se(ve,s=i,s),i=="DARK"&&t(0,l=0),setTimeout(()=>t(1,a=!0),50)}),[l,a,r]}class Pt extends le{constructor(e){super(),re(this,e,Kt,qt,se,{})}}function Xt(n){let e,t;return{c(){e=_("img"),this.h()},l(s){e=v(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){nt(e.src,t=M+"/favicon.png")||c(e,"src",t),c(e,"alt","logo"),c(e,"class","icon z=1 w=1.5")},m(s,l){N(s,e,l)},p:J,d(s){s&&h(e)}}}function Gt(n){let e,t=`<svg class="absolute w=1.2 h=1.5"><use xlink:href="${M}/icons.svg#library-books"></use></svg> <svg class="absolute w=1.2 h=1.5"><use xlink:href="${M}/icons.svg#library-books-fill"></use></svg>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-cf3u5e"&&(e.innerHTML=t),this.h()},h(){c(e,"class","icon z=1 relative w=1.2 h=1.5")},m(s,l){N(s,e,l)},p:J,d(s){s&&h(e)}}}function Wt(n){let e,t=`<svg class="h=1.5"><use xlink:href="${M}/icons.svg#code"></use></svg>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-znkzq6"&&(e.innerHTML=t),this.h()},h(){c(e,"class","icon z=1 relative w=1.5 h=1.5")},m(s,l){N(s,e,l)},p:J,d(s){s&&h(e)}}}function Ft(n){let e,t=`<svg class="absolute w=1.2 h=1.5"><use xlink:href="${M}/icons.svg#quick-reference"></use></svg> <svg class="absolute w=1.2 h=1.5"><use xlink:href="${M}/icons.svg#quick-reference-fill"></use></svg>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-gyjxue"&&(e.innerHTML=t),this.h()},h(){c(e,"class","icon z=1 relative w=1.2 h=1.5")},m(s,l){N(s,e,l)},p:J,d(s){s&&h(e)}}}function Jt(n){let e,t,s,l,a,r,i,o,g,u,f,m,k,E,D,L,H,w,R,$,b,y,O,Y,Q,W,ae,Z,x,C,T,S,U,G=`<a href="https://github.com/Artxe2/css-lube" target="_blank" class="flex ai=center :hover_svg/f=#000 @dark@:hover_svg/f=#fff"><svg class="w=2.2 h=2.2"><use xlink:href="${M}/icons.svg#github"></use></svg></a>`,ee,be,Oe,de,ie,je,pe,ze,ge,Ae,Ye,Pe;r=new Ne({props:{classs:":hover_.icon/tf=scale(1.2)",href:M+"/",text:"Home",$$slots:{default:[Xt]},$$scope:{ctx:n}}}),f=new Ne({props:{classs:`:not(:hover)_.icon>svg:nth-of-type(even)/op=0\r
					:hover_.icon>svg:nth-of-type(odd)/op=0`,href:M+"/docs",text:"Documents",$$slots:{default:[Gt]},$$scope:{ctx:n}}}),f.$on("mouseenter",n[1]);function it(B){n[2](B)}let Xe={data:_e.Documents};n[0].docs!==void 0&&(Xe.is_open=n[0].docs),k=new rt({props:Xe}),Be.push(()=>Ce(k,"is_open",it)),R=new Ne({props:{classs:":hover_.icon>svg/tf=scale(1.2)",href:M+"/repl",text:"REPL",$$slots:{default:[Wt]},$$scope:{ctx:n}}}),Y=new Ne({props:{classs:`:not(:hover)_.icon>svg:nth-of-type(even)/op=0\r
					:hover_.icon>svg:nth-of-type(odd)/op=0`,href:M+"/ref",text:"Reference",$$slots:{default:[Ft]},$$scope:{ctx:n}}}),Y.$on("mouseenter",n[4]);function ft(B){n[5](B)}let Ge={data:_e.Reference};return n[0].ref!==void 0&&(Ge.is_open=n[0].ref),W=new rt({props:Ge}),Be.push(()=>Ce(W,"is_open",ft)),ie=new Pt({}),{c(){e=_("nav"),t=_("div"),s=_("div"),l=I(),a=_("div"),q(r.$$.fragment),i=I(),o=_("div"),g=I(),u=_("div"),q(f.$$.fragment),m=I(),q(k.$$.fragment),D=I(),L=_("div"),H=I(),w=_("div"),q(R.$$.fragment),$=I(),b=_("div"),y=I(),O=_("div"),q(Y.$$.fragment),Q=I(),q(W.$$.fragment),Z=I(),x=_("div"),C=I(),T=_("div"),S=I(),U=_("div"),U.innerHTML=G,ee=I(),be=_("div"),Oe=I(),de=_("div"),q(ie.$$.fragment),je=I(),pe=_("div"),ze=I(),ge=_("div"),this.h()},l(B){e=v(B,"NAV",{class:!0});var F=p(e);t=v(F,"DIV",{class:!0});var j=p(t);s=v(j,"DIV",{class:!0}),p(s).forEach(h),l=V(j),a=v(j,"DIV",{class:!0});var $e=p(a);K(r.$$.fragment,$e),$e.forEach(h),i=V(j),o=v(j,"DIV",{class:!0}),p(o).forEach(h),g=V(j),u=v(j,"DIV",{class:!0});var fe=p(u);K(f.$$.fragment,fe),m=V(fe),K(k.$$.fragment,fe),fe.forEach(h),D=V(j),L=v(j,"DIV",{class:!0}),p(L).forEach(h),H=V(j),w=v(j,"DIV",{class:!0});var ke=p(w);K(R.$$.fragment,ke),ke.forEach(h),$=V(j),b=v(j,"DIV",{class:!0}),p(b).forEach(h),y=V(j),O=v(j,"DIV",{class:!0});var ce=p(O);K(Y.$$.fragment,ce),Q=V(ce),K(W.$$.fragment,ce),ce.forEach(h),Z=V(j),x=v(j,"DIV",{class:!0}),p(x).forEach(h),C=V(j),T=v(j,"DIV",{class:!0}),p(T).forEach(h),S=V(j),U=v(j,"DIV",{class:!0,"data-svelte-h":!0}),te(U)!=="svelte-p7j0nl"&&(U.innerHTML=G),ee=V(j),be=v(j,"DIV",{class:!0}),p(be).forEach(h),Oe=V(j),de=v(j,"DIV",{class:!0});var we=p(de);K(ie.$$.fragment,we),we.forEach(h),je=V(j),pe=v(j,"DIV",{class:!0}),p(pe).forEach(h),j.forEach(h),F.forEach(h),ze=V(B),ge=v(B,"DIV",{class:!0}),p(ge).forEach(h),this.h()},h(){c(s,"class","h=1"),c(a,"class","flex column"),c(o,"class","h=.5"),c(u,"class","flex column"),c(L,"class","h=.5"),c(w,"class","flex column"),c(b,"class","h=.5"),c(O,"class","flex column"),c(x,"class","fg=1"),c(T,"class","h=1"),c(U,"class","flex w=100% jc=center"),c(be,"class","h=1"),c(de,"class","flex w=100% jc=center"),c(pe,"class","h=1"),c(t,"class","flex column h=100% w=4 bg=--gray-95 @dark@bg=--gray-20"),c(e,"class","z=10000 fixed t=0 l=0 h=100% c=--gray-30 @dark@c=--gray-70 _svg/f=--gray-10 @dark@_svg/f=--gray-70 @!lg@v=hidden"),c(ge,"class","w=4 @!lg@none")},m(B,F){N(B,e,F),d(e,t),d(t,s),d(t,l),d(t,a),P(r,a,null),d(t,i),d(t,o),d(t,g),d(t,u),P(f,u,null),d(u,m),P(k,u,null),d(t,D),d(t,L),d(t,H),d(t,w),P(R,w,null),d(t,$),d(t,b),d(t,y),d(t,O),P(Y,O,null),d(O,Q),P(W,O,null),d(t,Z),d(t,x),d(t,C),d(t,T),d(t,S),d(t,U),d(t,ee),d(t,be),d(t,Oe),d(t,de),P(ie,de,null),d(t,je),d(t,pe),N(B,ze,F),N(B,ge,F),Ae=!0,Ye||(Pe=[ne(u,"mouseleave",n[3]),ne(O,"mouseleave",n[6])],Ye=!0)},p(B,[F]){const j={};F&128&&(j.$$scope={dirty:F,ctx:B}),r.$set(j);const $e={};F&128&&($e.$$scope={dirty:F,ctx:B}),f.$set($e);const fe={};!E&&F&1&&(E=!0,fe.is_open=B[0].docs,Re(()=>E=!1)),k.$set(fe);const ke={};F&128&&(ke.$$scope={dirty:F,ctx:B}),R.$set(ke);const ce={};F&128&&(ce.$$scope={dirty:F,ctx:B}),Y.$set(ce);const we={};!ae&&F&1&&(ae=!0,we.is_open=B[0].ref,Re(()=>ae=!1)),W.$set(we)},i(B){Ae||(z(r.$$.fragment,B),z(f.$$.fragment,B),z(k.$$.fragment,B),z(R.$$.fragment,B),z(Y.$$.fragment,B),z(W.$$.fragment,B),z(ie.$$.fragment,B),Ae=!0)},o(B){A(r.$$.fragment,B),A(f.$$.fragment,B),A(k.$$.fragment,B),A(R.$$.fragment,B),A(Y.$$.fragment,B),A(W.$$.fragment,B),A(ie.$$.fragment,B),Ae=!1},d(B){B&&(h(e),h(ze),h(ge)),X(r),X(f),X(k),X(R),X(Y),X(W),X(ie),Ye=!1,ht(Pe)}}}function Qt(n,e,t){const s={docs:!1,ref:!1},l=()=>t(0,s.docs=!0,s);function a(u){n.$$.not_equal(s.docs,u)&&(s.docs=u,t(0,s))}const r=()=>t(0,s.docs=!1,s),i=()=>t(0,s.ref=!0,s);function o(u){n.$$.not_equal(s.ref,u)&&(s.ref=u,t(0,s))}return[s,l,a,r,i,o,()=>t(0,s.ref=!1,s)]}class Zt extends le{constructor(e){super(),re(this,e,Qt,Jt,se,{})}}function xt(n){let e,t;const s=n[1].default,l=De(s,n,n[0],null);return{c(){e=_("div"),l&&l.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=p(e);l&&l.l(r),r.forEach(h),this.h()},h(){c(e,"class","h=100% ox=hidden fs=16px @md@fs=20px @xl@fs=24px bg=#fff @dark@bg=--gray-10 c=#000 @dark@c=--gray-90 _svg/f=currentcolor")},m(a,r){N(a,e,r),l&&l.m(e,null),t=!0},p(a,[r]){l&&l.p&&(!t||r&1)&&Te(l,s,a,a[0],t?Me(s,a[0],r,null):Le(a[0]),null)},i(a){t||(z(l,a),t=!0)},o(a){A(l,a),t=!1},d(a){a&&h(e),l&&l.d(a)}}}function es(n,e,t){let{$$slots:s={},$$scope:l}=e;return n.$$set=a=>{"$$scope"in a&&t(0,l=a.$$scope)},[l,s]}class ts extends le{constructor(e){super(),re(this,e,es,xt,se,{})}}function ss(n){let e,t,s,l,a,r,i,o;t=new Zt({}),a=new Nt({});const g=n[0].default,u=De(g,n,n[1],null);return{c(){e=_("div"),q(t.$$.fragment),s=I(),l=_("div"),q(a.$$.fragment),r=I(),i=_("main"),u&&u.c(),this.h()},l(f){e=v(f,"DIV",{class:!0});var m=p(e);K(t.$$.fragment,m),s=V(m),l=v(m,"DIV",{class:!0});var k=p(l);K(a.$$.fragment,k),r=V(k),i=v(k,"MAIN",{class:!0});var E=p(i);u&&u.l(E),E.forEach(h),k.forEach(h),m.forEach(h),this.h()},h(){c(i,"class","relative fsk=1 fg=1 flex column o=auto "+Ke.scrollbar.primary),c(l,"class","fsk=1 fg=1 flex column"),c(e,"class","flex w=100% h=100%")},m(f,m){N(f,e,m),P(t,e,null),d(e,s),d(e,l),P(a,l,null),d(l,r),d(l,i),u&&u.m(i,null),o=!0},p(f,m){u&&u.p&&(!o||m&2)&&Te(u,g,f,f[1],o?Me(g,f[1],m,null):Le(f[1]),null)},i(f){o||(z(t.$$.fragment,f),z(a.$$.fragment,f),z(u,f),o=!0)},o(f){A(t.$$.fragment,f),A(a.$$.fragment,f),A(u,f),o=!1},d(f){f&&h(e),X(t),X(a),u&&u.d(f)}}}function ls(n){let e,t;return e=new ts({props:{$$slots:{default:[ss]},$$scope:{ctx:n}}}),{c(){q(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,l){P(e,s,l),t=!0},p(s,[l]){const a={};l&2&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){X(e,s)}}}function rs(n,e,t){let{$$slots:s={},$$scope:l}=e;return n.$$set=a=>{"$$scope"in a&&t(1,l=a.$$scope)},[s,l]}class vs extends le{constructor(e){super(),re(this,e,rs,ls,se,{})}}export{vs as component,hs as universal};
