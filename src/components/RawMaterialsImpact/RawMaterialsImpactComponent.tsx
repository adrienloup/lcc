import { LiveImpactComponent } from '../LiveImpact/LiveImpactComponent';
import { useResult } from '../../hooks/useResult';
import styles from './RawMaterialsImpactComponent.module.scss';

export const RawMaterialsImpactComponent = () => {
  const { result } = useResult();

  return (
    <LiveImpactComponent
      label="common.LiveImpact.rawMaterials"
      value={Number(result.rawMaterials.toFixed())}
      svg="raw-materials"
      svgClass={styles.svg}
    />
  );
};
