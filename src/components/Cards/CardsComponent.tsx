import { ChildrenType } from '../../models/ChildrenType';
import styles from './CardsComponent.module.scss';

export const CardsComponent = ({ children }: ChildrenType) => {
  return <div className={styles.cards}>{children}</div>;
};
