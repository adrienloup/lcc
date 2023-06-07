import { TextProps } from '../../../models/text'
import Text from '../../atoms/Text/Text'
import Icon from '../../atoms/Icon/Icon'
import './Warning.scss'

function Warning({ text }: TextProps) {
  return (
    <div className='warning'>
      <Icon icon='warning' />
      <Text text={text} />
    </div>
  )
}

export default Warning
