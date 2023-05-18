import { useContext } from 'react'
import { DataContext } from '../../../contexts/data'
import glass from '../../../utils/glass'
import gas from '../../../utils/gas'
import Button from '../Button/Button'
import './Scorebar.scss'

function Scorebar() {
  const { data } = useContext(DataContext)

  const gasScore = gas(
    data.visitor,
    data.duration,
    data.userlocated,
    data.mobile,
    data.page,
    data.server,
    data.serverlocated
  )

  const glassScore = glass(
    data.visitor,
    data.page
  )
  
  return (
    <nav
      className='scorebar'
      role='navigation'
    >
      <Button
        cssClass='score-by-year'
        icon='cloud'
        label={`<strong>${gasScore}&nbsp;tonnes</strong>de CO2-eq / an`}
        ariaLabel={`Afficher l’explication du score de ${gasScore} tonnes de CO2-eq par an`}
        to='/lcc/documentation/gaz-a-effet-de-serre'
      />
      <Button
        cssClass='score-by-user'
        icon='glass'
        label={`<strong>${glassScore}&nbsp;verres</strong>d’eau / utilisateur`}
        ariaLabel={`Afficher l’explication du score de ${glassScore} verres d’eau par utilisateur`}
        to='/lcc/'
      />
    </nav>
  )
}

export default Scorebar