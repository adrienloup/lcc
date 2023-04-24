// import { resources } from '../../datas/resources.json'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../../contexts/data'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
// import './Resources.scss'

function Visitors({ mode }: { mode: string }) {
  console.log('visitors')
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)

  const handleData = () => {
    setData({ ...data, q2: 'answer2' })
  }

  return (
    <div className={`question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div className='inner'>
          <div onClick={handleData}>{data.q2}</div>
          <h1 className='question_title'>Quel est le nombre de visiteurs par mois ?</h1>
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
              to={`/lcc/question/temps-moyen`}
            />
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Visitors