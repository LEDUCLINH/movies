import { combineReducers } from 'redux'
import genResReducer from './genres.reducer'
import discoverReducer from './discver.reducer'
import movieReducer from './movie.reducer'
import recommendReducer from './recommend.reducer'
import personReducer from './person.reducer'
import genreReducer from './genre.reducer'

export default combineReducers({
    genRes: genResReducer,
    discover: discoverReducer,
    movie: movieReducer,
    recommend: recommendReducer,
    person: personReducer,
    genre: genreReducer
})