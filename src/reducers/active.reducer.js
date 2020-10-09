import { ACTIVE } from '../actions/type'

export default (state = true, action) => {
  switch (action.type) {
    case ACTIVE: 
    return action.active
    default: return state
  }
}