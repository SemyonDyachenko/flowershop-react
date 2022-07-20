import React from 'react'
import './_modal.scss'
import classNames from 'classnames'

const Modal = ({ active, setActive, children, ...props }) => {
  return (
    <div
      className={classNames('modal-app', {
        active,
      })}
      onClick={() => setActive(false)}>
      <div
        style={{ width: props.width }}
        onClick={(e) => e.stopPropagation()}
        className={classNames('modal', props.className)}>
        {children}
      </div>
    </div>
  )
}

export default Modal
