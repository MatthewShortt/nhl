import React                                             from 'react';
import PlayerCardSwapOut                                 from '#components/player-cards/player-card-swap-out';
import { addPickSwapOutPlayer, removePickSwapOutPlayer } from '#domain/picks/actions';
import { useStateValue }                                 from '#state';

function Body() {

    const [{ pickSwap: { swapOut, swapOutOptions } }, dispatch] = useStateValue();

    return(
        <>
            <p className='uk-text-muted'>Choose a player to swap out.</p>
            <div className='uk-text-center' data-uk-grid={true}>
                {swapOutOptions.map(player =>
                    <div className={`uk-width-1-1 uk-width-1-${swapOutOptions.length}@s`} key={`player_swapOut_${player.id}`}>
                        {<PlayerCardSwapOut
                            id={player.id}
                            name={player.name}
                            team={player.team}
                            selected={swapOut.id === player.id}
                            onClick={toggleSwapOutPlayer.bind(null, swapOut, player)}
                        />}
                    </div>
                )}
            </div>
        </>
    );

    function toggleSwapOutPlayer(swapOut, player) {
        swapOut.id === player.id
            ? removePickSwapOutPlayer(dispatch)
            : addPickSwapOutPlayer(dispatch, { swapOut: player })
    }
}

export default Body;
