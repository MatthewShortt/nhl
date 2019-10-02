import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetSkaters} from './StatsActions';
import {UpdateTableConfig} from './StatsTableActions';

export function Stats({skaters, tableConfig, getSkaters, updateTableConfig}) {

    useEffect(
        () => {
            getSkaters({'type': 'skaters', 'startYear': '20182019', 'endYear': '20182019'});
        },
        [getSkaters]
    );

    const years = ['2015-2016', '2016-2017', '2017-2018', '2018-2019'];

    return (
        <div className="uk-height-viewport uk-background-default uk-margin-medium-bottom">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">NHL Fantasy Table</h1>
                <div className="uk-align-center uk-width-1-1@m">
                    <form onSubmit={event => {
                        GetStats(event, getSkaters)
                    }}>
                        <div className="uk-margin uk-grid-small" data-uk-grid>
                            <div className="uk-form-controls uk-width-1-1">
                                <select className="uk-select uk-width-1-1 uk-margin-small" name="type" id="form-horizontal-select">
                                    <option>skaters</option>
                                    <option>goalies</option>
                                </select>
                            </div>
                            <div className="uk-width-1-2@s">
                                <select className="uk-select" name="startYear" id="form-horizontal-select">
                                    {years.map((year, i) =>
                                        <option value={year.replace('-','')} selected={"selected"}>{year}</option>
                                    )}
                                </select>
                            </div>
                            <div className="uk-width-1-2@s">
                                <select className="uk-select" name="endYear" id="form-horizontal-select">
                                    {years.map((year, i) =>
                                        <option value={year.replace('-','')} selected={"selected"}>{year}</option>
                                    )}
                                </select>
                            </div>
                            <div className="uk-width-1-3@s uk-margin-small-top uk-align-center">
                                <button className="uk-animation-slide-bottom uk-button uk-button-primary uk-width-1-1">
                                    Refresh Stats
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="uk-overflow-auto">
                        <table
                            className="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left">
                            <thead>
                            <tr>
                                <th></th>
                                {tableConfig.headers.map((header, i) =>
                                    <th>{header}</th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {skaters.slice(0, 500).map((player, i) =>
                                <tr>
                                    <td>{i + 1}</td>
                                    {tableConfig.keys.map((row, j) =>
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

    function GetStats(event, getSkaters) {
        event.preventDefault();
        const params = {
            type: event.target.type.value,
            startYear: event.target.startYear.value,
            endYear: event.target.endYear.value
        };
        getSkaters(params);
        updateTableConfig(params);
    }

}

function mapStateToProps(state) {
    return {
        skaters: state.skaters,
        tableConfig: state.tableConfig,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => ({
    getSkaters: (params) => dispatch(GetSkaters(params)),
    updateTableConfig: (params) => dispatch(UpdateTableConfig(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
