import { Path } from '../../utils/path'
import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import './Home.scss'

function Home({ mode }: { mode: string }) {
  return (
    <div className={`${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div className='inner'>
          <h1 className='title'>Quel est l'impact de votre site web sur la planète ?</h1>
          <Button
            label='Démarrer'
            cssClass='button'
            role='button'
            ariaLabel='Démarrer le parcours'
            to={`${Path}question/quel-parcours`}
          />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Home