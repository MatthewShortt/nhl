import React from 'react';
// import './App.css';
// import {ConnectedRouter} from "connected-react-router";
// import {history} from "./store";
// import Stats from "./Stats/Stats";
//
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StateProvider }                  from '#state';
import { rootReducer, rootInitialState }  from '#state/reducer';
import LogonLayout                        from '#pages/logon/logon';

export default function App() {
    return (
        <StateProvider initialState={rootInitialState} reducer={rootReducer}>
            <Router>
                <Route exact path="/" component={LogonLayout}/>
            </Router>
        </StateProvider>
    );
};
