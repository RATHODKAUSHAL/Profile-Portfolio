"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => {
          void registration.unregister();
        });
      })
      .catch(() => {
        // Ignore cleanup failures in unsupported or restricted environments.
      });
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ClientLayout;
