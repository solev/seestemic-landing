import { siClaudecode, siCursor, siGithubcopilot, siGooglegemini } from "simple-icons/icons";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Brand() {
  return <span className="brand"><span className="brand-mark">S</span><span>seestemic</span></span>;
}

function WorkflowDemo() {
  return (
    <div className="workflow-stage" aria-label="Example AI workflow processing a new customer request">
      <div className="stage-topbar">
        <div><span /><span /><span /></div>
        <p>Seestemic OS <i>/</i> Customer operations</p>
        <b><span /> Live</b>
      </div>
      <div className="stage-tabs">
        <button className="active">Client onboarding</button>
        <button>Document review</button>
        <button>Sales operations</button>
        <button>Internal support</button>
      </div>
      <div className="stage-body">
        <aside className="stage-queue">
          <div className="queue-title"><span>Incoming</span><b>4 new</b></div>
          <article className="queue-card selected"><small>NEW REQUEST</small><h4>Northstar expansion</h4><p>Website · 2 minutes ago</p><div><i>PDF</i><i>CRM</i><i>EMAIL</i></div></article>
          <article className="queue-card"><small>DOCUMENT</small><h4>Supplier agreement</h4><p>Email · 8 minutes ago</p></article>
          <article className="queue-card"><small>FOLLOW-UP</small><h4>Renewal opportunity</h4><p>CRM · 14 minutes ago</p></article>
        </aside>
        <section className="agent-canvas">
          <div className="canvas-head"><div><small>WORKFLOW  /  ACTIVE</small><h3>Turn a new inquiry into a ready-to-send proposal</h3></div><span>•••</span></div>
          <div className="workflow-line">
            <article className="flow-card done"><span>01</span><div><small>UNDERSTAND</small><b>Read inquiry</b><p>Requirements and attachments extracted</p></div><i>✓</i></article>
            <div className="flow-connector"><span /></div>
            <article className="flow-card done"><span>02</span><div><small>QUALIFY</small><b>Check fit</b><p>Matched against sales criteria</p></div><i>✓</i></article>
            <div className="flow-connector active"><span /></div>
            <article className="flow-card running"><span>03</span><div><small>CREATE</small><b>Draft proposal</b><p>Using approved pricing and templates</p></div><i className="loader" /></article>
            <div className="flow-connector"><span /></div>
            <article className="flow-card pending"><span>04</span><div><small>APPROVE</small><b>Human review</b><p>Route to account owner</p></div><i>→</i></article>
          </div>
          <div className="agent-thinking"><span>✦</span><p><small>SEESTEMIC AGENT</small><b>Preparing a proposal with three recommended options</b></p><em><i /><i /><i /></em></div>
        </section>
        <aside className="stage-result">
          <div className="result-head"><span>Outcome</span><b>In progress</b></div>
          <div className="result-preview"><div className="doc-line wide" /><div className="doc-line medium" /><div className="doc-line short" /><div className="doc-space" /><div className="doc-line wide" /><div className="doc-line wide" /><div className="doc-line medium" /></div>
          <div className="result-list"><div><span>✓</span><p><b>Lead qualified</b><small>Score 92 / 100</small></p></div><div><span>✓</span><p><b>CRM updated</b><small>5 fields enriched</small></p></div><div><span>↗</span><p><b>Proposal drafted</b><small>Awaiting approval</small></p></div></div>
          <div className="time-saved"><small>ESTIMATED TIME RETURNED</small><b>2h 45m</b><span>on this request</span></div>
        </aside>
      </div>
    </div>
  );
}

const process = [
  ["01", "Discover", "Find the work where AI can create the clearest return.", "AI opportunity map + business case"],
  ["02", "Design", "Map the workflow, controls, data, and success measures.", "Workflow blueprint + control plan"],
  ["03", "Build", "Ship a useful first version inside the tools your team knows.", "Working pilot in your current systems"],
  ["04", "Improve", "Measure adoption, refine performance, and expand what works.", "Adoption data + optimization plan"],
];

