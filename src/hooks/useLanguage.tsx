import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import config from '../config.json'; // Adjust the path accordingly

interface LanguageContextState {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextState | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
  const storedLanguage = localStorage.getItem('language');

  // Leverage the languages array from config.json
  const supportedLanguages = config.availableLanguages;

  const defaultLanguage =
    storedLanguage && supportedLanguages.includes(storedLanguage)
      ? storedLanguage
      : supportedLanguages.includes(navigator.language.split('-')[0])
        ? navigator.language.split('-')[0]
        : 'en';

  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
