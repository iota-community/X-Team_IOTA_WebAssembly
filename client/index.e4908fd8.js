import{S as s,i as t,s as e,a,e as o,t as r,c as n,b as l,d as c,f as h,g as p,h as f,j as i,n as u,k as v}from"./client.820d0522.js";function g(s,t,e){const a=Object.create(s);return a.post=t[e],a.index=e,a}function m(s){var t;return{c(){t=o("hr"),this.h()},l(s){t=l(s,"HR",{class:!0},!1),c(t).forEach(h),this.h()},h(){t.className="svelte-ffk8g2"},m(s,e){p(s,t,e)},d(s){s&&h(t)}}}function d(s){var t,e,u,v,g,d,E,x,N,b,j,k,D,B,H,I=s.post.title,V=s.post.excerpt,A=s.post.printDate,P=s.index&&m();return{c(){P&&P.c(),t=a(),e=o("div"),u=o("h2"),v=o("a"),g=r(I),E=a(),x=o("p"),N=r(V),b=a(),j=o("div"),k=o("span"),D=r("— "),B=r(A),H=a(),this.h()},l(s){P&&P.l(s),t=n(s,"\n    "),e=l(s,"DIV",{class:!0},!1);var a=c(e);u=l(a,"H2",{class:!0},!1);var o=c(u);v=l(o,"A",{rel:!0,href:!0},!1);var r=c(v);g=n(r,I),r.forEach(h),o.forEach(h),E=n(a,"\n      "),x=l(a,"P",{},!1);var p=c(x);N=n(p,V),p.forEach(h),b=n(a,"\n      "),j=l(a,"DIV",{class:!0},!1);var f=c(j);k=l(f,"SPAN",{class:!0},!1);var i=c(k);D=n(i,"— "),B=n(i,A),i.forEach(h),f.forEach(h),H=n(a,"\n    "),a.forEach(h),this.h()},h(){v.rel="prefetch",v.href=d="blog/"+s.post.slug,u.className="svelte-ffk8g2",k.className="post-item-date svelte-ffk8g2",j.className="post-item-footer svelte-ffk8g2",e.className="post-item"},m(s,a){P&&P.m(s,a),p(s,t,a),p(s,e,a),f(e,u),f(u,v),f(v,g),f(e,E),f(e,x),f(x,N),f(e,b),f(e,j),f(j,k),f(k,D),f(k,B),f(e,H)},p(s,e){e.index?P||((P=m()).c(),P.m(t.parentNode,t)):P&&(P.d(1),P=null),s.posts&&I!==(I=e.post.title)&&i(g,I),s.posts&&d!==(d="blog/"+e.post.slug)&&(v.href=d),s.posts&&V!==(V=e.post.excerpt)&&i(N,V),s.posts&&A!==(A=e.post.printDate)&&i(B,A)},d(s){P&&P.d(s),s&&(h(t),h(e))}}}function E(s){for(var t,e,i,m,E,x=s.posts,N=[],b=0;b<x.length;b+=1)N[b]=d(g(s,x,b));return{c(){t=a(),e=o("div"),i=o("h1"),m=r("Blog"),E=a();for(var s=0;s<N.length;s+=1)N[s].c();this.h()},l(s){t=n(s,"\n\n"),e=l(s,"DIV",{class:!0},!1);var a=c(e);i=l(a,"H1",{},!1);var o=c(i);m=n(o,"Blog"),o.forEach(h),E=n(a,"\n  ");for(var r=0;r<N.length;r+=1)N[r].l(a);a.forEach(h),this.h()},h(){document.title="Blog",e.className="container"},m(s,a){p(s,t,a),p(s,e,a),f(e,i),f(i,m),f(e,E);for(var o=0;o<N.length;o+=1)N[o].m(e,null)},p(s,t){if(s.posts){x=t.posts;for(var a=0;a<x.length;a+=1){const o=g(t,x,a);N[a]?N[a].p(s,o):(N[a]=d(o),N[a].c(),N[a].m(e,null))}for(;a<N.length;a+=1)N[a].d(1);N.length=x.length}},i:u,o:u,d(s){s&&(h(t),h(e)),v(N,s)}}}function x({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function N(s,t,e){let{posts:a}=t;return s.$set=s=>{"posts"in s&&e("posts",a=s.posts)},{posts:a}}export default class extends s{constructor(s){super(),t(this,s,N,E,e,["posts"])}}export{x as preload};
