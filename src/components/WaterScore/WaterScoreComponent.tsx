import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import { useScore } from '../../hooks/useScore';
import styles from './WaterScoreComponent.module.scss';

export const WaterScoreComponent = () => {
  const { score } = useScore();

  return (
    <LiveScoreComponent
      label="common.LiveScore.water"
      value={score.water}
      svg="water"
      svgClass={styles.svg}
    />
  );
};
