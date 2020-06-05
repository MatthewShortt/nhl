import React, { createRef }              from 'react';
import PlayerCardSwap                    from '#components/player-cards/player-card-swap';
import { addPick, restorePickSwap }      from '#domain/picks/actions';
import { useStateValue }                 from '#state';
import { PlayerSwapModalConfirmElement } from './player-swap-modal-confirm';
import './player-swap-modal-confirm.css';


function Body() {

    const [{ pickSwap: { swapIn, swapOut } }, dispatch] = useStateValue();

    const swapInDivRef = createRef();
    const swapOutDivRef = createRef();
    const paragraphRef = createRef();
    const buttonRef = createRef();

    return(
        <>
            <p ref={paragraphRef} className='uk-text-muted'>Swap in <span className='uk-text-bold uk-text-uppercase'>{swapIn.name}</span> for <span className='uk-text-bold uk-text-uppercase'>{swapOut.name}</span>?</p>
            <div className='uk-text-center' data-uk-grid={true}>
                <div ref={swapInDivRef} className='uk-width-expand uk-animation-slide-left'>
                    <PlayerCardSwap id={swapIn.id} name={swapIn.name} team={swapIn.team} swapIn={true}/>
                </div>
                <div ref={swapOutDivRef} className='uk-width-expand uk-animation-slide-right'>
                    <PlayerCardSwap id={swapOut.id} name={swapOut.name} team={swapOut.team} swapIn={false}/>
                </div>
            </div>

            <div className='uk-width-1-1 uk-text-center'>
                <button ref={buttonRef} className='uk-button uk-button-primary' type='button' onClick={() => confirmSwap(swapOut, swapIn)}>Swap</button>
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
        const animations = getAnimations();

        addPick(dispatch, { position, attributes: { id, name, team } });
        addAnimations(animations);

        setTimeout(() => {
            PlayerSwapModalConfirmElement.hide();
            reset(animations);
        }, 1500);
    }

    function getAnimations() {
        return [
            { elClassList: swapInDivRef.current.classList, clazz: 'slide-right-scale-up' },
            { elClassList: swapOutDivRef.current.classList, clazz: 'slide-right-fade-out' },
            { elClassList: paragraphRef.current.classList, clazz: 'fade-out' },
            { elClassList: buttonRef.current.classList, clazz: 'fade-out' }
        ];
    }

    function addAnimations(animations) {
        animations.map(({elClassList, clazz}) => elClassList.add(clazz));
    }

    function removeAnimations(animations) {
        animations.map(({elClassList, clazz}) => elClassList.remove(clazz));
    }

    function reset(animations) {
        setTimeout(() => {
            restorePickSwap(dispatch);
            removeAnimations(animations);
        }, 100);
    }
}

export default Body;
