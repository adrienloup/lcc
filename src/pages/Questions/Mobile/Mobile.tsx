import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from '../../../contexts/data'
import Notebook from '../../../components/molecules/Notebook/Notebook'
import Scorebar from '../../../components/molecules/Scorebar/Scorebar'
import Header from '../../../components/molecules/Header/Header'
import Footer from '../../../components/molecules/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import Back from '../../../components/molecules/Back/Back'
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

  const handleClick = () => {
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/nombre-pages')
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
          <div className='heading'>
            <Title text='<span>5/8</span> Quelle est la proportion d’utilisateurs en mobile&nbsp;?' />
          </div>
          <Notebook note={'Les conditions d’utilisation de votre service numérique, en mobilité ou au bureau, ont des impacts bien différents.'} />
          <div className='frame'>
            <form className='form' action=''>
              <div className='range'>
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
              </div>
            </form>
          </div>
          <nav
            className='footing'
            role='navigation'
          >
            <Back />
            <Button
              label='Je continue'
              cssClass='button'
              ariaLabel='Je continue le calcul'
              click={() => handleClick()}
            />
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Mobile