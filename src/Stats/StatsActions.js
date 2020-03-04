import {StatsApi} from './Stats.api';
import {call, put, takeLatest} from 'redux-saga/effects';
import {ResetFilters} from './StatsFilterActions';

export const SKATERS_GET_REQUESTED = 'SKATERS_GET_REQUESTED';
export const SKATERS_LOADING = 'SKATERS_LOADING';
export const SKATERS_SUCCESS = 'SKATERS_SUCCESS';
export const SKATERS_ERROR = 'SKATERS_ERROR';
export const SKATERS_FILTER = 'SKATERS_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';

export function* watchSkatersAsync() {
    yield takeLatest(SKATERS_GET_REQUESTED, getSkatersAsync);
}

export function GetSkaters(params) {
    return {
        type: SKATERS_GET_REQUESTED,
        payload: params
    }
}

export function* getSkatersAsync({payload: params}) {
    if (params.filter) {
        yield put(SkatersFilter());
    } else {
        try {
            yield put(SkatersLoading());
            const skaters = yield call(StatsApi.all, params);
            yield put(SkatersSuccess({type: params.type, stats: skaters}));
            if (params.type === 'goalies') yield put(ResetFilters());
        } catch (e) {
            yield put(SkatersError(e));
        }
    }
}

function SkatersLoading() {
    return {
        type: SKATERS_LOADING
    }
}

function SkatersSuccess(stats) {
    return {
        type: SKATERS_SUCCESS,
        payload: {...stats}
    };
}

function SkatersError(error) {
    return {
        type: SKATERS_ERROR,
        payload: {error}
    };
}

function SkatersFilter() {
    return {
        type: SKATERS_FILTER
    }
}

