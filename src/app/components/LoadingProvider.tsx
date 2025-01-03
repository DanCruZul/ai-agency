"use client";

import { createContext, useContext, useState, useEffect } from "react";

type LoadingContextType = {
  isLoading: boolean;
};

const LoadingContext = createContext<LoadingContextType>({ isLoading: true });

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      // Wait for fonts
      document.fonts.ready,
      // Wait for critical images
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve(true);
        } else {
          window.addEventListener("load", () => resolve(true), { once: true });
        }
      }),
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
