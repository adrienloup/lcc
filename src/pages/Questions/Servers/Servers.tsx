import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Data } from '../../../contexts/data'
import Notebook from '../../../components/Notebook/Notebook'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'

function Servers({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)
  const [ value, setValue ] = useState(data.q7)

  const handleChange = (e: { target: { value: string } }) => {
    const a7 = e.target.value
    setData({ ...data, q7: a7 })
    setValue(a7)
  }

  return (
    <div className={`page question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title label='<span>7/8</span> Nombre de serveurs&nbsp;?' />
        <Notebook label={'Calculé à partir d’un PUE (Power Usage Effectiveness) moyen d’un serveur (soit 1,8). Si vous avez opté pour un hébergement "green", vous serez <strong>meilleur que la moyenne du marché</strong> sur ce paramètre. Compter les serveurs de production, staging, review, CDN, etc...'} />
        <form className='form' action=''>
          <label htmlFor='i1'>{value} {Number(value) > 1 ? 'serveurs' : 'serveur'}</label>
          <input
            id='i1'
            type='range'
            min='1'
            max='5'
            step='1'
            style={{backgroundSize: `${(Number(value) * 100) / 5}% 100%`}}
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
            to='/lcc/question/localisation-des-serveurs'
          />
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export default Servers