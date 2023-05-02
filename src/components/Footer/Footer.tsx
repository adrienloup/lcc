import { useContext } from 'react'
import { Mode } from '../../contexts/mode'
import Button from '../Button/Button'
import './Footer.scss'

function Footer() {
  const { mode, setMode } = useContext(Mode)

  const handleMode = () => {
    const isDark = mode === 'dark'
    setMode(isDark ? 'light' : 'dark')
    localStorage.setItem('mode', isDark ? 'light' : 'dark')
  }

  return (
    <footer
      className='footer'
      role='contentinfo'
    >
      <nav role='navigation'>
        <ul className='list'>
          <li>
            <Button
              cssClass='link'
              role='button'
              icon='resources'
              ariaLabel='Ouvrir les ressources'
              to='/lcc/ressources'
            />
          </li>
          <li>
            <Button
              cssClass='link'
              role='switch'
              icon={mode === 'dark' ? 'moon' : 'sun'}
              ariaLabel={mode === 'dark' ? 'Mode clair' : 'Mode sombre'}
              ariaChecked={mode === 'dark'}
              click={() => handleMode()}
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
