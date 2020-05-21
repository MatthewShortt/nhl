/*
 * Picks Get Constants
 */
export const PICKS_GET_SUCCESS = 'PICKS_GET_SUCCESS';
export const PICKS_GET_ERROR = 'PICKS_GET_ERROR';

/*
 * Picks Update Constants
 */
export const PICKS_UPDATE_SUCCESS = 'PICKS_UPDATE_SUCCESS';
export const PICKS_UPDATE_ERROR = 'PICKS_UPDATE_ERROR';

/*
 * Picks Structure
 */
export const EAST_PICKS_F = ['ef1', 'ef2', 'ef3'];
export const EAST_PICKS_D = ['ed1', 'ed2'];
export const EAST_PICKS_G = ['eg'];
export const EAST_PICKS   = [...EAST_PICKS_F, ...EAST_PICKS_D, ...EAST_PICKS_G];
export const WEST_PICKS_F = ['wf1', 'wf2', 'wf3'];
export const WEST_PICKS_D = ['wd1', 'wd2'];
export const WEST_PICKS_G = ['wg'];
export const WEST_PICKS   = [...WEST_PICKS_F, ...WEST_PICKS_D, ...WEST_PICKS_G];
export const PICKS        = [...EAST_PICKS, ...WEST_PICKS];

/*
 * Pick Filter Update Constants
 */
export const PICK_FILTERS_UPDATE = 'PICK_FILTERS_UPDATE';

/*
 * Pick Position Filter
 */
export const FORWARD = 'F';
export const DEFENCE = 'D';
export const GOALIE  = 'G';

/*
 * Pick Team Filter
 */
export const EAST_TEAMS = ['BOS', 'TBL', 'TOR', 'FLA', 'MTL', 'BUF', 'OTT', 'DET', 'WSH', 'PHI', 'PIT', 'CAR', 'CLB', 'NYI', 'NYR', 'NJD'];
export const WEST_TEAMS = ['STL', 'COL', 'DAL', 'WPG', 'NSH', 'MIN', 'CHI', 'VGK', 'EDM', 'CGY', 'VAN', 'ARI', 'ANA', 'LAK', 'SJS'];