import React from 'react';
import PlayerOperationButton from '#containers/player-operation-button/player-operation-button'

function SelectionTable({ stats, config, picks }) {


    return (
        <div className="uk-overflow-auto">
            <table
                className="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left uk-text-small">
                <thead>
                <tr>
                    <th/>
                    {config.headers.map((header, i) =>
                        <th
                            key={`header${i}`}
                            // accessKey={header}
                            // onClick={event => console.log(event.target.accessKey)}
                        >
                            {header}
                        </th>
                    )}
                </tr>
                </thead>
                <tbody>
                {stats.map((player, i) =>
                    <tr key={`player_row_${i}`}>
                        <td>
                            <PlayerOperationButton picks={picks} id={player.id}/>
                        </td>
                        {config.keys.map((key, j) =>
                            <td key={`player_cell_${i}-${j}`}>
                                {player[key]}
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );

}

export default SelectionTable;