import Button from '../../molecules/Button/Button'
import './Footer.scss'

function Footer() {
  return (
    <footer
      className='footer'
      role='contentinfo'
    >
      <nav role='navigation'>
        <ul className='list'>
          <li>
            <Button
              cssClass='a11y'
              label='Accessibilité : totalement conforme'
              to='/lcc/declaration-accessibilité'
            />
          </li>
          <li>
            <Button
              cssClass='link'
              icon='documentation'
              ariaLabel='Ouvrir la documentation'
              to='/lcc/documentation'
            />
          </li>
          <li>
            <Button
              cssClass='link'
              icon='github'
              ariaLabel='Ouvrir sur GitHub'
              href='https://github.com/adrienloup/lcc'
            />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
