import{j as o}from"./jsx-runtime-abfa3b14.js";import{d as k,D as E,e as L,P as j,f as _,g as N}from"./index-e4f3dd05.js";import{w as r,e as l}from"./index-0aa71439.js";import{s as M}from"./styled-components.browser.esm-a4b70de7.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d4f4c603.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const C=M.p`
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
`,y=({size:t="normal",label:e,style:a,...s})=>o.jsx(C,{"data-testid":`label-size-${t}`,className:["storybook-label",`storybook-label--${t}`].join(" "),style:a,...s,children:e});try{y.displayName="Text",y.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Text",props:{size:{defaultValue:{value:"normal"},description:"How large should the Label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"preview"'},{value:'"extraSmall"'},{value:'"normal"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"contents",name:"label",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"additional style",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const W={title:"Stories/Text",component:y,parameters:{layout:"centered",componentSubtitle:"'Component Text",docs:{page:()=>o.jsxs(o.Fragment,{children:[o.jsx(k,{}),o.jsx(E,{}),o.jsx(L,{}),o.jsx(j,{}),o.jsx(_,{}),o.jsx(N,{})]})}},tags:["autodocs"]},n={args:{size:"extraSmall",label:"extraSmall",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("extraSmall"),s=e.getByTestId("label-size-extraSmall");await l(a).toBeInTheDocument(),await l(s).toBeInTheDocument()}},c={args:{size:"small",label:"Small",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Small"),s=e.getByTestId("label-size-small");await l(a).toBeInTheDocument(),await l(s).toBeInTheDocument()}},i={args:{size:"normal",label:"Normal",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Normal"),s=e.getByTestId("label-size-normal");await l(a).toBeInTheDocument(),await l(s).toBeInTheDocument()}},m={args:{size:"medium",label:"Medium",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Medium"),s=e.getByTestId("label-size-medium");await l(a).toBeInTheDocument(),await l(s).toBeInTheDocument()}},p={args:{size:"large",label:"Large",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Large"),s=e.getByTestId("label-size-large");await l(a).toBeInTheDocument(),await l(s).toBeInTheDocument()}};var u,d,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "extraSmall",
    label: "extraSmall",
    style: {
      color: "black"
    }
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
}`,...(x=(d=n.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var b,T,g;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small",
    style: {
      color: "black"
    }
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
}`,...(g=(T=c.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var S,z,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "normal",
    label: "Normal",
    style: {
      color: "black"
    }
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
}`,...(B=(z=i.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var v,w,h;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "Medium",
    style: {
      color: "black"
    }
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
}`,...(h=(w=m.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var I,f,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Large",
    style: {
      color: "black"
    }
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
}`,...(D=(f=p.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const X=["ExtraSmall","Small","Normal","Medium","Large"];export{n as ExtraSmall,p as Large,m as Medium,i as Normal,c as Small,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Text.stories-d7771576.js.map
