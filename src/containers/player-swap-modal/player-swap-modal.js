import React                                             from 'react';
import UIkit                                             from 'uikit';
import { useStateValue }                                 from '#state';
import PlayerCardSwapOut                                 from '#components/player-cards/player-card-swap-out';
import { addPickSwapOutPlayer, removePickSwapOutPlayer } from '#domain/picks/actions';
import { PlayerSwapModalConfirmElement }                 from './player-swap-modal-confirm';

let PlayerSwapModalElement = '';

function PlayerSwapModal() {

    const [{ pickSwap: { swapOut, swapOutOptions } }, dispatch] = useStateValue();

    PlayerSwapModalElement = UIkit.modal('#player-swap-modal');

    return(
        <div id="player-swap-modal" data-uk-modal={true}>
            <div className="uk-modal-dialog">

                <button className="uk-modal-close-default" type="button" data-uk-close={true}/>

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">Player Swap</h2>
                </div>

                <div className="uk-modal-body" >
                    <p className='uk-text-muted'>Choose a player to swap out.</p>
                    <div className='uk-text-center' data-uk-grid={true}>
                        {swapOutOptions.map(player =>
                            <div className={`uk-width-1-1 uk-width-1-${swapOutOptions.length}@s`} key={`player_swapOut_${player.id}`}>
                                {<PlayerCardSwapOut
                                    id={player.id}
                                    name={player.name}
                                    team={player.team}
                                    position={player.position}
                                    selected={swapOut.id === player.id}
                                    onClick={toggleSwapOutPlayer.bind(null, swapOut, player)}
                                />}
                            </div>
                        )}
                    </div>
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <div className='uk-float-left'>
                        <button className="uk-button uk-button-default uk-margin-small-right uk-modal-close" type="button">Cancel</button>
                    </div>
                    <div className='uk-float-right'>
                        <button className="uk-button uk-button-secondary" onClick={() => PlayerSwapModalConfirmElement.show()} disabled={!swapOut.id}>Next</button>
                    </div>
                </div>

            </div>
        </div>
    );

    function toggleSwapOutPlayer(swapOut, player) {
        swapOut.id === player.id
            ? removePickSwapOutPlayer(dispatch)
            : addPickSwapOutPlayer(dispatch, { swapOut: player })
    }
}

export default PlayerSwapModal;
export {
    PlayerSwapModalElement
};