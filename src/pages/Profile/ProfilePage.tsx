import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';

function ProfilePage() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [count, setCount] = useState(0);

  useTitlePage(t('page.profile.title'));

  return (
    <>
      <HeaderComponent />
      <h1>{t('page.profile.title')}</h1>
      <div>
        <button onClick={() => setLanguage('en')}>EN</button>
        <button onClick={() => setLanguage('fr')}>FR</button>
        {language}
      </div>
      <div>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
        {theme}
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default ProfilePage;
