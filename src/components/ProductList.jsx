import React from 'react'
import Product from './Product'

const ProductList = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="products">
      <div className="products--heading">Все товары</div>
      <div className="products--content">
        {arr.map((item, index) => (
          <Product key={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
