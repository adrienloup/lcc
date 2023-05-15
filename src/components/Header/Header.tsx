// import { FC, useContext } from 'react'
import Button from '../Button/Button'
import './Header.scss'

// const Header: FC = () => {
function Header() {
  return (
    <header
      className='header'
      role='banner'
    >
      <Button
        cssClass='logo'
        icon='logo'
        ariaLabel='Aller à la page d’accueil'
        to='/lcc/'
      />
    </header>
  )
}

export default Header
