import ApiClient from '../../api/client'
export const CREATE_EVALUATION = 'CREATE_EVALUATION'

const api = new ApiClient()

export default (newEvaluation) => {
  return dispatch => {
  api
			.post("evaluations", newEvaluation)
      .then((res) => {
        dispatch({
					type: CREATE_EVALUATION,
					payload: res.body
				});
      })
      .catch(error => {
        console.log(error)
      })
  }
}
