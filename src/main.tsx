import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AllProviders } from './utils/AllProviders.tsx';
import { version } from '../package.json';
import App from './App.tsx';
import './App.scss';
import './i18n';

console.log(
  `%c[LCC]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #37389d; font-weight: bold; color: #38DBF3;',
  'padding: 4px 3px 3px; background: #38DBF3; font-weight: bold; color: #37389d;',
  'padding: 4px 3px 3px; background: #37389d; font-weight: bold; color: #38DBF3;'
);

createRoot(document.getElementById('_lcc_1em0m_3')!).render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>
);
