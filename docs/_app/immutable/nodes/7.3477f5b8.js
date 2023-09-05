import{s as ee,f,a as w,g as d,h as m,c as E,d as l,j as u,i as x,w as c,M as re,e as W,N as le,u as ie,O as ce,v as $e,o as oe,l as te,m as se,p as fe}from"../chunks/scheduler.751e6dae.js";import{S as ae,i as ne,b as H,d as S,m as A,a as P,t as T,e as q}from"../chunks/index.91d8d602.js";import{H as X}from"../chunks/H2.cb186f28.js";import{C as de,h as b,k as Y,n as j,s as y}from"../chunks/highlighter.f351b14a.js";import{C as me}from"../chunks/ComponentTabView.dd39602d.js";import{L as J}from"../chunks/LoadingCircle.f64c62e8.js";import{s as Z}from"../chunks/styles.b585f6af.js";function ue(v){let t,e=`${b("script",` ${j("lang")}=${y("ts")}`,`
${Y("import")} ${j("LoadingCircle")} ${Y("from")} ${y("src/instant-ui/animations/LoadingCircle.svelte")}
`)}

${b("div",` ${j("class")}=${y("flex ai=center w=fit-content p=1 br=1")}`,`
	${b("LoadingCircle"," ",!1)}
	${b("div",` ${j("class")}=${y("w=1")}`,"")}
	${b("div",` ${j("class")}=${y("fs=.75")}`,`
		${b("LoadingCircle"," ",!1)}
	`)}
	${b("div",` ${j("class")}=${y("w=1")}`,"")}
	${b("div",` ${j("class")}=${y("fs=.5")}`,`
		${b("LoadingCircle"," ",!1)}
	`)}
	${b("div",` ${j("class")}=${y("w=1")}`,"")}
	${b("div",` ${j("class")}=${y("fs=.25")}`,`
		${b("LoadingCircle"," ",!1)}
	`)}
`)}`,s;return{c(){t=new re(!1),s=W(),this.h()},l(i){t=le(i,!1),s=W(),this.h()},h(){t.a=s},m(i,$){t.m(e,i,$),x(i,s,$)},p:ie,d(i){i&&(l(s),t.d())}}}function ve(v){let t,e,s,i,$,U,o,C,z,g,B,I,k,F,h,M,p,_,V,D,L;return s=new J({}),C=new J({}),k=new J({}),_=new J({}),D=new de({props:{is_code:!0,$$slots:{default:[ue]},$$scope:{ctx:v}}}),{c(){t=f("div"),e=f("div"),H(s.$$.fragment),i=w(),$=f("div"),U=w(),o=f("div"),H(C.$$.fragment),z=w(),g=f("div"),B=w(),I=f("div"),H(k.$$.fragment),F=w(),h=f("div"),M=w(),p=f("div"),H(_.$$.fragment),V=w(),H(D.$$.fragment),this.h()},l(r){t=d(r,"DIV",{class:!0});var a=m(t);e=d(a,"DIV",{class:!0});var n=m(e);S(s.$$.fragment,n),i=E(n),$=d(n,"DIV",{class:!0}),m($).forEach(l),U=E(n),o=d(n,"DIV",{class:!0});var N=m(o);S(C.$$.fragment,N),N.forEach(l),z=E(n),g=d(n,"DIV",{class:!0}),m(g).forEach(l),B=E(n),I=d(n,"DIV",{class:!0});var R=m(I);S(k.$$.fragment,R),R.forEach(l),F=E(n),h=d(n,"DIV",{class:!0}),m(h).forEach(l),M=E(n),p=d(n,"DIV",{class:!0});var G=m(p);S(_.$$.fragment,G),G.forEach(l),n.forEach(l),a.forEach(l),V=E(r),S(D.$$.fragment,r),this.h()},h(){u($,"class","w=1"),u(o,"class","fs=.75"),u(g,"class","w=1"),u(I,"class","fs=.5"),u(h,"class","w=1"),u(p,"class","fs=.25"),u(e,"class","flex ai=center w=fit-content p=1 br=1"),u(t,"class","flex jc=center")},m(r,a){x(r,t,a),c(t,e),A(s,e,null),c(e,i),c(e,$),c(e,U),c(e,o),A(C,o,null),c(e,z),c(e,g),c(e,B),c(e,I),A(k,I,null),c(e,F),c(e,h),c(e,M),c(e,p),A(_,p,null),x(r,V,a),A(D,r,a),L=!0},p(r,a){const n={};a&1&&(n.$$scope={dirty:a,ctx:r}),D.$set(n)},i(r){L||(P(s.$$.fragment,r),P(C.$$.fragment,r),P(k.$$.fragment,r),P(_.$$.fragment,r),P(D.$$.fragment,r),L=!0)},o(r){T(s.$$.fragment,r),T(C.$$.fragment,r),T(k.$$.fragment,r),T(_.$$.fragment,r),T(D.$$.fragment,r),L=!1},d(r){r&&(l(t),l(V)),q(s),q(C),q(k),q(_),q(D,r)}}}function ge(v){let t,e;return t=new me({props:{$$slots:{default:[ve]},$$scope:{ctx:v}}}),{c(){H(t.$$.fragment)},l(s){S(t.$$.fragment,s)},m(s,i){A(t,s,i),e=!0},p(s,[i]){const $={};i&1&&($.$$scope={dirty:i,ctx:s}),t.$set($)},i(s){e||(P(t.$$.fragment,s),e=!0)},o(s){T(t.$$.fragment,s),e=!1},d(s){q(t,s)}}}class he extends ae{constructor(t){super(),ne(this,t,null,ge,ee,{})}}function pe(v){let t;return{c(){t=te("Loading Circle")},l(e){t=se(e,"Loading Circle")},m(e,s){x(e,t,s)},d(e){e&&l(t)}}}function _e(v){let t;return{c(){t=te(".")},l(e){t=se(e,".")},m(e,s){x(e,t,s)},d(e){e&&l(t)}}}function we(v){let t,e,s,i,$,U,o,C,z,g,B,I,k="Lube UI may be released someday",F,h,M,p,_,V,D,L,r;return g=new X({props:{$$slots:{default:[pe]},$$scope:{ctx:v}}}),h=new X({props:{classs:"v=hidden",$$slots:{default:[_e]},$$scope:{ctx:v}}}),V=new he({}),{c(){t=w(),e=f("header"),s=f("div"),i=f("div"),$=f("div"),U=w(),o=f("div"),C=f("div"),z=w(),H(g.$$.fragment),B=w(),I=f("span"),I.textContent=k,F=w(),H(h.$$.fragment),M=w(),p=f("div"),_=f("article"),H(V.$$.fragment),D=w(),L=f("div"),this.h()},l(a){ce("svelte-tjjyiq",document.head).forEach(l),t=E(a),e=d(a,"HEADER",{class:!0});var N=m(e);s=d(N,"DIV",{class:!0});var R=m(s);i=d(R,"DIV",{class:!0});var G=m(i);$=d(G,"DIV",{class:!0}),m($).forEach(l),U=E(G),o=d(G,"DIV",{class:!0});var O=m(o);C=d(O,"DIV",{class:!0}),m(C).forEach(l),z=E(O),S(g.$$.fragment,O),B=E(O),I=d(O,"SPAN",{"data-svelte-h":!0}),$e(I)!=="svelte-cpphmj"&&(I.textContent=k),F=E(O),S(h.$$.fragment,O),O.forEach(l),G.forEach(l),R.forEach(l),N.forEach(l),M=E(a),p=d(a,"DIV",{class:!0});var K=m(p);_=d(K,"ARTICLE",{class:!0});var Q=m(_);S(V.$$.fragment,Q),Q.forEach(l),K.forEach(l),D=E(a),L=d(a,"DIV",{class:!0}),m(L).forEach(l),this.h()},h(){document.title="Loading Circle - CSS Lube",u($,"class","w=3"),u(C,"class","h=2"),u(o,"class","fg=1 fsk=1"),u(i,"class","flex w=100% "+Z.$common.background_conic),u(s,"class","flex br=1.5 o=hidden "+Z.$common.background_grid),u(e,"class","m=.5"),u(_,"class","m=2_1 @md@m=2"),u(p,"class","m=.5"),u(L,"class","h=2")},m(a,n){x(a,t,n),x(a,e,n),c(e,s),c(s,i),c(i,$),c(i,U),c(i,o),c(o,C),c(o,z),A(g,o,null),c(o,B),c(o,I),c(o,F),A(h,o,null),v[1](e),x(a,M,n),x(a,p,n),c(p,_),A(V,_,null),x(a,D,n),x(a,L,n),r=!0},p(a,[n]){const N={};n&4&&(N.$$scope={dirty:n,ctx:a}),g.$set(N);const R={};n&4&&(R.$$scope={dirty:n,ctx:a}),h.$set(R)},i(a){r||(P(g.$$.fragment,a),P(h.$$.fragment,a),P(V.$$.fragment,a),r=!0)},o(a){T(g.$$.fragment,a),T(h.$$.fragment,a),T(V.$$.fragment,a),r=!1},d(a){a&&(l(t),l(e),l(M),l(p),l(D),l(L)),q(g),q(h),v[1](null),q(V)}}}function Ee(v,t,e){let s;oe(()=>{var $;return($=s.parentElement)==null?void 0:$.scroll(0,0)});function i($){fe[$?"unshift":"push"](()=>{s=$,e(0,s)})}return[s,i]}class ke extends ae{constructor(t){super(),ne(this,t,Ee,we,ee,{})}}export{ke as component};
