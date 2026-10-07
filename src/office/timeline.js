// The office scene is a pure function of time: every frame is derived from
// this list of scripted events, so pause, speed and scrubbing are trivial.
// Positions are in "cqw" units of the office (width 100, height 62.5).

export const AGENTS = {
  user: {
    name: 'You',
    role: 'Client',
    home: [-6, 33],
    look: { skin: '#f1c27d', hair: '#3b2a1a', hairStyle: 'short', shirt: '#64748b', pants: '#334155' },
  },
  boss: {
    name: 'Orion',
    role: 'Orchestrator',
    home: [50, 37],
    desk: { x: 50, y: 40, screen: 'plan' },
    look: { skin: '#e0ac69', hair: '#1f2937', hairStyle: 'short', shirt: '#7c5cff', pants: '#1e1b4b', accessory: 'headset' },
  },
  researcher: {
    name: 'Riley',
    role: 'Analyst',
    home: [19.5, 55],
    desk: { x: 17, y: 58, screen: 'research' },
    look: { skin: '#c68642', hair: '#111827', hairStyle: 'curly', shirt: '#0ea5e9', pants: '#1e3a5f', accessory: 'glasses' },
  },
  designer: {
    name: 'Dana',
    role: 'Designer',
    home: [41.5, 55],
    desk: { x: 39, y: 58, screen: 'design' },
    look: { skin: '#ffdbac', hair: '#c2410c', hairStyle: 'bun', shirt: '#ec4899', pants: '#4c1d95' },
  },
  coder: {
    name: 'Cody',
    role: 'Developer',
    home: [63.5, 55],
    desk: { x: 61, y: 58, screen: 'code' },
    look: { skin: '#8d5524', hair: '#0f172a', hairStyle: 'short', shirt: '#f59e0b', pants: '#1f2937', accessory: 'headphones' },
  },
  tester: {
    name: 'Tess',
    role: 'Tester',
    home: [85.5, 55],
    desk: { x: 83, y: 58, screen: 'test' },
    look: { skin: '#f1c27d', hair: '#6b4423', hairStyle: 'long', shirt: '#22c55e', pants: '#14532d', accessory: 'glasses' },
  },
};

export const CARDS = {
  research: { label: 'Audit SP2016', owner: 'researcher' },
  design: { label: 'Design app', owner: 'designer' },
  code: { label: 'Build flows', owner: 'coder' },
  test: { label: 'Test & UAT', owner: 'tester' },
};

export const COLUMNS = ['To do', 'Doing', 'Done'];

export const PHASES = [
  { name: 'Brief', t: 0 },
  { name: 'Plan', t: 6000 },
  { name: 'Parallel work', t: 12600 },
  { name: 'Build', t: 21500 },
  { name: 'Test & fix', t: 27700 },
  { name: 'Deliver', t: 39500 },
];

export const TOTAL = 53000;

const walk = (t, agent, to, dur = 1500) => ({ t, type: 'walk', agent, to, dur });
const say = (t, agent, text, dur) => ({ t, type: 'say', agent, text, dur });
const work = (t, agent, on) => ({ t, type: 'work', agent, on });
const send = (t, from, to, icon, label, dur = 1300) => ({ t, type: 'send', from, to, icon, label, dur });
const card = (t, id, col, bug = false) => ({ t, type: 'card', id, col, bug });
const log = (t, agent, text) => ({ t, type: 'log', agent, text });

