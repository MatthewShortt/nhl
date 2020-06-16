import React, { createRef } from 'react';

function StandingsTable({ standings }) {

    const tableDivRef = createRef();

    return (
        <div className='uk-inline uk-width-1-1'>
            <form className='uk-search uk-search-default uk-width-1-1' onSubmit={e => e.preventDefault()}>
                <span data-uk-search-icon={true}/>
                <input className='uk-search-input' type='search' placeholder='Search...' onChange={searchPlayers}/>
            </form>
            <div ref={tableDivRef} className='uk-overflow-auto uk-height-large uk-margin-medium-top uk-box-shadow-large'>
                <table className='uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-center uk-text-small uk-table-middle'>
                    <thead className='uk-background-secondary'>
                        <tr>
                            <th className='uk-table-shrink'>Pos.</th>
                            <th className='uk-table-expand uk-text-left'>User</th>
                            <th className='uk-table-shrink'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {standings.map((data, i) =>
                        <tr key={`standings_row_${i}`}>
                            <td>{i+1}</td>
                            <td className='uk-text-left'>{data.user.username}</td>
                            <td>{data.total}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <span className='uk-position-bottom-right uk-icon-button uk-background-secondary cursor-pointer' data-uk-icon='chevron-up' onClick={() => tableDivRef.current.scrollTo({top: 0, behavior: 'smooth'})}/>
        </div>
    );

    /**
     * Filters the current players by the contents of the search field
     *
     * @param event : SyntheticEvent
     */
    function searchPlayers(event) {
        // setTablePlayers(stats.filter(player => player.name.toLowerCase().search(event.target.value.trim().toLowerCase()) !== -1));
    }

}

export default StandingsTable;