import { useState } from 'react';
import {
  characteristics,
  comparison,
  timeline,
  components,
  agentTypes,
  memoryTypes,
  loopSteps,
  traceGoal,
  trace,
  autonomyLevels,
  patterns,
  multiAgent,
  toolsProtocols,
  buildSteps,
  agentCode,
  frameworks,
  metrics,
  benchmarks,
  useCases,
  challenges,
  bestPractices,
  guardrails,
  futureTrends,
  glossary,
  faqs,
} from './data.js';

const navLinks = [
  { id: 'what', label: 'What' },
  { id: 'history', label: 'History' },
  { id: 'components', label: 'How It Works' },
  { id: 'example', label: 'Example' },
  { id: 'patterns', label: 'Patterns' },
  { id: 'build', label: 'Build' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'safety', label: 'Safety' },
  { id: 'future', label: 'Future' },
  { id: 'faq', label: 'FAQ' },
];

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}

function Card({ icon, title, text, children }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
}

function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map((t) => (
        <li key={t.year}>
          <span className="timeline-year">{t.year}</span>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
        </li>
      ))}
    </ol>
  );
}

function MemoryTabs() {
  const [active, setActive] = useState(0);
  const m = memoryTypes[active];

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist">
        {memoryTypes.map((t, i) => (
          <button
            key={t.name}
            role="tab"
            aria-selected={i === active}
            className={`tab ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.icon} {t.name}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        <h3>{m.name} memory</h3>
        <p>{m.text}</p>
        <p className="example"><strong>Example:</strong> {m.example}</p>
      </div>
    </div>
  );
}

function AgentLoop() {
  const [active, setActive] = useState(0);
  const step = loopSteps[active];

  return (
    <div className="loop">
      <div className="loop-steps">
        {loopSteps.map((s, i) => (
          <button
            key={s.name}
            className={`loop-step ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="loop-num">{i + 1}</span>
            {s.name}
          </button>
        ))}
      </div>
      <div className="loop-detail">
        <strong>{step.name}:</strong> {step.detail}
        <div className="loop-actions">
          <button className="btn" onClick={() => setActive((active + 1) % loopSteps.length)}>
            {active === loopSteps.length - 1 ? '↺ Repeat until goal is met' : 'Next step →'}
          </button>
        </div>
      </div>
    </div>
  );
}

const traceLabels = {
  thought: '💭 Thought',
  action: '🛠️ Action',
  observation: '👁️ Observation',
  answer: '✅ Final answer',
};

function Trace() {
  const [shown, setShown] = useState(1);
  const done = shown >= trace.length;

  return (
    <div className="trace">
      <div className="trace-goal">
        <strong>🎯 Goal:</strong> {traceGoal}
      </div>
      <ol className="trace-steps">
        {trace.slice(0, shown).map((t, i) => (
          <li key={i} className={`trace-step ${t.kind}`}>
            <span className="trace-label">{traceLabels[t.kind]}</span>
            {t.kind === 'action' ? <code>{t.text}</code> : <span>{t.text}</span>}
          </li>
        ))}
      </ol>
      <div className="trace-actions">
        {!done && (
          <>
            <button className="btn" onClick={() => setShown(shown + 1)}>Next step →</button>
            <button className="btn btn-ghost" onClick={() => setShown(trace.length)}>Show all</button>
          </>
        )}
        {done && (
          <button className="btn btn-ghost" onClick={() => setShown(1)}>↺ Replay</button>
        )}
        <span className="trace-count">Step {shown} of {trace.length}</span>
      </div>
    </div>
  );
}

function Autonomy() {
  const [selected, setSelected] = useState(3);

  return (
    <div className="autonomy">
      <input
        type="range"
        min="0"
        max={autonomyLevels.length - 1}
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
        aria-label="Autonomy level"
      />
      <div className="autonomy-labels">
        {autonomyLevels.map((l, i) => (
          <span key={l.level} className={i === selected ? 'active' : ''} onClick={() => setSelected(i)}>
            {l.level}
          </span>
        ))}
      </div>
      <div className="card autonomy-card">
        <h3>
          {autonomyLevels[selected].level}: {autonomyLevels[selected].name}
        </h3>
        <p>{autonomyLevels[selected].text}</p>
      </div>
    </div>
  );
}

