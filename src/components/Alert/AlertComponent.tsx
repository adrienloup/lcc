import { useEffect, useRef, useState } from 'react';
import { AlertType } from '../../models/AlertType';
import { IconComponent } from '../Icon/IconComponent';
import styles from './AlertComponent.module.scss';

export const AlertComponent = ({ label, onRemove = () => {} }: AlertType) => {
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    outTimer.current = setTimeout(() => {
      setOut(true);
    }, 1e3) as unknown as number;

    removeTimer.current = setTimeout(() => {
      onRemove();
    }, 1e3 + 150) as unknown as number;

    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    <div
      role="alert"
      className={[styles.alert, out ? ` ${styles.out}` : ''].join('')}
    >
      <IconComponent cssClass={styles.icon} icon="info" />
      <div className={styles.label}>{label}</div>
      <div className={styles.progress}></div>
    </div>
  );
};
