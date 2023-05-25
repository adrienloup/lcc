import Scorebar from '../../components/molecules/Scorebar/Scorebar'
import Subtitle from '../../components/atoms/Subtitle/Subtitle'
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
          <div className='heading'>
            <Title text='Quel est l’impact de votre site Web<br />sur la planète&nbsp;?' />
          </div>
          <div className='frame'>
            <Text text='<p>Le calculateur de cycle de vie est un outil d’éco-conception et d’Analyse de Cycle de Vie (ACV), qui vous aide à éco-concevoir votre site Web.</p><p>Répondez à 8 questions pour évaluer votre empreinte carbone. Votre résultat évolue à chaque nouvelle réponse. Vous pouvez modifier vos réponses pour améliorer le score. Chaque calcul est sauvegardé dans votre navigateur Web. Vous êtes le seul à y avoir accès.</p>' />
          </div>
          <nav
            className='wrapper'
            role='navigation'
          >
            <Button
              label='À l’action !'
              cssClass='start'
              ariaLabel='À l’action pour commencer le calcul'
              to='/lcc/question/site-web'
            />
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Home