import { useState } from 'react';
import {
  components,
  loopSteps,
  autonomyLevels,
  useCases,
  patterns,
  challenges,
  bestPractices,
  faqs,
} from './data.js';

const sections = [
  { id: 'what', label: 'What' },
  { id: 'components', label: 'Components' },
  { id: 'loop', label: 'Agent Loop' },
  { id: 'autonomy', label: 'Autonomy' },
  { id: 'patterns', label: 'Patterns' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'challenges', label: 'Challenges' },
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

function Card({ icon, title, text }) {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
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
          {sections.map((s) => (
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
        </Section>

        <Section id="components" title="Core Components" subtitle="The building blocks most AI agents share.">
          <div className="grid">
            {components.map((c) => <Card key={c.title} {...c} />)}
          </div>
        </Section>

        <Section
          id="loop"
          title="The Agent Loop"
          subtitle="Agents run in a cycle until the goal is reached. Click through the steps."
        >
          <AgentLoop />
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
