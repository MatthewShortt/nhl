import { TABLE_HEADERS_SUCCESS } from './StatsTableActions';

const initialState = {
    headers: ['Name', 'Team', 'Pos', 'Tot', 'G', 'A', 'PPG', 'PPA', 'SHG', 'SHA', '+/-', 'S', 'H', 'B'],
    keys: ['playerName', 'team', 'position', 'total', 'goals', 'assists', 'ppGoals', 'ppAssists', 'shGoals', 'shAssists', 'plusMinus', 'shots', 'hits', 'blockedShots']
};

export default function StatsTableReducer(state = initialState, action) {
    if (action.type === TABLE_HEADERS_SUCCESS) {
        return action.payload.table;
    } else {
        return state;
    }
}
