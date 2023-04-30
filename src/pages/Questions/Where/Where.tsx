import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../../contexts/data'
import Information from '../../../components/Information/Information'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'
import '../Question.scss'

function Where({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)

  const handleChange = (e: { target: { value: string } }) => {
    setData({ ...data, q4: e.target.value })
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
          label='Où se situe la majeure partie des utilisateurs&nbsp;?'
        />
        <form className='form' action=''>
          <div className='radio'>
            <input
              id='i1'
              type='radio'
              name='radio'
              value='fr'
              checked={data.q4 === 'fr'}
              onChange={handleChange}
            />
            <label htmlFor='i1'>France</label>
          </div>
          <div className='radio'>
            <input
              id='i2'
              type='radio'
              name='radio'
              value='eu'
              checked={data.q4 === 'eu'}
              onChange={handleChange}
            />
            <label htmlFor='i2'>Europe</label>
          </div>
          <div className='radio'>
            <input
              id='i3'
              type='radio'
              name='radio'
              value='na'
              checked={data.q4 === 'na'}
              onChange={handleChange}
            />
            <label htmlFor='i3'>Amérique du nord</label>
          </div>
          <div className='radio'>
            <input
              id='i4'
              type='radio'
              name='radio'
              value='sa'
              checked={data.q4 === 'sa'}
              onChange={handleChange}
            />
            <label htmlFor='i4'>Amérique du sud</label>
          </div>
          <div className='radio'>
            <input
              id='i5'
              type='radio'
              name='radio'
              value='as'
              checked={data.q4 === 'as'}
              onChange={handleChange}
            />
            <label htmlFor='i5'>Asie</label>
          </div>
          <div className='radio'>
            <input
              id='i6'
              type='radio'
              name='radio'
              value='oc'
              checked={data.q4 === 'oc'}
              onChange={handleChange}
            />
            <label htmlFor='i6'>Océanie</label>
          </div>
          <div className='radio'>
            <input
              id='i7'
              type='radio'
              name='radio'
              value='ww'
              checked={data.q4 === 'ww'}
              onChange={handleChange}
            />
            <label htmlFor='i7'>Worldwide</label>
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
            to='/lcc/question/utilisateurs-sur-mobile'
          />
        </nav>
        <Information
          cssClass='information'
          label={'Le mix énergétique du pays dans lequel se situent vos utilisateurs fait varier l’<strong>impact écologique</strong>.'}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Where