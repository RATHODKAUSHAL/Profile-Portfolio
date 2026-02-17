"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = prevProgress < 60 ? 3 : prevProgress < 90 ? 4 : 6;
        const newProgress = Math.min(prevProgress + increment, 100);

        if (newProgress === 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 400);
        }

        return newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isComplete ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="soft-section soft-shadow flex w-[90%] max-w-md flex-col gap-6 bg-white p-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="soft-card soft-shadow-sm flex h-12 w-12 items-center justify-center bg-[#ffeb3b]">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-semibold">Kaushal Rathod</div>
            <div className="text-xs font-semibold uppercase text-black/60">
              Loading Portfolio
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase text-black/60">
            <span>Setting the stage</span>
            <span>{progress}%</span>
          </div>
          <div className="h-3 rounded-full border-[3px] border-black bg-white">
            <div
              className="h-full rounded-full bg-[#2f5dff] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-sm text-black/70">
          Building a bold, friendly experience.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
