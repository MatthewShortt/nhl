import {put, takeLatest} from 'redux-saga/effects';

export const FILTER_REQUESTED = 'FILTER_REQUESTED';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';
export const FILTER_ERROR = 'FILTER_ERROR';

export function* watchFilterAsync() {
    yield takeLatest(FILTER_REQUESTED, updateFilterAsync);
}

export function Filter(params) {
    return {
        type: FILTER_REQUESTED,
        payload: params
    }
}

export function* updateFilterAsync({payload: params}) {
    try {
        yield put(FilterSuccess(params));
    } catch (e) {
        yield put(FilterError(e));
    }
}

function FilterSuccess(filters) {
    return {
        type: FILTER_SUCCESS,
        payload: {filters}
    };
}

function FilterError(error) {
    return {
        type: FILTER_ERROR,
        payload: {error}
    };
}
