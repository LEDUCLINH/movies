import { FETCH_GENRE } from '../actions/type'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GENRE: return action.payload;
    default: return []
  }
}