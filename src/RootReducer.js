import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import skaters from './Stats/StatsReducer';
import tableConfig from './Stats/StatsTableReducer';
import filters from './Stats/StatsFilterReducer';
import years from './Stats/StatsYearsReducer';

export default (history) =>
    combineReducers({
            router: connectRouter(history),
            skaters,
            tableConfig,
            filters,
            years
        }
    );
