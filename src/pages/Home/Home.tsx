import Scorebar from '../../components/molecules/Scorebar/Scorebar'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'
import Button from '../../components/molecules/Button/Button'
import Title from '../../components/atoms/Title/Title'
import Text from '../../components/atoms/Text/Text'

function Home() {
  return (
    <div className='page'>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Scorebar />
        <article className='article'>
          <Title title='Quel est l’impact de votre site Web sur la planète&nbsp;?' />
          <Text text='<p>L’Analyse du Cycle de Vie (ACV), vous aide à éco-concevoir votre site Web zéro carbone.</p><p>Votre résultat évolue à chaque nouvelle réponse&nbsp;!</p><p>Chaque calcul est sauvegardé dans votre navigateur Web.<br />Vous êtes le seul à y avoir accès.</p>' />
          <Button
            label='Je démarre'
            cssClass='start'
            ariaLabel='Je démarre le calcul'
            to='/lcc/question/site-web'
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Home