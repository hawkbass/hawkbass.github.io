(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5390],{22762:(e,t,a)=>{Promise.resolve().then(a.bind(a,82968))},82968:(e,t,a)=>{"use strict";a.d(t,{default:()=>y});var i=a(54568),r=a(7620),s=a(65587),n=a.n(s),o=a(69041),l=a(35985),d=a(86328),c=a(46670),m=a(21460),p=a(81647),x=a(39263),h=a(54650),u=a(90521),g=a(28699),b=a(32698),v=a(93969);function f({code:e,language:t="tsx"}){let[a,s]=r.useState(!1),n=async()=>{await navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)};return(0,i.jsxs)("div",{className:"bg-background-tertiary relative overflow-hidden rounded-xl",children:[(0,i.jsxs)("div",{className:"border-border flex items-center justify-between border-b px-4 py-2",children:[(0,i.jsx)("span",{className:"text-foreground-muted font-mono text-xs tracking-wide uppercase",children:t}),(0,i.jsxs)("button",{onClick:n,className:"text-foreground-muted hover:text-foreground hover:bg-background-tertiary flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors",children:[a?(0,i.jsx)(l.J,{className:"h-3.5 w-3.5 text-[hsl(var(--success-text))]"}):(0,i.jsx)(d.Q,{className:"h-3.5 w-3.5"}),(0,i.jsx)("span",{children:a?"Copied!":"Copy"})]})]}),(0,i.jsx)("pre",{className:"overflow-x-auto p-4",children:(0,i.jsx)("code",{className:"text-foreground-secondary font-mono text-sm",children:e})})]})}let w=[{id:"forms",icon:c.R,title:"Form Patterns",description:"Accessible, validated forms with clear error handling and progressive disclosure.",patterns:["Multi-step wizards with progress","Inline validation with debounce","Accessible error messaging","Optional vs required fields","Form sections with fieldsets"]},{id:"navigation",icon:m.i,title:"Navigation Patterns",description:"Intuitive navigation that works across all devices and screen sizes.",patterns:["Responsive sidebar navigation","Breadcrumb trails","Tab-based section switching","Command palette (Cmd+K)","Pagination and infinite scroll"]},{id:"data",icon:p.X,title:"Data Display Patterns",description:"Clear, scannable data presentation with sorting, filtering, and actions.",patterns:["Sortable data tables","Filter and search combinations","Empty states and loading","Bulk selection and actions","Expandable row details"]},{id:"feedback",icon:x.r,title:"Feedback Patterns",description:"Clear communication of system status, errors, and success states.",patterns:["Toast notifications","Inline success/error messages","Loading states and skeletons","Confirmation dialogs","Progress indicators"]},{id:"layout",icon:h.P,title:"Layout Patterns",description:"Consistent page structures that adapt to content and viewport.",patterns:["Dashboard grid layouts","Master-detail views","Card grid with responsive columns","Sticky headers and footers","Sidebar + content + panel"]},{id:"ats",icon:u.Z,title:"ATS Patterns",description:"Domain-specific patterns for Applicant Tracking Systems.",patterns:["Candidate pipeline Kanban","Application review workflow","Interview scheduling flow","Candidate comparison view","Bulk applicant actions"]}];function y(){return(0,i.jsxs)("div",{className:"@container space-y-20 px-4 sm:px-6",children:[(0,i.jsxs)(o.P.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,i.jsxs)("div",{className:"mb-4 flex items-center gap-2",children:[(0,i.jsx)(g.B,{className:"h-5 w-5 text-[hsl(var(--primary-text))]"}),(0,i.jsx)("span",{className:"text-sm font-medium text-[hsl(var(--primary-text))]",children:"Guidelines"})]}),(0,i.jsx)("h1",{className:"text-foreground mb-6 text-4xl font-bold tracking-tight sm:text-5xl",children:"Design Patterns"}),(0,i.jsx)("p",{className:"text-foreground-muted max-w-prose text-lg leading-relaxed sm:text-xl",children:"Proven solutions to common interface challenges. These patterns combine our components into cohesive, accessible, and user-friendly experiences."})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{className:"text-foreground mb-6 text-xl font-bold sm:text-2xl",children:"Pattern Categories"}),(0,i.jsx)("div",{className:"grid gap-6 md:grid-cols-2",children:w.map((e,t)=>(0,i.jsx)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:(0,i.jsxs)("div",{className:"flex items-start gap-4",children:[(0,i.jsx)("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary-text))]",children:(0,i.jsx)(e.icon,{className:"h-6 w-6"})}),(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)("h3",{className:"text-foreground mb-2 font-semibold",children:e.title}),(0,i.jsx)("p",{className:"text-foreground-muted mb-4 text-sm",children:e.description}),(0,i.jsx)("ul",{className:"space-y-1",children:e.patterns.map(e=>(0,i.jsxs)("li",{className:"text-foreground-subtle flex items-center gap-2 text-sm",children:[(0,i.jsx)(b.K,{className:"h-3 w-3"}),e]},e))})]})]})},e.id))})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{className:"text-foreground mb-6 text-xl font-bold sm:text-2xl",children:"Form Patterns in Detail"}),(0,i.jsxs)("div",{className:"space-y-8",children:[(0,i.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,i.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Form Field with Validation"}),(0,i.jsx)(f,{code:`// FormField component pattern
<FormField
  label="Email Address"
  name="email"
  required
  error={errors.email?.message}
  description="We'll never share your email."
>
  <Input
    type="email"
    placeholder="you@example.com"
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+[.][A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    })}
  />
</FormField>

// Renders as:
<div className="space-y-2">
  <label htmlFor="email" className="text-sm font-medium">
    Email Address
    <span className="text-[hsl(var(--error-text))]" aria-hidden="true">*</span>
  </label>
  <input
    id="email"
    type="email"
    aria-describedby="email-description email-error"
    aria-invalid={!!errors.email}
    className="..."
  />
  <p id="email-description" className="text-sm text-foreground-muted">
    We'll never share your email.
  </p>
  {errors.email && (
    <p id="email-error" role="alert" className="text-sm text-[hsl(var(--error-text))]">
      {errors.email.message}
    </p>
  )}
</div>`,language:"tsx"})]}),(0,i.jsxs)("div",{className:"border-border rounded-2xl border bg-[hsl(var(--card))] p-6",children:[(0,i.jsx)("h3",{className:"text-foreground mb-4 font-semibold",children:"Multi-Step Form Wizard"}),(0,i.jsx)(f,{code:`// Multi-step wizard pattern
function ApplicationWizard() {
  const [step, setStep] = React.useState(1);
  const totalSteps = 4;

  return (
    <div>
      {/* Progress indicator */}
      <div className="flex gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={\`h-1 flex-1 rounded-full \${
              i + 1 <= step ? "bg-primary" : "bg-border"
            }\`}
          />
        ))}
      </div>

      {/* Step content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {step === 1 && <PersonalInfoStep />}
          {step === 2 && <ExperienceStep />}
          {step === 3 && <DocumentsStep />}
          {step === 4 && <ReviewStep />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={() => setStep(s => s - 1)}
          disabled={step === 1}
        >
          Previous
        </Button>
        <Button onClick={() => setStep(s => s + 1)}>
          {step === totalSteps ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}`,language:"tsx"})]})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{className:"text-foreground mb-6 text-xl font-bold sm:text-2xl",children:"Data Table Pattern"}),(0,i.jsx)(f,{code:`// Advanced data table pattern
<DataTable
  data={candidates}
  columns={[
    {
      key: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
          aria-label="Select all rows"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          aria-label={\`Select \${row.original.name}\`}
        />
      ),
    },
    {
      key: "name",
      header: "Candidate",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar src={row.original.avatar} name={row.original.name} />
          <div>
            <p className="font-medium">{row.original.name}</p>
            <p className="text-sm text-foreground-muted">{row.original.email}</p>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      key: "stage",
      header: "Stage",
      cell: ({ row }) => (
        <Badge variant={getStageVariant(row.original.stage)}>
          {row.original.stage}
        </Badge>
      ),
      filterable: true,
    },
    {
      key: "actions",
      header: "",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Actions">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onClick={() => viewProfile(row.original.id)}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={() => moveToStage(row.original.id)}>
              Move to Stage
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem variant="destructive" onClick={() => reject(row.original.id)}>
              Reject
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      ),
    },
  ]}
  searchable
  searchPlaceholder="Search candidates..."
  emptyState={<EmptyState icon={Users} message="No candidates found" />}
  loadingState={<TableSkeleton rows={5} />}
/>`,language:"tsx"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{className:"text-foreground mb-6 text-xl font-bold sm:text-2xl",children:"ATS Kanban Pipeline Pattern"}),(0,i.jsx)(f,{code:`// ATS Kanban pipeline pattern
<KanbanBoard
  columns={[
    { id: "applied", title: "Applied", limit: 50 },
    { id: "screening", title: "Screening", limit: 20 },
    { id: "interview", title: "Interview", limit: 10 },
    { id: "offer", title: "Offer", limit: 5 },
    { id: "hired", title: "Hired" },
  ]}
  items={candidates}
  onReorder={(columnId, items) => {
    // Handle reorder within column
    updateColumnOrder(columnId, items);
  }}
  onMoveItem={(item, fromColumn, toColumn) => {
    // Handle moving between columns
    await moveCandidateStage(item.id, toColumn);
  }}
  renderItem={(candidate) => (
    <CandidateCard
      name={candidate.name}
      role={candidate.appliedRole}
      avatar={candidate.avatar}
      tags={candidate.skills}
      score={candidate.matchScore}
      applied={candidate.appliedDate}
      onClick={() => openProfile(candidate.id)}
    />
  )}
  renderColumnHeader={(column) => (
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">{column.title}</h3>
      <Badge variant="secondary">{column.items.length}</Badge>
    </div>
  )}
/>`,language:"tsx"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{className:"text-foreground mb-6 text-xl font-bold sm:text-2xl",children:"Pattern Best Practices"}),(0,i.jsx)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--primary)/0.08)] p-6",children:(0,i.jsx)("div",{className:"space-y-4",children:[{title:"Consistency Over Creativity",description:"Use established patterns instead of inventing new ones. Users benefit from familiar interactions."},{title:"Progressive Disclosure",description:"Show essential information first, reveal details on demand. Reduce cognitive load."},{title:"Graceful Degradation",description:"Patterns should work without JavaScript, then enhance progressively."},{title:"Error Prevention",description:"Prevent errors before they happen through validation, constraints, and confirmation."},{title:"Accessible by Default",description:"Every pattern must be keyboard navigable, screen reader friendly, and meet contrast requirements."}].map(e=>(0,i.jsxs)("div",{className:"rounded-xl bg-[hsl(var(--card))] p-4",children:[(0,i.jsx)("h3",{className:"text-foreground mb-1 font-semibold",children:e.title}),(0,i.jsx)("p",{className:"text-foreground-muted text-sm",children:e.description})]},e.title))})})]}),(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:"rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-[hsl(var(--accent)/0.1)] p-8",children:[(0,i.jsx)("h3",{className:"text-foreground mb-4 text-xl font-bold",children:"Continue Exploring"}),(0,i.jsx)("p",{className:"text-foreground-muted mb-6",children:"See these patterns implemented in our component library:"}),(0,i.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,i.jsxs)(n(),{href:"/design-system/components",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary)/0.12)] px-5 py-2.5 font-medium text-[hsl(var(--primary-text))] transition-colors hover:bg-[hsl(var(--primary)/0.2)]",children:["Components",(0,i.jsx)(v.Q,{className:"h-4 w-4"})]}),(0,i.jsxs)(n(),{href:"/design-system/accessibility",className:"inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary)/0.12)] px-5 py-2.5 font-medium text-[hsl(var(--primary-text))] transition-colors hover:bg-[hsl(var(--primary)/0.2)]",children:["Accessibility",(0,i.jsx)(v.Q,{className:"h-4 w-4"})]})]})]})})]})}}},e=>{e.O(0,[9041,5587,3423,587,1968,7358],()=>e(e.s=22762)),_N_E=e.O()}]);