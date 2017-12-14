import ApiClient from '../../api/client'
export const CREATE_STUDENT = 'CREATE_STUDENT'

const api = new ApiClient()

export default (newStudent) => {
  return dispatch => {
  api
			.post("students", newStudent)
      .then((res) => {
        dispatch({
					type: CREATE_STUDENT,
					payload: res.body
				});
      })
      .catch(error => {
        console.log(error)
      })
  }
}
