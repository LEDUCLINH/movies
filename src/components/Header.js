import React from 'react'
import { useDispatch } from 'react-redux'
import { open } from '../actions'
import './Header.scss'

const Header = () => {
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(open())
  }

  return (
    <div className="header">
      <span className="header__bars" onClick={handleOpen}>
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
      </span>
    </div>
  )
}

export default Header