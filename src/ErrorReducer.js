import {TABLE_CONFIG_ERROR} from './Stats/StatsTableActions';
import {FILTER_ERROR} from './Stats/StatsFilterActions';
import {UPDATE_YEARS_ERROR} from "./Stats/StatsYearsActions";

const errorActions = [
    TABLE_CONFIG_ERROR,
    FILTER_ERROR,
    UPDATE_YEARS_ERROR
];

export default function errorReducer(state = null, action) {
    if (errorActions.some(type => type === action.type)) {
        return action.payload;
    }
    return null;
}
