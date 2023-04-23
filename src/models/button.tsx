export interface ButtonProps {
  cssClass?: string;
  label?: string;
  to?: string;
  href?: string;
  icon?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  click?: () => void;
}