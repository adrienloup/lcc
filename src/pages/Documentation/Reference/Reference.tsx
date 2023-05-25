import { useEffect } from 'react'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import List from '../../../components/molecules/List/List'
import Text from '../../../components/atoms/Text/Text'

function Reference() {

  const modelList = (list: {
    label: string;
    ariaLabel: string;
    icon: string;
    to: string;
  }[]) => list.map((item, index) => (
    <li
      key={index}
      className='item'
    >
      <Button
        cssClass='link'
        label={item.label}
        ariaLabel={item.ariaLabel}
        icon={item.icon}
        to={item.to}
      />
    </li>
  ))

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
          <Heading text='Les modèles de référence' />
          <Text text='<p>Le calculateur de cycle de vie évalue l’empreinte carbone annuelle de votre site Web. L’outil utilise plusieurs métriques : trafic du site Web, intensité énergétique, intensité carbone de l’électricité, source d’énergie utilisée.</p>' />
          <Subtitle text='Comment l’empreinte carbone est-elle calculée&nbsp;?' />
          <List
            cssClass='models'
            list={modelList([
              {label: 'Matières premières', ariaLabel: 'Afficher l’explication sur les matières premières', icon: 'materials', to: '/lcc/documentation/matieres-premieres'},
              {label: 'Eau', ariaLabel: 'Afficher l’explication sur l’eau', icon: 'watter', to: '/lcc/documentation/eau'},
              {label: 'Énergie primaire', ariaLabel: 'Afficher l’explication sur l’énergie primaire', icon: 'energy', to: '/lcc/documentation/energie-primaire'},
              {label: 'Gaz à effet de serre', ariaLabel: 'Afficher l’explication sur le gaz à effet de serre', icon: 'cloud', to: '/lcc/documentation/gaz-a-effet-de-serre'}
            ])}
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Reference