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

function Result() {
  const { data } = useContext(DataContext)

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
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur faisait fonctionner 1 micro-ondes pendant ${plugScore}&nbsp;secondes`}
                icon='plug'
                to='/lcc/documentation/energie-primaire'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur faisait ${meterScore}&nbsp;mètres en voiture`}
                icon='map'
                to='/lcc/documentation/gaz-a-effet-de-serre'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur creusait pour extraire l’équivalent de ${coinScore}&nbsp;pièces de&nbsp;1€`}
                icon='coin'
                to='/lcc/documentation/matieres-premieres'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label={`Comme si chaque utilisateur consommait l’équivalent de ${glassScore}&nbsp;verres d’eau`}
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
              <Button
                cssClass='link'
                label='Comme si chaque année on consommait de l’électricité comme 2 maisons françaises'
                icon='house'
                to='/lcc/documentation/energie-primaire'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label='Comme si chaque année on émettait des gaz à effet de serre comme 46254 voitures faisant le tour de la terre'
                icon='car'
                to='/lcc/documentation/gaz-a-effet-de-serre'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label='Comme si chaque année on creusait pour extraire l’équivalent de 817 ordinateurs portables'
                icon='desktop'
                to='/lcc/documentation/matieres-premieres'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label='Comme si chaque année on prenait l’équivalent de 164 douches'
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
              <Button
                cssClass='link'
                label='Comme si chaque année on consommait de l’électricité comme 2 maisons françaises'
                icon='energy'
                to='/lcc/documentation/energie-primaire'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label='Comme si chaque année on émettait des gaz à effet de serre comme 46254 voitures faisant le tour de la terre'
                icon='cloud'
                to='/lcc/documentation/gaz-a-effet-de-serre'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label='Comme si chaque année on creusait pour extraire l’équivalent de 817 ordinateurs portables'
                icon='materials'
                to='/lcc/documentation/matieres-premieres'
              />
            </li>
            <li className='item'>
              <Button
                cssClass='link'
                label='Comme si chaque année on prenait l’équivalent de 164 douches'
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
              to='/lcc/question/site-web'
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Result