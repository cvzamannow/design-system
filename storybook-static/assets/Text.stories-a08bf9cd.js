import{j as o}from"./jsx-runtime-ffb262ed.js";import{d as se,D as ne,e as oe,P as ce,f as re,g as ie}from"./index-376a8e76.js";import{w as c}from"./index-5e507b17.js";import{e as n}from"./index-788b45c9.js";import{F as le}from"./Poppins-7d9631b9.js";import{u as me}from"./styled-components.browser.esm-af746835.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-031da4eb.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const xe=me.p`
  /* CSS styling for the "storybook-label" class */
  &.storybook-text {
    font-family: 'poppins', sans-serif;
  }

  /* Style for regular Type */
  &.storybook-text--reguler {
    font-weight: 400;
  }

  /* Style for medium Type */
  &.storybook-text--medium {
    font-weight: 500;
  }

  /* Style for medium Type */
  &.storybook-text--semiBold {
    font-weight: 600;
  }

  /* Style for medium Type */
  &.storybook-text--bold {
    font-weight: 700;
  }

  /* Heading */

  /* Style for h1 size */
  &.storybook-text--h1 {
    font-size: 32px;
  }

  /* Style for h2 size */
  &.storybook-text--h2 {
    font-size: 30px;
  }

  /* Style for h3 size */
  &.storybook-text--h3 {
    font-size: 28px;
  }

  /* Style for h4 size */
  &.storybook-text--h4 {
    font-size: 26px;
  }

  /* Style for h5 size */
  &.storybook-text--h5 {
    font-size: 24px;
  }

  /* Style for h6 size */
  &.storybook-text--h6 {
    font-size: 22px;
  }

  /* Style for h7 size */
  &.storybook-text--h7 {
    font-size: 20px;
  }

  /* Body Text */

  /* Style for b1 size */
  &.storybook-text--b1 {
    font-size: 18px;
  }

  /* Style for b2 size */
  &.storybook-text--b2 {
    font-size: 16px;
  }

  /* Style for b3 size */
  &.storybook-text--b3 {
    font-size: 14px;
  }

  /* Caption */

  /* Style for c1 size */
  &.storybook-text--c1 {
    font-size: 12px;
  }

  /* Style for c2 size */
  &.storybook-text--c2 {
    font-size: 10px;
  }

`;try{Textstyles.displayName="Textstyles",Textstyles.__docgenInfo={description:"",displayName:"Textstyles",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const z=({size:t,type:e="regular",text:a,style:s,...ae})=>o.jsxs(o.Fragment,{children:[o.jsx(le,{}),o.jsx(xe,{"data-testid":`text-size-${t}`,className:["storybook-text",`storybook-text--${t}`,`storybook-text--${e}`].join(" "),style:s,...ae,children:a})]});try{z.displayName="Text",z.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Text",props:{size:{defaultValue:null,description:"How large should the Text be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"h7"'},{value:'"b1"'},{value:'"b2"'},{value:'"b3"'},{value:'"c1"'},{value:'"c2"'}]}},type:{defaultValue:{value:"regular"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semiBold"'},{value:'"bold"'}]}},text:{defaultValue:null,description:"contents",name:"text",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"additional style",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ke={title:"Components/Text",component:z,parameters:{layout:"centered",componentSubtitle:"'Component Text",docs:{page:()=>o.jsxs(o.Fragment,{children:[o.jsx(se,{}),o.jsx(ne,{}),o.jsx(oe,{}),o.jsx(ce,{}),o.jsx(re,{}),o.jsx(ie,{})]})}},tags:["autodocs"]},r={args:{type:"regular",size:"h1",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-h1");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},i={args:{type:"regular",size:"h2",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-h2");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},l={args:{type:"regular",size:"h3",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-h3");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},m={args:{type:"regular",size:"h4",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-h4");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},x={args:{type:"regular",size:"h5",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-h5");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},u={args:{type:"regular",size:"h6",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-h6");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},p={args:{type:"regular",size:"h7",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-h7");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},y={args:{type:"regular",size:"b1",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-b1");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},T={args:{type:"regular",size:"b2",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-b2");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},d={args:{type:"regular",size:"b3",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-b3");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},g={args:{type:"regular",size:"c1",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-c1");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}},h={args:{type:"regular",size:"c2",text:"Your custom text example",style:{color:"black"}},play:async({canvasElement:t})=>{const e=c(t),a=await e.getByText("Your custom text example"),s=e.getByTestId("text-size-c2");await n(a).toBeInTheDocument(),await n(s).toBeInTheDocument()}};var B,w,v;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "h1",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h1");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var I,b,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "h2",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h2");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,D,Y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "h3",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h3");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(Y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};var k,E,H;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "h4",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h4");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var _,j,C;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "h5",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h5");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(C=(j=x.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var q,V,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "h6",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h6");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var N,F,$;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "h7",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h7");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...($=(F=p.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var A,L,M;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "b1",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-b1");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(M=(L=y.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,R,U;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "b2",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-b2");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(U=(R=T.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "b3",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-b3");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "c1",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-c1");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: "regular",
    size: "c2",
    text: "Your custom text example",
    style: {
      color: "black"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-c2");
    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ee=["H1","H2","H3","H4","H5","H6","H7","B1","B2","B3","C1","C2"];export{y as B1,T as B2,d as B3,g as C1,h as C2,r as H1,i as H2,l as H3,m as H4,x as H5,u as H6,p as H7,Ee as __namedExportsOrder,ke as default};
//# sourceMappingURL=Text.stories-a08bf9cd.js.map
