import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import skaters from './User/Reducers/UserReducer';

export default (history) =>
    combineReducers({
            router: connectRouter(history),
            skaters
        }
    );
