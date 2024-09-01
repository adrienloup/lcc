import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import { ScoreComponent } from '../../components/Score/ScoreComponent';
import getRawMaterials from '../../metrics/getRawMaterials';
import getDesktop from '../../metrics/getDesktop';
import getCoin from '../../metrics/getCoin';
import styles from './DocumentationPage.module.scss';

function RawMaterialsPage() {
  const { t } = useTranslation();
  const { data } = useData();

  const rawMaterialsScore = getRawMaterials(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const desktopScore = getDesktop(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  const coinScore = getCoin(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  useTitlePage(t('page.rawMaterials.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <ArticleComponent>
          <TitleComponent cssClass={styles.title}>
            {t('page.rawMaterials.title')}
          </TitleComponent>
          <FrameComponent>
            <p>
              Voici votre score provisoire, il évolue à chaque nouvelle réponse
              !
            </p>
          </FrameComponent>
          <div className={styles.scores}>
            <ScoreComponent
              text={`<span>${rawMaterialsScore.toFixed(0)}Kg</span>de matières premières`}
              name="raw-materials"
            />
            <ScoreComponent
              text={`<span>${desktopScore} ordinateurs</span> par annnée`}
              name="desktop"
            />
            <ScoreComponent
              text={`<span>${coinScore} pièces de 1 euro</span> par utilisateur`}
              name="coin"
            />
          </div>
          <FrameComponent>
            <h2>Impacts écologiques par année</h2>
            <p>
              Cela représente {rawMaterialsScore.toFixed(0)}Kg de matières
              premières. Comme si chaque année, nous creusons pour extraire
              l'équivalent de {desktopScore} ordinateurs portables et que chaque
              utilisateur creusait pour extraire l'équivalent de
              {coinScore} pièces de 1 euro
            </p>
            <h2>Informations techniques</h2>
            <p>
              Parce qu'1 KWh produit en Chine par une centrale à charbon émet
              1Kg de CO2-eq, soit 10x plus qu'en France par une centrale
              nucléaire et 5x plus en moyenne qu'un pays de l'OCDE.
            </p>
            <h2>Comment cette donnée est-elle calculée ?</h2>
            <p>
              L'analyse du cycle de vie est une méthode d'évaluation normalisée
              permettant de réaliser un bilan environnemental multicritère et
              multi-étape d'un système sur l'ensemble de son cycle de vie.
            </p>
            <p>
              Le nombre de visiteurs par mois permet de connaître la quantité de
              teminaux utilisateur, équipements réseau, serveur nécessaire pour
              consulter les contenus ou les services que vous délivrez. Si vous
              ne la connaissez pas, vous pouvez trouver cette information dans
              votre outil Google Analytics ou équivalent.
            </p>
            <p>
              Le temps que les utilisateurs passent sur votre service numérique
              permet de connaître la quantité de teminaux, équipements réseau,
              serveur nécessaire pour servir, transiter et consulter les
              contenus ou les services que vous délivrez.
            </p>
            <p>
              Les conditions d'utilisation de votre service numérique, en
              mobilité ou au bureau, ont des impacts bien différents.
            </p>
            <p>
              Calculé à partir d'un PUE (Power Usage Effectiveness) moyen d'un
              serveur (soit 1,8). Si vous avez opté pour un hébergement « green
              », vous serez meilleur que la moyenne du marché sur ce paramètre.
              Compter les serveurs de production, staging, review, CDN, etc.
            </p>
          </FrameComponent>
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

export default RawMaterialsPage;
