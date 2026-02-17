"use client";

import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import Header from "./Header";
import Footer from "./Footer";
import PwaInstallBanner from "./PwaInstallBanner";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already visited (optional - to show loading only on first visit)
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
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
