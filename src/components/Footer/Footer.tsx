import Button from '../Button/Button'
import './Footer.scss'

function Footer() {  
  return (
    <footer
      className='footer'
      role='contentinfo'
    >
      <nav role='navigation'>
        <ul>
          <li>
            <Button
              label='v1.0.0'
              cssClass='link'
              ariaLabel='Voir la version v1.0.0 sur GitHub'
              href='https://github.com/adrienloup/lcc'
            />
          </li>
          <li>
            <Button
              label='ACV'
              cssClass='link'
              role='button'
              ariaLabel='Voir les ressources utilisées pour le calcul ACV'
              to='/lcc/ressources'
            />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
