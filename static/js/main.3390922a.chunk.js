(this.webpackJsonplisfetch=this.webpackJsonplisfetch||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),o=n.n(r),i=n(4),a=n.n(i),l=n(2),s=function(t){var e=t.id,n=t.handleUpdateClick,o=t.title,i=Object(r.useState)(),a=Object(l.a)(i,2),s=a[0],u=a[1];return Object(c.jsxs)("form",{value:s,onSubmit:function(t){t.preventDefault()},children:[Object(c.jsx)("input",{onChange:function(t){u(t.target.value)},type:"text"}),Object(c.jsx)("button",{onClick:function(){return n(s,e,o)},children:"replacing fragment of book to another fragment"})]})},u=function(t){var e=t.books,n=t.handleUpdateClick;if(e.length){var r=e.map((function(t,e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h1",{children:"book's title:"}),Object(c.jsx)("p",{children:'"'.concat(t.title,'"')}),Object(c.jsx)("h1",{children:"Fragment of the book:"}),Object(c.jsx)("p",{children:'"'.concat(t.body,'"')}),Object(c.jsx)(s,{handleUpdateClick:n,id:e,title:t.title})]},e)}));return Object(c.jsx)("ul",{children:r})}return null},d=function(t){var e=t.handleAddClick,n=Object(r.useState)(""),o=Object(l.a)(n,2),i=o[0],a=o[1],s=Object(r.useState)(""),u=Object(l.a)(s,2),d=u[0],h=u[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault()},children:[Object(c.jsx)("label",{htmlFor:"title",children:"Books' title"}),Object(c.jsx)("input",{value:i,id:"title",type:"text",onChange:function(t){a(t.target.value)}}),Object(c.jsx)("label",{htmlFor:"fragment",children:"Fragment of the book"}),Object(c.jsx)("input",{value:d,id:"fragment",type:"text",onChange:function(t){h(t.target.value)}}),Object(c.jsx)("button",{onClick:function(){return e(i,d)},children:"adding a book to the list"})]})},h=function(t){var e=t.handleDeleteClick;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:e,children:"delete everything and write your own list"}),Object(c.jsx)("hr",{})]})},j=function(t,e,n,c,r){fetch(t,n).then((function(t){if(t.status>=200&&t.status<=300)return t.json();throw new Error("error in downloading data")})).then((function(t){switch(n.method){case"GET":var o=t.map((function(t){return{title:t.title,body:t.body}}));return e(o);case"POST":return e(c.concat(t));case"PATCH":var i=c.map((function(e,n){return r===n?e.body=t:e}));return e(i);case"DELETE":return e(t=[]);default:console.log("unexpected method")}})).catch((function(t){return console.log(t)}))},b=["https://jsonplaceholder.typicode.com/posts?userId=1","https://jsonplaceholder.typicode.com/posts/1"],f=function(t,e,n,c){switch(t){case"GET":return{method:"GET",body:null,headers:{"Content-type":"application/json; charset=UTF-8"}};case"POST":return{method:"POST",body:JSON.stringify({title:e,body:n}),headers:{"Content-type":"application/json; charset=UTF-8"}};case"PATCH":return{method:"PATCH",body:JSON.stringify({body:c,title:e}),headers:{"Content-type":"application/json; charset=UTF-8"}};case"DELETE":return{method:"DELETE"};default:console.log("unexpected option")}},p=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1];Object(r.useEffect)((function(){j(b[0],o,f("GET"))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{handleDeleteClick:function(){j(b[1],o,f("DELETE"))}}),Object(c.jsx)(d,{handleAddClick:function(t,e){if(!t||!e){var c=function(t,e){var n=[];return t&&e||(n.title="this inputs are required"),n}(t,e);return alert("".concat(c.title))}j(b[0],o,f("POST",t,e),n)}}),Object(c.jsx)(u,{handleUpdateClick:function(t,e,c){if(!t){var r=function(t){var e=[];return t||(e.text="this text is required"),e}(t);return alert(r.text)}j(b[1],o,f("PATCH",c,null,t),n,e)},books:n})]})};var O=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"The best books of all time"}),Object(c.jsx)(p,{})]})};n(10);a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.3390922a.chunk.js.map