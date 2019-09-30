import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import skaters from './Stats/StatsReducer';

export default (history) =>
    combineReducers({
            router: connectRouter(history),
            skaters
        }
    );
