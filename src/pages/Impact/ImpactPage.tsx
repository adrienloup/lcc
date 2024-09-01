import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import getCar from '../../metrics/getCar';
import getCoin from '../../metrics/getCoin';
import getDesktop from '../../metrics/getDesktop';
import getGlass from '../../metrics/getGlass';
import getGreenhouseGas from '../../metrics/getGreenhouseGas';
import getHouse from '../../metrics/getHouse';
import getMeter from '../../metrics/getMeter';
import getPlug from '../../metrics/getPlug';
import getPrimaryEnergy from '../../metrics/getPrimaryEnergy';
import getRawMaterials from '../../metrics/getRawMaterials';
import getShower from '../../metrics/getShower';
import getWater from '../../metrics/getWater';
import styles from './ImpactPage.module.scss';

function ImpactPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();

  useTitlePage(t('page.home.title'));

  const plugScore = getPlug(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const meterScore = getMeter(
    data.visitorsPerMonth,
    data.averageTime,
    data.visitorsLocated,
    data.mobileVisitors,
    data.pagesViewed,
    data.serversUsed,
    data.serversLocated
  );

  const coinScore = getCoin(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const glassScore = getGlass(data.visitorsPerMonth, data.pagesViewed);

  const houseScore = getHouse(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const carScore = getCar(
    data.visitorsPerMonth,
    data.averageTime,
    data.visitorsLocated,
    data.mobileVisitors,
    data.pagesViewed,
    data.serversUsed,
    data.serversLocated
  );

  const desktopScore = getDesktop(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const showerScore = getShower(data.visitorsPerMonth, data.pagesViewed);

  const primaryEnergyScore = getPrimaryEnergy(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const greenhouseGasScore = getGreenhouseGas(
    data.visitorsPerMonth,
    data.averageTime,
    data.visitorsLocated,
    data.mobileVisitors,
    data.pagesViewed,
    data.serversUsed,
    data.serversLocated
  );

  const rawMaterialsScore = getRawMaterials(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const waterScore = getWater(data.visitorsPerMonth, data.pagesViewed);

  const newScore: any = {
    plug: plugScore,
    meter: meterScore,
    coin: coinScore,
    glass: glassScore,
    house: houseScore,
    car: carScore,
    desktop: desktopScore,
    shower: showerScore,
    energy: primaryEnergyScore,
    gas: greenhouseGasScore,
    materials: rawMaterialsScore,
    water: waterScore,
  };

  const percents: number[] = [];

  let percent: number = 0;

  for (const property in data.scores) {
    percent =
      ((newScore[property] - data.scores[property]) / data.scores[property]) *
      100;
    percents.push(percent);
  }

  const onClick = () => {
    setData({ ...data, scores: newScore });
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <TitleComponent cssClass={styles.title}>
            L'impact du parcours «{data.whatPurpose}» sur le site Web
            {data.websiteName}
          </TitleComponent>
          <FrameComponent>Équivalence par utilisateur</FrameComponent>
          <div>
            <div>{percents[0]}</div>
            <div>
              Comme si chaque utilisateur faisait fonctionner 1 micro-ondes
              pendant {plugScore} secondes
            </div>
            <div>{percents[1]}</div>
            <div>
              Comme si chaque utilisateur faisait {meterScore} mètres en voiture
            </div>
            <div>{percents[2]}</div>
            <div>
              Comme si chaque utilisateur creusait pour extraire l'équivalent de
              {coinScore} pièces de 1 euro
            </div>
            <div>{percents[3]}</div>
            <div>
              Comme si chaque utilisateur consommait l'équivalent de
              {glassScore.toFixed(1)} verres d'eau
            </div>
            <FrameComponent>Équivalence par année</FrameComponent>
            <div>{percents[4]}</div>
            <div>
              Comme si chaque année on consommait de l'électricité comme
              {houseScore} maisons françaises
            </div>
            <div>{percents[5]}</div>
            <div>
              Comme si chaque année on émettait des gaz à effet de serre comme
              {carScore} voitures faisant le tour de la terre
            </div>
            <div>{percents[6]}</div>
            <div>
              Comme si chaque année on creusait pour extraire l'équivence de
              {desktopScore} ordinateurs portables
            </div>
            <div>{percents[7]}</div>
            <div>
              Comme si chaque année on prenait l'équivalent de {showerScore}
              douches
            </div>
            <FrameComponent>Données brutes par année</FrameComponent>
            <div>{percents[8]}</div>
            <div>{primaryEnergyScore} KWh d'énergie primaire</div>
            <div>{percents[9]}</div>
            <div>{greenhouseGasScore.toFixed(0)} Kg de CO2-eq</div>
            <div>{percents[10]}</div>
            <div>{rawMaterialsScore.toFixed(0)} Kg de matières premières</div>
            <div>{percents[11]}</div>
            <div>{waterScore}&nbsp;litres d'eau</div>
            <button onClick={() => onClick()}>button</button>
          </div>
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

export default ImpactPage;
