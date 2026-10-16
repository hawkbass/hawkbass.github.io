(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3955],{6661:(e,s,t)=>{"use strict";t.d(s,{default:()=>D});var r=t(54568),a=t(7620),i=t(15623),n=t(23537),o=t(66741),l=t(45831),c=t(35164),d=t(28699),x=t(54216),m=t(8934),h=t(18442),p=t(21723),u=t(56397),f=t(38598),g=t(35985),v=t(86328);function b({code:e,language:s="tsx",title:t}){let[i,n]=a.useState(!1),o=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)};return(0,r.jsxs)("div",{className:"bg-background-tertiary relative overflow-hidden rounded-xl",children:[(0,r.jsxs)("div",{className:"border-border flex items-center justify-between border-b px-4 py-2",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"text-foreground-subtle font-mono text-xs uppercase",children:s}),t&&(0,r.jsxs)("span",{className:"text-foreground-muted text-xs",children:["- ",t]})]}),(0,r.jsxs)("button",{onClick:o,className:"text-foreground-muted hover:text-foreground hover:bg-background-tertiary flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors",children:[i?(0,r.jsx)(g.J,{className:"h-3.5 w-3.5 text-[hsl(var(--success-text))]"}):(0,r.jsx)(v.Q,{className:"h-3.5 w-3.5"}),(0,r.jsx)("span",{children:i?"Copied!":"Copy"})]})]}),(0,r.jsx)("pre",{tabIndex:0,role:"group","aria-label":"Code sample",className:"overflow-x-auto p-4",children:(0,r.jsx)("code",{className:"text-foreground-secondary font-mono text-sm",children:e})})]})}var j=t(99114),N=t(31163);function y({doExample:e,dontExample:s,doTitle:t="Do",dontTitle:a="Don't"}){return(0,r.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,r.jsxs)("div",{className:"overflow-hidden rounded-xl border border-[hsl(var(--success)/0.3)]",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 bg-[hsl(var(--success)/0.15)] px-4 py-2",children:[(0,r.jsx)(j.r,{className:"h-4 w-4 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{className:"text-sm font-semibold text-[hsl(var(--success-text))]",children:t})]}),(0,r.jsx)("pre",{tabIndex:0,role:"group","aria-label":"Code sample",className:"bg-background-tertiary overflow-x-auto p-4",children:(0,r.jsx)("code",{className:"text-foreground-secondary font-mono text-sm",children:e})})]}),(0,r.jsxs)("div",{className:"overflow-hidden rounded-xl border border-[hsl(var(--error)/0.3)]",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 bg-[hsl(var(--error)/0.15)] px-4 py-2",children:[(0,r.jsx)(N.J,{className:"h-4 w-4 text-[hsl(var(--error-text))]"}),(0,r.jsx)("span",{className:"text-sm font-semibold text-[hsl(var(--error-text))]",children:a})]}),(0,r.jsx)("pre",{tabIndex:0,role:"group","aria-label":"Code sample",className:"bg-background-tertiary overflow-x-auto p-4",children:(0,r.jsx)("code",{className:"text-foreground-secondary font-mono text-sm",children:s})})]})]})}function w({icon:e,title:s,description:t,color:a}){let i={violet:{bg:"bg-[hsl(var(--primary)/0.08)]",border:"border-[hsl(var(--primary)/0.2)]",iconBg:"bg-[hsl(var(--primary)/0.15)]",icon:"text-[hsl(var(--primary-text))]"},cyan:{bg:"bg-[hsl(var(--accent)/0.1)]",border:"border-[hsl(var(--accent)/0.2)]",iconBg:"bg-[hsl(var(--accent)/0.15)]",icon:"text-[hsl(var(--accent-text))]"},emerald:{bg:"bg-[hsl(var(--success)/0.1)]",border:"border-[hsl(var(--success)/0.2)]",iconBg:"bg-[hsl(var(--success)/0.15)]",icon:"text-[hsl(var(--success-text))]"},amber:{bg:"bg-[hsl(var(--warning)/0.1)]",border:"border-[hsl(var(--warning)/0.2)]",iconBg:"bg-[hsl(var(--warning)/0.15)]",icon:"text-[hsl(var(--warning-text))]"},rose:{bg:"bg-[hsl(var(--error)/0.1)]",border:"border-[hsl(var(--error)/0.2)]",iconBg:"bg-[hsl(var(--error)/0.15)]",icon:"text-[hsl(var(--error-text))]"}}[a];return(0,r.jsxs)("div",{className:`rounded-2xl border p-6 ${i.bg} ${i.border}`,children:[(0,r.jsx)("div",{className:`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${i.iconBg}`,children:(0,r.jsx)(e,{className:`h-6 w-6 ${i.icon}`})}),(0,r.jsx)("h3",{className:"text-foreground mb-2 font-semibold",children:s}),(0,r.jsx)("p",{className:"text-foreground-muted text-sm",children:t})]})}function C(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,r.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,r.jsx)(n.G,{className:"h-5 w-5 text-[hsl(var(--primary-text))]"}),(0,r.jsx)("span",{className:"text-sm font-medium text-[hsl(var(--primary-text))]",children:"Guidelines"})]}),(0,r.jsx)("h1",{className:"text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl",children:"Best Practices"}),(0,r.jsx)("p",{className:"text-foreground-muted max-w-prose text-lg leading-relaxed sm:text-xl",children:"Guidelines for building exceptional user interfaces with Inclusive. These best practices cover accessibility, performance, component composition, and patterns for creating maintainable, user-friendly applications."})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"text-foreground mb-6 text-xl font-bold sm:text-2xl",children:"Core Principles"}),(0,r.jsxs)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:[(0,r.jsx)(w,{icon:o.q,title:"Accessibility First",description:"Build for everyone. WCAG 2.2 AA conformance, engineered towards AAA, ensures your interfaces work for all users, including those with disabilities.",color:"violet"}),(0,r.jsx)(w,{icon:l._,title:"Performance Matters",description:"Fast interfaces feel better. Optimise bundle size, reduce re-renders, and use proper loading states.",color:"cyan"}),(0,r.jsx)(w,{icon:c.R,title:"Responsive by Default",description:"Design for all screen sizes from 280px to 5120px. Use fluid typography and adaptive layouts.",color:"emerald"}),(0,r.jsx)(w,{icon:d.B,title:"Composition Over Complexity",description:"Build complex UIs by composing simple, focused components. Prefer composition over configuration.",color:"amber"}),(0,r.jsx)(w,{icon:x.e,title:"Consistent Theming",description:"Use design tokens and semantic colors. Never hardcode colors or spacing values.",color:"violet"}),(0,r.jsx)(w,{icon:m.j,title:"Test Everything",description:"Unit tests, accessibility tests, and visual regression tests ensure confidence in changes.",color:"rose"})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"mb-6 flex items-center gap-3",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary)/0.15)]",children:(0,r.jsx)(h.e,{className:"h-5 w-5 text-[hsl(var(--primary-text))]"})}),(0,r.jsx)("h2",{className:"text-foreground text-xl font-bold sm:text-2xl",children:"Accessibility Best Practices"})]}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Touch Targets (44x44px minimum)"}),(0,r.jsx)(y,{doExample:`<Button size="md">Submit</Button>
        /* min-height: 44px, min-width: 44px */

        <IconButton size="icon" aria-label="Settings">
          <SettingsIcon />
        </IconButton>
        /* 44x44px touch target */`,dontExample:`<button className="p-1 text-xs">
          Submit
        </button>
        /* Too small for touch */

        <span onClick={handleClick}>
          Click me
        </span>
        /* Not a button element */`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Focus Management"}),(0,r.jsx)(y,{doExample:`// Focus trap in modals
        <Dialog>
          <DialogContent>
            {/* Focus trapped inside */}
          </DialogContent>
        </Dialog>

        // Skip links for keyboard users
        <SkipLink href="#main-content">
          Skip to content
        </SkipLink>`,dontExample:`// No focus management
        <div className="modal">
          {/* Focus can escape */}
        </div>

        // Removing focus outlines
        button:focus {
          outline: none; /* Never do this! */
        }`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Semantic HTML & ARIA"}),(0,r.jsx)(y,{doExample:`<nav aria-label="Main navigation">
          <ul role="list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>

        <Button aria-expanded={isOpen}>
          {isOpen ? "Close" : "Open"} Menu
        </Button>`,dontExample:`<div className="nav">
          <div onClick={goHome}>Home</div>
          <div onClick={goAbout}>About</div>
        </div>

        <div className="button" onClick={toggle}>
          Toggle
        </div>
        /* Missing role, keyboard access */`})]}),(0,r.jsx)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--primary)/0.08)] p-6",children:(0,r.jsxs)("div",{className:"flex items-start gap-4",children:[(0,r.jsx)(p.g,{className:"mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--primary-text))]"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-foreground mb-2 font-semibold",children:"Color Contrast Requirements"}),(0,r.jsxs)("ul",{className:"text-foreground-muted space-y-2 text-sm",children:[(0,r.jsxs)("li",{children:["- ",(0,r.jsx)("strong",{children:"WCAG AAA:"})," 7:1 for normal text, 4.5:1 for large text"]}),(0,r.jsxs)("li",{children:["- ",(0,r.jsx)("strong",{children:"Non-text:"})," 3:1 for UI components and graphical objects"]}),(0,r.jsxs)("li",{children:["- ",(0,r.jsx)("strong",{children:"Focus indicators:"})," 3:1 against adjacent colors"]}),(0,r.jsxs)("li",{children:["- ",(0,r.jsx)("strong",{children:"Never rely solely on color"})," to convey information"]})]})]})]})})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"mb-6 flex items-center gap-3",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent)/0.15)]",children:(0,r.jsx)(u.l,{className:"h-5 w-5 text-[hsl(var(--accent-text))]"})}),(0,r.jsx)("h2",{className:"text-foreground text-xl font-bold sm:text-2xl",children:"Performance Optimization"})]}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Import Optimization"}),(0,r.jsx)(y,{doExample:`// Tree-shakeable named imports
        import { Button, Card } from "@inclusive/react";

        // Dynamic imports for heavy components
        const DataTable = dynamic(
          () => import("@inclusive/react").then(m => m.DataTable),
          { loading: () => <TableSkeleton /> }
        );`,dontExample:`// Importing entire library
        import * as Inclusive from "@inclusive/react";

        // No code splitting
        import { DataTable } from "@inclusive/react";
        // Always loaded even if not used`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Memoization & Re-renders"}),(0,r.jsx)(y,{doExample:`// Memoize expensive computations
        const filteredData = useMemo(
          () => data.filter(item => item.active),
          [data]
        );

        // Stable callbacks
        const handleClick = useCallback(() => {
          onSelect(item.id);
        }, [item.id, onSelect]);`,dontExample:`// New array every render
        const filteredData = data.filter(
          item => item.active
        );

        // Inline functions cause re-renders
        <Button onClick={() => onSelect(item.id)}>
          Select
        </Button>`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Bundle Size Targets"}),(0,r.jsx)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:(0,r.jsx)("div",{className:"grid grid-cols-2 gap-6 md:grid-cols-4",children:[{label:"JavaScript",target:"<50KB",icon:f.C},{label:"CSS",target:"<30KB",icon:x.e},{label:"LCP",target:"<1.5s",icon:l._},{label:"TTI",target:"<2.5s",icon:u.l}].map(e=>(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("div",{className:"bg-background-tertiary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl",children:(0,r.jsx)(e.icon,{className:"h-5 w-5 text-[hsl(var(--accent-text))]"})}),(0,r.jsx)("div",{className:"text-foreground mb-1 text-sm font-medium",children:e.label}),(0,r.jsx)("div",{className:"font-mono text-2xl font-bold text-[hsl(var(--accent-text))]",children:e.target})]},e.label))})})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"mb-6 flex items-center gap-3",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--success)/0.15)]",children:(0,r.jsx)(d.B,{className:"h-5 w-5 text-[hsl(var(--success-text))]"})}),(0,r.jsx)("h2",{className:"text-foreground text-xl font-bold sm:text-2xl",children:"Component Composition"})]}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Compound Component Pattern"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-4",children:"Inclusive components use compound patterns for flexibility. Compose sub-components rather than passing complex props."}),(0,r.jsx)(b,{title:"Compound Card Example",code:`// Flexible composition
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>Overview of your metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <StatsGrid>
              <StatsCard title="Revenue" value="\xa345,231" />
              <StatsCard title="Users" value="2,350" />
            </StatsGrid>
          </CardContent>
          <CardFooter>
            <Button variant="ghost">View Details</Button>
          </CardFooter>
        </Card>

        // vs. Monolithic (avoid this)
        <Card
          title="Dashboard"
          description="Overview..."
          stats={[{ title: "Revenue", value: "\xa345,231" }]}
          footerButtons={[{ label: "View", onClick: ... }]}
        />`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Slot Pattern for Flexibility"}),(0,r.jsx)(b,{title:"Using Slots",code:`// Components accept slot props for customisation
        <Button
          startIcon={<PlusIcon />}
          endIcon={<ArrowRightIcon />}
        >
          Add Item
        </Button>

        <Input
          startIcon={<SearchIcon />}
          endIcon={isLoading && <Spinner />}
          placeholder="Search..."
        />

        <Alert
          icon={<CustomIcon />}
          action={<Button size="sm">Fix</Button>}
        >
          Something went wrong
        </Alert>`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Polymorphic Components (asChild)"}),(0,r.jsx)(b,{title:"Render as Different Elements",code:`// Render Button as a link
        <Button asChild>
          <Link href="/inclusive-app/dashboard">Go to Dashboard</Link>
        </Button>

        // Render as Next.js Link
        <Button as={Link} href="/settings">
          Settings
        </Button>

        // Card as an article
        <Card as="article" aria-labelledby="post-title">
          <CardHeader>
            <CardTitle id="post-title">Blog Post</CardTitle>
          </CardHeader>
        </Card>`})]})]})]})]})}var k=t(65587),B=t.n(k),S=t(65085),T=t(93969);function I(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"mb-6 flex items-center gap-3",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--warning)/0.15)]",children:(0,r.jsx)(c.R,{className:"h-5 w-5 text-[hsl(var(--warning-text))]"})}),(0,r.jsx)("h2",{className:"text-foreground text-xl font-bold sm:text-2xl",children:"Responsive Design Patterns"})]}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Mobile-First Approach"}),(0,r.jsx)(y,{doTitle:"Mobile First",dontTitle:"Desktop First",doExample:`// Start with mobile, enhance for larger
        <div className="
          flex flex-col gap-4
          sm:flex-row sm:gap-6
          lg:gap-8
        ">
          <aside className="w-full sm:w-64 lg:w-80">
            Sidebar
          </aside>
          <main className="flex-1">
            Content
          </main>
        </div>`,dontExample:`// Harder to maintain
        <div className="
          flex flex-row gap-8
          lg:flex-row lg:gap-8
          sm:flex-row sm:gap-6
          flex-col gap-4
        ">
          {/* Confusing order */}
        </div>`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"12-Point Breakpoint System"}),(0,r.jsx)("div",{className:"border-border overflow-hidden rounded-2xl border",children:(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"w-full min-w-[600px]",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-border bg-background-tertiary border-b",children:[(0,r.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Prefix"}),(0,r.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Width"}),(0,r.jsx)("th",{className:"text-foreground px-4 py-3 text-start text-sm font-semibold",children:"Devices"})]})}),(0,r.jsx)("tbody",{children:[{prefix:"3xs",width:"280px",devices:"Galaxy Fold (closed)"},{prefix:"2xs",width:"320px",devices:"Small phones"},{prefix:"xs",width:"375px",devices:"iPhone SE, standard phones"},{prefix:"sm",width:"640px",devices:"Large phones, small tablets"},{prefix:"md",width:"768px",devices:"Tablets portrait"},{prefix:"lg",width:"1024px",devices:"Tablets landscape, small laptops"},{prefix:"xl",width:"1280px",devices:"Laptops"},{prefix:"2xl",width:"1536px",devices:"Large laptops, desktops"},{prefix:"3xl",width:"1920px",devices:"Full HD monitors"},{prefix:"4xl",width:"2560px",devices:"QHD monitors"},{prefix:"5xl",width:"3840px",devices:"4K displays"},{prefix:"ultra",width:"5120px",devices:"5K ultrawide"}].map(e=>(0,r.jsxs)("tr",{className:"border-border border-b last:border-0",children:[(0,r.jsxs)("td",{className:"px-4 py-2.5 font-mono text-sm text-[hsl(var(--warning-text))]",children:[e.prefix,":"]}),(0,r.jsx)("td",{className:"text-foreground-muted px-4 py-2.5 font-mono text-sm",children:e.width}),(0,r.jsx)("td",{className:"text-foreground-muted px-4 py-2.5 text-sm",children:e.devices})]},e.prefix))})]})})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Container Queries"}),(0,r.jsx)(b,{title:"Component-Level Responsiveness",code:`// Container query for component-level responsiveness
        <div className="@container">
          <div className="
            flex flex-col gap-2
            @sm:flex-row @sm:gap-4
            @lg:gap-6
          ">
            {/* Responds to container, not viewport */}
          </div>
        </div>

        // Useful for components that appear in different contexts
        // (sidebar vs. main content vs. modal)`})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"mb-6 flex items-center gap-3",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary)/0.15)]",children:(0,r.jsx)(x.e,{className:"h-5 w-5 text-[hsl(var(--primary-text))]"})}),(0,r.jsx)("h2",{className:"text-foreground text-xl font-bold sm:text-2xl",children:"Theming Best Practices"})]}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Use Semantic Color Tokens"}),(0,r.jsx)(y,{doExample:`// Semantic tokens adapt to theme
        <div className="bg-background text-foreground">
          <p className="text-foreground-muted">
            Secondary text
          </p>
          <Button className="bg-primary text-primary-foreground">
            Action
          </Button>
        </div>`,dontExample:`// Hardcoded colors break themes
        <div className="bg-white text-black">
          <p className="text-foreground-subtle">
            Secondary text
          </p>
          <button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
            Action
          </button>
        </div>`})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-lg font-semibold",children:"Theme Provider Setup"}),(0,r.jsx)(b,{title:"Root Layout",code:`// app/layout.tsx
        import { ThemeProvider } from "@inclusive/react";

        export default function RootLayout({ children }) {
          return (
            <html lang="en" suppressHydrationWarning>
              <body>
                <ThemeProvider
                  defaultTheme="dark"
                  enableSystem
                  storageKey="inclusive-theme"
                >
                  {children}
                </ThemeProvider>
              </body>
            </html>
          );
        }

        // Using the theme
        import { useTheme } from "@inclusive/react";

        function MyComponent() {
          const { theme, setTheme, resolvedTheme } = useTheme();
          
          return (
            <ThemeSwitcher />
          );
        }`})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"mb-6 flex items-center gap-3",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--error)/0.15)]",children:(0,r.jsx)(S.N,{className:"h-5 w-5 text-[hsl(var(--error-text))]"})}),(0,r.jsx)("h2",{className:"text-foreground text-xl font-bold sm:text-2xl",children:"Common Pitfalls"})]}),(0,r.jsx)("div",{className:"space-y-6",children:[{pitfall:"Overriding component styles with !important",solution:"Use variant props, extend with className, or create a new component",code:`// Instead of !important overrides
        <Button className="!bg-[hsl(var(--error))]">Bad</Button>

        // Use variant props
        <Button variant="destructive">Good</Button>

        // Or extend properly
        const DangerButton = ({ className, ...props }) => (
          <Button className={cn("bg-[hsl(var(--error))]", className)} {...props} />
        );`},{pitfall:"Mixing client/server components incorrectly",solution:"Add 'use client' only where needed, keep data fetching in server components",code:`// Page (Server Component) - fetches data
        export default async function Page() {
          const data = await fetchData();
          return <ClientForm initialData={data} />;
        }

        // ClientForm.tsx - handles interactivity
        "use client";
        export function ClientForm({ initialData }) {
          const [state, setState] = useState(initialData);
          return <Form ... />;
        }`},{pitfall:"Forgetting reduced motion preferences",solution:"Always check prefers-reduced-motion and provide alternatives",code:`// Respect user preferences
        const prefersReducedMotion = useReducedMotion();

        <MotionDiv
          animate={{ scale: prefersReducedMotion ? 1 : 1.05 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        >
          Content
        </MotionDiv>

        // CSS alternative
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0ms !important; }
        }`}].map((e,s)=>(0,r.jsxs)(i.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*s},className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsxs)("h3",{className:"mb-2 flex items-center gap-2 font-semibold text-[hsl(var(--error-text))]",children:[(0,r.jsx)(N.J,{className:"h-4 w-4"}),"Pitfall: ",e.pitfall]}),(0,r.jsxs)("p",{className:"flex items-center gap-2 text-sm text-[hsl(var(--success-text))]",children:[(0,r.jsx)(j.r,{className:"h-4 w-4"}),"Solution: ",e.solution]})]}),(0,r.jsx)(b,{code:e.code})]},s))})]}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"mb-6 flex items-center gap-3",children:[(0,r.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--success)/0.15)]",children:(0,r.jsx)(m.j,{className:"h-5 w-5 text-[hsl(var(--success-text))]"})}),(0,r.jsx)("h2",{className:"text-foreground text-xl font-bold sm:text-2xl",children:"Testing Checklist"})]}),(0,r.jsxs)("div",{className:"grid gap-6 md:grid-cols-2",children:[(0,r.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Accessibility Testing"}),(0,r.jsxs)("ul",{className:"text-foreground-muted space-y-2",children:[(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"axe-core automated checks pass"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Keyboard navigation works (Tab, Enter, Escape)"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Screen reader announces correctly"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Focus visible at all times"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Color contrast meets AAA (7:1)"})]})]})]}),(0,r.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Responsive Testing"}),(0,r.jsxs)("ul",{className:"text-foreground-muted space-y-2",children:[(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Test at 280px (Galaxy Fold closed)"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Test at 375px (standard mobile)"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Test at 768px (tablet)"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"Test at 1920px+ (desktop/ultrawide)"})]}),(0,r.jsxs)("li",{className:"flex items-start gap-2",children:[(0,r.jsx)(g.J,{className:"mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--success-text))]"}),(0,r.jsx)("span",{children:"No horizontal scroll at any size"})]})]})]})]})]}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-[hsl(var(--accent)/0.1)] p-8",children:[(0,r.jsx)("h3",{className:"text-foreground mb-4 text-xl font-bold",children:"Ready to Build?"}),(0,r.jsx)("p",{className:"text-foreground-muted mb-6",children:"Now that you understand the best practices, explore components and start building accessible, performant interfaces."}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,r.jsxs)(B(),{href:"/design-system/components",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-5 py-2.5 font-medium text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--primary-hover))]",children:["Browse Components",(0,r.jsx)(T.Q,{className:"h-4 w-4"})]}),(0,r.jsxs)(B(),{href:"/design-system/accessibility",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary)/0.12)] px-5 py-2.5 font-medium text-[hsl(var(--primary-text))] transition-colors hover:bg-[hsl(var(--primary)/0.2)]",children:["Accessibility Guide",(0,r.jsx)(T.Q,{className:"h-4 w-4"})]})]})]})})]})}function P(){return(0,r.jsxs)("div",{className:"@container space-y-20 px-4 sm:px-6",children:[(0,r.jsx)(C,{}),(0,r.jsx)(I,{})]})}function D(){return(0,r.jsx)(P,{})}},15623:(e,s,t)=>{"use strict";t.d(s,{a:()=>C,c:()=>b,d:()=>f,f:()=>g,h:()=>h,i:()=>T,l:()=>v,m:()=>p,n:()=>B,o:()=>N,p:()=>u,r:()=>S,s:()=>j,t:()=>k});var r=t(15638),a=t(7620),i=t(54568),n=t(16119),o=t(69041),l=t(22407),c=t(26559),d=t(9841),x=t(20546),m=t(29236);function h({children:e,className:s,delay:t=0,duration:a=.3,offset:l=10}){return(0,n.I)()?(0,i.jsx)("div",{className:s,children:e}):(0,i.jsx)(o.P.div,{initial:{opacity:0,y:l},animate:{opacity:1,y:0},transition:{duration:a,delay:t},className:(0,r.t)(s),children:e})}function p({children:e,mode:s="sync",initial:t}){return(0,i.jsx)(l.N,{mode:s,initial:t,children:e})}function u({children:e,...s}){if((0,n.I)()){let{initial:t,animate:r,exit:a,transition:n,className:o,style:l,onClick:c,onPointerDown:d,onPointerMove:x,onPointerUp:m,role:h}=s;return(0,i.jsx)("div",{className:o,style:l,onClick:c,onPointerDown:d,onPointerMove:x,onPointerUp:m,role:h,children:e})}return(0,i.jsx)(o.P.div,{...s,children:e})}let f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}}},g={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.3,ease:[.25,.1,.25,1]}}};function v({children:e,className:s,variants:t=f}){return(0,n.I)()?(0,i.jsx)("div",{className:(0,r.t)(s),children:e}):(0,i.jsx)(o.P.div,{variants:t,initial:"hidden",animate:"visible",className:(0,r.t)(s),children:e})}function b({children:e,className:s,onSwipeLeft:t,onSwipeRight:a,threshold:l=100}){return(0,n.I)()?(0,i.jsx)("div",{className:(0,r.t)(s),children:e}):(0,i.jsx)(o.P.div,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.3,onDragEnd:(e,s)=>{s.offset.x>l?a?.():s.offset.x<-l&&t?.()},className:(0,r.t)(s),children:e})}function j({value:e,format:s=e=>e.toLocaleString("en-GB"),className:t}){let r=a.useRef(null),l=(0,n.I)(),m=(0,c.W)(r,{once:!0,margin:"-40px"}),h=(0,d.z)(0,{duration:1100,bounce:0}),p=(0,x.G)(h,e=>s(Math.round(e)));return(a.useEffect(()=>{m&&h.set(e)},[m,h,e]),l)?(0,i.jsx)("span",{className:t,children:s(e)}):(0,i.jsx)(o.P.span,{ref:r,className:t,children:p})}function N({children:e,reducedMotion:s="user"}){return(0,i.jsx)(m.x,{reducedMotion:s,children:e})}function y(e,s,t){let{initial:r,animate:i,exit:n,transition:o,variants:l,whileHover:c,whileTap:d,layout:x,layoutId:m,className:h,style:p,...u}=s;return a.createElement(e,{className:h,style:p,...u},t)}function w(e,s){let{initial:t,animate:r,exit:i,transition:n,variants:o,...l}=s;return a.createElement(e,l)}function C({children:e,...s}){return(0,n.I)()?y("span",s,e):(0,i.jsx)(o.P.span,{...s,children:e})}function k({children:e,...s}){return(0,n.I)()?y("button",s,e):(0,i.jsx)(o.P.button,{...s,children:e})}function B({children:e,...s}){return(0,n.I)()?y("form",s,e):(0,i.jsx)(o.P.form,{...s,children:e})}function S(e){return(0,n.I)()?w("path",e):(0,i.jsx)(o.P.path,{...e})}function T(e){return(0,n.I)()?w("polyline",e):(0,i.jsx)(o.P.polyline,{...e})}},15638:(e,s,t)=>{"use strict";t.d(s,{t:()=>i});var r=t(9917),a=t(2809);function i(...e){return(0,a.QP)((0,r.$)(e))}},18638:(e,s,t)=>{Promise.resolve().then(t.bind(t,6661))}},e=>{e.O(0,[9041,3357,5587,8163,587,1968,7358],()=>e(e.s=18638)),_N_E=e.O()}]);