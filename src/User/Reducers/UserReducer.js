import { SKATERS_SUCCESS } from '../Actions/UserActions';

const initialState = [];

export default function UserReducer(state = initialState, action) {
    if (action.type === SKATERS_SUCCESS) {
        return action.payload.user;
    } else {
        return state;
    }
}
