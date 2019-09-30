import ErrorReducer from './ErrorReducer';
import {SKATERS_ERROR} from './User/Actions/UserActions';

describe('Error Reducer ', () => {

    it('should set error on a user error', () => {
        const initialState = null;
        const error = "Page Not Found";
        const action = {type: SKATERS_ERROR, payload: {error: error}};

        const actualNextState = ErrorReducer(initialState, action);
        expect(actualNextState).toEqual({error});
    });

    it('should reset the error to the initial state on non-error messages', () => {
        const initialState = null;
        const error = "Page Not Found";
        const action = {type: 'NOT_AN_ERROR', payload: {error: error}};

        const actualNextState = ErrorReducer(initialState, action);
        expect(actualNextState).toBeNull();
    })

});
