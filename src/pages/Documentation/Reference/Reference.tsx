import { useEffect } from 'react'
import { resources } from '../../../datas/resources.json'
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

  const resourceList = (list: {
    label: string;
    href: string;
  }[]) => list.map((item, index) => (
    <li
      key={index}
      className='item'
    >
      <Button
        cssClass='link'
        label={item.label}
        href={item.href}
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
          <Heading text='Modèle de référence et documentation' />
          <Text text='<p>Le calculateur de cycle de vie est un outil d’éco-conception et d’Analyse du Cycle de Vie (ACV) pour vous aider à éco-concevoir votre site Web zéro carbone.</p>' />
          <Subtitle text='Les modèles de référence' />
          <Text text='Explorez les modèles' />
          <List
            cssClass='models'
            list={modelList([
              {label: 'Énergie primaire', ariaLabel: 'Afficher l’explication sur l’énergie primaire', icon: 'energy', to: '/lcc/documentation/energie-primaire'},
              {label: 'Gaz à effet de serre', ariaLabel: 'Afficher l’explication sur le gaz à effet de serre', icon: 'cloud', to: '/lcc/documentation/gaz-a-effet-de-serre'},
              {label: 'Matières premières', ariaLabel: 'Afficher l’explication sur les matières premières', icon: 'materials', to: '/lcc/documentation/matieres-premieres'},
              {label: 'Eau', ariaLabel: 'Afficher l’explication sur l’eau', icon: 'watter', to: '/lcc/documentation/eau'}
            ])}
          />
          <Subtitle text='Documentation générale' />
          <List
            cssClass='resources'
            list={resourceList(resources[0]['list'])}
          />
          <Subtitle text='Impacts du numérique' />
          <List
            cssClass='resources'
            list={resourceList(resources[1]['list'])}
          />
          <Subtitle text='Outils d’audit' />
          <List
            cssClass='resources'
            list={resourceList(resources[2]['list'])}
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Reference