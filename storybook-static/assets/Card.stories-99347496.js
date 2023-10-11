import{j as t}from"./jsx-runtime-abfa3b14.js";import{d as h,D as y,e as T,P as g,f as v,g as w}from"./index-e4f3dd05.js";import{w as l,e as s}from"./index-0aa71439.js";import{C as D,a as u}from"./Card-0adef5ae.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d4f4c603.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";import"./Poppins-f5e71f53.js";import"./styled-components.browser.esm-a4b70de7.js";const A={title:"Stories/Card",component:D,parameters:{layout:"centered",componentSubtitle:"'Component Card",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsx(y,{}),t.jsx(T,{}),t.jsx(g,{}),t.jsx(v,{}),t.jsx(w,{})]})}},tags:["autodocs"]},a={args:{content:[t.jsx(u,{children:t.jsx("p",{children:"Card Default"})})],card:"CardDefault",style:{height:"306px",width:"193px"}},play:async({canvasElement:o})=>{const e=l(o),n=await e.getByText("Card Default"),c=e.getByTestId("card-CardDefault");await s(n).toBeInTheDocument(),await s(c).toBeInTheDocument()}},r={args:{content:[t.jsx(u,{children:t.jsx("p",{children:"Card Hover"})})],card:"CardHover",style:{height:"306px",width:"193px"}},play:async({canvasElement:o})=>{const e=l(o),n=await e.getByText("Card Hover"),c=e.getByTestId("card-CardHover");await s(n).toBeInTheDocument(),await s(c).toBeInTheDocument()}};var d,i,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: [<ContentText>\r
        <p>Card Default</p>\r
      </ContentText>],
    card: "CardDefault",
    style: {
      height: "306px",
      width: "193px"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testCard = await canvas.getByText('Card Default');
    const testTypeCard = canvas.getByTestId('card-CardDefault');
    await expect(testCard).toBeInTheDocument();
    await expect(testTypeCard).toBeInTheDocument();
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,C,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    content: [<ContentText>\r
        <p>Card Hover</p>\r
      </ContentText>],
    card: "CardHover",
    style: {
      height: "306px",
      width: "193px"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testCard = await canvas.getByText('Card Hover');
    const testTypeCard = canvas.getByTestId('card-CardHover');
    await expect(testCard).toBeInTheDocument();
    await expect(testTypeCard).toBeInTheDocument();
  }
}`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const G=["CardDefault","CardHover"];export{a as CardDefault,r as CardHover,G as __namedExportsOrder,A as default};
//# sourceMappingURL=Card.stories-99347496.js.map
