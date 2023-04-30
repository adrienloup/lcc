import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Mode } from './contexts/mode'
import { Data } from './contexts/data'
import Home from './pages/Home/Home'
import Resources from './pages/Resources/Resources'
import Course from './pages/Questions/Course/Course'
import Visitors from './pages/Questions/Visitors/Visitors'
import Duration from './pages/Questions/Duration/Duration'
import Where from './pages/Questions/Where/Where'
import Mobile from './pages/Questions/Mobile/Mobile'
import Pages from './pages/Questions/Pages/Pages'
import Servers from './pages/Questions/Servers/Servers'
import Location from './pages/Questions/Location/Location'
import Result from './pages/Result/Result'
import NotFound from './pages/NotFound/NotFound'

const getMode = (): string => {
  const localStorageMode = localStorage.getItem('mode')
  return localStorageMode || 'dark'
}

function App() {
  const [ mode, setMode ] = useState(getMode())
  const [ data, setData ] = useState({
    q1: 'Site Web',
    q2: '2500',
    q3: '3',
    q4: 'fr',
    q5: '70',
    q6: '5',
    q7: '2',
    q8: 'eu'
  })

  return (
    <Mode.Provider value={{ mode, setMode }}>
      <Data.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/lcc/'
              element={<Home mode={mode}/>}
            />
            <Route
              path='/lcc/ressources'
              element={<Resources mode={mode}/>}
            />
            <Route
              path='/lcc/question/quel-parcours'
              element={<Course mode={mode}/>}
            />
            <Route
              path='/lcc/question/nombre-de-visiteurs'
              element={<Visitors mode={mode}/>}
            />
            <Route
              path='/lcc/question/temps-moyen'
              element={<Duration mode={mode}/>}
            />
            <Route
              path='/lcc/question/localisation-des-visiteurs'
              element={<Where mode={mode}/>}
            />
            <Route
              path='/lcc/question/utilisateurs-sur-mobile'
              element={<Mobile mode={mode}/>}
            />
            <Route
              path='/lcc/question/nombre-de-pages'
              element={<Pages mode={mode}/>}
            />
            <Route
              path='/lcc/question/nombre-de-serveurs'
              element={<Servers mode={mode}/>}
            />
            <Route
              path='/lcc/question/localisation-des-serveurs'
              element={<Location mode={mode}/>}
            />
            <Route
              path='/lcc/resultat'
              element={<Result mode={mode}/>}
            />
            <Route
              path='*'
              element={<NotFound />}
            /> 
          </Routes>
        </BrowserRouter>
      </Data.Provider>
    </Mode.Provider>
  )
}

export default App
