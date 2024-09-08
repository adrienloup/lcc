import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import { SnackbarComponent } from '../Snackbar/SnackbarComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './LiveImpactComponent.module.scss';

interface LiveImpactComponentProps {
  label: string;
  value: number;
  svg: string;
}

export const LiveImpactComponent = ({
  label,
  value,
  svg,
}: LiveImpactComponentProps) => {
  const { t } = useTranslation();
  const [snackbar, setSnackbar] = useState(false);

  return (
    <>
      <div className={styles['live-impact']}>
        <SvgComponent cssClass={styles.svg} svg={svg} />
        <span
          className={styles.label}
          dangerouslySetInnerHTML={{
            __html: t(label, {
              value: value,
            }),
          }}
        />
        <ButtonComponent
          cssClass={styles.button}
          onClick={() => setSnackbar(!snackbar)}
        >
          <IconComponent cssClass={styles.icon} icon="help" />
        </ButtonComponent>
      </div>
      {snackbar && (
        <SnackbarComponent
          text={t('common.help')}
          onClick={() => setSnackbar(false)}
        />
      )}
    </>
  );
};
