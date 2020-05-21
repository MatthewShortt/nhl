const uikit = require('uikit');
const { persistentReducer } = require('#state/persistentReducer');

const { STATS_PLAYOFF_SKATER_GET_SUCCESS, STATS_PLAYOFF_SKATER_GET_ERROR, STATS_PLAYOFF_GOALIE_GET_SUCCESS, STATS_PLAYOFF_GOALIE_GET_ERROR } = require('./constants');

const PLAYOFF_STATS_KEY = 'playoffStats';

const playoffStatsInitialState = {
    skater: [],
    goalie: [],
    error: null
}

function statsPlayoffPlayerReducer(state = playoffStatsInitialState, action) {
    switch (action.type) {
        case STATS_PLAYOFF_SKATER_GET_SUCCESS:
            return { ...state, skater: action.data, error: null }
        case STATS_PLAYOFF_GOALIE_GET_SUCCESS:
            return { ...state, goalie: action.data, error: null }
        case STATS_PLAYOFF_SKATER_GET_ERROR:
        case STATS_PLAYOFF_GOALIE_GET_ERROR:
            uikit.notification({message: action.data, pos: 'top-right', status: 'danger', timeout: 1500});
            return { ...state, error: true }
        default:
            return state;
    }
}

module.exports = {
    [PLAYOFF_STATS_KEY]: [persistentReducer(statsPlayoffPlayerReducer, PLAYOFF_STATS_KEY), playoffStatsInitialState]
}