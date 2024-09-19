import { LiveImpactComponent } from '../LiveImpact/LiveImpactComponent';
import { useResult } from '../../hooks/useResult';

export const PrimaryEnergyImpactComponent = () => {
  const { result } = useResult();

  return (
    <LiveImpactComponent
      label="common.LiveImpact.primaryEnergy"
      value={Number((result.primaryEnergy / 1000).toFixed(2))}
      svg="primary-energy"
    />
  );
};
