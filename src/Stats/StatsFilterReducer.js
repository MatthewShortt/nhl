import {FILTER_SUCCESS} from './StatsFilterActions';
import {RESET_FILTERS} from './StatsActions';

const initialState = {
    position: [],
    team: []
};

export default function StatsTableReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_SUCCESS:
            return updateFilters(state, action.payload.filters);
        case RESET_FILTERS:
            return {position: [], team: []};
        default:
            return state
    }
}

const updateFilters = (state, filters) => {
    let {type, value, checked} = filters;
    if (checked) {
        state[type].push(value);
        return state;
    }
    state[type] = state[type].filter(filter => filter !== value);
    return state;
};