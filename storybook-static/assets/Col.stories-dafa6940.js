import{j as e}from"./jsx-runtime-abfa3b14.js";import{d as x,D as y,e as u,P as g,f as h,g as f}from"./index-bb781280.js";import{s as T}from"./styled-components.browser.esm-a4b70de7.js";import{C as v,a as j}from"./Card-93adafe8.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";const w=T.div`
  /* CSS styling for the "storybook-col" class */
  &.storybook-col {
    /* General style for col */
    display: flex;
    flex-direction: column;
  }

  /* Add another style if needed */
`,r=({style:n,items:a})=>e.jsx(w,{className:"storybook-col",style:n,children:a});try{r.displayName="Col",r.__docgenInfo={description:"",displayName:"Col",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const q={title:"Stories/Row&Col/Col",component:r,parameters:{layout:"centered",componentSubtitle:"'Component Col",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx(y,{}),e.jsx(u,{}),e.jsx(g,{}),e.jsx(h,{}),e.jsx(f,{})]})}},tags:["autodocs"]},C=n=>{const a=[];for(let o=0;o<n;o++)a.push(e.jsx(v,{"data-testid":"col-item",card:"CardHover",content:[e.jsx(j,{children:e.jsxs("p",{children:["Content ",o]})})],style:{height:"200px",width:"200px"}},`card-${o}`));return a},s={args:{items:C(3),style:{gap:"3px"}}},t={args:{items:C(3),style:{gap:"3px"}}};t.parameters={docs:{source:{code:`
      <Col
  items={[
    <Card key="card-0" card="CardHover" content={[<ContentText><p>Content 0</p></ContentText>]} data-testid="col-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-1" card="CardHover" content={[<ContentText><p>Content 1</p></ContentText>]} data-testid="col-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-2" card="CardHover" content={[<ContentText><p>Content 2</p></ContentText>]} data-testid="col-item" style={{height: '200px', width: '200px'}}></Card>
  ]}
  style={{
    gap: '3px'
  }}
></Col>
      `}}};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(3),
    style: {
      gap: "3px"
    }
  }
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const cardItems = canvas.getAllByTestId("col-item"); // Menambahkan atribut test id pada Card element

  //   for (let i = 0; i < cardItems.length; i++) {
  //     const contentText = await canvas.findByText(\`Content \${i}\`);
  //     expect(contentText).toBeInTheDocument();
  //   }
  // },
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(3),
    style: {
      gap: "3px"
    }
  }
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const cardItems = canvas.getAllByTestId("col-item"); // Menambahkan atribut test id pada Card element

  //   for (let i = 0; i < cardItems.length; i++) {
  //     const contentText = await canvas.findByText(\`Content \${i}\`);
  //     expect(contentText).toBeInTheDocument();
  //   }
  // },
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const M=["Preview","Col1"];export{t as Col1,s as Preview,M as __namedExportsOrder,q as default};
//# sourceMappingURL=Col.stories-dafa6940.js.map
