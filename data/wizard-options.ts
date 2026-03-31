export interface WizardOption {
  id: string;
  label: string;
  icon: string;
}

export const projectTypes: WizardOption[] = [
  { id: "web-app", label: "Web Application", icon: "🌐" },
  { id: "api", label: "API / Backend", icon: "⚙️" },
  { id: "cli", label: "CLI Tool", icon: "💻" },
  { id: "mobile", label: "Mobile App", icon: "📱" },
  { id: "library", label: "Library / Package", icon: "📦" },
  { id: "script", label: "Script / Automation", icon: "🤖" },
];

export const techStacks: Record<string, WizardOption[]> = {
  "web-app": [
    { id: "nextjs", label: "Next.js", icon: "▲" },
    { id: "react", label: "React + Vite", icon: "⚛️" },
    { id: "vue", label: "Vue.js", icon: "💚" },
    { id: "svelte", label: "SvelteKit", icon: "🔥" },
    { id: "astro", label: "Astro", icon: "🚀" },
    { id: "html", label: "Plain HTML/CSS/JS", icon: "📄" },
  ],
  api: [
    { id: "express", label: "Express.js", icon: "🟢" },
    { id: "fastapi", label: "FastAPI (Python)", icon: "🐍" },
    { id: "django", label: "Django", icon: "🎸" },
    { id: "go", label: "Go", icon: "🐹" },
    { id: "rust", label: "Rust (Actix/Axum)", icon: "🦀" },
    { id: "rails", label: "Ruby on Rails", icon: "💎" },
  ],
  cli: [
    { id: "node-cli", label: "Node.js", icon: "🟢" },
    { id: "python-cli", label: "Python", icon: "🐍" },
    { id: "go-cli", label: "Go", icon: "🐹" },
    { id: "rust-cli", label: "Rust", icon: "🦀" },
    { id: "bash", label: "Bash / Shell", icon: "🐚" },
  ],
  mobile: [
    { id: "react-native", label: "React Native", icon: "⚛️" },
    { id: "flutter", label: "Flutter", icon: "🦋" },
    { id: "swift", label: "Swift (iOS)", icon: "🍎" },
    { id: "kotlin", label: "Kotlin (Android)", icon: "🤖" },
  ],
  library: [
    { id: "npm-pkg", label: "npm Package (TS)", icon: "📦" },
    { id: "pypi-pkg", label: "PyPI Package", icon: "🐍" },
    { id: "crate", label: "Rust Crate", icon: "🦀" },
    { id: "go-mod", label: "Go Module", icon: "🐹" },
  ],
  script: [
    { id: "python-script", label: "Python", icon: "🐍" },
    { id: "node-script", label: "Node.js", icon: "🟢" },
    { id: "bash-script", label: "Bash", icon: "🐚" },
    { id: "deno-script", label: "Deno", icon: "🦕" },
  ],
};

export const features: WizardOption[] = [
  { id: "auth", label: "Authentication", icon: "🔐" },
  { id: "database", label: "Database", icon: "🗄️" },
  { id: "file-upload", label: "File Upload", icon: "📁" },
  { id: "payments", label: "Payments", icon: "💳" },
  { id: "email", label: "Email Sending", icon: "📧" },
  { id: "realtime", label: "Real-time / WebSockets", icon: "⚡" },
  { id: "search", label: "Search", icon: "🔍" },
  { id: "ai-integration", label: "AI / LLM Integration", icon: "🧠" },
  { id: "testing", label: "Testing Setup", icon: "🧪" },
  { id: "ci-cd", label: "CI/CD Pipeline", icon: "🔄" },
  { id: "docker", label: "Docker", icon: "🐳" },
  { id: "i18n", label: "Internationalization", icon: "🌍" },
];

export const constraints: WizardOption[] = [
  { id: "keep-simple", label: "Keep it simple", icon: "✨" },
  { id: "type-safe", label: "Must be type-safe", icon: "🛡️" },
  { id: "no-external-apis", label: "No paid external APIs", icon: "🚫" },
  { id: "open-source", label: "Use only open-source tools", icon: "🔓" },
  { id: "production-ready", label: "Production-ready quality", icon: "🏭" },
  { id: "minimal-deps", label: "Minimal dependencies", icon: "📉" },
  { id: "well-documented", label: "Well documented", icon: "📝" },
  { id: "accessible", label: "Accessible (a11y)", icon: "♿" },
];

export const codeStyles: WizardOption[] = [
  { id: "clean", label: "Clean & readable", icon: "✨" },
  { id: "commented", label: "Well commented", icon: "💬" },
  { id: "minimal", label: "Minimal & concise", icon: "🎯" },
  { id: "modular", label: "Modular architecture", icon: "🧩" },
  { id: "tested", label: "Test-driven", icon: "🧪" },
  { id: "functional", label: "Functional style", icon: "λ" },
];
