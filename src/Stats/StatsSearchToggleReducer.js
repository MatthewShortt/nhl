import {TOGGLE_SUCCESS} from './StatsSearchToggleActions';

const initialState = 'YEARS';

export default function StatsSearchToggleReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SUCCESS:
            return action.payload.searchType;
        default:
            return state
    }
}