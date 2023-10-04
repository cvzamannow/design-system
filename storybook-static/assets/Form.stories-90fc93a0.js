import{j as a}from"./jsx-runtime-abfa3b14.js";import{d as V,D as q,e as D,P as I,f as N,g as B}from"./index-bb781280.js";import{r as E}from"./_baseIsEqual-7a82cde0.js";import{s as u}from"./styled-components.browser.esm-a4b70de7.js";import{w as f,e as l}from"./index-1e26fe23.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjsHelpers-de833af9.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const p=u.form`
  
`,d=u.input`
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
`,c=u.label`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: block;
  margin-bottom: 2px;
  color: #6B7280;
`;try{p.displayName="FormComponent",p.__docgenInfo={description:"",displayName:"FormComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="FormInput",d.__docgenInfo={description:"",displayName:"FormInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{c.displayName="LabelForm",c.__docgenInfo={description:"",displayName:"LabelForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=({label:e,placeholder:s})=>{const[t,i]=E.useState(""),v=j=>{i(j.target.value)};return a.jsxs(p,{children:[a.jsx(c,{children:e}),a.jsx(d,{type:"text",className:"form-input",placeholder:s,value:t,onChange:v})]})};try{m.displayName="Form",m.__docgenInfo={description:"",displayName:"Form",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Stories/Form",component:m,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Form",docs:{page:()=>a.jsxs(a.Fragment,{children:[a.jsx(V,{}),a.jsx(q,{}),a.jsx(D,{}),a.jsx(I,{}),a.jsx(N,{}),a.jsx(B,{})]})}}},n={};n.args={label:"Your text:"};n.play=async({canvasElement:e})=>{const t=await f(e).getByText("Your text:");await l(t).toBeInTheDocument};const r={};r.args={label:"Your text:"};r.play=async({canvasElement:e})=>{const t=await f(e).getByText("Your text:");await l(t).toBeInTheDocument};r.parameters={docs:{source:{code:`
      <Form label="Your text:"></Form>
      `}}};const o={};o.args={label:"Your text:",placeholder:"Enter your Text..."};o.play=async({canvasElement:e})=>{const s=f(e),t=await s.getByText("Your text:"),i=await s.getByPlaceholderText("Enter your Text...");await l(i).toBeInTheDocument,await l(t).toBeInTheDocument};o.parameters={docs:{source:{code:`
      <Form
  label="Your text:"
  placeholder="Enter your Text..."
></Form>
      `}}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,_,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(_=r.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var T,F,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(w=(F=o.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const K=["Preview","Default","WithPlaceholder"];export{r as Default,n as Preview,o as WithPlaceholder,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Form.stories-90fc93a0.js.map
