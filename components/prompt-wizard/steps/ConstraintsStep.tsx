"use client";

import { WizardState } from "@/lib/prompt-builder";
import { constraints } from "@/data/wizard-options";
import { BrutalBadge } from "@/components/ui/BrutalBadge";
import { BrutalInput } from "@/components/ui/BrutalInput";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["yellow", "pink", "blue", "green", "purple", "orange"] as const;

export function ConstraintsStep({ state, setState }: StepProps) {
  const toggle = (id: string) => {
    setState((s) => ({
      ...s,
      constraints: s.constraints.includes(id)
        ? s.constraints.filter((c) => c !== id)
        : [...s.constraints, id],
    }));
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        Any constraints?
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Select constraints for your project, or skip this step.
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        {constraints.map((constraint, i) => (
          <BrutalBadge
            key={constraint.id}
            color={colors[i % colors.length]}
            selected={state.constraints.includes(constraint.id)}
            onClick={() => toggle(constraint.id)}
            className="text-base px-4 py-2"
          >
            {constraint.icon} {constraint.label}
          </BrutalBadge>
        ))}
      </div>
      <BrutalInput
        label="Other constraints (optional)"
        placeholder="e.g., must run on Node 18, no MongoDB..."
        value={state.customConstraint}
        onChange={(e) =>
          setState((s) => ({ ...s, customConstraint: e.target.value }))
        }
      />
    </div>
  );
}
