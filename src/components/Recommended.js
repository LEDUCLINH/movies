import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchMovieRecommend } from '../actions';
import ListFilm from './ListFilm';
import './Recommend.scss'
const Recommend = ({id}) => {
  const dispatch = useDispatch()
  const recommend = useSelector(state => state.recommend)
  useEffect(() => {
    dispatch(asyncFetchMovieRecommend(id))
  }, [dispatch, id])
  return (
    <div className="movie__recommend">
      <h1 className="recommend__title">Recommend</h1>
      <h3 className="recommend__subtitle">Movies</h3>
      <ListFilm movies={recommend} />
    </div>
  )
}

export default Recommend;