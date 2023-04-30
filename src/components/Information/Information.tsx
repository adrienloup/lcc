import { InformationProps } from '../../models/information'
import './Information.scss'

function Information({ cssClass, label }: InformationProps) {  
  return (
    <div className={cssClass}>
      <p dangerouslySetInnerHTML={{__html: label}}></p>
    </div>
  )
}

export default Information
