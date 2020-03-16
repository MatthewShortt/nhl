function persist(key, state) {
    localStorage.setItem(key, JSON.stringify(state));
}

function persistenceTee(reducer, key, persist, state, action) {
    let newState = reducer(state, action);
    persist(key, newState);
    return newState;
}

export const persistentReducer = (reducer, key) => {
    return persistenceTee.bind(null, reducer, key, persist);
};