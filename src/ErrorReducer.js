import {TABLE_CONFIG_ERROR} from './Stats/StatsTableActions';
import uikit from 'uikit';

const errorActions = [
    TABLE_CONFIG_ERROR
];

export default function errorReducer(state = null, action) {
    if (errorActions.some(type => type === action.type)) {
        uikit.notification({message: '¯\\_(ツ)_/¯ Something went wrong...', status: 'danger', timeout: 4000});
        return action.payload;
    }
    return null;
}
