import React, { useState } from 'react'
import startImage from '../assets/images/startpage1.jpg'
import Button from '../components/ui/Button/Button'
import classNames from 'classnames'

const StartPage = () => {
  const [hidden, setHidden] = useState(false)

  function hide() {
    setHidden(true)
    localStorage.setItem('startpage', false)
  }

  return (
    <div
      className={classNames('startpage-container', {
        'startpage-container--hidden': hidden,
      })}>
      <div className="image">
        <img src={startImage} alt="startpage.jpg" />
      </div>
      <div>
        <div className="content">
          <div className="topbar">
            <Button className="mr--15" outline>
              Регистрация
            </Button>
            <Button>Войти</Button>
          </div>
          <div className="info">
            <div className="heading">Abinsk Lemon Plants Shop</div>
            <div className="under-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </div>
          </div>
          <div className="shop-button">
            <Button onClick={() => hide()}>Смотреть товары</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage
