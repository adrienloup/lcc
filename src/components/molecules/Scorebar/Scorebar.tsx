import { useContext } from 'react'
import { DataContext } from '../../../contexts/data'
import gas from '../../../utils/gas'
import energy from '../../../utils/energy'
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

  const energyScore = energy(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )
  
  return (
    <nav
      className='scorebar'
      role='navigation'
    >
      <Button
        cssClass='score-co2-eq'
        icon='cloud'
        label={`<strong>${(gasScore / 1000).toFixed(2)}&nbsp;tonnes</strong>de CO2-eq / année`}
        ariaLabel={`Afficher l’explication du score de ${(gasScore / 1000).toFixed(2)} tonnes de CO2-eq par année`}
        to='/lcc/documentation/gaz-a-effet-de-serre'
      />
      <Button
        cssClass='score-car'
        icon='energy'
        label={`<strong>${(energyScore / 1000).toFixed(2)}&nbsp;MWh</strong> d’énergie primaire / année`}
        ariaLabel={`Afficher l’explication du score de ${(energyScore / 1000).toFixed(2)} MWh d’énergie primaire par année`}
        to='/lcc/documentation/energie-primaire'
      />
    </nav>
  )
}

export default Scorebar