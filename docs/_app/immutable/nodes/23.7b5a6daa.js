import{S as ie,i as ce,s as $e,G as ke,k as M,l as N,m as B,h as o,n as R,b,C as te,I as Ce,J as De,K as We,g as z,d as G,O as we,o as ye,L as Te,w as Ee,y as J,z as K,A as Q,B as Y,a as L,c as A,q as O,r as X,H as W,D as fe,P as me,e as oe,Q as he,U as Ie,V as Ve,R as Se}from"../chunks/index.d48826db.js";import{C as de}from"../chunks/CodePage.d79d6b32.js";import{C as pe}from"../chunks/ComponentTabView.c380843f.js";import{h as S,k as Z,n as k,s as E,d as le,f as re,e as I,t as ae,j as ne}from"../chunks/highlighter.71dae262.js";import{H as ue}from"../chunks/H5.e3e07c63.js";function Le(d){let e,l,t,s,f;const $=d[12].default,n=ke($,d,d[11],null);return{c(){e=M("div"),n&&n.c(),this.h()},l(p){e=N(p,"DIV",{class:!0});var u=B(e);n&&n.l(u),u.forEach(o),this.h()},h(){R(e,"class",l="o=scroll touch-action=none "+d[0])},m(p,u){b(p,e,u),n&&n.m(e,null),d[13](e),t=!0,s||(f=[te(window,"mousemove",d[4]),te(window,"mouseup",d[6]),te(e,"mousedown",d[2]),te(e,"touchstart",d[3]),te(e,"touchmove",d[5]),te(e,"touchend",d[7],{passive:!0})],s=!0)},p(p,[u]){n&&n.p&&(!t||u&2048)&&Ce(n,$,p,p[11],t?We($,p[11],u,null):De(p[11]),null),(!t||u&1&&l!==(l="o=scroll touch-action=none "+p[0]))&&R(e,"class",l)},i(p){t||(z(n,p),t=!0)},o(p){G(n,p),t=!1},d(p){p&&o(e),n&&n.d(p),d[13](null),s=!1,we(f)}}}function Ae(d,e,l){let{$$slots:t={},$$scope:s}=e,{align:f=""}=e,{classs:$=""}=e,{duration:n=800}=e;const p=m=>{const v=Date.now();cancelAnimationFrame(D),D=requestAnimationFrame(()=>j(x(0,m)/n,v,n,0))};let u,y=!1,q=0,F=0,T=0,D,P;const V=m=>{y=!0,q=m.clientX,F=Date.now()},U=m=>{V(m.touches[0])},a=m=>{if(y){m.preventDefault();const v=q-m.clientX;u.scrollBy(v,m.clientY),q=m.clientX,v<0&&T>0||v>0&&T<0?(F=Date.now(),T=v):T+=v}},_=m=>{a(new MouseEvent("mousemove",m.touches[0]))},H=()=>{if(y){const m=Date.now();if(f===""){const v=T/(m-F);cancelAnimationFrame(D),D=requestAnimationFrame(()=>g(v,m,n,0))}else{const v=x(T*n*2/(m-F),0);cancelAnimationFrame(D),D=requestAnimationFrame(()=>j(v/n,m,n,0))}T=0,y=!1}},r=()=>{H()},g=(m,v,i,c)=>{if(!m)return;const h=Date.now(),w=Math.min(i,h-v);c+=m*w*i/n+u.scrollLeft,l(1,u.scrollLeft=c,u),c-=u.scrollLeft,(i-=w)>0?(cancelAnimationFrame(D),D=requestAnimationFrame(()=>g(m,h,i,c))):l(1,u.scrollLeft+=c,u)},j=(m,v,i,c)=>{if(!m)return;const h=Date.now(),w=Math.min(i,h-v);c+=m*w+u.scrollLeft,l(1,u.scrollLeft=c,u),c-=u.scrollLeft,(i-=w)>0?(cancelAnimationFrame(D),D=requestAnimationFrame(()=>j(m,h,i,c))):l(1,u.scrollLeft+=c,u)},x=(m,v)=>{const i=u.querySelectorAll(":scope>*"),c=i.length;if(c==0)return 0;let h=0;if(f===""||f==="start"){const w=u.scrollLeft;for(let C=0;;C++){if(h+i[C%c].offsetWidth>=w+m)return w-h+m<i[C%c].offsetWidth/2?v<0?h-w-i[(C-1+c)%c].offsetWidth:v>0?h-w+i[C%c].offsetWidth:h-w:v<0?h-w:v>0?h-w+i[C%c].offsetWidth+i[(C+1)%c].offsetWidth:h-w+i[C%c].offsetWidth;h+=i[C%c].offsetWidth}}else if(f==="end"){const w=u.scrollLeft+u.clientWidth;for(let C=0;;C++){if(h+i[C%c].offsetWidth>=w+m)return w-h+m<i[C%c].offsetWidth/2?v<0?h-w-i[(C-1+c)%c].offsetWidth:v>0?h-w+i[C%c].offsetWidth:h-w:v<0?h-w:v>0?h-w+i[C%c].offsetWidth+i[(C+1)%c].offsetWidth:h-w+i[C%c].offsetWidth;h+=i[C%c].offsetWidth}}else{const w=u.scrollLeft+u.clientWidth/2;for(let C=0;;C++){if(h+i[C%c].offsetWidth/2>=w+m)return w-h+m<0?v<0?Math.floor(h-w-i[(C-1)%c].offsetWidth-i[(C-2+c)%c].offsetWidth/2):v>0?Math.floor(h-w+i[C%c].offsetWidth/2):Math.floor(h-w-i[(C-1+c)%c].offsetWidth/2):v<0?Math.floor(h-w-i[(C-1+c)%c].offsetWidth/2):v>0?Math.floor(h-w+i[C%c].offsetWidth+i[(C+1)%c].offsetWidth/2):Math.floor(h-w+i[C%c].offsetWidth/2);h+=i[C%c].offsetWidth}}},ee=(m,v)=>{let i=0;v.forEach(h=>{i=Math.max(i,h.offsetWidth)});const c=m.offsetWidth+i*3;for(;m.scrollWidth<c;)v.forEach(h=>{m.appendChild(h.cloneNode(!0))})};ye(()=>{const m=u.querySelectorAll(":scope>*");if(m.length==0)return;ee(u,m);let v=u.firstElementChild,i=u.lastElementChild;v.before(i),v=u.firstElementChild,i=u.lastElementChild;const c=new IntersectionObserver(h=>{for(const w of h)if(w.isIntersecting){c.unobserve(v),c.unobserve(i);const C=w.target;C===v?(C.before(i),l(1,u.scrollLeft+=i.offsetWidth+1,u)):(C.after(v),l(1,u.scrollLeft-=v.offsetWidth+1,u)),v=u.firstElementChild,i=u.lastElementChild,c.observe(v),c.observe(i)}},{root:u,threshold:0});c.observe(v),c.observe(i),P=setInterval(()=>{const h=x(0,1);(!h||u.scrollLeft!=l(1,u.scrollLeft+=h,u))&&clearTimeout(P)},50)}),Te(()=>clearInterval(P));function se(m){Ee[m?"unshift":"push"](()=>{u=m,l(1,u)})}return d.$$set=m=>{"align"in m&&l(8,f=m.align),"classs"in m&&l(0,$=m.classs),"duration"in m&&l(9,n=m.duration),"$$scope"in m&&l(11,s=m.$$scope)},[$,u,V,U,a,_,H,r,f,n,p,s,t,se]}class be extends ie{constructor(e){super(),ce(this,e,Ae,Le,$e,{align:8,classs:0,duration:9,snap:10})}get snap(){return this.$$.ctx[10]}}function Me(d){let e,l,t,s,f,$,n,p,u,y,q,F,T,D,P,V,U,a,_,H;return{c(){e=M("div"),l=O("red"),t=L(),s=M("div"),f=O("orange"),$=L(),n=M("div"),p=O("yellow"),u=L(),y=M("div"),q=O("green"),F=L(),T=M("div"),D=O("blue"),P=L(),V=M("div"),U=O("navy"),a=L(),_=M("div"),H=O("purple"),this.h()},l(r){e=N(r,"DIV",{class:!0});var g=B(e);l=X(g,"red"),g.forEach(o),t=A(r),s=N(r,"DIV",{class:!0});var j=B(s);f=X(j,"orange"),j.forEach(o),$=A(r),n=N(r,"DIV",{class:!0});var x=B(n);p=X(x,"yellow"),x.forEach(o),u=A(r),y=N(r,"DIV",{class:!0});var ee=B(y);q=X(ee,"green"),ee.forEach(o),F=A(r),T=N(r,"DIV",{class:!0});var se=B(T);D=X(se,"blue"),se.forEach(o),P=A(r),V=N(r,"DIV",{class:!0});var m=B(V);U=X(m,"navy"),m.forEach(o),a=A(r),_=N(r,"DIV",{class:!0});var v=B(_);H=X(v,"purple"),v.forEach(o),this.h()},h(){R(e,"class","w=90% h=100% bg=red ta=center"),R(s,"class","w=90% h=100% bg=orange ta=center"),R(n,"class","w=90% h=100% bg=yellow ta=center"),R(y,"class","w=90% h=100% bg=green ta=center"),R(T,"class","w=90% h=100% bg=blue ta=center"),R(V,"class","w=90% h=100% bg=navy ta=center"),R(_,"class","w=90% h=100% bg=purple ta=center")},m(r,g){b(r,e,g),W(e,l),b(r,t,g),b(r,s,g),W(s,f),b(r,$,g),b(r,n,g),W(n,p),b(r,u,g),b(r,y,g),W(y,q),b(r,F,g),b(r,T,g),W(T,D),b(r,P,g),b(r,V,g),W(V,U),b(r,a,g),b(r,_,g),W(_,H)},p:fe,d(r){r&&o(e),r&&o(t),r&&o(s),r&&o($),r&&o(n),r&&o(u),r&&o(y),r&&o(F),r&&o(T),r&&o(P),r&&o(V),r&&o(a),r&&o(_)}}}function Ne(d){let e,l=`${S("script",` ${k("lang")}=${E("ts")}`,`
${Z("import")} ${k("CarouselSlider")} ${Z("from")} ${E("organs/@common/utils/CarouselSlider.svelte")}
`)}

${S("CarouselSlider",` ${k("classs")}=${E(`flex op=.5
		::-webkit-scrollbar/none`)}`,`
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=red ta=center")}`,"red")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=orange ta=center")}`,"orange")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=yellow ta=center")}`,"yellow")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=green ta=center")}`,"green")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=blue ta=center")}`,"blue")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=navy ta=center")}`,"navy")}
	${S("div",` ${k("class")}=${E("w=90% h=100% bg=purple ta=center")}`,"purple")}
