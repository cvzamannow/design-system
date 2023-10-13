import{j as t}from"./jsx-runtime-ffb262ed.js";import{d as P,D as F,e as X,P as N,f as q,g as A}from"./index-99e31b16.js";import{w as r}from"./index-928cf2f2.js";import{e as s}from"./index-82024415.js";import{F as V}from"./Poppins-750c9758.js";import{u as _}from"./styled-components.browser.esm-80e1cc08.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-62d1b309.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const $=_.div`
  /* CSS styling for the "storybook-box-shadow" class */
  &.storybook-box {
    /* General style for box */
    transition: background-color 0.3s, box-shadow 0.5s; /* Add transition property */
  }


  /* Style for box shadow base */
  &.storybook-box--base {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  /* Style for box shadow Md */
  &.storybook-box--Md {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  /* Style for box shadow Lg */
  &.storybook-box--Lg {
    box-shadow: rgba(136, 165, 191, 0.509) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  /* Style for box shadow xl */
  &.storybook-box--xl {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  /* Style for box shadow xxl */
  &.storybook-box--xxl {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }

  /* Style for box shadow Inner */
  &.storybook-box--Inner {
    box-shadow: rgba(0, 0, 0, 0.061) 0px 4px 12px 0px inset;
  }

  /* Add another style if needed */
`,c=_.div`
  background-color: transparent;
  width: 200px;
  height: 200px;
  border: 0;
  display: flex;
  align-items: center;

  p {
    margin: auto;
    color: #0000008a;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  
`,l=({shadow:a="base",content:e,...o})=>t.jsxs(t.Fragment,{children:[t.jsx(V,{}),t.jsx($,{"data-testid":`shadow-${a}`,className:["storybook-box",`storybook-box--${a}`].join(" "),...o,children:e})]});try{l.displayName="BoxShadow",l.__docgenInfo={description:"Primary UI component for user interaction",displayName:"BoxShadow",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element[]"}},shadow:{defaultValue:{value:"base"},description:"How shadow should the box be?",name:"shadow",required:!1,type:{name:"enum",value:[{value:'"preview"'},{value:'"base"'},{value:'"Md"'},{value:'"Lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"Inner"'}]}}}}}catch{}const nt={title:"Stories/Box-Shadow",component:l,parameters:{layout:"centered",componentSubtitle:"'Component Box-Shadow",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(P,{}),t.jsx(F,{}),t.jsx(X,{}),t.jsx(N,{}),t.jsx(q,{}),t.jsx(A,{})]})}},tags:["autodocs"]},d={args:{shadow:"base",content:[t.jsx(c,{children:t.jsx("p",{children:"base"})})]},play:async({canvasElement:a})=>{const e=r(a),o=await e.getByText("base"),n=e.getByTestId("shadow-base");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},x={args:{shadow:"Md",content:[t.jsx(c,{children:t.jsx("p",{children:"Md"})})]},play:async({canvasElement:a})=>{const e=r(a),o=await e.getByText("Md"),n=e.getByTestId("shadow-Md");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},p={args:{shadow:"Lg",content:[t.jsx(c,{children:t.jsx("p",{children:"Lg"})})]},play:async({canvasElement:a})=>{const e=r(a),o=await e.getByText("Lg"),n=e.getByTestId("shadow-Lg");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},i={args:{shadow:"xl",content:[t.jsx(c,{children:t.jsx("p",{children:"xl"})})]},play:async({canvasElement:a})=>{const e=r(a),o=await e.getByText("xl"),n=e.getByTestId("shadow-xl");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},h={args:{shadow:"xxl",content:[t.jsx(c,{children:t.jsx("p",{children:"xxl"})})]},play:async({canvasElement:a})=>{const e=r(a),o=await e.getByText("xxl"),n=e.getByTestId("shadow-xxl");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},w={args:{shadow:"Inner",content:[t.jsx(c,{children:t.jsx("p",{children:"Inner"})})]},play:async({canvasElement:a})=>{const e=r(a),o=await e.getByText("Inner"),n=e.getByTestId("shadow-Inner");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};var m,y,T;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    shadow: "base",
    content: [<ContentShadow>\r
        <p>base</p>\r
      </ContentShadow>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('base');
    const testTypeShadow = canvas.getByTestId('shadow-base');
    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var g,u,b;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    shadow: "Md",
    content: [<ContentShadow>\r
        <p>Md</p>\r
      </ContentShadow>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Md');
    const testTypeShadow = canvas.getByTestId('shadow-Md');
    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  }
}`,...(b=(u=x.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var B,S,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    shadow: "Lg",
    content: [<ContentShadow>\r
        <p>Lg</p>\r
      </ContentShadow>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Lg');
    const testTypeShadow = canvas.getByTestId('shadow-Lg');
    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  }
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var v,f,D;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    shadow: "xl",
    content: [<ContentShadow>\r
        <p>xl</p>\r
      </ContentShadow>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('xl');
    const testTypeShadow = canvas.getByTestId('shadow-xl');
    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  }
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var j,C,E;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    shadow: "xxl",
    content: [<ContentShadow>\r
        <p>xxl</p>\r
      </ContentShadow>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('xxl');
    const testTypeShadow = canvas.getByTestId('shadow-xxl');
    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  }
}`,...(E=(C=h.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var L,M,k;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    shadow: "Inner",
    content: [<ContentShadow>\r
        <p>Inner</p>\r
      </ContentShadow>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Inner');
    const testTypeShadow = canvas.getByTestId('shadow-Inner');
    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  }
}`,...(k=(M=w.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const rt=["Base","Md","Lg","Xl","Xxl","Inner"];export{d as Base,w as Inner,p as Lg,x as Md,i as Xl,h as Xxl,rt as __namedExportsOrder,nt as default};
//# sourceMappingURL=BoxShadow.stories-576dae6e.js.map
