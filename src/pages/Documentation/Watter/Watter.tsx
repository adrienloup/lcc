import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import watter from '../../../utils/watter'
import glass from '../../../utils/glass'
import shower from '../../../utils/shower'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Score from '../../../components/molecules/Score/Score'
import Back from '../../../components/molecules/Back/Back'
import Text from '../../../components/atoms/Text/Text'

function Materials() {
  const { data } = useContext(DataContext)

  const watterScore = watter(
    data.user,
    data.page
  )

  const glassScore = glass(
    data.user,
    data.page
  )

  const showerScore = shower(
    data.user,
    data.page
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
          <Heading text='L’eau' />
          <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          <Score text={`${watterScore} litres d’eau`} icon='watter' />
          <Score text={`${showerScore} douches par annnée`} icon='shower' />
          <Score text={`${glassScore} verres d’eau par utilisateur`} icon='glass' />
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

export default Materials