import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface BrutalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "pink" | "green" | "purple" | "orange";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  primary: "bg-brutal-yellow text-brutal-black",
  secondary: "bg-brutal-white text-brutal-black",
  pink: "bg-brutal-pink text-brutal-black",
  green: "bg-brutal-green text-brutal-black",
  purple: "bg-brutal-purple text-white",
  orange: "bg-brutal-orange text-brutal-black",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function BrutalButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BrutalButtonProps) {
  return (
    <button
      className={cn(
        "font-heading font-bold brutal-border brutal-shadow brutal-hover cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
