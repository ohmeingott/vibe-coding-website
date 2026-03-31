"use client";

import { WizardState } from "@/lib/prompt-builder";
import { codeStyles } from "@/data/wizard-options";
import { BrutalBadge } from "@/components/ui/BrutalBadge";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["yellow", "pink", "blue", "green", "purple", "orange"] as const;

export function StyleStep({ state, setState }: StepProps) {
  const toggle = (id: string) => {
    setState((s) => ({
      ...s,
      codeStyle: s.codeStyle.includes(id)
        ? s.codeStyle.filter((c) => c !== id)
        : [...s.codeStyle, id],
    }));
  };

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        How should the code be written?
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        Choose your code style preferences.
      </p>
      <div className="flex flex-wrap gap-3">
        {codeStyles.map((style, i) => (
          <BrutalBadge
            key={style.id}
            color={colors[i % colors.length]}
            selected={state.codeStyle.includes(style.id)}
            onClick={() => toggle(style.id)}
            className="text-base px-4 py-2"
          >
            {style.icon} {style.label}
          </BrutalBadge>
        ))}
      </div>
    </div>
  );
}
