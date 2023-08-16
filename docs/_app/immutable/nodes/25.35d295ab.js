import{s as ce,B as He,a as z,f as j,c as q,g as J,h as U,d as L,j as X,k as pe,i as N,r as $e,C as Ce,D as Le,E as Ae,J as Fe,P as Se,p as ue,z as se,l as Xe,m as Ne,K as Oe,x as P,U as je,n as Je,A as R,y as Ve,u as ne,o as Ue,O as xe,H as Te,L as ke,e as le,M as Ie,F as Be,N as Qe}from"../chunks/scheduler.f6e53d32.js";import{S as ge,i as he,a as B,t as M,b as x,d as Q,m as ee,e as te,f as we,g as be,c as De}from"../chunks/index.c26f0603.js";import{e as ve}from"../chunks/each.e59479a4.js";import{t as _e,d as oe,a as ie,b as de,c as fe,e as me}from"../chunks/store.14238685.js";import{C as ye}from"../chunks/CodePage.9e282020.js";import{C as et}from"../chunks/ComponentTabView.2d6dc2e6.js";import{h as S,k as g,n as t,s as _,b as e,g as c,t as I,f as b,d as V}from"../chunks/highlighter.ff4ee7c2.js";import{I as Ke}from"../chunks/IdeSvelte.2c19e0d3.js";import{I as tt}from"../chunks/IdeTypescript.d0632587.js";const $t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:Ee}=$t;function rt(n){let $,s,r,l,i;const o=n[10].default,f=He(o,n,n[9],null);return{c(){$=z(),s=j("div"),f&&f.c(),this.h()},l(a){$=q(a),s=J(a,"DIV",{class:!0,style:!0});var T=U(s);f&&f.l(T),T.forEach(L),this.h()},h(){X(s,"class",n[0]),pe(s,"position","relative")},m(a,T){N(a,$,T),N(a,s,T),f&&f.m(s,null),n[11](s),r=!0,l||(i=[$e(Ee.body,"mousemove",n[2]),$e(Ee.body,"mouseup",n[4]),$e(Ee.body,"touchmove",n[3]),$e(Ee.body,"touchend",n[5])],l=!0)},p(a,[T]){f&&f.p&&(!r||T&512)&&Ce(f,o,a,a[9],r?Ae(o,a[9],T,null):Le(a[9]),null),(!r||T&1)&&X(s,"class",a[0])},i(a){r||(B(f,a),r=!0)},o(a){M(f,a),r=!1},d(a){a&&(L($),L(s)),f&&f.d(a),n[11](null),l=!1,Fe(i)}}}function nt(n,$,s){let{$$slots:r={},$$scope:l}=$,{classs:i=""}=$,{isDragging:o=!1}=$,{dragElement:f=null}=$;const a=(u,C,h)=>{const m=w.getBoundingClientRect();s(7,f=h),E=u-m.left,A=C-m.top,w.append(f),s(6,o=!0)},T=Se();let w,y,E=0,A=0,W=0,O=0,Y;const G=u=>{if(o){const C=F(document.elementsFromPoint(u.clientX,u.clientY));C&&y!=C&&(y&&y.dispatchEvent(new DragEvent("dragleave")),y=C,y.dispatchEvent(new DragEvent("dragenter"))),W=u.clientX,O=u.clientY,re(),T("dragmove"),D(Date.now())}},H=u=>{G(u.touches[0])},k=()=>{o&&(w.removeChild(f),y&&(y.dispatchEvent(new DragEvent("drop")),y=null),s(7,f=null),s(6,o=!1),T("dragend"))},Z=()=>{k()},F=u=>{const C=u.length;for(let h=0;h<C;h++)if(!f.compareDocumentPosition(u[h]))return u[h+1]},re=()=>{const u=w.getBoundingClientRect();s(7,f.style.transform=`translate(${W-E-u.left}px, ${O-A-u.top}px)`,f)};function D(u){Y||(Y=requestAnimationFrame(()=>{Y=0;let C=w;for(;C!==document.body;){if(C.scrollWidth>C.clientWidth){if(C.scrollLeft)break;if(C.scrollLeft=1,C.scrollLeft){C.scrollLeft=0;break}}C=C.parentElement}let h=w;for(;h!==document.body;){if(h.scrollHeight>h.clientHeight){if(h.scrollTop)break;if(h.scrollTop=1,h.scrollTop){h.scrollTop=0;break}}h=h.parentElement}const m=f==null?void 0:f.getBoundingClientRect();if(!m)return;const p=C.getBoundingClientRect(),v=h.getBoundingClientRect();if(m.left>=p.left&&m.right<=p.right&&m.top>=v.top&&m.bottom<=v.bottom)return;const K=Date.now();u=K-u,m.left<p.left?C.scrollBy((m.left-p.left)*u/30,0):m.right>p.right&&C.scrollBy((m.right-p.right)*u/30,0),m.top<v.top?h.scrollBy(0,(m.top-v.top)*u/30):m.bottom>v.bottom&&h.scrollBy(0,(m.bottom-v.bottom)*u/30),re(),D(K)}))}function d(u){ue[u?"unshift":"push"](()=>{w=u,s(1,w)})}return n.$$set=u=>{"classs"in u&&s(0,i=u.classs),"isDragging"in u&&s(6,o=u.isDragging),"dragElement"in u&&s(7,f=u.dragElement),"$$scope"in u&&s(9,l=u.$$scope)},[i,w,G,H,k,Z,o,f,a,l,r,d]}class st extends ge{constructor($){super(),he(this,$,nt,rt,ce,{classs:0,isDragging:6,dragElement:7,setDragElement:8})}get setDragElement(){return this.$$.ctx[8]}}const ot=n=>({}),Pe=n=>({});function lt(n){let $,s,r,l,i,o;const f=n[10].default,a=He(f,n,n[9],null),T=n[10].drag,w=He(T,n,n[9],Pe);return{c(){$=j("div"),a&&a.c(),s=z(),r=j("div"),w&&w.c(),this.h()},l(y){$=J(y,"DIV",{class:!0,style:!0});var E=U($);a&&a.l(E),E.forEach(L),s=q(y),r=J(y,"DIV",{style:!0});var A=U(r);w&&w.l(A),A.forEach(L),this.h()},h(){X($,"class",n[0]),pe($,"touch-action","none"),pe($,"user-select","none"),pe($,"width","fit-content"),pe(r,"display","none")},m(y,E){N(y,$,E),a&&a.m($,null),n[11]($),N(y,s,E),N(y,r,E),w&&w.m(r,null),n[12](r),l=!0,i||(o=[$e($,"mousedown",n[3]),$e($,"mouseup",n[5]),$e($,"touchstart",n[4]),$e($,"touchend",n[6],{passive:!0})],i=!0)},p(y,[E]){a&&a.p&&(!l||E&512)&&Ce(a,f,y,y[9],l?Ae(f,y[9],E,null):Le(y[9]),null),(!l||E&1)&&X($,"class",y[0]),w&&w.p&&(!l||E&512)&&Ce(w,T,y,y[9],l?Ae(T,y[9],E,ot):Le(y[9]),Pe)},i(y){l||(B(a,y),B(w,y),l=!0)},o(y){M(a,y),M(w,y),l=!1},d(y){y&&(L($),L(s),L(r)),a&&a.d(y),n[11](null),w&&w.d(y),n[12](null),i=!1,Fe(o)}}}function at(n,$,s){let{$$slots:r={},$$scope:l}=$,{classs:i=""}=$,{delay:o=0}=$,{setDragElement:f}=$;const a=Se();let T,w,y;const E=H=>{y=setTimeout(()=>{const k=(w.firstChild||T).cloneNode(!0);k.style.position="absolute",k.style.top=T.offsetTop+"px",k.style.left=T.offsetLeft+"px",f(H.clientX,H.clientY,k),a("dragstart")},o)},A=H=>{E(H.touches[0])},W=()=>{clearTimeout(y)},O=()=>{clearTimeout(y)};function Y(H){ue[H?"unshift":"push"](()=>{T=H,s(1,T)})}function G(H){ue[H?"unshift":"push"](()=>{w=H,s(2,w)})}return n.$$set=H=>{"classs"in H&&s(0,i=H.classs),"delay"in H&&s(7,o=H.delay),"setDragElement"in H&&s(8,f=H.setDragElement),"$$scope"in H&&s(9,l=H.$$scope)},[i,T,w,E,A,W,O,o,f,l,r,Y,G]}class it extends ge{constructor($){super(),he(this,$,at,lt,ce,{classs:0,delay:7,setDragElement:8})}}function ft(n){let $,s=n[1][n[4]]+"",r,l,i,o,f;return{c(){$=j("div"),r=Xe(s),this.h()},l(a){$=J(a,"DIV",{class:!0});var T=U($);r=Ne(T,s),T.forEach(L),this.h()},h(){var a,T;X($,"class",l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+n[2][n[4]]+"px) "+(n[7]?"tt="+n[5]+"ms":"")+" "+(((a=n[8])==null?void 0:a.index)===n[4]&&((T=n[8])==null?void 0:T.type)===n[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(n[1][n[4]]?"":"none")),Oe(()=>n[15].call($))},m(a,T){N(a,$,T),P($,r),i=je($,n[15].bind($)),o||(f=[$e($,"click",n[9]),$e($,"dragenter",n[10])],o=!0)},p(a,T){var w,y;T&18&&s!==(s=a[1][a[4]]+"")&&Je(r,s),T&446&&l!==(l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+a[2][a[4]]+"px) "+(a[7]?"tt="+a[5]+"ms":"")+" "+(((w=a[8])==null?void 0:w.index)===a[4]&&((y=a[8])==null?void 0:y.type)===a[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(a[1][a[4]]?"":"none"))&&X($,"class",l)},d(a){a&&L($),i(),o=!1,Fe(f)}}}function ut(n){let $,s=n[1][n[4]]+"!!",r,l;return{c(){$=j("div"),r=Xe(s),this.h()},l(i){$=J(i,"DIV",{slot:!0,class:!0});var o=U($);r=Ne(o,s),o.forEach(L),this.h()},h(){X($,"slot","drag"),X($,"class","ta=center fs=2.5 cs=move c=#000 @dark@c=#fff"),Oe(()=>n[14].call($))},m(i,o){N(i,$,o),P($,r),l=je($,n[14].bind($))},p(i,o){o&18&&s!==(s=i[1][i[4]]+"!!")&&Je(r,s)},d(i){i&&L($),l()}}}function dt(n){let $,s;return $=new it({props:{delay:300,setDragElement:n[6],$$slots:{drag:[ut],default:[ft]},$$scope:{ctx:n}}}),$.$on("dragstart",n[11]),{c(){x($.$$.fragment)},l(r){Q($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p(r,[l]){const i={};l&64&&(i.setDragElement=r[6]),l&65983&&(i.$$scope={dirty:l,ctx:r}),$.$set(i)},i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function mt(n,$,s){let r,l;se(n,_e,k=>s(7,r=k)),se(n,oe,k=>s(8,l=k));let{list:i}=$,{transforms:o}=$,{type:f}=$,{index:a}=$,{clientHeight:T}=$,{duration:w=400}=$,{setDragElement:y}=$,{transferList:E}=$,{moveItem:A}=$;const W=k=>{alert(k.target.textContent)},O=()=>{const k=l==null?void 0:l.index,Z=l==null?void 0:l.type;k===void 0||k===a&&Z===f||(Z===f?E(a):A(a))},Y=()=>{R(oe,l={type:f,index:a},l),R(_e,r=!0,r)};function G(){T=this.clientHeight,s(0,T)}function H(){T=this.clientHeight,s(0,T)}return n.$$set=k=>{"list"in k&&s(1,i=k.list),"transforms"in k&&s(2,o=k.transforms),"type"in k&&s(3,f=k.type),"index"in k&&s(4,a=k.index),"clientHeight"in k&&s(0,T=k.clientHeight),"duration"in k&&s(5,w=k.duration),"setDragElement"in k&&s(6,y=k.setDragElement),"transferList"in k&&s(12,E=k.transferList),"moveItem"in k&&s(13,A=k.moveItem)},[T,i,o,f,a,w,y,r,l,W,O,Y,E,A,G,H]}class Ge extends ge{constructor($){super(),he(this,$,mt,dt,ce,{list:1,transforms:2,type:3,index:4,clientHeight:0,duration:5,setDragElement:6,transferList:12,moveItem:13})}}function ct(n){let $,s="Empty",r,l;return{c(){$=j("div"),$.textContent=s,this.h()},l(i){$=J(i,"DIV",{class:!0,"data-svelte-h":!0}),Ve($)!=="svelte-1kkjwe6"&&($.textContent=s),this.h()},h(){X($,"class","us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer")},m(i,o){N(i,$,o),r||(l=$e($,"dragenter",n[0]),r=!0)},p:ne,i:ne,o:ne,d(i){i&&L($),r=!1,l()}}}function gt(n,$,s){let r;se(n,oe,o=>s(2,r=o));let{moveItem:l}=$;const i=()=>{(r==null?void 0:r.index)!==void 0&&l(0)};return n.$$set=o=>{"moveItem"in o&&s(1,l=o.moveItem)},[i,l]}class Ze extends ge{constructor($){super(),he(this,$,gt,ct,ce,{moveItem:1})}}function Me(n,$,s){const r=n.slice();return r[21]=$[s],r[22]=$,r[23]=s,r}function Re(n,$,s){const r=n.slice();return r[21]=$[s],r[24]=$,r[23]=s,r}function We(n){let $,s,r;function l(o){n[14](o,n[23])}let i={setDragElement:n[3],list:n[7],transforms:n[6],type:"todo",index:n[23],transferList:n[12],moveItem:n[13]};return n[0][n[23]]!==void 0&&(i.clientHeight=n[0][n[23]]),$=new Ge({props:i}),ue.push(()=>we($,"clientHeight",l)),{c(){x($.$$.fragment)},l(o){Q($.$$.fragment,o)},m(o,f){ee($,o,f),r=!0},p(o,f){n=o;const a={};f&8&&(a.setDragElement=n[3]),f&128&&(a.list=n[7]),f&64&&(a.transforms=n[6]),!s&&f&1&&(s=!0,a.clientHeight=n[0][n[23]],Te(()=>s=!1)),$.$set(a)},i(o){r||(B($.$$.fragment,o),r=!0)},o(o){M($.$$.fragment,o),r=!1},d(o){te($,o)}}}function Ye(n){let $,s;return $=new Ze({props:{moveItem:n[13]}}),{c(){x($.$$.fragment)},l(r){Q($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p:ne,i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function ze(n){let $,s,r;function l(o){n[15](o,n[23])}let i={setDragElement:n[3],list:n[5],transforms:n[4],type:"done",index:n[23],transferList:n[12],moveItem:n[13]};return n[1][n[23]]!==void 0&&(i.clientHeight=n[1][n[23]]),$=new Ge({props:i}),ue.push(()=>we($,"clientHeight",l)),{c(){x($.$$.fragment)},l(o){Q($.$$.fragment,o)},m(o,f){ee($,o,f),r=!0},p(o,f){n=o;const a={};f&8&&(a.setDragElement=n[3]),f&32&&(a.list=n[5]),f&16&&(a.transforms=n[4]),!s&&f&2&&(s=!0,a.clientHeight=n[1][n[23]],Te(()=>s=!1)),$.$set(a)},i(o){r||(B($.$$.fragment,o),r=!0)},o(o){M($.$$.fragment,o),r=!1},d(o){te($,o)}}}function qe(n){let $,s;return $=new Ze({props:{moveItem:n[13]}}),{c(){x($.$$.fragment)},l(r){Q($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p:ne,i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function ht(n){let $,s,r,l="To do",i,o,f,a,T,w,y,E,A,W="Done",O,Y,G,H,k,Z=ve(n[7]),F=[];for(let m=0;m<Z.length;m+=1)F[m]=We(Re(n,Z,m));const re=m=>M(F[m],1,1,()=>{F[m]=null});let D=n[7].length===1&&Ye(n),d=ve(n[5]),u=[];for(let m=0;m<d.length;m+=1)u[m]=ze(Me(n,d,m));const C=m=>M(u[m],1,1,()=>{u[m]=null});let h=n[5].length===1&&qe(n);return{c(){$=j("div"),s=j("div"),r=j("span"),r.textContent=l,i=z(),o=j("div"),f=z();for(let m=0;m<F.length;m+=1)F[m].c();a=z(),D&&D.c(),T=z(),w=j("div"),y=z(),E=j("div"),A=j("span"),A.textContent=W,O=z(),Y=j("div"),G=z();for(let m=0;m<u.length;m+=1)u[m].c();H=z(),h&&h.c(),this.h()},l(m){$=J(m,"DIV",{class:!0});var p=U($);s=J(p,"DIV",{class:!0});var v=U(s);r=J(v,"SPAN",{class:!0,"data-svelte-h":!0}),Ve(r)!=="svelte-2gma2k"&&(r.textContent=l),i=q(v),o=J(v,"DIV",{class:!0}),U(o).forEach(L),f=q(v);for(let ae=0;ae<F.length;ae+=1)F[ae].l(v);a=q(v),D&&D.l(v),v.forEach(L),T=q(p),w=J(p,"DIV",{class:!0}),U(w).forEach(L),y=q(p),E=J(p,"DIV",{class:!0});var K=U(E);A=J(K,"SPAN",{class:!0,"data-svelte-h":!0}),Ve(A)!=="svelte-ovcjna"&&(A.textContent=W),O=q(K),Y=J(K,"DIV",{class:!0}),U(Y).forEach(L),G=q(K);for(let ae=0;ae<u.length;ae+=1)u[ae].l(K);H=q(K),h&&h.l(K),K.forEach(L),p.forEach(L),this.h()},h(){X(r,"class","fs=2 bold"),X(o,"class","h=.5"),X(s,"class","flex column"),X(w,"class","w=5 h=5"),X(A,"class","fs=2 bold"),X(Y,"class","h=.5"),X(E,"class","flex column"),X($,"class","flex flex-wrap=wrap")},m(m,p){N(m,$,p),P($,s),P(s,r),P(s,i),P(s,o),P(s,f);for(let v=0;v<F.length;v+=1)F[v]&&F[v].m(s,null);P(s,a),D&&D.m(s,null),P($,T),P($,w),P($,y),P($,E),P(E,A),P(E,O),P(E,Y),P(E,G);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(E,null);P(E,H),h&&h.m(E,null),k=!0},p(m,p){if(p&12489){Z=ve(m[7]);let v;for(v=0;v<Z.length;v+=1){const K=Re(m,Z,v);F[v]?(F[v].p(K,p),B(F[v],1)):(F[v]=We(K),F[v].c(),B(F[v],1),F[v].m(s,a))}for(be(),v=Z.length;v<F.length;v+=1)re(v);De()}if(m[7].length===1?D?(D.p(m,p),p&128&&B(D,1)):(D=Ye(m),D.c(),B(D,1),D.m(s,null)):D&&(be(),M(D,1,1,()=>{D=null}),De()),p&12346){d=ve(m[5]);let v;for(v=0;v<d.length;v+=1){const K=Me(m,d,v);u[v]?(u[v].p(K,p),B(u[v],1)):(u[v]=ze(K),u[v].c(),B(u[v],1),u[v].m(E,H))}for(be(),v=d.length;v<u.length;v+=1)C(v);De()}m[5].length===1?h?(h.p(m,p),p&32&&B(h,1)):(h=qe(m),h.c(),B(h,1),h.m(E,null)):h&&(be(),M(h,1,1,()=>{h=null}),De())},i(m){if(!k){for(let p=0;p<Z.length;p+=1)B(F[p]);B(D);for(let p=0;p<d.length;p+=1)B(u[p]);B(h),k=!0}},o(m){F=F.filter(Boolean);for(let p=0;p<F.length;p+=1)M(F[p]);M(D),u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)M(u[p]);M(h),k=!1},d(m){m&&L($),Be(F,m),D&&D.d(),Be(u,m),h&&h.d()}}}function pt(n){let $,s;return{c(){$=new ke(!1),s=le(),this.h()},l(r){$=Ie(r,!1),s=le(),this.h()},h(){$.a=s},m(r,l){$.m(n[8],r,l),N(r,s,l)},p:ne,d(r){r&&(L(s),$.d())}}}function _t(n){let $,s,r,l,i;return $=new Ke({props:{name:"DragItemForExample"}}),{c(){x($.$$.fragment),s=z(),r=new ke(!1),l=le(),this.h()},l(o){Q($.$$.fragment,o),s=q(o),r=Ie(o,!1),l=le(),this.h()},h(){r.a=l},m(o,f){ee($,o,f),N(o,s,f),r.m(n[9],o,f),N(o,l,f),i=!0},p:ne,i(o){i||(B($.$$.fragment,o),i=!0)},o(o){M($.$$.fragment,o),i=!1},d(o){o&&(L(s),L(l),r.d()),te($,o)}}}function bt(n){let $,s,r,l,i;return $=new Ke({props:{name:"DragItemPlaceHolderForExample"}}),{c(){x($.$$.fragment),s=z(),r=new ke(!1),l=le(),this.h()},l(o){Q($.$$.fragment,o),s=q(o),r=Ie(o,!1),l=le(),this.h()},h(){r.a=l},m(o,f){ee($,o,f),N(o,s,f),r.m(n[10],o,f),N(o,l,f),i=!0},p:ne,i(o){i||(B($.$$.fragment,o),i=!0)},o(o){M($.$$.fragment,o),i=!1},d(o){o&&(L(s),L(l),r.d()),te($,o)}}}function Dt(n){let $,s,r,l=`

${g("import")} ${e("{")} ${t("writable")}, ${g("type")} ${t("Writable")} ${e("}")} ${g("from")} ${_("svelte/store")}

${g("export")} ${c("const")} ${t("todo$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("todoTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("done$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("doneTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("transition$",!0)} = ${b("writable")}${e("(")}${c("false")}${e(")")}
${g("export")} ${c("const")} ${t("drag$",!0)}: ${I("Writable")}${e("<")}${e("{",1)} ${t("type")}: ${_("todo")} | ${_("done")}, ${t("index")}: ${I("number")} ${e("}",1)} | ${c("null")}${e(">")} = ${b("writable")}${e("(")}${c("null")}${e(")")}`,i,o;return $=new tt({props:{name:"store"}}),{c(){x($.$$.fragment),s=z(),r=new ke(!1),i=le(),this.h()},l(f){Q($.$$.fragment,f),s=q(f),r=Ie(f,!1),i=le(),this.h()},h(){r.a=i},m(f,a){ee($,f,a),N(f,s,a),r.m(l,f,a),N(f,i,a),o=!0},p:ne,i(f){o||(B($.$$.fragment,f),o=!0)},o(f){M($.$$.fragment,f),o=!1},d(f){f&&(L(s),L(i),r.d()),te($,f)}}}function vt(n){let $,s,r,l,i,o,f,a,T,w,y,E,A,W,O,Y,G,H,k;function Z(D){n[16](D)}function F(D){n[17](D)}let re={$$slots:{default:[ht]},$$scope:{ctx:n}};return n[2]!==void 0&&(re.isDragging=n[2]),n[3]!==void 0&&(re.setDragElement=n[3]),$=new st({props:re}),ue.push(()=>we($,"isDragging",Z)),ue.push(()=>we($,"setDragElement",F)),$.$on("dragend",n[11]),o=new ye({props:{isCode:!0,$$slots:{default:[pt]},$$scope:{ctx:n}}}),w=new ye({props:{isCode:!0,$$slots:{default:[_t]},$$scope:{ctx:n}}}),W=new ye({props:{isCode:!0,$$slots:{default:[bt]},$$scope:{ctx:n}}}),H=new ye({props:{isCode:!0,$$slots:{default:[Dt]},$$scope:{ctx:n}}}),{c(){x($.$$.fragment),l=z(),i=j("div"),x(o.$$.fragment),f=z(),a=j("div"),T=z(),x(w.$$.fragment),y=z(),E=j("div"),A=z(),x(W.$$.fragment),O=z(),Y=j("div"),G=z(),x(H.$$.fragment),this.h()},l(D){Q($.$$.fragment,D),l=q(D),i=J(D,"DIV",{});var d=U(i);Q(o.$$.fragment,d),f=q(d),a=J(d,"DIV",{class:!0}),U(a).forEach(L),T=q(d),Q(w.$$.fragment,d),y=q(d),E=J(d,"DIV",{class:!0}),U(E).forEach(L),A=q(d),Q(W.$$.fragment,d),O=q(d),Y=J(d,"DIV",{class:!0}),U(Y).forEach(L),G=q(d),Q(H.$$.fragment,d),d.forEach(L),this.h()},h(){X(a,"class","h=1"),X(E,"class","h=1"),X(Y,"class","h=1")},m(D,d){ee($,D,d),N(D,l,d),N(D,i,d),ee(o,i,null),P(i,f),P(i,a),P(i,T),ee(w,i,null),P(i,y),P(i,E),P(i,A),ee(W,i,null),P(i,O),P(i,Y),P(i,G),ee(H,i,null),k=!0},p(D,d){const u={};d&33554683&&(u.$$scope={dirty:d,ctx:D}),!s&&d&4&&(s=!0,u.isDragging=D[2],Te(()=>s=!1)),!r&&d&8&&(r=!0,u.setDragElement=D[3],Te(()=>r=!1)),$.$set(u);const C={};d&33554432&&(C.$$scope={dirty:d,ctx:D}),o.$set(C);const h={};d&33554432&&(h.$$scope={dirty:d,ctx:D}),w.$set(h);const m={};d&33554432&&(m.$$scope={dirty:d,ctx:D}),W.$set(m);const p={};d&33554432&&(p.$$scope={dirty:d,ctx:D}),H.$set(p)},i(D){k||(B($.$$.fragment,D),B(o.$$.fragment,D),B(w.$$.fragment,D),B(W.$$.fragment,D),B(H.$$.fragment,D),k=!0)},o(D){M($.$$.fragment,D),M(o.$$.fragment,D),M(w.$$.fragment,D),M(W.$$.fragment,D),M(H.$$.fragment,D),k=!1},d(D){D&&(L(l),L(i)),te($,D),te(o),te(w),te(W),te(H)}}}function yt(n){let $,s;return $=new et({props:{$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){x($.$$.fragment)},l(r){Q($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p(r,[l]){const i={};l&33554687&&(i.$$scope={dirty:l,ctx:r}),$.$set(i)},i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function Et(n,$,s){let r,l,i,o,f,a;se(n,oe,d=>s(18,r=d)),se(n,_e,d=>s(19,l=d)),se(n,ie,d=>s(4,i=d)),se(n,de,d=>s(5,o=d)),se(n,fe,d=>s(6,f=d)),se(n,me,d=>s(7,a=d));const T=`${S("script",` ${t("lang")}=${_("ts")}`,`
${g("import")} ${t("DragItemForExample")} ${g("from")} ${_("parts/ref/DragItemForExample.svelte")}
${g("import")} ${t("DragItemPlaceHolderForExample")} ${g("from")} ${_("parts/ref/DragItemPlaceHolderForExample.svelte")}
${g("import")} ${e("{")} ${t("done$")}, ${t("doneTf$")}, ${t("drag$")}, ${t("todo$")}, ${t("todoTf$")}, ${t("transition$")} ${e("}")} ${g("from")} ${_("parts/ref/store")}
${g("import")} ${e("{")} ${t("onDestroy")}, ${t("onMount")} ${e("}")} ${g("from")} ${_("svelte")}
${g("import")} ${e("{")} ${t("DragContainer")} ${e("}")} ${g("from")} ${_("lube-ui")}

${c("const")} ${t("todoHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("const")} ${t("doneHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("let")} ${t("isDragging")}: ${I("boolean")}
${c("let")} ${b("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${b("handleDragend")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${t("$drag$")} = ${c("null")}
	${b("reOrdering")}${e("(",1)}${t("from",!0)}, ${t("type",!0)}${e(")",1)}
${e("}")}
${c("const")} ${b("transferList")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type",!0)} === ${_("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${g("if")} ${e("(",1)}${t("from",!0)} < ${t("index")}${e(") {",1)}
		${g("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${V(0)}
			${e("}")}
		${e("}",2)} ${g("else")} ${e("{",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = -${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${g("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${V(0)}
			${e("}")}
		${e("}",2)} ${g("else")} ${e("{",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)}
	${e("(",1)}${t("type",!0)} === ${_("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${b("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${c("const")} ${b("moveItem")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${g("if")} ${e("(",1)}${t("from",!0)} === ${_("todo")}${e(") {",1)}
		${c("const")} ${t("before",!0)} = ${t("$todo$")}.${b("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$done$")}.${b("slice")}${e("()",2)}
		${t("after",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
		${t("$todo$")} = ${t("before",!0)}
		${t("$done$")} = ${t("after",!0)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${_("done")}, ${t("index: index")} ${e("}",2)}
		${t("doneHeights",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("todoHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("todoHeights",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${c("const")} ${t("before",!0)} = ${t("$done$")}.${b("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$todo$")}.${b("slice")}${e("()",2)}
		${t("after",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
		${t("$done$")} = ${t("before",!0)}
		${t("$todo$")} = ${t("after",!0)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${_("todo")}, ${t("index: index")} ${e("}",2)}
		${t("todoHeights",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("doneHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("doneHeights",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${b("reOrdering")} = ${e("(")}${t("from")}: ${I("number")}, ${t("type")}: ${I("string")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${_("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${g("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} === ${V(0)}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${c("const")} ${t("list",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${_("todo")} ? ${t("$todo$")} : ${t("$done$")} ${e(")",2)}${e("]",1)}
	${c("const")} ${t("temp",!0)} = ${t("list",!0)}${e("[",1)}${t("from")}${e("]",1)}
	${c("let")} ${t("i")}
	${g("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} < ${V(0)}${e(") {",1)}
		${g("for")} ${e("(",2)}${t("i")} = ${t("from")} - ${V(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}--${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} + ${V(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${V(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} + ${V(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${g("for")} ${e("(",2)}${t("i")} = ${t("from")} + ${V(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}++${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} - ${V(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${V(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} - ${V(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)}
	${t("transforms",!0)}${e("[",1)}${t("from")}${e("]",1)} = ${V(0)}
	${t("$transition$")} = ${c("false")}
	,${e("(",1)}${t("type")} === ${_("todo")} ? ${t("todo$",!0)} : ${t("done$",!0)} ${e(")",1)}.${b("set")}${e("(",1)}${t("list",!0)}${e(")",1)}
	,${e("(",1)}${t("type")} === ${_("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${b("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${b("onMount")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[",2)}
		${_("Task A")},
		${_("Task B")},
		${_("Task C")},
		${_("Task D")},
		${_("Task E")},
		${_("Task F")},
		${_("Task G")},
		${_("Task H")},
		${_("Task I")},
		${_("Task J")},
		${_("Task K")},
		${_("Task L")},
		${_("")}
	${e("]",2)}
	${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$todo$")}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
	${t("$todo$")} = ${e("[",2)} ${_("Task Z")}, ${_("")} ${e("]",2)}
	${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$done$")}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
${e("}",1)}${e(")")}
${b("onDestroy")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[]",2)}
	${t("$todoTf$")} = ${e("[]",2)}
	${t("$done$")} = ${e("[]",2)}
	${t("$doneTf$")} = ${e("[]",2)}
	${t("$transition$")} = ${c("false")}
	${t("$drag$")} = ${c("null")}
${e("}",1)}${e(")")}

`)}

${S("DragContainer",` ${g("bind")}:${t("isDragging")}
		${g("bind")}:${b("setDragElement")}
		${g("on")}:${I("dragend")}=${e("{")}${b("handleDragend")}${e("}")}`,`
	${S("div",` ${t("class")}=${_("flex flex-wrap=wrap")}`,`
		${S("div",` ${t("class")}=${_("flex column")}`,`
			${S("span",` ${t("class")}=${_("fs=2 bold")}`,"To do")}
			${S("div",` ${t("class")}=${_("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$todo$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${S("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("todoHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${b("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$todo$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$todoTf$")}${e("}")}
					${t("list")}=${_("todo")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${b("transferList")}${e("}")}
					${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$todo$")}.${t("length")} === ${V(1)}${e("}")}
			${S("DragItemPlaceHolderForExample",` ${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
		${S("div",` ${t("class")}=${_("w=5 h=5")}`,"")}
		${S("div",` ${t("class")}=${_("flex column")}`,`
			${S("span",` ${t("class")}=${_("fs=2 bold")}`,"Done")}
			${S("div",` ${t("class")}=${_("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$done$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${S("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("doneHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${b("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$done$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$doneTf$")}${e("}")}
					${t("list")}=${_("done")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${b("transferList")}${e("}")}
					${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$done$")}.${t("length")} === ${V(1)}${e("}")}
			${S("DragItemPlaceHolderForExample",` ${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
	`)}
`)}`,w=`

${S("script",` ${t("lang")}=${_("ts")}`,`
${g("import")} ${e("{")} ${t("Dragable")} ${e("}")} ${g("from")} ${_("lube-ui")}
${g("import")} ${e("{")} ${t("drag$")}, ${t("transition$")} ${e("}")} ${g("from")} ${_("parts/ref/store")}

${g("export")} ${c("let")} ${t("list")}: ${I("string")}${e("[]")}
${g("export")} ${c("let")} ${t("transforms")}: ${I("number")}${e("[]")}
${g("export")} ${c("let")} ${t("type")}: ${_("todo")} | ${_("done")}
${g("export")} ${c("let")} ${t("index")}: ${I("number")}
${g("export")} ${c("let")} ${t("clientHeight")}: ${I("number")}
${g("export")} ${c("let")} ${t("duration")} = ${V(400)}
${g("export")} ${c("let")} ${b("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${b("transferList")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${b("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${b("handleClick")} = ${e("()")} ${c("=>")} ${e("{")}
	${b("alert")}${e("(",1)}${e("(",2)}${t("event")}.${t("target")} ${g("as")} ${I("HTMLElement")}${e(")",2)}.${t("textContent")}${e(")",1)}
${e("}")}
${c("const")} ${b("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${c("const")} ${t("t",!0)} = ${t("$drag$")}?.${t("type")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")} || ${t("i",!0)} === ${t("index")} && ${t("t",!0)} === ${t("type")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${g("if")} ${e("(",1)}${t("t",!0)} === ${t("type")}${e(") {",1)}
		${b("transferList")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${b("moveItem")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${b("handleDragstart")} = ${e("()")} ${c("=>")} ${e("{")}
	${t("$drag$")} = ${e("{",1)} ${t("type: type")}, ${t("index: index")} ${e("}",1)}
	${t("$transition$")} = ${c("true")}
${e("}")}
`)}

${S("Dragable",` ${g("on")}:${I("dragstart")}=${e("{")}${b("handleDragstart")}${e("}")}
		${t("delay")}=${e("{")}${V(300)}${e("}")}
		${e("{")}${b("setDragElement")}${e("}")}`,`
	${S("div",` ${g("bind")}:${t("clientHeight")}
			${t("class")}=${_('"w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY(',!1)}${e("{",2)}${t("transforms")}${e("[")}${t("index")}${e("]")}${e("}",2)}${_("px)",!1)}
			${e("{",2)}${t("$transition$")} ? ${_("tt=")} + ${t("duration")} + ${_("ms")} : ${_("")}${e("}",2)}
			${e("{",2)}${t("$drag$")}?.${t("index")} === ${t("index")} && ${t("$drag$")}?.${t("type")} === ${t("type")} ? ${_(" opacity=.2 ol=.2_solid_#aaa")} : ${_("")}${e("}",2)}
			${e("{",2)}!${t("list")}${e("[")}${t("index")}${e("]")} ? ${_("none")} : ${_("")}${e("}",2)}
			${g("on")}:${I("dragenter")}=${e("{")}${b("handleDragenter")}${e("}")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)}${e("}")}
	`)}
	${S("div",` ${t("slot")}=${_("drag")}
			${g("bind")}:${t("clientHeight")}
			${t("class")}=${_("ta=center fs=2.5 cs=move c=#000 @dark@c=#fff")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)} + ${_("!!")}${e("}")}
	`)}
`)}`,y=`

${S("script",` ${t("lang")}=${_("ts")}`,`
${g("import")} ${e("{")} ${t("drag$")} ${e("}")} ${g("from")} ${_("parts/ref/store")}

${g("export")} ${c("let")} ${b("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${b("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${b("moveItem")}${e("(",2)}${V(0)}${e(")",2)}
${e("}")}
`)}

${S("div",` ${t("style")}=${_("user-select:none")}
		${t("class")}=${_("w=6 ol=.1_dashed ta=center fs=2 cs=pointer")}
		${g("on")}:${I("dragenter")}=${e("{")}${b("handleDragenter")}${e("}")}`,`
	Empty
`)}`,E=[],A=[];let W,O;const Y=()=>{const d=r.index,u=r.type;R(oe,r=null,r),k(d,u)},G=d=>{const u=r.index,C=r.type,h=[...C==="todo"?f:i],m=C==="todo"?E:A;if(u<d)if(h[d])for(let p=d;h[p];p++)h[u]-=m[p],h[p]=0;else for(let p=d;!h[p];p--)h[u]+=m[p],h[p]=-m[u];else if(h[d])for(let p=d;h[p];p--)h[u]+=m[p],h[p]=0;else for(let p=d;!h[p];p++)h[u]-=m[p],h[p]=m[u];(C==="todo"?fe:ie).set(h)},H=d=>{const u=r.index;if(r.type==="todo"){const h=[...a],m=[...o];m.splice(d,0,h[u]),h.splice(u,1),R(me,a=h,a),R(de,o=m,o),R(fe,f=new Array(h.length).fill(0),f),R(ie,i=new Array(m.length).fill(0),i),R(oe,r={type:"done",index:d},r),A.splice(d,0,E[u]),E.splice(u,1)}else{const h=[...o],m=[...a];m.splice(d,0,h[u]),h.splice(u,1),R(de,o=h,o),R(me,a=m,a),R(ie,i=new Array(h.length).fill(0),i),R(fe,f=new Array(m.length).fill(0),f),R(oe,r={type:"todo",index:d},r),E.splice(d,0,A[u]),A.splice(u,1)}},k=(d,u)=>{const C=[...u==="todo"?f:i];if(C[d]===0)return;const h=[...u==="todo"?a:o],m=h[d];let p;if(C[d]<0){for(p=d-1;C[p];p--)h[p+1]=h[p],C[p]=0;h[p+1]=m}else{for(p=d+1;C[p];p++)h[p-1]=h[p],C[p]=0;h[p-1]=m}C[d]=0,R(_e,l=!1,l),(u==="todo"?me:de).set(h),(u==="todo"?fe:ie).set(C)};Ue(()=>{R(me,a=["Task A","Task B","Task C","Task D","Task E","Task F","Task G","Task H","Task I","Task J","Task K","Task L",""],a),R(fe,f=new Array(a.length).fill(0),f),R(de,o=["Task Z",""],o),R(ie,i=new Array(o.length).fill(0),i)}),xe(()=>{R(me,a=[],a),R(fe,f=[],f),R(de,o=[],o),R(ie,i=[],i),R(_e,l=!1,l),R(oe,r=null,r)});function Z(d,u){n.$$.not_equal(E[u],d)&&(E[u]=d,s(0,E))}function F(d,u){n.$$.not_equal(A[u],d)&&(A[u]=d,s(1,A))}function re(d){W=d,s(2,W)}function D(d){O=d,s(3,O)}return[E,A,W,O,i,o,f,a,T,w,y,Y,G,H,Z,F,re,D]}class Tt extends ge{constructor($){super(),he(this,$,Et,yt,ce,{})}}function wt(n){let $,s,r;return s=new Tt({}),{c(){$=z(),x(s.$$.fragment),this.h()},l(l){Qe("svelte-vkwsnr",document.head).forEach(L),$=q(l),Q(s.$$.fragment,l),this.h()},h(){document.title="Drag and Drop | Reference"},m(l,i){N(l,$,i),ee(s,l,i),r=!0},p:ne,i(l){r||(B(s.$$.fragment,l),r=!0)},o(l){M(s.$$.fragment,l),r=!1},d(l){l&&L($),te(s,l)}}}class Pt extends ge{constructor($){super(),he(this,$,null,wt,ce,{})}}export{Pt as component};