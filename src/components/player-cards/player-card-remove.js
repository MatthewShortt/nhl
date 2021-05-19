import React from 'react';

function PlayerCardRemove({ id, name, team, position, positions, removePick }) {
    return(
        <div>
            <div className='uk-inline uk-width-1-1'>
                <h4 className='uk-margin-remove-bottom'>{positions[position]}</h4>
            </div>
            <div className='uk-inline'>
                <img className='uk-border-circle uk-box-shadow-small uk-box-shadow-hover-xlarge cursor-pointer' width='175' height='175' src={`https://assets.nhle.com/mugs/nhl/20202021/${team}/${id}.png`} alt={name}/>
                <button className='uk-position-bottom-left uk-button uk-button-link uk-text-danger' data-uk-icon='minus-circle' onClick={removePick}/>
                <img className='uk-position-bottom-right team-logo' src={`https://assets.nhle.com/logos/nhl/svg/${team}_light.svg`} alt={name}/>
            </div>
            <div className='uk-inline uk-width-1-1 uk-padding-small'>
                <h5 className='uk-margin-remove-bottom'>{name}</h5>
            </div>
        </div>
    );
}

export default PlayerCardRemove;