import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import styles from './HelpComponent.module.scss';

interface HelpComponentProps {
  cssClass?: string;
  onClick: () => void;
}

export const HelpComponent = ({ cssClass, onClick }: HelpComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={[styles.help, cssClass ? ` ${cssClass}` : ''].join('')}>
      <div className={styles.inner}>
        <p className={styles.text}>{t('common.help.paragraph1')}</p>
        <p className={styles.text}>{t('common.help.paragraph2')}</p>
      </div>
      <ButtonComponent cssClass={styles.button} onClick={onClick}>
        <IconComponent name="cancel" />
      </ButtonComponent>
    </div>
  );
};
