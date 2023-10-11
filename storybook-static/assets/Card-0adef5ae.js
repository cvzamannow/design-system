import{j as r}from"./jsx-runtime-abfa3b14.js";import{F as l}from"./Poppins-f5e71f53.js";import{s as o}from"./styled-components.browser.esm-a4b70de7.js";const i=o.div`
  /* CSS styling for the "storybook-card" class */
  &.storybook-card {
    /* General style for cards */
    transition: background-color 0.3s, box-shadow 0.5s; /* Add transition property */
  }

  &.storybook-card--CardDefault {
    /*  */
  }

  &.storybook-card--CardHover {
    background-color: #f2f2f2;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 165, 0, 0);
      transition: background-color 0.3s ease;
    }
    

    &:hover::after {
      background-color: rgba(255, 165, 0, 0.5); /* Warna oranye transparan */
    }
  }

  /* Add another style if needed */
`,a=o.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #D1D5DB;

  p {
    font-family: 'poppins', sans-serif;
    color: #000000b8;
    margin: auto;
  }

`;try{a.displayName="ContentText",a.__docgenInfo={description:"",displayName:"ContentText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const t=({card:e="CardDefault",content:n,style:d,...s})=>r.jsxs(r.Fragment,{children:[r.jsx(l,{}),r.jsx(i,{"data-testid":`card-${e}`,className:["storybook-card",`storybook-card--${e}`].join(" "),style:d,...s,children:n})]});try{t.displayName="Card",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Card",props:{card:{defaultValue:{value:"CardDefault"},description:"How should the Card be?",name:"card",required:!1,type:{name:"enum",value:[{value:'"CardDefault"'},{value:'"CardHover"'}]}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{t as C,a};
//# sourceMappingURL=Card-0adef5ae.js.map
