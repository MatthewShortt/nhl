const { StandingsApi }                               = require('./api');
const { STANDINGS_GET_SUCCESS, STANDINGS_GET_ERROR } = require('./constants');

export function getStandings(dispatch, token) {
    StandingsApi.getStandings(token)
        .then(res => dispatch({ type: STANDINGS_GET_SUCCESS, data: res.data }))
        .catch(error => dispatch({ type: STANDINGS_GET_ERROR, data: 'Error retrieving standings.' }));
}