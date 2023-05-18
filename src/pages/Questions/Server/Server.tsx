import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from '../../../contexts/data'
import Notebook from '../../../components/molecules/Notebook/Notebook'
import Scorebar from '../../../components/molecules/Scorebar/Scorebar'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import Title from '../../../components/atoms/Title/Title'

function Server() {
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)
  const [ value, setValue ] = useState(data.server)

  const handleChange = (e: { target: { value: string } }) => {
    const server = Number(e.target.value)
    setData({ ...data, server: server })
    setValue(server)
    localStorage.setItem('lcc-data', JSON.stringify(data))
  }

  const handleClick = () => {
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/localisation-serveurs')
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
          <Title title='7/8 Quel est le nombre de serveurs utilisés&nbsp;?' />
          <Notebook note={'Calculé à partir d’un PUE (Power Usage Effectiveness) moyen d’un serveur (soit 1,8). Si vous avez opté pour un hébergement « green », vous serez meilleur que la moyenne du marché sur ce paramètre. Compter les serveurs de production, staging, review, CDN, etc...'} />
          <form className='form' action=''>
            <label htmlFor='serveur'>{value} {value > 1 ? 'serveurs' : 'serveur'}</label>
            <input
              id='serveur'
              type='range'
              min='1'
              max='5'
              step='1'
              style={{backgroundSize: `${(value * 100) / 5}% 100%`}}
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
              click={() => handleClick()}
            />
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Server