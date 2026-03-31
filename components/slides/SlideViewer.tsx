"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { slides } from "@/data/slides";
import { Slide } from "./Slide";
import { SlideControls } from "./SlideControls";

export function SlideViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigate = useCallback(
    (newSlide: number, dir: "next" | "prev") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setPrevSlide(currentSlide);
      setCurrentSlide(newSlide);
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        setPrevSlide(null);
      }, 700);
    },
    [isAnimating, currentSlide]
  );

  const goNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      navigate(currentSlide + 1, "next");
    }
  }, [currentSlide, navigate]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      navigate(currentSlide - 1, "prev");
    }
  }, [currentSlide, navigate]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return (
    <div className="relative w-full h-[calc(100vh-57px)] overflow-hidden bg-brutal-black">
      {slides.map((slide, i) => {
        const isActive = i === currentSlide;
        const isLeaving = i === prevSlide;
        const visible = isActive || isLeaving;

        return (
          <Slide
            key={slide.id}
            data={slide}
            isActive={isActive}
            isLeaving={isLeaving}
            visible={visible}
            direction={direction}
          />
        );
      })}

      <SlideControls
        current={currentSlide}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}
