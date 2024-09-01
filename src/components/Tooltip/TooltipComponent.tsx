import { KeyboardEvent, ReactNode } from 'react';
import { PositionType } from '../../models/PositionType';
import styles from './TooltipComponent.module.scss';

interface TooltipComponentProps {
  children: ReactNode;
  title?: string;
  text?: string;
  position?: PositionType;
  onKeyDown?: () => void;
}

export const TooltipComponent = ({
  title,
  text,
  position = 'top',
  children,
  onKeyDown = () => {},
}: TooltipComponentProps) => {
  const handleOnKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter') onKeyDown();
  };

  return (
    <div
      role="tooltip"
      tabIndex={0}
      className={styles.tooltip}
      onKeyDown={(e) => handleOnKeyDown(e)}
    >
      {children}
      <div className={[styles.box, ` ${styles[position]}`].join('')}>
        {title && <div className={styles.title}>{title}</div>}
        {text && <div className={styles.text}>{text}</div>}
      </div>
    </div>
  );
};
