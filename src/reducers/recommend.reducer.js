import { FETCH_MOVIE_RECOMMEND } from "../actions/type";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MOVIE_RECOMMEND: return action.payload
        default: return state
    }
}