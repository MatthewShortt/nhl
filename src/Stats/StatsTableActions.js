import {put, takeLatest} from 'redux-saga/effects';

export const TABLE_CONFIG_UPDATE_REQUESTED = 'TABLE_CONFIG_UPDATE_REQUESTED';
export const TABLE_CONFIG_SUCCESS = 'TABLE_CONFIG_SUCCESS';
export const TABLE_CONFIG_ERROR = 'TABLE_CONFIG_ERROR';

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

export function* watchTableConfigAsync() {
    yield takeLatest(TABLE_CONFIG_UPDATE_REQUESTED, updateTableConfigAsync);
}

export function UpdateTableConfig(params) {
    return {
        type: TABLE_CONFIG_UPDATE_REQUESTED,
        payload: params
    }
}

export function* updateTableConfigAsync({payload: params}) {
    try {
        const {type, searchType, start, end} = params;
        if (!type || !start || !end) throw new Error(`Missing parameters: ${{type: type, searchType: searchType, start: start, end: end}}`);

        let table = Object.assign({}, TABLE[type]);
        if ( searchType === 'DATES' || start !== end) {
            table.headers = table.headers.filter(header => {return header !== 'Team'});
            table.keys = table.keys.filter(key => {return key !== 'team'});
        }

        yield put(TableConfigSuccess(table));
    } catch (e) {
        yield put(TableConfigError(e));
    }
}

function TableConfigSuccess(table) {
    return {
        type: TABLE_CONFIG_SUCCESS,
        payload: {table}
    };
}

function TableConfigError(error) {
    return {
        type: TABLE_CONFIG_ERROR,
        payload: {error}
    };
}
