import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../../contexts/data'
import Information from '../../../components/Information/Information'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'
import '../Question.scss'

function Location({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)

  const handleData = () => {
    setData({ ...data, q8: 'answer8' })
  }

  return (
    <div className={`question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div onClick={handleData}>{data.q8}</div>
        <Title
          cssClass='title'
          label='Où sont localisés les serveurs&nbsp;?'
        />
        <nav
          className='navigation'
          role='navigation'
        >
          <Button
            label='Retour'
            cssClass='button'
            ariaLabel={'Retourner à la page précédente'}
            click={() => navigate(-1)}
          />
          <Button
            label='Voir les impacts'
            cssClass='button'
            ariaLabel='Calculer l’impact écologique'
            to='/lcc/resultat'
          />
        </nav>
        <Information
          cssClass='information'
          label={'Le mix énergétique du pays dans lequel se situent les serveurs fait varier l’<strong>impact écologique</strong>.'}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Location