import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState, init)}>
            {children}
        </StateContext.Provider>
    )
};
export const useStateValue = () => useContext(StateContext);
export const useDispatch = () => useContext(StateContext)[1];

function init(initialState) {
    let state = {};
    for (let key in initialState) {
        state[key] = getStateValue(key, initialState);
    }
    return state;
}

function getStateValue(key, state) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : state[key];
}