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
import { WaterImpactComponent } from '../../components/WaterImpact/WaterImpactComponent';
import { QuestionComponent } from '../../components/Question/QuestionComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './QuestionPage.module.scss';

function PagesViewedPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const { setProgress } = useProgress();
  const [pagesViewed, setPagesViewed] = useState(data.pagesViewed);

  useTitlePage(t('page.pagesViewed.title'));

  const changePagesViewed = (value: string) => {
    setData({ ...data, pagesViewed: +value });
    setPagesViewed(+value);
  };

  useEffect(() => {
    setProgress({ value: 5, page: '/lcc/calculator/pages-viewed' });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent cssClass={styles.article}>
          <WaterImpactComponent />
          <QuestionComponent
            title={t('page.pagesViewed.title')}
            text={t('page.pagesViewed.text')}
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="pages-viewed">
                  {pagesViewed} {+pagesViewed > 1 ? 'pages' : 'page'}
                </label>
                <input
                  id="pages-viewed"
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={pagesViewed}
                  onChange={(e) => changePagesViewed(e.target.value)}
                />
              </div>
            </form>
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.previous}`].join('')}
              to="/lcc/calculator/mobile-visitors"
            >
              <IconComponent cssClass={styles.icon} icon="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/calculator/servers-used"
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

export default PagesViewedPage;
