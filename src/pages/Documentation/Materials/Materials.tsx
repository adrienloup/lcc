import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import materials from '../../../utils/materials'
import desktop from '../../../utils/desktop'
import coin from '../../../utils/coin'
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

  const materialsScore = materials(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const desktopScore = desktop(
    data.user,
    data.duration,
    data.mobile,
    data.server
  )

  const coinScore = coin(
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
          <Heading text='Les matières premières' />
          <div className='frame'>
            <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          </div>
          <Score text={`${(materialsScore).toFixed(0)}&nbsp;Kg de matières premières`} icon='materials' />
          <Score text={`${desktopScore} ordinateurs par annnée`} icon='desktop' />
          <Score text={`${coinScore} pièces de 1&nbsp;€ par utilisateur`} icon='coin' />
          <div className='frame'>
            <Subtitle text='Impacts écologiques par année' />
            <Text text={`<p>Cela représente ${(materialsScore).toFixed(0)}&nbsp;Kg de matières premières. Comme si chaque année, nous creusons pour extraire l’équivalent de ${desktopScore} ordinateurs portables et que chaque utilisateur creusait pour extraire l’équivalent de ${coinScore} pièces de 1&nbsp;€.</p>`} />
            <Subtitle text='Informations techniques' />
            <Text text='<p>Parce qu’1 KWh produit en Chine par une centrale à charbon émet 1Kg de CO2-eq, soit 10x plus qu’en France par une centrale nucléaire et 5x plus en moyenne qu’un pays de l’OCDE.</p>' />
            <Subtitle text='Comment cette donnée est-elle calculée&nbsp;?' />
            <Text text='
              <p>L’analyse du cycle de vie est une méthode d’évaluation normalisée permettant de réaliser un bilan environnemental multicritère et multi-étape d’un système sur l’ensemble de son cycle de vie.</p>
              <p>Le nombre de visiteurs par mois permet de connaître la quantité de teminaux utilisateur, équipements réseau, serveur nécessaire pour consulter les contenus ou les services que vous délivrez. Si vous ne la connaissez pas, vous pouvez trouver cette information dans votre outil Google Analytics ou équivalent.</p>
              <p>Le temps que les utilisateurs passent sur votre service numérique permet de connaître la quantité de teminaux, équipements réseau, serveur nécessaire pour servir, transiter et consulter les contenus ou les services que vous délivrez.</p>
              <p>Les conditions d’utilisation de votre service numérique, en mobilité ou au bureau, ont des impacts bien différents.</p>
              <p>Calculé à partir d’un PUE (Power Usage Effectiveness) moyen d’un serveur (soit 1,8). Si vous avez opté pour un hébergement « green », vous serez meilleur que la moyenne du marché sur ce paramètre. Compter les serveurs de production, staging, review, CDN, etc...</p>
            ' />
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