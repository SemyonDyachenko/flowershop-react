import React from 'react'
import { FaGoogle, FaVk } from 'react-icons/fa'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import './_authForm.scss'

const SignupForm = ({ openLogin }) => {
  return (
    <form className="auth">
      <h2>Регистрация</h2>
      <Input type="email" maxLength={255} autoComplete="email" placeholder={'E-mail'} />
      <Input type="password" maxLength={255} autoComplete="password" placeholder={'Пароль'} />
      <Input
        type="password"
        maxLength={255}
        autoComplete="password"
        placeholder={'Повторите пароль'}
      />

      <br />

      <Button style={{ width: '60%' }} circle>
        Создать аккаунт
      </Button>

      <div className="social-links-title">Регистрация через:</div>
      <div className="social-links">
        <div>
          <FaGoogle className="google-link" />
        </div>
        <div>
          <FaVk className="vk-link" />
        </div>
      </div>
      <div className="signup-link-section">
        Уже есть аккакнт ? <span onClick={openLogin}>Войти</span>
      </div>
    </form>
  )
}

export default SignupForm
