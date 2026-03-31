"use client";

import { SlideData, SlideTransition } from "@/data/slides";
import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

function renderText(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="bg-brutal-yellow px-1 font-bold">{part}</span>
    ) : (
      part
    )
  );
}

interface SlideProps {
  data: SlideData;
  isActive: boolean;
  isLeaving: boolean;
  visible: boolean;
  direction: "next" | "prev";
}

function getTransitionStyle(
  transition: SlideTransition,
  state: "enter" | "active" | "leave",
  direction: "next" | "prev"
): CSSProperties {
  const dir = direction === "next" ? 1 : -1;

  switch (transition) {
    case "slide":
      if (state === "active") return { transform: "translateX(0)", opacity: 1 };
      if (state === "enter") return { transform: `translateX(${dir * 100}%)`, opacity: 0 };
      return { transform: `translateX(${-dir * 100}%)`, opacity: 0 };

    case "zoom":
      if (state === "active") return { transform: "scale(1)", opacity: 1 };
      if (state === "enter") return { transform: "scale(0.3)", opacity: 0 };
      return { transform: "scale(1.5)", opacity: 0 };

    case "fade-up":
      if (state === "active") return { transform: "translateY(0)", opacity: 1 };
      if (state === "enter") return { transform: "translateY(60px)", opacity: 0 };
      return { transform: "translateY(-60px)", opacity: 0 };

    case "rotate":
      if (state === "active") return { transform: "rotate(0deg) scale(1)", opacity: 1 };
      if (state === "enter") return { transform: `rotate(${dir * 8}deg) scale(0.85)`, opacity: 0 };
      return { transform: `rotate(${-dir * 8}deg) scale(0.85)`, opacity: 0 };

    case "flip":
      if (state === "active") return { transform: "perspective(1200px) rotateY(0deg)", opacity: 1 };
      if (state === "enter") return { transform: `perspective(1200px) rotateY(${dir * 90}deg)`, opacity: 0 };
      return { transform: `perspective(1200px) rotateY(${-dir * 90}deg)`, opacity: 0 };

    case "bounce":
      if (state === "active") return { transform: "translateY(0) scale(1)", opacity: 1 };
      if (state === "enter") return { transform: "translateY(100px) scale(0.9)", opacity: 0 };
      return { transform: "translateY(-40px) scale(0.95)", opacity: 0 };
  }
}

const transitionTimings: Record<SlideTransition, string> = {
  slide: "0.6s cubic-bezier(0.65, 0, 0.35, 1)",
  zoom: "0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "fade-up": "0.6s cubic-bezier(0.22, 1, 0.36, 1)",
  rotate: "0.7s cubic-bezier(0.34, 1.2, 0.64, 1)",
  flip: "0.7s cubic-bezier(0.4, 0, 0.2, 1)",
  bounce: "0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
};

export function Slide({ data, isActive, isLeaving, visible, direction }: SlideProps) {
  const transition = data.transition || "slide";
  const state = isActive ? "active" : isLeaving ? "leave" : "enter";
  const style = getTransitionStyle(transition, state, direction);
  const timing = transitionTimings[transition];

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center p-8 md:p-16 overflow-hidden",
        data.bgColor,
        !visible && "pointer-events-none"
      )}
      style={{
        ...style,
        transition: `transform ${timing}, opacity ${timing}`,
        visibility: visible ? "visible" : "hidden",
        zIndex: isActive ? 2 : isLeaving ? 1 : 0,
      }}
    >
      {/* Animated background shapes */}
      <div
        className={cn(
          "absolute top-10 right-10 w-32 h-32 brutal-border bg-white/10 transition-all duration-700 delay-300",
          isActive
            ? "opacity-100 rotate-12 scale-100"
            : "opacity-0 rotate-45 scale-50"
        )}
      />
      <div
        className={cn(
          "absolute bottom-20 left-10 w-20 h-20 brutal-border bg-black/10 transition-all duration-700 delay-500",
          isActive
            ? "opacity-100 -rotate-6 scale-100"
            : "opacity-0 -rotate-45 scale-50"
        )}
      />
      <div
        className={cn(
          "absolute top-1/4 left-[5%] w-12 h-12 bg-white/15 brutal-border transition-all duration-500 delay-700",
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        )}
      />

      <div
        className={cn(
          "max-w-4xl w-full relative z-10 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
      >
        {data.layout === "title" && (
          <TitleLayout data={data} isActive={isActive} />
        )}
        {data.layout === "bullets" && (
          <BulletsLayout data={data} isActive={isActive} />
        )}
        {data.layout === "code" && (
          <CodeLayout data={data} isActive={isActive} />
        )}
        {data.layout === "two-column" && (
          <TwoColumnLayout data={data} isActive={isActive} />
        )}
        {data.layout === "evolution" && (
          <EvolutionLayout data={data} isActive={isActive} />
        )}
      </div>
    </div>
  );
}

