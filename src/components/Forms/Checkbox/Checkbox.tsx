import { useId } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  cssClass?: string;
  id?: string;
  checked: boolean;
  label?: string;
  onChange: (e: { target: { checked: boolean } }) => void;
}

export const Checkbox = ({
  cssClass,
  id,
  checked = false,
  label,
  onChange,
}: CheckboxProps) => {
  const uId = useId();

  return (
    <div className={[styles.checkbox, cssClass ? ` ${cssClass}` : ""].join("")}>
      <input
        id={id ? id : uId}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id ? id : uId} className={styles.label}>
        <span className={styles.check}></span>
        {label}
      </label>
    </div>
  );
};
