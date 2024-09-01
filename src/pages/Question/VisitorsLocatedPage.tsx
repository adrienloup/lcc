import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { GreenhouseGasScoreComponent } from '../../components/GreenhouseGasScore/GreenhouseGasScoreComponent';
import { QuestionComponent } from '../../components/Question/QuestionComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import globalLocations from '../../references/globalLocations';
import styles from './QuestionPage.module.scss';

function VisitorsLocatedPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const [visitorsLocated, setVisitorsLocated] = useState(data.visitorsLocated);

  useTitlePage(t('page.visitorsLocated.title'));

  const changeVisitorsLocated = (visitorsLocated: string) => {
    setData({ ...data, visitorsLocated });
    setVisitorsLocated(visitorsLocated);
  };

  const list = globalLocations?.map((location) => (
    <div key={location.extension} className="radio">
      <input
        id={'radio' + location.extension}
        type="radio"
        name="radio"
        value={location.extension}
        checked={location.extension === visitorsLocated}
        onChange={(e) => changeVisitorsLocated(e.target.value)}
      />
      <label htmlFor={'radio' + location.extension}>{location.name}</label>
    </div>
  ));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <GreenhouseGasScoreComponent data={data} />
          <QuestionComponent
            title={t('page.visitorsLocated.title')}
            text="Le mix énergétique du pays dans lequel se situent vos utilisateurs fait varier l’impact écologique."
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="radiogroup" role="radiogroup">
                {list}
              </div>
            </form>
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.previous}`].join('')}
              to="/lcc/question/average-time"
            >
              <IconComponent cssClass={styles.icon} name="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/question/mobile-visitors"
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

export default VisitorsLocatedPage;
