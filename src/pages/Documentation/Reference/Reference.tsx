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
    href: string;
  }[]) => list.map((item, index) => (
    <Button
      key={index}
      label={item.label}
      href={item.href}
    />
  ))

  const resourceList = (list: {
    label: string;
    href: string;
  }[]) => list.map((item, index) => (
    <li key={index}>
      <Button
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
          <Text text='@todo' />
          <Subtitle text='Qu’est-ce que c’est ?' />
          <Text text='Calculateur de cycle de vie est un outil d’éco-conception et d’Analyse du Cycle de Vie (ACV) pour vous aider à éco-concevoir votre site Web zéro carbone.' />
          <Subtitle text='Explorez les modèles' />
          <List
            cssClass='list'
            list={modelList(resources[0]['list'])}
          />
          <Subtitle text='Documentation générale' />
          <List
            tag={true}
            cssClass='list'
            list={resourceList(resources[0]['list'])}
          />
          <Subtitle text='Impacts du numérique' />
          <List
            tag={true}
            cssClass='list'
            list={resourceList(resources[1]['list'])}
          />
          <Subtitle text='Outils d’audit' />
          <List
            tag={true}
            cssClass='list'
            list={resourceList(resources[2]['list'])}
          />
          <Subtitle text='Comment intégrer ce simulateur dans votre site ?' />
          <Text text='Calculateur de cycle de vie est un outil d’éco-conception et d’Analyse du Cycle de Vie (ACV) pour vous aider à éco-concevoir votre site Web zéro carbone.' />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Reference