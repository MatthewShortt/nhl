import {put, takeLatest} from 'redux-saga/effects';

export const TABLE_HEADERS_UPDATE_REQUESTED = 'TABLE_HEADERS_UPDATE_REQUESTED';
export const TABLE_HEADERS_SUCCESS = 'TABLE_HEADERS_SUCCESS';
export const TABLE_HEADERS_ERROR = 'TABLE_HEADERS_ERROR';

const TABLE = {
    skaters: {
        headers: ['Name', 'Team', 'Pos', 'Tot', 'G', 'A', 'PPG', 'PPA', 'SHG', 'SHA', '+/-', 'S', 'H', 'B'],
        keys: ['playerName', 'team', 'position', 'total', 'goals', 'assists', 'ppGoals', 'ppAssists', 'shGoals', 'shAssists', 'plusMinus', 'shots', 'hits', 'blockedShots']
    },
    goalies: {
        headers: ['Name', 'Team', 'Tot', 'W', 'L', 'GA', 'S', 'SO'],
        keys: ['playerName', 'team', 'total', 'wins', 'losses', 'goalsAgainst', 'saves', 'shutouts']
    }
};

export function* watchTableHeadersAsync() {
    yield takeLatest(TABLE_HEADERS_UPDATE_REQUESTED, updateTableHeadersAsync);
}

export function UpdateTableHeaders(params) {
    return {
        type: TABLE_HEADERS_UPDATE_REQUESTED,
        payload: params
    }
}

export function* updateTableHeadersAsync({payload: params}) {
    try {
        const {type, startYear, endYear} = params;
        if (!type || !startYear || !endYear) throw new Error(`Missing parameters: ${{type: type, startYear: startYear, endYear: endYear}}`);

        let table = TABLE[type];

        if (startYear !== endYear) {
            table.headers = table.headers.filter(header => {return header !== 'Team'});
            table.keys = table.keys.filter(key => {return key !== 'team'});
        }

        yield put(TableHeadersSuccess(table));
    } catch (e) {
        yield put(TableHeadersError(e));
    }
}

function TableHeadersSuccess(table) {
    return {
        type: TABLE_HEADERS_SUCCESS,
        payload: {table}
    };
}

function TableHeadersError(error) {
    return {
        type: TABLE_HEADERS_ERROR,
        payload: {error}
    };
}
