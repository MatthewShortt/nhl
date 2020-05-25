import React                                from 'react';
import { removePick, updatePickFilters }    from '#domain/picks/actions';
import { ACTIVE_FILTER, EAST, TEAMS, WEST } from '#domain/picks/constants';
import { useDispatch }                      from '#state';

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
};

// TODO: Remove once variables are changed
const conferenceMap = {
    'e': EAST,
    'w': WEST
};

function Player({ id, name, team, position }) {

    const dispatch = useDispatch();

    return id ? (
        <div>
            <div className='uk-inline uk-width-1-1'>
                <h4 className='uk-margin-remove-bottom'>{positions[position]}</h4>
            </div>
            <div className='uk-inline'>
                <img className='uk-border-circle uk-box-shadow-small cursor-pointer' width='175' height='175' src={`https://assets.nhle.com/mugs/nhl/20192020/${team}/${id}.png`} alt={name} onClick={() => console.log(`Hello ${name}`)}/>
                <button className='uk-position-bottom-left uk-button uk-button-link uk-text-danger' data-uk-icon='minus-circle' onClick={() => removePick(dispatch, { position })}/>
                <img className='uk-position-bottom-right team-logo' src={`https://assets.nhle.com/logos/nhl/svg/${team}_light.svg`} alt={name}/>
            </div>
            <div className='uk-inline uk-width-1-1 uk-padding-small'>
                <h5 className='uk-margin-remove-bottom'>{name}</h5>
            </div>
        </div>
    ) : (
        <div>
            <div className='uk-inline uk-width-1-1'>
                <h4 className='uk-margin-remove-bottom'>{positions[position]}</h4>
            </div>
            <div className='uk-inline'>
                <img className='uk-border-circle uk-box-shadow-small' width='175' height='175' src='https://assets.nhle.com/mugs/nhl/default-skater.png' alt={name}/>
                <a href='#selection-table' data-uk-scroll onClick={filterSelection}>
                    <button className='uk-position-bottom-left uk-button uk-button-link uk-text-success' data-uk-icon='icon: plus-circle; ratio: 1.25' onClick={() => console.log(`Add ${positions[position]}`)}/>
                </a>
                <img className='uk-position-bottom-right team-logo' src={`http://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg`} alt={name}/>
            </div>
            <div className='uk-inline uk-width-1-1 uk-padding-small'>
                <h5 className='uk-margin-remove-bottom'>Unselected</h5>
            </div>
        </div>
    );

    // TODO: Fix once position split is better
    function filterSelection() {
        const [conference, pos] = position.split('');
        const c                 = conferenceMap[conference];
        const p                 = pos.toUpperCase();
        updatePickFilters(dispatch, { position: p, teams: TEAMS[c], active: ACTIVE_FILTER[`${TEAMS[c]}_${p}`] });
    }
}

export default Player;


