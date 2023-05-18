import Button from '../../molecules/Button/Button'
import './Footer.scss'

function Footer() {
  return (
    <footer
      className='footer'
      role='contentinfo'
    >
      <nav
        className='navigation'
        role='navigation'
        >
        <ul className='list'>
          <li>
            <Button
              cssClass='a11y'
              label='Accessibilité : totalement conforme'
              ariaLabel='Afficher la déclaration d’accessibilité'
              to='/lcc/declaration-accessibilité'
            />
          </li>
          <li>
            <Button
              cssClass='link'
              icon='documentation'
              ariaLabel='Afficher la documentation'
              to='/lcc/documentation/reference'
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
