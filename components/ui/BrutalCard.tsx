import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BrutalCardProps extends HTMLAttributes<HTMLDivElement> {
  color?: "yellow" | "pink" | "blue" | "green" | "purple" | "orange" | "white" | "red";
  hoverable?: boolean;
}

const colorClasses = {
  yellow: "bg-brutal-yellow",
  pink: "bg-brutal-pink",
  blue: "bg-brutal-blue",
  green: "bg-brutal-green",
  purple: "bg-brutal-purple",
  orange: "bg-brutal-orange",
  white: "bg-brutal-white",
  red: "bg-brutal-red",
};

export function BrutalCard({
  color = "white",
  hoverable = false,
  className,
  children,
  ...props
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        "brutal-border brutal-shadow p-6",
        colorClasses[color],
        hoverable && "brutal-hover cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
