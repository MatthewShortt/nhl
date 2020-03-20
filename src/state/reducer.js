import combineReducers from 'react-combine-reducers';
import user            from '#domain/users/reducers';

const combinedReducers = combineReducers({
    ...user
});

export const rootReducer = combinedReducers[0];
export const rootInitialState = combinedReducers[1];