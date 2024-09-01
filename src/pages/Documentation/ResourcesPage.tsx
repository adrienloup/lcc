import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';

function ResourcesPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.resources.title'));

  return (
    <>
      <HeaderComponent />
      <h1>{t('page.resources.title')}</h1>
    </>
  );
}

export default ResourcesPage;
