import React                             from 'react';
import { useStateValue }                 from '#state';
import { PlayerSwapModalConfirmElement } from '../player-swap-modal-confirm/player-swap-modal-confirm';

function NavButton() {

    const [{ pickSwap: { swapOut } }] = useStateValue();

    return (
        <button className="uk-button uk-button-secondary"
                onClick={() => PlayerSwapModalConfirmElement.show()}
                disabled={!swapOut.id}>
            Next
        </button>
    );
}

export default NavButton;