import { ChildrenType } from '../../models/ChildrenType';
import styles from './ArticleComponent.module.scss';

interface ArticleComponentProps extends ChildrenType {
  cssClass?: string;
}

export const ArticleComponent = ({
  cssClass,
  children,
}: ArticleComponentProps) => {
  return (
    <article
      role="article"
      className={[styles.article, ` ${cssClass}`].join('')}
    >
      {children}
    </article>
  );
};
