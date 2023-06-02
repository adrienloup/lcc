import { useEffect } from 'react'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'
import Title from '../../components/atoms/Title/Title'

function A11y() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className='page'>
      <Header />
      <main
        className='main'
        role='main'
      >
        <article className='article'>
          <div className='heading'>
            <Title text='Déclaration d’accessibilité numérique' />
          </div>
          <div className='frame'>
            Information bientôt disponible
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default A11y