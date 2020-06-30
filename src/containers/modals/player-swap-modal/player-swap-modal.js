import React             from 'react';
import UIkit             from 'uikit';
import ModalDialogLayout from '#components/modal-layout/modal-dialog-layout';
import Body              from './body';
import NavButton         from './nav-button';

let PlayerSwapModalElement;

function PlayerSwapModal() {

    PlayerSwapModalElement = UIkit.modal('#player-swap-modal');

    return (
        <ModalDialogLayout id='player-swap-modal' title='Player Swap'>
            <Body/>
            <NavButton/>
        </ModalDialogLayout>
    );
}

export default PlayerSwapModal;
export { PlayerSwapModalElement };