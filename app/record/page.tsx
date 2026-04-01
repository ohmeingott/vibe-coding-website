"use client";

import { useRef, useState } from "react";
import { BrutalCard } from "@/components/ui/BrutalCard";

export default function RecordPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
        Workshop Recording
      </h1>
      <p className="text-lg mb-8 text-brutal-black/60">
        Missed the workshop or want to rewatch? Here's the full recording.
      </p>

      <BrutalCard color="yellow" className="p-0 overflow-hidden">
        <div className="relative group">
          <video
            ref={videoRef}
            className="w-full aspect-video bg-brutal-black"
            src="/vibe-coding-share-care.mp4"
            preload="metadata"
            playsInline
            controls
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Play button overlay — only before first play */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-brutal-black/30 transition-opacity group-hover:bg-brutal-black/40 cursor-pointer"
              onClick={() => videoRef.current?.play()}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brutal-yellow brutal-border brutal-shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 md:w-12 md:h-12 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </BrutalCard>

      <div className="mt-6 flex gap-4 flex-wrap">
        <BrutalCard color="green" className="flex-1 min-w-[200px]">
          <h3 className="font-heading font-bold text-lg mb-1">Vibe Coding Workshop</h3>
          <p className="text-sm text-brutal-black/60">
            Full recording of the hands-on workshop at eduki.
          </p>
        </BrutalCard>
        <BrutalCard color="pink" className="flex-1 min-w-[200px]">
          <h3 className="font-heading font-bold text-lg mb-1">Share & Care</h3>
          <p className="text-sm text-brutal-black/60">
            Watch your colleagues build their first projects with Claude Code.
          </p>
        </BrutalCard>
      </div>
    </div>
  );
}
