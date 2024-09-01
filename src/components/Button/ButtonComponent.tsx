import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ChildrenType } from '../../models/ChildrenType';
import styles from './ButtonComponent.module.scss';

interface ButtonComponentProps extends ChildrenType {
  cssClass?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  tabIndex?: number;
  href?: string;
  to?: string;
  onClick?: () => void;
}

export const ButtonComponent = memo(
  ({
    cssClass,
    type = 'button',
    disabled = false,
    tabIndex,
    href,
    to,
    onClick,
    children,
  }: ButtonComponentProps) => {
    const link = (
      <Link
        className={[styles.button, cssClass ? ` ${cssClass}` : ''].join('')}
        to={to!}
        tabIndex={tabIndex}
      >
        {children}
      </Link>
    );

    const a = (
      <a
        className={[styles.button, cssClass ? ` ${cssClass}` : ''].join('')}
        href={href}
        target="_blank"
        rel="noopener"
        tabIndex={tabIndex}
      >
        {children}
      </a>
    );

    const button = (
      <button
        className={[styles.button, cssClass ? ` ${cssClass}` : ''].join('')}
        type={type}
        disabled={disabled}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);
