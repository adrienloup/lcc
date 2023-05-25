import { useEffect } from 'react'
import { resources } from '../../../datas/resources.json'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import List from '../../../components/molecules/List/List'

function Resources() {

  const list = (list: {
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
          <Heading text='Les modèles de référence' />
          <Subtitle text='Documentation générale' />
          <List
            cssClass='resources'
            list={list(resources[0]['list'])}
          />
          <Subtitle text='Impacts du numérique' />
          <List
            cssClass='resources'
            list={list(resources[1]['list'])}
          />
          <Subtitle text='Outils d’audit' />
          <List
            cssClass='resources'
            list={list(resources[2]['list'])}
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Resources