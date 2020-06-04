import React             from 'react';
import UIkit             from 'uikit';
import ModalDialogLayout from '#components/modal-layout/modal-dialog-layout';
import Body              from './body';
import NavButton         from './nav-button';

let PlayerSwapModalConfirmElement;

function PlayerSwapModalConfirm() {

    PlayerSwapModalConfirmElement = UIkit.modal('#player-swap-modal-confirm');

    return (
        <ModalDialogLayout id='player-swap-modal-confirm' title='Confirm'>
            <Body/>
            <NavButton/>
        </ModalDialogLayout>
    );
}

export default PlayerSwapModalConfirm;
export { PlayerSwapModalConfirmElement };
