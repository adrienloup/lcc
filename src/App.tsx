import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Path } from './utils/path'
import { Mode } from './contexts/mode'
import NotFound from './pages/NotFound/NotFound'
import Resources from './pages/Resources/Resources'
import Course from './pages/Questions/Course/Course'
import Visitors from './pages/Questions/Visitors/Visitors'
import Duration from './pages/Questions/Duration/Duration'
import Home from './pages/Home/Home'

const getMode = (): string => {
  const localStorageMode = localStorage.getItem('mode')
  return localStorageMode || 'dark'
}

function App() {
  const [mode, setMode] = useState(getMode())

  return (
    <Mode.Provider value={{ mode, setMode }}>
      <BrowserRouter>
        <Routes>
          <Route
            path={Path}
            element={<Home mode={mode}/>}
          />
          <Route
            path={`${Path}ressources`}
            element={<Resources mode={mode}/>}
          />
          <Route
            path={`${Path}question/quel-parcours`}
            element={<Course mode={mode}/>}
          />
          <Route
            path={`${Path}question/nombre-de-visiteurs`}
            element={<Visitors mode={mode}/>}
          />
          <Route
            path={`${Path}question/temps-moyen`}
            element={<Duration mode={mode}/>}
          />
          <Route
            path='*'
            element={<NotFound />}
          /> 
        </Routes>
      </BrowserRouter>
    </Mode.Provider>
  )
}

export default App
