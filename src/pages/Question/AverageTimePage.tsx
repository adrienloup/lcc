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
import { RawMaterialsImpactComponent } from '../../components/RawMaterialsImpact/RawMaterialsImpactComponent';
import { QuestionComponent } from '../../components/Question/QuestionComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './QuestionPage.module.scss';

function AverageTimePage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const { setProgress } = useProgress();
  const [averageTime, setAverageTime] = useState(data.averageTime);

  useTitlePage(t('page.averageTime.title'));

  const changeAverageTime = (value: string) => {
    setData({ ...data, averageTime: +value });
    setAverageTime(+value);
  };

  useEffect(() => {
    setProgress({ value: 2, page: '/lcc/calculator/average-time' });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent cssClass={styles.article}>
          <RawMaterialsImpactComponent />
          <QuestionComponent
            title={t('page.averageTime.title')}
            text={t('page.averageTime.text')}
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="average-time">
                  {averageTime} {+averageTime > 1 ? 'minutes' : 'minute'}
                </label>
                <input
                  id="average-time"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={averageTime}
                  onChange={(e) => changeAverageTime(e.target.value)}
                />
              </div>
            </form>
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.previous}`].join('')}
              to="/lcc/calculator/visitors-per-month"
            >
              <IconComponent cssClass={styles.icon} icon="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/calculator/visitors-located"
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

export default AverageTimePage;
