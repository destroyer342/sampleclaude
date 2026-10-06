export const characteristics = [
  { icon: '🎯', name: 'Goal-directed', text: 'Works toward an outcome, not just a single reply.' },
  { icon: '🧭', name: 'Autonomous', text: 'Decides its own next step without a person driving each move.' },
  { icon: '🛠️', name: 'Tool-using', text: 'Acts through APIs, code, browsers, and other software.' },
  { icon: '🔄', name: 'Adaptive', text: 'Changes its plan when results or conditions change.' },
  { icon: '💾', name: 'Stateful', text: 'Remembers context within a task and, often, across tasks.' },
  { icon: '🤝', name: 'Collaborative', text: 'Works alongside people and other agents.' },
];

export const comparison = [
  { aspect: 'Main output', gen: 'Content (text, images, code)', agentic: 'Completed tasks and outcomes' },
  { aspect: 'Interaction', gen: 'One prompt → one response', agentic: 'One goal → many steps' },
  { aspect: 'Who decides the next step', gen: 'The person', agentic: 'The agent (within limits)' },
  { aspect: 'Tools', gen: 'Optional or none', agentic: 'Central to how it works' },
  { aspect: 'Memory', gen: 'Usually just the conversation', agentic: 'Working memory plus long-term stores' },
  { aspect: 'Example', gen: '"Write an email to the supplier."', agentic: '"Sort out the late delivery with the supplier."' },
];

export const timeline = [
  {
    year: '1966–1972',
    title: 'Shakey the Robot',
    text: 'SRI\'s Shakey combined perception, planning (the STRIPS planner) and action. It was one of the first systems to reason about its own actions.',
  },
  {
    year: '1990s',
    title: 'Intelligent Agents & BDI',
    text: 'The Belief–Desire–Intention model described how software agents reason about goals. AI textbooks began to define AI as the study of rational agents.',
  },
  {
    year: '2013–2016',
    title: 'Deep Reinforcement Learning',
    text: 'Agents learned to play Atari games straight from pixels, and AlphaGo beat a world champion at Go. Learning by trial and error had arrived.',
  },
  {
    year: '2022',
    title: 'LLMs Learn to Act',
    text: 'The ReAct paper showed that language models can interleave reasoning with actions. ChatGPT brought large language models to the mainstream.',
  },
  {
    year: '2023',
    title: 'Tool Use Goes Mainstream',
    text: 'LLM APIs added function calling. Open-source experiments like AutoGPT and BabyAGI showed (unreliable) fully autonomous loops.',
  },
  {
    year: '2024',
    title: 'Standards & Computer Use',
    text: 'The Model Context Protocol (MCP) gave agents a standard way to connect to tools and data, and models began operating real desktops and browsers.',
  },
  {
    year: '2025',
    title: 'Agents at Work',
    text: 'Coding agents and deep-research agents became everyday tools. Protocols such as Agent2Agent (A2A) aimed to let agents from different vendors work together.',
  },
  {
    year: 'Today',
    title: 'Longer, Safer, More Capable',
    text: 'The focus has shifted to agents that run reliably for hours, with better evaluation, permissions, and oversight.',
  },
];

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

export const agentTypes = [
  {
    name: 'Simple Reflex',
    text: 'Reacts to what it sees right now using if-then rules.',
    example: 'A thermostat turning on the heat below 20°C.',
  },
  {
    name: 'Model-Based',
    text: 'Keeps an internal picture of the world, so it can act on things it can\'t currently see.',
    example: 'A robot vacuum that maps rooms it has already cleaned.',
  },
  {
    name: 'Goal-Based',
    text: 'Considers which actions bring it closer to a goal, and plans ahead.',
    example: 'A navigation app planning a route to your destination.',
  },
  {
    name: 'Utility-Based',
    text: 'Weighs trade-offs to choose the best outcome, not just any outcome that reaches the goal.',
    example: 'A trip planner balancing price, travel time, and comfort.',
  },
  {
    name: 'Learning',
    text: 'Improves its behaviour over time from feedback and experience.',
    example: 'A recommendation agent that adapts to what you click.',
  },
];

export const memoryTypes = [
  {
    name: 'Working',
    icon: '📝',
    text: 'What the agent is thinking about right now: the conversation, the plan, and recent tool results. It lives in the model\'s context window, so it is fast but limited in size.',
    example: 'The error message the agent just read from a test run.',
  },
  {
    name: 'Episodic',
    icon: '📅',
    text: 'Records of past events and interactions. It lets an agent recall what happened before and avoid repeating mistakes.',
    example: '"Last time I deployed on a Friday, the build cache was stale."',
  },
  {
    name: 'Semantic',
    icon: '📚',
    text: 'Facts and knowledge about the world, the user, or a domain. Often stored in documents or a vector database and pulled in with retrieval (RAG).',
    example: '"The customer prefers email over phone calls."',
  },
  {
    name: 'Procedural',
    icon: '⚙️',
    text: 'Know-how: skills, instructions, and workflows the agent can reuse. Often kept as system prompts, playbooks, or saved "skills".',
    example: 'The step-by-step checklist for releasing a new version.',
  },
];

