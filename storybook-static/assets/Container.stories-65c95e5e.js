import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as y,D as g,e as C,P as _,f as h,g as x}from"./index-27a14dcd.js";import{w}from"./index-928cf2f2.js";import{e as a}from"./index-82024415.js";import{s as d}from"./styled-components.browser.esm-925d74c1.js";import{F as T}from"./Poppins-750c9758.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fc4a55f2.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const r=d.div`
    width: 100%;
`,o=d.div`
    padding: 0 120px;
    max-width: 1440px;
    margin: auto;
    @media screen and (max-width: 768px) {
        width: 95%;
        margin: auto;
        padding: 0;
    }
`,i=d.div`
    font-size: 40px;
    font-family: 'poppins', sans-serif;
    align-items: center;
    color: #000000b6;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffa724a4;
    height: 50vh;
`;try{r.displayName="BodyContainer",r.__docgenInfo={description:"",displayName:"BodyContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledContainer",o.__docgenInfo={description:"",displayName:"StyledContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="ContentContainer",i.__docgenInfo={description:"",displayName:"ContentContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const s=({Contents:t})=>e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(r,{children:e.jsx(o,{"data-testid":"container",Contents:t,children:t})})]});try{s.displayName="Container",s.__docgenInfo={description:"",displayName:"Container",props:{Contents:{defaultValue:null,description:"Content in the container",name:"Contents",required:!0,type:{name:"Element[]"}}}}}catch{}const H={title:"Stories/Container",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",componentSubtitle:"'Component Container",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(g,{}),e.jsx(C,{}),e.jsx(_,{}),e.jsx(h,{}),e.jsx(x,{})]})}}},n={args:{Contents:[e.jsx(i,{children:"Content"})]},play:async({canvasElement:t})=>{const c=w(t),l=await c.getByText("Content"),f=c.getByTestId("container");await a(l).toBeInTheDocument(),await a(f).toBeInTheDocument(),await a(l).toHaveStyle("background-color: #ffa724a4")}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const z=["Grid1"];export{n as Grid1,z as __namedExportsOrder,H as default};
//# sourceMappingURL=Container.stories-65c95e5e.js.map
