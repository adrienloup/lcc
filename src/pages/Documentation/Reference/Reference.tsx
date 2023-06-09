import { useEffect } from 'react'
import { models } from '../../../datas/models.json'
import Heading from '../../../components/molecules/Heading/Heading'
import Subtitle from '../../../components/atoms/Subtitle/Subtitle'
import Header from '../../../components/molecules/Header/Header'
import Footer from '../../../components/molecules/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import List from '../../../components/atoms/List/List'
import Text from '../../../components/atoms/Text/Text'

function Reference() {

  const list = (list: {
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
          <div className='frame'>
            <Text text='<p>Le calculateur de cycle de vie évalue l’impact écologique annuelle du parcours d’un utilisateur de votre site Web.</p>
              <p>L’outil utilise plusieurs métriques : trafic du site Web, intensité énergétique, intensité carbone de l’électricité, source d’énergie utilisée.</p>' />
          </div>
          <div className='frame'>
            <Subtitle text='Comment l’impact écologique est-il calculé&nbsp;?' />
          </div>
            <List
              cssClass='models'
              list={list(models)}
            />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Reference