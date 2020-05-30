const _ = require('lodash');
const { UserApi } = require('./api');
const {
    USER_LOGON_SUCCESS, USER_LOGON_ERROR, USER_LOGON_ERRORS,
    USER_CREATE_SUCCESS, USER_CREATE_ERROR, USER_CREATE_ERRORS,
    USER_PASSWORD_RESET_REQUEST_SUCCESS, USER_PASSWORD_RESET_REQUEST_ERROR, USER_PASSWORD_RESET_REQUEST_ERRORS,
    USER_LOGOUT
} = require('./constants');

export function logon(dispatch, { emailOrUsername, password }) {
    UserApi.logon({ emailOrUsername, password })
        .then(res => dispatch({type: USER_LOGON_SUCCESS, data: res.data}))
        .catch(error => dispatch(getErrorPayload(USER_LOGON_ERRORS, USER_LOGON_ERROR, error)));
}

export function create(dispatch, { email, username, password }) {
    UserApi.create({ email, username, password })
        .then(res => dispatch({ type: USER_CREATE_SUCCESS, data: res.data }))
        .catch(error => dispatch(getErrorPayload(USER_CREATE_ERRORS, USER_CREATE_ERROR, error)));
}

export function resetPasswordRequest(dispatch, { email }) {
    UserApi.resetPasswordRequest({ email })
        .then(res => dispatch({ type: USER_PASSWORD_RESET_REQUEST_SUCCESS, data: res.data }))
        .catch(error => dispatch(getErrorPayload(USER_PASSWORD_RESET_REQUEST_ERRORS, USER_PASSWORD_RESET_REQUEST_ERROR, error)));
}

export function logout(dispatch) {
    return dispatch({type: USER_LOGOUT});
}

function getErrorPayload(errorGroup, errorDefault, error) {
    return errorGroup[_.get(error, 'response.data.message') || errorDefault];
}