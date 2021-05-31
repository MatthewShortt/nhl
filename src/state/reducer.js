import combineReducers         from 'react-combine-reducers';
import user               from '#domain/users/reducers';
import picks              from '#domain/picks/reducers';
import standings          from '#domain/standings/reducers';
import statsPlayoffPlayer from '#domain/stats/playoff-skater/reducers';

const combinedReducers = combineReducers({
    ...user,
    ...picks,
    ...standings,
    ...statsPlayoffPlayer
});

export const rootReducer = combinedReducers[0];
export const rootInitialState = combinedReducers[1];