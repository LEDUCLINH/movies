import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Slick = () => {
  const casts = useSelector(state => state.movie?.cast) || []
  const setting = {
    // infinite: true,
    speed: 500,
    slidesToShow: Math.min(8, casts.length),
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: Math.min(6, casts.length)
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(5, casts.length),
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(5, casts.length),
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: Math.min(4, casts.length),
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: Math.min(3, casts.length),
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Slider {...setting} >
      {casts.map(cast => (
        <div key={cast.id}>
          <Link to={`/person/${cast.id}`} className="cast__slick">
            {cast.profile_path ?
            <img
              src={process.env.REACT_APP_LINKIMGSLICK + cast.profile_path}
              style={{ borderRadius: "50%", height: "80px", width: "80px"}}
              alt="img_cast"
            />
            :
            <img
              src="https://movies.fidalgo.dev/static/media/person.fdbc4613.svg"
              style={{ height: "80px", width: "80px"}}
              alt="img_cast"
            />
            }
          </Link>
        </div>
      ))}
    </Slider>
  )
}

export default Slick