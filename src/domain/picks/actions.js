const { PicksApi } = require('./api');
const { baseRestClient } = require('../base-rest-client');
const { PICKS_GET_SUCCESS, PICKS_GET_ERROR, PICKS_UPDATE_SUCCESS, PICKS_UPDATE_ERROR, PICK_FILTERS_UPDATE, PICK_SWAP_OUT_PLAYER_ADD, PICK_SWAP_OUT_PLAYER_REMOVE, PICK_SWAP_UPDATE, PICK_SWAP_RESTORE, PICK_ADD, PICK_REMOVE } = require('./constants');

export function getPicks(dispatch, token) {
    baseRestClient(dispatch, PicksApi.getPicks.bind(null, token), PICKS_GET_SUCCESS, PICKS_GET_ERROR, 'Error retrieving picks.');
}

export function updatePicks(dispatch, token, { picks }) {
    baseRestClient(dispatch, PicksApi.updatePicks.bind(null, token, { picks }), PICKS_UPDATE_SUCCESS, PICKS_UPDATE_ERROR, 'Error updating picks.');
}

export function addPick(dispatch, { position, attributes }) {
    dispatch({ type: PICK_ADD, data: { position, attributes } });
}

export function removePick(dispatch, { position }) {
    dispatch({ type: PICK_REMOVE, data: { position } });
}

export function updatePickFilters(dispatch, { position, teams, active }) {
    dispatch({ type: PICK_FILTERS_UPDATE, data: { position, teams, active } });
}

export function updatePickSwap(dispatch, { swapIn, swapOutOptions }) {
    dispatch({ type: PICK_SWAP_UPDATE, data: { swapIn, swapOutOptions } });
}

export function addPickSwapOutPlayer(dispatch, { swapOut }) {
    dispatch({ type: PICK_SWAP_OUT_PLAYER_ADD, data: { swapOut } });
}

export function removePickSwapOutPlayer(dispatch) {
    dispatch({ type: PICK_SWAP_OUT_PLAYER_REMOVE });
}

export function restorePickSwap(dispatch) {
    dispatch({ type: PICK_SWAP_RESTORE });
}