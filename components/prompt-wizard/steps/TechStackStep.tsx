"use client";

import { WizardState } from "@/lib/prompt-builder";
import { techStacks } from "@/data/wizard-options";
import { BrutalBadge } from "@/components/ui/BrutalBadge";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["yellow", "pink", "blue", "green", "purple", "orange"] as const;

export function TechStackStep({ state, setState }: StepProps) {
  const options = state.projectType ? techStacks[state.projectType] ?? [] : [];

  const toggle = (id: string) => {
    setState((s) => ({
      ...s,
      techStack: s.techStack.includes(id)
        ? s.techStack.filter((t) => t !== id)
        : [...s.techStack, id],
    }));
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        Choose your tech stack
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Select one or more technologies.
      </p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt, i) => (
          <BrutalBadge
            key={opt.id}
            color={colors[i % colors.length]}
            selected={state.techStack.includes(opt.id)}
            onClick={() => toggle(opt.id)}
            className="text-base px-4 py-2"
          >
            {opt.icon} {opt.label}
          </BrutalBadge>
        ))}
      </div>
      {state.techStack.length > 0 && (
        <p className="mt-4 font-heading font-bold text-sm">
          Selected: {state.techStack.length}
        </p>
      )}
    </div>
  );
}
