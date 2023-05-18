import { TextProps } from '../../../models/text'
import './Text.scss'

function Text({ text }: TextProps) {  
  return (
    <div
      className='text'
      dangerouslySetInnerHTML={{__html: text}}
    ></div>
  )
}

export default Text
