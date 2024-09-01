import { ChildrenType } from '../../models/ChildrenType';
import styles from './MainComponent.module.scss';

export const MainComponent = ({ children }: ChildrenType) => {
  return (
    <main role="main" className={styles.main}>
      {children}
    </main>
  );
};