export const EVENTS = [
  // Brief
  walk(0, 'user', [9, 33], 1600),
  say(1700, 'user', 'New task: rebuild our SharePoint 2016 workflows and InfoPath templates as modern Power Automate flows and Power Apps.', 4600),
  log(1700, 'user', 'You asked the team to migrate SharePoint 2016 workflows and InfoPath forms to Power Automate and Power Apps.'),
  send(2600, 'user', 'boss', '🎯', 'Goal', 1200),
  say(3800, 'boss', 'On it! Let me plan the migration.', 2200),
  log(3800, 'boss', 'Orion, the orchestrator, received the goal.'),

  // Plan
  walk(6000, 'boss', [50, 25.5], 1400),
  say(7400, 'boss', 'Splitting this into 4 tasks…', 3600),
  work(7400, 'boss', true),
  card(7800, 'research', 0),
  card(8400, 'design', 0),
  card(9000, 'code', 0),
  card(9600, 'test', 0),
  log(7800, 'boss', 'Orion broke the goal into 4 tasks on the shared task board.'),
  work(11000, 'boss', false),
  walk(11000, 'boss', [50, 37], 1400),

  // Parallel work
  send(12600, 'boss', 'researcher', '🔎', 'Audit legacy'),
  send(12900, 'boss', 'designer', '🎨', 'Design app'),
  say(12900, 'boss', 'Audit and design can run in parallel.', 2600),
  log(12600, 'boss', 'Orion delegated the legacy audit and the app design. Both run in parallel.'),
  card(13900, 'research', 1),
  work(13900, 'researcher', true),
  say(13900, 'researcher', '🔎 Auditing 14 workflows and 9 InfoPath forms…'),
  card(14200, 'design', 1),
  work(14200, 'designer', true),
  say(14200, 'designer', '🎨 Designing Power Apps screens…'),
  say(17500, 'researcher', 'Every field and approval rule mapped ✔️', 2500),
  work(18500, 'researcher', false),
  card(18500, 'research', 2),
  send(18500, 'researcher', 'coder', '📄', 'Migration map', 1500),
  log(18500, 'researcher', 'Riley handed the migration map (fields, rules, approvals) to Cody.'),
  say(19300, 'designer', 'Canvas app screens ready! ✨', 2200),
  work(20000, 'designer', false),
  card(20000, 'design', 2),
  send(20000, 'designer', 'coder', '🖼️', 'App screens', 1300),
  log(20000, 'designer', 'Dana handed the Power Apps screen designs to Cody.'),

  // Build
  card(21500, 'code', 1),
  work(21500, 'coder', true),
  say(21500, 'coder', '⚡ Building Power Automate flows and the Power App…'),
  log(21500, 'coder', 'Cody started building once both inputs arrived.'),
  say(22500, 'researcher', '☕ Coffee break!', 2500),
  say(23200, 'designer', '☕ Me too!', 2000),
  say(26000, 'coder', 'Done! Sending it to Tess.', 1800),
  work(26500, 'coder', false),
  card(26500, 'code', 2),
  send(26500, 'coder', 'tester', '📦', 'Solution v1', 1200),
  log(26500, 'coder', 'Cody passed version 1 of the flows and app to Tess for testing.'),

  // Test & fix
  card(27700, 'test', 1),
  work(27700, 'tester', true),
  say(27700, 'tester', '🧪 Testing approvals end to end…'),
  say(30500, 'tester', '🐞 Bug! Approvals still go to the old SP2016 group.'),
  work(30500, 'tester', false),
  card(30500, 'code', 1, true),
  log(30500, 'tester', 'Tess found a bug and sent it back. This is a review loop.'),
  send(31200, 'tester', 'coder', '🐞', 'Bug report', 1200),
  say(32400, 'tester', 'Waiting for the fix…'),
  work(32400, 'coder', true),
  say(32400, 'coder', '🔧 Pointing approvals to the new Microsoft 365 group…'),
  say(35000, 'coder', 'Fixed! ✅', 1500),
  work(35000, 'coder', false),
  card(35000, 'code', 2),
  send(35000, 'coder', 'tester', '📦', 'Solution v2', 1200),
  log(35000, 'coder', 'Cody fixed the bug and sent version 2.'),
  work(36300, 'tester', true),
  say(36300, 'tester', '🧪 Re-running test cases…'),
  say(38800, 'tester', '✅ All 18 test cases pass!', 2500),
  work(38800, 'tester', false),
  card(38800, 'test', 2),
  log(38800, 'tester', 'All tests pass. Every task is done.'),

  // Deliver
  send(39500, 'tester', 'boss', '📋', 'Test report', 1500),
  log(39500, 'tester', 'Tess reported the results back to Orion.'),
  say(41000, 'boss', 'Reviewing the solution…', 1800),
  work(41000, 'boss', true),
  work(42800, 'boss', false),
  walk(42800, 'boss', [16, 33], 1700),
  say(44500, 'boss', 'Your new Power Automate flows and Power App are ready! 🚀', 3000),
  send(45000, 'boss', 'user', '🚀', 'Modern solution', 1000),
  log(45000, 'boss', 'Orion delivered the modernised workflows and forms to you.'),
  say(46200, 'user', 'Goodbye InfoPath, thank you! 🙌', 3000),
  { t: 46200, type: 'celebrate', dur: 3800 },
  walk(50200, 'boss', [50, 37], 1700),
  walk(50200, 'user', [-6, 33], 1600),
].sort((a, b) => a.t - b.t);

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const ease = (p) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);

export function stateAt(t) {
  const agents = {};
  for (const [id, a] of Object.entries(AGENTS)) {
    agents[id] = { pos: [...a.home], walking: false, working: false, bubble: null };
  }
  const cards = {};
  const packets = [];
  const logs = [];
  let celebrate = false;

  for (const ev of EVENTS) {
    if (ev.t > t) break;
    const end = ev.t + (ev.dur ?? 0);

    switch (ev.type) {
      case 'walk': {
        const a = agents[ev.agent];
        const p = clamp01((t - ev.t) / ev.dur);
        const from = a.pos;
        a.pos = [from[0] + (ev.to[0] - from[0]) * ease(p), from[1] + (ev.to[1] - from[1]) * ease(p)];
        a.walking = p < 1;
        break;
      }
      case 'say':
        agents[ev.agent].bubble = ev.dur && t >= end ? null : ev.text;
        break;
      case 'work':
        agents[ev.agent].working = ev.on;
        break;
      case 'card':
        cards[ev.id] = { col: ev.col, bug: ev.bug };
        break;
      case 'send':
        if (t < end) {
          const from = agents[ev.from].pos;
          const to = agents[ev.to].pos;
          packets.push({ ...ev, from, to, p: (t - ev.t) / ev.dur });
        }
        break;
      case 'log':
        logs.push(ev);
        break;
      case 'celebrate':
        celebrate = t < end;
        break;
    }
  }

  return { agents, cards, packets, logs, celebrate };
}

export function packetPosition({ from, to, p }) {
  const e = ease(p);
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  // Start and end around chest height and arc upward in between; short
  // hand-offs get a flatter arc so they don't cover speech bubbles.
  const arc = Math.min(6, Math.hypot(dx, dy) * 0.35);
  return [from[0] + dx * e, from[1] - 4 + dy * e - Math.sin(Math.PI * p) * arc];
}
