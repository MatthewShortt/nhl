const { StandingsApi }                               = require('./api');
const { baseRestClient }                             = require('../base-rest-client');
const { STANDINGS_GET_SUCCESS, STANDINGS_GET_ERROR } = require('./constants');

export function getStandings(dispatch, token, rounds) {
    baseRestClient(dispatch, StandingsApi.getStandings.bind(null, token, rounds), STANDINGS_GET_SUCCESS, STANDINGS_GET_ERROR, 'Error retrieving standings.');
}