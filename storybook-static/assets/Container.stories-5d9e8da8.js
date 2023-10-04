import{j as e}from"./jsx-runtime-abfa3b14.js";import{d as h,D as w,e as T,P as v,f as _,g as I}from"./index-bb781280.js";import{w as x,e as n}from"./index-1e26fe23.js";import{s as g}from"./styled-components.browser.esm-a4b70de7.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const d=g.div`
    width: 100%;
    padding: 0 120px;
    max-width: 1440px;
    margin: auto;
    @media screen and (max-width: 768px) {
        width: 95%;
        margin: auto;
        padding: 0;
    }
`,i=g.div`
    font-size: 40px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    align-items: center;
    color: #000000b6;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffa724a4;
    height: 50vh;
`;try{d.displayName="StyledContainer",d.__docgenInfo={description:"",displayName:"StyledContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="ContentContainer",i.__docgenInfo={description:"",displayName:"ContentContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const l=({Contents:t})=>e.jsx(d,{"data-testid":"container",Contents:t,children:t});try{l.displayName="Container",l.__docgenInfo={description:"",displayName:"Container",props:{Contents:{defaultValue:null,description:"Content in the container",name:"Contents",required:!0,type:{name:"Element[]"}}}}}catch{}const G={title:"Stories/Container",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",componentSubtitle:"'Component Container",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsx(w,{}),e.jsx(T,{}),e.jsx(v,{}),e.jsx(_,{}),e.jsx(I,{})]})}}},s={args:{Contents:[e.jsx(i,{children:"Content"})]},play:async({canvasElement:t})=>{const a=x(t),o=await a.getByText("Content"),c=a.getByTestId("container");await n(o).toBeInTheDocument(),await n(c).toBeInTheDocument(),await n(o).toHaveStyle("background-color: #ffa724a4")}},r={args:{Contents:[e.jsx(i,{children:"Content"})]},play:async({canvasElement:t})=>{const a=x(t),o=await a.getByText("Content"),c=a.getByTestId("container");await n(o).toBeInTheDocument(),await n(c).toBeInTheDocument(),await n(o).toHaveStyle("background-color: #ffa724a4")}};r.parameters={docs:{source:{code:`
      <Container
  Contents={[
    <ContentContainer>Content</ContentContainer>
  ]}
 ></Container>
      `}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    Contents: [<ContentContainer>Content</ContentContainer>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Content');
    const testIdContainer = canvas.getByTestId('container');
    await expect(testText).toBeInTheDocument();
    await expect(testIdContainer).toBeInTheDocument();
    await expect(testText).toHaveStyle('background-color: #ffa724a4');
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var C,y,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    Contents: [<ContentContainer>Content</ContentContainer>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Content');
    const testIdContainer = canvas.getByTestId('container');
    await expect(testText).toBeInTheDocument();
    await expect(testIdContainer).toBeInTheDocument();
    await expect(testText).toHaveStyle('background-color: #ffa724a4');
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const z=["Preview","Grid1"];export{r as Grid1,s as Preview,z as __namedExportsOrder,G as default};
//# sourceMappingURL=Container.stories-5d9e8da8.js.map
