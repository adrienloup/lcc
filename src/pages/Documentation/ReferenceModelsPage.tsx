import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
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
          <FrameComponent>
            <p>{t('page.referenceModels.text')}</p>
          </FrameComponent>
          <ReferenceModelsComponent />
        </ArticleComponent>
        <BannerComponent>
          <p>{t('common.questionOrProblem.text')}</p>
          <ButtonComponent href={t('common.questionOrProblem.button.href')}>
            {t('common.questionOrProblem.button.label')}
          </ButtonComponent>
        </BannerComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default ReferenceModelsPage;
