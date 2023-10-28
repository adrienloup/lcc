import Button from '../Button/Button'
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
              to='/lcc/declaration-accessibilite-numerique'
            />
          </li>
          <li>
            <Button
              cssClass='link'
              icon='documentation'
              ariaLabel='Afficher les modèles de référence'
              to='/lcc/documentation/modeles-de-reference'
            />
          </li>
          {/* <li>
            <Button
              cssClass='link'
              icon='speed'
              ariaLabel='Ouvrir sur PageSpeed Insights'
              href='https://pagespeed.web.dev/analysis/https-adrienloup-github-io-lcc/fzyfbne91b?form_factor=desktop'
            />
          </li> */}
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