const faqs = [
  ["Do we need technical knowledge?", "No. We translate business needs into a practical plan, handle the technical delivery, and make sure your team understands how to use what we build."],
  ["Can AI work with our current software?", "Usually, yes. We design around your existing tools—such as Microsoft 365, Google Workspace, CRM platforms, support systems, document stores, and custom applications."],
  ["How quickly can we see value?", "A focused first workflow can often be operating within 3–6 weeks. Larger programs are delivered in stages so useful results arrive early."],
  ["How do you protect company data?", "Security, access boundaries, human approvals, auditability, and suitable model providers are designed into the solution from the start."],
  ["Will you train our employees?", "Yes. Adoption is part of the work. We provide role-specific training, playbooks, and practical guidance so teams know when and how to use AI well."],
];

const buildCapabilities = [
  {
    eyebrow: "AUTONOMOUS BUSINESS AGENTS",
    title: "AI that works 24/7",
    description: "Agents that monitor operations, make routine decisions, generate reports, and keep work moving around the clock.",
    tags: ["Monitor operations", "Trigger workflows", "Generate reports"],
    visual: "operations",
  },
  {
    eyebrow: "CUSTOMER SUPPORT & SALES",
    title: "Never miss another customer",
    description: "Assistants that answer questions, qualify leads, schedule meetings, create quotes, and follow up across your channels.",
    tags: ["Lead qualification", "Customer support", "Sales follow-up"],
    visual: "customer",
  },
  {
    eyebrow: "AI WORKFLOW AUTOMATION",
    title: "Eliminate manual work",
    description: "Connected workflows that process email and documents, update systems, route requests, and handle approvals.",
    tags: ["Document processing", "CRM updates", "Approvals"],
    visual: "workflow",
  },
  {
    eyebrow: "AI ENABLEMENT & AGENT ECOSYSTEMS",
    title: "Turn everyday AI use into company capability",
    description: "We configure, connect, and extend the AI tools your people already use—then add company context, practical workflows, guardrails, and training.",
    tags: ["Choose the right tools", "Custom skills & agents", "Team training"],
    visual: "ecosystem",
  },
];

const agentPlatforms = [
  { name: "Codex", category: "BUILD", kind: "codex" },
  { name: "Claude Code", category: "BUILD", icon: siClaudecode },
  { name: "GitHub Copilot", category: "BUILD", icon: siGithubcopilot },
  { name: "Cursor", category: "BUILD", icon: siCursor },
  { name: "ChatGPT", category: "KNOWLEDGE", kind: "chatgpt" },
  { name: "Microsoft 365 Copilot", category: "KNOWLEDGE", kind: "microsoft" },
  { name: "Gemini", category: "KNOWLEDGE", icon: siGooglegemini },
  { name: "Custom agents", category: "YOUR WORKFLOWS", kind: "seestemic" },
];

function AgentPlatformIcon({ platform }: { platform: (typeof agentPlatforms)[number] }) {
  if (platform.icon) return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={platform.icon.path}/></svg>;
  if (platform.kind === "microsoft") return <span className="microsoft-grid" aria-hidden="true"><i/><i/><i/><i/></span>;
  if (platform.kind === "chatgpt") return <span className="chatgpt-mark" aria-hidden="true"><i/><i/><i/></span>;
  if (platform.kind === "seestemic") return <span className="platform-seestemic" aria-hidden="true">S</span>;
  return <span className="platform-codex" aria-hidden="true">✦</span>;
}

const testimonials = [
  {
    quote: "Seestemic helped us move from broad AI ideas to a workflow our team could actually use. The value was clear because it was designed around how we already work.",
    name: "Sarah Lin",
    role: "COO, Northline Advisory",
  },
  {
    quote: "They treated adoption as part of delivery. Our team understood what changed, where to stay in control, and how to keep improving the workflow after launch.",
    name: "Daniel Weber",
    role: "Managing Director, Atlas Property Group",
  },
  {
    quote: "The strongest part was the partnership: practical priorities, senior technical judgment, and no pressure to force AI into the wrong places.",
    name: "Maya Chen",
    role: "VP Operations, Fieldstone Commerce",
  },
];

