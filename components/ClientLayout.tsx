"use client";

import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
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
      <div>
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ClientLayout;
