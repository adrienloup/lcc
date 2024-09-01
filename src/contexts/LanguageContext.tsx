import { createContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChildrenType } from '../models/ChildrenType';
import { LanguageType } from '../models/LanguageType';

export const LanguageContext = createContext<{
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}>({
  language: 'en',
  setLanguage: (language: LanguageType) => language,
});

export function LanguageProvider({ children }: ChildrenType) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage(
    '_lcc_1em0m_3_language',
    'en' as LanguageType
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = i18n.language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
