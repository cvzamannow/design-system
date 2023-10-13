import{j as r}from"./jsx-runtime-ffb262ed.js";import{F as d}from"./Poppins-750c9758.js";import{u as a}from"./styled-components.browser.esm-80e1cc08.js";const i=a.div`
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
`,p=a.div`
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

`,o=({card:e="CardDefault",content:t,style:n,...s})=>r.jsxs(r.Fragment,{children:[r.jsx(d,{}),r.jsx(i,{"data-testid":`card-${e}`,className:["storybook-card",`storybook-card--${e}`].join(" "),style:n,...s,children:t})]});try{o.displayName="Card",o.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Card",props:{card:{defaultValue:{value:"CardDefault"},description:"How should the Card be?",name:"card",required:!1,type:{name:"enum",value:[{value:'"CardDefault"'},{value:'"CardHover"'}]}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{o as C,p as a};
//# sourceMappingURL=Card-d8e4ceec.js.map
