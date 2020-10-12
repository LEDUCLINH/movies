import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { open } from '../actions'
import './Header.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [openSearch, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [toTop, setToTop] = useState(false)
  const searchRef = useRef()
  const handleOpen = () => {
    dispatch(open())
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && searchRef.current.contains(e.target)) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchRef])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!name) return false
    history.push(`/search/${name}`)
    setOpen(false)
    setName("")
  }

  const wordSearch = (e) => {
    setName(e.target.value)
  }

  const goTo = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 200) {
        setToTop(true)
      } else {
        setToTop(false)
      }
    }
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [toTop])


  return (
    <>
      <div className="header">
        <span className="header__bars" onClick={handleOpen}>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </span>
        <div className="header__search">
          <form ref={searchRef} className={`${openSearch ? "open" : ""}`} onSubmit={handleSearch}>
            <button type="submit" className={`${openSearch ? "open" : ""}`}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <input placeholder="Search for a movie" value={name} onChange={wordSearch} />
          </form>
        </div>
      </div>
      <div className={`gotoTop ${toTop ? "visible": ""}`} onClick={goTo}>
        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
      </div>
    </>
  )
}

export default Header