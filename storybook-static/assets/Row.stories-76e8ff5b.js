import{j as e}from"./jsx-runtime-ffb262ed.js";import{d as y,D as x,e as g,P as f,f as w,g as C}from"./index-99e31b16.js";import{u as j}from"./styled-components.browser.esm-80e1cc08.js";import{C as h,a as S}from"./Card-d8e4ceec.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-62d1b309.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./Poppins-750c9758.js";const R=j.div`
  /* CSS styling for the "storybook-row" class */
  &.storybook-row {
    /* General style for row */
    display: flex;
    flex-wrap: wrap;
  }

  /* Add another style if needed */
`,n=({style:t,items:r})=>e.jsx(R,{className:"storybook-row",style:t,children:r});try{n.displayName="Row",n.__docgenInfo={description:"",displayName:"Row",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const G={title:"Stories/Row&Col/Row",component:n,parameters:{layout:"centered",componentSubtitle:"'Component Row",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(x,{}),e.jsx(g,{}),e.jsx(f,{}),e.jsx(w,{}),e.jsx(C,{})]})}},tags:["autodocs"]},u=t=>{const r=[];for(let s=0;s<t;s++)r.push(e.jsx(h,{"data-testid":"row-item",card:"CardHover",content:[e.jsx(S,{children:e.jsxs("p",{children:["Content ",s]})})],style:{height:"200px",width:"200px"}},`card-${s}`));return r},o={args:{items:u(3),style:{gap:"3px",justifyContent:"center"}}},a={args:{items:u(3),style:{gap:"3px",justifyContent:"center"}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(3),
    style: {
      gap: "3px",
      justifyContent: "center"
    }
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(3),
    style: {
      gap: "3px",
      justifyContent: "center"
    }
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const H=["Preview","Row1"];export{o as Preview,a as Row1,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Row.stories-76e8ff5b.js.map
