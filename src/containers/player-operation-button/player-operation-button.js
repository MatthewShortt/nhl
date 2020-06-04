import React                                   from 'react';
import { useDispatch }                         from '#state';
import { addPick, removePick, updatePickSwap } from '#domain/picks/actions';
import { PlayerSwapModalElement }              from '#containers/player-swap-modal/player-swap-modal';
import { PICK_KEYS }                           from '#domain/picks/constants';
import _                                       from 'lodash';

function PlayerOperationButton({ isSelected, activeFilter, availablePickSlots, picks, id, name, team }) {

    const dispatch = useDispatch();

    return (
        <>
            {
                !isSelected
                    ? <button className='uk-button uk-button-link uk-text-success' data-uk-icon='icon: plus-circle; ratio: 1.1;' onClick={addPlayer}/>
                    : <button className='uk-button uk-button-link uk-text-danger' data-uk-icon='icon: minus-circle; ratio: 1.1;' onClick={removePlayer}/>
            }
        </>
    )

    function addPlayer() {
        availablePickSlots.length
            ? addPick(dispatch, { position: availablePickSlots[0], attributes: { id, name, team } })
            : swapPlayer();
    }

    function swapPlayer() {
        const swapOutOptions = Object.entries(_.pick(picks, PICK_KEYS[activeFilter])).map(([key, value]) => { return {...value, position: key}; });

        updatePickSwap(dispatch, { swapIn: { id, team, name, position: 'swapIn' }, swapOutOptions })
        PlayerSwapModalElement.show();
    }

    function getPosition() {
        return Object.keys(picks).find(key => picks[key].id === id);
    }

    function removePlayer() {
        const position = getPosition();
        removePick(dispatch, { position });
    }

}

export default PlayerOperationButton;