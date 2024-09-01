import { DataType } from '../../models/DataType';
import { LiveScoreComponent } from '../LiveScore/LiveScoreComponent';
import getGreenhouseGas from '../../metrics/getGreenhouseGas';
import styles from './GreenhouseGasScoreComponent.module.scss';

export const GreenhouseGasScoreComponent = ({ data }: { data: DataType }) => {
  const greenhouseGasScore = getGreenhouseGas(
    data.visitorsPerMonth,
    data.averageTime,
    data.visitorsLocated,
    data.mobileVisitors,
    data.pagesViewed,
    data.serversUsed,
    data.serversLocated
  );

  return (
    <LiveScoreComponent
      name="greenhouse-gas"
      label="common.liveScore.greenhouseGas"
      value={Number((greenhouseGasScore / 1000).toFixed(2))}
      svg={styles.svg}
    />
  );
};
