import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {GetSkaters} from './StatsActions';
import {Filter} from './StatsFilterActions';
import {UpdateTableConfig} from './StatsTableActions';
import {UpdateYears} from "./StatsYearsActions";

export function Stats({skaters, filters, tableConfig, years, getSkaters, filterSkaters, updateTableConfig, updateYears}) {

    useEffect(
        () => {
            getSkaters({'type': 'skaters', 'startYear': '20192020', 'endYear': '20192020'});
        },
        [getSkaters]
    );

    let tableRows;

    if (skaters.loading) {
        tableRows =
            <tr>
                <td className='uk-text-center@s' colSpan='100%'>
                    <div data-uk-spinner></div>
                </td>
            </tr>
    } else if (skaters.error) {
        tableRows =
            <tr>
                <td className='uk-text-center@s' colSpan='100%'><span className="uk-label uk-label-danger">Error loading stats. Please try again.</span></td>
            </tr>
    } else {
        let noData =
            <tr>
                <td className='uk-text-center@s' colSpan='100%'><span className="uk-label uk-label-warning">No players.</span></td>
            </tr>;

        // look into reduce rather than filter & map for processing time. (WE only want to iterate through once)
        tableRows =
            skaters.data.stats
                .filter(skater => {
                    if(filters.position.length) return filters.position.includes(skater.position);
                    return true
                })
                .slice(0, 300)
                .map((player, i) =>
                    <tr key={`row${i}`}>
                        <td  key={`skatercol${i}-0`}>{i + 1}</td>
                        {tableConfig.keys.map((row, j) =>
                            <td key={`skatercol${i}-${j}`}>{player[row]}</td>
                        )}
                    </tr>
                );

        if (!tableRows.length) tableRows = noData;
    }

    let positionFilter;

    if (skaters.data.type !== 'goalies') {
        positionFilter =
            <div className="uk-width-1-2@s">
                <div className="uk-width-1-1"><label>Position</label></div>
                <div className="uk-width-1-1">
                    <label><input className="uk-checkbox" type="checkbox" value='{"type":"position","value":"C"}'/> C</label>
                    <label className='uk-margin-small-left'><input className="uk-checkbox" type="checkbox" value='{"type":"position","value":"L"}'/> L</label>
                    <label className='uk-margin-small-left'><input className="uk-checkbox" type="checkbox" value='{"type":"position","value":"R"}'/> R</label>
                    <label className='uk-margin-small-left'><input className="uk-checkbox" type="checkbox" value='{"type":"position","value":"D"}'/> D</label>
                </div>
            </div>
    }


    return (
        <div className="uk-height-viewport uk-background-default uk-margin-medium-bottom">
            <div className="uk-container uk-text-center@m">
                <h1 className="uk-heading-divider uk-margin-top">NHL Fantasy Table</h1>
                <div className="uk-align-center uk-width-1-1@m">
                    <form onSubmit={event => {GetStats(event, getSkaters)}}>
                        <div className="uk-grid-small" data-uk-grid>
                            <div className="uk-form-controls uk-width-1-1">
                                <select className="uk-select uk-width-1-1 uk-margin-small" name="type"
                                        id="form-horizontal-select">
                                    <option>skaters</option>
                                    <option>goalies</option>
                                </select>
                            </div>
                            <div className="uk-width-1-2@s">
                                <select className="uk-select" name="startYear" id="form-horizontal-select"  onChange={event => {UpdateSearchYears(event)}}>
                                    {years.startYear.map((year, i) =>
                                        <option key={`startyear${i}`} value={year} selected='selected'>{year}</option>
                                    )}
                                </select>
                            </div>
                            <div className="uk-width-1-2@s">
                                <select className="uk-select" name="endYear" id="form-horizontal-select" onChange={event => {UpdateSearchYears(event)}}>
                                    {years.endYear.map((year, i) =>
                                        <option key={`endyear${i}`} value={year} selected={year === years.selectedEndYear}>{year}</option>
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
                    <h3 className="uk-margin-remove-top uk-text-left uk-heading-line"><span>Filters</span></h3>

                    <div className="uk-text-left">
                        <form onChange={event => {FilterTable(event)}}>
                            <div className="uk-grid-small" data-uk-grid>
                                {positionFilter}
                            </div>
                        </form>
                    </div>

                    <hr/>
                    <div className="uk-overflow-auto">
                        <table
                            className="uk-table uk-table-small uk-table-divider uk-table-striped uk-table-hover uk-text-left uk-text-small">
                            <thead>
                            <tr>
                                <th></th>
                                {tableConfig.headers.map((header, i) =>
                                    <th key={`header${i}`} value={header} onClick={event => {
                                        SortTable(event, skaters)
                                    }}>{header}</th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {tableRows}
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
            startYear: event.target.startYear.value.replace('-', ''),
            endYear: event.target.endYear.value.replace('-', '')
        };
        getSkaters(params);
        updateTableConfig(params);
    }

    function SortTable(event, skaters) {
        console.log(event.target.innerHTML);
    }

    function FilterTable(event) {
        let {type, value} = JSON.parse(event.target.value);
        let params = {type, value, checked: event.target.checked};
        filterSkaters(params);
        getSkaters({filter: true});
    }

    function UpdateSearchYears(event) {
        let params = {type: event.target.name, value: event.target.value};
        updateYears(params);
    }

}

function mapStateToProps(state) {
    return {
        skaters: state.skaters,
        filters: state.filters,
        tableConfig: state.tableConfig,
        years: state.years,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => ({
    getSkaters: (params) => dispatch(GetSkaters(params)),
    filterSkaters: (params) => dispatch(Filter(params)),
    updateTableConfig: (params) => dispatch(UpdateTableConfig(params)),
    updateYears: (params) => dispatch(UpdateYears(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
