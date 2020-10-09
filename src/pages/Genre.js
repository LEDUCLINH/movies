import React, { useEffect } from 'react'
import Container from '../components/Container'
import './Genre.scss'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchGenre } from '../actions'
import { useParams } from 'react-router-dom'
import ListFilm from '../components/ListFilm'

const Genre = () => {
  const dispatch = useDispatch()
  const genre = useSelector(state => state.genre)
  const param = useParams()
  useEffect(() => {
    dispatch(asyncFetchGenre(param.id))
  }, [dispatch, param.id])
  return (
    <div className="genre">
      <Container>
        <div className="genre__main">
          <ListFilm movies={genre} />
        </div>
      </Container>
    </div>
  )
}

export default Genre