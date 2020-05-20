import React                              from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider }                  from '#state';
import { rootInitialState, rootReducer }  from '#state/reducer';
import LogonLayout  from '#pages/logon/logon';
import Home         from '#pages/home/home';
import NhlFantasy from '#pages/nhl-fantasy/nhl-fantasy';
import PrivateRoute from '#components/route/private-route';

export default function App() {
    return (
        <StateProvider initialState={rootInitialState} reducer={rootReducer}>
            <Router>
                <Route path="/login" component={LogonLayout}/>
                <PrivateRoute exact path='/' component={Home}/>
                <Route path='/fantasy/nhl' component={NhlFantasy}/>
            </Router>
        </StateProvider>
    );
};

// import './App.css';
// import {ConnectedRouter} from "connected-react-router";
// import {history} from "./store";
// import Stats from "./Stats/Stats";
//
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';