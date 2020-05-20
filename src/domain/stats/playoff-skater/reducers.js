const uikit = require('uikit');
const { persistentReducer } = require('#state/persistentReducer');

const { STATS_PLAYOFF_SKATER_GET_SUCCESS, STATS_PLAYOFF_SKATER_GET_ERROR } = require('./constants');

const STATS_PLAYOFF_PLAYER_KEY = 'statsPlayoffPlayer';

const statsPlayoffPlayerInitialState = {
    stats: [],
    error: null
}

function statsPlayoffPlayerReducer(state = statsPlayoffPlayerInitialState, action) {
    switch (action.type) {
        case STATS_PLAYOFF_SKATER_GET_SUCCESS:
            return { stats: action.data, error: null }
        case STATS_PLAYOFF_SKATER_GET_ERROR:
            uikit.notification({message: action.data, pos: 'top-right', status: 'danger', timeout: 1500});
            return { stats: [], error: true }
        default:
            return state;
    }
}

module.exports = {
    [STATS_PLAYOFF_PLAYER_KEY]: [persistentReducer(statsPlayoffPlayerReducer, STATS_PLAYOFF_PLAYER_KEY), statsPlayoffPlayerInitialState]
}