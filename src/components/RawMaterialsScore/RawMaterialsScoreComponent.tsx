import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import { useScore } from '../../hooks/useScore';
import styles from './RawMaterialsScoreComponent.module.scss';

export const RawMaterialsScoreComponent = () => {
  const { score } = useScore();

  return (
    <LiveScoreComponent
      label="common.LiveScore.rawMaterials"
      value={Number(score.rawMaterials.toFixed())}
      svg="raw-materials"
      svgClass={styles.svg}
    />
  );
};
