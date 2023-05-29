import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import energy from '../../../utils/energy'
import house from '../../../utils/house'
import plug from '../../../utils/plug'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Score from '../../../components/molecules/Score/Score'
import Back from '../../../components/molecules/Back/Back'
import Text from '../../../components/atoms/Text/Text'

function PrimaryEnergy() {
  const { data } = useContext(DataContext)

  const energyScore = energy(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const houseScore = house(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const plugScore = plug(
    data.user,
    data.duration,
    data.mobile,
    data.server
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
          <Heading text='Énergie primaire' />
          <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          <Score text={`${energyScore} kWh d’énergie primaire`} icon='energy' />
          <Score text={`Électricité de ${houseScore} maisons par année`} icon='house' />
          <Score text={`1 micro-ondes pendant ${plugScore} secondes par utilisateur`} icon='plug' />
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

export default PrimaryEnergy