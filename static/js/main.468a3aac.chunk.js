(this.webpackJsonplisfetch=this.webpackJsonplisfetch||[]).push([[0],{12:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c=function(t,e,n,c,o){fetch(t,n).then((function(t){if(t.status>=200&&t.status<=300)return t.json();throw new Error("error in downloading data")})).then((function(t){switch(n.method){case"GET":var s=t.map((function(t){return{title:t.title,body:t.body}}));return e(s);case"POST":return e(c.concat(t));case"PATCH":var r=c.map((function(e,n){return o===n?e.body=t:e}));return e(r);case"DELETE":return e(t=[]);default:console.log("unexpected method")}})).catch((function(t){return console.log(t)}))}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),s=n.n(o),r=n(18),i=n.n(r),a=n(7),j=function(){return Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/listBooks",children:"A list of books"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/addBook",children:"Addng a book to the list"})})]})},d=n(2),l=n(10),b=n(9),u=n(12),h=function(t){var e=t.setBooks,n=Object(l.a)(b.b,2)[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){Object(u.a)(n,e,Object(b.a)("DELETE"))},children:"delete everything and write your own list"}),Object(c.jsx)("hr",{})]})},O=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,34))})),f=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,33))})),p=function(){var t=Object(o.useState)([]),e=Object(l.a)(t,2),n=e[0],s=e[1],r=Object(l.a)(b.b,1)[0];return Object(o.useEffect)((function(){Object(u.a)(r,s,Object(b.a)("GET"))}),[r]),Object(c.jsx)("div",{children:Object(c.jsxs)(o.Suspense,{fallback:Object(c.jsx)("div",{children:"Loading..."}),children:[Object(c.jsx)(h,{setBooks:s}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/listBooks",children:Object(c.jsx)(O,{setBooks:s,books:n})}),Object(c.jsx)(d.a,{path:"/addBook",children:Object(c.jsx)(f,{setBooks:s,books:n})})]})]})})},x=function(){return Object(c.jsx)(d.c,{children:Object(c.jsx)(d.a,{path:"/",children:Object(c.jsx)(p,{})})})};var y=function(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"The best books of all time"}),Object(c.jsx)(j,{}),Object(c.jsx)(x,{})]})})};n(30);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var c=["https://jsonplaceholder.typicode.com/posts?userId=1","https://jsonplaceholder.typicode.com/posts/1"],o=function(t,e,n,c){switch(t){case"GET":return{method:"GET",body:null,headers:{"Content-type":"application/json; charset=UTF-8"}};case"POST":return{method:"POST",body:JSON.stringify({title:e,body:n}),headers:{"Content-type":"application/json; charset=UTF-8"}};case"PATCH":return{method:"PATCH",body:JSON.stringify({body:c,title:e}),headers:{"Content-type":"application/json; charset=UTF-8"}};case"DELETE":return{method:"DELETE"};default:console.log("unexpected option")}}}},[[31,1,2]]]);
//# sourceMappingURL=main.468a3aac.chunk.js.map