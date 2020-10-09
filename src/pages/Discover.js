import React, { useEffect } from 'react'
import './Discover.scss'
import { useSelector, useDispatch } from 'react-redux'
import {asyncFetchDiscover} from '../actions'
import ListFilm from '../components/ListFilm'

const Discover = () => {
  const discover = useSelector(state => state.discover)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncFetchDiscover())
  }, [dispatch])
  console.log(discover)
  return (
    <div className="discover">
      <h2 className="discover__title">POPULAR</h2>
      <p className="discover__subtitle">MOVIES</p>
      <ListFilm movies={discover} />
    </div>
  )
}

export default Discover