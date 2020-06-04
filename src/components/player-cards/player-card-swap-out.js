import React from 'react';
import './player-card.css'

function PlayerCardSwapOut({ id, name, team, selected, onClick }) {
    return(
        <div>
            <div className='uk-inline'>
                <img className={`uk-border-circle uk-box-shadow-small cursor-pointer ${selected ? 'fantasy-border-danger' : ''}`} width='175' src={`https://assets.nhle.com/mugs/nhl/20192020/${team}/${id}.png`} alt={name} onClick={onClick}/>
                <img className='uk-position-bottom-right team-logo' src={`https://assets.nhle.com/logos/nhl/svg/${team}_light.svg`} alt={name}/>
            </div>
            <div className='uk-inline uk-width-1-1 uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom uk-text-small uk-text-break uk-text-center'>
                <h5 className='uk-margin-remove-bottom'>{lastName(name)}</h5>
            </div>
        </div>
    );

    function lastName(name) {
        return name.split(' ')[1];
    }

}

export default PlayerCardSwapOut;