`)}`,t;return{c(){e=new me(!1),t=oe(),this.h()},l(s){e=he(s,!1),t=oe(),this.h()},h(){e.a=t},m(s,f){e.m(l,s,f),b(s,t,f)},p:fe,d(s){s&&o(t),s&&e.d()}}}function Be(d){let e,l,t,s;return e=new be({props:{classs:`flex op=.5\r
			::-webkit-scrollbar/none`,$$slots:{default:[Me]},$$scope:{ctx:d}}}),t=new de({props:{isCode:!0,$$slots:{default:[Ne]},$$scope:{ctx:d}}}),{c(){J(e.$$.fragment),l=L(),J(t.$$.fragment)},l(f){K(e.$$.fragment,f),l=A(f),K(t.$$.fragment,f)},m(f,$){Q(e,f,$),b(f,l,$),Q(t,f,$),s=!0},p(f,$){const n={};$&1&&(n.$$scope={dirty:$,ctx:f}),e.$set(n);const p={};$&1&&(p.$$scope={dirty:$,ctx:f}),t.$set(p)},i(f){s||(z(e.$$.fragment,f),z(t.$$.fragment,f),s=!0)},o(f){G(e.$$.fragment,f),G(t.$$.fragment,f),s=!1},d(f){Y(e,f),f&&o(l),Y(t,f)}}}function Re(d){let e,l;return e=new pe({props:{$$slots:{default:[Be]},$$scope:{ctx:d}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const f={};s&1&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}class qe extends ie{constructor(e){super(),ce(this,e,null,Re,$e,{})}}function Fe(d){let e,l,t,s,f;return{c(){e=M("div"),l=O("red"),t=L(),s=M("div"),f=O("orange"),this.h()},l($){e=N($,"DIV",{class:!0});var n=B(e);l=X(n,"red"),n.forEach(o),t=A($),s=N($,"DIV",{class:!0});var p=B(s);f=X(p,"orange"),p.forEach(o),this.h()},h(){R(e,"class","w=10% h=100% bg=red ta=center"),R(s,"class","w=20% h=100% bg=orange ta=center")},m($,n){b($,e,n),W(e,l),b($,t,n),b($,s,n),W(s,f)},p:fe,d($){$&&o(e),$&&o(t),$&&o(s)}}}function Oe(d){let e,l=`${S("script",` ${k("lang")}=${E("ts")}`,`
${Z("import")} ${k("CarouselSlider")} ${Z("from")} ${E("organs/@common/utils/CarouselSlider.svelte")}
`)}

${S("CarouselSlider",` ${k("classs")}=${E(`flex h=3 op=.5
		::-webkit-scrollbar/none`)}`,`
	${S("div",` ${k("class")}=${E("w=10% h=100% bg=red ta=center")}`,"red")}
	${S("div",` ${k("class")}=${E("w=20% h=100% bg=orange ta=center")}`,"orange")}
`)}`,t;return{c(){e=new me(!1),t=oe(),this.h()},l(s){e=he(s,!1),t=oe(),this.h()},h(){e.a=t},m(s,f){e.m(l,s,f),b(s,t,f)},p:fe,d(s){s&&o(t),s&&e.d()}}}function Xe(d){let e,l,t,s,f;return e=new be({props:{classs:`flex h=3 op=.5\r
			::-webkit-scrollbar/none`,$$slots:{default:[Fe]},$$scope:{ctx:d}}}),s=new de({props:{isCode:!0,$$slots:{default:[Oe]},$$scope:{ctx:d}}}),{c(){J(e.$$.fragment),l=L(),t=M("div"),J(s.$$.fragment)},l($){K(e.$$.fragment,$),l=A($),t=N($,"DIV",{});var n=B(t);K(s.$$.fragment,n),n.forEach(o)},m($,n){Q(e,$,n),b($,l,n),b($,t,n),Q(s,t,null),f=!0},p($,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:$}),e.$set(p);const u={};n&1&&(u.$$scope={dirty:n,ctx:$}),s.$set(u)},i($){f||(z(e.$$.fragment,$),z(s.$$.fragment,$),f=!0)},o($){G(e.$$.fragment,$),G(s.$$.fragment,$),f=!1},d($){Y(e,$),$&&o(l),$&&o(t),Y(s)}}}function Pe(d){let e,l;return e=new pe({props:{$$slots:{default:[Xe]},$$scope:{ctx:d}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const f={};s&1&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}class Ue extends ie{constructor(e){super(),ce(this,e,null,Pe,$e,{})}}function He(d){let e,l,t,s,f,$,n,p,u,y,q,F,T,D,P,V,U,a,_,H;return{c(){e=M("div"),l=O("red"),t=L(),s=M("div"),f=O("orange"),$=L(),n=M("div"),p=O("yellow"),u=L(),y=M("div"),q=O("green"),F=L(),T=M("div"),D=O("blue"),P=L(),V=M("div"),U=O("navy"),a=L(),_=M("div"),H=O("purple"),this.h()},l(r){e=N(r,"DIV",{class:!0});var g=B(e);l=X(g,"red"),g.forEach(o),t=A(r),s=N(r,"DIV",{class:!0});var j=B(s);f=X(j,"orange"),j.forEach(o),$=A(r),n=N(r,"DIV",{class:!0});var x=B(n);p=X(x,"yellow"),x.forEach(o),u=A(r),y=N(r,"DIV",{class:!0});var ee=B(y);q=X(ee,"green"),ee.forEach(o),F=A(r),T=N(r,"DIV",{class:!0});var se=B(T);D=X(se,"blue"),se.forEach(o),P=A(r),V=N(r,"DIV",{class:!0});var m=B(V);U=X(m,"navy"),m.forEach(o),a=A(r),_=N(r,"DIV",{class:!0});var v=B(_);H=X(v,"purple"),v.forEach(o),this.h()},h(){R(e,"class","w=10% h=100% bg=red ta=center"),R(s,"class","w=20% h=100% bg=orange ta=center"),R(n,"class","w=30% h=100% bg=yellow ta=center"),R(y,"class","w=40% h=100% bg=green ta=center"),R(T,"class","w=50% h=100% bg=blue ta=center"),R(V,"class","w=60% h=100% bg=navy ta=center"),R(_,"class","w=70% h=100% bg=purple ta=center")},m(r,g){b(r,e,g),W(e,l),b(r,t,g),b(r,s,g),W(s,f),b(r,$,g),b(r,n,g),W(n,p),b(r,u,g),b(r,y,g),W(y,q),b(r,F,g),b(r,T,g),W(T,D),b(r,P,g),b(r,V,g),W(V,U),b(r,a,g),b(r,_,g),W(_,H)},p:fe,d(r){r&&o(e),r&&o(t),r&&o(s),r&&o($),r&&o(n),r&&o(u),r&&o(y),r&&o(F),r&&o(T),r&&o(P),r&&o(V),r&&o(a),r&&o(_)}}}function je(d){let e,l=`${S("script",` ${k("lang")}=${E("ts")}`,`
${Z("import")} ${k("CarouselSlider")} ${Z("from")} ${E("organs/@common/utils/CarouselSlider.svelte")}

${le("let")} ${k("align")}: ${E("")} | ${E("start")} | ${E("center")} | ${E("end")} = ${E("center")}
${le("let")} ${re("snap")}: ${I("(")}${k("direction")}: ${ae("number")}${I(")")} ${le("=>")} ${ae("void")}
`)}

${S("div","",`
	${S("CarouselSlider",` ${Z("bind")}:${re("snap")}
				${k("classs")}=${E("flex h=3 op=.5 ::-webkit-scrollbar/none")}
				${I("{")}${k("align")}${I("}")}
				${k("duration")}=${I("{")}${ne(200)}${I("}")}`,`
		${S("div",` ${k("class")}=${E("w=10% h=100% bg=red ta=center")}`,"red")}
		${S("div",` ${k("class")}=${E("w=20% h=100% bg=orange ta=center")}`,"orange")}
		${S("div",` ${k("class")}=${E("w=30% h=100% bg=yellow ta=center")}`,"yellow")}
		${S("div",` ${k("class")}=${E("w=40% h=100% bg=green ta=center")}`,"green")}
		${S("div",` ${k("class")}=${E("w=50% h=100% bg=blue ta=center")}`,"blue")}
		${S("div",` ${k("class")}=${E("w=60% h=100% bg=navy ta=center")}`,"navy")}
		${S("div",` ${k("class")}=${E("w=70% h=100% bg=purple ta=center")}`,"purple")}
	`)}
	${S("div",` ${k("class")}=${E("h=1")}`,"")}
	${S("div",` ${k("class")}=${E(`flex jc=space-between g=1
			>button/flex=auto`)}`,`
		${S("button",` ${k("class")}=${E(`bg=--chambray w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${re("snap")}${I("(",1)}${ne(-1)}${I(")",1)}${I("}")}`,"PREV")}
		${S("button",` ${k("class")}=${E(`bg=--chambray w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${I("{",1)} ${k("align")} = ${E("start")}; ${re("snap")}${I("(",2)}${ne(0)}${I(")",2)} ${I("}",1)}${I("}")}`,"START")}
		${S("button",` ${k("class")}=${E(`bg=--chambray w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${I("{",1)} ${k("align")} = ${E("center")}; ${re("snap")}${I("(",2)}${ne(0)}${I(")",2)} ${I("}",1)}${I("}")}`,"CENTER")}
		${S("button",` ${k("class")}=${E(`bg=--chambray w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${I("{",1)} ${k("align")} = ${E("end")}; ${re("snap")}${I("(",2)}${ne(0)}${I(")",2)} ${I("}",1)}${I("}")}`,"END")}
		${S("button",` ${k("class")}=${E(`bg=--chambray w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${Z("on")}:${ae("click")}=${I("()",1)} ${le("=>")} ${re("snap")}${I("(",1)}${ne(1)}${I(")",1)}${I("}")}`,"NEXT")}
	`)}
`)}`,t;return{c(){e=new me(!1),t=oe(),this.h()},l(s){e=he(s,!1),t=oe(),this.h()},h(){e.a=t},m(s,f){e.m(l,s,f),b(s,t,f)},p:fe,d(s){s&&o(t),s&&e.d()}}}function ze(d){let e,l,t,s,f,$,n,p,u,y,q,F,T,D,P,V,U,a,_,H,r,g,j,x,ee,se;function m(i){d[2](i)}let v={classs:"flex h=3 op=.5 ::-webkit-scrollbar/none",align:d[0],duration:200,$$slots:{default:[He]},$$scope:{ctx:d}};return d[1]!==void 0&&(v.snap=d[1]),l=new be({props:v}),Ee.push(()=>Ie(l,"snap",m)),j=new de({props:{isCode:!0,$$slots:{default:[je]},$$scope:{ctx:d}}}),{c(){e=M("div"),J(l.$$.fragment),s=L(),f=M("div"),$=L(),n=M("div"),p=M("button"),u=O("PREV"),y=L(),q=M("button"),F=O("START"),T=L(),D=M("button"),P=O("CENTER"),V=L(),U=M("button"),a=O("END"),_=L(),H=M("button"),r=O("NEXT"),g=L(),J(j.$$.fragment),this.h()},l(i){e=N(i,"DIV",{});var c=B(e);K(l.$$.fragment,c),s=A(c),f=N(c,"DIV",{class:!0}),B(f).forEach(o),$=A(c),n=N(c,"DIV",{class:!0});var h=B(n);p=N(h,"BUTTON",{class:!0});var w=B(p);u=X(w,"PREV"),w.forEach(o),y=A(h),q=N(h,"BUTTON",{class:!0});var C=B(q);F=X(C,"START"),C.forEach(o),T=A(h),D=N(h,"BUTTON",{class:!0});var ve=B(D);P=X(ve,"CENTER"),ve.forEach(o),V=A(h),U=N(h,"BUTTON",{class:!0});var _e=B(U);a=X(_e,"END"),_e.forEach(o),_=A(h),H=N(h,"BUTTON",{class:!0});var ge=B(H);r=X(ge,"NEXT"),ge.forEach(o),h.forEach(o),c.forEach(o),g=A(i),K(j.$$.fragment,i),this.h()},h(){R(f,"class","h=1"),R(p,"class","bg=--chambray w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(q,"class","bg=--chambray w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(D,"class","bg=--chambray w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(U,"class","bg=--chambray w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(H,"class","bg=--chambray w=6.25 h=1.5 br=.25 fs=.75 :hover/bg=--havelock-blue"),R(n,"class","flex jc=space-between g=1 >button/flex=auto")},m(i,c){b(i,e,c),Q(l,e,null),W(e,s),W(e,f),W(e,$),W(e,n),W(n,p),W(p,u),W(n,y),W(n,q),W(q,F),W(n,T),W(n,D),W(D,P),W(n,V),W(n,U),W(U,a),W(n,_),W(n,H),W(H,r),b(i,g,c),Q(j,i,c),x=!0,ee||(se=[te(p,"click",d[3]),te(q,"click",d[4]),te(D,"click",d[5]),te(U,"click",d[6]),te(H,"click",d[7])],ee=!0)},p(i,c){const h={};c&1&&(h.align=i[0]),c&256&&(h.$$scope={dirty:c,ctx:i}),!t&&c&2&&(t=!0,h.snap=i[1],Ve(()=>t=!1)),l.$set(h);const w={};c&256&&(w.$$scope={dirty:c,ctx:i}),j.$set(w)},i(i){x||(z(l.$$.fragment,i),z(j.$$.fragment,i),x=!0)},o(i){G(l.$$.fragment,i),G(j.$$.fragment,i),x=!1},d(i){i&&o(e),Y(l),i&&o(g),Y(j,i),ee=!1,we(se)}}}function Ge(d){let e,l;return e=new pe({props:{$$slots:{default:[ze]},$$scope:{ctx:d}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,s){Q(e,t,s),l=!0},p(t,[s]){const f={};s&259&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Je(d,e,l){let t="center",s;function f(q){s=q,l(1,s)}return[t,s,f,()=>s(-1),()=>{l(0,t="start"),s(0)},()=>{l(0,t="center"),s(0)},()=>{l(0,t="end"),s(0)},()=>s(1)]}class Ke extends ie{constructor(e){super(),ce(this,e,Je,Ge,$e,{})}}function Qe(d){let e;return{c(){e=O("Basic")},l(l){e=X(l,"Basic")},m(l,t){b(l,e,t)},d(l){l&&o(e)}}}function Ye(d){let e;return{c(){e=O("Copy Childs")},l(l){e=X(l,"Copy Childs")},m(l,t){b(l,e,t)},d(l){l&&o(e)}}}function xe(d){let e;return{c(){e=O("Snap Buttons")},l(l){e=X(l,"Snap Buttons")},m(l,t){b(l,e,t)},d(l){l&&o(e)}}}function Ze(d){let e,l,t,s,f,$,n,p,u,y,q,F,T,D,P,V,U;return l=new ue({props:{$$slots:{default:[Qe]},$$scope:{ctx:d}}}),s=new qe({}),p=new ue({props:{$$slots:{default:[Ye]},$$scope:{ctx:d}}}),y=new Ue({}),D=new ue({props:{$$slots:{default:[xe]},$$scope:{ctx:d}}}),V=new Ke({}),{c(){e=L(),J(l.$$.fragment),t=L(),J(s.$$.fragment),f=L(),$=M("div"),n=L(),J(p.$$.fragment),u=L(),J(y.$$.fragment),q=L(),F=M("div"),T=L(),J(D.$$.fragment),P=L(),J(V.$$.fragment),this.h()},l(a){Se("svelte-1hvhyjm",document.head).forEach(o),e=A(a),K(l.$$.fragment,a),t=A(a),K(s.$$.fragment,a),f=A(a),$=N(a,"DIV",{class:!0}),B($).forEach(o),n=A(a),K(p.$$.fragment,a),u=A(a),K(y.$$.fragment,a),q=A(a),F=N(a,"DIV",{class:!0}),B(F).forEach(o),T=A(a),K(D.$$.fragment,a),P=A(a),K(V.$$.fragment,a),this.h()},h(){document.title="Carousel Slider | Reference",R($,"class","h=1"),R(F,"class","h=1")},m(a,_){b(a,e,_),Q(l,a,_),b(a,t,_),Q(s,a,_),b(a,f,_),b(a,$,_),b(a,n,_),Q(p,a,_),b(a,u,_),Q(y,a,_),b(a,q,_),b(a,F,_),b(a,T,_),Q(D,a,_),b(a,P,_),Q(V,a,_),U=!0},p(a,[_]){const H={};_&1&&(H.$$scope={dirty:_,ctx:a}),l.$set(H);const r={};_&1&&(r.$$scope={dirty:_,ctx:a}),p.$set(r);const g={};_&1&&(g.$$scope={dirty:_,ctx:a}),D.$set(g)},i(a){U||(z(l.$$.fragment,a),z(s.$$.fragment,a),z(p.$$.fragment,a),z(y.$$.fragment,a),z(D.$$.fragment,a),z(V.$$.fragment,a),U=!0)},o(a){G(l.$$.fragment,a),G(s.$$.fragment,a),G(p.$$.fragment,a),G(y.$$.fragment,a),G(D.$$.fragment,a),G(V.$$.fragment,a),U=!1},d(a){a&&o(e),Y(l,a),a&&o(t),Y(s,a),a&&o(f),a&&o($),a&&o(n),Y(p,a),a&&o(u),Y(y,a),a&&o(q),a&&o(F),a&&o(T),Y(D,a),a&&o(P),Y(V,a)}}}class at extends ie{constructor(e){super(),ce(this,e,null,Ze,$e,{})}}export{at as component};
