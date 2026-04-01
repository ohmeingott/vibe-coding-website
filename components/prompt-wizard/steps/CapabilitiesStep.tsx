"use client";

import { WizardState } from "@/lib/prompt-builder";
import { capabilities } from "@/data/wizard-options";
import { BrutalBadge } from "@/components/ui/BrutalBadge";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["yellow", "pink", "blue", "green", "purple", "orange"] as const;

export function CapabilitiesStep({ state, setState }: StepProps) {
  const options = state.projectType ? capabilities[state.projectType] ?? [] : [];

  const toggle = (id: string) => {
    setState((s) => ({
      ...s,
      capabilities: s.capabilities.includes(id)
        ? s.capabilities.filter((c) => c !== id)
        : [...s.capabilities, id],
    }));
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        What should it be able to do?
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Pick everything that sounds useful. You can always add more later.
      </p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt, i) => (
          <BrutalBadge
            key={opt.id}
            color={colors[i % colors.length]}
            selected={state.capabilities.includes(opt.id)}
            onClick={() => toggle(opt.id)}
            className="text-base px-4 py-2"
          >
            {opt.icon} {opt.label}
            {opt.description && (
              <span className="block text-xs opacity-60">{opt.description}</span>
            )}
          </BrutalBadge>
        ))}
      </div>
      {state.capabilities.length > 0 && (
        <p className="mt-4 font-heading font-bold text-sm">
          Selected: {state.capabilities.length}
        </p>
      )}
    </div>
  );
}
