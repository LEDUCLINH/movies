import { FETCH_MOVIE, FETCH_CAST } from "../actions/type";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
        return action.payload;
        case FETCH_CAST: 
        state.cast = action.payload.cast;
        return state   
        default: return state
    }
}