import React, { useState } from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import Categories from '../components/Categories/Categories'
import Filter from '../components/Filter/Filter'
import Header from '../components/Header/Header'
import Modal from '../components/popup/Modal'
import ProductList from '../components/ProductList'
import Button from '../components/ui/Button/Button'
import Input from '../components/ui/Input/Input'

const MainPage = () => {
  const [authFormActive, setAuthFormActive] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
      }}>
      <Header openAuthForm={() => setAuthFormActive(true)} />
      <div className="topbar">
        <Categories
          categiores={[
            { name: 'Лимоны', category: 'lemon' },
            { name: 'Кактусы', category: 'lemon' },
            { name: 'Гранаты', category: 'lemon' },
          ]}
        />
        <Filter
          items={[
            { name: 'Популярности', type: 'popular' },
            { name: 'Цене', type: 'price' },
            { name: 'Алфавиту', type: 'alphabet' },
          ]}
        />
      </div>

      <Modal width={450} active={authFormActive} setActive={setAuthFormActive}>
        <AuthForm defaultformType={'login'} />
      </Modal>
      <ProductList />
    </div>
  )
}

export default MainPage
