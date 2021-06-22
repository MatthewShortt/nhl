import React, { useMemo } from 'react';

const PlayerCardSummary = ({ name, team, total }) => {
    const initialedName = useMemo(() => {
        if (name) {
            const [first, last] = name.split(' ');
            return `${first?.charAt(0)}. ${last}`;
        } else {
            return 'Unselected'
        }
    }, [name]);

    const [imgSrc, imgHeight] = useMemo(() => team
            ? [`https://assets.nhle.com/logos/nhl/svg/${team}_light.svg`, '20px']
            : ['http://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg', '17px']
    , [team]);

    return (
        <div className='uk-flex uk-flex-middle'>
            <div className='uk-flex-left'>
                <img src={imgSrc} style={{width: '20px', height: imgHeight}} alt={name || 'unselected'}/>
            </div>
            <span className='uk-margin-small-left uk-text-small uk-text-light uk-flex-auto'>{initialedName}</span>
            <span className='uk-flex-right uk-flex-none uk-text-bold'>{total}</span>
        </div>
    );
};

export default PlayerCardSummary;
