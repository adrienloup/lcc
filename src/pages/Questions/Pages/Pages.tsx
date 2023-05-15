import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Data } from '../../../contexts/data'
import Notebook from '../../../components/Notebook/Notebook'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'

function Pages({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)
  const [ value, setValue ] = useState(data.q6)

  const handleChange = (e: { target: { value: string } }) => {
    const a6 = e.target.value
    setData({ ...data, q6: a6 })
    setValue(a6)
  }

  return (
    <div className={`page question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title label='<span>6/8</span> Nombre de pages<br />consultées&nbsp;?' />
        <Notebook label={'Le parcours utilisateur, après l’identification du besoin utilisateurs, est le deuxième point crutial en éco-conception. Plus le parcours, entre l’utilisateur et le contenu ou le service pour lequel il est venu, est plus faible réduit l’<strong>impact écologique</strong>. En 2021, le poids moyen d’une page web est de <strong>2,1Mo</strong> (contre 0,013Mo en 1995).'} />
        <form className='form' action=''>
          <label htmlFor='i1'>{value} {Number(value) > 1 ? 'pages' : 'page'}</label>
          <input
            id='i1'
            type='range'
            min='1'
            max='10'
            step='1'
            style={{backgroundSize: `${(Number(value) * 100) / 10}% 100%`}}
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
            to='/lcc/question/nombre-de-serveurs'
          />
        </nav>
      </main>
      <Footer />
    </div>
  )
}

export default Pages