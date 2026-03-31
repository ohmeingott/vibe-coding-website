"use client";

import { useState } from "react";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { cn } from "@/lib/utils";

interface SetupSection {
  title: string;
  color: "yellow" | "pink" | "blue" | "green" | "purple" | "orange";
  content: React.ReactNode;
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-brutal-black text-brutal-yellow p-4 brutal-border font-mono text-sm overflow-x-auto mt-3">
      <code>{children}</code>
    </pre>
  );
}

const sections: SetupSection[] = [
  {
    title: "1. Prerequisites",
    color: "yellow",
    content: (
      <div>
        <p className="mb-3">Make sure you have the following installed:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Node.js 18+</strong> — Download from <code className="bg-brutal-yellow px-1">nodejs.org</code></li>
          <li><strong>A terminal</strong> — Terminal.app (Mac), Windows Terminal, or iTerm2</li>
          <li><strong>VS Code</strong> — Recommended editor (optional but helpful)</li>
        </ul>
        <p className="mt-3">Verify Node.js is installed:</p>
        <CodeBlock>node --version</CodeBlock>
      </div>
    ),
  },
  {
    title: "2. Install Claude Code",
    color: "pink",
    content: (
      <div>
        <p className="mb-3">Install Claude Code globally via npm:</p>
        <CodeBlock>npm install -g @anthropic-ai/claude-code</CodeBlock>
        <p className="mt-3">Verify the installation:</p>
        <CodeBlock>claude --version</CodeBlock>
      </div>
    ),
  },
  {
    title: "3. API Key Configuration",
    color: "blue",
    content: (
      <div>
        <p className="mb-3">You need an Anthropic API key to use Claude Code.</p>
        <p className="mb-3">When you first run <code className="bg-brutal-yellow px-1">claude</code>, it will prompt you to enter your API key. Alternatively, set it as an environment variable:</p>
        <CodeBlock>export ANTHROPIC_API_KEY=your-api-key-here</CodeBlock>
        <p className="mt-3">To make this permanent, add it to your shell profile (<code className="bg-brutal-yellow px-1">~/.zshrc</code> or <code className="bg-brutal-yellow px-1">~/.bashrc</code>).</p>
      </div>
    ),
  },
  {
    title: "4. VS Code Extension",
    color: "green",
    content: (
      <div>
        <p className="mb-3">Claude Code works great as a VS Code extension:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open VS Code</li>
          <li>Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)</li>
          <li>Search for <strong>&quot;Claude Code&quot;</strong></li>
          <li>Click Install</li>
          <li>Open the Claude Code panel from the sidebar</li>
        </ol>
        <p className="mt-3">The extension gives you Claude Code directly in your editor with full context of your open files.</p>
      </div>
    ),
  },
  {
    title: "5. Verify Everything Works",
    color: "purple",
    content: (
      <div>
        <p className="mb-3">Create a test project and try Claude Code:</p>
        <CodeBlock>{`mkdir my-test-project
cd my-test-project
claude "Create a simple hello world script"`}</CodeBlock>
        <p className="mt-3">If Claude responds and creates a file, you&apos;re all set! 🎉</p>
      </div>
    ),
  },
  {
    title: "6. Troubleshooting",
    color: "orange",
    content: (
      <div>
        <ul className="space-y-3">
          <li>
            <strong>&quot;command not found: claude&quot;</strong>
            <p className="text-sm mt-1">Make sure npm global binaries are in your PATH. Try: <code className="bg-brutal-yellow px-1">npm config get prefix</code> and add the <code className="bg-brutal-yellow px-1">/bin</code> directory to your PATH.</p>
          </li>
          <li>
            <strong>&quot;Invalid API key&quot;</strong>
            <p className="text-sm mt-1">Double-check your key at console.anthropic.com. Make sure there are no extra spaces.</p>
          </li>
          <li>
            <strong>Permission errors on install</strong>
            <p className="text-sm mt-1">Try: <code className="bg-brutal-yellow px-1">sudo npm install -g @anthropic-ai/claude-code</code> or fix npm permissions.</p>
          </li>
        </ul>
      </div>
    ),
  },
];

function AccordionSection({ section, isOpen, onToggle }: {
  section: SetupSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <BrutalCard color={section.color} className="cursor-pointer" onClick={onToggle}>
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold">{section.title}</h2>
        <span className="font-heading text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </div>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[1000px] mt-4" : "max-h-0"
      )}>
        {section.content}
      </div>
    </BrutalCard>
  );
}

export default function SetupPage() {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
        Setup Guide
      </h1>
      <p className="text-lg mb-8">
        Get Claude Code installed and ready to go on your machine.
      </p>

      <div className="space-y-4">
        {sections.map((section, i) => (
          <AccordionSection
            key={i}
            section={section}
            isOpen={openSections.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
}
