import { useEffect } from 'react'
// import { useContext, useEffect } from 'react'
// import { DataContext } from '../../../contexts/data'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Score from '../../../components/molecules/Score/Score'
import Text from '../../../components/atoms/Text/Text'
// import gas from '../../../utils/gas'

function Materials() {
  // const { data } = useContext(DataContext)

  // const gasScore = gas(
  //   data.visitor,
  //   data.duration,
  //   data.userlocated,
  //   data.mobile,
  //   data.page,
  //   data.server,
  //   data.serverlocated
  // )

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
          <Heading text='Les matières premières' />
          <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          <Score text={`1.14 tonnes de matières premières`} icon='materials' />
          <Score text={`817 ordinateurs par annnée`} icon='desktop' />
          <Score text={`5 pièces de 1&nbsp;€ par utilisateur`} icon='coin' />
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