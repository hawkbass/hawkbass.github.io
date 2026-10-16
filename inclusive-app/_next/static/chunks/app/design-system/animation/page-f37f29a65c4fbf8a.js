(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6916],{48460:(e,s,t)=>{"use strict";t.d(s,{default:()=>N});var n=t(54568),r=t(7620),a=t(65587),i=t.n(a),o=t(69041),d=t(35985),l=t(86328),c=t(82600),m=t(31784),x=t(64009),u=t(81289),h=t(65085),p=t(93969);function g({code:e,language:s="tsx"}){let[t,a]=r.useState(!1),i=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),2e3)};return(0,n.jsxs)("div",{className:"bg-background-tertiary relative overflow-hidden rounded-xl",children:[(0,n.jsxs)("div",{className:"border-border flex items-center justify-between border-b px-4 py-2",children:[(0,n.jsx)("span",{className:"text-foreground-muted font-mono text-xs tracking-wide uppercase",children:s}),(0,n.jsxs)("button",{onClick:i,className:"text-foreground-muted hover:text-foreground hover:bg-background-tertiary flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors",children:[t?(0,n.jsx)(d.J,{className:"h-3.5 w-3.5 text-[hsl(var(--success-text))]"}):(0,n.jsx)(l.Q,{className:"h-3.5 w-3.5"}),(0,n.jsx)("span",{children:t?"Copied!":"Copy"})]})]}),(0,n.jsx)("pre",{className:"overflow-x-auto p-4",children:(0,n.jsx)("code",{className:"text-foreground-secondary font-mono text-sm",children:e})})]})}function f(){let[e,s]=r.useState(0);return(0,n.jsxs)("div",{className:"border-border rounded-xl border bg-[hsl(var(--card))] p-6",children:[(0,n.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,n.jsx)("span",{className:"text-foreground font-medium",children:"Spring Animation"}),(0,n.jsx)("button",{onClick:()=>s(e=>e+1),"aria-label":"Replay animation",className:"hover:bg-background-tertiary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 transition-colors",children:(0,n.jsx)(c.o,{className:"text-foreground-muted h-4 w-4"})})]}),(0,n.jsx)("div",{className:"flex h-20 items-center overflow-hidden",children:(0,n.jsx)(o.P.div,{initial:{x:0,scale:.5},animate:{x:"min(200px, calc(100% - 3rem))",scale:1},transition:{type:"spring",stiffness:200,damping:20},className:"h-12 w-12 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]"},e)}),(0,n.jsx)("code",{className:"text-foreground-subtle font-mono text-xs",children:"spring: stiffness=200, damping=20"})]})}function b(){let[e,s]=r.useState(0);return(0,n.jsxs)("div",{className:"border-border rounded-xl border bg-[hsl(var(--card))] p-6",children:[(0,n.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,n.jsx)("span",{className:"text-foreground font-medium",children:"Easing Comparison"}),(0,n.jsx)("button",{onClick:()=>s(e=>e+1),"aria-label":"Replay animation",className:"hover:bg-background-tertiary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 transition-colors",children:(0,n.jsx)(m.j,{className:"text-foreground-muted h-4 w-4"})})]}),(0,n.jsx)("div",{className:"space-y-4",children:[{name:"ease-out",value:[0,0,.2,1]},{name:"ease-in-out",value:[.4,0,.2,1]},{name:"ease-in",value:[.4,0,1,1]}].map(s=>(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)("span",{className:"text-foreground-subtle w-20 font-mono text-xs",children:s.name}),(0,n.jsx)("div",{className:"relative h-8 flex-1",children:(0,n.jsx)(o.P.div,{initial:{x:0},animate:{x:"calc(100% - 2rem)"},transition:{duration:.8,ease:s.value},className:"h-8 w-8 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]"},`${s.name}-${e}`)})]},s.name))})]})}function v(){let[e,s]=r.useState(0),t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return(0,n.jsxs)("div",{className:"border-border rounded-xl border bg-[hsl(var(--card))] p-6",children:[(0,n.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,n.jsx)("span",{className:"text-foreground font-medium",children:"Stagger Animation"}),(0,n.jsx)("button",{onClick:()=>s(e=>e+1),"aria-label":"Replay animation",className:"hover:bg-background-tertiary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 transition-colors",children:(0,n.jsx)(c.o,{className:"text-foreground-muted h-4 w-4"})})]}),(0,n.jsx)(o.P.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},initial:"hidden",animate:"visible",className:"flex gap-3",children:[1,2,3,4,5].map(e=>(0,n.jsx)(o.P.div,{variants:t,className:"h-10 w-10 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))]"},e))},e),(0,n.jsx)("code",{className:"text-foreground-subtle mt-4 block font-mono text-xs",children:"staggerChildren: 0.1"})]})}let j=[{token:"instant",value:"0ms",usage:"No animation (reduced motion fallback)"},{token:"fastest",value:"50ms",usage:"Micro-interactions, instant feedback"},{token:"fast",value:"100ms",usage:"Button hover, quick transitions"},{token:"normal",value:"200ms",usage:"Default transitions"},{token:"moderate",value:"300ms",usage:"Modal open/close, page transitions"},{token:"slow",value:"400ms",usage:"Complex state changes"},{token:"slower",value:"500ms",usage:"Large element animations"},{token:"slowest",value:"700ms",usage:"Hero animations, entrances"}],y=[{name:"gentle",stiffness:120,damping:14,usage:"Subtle, non-intrusive"},{name:"wobbly",stiffness:180,damping:12,usage:"Playful, bouncy"},{name:"stiff",stiffness:210,damping:20,usage:"Snappy, responsive"},{name:"slow",stiffness:280,damping:60,usage:"Heavy, dramatic"},{name:"molasses",stiffness:280,damping:120,usage:"Ultra-smooth"}];function N(){let e=function(){let[e,s]=r.useState(!1);return r.useEffect(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");s(e.matches);let t=e=>s(e.matches);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),e}();return(0,n.jsxs)("div",{className:"@container space-y-20 px-4 sm:px-6",children:[(0,n.jsxs)(o.P.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,n.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,n.jsx)(x.R,{className:"h-5 w-5 text-[hsl(var(--primary-text))]"}),(0,n.jsx)("span",{className:"text-sm font-medium text-[hsl(var(--primary-text))]",children:"Foundation"})]}),(0,n.jsx)("h1",{className:"text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl",children:"Animation & Motion"}),(0,n.jsx)("p",{className:"text-foreground-muted max-w-prose text-lg leading-relaxed sm:text-xl",children:"Thoughtful animation enhances user experience by providing feedback, guiding attention, and creating delight. Inclusive uses Framer Motion for expressive, accessible animations that respect user preferences."}),e&&(0,n.jsx)("div",{className:"mt-6 rounded-xl border border-[hsl(var(--warning)/0.3)] bg-[hsl(var(--warning)/0.1)] p-4",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(u.L,{className:"h-5 w-5 text-[hsl(var(--warning-text))]"}),(0,n.jsx)("span",{className:"text-sm text-[hsl(var(--warning-text))]",children:"Reduced motion is enabled. Animations on this page are minimized."})]})})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Animation Philosophy"}),(0,n.jsx)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--primary)/0.08)] p-6",children:(0,n.jsx)("div",{className:"grid gap-6 md:grid-cols-2",children:[{title:"Purposeful",description:"Every animation serves a function: feedback, guidance, or hierarchy. No animation for animation's sake."},{title:"Subtle",description:"Animations should feel natural and unobtrusive. Users should notice the result, not the animation itself."},{title:"Fast",description:"UI should feel snappy. Most interactions complete in under 300ms. Longer animations are reserved for page transitions."},{title:"Accessible",description:"All animations respect prefers-reduced-motion. Essential functionality never depends on animation."}].map((e,s)=>(0,n.jsxs)("div",{className:"rounded-xl bg-[hsl(var(--card))] p-4",children:[(0,n.jsx)("h3",{className:"text-foreground mb-2 font-semibold",children:e.title}),(0,n.jsx)("p",{className:"text-foreground-muted text-sm",children:e.description})]},s))})})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Interactive Demos"}),(0,n.jsxs)("div",{className:"grid gap-6 lg:grid-cols-2",children:[(0,n.jsx)(f,{}),(0,n.jsx)(b,{}),(0,n.jsx)("div",{className:"lg:col-span-2",children:(0,n.jsx)(v,{})})]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Duration Scale"}),(0,n.jsx)("p",{className:"text-foreground-muted mb-6",children:"Consistent durations create predictable rhythm. Use the appropriate duration based on animation complexity and importance:"}),(0,n.jsx)("div",{className:"border-border overflow-hidden rounded-2xl border",children:(0,n.jsx)("div",{className:"overflow-x-auto",children:(0,n.jsxs)("table",{className:"w-full min-w-[500px]",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"border-border border-b bg-[hsl(var(--card))]",children:[(0,n.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Token"}),(0,n.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Value"}),(0,n.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Usage"})]})}),(0,n.jsx)("tbody",{children:j.map(e=>(0,n.jsxs)("tr",{className:"border-border border-b last:border-0",children:[(0,n.jsxs)("td",{className:"px-4 py-3 font-mono text-sm text-[hsl(var(--primary-text))]",children:["duration-",e.token]}),(0,n.jsx)("td",{className:"text-foreground-muted px-4 py-3 font-mono text-sm",children:e.value}),(0,n.jsx)("td",{className:"text-foreground-subtle px-4 py-3 text-sm",children:e.usage})]},e.token))})]})})})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Spring Physics Presets"}),(0,n.jsx)("p",{className:"text-foreground-muted mb-6",children:"Spring animations feel more natural than eased transitions. Use these presets for consistent spring behaviour:"}),(0,n.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:y.map(e=>(0,n.jsxs)("div",{className:"border-border rounded-xl border bg-[hsl(var(--card))] p-5",children:[(0,n.jsx)("h3",{className:"text-foreground mb-2 font-semibold",children:e.name}),(0,n.jsxs)("div",{className:"mb-3 space-y-1 font-mono text-xs text-[hsl(var(--primary-text))]",children:[(0,n.jsxs)("div",{children:["stiffness: ",e.stiffness]}),(0,n.jsxs)("div",{children:["damping: ",e.damping]})]}),(0,n.jsx)("p",{className:"text-foreground-subtle text-sm",children:e.usage})]},e.name))}),(0,n.jsx)(g,{code:`// Using spring presets in Framer Motion
import { motion } from "framer-motion";

