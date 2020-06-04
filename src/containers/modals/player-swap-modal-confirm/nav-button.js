import React                      from 'react';
import { PlayerSwapModalElement } from '../player-swap-modal/player-swap-modal';

function NavButton() {
    return (
        <button className='uk-button uk-button-secondary' type='button'
                onClick={() => PlayerSwapModalElement.show()}>
            Previous
        </button>
    );
}

export default NavButton;