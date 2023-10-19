import{j as t}from"./jsx-runtime-ffb262ed.js";import{d as D,D as _,e as E,P as j,f as N,g as k}from"./index-376a8e76.js";import{w as n}from"./index-5e507b17.js";import{e as l}from"./index-788b45c9.js";import{F as M}from"./Poppins-7d9631b9.js";import{u as q}from"./styled-components.browser.esm-af746835.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-031da4eb.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const P=q.p`
  /* CSS styling for the "storybook-label" class */
  &.storybook-label {
    font-family: 'poppins', sans-serif;
    font-size: 14px;
  }

  /* Style for extra small Label size */
  &.storybook-label--extraSmall {
    font-size: 10px;
  }

  /* Style for small Label size */
  &.storybook-label--small {
    font-size: 12px;
  }

  /* Style for normal Label size */
  &.storybook-label--normal {
    font-size: 14px;
  }

  /* Style for medium Label size */
  &.storybook-label--medium {
    font-size: 16px;
  }

  /* Style for large Label size */
  &.storybook-label--large {
    font-size: 18px;
  }


  /* Add another style if needed */
`;try{labelstyles.displayName="labelstyles",labelstyles.__docgenInfo={description:"",displayName:"labelstyles",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const d=({size:a="normal",label:e,...s})=>t.jsxs(t.Fragment,{children:[t.jsx(M,{}),t.jsx(P,{"data-testid":`label-size-${a}`,className:["storybook-label",`storybook-label--${a}`].join(" "),...s,children:e})]});try{d.displayName="Label",d.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Label",props:{size:{defaultValue:{value:"normal"},description:"How large should the Label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"extraSmall"'},{value:'"normal"'},{value:'"large"'}]}},label:{defaultValue:null,description:"contents",name:"label",required:!0,type:{name:"string"}}}}}catch{}const ee={title:"Components/Label",component:d,parameters:{layout:"centered",componentSubtitle:"'Component Label",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsx(_,{}),t.jsx(E,{}),t.jsx(j,{}),t.jsx(N,{}),t.jsx(k,{})]})}},tags:["autodocs"]},r={args:{size:"extraSmall",label:"extraSmall"},play:async({canvasElement:a})=>{const e=n(a),s=await e.getByText("extraSmall"),o=e.getByTestId("label-size-extraSmall");await l(s).toBeInTheDocument(),await l(o).toBeInTheDocument()}},i={args:{size:"small",label:"Small"},play:async({canvasElement:a})=>{const e=n(a),s=await e.getByText("Small"),o=e.getByTestId("label-size-small");await l(s).toBeInTheDocument(),await l(o).toBeInTheDocument()}},c={args:{size:"normal",label:"Normal"},play:async({canvasElement:a})=>{const e=n(a),s=await e.getByText("Normal"),o=e.getByTestId("label-size-normal");await l(s).toBeInTheDocument(),await l(o).toBeInTheDocument()}},m={args:{size:"medium",label:"Medium"},play:async({canvasElement:a})=>{const e=n(a),s=await e.getByText("Medium"),o=e.getByTestId("label-size-medium");await l(s).toBeInTheDocument(),await l(o).toBeInTheDocument()}},p={args:{size:"large",label:"Large"},play:async({canvasElement:a})=>{const e=n(a),s=await e.getByText("Large"),o=e.getByTestId("label-size-large");await l(s).toBeInTheDocument(),await l(o).toBeInTheDocument()}};var u,y,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "extraSmall",
    label: "extraSmall"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testLabel = await canvas.getByText('extraSmall');
    const testSize = canvas.getByTestId('label-size-extraSmall');
    await expect(testLabel).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,x,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testLabel = await canvas.getByText('Small');
    const testSize = canvas.getByTestId('label-size-small');
    await expect(testLabel).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var z,f,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "normal",
    label: "Normal"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testLabel = await canvas.getByText('Normal');
    const testSize = canvas.getByTestId('label-size-normal');
    await expect(testLabel).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(T=(f=c.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var w,B,h;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Medium"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testLabel = await canvas.getByText('Medium');
    const testSize = canvas.getByTestId('label-size-medium');
    await expect(testLabel).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(h=(B=m.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var v,L,I;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Large"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testLabel = await canvas.getByText('Large');
    const testSize = canvas.getByTestId('label-size-large');
    await expect(testLabel).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(I=(L=p.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const ae=["ExtraSmall","Small","Normal","Medium","Large"];export{r as ExtraSmall,p as Large,m as Medium,c as Normal,i as Small,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Label.stories-021a4bb3.js.map
