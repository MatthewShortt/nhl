import React                        from 'react';
import PlayerCardSwap               from '#components/player-cards/player-card-swap';
import { addPick, restorePickSwap } from '#domain/picks/actions';
import { useStateValue }            from '#state';

function Body() {

    const [{ pickSwap: { swapIn, swapOut } }, dispatch] = useStateValue();

    return(
        <>
            <p className='uk-text-muted'>Swap in <span className='uk-text-bold uk-text-uppercase'>{swapIn.name}</span> for <span className='uk-text-bold uk-text-uppercase'>{swapOut.name}</span>?</p>
            <div className='uk-text-center' data-uk-grid={true}>
                <div className='uk-width-expand uk-animation-slide-left'>
                    <PlayerCardSwap id={swapIn.id} name={swapIn.name} team={swapIn.team} swapIn={true}/>
                </div>
                <div className='uk-width-expand uk-animation-slide-right'>
                    <PlayerCardSwap id={swapOut.id} name={swapOut.name} team={swapOut.team} swapIn={false}/>
                </div>
            </div>

            <div className='uk-width-1-1 uk-text-center'>
                <button className='uk-button uk-button-primary uk-modal-close' type='button' onClick={() => confirmSwap(swapOut, swapIn)}>Swap</button>
            </div>
        </>
    );

    /**
     * Resets player swap picks and updated users pick, exchanging the swapOut player for the swapIn player
     * @param position - swapOut player position
     * @param id - swapIn player id
     * @param name - swapIn player name
     * @param team - swapIn player team
     */
    function confirmSwap({ position }, { id, name, team }) {
        addPick(dispatch, { position, attributes: { id, name, team } });
        restorePickSwap(dispatch);
    }
}

export default Body;
