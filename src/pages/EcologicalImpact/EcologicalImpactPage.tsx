import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { MainComponent } from '../../components/Main/MainComponent';

function EcologicalImpactPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.home.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <h1>EcologicalImpactPage</h1>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default EcologicalImpactPage;
