import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';

function RawMaterialsPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.rawMaterials.title'));

  return (
    <>
      <HeaderComponent />
      <h1>{t('page.rawMaterials.title')}</h1>
    </>
  );
}

export default RawMaterialsPage;
