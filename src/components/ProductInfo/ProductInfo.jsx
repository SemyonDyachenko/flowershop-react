import React from 'react'
import productImage from '../../assets/images/image 2.png'
import './_productInfo.scss'

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info">
      <div class="photos-grid">
        <img src={productImage} alt="image2.png"></img>
        <img src={productImage} alt="image2.png"></img>
        <img src={productImage} alt="image2.png"></img>
        <img src={productImage} alt="image2.png"></img>
      </div>
    </div>
  )
}

export default ProductInfo
