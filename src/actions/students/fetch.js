import ApiClient from '../../api/client'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'

const api = new ApiClient()

export default () => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.get('students')
      .then(res => dispatch({ type: FETCHED_STUDENTS, payload: res.body }))
      .catch(err => console.log(err))

    // dispatch(loading(false)) // ???
  }
}
