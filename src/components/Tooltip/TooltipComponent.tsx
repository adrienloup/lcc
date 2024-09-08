import { KeyboardEvent } from 'react';
import { ChildrenType } from '../../models/ChildrenType';
import { PositionType } from '../../models/PositionType';
import styles from './TooltipComponent.module.scss';

interface TooltipComponentProps extends ChildrenType {
  label: string;
  position?: PositionType;
  onKeyDown?: () => void;
}

export const TooltipComponent = ({
  label,
  position = 'top',
  onKeyDown = () => {},
  children,
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
        {label && <div className={styles.label}>{label}</div>}
      </div>
    </div>
  );
};
