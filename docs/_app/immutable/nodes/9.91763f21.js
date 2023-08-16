import{s as I,L as A,e as D,M as R,i as p,u as q,d as m,a as g,f as K,N as j,c as b,g as P,h as F,j as G,l as N,m as U}from"../chunks/scheduler.f6e53d32.js";import{S as C,i as L,b as y,d as H,m as M,a as S,t as T,e as v}from"../chunks/index.c26f0603.js";import{H as V}from"../chunks/H5.ebc619f0.js";import{C as z}from"../chunks/CodePage.9e282020.js";import{c as f,h,a as u,k,b as r,n as o,s as l,f as E}from"../chunks/highlighter.ff4ee7c2.js";import{v as w}from"../chunks/version.28fb0bd0.js";function B(n){let e,t;return{c(){e=new A(!1),t=D(),this.h()},l(s){e=R(s,!1),t=D(),this.h()},h(){e.a=t},m(s,$){e.m(n[0],s,$),p(s,t,$)},p:q,d(s){s&&(m(t),e.d())}}}function J(n){let e,t;return e=new z({props:{$$slots:{default:[B]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,$){M(e,s,$),t=!0},p(s,[$]){const i={};$&2&&(i.$$scope={dirty:$,ctx:s}),e.$set(i)},i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){v(e,s)}}}function O(n){return[`${f("<!-- In light theme, dark mode styles are disabled with FALSE(width<0) -->")}
${h("style",` ${o("css-lube")}=${l(w)}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("width")}<${l("0",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}

${f("<!-- In dark theme, dark mode styles are applied with TRUE(width>0) -->")}
${h("style",` ${o("css-lube")}=${l(w)}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("width")}>${l("0",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}
${f("<!-- In system theme, the dark mode style is applied as a media query -->")}
${h("style",` ${o("css-lube")}=${l(w)}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("prefers-color-scheme")}:${l("dark",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}

${h("span",` ${o("class")}=${l("c=red @dark@c=blue")}`,`
	<span class="td=line-through">{ color: red }</span>
	<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
`)}

${h("script","",`
	${o("localStorage")}.${E("setItem")}${r("(")}${l("THEME")}, ${l("LIGHT")}${r(")")} ${f("// if THEME is not DARK and true, light theme is applied")}
	${o("localStorage")}.${E("setItem")}${r("(")}${l("THEME")}, ${l("DARK")}${r(")")} ${f("// if THEME is DARK, dark theme is applied")}
	${o("localStorage")}.${E("removeItem")}${r("(")}${l("THEME")}${r(")")} ${f("// if THEME is false, theme is follow system settings")}
	${o("window")}${r("[")}${l("CSS Lube")}${r("]()")} ${f("// update style sheet")}
`)}`]}class Q extends C{constructor(e){super(),L(this,e,O,J,I,{})}}function W(n){let e;return{c(){e=N("Dark Mode")},l(t){e=U(t,"Dark Mode")},m(t,s){p(t,e,s)},d(t){t&&m(e)}}}function X(n){let e,t,s,$,i,d,_;return t=new V({props:{$$slots:{default:[W]},$$scope:{ctx:n}}}),d=new Q({}),{c(){e=g(),y(t.$$.fragment),s=g(),$=K("div"),i=g(),y(d.$$.fragment),this.h()},l(a){j("svelte-tsmyjm",document.head).forEach(m),e=b(a),H(t.$$.fragment,a),s=b(a),$=P(a,"DIV",{class:!0}),F($).forEach(m),i=b(a),H(d.$$.fragment,a),this.h()},h(){document.title="Dark Mode | CSS Lube",G($,"class","h=1")},m(a,c){p(a,e,c),M(t,a,c),p(a,s,c),p(a,$,c),p(a,i,c),M(d,a,c),_=!0},p(a,[c]){const x={};c&1&&(x.$$scope={dirty:c,ctx:a}),t.$set(x)},i(a){_||(S(t.$$.fragment,a),S(d.$$.fragment,a),_=!0)},o(a){T(t.$$.fragment,a),T(d.$$.fragment,a),_=!1},d(a){a&&(m(e),m(s),m($),m(i)),v(t,a),v(d,a)}}}class re extends C{constructor(e){super(),L(this,e,null,X,I,{})}}export{re as component};