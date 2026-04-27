"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";

type Language = "hr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function detectBrowserLanguage(): Language {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("hr")) {
      return "hr";
    }
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hr");
  const languageRef = useRef(language);
  languageRef.current = language;
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("stradoon-language") as Language | null;
    if (saved === "hr" || saved === "en") {
      setLanguageState(saved);
    } else {
      const browserLang = detectBrowserLanguage();
      setLanguageState(browserLang);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("stradoon-language", lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = languageRef.current === "hr" ? "en" : "hr";
    setLanguageState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("stradoon-language", newLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {isInitialized ? children : null}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: "en" as const, setLanguage: () => {}, toggleLanguage: () => {} };
  }
  return context;
}