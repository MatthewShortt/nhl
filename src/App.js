import React                             from 'react';
import { HashRouter as Router, Route }   from 'react-router-dom';
import PrivateRoute                      from '#components/route/private-route';
import IsOnline                          from '#components/is-online/is-online';
import LogonLayout                       from '#pages/logon/logon';
import Home                              from '#pages/home/home';
import NhlFantasy                        from '#pages/nhl-fantasy/nhl-fantasy';
import { StateProvider }                 from '#state';
import { rootInitialState, rootReducer } from '#state/reducer';
import StandardLayout                    from './components/layout/standard-layout';


export default function App() {
    return (
        <StateProvider initialState={rootInitialState} reducer={rootReducer}>
            <Router>
                <IsOnline>
                    <Route path="/login" component={LogonLayout}/>
                    <StandardLayout>
                        <PrivateRoute exact path='/' component={Home}/>
                        <PrivateRoute path='/fantasy/nhl' component={NhlFantasy}/>
                    </StandardLayout>
                </IsOnline>
            </Router>
        </StateProvider>
    );
};