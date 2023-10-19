import{j as e}from"./jsx-runtime-ffb262ed.js";import{F as o}from"./Poppins-7d9631b9.js";import{u as i}from"./styled-components.browser.esm-af746835.js";const n=i.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #0D4A3E;
`,d=i.div`
  font-family: 'poppins', sans-serif;
  border-bottom: 1px solid #9CA3AF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 0 120px;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 768px) {
      width: 100%;
      margin: auto;
      padding: 0;
  }

  svg {
    display: inline-block;
    vertical-align: top;
  }

  .text-logo {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    margin: 9px 0 6px 2px;
    display: inline-block;
    vertical-align: center;
    font-family: 'poppins', sans-serif;
  }

  button + button {
    margin-left: 10px;
    margin-right: 20px;
  }

  .menuItems {
    font-family: 'poppins', sans-serif;
    margin-left: 0px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .menuItems ul {
    margin: 0px 0px;
    font-size: 18px;
    margin-left: 0px;
    list-style: none;
    display: flex;
  }

  .menuItems li {
    display: flex;
    align-items: center;
    height: 90px;
    margin-right: 30px;
    font-weight: 400;
    font-family: 'poppins', sans-serif; 
  }

  .active {
    font-weight: 500;
    border-bottom: solid 4px #FFA824;
    margin-bottom: -1px;
  }

`;try{n.displayName="HeaderNav",n.__docgenInfo={description:"",displayName:"HeaderNav",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{headerstyles.displayName="headerstyles",headerstyles.__docgenInfo={description:"",displayName:"headerstyles",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const t=({backgroundColor:a="#0D4A3E",NavLogo:r=[],menuItems:l=[],ProfileWrapper:s=[]})=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(n,{children:e.jsxs(d,{style:{backgroundColor:a},children:[e.jsx("div",{className:"NavLogo",children:r}),e.jsx("div",{className:"menuItems",children:l}),e.jsx("div",{className:"ProfileWrapper",children:s})]})})]});try{t.displayName="Header",t.__docgenInfo={description:"",displayName:"Header",props:{NavLogo:{defaultValue:{value:"[]"},description:"What logo in header",name:"NavLogo",required:!1,type:{name:"Element[]"}},menuItems:{defaultValue:{value:"[]"},description:"What menu in header",name:"menuItems",required:!1,type:{name:"Element[]"}},ProfileWrapper:{defaultValue:{value:"[]"},description:"What menu in header",name:"ProfileWrapper",required:!1,type:{name:"Element[]"}},backgroundColor:{defaultValue:{value:"#0D4A3E"},description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}}}}}catch{}export{t as H};
//# sourceMappingURL=Header-4dce567a.js.map
