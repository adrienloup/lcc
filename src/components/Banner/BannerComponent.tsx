import { ChildrenType } from '../../models/ChildrenType';
import styles from './BannerComponent.module.scss';

interface BannerComponentProps extends ChildrenType {
  cssClass?: string;
  variant?: string;
  icon?: string;
}

export const BannerComponent = ({
  cssClass,
  variant = 'primary',
  children,
}: BannerComponentProps) => {
  return (
    <div
      role="complementary"
      className={[
        styles.banner,
        ` ${styles[variant]}`,
        cssClass ? ` ${cssClass}` : '',
      ].join('')}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
