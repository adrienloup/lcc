import { SvgComponent } from '../Svg/SvgComponent';
import styles from './ScoreComponent.module.scss';

interface ScoreComponentProps {
  cssClass?: string;
  text: string;
  name: string;
}

export const ScoreComponent = ({
  cssClass,
  text,
  name,
}: ScoreComponentProps) => {
  return (
    <div className={[styles.score, cssClass ? ` ${cssClass}` : ''].join('')}>
      <SvgComponent name={name} cssClass={styles.icon} />
      <span
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
