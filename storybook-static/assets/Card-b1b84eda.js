import{j as a}from"./jsx-runtime-ffb262ed.js";import{F as s}from"./Poppins-7d9631b9.js";import{u as n}from"./styled-components.browser.esm-af746835.js";const i=n.div`
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
`,r=n.div`
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

`;try{cardstyles.displayName="cardstyles",cardstyles.__docgenInfo={description:"",displayName:"cardstyles",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="ContentText",r.__docgenInfo={description:"",displayName:"ContentText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const t=({card:e="CardDefault",content:o,style:d,...l})=>a.jsxs(a.Fragment,{children:[a.jsx(s,{}),a.jsx(i,{"data-testid":`card-${e}`,className:["storybook-card",`storybook-card--${e}`].join(" "),style:d,...l,children:o})]});try{t.displayName="Card",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Card",props:{card:{defaultValue:{value:"CardDefault"},description:"How should the Card be?",name:"card",required:!1,type:{name:"enum",value:[{value:'"CardDefault"'},{value:'"CardHover"'}]}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"Element[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{t as C,r as a};
//# sourceMappingURL=Card-b1b84eda.js.map
