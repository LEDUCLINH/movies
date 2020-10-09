import * as TYPES from '../actions/type'
export default (state = [], action) => {
    switch (action.type) {
        case TYPES.FETCH_GENRES: {
            return action.payload
        }
        default: return state
    }
}
