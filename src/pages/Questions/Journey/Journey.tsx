import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from '../../../contexts/data'
import Notebook from '../../../components/molecules/Notebook/Notebook'
import Scorebar from '../../../components/molecules/Scorebar/Scorebar'
import Header from '../../../components/molecules/Header/Header'
import Footer from '../../../components/molecules/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import Title from '../../../components/atoms/Title/Title'

function Journey() {
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)
  const [ name, setName ] = useState(data.name)
  const [ journey, setJourney ] = useState(data.journey)

  const handleChangeName = (e: { target: { value: string } }) => {
    const name = e.target.value
    setData({ ...data, name: name })
    setName(name)
  }

  const handleChangeJourney = (e: { target: { value: string } }) => {
    const journey = e.target.value
    setData({ ...data, journey: journey })
    setJourney(journey)
  }

  const handleClick = () => {
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/nombre-visiteurs')
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
            <Title text='<span>1/8</span> De quel parcours mesure-t-on l’impact&nbsp;?' />
          </div>
          <Notebook note={'L’éco-conception part toujours d’un besoin utilisateur clairement identifié et dont le service numérique cherche à apporter une solution.'} />
          <div className='frame'>
            <form
              className='form'
              action=''
            >
              <label htmlFor='name'>Nom du site Web</label>
              <input
                id='name'
                type='text'
                maxLength={15}
                value={name}
                onChange={handleChangeName}
              />
              <label htmlFor='journey'>Dans le but de</label>
              <input
                id='journey'
                type='text'
                maxLength={30}
                value={journey}
                onChange={handleChangeJourney}
              />
            </form>
          </div>
          <nav
            className='footing'
            role='navigation'
          >
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

export default Journey