import { useEffect } from 'react'
import { resources } from '../../../datas/resources.json'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/molecules/Header/Header'
import Footer from '../../../components/molecules/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import List from '../../../components/atoms/List/List'

function Resources() {

  const list = (list: {
    label: string;
    href: string;
    text?: string;
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
      {item.text}
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
          <Heading text='Numérique et environnement' />
          <div className='frame'>
            <Subtitle text={resources[0]['title']} />
            <List
              cssClass='resources'
              list={list(resources[0]['list'])}
            />
          </div>
          <div className='frame'>
            <Subtitle text={resources[1]['title']} />
            <List
              cssClass='resources'
              list={list(resources[1]['list'])}
            />
          </div>
          <div className='frame'>
            <Subtitle text={resources[2]['title']} />
            <List
              cssClass='resources'
              list={list(resources[2]['list'])}
            />
          </div>
          <div className='frame'>
            <Subtitle text={resources[3]['title']} />
            <List
              cssClass='resources'
              list={list(resources[3]['list'])}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Resources