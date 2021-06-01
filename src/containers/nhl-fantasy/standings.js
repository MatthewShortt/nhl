import React, { useEffect } from 'react';
import { useStateValue }    from '#state';
import { getStandings }     from '#domain/standings/actions';
import StandingsTable       from '../tables/standings/standings-table';


function Standings() {

    const [{ user: { token }, standings: { data } }, dispatch] = useStateValue();

    useEffect(() => {
        getStandings(dispatch, token, ['1']);
    }, [dispatch, token]);

    return (
        <div>
            <h2>Standings</h2>
            <StandingsTable standings={data}/>
        </div>
    );
}

export default Standings;