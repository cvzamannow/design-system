import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-376a8e76.js";import{u as s}from"./styled-components.browser.esm-af746835.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-031da4eb.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-24ebd118.js";import"./_baseIsEqual-976d9d82.js";import"./index-d37d4223.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const r=s.div`

    p {
        font-size: 16px;
    }

    a {
        color: #3D6E65;
    }
`;try{r.displayName="InPage",r.__docgenInfo={description:"",displayName:"InPage",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function o(t){const n=Object.assign({p:"p",a:"a",img:"img",h1:"h1",h2:"h2",pre:"pre",code:"code",hr:"hr",h3:"h3"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction/Welcome"}),`
`,e.jsxs(r,{children:[e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@cvzamannow/uikit",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/@cvzamannow/uikit?style=flat&color=#FFA824",alt:"npm"})})}),e.jsxs(n.h1,{id:"welcome-to-cv-zaman-now-design-system",children:["Welcome to ",e.jsx("a",{children:"CV Zaman Now"}),e.jsx("br",{})," Design System"]}),e.jsxs(n.p,{children:["⚡ Build your own experiences on the CV Zaman Now platform!",e.jsx("br",{}),`\r
This framework provides low level utilities and UI components for building custom experiences.`]}),e.jsx("br",{}),e.jsx(n.h2,{id:"style",children:"Style"}),e.jsx(n.p,{children:`The CVZamanNow Design System stylesheet also provides a set of global CSS classes that can be used for typesetting and customizing other style properties.\r
All CSS classes provided by this framework implement standard values.`}),e.jsx("br",{}),e.jsx(n.h2,{id:"components",children:"Components"}),e.jsx(n.p,{children:"UI Components are currently offered as React (Web) components. Direct control over styling is limited by design, but theming is supported."}),e.jsx("br",{}),e.jsx(n.h2,{id:"installation",children:"Installation"}),e.jsxs(n.p,{children:["Make sure you have Node.js and npm installed on your computer before starting. If not, you can download it from ",e.jsx(n.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Node.js website"}),"."]}),e.jsx(n.p,{children:"To install the CV Zaman Now package, run the following command in the terminal :"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i @cvzamannow/uikit
`})}),e.jsxs(n.p,{children:["NPM package link: ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@cvzamannow/uikit",target:"_blank",rel:"nofollow noopener noreferrer",children:"NPM Package cvzamannow✨"})]}),e.jsx("br",{}),e.jsx(n.h2,{id:"usage-example",children:"Usage Example"}),e.jsx(n.p,{children:"After the package is installed, you can create your own file to create a CV using the components provided by CV Zaman Now."}),e.jsxs(n.p,{children:["Create a file with the extension ",e.jsx(n.code,{children:".tsx"})," or ",e.jsx(n.code,{children:".ts"})," (eg FormPage.tsx), for example like this:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Header, Button, Form } from '@cvzamannow/uikit';\r
\r
const FormPage = () => {\r
  return (\r
    <div>\r
      <Header\r
        NavLogo={[\r
          <><svg fill="none" height="32" viewBox="0 0 100 100" width="32" xmlns="http://www.w3.org/2000/svg"><rect fill="transparant" height="100" width="100"/><rect fill="white" height="9.48573" transform="rotate(135 56.5088 25.3428)" width="44.0702" x="56.5088" y="25.3428"/><path d="M49.9478 56.6504L43.1147 49.8173L49.9478 49.8173L56.6552 49.943L49.9478 56.6504Z" fill="white"/><rect fill="white" height="9.48573" transform="rotate(-135 49.8008 80.999)" width="44.0702" x="49.8008" y="80.999"/><rect fill="white" height="9.48573" transform="rotate(135 80.9834 49.8164)" width="44.0702" x="80.9834" y="49.8164"/></svg><div className="text-logo">CV ZAMAN NOW</div></>\r
        ]}\r
        ProfileWrapper={[\r
          <><Button ButtonType="nolo" label="Daftar" style={{height: '48px', width: '118px'}}/><Button ButtonType="text" label="Masuk" style={{marginLeft: '20px'}}/></>\r
        ]}\r
        menuItems={[\r
          <ul><li className="active">Beranda</li><li>Tentang Kami</li><li>Buat CV</li><li>Surat Lamaran</li></ul>\r
        ]}\r
      />\r
      <Form\r
        label="Your text:"\r
        placeholder="Enter Yout text.."\r
      />\r
      <Button\r
        ButtonType="primary"\r
        label="Button"\r
        onClick={() => {}}\r
        style={{\r
          height: '48px',\r
          width: '118px'\r
        }}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default FormPage;
`})}),e.jsx(n.hr,{}),e.jsx("center",{children:e.jsx(n.h3,{id:"----good-luck-----",children:"--- Good luck 😉👍 ---"})})]})]})}function b(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{b as default};
//# sourceMappingURL=Welcome-5c5ded0f.js.map
