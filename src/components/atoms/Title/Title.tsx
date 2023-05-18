import { TextProps } from '../../../models/text'
import './Title.scss'

function Title({ id, cssClass, text }: TextProps) {
  return (
    <h1
      id={id}
      className={cssClass}
      dangerouslySetInnerHTML={{__html: text}}
    ></h1>
  )
}

export default Title
