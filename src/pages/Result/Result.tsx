import { useContext } from 'react'
import { Data } from '../../contexts/data'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import Tabs from '../../components/Tabs/Tabs'
import './Result.scss'

function Result({ mode }: { mode: string }) {
  const { data } = useContext(Data)

  return (
    <div className={`result ${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Title
          cssClass='title'
          label={`Voici les impacts du parcours ${data.q1}`}
        />
        <Tabs data={data} />
        <Button
          label='Recommencer'
          cssClass='button'
          role='button'
          ariaLabel='Recommencer le parcours'
          to='/lcc/'
        />
      </main>
      <Footer />
    </div>
  )
}

export default Result