import React from 'react'
import './ListFilm.scss'
import { Link } from 'react-router-dom'

const ListFilm = ({movies}) => {
  return (
    <div className="list__movie">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
              <img src={`${process.env.REACT_APP_LINKIMG}` + movie.poster_path} alt="img" />
        </Link>
      ))}
    </div>
  )
}

export default ListFilm