import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as T,D as w,e as j,P as V,f as q,g as v}from"./index-27a14dcd.js";import{r as D}from"./index-76fb7be0.js";import{s as c}from"./styled-components.browser.esm-925d74c1.js";import{F as I}from"./Poppins-750c9758.js";import{w as _}from"./index-928cf2f2.js";import{e as i}from"./index-82024415.js";import"./iframe-fc4a55f2.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjsHelpers-de833af9.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const l=c.form`
  
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
`;try{l.displayName="FormComponent",l.__docgenInfo={description:"",displayName:"FormComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="FormInput",p.__docgenInfo={description:"",displayName:"FormInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="LabelForm",d.__docgenInfo={description:"",displayName:"LabelForm",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=({label:r,placeholder:o})=>{const[s,n]=D.useState(""),b=F=>{n(F.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsxs(l,{children:[e.jsx(d,{children:r}),e.jsx(p,{type:"text",className:"form-input",placeholder:o,value:s,onChange:b})]})]})};try{m.displayName="Form",m.__docgenInfo={description:"",displayName:"Form",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Stories/Form",component:m,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Form",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(w,{}),e.jsx(j,{}),e.jsx(V,{}),e.jsx(q,{}),e.jsx(v,{})]})}}},t={};t.args={label:"Your text:"};t.play=async({canvasElement:r})=>{const s=await _(r).getByText("Your text:");await i(s).toBeInTheDocument};const a={};a.args={label:"Your text:",placeholder:"Enter your Text..."};a.play=async({canvasElement:r})=>{const o=_(r),s=await o.getByText("Your text:"),n=await o.getByPlaceholderText("Enter your Text...");await i(n).toBeInTheDocument,await i(s).toBeInTheDocument};var u,f,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,g,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const K=["Default","WithPlaceholder"];export{t as Default,a as WithPlaceholder,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Form.stories-bb8203f5.js.map
