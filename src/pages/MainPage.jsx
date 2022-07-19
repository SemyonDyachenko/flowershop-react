import React from 'react'
import Categories from '../components/Categories/Categories'
import Header from '../components/Header/Header'

const MainPage = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Header />
      <Categories
        categiores={[
          { name: 'Лимоны', category: 'lemon' },
          { name: 'Кактусы', category: 'lemon' },
          { name: 'Гранаты', category: 'lemon' },
        ]}
      />
    </div>
  )
}

export default MainPage
