import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import watter from '../../../utils/watter'
import glass from '../../../utils/glass'
import shower from '../../../utils/shower'
import Heading from '../../../components/molecules/Heading/Heading'
import Warning from '../../../components/molecules/Warning/Warning'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/molecules/Header/Header'
import Footer from '../../../components/molecules/Footer/Footer'
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
          <div className='frame'>
            <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          </div>
          <Score text={`${watterScore} litres d’eau`} icon='watter' />
          <Score text={`${showerScore} douches par annnée`} icon='shower' />
          <Score text={`${(glassScore).toFixed(1)} verres d’eau par utilisateur`} icon='glass' />
          <div className='frame'>
            <Subtitle text='Impacts écologiques par année' />
            <Text text={`<p>Cela représente ${watterScore} litres d’eau. Comme si chaque année, nous prenons l’équivalent de ${showerScore} douches et que chaque utilisateur consommait l’équivalent de ${(glassScore).toFixed(1)} verre d’eau.</p>`} />
            <Subtitle text='Informations techniques' />
            <Text text='<p>On comptabilise la consommation en eau bleue - l’eau consommable par l’homme, en distinction de l’eau verte contenue dans les sols des forêts ou l’eau de mer, toutes deux impropres à la consommation.</p>' />
            <Subtitle text='Comment cette donnée est-elle calculée&nbsp;?' />
            <Text text='<p>L’analyse du cycle de vie est une méthode d’évaluation normalisée permettant de réaliser un bilan environnemental multicritère et multi-étape d’un système sur l’ensemble de son cycle de vie.</p><p>Le nombre de visiteurs par mois permet de connaître la quantité de teminaux utilisateur, équipements réseau, serveur nécessaire pour consulter les contenus ou les services que vous délivrez. Si vous ne la connaissez pas, vous pouvez trouver cette information dans votre outil Google Analytics ou équivalent.</p><p>Le parcours utilisateur, après l’identification du besoin utilisateurs, est le deuxième point crutial en éco-conception. Plus le parcours, entre l’utilisateur et le contenu ou le service pour lequel il est venu, est plus faible, plus il réduit l’impact écologique. En 2021, le poids moyen d’une page web est de 2,1Mo (contre 0,013Mo en 1995).</p>' />
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

export default Materials