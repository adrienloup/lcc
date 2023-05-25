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
            label='Les modèles de référence'
            to='/lcc/documentation/modeles-de-reference'
          />
        </li>
        <li>
          <Button
            label='La documentation'
            to='/lcc/documentation/ressources'
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
