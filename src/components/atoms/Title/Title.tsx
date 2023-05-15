import { TitleProps } from '../../../models/title'
import './Title.scss'

function Title({ label }: TitleProps) {  
  return (
    <h1
      className='title'
      dangerouslySetInnerHTML={{__html: label}}
    ></h1>
  )
}

export default Title
