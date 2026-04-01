export interface CheatSheetCommand {
  command: string;
  description: string;
}

export interface CheatSheetCategory {
  title: string;
  color: "yellow" | "pink" | "blue" | "green" | "purple" | "orange";
  commands: CheatSheetCommand[];
}

export const cheatsheetData: CheatSheetCategory[] = [
  {
    title: "Getting Started",
    color: "yellow",
    commands: [
      { command: "claude", description: "Start Claude Code in interactive mode" },
      { command: "claude \"prompt\"", description: "Start with an initial prompt" },
      { command: "claude -p \"prompt\"", description: "Print mode — run and exit (no interactive session)" },
      { command: "claude -c", description: "Continue the most recent conversation" },
    ],
  },
  {
    title: "Slash Commands",
    color: "pink",
    commands: [
      { command: "/help", description: "Show available commands and help" },
      { command: "/clear", description: "Clear the conversation history" },
      { command: "/compact", description: "Compress the conversation to save context" },
      { command: "/review", description: "See a summary of what Claude changed" },
      { command: "/cost", description: "Show token usage and estimated cost" },
      { command: "/model", description: "Switch the active model" },
    ],
  },
  {
    title: "Keyboard Shortcuts",
    color: "blue",
    commands: [
      { command: "Enter", description: "Send your message" },
      { command: "Escape", description: "Cancel the current operation" },
      { command: "Tab", description: "Accept autocomplete suggestion" },
      { command: "Up Arrow", description: "Cycle through message history" },
      { command: "Ctrl+C", description: "Interrupt current generation" },
    ],
  },
  {
    title: "Useful Flags",
    color: "green",
    commands: [
      { command: "--model <name>", description: "Choose a specific model (opus, sonnet, haiku)" },
      { command: "--allowedTools", description: "Pre-allow specific tools" },
      { command: "--verbose", description: "Show detailed tool call output" },
      { command: "--output-format json", description: "Output in JSON format (for scripting)" },
    ],
  },
  {
    title: "Pro Tips",
    color: "purple",
    commands: [
      { command: "CLAUDE.md", description: "Add a CLAUDE.md file to your repo for persistent project context" },
      { command: "Plan Mode", description: "Use /plan to think before coding — great for complex tasks" },
      { command: "Be Specific", description: "The more context you give, the better the output" },
      { command: "Iterate", description: "Don't try to do everything in one prompt — build step by step" },
    ],
  },
  {
    title: "Workflow Patterns",
    color: "orange",
    commands: [
      { command: "\"Explain what this does\"", description: "Let Claude explain any part of the project to you" },
      { command: "\"Fix the failing tests\"", description: "Let Claude read errors and fix the code" },
      { command: "\"Refactor X to use Y\"", description: "Guided refactoring with context" },
      { command: "\"Add tests for X\"", description: "Generate tests for existing code" },
    ],
  },
];
