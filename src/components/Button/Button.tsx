import { ButtonProps } from '../../models/button'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import './Button.scss'

function Button({ cssClass, label, to, href, icon, role, ariaLabel, ariaExpanded, click }: ButtonProps) {
  console.log('button');
  const button = () => {
    if (to) {
      return (
        <Link
          className={cssClass}
          role={role}
          aria-label={ariaLabel}
          to={to}
        >
          {label}
          {icon && <Icon icon={icon} />}
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
          {label}
          {icon && <Icon icon={icon} />}
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
          onClick={click}
        >
          {label}
          {icon && <Icon icon={icon} />}
        </button>
      )
    }
  }

  return <>{button()}</>
}

export default Button
