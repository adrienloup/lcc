import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../../hooks/useTitlePage';
import { HeaderComponent } from '../../../components/Header/HeaderComponent';
import { MainComponent } from '../../../components/Main/MainComponent';
import { FooterComponent } from '../../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../../components/Article/ArticleComponent';
import { TitleComponent } from '../../../components/Title/TitleComponent';
import { BannerComponent } from '../../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../../components/Button/ButtonComponent';
import { FrameComponent } from '../../../components/Frame/FrameComponent';
import { ReferenceModelsComponent } from '../../../components/ReferenceModels/ReferenceModelsComponent';
import styles from './ReferenceModelsPage.module.scss';

function ReferenceModelsPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.referenceModels.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <ArticleComponent cssClass={styles.article}>
          <TitleComponent cssClass={styles.title}>
            {t('page.referenceModels.title')}
          </TitleComponent>
          <FrameComponent>
            <p
              dangerouslySetInnerHTML={{
                __html: t('page.referenceModels.text'),
              }}
            />
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
