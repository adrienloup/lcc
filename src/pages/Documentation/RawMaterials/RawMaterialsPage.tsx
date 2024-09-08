import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../../hooks/useTitlePage';
import { useResult } from '../../../hooks/useResult';
import { HeaderComponent } from '../../../components/Header/HeaderComponent';
import { MainComponent } from '../../../components/Main/MainComponent';
import { FooterComponent } from '../../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../../components/Article/ArticleComponent';
import { TitleComponent } from '../../../components/Title/TitleComponent';
import { BannerComponent } from '../../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../../components/Button/ButtonComponent';
import { FrameComponent } from '../../../components/Frame/FrameComponent';
import { ImpactsComponent } from '../../../components/Impacts/ImpactsComponent';
import { ImpactComponent } from '../../../components/Impact/ImpactComponent';
import styles from './RawMaterialsPage.module.scss';

function RawMaterialsPage() {
  const { t } = useTranslation();
  const { result } = useResult();

  useTitlePage(t('page.rawMaterials.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <ArticleComponent cssClass={styles.article}>
          <TitleComponent cssClass={styles.title}>
            {t('page.rawMaterials.title')}
          </TitleComponent>
          <FrameComponent>
            <p>{t('page.rawMaterials.text')}</p>
          </FrameComponent>
          <ImpactsComponent>
            <ImpactComponent
              label={t('page.rawMaterials.result.rawMaterials', {
                result: Number(result.rawMaterials.toFixed()),
              })}
              svg="raw-materials"
            />
            <ImpactComponent
              label={t('page.rawMaterials.result.desktop', {
                result: Number(result.desktop),
              })}
              svg="desktop"
            />
            <ImpactComponent
              label={t('page.rawMaterials.result.coin', {
                result: Number(result.coin),
              })}
              svg="coin"
            />
          </ImpactsComponent>
          <FrameComponent>
            <h2>{t('page.rawMaterials.impacts.title')}</h2>
            <p>
              {t('page.rawMaterials.impacts.text', {
                RawMaterialsImpact: Number(result.rawMaterials.toFixed()),
                desktopresult: result.desktop,
                coinresult: result.coin,
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
