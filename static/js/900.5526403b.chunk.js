"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[900],{4395:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(9439),a=n(2791),c=n(4420),o=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},s=n(7612),i=n(3553),u=function(e){return e.contacts.contacts},l=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},h=(0,i.P1)([u,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))})),d="contactForm_phoneBookForm__Asj8X",_="contactForm_phoneBookFormBtn__s5Uh1",f="contactForm_phoneBookInput__ej6w3",p=n(184),j=function(){var e=(0,c.I0)(),t=(0,c.v9)(u),n=(0,a.useState)(""),i=(0,r.Z)(n,2),l=i[0],m=i[1],h=(0,a.useState)(""),j=(0,r.Z)(h,2),b=j[0],x=j[1],v=function(n){var r=n.name,a=n.number,c=t.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}));c?alert("".concat(c.name," is already in contacts.")):e((0,s.el)({id:o(),name:r,number:a}))},N=function(e){switch(e.currentTarget.name){case"name":m(e.currentTarget.value);break;case"number":x(e.currentTarget.value);break;default:return}};return(0,p.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault(),v({name:l,number:b}),m(""),x("")},children:[(0,p.jsx)("label",{htmlFor:"checkName",children:"Name"}),(0,p.jsx)("input",{className:f,id:"checkName",type:"text",name:"name",required:!0,value:l,onChange:N}),(0,p.jsx)("label",{htmlFor:"phoneNumber",children:"Number"}),(0,p.jsx)("input",{className:f,id:"phoneNumber",type:"tel",pattern:"[0-9]*",name:"number",required:!0,value:b,onChange:N}),(0,p.jsx)("button",{className:_,type:"submit",children:"Add Contact"})]})},b="filter_filterLabel__jh4CL",x="filter_filterInput__2T6yn",v=(n(1174),n(4943)),N=function(){var e=(0,c.I0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("label",{className:b,htmlFor:"search",children:"Find contacts by name"}),(0,p.jsx)("input",{className:x,id:"search",type:"text",name:"filter",onChange:function(t){return e((0,v.W2)(t.currentTarget.value))}})]})},g="contactList_contactList__rfM1N",k="contactList_contactListItem__T4ojX",C="contactList_contactDelBtn__8dHcC",L="contactList_contactItemView__ZCO5i",w=function(e){return e.replace(/(\d{3})(\d{2})(\d{2})/,"$1-$2-$3")},F=function(){var e=(0,c.I0)();(0,a.useEffect)((function(){e((0,s.yF)())}),[e]);var t=(0,c.v9)(l),n=(0,c.v9)(m),r=(0,c.v9)(h);return(0,p.jsxs)(p.Fragment,{children:[t&&(0,p.jsx)("p",{children:"Loading tasks..."}),n&&(0,p.jsx)("p",{children:n}),r.length>0&&(0,p.jsx)("ul",{className:g,children:r.map((function(t){var n=t.id,r=t.name,a=t.number;return(0,p.jsxs)("li",{className:k,children:[(0,p.jsxs)("p",{className:L,children:[r,": ",w(a)]}),(0,p.jsx)("button",{className:C,type:"button",name:"delete",onClick:function(){return e((0,s.GK)(n))},children:"Delete"})]},n)}))})]})},y="contactsPage_phonebookBox__IIogT",I="contactsPage_phonebookTitle__MMdNM",T="contactsPage_contactsTitle__e3GjE",B=function(){return(0,p.jsxs)("div",{className:y,children:[(0,p.jsx)("h1",{className:I,children:"Phonebook"}),(0,p.jsx)("h2",{className:T,children:"Contacts"}),(0,p.jsx)(j,{}),(0,p.jsx)(N,{}),(0,p.jsx)(F,{})]})}}}]);
//# sourceMappingURL=900.5526403b.chunk.js.map