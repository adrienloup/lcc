import { TextProps } from '../../../models/text'
import './Text.scss'

function Text({ text }: TextProps) {  
  return (
    <div className='text'>
      <p dangerouslySetInnerHTML={{__html: text}}></p>
    </div>
  )
}

export default Text
