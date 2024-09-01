import { useTranslation } from 'react-i18next';
import { version } from '../../../package.json';
import { ScrollToTopComponent } from '../ScrollToTop/ScrollToTopComponent';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import styles from './FooterComponent.module.scss';

export const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <footer role="contentinfo" className={styles.footer}>
      <ButtonComponent
        cssClass={styles.button}
        to="/lcc/documentation/accessibility"
      >
        <IconComponent cssClass={styles.icon} name="accessibility_new" />
        {t('common.footer.accessibility.button')}
      </ButtonComponent>
      <span className={styles.text}>&copy; LCC {version}</span>
      <ScrollToTopComponent />
    </footer>
  );
};
