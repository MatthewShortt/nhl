import {FILTER_SUCCESS} from './StatsFilterActions';
import {RESET_FILTERS} from './StatsActions';

const initialState = {
    position: [],
    team: []
};

export default function StatsTableReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_SUCCESS:
            if (action.payload.filters.type === 'team') return updateTeamFilters(state, action.payload.filters);
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

const updateTeamFilters = (state, filters) => {
    state['team'] = filters.value;
    return state;
};