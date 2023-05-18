import { TextProps } from '../../../models/text'
import './Title.scss'

function Title({ id, text }: TextProps) {
  return (
    <h1
      id={id}
      className='title'
      dangerouslySetInnerHTML={{__html: text}}
    ></h1>
  )
}

export default Title
