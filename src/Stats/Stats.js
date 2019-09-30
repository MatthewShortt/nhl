import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetSkaters} from './StatsActions';

export function Stats({skaters, getSkaters}) {

    useEffect(
        () => {
            getSkaters({'type': 'skaters'});
        },
        [getSkaters]
    );

    const tableHeaders = ['Name', 'Team', 'Pos', 'Tot', 'G', 'A', 'PPG', 'PPA', 'SHG', 'SHA', '+/-', 'S', 'H', 'B'];
    const tableRows    = ['playerName', 'team', 'position', 'total', 'goals', 'assists', 'ppGoals', 'ppAssists', 'shGoals', 'shAssists', 'plusMinus', 'shots', 'hits', 'blockedShots'];

    return (
        <div className="uk-height-viewport uk-background-default uk-margin-medium-bottom">
            <button onClick={event => {
                GetStats(event, getSkaters, {'type': 'goalies'})
            }}>Get Player Stats</button>
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">NHL Fantasy Table</h1>
                <div className="uk-align-center uk-width-1-1@m">
                    <div className="uk-overflow-auto">
                        <table
                            className="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left">
                            <thead>
                            <tr>
                                <th></th>
                                {tableHeaders.map((header, i) =>
                                    <th>{header}</th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {skaters.slice(0, 100).map((player, i) =>
                                <tr>
                                    <td>{i + 1}</td>
                                    {tableRows.map((row, j) =>
                                        <td>{player[row]}</td>
                                    )}
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

    function GetStats(event, getSkaters, params) {
        event.preventDefault();
        getSkaters(params);
    }

}

function mapStateToProps(state) {
    return {
        skaters: state.skaters,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => ({
    getSkaters: (params) => dispatch(GetSkaters(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
