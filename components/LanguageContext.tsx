"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";

type Language = "hr" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hr");
  const languageRef = useRef(language);
  languageRef.current = language;

  useEffect(() => {
    const saved = localStorage.getItem("stradoon-language") as Language | null;
    if (saved === "hr" || saved === "en") {
      setLanguageState(saved);
    }
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
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: "hr" as const, setLanguage: () => {}, toggleLanguage: () => {} };
  }
  return context;
}