import { useTranslation } from 'react-i18next';
import { useTitlePage } from '../../hooks/useTitlePage';
import { HeaderComponent } from '../../components/Header/HeaderComponent';
import { MainComponent } from '../../components/Main/MainComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { ArticleComponent } from '../../components/Article/ArticleComponent';
import { TitleComponent } from '../../components/Title/TitleComponent';
import { HighlightComponent } from '../../components/Highlight/HighlightComponent';
import { ButtonComponent } from '../../components/Button/ButtonComponent';
import styles from './HomePage.module.scss';

function HomePage() {
  const { t } = useTranslation();

  useTitlePage(t('page.home.title'));

  return (
    <>
      <HeaderComponent />
      <MainComponent>
        <ArticleComponent>
          <div className={styles.frame}>
            <TitleComponent cssClass={styles.title}>
              {t('page.home.title')}
            </TitleComponent>
            <p
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: t('page.home.text') }}
            />
            <ButtonComponent
              cssClass={styles.button}
              to="/lcc/question/website"
            >
              Reprendre mon test
            </ButtonComponent>
            <ButtonComponent cssClass={styles.link} to="/lcc/question/website">
              Commencer un nouveau test
            </ButtonComponent>
          </div>
          <HighlightComponent
            subtitle="L'impact écologique"
            title="Comment est-il calculé ?"
            text="Le calculateur de cycle de vie est un outil d’éco-conception et d’Analyse de Cycle de Vie (ACV), qui vous aide à éco-concevoir votre site Web."
            button={{
              label: t('common.highlight.actForThePlanet.button.label'),
              to: t('common.highlight.actForThePlanet.button.to'),
            }}
          />
          <HighlightComponent
            subtitle="Agir pour la planète"
            title="Comment évaluer ?"
            text="Répondez à 8 questions pour évaluer l’impact écologique par année du parcours d’un utilisateur sur votre site Web. Votre résultat évolue à chaque nouvelle réponse. Vous pouvez modifier vos réponses pour améliorer le résultat. Chaque calcul est sauvegardé dans votre navigateur Web. Vous êtes le seul à y avoir accès."
            button={{
              label: t('common.highlight.actForThePlanet.button.label'),
              to: t('common.highlight.actForThePlanet.button.to'),
            }}
            right
          />
          <HighlightComponent
            subtitle="L'impact écologique"
            title="Comment est-il calculé ?"
            text="Le calculateur de cycle de vie est un outil d’éco-conception et d’Analyse de Cycle de Vie (ACV), qui vous aide à éco-concevoir votre site Web."
            button={{
              label: t('common.highlight.actForThePlanet.button.label'),
              to: t('common.highlight.actForThePlanet.button.to'),
            }}
          />
          <HighlightComponent
            subtitle={t('common.highlight.actForThePlanet.subtitle')}
            title={t('common.highlight.actForThePlanet.title')}
            text={t('common.highlight.actForThePlanet.text')}
            button={{
              label: t('common.highlight.actForThePlanet.button.label'),
              to: t('common.highlight.actForThePlanet.button.to'),
            }}
            right
          />
          <HighlightComponent
            subtitle={t('common.highlight.ecologicalImpact.subtitle')}
            title={t('common.highlight.ecologicalImpact.title')}
            text={t('common.highlight.ecologicalImpact.text')}
            button={{
              label: t('common.highlight.ecologicalImpact.button.label'),
              href: t('common.highlight.ecologicalImpact.button.href'),
            }}
          />
        </ArticleComponent>
      </MainComponent>
      <FooterComponent />
    </>
  );
}

export default HomePage;
