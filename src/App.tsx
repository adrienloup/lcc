import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Data } from './contexts/data'
import Home from './pages/Home/Home'

function App() {
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
    <Data.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/lcc/'
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </Data.Provider>
  )
}

export default App
