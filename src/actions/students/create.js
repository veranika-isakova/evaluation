import ApiClient from '../../api/client'
export const CREATE_STUDENT = 'CREATE_STUDENT'

const api = new ApiClient()

export default (newStudent, batchId) => {
  return dispatch => {
  api
			.patch(`batches/${batchId}`, newStudent)
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
