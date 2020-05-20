import React          from 'react';
import StandardLayout from '#components/layout/standard-layout';
import Picks          from '#containers/nhl-fantasy/picks';
import Standings      from '#containers/nhl-fantasy/standings';

function NhlFantasy() {

    return (
        <StandardLayout>
            <ul data-uk-tab='connect: #fantasy-switcher'>
                <li><a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Picks</a></li>
                <li><a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Standings</a></li>
                <li><a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Groups</a></li>
            </ul>

            <ul id='fantasy-switcher' className="uk-switcher uk-margin">
                <li><Picks/></li>
                <li><Standings/></li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur, sed do eiusmod.
                </li>
            </ul>
        </StandardLayout>
    );
}

export default NhlFantasy;