import { ChildrenType } from '../../models/ChildrenType';
import styles from './BannerComponent.module.scss';

interface BannerComponentProps extends ChildrenType {
  cssClass?: string;
}

export const BannerComponent = ({
  cssClass,
  children,
}: BannerComponentProps) => {
  return (
    <div className={[styles.banner, cssClass ? ` ${cssClass}` : ''].join('')}>
      {children}
    </div>
  );
};
