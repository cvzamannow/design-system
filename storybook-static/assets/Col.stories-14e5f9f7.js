import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as c,D as d,e as m,P as p,f as u,g as y}from"./index-376a8e76.js";import{u as f}from"./styled-components.browser.esm-af746835.js";import{C as x,a as C}from"./Card-b1b84eda.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-031da4eb.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./Poppins-7d9631b9.js";const g=f.div`
  /* CSS styling for the "storybook-col" class */
  &.storybook-col {
    /* General style for col */
    display: flex;
    flex-direction: column;
  }

  /* Add another style if needed */
`;try{colstyles.displayName="colstyles",colstyles.__docgenInfo={description:"",displayName:"colstyles",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const o=({style:t,items:s})=>e.jsx(g,{className:"storybook-col",style:t,children:s});try{o.displayName="Col",o.__docgenInfo={description:"",displayName:"Col",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const B={title:"Components/Row&Col/Col",component:o,parameters:{layout:"centered",componentSubtitle:"'Component Col",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(d,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(u,{}),e.jsx(y,{})]})}},tags:["autodocs"]},h=t=>{const s=[];for(let a=0;a<t;a++)s.push(e.jsx(x,{"data-testid":"col-item",card:"CardHover",content:[e.jsx(C,{children:e.jsxs("p",{children:["Content ",a]})})],style:{height:"200px",width:"200px"}},`card-${a}`));return s},n={args:{items:h(3),style:{gap:"3px"}}};var r,l,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const H=["Col1"];export{n as Col1,H as __namedExportsOrder,B as default};
//# sourceMappingURL=Col.stories-14e5f9f7.js.map
