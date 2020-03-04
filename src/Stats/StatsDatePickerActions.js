import {put, select, takeLatest} from 'redux-saga/effects';
import {CurrentDates} from '../common/selectors'

export const UPDATE_DATES_REQUESTED = 'UPDATE_DATES_REQUESTED';
export const UPDATE_DATES_SUCCESS = 'UPDATE_DATES_SUCCESS';
export const UPDATE_DATES_ERROR = 'UPDATE_DATES_ERROR';

export function* watchUpdateDatesAsync() {
    yield takeLatest(UPDATE_DATES_REQUESTED, updateDatesAsync);
}

export function UpdateDates(params) {
    return {
        type: UPDATE_DATES_REQUESTED,
        payload: params
    }
}

export function* updateDatesAsync({payload: params}) {
    try {
        let {type, value} = params;
        let currentDatesState = yield select(CurrentDates);
        console.log(currentDatesState);
        let dates = Object.assign({}, currentDatesState);

        if (type === 'endDate') {
            console.log('End Date chosen...', value);
            if (value < dates.startDate) dates.startDate = value;
            dates.endDate = value;
        } else if (type === 'startDate') {
            console.log('Start Date chosen...', value);
            if (value > dates.endDate) dates.endDate = value;
            dates.startDate = value;
        } else {
            throw Error('Invalid date type.');
        }

        yield put(UpdateDatesSuccess(dates));
    } catch (e) {
        yield put(UpdateDatesError(e));
    }
}

function UpdateDatesSuccess(dates) {
    return {
        type: UPDATE_DATES_SUCCESS,
        payload: {dates}
    };
}

function UpdateDatesError(error) {
    return {
        type: UPDATE_DATES_ERROR,
        payload: {error}
    };
}
