import styles from './IconComponent.module.scss';

interface IconComponentProps {
  cssClass?: string;
  icon: string;
}

export const IconComponent = ({ cssClass, icon }: IconComponentProps) => {
  return (
    <span
      aria-hidden={false}
      className={[styles.icon, cssClass ? ` ${cssClass}` : ''].join('')}
    >
      {icon}
    </span>
  );
};
