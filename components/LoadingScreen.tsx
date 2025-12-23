"use client";

import React, { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Accelerate progress as it gets closer to 100
        const increment = prevProgress < 50 ? 2 : prevProgress < 80 ? 3 : 5;
        const newProgress = Math.min(prevProgress + increment, 100);

        if (newProgress === 100) {
          clearInterval(interval);
          setIsComplete(true);
          // Wait a bit before calling completion callback
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }

        return newProgress;
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-dark-primary backdrop-blur-xl transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 animate-pulse"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo/Icon */}
        <div className="relative">
          {/* Rotating border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-xl opacity-50 animate-spin" style={{ animationDuration: "3s" }}></div>
          
          {/* Icon container */}
          <div className="relative bg-dark-secondary border-2 border-light-secondary/30 rounded-full p-8 backdrop-blur-sm">
            <Code2 className="h-16 w-16 text-light-primary animate-pulse" />
          </div>
        </div>

        {/* Name/Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-fira font-bold text-light-primary mb-2">
            Kaushal Rathod
          </h1>
          <p className="text-light-secondary font-sans text-lg">
            Full-stack Developer
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-md space-y-4">
          {/* Progress percentage */}
          <div className="flex items-center justify-between text-light-secondary font-fira text-sm">
            <span>Loading</span>
            <span className="text-light-primary font-semibold">{progress}%</span>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-dark-secondary rounded-full overflow-hidden border border-dark-secondary">
            {/* Background glow */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20"
              style={{
                width: `${progress}%`,
                transition: "width 0.3s ease-out",
              }}
            ></div>

            {/* Progress fill */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full"
              style={{
                width: `${progress}%`,
                transition: "width 0.3s ease-out",
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Loading text animation */}
          <div className="text-center">
            <p className="text-light-secondary font-sans text-sm animate-pulse">
              {progress < 30 && "Initializing..."}
              {progress >= 30 && progress < 60 && "Loading components..."}
              {progress >= 60 && progress < 90 && "Almost there..."}
              {progress >= 90 && progress < 100 && "Finalizing..."}
              {progress === 100 && "Ready!"}
            </p>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-light-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-light-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-light-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;