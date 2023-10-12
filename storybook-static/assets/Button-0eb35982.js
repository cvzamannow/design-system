import{j as e}from"./jsx-runtime-ffb262ed.js";import{F as p}from"./Poppins-750c9758.js";import{s as a}from"./styled-components.browser.esm-925d74c1.js";const o=a.div`
  display: inline-block;
`,c=a.button`
  /* CSS styling for the "storybook-button" class */
  &.storybook-button {
    /* General style for Button */
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    border: 0;
    border-radius: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    transition: background-color 0.3s, box-shadow 0.3s; /* Add transition property */
  }


  /* Style for medium button size */
  &.storybook-button--medium {
    font-size: 18px;
    padding: 18px 16px;
  }

  /* Style for the primary button */
  &.storybook-button--primary {
    color: white;
    background-color: #FFA824;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Style for the secondary button */
  &.storybook-button--secondary {
    color: #FFA824;
    background-color: transparent;
    box-shadow: rgb(255, 167, 36) 0px 0px 0px 1.5px inset;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Style form the nol button */
  &.storybook-button--nolo {
    color: white;
    background-color: transparent;
    box-shadow:  0px 0px 0px 1px inset;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Style form the nol button */
  &.storybook-button--text {
    color: white;
    background-color: transparent;
    font-weight: 400;

    &:hover {
      opacity: 0.8;
    }
  }
  /* Add another style if needed */
`;try{o.displayName="DisplayContent",o.__docgenInfo={description:"",displayName:"DisplayContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const n=({children:t,ButtonType:i="primary",size:r="medium",style:l,label:s,...u})=>{const d=`storybook-button--${i}`;return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx(o,{children:e.jsxs(c,{type:"button","data-testid":`button-size-${r}`,className:["storybook-button",`storybook-button--${r}`,d].join(" "),style:l,...u,children:[t,s]})})]})};try{n.displayName="Button",n.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{ButtonType:{defaultValue:{value:"primary"},description:"Is this the principal call to action on the page?",name:"ButtonType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'},{value:'"nolo"'}]}},style:{defaultValue:null,description:"Additional style",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{n as B};
//# sourceMappingURL=Button-0eb35982.js.map
