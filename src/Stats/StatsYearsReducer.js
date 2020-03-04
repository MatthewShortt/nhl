import {UPDATE_YEARS_SUCCESS, YEARS} from './StatsYearsActions';

const initialState = {
    startYear: YEARS,
    endYear: [YEARS[YEARS.length - 1]],
    selectedEndYear: YEARS[YEARS.length - 1]
};

export default function StatsYearsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_YEARS_SUCCESS:
            return action.payload.years;
        default:
            return state
    }
}