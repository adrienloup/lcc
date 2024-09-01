import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { useData } from '../../hooks/useData';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { DebugComponent } from '../../components/Debug/DebugComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { PrimaryEnergyScoreComponent } from '../../components/PrimaryEnergyScore/PrimaryEnergyScoreComponent';
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
  const [averageTime, setAverageTime] = useState(data.averageTime);

  useTitlePage(t('page.averageTime.title'));

  const changeAverageTime = (value: string) => {
    const averageTime = Number(value);
    setData({ ...data, averageTime });
    setAverageTime(averageTime);
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <PrimaryEnergyScoreComponent data={data} />
          <QuestionComponent
            title={t('page.averageTime.title')}
            text="Le temps que les utilisateurs passent sur votre service numérique permet de connaître la quantité de teminaux, équipements réseau, serveur nécessaire pour servir, transiter et consulter les contenus ou les services que vous délivrez."
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="average-time">
                  {averageTime} {averageTime > 1 ? 'minutes' : 'minute'}
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
              to="/lcc/question/visitors-per-month"
            >
              <IconComponent cssClass={styles.icon} name="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/question/visitors-located"
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

export default AverageTimePage;
