import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import { HelpComponent } from '../Help/HelpComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './LiveScoreComponent.module.scss';

interface LiveScoreComponentProps {
  name: string;
  label: string;
  value: number;
  svg: string;
}

export const LiveScoreComponent = ({
  name,
  label,
  value,
  svg,
}: LiveScoreComponentProps) => {
  const { t } = useTranslation();
  const [help, setHelp] = useState(false);

  return (
    <>
      <div className={styles['live-score']}>
        <SvgComponent cssClass={svg} name={name} />
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
          onClick={() => setHelp(!help)}
        >
          <IconComponent name="help" cssClass={styles.icon} />
        </ButtonComponent>
      </div>
      {help && <HelpComponent onClick={() => setHelp(false)} />}
    </>
  );
};
