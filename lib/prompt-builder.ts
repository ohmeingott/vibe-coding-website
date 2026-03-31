import { projectTypes, techStacks, features, constraints, codeStyles } from "@/data/wizard-options";

export interface WizardState {
  projectType: string | null;
  techStack: string[];
  features: string[];
  customFeature: string;
  constraints: string[];
  customConstraint: string;
  codeStyle: string[];
}

export const initialWizardState: WizardState = {
  projectType: null,
  techStack: [],
  features: [],
  customFeature: "",
  constraints: [],
  customConstraint: "",
  codeStyle: [],
};

function findLabel(options: { id: string; label: string }[], id: string): string {
  return options.find((o) => o.id === id)?.label ?? id;
}

export function buildPrompt(state: WizardState): string {
  const lines: string[] = [];

  // Project type
  const projectLabel = findLabel(projectTypes, state.projectType ?? "");
  lines.push(`I want to build a ${projectLabel}.`);
  lines.push("");

  // Tech stack
  if (state.techStack.length > 0) {
    const stackOptions = state.projectType ? techStacks[state.projectType] ?? [] : [];
    const stackLabels = state.techStack.map((id) => findLabel(stackOptions, id));
    lines.push(`Tech stack: ${stackLabels.join(", ")}`);
    lines.push("");
  }

  // Features
  const selectedFeatures = state.features.map((id) => findLabel(features, id));
  if (state.customFeature.trim()) {
    selectedFeatures.push(state.customFeature.trim());
  }
  if (selectedFeatures.length > 0) {
    lines.push("Features needed:");
    selectedFeatures.forEach((f) => lines.push(`- ${f}`));
    lines.push("");
  }

  // Constraints
  const selectedConstraints = state.constraints.map((id) => findLabel(constraints, id));
  if (state.customConstraint.trim()) {
    selectedConstraints.push(state.customConstraint.trim());
  }
  if (selectedConstraints.length > 0) {
    lines.push("Constraints:");
    selectedConstraints.forEach((c) => lines.push(`- ${c}`));
    lines.push("");
  }

  // Code style
  if (state.codeStyle.length > 0) {
    const styleLabels = state.codeStyle.map((id) => findLabel(codeStyles, id));
    lines.push("Code style preferences:");
    styleLabels.forEach((s) => lines.push(`- ${s}`));
    lines.push("");
  }

  lines.push("Please start by creating a plan for this project, then implement it step by step.");

  return lines.join("\n");
}
