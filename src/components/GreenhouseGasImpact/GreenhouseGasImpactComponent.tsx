import { LiveImpactComponent } from '../LiveImpact/LiveImpactComponent';
import { useResult } from '../../hooks/useResult';

export const GreenhouseGasImpactComponent = () => {
  const { result } = useResult();

  return (
    <LiveImpactComponent
      label="common.LiveImpact.greenhouseGas"
      value={Number((result.greenhouseGas / 1000).toFixed(2))}
      svg="greenhouse-gas"
    />
  );
};
