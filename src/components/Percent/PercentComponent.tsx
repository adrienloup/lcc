import { IconComponent } from '../Icon/IconComponent';
import styles from './PercentComponent.module.scss';

export const PercentComponent = ({ percent }: { percent: number }) => {
  return (
    <div
      className={[
        styles.percent,
        percent > 0 ? ` ${styles.wrong}` : ` ${styles.true}`,
      ].join('')}
    >
      <IconComponent
        cssClass={styles.icon}
        icon={percent > 0 ? 'mood_bad' : 'mood'}
      />
      {percent > 0 ? '+' : percent < -1 ? '-' : ''}
      {Math.abs(percent).toFixed()}%
    </div>
  );
};
