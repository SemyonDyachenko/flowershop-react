import React, { useState } from 'react'
import StartPage from './pages/StartPage'
import './scss/app.scss'
import MainPage from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [hiddenStartPage, setHiddenStartPage] = useState(
    localStorage.getItem('startpage') === 'false',
  )

  return (
    <div className="App">
      {!hiddenStartPage && <StartPage />}
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
