import {put, takeLatest} from 'redux-saga/effects';

export const TOGGLE_REQUESTED = 'TOGGLE_REQUESTED';
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS';
export const TOGGLE_ERROR = 'TOGGLE_ERROR';

export function* watchToggleAsync() {
    yield takeLatest(TOGGLE_REQUESTED, updateToggleAsync);
}

export function Toggle(params) {
    return {
        type: TOGGLE_REQUESTED,
        payload: params
    }
}

export function* updateToggleAsync({payload: params}) {
    try {
        yield put(ToggleSuccess(params));
    } catch (e) {
        yield put(FilterError(e));
    }
}

function ToggleSuccess(searchType) {
    return {
        type: TOGGLE_SUCCESS,
        payload: {searchType}
    };
}

function FilterError(error) {
    return {
        type: TOGGLE_ERROR,
        payload: {error}
    };
}