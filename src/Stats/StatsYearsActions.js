import {put, select, takeLatest} from 'redux-saga/effects';
import {CurrentYears} from '../common/selectors'

export const UPDATE_YEARS_REQUESTED = 'UPDATE_YEARS_REQUESTED';
export const UPDATE_YEARS_SUCCESS = 'UPDATE_YEARS_SUCCESS';
export const UPDATE_YEARS_ERROR = 'UPDATE_YEARS_ERROR';

export const YEARS = ['2002-2003', '2003-2004', '2005-2006', '2006-2007', '2007-2008', '2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020'];


export function* watchUpdateYearsAsync() {
    yield takeLatest(UPDATE_YEARS_REQUESTED, updateYearsAsync);
}

export function UpdateYears(params) {
    return {
        type: UPDATE_YEARS_REQUESTED,
        payload: params
    }
}

export function* updateYearsAsync({payload: params}) {
    try {
        let {type, value} = params;
        let currentYearState = yield select(CurrentYears);
        let years = Object.assign([], currentYearState);
        // let years = {startYear: Object.assign([], YEARS), endYear: Object.assign([], YEARS), selectedEndYear};

        if (type === 'endYear') {
            years.selectedEndYear = value;
        } else if (type === 'startYear') {
            let index = YEARS.indexOf(value);
            if (index !== -1) years.endYear = YEARS.slice(index);
            if (!years.endYear.includes(years.selectedEndYear)) years.selectedEndYear = years.endYear[years.endYear.length - 1]
        } else {
            throw Error('Invalid year type.');
        }

        yield put(UpdateYearsSuccess(years));
    } catch (e) {
        yield put(UpdateYearsError(e));
    }
}

function UpdateYearsSuccess(years) {
    return {
        type: UPDATE_YEARS_SUCCESS,
        payload: {years}
    };
}

function UpdateYearsError(error) {
    return {
        type: UPDATE_YEARS_ERROR,
        payload: {error}
    };
}
