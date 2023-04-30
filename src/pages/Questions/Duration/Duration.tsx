import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Data } from '../../../contexts/data'
import Information from '../../../components/Information/Information'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'
import '../Question.scss'

function Duration({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)
  const [ value, setValue ] = useState(data.q3)

  const handleChange = (e: { target: { value: string } }) => {
    const a3 = e.target.value
    setData({ ...data, q3: a3 })
    setValue(a3)
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
          label='Temps passé en moyenne par utilisateur&nbsp;?'
        />
        <form className='form' action=''>
          <label htmlFor='i1'>{value} {Number(value) > 1 ? 'minutes' : 'minute'}</label>
          <input
            id='i1'
            type='range'
            min='1'
            max='20'
            step='1'
            style={{backgroundSize: `${(Number(value) * 100) / 20}% 100%`}}
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
            to='/lcc/question/localisation-des-visiteurs'
          />
        </nav>
        <Information
          cssClass='information'
          label={'Le temps qu’il passent sur votre service numérique permet de connaître la quantité de teminaux <strong>utilisateur, équipements réseau, serveur</strong> nécessaire pour servir, transiter et consulter les contenus ou les services que vous délivrez.'}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Duration