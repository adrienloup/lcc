import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../../contexts/data'
import Notebook from '../../../components/Notebook/Notebook'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'
import '../Question.scss'

function Location({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)

  const inputs = [
    { label: 'France', value: 'fr' },
    { label: 'Europe', value: 'eu' },
    { label: 'Amérique du nord', value: 'na' },
    { label: 'Amérique du sud', value: 'sa' },
    { label: 'Asie', value: 'as' },
    { label: 'Océanie', value: 'oc' },
    { label: 'Mondial', value: 'ww' },
  ]
  
  const handleChange = (e: { target: { value: string } }) => {
    setData({ ...data, q8: e.target.value })
  }

  const InputList = (inputs: { label: string; value: string; }[]) => {
    return inputs.map(
      (input: { label: string; value: string; }, index) => (
        <div
          key={index}
          className='radio'
        >
          <input
            id={`i${index + 1}`}
            type='radio'
            name='radio'
            value={input.value}
            checked={data.q8 === input.value}
            aria-checked={data.q8 === input.value}
            onChange={handleChange}
          />
          <label
            htmlFor={`i${index + 1}`}
            tabIndex={0}
          >{input.label}</label>
        </div>
      )
    )
  }

  return (
    <div className={`page question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title label='<span>8/8</span> Où sont localisés<br />les serveurs&nbsp;?' />
        <Notebook label={'Le mix énergétique du pays dans lequel se situent les serveurs fait varier l’<strong>impact écologique</strong>.'} />
        <form className='form' action=''>
          {InputList(inputs)}
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
            label='Voir les impacts'
            cssClass='button'
            ariaLabel='Calculer l’impact écologique'
            to='/lcc/resultat'
          />
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export default Location