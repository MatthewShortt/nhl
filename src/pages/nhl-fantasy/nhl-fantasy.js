import React                       from 'react';
import Home                        from '#containers/nhl-fantasy/home';
import Nav                         from '#containers/nhl-fantasy/nav';
import Picks                       from '#containers/nhl-fantasy/picks';
import Standings                   from '#containers/nhl-fantasy/standings';
import PickCompare                 from '#containers/nhl-fantasy/pick-compare';
import { Redirect, Route, Switch } from 'react-router';

function NhlFantasy({ match: { path } }) {
    const PickPage = process.env.REACT_APP_PICKS_OPEN === 'true'
        ? Picks
        : () => <>Pick selection is now closed for round 3.</>;
    return (
        <Switch>
            <Route exact path={path} component={Home}/>
            <Route exact path={`${path}/standings`}>{Nav(Standings)}</Route>
            <Route exact path={`${path}/my-picks`}>{Nav(PickCompare)}</Route>
            <Route exact path={`${path}/make-picks`}>{Nav(PickPage)}</Route>
            <Redirect to={path}/>
        </Switch>
    )
}

export default NhlFantasy;