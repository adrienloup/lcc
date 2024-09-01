import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { ReferenceModelsComponent } from '../../components/ReferenceModels/ReferenceModelsComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import styles from './DocumentationPage.module.scss';

function ReferenceModelsPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.referenceModels.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <ArticleComponent>
          <TitleComponent cssClass={styles.title}>
            {t('page.referenceModels.title')}
          </TitleComponent>
          <FrameComponent>ReferenceModelsPage</FrameComponent>
          <FrameComponent>ReferenceModelsPage</FrameComponent>
          <ReferenceModelsComponent />
        </ArticleComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default ReferenceModelsPage;
