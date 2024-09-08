import { SvgComponent } from '../Svg/SvgComponent';
import styles from './ScoreComponent.module.scss';

interface ScoreComponentProps {
  cssClass?: string;
  text: string;
  svg: string;
}

export const ScoreComponent = ({
  cssClass,
  text,
  svg,
}: ScoreComponentProps) => {
  return (
    <div className={[styles.score, cssClass ? ` ${cssClass}` : ''].join('')}>
      <SvgComponent cssClass={styles.svg} svg={svg} />
      <span
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
