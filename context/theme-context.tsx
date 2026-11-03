"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
type ThemeContextProviderProp = {
  children: React.ReactNode;
};
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

// The inline script in app/layout.tsx sets the "dark" class on <html> before
// first paint, so that class is the source of truth for the current theme.
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const getServerTheme = (): Theme => "light";

const ThemeContextProvider = ({ children }: ThemeContextProviderProp) => {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("use theme must be used within a ThemeContextProvider");
  }
  return context;
};
