export const components = [
  {
    icon: '👁️',
    title: 'Perception',
    text: 'Takes in its surroundings: user requests, documents, API responses, screenshots, sensor data, or the results of its own earlier actions.',
  },
  {
    icon: '🧠',
    title: 'Reasoning & Planning',
    text: 'Usually powered by a large language model. It breaks a goal into steps, picks a strategy, and changes the plan when new information comes in.',
  },
  {
    icon: '🗂️',
    title: 'Memory',
    text: 'Short-term memory holds the current task in context. Long-term memory (files, databases, vector stores) keeps facts and lessons between sessions.',
  },
  {
    icon: '🛠️',
    title: 'Tool Use',
    text: 'Calls external tools such as search, code execution, browsers, APIs, and databases, so it can act on the world and not just talk about it.',
  },
  {
    icon: '⚡',
    title: 'Action',
    text: 'Carries out the chosen step, like writing a file, sending a request, clicking a button, or delegating to another agent.',
  },
  {
    icon: '🔁',
    title: 'Reflection',
    text: 'Checks results against the goal, notices mistakes, and corrects course. This is what makes it an agent rather than a one-shot answer.',
  },
];

export const loopSteps = [
  { name: 'Goal', detail: 'A person or system sets an objective.' },
  { name: 'Observe', detail: 'Collect context and the current state.' },
  { name: 'Think', detail: 'Reason about the next best step.' },
  { name: 'Act', detail: 'Call a tool or take an action.' },
  { name: 'Evaluate', detail: 'Check the result. Is the goal met?' },
];

export const autonomyLevels = [
  {
    level: 'Level 0',
    name: 'Chat assistant',
    text: 'Answers a single prompt. No tools and no persistence. A person does all the acting.',
  },
  {
    level: 'Level 1',
    name: 'Tool-augmented',
    text: 'Can call a tool such as search or a calculator when asked, inside one turn.',
  },
  {
    level: 'Level 2',
    name: 'Workflow agent',
    text: 'Follows a predefined multi-step workflow. The model fills in the steps, but the path is fixed by developers.',
  },
  {
    level: 'Level 3',
    name: 'Autonomous agent',
    text: 'Chooses its own steps and tools in a loop until the goal is done, and checks in with people at key points.',
  },
  {
    level: 'Level 4',
    name: 'Multi-agent system',
    text: 'Several specialised agents (planner, researcher, coder, reviewer) work together and hand tasks to one another.',
  },
];

export const useCases = [
  { icon: '💻', title: 'Software Engineering', text: 'Coding agents read codebases, fix bugs, write tests, run CI, and open pull requests.' },
  { icon: '🔬', title: 'Research', text: 'Agents search many sources, compare findings, and write cited reports.' },
  { icon: '🎧', title: 'Customer Support', text: 'Agents look up orders, issue refunds, and resolve tickets from start to finish.' },
  { icon: '📊', title: 'Data Analysis', text: 'Agents query databases, clean data, build charts, and explain what they find.' },
  { icon: '🧾', title: 'Operations', text: 'Agents automate back-office work like invoices, scheduling, and report generation.' },
  { icon: '🛡️', title: 'Security', text: 'Agents triage alerts, investigate incidents, and suggest fixes.' },
];

export const patterns = [
  { name: 'ReAct', text: 'Alternates reasoning ("thought") and acting ("tool call") in a loop, using each observation to guide the next step.' },
  { name: 'Plan-and-Execute', text: 'Writes a full plan first, then works through it step by step, re-planning when something fails.' },
  { name: 'Reflection / Self-Critique', text: 'The agent (or a second "critic" model) reviews its own output and revises it before finishing.' },
  { name: 'Orchestrator–Workers', text: 'A lead agent splits a task and sends parts to sub-agents that run in parallel, then combines their results.' },
  { name: 'Human-in-the-Loop', text: 'The agent pauses for approval before risky or irreversible actions such as payments, deletions, or deployments.' },
];

export const challenges = [
  { title: 'Reliability', text: 'Small errors add up over long tasks. One wrong step early on can derail everything after it.' },
  { title: 'Safety & Security', text: 'Agents that act in the world can do real damage. Prompt injection from untrusted content is a major risk.' },
  { title: 'Cost & Latency', text: 'Many model calls and tool calls per task can be slow and expensive.' },
  { title: 'Evaluation', text: 'Open-ended, multi-step behaviour is much harder to test than a single answer.' },
  { title: 'Accountability', text: 'Who is responsible when an autonomous agent makes a mistake? Clear audit trails matter.' },
];

export const bestPractices = [
  'Start simple. Use a fixed workflow before reaching for full autonomy.',
  'Give agents clear goals, well-documented tools, and explicit stopping conditions.',
  'Apply least privilege: only grant the permissions a task actually needs.',
  'Keep a human in the loop for high-impact or irreversible actions.',
  'Log every step so behaviour can be traced, debugged, and audited.',
  'Treat content from the web, emails, and documents as untrusted data, not instructions.',
  'Build evaluations from real tasks and run them continuously.',
];

export const faqs = [
  {
    q: 'How is agentic AI different from a chatbot?',
    a: 'A chatbot replies to messages. An agent pursues a goal: it plans, uses tools, takes actions, and keeps going over many steps until the job is done.',
  },
  {
    q: 'Does an agent need a large language model?',
    a: 'Not strictly. Classic AI agents existed long before LLMs. But today most general-purpose agents use an LLM as their reasoning engine because it handles open-ended language and planning well.',
  },
  {
    q: 'What is a "tool" for an agent?',
    a: 'Any function the agent can call, such as a web search, a database query, a code interpreter, or an API. The model decides when to call it and with which arguments; the surrounding software runs it and returns the result.',
  },
  {
    q: 'Will agents replace people?',
    a: 'They are best at taking over repetitive, well-defined tasks. People still set goals, make judgement calls, and stay accountable for the outcome.',
  },
];
