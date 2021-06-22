import React             from 'react';
import PlayerCardSummary from '#components/player-cards/player-card-summary';

const Division = ({ division, players, icon }) => {
    return (
        <div className='uk-width-1-1'>
            <button data-uk-toggle={`target: #${division}`} type="button" className='uk-button uk-button-text'>
                <span data-uk-icon={`icon: ${icon}; ratio: 0.5`} className='uk-margin-small-right'/>
                {division}
            </button>
            <div id={division}>
                {players.map((player, i) => (
                    <div key={`${player.id}-${i}`}>
                        <PlayerCardSummary {...player} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Division;