import{j as l}from"./jsx-runtime-abfa3b14.js";import{d as _,D as k,e as M,P,f as C,g as q}from"./index-bb781280.js";import{w as r,e as s}from"./index-1e26fe23.js";import{s as V}from"./styled-components.browser.esm-a4b70de7.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const $=V.p`
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
`,u=({size:t="normal",label:e,...a})=>l.jsx($,{"data-testid":`label-size-${t}`,className:["storybook-label",`storybook-label--${t}`].join(" "),...a,children:e});try{u.displayName="Text",u.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Text",props:{size:{defaultValue:{value:"normal"},description:"How large should the Label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"preview"'},{value:'"extraSmall"'},{value:'"normal"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"contents",name:"label",required:!0,type:{name:"string"}}}}}catch{}const ee={title:"Stories/Text",component:u,parameters:{layout:"centered",componentSubtitle:"'Component Text",docs:{page:()=>l.jsxs(l.Fragment,{children:[l.jsx(_,{}),l.jsx(k,{}),l.jsx(M,{}),l.jsx(P,{}),l.jsx(C,{}),l.jsx(q,{})]})}},tags:["autodocs"]},x={args:{size:"preview",label:"preview"},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("extraSmall"),o=e.getByTestId("label-size-extraSmall");await s(a).toBeInTheDocument(),await s(o).toBeInTheDocument()}},n={args:{size:"extraSmall",label:"extraSmall"},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("extraSmall"),o=e.getByTestId("label-size-extraSmall");await s(a).toBeInTheDocument(),await s(o).toBeInTheDocument()}};n.parameters={docs:{source:{code:`
      <Text
  label="extraSmall"
  size="extraSmall"
></Text>
      `}}};const c={args:{size:"small",label:"Small"},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Small"),o=e.getByTestId("label-size-small");await s(a).toBeInTheDocument(),await s(o).toBeInTheDocument()}};c.parameters={docs:{source:{code:`
      <Text
  label="Small"
  size="small"
></Text>
      `}}};const i={args:{size:"normal",label:"Normal"},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Normal"),o=e.getByTestId("label-size-normal");await s(a).toBeInTheDocument(),await s(o).toBeInTheDocument()}};i.parameters={docs:{source:{code:`
      <Text
      label="Normal"
      size="normal"
    ></Text>
      `}}};const m={args:{size:"medium",label:"Medium"},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Medium"),o=e.getByTestId("label-size-medium");await s(a).toBeInTheDocument(),await s(o).toBeInTheDocument()}};m.parameters={docs:{source:{code:`
      <Text
  label="Medium"
  size="medium"
></Text>
      `}}};const p={args:{size:"large",label:"Large"},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Large"),o=e.getByTestId("label-size-large");await s(a).toBeInTheDocument(),await s(o).toBeInTheDocument()}};p.parameters={docs:{source:{code:`
      <Text
  label="Large"
  size="large"
></Text>
      `}}};var d,T,y;x.parameters={...x.parameters,docs:{...(d=x.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "preview",
    label: "preview"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('extraSmall');
    const testSize = canvas.getByTestId('label-size-extraSmall');
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(y=(T=x.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var g,S,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "extraSmall",
    label: "extraSmall"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('extraSmall');
    const testSize = canvas.getByTestId('label-size-extraSmall');
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var z,w,v;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Small');
    const testSize = canvas.getByTestId('label-size-small');
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var B,h,I;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: "normal",
    label: "Normal"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Normal');
    const testSize = canvas.getByTestId('label-size-normal');
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var f,D,E;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Medium"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Medium');
    const testSize = canvas.getByTestId('label-size-medium');
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,j,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Large"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Large');
    const testSize = canvas.getByTestId('label-size-large');
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const te=["Preview","ExtraSmall","Small","Normal","Medium","Large"];export{n as ExtraSmall,p as Large,m as Medium,i as Normal,x as Preview,c as Small,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Text.stories-0356b4ff.js.map
