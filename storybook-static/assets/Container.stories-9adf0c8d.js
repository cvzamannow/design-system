import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as y,D as C,e as _,P as x,f as h,g}from"./index-376a8e76.js";import{w}from"./index-5e507b17.js";import{e as a}from"./index-788b45c9.js";import{u as d}from"./styled-components.browser.esm-af746835.js";import{F as v}from"./Poppins-7d9631b9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-031da4eb.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const r=d.div`
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
`;try{r.displayName="BodyContainer",r.__docgenInfo={description:"",displayName:"BodyContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{o.displayName="StyledContainer",o.__docgenInfo={description:"",displayName:"StyledContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},Contents:{defaultValue:null,description:"Content in the container",name:"Contents",required:!0,type:{name:"Element[]"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{i.displayName="ContentContainer",i.__docgenInfo={description:"",displayName:"ContentContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const s=({Contents:t})=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(r,{children:e.jsx(o,{"data-testid":"container",Contents:t,children:t})})]});try{s.displayName="Container",s.__docgenInfo={description:"",displayName:"Container",props:{Contents:{defaultValue:null,description:"Content in the container",name:"Contents",required:!0,type:{name:"Element[]"}}}}}catch{}const R={title:"Components/Container",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",componentSubtitle:"'Component Container",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(C,{}),e.jsx(_,{}),e.jsx(x,{}),e.jsx(h,{}),e.jsx(g,{})]})}}},n={args:{Contents:[e.jsx(i,{children:"Content"})]},play:async({canvasElement:t})=>{const l=w(t),c=await l.getByText("Content"),f=l.getByTestId("container");await a(c).toBeInTheDocument(),await a(f).toBeInTheDocument(),await a(c).toHaveStyle("background-color: #ffa724a4")}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const k=["Grid1"];export{n as Grid1,k as __namedExportsOrder,R as default};
//# sourceMappingURL=Container.stories-9adf0c8d.js.map
