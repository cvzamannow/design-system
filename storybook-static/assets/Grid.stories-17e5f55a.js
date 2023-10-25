import{j as t}from"./jsx-runtime-ffb262ed.js";import{d as T,D as v,e as I,P as w,f as C,g as _}from"./index-376a8e76.js";import{w as y}from"./index-5e507b17.js";import{e as x}from"./index-788b45c9.js";import{u as j}from"./styled-components.browser.esm-af746835.js";import{C as B,a as M}from"./Card-b1b84eda.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-031da4eb.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";import"./Poppins-7d9631b9.js";const l=j.div` 
    display: grid;
    grid-template-columns: ${e=>`repeat(${e.columns}, 0fr)`};
    grid-gap: ${e=>e.gap};
    @media screen and (max-width: 768px) {
      grid-template-columns: ${e=>`repeat(${e.columnsMobile}, 0fr)`};
    }
`;try{l.displayName="StyledGrid",l.__docgenInfo={description:"",displayName:"StyledGrid",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"number"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Element[]"}},columnsMobile:{defaultValue:null,description:"",name:"columnsMobile",required:!0,type:{name:"number"}},gap:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"gap",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const m=({items:e,columns:n,columnsMobile:a,gap:r})=>t.jsx(l,{items:e,columns:n,gap:r,columnsMobile:a,children:e.map((s,b)=>t.jsx("div",{children:s},b))});try{m.displayName="Grid",m.__docgenInfo={description:"",displayName:"Grid",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Element[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"number"}},columnsMobile:{defaultValue:null,description:"",name:"columnsMobile",required:!0,type:{name:"number"}},gap:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"gap",required:!0,type:{name:"string"}}}}}catch{}const J={title:"Components/Grid",component:m,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Grid",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(T,{}),t.jsx(v,{}),t.jsx(I,{}),t.jsx(w,{}),t.jsx(C,{}),t.jsx(_,{})]})}}},h=e=>{const n=[];for(let a=0;a<e;a++)n.push(t.jsx(B,{"data-testid":"card-item",card:"CardHover",content:[t.jsx(M,{children:t.jsxs("p",{children:["Content ",a]})})],style:{height:"200px",width:"200px"}},`card-${a}`));return n},i={args:{items:h(4),columns:2,columnsMobile:1,gap:"4px"},play:async({canvasElement:e})=>{const n=y(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);x(s).toBeInTheDocument()}}},o={args:{items:h(4),columns:2,columnsMobile:1,gap:"4px"},play:async({canvasElement:e})=>{const n=y(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);x(s).toBeInTheDocument()}}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const K=["Preview","Grid1"];export{o as Grid1,i as Preview,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Grid.stories-17e5f55a.js.map
