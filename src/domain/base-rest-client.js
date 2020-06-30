const { USER_LOGOUT } = require('./users/constants');

export function baseRestClient(dispatch, apiCall, successAction, failureAction, failureMessage) {
    apiCall()
        .then(res => dispatch({ type: successAction, data: res.data }))
        .catch(error => {
            if (error.response.status === 401)
                dispatch({ type: USER_LOGOUT });
            else
                dispatch({ type: failureAction, data: failureMessage });
        });
}