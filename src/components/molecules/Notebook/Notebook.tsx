import { useState } from 'react'
import { NotebookProps } from '../../../models/notebook'
import Button from '../Button/Button'
import './Notebook.scss'

function Notebook({ note }: NotebookProps) {
  const [ active, setActive ] = useState(false)

  return (
    <div className={`notebook${active ? ' active' : ''}`}>
      <Button
        cssClass='info'
        icon='notebook'
        ariaLabel={active ? 'Fermer les notes' : 'Ouvrir les notes'}
        ariaExpanded={active}
        click={() => setActive(active => !active)}
      />
      <div>
        <p>{note}</p>
        <Button
          label='Fermer les notes'
          ariaLabel={active ? 'Fermer les notes' : 'Ouvrir les notes'}
          ariaExpanded={active}
          tabindex={active ? 0 : -1}
          click={() => setActive(false)}
        />
      </div>
    </div>
  )
}

export default Notebook
