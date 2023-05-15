import { TextProps } from '../../../models/text'
import './Text.scss'

function Text({ label }: TextProps) {  
  return (
    <div
      className='text'
      dangerouslySetInnerHTML={{__html: label}}
    ></div>
  )
}

export default Text
