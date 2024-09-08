import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.notFound.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <BannerComponent variant="secondary" icon="warning">
          <TitleComponent cssClass={styles.title}>
            {t('page.notFound.title')}
          </TitleComponent>
        </BannerComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default NotFoundPage;
