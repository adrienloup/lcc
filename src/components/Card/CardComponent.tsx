import { ButtonComponent } from '../Button/ButtonComponent';
import { PercentComponent } from '../Percent/PercentComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './CardComponent.module.scss';

interface CardComponentProps {
  cssClass?: string;
  percent?: number;
  label: string;
  to?: string;
  svg?: string;
}

export const CardComponent = ({
  cssClass,
  percent,
  label,
  to,
  svg,
}: CardComponentProps) => {
  return (
    <ButtonComponent
      cssClass={[styles.card, cssClass ? ` ${cssClass}` : ''].join('')}
      to={to}
    >
      <div className={styles.inner}>
        {svg && <SvgComponent cssClass={styles.svg} svg={svg} />}
        <p dangerouslySetInnerHTML={{ __html: label }} />
      </div>
      {percent && percent !== 0 && percent !== Infinity ? (
        <PercentComponent percent={percent} />
      ) : null}
    </ButtonComponent>
  );
};
