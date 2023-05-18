import { TextProps } from '../../../models/text'
import Navigation from '../Navigation/Navigation'
import Title from '../../../components/atoms/Title/Title'
import './Heading.scss'

function Heading({ text }: TextProps) {
  return (
    <div className='heading'>
      <Navigation cssClass='heading_navigation' />
      <Title cssClass='heading_title' text={text} />
    </div>
  )
}

export default Heading
