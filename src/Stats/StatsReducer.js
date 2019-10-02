import { SKATERS_LOADING, SKATERS_SUCCESS, SKATERS_ERROR } from './StatsActions';

const initialState = {
    data: [],
    loading: false,
    error: false
};

export default function StatsReducer(state = initialState, action) {

    switch (action.type){
        case SKATERS_LOADING:
            return  {data: [], loading: true, error: false};
        case SKATERS_SUCCESS:
            return  {data: action.payload.stats, loading: false, error: false};
        case SKATERS_ERROR:
            return  {data: [], loading: false, error: true};
        default:
            return state;
    }
}
