const uikit = require('uikit');
const { persistentReducer } = require('#state/persistentReducer');
const { USER_LOGOUT } = require('../users/constants');
const { PICKS_GET_SUCCESS, PICKS_GET_ERROR, PICKS_UPDATE_SUCCESS, PICKS_UPDATE_ERROR, PICK_ADD, PICK_REMOVE, PICK_FILTERS_UPDATE, PICK_SWAP_UPDATE, PICK_SWAP_RESTORE, PICK_SWAP_OUT_PLAYER_ADD, PICK_SWAP_OUT_PLAYER_REMOVE, FORWARD, ACTIVE_FILTER, TEAMS, EAST } = require('./constants');

/*
 * State for the users picks
 */
const PICKS_KEY = 'picks';

const pickType = {
    id: null,
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
        wg: pickType,
        nf1: pickType,
        nf2: pickType,
        nf3: pickType,
        nd1: pickType,
        nd2: pickType,
        ng: pickType,
        cf1: pickType,
        cf2: pickType,
        cf3: pickType,
        cd1: pickType,
        cd2: pickType,
        cg: pickType
    },
    error: null
};

/**
 * Cleans data by replacing null id with pickType initial state
 */
const cleanData = (data) => {
    return Object.entries(data)
        .reduce((obj, [key, value]) => ({
            ...obj,
            [key]: value.id ? value : pickType,
        }), {});
}

function picksReducer(state = picksInitialStats, action) {
    switch (action.type) {
        case PICKS_GET_SUCCESS:
            return action.data ? { players: cleanData(action.data), error: null } : { ...picksInitialStats };
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
        case USER_LOGOUT:
            return picksInitialStats;
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
            return { ...action.data };
        case USER_LOGOUT:
            return pickFiltersInitialState;
        default:
            return state;
    }
}

/*
 * State for the player swap modal
 */

const PICK_SWAP_KEY = 'pickSwap';

const swapPickType = {
    ...pickType,
    position: ''
}

const pickSwapInitialState = {
    swapIn: swapPickType,
    swapOut: swapPickType,
    swapOutOptions: []
}

function pickSwapReducer(state = pickSwapInitialState, action) {
    switch (action.type) {
        case PICK_SWAP_UPDATE:
            return { ...state, ...action.data };
        case PICK_SWAP_OUT_PLAYER_ADD:
            return { ...state, ...action.data };
        case PICK_SWAP_OUT_PLAYER_REMOVE:
            return { ...state, swapOut: swapPickType };
        case PICK_SWAP_RESTORE:
        case USER_LOGOUT:
            return pickSwapInitialState;
        default:
            return state;
    }
}


export default {
    [PICKS_KEY]: [persistentReducer(picksReducer, PICKS_KEY), picksInitialStats],
    [PICK_FILTERS_KEY]: [persistentReducer(pickFiltersReducer, PICK_FILTERS_KEY), pickFiltersInitialState],
    [PICK_SWAP_KEY]: [persistentReducer(pickSwapReducer, PICK_SWAP_KEY), pickSwapInitialState]
};