import React, { useEffect, useState, useCallback } from 'react'
import './Discover.scss'
import { useSelector, useDispatch } from 'react-redux'
import { asyncFetchDiscover, Active } from '../actions'
import ListFilm from '../components/ListFilm'

const Discover = () => {
  const [data, setData] = useState([])
  const discover = useSelector(state => state.discover)
  const load = useSelector(state => state.load)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  useEffect(() => {
    document.title = `Discover - Movies`
  }, [])

  useEffect(() => {
    dispatch(asyncFetchDiscover(page))
  }, [page, dispatch])

  useEffect(() => {
    setData(data => [...data, ...discover])
  }, [discover])

  const pageLoad = useCallback(() => {
    const check = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
    if (!!check) {
      setPage(page + 1)
    }
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', pageLoad)
    return () => window.removeEventListener('scroll', pageLoad)
  }, [page, pageLoad])

  useEffect(() => {
    dispatch(Active(false))
  }, [dispatch])
  return (
    <div className="discover" onScroll={() => console.log('scroll')}>
      <h2 className="discover__title">POPULAR</h2>
      <p className="discover__subtitle">MOVIES</p>
      <ListFilm movies={data} load={load} />
    </div>
  )
}

export default Discover