// Spring presets
const springs = {
  gentle: { type: "spring", stiffness: 120, damping: 14 },
  wobbly: { type: "spring", stiffness: 180, damping: 12 },
  stiff: { type: "spring", stiffness: 210, damping: 20 },
  slow: { type: "spring", stiffness: 280, damping: 60 },
  molasses: { type: "spring", stiffness: 280, damping: 120 },
};

// Usage
<motion.div
  animate={{ scale: 1.1 }}
  transition={springs.stiff}
>
  Content
</motion.div>`,language:"tsx"})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Reduced Motion Support"}),(0,n.jsx)("div",{className:"rounded-2xl border border-[hsl(var(--error)/0.2)] bg-[hsl(var(--error)/0.1)] p-6",children:(0,n.jsxs)("div",{className:"flex items-start gap-4",children:[(0,n.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--error)/0.15)]",children:(0,n.jsx)(h.N,{className:"h-6 w-6 text-[hsl(var(--error-text))]"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-foreground mb-2 font-semibold",children:"Critical for Accessibility"}),(0,n.jsxs)("p",{className:"text-foreground-muted",children:["Users with vestibular disorders, motion sensitivity, or cognitive disabilities may experience discomfort or difficulty with animations. Inclusive respects the"," ",(0,n.jsx)("code",{className:"rounded bg-[hsl(var(--error)/0.2)] px-1.5 py-0.5 text-[hsl(var(--error-text))]",children:"prefers-reduced-motion"})," ","media query."]})]})]})}),(0,n.jsx)(g,{code:`// useReducedMotion hook
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}

