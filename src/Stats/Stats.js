import React, {useEffect}  from 'react';
import {connect}           from 'react-redux';
import {GetSkaters}        from './StatsActions';
import {Filter}            from './StatsFilterActions';
import {UpdateTableConfig} from './StatsTableActions';
import {UpdateYears}       from "./StatsYearsActions";
import {UpdateDates}       from "./StatsDatePickerActions";
import {Toggle}            from "./StatsSearchToggleActions";
import {Dropdown}          from 'semantic-ui-react';
import {options}           from './TeamOptions';
import {intersection}      from 'lodash';
import {DatePicker}        from "@material-ui/pickers";
import '../App.css';

export function Stats({skaters, filters, tableConfig, years, dates, searchType, getSkaters, filterSkaters, updateTableConfig, updateYears, updateDates, searchToggle}) {

    useEffect(
        () => {
            getSkaters({'type': 'skaters', 'searchType': 'YEARS', 'start': '20192020', 'end': '20192020'});
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
                    // console.log(filters);
                    for (let key in filters) {
                        // console.log(key, skater);
                        if (filters[key].length && intersection(filters[key], skater[key].replace(/\s/g, '').split(',')).length === 0) return false;
                    }
                    return true;
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
            <div className="uk-width-1-5@m uk-width-1-3@s">
                <div className="uk-width-1-1 uk-margin-small-bottom"><label>Position</label></div>
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

                            <div className="uk-width-1-1">
                                <label className="uk-align-left"><input className="uk-radio" type="radio" value="YEARS" name="rangeToggle" onChange={(event) => {ToggleSearch(event)}} checked={searchType === 'YEARS'}/> Search by years</label>
                            </div>
                            <div className="uk-width-1-2@s uk-margin-top">
                                <select className="uk-select" name="startYear" id="form-start-year-select"  onChange={event => {UpdateSearchYears(event)}} disabled={searchType !== 'YEARS'}>
                                    {years.startYear.map((year, i) =>
                                        <option key={`startyear${i}`} value={year} selected='selected'>{year}</option>
                                    )}
                                </select>
                            </div>
                            <div className="uk-width-1-2@s uk-margin-top">
                                <select className="uk-select" name="endYear" id="form-end-year-select" onChange={event => {UpdateSearchYears(event)}} disabled={searchType !== 'YEARS'}>
                                    {years.endYear.map((year, i) =>
                                        <option key={`endyear${i}`} value={year} selected={year === years.selectedEndYear}>{year}</option>
                                    )}
                                </select>
                            </div>

                            <div className="uk-width-1-1">
                                <label className="uk-align-left"><input className="uk-radio" type="radio" value="DATES" name="rangeToggle" onChange={(event) => {ToggleSearch(event)}} checked={searchType === 'DATES'}/> Search by dates</label>
                            </div>
                            <div className="uk-width-1-3@s uk-margin-small-top">
                                <DatePicker
                                    style={{width: '100%'}}
                                    margin="normal"
                                    id="start-date"
                                    label="Start Date"
                                    format="yyyy-MM-dd"
                                    name="startDate"
                                    value={dates.startDate}
                                    onChange={date => {UpdateSearchDates('startDate', date)}}
                                    animateYearScrolling
                                    disabled={searchType !== 'DATES'}
                                />
                            </div>
                            <div className="uk-width-1-3@s uk-margin-small-top">
                                <DatePicker
                                    style={{width: '100%'}}
                                    margin="normal"
                                    id="end-date"
                                    label="End Date"
                                    format="yyyy-MM-dd"
                                    name="endDate"
                                    value={dates.endDate}
                                    onChange={date => {UpdateSearchDates('endDate', date)}}
                                    animateYearScrolling
                                    disabled={searchType !== 'DATES'}
                                />
                            </div>

                            <div className="uk-width-1-3@s uk-margin-small-top">
                                <div className="uk-form-label uk-text-left">Quick Select Date Range</div>
                                <div className="uk-form-controls uk-grid-small" data-uk-grid>
                                    <div className="uk-width-1-2 uk-margin-remove-top"><label className="uk-align-left uk-margin-remove-right"><input className="uk-radio" type="radio" name="radio1" disabled={searchType !== 'DATES'}/> Custom</label></div>
                                    <div className="uk-width-1-2 uk-margin-remove-top"><label className="uk-align-left uk-margin-remove-right"><input className="uk-radio" type="radio" name="radio1" disabled={searchType !== 'DATES'}/> 7 Days</label></div>
                                    <div className="uk-width-1-2 uk-margin-remove-top"><label className="uk-align-left uk-margin-remove-right"><input className="uk-radio" type="radio" name="radio1" disabled={searchType !== 'DATES'}/> Match</label></div>
                                    <div className="uk-width-1-2 uk-margin-remove-top"><label className="uk-align-left uk-margin-remove-right"><input className="uk-radio" type="radio" name="radio1" disabled={searchType !== 'DATES'}/> 14 Days</label></div>
                                </div>
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
                                <div className="uk-width-4-5@m uk-width-2-3@s">
                                    <div className="uk-width-1-1"><label>Team</label></div>

                                    <div className="uk-grid-small" data-uk-grid>
                                        <div className="uk-width-5-6">
                                            <Dropdown onChange={(event, data) => {FilterTableTeams(event, data)}} placeholder='All Teams' fluid multiple search selection value={filters.team} options={options}/>
                                        </div>
                                        <div className="uk-width-1-6 uk-inline">
                                            <span onClick={event => {FilterTableTeams(event, {value: []})}} className="uk-position-small uk-position-center-left icon-cursor" uk-icon="close"></span>
                                        </div>
                                    </div>

                                </div>
                                {positionFilter}
                            </div>
                        </form>
                    </div>

                    <hr/>

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
        let params = {
            type: event.target.type.value,
            searchType: searchType
        };

        if (searchType === 'YEARS') {
            params['start'] = event.target.startYear.value.replace('-', '');
            params['end']   = event.target.endYear.value.replace('-', '');
        } else if (searchType === 'DATES') {
            params['start'] = event.target.startDate.value;
            params['end']   = event.target.endDate.value;
        }
        getSkaters(params);
        const tableParams = Object.assign({}, {...params, searchType});
        updateTableConfig(tableParams);
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

    function FilterTableTeams(event, data) {
        event.preventDefault();
        console.log(data.value);
        filterSkaters({type: 'team', value: data.value});
        getSkaters({filter: true});
    }

    function UpdateSearchYears(event) {
        let params = {type: event.target.name, value: event.target.value};
        updateYears(params);
    }

    function UpdateSearchDates(id, date) {
        let params = {type: id, value: date};
        updateDates(params);
    }

    function ToggleSearch(event) {
        searchToggle(event.target.value);
    }
}

function mapStateToProps(state) {
    return {
        skaters: state.skaters,
        filters: state.filters,
        tableConfig: state.tableConfig,
        years: state.years,
        dates: state.dates,
        searchType: state.searchType,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => ({
    getSkaters: (params) => dispatch(GetSkaters(params)),
    filterSkaters: (params) => dispatch(Filter(params)),
    updateTableConfig: (params) => dispatch(UpdateTableConfig(params)),
    updateYears: (params) => dispatch(UpdateYears(params)),
    updateDates: (params) => dispatch(UpdateDates(params)),
    searchToggle: (params) => dispatch(Toggle(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
