import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import styles from './DocumentationPage.module.scss';

function ResourcesPage() {
  const { t } = useTranslation();

  useTitlePage(t('page.resources.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <BannerComponent variant="secondary" icon="warning">
          <p>{t('common.underConstruction.page')}</p>
        </BannerComponent>
        <ArticleComponent>
          <TitleComponent cssClass={styles.title}>
            {t('page.resources.title')}
          </TitleComponent>
          <FrameComponent>
            <h2>{t('page.resources.studies.title')}</h2>
            <ul>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.0.url')}>
                  <span>{t('page.resources.studies.item.0.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.0.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.1.url')}>
                  <span>{t('page.resources.studies.item.1.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.1.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.2.url')}>
                  <span>{t('page.resources.studies.item.2.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.2.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.3.url')}>
                  <span>{t('page.resources.studies.item.3.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.3.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.3.url')}>
                  <span>{t('page.resources.studies.item.3.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.3.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.4.url')}>
                  <span>{t('page.resources.studies.item.4.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.4.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.5.url')}>
                  <span>{t('page.resources.studies.item.5.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.5.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.6.url')}>
                  <span>{t('page.resources.studies.item.6.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.6.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.7.url')}>
                  <span>{t('page.resources.studies.item.7.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.7.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.8.url')}>
                  <span>{t('page.resources.studies.item.8.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.8.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.9.url')}>
                  <span>{t('page.resources.studies.item.9.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.9.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.studies.item.10.url')}>
                  <span>{t('page.resources.studies.item.10.label')}</span>
                </ButtonComponent>
                , {t('page.resources.studies.item.10.date')}
              </li>
            </ul>
          </FrameComponent>
          <FrameComponent>
            <h2>{t('page.resources.ecosystem.title')}</h2>
            <ul>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.0.url')}
                >
                  <span>{t('page.resources.ecosystem.item.0.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.0.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.1.url')}
                >
                  <span>{t('page.resources.ecosystem.item.1.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.1.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.2.url')}
                >
                  <span>{t('page.resources.ecosystem.item.2.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.2.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.3.url')}
                >
                  <span>{t('page.resources.ecosystem.item.3.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.3.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.4.url')}
                >
                  <span>{t('page.resources.ecosystem.item.4.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.4.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.5.url')}
                >
                  <span>{t('page.resources.ecosystem.item.5.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.5.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.6.url')}
                >
                  <span>{t('page.resources.ecosystem.item.6.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.6.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.7.url')}
                >
                  <span>{t('page.resources.ecosystem.item.7.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.7.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.8.url')}
                >
                  <span>{t('page.resources.ecosystem.item.8.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.8.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.9.url')}
                >
                  <span>{t('page.resources.ecosystem.item.9.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.9.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.10.url')}
                >
                  <span>{t('page.resources.ecosystem.item.10.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.10.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.11.url')}
                >
                  <span>{t('page.resources.ecosystem.item.11.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.11.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.12.url')}
                >
                  <span>{t('page.resources.ecosystem.item.12.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.12.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.13.url')}
                >
                  <span>{t('page.resources.ecosystem.item.13.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.13.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.14.url')}
                >
                  <span>{t('page.resources.ecosystem.item.14.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.14.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.15.url')}
                >
                  <span>{t('page.resources.ecosystem.item.15.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.15.date')}
              </li>
              <li>
                <ButtonComponent
                  href={t('page.resources.ecosystem.item.16.url')}
                >
                  <span>{t('page.resources.ecosystem.item.16.label')}</span>
                </ButtonComponent>
                , {t('page.resources.ecosystem.item.16.date')}
              </li>
            </ul>
          </FrameComponent>
          <FrameComponent>
            <h2>{t('page.resources.actors.title')}</h2>
            <ul>
              <li>
                <ButtonComponent href={t('page.resources.actors.item.0.url')}>
                  <span>{t('page.resources.actors.item.0.label')}</span>
                </ButtonComponent>
                , {t('page.resources.actors.item.0.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.actors.item.1.url')}>
                  <span>{t('page.resources.actors.item.1.label')}</span>
                </ButtonComponent>
                , {t('page.resources.actors.item.1.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.actors.item.2.url')}>
                  <span>{t('page.resources.actors.item.2.label')}</span>
                </ButtonComponent>
                , {t('page.resources.actors.item.2.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.actors.item.3.url')}>
                  <span>{t('page.resources.actors.item.3.label')}</span>
                </ButtonComponent>
                , {t('page.resources.actors.item.3.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.actors.item.4.url')}>
                  <span>{t('page.resources.actors.item.4.label')}</span>
                </ButtonComponent>
                , {t('page.resources.actors.item.4.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.actors.item.5.url')}>
                  <span>{t('page.resources.actors.item.5.label')}</span>
                </ButtonComponent>
                , {t('page.resources.actors.item.5.date')}
              </li>
              <li>
                <ButtonComponent href={t('page.resources.actors.item.6.url')}>
                  <span>{t('page.resources.actors.item.6.label')}</span>
                </ButtonComponent>
                , {t('page.resources.actors.item.6.date')}
              </li>
            </ul>
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

export default ResourcesPage;
