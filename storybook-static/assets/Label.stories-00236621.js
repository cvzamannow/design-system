import{j as o}from"./jsx-runtime-ffb262ed.js";import{d as D,D as E,e as j,P as _,f as k,g as N}from"./index-99e31b16.js";import{w as n}from"./index-928cf2f2.js";import{e as s}from"./index-82024415.js";import{u as M}from"./styled-components.browser.esm-80e1cc08.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-62d1b309.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const C=M.p`
  /* CSS styling for the "storybook-label" class */
  &.storybook-label {
    font-family: sans-serif;
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
`,u=({size:a="normal",label:e,...t})=>o.jsx(C,{"data-testid":`label-size-${a}`,className:["storybook-label",`storybook-label--${a}`].join(" "),...t,children:e});try{u.displayName="Label",u.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Label",props:{size:{defaultValue:{value:"normal"},description:"How large should the Label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"normal"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"contents",name:"label",required:!0,type:{name:"string"}}}}}catch{}const Y={title:"Stories/Label",component:u,parameters:{layout:"centered",componentSubtitle:"'Component Label",docs:{page:()=>o.jsxs(o.Fragment,{children:[o.jsx(D,{}),o.jsx(E,{}),o.jsx(j,{}),o.jsx(_,{}),o.jsx(k,{}),o.jsx(N,{})]})}},tags:["autodocs"]},r={args:{size:"extraSmall",label:"extraSmall"},play:async({canvasElement:a})=>{const e=n(a),t=await e.getByText("extraSmall"),l=e.getByTestId("label-size-extraSmall");await s(t).toBeInTheDocument(),await s(l).toBeInTheDocument()}},i={args:{size:"small",label:"Small"},play:async({canvasElement:a})=>{const e=n(a),t=await e.getByText("Small"),l=e.getByTestId("label-size-small");await s(t).toBeInTheDocument(),await s(l).toBeInTheDocument()}},c={args:{size:"normal",label:"Normal"},play:async({canvasElement:a})=>{const e=n(a),t=await e.getByText("Normal"),l=e.getByTestId("label-size-normal");await s(t).toBeInTheDocument(),await s(l).toBeInTheDocument()}},m={args:{size:"medium",label:"Medium"},play:async({canvasElement:a})=>{const e=n(a),t=await e.getByText("Medium"),l=e.getByTestId("label-size-medium");await s(t).toBeInTheDocument(),await s(l).toBeInTheDocument()}},p={args:{size:"large",label:"Large"},play:async({canvasElement:a})=>{const e=n(a),t=await e.getByText("Large"),l=e.getByTestId("label-size-large");await s(t).toBeInTheDocument(),await s(l).toBeInTheDocument()}};var b,d,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,x,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var z,T,B;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var w,v,h;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(v=m.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var L,I,f;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(f=(I=p.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const Z=["ExtraSmall","Small","Normal","Medium","Large"];export{r as ExtraSmall,p as Large,m as Medium,c as Normal,i as Small,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Label.stories-00236621.js.map
