import { SKATERS_SUCCESS } from './StatsActions';

const initialState = [];

export default function StatsReducer(state = initialState, action) {
    if (action.type === SKATERS_SUCCESS) {
        return action.payload.stats;
    } else {
        return state;
    }
}
