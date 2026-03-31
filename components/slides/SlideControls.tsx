"use client";

interface SlideControlsProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export function SlideControls({ current, total, onPrev, onNext }: SlideControlsProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50">
      {/* Progress bar + slide counter stacked on top */}
      <div className="flex flex-col items-center gap-1">
        <div className="bg-brutal-white brutal-border px-3 py-1 font-heading font-bold text-sm min-w-[70px] text-center">
          {current + 1} / {total}
        </div>
        <div className="w-48 h-2 bg-brutal-white brutal-border overflow-hidden">
          <div
            className="h-full bg-brutal-black"
            style={{
              width: `${((current + 1) / total) * 100}%`,
              transition: "width 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          />
        </div>
      </div>

      {/* Navigation row */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="w-12 h-12 bg-brutal-white brutal-border brutal-shadow brutal-hover font-heading font-bold text-xl cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 transition-transform"
        >
          ←
        </button>

        {/* Dot indicators */}
        <div className="bg-brutal-white brutal-border px-3 py-2 flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                backgroundColor: i === current ? "var(--color-brutal-black)" : "transparent",
                border: "2px solid var(--color-brutal-black)",
              }}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="w-12 h-12 bg-brutal-white brutal-border brutal-shadow brutal-hover font-heading font-bold text-xl cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 transition-transform"
        >
          →
        </button>
      </div>
    </div>
  );
}
