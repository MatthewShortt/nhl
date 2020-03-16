const { persistentReducer } = require('../../util/persistentReducer');
const { USER_LOGON_SUCCESS, EMAIL_OR_USERNAME_DOES_NOT_EXIST, INCORRECT_PASSWORD, USER_CREATE_SUCCESS } = require('./constants');

const USER_KEY = 'user';

const userInitialState = {
    token: '',
    error: null,
    data: {}
};

function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case USER_LOGON_SUCCESS:
        case USER_CREATE_SUCCESS:
            return { token: action.data.token, error: null, data: action.data.data };
        case EMAIL_OR_USERNAME_DOES_NOT_EXIST:
        case INCORRECT_PASSWORD:
            console.log(action.data);
            return {...state, error: action.data};
        default:
            return state;
    }
}

module.exports = {
    [USER_KEY]: [persistentReducer(userReducer, USER_KEY), userInitialState]
};