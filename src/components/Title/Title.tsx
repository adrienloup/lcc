import { TitleProps } from '../../models/title'

function Title({ cssClass, label }: TitleProps) {  
  return (
    <h1
      className={cssClass}
      dangerouslySetInnerHTML={{__html: label}}
    ></h1>
  )
}

export default Title
