import api from '../../interceptors';
import * as constants from '../../constants';


export function submitJudgementFailure(data) {
	return {
		type: constants.GET_EVENTS_FAILURE,
		data
	}
}

export function submitJudgement(judgementData) {
	console.log('enrollment data : ', judgementData);
	console.log('Action triggered  : ');
	return dispatch => {
		return api.post('http://localhost:8080/vzevents/addGroup', judgementData)
			.then(res => {
				console.log('events res : ', res);
			})
			.catch(errors => dispatch(submitJudgementFailure(errors)))
	}
}