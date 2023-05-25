import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import Score from '../../../components/molecules/Score/Score'
import Text from '../../../components/atoms/Text/Text'
import gas from '../../../utils/gas'

function GreenhouseGas() {
  const navigate = useNavigate()
  const { data } = useContext(DataContext)

  const gasScore = gas(
    data.visitor,
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
          <Score text={`46254 voitures par année`} icon='car' />
          <Score text={`1542 mètres en voiture par utilisateur`} icon='map' />
          <Subtitle text='Comment cette donnée est-elle calculée&nbsp;?' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
          <Subtitle text='Informations techniques' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
          <Subtitle text='Informations techniques' />
          <Text text='<p>Si vous êtes développeur/euse vous trouverez ci-dessous des informations techniques utiles pour l’intégration de cette règle dans votre application.</p>' />
          <Button
            label='Page précédente'
            cssClass='button'
            ariaLabel={'Page précédente'}
            click={() => navigate(-1)}
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default GreenhouseGas