const paybackAreas = [
  {
    number: "01",
    eyebrow: "REPETITIVE COORDINATION",
    title: "Keep requests and handoffs moving.",
    description: "AI can route email, schedule work, update CRMs, follow up, and manage approvals without the constant copy-paste and chasing.",
    examples: ["Email routing", "Scheduling", "CRM updates", "Approvals"],
    industries: "Professional services · Agencies · Real estate · SaaS",
    visual: "coordination",
  },
  {
    number: "02",
    eyebrow: "DOCUMENT-HEAVY OPERATIONS",
    title: "Turn documents into usable work.",
    description: "Extract information, review submissions, process invoices, produce reports, and send the right details to the right system.",
    examples: ["Data extraction", "Document review", "Invoices", "Reports"],
    industries: "Healthcare · Finance · Manufacturing · Logistics",
    visual: "documents",
  },
  {
    number: "03",
    eyebrow: "KNOWLEDGE BOTTLENECKS",
    title: "Make company knowledge easy to use.",
    description: "Give employees fast, permission-aware answers from policies, SOPs, customer history, and operational documentation.",
    examples: ["Internal search", "SOP guidance", "Employee support", "Handovers"],
    industries: "Useful across every growing organization",
    visual: "knowledge",
  },
];

function CapabilityVisual({ type }: { type: string }) {
  if (type === "operations") return <div className="capability-visual cap-operations" aria-hidden="true"><div className="cap-window"><span>Operations</span><b><i /> Live</b></div><div className="cap-stat"><p><small>WORK COMPLETED</small><strong>1,284</strong></p><em>+18%</em></div><div className="cap-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="cap-event"><span>✓</span><p><b>Weekly report prepared</b><small>Ready for review</small></p></div></div>;
  if (type === "customer") return <div className="capability-visual cap-customer" aria-hidden="true"><div className="cap-window"><span>Customer assistant</span><b><i /> Online</b></div><div className="chat-line customer-line">Can you help us choose the right plan?</div><div className="chat-line agent-line"><span>✦</span><p>Absolutely. I’ll ask two quick questions, then recommend the best fit.</p></div><div className="lead-chip"><span>QUALIFIED LEAD</span><b>Meeting ready ↗</b></div></div>;
  if (type === "workflow") return <div className="capability-visual cap-workflow" aria-hidden="true"><div className="cap-window"><span>Invoice workflow</span><b>5 systems</b></div><div className="mini-flow"><div><span>✉</span><small>Email</small></div><i/><div className="active"><span>✦</span><small>Extract</small></div><i/><div><span>✓</span><small>Approve</small></div></div><div className="workflow-status"><span><i/>3 invoices processed</span><b>42 min saved</b></div></div>;
  return <div className="capability-visual cap-ecosystem" aria-hidden="true"><div className="cap-window"><span>AI enablement</span><b><i/> 7 tools supported</b></div><div className="mini-platforms">{agentPlatforms.slice(0,4).map(platform=><div key={platform.name}><AgentPlatformIcon platform={platform}/><span>{platform.name}</span></div>)}</div><div className="mini-enablement-layer"><span>SEESTEMIC LAYER</span><b>Context · workflows · guardrails · training</b></div></div>;
}

function OpportunityMap() {
  return <div className="opportunity-map" aria-label="Example AI opportunity map comparing business impact and implementation effort">
    <div className="map-top"><div><span>AI OPPORTUNITY MAP</span><b>Prioritized with your team</b></div><div className="map-legend"><span><i className="quick"/>Quick win</span><span><i className="strategic"/>Strategic</span><span><i className="later"/>Revisit later</span></div></div>
    <div className="map-canvas">
      <div className="axis-label axis-impact">BUSINESS IMPACT <span>↑</span></div>
      <div className="axis-label axis-effort">IMPLEMENTATION EFFORT <span>→</span></div>
      <div className="map-quadrant q-top-left"><span>START HERE</span></div><div className="map-quadrant q-top-right"><span>STRATEGIC BUILDS</span></div><div className="map-quadrant q-bottom-left"><span>USEFUL, LOWER IMPACT</span></div><div className="map-quadrant q-bottom-right"><span>REVISIT LATER</span></div>
      <div className="map-item request-routing"><i/><p><b>Email & request routing</b><small>Fast return · Low complexity</small></p></div>
      <div className="map-item knowledge-assistant"><i/><p><b>Internal knowledge assistant</b><small>High impact · Clear controls</small></p></div>
      <div className="map-item onboarding-agent"><i/><p><b>Client onboarding agent</b><small>Cross-system · Strategic</small></p></div>
      <div className="map-item meeting-notes"><i/><p><b>Meeting summaries</b><small>Simple · Moderate return</small></p></div>
      <div className="map-item autonomous-decisions muted"><i/><p><b>High-risk autonomous decisions</b><small>More controls required</small></p></div>
    </div>
  </div>;
}

