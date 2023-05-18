import Button from '../../molecules/Button/Button'
import './Header.scss'

function Header() {
  return (
    <header
      className='header'
      role='banner'
    >
      <Button
        cssClass='logo'
        icon='logo'
        label='Calculateur<br />de cycle<br />de vie'
        ariaLabel='Afficher la page d’accueil du calculateur de cycle de vie'
        to='/lcc/'
      />
    </header>
  )
}

export default Header
