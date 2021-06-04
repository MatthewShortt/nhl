import { useEffect, useReducer } from 'react';
import uikit                     from 'uikit';

export const EAST = 'East';
export const WEST = 'West';
export const CENTRAL = 'Central';
export const NORTH = 'North';

const divisions = [EAST, WEST, CENTRAL, NORTH];

export const useIcon = () => {
    const initialState = {
        [EAST]: 'minus',
        [WEST]: 'minus',
        [CENTRAL]: 'minus',
        [NORTH]: 'minus'
    };

    const reducer = (state, { type, div }) => {
        switch (type) {
            case 'show':
                return { ...state, [div]: 'minus' };
            case 'hide':
                return { ...state, [div]: 'plus' };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        divisions.forEach(div => {
            uikit.util.on(`#${div}`, 'show', () => dispatch({ type: 'show', div }));
            uikit.util.on(`#${div}`, 'hide', () => dispatch({ type: 'hide', div }));
        });
    }, []);

    return state;
};