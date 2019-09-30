import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetSkaters} from './StatsActions';

export function Stats({skaters, getSkaters}) {

    useEffect(
        () => {
            getSkaters();
        },
        [getSkaters]
    );

    return (
        <div className="uk-height-viewport uk-background-default uk-margin-medium-bottom">
            <button onClick={getSkaters}>Get Player Stats</button>
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">NHL Fantasy Table</h1>
                <div className="uk-align-center uk-width-1-1@m">
                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Team</th>
                                    <th>Pos</th>
                                    <th>Tot</th>
                                    <th>G</th>
                                    <th>A</th>
                                    <th>PPG</th>
                                    <th>PPA</th>
                                    <th>SHG</th>
                                    <th>SHA</th>
                                    <th>+/-</th>
                                    <th>S</th>
                                    <th>H</th>
                                    <th>B</th>
                                </tr>
                            </thead>
                            <tbody>
                                {skaters.slice(0, 400).map((player, i) =>
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{player.playerName}</td>
                                        <td>{player.team}</td>
                                        <td>{player.position}</td>
                                        <td>{player.total}</td>
                                        <td>{player.goals}</td>
                                        <td>{player.assists}</td>
                                        <td>{player.ppGoals}</td>
                                        <td>{player.ppAssists}</td>
                                        <td>{player.shGoals}</td>
                                        <td>{player.shAssists}</td>
                                        <td>{player.plusMinus}</td>
                                        <td>{player.shots}</td>
                                        <td>{player.hits}</td>
                                        <td>{player.blockedShots}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

    function GetAllSkaters(event, getSkaters) {
        event.preventDefault();
        getSkaters();
    }

}

function mapStateToProps(state) {
    return {
        skaters: state.skaters,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => ({
    getSkaters: () => dispatch(GetSkaters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
