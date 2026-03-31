"use client";

import { WizardState } from "@/lib/prompt-builder";
import { projectTypes } from "@/data/wizard-options";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { cn } from "@/lib/utils";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["yellow", "pink", "blue", "green", "purple", "orange"] as const;

export function ProjectTypeStep({ state, setState }: StepProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-6">
        What are you building?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectTypes.map((type, i) => (
          <BrutalCard
            key={type.id}
            color={colors[i % colors.length]}
            hoverable
            className={cn(
              state.projectType === type.id &&
                "ring-4 ring-brutal-black ring-offset-2 translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_var(--color-brutal-black)]"
            )}
            onClick={() =>
              setState((s) => ({
                ...s,
                projectType: type.id,
                techStack: [],
              }))
            }
          >
            <div className="text-3xl mb-2">{type.icon}</div>
            <h3 className="font-heading font-bold text-lg">{type.label}</h3>
          </BrutalCard>
        ))}
      </div>
    </div>
  );
}
