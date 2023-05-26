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

function User() {
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)
  const [ value, setValue ] = useState(data.user)

  const handleChange = (e: { target: { value: string } }) => {
    const user = Number(e.target.value)
    setData({ ...data, user: user })
    setValue(user)
    localStorage.setItem('lcc-data', JSON.stringify(data))
  }

  const handleClick = () => {
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/temps-moyen')
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
            <Title text='<span>2/8</span> Quel est le nombre de visiteurs par mois&nbsp;?' />
          </div>
          <Notebook note={'Le nombre de visiteurs par mois permet de connaître la quantité de teminaux utilisateur, équipements réseau, serveur nécessaire pour consulter les contenus ou les services que vous délivrez. Si vous ne la connaissez pas, vous pouvez trouver cette info dans votre outil Google Analytics ou équivalent.'} />
          <div className='frame'>
            <form className='form' action=''>
              <label htmlFor='user'>{value} visiteurs</label>
              <input
                id='user'
                type='range'
                min='1000'
                max='10000'
                step='1'
                style={{backgroundSize: `${(value * 100) / 10000}% 100%`}}
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

export default User