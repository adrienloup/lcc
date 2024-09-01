import { DataType } from '../../models/DataType';
import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import getPrimaryEnergy from '../../metrics/getPrimaryEnergy';
import styles from './PrimaryEnergyScoreComponent.module.scss';

export const PrimaryEnergyScoreComponent = ({ data }: { data: DataType }) => {
  const primaryEnergyScore = getPrimaryEnergy(
    data.visitorsPerMonth,
    data.averageTime,
    data.mobileVisitors,
    data.serversUsed
  );

  return (
    <LiveScoreComponent
      name="primary-energy"
      label="common.liveScore.primaryEnergy"
      value={Number((primaryEnergyScore / 1000).toFixed(2))}
      svg={styles.svg}
    />
  );
};
