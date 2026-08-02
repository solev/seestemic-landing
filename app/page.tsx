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
  ["01", "Discover", "Find the work where AI can create the clearest return."],
  ["02", "Design", "Map the workflow, controls, data, and success measures."],
  ["03", "Build", "Ship a useful first version inside the tools your team knows."],
  ["04", "Improve", "Measure adoption, refine performance, and expand what works."],
];

const faqs = [
  ["Do we need technical knowledge?", "No. We translate business needs into a practical plan, handle the technical delivery, and make sure your team understands how to use what we build."],
  ["Can AI work with our current software?", "Usually, yes. We design around your existing tools—such as Microsoft 365, Google Workspace, CRM platforms, support systems, document stores, and custom applications."],
  ["How quickly can we see value?", "A focused first workflow can often be operating within 3–6 weeks. Larger programs are delivered in stages so useful results arrive early."],
  ["How do you protect company data?", "Security, access boundaries, human approvals, auditability, and suitable model providers are designed into the solution from the start."],
  ["Will you train our employees?", "Yes. Adoption is part of the work. We provide role-specific training, playbooks, and practical guidance so teams know when and how to use AI well."],
];

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

function CopilotScene() {
  return <div className="story-scene copilot-scene" aria-label="Internal AI copilot using company knowledge">
    <div className="copilot-nav"><span className="brand-mark small">S</span><i>⌕</i><i>◇</i><i>▦</i><em/><i>?</i></div>
    <div className="copilot-main"><div className="copilot-head"><p><small>OPERATIONS COPILOT</small><b>Ask the company</b></p><span>Private workspace</span></div><div className="copilot-question">How do we approve a new supplier above €10,000?<span>↵</span></div><div className="copilot-answer"><div className="answer-avatar">✦</div><div><small>ANSWERED FROM APPROVED COMPANY SOURCES</small><p>Complete the supplier assessment, collect the required compliance documents, and route contracts above €10,000 to Finance for approval.</p><div className="answer-steps"><span><i>1</i>Open assessment</span><span><i>2</i>Collect documents</span><span><i>3</i>Send to Finance</span></div><div className="sources"><b>SOURCES</b><span>Procurement SOP-014</span><span>Finance approval policy</span></div></div></div></div>
    <aside className="copilot-side"><small>QUICK ACTIONS</small><button>Start supplier assessment <span>↗</span></button><button>Summarize a contract <span>↗</span></button><button>Find a company policy <span>↗</span></button><div><span>SECURE BY DESIGN</span><p>Answers respect employee permissions and cite every source.</p></div></aside>
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

      <section className="manifesto page-shell" id="company">
        <span className="section-index">01 / PRINCIPLE</span>
        <div><h2>AI adoption isn’t a product you buy.<br />It’s a capability you build.</h2><p>We work alongside your team to identify where AI can create a meaningful return, build it into the way your business already operates, and keep improving it as your needs evolve.</p></div>
      </section>

      <section className="stories-intro page-shell" id="capabilities"><span className="section-index">02 / CAPABILITIES</span><div><h2>Three ways AI changes how work moves.</h2><p>Not isolated chatbots. Working systems that understand context, coordinate tools, and give people back their attention.</p></div></section>

      <section className="story-chapter"><article className="story-block page-shell"><div className="story-copy"><span>01 / AUTONOMOUS OPERATIONS</span><h3>Agents turn busywork into progress.</h3><p>Always-on agents monitor the work your business generates, make routine decisions, and keep operations moving—even when nobody is watching a queue.</p><ul><li>Monitor inboxes, orders and documents</li><li>Resolve routine exceptions</li><li>Prepare reports and trigger next steps</li></ul></div><OperationsScene /></article></section>

      <section className="story-chapter story-chapter-tint"><article className="story-block reverse page-shell"><div className="story-copy"><span>02 / CONNECTED WORKFLOWS</span><h3>One workflow. Every system.</h3><p>AI connects the tools you already use, moving information between them without copy-paste work, missed handoffs, or another dashboard for your team to maintain.</p><ul><li>Email, CRM and document automation</li><li>Human approvals at the right moments</li><li>Clear audit trail from start to finish</li></ul></div><SystemsScene /></article></section>

      <section className="story-chapter"><article className="story-block page-shell"><div className="story-copy"><span>03 / INTERNAL COPILOTS</span><h3>Give every employee a capable assistant.</h3><p>Secure copilots grounded in your knowledge help employees find answers, follow procedures, create work, and take action—without losing context or control.</p><ul><li>Answers grounded in company sources</li><li>Role-aware access and permissions</li><li>Practical actions, not just conversation</li></ul></div><CopilotScene /></article></section>

      <section className="partner-section" id="partnership"><div className="page-shell"><span className="section-index">03 / THE PARTNERSHIP</span><div className="partner-head"><h2>One partner.<br/>From first opportunity<br/>to everyday capability.</h2><p>We do more than deliver software. We work alongside your leaders and teams to choose the right problems, build useful systems, and make AI a capability your business can confidently grow.</p></div><div className="partner-path"><article><span>01</span><b>Find the value</b><p>Opportunity mapping tied to practical business outcomes.</p></article><article><span>02</span><b>Build it around you</b><p>Custom agents and workflows connected to your current tools.</p></article><article className="training-card"><span>03</span><small>TRAINING INCLUDED</small><b>Teach the team</b><p>Role-based workshops, practical playbooks, and hands-on guidance.</p></article><article><span>04</span><b>Improve what works</b><p>Ongoing monitoring, refinement, and expansion after launch.</p></article></div><div className="partner-note"><span>ENABLEMENT, NOT A HANDOVER</span><h3>Your people should understand the system—not depend on us to operate it.</h3><p>We train employees to use AI responsibly, recognize where it helps, review its work, and build better habits around it. When new opportunities emerge, we are still there to help.</p></div></div></section>

      <section className="approach page-shell" id="approach"><span className="section-index">04 / HOW WE WORK</span><div className="approach-head"><h2>Start focused.<br/>Prove value.<br/>Expand with confidence.</h2><p>A transparent process that turns opportunity into a working capability—without forcing your business into a long transformation program.</p></div><div className="process-grid">{process.map(([number,title,description],index)=><article key={title}><div><span>{number}</span>{index<3&&<i/>}</div><h3>{title}</h3><p>{description}</p></article>)}</div></section>

      <section className="credibility" id="company-details"><div className="page-shell credibility-inner"><span className="section-index light">05 / WHY SEESTEMIC</span><div className="credibility-main"><h2>Senior engineering.<br/>Business-first delivery.<br/><span>Built for the long term.</span></h2><p>Technology only matters when people can put it to work. We bring product thinking, enterprise engineering experience, and hands-on enablement to every engagement.</p></div><div className="credibility-facts"><div><b>12+</b><span>years building enterprise software</span></div><div><b>01</b><span>accountable partner from strategy through adoption</span></div><div><b>∞</b><span>continuous improvement after launch</span></div></div></div></section>

      <section className="industry-section page-shell"><span className="section-index">06 / BUILT AROUND YOUR BUSINESS</span><div><h2>Different industries.<br/>The same practical standard.</h2><p>We learn the realities of your workflows and design around them. Professional services, real estate, healthcare, manufacturing, e-commerce, finance, logistics, agencies, and SaaS.</p></div></section>

      <section className="faq page-shell"><div className="faq-title"><span className="section-index">07 / FAQ</span><h2>Clear answers.<br/>No AI theatre.</h2><a href="mailto:hello@seestemic.com">Ask us directly <Arrow /></a></div><div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<i>+</i></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta page-shell"><div className="cta-copy"><span>YOUR FIRST USEFUL AI WORKFLOW</span><h2>What should AI<br/>take off your plate?</h2><p>Bring us one repetitive process, slow handoff, or overloaded team. We’ll help you see what is possible and where to begin.</p><a href="mailto:hello@seestemic.com">Find your first AI opportunity <Arrow /></a></div><div className="cta-graphic" aria-hidden="true"><div className="cta-core"><span>✦</span><i/><i/><i/></div><div className="orbit orbit-a"><span>EMAIL</span></div><div className="orbit orbit-b"><span>CRM</span></div><div className="orbit orbit-c"><span>DOCS</span></div><div className="orbit orbit-d"><span>TEAM</span></div></div></section>

      <footer className="site-footer page-shell"><div className="footer-main"><div><Brand/><p>AI strategy, custom agents, connected workflows, and team enablement for businesses ready to work smarter.</p><a href="mailto:hello@seestemic.com">hello@seestemic.com <Arrow /></a></div><div><b>Explore</b><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#company">Company</a></div><div><b>Connect</b><a href="mailto:hello@seestemic.com">Contact</a><a href="#linkedin">LinkedIn</a></div><div><b>Legal</b><a href="#privacy">Privacy</a></div></div><div className="footer-bottom"><span>© 2026 Seestemic</span><span>AI that works for business.</span></div></footer>
    </main>
  );
}
