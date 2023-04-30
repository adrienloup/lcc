import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Data } from '../../../contexts/data'
import Information from '../../../components/Information/Information'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'
import '../Question.scss'

function Course({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)
  const [ value, setValue ] = useState(data.q1)

  const handleChange = (e: { target: { value: string } }) => {
    const a1 = e.target.value
    setData({ ...data, q1: a1 })
    setValue(a1)
  }

  return (
    <div className={`question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title
          cssClass='title'
          label='De quel parcours mesure-t-on l’impact&nbsp;?'
        />
        <form className='form' action=''>
          <div className='text'>
            <label htmlFor='i1'>Nom du projet</label>
            <input
              id='i1'
              type='text'
              value={value}
              onChange={handleChange}
            />
          </div>
        </form>
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
            label='Continuer'
            cssClass='button'
            ariaLabel='Continuer le parcours'
            to='/lcc/question/nombre-de-visiteurs'
          />
        </nav>
        <Information
          cssClass='information'
          label={'L’écoconception part toujours d’un besoin utilisateur clairement <strong>identifié</strong> et dont le service numérique cherche à apporter une <strong>solution</strong>.'}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Course