function TitleLayout({
  data,
  isActive,
}: {
  data: SlideData;
  isActive: boolean;
}) {
  return (
    <div className="text-center">
      <h1
        className={cn(
          "font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-600",
          isActive
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        )}
        style={{ transitionDelay: isActive ? "200ms" : "0ms" }}
      >
        {data.title}
      </h1>
      {data.subtitle && (
        <p
          className={cn(
            "text-xl md:text-2xl lg:text-3xl font-body transition-all duration-500",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: isActive ? "400ms" : "0ms" }}
        >
          {data.subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div
        className={cn(
          "mx-auto mt-8 h-1 bg-brutal-black transition-all duration-700",
          isActive ? "w-48 opacity-100" : "w-0 opacity-0"
        )}
        style={{ transitionDelay: isActive ? "600ms" : "0ms" }}
      />
    </div>
  );
}

function BulletsLayout({
  data,
  isActive,
}: {
  data: SlideData;
  isActive: boolean;
}) {
  return (
    <div>
      <h2
        className={cn(
          "font-heading text-3xl md:text-5xl font-bold transition-all duration-500",
          data.subtitle ? "mb-3" : "mb-8",
          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        )}
        style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
      >
        {data.title}
      </h2>
      {data.subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl font-body mb-8 transition-all duration-500",
            isActive ? "opacity-80 translate-x-0" : "opacity-0 -translate-x-4"
          )}
          style={{ transitionDelay: isActive ? "250ms" : "0ms" }}
        >
          {data.subtitle}
        </p>
      )}
      <ul className="space-y-4">
        {data.bullets?.map((bullet, i) => (
          <li
            key={i}
            className={cn(
              "text-lg md:text-xl font-body flex items-start gap-3 transition-all duration-500",
              isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{
              transitionDelay: isActive ? `${300 + i * 100}ms` : "0ms",
            }}
          >
            <span
              className={cn(
                "bg-brutal-black text-white font-heading font-bold w-8 h-8 flex items-center justify-center shrink-0 text-sm transition-all duration-300",
                isActive ? "scale-100 rotate-0" : "scale-0 rotate-90"
              )}
              style={{
                transitionDelay: isActive ? `${250 + i * 100}ms` : "0ms",
              }}
            >
              {i + 1}
            </span>
            <span className="pt-1">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CodeLayout({
  data,
  isActive,
}: {
  data: SlideData;
  isActive: boolean;
}) {
  return (
    <div>
      <h2
        className={cn(
          "font-heading text-3xl md:text-5xl font-bold mb-8 transition-all duration-500",
          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        )}
        style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
      >
        {data.title}
      </h2>
      {data.code && (
        <pre
          className={cn(
            "bg-brutal-black text-brutal-yellow p-6 brutal-border brutal-shadow-lg font-mono text-sm md:text-base overflow-x-auto transition-all duration-600",
            isActive
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          )}
          style={{ transitionDelay: isActive ? "300ms" : "0ms" }}
        >
          <code>{data.code}</code>
        </pre>
      )}
    </div>
  );
}

function TwoColumnLayout({
  data,
  isActive,
}: {
  data: SlideData;
  isActive: boolean;
}) {
  return (
    <div>
      <h2
        className={cn(
          "font-heading text-3xl md:text-5xl font-bold transition-all duration-500",
          data.subtitle ? "mb-3" : "mb-8",
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        )}
        style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
      >
        {data.title}
      </h2>
      {data.subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl font-body mb-8 opacity-80 transition-all duration-500",
            isActive ? "opacity-80 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: isActive ? "250ms" : "0ms" }}
        >
          {data.subtitle}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={cn(
            "bg-white/30 brutal-border p-4 transition-all duration-500",
            isActive
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          )}
          style={{ transitionDelay: isActive ? "300ms" : "0ms" }}
        >
          {data.leftImage && (
            <div className="relative mb-3">
              <img
                src={data.leftImage.src}
                alt=""
                className="w-full h-32 md:h-40 object-cover brutal-border"
              />
              {data.leftImage.label && (
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  <span className="font-heading font-bold text-xs bg-brutal-black text-brutal-yellow px-2 py-1 brutal-border">
                    ← {data.leftImage.label}
                  </span>
                </div>
              )}
            </div>
          )}
          {data.leftColumn?.map((item, i) => (
            <p
              key={i}
              className={cn(
                "font-body transition-all duration-400",
                i === 0 ? "font-heading text-xl font-bold mb-3" : "text-lg mb-2",
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              )}
              style={{
                transitionDelay: isActive ? `${400 + i * 80}ms` : "0ms",
              }}
            >
              {renderText(item)}
            </p>
          ))}
        </div>
        <div
          className={cn(
            "bg-white/30 brutal-border p-4 transition-all duration-500",
            isActive
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          )}
          style={{ transitionDelay: isActive ? "400ms" : "0ms" }}
        >
          {data.rightImage && (
            <div className="relative mb-3">
              <img
                src={data.rightImage.src}
                alt=""
                className="w-full h-32 md:h-40 object-cover brutal-border"
              />
              {data.rightImage.label && (
                <div className="absolute top-2 right-2 flex items-center gap-1">
                  <span className="font-heading font-bold text-xs bg-brutal-black text-brutal-yellow px-2 py-1 brutal-border">
                    ← {data.rightImage.label}
                  </span>
                </div>
              )}
            </div>
          )}
          {data.rightColumn?.map((item, i) => (
            <p
              key={i}
              className={cn(
                "font-body transition-all duration-400",
                i === 0 ? "font-heading text-xl font-bold mb-3" : "text-lg mb-2",
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              )}
              style={{
                transitionDelay: isActive ? `${500 + i * 80}ms` : "0ms",
              }}
            >
              {renderText(item)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function EvolutionLayout({
  data,
  isActive,
}: {
  data: SlideData;
  isActive: boolean;
}) {
  const steps = data.evolutionSteps || [];
  return (
    <div>
      <h2
        className={cn(
          "font-heading text-3xl md:text-5xl font-bold transition-all duration-500",
          data.subtitle ? "mb-2" : "mb-8",
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        )}
        style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
      >
        {data.title}
      </h2>
      {data.subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl font-body mb-8 transition-all duration-500",
            isActive ? "opacity-80 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: isActive ? "250ms" : "0ms" }}
        >
          {data.subtitle}
        </p>
      )}
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={i}>
            <div
              className={cn(
                "flex items-center gap-4 transition-all duration-500",
                isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
              style={{ transitionDelay: isActive ? `${350 + i * 120}ms` : "0ms" }}
            >
              {/* Year badge */}
              <div
                className={cn(
                  "shrink-0 w-20 text-right font-heading font-bold text-sm md:text-base transition-all duration-300",
                  step.highlight ? "text-brutal-black" : "opacity-60"
                )}
              >
                {step.year}
              </div>
              {/* Step card */}
              <div
                className={cn(
                  "flex-1 brutal-border p-3 md:p-4 transition-all duration-300",
                  step.highlight
                    ? "bg-brutal-black text-brutal-yellow brutal-shadow-lg"
                    : "bg-white/30"
                )}
              >
                <span className={cn("font-heading font-bold text-base md:text-lg", step.highlight && "text-brutal-yellow")}>
                  {step.label}
                </span>
                <span className={cn("font-body text-sm md:text-base ml-3", step.highlight ? "text-brutal-yellow/80" : "opacity-70")}>
                  {step.detail}
                </span>
              </div>
            </div>
            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "flex items-center ml-20 pl-4 transition-all duration-300",
                  isActive ? "opacity-60" : "opacity-0"
                )}
                style={{ transitionDelay: isActive ? `${400 + i * 120}ms` : "0ms" }}
              >
                <div className="w-0.5 h-4 bg-brutal-black/40 ml-6" />
                <span className="font-heading text-lg ml-2 -mt-1">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
