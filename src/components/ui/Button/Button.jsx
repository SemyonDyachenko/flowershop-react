import React from 'react'
import classesNames from 'classnames'
import './_button.scss'

const Button = ({ black, outline, circle, ...props }) => {
  return (
    <button
      {...props}
      className={classesNames('button', props.className, {
        'button--circle': circle,
        'button--outline': outline,
        'button--black': black,
      })}>
      {props.children}
    </button>
  )
}

export default Button
