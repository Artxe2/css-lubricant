import{S as q,i as A,s as L,y as d,z as _,A as h,g as b,d as x,B as v,k as G,a as P,l as J,m as K,h as c,c as E,n as N,b as g,P as R,e as H,Q as S,D as j,R as X,q as O,r as U}from"../chunks/index.d48826db.js";import{C as z}from"../chunks/CodePage.d79d6b32.js";import{C as W}from"../chunks/ComponentTabView.c380843f.js";import{M as Y}from"../chunks/MorphingText.0f9217ab.js";import{h as C,k,n as m,s as f,e as r,i as y,j as T,d as w,f as V}from"../chunks/highlighter.71dae262.js";import{T as Z}from"../chunks/TypingText.dc2699dc.js";import{H as F}from"../chunks/H5.e3e07c63.js";function ee(o){let e,s=`${C("script",` ${m("lang")}=${f("ts")}`,`
${k("import")} ${m("MorphingText")} ${k("from")} ${f("src/instant-ui/animations/MorphingText.svelte")}
`)}

${C("div",` ${m("class")}=${f("fs=2 bold w=fit-content")}`,`
	${C("MorpingText",`
		${m("array")}=${r("{")}${r("[",1)}
			${r("[",2)} ${f(y('<div class="c=red">500ms<span>'),"'")}, ${T(500)} ${r("]",2)},
			${r("[",2)} ${f(y('<div class="c=orange">1000ms<span>'),"'")}, ${T(1e3)} ${r("]",2)},
			${r("[",2)} ${f(y('<div class="c=yellow">1500ms<span>'),"'")}, ${T(1500)} ${r("]",2)},
			${r("[",2)} ${f(y('<div class="c=green">2000ms<span>'),"'")}, ${T(2e3)} ${r("]",2)},
			${r("[",2)} ${f(y('<div class="c=blue">2500ms<span>'),"'")}, ${T(2500)} ${r("]",2)},
			${r("[",2)} ${f(y('<div class="c=navy">3000ms<span>'),"'")}, ${T(3e3)} ${r("]",2)},
			${r("[",2)} ${f(y('<div class="c=purple">3500ms<span>'),"'")}, ${T(3500)} ${r("]",2)},
		${r("]",1)}${r("}")}
		${m("longest")}=${r("{")}${T(6)}${r("}")}
	`,!1)}
`)}`,t;return{c(){e=new R(!1),t=H(),this.h()},l($){e=S($,!1),t=H(),this.h()},h(){e.a=t},m($,a){e.m(s,$,a),g($,t,a)},p:j,d($){$&&c(t),$&&e.d()}}}function te(o){let e,s,t,$,a;return s=new Y({props:{array:[['<div class="c=red">500ms<span>',500],['<div class="c=orange">1000ms<span>',1e3],['<div class="c=yellow">1500ms<span>',1500],['<div class="c=green">2000ms<span>',2e3],['<div class="c=blue">2500ms<span>',2500],['<div class="c=navy">3000ms<span>',3e3],['<div class="c=purple">3500ms<span>',3500]],longest:6}}),$=new z({props:{isCode:!0,$$slots:{default:[ee]},$$scope:{ctx:o}}}),{c(){e=G("div"),d(s.$$.fragment),t=P(),d($.$$.fragment),this.h()},l(l){e=J(l,"DIV",{class:!0});var i=K(e);_(s.$$.fragment,i),i.forEach(c),t=E(l),_($.$$.fragment,l),this.h()},h(){N(e,"class","fs=2 bold w=fit-content")},m(l,i){g(l,e,i),h(s,e,null),g(l,t,i),h($,l,i),a=!0},p(l,i){const u={};i&1&&(u.$$scope={dirty:i,ctx:l}),$.$set(u)},i(l){a||(b(s.$$.fragment,l),b($.$$.fragment,l),a=!0)},o(l){x(s.$$.fragment,l),x($.$$.fragment,l),a=!1},d(l){l&&c(e),v(s),l&&c(t),v($,l)}}}function se(o){let e,s;return e=new W({props:{$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){d(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,$){h(e,t,$),s=!0},p(t,[$]){const a={};$&1&&(a.$$scope={dirty:$,ctx:t}),e.$set(a)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}class $e extends q{constructor(e){super(),A(this,e,null,se,L,{})}}function ae(o){let e,s;return{c(){e=new R(!1),s=H(),this.h()},l(t){e=S(t,!1),s=H(),this.h()},h(){e.a=s},m(t,$){e.m(o[0],t,$),g(t,s,$)},p:j,d(t){t&&c(s),t&&e.d()}}}function ne(o){let e,s;return e=new z({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}}),{c(){d(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,$){h(e,t,$),s=!0},p(t,$){const a={};$&2&&(a.$$scope={dirty:$,ctx:t}),e.$set(a)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function le(o){let e,s=`${C("script",` ${m("lang")}=${f("ts")}`,`
${k("import")} ${m("CodePage")} ${k("from")} ${f("cells/boxs/CodePage.svelte")}
${k("import")} ${m("TypingText")} ${k("from")} ${f("src/instant-ui/animations/TypingText.svelte")}
${k("import")} ${r("{")} ${m("bracket")}, ${m("declare")}, ${m("escapeTag")}, ${m("func")}, ${m("html")}, ${m("keyword")}, ${m("name")}, ${m("string")} ${r("}")} ${k("from")} ${f("src/ts/highlighter")}

${w("const")} ${m("text",!0)} = ${f("`",!1)}${w("${")}${V("html")}${r("(")}${f("body")}, ${f("")}, ${f("`",!1)}
	${f(". . . . . .",!1)}
	${w("${")}${V("html")}${r("(",1)}${f("span")}, ${f("`",!1)} ${w("${")}${V("name")}${r("(",2)}${f("class")}${r(")",2)}${w("}")}${f(y("="),!1)}${w("${")}${V("string")}${r("(",2)}${f(y('<span class="foldable">Lorem Ipsum</span><span class="foldable">is simply dummy text of the printing</span><span class="foldable">and typesetting industry</span>'),"`")}${r(")",2)}${w("}")}${f("`",!1)}, ${f("duration: 1000")}${r(")",1)}${w("}")}
${f("`",!1)}${r("}")}${w("}")}${f("`",!1)}
`)}

${C("TypingText",` ${m("classs")}=${f("_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=#fff @dark@_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=--cod-gray")}`,`
	${C("CodePage","",`${r("{")}@${w("html")} ${m("text",!0)}${r("}")}`)}
`)}`,t;return{c(){e=new R(!1),t=H(),this.h()},l($){e=S($,!1),t=H(),this.h()},h(){e.a=t},m($,a){e.m(s,$,a),g($,t,a)},p:j,d($){$&&c(t),$&&e.d()}}}function re(o){let e,s,t,$;return e=new Z({props:{classs:"_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=#fff @dark@_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=--cod-gray",$$slots:{default:[ne]},$$scope:{ctx:o}}}),t=new z({props:{isCode:!0,$$slots:{default:[le]},$$scope:{ctx:o}}}),{c(){d(e.$$.fragment),s=P(),d(t.$$.fragment)},l(a){_(e.$$.fragment,a),s=E(a),_(t.$$.fragment,a)},m(a,l){h(e,a,l),g(a,s,l),h(t,a,l),$=!0},p(a,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:a}),e.$set(i);const u={};l&2&&(u.$$scope={dirty:l,ctx:a}),t.$set(u)},i(a){$||(b(e.$$.fragment,a),b(t.$$.fragment,a),$=!0)},o(a){x(e.$$.fragment,a),x(t.$$.fragment,a),$=!1},d(a){v(e,a),a&&c(s),v(t,a)}}}function fe(o){let e,s;return e=new W({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){d(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,$){h(e,t,$),s=!0},p(t,[$]){const a={};$&2&&(a.$$scope={dirty:$,ctx:t}),e.$set(a)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function oe(o){return[`${C("body","",`
	. . . . . .
	${C("span",` ${m("class")}=${f('<span class="foldable">Lorem Ipsum</span><span class="foldable">is simply dummy text of the printing</span><span class="foldable">and typesetting industry</span>')}`,"duration: 1000")}
`)}`]}class me extends q{constructor(e){super(),A(this,e,oe,fe,L,{})}}function ie(o){let e;return{c(){e=O("Morphing Text")},l(s){e=U(s,"Morphing Text")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function ce(o){let e;return{c(){e=O("Typing Text")},l(s){e=U(s,"Typing Text")},m(s,t){g(s,e,t)},d(s){s&&c(e)}}}function pe(o){let e,s,t,$,a,l,i,u,I,M,D;return s=new F({props:{$$slots:{default:[ie]},$$scope:{ctx:o}}}),$=new $e({}),u=new F({props:{$$slots:{default:[ce]},$$scope:{ctx:o}}}),M=new me({}),{c(){e=P(),d(s.$$.fragment),t=P(),d($.$$.fragment),a=P(),l=G("div"),i=P(),d(u.$$.fragment),I=P(),d(M.$$.fragment),this.h()},l(n){X("svelte-1wkhwnw",document.head).forEach(c),e=E(n),_(s.$$.fragment,n),t=E(n),_($.$$.fragment,n),a=E(n),l=J(n,"DIV",{class:!0}),K(l).forEach(c),i=E(n),_(u.$$.fragment,n),I=E(n),_(M.$$.fragment,n),this.h()},h(){document.title="Text Animation | Reference",N(l,"class","h=1")},m(n,p){g(n,e,p),h(s,n,p),g(n,t,p),h($,n,p),g(n,a,p),g(n,l,p),g(n,i,p),h(u,n,p),g(n,I,p),h(M,n,p),D=!0},p(n,[p]){const B={};p&1&&(B.$$scope={dirty:p,ctx:n}),s.$set(B);const Q={};p&1&&(Q.$$scope={dirty:p,ctx:n}),u.$set(Q)},i(n){D||(b(s.$$.fragment,n),b($.$$.fragment,n),b(u.$$.fragment,n),b(M.$$.fragment,n),D=!0)},o(n){x(s.$$.fragment,n),x($.$$.fragment,n),x(u.$$.fragment,n),x(M.$$.fragment,n),D=!1},d(n){n&&c(e),v(s,n),n&&c(t),v($,n),n&&c(a),n&&c(l),n&&c(i),v(u,n),n&&c(I),v(M,n)}}}class ve extends q{constructor(e){super(),A(this,e,null,pe,L,{})}}export{ve as component};
