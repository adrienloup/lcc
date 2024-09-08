import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import { useScore } from '../../hooks/useScore';
import styles from './PrimaryEnergyScoreComponent.module.scss';

export const PrimaryEnergyScoreComponent = () => {
  const { score } = useScore();

  return (
    <LiveScoreComponent
      label="common.LiveScore.primaryEnergy"
      value={Number((score.primaryEnergy / 1000).toFixed(2))}
      svg="primary-energy"
      svgClass={styles.svg}
    />
  );
};
