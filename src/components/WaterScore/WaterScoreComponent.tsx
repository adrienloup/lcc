import { DataType } from '../../models/DataType';
import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import getWater from '../../metrics/getWater';
import styles from './WaterScoreComponent.module.scss';

export const WaterScoreComponent = ({ data }: { data: DataType }) => {
  const waterScore = getWater(data.visitorsPerMonth, data.pagesViewed);

  return (
    <LiveScoreComponent
      name="water"
      label="common.liveScore.water"
      value={waterScore}
      svg={styles.svg}
    />
  );
};
