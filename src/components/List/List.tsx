import { ListProps } from '../../models/list'
import Button from '../Button/Button'

function List({ list }: ListProps) {
  const listed = list.map((resource, key) => (
    <li key={key}>
      <Button
        cssClass='tutu'
        label={resource.label}
        href={resource.href}
      />
    </li>
  ));
  return <ul className='tutu'>{listed}</ul>
}

export default List