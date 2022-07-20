import React from 'react'
import './_input.scss'

const Input = ({ onChange, ...props }) => {
  return (
    <div className="text-field">
      <input {...props} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default Input
