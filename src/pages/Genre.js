import React, { useEffect, useState, useCallback } from 'react'
import Container from '../components/Container'
import './Genre.scss'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchGenre, Active } from '../actions'
import { useParams } from 'react-router-dom'
import ListFilm from '../components/ListFilm'

const Genre = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const genre = useSelector(state => state.genre)
  const load = useSelector(state => state.load)
  const param = useParams()
  useEffect(() => {
    dispatch(asyncFetchGenre(param.id, page))
    dispatch(Active(true))
  }, [dispatch, param.id, page])

  useEffect(() => {
    setPage(1)
    setData([])
    window.scroll({
      top: 0,
      left: 0,
    })
  }, [param.id])

  useEffect(() => {
    setData(data => [...data, ...genre])
  }, [genre])

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
    document.title = "Movies - Genre"
  }, [])

  return (
    <div className="genre">
      <Container>
        <div className="genre__main">
          <ListFilm movies={data} load={load} />
        </div>
      </Container>
    </div>
  )
}

export default Genre