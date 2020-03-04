import {applyMiddleware, compose, createStore} from 'redux';
import {createHashHistory} from 'history';
import createRootReducer from './RootReducer';
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {watchSkatersAsync} from './Stats/StatsActions';
import {watchTableConfigAsync} from './Stats/StatsTableActions';
import {watchFilterAsync} from './Stats/StatsFilterActions';
import {watchUpdateYearsAsync} from './Stats/StatsYearsActions';
import {watchUpdateDatesAsync} from './Stats/StatsDatePickerActions';
import {watchToggleAsync} from './Stats/StatsSearchToggleActions';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHashHistory();

function* rootSaga() {
    yield all([
        watchSkatersAsync(),
        watchTableConfigAsync(),
        watchFilterAsync(),
        watchUpdateYearsAsync(),
        watchUpdateDatesAsync(),
        watchToggleAsync()
    ]);
}

export default function store() {
    const store = createStore(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            ))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
