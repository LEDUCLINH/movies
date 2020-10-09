import { FETCH_PERSON } from "../actions/type";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PERSON: return action.payload   
        default: return state
    }
}