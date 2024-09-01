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
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import globalLocations from '../../references/globalLocations';
import styles from './QuestionPage.module.scss';

function ServersLocatedPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const [serversLocated, setServersLocated] = useState(data.serversLocated);

  useTitlePage(t('page.serversLocated.title'));

  const changeServersLocated = (serversLocated: string) => {
    setData({ ...data, serversLocated });
    setServersLocated(serversLocated);
  };

  const list = globalLocations?.map((location) => (
    <div key={location.extension} className="radio">
      <input
        id={'radio' + location.extension}
        type="radio"
        name="radio"
        value={location.extension}
        checked={location.extension === serversLocated}
        onChange={(e) => changeServersLocated(e.target.value)}
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
            title={t('page.serversLocated.title')}
            text="Le mix énergétique du pays dans lequel se situent les serveurs fait varier l’impact écologique."
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
              cssClass={styles.previous}
              to="/lcc/question/servers-used"
            >
              <IconComponent cssClass={styles.icon} name="chevron_left" />
              {t('common.article.navigation.previous')}
            </ButtonComponent>
            <ButtonComponent cssClass={styles.next} to="/lcc/ecological-impact">
              {t('common.article.navigation.result')}
              <IconComponent cssClass={styles.icon} name="check_small" />
            </ButtonComponent>
          </NavigationComponent>
        </ArticleComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default ServersLocatedPage;
