import { PercentProps } from '../../../models/percent'
import './Percent.scss'

function Percent({ percent }: PercentProps) {
  return (
    <div className={`percent ${(percent > 0) ? 'positive' : 'negative'}`}>
      {(percent > 0) ? `+${(percent).toFixed(0)}` : (percent).toFixed(0)} %
    </div>
  )
}

export default Percent
