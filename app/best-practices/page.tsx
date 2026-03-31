import { BrutalCard } from "@/components/ui/BrutalCard";

interface Practice {
  number: number;
  title: string;
  color: "yellow" | "pink" | "blue" | "green" | "purple" | "orange";
  description: string;
  dos?: string[];
  donts?: string[];
  tips?: string[];
}

const practices: Practice[] = [
  {
    number: 1,
    title: "Write Effective Prompts",
    color: "yellow",
    description:
      "The quality of your prompt directly determines the quality of the output. Be specific, provide context, and state your expectations clearly.",
    dos: [
      "Include the tech stack you're using",
      "Describe the expected behavior",
      "Mention file names or function names",
      "Share error messages in full",
    ],
    donts: [
      "Be vague: 'make it work'",
      "Give multiple unrelated tasks at once",
      "Assume Claude knows your project setup",
      "Skip mentioning constraints",
    ],
  },
  {
    number: 2,
    title: "Start with a Plan",
    color: "pink",
    description:
      "For any non-trivial task, ask Claude to create a plan first. This gives you a chance to review the approach before any code is written.",
    tips: [
      "Say: 'Let's plan this before coding'",
      "Review each step of the plan",
      "Ask for changes to the plan before approving",
      "Plans work great for new features, refactors, and bug fixes",
    ],
  },
  {
    number: 3,
    title: "Build Incrementally",
    color: "blue",
    description:
      "Don't try to build your entire app in one prompt. Start with the simplest version and add features one at a time.",
    tips: [
      "Start with a basic working prototype",
      "Add one feature per iteration",
      "Test each addition before moving on",
      "Use /compact when conversations get long",
    ],
  },
  {
    number: 4,
    title: "Review Every Change",
    color: "green",
    description:
      "Always read and understand the code Claude generates. You are responsible for the code that ends up in your project.",
    dos: [
      "Read through generated code carefully",
      "Run the code and test it yourself",
      "Ask Claude to explain anything unclear",
      "Check for security issues (API keys, validation)",
    ],
    donts: [
      "Blindly accept all changes",
      "Skip testing generated code",
      "Deploy without reviewing",
      "Ignore warnings or lint errors",
    ],
  },
  {
    number: 5,
    title: "Use CLAUDE.md for Context",
    color: "purple",
    description:
      "Create a CLAUDE.md file in your project root to give Claude persistent context about your project, conventions, and preferences.",
    tips: [
      "Describe your project's architecture",
      "List coding conventions and style preferences",
      "Include important file paths and patterns",
      "Note any gotchas or special requirements",
    ],
  },
  {
    number: 6,
    title: "Avoid Common Pitfalls",
    color: "orange",
    description:
      "Learn from the most frequent mistakes people make when vibecoding, so you can avoid them from the start.",
    dos: [
      "Keep prompts focused on one task",
      "Provide error messages verbatim",
      "Iterate with specific feedback",
      "Start a new conversation when switching topics",
    ],
    donts: [
      "Over-engineer the first version",
      "Ignore Claude's questions or suggestions",
      "Mix unrelated tasks in one conversation",
      "Forget to commit working versions",
    ],
  },
];

export default function BestPracticesPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
        Best Practices
      </h1>
      <p className="text-lg mb-8">
        Tips and techniques for effective vibecoding with Claude Code.
      </p>

      <div className="space-y-6">
        {practices.map((practice) => (
          <BrutalCard key={practice.number} color={practice.color}>
            <div className="flex items-start gap-4">
              <span className="font-heading text-4xl font-bold opacity-30">
                {String(practice.number).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-bold mb-2">
                  {practice.title}
                </h2>
                <p className="mb-4">{practice.description}</p>

                {practice.dos && practice.donts && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/50 brutal-border p-4">
                      <h3 className="font-heading font-bold text-sm mb-2">
                        ✅ DO
                      </h3>
                      <ul className="space-y-1 text-sm">
                        {practice.dos.map((d) => (
                          <li key={d}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/50 brutal-border p-4">
                      <h3 className="font-heading font-bold text-sm mb-2">
                        ❌ DON&apos;T
                      </h3>
                      <ul className="space-y-1 text-sm">
                        {practice.donts.map((d) => (
                          <li key={d}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {practice.tips && (
                  <div className="bg-white/50 brutal-border p-4">
                    <h3 className="font-heading font-bold text-sm mb-2">
                      💡 Tips
                    </h3>
                    <ul className="space-y-1 text-sm">
                      {practice.tips.map((t) => (
                        <li key={t}>• {t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </BrutalCard>
        ))}
      </div>
    </div>
  );
}
