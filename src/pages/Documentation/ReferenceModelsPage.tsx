import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { ReferenceModelsComponent } from '../../components/ReferenceModels/ReferenceModelsComponent';
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
          <p>
            {t('common.faq')}{' '}
            <ButtonComponent to="/lcc/faq">
              {t('common.button.faq')}
            </ButtonComponent>
          </p>
        </BannerComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default ReferenceModelsPage;
