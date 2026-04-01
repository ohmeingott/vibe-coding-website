"use client";

import { WizardState } from "@/lib/prompt-builder";
import { vibes } from "@/data/wizard-options";
import { BrutalBadge } from "@/components/ui/BrutalBadge";
import { BrutalInput } from "@/components/ui/BrutalInput";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["yellow", "pink", "blue", "green", "purple", "orange"] as const;

export function VibesStep({ state, setState }: StepProps) {
  const toggle = (id: string) => {
    setState((s) => ({
      ...s,
      vibe: s.vibe.includes(id)
        ? s.vibe.filter((v) => v !== id)
        : [...s.vibe, id],
    }));
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        How should it look and feel?
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Pick the vibe that matches your vision.
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        {vibes.map((v, i) => (
          <BrutalBadge
            key={v.id}
            color={colors[i % colors.length]}
            selected={state.vibe.includes(v.id)}
            onClick={() => toggle(v.id)}
            className="text-base px-4 py-2"
          >
            {v.icon} {v.label}
            {v.description && (
              <span className="block text-xs opacity-60">{v.description}</span>
            )}
          </BrutalBadge>
        ))}
      </div>
      <BrutalInput
        label="Anything else you'd like to add? (optional)"
        placeholder="e.g., I want it to be blue, or it's for a pet store..."
        value={state.extraWishes}
        onChange={(e) =>
          setState((s) => ({ ...s, extraWishes: e.target.value }))
        }
      />
    </div>
  );
}
