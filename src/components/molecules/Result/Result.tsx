import { ResultProps } from '../../../models/result'
import Button from '../../../components/molecules/Button/Button'
import Percent from '../../../components/atoms/Percent/Percent'
import './Result.scss'

function Result({ percent, label, ariaLabel, icon, to }: ResultProps) {
  return (
    <div className='result'>
      {!isNaN(percent) && <Percent percent={percent} />}
      <Button
        cssClass='link'
        label={label}
        ariaLabel={ariaLabel}
        icon={icon}
        to={to}
      />
    </div>
  )
}

export default Result
