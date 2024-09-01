import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { RawMaterialsScoreComponent } from '../../components/RawMaterialsScore/RawMaterialsScoreComponent';
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
  const [mobileVisitors, setMobileVisitors] = useState(data.mobileVisitors);

  useTitlePage(t('page.mobileVisitors.title'));

  const changeMobileVisitors = (value: string) => {
    const mobileVisitors = Number(value);
    setData({ ...data, mobileVisitors });
    setMobileVisitors(mobileVisitors);
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <RawMaterialsScoreComponent data={data} />
          <QuestionComponent
            title={t('page.mobileVisitors.title')}
            text="Les conditions d’utilisation de votre service numérique, en mobilité ou au bureau, ont des impacts bien différents."
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
              to="/lcc/question/visitors-located"
            >
              <IconComponent cssClass={styles.icon} name="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/question/pages-viewed"
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

export default MobileVisitorsPage;
