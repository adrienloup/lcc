import { ChildrenType } from '../../models/ChildrenType';
import { IconComponent } from '../Icon/IconComponent';
import styles from './BannerComponent.module.scss';

interface BannerComponentProps extends ChildrenType {
  cssClass?: string;
  variant?: string;
  icon?: string;
}

export const BannerComponent = ({
  cssClass,
  variant = 'primary',
  icon,
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
      <div className={styles.inner}>
        {icon && <IconComponent cssClass={styles.icon} icon={icon} />}
        {children}
      </div>
    </div>
  );
};
