import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchPerson } from '../actions'
import { useHistory, useParams } from 'react-router-dom'
import Container from '../components/Container'
import './Person.scss'
import Skeleton from 'react-loading-skeleton'
import Button from '../components/Button'

const Person = () => {
  const dispatch = useDispatch()
  const param = useParams()
  const person = useSelector(state => state.person)
  const load = useSelector(state => state.load)
  const history = useHistory()
  useEffect(() => {
    dispatch(asyncFetchPerson(param.id))
  }, [dispatch, param.id])

  useEffect(() => {
    document.title = load ? person.name : "Movies - Library"
    window.scroll({
      top: 0,
      left: 0
    })
  }, [person])

  return (
    <div className="person">
      <Container>
        <div className="person__main">
          <div className="person__img">
            {!load ? (person.profile_path ?
            <img src={process.env.REACT_APP_LINKIMG + person.profile_path} alt="img_person" />
            :
            <img src="https://movies.fidalgo.dev/static/media/person.fdbc4613.svg" alt="img__person" />)
            :
            <Skeleton height={500} width={`80%`} />
            }
          </div>
          <div className="person__info">
            <h1 className="person__name">
              {!load ? person.name : <Skeleton width={`100%`} height={15} />}
            </h1>
            <p className="person__birthday">
              {!load ? person.birthday : <Skeleton width={200} height={5} />}
            </p>
            <div className="person__body">
              <h3 className="person__body--title">
                {!load ? "The biography" : <Skeleton width={200} height={10} />}
              </h3>
              <p className="person__biography">
                {!load ? (person.biography || 'The is no biography avaible..') : <Skeleton width={`100%`} height={10} count={10} style={{ display: 'flex', flexDirection: "column"}} />}
              </p>
            </div>
            <div className="person__action">
              {!load ? <Button icon="fa fa-imdb" title="IMDB" onClick={() => window.open(`https://www.imdb.com/name/${person.imdb_id}`)} /> : <Skeleton height={30} width={100} /> }
              {!load ? <Button icon="fa fa-long-arrow-left" title="Back" onClick={() => history.goBack()} /> : <Skeleton height={30} width={100} /> }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Person