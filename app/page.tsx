import Link from "next/link";
import { BrutalCard } from "@/components/ui/BrutalCard";

const sections = [
  {
    href: "/slides",
    title: "Workshop Slides",
    description: "Step through the vibecoding workshop presentation",
    color: "pink" as const,
    icon: "📺",
  },
  {
    href: "/prompt-wizard",
    title: "Prompt Wizard",
    description: "Generate the perfect prompt to start your project with Claude Code",
    color: "blue" as const,
    icon: "🧙",
  },
  {
    href: "/setup",
    title: "Setup Guide",
    description: "Get Claude Code installed and configured on your machine",
    color: "green" as const,
    icon: "🔧",
  },
  {
    href: "/cheat-sheet",
    title: "Cheat Sheet",
    description: "Quick reference for commands, shortcuts, and tips",
    color: "orange" as const,
    icon: "📋",
  },
  {
    href: "/best-practices",
    title: "Best Practices",
    description: "Learn how to write great prompts and work effectively with AI",
    color: "purple" as const,
    icon: "🏆",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            VIBECODING
            <br />
            <span className="inline-block bg-brutal-pink px-4 py-1 brutal-border brutal-shadow mt-2">
              WORKSHOP
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-8 font-body">
            Learn to build software at the speed of thought with{" "}
            <span className="font-bold bg-brutal-yellow px-2 brutal-border">
              Claude Code
            </span>
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <BrutalCard color={section.color} hoverable className="h-full">
                <div className="text-4xl mb-3">{section.icon}</div>
                <h2 className="font-heading text-xl font-bold mb-2">
                  {section.title}
                </h2>
                <p className="font-body text-sm">{section.description}</p>
              </BrutalCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom banner */}
      <section className="bg-brutal-black text-brutal-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-heading text-lg font-bold">
            Describe it. Build it. Ship it. ⚡
          </p>
        </div>
      </section>
    </div>
  );
}
