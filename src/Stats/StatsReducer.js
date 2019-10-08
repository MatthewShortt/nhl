import {SKATERS_ERROR, SKATERS_FILTER, SKATERS_LOADING, SKATERS_SUCCESS} from './StatsActions';

const initialState = {
    data: {type: 'skaters', stats: []},
    loading: false,
    error: false
};

export default function StatsReducer(state = initialState, action) {

    switch (action.type) {
        case SKATERS_LOADING:
            return {data: [], loading: true, error: false};
        case SKATERS_SUCCESS:
            return {data: {...action.payload}, loading: false, error: false};
        case SKATERS_ERROR:
            return {data: [], loading: false, error: true};
        case SKATERS_FILTER:
            return {...state};
        default:
            return state;
    }
}
