import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as j,D as w,e as T,P as V,f as q,g as E}from"./index-376a8e76.js";import{r as I}from"./index-76fb7be0.js";import{u as c}from"./styled-components.browser.esm-af746835.js";import{F as L}from"./Poppins-7d9631b9.js";import{w as g}from"./index-5e507b17.js";import{e as l}from"./index-788b45c9.js";import"./iframe-031da4eb.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjsHelpers-de833af9.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const i=c.form`
  
`,p=c.input`
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
`,d=c.label`
  font-family: 'poppins', sans-serif;
  display: block;
  margin-bottom: 2px;
  color: #6B7280;
`;try{i.displayName="FormComponent",i.__docgenInfo={description:"",displayName:"FormComponent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFormElement | null) => void) | RefObject<HTMLFormElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{p.displayName="FormInput",p.__docgenInfo={description:"",displayName:"FormInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{d.displayName="LabelForm",d.__docgenInfo={description:"",displayName:"LabelForm",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const m=({label:t,placeholder:o})=>{const[n,s]=I.useState(""),b=F=>{s(F.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsxs(i,{children:[e.jsx(d,{children:t}),e.jsx(p,{type:"text",className:"form-input",placeholder:o,value:n,onChange:b})]})]})};try{m.displayName="Form",m.__docgenInfo={description:"",displayName:"Form",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Components/Form",component:m,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Form",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(w,{}),e.jsx(T,{}),e.jsx(V,{}),e.jsx(q,{}),e.jsx(E,{})]})}}},a={};a.args={label:"Your text:"};a.play=async({canvasElement:t})=>{const n=await g(t).getByText("Your text:");await l(n).toBeInTheDocument};const r={};r.args={label:"Your text:",placeholder:"Enter your Text..."};r.play=async({canvasElement:t})=>{const o=g(t),n=await o.getByText("Your text:"),s=await o.getByPlaceholderText("Enter your Text...");await l(s).toBeInTheDocument,await l(n).toBeInTheDocument};var u,f,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,_,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const K=["Default","WithPlaceholder"];export{a as Default,r as WithPlaceholder,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Form.stories-1603fe13.js.map
