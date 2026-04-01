"use client";

import { WizardState } from "@/lib/prompt-builder";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

export function IdeaStep({ state, setState }: StepProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        What's your idea?
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Describe your idea in your own words. This is the most important part of your prompt.
      </p>
      <div className="brutal-border bg-brutal-yellow/20 p-6 mb-4">
        <textarea
          value={state.idea}
          onChange={(e) =>
            setState((s) => ({ ...s, idea: e.target.value }))
          }
          placeholder="Example: I want to build a tool that helps our team track which books we've recommended to each other. Everyone should be able to add books, rate them, and see what others are reading..."
          className="w-full h-48 bg-transparent font-body text-lg leading-relaxed resize-none focus:outline-none placeholder:text-brutal-black/30"
        />
      </div>
      <p className="text-xs text-brutal-black/40 font-body">
        Tip: The more specific you are, the better the result. Think about who uses it, what problem it solves, and what makes it special.
      </p>
    </div>
  );
}
