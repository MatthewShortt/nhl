const uikit = require('uikit');
const { persistentReducer } = require('#state/persistentReducer');
// eslint-disable-next-line
const { PICKS_GET_SUCCESS, PICKS_GET_ERROR, PICKS_UPDATE_SUCCESS, PICKS_UPDATE_ERROR } = require('./constants');

const PICKS_KEY = 'picks';

const pickType = {
    id: '',
    name: '',
    team: ''
};

const picksInitialStats = {
    players: {
        ef1: pickType,
        ef2: pickType,
        ef3: pickType,
        ed1: pickType,
        ed2: pickType,
        eg: pickType,
        wf1: pickType,
        wf2: pickType,
        wf3: pickType,
        wd1: pickType,
        wd2: pickType,
        wg: pickType
    },
    error: null
};

function picksReducer(state = picksInitialStats, action) {
    switch (action.type) {
        case PICKS_GET_SUCCESS:
            console.log(action.data ? 'data' : 'nodata');
            return action.data ? { players: action.data, error: null } : { ...picksInitialStats };
        case PICKS_GET_ERROR:
            uikit.notification({message: action.data, pos: 'top-right', status: 'danger', timeout: 1500});
            return { ...state, error: action.data};
        default:
            return state;
    }
}

module.exports = {
    [PICKS_KEY]: [persistentReducer(picksReducer, PICKS_KEY), picksInitialStats]
};