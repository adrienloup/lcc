import { ChildrenType } from '../../models/ChildrenType';
import styles from './AlertsComponent.module.scss';

export const AlertsComponent = ({ children }: ChildrenType) => {
  return (
    <div className={styles.alerts}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
