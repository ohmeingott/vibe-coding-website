import { BrutalCard } from "@/components/ui/BrutalCard";
import { cheatsheetData } from "@/data/cheatsheet";

export default function CheatSheetPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
        Cheat Sheet
      </h1>
      <p className="text-lg mb-8">
        Quick reference for Claude Code commands, shortcuts, and tips.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cheatsheetData.map((category) => (
          <BrutalCard key={category.title} color={category.color}>
            <h2 className="font-heading text-xl font-bold mb-4">
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.commands.map((cmd) => (
                <div key={cmd.command} className="flex gap-3 items-start">
                  <code className="bg-brutal-black text-brutal-yellow px-2 py-1 text-sm font-mono whitespace-nowrap brutal-border shrink-0">
                    {cmd.command}
                  </code>
                  <span className="text-sm pt-1">{cmd.description}</span>
                </div>
              ))}
            </div>
          </BrutalCard>
        ))}
      </div>
    </div>
  );
}
