import { LOADERROR, LOADING, LOADSUCCESS, RESETLOAD} from '../actions/type'
export default (state =  true, action) => {
  switch (action.type) {
    case LOADING: return true;
    case LOADSUCCESS: return false;
    case LOADERROR: return false;
    case RESETLOAD: return true
    default: return state
  }
}