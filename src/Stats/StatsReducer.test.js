import StatsReducer from './StatsReducer';
import { SKATERS_SUCCESS } from './StatsActions';

describe('User Reducer ', () => {
    it('should set the GetUser into the user when it is a success', () => {
        const initialState = null;
        const user = { name: 'Username', id: '123456789' };
        const action = { type: SKATERS_SUCCESS, payload: { user: user } };

        const actualNextState = StatsReducer(initialState, action);
        expect(actualNextState).toEqual(user);
    });

    it('should keep state on other messages', () =>{
        const inititalState = [];
        const stories = [{
            name: 'Test Story',
            id: '12345'
        }];
        const action = {
            type: 'FOO_STORIES',
            payload: {
                stories: stories
            }
        };

        const actualNextState = StatsReducer(inititalState, action);
        expect(actualNextState).toBe(inititalState);
    });
});
