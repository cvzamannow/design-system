import{j as t}from"./jsx-runtime-ffb262ed.js";import{d as l,D as x,e as u,P as C,f,g}from"./index-99e31b16.js";import{w as y}from"./index-928cf2f2.js";import{e as o}from"./index-82024415.js";import{u as r}from"./styled-components.browser.esm-80e1cc08.js";import{F as h}from"./Poppins-750c9758.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-62d1b309.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const w=r.div`
    width: 100%;
`,j=r.div`
    padding: 0 120px;
    max-width: 1440px;
    margin: auto;
    @media screen and (max-width: 768px) {
        width: 95%;
        margin: auto;
        padding: 0;
    }
`,T=r.div`
    font-size: 40px;
    font-family: 'poppins', sans-serif;
    align-items: center;
    color: #000000b6;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffa724a4;
    height: 50vh;
`,a=({Contents:n})=>t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsx(w,{children:t.jsx(j,{"data-testid":"container",Contents:n,children:n})})]});try{a.displayName="Container",a.__docgenInfo={description:"",displayName:"Container",props:{Contents:{defaultValue:null,description:"Content in the container",name:"Contents",required:!0,type:{name:"Element[]"}}}}}catch{}const R={title:"Stories/Container",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",componentSubtitle:"'Component Container",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsx(x,{}),t.jsx(u,{}),t.jsx(C,{}),t.jsx(f,{}),t.jsx(g,{})]})}}},e={args:{Contents:[t.jsx(T,{children:"Content"})]},play:async({canvasElement:n})=>{const i=y(n),s=await i.getByText("Content"),d=i.getByTestId("container");await o(s).toBeInTheDocument(),await o(d).toBeInTheDocument(),await o(s).toHaveStyle("background-color: #ffa724a4")}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Grid1"];export{e as Grid1,V as __namedExportsOrder,R as default};
//# sourceMappingURL=Container.stories-13bb584e.js.map
