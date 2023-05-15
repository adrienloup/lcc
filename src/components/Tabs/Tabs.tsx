import { useState } from 'react'
import { DataProps } from '../../models/data'
import Notebook from '../Notebook/Notebook'
import TabList from '../TabList/TabList'
import TabPanel from '../TabPanel/TabPanel'
import './Tabs.scss'

function Tabs({ data }: DataProps) {
  const [ active, setActive ] = useState('1')

  return (
    <div className='tabs'>
      {active === '1' && <Notebook label={'Permet d’unifier, peu importe que l’énergie ait été produite par <strong>un barrage hydraulique, une éolienne ou une centrale à Charbon</strong>. A savoir qu’il faut extraire <strong>100x le poids d’un ordinateur</strong> pour le fabriquer. Parce qu’<strong>1 KWh</strong> produit en Chine par une centrale à charbon émet <strong>1Kg de CO2-eq</strong>, soit <strong>10x plus</strong> qu’en France par une centrale nucléaire et <strong>5x plus</strong> en moyenne qu’un pays de l’OCDE. On comptabilise la consommation en eau bleue (celle consommable par l’homme en distinction de l’eau verte), contenue dans les sols des forêts ou l’eau de mer, toutes deux impropre à la consommation.'} />}
      {active === '2' && <Notebook label={'2'} />}
      {active === '3' && <Notebook label={'3'} />}
      <TabList
        active={active}
        click={(id: string) => setActive(id)}
      />
      <TabPanel
        active={active}
        data={data}
      />
    </div>
  )
}

export default Tabs
