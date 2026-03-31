"use client";

import { useState, useEffect } from "react";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { BrutalCard } from "@/components/ui/BrutalCard";

interface PromptOutputProps {
  prompt: string;
  onReset: () => void;
}

export function PromptOutput({ prompt, onReset }: PromptOutputProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);

    // Fire confetti
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFE600", "#FF6B9D", "#4ECDC4", "#C44CFF", "#FF8C42", "#A8E6CF"],
      });
    } catch {
      // confetti is optional
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        Your prompt is ready! 🎉
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Copy this prompt and paste it into Claude Code to start building.
      </p>

      <BrutalCard color="yellow" className="mb-6">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
          {prompt}
        </pre>
      </BrutalCard>

      <div className="flex gap-4 flex-wrap">
        <BrutalButton onClick={copyToClipboard} variant="pink" size="lg">
          {copied ? "✓ Copied!" : "Copy to Clipboard"}
        </BrutalButton>
        <BrutalButton onClick={onReset} variant="secondary">
          Start Over
        </BrutalButton>
      </div>
    </div>
  );
}
