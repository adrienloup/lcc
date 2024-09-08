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
import { GreenhouseGasScoreComponent } from '../../components/GreenhouseGasScore/GreenhouseGasScoreComponent';
import { QuestionComponent } from '../../components/Question/QuestionComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import globalLocations from '../../references/globalLocations';
import styles from './QuestionPage.module.scss';

function ServersLocatedPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const { setProgress } = useProgress();
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

  useEffect(() => {
    setProgress({ value: 7, page: '/lcc/calculator/servers-located' });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <GreenhouseGasScoreComponent data={data} />
          <QuestionComponent
            title={t('page.serversLocated.title')}
            text={t('page.serversLocated.text')}
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
              to="/lcc/calculator/servers-used"
            >
              <IconComponent cssClass={styles.icon} icon="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.result}`].join('')}
              to="/lcc/calculator/ecological-impact"
            >
              <IconComponent cssClass={styles.icon} icon="done_all" />
              {t('common.button.result')}
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

export default ServersLocatedPage;
