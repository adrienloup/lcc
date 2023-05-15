import Notebook from '../../components/molecules/Notebook/Notebook'
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
        <div className='top'>
          <Title label='Quel est l’impact de votre site web sur la planète&nbsp;?' />
          <Notebook label='tutu' />
        </div>
        <Text label='<p>Obtenez une estimation de votre empreinte carbone de consommation. Chaque calcul que vous faite est sauvegardé dans votre navigateur Web. Vous êtes le seul à y avoir accès.</p>' />
        <Button
          label='Démarrer'
          cssClass='start'
          ariaLabel='Démarrer le calculateur de cycle de vie'
          to='/lcc/question/quel-parcours'
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home