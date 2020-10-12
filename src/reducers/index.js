import { combineReducers } from 'redux'
import genResReducer from './genres.reducer'
import discoverReducer from './discver.reducer'
import movieReducer from './movie.reducer'
import recommendReducer from './recommend.reducer'
import personReducer from './person.reducer'
import genreReducer from './genre.reducer'
import activeReducer from './active.reducer'
import loadReducer from './load.reducer'
import barReducer from './bar.reducer'
import searchReducer from './search.reducer'

export default combineReducers({
    genRes: genResReducer,
    discover: discoverReducer,
    movie: movieReducer,
    recommend: recommendReducer,
    person: personReducer,
    genre: genreReducer,
    active: activeReducer,
    load: loadReducer,
    bar: barReducer,
    search: searchReducer
})