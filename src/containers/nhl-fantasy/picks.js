import React, { useEffect }      from 'react';
import { useStateValue }         from '#state';
import { getPicks }              from '#domain/picks/actions';
import { getPlayoffSkaterStats } from '#domain/stats/playoff-skater/actions';
import PlayerRow                 from '#components/player-row/player-row';
import './nhl-fantasy.css';

function Picks() {

    const [{ user: { token }, picks: { players }, statsPlayoffPlayer }, dispatch] = useStateValue();
    useEffect(() => {
        getPicks(dispatch, { token });
        getPlayoffSkaterStats(dispatch, { token });
    }, [dispatch, token]);

    //TODO: extract
    const eastF = ['ef1', 'ef2', 'ef3'];
    const eastD = ['ed1', 'ed2'];
    const eastG = ['eg'];
    const east  = [...eastF, ...eastD, ...eastG];
    const westF = ['wf1', 'wf2', 'wf3'];
    const westD = ['wd1', 'wd2'];
    const westG = ['wg'];
    const west  = [...westF, ...westD, ...westG];

    const tableConfig = {
        headers: ['Name', 'Team', 'Total'],
        keys: ['name', 'team', 'total']
    };

    return (
        <div>
            <h2>My Picks</h2>

            <h3>East</h3>
            <PlayerRow players={players} conference={east}/>

            <h3>West</h3>
            <PlayerRow players={players} conference={west}/>

            <h3>Table</h3>
            <div className="uk-overflow-auto">
                <table
                    className="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left uk-text-small">
                    <thead>
                    <tr>
                        <th/>
                        {/*<th/>*/}
                        {tableConfig.headers.map((header, i) =>
                            <th
                                key={`header${i}`}
                                accessKey={header}
                                onClick={event => console.log(event.target.accessKey)}
                            >
                                {header}
                            </th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {statsPlayoffPlayer.stats.map((player, j) =>
                        <tr>
                            <td>
                                <button
                                    className='uk-button uk-button-link uk-text-success'
                                    data-uk-icon='icon: plus-circle; ratio: 1.1;'
                                    onClick={() => console.log({ id: player.id, name: player.name, team: player.team })}/>
                            </td>
                            {/*<td>*/}
                            {/*    <img className='uk-border-circle uk-box-shadow-small cursor-pointer' width='50' src={`https://assets.nhle.com/mugs/nhl/20192020/${player.team}/${player.id}.png`} alt={player.name}/>*/}
                            {/*</td>*/}
                            {tableConfig.keys.map((key, i) =>
                                <td>
                                    {player[key]}
                                </td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Picks;