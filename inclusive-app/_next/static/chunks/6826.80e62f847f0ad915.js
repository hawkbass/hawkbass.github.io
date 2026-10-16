"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6826],{41782:(e,t,r)=>{r.d(t,{m:()=>o});var a=r(7620);function o(e,t=[]){a.useEffect(()=>{let t=e.current;if(!t)return;let r=()=>{t.querySelectorAll(".sp-icon-standalone, .sp-button").forEach(e=>{if(e.getAttribute("aria-label"))return;let t=(e.textContent??"").trim(),r=e.getAttribute("title")?.trim();e.setAttribute("aria-label",t||r||"Refresh the preview")})};r();let a=new MutationObserver(r);return a.observe(t,{childList:!0,subtree:!0}),()=>a.disconnect()},[e,...t])}},60673:(e,t,r)=>{r.d(t,{n:()=>l,t:()=>i});var a=r(7620),o=r(54568);let s=a.createContext(null);function n(e){return"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e}function i({children:e,defaultTheme:t="dark",storageKey:r="inclusive-theme",enableSystem:l=!0}){let[d,c]=a.useState(!1),[m,u]=a.useState(t),[p,h]=a.useState("system"===t?"dark":t),f=a.useCallback(e=>{let t,r;h(n(e)),t=document.documentElement,r=n(e),t.classList.remove("light","dark"),t.classList.add(r),t.setAttribute("data-theme",`${r}`)},[]);a.useEffect(()=>{var e;c(!0);let a=("light"===(e=localStorage.getItem(r))||"dark"===e||"system"===e?e:null)??t;u(a),f(a)},[r,t,f]),a.useEffect(()=>{if(!l)return;let e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{"system"===m&&f("system")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[m,f,l]);let b=a.useCallback(e=>{u(e),localStorage.setItem(r,e),f(e)},[r,f]),x=a.useCallback(()=>{b("dark"===p?"light":"dark")},[p,b]),g=a.useCallback(()=>{b("system")},[b]),v=a.useMemo(()=>({theme:m,resolvedTheme:p,isDark:"dark"===p,isLight:"light"===p,setTheme:b,toggleTheme:x,setSystemTheme:g,mounted:d}),[m,p,b,x,g,d]);return(0,o.jsx)(s.Provider,{value:v,children:e})}function l(){let e=a.useContext(s);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}},85456:(e,t,r)=>{r.r(t),r.d(t,{CODESANDBOX_MONOREPO_URL:()=>x,SandpackPlayground:()=>k,default:()=>N});var a=r(54568),o=r(7620),s=r(81629),n=r(82600),i=r(35985),l=r(86328),d=r(38598),c=r(45159),m=r(18409),u=r(37473),p=r(37620),h=r(81621),f=r(65563),b=r(41782);let x="https://codesandbox.io/p/devbox/github/hawkbass/InclusiveDesignSystemV2/tree/overhaul/foundation/project",g={colors:{surface1:"#0d0d1a",surface2:"#12121f",surface3:"#1a1a2e",clickable:"#94a3b8",base:"#f8fafc",disabled:"#4b5563",hover:"#8b5cf6",accent:"#8b5cf6",error:"#ef4444",errorSurface:"#1f1f32"},syntax:{plain:"#f8fafc",comment:{color:"#94a3b8",fontStyle:"italic"},keyword:"#e9d5ff",tag:"#67e8f9",punctuation:"#cbd5e1",definition:"#ede9fe",property:"#7dd3fc",static:"#f9a8d4",string:"#bbf7d0"},font:{body:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace",size:"13px",lineHeight:"1.6"}},v={colors:{surface1:"#ffffff",surface2:"#f8fafc",surface3:"#f1f5f9",clickable:"#3f4a5a",base:"#1e293b",disabled:"#5b6675",hover:"#7c3aed",accent:"#7c3aed",error:"#dc2626",errorSurface:"#fef2f2"},syntax:{plain:"#1e293b",comment:{color:"#3f4a5a",fontStyle:"italic"},keyword:"#6d28d9",tag:"#0a4f5e",punctuation:"#475569",definition:"#691eea",property:"#035c8d",static:"#ac1654",string:"#036449"},font:{body:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace",size:"13px",lineHeight:"1.6"}},y={"/App.tsx":`import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Hello World
        </h1>
        <p className="text-foreground-subtle">
          Start building your component here!
        </p>
      </div>
    </div>
  );
}`,"/index.tsx":`import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,"/styles.css":`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`},C={default:y,button:{"/App.tsx":`import React from "react";

// Button Component Example
function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  disabled = false,
  loading = false,
  onClick 
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] focus:ring-[hsl(var(--primary))]",
    secondary: "bg-card hover:bg-background-tertiary text-foreground focus:ring-border",
    outline: "border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary-text))] hover:bg-[hsl(var(--primary)/0.1)] focus:ring-[hsl(var(--primary))]",
    ghost: "text-foreground-subtle hover:bg-background-tertiary focus:ring-border",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}\`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg className="animate-spin -ms-1 me-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}

export default function App() {
  const [loading, setLoading] = React.useState(false);
  
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--card))] p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-foreground">Button Component</h1>
        
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground-subtle">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground-subtle">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground-subtle">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button loading={loading} onClick={handleClick}>
              {loading ? "Loading..." : "Click to Load"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}`},card:{"/App.tsx":`import React from "react";

function Card({ 
  children, 
  variant = "default",
  className = "" 
}: {
  children: React.ReactNode;
  variant?: "default" | "glass" | "bordered";
  className?: string;
}) {
  const variants = {
    default: "bg-card shadow-xl",
    glass: "bg-background-tertiary backdrop-blur-xl border border-border",
    bordered: "bg-transparent border-2 border-border",
  };
  
  return (
    <div className={\`rounded-2xl p-6 \${variants[variant]} \${className}\`}>
      {children}
    </div>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold text-foreground">{children}</h3>;
}

function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-foreground-subtle text-sm mt-1">{children}</p>;
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="text-foreground-subtle">{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 flex items-center gap-3">{children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--card))] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-8">Card Component</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>A solid background card</CardDescription>
            </CardHeader>
            <CardContent>
              Perfect for content sections that need prominence.
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-lg text-sm font-medium">
                Action
              </button>
            </CardFooter>
          </Card>
          
          <Card variant="glass">
            <CardHeader>
              <CardTitle>Glass Card</CardTitle>
              <CardDescription>Glassmorphism style</CardDescription>
            </CardHeader>
            <CardContent>
              Beautiful frosted glass effect with backdrop blur.
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 bg-background-tertiary text-foreground rounded-lg text-sm font-medium">
                Action
              </button>
            </CardFooter>
          </Card>
          
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
              <CardDescription>Subtle border style</CardDescription>
            </CardHeader>
            <CardContent>
              Minimal design with just a border for definition.
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 border border-[hsl(var(--primary))] text-[hsl(var(--primary-text))] rounded-lg text-sm font-medium">
                Action
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}`},input:{"/App.tsx":`import React from "react";

function Input({
  label,
  placeholder,
  type = "text",
  error,
  helperText,
  startIcon,
  disabled = false,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: boolean;
  helperText?: string;
  startIcon?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-foreground-subtle">
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute start-3 top-1/2 -translate-y-1/2 text-foreground-subtle">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={\`
            w-full px-4 py-2.5 rounded-xl bg-background-secondary border text-white
            placeholder:text-foreground-subtle transition-all
            focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.5)]
            \${startIcon ? "ps-10" : ""}
            \${error 
              ? "border-[hsl(var(--error))] focus:border-[hsl(var(--error))]" 
              : "border-border focus:border-[hsl(var(--primary))]"
            }
            \${disabled ? "opacity-50 cursor-not-allowed" : ""}
          \`}
        />
      </div>
      {helperText && (
        <p className={\`text-xs \${error ? "text-[hsl(var(--error-text))]" : "text-foreground-subtle"}\`}>
          {helperText}
        </p>
      )}
    </div>
  );
}

// Icons
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--card))] p-8">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-foreground">Input Component</h1>
        
        <div className="space-y-6">
          <Input 
            label="Default Input"
            placeholder="Enter text..."
          />
          
          <Input 
            label="With Icon"
            placeholder="Search..."
            startIcon={<SearchIcon />}
          />
          
          <Input 
            label="Email"
            type="email"
            placeholder="you@example.com"
            startIcon={<MailIcon />}
            helperText="We'll never share your email."
          />
          
          <Input 
            label="With Error"
            placeholder="Enter value"
            error
            helperText="This field is required."
          />
          
          <Input 
            label="Disabled"
            placeholder="Cannot edit"
            disabled
          />
        </div>
      </div>
    </div>
  );
}`}};function w({onReset:e,onCopy:t,showConsole:r,onToggleConsole:s,mobileView:h,onMobileViewChange:f}){let[b,g]=o.useState(!1),v=(e=!1)=>`flex items-center justify-center gap-1.5 px-3 rounded-lg text-xs font-medium transition-colors min-h-[44px] min-w-[44px] ${e?"bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary-text))]":"text-foreground-muted hover:text-foreground hover:bg-background-secondary"}`;return(0,a.jsxs)("div",{className:"bg-background border-border flex flex-wrap items-center gap-1 border-b px-2 py-1 sm:px-4",children:[(0,a.jsxs)("button",{onClick:e,className:v(),title:"Reset code",children:[(0,a.jsx)(n.o,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"hidden sm:inline",children:"Reset"})]}),(0,a.jsx)("button",{onClick:()=>{t(),g(!0),setTimeout(()=>g(!1),2e3)},className:v(),title:"Copy code",children:b?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.J,{className:"h-4 w-4 text-[hsl(var(--success-text))]"}),(0,a.jsx)("span",{className:"hidden sm:inline",children:"Copied!"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Q,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"hidden sm:inline",children:"Copy"})]})}),(0,a.jsxs)("div",{className:"ms-auto flex items-center gap-1 sm:hidden",children:[(0,a.jsx)("button",{onClick:()=>f("code"),className:v("code"===h),title:"Show code only","aria-label":"Show code only",children:(0,a.jsx)(d.C,{className:"h-4 w-4"})}),(0,a.jsx)("button",{onClick:()=>f("split"),className:v("split"===h),title:"Show split view","aria-label":"Show split view",children:(0,a.jsx)(c.j,{className:"h-4 w-4"})}),(0,a.jsx)("button",{onClick:()=>f("preview"),className:v("preview"===h),title:"Show preview only","aria-label":"Show preview only",children:(0,a.jsx)(m.k,{className:"h-4 w-4"})})]}),(0,a.jsx)("div",{className:"hidden flex-1 sm:block"}),(0,a.jsxs)("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:v(),title:"Open full monorepo in CodeSandbox",children:[(0,a.jsx)(u.B,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"hidden sm:inline",children:"Open in CodeSandbox"})]}),(0,a.jsxs)("button",{onClick:s,className:v(r),title:"Toggle console",children:[(0,a.jsx)(p.b,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"hidden sm:inline",children:"Console"})]})]})}function k({template:e="default",files:t,height:r="500px",showLineNumbers:n=!0}){let{theme:i}=(0,f.D)(),[l,d]=o.useState(!1),[c,m]=o.useState("split"),[u,p]=o.useState(0),[x,N]=o.useState("dark"),S=o.useId();o.useEffect(()=>{let e=document.documentElement.getAttribute("data-theme")??"";N(document.documentElement.classList.contains("dark")||e.includes("dark")||"dark"===i?"dark":"light")},[i]),o.useEffect(()=>{let e=setTimeout(()=>{document.querySelectorAll(".cm-scroller[tabindex='-1']").forEach(e=>{e.tabIndex=0,e.setAttribute("role","region"),e.setAttribute("aria-label","Code editor content")})},500);return()=>clearTimeout(e)},[]);let[j,R]=o.useState(!0);o.useEffect(()=>{let e=()=>R(navigator.onLine);return e(),window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}},[]);let I=o.useRef(null);(0,b.m)(I,[u,x,j]);let B=t||C[e]||C.default,E=`min(${r}, 70dvh)`,A=`calc(${E} - 46px${l?" - 150px":""})`;return(0,a.jsxs)("div",{ref:I,className:"sandpack-responsive border-border overflow-hidden rounded-2xl border",style:{height:E},"data-mobile-view":c,"data-playground-id":S,children:[(0,a.jsx)("style",{children:`
        .sandpack-responsive .sp-layout {
          flex-direction: row !important;
        }
        @media (max-width: 639px) {
          .sandpack-responsive .sp-layout {
            flex-direction: column !important;
          }
          .sandpack-responsive .sp-layout > * {
            flex: 1 1 0% !important;
            width: 100% !important;
          }
          .sandpack-responsive[data-mobile-view="code"] .sp-preview-container,
          .sandpack-responsive[data-mobile-view="code"] .sp-stack:last-child {
            display: none !important;
          }
          .sandpack-responsive[data-mobile-view="code"] .sp-stack:first-child {
            flex: 1 1 100% !important;
            height: 100% !important;
          }
          .sandpack-responsive[data-mobile-view="preview"] .sp-code-editor,
          .sandpack-responsive[data-mobile-view="preview"] .sp-stack:first-child {
            display: none !important;
          }
          .sandpack-responsive[data-mobile-view="preview"] .sp-stack:last-child {
            flex: 1 1 100% !important;
            height: 100% !important;
          }
          .sandpack-responsive .sp-tabs {
            min-height: 44px !important;
          }
          .sandpack-responsive .sp-tab-button {
            min-height: 44px !important;
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
      `}),j?(0,a.jsxs)(s.l5,{template:"react-ts",theme:"dark"===x?g:v,files:{...B,"/index.tsx":B["/index.tsx"]||y["/index.tsx"],"/styles.css":B["/styles.css"]||y["/styles.css"]},customSetup:{dependencies:{react:"^18.0.0","react-dom":"^18.0.0"}},options:{visibleFiles:["/App.tsx"],activeFile:"/App.tsx",recompileMode:"delayed",recompileDelay:500,externalResources:["https://cdn.tailwindcss.com"]},children:[(0,a.jsx)(w,{onReset:()=>{p(e=>e+1)},onCopy:()=>{navigator.clipboard.writeText(B["/App.tsx"])},showConsole:l,onToggleConsole:()=>d(!l),mobileView:c,onMobileViewChange:m}),(0,a.jsxs)(s.am,{style:{height:A,borderRadius:0,display:"flex"},children:[(0,a.jsx)(s.cW,{showLineNumbers:n,showInlineErrors:!0,wrapContent:!0,style:{flex:1,height:"100%",minHeight:0}}),(0,a.jsx)(s.G5,{showRefreshButton:!0,showOpenInCodeSandbox:!1,style:{flex:1,height:"100%",minHeight:0}})]}),l&&(0,a.jsx)(s.X2,{style:{height:"150px"},standalone:!0,resetOnPreviewRestart:!0})]},`${u}-${x}`):(0,a.jsxs)("div",{className:"flex h-full flex-col items-center justify-center gap-3 p-8 text-center",role:"status",children:[(0,a.jsx)(h.l,{className:"text-foreground-subtle h-8 w-8","aria-hidden":"true"}),(0,a.jsx)("p",{className:"text-foreground font-medium",children:"You're offline"}),(0,a.jsx)("p",{className:"text-foreground-muted max-w-sm text-sm",children:"The live playground loads the CodeSandbox bundler from the network. Reconnect and reload to run components here."})]})]})}let N=k}}]);