import { BrutalCard } from "@/components/ui/BrutalCard";

interface Practice {
  number: number;
  title: string;
  color: "yellow" | "pink" | "blue" | "green" | "purple" | "orange" | "red";
  description: string;
  dos?: string[];
  donts?: string[];
  tips?: string[];
  keyInsight?: string;
}

interface Section {
  title: string;
  subtitle: string;
  practices: Practice[];
}

const sections: Section[] = [
  {
    title: "The Core Workflow",
    subtitle:
      "The #1 lesson from top vibecoders: separate thinking from doing. Follow these four phases.",
    practices: [
      {
        number: 1,
        title: "Explore First",
        color: "yellow",
        description:
          "Before writing any code, let Claude understand your project. Enter Plan Mode (Shift+Tab twice) and have Claude read files, explore the architecture, and map out what exists.",
        tips: [
          "Start every session in Plan Mode — it's the cheapest phase in tokens and the most valuable",
          "Say: 'Read the project structure and summarize the architecture'",
          "Use words like 'deeply', 'in detail' to prevent surface-level analysis",
          "Let Claude create a research.md with its findings",
        ],
        keyInsight:
          "The explore phase prevents 80% of mistakes that happen when Claude makes wrong assumptions about your codebase.",
      },
      {
        number: 2,
        title: "Plan Before Coding",
        color: "pink",
        description:
          "Ask Claude to write a detailed plan. Review it, annotate it with your feedback, and iterate until it's solid. Only then approve implementation.",
        tips: [
          "Say: 'Create a plan for this. Don't implement yet.'",
          "Press Ctrl+G to open the plan in your editor and add inline notes",
          "Send it back: 'Address all my notes, don't implement yet' — repeat 2-3 times",
          "Decision rule: if it touches 3+ files or involves architecture, always plan first",
        ],
        keyInsight:
          "The Annotation Cycle — edit the plan, send back, repeat — is the signature technique of the most productive Claude Code users.",
      },
      {
        number: 3,
        title: "Implement with Guardrails",
        color: "blue",
        description:
          "Once the plan is approved, switch to Normal Mode and let Claude execute. Your role shifts from architect to supervisor — give short, precise corrections.",
        tips: [
          "Say: 'Implement the plan. Mark each task complete as you go.'",
          "Give terse corrections: 'Change the button color to blue' — not long explanations",
          "If Claude gets stuck after 2 attempts, /clear and start fresh with a better prompt",
          "Press Esc to stop Claude mid-action if something looks wrong",
        ],
        keyInsight:
          "After a good plan, your prompts should be short. If you're writing paragraphs during implementation, the plan wasn't detailed enough.",
      },
    ],
  },
  {
    title: "Power Prompting",
    subtitle:
      "The quality of your prompt determines the quality of the output. These techniques make every prompt count.",
    practices: [
      {
        number: 5,
        title: "Be Specific, Not Vague",
        color: "purple",
        description:
          "Vague prompts produce vague code. Describe triggers, actions, and expected results. Reference existing files and patterns by name.",
        dos: [
          "'When the user clicks delete, show a confirmation dialog. If confirmed, remove from the list and show a toast.'",
          "'Look at HotDogWidget.php and follow the same pattern for BurgerWidget'",
          "'Check src/auth/ — users report login fails after session timeout'",
          "Paste screenshots — a picture is worth a thousand words to AI",
        ],
        donts: [
          "'Make it better'",
          "'Build me a social media app'",
          "'Fix the bug' (without the error message)",
          "Multiple unrelated tasks in one prompt",
        ],
      },
      {
        number: 6,
        title: "Ask for Options, Not Solutions",
        color: "orange",
        description:
          "Claude tends to pick the quickest path. Always ask for alternatives — the more thorough option (often option 3) is usually worth the extra effort.",
        tips: [
          "Say: 'Give me a few options, starting with the simplest. Don't code yet.'",
          "For bugs: 'What are the possible causes? List them by likelihood.'",
          "For features: 'What's the minimal version we could ship today?'",
          "Claude sometimes picks the easy route to save effort — push for the thorough option when it matters",
        ],
        keyInsight:
          "Metaprompting: discuss the feature conversationally first, then summarize the discussion as implementation directives. This produces more refined prompts.",
      },
      {
        number: 7,
        title: "Let Claude Interview You",
        color: "red",
        description:
          "For big features, flip the dynamic. Let Claude ask the questions about edge cases, tradeoffs, and requirements you haven't thought of.",
        tips: [
          "Say: 'I want to build [description]. Interview me about the details before we plan.'",
          "Claude will ask about edge cases, user flows, error handling, and architecture",
          "This surfaces requirements you would have discovered much later during testing",
          "After the interview, ask Claude to summarize the spec — then plan from there",
        ],
      },
    ],
  },
  {
    title: "Context Management",
    subtitle:
      "Context is your most precious resource. How you manage it determines whether Claude stays sharp or starts making mistakes.",
    practices: [
      {
        number: 8,
        title: "CLAUDE.md — Your Project Memory",
        color: "yellow",
        description:
          "Create a CLAUDE.md file in your project root. It's loaded at the start of every session and tells Claude about your project, conventions, and rules. Keep it under 100 lines.",
        dos: [
          "Run /init to auto-generate a starter CLAUDE.md from your project",
          "Include: build commands, architecture overview, coding conventions",
          "Every rule should exist because it solved an actual problem",
          "Check it into git — share it with your team",
        ],
        donts: [
          "Write a novel — aim for ~100 lines, not 500",
          "Include things Claude can figure out from the code itself",
          "Let AI write your rules — curate them yourself (AI-written rules reduce success ~3%)",
          "Add frequently changing information — use memory for that",
        ],
        keyInsight:
          "Boris Cherny (Claude Code's creator) keeps his CLAUDE.md at only ~100 lines. Quality over quantity. Update it multiple times per week.",
      },
      {
        number: 9,
        title: "Keep Context Clean",
        color: "blue",
        description:
          "Long, messy conversations make Claude confused and slow. Use /compact between major tasks and /clear when switching topics entirely.",
        tips: [
          "/compact — summarizes the conversation, preserves key decisions (saves 30-50% tokens)",
          "/compact 'Focus on the API changes' — tells Claude what to prioritize",
          "/clear — full context reset for unrelated tasks",
          "/btw 'quick question' — ask a side question without polluting the main context",
          "Esc+Esc — rewind to a previous checkpoint if things went sideways",
        ],
        keyInsight:
          "If you're using more than 50% of the context window, performance is already degrading. Compact early and often.",
      },
      {
        number: 10,
        title: "Use Subagents for Research",
        color: "pink",
        description:
          "Don't let exploration fill your main context. Spin up subagents — they have their own context window and only report results back.",
        tips: [
          "Say: 'Use a subagent to research the authentication module'",
          "Subagents are great for: exploring code, running tests, searching docs",
          "They prevent 'context poisoning' from detailed implementation work",
          "Run multiple subagents in parallel for independent research tasks",
        ],
      },
    ],
  },
  {
    title: "Agent Teams & Parallel Work",
    subtitle:
      "The biggest leap in 2025/2026: running multiple AI agents simultaneously. Developers who master this ship like a team of five.",
    practices: [
      {
        number: 11,
        title: "Agent Teams — Coordinated Parallel Development",
        color: "purple",
        description:
          "Agent Teams let multiple Claude instances work together on shared tasks. A team lead decomposes work, teammates self-assign tasks, and they can message each other directly.",
        tips: [
          "Start with 3-5 teammates and 5-6 tasks per teammate",
          "Best for: independent modules, research/review, cross-layer features",
          "Avoid for: sequential tasks, same-file edits, heavily interdependent work",
          "Each teammate gets its own context — give them detailed spawn prompts",
          "Use Shift+Down to cycle between teammates, or use split panes for full visibility",
        ],
        keyInsight:
          "Unlike subagents (which only report back), teammates can message each other. This makes them ideal for complex work requiring discussion and coordination.",
      },
      {
        number: 12,
        title: "Git Worktrees — Isolated Sandboxes",
        color: "green",
        description:
          "Give each agent its own working directory with git worktrees. They share the same repo history but can't step on each other's changes.",
        tips: [
          "claude --worktree feature-auth — creates an isolated workspace for that feature",
          "Auto-cleanup: worktrees with no changes are removed automatically",
          "Use .worktreeinclude to copy .env files to new worktrees",
          "Combine with agent teams: each teammate in its own worktree for zero conflicts",
        ],
      },
      {
        number: 13,
        title: "The Agentmaxxing Workflow",
        color: "orange",
        description:
          "The most productive vibecoders run 5-7 concurrent agents on separate tasks. The bottleneck shifts from AI capability to human review capacity.",
        dos: [
          "Decompose: break work into independent tasks (if Agent B imports from Agent A, they can't run in parallel)",
          "Launch: one worktree per agent, separate terminal panes",
          "Review: monitor progress, catch mistakes early",
          "Merge: combine branches, run tests, resolve integration issues",
        ],
        donts: [
          "Parallelize tasks under 15 min (setup overhead is 5-10 min)",
          "Run agents on interdependent code without clear file boundaries",
          "Skip the decomposition step — bad decomposition = merge conflict hell",
          "Forget that rate limits burn 3x faster with parallel agents",
        ],
        keyInsight:
          "Rule of thumb: if the total sequential time exceeds 30 minutes and you have 3+ independent tasks with clear file boundaries, parallelize.",
      },
    ],
  },
  {
    title: "Pro Techniques",
    subtitle: "Advanced patterns used by the most experienced vibecoders.",
    practices: [
      {
        number: 14,
        title: "Hooks — Automate Your Workflow",
        color: "red",
        description:
          "Hooks are shell commands that run automatically at key moments: before Claude edits a file, after a tool runs, when a session starts. Set them up once, benefit forever.",
        tips: [
          "PostToolUse hook to auto-format code after every edit (prevents CI failures)",
          "PreToolUse hook to block dangerous commands or enforce review",
          "UserPromptSubmit hook to inject context or run pre-checks",
          "Configure in .claude/settings.json — share with your team via git",
        ],
      },
      {
        number: 15,
        title: "The Five-File System",
        color: "yellow",
        description:
          "The gold standard for structuring Vibe Coding projects. Five files that keep Claude aligned across sessions, even after context resets.",
        tips: [
          "CLAUDE.md — session instructions, conventions, rules (~100 lines)",
          "PRD.md — your project requirements document (what you're building and why)",
          "PLANNING.md — system architecture, tech stack, development process",
          "TASKS.md — milestone-based task tracking (Claude checks these off)",
          "SCRATCHPAD.md — ongoing work notes, decisions, things to remember",
        ],
        keyInsight:
          "These files survive /compact and /clear. They're your persistent brain for the project. Update them as the project evolves.",
      },
      {
        number: 16,
        title: "Keyboard Shortcuts That Change Everything",
        color: "pink",
        description:
          "Master these shortcuts and you'll navigate Claude Code 10x faster than using only typed commands.",
        tips: [
          "Shift+Tab (×2) — enter Plan Mode (most important shortcut)",
          "Ctrl+G — open plan in your text editor for annotation",
          "Alt+T — toggle extended thinking for deeper analysis",
          "Esc — stop Claude mid-action / Esc+Esc — rewind to checkpoint",
          "/btw — side questions without polluting context",
          "Ctrl+B — background a running task and keep working",
        ],
      },
    ],
  },
  {
    title: "Common Pitfalls",
    subtitle:
      "Learn from the mistakes others made so you don't have to.",
    practices: [
      {
        number: 17,
        title: "The Kitchen Sink Session",
        color: "orange",
        description:
          "Mixing unrelated tasks in one session pollutes the context and confuses Claude. Auth bugs don't belong in the same session as UI tweaks.",
        tips: [
          "One session = one focus area",
          "Use /clear between unrelated tasks",
          "If a session gets messy after 2+ failed corrections, start fresh",
          "Name sessions with /rename for easy resumption later",
        ],
      },
    ],
  },
];

