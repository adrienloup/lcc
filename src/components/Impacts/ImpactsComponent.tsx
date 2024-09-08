import { ChildrenType } from '../../models/ChildrenType';
import styles from './ImpactsComponent.module.scss';

export const ImpactsComponent = ({ children }: ChildrenType) => {
  return <div className={styles.impacts}>{children}</div>;
};
