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
import { RawMaterialsScoreComponent } from '../../components/RawMaterialsScore/RawMaterialsScoreComponent';
import { QuestionComponent } from '../../components/Question/QuestionComponent';
import { FrameComponent } from '../../components/Frame/FrameComponent';
import { NavigationComponent } from '../../components/Navigation/NavigationComponent';
import { BannerComponent } from '../../components/Banner/BannerComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './QuestionPage.module.scss';

function ServersUsedPage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const { setProgress } = useProgress();
  const [serversUsed, setServersUsed] = useState(data.serversUsed);

  useTitlePage(t('page.serversUsed.title'));

  const changeServersUsed = (value: string) => {
    setData({ ...data, serversUsed: +value });
    setServersUsed(+value);
  };

  useEffect(() => {
    setProgress({ value: 6, page: '/lcc/calculator/servers-used' });
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <RawMaterialsScoreComponent />
          <QuestionComponent
            title={t('page.serversUsed.title')}
            text={t('page.serversUsed.text')}
          />
          <FrameComponent>
            <form className="form" action="">
              <div className="range">
                <label htmlFor="servers-used">
                  {serversUsed} {+serversUsed > 1 ? 'serveurs' : 'serveur'}
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
              cssClass={[styles.button, ` ${styles.previous}`].join('')}
              to="/lcc/calculator/pages-viewed"
            >
              <IconComponent cssClass={styles.icon} icon="chevron_left" />
              {t('common.button.previous')}
            </ButtonComponent>
            <ButtonComponent
              cssClass={[styles.button, ` ${styles.next}`].join('')}
              to="/lcc/calculator/servers-located"
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

export default ServersUsedPage;
