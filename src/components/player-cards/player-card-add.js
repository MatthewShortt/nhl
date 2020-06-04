import React from 'react';

function PlayerCardAdd({ id, name, team, position, positions, filterSelection }) {
    return(
        <div>
            <div className='uk-inline uk-width-1-1'>
                <h4 className='uk-margin-remove-bottom'>{positions[position]}</h4>
            </div>
            <div className='uk-inline'>
                <img className='uk-border-circle uk-box-shadow-small' width='175' height='175' src='https://assets.nhle.com/mugs/nhl/default-skater.png' alt={name}/>
                <a href='#selection-table' data-uk-scroll={true} onClick={filterSelection}>
                    <button className='uk-position-bottom-left uk-button uk-button-link uk-text-success' data-uk-icon='plus-circle'/>
                </a>
                <img className='uk-position-bottom-right team-logo' src={`http://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg`} alt={name}/>
            </div>
            <div className='uk-inline uk-width-1-1 uk-padding-small'>
                <h5 className='uk-margin-remove-bottom'>Unselected</h5>
            </div>
        </div>
    );
}

export default PlayerCardAdd;