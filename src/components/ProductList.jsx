import React from 'react'
import Product from './Product'

const ProductList = ({ openProductInfo }) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7]
  const showProductInfo = (item) => openProductInfo(item)

  return (
    <div className="products">
      <div className="products--heading">Все товары</div>
      <div className="products--content">
        {arr.map((item, index) => (
          <Product openInfo={showProductInfo} key={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
