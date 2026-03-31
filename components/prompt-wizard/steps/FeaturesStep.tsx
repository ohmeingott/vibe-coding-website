"use client";

import { WizardState } from "@/lib/prompt-builder";
import { features } from "@/data/wizard-options";
import { BrutalBadge } from "@/components/ui/BrutalBadge";
import { BrutalInput } from "@/components/ui/BrutalInput";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["yellow", "pink", "blue", "green", "purple", "orange"] as const;

export function FeaturesStep({ state, setState }: StepProps) {
  const toggle = (id: string) => {
    setState((s) => ({
      ...s,
      features: s.features.includes(id)
        ? s.features.filter((f) => f !== id)
        : [...s.features, id],
    }));
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        What features do you need?
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Select all that apply, or skip this step.
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        {features.map((feat, i) => (
          <BrutalBadge
            key={feat.id}
            color={colors[i % colors.length]}
            selected={state.features.includes(feat.id)}
            onClick={() => toggle(feat.id)}
            className="text-base px-4 py-2"
          >
            {feat.icon} {feat.label}
          </BrutalBadge>
        ))}
      </div>
      <BrutalInput
        label="Other features (optional)"
        placeholder="e.g., RSS feed, admin dashboard, dark mode..."
        value={state.customFeature}
        onChange={(e) =>
          setState((s) => ({ ...s, customFeature: e.target.value }))
        }
      />
    </div>
  );
}
