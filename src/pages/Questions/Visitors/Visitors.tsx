import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Data } from '../../../contexts/data'
import Notebook from '../../../components/Notebook/Notebook'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'
import '../Question.scss'

function Visitors({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)
  const [ value, setValue ] = useState(data.q2)

  const handleChange = (e: { target: { value: string } }) => {
    const a2 = e.target.value
    setData({ ...data, q2: a2 })
    setValue(a2)
  }

  return (
    <div className={`page question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title label='<span>2/8</span> Quel est le nombre<br />de visiteurs par mois&nbsp;?' />
        <Notebook label={'Le nombre de visiteurs par mois permet de connaître la quantité de teminaux <strong>utilisateur, équipements réseau, serveur</strong> nécessaire pour consulter les contenus ou les services que vous délivrez. Si vous ne la connaissez pas, vous pouvez trouver cette info dans votre outil Google Analytics ou équivalent.'} />
        <form className='form' action=''>
          <div className='range'>
            <label htmlFor='i1'>{value} visiteurs</label>
            <input
              id='i1'
              type='range'
              min='1000'
              max='10000'
              step='1'
              style={{backgroundSize: `${(Number(value) * 100) / 10000}% 100%`}}
              value={value}
              onChange={handleChange}
            />
          </div>
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
            to='/lcc/question/temps-moyen'
          />
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export default Visitors