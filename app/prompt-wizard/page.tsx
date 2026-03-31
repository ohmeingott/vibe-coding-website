import { WizardContainer } from "@/components/prompt-wizard/WizardContainer";

export default function PromptWizardPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
        Prompt Wizard
      </h1>
      <p className="text-lg mb-8">
        Answer a few questions and get a ready-to-paste prompt for Claude Code.
      </p>
      <WizardContainer />
    </div>
  );
}
