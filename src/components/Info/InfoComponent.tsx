import { ReactNode } from 'react';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import styles from './InfoComponent.module.scss';

interface InfoComponentProps {
  cssClass?: string;
  text: ReactNode;
  onClick: () => void;
}

export const InfoComponent = ({
  cssClass,
  text,
  onClick,
}: InfoComponentProps) => {
  return (
    <div className={[styles.info, cssClass ? ` ${cssClass}` : ''].join('')}>
      <div className={styles.inner}>
        <p className={styles.text}>{text}</p>
      </div>
      <ButtonComponent cssClass={styles.button} onClick={onClick}>
        <IconComponent name="cancel" />
      </ButtonComponent>
    </div>
  );
};
