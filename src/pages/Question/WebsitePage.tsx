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
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import { IconComponent } from '../../components/Icon/IconComponent';
import styles from './QuestionPage.module.scss';

function WebsitePage() {
  const { t } = useTranslation();
  const { data, setData } = useData();
  const [websiteName, setWebsiteName] = useState(data.websiteName);

  useTitlePage(t('page.website.title'));

  const changeWebsiteName = (websiteName: string) => {
    setData({ ...data, websiteName });
    setWebsiteName(websiteName);
  };

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <DebugComponent />
        <ArticleComponent>
          <RawMaterialsScoreComponent data={data} />
          <QuestionComponent
            title={t('page.website.title')}
            text={t('page.website.text')}
          />
          <FrameComponent>
            <label htmlFor="website-name">todo</label>
            <input
              id="website-name"
              type="text"
              value={websiteName}
              onChange={(e) => changeWebsiteName(e.target.value)}
            />
          </FrameComponent>
          <NavigationComponent cssClass={styles.navigation}>
            <ButtonComponent
              cssClass={styles.next}
              to="/lcc/question/visitors-per-month"
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

export default WebsitePage;
