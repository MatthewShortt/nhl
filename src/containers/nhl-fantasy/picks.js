import React, { useEffect }                                                         from 'react';
import { useStateValue }                                                            from '#state';
import { getPicks, updatePickFilters }                                              from '#domain/picks/actions';
import { DEFENCE, EAST_PICKS, EAST_TEAMS, FORWARD, GOALIE, WEST_PICKS, WEST_TEAMS } from '#domain/picks/constants';
import { getPlayoffGoalieStats, getPlayoffSkaterStats }                             from '#domain/stats/playoff-skater/actions';
import PlayerRow                                                                    from '#components/player-row/player-row';
import SelectionTable                                                               from '#containers/selection-table/selection-table';
import './nhl-fantasy.css';

function Picks() {

    const [{ user: { token }, picks: { players }, pickFilters: { position, teams }, playoffStats }, dispatch] = useStateValue();
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
            <PlayerRow players={players} conference={WEST_PICKS} onClick={event => console.log({ ...event })}/>

            <h3>Selection Table</h3>
            <form>
                <fieldset className="uk-fieldset">
                    <div className="uk-margin">
                        <select className="uk-select"
                                onChange={updatePickFilterFromEvent}>
                            <option value={`{ "position": "${FORWARD}", "teams": "${EAST_TEAMS}" }`}>East Forwards</option>
                            <option value={`{ "position": "${DEFENCE}", "teams": "${EAST_TEAMS}" }`}>East Defence</option>
                            <option value={`{ "position": "${GOALIE}" , "teams": "${EAST_TEAMS}" }`}>East Goalies</option>
                            <option value={`{ "position": "${FORWARD}", "teams": "${WEST_TEAMS}" }`}>West Forwards</option>
                            <option value={`{ "position": "${DEFENCE}", "teams": "${WEST_TEAMS}" }`}>West Defence</option>
                            <option value={`{ "position": "${GOALIE}" , "teams": "${WEST_TEAMS}" }`}>West Goalies</option>
                        </select>
                    </div>
                </fieldset>
            </form>
            {
                position === 'G'
                    ? <SelectionTable stats={getFilteredStats(playoffStats.goalie)} config={skaterTableConfig} picks={players} id="selection-table"/>
                    : <SelectionTable stats={getFilteredStats(playoffStats.skater)} config={skaterTableConfig} picks={players} id="selection-table"/>
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
        const { position, teams } = JSON.parse(event.target.value);
        updatePickFilters(dispatch, { position, teams });
    }
}

export default Picks;