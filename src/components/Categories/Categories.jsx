import React, { useState } from 'react'
import './_categories.scss'

const Categories = ({ categiores }) => {
  const [category, setCategory] = useState(null)

  const selectCategory = (item) => {
    setCategory(item)
  }
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => selectCategory(null)}
          className={category === null ? `active` : undefined}>
          Все
        </li>
        {categiores.map((item, index) => (
          <li
            onClick={() => selectCategory(index)}
            key={index}
            className={category === index ? `active` : undefined}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
