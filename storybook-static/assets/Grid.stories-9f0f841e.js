import{j as t}from"./jsx-runtime-ffb262ed.js";import{d as T,D as I,e as b,P as v,f as C,g as j}from"./index-99e31b16.js";import{w as x}from"./index-928cf2f2.js";import{e as y}from"./index-82024415.js";import{u as w}from"./styled-components.browser.esm-80e1cc08.js";import{C as B,a as _}from"./Card-d8e4ceec.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-62d1b309.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";import"./Poppins-750c9758.js";const $=w.div` 
    display: grid;
    grid-template-columns: ${e=>`repeat(${e.columns}, 0fr)`};
    grid-gap: ${e=>e.gap};
    @media screen and (max-width: 768px) {
      grid-template-columns: ${e=>`repeat(${e.columnsMobile}, 0fr)`};
    }
`,c=({items:e,columns:n,columnsMobile:a,gap:r})=>t.jsx($,{items:e,columns:n,gap:r,columnsMobile:a,children:e.map((s,f)=>t.jsx("div",{children:s},f))});try{c.displayName="Grid",c.__docgenInfo={description:"",displayName:"Grid",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Element[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"number"}},columnsMobile:{defaultValue:null,description:"",name:"columnsMobile",required:!0,type:{name:"number"}},gap:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"gap",required:!0,type:{name:"string"}}}}}catch{}const K={title:"Stories/Grid",component:c,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Grid",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(T,{}),t.jsx(I,{}),t.jsx(b,{}),t.jsx(v,{}),t.jsx(C,{}),t.jsx(j,{})]})}}},h=e=>{const n=[];for(let a=0;a<e;a++)n.push(t.jsx(B,{"data-testid":"card-item",card:"CardHover",content:[t.jsx(_,{children:t.jsxs("p",{children:["Content ",a]})})],style:{height:"200px",width:"200px"}},`card-${a}`));return n},o={args:{items:h(4),columns:2,columnsMobile:1,gap:"4px"},play:async({canvasElement:e})=>{const n=x(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);y(s).toBeInTheDocument()}}},i={args:{items:h(4),columns:2,columnsMobile:1,gap:"4px"},play:async({canvasElement:e})=>{const n=x(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);y(s).toBeInTheDocument()}}};var m,d,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const L=["Preview","Grid1"];export{i as Grid1,o as Preview,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Grid.stories-9f0f841e.js.map
