import React, { useEffect }                                                    from 'react';
import { useStateValue }                                                       from '#state';
import { getPicks, updatePicks, updatePickFilters }                            from '#domain/picks/actions';
import { DEFENCE, EAST, EAST_PICKS, FORWARD, GOALIE, TEAMS, WEST, WEST_PICKS } from '#domain/picks/constants';
import { getPlayoffGoalieStats, getPlayoffSkaterStats }                        from '#domain/stats/playoff-skater/actions';
import PlayerRow                                                               from '#components/player-row/player-row';
import SelectionTableOption                                                    from '#components/selection-table-option/selection-table-option';
import SelectionTable                                                          from '#containers/tables/selection/selection-table';
import './nhl-fantasy.css';

function Picks() {

    const [{
        user: { token },
        picks: { players },
        pickFilters: { position, teams, active },
        playoffStats
    }, dispatch] = useStateValue();

    useEffect(() => {
        getPicks(dispatch, token);
        getPlayoffSkaterStats(dispatch, token);
        getPlayoffGoalieStats(dispatch, token);
    }, [dispatch, token]);

    const skaterTableConfig = {
        headers: ['Name', 'Team', 'Total'],
        keys: ['name', 'team', 'total']
    };

    return (
        <div>
            <h2>My Picks</h2>

            <h3 className='uk-heading-line'><span>East</span></h3>
            <PlayerRow players={players} conference={EAST_PICKS}/>

            <h3 className='uk-heading-line'><span>West</span></h3>
            <PlayerRow players={players} conference={WEST_PICKS}/>

            <form onSubmit={dispatchUpdatePicks}>
                <button type='submit' className='uk-button uk-button-primary uk-align-center uk-margin-medium-top uk-margin-medium-bottom uk-width-3-4 uk-width-1-2@s'>Submit Picks</button>
            </form>

            <h3 id='selection-table' className='uk-heading-line'><span>Selection Table</span></h3>
            <form>
                <fieldset className="uk-fieldset">
                    <div className="uk-margin">
                        <select className="uk-select"
                                onChange={dispatchUpdatePickFilter}>
                            <SelectionTableOption active={active} player={FORWARD} teams={TEAMS[EAST]} text='East Forwards'/>
                            <SelectionTableOption active={active} player={DEFENCE} teams={TEAMS[EAST]} text='East Defence' />
                            <SelectionTableOption active={active} player={GOALIE}  teams={TEAMS[EAST]} text='East Goalies' />
                            <SelectionTableOption active={active} player={FORWARD} teams={TEAMS[WEST]} text='West Forwards'/>
                            <SelectionTableOption active={active} player={DEFENCE} teams={TEAMS[WEST]} text='West Defence' />
                            <SelectionTableOption active={active} player={GOALIE}  teams={TEAMS[WEST]} text='West Goalies' />
                        </select>
                    </div>
                </fieldset>
            </form>
            {
                position === 'G'
                    ? <SelectionTable stats={getFilteredStats(playoffStats.goalie)} config={skaterTableConfig} picks={players} activeFilter={active}/>
                    : <SelectionTable stats={getFilteredStats(playoffStats.skater)} config={skaterTableConfig} picks={players} activeFilter={active}/>
            }
        </div>
    );

    /**
     * Dispatches an update picks event with the current picks
     *
     * @param event : SyntheticEvent
     */
    function dispatchUpdatePicks(event) {
        event.preventDefault();
        const picks = createPicksPayload(players);
        updatePicks(dispatch, token, { picks })
    }

    /**
     * Dispatches an update pick filter event with the target values of the selected option.
     *
     * @param event : SyntheticEvent
     */
    function dispatchUpdatePickFilter(event) {
        const { position, teams, active } = JSON.parse(event.target.value);
        updatePickFilters(dispatch, { position, teams, active });
    }

    /**
     * Generates pick payload from the players object
     *
     * @param players - Player Object
     * @returns {any} - picks payload
     */
    function createPicksPayload(players) {
        return Object.fromEntries(
            Object.entries(players).map(([key, player]) => [key, player.id])
        )
    }

    /**
     * Filters given stats array by position and team.
     *
     * @param stats : Array - Stats to be filtered
     * @returns {Array}
     */
    function getFilteredStats(stats) {
        return stats.filter(player => player.position === position && teams.includes(player.team));
    }

}

export default Picks;