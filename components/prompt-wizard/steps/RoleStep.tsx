"use client";

import { WizardState } from "@/lib/prompt-builder";
import { roles } from "@/data/wizard-options";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { cn } from "@/lib/utils";

interface StepProps {
  state: WizardState;
  setState: React.Dispatch<React.SetStateAction<WizardState>>;
}

const colors = ["green", "yellow", "pink", "blue", "purple", "orange"] as const;

export function RoleStep({ state, setState }: StepProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold mb-2">
        Who are you?
      </h2>
      <p className="text-sm mb-6 text-brutal-black/60">
        This helps Claude adapt its explanations to your level.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role, i) => (
          <BrutalCard
            key={role.id}
            color={colors[i % colors.length]}
            hoverable
            className={cn(
              state.role === role.id &&
                "ring-4 ring-brutal-black ring-offset-2 translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_var(--color-brutal-black)]"
            )}
            onClick={() =>
              setState((s) => ({ ...s, role: role.id }))
            }
          >
            <div className="text-3xl mb-2">{role.icon}</div>
            <h3 className="font-heading font-bold text-lg">{role.label}</h3>
            {role.description && (
              <p className="text-xs text-brutal-black/60 mt-1">{role.description}</p>
            )}
          </BrutalCard>
        ))}
      </div>
    </div>
  );
}
