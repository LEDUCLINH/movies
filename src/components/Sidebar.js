import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as fetch from '../actions/index'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import './Sidebar.scss'
const SideBar = () => {
  const genres = useSelector(state => state.genRes)
  const [active, setActive] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetch.asyncFetchGenres())
  }, [dispatch])

  const activeLink = (id) => {
    setActive(id)
  }
  
  return (
    <div className="sidebar">
      <div className="logo__page">
        <Link to="/">
          <img src={Logo} alt="img_logo" />
        </Link>
      </div>
      <div className="sidebar__genres">
        {genres.map(genre => (
          <Link to={`/genres/${genre.id}`} className={`sidebar__genre ${active === genre.id && 'active'}`} key={genre.id} onClick={() => activeLink(genre.id)}>
              <span>{genre.name}</span>
              <span className="arrow"><i className="fa fa-hand-o-left" aria-hidden="true"></i></span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar