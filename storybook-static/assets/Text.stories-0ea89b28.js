import{j as l}from"./jsx-runtime-ffb262ed.js";import{d as k,D as E,e as L,P as j,f as _,g as N}from"./index-27a14dcd.js";import{w as r}from"./index-928cf2f2.js";import{e as o}from"./index-82024415.js";import{s as M}from"./styled-components.browser.esm-925d74c1.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fc4a55f2.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const C=M.p`
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
`,y=({size:t="normal",label:e,style:a,...s})=>l.jsx(C,{"data-testid":`label-size-${t}`,className:["storybook-label",`storybook-label--${t}`].join(" "),style:a,...s,children:e});try{y.displayName="Text",y.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Text",props:{size:{defaultValue:{value:"normal"},description:"How large should the Label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"extraSmall"'},{value:'"normal"'},{value:'"medium"'},{value:'"large"'},{value:'"preview"'}]}},label:{defaultValue:null,description:"contents",name:"label",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"additional style",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Y={title:"Stories/Text",component:y,parameters:{layout:"centered",componentSubtitle:"'Component Text",docs:{page:()=>l.jsxs(l.Fragment,{children:[l.jsx(k,{}),l.jsx(E,{}),l.jsx(L,{}),l.jsx(j,{}),l.jsx(_,{}),l.jsx(N,{})]})}},tags:["autodocs"]},n={args:{size:"extraSmall",label:"extraSmall",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("extraSmall"),s=e.getByTestId("label-size-extraSmall");await o(a).toBeInTheDocument(),await o(s).toBeInTheDocument()}},c={args:{size:"small",label:"Small",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Small"),s=e.getByTestId("label-size-small");await o(a).toBeInTheDocument(),await o(s).toBeInTheDocument()}},i={args:{size:"normal",label:"Normal",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Normal"),s=e.getByTestId("label-size-normal");await o(a).toBeInTheDocument(),await o(s).toBeInTheDocument()}},m={args:{size:"medium",label:"Medium",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Medium"),s=e.getByTestId("label-size-medium");await o(a).toBeInTheDocument(),await o(s).toBeInTheDocument()}},p={args:{size:"large",label:"Large",style:{color:"black"}},play:async({canvasElement:t})=>{const e=r(t),a=await e.getByText("Large"),s=e.getByTestId("label-size-large");await o(a).toBeInTheDocument(),await o(s).toBeInTheDocument()}};var u,d,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(D=(f=p.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const Z=["ExtraSmall","Small","Normal","Medium","Large"];export{n as ExtraSmall,p as Large,m as Medium,i as Normal,c as Small,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Text.stories-0ea89b28.js.map
