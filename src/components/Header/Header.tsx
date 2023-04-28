import { FC, useContext } from 'react'
import { Mode } from '../../contexts/mode'
import { Path } from '../../utils/path'
import Button from '../Button/Button'
import './Header.scss'

const Header: FC = () => {
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
        click={() => handleMode()}
      />
    </header>
  )
}

export default Header
