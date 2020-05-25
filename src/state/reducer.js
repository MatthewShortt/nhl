import combineReducers         from 'react-combine-reducers';
import * as user               from '#domain/users/reducers';
import * as picks              from '#domain/picks/reducers';
import * as statsPlayoffPlayer from '#domain/stats/playoff-skater/reducers';

const combinedReducers = combineReducers({
    ...user,
    ...picks,
    ...statsPlayoffPlayer
});

export const rootReducer = combinedReducers[0];
export const rootInitialState = combinedReducers[1];