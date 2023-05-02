import { useState } from 'react'
import { NotebookProps } from '../../models/notebook'
import Button from '../../components/Button/Button'
import './Notebook.scss'

function Notebook({ label }: NotebookProps) {
  const [ active, setActive ] = useState(false)

  return (
    <div className={`notebook${active ? ' active' : ''}`}>
      <Button
        cssClass='tooltip'
        icon='notebook'
        ariaLabel={active ? 'Fermer les notes' : 'Ouvrir les notes'}
        ariaExpanded={active}
        click={() => setActive(active => !active)}
      />
      <div className='inner'>
        <div>
          <Button
            cssClass='close'
            label='Fermer'
            ariaLabel={active ? 'Fermer les notes' : 'Ouvrir les notes'}
            ariaExpanded={active}
            tabindex={active ? 0 : -1}
            click={() => setActive(false)}
          />
          <p dangerouslySetInnerHTML={{__html: label}}></p>
        </div>
      </div>
    </div>
  )
}

export default Notebook
