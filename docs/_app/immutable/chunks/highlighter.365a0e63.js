const c=(()=>{const a=["blue","--forest-green","--copper-canyon"],r=["--gold","--bouquet","--dotger-blue"];return(e,n)=>o(a[n||0],r[n||0],e)})(),o=(a,r,e)=>`<span class="c=${a} @dark@c=${r}">${e}</span>`,i=(a,...r)=>`${o("--maroon","--straw",a)}${c("{")}${r.map(([e,n])=>`${o("red","--anakiwa",e)}:${o("--endeavour","--raw-sienna",n)}`).join(";")}${c("}")}`,g=a=>o("--japanese-laurel","--asparagus",t(a)),m=a=>o("blue","--havelock-blue",a),t=a=>a.replace(/</g,"&lt;").replace(/>/g,"&gt;"),u=a=>o("--dallas","--sapling",a),b=(a,r,e)=>{const n=a.charCodeAt(0)>90?"--maroon":"--jelly-bean",l=a.charCodeAt(0)>90?"--havelock-blue":"--puerto-rico";let s=o("--maroon","gray","&lt;")+o(n,l,a)+r;return e===!1?s+=o("--maroon","gray"," /&gt;"):(s+=o("--maroon","gray","&gt;"),s+=e,s+=o("--maroon","gray","&lt;/"),s+=o(n,l,a),s+=o("--maroon","gray","&gt;")),s},p=a=>o("--electric-violet","--bouquet",a),d=(a,r)=>r?o("--lochmara","--malibu",a):o("--navy-blue","--anakiwa",a),y=a=>o("--salem","--coriander",a.toString()),k=(a,r)=>r===!1?o("--tamarillo","--raw-sienna",a):(r||(r='"'),o("--tamarillo","--raw-sienna",r+a+r)),$=a=>o("--jelly-bean","--puerto-rico",a);export{g as a,i as b,o as c,m as d,t as e,c as f,u as g,b as h,y as i,p as k,d as n,k as s,$ as t};