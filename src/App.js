import React                              from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute                       from '#components/route/private-route';
import LogonLayout                        from '#pages/logon/logon';
import Home                               from '#pages/home/home';
import NhlFantasy                         from '#pages/nhl-fantasy/nhl-fantasy';
import { StateProvider }                  from '#state';
import { rootInitialState, rootReducer }  from '#state/reducer';

export default function App() {
    return (
        <StateProvider initialState={rootInitialState} reducer={rootReducer}>
            <Router>
                <Route path="/login" component={LogonLayout}/>
                <PrivateRoute exact path='/' component={Home}/>
                <PrivateRoute path='/fantasy/nhl' component={NhlFantasy}/>
            </Router>
        </StateProvider>
    );
};