import { cn } from "@/lib/utils";

interface BrutalBadgeProps {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue" | "green" | "purple" | "orange";
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const colorClasses = {
  yellow: "bg-brutal-yellow",
  pink: "bg-brutal-pink",
  blue: "bg-brutal-blue",
  green: "bg-brutal-green",
  purple: "bg-brutal-purple text-white",
  orange: "bg-brutal-orange",
};

export function BrutalBadge({
  children,
  color = "yellow",
  selected = false,
  onClick,
  className,
}: BrutalBadgeProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-block px-3 py-1 text-sm font-bold font-heading brutal-border",
        colorClasses[color],
        onClick && "cursor-pointer brutal-hover brutal-shadow",
        selected && "ring-2 ring-brutal-black ring-offset-2",
        className
      )}
    >
      {children}
    </span>
  );
}
