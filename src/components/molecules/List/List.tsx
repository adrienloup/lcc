import { ListProps } from '../../../models/list'
import './List.scss'

function List({ cssClass, list }: ListProps) {
  return <ul className={`list ${cssClass}`}>{list}</ul>
}

export default List