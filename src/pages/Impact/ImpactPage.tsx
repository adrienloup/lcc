import { useEffect } from 'react';
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
import { TitleComponent } from '../../components/Title/TitleComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import { CardsComponent } from '../../components/Cards/CardsComponent';
import { CardComponent } from '../../components/Card/CardComponent';
import styles from './ImpactPage.module.scss';

function ImpactPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data, setData } = useData();
  const { result, setResult, previousResult, setPreviousResult } = useResult();
  const { setProgress } = useProgress();

  useTitlePage(t('page.home.title'));

  const percents: number[] = [];
  let percent: number = 0;

  for (const key in previousResult) {
    percent = ((result[key] - previousResult[key]) / previousResult[key]) * 100;
    percents.push(Math.round(percent));
  }

  const restartMyTest = () => {
    setPreviousResult({ ...result });
    navigate('/lcc/calculator/website');
  };

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

  useEffect(() => {
    setProgress({ value: 8, page: '/lcc/calculator/ecological-impact' });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent cssClass={styles.article}>
          <TitleComponent cssClass={styles.title}>
            {t('page.impact.title', {
              whatPurpose: data.whatPurpose,
              websiteName: data.websiteName,
            })}
          </TitleComponent>
          <FrameComponent>
            <h2>{t('page.impact.user.title')}</h2>
          </FrameComponent>
          <CardsComponent>
            <CardComponent
              percent={percents[0]}
              label={t('page.impact.user.microwave', {
                result: result.microwave,
              })}
              to="/lcc/documentation/reference-models/primary-energy"
              svg="microwave"
            />
            <CardComponent
              percent={percents[1]}
              label={t('page.impact.user.meter', {
                result: result.meter,
              })}
              to="/lcc/documentation/reference-models/greenhouse-gas"
              svg="meter"
            />
            <CardComponent
              percent={percents[2]}
              label={t('page.impact.user.coin', {
                result: result.coin.toFixed(),
              })}
              to="/lcc/documentation/reference-models/raw-materials"
              svg="coin"
            />
            <CardComponent
              percent={percents[3]}
              label={t('page.impact.user.glass', {
                result: result.glass.toFixed(),
                plural: result.glass > 1 ? 's' : '',
              })}
              to="/lcc/documentation/reference-models/water"
              svg="glass"
            />
          </CardsComponent>
          <FrameComponent>
            <h2>{t('page.impact.year.title')}</h2>
          </FrameComponent>
          <CardsComponent>
            <CardComponent
              percent={percents[4]}
              label={t('page.impact.year.house', {
                result: result.house,
                plural: result.house > 1 ? 's' : '',
              })}
              to="/lcc/documentation/reference-models/primary-energy"
              svg="house"
            />
            <CardComponent
              percent={percents[5]}
              label={t('page.impact.year.car', {
                result: result.car,
                plural: result.car > 1 ? 's' : '',
              })}
              to="/lcc/documentation/reference-models/greenhouse-gas"
              svg="car"
            />
            <CardComponent
              percent={percents[6]}
              label={t('page.impact.year.desktop', {
                result: result.desktop,
                plural: result.desktop > 1 ? 's' : '',
              })}
              to="/lcc/documentation/reference-models/raw-materials"
              svg="desktop"
            />
            <CardComponent
              percent={percents[7]}
              label={t('page.impact.year.shower', {
                result: result.shower,
                plural: result.shower > 1 ? 's' : '',
              })}
              to="/lcc/documentation/reference-models/water"
              svg="shower"
            />
          </CardsComponent>
          <FrameComponent>
            <h2>{t('page.impact.data.title')}</h2>
          </FrameComponent>
          <CardsComponent>
            <CardComponent
              percent={percents[8]}
              label={t('page.impact.data.primaryEnergy', {
                result: result.primaryEnergy,
              })}
              to="/lcc/documentation/reference-models/primary-energy"
              svg="primary-energy"
            />
            <CardComponent
              percent={percents[9]}
              label={t('page.impact.data.greenhouseGas', {
                result: result.greenhouseGas.toFixed(1),
              })}
              to="/lcc/documentation/reference-models/greenhouse-gas"
              svg="greenhouse-gas"
            />
            <CardComponent
              percent={percents[10]}
              label={t('page.impact.data.rawMaterials', {
                result: result.rawMaterials.toFixed(),
              })}
              to="/lcc/documentation/reference-models/raw-materials"
              svg="raw-materials"
            />
            <CardComponent
              percent={percents[11]}
              label={t('page.impact.data.water', {
                result: result.water,
              })}
              to="/lcc/documentation/reference-models/water"
              svg="water"
            />
          </CardsComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.restart}`].join('')}
              onClick={() => restartMyTest()}
            >
              <IconComponent
                cssClass={styles.icon}
                icon="switch_access_shortcut_add"
              />
              {t('common.button.restart')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.start}`].join('')}
              onClick={() => startNewTest()}
            >
              {t('common.button.startNew')}
              <IconComponent cssClass={styles.icon} icon="refresh" />
            </ButtonComponent>
          </NavigationComponent>
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

export default ImpactPage;
