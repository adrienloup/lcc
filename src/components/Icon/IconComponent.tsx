import styles from './IconComponent.module.scss';

interface IconComponentProps {
  cssClass?: string;
  name: string;
}

export const IconComponent = ({ cssClass, name }: IconComponentProps) => {
  return (
    <span
      aria-hidden={false}
      className={[styles.icon, cssClass ? ` ${cssClass}` : ''].join('')}
    >
      {name}
    </span>
  );
};
