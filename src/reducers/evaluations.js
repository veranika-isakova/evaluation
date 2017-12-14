import {
  CREATE_EVALUATION
} from '../actions/students'

export default (state = [], {type, payload} = {}) => {
  switch(type) {

    case CREATE_EVALUATION :
      return [{ ...payload }].concat(state)
    default :
      return state
  }
}
