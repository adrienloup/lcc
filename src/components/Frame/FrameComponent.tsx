import { ChildrenType } from '../../models/ChildrenType';
import styles from './FrameComponent.module.scss';

export const FrameComponent = ({ children }: ChildrenType) => {
  return <div className={styles.frame}>{children}</div>;
};
