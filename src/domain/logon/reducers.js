const { persistentReducer } = require('../../util/persistentReducer');
const { FLIP_RESET, FLIP_TO_LOGON, FLIP_TO_SIGNUP, FLIP_TO_RESET_PASSWORD, logon, signup, resetPassword } = require('./constants');

const LOGON_KEY = 'logon';
const logonInitialState = logon;

function logonReducer(state = logonInitialState, action) {
    switch (action.type) {
        case FLIP_TO_SIGNUP:
            return signup;
        case FLIP_TO_LOGON:
            return logon;
        case FLIP_TO_RESET_PASSWORD:
            return resetPassword;
        case FLIP_RESET:
            return logonInitialState;
        default:
            return state;
    }
}

module.exports = {
    [LOGON_KEY]: [persistentReducer(logonReducer, LOGON_KEY), logonInitialState]
};