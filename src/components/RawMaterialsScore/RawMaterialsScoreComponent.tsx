import { DataType } from '../../models/DataType';
import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import getRawMaterials from '../../metrics/getRawMaterials';
import styles from './RawMaterialsScoreComponent.module.scss';

export const RawMaterialsScoreComponent = ({ data }: { data: DataType }) => {
  const rawMaterialsScore = getRawMaterials(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  return (
    <LiveScoreComponent
      name="raw-materials"
      label="common.liveScore.rawMaterials"
      value={Number(rawMaterialsScore.toFixed(0))}
      svg={styles.svg}
    />
  );
};
