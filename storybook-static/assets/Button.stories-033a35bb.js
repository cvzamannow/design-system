import{j as a}from"./jsx-runtime-abfa3b14.js";import{d as C,D as H,e as L,P,f as N,g as _}from"./index-bb781280.js";import{w as B,e as o}from"./index-1e26fe23.js";import{B as p}from"./Button-97d89743.js";import"./_baseIsEqual-7a82cde0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4f758c98.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-e6bd85e6.js";import"./index-d37d4223.js";import"./uniq-17642f77.js";import"./index-356e4a49.js";import"./index-03bbf7d1.js";import"./styled-components.browser.esm-a4b70de7.js";const Z={title:"Stories/Button",component:p,parameters:{layout:"centered",componentSubtitle:"'Conponent Button",docs:{page:()=>a.jsxs(a.Fragment,{children:[a.jsx(C,{}),a.jsx(H,{}),a.jsx(L,{}),a.jsx(P,{}),a.jsx(N,{}),a.jsx(_,{})]})}},tags:["autodocs"],argTypes:{shildren:{control:"text"},backgroundColor:{control:"color"},ButtonType:{control:"text"},size:{control:"text"}}},r=t=>a.jsx(p,{...t,children:t.children});r.args={onClick:()=>alert("Hello"),children:"your text",disabled:!1};const c=t=>a.jsx(p,{...t,children:t.children});c.args={children:"Button",ButtonType:"primary"};const i={args:{ButtonType:"secondary",label:"Button"},play:async({canvasElement:t})=>{const e=B(t),s=await e.getByText("Button"),n=e.getByTestId("button-size-medium");await o(s).toBeInTheDocument(),await o(n).toBeInTheDocument(),await o(s).toHaveStyle("background-color: rgba(0, 0, 0, 0)")}},l={args:{ButtonType:"nolo",label:"Button"},play:async({canvasElement:t})=>{const e=B(t),s=await e.getByText("Button"),n=e.getByTestId("button-size-medium");await o(s).toBeInTheDocument(),await o(n).toBeInTheDocument(),await o(s).toHaveStyle("background-color: rgba(0, 0, 0, 0)")}},m={args:{size:"small",label:"Button"},play:async({canvasElement:t})=>{const e=B(t),s=await e.getByText("Button"),n=e.getByTestId("button-size-small");await o(s).toBeInTheDocument(),await o(n).toBeInTheDocument()}},u={args:{size:"large",label:"Button"},play:async({canvasElement:t})=>{const e=B(t),s=await e.getByText("Button"),n=e.getByTestId("button-size-large");await o(s).toBeInTheDocument(),await o(n).toBeInTheDocument()}};var d,g,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"(args: any) => <Button {...args}>{args.children}</Button>",...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,x,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:"(args: any) => <Button {...args}>{args.children}</Button>",...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,h,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ButtonType: "secondary",
    label: "Button"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testBtn = await canvas.getByText('Button');
    const testMediumSize = canvas.getByTestId('button-size-medium');
    await expect(testBtn).toBeInTheDocument();
    await expect(testMediumSize).toBeInTheDocument();
    await expect(testBtn).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,z,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ButtonType: "nolo",
    label: "Button"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testBtn = await canvas.getByText('Button');
    const testMediumSize = canvas.getByTestId('button-size-medium');
    await expect(testBtn).toBeInTheDocument();
    await expect(testMediumSize).toBeInTheDocument();
    await expect(testBtn).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  }
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var D,j,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testTextBtn = await canvas.getByText('Button');
    const testSmallSize = canvas.getByTestId('button-size-small');
    await expect(testTextBtn).toBeInTheDocument();
    await expect(testSmallSize).toBeInTheDocument();
  }
}`,...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var f,k,M;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const testTextBtn = await canvas.getByText('Button');
    const testLargeSize = canvas.getByTestId('button-size-large');
    await expect(testTextBtn).toBeInTheDocument();
    await expect(testLargeSize).toBeInTheDocument();
  }
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const tt=["Base","Primary","Secondary","Nolo","Small","Large"];export{r as Base,u as Large,l as Nolo,c as Primary,i as Secondary,m as Small,tt as __namedExportsOrder,Z as default};
//# sourceMappingURL=Button.stories-033a35bb.js.map
