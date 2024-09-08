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

function MobileVisitorsPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const { setProgress } = useProgress();
  const [mobileVisitors, setMobileVisitors] = useState(data.mobileVisitors);

  useTitlePage(t('page.mobileVisitors.title'));

  const changeMobileVisitors = (value: string) => {
    setData({ ...data, mobileVisitors: +value });
    setMobileVisitors(+value);
  };

  useEffect(() => {
    setProgress({ value: 4, page: '/lcc/calculator/mobile-visitors' });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent cssClass={styles.article}>
          <PrimaryEnergyImpactComponent />
          <QuestionComponent
            title={t('page.mobileVisitors.title')}
            text={t('page.mobileVisitors.text')}
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="mobile-visitors">{mobileVisitors} %</label>
                <input
                  id="mobile-visitors"
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={mobileVisitors}
                  onChange={(e) => changeMobileVisitors(e.target.value)}
                />
              </div>
            </form>
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.previous}`].join('')}
              to="/lcc/calculator/visitors-located"
            >
              <IconComponent cssClass={styles.icon} icon="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/calculator/pages-viewed"
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

export default MobileVisitorsPage;
