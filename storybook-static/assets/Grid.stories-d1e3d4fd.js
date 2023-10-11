import{j as t}from"./jsx-runtime-abfa3b14.js";import{d as b,D as I,e as v,P as _,f as C,g as j}from"./index-e4f3dd05.js";import{w as x,e as f}from"./index-0aa71439.js";import{s as w}from"./styled-components.browser.esm-a4b70de7.js";import{C as B,a as G}from"./Card-0adef5ae.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d4f4c603.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";import"./Poppins-f5e71f53.js";const c=w.div` 
    display: grid;
    grid-template-columns: ${e=>`repeat(${e.columns}, 0fr)`};
    grid-gap: ${e=>e.gap};
    @media screen and (max-width: 768px) {
      grid-template-columns: ${e=>`repeat(${e.columnsMobile}, 0fr)`};
    }
`;try{c.displayName="StyledGrid",c.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const d=({items:e,columns:n,columnsMobile:a,gap:r})=>t.jsx(c,{items:e,columns:n,gap:r,columnsMobile:a,children:e.map((s,T)=>t.jsx("div",{children:s},T))});try{d.displayName="Grid",d.__docgenInfo={description:"",displayName:"Grid",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Element[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"number"}},columnsMobile:{defaultValue:null,description:"",name:"columnsMobile",required:!0,type:{name:"number"}},gap:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"gap",required:!0,type:{name:"string"}}}}}catch{}const R={title:"Stories/Grid",component:d,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Grid",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(b,{}),t.jsx(I,{}),t.jsx(v,{}),t.jsx(_,{}),t.jsx(C,{}),t.jsx(j,{})]})}}},h=e=>{const n=[];for(let a=0;a<e;a++)n.push(t.jsx(B,{"data-testid":"card-item",card:"CardHover",content:[t.jsx(G,{children:t.jsxs("p",{children:["Content ",a]})})],style:{height:"200px",width:"200px"}},`card-${a}`));return n},o={args:{items:h(4),columns:2,columnsMobile:1,gap:"4px"},play:async({canvasElement:e})=>{const n=x(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);f(s).toBeInTheDocument()}}},i={args:{items:h(4),columns:2,columnsMobile:1,gap:"4px"},play:async({canvasElement:e})=>{const n=x(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);f(s).toBeInTheDocument()}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(4),
    // Ubah angka 4 sesuai dengan jumlah item yang Anda inginkan.
    columns: 2,
    columnsMobile: 1,
    gap: "4px"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cardItems = canvas.getAllByTestId("card-item"); // Menambahkan atribut test id pada Card element

    for (let i = 0; i < cardItems.length; i++) {
      const contentText = await canvas.findByText(\`Content \${i}\`);
      expect(contentText).toBeInTheDocument();
    }
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(4),
    // Ubah angka 4 sesuai dengan jumlah item yang Anda inginkan.
    columns: 2,
    columnsMobile: 1,
    gap: "4px"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cardItems = canvas.getAllByTestId("card-item"); // Menambahkan atribut test id pada Card element

    for (let i = 0; i < cardItems.length; i++) {
      const contentText = await canvas.findByText(\`Content \${i}\`);
      expect(contentText).toBeInTheDocument();
    }
  }
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const z=["Preview","Grid1"];export{i as Grid1,o as Preview,z as __namedExportsOrder,R as default};
//# sourceMappingURL=Grid.stories-d1e3d4fd.js.map
