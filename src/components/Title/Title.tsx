import { TitleProps } from '../../models/title'
import './Title.scss'

function Title({ id, label }: TitleProps) {  
  return (
    <h1
      id={id}
      className='title'
      dangerouslySetInnerHTML={{__html: label}}
    ></h1>
  )
}

export default Title
