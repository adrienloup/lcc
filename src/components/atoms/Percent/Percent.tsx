import { PercentProps } from '../../../models/percent'
import './Percent.scss'

function Percent({ number }: PercentProps) {
  return (
    <div className={`percent ${(number > 0) ? 'positive' : 'negative'}`}>
      {(number > 0) ? `+${(number).toFixed(0)}` : (number).toFixed(0)}%
    </div>
  )
}

export default Percent