function Glossary() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const items = glossary.filter(
    (g) => g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)
  );

  return (
    <div className="glossary">
      <input
        className="search"
        type="search"
        placeholder="Search terms…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search glossary"
      />
      <dl className="glossary-list">
        {items.map((g) => (
          <div key={g.term} className="glossary-item">
            <dt>{g.term}</dt>
            <dd>{g.def}</dd>
          </div>
        ))}
      </dl>
      {items.length === 0 && <p className="subtitle">No terms match "{query}".</p>}
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <span>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <p className="faq-a">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav className="nav">
        <a href="#top" className="logo">🤖 Agentic AI</a>
        <div className="nav-links">
          {navLinks.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.label}</a>
          ))}
        </div>
      </nav>

      <header id="top" className="hero">
        <h1>All About <span className="gradient">Agentic AI</span></h1>
        <p>
          AI that doesn't just answer. It plans, uses tools, takes action, and works toward
          goals with growing independence.
        </p>
        <a href="#what" className="btn">Start exploring ↓</a>
      </header>

      <main className="container">
        <Section id="what" title="What is Agentic AI?">
          <div className="two-col">
            <p>
              <strong>Agentic AI</strong> refers to AI systems that can pursue a goal on their own
              over multiple steps. You give one an objective, such as "find and fix the failing
              test" or "book the cheapest flight that fits my calendar". It works out the steps,
              calls the tools it needs, looks at the results, and adjusts until the task is done.
            </p>
            <div className="compare">
              <div>
                <h4>Traditional AI</h4>
                <ul>
                  <li>Responds to a single prompt</li>
                  <li>Produces text or a prediction</li>
                  <li>A person decides what happens next</li>
                </ul>
              </div>
              <div>
                <h4>Agentic AI</h4>
                <ul>
                  <li>Works toward a goal</li>
                  <li>Takes actions with tools</li>
                  <li>Decides its own next step</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="sub-heading">Key characteristics</h3>
          <div className="chips">
            {characteristics.map((c) => (
              <div key={c.name} className="chip">
                <span className="chip-icon">{c.icon}</span>
                <div>
                  <strong>{c.name}</strong>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="sub-heading">Generative AI vs. Agentic AI</h3>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Generative AI</th>
                  <th>Agentic AI</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r.aspect}>
                    <th scope="row">{r.aspect}</th>
                    <td>{r.gen}</td>
                    <td>{r.agentic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="history" title="A Brief History" subtitle="Agents are an old idea in AI. Large language models made them practical.">
          <Timeline />
        </Section>

        <Section id="components" title="Core Components" subtitle="The building blocks most AI agents share.">
          <div className="grid">
            {components.map((c) => <Card key={c.title} {...c} />)}
          </div>
        </Section>

        <Section id="types" title="Types of Agents" subtitle="The classic AI taxonomy, from simplest to most capable.">
          <div className="grid">
            {agentTypes.map((t, i) => (
              <Card key={t.name} icon={`${i + 1}`} title={t.name} text={t.text}>
                <p className="example">e.g. {t.example}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="memory" title="How Agents Remember" subtitle="Agents borrow ideas from human memory. Pick a type.">
          <MemoryTabs />
        </Section>

        <Section
          id="loop"
          title="The Agent Loop"
          subtitle="Agents run in a cycle until the goal is reached. Click through the steps."
        >
          <AgentLoop />
        </Section>

        <Section
          id="example"
          title="Watch an Agent Work"
          subtitle="A step-by-step example of a coding agent using the ReAct pattern."
        >
          <Trace />
        </Section>

        <Section
          id="autonomy"
          title="Levels of Autonomy"
          subtitle="Agency is a spectrum, not an on/off switch. Drag the slider."
        >
          <Autonomy />
        </Section>

        <Section id="patterns" title="Common Design Patterns">
          <div className="list">
            {patterns.map((p) => (
              <div key={p.name} className="list-item">
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="multi-agent" title="Multi-Agent Architectures" subtitle="How teams of agents can be organised.">
          <div className="grid">
            {multiAgent.map((m) => <Card key={m.name} icon={m.icon} title={m.name} text={m.text} />)}
          </div>
        </Section>

        <Section id="tools" title="Tools & Protocols" subtitle="How agents reach beyond the model to act in the world.">
          <div className="grid">
            {toolsProtocols.map((t) => <Card key={t.name} title={t.name} text={t.text} />)}
          </div>
        </Section>

        <Section id="build" title="Build Your First Agent" subtitle="Six steps, and the core loop in about 20 lines.">
          <div className="two-col">
            <ol className="steps">
              {buildSteps.map((s) => (
                <li key={s.title}>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div>
              <pre className="code"><code>{agentCode}</code></pre>
              <p className="note">
                Pseudocode: <code>callModel</code> stands in for your LLM provider's API.
              </p>
            </div>
          </div>

          <h3 className="sub-heading">Popular frameworks</h3>
          <div className="grid">
            {frameworks.map((f) => <Card key={f.name} title={f.name} text={f.text} />)}
          </div>
          <p className="note">The ecosystem moves fast, so check each project's docs for the latest features.</p>
        </Section>

        <Section id="evaluation" title="Measuring Agents" subtitle="If you can't measure it, you can't improve it.">
          <div className="two-col">
            <div>
              <h3 className="col-title">📏 What to measure</h3>
              {metrics.map((m) => (
                <div key={m.name} className="list-item">
                  <h4>{m.name}</h4>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="col-title">🏆 Well-known benchmarks</h3>
              {benchmarks.map((b) => (
                <div key={b.name} className="list-item">
                  <h4>{b.name}</h4>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="use-cases" title="Real-World Use Cases">
          <div className="grid">
            {useCases.map((u) => <Card key={u.title} {...u} />)}
          </div>
        </Section>

        <Section id="challenges" title="Challenges & Best Practices">
          <div className="two-col">
            <div>
              <h3 className="col-title">⚠️ Challenges</h3>
              {challenges.map((c) => (
                <div key={c.title} className="list-item">
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="col-title">✅ Best Practices</h3>
              <ul className="checklist">
                {bestPractices.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="safety" title="Safety Guardrails" subtitle="Defence in depth: no single layer is enough on its own.">
          <div className="layers">
            {guardrails.map((g, i) => (
              <div key={g.layer} className="layer">
                <span className="layer-num">{i + 1}</span>
                <div>
                  <h4>{g.layer}</h4>
                  <p>{g.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="future" title="What's Next" subtitle="Trends shaping the next generation of agents.">
          <div className="grid">
            {futureTrends.map((f) => <Card key={f.title} {...f} />)}
          </div>
        </Section>

        <Section id="glossary" title="Glossary">
          <Glossary />
        </Section>

        <Section id="faq" title="Frequently Asked Questions">
          <Faq />
        </Section>
      </main>

      <footer className="footer">
        <p>Agentic AI: from answering questions to getting things done.</p>
      </footer>
    </>
  );
}
