import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from './contexts/data'
import Home from './pages/Home/Home'
import Name from './pages/Questions/Name/Name'
import Visitor from './pages/Questions/Visitor/Visitor'
import Duration from './pages/Questions/Duration/Duration'
import UserLocated from './pages/Questions/UserLocated/UserLocated'
import Mobile from './pages/Questions/Mobile/Mobile'
import Page from './pages/Questions/Page/Page'
import Server from './pages/Questions/Server/Server'
import ServerLocated from './pages/Questions/ServerLocated/ServerLocated'
import Result from './pages/Result/Result'
import Reference from './pages/Documentation/Reference/Reference'
import GreenhouseGas from './pages/Documentation/GreenhouseGas/GreenhouseGas'
import Materials from './pages/Documentation/Materials/Materials'
import Watter from './pages/Documentation/Watter/Watter'
import PrimaryEnergy from './pages/Documentation/PrimaryEnergy/PrimaryEnergy'
import Resources from './pages/Documentation/Resources/Resources'

const getData = (): any => {
  const { data } = useContext(DataContext)
  const localData = localStorage.getItem('lcc-data')
  return localData ? JSON.parse(localData) : data
}

function App() {
  const [data, setData] = useState(getData())

  return (
    <DataContext.Provider value={{
      data,
      setData
    }}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/lcc/'
            element={<Home />}
          />
          <Route
            path='/lcc/question/site-web'
            element={<Name />}
          />
          <Route
            path='/lcc/question/nombre-visiteurs'
            element={<Visitor />}
          />
          <Route
            path='/lcc/question/temps-moyen'
            element={<Duration />}
          />
          <Route
            path='/lcc/question/localisation-utilisateurs'
            element={<UserLocated />}
          />
          <Route
            path='/lcc/question/utilisateurs-mobile'
            element={<Mobile />}
          />
          <Route
            path='/lcc/question/nombre-pages'
            element={<Page />}
          />
          <Route
            path='/lcc/question/nombre-serveurs'
            element={<Server />}
          />
          <Route
            path='/lcc/question/localisation-serveurs'
            element={<ServerLocated />}
          />
          <Route
            path='/lcc/resultat'
            element={<Result />}
          />
          <Route
            path='/lcc/documentation/modeles-de-reference'
            element={<Reference />}
          />
          <Route
            path='/lcc/documentation/gaz-a-effet-de-serre'
            element={<GreenhouseGas />}
          />
          <Route
            path='/lcc/documentation/matieres-premieres'
            element={<Materials />}
          />
          <Route
            path='/lcc/documentation/eau'
            element={<Watter />}
          />
          <Route
            path='/lcc/documentation/energie-primaire'
            element={<PrimaryEnergy />}
          />
          <Route
            path='/lcc/documentation/ressources'
            element={<Resources />}
          />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App
