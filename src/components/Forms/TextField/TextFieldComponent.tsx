import { useId, useState } from 'react';
import { StatusType } from '../../../models/StatusType';
import { FormFieldComponent } from '../FormField/FormFieldComponent';
import styles from './TextFieldComponent.module.scss';

interface TextFieldComponentProps {
  cssClass?: string;
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  helper?: string;
  message?: string;
  minLength?: number;
  maxLength?: number;
  value?: string;
  status?: StatusType;
  onChange: (e: { target: { value: string } }) => void;
}

export const TextFieldComponent = ({
  cssClass,
  id,
  type = 'text',
  label,
  placeholder = 'Placeholder',
  helper,
  message,
  minLength,
  maxLength,
  value,
  status,
  onChange,
}: TextFieldComponentProps) => {
  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormFieldComponent label={label} helper={helper} message={message}>
      <div
        className={[
          styles.textfield,
          focus ? ` ${styles.focus}` : '',
          message ? ` ${styles.error}` : status ? ` ${styles[status]}` : '',
          cssClass ? ` ${cssClass}` : '',
        ].join('')}
      >
        <input
          type={type}
          id={id ? id : uId}
          className={styles.input}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </FormFieldComponent>
  );
};
