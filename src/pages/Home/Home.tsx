import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import './Home.scss'

function Home({ mode }: { mode: string }) {
  return (
    <div className={`home ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title
          cssClass='title'
          label='Quel est<br />l’impact de votre<br />site web sur<br />la planète&nbsp;?'
        />
        <Button
          label='Démarrer'
          cssClass='button'
          role='button'
          ariaLabel='Démarrer le parcours'
          to='/lcc/question/quel-parcours'
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home