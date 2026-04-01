"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/slides", label: "Slides" },
  { href: "/prompt-wizard", label: "Prompt Wizard" },
{ href: "/cheat-sheet", label: "Cheat Sheet" },
  { href: "/best-practices", label: "Best Practices" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="brutal-border border-t-0 border-x-0 bg-brutal-yellow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl">
          <span>⚡ VIBE CODING</span>
          <span className="text-sm font-body font-normal opacity-70">by</span>
          <Image src="/eduki-logo.svg" alt="eduki" width={70} height={24} className="inline-block -mt-0.5" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 font-heading font-bold text-sm brutal-hover",
                pathname === link.href
                  ? "bg-brutal-black text-brutal-yellow brutal-border"
                  : "hover:bg-brutal-black/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-heading font-bold text-2xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-3 border-brutal-black bg-brutal-yellow px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-3 py-3 font-heading font-bold text-base",
                pathname === link.href
                  ? "bg-brutal-black text-brutal-yellow"
                  : "hover:bg-brutal-black/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
