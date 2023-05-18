import Button from '../../molecules/Button/Button'

function Navigation({ cssClass }: { cssClass: string }) {
  return (
    <nav
      className={cssClass}
      role='navigation'
    >
      <ul>
        <li>
          <Button
            label='Le calculateur de cycle de vie'
            to='/lcc/'
          />
        </li>
        <li>
          <Button
            label='Le modèle de référence'
            to='/lcc/documentation/reference'
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
