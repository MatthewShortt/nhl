import React                                from 'react';
import PlayerCardRemove                     from '#components/player-cards/player-card-remove';
import PlayerCardAdd                        from '#components/player-cards/player-card-add';
import { removePick, updatePickFilters }                    from '#domain/picks/actions';
import { ACTIVE_FILTER, CENTRAL, EAST, NORTH, TEAMS, WEST } from '#domain/picks/constants';
import { useDispatch }                                      from '#state';

// TODO: Remove this or move to constants
const positions = {
    'ef1': 'Forward 1',
    'ef2': 'Forward 2',
    'ef3': 'Forward 3',
    'ed1': 'Defence 1',
    'ed2': 'Defence 2',
    'eg': 'Goalie',
    'wf1': 'Forward 1',
    'wf2': 'Forward 2',
    'wf3': 'Forward 3',
    'wd1': 'Defence 1',
    'wd2': 'Defence 2',
    'wg': 'Goalie',
    'nf1': 'Forward 1',
    'nf2': 'Forward 2',
    'nf3': 'Forward 3',
    'nd1': 'Defence 1',
    'nd2': 'Defence 2',
    'ng': 'Goalie',
    'cf1': 'Forward 1',
    'cf2': 'Forward 2',
    'cf3': 'Forward 3',
    'cd1': 'Defence 1',
    'cd2': 'Defence 2',
    'cg': 'Goalie',
};

// TODO: Remove once variables are changed
const conferenceMap = {
    'e': EAST,
    'w': WEST,
    'n': NORTH,
    'c': CENTRAL,
};

function Player({ id, name, team, position }) {

    const dispatch = useDispatch();

    if (id) {
        return (<PlayerCardRemove id={id} name={name} team={team} position={position} positions={positions} removePick={removePick.bind(null, dispatch, { position })}/>);
    } else {
        return (<PlayerCardAdd id={id} name={name} team={team} position={position} positions={positions} filterSelection={filterSelection}/>);
    }

    // TODO: Fix once position split is better
    function filterSelection() {
        const [conference, pos] = position.split('');
        const c                 = conferenceMap[conference];
        const p                 = pos.toUpperCase();
        console.log({ position: p, teams: TEAMS[c], active: ACTIVE_FILTER[`${TEAMS[c]}_${p}`] });
        updatePickFilters(dispatch, { position: p, teams: TEAMS[c], active: ACTIVE_FILTER[`${TEAMS[c]}_${p}`] });
    }
}


export default Player;


