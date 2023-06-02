import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../contexts/data'
import plug from '../../utils/plug'
import meter from '../../utils/meter'
import coin from '../../utils/coin'
import glass from '../../utils/glass'
import house from '../../utils/house'
import car from '../../utils/car'
import desktop from '../../utils/desktop'
import shower from '../../utils/shower'
import energy from '../../utils/energy'
import gas from '../../utils/gas'
import materials from '../../utils/materials'
import watter from '../../utils/watter'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'
import Button from '../../components/molecules/Button/Button'
import Title from '../../components/atoms/Title/Title'
import Subtitle from '../../components/atoms/Subtitle/Subtitle'
import Percent from '../../components/atoms/Percent/Percent'

// const getScores = (): any => {
//   const localData = localStorage.getItem('lcc-data')
//   console.log('localData', localData)
//   return localData ? JSON.parse(localData) : data
// }

function Result() {
  const navigate = useNavigate()
  const { data } = useContext(DataContext)
  // const [ value, setValue ] = useState(data.scores)
  // const [ value, setValue ] = useState(data.scores)
  // const [scores, setScores] = useState(getScores())

  const plugScore = plug(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const meterScore = meter(
    data.user,
    data.duration,
    data.userlocated,
    data.mobile,
    data.page,
    data.server,
    data.serverlocated
  )

  const coinScore = coin(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const glassScore = glass(
    data.user,
    data.page
  )
  
  const houseScore = house(
    data.user,
    data.duration,
    data.mobile,
    data.server
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

  const desktopScore = desktop(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const showerScore = shower(
    data.user,
    data.page
  )

  const energyScore = energy(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const gasScore = gas(
    data.user,
    data.duration,
    data.userlocated,
    data.mobile,
    data.page,
    data.server,
    data.serverlocated
  )

  const materialsScore = materials(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const watterScore = watter(
    data.user,
    data.page
  )

  const newScores: number[] = [
    plugScore,
    meterScore,
    coinScore,
    glassScore,
    houseScore,
    carScore,
    desktopScore,
    showerScore,
    energyScore,
    gasScore,
    materialsScore,
    watterScore
  ]

  let percent: number = 0
  let percents: number[] = []

  for (let i = 0; i < newScores.length; i++) {
    // console.log('newScores[i]', newScores[i])
    // console.log('data.scores[i]', data.scores[i])
    percent = ((newScores[i] - data.scores[i]) / data.scores[i]) * 100
    percents.push(percent)
  }

  // console.log('percents', percents)

  const handleClick = () => {
    // console.log(newScores)
    data.scores = newScores
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/site-web')
  }

  return (
    <div className='page'>
      <Header />
      <main
        className='main'
        role='main'
      >
        <article className='article'>
          <div className='heading'>
            <Title text={`Voici les impacts écologique d’un utilisateur sur le site Web «&nbsp;${data.name}&nbsp;»`} />
          </div>
          <div className='frame'>
            <Subtitle text='Par utilisateur' />
          </div>
          <ul className='results'>
            <li className='item'>
              {percents[0] !== 0 && <Percent number={percents[0]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur faisait fonctionner 1 micro-ondes pendant ${plugScore}&nbsp;secondes`}
                icon='plug'
                to='/lcc/documentation/energie-primaire'
              />
            </li>
            <li className='item'>
            {percents[1] !== 0 && <Percent number={percents[1]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur faisait ${meterScore}&nbsp;mètres en voiture`}
                icon='map'
                to='/lcc/documentation/gaz-a-effet-de-serre'
              />
            </li>
            <li className='item'>
              {percents[2] !== 0 && <Percent number={percents[2]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur creusait pour extraire l’équivalent de ${coinScore}&nbsp;pièces de&nbsp;1€`}
                icon='coin'
                to='/lcc/documentation/matieres-premieres'
              />
            </li>
            <li className='item'>
              {percents[3] !== 0 && <Percent number={percents[3]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur consommait l’équivalent de ${(glassScore).toFixed(1)}&nbsp;verres d’eau`}
                icon='glass'
                to='/lcc/documentation/eau'
              />
            </li>
          </ul>
          <div className='frame'>
            <Subtitle text='Par année' />
          </div>
          <ul className='results'>
            <li className='item'>
              {percents[4] !== 0 && <Percent number={percents[4]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque année on consommait de l’électricité comme ${houseScore}&nbsp;maisons françaises`}
                icon='house'
                to='/lcc/documentation/energie-primaire'
              />
            </li>
            <li className='item'>
              {percents[5] !== 0 && <Percent number={percents[5]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque année on émettait des gaz à effet de serre comme ${carScore}&nbsp;voitures faisant le tour de la terre`}
                icon='car'
                to='/lcc/documentation/gaz-a-effet-de-serre'
              />
            </li>
            <li className='item'>
              {percents[6] !== 0 && <Percent number={percents[6]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque année on creusait pour extraire l’équivalent de ${desktopScore}&nbsp;ordinateurs portables`}
                icon='desktop'
                to='/lcc/documentation/matieres-premieres'
              />
            </li>
            <li className='item'>
              {percents[7] !== 0 && <Percent number={percents[7]} />}
              <Button
                cssClass='link'
                label={`Comme si chaque année on prenait l’équivalent de ${showerScore}&nbsp;douches`}
                icon='shower'
                to='/lcc/documentation/eau'
              />
            </li>
          </ul>
          <div className='frame'>
            <Subtitle text='Données brutes par année' />
          </div>
          <ul className='results'>
            <li className='item'>
              {percents[8] !== 0 && <Percent number={percents[8]} />}
              <Button
                cssClass='link'
                label={`${energyScore}&nbsp;KWh d’énergie primaire`}
                icon='energy'
                to='/lcc/documentation/energie-primaire'
              />
            </li>
            <li className='item'>
              {percents[9] !== 0 && <Percent number={percents[9]} />}
              <Button
                cssClass='link'
                label={`${(gasScore).toFixed(0)}&nbsp;Kg de CO2-eq`}
                icon='cloud'
                to='/lcc/documentation/gaz-a-effet-de-serre'
              />
            </li>
            <li className='item'>
              {percents[10] !== 0 && <Percent number={percents[10]} />}
              <Button
                cssClass='link'
                label={`${(materialsScore).toFixed(0)}&nbsp;Kg de matières premières`}
                icon='materials'
                to='/lcc/documentation/matieres-premieres'
              />
            </li>
            <li className='item'>
              {percents[11] !== 0 && <Percent number={percents[11]} />}
              <Button
                cssClass='link'
                label={`${watterScore}&nbsp;litres d’eau`}
                icon='watter'
                to='/lcc/documentation/eau'
              />
            </li>
          </ul>
          <div className='footing'>
            <Button
              label='Je recommence'
              cssClass='start'
              ariaLabel='Recommencez le calcul'
              click={() => handleClick()}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Result