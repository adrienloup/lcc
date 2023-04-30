import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../../contexts/data'
import Information from '../../../components/Information/Information'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'

function Mobile({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)

  const handleData = () => {
    setData({ ...data, q5: 'answer5' })
  }

  return (
    <div className={`question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div onClick={handleData}>{data.q5}</div>
        <Title
          cssClass='title'
          label='Proportion d’utilisateurs en mobile&nbsp;?'
        />
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
            to='/lcc/question/nombre-de-pages'
          />
        </nav>
        <Information
          cssClass='information'
          label={'Le parcours utilisateur, après l’identification du besoin utilisateurs, est le deuxième point crutial en éco-conception. Plus le parcours, entre l’utilisateur et le contenu ou le service pour lequel il est venu, est plus faible réduit l’<strong>impact écologique</strong>. En 2021, le poids moyen d’une page web est de <strong>2,1Mo</strong> (contre 0,013Mo en 1995).'}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Mobile