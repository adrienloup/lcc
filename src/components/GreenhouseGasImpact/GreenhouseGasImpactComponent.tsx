import { LiveImpactComponent } from '../LiveImpact/LiveImpactComponent';
import { useResult } from '../../hooks/useResult';
import styles from './GreenhouseGasImpactComponent.module.scss';

export const GreenhouseGasImpactComponent = () => {
  const { result } = useResult();

  return (
    <LiveImpactComponent
      label="common.LiveImpact.greenhouseGas"
      value={Number((result.greenhouseGas / 1000).toFixed(2))}
      svg="greenhouse-gas"
      svgClass={styles.svg}
    />
  );
};
