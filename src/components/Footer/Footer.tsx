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
              ariaLabel='Voir la dernière version sur GitHub'
              href='https://github.com/adrienloup/life-cycle-calculator'
            />
          </li>
          <li>
            <Button
              label='Ressources'
              cssClass='link'
              role='button'
              ariaLabel='Voir les ressources utilisées pour le calcul'
              to='/lcc/ressources'
            />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
