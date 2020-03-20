const _ = require('lodash');
const { UserApi } = require('./api');

const { USER_LOGON_SUCCESS, USER_LOGON_ERROR, USER_LOGON_ERRORS } = require('./constants');
export function logon(dispatch, { emailOrUsername, password }) {
    UserApi.logon({ emailOrUsername, password })
        .then(res => dispatch({ type: USER_LOGON_SUCCESS, data: res.data }))
        .catch(error => dispatch(getUserLogonError(error)));
}

function getUserLogonError(error) {
    return USER_LOGON_ERRORS[_.get(error, 'response.data.message') || USER_LOGON_ERROR];
}


const { USER_CREATE_SUCCESS, USER_CREATE_ERROR } = require('./constants');
export function create(dispatch, { email, username, password }) {
    UserApi.create({ email, username, password })
        .then(res => dispatch({ type: USER_CREATE_SUCCESS, data: res.data }))
        .catch(e => dispatch({ type: USER_CREATE_ERROR, data: e }));
}

const { USER_PASSWORD_RESET_REQUEST_SUCCESS, USER_PASSWORD_RESET_REQUEST_ERROR } = require('./constants');
export function resetPasswordRequest(dispatch, { email }) {
    UserApi.resetPasswordRequest({ email })
        .then(res => dispatch({ type: USER_PASSWORD_RESET_REQUEST_SUCCESS, data: res.data }))
        .catch(e => dispatch({ type: USER_PASSWORD_RESET_REQUEST_ERROR, data: e }));
}