function PaybackVisual({ type }: { type: string }) {
  if (type === "coordination") return <div className="payback-visual coordination-visual" aria-hidden="true"><div className="payback-bar"><span>REQUEST FLOW</span><b><i/>Running</b></div><div className="coordination-list"><div><span>✉</span><p><small>NEW REQUEST</small><b>Website inquiry received</b></p><em>Now</em></div><i/><div><span>✦</span><p><small>QUALIFIED</small><b>CRM enriched and owner assigned</b></p><em>12 sec</em></div><i/><div><span>✓</span><p><small>NEXT STEP</small><b>Follow-up meeting proposed</b></p><em>Done</em></div></div></div>;
  if (type === "documents") return <div className="payback-visual documents-visual" aria-hidden="true"><div className="payback-bar"><span>DOCUMENT PROCESSING</span><b>42 today</b></div><div className="document-workspace"><div className="document-stack"><i/><i/><article><span>INVOICE #4921</span><b>Northstar Logistics</b><p/><p/><p/></article></div><div className="extracted-data"><small>EXTRACTED</small><div><span>Supplier</span><b>Northstar Logistics</b></div><div><span>Total</span><b>€4,850.00</b></div><div><span>Order</span><b>PO-1842</b></div><em>✓ Ready for approval</em></div></div></div>;
  return <div className="payback-visual knowledge-visual" aria-hidden="true"><div className="payback-bar"><span>COMPANY KNOWLEDGE</span><b>Private workspace</b></div><div className="knowledge-search">How should we handle a renewal exception?<span>↵</span></div><div className="knowledge-answer"><span>✦</span><p><small>ANSWERED FROM 3 APPROVED SOURCES</small><b>Route exceptions above 10% to the account owner and Finance. Include the customer history and proposed terms.</b></p></div><div className="knowledge-sources"><span>Renewal SOP</span><span>Finance policy</span><span>CRM history</span></div></div>;
}

function OperationsScene() {
  return <div className="story-scene operations-scene" aria-label="Autonomous operations agent interface">
    <div className="scene-bar"><span>OPERATIONS AGENT</span><b><i /> Running</b></div>
    <div className="ops-grid">
      <aside><small>MONITORS</small><div className="active"><span>✉</span><p><b>Shared inbox</b><i>124 today</i></p><em>→</em></div><div><span>▦</span><p><b>Orders</b><i>8 exceptions</i></p><em>→</em></div><div><span>◇</span><p><b>Documents</b><i>42 processed</i></p><em>→</em></div></aside>
      <section><div className="ops-title"><p><small>LIVE ACTIVITY</small><b>Work moving without the chasing.</b></p><span>Today, 14:32</span></div><div className="ops-events"><article><span>✓</span><p><small>14:31</small><b>Resolved a missing order reference</b><i>Matched invoice #4921 to Northstar order</i></p><em>Completed</em></article><article><span>✦</span><p><small>14:28</small><b>Prepared the weekly operations report</b><i>12 trends summarized · 3 items flagged</i></p><em>Review</em></article><article><span>→</span><p><small>14:24</small><b>Routed a contract for approval</b><i>Threshold policy triggered · Finance notified</i></p><em>Waiting</em></article></div></section>
      <aside className="ops-metrics"><small>TODAY</small><div><b>42.5h</b><span>returned to the team</span></div><div><b>96%</b><span>completed without escalation</span></div><div className="ops-chart"><i/><i/><i/><i/><i/><i/><i/></div></aside>
    </div>
  </div>;
}

