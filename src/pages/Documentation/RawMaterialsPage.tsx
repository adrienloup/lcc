import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { ScoresComponent } from '../../components/Scores/ScoresComponent';
import getRawMaterials from '../../metrics/getRawMaterials';
import getDesktop from '../../metrics/getDesktop';
import getCoin from '../../metrics/getCoin';
import styles from './DocumentationPage.module.scss';

function RawMaterialsPage() {
  const { t } = useTranslation();
  const { data } = useData();

  const RawMaterialsScore = getRawMaterials(
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
        <BannerComponent variant="secondary" icon="warning">
          <p>{t('common.underConstruction.page')}</p>
        </BannerComponent>
        <ArticleComponent>
          <TitleComponent cssClass={styles.title}>
            {t('page.rawMaterials.title')}
          </TitleComponent>
          <FrameComponent>
            <p>{t('page.rawMaterials.text')}</p>
          </FrameComponent>
          <ScoresComponent
            scores={[
              {
                text: t('page.rawMaterials.score.rawMaterials', {
                  score: RawMaterialsScore.toFixed(),
                }),
                svg: 'raw-materials',
              },
              {
                text: t('page.rawMaterials.score.desktop', {
                  score: desktopScore,
                }),
                svg: 'desktop',
              },
              {
                text: t('page.rawMaterials.score.coin', {
                  score: coinScore,
                }),
                svg: 'coin',
              },
            ]}
          ></ScoresComponent>
          <FrameComponent>
            <h2>{t('page.rawMaterials.impacts.title')}</h2>
            <p>
              {t('page.rawMaterials.impacts.text', {
                RawMaterialsScore: RawMaterialsScore.toFixed(),
                desktopScore: desktopScore,
                coinScore: coinScore,
              })}
            </p>
          </FrameComponent>
          <FrameComponent>
            <h2>{t('page.rawMaterials.technical.title')}</h2>
            <p>{t('page.rawMaterials.technical.text')}</p>
          </FrameComponent>
          <FrameComponent>
            <h2>{t('page.rawMaterials.calculated.title')}</h2>
            <p>{t('page.rawMaterials.calculated.text.0')}</p>
            <p>{t('page.rawMaterials.calculated.text.1')}</p>
            <p>{t('page.rawMaterials.calculated.text.2')}</p>
            <p>{t('page.rawMaterials.calculated.text.3')}</p>
            <p>{t('page.rawMaterials.calculated.text.4')}</p>
          </FrameComponent>
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

export default RawMaterialsPage;
