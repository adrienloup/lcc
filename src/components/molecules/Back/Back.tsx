import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'

function Back() {
  const navigate = useNavigate()
  
  return (
    <Button
      label='Page précédente'
      cssClass='button'
      ariaLabel={'Retourner à la page précédente'}
      click={() => navigate(-1)}
    />
  )
}

export default Back