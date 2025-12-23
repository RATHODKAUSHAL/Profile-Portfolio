"use client";

import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Header from "./Header";
import Footer from "./Footer";

// Alternative version: Always show loading screen on every page load
const ClientLayoutAlwaysLoad = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
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

export default ClientLayoutAlwaysLoad;