import React from 'react';

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
}

function Player({ id, name, team, position }) {
    return id ? (
        <div>
            <div className='uk-inline uk-width-1-1'>
                <h4 className='uk-margin-remove-bottom'>{positions[position]}</h4>
            </div>
            <div className='uk-inline'>
                <img className='uk-border-circle uk-box-shadow-small cursor-pointer' width='175' height='175' src={`https://assets.nhle.com/mugs/nhl/20192020/${team}/${id}.png`} alt={name} onClick={() => console.log(`Hello ${name}`)}/>
                <button className='uk-position-bottom-left uk-button uk-button-link uk-text-danger' data-uk-icon='minus-circle' onClick={() => console.log(`Removing ${name}`)}/>
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
                <button className='uk-position-bottom-left uk-button uk-button-link uk-text-success' data-uk-icon='icon: plus-circle; ratio: 1.25' onClick={() => console.log(`Add ${positions[position]}`)}/>
                <img className='uk-position-bottom-right team-logo' src={`http://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg`} alt={name}/>
            </div>
            <div className='uk-inline uk-width-1-1 uk-padding-small'>
                <h5 className='uk-margin-remove-bottom'>Unselected</h5>
            </div>
        </div>
    );
}

export default Player;


