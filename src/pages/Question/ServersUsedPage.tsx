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
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './QuestionPage.module.scss';

function ServersUsedPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const [serversUsed, setServersUsed] = useState(data.serversUsed);

  useTitlePage(t('page.serversUsed.title'));

  const changeServersUsed = (value: string) => {
    const serversUsed = Number(value);
    setData({ ...data, serversUsed });
    setServersUsed(serversUsed);
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <PrimaryEnergyScoreComponent data={data} />
          <QuestionComponent
            title={t('page.serversUsed.title')}
            text="Calculé à partir d’un PUE (Power Usage Effectiveness) moyen d’un serveur (soit 1,8). Si vous avez opté pour un hébergement « green », vous serez meilleur que la moyenne du marché sur ce paramètre. Compter les serveurs de production, staging, review, CDN, etc."
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="servers-used">
                  {serversUsed} {serversUsed > 1 ? 'serveurs' : 'serveur'}
                </label>
                <input
                  id="servers-used"
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={serversUsed}
                  onChange={(e) => changeServersUsed(e.target.value)}
                />
              </div>
            </form>
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={styles.previous}
              to="/lcc/question/pages-viewed"
            >
              <IconComponent cssClass={styles.icon} name="chevron_left" />
              {t('common.article.navigation.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={styles.next}
              to="/lcc/question/servers-located"
            >
              {t('common.article.navigation.next')}
              <IconComponent cssClass={styles.icon} name="chevron_right" />
            </ButtonComponent>
          </NavigationComponent>
        </ArticleComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default ServersUsedPage;
