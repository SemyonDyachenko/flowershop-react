import classNames from 'classnames'
import React from 'react'
import './_checkbox.scss'

const Checkbox = ({ active, setActive }) => {
  const toggleCheckBox = () => {
    setActive(!active)
  }

  return (
    <label>
      <input type="checkbox" onChange={toggleCheckBox} />
      <span
        className={classNames('checkbox', {
          'checkbox--active': active,
        })}
        aria-hidden="true"
      />
    </label>
  )
}

export default Checkbox
