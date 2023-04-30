import { useState } from 'react'
import { DataProps } from '../../models/data'
import TabList from '../TabList/TabList'
import TabPanel from '../TabPanel/TabPanel'
import './Tabs.scss'

function Tabs({ data }: DataProps) {
  const [ active, setActive ] = useState('1')

  return (
    <div className='tabs'>
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
