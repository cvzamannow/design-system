import{j as t}from"./jsx-runtime-abfa3b14.js";import{d as f,D as T,e as v,P as I,f as w,g as _}from"./index-bb781280.js";import{w as y,e as h}from"./index-1e26fe23.js";import{s as j}from"./styled-components.browser.esm-a4b70de7.js";import{C as B,a as b}from"./Card-93adafe8.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const d=j.div` 
    display: grid;
    grid-template-columns: ${e=>`repeat(${e.columns}, 0fr)`};
    grid-gap: ${e=>e.gap};
`;try{d.displayName="StyledGrid",d.__docgenInfo={description:"",displayName:"StyledGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({items:e,columns:n,gap:a})=>t.jsx(d,{items:e,columns:n,gap:a,children:e.map((r,s)=>t.jsx("div",{children:r},s))});try{c.displayName="Grid",c.__docgenInfo={description:"",displayName:"Grid",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Element[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"number"}},gap:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"gap",required:!0,type:{name:"string"}}}}}catch{}const F={title:"Stories/Grid",component:c,tags:["autodocs"],parameters:{layout:"centered",componentSubtitle:"'Component Grid",docs:{page:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{}),t.jsx(T,{}),t.jsx(v,{}),t.jsx(I,{}),t.jsx(w,{}),t.jsx(_,{})]})}}},C=e=>{const n=[];for(let a=0;a<e;a++)n.push(t.jsx(B,{"data-testid":"card-item",card:"CardHover",content:[t.jsx(b,{children:t.jsxs("p",{children:["Content ",a]})})],style:{height:"200px",width:"200px"}},`card-${a}`));return n},i={args:{items:C(4),columns:2,gap:"4px"},play:async({canvasElement:e})=>{const n=y(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);h(s).toBeInTheDocument()}}},o={args:{items:C(4),columns:2,gap:"4px"},play:async({canvasElement:e})=>{const n=y(e),a=n.getAllByTestId("card-item");for(let r=0;r<a.length;r++){const s=await n.findByText(`Content ${r}`);h(s).toBeInTheDocument()}}};o.parameters={docs:{source:{code:`
      <Grid
  columns={2}
  gap="4px"
  items={[
    <Card key="card-0" card="CardHover" content={[<ContentText><p>Content 0</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-1" card="CardHover" content={[<ContentText><p>Content 1</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-2" card="CardHover" content={[<ContentText><p>Content 2</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-3" card="CardHover" content={[<ContentText><p>Content 3</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>
  ]}
></Grid>
      `}}};var m,p,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(4),
    // Ubah angka 4 sesuai dengan jumlah item yang Anda inginkan.
    columns: 2,
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
}`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(4),
    // Ubah angka 4 sesuai dengan jumlah item yang Anda inginkan.
    columns: 2,
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
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const O=["Preview","Grid1"];export{o as Grid1,i as Preview,O as __namedExportsOrder,F as default};
//# sourceMappingURL=Grid.stories-ec5a9354.js.map
