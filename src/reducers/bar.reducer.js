import { CLOSE, OPEN } from '../actions/type'
export default (state = false, action) => {
  switch (action.type) {
    case OPEN: return true;
    case CLOSE: return false;
    default: return state
  }
}