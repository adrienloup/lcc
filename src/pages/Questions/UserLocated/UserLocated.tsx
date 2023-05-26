import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../../contexts/data'
import countries from '../../../utils/countries'
import Notebook from '../../../components/molecules/Notebook/Notebook'
import Scorebar from '../../../components/molecules/Scorebar/Scorebar'
import Header from '../../../components/organisms/Header/Header'
import Footer from '../../../components/organisms/Footer/Footer'
import Button from '../../../components/molecules/Button/Button'
import Back from '../../../components/molecules/Back/Back'
import Title from '../../../components/atoms/Title/Title'

function UserLocated() {
  const navigate = useNavigate()
  const { data, setData } = useContext(DataContext)

  const handleChange = (e: { target: { value: string } }) => {
    setData({ ...data, userlocated: e.target.value })
    localStorage.setItem('lcc-data', JSON.stringify(data))
  }

  const handleClick = () => {
    localStorage.setItem('lcc-data', JSON.stringify(data))
    navigate('/lcc/question/utilisateurs-mobile')
  }

  const InputList = (countries: { label: string; value: string; }[]) => {
    return countries.map(
      (country: { label: string; value: string; }, index) => (
        <div
          key={index}
          className='radio'
        >
          <input
            id={`radio${index + 1}`}
            type='radio'
            name='radio'
            value={country.value}
            checked={data.userlocated === country.value}
            aria-checked={data.userlocated === country.value}
            onChange={handleChange}
          />
          <label htmlFor={`radio${index + 1}`}>{country.label}</label>
        </div>
      )
    )
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
            <Title text='<span>4/8</span> Où se situe la majeure partie des utilisateurs&nbsp;?' id='radiogroup' />
          </div>
          <Notebook note={'Le mix énergétique du pays dans lequel se situent vos utilisateurs fait varier l’impact écologique.'} />
          <div className='frame'>
            <form className='form' action=''>
              <div
                role='radiogroup'
                aria-labelledby='radiogroup'
              >{InputList(countries)}</div>
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

export default UserLocated