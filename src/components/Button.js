import React from 'react'
import './Button.scss'

export default ({ onClick, title, icon }) => {
  return (
    <button className="btn" onClick={onClick}>
      <i className={icon} aria-hidden="true"></i>
      {title}
    </button>
  )
}  