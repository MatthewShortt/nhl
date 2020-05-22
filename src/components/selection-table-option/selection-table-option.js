import React             from 'react';
import { ACTIVE_FILTER } from '../../domain/picks/constants';

function SelectionTableOption({active, player, teams, text}) {

    return (
        <option value={optionValue(player, teams)} selected={isSelected(player, teams)}>{text}</option>
    );

    /**
     * Converts the given values into a JSON string
     *
     * @param position : string
     * @param teams : array
     * @returns {string} - JSON string containing pick filter values given
     */
    function optionValue(position, teams) {
        return `{ "position": "${position}", "teams": "${teams}", "active": "${ACTIVE_FILTER[`${teams}_${position}`]}" }`;
    }

    /**
     *
     * @param position : string
     * @param teams : array
     * @returns {boolean} - Whether or not option is currently selected
     */
    function isSelected(position, teams) {
        return active === ACTIVE_FILTER[`${teams}_${position}`];
    }

}

export default SelectionTableOption;