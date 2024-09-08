import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { useProgress } from '../../hooks/useProgress';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { PrimaryEnergyImpactComponent } from '../../components/PrimaryEnergyImpact/PrimaryEnergyImpactComponent';
import { QuestionComponent } from '../../components/Question/QuestionComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './QuestionPage.module.scss';

function WebsitePage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const { progress, setProgress } = useProgress();
  const [websiteName, setWebsiteName] = useState(data.websiteName);
  const [whatPurpose, setWhatPurpose] = useState(data.whatPurpose);

  useTitlePage(t('page.website.title'));

  const changeWebsiteName = (websiteName: string) => {
    setData({ ...data, websiteName });
    setWebsiteName(websiteName);
  };

  const changeWhatPurpose = (whatPurpose: string) => {
    setData({ ...data, whatPurpose });
    setWhatPurpose(whatPurpose);
  };

  useEffect(() => {
    setProgress({ ...progress, page: '/lcc/calculator/website' });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent cssClass={styles.article}>
          <PrimaryEnergyImpactComponent />
          <QuestionComponent
            title={t('page.website.title')}
            text={t('page.website.text')}
          />
          <FrameComponent>
            <label htmlFor="websiteName">Nom du site Web</label>
            <input
              id="websiteName"
              type="text"
              maxLength={15}
              value={websiteName}
              onChange={(e) => changeWebsiteName(e.target.value)}
            />
            <label htmlFor="whatPurpose">Dans le but de</label>
            <input
              id="whatPurpose"
              type="text"
              maxLength={30}
              value={whatPurpose}
              onChange={(e) => changeWhatPurpose(e.target.value)}
            />
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/calculator/visitors-per-month"
            >
              {t('common.button.next')}
              <IconComponent cssClass={styles.icon} icon="chevron_right" />
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

export default WebsitePage;
