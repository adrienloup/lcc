import { useState } from 'react'
import { NotebookProps } from '../../../models/notebook'
import Button from '../Button/Button'
import './Notebook.scss'

function Notebook({ note }: NotebookProps) {
  const [ active, setActive ] = useState(false)

  return (
    <div className={`notebook${active ? ' active' : ''}`}>
      <Button
        cssClass='alert'
        icon='notebook'
        ariaLabel={active ? 'Fermer les notes' : 'Ouvrir les notes'}
        ariaExpanded={active}
        click={() => setActive(active => !active)}
      />
      <div>
        <Button
          label='Fermer'
          ariaLabel={active ? 'Fermer les notes' : 'Ouvrir les notes'}
          ariaExpanded={active}
          tabindex={active ? 0 : -1}
          click={() => setActive(false)}
        />
        <p>{note}</p>
      </div>
    </div>
  )
}

export default Notebook
