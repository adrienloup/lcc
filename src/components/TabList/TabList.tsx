import { TabProps } from '../../models/tab'
import Button from '../Button/Button'
import './TabList.scss'

function TabList({ active, click }: TabProps) {
  
  const Tab = ({
    id,
    title,
    text
  }: {
    id: string;
    title: string;
    text: string;
  }) => {
    return (
      <Button
        key={id}
        cssClass={`tab${id === active ? ' active' : ''}`}
        role='tab'
        label={title}
        ariaLabel={text}
        ariaSelected={id === active}
        ariaControls={`tabpanel-${id}`}
        click={() => click!(id)}
      />
    )
  }

  return (
    <div
      className='tab-list'
      role='tablist'
      aria-labelledby='result'
    >
      <Tab
        id='1'
        title='Par utilisateur'
        text='Équivalences par utilisateur'
      />
      <Tab
        id='2'
        title='Par année'
        text='Équivalences par année'
      />
      <Tab
        id='3'
        title='Données brutes'
        text='Données brutes par année'
      />
    </div>
  )
}

export default TabList
