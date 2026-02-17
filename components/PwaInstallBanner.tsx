"use client";

import React, { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "pwa-install-dismissed";

const PwaInstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (localStorage.getItem(DISMISS_KEY) === "true") return;

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(DISMISS_KEY, "true");
    setIsVisible(false);
  };

  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[9998]">
      <div className="soft-section flex flex-col gap-4 bg-white p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase text-black/70">
            Install App
          </div>
          <div className="text-base font-semibold">
            Download the mobile PWA version
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="soft-btn soft-btn-accent" onClick={handleInstall}>
            Install
          </button>
          <button className="soft-btn" onClick={handleDismiss}>
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PwaInstallBanner;
