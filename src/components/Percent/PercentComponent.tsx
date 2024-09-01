import styles from './PercentComponent.module.scss';

export const PercentComponent = ({ percent }: { percent: number }) => {
  return (
    <div
      className={[
        styles.percent,
        percent > 0 ? ` ${styles.positive}` : ` ${styles.negative}`,
      ].join('')}
    >
      {/* {percent > 0 ? `+${percent.toFixed(0)}` : percent.toFixed(0)} % */}
      {percent && percent.toFixed(0)}%
    </div>
  );
};
