import combineReducers from 'react-combine-reducers';
import user            from '#domain/users/reducers';
import logon           from '#domain/logon/reducers';

console.log(logon);

const combinedReducers = combineReducers({
    ...user,
    ...logon
});

export const rootReducer = combinedReducers[0];
export const rootInitialState = combinedReducers[1];