import { ChildrenType } from '../../../models/ChildrenType';
import styles from './FormComponent.module.scss';

interface FormComponentProps extends ChildrenType {
  cssClass?: string;
}

export const FormComponent = ({ cssClass, children }: FormComponentProps) => {
  return (
    <form
      action=""
      className={[styles.form, cssClass ? ` ${cssClass}` : ''].join('')}
    >
      {children}
    </form>
  );
};
