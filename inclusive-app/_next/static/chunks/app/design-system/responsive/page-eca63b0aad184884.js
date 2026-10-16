(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4292],{45794:(e,s,t)=>{"use strict";t.d(s,{default:()=>w});var r=t(54568),i=t(7620),a=t(65587),l=t.n(a),n=t(69041),o=t(35985),d=t(86328),c=t(35164),m=t(3943),x=t(24248),p=t(71887),h=t(52639),g=t(65085),u=t(21723),v=t(93969);function b({code:e,language:s="css"}){let[t,a]=i.useState(!1),l=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),2e3)};return(0,r.jsxs)("div",{className:"bg-background-tertiary relative overflow-hidden rounded-xl",children:[(0,r.jsxs)("div",{className:"border-border flex items-center justify-between border-b px-4 py-2",children:[(0,r.jsx)("span",{className:"text-foreground-muted font-mono text-xs tracking-wide uppercase",children:s}),(0,r.jsxs)("button",{onClick:l,className:"text-foreground-muted hover:text-foreground hover:bg-background-tertiary flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors",children:[t?(0,r.jsx)(o.J,{className:"h-3.5 w-3.5 text-[hsl(var(--success-text))]"}):(0,r.jsx)(d.Q,{className:"h-3.5 w-3.5"}),(0,r.jsx)("span",{children:t?"Copied!":"Copy"})]})]}),(0,r.jsx)("pre",{className:"overflow-x-auto p-4",children:(0,r.jsx)("code",{className:"text-foreground-secondary font-mono text-sm",children:e})})]})}let f=[{name:"fold",width:"280px",device:"Galaxy Fold (closed)",icon:c.R,color:"rose"},{name:"2xs",width:"320px",device:"iPhone SE",icon:c.R,color:"orange"},{name:"xs",width:"375px",device:"iPhone 13 mini",icon:c.R,color:"amber"},{name:"sm",width:"640px",device:"Large phones / Small tablets",icon:c.R,color:"yellow"},{name:"md",width:"768px",device:"iPad Mini / Tablet portrait",icon:m.f,color:"lime"},{name:"lg",width:"1024px",device:"iPad Pro / Tablet landscape",icon:m.f,color:"emerald"},{name:"xl",width:"1280px",device:"Laptops / Small desktop",icon:x.r,color:"teal"},{name:"2xl",width:"1536px",device:"Desktop monitors",icon:p.V,color:"cyan"},{name:"3xl",width:"1920px",device:"Full HD monitors",icon:p.V,color:"sky"},{name:"4xl",width:"2560px",device:"QHD / Ultrawide",icon:p.V,color:"blue"},{name:"5xl",width:"3840px",device:"4K displays",icon:h.T,color:"indigo"},{name:"6xl",width:"5120px",device:"5K / Studio Display",icon:h.T,color:"violet"}],j=[{name:"Galaxy Fold",closedWidth:"280px",openWidth:"717px",segments:1},{name:"Galaxy Z Flip",closedWidth:"260px",openWidth:"412px",segments:1},{name:"Surface Duo",closedWidth:"540px",openWidth:"1114px",segments:2},{name:"Huawei Mate XT",closedWidth:"232px",openWidth:"770px",segments:3}];function w(){return(0,r.jsxs)("div",{className:"@container space-y-20 px-4 sm:px-6",children:[(0,r.jsxs)(n.P.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,r.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,r.jsx)(p.V,{className:"h-5 w-5 text-[hsl(var(--primary-text))]"}),(0,r.jsx)("span",{className:"text-sm font-medium text-[hsl(var(--primary-text))]",children:"Foundation"})]}),(0,r.jsx)("h1",{className:"text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl",children:"Responsive Design"}),(0,r.jsx)("p",{className:"text-foreground-muted max-w-prose text-lg leading-relaxed sm:text-xl",children:"Inclusive supports an unprecedented range of devices from 280px (Galaxy Fold closed) to 5120px (5K ultrawide). Our 12-point breakpoint system ensures perfect layouts across every screen size."})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Mobile-First Methodology"}),(0,r.jsx)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--primary)/0.08)] p-6",children:(0,r.jsxs)("div",{className:"flex items-start gap-4",children:[(0,r.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary)/0.15)]",children:(0,r.jsx)(c.R,{className:"h-6 w-6 text-[hsl(var(--primary-text))]"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-2 font-semibold",children:"Start Small, Scale Up"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-4",children:"Mobile-first design means writing styles for the smallest viewport first, then progressively enhancing for larger screens. This approach:"}),(0,r.jsxs)("ul",{className:"text-foreground-muted space-y-2",children:[(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)("span",{className:"mt-1.5 text-[hsl(var(--primary-text))]",children:"-"}),(0,r.jsx)("span",{children:"Prioritizes core content and functionality"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)("span",{className:"mt-1.5 text-[hsl(var(--primary-text))]",children:"-"}),(0,r.jsx)("span",{children:"Reduces CSS bundle size (base styles are smaller)"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)("span",{className:"mt-1.5 text-[hsl(var(--primary-text))]",children:"-"}),(0,r.jsx)("span",{children:"Ensures touch-friendly interfaces by default"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)("span",{className:"mt-1.5 text-[hsl(var(--primary-text))]",children:"-"}),(0,r.jsx)("span",{children:"Forces focus on essential features first"})]})]})]})]})}),(0,r.jsx)(b,{code:`{/* Mobile-first approach in Tailwind */}

{/* Base (mobile) styles - no prefix needed */}
<div className="flex flex-col gap-4">

{/* sm: 640px+ - stack to row */}
<div className="flex flex-col sm:flex-row gap-4">

{/* md: 768px+ - add more columns */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

{/* lg: 1024px+ - three columns */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

{/* xl: 1280px+ - maximum content width */}
<div className="max-w-full xl:max-w-6xl mx-auto">

{/* Full responsive example */}
<div className="
  p-4 sm:p-6 md:p-8 lg:p-12
  text-sm sm:text-base md:text-lg
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  gap-4 sm:gap-6 lg:gap-8
">
  {/* Content */}
</div>`,language:"tsx"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"12-Point Breakpoint System"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-6",children:"Unlike typical 5-6 breakpoint systems, Inclusive provides 12 breakpoints covering every device category from ultra-compact foldables to 5K studio displays:"}),(0,r.jsx)("div",{className:"border-border overflow-hidden rounded-2xl border",children:(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full min-w-[700px]",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-border border-b bg-[hsl(var(--card))]",children:[(0,r.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Prefix"}),(0,r.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Min Width"}),(0,r.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Target Devices"}),(0,r.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"CSS"})]})}),(0,r.jsx)("tbody",{children:f.map(e=>(0,r.jsxs)("tr",{className:"border-border border-b last:border-0",children:[(0,r.jsxs)("td",{className:"px-4 py-3 font-mono text-sm text-[hsl(var(--primary-text))]",children:[e.name,":"]}),(0,r.jsx)("td",{className:"text-foreground-muted px-4 py-3 font-mono text-sm",children:e.width}),(0,r.jsx)("td",{className:"text-foreground-muted px-4 py-3 text-sm",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(e.icon,{className:"h-4 w-4"}),e.device]})}),(0,r.jsxs)("td",{className:"text-foreground-subtle px-4 py-3 font-mono text-xs",children:["@media (min-width: ",e.width,")"]})]},e.name))})]})})}),(0,r.jsxs)("div",{className:"border-border mt-8 rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Visual Breakpoint Range"}),(0,r.jsx)("div",{className:"relative h-12 overflow-hidden rounded-lg bg-gradient-to-r from-[hsl(var(--destructive))] via-[hsl(var(--success))] to-[hsl(var(--primary))]",children:(0,r.jsx)("div",{className:"absolute inset-0 flex",children:f.map(e=>(0,r.jsx)("div",{className:"border-border/40 flex h-full flex-1 items-center justify-center border-e last:border-0",children:(0,r.jsx)("span",{className:"text-primary-foreground/80 rotate-45 font-mono text-xs sm:rotate-0",children:e.name})},e.name))})}),(0,r.jsxs)("div",{className:"mt-2 flex justify-between",children:[(0,r.jsx)("span",{className:"text-foreground-subtle font-mono text-xs",children:"280px"}),(0,r.jsx)("span",{className:"text-foreground-subtle font-mono text-xs",children:"5120px"})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Foldable Device Support"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-6",children:"Inclusive is built for the foldable future. We support CSS Foldable APIs including viewport segments and environment variables:"}),(0,r.jsx)("div",{className:"mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2",children:j.map(e=>(0,r.jsxs)("div",{className:"border-border rounded-xl border bg-[hsl(var(--card))] p-5",children:[(0,r.jsx)("h3",{className:"text-foreground mb-3 font-semibold",children:e.name}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-foreground-subtle",children:"Closed:"}),(0,r.jsx)("span",{className:"text-foreground-muted ms-2 font-mono",children:e.closedWidth})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-foreground-subtle",children:"Open:"}),(0,r.jsx)("span",{className:"text-foreground-muted ms-2 font-mono",children:e.openWidth})]})]}),(0,r.jsxs)("div",{className:"mt-3 flex items-center gap-2",children:[(0,r.jsx)("span",{className:"text-foreground-subtle text-xs",children:"Segments:"}),(0,r.jsx)("div",{className:"flex gap-1",children:Array.from({length:e.segments}).map((e,s)=>(0,r.jsx)("div",{className:"h-4 w-6 rounded bg-[hsl(var(--primary)/0.25)]"},s))})]})]},e.name))}),(0,r.jsx)(b,{code:`/* CSS Viewport Segments API for dual-screen devices */

/* Detect horizontal fold (phone opened landscape) */
@media (horizontal-viewport-segments: 2) {
  .sidebar {
    width: env(viewport-segment-width 0 0);
    border-right: env(viewport-segment-hinge-width 0 0);
  }
  .main-content {
    margin-left: calc(
      env(viewport-segment-width 0 0) + 
      env(viewport-segment-hinge-width 0 0)
    );
  }
}

/* Detect vertical fold (phone opened portrait) */
@media (vertical-viewport-segments: 2) {
  .top-content {
    height: env(viewport-segment-height 0 0);
    padding-bottom: env(viewport-segment-hinge-height 0 0);
  }
}

/* Surface Duo / triple fold support */
@media (horizontal-viewport-segments: 3) {
  .triple-layout {
    display: grid;
    grid-template-columns: 
      env(viewport-segment-width 0 0)
      env(viewport-segment-width 1 0)
      env(viewport-segment-width 2 0);
  }
}`,language:"css"}),(0,r.jsx)("div",{className:"mt-6 rounded-2xl border border-[hsl(var(--warning)/0.3)] bg-[hsl(var(--warning)/0.1)] p-6",children:(0,r.jsxs)("div",{className:"flex items-start gap-3",children:[(0,r.jsx)(g.N,{className:"mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--warning-text))]"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"mb-1 font-semibold text-[hsl(var(--warning-text))]",children:"Browser Support"}),(0,r.jsx)("p",{className:"text-sm text-[hsl(var(--warning-text))]",children:"Viewport Segments API is currently experimental. Inclusive uses progressive enhancement - layouts work without these features and enhance when available."})]})]})})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Container Queries"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-6",children:"Container queries allow components to adapt based on their container size, not just the viewport. This enables truly responsive components that work in any context:"}),(0,r.jsx)(b,{code:`{/* Define a container */}
<div className="@container">
  {/* Child responds to container width, not viewport */}
  <div className="flex flex-col @md:flex-row @lg:grid @lg:grid-cols-3">
    {/* Layout changes at container breakpoints */}
  </div>
</div>

{/* Named containers for complex layouts */}
<div className="@container/sidebar">
  <nav className="@lg/sidebar:w-64 @md/sidebar:w-48 w-16">
    {/* Sidebar width based on its container */}
  </nav>
</div>

{/* CSS equivalent */}
/*
.container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
*/`,language:"tsx"}),(0,r.jsx)("div",{className:"mt-6 rounded-2xl border border-[hsl(var(--success)/0.3)] bg-[hsl(var(--success)/0.1)] p-6",children:(0,r.jsxs)("div",{className:"flex items-start gap-3",children:[(0,r.jsx)(u.g,{className:"mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"mb-1 font-semibold text-[hsl(var(--success-text))]",children:"When to Use Container Queries"}),(0,r.jsx)("p",{className:"text-sm text-[hsl(var(--success-text))]",children:"Use container queries for reusable components like cards, widgets, and modules that may appear in different contexts (sidebar, main content, modals). Use viewport breakpoints for page-level layout decisions."})]})]})})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Fluid Design Patterns"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-6",children:"Rather than jumping between fixed sizes at breakpoints, fluid design smoothly scales values across the viewport range:"}),(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Fluid Typography"}),(0,r.jsx)(b,{code:`/* Font size scales from 1rem to 3rem between 320px and 1920px */
.heading {
  font-size: clamp(1rem, 0.5rem + 2.5vw, 3rem);
}

/* Formula: clamp(MIN, PREFERRED, MAX) */
/* MIN: Never smaller than 1rem (16px) */
/* PREFERRED: 0.5rem + 2.5vw (scales with viewport) */
/* MAX: Never larger than 3rem (48px) */`,language:"css"})]}),(0,r.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Fluid Spacing"}),(0,r.jsx)(b,{code:`/* Padding scales from 16px to 64px */
.section {
  padding: clamp(1rem, 5vw, 4rem);
}

/* Gap scales proportionally */
.grid {
  gap: clamp(1rem, 2vw + 0.5rem, 3rem);
}

/* Margin for page sections */
.page-section {
  margin-block: clamp(3rem, 8vw, 8rem);
}`,language:"css"})]}),(0,r.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Fluid Grid"}),(0,r.jsx)(b,{code:`/* Auto-fit grid that adapts to available space */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
}

/* Cards always fit, minimum 300px, stretch to fill */
/* No media queries needed! */`,language:"css"})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Responsive Component Strategies"}),(0,r.jsx)("div",{className:"grid gap-6 lg:grid-cols-2",children:[{title:"Stack to Row",description:"Content stacks vertically on mobile, becomes horizontal on larger screens.",code:"flex flex-col sm:flex-row gap-4"},{title:"Hide/Show",description:"Show different content based on screen size.",code:"hidden lg:block // lg:hidden"},{title:"Adaptive Grid",description:"Grid columns increase with screen width.",code:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"},{title:"Responsive Text",description:"Text size adapts to viewport.",code:"text-sm sm:text-base lg:text-lg"},{title:"Collapsible Nav",description:"Navigation collapses to hamburger on mobile.",code:"lg:flex hidden // lg:hidden flex"},{title:"Fluid Width",description:"Container width adapts with max constraint.",code:"w-full max-w-none lg:max-w-4xl mx-auto"}].map(e=>(0,r.jsxs)("div",{className:"border-border rounded-xl border bg-[hsl(var(--card))] p-5",children:[(0,r.jsx)("h3",{className:"text-foreground mb-2 font-semibold",children:e.title}),(0,r.jsx)("p",{className:"text-foreground-muted mb-3 text-sm",children:e.description}),(0,r.jsx)("code",{className:"bg-background-secondary block rounded p-2 font-mono text-xs text-[hsl(var(--primary-text))]",children:e.code})]},e.title))})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Testing Responsive Layouts"}),(0,r.jsx)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:(0,r.jsx)("div",{className:"space-y-4",children:[{device:"Galaxy Fold (closed)",width:"280px",priority:"Critical"},{device:"iPhone SE",width:"320px",priority:"High"},{device:"iPhone 13",width:"390px",priority:"High"},{device:"iPad Mini",width:"768px",priority:"High"},{device:'iPad Pro 11"',width:"1024px",priority:"Medium"},{device:"Laptop (1366px)",width:"1366px",priority:"Medium"},{device:"Desktop (1920px)",width:"1920px",priority:"High"},{device:"Ultrawide (2560px)",width:"2560px",priority:"Low"},{device:"4K (3840px)",width:"3840px",priority:"Low"}].map(e=>(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("div",{className:`h-2 w-2 rounded-full ${"Critical"===e.priority?"bg-[hsl(var(--destructive))]":"High"===e.priority?"bg-[hsl(var(--warning))]":"Medium"===e.priority?"bg-[hsl(var(--success))]":"bg-foreground-subtle"}`}),(0,r.jsx)("span",{className:"text-foreground",children:e.device})]}),(0,r.jsx)("span",{className:"text-foreground-subtle font-mono text-sm",children:e.width})]},e.device))})})]}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-[hsl(var(--accent)/0.1)] p-8",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-xl font-bold",children:"Continue Exploring"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-6",children:"Responsive design works with our spacing and typography systems. Learn more about related foundations:"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,r.jsxs)(l(),{href:"/design-system/spacing",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary)/0.12)] px-5 py-2.5 font-medium text-[hsl(var(--primary-text))] transition-colors hover:bg-[hsl(var(--primary)/0.2)]",children:["Spacing System",(0,r.jsx)(v.Q,{className:"h-4 w-4"})]}),(0,r.jsxs)(l(),{href:"/design-system/accessibility",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary)/0.12)] px-5 py-2.5 font-medium text-[hsl(var(--primary-text))] transition-colors hover:bg-[hsl(var(--primary)/0.2)]",children:["Accessibility",(0,r.jsx)(v.Q,{className:"h-4 w-4"})]})]})]})})]})}},79908:(e,s,t)=>{Promise.resolve().then(t.bind(t,45794))}},e=>{e.O(0,[9041,5587,1450,587,1968,7358],()=>e(e.s=79908)),_N_E=e.O()}]);