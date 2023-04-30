import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Data } from '../../../contexts/data'
import Information from '../../../components/Information/Information'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Button from '../../../components/Button/Button'
import Title from '../../../components/Title/Title'

function Servers({ mode }: { mode: string }) {
  const navigate = useNavigate()
  const { data, setData } = useContext(Data)

  const handleData = () => {
    setData({ ...data, q7: 'answer7' })
  }

  return (
    <div className={`question ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div onClick={handleData}>{data.q7}</div>
        <Title
          cssClass='title'
          label='Nombre de serveurs&nbsp;?'
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
            to='/lcc/question/localisation-des-serveurs'
          />
        </nav>
        <Information
          cssClass='information'
          label={'Calculé à partir d’un PUE (Power Usage Effectiveness) moyen d’un serveur (soit 1,8). Si vous avez opté pour un hébergement "green", vous serez <strong>meilleur que la moyenne du marché</strong> sur ce paramètre. Compter les serveurs de production, staging, review, CDN, etc...'}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Servers