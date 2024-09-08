import { LiveImpactComponent } from '../LiveImpact/LiveImpactComponent';
import { useResult } from '../../hooks/useResult';
import styles from './PrimaryEnergyImpactComponent.module.scss';

export const PrimaryEnergyImpactComponent = () => {
  const { result } = useResult();

  return (
    <LiveImpactComponent
      label="common.LiveImpact.primaryEnergy"
      value={Number((result.primaryEnergy / 1000).toFixed(2))}
      svg="primary-energy"
      svgClass={styles.svg}
    />
  );
};
