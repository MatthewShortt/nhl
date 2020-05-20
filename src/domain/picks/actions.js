const { PicksApi } = require('./api');
// eslint-disable-next-line
const { PICKS_GET_SUCCESS, PICKS_GET_ERROR, PICKS_UPDATE_SUCCESS, PICKS_UPDATE_ERROR } = require('./constants');

export function getPicks(dispatch, { token }) {
    PicksApi.getPicks({ token })
        .then(res => dispatch({ type: PICKS_GET_SUCCESS, data: res.data }))
        .catch(error => dispatch({ type: PICKS_GET_ERROR, data: 'Error retrieving picks.' }));
}