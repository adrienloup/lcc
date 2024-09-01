import { PercentComponent } from '../Percent/PercentComponent';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './CardComponent.module.scss';

interface CardComponentProps {
  cssClass?: string;
  percent: number;
  text: string;
  name: string;
  to: string;
}

export const CardComponent = ({
  cssClass,
  percent,
  text,
  name,
  to,
}: CardComponentProps) => {
  return (
    <ButtonComponent
      cssClass={[styles.card, cssClass ? ` ${cssClass}` : ''].join('')}
      to={to}
    >
      <SvgComponent name={name} cssClass={styles.svg} />
      <span className={styles.text}>{text}</span>
      {!isNaN(percent) && <PercentComponent percent={percent} />}
      <IconComponent name="link" cssClass={styles.icon} />
    </ButtonComponent>
  );
};