function SystemsScene() {
  return <div className="story-scene systems-scene" aria-label="AI workflow connecting business systems">
    <div className="scene-bar"><span>CLIENT REQUEST / WORKFLOW</span><b>8 steps · 5 systems</b></div>
    <div className="systems-canvas">
      <div className="system-node email"><span>✉</span><p><b>New email</b><small>Inquiry received</small></p></div>
      <div className="system-node document"><span>▤</span><p><b>Documents</b><small>Data extracted</small></p></div>
      <div className="system-node agent"><span>✦</span><p><b>Seestemic agent</b><small>Qualify · decide · coordinate</small></p><i/><i/><i/></div>
      <div className="system-node crm"><span>▦</span><p><b>CRM</b><small>Record enriched</small></p></div>
      <div className="system-node approval"><span>✓</span><p><b>Human approval</b><small>Commercial review</small></p></div>
      <div className="system-node calendar"><span>□</span><p><b>Calendar</b><small>Follow-up booked</small></p></div>
      <svg className="system-paths" viewBox="0 0 900 390" preserveAspectRatio="none" aria-hidden="true"><path d="M165 88 C280 88 250 190 398 190"/><path d="M165 300 C280 300 250 205 398 205"/><path d="M510 190 C630 190 610 86 740 86"/><path d="M510 205 C625 205 615 200 740 200"/><path d="M510 215 C635 215 610 310 740 310"/></svg>
      <div className="system-pulse p1"/><div className="system-pulse p2"/><div className="system-pulse p3"/>
    </div>
  </div>;
}

