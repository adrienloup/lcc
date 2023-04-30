// import { FC, useContext } from 'react'
import { useContext } from 'react'
import { Mode } from '../../contexts/mode'
import Button from '../Button/Button'
import './Header.scss'

// const Header: FC = () => {
function Header() {
  const { mode, setMode } = useContext(Mode)

  const handleMode = () => {
    const isDark = mode === 'dark'
    setMode(isDark ? 'light' : 'dark')
    localStorage.setItem('mode', isDark ? 'light' : 'dark')
  }

  return (
    <header
      className='header'
      role='banner'
    >
      <Button
        cssClass='switch'
        icon={mode === 'dark' ? 'moon' : 'sun'}
        role='switch'
        ariaLabel={mode === 'dark' ? 'Naviguer en mode clair' : 'Naviguer en mode sombre'}
        ariaChecked={mode === 'dark'}
        click={() => handleMode()}
      />
    </header>
  )
}

export default Header
