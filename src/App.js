import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import Stats from "./Stats/Stats";

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function App() {

    return (
        <ConnectedRouter history={history}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Route exact path="/" component={Stats}/>
            </MuiPickersUtilsProvider>
        </ConnectedRouter>
    );
};
