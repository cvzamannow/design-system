import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as q,D as N,e as P,P as V,f as A,g as F}from"./index-27a14dcd.js";import{w as c}from"./index-928cf2f2.js";import{e as s}from"./index-82024415.js";import{F as X}from"./Poppins-750c9758.js";import{s as k}from"./styled-components.browser.esm-925d74c1.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fc4a55f2.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const W=k.div`
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
`,r=k.div`
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
  
`;try{r.displayName="ContentShadow",r.__docgenInfo={description:"",displayName:"ContentShadow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const w=({shadow:a="base",content:t,...o})=>e.jsxs(e.Fragment,{children:[e.jsx(X,{}),e.jsx(W,{"data-testid":`shadow-${a}`,className:["storybook-box",`storybook-box--${a}`].join(" "),...o,children:t})]});try{w.displayName="BoxShadow",w.__docgenInfo={description:"Primary UI component for user interaction",displayName:"BoxShadow",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element[]"}},shadow:{defaultValue:{value:"base"},description:"How shadow should the box be?",name:"shadow",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"preview"'},{value:'"Md"'},{value:'"Lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"Inner"'}]}}}}}catch{}const ne={title:"Stories/Box-Shadow",component:w,parameters:{layout:"centered",componentSubtitle:"'Component Box-Shadow",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(N,{}),e.jsx(P,{}),e.jsx(V,{}),e.jsx(A,{}),e.jsx(F,{})]})}},tags:["autodocs"]},d={args:{shadow:"base",content:[e.jsx(r,{children:e.jsx("p",{children:"base"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("base"),n=t.getByTestId("shadow-base");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},p={args:{shadow:"Md",content:[e.jsx(r,{children:e.jsx("p",{children:"Md"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("Md"),n=t.getByTestId("shadow-Md");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},x={args:{shadow:"Lg",content:[e.jsx(r,{children:e.jsx("p",{children:"Lg"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("Lg"),n=t.getByTestId("shadow-Lg");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},i={args:{shadow:"xl",content:[e.jsx(r,{children:e.jsx("p",{children:"xl"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("xl"),n=t.getByTestId("shadow-xl");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},h={args:{shadow:"xxl",content:[e.jsx(r,{children:e.jsx("p",{children:"xxl"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("xxl"),n=t.getByTestId("shadow-xxl");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},l={args:{shadow:"Inner",content:[e.jsx(r,{children:e.jsx("p",{children:"Inner"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("Inner"),n=t.getByTestId("shadow-Inner");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};var m,y,T;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var u,g,b;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(g=p.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,B,I;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(B=x.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var v,f,D;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var j,C,_;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(C=h.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var E,L,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const re=["Base","Md","Lg","Xl","Xxl","Inner"];export{d as Base,l as Inner,x as Lg,p as Md,i as Xl,h as Xxl,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=BoxShadow.stories-f0b41ac6.js.map
