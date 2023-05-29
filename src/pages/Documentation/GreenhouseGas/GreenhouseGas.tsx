import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import gas from '../../../utils/gas'
import meter from '../../../utils/meter'
import car from '../../../utils/car'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
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
          <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          <Score text={`${gasScore} tonnes de CO2-eq`} icon='cloud' />
          <Score text={`${carScore} voitures par année`} icon='car' />
          <Score text={`${meterScore} mètres en voiture par utilisateur`} icon='map' />
          <Subtitle text='Impacts écologiques par année' />
          <Subtitle text='Comment cette donnée est-elle calculée&nbsp;?' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
          <Subtitle text='Informations techniques' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
          <Subtitle text='Informations techniques' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
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