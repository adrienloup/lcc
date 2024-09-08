import { ReactNode } from 'react';
import { ButtonComponent } from '../Button/ButtonComponent';
import { IconComponent } from '../Icon/IconComponent';
import styles from './SnackbarComponent.module.scss';

interface SnackbarComponentProps {
  cssClass?: string;
  text: ReactNode;
  onClick: () => void;
}

export const SnackbarComponent = ({
  cssClass,
  text,
  onClick,
}: SnackbarComponentProps) => {
  return (
    <div className={[styles.snackbar, cssClass ? ` ${cssClass}` : ''].join('')}>
      <div className={styles.inner}>
        <p>{text}</p>
      </div>
      <ButtonComponent cssClass={styles.button} onClick={onClick}>
        <IconComponent icon="cancel" />
      </ButtonComponent>
    </div>
  );
};
