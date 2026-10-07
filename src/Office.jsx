import { useEffect, useMemo, useState } from 'react';
import Person from './office/Person.jsx';
import {
  AGENTS,
  CARDS,
  COLUMNS,
  PHASES,
  TOTAL,
  stateAt,
  packetPosition,
} from './office/timeline.js';

const guideUrl = import.meta.env.BASE_URL;

const SCREEN_LINES = {
  plan: [[80, '#a78bfa'], [55, '#cbd5e1'], [65, '#cbd5e1'], [40, '#a78bfa'], [70, '#cbd5e1'], [50, '#cbd5e1']],
  research: [[70, '#38bdf8'], [90, '#cbd5e1'], [60, '#cbd5e1'], [75, '#38bdf8'], [85, '#cbd5e1'], [50, '#cbd5e1']],
  design: [[100, '#f9a8d4'], [45, '#c4b5fd'], [45, '#fde68a'], [100, '#f9a8d4'], [30, '#86efac'], [60, '#c4b5fd']],
  code: [[40, '#c084fc'], [70, '#fbbf24'], [55, '#38bdf8'], [80, '#fbbf24'], [35, '#c084fc'], [65, '#4ade80']],
  test: [[60, '#4ade80'], [75, '#4ade80'], [50, '#4ade80'], [70, '#f87171'], [55, '#4ade80'], [65, '#4ade80']],
};

const cq = (v) => `${v}cqw`;

function Desk({ agentId, working }) {
  const { desk, name, role } = AGENTS[agentId];
  const lines = SCREEN_LINES[desk.screen];

  return (
    <div className="desk" style={{ left: cq(desk.x), top: cq(desk.y), zIndex: Math.round(desk.y * 10) }}>
      <div className="monitor">
        <div className={`screen screen-${desk.screen} ${working ? 'on' : ''}`}>
          <div className="screen-scroll">
            {[...lines, ...lines].map(([w, c], i) => (
              <span key={i} style={{ width: `${w}%`, background: c }} />
            ))}
          </div>
        </div>
        <div className="monitor-stand" />
      </div>
      <div className="keyboard" />
      <div className="mug">
        <span className="steam" />
      </div>
      <div className="desk-top" />
      <div className="desk-front">
        <span className="nameplate">{name} · {role}</span>
      </div>
    </div>
  );
}

function Agent({ id, state, celebrate }) {
  const { pos, walking, working, bubble } = state;
  const [x, y] = pos;

  return (
    <div className="agent" style={{ left: cq(x), top: cq(y), zIndex: Math.round(y * 10) }}>
      {bubble && <div className={`bubble bubble-${id}`}>{bubble}</div>}
      <Person look={AGENTS[id].look} walking={walking} working={working} celebrate={celebrate} />
    </div>
  );
}

function TaskBoard({ cards }) {
  const placed = Object.keys(CARDS).filter((id) => cards[id]);

  return (
    <div className="board">
      <div className="board-title">📋 Shared Task Board</div>
      <div className="board-cols">
        {COLUMNS.map((c) => <span key={c}>{c}</span>)}
      </div>
      {placed.map((id) => {
        const { col, bug } = cards[id];
        const row = placed.filter((other) => cards[other].col === col).indexOf(id);
        const owner = AGENTS[CARDS[id].owner];
        return (
          <div
            key={id}
            className={`sticky ${bug ? 'bug' : ''} ${col === 2 ? 'done' : ''}`}
            style={{
              left: `${col * 33.33 + 2.5}%`,
              top: `${30 + row * 17}%`,
              borderLeftColor: owner.look.shirt,
            }}
          >
            {bug ? '🐞 ' : col === 2 ? '✓ ' : ''}
            {CARDS[id].label}
          </div>
        );
      })}
    </div>
  );
}

function Packet({ packet }) {
  const [x, y] = packetPosition(packet);
  return (
    <div className="packet" style={{ left: cq(x), top: cq(y) }}>
      <span>{packet.icon}</span> {packet.label}
    </div>
  );
}

const CONFETTI_COLORS = ['#7c5cff', '#22d3ee', '#f59e0b', '#ec4899', '#22c55e', '#ef4444'];

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        left: (i * 37) % 100,
        delay: ((i * 13) % 20) / 10,
        duration: 2 + ((i * 7) % 10) / 10,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      })),
    []
  );

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <i
          key={i}
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function Scene({ state, paused }) {
  const { agents, cards, packets, celebrate } = state;

  return (
    <div className={`office ${paused ? 'paused' : ''}`} role="img" aria-label="Animated office where AI agents collaborate on a task">
      <div className="wall" />
      <div className="floor" />
      <div className="rug" />

      <div className="window" style={{ left: cq(10) }}>
        <span className="cloud" />
        <span className="cloud cloud-2" />
      </div>
      <div className="window" style={{ left: cq(76) }}>
        <span className="cloud cloud-2" />
        <span className="cloud" />
      </div>
      <div className="door">
        <span className="door-sign">Client</span>
        <span className="knob" />
      </div>
      <div className="clock">
        <span className="hand hour" />
        <span className="hand minute" />
      </div>
      <div className="plant" style={{ left: cq(29), top: cq(24) }}>🪴</div>
      <div className="plant" style={{ left: cq(96), top: cq(62) }}>🪴</div>
      <div className="plant" style={{ left: cq(4), top: cq(62) }}>🌿</div>

      <TaskBoard cards={cards} />

      {Object.keys(AGENTS)
        .filter((id) => AGENTS[id].desk)
        .map((id) => <Desk key={id} agentId={id} working={agents[id].working} />)}

      {Object.keys(AGENTS).map((id) => (
        <Agent key={id} id={id} state={agents[id]} celebrate={celebrate} />
      ))}

      {packets.map((p) => <Packet key={`${p.t}-${p.from}`} packet={p} />)}

      {celebrate && <Confetti />}
    </div>
  );
}

