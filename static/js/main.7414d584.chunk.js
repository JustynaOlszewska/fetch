(this.webpackJsonplisfetch=this.webpackJsonplisfetch||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(1),r=n.n(c),s=n(16),i=n.n(s),a=n(6),l=function(t,e,n,o,c){fetch(t,n).then((function(t){if(t.status>=200&&t.status<=300)return t.json();throw new Error("error in downloading data")})).then((function(t){switch(n.method){case"GET":var r=t.map((function(t){return{title:t.title,body:t.body}}));return e(r);case"POST":return e(o.concat(t));case"PATCH":var s=o.map((function(e,n){return c===n?e.body=t:e}));return e(s);case"DELETE":return e(t=[]);default:console.log("unexpected method")}})).catch((function(t){return console.log(t)}))},j=["https://jsonplaceholder.typicode.com/posts?userId=1","https://jsonplaceholder.typicode.com/posts/1"],b=function(t,e,n,o){switch(t){case"GET":return{method:"GET",body:null,headers:{"Content-type":"application/json; charset=UTF-8"}};case"POST":return{method:"POST",body:JSON.stringify({title:e,body:n}),headers:{"Content-type":"application/json; charset=UTF-8"}};case"PATCH":return{method:"PATCH",body:JSON.stringify({body:o,title:e}),headers:{"Content-type":"application/json; charset=UTF-8"}};case"DELETE":return{method:"DELETE"};default:console.log("unexpected option")}},u=function(t){var e=t.id,n=t.title,r=t.setBooks,s=t.books,i=Object(c.useState)(),u=Object(a.a)(i,2),d=u[0],h=u[1],O=Object(a.a)(j,2)[1];return Object(o.jsxs)("form",{value:d,onSubmit:function(t){if(t.preventDefault(),!d){var o=function(t){var e=[];return t||(e.text="this text is required"),e}(d);return alert(o.text)}l(O,r,b("PATCH",n,null,d),s,e)},children:[Object(o.jsx)("input",{onChange:function(t){h(t.target.value)},type:"text"}),Object(o.jsx)("button",{children:"replacing fragment of book to another fragment"})]})},d=function(t){var e=t.books,n=t.setBooks;if(e.length){var c=e.map((function(t,c){return Object(o.jsxs)("li",{children:[Object(o.jsx)("hr",{}),Object(o.jsx)("h1",{children:"book's title:"}),Object(o.jsx)("p",{children:'"'.concat(t.title,'"')}),Object(o.jsx)("h1",{children:"Fragment of the book:"}),Object(o.jsx)("p",{children:'"'.concat(t.body,'"')}),Object(o.jsx)(u,{id:c,books:e,setBooks:n,title:t.title})]},c)}));return Object(o.jsx)("ul",{children:c})}return null},h=function(t){var e=t.books,n=t.setBooks,r=Object(c.useState)(""),s=Object(a.a)(r,2),i=s[0],u=s[1],d=Object(c.useState)(""),h=Object(a.a)(d,2),O=h[0],f=h[1],x=Object(a.a)(j,1)[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!i&&!O){var o=function(t,e){var n=[];return t&&e||(n.title="this inputs are required"),n}(i,O);return alert("".concat(o.title))}l(x,n,b("POST",i,O),e)},children:[Object(o.jsx)("label",{htmlFor:"title",children:"Books' title"}),Object(o.jsx)("input",{value:i,id:"title",type:"text",onChange:function(t){u(t.target.value)}}),Object(o.jsx)("label",{htmlFor:"fragment",children:"Fragment of the book"}),Object(o.jsx)("input",{value:O,id:"fragment",type:"text",onChange:function(t){f(t.target.value)}}),Object(o.jsx)("button",{children:"adding a book to the list"})]})})},O=function(t){var e=t.setBooks,n=Object(a.a)(j,2)[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){l(n,e,b("DELETE"))},children:"delete everything and write your own list"}),Object(o.jsx)("hr",{})]})},f=n(2),x=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],s=Object(a.a)(j,1)[0];return Object(c.useEffect)((function(){l(s,r,b("GET"))}),[s]),Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{setBooks:r}),Object(o.jsxs)(f.c,{children:[Object(o.jsx)(f.a,{path:"/listBooks",children:Object(o.jsx)(d,{setBooks:r,books:n})}),Object(o.jsx)(f.a,{path:"/addBook",children:Object(o.jsx)(h,{books:n,setBooks:r})})]})]})},p=n(9);var k=function(){return Object(o.jsx)(p.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"The best books of all time"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/listBooks",children:"A list of books"})}),Object(o.jsx)("li",{children:Object(o.jsx)(p.b,{to:"/addBook",children:"Addng a book to the list"})})]}),Object(o.jsx)(f.c,{children:Object(o.jsx)(f.a,{path:"/",children:Object(o.jsx)(x,{})})})]})})};n(28);i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7414d584.chunk.js.map