// Usage in components
function AnimatedCard({ children }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reducedMotion 
        ? { duration: 0 } 
        : { type: "spring", stiffness: 200 }
      }
    >
      {children}
    </motion.div>
  );
}

// CSS fallback
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`,language:"tsx"})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-foreground mb-6 text-2xl font-bold",children:"Common Animation Patterns"}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,n.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Page Transitions"}),(0,n.jsx)(g,{code:`// Animate page content on route change
<AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.main>
</AnimatePresence>`,language:"tsx"})]}),(0,n.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,n.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Staggered Lists"}),(0,n.jsx)(g,{code:`// Animate list items with stagger delay
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.content}
    </motion.li>
  ))}
</motion.ul>`,language:"tsx"})]}),(0,n.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,n.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Hover Interactions"}),(0,n.jsx)(g,{code:`// Scale and glow on hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
  className="relative overflow-hidden"
>
  <motion.span
    className="absolute inset-0 bg-background-tertiary"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
  />
  Click me
</motion.button>`,language:"tsx"})]})]})]}),(0,n.jsx)("section",{children:(0,n.jsxs)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-[hsl(var(--accent)/0.1)] p-8",children:[(0,n.jsx)("h3",{className:"text-foreground mb-4 text-xl font-bold",children:"Continue Exploring"}),(0,n.jsx)("p",{className:"text-foreground-muted mb-6",children:"Animation works alongside our accessibility and component systems. Learn more:"}),(0,n.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,n.jsxs)(i(),{href:"/design-system/accessibility",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary)/0.12)] px-5 py-2.5 font-medium text-[hsl(var(--primary-text))] transition-colors hover:bg-[hsl(var(--primary)/0.2)]",children:["Accessibility",(0,n.jsx)(p.Q,{className:"h-4 w-4"})]}),(0,n.jsxs)(i(),{href:"/design-system/components",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary)/0.12)] px-5 py-2.5 font-medium text-[hsl(var(--primary-text))] transition-colors hover:bg-[hsl(var(--primary)/0.2)]",children:["Components",(0,n.jsx)(p.Q,{className:"h-4 w-4"})]})]})]})})]})}},98478:(e,s,t)=>{Promise.resolve().then(t.bind(t,48460))}},e=>{e.O(0,[9041,5587,1294,587,1968,7358],()=>e(e.s=98478)),_N_E=e.O()}]);