import { useContext } from 'react'
import { DataContext } from '../../../contexts/data'
import gas from '../../../utils/gas'
import car from '../../../utils/car'
import Button from '../Button/Button'
import './Scorebar.scss'

function Scorebar() {
  const { data } = useContext(DataContext)

  const gasScore = gas(
    data.user,
    data.duration,
    data.userlocated,
    data.mobile,
    data.page,
    data.server,
    data.serverlocated
  )

  const carScore = car(
    data.user,
    data.duration,
    data.userlocated,
    data.mobile,
    data.page,
    data.server,
    data.serverlocated
  )
  
  return (
    <nav
      className='scorebar'
      role='navigation'
    >
      <Button
        cssClass='score-co2-eq'
        icon='cloud'
        label={`<strong>${gasScore}&nbsp;tonnes</strong>de CO2-eq / année`}
        ariaLabel={`Afficher l’explication du score de ${gasScore} tonnes de CO2-eq par année`}
        to='/lcc/documentation/gaz-a-effet-de-serre'
      />
      <Button
        cssClass='score-car'
        icon='car'
        label={`<strong>${carScore}&nbsp;000</strong> voitures / année`}
        ariaLabel={`Afficher l’explication du score de ${carScore} 000 voitures par année`}
        to='/lcc/documentation/gaz-a-effet-de-serre'
      />
    </nav>
  )
}

export default Scorebar