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
import Header from '../../components/molecules/Header/Header'
import Footer from '../../components/molecules/Footer/Footer'
import Button from '../../components/molecules/Button/Button'
import Title from '../../components/atoms/Title/Title'
import Subtitle from '../../components/atoms/Subtitle/Subtitle'
import Result from '../../components/molecules/Result/Result'

function Impact() {
  const navigate = useNavigate()
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

  const newScore: any = {
    plug: plugScore,
    meter: meterScore,
    coin: coinScore,
    glass: glassScore,
    house: houseScore,
    car: carScore,
    desktop: desktopScore,
    shower: showerScore,
    energy: energyScore,
    gas: gasScore,
    materials: materialsScore,
    watter: watterScore
  }

  const percents: number[] = []
  let percent: number = 0

  for (const property in data.scores) {
    percent = (
      (newScore[property] - data.scores[property])
      / data.scores[property]
    ) * 100
    percents.push(percent)
  }

  const handleClick = () => {
    data.scores = newScore
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
            <Title text={`Voici les impacts du parcours «&nbsp;${data.journey}&nbsp;» sur le site Web ${data.name}`} />
          </div>
          <div className='frame'>
            <Subtitle text='Équivalence par utilisateur' />
          </div>
          <div className='results'>
            <Result
              percent={percents[0]}
              label={`Comme si chaque utilisateur faisait fonctionner 1 micro-ondes pendant ${plugScore}&nbsp;secondes`}
              ariaLabel='Afficher l’explication sur l’énergie primaire'
              icon='plug'
              to='/lcc/documentation/energie-primaire'
            />
            <Result
              percent={percents[1]}
              label={`Comme si chaque utilisateur faisait ${meterScore}&nbsp;mètres en voiture`}
              ariaLabel='Afficher l’explication sur le gaz à effet de serre'
              icon='map'
              to='/lcc/documentation/gaz-a-effet-de-serre'
            />
            <Result
              percent={percents[2]}
              label={`Comme si chaque utilisateur creusait pour extraire l’équivalent de ${coinScore}&nbsp;pièces de&nbsp;1€`}
              ariaLabel='Afficher l’explication sur les matières premières'
              icon='coin'
              to='/lcc/documentation/matieres-premieres'
            />
            <Result
              percent={percents[3]}
              label={`Comme si chaque utilisateur consommait l’équivalent de ${(glassScore).toFixed(1)}&nbsp;verres d’eau`}
              ariaLabel='Afficher l’explication sur l’eau'
              icon='glass'
              to='/lcc/documentation/eau'
            />
          </div>
          <div className='frame'>
            <Subtitle text='Équivalence par année' />
          </div>
          <div className='results'>
            <Result
              percent={percents[4]}
              label={`Comme si chaque année on consommait de l’électricité comme ${houseScore}&nbsp;maisons françaises`}
              ariaLabel='Afficher l’explication sur l’énergie primaire'
              icon='house'
              to='/lcc/documentation/energie-primaire'
            />
            <Result
              percent={percents[5]}
              label={`Comme si chaque année on émettait des gaz à effet de serre comme ${carScore}&nbsp;voitures faisant le tour de la terre`}
              ariaLabel='Afficher l’explication sur le gaz à effet de serre'
              icon='car'
              to='/lcc/documentation/gaz-a-effet-de-serre'
            />
            <Result
              percent={percents[6]}
              label={`Comme si chaque année on creusait pour extraire l’équivence de ${desktopScore}&nbsp;ordinateurs portables`}
              ariaLabel='Afficher l’explication sur les matières premières'
              icon='desktop'
              to='/lcc/documentation/matieres-premieres'
            />
            <Result
              percent={percents[7]}
              label={`Comme si chaque année on prenait l’équivalent de ${showerScore}&nbsp;douches`}
              ariaLabel='Afficher l’explication sur l’eau'
              icon='shower'
              to='/lcc/documentation/eau'
            />
          </div>
          <div className='frame'>
            <Subtitle text='Données brutes par année' />
          </div>
          <div className='results'>
            <Result
              percent={percents[8]}
              label={`${energyScore}&nbsp;KWh d’énergie primaire`}
              ariaLabel='Afficher l’explication sur l’énergie primaire'
              icon='energy'
              to='/lcc/documentation/energie-primaire'
            />
            <Result
              percent={percents[9]}
              label={`${(gasScore).toFixed(0)}&nbsp;Kg de CO2-eq`}
              ariaLabel='Afficher l’explication sur le gaz à effet de serre'
              icon='cloud'
              to='/lcc/documentation/gaz-a-effet-de-serre'
            />
            <Result
              percent={percents[10]}
              label={`${(materialsScore).toFixed(0)}&nbsp;Kg de matières premières`}
              ariaLabel='Afficher l’explication sur les matières premières'
              icon='materials'
              to='/lcc/documentation/matieres-premieres'
            />
            <Result
              percent={percents[11]}
              label={`${watterScore}&nbsp;litres d’eau`}
              ariaLabel='Afficher l’explication sur l’eau'
              icon='watter'
              to='/lcc/documentation/eau'
            />
          </div>
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

export default Impact