import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';

function AccessibilityPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.accessibility.title'));

  return (
    <>
      <HeaderComponent />
      <h1>{t('page.accessibility.title')}</h1>
    </>
  );
}

export default AccessibilityPage;
