import { SvgComponent } from '../Svg/SvgComponent';
import styles from './ImpactComponent.module.scss';

interface ImpactComponentProps {
  cssClass?: string;
  label: string;
  svg: string;
}

export const ImpactComponent = ({
  cssClass,
  label,
  svg,
}: ImpactComponentProps) => {
  return (
    <div className={[styles.impact, cssClass ? ` ${cssClass}` : ''].join('')}>
      <SvgComponent cssClass={styles.svg} svg={svg} />
      <span
        className={styles.label}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
};
