import React from 'react';
import './player-card.css';

function PlayerCardSwap({ id, name, team, swapIn }) {
    return(
        <div>
            <div className='uk-inline'>
                <img className={`uk-border-circle uk-box-shadow-small ${swapIn ? 'fantasy-border-success' : 'fantasy-border-danger'}`} width='175' src={`https://assets.nhle.com/mugs/nhl/20202021/${team}/${id}.png`} alt={name}/>
                <img className='uk-position-bottom-right team-logo' src={`https://assets.nhle.com/logos/nhl/svg/${team}_light.svg`} alt={name}/>
            </div>
            <div className='uk-inline uk-width-1-1 uk-padding-small uk-text-small uk-text-center'>
                <h5 className='uk-margin-remove-bottom uk-text-capitalize'>{lastName(name)}</h5>
            </div>
        </div>
    );

    function lastName(name) {
        return name.split(' ')[1];
    }

}

export default PlayerCardSwap;