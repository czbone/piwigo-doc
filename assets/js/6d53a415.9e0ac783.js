"use strict";(self.webpackChunkpiwigo_doc=self.webpackChunkpiwigo_doc||[]).push([[36],{5914:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorial-basics/login-logout","title":"\u30ed\u30b0\u30a4\u30f3\u30fb\u30ed\u30b0\u30a2\u30a6\u30c8","description":"\u753b\u50cf\u306e\u7ba1\u7406\u3092\u884c\u3046\u306b\u306f\u7ba1\u7406\u6a29\u9650\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u3092\u884c\u3063\u3066\u7ba1\u7406\u6a29\u9650\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002","source":"@site/docs/tutorial-basics/login-logout.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/login-logout","permalink":"/piwigo-doc/docs/tutorial-basics/login-logout","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb - \u57fa\u672c","permalink":"/piwigo-doc/docs/category/\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb---\u57fa\u672c"},"next":{"title":"\u30a2\u30eb\u30d0\u30e0\u306e\u4f5c\u6210","permalink":"/piwigo-doc/docs/tutorial-basics/create-album"}}');var i=e(4848),r=e(8453);const o={sidebar_position:1},c="\u30ed\u30b0\u30a4\u30f3\u30fb\u30ed\u30b0\u30a2\u30a6\u30c8",d={},l=[{value:"\u30ed\u30b0\u30a4\u30f3",id:"\u30ed\u30b0\u30a4\u30f3",level:2},{value:"\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u8868\u793a",id:"\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u8868\u793a",level:2},{value:"\u30ed\u30b0\u30a2\u30a6\u30c8",id:"\u30ed\u30b0\u30a2\u30a6\u30c8",level:2}];function a(s){const n={br:"br",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,r.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u30ed\u30b0\u30a4\u30f3\u30ed\u30b0\u30a2\u30a6\u30c8",children:"\u30ed\u30b0\u30a4\u30f3\u30fb\u30ed\u30b0\u30a2\u30a6\u30c8"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u753b\u50cf\u306e\u7ba1\u7406"}),"\u3092\u884c\u3046\u306b\u306f",(0,i.jsx)(n.strong,{children:"\u7ba1\u7406\u6a29\u9650"}),"\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ed\u30b0\u30a4\u30f3\u3092\u884c\u3063\u3066",(0,i.jsx)(n.strong,{children:"\u7ba1\u7406\u6a29\u9650"}),"\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u753b\u9762\u306e\u53f3\u4e0a\u306e",(0,i.jsx)(n.strong,{children:"\u30ed\u30b0\u30a4\u30f3\u306e\u30ea\u30f3\u30af"}),"\u304b\u3089",(0,i.jsx)(n.strong,{children:"\u30ed\u30b0\u30a4\u30f3\u753b\u9762"}),"\u306b\u9077\u79fb\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8",src:e(4958).A+"",width:"1024",height:"566"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30ed\u30b0\u30a4\u30f3",children:"\u30ed\u30b0\u30a4\u30f3"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u30e6\u30fc\u30b6\u540d"}),"\u3068",(0,i.jsx)(n.strong,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),"\u3092\u5165\u529b\u3057\u3001",(0,i.jsx)(n.strong,{children:"\u9001\u4fe1"}),"\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u30ed\u30b0\u30a4\u30f3",src:e(2364).A+"",width:"1024",height:"566"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u8868\u793a",children:"\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u8868\u793a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7ba1\u7406\u6a29\u9650"}),"\u3092\u53d6\u5f97\u3057\u305f",(0,i.jsx)(n.strong,{children:"\u30ed\u30b0\u30a4\u30f3\u72b6\u614b"}),"\u306b\u306a\u308b\u3068\u753b\u9762\u53f3\u4e0a\u306b",(0,i.jsx)(n.strong,{children:"Admin"}),"\u306e\u30ea\u30f3\u30af\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Admin"}),"\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3067\u3001\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u3092\u5224\u65ad\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Admin"}),"\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068",(0,i.jsx)(n.strong,{children:"\u7ba1\u7406\u753b\u9762"}),"\u306e",(0,i.jsx)(n.strong,{children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),"(\u30c8\u30c3\u30d7\u753b\u9762)\u306b\u9077\u79fb\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u30ed\u30b0\u30a2\u30a6\u30c8",src:e(4775).A+"",width:"1024",height:"566"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30ed\u30b0\u30a2\u30a6\u30c8",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u753b\u50cf\u306e\u7ba1\u7406"}),"\u3092\u7d42\u4e86\u3059\u308b\u306b\u306f",(0,i.jsx)(n.strong,{children:"\u7ba1\u7406\u753b\u9762"}),"\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u64cd\u4f5c\u3092\u884c\u3044\u307e\u3059\u3002\n\u753b\u9762\u306e\u53f3\u4e0a\u306e",(0,i.jsx)(n.strong,{children:"\u30ed\u30b0\u30a2\u30a6\u30c8"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u30ed\u30b0\u30a2\u30a6\u30c8",src:e(8329).A+"",width:"1024",height:"589"})})]})}function h(s={}){const{wrapper:n}={...(0,r.R)(),...s.components};return n?(0,i.jsx)(n,{...s,children:(0,i.jsx)(a,{...s})}):a(s)}},2364:(s,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/login-ef7a7139045972a32cf1c722e01931c3.png"},4775:(s,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/logined-a46a6499a54a7d85feb8bdece39714d5.png"},8329:(s,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/logout-489f14bb68cc4163ec928a9ca5fa3c09.png"},4958:(s,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/top_page-55737ab779bc2515f25217fdacb028b9.png"},8453:(s,n,e)=>{e.d(n,{R:()=>o,x:()=>c});var t=e(6540);const i={},r=t.createContext(i);function o(s){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function c(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:o(s.components),t.createElement(r.Provider,{value:n},s.children)}}}]);