const { PlayoffSkaterStatsApi } = require('./api');

const { STATS_PLAYOFF_SKATER_GET_SUCCESS, STATS_PLAYOFF_SKATER_GET_ERROR, STATS_PLAYOFF_GOALIE_GET_SUCCESS, STATS_PLAYOFF_GOALIE_GET_ERROR } = require('./constants');

export function getPlayoffSkaterStats(dispatch, { token }) {
    PlayoffSkaterStatsApi.getPlayoffSkaterStats({ token })
        .then(res => dispatch({ type: STATS_PLAYOFF_SKATER_GET_SUCCESS, data: res.data }))
        .catch(err => dispatch({ type: STATS_PLAYOFF_SKATER_GET_ERROR, data: 'Error retrieving playoff skater stats.' }))
}

export function getPlayoffGoalieStats(dispatch, { token }) {
    PlayoffSkaterStatsApi.getPlayoffGoalieStats({ token })
        .then(res => dispatch({ type: STATS_PLAYOFF_GOALIE_GET_SUCCESS, data: res.data }))
        .catch(err => dispatch({ type: STATS_PLAYOFF_GOALIE_GET_ERROR, data: 'Error retrieving playoff goalie stats.' }))
}