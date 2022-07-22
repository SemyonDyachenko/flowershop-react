import React, { useState } from 'react'
import StartPage from './pages/StartPage'
import { Routes, Route } from 'react-router-dom'
import { routes } from './router'
import Header from './components/Header/Header'
import Modal from './components/popup/Modal'
import LoginForm from './components/AuthForm/LoginForm'
import SignupForm from './components/AuthForm/SignupForm'
import './scss/app.scss'

function App() {
  const [hiddenStartPage, setHiddenStartPage] = useState(
    localStorage.getItem('startpage') === 'false',
  )

  const [authFormActive, setAuthFormActive] = useState(false)
  const [authFormType, setAuthFormType] = useState(0)

  const openAuth = () => setAuthFormActive(true)

  return (
    <div className="App">
      {!hiddenStartPage && <StartPage hidden={hiddenStartPage} />}

      <div className="page-content">
        <Header openAuthForm={openAuth} />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} element={route.component} />
          ))}
        </Routes>
        <Modal width={450} active={authFormActive} setActive={setAuthFormActive}>
          {authFormType === 0 ? (
            <LoginForm openSignup={() => setAuthFormType(1)} />
          ) : (
            <SignupForm openLogin={() => setAuthFormType(0)} />
          )}
        </Modal>
      </div>
    </div>
  )
}

export default App
