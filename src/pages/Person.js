import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchPerson } from '../actions'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import './Person.scss'

const Person = () => {
  const dispatch = useDispatch()
  const param = useParams()
  const person = useSelector(state => state.person)
  console.log(person)
  useEffect(() => {
    dispatch(asyncFetchPerson(param.id))
  }, [dispatch, param.id])
  return (
    <div className="person">
      <Container>
        <div className="person__main">
          <div className="person__img">
            {person.profile_path ?
            <img src={process.env.REACT_APP_LINKIMG + person.profile_path} alt="img_person" />
            :
            <img src="https://movies.fidalgo.dev/static/media/person.fdbc4613.svg" alt="img__person" />
            }
          </div>
          <div className="person__info">
            <h1 className="person__name">{person.name}</h1>
            <p className="person__birthday">{person.birthday}</p>
            <div className="person__body">
              <h3 className="person__body--title">The biography</h3>
              <p className="person__biography">{person.biography || 'The is no biography avaible..'}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Person