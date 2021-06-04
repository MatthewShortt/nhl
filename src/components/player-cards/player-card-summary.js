import React, { useMemo } from 'react';

const PlayerCardSummary = ({ name, team, total }) => {
    const initialedName = useMemo(() => {
        const [first, last] = name.split(' ');
        return `${first?.charAt(0)}. ${last}`;
    }, [name]);

    return (
        <div className='uk-flex uk-flex-middle'>
            <div className='uk-flex-none'>
                <img src={`https://assets.nhle.com/logos/nhl/svg/${team}_light.svg`} height='20' width='20' alt={name}/>
            </div>
            <span className='uk-margin-small-left uk-text-small uk-text-light uk-flex-auto'>{initialedName}</span>
            <span className='uk-flex-right uk-flex-none uk-text-bold'>{total}</span>
        </div>
    );
};

export default PlayerCardSummary;



