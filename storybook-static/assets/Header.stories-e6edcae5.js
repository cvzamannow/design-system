import{j as e}from"./jsx-runtime-abfa3b14.js";import{d as C,D as N,e as T,P as V,f as I,g as _}from"./index-bb781280.js";import{w as j,e as v}from"./index-1e26fe23.js";import{s as w}from"./styled-components.browser.esm-a4b70de7.js";import{B as o}from"./Button-97d89743.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";const l=w.header`
  width: 100%;
  background-color: #0D4A3E;
`,k=w.div`
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
    font-family: poppins, sans-serif;
  }

  button + button {
    margin-left: 10px;
    margin-right: 20px;
  }

  .welcome {
    color: white;
    font-size: 14px;
    margin-right: 10px;
    font-family: poppins, sans-serif; /* Menggunakan font-family yang telah Anda definisikan */
  }

  .menu {
    margin-left: 0px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .menu ul {
    font-weight: 500;
    margin: 0px 0px;
    font-size: 18px;
    margin-left: 0px;
    list-style: none;
    display: flex;
  }

  .menu li {
    display: flex;
    align-items: center;
    /* background-color: #9CA3AF; */
    height: 90px;
    margin-right: 30px;
    font-family: poppins, sans-serif; /* Menggunakan font-family yang telah Anda definisikan */
  }

  .menu .active {
    border-bottom: solid 4px #FFA824;
    margin-bottom: -1px;
  }

`;try{l.displayName="HeaderNav",l.__docgenInfo={description:"",displayName:"HeaderNav",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=({user:a,onLogin:s,onLogout:t,onCreateAccount:b,backgroundColor:B="#0D4A3E",menuItems:L=[]})=>e.jsx(l,{children:e.jsxs(k,{style:{backgroundColor:B},children:[e.jsxs("div",{children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"100",height:"100",fill:"transparant"}),e.jsx("rect",{x:"56.5088",y:"25.3428",width:"44.0702",height:"9.48573",transform:"rotate(135 56.5088 25.3428)",fill:"white"}),e.jsx("path",{d:"M49.9478 56.6504L43.1147 49.8173L49.9478 49.8173L56.6552 49.943L49.9478 56.6504Z",fill:"white"}),e.jsx("rect",{x:"49.8008",y:"80.999",width:"44.0702",height:"9.48573",transform:"rotate(-135 49.8008 80.999)",fill:"white"}),e.jsx("rect",{x:"80.9834",y:"49.8164",width:"44.0702",height:"9.48573",transform:"rotate(135 80.9834 49.8164)",fill:"white"})]}),e.jsx("div",{className:"text-logo",children:"CV ZAMAN NOW"})]}),e.jsx("div",{className:"menu",children:e.jsx("ul",{children:L})}),e.jsx("div",{children:a?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"welcome",children:["Welcome, ",e.jsx("b",{children:a.name}),"!"]}),e.jsx(o,{size:"small",onClick:t,label:"Log out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{ButtonType:"nolo",size:"large",onClick:b,label:"Daftar"}),e.jsx(o,{size:"large",onClick:s,label:"Masuk"})]})})]})});try{c.displayName="Header",c.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},menuItems:{defaultValue:{value:"[]"},description:"What menu in header",name:"menuItems",required:!1,type:{name:"Element[]"}},backgroundColor:{defaultValue:{value:"#0D4A3E"},description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}}}catch{}const U={title:"Stories/Header",argTypes:{backgroundColor:{control:"color"}},component:c,tags:["autodocs"],parameters:{layout:"fullscreen",componentSubtitle:"'Component Header",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(N,{}),e.jsx(T,{}),e.jsx(V,{}),e.jsx(I,{}),e.jsx(_,{})]})}}},n={args:{menuItems:[e.jsx("li",{className:"active",children:"Beranda"}),e.jsx("li",{children:"Tentang Kami"}),e.jsx("li",{children:"Buat CV"}),e.jsx("li",{children:"Surat Lamaran"})]}},i={args:{user:{name:"Zeta"},menuItems:[e.jsx("li",{className:"active",children:"Beranda"}),e.jsx("li",{children:"Tentang Kami"}),e.jsx("li",{children:"Buat CV"}),e.jsx("li",{children:"Surat Lamaran"})]},play:async({canvasElement:a})=>{const t=await j(a).getByText("Zeta");await v(t).toBeInTheDocument()}},r={args:{user:{name:"Vestia Zeta"},menuItems:[e.jsx("li",{className:"active",children:"Beranda"}),e.jsx("li",{children:"Tentang Kami"}),e.jsx("li",{children:"Buat CV"}),e.jsx("li",{children:"Surat Lamaran"})]},play:async({canvasElement:a})=>{const t=await j(a).getByText("Vestia Zeta");await v(t).toBeInTheDocument()}};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    menuItems: [<li className="active">Beranda</li>, <li>Tentang Kami</li>, <li>Buat CV</li>, <li>Surat Lamaran</li>]
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    user: {
      name: "Zeta"
    },
    menuItems: [<li className="active">Beranda</li>, <li>Tentang Kami</li>, <li>Buat CV</li>, <li>Surat Lamaran</li>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testname = await canvas.getByText('Zeta');
    await expect(testname).toBeInTheDocument();
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,f,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    user: {
      name: "Vestia Zeta"
    },
    menuItems: [<li className="active">Beranda</li>, <li>Tentang Kami</li>, <li>Buat CV</li>, <li>Surat Lamaran</li>]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testname = await canvas.getByText('Vestia Zeta');
    await expect(testname).toBeInTheDocument();
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const G=["LoggedOut","LoggedIn","LoggedInWithLongName"];export{i as LoggedIn,r as LoggedInWithLongName,n as LoggedOut,G as __namedExportsOrder,U as default};
//# sourceMappingURL=Header.stories-e6edcae5.js.map
