// src/reducers/batches.js

import {
  FETCHED_BATCHES,
  CREATE_BATCH
} from '../actions/batches'

import { USER_SIGNED_OUT } from '../actions/user/sign-out'

export default (state = [], {type, payload} = {}) => {
  switch(type) {
    case FETCHED_BATCHES :
      return [ ...payload ]

    case CREATE_BATCH :
      return [{ ...payload }].concat(state)

    case USER_SIGNED_OUT:
      return []
    default :
      return state
  }
}
