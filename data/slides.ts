export type SlideTransition =
  | "slide"
  | "zoom"
  | "fade-up"
  | "rotate"
  | "flip"
  | "bounce";

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  code?: string;
  bgColor: string;
  layout: "title" | "bullets" | "code" | "two-column" | "evolution";
  leftColumn?: string[];
  rightColumn?: string[];
  leftImage?: { src: string; label?: string };
  rightImage?: { src: string; label?: string };
  evolutionSteps?: { year: string; label: string; detail: string; highlight?: boolean }[];
  transition?: SlideTransition;
}

export const slides: SlideData[] = [
  {
    id: "intro",
    title: "Vibe Coding with Claude Code",
    subtitle: "Build software at the speed of thought ⚡",
    bgColor: "bg-brutal-yellow",
    layout: "title",
    transition: "zoom",
  },
  {
    id: "agenda",
    title: "Today's Agenda",
    subtitle: "~2 hours, hands-on, no experience needed.",
    evolutionSteps: [
      { year: "25 min", label: "Introduction to Vibe Coding", detail: "What is it? Why does it matter? How does Claude Code work?" },
      { year: "50 min", label: "Vibe Coding Session", detail: "Build your own project. Iterate, experiment, ask for help!" },
      { year: "15 min", label: "Showcasing", detail: "Share your screen, show what you built, inspire each other" },
      { year: "10 min", label: "Q&A", detail: "Ask anything, no question is too basic" },
      { year: "5 min", label: "Outlook: Claude Cowork", detail: "Your AI-powered daily work environment for all employees" },
    ],
    bgColor: "bg-brutal-blue",
    layout: "evolution",
    transition: "slide",
  },
  {
    id: "why-vibecode",
    title: "Why Should We Vibecode?",
    subtitle: "A new way of solving problems. We need to rewire how we think.",
    bullets: [
      "🚀 Ship working software in minutes",
      "Anyone with an idea can build",
    ],
    bgColor: "bg-brutal-green",
    layout: "bullets",
    transition: "slide",
  },
  {
    id: "ai-bubble",
    title: "The AI Bubble Popped",
    subtitle: "But not the one everyone expected.",
    leftColumn: [
      "📉 Software Giants Are Falling",
      "SAP: -40% in one year",
      "Figma: -84% since IPO",
      "Atlassian: -70% in one year",
    ],
    rightColumn: [
      "💡 Why?",
      "People can build their own solutions now",
      "Custom software is no longer expensive",
    ],
    bgColor: "bg-brutal-red",
    layout: "two-column",
    transition: "zoom",
  },
  {
    id: "what-is-vibecoding",
    title: "The Evolution of Programming",
    subtitle: "Each layer abstracts the one below. Vibe Coding is the next step.",
    evolutionSteps: [
      { year: "1940s", label: "Machine Code", detail: "Binary instructions, punch cards" },
      { year: "1950s", label: "Assembly", detail: "Human-readable mnemonics" },
      { year: "1970s+", label: "High-Level Languages", detail: "C, Java, Python, JavaScript" },
      { year: "2000s+", label: "Frameworks & Libraries", detail: "Rails, React, Django" },
      { year: "2025", label: "Natural Language", detail: "Describe what you want, AI writes the code", highlight: true },
    ],
    bgColor: "bg-brutal-pink",
    layout: "evolution",
    transition: "fade-up",
  },
  {
    id: "what-is-claude-code",
    title: "What is Claude Code?",
    leftColumn: [
      "🛠️ The Tool",
      "An **agentic** coding tool",
      "Reads your codebase, writes code, runs commands",
      "Works with any language and framework",
    ],
    rightColumn: [
      "🧩 The Context",
      "Understands files, errors, project structure",
      "Plans before it codes",
      "Iterates based on your feedback",
    ],
    bgColor: "bg-brutal-blue",
    layout: "two-column",
    transition: "rotate",
  },
  {
    id: "llm-vs-agentic",
    title: "LLM Work vs. Agentic Work",
    subtitle: "Same model, same brain. The difference is not the AI. It's how you use it.",
    leftImage: { src: "/Gemini_Generated_Image_jwfc8xjwfc8xjwfc.png", label: "Opus 4.6" },
    leftColumn: [
      "💬 LLM Work (Copy & Paste)",
      "You ask a question, get an answer back",
      "Copy the result, paste it into your tool",
      "One task at a time, manually chained",
      "You are the glue between the steps",
    ],
    rightImage: { src: "/Gemini_Generated_Image_oxf7eqoxf7eqoxf7.png", label: "Claude Code" },
    rightColumn: [
      "🤖 Agentic Work (Autonomous)",
      "You describe the goal, the agent plans the steps",
      "It navigates systems, runs queries, checks results",
      "Chains dozens of tasks on its own todo list",
      "Agents can run for hours or days autonomously",
    ],
    bgColor: "bg-brutal-purple",
    layout: "two-column",
    transition: "slide",
  },
  {
    id: "what-claude-does",
    title: "What Does Claude Code Do On Your Machine?",
    subtitle: "You give it a project folder. It works inside it like a developer would.",
    leftColumn: [
      "🛠️ Its Toolbox",
      "**Bash**: Your terminal. It runs commands, installs packages, starts servers",
      "**Read/Write**: Opens, reads and edits files in your project",
      "**Grep/Glob**: Searches your codebase for code, patterns or files",
      "**Web**: Fetches documentation or searches the internet",
    ],
    rightColumn: [
      "⚠️ Good to Know",
      "It asks for permission before risky actions",
      "It can install software (npm, pip, brew...)",
      "It reads error messages and fixes them itself",
      "Everything happens locally on your machine",
    ],
    bgColor: "bg-brutal-green",
    layout: "two-column",
    transition: "rotate",
  },
  {
    id: "permission-magic",
    title: "\"Can I do this?\"",
    subtitle: "Claude will ask you before every action. Here's how to deal with it.",
    leftColumn: [
      "🔐 Permission Questions",
      "\"Can I run this command?\" \"Can I edit this file?\"",
      "In 95% of cases, the answer is simply: **Yes**",
      "Be careful with **rm**, **delete**, **drop**, **force push**, **reset --hard**",
      "Ask Claude to explain if you're unsure about a command",
    ],
    rightColumn: [
      "📋 Planning Questions",
      "Claude will propose a plan with three options",
      "Option 1 is the **recommended** path, take it if unsure",
      "But look at **option 3**: it's often the most thorough approach",
    ],
    bgColor: "bg-brutal-yellow",
    layout: "two-column",
    transition: "slide",
  },
  {
    id: "good-prompts",
    title: "Writing Good Prompts",
    transition: "bounce",
    leftColumn: [
      "✅ DO",
      "Be specific about what you want",
      "Provide context about the project",
      "Mention tech stack preferences",
      "Describe expected behavior",
      "Share error messages fully",
    ],
    rightColumn: [
      "❌ DON'T",
      "Be vague ('make it better')",
      "Assume Claude knows your setup",
      "Give overly complex instructions",
      "Forget to review the output",
      "Skip the planning step",
    ],
    bgColor: "bg-brutal-yellow",
    layout: "two-column",
  },
  {
    id: "plan-mode",
    title: "Plan Mode",
    leftColumn: [
      "📋 How It Works",
      "Start with: 'Let's plan this before coding'",
      "Claude creates a step-by-step plan",
      "Review and approve before execution",
    ],
    rightColumn: [
      "🎯 When To Use It",
      "Larger features and refactors",
      "New projects from scratch",
      "Reduces mistakes, gives you control",
    ],
    bgColor: "bg-brutal-purple",
    layout: "two-column",
    transition: "zoom",
  },
  {
    id: "iterating",
    title: "Iterating Effectively",
    leftColumn: [
      "🔨 Build Smart",
      "Start small, get a basic version first",
      "Build incrementally, one feature at a time",
      "Use /compact to manage long conversations",
    ],
    rightColumn: [
      "💬 Communicate Well",
      "Give feedback: 'This works but change X to Y'",
      "Share the full error message when stuck",
      "Be specific about what needs to change",
    ],
    bgColor: "bg-brutal-pink",
    layout: "two-column",
    transition: "slide",
  },
  {
    id: "pitfalls",
    title: "Common Pitfalls",
    leftColumn: [
      "⚠️ Watch Out For",
      "Trying to build everything at once",
      "Not testing if it actually works",
      "Ignoring error messages",
      "Over-engineering the first version",
    ],
    rightColumn: [
      "💡 Instead...",
      "Build incrementally, step by step",
      "Test each change before moving on",
      "Share full errors with Claude",
      "Ship a prototype, then improve",
    ],
    bgColor: "bg-brutal-red",
    layout: "two-column",
    transition: "rotate",
  },
  {
    id: "go-build",
    title: "Go Build! 🚀",
    subtitle: "You have 50 minutes. Use the Prompt Wizard, start a project, iterate. Ask for help anytime!",
    bullets: [
      "Open the Prompt Wizard → generate your first prompt",
      "Open the Claude Code app → paste the prompt",
      "Don't overthink it — start small, iterate fast",
      "Stuck? Paste the error message to Claude. It will fix it.",
      "Have fun. There are no wrong answers.",
    ],
    bgColor: "bg-brutal-green",
    layout: "bullets",
    transition: "flip",
  },
  {
    id: "showcasing",
    title: "Showcasing Time! 🎤",
    subtitle: "Show us what you built. Share your screen — every project is worth seeing!",
    bullets: [
      "What did you build?",
      "What was your favorite moment?",
      "What surprised you?",
      "What would you build next?",
    ],
    bgColor: "bg-brutal-pink",
    layout: "bullets",
    transition: "zoom",
  },
  {
    id: "qa",
    title: "Q&A",
    subtitle: "No question is too basic. Ask anything!",
    bgColor: "bg-brutal-yellow",
    layout: "title",
    transition: "fade-up",
  },
  {
    id: "claude-cowork",
    title: "Outlook: Claude Cowork",
    subtitle: "Claude Code is for developers. Cowork is the daily AI work environment for everyone.",
    leftColumn: [
      "🖥️ Claude Code",
      "Lives in the **terminal** (CLI)",
      "Full system access: git, scripts, builds",
      "Made for **developers**",
      "Step-by-step control over every action",
      "Works with code files and repos",
    ],
    rightColumn: [
      "📋 Claude Cowork",
      "Lives in the **Claude Desktop App** (Cowork tab)",
      "Reads & writes files on your computer — no terminal",
      "Made for **everyone**: analysts, HR, finance, ops",
      "Creates Excel, PowerPoint, formatted documents",
      "Plugins for Google Drive, Gmail, DocuSign",
    ],
    bgColor: "bg-brutal-purple",
    layout: "two-column",
    transition: "rotate",
  },
  {
    id: "resources",
    title: "Resources & Next Steps",
    leftColumn: [
      "🧰 On This Site",
      "Use the **Prompt Wizard** to start your next project",
      "Bookmark the **Cheat Sheet** for quick reference",
      "Review **Best Practices** before your next session",
    ],
    rightColumn: [
      "📚 Keep Going",
      "Claude Code docs: **code.claude.com/docs**",
      "Try Claude Cowork: **claude.ai**",
      "Practice makes perfect — start building today!",
    ],
    bgColor: "bg-brutal-orange",
    layout: "two-column",
    transition: "bounce",
  },
];
