import { TextProps } from '../../../models/text'
import Text from '../../../components/atoms/Text/Text'
import Icon from '../../atoms/Icon/Icon'
import './Score.scss'

function Score({ text }: TextProps) {
  return (
    <div className='score'>
      <Icon icon='cloud' />
      <Text text={`<p>${text}</p>`} />
    </div>
  )
}

export default Score
