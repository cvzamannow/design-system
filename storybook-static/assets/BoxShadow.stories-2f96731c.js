import{j as e}from"./jsx-runtime-abfa3b14.js";import{d as V,D as X,e as H,P as W,f as $,g as F}from"./index-bb781280.js";import{w as c,e as s}from"./index-1e26fe23.js";import{s as P}from"./styled-components.browser.esm-a4b70de7.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const G=P.div`
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
`,r=P.div`
  background-color: transparent;
  width: 200px;
  height: 200px;
  border: 0;
  display: flex;
  align-items: center;

  p {
    margin: auto;
    color: #0000008a;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
  }
  
`;try{r.displayName="ContentShadow",r.__docgenInfo={description:"",displayName:"ContentShadow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=({shadow:a="base",content:t,...o})=>e.jsx(G,{"data-testid":`shadow-${a}`,className:["storybook-box",`storybook-box--${a}`].join(" "),...o,children:t});try{m.displayName="BoxShadow",m.__docgenInfo={description:"Primary UI component for user interaction",displayName:"BoxShadow",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element[]"}},shadow:{defaultValue:{value:"base"},description:"How shadow should the box be?",name:"shadow",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"preview"'},{value:'"Md"'},{value:'"Lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"Inner"'}]}}}}}catch{}const ne={title:"Stories/Box-Shadow",component:m,parameters:{layout:"centered",componentSubtitle:"'Component Box-Shadow",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsx(X,{}),e.jsx(H,{}),e.jsx(W,{}),e.jsx($,{}),e.jsx(F,{})]})}},tags:["autodocs"]},l={args:{shadow:"preview",content:[e.jsx(r,{children:e.jsx("p",{children:"preview"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("base"),n=t.getByTestId("shadow-base");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}},d={args:{shadow:"base",content:[e.jsx(r,{children:e.jsx("p",{children:"base"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("base"),n=t.getByTestId("shadow-base");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};d.parameters={docs:{source:{code:`
<BoxShadow
content={[
  <ContentShadow><p>base</p></ContentShadow>
]}
  shadow="base"
></BoxShadow>
      `}}};const p={args:{shadow:"Md",content:[e.jsx(r,{children:e.jsx("p",{children:"Md"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("Md"),n=t.getByTestId("shadow-Md");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};p.parameters={docs:{source:{code:`
<BoxShadow
content={[
  <ContentShadow><p>Md</p></ContentShadow>
]}
  shadow="Md"
></BoxShadow>
      `}}};const x={args:{shadow:"Lg",content:[e.jsx(r,{children:e.jsx("p",{children:"Lg"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("Lg"),n=t.getByTestId("shadow-Lg");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};x.parameters={docs:{source:{code:`
<BoxShadow
content={[
  <ContentShadow><p>Lg</p></ContentShadow>
]}
  shadow="Lg"
></BoxShadow>
      `}}};const h={args:{shadow:"xl",content:[e.jsx(r,{children:e.jsx("p",{children:"xl"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("xl"),n=t.getByTestId("shadow-xl");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};h.parameters={docs:{source:{code:`
<BoxShadow
content={[
  <ContentShadow><p>xl</p></ContentShadow>
]}
  shadow="xl"
></BoxShadow>
      `}}};const w={args:{shadow:"xxl",content:[e.jsx(r,{children:e.jsx("p",{children:"xxl"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("xxl"),n=t.getByTestId("shadow-xxl");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};w.parameters={docs:{source:{code:`
<BoxShadow
content={[
  <ContentShadow><p>xxl</p></ContentShadow>
]}
  shadow="xxl"
></BoxShadow>
      `}}};const i={args:{shadow:"Inner",content:[e.jsx(r,{children:e.jsx("p",{children:"Inner"})})]},play:async({canvasElement:a})=>{const t=c(a),o=await t.getByText("Inner"),n=t.getByTestId("shadow-Inner");await s(o).toBeInTheDocument(),await s(n).toBeInTheDocument()}};i.parameters={docs:{source:{code:`
<BoxShadow
content={[
  <ContentShadow><p>Inner</p></ContentShadow>
]}
  shadow="Inner"
></BoxShadow>
      `}}};var y,T,u;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    shadow: "preview",
    content: [<ContentShadow>\r
        <p>preview</p>\r
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
}`,...(u=(T=l.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var g,S,B;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(S=d.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var b,v,I;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(v=p.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var f,C,D;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(C=x.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var j,_,E;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var L,M,k;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(M=w.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var N,q,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const re=["Preview","Base","Md","Lg","Xl","Xxl","Inner"];export{d as Base,i as Inner,x as Lg,p as Md,l as Preview,h as Xl,w as Xxl,re as __namedExportsOrder,ne as default};
//# sourceMappingURL=BoxShadow.stories-2f96731c.js.map
