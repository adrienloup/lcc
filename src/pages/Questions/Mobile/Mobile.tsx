import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Data } from '../../../contexts/data'
import Notebook from '../../../components/Notebook/Notebook'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'

function Mobile({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)
  const [ value, setValue ] = useState(data.q5)

  const handleChange = (e: { target: { value: string } }) => {
    const a5 = e.target.value
    setData({ ...data, q5: a5 })
    setValue(a5)
  }

  return (
    <div className={`page question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title label='<span>5/8</span> Proportion d’utilisateurs<br />en mobile&nbsp;?' />
        <Notebook label={'Les conditions d’utilisation de votre service numérique, en mobilité ou au bureau, ont des impacts bien différents.'} />
        <form className='form' action=''>
          <label htmlFor='i1'>{value} %</label>
          <input
            id='i1'
            type='range'
            min='0'
            max='100'
            step='1'
            style={{backgroundSize: `${(Number(value) * 100) / 100}% 100%`}}
            value={value}
            onChange={handleChange}
          />
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
            to='/lcc/question/nombre-de-pages'
          />
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export default Mobile