export const loopSteps = [
  { name: 'Goal', detail: 'A person or system sets an objective.' },
  { name: 'Observe', detail: 'Collect context and the current state.' },
  { name: 'Think', detail: 'Reason about the next best step.' },
  { name: 'Act', detail: 'Call a tool or take an action.' },
  { name: 'Evaluate', detail: 'Check the result. Is the goal met?' },
];

export const traceGoal = 'The checkout test is failing. Find out why and fix it.';

export const trace = [
  { kind: 'thought', text: 'First I need to see the actual failure. I\'ll run the test suite.' },
  { kind: 'action', text: 'run_tests()' },
  { kind: 'observation', text: 'FAIL checkout.test.js: expected total 108.00, received 100.00 (41 passed, 1 failed)' },
  { kind: 'thought', text: 'The total is missing 8% — probably sales tax. Let me look at how the total is calculated.' },
  { kind: 'action', text: 'read_file("src/cart.js")' },
  { kind: 'observation', text: 'calculateTotal() returns subtotal + shipping. taxRate is read from config but never used.' },
  { kind: 'thought', text: 'Found it: tax is never applied. I\'ll add it to the total.' },
  { kind: 'action', text: 'edit_file("src/cart.js", "return subtotal * (1 + taxRate) + shipping")' },
  { kind: 'observation', text: 'File updated.' },
  { kind: 'action', text: 'run_tests()' },
  { kind: 'observation', text: 'PASS: 42 passed, 0 failed' },
  { kind: 'answer', text: 'Fixed: calculateTotal() ignored the tax rate. It now applies tax, and all 42 tests pass.' },
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

export const patterns = [
  { name: 'ReAct', text: 'Alternates reasoning ("thought") and acting ("tool call") in a loop, using each observation to guide the next step.' },
  { name: 'Plan-and-Execute', text: 'Writes a full plan first, then works through it step by step, re-planning when something fails.' },
  { name: 'Reflection / Self-Critique', text: 'The agent (or a second "critic" model) reviews its own output and revises it before finishing.' },
  { name: 'Routing', text: 'A first step classifies the request and sends it to the specialised prompt, model, or agent best suited to it.' },
  { name: 'Orchestrator–Workers', text: 'A lead agent splits a task and sends parts to sub-agents that run in parallel, then combines their results.' },
  { name: 'Human-in-the-Loop', text: 'The agent pauses for approval before risky or irreversible actions such as payments, deletions, or deployments.' },
];

export const multiAgent = [
  { icon: '🏛️', name: 'Hierarchical', text: 'A supervisor agent assigns work to specialists and reviews what they return.' },
  { icon: '➡️', name: 'Sequential Pipeline', text: 'Each agent does one stage and passes its output on, like an assembly line: research → draft → edit.' },
  { icon: '🔀', name: 'Parallel Fan-out', text: 'Many agents tackle independent parts at the same time, and the results are merged at the end.' },
  { icon: '⚖️', name: 'Debate', text: 'Agents argue different positions or critique each other, and a judge picks the strongest answer.' },
  { icon: '🕸️', name: 'Peer Handoffs', text: 'Agents pass the conversation directly to whichever peer has the right skills, with no central boss.' },
];

export const toolsProtocols = [
  {
    name: 'Function Calling',
    text: 'The model outputs a structured request, such as get_weather(city="Paris"). Your code runs it and returns the result. This is the basic building block of tool use.',
  },
  {
    name: 'Model Context Protocol (MCP)',
    text: 'An open standard for connecting agents to tools and data sources. A tool provider builds one MCP server, and any compatible agent can use it. It is often compared to a "USB-C port" for AI.',
  },
  {
    name: 'Agent-to-Agent (A2A)',
    text: 'A protocol for agents from different vendors to discover each other, share tasks, and exchange results.',
  },
  {
    name: 'Computer Use',
    text: 'The agent sees screenshots and controls the mouse and keyboard, so it can use apps that have no API.',
  },
  {
    name: 'Code Execution',
    text: 'The agent writes and runs code in a sandbox to calculate, transform data, or automate tasks, and then checks the output.',
  },
  {
    name: 'Retrieval (RAG)',
    text: 'The agent searches documents or a knowledge base and pulls the relevant passages into context, so its answers are grounded in real sources.',
  },
];

export const buildSteps = [
  { title: 'Define the job', text: 'Pick one narrow, valuable task. Write down what "done" looks like and what the agent must never do.' },
  { title: 'Choose a model', text: 'Use a capable model with strong tool use. Start with the best one, then optimise cost later.' },
  { title: 'Design the tools', text: 'Give each tool a clear name, description, and input schema. Fewer, well-documented tools beat many vague ones.' },
  { title: 'Write the loop', text: 'Call the model, run any tools it asks for, feed back the results, and repeat until it finishes or hits a limit.' },
  { title: 'Add guardrails', text: 'Set step and cost limits, sandbox risky actions, and require approval for anything irreversible.' },
  { title: 'Evaluate & iterate', text: 'Build a test set of real tasks, measure the success rate, read the transcripts, and fix the failure modes.' },
];

export const agentCode = `async function runAgent(goal, tools, maxSteps = 20) {
  const messages = [{ role: 'user', content: goal }];

  for (let step = 0; step < maxSteps; step++) {
    // THINK: the model decides what to do next
    const reply = await callModel(messages, tools);
    messages.push(reply);

    // DONE: no tool requested, so return the final answer
    if (reply.toolCalls.length === 0) return reply.text;

    // ACT + OBSERVE: run each tool and feed the result back
    for (const call of reply.toolCalls) {
      const result = await tools[call.name].run(call.input);
      messages.push({ role: 'tool', id: call.id, content: result });
    }
  }

  throw new Error('Step limit reached before the goal was met');
}`;

export const frameworks = [
  { name: 'LangGraph', text: 'Builds agents as graphs of steps and state, with strong control over complex flows.' },
  { name: 'CrewAI', text: 'Organises role-based "crews" of agents that work together on a task.' },
  { name: 'AutoGen', text: 'Microsoft\'s framework for multi-agent conversations and collaboration.' },
  { name: 'Claude Agent SDK', text: 'Anthropic\'s toolkit for building agents with the same harness used by Claude Code.' },
  { name: 'OpenAI Agents SDK', text: 'A lightweight toolkit for agents with tools, handoffs, and guardrails.' },
  { name: 'LlamaIndex', text: 'Focused on connecting agents to your data, with strong retrieval tools.' },
];

export const metrics = [
  { name: 'Task success rate', text: 'How often the agent fully completes the task correctly.' },
  { name: 'Consistency', text: 'Does it succeed every time, or only sometimes? Run each task several times.' },
  { name: 'Efficiency', text: 'Steps, tokens, and money spent per completed task.' },
  { name: 'Latency', text: 'How long the person waits for a result.' },
  { name: 'Trajectory quality', text: 'Were the steps sensible, or did it get lucky after wandering?' },
  { name: 'Safety', text: 'Did it stay within its permissions and avoid harmful actions?' },
];

export const benchmarks = [
  { name: 'SWE-bench', text: 'Fixing real issues from open-source GitHub repositories.' },
  { name: 'WebArena', text: 'Completing realistic tasks on websites.' },
  { name: 'OSWorld', text: 'Using real desktop operating systems and apps.' },
  { name: 'GAIA', text: 'General-assistant questions that need research and tools.' },
  { name: 'τ-bench', text: 'Customer-service conversations with tools and company policies.' },
  { name: 'Terminal-Bench', text: 'Hard tasks done entirely in a command-line terminal.' },
];

export const useCases = [
  { icon: '💻', title: 'Software Engineering', text: 'Coding agents read codebases, fix bugs, write tests, run CI, and open pull requests.' },
  { icon: '🔬', title: 'Research', text: 'Agents search many sources, compare findings, and write cited reports.' },
  { icon: '🎧', title: 'Customer Support', text: 'Agents look up orders, issue refunds, and resolve tickets from start to finish.' },
  { icon: '📊', title: 'Data Analysis', text: 'Agents query databases, clean data, build charts, and explain what they find.' },
  { icon: '🧾', title: 'Operations', text: 'Agents automate back-office work like invoices, scheduling, and report generation.' },
  { icon: '🛡️', title: 'Security', text: 'Agents triage alerts, investigate incidents, and suggest fixes.' },
  { icon: '🏥', title: 'Healthcare Admin', text: 'Agents handle prior authorisations, scheduling, and paperwork, so staff can spend more time with patients.' },
  { icon: '💰', title: 'Finance', text: 'Agents reconcile accounts, flag unusual transactions, and prepare compliance reports.' },
  { icon: '🎓', title: 'Education', text: 'Tutoring agents adapt explanations, set practice problems, and track progress.' },
  { icon: '🗓️', title: 'Personal Assistants', text: 'Agents manage email, calendars, travel bookings, and everyday errands.' },
];

export const challenges = [
  { title: 'Reliability', text: 'Small errors add up over long tasks. One wrong step early on can derail everything after it.' },
  { title: 'Safety & Security', text: 'Agents that act in the world can do real damage. Prompt injection from untrusted content is a major risk.' },
  { title: 'Hallucination', text: 'Agents can invent facts, file paths, or tool results and then act on them confidently.' },
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

export const guardrails = [
  { layer: 'Input', text: 'Treat web pages, emails, and files as data. Screen for prompt-injection attempts.' },
  { layer: 'Permissions', text: 'Use scoped, short-lived credentials. Grant read-only access unless writing is needed.' },
  { layer: 'Sandbox', text: 'Run code and tools in isolated containers with network allowlists.' },
  { layer: 'Approval', text: 'Require human sign-off for payments, deletions, deployments, and external messages.' },
  { layer: 'Limits', text: 'Cap the number of steps, the spend, and the run time. Stop on repeated failures.' },
  { layer: 'Monitoring', text: 'Log every action, alert on anomalies, and keep a kill switch within reach.' },
];

export const futureTrends = [
  { icon: '⏳', title: 'Longer-Horizon Work', text: 'Agents that work reliably for hours or days on multi-stage projects.' },
  { icon: '🔌', title: 'Interoperability', text: 'Open protocols let agents and tools from different vendors plug together.' },
  { icon: '🧑‍💼', title: 'Personal Agents', text: 'Assistants with lasting memory that know your preferences and act on your behalf.' },
  { icon: '🏗️', title: 'Agent-Native Infrastructure', text: 'Identity, permissions, and payment systems designed for software agents.' },
  { icon: '📜', title: 'Governance & Regulation', text: 'Clearer rules on transparency, liability, and oversight for autonomous systems.' },
  { icon: '🧪', title: 'Self-Improving Systems', text: 'Agents that learn new skills from experience and share them with other agents.' },
];

export const glossary = [
  { term: 'Agent', def: 'A system that perceives its environment and takes actions to reach a goal.' },
  { term: 'Tool', def: 'A function an agent can call, such as search, a database query, or code execution.' },
  { term: 'Context window', def: 'The amount of text a model can consider at once. It acts as the agent\'s working memory.' },
  { term: 'RAG', def: 'Retrieval-Augmented Generation: fetching relevant documents and adding them to the prompt.' },
  { term: 'Orchestrator', def: 'An agent or program that splits up work and coordinates other agents.' },
  { term: 'Sub-agent', def: 'A helper agent given a focused piece of a larger task.' },
  { term: 'Trajectory', def: 'The full sequence of thoughts, actions, and observations in one run.' },
  { term: 'Guardrail', def: 'A rule or check that limits what an agent can do.' },
  { term: 'Prompt injection', def: 'Malicious instructions hidden in content an agent reads, meant to hijack its behaviour.' },
  { term: 'Hallucination', def: 'Confident output that is not supported by facts or data.' },
  { term: 'Grounding', def: 'Tying an agent\'s answers and actions to real sources or tool results.' },
  { term: 'MCP', def: 'Model Context Protocol: an open standard for connecting agents to tools and data.' },
];

export const faqs = [
  {
    q: 'How is agentic AI different from a chatbot?',
    a: 'A chatbot replies to messages. An agent pursues a goal: it plans, uses tools, takes actions, and keeps going over many steps until the job is done.',
  },
  {
    q: 'What is the difference between "an AI agent" and "agentic AI"?',
    a: 'An AI agent is a single system. Agentic AI is the broader approach: building AI that acts with autonomy. It can include a single agent, a workflow, or many agents working together.',
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
    q: 'Do I need a framework to build an agent?',
    a: 'No. The core loop is only a few dozen lines of code (see "Build Your First Agent"). Frameworks help with state, retries, tracing, and multi-agent setups once things get more complex.',
  },
  {
    q: 'How much does it cost to run an agent?',
    a: 'It depends on the model, how many steps the task takes, and how much context is sent each time. One task can cost anywhere from a fraction of a cent to several dollars. Step limits, caching, and smaller models for simple sub-tasks keep costs down.',
  },
  {
    q: 'Is agentic AI safe?',
    a: 'It can be, with the right design. The risk grows with the agent\'s permissions, so combine least privilege, sandboxing, human approval for risky actions, and monitoring.',
  },
  {
    q: 'Will agents replace people?',
    a: 'They are best at taking over repetitive, well-defined tasks. People still set goals, make judgement calls, and stay accountable for the outcome.',
  },
];
