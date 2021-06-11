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
// extras for 4 divisions
// export const NORTH = 'NORTH';
// export const CENTRAL = 'CENTRAL';

/*
 * Picks Structure
 */
export const PICK_KEYS  = {
    [`${EAST}_${FORWARD}`]: ['ef1', 'ef2', 'ef3'],
    [`${EAST}_${DEFENCE}`]: ['ed1', 'ed2'],
    [`${EAST}_${GOALIE}`]: ['eg'],
    [`${WEST}_${FORWARD}`]: ['wf1', 'wf2', 'wf3'],
    [`${WEST}_${DEFENCE}`]: ['wd1', 'wd2'],
    [`${WEST}_${GOALIE}`]: ['wg'],
    // [`${NORTH}_${FORWARD}`]: ['nf1', 'nf2', 'nf3'],
    // [`${NORTH}_${DEFENCE}`]: ['nd1', 'nd2'],
    // [`${NORTH}_${GOALIE}`]: ['ng'],
    // [`${CENTRAL}_${FORWARD}`]: ['cf1', 'cf2', 'cf3'],
    // [`${CENTRAL}_${DEFENCE}`]: ['cd1', 'cd2'],
    // [`${CENTRAL}_${GOALIE}`]: ['cg']
};
export const EAST_PICKS = [...PICK_KEYS[`${EAST}_${FORWARD}`], ...PICK_KEYS[`${EAST}_${DEFENCE}`], ...PICK_KEYS[`${EAST}_${GOALIE}`]];
export const WEST_PICKS = [...PICK_KEYS[`${WEST}_${FORWARD}`], ...PICK_KEYS[`${WEST}_${DEFENCE}`], ...PICK_KEYS[`${WEST}_${GOALIE}`]];
// extras for 4 divisions
// export const NORTH_PICKS = [...PICK_KEYS[`${NORTH}_${FORWARD}`], ...PICK_KEYS[`${NORTH}_${DEFENCE}`], ...PICK_KEYS[`${NORTH}_${GOALIE}`]];
// export const CENTRAL_PICKS = [...PICK_KEYS[`${CENTRAL}_${FORWARD}`], ...PICK_KEYS[`${CENTRAL}_${DEFENCE}`], ...PICK_KEYS[`${CENTRAL}_${GOALIE}`]];
// export const PICKS      = [...EAST_PICKS, ...WEST_PICKS, ...NORTH_PICKS, ...CENTRAL_PICKS];

/*
 * Pick Team Filter
 */
export const TEAMS = {
    [EAST]: ['TBL', 'NYI'],
    [WEST]: ['MTL', 'VGK'],
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
    [`${TEAMS[WEST]}_${GOALIE}`]: `${WEST}_${GOALIE}`,
    // [`${TEAMS[NORTH]}_${FORWARD}`]: `${NORTH}_${FORWARD}`,
    // [`${TEAMS[NORTH]}_${DEFENCE}`]: `${NORTH}_${DEFENCE}`,
    // [`${TEAMS[NORTH]}_${GOALIE}`]: `${NORTH}_${GOALIE}`,
    // [`${TEAMS[CENTRAL]}_${FORWARD}`]: `${CENTRAL}_${FORWARD}`,
    // [`${TEAMS[CENTRAL]}_${DEFENCE}`]: `${CENTRAL}_${DEFENCE}`,
    // [`${TEAMS[CENTRAL]}_${GOALIE}`]: `${CENTRAL}_${GOALIE}`
};
