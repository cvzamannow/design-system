import{j as e}from"./jsx-runtime-abfa3b14.js";import{d as u,D as y,e as g,P as C,f,g as h}from"./index-e4f3dd05.js";import{s as v}from"./styled-components.browser.esm-a4b70de7.js";import{C as j,a as I}from"./Card-0adef5ae.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d4f4c603.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./Poppins-f5e71f53.js";const T=v.div`
  /* CSS styling for the "storybook-col" class */
  &.storybook-col {
    /* General style for col */
    display: flex;
    flex-direction: column;
  }

  /* Add another style if needed */
`,r=({style:t,items:n})=>e.jsx(T,{className:"storybook-col",style:t,children:n});try{r.displayName="Col",r.__docgenInfo={description:"",displayName:"Col",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const R={title:"Stories/Row&Col/Col",component:r,parameters:{layout:"centered",componentSubtitle:"'Component Col",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(y,{}),e.jsx(g,{}),e.jsx(C,{}),e.jsx(f,{}),e.jsx(h,{})]})}},tags:["autodocs"]},x=t=>{const n=[];for(let s=0;s<t;s++)n.push(e.jsx(j,{"data-testid":"col-item",card:"CardHover",content:[e.jsx(I,{children:e.jsxs("p",{children:["Content ",s]})})],style:{height:"200px",width:"200px"}},`card-${s}`));return n},a={args:{items:x(3),style:{gap:"3px"}}},o={args:{items:x(3),style:{gap:"3px"}}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const V=["Preview","Col1"];export{o as Col1,a as Preview,V as __namedExportsOrder,R as default};
//# sourceMappingURL=Col.stories-c3b7d39f.js.map