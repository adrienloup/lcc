import { useContext, useEffect } from 'react'
import { DataContext } from '../../../contexts/data'
import energy from '../../../utils/energy'
import house from '../../../utils/house'
import plug from '../../../utils/plug'
import Heading from '../../../components/molecules/Heading/Heading'
import Warning from '../../../components/molecules/Warning/Warning'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/molecules/Header/Header'
import Footer from '../../../components/molecules/Footer/Footer'
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
          <div className='frame'>
            <Text text='<p>Voici votre score provisoire, il évolue à chaque nouvelle réponse !</p>' />
          </div>
          <Score text={`${energyScore} kWh d’énergie primaire`} icon='energy' />
          <Score text={`Électricité de ${houseScore} maisons par année`} icon='house' />
          <Score text={`1 micro-ondes pendant ${plugScore} secondes par utilisateur`} icon='plug' />
          <div className='frame'>
            <Subtitle text='Impacts écologiques par année' />
            <Text text={`<p>Cela représente ${energyScore} kWh d’énergie primaire. Comme si chaque année, nous consommons l’équivalent de ${houseScore} maisons françaises en électricité et que chaque utilisateur faisait fonctionner 1 micro-ondes pendant ${plugScore} secondes.</p>`} />
            <Subtitle text='Informations techniques' />
            <Text text='<p>Permet d’unifier, l’énergie produite par un barrage hydraulique, une éolienne ou une centrale à Charbon.</p>' />
            <Subtitle text='Comment cette donnée est-elle calculée&nbsp;?' />
            <Text text='<p>L’analyse du cycle de vie est une méthode d’évaluation normalisée permettant de réaliser un bilan environnemental multicritère et multi-étape d’un système sur l’ensemble de son cycle de vie.</p>' />
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

export default PrimaryEnergy