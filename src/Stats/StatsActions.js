import {StatsApi} from './Stats.api';
import {call, put, takeLatest} from 'redux-saga/effects';

export const SKATERS_GET_REQUESTED = 'SKATERS_GET_REQUESTED';
export const SKATERS_SUCCESS = 'SKATERS_SUCCESS';
export const SKATERS_ERROR = 'SKATERS_ERROR';

export function* watchSkatersAsync() {
    yield takeLatest(SKATERS_GET_REQUESTED, getSkatersAsync);
}

export function GetSkaters() {
    return {
        type: SKATERS_GET_REQUESTED
    }
}

export function* getSkatersAsync() {
    try {
        const skaters = yield call(StatsApi.all);
        yield put(SkatersSuccess(skaters));
    } catch (e) {
        yield put(SkatersError(e));
    }
}

function SkatersSuccess(stats) {
    return {
        type: SKATERS_SUCCESS,
        payload: {stats}
    };
}

function SkatersError(error) {
    return {
        type: SKATERS_ERROR,
        payload: {error}
    };
}
