import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import Stats from "./Stats/Stats";

export default function App() {

    return (
        <ConnectedRouter history={history}>
            <Route exact path="/" component={Stats}/>
        </ConnectedRouter>
    );
};
