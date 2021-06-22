import React, { useEffect, useMemo, useState } from 'react';
import { useStateValue }            from '#state';
import PlayerColumn                 from '#components/player-column/player-column';
import { useUserTotals }            from './hooks';
import { useLocation }              from 'react-router-dom';

const DEFAULT_ROUND = '3';

const PickCompare = () => {

    const location = useLocation();
    const [{ user: { token, username } }] = useStateValue();

    const [round, setRound] = useState(DEFAULT_ROUND);
    const [secondaryUsername, setSecondaryUsername] = useState(null);

    useEffect(() => {
        const second = location?.state?.username;
        const secondUsername = second !== username ? second : null;
        setSecondaryUsername(secondUsername);
    }, [location, username]);


    const [primaryUser] = useUserTotals(token, username, round);
    const [secondaryUser] = useUserTotals(token, secondaryUsername, round);

    const usersTotals = useMemo(() => [primaryUser, secondaryUser].filter(({ data }) => data), [primaryUser, secondaryUser]);
    const userNames = useMemo(() => [username, secondaryUsername], [username, secondaryUsername]);

    return (
        <>
            <form className='uk-width-1-1'>
                <select className="uk-select" onChange={e => setRound(e.target.value)}>
                    <option value='3'>Round 3</option>
                    <option value='2'>Round 2</option>
                    <option value='1'>Round 1</option>
                </select>
            </form>
            <div className={`uk-flex uk-child-width-1-${usersTotals.length}`}>
                {usersTotals.map(({ data }, i) => (
                    <div key={`player_column_${i}`} className='uk-padding-small'>
                        <h5 className='uk-heading-divider'>{userNames[i]}</h5>
                        <PlayerColumn data={data} round={round}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PickCompare;