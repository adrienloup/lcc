import { useNavigate } from 'react-router-dom'
import { resources } from '../../datas/resources.json'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import List from '../../components/List/List'
import './Resources.scss'

function Resources({ mode }: { mode: string }) {
  const navigate = useNavigate()

  return (
    <div className={`page resources ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title label='Calculateur de cycle de vie' />
        <div>Ce calculateur est un outil d'éco-conception et d'Analyse du Cycle de Vie (ACV) pour vous aider à éco-concevoir votre site web zéro carbone. Le calcul donne un résultat par utilisateur, par an et par donnée brute. L'outil utilise plusieurs données clés : le trafic du site Web, l'intensité énergétique, l'intensité carbone de l'électricité et la source d'énergie utilisée.</div>
        <div>
          {resources.map((resource, key) => {
            return (
              <div
                key={key}
                className='tutu'
              >
                <h2>{resource.title}</h2>
                <List
                  cssClass='tutu'
                  list={resource.list}
                />
              </div>
            )
          })}
        </div>
        <Button
          label='Retour'
          cssClass='button'
          ariaLabel={'Retour à la page précédente'}
          click={() => navigate(-1)}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Resources