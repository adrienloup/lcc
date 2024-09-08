import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import { useScore } from '../../hooks/useScore';
import styles from './GreenhouseGasScoreComponent.module.scss';

export const GreenhouseGasScoreComponent = () => {
  const { score } = useScore();

  return (
    <LiveScoreComponent
      label="common.LiveScore.greenhouseGas"
      value={Number((score.greenhouseGas / 1000).toFixed(2))}
      svg="greenhouse-gas"
      svgClass={styles.svg}
    />
  );
};
