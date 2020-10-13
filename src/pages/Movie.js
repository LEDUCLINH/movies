import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchMOvie, asyncFetchCast, Active } from '../actions'
import { useHistory, useParams, Link } from 'react-router-dom'
import Rating from 'react-rating'
import Container from '../components/Container'
import './Movie.scss'
import Fontawesome from 'react-fontawesome'
import ModalVideo from 'react-modal-video'
import Slick from '../components/Slick'
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import Recommend from '../components/Recommended'
import NothingIMG from '../assets/nothing.4c58037b.svg'
import Skeleton from 'react-loading-skeleton'
import ButtonBack from '../components/Button'

const Movie = () => {
  const dispatch = useDispatch()
  const param = useParams()
  const history = useHistory()
  const movie = useSelector(state => state.movie)
  const load = useSelector(state => state.load)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    dispatch(asyncFetchMOvie(param.id))
    dispatch(Active(false))
    const time = setTimeout(() => {
      dispatch(asyncFetchCast(param.id))
    }, 200)
    window.scroll({
      top: 0,
      left: 0,
    })
    return () => clearTimeout(time)
  }, [dispatch, param.id])

  useEffect(() => {
    document.title = `${!movie.original_title ? "Movie Library" : movie.original_title + "- Movie Library"}`
  }, [movie])
  const viewTrailer = () => setOpen(true)
  return (
    <div className="movie">
      <Container>
        <div className="movie__main">
          <div className="movie__poster">
            {
              !load ?
                (movie.poster_path ?
                  <img src={`${process.env.REACT_APP_LINKIMGW500}` + movie.poster_path} alt="img" />
                  :
                  <img src={NothingIMG} alt="nothing__img" style={{ height: '35rem' }} />
                ) : <Skeleton width={`80%`} height={`100%`} />
            }
          </div>
          <div className="movie__content">
            <h1 className="movie__title">
              {!load ? movie.original_title : <Skeleton width={`100%`} height={20} />}
            </h1>
            <h3 className="movie__tagline">
              {!load ? movie.tagline : <Skeleton width={`50%`} height={10} />}
            </h3>
            <div className="movie__index">
              <div>
                {
                  !load ? <Rating
                    initialRating={Math.round(movie.vote_average)}
                    readonly
                    stop={10}
                    step={2}
                    className="movie__rating"
                    emptySymbol={<Fontawesome name="empty" className="fa fa-star-o" />}
                    fullSymbol={<Fontawesome name="full" className="fa fa-star" />}
                  /> : <Skeleton width={100} height={10} />
                }
                {!load && <span className="movie__vote_average">{movie.vote_average}</span>}
              </div>
              {!load ? <div className="movie__time">
                {movie?.spoken_languages?.map((lg, index) => (
                  <span key={index}>{lg.name}</span>
                ))}
                <span>{' / ' + movie.runtime} MIN</span>
                <span>{' / ' + movie?.release_date?.split("-")[0]}</span>
              </div> : <Skeleton width={150} height={10} />}
            </div>
            <div className="movie__genres">
              <h3 className="movie__genres--title item__title">
                {!load ? "The genres" : <Skeleton width={200} height={15} />}
              </h3>
              {!load ? movie?.genres?.map(genre => (
                <Link className="movie__genre" to={`/genres/${genre.name}`}>
                  <span key={genre.id}>{genre.name}</span>
                </Link>
              )) : <Skeleton width={200} height={10} />}
            </div>
            <div className="movie__synopsis">
              <h3 className="movie_synopsis--title item__title">
                {!load ? "The synopsis" : <Skeleton width={200} height={15} />}
              </h3>
              <p className="movie__synopsis--overview">
                {!load ? movie.overview : <Skeleton width={`100%`} height={10} count={5} style={{ display: 'flex', flexDirection: 'column'}} />}
              </p>
            </div>
            <div className="movie__casts">
              <h3 className="item__title movie__casts--title">
                {!load ? "The cast" : <Skeleton width={200} height={15} />}
              </h3>
              {!load ? <Slick /> : <Skeleton width={`80%`} height={40} /> }
            </div>
            <div className="movie__action">
              {!load ? <Button icon="fa fa-link" title="Website" onClick={() => window.open(movie.homepage, "_blank")} /> : <Skeleton width={70} height={30} />}
              {!load ? <Button icon="fa fa-imdb" title="IMDB" onClick={() => window.open(`https://imdb.com/title/${movie.imdb_id}`, "_blank")} /> : <Skeleton width={70} height={30} />}
              {!load ? <Button icon="fa fa-play" title="Trailer" onClick={viewTrailer} /> : <Skeleton width={70} height={30} />}
            </div>
            {!load ? <ButtonBack onGoback={() => history.goBack()} /> : <Skeleton height={30} width={100} style={{ marginTop: "30px" }} />}
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

const Button = ({ onClick, title, icon }) => {
  return (
    <button
      className="movie__link"
      onClick={onClick}
    >
      {title}
      <i className={icon} aria-hidden="true"></i>
    </button>
  )
}

export default Movie