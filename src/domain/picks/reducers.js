const uikit = require('uikit');
const { persistentReducer } = require('#state/persistentReducer');
const { PICKS_GET_SUCCESS, PICKS_GET_ERROR, PICKS_UPDATE_SUCCESS, PICKS_UPDATE_ERROR, PICK_ADD, PICK_REMOVE, PICK_FILTERS_UPDATE, FORWARD, ACTIVE_FILTER, TEAMS, EAST } = require('./constants');

/*
 * State for the users picks
 */
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
            return action.data ? { players: action.data, error: null } : { ...picksInitialStats };
        case PICKS_UPDATE_SUCCESS:
            uikit.notification({message: 'Picks Updated.', pos: 'top-right', status: 'success', timeout: 1500});
            return state;
        case PICKS_GET_ERROR:
        case PICKS_UPDATE_ERROR:
            uikit.notification({message: action.data, pos: 'top-right', status: 'danger', timeout: 1500});
            return { ...state, error: action.data};
        case PICK_ADD:
            return { players: { ...state.players, [action.data.position]: { ...action.data.attributes } }, error: null };
        case PICK_REMOVE:
            return { players: { ...state.players, [action.data.position]: pickType }, error: null };
        default:
            return state;
    }
}

/*
 * State for the filters applied to visible pick options (eg. East Forward or West Defence)
 */

const PICK_FILTERS_KEY = 'pickFilters';

const pickFiltersInitialState = {
    position: FORWARD,
    teams: TEAMS[EAST],
    active: ACTIVE_FILTER[`${TEAMS[EAST]}_${FORWARD}`]
};

function pickFiltersReducer(state = pickFiltersInitialState, action) {
    switch (action.type) {
        case PICK_FILTERS_UPDATE:
            return { ...action.data }
        default:
            return state;
    }
}

module.exports = {
    [PICKS_KEY]: [persistentReducer(picksReducer, PICKS_KEY), picksInitialStats],
    [PICK_FILTERS_KEY]: [persistentReducer(pickFiltersReducer, PICK_FILTERS_KEY), pickFiltersInitialState]
};