"use client";

import { useState } from "react";
import { WizardState, initialState, buildPrompt } from "@/lib/prompt-builder";
import { RoleStep } from "./steps/RoleStep";
import { ProjectTypeStep } from "./steps/ProjectTypeStep";
import { IdeaStep } from "./steps/IdeaStep";
import { VibesStep } from "./steps/VibesStep";
import { PromptOutput } from "./PromptOutput";
import { BrutalButton } from "@/components/ui/BrutalButton";

const STEP_LABELS = [
  "Who Are You",
  "Your Idea",
  "What to Build",
  "Look & Feel",
  "Your Prompt",
];

export function WizardContainer() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<WizardState>(initialState);

  const totalSteps = STEP_LABELS.length;
  const lastStep = totalSteps - 1;

  const canProceed = () => {
    switch (step) {
      case 0:
        return state.role !== null;
      case 1:
        return true; // idea is optional but encouraged
      case 2:
        return state.projectType !== null;
      default:
        return true;
    }
  };

  const goNext = () => setStep((s) => Math.min(s + 1, lastStep));
  const goPrev = () => setStep((s) => Math.max(s - 1, 0));
  const reset = () => {
    setState(initialState);
    setStep(0);
  };

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {STEP_LABELS.map((label, i) => (
            <span
              key={label}
              className={`text-xs font-heading font-bold hidden md:block ${
                i <= step ? "text-brutal-black" : "text-brutal-black/30"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="w-full h-4 bg-brutal-white brutal-border overflow-hidden">
          <div
            className="h-full bg-brutal-yellow transition-all duration-500"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
        <p className="text-sm font-heading font-bold mt-2 md:hidden">
          Step {step + 1} of {totalSteps}: {STEP_LABELS[step]}
        </p>
      </div>

      {/* Step content */}
      <div className="min-h-[400px]">
        {step === 0 && <RoleStep state={state} setState={setState} />}
        {step === 1 && <IdeaStep state={state} setState={setState} />}
        {step === 2 && <ProjectTypeStep state={state} setState={setState} />}
        {step === 3 && <VibesStep state={state} setState={setState} />}
        {step === 4 && <PromptOutput prompt={buildPrompt(state)} onReset={reset} />}
      </div>

      {/* Navigation */}
      {step < lastStep && (
        <div className="flex justify-between mt-8">
          <BrutalButton
            variant="secondary"
            onClick={goPrev}
            disabled={step === 0}
            className="disabled:opacity-30"
          >
            ← Back
          </BrutalButton>
          <BrutalButton onClick={goNext} disabled={!canProceed()} className="disabled:opacity-30">
            {step === lastStep - 1 ? "Generate Prompt →" : "Next →"}
          </BrutalButton>
        </div>
      )}
    </div>
  );
}
