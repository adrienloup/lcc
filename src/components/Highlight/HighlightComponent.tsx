import { ButtonComponent } from '../Button/ButtonComponent';
import { TitleComponent } from '../Title/TitleComponent';
import styles from './HighlightComponent.module.scss';

interface HighlightComponentProps {
  cssClass?: string;
  subtitle?: string;
  title?: string;
  text?: string;
  button?: { label?: string; to?: string; href?: string };
  right?: boolean;
}

export const HighlightComponent = ({
  cssClass,
  subtitle,
  title,
  text,
  button,
  right,
}: HighlightComponentProps) => {
  return (
    <div
      className={[
        styles.highlight,
        right ? ` ${styles.right}` : '',
        cssClass ? ` ${cssClass}` : '',
      ].join('')}
    >
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      {title && (
        <TitleComponent cssClass={styles.title} tag="h2">
          {title}
        </TitleComponent>
      )}
      {text && <p className={styles.text}>{text}</p>}
      {button && button.label && button.to ? (
        <ButtonComponent cssClass={styles.button} to={button.to}>
          {button.label}
        </ButtonComponent>
      ) : button && button.label && button.href ? (
        <ButtonComponent cssClass={styles.button} href={button.href}>
          {button.label}
        </ButtonComponent>
      ) : null}
    </div>
  );
};
