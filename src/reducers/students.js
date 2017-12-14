import {
  FETCHED_STUDENTS,
  CREATE_STUDENT
} from '../actions/students'

export default (state = [], {type, payload} = {}) => {
  switch(type) {
    case FETCHED_STUDENTS :
      return [ ...payload ]
    case CREATE_STUDENT :
      return [{ ...payload }].concat(state)
    default :
      return state
  }
}
