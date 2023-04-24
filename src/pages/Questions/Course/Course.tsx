// import { resources } from '../../datas/resources.json'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../../contexts/data'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
// import './Resources.scss'

function Course({ mode }: { mode: string }) {
  console.log('course')
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)

  const handleData = () => {
    setData({ ...data, q1: 'answer1' })
  }

  return (
    <div className={`question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div className='inner'>
          <div onClick={handleData}>{data.q1}</div>
          <h1 className='question_title'>De quel parcours mesure-t-on l'impact ?</h1>
          {/* <Button
            label='Retour'
            cssClass='button'
            ariaLabel='Retourner à la question précédente'
            to={`/lcc/question/quel-parcours-mesure-t-on`}
          /> */}
          <nav className='buttons'>
            {/* <Button
              label='Retour'
              cssClass='button'
              ariaLabel='Retourner à la page précédente'
              to={`/lcc/`}
            /> */}
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
              to={`/lcc/question/nombre-de-visiteurs`}
            />
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Course