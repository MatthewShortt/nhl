import React, { useMemo, useState } from 'react';
import { useStateValue }            from '#state';
import PlayerColumn                 from '#components/player-column/player-column';
import { useUserTotals }            from './hooks';

const PickCompare = ({ secondaryUsername }) => {
    const [round, setRound] = useState('2');
    const [{ user: { token, username } }] = useStateValue();

    const [primaryUser] = useUserTotals(token, username, round);
    const [secondaryUser] = useUserTotals(token, secondaryUsername, round);

    const usersTotals = useMemo(() => [primaryUser, secondaryUser].filter(({ data }) => data), [primaryUser, secondaryUser]);
    const userNames = useMemo(() => [username, secondaryUsername], [username, secondaryUsername]);

    return (
        <>
            <form className='uk-width-1-1' onChange={e => setRound(e.target.value)}>
                <select className="uk-select">
                    <option value='2'>Round 2</option>
                    <option value='1'>Round 1</option>
                </select>
            </form>
            <div className={`uk-flex uk-child-width-1-${usersTotals.length}`}>
                {usersTotals.map(({ data }, i) => (
                    <div key={`player_column_${i}`} className='uk-padding-small'>
                        <h5 className='uk-heading-divider'>{userNames[i]}</h5>
                        <PlayerColumn data={data}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PickCompare;