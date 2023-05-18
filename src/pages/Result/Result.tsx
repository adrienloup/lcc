import { useContext } from 'react'
import { DataContext } from '../../contexts/data'
import Scorebar from '../../components/molecules/Scorebar/Scorebar'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'
import Button from '../../components/molecules/Button/Button'
import Title from '../../components/atoms/Title/Title'

function Result() {
  const { data } = useContext(DataContext)

  return (
    <div className='page'>
      <Header />
      <main
        className='main'
        role='main'
      >
        <Scorebar />
        <article className='article'>
          <Title title={`Voici les impacts du parcours d’un utilisateur sur <br />« ${data.name} »`} />
          <Button
            label='Recommencer'
            cssClass='start'
            ariaLabel='Recommencer le calcul'
            to='/lcc/question/site-web'
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Result
// import { useContext } from 'react'
// import { Data } from '../../contexts/data'
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'
// import Button from '../../components/Button/Button'
// import Title from '../../components/Title/Title'
// import Tabs from '../../components/Tabs/Tabs'

// function Result({ a11y, mode }: { a11y: string, mode: string }) {
//   const { data } = useContext(Data)

//   return (
//     <div className={`page result ${mode}${a11y === 'enabled' ? ' a11y' : ''}`}>
//       <Header />
//       <main
//         className='main'
//         role='main'
//       >
//         <Title
//           id='result'
//           label={`Voici les impacts du parcours<br />« ${data.q1} »`}
//         />
//         <Tabs data={data} />
//         <Button
//           label='Recommencer'
//           cssClass='button'
//           role='button'
//           ariaLabel='Recommencer le parcours'
//           to='/lcc/question/quel-parcours'
//         />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default Result