import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchMOvie, asyncFetchCast } from '../actions'
import { useParams } from 'react-router-dom'
import Rating from 'react-rating'
import Container from '../components/Container'
import './Movie.scss'
import Fontawesome from 'react-fontawesome'
import ModalVideo from 'react-modal-video'
import Slick from '../components/Slick'
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import Recommend from '../components/Recommended'

const Movie = () => {
  const dispatch = useDispatch()
  const param = useParams()
  const movie = useSelector(state => state.movie)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    dispatch(asyncFetchMOvie(param.id))
    const time = setTimeout(() => {
      dispatch(asyncFetchCast(param.id))
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }, 500)
    return () => clearTimeout(time)
  }, [dispatch, param.id])

  const viewTrailer = () => setOpen(true)

  return (
    <div className="movie">
      <Container>
        <div className="movie__main">
          <div className="movie__poster">
            <img src={`${process.env.REACT_APP_LINKIMGW500}` + movie.poster_path} alt="img" />
          </div>
          <div className="movie__content">
            <h1 className="movie__title">{movie.original_title}</h1>
            <h3 className="movie__tagline">{movie.tagline}</h3>
            <div className="movie__index">
              <Rating
                initialRating={Math.round(movie.vote_average)}
                readonly
                stop={10}
                step={2}
                className="movie__rating"
                emptySymbol={<Fontawesome name="empty" className="fa fa-star-o" />}
                fullSymbol={<Fontawesome name="full" className="fa fa-star" />}
              />
              <div className="movie__time">
                {movie?.spoken_languages?.map((lg, index) => (
                  <span key={index}>{lg.name}</span>
                ))}
                <span>{' / ' + movie.runtime} MIN</span>
                <span>{' / ' + movie?.release_date?.split("-")[0]}</span>
              </div>
            </div>
            <div className="movie__genres">
              <h3 className="movie__genres--title item__title">The genres</h3>
              {movie?.genres?.map(genre => (
                <span className="movie__genre" key={genre.id}>{genre.name}</span>
              ))}
            </div>
            <div className="movie__synopsis">
              <h3 className="movie_synopsis--title item__title">The synopsis</h3>
              <p className="movie__synopsis--overview">{movie.overview}</p>
            </div>
            <div className="movie__casts">
              <h3 className="item__title movie__casts--title">The cast</h3>
              <Slick />
            </div>
            <div className="movie__action">
              <Button icon="fa fa-link" title="Website" />
              <Button icon="fa fa-imdb" title="IMDB" />
              <Button icon="fa fa-play" title="Trailer" onClick={viewTrailer} />
            </div>
            <ModalVideo
              channel="youtube"
              videoId={movie?.videos?.results[0]?.key}
              isOpen={open}
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
        <Recommend id={param.id} />
      </Container>
    </div>
  )
}

const Button = (props) => {
  return (
    <button 
      className="movie__link"
      onClick={props.onClick}
    >
      {props.title}
      <i className={props.icon} aria-hidden="true"></i>
    </button>
  )
}

export default Movie