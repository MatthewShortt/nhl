import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./store";
import CreateUser from "./User/Components/CreateUser";

export default function App() {

    return (
        <ConnectedRouter history={history}>
            <Route exact path="/" component={CreateUser}/>
        </ConnectedRouter>
    );
};
