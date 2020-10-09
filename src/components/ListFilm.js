import React from 'react'
import './ListFilm.scss'
import { Link } from 'react-router-dom'
import NothingIMG from '../assets/nothing.4c58037b.svg'

const ListFilm = ({ movies }) => {
  return (
    <div className="list__movie">
      {movies.map((movie, index) => (
        <Link key={index} to={`/movie/${movie.id}`}>
          {
            movie.poster_path ? 
            <img src={`${process.env.REACT_APP_LINKIMG}` + movie.poster_path} alt="img" />
            :
            <img src={NothingIMG} alt="nothing__img" />
          }
        </Link>
      ))}
    </div>
  )
}

export default ListFilm