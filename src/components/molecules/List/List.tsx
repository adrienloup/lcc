import { ListProps } from '../../../models/list'
import './List.scss'

function List({ tag, cssClass, list }: ListProps) {
  const Tag = (tag) ? 'ul' : 'div';
  return <Tag className={cssClass}>{list}</Tag>
}

export default List