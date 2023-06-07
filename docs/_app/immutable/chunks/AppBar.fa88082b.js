import{S as kt,i as wt,s as It,k as r,q as K,a as p,l as o,m as n,r as P,h as l,c as _,n as e,b as et,H as t,C as nt,D as Ot,O as Ut,E as Dt,o as Yt,F as st,y as it,z as ft,A as ut,N as Et,g as dt,d as mt,B as ht,L as Gt}from"./index.e72184b5.js";import{b as ct}from"./paths.5cf49692.js";import{t as ot,m as Tt,s as Rt}from"./store.f157ae1b.js";import{M as zt}from"./MorphingText.4682e3f7.js";import{p as Ct}from"./stores.6539fbd0.js";import{I as Kt}from"./i_github.cdf49a17.js";import{s as Y}from"./index.e4ba7d5f.js";function Pt(f){let a,i,s,u,k,d,g,h,V,$,y,c,w,E,b,m,H,B,I,M,q;return{c(){a=r("div"),i=r("div"),s=r("div"),u=r("button"),k=K("LIGHT"),g=p(),h=r("div"),V=p(),$=r("button"),y=K("DARK"),w=p(),E=r("div"),b=p(),m=r("button"),H=K("SYSTEM"),this.h()},l(D){a=o(D,"DIV",{class:!0});var S=n(a);i=o(S,"DIV",{class:!0});var F=n(i);s=o(F,"DIV",{class:!0});var T=n(s);u=o(T,"BUTTON",{class:!0});var O=n(u);k=P(O,"LIGHT"),O.forEach(l),g=_(T),h=o(T,"DIV",{class:!0}),n(h).forEach(l),V=_(T),$=o(T,"BUTTON",{class:!0});var X=n($);y=P(X,"DARK"),X.forEach(l),w=_(T),E=o(T,"DIV",{class:!0}),n(E).forEach(l),b=_(T),m=o(T,"BUTTON",{class:!0});var W=n(m);H=P(W,"SYSTEM"),W.forEach(l),T.forEach(l),F.forEach(l),S.forEach(l),this.h()},h(){e(u,"class",d=Y.button.themeSelector+" "+(f[0]==="LIGHT"?"bold":"")),e(h,"class","h=.5"),e($,"class",c=Y.button.themeSelector+" "+(f[0]==="DARK"?"bold":"")),e(E,"class","h=.5"),e(m,"class",B=Y.button.themeSelector+" "+(f[0]?"":"bold")),e(s,"class",I="absolute flex column r=0 t=0 :hover/tt=transform_.5s "+(f[0]?f[0]==="LIGHT"?"":":not(:hover)/tf=translateY(-3em)":":not(:hover)/tf=translateY(-6em)")),e(i,"class","relative h=2.5 top=0 o=hidden br=.25 fw=normal :hover/tt=height_.5s :hover/h=8.5"),e(a,"class","w=6.25 h=2.5")},m(D,S){et(D,a,S),t(a,i),t(i,s),t(s,u),t(u,k),t(s,g),t(s,h),t(s,V),t(s,$),t($,y),t(s,w),t(s,E),t(s,b),t(s,m),t(m,H),M||(q=[nt(u,"click",f[3]),nt($,"click",f[4]),nt(m,"click",f[2])],M=!0)},p(D,[S]){S&1&&d!==(d=Y.button.themeSelector+" "+(D[0]==="LIGHT"?"bold":""))&&e(u,"class",d),S&1&&c!==(c=Y.button.themeSelector+" "+(D[0]==="DARK"?"bold":""))&&e($,"class",c),S&1&&B!==(B=Y.button.themeSelector+" "+(D[0]?"":"bold"))&&e(m,"class",B),S&1&&I!==(I="absolute flex column r=0 t=0 :hover/tt=transform_.5s "+(D[0]?D[0]==="LIGHT"?"":":not(:hover)/tf=translateY(-3em)":":not(:hover)/tf=translateY(-6em)"))&&e(s,"class",I)},i:Ot,o:Ot,d(D){D&&l(a),M=!1,Ut(q)}}}function qt(f,a,i){let s;Dt(f,ot,h=>i(0,s=h));const u=h=>{localStorage.setItem("THEME",h),window.cssLubricant(),st(ot,s=h,s)},k=()=>{localStorage.removeItem("THEME"),window.cssLubricant(),st(ot,s="",s)};return Yt(()=>st(ot,s=localStorage.getItem("THEME"),s)),[s,u,k,()=>u("LIGHT"),()=>u("DARK")]}class Ft extends kt{constructor(a){super(),wt(this,a,qt,Pt,It,{})}}function Xt(f){let a,i,s,u,k,d,g,h,V,$,y,c,w,E,b,m,H,B,I,M,q,D,S,F,T,O,X,W,x,bt,N,R,vt,tt,pt,z,U,C,_t,j,gt,at,lt,J,G,$t,St;return R=new Ft({}),C=new Kt({props:{classs:"w=2.5 h=2.5 f=#444 @dark@f=#aaa"}}),{c(){a=r("div"),i=r("button"),s=r("div"),k=p(),d=r("div"),h=p(),V=r("div"),y=p(),c=r("div"),w=r("a"),E=r("button"),b=K("Docs"),m=p(),H=r("div"),B=p(),I=r("a"),M=r("button"),q=K("REPL"),D=p(),S=r("div"),F=p(),T=r("a"),O=r("button"),X=K("Reference"),W=p(),x=r("div"),bt=p(),N=r("div"),it(R.$$.fragment),vt=p(),tt=r("div"),pt=p(),z=r("a"),U=r("button"),it(C.$$.fragment),_t=p(),j=r("span"),gt=K("GitHub"),lt=p(),J=r("div"),this.h()},l(v){a=o(v,"DIV",{class:!0});var L=n(a);i=o(L,"BUTTON",{class:!0,"aria-label":!0});var Q=n(i);s=o(Q,"DIV",{class:!0}),n(s).forEach(l),k=_(Q),d=o(Q,"DIV",{class:!0}),n(d).forEach(l),h=_(Q),V=o(Q,"DIV",{class:!0}),n(V).forEach(l),Q.forEach(l),y=_(L),c=o(L,"DIV",{class:!0});var A=n(c);w=o(A,"A",{href:!0});var Vt=n(w);E=o(Vt,"BUTTON",{class:!0});var At=n(E);b=P(At,"Docs"),At.forEach(l),Vt.forEach(l),m=_(A),H=o(A,"DIV",{class:!0}),n(H).forEach(l),B=_(A),I=o(A,"A",{href:!0});var Lt=n(I);M=o(Lt,"BUTTON",{class:!0});var Ht=n(M);q=P(Ht,"REPL"),Ht.forEach(l),Lt.forEach(l),D=_(A),S=o(A,"DIV",{class:!0}),n(S).forEach(l),F=_(A),T=o(A,"A",{href:!0});var yt=n(T);O=o(yt,"BUTTON",{class:!0});var Bt=n(O);X=P(Bt,"Reference"),Bt.forEach(l),yt.forEach(l),W=_(A),x=o(A,"DIV",{class:!0}),n(x).forEach(l),bt=_(A),N=o(A,"DIV",{class:!0});var Z=n(N);ft(R.$$.fragment,Z),vt=_(Z),tt=o(Z,"DIV",{class:!0}),n(tt).forEach(l),pt=_(Z),z=o(Z,"A",{href:!0,target:!0});var Mt=n(z);U=o(Mt,"BUTTON",{class:!0,"aria-label":!0});var rt=n(U);ft(C.$$.fragment,rt),_t=_(rt),j=o(rt,"SPAN",{class:!0});var Nt=n(j);gt=P(Nt,"GitHub"),Nt.forEach(l),rt.forEach(l),Mt.forEach(l),Z.forEach(l),A.forEach(l),L.forEach(l),lt=_(v),J=o(v,"DIV",{class:!0}),n(J).forEach(l),this.h()},h(){e(s,"class",u="absolute w=100% h=.25 bg=#000 @dark@bg=#fff t=0 tt=transform_.4s "+(f[0]?"tf=translateY(1em)_rotate(-45deg)":"")),e(d,"class",g="absolute w=100% h=.25 bg=#000 @dark@bg=#fff t=1 tt=transform_.4s_linear,opacity_.4s "+(f[0]?"tf=translateX(3em) op=0":"")),e(V,"class",$="absolute w=100% h=.25 bg=#000 @dark@bg=#fff b=0 tt=transform_.4s "+(f[0]?"tf=translateY(-1em)_rotate(45deg)":"")),e(i,"class","z=1 relative w=2.5 h=2.25 @sm@none"),e(i,"aria-label","hamburger"),e(E,"class",Y.button.appbarMenu),e(w,"href",ct+"/docs"),e(H,"class","w=2 @!sm@w=1"),e(M,"class",Y.button.appbarMenu),e(I,"href",ct+"/repl"),e(S,"class","w=2 @!sm@w=1"),e(O,"class",Y.button.appbarMenu),e(T,"href",ct+"/ref"),e(x,"class","w=2 @!sm@w=1"),e(tt,"class","w=1 h=1"),e(j,"class","@sm@none pl=.5 bold"),e(U,"class","flex ai=center :hover_svg/f=#000 @dark@:hover_svg/f=#fff :hover_span/c=--primary @dark@:hover_span/c=--havelock-blue"),e(U,"aria-label","github"),e(z,"href","https://github.com/Artxe2/css-lubricant"),e(z,"target","_blank"),e(N,"class","flex @!sm@column-reverse"),e(c,"class",at="flex @sm@bg=none! bg=--catskill-white @dark@bg=--firefly @!sm@absolute @!sm@column @!sm@t=-.5 @!sm@r=-.5 @!sm@p=1.5 @!sm@br=1 @!sm@bd=2px_solid"+(f[0]?"":" @!sm@hidden")),e(a,"class","z=10 relative"),e(J,"class","w=1.5")},m(v,L){et(v,a,L),t(a,i),t(i,s),t(i,k),t(i,d),t(i,h),t(i,V),t(a,y),t(a,c),t(c,w),t(w,E),t(E,b),t(c,m),t(c,H),t(c,B),t(c,I),t(I,M),t(M,q),t(c,D),t(c,S),t(c,F),t(c,T),t(T,O),t(O,X),t(c,W),t(c,x),t(c,bt),t(c,N),ut(R,N,null),t(N,vt),t(N,tt),t(N,pt),t(N,z),t(z,U),ut(C,U,null),t(U,_t),t(U,j),t(j,gt),et(v,lt,L),et(v,J,L),G=!0,$t||(St=[nt(i,"click",f[2]),Et(f[1].call(null,w)),Et(f[1].call(null,I)),Et(f[1].call(null,T))],$t=!0)},p(v,[L]){(!G||L&1&&u!==(u="absolute w=100% h=.25 bg=#000 @dark@bg=#fff t=0 tt=transform_.4s "+(v[0]?"tf=translateY(1em)_rotate(-45deg)":"")))&&e(s,"class",u),(!G||L&1&&g!==(g="absolute w=100% h=.25 bg=#000 @dark@bg=#fff t=1 tt=transform_.4s_linear,opacity_.4s "+(v[0]?"tf=translateX(3em) op=0":"")))&&e(d,"class",g),(!G||L&1&&$!==($="absolute w=100% h=.25 bg=#000 @dark@bg=#fff b=0 tt=transform_.4s "+(v[0]?"tf=translateY(-1em)_rotate(45deg)":"")))&&e(V,"class",$),(!G||L&1&&at!==(at="flex @sm@bg=none! bg=--catskill-white @dark@bg=--firefly @!sm@absolute @!sm@column @!sm@t=-.5 @!sm@r=-.5 @!sm@p=1.5 @!sm@br=1 @!sm@bd=2px_solid"+(v[0]?"":" @!sm@hidden")))&&e(c,"class",at)},i(v){G||(dt(R.$$.fragment,v),dt(C.$$.fragment,v),G=!0)},o(v){mt(R.$$.fragment,v),mt(C.$$.fragment,v),G=!1},d(v){v&&l(a),ht(R),ht(C),v&&l(lt),v&&l(J),$t=!1,Ut(St)}}}function Wt(f,a,i){let s;Dt(f,Tt,d=>i(0,s=d));const u=d=>{Ct.subscribe(g=>{let h=(location.origin+g.url.pathname).startsWith(d.href);d.classList.toggle("c=--primary",h),d.classList.toggle("@dark@c=--havelock-blue",h)})},k=()=>{st(Tt,s=s?0:2,s)};return Gt(()=>{st(Tt,s=0,s)}),[s,u,k]}class jt extends kt{constructor(a){super(),wt(this,a,Wt,Xt,It,{})}}function Jt(f){let a,i,s,u,k,d,g,h,V,$,y,c,w,E;return g=new zt({props:{array:[['<span class="c=red">O</span>n-<span class="c=red">D</span>emand',1500],['<span class="c=red">U</span>tility-<span class="c=red">F</span>irst',1500],['<span class="c=red">N</span>ear-<span class="c=red">A</span>tomic',1500],['C<span class="c=red">SS</span> <span class="fv=small-caps">L<span class="c=red">ubricant</span></span>',2500]],longest:2,transition:500}}),c=new jt({}),{c(){a=r("div"),i=r("div"),s=p(),u=r("a"),k=r("button"),d=r("code"),it(g.$$.fragment),V=p(),$=r("div"),y=p(),it(c.$$.fragment),this.h()},l(b){a=o(b,"DIV",{class:!0});var m=n(a);i=o(m,"DIV",{class:!0}),n(i).forEach(l),s=_(m),u=o(m,"A",{href:!0});var H=n(u);k=o(H,"BUTTON",{});var B=n(k);d=o(B,"CODE",{class:!0});var I=n(d);ft(g.$$.fragment,I),I.forEach(l),B.forEach(l),H.forEach(l),V=_(m),$=o(m,"DIV",{class:!0}),n($).forEach(l),y=_(m),ft(c.$$.fragment,m),m.forEach(l),this.h()},h(){e(i,"class","w=1"),e(d,"class",h="fs=2 >div/ta=left _span/bold @lg@fs=2.5 c=#000 @dark@c=#fff "+(f[0]?"op=.6":"op=1")),e(u,"href",ct+"/"),e($,"class","fg=1"),e(a,"class",w="z=10 fixed flex ai=center w=100% h=4 tt=background-color_.5s bg=--primary-22 bs=0_.5_.5_--primary-55 "+(f[0]?"op=.6 :hover/op=1":""))},m(b,m){et(b,a,m),t(a,i),t(a,s),t(a,u),t(u,k),t(k,d),ut(g,d,null),t(a,V),t(a,$),t(a,y),ut(c,a,null),E=!0},p(b,[m]){(!E||m&1&&h!==(h="fs=2 >div/ta=left _span/bold @lg@fs=2.5 c=#000 @dark@c=#fff "+(b[0]?"op=.6":"op=1")))&&e(d,"class",h),(!E||m&1&&w!==(w="z=10 fixed flex ai=center w=100% h=4 tt=background-color_.5s bg=--primary-22 bs=0_.5_.5_--primary-55 "+(b[0]?"op=.6 :hover/op=1":"")))&&e(a,"class",w)},i(b){E||(dt(g.$$.fragment,b),dt(c.$$.fragment,b),E=!0)},o(b){mt(g.$$.fragment,b),mt(c.$$.fragment,b),E=!1},d(b){b&&l(a),ht(g),ht(c)}}}function Qt(f,a,i){let s;return Dt(f,Rt,u=>i(0,s=u)),[s]}class re extends kt{constructor(a){super(),wt(this,a,Qt,Jt,It,{})}}export{re as A};