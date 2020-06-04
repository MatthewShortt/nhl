/*
 * Picks Get Constants
 */
export const PICKS_GET_SUCCESS = 'PICKS_GET_SUCCESS';
export const PICKS_GET_ERROR   = 'PICKS_GET_ERROR';

/*
 * Picks Update Constants
 */
export const PICKS_UPDATE_SUCCESS = 'PICKS_UPDATE_SUCCESS';
export const PICKS_UPDATE_ERROR   = 'PICKS_UPDATE_ERROR';

/*
 * Pick Update Constants
 */
export const PICK_ADD    = 'PICK_ADD';
export const PICK_REMOVE = 'PICK_REMOVE';

/*
 * Pick Filter Update Constants
 */
export const PICK_FILTERS_UPDATE = 'PICK_FILTERS_UPDATE';


/*
 * Pick Swap Update Constants
 */
export const PICK_SWAP_UPDATE            = 'PICK_SWAP_UPDATE';
export const PICK_SWAP_RESTORE           = 'PICK_SWAP_RESTORE';
export const PICK_SWAP_OUT_PLAYER_ADD    = 'PICK_SWAP_OUT_PLAYER_ADD';
export const PICK_SWAP_OUT_PLAYER_REMOVE = 'PICK_SWAP_OUT_PLAYER_REMOVE';

/*
 * Pick Position Filter
 */
export const FORWARD = 'F';
export const DEFENCE = 'D';
export const GOALIE  = 'G';

/*
 * Conferences
 */
export const EAST = 'EAST';
export const WEST = 'WEST';

/*
 * Picks Structure
 */
export const PICK_KEYS  = {
    [`${EAST}_${FORWARD}`]: ['ef1', 'ef2', 'ef3'],
    [`${EAST}_${DEFENCE}`]: ['ed1', 'ed2'],
    [`${EAST}_${GOALIE}`]: ['eg'],
    [`${WEST}_${FORWARD}`]: ['wf1', 'wf2', 'wf3'],
    [`${WEST}_${DEFENCE}`]: ['wd1', 'wd2'],
    [`${WEST}_${GOALIE}`]: ['wg']
};
export const EAST_PICKS = [...PICK_KEYS[`${EAST}_${FORWARD}`], ...PICK_KEYS[`${EAST}_${DEFENCE}`], ...PICK_KEYS[`${EAST}_${GOALIE}`]];
export const WEST_PICKS = [...PICK_KEYS[`${WEST}_${FORWARD}`], ...PICK_KEYS[`${WEST}_${DEFENCE}`], ...PICK_KEYS[`${WEST}_${GOALIE}`]];
export const PICKS      = [...EAST_PICKS, ...WEST_PICKS];

/*
 * Pick Team Filter
 */
export const TEAMS = {
    [EAST]: ['BOS', 'TBL', 'TOR', 'FLA', 'MTL', 'BUF', 'OTT', 'DET', 'WSH', 'PHI', 'PIT', 'CAR', 'CLB', 'NYI', 'NYR', 'NJD'],
    [WEST]: ['STL', 'COL', 'DAL', 'WPG', 'NSH', 'MIN', 'CHI', 'VGK', 'EDM', 'CGY', 'VAN', 'ARI', 'ANA', 'LAK', 'SJS']
};

/*
 * Pick Active Filter
 */
export const ACTIVE_FILTER = {
    [`${TEAMS[EAST]}_${FORWARD}`]: `${EAST}_${FORWARD}`,
    [`${TEAMS[EAST]}_${DEFENCE}`]: `${EAST}_${DEFENCE}`,
    [`${TEAMS[EAST]}_${GOALIE}`]: `${EAST}_${GOALIE}`,
    [`${TEAMS[WEST]}_${FORWARD}`]: `${WEST}_${FORWARD}`,
    [`${TEAMS[WEST]}_${DEFENCE}`]: `${WEST}_${DEFENCE}`,
    [`${TEAMS[WEST]}_${GOALIE}`]: `${WEST}_${GOALIE}`
};
