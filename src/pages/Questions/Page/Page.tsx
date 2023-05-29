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

function Page() {
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)
  const [ value, setValue ] = useState(data.page)

  const handleChange = (e: { target: { value: string } }) => {
    const page = Number(e.target.value)
    setData({ ...data, page: page })
    setValue(page)
    localStorage.setItem('lcc-data', JSON.stringify(data))
  }

  const handleClick = () => {
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/nombre-serveurs')
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
            <Title text='6/8 Quel est le nombre de pages consultées&nbsp;?' />
          </div>
          <Notebook note={'Le parcours utilisateur, après l’identification du besoin utilisateurs, est le deuxième point crutial en éco-conception. Plus le parcours, entre l’utilisateur et le contenu ou le service pour lequel il est venu, est plus faible réduit l’impact écologique. En 2021, le poids moyen d’une page web est de 2,1Mo (contre 0,013Mo en 1995).'} />
          <div className='frame'>
            <form className='form' action=''>
              <label htmlFor='page'>{value} {value > 1 ? 'pages' : 'page'}</label>
              <input
                id='page'
                type='range'
                min='1'
                max='10'
                step='1'
                style={{backgroundSize: `${(value * 100) / 10}% 100%`}}
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

export default Page