const { persistentReducer } = require('#state/persistentReducer');
const { USER_LOGON_SUCCESS, EMAIL_OR_USERNAME_DOES_NOT_EXIST, INCORRECT_PASSWORD, USER_CREATE_SUCCESS, EMAIL_ALREADY_EXISTS, USERNAME_ALREADY_EXISTS, USER_LOGOUT} = require('./constants');
const uikit = require('uikit');

const USER_KEY = 'user';

const userInitialState = {
    token: '',
    username: '',
    error: null
};

function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case USER_LOGON_SUCCESS:
        case USER_CREATE_SUCCESS:
            return { token: action.data.token, username: action.data.username, error: null };
        case USER_LOGOUT:
            return userInitialState;
        case EMAIL_OR_USERNAME_DOES_NOT_EXIST:
        case INCORRECT_PASSWORD:
        case EMAIL_ALREADY_EXISTS:
        case USERNAME_ALREADY_EXISTS:
            uikit.notification({message: action.data, pos: 'top-right', status: 'danger', timeout: 1500});
            return { ...state, error: action.data};
        default:
            return state;
    }
}

export default {
    [USER_KEY]: [persistentReducer(userReducer, USER_KEY), userInitialState]
};