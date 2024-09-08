import { PercentComponent } from '../Percent/PercentComponent';
import { SvgComponent } from '../Svg/SvgComponent';
import styles from './CardComponent.module.scss';

interface CardComponentProps {
  cssClass?: string;
  percent: number;
  text: string;
  svg: string;
}

export const CardComponent = ({
  cssClass,
  percent,
  text,
  svg,
}: CardComponentProps) => {
  return (
    <div className={[styles.card, cssClass ? ` ${cssClass}` : ''].join('')}>
      <div className={styles.inner}>
        <SvgComponent cssClass={styles[svg]} svg={svg} />
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      {!isNaN(percent) && <PercentComponent percent={percent} />}
    </div>
  );
};
