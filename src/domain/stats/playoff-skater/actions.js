const { PlayoffSkaterStatsApi } = require('./api');
const { baseRestClient }        = require('../../base-rest-client');

const { STATS_PLAYOFF_SKATER_GET_SUCCESS, STATS_PLAYOFF_SKATER_GET_ERROR, STATS_PLAYOFF_GOALIE_GET_SUCCESS, STATS_PLAYOFF_GOALIE_GET_ERROR } = require('./constants');

export function getPlayoffSkaterStats(dispatch, token) {
    baseRestClient(dispatch, PlayoffSkaterStatsApi.getPlayoffSkaterStats.bind(null, token), STATS_PLAYOFF_SKATER_GET_SUCCESS, STATS_PLAYOFF_SKATER_GET_ERROR, 'Error retrieving playoff skater stats.');
}

export function getPlayoffGoalieStats(dispatch, token) {
    baseRestClient(dispatch, PlayoffSkaterStatsApi.getPlayoffGoalieStats.bind(null, token), STATS_PLAYOFF_GOALIE_GET_SUCCESS, STATS_PLAYOFF_GOALIE_GET_ERROR, 'Error retrieving playoff goalie stats.');
}