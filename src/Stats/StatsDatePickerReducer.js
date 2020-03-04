import {UPDATE_DATES_SUCCESS} from './StatsDatePickerActions';

const initialState = {
    startDate: new Date("2019-10-02T21:11:54"),
    endDate: new Date()
};

export default function StatsDatesReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATES_SUCCESS:
            return action.payload.dates;
        default:
            return state
    }
}