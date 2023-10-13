import{j as t}from"./jsx-runtime-ffb262ed.js";import{F as p}from"./Poppins-750c9758.js";import{u as r}from"./styled-components.browser.esm-80e1cc08.js";const d=r.div`
  display: inline-block;
`,c=r.button`
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
`,n=({children:o,ButtonType:a="primary",size:e="medium",style:i,label:s,...l})=>{const u=`storybook-button--${a}`;return t.jsxs(t.Fragment,{children:[t.jsx(p,{}),t.jsx(d,{children:t.jsxs(c,{type:"button","data-testid":`button-size-${e}`,className:["storybook-button",`storybook-button--${e}`,u].join(" "),style:i,...l,children:[o,s]})})]})};try{n.displayName="Button",n.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{ButtonType:{defaultValue:{value:"primary"},description:"Is this the principal call to action on the page?",name:"ButtonType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"nolo"'},{value:'"text"'}]}},style:{defaultValue:null,description:"Additional style",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{n as B};
//# sourceMappingURL=Button-11f43769.js.map
