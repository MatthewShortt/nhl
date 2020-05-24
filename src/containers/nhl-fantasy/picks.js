import React, { useEffect }                                                    from 'react';
import { useStateValue }                                                       from '#state';
import { getPicks, updatePickFilters }                                         from '#domain/picks/actions';
import { DEFENCE, EAST, EAST_PICKS, FORWARD, GOALIE, TEAMS, WEST, WEST_PICKS } from '#domain/picks/constants';
import { getPlayoffGoalieStats, getPlayoffSkaterStats }                        from '#domain/stats/playoff-skater/actions';
import PlayerRow                                                               from '#components/player-row/player-row';
import SelectionTableOption                                                    from '#components/selection-table-option/selection-table-option';
import SelectionTable                                                          from '#containers/selection-table/selection-table';
import './nhl-fantasy.css';

function Picks() {

    const [{ user: { token }, picks: { players }, pickFilters: { position, teams, active }, playoffStats }, dispatch] = useStateValue();
    useEffect(() => {
        getPicks(dispatch, { token });
        getPlayoffSkaterStats(dispatch, { token });
        getPlayoffGoalieStats(dispatch, { token });
    }, [dispatch, token]);

    const skaterTableConfig = {
        headers: ['Name', 'Team', 'Total'],
        keys: ['name', 'team', 'total']
    };

    return (
        <div>
            <h2>My Picks</h2>

            <h3>East</h3>
            <PlayerRow players={players} conference={EAST_PICKS}/>

            <h3>West</h3>
            <PlayerRow players={players} conference={WEST_PICKS}/>

            <h3 id='selection-table'>Selection Table</h3>
            <form>
                <fieldset className="uk-fieldset">
                    <div className="uk-margin">
                        <select className="uk-select"
                                onChange={updatePickFilterFromEvent}>
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
     * Filters given stats array by position and team.
     *
     * @param stats : Array - Stats to be filtered
     * @returns {Array}
     */
    function getFilteredStats(stats) {
        return stats.filter(player => player.position === position && teams.includes(player.team));
    }

    /**
     * Dispatches an update pick filter event with the target values of the selected option.
     *
     * @param event : SyntheticEvent
     */
    function updatePickFilterFromEvent(event) {
        const { position, teams, active } = JSON.parse(event.target.value);
        updatePickFilters(dispatch, { position, teams, active });
    }
}

export default Picks;