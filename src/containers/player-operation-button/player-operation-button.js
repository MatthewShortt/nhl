import React                   from 'react';
import { useDispatch }         from '#state';
import { addPick, removePick } from '#domain/picks/actions';

function PlayerOperationButton({ isSelected, availablePickSlots, picks, id, name, team }) {

    const dispatch = useDispatch();

    return (
        <>
            {
                !isSelected
                    ? <button className='uk-button uk-button-link uk-text-success' data-uk-icon='icon: plus-circle; ratio: 1.1;' onClick={addPlayer}/>
                    : <button className='uk-button uk-button-link uk-text-danger'  data-uk-icon='icon: minus-circle; ratio: 1.1;' onClick={removePlayer}/>
            }
        </>
    )

    function addPlayer() {
        availablePickSlots.length
            ? addPick(dispatch, { position: availablePickSlots[0], attributes: { id, name, team } })
            : alert('All Positions Filled!');
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