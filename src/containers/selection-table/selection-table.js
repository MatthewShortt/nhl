import React                 from 'react';
import PlayerOperationButton from '#containers/player-operation-button/player-operation-button';
import { PICK_KEYS }         from '#domain/picks/constants';

function SelectionTable({ stats, config, picks, activeFilter }) {

    const pickIds            = Object.keys(picks).map(key => picks[key].id);
    const availablePickSlots = getAvailablePickSlots();

    return (
        <div className="uk-overflow-auto">
            <table
                className="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left uk-text-small">
                <thead>
                <tr>
                    <th/>
                    {config.headers.map((header, i) =>
                        <th key={`header${i}`}>
                            {header}
                        </th>
                    )}
                </tr>
                </thead>
                <tbody>
                {stats.map((player, i) =>
                    <tr key={`player_row_${i}`}>
                        <td>
                            <PlayerOperationButton isSelected={isSelected(player.id)} availablePickSlots={availablePickSlots} picks={picks} id={player.id} name={player.name} team={player.team} />
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

    /**
     * Whether or not the given player id is part of the users picks.
     *
     * @param id - player id
     * @returns {boolean} - if the given player is already a selected pick
     */
    function isSelected(id) {
        return pickIds.includes(id)
    }

    /**
     * Computes the available pick slots for the active filter.
     * If an empty array is returned all pick slots are taken for the active filter.
     *
     * @returns {array} - available pick slots for the given active filter
     */
    function getAvailablePickSlots() {
        return PICK_KEYS[activeFilter].filter(key => picks[key].id === '');
    }

}

export default SelectionTable;