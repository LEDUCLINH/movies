import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSearch } from '../actions'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import './Search.scss'
import ListFilm from '../components/ListFilm'

const Search = () => {
  const search = useSelector(state => state.search)
  const [data, setData] = useState([])
  const load = useSelector(state => state.load)
  const dispatch = useDispatch()
  const param = useParams()
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchSearch(param.name, page))
  }, [dispatch, page, param.name])

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
    setPage(1)
    setData([])
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [param.name])

  useEffect(() => {
    setData(data => [...data, ...search])
  }, [search])

  return (
    <div className="movie__search">
      <Container>
        <div className="search__main">
          <h1 className="search__title">
            Search for: 
            <span className="search__word">{param.name}</span>
          </h1>
          <ListFilm movies={data} load={load} />
        </div>
      </Container>
    </div>
  )
}

export default Search