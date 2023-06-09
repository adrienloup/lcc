import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import gas from '../../../utils/gas'
import meter from '../../../utils/meter'
import car from '../../../utils/car'
import Heading from '../../../components/molecules/Heading/Heading'
import Warning from '../../../components/molecules/Warning/Warning'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/molecules/Header/Header'
import Footer from '../../../components/molecules/Footer/Footer'
import Score from '../../../components/molecules/Score/Score'
import Back from '../../../components/molecules/Back/Back'
import Text from '../../../components/atoms/Text/Text'

function GreenhouseGas() {
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

  const meterScore = meter(
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

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className='page'>
      <Header />
      <main
        className='main'
        role='main'
      >
        <article className='article'>
          <Heading text='Gaz à effet de serre' />
          <div className='frame'>
            <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          </div>
          <Score text={`${(gasScore).toFixed(0)}&nbsp;Kg de CO2-eq`} icon='cloud' />
          <Score text={`${carScore} voitures par année`} icon='car' />
          <Score text={`${meterScore} mètres en voiture par utilisateur`} icon='map' />
          <div className='frame'>
            <Subtitle text='Impacts écologiques par année' />
            <Text text={`<p>Cela représente ${(gasScore).toFixed(0)}&nbsp;Kg de CO2-eq. Comme si chaque année, nous émettons des gaz à effet de serre comme ${carScore} voitures faisant le tour de la terre et que chaque utilisateur faisait ${meterScore} mètres en voiture.</p>`} />
            <Subtitle text='Informations techniques' />
            <Text text='<p>Il faut extraire 100 fois le poids d’un ordinateur pour le fabriquer.</p>' />
            <Subtitle text='Comment cette donnée est-elle calculée&nbsp;?' />
            <Warning text='<p>Information bientôt disponible</p>' />
          </div>
          <div className='footing'>
            <Back />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default GreenhouseGas