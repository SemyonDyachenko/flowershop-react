import React from 'react'
import Button from './ui/Button/Button'
import testImg from '../assets/images/image 2.png'

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product--image">
        <img src={testImg} alt="product1.jpg" />
      </div>
      <div className="product--content">
        <div className="heading">
          <div>Cactus обыкновенный</div>
          <div>Какой то текст вроде описания для теста</div>
        </div>

        <div className="section">
          <div className="price">от 1055 ₽</div>
          <div className="add-button">
            <Button outline circle>
              Добавить
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
