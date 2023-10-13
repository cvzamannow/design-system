import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as b,D as F,e as j,P as w,f as T,g as _}from"./index-99e31b16.js";import{r as B}from"./index-76fb7be0.js";import{u as c}from"./styled-components.browser.esm-80e1cc08.js";import{F as E}from"./Poppins-750c9758.js";import{w as g}from"./index-928cf2f2.js";import{e as p}from"./index-82024415.js";import"./iframe-62d1b309.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjsHelpers-de833af9.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const D=c.form`
  
`,P=c.input`
  font-family: 'poppins', sans-serif;
  color: #6B7280;
  background-color: #F3F4F6;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #E5E7EB;
  border-radius: 5px;
  outline: none;
  width: 300px;
  transition: box-shadow 0.4s; /* Add transition property */

  &:focus {
    border: 3px solid #065f4673;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`,S=c.label`
  font-family: 'poppins', sans-serif;
  display: block;
  margin-bottom: 2px;
  color: #6B7280;
`,i=({label:t,placeholder:a})=>{const[s,n]=B.useState(""),h=y=>{n(y.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsxs(D,{children:[e.jsx(S,{children:t}),e.jsx(P,{type:"text",className:"form-input",placeholder:a,value:s,onChange:h})]})]})};try{i.displayName="Form",i.__docgenInfo={description:"",displayName:"Form",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Stories/Form",component:i,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Form",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsx(F,{}),e.jsx(j,{}),e.jsx(w,{}),e.jsx(T,{}),e.jsx(_,{})]})}}},o={};o.args={label:"Your text:"};o.play=async({canvasElement:t})=>{const s=await g(t).getByText("Your text:");await p(s).toBeInTheDocument};const r={};r.args={label:"Your text:",placeholder:"Enter your Text..."};r.play=async({canvasElement:t})=>{const a=g(t),s=await a.getByText("Your text:"),n=await a.getByPlaceholderText("Enter your Text...");await p(n).toBeInTheDocument,await p(s).toBeInTheDocument};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var x,u,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const K=["Default","WithPlaceholder"];export{o as Default,r as WithPlaceholder,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Form.stories-5af1ff93.js.map
