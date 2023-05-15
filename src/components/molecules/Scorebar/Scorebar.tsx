// import { FC, useContext } from 'react'
import Button from '../Button/Button'
import './Scorebar.scss'

// const Header: FC = () => {
function Scorebar() {
  return (
    <div className='scorebar'>
      <Button
        cssClass='score-by-year'
        icon='cloud'
        label='<strong>8,4&nbsp;tonnes</strong>de CO2-eq / an'
        ariaLabel='TUTU'
        to='/lcc/'
      />
      <Button
        cssClass='score-by-user'
        icon='glass'
        label='<strong>8,4&nbsp;verres</strong>d’eau / utilisateur'
        ariaLabel='TUTU'
        to='/lcc/'
      />
    </div>
  )
}

export default Scorebar