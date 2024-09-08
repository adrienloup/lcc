import { ChildrenType } from '../../../models/ChildrenType';
import styles from './FormFieldComponent.module.scss';

interface FormFieldComponentProps extends ChildrenType {
  cssClass?: string;
  label?: string;
  helper?: string;
  message?: string;
}

export const FormFieldComponent = ({
  cssClass,
  label,
  helper,
  message,
  children,
}: FormFieldComponentProps) => {
  return (
    <div
      className={[styles.formfield, cssClass ? ` ${cssClass}` : ''].join('')}
    >
      {label && <div className={styles.label}>{label}</div>}
      {children}
      {message ? (
        <div className={styles.message}>{message}</div>
      ) : helper ? (
        <div className={styles.helper}>{helper}</div>
      ) : null}
    </div>
  );
};
