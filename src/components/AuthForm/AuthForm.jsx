import React, { useState } from 'react'
import Button from '../ui/Button/Button'
import Checkbox from '../ui/Checkbox/Checkbox'
import Input from '../ui/Input/Input'
import { FaGoogle, FaVk } from 'react-icons/fa'
import './_authForm.scss'

const AuthForm = ({ defaultformType }) => {
  const formTypes = ['login', 'signup']
  const [formType, setFormType] = useState(defaultformType)
  const [savePassword, setSavePassword] = useState(false)

  function send(e) {
    e.preventDefault()
  }

  function changeFormType() {
    setFormType(formType === formTypes[0] ? formTypes[1] : formTypes[0])
  }
  return (
    <form className="auth">
      <h2>{formType === 'login' ? 'Авторизация' : 'Регистрация'}</h2>
      <Input type="email" maxLength={255} autocomplete="email" placeholder={'E-mail'} />
      <Input type="password" maxLength={255} autocomplete="password" placeholder={'Пароль'} />
      {formType === 'signup' && (
        <Input
          type="password"
          maxLength={255}
          autocomplete="password"
          placeholder={'Подтвердите пароль'}
        />
      )}
      {formType === 'login' && (
        <div className="auth--options">
          <div className="save-password-section">
            <div>
              <Checkbox active={savePassword} setActive={setSavePassword} />
            </div>
            <div>Не сохранять пароль</div>
          </div>
          <div className="password-reset-link"> Забыли пароль? </div>
        </div>
      )}
      <br />
      {formType === 'login' ? (
        <Button onClick={(e) => send(e)} circle>
          Войти
        </Button>
      ) : (
        <Button style={{ width: '65%' }} circle>
          Создать аккаунт
        </Button>
      )}

      <div className="social-links-title">
        {formType === 'login' ? 'Войти через:' : 'Регистрация через:'}
      </div>
      <div className="social-links">
        <div>
          <FaGoogle className="google-link" />
        </div>
        <div>
          <FaVk className="vk-link" />
        </div>
      </div>
      <div className="signup-link-section">
        {formType === 'login' ? 'Нет аккаунта ? ' : 'Уже есть аккаунт ? '}
        <span onClick={() => changeFormType()}>
          {formType === 'login' ? 'Регистрация' : 'Авторизация'}
        </span>
      </div>
    </form>
  )
}

export default AuthForm
