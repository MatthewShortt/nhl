const uikit                                          = require('uikit');
const { persistentReducer }                          = require('#state/persistentReducer');
const { STANDINGS_GET_SUCCESS, STANDINGS_GET_ERROR } = require('./constants');

const STANDINGS_KEY = 'standings';

const standingsInitialState = {
    data: [],
    error: null
};

function standingsReducer(state = standingsInitialState, action) {
    switch (action.type) {
        case STANDINGS_GET_SUCCESS:
            return { data: action.data, error: null }
        case STANDINGS_GET_ERROR:
            uikit.notification({message: action.data, pos: 'top-right', status: 'danger', timeout: 1500});
            return { ...state, error: action.data};
        default:
            return state;
    }
}

export default {
    [STANDINGS_KEY]: [persistentReducer(standingsReducer, STANDINGS_KEY), standingsInitialState]
}

