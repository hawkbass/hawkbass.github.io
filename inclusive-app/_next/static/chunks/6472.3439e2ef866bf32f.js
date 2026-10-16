"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6472],{41782:(e,t,o)=>{o.d(t,{m:()=>s});var r=o(7620);function s(e,t=[]){r.useEffect(()=>{let t=e.current;if(!t)return;let o=()=>{t.querySelectorAll(".sp-icon-standalone, .sp-button").forEach(e=>{if(e.getAttribute("aria-label"))return;let t=(e.textContent??"").trim(),o=e.getAttribute("title")?.trim();e.setAttribute("aria-label",t||o||"Refresh the preview")})};o();let r=new MutationObserver(o);return r.observe(t,{childList:!0,subtree:!0}),()=>r.disconnect()},[e,...t])}},60673:(e,t,o)=>{o.d(t,{n:()=>l,t:()=>i});var r=o(7620),s=o(54568);let a=r.createContext(null);function n(e){return"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e}function i({children:e,defaultTheme:t="dark",storageKey:o="inclusive-theme",enableSystem:l=!0}){let[c,d]=r.useState(!1),[m,f]=r.useState(t),[u,p]=r.useState("system"===t?"dark":t),h=r.useCallback(e=>{let t,o;p(n(e)),t=document.documentElement,o=n(e),t.classList.remove("light","dark"),t.classList.add(o),t.setAttribute("data-theme",`${o}`)},[]);r.useEffect(()=>{var e;d(!0);let r=("light"===(e=localStorage.getItem(o))||"dark"===e||"system"===e?e:null)??t;f(r),h(r)},[o,t,h]),r.useEffect(()=>{if(!l)return;let e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{"system"===m&&h("system")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[m,h,l]);let b=r.useCallback(e=>{f(e),localStorage.setItem(o,e),h(e)},[o,h]),x=r.useCallback(()=>{b("dark"===u?"light":"dark")},[u,b]),g=r.useCallback(()=>{b("system")},[b]),y=r.useMemo(()=>({theme:m,resolvedTheme:u,isDark:"dark"===u,isLight:"light"===u,setTheme:b,toggleTheme:x,setSystemTheme:g,mounted:c}),[m,u,b,x,g,c]);return(0,s.jsx)(a.Provider,{value:y,children:e})}function l(){let e=r.useContext(a);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}},86418:(e,t,o)=>{o.r(t),o.d(t,{ComponentPlayground:()=>p,default:()=>h});var r=o(54568),s=o(7620),a=o(81629),n=o(82600),i=o(35985),l=o(86328),c=o(65563),d=o(41782);let m={colors:{surface1:"#0d0d1a",surface2:"#12121f",surface3:"#1a1a2e",clickable:"#94a3b8",base:"#f8fafc",disabled:"#4b5563",hover:"#8b5cf6",accent:"#8b5cf6",error:"#ef4444",errorSurface:"#1f1f32"},syntax:{plain:"#f8fafc",comment:{color:"#94a3b8",fontStyle:"italic"},keyword:"#e9d5ff",tag:"#67e8f9",punctuation:"#cbd5e1",definition:"#ede9fe",property:"#7dd3fc",static:"#f9a8d4",string:"#bbf7d0"},font:{body:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace",size:"13px",lineHeight:"1.6"}},f={colors:{surface1:"#ffffff",surface2:"#f8fafc",surface3:"#f1f5f9",clickable:"#64748b",base:"#1e293b",disabled:"#94a3b8",hover:"#7c3aed",accent:"#7c3aed",error:"#dc2626",errorSurface:"#fef2f2"},syntax:{plain:"#1e293b",comment:{color:"#3f4a5a",fontStyle:"italic"},keyword:"#5b21b6",tag:"#0a4f5e",punctuation:"#475569",definition:"#5b21b6",property:"#035c8d",static:"#ac1654",string:"#036449"},font:{body:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace",size:"13px",lineHeight:"1.6"}},u={"/index.tsx":`import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles.css";



const root = createRoot(document.getElementById("root")!);

root.render(

  <StrictMode>

    <App />

  </StrictMode>

);`,"/styles.css":`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');



* { box-sizing: border-box; margin: 0; padding: 0; }

body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }`};function p({code:e,dependencies:t={},height:o="420px"}){let{theme:h}=(0,c.D)(),[b,x]=s.useState(0),[g,y]=s.useState(!1),[k,v]=s.useState("dark");s.useEffect(()=>{let e=document.documentElement.getAttribute("data-theme")??"";v(document.documentElement.classList.contains("dark")||e.includes("dark")||"dark"===h?"dark":"light")},[h]);let w=s.useRef(null);(0,d.m)(w,[b,k]);let S="flex items-center gap-1.5 px-3 rounded-lg text-xs font-medium transition-colors min-h-[44px] min-w-[44px] text-foreground-muted hover:text-foreground hover:bg-background-secondary";return(0,r.jsxs)("div",{ref:w,className:"component-playground border-border overflow-hidden rounded-2xl border",children:[(0,r.jsx)("style",{children:`

        .component-playground .sp-layout {

          flex-direction: row !important;

        }

        @media (max-width: 639px) {

          .component-playground .sp-layout {

            flex-direction: column !important;

          }

          .component-playground .sp-layout > * {

            flex: 1 1 0% !important;

            width: 100% !important;

          }

        }

      `}),(0,r.jsxs)("div",{className:"bg-background border-border flex items-center gap-1 border-b px-4 py-1",children:[(0,r.jsxs)("button",{onClick:()=>x(e=>e+1),className:S,title:"Reset code",children:[(0,r.jsx)(n.o,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:"Reset"})]}),(0,r.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(e),y(!0),setTimeout(()=>y(!1),2e3)},className:S,title:"Copy code",children:g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.J,{className:"h-4 w-4 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:"Copied!"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Q,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"hidden sm:inline",children:"Copy"})]})})]}),(0,r.jsx)(a.l5,{template:"react-ts",theme:"dark"===k?m:f,files:{"/App.tsx":e,...u},customSetup:{dependencies:{react:"^18.0.0","react-dom":"^18.0.0",...t}},options:{visibleFiles:["/App.tsx"],activeFile:"/App.tsx",recompileMode:"delayed",recompileDelay:500,externalResources:["https://cdn.tailwindcss.com"]},children:(0,r.jsxs)(a.am,{style:{height:o,borderRadius:0,display:"flex"},children:[(0,r.jsx)("div",{role:"region","aria-label":"Interactive code editor",style:{flex:1,height:"100%",minHeight:0,overflow:"hidden"},children:(0,r.jsx)(a.cW,{showLineNumbers:!0,showInlineErrors:!0,wrapContent:!0,style:{height:"100%"}})}),(0,r.jsx)("div",{role:"region","aria-live":"polite","aria-label":"Live component preview",style:{flex:1,height:"100%",minHeight:0},children:(0,r.jsx)(a.G5,{showRefreshButton:!0,showOpenInCodeSandbox:!1,style:{height:"100%"}})})]})},`${b}-${k}`)]})}let h=p}}]);