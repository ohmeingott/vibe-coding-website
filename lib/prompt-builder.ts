import { projectTypes, capabilities, vibes, roles } from "@/data/wizard-options";

export interface WizardState {
  role: string | null;
  projectType: string | null;
  idea: string;
  capabilities: string[];
  vibe: string[];
  extraWishes: string;
}

export const initialState: WizardState = {
  role: null,
  projectType: null,
  idea: "",
  capabilities: [],
  vibe: [],
  extraWishes: "",
};

function findLabel(id: string, options: { id: string; label: string }[]): string {
  return options.find((o) => o.id === id)?.label || id;
}

export function buildPrompt(state: WizardState): string {
  const projectLabel = state.projectType
    ? findLabel(state.projectType, projectTypes)
    : "a project";

  const roleLabel = state.role
    ? findLabel(state.role, roles)
    : "someone new to coding";

  const allCapabilities = state.projectType
    ? capabilities[state.projectType] || []
    : [];

  // Role & context
  let prompt = `## Who I am\nI'm ${roleLabel === "Developer" ? "a developer" : roleLabel === "Complete Beginner" ? "a complete beginner with no coding experience" : `a ${roleLabel.toLowerCase()}`}. `;

  if (state.role === "beginner" || state.role === "designer" || state.role === "pm") {
    prompt += `Please explain technical decisions in plain language and guide me through everything.\n\n`;
  } else if (state.role === "data") {
    prompt += `I'm comfortable with data and SQL but less experienced with web development.\n\n`;
  } else {
    prompt += `Keep explanations concise but flag important architectural decisions.\n\n`;
  }

  // The Idea (emphasized)
  prompt += `## My Idea\n`;
  if (state.idea.trim()) {
    prompt += `${state.idea.trim()}\n\n`;
  } else {
    prompt += `I want to build: ${projectLabel}\n\n`;
  }

  // Project type
  prompt += `## Project Type\n${projectLabel}\n\n`;

  // This is a new project
  prompt += `## Context\nThis is a brand new project. Start from scratch with a clean folder. Choose a sensible tech stack for this kind of project and explain why you chose it.\n\n`;

  // Capabilities
  if (state.capabilities.length > 0) {
    prompt += `## Features & Capabilities\n`;
    state.capabilities.forEach((id) => {
      const label = findLabel(id, allCapabilities);
      prompt += `- ${label}\n`;
    });
    prompt += `\n`;
  }

  // Vibe
  if (state.vibe.length > 0) {
    prompt += `## Look & Feel\n`;
    state.vibe.forEach((id) => {
      const label = findLabel(id, vibes);
      prompt += `- ${label}\n`;
    });
    prompt += `\n`;
  }

  // Extra wishes
  if (state.extraWishes.trim()) {
    prompt += `## Additional Details\n${state.extraWishes.trim()}\n\n`;
  }

  // Instructions for Claude
  prompt += `## How to Work\n`;
  prompt += `1. Start by creating a clear plan. Present it to me before writing any code.\n`;
  prompt += `2. Build it step by step. After each step, briefly tell me what you did.\n`;
  prompt += `3. Make it run locally so I can see it in my browser or terminal.\n`;
  prompt += `4. When something breaks, fix it and explain what went wrong.\n`;
  prompt += `5. At the end, give me a short summary of what was built and how to use it.`;

  return prompt;
}