export default function BestPracticesPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
        Best Practices
      </h1>
      <p className="text-lg mb-4">
        Everything we know about effective Vibe Coding with Claude Code — from
        the basics to agent teams.
      </p>
      <p className="text-sm mb-10 text-brutal-black/60">
        Based on research from Anthropic docs, top vibecoders like Boris Cherny
        &amp; Boris Tane, and the latest 2025/2026 community best practices.
      </p>

      {sections.map((section, sectionIdx) => (
        <div key={section.title} className={sectionIdx > 0 ? "mt-14" : ""}>
          <div className="mb-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              {section.title}
            </h2>
            <p className="text-sm text-brutal-black/60 mt-1">
              {section.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {section.practices.map((practice) => (
              <BrutalCard key={practice.number} color={practice.color}>
                <div className="flex items-start gap-4">
                  <span className="font-heading text-4xl font-bold opacity-30">
                    {String(practice.number).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      {practice.title}
                    </h3>
                    <p className="mb-4">{practice.description}</p>

                    {practice.dos && practice.donts && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div className="bg-white/50 brutal-border p-4">
                          <h4 className="font-heading font-bold text-sm mb-2">
                            ✅ DO
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {practice.dos.map((d) => (
                              <li key={d}>• {d}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/50 brutal-border p-4">
                          <h4 className="font-heading font-bold text-sm mb-2">
                            ❌ DON&apos;T
                          </h4>
                          <ul className="space-y-1 text-sm">
                            {practice.donts.map((d) => (
                              <li key={d}>• {d}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {practice.tips && (
                      <div className="bg-white/50 brutal-border p-4 mb-3">
                        <h4 className="font-heading font-bold text-sm mb-2">
                          💡 Tips
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {practice.tips.map((t) => (
                            <li key={t}>• {t}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {practice.keyInsight && (
                      <div className="bg-brutal-black text-brutal-white brutal-border p-3 text-sm">
                        <span className="font-heading font-bold">
                          Key Insight:{" "}
                        </span>
                        {practice.keyInsight}
                      </div>
                    )}
                  </div>
                </div>
              </BrutalCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
