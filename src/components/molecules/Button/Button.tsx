import { ButtonProps } from '../../../models/button'
import { Link } from 'react-router-dom'
import Icon from '../../atoms/Icon/Icon'
import './Button.scss'

function Button({
    cssClass,
    label,
    to,
    href,
    icon,
    role,
    ariaLabel,
    ariaExpanded,
    ariaChecked,
    ariaSelected,
    ariaControls,
    tabindex,
    click
  }: ButtonProps) {
  const button = () => {
    if (to) {
      return (
        <Link
          className={cssClass}
          role={role}
          aria-label={ariaLabel}
          to={to}
        >
          {icon && <Icon icon={icon} />}
          {label && <span className='label' dangerouslySetInnerHTML={{__html: `${label}`}}></span>}
        </Link>
      )
    } else if (href) {
      return (
        <a
          href={href}
          className={cssClass}
          role={role}
          aria-label={ariaLabel}
          target='_blank'
          rel='noreferrer'
        >
          {icon && <Icon icon={icon} />}
          {label}
        </a>
      )
    } else {
      return (
        <button
          type='button'
          className={cssClass}
          role={role}
          aria-label={ariaLabel}
          aria-expanded={ariaExpanded}
          aria-checked={ariaChecked}
          aria-selected={ariaSelected}
          aria-controls={ariaControls}
          tabIndex={tabindex}
          onClick={click}
        >
          {icon && <Icon icon={icon} />}
          {label && <span className='label' dangerouslySetInnerHTML={{__html: `${label}`}}></span>}
        </button>
      )
    }
  }

  return <>{button()}</>
}

export default Button
