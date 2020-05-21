import React from 'react';

function PlayerOperationButton({ picks, id }) {

    //TODO: add onclick functionality to add/drop pick

    return (
        <>
            {
                Object.keys(picks).filter(key => picks[key].id === id).length === 0
                    ? <button className='uk-button uk-button-link uk-text-success' data-uk-icon='icon: plus-circle; ratio: 1.1;'/>
                    : <button className='uk-button uk-button-link uk-text-danger'  data-uk-icon='icon: minus-circle; ratio: 1.1;'/>
            }
        </>
    )

}

export default PlayerOperationButton;