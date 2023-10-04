import{j as s}from"./jsx-runtime-abfa3b14.js";import{s as u}from"./styled-components.browser.esm-a4b70de7.js";const p=u.button`
  /* CSS styling for the "storybook-button" class */
  &.storybook-button {
    /* General style for Button */
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    transition: background-color 0.3s, box-shadow 0.3s; /* Add transition property */
  }

  /* Style for small button size */
  &.storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }

  /* Style for medium button size */
  &.storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  /* Style for large button size */
  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
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
    box-shadow: rgba(255, 168, 36, 0.445) 0px 0px 0px 1px inset;

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
  /* Add another style if needed */
`,e=({children:o,ButtonType:r="primary",size:t="medium",backgroundColor:n,label:a,...l})=>{const i=`storybook-button--${r}`;return s.jsxs(p,{type:"button","data-testid":`button-size-${t}`,className:["storybook-button",`storybook-button--${t}`,i].join(" "),style:{backgroundColor:n},...l,children:[o,a]})};try{e.displayName="Button",e.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{ButtonType:{defaultValue:{value:"primary"},description:"Is this the principal call to action on the page?",name:"ButtonType",required:!1,type:{name:"enum",value:[{value:'"preview"'},{value:'"primary"'},{value:'"secondary"'},{value:'"nolo"'}]}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{e as B};
//# sourceMappingURL=Button-97d89743.js.map
