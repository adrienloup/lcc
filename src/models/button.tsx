export interface ButtonProps {
  cssClass?: string;
  label?: string;
  to?: string;
  href?: string;
  icon?: string;
  role?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaChecked?: boolean;
  ariaSelected?: boolean;
  ariaControls?: string;
  tabindex?: number;
  click?: () => void;
}