function EnablementScene() {
  return <div className="story-scene enablement-scene" aria-label="Supported AI agent platforms connected through a company enablement layer">
    <div className="enablement-top"><div><small>YOUR AI ECOSYSTEM</small><b>Tools your team already uses</b></div><span><i/> Vendor-neutral</span></div>
    <div className="agent-platform-grid">{agentPlatforms.map(platform=><div className="agent-platform" key={platform.name}><AgentPlatformIcon platform={platform}/><p><b>{platform.name}</b><small>{platform.category}</small></p><span>✓</span></div>)}</div>
    <div className="enablement-layer"><div><small>SEESTEMIC ENABLEMENT LAYER</small><b>Make every tool work with your business—not around it.</b></div><ul><li><span>01</span>Company context</li><li><span>02</span>Custom skills & workflows</li><li><span>03</span>Security & governance</li><li><span>04</span>Training & adoption</li></ul></div>
  </div>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header page-shell">
        <a href="#top" aria-label="Seestemic home"><Brand /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#approach">Approach</a>
          <a href="#company">Company</a>
        </nav>
        <a className="header-cta" href="mailto:hello@seestemic.com">Start a conversation <Arrow /></a>
        <details className="mobile-nav"><summary aria-label="Open navigation"><i /><i /></summary><div><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#company">Company</a><a href="mailto:hello@seestemic.com">Start a conversation</a></div></details>
      </header>

      <section className="hero page-shell">
        <div className="hero-kicker"><span>YOUR LONG-TERM AI PARTNER</span><i>Strategy · Systems · Adoption</i></div>
        <h1>Put AI to work across your business.</h1>
        <div className="hero-bottom">
          <p>We work alongside your team to find the right opportunities, build the agents and workflows, and teach your people how to use them—securely and measurably.</p>
          <div className="hero-actions"><a className="primary-button" href="mailto:hello@seestemic.com">Find your first AI opportunity <Arrow /></a><a className="text-button" href="#capabilities">See a workflow in action <span>↓</span></a></div>
        </div>
      </section>

      <section className="demo-wrap page-shell">
        <WorkflowDemo />
        <div className="demo-caption"><p><span>01</span> One workflow, from request to result.</p><p>AI handles the coordination. Your team keeps control.</p></div>
      </section>

      <section className="proof-strip page-shell">
        <div><small>EXPERIENCE</small><b>12+ years building enterprise software</b></div>
        <div><small>DELIVERY</small><b>From strategy to working systems</b></div>
        <div><small>INTEGRATION</small><b>Built around the tools you already use</b></div>
        <div><small>CONTROL</small><b>Human oversight where it matters</b></div>
      </section>

      <section className="opportunity-section page-shell" id="company">
        <span className="section-index">01 / FIND THE VALUE</span>
        <div className="opportunity-head"><h2>We don’t start with an AI product.<br/>We start with where AI creates the clearest return.</h2><p>Together, we identify the opportunities worth pursuing, what to postpone, and how success will be measured—before technology becomes the answer.</p></div>
        <div className="opportunity-workspace"><OpportunityMap/><aside className="decision-panel"><span>WHAT WE DECIDE TOGETHER</span><ol><li><i>01</i><p><b>Business outcome</b><small>What should improve—and by how much?</small></p></li><li><i>02</i><p><b>Workflow and data</b><small>Where does the work happen today?</small></p></li><li><i>03</i><p><b>Controls and ownership</b><small>Where should people review or approve?</small></p></li><li><i>04</i><p><b>Success measure</b><small>How will we know it is creating value?</small></p></li></ol><div><small>FIRST DELIVERABLE</small><b>A prioritized AI roadmap tied to business value.</b></div></aside></div>
      </section>

      <section className="build-overview page-shell" id="capabilities">
        <span className="section-index">02 / WHAT WE CAN BUILD</span>
        <div className="build-overview-head"><h2>What we can build.</h2><p>Four practical ways to remove repetitive work, improve response times, and give your team more capacity—built around the systems you already use.</p></div>
        <div className="capability-grid">{buildCapabilities.map((capability, index) => <article className="capability-card" key={capability.title}><div className="capability-number">0{index + 1}</div><CapabilityVisual type={capability.visual}/><div className="capability-copy"><span>{capability.eyebrow}</span><h3>{capability.title}</h3><p>{capability.description}</p><ul>{capability.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
        <div className="capability-bridge"><span>A CLOSER LOOK</span><p>Explore how three of these systems work in practice.</p><i>↓</i></div>
      </section>

      <section className="story-chapter"><article className="story-block page-shell"><div className="story-copy"><span>01 / AUTONOMOUS OPERATIONS</span><h3>Agents turn busywork into progress.</h3><p>Always-on agents monitor the work your business generates, make routine decisions, and keep operations moving—even when nobody is watching a queue.</p><ul><li>Monitor inboxes, orders and documents</li><li>Resolve routine exceptions</li><li>Prepare reports and trigger next steps</li></ul></div><OperationsScene /></article></section>

      <section className="story-chapter story-chapter-tint"><article className="story-block reverse page-shell"><div className="story-copy"><span>02 / CONNECTED WORKFLOWS</span><h3>One workflow. Every system.</h3><p>AI connects the tools you already use, moving information between them without copy-paste work, missed handoffs, or another dashboard for your team to maintain.</p><ul><li>Email, CRM and document automation</li><li>Human approvals at the right moments</li><li>Clear audit trail from start to finish</li></ul></div><SystemsScene /></article></section>

      <section className="story-chapter"><article className="story-block page-shell"><div className="story-copy"><span>03 / AI ENABLEMENT</span><h3>Your team already uses AI. Make it work like a system.</h3><p>We help you choose where tools like Codex, Claude Code, Copilot, ChatGPT, Cursor, and Gemini fit—then connect them to the right company context, workflows, controls, and people.</p><ul><li>Standardize tools, access, and guardrails</li><li>Build role-specific agents, skills, and automations</li><li>Train teams and measure real adoption</li></ul></div><EnablementScene /></article></section>

      <section className="partner-section" id="partnership"><div className="page-shell"><span className="section-index">03 / THE PARTNERSHIP</span><div className="partner-head"><h2>One partner.<br/>From first opportunity<br/>to everyday capability.</h2><p>We do more than deliver software. We work alongside your leaders and teams to choose the right problems, build useful systems, and make AI a capability your business can confidently grow.</p></div><div className="partner-path"><article><span>01</span><b>Find the value</b><p>Opportunity mapping tied to practical business outcomes.</p></article><article><span>02</span><b>Build it around you</b><p>Custom agents and workflows connected to your current tools.</p></article><article className="training-card"><span>03</span><small>TRAINING INCLUDED</small><b>Teach the team</b><p>Role-based workshops, practical playbooks, and hands-on guidance.</p></article><article><span>04</span><b>Improve what works</b><p>Ongoing monitoring, refinement, and expansion after launch.</p></article></div><div className="partner-note"><span>ENABLEMENT, NOT A HANDOVER</span><h3>Your people should understand the system—not depend on us to operate it.</h3><p>We train employees to use AI responsibly, recognize where it helps, review its work, and build better habits around it. When new opportunities emerge, we are still there to help.</p></div></div></section>

      <section className="approach page-shell" id="approach"><span className="section-index">04 / HOW WE WORK</span><div className="approach-head"><h2>Start focused.<br/>Prove value.<br/>Expand with confidence.</h2><p>A transparent process that turns opportunity into a working capability—without forcing your business into a long transformation program.</p></div><div className="process-grid">{process.map(([number,title,description,output],index)=><article key={title}><div><span>{number}</span>{index<3&&<i/>}</div><h3>{title}</h3><p>{description}</p><div className="process-output"><small>YOU RECEIVE</small><b>{output}</b></div></article>)}</div></section>

      <section className="credibility" id="company-details"><div className="page-shell credibility-inner"><span className="section-index light">05 / WHY SEESTEMIC</span><div className="credibility-main"><h2>Senior engineering.<br/>Business-first delivery.<br/><span>Built for the long term.</span></h2><p>Technology only matters when people can put it to work. We bring product thinking, enterprise engineering experience, and hands-on enablement to every engagement.</p></div><div className="credibility-facts"><div><b>12+</b><span>years building enterprise software</span></div><div><b>01</b><span>accountable partner from strategy through adoption</span></div><div><b>∞</b><span>continuous improvement after launch</span></div></div></div></section>

      <section className="testimonials page-shell"><span className="section-index">06 / CLIENT PERSPECTIVE</span><div className="testimonials-head"><h2>Built for outcomes,<br/>not optics.</h2><p>Sample testimonial copy to show the intended direction. Replace these with verified client stories as they become available.</p></div><div className="testimonial-grid">{testimonials.map((testimonial, index) => <article className={index === 0 ? "featured" : ""} key={testimonial.name}><span className="sample-label">SAMPLE COPY · REPLACE LATER</span><blockquote>“{testimonial.quote}”</blockquote><footer><div className="testimonial-avatar">{testimonial.name.split(" ").map(part => part[0]).join("")}</div><p><b>{testimonial.name}</b><small>{testimonial.role}</small></p></footer></article>)}</div></section>

      <section className="payback-section page-shell"><span className="section-index">07 / WHERE AI PAYS BACK</span><div className="payback-head"><h2>Where AI usually<br/>pays back first.</h2><p>The strongest opportunities often share the same underlying pattern: frequent work, clear rules, and valuable employee attention being consumed by coordination or searching.</p></div><div className="payback-grid">{paybackAreas.map(area => <article key={area.title}><div className="payback-number">{area.number}</div><PaybackVisual type={area.visual}/><div className="payback-copy"><span>{area.eyebrow}</span><h3>{area.title}</h3><p>{area.description}</p><ul>{area.examples.map(example => <li key={example}>{example}</li>)}</ul><footer><small>OFTEN RELEVANT TO</small><b>{area.industries}</b></footer></div></article>)}</div><div className="payback-note"><span>SAME PATTERNS. DIFFERENT REALITIES.</span><p>We learn your industry through its workflows, constraints, data, and people—then tailor the solution around how your business actually operates.</p></div></section>

      <section className="faq page-shell"><div className="faq-title"><span className="section-index">08 / FAQ</span><h2>Clear answers.<br/>No AI theatre.</h2><a href="mailto:hello@seestemic.com">Ask us directly <Arrow /></a></div><div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<i>+</i></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta page-shell"><div className="cta-copy"><span>YOUR FIRST USEFUL AI WORKFLOW</span><h2>What should AI<br/>take off your plate?</h2><p>Bring us one repetitive process, slow handoff, or overloaded team. We’ll help you see what is possible and where to begin.</p><a href="mailto:hello@seestemic.com">Find your first AI opportunity <Arrow /></a></div><div className="cta-graphic" aria-hidden="true"><div className="cta-core"><span>✦</span><i/><i/><i/></div><div className="orbit orbit-a"><span>EMAIL</span></div><div className="orbit orbit-b"><span>CRM</span></div><div className="orbit orbit-c"><span>DOCS</span></div><div className="orbit orbit-d"><span>TEAM</span></div></div></section>

      <footer className="site-footer page-shell"><div className="footer-main"><div><Brand/><p>AI strategy, custom agents, connected workflows, and team enablement for businesses ready to work smarter.</p><a href="mailto:hello@seestemic.com">hello@seestemic.com <Arrow /></a></div><div><b>Explore</b><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#company">Company</a></div><div><b>Connect</b><a href="mailto:hello@seestemic.com">Contact</a><a href="#linkedin">LinkedIn</a></div><div><b>Legal</b><a href="#privacy">Privacy</a></div></div><div className="footer-bottom"><span>© 2026 Seestemic</span><span>AI that works for business.</span></div></footer>
    </main>
  );
}
