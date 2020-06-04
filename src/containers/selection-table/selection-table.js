import React, { createRef, useEffect, useMemo, useState } from 'react';
import PlayerOperationButton                              from '#containers/player-operation-button/player-operation-button';
import { PICK_KEYS }                                      from '#domain/picks/constants';
import PlayerSwapModal                                    from '#containers/player-swap-modal/player-swap-modal';
import PlayerSwapModalConfirm                             from '#containers/player-swap-modal/player-swap-modal-confirm';

function SelectionTable({ stats, config, picks, activeFilter }) {

    const pickIds            = useMemo(() => getPickIds(picks), [picks]);
    const availablePickSlots = useMemo(() => getAvailablePickSlots(activeFilter, picks), [activeFilter, picks]);

    const [tablePlayers, setTablePlayers] = useState(stats);
    useEffect(() => setTablePlayers(stats), [activeFilter, stats]);

    const tableDivRef = createRef();

    return (
        <div className='uk-inline uk-width-1-1'>
            <form className='uk-search uk-search-default uk-width-1-1' onSubmit={e => e.preventDefault()}>
                <span data-uk-search-icon/>
                <input className='uk-search-input' type='search' placeholder='Search...' onChange={searchPlayers}/>
            </form>
            <div ref={tableDivRef} className='uk-overflow-auto uk-height-large uk-margin-medium-top uk-box-shadow-large'>
                <table className='uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left uk-text-small uk-table-middle'>
                    <thead className='uk-background-secondary'>
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
                                <PlayerOperationButton isSelected={isSelected(player.id)} activeFilter={activeFilter} availablePickSlots={availablePickSlots} picks={picks} id={player.id} name={player.name} team={player.team} />
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
            <span className='uk-position-bottom-right uk-icon-button uk-background-secondary cursor-pointer' data-uk-icon='chevron-up' onClick={() => tableDivRef.current.scrollTo({top: 0, behavior: 'smooth'})}/>
            <PlayerSwapModal/>
            <PlayerSwapModalConfirm/>
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
     * @param activeFilter - the active filter being used
     * @param picks - the user's picks
     * @returns {array} - available pick slots for the given active filter
     */
    function getAvailablePickSlots(activeFilter, picks) {
        return PICK_KEYS[activeFilter].filter(key => picks[key].id === '');
    }

    /**
     * Extracts the player ids of the users picks into an array
     *
     * @param picks - the user's picks
     * @returns {array} - player ids of the users picks
     */
    function getPickIds(picks) {
        return Object.keys(picks).map(key => picks[key].id);
    }

    /**
     * Filters the current players by the contents of the search field
     *
     * @param event : SyntheticEvent
     */
    function searchPlayers(event) {
        setTablePlayers(stats.filter(player => player.name.toLowerCase().search(event.target.value.trim().toLowerCase()) !== -1));
    }

}

export default SelectionTable;