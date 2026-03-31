"use client";

import { useState } from "react";
import { WizardState, initialWizardState, buildPrompt } from "@/lib/prompt-builder";
import { ProjectTypeStep } from "./steps/ProjectTypeStep";
import { TechStackStep } from "./steps/TechStackStep";
import { FeaturesStep } from "./steps/FeaturesStep";
import { ConstraintsStep } from "./steps/ConstraintsStep";
import { StyleStep } from "./steps/StyleStep";
import { PromptOutput } from "./PromptOutput";
import { BrutalButton } from "@/components/ui/BrutalButton";

const STEP_LABELS = [
  "Project Type",
  "Tech Stack",
  "Features",
  "Constraints",
  "Code Style",
  "Your Prompt",
];

export function WizardContainer() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<WizardState>(initialWizardState);

  const totalSteps = STEP_LABELS.length;

  const canProceed = () => {
    switch (step) {
      case 0:
        return state.projectType !== null;
      case 1:
        return state.techStack.length > 0;
      default:
        return true;
    }
  };

  const goNext = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const goPrev = () => setStep((s) => Math.max(s - 1, 0));
  const reset = () => {
    setState(initialWizardState);
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
        {step === 0 && <ProjectTypeStep state={state} setState={setState} />}
        {step === 1 && <TechStackStep state={state} setState={setState} />}
        {step === 2 && <FeaturesStep state={state} setState={setState} />}
        {step === 3 && <ConstraintsStep state={state} setState={setState} />}
        {step === 4 && <StyleStep state={state} setState={setState} />}
        {step === 5 && <PromptOutput prompt={buildPrompt(state)} onReset={reset} />}
      </div>

      {/* Navigation */}
      {step < 5 && (
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
            {step === 4 ? "Generate Prompt →" : "Next →"}
          </BrutalButton>
        </div>
      )}
    </div>
  );
}
