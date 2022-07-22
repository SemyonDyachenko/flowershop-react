import React, { useState } from 'react'
import Button from '../ui/Button/Button'
import Checkbox from '../ui/Checkbox/Checkbox'
import Input from '../ui/Input/Input'
import { FaGoogle, FaVk } from 'react-icons/fa'
import './_authForm.scss'

const LoginForm = ({ openSignup }) => {
  const [savePassword, setSavePassword] = useState(false)

  return (
    <form className="auth">
      <h2>Авторизация</h2>
      <Input type="email" maxLength={255} autoComplete="email" placeholder={'E-mail'} />
      <Input type="password" maxLength={255} autoComplete="password" placeholder={'Пароль'} />

      <div className="auth--options">
        <div className="save-password-section">
          <div>
            <Checkbox active={savePassword} setActive={setSavePassword} />
          </div>
          <div>Не сохранять пароль</div>
        </div>
        <div className="password-reset-link"> Забыли пароль? </div>
      </div>

      <br />

      <Button circle>Войти</Button>

      <div className="social-links-title">Войти через:</div>
      <div className="social-links">
        <div>
          <FaGoogle className="google-link" />
        </div>
        <div>
          <FaVk className="vk-link" />
        </div>
      </div>
      <div className="signup-link-section">
        Нет аккаунта ? <span onClick={openSignup}>Регистрация</span>
      </div>
    </form>
  )
}

export default LoginForm
