import { TextProps } from '../../../models/text'
import './Subtitle.scss'

function Subtitle({ text }: TextProps) {  
  return (
    <h2 className='subtitle'>{text}</h2>
  )
}

export default Subtitle
