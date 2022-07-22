import classNames from 'classnames'
import React, { useState } from 'react'
import Modal from '../components/popup/Modal'
import Categories from '../components/Categories/Categories'
import Filter from '../components/Filter/Filter'
import ProductList from '../components/ProductList'
import ProductInfo from '../components/ProductInfo/ProductInfo'
const filterData = require('../assets/data/filterData.json')

const MainPage = () => {
  const [productInfoVisible, setProductInfoVisible] = useState(false)
  const [productInfo, setProductInfo] = useState({})

  const openProductInfo = (product) => {
    setProductInfoVisible(true)
    setProductInfo(product)
  }
  return (
    <div className="main">
      <div className="topbar">
        <Categories categiores={filterData.categories} />
        <Filter items={filterData.sort} />
      </div>
      <Modal active={productInfoVisible} setActive={setProductInfoVisible}>
        <ProductInfo product={productInfo} />
      </Modal>
      <ProductList openProductInfo={openProductInfo} />
    </div>
  )
}

export default MainPage
