import{j as e}from"./jsx-runtime-abfa3b14.js";import{d as T,D as w,e as j,P as V,f as q,g as v}from"./index-e4f3dd05.js";import{r as D}from"./_baseIsEqual-7a82cde0.js";import{s as c}from"./styled-components.browser.esm-a4b70de7.js";import{F as I}from"./Poppins-f5e71f53.js";import{w as _,e as l}from"./index-0aa71439.js";import"./iframe-d4f4c603.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjsHelpers-de833af9.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const i=c.form`
  
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
`;try{i.displayName="FormComponent",i.__docgenInfo={description:"",displayName:"FormComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="FormInput",p.__docgenInfo={description:"",displayName:"FormInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="LabelForm",d.__docgenInfo={description:"",displayName:"LabelForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=({label:a,placeholder:o})=>{const[s,n]=D.useState(""),b=F=>{n(F.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs(i,{children:[e.jsx(d,{children:a}),e.jsx(p,{type:"text",className:"form-input",placeholder:o,value:s,onChange:b})]})]})};try{m.displayName="Form",m.__docgenInfo={description:"",displayName:"Form",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Stories/Form",component:m,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Form",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{}),e.jsx(V,{}),e.jsx(q,{}),e.jsx(v,{})]})}}},t={};t.args={label:"Your text:"};t.play=async({canvasElement:a})=>{const s=await _(a).getByText("Your text:");await l(s).toBeInTheDocument};const r={};r.args={label:"Your text:",placeholder:"Enter your Text..."};r.play=async({canvasElement:a})=>{const o=_(a),s=await o.getByText("Your text:"),n=await o.getByPlaceholderText("Enter your Text...");await l(n).toBeInTheDocument,await l(s).toBeInTheDocument};var u,f,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,g,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const H=["Default","WithPlaceholder"];export{t as Default,r as WithPlaceholder,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Form.stories-af1ed829.js.map
