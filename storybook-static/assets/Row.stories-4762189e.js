import{j as e}from"./jsx-runtime-abfa3b14.js";import{d as C,D as y,e as u,P as w,f as g,g as f}from"./index-bb781280.js";import{s as h}from"./styled-components.browser.esm-a4b70de7.js";import{C as j,a as R}from"./Card-93adafe8.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";const S=h.div`
  /* CSS styling for the "storybook-row" class */
  &.storybook-row {
    /* General style for row */
    display: flex;
    flex-wrap: wrap;
  }

  /* Add another style if needed */
`,n=({style:r,items:o})=>e.jsx(S,{className:"storybook-row",style:r,children:o});try{n.displayName="Row",n.__docgenInfo={description:"",displayName:"Row",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"Because gap is still a new feature so some browsers don't support it, then (gap optional).",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const A={title:"Stories/Row&Col/Row",component:n,parameters:{layout:"centered",componentSubtitle:"'Component Row",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(y,{}),e.jsx(u,{}),e.jsx(w,{}),e.jsx(g,{}),e.jsx(f,{})]})}},tags:["autodocs"]},x=r=>{const o=[];for(let s=0;s<r;s++)o.push(e.jsx(j,{"data-testid":"row-item",card:"CardHover",content:[e.jsx(R,{children:e.jsxs("p",{children:["Content ",s]})})],style:{height:"200px",width:"200px"}},`card-${s}`));return o},a={args:{items:x(3),style:{gap:"3px",justifyContent:"center"}}},t={args:{items:x(3),style:{gap:"3px",justifyContent:"center"}}};t.parameters={docs:{source:{code:`
      <Row
  items={[
    <Card key="card-0" card="CardHover" content={[<ContentText><p>Content 0</p></ContentText>]} data-testid="row-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-1" card="CardHover" content={[<ContentText><p>Content 1</p></ContentText>]} data-testid="row-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-2" card="CardHover" content={[<ContentText><p>Content 2</p></ContentText>]} data-testid="row-item" style={{height: '200px', width: '200px'}}></Card>
  ]}
  style={{
    gap: '3px',
    justifyContent: 'center'
  }}
></Row>
      `}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(3),
    style: {
      gap: "3px",
      justifyContent: "center"
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: generateCardItems(3),
    style: {
      gap: "3px",
      justifyContent: "center"
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const B=["Preview","Row1"];export{a as Preview,t as Row1,B as __namedExportsOrder,A as default};
//# sourceMappingURL=Row.stories-4762189e.js.map
