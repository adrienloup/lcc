import { ChildrenType } from '../../models/ChildrenType';
import styles from './ArticleComponent.module.scss';

export const ArticleComponent = ({ children }: ChildrenType) => {
  return <article className={styles.article}>{children}</article>;
};
