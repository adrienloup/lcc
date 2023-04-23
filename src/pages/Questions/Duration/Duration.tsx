// import { resources } from '../../datas/resources.json'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
// import './Resources.scss'

function Duration({ mode }: { mode: string }) {
  const navigate = useNavigate()

  return (
    <div className={`question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div className='inner'>
          <h1 className='question_title'>Temps passé en moyenne par utilisateur par parcours ?</h1>
          <nav className='buttons'>
            <Button
              label='Retour'
              cssClass='button'
              ariaLabel={'Retourner à la page précédente'}
              click={() => navigate(-1)}
            />
            <Button
              label='Continuer'
              cssClass='button'
              ariaLabel='Continuer le parcours'
              to={`/lcc/question/quel-parcours-mesure-t-on`}
            />
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Duration