const fmt = (ms) => {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

const concepts = [
  { icon: '🧭', title: 'Orchestrator–workers', text: 'Orion never does the work itself. It plans, delegates, and checks the results, just like a lead agent splitting a task among sub-agents.' },
  { icon: '🔀', title: 'Parallel work', text: 'Auditing the old system and designing the new app don\'t depend on each other, so Riley and Dana work at the same time. That cuts the total time.' },
  { icon: '📨', title: 'Hand-offs', text: 'Agents pass structured outputs (a migration map, screen designs, a solution build) to the next specialist. The flying packets are those messages.' },
  { icon: '📋', title: 'Shared state', text: 'The task board is the team\'s shared memory. Every agent can see what is to do, in progress, and done.' },
  { icon: '🔁', title: 'Review loop', text: 'Tess catches an approval bug and sends it back. Testing and fixing until the checks pass is what makes agent teams reliable.' },
  { icon: '🙋', title: 'Human in the loop', text: 'You set the goal and receive the result. The agents do the busywork, and you stay in charge.' },
];

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function Office() {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(!prefersReducedMotion);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    let id;
    const tick = (now) => {
      const dt = Math.min(now - last, 100);
      last = now;
      setT((prev) => (prev + dt * speed) % TOTAL);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing, speed]);

  const state = stateAt(t);
  const phaseIndex = PHASES.findLastIndex((p) => p.t <= t);
  const feed = [...state.logs].reverse().slice(0, 7);

  return (
    <>
      <nav className="nav">
        <a href={guideUrl} className="logo">🤖 Agentic AI</a>
        <div className="nav-links office-nav">
          <a href={guideUrl}>← Back to the guide</a>
        </div>
      </nav>

      <header className="hero office-hero">
        <h1>The <span className="gradient">Agent Office</span></h1>
        <p>Watch a team of AI agents modernise legacy SharePoint 2016 workflows and InfoPath forms into Power Automate and Power Apps by planning, splitting up the work, handing off results, and fixing bugs together.</p>
      </header>

      <main className="container office-page">
        <div className="controls">
          <button className="btn" onClick={() => setPlaying(!playing)}>
            {playing ? '⏸ Pause' : '▶ Play'}
          </button>
          <button className="btn btn-ghost" onClick={() => { setT(0); setPlaying(true); }}>↺ Restart</button>
          <div className="speed" role="group" aria-label="Playback speed">
            {[0.5, 1, 2].map((s) => (
              <button key={s} className={speed === s ? 'active' : ''} onClick={() => setSpeed(s)}>
                {s}×
              </button>
            ))}
          </div>
          <span className="clock-label">⏱ {fmt(t)} / {fmt(TOTAL)}</span>
        </div>

        <div className="scene-wrap">
          <Scene state={state} paused={!playing} />
        </div>
        <p className="swipe-hint">↔ Swipe sideways to see the whole office</p>

        <div className="phases">
          <div className="phase-progress" style={{ width: `${(t / TOTAL) * 100}%` }} />
          {PHASES.map((p, i) => (
            <button
              key={p.name}
              className={`phase ${i === phaseIndex ? 'active' : ''} ${i < phaseIndex ? 'past' : ''}`}
              onClick={() => setT(p.t + 1)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="office-panels">
          <section className="panel">
            <h2>📜 Activity Feed</h2>
            <ul className="feed">
              {feed.length === 0 && <li className="feed-empty">Waiting for the client to arrive…</li>}
              {feed.map((e) => (
                <li key={`${e.t}-${e.agent}`}>
                  <span className="dot" style={{ background: AGENTS[e.agent].look.shirt }} />
                  <span className="feed-time">{fmt(e.t)}</span>
                  <span>{e.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="panel">
            <h2>👥 The Team</h2>
            <ul className="team">
              {Object.entries(AGENTS).map(([id, a]) => {
                const s = state.agents[id];
                const status = s.bubble || (state.celebrate ? '🎉 Celebrating!' : s.walking ? '🚶 Walking…' : s.working ? '⌨️ Working…' : id === 'user' ? '—' : '💤 Idle');
                return (
                  <li key={id} className={s.working || s.bubble ? 'busy' : ''}>
                    <div className="team-avatar">
                      <Person look={a.look} className="mini" />
                    </div>
                    <div>
                      <strong>{a.name}</strong> <span className="role">{a.role}</span>
                      <p>{status}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <section className="section">
          <h2>What you're seeing</h2>
          <p className="subtitle">Each moment in the animation maps to a real multi-agent pattern.</p>
          <div className="grid">
            {concepts.map((c) => (
              <div key={c.title} className="card">
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p><a href={guideUrl}>← Back to All About Agentic AI</a></p>
      </footer>
    </>
  );
}
