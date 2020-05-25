import React, { useEffect, useState } from 'react';
import PlayerOperationButton          from '#containers/player-operation-button/player-operation-button';
import { PICK_KEYS }                  from '#domain/picks/constants';

function SelectionTable({ stats, config, picks, activeFilter }) {

    const [pickIds, setPickIds]                       = useState(getPickIds());
    const [availablePickSlots, setAvailablePickSlots] = useState(getAvailablePickSlots());
    const [tablePlayers, setTablePlayers]             = useState(stats);

    useEffect(() => {
        setTablePlayers(stats);
    }, [activeFilter]);

    useEffect(() => {
        setPickIds(getPickIds());
        setAvailablePickSlots(getAvailablePickSlots());
    }, [activeFilter, picks]);

    return (
        <div className='uk-overflow-auto'>
            <form className='uk-search uk-search-default uk-width-1-1' onSubmit={e => e.preventDefault()}>
                <span data-uk-search-icon/>
                <input className='uk-search-input' type='search' placeholder='Search...' onChange={searchPlayers}/>
            </form>
            <table className='uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left uk-text-small uk-table-middle'>
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
                {tablePlayers.map((player, i) =>
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

    /**
     * Extracts the player ids of the users picks into an array
     *
     * @returns {array} - player ids of the users picks
     */
    function getPickIds() {
        return Object.keys(picks).map(key => picks[key].id);
    }

    /**
     * Filters the current players by the contents of the search field
     *
     * @param event : SyntheticEvent
     */
    function searchPlayers(event) {
        setTablePlayers(stats.filter(player => player.name.toLowerCase().search(event.target.value.trim()) !== -1));
    }

}

export default SelectionTable;