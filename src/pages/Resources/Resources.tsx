// import { resources } from '../../datas/resources.json'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Resources.scss'

function Resources({ mode }: { mode: string }) {
  return (
    <div className={`${mode}`}>
      <Header />
      <main
        className='main'
        role='main'
      >
        <div className='inner'>
          resources
          {/* {resources.map((resource, key) => {
            return (
              <div
                key={key}
                className={style.tutu}
              >
                <h2 className={style.title}>{resource.title}</h2>
                <List
                  cssClass={style}
                  list={resource.list}
                />
              </div>
            )
          })} */}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Resources