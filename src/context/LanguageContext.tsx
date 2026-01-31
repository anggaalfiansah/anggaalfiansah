import { useState, useEffect, type ReactNode } from 'react';
import portfolioData from '../data/portfolioData';
import { LanguageContext } from './LanguageContextDef';
import type { Language, MultiLangText } from '../types';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Cek localStorage untuk bahasa yang tersimpan
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || portfolioData.defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const t = <T,>(textObj: T | MultiLangText): T extends MultiLangText ? string : T => {
    // Jika bukan object, kembalikan langsung
    if (typeof textObj !== 'object' || textObj === null) {
      return textObj as T extends MultiLangText ? string : T;
    }
    // Jika object dengan key bahasa, ambil sesuai bahasa aktif
    const obj = textObj as Record<string, unknown>;
    if (obj[language] !== undefined) {
      return obj[language] as T extends MultiLangText ? string : T;
    }
    // Fallback ke id atau en
    return (obj.id || obj.en || textObj) as T extends MultiLangText ? string : T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
