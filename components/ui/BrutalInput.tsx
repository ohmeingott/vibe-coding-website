import { cn } from "@/lib/utils";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BrutalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function BrutalInput({ label, className, ...props }: BrutalInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-heading font-bold text-sm">{label}</label>
      )}
      <input
        className={cn(
          "brutal-border px-4 py-3 bg-brutal-white text-brutal-black font-body",
          "focus:outline-none focus:ring-2 focus:ring-brutal-yellow focus:ring-offset-2",
          className
        )}
        {...props}
      />
    </div>
  );
}

interface BrutalTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function BrutalTextarea({ label, className, ...props }: BrutalTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-heading font-bold text-sm">{label}</label>
      )}
      <textarea
        className={cn(
          "brutal-border px-4 py-3 bg-brutal-white text-brutal-black font-body resize-none",
          "focus:outline-none focus:ring-2 focus:ring-brutal-yellow focus:ring-offset-2",
          className
        )}
        {...props}
      />
    </div>
  );
}
