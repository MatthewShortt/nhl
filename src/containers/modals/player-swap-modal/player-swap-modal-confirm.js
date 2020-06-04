import React                        from 'react';
import UIkit                        from 'uikit';
import { useStateValue }            from '#state';
import PlayerCardSwap               from '#components/player-cards/player-card-swap';
import { addPick, restorePickSwap } from '#domain/picks/actions';
import { PlayerSwapModalElement }   from './player-swap-modal';

let PlayerSwapModalConfirmElement = '';

function PlayerSwapModalConfirm() {

    const [{ pickSwap: { swapIn, swapOut } }, dispatch] = useStateValue();

    PlayerSwapModalConfirmElement = UIkit.modal('#player-swap-modal-confirm');

    return(
        <div id='player-swap-modal-confirm' data-uk-modal={true}>
            <div className='uk-modal-dialog'>

                <button className='uk-modal-close-default' type='button' data-uk-close={true}/>

                <div className='uk-modal-header'>
                    <h2 className='uk-modal-title'>Confirm</h2>
                </div>

                <div className='uk-modal-body' >
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

                </div>

                <div className='uk-modal-footer'>
                    <div className='uk-float-left'>
                        <button className='uk-button uk-button-default uk-margin-small-right uk-modal-close' type='button'>Cancel</button>
                    </div>
                    <div className='uk-float-right'>
                        <button className='uk-button uk-button-secondary' onClick={() => PlayerSwapModalElement.show()} type='button'>Previous</button>
                    </div>
                </div>

            </div>
        </div>
    );

    /**
     * Resets player swap picks and updated users pick, exchanging the swapOut player for the swapIn player
     * @param position - swapOut player position
     * @param id - swapIn player id
     * @param name - swapIn player name
     * @param team - swapIn player team
     */
    function confirmSwap({ position }, { id, name, team }) {
        restorePickSwap(dispatch);
        addPick(dispatch, { position, attributes: { id, name, team } });
    }
}

export default PlayerSwapModalConfirm;
export {
    PlayerSwapModalConfirmElement
};
