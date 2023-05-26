import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from '../../../contexts/data'
import Notebook from '../../../components/molecules/Notebook/Notebook'
import Scorebar from '../../../components/molecules/Scorebar/Scorebar'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import Back from '../../../components/molecules/Back/Back'
import Title from '../../../components/atoms/Title/Title'

function Duration() {
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)
  const [ value, setValue ] = useState(data.duration)

  const handleChange = (e: { target: { value: string } }) => {
    const duration = Number(e.target.value)
    setData({ ...data, duration: duration })
    setValue(duration)
  }

  const handleClick = () => {
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/localisation-utilisateurs')
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
            <Title text='<span>3/8</span> Quel est le temps passé en moyenne par utilisateur&nbsp;?' />
          </div>
          <Notebook note={'Le temps que les utilisateurs passent sur votre service numérique permet de connaître la quantité de teminaux, équipements réseau, serveur nécessaire pour servir, transiter et consulter les contenus ou les services que vous délivrez.'} />
          <div className='frame'>
            <form className='form' action=''>
              <label htmlFor='duration'>{value} {value > 1 ? 'minutes' : 'minute'}</label>
              <input
                id='duration'
                type='range'
                min='1'
                max='20'
                step='1'
                style={{backgroundSize: `${(value * 100) / 20}% 100%`}}
                value={value}
                onChange={handleChange}
              />
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

export default Duration