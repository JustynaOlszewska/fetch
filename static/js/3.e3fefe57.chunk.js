(this.webpackJsonplisfetch=this.webpackJsonplisfetch||[]).push([[3],{32:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(t,e){var n=[];return t&&e||(n.title="this inputs are required"),n},i=function(t){var e=[];return t||(e.text="this text is required"),e}},33:function(t,e,n){"use strict";n.r(e);var r=n(10),i=n(1),a=n(0),c=n(9),u=n(32),o=n(12);e.default=function(t){var e=t.books,n=t.setBooks,s=Object(a.useState)(""),b=Object(r.a)(s,2),l=b[0],j=b[1],f=Object(a.useState)(""),h=Object(r.a)(f,2),O=h[0],d=h[1],p=Object(r.a)(c.b,1)[0];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!l&&!O){var r=Object(u.a)(l,O);return alert("".concat(r.title))}Object(o.a)(p,n,Object(c.a)("POST",l,O),e)},children:[Object(i.jsx)("label",{htmlFor:"title",children:"Books' title"}),Object(i.jsx)("input",{value:l,id:"title",type:"text",onChange:function(t){j(t.target.value)}}),Object(i.jsx)("label",{htmlFor:"fragment",children:"Fragment of the book"}),Object(i.jsx)("input",{value:O,id:"fragment",type:"text",onChange:function(t){d(t.target.value)}}),Object(i.jsx)("button",{children:"adding a book to the list"})]})})}}}]);
//# sourceMappingURL=3.e3fefe57.chunk.js.map