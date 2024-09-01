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

function PagesViewedPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const [pagesViewed, setPagesViewed] = useState(data.pagesViewed);

  useTitlePage(t('page.pagesViewed.title'));

  const changePagesViewed = (value: string) => {
    const pagesViewed = Number(value);
    setData({ ...data, pagesViewed });
    setPagesViewed(pagesViewed);
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <WaterScoreComponent data={data} />
          <QuestionComponent
            title={t('page.pagesViewed.title')}
            text="Le parcours utilisateur, après l’identification du besoin utilisateurs, est le deuxième point crutial en éco-conception. Plus le parcours, entre l’utilisateur et le contenu ou le service pour lequel il est venu, est plus faible, plus il réduit l’impact écologique. En 2021, le poids moyen d’une page web est de 2,1Mo (contre 0,013Mo en 1995)."
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="pages-viewed">
                  {pagesViewed} {pagesViewed > 1 ? 'pages' : 'page'}
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
              to="/lcc/question/mobile-visitors"
            >
              <IconComponent cssClass={styles.icon} name="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/question/servers-used"
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

export default PagesViewedPage;
