import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { useScore } from '../../hooks/useScore';
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
  // const { score, setScore } = useScore();
  const { setProgress } = useProgress();

  useTitlePage(t('page.home.title'));

  // const newScore: ScoreType = {
  //   plug: plugScore,
  //   meter: meterScore,
  //   coin: coinScore,
  //   glass: glassScore,
  //   house: houseScore,
  //   car: carScore,
  //   desktop: desktopScore,
  //   shower: showerScore,
  //   energy: PrimaryEnergyScore,
  //   gas: GreenhouseGasScore,
  //   materials: RawMaterialsScore,
  //   water: WaterScore,
  // };

  // const percents: number[] = [];

  // let percent: number = 0;

  // for (const score in data.score) {
  //   percent = ((newScore[score] - data.score[score]) / data.score[score]) * 100;
  //   percents.push(percent);
  // }

  const onClick = () => {
    // setData({ ...data, score: newScore });
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
        <ArticleComponent>
          <TitleComponent cssClass={styles.title}>
            {t('page.impact.title', {
              whatPurpose: data.whatPurpose,
              websiteName: data.websiteName,
            })}
          </TitleComponent>
          <FrameComponent>
            <h2>{t('page.impact.user.title')}</h2>
          </FrameComponent>
          {/* <CardsComponent>
            <CardComponent
              percent={percents[0]}
              text={t('page.impact.user.plug', {
                score: score.plug,
              })}
              svg="plug"
            />
            <CardComponent
              percent={percents[1]}
              text={t('page.impact.user.meter', {
                score: score.meter,
              })}
              svg="meter"
            />
            <CardComponent
              percent={percents[2]}
              text={t('page.impact.user.coin', {
                score: score.coin.toFixed(),
              })}
              svg="coin"
            />
            <CardComponent
              percent={percents[3]}
              text={t('page.impact.user.glass', {
                score: score.glass.toFixed(),
              })}
              svg="glass"
            />
          </CardsComponent> */}
          <FrameComponent>
            <h2>{t('page.impact.year.title')}</h2>
          </FrameComponent>
          {/* <CardsComponent>
            <CardComponent
              percent={percents[4]}
              text={t('page.impact.year.house', {
                score: score.house,
              })}
              svg="house"
            />
            <CardComponent
              percent={percents[5]}
              text={t('page.impact.year.car', {
                score: score.car,
              })}
              svg="car"
            />
            <CardComponent
              percent={percents[6]}
              text={t('page.impact.year.desktop', {
                score: score.desktop,
              })}
              svg="desktop"
            />
            <CardComponent
              percent={percents[7]}
              text={t('page.impact.year.shower', {
                score: score.shower,
              })}
              svg="shower"
            />
          </CardsComponent> */}
          <FrameComponent>
            <h2>{t('page.impact.data.title')}</h2>
          </FrameComponent>
          {/* <CardsComponent>
            <CardComponent
              percent={percents[8]}
              text={t('page.impact.data.primaryEnergy', {
                score: score.primaryEnergy,
              })}
              svg="primary-energy"
            />
            <CardComponent
              percent={percents[9]}
              text={t('page.impact.data.greenhouseGas', {
                score: score.greenhouseGas.toFixed(1),
              })}
              svg="greenhouse-gas"
            />
            <CardComponent
              percent={percents[10]}
              text={t('page.impact.data.rawMaterials', {
                score: score.rawMaterials.toFixed(),
              })}
              svg="raw-materials"
            />
            <CardComponent
              percent={percents[11]}
              text={t('page.impact.data.water', {
                score: score.water,
              })}
              svg="water"
            />
          </CardsComponent> */}
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent cssClass={styles.button} onClick={() => onClick()}>
              {t('common.button.improve')}
              <IconComponent cssClass={styles.icon} icon="restart_alt" />
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
