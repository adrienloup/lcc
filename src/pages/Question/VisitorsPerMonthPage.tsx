import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { WaterScoreComponent } from '../../components/WaterScore/WaterScoreComponent';
import { QuestionComponent } from '../../components/Question/QuestionComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './QuestionPage.module.scss';

function VisitorsPerMonthPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const [visitorsPerMonth, setVisitorsPerMonth] = useState(
    data.visitorsPerMonth
  );

  useTitlePage(t('page.visitorsPerMonth.title'));

  const changeVisitorsPerMonth = (value: string) => {
    const visitorsPerMonth = Number(value);
    setData({ ...data, visitorsPerMonth });
    setVisitorsPerMonth(visitorsPerMonth);
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <WaterScoreComponent data={data} />
          <QuestionComponent
            title={t('page.visitorsPerMonth.title')}
            text={t('page.visitorsPerMonth.text')}
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="visitors-per-month">
                  {visitorsPerMonth} visiteurs
                </label>
                <input
                  id="visitors-per-month"
                  type="range"
                  min="1000"
                  max="10000"
                  step="100"
                  value={visitorsPerMonth}
                  onChange={(e) => changeVisitorsPerMonth(e.target.value)}
                />
              </div>
            </form>
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.previous}`].join('')}
              to="/lcc/question/website"
            >
              <IconComponent cssClass={styles.icon} name="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/question/average-time"
            >
              {t('common.button.next')}
              <IconComponent cssClass={styles.icon} name="chevron_right" />
            </ButtonComponent>
          </NavigationComponent>
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

export default VisitorsPerMonthPage;
