import { useEffect } from 'react'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Score from '../../../components/molecules/Score/Score'
import Text from '../../../components/atoms/Text/Text'

function Materials() {

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
          <Score text={`8593 kWh d’énergie primaire`} icon='energy' />
          <Score text={`2 maisons en électricité par année`} icon='house' />
          <Score text={`1 micro-ondes pendant 49 secondes par utilisateur`} icon='plug' />
          <Subtitle text='Comment cette donnée est-elle calculée&nbsp;?' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
          <Subtitle text='Informations techniques' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
          <Subtitle text='Informations techniques' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Materials