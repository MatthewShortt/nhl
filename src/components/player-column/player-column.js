import React, { useMemo }                      from 'react';
import Division                                from './division';
import { useIcon, EAST, WEST, CENTRAL, NORTH } from './hooks';

const filterPlayers = (data, filter) => Object.entries(data)
    .filter(([key]) => key.charAt(0) === filter)
    .map(([, value]) => value);

const PlayerColumn = ({ data = {}, round }) => {
    const icons = useIcon();

    const divisions = useMemo(() => [
        { division: EAST, players: filterPlayers(data, 'e'), show: true },
        { division: WEST, players: filterPlayers(data, 'w'), show: true },
        { division: CENTRAL, players: filterPlayers(data, 'c'), show: round !== '3' },
        { division: NORTH, players: filterPlayers(data, 'n'), show: round !== '3' }
    ], [data, round])

    return (
        <>
            {divisions
                .filter(({ show }) => show)
                .map(({ division, players }, i) => (
                    <Division
                        key={`division-${division}-${i}`}
                        division={division}
                        players={players}
                        icon={icons[division]}
                    />))
            }
            <hr className='uk-divider-small'/>
            <div className='uk-flex'>
                <span className='uk-flex-auto uk-text-light'>Total</span>
                <span className='uk-flex-none uk-text-bold'>{data.total}</span>
            </div>
        </>
    );
};

export default PlayerColumn;