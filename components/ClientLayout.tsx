"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PwaInstallBanner from "./PwaInstallBanner";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Header />
        <PwaInstallBanner />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ClientLayout;
