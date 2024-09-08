import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import { SnackbarComponent } from '../Snackbar/SnackbarComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './LiveScoreComponent.module.scss';

interface LiveScoreComponentProps {
  label: string;
  value: number;
  svg: string;
  svgClass: string;
}

export const LiveScoreComponent = ({
  label,
  value,
  svg,
  svgClass,
}: LiveScoreComponentProps) => {
  const { t } = useTranslation();
  const [snackbar, setSnackbar] = useState(false);

  return (
    <>
      <div className={styles['live-score']}>
        <SvgComponent cssClass={svgClass} svg={svg} />
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
