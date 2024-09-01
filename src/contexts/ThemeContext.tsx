import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChildrenType } from '../models/ChildrenType';
import { ThemeType } from '../models/ThemeType';

export const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>({
  theme: 'light',
  setTheme: (theme: ThemeType) => theme,
});

export function ThemeProvider({ children }: ChildrenType) {
  const [theme, setTheme] = useLocalStorage(
    '_lcc_1em0m_3_theme',
    'light' as ThemeType
  );

  useEffect(() => {
    theme === 'dark'
      ? document.body.classList.add('_dark_1em0m_3')
      : document.body.classList.remove('_dark_1em0m_3');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
