import ApiClient from '../../api/client'
export const CREATE_BATCH = 'CREATE_BATCH'

const api = new ApiClient()

export default (newBatch) => {
  return dispatch => {
  api
			.post("batches", newBatch) // newBatch - request body
      .then((res) => {
        dispatch({
					type: CREATE_BATCH,
					payload: res.body
				});
      })
      .catch(error => {
        console.log(error)
      })
  }
}
