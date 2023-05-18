import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from '../../../contexts/data'
import Notebook from '../../../components/molecules/Notebook/Notebook'
import Scorebar from '../../../components/molecules/Scorebar/Scorebar'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import Title from '../../../components/atoms/Title/Title'

function Mobile() {
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)
  const [ value, setValue ] = useState(data.mobile)

  const handleChange = (e: { target: { value: string } }) => {
    const mobile = Number(e.target.value)
    setData({ ...data, mobile: mobile })
    setValue(mobile)
  }

  return (
    <div className='page'>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Scorebar />
        <article className='article'>
          <Title text='5/8 Quelle est la proportion d’utilisateurs en mobile&nbsp;?' />
          <Notebook note={'Les conditions d’utilisation de votre service numérique, en mobilité ou au bureau, ont des impacts bien différents.'} />
          <form className='form' action=''>
            <label htmlFor='mobile'>{value} %</label>
            <input
              id='mobile'
              type='range'
              min='1'
              max='100'
              step='1'
              style={{backgroundSize: `${(value * 100) / 100}% 100%`}}
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
              ariaLabel={'Retour à la question précédente'}
              click={() => navigate(-1)}
            />
            <Button
              label='Continuer'
              cssClass='button'
              ariaLabel='Continuer le calcul'
              to='/lcc/question/nombre-pages'
            />
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Mobile