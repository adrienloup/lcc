import { ListProps } from '../../../models/list'

function List({ cssClass, list }: ListProps) {
  return <ul className={cssClass}>{list}</ul>
}

export default List