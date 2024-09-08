import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { useResult } from '../../hooks/useResult';
import { useProgress } from '../../hooks/useProgress';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './HomePage.module.scss';

function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setData } = useData();
  const { setResult, setPreviousResult } = useResult();
  const { progress } = useProgress();

  useTitlePage(t('page.home.title'));

  const startNewTest = () => {
    setData({
      websiteName: 'Website Name',
      whatPurpose: 'Read a page of content',
      visitorsPerMonth: 2500,
      averageTime: 3,
      visitorsLocated: 'fr',
      mobileVisitors: 70,
      pagesViewed: 5,
      serversUsed: 2,
      serversLocated: 'eu',
    });
    setResult({
      microwave: 0,
      meter: 0,
      coin: 0,
      glass: 0,
      house: 0,
      car: 0,
      desktop: 0,
      shower: 0,
      primaryEnergy: 0,
      greenhouseGas: 0,
      rawMaterials: 0,
      water: 0,
    });
    setPreviousResult({
      microwave: 0,
      meter: 0,
      coin: 0,
      glass: 0,
      house: 0,
      car: 0,
      desktop: 0,
      shower: 0,
      primaryEnergy: 0,
      greenhouseGas: 0,
      rawMaterials: 0,
      water: 0,
    });
    navigate('/lcc/calculator/website');
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <BannerComponent variant="secondary">
          <p>{t('common.underConstruction.website')}</p>
        </BannerComponent>
        <ArticleComponent cssClass={styles.article}>
          <TitleComponent cssClass={styles.title}>
            {t('page.home.title')}
          </TitleComponent>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: t('page.home.text') }}
          />
          {!progress.page ? (
            <ButtonComponent
              cssClass={styles.button}
              to="/lcc/calculator/website"
            >
              {t('common.button.start')}
              <IconComponent cssClass={styles.icon} icon="celebration" />
            </ButtonComponent>
          ) : (
            <>
              <ButtonComponent cssClass={styles.button} to={progress.page}>
                {t('common.button.progress')}
                <IconComponent cssClass={styles.icon} icon="celebration" />
              </ButtonComponent>
              <ButtonComponent
                cssClass={styles.link}
                onClick={() => startNewTest()}
              >
                {t('common.button.startNew')}
              </ButtonComponent>
            </>
          )}
        </ArticleComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default HomePage;
